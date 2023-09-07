---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
---

{{AddonSidebar}}

> **Note :** Cet article décrit le format du fichier `manifest.json` pour les extensions web. Si vous cherchez des informations quant au manifeste des applications web progressives (PWA), consultez plutôt [l'article sur les manifestes d'application web](/fr/docs/Web/Manifest).

Le fichier `manifest.json` est le seul fichier que toute extension basée sur les API WebExtension doit contenir.

Avec `manifest.json`, on fournit les différentes métadonnées simples de l'extension, comme le nom et la version. On peut également y définir certains aspects des fonctionnalités de l'extension (tels que les scripts d'arrière-plan, les scripts de contenu et les actions du navigateur).

Ce fichier est au format [JSON](/fr/docs/Glossary/JSON) avec une exception&nbsp;: il peut contenir des commentaires sous la forme `// toto titi`.

## Liste des clés du fichier `manifest.json`

Les différentes clés utilisées dans le fichier `manifest.json` sont listées ici&nbsp;:

{{ListSubpages("/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json")}}

### Notes sur les clés du fichier `manifest.json`

- `"manifest_version"`, `"version"`, et `"name"` sont les seules clés obligatoires.
- `"default_locale"` doit être présente si le répertoire "`_locales`" est présent&nbsp;; elle doit être absente sinon.
- `"browser_specific_settings"` n'est pas prise en charge par Google Chrome.

### Accéder aux clés du fichier `manifest.json` à l'exécution

Il est possible d'accéder au manifeste de l'extension depuis le code de l'extension, à l'aide de la fonction [`runtime.getManifest()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getManifest)&nbsp;:

```js
browser.runtime.getManifest().version;
```

## Exemple

Le bloc qui suit illustre la syntaxe de certaines des clés les plus fréquemment utilisées.

> **Note :** Il ne s'agit pas d'un exemple prêt à copier-coller. Lorsque vous développez une extension, sélectionnez avec soin les clés dont vous avez besoin.

Pour des exemples complets d'extensions, vous pouvez consulter [ces exemples d'extensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Examples).

```json
{
  "browser_specific_settings": {
    "gecko": {
      "id": "addon@example.com",
      "strict_min_version": "42.0"
    }
  },

  "background": {
    "scripts": ["jquery.js", "mon-script-arriere-plan.js"]
  },

  "browser_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Oùsuisje?",
    "default_popup": "popup/geo.html"
  },

  "commands": {
    "toggle-feature": {
      "suggested_key": {
        "default": "Ctrl+Shift+Y",
        "linux": "Ctrl+Shift+U"
      },
      "description": "Utiliser un évènement 'toggle-feature'"
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
    "default_title": "Oùsuisje?",
    "default_popup": "popup/geo.html"
  },

  "permissions": ["webNavigation"],

  "version": "0.1",

  "user_scripts": {
    "api_script": "apiscript.js"
  },

  "web_accessible_resources": ["images/mon-image.png"]
}
```

## Compatibilité des navigateurs

Pour un aperçu complet de l'ensemble des clés de manifeste et des sous-clés correspondantes, voir [le tableau de compatibilité complet pour `manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json).

{{Compat}}

## Voir aussi

- L'API JavaScript [`permissions`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/permissions)
