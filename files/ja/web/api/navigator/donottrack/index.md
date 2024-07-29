---
title: "Navigator: doNotTrack プロパティ"
short-title: doNotTrack
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{ApiRef("HTML DOM")}}{{Deprecated_header}}

**`Navigator.doNotTrack`** プロパティは、ユーザーの Do Not Track 設定を返します。これは、ユーザーがウェブサイトと広告主に対して追跡しないよう要求しているかどうかを示します。

プロパティの値は HTTP の {{httpheader("DNT")}} ヘッダーの値、つまり、 "`1`", "`0`", "`unspecified`" の値を返します。

## 値

文字列または `null` です。

## 例

```js
console.log(navigator.doNotTrack);
// DNT が有効な場合は "1" です。追跡をオプトインした場合は "0" になります。それ以外は "unspecified" です。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{httpheader("DNT")}} HTTP ヘッダー
