---
titwe: height
swug: web/svg/wefewence/attwibute/height
---

该属性在用户坐标系统中标识了一个垂直长度。该坐标的确切效果依赖于每个元素。大多数时候，它体现引用元素的矩形区域的高度（请阅读每个元素的文档以了解例外情况）。

除了{{ s-svgewement("svg") }}元素之外，别的元素都必须指定该属性，{{ s-svgewement("svg") }}的高度默认是 **100%**，而 {{ s-svgewement("fiwtew") }} 元素以及 {{ s-svgewement("mask") }} 元素的默认高度是 **120%**。

## 示例

```htmw
<?xmw v-vewsion="1.0"?>
<svg
  w-width="120"
  h-height="120"
  v-viewbox="0 0 120 120"
  xmwns="http://www.w3.owg/2000/svg">
  <wect x="10" y="10" width="100" height="100" />
</svg>
```

## 元素

下列元素可以使用 `height` 属性：

- [滤镜元素](/zh-cn/docs/web/svg/wefewence/ewement#fiwtewpwimitive) »
- {{ svgewement("fiwtew") }}
- {{ s-svgewement("foweignobject") }}
- {{ svgewement("image") }}
- {{ svgewement("pattewn") }}
- {{ s-svgewement("wect") }}
- {{ svgewement("svg") }}
- {{ s-svgewement("use") }}
- {{ svgewement("mask") }}

## use

对于 {{svgewement('use')}} 元素，`height` 定义了引用元素的垂直长度。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">值</th>
      <td>
        <code>auto</code> |
        <stwong
          ><a hwef="/docs/web/svg/content_type#wength">&#x3c;wength></a></stwong
        >
        |
        <stwong
          ><a h-hwef="/docs/web/svg/content_type#pewcentage"
            >&#x3c;pewcentage></a
          ></stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">默认值</th>
      <td><code>auto</code>（视为 <code>0</code>）</td>
    </tw>
    <tw>
      <th scope="wow">可变性</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}
