---
title: line-height
slug: Web/CSS/line-height
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/line-height
---
{{CSSRef}}

La propriété **`line-height`** définit la hauteur de la boîte d'une ligne.

Sur les éléments de bloc, la propriété **`line-height`** indique la hauteur minimale des lignes au sein de l'élément. Sur les éléments en ligne qui ne sont pas [remplacés](/fr/docs/Web/CSS/Élément_remplacé), **`line-height`** indique la hauteur utilisée pour calculer la hauteur de la boîte d'une ligne.

{{EmbedInteractiveExample("pages/css/line-height.html")}}

## Syntaxe

```css
/* Valeur avec un mot-clé */
line-height: normal;

/* Type <number> */
/* S'il n'y a pas d'unité, cela
   représente un facteur multiplicateur
   de la taille de la police appliquée à
   l'élément */
line-height: 3.5;

/* Valeur de longueur */
/* Type <length>      */
line-height: 3em;

/* Valeurs proportionnelles */
/* Type <percentage>        */
line-height: 34%;

/* Valeurs globales */
line-height: inherit;
line-height: initial;
line-height: unset;
```

La propriété `line-height` peut être définie grâce :

- à un nombre (une valeur de type [`<number>`](#number))
- à une longueur (une valeur de type [`<length>`](#length))
- à un pourcentage (une valeur de type [`<percentage>`](#percentage))
- au mot-clé [`normal`](#normal)

### Valeurs

- `normal`
  - : Le comportement dépend de l'agent utilisateur. Pour les navigateurs de bureau, l'agent utilisateur prend généralement une valeur environ égale à 1.2 selon la valeur de `font-family`.
- `<number>`
  - : La valeur utilisée est **sans unité** (type {{cssxref("&lt;number&gt;")}}) et correspond à un facteur multiplicateur de la taille de fonte utilisée. La valeur calculée est la même que celle définie avec `<number>`. Dans la plupart des cas, c'est la méthode qu'on privilégiera pour définir `line-height` et éviter les effets de l'héritage.
- `<length>`
  - : La valeur de longueur (type {{cssxref("&lt;length&gt;")}}) est utilisée pour calculer la hauteur de la boîte de la ligne. Les différentes unités qui peuvent être utilisées sont décrites avec la page {{cssxref("&lt;length&gt;")}}. Les valeurs exprimées en `em` peuvent produire des résultats inattendus.
- `<percentage>`
  - : La valeur exprimée est relative à la taille de fonte utilisée pour l'élément. La valeur calculée sera le pourcentage (type {{cssxref("&lt;percentage&gt;")}}) indiqué, multiplié par la taille calculée de la police de l'élément. Voir la section Notes pour plus de précisions sur le comportement de ce type et des valeurs exprimées en `em`.
- `-moz-block-height` {{non-standard_inline}}
  - : La hauteur de la ligne correspond à la hauteur du contenu pour le bloc courant.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
/* Toutes les règles qui suivent
   fourniront un résultat équivalent */

div { line-height: 1.2;   font-size: 10pt }   /* number */
div { line-height: 1.2em; font-size: 10pt }   /* length */
div { line-height: 120%;  font-size: 10pt }   /* percentage */
div { font: 10pt/1.2 Georgia,"Bitstream Charter",serif }
```

### Notes

- Plus souvent, on utilisera la propriété raccourcie {{cssxref("font")}} plutôt que `line-height`. Pour cette propriété raccourcie, il est cependant nécessaire d'avoir une valeur pour la propriété `font-family`.

### Gestion de l'héritage et valeurs sans unité

Dans cet exemple, on voit qu'il est préférable d'utiliser des valeurs de type {{cssxref("&lt;number&gt;")}} plutôt que des valeurs de longueur (type {{cssxref("&lt;length&gt;")}}.

On utilisera deux éléments {{HTMLElement("div")}}. Le premier aura une bordure verte et une valeur sans unité. Le second aura une bordure rouge et une valeur de longueur

#### CSS

```css
.green {
  line-height: 1.1;
  border: solid limegreen;
}
.red {
  line-height: 1.1em;
  border: solid red;
}
h1 {
  font-size: 30px;
}
.box {
  width: 18em;
  display: inline-block;
  vertical-align: top;
  font-size: 15px;
}
```

#### HTML

```html
<div class="box green">
 <h1>Avoid unexpected results by using unitless line-height</h1>
  length and percentage line-heights have poor inheritance behavior ...
</div>

<div class="box red">
 <h1>Avoid unexpected results by using unitless line-height</h1>
  length and percentage line-heights have poor inheritance behavior ...
</div>

<!-- La première hauteur pour <h1> est calculée à partir de sa propre hauteur  (30px × 1.1) = 33px  -->
<!-- La hauteur du deuxième <h1> est basée sur la hauteur du div (15px × 1.1) = 16.5px ... -->
```

#### Résultat

{{EmbedLiveSample("Gestion_de_l'héritage_et_valeurs_sans_unité", '100%', '200', '')}}

## Accessibilité

Il est nécessaire d'utiliser une valeur minimale de `1.5` pour la propriété `line-height` lorsqu'on l'applique sur le contenu des paragraphes principaux. Cela aidera les personnes ayant du mal à lire et les personnes dyslexiques. Utiliser une valeur sans unité permet de garantir une mise à l'échelle proportionnelle lorsqu'on zoome/dézoome.

- [_Visual Presentation: Understanding SC 1.4.8, Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Spécifications

| Spécification                                                                                    | État                                     | Commentaires                              |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'line-height')}}         | {{Spec2('CSS3 Transitions')}} | `line-height` peut désormais être animée. |
| {{SpecName('CSS2.1', 'visudet.html#propdef-line-height', 'line-height')}} | {{Spec2('CSS2.1')}}                 | Aucun changement.                         |
| {{SpecName('CSS1', '#line-height', 'line-height')}}                             | {{Spec2('CSS1')}}                 | Définition initiale.                      |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.line-height")}}

## Voir aussi

- {{cssxref("font")}}
- {{cssxref("font-size")}}
