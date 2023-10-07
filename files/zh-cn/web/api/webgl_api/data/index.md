---
title: Data in WebGL
slug: Web/API/WebGL_API/Data
---

{{DefaultAPISidebar("WebGL")}}

GLSL 为 Shader 提供了三种不同作用的数据存储，每种都有一个特定的用例。每种数据依作用不同可以被一种或者全部 shader 访问（取决于数据存储类型），也可能通过站点的 Javascript 代码进行访问，这取决于变量的特定类型。

## GLSL 数据类型

<<关于 基本数据类型，向量等，参见 Khronos WebGL Wiki 的文档：[Data Type (GLSL)](<https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)>) >>

## GLSL 变量

GLSL 中有三种类型的“变量”或者说数据存储类型。每一种类型都有特定的目标和使用方法：: **[attributes](#attributes)**、**[varyings](#varyings)**和**[uniforms](#uniforms)**.

### Attributes

**Attributes** 可以被 JavaScript 代码操作，也可以在 vertex shader 中被作为变量访问。Attributes 通常被用于存储颜色、纹理坐标以及其他需要在 JavaScript 代码和 vertex shader 之间互相传递的数据。

```js
// init colors
const vertexColors = [
  vec4(0.0, 0.0, 0.0, 1.0), // black
  vec4(1.0, 0.0, 0.0, 1.0), // red
  vec4(1.0, 1.0, 0.0, 1.0), // yellow
  vec4(0.0, 1.0, 0.0, 1.0), // green
  vec4(0.0, 0.0, 0.0, 1.0), // black
  vec4(1.0, 0.0, 0.0, 1.0), // red
  vec4(1.0, 1.0, 0.0, 1.0), // yellow
  vec4(0.0, 1.0, 0.0, 1.0), // green
];
const cBuffer = gl.createBuffer();
```

```js
// continued
// create buffer to store colors and reference it to "vColor" which is in GLSL
gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
gl.bufferData(gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW);

const vColor = gl.getAttribLocation(program, "vColor");
gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vColor);
```

```cpp
//glsl
attribute  vec4 vColor;

void main()
{
  fColor = vColor;
}
```

### Varyings

**Varyings** 在 vertex shader 中定义，用于从 vertex shader 向 fragment shader 传递数据。通常传递 [normal vector](<https://zh.wikipedia.org/wiki/Normal_(geometry)>) 等在 vertex shader 中计算生成的数据会使用 varying。

<\<how to use>>

### Uniforms

**Uniform** 通常是由 JavaScript 代码设置并且在 vertex shader 和 fragment shader 中都能够访问。使用 uniform 设定在一帧的所有绘制中相同的数据，例如光源颜色、亮度、全局变换以及透视数据等等。

<<添加细节>>

## Buffers

<<添加信息>>

## Textures

<<添加信息>>
