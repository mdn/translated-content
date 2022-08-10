---
title: Crypto
slug: Web/API/Crypto
tags:
  - 加密
translation_of: Web/API/Crypto
---
<p>{{APIRef("Web Crypto API")}}</p>

<p><code><strong>Crypto</strong></code> 接口提供了基本的加密功能，可用于当前的上下文中。它允许访问一个密码强度的随机数生成器和 cryptographic primitives。</p>

<p>该接口在 Web 中可以通过 {{domxref("Window.crypto")}} 属性来访问。</p>

<h2 id="属性">属性</h2>

<p><em>该接口实现的属性定义在 {{domxref("RandomSource")}} 中。</em></p>

<dl>
 <dt>{{domxref("Crypto.subtle")}} {{experimental_inline}}{{readOnlyInline}}</dt>
 <dd>返回一个 {{domxref("SubtleCrypto")}} 对象，用来访问公共的 cryptographic primitives，例如哈希、签名、加密以及解密。</dd>
</dl>

<h2 id="方法">方法</h2>

<p><em>该接口实现的方法定义在 {{domxref("RandomSource")}} 中。</em></p>

<dl>
 <dt>{{ domxref("RandomSource.getRandomValues()") }}</dt>
 <dd>使用 cryptographically sound 随机数填充 {{ jsxref("TypedArray") }}。</dd>
</dl>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容">浏览器兼容</h2>



<p>{{Compat("api.Crypto")}}</p>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="/en-US/docs/Components.utils.importGlobalProperties">Components.utils.importGlobalProperties</a></li>
</ul>
