---
title: Intl.Locale.prototype.getTextInfo()
short-title: getTextInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`getTextInfo()`** は {{jsxref("Intl.Locale")}} インスタンスのメソッドで、ロケールに対して `ltr` (左書き) または `rtl` (右書き) で示される文字の並び順を返します。

> [!NOTE]
> 一部のブラウザーの一部のバージョンでは、このメソッドが `textInfo` と呼ばれるアクセサープロパティとして実装されていました。しかしこの実装ではアクセスするたびに新しいオブジェクトを返すため、`locale.textInfo === locale.textInfo` が `false` を返してしまい、この状況を防ぐために、現在はメソッドとして実装されています。詳細については、[ブラウザーの互換性](#ブラウザーの互換性)の表を確認してください。

## 構文

```js-nolint
getTextInfo()
```

### 引数

なし。

### 返値

[UTS 35 の Layouts Elements](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements) で定義されているロケールデータに結び付けられたテキスト組版情報を表すオブジェクト。このオブジェクトは以下のプロパティを持ちます。

- `direction`
  - : ロケールのテキストの方向を示す文字列。`"ltr"` (左書き) または `"rtl"` (右書き) のいずれかです。

## 例

### テキスト情報の取得

指定された `Locale` で対応している書字方向を返します。

```js
const ar = new Intl.Locale("ar");
console.log(ar.getTextInfo()); // { direction: "rtl" }
console.log(ar.getTextInfo().direction); // "rtl"
```

```js
const es = new Intl.Locale("es");
console.log(es.getTextInfo()); // { direction: "ltr" }
console.log(es.getTextInfo().direction); // "ltr"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Intl.Locale")}}
