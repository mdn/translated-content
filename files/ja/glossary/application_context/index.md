---
title: Application Context (アプリケーションコンテキスト)
slug: Glossary/Application_context
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**アプリケーションコンテキスト**は、[ウェブアプリ](/ja/docs/Web/Progressive_web_apps)の最上位の{{Glossary("Browsing_context", "閲覧コンテキスト")}}を指します。
これは、タブやウィンドウといったアプリの閲覧コンテキストがどのように表示され、動作するかを決定します。

ウェブ開発者は、[ウェブアプリのマニフェストファイル](/ja/docs/Web/Progressive_web_apps/Manifest)でアプリケーションコンテキストを定義します。
開発者は、マニフェスト内の [`scope`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope) メンバーを使用して、アプリケーションコンテキストの一部と見なされ、マニフェストが適用される URL のセットを指定します。

マニフェストは、アプリケーションコンテキストが作成された後、スタート URL またはディープリンクへのナビゲーションが開始される前に適用されます。
**開始 URL** とは、ウェブアプリの最初のページのことです。
**ディープリンク**とは、ホームページを経由せずに、ウェブアプリ内の特定のページへユーザーを誘導する URL のことです。
アプリケーションコンテキストは、アプリの定義された動作と表示が、そのスコープ内で維持されることを確実にします。

アプリケーションコンテキストが作成されると、ブラウザーは直ちに開始 URL またはディープリンクへ移動しなければなりません。
この移動により、閲覧履歴の現在の履歴項目が置き換えられることになります。
ディープリンクへ移動するためにアプリケーションコンテキストが作成された場合、ブラウザーはそのディープリンクへ直接移動します。それ以外の場合は、開始 URL へ移動します。

なお、開始 URL は、必ずしもマニフェスト内の [`start_url`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) メンバーの値と一致するとは限りません。ブラウザーによっては、指定された `start_url` を無視したり、ユーザーがウェブアプリを端末のホーム画面に追加したりブックマークに登録したりする際に、その値を変更することができる場合があります。

## 関連情報

- [`scope`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope)
- [ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Manifest)
- [プログレッシブウェブアプリ (PWA)](/ja/docs/Web/Progressive_web_apps)
