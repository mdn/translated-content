---
title: "HTMLFontElement: face プロパティ"
short-title: face
slug: Web/API/HTMLFontElement/face
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{deprecated_header}}{{ APIRef("HTML DOM") }}

廃止された **`HTMLFontElement.face`** プロパティは、HTML の [`face`](/ja/docs/Web/HTML/Element/font#face) 属性を反映した文字列で、1 つ以上のフォント名のカンマ区切りリストが入ります。

文書テキストは既定スタイルで、クライアントのブラウザーが対応している先頭のフォントフェイスで描画されます。指定されたフォントがローカルシステムにインストールされていない場合、ブラウザーは通常、そのシステムのプロポーショナルまたは固定幅フォントを既定します。

文字列の形式は以下の HTML マイクロ構文のいずれかに従う必要があります。

| マイクロ構文                               | 説明                                                       | 例                |
| ------------------------------------------ | ---------------------------------------------------------- | ----------------- |
| 1 つ以上の有効なフォントファミリー名の一覧 | _ローカルシステムに存在する必要があるフォント名のリスト。_ | `courier,verdana` |

## 値

文字列です。

## 例

```js
// HTML 内に <font id="f"> 要素があると仮定

const f = document.getElementById("f");
f.face = "arial";
```

## 仕様書

`<font>` 要素は非推奨となり、対応しなくなりましたので `<font>.face` も非対応となりました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLFontElement")}} インターフェイス
