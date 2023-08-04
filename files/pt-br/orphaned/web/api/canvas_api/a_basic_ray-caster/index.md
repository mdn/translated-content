---
title: A basic ray-caster
slug: orphaned/Web/API/Canvas_API/A_basic_ray-caster
---

{{DefaultAPISidebar("Canvas API")}}

Esse artigo disponibiliza um exemplo interessante do mundo real do uso do elemento {{HTMLElement("canvas")}} para fazer renderização via software de um ambiente em 3D utilizando _ray-casting_.

{{EmbedGHLiveSample("canvas-raycaster/index.html", 900, 300)}}

**[Abrir em uma nova janela](http://mdn.github.io/canvas-raycaster/)**

## Porquê?

Depois de perceber, para meu deleite, que o elemento \<canvas> que eu estava [lendo sobre](http://www.whatwg.org/specs/web-apps/current-work/#dynamic) ele não estava apenas próximo de ser suportado pelo Firefox, mas que **já** estava com suporte na versão atual do Safari, eu tinha que tentar que fazer um pequeno teste.

A [visão geral do canvas](/pt-BR/docs/Web/API/Canvas_API) e o [tutorial](/pt-BR/docs/Canvas_tutorial) que eu encontrei no MDN são incríveis, mas ninguém havia escrito sobre animação, então eu pensei que poderia portar um exemplo de raycaster básico que eu havia trabalhado um tempo atrás, e ver e ver que tipo de performance nós podemos esperar te um pixel buffer controlado por JavaScript.

## Como?

A ideia básica é usar o {{domxref("window.setInterval","setInterval()")}} com um delay arbitrário que corresponda a uma taxa de atualização desejada. Depois de cada intervalo uma função de atualização irá redesenhar o canvas mostrando a view atual. Eu sei que poderia ter iniciado com um exemplo mais simples, mas estou certo que o tutorial do canvas vai fazê-lo, e eu queria verificar se poderia fazer isso.

Sendo assim, a cada atualização, o raycaster verifica se você pressionou qualquer tecla por último, para conservar os cálculos não fazendo casting caso você esteja ocioso. Se você tiver pressionado, então o canvas é limpo, o solo e o céu são desenhados, a posição da câmera e/ou a orientação são atualizados, e os raios são feitos. Como os raios se cruzam paredes, então eles tornam uma tira de tela vertical na cor da parede que eles atingiram, misturado com uma versão mais escura da cor de acordo com a distância para a parede.A altura da fita também é modulada pela distância da câmera para a parede, e é desenhada centrada sobre a linha do horizonte.

O código que eu acabei com é um amálgama regurgitado dos capítulos de raycaster de um velho André LaMothe*Tricks* do _livro de Gurus de Programação de Jogos_ (ISBN: 0672305070), e um [jaspe raycaster](http://www.shinelife.co.uk/java-maze/) que encontrei online, filtrado através da minha compulsão de renomear tudo para que faça sentido Para mim, e todos os ajustes que tinham que ser feitos para fazer as coisas funcionarem bem.

## Resultados

Com o fator de bloqueio criado para produzir slivers 8 pixels de largura, eu posso executar uma janela de 320 x 240 em 24 fps no meu Apple mini. Firefox 1.5 Beta 1 é ainda mais rápido; Eu posso executar 320 x 240 em 24 fps com 4 pixel slivers. Não exatamente um novo membro da família de software de ID, mas bastante decente considerando que é um ambiente totalmente interpretado, e eu não tenho que se preocupar com a alocação de memória ou modos de vídeo ou rotinas internas de codificação em assembler ou qualquer coisa.
">O código tenta ser muito eficiente, usando pesquisas de matrizes de valores pré-calculados, mas não sou um guru de otimização, então as coisas provavelmente poderiam ser escritas mais rapidamente.

Além disso, deixa muito a desejar em termos de tentar ser qualquer tipo de motor de jogo - não há texturas de parede, não sprites, sem portas, nem mesmo teleportadores para chegar a outro nível. Mas estou bastante confiante de que todas essas coisas poderiam ser adicionadas com tempo suficiente.A API de tela aceita a cópia de pixels de imagens, portanto, as texturas parecem possíveis. Vou deixar isso para outro artigo, provavelmente de outra pessoa. )

## O ray-caster

As pessoas agradáveis aqui têm copiado manualmente meus arquivos para que você possa dar uma olhada, e para o seu prazer de hacking eu postei o conteúdo do arquivo individual como listagem de código (veja abaixo).

Então você está lá, o fogo até Safari 1.3 ou Firefox 1.5 ou outro navegador que suporta o elemento \<canvas> e divirta-se!

[input.js](https://github.com/mdn/canvas-raycaster/blob/master/input.js) | [Level.js](https://github.com/mdn/canvas-raycaster/blob/master/Level.js) | [Player.js](https://github.com/mdn/canvas-raycaster/blob/master/Player.js) | [RayCaster.html](https://github.com/mdn/canvas-raycaster/blob/master/index.html) | [RayCaster.js](https://github.com/mdn/canvas-raycaster/blob/master/RayCaster.js) | [trace.css](https://github.com/mdn/canvas-raycaster/blob/master/trace.css) | [trace.js](https://github.com/mdn/canvas-raycaster/blob/master/trace.js)

## See also

- [Canvas tutorial](/pt-BR/docs/Web/API/Canvas_API/Tutorial)
