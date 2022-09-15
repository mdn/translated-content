---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
tags:
  - Add-ons
  - Extensions
  - NeedsTranslation
  - TopicStub
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json
---
{{AddonSidebar}}

The manifest.json file is a [JSON](/pt-BR/docs/Glossary/JSON)-formatted file, and is the only file that every WebExtension must contain.

Using manifest.json, you specify basic metadata about your extension such as the name and version, and can also specify aspects of your extension's functionality, such as background scripts, content scripts, and browser actions.

manifest.json keys are listed below:

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/manifest.json") }}

`"manifest_version"`, `"version"`, and `"name"` are the only mandatory keys. `"default_locale"` must be present if the "\_locales" directory is present and must be absent otherwise. `"applications"` is not supported in Google Chrome, and is mandatory in Firefox before Firefox 48 and Firefox for Android.

## Compatibilidade com navegadores

{{Compat("webextensions.manifest")}}

## Example

Quick syntax example for manifest.json:

```json
{
  "applications": {
    "gecko": {
      "id": "addon@example.com",
      "strict_min_version": "42.0"
    }
  },

  "background": {
    "scripts": ["jquery.js", "my-background.js"],
    "page": "my-background.html"
  },

  "browser_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Whereami?",
    "default_popup": "popup/geo.html"
  },

  "commands": {
    "toggle-feature": {
      "suggested_key": {
        "default": "Ctrl+Shift+Y",
        "linux": "Ctrl+Shift+U"
      },
      "description": "Send a 'toggle-feature' event"
    }
  },

  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'",

  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ],

  "default_locale": "en",

  "description": "...",

  "icons": {
    "48": "icon.png",
    "96": "icon@2x.png"
  },

  "manifest_version": 2,

  "name": "...",

  "page_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Whereami?",
    "default_popup": "popup/geo.html"
  },

  "permissions": ["webNavigation"],

  "version": "0.1",

  "web_accessible_resources": ["images/my-image.png"]
}
```
