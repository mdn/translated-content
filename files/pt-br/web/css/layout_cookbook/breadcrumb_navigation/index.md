---
title: Navegação "Migalha de Pão"
slug: Web/CSS/Layout_cookbook/Breadcrumb_Navigation
---

{{CSSRef}}

A navegação "migalha de pão" ajuda o usuário a enteder sua localização no site, fornecendo uma trilha de navegação de volta à pagina inicial.

![Links displayed inline with separators](breadcrumb-navigation.png)

## Exigências

Os itens tipicamente são exibidos em linha com um separador para indicar uma hierarquia entre páginas individuais.

## Receita

{{EmbedGHLiveSample("css-examples/css-cookbook/breadcrumb-navigation.html", '100%', 530)}}

> **Nota:** [Baixe esse exemplo](https://github.com/mdn/css-examples/blob/master/css-cookbook/breadcrumb-navigation--download.html)

## Faça escolhas

Esse padrão é apresentado usando um layout flexível simples demonstrando como uma linha de CSS pode nos fornecer nossa navegação. Os separadores são adicionados usando o conteúdo gerado por CSS. Você pode alterá-las para qualquer separador que desejar.

## Preocupações com acessibilidade

Eu utilizei os atributos `aria-label` e `aria-current` para ajudar os usuários a entender o que é essa navegação e onde a página atual está na estrutura. Veja os links relacionados para mais informações.

## Compatibilidade com navegadores

Os vários métodos de layout têm diferente suporte para o navegador. Veja os gráficos abaixo para obter detalhes sobre o suporte básico para as propriedades usadas.

#### Flexbox

{{Compat}}

## Veja também

- [CSS Flexible Box Layout](/pt-BR/docs/Web/CSS/CSS_flexible_box_layout)
- [Fornecendo uma trilha de "migalha de pão"](https://www.w3.org/TR/WCAG20-TECHS/G65.html)
- [Usando o atributo aria-current](https://tink.uk/using-the-aria-current-attribute/)
