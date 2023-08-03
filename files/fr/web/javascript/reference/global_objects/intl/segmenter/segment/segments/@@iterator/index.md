---
title: Intl.Segments.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/@@iterator
---

{{JSRef}}

La méthode **`Intl.Segments.@@iterator`** fait partie de l'implémentation [du protocole itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») pour `Intl.Segments` et renvoie un nouvel objet itérateur qui permet de parcourir les éléments d'un objet `Intl.Segmenter`. Chaque élément est renvoyé sous la forme d'un objet.

{{EmbedInteractiveExample("pages/js/intl-segments-prototype-@@iterator.html")}}

## Syntaxe

```js
segments[Symbol.iterator];
```

La fonction disponible sur cet itérateur est `.next()`, elle est décrite dans [la page du protocole itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_»).

### Valeur de retour

Un nouvel objet itérateur.

## Exemples

```js
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);
const iterator = segments[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

/* Affiche dans la console
{segment: 'Moi', index: 0, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 3, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 4, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: ' ', index: 5, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: "N'est", index: 6, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: '-', index: 11, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'ce', index: 12, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 14, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'pas', index: 15, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 18, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 19, input: "Moi ? N'est-ce pas ?", isWordLike: false}
*/
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- [`Array.prototype[@@iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
