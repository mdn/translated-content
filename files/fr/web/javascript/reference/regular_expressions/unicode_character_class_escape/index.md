---
title: "Classe de caractères Unicode échappés : \\p{...}, \\P{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
l10n:
  sourceCommit: 7d4628c5144f459ddb081a3e58d0e56f0c2db673
---

Une **classe de caractères Unicode échappés** (<i lang="en">unicode character class escape</i> en anglais) est un type de [classe de caractères échappés](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) qui correspond à un ensemble de caractères défini par une propriété Unicode. Elle n'est prise en charge qu'en [mode compatible Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode). Lorsque le drapeau [`v`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) est activé, il peut également être utilisé pour correspondre à des chaînes de caractères de longueur finie.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Expression régulière avec classe de caractères Unicode échappés", "taller")}}

```js interactive-example
const sentence = "Un billet pour 大阪 coûte ¥2000 👌.";

const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(regexpEmojiPresentation));
// Résultat attendu : Array ["👌"]

const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
console.log(sentence.match(regexpNonLatin));
// Résultat attendu : Array [" ", " ", " 大阪 ", " ¥2000 👌."]

const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
console.log(sentence.match(regexpCurrencyOrPunctuation));
// Résultat attendu : Array ["¥", "."]
```

## Syntaxe

```regex
\p{loneProperty}
\P{loneProperty}

\p{property=value}
\P{property=value}
```

### Paramètres

- `loneProperty`
  - : Un nom ou une valeur de propriété Unicode seul, suivant la même syntaxe que `value`. Il définit la valeur de la propriété `General_Category` ou un [nom de propriété binaire <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties). En mode [`v`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets), il peut également s'agir d'une [propriété Unicode binaire de chaînes de caractères <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties-of-strings).

    > [!NOTE]
    > La syntaxe [ICU <sup>(angl.)</sup>](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html#property-values) permet également de ne pas définir le nom de la propriété `Script`, mais JavaScript ne prend pas en charge cette fonctionnalité, car la plupart du temps, `Script_Extensions` est plus utile que `Script`.

- `property`
  - : Un nom de propriété Unicode. Il doit être composé de lettres {{Glossary("ASCII")}} (`A-Z`, `a-z`) et de traits de soulignement (`_`), et doit correspondre à l'un des [noms de propriétés non binaires <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties).
- `value`
  - : Une valeur de propriété Unicode. Elle doit être composée de lettres ASCII (`A-Z`, `a-z`), de traits de soulignement (`_`) et de chiffres (`0-9`), et doit faire partie des valeurs prises en charge dans [`PropertyValueAliases.txt` <sup>(angl.)</sup>](https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt).

## Description

`\p` et `\P` sont uniquement prises en charge en [mode sensible à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode). En mode insensible à l'Unicode, elles constituent des [échappements d'identité](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) pour le caractère `p` ou `P`.

