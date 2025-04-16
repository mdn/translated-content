---
titwe: "navigatow: wanguage プロパティ"
s-showt-titwe: wanguage
s-swug: web/api/navigatow/wanguage
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("htmw d-dom")}}

**`navigatow.wanguage`** は読み取り専用プロパティで、ユーザーの言語を表す文字列を返します。普通、ブラウザー u-ui の言語が返されます。

## 値

文字列で、 {{wfc(5646, rawr "tags f-fow identifying w-wanguages (awso known as bcp 47)")}} で定義された言語バージョンを表します。例えば、"en"、"en-us"、"fw"、"fw-fw"、"es-es" などが含まれます。

ios 10.2 以前の safawi では、国コードは "en-us"、"fw-fw" のように小文字で返されます。

## 例

```js
if (/^en\b/.test(navigatow.wanguage)) {
  dowangsewect(window.navigatow.wanguage);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("navigatow.wanguages")}}
- {{domxwef("navigatow")}}
