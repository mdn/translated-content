---
title: NDEFReader.write()
slug: Web/API/NDEFReader/write
tags:
  - NDEF
  - リファレンス
  - ウェブ NFC
  - メソッド
browser-compat: api.NDEFReader.write
translation_of: Web/API/NDEFReader/write
---
{{securecontext_header}}{{SeeCompatTable}}{{APIRef()}}

`write()` は {{DOMxRef("NDEFReader")}} インターフェイスのプロパティで、タグに NDEF メッセージを書き込むことを試みます。 {{jsxref("Promise")}} を返し、これはタグにメッセージが書き込まれると解決し、ハードウェアや権限のエラーが発生すると拒否されます。このメソッドは、 "nfc" の権限が事前に許可されていない場合は、許可を問い合わせるプロンプトを起動します。

## 構文

```js
NDEFReader.write(message);
  NDEFReader.write(message, options);
```

### 引数

- `message`

  - : 書き込まれるメッセージで、 {{DOMxRef("DOMString")}},
    {{DOMxRef("BufferSource")}}, レコードの配列の何れかです。レコードには以下のメンバーがあります。

    - `data` {{optional_inline}}
      - : 転送されるデータが入ります。文字列、{{domxref("BufferSource")}}、ネストしたレコードの配列の何れかです。
    - `encoding` {{optional_inline}}
      - : 文字列で、このレコードのエンコーディングを指定します。
    - `id` {{optional_inline}}
      - : このレコードの開発者が定義した識別子です。
    - `lang` {{optional_inline}}
      - : {{RFC(5646, "Tags for Identifying Languages （または BCP 47）")}}による有効な言語タグです。
    - `mediaType` {{optional_inline}}
      - : 有効な [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)です。
    - `recordType`

      - : 文字列で、 `data` に格納されたデータの型を示します。以下の値の何れかになります。

        - `"absolute-url"`
          - : データへの絶対 URL です。
        - `"empty"`
          - : 空の {{domxref("NDEFRecord")}} です。
        - `"mime"`
          - : 有効な [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)です。
        - `"smart-poster"`
          - : [NDEF-SMARTPOSTER](https://w3c.github.io/web-nfc/#bib-ndef-smartposter) 仕様書で定義されているスマートポスターです。
        - `"text"`
          - : [NDEF-TEXT](https://w3c.github.io/web-nfc/#bib-ndef-text) 仕様書で定義されているテキストです。
        - `"unknown"`
          - : レコード型が不明です。
        - `"URL"`
          - : [NDEF-URI](https://w3c.github.io/web-nfc/#bib-ndef-uri) 仕様書で定義されている URL です。

- `options` {{optional_inline}}

  - : 以下のプロパティを持つオブジェクトです。

    - `overwrite` -- 既存のレコードが存在した場合、上書きするかどうかを指定する論理値です。
    - `signal` -- オプションの {{DOMxRef("AbortSignal")}} で、現在の書き込み操作をキャンセルすることができます。

### 返値

{{JSxRef("Promise")}} で、メッセージがタグに書き込まれたら解決し、ハードウェアまたは権限のエラーが発生した場合は拒否されます。

## 例外

このメソッドからは例外は発生しません。代わりに返されるプロミスが拒否され、 {{domxref("DOMException")}} が `name` を何れかの一つとして渡されます。

- `AbortError`
  - : `options` 引数で渡された {{DOMxRef("AbortSignal")}} によってスキャン操作が中止された。
- `NotAllowedError`
  - : この操作の権限が拒否されたか、 `overwrite` が `false` であり、既にタグにそのレコードがあった。
- `NotSupportedError`
  - : ウェブ NFC と互換性のある NFC アダプターがない、または利用可能な NFC アダプターがプッシュメッセージに対応していない、または接続が確立できなかった。
- `NotReadableError`
  - : UA が接続されている NFC アラプターにアクセスできなかった（例えば、ユーザー設定のため）。
- `NetworkError`
  - : 開始された後で転送に失敗した（例えば、タグがリーダーから取り外された）。

## 例

### テキスト文字列の書き込み

以下の例では、 {{DOMxRef("DOMString")}} を NFC タグへ書き込み、発生するエラーを処理する方法を示します。

```js
const ndef = new NDEFReader();
ndef.write(
  "Hello World"
).then(() => {
  console.log("Message written.");
}).catch(error => {
  console.log(`Write failed :-( try again: ${error}.`);
});
```

### URL の書き込み

次の例は、 NFC タグにレコードオブジェクト（上記）を書き込み、発生したエラーを処理する方法を示しています。

```js
const ndef = new NDEFReader();
try {
  await ndef.write({
    records: [{ recordType: "url", data: "http://example.com/" }]
  });
} catch {
  console.log("Write failed :-( try again.");
};
```

### タイムアウトで書き込みをスケジューリング

書き込み操作に時間制限を設けると便利な場合があります。例えば、ユーザーにタグをタッチするように要求し、一定時間内にタグが見つからなかったら、タイムアウトするようにします。

```js
const ndef = new NDEFReader();
ndef.onreading = (event) => console.log("We read a tag!");

function write(data, { timeout } = {}) {
  return new Promise((resolve, reject) => {
    const ctlr = new AbortController();
    ctlr.signal.onabort = () => reject("Time is up, bailing out!");
    setTimeout(() => ctlr.abort(), timeout);

    ndef.addEventListener("reading", event => {
      ndef.write(data, { signal: ctlr.signal }).then(resolve, reject);
    }, { once: true });
  });
}

await ndef.scan();
try {
  // Let's wait for 5 seconds only.
  await write("Hello World", { timeout: 5_000 });
} catch(err) {
  console.error("Something went wrong", err);
} finally {
  console.log("We wrote to a tag!");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
