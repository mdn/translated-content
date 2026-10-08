---
title: WindowProxy
slug: Glossary/WindowProxy
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**`WindowProxy`** オブジェクトは [`Window`](/ja/docs/Web/API/Window) オブジェクトのラッパーです。すべての{{Glossary("browsing context", "閲覧コンテキスト")}}に `WindowProxy` オブジェクトが存在します。`WindowProxy` オブジェクトに対して実行される操作は、その `WindowProxy` オブジェクトが現在ラップしている `Window` オブジェクトにそのまま反映されます。したがって、`WindowProxy` オブジェクトとのやり取りは、 `Window` オブジェクトと直接やり取りするのとほとんど同じ意味になります。閲覧コンテキストが移動するとき、その `WindowProxy` がラップする `Window` オブジェクトが変更されます。

## 関連情報

- HTML 仕様書: [WindowProxy 節](https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object)
- Stack Overflow の質問: [WindowProxy と Window オブジェクトの違いは ?](https://stackoverflow.com/questions/16092835/windowproxy-and-window-objects)
