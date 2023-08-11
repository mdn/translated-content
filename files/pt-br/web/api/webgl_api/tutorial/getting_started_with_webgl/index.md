---
title: Começando com WebGL
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
---

{{DefaultAPISidebar("WebGL")}}{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

[WebGL](http://www.khronos.org/webgl/) permite que o contéudo web use uma API baseada em [OpenGL ES](http://www.khronos.org/opengles/) 2.0 para realizar renderização 3D em um [`canvas`](/pt-BR/docs/Web/API/Canvas_API) HTML em browsers que o suportam sem o uso de plugins. Programas WebGL consistem em um código de controle escrito em JavaScript e códigos de efeitos especiais (shader code) que é executado na Unidade Gráfica de Processamento (GPU) de um computador. Elementos WebGL podem ser utilizados junto com outros elementos HTML e com outras partes da página ou do fundo.

Esse artigo vai introduzir o básico sobre o uso do WebGL. Acredita-se que você já possui entendimento da matemática que envolve os gráficos 3D, e que este artigo não tem a pretensão de tentar ensinar-lhe OpenGL em si.

Os exemplos de código deste tutorial também podem ser encontrados no [Exemplos de WebGL no repositório do GitHub](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial).

## Preparando-se para renderizar em 3D

A primeira coisa que você precisa para para renderização do WebGL, é a inicialização do canvas. O fragmento HTML abaixo declara um canvas em que nosso exemplo será desenhado.

```html
<body>
  <canvas id="glCanvas" width="640" height="480"></canvas>
</body>
```

### Preparando o contexto WebGL

A função `main()` em nosso código JavaScript é chamada quando nosso script é carregado. O objetivo é configurar o contexto do WebGL e começar a renderizar o conteúdo.

```js
main();

//
// começa aqui
//
function main() {
  const canvas = document.querySelector("#glCanvas");
  // Inicializa o contexto GL
  const gl = canvas.getContext("webgl");

  // Só continua se o WebGL estiver disponível e funcionando
  if (!gl) {
    alert(
      "Incapaz de inicializar o WebGL.Seu navegador ou sua máquina não suporta.",
    );
    return;
  }

  // Define a cor para preto totalmente opaca (sem transparência)
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Limpa o buffer de cores com uma cor específica
  gl.clear(gl.COLOR_BUFFER_BIT);
}
```

A primeira coisa que nós fazemos aqui é obter a referência para o canvas, atribuindo-a para a variável chamada `canvas`.

Uma vez que nós temos o canvas, nós tentamos obter um [WebGLRenderingContext](/pt-BR/docs/Web/API/WebGLRenderingContext) para ele chamando o [getContext](/pt-BR/docs/Web/API/HTMLCanvasElement/getContext) e passando a string `"webgl"`. Se o browser não suportar o webgl `getContext` vai retornar `null` nesse caso nós mostraremos uma mensagem para o usuário e sair.

Se o contexto for inicializado com sucesso, a variável `gl` é nossa referência para ele. Nesse caso, nós altermos a cor para preto, e o contexto para aquela cor (redesenhando o canvas com a cor de fundo).

Nesse ponto, você tem código suficiente para o contexto WebGL ser inicializado com sucesso, e você deve visualizar uma grande caixa preta vazia, pronta e esperando para receber conteúdo.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample1/index.html', 670, 510) }}

[Veja o código completo](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample1) | [Abra a demo em uma nova página](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample1/)

## Veja também

- [Uma introdução ao WebGL](https://dev.opera.com/articles/introduction-to-webgl-part-1/): Escrito por Luz Caballero, publicado por dev.opera.com. Esse artigo direciona sobre o que o WebGL é, explicando como o WebGL funciona (incluindo o conceito de pipeline de renderização), e introduz algumas bibliotecas do WebGL.
- [Fundamentos do WebGL](http://webglfundamentals.org/)
- [Uma introdução para o OpenGL moderno:](http://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html) Uma séroe de bons artigos sobre OpenGL escrita por Joe Groff, provendo uma introdução clara para o OpenGL a partir de sua história até os importantes conceitos de pipeline de gráficos, e também inclui alguns exemplos demonstrativos sobre como o OpenGL funciona. Se você não tem ideia do que seja OpenGL, esse é um bom lugar para começar.

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
