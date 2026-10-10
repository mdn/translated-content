---
title: Assertions
slug: Web/JavaScript/Guide/Regular_expressions/Assertions
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

Les assertions incluent les limites, qui indiquent le début et la fin des lignes et des mots, ainsi que d'autres motifs indiquant d'une manière ou d'une autre qu'une correspondance est possible (y compris les assertions anticipées, les assertions de précédence et les expressions conditionnelles).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Assertions RegExp", "taller")}}

```js interactive-example
const text = "Un renard rapide";

const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
// Résultat attendu : Array ["rapide"]

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
// Résultat attendu : Array ["Un", "renard", "rapide"]

const regexpFoxQuality = /\w+(?= renard)/;
console.log(text.match(regexpFoxQuality));
// Résultat attendu : Array ["rapide"]
```

## Types

### Assertions de type limite

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Assertion de début de limite d'entrée&nbsp;:</strong></a>
          Correspond au début de l'entrée. Si le <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) est activé,
          correspond également immédiatement après un caractère de saut de ligne. Par exemple,
          <code>/^A/</code> ne correspond pas au «&nbsp;A&nbsp;» dans «&nbsp;un A&nbsp;», mais correspond au
          premier «&nbsp;A&nbsp;» dans «&nbsp;Un A&nbsp;».
        </p>
        <div class="notecard note">
          <p>
            <strong>Note&nbsp;:</strong> Ce caractère a une signification différente lorsqu'il
            apparaît au début d'une
            <a
              href="/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
              >classe de caractères</a
            >.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion"><strong>Assertion de fin de limite d'entrée&nbsp;:</strong></a>
          Correspond à la fin de l'entrée. Si le <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"><code>multiline</code></a> (m) est activé,
          correspond également immédiatement avant un caractère de saut de ligne. Par exemple,
          <code>/g$/</code> ne correspond pas au «&nbsp;g&nbsp;» dans «&nbsp;mangeur&nbsp;», mais correspond au
          «&nbsp;g&nbsp;» dans «&nbsp;lag&nbsp;».
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\A</code></td>
      <td>
        <p>
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Assertion de début de limite de tampon&nbsp;:</strong></a> Correspond au début de l'ensemble de la chaîne de caractères, indépendamment de la présence de l'indicateur <code>m</code>.
          Valide uniquement en <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode">mode sensible à l'Unicode</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\z</code></td>
      <td>
        <p>
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Assertion de fin de limite de tampon&nbsp;:</strong></a> Correspond à la fin de l'ensemble de la chaîne de caractères, indépendamment de la présence de l'indicateur <code>m</code>.
          Valide uniquement en <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode">mode sensible à l'Unicode</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\Z</code></td>
      <td>
        <p>
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion"><strong>Assertion de fin de limite de tampon avec saut de ligne optionnel&nbsp;:</strong></a> Correspond à la fin de l'ensemble de la chaîne de caractères, mais permet une séquence de caractères de saut de ligne facultative (soit un <a href="/fr/docs/Web/JavaScript/Reference/Lexical_grammar#terminateurs_de_lignes">terminateur de ligne</a> ou une séquence <code>\r\n</code>).
          Valide uniquement en <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode">mode sensible à l'Unicode</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Assertion de limite de mot&nbsp;:</strong></a>
          Correspond à une limite de mot. Il s'agit de la position où un caractère de mot
          n'est pas suivi ou précédé par un autre caractère de mot, comme entre
          une lettre et un espace. Notez qu'une limite de mot correspondante n'est pas
          incluse dans la correspondance. En d'autres termes, la longueur d'une limite de mot correspondante est zéro.
        </p>
        <p>Exemples&nbsp;:</p>
        <ul>
          <li><code>/\bl/</code> correspond au «&nbsp;l&nbsp;» dans «&nbsp;lune&nbsp;».</li>
          <li>
            <code>/un\b/</code> ne correspond pas au «&nbsp;un&nbsp;» dans «&nbsp;lune&nbsp;», car «&nbsp;un&nbsp;» est suivi par «&nbsp;e&nbsp;» qui est un caractère de mot.
          </li>
          <li>
            <code>/une\b/</code> correspond au «&nbsp;une&nbsp;» dans «&nbsp;lune&nbsp;», car «&nbsp;une&nbsp;» est à la fin de la chaîne de caractères, donc pas suivie par un caractère de mot.
          </li>
          <li>
            <code>/\w\b\w/</code> ne correspond jamais à quoi que ce soit, car un caractère de mot ne peut jamais être suivi à la fois par un caractère qui n'est pas un mot et un caractère de mot.
          </li>
        </ul>
        <p>
          Pour correspondre à un caractère de retour arrière (<code>[\b]</code>), voir
          <a
            href="/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >Classes de caractères</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion"><strong>Assertion de non-limite de mot&nbsp;:</strong></a>
          Correspond à une position qui n'est pas une limite de mot. Il s'agit d'une position où le caractère précédent et le caractère suivant sont du même type&nbsp;: soit les deux doivent être des caractères de mot, soit les deux doivent être des caractères qui ne sont pas des mots, par exemple entre deux lettres ou entre deux espaces. Le début et la fin d'une chaîne de caractères sont considérés comme des caractères qui ne sont pas des mots. Comme pour la limite de mot correspondante, la non-limite de mot correspondante n'est également pas incluse dans la correspondance. Par exemple, <code>/\Bdi/</code> correspond à «&nbsp;di&nbsp;» dans «&nbsp;à midi&nbsp;», et
          <code>/hi\B/</code> correspond à «&nbsp;hi&nbsp;» dans «&nbsp;peut-être hier&nbsp;».
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Autres assertions