Chaque caractère Unicode possède un ensemble de propriétés qui le décrivent. Par exemple, le caractère [`a` <sup>(angl.)</sup>](https://util.unicode.org/UnicodeJsps/character.jsp?a=0061) a la propriété `General_Category` avec la valeur `Lowercase_Letter`, et la propriété `Script` avec la valeur `Latn`. Les séquences d'échappement `\p` et `\P` permettent de faire correspondre un caractère en fonction de ses propriétés. Par exemple, `a` peut être mis en correspondance par `\p{Lowercase_Letter}` (le nom de la propriété `General_Category` est optionnel) ainsi que par `\p{Script=Latn}`. `\P` crée une _classe complémentaire_ qui consiste en des points de code sans la propriété définie.

Lorsque l'indicateur [`i`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) est activé, les classes de caractères `\P` sont traitées légèrement différemment en modes `u` et `v`. En mode `u`, le pliage de casse s'effectue après la soustraction&nbsp;; en mode `v`, il s'effectue avant. Plus concrètement, en mode `u`, `\P{property}` correspond à `caseFold(allCharacters - charactersWithProperty)`. Ainsi, `/\P{Lowercase_Letter}/iu` correspond toujours à `"a"`, car `A` n'est pas une valeur `Lowercase_Letter`. En mode `v`, `\P{property}` correspond à `caseFold(allCharacters) - caseFold(charactersWithProperty)`. Ainsi, `/\P{Lowercase_Letter}/iv` ne correspond pas à `"a"`, car `A` ne figure même pas dans l'ensemble des caractères Unicode pliés. Consultez aussi les [classes complémentaires et la correspondance sans distinction de casse](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#complement_classes_and_case-insensitive_matching).

Pour combiner plusieurs propriétés, utilisez la syntaxe [d'intersection d'ensembles de caractères](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#classe_de_caractères_du_mode_v) activée par l'indicateur `v`, ou consultez la [soustraction et l'intersection de motifs](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#soustraire_et_intersecter_des_motifs).

En mode `v`, `\p` peut faire correspondre une séquence de points de code, définie par Unicode comme une «&nbsp;propriété de chaîne de caractères&nbsp;». Cette fonctionnalité est particulièrement utile pour les emojis, souvent composés de plusieurs points de code. Toutefois, `\P` ne peut compléter que des propriétés de caractères.

> [!NOTE]
> La prise en charge des propriétés de chaînes de caractères est également prévue en mode `u`.

## Exemples

### Catégories générales

Les catégories générales servent à classer les caractères Unicode, et leurs sous-catégories permettent une classification plus précise. Les échappements de propriétés Unicode acceptent les formes courtes comme les formes longues.

Vous pouvez les utiliser pour faire correspondre des lettres, des nombres, des symboles, des signes de ponctuation, des espaces, etc. Pour une liste plus complète des catégories générales, consultez la [spécification Unicode <sup>(angl.)</sup>](https://unicode.org/reports/tr18/#General_Category_Property).

```js
// trouver toutes les lettres du texte
const histoire =
  "C'est le Chat du Cheshire : maintenant, j'ai quelqu'un à qui parler.";

// Forme la plus explicite
histoire.match(/\p{General_Category=Letter}/gu);

// Le nom de propriété n'est pas obligatoire pour les catégories générales
histoire.match(/\p{Letter}/gu);

// Forme équivalente (alias court) :
histoire.match(/\p{L}/gu);

// Forme également équivalente (conjonction de toutes les sous-catégories à l'aide d'alias courts)
histoire.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### Scripts et extensions de scripts

Certaines langues utilisent différents scripts d'écriture. Par exemple, l'anglais et l'espagnol s'écrivent avec le script latin, tandis que l'arabe et le russe s'écrivent avec d'autres scripts (respectivement arabe et cyrillique). Les propriétés Unicode `Script` et `Script_Extensions` permettent aux expressions rationnelles de faire correspondre les caractères selon le script auquel ils sont principalement associés (`Script`) ou selon l'ensemble des scripts auxquels ils appartiennent (`Script_Extensions`).

Par exemple, `A` appartient au script `Latin` et `ε` au script `Greek`.

```js
const caracteresMixtes = "aεЛ";

// Utiliser le nom canonique "long" du script
caracteresMixtes.match(/\p{Script=Latin}/u); // a

// Utiliser un alias court (code ISO 15924) pour le script
caracteresMixtes.match(/\p{Script=Grek}/u); // ε

// Utiliser le nom court sc pour la propriété Script
caracteresMixtes.match(/\p{sc=Cyrillic}/u); // Л
```

Pour plus de détails, consultez la [spécification Unicode <sup>(angl.)</sup>](https://unicode.org/reports/tr24/#Script), le [tableau des scripts de la spécification ECMAScript <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/text-processing.html#table-unicode-script-values) et la [liste des codes de scripts ISO 15924 <sup>(angl.)</sup>](https://unicode.org/iso15924/iso15924-codes.html).

Si un caractère est utilisé dans un ensemble limité de scripts, la propriété `Script` ne correspond qu'au script «&nbsp;prédominant&nbsp;». Pour faire correspondre des caractères selon un script «&nbsp;non prédominant&nbsp;», nous pouvons utiliser la propriété `Script_Extensions` (abrégée `scx`).

```js
// ٢ est le chiffre 2 en notation indo-arabe
// il s'écrit principalement avec le script arabe
// il peut aussi s'écrire avec le script thaana

"٢".match(/\p{Script=Thaana}/u);
// null, car Thaana n'est pas le script prédominant

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Échapper les propriétés Unicode et classes de caractères

Avec les expressions rationnelles JavaScript, vous pouvez également utiliser des [classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), notamment `\w` et `\d`, pour faire correspondre des lettres ou des chiffres. Toutefois, ces formes ne correspondent qu'aux caractères du script _latin_ (autrement dit, de `a` à `z` et de `A` à `Z` pour `\w`, et de `0` à `9` pour `\d`). Comme le montre [cet exemple](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), il peut être assez compliqué de travailler avec des textes non latins.

Les catégories d'échappement de propriétés Unicode couvrent beaucoup plus de caractères, et `\p{Letter}` ou `\p{Number}` fonctionne avec n'importe quel script.

```js
// Essai d'utilisation de plages pour contourner les limites de \w :

const texteNonAnglais = "Приключения Алисы в Стране чудес";
const regexpMotBMP = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// Le BMP va de U+0000 à U+FFFF, mais l'espace est U+0020

console.table(texteNonAnglais.match(regexpMotBMP));

// Utiliser les échappements de propriétés Unicode à la place
const regexpUPE = /\p{L}+/gu;
console.table(texteNonAnglais.match(regexpUPE));
```

### Faire correspondre des prix

L'exemple suivant fait correspondre des prix dans une chaîne de caractères&nbsp;:

```js
function obtenirPrix(str) {
  // Sc qui signifie "currency symbol"
  return [...str.matchAll(/\p{Sc}\s*[\d.,]+/gu)].map((match) => match[0]);
}

const str = `California rolls $6.99
Crunchy rolls $8.49
Shrimp tempura $10.99`;
console.log(obtenirPrix(str)); // ["$6.99", "$8.49", "$10.99"]

const str2 = `US store $19.99
Europe store €18.99
Japan store ¥2000`;
console.log(obtenirPrix(str2)); // ["$19.99", "€18.99", "¥2000"]
```

### Faire correspondre des chaînes de caractères

Avec l'indicateur `v`, `\p{…}` peut faire correspondre des chaînes de caractères potentiellement plus longues qu'un caractère en utilisant une propriété de chaînes de caractères&nbsp;:

```js
const indicatif = "🇺🇳";
console.log(indicatif.length); // 4 (deux points de code, chacun une paire de substitution)
console.log([...indicatif].length); // 2
console.log(/\p{RGI_Emoji_Flag_Sequence}/v.exec(indicatif)); // [ '🇺🇳' ]]
```

Toutefois, vous ne pouvez pas utiliser `\P` pour faire correspondre «&nbsp;une chaîne de caractères qui ne possède pas une propriété&nbsp;», car le nombre de caractères à consommer n'est pas clair.

```js-nolint example-bad
/\P{RGI_Emoji_Flag_Sequence}/v; // SyntaxError: Invalid regular expression: Invalid property name
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- [Classe de caractères&nbsp;: `[...]`, `[^...]`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Échappement de classe de caractères&nbsp;: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Échappement de caractère&nbsp;: `\n`, `\u{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjonction&nbsp;: `|`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Propriété de caractère Unicode <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Unicode_character_property) sur Wikipédia
- [ES2018&nbsp;: échappements de propriétés Unicode de RegExp <sup>(angl.)</sup>](https://2ality.com/2017/07/regexp-unicode-property-escapes.html) par Dr Axel Rauschmayer (2017)
- [Expressions rationnelles Unicode § Propriétés <sup>(angl.)</sup>](https://unicode.org/reports/tr18/#Categories)
- [Utilitaires Unicode&nbsp;: UnicodeSet <sup>(angl.)</sup>](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp)
- [Indicateur v de RegExp avec notation ensembliste et propriétés de chaînes de caractères <sup>(angl.)</sup>](https://v8.dev/features/regexp-v-flag) sur v8.dev (2022)
