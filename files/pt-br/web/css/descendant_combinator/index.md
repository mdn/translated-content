---
title: Descendant combinator
slug: Web/CSS/Descendant_combinator
---

{{CSSRef("Selectors")}}

O **combinador descendente** - normalmente representado por um caractere de espaço simples (" ") - combina dois seletores para que os elementos correspondidos pelo segundo seletor sejam selecionados se eles tiverem um elemento ancestral (pai, pai ou mãe, pai ou mãe, etc.) correspondente ao primeiro seletor. Os seletores que utilizam um combinador descendente são chamados de seletores descendentes.

```css
/* Listar itens descendentes da lista "my-things" */
ul.my-things li {
  margin: 2em;
}
```

O combinador descendente é tecnicamente um ou mais caracteres de espaço em branco do {{Glossary ("CSS")}} - o caractere de espaço e/ou um dos quatro caracteres de controle: retorno de carro (carriage return), Quebra de página ( form feed), nova linha e caracteres de tabulação — entre dois seletores na ausência de outro combinador. Além disso, os caracteres de espaço em branco dos quais o combinador é composto podem conter qualquer número de comentários CSS.

## Sintaxe

```
selector1 selector2 {
  /*  declarações de propriedade  */
}
```

## Exemplo

### CSS

```css
li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
```

### HTML

```html
<ul>
  <li>
    <div>Item 1</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
  <li>
    <div>Item 2</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
</ul>
```

### Resultado

{{EmbedLiveSample("Example", "100%", 160)}}

## Especificações

| Especificação                                                                        | Status                      | Comment            |
| ------------------------------------------------------------------------------------ | --------------------------- | ------------------ |
| {{SpecName("CSS4 Selectors", "#descendant-combinators", "descendant combinator")}}   | {{Spec2("CSS4 Selectors")}} |                    |
| {{SpecName("CSS3 Selectors", "#descendant-combinators", "descendant combinator")}}   | {{Spec2("CSS3 Selectors")}} |                    |
| {{SpecName("CSS2.1", "selector.html#descendant-selectors", "descendant selectors")}} | {{Spec2("CSS2.1")}}         |                    |
| {{SpecName("CSS1", "#contextual-selectors", "contextual selectors")}}                | {{Spec2("CSS1")}}           | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.selectors.descendant")}}

## Veja também

- [Child combinator](/pt-BR/docs/Web/CSS/Child_combinator)
