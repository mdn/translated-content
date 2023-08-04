---
title: WindowProxy
slug: Glossary/WindowProxy
l10n:
  sourceCommit: ed947b2c608428b62a60f07d09dc543f732dc09b
---

**`WindowProxy`** オブジェクトは [`Window`](/ja/docs/Web/API/Window) オブジェクトのラッパーです。すべての[閲覧コンテキスト](/ja/docs/Glossary/Browsing_context)に `WindowProxy` オブジェクトが存在します。`WindowProxy` オブジェクトに対して実行される操作は、その `WindowProxy` オブジェクトが現在ラップしている `Window` オブジェクトにそのまま反映されます。したがって、`WindowProxy` オブジェクトとのやり取りは、 `Window` オブジェクトと直接やり取りするのとほとんど同じ意味になります。閲覧コンテキストが移動するとき、その `WindowProxy` がラップする `Window` オブジェクトが変更されます。

## 関連情報

- HTML 仕様 : [WindowProxy 節](https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object)
- Stack Overflow の質問 : [WindowProxy と Window オブジェクトの違いは ?](https://stackoverflow.com/questions/16092835/windowproxy-and-window-objects)
