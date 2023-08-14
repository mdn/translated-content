---
title: element
slug: Web/CSS/element
---

{{CSSRef}}{{SeeCompatTable}}

A função [CSS](/pt-BR/docs/CSS) **`element()`** define uma {{cssxref("&lt;image&gt;")}} gerada de um elemento HTML qualquer. Essa imagem é **_dinamica_**, significando que se o elemento HTML for mudado, a propriedade CSS usando este valor será atualizada automaticamente.

Um cenario particularmente util para usar esta função seria colocar uma imagem em um elemento {{HTMLElement("canvas")}}, e então usar-lo como um _background_.

Em navegadores Gecko, você pode usar o metodo não padronizado {{domxref("document.mozSetImageElement()")}} para mudar o elemento sendo usado como _background_ por um elemento de _background_ selecionado por CSS.

## Sintaxe

```
element( id )
```

Onde:

- `id`
  - : É o ID de um elemento para usar como background, especificado usando o atributo HTML #_id_ no elemento.

## Exemplos

Esses exemplos podem ser [vistos em tempo real](/samples/cssref/moz-element.html) em versões do Firefox que suportam `-moz-element()`.

### Um exemplo de alguma maneira real

Esse exemplo usa uma {{HTMLElement("div")}} escondida como _background_. O elemento de _background_ tem um gradiente, mas tambem um texto que é usado como parte do _background_.

```html
<div
  style="width:400px; height:400px; background:-moz-element(#myBackground1) no-repeat;">
  <p>This box uses the element with the #myBackground1 ID as its background!</p>
</div>

<div style="overflow:hidden; height:0;">
  <div
    id="myBackground1"
    style="width:1024px; height:1024px; background-image: linear-gradient(to right, red, orange, yellow, white);">
    <p style="transform-origin:0 0; transform: rotate(45deg); color:white;">
      This text is part of the background. Cool, huh?
    </p>
  </div>
</div>
```

A {{HTMLElement("div")}} com ID "myBackground1" é usada como _background_, mantendo o paragrafo "This box uses the element with the #myBackground1 ID as its background!".

![example1.png](/@api/deki/files/4624/=example1.png)

### Um exemplo ainda mais bizarro

Esse exemplo usa um elemento {{HTMLElement("button")}} se repetindo como _background_. Isso mostra que você pode usar qualquer elemento como background, mas não mostra necessariamente boas praticas de design.

```html
<div
  style="width:400px; height:100px; background:-moz-element(#myBackground2);"></div>

<div style="overflow:hidden; height:0;">
  <button id="myBackground2" type="button">Evil button!</button>
</div>
```

![example2.png](/@api/deki/files/4625/=example2.png)

## Especificações

| Especificação                                                                                        | Estatus                  | Comentário                      |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------- |
| {{SpecName('CSS4 Images', '#element-notation', 'Using Elements as Images: the element() notation')}} | {{Spec2('CSS4 Images')}} | Actualmente adiado para o CSS4. |

## Compatibilidade dos navegadores

{{Compat("css.types.image.element")}}

## Veja tambem

- {{domxref("document.mozSetImageElement()")}}
