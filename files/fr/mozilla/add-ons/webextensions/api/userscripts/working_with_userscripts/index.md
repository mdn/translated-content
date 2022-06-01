---
title: Travailler avec userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts
tags:
  - API
  - Extensions
  - How-to
  - Tutorial
  - userScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts
original_slug: Mozilla/Add-ons/WebExtensions/API/userScripts/travailler_avec_userScripts
---
{{AddonSidebar}}

En implémentant userScripts, les développeurs d'extension peuvent modifier l'apparence et/ou le fonctionnement des sites pour mieux répondre aux besoins des utilisateurs.

Implémentez userScripts dans votre extension en suivant les étapes suivantes :

1.  Définissez le script dans le manifeste de l'extension à l'aide de la clé `"user_scripts"`.
2.  Enregistrer le userScript
3.  Implémenter les fonctions userScript

Passons en revue les processus à l'aide d'un petit exemple d'extension Web qui illustre le processus. L'exemple est disponible dans le dépôt [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub.

## Manifest userScripts

Un script utilisateur est identifié par le contenu de la clé [user_scripts](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) du manifeste des extensions. L'information minimale pour la clé `user_scripts` serait :

```json
  "user_scripts": {
    "api_script": "customUserScriptAPIs.js"
  }
```

La propriété "api_script" indique le chemin d'accès au fichier JavaScript qui contient le code du `userScript`.

## Charge l'extension d'exemple

Une fois que vous avez téléchargé l'exemple  :

Naviguez jusqu'à about:debugging, cliquez sur **Charger temporairement une extension...** et double-cliquez sur le manifest des extensions.

/Le code par défaut inclus dans l'exemple vous permet de charger un `userScript` qui va "manger" le contenu des pages correspondant à l'entrée Hosts. Effectuez tous les changements que vous voulez faire avant de cliquer sur le bouton **Enregistrer le script** au bas du panneau.

Dans l'image suivante, l'extension va "manger" le contenu des pages dont le nom de domaine se termine par.org. C'est le comportement par défaut pour cette extension.

![](userScriptExample.png)

Rien ne se passera tant que vous n'aurez pas cliqué sur le bouton **Enregistrer le script**. Le bouton implémente le script utilisateur en fonction des paramètres de cette boîte de dialogue. Cela signifie que vous pouvez expérimenter le comportement du script sans avoir à implémenter une extension vous-même.

## Register the userScript

Avant qu'un userScript puisse être exécuté, il doit être enregistré en utilisant la méthode  `userScripts.register()`. Voici le code pour enregistrer l'extension d'exemple :

```js
async function registerScript() {
  const params = {
    hosts: stringToArray(hostsInput.value),
    code: codeInput.value,
    excludeMatches: stringToArray(excludeMatchesInput.value),
    includeGlobs: stringToArray(includeGlobsInput.value),
    excludeGlobs: stringToArray(excludeGlobsInput.value),
    runAt: runAtInput.value,
    matchAboutBlank: stringToBool(matchAboutBlankInput.value),
    allFrames: stringToBool(allFramesInput.value),
    scriptMetadata: {name: scriptNameInput.value || null},
  };

  // Store the last submitted values to the extension storage
  // (so that they can be restored when the popup is opened
  // the next time).
  await browser.storage.local.set({
    lastSetValues: params,
  });

  try {
    // Clear the last userScripts.register result.
    lastResultEl.textContent = "";

    await browser.runtime.sendMessage(params);
    lastResultEl.textContent = "UserScript successfully registered";
    // Clear the last userScripts.register error.
    lastErrorEl.textContent = "";

    // Clear the last error stored.
    await browser.storage.local.remove("lastError");
  } catch (e) {
    // There was an error on registering the userScript,
    // let's show the error message in the popup and store
    // the last error into the extension storage.

    const lastError = `${e}`;
    // Show the last userScripts.register error.
    lastErrorEl.textContent = lastError;

    // Store the last error.
    await browser.storage.local.set({lastError});
  }
}
```

Ce code initialise d'abord l'objet params pour passer les valeurs à la méthode  [userScripts.register](/fr/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/register).

## Implementer les fonctions userScript

Une fois le script enregistré, naviguez vers une page dont le nom de domaine se termine par .org, et vous verrez quelque chose comme ceci :

![](user_script_in_action.png)

## Voir aussi

- {{WebExtAPIRef("userScripts")}}
- {{WebExtAPIRef("userScripts.register()", "userScripts.register()")}}
- {{WebExtAPIRef("userScripts.onBeforeScript")}}
