---
title: pkcs11.getModuleSlots()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/getModuleSlots
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - getModuleSlots
  - pkcs11
translation_of: Mozilla/Add-ons/WebExtensions/API/pkcs11/getModuleSlots
---
{{AddonSidebar()}}

Enumérer les emplacements d'un module. Cette fonction renvoie un tableau contenant une entrée pour chaque emplacement. Chaque entrée contient le nom de l'emplacement et, si l'emplacement contient un jeton, des informations sur le jeton.

Vous ne pouvez appeler cela que pour un module installé dans Firefox

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getting = browser.pkcs11.getModuleSlots(
  name              // string
)
```

### Paramètres

- `name`
  - : `string`. Nom du module. Cela doit correspondre à la propriété `name` dans le [manifest PKCS #11](/fr/Add-ons/WebExtensions/Native_manifests#PKCS_11_manifests) pour le module.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un tableau d'objets, un pour chaque emplacement auquel le module donne accès. Chaque objet a deux propriétés :

- `name`: le nom de l'emplacement
- `token`: si un jeton est présent dans cet emplacement, un objet `Token`. Si aucun le jeton n'est présent dans l'emplacement, la propriété est `null`.

`Token` Les objets ont les propriétés suivantes :

- `name`
  - : `string`. Nom du jeton.
- `manufacturer`
  - : `string`. Nom du jeton fabriqué.
- `HWVersion`
  - : `string`. Version matérielle, en tant que numéro de version PKCS #11 (deux entiers 32-bit séparés par un point, comme "1.0".
- `FWVersion`
  - : `string`. Version du micrologiciel, en tant que numéro de version PKCS #11 (deux 32-bit séparés par un point, comme "1.0".
- `serial`
  - : `string`. Numéro de série, dont le format est défini par la spécification de jeton.
- `isLoggedIn`
  - : `boolean`: `true` si le jeton est déjà connecté, `false` sinon.

Si le module n'a pas pu être trouvé ou qu'une autre erreur se produit, la promise sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.pkcs11.getModuleSlots")}}

## Exemples

Installe un module, puis dresse la liste de ses emplacements et liste des jetons qu'ils contiennent :

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
      console.log('Is empty');
    }
  }
}

browser.pkcs11.installModule("my_module")
.then(onInstalled)
.then(onGotSlots);
```

{{WebExtExamples}}
