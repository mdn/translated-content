---
title: 'Window: appinstalled イベント'
slug: Web/API/Window/appinstalled_event
---

{{APIRef}}

**`appinstalled`** は [Web Manifest API](/ja/docs/Web/Manifest) のイベントで、ブラウザーがあるページをアプリケーションとして成功裏にインストールしたとき発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">イベントハンドラー</th>
      <td>
        {{domxref("Window/onappinstalled", "onappinstalled")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`appinstalled` イベントは {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドで使用することができます。

```js
window.addEventListener('appinstalled', function() {
  console.log('アプリをインストールしてくれてありがとう！');
});
```

または {{domxref("Window/onappinstalled", "onappinstalled")}} イベントハンドラープロパティを使用してください。

```js
window.onappinstalled = function() {
  console.log('アプリをインストールしてくれてありがとう！');
};
```

## 仕様書

| 仕様書                                                                           | 状態                         |
| -------------------------------------------------------------------------------- | ---------------------------- |
| {{SpecName('Manifest', '#dfn-appinstalled', 'appinstalled')}} | {{Spec2('Manifest')}} |

## ブラウザーの対応

{{Compat("api.Window.onappinstalled")}}

## 関連情報

- 関連するイベントハンドラー、 {{domxref("Window.onappinstalled")}}
