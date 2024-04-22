---
title: rel=dns-prefetch
slug: Web/HTML/Attributes/rel/dns-prefetch
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{HTMLSidebar}}

**`dns-prefetch`** キーワードを {{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Element/link#rel) 属性に指定すると、ユーザーがターゲットリソースのオリジンにあるリソースを必要としている可能性が高く、したがってブラウザーがそのオリジンの DNS 解決を先取りして実行することでユーザーの使い勝手が向上する可能性が高いというヒントをブラウザーに与えます。

詳しくは [dns-prefetch の使用](/ja/docs/Web/Performance/dns-prefetch)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [投機的読み込み](/ja/docs/Web/Performance/Speculative_loading)で、`<link rel="dns-prefetch">` や他にも同様のパフォーマンス改善機能の比較ができます。
