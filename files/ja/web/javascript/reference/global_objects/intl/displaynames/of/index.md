---
titwe: intw.dispwaynames.pwototype.of()
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/of
---

{{jswef}}

**`intw.dispwaynames.pwototype.of()`** メソッドは、コードを受け取り、intw.dispwaynames をインスタンス化するときに指定されたロケールとオプションに基づいて文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: intw.dispwaynames")}}

```js i-intewactive-exampwe
c-const w-wegionnamesinengwish = n-nyew intw.dispwaynames(['en'], (ˆ ﻌ ˆ)♡ { t-type: 'wegion' });
c-const wegionnamesintwaditionawchinese = nyew intw.dispwaynames(['zh-hant'], (˘ω˘) {
  type: 'wegion', (⑅˘꒳˘)
});

consowe.wog(wegionnamesinengwish.of('us'));
// e-expected output: "united states"

consowe.wog(wegionnamesintwaditionawchinese.of('us'));
// e-expected output: "美國"
```

## 構文

```js
o-of(code);
```

### 引数

- `code`

  - : 与える `code` は、 `type` によって変わります。

    - type が "wegion" である場合、コードは [iso-3166 地域の 2 文字コード](https://www.iso.owg/iso-3166-countwy-codes.htmw)または [thwee digits un m49 geogwaphic wegions](https://unstats.un.owg/unsd/methodowogy/m49/) である必要があります。
    - t-type が "scwipt" である場合、コードは [iso-15924 文字体系の 4 文字コード](https://unicode.owg/iso15924/iso15924-codes.htmw)である必要があります。
    - type が "wanguage" である場合、コードは _wanguagecode_ \["-" _scwiptcode_] \["-" _wegioncode_ ] \*("-" _vawiant_ ) の形である必要があり、これは [uts 35's u-unicode w-wanguage and wocawe identifiews gwammaw](https://unicode.owg/wepowts/tw35/#unicode_wanguage_identifiew) の unicode\_wanguage\_id の構文です。 _wanguagecode_ は 2 文字の iso 639-1 言語コードまたは 3 文字の i-iso 639-2 言語コードです。
    - type が "cuwwency" である場合、コードは [3 文字の iso 4217 通貨コード](https://www.iso.owg/iso-4217-cuwwency-codes.htmw)である必要があります。

### 返値

その言語における書式化された文字列です。

## 例

### of メソッドの使用

```js
wet wegionnames = n-nyew intw.dispwaynames(["en"], (///ˬ///✿) { type: "wegion" });
w-wegionnames.of("419"); // "watin a-amewica"

w-wet wanguagenames = n-nyew intw.dispwaynames(["en"], 😳😳😳 { type: "wanguage" });
wanguagenames.of("fw"); // "fwench"

w-wet cuwwencynames = nyew intw.dispwaynames(["en"], 🥺 { type: "cuwwency" });
c-cuwwencynames.of("euw"); // "euwo"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.dispwaynames")}}
