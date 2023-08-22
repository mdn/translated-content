---
title: pkcs11.installModule()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/installModule
---

{{AddonSidebar()}}

Installe le module PKCS # 11 nommé, le rendant disponible pour Firefox

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var installing = browser.pkcs11.installModule(
  name, // string
  flags, // integer
);
```

### Paramètres

- `name`
  - : `string`. Nom du module à installer. Cela doit correspondre à la propriété `name` property dans le [manifest PKCS #11](/fr/Add-ons/WebExtensions/Native_manifests#PKCS_11_manifests) pour le module.
- `flags`{{optional_inline}}
  - : `integer`. Drapeaux à transmettre au module.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera accompli sans arguments une fois le module installé.

Si le module n'a pas pu être trouvé ou qu'une autre erreur se produit, la promise sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Installe un module, puis dresse la liste de ses emplacements et liste les jetons qu'ils contiennent :

```js
function onInstalled() {
  return browser.pkcs11.getModuleSlots("my_module");
}

function onGotSlots(slots) {
  for (slot of slots) {
    console.log(`Slot: ${slot.name}`);
    if (slot.token) {
      console.log(`Contains token: ${slot.token.name}`);
    } else {
      console.log("Is empty");
    }
  }
}

browser.pkcs11.installModule("my_module").then(onInstalled).then(onGotSlots);
```

{{WebExtExamples}}
