---
title: "String : méthode statique raw()"
short-title: raw()
slug: Web/JavaScript/Reference/Global_Objects/String/raw
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode statique **`String.raw()`** est une fonction d'étiquetage pour les [gabarits de chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Template_literals). C'est similaire au préfixe `r` en Python ou au préfixe `@` en C# pour les chaînes de caractères littérales. Elle permet d'obtenir la forme brute des gabarits — les substitutions (ex. `${toto}`) sont traitées, mais les séquences d'échappement (ex. `\n`) ne le sont pas.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.raw()")}}

```js interactive-example
// Crée une variable qui utilise un chemin
// Windows sans échapper les barres obliques :
const filePath = String.raw`C:\Development\profile\about.html`;

console.log(`Le fichier a été téléversé depuis : ${filePath}`);
// Résultat attendu : "Le fichier a été téléversé depuis : C:\Development\profile\about.html"
```

## Syntaxe

```js-nolint
String.raw(strings)
String.raw(strings, sub1)
String.raw(strings, sub1, sub2)
String.raw(strings, sub1, sub2, /* …, */ subN)

String.raw`templateString`
```

### Paramètres

- `strings`
  - : Un objet de gabarit bien formé, comme `{ raw: ['toto', 'truc', 'bidule'] }`. Doit avoir une propriété `raw` avec un tableau de chaînes de caractères.
- `sub1`, …, `subN`
  - : Les valeurs de substitution.
- `templateString`
  - : Un [gabarit de chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Template_literals), éventuellement avec des substitutions (`${...}`).

### Valeur de retour

La chaîne de caractères brute correspondant à un gabarit donné.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si le premier argument n'a pas de propriété `raw` ou si elle est `undefined` ou `null`.

## Description

