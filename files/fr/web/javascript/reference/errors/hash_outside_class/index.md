---
title: 'SyntaxError: Unexpected ''#'' used outside of class body'
slug: Web/JavaScript/Reference/Errors/Hash_outside_class
translation_of: Web/JavaScript/Reference/Errors/Hash_outside_class
---
{{jsSidebar("Errors")}}

L'expression JavaScript "Unexpected '#' used outside of class body" (qu'on peut traduire par «&nbsp;'#' inattendu en dehors d'un corps de classe&nbsp;») se produit lorsqu'un croisillon («&nbsp;#&nbsp;») est trouvé dans un contexte inattendu, notamment [en dehors d'une déclaration de classe](/fr/docs/Web/JavaScript/Reference/Classes/Private_class_fields). Les croisillons sont valides au début d'un fichier [comme commentaire d'interpréteur](/fr/docs/Web/JavaScript/Reference/Lexical_grammar), ou à l'intérieur d'une classe pour indiquer un champ privé. Vous pouvez également rencontrer cette erreur si vous oubliez d'encadrer un identifiant DOM entre quotes (la chaîne de caractères n'étant alors pas délimitée).

## Message

```js
SyntaxError: Unexpected '#' used outside of class body.
```

## Type d'erreur

[`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)

## Quel est le problème&nbsp;?

Un caractère \`#\` a été trouvé dans un contexte inattendu. Cela peut être à du code déplacé qui ne fait plus partie d'une classe, à un commentaire d'interpréteur (<i lang="en">hashbang</i>) situé sur une autre ligne que la première ou à l'oubli de quotes/guillemets autour d'un identifiant du DOM.

## Exemples

### Délimiteurs de chaîne manquants

Pour chaque cas, on peut avoir une légère erreur qui produit cette exception. Par exemple&nbsp;:

```js example-bad
document.querySelector(#un-élément)
```

Pourra être corrigé avec&nbsp;:

```js example-good
document.querySelector("#un-élément")
```

### En dehors d'une classe

```js example-bad
class ClasseAvecChampPrivé {
  #champPrivé

  constructor() {
  }
}

this.#champPrivé = 42
```

Cela pourra être corrigé en déplaçant le champ privé à l'intérieur de la classe&nbsp;:

```js example-good
class ClasseAvecChampPrivé {
  #champPrivé

  constructor() {
    this.#champPrivé = 42
  }
}
```

## Voir aussi

- [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
