---
title: "XMLHttpRequest: timeout イベント"
slug: Web/API/XMLHttpRequest/timeout_event
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef}}

**`timeout`** イベントは、設定された時間が経過したことで進行が終了すると発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('timeout', (event) => { })

ontimeout = (event) => { }
```

## イベント型

{{domxref("ProgressEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("ProgressEvent")}}

## イベントのプロパティ

_以下に挙げたプロパティに加えて、親インターフェイスである {{domxref("Event")}} から継承したプロパティが利用できます。_

- {{domxref("ProgressEvent.lengthComputable", "lengthComputable")}} {{ReadOnlyInline}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxref("ProgressEvent.loaded", "loaded")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`total` をこのプロパティの値で割ることで算出できます。 HTTP を使用してリソースをダウンロードする場合、これは HTTP メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxref("ProgressEvent.total", "total")}} {{ReadOnlyInline}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 HTTP を使用してリソースをダウンロードする場合、これは `Content-Length` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

```js
const client = new XMLHttpRequest();
client.open('GET', 'http://www.example.org/example.txt');
client.ontimeout = () => {
    console.error('Timeout!!')
};

client.send();
```

イベントハンドラーは {{domxref("EventTarget/addEventListener", "addEventListener()")}} メソッドを使用して設定することもできます。

```js
client.addEventListener('timeout', () => {
    console.error("Timeout!!");
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHttpRequest")}}
