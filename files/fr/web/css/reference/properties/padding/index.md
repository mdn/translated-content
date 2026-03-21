---
title: padding
slug: Web/CSS/Reference/Properties/padding
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`padding`** définit la [zone de remplissage](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_remplissage) sur les quatre côtés d'un élément en une seule fois.

{{InteractiveExample("Démonstration CSS&nbsp;: padding")}}

```css interactive-example-choice
padding: 1em;
```

```css interactive-example-choice
padding: 10% 0;
```

```css interactive-example-choice
padding: 10px 50px 20px;
```

```css interactive-example-choice
padding: 10px 50px 30px 0;
```

```css interactive-example-choice
padding: 0;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Loin dans les régions inexplorées de l'extrémité démodée du bras spiral
      occidental de la Galaxie se trouve un petit soleil jaune négligé.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
}
```

La zone de remplissage d'un élément correspond à l'espace entre son contenu et sa bordure.

> [!NOTE]
> Le remplissage crée un espace supplémentaire à l'intérieur d'un élément. En revanche, la marge ({{CSSxRef("margin")}}) crée un espace supplémentaire _autour_ d'un élément.

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("padding-top")}}
- {{CSSxRef("padding-right")}}
- {{CSSxRef("padding-bottom")}}
- {{CSSxRef("padding-left")}}

## Syntaxe

```css
/* Appliqué aux quatre côtés */
padding: 1em;

/* vertical | horizontal */
padding: 5% 10%;

/* haut | horizontal | bas */
padding: 1em 2em 2em;

/* haut | droit | bas | gauche */
padding: 5px 1em 0 2em;

/* Valeurs globales */
padding: inherit;
padding: initial;
padding: revert;
padding: revert-layer;
padding: unset;
```

La propriété `padding` peut être définie en utilisant une, deux, trois ou quatre valeurs. Chaque valeur est une longueur ({{CSSxRef("&lt;length&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Les valeurs négatives ne sont pas autorisées.

- Lorsque **une** valeur est définie, elle s'applique à **tous les côtés**.
- Lorsque **deux** valeurs sont définies, la première s'applique au **haut et au bas**, la seconde au **gauche et à droite**.
- Lorsque **trois** valeurs sont définies, la première s'applique au **haut**, la seconde au **droite et gauche**, la troisième au **bas**.
- Lorsque **quatre** valeurs sont définies, elles s'appliquent respectivement au **haut**, **droite**, **bas** et **gauche** (dans le sens des aiguilles d'une montre).

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La taille du remplissage en tant que valeur fixe.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille du remplissage en pourcentage, relative à la taille en ligne (_largeur_ dans une langue horizontale, définie par {{CSSxRef("writing-mode")}}) du [bloc englobant](/fr/docs/Web/CSS/Guides/Display/Containing_block).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir le remplissage avec des pixels

#### HTML

```html
<h4>Cet élément a un remplissage modéré.</h4>
<h3>Le remplissage est énorme dans cet élément&nbsp;!</h3>
```

#### CSS

```css
h4 {
  background-color: lime;
  padding: 20px 50px;
}

h3 {
  background-color: cyan;
  padding: 110px 50px 50px 110px;
}
```

#### Résultat

{{EmbedLiveSample("Définir le remplissage avec des pixels", "100%", 300)}}

### Définir le remplissage avec des pixels et des pourcentages

```css
padding: 5%; /* Tous les côtés : 5 % de remplissage */

padding: 10px; /* Tous les côtés : 10px de remplissage */

padding: 10px 20px; /* haut et bas : 10px de remplissage */
/* gauche et droite : 20px de remplissage */

padding: 10px 3% 20px; /* haut :            10px de remplissage */
/* gauche et droite : 3 % de remplissage   */
/* bas :         20px de remplissage */

padding: 1em 3px 30px 5px; /* haut :    1em de remplissage  */
/* droite :  3px de remplissage  */
/* bas : 30px de remplissage */
/* gauche :   5px de remplissage  */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("padding-top")}}, {{CSSxRef("padding-right")}}, {{CSSxRef("padding-bottom")}} et {{CSSxRef("padding-left")}}
- Les propriétés {{CSSxRef("padding-block-start")}}, {{CSSxRef("padding-block-end")}}, {{CSSxRef("padding-inline-start")}} et {{CSSxRef("padding-inline-end")}}
- Les propriétés raccourcies {{CSSxRef("padding-block")}} et {{CSSxRef("padding-inline")}}
- Le guide [d'introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
