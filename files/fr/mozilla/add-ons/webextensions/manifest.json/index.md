---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
tags:
  - Add-ons
  - Extensions
  - Overview
  - WebExtensions
  - manifest.json
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json
---
{{AddonSidebar}}

> **Note :** Cet article décrit manifest.json pour les extensions web. Si vous cherchez des informations sur le manifeste.json dans les PWAs, consultez l'article [Web App Manifest](/fr/docs/Web/Manifest).

Le fichier `manifest.json` est le seul fichier que chaque extension utilisant les API WebExtension doit contenir.

En utilisant `manifest.json`, vous spécifiez les métadonnées basiques de votre extension comme son nom et sa version, et des fonctionnalités de votre extension comme les scripts en arrière-plan (les scripts de contenu et les actions du navigateur).

C'est un fichier au format [JSON](/fr/docs/Glossaire/JSON) à une exception près : il peut contenir des commentaires de type "`//`".

## List of manifest.json keys

Les clés `manifest.json` sont listées ci-dessous:

{{ListSubpages("/en-US/Add-ons/WebExtensions/manifest.json")}}

### Notes about manifest.json keys

- `"manifest_version"`, `"version"`, and `"name"` sont les seules clés obligatoires.
- `"default_locale"` doit être présent si le répertoire "`_locales`" est présent et sinon doit être absent.
- `"browser_specific_settings"` n'est pas prise en charge dans Google Chrome

### Accessing manifest.json keys at runtime

Vous pouvez accéder au manifest de votre extension depuis le JavaScript de l'extension en utilisant la fonction {{WebExtAPIRef("runtime.getManifest()")}} :

```js
browser.runtime.getManifest().version;
```

## Exemple

Le bloc ci-dessous contient la syntaxe de base de certaines clés communes du manifest

> **Note :** Il ne s'agit pas d'un exemple à copier-coller. Le choix des clés dont vous aurez besoin dépend de l'extension que vous développez.

Pour des exemples complets d'extensions, voir [Exemple d'extensions](/fr/Add-ons/WebExtensions/Examples).

```json
{
  "browser_specific_settings": {
    "gecko": {
      "id": "addon@example.com",
      "strict_min_version": "42.0"
    }
  },

  "background": {
    "scripts": ["jquery.js", "my-background.js"],
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

  "user_scripts": {
    "api_script": "apiscript.js",
  },

  "web_accessible_resources": ["images/my-image.png"]
}
```

## Compatibilité du navigateur

Pour un aperçu complet de toutes les clés de manifeste et de leurs sous-clés, [voir le tableau complet de compatibilité du navigateur manifest.json](/fr/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json).

{{Compat("webextensions.manifest")}}

## Voir aussi

{{WebExtAPIRef("permissions")}} JavaScript API
