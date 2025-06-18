---
title: Jogos 3D na WEB
slug: Games/Techniques/3D_on_the_web
---

{{GamesSidebar}}

A melhor arma para desenvolver ótimas experiências em jogos na WEB é WebGL, que é renderizada em HTML {{htmlelement("canvas")}}. WebGL é, basicamente, uma OpenGL ES 2.0 para a Web — é uma API JavaScript que fornece ferramentas para construir animações ricas e, logicamente, jogos. Você pode gerar e renderizar gráficos dinâmicos em 3D com JavaScript acelerado por hardware.

## Documentação e suporte para navegadores

A documentação e as especificações do projeto [WebGL](/pt-BR/docs/Web/API/WebGL_API) é mantida pelo [Grupo Khronos](https://www.khronos.org/), não o W3C como a maioria das APIs Web. O suporte nos navegadores modernos é muito bom, até mesmo em mobile, portanto você não terá que se preocupar muito com isso. Todos os navegadores comuns suportam WebGL e tudo mais que você precisar para que possa focar em otimizar o desempenho nos dispositivos que usar.

Há um esforço contínuo em liberar WebGL 2.0 (baseado na OpenGL ES 3.0) em um futuro próximo para, além de trazer muitas melhorias, também ajudar os desenvolvedores a construir jogos para a Web "moderna", usando hardware atual e poderoso.

## Explicando a teoria 3D básica

O básico da teoria 3D gira em torno de formas representadas em um espaço 3D, que corresponde a um sistema de coordenadas usadas para calcular suas posições. Veja noss artigo [Explicando a teoria 3D básica](/pt-BR/docs/Games/Techniques/3D_on_the_web/Basic_theory) para todas as informações que você precisar

## Conceitos avançados

Você pode fazer muito mais com WebGL. Há alguns conceitos avançados que você deve se aprofundar e aprender mais — como shaders, detecção de colisão, ou o mais recente tópico em alta — realidade virtual na web.

### Shaders

É importante mencionar os shaders, que tem uma história separada por sí próprios. Shaders usam GLSL, uma "Linguagem de Sombreamento" OpenGL especial com sintaxe similar a C, que é executada diretamente pelos pipelines de gráficos. Podem ser divididos em Vertex Shaders e Fragment Shaders (ou Pixel Shaders) — o primeiro transforma as posições das formas em coordenadas reais de desenho 3D, enquanto o segundo calcula cores de renderização e outros atributos. Recomendamos fortemente que você veja o artigo [GLSL Shaders](/pt-BR/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) para aprender mais sobre eles.

### Detecção de Colisão

É difícil de imaginar um jogo sem detecção de colisão — nós sempre precisamos trabalhar com algo batendo em alguma outra coisa. Temos informações disponíveis para você aprender em:

- [Detecção de colisão 2D](/pt-BR/docs/Games/Techniques/2D_collision_detection)
- [Detecção de colisão 3D](/pt-BR/docs/Games/Techniques/3D_collision_detection)

### WebVR

O conceito de realidade virtual não é novo, mas está crescendo na web devido os avanços de hardware, tal como o [Oculus Rift](https://www.oculus.com/en-us/rift/), e a (atualmente experimental) [WebVR API](/pt-BR/docs/Web/API/WebVR_API) para capturar informações de hardware via Realidade Virtual (RV) e tonaná-la acessível para uso em aplicações JavaScript. Para mais informações, leia [WebVR — Realidade Virtual para a Web](/pt-BR/docs/Games/Techniques/3D_on_the_web/WebXR).

Também há o artigo [Desenvolvendo uma demo básica com A-Frame](/pt-BR/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) que te mostra como é fácil construir ambientes 3D para realidade virtual usando o framework [A-Frame](http://aframe.io/).

## O surgimentos de bibliotecas e frameworks

Codificar WebGL diretamente é bem complexo, mas você vai querer se familiarizar com isso a longo prazo quando seus projetos avançarem (veja nossa [documentação WebGL](/pt-BR/docs/Web/API/WebGL_API) para começar). Para projetos do mundo real você provavelmente também usará um framework para acelerar o desenvolvimento e ajudar na administração do projeto em que estiver trabalhando. Usar um framework para jogos 3D também ajuda muito a otimizar o desempenho, assim você pode focar no desenvolvimento do jogo.

A biblioteca JavaScript 3D mais popular é [Three.js](https://threejs.org/), uma ferramenta multiuso que deixa técnicas 3D comuns mais simples de serem implementadas. Há outras bibliotecas de desenvolvimento de jogos populares e alguns frameworks que valem a pena serem checados também; [A-Frame](https://aframe.io), [PlayCanvas](https://playcanvas.com/) e [Babylon.js](http://www.babylonjs.com/) estão entre os mais reconhecidos, com belas documentações, editores online e comunidades ativas.

### Desenvolvendo uma demo básica com A-Frame

A-Frame é um framework web para desenvolvimento 3D e experiências de RV. Visto mais afundo, é um framework three.js com um padrão componente-entidade declarativo, significando que podemos construir cenas apenas com HTML. Veja a página [Desenvolvendo uma demo básica com A-Frame](/pt-BR/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) para o passo-a-passo da criação de uma demo.

### Desenvolvendo uma demo básica com Babylon.js

Babylon.js é um dos mais populares motores de jogos 3D usados por desenvolvedores. Assim como qualquer outra biblioteca 3D, ela fornece funções integradas para te ajudar a implementar funcionalidades tridimensionais comuns mais rapidamente. Veja a página [Desenvovlendo uma demo básica com Babylon.js](/pt-BR/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) para saber o básico de Babylon.js, incluindo configurações do ambiente de desenvolvimento, estruturar o HTML necessário e escrever o código JavaScript.

### Desenvolvendo uma demo básica com PlayCanvas

PlayCanvas é um popular motor de jogos 3D WebGL de código aberto no GitHub, com um editor acessível online e com boa documentação. Veja a página [Desenvolvendo uma demo básica com PlayCanvas](/pt-BR/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) para detalhes mais avançados e encontrar outros artigos mostrando como usar a bilbioteca PlayCanvas e o editor online.

### Desenvolvendo uma demo básica com Three.js

Three.js, assim como qualquer outra biblioteca, lhe fornece uma enorme vantagem: ao invés de escrever centenas de linhas do código WebGL para construir qualquer coisa interessante, te permite usar as funções auxiliares integradas para desenvolver o que quiser muito mais rápido e fácil. Veja a página [Desenvolvendo uma demo básica com Three.js](/pt-BR/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) para o passo-a-passo da criação de uma demo.

### Outras ferramentas

Tanto [Unity](http://unity3d.com/) quanto [Unreal](https://www.unrealengine.com/) podem exportar o seu jogo para [WebGL](/pt-BR/docs/Web/API/WebGL_API) com [asm.js](/pt-BR/docs/Games/Tools/asm.js), então você estará livre para usar suas ferramentas e técnicas para desenvolvimento de jogos que serão exportados para a web.

![](http://end3r.github.io/MDN-Games-3D/A-Frame/img/shapes.png)

## Para onde ir agora

Com esse artigo nós apenas arranhamos a superfície do que é possível fazer com as tecnologias disponíveis atualmente. Você pode desenvolver jogos imersivos, belos e rápidos na WEB usando WebGL, e as bibliotecas e frameworks construídos sobre ele.

### Código-fonte

Você pode encontrar todo o código fonte para esta série de [demos no GitHub](http://end3r.github.io/MDN-Games-3D/).

### APIs

- [Canvas API](/pt-BR/docs/Web/API/Canvas_API)
- [WebGL API](/pt-BR/docs/Web/API/WebGL_API)
- [WebVR API](/pt-BR/docs/Web/API/WebVR_API)

### Frameworks

- [Three.js](https://threejs.org/)
- [Whitestorm.js](https://github.com/WhitestormJS/whs.js) (baseado em Three.js)
- [PlayCanvas](https://playcanvas.com/)
- [Babylon.js](http://www.babylonjs.com/)
- [A-Frame](http://aframe.io/)

### Tutoriais

- [Desenvolvendo uma demo básica com Three.js](/pt-BR/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Desenvolvendo uma demo básica com Whitestorm.js](/pt-BR/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Whitestorm.js)
- [Desenvolvendo uma demo básica com PlayCanvas](/pt-BR/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Desenvovlendo uma demo básica com Babylon.js](/pt-BR/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Desenvolvendo uma demo básica com A-Frame](/pt-BR/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
