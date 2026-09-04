---
title: "SVGAElement: ping プロパティ"
short-title: ping
slug: Web/API/SVGAElement/ping
l10n:
  sourceCommit: acb7e62eb10471075a46e78542cdb4798e82bfe7
---

{{APIRef("SVG")}}

**`ping`** は {{domxref("SVGAElement")}} インターフェイスのプロパティで、`ping` 属性を反映した文字列を返します。この属性には、ハイパーリンクが追跡された際に、ブラウザーが（バックグラウンドで）`PING` という本体を持つ {{HTTPMethod("POST")}} リクエストを送信する URL の空白区切りリストが含まれます。通常は追跡に使用されます。

このプロパティを設定することで、URL の `ping` 値を変更できます。これは [`ping`](/ja/docs/Web/HTML/Reference/Elements/a#ping) 属性の値を反映します。

## 値

文字列です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`ping`](/ja/docs/Web/HTML/Reference/Elements/a#ping) 属性
