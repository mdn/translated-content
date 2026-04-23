---
title: rel="dns-prefetch"
slug: Web/HTML/Reference/Attributes/rel/dns-prefetch
l10n:
  sourceCommit: 0389dd29e0827791ad9d2f6b8cda217c121f9c19
---

{{HTMLSidebar}}

**`dns-prefetch`** キーワードを {{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Reference/Elements/link#rel) 属性に指定すると、ユーザーがターゲットリソースのオリジンにあるリソースを必要としている可能性が高く、したがってブラウザーがそのオリジンの DNS 解決を先取りして実行することでユーザーの使い勝手が向上する可能性が高いというヒントをブラウザーに与えます。

詳しくは [dns-prefetch の使用](/ja/docs/Web/Performance/Guides/dns-prefetch)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [投機的読み込み](/ja/docs/Web/Performance/Guides/Speculative_loading)で、`<link rel="dns-prefetch">` や他にも同様のパフォーマンス改善機能の比較ができます。
