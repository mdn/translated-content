---
title: WebGLRenderingContext.detachShader()
slug: Web/API/WebGLRenderingContext/detachShader
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的**WebGLRenderingContext.detachShader()** 方法：从一个 {{domxref("WebGLProgram")}}中分离一个先前附加的片段或者顶点着色器（{{domxref("WebGLShader")}} ）.

## Syntax

```plain
void gl.detachShader(program, shader);
```

### Parameters

- `program`
  - : 一个 {{domxref("WebGLProgram")}} 对象。
- `shader`
  - : 一个顶点或者片元着色器 {{domxref("WebGLShader")}}.

## Specifications

{{Specifications}}

## 例子

### 使用 detachShader 方法分离一个顶点或片元着色器

```plain
//顶点着色器
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexSrc);
    gl.compileShader(vertexShader);
    //片元着色器
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);//创建 WebGLShader。
    gl.shaderSource(fragmentShader, fragmentSrc); //fragmentSrc 设置一个 WebGLShader 的源码。
    gl.compileShader(fragmentShader);

    //WebGLProgram
    var program = gl.createProgram();//创建 WebGLProgram
    gl.attachShader(program, vertexShader); //往 WebGLProgram 添加一个片段或者顶点着色器。
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);//链接给入的 WebGLProgram 对象
    gl.detachShader(program, vertexShader); //从一个 WebGLProgram 中分离一个先前附加的片段或者顶点着色器;
    gl.detachShader(program, fragmentShader);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
```

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
