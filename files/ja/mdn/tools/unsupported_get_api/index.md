---
title: 非公式の GET API
slug: MDN/Tools/Unsupported_GET_API
tags:
  - Advanced
  - Automation
  - Documentation
  - Draft
  - Guide
  - MDN Meta
  - PUT API
  - Page-level
  - Tools
translation_of: MDN/Tools/Unsupported_GET_API
---
<div>{{MDNSidebar}}</div>

<p><span class="seoSummary">MDN のプラットフォームである <a href="https://github.com/mdn/yari">Yari</a> は、公式の GET API を提供していません。しかし、 Yari は現在、 HTTP の <code>GET</code> リクエストで受け取ることができる JSON リソースを後悔する非公式の仕組みを提供しており、プログラム的に処理することができます。</span></p>

<h2>index.json リソース</h2>

<p>特定の MDN の記事の URL が与えられた場合、対応する URL に <code>/index.json</code> を付加したものに HTTP の GET リクエストを行うことで、関連する JSON データを取得することができます。</p>

<p>例えば、 MDN の次の記事について、</p>
<p><a href="/ja/docs/Web/API/Fetch_API/Using_Fetch">https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch</a></p>
<p>...次の場所から関連する JSON データを受け取ることができます。</p>
<p><a href="/ja/docs/Web/API/Fetch_API/Using_Fetch/index.json">https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch/index.json</a></p>

<div class="warning">
<p><strong>警告:</strong> MDN の <code>index.json</code> リソースの JSON データに使用されるファイル形式は、バージョン管理されておらず、意図的に文書化されていません。構造やキーの名前など、書式ののあらゆる部分が変更される可能性があります。 Yari が変更されて、 <code>index.json</code> リソースが提供されなくなる可能性もあります。</p>
</div>
