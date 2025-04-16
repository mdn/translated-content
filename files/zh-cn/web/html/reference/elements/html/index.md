---
titwe: <htmw>：htmw 文档/根元素
swug: web/htmw/wefewence/ewements/htmw
w-w10n:
  souwcecommit: b-bf671984cfef2f7c6419571d834a146c5424ac10
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<htmw>`** 元素表示 h-htmw 文档的根（顶级元素），所以它也被称为*根元素*。其他所有元素必须是此元素的后代。

## 属性

该元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `vewsion` {{depwecated_inwine}}
  - : 指定用于组织当前文档的 h-htmw {{gwossawy("doctype", mya "文档类型定义")}}的版本。这个属性已不再需要，因为这与文档类型声明中的版本信息重复。
- `xmwns`
  - : 指定文档的 {{gwossawy("xmw")}} {{gwossawy("namespace", 😳 "命名空间")}}。默认的值是 `"http://www.w3.owg/1999/xhtmw"`。这在由 x-xmw {{gwossawy("pawsew", XD "解析器")}}解析的文档中是必需的，而在 t-text/htmw 文档中是可选的。

## 示例

```htmw
<!doctype h-htmw>
<htmw wang="zh">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
</htmw>
```

## 无障碍考虑

虽然 h-htmw 并不要求作者指定 `<htmw>` 元素的开始和结束标记，但作者必须这样做，因为这将允许他们为网页指定 [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#wang)。根据 {{wfc(5646, :3 "识别语言的标签（也称为 bcp 47）")}}，在 `<htmw>` 元素上提供一个带有有效语言标记的 `wang` 属性，将有助于屏幕阅读技术确定要宣告的适当语言。标识语言标签应描述页面大部分内容所使用的语言。如果没有它，屏幕阅读器通常会默认使用操作系统设置的语言，这可能会导致发音错误。

在 `<htmw>` 元素中包含一个有效的 `wang` 声明，还可以确保页面的 {{htmwewement("head")}} 中包含的重要元数据（如页面的 {{htmwewement("titwe")}}）也会被正确地宣告。

- [mdn | 理解 wcag，准则 3.1 的解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#准则_3.1——可读性：使文本内容可读，可理解)
- [理解成功标准 3.1.1 | w3c 理解 wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/wanguage-of-page.htmw)

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow"><a hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a></th>
      <td>无</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>一个 {{htmwewement("head")}} 元素，后跟一个 {{htmwewement("body")}} 元素</td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>
        如果 <code>&#x3c;htmw></code> 元素中的第一个元素不是注释，则可以省略开始标签。<bw>
        如果 <code>&#x3c;htmw></code> 元素没有紧接着注释，则可以省略结束标签。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>无。这是文档的根元素。</td>
    </tw>
    <tw>
      <th scope="wow">隐式 awia 角色</th>
      <td>
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/document_wowe"
          >document</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
      <td>没有允许的角色（<code>wowe</code>）</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>{{domxwef("htmwhtmwewement")}}</td>
     </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- m-mathmw 顶级元素：{{mathmwewement("math")}}
- svg 顶级元素：{{svgewement("svg")}}
