---
title: 表单控件兼容性列表
slug: Learn/Forms/Property_compatibility_table_for_form_controls
---

{{learnsidebar}}

下面的兼容性表格尝试总结 HTML 表单的 CSS 支持状况。由于 CSS 和 HTML 表单的复杂性，不能把这些表格当作完善的参考。但是，它们可以让你很好地洞察什么能做什么不能做，这将会对你学习使用有很好地帮助。

## 如何阅读表格

### 值

对于每个属性，有四种可能地取值：

- ✅ 支持
  - : 此属性具有相当一致的跨浏览器支持。在某些极端情况下，你可能仍然会面临奇怪的副作用。
- ⚠️ 部分支持
  - : 尽管这个属性会生效，你还是会经常面对奇怪的副作用和不一致性。你应该尽力避免这些属性，除非你已经深知那些副作用。
- ❌ 不支持
  - : 此属性就是不工作或者表现得非常不一致，所以并不可靠。
- 不适用
  - : 此属性对这种类型的组件没有意义。

### 渲染

对于每个属性有两种可能的渲染方式：

- N (Normal)
  - : 表示这个属性会像设置的那样应用。
- T (Tweaked)
  - : 表示这个属性需要通过下列的额外规则来使用：

```css
* {
  /* Turn off the native look and feel */
  -webkit-appearance: none;
  appearance: none;

  /* for Internet Explorer */
  background: none;
}
```

## 兼容性表格

### 全局行为

对许多浏览器来说，许多行为在全局范围内都是通用的：

- {{cssxref("border")}}、{{cssxref("background")}}、{{cssxref("border-radius")}}、{{cssxref("height")}}
  - : 在某些浏览器中，这里的任意一个属性可能影响组件的部分或全部的原生外观。小心使用。
- {{cssxref("line-height")}}
  - : 不同浏览器支持情况不同，避免使用。
- {{cssxref("text-decoration")}}
  - : Opera 的表单组件不支持这个属性。
- {{cssxref("text-overflow")}}
  - : Opera、Safari 和 IE9 的表单组件不支持这个属性。
- {{cssxref("text-shadow")}}
  - : Opera 的表单组件不支持 {{cssxref("text-shadow")}}，IE9 则是整个表单都不支持这个属性。

### 文本字段

参见 `{{htmlelement("input/text", "text")}}`、`{{htmlelement("input/search", "search")}}` 和 `{{htmlelement("input/password", "password")}}` input 类型。

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td
        style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1][2]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            WebKit 浏览器（主要在 Mac OSX 和 iOS 上）的搜索字段使用原生的样式和行为。因此，需要使用
            <code>-webkit-appearance:none</code> 才能将这个属性应用到搜索字段上。
          </li>
          <li>
            Windows 7 的 Internet Explorer 9 不会应用到边框上，除非应用了
            <code>background:none</code>。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1][2]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            WebKit 浏览器（主要在 Mac OSX 和 iOS 上）的搜索字段使用原生的样式和行为。因此，需要使用
            <code>-webkit-appearance:none</code> 才能将这个属性应用到搜索字段上。
          </li>
          <li>
            Windows 7 的 Internet Explorer 9 不会应用到边框上，除非应用了
            <code>background:none</code>。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1][2]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            WebKit 浏览器（主要在 Mac OSX 和 iOS 上）的搜索字段使用原生的样式和行为。因此，需要使用
            <code>-webkit-appearance:none</code> 才能将这个属性应用到搜索字段上。
          </li>
          <li>
            Windows 7 的 Internet Explorer 9 不会应用到边框上，除非应用了
            <code>background:none</code>。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}<sup>[1]</sup>
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            如果没有设置 {{cssxref("border-color")}} 属性，一些基于 WebKit 的浏览器会将
            {{cssxref("color")}} 属性应用到边框上，颜色和
            <code>{{htmlelement("textarea")}}</code> 的字体颜色一样。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>查看有关 {{cssxref("line-height")}} 的注释</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td>查看有关 Opera 的注释</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            IE9 只在 <code>{{htmlelement("textarea")}}</code>
            上支持这个属性，而 Opera 只在单行文本字段中支持。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            WebKit 浏览器（主要在 Mac OSX 和 iOS 上）的搜索字段使用原生的样式和行为。因此，需要使用
            <code>-webkit-appearance:none</code> 才能将这个属性应用到搜索字段上。
          </li>
          <li>
            Windows 7 的 Internet Explorer 9 不会应用到边框上，除非应用了
            <code>background:none</code>。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1][2]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            WebKit 浏览器（主要在 Mac OSX 和 iOS 上）的搜索字段使用原生的样式和行为。因此，需要使用
            <code>-webkit-appearance:none</code> 才能将这个属性应用到搜索字段上。
          </li>
          <li>
            Windows 7 的 Internet Explorer 9 不会应用到边框上，除非应用了
            <code>background:none</code>。
          </li>
          <li>
            在 Opera 上，只有当边框被明确设定时，{{cssxref("border-radius")}} 属性才会被应用。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 不支持这个属性。</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### 按钮

