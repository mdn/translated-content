---
title: float
slug: Web/CSS/float
---

{{CSSRef}}

## Resumo

A propriedade **float** do CSS determina que um elemento deve ser retirado do seu fluxo normal e colocado ao longo do lado direito ou esquerdo do seu containêr, onde textos e elementos em linha irão se posicionar ao seu redor.

Um elemento flutuante é um tipo de elemento cujo valor de `float` é diferente de `none.`

{{cssinfo}}

Como `float` implica o uso the _block layout,_ ele modifica o valor computado de {{cssxref("display")}} em alguns casos:

| Valor Especificado   | Valor Computado                                                  |
| -------------------- | ---------------------------------------------------------------- |
| `inline`             | `block`                                                          |
| `inline-block`       | `block`                                                          |
| `inline-table`       | `table`                                                          |
| `table-row`          | `block`                                                          |
| `table-row-group`    | `block`                                                          |
| `table-column`       | `block`                                                          |
| `table-column-group` | `block`                                                          |
| `table-cell`         | `block`                                                          |
| `table-caption`      | `block`                                                          |
| `table-header-group` | `block`                                                          |
| `table-footer-group` | `block`                                                          |
| `flex`               | `flex`, porém `float` não produz efeito em tais elementos        |
| `inline-flex`        | `inline-flex`, porém `float` não produz efeito em tais elementos |
| _other_              | _unchanged_                                                      |

> **Nota:** Se você está se referindo a essa propriedade do Javascript como um membro do objeto {{domxref("element.style")}}, você deve referir-se a `cssFloat`. Observe também que as versões 8 e posteriores referem-se a `styleFloat`. Esta é uma exceção à regra de que o nome do membro DOM é o nome em estilo _camel-case_ do nome CSS separado por traço (e se deve ao fato de que "float" é uma palavra reservada em Javascript, tal qual a necessidade de especificar "class" como "className" e "for" como "htmlFor").

## Sintaxe

```css
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Global values */
float: inherit;
float: initial;
float: unset;
```

### Valores

- `left`
  - : É uma palavra-chave que indica que o elemento deve flutuar à esquerda do bloco.
- `right`
  - : É uma palavra-chave que indica que o elemento deve flutuar à direita do bloco.
- `none`
  - : É uma palavra-chave que indica que o elemtno não deve flutuar.
- `inline-start` {{experimental_inline}}
  - : É uma palavra-chave que indica que o elemento deve flutuar no lado inicial do seu bloco, ou seja, o lado esquerdo em scripts `ltr` e no direito em scripts `rtl`.
- `inline-end` {{experimental_inline}}
  - : É uma palavra-chave que indica que o elemento deve flutuar no lado final do seu bloco, ou seja, o lado direito em scripts `ltr` e no esquerdo em scripts `rtl`.

### Sintaxe Formal

{{csssyntax}}

## Exemplos

### CSS

```css
div {
  border: solid red;
  max-width: 70ex;
}
h4 {
  float: left;
  margin: 0;
}
```

### HTML

```html
<div>
  <h4>HELLO!</h4>
  This is some text. This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text. This is some text.
</div>
```

{{ EmbedLiveSample('Exemplos', '', '', '', 'Web/CSS/float') }}

### Como `floats` são posicionados

Como mencionado acima, quando um elemento é flutuado ele é retirado do seu fluxo normal no documento. Ele é reposicionado à esquerda ou à direita até tocar a borda do seu próprio _box_ ou outro elemento flutuante.

Na imagem abaixo, existem 3 quadrados vermelho. Dois flutuando à esquerda e um flutuando à direita. Observe que o segundo quadrado vermelho à esquerda é posicionado à direita do primeiro. Quadrados adicionais poderiam continuar sendo empilhados à direita até que eles completassem o box, após isso eles iriam para próxima linha.

![](/@api/deki/files/4927/=floats.png)

### Limpando _floats_

No exemplo abaixo, os elementos flutuantes são menores verticalmente que o bloco de texto com os quais estão flutuando. Apesar disso, se o texto não fosse comprido o bastante para passar abaixo do limite inferior de todos os _floats,_ nos veríamos efeitos não previstos. Se o parágrafo abaixo, por enquanto, somente lê "Lorem ipsum dolor sit amet,", e fosse seguido por outro cabeçalho do mesmo estilo de cabeçaljo "Floats Example", o segundo cabeçalho iria aparecer entre os dois _boxes_ vermelhos. Muito provavelmente, queremos que o próximo título seja alinhado à esquerda. Para conseguir isso, precisamos limpar os _floats_.

O jeito mais simples de limpar os floats neste exemplo é adicionar a propriedade {{Cssxref("clear")}} para o próximo cabeçalho que queremos assegurar que esteja alinhado à esquerda.

```css
h2.secondHeading {
  clear: both;
}
```

Porém, este método apenas funciona se não existirem outros elementos com o mesmo [block formatting context](/pt-BR/docs/Web/CSS/block_formatting_context) aos quais nós queiramos que o cabeçalho continue aparecendo ao lado horizontalmente. Se o nosso `H2` possui irmãos os quais são barras laterais flutuadas à esquerda e à direita, usar `clear` irá forçá-lo a aparecer abaixo das duas barras laterais, o que provavelmente não é o que queríamos.

Se limpar `floats` em um elemento não é uma opção, uma outra abordagem é limitar o contexto de formatação do bloco do containêr flutuante. Referindo-se ao exemplo acima novamente, aparentemente todos os três quadrados vermelhos possuem um elemento paragrafo `P` . Nós podemos atribuir a propiedade {{Cssxref("overflow")}} neste paragrafo para `hidden` ou `auto` para obrigá-lo a expandir para contê-los, porém não permitirá que os mesmos parágrafos pulem fora do limite inferior.

```css
p.withRedBoxes {
  overflow: hidden;
  height: auto;
}
```

> **Nota:** Atribuir `overflow` para `scroll` irá conter também qualquer elemento filho flutuante, mas mostrará as barras de rolagem não importando o comprimento vertical do elemento. Aqui nós estamos atribuindo `height` como `auto` mesmo sendo este o padrão para indicar que o containêr deve crescer para acomodar seu conteúdo.

## Especificações

| Especificação                                                             | Situação                            | Comentário                                                                                                                                                           |
| ------------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#float-clear', 'float and clear')}} | {{Spec2('CSS Logical Properties')}} | Adiciona os valores `inline-start` e `inline-end`.                                                                                                                   |
| {{SpecName('CSS3 Box', '#float', 'float')}}                               | {{Spec2('CSS3 Box')}}               | Muitos valores novos, nem todos claramente definidos ainda. Qualquer diferença em comportamento não relacionado a novas funções são involutárias; por favor informe. |
| {{SpecName('CSS2.1', 'visuren.html#float-position', 'float')}}            | {{Spec2('CSS2.1')}}                 | Sem mudanças                                                                                                                                                         |
| {{SpecName('CSS1', '#float', 'float')}}                                   | {{Spec2('CSS1')}}                   | Definição inicial                                                                                                                                                    |

## Compatibilidade com navegadores

{{Compat("css.properties.float")}}

## Veja também

- [Block formatting context](/pt-BR/docs/Web/CSS/block_formatting_context)
