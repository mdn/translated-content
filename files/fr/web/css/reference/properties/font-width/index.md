---
title: font-width
slug: Web/CSS/Reference/Properties/font-width
l10n:
  sourceCommit: 3e97bf7d99f829a3cab9676837e8d9beabf9a1de
---

{{SeeCompatTable}}

> [!NOTE]
> La propriété `font-width` est le remplacement moderne de {{CSSxRef("font-stretch")}}, qui est un alias hérité. Bien que `font-width` soit le nom préféré dans la spécification, `font-stretch` bénéficie actuellement d'une compatibilité plus large avec les navigateurs. Consultez [l'exemple de repli](#fournir_un_repli_pour_font-stretch) et le tableau de [compatibilité des navigateurs](#compatibilité_des_navigateurs) pour plus de détails.

La propriété [CSS](/fr/docs/Web/CSS) **`font-width`** permet de sélectionner une variante normale, condensée ou étendue d'une police.

{{InteractiveExample("Démonstration CSS&nbsp;: font-width")}}

```css interactive-example-choice
font-width: condensed;
```

```css interactive-example-choice
font-width: expanded;
```

```css interactive-example-choice
font-width: ultra-expanded;
```

```css interactive-example-choice
font-width: 50%;
```

```css interactive-example-choice
font-width: 100%;
```

```css interactive-example-choice
font-width: 150%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p class="transition-all" id="example-element">
    Londres. Le terme de Michaelmas récemment terminé, et le Lor Chancelier
    siégeant dans Lincoln's Inn Hall. Temps de novembre implacable. Autant de
    boue dans les rues comme si les eaux venaient tout juste de se retirer de la
    surface de la terre, et il ne serait pas étonnant de rencontrer un
    Mégalosaure, d'environ quarante pieds de long, se dandinant comme un lézard
    éléphantin sur Holborn Hill.
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
font-width: normal;
font-width: ultra-condensed;
font-width: extra-condensed;
font-width: condensed;
font-width: semi-condensed;
font-width: semi-expanded;
font-width: expanded;
font-width: extra-expanded;
font-width: ultra-expanded;

/* Valeurs en pourcentage */
font-width: 50%;
font-width: 100%;
font-width: 200%;

/* Valeurs globales */
font-width: inherit;
font-width: initial;
font-width: revert;
font-width: revert-layer;
font-width: unset;
```

Cette propriété peut être définie en utilisant un seul mot-clé ou une valeur {{CSSxRef("&lt;percentage&gt;")}}.

### Values

- `normal`
  - : Définit une police normalement condensée.
- `semi-condensed`, `condensed`, `extra-condensed`, `ultra-condensed`
  - : Définit une police plus condensée que la normale, `ultra-condensed` étant la plus condensée.
- `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`
  - : Définit une police plus étendue que la normale, `ultra-expanded` étant la plus étendue.
- `<percentage>`
  - : Une valeur de type pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) comprise entre 50 % et 200 % (inclus). Les valeurs négatives ne sont pas autorisées pour cette propriété.

### Correspondance des mots-clés avec les valeurs numériques

Le tableau ci-dessous montre la correspondance entre les valeurs de mots-clés et les pourcentages numériques&nbsp;:

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

Certaines familles de polices offrent des variantes supplémentaires dans lesquelles les caractères sont plus étroits que la variante normale (_condensed_) ou plus larges que la variante normale (_expanded_).

Vous pouvez utiliser `font-width` pour sélectionner une variante condensée ou étendue parmi ces polices. Si la police que vous utilisez n'offre pas de variantes condensées ou étendues, cette propriété n'a aucun effet.

### Sélectionner la variante de police

La face sélectionnée pour une valeur donnée de `font-width` dépend des faces prises en charge par la police en question. Si la police ne fournit pas de face correspondant exactement à la valeur donnée, les valeurs inférieures à 100 % correspondent à une face condensée, et les valeurs supérieures ou égales à 100 % correspondent à une face étendue.

Le tableau ci-dessous montre l'effet de la définition de différentes valeurs en pourcentage de `font-width` sur deux polices différentes&nbsp;:

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
  font-width: 50%;
}
td:nth-child(3) {
  font-width: 62.5%;
}
td:nth-child(4) {
  font-width: 75%;
}
td:nth-child(5) {
  font-width: 87.5%;
}
td:nth-child(6) {
  font-width: 100%;
}
td:nth-child(7) {
  font-width: 112.5%;
}
td:nth-child(8) {
  font-width: 125%;
}
td:nth-child(9) {
  font-width: 150%;
}
td:nth-child(10) {
  font-width: 200%;
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

{{EmbedLiveSample("Sélectionner la variante de police", "100%", 250)}}

La capture d'écran suivante montre comment le tableau ci-dessus est rendu, au cas où votre navigateur ne prend pas en charge la propriété `font-width`&nbsp;:

![Un tableau de comparaison à deux lignes montrant la lettre minuscule e rendue à différentes largeurs (50%, 62,5%, 75%, 87,5%, 100%, 112,5%, 125%, 150%, 200%). La ligne du haut est étiquetée Inconsolata et la ligne du bas Anek Malayalam. Les deux polices sont sans-serif et les lettres d'Inconsolata sont légèrement plus larges que celles d'Anek Malayalam.](font-face-selection.png)

- [Inconsolata <sup>(angl.)</sup>](https://fonts.google.com/specimen/Inconsolata) est une police variable qui offre une gamme continue de largeurs de 50 % à 200 %.
- [Anek Malayalam <sup>(angl.)</sup>](https://fonts.google.com/specimen/Anek+Malayalam) est une police variable de Google qui prend en charge des largeurs de 75 % à 125 %. Les valeurs en dessous et au-dessus de cette plage sélectionnent la police la plus proche.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax("font-width")}}

## Exemples

### Définir des pourcentages de largeur de police

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
  font-width: 50%;
}

.normal {
  font-width: 100%;
}

.expanded {
  font-width: 200%;
}
```

{{EmbedLiveSample("Définir des pourcentages de largeur de police", "100%", 200)}}

### Fournir un repli pour `font-stretch`

Parce que `font-width` n'est pas encore largement pris en charge par les navigateurs, vous pouvez inclure la propriété héritée {{CSSxRef("font-stretch")}} comme solution de repli. Placez `font-stretch` avant `font-width` afin que les navigateurs compatibles utilisent la propriété moderne&nbsp;:

```css
p {
  font-stretch: condensed; /* pour les navigateurs qui ne prennent pas en charge font-width */
  font-width: condensed;
}
```

> [!NOTE]
> Vous pouvez automatiser ce modèle de repli en utilisant le plugin [postcss-preset-env <sup>(angl.)</sup>](https://preset-env.cssdb.org/) pour PostCSS, qui inclut la transformation [postcss-font-width-property <sup>(angl.)</sup>](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-font-width-property) pour convertir automatiquement les propriétés `font-width` en `font-stretch`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le descripteur {{CSSxRef("@font-face/font-width")}} pour la règle {{CSSxRef("@font-face")}}
- La propriété alias héritée {{CSSxRef("font-stretch")}} avec une meilleure compatibilité navigateur
- La propriété {{CSSxRef("font-style")}}
- La propriété {{CSSxRef("font-weight")}}
- L'attribut SVG {{SVGAttr("font-width")}}
- L'attribut SVG {{SVGAttr("font-stretch")}}
- [Apprendre&nbsp;: Fondamentaux du texte et du style de police](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- Le module [des polices CSS](/fr/docs/Web/CSS/Guides/Fonts)
