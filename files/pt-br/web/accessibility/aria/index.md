---
title: ARIA
slug: Web/Accessibility/ARIA
---

Aplicações para a Internet Ricas em Acessibilidade - Accessible Rich Internet Applications (ARIA) definem as formas de tornar o conteúdo e as aplicações da Rede Mundial - _Web_ - (especialmente aqueles desenvolvidos com Ajax e JavaScript) mais acessíveis às pessoas com deficiência.

Por exemplo, a ARIA permite a marcação de regiões importantes na página (como uma caixa de busca, um cabeçalho, chamadas "pontos de referência") para facilitar a navegação (agilizam a utilização de leitores de tela, por exemplo), JavaScript para _widgets_, sugestões de preenchimento de formulário e mensagens de erro, atualizações de conteúdo em tempo real e muito mais.

O ARIA é um conjunto de atributos especiais para a acessibilidade, que pode ser adicionado a qualquer linguagem marcação, mas é especialmente adequado para HTML. O atributo da função define qual é o modelo de objeto (tais como um artigo, um alerta, ou algo que deslize). Há atributos adicionais ARIA que fornecem outras propriedades úteis, como a descrição de uma forma, ou o valor atual em uma barra de progresso.

O conjunto ARIA pode ser implementado nos navegadores mais populares e em leitores de tela. No entanto, as implementações variam e as tecnologias mais antigas não as suportam bem. Utilize um ARIA compatível, ou solicite a alguém que o atualize para as tecnologias mais recentes.

