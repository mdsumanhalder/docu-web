import { Component } from '@angular/core';

/**
 * High level metadata about the demo application displayed in the hero header.
 */
export interface AppInfo {
  /** Display title shown to users. */
  title: string;

  /** Person responsible for the documentation demo. */
  owner: string;

  /** Semantic version number displayed in the UI. */
  version: string;

  /** Short description used in the hero copy. */
  description: string;

  /** Link to the repository so readers can inspect the source. */
  repositoryUrl: string;
}

/**
 * Describes a property we surface to explain how Compodoc reads class members.
 */
export interface DocumentedProperty {
  /** The property name surfaced in the UI. */
  name: string;

  /** The type or sample value shown next to the property name. */
  value: string;

  /** Human friendly explanation of why the property exists. */
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Metadata for the documentation walkthrough header and hero section.
   */
  readonly appInfo: AppInfo = {
    title: 'Compodoc Property Walkthrough',
    owner: 'Docs & DX',
    version: '1.0.0',
    description: 'A small Angular shell that highlights documented properties pulled into Compodoc.',
    repositoryUrl: 'https://github.com/mdsumanhalder/docu-web'
  };

  /**
   * Catalogue of properties rendered on the page so readers can see exactly
   * what Compodoc will pick up when generating the static site.
   */
  readonly documentedProperties: DocumentedProperty[] = [
    {
      name: 'appInfo',
      value: 'AppInfo',
      description: 'Structured metadata displayed in the header and reused in docs.'
    },
    {
      name: 'documentedProperties',
      value: 'DocumentedProperty[]',
      description: 'A simple property inventory that feeds the property cards.'
    },
    {
      name: 'compodocTips',
      value: 'string[]',
      description: 'Quick reminders rendered as a checklist for running Compodoc.'
    },
    {
      name: 'documentationCurrent',
      value: 'boolean',
      description: 'Flag toggled by the call-to-action to show freshness in the UI.'
    },
    {
      name: 'documentationStatus',
      value: 'getter',
      description: 'Derived message that Compodoc will document alongside other members.'
    }
  ];

  /**
   * Copy surfaced in the "Compodoc" checklist, intended to make the
   * documentation workflow discoverable for new contributors.
   */
  readonly compodocTips: string[] = [
    'Annotate properties with short descriptions so Compodoc can surface them cleanly.',
    'Run `npm run compodoc:build` to regenerate the static docs into `docs/`.',
    'Use `npm run compodoc:build-and-serve` when you want a local preview on port 8080.'
  ];

  /**
   * Indicates whether documentation has been refreshed for the current session.
   * The call-to-action in the template flips this to true.
   */
  documentationCurrent = false;

  /**
   * Human-friendly status string derived from the documentation freshness flag.
   */
  get documentationStatus(): string {
    return this.documentationCurrent
      ? 'Documentation is marked fresh for this branch.'
      : 'Documentation needs to be regenerated.';
  }

  /**
   * Marks documentation as refreshed so the derived status updates.
   */
  markDocumentationAsFresh(): void {
    this.documentationCurrent = true;
  }
}
