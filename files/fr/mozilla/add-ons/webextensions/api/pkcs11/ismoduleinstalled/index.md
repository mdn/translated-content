---
title: pkcs11.isModuleInstalled()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/isModuleInstalled
---

{{AddonSidebar()}}

Vérifie si le module PKCS #11 nommé est actuellement installé dans Firefox.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var checking = browser.pkcs11.isModuleInstalled(
  name, // string
);
```

### Paramètres

- `name`
  - : `string`. Nom du module à vérifier.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec `true` si le module est installé, `false` sinon.

Si une erreur se produit dans le module, la promise sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Vérifie sir le module nommée "pkcs11_module" est installé :

```js
function logIsInstalled(isInstalled) {
  console.log(`Module is installed: ${isInstalled}`);
}

browser.pkcs11.isModuleInstalled("pkcs11_module").then(logIsInstalled);
```

{{WebExtExamples}}
