---
title: HTMLTimeElement：dateTime 属性
slug: Web/API/HTMLTimeElement/dateTime
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

**`HTMLTimeElement.dateTime`** 是一个反映 [`datetime`](/zh-CN/docs/Web/HTML/Element/time#datetime) HTML 属性的字符串，包含元素日期和时间值的机器可读形式。

字符串的格式必须遵循以下 HTML 微语法之一：

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">微语法</th>
      <th scope="col">描述</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>有效月份字符串</td>
      <td><em>YYYY</em><code>-</code><em>MM</em></td>
      <td><code>2011-11</code>, <code>2013-05</code></td>
    </tr>
    <tr>
      <td>有效日期字符串</td>
      <td><em>YYYY</em><code>-</code><em>MM</em><code>-</code><em>DD</em></td>
      <td><code>1887-12-01</code></td>
    </tr>
    <tr>
      <td>有效的无年份日期字符串</td>
      <td><em>MM</em><code>-</code><em>DD</em></td>
      <td><code>11-12</code></td>
    </tr>
    <tr>
      <td>有效时间字符串</td>
      <td>
        <em>HH</em><code>:</code><em>MM</em><br /><em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><br /><em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><code>.</code><em>mmm</em>
      </td>
      <td>
        <code>23:59</code><br /><code>12:15:47</code><br /><code
          >12:15:52.998</code
        >
      </td>
    </tr>
    <tr>
      <td>有效的本地日期和时间字符串</td>
      <td>
        <em>YYYY</em><code>-</code><em>MM</em><code>-</code><em>DD</em>
        <em>HH</em><code>:</code><em>MM</em><br /><em>YYYY</em><code>-</code
        ><em>MM</em><code>-</code><em>DD</em> <em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><br /><em>YYYY</em><code>-</code
        ><em>MM</em><code>-</code><em>DD</em> <em>HH</em><code>:</code
        ><em>MM</em><code>:</code><em>SS</em><code>.</code><em>mmm</em><br /><em
          >YYYY</em
        ><code>-</code><em>MM</em><code>-</code><em>DD</em><code>T</code
        ><em>HH</em><code>:</code><em>MM</em><br /><em>YYYY</em><code>-</code
        ><em>MM</em><code>-</code><em>DD</em><code>T</code><em>HH</em
        ><code>:</code><em>MM</em><code>:</code><em>SS</em><br /><em>YYYY</em
        ><code>-</code><em>MM</em><code>-</code><em>DD</em><code>T</code
        ><em>HH</em><code>:</code><em>MM</em><code>:</code><em>SS</em
        ><code>.</code><em>mmm</em>
      </td>
      <td>
        <code
          >2013-12-25 11:12<br />1972-07-25 13:43:07<br />1941-03-15
          07:06:23.678<br />2013-12-25T11:12<br />1972-07-25T13:43:07<br />1941-03-15T07:06:23.678</code
        >
      </td>
    </tr>
    <tr>
      <td>有效的时区偏差字符串</td>
      <td>
        <code>Z</code><br /><code>+</code><em>HHMM</em><br /><code>+</code
        ><em>HH</em><code>:</code><em>MM</em><br /><code>-</code><em>HHMM</em
        ><br /><code>-</code><em>HH</em><code>:</code><em>MM</em>
      </td>
      <td>
        <code>Z<br />+0200<br />+04:30<br />-0300<br />-08:00</code>
      </td>
    </tr>
    <tr>
      <td>有效的全局日期和时间字符串</td>
      <td>
        <em
          >有效的本地日期和时间字符串后跟着有效的时区偏差字符串的任意组合</em
        >
      </td>
      <td>
        <code
          >2013-12-25 11:12+0200<br />1972-07-25 13:43:07+04:30<br />1941-03-15
          07:06:23.678Z<br />2013-12-25T11:12-08:00</code
        >
      </td>
    </tr>
    <tr>
      <td>有效周字符串</td>
      <td><em>YYYY</em><code>-W</code><em>WW</em></td>
      <td><code>2013-W46</code></td>
    </tr>
    <tr>
      <td>四个或更多 ACSII 数字</td>
      <td><em>YYYY</em></td>
      <td><code>2013</code>, <code>0001</code></td>
    </tr>
    <tr>
      <td>有效的持续时间字符串</td>
      <td>
        <code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>S</code
        ><br /><code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>.</code>X<code
          >S</code
        ><br /><code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>.</code>XX<code
          >S</code
        ><br /><code>P</code><em>d</em><code>D</code><code>T</code><em>h</em
        ><code>H</code><em>m</em><code>M</code><em>s</em><code>.</code>XXX<code
          >S</code
        ><br /><code>P</code><code>T</code><em>h</em><code>H</code><em>m</em
        ><code>M</code><em>s</em><code>S</code><br /><code>P</code><code>T</code
        ><em>h</em><code>H</code><em>m</em><code>M</code><em>s</em
        ><code>.</code>X<code>S</code><br /><code>P</code><code>T</code
        ><em>h</em><code>H</code><em>m</em><code>M</code><em>s</em
        ><code>.</code>XX<code>S</code><br /><code>P</code><code>T</code
        ><em>h</em><code>H</code><em>m</em><code>M</code><em>s</em
        ><code>.</code>XXX<code>S</code><br /><em>w</em><code>w </code><em>d</em
        ><code>d </code><em>h</em><code>h </code><em>m</em><code>m </code
        ><em>s</em><code>s</code>
      </td>
      <td>
        <code
          >P12DT7H12M13S<br />P12DT7H12M13.3S<br />P12DT7H12M13.45S<br />P12DT7H12M13.455S<br />PT7H12M13S<br />PT7H12M13.2S<br />PT7H12M13.56S<br />PT7H12M13.999S<br />7d
          5h 24m 13s</code
        >
      </td>
    </tr>
  </tbody>
</table>

## 值

一个字符串。

## 示例

```js
// 假设 HTML 中有 <time id="t"> 元素
const t = document.getElementById("t");
t.dateTime = "6w 5h 34m 5s";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它所属的 {{domxref("HTMLTimeElement")}} 接口。
