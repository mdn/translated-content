---
title: Navigator.sendBeacon()
slug: Web/API/Navigator/sendBeacon
---

{{APIRef("HTML DOM")}}

**`navigator.sendBeacon()`** メソッドは、ウェブサーバーに{{glossary("Asynchronous", "非同期")}}に少量のデータを {{Glossary("HTTP")}} で送るために使用することができます。

## 構文

```
navigator.sendBeacon(url, data);
```

### 引数

- `url`
  - : _data_ を受け取る URL です。相対でも絶対でも可能です。
- `data`
  - : 送るデータを含む {{domxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}}, {{domxref("FormData")}}, {{domxref("ReadableStream")}}, {{domxref("URLSearchParams")}} のいずれかのオブジェクトです。

### 返値

**`sendBeacon()`** メソッドが `true` を返した場合は、{{glossary("user agent", "ユーザーエージェント")}}が転送のために `data` をキューに入れることに成功したことを表します。それ以外の場合は `false` を返します。

## 解説

このメソッドは、アナリティクスや診断のために、データの送信が早すぎるとデータ収集の機会を失う可能性があるような場合、文書がアンロードされる前にサーバーにデータを送信するものです。例えば、他のページに移動してページがアンロードされる前にユーザーがどのリンクをクリックしたかなどです。

文書のアンロード時に確実にデータが送信されるようにするのは開発者にとってずっと難しいことでした。ユーザーエージェントは通常 {{domxref("Window/unload_event", "unload")}} ハンドラーの中で生成された非同期 {{domxref("XMLHttpRequest")}} を無視するからです。

伝統的には、これは以下のような回避方法を使用して、ある URL にデータを送信するまでページのアンロードを遅らせるよう位置づけられていました。

- ブロックする同期 `XMLHttpRequest` の呼び出しを `unload` または {{domxref("Window/beforeunload_event", "beforeunload")}} イベントハンドラーの中で行い、データを送信する。
- {{HTMLElement("img")}} 要素を作成し、その `src` を `unload` ハンドラーの中で設定する。ほとんどのユーザーエージェントは画像を読み込むためにアンロードを遅延させる。
- `unload` ハンドラー内で何もしないループを作成する。

これらの方法はすべて、文書のアンロードをブロックするので、次への遷移が遅くなります。次のページがこれをやめさせる方法は存在しないので、前のページの問題であるにもかかわらず、次のページが遅いように見えます。

次の例は `unload` ハンドラーで同期 `XMLHttpRequest` を送ってサーバにデータを送信しようとする理論的なアナリティクスのコードです。これは、次のページの読み込みが遅らせられる結果になります。

```js
window.addEventListener("unload", function logData() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/log", false); // third parameter of `false` means synchronous
  xhr.send(analyticsData);
});
```

これが **`sendBeacon()`** で置き換わるところです。 `sendBeacon()` メソッドにより、ユーザーエージェントが行う機会があればデータが非同期に送信され、アンロードや次への遷移が遅れることはありません。**これはアナリティクスのデータを送信する際の問題をすべて解決します。**

- データの送信の信頼性が高い
- 非同期に送信される
- 次のページの読み込みへの影響がない
- 加えて、どの古いテクニックよりも簡単にコードを書くことができる。

次の例は、 `sendBeacon()` メソッドを使用してサーバーにデータを送信する、理論的なアナリティクスのコードパターンです。

```js
window.addEventListener("unload", function logData() {
  navigator.sendBeacon("/log", analyticsData);
});
```

ビーコンは HTTP リクエストを POST メソッドで送信し、関連する Cookie も呼び出し時にすべて利用できます。

## 仕様書

| 仕様書                                                                           | 状態                     | 備考     |
| -------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('Beacon', '#sendbeacon-method', 'sendBeacon()')}} | {{Spec2('Beacon')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Navigator.sendBeacon")}}

## 関連情報

- {{domxref("navigator", "navigator")}}
