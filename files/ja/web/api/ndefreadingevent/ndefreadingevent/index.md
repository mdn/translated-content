---
title: NDEFReadingEvent.NDEFReadingEvent()
slug: Web/API/NDEFReadingEvent/NDEFReadingEvent
tags:
  - API
  - コンストラクター
  - リファレンス
  - NDEFReadingEvent
browser-compat: api.NDEFReadingEvent.NDEFReadingEvent
translation_of: Web/API/NDEFReadingEvent/NDEFReadingEvent
---
{{securecontext_header}}{{APIRef()}}

**`NDEFReadingEvent()`** コンストラクターは、新しい {{domxref("NDEFReadingEvent")}} オブジェクトを作成します。これは {{DOMxRef("NDEFReader")}} によって得られる新しい NFC 読み取りに対して配信するイベントを表します。

## 構文

```js
new NDEFReadingEvent(type, options);
```

### 引数

- `type`
  - : 常に `'type'` です。
- `options`

  - : 以下のメンバーを持つオブジェクトです。

    - `serialNumber`
      - : メッセージが読み取られた機器のシリアル番号です。
    - `message`

      - : 以下のメンバーを持つオブジェクトの配列です。

        - `data` {{optional_inline}}
          - : 転送されるデータが入ります。文字列、{{domxref("BufferSource")}}、ネストされたレコードの配列のいずれかです。
        - `encoding` {{optional_inline}}
          - : 文字列で、レコードのエンコーディングを指定します。
        - `id` {{optional_inline}}
          - : レコードの開発者が定義する識別子です。
        - `lang` {{optional_inline}}
          - : {{RFC(5646, "Tags for Identifying Languages （BCP 47 とも呼ばれる）")}}による有効な言語タグです。
        - `mediaType` {{optional_inline}}
          - : 有効な [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)です。
        - `recordType`

          - : `data` に格納されているデータの種類を示す文字列です。。以下の値のいずれかでなければなりません。

            - `"absolute-url"`

              データの絶対 URL です。

              `"empty"`

              - : 空の {{domxref("NDEFRecord")}} です。

            - `"mime"`
              - : 有効な [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)です。
            - `"smart-poster"`
              - : [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) 仕様書で定義されているようなスマートポスターです。
            - `"text"`
              - : [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) 仕様書で定義されているようなテキストです。
            - `"unknown"`
              - : レコードの種類が不明です。
            - `"URL"`
              - : [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) 仕様書で定義されているような URL です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
