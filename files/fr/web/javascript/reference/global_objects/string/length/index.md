---
title: "String : propriété length"
short-title: length
slug: Web/JavaScript/Reference/Global_Objects/String/length
l10n:
  sourceCommit: b052ff8270b38fccd3996df52dbe800f9c39f374
---

La propriété de données **`length`** des valeurs {{jsxref("String")}} contient la longueur de la chaîne de caractères en unités de code UTF-16.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String: length", "shorter")}}

```js interactive-example
const str = "La vie, l'univers et tout le reste. Réponse :";

console.log(`${str} ${str.length}`);
// Résultat attendu : "La vie, l'univers et tout le reste. Réponse : 42"
```

## Valeur

Un entier qui n'est pas négatif.

{{js_property_attributes(0, 0, 0)}}

## Description

Cette propriété retourne le nombre d'unités de code dans la chaîne de caractères. JavaScript utilise l'encodage [UTF-16](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes), où chaque caractère Unicode peut être encodé en une ou deux unités de code, il est donc possible que la valeur retournée par `length` ne corresponde pas au nombre réel de caractères Unicode dans la chaîne de caractères. Pour les scripts courants comme le latin, le cyrillique, les caractères CJK bien connus, etc., cela ne doit pas poser de problème, mais si vous travaillez avec certains scripts, tels que les emojis, les [symboles mathématiques <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) ou des caractères chinois rares, vous devez peut-être tenir compte de la différence entre les unités de code et les caractères.

La spécification du langage exige que les chaînes de caractères aient une longueur maximale de 2<sup>53</sup> - 1 éléments, ce qui correspond à la limite supérieure pour les [entiers précis](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). Cependant, une chaîne de caractères de cette longueur nécessite 16384TiB de stockage, ce qui ne peut pas tenir dans la mémoire d'un appareil raisonnable, donc les implémentations ont tendance à abaisser le seuil, ce qui permet de stocker commodément la longueur de la chaîne de caractères dans un entier 32 bits.

- Dans V8 (utilisé par Chrome et Node), la longueur maximale est de 2<sup>29</sup> - 24 (\~1GiB). Sur les systèmes 32 bits, la longueur maximale est de 2<sup>28</sup> - 16 (\~512MiB).
- Dans Firefox, la longueur maximale est de 2<sup>30</sup> - 2 (\~2GiB). Avant Firefox 65, la longueur maximale était de 2<sup>28</sup> - 1 (\~512MiB).
- Dans Safari, la longueur maximale est de 2<sup>31</sup> - 1 (\~4GiB).

> [!NOTE]
> Tous les tailles de mémoire ci-dessus supposent que les chaînes de caractères sont stockées en encodage UTF-16 en mémoire, ce qui peut être une surestimation. L'espace réel utilisé par une chaîne de caractères est envoyé aux optimisations du moteur JavaScript, et tous les principaux moteurs utilisent une représentation interne plus compacte, comme le stockage sur un octet, pour les chaînes de caractères contenant uniquement des caractères Latin-1.

Si vous travaillez avec de grandes chaînes de caractères dans d'autres encodages (comme des fichiers ou des blobs UTF-8), notez que lorsque vous chargez les données dans une chaîne de caractères JavaScript, l'encodage devient toujours UTF-16. La taille de la chaîne de caractères peut être différente de la taille du fichier source.

```js
const chaine1 = "a".repeat(2 ** 29 - 24); // Success
const chaine2 = "a".repeat(2 ** 29 - 23); // RangeError: Invalid string length

const tampon = new Uint8Array(2 ** 29 - 24).fill("a".codePointAt(0)); // Ce tampon fait 512MiB
const chaine = new TextDecoder().decode(tampon); // Cette chaîne de caractères fait 1GiB sauf si optimisée
```

Pour une chaîne de caractères vide, `length` vaut 0.

La propriété statique `String.length` n'est pas liée à la longueur des chaînes de caractères. C'est [l'arité](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length) de la fonction `String` (en gros, le nombre de paramètres formels qu'elle a), qui est 1.

Comme `length` compte les unités de code au lieu des caractères, si vous voulez obtenir le nombre de caractères, vous pouvez d'abord diviser la chaîne de caractères avec son [itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator), qui itère par caractères&nbsp;:

```js
function obtenirLongueurCaractere(str) {
  // L'itérateur de chaîne de caractères utilisée ici parcourt les caractères,
  // pas de simples unités de code
  return [...str].length;
}

console.log(obtenirLongueurCaractere("A\uD87E\uDC04Z")); // 3
```

Si vous souhaitez compter les caractères par _groupes de graphèmes_, utilisez [`Intl.Segmenter`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter). Vous pouvez d'abord transmettre la chaîne de caractères que vous souhaitez diviser à la méthode [`segment()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment), puis parcourir l'objet `Segments` retourné pour obtenir la longueur&nbsp;:

```js
function obtenirCompteGrapheme(str) {
  const segmenter = new Intl.Segmenter("en-US", { granularity: "grapheme" });
  // L'itérateur de l'objet Segments utilisé ici parcourt les caractères des
  // groupes de graphèmes, qui sont composés de plusieurs caractères Unicode
  return [...segmenter.segment(str)].length;
}

console.log(obtenirCompteGrapheme("👨‍👩‍👧‍👧")); // 1
```

## Exemples

### Utilisation simple

```js
const x = "Mozilla";
const vide = "";

console.log(`${x} est long de ${x.length} unités de code`);
// Mozilla est long de 7 unités de code

console.log(`La chaîne de caractères vide a une longueur de ${vide.length}`);
// La chaîne de caractères vide a une longueur de 0
```

### Chaînes de caractères dont la longueur n'est pas égale au nombre de caractères

```js
const emoji = "😄";
console.log(emoji.length); // 2
console.log([...emoji].length); // 1
const adlam = "𞤲𞥋𞤣𞤫";
console.log(adlam.length); // 8
console.log([...adlam].length); // 4
const formula = "∀𝑥∈ℝ,𝑥²≥0";
console.log(formula.length); // 11
console.log([...formula].length); // 9
```

### Affecter une valeur à `length`

Comme la chaîne de caractères est un type primitif, tenter d'assigner une valeur à la propriété `length` d'une chaîne de caractères n'a aucun effet observable et lève une erreur en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

```js
const maChaine = "clochette";

maChaine.length = 4;
console.log(maChaine); // "clochette"
console.log(maChaine.length); // 9
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Array`&nbsp;: `length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
