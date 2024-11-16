---
title: border-bottom
slug: Web/CSS/border-bottom
---

{{CSSRef}}

La propriété **`border-bottom`** est une propriété raccourcie qui définit la bordure du côté bas d'un élément.

C'est une propriété raccourcie qui synthétise :

- {{cssxref("border-bottom-width")}},
- {{cssxref("border-bottom-color")}},
- {{cssxref("border-bottom-style")}}.

Ces propriétés permettent de décrire la bordure du côté bas d'un élément.

{{EmbedInteractiveExample("pages/css/border-bottom.html")}}

> [!NOTE]
> Comme pour les autres propriétés raccourcies, `border-bottom` définit toujours les valeurs de toutes les propriétés qu'elle peut définir, même si celles-ci ne sont pas indiquées. Pour les valeurs qui ne sont pas indiquées, on prendra les valeurs par défaut. Ainsi :
>
> ```css
> border-bottom-style: dotted;
> border-bottom: thick green;
> ```
>
> est équivalent à :
>
> ```css
> border-bottom-style: dotted;
> border-bottom: none thick green;
> ```
>
> et la valeur {{cssxref("border-bottom-style")}} fournie avant `border-bottom` est ignorée.
>
> La valeur par défaut de {{cssxref("border-bottom-style")}} étant `none`, si on ne définit pas le style de la bordure, on aura la valeur par défaut, c'est-à-dire qu'on aura aucune bordure.

## Syntaxe

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed green;
```

Les trois valeurs de la propriété raccourcie peuvent être définies dans n'importe quel ordre et une ou deux d'entre elles peuvent être absentes.

### Valeurs

- `<br-width>`
  - : Voir {{cssxref("border-bottom-width")}}.
- `<br-style>`
  - : Voir {{cssxref("border-bottom-style")}}.
- `<color>`
  - : Voir {{cssxref("border-bottom-color")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  border-bottom: 3px dotted orange;
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
