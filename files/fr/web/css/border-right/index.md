---
title: border-right
slug: Web/CSS/border-right
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-right
---
{{CSSRef}}

La propriété **`border-right`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui permet de décrire la bordure droite d'un élément.

Elle définit les valeurs des propriétés suivantes :

- {{cssxref("border-right-width")}},
- {{cssxref("border-right-style")}},
- {{cssxref("border-right-color")}}.

{{EmbedInteractiveExample("pages/css/border-right.html")}}

Ces propriétés permettent de décrire la bordure du côté droit d'un élément.

> **Note :** Les trois valeurs de la propriété raccourcie peuvent être définies dans n'importe quel ordre et une ou deux d'entre elles peuvent être absentes.
>
> Comme pour les autres propriétés raccourcies, `border-right` définit toujours les valeurs de toutes les propriétés qu'elle peut définir, même si celles-ci ne sont pas indiquées. Pour les valeurs qui ne sont pas indiquées, on prendra les valeurs par défaut. Ainsi :
>
> ```css
>   border-right-style: dotted;
>   border-right: thick green;
> ```
>
> est équivalent à :
>
> ```css
>   border-right-style: dotted;
>   border-right: none thick green;
> ```
>
> et la valeur {{cssxref("border-right-style")}} fournie avant `border-right` est ignorée.
>
> La valeur par défaut de {{cssxref("border-right-style")}} étant `none`, si on ne définit pas le style de la bordure, on aura la valeur par défaut, c'est-à-dire qu'on aura aucune bordure.

## Syntaxe

```css
border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;
```

### Valeurs

- `<br-width>`
  - : Voir {{cssxref("border-right-width")}}.
- `<br-style>`
  - : Voir {{cssxref("border-right-style")}}.
- `<color>`
  - : Voir {{cssxref("border-right-color")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exemple {
  border-right: 3px dotted orange;
}
```

### HTML

```html
<p class="exemple">
  En passant elle prit sur un rayon un pot
  de confiture portant cette étiquette,
  « MARMELADE D’ORANGES. »
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","200","150")}}

## Spécifications

| Spécification                                                                                    | État                                     | Commentaires                                                                                                                  |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#border-right', 'border-right')}}         | {{Spec2('CSS3 Backgrounds')}} | Pas de modification directe bien que la modification de valeurs pour {{cssxref("border-right-color")}} s'applique. |
| {{SpecName('CSS2.1', 'box.html#propdef-border-right', 'border-right')}} | {{Spec2('CSS2.1')}}                 | Aucune modification significative.                                                                                            |
| {{SpecName('CSS1', '#border-right', 'border-right')}}                         | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                                          |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-right")}}
