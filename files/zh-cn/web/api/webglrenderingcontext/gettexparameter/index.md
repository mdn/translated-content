---
title: WebGLRenderingContext.getTexParameter()
slug: Web/API/WebGLRenderingContext/getTexParameter
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.getTexParameter()`** 此[WebGL API](/zh-CN/docs/Web/API/WebGL_API)方法返回特定的纹理信息。

## 语法

```js-nolint
getTexParameter(target, pname)
```

### 参数

- target

  - : 一个 {{domxref("GLenum")}} 接口类型的绑定的点 (target). 可能的值有：

    - `gl.TEXTURE_2D`: 一个二维纹理。
    - `gl.TEXTURE_CUBE_MAP`: 一个立方体纹理。
    - 当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}接口，可能会出现以下值：

      - `gl.TEXTURE_3D`: 一个三维纹理。
      - `gl.TEXTURE_2D_ARRAY`: 一个二维纹理数组。

- pname

  - : 一个{{domxref("Glenum")}}接口类型的要查询的信息。可能的值有：

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">pname</th>
          <th scope="col">返回的类型</th>
          <th scope="col">描述</th>
          <th scope="col">可能返回的值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colspan="4">可用的 WebGL 1 的上下文</th>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAG_FILTER</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>纹理的放大滤镜</td>
          <td><code>gl.LINEAR</code> (default value), <code>gl.NEAREST</code>.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MIN_FILTER</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>纹理的缩小滤镜</td>
          <td>
            <code>gl.LINEAR</code>, <code>gl.NEAREST</code>,
            <code>gl.NEAREST_MIPMAP_NEAREST</code>,
            <code>gl.LINEAR_MIPMAP_NEAREST</code>,
            <code>gl.NEAREST</code>_MIPMAP_LINEAR (default value),
            <code>gl.LINEAR_MIPMAP_LINEAR</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_S</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>
            <p>封装的纹理坐标方法<code>s（对应 u 坐标）</code></p>
          </td>
          <td>
            <code>gl.REPEAT</code> (default value), <code>gl.CLAMP_TO_EDGE</code>,
            <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_T</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>封装的纹理坐标方法 <code>t（对应 v 坐标）</code></td>
          <td>
            <code>gl.REPEAT</code> (default value), <code>gl.CLAMP_TO_EDGE</code>,
            <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
        <tr>
          <th colspan="4">
            使用 {{domxref("EXT_texture_filter_anisotropic")}}
            接口增加可用的扩展方法/属性
          </th>
        </tr>
        <tr>
          <td><code>ext.TEXTURE_MAX_ANISOTROPY_EXT</code></td>
          <td>{{domxref("GLfloat")}}</td>
          <td>纹理所有方向的最大值</td>
          <td>一个浮点型的任意值。</td>
        </tr>
        <tr>
          <th colspan="4">使用 WebGL 2 上下文之后增加的可用方法/属性</th>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_BASE_LEVEL</code></td>
          <td>{{domxref("GLint")}}</td>
          <td>纹理贴图层级</td>
          <td>一个整型任意值。</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_COMPARE_FUNC</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>比较方法</td>
          <td>
            <code>gl.LEQUAL</code> (default value), <code>gl.GEQUAL</code>,
            <code>gl.LESS</code>, <code>gl.GREATER</code>, <code>gl.EQUAL</code>,
            <code>gl.NOTEQUAL</code>, <code>gl.ALWAYS</code>, <code>gl.NEVER</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_COMPARE_MODE</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>纹理的比较模式</td>
          <td>
            <code>gl.NONE</code> (default value),
            <code>gl.COMPARE_REF_TO_TEXTURE</code>.
          </td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_IMMUTABLE_FORMAT</code></td>
          <td>{{domxref("GLboolean")}}</td>
          <td>纹理的格式和尺寸是否可变</td>
          <td>true 或者 false.</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_IMMUTABLE_LEVELS</code></td>
          <td>{{domxref("GLuint")}}</td>
          <td>纹理的可变等级</td>
          <td>无符号整型任意值。</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAX_LEVEL</code></td>
          <td>{{domxref("GLint")}}</td>
          <td>贴图数组层级的最大值</td>
          <td>整型任意值。</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MAX_LOD</code></td>
          <td>{{domxref("GLfloat")}}</td>
          <td>纹理细致程度的最大值</td>
          <td>浮点型任意值。</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_MIN_LOD</code></td>
          <td>{{domxref("GLfloat")}}</td>
          <td>纹理细致程度的最小值</td>
          <td>浮点型任意值。</td>
        </tr>
        <tr>
          <td><code>gl.TEXTURE_WRAP_R</code></td>
          <td>{{domxref("GLenum")}}</td>
          <td>封装的纹理坐标方法 <code>r</code></td>
          <td>
            <code>gl.REPEAT</code> (default value), <code>gl.CLAMP_TO_EDGE</code>,
            <code>gl.MIRRORED_REPEAT</code>.
          </td>
        </tr>
      </tbody>
    </table>

### 返回值

返回需要的纹理信息 (和 `pname`类型相同). 如果发生错误，就返回{{jsxref("null")}}.

## 示例

```js
gl.getTexParameter(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
