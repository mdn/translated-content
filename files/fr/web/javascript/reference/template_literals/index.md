---
title: Littéraux de gabarits
slug: Web/JavaScript/Reference/Template_literals
tags:
  - Chaîne de caractères
  - ECMAScript 2015
  - Guide
  - JavaScript
  - Littéraux de gabarits
translation_of: Web/JavaScript/Reference/Template_literals
original_slug: Web/JavaScript/Reference/Littéraux_gabarits
---
{{JsSidebar("More")}}

Les littéraux de gabarits sont des littéraux de chaînes de caractères permettant d'intégrer des expressions. Avec eux, on peut utiliser des chaînes de caractères multi-lignes et des fonctionnalités d'interpolation.

> **Note :** Dans les premières versions de la spécification ECMAScript 2015, cette fonctionnalité était intitulée «&nbsp;gabarits de chaîne de caractères&nbsp;». Dans la suite de cet article, les expressions «&nbsp;gabarits de texte&nbsp;», «&nbsp;gabarits de libellés&nbsp;», «&nbsp;littéraux de gabarits&nbsp;» et «&nbsp;gabarits&nbsp;» seront équivalents.

## Syntaxe

```js
`texte`

`ligne de texte 1
  ligne de texte 2`

`texte ${expression} texte`

etiquette `texte ${expression} texte`
```

## Description

