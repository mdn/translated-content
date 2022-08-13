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

Die Datei manifest.json ist eine [JSON](/de/docs/Glossary/JSON)-formatierte Datei, und die einzige Datei, die eine Erweiterung, die das WebExtensions API verwendet, unterstützt.

Durch das Verwenden von manifest.json, legst du Metadaten, wie zum Beispiel Name und Version, für deine Erweiterung fest, und kannst auch einige Aspekte der Funktionalität deiner Erweiterung,wie zum Beispiel Hintergrundskripte, Inhaltsskripte und Browserationen.

Manifest.json keys sind unten gelistet:

{{ ListSubpages ("/en-US/Add-ons/WebExtensions/manifest.json") }}

`"manifest_version"`, `"version"`, und `"name"` sind die einzigen verpflichtenden Keys. `"default_locale"` muss vorhanden sein, wenn der "\_locales"-Ordner vorhanden ist und darf sonst nicht vorhanden sein. `"applications"` wird von Google Chrome nicht unterstützt, und ist verpflichtend in Firefox vor Firefox 48 und Firefox für Android.

## Browserkompatiblität

{{Compat("webextensions.manifest")}}

## Beispiel

Hier ein kurzes Syntax-Beispiel für manifest.json:

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
