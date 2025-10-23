---
title: WebGLRenderingContext：blendFunc() 方法
slug: Web/API/WebGLRenderingContext/blendFunc
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.blendFunc()`** 方法定义了使用哪个函数来作为混合像素的算法。

## 语法

```js-nolint
blendFunc(sfactor, dfactor)
```

### 参数

- `sfactor`
  - : 一个指定源混合因子的乘数的 {{domxref("WebGL_API.Types", "GLenum")}}。默认值为 `gl.ONE`。有关可能的值，请参见下方。
- `dfactor`
  - : 一个指定目标混合因子的乘数的 {{domxref("WebGL_API.Types", "GLenum")}}。默认值为 `gl.ZERO`。有关可能的值，请参见下方。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- 如果 _sfactor_ 或 _dfactor_ 不是列出的可能值之一，则抛出 `gl.INVALID_ENUM` 错误。
- 如果使用恒定的颜色和恒定的 alpha 值作为源和目标因子，则抛出 `gl.INVALID_ENUM` 错误。

## 常量

下列常量可用于 _sfactor_ 和 _dfactor_。

混合颜色的公式可以这样描述：color(RGBA) = (sourceColor \* _sfactor_) + (destinationColor \* _dfactor_)。RBGA 值在 0 到 1 之间。

在以下表格中，R<sub>S</sub>、G<sub>S</sub>、B<sub>S</sub>、A<sub>S</sub> 分别表示源颜色的*红色*、_绿色_、*蓝色*和 _alpha_ 分量，而 R<sub>D</sub>、G<sub>D</sub>、B<sub>D</sub>、A<sub>D</sub> 分别表示目标颜色的*红色*、_绿色_、*蓝色*和 _alpha_ 分量。它们都是介于 0 到 1 之间（包含）的值。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">常量</th>
      <th scope="col">因子</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.ZERO</code></td>
      <td>0,0,0,0</td>
      <td>将所有颜色乘以 0。</td>
    </tr>
    <tr>
      <td><code>gl.ONE</code></td>
      <td>1,1,1,1</td>
      <td>将所有颜色乘以 1。</td>
    </tr>
    <tr>
      <td><code>gl.SRC_COLOR</code></td>
      <td>R<sub>S</sub>, G<sub>S</sub>, B<sub>S</sub>, A<sub>S</sub></td>
      <td>将所有颜色与源颜色相乘。</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_SRC_COLOR</code></td>
      <td>
        1-R<sub>S</sub>, 1-G<sub>S</sub>, 1-B<sub>S</sub>, 1-A<sub>S</sub>
      </td>
      <td>将所有颜色与 1 减去每个源颜色相乘。</td>
    </tr>
    <tr>
      <td><code>gl.DST_COLOR</code></td>
      <td>R<sub>D</sub>, G<sub>D</sub>, B<sub>D</sub>, A<sub>D</sub></td>
      <td>将所有颜色与目标颜色相乘。</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_DST_COLOR</code></td>
      <td>
        1-R<sub>D</sub>, 1-G<sub>D</sub>, 1-B<sub>D</sub>, 1-A<sub>D</sub>
      </td>
      <td>将所有颜色与 1 减去每个目标颜色相乘。</td>
    </tr>
    <tr>
      <td><code>gl.SRC_ALPHA</code></td>
      <td>A<sub>S</sub>, A<sub>S</sub>, A<sub>S</sub>, A<sub>S</sub></td>
      <td>将所有颜色与源 alpha 值相乘。</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_SRC_ALPHA</code></td>
      <td>
        1-A<sub>S</sub>, 1-A<sub>S</sub>, 1-A<sub>S</sub>, 1-A<sub>S</sub>
      </td>
      <td>将所有颜色与 1 减去源 alpha 值相乘。</td>
    </tr>
    <tr>
      <td><code>gl.DST_ALPHA</code></td>
      <td>A<sub>D</sub>, A<sub>D</sub>, A<sub>D</sub>, A<sub>D</sub></td>
      <td>将所有颜色与目标 alpha 值相乘。</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_DST_ALPHA</code></td>
      <td>
        1-A<sub>D</sub>, 1-A<sub>D</sub>, 1-A<sub>D</sub>, 1-A<sub>D</sub>
      </td>
      <td>将所有颜色与 1 减去目标 alpha 值相乘。</td>
    </tr>
    <tr>
      <td><code>gl.CONSTANT_COLOR</code></td>
      <td>R<sub>C</sub>, G<sub>C</sub>, B<sub>C</sub>, A<sub>C</sub></td>
      <td>将所有颜色与一个常数颜色相乘。</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_CONSTANT_COLOR</code></td>
      <td>
        1-R<sub>C</sub>, 1-G<sub>C</sub>, 1-B<sub>C</sub>, 1-A<sub>C</sub>
      </td>
      <td>将所有颜色与 1 减去一个常数颜色相乘。</td>
    </tr>
    <tr>
      <td><code>gl.CONSTANT_ALPHA</code></td>
      <td>A<sub>C</sub>, A<sub>C</sub>, A<sub>C</sub>, A<sub>C</sub></td>
      <td>将所有颜色与一个常数 alpha 值相乘。</td>
    </tr>
    <tr>
      <td><code>gl.ONE_MINUS_CONSTANT_ALPHA</code></td>
      <td>
        1-A<sub>C</sub>, 1-A<sub>C</sub>, 1-A<sub>C</sub>, 1-A<sub>C</sub>
      </td>
      <td>将所有颜色与 1 减去一个常数 alpha 值相乘。</td>
    </tr>
    <tr>
      <td><code>gl.SRC_ALPHA_SATURATE</code></td>
      <td>
        min(A<sub>S</sub>, 1 - A<sub>D</sub>), min(A<sub>S</sub>, 1 -
        A<sub>D</sub>), min(A<sub>S</sub>, 1 - A<sub>D</sub>), 1
      </td>
      <td>
        将 RGB 颜色乘以源 alpha 值和 1 减去目标 alpha 值中的较小值。alpha 值乘以 1。
      </td>
    </tr>
  </tbody>
</table>

## 示例

要使用混合函数，你首先必须使用具有 `gl.BLEND` 参数的 {{domxref("WebGLRenderingContext.enable()")}} 来激活混合。

```js
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_COLOR, gl.DST_COLOR);
```

要获取当前的混合函数，可以查询 `BLEND_SRC_RGB`、`BLEND_SRC_ALPHA`、`BLEND_DST_RGB` 和 `BLEND_DST_ALPHA` 常量，这些常量会返回对应的混合函数常量值。

```js
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_COLOR, gl.DST_COLOR);
gl.getParameter(gl.BLEND_SRC_RGB) == gl.SRC_COLOR;
// true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.blendColor()")}}
- {{domxref("WebGLRenderingContext.blendEquation()")}}
