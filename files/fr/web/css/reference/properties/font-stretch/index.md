---
title: font-stretch
slug: Web/CSS/Reference/Properties/font-stretch
l10n:
  sourceCommit: 3c91c067a4d36b532a4bce72e5d8a2c5a9279db5
---

> [!NOTE]
> La propriété `font-stretch` a été renommée en {{CSSxRef("font-width")}} dans la [spécification CSS Fonts <sup>(angl.)</sup>](https://drafts.csswg.org/css-fonts/#font-stretch-prop). Pour préserver la compatibilité, la spécification conserve `font-stretch` comme un alias hérité de la propriété `font-width`.

La propriété [CSS](/fr/docs/Web/CSS) **`font-stretch`** permet de choisir entre la forme normale, condensée ou étendue d'une police.

{{InteractiveExample("Démonstration CSS&nbsp;: font-stretch")}}

```css interactive-example-choice
font-stretch: condensed;
```

```css interactive-example-choice
font-stretch: expanded;
```

```css interactive-example-choice
font-stretch: ultra-expanded;
```

```css interactive-example-choice
font-stretch: 50%;
```

```css interactive-example-choice
font-stretch: 100%;
```

```css interactive-example-choice
font-stretch: 150%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p class="transition-all" id="example-element">
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
@font-face {
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-family: "League";
  font-style: normal;
  font-weight: normal;
}

section {
  font-size: 1.2em;
  font-family: "League", sans-serif;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-stretch: normal;
font-stretch: ultra-condensed;
font-stretch: extra-condensed;
font-stretch: condensed;
font-stretch: semi-condensed;
font-stretch: semi-expanded;
font-stretch: expanded;
font-stretch: extra-expanded;
font-stretch: ultra-expanded;

/* Valeurs en pourcentage */
font-stretch: 50%;
font-stretch: 100%;
font-stretch: 200%;

/* Valeurs globales */
font-stretch: inherit;
font-stretch: initial;
font-stretch: revert;
font-stretch: revert-layer;
font-stretch: unset;
```

Cette propriété peut être définie avec un seul mot-clé de type pourcentage ({{CSSxRef("&lt;percentage&gt;")}}).

### Valeurs

- `normal`
  - : Définit une fonte normalement condensée.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Définit une fonte plus condensée que la normale, `ultra-condensed` étant la plus condensée.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Définit une fonte plus étendue que la normale, `ultra-expanded` étant la plus étendue.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Une valeur de type {{CSSxRef("&lt;percentage&gt;")}} entre 50% et 200% qui permet de définir la largeur de la police. Les valeurs négatives ne sont pas autorisées pour cette propriété.

### Correspondance entre les mots-clés et les valeurs numériques

Le tableau suivant indique les correspondances entre les valeurs sous la forme de mots-clés et celles exprimées en pourcentages&nbsp;:

| Mot-clé           | Pourcentage |
| ----------------- | ----------- |
| `ultra-condensed` | 50%         |
| `extra-condensed` | 62.5%       |
| `condensed`       | 75%         |
| `semi-condensed`  | 87.5%       |
| `normal`          | 100%        |
| `semi-expanded`   | 112.5%      |
| `expanded`        | 125%        |
| `extra-expanded`  | 150%        |
| `ultra-expanded`  | 200%        |

## Description

Certaines polices possèdent différentes fontes pour lesquelles les caractères sont plus étroits (fontes _condensées_) et d'autres pour lesquelles les caractères sont plus amples (fontes _étendues_).

`font-stretch` permet de choisir entre les versions condensées ou étendues d'une police. Si la police utilisée ne possède pas de fonte utilisant cet axe de variation, elle n'aura aucun effet.

### Sélection de la fonte

La fonte sélectionnée pour une valeur donnée de `font-stretch` dépend des fontes prises en charge par la police en question. Si la police ne fournit pas de fonte correspondant exactement à la valeur donnée, les valeurs inférieures à `100%` correspondent à une fonte condensée, et les valeurs supérieures ou égales à `100%` correspondent à une fonte étendue.

Le tableau ci-dessous illustre l'effet de la définition de différentes valeurs en pourcentage de `font-stretch` sur deux polices différentes&nbsp;:

```css hidden
@font-face {
  font-family: "Inconsolata";
  src: url("https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2")
    format("woff2");
}

@font-face {
  font-family: "Anek Malayalam";
  src: url("https://fonts.gstatic.com/s/anekmalayalam/v4/6qLUKZActRTs_mZAJUZWWkhke0nYa-f6__Azq3-gP1W7db9_.woff2")
    format("woff2");
}

body {
  font-family: system-ui;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tbody th {
  text-align: right;
}

th,
td {
  padding: 0.25rem;
  font-weight: normal;
  text-align: center;
}

td {
  border: solid;
  border-width: 1px;
  font-size: 5rem;
}

.inconsolata {
  font-family: "Inconsolata", sans-serif;
}

.anek-malayalam {
  font-family: "Anek Malayalam", sans-serif;
}

td:nth-child(2) {
  font-stretch: 50%;
}

td:nth-child(3) {
  font-stretch: 62.5%;
}

td:nth-child(4) {
  font-stretch: 75%;
}

td:nth-child(5) {
  font-stretch: 87.5%;
}

td:nth-child(6) {
  font-stretch: 100%;
}

td:nth-child(7) {
  font-stretch: 112.5%;
}

td:nth-child(8) {
  font-stretch: 125%;
}

td:nth-child(9) {
  font-stretch: 150%;
}

td:nth-child(10) {
  font-stretch: 200%;
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">50%</th>
      <th scope="col">62.5%</th>
      <th scope="col">75%</th>
      <th scope="col">87.5%</th>
      <th scope="col">100%</th>
      <th scope="col">112.5%</th>
      <th scope="col">125%</th>
      <th scope="col">150%</th>
      <th scope="col">200%</th>
    </tr>
  </thead>
  <tbody>
    <tr class="inconsolata">
      <th scope="row">Inconsolata</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
    <tr class="anek-malayalam">
      <th scope="row">Anek Malayalam</th>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
      <td>e</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("Sélection de la fonte", "100%", 250)}}

- [Inconsolata <sup>(angl.)</sup>](https://fonts.google.com/specimen/Inconsolata) est une police variable qui propose une plage continue de largeurs de 50% à 200%.
- [Anek Malayalam <sup>(angl.)</sup>](https://fonts.google.com/specimen/Anek+Malayalam) est une police variable Google qui prend en charge des largeurs de 75% à 125%. Les valeurs en dehors de cette plage sélectionnent la fonte la plus proche.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax("font-stretch")}}

## Exemples

### Définir les pourcentages d'étirement de police

```html
<p class="condensed">un lézard éléphantesque</p>
<p class="normal">un lézard éléphantesque</p>
<p class="expanded">un lézard éléphantesque</p>
```

```css
@font-face {
  src: url("/shared-assets/fonts/LeagueMono-VF.ttf") format("truetype");
  font-family: "LeagueMonoVariable";
  font-style: normal;
}

p {
  font:
    1.5rem "LeagueMonoVariable",
    sans-serif;
}

.condensed {
  font-stretch: 50%;
}

.normal {
  font-stretch: 100%;
}

.expanded {
  font-stretch: 200%;
}
```

{{EmbedLiveSample("Définir les pourcentages d'étirement de police", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le descripteur {{CSSxRef("@font-face/font-stretch")}} pour {{CSSxRef("@font-face")}}
- La propriété {{CSSxRef("font-width")}} moderne, remplaçant `font-stretch`
- La propriété {{CSSxRef("font-style")}}
- La propriété {{CSSxRef("font-weight")}}
- L'attribut SVG {{SVGAttr("font-stretch")}}
- [Apprendre&nbsp;: Mise en forme fondamentale du texte et des polices](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- Le module [de polices CSS](/fr/docs/Web/CSS/Guides/Fonts)
