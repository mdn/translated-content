---
title: CSS layout
slug: Learn/CSS/CSS_layout
---

{{LearnSidebar}}

Neste ponto, vimos os fundamentos do CSS, como estilizar o texto e como estilizar e manipular as caixas dentro das quais seu conteúdo se encontra. Agora é hora de ver como organizar corretamente suas caixas em relação à viewport, bem como umas às outras. Cobrimos os pré-requisitos necessários, então vamos nos aprofundar no layout CSS, examinando vários recursos como: diferentes configurações de exibição, posicionamento, ferramentas de layout modernas como flexbox e grade CSS e algumas das técnicas herdadas que você ainda pode querer saber. cerca de.

> [!CALLOUT]
>
> #### Quer se tornar um desenvolvedor web front-end?
>
> Reunimos um curso que inclui todas as informações essenciais que você precisa para
> trabalhe em direção ao seu objetivo.
>
> [**Primeiros passos**](/pt-BR/docs/orphaned/Learn/Front-end_web_developer)

## Pré-requisitos

Antes de iniciar este módulo, você já deve:

1. Ter familiaridade básica com HTML, conforme discutido no módulo [Introdução ao HTML](/pt-BR/docs/Learn/HTML/Introduction_to_HTML).
2. Esteja familiarizado com os fundamentos do CSS, conforme discutido em [Introdução ao CSS](/pt-BR/docs/Learn/CSS/First_steps).
3. Entenda como [estilizar caixas](/pt-BR/docs/Learn/CSS/Building_blocks).

