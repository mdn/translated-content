---
title: WeakRef.prototype.deref()
slug: Web/JavaScript/Reference/Global_Objects/WeakRef/deref
---

{{JSRef}}

La méthode `deref` renvoie l'objet cible associé à l'objet [`WeakRef`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) courant ou `undefined` si l'objet cible a été récupéré par le ramasse-miettes.

## Syntaxe

```js
deref();
```

### Valeur de retour

L'objet cible associé à l'objet `WeakRef`, ou `undefined` dans le cas où l'objet a été récupéré par le ramasse-miettes.

## Notes

Voir [les notes sur la page `WeakRef`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#notes_sur_weakref) pour des notes importantes.

## Exemples

### Utiliser deref()

Voir la section [Exemples](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#exemples) de la page [`WeakRef`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) pour un exemple complet.

```js
const tick = () => {
  // Récupérer l'élément de la référence faible s'il existe encore
  const element = this.ref.deref();
  if (element) {
    element.textContent = ++this.count;
  } else {
    // Alors l'élément n'existe plus
    console.log("L'élément n'est plus.");
    this.stop();
    this.ref = null;
  }
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`WeakRef`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)
