---
title: opacity
slug: Web/CSS/opacity
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/opacity
---
{{CSSRef}}

La propriété **`opacity`** définit la transparence d'un élément. Autrement dit, elle permet de définir le degré de visibilité de l'arrière-plan sur lequel est placé l'élément.

{{EmbedInteractiveExample("pages/css/opacity.html")}}

La valeur s'applique à l'ensemble de l'élément et à ce qu'il contient même si la valeur n'est pas héritée par les éléments fils. Ainsi, un élément et les fils qu'il contient auront tous la même opacité relative à l'arrière-plan, même si l'élément et ses descendants ont des opacités différentes. Si on souhaite utiliser différentes opacités pour les différents éléments enfants, plutôt que d'utiliser `opacity`, on pourra utiliser la propriété {{cssxref("background")}} avec une composante alpha différente de 1 (par exemple : `background: rgba(0, 0, 0, 0.4);`).

## Syntaxe

```css
/* Valeurs numériques */
/* Totalement opaque  */
opacity: 1;
opacity: 1.0;

/* Légèrement transparent */
opacity: 0.6;

/* Complètement transparent */
opacity: 0.0;
opacity: 0;

/* Valeurs globales */
opacity: inherit;
opacity: initial;
opacity: unset;
```

### Valeurs

- `<number>`

  - : Une valeur de type {{cssxref("&lt;number&gt;")}} dans l'intervalle \[`0.0`, `1.0]` qui représente l'opacité de l'élément, la valeur de son canal alpha. Les valeurs en dehors de cet intervalle seront considérées comme valides mais ramenées dans cet intervalle (ainsi `6` sera équivalent à `1` et -2 sera équivalent à `0`).

    | Valeur                                                                                              | Signification                                                         |
    | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | `0`                                                                                                 | L'élément est complètement transparent (invisible).                   |
    | Toute valeur de type {{cssxref("&lt;number&gt;")}} strictement comprise entre `0` et `1` | L'élément est partiellement transparent, on peut voir l'arrière-plan. |
    | `1` (la valeur par défaut)                                                                          | L'élément est complètement opaque.                                    |

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemple simple

#### CSS

```css
div {
  background-color: yellow;
}

.leger {
  /* On ne voit presque pas le texte */
  opacity: 0.2;
}
.moyen {
  /* On peut mieux discerner le texte */
  opacity: 0.5;
}
.lourd {
  /* Le texte est clairement visible */
  opacity: 0.9;
}
```

#### HTML

```html
<div class="leger">On arrive à peine à lire.</div>
<div class="moyen">On voit mieux.</div>
<div class="lourd">Ceci est plus simple à lire.</div>
```

#### Résultat

{{EmbedLiveSample('Exemple_simple', '640', '64')}}

### Jouer sur l’opacité avec `:hover`

#### CSS

```css
img.opacity {
  opacity: 1;
  /* IE8 et antérieurs */
  filter: alpha(opacity=100);
  /* Déclenche "hasLayout" dans IE 7 et antérieurs */
  zoom: 1;
}

img.opacity:hover {
  opacity: 0.5;
  filter: alpha(opacity=50);
  zoom: 1;
}
```

#### HTML

```html
<img src="//developer.mozilla.org/media/img/mdn-logo.png"
     alt="MDN logo" width="128" height="146"
     class="opacity">
```

#### Résultat

{{EmbedLiveSample("Jouer_sur_l’opacité_avec_hover", '150', '175')}}

## Accessibilité

Si l'opacité du texte est modifiée, il est nécessaire de vérifier que le contraste entre la couleur du texte et l'arrière-plan est suffisant pour que le texte soit lisible, y compris pour les personnes souffrant de trouble de la vision.

Le ratio de contraste est déterminé en comparant la luminosité de la couleur du texte (dont l'opacité a été adaptée) et celle de l'arrière-plan. Les recommandations du [WCAG](https://www.w3.org/WAI/intro/wcag)  conseillent un ratio de 4.5:1 pour les textes normaux et 3:1 pour les textes plus grands (un texte est considéré comme grand s'il est en gras et dont les lettres mesurent 18.66px ou si ses lettres mesurent 24px ou plus).

- [Vérificateur de contraste WebAIM](https://webaim.org/resources/contrastchecker/)
- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.3, W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Spécifications

| Spécification                                                                        | Statut                                   | Commentaires                          |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'opacity')}} | {{Spec2('CSS3 Transitions')}} | `opacity` peut désormais être animée. |
| {{SpecName('CSS3 Colors', '#opacity', 'opacity')}}                 | {{Spec2('CSS3 Colors')}}         | Définition initiale.                  |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.opacity")}}

## Voir aussi

- [La documentation MSDN de Microsoft sur `filter:alpha(opacity=xx)`](https://msdn.microsoft.com/en-us/library/ms532910%28VS.85%29.aspx)
