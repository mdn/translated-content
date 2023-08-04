---
title: XMLHttpRequest.readyState
slug: Web/API/XMLHttpRequest/readyState
l10n:
  sourceCommit: abf155210d826c2584d23433eb2eac45a6669d23
---

{{APIRef('XMLHttpRequest')}}

**XMLHttpRequest.readyState** プロパティは XMLHttpRequest (XHR) クライアントの状態を返します。XHR クライアントは次の状態のいずれかをとります。

| 値    | 状態               | 説明                                                            |
| ----- | ------------------ | --------------------------------------------------------------- |
| `0`   | `UNSENT`           | クライアントは作成済み。 `open()` はまだ呼ばれていない。        |
| `1`   | `OPENED`           | `open()` が呼び出し済み。                                       |
| `2`   | `HEADERS_RECEIVED` | `send()` が呼び出し済みで、ヘッダーとステータスが利用可能。     |
| `3`   | `LOADING`          | ダウンロード中。`responseText` には部分データが入っている。     |
| `4`   | `DONE`             | 操作が完了した。                                                |

- UNSENT
  - : XMLHttpRequest クライアントは作成済みだが、まだ open() メソッドは呼ばれていない。
- OPENED
  - : open() メソッドは実行済み。この状態の間は、リクエストヘッダーを [setRequestHeader()](/ja/docs/Web/API/XMLHttpRequest/setRequestHeader) メソッドを使ってセットでき、[send()](/ja/docs/Web/API/XMLHttpRequest/send) メソッドを呼び出すと取得を開始できる。
- HEADERS_RECEIVED
  - : send() は呼び出し済みで、レスポンスヘッダーを受け取り済み。
- LOADING
  - : レスポンス本文を受信中。 [`responseType`](/ja/docs/Web/API/XMLHttpRequest/responseType) が "text" または空文字列の場合、 [`responseText`](/ja/docs/Web/API/XMLHttpRequest/responseText) は読み込み中の部分的なテキストになる。
- DONE
  - : 取得操作が完了している。これはデータ転送が成功または失敗で完了したことを意味している。

## 例

```js
const xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = () => {
    console.log('LOADING', xhr.readyState); // readyState will be 3
};

xhr.onload = () => {
    console.log('DONE', xhr.readyState); // readyState will be 4
};

xhr.send(null);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
