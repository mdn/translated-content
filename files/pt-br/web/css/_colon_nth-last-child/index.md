---
title: ":nth-last-child()"
slug: Web/CSS/:nth-last-child
---

{{CSSRef}}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) **`:nth-last-child()`** seleciona um ou mais elementos com base em sua posição entre um grupo de elementos-irmãos, contando a partir do último.

```css
/* Seleciona todo quarto elemento
   em qualquer grupo de irmãos,
   contando do último para o primeiro */
:nth-last-child(4n) {
  color: lime;
}
```

> **Nota:** Essa pseudo-classe é essencialmente o mesmo que usar {{Cssxref(":nth-child")}}, porém conta os itens de trás para a frente, e não do início para o final.

## Sintaxe

A pseudo-classe `nth-last-child` é especificada com um único argumento, que representa o padrão para elementos correspondentes, contando do final.

### Valores chave

- `odd`
  - : Representa elementos cuja posição numérica em uma série de irmãos é ímpar: 1, 3, 5, etc., contando do final.
- `even`
  - : Representa elementos cuja posição numérica em uma série de irmãos é par: 2, 4, 6, etc., contando do final.

### Notação funcional

- `<An+B>`
  - : Representa elementos cuja posição numérica em uma série de irmãos corresponde ao padrão `An+B`, para cada valor de `n` que seja um número inteiro positivo ou zero. O índice do primeiro elemento, contando do final, é `1`. Os valores `A` e `B` devem ambos ser {{cssxref("&lt;integer&gt;")}}s (inteiros).

### Sintaxe formal

{{csssyntax}}

## Exemplos

### Seletores de exemplo

- `tr:nth-last-child(odd)` ou `tr:nth-last-child(2n+1)`
  - : Representa as linhas ímpares de uma tabela HTML: 1, 3, 5, etc., contando do final.
- `tr:nth-last-child(even)` ou `tr:nth-last-child(2n)`
  - : Representa as linhas pares de uma tabela HTML: 2, 4, 6, etc., contando do final.
- `:nth-last-child(7)`
  - : Representa o sétimo elemento, contando do final.
- `:nth-last-child(5n)`
  - : Representa elementos 5, 10, 15, etc., contando do final.
- `:nth-last-child(3n+4)`
  - : Representa elementos 4, 7, 10, 13, etc., contando do final.
- `:nth-last-child(-n+3)`
  - : Representa os últimos três elementos em um grupo de irmãos.
- `p:nth-last-child(n)`
  - : Representa cada elemento `<p>` em um grupo de irmãos. Isso é o mesmo que um simples seletor `p`.
- `p:nth-last-child(1)` ou `p:nth-last-child(0n+1)`
  - : Representa cada `<p>` que seja o primeiro elemento em um grupo de irmãos, contando do final. Isso é o mesmo que o seletor {{cssxref(":last-child")}}.

### Exemplo de tabela

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Primeira linha</td>
    </tr>
    <tr>
      <td>Segunda linha</td>
    </tr>
    <tr>
      <td>Terceira linha</td>
    </tr>
    <tr>
      <td>Quarta linha</td>
    </tr>
    <tr>
      <td>Quinta linha</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border: 1px solid blue;
}

/* Seleciona os últimos três elementos */
tr:nth-last-child(-n + 3) {
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample('Table_example', 300, 150)}}

## Especificações

| Especificação                                                               | Status                      | Comentário                                                  |
| --------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#nth-last-child-pseudo', ':nth-last-child')}} | {{Spec2('CSS4 Selectors')}} | Elementos correspondentes não precisam ter um elemento-pai. |
| {{SpecName('CSS3 Selectors', '#nth-last-child-pseudo', ':nth-last-child')}} | {{Spec2('CSS3 Selectors')}} | Definição inicial.                                          |

## Compatibilidade com navegadores

{{Compat("css.selectors.nth-last-child")}}

## Ver também

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
