---
title: "HTMLAreaElement: username プロパティ"
short-title: username
slug: Web/API/HTMLAreaElement/username
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

**`username`** は {{domxref("HTMLAreaElement")}} インターフェイスのプロパティで、 `<area>` 要素の `href` のユーザー名成分を含む文字列です。　URL にユーザー名がない場合、このプロパティには空文字列 (`""`) が含まれます。

このプロパティを設定すると、 URL のユーザー名を変更することができます。 URL に{{domxref("HTMLAreaElement.host", "ホスト", "", "nocode")}}が存在しないか、スキームが `file:` である場合、このプロパティを設定しても効果はありません。

ユーザー名は、設定時には{{Glossary("Percent-encoding", "パーセントエンコード")}}されますが、読み取り時にはパーセントデコードされません。

詳細については、 {{domxref("URL.username")}} を参照してください。

## 値

文字列です。

## 例

### エリアのリンクからユーザー名を取得

```js
// <area id="myArea" href="https://anonymous:flabada@developer.mozilla.org/ja/docs/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementByID("myArea");
area.username; // 'anonymous' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
