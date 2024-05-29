---
title: <time>：（日期）时间元素
slug: Web/HTML/Element/time
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

**`<time>`** [HTML](/zh-CN/docs/Web/HTML) 元素用来表示一个特定的时间段。该元素可包含 `datetime` 属性，用于将日期转换为机器可读格式，从而获得更好的搜索引擎结果或自定义功能（如提醒）。

它可以代表以下含义之一：

- 24 小时时钟上的时间。
- [公历](https://zh.wikipedia.org/wiki/公历)中的精确日期（可选时间和时区信息）。
- [有效时间长度](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-duration-string)。

{{EmbedInteractiveExample("pages/tabbed/time.html", "tabbed-shorter")}}

## 属性

与所有其他 HTML 元素类似，此元素支持[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `datetime`
  - : 该属性表示此元素的时间和/或日期，并且属性值必须符合下文所描述的格式。

## 使用说明

该元素用于以机器可读格式显示日期和时间。例如，它可以帮助用户代理将事件添加到用户的日历中。

在使用公历之前的日期时不应使用该元素（因为这些日期的计算比较复杂）。

_日期时间值_（机器可读的日期时间值）是该元素的 `datetime` 属性的值，必须采用正确的格式（见下文）。如果元素没有 `datetime` 属性，**它就不能有任何元素后代**，*日期时间值*就是元素的子文本内容。

### 有效的日期时间值

- 有效的年份字符串
  - : `2011`
- 有效的年月字符串
  - : `2011-11`
- 有效的日期字符串
  - : `2011-11-18`
- 有效的日期字符串（不包含年份）
  - : `11-18`
- 有效的周字符串
  - : `2011-W47`
- 有效的时间字符串

  - : `14:54`

    `14:54:39`

    `14:54:39.929`

- 有效的本地日期时间字符串

  - : `2011-11-18T14:54:39.929`

    `2011-11-18 14:54:39.929`

- 有效的全球日期时间字符串

  - : `2011-11-18T14:54:39.929Z`

    `2011-11-18T14:54:39.929-0400`

    `2011-11-18T14:54:39.929-04:00`

    `2011-11-18 14:54:39.929Z`

    `2011-11-18 14:54:39.929-0400`

    `2011-11-18 14:54:39.929-04:00`

- 有效的时长字符串
  - : `PT4H18M3S`

## 示例

### 简单示例

#### HTML

```html
<p>演出于 <time datetime="2018-07-07T20:00:00">20:00</time> 开始。</p>
```

#### 结果

{{EmbedLiveSample('简单示例', 250, 80)}}

### `datetime` 示例

#### HTML

```html
<p>演出于 <time datetime="2001-05-15T19:00">5 月 15 日</time>开始。</p>
```

#### 结果

{{EmbedLiveSample('datetime 示例', 250, 80)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">time</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLTimeElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("data")}} 元素，可用于表示其他类型的值。
