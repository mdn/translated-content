---
title: userScripts.register()
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/register
tags:
  - Add-ons
  - Extensions
  - Méthode
  - User Scripts API
  - WebExtensions
  - register
  - userScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/userScripts/register
---
{{AddonSidebar}}

Dans les pages d'une extension (comme la page d'arrière plan), l'API userScripts fournit une méthode API  {{WebExtAPIRef("userScripts.register","register()")}}. Cette méthode est très similaire à la méthode API  {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} (par exemple, ils retournent tous les deux une promise qui est résolue à un objet API qui fournit un   {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}} pour la désinscription du script enregistré de tous les processus enfants), avec quelques différences dans les options prises en charge.

C'est une méthode asynchrone qui retourne un {{JSxRef("Promise")}}.

## Syntaxe

```js
const registeredUserScript = await browser.userScripts.register(
  userScriptOptions       // object
);
….
await registeredUserScript.unregister();
```

### Paramètres

- `userScriptOptions`

  - : `object`. Un objet `UserScriptOptions` représentant les scripts de contenu à enregistrer. Il a une syntaxe similaire aux options supportées par {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}.

    L'objet `UserScriptOptions` possède les propriétés suivantes :

    - scriptMetadata `{{Optional_Inline}}`
      - : Un objet `JSON` qui contient certaines propriétés de métadonnées associées aux `userScripts` enregistrés
    - `allFrames {{Optional_Inline}}`
      - : Identiques à `all_frames` dans la clé [`user_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).
    - `excludeGlobs` {{Optional_Inline}}
      - : Identique à `exclude_globs` dans la clé [`user_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).
    - `excludeMatches` {{Optional_Inline}}
      - : Identique à `exclude_matches` dans la clé [`user_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).
    - `includeGlobs` {{Optional_Inline}}
      - : Identique à `include_globs` dans la clé [`user_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).
    - `js` {{Optional_Inline}}
      - : Un tableau d'objets. Chaque objet a soit une propriété nommée `file`, qui est une URL commençant par le fichier manifest.json de l'extension et pointant vers un fichier JavaScript à enregistrer, soit une propriété nommée `code`, qui est un code JavaScript à enregistrer.
    - `matchAboutBlank` {{Optional_Inline}}
      - : Identique à `match_about_blank` dans la clé [`user_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).
    - `matches`
      - : Identique à `matches` dans la clé [`user_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).
    - `runAt` {{Optional_Inline}}
      - : Identique à`run_at` dans la clé [`user_scripts`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).

Contrairement aux options de script de contenu, l'objet userScriptOptions n'a pas de propriété css. Utilisez {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}} pour enregistrer/désenregistrer dynamiquement les feuilles de style).

### Valeur retournée

Une {{JSxRef("Promise")}} qui sera rempli avec un objet  {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} que vous pouvez utiliser pour désinscrire ce script utilisateur particulier.

> **Note :** Actuellement, les scripts utilisateur sont désenregistrés lorsque la page d'extension correspondante (à partir de laquelle les scripts utilisateur ont été enregistrés) est déchargée, vous devez donc enregistrer un script utilisateur depuis une page d'extension qui persiste au moins aussi longtemps que vous voulez que les scripts utilisateur restent enregistrés.

## Compatibilité du navigateur

{{Compat("webextensions.api.userScripts.register", 10)}}

## Voir aussi

- {{WebExtAPIRef("contentScripts.register","contentScripts.register()")}}
- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","RegisteredUserScript.unregister()")}}