> [!NOTE]
> Le caractère `?` peut également être utilisé comme quantificateur.

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
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Assertion anticipée&nbsp;:</strong></a>
          Correspond à «&nbsp;x&nbsp;» uniquement si «&nbsp;x&nbsp;» est suivi de «&nbsp;y&nbsp;». Par exemple, <code>/Jack(?=Sprat)/</code> correspond à «&nbsp;Jack&nbsp;» uniquement s'il est suivi de «&nbsp;Sprat&nbsp;».<br />
          <code>/Jack(?=Sprat|Frost)/</code> correspond à «&nbsp;Jack&nbsp;» uniquement s'il est suivi de «&nbsp;Sprat&nbsp;» ou «&nbsp;Frost&nbsp;». Cependant, ni «&nbsp;Sprat&nbsp;» ni «&nbsp;Frost&nbsp;» ne fait partie des résultats de la correspondance.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion"><strong>Assertion anticipée négative&nbsp;:</strong></a>
          Correspond à «&nbsp;x&nbsp;» uniquement si «&nbsp;x&nbsp;» n'est pas suivi de «&nbsp;y&nbsp;». Par exemple, <code>/\d+(?!\.)/</code> correspond à un nombre uniquement s'il n'est pas suivi d'un point décimal. <code>/\d+(?!\.)/.exec('3.141')</code> correspond à «&nbsp;141&nbsp;» mais pas à «&nbsp;3&nbsp;».
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Assertion de précédence&nbsp;:</strong></a>
          Correspond à «&nbsp;x&nbsp;» uniquement si «&nbsp;x&nbsp;» est précédé de «&nbsp;y&nbsp;». Par exemple, <code>/(?&#x3C;=Jack)Sprat/</code> correspond à «&nbsp;Sprat&nbsp;» uniquement s'il est précédé de «&nbsp;Jack&nbsp;». <code>/(?&#x3C;=Jack|Tom)Sprat/</code> correspond à «&nbsp;Sprat&nbsp;» uniquement s'il est précédé de «&nbsp;Jack&nbsp;» ou de «&nbsp;Tom&nbsp;». Cependant, ni «&nbsp;Jack&nbsp;» ni «&nbsp;Tom&nbsp;» ne fait partie des résultats de la correspondance.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <a href="/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion"><strong>Assertion de précédence négative&nbsp;:</strong></a>
          Correspond à «&nbsp;x&nbsp;» uniquement si «&nbsp;x&nbsp;» n'est pas précédé de «&nbsp;y&nbsp;». Par exemple, <code>/(?&#x3C;!-)\d+/</code> correspond à un nombre uniquement s'il n'est pas précédé d'un signe moins. <code>/(?&#x3C;!-)\d+/.exec('3')</code> correspond à «&nbsp;3&nbsp;». <code>/(?&#x3C;!-)\d+/.exec('-3')</code>  la correspondance est introuvable, car le nombre est précédé du signe moins.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Exemple d'aperçu des types de délimiteurs

<!-- cSpell:ignore greon -->

```js
// Utiliser des délimiteurs Regex pour corriger une chaîne de caractères erronée.
bogueLignesMultiples = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// 1) Utiliser ^ pour faire correspondre le début de la chaîne de caractères et immédiatement après un saut de ligne.
bogueLignesMultiples = bogueLignesMultiples.replace(/^t/gim, "h");
console.log(1, bogueLignesMultiples); // corrige « tey » => « hey » et « tangs » => « hangs », mais ne modifie pas « traa ».

// 2) Utiliser $ pour corriger la correspondance à la fin du texte.
bogueLignesMultiples = bogueLignesMultiples.replace(/aa$/gim, "ee.");
console.log(2, bogueLignesMultiples); // corrige « traa » en « tree. ».

// 3) Utiliser \b pour faire correspondre les caractères situés exactement à la frontière entre un mot et un espace.
bogueLignesMultiples = bogueLignesMultiples.replace(/\bi/gim, "t");
console.log(3, bogueLignesMultiples); // corrige « ihe » => « the » mais ne modifie pas « light ».

// 4) Utiliser \B pour faire correspondre les caractères à l'intérieur des frontières d'une entité.
fixedMultiline = bogueLignesMultiples.replace(/\Bo/gim, "e");
console.log(4, fixedMultiline); // corrige « greon » => « green » mais ne modifie pas « on ».
```

### Faire correspondre le début de l'entrée en utilisant le caractère de contrôle `^`

Utiliser `^` pour faire correspondre le début de l'entrée. Dans cet exemple, nous pouvons obtenir les fruits qui commencent par «&nbsp;A&nbsp;» grâce à une expression régulière `/^A/`. Pour sélectionner les fruits appropriés, nous pouvons utiliser la méthode [`filter`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) avec une fonction [fléchée](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

```js
const fruits = ["Pomme", "Pastèque", "Orange", "Avocat", "Fraise"];

// Sélectionne les fruits commençant avec « A » avec la Regex /^A/.
// Ici, le symbole de contrôle « ^ » est utilisé seulement pour faire correspondre le début de l'entrée.

const fruitCommencantParA = fruits.filter((fruit) => /^A/.test(fruit));
console.log(fruitCommencantParA); // [ 'Avocat' ]
```

Dans le deuxième exemple, `^` sert à la fois à faire correspondre le début de l'entrée et à créer une classe de caractères niée ou complémentée lorsqu'il apparaît dans les [classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes).

```js
const fruits = ["Pomme", "Pastèque", "Orange", "Avocat", "Fraise"];

// Sélectionne les fruits qui ne commencent pas par 'A' avec l'expression régulière /^[^A]/.
// Cet exemple présente les deux significations du symbole '^' :
// 1) Faire correspondre le début de l'entrée
// 2) Une classe de caractères niée ou complémentée : [^A]
// Autrement dit, cette classe correspond à tout ce qui ne se trouve pas entre crochets.

const fruitNeCommencantPasParA = fruits.filter((fruit) => /^[^A]/.test(fruit));

console.log(fruitNeCommencantPasParA); // [ 'Pomme', 'Pastèque', 'Orange', 'Fraise' ]
```

Voir plus d'exemples dans la [référence sur l'assertion de limite d'entrée](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion).

### Faire correspondre une limite de mot

Dans cet exemple, l'expression régulière correspond aux noms de fruits contenant un mot qui se termine par «&nbsp;ge&nbsp;» ou «&nbsp;rt&nbsp;».

```js
const fruitsAvecDescription = ["Pomme rouge", "Orange orange", "Avocat vert"];

// Sélectionne les descriptions contenant des mots qui se terminent par 'ge' ou 'rt' :
const selectionGeRt = fruitsAvecDescription.filter((description) =>
  /(?:ge|rt)\b/.test(description),
);

console.log(selectionGeRt); // [ 'Pomme rouge', 'Avocat vert' ]
```

Voir plus d'exemples dans la [référence sur l'assertion de limite de mot](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion).

### Assertion anticipée

Dans cet exemple, l'expression régulière correspond au mot «&nbsp;premier&nbsp;» uniquement s'il est suivi du verbe «&nbsp;teste&nbsp;», sans inclure «&nbsp;teste&nbsp;» dans le résultat de la correspondance.

```js
const expressionPremierTeste = /premier(?= teste)/gi;

console.log("Le premier teste le fruit.".match(expressionPremierTeste)); // [ 'premier' ]
console.log("Le premier pêche.".match(expressionPremierTeste)); // null
console.log(
  "Dans cet exemple, le premier teste le fruit cette année.".match(
    expressionPremierTeste,
  ),
); // [ 'premier' ]
console.log(
  "Dans cet exemple, le premier pêche ce mois-ci.".match(
    expressionPremierTeste,
  ),
); // null
```

Voir plus d'exemples dans la [référence sur l'assertion anticipée](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion).

