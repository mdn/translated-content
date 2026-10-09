---
title: Expressions rationnelles
slug: Web/JavaScript/Guide/Regular_expressions
l10n:
  sourceCommit: a7acf4c7a38f1df8f5d0dee1f17672968ac979d5
---

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}

Les expressions rationnelles sont des motifs utilisés pour correspondre à certaines combinaisons de caractères au sein de chaînes de caractères. En JavaScript, les expressions rationnelles sont également des objets. Ces motifs sont utilisés avec les méthodes {{JSxRef("RegExp/exec", "exec()")}} et {{JSxRef("RegExp/test", "test()")}} de {{JSxRef("RegExp")}}, et avec les méthodes {{JSxRef("String/match", "match()")}}, {{JSxRef("String/matchAll", "matchAll()")}}, {{JSxRef("String/replace", "replace()")}}, {{JSxRef("String/replaceAll", "replaceAll()")}}, {{JSxRef("String/search", "search()")}} et {{JSxRef("String/split", "split()")}} de {{JSxRef("String")}}.
Ce chapitre décrit les expressions rationnelles en JavaScript. Il fournit un aperçu de chaque élément de syntaxe. Pour une explication détaillée de la sémantique de chacun, lisez la référence sur les [expressions rationnelles](/fr/docs/Web/JavaScript/Reference/Regular_expressions).

## Créer une expression rationnelle

Il est possible de construire une expression rationnelle de deux façons&nbsp;:

- Utiliser un littéral d'expression régulière, qui correspond à un motif contenu entre deux barres obliques, par exemple&nbsp;:

  ```js
  const re = /ab+c/;
  ```

  Lorsque les littéraux d'expression régulière sont utilisés, l'expression est compilée lors du chargement du script. Il est préférable d'utiliser cette méthode lorsque l'expression régulière reste constante, afin d'avoir de meilleurs performances.

- Ou en appelant le constructeur de l'objet {{JSxRef("RegExp")}}, par exemple&nbsp;:

  ```js
  const re = new RegExp("ab+c");
  ```

  L'utilisation de la fonction constructeur permet la compilation de l'expression rationnelle lors de l'exécution.
  Utilisez la fonction constructeur lorsque vous savez que le motif de l'expression rationnelle est variable, ou si vous ne connaissez pas le motif et que vous l'obtenez d'une autre source, comme une saisie utilisateur·ice.

## Écrire un motif d'expression rationnelle

