---
title: "HTMLLinkElement: as プロパティ"
short-title: as
slug: Web/API/HTMLLinkElement/as
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`as`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、リンク要素で先読みされるコンテンツの種類を表す文字列を返します。

[`rel="preload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) のリンク要素では、`as` プロパティに値を設定する必要があります。設定しないと、リソースは取得されません。
[`rel="modulepreload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/modulepreload) のリンク要素にも適用できますが、省略した場合はデフォルトで `script` になります。
`rel="prefetch"` など、その他の種類のリンク要素には設定しないでください。

このプロパティは、HTML の [`<link>`](/ja/docs/Web/HTML/Reference/Elements/link) 要素の [`as` 属性](/ja/docs/Web/HTML/Reference/Elements/link#as)の値を反映します。

## 値

文字列で、許可された値は `"audio"`, `"document"`, `"embed"`, `"fetch"`, `"font"`, `"image"`, `"object"`, `"script"`, `"style"`, `"track"`, `"video"`, `"worker"` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
