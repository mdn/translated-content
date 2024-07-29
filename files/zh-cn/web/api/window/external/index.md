---
title: Window：external 属性
slug: Web/API/Window/external
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}} {{deprecated_header}}

{{domxref("Window")}} API 的 `external` 属性返回一个 `External` 接口的实例，这个接口本来用于包含一些用来向浏览器添加外部搜索提供者（external search provider）的函数。但是，现在这个属性已被弃用，其中的函数现在都是无任何功能的空函数，仅为了符合规范而存在。

## 实例方法

`External` 对象有以下方法：

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>方法</th>
      <th>描述</th>
    </tr>
    <tr>
      <td>
        <code>AddSearchProvider(<em>descriptionURL)</em></code>
      </td>
      <td>
        空函数；无任何作用。参见<a href="/zh-CN/docs/Web/OpenSearch#自动发现搜索插件"
          >自动发现搜索插件</a
        >。
      </td>
    </tr>
    <tr>
      <td><code>IsSearchProviderInstalled()</code></td>
      <td>空函数；无任何作用。</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
