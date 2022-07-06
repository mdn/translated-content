---
title: offset-rotate
slug: Web/CSS/offset-rotate
tags:
  - CSS
  - Propriété
  - Reference
  - offset-rotate
translation_of: Web/CSS/offset-rotate
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`offset-rotate`** définit l'orientation et la direction de l'élément lorsqu'il est positionné le long du chemin représenté par {{cssxref("offset-path")}}.

## Syntaxe

```css
/* Suit la direction du chemin avec un éventuel */
/* décalage angulaire */
offset-rotate: auto;
offset-rotate: auto 45deg;

/* Suit la direction du chemin mais orienté dans la
/* direction opposée */
offset-rotate: reverse;

/* Conserve une rotation constante quelle que soit la position
/* sur le chemin  */
offset-rotate: 90deg;
offset-rotate: .5turn;
```

- `auto`
  - : L'élément est tourné avec l'angle donné par la direction du chemin {{cssxref("offset-path")}}, relativement à l'axe des abscisses. C'est la valeur par défaut.
- `{{cssxref("&lt;angle&gt;")}}`
  - : L'élément est tourné d'un angle fixe (indiqué dans le sens horaire).
- `auto <angle>`
  - : Si le mot-clé `auto` est suivi d'une valeur {{cssxref("&lt;angle&gt;")}}, l'élément est tourné de l'angle donné par rapport à la direction du chemin.
- `reverse`
  - : L'élément est tourné de façon similaire à `auto`, mais fait face à la direction opposée. Cette valeur est équivalente à `auto 180deg`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div {
  width: 40px;
  height: 40px;
  background: #2BC4A2;
  margin: 20px;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: move 5000ms infinite alternate ease-in-out;

  offset-path: path('M20,20 C20,50 180,-10 180,20');
}
div:nth-child(1) {
  offset-rotate: auto;
}
div:nth-child(2) {
  offset-rotate: auto 90deg;
}
div:nth-child(3) {
  offset-rotate: 30deg;
}

@keyframes move {
  100% {
    offset-distance: 100%;
  }
}
```

### HTML

```html
<div></div>
<div></div>
<div></div>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                                            | État                                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('Motion Path Level 1', '#offset-rotate-property', 'offset-rotate')}} | {{Spec2('Motion Path Level 1')}} | Définition initiale. |

{{cssinfo}}

> **Note :** Les versions antérieures de la spécification utilisait le nom `motion-rotation` pour cette propriété.

## Compatibilité des navigateurs

{{Compat("css.properties.offset-rotate")}}