参见 `{{htmlelement("input/button", "button")}}`、`{{htmlelement("input/submit", "submit")}}` 和 `{{htmlelement("input/reset", "reset")}}` input 类型，以及 `{{htmlelement("button")}}` 元素。

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            这个属性不能应用于 Mac OSX 或 iOS 上基于 WebKit 的浏览器。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            这个属性不能应用于 Mac OSX 或 iOS 上基于 WebKit 的浏览器。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>查看 {{cssxref("line-height")}} 的注释。</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            在 Opera 上，只有当边框被明确设定时，{{cssxref("border-radius")}} 属性才会被应用。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 不支持这个属性。</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### 数字

参见 `{{htmlelement("input/number", "number")}}` input 类型。没有一种标准的方式改变数字字段的样式，值得注意的是 Safari 上的数字字段不在这个范围内。

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            在 Opera 上，数字选择器缩小时，可能会隐藏字段中的内容。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            在 Opera 上，数字选择器缩小时，可能会隐藏字段中的内容。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>查看有关 {{cssxref("line-height")}} 的注释。</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td rowspan="3">
        <p>
          支持，但浏览器之间的不一致性太多，所以并不可靠。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
    </tr>
  </tbody>
</table>

### 复选框和单选按钮

参见 `{{htmlelement("input/checkbox", "checkbox")}}` 和 `{{htmlelement("input/radio", "radio")}}` input 类型。

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            一些浏览器会添加额外的边缘，另一些会拉伸组件。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            一些浏览器会添加额外的边缘，另一些会拉伸组件。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td
       style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### 选择框（单行）

