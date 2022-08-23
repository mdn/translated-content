---
title: GlobalEventHandlers.oncanplay
slug: conflicting/Web/API/HTMLMediaElement/canplay_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/oncanplay
original_slug: Web/API/GlobalEventHandlers/oncanplay
---
{{ ApiRef("HTML DOM") }}

**`oncanplay`** は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、{{event("canplay")}} イベントを処理する{{domxref("EventHandler", "イベントハンドラー")}}です。

`canplay` イベントは、メディアを再生できるユーザーエージェントのとき、バッファリングのためにコンテンツを停止せずに、メディアを最後まで再生するのに十分なデータがロードされていないと推定されるときに発生します。

## 構文

```
element.oncanplay = handlerFunction;
var handlerFunction = element.oncanplay;
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
        {{SpecName('HTML WHATWG','#handler-oncanplay','oncanplay')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## ブラウザー実装状況

{{Compat("api.GlobalEventHandlers.oncanplay")}}

## 関連情報

- [DOM onevent ハンドラー](/ja/docs/Web/Guide/Events/Event_handlers "/ja/docs/Web/Guide/DOM/Events/Event_handlers")
