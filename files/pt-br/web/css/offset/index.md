---
title: offset
slug: Web/CSS/offset
---

{{SeeCompatTable}}{{CSSRef}}

A propriedade CSS **`offset`** é uma propriedade abreviada para animar um elemento ao longo de um caminho definido.

> **Nota:** As primeiras versões da especificação chamam essa propriedade de `motion`.

{{cssinfo}}

## Sintaxe

```css
/* Posição do offset */
offset: auto
offset: 10px 30px;
offset: none;

/* Caminho do offset */
offset: ray(45deg closest-side);
offset: path(M 100 100 L 300 100 L 200 300 z);
offset: url(arc.svg);

/* Caminho do offset com distância e/ou rotação */
offset: url(circle.svg) 100px;
offset: url(circle.svg) 40%;
offset: url(circle.svg) 30deg;
offset: url(circle.svg) 50px 20deg;

/* Incluindo âncora no offset */
offset: ray(45deg closest-side) / 40px 20px;
offset: url(arc.svg) 2cm / 0.5cm 3cm;
offset: url(arc.svg) 30deg / 50px 100px;
```

### Sintaxe formal

{{csssyntax}}

## Exemplo

### HTML

```html
<div id="offsetElement"></div>
```

### CSS

```css
@keyframes move {
  from {
    offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}

#offsetElement {
  width: 50px;
  height: 50px;
  background-color: blue;
  offset: path("M 100 100 L 300 100 L 200 300 z") auto;
  animation: move 3s linear infinite;
}
```

### Resultado

{{EmbedLiveSample("Example", 350, 350)}}

## Especificações

| Especificação                                                      | Status                           | Comentário        |
| ------------------------------------------------------------------ | -------------------------------- | ----------------- |
| {{SpecName('Motion Path Level 1', '#offset-shorthand', 'offset')}} | {{Spec2('Motion Path Level 1')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("css.properties.offset")}}
