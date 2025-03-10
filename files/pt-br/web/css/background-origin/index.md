---
title: background-origin
slug: Web/CSS/background-origin
---

{{CSSRef}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`background-origin`** define _a área de posicionamento do plano de fundo_, isto é, a ponto de origem de uma imagem específica usando a propriedade {{cssxref("background-image")}}.

{{InteractiveExample("CSS Demo: background-origin")}}

```css interactive-example-choice
background-origin: border-box;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-origin: padding-box;
background-repeat: no-repeat;
```

```css interactive-example-choice
background-origin: content-box;
background-repeat: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">This is the content of the element.</div>
</section>
```

```css interactive-example
#example-element {
  background-image: url("/shared-assets/images/examples/leopard.jpg");
  color: #d73611;
  text-shadow: 2px 2px black;
  padding: 20px;
  border: 10px dashed #333;
  font-size: 2em;
  font-weight: bold;
}
```

Note que `background-origin` é ignorado quando {{cssxref("background-attachment")}} é `fixed`.

> [!NOTE]
> A taquigrafia {{cssxref("background")}} redefine o valor desta propriedade para seu valor inicial se esta não foi específicada.

## Sintaxe

```css
/* Valores chave */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;

/* Valores globais */
background-origin: inherit;
background-origin: initial;
background-origin: unset;
```

A propriedade `background-origin` é especificada por uma chave de valores listadas abaixo.

### Valores

- `border-box`
  - : O plano de fundo é posicionado relativamente nas bordas do elemento.
- `padding-box`
  - : O plano de fundo é posicionado relativamente no espaçamento do elemento.
- `content-box`
  - : O plano de fundo é posicionado relativamente para o conteúdo do elemento.

### Sintaxe formal

{{csssyntax}}

## Exemplos

```css
.exemplo {
  border: 10px double;
  padding: 10px;
  background: url("image.jpg");
  background-position: center left;
  background-origin: content-box;
}
```

```css
#exemplo2 {
  border: 4px solid black;
  padding: 10px;
  background: url("image.gif");
  background-repeat: no-repeat;
  background-origin: border-box;
}
```

```css
div {
  background-image:
    url("logo.jpg"), url("mainback.png"); /* Applies two images to the background */
  background-position:
    top right,
    0px 0px;
  background-origin: content-box, padding-box;
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{cssxref("background-clip")}}
