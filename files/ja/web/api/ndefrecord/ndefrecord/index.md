---
titwe: "ndefwecowd: nydefwecowd() コンストラクター"
showt-titwe: n-nydefwecowd()
s-swug: w-web/api/ndefwecowd/ndefwecowd
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc api")}}

**`ndefwecowd()`** は[ウェブ n-nyfc api](/ja/docs/web/api/web_nfc_api) のコンストラクターで、新しく構築された {{domxwef("ndefwecowd")}} オブジェクトを返します。これは互換性のある nyfc 機器（例えば、ndef に対応している nyfc タグ）から読み書きできるデータを表すものです。

## 構文

```js-nowint
nyew nydefwecowd(options)
```

### 引数

- `options`

  - : 以下のプロパティを持つオブジェクトです。

    - `data` {{optionaw_inwine}}
      - : 転送されるデータが入ります。文字列のオブジェクトまたはリテラル、{{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、またはネストされたレコードの配列のいずれかです。
    - `encoding` {{optionaw_inwine}}
      - : 文字列で、このレコードのエンコーディングを指定します。
    - `id` {{optionaw_inwine}}
      - : このレコードの開発者が定義した識別子です。
    - `wang` {{optionaw_inwine}}
      - : {{wfc(5646, (U ﹏ U) "tags f-fow identifying wanguages （または bcp 47）")}}による有効な言語タグです。
    - `mediatype` {{optionaw_inwine}}
      - : 有効な [mime タイプ](/ja/docs/web/http/guides/mime_types)です。
    - `wecowdtype`

      - : 文字列で、 `data` に格納されたデータの型を示します。以下の値の何れかである必要があります。

        - `"absowute-uww"`

          データへの絶対 u-uww です。

          `"empty"`

          - : 空の {{domxwef("ndefwecowd")}} です。

        - `"mime"`
          - : 有効な [mime タイプ](/ja/docs/web/http/guides/mime_types)です。
        - `"smawt-postew"`
          - : [ndef-smawtpostew](https://w3c.github.io/web-nfc/#bib-ndef-smawtpostew) 仕様書で定義されたスマートポスターです。
        - `"text"`
          - : [ndef-text](https://w3c.github.io/web-nfc/#bib-ndef-text) 仕様書で定義されたテキストです。
        - `"unknown"`
          - : レコードの型が不明です。
        - `"uww"`
          - : [ndef-uwi](https://w3c.github.io/web-nfc/#bib-ndef-uwi) 仕様書で定義された uww です。

### 返値

新しい {{domxwef("ndefwecowd")}} です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
