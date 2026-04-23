---
title: rel=prerender
slug: Web/HTML/Reference/Attributes/rel/prerender
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{Deprecated_Header}}{{Non-standard_header}}

**`prerender`** は {{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Reference/Elements/link#rel) 属性の値で、ユーザーが次のナビゲーションで対象のリソースを必要とするかもしれないので、ブラウザーはリソースを先取りして取得・処理し、例えばサブリソースを取得したり、バックグラウンドで画面外で何らかのレンダリングを実行すれば、おそらくユーザー体験を改善できる、というヒントになるものです。

この機能は[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) に置き換えられました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [投機的読み込み](/ja/docs/Web/Performance/Guides/Speculative_loading)で、 `<link rel="prerender">` をはじめとする同様のパフォーマンス向上機能の比較ができます。
