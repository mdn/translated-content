---
title: Fetch 基本概念
slug: Web/API/Fetch_API/Basic_concepts
---

{{DefaultAPISidebar("Fetch API")}}

[Fetch](/zh-CN/docs/Web/API/Fetch_API) 是一个现代的概念，等同于 [XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest)。它提供了许多与 XMLHttpRequest 相同的功能，但被设计成更具可扩展性和高效性。本文介绍了 Fetch API 的一些基本概念。

> **备注：** 这篇文章可能还需要修改。如果你觉得有的概念可以解释的更好，让人们在[MDN 论坛](https://discourse.mozilla-community.org/c/mdn)上知道，或 [Mozilla IRC](https://wiki.mozilla.org/IRC) (#mdn room)。

## 简而言之

Fetch 的核心在于对 HTTP 接口的抽象，包括 {{domxref("Request")}}，{{domxref("Response")}}，{{domxref("Headers")}}，{{domxref("Body")}}，以及用于初始化异步请求的 {{domxref("GlobalFetch.fetch","global fetch")}}。得益于 JavaScript 实现的这些抽象好的 HTTP 模块，其他接口能够很方便的使用这些功能。

[Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API) 是大量使用 Fetch 的 API 的一个示例。

除此之外，Fetch 还利用到了请求的异步特性——它是基于 {{jsxref("Promise-based","Promise")}} 的。

## Guard

Guard 是 {{domxref("Headers")}} 对象的特性，基于不同的情况，它可以有以下取值：`immutable`、`request`、`request-no-cors`、`response` 或 `none`。

当使用 {{domxref("Headers.Headers","Headers()")}} {{glossary("constructor")}} 创建一个新的 {{domxref("Headers")}} 对象的时候，它的 guard 被设置成 `none（默认值）。当创建`{{domxref("Request")}} 或 {{domxref("Response")}} 对象的时候，它将拥有一个按照以下规则实现的与之关联的 {{domxref("Headers")}} 对象：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">新对象的类型</th>
      <th scope="col">创建时的构造函数</th>
      <th scope="col">关联的 {{domxref("Headers")}} 对象的 guard</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">{{domxref("Request")}}</td>
      <td>{{domxref("Request.Request","Request()")}}</td>
      <td><code>request</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Request.Request","Request()")}}，{{domxref("Request.mode","mode")}}
        设置成 <code>no-cors</code>
      </td>
      <td><code>request-no-cors</code></td>
    </tr>
    <tr>
      <td rowspan="2">{{domxref("Response")}}</td>
      <td>{{domxref("Response.Response","Response()")}}</td>
      <td><code>response</code></td>
    </tr>
    <tr>
      <td>
        {{domxref("Response.error","error()")}} 或
        {{domxref("Response.redirect","redirect()")}} 方法
      </td>
      <td><code>immutable</code></td>
    </tr>
  </tbody>
</table>

头信息的 guard 会影响 {{domxref("Headers.set","set()")}}、{{domxref("Headers.delete","delete()")}} 和 {{domxref("Headers.append","append()")}} 方法。如果你试图修改 `guard` 是 `immutable` 的{{domxref("Headers")}} 对象，那么会抛出一个 `TypeError`。以下情况则不会抛出错误：

- guard 是 `request` 并且头信息中的 _name_ 不是 {{Glossary("forbidden header name")}}
- guard 是 `request-no-cors` 并且头信息中的 _name_/_value_ 是 {{Glossary("simple header")}}
- guard 是 `response` 并且头信息中的 _name_ 不是 {{Glossary("forbidden response header name")}}
