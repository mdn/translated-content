---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

spellcheck [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)是枚举属性，定义是否可以检查元素的拼写错误。它可以具有以下值：

- `true`, 设置在可能的情况下会去检查元素内容的拼写错误;
- `false`, 设置在可能的情况下关闭对元素内容拼写检查。

如果没有设置这个属性，默认值由元素自身类型和浏览器设置决定。默认值也可以被继承，当有祖先元素的 _spellcheck_ 设置为 `true` 的情况下，子元素的默认值也是 `true`。

你可以参考这篇文章的例子来使用这个属性。

这个属性是枚举型而不是布尔类型。这意味着显式设置其中一个值 true 或 false 是强制性的，如果使用简写 `<label spellcheck>Example Label</label>` 是不行的。正确的用法是`<label spellcheck="true">Example Label</label>`.

这个属性仅仅是浏览器上的提示：浏览器并不会强制去检查拼写错误，通常不可编辑的元素是不会去检查拼写错误的，就算它的 spellcheck 属性被设置为 true 而且浏览器支持拼写检查。

各个浏览器的默认设置和元素依赖：

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>浏览器</th>
      <th>{{ HTMLElement("html") }}</th>
      <th>{{ HTMLElement("textarea") }}</th>
      <th>{{ HTMLElement("input") }}</th>
      <th>其他</th>
      <th>附注</th>
    </tr>
    <tr>
      <td rowspan="3">Firefox</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><em>inherited</em></td>
      <td>当 <code>layout.spellcheckDefault</code> 值为 <code>0</code></td>
    </tr>
    <tr>
      <td>
        <strong><code>false</code></strong>
      </td>
      <td>
        <strong><code>true</code></strong>
      </td>
      <td>
        <strong><em>inherited</em></strong>
      </td>
      <td>
        <strong><em>inherited</em></strong>
      </td>
      <td>
        <strong
          >当 <code>layout.spellcheckDefault</code> 值为 <code>1</code> (default
          value)</strong
        >
      </td>
    </tr>
    <tr>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><em>inherited</em></td>
      <td>当 <code>layout.spellcheckDefault</code> 值为 <code>2</code></td>
    </tr>
    <tr>
      <td rowspan="3">Seamonkey</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><em>inherited</em></td>
      <td>当 <code>layout.spellcheckDefault</code> 值为 <code>0</code></td>
    </tr>
    <tr>
      <td>
        <strong><code>false</code></strong>
      </td>
      <td>
        <strong><code>true</code></strong>
      </td>
      <td>
        <strong><em>inherited</em></strong>
      </td>
      <td>
        <strong><em>inherited</em></strong>
      </td>
      <td>
        <strong
          >当 <code>layout.spellcheckDefault</code> 值为 1<strong
            >（默认如此）</strong
          ></strong
        >
      </td>
    </tr>
    <tr>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td><code>true</code></td>
      <td><em>inherited</em></td>
      <td>当 <code>layout.spellcheckDefault</code> 值为 <code>2</code></td>
    </tr>
    <tr>
      <td rowspan="3">Camino</td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><code>false</code></td>
      <td><em>inherited</em></td>
      <td>当 <code>layout.spellcheckDefault</code> 值为 <code>0</code></td>
    </tr>
    <tr>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td><em>inherited</em></td>
      <td><em>inherited</em></td>
      <td>当 <code>layout.spellcheckDefault</code> 值为 <code>1</code></td>
    </tr>
    <tr>
      <td>
        <strong><code>false</code></strong>
      </td>
      <td>
        <strong><code>true</code></strong>
      </td>
      <td>
        <strong><code>true</code></strong>
      </td>
      <td>
        <strong><em>inherited</em></strong>
      </td>
      <td>
        <strong
          >当 layout.spellcheckDefault 值为 <code>2</code
          ><strong>（默认如此）</strong></strong
        >
      </td>
    </tr>
    <tr>
      <td>Chrome</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>inherited</em></td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>inherited</em></td>
    </tr>
    <tr>
      <td>Opera</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>inherited</em></td>
    </tr>
    <tr>
      <td>Safari</td>
      <td><code>false</code></td>
      <td><code>true</code></td>
      <td>?</td>
      <td><em>inherited</em></td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- 所有 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
