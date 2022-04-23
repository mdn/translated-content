---
title: privacy.services
slug: Mozilla/Add-ons/WebExtensions/API/privacy/services
tags:
  - API
  - Add-ons
  - Extensions
  - Privacy
  - Property
  - Reference
  - Services
translation_of: Mozilla/Add-ons/WebExtensions/API/privacy/services
---
{{AddonSidebar}}

La propriété {{WebExtAPIRef("privacy.services")}} contient des paramètres liés à la vie privée contrôlant les services offerts par le navigateur ou par des tiers. Chaque propriété est un objet  {{WebExtAPIRef("types.BrowserSetting")}}.

## Propriétés

- `passwordSavingEnabled`
  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur contenue est un booléen. Si il est défini à `true`, le gestionnaire de mot de passe du navigateur proposera de stocker des mots de passe lorsque l'utilisateur les entrera. La valeur par défaut est : `true`.

## Compatibilité du navigateur

{{Compat("webextensions.api.privacy.services", 10)}}

## Exemples

Désactivation, si possible, du gestionnaire de mot de passe.

```js
function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

  var getting = browser.privacy.services.passwordSavingEnabled.get({});
  getting.then((got) => {
    console.log(got.value);
    if ((got.levelOfControl === "controlled_by_this_extension") ||
        (got.levelOfControl === "controllable_by_this_extension")) {
      var setting = browser.privacy.services.passwordSavingEnabled.set({
        value: false
      });
      setting.then(onSet);
    } else {
      console.log("Not able to set passwordSavingEnabled");
    }
  });
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.privacy`](https://developer.chrome.com/extensions/privacy).
