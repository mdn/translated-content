---
title: <display-outside>
slug: Web/CSS/display-outside
---

{{CSSRef}}

O `<display-outside>` as palavras-chave especificam a parte externa do elemento {{CSSxRef("display")}} type, que é essencialmente seu papel no layout de fluxo. Essas palavras-chave são usadas como valores do `display` e pode ser usada para fins legados como uma única palavra-chave ou conforme definido na especificação do Nível 3, juntamente com um valor do {{CSSxRef("&lt;display-inside&gt;")}} palavras-chave.

## Sintaxe

O `<display-outside>` O valor é definido usando uma palavra-chave da lista abaixo:

### Valor

- `block`
  - : O elemento gera uma caixa de elemento de bloco, gerando quebras de linha antes e depois do elemento, quando no fluxo normal.
- `inline`
  - : O elemento gera uma ou mais caixas de elementos embutidos que não geram quebras de linha antes ou depois de si mesmas. No fluxo normal, o próximo elemento estará na mesma linha se houver espaço
- `run-in` {{Experimental_Inline}}

  - : O elemento gera uma caixa de introdução. Se o irmão adjacente do elemento definido como`display: run-in` box é uma caixa de bloco, o `run-in` box se torna a primeira caixa embutida da caixa de bloco a seguir.

    Os elementos de entrada funcionam como linhas ou blocos, dependendo dos elementos circundantes. Ou seja: Se a caixa de introdução contém uma caixa de bloco, o mesmo que bloco. Se uma caixa de bloco segue a caixa de introdução, a caixa de introdução torna-se a primeira caixa embutida da caixa de bloco. Se uma caixa embutida se seguir, a caixa de introdução se tornará uma caixa de bloco.

> **Nota:**: Navegadores que suportam a sintaxe de dois valores, encontrando apenas o valor externo, como quando `display: block` ou `display: inline` especificado, definirá o valor interno como`flow`. Isso resultará no comportamento esperado; por exemplo, se você especificar um elemento a ser bloco, seria de esperar que os filhos desse elemento participassem do layout de fluxo normal em bloco e em linha.

### Sintaxe formal

{{CSSSyntax}}

## Exemplo

No exemplo a seguir, os elementos de extensão (normalmente exibidos como elementos embutidos) são definidos como `display: block` e, assim, divida em novas linhas e expanda para preencher seu contêiner na dimensão embutida.

### HTML

```html
<span>span 1</span> <span>span 2</span>
```

### CSS

```css
span {
  display: block;
  border: 1px solid rebeccapurple;
}
```

### Resultado

{{EmbedLiveSample("Example", 300, 60)}}

## Compatibilidade com navegadores

{{Compat("css.properties.display.display-outside", 10)}}

## Veja também

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Layout de bloco e embutido no fluxo normal](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Contextos de formatação explicados](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Formatting_Contexts_Explained)
