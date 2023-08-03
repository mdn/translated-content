---
title: Constructeur FinalizationRegistry()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
---

{{JSRef}}

Le constructeur **`FinalizationRegistry`** crée un objet [`FinalizationRegistry`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) qui utilise la fonction de rappel passée en argument comme fonction de nettoyage pour les objets du registre.

## Syntaxe

```js
// Fonction de rappel avec une fonction fléchée
new FinalizationRegistry(valeurTenue => { ... } )

// Référence à une fonction de rappel
new FinalizationRegistry(callbackFn)

// Fonction de rappel en ligne
new FinalizationRegistry(function(valeurTenue) { ... })
```

### Paramètres

- `callback`
  - : La fonction de rappel de nettoyage à utiliser par le registre.

## Exemples

### Créer un nouveau registre

On crée le registre en fournissant la fonction de rappel&nbsp;:

```js
const registre = new FinalizationRegistry((valeurTenue) => {
  // ....
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`FinalizationRegistry`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)
