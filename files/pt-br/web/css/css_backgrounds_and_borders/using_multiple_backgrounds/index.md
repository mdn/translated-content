---
title: Multiple backgrounds
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
---

{{CSSRef}}

Com [CSS3](/pt-BR/CSS/CSS3), você pode aplicar aos elementos multiplos planos de fundo. Estes ficam em camadas empilhadas uma acima da outra onde o o primeiro fundo dado será desenhado no topo e apenas o último fundo da lista poderá definir uma cor sólida de fundo.

Especificar planos de fundo múltplos é fácil:

```css
.minhaClasse {
  background: fundo1, fundo2, ..., fundoN;
}
```

Você pode fazer isso com a propriedade reduzida {{ cssxref("background") }} e também com as propriedade individuais, com a excessão de {{ cssxref("background-color") }}. Isto é, as seguintes propriedades de plano de fundo podem ser especificadas com uma lista, uma por fundo: {{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }}.

## Exemplo

Neste exemplo, três planos de fundos estão empilhados: o logo do Firefox, um degradê linear, e uma imagem com flores:

```css
.multi_bg_example {
  background:
    url(http://demos.hacks.mozilla.org/openweb/resources/images/logos/firefox-48.png),
    -moz-linear-gradient(left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
    url(http://demos.hacks.mozilla.org/openweb/resources/images/patterns/flowers-pattern.jpg);
  background-repeat: no-repeat, no-repeat, repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

| Captura de Tela                                            | Demonstração |
| ---------------------------------------------------------- | ------------ |
| ![css_multibg.png](/@api/deki/files/4028/=css_multibg.png) |              |

Como pode ver, o logo do firefox (listado primeiro) está no topo, seguido do gradiente que está uma camada acima do fundo florido. Cada uma das sub-propriedade subsequente, ({{ cssxref("background-repeat") }} e {{ cssxref("background-position") }}) se aplicam aos fundos correspondentes. Então o primeiro valor para {{ cssxref("background-repeat") }} se aplica ao primeiro plano de fundo (o mais da frente), e assim por adiante.

## Veja também

- [Usando degradês](/pt-BR/CSS/Using_CSS_gradients)
