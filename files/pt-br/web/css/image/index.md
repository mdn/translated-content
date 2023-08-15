---
title: <image>
slug: Web/CSS/image
---

{{CSSRef}}

O [tipo de data CSS](/pt-BR/docs/Web/CSS) **`<image>`** representa uma imagem bi-dimensional. Existem dois tipos de imagens: imagens planas, referenciada por um {{cssxref("&lt;url&gt;")}}, e imagens geradas dinamicamente, geradas por {{cssxref("&lt;gradient&gt;")}} ou {{cssxref("element()")}}. Imagens podem ser usadas em inumeras propriedades CSS, como {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("content")}}, {{cssxref("cursor")}}, e {{cssxref("list-style-image")}}.

## Tipos de imagens

CSS pode lidar com os seguintes tipos de imagens:

- Imagens com _dimensões intrínsecas_ (tamanho natural), tipo um JPEG, PNG, ou outro [formato rasterizado](https://en.wikipedia.org/wiki/Raster_graphics).
- Imagens com _multiplas dimensões intrínsecas,_ existente em várias versões dentro de um único arquivo, como alguns formatos .ico. (Nesse caso, a dimensões intrínsecas serão a largura da imagem na área e a proporção mais semelhante à caixa contendo.)
- Imagens sem dimensões intrínsecas mas com um aspecto intrínseco entre a largura e altura, como um SVG ou outro [vetor](https://en.wikipedia.org/wiki/Vector_graphics).
- Imagens com nenhuma dimensões intrínsecas, e nenhuma relação de aspecto intrínseco como um gradiente CSS.

CCS determina um tamanho concreto do objeto usando (1) _suas dimensões intrínsecas;_ (2) _seu tamanho especificado,_ definido por propriedades CSS como {{cssxref("width")}}, {{cssxref("height")}}, ou {{cssxref("background-size")}}; e (3) _é o tamanho padrão,_ determinado pelo tipo de propriedade em que a imagem é usada:

| Tipo de objeto                                                                                                                                 | Tamanho do objeto padrão                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| {{cssxref("background-image")}}                                                                                                                | O tamanho da área de posicionamento do fundo do elemento.                                          |
| {{cssxref("list-style-image")}}                                                                                                                | O tamanho de um carácter `1em`                                                                     |
| {{cssxref("border-image")}}                                                                                                                    | O tamanho da área da imagem da borda do elemento                                                   |
| {{cssxref("cursor")}}                                                                                                                          | O tamanho definido pelo navegador correspondente ao tamanho normal do cursor no sistema do cliente |
| {{cssxref("border-image-source")}}                                                                                                             | ?                                                                                                  |
| {{cssxref("mask-image")}}                                                                                                                      | ?                                                                                                  |
| {{cssxref("shape-outside")}}                                                                                                                   | ?                                                                                                  |
| {{cssxref("mask-border-source")}}                                                                                                              | ?                                                                                                  |
| Substituí o conteúdo, como quando combinando {{cssxref("content")}} com um pseudo-elemento ({{cssxref("::after")}} ou {{cssxref("::before")}}) | Um 300px × 150px retângulo                                                                         |

O tamanho do objeto concreto é calculado usando o seguinte algoritimo:

- Se o tamanho especificado define _tanto a largura quanto a altura,_ esses valores serão usado no tamanho concreto do objeto.
- Se o tamanho especificado define apenas a largura ou a altura, o valor que falta é determind se o valor espeficiado ado usando a relação intrínseca, se existir algum, as dimensões intrínsecas se o valoer espeficicado combinar, ou o tamanho do objeto padrão para esse valor ausente.
- Se o tamanho especificado define nem largura ou altura, o tamanho concreto é calculado de modo que corresponda à proporção intrínseca da imagem mas sem exceder o tamanho padrão do objeto em qualquer dimensão. Se a imagem não tiver relação de aspecto intrínseco, o relação de aspecto intrínseco do objeto é aplicado para ser usado; se esse objeto for vazio, a largura ou altura que faltam são retirados do tamanho de objeto padrão.

> **Nota:** Não são todos os navegadores que suportam cada tipo de imagem em cada propriedade. Veja a seção [compatibilidade dos navegadores](/pt-BR/docs/Web/CSS/image#Browser_compatibility) para mais detalhes.

## Sintaxe

O tipo de data `<image>` pode ser representado por qualquer item seguinte:

- Uma imagem denotada pelo tipo de data {{cssxref("&lt;url&gt;")}}
- Um tipo de data {{cssxref("&lt;gradient&gt;")}}
- Uma parte da página web, definida pela função {{cssxref("element", "element()")}}

## Exemplos

### Imagens válidas

```
url(test.jpg)               /* Uma <url>, enquanto test.jpg é uma imagem real */
linear-gradient(blue, red)  /* Um <gradient> */
element(#realid)            /* Uma parte da página web, referenciada por uma função element() se "realid" for um ID existente na página */
```

### Imagens inválidas

```plain example-bad
cervin.jpg        /* Um arquivo imagem deve ser definido usando a função url(). */
url(report.pdf)   /* Um arquivo apontado pela função url() deve ser uma imagem. */
element(#fakeid)  /* Um elemento ID deve ser um ID existente na página. */
```

## Especificações

| Especificações                                                 | Status                   | Comentário                                                                                                                                                                |
| -------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Images', '#typedef-image', '&lt;image&gt;')}} | {{Spec2('CSS4 Images')}} | Adiciona {{cssxref("element()")}}, {{cssxref("image()")}}, {{cssxref("conic-gradient()")}}, {{cssxref("repeating-conic-gradient()")}}, e {{cssxref("image-resolution")}}. |
| {{SpecName('CSS3 Images', '#typedef-image', '&lt;image&gt;')}} | {{Spec2('CSS3 Images')}} | Definição inicial. Depois disso, não existe definição explicita do tipo de data `<image>`. Imagens podem ser somente definidas usando a notação funciona `url()` .        |

## Compatibilidade do navegador

{{Compat("css.types.image")}}

## Veja também

- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("element()")}}
