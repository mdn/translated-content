---
title: Propriété CSS `background-color`
short-title: background-color
slug: Web/CSS/Reference/Properties/background-color
l10n:
  sourceCommit: 21fddb9643fae34dce16aec8eb5dd86cc29e0b7c
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-color`** définit la couleur d'arrière-plan d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: background-color")}}

```css interactive-example-choice
background-color: brown;
```

```css interactive-example-choice
background-color: #74992e;
```

```css interactive-example-choice
background-color: rgb(255 255 128);
```

```css interactive-example-choice
background-color: rgb(255 255 128 / 0.5);
```

```css interactive-example-choice
background-color: hsl(50 33% 25%);
```

```css interactive-example-choice
background-color: hsl(50 33% 25% / 0.75);
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-color: red;
background-color: indigo;

/* Valeur hexadécimale */
background-color: #bbff00; /* Complètement opaque */
background-color: #bf0; /* Complètement opaque - notation raccourcie */
background-color: #11ffee00; /* Complètement transparent */
background-color: #1fe0; /* Complètement transparent - notation raccourcie */
background-color: #11ffeeff; /* Complètement opaque */
background-color: #1fef; /* Complètement opaque - notation raccourcie */

/* Valeur RGB */
background-color: rgb(255 255 128); /* Complètement opaque */
background-color: rgb(117 190 218 / 50%); /* 50% transparent */

/* Valeur HSLA */
background-color: hsl(50 33% 25%); /* Complètement opaque */
background-color: hsl(50 33% 25% / 75%); /* 75% opaque, donc 25% transparent */

/* Valeurs avec un mot-clé spécial */
background-color: currentcolor;
background-color: transparent;

/* Valeurs globales */
background-color: inherit;
background-color: initial;
background-color: revert;
background-color: revert-layer;
background-color: unset;
```

La propriété `background-color` se définit grâce à une valeur de type `<color>`.

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur uniforme de l'arrière-plan. Elle est affichée derrière toute {{CSSxRef("background-image")}} définie, bien que la couleur reste visible à travers toute transparence présente dans l'image.

## Description

La propriété `background-color` définit la couleur d'arrière-plan de la boîte d'un élément. La couleur est dessinée derrière toutes les images d'arrière-plan. Par défaut, la couleur d'arrière-plan est peinte à l'intérieur de la [`border-box`](/fr/docs/Web/CSS/Guides/Box_model/Introduction#border_area), ce qui signifie qu'elle est peinte derrière la bordure, jusqu'au bord extérieur du border-box.

Le découpage de la zone de peinture de la `background-color` est contrôlé par la propriété {{CSSxRef("background-clip")}}. Si plusieurs images d'arrière-plan sont définies, le découpage de la couleur d'arrière-plan est déterminé par la valeur de `background-clip` associée à l'image d'arrière-plan la plus en bas.

## Accessibilité

Il est important de vérifier que le contraste entre la couleur d'arrière-plan et la couleur du texte est suffisamment élevé afin que le contenu de la page puisse être lu, quelles que soient les conditions de vision. Un ratio de contraste élevé améliore également l'accessibilité du contenu pour les utilisateur·ice·s de dispositifs mobiles à écran brillant dans un environnement lumineux, comme en plein soleil.

Le ratio de contraste entre les couleurs est déterminé en comparant la luminosité de la couleur du texte et celle de la couleur d'arrière-plan. Pour respecter les règles d'accessibilité [Web Content Accessibility Guidelines (WCAG) <sup>(angl.)</sup>](https://www.w3.org/WAI/intro/wcag), il faut avoir un ratio de 4.5:1 pour le contenu textuel normal et un ratio de 3:1 pour les textes plus grands comme les titres (un texte est considéré comme grand s'il est en gras et mesure au moins 18.66px ou s'il mesure au moins 24 pixels).

- [Comprendre le WCAG&nbsp;: Règles de perceptibilité 1.4.3](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Vérificateur de contraste WebAIM <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/)
- [Comprendre le critère de succès 1.4.3 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Cet exemple montre l'application de `background-color` à des éléments HTML {{HTMLElement("p")}} en utilisant différentes valeurs CSS {{CSSxRef("color_value", "&lt;color&gt;")}}.

#### HTML

```html
<p class="exemple-un">Lorem ipsum dolor sit amet, consectetuer</p>

<p class="exemple-deux">Lorem ipsum dolor sit amet, consectetuer</p>

<p class="exemple-trois">Lorem ipsum dolor sit amet, consectetuer</p>
```

#### CSS

Chaque paragraphe est défini avec une couleur de fond différente, y compris en définissant explicitement la valeur par défaut [`transparent`](/fr/docs/Web/CSS/Reference/Values/named-color#transparent), une fonction de couleur {{CSSxRef("rgb()")}} et une couleur {{CSSxRef("hex-color")}}. Nous définissons également la propriété {{CSSxRef("color")}} pour garantir un contraste suffisant entre le texte et son arrière-plan.

```css
.exemple-un {
  background-color: transparent;
}

.exemple-deux {
  background-color: rgb(153 102 153);
  color: rgb(255 255 204);
}

.exemple-trois {
  background-color: #777799;
  color: white;
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple", 200, 150)}}

### Colorer des tableaux

Cet exemple montre l'utilisation de `background-color` sur des éléments HTML {{HTMLElement("table")}}, y compris les lignes {{HTMLElement("tr")}} et les cellules {{HTMLElement("td")}}. Il montre également comment les couleurs d'arrière-plan sont peintes derrière toutes les bordures.

#### HTML

```html
<table>
  <tbody>
    <tr id="r1">
      <td id="c11">11</td>
      <td id="c12">12</td>
      <td id="c13">13</td>
    </tr>
    <tr id="r2">
      <td id="c21">21</td>
      <td id="c22">22</td>
      <td id="c23">23</td>
    </tr>
    <tr id="r3">
      <td id="c31">31</td>
      <td id="c32">32</td>
      <td id="c33">33</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Nous utilisons CSS pour définir différentes valeurs {{CSSxRef("named-color")}}. Nous définissons également une grande bordure en pointillés sur le tableau et chaque cellule pour montrer comment la `background-color` est peinte jusqu'au bord extérieur de la boîte de bordure.

```css
table {
  border-collapse: collapse;
  border: dashed black 5px;
  width: 250px;
  height: 150px;
}
td {
  border: dashed 5px black;
}
#r1 {
  background-color: lightblue;
}
#c12 {
  background-color: cyan;
}
#r2 {
  background-color: grey;
}
#r3 {
  background-color: olive;
}
```

#### Résultat

{{EmbedLiveSample("Colorer des tableaux", "100%", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("background-clip")}}
- [Utiliser plusieurs arrières-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs&nbsp;: {{CSSxRef("color")}}, {{CSSxRef("border-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}} et {{CSSxRef("column-rule-color")}}
