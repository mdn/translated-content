---
title: font-family
slug: Web/CSS/Reference/Properties/font-family
l10n:
  sourceCommit: 5a8de324f0aa3873d757f68e4fcaf6bbc0104711
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-family`** définit une liste priorisée d'un ou plusieurs noms de famille de police et/ou de noms de famille génériques pour l'élément sélectionné.

{{InteractiveExample("Démonstration CSS&nbsp;: font-family")}}

```css interactive-example-choice
font-family: Georgia, serif;
```

```css interactive-example-choice
font-family: "Gill Sans", sans-serif;
```

```css interactive-example-choice
font-family: sans-serif;
```

```css interactive-example-choice
font-family: serif;
```

```css interactive-example-choice
font-family: cursive;
```

```css interactive-example-choice
font-family: system-ui;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Londres. Le trimestre de la Saint-Michel vient de se terminer, et le Lord
    Chancelier siège dans le Lincoln's Inn Hall. Un temps de novembre
    implacable. Autant de boue dans les rues que si les eaux venaient tout juste
    de se retirer de la surface de la terre, et il ne serait pas étonnant de
    croiser un Mégalosaure, long d'une quarantaine de pieds, se dandinant comme
    un lézard éléphantesque sur Holborn Hill.
  </p>
</section>
```

```css interactive-example
section {
  font-size: 1.2em;
}
```

Les valeurs sont séparées par des virgules, indiquant chacune une police alternative. Le moteur choisira la première valeur pour laquelle la police correspondante est installée sur l'ordinateur ou qui peut être téléchargée via la règle {{CSSxRef("@font-face")}} définie.

Pour fixer `font-family` et d'autres propriétés liées aux polices de caractères, on pourra utiliser la propriété raccourcie {{CSSxRef("font")}}.

Les auteur·ice·s doivent toujours inclure au moins un nom de famille générique dans une liste `font-family`, car il n'est pas garanti qu'une police donnée soit disponible. Cela permet au navigateur de choisir une police de secours acceptable si nécessaire.

La propriété `font-family` définit une liste de polices, de la priorité la plus haute à la plus basse. La sélection de la police ne s'arrête _pas_ à la première police de la liste présente sur le système de l'utilisateur·ice. Au contraire, la sélection de la police se fait _caractère par caractère_, ainsi si une police disponible ne possède pas le glyphe pour un caractère nécessaire, les polices suivantes sont essayées. Lorsqu'une police n'est disponible que dans certains [styles](/fr/docs/Web/CSS/Reference/Properties/font-style), [variantes](/fr/docs/Web/CSS/Reference/Properties/font-variant) ou [tailles](/fr/docs/Web/CSS/Reference/Properties/font-size), ces propriétés peuvent aussi influencer la famille de police choisie.

## Syntaxe

```css
/* Un nom de police suivi d'un nom de famille générique */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* Un nom de famille de polices générique */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
font-family: ui-serif;
font-family: ui-sans-serif;
font-family: ui-monospace;
font-family: ui-rounded;
font-family: math;
font-family: fangsong;