Dans la plupart des cas, `String.raw()` est utilisé avec des gabarits. La première syntaxe est rarement utilisée, car le moteur JavaScript appelle cette forme avec les bons arguments, comme pour les autres [fonctions d'étiquetage](/fr/docs/Web/JavaScript/Reference/Template_literals#gabarits_étiquetés).

`String.raw()` est la seule balise de gabarit intégrée. Elle fonctionne comme un littéral normal, concatène les arguments et retourne une chaîne de caractères. On peut même la réimplémenter avec du JavaScript normal.

> [!WARNING]
> Vous ne devez pas utiliser `String.raw` directement comme balise «&nbsp;identity&nbsp;». Voir [Créer une balise d'identité](#créer_une_balise_didentité) pour savoir comment faire.

Lorsque vous appelez `String.raw()` avec un objet dont la propriété `raw` n'a pas de propriété `length` ou dont la propriété `length` est négative ou nulle, la méthode retourne une chaîne de caractères vide `""`. Si `substitutions.length < strings.raw.length - 1` (c'est-à-dire si le nombre de substitutions ne suffit pas à remplir les espaces réservés — ce qui ne peut pas se produire dans un littéral de gabarit étiqueté bien formé), les espaces réservés restants sont remplis avec des chaînes de caractères vides.

## Exemples

### Utiliser la méthode `String.raw()`

```js
String.raw`Salut\n${2 + 3} !`;
// 'Salut\\n5 !', le caractère après 'Salut'
// n'est pas un saut de ligne,
// '\' et 'n' sont deux caractères.

String.raw`Salut\u000A!`;
// 'Salut\\u000A!', pareil ici,cette fois-ci, on obtient
// les caractères \, u, 0, 0, 0, A, 6.
// Tous les caractères d'échappement sont ignorés
// et les barres obliques inverses restent.
// Vous pouvez vérifier avec .length.

const nom = "Laurent";
String.raw`Salut\n${nom} !`;
// 'Salut\\nLaurent !', les substitutions sont traitées.
```

### Chaînes de caractères brutes contenant la syntaxe des gabarits

`String.raw` est une fonction, elle ne peut donc pas contourner la syntaxe de base des gabarits, comme l'utilisation des accents graves comme délimiteurs et de `${` pour les substitutions. Si vous voulez inclure ces caractères dans le résultat, vous devez les échapper avec des barres obliques inverses. Toutefois, comme `String.raw` produit des chaînes de caractères brutes, les barres obliques inverses sont conservées dans la sortie.

```js
String.raw`Salut \${name} !`;
// 'Salut \\${name} !', le signe dollar est échappé ; aucune interpolation n'a lieu.
// Toutefois, la barre oblique inverse reste présente dans la chaîne de caractères de sortie.

String.raw`Ceci est un accent grave : \``;
// 'Ceci est un accent grave : \\`', la barre oblique inverse reste présente.

String.raw`Barre oblique inverse finale : \\`;
// 'Barre oblique inverse finale : \\\\', les deux barres obliques inverses sont présentes.
// Si vous utilisez une seule barre oblique inverse à la fin, elle échappe l'accent grave final,
// ce qui inclut le code suivant dans la chaîne de caractères.
```

Pour contourner ce problème, vous pouvez utiliser une substitution pour insérer ces caractères.

```js
String.raw`Salut ${"$"}{name} !`;
// 'Salut ${name} !', la substitution insère un seul signe dollar.
String.raw`Ceci est un accent grave : ${"`"}`;
// 'Ceci est un accent grave : `', la substitution insère un seul accent grave.
String.raw`Barre oblique inverse finale : ${"\\"}`;
// 'Barre oblique inverse finale : \\', la substitution insère une seule barre oblique inverse.
```

Cette méthode fonctionne avec `String.raw`, car la fonction concatène simplement les chaînes de caractères brutes et les substitutions. En général, malheureusement, une balise de gabarit ne peut pas recevoir une chaîne de caractères `raw` qui contient une syntaxe de gabarit non échappée.

```js
function etiquette(chaineCaracteres) {
  console.log(chaineCaracteres.raw[0]); // Cette séquence ne contient jamais `${` non échappé ni d'accents graves
}
```

### Utiliser `String.raw` avec `RegExp`

En combinant un littéral de gabarit `String.raw` avec le constructeur {{JSxRef("RegExp/RegExp", "RegExp()")}}, vous pouvez
créer des expressions rationnelles comportant des parties dynamiques (ce qui est impossible avec les littéraux d'expression rationnelle) sans devoir échapper deux fois (`\\`) les séquences d'échappement des expressions rationnelles (ce qui est impossible avec les littéraux de chaîne de caractères ordinaires). Cette méthode est également utile pour les chaînes de caractères qui contiennent beaucoup de barres obliques, comme les chemins de fichiers ou les URL.

```js
// Un gabarit String.raw permet d'écrire une expression rationnelle
// lisible qui correspond à une URL :
const reGabaritBrut = new RegExp(
  String.raw`https://developer\.mozilla\.org/fr/docs/Web/JavaScript/Reference/`,
);

// La même chose avec un littéral d'expression rationnelle s'écrit ainsi,
// avec \/ pour chaque barre oblique :
const reRegexLitterale =
  /https:\/\/developer\.mozilla\.org\/fr\/docs\/Web\/JavaScript\/Reference\//;

// La même chose avec le constructeur RegExp et un littéral de chaîne de
// caractères traditionnel s'écrit ainsi, avec \\. pour chaque point :
const reChaineCaracteresLitterale = new RegExp(
  "https://developer\\.mozilla\\.org/fr/docs/Web/JavaScript/Reference/",
);

// String.raw permet également d'inclure des parties dynamiques
function makeURLRegExp(path) {
  return new RegExp(String.raw`https://developer\.mozilla\.org/${path}`);
}

const reDynamique = makeURLRegExp("fr/docs/Web/JavaScript/Reference/");
const reJoker = makeURLRegExp(".*");
```

### Créer une balise d'identité

De nombreux outils traitent spécialement les littéraux étiquetés avec un nom particulier.

```js
// Certains outils de formatage mettent en forme le contenu de ce littéral comme du HTML
const doc = html`<!doctype html>
  <html lang="fr">
    <head>
      <title>Bonjour</title>
    </head>
    <body>
      <h1>Bonjour tout le monde !</h1>
    </body>
  </html>`;
```

Vous pouvez implémenter naïvement la balise `html` ainsi :

```js
const html = String.raw;
```

Cette implémentation fonctionne effectivement dans le cas précédent. Toutefois, comme `String.raw` concatène les littéraux de chaîne de caractères _bruts_ au lieu des littéraux «&nbsp;traités&nbsp;», les séquences d'échappement ne sont pas interprétées.

```js-nolint
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\\n</canvas>"
```

Ce n'est peut-être pas le résultat souhaité pour une véritable balise d'identité, dont le rôle se limite au balisage et qui ne modifie pas la valeur du littéral. Dans ce cas, vous pouvez créer une balise personnalisée et transmettre à `String.raw` le tableau des littéraux «&nbsp;traités&nbsp;» (c'est-à-dire dont les séquences d'échappement sont interprétées), en les faisant passer pour des chaînes de caractères brutes.

```js-nolint
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
// Certains outils de formatage mettent en forme le contenu de ce littéral comme du HTML
const doc = html`<canvas>\n</canvas>`;
// "<canvas>\n</canvas>"; "\n" devient un saut de ligne
```

Notez que le premier argument est un objet doté d'une propriété `raw`, dont la valeur est un objet semblable à un tableau (avec une propriété `length` et des indices entiers) représentant les segments séparés du littéral de gabarit. Les autres arguments sont les substitutions. Comme la valeur de `raw` peut être n'importe quel objet semblable à un tableau, elle peut même être une chaîne de caractères&nbsp;! Par exemple, `'test'` est traité comme `['t', 'e', 's', 't']`. L'expression suivante équivaut à `` `t${0}e${1}s${2}t` ``&nbsp;:

```js
String.raw({ raw: "test" }, 0, 1, 2); // 't0e1s2t'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.raw` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.raw` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.raw)
- [Gabarits de chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Template_literals)
- L'objet natif {{JSxRef("String")}}
- [Grammaire lexicale JavaScript](/fr/docs/Web/JavaScript/Reference/Lexical_grammar)
