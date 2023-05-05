---
title: 使用 shaders 在 WebGL 上色
slug: Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}

[上一篇](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)我們建立了一個正方形平面，接下來我們要透過修改 shakder 來加入顏色。

## 指定頂點顏色

WebGL 中物件是由許多頂點來組成，每個頂點有自己的座標、顏色。其他像素的屬性(顏色、位置)預設是透過計算多頂點的內差值來得到的。之前的例子，vertex shader 並沒有指定頂點任何顏色。

In WebGL, objects are built using sets of vertices, each of which has a position and a color; by default, all other pixels' colors (and all its other attributes, including position) are computed using interpolation, automatically creating smooth gradients. Previously, our vertex shader didn't apply any specific colors to the vertices; between this and the fragment shader assigning the fixed color of white to each pixel, the entire square was rendered as solid white.

Let's say we want to render a gradient in which each corner of the square is a different color: red, blue, green, and white. The first thing to do is to establish these colors for the four vertices. To do this, we first need to create an array of vertex colors, then store it into a WebGL buffer; we'll do that by adding the following code to our `initBuffers()` function:

```js
  const colors = [
    1.0,  1.0,  1.0,  1.0,    // white
    1.0,  0.0,  0.0,  1.0,    // red
    0.0,  1.0,  0.0,  1.0,    // green
    0.0,  0.0,  1.0,  1.0,    // blue
  ];

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    color: colorBuffer,
  };
}
```

這段程式碼一開始先宣告一個陣列來存放四個四維向量，分別為四個頂點的顏色。接下來，將陣列轉型為浮點數並存入一個新的 WebGL buffer 。

為了使用這些顏色，我們需要修改 vertex shader，讓他可以從 buffer 中取得正確的顏色。

```html
  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;
```

The key difference here is that for each vertex, we pass its color using a `varying` to the fragment shader.

## 替 fragment 上色

我們重新回顧一下，[之前](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)我們的 fragment shader 如下：

```html
  const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;
```

為了要讓每個 pixel 使用內插的顏色，我們讓 `gl_FragColor` 取得 vColor 的值。

```html
  const fsSource = `
    varying lowp vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `;
```

這樣的改變可以使每個 fragment 得到利用相對位置內插法所產生顏色，而不是得到一個固定的值。

## 畫出顏色

接下來我們要

Next, it's necessary to add the code look up the attribute location for the colors and setup that attribute for the shader program:

```js
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    ...
```

Then, drawScene() can be revised to actually use these colors when drawing the square:

```js
  // Tell WebGL how to pull out the colors from the color buffer
  // into the vertexColor attribute.
  {
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexColor);
  }
```

{{EmbedGHLiveSample('webgl-examples/tutorial/sample3/index.html', 670, 510) }}

[View the complete code](https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample3) | [Open this demo on a new page](http://mdn.github.io/webgl-examples/tutorial/sample3/)

{{PreviousNext("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context", "Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL")}}
