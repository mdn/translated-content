---
title: GlobalEventHandlers.oncanplaythrough
slug: conflicting/Web/API/HTMLMediaElement/canplaythrough_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/oncanplaythrough
original_slug: Web/API/GlobalEventHandlers/oncanplaythrough
---
{{ ApiRef("HTML DOM") }}

**`oncanplaythrough`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、{{event("canplaythrough")}} イベントを処理する{{domxref("EventHandler", "イベントハンドラー")}}です。

`canplaythrough` イベントは、メディアを再生できるユーザーエージェントのとき、バッファリングのためにコンテンツを停止せずに、メディアを最後まで再生するのに十分なデータがロードされていると推定されるときに発生します。

## 構文

```
element.oncanplaythrough = handlerFunction;
var handlerFunction = element.oncanplaythrough;
```

`handlerFunction` は、`null` またはイベントハンドラーを指定する [JavaScript 関数](/ja/docs/Web/JavaScript/Reference/Functions)のいずれかです。

## 仕様

<table class="spectable standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">策定状況</th>
      <th scope="col">コメント</th>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML WHATWG','#handler-oncanplaythrough','oncanplaythrough')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## ブラウザー実装状況

{{Compat("api.GlobalEventHandlers.oncanplaythrough")}}

## 関連情報

- {{event("canplaythrough")}}
- [DOM onevent ハンドラー](/ja/docs/Web/Guide/Events/Event_handlers "/ja/docs/Web/Guide/DOM/Events/Event_handlers")
