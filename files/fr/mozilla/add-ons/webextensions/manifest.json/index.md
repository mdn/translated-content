---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
l10n:
  sourceCommit: 6d09b387b3a5137be8fc24137d8052403d26ecc6
---

> [!NOTE]
> Cet article décrit le fichier `manifest.json` pour les extensions web. Si vous cherchez des informations sur le `manifest.json` dans les PWA, consultez l'article [Web App Manifest](/fr/docs/Web/Progressive_web_apps/Manifest).

Le fichier `manifest.json` est le seul fichier que toute extension utilisant les API WebExtension doit contenir.

Avec `manifest.json`, vous définissez les métadonnées de base de votre extension, telles que le nom et la version, et vous pouvez également définir certains aspects des fonctionnalités de votre extension (tels que les scripts d'arrière-plan, les scripts de contenu et les actions du navigateur).

Il est au format {{Glossary("JSON")}} avec une exception&nbsp;: il peut contenir des commentaires sous la forme `// toto titi`.

## Liste des clés du fichier `manifest.json`

Les différentes clés utilisées dans le fichier `manifest.json` sont listées ici&nbsp;:

- [action](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) (Manifest V3 et supérieur)
- [author](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)
- [background](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)
- [browser_action](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) (Manifest V2 seulement)
- [browser_specific_settings](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)
- [chrome_settings_overrides](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides)
- [chrome_url_overrides](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides)
- [commands](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [content_scripts](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)
- [content_security_policy](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy)
- [dark_theme](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme)
- [declarative_net_request](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request)
- [default_locale](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale)
- [description](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description)
- [developer](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer)
- [devtools_page](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)
- [dictionaries](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dictionaries)
- [externally_connectable](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) (N'est pas pris en charge dans Firefox)
- [homepage_url](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url)
- [host_permissions](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) (Manifest V3 et supérieur)
- [icons](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)
- [incognito](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito)
- [manifest_version](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)
- [name](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)
- [omnibox](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)
- [optional_host_permissions](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_host_permissions) (Manifest V3 et supérieur)
- [optional_permissions](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)
- [options_page](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page)
- [options_ui](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui)
- [page_action](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) (Manifest V2 seulement dans Chrome)
- [permissions](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- [protocol_handlers](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) (Firefox seulement)
- [short_name](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name)
- [sidebar_action](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [storage](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) (N'est pas pris en charge dans Firefox)
- [theme](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)
- [theme_experiment](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) (Firefox seulement) (expérimental)
- [user_scripts](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) (Manifest V2 seulement)
- [version](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)
- [version_name](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name)
- [web_accessible_resources](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources)

### Notes sur les clés du fichier `manifest.json`

- `"manifest_version"`, `"version"`, et `"name"` sont les seules clés obligatoires.
- `"default_locale"` doit être présente si le répertoire `_locales` est présent, elle doit être absente sinon.
- `"browser_specific_settings"` n'est pas prise en charge par Google Chrome.

### Accéder aux clés du fichier `manifest.json` à l'exécution

Il est possible d'accéder au manifeste de l'extension depuis le code de l'extension, à l'aide de la fonction {{WebExtAPIRef("runtime.getManifest()")}}&nbsp;:

```js
browser.runtime.getManifest().version;
```

## Exemple

Le bloc qui suit illustre la syntaxe de certaines des clés les plus fréquemment utilisées.

> [!NOTE]
> Il ne s'agit pas d'un exemple prêt à copier-coller. Lorsque vous développez une extension, sélectionnez avec soin les clés dont vous avez besoin.

Pour des exemples complets d'extensions, vous pouvez consulter [ces exemples d'extensions](/fr/docs/Mozilla/Add-ons/WebExtensions/Examples).

```json
{
  "browser_specific_settings": {
    "gecko": {
      "id": "@exemple-extension",
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
      "description": "Envoyer un évènement 'toggle-feature'"
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

  "description": "…",

  "icons": {
    "48": "icon.png",
    "96": "icon@2x.png"
  },

  "manifest_version": 2,

  "name": "…",

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

{{Compat}}

## Voir aussi

- L'API JavaScript {{WebExtAPIRef("permissions")}}
