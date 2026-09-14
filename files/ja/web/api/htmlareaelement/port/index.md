---
title: "HTMLAreaElement: port プロパティ"
short-title: port
slug: Web/API/HTMLAreaElement/port
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

**`port`** は {{domxref("HTMLAreaElement")}} インターフェイスのプロパティで、 `<area>` 要素の `href` のポート番号が入った文字列です。ポートがプロトコルの既定値（`ws:` および `http:` の場合は `80`、 `wss:` および `https:` の場合は `443`、 `ftp:` の場合は `21`）である場合、このプロパティは空文字列 (`""`) になります。

このプロパティを設定すると、URL のポート番号を変更できます。 URL に{{domxref("HTMLAnchorElement.host", "ホスト", "", "nocode")}}が存在しない場合、またはそのスキームが `file:` の場合、このプロパティを設定しても効果はありません。また、不正なポート番号は暗黙に無視されます。

詳しくは {{domxref("URL.port")}} を参照してください。

## 値

文字列です。

## 例

### エリアのリンクからポート番号を取得

```js
// <area id="myArea" href="https://developer.mozilla.org:443/ja/docs/HTMLAreaElement"> 要素が文書にあったとします。
const area = document.getElementByID("myArea");
area.port; // '443' を返す
```

```js
// もう一つの <area id="myArea" href="https://developer.mozilla.org:8888/ja/docs/HTMLAreaElement"> 要素が文書にあったとします。
const area = document.getElementByID("myArea");
area.port; // Returns:'8888'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
