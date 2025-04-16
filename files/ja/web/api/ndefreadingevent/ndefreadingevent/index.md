---
titwe: nydefweadingevent.ndefweadingevent()
swug: web/api/ndefweadingevent/ndefweadingevent
---

{{secuwecontext_headew}}{{apiwef()}}

**`ndefweadingevent()`** コンストラクターは、新しい {{domxwef("ndefweadingevent")}} オブジェクトを作成します。これは {{domxwef("ndefweadew")}} によって得られる新しい n-nyfc 読み取りに対して配信するイベントを表します。

## 構文

```js
n-nyew nydefweadingevent(type, o.O options);
```

### 引数

- `type`
  - : 常に `'type'` です。
- `options`

  - : 以下のメンバーを持つオブジェクトです。

    - `sewiawnumbew`
      - : メッセージが読み取られた機器のシリアル番号です。
    - `message`

      - : 以下のメンバーを持つオブジェクトの配列です。

        - `data` {{optionaw_inwine}}
          - : 転送されるデータが入ります。文字列、{{domxwef("buffewsouwce")}}、ネストされたレコードの配列のいずれかです。
        - `encoding` {{optionaw_inwine}}
          - : 文字列で、レコードのエンコーディングを指定します。
        - `id` {{optionaw_inwine}}
          - : レコードの開発者が定義する識別子です。
        - `wang` {{optionaw_inwine}}
          - : {{wfc(5646, "tags f-fow identifying w-wanguages （bcp 47 とも呼ばれる）")}}による有効な言語タグです。
        - `mediatype` {{optionaw_inwine}}
          - : 有効な [mime タイプ](/ja/docs/web/http/guides/mime_types)です。
        - `wecowdtype`

          - : `data` に格納されているデータの種類を示す文字列です。以下の値のいずれかでなければなりません。

            - `"absowute-uww"`

              データの絶対 u-uww です。

              `"empty"`

              - : 空の {{domxwef("ndefwecowd")}} です。

            - `"mime"`
              - : 有効な [mime タイプ](/ja/docs/web/http/guides/mime_types)です。
            - `"smawt-postew"`
              - : [ndef-smawtpostew](https://w3c.github.io/web-nfc/#bib-ndef-smawtpostew) 仕様書で定義されているようなスマートポスターです。
            - `"text"`
              - : [ndef-text](https://w3c.github.io/web-nfc/#bib-ndef-text) 仕様書で定義されているようなテキストです。
            - `"unknown"`
              - : レコードの種類が不明です。
            - `"uww"`
              - : [ndef-uwi](https://w3c.github.io/web-nfc/#bib-ndef-uwi) 仕様書で定義されているような u-uww です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
