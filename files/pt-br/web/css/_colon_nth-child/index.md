---
title: ":nth-child()"
slug: Web/CSS/:nth-child
---

{{CSSRef}}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) `:nth-child()` seleciona elementos com base em suas posições em um grupo de elementos irmãos.

```css
/* Seleciona um a cada quatro elementos
   de qualquer grupo de elementos irmãos,
   começando do quarto elemento (4, 8 12, etc.). */
:nth-child(4n) {
  color: lime;
}
```

## Sintaxe

A pseudo-classe **`nth-child`** é usada com apenas um argumento, que representa o padrão usado para selecionar os elementos.

### Valores

- `odd`
  - : Representa elementos cuja posição numérica em uma série de irmãos seja ímpar: 1, 3, 5, etc.
- `even`
  - : Representa elementos cuja posição numérica em uma série de irmãos seja par: 2, 4, 6, etc.

### Notação funcional

- `<An+B>`
  - : Representa elementos cuja posição numérica em uma série de irmãos corresponda ao padrão `An+B`, o qual será aplicado a todo número maior ou igual a zero (ou seja, começando do zero). O índice do primeiro elemento é `1`. Ambos os valores `A` e `B` devem ser {{cssxref("&lt;integer&gt;")}} (inteiros).

### Sintaxe formal

{{csssyntax}}

## Exemplos

### Exemplos de seletores

- `tr:nth-child(odd)` or `tr:nth-child(2n+1)`
  - : Representa as linhas ímpares de uma tabela HTML: 1, 3, 5, etc.
- `tr:nth-child(even)` or `tr:nth-child(2n)`
  - : Representa as linhas pares de uma tabela HTML: 2, 4, 6, etc.
- `:nth-child(7)`
  - : Representa o sétimo elemento.
- `:nth-child(5n)`
  - : Representa os elementos de número **5** \[=5×1], **10** \[=5×2], **15** \[=5×3], **etc.**
- `:nth-child(3n+4)`
  - : Representa os elementos de número **4** \[=(3×0)+4], **7** \[=(3×1)+4], **10** \[=(3×2)+4], **13** \[=(3×3)+4], **etc.**
- `:nth-child(-n+3)`
  - : Representa os primeiros três elementos. \[=-0+3, -1+3, -2+3]
- `p:nth-child(n)`
  - : Representa todos os elementos `<p>` em um grupo de irmãos. Isso seleciona os mesmos elementos que um simples seletor `p` faria (só que com um nível maior de especificidade).
- `p:nth-child(1)` or `p:nth-child(0n+1)`
  - : Representa todo `<p>` que seja o primeiro de seu grupo de irmãos. Ele é idêntico ao seletor {{cssxref(":first-child")}} (e tem o mesmo nível de especificidade).
- `p:nth-child(n+8):nth-child(-n+15)`
  - : Representa do 8º até o 15º elementos `<p>` de um grupo de irmãos.

### Exemplo detalhado

#### HTML

```html
<h3>
  <code>span:nth-child(2n+1)</code>, SEM um <code>&lt;em&gt;</code> entre os
  elementos filhos.
</h3>
<p>Os filhos 1, 3, 5 e 7 são selecionados.</p>
<div class="primeiro">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br />

<h3>
  <code>span:nth-child(2n+1)</code>, COM um <code>&lt;em&gt;</code> entre os
  elementos filhos.
</h3>
<p>
  Os filhos 1, 5 e 7 são selecionados.<br />
  O 3 está incluído na contagem por ser um filho, mas não é selecionado porque
  ele não é um <code>&lt;span&gt;</code>.
</p>
<div class="segundo">
  <span>Span!</span>
  <span>Span</span>
  <em>Este é um `em`.</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br />

<h3>
  <code>span:nth-of-type(2n+1)</code>, COM um <code>&lt;em&gt;</code> entre os
  elementos filhos.
</h3>
<p>
  Os filhos 1, 4, 6 e 8 são selecionados.<br />
  O 3 não está incluso na contagem nem é selecionado porque ele é um
  <code>&lt;em&gt;</code>, não um <code>&lt;span&gt;</code>, e
  <code>nth-of-type</code> seleciona apenas os filhos desse último tipo. O
  <code>&lt;em&gt;</code> é completamente pulado e ignorado.
</p>
<div class="terceiro">
  <span>Span!</span>
  <span>Span</span>
  <em>Este é um `em`.</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid green;
  display: inline-block;
  margin-bottom: 3px;
}

.primeiro span:nth-child(2n + 1),
.segundo span:nth-child(2n + 1),
.terceiro span:nth-of-type(2n + 1) {
  background-color: lime;
}
```

#### Resultado

{{ EmbedLiveSample('Exemplo_detalhado', '', 550, '', 'Web/CSS/:nth-child') }}

## Especificações

| Especificação                                                     | Status                      | Comentário                                                                                                                    |
| ----------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#nth-child-pseudo', ':nth-child')}} | {{Spec2('CSS4 Selectors')}} | Adiciona a sintaxe `of <selector>` e especifica que os elementos correspondentes ao seletor não precisam ter um elemento pai. |
| {{SpecName('CSS3 Selectors', '#nth-child-pseudo', ':nth-child')}} | {{Spec2('CSS3 Selectors')}} | Definição inicial.                                                                                                            |

## Compatibilidade com navegadores

{{Compat("css.selectors.nth-child")}}

## Veja também

- {{ Cssxref(":nth-of-type") }}, {{ Cssxref(":nth-last-child") }}
