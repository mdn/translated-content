---
title: text-align
slug: Web/CSS/text-align
---

{{CSSRef}}

## Sumário

A propriedade CSS **`text-align`** descreve como conteúdo inline, como texto, é alinhado no elemento pai em bloco. `text-align` não controla o alinhamento de elementos em bloco, apenas o seu conteúdo inline.

{{cssinfo}}

## Sintaxe

```css
/* Keyword values */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: unset;
```

### Valores

- `start` {{experimental_inline}}
  - : Igual `left` se a direção é esquerda-para-direita e `right` se a direção é direita-para-esquerda.
- `end` {{experimental_inline}}
  - : Igual `right` se a direção é esquerda-para-direita e `left` se a direção é direita-para-esquerda.
- `left`
  - : O conteúdo é alinhado na borda esquerda do box.
- `right`
  - : O conteúdo é alinhado na borda direita do box.
- `center`
  - : Os conteúdos inline são centralizados entre a linha da caixa.
- `justify`
  - : Os conteúdos inline são justificados. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line.
- `justify-all`
  - : Semelhante a `justify`, porém força a última linha a ser justificada.
- `match-parent` {{experimental_inline}}
  - : Similar to `inherit`, but the values `start` and `end` are calculated according the parent's {{cssxref("direction")}} and are replaced by the adequate `left` or `right` value.

### Sintaxe Formal

{{csssyntax}}

## Exemplos

### Alinhamento Esquerdo

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: left;
  border: solid;
}
```

#### Resultado

{{EmbedLiveSample("Left_alignment","100%","100%")}}

### Texto centralizado

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### Resultado

{{EmbedLiveSample("Centered_text","100%","100%")}}

### Justificado

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### Resultado

{{EmbedLiveSample("Justificado","100%","100%")}}

### Notas

O modo compátivel-padrão de centralizar um bloco em si sem centralizar seu conteúdo inline é setando a {{cssxref("margin")}} left e right para `auto`, e.g.:

```css
.something {
  margin: auto;
}
```

```css
.something {
  margin: 0 auto;
}
```

```css
.something {
  margin-left: auto;
  margin-right: auto;
}
```

## Especificações

| Especificação                                                       | Status                              | Comentário                                                                                                        |
| ------------------------------------------------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#text-align', 'text-align')}} | {{Spec2('CSS Logical Properties')}} | Sem mudanças                                                                                                      |
| {{SpecName('CSS3 Text', '#text-align-property', 'text-align')}}     | {{Spec2('CSS3 Text')}}              | Added the `start`, `end`, and `match-parent` values. Changed the unnamed initial value to `start` (which it was). |
| {{SpecName('CSS2.1', 'text.html#alignment-prop', 'text-align')}}    | {{Spec2('CSS2.1')}}                 | Sem mudanças                                                                                                      |
| {{SpecName('CSS1', '#text-align', 'text-align')}}                   | {{Spec2('CSS1')}}                   | Definição iniciaç                                                                                                 |

## Browser compatibilidade

{{Compat("css.properties.text-align")}}

## Veja também

- {{Cssxref("margin","margin:auto")}}, {{Cssxref("margin-left","margin-left:auto")}}, {{Cssxref("vertical-align")}}
