---
title: text-align
slug: Web/CSS/Reference/Properties/text-align
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-align`** définit l'alignement horizontal du contenu de niveau en ligne à l'intérieur d'un élément de bloc ou d'une boîte de cellule de tableau. Cela signifie qu'elle fonctionne comme {{CSSxRef("vertical-align")}}, mais dans la direction horizontale.

{{InteractiveExample("Démonstration CSS&nbsp;: text-align")}}

```css interactive-example-choice
text-align: start;
```

```css interactive-example-choice
text-align: end;
```

```css interactive-example-choice
text-align: center;
```

```css interactive-example-choice
text-align: justify;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-size: 1.5em;
}

#default-example > div {
  width: 250px;
}
```

Syntaxe

```css
/* Valeurs avec un mot-clé */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: match-parent;

/* Valeurs d'alignement de bloc (syntaxe non standard) */
text-align: -moz-center;
text-align: -webkit-center;

/* Valeurs globales */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

La propriété `text-align` peut être définie grâce à l'un des mots-clés de la liste qui suit.

### Valeurs

- `start`
  - : Identique à `left` si la direction est de gauche à droite et à `right` si la direction est de droite à gauche.
- `end`
  - : Identique à `right` si la direction est de gauche à droite et à `left` si la direction est de droite à gauche.
- `left`
  - : Les contenus en ligne sont alignés sur le bord gauche de la boîte de ligne.
- `right`
  - : Les contenus en ligne sont alignés sur le bord droit de la boîte de ligne.
- `center`
  - : Les contenus en ligne sont centrés horizontalement dans la boîte de ligne.
- `justify`
  - : Les contenus en ligne sont justifiés. Les espaces sont répartis pour que les bords gauche et droit du contenu soient alignés avec les bords gauche et droit de la boîte de ligne, sauf pour la dernière ligne.
- `match-parent`
  - : Semblable à `inherit`, mais les valeurs `start` et `end` sont calculées selon la propriété {{CSSxRef("direction")}} du parent et sont remplacées par la valeur `left` ou `right` appropriée.

## Accessibilité

L'espacement créé entre les mots par la justification du texte peut rendre la lecture difficile pour les personnes dyslexiques ou souffrant de troubles cognitifs.

- [Comprendre les règles WCAG sur le MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.8 | Comprendre le WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Aligner au début

#### HTML

```html
<p class="exemple">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.exemple {
  text-align: start;
  border: solid;
}
```

#### Résultat

{{EmbedLiveSample("Aligner au début", "100%", "100%")}}

### Centrer le texte

#### HTML

```html
<p class="exemple">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.exemple {
  text-align: center;
  border: solid;
}
```

#### Résultat

{{EmbedLiveSample("Centrer le texte", "100%", "100%")}}

### Exemple d'utilisation de `justify`

#### HTML

```html
<p class="exemple">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.exemple {
  text-align: justify;
  border: solid;
}
```

#### Résultat

{{EmbedLiveSample("Exemple d'utilisation de `justify`", "100%", "100%")}}

### Aligner les tableaux

Cet exemple démontre l'utilisation de `text-align` sur les éléments {{HTMLElement("table")}}&nbsp;:

- La légende ({{HTMLElement("caption")}}) est alignée à droite.
- Les deux premiers en-têtes ({{HTMLElement("th")}}) héritent de l'alignement à gauche défini sur l'en-tête du tableau ({{HTMLElement("thead")}}), tandis que le troisième est aligné à droite.
- À l'intérieur de l'élément HTML {{HTMLElement("tbody")}}, la première ligne est alignée à droite, la deuxième est centrée, et la troisième utilise l'alignement par défaut (à gauche).
- Dans chaque ligne, certaines cellules (c12, c31) sont configurées pour remplacer l'alignement de la ligne.

#### HTML

```html
<table>
  <caption>
    Tableau d'exemple
  </caption>
  <thead>
    <tr>
      <th>Col 1</th>
      <th>Col 2</th>
      <th class="right">Col 3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="right">
      <td>11</td>
      <td class="center">12</td>
      <td>13</td>
    </tr>
    <tr class="center">
      <td>21</td>
      <td>22</td>
      <td>23</td>
    </tr>
    <tr id="r3">
      <td class="right">31</td>
      <td>32</td>
      <td>33</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border-collapse: collapse;
  border: solid black 1px;
  width: 250px;
  height: 150px;
}

thead {
  text-align: left;
}

td,
th {
  border: solid 1px black;
}

.center {
  text-align: center;
}

.right,
caption {
  text-align: right;
}
```

#### Résultat

{{EmbedLiveSample("Aligner les tableaux", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("margin", "margin: auto")}}, {{CSSxRef("margin-left", "margin-left: auto")}}, {{CSSxRef("vertical-align")}}