Les gabarits sont délimités par des caractères [accent grave](https://fr.wikipedia.org/wiki/Accent_grave) (\` \`)  au lieu des apostrophes doubles ou simples. Les gabarits peuvent contenir des espaces réservés (_placeholders_). Ces espaces sont indiqués par le signe dollar ($) et des accolades (`${expression})`. Les expressions dans les espaces réservés et le texte compris dans ces espaces sont passés à une fonction.

Pour créer la chaîne finale, la fonction par défaut concatène simplement les différentes parties en une seule chaîne. Toutefois, on peut utiliser une fonction spécifique pour obtenir un comportement différent et recomposer la chaîne avec une autre logique. On parlera alors [de gabarit étiqueté (cf. ci-après)](#Gabarits_étiquetés).

```js
let rep = 42;
console.log(`La réponse est ${rep}`); // Gabarit simple avec la concaténation par défaut

function concatenationAdHoc(chaines, reponse){
  let parite;
  if(reponse % 2 === 0){
    parite = "paire";
  } else {
    parite = "impaire";
  }
  return `${chaines[0]}${parite}.`;
}
// concaténation spécifique où on modifie la sortie
console.log(concatenationAdHoc`La réponse est ${rep}.`);
```

Pour utiliser des accents graves dans un gabarit, on les échappera avec une barre oblique inverse (\\) :

```js
`\`` === "`"; // true
```

### Les chaînes de caractères multi-lignes

Tous les caractères de saut de ligne insérés dans la source font partie du gabarit. Avec des chaînes de caractères normales, il aurait fallu utiliser la syntaxe suivante pour obtenir des chaînes multi-lignes :

```js
console.log('ligne de texte 1\n'+
'ligne de texte 2');
// "ligne de texte 1
// ligne de texte 2"
```

Pour obtenir le même effet avec les gabarits, on peut désormais écrire :

```js
console.log(`ligne de texte 1
ligne de texte 2`);
// "ligne de texte 1
//  ligne de texte 2"
```

### Interpolation d'expressions

Pour intégrer des expressions dans des chaînes de caractères normales, il fallait utiliser la syntaxe suivante :

```js
let a = 5;
let b = 10;
console.log('Quinze vaut ' + (a + b) + ' et\nnon ' + (2 * a + b) + '.');
// "Quinze vaut 15 et
// non 20."
```

On peut désormais utiliser le sucre syntaxique fourni par les gabarits pour rendre les substitutions plus lisibles :

```js
let a = 5;
let b = 10;
console.log(`Quinze vaut ${a + b} et
non ${2 * a + b}.`);
// "Quinze vaut 15 et
// non 20."
```

### Imbrication de gabarits

Parfois, l'imbrication d'un gabarit est la solution la plus simple (et peut-être la plus lisible) pour obtenir des chaînes de caractères configurables.

En ES5 :

```js
let classes = 'header'
classes += (isLargeScreen() ?
   '' : item.isCollapsed ?
     ' icon-expander' : ' icon-collapser');
```

En ES2015 avec des gabarits et sans imbrication :

```js
const classes = `header ${ isLargeScreen() ? '' :
    (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;
```

En ES2015 avec des gabarits imbriqués&nbsp;:

```js
const classes = `header ${ isLargeScreen() ? '' :
 `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
```

### Gabarits étiquetés

Les _gabarits étiquetés_ (_tagged templates_) sont une forme plus avancée de gabarits. On peut ici utiliser une fonction pour analyser les différents fragments du gabarit. Le premier argument passé à la fonction est l'ensemble de valeurs issues de chaînes de caractères sous la forme d'un tableau. Les arguments ensuite passés à la fonction seront les expressions contenues dans le gabarit. La fonction pourra ainsi créer une chaîne avec une autre forme de concaténation et utiliser une logique spécifique. La fonction utilisée pour le formatage du gabarit peut être nommée comme n'importe quelle autre fonction.

```js
let personne = 'Michou';
let age = 28;

function monEtiquette(chaines, expPersonne, expAge) {
  let chn0 = chaines[0]; // "ce "
  let chn1 = chaines[1]; // " est un "

  // Techniquement, il y a une chaîne après
  // l'expression finale (dans notre exemple),
  // mais elle est vide (""), donc ne pas en tenir compte.
  // var chn2 = chaines[2];

  let chnAge;
  if (expAge > 99){
    chnAge = 'centenaire';
  } else {
    chnAge = 'jeunot';
  }
  // On peut tout à fait renvoyer une chaîne construite
  // avec un gabarit
  return `${chn0}${expPersonne}${chn1}${chnAge}`;
}

let sortie = monEtiquette`ce ${ personne } est un ${ age }`;

console.log(sortie);
// ce Michou est un jeunot
```

### Chaînes brutes

La propriété spéciale `raw`, disponible sur le premier argument de la fonction du gabarit étiqueté, vous permet d'accéder aux chaînes brutes, telles qu'elles ont été entrées, sans traiter [les séquences d'échappement](/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Utilisation_des_caractères_spéciaux).

```js
function etiquette(chaines) {
  console.log(chaines.raw[0]);
}

etiquette`ligne de texte 1 \n ligne de texte 2`;
// affichera dans la console :
// "ligne de texte 1 \n ligne de texte 2"
```

En outre, la méthode {{jsxref("String.raw()")}} a pour fonction de créer des chaînes de caractères brutes, exactement comme la fonction de gabarit et de concaténation de chaînes par défaut le ferait&nbsp;:

```js
let chn = String.raw`Salut\n${2+3}!`;
// "Salut\n5!"

chn.length;
// 9

chn.split('').join(',');
// "S,a,l,u,t,\,n,5,!"
```

### Les gabarits étiquetés et les séquences d'échappement

#### Comportement de ES2016

Quant à ECMAScript 2016, les gabarits étiquetés se conforment aux règles de séquences d'échappement suivantes :

- Les séquences d'échappement Unicode commencent par "\u", par exemple`\u00A9`
- Les séquences d'échappement pour les points de code Unicode sont indiquées par "\u{}", par exemple `\u{2F804}`
- Les séquences d'échappement hexadécimales commencent par "\x", par exemple `\xA9`
- Les séquences d'échappement octales commencent par un "\0o" suivi d'un (ou plusieurs) chiffre(s), par exemple `\0o251`.

Cela signifie qu'un gabarit étiqueté comme celui qui suit pose problème du fait que, selon la grammaire ECMAScript, un analyseur recherchera des séquences d'échappement Unicode valides, mais trouvera la syntaxe mal formée :

```js
latex`\unicode`
// Génère, dans les anciennes versions ECMAScript (ES2016 et précédentes)
// SyntaxError: malformed Unicode character escape sequence
```

#### Révision ES2018 pour les séquences d'échappement illégales

Les gabarits étiquetés doivent permettre l'intégration d'autres langages (par exemple, des [DSL](https://fr.wikipedia.org/wiki/Langage_d%C3%A9di%C3%A9) ou du [LaTeX](https://fr.wikipedia.org/wiki/LaTeX)), dans lesquels d'autres séquences d'échappement sont fréquentes. La proposition [Template Literal Revision](https://tc39.github.io/proposal-template-literal-revision/) pour ECMAScript (étape 4, à intégrer dans le standard ECMAScript 2018) supprime la restriction syntaxique des séquences d'échappement dans les gabarits étiquetés.

Toutefois, les séquences d'échappement illégales doivent toujours être représentées dans la version "bidouillée". Elles seront affichées comme un élément {{jsxref("undefined")}} dans le tableau "bidouillé" :

```js
function latex(chn) {
 return { "bidouillee": chn[0], "brute": chn.raw[0] }
}

latex`\unicode`

// { bidouillee: undefined, brute: "\\unicode" }
```

Notez que la restriction sur les séquences d'échappement est uniquement supprimée pour les gabarits _étiquetés_, et non pour les gabarits de libellés *non étiquetés*&nbsp;:

```js example-bad
let mauvaise = `mauvaise séquence d'échappement : \unicode`;
```

## Spécifications

| Spécification                                                                                | État                         | Commentaires                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#sec-template-literals', 'Template Literals')}} | {{Spec2('ES2015')}}     | Définition initiale. Définie dans plusieurs sections de la spécification : [Template Literals](https://www.ecma-international.org/ecma-262/6.0/#sec-template-literals), [Tagged Templates](https://www.ecma-international.org/ecma-262/6.0/#sec-tagged-templates) |
| {{SpecName('ESDraft', '#sec-template-literals', 'Template Literals')}} | {{Spec2('ESDraft')}} | Définie dans plusieurs sections de la spécification : [Template Literals](https://tc39.github.io/ecma262/#sec-template-literals), [Tagged Templates](https://tc39.github.io/ecma262/#sec-tagged-templates)                                                        |

## Compatibilité des navigateurs

{{Compat("javascript.grammar.template_literals")}}

## Voir aussi

- {{jsxref("String")}}
- {{jsxref("String.raw()")}}
- [Grammaire lexicale](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale)
- _[Template-like strings in ES3 compatible syntax](https://gist.github.com/WebReflection/8f227532143e63649804)_
- [_ES6 en détails : les gabarits de libellé_ sur tech.mozfr.org](https://tech.mozfr.org/post/2015/05/27/ES6-en-details-%3A-les-gabarits-de-chaines-de-caracteres)
- _[Styled Components](https://www.styled-components.com/)_