> **Nota:** Por favor, participe e torne o ARIA melhor para as pessoas! Não tem muito tempo? Envie sugestões para [acessibilidade](https://lists.mozilla.org/listinfo/accessibility) [- lista de correspondência da Mozilla](https://lists.mozilla.org/listinfo/accessibility), ou #_accessibility_ [canal IRC](https://wiki.mozilla.org/IRC)_._

### Começando em ARIA

- [Apresentando ARIA](/pt-BR/docs/Accessibility/An_overview_of_accessible_web_applications_and_widgets)
  - : Uma rápida introdução sobre como tornar um conteúdo dinâmico acessível com ARIA: Veja, também, o clássico [ARIA intro by Gez Lemon](http://dev.opera.com/articles/view/introduction-to-wai-aria/), de 2008.
- [Aplicações _Web_ e ARIA FAQ](/pt-BR/docs/Accessibility/ARIA/Web_applications_and_ARIA_FAQ)
  - : Respostas às perguntas frequentes sobre WAI-ARIA e sobre por que é necessário tornar as aplicações _web_ acessíveis.
- [Vídeos de Leitores de Tela Utilizando ARIA](http://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/)
  - : Veja exemplos reais e simplificados de vídeos, por toda a _web_, que incluem o "antes" e o "depois" da acessibilidade.
- [Usando ARIA com HTML](http://dvcs.w3.org/hg/aria-unofficial/raw-file/tip/index.html)
  - : Um guia prático para desenvolvedores. Traz sugestões sobre quais atributos ARIA usar com os elementos HTML. As sugestões são baseadas em realidades implementadas.

### Melhorias Simples ARIA

- [Melhorando a Navegação nas Páginas com os Pontos de Referência ARIA](http://www.paciellogroup.com/blog/2010/10/using-wai-aria-landmark-roles/)
  - : Uma deliciosa introdução à utilização de pontos de referência para beneficiar a navegação pelas páginas da internete por quem utiliza os leitores de tela ARIA. [Veja, também, as notas da implementação de pontos de referência ARIA](http://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/) [](http://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/)e exemplos de situações reais (atualizadas a partir de 11 de julho).
- [Melhorando a Acessibilidade nos Formulários](/pt-BR/docs/ARIA/forms)
  - : O conjunto ARIA não é, apenas, para conteúdo dinâmico! Aprenda como aperfeiçoar a acessibilidade nos formulários HTML utilizando alguns atributos adicionais ARIA.
- [Regiões dinâmicas (trabalho em progresso)](/pt-BR/docs/Accessibility/ARIA/ARIA_Live_Regions)
  - : As regiões dinâmicas oferecem sugestões, aos leitores de tela, sobre como controlar as alterações nos conteúdos das páginas.
- [Utilizando a ARIA Regiões Dinâmicas para Apresentar as Alterações no Conteúdo](http://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm)
  - : Um resumo sobre as regiões dinâmicas, pelos criadores do programa de leitura de tela JAWS. Note que as regiões dinâmicas também são suportadas pela NVDA, no Firefox e VoiceOver, com Safari.

### ARIA para _Widgets_ Roteirizados

- [Navegação pelo Teclado e Foco para _Widgets_ em JavaScript](/pt-BR/docs/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : A primeira etapa do desenvolvimento de um _widget_ acessível com JavaScript é tornà-lo navegável através do teclado. Este artigo descreve as fases dessa operação. O [artigo Yahoo! Administrando focos](http://www.yuiblog.com/blog/2009/02/23/managing-focus/) também é de grande ajuda.
- [Guia de Estilo para Navegação através do Teclado](http://access.aol.com/dhtml-style-guide-working-group/)
  - : Um desafio em ARIA é conseguir que os desenvolvedores executem procedimentos estáveis - claramente melhores para quem os utiliza. Este guia de estilos descreve a interface de teclado para os _widgets_ comuns.

### Recursos ARIA

- [A Técnica na Execução de _Widgets_, Tutoriais e Exemplos](/pt-BR/docs/Accessibility/ARIA/widgets/overview)
  - : Precisa de um controle dezlizante, um menu, ou algum outro tipo de _widget_? Encontre, aqui, as maneiras de obtê-los.
- [Bibliotecas JavaScript UI com ARIA habilitada](http://www.paciellogroup.com/blog/2009/07/wai-aria-implementation-in-javascript-ui-libraries/)
  - : Se você está começando um projeto novo, escolha uma biblioteca UI para _widget_ com suporte a ARIA já embutido. Atenção: isto é de 2009 — este conteúdo deve ser movido para uma página MDN, onde pode ser atualizado.
- [Acessibilidade em HTML5 e Aplicações Ricas - Materiais de Oficina CSUN 2012](http://dl.dropbox.com/u/573324/CSUN2012/index.html)
  - : Inclua apresentações de eslaides e exemplos.

### Lista de Correspondência

- [ARIA Livre no Grupo Google](https://groups.google.com/forum/#!forum/free-aria)
  - : Área de perguntas sobre ARIA, bem como de fazer sugestões para melhorar a documentação ARIA encontrada nestas páginas.

### Blogs

As informações ARIA nos blogues tendem a ficar desatualizadas rapidamente. Sem contar que há outras boas informações fora deles, de desenvolvedores que estão tornando o conjunto Aria funcional hoje.

[Paciello Group](http://www.paciellogroup.com/blog/category/wai-aria/)

[Cultura Acessível](http://www.accessibleculture.org/tag/wai-aria/)

### Encontrando Erros

[Erros nos arquivos ARIA em navegadores, leitores de telas e bibliotecas JavaScript](/pt-BR/Accessibility/ARIA/How_to_file_ARIA-related_bugs).

### Exemplos

- [Exemplos de Bibliotecas ARIA](/pt-BR/docs/Accessibility/ARIA/ARIA_Test_Cases)
  - : Um conjunto de exemplos de arquivos das bibliotecas base, com os quais fica muito fácil aprender.
- Demonstração de Biblioteca para a Accessibilidade JS em _Widget_
  - : [Dojo](http://dojotoolkit.org/widgets), [jQuery](http://hanshillen.github.com/jqtest/), [Fluid](http://wiki.fluidproject.org/display/fluid/Components), [YUI](http://yuilibrary.com/gallery/)
- [Correio Eletrônico Yahoo!](http://mail.yahoo.com)
  - : A Yahoo! colocou tudo reunido com o Yahoo! _e-mail_, uma aplicação para a _web_ que parece um aplicativo nativo. E funciona muito bem. Em uma [análise do _e-mail_ Yahoo!](http://www.marcozehe.de/2011/09/21/review-the-all-new-yahoo-mail-web-application/) pelo leitor de tela, Marco Zehe diz: "Que o bom trabalho permaneça!".
- [Pesquisa Yahoo!](http://search.yahoo.com)
  - : A Yahoo! tem feito um trabalho incrível no avanço do ARIA, aplicando suas posibilidades de forma plena e [compartilhando suas técnicas](http://ycorpblog.com/2011/03/23/searchdirect/). A Pesquisa Yahoo! usa uma combinação de pontos de referência ARIA, regiões dinâmicas e _widgets_.

### Esforços pela Padronização

- [Uma Visão Geral das Atividades WAI-ARIA na W3C](https://www.w3.org/WAI/intro/aria.php)
  - : Uma visão geral oficial dos esforços de padronização da WAI-ARIA pela Iniciativa de tornar a _Web_ Acessível (Web Accessibility Initiative - WAI)
- [Especificações WAI-ARIA](https://www.w3.org/TR/wai-aria/)
  - : As especificações W3C são referências úteis. Note que, nesta fase, é importante testar a compatibilidade, uma vez que as implementações ainda estão inconsistentes.
- [Práticas Oficiais WAI-ARIA](https://www.w3.org/WAI/PF/aria-practices/)

  - : Conforme as especificações da W3C WAI-ARIA, a excelênca nas práticas oficiais representam o futuro ideal - o dia em que todos os autores possam trabalhar em suas realizações sobre uma base ARIA consistente em navegadores e leitores de tela. A documentação W3C proporcionará a você uma visão aprofundada de ARIA.

    Por enquanto, desenvolvedores _web_ que implementem ARIA devem priorizar a compatibilidade. Use as melhores documentações das práticas e exemplos baseados em implementações atuais.

- [A Força-Tarefa da Acessibilidade Open AJAX](http://www.openajax.org/member/wiki/Accessibility)
  - : Os centros de pesquisa Open AJAX envolvem ferramentas de desenvolvimento, modelos de arquivos e testes automatizados para ARIA.
- [Em Construção: Técnicas ARIA WCAG 2.0](/pt-BR/docs/Accessibility/ARIA/ARIA_Techniques)
  - : A comunidade necessita de um conjunto completo de técnicas WCAG voltadas para WAI-ARIA + HTML, a fim de que as organizações possam estar confortáveis ao proclamar que o teor de suas ARIAs habilitadas é compatível com essas técnicas WCAG. É muito importante que as regulamentações, ou políticas, sejam baseadas em WCAG.

### Tópicos Relacionados

- [Accessibilidade](/pt-BR/docs/Accessibility), [AJAX](/pt-BR/docs/AJAX), [JavaScript](/pt-BR/docs/JavaScript)
