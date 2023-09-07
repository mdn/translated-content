---
title: rel=preconnect
slug: Web/HTML/Attributes/rel/preconnect
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar}}

**`preconnect`** キーワードを {{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Element/link#rel) 属性に使用すると、ユーザーがターゲットリソースのオリジンからのリソースを必要とする可能性が高いことをブラウザーに示唆します。そのため、ブラウザーはそのオリジンへの接続を事前に開始することでユーザーの操作性を向上させることができる可能性があります。事前接続は、ハンドシェイクの一部またはすべてを事前に実行することにより、指定された元からの将来の読み込みを高速化します（HTTP の場合は DNS+TCP、HTTPS の場合は DNS+TCP+TLS が元となります）。

```html
<link rel="preconnect" href="https://example.com" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
