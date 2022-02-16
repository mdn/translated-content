---
title: pkcs11.uninstallModule()
slug: Mozilla/Add-ons/WebExtensions/API/pkcs11/uninstallModule
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - pkcs11
  - uninstallModule
translation_of: Mozilla/Add-ons/WebExtensions/API/pkcs11/uninstallModule
---
{{AddonSidebar()}}

Désinstalle le module PKCS #11 nommé de Firefox.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var uninstalling = browser.pkcs11.uninstallModule(
  name              // string
)
```

### Paramètres

- `name`
  - : `string`. Nom du module à désinstaller. Cela doit correspondre à la propriété `name` dans le [manifest PKCS #11](/fr/Add-ons/WebExtensions/Native_manifests#PKCS_11_manifests) pour le module.

### Return value

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera accompli sans arguments une fois le module désinstallée.

Si le module n'a pas pu être trouvé ou qu'une autre erreur se produit, la promise sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.pkcs11.uninstallModule", 10)}}

## Exemples

Désinstalle le module nommé "pkcs11_module" :

```js
browser.pkcs11.uninstallModule("pkcs11_module");
```

{{WebExtExamples}}
