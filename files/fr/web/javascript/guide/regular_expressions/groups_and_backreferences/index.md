---
title: Groupes et références arrière
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
---

{{jsSidebar("JavaScript Guide")}}

Les groupes permettent de regrouper différents motifs ensemble et les groupes de capture permettent d'extraire des informations supplémentaires quant aux correspondances entre une expression rationnelle et une chaîne de caractères. Les références arrière correspondent au groupe précédemment capturé dans la même expression rationnelle.

{{EmbedInteractiveExample("pages/js/regexp-groups-ranges.html")}}

## Types

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>(x)</code></td>
      <td>
        <p>
          <strong>Groupe de capture&nbsp;:</strong> correspond à <code>x</code> et mémorise la correspondance. Ainsi, <code>/(toto)/</code> correspond à "toto" dans la chaîne de caractères `"toto truc"` et mémorise cette correspondance.
        </p>
        <p>
          Une expression rationnelle peut avoir plusieurs groupes de capture. Dans les résultats, les correspondances des groupes de capture sont dans un tableau dont les éléments sont généralement dans le même ordre que les parenthèses gauches des groupes de capture. Il s'agit la plupart du temps de l'ordre des groupes de capture, mais peut aider lorsqu'il y a une imbrication de ces groupes. On accède aux correspondances en utilisant les indices du résultat (<code>[1], …, [n]</code
          >) ou avec les propriétés objets prédéfinies de <code>RegExp</code> (<code>$1, …, $9</code>).
        </p>
        <p>
          Les groupes de capture ont un impact sur les performances. Si vous n'avez pas besoin de mémoriser les correspondances, préférez l'utilisation des parenthèses non-capturantes (voir ci-après).
        </p>
        <p>
          <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match">String.match()</a></code> ne retournera pas de groupes si le marqueur <code>/.../g</code> est actif. Toutefois, il reste possible d'utiliser <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll">String.matchAll()</a></code> pour obtenir toutes les correspondances.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&lt;Nom&gt;x)</code></td>
      <td>
        <p>
          <strong>Groupe de capture nommé&nbsp;:</strong> correspond à <code>x</code> et enregistre cette correspondance dans la propriété <code>groups</code> des correspondances renvoyées avec le nom fourni <code>&lt;Nom&gt;</code>. Les chevrons (<code>&lt;</code>
          and <code>&gt;</code>) sont nécessaire pour indiquer le nom du groupe.
        </p>
        <p>
          Ainsi, pour extraire le code de zone d'un numéro de téléphone américain, on pourra utiliser <code>/\((?&lt;area>\d\d\d)\)/</code>. Le numéro correspondant serait alors accessible via <code>matches.groups.area</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:x)</code></td>
      <td>
        <strong>Groupe non-capturant&nbsp;:</strong> correspond à <code>x</code> mais ne mémorise pas cette correspondance. La sous-chaîne de caractères correspondante ne peut pas être récupérée depuis les éléments du tableau résultant (<code>[1], …, [n]</code>) ou depuis les propriétés prédéfinies de l'objet <code>RegExp</code> (<code>$1, …, $9</code>).
      </td>
    </tr>
    <tr>
      <td>
        <code>\n</code>
      </td>
      <td>
        Où <code>n</code> est un entier positif. Une référence arrière à la dernière sous-chaîne correspondant au n-ième groupe (selon l'ordre des parenthèses gauches). Ainsi, <code>/pomme(,)\sorange\1/</code> correspond à "pomme, orange," dans la chaîne de caractères "pomme, orange, cerise, pêche".
      </td>
    </tr>
    <tr>
      <td><code>\k&lt;Nom&gt;</code></td>
      <td>
        <p>
          Une référence arrière à la dernière correspondance du <strong>groupe de capture nommé</strong> désigné par <code>&lt;Nom&gt;</code>.
        </p>
        <p>
          Ainsi, <code>/(?&lt;titre&gt;\w+), oui \k&lt;titre&gt;/</code> correspondra à "Chef, oui Chef" dans "Bien reçu ? Chef, oui Chef !".
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> <code>\k</code> est utilisé ici de façon littérale pour indiquer le début d'une référence arrière vers un groupe de capture nommé.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Utiliser les groupes

```js
const listePersonnes = `Prénom : Jean, Nom_famille : Biche
Prénom : Jeanne, Nom_famille : Ferrant`;

const regexpNames = /Prénom : (\w+), Nom_famille : (\w+)/gm;
for (const correspondance of listePersonnes.matchAll(regexpNames)) {
  console.log(`Bonjour ${correspondance[1]} ${correspondance[2]}`);
}
```

### Utiliser les groupes nommés

```js
const listePersonnes = `Prénom : Jean, Nom_famille : Biche
Prénom : Jeanne, Nom_famille : Ferrant`;

const regexpNames = /Prénom : (?<prenom>\w+), Nom_famille : (?<nom>\w+)/gm;
for (const correspondance of listePersonnes.matchAll(regexpNames)) {
  console.log(
    `Bonjour ${correspondance.groups.prenom} ${correspondance.groups.nom}`,
  );
}
```

### Utiliser les groupes et les références arrière

```js
const citation = `Simple quote "'" et double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const correspondance of citation.matchAll(regexpQuotes)) {
  console.log(correspondance[0]);
}
```

### Utiliser les groupes et les indices de correspondance

En utilisant le marqueur `d`, les indices de chaque groupe capturant sont renvoyés. Cela s'avère notamment utile si on veut établir des liens entre chaque groupe et le texte d'origine, par exemple pour fournir des diagnostics avec un compilateur.

```js
const code = `function add(x, y) {
  return x + y;
}`;
const functionRegexp =
  /(function\s+)(?<name>[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*)/du;
const match = functionRegexp.exec(code);
const lines = code.split("\n");
lines.splice(
  1,
  0,
  " ".repeat(match.indices[1][1] - match.indices[1][0]) +
    "^".repeat(match.indices.groups.name[1] - match.indices.groups.name[0]),
);
console.log(lines.join("\n"));
// function add(x, y) {
//          ^^^
//   return x + y;
// }
```

## Voir aussi

- [Une prothèse d'émulation pour les groupes de capture nommés](https://github.com/zloirock/core-js#ecmascript-string-and-regexp), disponible avec la bibliothèque [`core-js`](https://github.com/zloirock/core-js)
- [Guide sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions)

  - [Classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
  - [Assertions](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - [Quantificateurs](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
  - [Séquences d'échappement pour les propriétés Unicode](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

- [Le constructeur `RegExp()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [`ClassRanges` dans la spécification ECMAScript](https://tc39.es/ecma262/multipage/text-processing.html#sec-classranges)
