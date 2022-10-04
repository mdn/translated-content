---
title: 非公式の GET API
slug: MDN/Tools/Unsupported_GET_API
---

{{MDNSidebar}}

MDN のプラットフォームである [Yari](https://github.com/mdn/yari) は、公式の GET API を提供していません。しかし、 Yari は現在、 HTTP の `GET` リクエストで受け取ることができる JSON リソースを公開する非公式の仕組みを提供しており、プログラム的に処理することができます。

## index.json リソース

特定の MDN の記事の URL が与えられた場合、対応する URL に `/index.json` を付加したものに HTTP の GET リクエストを行うことで、関連する JSON データを取得することができます。

例えば、 MDN の次の記事について、

[https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch](/ja/docs/Web/API/Fetch_API/Using_Fetch)

次の場所から関連する JSON データを受け取ることができます。

[https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch/index.json](/ja/docs/Web/API/Fetch_API/Using_Fetch/index.json)

> **警告:** MDN の `index.json` リソースの JSON データに使用されるファイル形式は、バージョン管理されておらず、意図的に文書化されていません。構造やキーの名前など、書式ののあらゆる部分が変更される可能性があります。 Yari が変更されて、 `index.json` リソースが提供されなくなる可能性もあります。