Un motif d'expression rationnelle est composé de caractères simples (comme `/abc/`), ou d'une combinaison de caractères simples et spéciaux (comme `/ab*c/` ou `/Chapitre (\d+)\.\d*/`).
Le dernier exemple inclut des parenthèses, qui sont utilisées comme dispositif de mémoire.
La correspondance effectuée avec cette partie du motif est mémorisée pour une utilisation ultérieure, comme décrit dans [Utiliser les groupes](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#utiliser_les_groupes).

### Utiliser des motifs simples

Le
s motifs simples sont construits à partir de caractères pour lesquels on souhaite avoir une correspondance directe. Par exemple, le motif `/abc/` correspond aux combinaisons de caractères dans les chaînes de caractères uniquement lorsque la séquence exacte `"abc"` apparaît (tous les caractères ensemble et dans cet ordre).
Une telle correspondance réussit dans les chaînes de caractères `"Salut, sais-tu où est ton abc ?" ` et `"Les derniers modèles d'avions ont évolué à partir de la catapulte."`.
Dans les deux cas, la correspondance se fait avec la sous-chaîne de caractères `"abc"`.
Il n'y a pas de correspondance dans la chaîne de caractères `"Attraper le crabe"`, car bien qu'elle contienne la sous-chaîne de caractères `"ab c"`, elle ne contient pas la sous-chaîne de caractères exacte `"abc"`.

### Utiliser des caractères spéciaux

Lorsqu'on recherche une correspondance qui nécessite autre chose qu'une correspondance directe, comme trouver un ou plusieurs `"b"`, ou trouver un espace blanc, on peut inclure des caractères spéciaux dans le motif.
Par exemple, pour correspondre à _un seul `"a"` suivi de zéro ou plusieurs `"b"` suivis de `"c"`_, on utilise le motif `/ab*c/`&nbsp;: le `*` après `"b"` signifie «&nbsp;0 ou plusieurs occurrences de l'élément précédent&nbsp;».
Dans la chaîne de caractères `"cbbabbbbcdebc"`, ce motif correspond à la sous-chaîne de caractères `"abbbbc"`.

Les pages suivantes fournissent des listes des différents caractères spéciaux qui entrent dans chaque catégorie, ainsi que des descriptions et des exemples.

- Le guide [des assertions](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
  - : Les assertions comprennent les limites, qui indiquent le début et la fin des lignes et des mots, ainsi que d'autres motifs qui indiquent qu'une correspondance est possible, notamment les assertions avant, arrière et conditionnelles.
- Guide des [classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
  - : Distinguent différents types de caractères, par exemple les lettres et les chiffres.
- Guide des [groupes et rétro-références](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
  - : Les groupes rassemblent plusieurs motifs, et les groupes de capture fournissent des informations supplémentaires sur les sous-correspondances lorsque vous recherchez une correspondance dans une chaîne de caractères. Les rétro-références désignent un groupe précédemment capturé dans la même expression rationnelle.
- Guide des [quantificateurs](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
  - : Indiquent le nombre de caractères ou d'expressions à faire correspondre.

Pour consulter dans un seul tableau tous les caractères spéciaux utilisables dans les expressions rationnelles, reportez-vous au tableau suivant&nbsp;:

<table class="standard-table">
  <caption>
    Les caractères spéciaux dans les expressions rationnelles.
  </caption>
  <thead>
    <tr>
      <th scope="col">Caractères / constructions</th>
      <th scope="col">Article correspondant</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>[xyz]</code>, <code>[^xyz]</code>, <code>.</code>,
        <code>\d</code>, <code>\D</code>, <code>\w</code>, <code>\W</code>,
        <code>\s</code>, <code>\S</code>, <code>\t</code>, <code>\r</code>,
        <code>\n</code>, <code>\v</code>, <code>\f</code>, <code>[\b]</code>,
        <code>\0</code>, <code>\c<em>X</em></code>, <code>\x<em>HH</em></code>,
        <code>\u<em>HHHH</em></code>, <code>\u<em>{H…H}</em></code>,
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          <a
            href="/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >Classes de caractères</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>^</code>, <code>$</code>, <code>\b</code>, <code>\B</code>,
        <code>x(?=y)</code>, <code>x(?!y)</code>, <code>(?&#x3C;=y)x</code>,
        <code>(?&#x3C;!y)x</code>
      </td>
      <td>
        <p>
          <a
            href="/fr/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
            >Assertions</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>(<em>x</em>)</code>, <code>(?&#x3C;Name>x)</code>, <code>(?:<em>x</em>)</code>,
        <code>\<em>n</em></code>, <code>\k&#x3C;Name></code>
      </td>
      <td>
        <p>
          <a
            href="/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences"
            >Groupes et rétro-références</a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>*</code>, <code><em>x</em>+</code>, <code><em>x</em>?</code>,
        <code><em>x</em>{<em>n</em>}</code>, <code><em>x</em>{<em>n</em>,}</code>,
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          <a
            href="/fr/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers"
            >Quantificateurs</a
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> [Une antisèche plus complète est également disponible](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) (elle regroupe uniquement des extraits de ces différents articles).

### Échappement

Pour rechercher littéralement un caractère spécial, comme `"*"`, échappez-le en plaçant une barre oblique inverse devant lui. Pour rechercher `"a"` suivi de `"*"` puis de `"b"`, utilisez `/a\*b/` — la barre oblique inverse échappe `"*"` et le rend littéral.

> [!NOTE]
> Pour faire correspondre un caractère spécial, vous pouvez souvent l'encadrer dans une [classe de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) au lieu de l'échapper, par exemple `/a[*]b/`.

De même, si vous écrivez un littéral d'expression rationnelle et devez faire correspondre une barre oblique (`/`), échappez-la (sinon, elle termine le motif).
Pour rechercher la chaîne de caractères `"/example"` suivie d'une ou plusieurs lettres, utilisez `/\/example\/[a-z]+/i`—les barres obliques inverses devant les barres obliques les rendent littérales.

Pour faire correspondre une barre oblique inverse littérale, vous devez échapper la barre oblique inverse.
Par exemple, pour faire correspondre la chaîne de caractères «&nbsp;C:\\&nbsp;» où «&nbsp;C:&nbsp;» peut être n'importe quelle lettre, vous utilisez `/[A-Z]:\\/` — la première barre oblique inverse échappe celle qui suit, donc l'expression recherche une seule barre oblique inverse littérale.

Si vous utilisez le constructeur `RegExp` avec un littéral de chaîne de caractères, rappelez-vous que la barre oblique inverse est un caractère d'échappement dans les littéraux de chaîne de caractères, donc pour l'utiliser dans l'expression rationnelle, vous devez l'échapper au niveau du littéral de chaîne de caractères.
`/a\*b/` et `new RegExp("a\\*b")` créent la même expression, qui recherche «&nbsp;a&nbsp;» suivi d'un «&nbsp;\*&nbsp;» littéral suivi de «&nbsp;b&nbsp;».

La fonction {{JSxRef("RegExp.escape()")}} retourne une nouvelle chaîne de caractères où tous les caractères spéciaux de la syntaxe d'expressions rationnelles sont échappés. Cela vous permet de faire `new RegExp(RegExp.escape("a*b"))` pour créer une expression rationnelle qui correspond uniquement à la chaîne de caractères `"a*b"`.

### Utiliser les parenthèses

Les parenthèses autour de n'importe quelle partie du motif d'expression rationnelle font que cette partie de la sous-chaîne de caractères correspondante est mémorisée.
Une fois mémorisée, la sous-chaîne de caractères peut être rappelée pour une autre utilisation. Voir [les groupes et les rétro-références](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences#utiliser_les_groupes) pour plus de détails.

## Utiliser les expressions régulières en JavaScript

Les expressions rationnelles s'utilisent avec les méthodes {{JSxRef("RegExp/test", "test()")}} et {{JSxRef("RegExp/exec", "exec()")}} de {{JSxRef("RegExp")}}, ainsi qu'avec les méthodes {{JSxRef("String/match", "match()")}}, {{JSxRef("String/matchAll", "matchAll()")}}, {{JSxRef("String/replace", "replace()")}}, {{JSxRef("String/replaceAll", "replaceAll()")}}, {{JSxRef("String/search", "search()")}} et {{JSxRef("String/split", "split()")}} de {{JSxRef("String")}}.

| Méthode                                         | Description                                                                                                                                                                           |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{JSxRef("RegExp/exec", "exec()")}}             | Effectue une recherche d'une correspondance dans une chaîne de caractères. Elle retourne un tableau d'informations ou `null` en cas de non-correspondance.                            |
| {{JSxRef("RegExp/test", "test()")}}             | Vérifie s'il y a une correspondance dans une chaîne de caractères. Retourne `true` ou `false`.                                                                                        |
| {{JSxRef("String/match", "match()")}}           | Retourne un tableau contenant toutes les correspondances, y compris les groupes de capture, ou `null` si aucune correspondance n'est trouvée.                                         |
| {{JSxRef("String/matchAll", "matchAll()")}}     | Retourne un itérateur contenant toutes les correspondances, y compris les groupes de capture.                                                                                         |
| {{JSxRef("String/search", "search()")}}         | Vérifie s'il existe une correspondance dans une chaîne de caractères. Elle retourne l'index de la correspondance, ou `-1` si la recherche échoue.                                     |
| {{JSxRef("String/replace", "replace()")}}       | Effectue une recherche d'une correspondance dans une chaîne de caractères et remplace la sous-chaîne de caractères correspondante par une sous-chaîne de caractères de remplacement.  |
| {{JSxRef("String/replaceAll", "replaceAll()")}} | Effectue une recherche de toutes les occurrences dans une chaîne de caractères et remplace les sous-chaînes de caractères trouvées par une sous-chaîne de caractères de remplacement. |
| {{JSxRef("String/split", "split()")}}           | Utilise une expression rationnelle ou une chaîne de caractères fixe pour diviser une chaîne de caractères en un tableau de sous-chaînes de caractères.                                |

Pour vérifier si un motif correspond à une chaîne de caractères, utilisez les méthodes `test()` ou `search()`&nbsp;; pour obtenir davantage d'informations (au prix d'une exécution plus lente), utilisez les méthodes `exec()` ou `match()`.
Lorsque la correspondance réussit, `exec()` et `match()` retournent un tableau et mettent à jour les propriétés de l'objet d'expression rationnelle associé ainsi que celles de l'objet prédéfini `RegExp`.
Lorsque la correspondance échoue, `exec()` retourne `null` (qui est converti en `false`).

Dans l'exemple suivant, le script utilise la méthode `exec()` pour trouver une correspondance dans une chaîne de caractères.

```js
const monRegex = /d(b+)d/g;
const monTableau = monRegex.exec("cdbbdbsbz");
```

Si vous n'avez pas besoin d'accéder aux propriétés de l'expression rationnelle, vous pouvez aussi créer `monTableau` à l'aide de ce script&nbsp;:

```js
const monTableau = /d(b+)d/g.exec("cdbbdbsbz");
// identiques à 'cdbbdbsbz'.match(/d(b+)d/g); cependant,
// 'cdbbdbsbz'.match(/d(b+)d/g) renvoie [ "dbbd" ]
// tandis que /d(b+)d/g.exec('cdbbdbsbz') retourne [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
```

(Consultez la section [Utiliser l'indicateur de recherche globale avec `exec()`](#utiliser_lindicateur_de_recherche_globale_avec_exec) pour plus d'informations sur les différents comportements.)

Pour construire l'expression rationnelle à partir d'une chaîne de caractères, vous pouvez également utiliser ce script&nbsp;:

```js
const monRegex = new RegExp("d(b+)d", "g");
const monTableau = monRegex.exec("cdbbdbsbz");
```

Avec ces scripts, la correspondance réussit, retourne le tableau et met à jour les propriétés présentées dans le tableau suivant.

<table class="standard-table">
  <caption>
    Résultats de l'exécution d'une expression rationnelle.
  </caption>
  <thead>
    <tr>
      <th scope="col">Objet</th>
      <th scope="col">Propriété ou index</th>
      <th scope="col">Description</th>
      <th scope="col">Dans cet exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>monTableau</code></td>
      <td></td>
      <td>La chaîne de caractères correspondante et toutes les sous-chaînes de caractères mémorisées.</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>L'index à partir de 0 de la correspondance dans la chaîne de caractères d'entrée.</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>La chaîne de caractères d'origine.</td>
      <td><code>'cdbbdbsbz'</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>Les derniers caractères correspondants.</td>
      <td><code>'dbbd'</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>monRegex</code></td>
      <td><code>lastIndex</code></td>
      <td>L'index à partir duquel commencer la correspondance suivante.
        (Cette propriété n'est définie que si l'expression rationnelle utilise l'option g, décrite dans
        <a href="#recherche_avancée_avec_indicateurs">Recherche avancée avec des indicateurs</a>.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Le texte du modèle. Mis à jour au moment de la création de l'expression rationnelle, pas lors de son exécution.
      </td>
      <td><code>'d(b+)d'</code></td>
    </tr>
  </tbody>
</table>

Comme le montre la deuxième forme de cet exemple, vous pouvez utiliser une expression rationnelle créée à l'aide d'une déclaration d'objet sans l'affecter à une variable.
Dans ce cas, cependant, chaque occurrence correspond à une nouvelle expression rationnelle.
C'est pourquoi, si vous utilisez cette forme sans l'affecter à une variable, vous ne pouvez pas accéder par la suite aux propriétés de cette expression rationnelle.
Par exemple, supposons que vous ayez le script suivant&nbsp;:

```js
const monRegex = /d(b+)d/g;
const monTableau = monRegex.exec("cdbbdbsbz");
console.log(`La valeur de lastIndex est ${monRegex.lastIndex}`);

// "La valeur de lastIndex est 5"
```

En revanche, si vous avez le script suivant&nbsp;:

```js
const monTableau = /d(b+)d/g.exec("cdbbdbsbz");
console.log(`La valeur de lastIndex est ${/d(b+)d/g.lastIndex}`);

// "La valeur de lastIndex est 0"
```

Les occurrences de `/d(b+)d/g` dans les deux instructions correspondent à des objets d'expression rationnelle différents et possèdent donc des valeurs différentes pour leur propriété `lastIndex`.
Pour accéder aux propriétés d'une expression rationnelle créée avec un initialiseur d'objet, affectez-la d'abord à une variable.

### Recherche avancée avec indicateurs

Les expressions rationnelles acceptent des indicateurs facultatifs qui activent notamment la recherche globale et la recherche sans distinction de casse.
Vous pouvez utiliser ces indicateurs séparément ou ensemble dans n'importe quel ordre, et ils font partie intégrante de l'expression rationnelle.

| Indicateur | Description                                                                                                            | Propriété correspondante                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `d`        | Génère des indices pour les correspondances de sous-chaînes de caractères.                                             | {{JSxRef("RegExp/hasIndices", "hasIndices")}}   |
| `g`        | Recherche globale.                                                                                                     | {{JSxRef("RegExp/global", "global")}}           |
| `i`        | Recherche sans distinction de casse.                                                                                   | {{JSxRef("RegExp/ignoreCase", "ignoreCase")}}   |
| `m`        | Fait correspondre `^` et `$` au début et à la fin de chaque ligne plutôt qu'à ceux de la chaîne de caractères entière. | {{JSxRef("RegExp/multiline", "multiline")}}     |
| `s`        | Permet à `.` de correspondre aux caractères de nouvelle ligne.                                                         | {{JSxRef("RegExp/dotAll", "dotAll")}}           |
| `u`        | «&nbsp;Unicode&nbsp;»&nbsp;; traitez un motif comme une séquence de points de code Unicode.                            | {{JSxRef("RegExp/unicode", "unicode")}}         |
| `v`        | Une évolution du mode `u` avec davantage de fonctionnalités Unicode.                                                   | {{JSxRef("RegExp/unicodeSets", "unicodeSets")}} |
| `y`        | Effectuez une recherche «&nbsp;collante&nbsp;» qui commence à la position actuelle dans la chaîne de caractères cible. | {{JSxRef("RegExp/sticky", "sticky")}}           |

Pour inclure un indicateur dans l'expression rationnelle, utilisez cette syntaxe&nbsp;:

```js
const re = /pattern/flags;
```

ou

```js
const re = new RegExp("pattern", "flags");
```

Notez que les indicateurs font partie intégrante d'une expression rationnelle. Vous ne pouvez pas les ajouter ni les retirer ultérieurement.

Par exemple, `re = /\w+\s/g` crée une expression rationnelle qui recherche un ou plusieurs caractères suivis d'une espace dans toute la chaîne de caractères.

```js
const re = /\w+\s/g;
const str = "fee fi fo fum";
const monTableau = str.match(re);
console.log(monTableau);

// ["fee ", "fi ", "fo "]
```

Vous pouvez remplacer la ligne suivante&nbsp;:

```js
const re = /\w+\s/g;
```

par&nbsp;:

```js
const re = new RegExp("\\w+\\s", "g");
```

et obtenir le même résultat.

L'indicateur `m` définit une chaîne de caractères d'entrée multi-ligne comme un ensemble de lignes distinctes.
Avec l'indicateur `m`, `^` et `$` correspondent au début ou à la fin de chaque ligne de la chaîne de caractères d'entrée, plutôt qu'au début ou à la fin de la chaîne de caractères entière.

Vous pouvez activer ou désactiver les indicateurs `i`, `m` et `s` dans certaines parties d'une expression rationnelle à l'aide de la syntaxe des [modificateurs](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Modifier).

#### Utiliser l'indicateur de recherche globale avec `exec()`

La méthode {{JSxRef("RegExp.prototype.exec()")}} avec l'indicateur `g` retourne chaque correspondance et sa position, l'une après l'autre.

```js
const str = "fee fi fo fum";
const re = /\w+\s/g;

console.log(re.exec(str)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re.exec(str)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re.exec(str)); // null
```

En revanche, la méthode {{JSxRef("String.prototype.match()")}} retourne toutes les correspondances en une seule fois, mais sans leur position.

```js
console.log(str.match(re)); // ["fee ", "fi ", "fo "]
```

#### Utiliser les expressions rationnelles Unicode

L'indicateur `u` est utilisé pour créer des expressions rationnelles «&nbsp;unicode&nbsp;»&nbsp;; c'est-à-dire des expressions rationnelles qui prennent en charge la correspondance avec du texte unicode. Une fonctionnalité importante activée en mode unicode est celle des [échappements de propriétés Unicode](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape). Par exemple, l'expression rationnelle suivante peut être utilisée pour correspondre à un «&nbsp;mot&nbsp;» unicode arbitraire&nbsp;:

```js
/\p{L}*/u;
```

Les expressions rationnelles Unicode ont également un comportement d'exécution différent. La propriété [`RegExp.prototype.unicode`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) fournit davantage d'explications à ce sujet.

## Exemples

> [!NOTE]
> Plusieurs exemples sont également disponibles dans&nbsp;:
>
> - Les pages de référence pour {{JSxRef("RegExp/exec", "exec()")}}, {{JSxRef("RegExp/test", "test()")}}, {{JSxRef("String/match", "match()")}}, {{JSxRef("String/matchAll", "matchAll()")}}, {{JSxRef("String/search", "search()")}}, {{JSxRef("String/replace", "replace()")}} et {{JSxRef("String/split", "split()")}}
> - Les articles du guide&nbsp;: [classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes), [assertions](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Assertions), [groupes et rétro-références](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) et [quantificateurs](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)

### Utiliser des caractères spéciaux pour vérifier les entrées

Dans l'exemple suivant, l'utilisateur·ice est censé·e entrer un numéro de téléphone.
Lorsque l'utilisateur·ice clique sur le bouton «&nbsp;Vérifier&nbsp;», le script vérifie la validité du numéro.
Si le numéro est valide (correspond à la séquence de caractères définie par l'expression rationnelle), le script affiche un message remerciant l'utilisateur·ice et confirmant le numéro.
Si le numéro est invalide, le script informe l'utilisateur·ice que le numéro de téléphone n'est pas valide.

L'expression rationnelle recherche&nbsp;:

1. le début de la ligne de données&nbsp;: `^`
2. suivis de trois caractères numériques `\d{3}` OU `|` une parenthèse ouvrante `\(`, suivie de trois chiffres `\d{3}`, puis d'une parenthèse fermante `\)`, dans un groupe sans capture `(?:)`
3. suivis d'un tiret, d'une barre oblique ou d'un point dans un groupe de capture `()`
4. suivis de trois chiffres `\d{3}`
5. suivis de la correspondance mémorisée dans le (premier) groupe capturé `\1`
6. suivis de quatre chiffres `\d{4}`
7. suivis de la fin de la ligne de données&nbsp;: `$`

#### HTML

```html
<p>
  Saisissez votre numéro de téléphone (avec l'indicatif régional) puis cliquez
  sur «&nbsp;Vérifier&nbsp;».
  <br />
  Le format attendu ressemble à ###-###-####.
</p>
<form id="form">
  <input id="telephone" />
  <button type="submit">Vérifier</button>
</form>
<p id="sortie"></p>
```

#### JavaScript

```js
const form = document.querySelector("#form");
const entree = document.querySelector("#telephone");
const sortie = document.querySelector("#sortie");

const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

function testInfo(phoneInput) {
  const ok = re.exec(phoneInput.value);

  sortie.textContent = ok
    ? `Merci, votre numéro de téléphone est ${ok[0]}`
    : `${phoneInput.value} n'est pas un numéro de téléphone avec indicatif régional !`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  testInfo(entree);
});
```

#### Résultat

{{EmbedLiveSample("Using_special_characters_to_verify_input")}}

## Outils

- [RegExr <sup>(angl.)</sup>](https://regexr.com/)
  - : Un outil en ligne pour apprendre, créer et tester des expressions régulières.
- [Testeur Regex <sup>(angl.)</sup>](https://regex101.com/)
  - : Un constructeur/débogueur d'expressions régulières en ligne.
- [Tutoriel interactif Regex <sup>(angl.)</sup>](https://regexlearn.com/)
  - : Un tutoriel interactif en ligne, une feuille de référence et un terrain de jeu.
- [Visualiseur Regex <sup>(angl.)</sup>](https://extendsclass.com/regex-tester.html)
  - : Un testeur visuel d'expressions régulières en ligne.

{{PreviousNext("Web/JavaScript/Guide/Representing_dates_times", "Web/JavaScript/Guide/Indexed_collections")}}
