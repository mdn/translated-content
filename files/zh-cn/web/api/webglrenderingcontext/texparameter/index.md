---
title: WebGLRenderingContext.texParameter[fi]()
slug: Web/API/WebGLRenderingContext/texParameter
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.texParameter[fi]()`** 方法用于设置纹理参数。

## 语法

```
void gl.texParameterf(GLenum target, GLenum pname, GLfloat param);
void gl.texParameteri(GLenum target, GLenum pname, GLint param);
```

### 参数

- target

  - : {{domxref("GLenum")}} 指定绑定点 (目标)。可能的值：

    - `gl.TEXTURE_2D`: 二维纹理。
    - `gl.TEXTURE_CUBE_MAP`: 立方体纹理。
    - 当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} 时，还可以使用以下值

      - `gl.TEXTURE_3D`: 三维贴图。
      - `gl.TEXTURE_2D_ARRAY`: 二维数组贴图。

`pname` 参数是 {{domxref("Glenum")}} 指定要设置的纹理参数。`param` 参数是 {{domxref("GLfloat")}} 或 {{domxref("GLint")}} 已指定的 `pname`参数的值。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><code>pname</code></th>
      <th scope="col">描述</th>
      <th scope="col"><code>参数</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="3">Available in WebGL 1</th>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAG_FILTER</code></td>
      <td>纹理放大滤波器</td>
      <td><code>gl.LINEAR</code> (默认值), <code>gl.NEAREST</code>.</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_FILTER</code></td>
      <td>纹理缩小滤波器</td>
      <td>
        <code>gl.LINEAR</code>, <code>gl.NEAREST</code>,
        <code>gl.NEAREST_MIPMAP_NEAREST</code>,
        <code>gl.LINEAR_MIPMAP_NEAREST</code>,
        <code>gl.NEAREST_MIPMAP_LINEAR</code> (默认值),
        <code>gl.LINEAR_MIPMAP_LINEAR</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_S</code></td>
      <td>纹理坐标水平填充 <code>s</code></td>
      <td>
        <code>gl.REPEAT</code> (默认值),<code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_T</code></td>
      <td>纹理坐标垂直填充 <code>t</code></td>
      <td>
        <code>gl.REPEAT</code> (默认值),<code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
    <tr>
      <th colspan="3">
        Additionally available when using the
        {{domxref("EXT_texture_filter_anisotropic")}} extension
      </th>
    </tr>
    <tr>
      <td><code>ext.TEXTURE_MAX_ANISOTROPY_EXT</code></td>
      <td>纹理最大向异性</td>
      <td>{{domxref("GLfloat")}} 值。</td>
    </tr>
    <tr>
      <th colspan="3">Additionally available when using a WebGL 2 context</th>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BASE_LEVEL</code></td>
      <td>纹理映射等级</td>
      <td>任何整型值。</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_FUNC</code></td>
      <td>纹理对比函数</td>
      <td>
        <code>gl.LEQUAL</code> (默认值), <code>gl.GEQUAL</code>,
        <code>gl.LESS</code>, <code>gl.GREATER</code>, <code>gl.EQUAL</code>,
        <code>gl.NOTEQUAL</code>, <code>gl.ALWAYS</code>, <code>gl.NEVER</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_COMPARE_MODE</code></td>
      <td>纹理对比模式</td>
      <td>
        <code>gl.NONE</code> (默认值), <code>gl.COMPARE_REF_TO_TEXTURE</code>.
      </td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LEVEL</code></td>
      <td>最大纹理映射数组等级</td>
      <td>任何整型值。</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MAX_LOD</code></td>
      <td>纹理最大细节层次值</td>
      <td>任何整型值。</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_MIN_LOD</code></td>
      <td>纹理最小细节层次值</td>
      <td>任何浮点型值。</td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_WRAP_R</code></td>
      <td>纹理坐标<code>r</code>包装功能</td>
      <td>
        <code>gl.REPEAT</code> (默认值), <code>gl.CLAMP_TO_EDGE</code>,
        <code>gl.MIRRORED_REPEAT</code>.
      </td>
    </tr>
  </tbody>
</table>

### 返回值

`INVALID_ENUM` target 不是合法的值。

`INVALID_OPRATION` 当前目标上没有绑定纹理对象。

## 示例

```js
gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(
  gl.TEXTURE_2D,
  gl.TEXTURE_MIN_FILTER,
  gl.LINEAR_MIPMAP_NEAREST,
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