> [!NOTE]
> Se você estiver trabalhando em um computador/tablet/outro dispositivo em que não tenha a capacidade de criar seus próprios arquivos, experimente (a maioria) os exemplos de código em um programa de codificação on-line, como como [JSBin](https://jsbin.com/) ou [Glitch](https://glitch.com/).

## Guias

Esses artigos fornecerão instruções sobre as ferramentas e técnicas de layout fundamentais disponíveis em CSS. No final das lições, há uma avaliação para ajudá-lo a verificar sua compreensão dos métodos de layout ao criar uma página da web.

- [Introdução ao layout CSS](/pt-BR/docs/Learn/CSS/CSS_layout/Introduction)
  - : Este artigo irá recapitular alguns dos recursos de layout CSS que já abordamos em módulos anteriores — como valores {{cssxref("display")}} diferentes — e apresentar alguns dos conceitos que abordaremos ao longo deste módulo.
- [Fluxo normal](/pt-BR/docs/Learn/CSS/CSS_layout/Normal_Flow)
  - : Os elementos nas páginas da Web se apresentam de acordo com o _fluxo normal_ - até que façamos algo para mudar isso. Este artigo explica os fundamentos do fluxo normal como base para aprender como alterá-lo.
- [Flexbox](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox)
  - : [Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox) é um método de layout unidimensional para dispor itens em linhas ou colunas. Os itens se flexionam para preencher espaço adicional e encolhem para caber em espaços menores. Este artigo explica todos os fundamentos. Depois de estudar este guia, você pode [testar suas habilidades em flexbox](/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox_skills) para verificar sua compreensão antes de prosseguir.
- [Grids](/pt-BR/docs/Learn/CSS/CSS_layout/Grids)
  - : CSS Grid Layout é um sistema de layout bidimensional para a web. Ele permite que você organize o conteúdo em linhas e colunas e tem muitos recursos que facilitam a criação de layouts complexos. Este artigo fornecerá tudo o que você precisa saber para começar com o layout de página e [testar suas habilidades de grade](/pt-BR/docs/Learn/CSS/CSS_layout/Grid_skills) antes de prosseguir.
- [Floats](/pt-BR/docs/Learn/CSS/CSS_layout/Floats)
  - : Originalmente para imagens flutuantes dentro de blocos de texto, a propriedade {{cssxref("float")}} tornou-se uma das ferramentas mais usadas para criar layouts de múltiplas colunas em páginas da web. Com o advento do Flexbox e do Grid, ele voltou ao seu propósito original, como explica este artigo.
- [Posicionamento](/pt-BR/docs/Learn/CSS/CSS_layout/Positioning)
  - : O posicionamento permite retirar elementos do fluxo normal do layout do documento e fazer com que se comportem de maneira diferente, por exemplo, posicionando-se uns sobre os outros ou permanecendo sempre no mesmo lugar dentro da janela de visualização do navegador. Este artigo explica os diferentes valores {{cssxref("position")}} e como usá-los.
- [Layout de várias colunas](/pt-BR/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
  - : A especificação de layout de várias colunas fornece um método de disposição de conteúdo em colunas, como você pode ver em um jornal. Este artigo explica como usar esse recurso.
- [Design responsivo](/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design)
  - : À medida que tamanhos de tela mais diversos apareceram em dispositivos habilitados para a Web, surgiu o conceito de web design responsivo (RWD): um conjunto de práticas que permite que as páginas da Web alterem seu layout e aparência para se adequar a diferentes larguras de tela, resoluções etc. É uma ideia que mudou a forma como projetamos para uma web multidispositivo, e neste artigo vamos te ajudar a entender as principais técnicas que você precisa saber para dominá-la.
- [Guia do iniciante para consultas de mídia](/pt-BR/docs/Learn/CSS/CSS_layout/Media_queries)
  - : A **CSS Media Query** oferece uma maneira de aplicar CSS somente quando o navegador e o ambiente do dispositivo correspondem a uma regra que você especifica, por exemplo, "a janela de visualização é maior que 480 pixels". Consultas de mídia são uma parte fundamental do web design responsivo porque permitem criar diferentes layouts dependendo do tamanho da viewport. Eles também podem ser usados para detectar outros recursos do ambiente em que seu site está sendo executado, por exemplo, se o usuário está usando uma tela sensível ao toque em vez de um mouse. Nesta lição, você aprenderá primeiro sobre a sintaxe usada em consultas de mídia e, em seguida, as usará em um exemplo interativo que mostra como um design simples pode se tornar responsivo.
- [Métodos de layout legados](/pt-BR/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
  - : Os sistemas de grade são um recurso muito comum usado em layouts CSS. Antes do **CSS Grid Layout**, eles tendiam a ser implementados usando flutuadores ou outros recursos de layout. Você primeiro imaginaria seu layout como um número definido de colunas (por exemplo, 4, 6 ou 12) e, em seguida, ajustaria suas colunas de conteúdo dentro dessas colunas imaginárias. Neste artigo, exploraremos como esses métodos antigos funcionam para que você entenda como eles eram usados se você trabalhasse em um projeto antigo.
- [Suporte a navegadores mais antigos](/pt-BR/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
  - : Neste módulo, recomendamos o uso de Flexbox e Grid como os principais métodos de layout para seus projetos. No entanto, é provável que haja visitantes de um site que você desenvolver no futuro que usem navegadores mais antigos ou navegadores que não suportam os métodos que você usou. Esse sempre será o caso na web — à medida que novos recursos são desenvolvidos, diferentes navegadores priorizarão diferentes recursos. Este artigo explica como usar técnicas modernas da Web sem excluir usuários de tecnologia mais antiga.

## Avaliações

A avaliação a seguir testará sua compreensão dos métodos de layout CSS abordados nos guias acima.

- [Compreensão fundamental do layout](/pt-BR/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
  - : Uma avaliação para testar seus conhecimentos sobre diferentes métodos de layout ao criar uma página da web.

## Veja também

- [Exemplos de posicionamento prático](/pt-BR/docs/Learn/CSS/CSS_layout/Practical_positioning_examples)
  - : Este artigo mostra como construir alguns exemplos do mundo real para ilustrar que tipos de coisas você pode fazer com o posicionamento.
- [livro de receitas de layout CSS](/pt-BR/docs/Web/CSS/Layout_cookbook)
  - : O livro de receitas de layout CSS visa reunir receitas para padrões de layout comuns, coisas que você pode precisar implementar em seus sites. Além de fornecer o código que você pode usar como ponto de partida em seus projetos, essas receitas destacam as diferentes maneiras pelas quais as especificações de layout podem ser usadas e as escolhas que você pode fazer como desenvolvedor.k
