---
title: Assertions
slug: Web/JavaScript/Guide/Regular_Expressions/Assertions
tags:
  - Assertions
  - Guide
  - JavaScript
  - RegExp
translation_of: Web/JavaScript/Guide/Regular_Expressions/Assertions
original_slug: Web/JavaScript/Guide/Expressions_régulières/Assertions
---
{{jsSidebar("JavaScript Guide")}}{{draft}}

Les assertions indiquent les conditions selon lesquelles il est possible d'avoir une correspondance (contenu situé avant la correspondance, situé après ou expressions conditionnelles).

## Types

> **Note :** Le caractère `?` peut également être utilisé comme quantificateur.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          Correspond à 'x' seulement s'il est suivi de 'y'. On appelle cela un
          test de succession (<em>lookahead</em>).
        </p>
        <p>
          Ainsi, <code>/Jack(?=Sparrow)/</code> correspond à 'Jack' seulement
          s'il est suivi de 'Sparrow'.
          <code>/Jack(?=Sparrow|Bauer)/</code> correspond à 'Jack' seulement
          s'il est suivi de 'Sparrow' ou de 'Bauer'. Cependant, ni 'Sparrow' ni
          'Bauer' ne feront partie de la correspondance.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>Correspond à 'x' seulement si 'x' n'est pas suivi de 'y'.</p>
        <p>
          Ainsi, <code>/\d+(?!\.)/</code> correspond à un nombre qui n'est pas
          suivi par un point, cette expression utilisée avec
          <code>la chaîne 3.141</code> correspondra pour '141' mais pas pour
          '3.141'.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          Correspond à <code><em>x</em></code> seulement si
          <code><em>x</em></code> est précédé par <code><em>y</em></code
          >. C'est ce qu'on appelle une recherche arrière (<em>lookbehind</em>).
        </p>
        <p>
          Ainsi /<code>(?&#x3C;=Jack)Sprat/</code> correspond à "Sprat"
          seulement s'il est précédé de "Jack".<br /><code
            >/(?&#x3C;=Jack|Tom)Sprat/</code
          >
          correspond à "Sprat" seulement s'il est précédé de "Jack" ou "Tom".<br />Toutefois,
          "Jack" et "Tom" ne feront pas partie de la correspondance.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          Correspond à <code><em>x</em></code> uniquement si
          <code><em>x</em></code> n'est pas précédé par
          <code><em>y</em></code> (parfois appelée en anglais
          <em>negated lookbehind</em>)<em>.</em>
        </p>
        <p>
          Ainsi, <code>/(?&#x3C;!-)\d+/</code> correspondra à un nombre
          seulement si celui-ci n'est pas précédé d'un signe moins.<br /><code
            >/(?&#x3C;!-)\d+/.exec('3')</code
          >
          cible "3".<br /> <code>/(?&#x3C;!-)\d+/.exec('-3')</code>  ne trouve
          aucune correspondance car le nombre est précédé d'un signe
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Assertion avant (_lookahead_)

```js
let regex = /Premier(?= test)/g;

console.log('Premier test'.match(regex)); // [ 'Premier' ]
console.log('Premier truc'.match(regex)); // null
console.log("Voici le Premier test de l'année.".match(regex)); // [ 'Premier' ]
console.log('Voici le Premier truc du mois.'.match(regex)); // null
```

### Assertion avant négative

L'expression rationnelle `/\d+(?!\.)/` permettra de rechercher plusieurs chiffres si ceux-ci ne sont pas suivis d'un point décimal. Ainsi, `/\d+(?!\.)/.exec('3.141')` trouvera la sous-chaîne "141" mais pas "3."

```js
console.log(/\d+(?!\.)/g.exec('3.141')); // [ '141', index: 2, input: '3.141' ]
```

### Signification différente de `'?!'` entre les assertions et les intervalles

La combinaison de caractères `?!` a un sens différent entre les [assertions](/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Assertions) `/x(?!y)/` et les [intervalles](/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Groupes_et_intervalles) `[^?!]`.

```js
let orangePasCitron = "Voulez-vous avoir une orange? Oui, je ne veux pas avoir de citron!";

let choixPasCitron = /[^?!]+avoir(?! un citron)[^?!]+[?!]/gi
console.log(orangePasCitron.match(choixPasCitron)); // [ 'Voulez-vous avoir une orange?' ]

let choixPasOrange = /[^?!]+avoir(?! une orange)[^?!]+[?!]/gi
console.log(orangePasCitron.match(choixPasOrange)); // [ 'Oui, je ne veux pas avoir de citron!' ]
```

### Assertion arrière (_lookbehind_)

```js
let oranges = ['espèce orange A ', 'sorte orange B', 'espèce orange C',];

let especesOranges = oranges.filter( fruit => fruit.match(/(?<=espèce )orange/));
console.log(especesOranges); // [ 'espèce orange A ', 'espèce orange C' ]
```
