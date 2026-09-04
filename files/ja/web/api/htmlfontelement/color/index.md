---
title: "HTMLFontElement: color プロパティ"
short-title: color
slug: Web/API/HTMLFontElement/color
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{deprecated_header}}{{APIRef("HTML DOM")}}

廃止された **`HTMLFontElement.color`** プロパティは、HTML の [`color`](/ja/docs/Web/HTML/Reference/Elements/font#color) 属性を反映した文字列で、名前付き色または 16 進数の #RRGGBB 形式で指定した色が入ります。

文字列の形式は以下の HTML マイクロ構文のいずれかに従わなければなりません（[`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) を参照してください）。

| マイクロ構文            | 説明                                     | 例                        |
| ----------------------- | ---------------------------------------- | ------------------------- |
| 有効な色名の文字列      | _nameOfColor （大文字小文字の区別なし）_ | `Green`, `green`, `GREEN` |
| 有効な 16 進色文字列    | _#RRGGBB_                                | `#008000`                 |
| 10 進数値を使用した RGB | _rgb(x,x,x) （x は 0-255 の範囲）_       | `rgb(0 128 0)`            |

## 値

文字列です。

`null` 値を設定すると、その `null` 値は空文字列 (`""`) に変換されるので、`elt.color = null` は `elt.color = ""` と等価です。

## 例

```js
// HTML 内に <font id="f"> 要素があると仮定

const f = document.getElementById("f");
f.color = "green";
```

## 仕様書

`<font>` 要素は非推奨となり、対応しなくなりましたので `<font>.color` も非対応となりました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLFontElement")}} インターフェイス
