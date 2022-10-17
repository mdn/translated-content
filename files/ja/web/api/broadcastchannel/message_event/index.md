---
title: 'BroadcastChannel: message イベント'
slug: Web/API/BroadcastChannel/message_event
---

{{APIRef}}

`message` イベントは、メッセージがそのチャネルに到着したときに {{domxref('BroadcastChannel')}} オブジェクトに対して発生します。

<table class="properties">
  <tbody>
    <tr>
      <td>バブリング</td>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("MessageEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラプロパティ</th>
      <td>
        {{domxref("BroadcastChannel.onmessage","onmessage")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

### 実例

この例では、ユーザーがボタンをクリックしたときに {{htmlelement("textarea")}} の内容を放送する "Sender" の {{htmlelement("iframe")}} と、放送メッセージを受信し、その結果を {{htmlelement("div")}} 要素に書き込む 2 つの "Receiver" の `<iframe>` があります。

#### Sender

```html hidden
<h1>Sender</h1>
<label for="message">Type a message to broadcast:</label><br/>
<textarea id="message" name="message" rows="1" cols="40">Hello</textarea>
<button id="broadcast-message" type="button">Broadcast message</button>
```

```css hidden
body {
     border: 1px solid black;
     padding: .5rem;
     height: 150px;
     font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans", sans-serif;
    margin-bottom: 1rem;
}

textarea {
    padding: .2rem;
}

label, br {
    margin: .5rem 0;
}

button {
    vertical-align: top;
    height: 1.5rem;
}
```

```js
const channel = new BroadcastChannel('example-channel');
const messageControl = document.querySelector('#message');
const broadcastMessageButton = document.querySelector('#broadcast-message');

broadcastMessageButton.addEventListener('click', () => {
    channel.postMessage(messageControl.value);
})
```

#### Receiver 1

```html hidden
<h1>Receiver 1</h1>
<div id="received"></div>
```

```css hidden
body {
    border: 1px solid black;
    padding: .5rem;
    height: 100px;
    font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans",
    sans-serif; margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel('example-channel');
channel.addEventListener('message', (event) => {
  received.textContent = event.data;
});
```

#### Receiver 2

```html hidden
<h1>Receiver 2</h1>
<div id="received"></div>
```

```css hidden
body {
    border: 1px solid black;
    padding: .5rem;
    height: 100px;
    font-family: "Fira Sans", sans-serif;
}

h1 {
    font: 1.6em "Fira Sans", sans-serif;
    margin-bottom: 1rem;
}
```

```js
const channel = new BroadcastChannel('example-channel');
channel.addEventListener('message', (event) => {
  received.textContent = event.data;
});
```

### 結果

{{ EmbedLiveSample('Sender', '100%', '170px','' ,'' , 'dummy') }}

{{ EmbedLiveSample('Receiver_1', '100%', '150px','' ,'' , 'dummy') }}

{{ EmbedLiveSample('Receiver_2', '100%', '150px','' ,'' , 'dummy') }}

## 仕様

| 仕様                                                                         | 状態                             |
| ---------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', 'indices.html#event-message')}} | {{Spec2('HTML WHATWG')}} |

## ブラウザーの互換性

{{Compat("api.BroadcastChannel.message_event")}}

## 関連情報

- 関連イベント: {{domxref("BroadcastChannel.messageerror_event","messageerror")}}。