参见 `{{htmlelement("select")}}`、`{{htmlelement("optgroup")}}` 和 `{{htmlelement("option")}}` 元素。

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            这个属性在 <code>{{htmlelement("select")}}</code>
            元素上一切正常，但不能用于 <code>{{htmlelement("option")}}</code>
            或 <code>{{htmlelement("optgroup")}}</code> 元素。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[2]</sup>
      </td>
      <td>
        <ol>
          <li>
            这个属性可以应用，但在 Mac OSX 上，但 Mac OSX 上浏览器之间的以不一致的方向显示。
          </li>
          <li>
            这个属性在 <code>{{htmlelement("select")}}</code>
            元素上一切正常，但不能用于
            <code>{{htmlelement("option")}}</code> 和
            <code>{{htmlelement("optgroup")}}</code> 元素。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            在 Mac OSX 上，基于 WebKit 的浏览器不支持将这个属性用于原生组件，它们和 Opera
            在 <code>{{htmlelement("option")}}</code> 和 <code>{{htmlelement("optgroup")}}</code>
            元素上完全不支持这个属性。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            在 Mac OSX 上，基于 WebKit 的浏览器不支持将这个属性用于原生组件，它们和 Opera
            在 <code>{{htmlelement("option")}}</code> 和 <code>{{htmlelement("optgroup")}}</code>
            元素上完全不支持这个属性。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            IE9 不支持将这个属性用于
            <code>{{htmlelement("select")}}</code>、<code>{{htmlelement("option")}}</code>
            和 <code>{{htmlelement("optgroup")}}</code> 元素；Mac OSX
            上基于 WebKit 的浏览器不支持将这个属性应用于
            <code>{{htmlelement("option")}}</code> 和
            <code>{{htmlelement("optgroup")}}</code> 元素。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Windows 7 上的 IE9 和 Mac OSX 上基于 WebKit 的浏览器不支持这个组件上的属性。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            只有 Firefox 提供了对这个属性的完全支持。Opera
            完全不支持这个属性，而其他浏览器只提供了对
            <code>{{htmlelement("select")}}</code> 元素的支持。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1][2]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1][2]</sup>
      </td>
      <td>
        <ol>
          <li>
            大部分浏览器仅支持将这个属性用于
            <code>{{htmlelement("select")}}</code> 元素。
          </li>
          <li>IE9 不支持这个属性。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1][2]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1][2]</sup>
      </td>
      <td>
        <ol>
          <li>
            大部分浏览器仅支持将这个属性用于
            <code>{{htmlelement("select")}}</code> 元素。
          </li>
          <li>IE9 不支持这个属性。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            大部分浏览器仅支持将这个属性用于
            <code>{{htmlelement("select")}}</code> 元素。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td rowspan="3">
        <ol>
          <li>
            大部分浏览器仅支持将这个属性用于
            <code>{{htmlelement("select")}}</code> 元素。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

注意，Firefox 没有提供用于修改 `{{htmlelement("select")}}` 元素的向下箭头的方法。

### 选择框（多行）

参见 `{{htmlelement("select")}}`、`{{htmlelement("optgroup")}}` 和 `{{htmlelement("option")}}` 元素，以及 [`size` 属性](/zh-CN/docs/Web/HTML/Attributes/size)。

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Opera 在 <code>{{htmlelement("select")}}</code>
            元素上不支持 {{cssxref("padding-top")}} 和
            {{cssxref("padding-bottom")}}。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>参见有关 {{cssxref("line-height")}} 的注释。</td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            IE9 在 <code>{{htmlelement("select")}}</code>、
            <code>{{htmlelement("option")}}</code> 和
            <code>{{htmlelement("optgroup")}}</code> 元素上不支持这个属性；Mac OSX
            上基于 WebKit 的浏览器在 <code>{{htmlelement("option")}}</code>
            和 <code>{{htmlelement("optgroup")}}</code> 元素上不支持这个属性。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Windows 7 上的 IE9 和 Mac OSX 上基于 WebKit 的浏览器，不支持这个组件上的这个属性。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>只被 Firefox and IE9+ 支持。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            大部分浏览器仅支持将这个属性用于
            <code>{{htmlelement("select")}}</code> 元素。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            在 Opera 上，只有当边框被明确设定时，{{cssxref("border-radius")}} 属性才会被应用。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 不支持这个属性。</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### 数据列表

参见 `{{htmlelement("datalist")}}` 和 `{{htmlelement("input")}}` 元素，以及 [`list` 属性](/zh-CN/docs/Web/HTML/Attributes/list)。

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### 文件选择器

参见 `{{htmlelement("input/file", "file")}}` input 类型。

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            支持，但浏览器之间的不一致性太多，所以并不可靠。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>许多浏览器将这个属性应用到选择按钮上。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            它表现的或多或少的像一个组件额外的左边距。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            支持，但浏览器之间的不一致性太多，所以并不可靠。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 不支持这个属性。</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

### 日期选择器

参见 `{{htmlelement("input/date", "date")}}` 和 `{{htmlelement("input/time", "time")}}` input 类型。很多属性都被浏览器支持，但浏览器之间的不一致性太多，所以并不可靠。

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

