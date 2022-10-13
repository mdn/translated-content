---
title: Navigator.doNotTrack
slug: Web/API/Navigator/doNotTrack
---

{{ApiRef("HTML DOM")}}

**`Navigator.doNotTrack`** プロパティは、ユーザーの Do Not Track 設定を返します。これは、ユーザーがウェブサイトと広告主に対して追跡しないよう要求しているかどうかを示します。

プロパティの値は HTTP の {{httpheader("DNT")}} ヘッダーの値、つまり、 "`1`", "`0`", "`unspecified`" の値を返します。

## 構文

```js
console.log(navigator.doNotTrack);
// DNT が有効な場合は "1" です。追跡をオプトインした場合は "0" になります。それ以外は "unspecified" です。
```

## 仕様書

| 仕様書                                                                                                   | 状態                         | 備考     |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Tracking", "#dom-navigator-donottrack", "Navigator.doNotTrack")}} | {{Spec2("Tracking")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.doNotTrack")}}

## 関連情報

- [Do Not Track フィールドガイド](/ja/docs/Web/Security/Do_not_track_field_guide)
