---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

L'objet **`RegExp`** est utilisé pour faire correspondre du texte avec un motif.

Pour une introduction aux expressions rationnelles, lisez le [chapitre Expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions) dans le guide JavaScript. Pour des informations détaillées sur la syntaxe des expressions rationnelles, consultez la [référence des expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions).

## Description

### Notation littérale et constructeur

Il existe deux façons de créer un objet `RegExp`&nbsp;: une _notation littérale_ ou un _constructeur_.

- La _notation littérale_ prend un motif entre deux barres obliques, suivi des [indicateurs](/fr/docs/Web/JavaScript/Guide/Regular_expressions#recherche_avancée_avec_indicateurs) optionnels, après la deuxième barre oblique.
- La _fonction constructeur_ prend soit une chaîne de caractères, soit un objet `RegExp` comme premier paramètre et une chaîne de caractères [d'indicateurs](/fr/docs/Web/JavaScript/Guide/Regular_expressions#recherche_avancée_avec_indicateurs) optionnels comme second paramètre.

Ainsi, les expressions suivantes créent le même objet d'expression rationnelle&nbsp;:

```js
const re = /ab+c/i; // notation littérale
// OU
const re = new RegExp("ab+c", "i"); // constructeur avec une chaîne de caractères comme premier argument
// OU
const re = new RegExp(/ab+c/, "i"); // constructeur avec une expression rationnelle littérale comme premier argument
```

Avant de pouvoir utiliser des expressions rationnelles, elles doivent être compilées. Ce processus leur permet d'effectuer des correspondances plus efficacement. Plus d'informations sur ce processus peuvent être trouvées dans les [documents dotnet <sup>(angl.)</sup>](https://learn.microsoft.com/fr/dotnet/standard/base-types/compilation-and-reuse-in-regular-expressions).

La notation littérale effectue la compilation de l'expression rationnelle lorsque l'expression est évaluée. En revanche, le constructeur de l'objet `RegExp`, `new RegExp('ab+c')`, effectue la compilation de l'expression rationnelle au moment de l'exécution.

Utilisez une chaîne de caractères comme premier argument du constructeur `RegExp()` lorsque vous souhaitez [construire l'expression rationnelle à partir d'une entrée dynamique](#building_a_regular_expression_from_dynamic_inputs).

## Indicateurs dans le constructeur

L'expression `new RegExp(/ab+c/, flags)` crée une nouvelle `RegExp` en utilisant la source du premier paramètre et les [indicateurs](/fr/docs/Web/JavaScript/Guide/Regular_expressions#recherche_avancée_avec_indicateurs) fournis par le second.

Lors de l'utilisation de la fonction constructeur, les règles normales d'échappement des chaînes de caractères (faire précéder les caractères spéciaux d'un `\` lorsqu'ils sont inclus dans une chaîne de caractères) sont nécessaires.

Par exemple, les définitions suivantes sont équivalentes&nbsp;:

```js
const re = /\w+/;
// OU
const re = new RegExp("\\w+");
```

### Gestion spéciale pour les expressions rationnelles

> [!NOTE]
> Le fait qu'un élément soit une expression rationnelle peut être déterminé par [typage structurel <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Duck_typing). Il n'a pas besoin d'être un `RegExp`&nbsp;!

Certaines méthodes intégrées traitent les expressions rationnelles de manière spéciale. Elles décident si `x` est une expression rationnelle à travers [plusieurs étapes <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isregexp)&nbsp;:

1. `x` doit être un objet (et non un type primitif).
2. Si [`x[Symbol.match]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match) n'est pas `undefined`, vérifiez si sa valeur est [équivalente à vrai](/fr/docs/Glossary/Truthy).
3. Sinon, si `x[Symbol.match]` est `undefined`, vérifiez si `x` a été créé avec le constructeur `RegExp`. (Cette étape doit rarement se produire, car si `x` est un objet `RegExp` qui n'a pas été modifié, il doit avoir une propriété `Symbol.match`.)

Notez que dans la plupart des cas, il passe par la vérification `Symbol.match`, ce qui signifie&nbsp;:

- Un véritable objet `RegExp` dont la valeur de la propriété `Symbol.match` est [équivalente à faux](/fr/docs/Glossary/Falsy), mais pas `undefined` (même si tout le reste reste intact, comme [`exec`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) et [`[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)), peut être utilisé comme s'il ne s'agit pas d'une expression rationnelle.
- Un objet qui n'est pas un `RegExp` et qui possède une propriété `Symbol.match` est traité comme s'il s'agit d'une expression rationnelle.

Ce choix est fait parce que `[Symbol.match]()` est la propriété qui indique le mieux qu'un élément est destiné à être utilisé pour faire des correspondances. (`exec` peut aussi être utilisé, mais comme ce n'est pas une propriété de symbole, il y a trop de faux positifs.) Les endroits qui traitent les expressions rationnelles de manière particulière comprennent&nbsp;:

- [`String.prototype.endsWith()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), [`startsWith()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) et [`includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/includes) lèvent une {{JSxRef("TypeError")}} si le premier argument est une expression rationnelle.
- [`String.prototype.matchAll()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) et [`replaceAll()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) vérifient si l'indicateur [global](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) est défini si le premier argument est une expression rationnelle, avant d'appeler sa méthode [`[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/matchAll) ou [`[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace).
- Le constructeur [`RegExp()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) retourne directement l'argument `pattern` uniquement si `pattern` est une expression rationnelle (parmi quelques autres conditions). Si `pattern` est une expression rationnelle, il examine également les propriétés `source` et `flags` de `pattern` au lieu de contraindre `pattern` en chaîne de caractères.

Par exemple, [`String.prototype.endsWith()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) contraint toutes les entrées en chaînes de caractères, mais lève une exception si l'argument est une expression rationnelle, parce qu'elle est uniquement conçue pour faire correspondre des chaînes de caractères, et utiliser une expression rationnelle est probablement une erreur de développement.

```js
"tototruc".endsWith({ toString: () => "truc" }); // true
"tototruc".endsWith(/truc/); // TypeError: First argument to String.prototype.endsWith must not be a regular expression
```

Vous pouvez contourner la vérification en définissant `[Symbol.match]` sur une valeur [équivalente à faux](/fr/docs/Glossary/Falsy) qui n'est pas `undefined`. Cela signifie que l'expression rationnelle ne peut pas être utilisée avec `String.prototype.match()` (puisque sans `[Symbol.match]`, `match()` construit un nouvel objet `RegExp` avec les deux barres obliques d'encadrement ajoutées par [`re.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/toString)), mais qu'elle peut être utilisée pour pratiquement tout le reste.

```js
const re = /truc/g;
re[Symbol.match] = false;
"/truc/g".endsWith(re); // true
re.exec("truc"); // [ 'truc', index: 0, input: 'truc', groups: undefined ]
"truc & truc".replace(re, "toto"); // 'toto & toto'
```

### Propriétés de `RegExp` similaires à celles de Perl

Notez que plusieurs propriétés de `RegExp` ont à la fois un nom long et un nom court (similaires à ceux de Perl). Les deux noms désignent toujours la même valeur. (Perl est le langage de programmation dont JavaScript reprend le modèle pour ses expressions rationnelles.) Consultez aussi les [propriétés `RegExp` obsolètes](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp).

## Constructeur

- {{JSxRef("RegExp/RegExp", "RegExp()")}}
  - : Crée un nouvel objet `RegExp`.

## Propriétés statiques

- [`RegExp.$1`, …, `RegExp.$9`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n) {{Deprecated_Inline}}
  - : Propriétés statiques en lecture seule contenant des correspondances de sous-chaînes de caractère entre parenthèses.
- [`RegExp.input` (`$_`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input) {{Deprecated_Inline}}
  - : Une propriété statique qui contient la dernière chaîne de caractères contre laquelle une expression régulière a été correctement appariée.
- [`RegExp.lastMatch` (`$&`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch) {{Deprecated_Inline}}
  - : Une propriété statique en lecture seule qui contient la dernière sous-chaîne de caractères appariée.
- [`RegExp.lastParen` (`$+`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen) {{Deprecated_Inline}}
  - : Une propriété statique en lecture seule qui contient la dernière sous-chaîne de caractères entre parenthèses appariée.
- [`RegExp.leftContext` (`` $` ``)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext) {{Deprecated_Inline}}
  - : Une propriété statique en lecture seule qui contient la sous-chaîne de caractères précédant le dernier appariement.
- [`RegExp.rightContext` (`$'`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext) {{Deprecated_Inline}}
  - : Une propriété statique en lecture seule qui contient la sous-chaîne de caractères suivant le dernier appariement.
- [`RegExp[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
  - : La fonction constructeur qui est utilisée pour créer des objets dérivés.

## Méthodes statiques

- {{JSxRef("RegExp.escape()")}}
  - : [Échappe](/fr/docs/Web/JavaScript/Reference/Regular_expressions#séquences_déchappement) tous les caractères de syntaxe regex potentiels dans une chaîne de caractères, et retourne une nouvelle chaîne de caractères qui peut être utilisée en toute sécurité comme motif [littéral](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) pour le constructeur {{JSxRef("RegExp/RegExp", "RegExp()")}}.

## Propriétés d'instance

Ces propriétés sont définies sur `RegExp.prototype` et partagées par toutes les instances de `RegExp`.

- {{JSxRef("Object/constructor", "RegExp.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `RegExp`, la valeur initiale est le constructeur {{JSxRef("RegExp/RegExp", "RegExp")}}.
- {{JSxRef("RegExp.prototype.dotAll")}}
  - : Indique si le caractère `.` correspond aux caractères de nouvelle ligne.
- {{JSxRef("RegExp.prototype.flags")}}
  - : Une chaîne de caractères qui contient les indicateurs de l'objet `RegExp`.
- {{JSxRef("RegExp.prototype.global")}}
  - : Indique si l'expression rationnelle doit être testée par rapport à toutes les correspondances possibles dans une chaîne de caractères, ou uniquement à la première.
- {{JSxRef("RegExp.prototype.hasIndices")}}
  - : Indique si le résultat de l'expression rationnelle expose les indices de début et de fin des sous-chaînes de caractères capturées.
- {{JSxRef("RegExp.prototype.ignoreCase")}}
  - : Indique si la casse doit être ignorée lors de la tentative d'une correspondance dans une chaîne de caractères.
- {{JSxRef("RegExp.prototype.multiline")}}
  - : Indique si la recherche dans les chaînes de caractères porte sur plusieurs lignes.
- {{JSxRef("RegExp.prototype.source")}}
  - : Le texte du motif.
- {{JSxRef("RegExp.prototype.sticky")}}
  - : Indique si la recherche est persistante.
- {{JSxRef("RegExp.prototype.unicode")}}
  - : Indique si les fonctionnalités Unicode sont activées.
- {{JSxRef("RegExp.prototype.unicodeSets")}}
  - : Indique si l'indicateur `v`, une évolution du mode `u`, est activé.

Ces propriétés sont des propriétés propres à chaque instance de `RegExp`.

- {{JSxRef("RegExp/lastIndex", "lastIndex")}}
  - : L'indice auquel commence la correspondance suivante.

## Méthodes d'instance

- {{JSxRef("RegExp.prototype.compile()")}} {{Deprecated_Inline}}
  - : Compile ou recompile une expression rationnelle pendant l'exécution d'un script.
- {{JSxRef("RegExp.prototype.exec()")}}
  - : Exécute une recherche de correspondance dans son paramètre chaîne de caractères.
- {{JSxRef("RegExp.prototype.test()")}}
  - : Vérifie la présence d'une correspondance dans son paramètre chaîne de caractères.
- {{JSxRef("RegExp.prototype.toString()")}}
  - : Retourne une chaîne de caractères qui représente l'objet défini. Remplace la méthode {{JSxRef("Object.prototype.toString()")}}.
- [`RegExp.prototype[Symbol.match]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
  - : Effectue une correspondance avec la chaîne de caractères fournie et retourne le résultat de la correspondance.
- [`RegExp.prototype[Symbol.matchAll]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll)
  - : Retourne toutes les correspondances de l'expression rationnelle dans une chaîne de caractères.
- [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
  - : Remplace les correspondances dans la chaîne de caractères fournie par une nouvelle portion de texte.
- [`RegExp.prototype[Symbol.search]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.search)
  - : Recherche la correspondance dans la chaîne de caractères fournie et retourne l'indice auquel le motif se trouve dans la chaîne de caractères.
- [`RegExp.prototype[Symbol.split]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.split)
  - : Divise la chaîne de caractères fournie en tableau en séparant la chaîne de caractères en portions de texte.

## Exemples

### Utiliser une expression rationnelle pour changer le format des données

Le script suivant utilise la méthode {{JSxRef("String.prototype.replace()")}} pour faire correspondre un nom au format _prénom nom_ et le produire au format _nom, prénom_.

Dans le texte de remplacement, le script utilise `$1` et `$2` pour indiquer les résultats des parenthèses correspondantes dans le motif de l'expression rationnelle.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const nouveauChr = str.replace(re, "$2, $1");
console.log(nouveauChr);
```

Cela affiche `"Cruz, Maria"`.

### Utiliser une expression rationnelle pour séparer les lignes avec différentes fins de ligne/fins de ligne/sauts de ligne

La fin de ligne par défaut varie selon la plateforme (Unix, Windows, etc.). La séparation des lignes fournie dans cet exemple fonctionne sur toutes les plateformes.

```js
const texte = "Du texte\nEt bien plus\r\nEt encore\nC'est la fin";
const lignes = texte.split(/\r?\n/);
console.log(lignes); // [ 'Du texte', 'Et bien plus', 'Et encore', "C'est la fin" ]
```

Notez que l'ordre des motifs dans l'expression rationnelle est important.

### Utiliser une expression rationnelle sur plusieurs lignes

Par défaut, le caractère `.` ne correspond pas aux caractères de nouvelle ligne. Pour lui faire correspondre ces caractères, utilisez l'indicateur `s` (mode `dotAll`).

```js
const s = "Oui s'il vous plaît\négayez ma journée!";

s.match(/Oui.*journée/);
// Retourne null

s.match(/Oui.*journée/s);
// Retourne ["Oui s'il vous plaît\négayez ma journée!"]
```

### Utiliser une expression rationnelle avec l'indicateur de recherche persistante

L'indicateur {{JSxRef("RegExp/sticky", "sticky")}} indique que l'expression rationnelle effectue une recherche persistante dans la chaîne de caractères cible en tentant une correspondance à partir de {{JSxRef("RegExp.prototype.lastIndex")}}.

```js
const str = "#toto#";
const regex = /toto/y;

regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex est pris en compte avec l'indicateur sticky)
regex.lastIndex; // 0 (réinitialisé après l'échec de la correspondance)
```

### La différence entre l'indicateur de recherche persistante et l'indicateur global

Avec l'indicateur de recherche persistante `y`, la correspondance suivante a lieu à la position `lastIndex`, tandis qu'avec l'indicateur global `g`, la correspondance peut avoir lieu à la position `lastIndex` ou après&nbsp;:

```js
const re = /\d/y;
let r;
while ((r = re.exec("123 456"))) {
  console.log(r, "ET re.lastIndex", re.lastIndex);
}

// [ '1', index: 0, input: '123 456', groups: undefined ] ET re.lastIndex 1
// [ '2', index: 1, input: '123 456', groups: undefined ] ET re.lastIndex 2
// [ '3', index: 2, input: '123 456', groups: undefined ] ET re.lastIndex 3
//  … et plus aucune correspondance.
```

Avec l'indicateur global `g`, les 6 chiffres correspondent, et pas seulement 3.

### Expression rationnelle et caractères Unicode

`\w` et `\W` correspondent uniquement aux caractères fondés sur ASCII&nbsp;; par exemple, de `a` à `z`, de `A` à `Z`, de `0` à `9` et `_`.

Pour faire correspondre des caractères d'autres langues, telles que le cyrillique ou l'hébreu, utilisez `\uHHHH`, où `HHHH` est la valeur Unicode du caractère en hexadécimal.

Cet exemple montre comment séparer les caractères Unicode d'un mot.

```js
const texte = "Образец texte на русском языке";
const regex = /[\u0400-\u04ff]+/g;

const correspondance = regex.exec(texte);
console.log(correspondance[0]); // 'Образец'
console.log(regex.lastIndex); // 7

const correspondance2 = regex.exec(texte);
console.log(correspondance2[0]); // 'на' (n'affiche pas 'texte')
console.log(regex.lastIndex); // 16

// et ainsi de suite
```

La fonctionnalité des [échappements de propriétés Unicode](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) fournit une manière plus simple de cibler certaines plages Unicode, en autorisant des expressions comme `\p{scx=Cyrl}` (pour faire correspondre n'importe quelle lettre cyrillique), ou `\p{L}/u` (pour faire correspondre une lettre de n'importe quelle langue).

### Extraction du nom de sous-domaine d'une URL

```js
const url = "http://xxx.example.com";
console.log(/^https?:\/\/(.+?)\./.exec(url)[1]); // 'xxx'
```

> [!NOTE]
> Au lieu d'utiliser des expressions rationnelles pour analyser les URL, il est généralement préférable d'utiliser l'analyseur d'URL intégré aux navigateurs avec [l'API URL](/fr/docs/Web/API/URL_API).

### Construire une expression rationnelle à partir d'entrées dynamiques

```js
const petitsDejeuners = ["lard", "œufs", "avoine", "pain", "fruits"];
const commande = "Je prends du lard et des œufs, merci";

commande.match(new RegExp(`\\b(${petitsDejeuners.join("|")})\\b`, "g"));
// Retourne ['lard', 'œufs']
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes spécifiques à Firefox

À partir de Firefox 34, dans le cas d'un groupe capturant avec des quantificateurs qui empêchent son exercice, le texte correspondant à un groupe capturant vaut maintenant `undefined` au lieu d'une chaîne de caractères vide&nbsp;:

```js
// Firefox 33 ou antérieur
"x".replace(/x(.)?/g, (m, group) => {
  console.log(`group: ${JSON.stringify(group)}`);
});
// group: ""

// Firefox 34 ou ultérieur
"x".replace(/x(.)?/g, (m, group) => {
  console.log(`group: ${group}`);
});
// group: undefined
```

Notez que, pour des raisons de compatibilité web, `RegExp.$N` retourne toujours une chaîne de caractères vide au lieu de `undefined` ([bogue 1053944 <sup>(angl.)</sup>](https://bugzil.la/1053944)).

## Voir aussi

- [La prothèse d'émulation de nombreuses fonctionnalités modernes de `RegExp` (`dotAll`, indicateurs `sticky`, groupes de capture nommés, etc.) dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- [Les expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions)
- La méthode {{JSxRef("String.prototype.match()")}}
- La méthode {{JSxRef("String.prototype.replace()")}}
- La méthode {{JSxRef("String.prototype.split()")}}
