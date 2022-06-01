---
title: 'XMLHttp​Request: timeout イベント'
slug: Web/API/XMLHttpRequest/timeout_event
tags:
  - API
  - Event
  - リファレンス
  - XHR
  - XMLHttpRequest
  - イベント
  - timeout
browser-compat: api.XMLHttpRequest.timeout_event
translation_of: Web/API/XMLHttpRequest/timeout_event
---
{{APIRef}}

**`timeout`** イベントは、設定された時間が経過し進捗が終了すると発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th>バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th>キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th>インターフェイス</th>
      <td>{{domxref("ProgressEvent")}}</td>
    </tr>
    <tr>
      <th>イベントハンドラープロパティ</th>
      <td>
        {{domxref("XMLHttpRequestEventTarget.ontimeout")}}
      </td>
    </tr>
  </tbody>
</table>

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
