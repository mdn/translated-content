---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
---

{{JSRef}} {{deprecated_header}}

La méthode dépréciée **`compile()`** est utilisée afin de (re)compiler une expression rationnelle lors de l'exécution d'un script. Cette méthode effectue essentiellement les mêmes actions que le constructeur `RegExp`.

## Syntaxe

```js
regexObj.compile(motif, flags);
```

### Paramètres

- `motif`
  - : Le texte de l'expression rationnelle.
- `flags`

  - : S'ils sont utilisés, les drapeaux (_flags_) peuvent être combinés avec les valeurs suivantes :

    - `g`
      - : correspondance globale
    - `i`
      - : ignorer la casse
    - `m`
      - : multiligne : on traite les caractères de début et de fin (^ et $) de façon à travailler sur plusieurs lignes (ils correspondent au début et à la fin de chaque ligne et non au début ou à la fin de la chaîne entière)
    - `y`
      - : adhérence : ne recherche les correspondances qu'à partir de l'indice fourni par la propriété `lastIndex` de l'expression rationnelle dans la chaîne cible (la recherche n'est pas effectuée pour les indices suivants).

## Description

La méthode `compile` est dépréciée. Pour obtenir le même effet, on utilisera le constructeur `RegExp`.

## Exemples

Dans l'exemple qui suit, on voit comment réinitialiser le motif et les drapeaux d'une expression rationnelle grâce à la méthode `compile()`.

```js
var regexObj = new RegExp("toto", "gi");
regexObj.compile("nouveau toto", "g");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("RegExp")}}
