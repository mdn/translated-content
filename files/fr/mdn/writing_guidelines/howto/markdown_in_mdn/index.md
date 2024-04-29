---
title: Comment écrire du Markdown
slug: MDN/Writing_guidelines/Howto/Markdown_in_MDN
l10n:
  sourceCommit: 134cdabf5742ed1fd65b1c90ee19d8cc425ce999
---

{{MDNSidebar}}

Cette page décrit comment nous utilisons le Markdown pour écrire la documentation sur MDN Web Docs. Nous avons choisi le Markdown personnalisé de Github (GFM) comme base, et nous avons ajouté quelques extensions pour supporter certaines choses que nous devons faire sur MDN et qui ne sont pas supportées par GFM.

## Base : le Markdown personnalisé de GitHub

La base pour le Markdown de MDN est le Markdown personnalisé de Github (GFM)&nbsp;: <https://github.github.com/gfm/>. Cela signifie que vous pouvez vous référer à la spécification GFM pour tout ce qui n'est pas explicitement spécifié sur cette page. GFM à son tour est un surensemble de CommonMark (<https://spec.commonmark.org>).

## Liens

La spécification GFM défini deux types basiques de liens&nbsp;:

- [les liens en ligne](https://github.github.com/gfm/#inline-link), dans lesquels la destination est donnée directement après le texte du lien
- [les liens de référence](https://github.github.com/gfm/#reference-link), dans lesquels la destination est définie ailleurs dans le document.

Sur MDN, nous autorisons uniquement les liens en ligne.

Voici la manière correcte d'écrire des liens GFM sur MDN&nbsp;:

```md example-good
Les [Macarons](https://fr.wikipedia.org/wiki/Macaron) sont délicieux mais difficiles à faire.
```

Ceci est une manière incorrecte d'écrire des liens sur MDN&nbsp;:

```md example-bad
Les [Macarons][macaron] sont délicieux mais difficiles à faire.

[macaron]: https://fr.wikipedia.org/wiki/Macaron
```

## Blocs de code d'exemple

Dans GFM et CommonMark, les auteurs peuvent utiliser des "blocs de code" pour délimiter les blocs `<pre>`. Le bloc de code ouvrant peut être suivi par du texte appelé "texte d'information". La spécification établit ceci&nbsp;:

> Le premier mot du texte d'information est généralemennt utilisé pour spécifier le langage de l'exemple de code, et est rendu dans l'attribut de classe de la balise de code.

Il est possible pour le texte d'information de contenir plusieurs mots&nbsp;:

````md
```fee fi fo fum
// code d'exemple
```
````

Sur MDN, les auteurs utiliserons les blocs de code pour les exemples de code. Ils doivent spécifier le langage de l'exemple de code dans le premier mot du texte d'information, et cela sera utiliser pour fournir de la coloration syntaxique pour le bloc. Les mots suivant sont supportés&nbsp;:

- Langages de programmation
  - JavaScript
    - `js` - JavaScript
    - `ts` - TypeScript
    - `jsx` - React JSX
    - `tsx` - React TSX
  - C-like
    - `c` - C
    - `cpp` - C++
    - `cs` - C#
    - `java` - Java
  - Autres
    - `python` - Python
    - `php` - PHP
    - `rust` - Rust
    - `glsl` - GLSL (Shaders OpenGL)
    - `sql` - Commandes SeQueL
    - `wasm` - WebAssembly
    - `webidl` - Langage de Définition d'Interface Web
- Mise en forme
  - `css` - CSS
  - `scss` - Sass (SCSS)
  - `less` - Less
- Balisage
  - `html` - HTML
  - `svg` - SVG
  - `xml` - XML
  - `mathml` - MathML
  - `md` - Markdown
  - `latex` - LaTeX
- Ligne de commande
  - `bash` - Bash/Shell
  - `batch` - Batch (Windows Shell)
  - `powershell` - PowerShell
- Fichiers de configuration/données
  - `json` - JSON
  - `ini` - INI
  - `yaml` - YAML
  - `toml` - TOML
  - `sql` - Base de données SQL
  - `ignore` - Fichier Gitignore
  - `apacheconf` - Configuration Apache
  - `nginx` - Configuration NGINX
- Modèles
  - `django` - Modèles Django
  - `svelte` - Modèles Svelte
  - `handlebars` - Modèles Handlebars
  - `pug` - [Modèles Pug](https://pugjs.org/api/getting-started.html) (peuvent être utilisés par [Express](/fr/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer))
- Autres
  - `plain` - Texte brut
  - `diff` - Fichier de différence
  - `http` - En-têtes HTTP
  - `regex` - Expression régulière
  - `uri` - URIs et URLs

Par exemple&nbsp;:

````md
```js
const greeting = "Je possède la coloration syntaxique du JavaScript";
```
````

Si la coloration syntaxique que vous souhaitez utiliser n'est pas listée au-dessus, vous devriez marquer le bloc de code comme du texte brut (`plain`). D'autres langages peuvent être demandés grâce au processus [expliqué sur GitHub](https://github.com/orgs/mdn/discussions/170#discussioncomment-3404366).

### Supression du formattage

Les auteurs peuvent ajouter le suffixe `-nolint` à n'importe quel identificateur de langage&nbsp;:

````md-nolint
```html-nolint
<p>
Je ne suis pas formatté.
</p>
```
````

Les blocs de code comme cela auront bien la coloration syntaxique et seront reconnus par le système d'exemple en direct, mais seront ignorés par les outils de formattage comme Prettier. Les auteurs devraient utiliser ce suffixe pour montrer du code invalide ou d'autres manières de formatter que les outils de formattage ne devrait pas corriger.

### Classes supplémentaires (textes d'information)

GFM supporte les [textes d'information](https://github.github.com/gfm/#info-string), qui permettent aux auteurs d'ajouter des informations additionnelles à propos d'un bloc de code. Sur MDN, les textes d'information sont convertis en noms de classe.

Les auteurs pourront ajouter l'un des textes d'information suivant&nbsp;:

- `example-good`&nbsp;: mettre cet exemple en forme en tant que bon exemple (à suivre).
- `example-bad`&nbsp;: mettre cet exemple en forme en tant que mauvais exemple (à éviter).
- `hidden`&nbsp;: ne pas afficher ce bloc de code sur la page. À utiliser pour les exemples en direct.

Par exemple&nbsp;:

````md
```js example-good
const greeting = "Je suis un bon exemple";
```

```js example-bad
const greeting = "Je suis un mauvais exemple";
```

```js hidden
const greeting = "Je suis une salutation secrète";
```
````

Ces exemples seront affichés comme suit&nbsp;:

```js example-good
const greeting = "Je suis un bon exemple";
```

```js example-bad
const greeting = "Je suis un mauvais exemple";
```

### Référence de la discussion

Ce problème a été résolu dans&nbsp;:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yari/pull/7017>

## Notes, avertissements, et encadrés

Certains auteurs veulent attirer l'attention sur une partie du contenu. Pour réaliser cela, ils utilisent un bloc de code GFM avec un premier paragraphe spécial. Il en existe trois types&nbsp;: les notes, les avertissements et les remarques.

- Pour ajouter une note, créez un bloc de code dont le premier paragraphe commence par `**Note :**`.
- Pour ajouter un avertissement, créez un bloc de code dont le premier paragraphe commence par `**Attention :**`.
- Pour ajouter un encadré, créez un bloc de code dont le premier paragraphe commence par `**Remarque :**`.

Les notes et les avertissements afficheront le texte **Note :** ou **Attention :** dans la sortie, tandis que les remarques ne le feront pas. Cela fait des remarques un bon choix lorsqu'un auteur veut utiliser un titre personnalisé.

Le traitement des mots de balisage fonctionne sur l'ASA produit, pas sur les caractères exactes fournis en entrée. Cela signifie que fournir `<strong>Note :</strong>` génèrera aussi une note. Cependant, la syntaxe Markdown est requise par souci de style.

Plusieurs lignes sont produites par un bloc de code vide de la même manière que pour les paragraphes normaux. De plus, plusieurs lignes sans espace sont aussi traitées comme une ligne de Markdown normale, et sont donc concaténées.

Le bloc de code peut contenir d'autres éléments de type bloc.

### Exemples

#### Note

```md
> **Note :** Voici comment écrire une note.
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

> **Note :** Voici comment écrire une note.
>
> Elle peut avoir plusieurs lignes.

#### Avertissements

```md
> **Attention :** Voici comment écrire un avertissement.
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

> **Attention :** Voici comment écrire un avertissement.
>
> Il peut avoir plusieurs paragraphes.

#### Encadrés

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

> **Remarque :**
>
> **Voici comment écrire un encadré.**
>
> Il peut avoir plusieurs paragraphes.

#### Avertissement traduit

Comme les textes «&nbsp;Note :&nbsp;» ou «&nbsp;Attention :&nbsp;» apparaissent aussi dans la sortie affichée, ils doivent être sensibles aux traductions. En pratique, cela signifie que chaque locale supporté par MDN doit fournir ses propres traductions de ces textes, et que la plateforme doit les reconnaître comme indiquant que la construction à besoin d'un traitement spécial.

Les locales sont stockées dans [Yari](https://github.com/mdn/yari/tree/main/markdown/localizations) en tant que fichier JSON dans le format [gettext](https://www.gnu.org/software/gettext/). Réferez-vous à ces fichiers pour déterminer quel texte devrait être utilisé à la place de «&nbsp;Note:&nbsp;» ou «&nbsp;Warning:&nbsp;» pour cette locale. Si un fichier de locales n'est pas défini, l'anglais sera utilisé en dernier recours.

Par exemple, si nous voulons utiliser «&nbsp;Warnung&nbsp;» pour «&nbsp;Warning&nbsp;» en Allemand, alors dans la page allemande nous écririons&nbsp;:

```md
> **Warnung:** So schreibt man eine Warnung.
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
> **Note :** Voici comment écrire une note.
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

> **Note :** Voici comment écrire une note.
>
> Elle peut contenir des blocs de code.
>
> ```js
> const s = "Je suis dans un bloc de code";
> ```
>
> Comme cela.

### Référence de la discussion

Ce problème a été résolu dans <https://github.com/mdn/content/issues/3483>.

## Listes de définitions

Les listes de définitions sont souvent utilisées sur MDN, mais ne sont pas supportées par GFM. MDN introduit un format personnalisé pour les listes de définitions, qui est une forme modifiée des listes non-ordonnées de GFM ([`<ul>`](/fr/docs/Web/HTML/Element/ul)). Dans ce format&nbsp;:

- La liste `<ul>` de GFM contient n'importe quel nombre d'éléments GFM `<li>` de premier niveau.
- Chacun de ces éléments GFM `<li>` de premier niveau doivent contenir un élément GFM `<ul>` en tant que dernier élément.
- Le dernier `<ul>` imbriqué doit contenir un unique élément GFM `<li>`, dont le contenu textuel doit commencer par «&nbsp;: &nbsp;» (deux points suivis par un espace). Cet élément peut contenir des éléments de type bloc, dont des paragraphes, des blocs de code, des listes incrustées et des notes.

Chacun de ces éléments GFM `<li>` de premier niveau sera transformé en une paire de `<dt>`/`<dd>` comme suit&nbsp;:

- L'élément GFM `<li>` de premier niveau sera analysé comme un élément GFM `<li>` et son contenu comprendra le contenu du `<dt>`, excepté pour le dernier `<ul>` imbriqué qui ne sera pas inclus dans le `<dt>`.
- L'élément `<li>` dans le dernier `<ul>` imbriqué sera analysé comme un élément GFM `<li>` et son contenu sera compris dans le contenu du `<dd>`, excepté le premier «&nbsp;: &nbsp;» qui sera rejeté.

Par exemple, voici un `<dl>`&nbsp;:

````md
- terme1

  - : Ma description du terme1

- `terme2`

  - : Ma description du terme2

    Il peut avoir plusieurs paragraphes, et aussi des blocs de code :

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
        <p>Il peut avoir plusieurs paragraphes, et aussi des blocs de code :</p>
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
    <p>Il peut avoir plusieurs paragraphes, et aussi des blocs de code :</p>
    <pre>
       <code class="brush: js">const thing = 1;</code>
    </pre>
  </dd>
</dl>
```

Les listes de définitions écrite avec cette syntaxe doivent être composées de paires d'éléments `<dt>`/`<dd>`. Avec cette syntaxe, il n'est pas possible d'écrire une liste avec plus d'un élément `<dt>` consécutif ou plus d'un élément `<dd>` consécutif : l'analyseur traiterai cela comme une erreur. Nous nous attendons à ce que presque toutes les listes de définitions sur MDN fonctionnent avec cette limitation, et pour celle qui ne fonctionne pas, les auteurs peuvent utiliser du HTML pur.

Ceci n'est pas permi&nbsp;:

```md example-bad
- `param1`, `param2`, `param3`
  - : Ma description du `param1`
  - : Ma description du `param2`
  - : Ma description du `param3`
```

Dans le cas où un auteur à besoin d'associer plusieurs éléments `<dt>` avec un seul élément `<dd>`, envisagez de les fournir comme un seul élément `<dt>` contenant plusieurs termes séparés par des virgules comme suit&nbsp;:

```md example-good
- `param1`, `param2`, `param3`
  - : Ma description des paramètres 1, 2, and 3
```

La logique pour la syntaxe décrite ici est qu'elle fonctionne assez bien avec des outils qui s'attende à du CommonMark (par exemple, Prettier ou les aperçus GitHub) tout en étant raisonnablement facile à écrire et à analyser.

### Référence de la discussion

Ce problème a été résolu dans <https://github.com/mdn/content/issues/4367>.

## Tableaux

GFM fournit une syntaxe pour créer des [tableaux](https://github.github.com/gfm/#tables-extension-) qui nous utilisons dans MDN. Cependant, il existe certains cas dans lesquels les tableaux de GFM ne nous conviennent pas&nbsp;:

- La syntaxe GFM ne supporte qu'un sous-ensemble des fonctionnalités disponibles dans HTML. Si vous avez besoin d'utiliser des fonctionnalités de tableau qui ne sont pas disponibles dans GFM, utilisez HTML pour le tableau.
- Si la représentation GFM du tableau fait plus de 150 caractères de large, utilisez HTML pour le tableau.
- Nous supportons un type spécial de tableau appelé "tableau de propriétés" possédant sa propre classe CSS et qui est donc toujours en HTML.

Le principe général est que les auteurs devraient utiliser la syntaxe Markdown GFM lorsqu'ils le peuvent, et se tourner vers du HTML pur lorsqu'ils n'ont pas le choix ou que le HTML est plus lisible. Pour plus d'informations, regarder [Quand utiliser les tableaux HTML](#quand-utiliser-les-tableaux-html).

### Style pour la syntaxe des tableaux GFM

Dans la syntaxe GFM, les auteurs peuvent omettre les premières et dernières barres verticales ("|") pour les lignes. Cependant, dans un soucis de lisibilité, les auteurs de MDN doivent inclure ces barres verticales. De plus, les auteurs doivent fournir les derniers espaces dans les lignes de manière à ce que les cellules d'une colonne fassent toutes la même longueur sous la forme du texte brut.

En résumé, les auteurs MDN doivent utiliser ce style&nbsp;:

```md example-good
| En-tête 1 | En-tête 2 | En-tête 3 |
| --------- | --------- | --------- |
| cellule 1 | cellule 2 | cellule 3 |
| cellule 4 | cellule 5 | cellule 6 |
```

et pas ce style&nbsp;:

```md-nolint example-bad
| En-tête 1 | En-tête 2 | En-tête 3 |
| --------- | --- |----------------------|
| cellule 1 | cellule 2 | cellule 3 |
cellule 4 | cellule 5 | cellule 6
```

Par chance, le formattage des tableaux est résolu automatiquement par Prettier, les auteurs peuvent donc compter sur Prettier pour formatter leurs tableaux correctement.

### Quand utiliser les tableaux HTML

Il y a trois principales circonstances dans lesquelles les auteurs devraient utiliser les tabelaux HTML plutôt que la syntaxe GFM&nbsp;:

1. Le tableau utilise des fonctionnalités non supportées par GFM (voir dessous).
2. Le tableau GFM serait trop large pour être lisible.
3. L'auteur veut un type de tableau spécial appelé "tableau de propriétés".

#### Fonctionnalités de tableau non supportés par GFM

Les principales limitations de la syntaxe des tableaux GFM sont&nbsp;:

- Les tableaux GFM doivent avoir une ligne d'en-têtes.
- Les tableaux GFM peuvent ne pas avoir de colonne d'en-têtes.
- GFM n'analysera pas les éléments de type bloc dans les cellules de tableau. Par exemple, vous ne pouvez pas avoir de liste dans une cellule de tableau.
- Les tableaux GFM ne peuvent pas avoir de classes assignées.
- GFM ne supporte aucun élément de tableau à part `<table>`, `<tr>`, `<th>` et `<td>`.
- GFM ne supporte pas les attributs de tableau comme `<colspan>`, `<rowspan>` ou `<scope>`.

Si un auteur a besoin d'utiliser une des fonctionnalités non supportées, il devrait écrire son tableau en HTML.

Notez que nous ne recommandons pas l'usage général des éléments `<caption>` dans les tableaux car cela écarterai la syntaxe GFM.

#### Largeur maximum des tableaux GFM

Même quand un tableau peut être écris en GFM, il est certaines fois mieux d'utiliser HTML, car GFM utilise une approche «&nbsp; de l'art [ASCII](/fr/docs/Glossary/ASCII)&nbsp;» pour les tableaux qui n'est pas lisible lorsque les lignes deviennent trop longues. Examinez les tableaux suivant&nbsp;:

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
      quelque chose, tellement que le formattage des tableaux en GFM commence à
      être illisible.
    </td>
    <td>Quelque chose de court</td>
    <td>
      Une autre cellule avec beaucoup de texte à l'intérieur, qui rentre aussi
      beaucoup dans les détails de quelque chose, tellement que le formattage
      des tableaux en GFM commence à être illisible.
    </td>
    <td>Quelque chose de court</td>
    <td>Quelque chose de court</td>
  </tr>
</table>
```

Avec un format de markdown, cela donne&nbsp;:

```md
| Un en-tête 1           | Un en-tête 2                                                                                                                                                               | Un en-tête 3           | Un en-tête 4                                                                                                                                                                                    | Un en-tête 5           | Un en-tête 6           |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------- |
| Quelque chose de court | Quelque chose de bien plus long qui rentre vraiment dans les détails de quelque chose, tellement que le formattage des tableaux en GFM commence à être vraiment illisible. | Quelque chose de court | Une autre cellule avec beaucoup de texte à l'intérieur, qui rentre aussi beaucoup dans les détails de quelque chose, tellement que le formattage des tableaux en GFM commence à être illisible. | Quelque chose de court | Quelque chose de court |
```

Dans ce cas il serait mieux d'utiliser HTML.

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

Ces pages ne peuvent pas être représentées en GFM car elles possèdent une colonne en-tête, donc les auteurs devraient utiliser HTML dans ce cas de figure. Pour obtenir la mise en forme spéciale, les auteurs devraient appliquer la classe `"properties"` au tableau&nbsp;:

```html
<table class="properties"></table>
```

### Référence de la discussion

Ce problème a été résolu dans <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342> et <https://github.com/mdn/content/issues/7898#issuecomment-913265900>.

## Exposant et indice

Les auteurs pourront utiliser les éléments HTML [`<sup>`](/fr/docs/Web/HTML/Element/sup) et [`<sub>`](/fr/docs/Web/HTML/Element/sub) si nécessaire, mais devraient tuiliser des alternatives si possible, en particulier&nbsp;:

- Pour l'exponentiation, utilisez le caret&nbsp;: `2^53`.
- Pour des expressions ordinales comme 1<sup>er</sup>, préférez des mots comme «&nbsp;premier&nbsp;».
- Pour les notes de bas de page, ne pas marquer les références des notes, par exemple&nbsp;: `<sup>[1]</sup>`.

### Référence de la discussion

Ce problème a été résolu dans <https://github.com/mdn/content/issues/4578>.

## Résumé de la page

Le _résumé de la page_ est le premier paragraphe de «&nbsp;contenu&nbsp;» dans une page — le premier texte qui apparaît après l'en-tête de la page et la [barre latérale](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#barres-laterales-de-navigation) ou la [bannière de la page](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#indicateurs-pour-les-pages-ou-les-sections).

Ce résumé est utilisé pour l'optimisation pour les moteurs de recherche (SEO) et est automatiquement inclus à côté des listes de pages par certaines macros.
Le premier paragraphe devrait donc être à la fois bref et informatif.

### Référence de la discussion

Ce problème a été résolu dans <https://github.com/mdn/content/issues/3923>.

## KumaScript

Les auteurs seront capable d'inclure des appels à des macros KumaScript dans les contenus en prose&nbsp;:

```md
La propriété **`margin`** [CSS](/fr/docs/Web/CSS) définit la taille des marges sur les quatres côtés de l'élément. C'est une propriété raccourcie qui permet de manipuler les autres propriétés de marges : \{{cssxref("margin-top")}}, \{{cssxref("margin-right")}}, \{{cssxref("margin-bottom")}} et \{{cssxref("margin-left")}}.

\{{EmbedInteractiveExample("pages/css/margin.html")}}

Les marges haute et basse n'ont aucun effet sur les élements en ligne (inline) qui ne sont pas remplacés
(par exemple les \{{HTMLElement("span")}} ou \{{HTMLElement("code")}}).
```

Voir [Utiliser les macros](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros) pour plus d'informations sur les macros.
