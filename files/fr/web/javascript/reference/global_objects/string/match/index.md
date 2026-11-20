---
title: "String : méthode match()"
short-title: match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`match()`** des valeurs {{JSxRef("String")}} permet d'obtenir le résultat de la correspondance de cette chaîne de caractères avec une [expression rationnelle](/fr/docs/Web/JavaScript/Guide/Regular_expressions).

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.match()", "shorter")}}

```js interactive-example
const paragraph =
  "Le renard brun rapide saute par-dessus le chien paresseux. Il a aboyé.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Résultat attendu : Array ["L", "I"]
```

## Syntaxe

```js-nolint
match(regexp)
```

### Paramètres

- `regexp`
  - : Un objet représentant une expression rationnelle, ou tout objet possédant une méthode [`Symbol.match`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match).

    Si `regexp` n'est pas un objet de type `RegExp` et ne possède pas de méthode `Symbol.match`, il est implicitement converti en un objet {{JSxRef("RegExp")}} en utilisant `new RegExp(regexp)`.

    Si vous ne fournissez aucun paramètre et utilisez directement la méthode `match()`, vous obtenez un {{JSxRef("Array")}} contenant une chaîne de caractères vide&nbsp;: `[""]`, car cela équivaut à `match(/(?:)/)`.

### Valeur de retour

Un tableau ({{JSxRef("Array")}}) dont le contenu dépend de la présence ou de l'absence de l'indicateur global (`g`), ou [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) si aucune correspondance n'est trouvée.

- Si l'indicateur `g` est utilisé, tous les résultats correspondant à l'expression rationnelle complète sont retournés, mais les groupes capturant ne sont pas inclus.
- Si l'indicateur `g` n'est pas utilisé, seule la première correspondance complète et ses groupes capturant associés sont retournés. Dans ce cas, `match()` retourne le même résultat que {{JSxRef("RegExp.prototype.exec()")}} (un tableau avec certaines propriétés supplémentaires).

## Description

L'implémentation de `String.prototype.match` ne fait pas grand-chose d'autre que d'appeler la méthode `Symbol.match` de l'argument avec la chaîne de caractères comme premier paramètre. L'implémentation réelle provient de [`RegExp.prototype[Symbol.match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match).

- Si vous avez besoin de savoir si une chaîne de caractères correspond à une expression rationnelle {{JSxRef("RegExp")}}, utilisez {{JSxRef("RegExp.prototype.test()")}}.
- Si vous ne voulez que la première correspondance trouvée, vous pouvez utiliser {{JSxRef("RegExp.prototype.exec()")}} à la place.
- Si vous voulez obtenir des groupes capturant et que l'indicateur global est défini, vous devez utiliser {{JSxRef("RegExp.prototype.exec()")}} ou {{JSxRef("String.prototype.matchAll()")}} à la place.

