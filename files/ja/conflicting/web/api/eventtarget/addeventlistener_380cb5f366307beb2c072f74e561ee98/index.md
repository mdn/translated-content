---
title: EventListener
slug: >-
  conflicting/Web/API/EventTarget/addEventListener_380cb5f366307beb2c072f74e561ee98
tags:
  - API
  - DOM
  - DOM Events
  - NeedsContent
translation_of: Web/API/EventListener
original_slug: Web/API/EventListener
---
{{APIRef("DOM Events")}}

**`EventListener`** インターフェイスは、{{domxref("EventTarget")}} オブジェクトによってディスパッチされたイベントを処理できるオブジェクトを表します。


> **Note:** レガシーコンテンツとの互換性が必要なため、`EventListener` は、関数、`handleEvent()` メソッドをもつオブジェクト両方を受け入れます。
> これを以下の [例](#例) に示します。

## プロパティ

_このインターフェイスはいかなるプロパティを実装も継承もしません。_

## メソッド

_このインターフェイスはメソッドを継承しません。_

- {{domxref("EventListener.handleEvent()")}}
  - : 指定されたタイプのイベントが発生するたびに呼び出される関数。

## 例

### HTML

```html
<button id="btn">Click here!</button>

<p id="funcOutput"></p>
<p id="handleEvtOutput"></p>
```

### JavaScript

```js
const buttonElement = document.getElementById('btn');
const funcOutput = document.getElementById('funcOutput');
const handleEvtOutput = document.getElementById('handleEvtOutput');

// コールバック関数を用意して、'click' イベントのハンドラを追加する。
// 要素がクリックされたとき、
// id "funcOutput" の p タグに "Element clicked through function!" と出力されます。
buttonElement.addEventListener('click', function (event) {
  funcOutput.textContent = 'Element clicked through function!';
});

// 互換性のために `handleEvent` プロパティを持つ非関数オブジェクトは、
// 関数と同じもののように扱われます。
// コールバック関数と同じように id "handleEvtOutput" の p タグに、
// "Element clicked through handleEvent property!" と出力されます。
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    handleEvtOutput.textContent = 'Element clicked through handleEvent property!';
  }
});
```

### 結果

{{EmbedLiveSample('Example')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### 関連情報

- [addEventListener](/ja/docs/Web/API/EventTarget/addEventListener)
