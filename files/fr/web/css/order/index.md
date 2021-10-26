---
title: order
slug: Web/CSS/order
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/order
---
{{CSSRef}}

La propriété **`order`** définit l'ordre avec lequel on dessine les éléments d'un conteneur d'éléments flexibles ou d'une grille d'éléments. Les éléments sont appliqués dans l'ordre croissant des valeurs de `order`. Les éléments ayant la même valeur pour `order` seront appliqués dans l'ordre selon lequel ils apparaissent dans le code source du document.

{{EmbedInteractiveExample("pages/css/order.html")}}

> **Note :** `order` est uniquement conçue pour affecter **l'ordre visuel**. Elle ne doit pas être utilisée pour modifier l'ordre logique ou l'ordre de tabulation. **`order`** ne doit pas être utilisée avec les média non visuels comme les informations vocales.

## Syntaxe

```css
/* Valeurs entières (type <integer>) */
/* positives ou négatives */
order: 5;
order: -5;

/* Valeurs globales */
order: inherit;
order: initial;
order: unset;
```

### Valeurs

- `<integer>`
  - : Un nombre entier (cf. {{cssxref("&lt;integer&gt;")}}) indiquant l'ordre à appliquer pour l'élément.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div id='main'>
   <article>Lorem ipsum</article>
   <nav> consectetur adipisicing elit, sed do eiusmod</nav>
   <aside>tempor incididunt ut labore et dolore magna</aside>
</div>
```

### CSS

Grâce à ces déclarations CSS, on crée un disposition avec deux barres entourant un bloc de contenu. Le module de disposition des boîtes flexibles crée des bloc de tailles verticales égales et utilise autant d'espace horizontal qu'il y en a de disponible.

```css
#main {
  display: flex;
}

#main > article {
  flex:1;
  order: 2;
  border: 1px dotted orange;
}

#main > nav {
  width: 200px;
  order: 1;
  border: 1px dotted blue;
}

#main > aside {
  width: 200px;
  order: 3;
  border: 1px dotted blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Accessibilité

La propriété `order` créera une incohérence entre l'ordre de présentation visuelle et celui du DOM. Cela aura un impact négatif pour les utilisateurs avec des troubles de la vision et qui utilisent des outils d'assistance comme les lecteurs d'écran. Si l'ordre visuel est important, les utilisateurs de lecteurs d'écran n'auront pas accès à l'ordre correct.

- [_Flexbox & the keyboard navigation disconnect — Tink_ (en anglais)](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [_Source Order Matters, Adrian Roselli_ (en anglais)](https://adrianroselli.com/2015/09/source-order-matters.html)
- [Comprendre les règles du WCAG 1.3](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [_Understanding Success Criterion 1.3.2, W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Spécifications

| Spécification                                                                | État                             | Commentaires         |
| ---------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Flexbox', '#order-property', 'order')}} | {{Spec2('CSS3 Flexbox')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.order")}}

## Voir aussi

- Le guide CSS sur les boîtes flexibles : _[Les concepts de base](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Le guide CSS sur les boîtes flexibles : _[Ordonner les éléments flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
- Le guide sur la grille CSS : _[La disposition en grille et l'accessibilité](/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)_
