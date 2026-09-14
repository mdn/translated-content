---
title: "HTMLAreaElement: password プロパティ"
short-title: password
slug: Web/API/HTMLAreaElement/password
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

**`password`** は {{domxref("HTMLAreaElement")}} インターフェイスのプロパティで、 `<area>` 要素の `href` のパスワード成分が入った文字列です。 URL にパスワードが存在しなかった場合、このプロパティには空文字列 (`""`) が入ります。

このプロパティを設定すると、URL のパスワードを変更することができます。URL に{{domxref("HTMLAreaElement.host", "ホスト名")}}が存在しない場合、またはそのスキームが `file:` の場合、このプロパティを設定しても効果はありません。

パスワードは設定時に{{Glossary("Percent-encoding", "パーセントエンコード")}}されますが、読み取り時にはパーセントデコードされません。

詳細については、 {{domxref("URL.password")}} を参照してください。

## 値

文字列です。

## 例

```js
// <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/ja/docs/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementByID("myArea");
area.password; // 'flabada' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
