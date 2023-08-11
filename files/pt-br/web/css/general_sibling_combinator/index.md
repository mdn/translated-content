---
title: General sibling selectors
slug: Web/CSS/General_sibling_combinator
---

{{CSSRef("Selectors")}}

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

| Specification                                                                                    | Status                      | Comment                                         |
| ------------------------------------------------------------------------------------------------ | --------------------------- | ----------------------------------------------- |
| {{ SpecName('CSS4 Selectors', '#general-sibling-combinators', 'following-sibling combinator') }} | {{Spec2('CSS4 Selectors')}} | Renomeia o combinador como "irmão subsequente". |
| {{ SpecName('CSS3 Selectors', '#general-sibling-combinators', 'general sibling combinator') }}   | {{Spec2('CSS3 Selectors')}} | Definição inicial.                              |

## Navegadores compatíveis

{{Compat("css.selectors.general_sibling")}}

## Veja mais

- [Adjacent sibling selectors](/pt-BR/docs/Web/CSS/Adjacent_sibling_selectors)
