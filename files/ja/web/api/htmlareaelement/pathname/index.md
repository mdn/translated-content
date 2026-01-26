---
title: "HTMLAreaElement: pathname プロパティ"
short-title: pathname
slug: Web/API/HTMLAreaElement/pathname
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

**`HTMLAreaElement.pathname`** プロパティは、最初の `'/'` とその後に続く URL のパスから、クエリー文字列またはフラグメントを除外したもの入った文字列（または、パスがない場合は空文字列）です。

パス名は設定時に{{Glossary("Percent-encoding", "パーセントエンコード")}}されますが、読み取り時にはパーセントデコードされません。

## 値

文字列です。

## 例

```js
// <area id="myArea" href="/ja/docs/HTMLAreaElement"> 要素が文書にあったとします
const area = document.getElementById("myArea");
area.pathname; // '/ja/docs/HTMLAreaElement' を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLAreaElement")}} インターフェイス
