---
title: Introdução ao desenvolvimento de jogos para a Web
slug: Games/Introduction
---

{{GamesSidebar}}

A web moderna rapidamente tem se tornado uma plataforma não só para criar jogos esplêndidos de alta qualidade, mas também para a distribuição desses mesmos jogos.

A gama de jogos que podem ser criados é compatível com as partes equivalentes de Desktop e contrapartes nativas de SO. Com modernas tecnologias da Web e um navegador recente, é perfeitamente possível fazer jogos impressionantes e de primeira qualidade para a Web. E não estamos falando de jogos de cartas simples ou de jogos sociais multijogadores que, nos tempos antigos, foram feitos usando Flash®. Estamos falando de FPS de ação 3D, RPGs e mais. Graças às melhorias de desempenho macias em tecnologia de compilação just-in-time de JavaScript e novas APIs, você pode construir jogos que são executados no navegador (ou em dispositivos com HTML5 como aqueles baseados no sistema operacional Firefox) sem compromissos.

## A plataforma de jogo HTML5

Você pode realmente pensar na Web como uma melhor plataforma de destino para o seu jogo. Como gostamos de dizer , "A Web é a plataforma". Vamos dar uma olhada no núcleo da plataforma da Web:

| Função              | Tecnologia                                                                                                                                                                                                                                                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Audio**           | [Web Audio API](/pt-BR/docs/Web/API/Web_Audio_API)                                                                                                                                                                                                                                 |
| **Gráficos**        | [WebGL](/pt-BR/docs/Web/API/WebGL_API) ([OpenGL ES](https://www.khronos.org/opengles/) 2.0)                                                                                                                                                                                        |
| **Entrada (Input)** | [Touch events](/pt-BR/docs/Web/Guide/Events/Touch_events), [Gamepad API](/pt-BR/docs/API/Gamepad/Using_Gamepad_API), device sensors, [WebRTC](/pt-BR/docs/WebRTC), [Full Screen API](/pt-BR/docs/Web/API/Fullscreen_API), [Pointer Lock API](/pt-BR/docs/Web/API/Pointer_Lock_API) |
| **Linguagem**       | [JavaScript](/pt-BR/docs/Web/JavaScript) (ou C/C++ usando [Emscripten](https://github.com/kripken/emscripten/wiki) para compilar para JavaScript)                                                                                                                                  |
| **Rede**            | [WebRTC](/pt-BR/docs/WebRTC) e/ou [WebSockets](/pt-BR/docs/WebSockets)                                                                                                                                                                                                             |
| **Armazenamento**   | [IndexedDB](/pt-BR/docs/IndexedDB) ou o "cloud"                                                                                                                                                                                                                                    |
| **Web**             | [HTML](/pt-BR/docs/Web/HTML), [CSS](/pt-BR/docs/Web/CSS), [SVG](/pt-BR/docs/Web/SVG), [Social API](/pt-BR/docs/api_social) (e muito mais!)                                                                                                                                         |

## O caso de negócios

Como desenvolvedor de jogos, seja individual ou um grande estúdio de jogos, você quer saber por que faz sentido ter como alvo a Web com o seu próximo projeto de jogo. Vejamos como a Web pode ajudá-lo.

1. O alcance da Web é enorme; Está em toda parte. Jogos criados com HTML5 em smartphones, tablets, PCs e Smart TVs.
2. O marketing e a descoberta são melhorados. Você não está limitado a promover o seu aplicativo na loja de aplicativos de outra pessoa. Em vez disso, você pode anunciar e promover o seu jogo em toda a Web, bem como outros meios de comunicação, aproveitando a capacidade de compartilhamento inerente e compartilhamento da Web para alcançar novos clientes.
3. Você tem controle onde isso importa: Pagamentos. Você não precisa entregar mais de 30% de suas receitas para outra pessoa apenas porque seu jogo está em seu ecossistema. Em vez disso, carregue o que deseja e use qualquer serviço de processamento de pagamento que você gosta.
4. Novamente com mais controle, você pode atualizar seu jogo sempre que quiser. Não espera sem fôlego para aprovação, enquanto alguém escondido em outra empresa decide se a sua correção crítica de erros será ou não enviada hoje ou amanhã.
5. Controle suas análises! Em vez de confiar em outra pessoa para tomar todas as decisões sobre o que você precisa, você pode coletar o seu próprio — ou escolha o terceiro que você gosta do melhor — para coletar informações sobre suas vendas e o alcance do seu jogo.
6. Você consegue gerenciar seu relacionamento com o cliente de forma mais próxima, à sua maneira. Não há mais comentários do cliente filtrados através dos mecanismos limitados de uma loja de aplicativos. Participe com seus clientes da maneira que você quiser, sem intermediário.
7. Seus jogadores podem jogar seu jogo em qualquer lugar, a qualquer hora. Como a Web é onipresente, seus clientes podem verificar o status do seu jogo em seus telefones, tablets, laptops domésticos, desktops de trabalho ou qualquer outra coisa.

## Tecnologias da Web para desenvolvedores de jogos

Para as pessoas de tecnologia, vamos cavar as APIs que a Web traz à mesa que atendem aos desenvolvedores de jogos. Aqui está uma lista completa para dar uma amostra do que a Web pode fazer por você:

- [Full Screen API](/pt-BR/docs/Web/API/Fullscreen_API)
  - : Esta API simples permite que seu jogo ocupe toda a tela, imergindo assim o jogador em ação.
- [Gamepad API](/pt-BR/docs/API/Gamepad/Using_Gamepad_API)
  - : Se você quiser que seus usuários possam usar gamepads ou outros controladores de jogos para trabalhar seu jogo, você precisará desta API.
- [HTML](/pt-BR/docs/Web/HTML) e [CSS](/pt-BR/docs/Web/CSS)
  - : Juntas, essas duas tecnologias permitem que você possa criar, estilizar e definir a interface do usuário do seu jogo. Parte do HTML é o {{HTMLElement("canvas")}} elemento, que fornece uma maneira de fazer gráficos 2D.
- [HTML audio](/pt-BR/docs/Web/HTML/Element/Audio)
  - : O {{HTMLElement("audio")}} elemento permite reproduzir facilmente efeitos sonoros e música. Se suas necessidades estão mais envolvidas, confira a [API Web Áudio](/pt-BR/docs/Web/API/API_Web_Audio) para obter poder real de processamento de áudio!
- [IndexedDB](/pt-BR/docs/IndexedDB)
  - : Uma poderosa API de armazenamento de dados para manter os dados do usuário em seu próprio computador ou dispositivo. Uma ótima maneira de salvar o estado do jogo e outras informações localmente, portanto não precisa ser baixado sempre que for necessário. Também é útil para ajudar a tornar o seu jogo jogável mesmo quando o usuário não está conectado à Web (como quando estão presos em um avião por horas a fio).
- [JavaScript](/pt-BR/docs/Web/JavaScript)
  - : JavaScript, a linguagem de programação usada na Web, está sendo lançada rapidamente em navegadores modernos e cada vez mais rápido. Use seu poder para escrever o código do seu jogo, ou olhe para usar tecnologias como [Emscripten](https://github.com/kripken/emscripten/wiki) ou [Asm.js](https://asmjs.org/spec/latest/) para facilmente acessar seus jogos existentes.
- [Pointer Lock API](/pt-BR/docs/Web/API/Pointer_Lock_API)
  - : O Pointer Lock API permite bloquear o mouse ou outro dispositivo apontador na interface do seu jogo, de modo que, em vez do posicionamento absoluto do cursor, você receba deltas de coordenadas que lhe dê medidas mais precisas sobre o que o usuário está fazendo e evite que o usuário envie acidentalmente sua entrada para outro lugar. Falta de uma ação importante.
- [SVG](/pt-BR/docs/Web/SVG) (Scalable Vector Graphics)

  - : Permite criar gráficos vetoriais que se dimensionem sem problemas, independentemente do tamanho ou resolução da exibição do usuário.

- [Typed Arrays](/pt-BR/docs/Web/JavaScript/Typed_arrays)
  - : JavaScript typed arrays da acesso a dados binários em bruto a partir do JavaScript; Isso permite manipular texturas GL, dados de jogos ou qualquer outra coisa, mesmo que não esteja em formato nativo do JavaScript.
- [Web Audio API](/pt-BR/docs/Web/API/WebGL_API)
  - : Essa API para controlar a reprodução, síntese e manipulação de áudio a partir do código JavaScript, você pode criar efeitos de som incríveis, além de reproduzir e manipular música em tempo real.
- [WebGL](/pt-BR/docs/Web/API/WebGL_API)
  - : Permite criar 3D de alta performance, acelerado por hardware (e 2D) a partir de conteúdo da Web. Esta é uma implementação suportada pela Web de [OpenGL ES](http://www.khronos.org/opengles/) 2.0.
- [WebRTC](/pt-BR/docs/WebRTC)
  - : O WebRTC (Real-Time Communications) API Dá-lhe o poder de controlar dados de áudio e vídeo, incluindo teleconferência e transmissão de outros dados de aplicativos de um lado a outro entre dois usuários. Quer que seus jogadores possam conversar um com o outro enquanto explodem monstros? Esta é a API para você.
- [WebSockets](/pt-BR/docs/WebSockets)
  - : O WebSocket API permite conectar seu aplicativo ou site a um servidor para transmitir dados de um lado para o outro em tempo real. Perfeito para a ação de jogo multiplayer, serviços de bate-papo, e assim por diante.
- [Web Workers](/pt-BR/docs/DOM/Using_web_workers)
  - : Os trabalhadores dão-lhe a capacidade de gerar threads de fundo executando seu próprio código JavaScript, para aproveitar os modernos processadores multi-core.
- [XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest) e [File API](/pt-BR/docs/Web/API/File_and_Directory_Entries_API)
  - : A combinação de XMLHttpRequest e o File API Permite enviar e receber qualquer tipo de dados que você deseja (não deixe o "XML" te jogar!) de um servidor da Web. Esta é uma ótima maneira de fazer qualquer coisa, desde o download de novos níveis de jogos e obras de arte para a transmissão de informações de status do jogo não real-time para frente e para trás.
