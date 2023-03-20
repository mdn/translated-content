---
title: <meta>：元数据元素
slug: Web/HTML/Element/meta
---

{{HTMLSidebar}}

**[HTML](/zh-CN/docs/Web/HTML) `<meta>` 元素**表示那些不能由其他 HTML 元相关（meta-related）元素表示的{{Glossary("Metadata","元数据")}}信息。如：{{HTMLElement("base")}}、{{HTMLElement("link")}}、{{HTMLElement("script")}}、{{HTMLElement("style")}} 或 {{HTMLElement("title")}}。

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#元数据内容"
          >元数据内容</a
        >。如果 <a href="/zh-CN/docs/Web/HTML/Global_attributes/itemprop"><code>itemprop</code></a> 属性存在：<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#分段内容"
          >分段内容</a>
      </td>
    </tr>
    <tr>
      <th>允许的内容</th>
      <td>无；这是一个 {{Glossary("void element", "空元素")}}。</td>
    </tr>
    <tr>
      <th>标签省略</th>
      <td>
        由于这是一个空元素，所以必须有开始标签并且不能有结束标签。
      </td>
    </tr>
    <tr>
      <th>允许的父元素</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>、<code
            >&#x3C;meta http-equiv></code>：{{HTMLElement("head")}} 元素。如果
            {{htmlattrxref("http-equiv", "meta")}} 不是编码声明，它也可以放在
            {{HTMLElement("noscript")}} 元素中，它本身在一个
            <code>&#x3C;head></code> 元素内部。
          </li>
          <li>
            <code>&#x3C;meta name></code>：任何可以接受<a
              href="/zh-CN/docs/Web/Guide/HTML/Content_categories#元数据内容"
              >元数据内容</a
            >的元素。
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>：任何可以接受<a
              href="/zh-CN/docs/Web/Guide/HTML/Content_categories#元数据内容"
              >元数据内容</a
            >或<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
              >流式内容</a
            >。
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">默认的无障碍角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有相应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的无障碍角色</th>
      <td>没有允许的<code>角色（role）</code></td>
    </tr>
    <tr>
      <th>DOM 接口</th>
      <td>{{domxref("HTMLMetaElement")}}</td>
    </tr>
  </tbody>
</table>

`<meta>` 元素定义的元数据的类型包括以下几种：

- 如果设置了 {{htmlattrxref("name", "meta")}} 属性，`<meta>` 元素提供的是文档级别（_document-level_）的元数据，应用于整个页面。
- 如果设置了 {{htmlattrxref("http-equiv", "meta")}} 属性，`<meta>` 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 {{htmlattrxref("charset", "meta")}} 属性，`<meta>` 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 {{htmlattrxref("itemprop")}} 属性，`<meta>` 元素提供用户定义的元数据。

## 属性

此元素包括[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

> **备注：** {{htmlattrxref("name", "meta")}} 属性在 {{HTMLElement("meta")}} 元素中具有特殊的语义；另外，当一个 `<meta>` 标签中，有 {{htmlattrxref("name", "meta")}}、{{htmlattrxref("http-equiv", "meta")}} 或者 {{htmlattrxref("charset", "meta")}} 三者中任何一个属性时，{{htmlattrxref("itemprop", "meta")}} 属性不能被使用。

**{{htmlattrdef("charset")}}**

这个属性声明了文档的字符编码。如果使用了这个属性，其值必须是与 ASCII 大小写无关（ASCII case-insensitive）的"`utf-8`"。

- {{htmlattrdef("content")}}
  - : 此属性包含{{htmlattrxref("http-equiv", "meta")}} 或{{htmlattrxref("name", "meta")}} 属性的值，具体取决于所使用的值。
- {{htmlattrdef("http-equiv")}}

  - : 属性定义了一个编译指示指令。这个属性叫做 `http-equiv(alent)` 是因为所有允许的值都是特定 HTTP 头部的名称，如下：

    - `content-security-policy`
      它允许页面作者定义当前页的[内容策略](/zh-CN/docs/Web/Security/CSP/CSP_policy_directives)。内容策略主要指定允许的服务器源和脚本端点，这有助于防止跨站点脚本攻击。

    - `content-type`
      如果使用这个属性，其值必须是"`text/html; charset=utf-8`"。注意：该属性只能用于 [MIME type](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 为 `text/html` 的文档，不能用于 MIME 类型为 XML 的文档。
    - `default-style`

      设置默认 [CSS 样式表](/zh-CN/docs/Web/CSS)组的名称。

    - `x-ua-compatible`
      如果指定，则 `content` 属性必须具有值 "`IE=edge`"。用户代理必须忽略此指示。
    - `refresh`
      这个属性指定：

      - 如果 {{htmlattrxref("content", "meta")}} 只包含一个正整数，则为重新载入页面的时间间隔 (秒)；
      - 如果 {{htmlattrxref("content", "meta")}} 包含一个正整数，并且后面跟着字符串 '`;url=`' 和一个合法的 URL，则是重定向到指定链接的时间间隔 (秒) 无障碍相关考虑：设置了 `refresh` 值的页面可能有时间间隔太短的风险。使用诸如屏幕朗读这样的辅助技术来浏览网页的人可能会由于自动跳转而来不及读完或理解网页的内容。这样不经提示而突然进行的页面刷新也可能会让有视力障碍的人群感到迷惑。

      > **警告：**
      >
      > 设置了 `refresh` 值的页面存在时间间隔过短的风险。借助屏幕阅读器等辅助技术进行导航的用户可能无法在自动重定向之前通读和理解页面内容。突然的、未通知的页面内容更新也可能会让视力低下的人迷失方向。
      >
      > - [MDN Understanding WCAG, Guideline 2.1 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
      > - [MDN Understanding WCAG, Guideline 3.1 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
      > - [Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
      > - [Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
      > - [Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- {{htmlattrdef("name")}}
  - : `name` 和 `content` 属性可以一起使用，以名 - 值对的方式给文档提供元数据，其中 name 作为元数据的名称，content 作为元数据的值。
    在[标准元数据名称](/zh-CN/docs/Web/HTML/Element/meta/name)中查看 HTML 规范等规范中定义的标准元数据名称。

## 示例

```html
<meta charset="utf-8">

<!-- Redirect page after 3 seconds -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org">
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [标准元数据名称](/zh-CN/docs/Web/HTML/Element/meta/name)
- [学习：`<meta>`](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#metadata_the_meta_element)
- [viewport 元标签](/zh-CN/docs/Web/HTML/Viewport_meta_tag)
