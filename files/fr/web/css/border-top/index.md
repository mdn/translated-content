---
title: border-top
slug: Web/CSS/border-top
---

{{CSSRef}}

La propriété CSS **`border-top`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) qui permet de paramétrer la bordure haute d'un élément.

C'est une propriété raccourcie qui permet de définir les valeurs de :

- {{cssxref("border-top-width")}},
- {{cssxref("border-top-style")}},
- {{cssxref("border-top-color")}}.

{{EmbedInteractiveExample("pages/css/border-top.html")}}

> **Note :** Les trois valeurs de la propriété raccourcie peuvent être définies dans n'importe quel ordre et une ou deux d'entre elles peuvent être absentes.
>
> Comme pour les autres propriétés raccourcies, `border-top` définit toujours les valeurs de toutes les propriétés qu'elle peut définir, même si celles-ci ne sont pas indiquées. Pour les valeurs qui ne sont pas indiquées, on prendra les valeurs par défaut. Ainsi :
>
> ```css
> border-top-style: dotted;
> border-top: thick green;
> ```
>
> est équivalent à :
>
> ```css
> border-top-style: dotted;
> border-top: none thick green;
> ```
>
> et la valeur {{cssxref("border-top-style")}} fournie avant `border-top` est ignorée.
>
> La valeur par défaut de {{cssxref("border-top-style")}} étant `none`, si on ne définit pas le style de la bordure, on aura la valeur par défaut, c'est-à-dire qu'on aura aucune bordure.

## Syntaxe

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;
```

Les valeurs de la propriété raccourcie peuvent être fournies dans n'importe quel ordre et une voire deux valeurs peuvent être omises.

### Valeurs

- `<br-width>`
  - : Voir {{cssxref("border-top-width")}}.
- `<br-style>`
  - : Voir {{cssxref("border-top-style")}}.
- `<color>`
  - : Voir {{cssxref("border-top-color")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  border-top: 3px dotted orange;
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
