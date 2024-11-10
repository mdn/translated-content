---
title: Comment écrire du Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 134cdabf5742ed1fd65b1c90ee19d8cc425ce999
---

{{MDNSidebar}}

Cette page décrit comment nous utilisons le Markdown pour écrire la documentation sur MDN Web Docs. Nous avons choisi le Markdown personnalisé de GitHub (GFM) comme base, et nous avons ajouté quelques extensions pour supporter certaines choses que nous devons faire sur MDN et qui ne sont pas supportées par GFM.

## Syntaxe basée sur GFM

La syntaxe Markdown de MDN se base sur le format Markdown de GitHub (GFM)&nbsp;: <https://github.github.com/gfm/> (en anglais). Cela signifie que vous pouvez vous référer à la spécification GFM pour tout ce qui n'est pas explicitement spécifié sur cette page. GFM se base quant à lui sur <i lang="en">CommonMark</i> (<https://spec.commonmark.org> (en anglais)).

## Liens

La spécification GFM définit deux types basiques de liens&nbsp;:

- [Les liens en ligne (en anglais)](https://github.github.com/gfm/#inline-link), dans lesquels la destination est donnée directement après le texte du lien.
- [Les liens de référence (en anglais)](https://github.github.com/gfm/#reference-link), dans lesquels la destination est définie ailleurs dans le document.

Sur MDN, nous autorisons uniquement les liens en ligne.

Voici la manière correcte d'écrire des liens GFM sur MDN&nbsp;:

```md example-good
Les [macarons](https://fr.wikipedia.org/wiki/Macaron) sont délicieux mais difficiles à faire.
```

Ceci est une manière incorrecte d'écrire des liens sur MDN&nbsp;:

```md example-bad
Les [macarons][macaron] sont délicieux mais difficiles à faire.

[macaron]: https://fr.wikipedia.org/wiki/Macaron
```

## Blocs de code d'exemple

Dans GFM et CommonMark, on peut utiliser des «&nbsp;blocs de code&nbsp;» pour délimiter les blocs `<pre>`. Le bloc de code ouvrant peut être suivi par du texte appelé «&nbsp;texte d'information&nbsp;». La spécification établit ceci&nbsp;:

> Le premier mot du texte d'information est généralement utilisé pour spécifier le langage de l'exemple de code, et est rendu dans l'attribut de classe de la balise de code.

Il est possible pour le texte d'information de contenir plusieurs mots&nbsp;:

````md
```fee fi fo fum
// code d'exemple
```
````

Sur MDN, la rédaction utilise les blocs de code pour les exemples de code. Elle doit spécifier le langage de l'échantillon de code dès le premier mot de la chaîne de caractères, et cela fourni de la coloration syntaxique pour le bloc. Les mots suivant sont supportés&nbsp;:

- Langages de programmation
  - JavaScript
    - `js` — JavaScript
    - `ts` — TypeScript
    - `jsx` — React JSX
    - `tsx` — React TSX
  - C ou semblable
    - `c` — C
    - `cpp` — C++
    - `cs` — C#
    - `java` — Java
  - Autres
    - `python` — Python
    - `php` — PHP
    - `rust` — Rust
    - `glsl` — GLSL (Shaders OpenGL)
    - `sql` — Requêtes SQL
    - `wasm` — WebAssembly
    - `webidl` — Langage de définition d'interface web
- Mise en forme
  - `css` — CSS
  - `scss` — Sass (SCSS)
  - `less` — Less
- Balisage
  - `html` — HTML
  - `svg` — SVG
  - `xml` — XML
  - `mathml` — MathML
  - `md` — Markdown
  - `latex` — LaTeX
- Ligne de commande
  - `bash` — Bash/Shell
  - `batch` — Batch (Windows)
  - `powershell` — PowerShell
- Fichiers de configuration/données
  - `json` — JSON
  - `ini` — INI
  - `yaml` — YAML
  - `toml` — TOML
  - `sql` — Base de données SQL
  - `ignore` — Fichier Gitignore
  - `apacheconf` — Configuration Apache
  - `nginx` — Configuration NGINX
- Modèles
  - `django` — Modèles Django
  - `svelte` — Modèles Svelte
  - `handlebars` — Modèles Handlebars
  - `pug` — [Modèles Pug (en anglais)](https://pugjs.org/api/getting-started.html) (peuvent être utilisés par [Express](/fr/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer))
- Autres
  - `plain` — Texte brut
  - `diff` — Fichier de différence
  - `http` — En-têtes HTTP
  - `regex` — Expression rationnelle
  - `uri` — URIs et URLs

Par exemple&nbsp;:

````md
```js
const salutation = "Je possède la coloration syntaxique du JavaScript";
```
````

Si la coloration syntaxique que vous souhaitez utiliser n'est pas listée au-dessus, vous devriez marquer le bloc de code comme du texte brut (`plain`). D'autres langages peuvent être demandés grâce au processus [expliqué sur GitHub (en anglais)](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366).

### Suppression du formatage

On peut ajouter le suffixe `-nolint` à n'importe quel identificateur de langage&nbsp;:

````md-nolint
```html-nolint
<p>
Je ne suis pas formatté.
</p>
```
````

Ces blocs de code auront bien la coloration syntaxique et seront reconnus par le système d'exemple en direct, mais seront ignorés par les outils de formatage comme <i lang="en">Prettier</i>. Il faut utiliser ce suffixe pour montrer du code invalide ou d'autres manières de formater que les outils de formatage ne devraient pas corriger.

### Classes supplémentaires (textes d'information)

GFM supporte les [textes d'information (en anglais)](https://github.github.com/gfm/#info-string), qui permettent d'ajouter des informations additionnelles à propos d'un bloc de code. Sur MDN, les textes d'information sont convertis en noms de classe.

On peut ajouter l'un des textes d'information suivant&nbsp;:

- `example-good`&nbsp;: mettre cet exemple en forme en tant que bon exemple (à suivre).
- `example-bad`&nbsp;: mettre cet exemple en forme en tant que mauvais exemple (à éviter).
- `hidden`&nbsp;: ne pas afficher ce bloc de code sur la page. À utiliser pour les exemples en direct.

Par exemple&nbsp;:

````md
```js example-good
const salutation = "Je suis un bon exemple";
```

```js example-bad
const salutation = "Je suis un mauvais exemple";
```

```js hidden
const salutation = "Je suis une salutation secrète";
```
````

Ces exemples seront affichés comme suit&nbsp;:

```js example-good
const salutation = "Je suis un bon exemple";
```

```js example-bad
const salutation = "Je suis un mauvais exemple";
```

### Référence de la discussion

Ce sujet a été discuté et a fait l'objet d'un consensus dans&nbsp;:

- <https://github.com/mdn/content/issues/3512> (en anglais)
- <https://github.com/mdn/yari/pull/7017> (en anglais)

## Notes, avertissements, et remarques

Parfois, nous devons attirer l'attention sur une partie du contenu. Pour réaliser cela, on utilise un bloc de code GFM avec un premier paragraphe spécial. Il en existe trois types&nbsp;: les notes, les avertissements et les remarques.

- Pour ajouter une note, créez un bloc de citation dont le premier paragraphe commence par `**Note :**`.
- Pour ajouter un avertissement, créez un bloc de citation dont le premier paragraphe commence par `**Attention :**`.
- Pour ajouter un encadré, créez un bloc de citation dont le premier paragraphe commence par `**Remarque :**`.

Les notes et les avertissements afficheront le texte **Note :** ou **Attention :** dans la sortie, tandis que les remarques n'ajoutent pas de texte particulier. Cela en fait un bon choix lorsqu'on souhaite utiliser un titre personnalisé.

Le traitement des mots de balisage fonctionne sur l'ASA (Arbre de syntaxe abstraite) produit, pas sur les caractères exacts fournis en entrée. Cela signifie que fournir `<strong>Note :</strong>` génère aussi une note. Cependant, la syntaxe Markdown est requise par souci de style.

Plusieurs lignes sont produites par un bloc de code vide de la même manière que pour les paragraphes normaux. De plus, plusieurs lignes sans espace sont aussi traitées comme une ligne de Markdown normale, et sont donc concaténées.

Le bloc de code peut contenir d'autres éléments de type bloc.

### Exemples

#### Note

```md
> [!NOTE]
> Voici comment écrire une note.
>
> Elle peut avoir plusieurs lignes.
```

Cela produira le HTML suivant&nbsp;:

```html
<div class="notecard note">
  <p><strong>Note :</strong> Voici comment écrire une note.</p>
  <p>Elle peut avoir plusieurs lignes.</p>
</div>
```

Ce HTML sera affiché comme une boîte mise en valeur&nbsp;:

> [!NOTE]
> Voici comment écrire une note.
>
> Elle peut avoir plusieurs lignes.

#### Avertissements

```md
> [!WARNING]
> Voici comment écrire un avertissement.
>
> Il peut avoir plusieurs paragraphes.
```

Cela produira le HTML suivant&nbsp;:

```html
<div class="notecard warning">
  <p><strong>Warning:</strong> Voici comment écrire un avertissement.</p>
  <p>Il peut avoir plusieurs paragraphes.</p>
</div>
```

Ce HTML sera affiché comme une boîte mise en valeur&nbsp;:

> [!WARNING]
> Voici comment écrire un avertissement.
>
> Il peut avoir plusieurs paragraphes.

#### Remarques

```md
> **Remarque :** **Voici comment écrire un encadré.**
>
> Il peut avoir plusieurs paragraphes.
```

Cela produira le HTML suivant&nbsp;:

```html
<div class="callout">
  <p><strong>Voici comment écrire un encadré.</strong></p>
  <p>Il peut avoir plusieurs paragraphes.</p>
</div>
```

Ce HTML sera affiché comme une remarque&nbsp;:

> [!CALLOUT]
>
> **Voici comment écrire un encadré.**
>
> Il peut avoir plusieurs paragraphes.

#### Traduction des titres pour les notes et avertissements

Comme les textes «&nbsp;Note :&nbsp;» ou «&nbsp;Attention :&nbsp;» apparaissent aussi dans la sortie affichée, ils doivent être traduits selon la langue de la page. En pratique, cela signifie que chaque locale prise en charge par MDN doit fournir ses propres traductions pour ces textes, et que la plateforme doit les reconnaître comme indiquant que la construction à besoin d'un traitement spécial.

Les locales sont stockées dans [Yari (dépôt GitHub en anglais)](https://github.com/mdn/yari/tree/main/markdown/localizations) en tant que fichier JSON dans le format [gettext (en anglais)](https://www.gnu.org/software/gettext/). Référez-vous à ces fichiers pour déterminer quel texte devrait être utilisé à la place de «&nbsp;Note:&nbsp;» ou «&nbsp;Warning:&nbsp;» pour cette locale. Si un fichier de locales n'est pas défini, l'anglais sera utilisé en dernier recours.

Par exemple, si nous voulons utiliser «&nbsp;Warnung&nbsp;» pour «&nbsp;Warning&nbsp;» en allemand, alors dans la page allemande nous écririons&nbsp;:

```md
> [!WARNING]
> So schreibt man eine Warnung.
```

Et cela produira&nbsp;:

```html
<div class="notecard warning">
  <p><strong>Warnung:</strong> So schreibt man eine Warnung.</p>
</div>
```

#### Note contenant un bloc de code

Cet exemple contient un bloc de code.

````md
> [!NOTE]
> Voici comment écrire une note.
>
> Elle peut contenir des blocs de code.
>
> ```js
> const s = "Je suis dans un bloc de code";
> ```
>
> Comme cela.
````

Cela produira le HTML suivant&nbsp;:

```html
<div class="notecard note">
  <p><strong>Note:</strong> Voici comment écrire une note.</p>
  <p>Elle peut contenir des blocs de code.</p>
  <pre class="brush: js">const s = "Je suis dans un bloc de code";</pre>
  <p>Comme cela.</p>
</div>
```

Ce HTML sera affiché comme un bloc de code&nbsp;:

> [!NOTE]
> Voici comment écrire une note.
>
> Elle peut contenir des blocs de code.
>
> ```js
> const s = "Je suis dans un bloc de code";
> ```
>
> Comme cela.

### Référence de la discussion

Voir la discussion et le consensus à ce sujet dans <https://github.com/mdn/content/issues/3483> (en anglais).

## Listes de définitions

Les listes de définitions sont souvent utilisées sur MDN, mais ne sont pas supportées par GFM. MDN introduit un format personnalisé pour les listes de définitions, qui est une forme modifiée des listes non-ordonnées de GFM ([`<ul>`](/fr/docs/Web/HTML/Element/ul)). Dans ce format&nbsp;:

- La liste `<ul>` de GFM contient n'importe quel nombre d'éléments GFM `<li>` de premier niveau.
- Chacun de ces éléments GFM `<li>` de premier niveau doivent contenir un élément GFM `<ul>` en tant que dernier élément.
- Le dernier `<ul>` imbriqué doit contenir un unique élément GFM `<li>`, dont le contenu textuel doit commencer par «&nbsp;:&nbsp;&nbsp;» (deux points suivis par un espace). Cet élément peut contenir des éléments de type bloc, dont des paragraphes, des blocs de code, des listes incrustées et des notes.

Chacun de ces éléments GFM `<li>` de premier niveau sera transformé en une paire de `<dt>`/`<dd>` comme suit&nbsp;:

- L'élément GFM `<li>` de premier niveau sera analysé comme un élément GFM `<li>` et son contenu comprendra le contenu du `<dt>`, excepté pour le dernier `<ul>` imbriqué qui ne sera pas inclus dans le `<dt>`.
- L'élément `<li>` dans le dernier `<ul>` imbriqué sera analysé comme un élément GFM `<li>` et son contenu sera compris dans le contenu du `<dd>`, excepté le premier «&nbsp;:&nbsp;&nbsp;» qui sera rejeté.

Par exemple, voici un `<dl>`&nbsp;:

````md
- terme1

  - : Ma description du terme1

- `terme2`

  - : Ma description du terme2

    Il peut avoir plusieurs paragraphes, et aussi des blocs de code&nbsp;:

    ```js
    const thing = 1;
    ```
````

Dans GFM/CommonMark, cela aurait produit le HTML suivant&nbsp;:

```html
<ul>
  <li>
    <p>terme1</p>
    <ul>
      <li>: Ma description du terme1</li>
    </ul>
  </li>
  <li>
    <p><code>terme2</code></p>
    <ul>
      <li>
        <p>: Ma description du terme2</p>
        <p>
          Il peut avoir plusieurs paragraphes, et aussi des blocs de code&nbsp;:
        </p>
        <pre>
          <code class="brush: js">const thing = 1;</code>
        </pre>
      </li>
    </ul>
  </li>
</ul>
```

Sur MDN, cela produirait le HTML suivant&nbsp;:

```html
<dl>
  <dt>
    <p>terme1</p>
  </dt>
  <dd>Ma description du terme1</dd>
  <dt>
    <p><code>terme2</code></p>
  </dt>
  <dd>
    <p>Ma description du terme2</p>
    <p>
      Il peut avoir plusieurs paragraphes, et aussi des blocs de code&nbsp;:
    </p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

Les listes de définitions écrite avec cette syntaxe doivent être composées de paires d'éléments `<dt>`/`<dd>`. Avec cette syntaxe, il n'est pas possible d'écrire une liste avec plus d'un élément `<dt>` consécutif ou plus d'un élément `<dd>` consécutif&nbsp;: l'analyseur traitera cela comme une erreur. Nous nous attendons à ce que presque toutes les listes de définitions sur MDN fonctionnent avec cette limitation, et pour celles qui ne fonctionnent pas, il est toujours possible d'utiliser du HTML pur.

Ceci n'est pas permis&nbsp;:

```md example-bad
- `param1`, `param2`, `param3`
  - : Ma description du `param1`
  - : Ma description du `param2`
  - : Ma description du `param3`
```

Dans le cas où on a besoin d'associer plusieurs éléments `<dt>` avec un seul élément `<dd>`, envisagez de les fournir comme un seul élément `<dt>` contenant plusieurs termes séparés par des virgules comme suit&nbsp;:

```md example-good
- `param1`, `param2`, `param3`
  - : Ma description des paramètres 1, 2 et 3
```

La syntaxe décrite ici a été choisie parce qu'elle fonctionne assez bien avec des outils qui s'attendent à du <i lang="en">CommonMark</i> (par exemple, <i lang="en">Prettier</i> ou les aperçus GitHub) tout en étant raisonnablement facile à écrire et à analyser.

### Référence de la discussion

La discussion et le consensus sur ce sujet sont sur <https://github.com/mdn/content/issues/4367> (en anglais).

## Tableaux

GFM fournit une syntaxe pour créer des [tableaux (en anglais)](https://github.github.com/gfm/#tables-extension-) que nous utilisons dans MDN. Cependant, il existe certains cas dans lesquels les tableaux de GFM ne nous conviennent pas&nbsp;:

- La syntaxe GFM ne supporte qu'un sous-ensemble des fonctionnalités disponibles dans HTML. Si vous avez besoin d'utiliser des fonctionnalités de tableau qui ne sont pas disponibles dans GFM, utilisez HTML pour le tableau.
- Si la représentation GFM du tableau fait plus de 150 caractères de large, utilisez HTML pour le tableau.
- Nous supportons un type spécial de tableau appelé «&nbsp;tableau de propriétés&nbsp;» possédant sa propre classe CSS et qui est donc toujours en HTML.

Le principe général est qu'il faut utiliser la syntaxe Markdown GFM si possible, et se tourner vers du HTML pur s'il n'y a pas le choix ou que le HTML est plus lisible. Pour plus d'informations, voir [quand utiliser les tableaux HTML](#quand-utiliser-les-tableaux-html).

### Style pour la syntaxe des tableaux GFM

Dans la syntaxe GFM, il est possible d'omettre les premières et dernières barres verticales («&nbsp;|&nbsp;») pour les lignes. Cependant, dans un souci de lisibilité, on veillera sur MDN à inclure ces barres verticales. De plus, on veillera à compléter les lignes par des espaces de manière à ce que les cellules d'une colonne fassent toutes la même longueur sous la forme du texte brut.

En résumé, il faut viser ce style&nbsp;:

```md example-good
| En-tête 1 | En-tête 2 | En-tête 3 |
| --------- | --------- | --------- |
| cellule 1 | cellule 2 | cellule 3 |
| cellule 4 | cellule 5 | cellule 6 |
```

et pas celui-ci&nbsp;:

```md-nolint example-bad
| En-tête 1 | En-tête 2 | En-tête 3 |
| --------- | --- |----------------------|
| cellule 1 | cellule 2 | cellule 3 |
cellule 4 | cellule 5 | cellule 6
```

Heureusement, le formatage des tableaux est traité automatiquement par <i lang="en">Prettier</i>.

### Quand utiliser les tableaux HTML

Il y a trois principales circonstances dans lesquelles il convient d'utiliser les tableaux HTML plutôt que la syntaxe GFM&nbsp;:

1. Le tableau utilise des fonctionnalités non prises en charge par GFM (voir ci-après).
2. Le tableau GFM serait trop large pour être lisible.
3. On souhaite afficher un tableau de propriétés.

#### Fonctionnalités de tableau non prise en charge par GFM

Les principales limitations de la syntaxe des tableaux GFM sont&nbsp;:

- Les tableaux GFM doivent avoir une ligne d'en-tête.
- Les tableaux GFM peuvent ne pas avoir de colonne d'en-tête.
- GFM n'analysera pas les éléments de type bloc dans les cellules de tableau. Par exemple, vous ne pouvez pas avoir de liste dans une cellule de tableau.
- Les tableaux GFM ne peuvent pas avoir de classes assignées.
- GFM ne supporte aucun élément de tableau à part `<table>`, `<tr>`, `<th>` et `<td>`.
- GFM ne supporte pas les attributs de tableau comme `<colspan>`, `<rowspan>` ou `<scope>`.

Si on a besoin d'utiliser une des fonctionnalités non supportées, il faut écrire son tableau en HTML.

Notez que nous ne recommandons pas l'usage général des éléments `<caption>` dans les tableaux, car cela s'écarte de la syntaxe GFM.

#### Largeur maximum des tableaux GFM

Même quand un tableau peut être écris en GFM, il est certaines fois mieux d'utiliser HTML, car GFM utilise une forme «&nbsp;d'art [ASCII](/fr/docs/Glossary/ASCII)&nbsp;» pour les tableaux qui n'est pas lisible lorsque les lignes deviennent trop longues. Examinez les tableaux suivant&nbsp;:

```html
<table>
  <tr>
    <th>Un en-tête 1</th>
    <th>Un en-tête 2</th>
    <th>Un en-tête 3</th>
    <th>Un en-tête 4</th>
    <th>Un en-tête 5</th>
    <th>Un en-tête 6</th>
  </tr>
  <tr>
    <td>Quelque chose de court</td>
    <td>
      Quelque chose de bien plus long qui rentre vraiment dans les détails de
      quelque chose, tellement que le formatage des tableaux en GFM commence à
      être illisible.
    </td>
    <td>Quelque chose de court</td>
    <td>
      Une autre cellule avec beaucoup de texte à l'intérieur, qui rentre aussi
      beaucoup dans les détails de quelque chose, tellement que le formatage des
      tableaux en GFM commence à être illisible.
    </td>
    <td>Quelque chose de court</td>
    <td>Quelque chose de court</td>
  </tr>
</table>
```

Avec GFM, cela donne&nbsp;:

```md-nolint
| Un en-tête 1           | Un en-tête 2                                                                                                                                                               | Un en-tête 3           | Un en-tête 4                                                                                                                                                                                   | Un en-tête 5           | Un en-tête 6           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------- |
| Quelque chose de court | Quelque chose de bien plus long qui rentre vraiment dans les détails de quelque chose, tellement que le formatage des tableaux en GFM commence à être vraiment illisible. | Quelque chose de court | Une autre cellule avec beaucoup de texte à l'intérieur, qui rentre aussi beaucoup dans les détails de quelque chose, tellement que le formatage des tableaux en GFM commence à être illisible. | Quelque chose de court | Quelque chose de court |
```

Dans ce cas, il est préférable d'utiliser HTML.

Cela nous amène à la directive suivante&nbsp;: _si la représentation GFM du tableau fait plus de 150 caractères de large, utilisez HTML pour le tableau_.

#### Tableaux de propriétés

Les tableaux de propriétés sont un type de tableau spécifique utilisés pour afficher du contenu structuré de type propriété-valeur à travers un ensemble de pages d'un type particulier. Ces tableaux possèdent deux colonnes&nbsp;: la première colonne est un en-tête et liste les propriétés tandis que la seconde liste leurs valeurs pour cet élément en particulier. Par exemple, voici les propriétés de l'interface [`PannerNode`](/fr/docs/Web/API/PannerNode)&nbsp;:

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Nombre d'entrées</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Nombre de sorties</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Mode de comptage des canaux</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Nombre de canaux</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Interpretation des canaux</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Ces pages ne peuvent pas être représentées en GFM car elles possèdent une colonne en-tête, et il faut donc utiliser HTML dans ce cas. Pour obtenir la mise en forme spéciale correspondante, on applique la classe `"properties"` au tableau&nbsp;:

```html
<table class="properties"></table>
```

### Référence de la discussion

Voir les discussions et consensus sur les <i lang="en">issues</i> GitHub suivantes <https://github.com/mdn/content/issues/4325> (en anglais), <https://github.com/mdn/content/issues/7342> (en anglais) et <https://github.com/mdn/content/issues/7898#issuecomment-913265900> (en anglais).

## Exposant et indice

On peut utiliser les éléments HTML [`<sup>`](/fr/docs/Web/HTML/Element/sup) et [`<sub>`](/fr/docs/Web/HTML/Element/sub) si nécessaire, mais on veillera à utiliser des formes alternatives dans les cas suivants&nbsp;:

- Pour l'exponentiation, utilisez le circonflexe&nbsp;: `2^53`.
- Pour des expressions ordinales comme 1<sup>er</sup>, préférez des mots comme «&nbsp;premier&nbsp;».
- Pour les notes de bas de page, ne pas marquer les références des notes, par exemple&nbsp;: `<sup>[1]</sup>`.

### Référence de la discussion

Voir l'<i lang="en">issue</i> GitHub suivante pour la discussion et le consensus <https://github.com/mdn/content/issues/4578> (en anglais).

## Résumé de la page

Le résumé de la page est le premier paragraphe de contenu dans une page — le premier texte qui apparaît après l'en-tête de la page et la [barre latérale](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#barres-laterales-de-navigation) ou la [bannière de la page](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#indicateurs-pour-les-pages-ou-les-sections).

Ce résumé est utilisé pour l'optimisation pour les moteurs de recherche (SEO) et est automatiquement inclus à côté des listes de pages par certaines macros.
Le premier paragraphe devrait donc être à la fois bref et informatif.

### Référence de la discussion

Voir l'<i lang="en">issue</i> GitHub suivante pour la discussion et le consensus <https://github.com/mdn/content/issues/3923> (en anglais).

## KumaScript

Au sein d'une page, on pourra inclure des appels à des macros KumaScript dans les contenus en prose&nbsp;:

```md
La propriété **`margin`** [CSS](/fr/docs/Web/CSS) définit la taille des marges sur les quatres côtés de l'élément. C'est une propriété raccourcie qui permet de manipuler les autres propriétés de marges : \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}} et \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

Les marges haute et basse n'ont aucun effet sur les élements en ligne (inline) qui ne sont pas remplacés
(par exemple les \{{HTMLElement("span")}} ou \{{HTMLElement("code")}}).
```

Voir [Utiliser les macros](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros) pour plus d'informations sur les macros.
