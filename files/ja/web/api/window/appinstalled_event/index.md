---
title: 'Window: appinstalled イベント'
slug: Web/API/Window/appinstalled_event
tags:
  - API
  - Event
  - Manifest
  - Reference
  - Web
  - appinstalled
  - events
  - web manifest
  - ウェブマニフェスト
  - マニフェスト
translation_of: Web/API/Window/appinstalled_event
---
{{APIRef}}

**`appinstalled`** は [Web Manifest API](/ja/docs/Web/Manifest) のイベントで、ブラウザーがあるページをアプリケーションとして成功裏にインストールしたとき発行されます。

| バブリング         | なし                                                                     |
| ------------------ | ------------------------------------------------------------------------ |
| キャンセル         | 不可                                                                     |
| インターフェイス   | {{domxref("Event")}}                                             |
| イベントハンドラー | {{domxref("Window/onappinstalled", "onappinstalled")}} |

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
