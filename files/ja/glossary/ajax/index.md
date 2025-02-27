---
title: Ajax
slug: Glossary/AJAX
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

**AJAX** （Asynchronous JavaScript and XML、非同期 JavaScript と XML）は、ウェブアプリケーションが非同期 HTTP リクエストを行うことでサーバーからコンテンツを取得し、その新しいコンテンツを使用してページの関連部分を更新するウェブ開発技術です。更新が必要な部分のみがリクエストされるため、ページの応答性が向上します。

Ajax は{{Glossary("SPA", "単一ページアプリケーション")}}の作成にも使用でき、その場合、ウェブアプリケーション全体が単一の文書で構成され、必要に応じてそのコンテンツを更新するために Ajax が使用されます。

当初、 Ajax は {{domxref("XMLHttpRequest")}} インターフェイスを使用して実装されていましたが、現代のウェブアプリケーションには {{domxref("Window/fetch", "fetch()")}} API がもっと適しています。より強力で柔軟性があり、[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)などの基本的なウェブアプリケーション技術との統合も優れています。現代のウェブフレームワークは、 Ajax 用の抽象化も提供しています。

この技術は近年のウェブ開発では一般的であるため、 "Ajax" という特定の用語はほとんど使用されません。

## 関連情報

- [学習: ネットワークリクエストを JavaScript で作成](/ja/docs/Learn_web_development/Core/Scripting/Network_requests)
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
- 関連用語:
  - {{Glossary("SPA", "単一ページアプリケーション")}}
- {{DOMxRef("XMLHttpRequest")}}
- [AJAX](https://ja.wikipedia.org/wiki/AJAX) (ウィキペディア)
