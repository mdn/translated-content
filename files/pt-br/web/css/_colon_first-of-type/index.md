---
title: ":first-of-type"
slug: Web/CSS/:first-of-type
---

{{CSSRef}}

A [CSS](/pt-BR/docs/Web/CSS) [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) **`:first-of-type`** representa o primeiro elemento de seu tipo entre os filhos de seu elemento pai.

```css
/* Seleciona qualquer <p> que seja o primeiro elemento
   desse tipo entre seus irmãos */
p:first-of-type {
  color: red;
}
```

> **Nota:** Originalmente definido, o elemento selecionado tinha que ter um pai. Desde o Seletores Nível 4, isso não é mais necessário.

## Sintaxe

{{csssyntax}}

## Exemplos

### Estilizando o primeiro parágrafo

#### HTML

```html
<h2>Título</h2>
<p>Parágrafo 1</p>
<p>Parágrafo 2</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### Resultado

{{EmbedLiveSample('Styling_the_first_paragraph')}}

### Elementos aninhados

Este exemplo mostra como os elementos aninhados também podem ser estilizados. Note que o [seletor universal](/pt-BR/docs/Web/CSS/Universal_selectors) (`*`) está implícito quando nenhum seletor simples está escrito.

#### HTML

```html
<article>
  <div>Esta `div` é a primeira!</div>
  <div>Esta <span>`span` aninhada é a primeira</span>!</div>
  <div>
    Este <em>`em` aninhado é o primeiro</em>, mas este
    <em>`em` aninhado é o último</em>!
  </div>
  <div>Este <span>`span` aninhado pegou o estilo</span>!</div>
  <b>Este `b` qualifica!</b>
  <div>Esta é a `div` final.</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample('Nested_elements', 500)}}

## Especificações

| Specification                                                             | Status                      | Comment                                                           |
| ------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#first-of-type-pseudo', ':first-of-type')}} | {{Spec2('CSS4 Selectors')}} | Os elementos correspondentes não são necessários para ter um pai. |
| {{SpecName('CSS3 Selectors', '#first-of-type-pseudo', ':first-of-type')}} | {{Spec2('CSS3 Selectors')}} | Definição inicial.                                                |

## Compatibilidade com navegadores

{{Compat("css.selectors.first-of-type")}}

## Veja também

- {{Cssxref(":first-child")}}, {{Cssxref(":last-of-type")}}, {{Cssxref(":nth-of-type")}}
