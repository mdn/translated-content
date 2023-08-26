---
title: position
slug: Web/CSS/position
---

{{CSSRef}}A propriedade **`position`**, encontrada no [CSS](/pt-BR/docs/Web/CSS), define como um elemento pode ser posicionado (renderizado) no documento (página). Essa propriedade (**`position`**) pode ser acompanhada de outras, tais como, {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}}, and {{Cssxref("left")}}, que determinam como ficará a localização final do objeto, permitindo seu deslocamento, como será apresentado adiante.{{EmbedInteractiveExample("pages/css/position.html")}}

### Tipos de posicionamentos

- Um **elemento posicionado** é um elemento cujo valor de sua posição pode ser [computado (calculado)](/pt-BR/docs/CSS/computed_value) como `relative`, `absolute`, `fixed`, or `sticky`. ( Em outras palavras, são todos esses, com exceção do `static`, sendo estático o valor como padrão do elemento.)
- Um elemento denominado com **posicionamento relativo**, ou **relatively positioned element**, é um elemento cuja função é [calculada](/pt-BR/docs/CSS/computed_value) ao ser definida a `position` como valor `relative`. Com isso, a propriedade {{Cssxref("top")}} e {{Cssxref("bottom")}} determinam o deslocamento ou projeção vertical a posição padrão do elemento que estava definida por `static`; Não sendo outro, o {{Cssxref("left")}} e o {{Cssxref("right")}}, por sua vez, determinam o deslocamento horizontal.
- Um elemento denominado com **posicionamento absoluto**, ou **absolutely positioned element**, é um elemento determinado e calculado ao atribuir ao `position` o valor `absolute` ou `fixed`. Com {{Cssxref("top")}}, {{Cssxref("right")}}, {{Cssxref("bottom")}}, and {{Cssxref("left")}} é possível especificar o deslocamento das laterais (bordas) dos blocos que contêm ([containing block](/pt-BR/docs/Web/CSS/Containing_Block)) os elementos. (O containing block, ou blocos que envolvem um elemento é definido como um antecessor relativo ao qual o elemento está posicionado, acomplado ou englobado. Se por ventura o elemento tiver definido margens (margin), ele são adicionados ao deslocamento (offset). O elemento estabelecerá um novo [contexto de formatação do bloco](/pt-BR/docs/Web/Guide/CSS/Block_formatting_context) (BFC) para seus conteúdos.
- Um elemento denominado com **posicionamento adesivo** ( ! ), ou **stickily positioned element**, é um elemento determinado e calculado ao atribuir ao `position` como valor `sticky`. Sendo tratado como um posicionamento relativo até que ultrapasse (atinja) os limites do [bloco no qual está contido](/pt-BR/docs/docs/Web/CSS/Containing_Block). (Se assemelha a configurar a propriedade {{Cssxref("top")}} com um valor diferente de automático (auto)) Dentro do seu fluxo principal (fluxo raiz, ou o contêiner no qual ele desloca-se), No momento que há o deslocamento da página o elemento é tratado como "preso" ou "stuck" até encontrar-se com as paredes opostas do [bloco no qual esteja contido](/pt-BR/docs/docs/Web/CSS/Containing_Block).

Maior parte do tempo, um **elemento de posicionamento absoluto** que tem {{Cssxref("height")}} e {{Cssxref("width")}} configurados como `auto` são dimensionados de acordo com seu conteúdo interno. However, non-[replaced](/pt-BR/docs/Web/CSS/Replaced_element), absolutely positioned elements can be made to fill the available vertical space by specifying both {{Cssxref("top")}} and {{Cssxref("bottom")}} and leaving {{Cssxref("height")}} unspecified (that is, `auto`). They can likewise be made to fill the available horizontal space by specifying both {{Cssxref("left")}} and {{Cssxref("right")}} and leaving {{Cssxref("width")}} as `auto`.

Exceto para esses casos descritos abaixo (para elementos de posicionamento absoluto que preenchem o espaço disponível):

- Se ambos `top` e `bottom` são definidos (tecnicamento não sendo `auto`), `top` prevalece.
- Se ambos `left` e `right` são definidos, `left` prevalece quando {{Cssxref("direction")}} é `ltr` (Direção da escrita Portuguesa, Japonês na horizontal, etc.) e `right` prevalece quando {{Cssxref("direction")}} for configurado `rtl` ( Padrão de escrita em idiomas como Persa, Arabe, Hebraico, etc.).

## Sintaxe

A propriedade `position` é definida com apenas uma palavra-chave da lista abaixo.

### Valores

- `static`
  - : O elemento é posicionado de acordo com o fluxo normal do documento. O {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, e {{cssxref("z-index")}} propriedades _não têm efeito._. Este é o valor padrão.
- `relative`

  - : O elemento é posicionado de acordo com o fluxo normal do documento e, em seguida, deslocado _em relação a si mesmo_ com base nos valores de `top`, `right`, `bottom`, e `left`. O deslocamento não afeta a posição de nenhum outro elemento; assim, o espaço dado para o elemento no layout da página é o mesmo que se a posição fosse `static`.

    Este valor cria um novo [stacking context (contexto de empilhamento)](/pt-BR/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) quando o valor de `z-index` não for `auto`. Seu efeito em `table-*-group`, `table-row`, `table-column`, `table-cell` e os elementos `table-caption` são indefinidos.

- `absolute`

  - : O elemento é removido do fluxo normal de documentos e nenhum espaço é criado para o elemento no layout da página. Ele é posicionado em relação ao seu ancestral posicionado mais próximo, se houver; caso contrário, ele é colocado em relação ao inicial [containing block](/pt-BR/docs/Web/CSS/Containing_Block). Sua posição final é determinada pelos valores de `top`, `right`, `bottom`, e `left`.

    Este valor cria um novo [stacking context](/pt-BR/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) quando o valor de `z-index` não é `auto`. As margens das caixas posicionadas absolutamente não [collapse](/pt-BR/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) com outras margens.

- `fixed`

  - : O elemento é removido do fluxo normal de documentos e nenhum espaço é criado para o elemento no layout da página. Ele está posicionado em relação ao inicial [containing block](/pt-BR/docs/Web/CSS/Containing_Block) estabelecido pelo {{glossary("viewport")}}, exceto quando um de seus ancestrais tiver uma propriedade `transform`, `perspective` ou `filter` definida como algo diferente de `none` (see the [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), nesse caso, esse ancestral se comporta como o bloco que o contém. (Observe que há inconsistências no navegador com `perspective` e `filter` contribuindo para conter a formação do bloco.) Sua posição final é determinada pelos valores de `top`, `right`, `bottom` e `left`.

    Este valor sempre cria um novo [stacking context](/pt-BR/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). Em documentos impressos, o elemento é colocado na mesma posição em _todas as páginas_.

- `sticky`

  - : O elemento é posicionado de acordo com o fluxo normal do documento e, em seguida, deslocado em relação ao _ancestral de rolagem mais próximo_ e [containing block](/pt-BR/docs/Web/CSS/Containing_Block) (ancestral de nível de bloco mais próximo), incluindo elementos relacionados à tabela, com base nos valores de `top`, `right`, `bottom` e `left`. O deslocamento não afeta a posição de nenhum outro elemento.

    Este valor sempre cria um novo [stacking context](/pt-BR/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). Observe que um elemento sticky "gruda" em seu ancestral mais próximo que possui um "mecanismo de rolagem" (criado quando `overflow` é `hidden`, `scroll`, `auto` ou `overlay`), mesmo que esse ancestral não seja o ancestral de rolagem mais próximo. Isso inibe efetivamente qualquer comportamento "pegajoso" (see the [Github issue on W3C CSSWG](https://github.com/w3c/csswg-drafts/issues/865)).

### Sintáxe formal

{{csssyntax}}

## Exemplos

### Posicionamento relativo

Relatively positioned elements are offset a given amount from their normal position within the document, but without the offset affecting other elements. In the example below, note how the other elements are placed as if "Two" were taking up the space of its normal location.

#### HTML

```html
<div class="box" id="one">One</div>
<div class="box" id="two">Two</div>
<div class="box" id="three">Three</div>
<div class="box" id="four">Four</div>
```

#### CSS

```css
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#two {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
```

{{ EmbedLiveSample('Relative_positioning', '600px', '200px') }}

### Posicionamento absoluto

Elements that are relatively positioned remain in the normal flow of the document. In contrast, an element that is absolutely positioned is taken out of the flow; thus, other elements are positioned as if it did not exist. The absolutely positioned element is positioned relative to its _nearest positioned ancestor_ (i.e., the nearest ancestor that is not `static`). If a positioned ancestor doesn't exist, it is positioned relative to the ICB (initial containing block — see also the [W3C definition](https://www.w3.org/TR/CSS2/visudet.html#containing-block-details)), which is the containing block of the document's root element.

A simple example follows:

```html
<h1>Absolute positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
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
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
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
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Absolute_positioning', '100%', 420) }}

### Posicionamento fixo

Fixed positioning is similar to absolute positioning, with the exception that the element's [containing block](/pt-BR/docs/Web/CSS/Containing_Block) is the initial containing block established by the _viewport_, unless any ancestor has `transform`, `perspective`, or `filter` property set to something other than `none` (see [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), which then causes that ancestor to take the place of the elements [containing block](/pt-BR/docs/Web/CSS/Containing_Block). This can be used to create a "floating" element that stays in the same position regardless of scrolling. In the example below, box "One" is fixed at 80 pixels from the top of the page and 10 pixels from the left. Even after scrolling, it remains in the same place relative to the viewport.

#### HTML

```html
<div class="outer">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue tortor
    eget pulvinar lobortis. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia Curae; Nam ac dolor augue. Pellentesque mi mi,
    laoreet et dolor sit amet, ultrices varius risus. Nam vitae iaculis elit.
    Aliquam mollis interdum libero. Sed sodales placerat egestas. Vestibulum ut
    arcu aliquam purus viverra dictum vel sit amet mi. Duis nisl mauris, aliquam
    sit amet luctus eget, dapibus in enim. Sed velit augue, pretium a sem
    aliquam, congue porttitor tortor. Sed tempor nisl a lorem consequat, id
    maximus erat aliquet. Sed sagittis porta libero sed condimentum. Aliquam
    finibus lectus nec ante congue rutrum. Curabitur quam quam, accumsan id
    ultrices ultrices, tempor et tellus.
  </p>
  <div class="box" id="one">One</div>
</div>
```

#### CSS

```css
.box {
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#one {
  position: fixed;
  top: 80px;
  left: 10px;
  background: blue;
}

.outer {
  width: 500px;
  height: 300px;
  overflow: scroll;
  padding-left: 150px;
}
```

{{ EmbedLiveSample('Fixed_positioning', '800px', '300px') }}

### Posicionamento Adesivo

Sticky positioning can be thought of as a hybrid of relative and fixed positioning. A stickily positioned element is treated as relatively positioned until it crosses a specified threshold, at which point it is treated as fixed until it reaches the boundary of its parent. For instance...

```css
#one {
  position: sticky;
  top: 10px;
}
```

...would position the element with id _one_ relatively until the viewport were scrolled such that the element would be less than 10 pixels from the top. Beyond that threshold, the element would be fixed to 10 pixels from the top.

A common use for sticky positioning is for the headings in an alphabetized list. The "B" heading will appear just below the items that begin with "A" until they are scrolled offscreen. Rather than sliding offscreen with the rest of the content, the "B" heading will then remain fixed to the top of the viewport until all the "B" items have scrolled offscreen, at which point it will be covered up by the "C" heading, and so on.

You must specify a threshold with at least one of `top`, `right`, `bottom`, or `left` for sticky positioning to behave as expected. Otherwise, it will be indistinguishable from relative positioning.

#### HTML

```html
<dl>
  <div>
    <dt>A</dt>
    <dd>Andrew W.K.</dd>
    <dd>Apparat</dd>
    <dd>Arcade Fire</dd>
    <dd>At The Drive-In</dd>
    <dd>Aziz Ansari</dd>
  </div>
  <div>
    <dt>C</dt>
    <dd>Chromeo</dd>
    <dd>Common</dd>
    <dd>Converge</dd>
    <dd>Crystal Castles</dd>
    <dd>Cursive</dd>
  </div>
  <div>
    <dt>E</dt>
    <dd>Explosions In The Sky</dd>
  </div>
  <div>
    <dt>T</dt>
    <dd>Ted Leo &amp; The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </div>
</dl>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

dl > div {
  background: #fff;
  padding: 24px 0 0 0;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: #fff;
  font:
    bold 18px/21px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

dd {
  font:
    bold 20px/45px Helvetica,
    Arial,
    sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #ccc;
}
```

{{ EmbedLiveSample('Sticky_positioning', '500px', '300px') }}

## Accessibility concerns

Ensure that elements positioned with an `absolute` or `fixed` value do not obscure other content when the page is zoomed to increase text size.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Visual Presentation: Understanding SC 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

### Performance & Accessibility

Scrolling elements containing `fixed` or `sticky` content can cause performance and accessibility issues. As a user scrolls, the browser must repaint the sticky or fixed content in a new location. Depending on the content needing to be repainted, the browser performance, and the device's processing speed, the browser may not be able to manage repaints at 60 fps, causing accessibility concerns for people with sensitivities and jank for everyone. One solution is to add {{cssxref("will-change", "will-change: transform")}} to the positioned elements to render the element in its own layer, improving repaint speed and therefore improving performance and accessibility.

## Especificações

| Specification                                                       | Status                        | Comment                       |
| ------------------------------------------------------------------- | ----------------------------- | ----------------------------- |
| {{SpecName('CSS2.1', 'visuren.html#propdef-position', 'position')}} | {{Spec2('CSS2.1')}}           |                               |
| {{SpecName('CSS3 Positioning','#position-property','position')}}    | {{Spec2('CSS3 Positioning')}} | Adds `sticky` property value. |

{{cssinfo}}

## Compatibilidade do navegador

{{Compat("css.properties.position")}}
