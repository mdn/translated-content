---
title: General sibling selectors
slug: Web/CSS/Subsequent-sibling_combinator
---

{{CSSRef}}

## Resumo

O **combinador geral de irmãos** (\~) separa dois seletores e corresponde ao segundo elemento somente se ele for precedido pelo primeiro, e ambos compartilham um pai comum.

## Sintaxe

```
elemento_anterior ~ elemento_alvo { propriedades de estilo }
```

## Exemplo

```css
p ~ span {
  color: red;
}
```

```html
<span>Este não é vermelho.</span>
<p>Aqui temos um parágrafo.</p>
<code>Aqui temos um pouco de código.</code>
<span>E aqui há um span vermelho!</span>
<code>Mais código...</code>
<span>E este também é um span vermelho!</span>
```

{{ EmbedLiveSample('Example', 280, 120) }}

## Especificações

{{Specifications}}

## Navegadores compatíveis

{{Compat}}

## Veja mais

- [Adjacent sibling selectors](/pt-BR/docs/Web/CSS/Next-sibling_combinator)
