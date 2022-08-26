---
title: GlobalEventHandlers.onplaying
slug: conflicting/Web/API/HTMLMediaElement/playing_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
  - イベントハンドラー
  - プロパティ
translation_of: Web/API/GlobalEventHandlers/onplaying
original_slug: Web/API/GlobalEventHandlers/onplaying
---
{{ApiRef("HTML DOM")}}

**`onplaying`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、 {{event("Event_handlers", "event handler")}} のうち {{event("playing")}} イベントを処理するためのものです。

`playing` イベントは、メディアデータが不足して一時停止または遅延した後、再生が開始できる状態になったときに発生します。

## 構文

```
element.onplaying = handlerFunction;
var handlerFunction = element.onplaying;
```

`handlerFunction` は `null` またはイベントのハンドラーを指定する [JavaScript 関数](/ja/docs/Web/JavaScript/Reference/Functions)です。

## 仕様書

<table class="spectable standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('HTML WHATWG','#handler-onplaying','onplaying')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## ブラウザーの互換性

{{Compat("api.GlobalEventHandlers.onplaying")}}

## 関連情報

- {{domxref("HTMLMediaElement/playing_event", "playing")}}
- [DOM イベントハンドラー](/ja/docs/Web/Guide/Events/Event_handlers)
