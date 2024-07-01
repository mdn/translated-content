---
title: border-left
slug: Web/CSS/border-left
---

{{CSSRef}}

La propriété **`border-left`** est une propriété raccourcie qui permet de définir la bordure gauche d'un élément

Cette propriété raccourcie définit les valeurs des propriétés détaillées suivantes :

- {{cssxref("border-left-width")}},
- {{cssxref("border-left-style")}},
- {{cssxref("border-left-color")}}.

Ces propriétés permettent de décrire la bordure du côté gauche d'un élément.

{{EmbedInteractiveExample("pages/css/border-left.html")}}

> **Note :** Les trois valeurs de la propriété raccourcie peuvent être définies dans n'importe quel ordre et une ou deux d'entre elles peuvent être absentes.
>
> Comme pour les autres propriétés raccourcies, `border-left` définit toujours les valeurs de toutes les propriétés qu'elle peut définir, même si celles-ci ne sont pas indiquées. Pour les valeurs qui ne sont pas indiquées, on prendra les valeurs par défaut. Ainsi :
>
> ```css
> border-left-style: dotted;
> border-left: thick green;
> ```
>
> est équivalent à :
>
> ```css
> border-left-style: dotted;
> border-left: none thick green;
> ```
>
> et la valeur {{cssxref("border-left-style")}} fournie avant `border-left` est ignorée.
>
> La valeur par défaut de {{cssxref("border-left-style")}} étant `none`, si on ne définit pas le style de la bordure, on aura la valeur par défaut, c'est-à-dire qu'on aura aucune bordure.

## Syntaxe

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed green;
```

### Valeurs

- `<br-width>`
  - : Voir {{cssxref("border-left-width")}}.
- `<br-style>`
  - : Voir {{cssxref("border-left-style")}}.
- `<color>`
  - : Voir {{cssxref("border-left-color")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  border-left: 3px dotted orange;
}
```

### HTML

```html
<p class="exemple">
  En passant elle prit sur un rayon un pot de confiture portant cette étiquette,
  « MARMELADE D’ORANGES. »
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","200","150")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
