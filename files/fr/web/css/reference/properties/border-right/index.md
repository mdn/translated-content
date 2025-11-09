---
title: border-right
slug: Web/CSS/Reference/Properties/border-right
original_slug: Web/CSS/border-right
---

{{CSSRef}}

La propriété **`border-right`** est une [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) qui permet de décrire la bordure droite d'un élément.

Elle définit les valeurs des propriétés suivantes :

- {{cssxref("border-right-width")}},
- {{cssxref("border-right-style")}},
- {{cssxref("border-right-color")}}.

{{InteractiveExample("CSS Demo: border-right")}}

```css interactive-example-choice
border-right: solid;
```

```css interactive-example-choice
border-right: dashed red;
```

```css interactive-example-choice
border-right: 1rem solid;
```

```css interactive-example-choice
border-right: thick double #32a1ce;
```

```css interactive-example-choice
border-right: 4mm ridge rgba(211, 220, 50, 0.6);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

Ces propriétés permettent de décrire la bordure du côté droit d'un élément.

> [!NOTE]
> Les trois valeurs de la propriété raccourcie peuvent être définies dans n'importe quel ordre et une ou deux d'entre elles peuvent être absentes.
>
> Comme pour les autres propriétés raccourcies, `border-right` définit toujours les valeurs de toutes les propriétés qu'elle peut définir, même si celles-ci ne sont pas indiquées. Pour les valeurs qui ne sont pas indiquées, on prendra les valeurs par défaut. Ainsi :
>
> ```css
> border-right-style: dotted;
> border-right: thick green;
> ```
>
> est équivalent à :
>
> ```css
> border-right-style: dotted;
> border-right: none thick green;
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

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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
