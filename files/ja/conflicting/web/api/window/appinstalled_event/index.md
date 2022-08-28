---
title: Window.onappinstalled
slug: conflicting/Web/API/Window/appinstalled_event
tags:
  - API
  - Event Handler
  - Property
  - Reference
  - Window
  - web manifest
translation_of: Web/API/Window/onappinstalled
original_slug: Web/API/Window/onappinstalled
---
{{APIRef}}

{{domxref("Window")}} オブジェクトの **`onappinstalled`** プロパティは、[`appinstalled`](/ja/docs/Web/API/Window/appinstalled_event) イベントのイベントハンドラーとして扱われます。これは、ウェブアプリケーションが [プログレッシブウェブアプリ (PWA)](/ja/Apps/Progressive) としてインストールに成功すると発行されます。この発生したイベントは、{{domxref("Event")}} インターフェイスを実装する「単純なイベント」です。

## 構文

```
window.onappinstalled = function(event) { ... };
```

## 例

```js
window.onappinstalled = function(ev) {
  console.log('アプリケーションがインストールされました。');
};
```

## 仕様

| 仕様書                                                                                                   | 策定状況                     | 備考     |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('Manifest', '#onappinstalled-attribute', 'Window.onappinstalled')}} | {{Spec2('Manifest')}} | 初期定義 |

## ブラウザー実装状況

{{Compat("api.Window.onappinstalled")}}

## 関連項目

- {{ event("install") }}
