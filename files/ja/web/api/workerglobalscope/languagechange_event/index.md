---
title: 'WorkerGlobalScope: languagechange イベント'
slug: Web/API/WorkerGlobalScope/languagechange_event
tags:
  - API
  - Event
  - Reference
  - WorkerGlobalScope
  - イベント
translation_of: Web/API/WorkerGlobalScope/languagechange_event
---
{{APIRef}}

**`languagechange`** イベントはグローバルスコープオブジェクトで、ユーザーの推奨言語が変更されたときに発生します。

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
        {{domxref("WorkerGlobalScope/onlanguagechange", "onlanguagechange")}}
      </td>
    </tr>
  </tbody>
</table>

## 例

`languagechange` は {{domxref("EventTarget/addEventListener", "addEventListener")}} メソッドで使用することができます。

```js
worker.addEventListener('languagechange', function() {
  console.log('languagechange event detected!');
});
```

または、 {{domxref("WorkerGlobalScope/onlanguagechange", "onlanguagechange")}} イベントハンドラープロパティを使用することもできます。

```js
worker.onlanguagechange = function(event) {
  console.log('languagechange event detected!');
};
```

## 仕様書

| 仕様書                                                                                                                                                               | 状態                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| {{ SpecName('HTML WHATWG', 'workers.html#the-workerglobalscope-common-interface:event-languagechange', 'languagechange') }} | {{ Spec2('HTML WHATWG') }} |

## ブラウザーの互換性

{{Compat("api.WorkerGlobalScope.languagechange_event")}}

## 関連情報

- {{domxref("NavigatorLanguage.language", "navigator.language")}}
- {{domxref("NavigatorLanguage.languages", "navigator.languages")}}
- {{domxref("Navigator")}}
- {{domxref("WorkerGlobalScope.onlanguagechange")}}