Pour plus d'informations sur la sémantique de `match()` lorsqu'une expression rationnelle est passée, voir [`RegExp.prototype[Symbol.match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match).

## Exemples

### Utiliser la méthode `match()`

Dans l'exemple suivant, `match()` est utilisé pour trouver `"chapitre"` suivi d'un ou plusieurs caractères numériques, suivi d'un point décimal et de caractères numériques zéro ou plusieurs fois.

L'expression rationnelle inclut l'indicateur `i` afin que les différences entre majuscules et minuscules soient ignorées.

```js
const chaine = "Pour plus d'informations, voir le chapitre 3.4.5.1";
const re = /(chapitre \d+(\.\d)*)/i;
const trouve = chaine.match(re);

console.log(trouve);
// [
//   'chapitre 3.4.5.1'
//   'chapitre 3.4.5.1'
//   '.1'
//   index: 34
//   input: 'Pour plus d'informations, voir le chapitre 3.4.5.1'
//   groups: undefined
// ]
```

Dans le résultat de la correspondance ci-dessus, `'voir le chapitre 3.4.5.1'` est la correspondance complète. `'chapitre 3.4.5.1'` a été capturé par `(chapitre \d+(\.\d)*)`. `'.1'` est la dernière valeur capturée par `(\.\d)`. La propriété `index` (`34`) est l'index basé sur zéro de la correspondance complète. La propriété `input` est la chaîne de caractères originale qui a été analysée.

### Utiliser les indicateurs global et ignorer la casse avec `match()`

L'exemple suivant démontre l'utilisation de l'indicateur global et de l'indicateur ignorer la casse avec `match()`. Toutes les lettres `A` à `E` et `a` à `e` sont retournées, chacune étant son propre élément dans le tableau.

```js
const chaine = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const correspondances = chaine.match(regexp);

console.log(correspondances);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

> [!NOTE]
> Voir aussi {{JSxRef("String.prototype.matchAll()")}} et [Recherche avancée avec indicateurs](/fr/docs/Web/JavaScript/Guide/Regular_expressions#recherche_avancée_avec_indicateurs).

### Utiliser les groupes capturant nommés

Dans les navigateurs qui prennent en charge les groupes capturant nommés, le code suivant capture `"renard"` ou `"chat"` dans un groupe nommé `animal`&nbsp;:

```js
const paragraphe =
  "Le renard brun rapide saute par-dessus le chien paresseux. Il a aboyé.";

const regexDeCapture = /(?<animal>renard|chat) brun rapide/;
const trouve = paragraphe.match(regexDeCapture);
console.log(trouve.groups); // {animal: "renard"}
```

### Utiliser `match()` sans paramètre

```js
const chaine = "Rien ne vient de rien.";

chaine.match(); // retourne [""]
```

### Utiliser `match()` avec un objet qui n'est pas une `RegExp` mais qui implémente `[Symbol.match]()`

Si un objet possède une méthode `Symbol.match`, elle peut être utilisée comme un comparateur personnalisé. La valeur de retour de `Symbol.match` devient la valeur de retour de `match()`.

```js
const chaine = "Hmm, c'est intéressant.";

chaine.match({
  [Symbol.match](str) {
    return ["Oui, c'est intéressant."];
  },
}); // retourne ["Oui, c'est intéressant."]
```

### Utiliser un paramètre qui n'est pas une `RegExp`

Lorsque le paramètre `regexp` est une chaîne de caractères ou un nombre, il est implicitement converti en {{JSxRef("RegExp")}} en utilisant `new RegExp(regexp)`.

```js
const chaine1 =
  "Tous les nombres sauf NaN satisfont <= Infinity et >= -Infinity en JavaScript.";
const chaine2 = "Mon grand-père a 65 ans et ma grand-mère a 63 ans.";
const chaine3 = "Le contrat a été déclaré nul et non avenu.";
chaine1.match("number"); // "number" est une chaîne de caractères. retourne ["number"]
chaine1.match(NaN); // le type de NaN est le nombre. retourne ["NaN"]
chaine1.match(Infinity); // le type de Infinity est le nombre. retourne ["Infinity"]
chaine1.match(-Infinity); // retourne ["-Infinity"]
chaine2.match(65); // retourne ["65"]
chaine3.match(null); // retourne ["null"]
```

Cela donne des résultats inattendus si les caractères spéciaux ne sont pas correctement échappés.

```js
console.log("123".match("1.3")); // [ "123" ]
```

Ceci est une correspondance parce qu'un `.` dans une expression rationnelle correspond à n'importe quel caractère. Pour qu'il corresponde uniquement à un point spécifique, vous devez échapper l'entrée.

```js
console.log("123".match("1\\.3")); // null
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.match` dans `core-js` avec des corrections et la mise en œuvre du comportement moderne comme la prise en charge de `Symbol.match` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- La méthode {{JSxRef("String.prototype.matchAll()")}}
- L'objet natif {{JSxRef("RegExp")}}
- La méthode {{JSxRef("RegExp.prototype.exec()")}}
- La méthode {{JSxRef("RegExp.prototype.test()")}}
