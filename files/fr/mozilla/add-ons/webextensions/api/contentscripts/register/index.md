---
title: contentScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
tags:
  - API
  - Extensions
  - Méthode
  - Reference
  - contentScripts
  - register
translation_of: Mozilla/Add-ons/WebExtensions/API/contentScripts/register
---
{{AddonSidebar()}}

Utilisez cette fonction pour enregistrer un ou plusieurs scripts de contenu.

Il accepte un paramètre, qui est un objet avec des propriétés similaires aux objets donnés dans la clé du manifest [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts) (mais notez que `content_scripts` est un tableau d'objets, tandis que l'argument de `register()` est un simple objet).

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var registering = browser.contentScripts.register(
  contentScriptOptions       // object
)
```

### Paramètres

- `contentScriptOptions`

  - : `object`. Un objet `RegisteredContentScriptOptions` représentant les scripts de contenu à enregistrer. Sa syntaxe est similaire à celle des objets du tableau de clés de manifest [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts).  Les différences sont :

    - les noms de propriété utilisent camelCase plutôt que des traits de soulignement (par exemple, `excludeMatches`, pas `exclude_matches`
    - les propriétés `js` et `css` vous permettent d'enregistrer des chaînes ainsi que des URL, leur syntaxe doit donc distinguer ces types.

    L'objet `RegisteredContentScriptOptions` a les propriétés suivantes :

    - `allFrames`{{optional_inline}}
      - : Identique à `all_frames` dans la clé [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `css`{{optional_inline}}
      - : Un tableau d'objets. Chaque objet possède soit une propriété nommée `file`, qui est une URL commençant par manifest.json de l'extension et pointant vers un fichier CSS à enregistrer, soit une propriété nommée `code`, qui est un code CSS à enregistrer.
    - `excludeGlobs`{{optional_inline}}
      - : Identique à `exclude_globs` dans la clé [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `excludeMatches`{{optional_inline}}
      - : Identique à `exclude_matches` dans la clé [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `includeGlobs`{{optional_inline}}
      - : Identique à `include_globs` dans la clé [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `js`{{optional_inline}}
      - : Un tableau d'objets. Chaque objet possède soit une propriété nommée `file`, qui est une URL commençant par manifest.json de l'extension et pointant vers un fichier JavaScript à enregistrer, soit une propriété nommée `code`, qui est du code JavaScript à enregistrer.
    - `matchAboutBlank`{{optional_inline}}
      - : Identique à `match_about_blank` dans la clé [`content_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `matches`
      - : Identique à `matches` dans la clé [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts).
    - `runAt`{{optional_inline}}
      - : Identique à `run_at` dans la clé [`content_scripts`](/fr/Add-ons/WebExtensions/manifest.json/content_scripts).

### Return value

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} que vous pouvez utiliser pour annuler l'enregistrement des scripts de contenu.

Actuellement, les scripts de contenu ne sont pas enregistrés lorsque la page d'extension correspondante (à partir de laquelle les scripts de contenu ont été enregistrés) est déchargée, vous devez donc enregistrer un script de contenu depuis une page d'extension qui persiste au moins aussi longtemps que vous voulez que les scripts de contenu restent enregistrés.

## Compatibilité du navigateur

{{Compat("webextensions.api.contentScripts.register", 10)}}

## Exemples

Cet exemple enregistre le script de contenu `defaultCode`  pour toutes les URL `.org` :

```js
const defaultHosts = "*://*.org/*";
const defaultCode = "document.body.innerHTML = '<h1>This page has been eaten<h1>'";

async function register(hosts, code) {

  return await browser.contentScripts.register({
    matches: [hosts],
    js: [{code}],
    runAt: "document_idle"
  });

}

var registered = register(defaultHosts, defaultCode);
```

Ce code enregistre le fichier JS à l'adresse content_scripts/example.js:

```js
const scriptObj = await browser.contentScripts.register({
  "js": [{file: "/content_scripts/example.js"}],
  "matches": ["<all_urls>"],
  "allFrames": true,
  "runAt": "document_start"
});
```

{{WebExtExamples}}
