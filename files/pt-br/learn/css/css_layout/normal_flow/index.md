---
title: Fluxo Normal
slug: Learn/CSS/CSS_layout/Normal_Flow
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}

Este artigo aborda o _Fluxo Normal_ de alinhamento e acomodação do conteúdo de uma página HTML, na qual o desenvolvedor não inseriu estilos pessoais. Este fluxo é um padrão usado pelos navegodares web. É uma solução preguiçosa ou rápida. Se o _Fluxo Normal_ por ventura não desagradar o programador, poupado será o seu tempo e esforço. Com o ônus adiado para quando ele quiser algo diferente.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Introdução ao HTML (study
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >), e uma noção de como o CSS funciona (study
        <a href="/pt-BR/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction to CSS</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectivo:</th>
      <td>
        Explicar qual é o leiaute padrão aplicado pelos navegadores web - a um
        arquivo HTML - sempre que não houver estilo ou formatos definidos pelo
        desenvolvedor da referida página.
      </td>
    </tr>
  </tbody>
</table>

Conforme detalhado na última lição de introdução ao leiaute, os elementos em uma página da web acomodam-se em Fluxo Normal, quando não é aplicada qualquer regra CSS para alterar a maneira como estes se comportam. And, as we began to discover, you can change how elements behave either by adjusting their position in that normal flow, or removing them from it altogether. Starting with a solid, well-structured document that is readable in normal flow is the best way to begin any webpage. It ensures that your content is readable, even if the user is using a very limited browser or a device such as a screen reader that reads out the content of the page. In addition, as normal flow is designed to make a readable document, by starting in this way you are working with the document rather than fighting against it as you make changes to the layout.

Before digging deeper into different layout methods, it is worth revisiting some of the things you will have studied in previous modules with regard to normal document flow.

## How are elements laid out by default?

First of all, individual element boxes are laid out by taking the elements' content, then adding any padding, border and margin around them — it's that box model thing again, which we've looked at earlier.

By default, a [block level element](/pt-BR/docs/Web/HTML/Block-level_elements)'s content is 100% of the width of its parent element, and as tall as its content. [Inline elements](/pt-BR/docs/Web/HTML/Inline_elements) are as tall as their content, and as wide as their content. You can't set width or height on inline elements — they just sit inside the content of block level elements. If you want to control the size of an inline element in this manner, you need to set it to behave like a block level element with `display: block;` (or even,`display: inline-block;` which mixes characteristics from both.)

That explains individual elements, but what about how elements interact with one another? The normal layout flow (mentioned in the layout introduction article) is the system by which elements are placed inside the browser's viewport. By default, block-level elements are laid out in the _block flow direction_, based on the parent's [writing mode](/pt-BR/docs/Web/CSS/writing-mode) (_initial_: horizontal-tb) — each one will appear on a new line below the last one, and they will be separated by any margin that is set on them. In English therefore, or any other horizontal, top to bottom writing mode, block-level elements are laid out vertically.

Inline elements behave differently — they don't appear on new lines; instead, they sit on the same line as one another and any adjacent (or wrapped) text content, as long as there is space for them to do so inside the width of the parent block level element. If there isn't space, then the overflowing text or elements will move down to a new line.

If two adjacent elements both have the margin set on them and the two margins touch, the larger of the two remains, and the smaller one disappears — this is called margin collapsing, and we have met this before too.

Let's look at a simple example that explains all of this:

```html
<h1>Basic document flow</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p>
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements will
  <span>wrap onto a new line if possible (like this one containing text)</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" />
</p>
```

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: rgba(255, 84, 104, 0.3);
  border: 2px solid rgb(255, 84, 104);
  padding: 10px;
  margin: 10px;
}

span {
  background: white;
  border: 1px solid black;
}
```

{{ EmbedLiveSample('Normal_Flow', '100%', 500) }}

## Summary

Now that you understand normal flow, and how the browser lays things out by default, move on to understand how to change this default display to create the layout needed by your design.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Introduction", "Learn/CSS/CSS_layout/Flexbox", "Learn/CSS/CSS_layout")}}
