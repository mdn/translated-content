---
title: Accessibility
slug: Learn/Accessibility
---

{{LearnSidebar}}

Aprender HTML, CSS e Javascript é útil se você quer se tornar um desenvolvedor web, mas seu conhecimento precisa ir além. Você deve usá-las de forma a maximizar a audiencia dos seus sites, e permitir que todos possam acessar o conteúdo. Para conseguir isso, será necessário seguir boas práticas, realizar testes em vários navegadores ([cross browser testing](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing)) e pensar em acessibilidade desde o início do desenvolvimento. Este módulo abordará a acessibilidade em detalhes.

## Visão geral

Quando alguem descreve um site como 'acessível', entende-se que qualquer usuário pode acessar o conteúdo, independente de como o conteúdo foi acessado - mesmo, e especialmente portadores de limitações físicas ou mentais.

- Os sites devem ser acessíveis por teclado, mouse ou telas sensíveis, e qualquer outra forma, incluindo leitores de tela, ou assistentes de voz, como Alexa, ou Google home.
- As aplicações devem ser compreensíveis e usáveis pelos usuários independentemente de suas habilidades auditivas, visuais, físicas ou cognitivas.
- Os sites também não podem oferecer perigo: alguns movimentos podem causar enxaquecas ou ataques epiléticos.

**Por padrão, o HTML é acessível, se utilizado corretamente.** A acessibilidade web presume que o conteúdo continuará acessível, independente de como o conteúdo será acessado.

O recurso **Inspecionar propriedades de acessibilidade** é uma ótima ferramenta para verificar problemas de acessibilidade nos sites. O vídeo a seguir fornece uma boa introdução sobre a ferramenta.

{{EmbedYouTube("7mqqgIxX_NU")}}

## Prerequisitos

Para ter o máximo proveito deste módulo, recomendamos que esteja familiarizados com pelos os dois primeiros módulos de [HTML](/pt-BR/docs/Learn/HTML), [CSS](/pt-BR/docs/Learn/CSS), e [JavaScript](/pt-BR/docs/Learn/JavaScript), ou melhor ainda, com as partes principais do módulo de acessibilidade de cada capítulo, à medida em que vai estudando.

> [!NOTE]
> Se você está estudando em um dispositivo que não pode criar novos arquivos, voce pode testar os exemplos em alguma aplicação de codificação online, como [JSBin](https://jsbin.com/) ou [Glitch](https://glitch.com/).

## Guias

- [O que é acessibilidade?](/pt-BR/docs/Learn/Accessibility/What_is_accessibility)
  - : Este artigo fornece uma visão geral do que é a acessibilidade - isso inclui quais grupos de pessoas devemos considerar e o motivo, quais ferramentas de acessibilidade são utilizadas para interagir com a web e como podemos fazer da acessibilidade web parte do nosso fluxo de desenvolvimento.
- [HTML: A base para a acessibilidade](/pt-BR/docs/Learn/Accessibility/HTML)
  - : Boa parte do conteúdo da Web pode ser 'acessível' apenas garantindo que as tags HTML sejam sempre usadas para a finalidade correta. Este artigo analisa detalhadamente como utilizar o HTML garantindo a máxima acessibilidade.
- [CSS e JavaScript: accessibilidade e boas práticas](/pt-BR/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : CSS e JavaScript, usados corretamente, também podem proporcionar experiências acessíveis na web, mas se mal utilizadas, podem prejudicar a navegação. Este artigo descreve como utilizar o CSS e JS de forma a garantir que mesmo conteúdos complexos sejam acessíveis.
- [Básico de WAI-ARIA](/pt-BR/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : Continuando to tópico anterior, não é facil fazer interfaces web com HTML e conteúdo dinâmico atualizado por JavaScript. O WAI-ARIA é uma tecnologia que pode ajudar com esses problemas, adicionando mais propriedades semanticas que navegadores e tecnologias assistivas podem reconhecer e usar para permitir que os usuários saibam o que está acontecendo na tela. Aqui mostraremos o básico destas técnicas para melhorar a acessibilidade.
- [Multimedia acessível](/pt-BR/docs/Learn/Accessibility/Multimedia)
  - : Outra categoria de conteúdo que pode criar problemas de acessibilidade é a multimédia - Audio, vídeo e imagens precisam de alternativas textuais, assim poderão ser compreendidas por tecnologias assistivas de seus usuários. Este artigo detalha como.
- [Accessibilidade Mobile](/pt-BR/docs/Learn/Accessibility/Mobile)
  - : O acesso por dispositivos móveis e smartphones é muito popular, e plataformas como iOS e Android já possuem ferramentas bastante consolidadas, assim é importante considerar a acessibilidade do seu conteúdo também nestas plataformas. Este artigo faz considerações sobre acessibilidade mobile.

## Avaliações

- [Solução de problemas](/pt-BR/docs/Learn/Accessibility/Accessibility_troubleshooting)
  - : Na avaliação deste módulo, disponibilizaremos um site com vários problemas de acessibilidade que você deve encontrar e corrigir.

## Veja também

- [Comece a desenvolver aplicações web hoje](https://egghead.io/courses/start-building-accessible-web-applications-today) — Marcy Sutton apresenta uma excelente série de video tutorials.
- [Recursos Universidade Deque](https://dequeuniversity.com/resources/) — inclui codigos de exemplo, leitores de tela, e outros recursos interessantes.
- [Recursos webAIM](https://webaim.org/resources/) — inlui guias, checklists, ferramentas e outras coisas.