### Assertion anticipée négative simple

Par exemple, `/\d+(?!\.)/` correspond à un nombre uniquement s'il n'est pas suivi d'un point décimal. `/\d+(?!\.)/.exec('3.141')` correspond à «&nbsp;141&nbsp;» mais pas à «&nbsp;3&nbsp;».

```js
console.log(/\d+(?!\.)/g.exec("3.141")); // [ '141', index: 2, input: '3.141' ]
```

Voir plus d'exemples dans la [référence sur l'assertion anticipée](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion).

### Significations différentes de la combinaison « ?! » dans les assertions et les classes de caractères

La combinaison `?!` a des significations différentes dans les assertions comme `/x(?!y)/` et les [classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) comme `[^?!]`.

```js
const orangeSansCitron =
  "Voulez-vous manger une orange ? Oui, je ne veux pas manger de citron !";

// Significations différentes de la combinaison '?!' dans les assertions /x(?!y)/ et les plages /[^?!]/
const expressionSansCitron = /[^?!]+manger(?! de citron)[^?!]+[?!]/gi;
console.log(orangeSansCitron.match(expressionSansCitron)); // [ 'Voulez-vous manger une orange ?' ]

const expressionSansOrange = /[^?!]+manger(?! une orange)[^?!]+[?!]/gi;
console.log(orangeSansCitron.match(expressionSansOrange)); // [ ' Oui, je ne veux pas manger de citron !' ]
```

### Assertion de précédence

Dans cet exemple, l'expression régulière remplace le mot «&nbsp;orange&nbsp;» par «&nbsp;pomme&nbsp;» uniquement s'il est précédé du mot «&nbsp;mûre&nbsp;».

```js
const oranges = ["mûre orange A", "verte orange B", "mûre orange C"];

const nouveauxFruits = oranges.map((fruit) =>
  fruit.replace(/(?<=mûre )orange/, "pomme"),
);
console.log(nouveauxFruits); // ['mûre pomme A', 'verte orange B', 'mûre pomme C']
```

Voir plus d'exemples dans la [référence sur l'assertion de précédence](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion).

## Voir aussi

- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- Le guide [des classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- Le guide [des quantificateurs](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
- Le guide [des groupes et des références arrière](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- L'objet natif [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- La référence [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- [Assertion de limite d'entrée&nbsp;: `^`, `$`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Assertion anticipée&nbsp;: `(?=...)`, `(?!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Assertion de précédence&nbsp;: `(?<=...)`, `(?<!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Assertion de limite de mot&nbsp;: `\b`, `\B`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
