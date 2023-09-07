---
title: clear
slug: Web/CSS/clear
---

{{CSSRef}}

A propriedade **`clear do`** [CSS](/pt-BR/docs/CSS) especifica se um elemento pode ter elementos [flutuantes](/pt-BR/docs/CSS/float) ao seu lado ou se devem ser movidos para abaixo dele (clear). Essa propriedade se aplica à elementos flutuantes ou não flutuantes.

{{EmbedInteractiveExample("pages/css/clear.html")}}

Quando essa propriedade é aplicada em elementos não flutuantes, ele move a borda ([border edge](/pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)) desse elemento para a borda da margem ([margin edge](/pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)) de todos os elementos flutuantes relevantes. Ocorre um colapso das margens verticais dos elementos não flutuantes.

As margens verticais entre dois elementos flutuantes não irão sofrer esse colapso. Quando aplicada a elementos flutuantes, a borda de margem ([margin edge](/pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)) do elemento inferior é movida abaixo da borda de margem ([border edge](/pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)) de todos os elementos flutuantes relevantes. Isso afeta a posição dos elementos flutuantes posteriores, sendo que os elementos flutuantes posteriores não podem ser posicionados acima dos anteriores.

Os elementos flutuantes que devem ser limpos (clear) são os elementos anteriores dentro do mesmo contexto de bloco ([block formatting context](/pt-BR/docs/Web/Guide/CSS/Block_formatting_context)).

> **Nota:** se um elemento possuir apenas elementos flutuantes, sua altura é zerada. Se você quiser que o mesmo seja redimensionado, de modo que contenha elementos flutuantes dentro dele, você precisa limpar(clear) seus filhos automaticamente. Isso é chamado clearfix, e uma maneira de fazê-lo é adicionando um {{cssxref("::after")}} pseudo-elemento com a propriedade `clear.`
>
> ```css
> #container::after {
>   content: "";
>   display: block;
>   clear: both;
> }
> ```

## Sintaxe

```css
/* Valores chaves */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Valores globais */
clear: inherit;
clear: initial;
clear: unset;
```

### Valores

- `none`
  - : É uma palavra-chave que indica que o elemento não foi movido para baixo para limpar os elementos flutuantes anteriores.
- `left`
  - : É uma palavra-chave que indica que o elemento foi movido para baixo para limpar os últimos flutuantes da esquerda.
- `right`
  - : É uma palavra-chave que indica que o elemento foi movido para baixo para liberar os últimos elementos flutuantes.
- `both`
  - : É uma palavra-chave que indica que o elemento será movido para baixo para limpar os elementos flutuantes do lado esquerdo e direito.
- `inline-start`
  - : É uma palavra-chave que indica que o elemento será movido para baixo para limpar os elementos flutuantes no lado inicial de seu bloco, ou seja, os da esquerda flutuam nos scripts de ltr e os da direita nos scripts de rtl.
- `inline-end`
  - : É uma palavra-chave que indica que o elemento será movido para baixo para limpar os flutuantes no final de seu bloco, os da direita nos scripts de ltr e os flutuantes da esquerda nos scripts de rtl.

### Sintaxe

{{csssyntax}}

## Exemplos

### clear: left

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="left">This paragraph clears left.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear:_left','100%','250') }}

### clear: right

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="right">This paragraph clears right.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear:_right','100%','250') }}

### clear: both

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus
    ac dui.
  </p>
  <p class="red">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="both">This paragraph clears both.</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

{{ EmbedLiveSample('clear:_both','100%','300') }}

## Especificações

| Specification                                                             | Status                              | Comment                                               |
| ------------------------------------------------------------------------- | ----------------------------------- | ----------------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#float-clear', 'float and clear')}} | {{Spec2('CSS Logical Properties')}} | Adds the values `inline-start` and `inline-end`       |
| {{SpecName('CSS2.1', 'visuren.html#flow-control', 'clear')}}              | {{Spec2('CSS2.1')}}                 | No significant changes, though details are clarified. |
| {{SpecName('CSS1', '#clear', 'clear')}}                                   | {{Spec2('CSS1')}}                   | Initial definition                                    |

{{cssinfo}}

## Compatibilidade dos browsers

{{Compat("css.properties.clear")}}

## Veja também

- [Box model](/pt-BR/docs/CSS/box_model)