/* Valeurs globales */
font-family: inherit;
font-family: initial;
font-family: revert;
font-family: revert-layer;
font-family: unset;
```

La propriété `font-family` permet de lister différentes familles de police, séparées par des virgules. Chaque nom de famille est une valeur `<family-name>` ou `<generic-name>`.

Dans l'exemple suivant, on liste deux familles de police, la première utilise une valeur `<family-name>` et la seconde utilise une valeur `<generic-name>`&nbsp;:

```css
font-family: "Gill Sans Extrabold", sans-serif;
```

### Valeurs

- `<family-name>`
  - : Le nom d'une famille de polices. Il doit s'agir soit d'une seule valeur de type {{CSSxRef("string")}}, soit d'une séquence d'identifiants personnalisés ({{CSSxRef("custom-ident")}}) séparés par des espaces. Les valeurs de chaîne de caractères doivent être entourées de guillemets mais peuvent contenir n'importe quel caractère Unicode. Les identifiants personnalisés ne sont pas entourés de guillemets, mais certains caractères doivent être échappés.

    Il est recommandé d'entourer de guillemets les noms de famille de police qui contiennent des espaces, des chiffres ou des signes de ponctuation autres que les traits d'union.

    Voir aussi [Validité des noms de famille](#validité_des_noms_de_famille).

- `<generic-name>`
  - : Les noms de famille génériques sont utilisés comme mécanisme de secours pour conserver l'intention de mise en forme de l'auteur·ice lorsqu'aucune des polices indiquées n'est disponible. Les noms de famille génériques sont des mots-clés et ne doivent pas être encadrés par des doubles quotes. Un nom de famille générique devrait être utilisé comme dernier élément de la liste des noms. Les mots-clés suivants sont définis&nbsp;:
    - `serif`
      - : Les glyphes possèdent des terminaisons, des extrémités évasées ou effilées, ou de véritables empattements.

        Par exemple&nbsp;: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio, URW Palladio, serif.

    - `sans-serif`
      - : Les glyphes ont des terminaisons simples, sans empattement.

        Par exemple&nbsp;: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans, Nimbus Sans L, sans-serif.

    - `monospace`
      - : Tous les glyphes ont la même largeur fixe.

        Par exemple&nbsp;: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco, Lucida Console, monospace.

    - `cursive`
      - : Les glyphes des polices cursives possèdent généralement des terminaisons jointives ou d'autres caractéristiques cursives au-delà de celles des polices italiques. Les glyphes sont partiellement ou complètement reliés, et le résultat ressemble davantage à une écriture manuscrite au stylo ou au pinceau qu'à des lettres imprimées.

        Par exemple&nbsp;: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting, Apple Chancery, cursive.

    - `fantasy`
      - : Les polices fantaisie sont des polices décoratives pour lesquelles les caractères sont représentées de façon légère.

        Par exemple&nbsp;: Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.

    - `system-ui`
      - : Les glyphes utilisés sont ceux de la police d'interface utilisateur par défaut pour la plateforme concernée. Les traditions typographiques variant grandement à travers le monde, cette famille générique est prévue pour les polices qui ne correspondent pas clairement aux autres familles génériques.
        > [!NOTE]
        > Comme son nom l'indique, `system-ui` est destiné à donner aux éléments d'interface un aspect natif, et non à composer de longs paragraphes de texte. Cela peut rendre la police affichée inadaptée pour certain·e·s utilisateur·ice·s — par exemple, la police CJK par défaut de Windows peut mal afficher les écritures latines, et l'attribut `lang` peut ne pas affecter la police affichée. Certains systèmes d'exploitation ne permettent pas de personnaliser `system-ui`, tandis que les navigateurs permettent généralement de personnaliser la famille de polices `sans-serif`. Pour de longs paragraphes, utilisez `sans-serif` ou une autre famille de polices non-UI.
    - `ui-serif`
      - : La police serif par défaut de l'interface utilisateur.
    - `ui-sans-serif`
      - : La police sans-serif par défaut de l'interface utilisateur.
    - `ui-monospace`
      - : La police monospace par défaut de l'interface utilisateur.
    - `ui-rounded`
      - : La police par défaut de l'interface utilisateur avec des caractéristiques arrondies.
    - `math`
      - : Ceci concerne les besoins stylistiques particuliers de la représentation des mathématiques&nbsp;: exposant et indice, accolades sur plusieurs lignes, expressions imbriquées, et glyphes doublement barrés avec des significations distinctes.
        Les feuilles de style de l'agent utilisateur peuvent définir `math { font-family: math }` afin que l'élément MathML {{MathMLElement("math")}} utilise par défaut des polices appropriées.
    - `fangsong`
      - : Un style de caractères chinois particulier se situant entre le style serif Song et la forme cursive Kai. Ce style est généralement utilisé pour les documents officiels du gouvernement.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Quelques familles de polices courantes

```css
.serif {
  font-family: "Times", "Times New Roman", "Georgia", serif;
}

.sansserif {
  font-family: "Verdana", "Helvetica", "Arial", sans-serif;
}

.monospace {
  font-family: "Lucida Console", "Courier New", monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.math {
  font-family: math;
}

.fangsong {
  font-family: fangsong;
}
```

```css hidden
div {
  margin: 0.5rem;
}
```

```html hidden
<div class="serif">Ceci est un exemple de police avec empattement.</div>

<div class="sansserif">Ceci est un exemple de police sans empattement.</div>

<div class="monospace">Ceci est un exemple de police à chasse fixe.</div>

<div class="cursive">Ceci est un exemple de police cursive.</div>

<div class="fantasy">Ceci est un exemple de police fantaisie.</div>

<div class="fangsong">Ceci est un exemple de police fangsong.</div>

<div class="math">
  Ceci est un exemple de police mathématique&nbsp;: ℝ, ∫, ∑…
</div>
```

### Résultat

{{EmbedLiveSample("Quelques familles de polices courantes", 600, 220)}}

### Validité des noms de famille

Les déclarations suivantes sont valides&nbsp;:

```css example-good
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;
```

Et ces déclarations sont invalides&nbsp;:

```css example-bad
font-family:
  Goudy Bookletter 1911,
  sans-serif;
font-family: Red/Black, sans-serif;
font-family:
  "Lucida" Grande,
  sans-serif;
font-family: Ahem!, sans-serif;
font-family:
  test @toto,
  sans-serif;
font-family: #POUND, sans-serif;
font-family:
  Hawaii 5-0,
  sans-serif;
```

L'exemple suivant est techniquement valide mais n'est pas recommandé&nbsp;:

```css
font-family:
  Gill Sans Extrabold,
  sans-serif;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-style")}}
- La propriété {{CSSxRef("font-weight")}}
- La propriété {{CSSxRef("font-variant-emoji")}}
- L'attribut SVG {{SVGAttr("font-family")}}
- [Apprendre&nbsp;: Mise en forme fondamentale du texte et des polices](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