### 颜色选择器

参见 `{{htmlelement("input/color", "color")}}` input 类型：

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            Opera 以与选择组件一样的限制来处理它。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            Opera 以与选择组件一样的限制来处理它。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td rowspan="3">
        <ol>
          <li>
            支持，但浏览器之间的不一致性太多，所以并不可靠。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

### 标量值和进度

参见 `{{htmlelement("meter")}}` 和 `{{htmlelement("progress")}}` 元素：

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            当 {{cssxref("padding")}} 属性被引用于一个 tweaked
            元素时，Chrome 会隐藏 <code>{{htmlelement("progress")}}</code>
            和 <code>{{htmlelement("meter")}}</code> 元素。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td rowspan="3">
        <ol>
          <li>
            支持，但浏览器之间的不一致性太多，所以并不可靠。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

### 范围

参见 `{{htmlelement("input/range", "range")}}` input 类型。没有一种标准的方式来改变范围小组件的样式，Opera 也没有调整范围小组件默认渲染的方法。

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>
            Chrome 和 Opera 在组件周围添加了额外的空白，而
            Windows 7 上的 Opera 则拉伸范围选择器的滑块。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td>
        <ol>
          <li>
            {{cssxref("padding")}} 属性被应用时，不会有任何视觉效果。
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td rowspan="3">
        <ol>
          <li>
            支持，但浏览器之间的不一致性太多，所以并不可靠。
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ❌ 不支持<sup>[1]</sup>
      </td>
    </tr>
  </tbody>
</table>

### 图像按钮

参见 `{{htmlelement("input/image", "image")}}` input 类型：

<table>
  <thead>
    <tr>
      <th scope="col">属性</th>
      <th scope="col" style="text-align: center">N</th>
      <th scope="col" style="text-align: center">T</th>
      <th scope="col">注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>CSS 盒子模型</em></th>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("width")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("height")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("border")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("margin")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="vertical-align: top">
        {{cssxref("padding")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>文本和字体</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("color")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("font")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("letter-spacing")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-align")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-decoration")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-indent")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-overflow")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("text-transform")}}
      </th>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td style="text-align: center; vertical-align: top">不适用</td>
      <td></td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <th colspan="4" scope="col"><em>边框和背景</em></th>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("background")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td style="text-align: center; vertical-align: top">
        ✅ 支持
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("border-radius")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 不支持这个属性。</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row" style="white-space: nowrap; vertical-align: top">
        {{cssxref("box-shadow")}}
      </th>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td style="text-align: center; vertical-align: top">
        ⚠️ 部分支持<sup>[1]</sup>
      </td>
      <td>
        <ol>
          <li>IE9 不支持这个属性。</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

## 参见

### 学习路径

- [创建我的第一个表单](/zh-CN/docs/Learn/Forms/Your_first_form)
- [如何构造 HTML 表单](/zh-CN/docs/Learn/Forms/How_to_structure_a_web_form)
- [原生表单控件](/zh-CN/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 input 类型](/zh-CN/docs/Learn/Forms/HTML5_input_types)
- [其他表单控件](/zh-CN/docs/Learn/Forms/Other_form_controls)
- [UI 伪类](/zh-CN/docs/Learn/Forms/UI_pseudo-classes)
- [样式化 HTML 表单](/zh-CN/docs/Learn/Forms/Styling_web_forms)
- [表单数据校验](/zh-CN/docs/Learn/Forms/Form_validation)
- [发送表单数据](/zh-CN/docs/Learn/Forms/Sending_and_retrieving_form_data)

### 进阶内容

- [使用 JavaScript 发送表单](/zh-CN/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [如何构建自定义表单控件](/zh-CN/docs/Learn/Forms/How_to_build_custom_form_controls)
- [旧式浏览器中的 HTML 表单](/zh-CN/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [高级 HTML 表单样式](/zh-CN/docs/Learn/Forms/Advanced_form_styling)
- [表单组件兼容性列表](/zh-CN/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
