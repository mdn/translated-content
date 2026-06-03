---
title: <time>：（日期）时间元素
slug: Web/HTML/Reference/Elements/time
l10n:
  sourceCommit: 835c199410845eed61aaf8439cb2e9719e7e9f98
---

**`<time>`** [HTML](/zh-CN/docs/Web/HTML) 元素用来表示一个特定的时间段。该元素可包含 `datetime` 属性，用于将日期转换为机器可读格式，从而获得更好的搜索引擎结果或自定义功能（如提醒）。

它可以代表以下含义之一：

- 24 小时时钟上的时间。
- [公历](https://zh.wikipedia.org/wiki/公历)中的精确日期（可选时间和时区信息）。
- [有效时间长度](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-duration-string)。

{{InteractiveExample("HTML Demo: &lt;time&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The Cure will be celebrating their 40th anniversary on
  <time datetime="2018-07-07">July 7</time> in London's Hyde Park.
</p>

<p>
  The concert starts at <time datetime="20:00">20:00</time> and you'll be able
  to enjoy the band for at least <time datetime="PT2H30M">2h 30m</time>.
</p>
```

```css interactive-example
time {
  font-weight: bold;
}
```

## 属性

与所有其他 HTML 元素类似，此元素支持[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `datetime`
  - : 该属性表示此元素的时间和/或日期，并且属性值必须符合下文所描述的格式。

## 使用说明

该元素用于以机器可读格式显示日期和时间。例如，它可以帮助用户代理将事件添加到用户的日历中。

在使用公历之前的日期时不应使用该元素（因为这些日期的计算比较复杂）。

_日期时间值_（机器可读的日期时间值）是该元素的 `datetime` 属性的值，必须采用正确的格式（见下文）。如果元素没有 `datetime` 属性，**它就不能有任何元素后代**，*日期时间值*就是元素的子文本内容。

### 有效的日期时间值

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">描述</th>
      <th scope="col">微语法</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>有效月份字符串</td>
      <td><code><em>YYYY</em>-<em>MM</em></code></td>
      <td><code>2011-11</code>、<code>2013-05</code></td>
    </tr>
    <tr>
      <td>有效日期字符串</td>
      <td><code><em>YYYY</em>-<em>MM</em>-<em>DD</em></code></td>
      <td><code>1887-12-01</code></td>
    </tr>
    <tr>
      <td>有效的无年份日期字符串</td>
      <td><code><em>MM</em>-<em>DD</em></code></td>
      <td><code>11-12</code></td>
    </tr>
    <tr>
      <td>有效时间字符串</td>
      <td>
        <code><em>HH</em>:<em>MM</em></code><br />
        <code><em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>23:59</code><br />
        <code>12:15:47</code><br />
        <code>12:15:52.998</code>
      </td>
    </tr>
    <tr>
      <td>有效的本地日期和时间字符串</td>
      <td>
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em><em>HH</em>:<em>MM</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>2013-12-25 11:12</code><br />
        <code>1972-07-25 13:43:07</code><br />
        <code>1941-03-15 07:06:23.678</code><br />
        <code>2013-12-25T11:12</code><br />
        <code>1972-07-25T13:43:07</code><br />
        <code>1941-03-15T07:06:23.678</code>
      </td>
    </tr>
    <tr>
      <td>有效的时区偏差字符串</td>
      <td>
        <code>Z</code><br />
        <code>+<em>HHMM</em></code><br />
        <code>+<em>HH</em>:<em>MM</em></code><br />
        <code>-<em>HHMM</em></code><br />
        <code>-<em>HH</em>:<em>MM</em></code>
      </td>
      <td>
        <code>Z</code><br />
        <code>+0200</code><br />
        <code>+04:30</code><br />
        <code>-0300</code><br />
        <code>-08:00</code>
      </td>
    </tr>
    <tr>
      <td>有效的全局日期和时间字符串</td>
      <td style="max-width:12em">
        有效的本地日期和时间字符串后跟着有效的时区偏差字符串的任意组合
      </td>
      <td>
        <code>2013-12-25 11:12+0200</code><br />
        <code>1972-07-25 13:43:07+04:30</code><br />
        <code>1941-03-15 07:06:23.678Z</code><br />
        <code>2013-12-25T11:12-08:00</code>
      </td>
    </tr>
    <tr>
      <td>有效周字符串</td>
      <td><code><em>YYYY</em>-W<em>WW</em></code></td>
      <td><code>2013-W46</code></td>
    </tr>
    <tr>
      <td>四个或更多 ACSII 数字</td>
      <td><code><em>YYYY</em></code></td>
      <td><code>2013</code>、<code>0001</code></td>
    </tr>
    <tr>
      <td>有效的持续时间字符串</td>
      <td>
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>X</em>S<br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>XX</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>XXX</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>X</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>XX</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>XXX</em>S</code><br />
        <code><em>w</em>w <em>d</em>d <em>h</em>h <em>m</em>m <em>s</em>s</code>
      </td>
      <td>
        <code>P12DT7H12M13S</code><br />
        <code>P12DT7H12M13.3S</code><br />
        <code>P12DT7H12M13.45S</code><br />
        <code>P12DT7H12M13.455S</code><br />
        <code>PT7H12M13S</code><br />
        <code>PT7H12M13.2S</code><br />
        <code>PT7H12M13.56S</code><br />
        <code>PT7H12M13.999S</code><br />
        <code>7d 5h 24m 13s</code>
      </td>
    </tr>
  </tbody>
</table>

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
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
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
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">time</a
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
