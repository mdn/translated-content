---
title: WebGLRenderingContext.getProgramParameter()
slug: Web/API/WebGLRenderingContext/getProgramParameter
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.getProgramParameter()`** 方法返回 `WebGLProgram` 的信息。

## 语法

```plain
any gl.getProgramParameter(program, pname);
```

### 参数

- program
  - : A {{domxref("WebGLProgram")}} to get parameter information from.
- pname

  - : A {{domxref("Glenum")}} specifying the information to query. Possible values:

    - `gl.DELETE_STATUS`: Returns a {{domxref("GLboolean")}} indicating whether or not the program is flagged for deletion.
    - `gl.LINK_STATUS`: Returns a {{domxref("GLboolean")}} indicating whether or not the last link operation was successful.
    - `gl.VALIDATE_STATUS`: Returns a {{domxref("GLboolean")}} indicating whether or not the last validation operation was successful.
    - `gl.ATTACHED_SHADERS`: Returns a {{domxref("GLint")}} indicating the number of attached shaders to a program.
    - `gl.ACTIVE_ATTRIBUTES`: Returns a {{domxref("GLint")}} indicating the number of active attribute variables to a program.
    - `gl.ACTIVE_UNIFORMS`: Returns a {{domxref("GLint")}} indicating the number of active uniform variables to a program.
    - When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the following values are available additionally:

      - `gl.TRANSFORM_FEEDBACK_BUFFER_MODE`: Returns a {{domxref("GLenum")}} indicating the buffer mode when transform feedback is active. May be `gl.SEPARATE_ATTRIBS` or `gl.INTERLEAVED_ATTRIBS`.
      - `gl.TRANSFORM_FEEDBACK_VARYINGS`: Returns a {{domxref("GLint")}} indicating the number of varying variables to capture in transform feedback mode.
      - `gl.ACTIVE_UNIFORM_BLOCKS`: Returns a {{domxref("GLint")}} indicating the number of uniform blocks containing active uniforms.

### 返回值

Returns the requested program information (as specified with `pname`).

## 例子

```js
gl.getProgramParameter(program, gl.DELETE_STATUS);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
