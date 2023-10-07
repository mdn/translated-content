---
title: "Recipe: Media objects"
slug: Web/CSS/Layout_cookbook/Media_objects
---

{{CSSRef}}

O _Media Object_ (Objeto de Mídia) é um padrão que vemos em toda web. [Nomeado por Nicole Sullivan](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) refere-se a uma caixa de duas colunas com uma imagem de um lado e texto descritivo do outro, por ex. uma postagem no facebook ou tweet.

![](media-object.png)

## Exigências

O Padrão Media Object precisa de algumas ou todas as seguintes características:

- Empilhados no Celular, duas colunas no Computador.
- A imagem pode estar à esquerda ou à direita.
- A imagem pode ser pequena ou grande.
- Media Objects (Objetos de Mídia) podem ser aninhados.
- O Media Object deve limpar o conteúdo, não importando o tamanho.

## A receita

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects.html", '100%', 1200)}}

> **Nota:** [Download this example](https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects--download.html)

## Escolhas feitas

Eu escolhi usar o [Layout de Grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout) para o Media Object (Objeto de Layout), pois ele permite controlar o layout em duas dimensões quando preciso. Isso significa que, quando temos um rodapé, com conteúdo curto acima, o rodapé pode ser empurrado para a parte inferior do Media Object (Objeto de Layout).

Outro motivo para usar o Layout de Gride é para que eu possa usar {{cssxref("fit-content")}} para o tamanho da faixa de imagem. Usando `fit-content` com um tamanho máximo de 200 pixels, quando temos uma imagem pequena como o ícone, a faixa fica tão grande quanto o tamanho dessa imagem — o tamanho `max-content`. Se a imagem for maior, a faixa para de crescer em 200 pixels e, como a imagem possui {{cssxref("max-width ")}} de 100% aplicado, ele diminui para que continue a caber dentro da coluna.

Usando {{cssxref("grid-template-areas")}} para alcançar o layout, eu posso ver o padrão no CSS. Eu defino minha grade quando tivermos uma largura máxima de 500 pixels, em dispositivos menores o Media Object empilha.

Uma opção para o padrão é girá-lo para mudar a imagem para o outro lado — isso é feito adicionando a classe `media-flip`, que define um modelo de grade invertida, fazendo com que o layout seja espelhado.

Quando aninhamos um media object (Objeto de Layout) dentro do outro, precisamons colocá-lo na segunda faixa no layout regular, e na primeira faixa quando invertida.

## Fallbacks (Alternativas, Plano B)

Existem várias alternativas possíveis para esse padrão, dependendo dos navegadores que você deseja oferecer suporte. Um bom exemplo seria flutuar a imagem para a esquerda e adicionar uma correção clara à caixa para garantir que ela contivesse as flutuações.

{{EmbedGHLiveSample("css-examples/css-cookbook/media-objects-fallback.html", '100%', 1200)}}

> **Nota:** [Baixe este exemplo](https://github.com/mdn/css-examples/blob/master/css-cookbook/media-objects-fallback--download.html)

Depois que os elementos flutuantes se tornam itens da grade, o flutuador não se aplica mais; portanto, você não precisa fazer nada de especial para limpá-lo.

O que você precisará fazer é remover as margens aplicadas ao item e as larguras que não precisamos em um contexto de grade (nós temos o {{cssxref("gap")}} propriedade para controlá-lo em grades, e a faixa assume o controle do dimensionamento).

## Recursos relevantes no MDN

- [Layout Grade CSS](/pt-BR/docs/Web/CSS/CSS_Grid_Layout)
- [Aprimoramento progressivo e Layout de Grid](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Usando áreas de modelo de Grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Conteúdo Adequado](/pt-BR/docs/Web/CSS/fit-content)
- [Áreas de Modelo de Grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)

## Compatibilidade com navegadores

Os vários métodos de layout tem suporte diferente para os navegadores. Veja os gráficos abaixo para obter detalhes sobre o suporte básico para as propriedades usadas.

#### Áreas de Modelo de Grade

{{Compat("css.properties.grid-template-areas")}}

#### Flutuador

{{Compat("css.properties.float")}}
