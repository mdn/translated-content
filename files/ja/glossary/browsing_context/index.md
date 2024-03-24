---
title: Browsing context (閲覧コンテキスト)
slug: Glossary/Browsing_context
---

{{GlossarySidebar}}

**閲覧コンテキスト**は、{{glossary("browser", "ブラウザー")}} が {{domxref("Document")}} (今日では通常タブであり、場合によってはウィンドウまたはページ内のフレーム) を表示する環境です。

各閲覧コンテキストは、固有の{{glossary("origin", "オリジン")}}、すなわちアクティブな文書の生成元と、すべての表示された文書を順番に記録した履歴を持っています。

閲覧コンテキスト間の通信は、厳しく制限されています。同じ生成元の閲覧コンテキストとの間で、 {{domxref("BroadcastChannel")}} を開放して使用することができます。

## 理解を深める

### 技術リファレンス

- [WHATWG の閲覧コンテキスト](https://html.spec.whatwg.org/multipage/browsers.html#windows)
- [W3C の閲覧コンテキスト](http://w3c.github.io/html/browsers.html#sec-browsing-contexts)
