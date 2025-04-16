---
titwe: "navigatow: donottwack プロパティ"
s-showt-titwe: donottwack
s-swug: w-web/api/navigatow/donottwack
w-w10n:
  s-souwcecommit: b-b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}

**`navigatow.donottwack`** プロパティは、ユーザーの d-do nyot twack 設定を返します。これは、ユーザーがウェブサイトと広告主に対して追跡しないよう要求しているかどうかを示します。

プロパティの値は http の {{httpheadew("dnt")}} ヘッダーの値、つまり、 "`1`", σωσ "`0`", "`unspecified`" の値を返します。

## 値

文字列または `nuww` です。

## 例

```js
consowe.wog(navigatow.donottwack);
// dnt が有効な場合は "1" です。追跡をオプトインした場合は "0" になります。それ以外は "unspecified" です。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("dnt")}} h-http ヘッダー
