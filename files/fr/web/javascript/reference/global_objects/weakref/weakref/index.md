---
title: Constructeur WeakRef()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
---

{{JSRef}}

Le constructeur **`WeakRef`** crée un objet [`WeakRef`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
qui représente une référence faible vers un objet cible.

## Syntaxe

```js
new WeakRef(objetCible);
```

### Paramètres

- objetCible
  - : L'objet cible auquel l'objet `WeakRef` devrait faire référence (également appelé _référent_).

## Exemples

### Créer un nouvel objet WeakRef

Voir la page principale de [`WeakRef`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#exemples) pour un exemple complet.

```js
class Counter {
  constructor(element) {
    // Construit une référence faible vers un élément du DOM
    this.ref = new WeakRef(element);
    this.start();
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`WeakRef`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
