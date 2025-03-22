---
title: :not()
slug: Web/CSS/:not
---

{{ CSSRef() }}

## Resumo

A [pseudo-classe CSS](/pt-BR/docs/Web/CSS/Pseudo-classes) de **negação**, `:not(X)`, é uma notação funcional que recebe um seletor simples X como argumento. Ela seleciona um elemento que não é representado por seu argumento. _X_ não pode conter outro seletor de negação.

> [!NOTE]
> Seletores inúteis podem ser escritos usando esta pseudo-classe. Por exemplo, `:not(*)` seleciona qualquer elemento que não é algum elemento, então a regra nunca é aplicada.
>
> - É possível sobreescrever outras regras. E.g. `foo:not(bar)` vai selecionar os mesmos elementos do que o mais simples foo. No entanto a [especificação](/pt-BR/docs/Web/CSS/CSS_cascade/Specificity) é maior no exemplo com `:not`.
> - `:not(foo){} vai selecionar tudo que não for foo`, **incluindo os elementos {{HTMLElement("html")}} e {{HTMLElement("body")}}.**
> - Este seletor apenas se aplica a um elemento; não se pode usa-lo para excluir todos os seus ancestores. Por exemplo, `body :not(table) a` ainda vai ser aplicado a links dentro de tabelas, já que {{HTMLElement("tr")}} vai ser selecionado pelo `:not()` do seletor.

## Sintaxe

```
:not(selector) { style properties }
```

## Exemplos

```css
p:not(.classico) {
  color: red;
}
body *:not(p) {
  color: green;
}
```

Dado o CSS acima e o HTML abaixo...

```html
<p>Um pouco de texto.</p>
<p class="classico">Um pouco mais de texto.</p>
<span>Mais um texto</span>
```

Se obtém resultados como este:

{{ EmbedLiveSample('Exemplos', '', '', '', 'Web/CSS/:not') }}

## Especificações

{{Specifications}}

## Compatibilidade em Navegadores

{{Compat}}
