---
title: box-sizing
slug: Web/CSS/Reference/Properties/box-sizing
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`box-sizing`** définit la façon dont la largeur totale et la hauteur totale d'un élément sont calculées.

{{InteractiveExample("Démonstration CSS&nbsp;: box-sizing")}}

```css interactive-example-choice
box-sizing: content-box;
width: 100%;
```

```css interactive-example-choice
box-sizing: content-box;
width: 100%;
border: solid #5b6dcd 10px;
padding: 5px;
```

```css interactive-example-choice
box-sizing: border-box;
width: 100%;
border: solid #5b6dcd 10px;
padding: 5px;
```

```html interactive-example
<section id="default-example">
  <div id="example-element-parent">
    <p>Conteneur parent</p>
    <div class="transition-all" id="example-element">
      <p>Conteneur enfant</p>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element-parent {
  width: 220px;
  height: 200px;
  border: solid 10px #ffc129;
  margin: 0.8em;
}

#example-element {
  height: 60px;
  margin: 2em auto;
  background-color: rgb(81 81 81 / 0.6);
}

#example-element > p {
  margin: 0;
}
```

## Syntaxe

```css
box-sizing: border-box;
box-sizing: content-box;

/* Global values */
box-sizing: inherit;
box-sizing: initial;
box-sizing: revert;
box-sizing: revert-layer;
box-sizing: unset;
```

La propriété `box-sizing` peut être définie avec l'un des mots-clés suivants.

### Valeurs

- `content-box`
  - : Il s'agit de la valeur initiale et par défaut, telle que définie dans la norme CSS. Les propriétés {{CSSxRef("width")}} et {{CSSxRef("height")}} incluent le contenu, mais n'incluent pas le remplissage, la bordure ou la marge. Par exemple, `.box {width: 350px; border: 10px solid black;}` affiche une boîte d'une largeur de 370px.

    Ici, les dimensions de l'élément sont calculées ainsi&nbsp;: _largeur = largeur du contenu_, et _hauteur = hauteur du contenu_. (La bordure et le remplissage ne sont pas inclus dans le calcul.)

- `border-box`
  - : Les propriétés {{CSSxRef("width")}} et {{CSSxRef("height")}} incluent le contenu, le remplissage et la bordure, mais n'incluent pas la marge. Notez que le remplissage et la bordure seront à l'intérieur de la boîte. Par exemple, `.box {width: 350px; border: 10px solid black;}` affiche une boîte d'une largeur de 350px, avec une zone de contenu de 330px de large. La boîte de contenu ne peut pas être négative et est ramenée à 0, il est donc impossible d'utiliser `border-box` pour faire disparaître l'élément.

    Ici, les dimensions de l'élément sont calculées ainsi&nbsp;: _largeur = bordure + marge interne + largeur du contenu_, et _hauteur = bordure + marge interne + hauteur du contenu_.

## Description

Par défaut, dans le [modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction), la propriété `width` et la propriété `height` que vous attribuez à un élément ne s'appliquent qu'à la boîte de contenu de l'élément. Si l'élément possède une bordure ou un remplissage, ceux-ci sont alors ajoutés à la largeur et à la hauteur pour obtenir la taille de la boîte affichée à l'écran. Cela signifie que lorsque vous définissez `width` et `height`, vous devez ajuster la valeur que vous donnez pour tenir compte de toute bordure ou marge interne qui pourrait être ajoutée. Par exemple, si vous avez quatre boîtes avec `width: 25%;`, si l'une d'elles possède un remplissage à gauche ou à droite ou une bordure à gauche ou à droite, elles ne tiendront pas par défaut sur une seule ligne dans les contraintes du conteneur parent.

La propriété `box-sizing` peut être utilisée pour ajuster ce comportement&nbsp;:

- `content-box` applique le comportement par défaut du modèle de boîte CSS. Si vous définissez la largeur d'un élément à 100 pixels, alors la boîte de contenu de l'élément fera 100 pixels de large, et la largeur de toute bordure ou marge interne sera ajoutée à la largeur finale affichée, rendant l'élément plus large que 100px.
- `border-box` indique au navigateur de prendre en compte toute bordure et marge interne dans les valeurs que vous indiquez pour la largeur et la hauteur d'un élément. Si vous définissez la largeur d'un élément à 100 pixels, ces 100 pixels incluront toute bordure ou marge interne ajoutée, et la boîte de contenu se réduira pour absorber cette largeur supplémentaire. Cela rend généralement le dimensionnement des éléments beaucoup plus simple.

  `box-sizing: border-box` est le style par défaut que les navigateurs appliquent aux éléments HTML {{HTMLElement("table")}}, {{HTMLElement("select")}} et {{HTMLElement("button")}}, ainsi qu'aux éléments HTML {{HTMLElement("input")}} dont le type est `{{HTMLElement("input/radio", "radio")}}`, `{{HTMLElement("input/checkbox", "checkbox")}}`, `{{HTMLElement("input/reset", "reset")}}`, `{{HTMLElement("input/button", "button")}}`, `{{HTMLElement("input/submit", "submit")}}`, `{{HTMLElement("input/color", "color")}}` ou `{{HTMLElement("input/search", "search")}}`.

> [!NOTE]
> Il est souvent utile de définir `box-sizing` sur `border-box` pour mettre en page des éléments. Cela rend la gestion des tailles des éléments beaucoup plus simple, et élimine généralement un certain nombre de pièges que vous pouvez rencontrer lors de la mise en page de votre contenu. En revanche, lorsque vous utilisez `position: relative` ou `position: absolute`, l'utilisation de `box-sizing: content-box` permet aux valeurs de positionnement d'être relatives au contenu, et indépendantes des modifications de la bordure et du remplissage, ce qui peut parfois être souhaitable.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Tailles de boîte avec `content-box` et `border-box`

Cet exemple montre comment différentes valeurs de `box-sizing` modifient la taille affichée de deux éléments par ailleurs identiques.

#### HTML

```html
<div class="content-box">Content box</div>
<br />
<div class="border-box">Border box</div>
```

#### CSS

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* Largeur totale : 160px + (2 * 20px) + (2 * 8px) = 216px
     Hauteur totale : 80px + (2 * 20px) + (2 * 8px) = 136px
     Largeur de la boîte de contenu : 160px
     Hauteur de la boîte de contenu : 80px */
}

.border-box {
  box-sizing: border-box;
  /* Largeur totale : 160px
     Hauteur totale : 80px
     Largeur de la boîte de contenu : 160px - (2 * 20px) - (2 * 8px) = 104px
     Hauteur de la boîte de contenu : 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

#### Résultat

{{EmbedLiveSample("Tailles de boîte avec `content-box` et `border-box`", "auto", 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
