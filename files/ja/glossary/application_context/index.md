---
title: Application Context (アプリケーションコンテキスト)
slug: Glossary/application_context
tags:
  - CodingScripting
  - Glossary
translation_of: Glossary/application_context
---
<p id="Summary"><strong>アプリケーションコンテキスト</strong>は、それに適用される<a href="/ja/docs/Web/Manifest">マニフェスト</a>のある最上位の{{Glossary("Browsing_context", "閲覧コンテキスト")}}です。</p>

<p>アプリケーションコンテキストが、ユーザーエージェントが深いリンクに移動することを要求された結果として生成された場合、ユーザーエージェントがユーザーエージェントはすぐに置換が有効となった深いリンクに移動しなければなりません。そうでないと、アプリケーションコンテキストが生成された時に、ユーザーエージェントは、すぐに置換が有効となった開始 URL に移動しないといけなくなります</p>

<p>なお、開始 URL は start_url メンバーの値である必要はありません。ユーザーやユーザーエージェントは、アプリケーションがホーム画面に追加されたりブックマークされたりしたときに、これを変更することがあります。</p>
