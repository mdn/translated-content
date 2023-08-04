---
title: WebGLRenderingContext.getUniform()
slug: Web/API/WebGLRenderingContext/getUniform
---

{{APIRef("WebGL")}}[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 `WebGLRenderingContext.getUniform()` 方法返回指定位置的全局变量的值。

## 语法

```
any gl.getUniform(program, location);
```

### 参数

- program
  - : 包含全局变量的一个{{domxref("WebGLProgram")}}。
- location
  - : 包含要获取的全局变量位置的 {{domxref("WebGLUniformLocation")}} 对象。

### 返回值

返回的类型取决于全局变量的类型：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">变量类型（着色器内）</th>
      <th scope="col">返回值类型</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">在 WebGL 1 中支持的</th>
    </tr>
    <tr>
      <td><code>boolean</code></td>
      <td>{{domxref("GLBoolean")}}</td>
    </tr>
    <tr>
      <td><code>int</code></td>
      <td>{{domxref("GLint")}}</td>
    </tr>
    <tr>
      <td><code>float</code></td>
      <td>{{domxref("GLfloat")}}</td>
    </tr>
    <tr>
      <td><code>vec2</code></td>
      <td>{{jsxref("Float32Array")}} (with 2 elements)</td>
    </tr>
    <tr>
      <td><code>ivec2</code></td>
      <td>{{jsxref("Int32Array")}} (with 2 elements)</td>
    </tr>
    <tr>
      <td><code>bvec2</code></td>
      <td>
        {{jsxref("Array")}} of {{domxref("GLBoolean")}} (with 2
        elements)
      </td>
    </tr>
    <tr>
      <td><code>vec3</code></td>
      <td>{{jsxref("Float32Array")}} (with 3 elements)</td>
    </tr>
    <tr>
      <td><code>ivec3</code></td>
      <td>{{jsxref("Int32Array")}} (with 3 elements)</td>
    </tr>
    <tr>
      <td><code>bvec3</code></td>
      <td>
        {{jsxref("Array")}} of {{domxref("GLBoolean")}} (with 3
        elements)
      </td>
    </tr>
    <tr>
      <td><code>vec4</code></td>
      <td>{{jsxref("Float32Array")}} (with 4 elements)</td>
    </tr>
    <tr>
      <td><code>ivec4</code></td>
      <td>{{jsxref("Int32Array")}} (with 4 elements)</td>
    </tr>
    <tr>
      <td><code>bvec4</code></td>
      <td>
        {{jsxref("Array")}} of {{domxref("GLBoolean")}} (with 4
        elements)
      </td>
    </tr>
    <tr>
      <td><code>mat2</code></td>
      <td>{{jsxref("Float32Array")}} (with 4 elements)</td>
    </tr>
    <tr>
      <td><code>mat3</code></td>
      <td>{{jsxref("Float32Array")}} (with 9 elements)</td>
    </tr>
    <tr>
      <td><code>mat4</code></td>
      <td>{{jsxref("Float32Array")}} (with 16 elements)</td>
    </tr>
    <tr>
      <td><code>sampler2D</code></td>
      <td>{{domxref("GLint")}}</td>
    </tr>
    <tr>
      <td><code>samplerCube</code></td>
      <td>{{domxref("GLint")}}</td>
    </tr>
    <tr>
      <th colspan="2">在 WebGL 2 中新增支持的</th>
    </tr>
    <tr>
      <td><code>uint</code></td>
      <td>{{domxref("GLuint")}}</td>
    </tr>
    <tr>
      <td><code>uvec2</code></td>
      <td>{{jsxref("Uint32Array")}} (with 2 elements)</td>
    </tr>
    <tr>
      <td><code>uvec3</code></td>
      <td>{{jsxref("Uint32Array")}} (with 3 elements)</td>
    </tr>
    <tr>
      <td><code>uvec4</code></td>
      <td>{{jsxref("Uint32Array")}} (with 4 elements)</td>
    </tr>
    <tr>
      <td><code>mat2x3</code></td>
      <td>{{jsxref("Float32Array")}} (with 6 elements)</td>
    </tr>
    <tr>
      <td><code>mat2x4</code></td>
      <td>{{jsxref("Float32Array")}} (with 8 elements)</td>
    </tr>
    <tr>
      <td><code>mat3x2</code></td>
      <td>{{jsxref("Float32Array")}} (with 6 elements)</td>
    </tr>
    <tr>
      <td><code>mat3x4</code></td>
      <td>{{jsxref("Float32Array")}} (with 12 elements)</td>
    </tr>
    <tr>
      <td><code>mat4x2</code></td>
      <td>{{jsxref("Float32Array")}} (with 8 elements)</td>
    </tr>
    <tr>
      <td><code>mat4x3</code></td>
      <td>{{jsxref("Float32Array")}} (with 12 elements)</td>
    </tr>
    <tr>
      <td>any sampler type</td>
      <td>{{domxref("GLint")}}</td>
    </tr>
  </tbody>
</table>

## 示例

```js
var loc = gl.getUniformLocation(program, "u_foobar");
gl.getUniform(program, loc);

//code in vertex-shader
//...
//uniform mat4 uNormalMatrix;
//...
//gl.getUniform(program,gl.getUniformLocation(program,"uNormalMatrix"))
//>Float32Array(16) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLUniformLocation")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
