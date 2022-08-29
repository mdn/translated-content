---
title: Document.onselectionchange
slug: conflicting/Web/API/HTMLInputElement/selectionchange_event
tags:
  - API
  - Document
  - Experimental
  - Reference
  - イベントハンドラー
  - プロパティ
translation_of: Web/API/GlobalEventHandlers/onselectionchange
translation_of_original: Web/API/Document/onselectionchange
original_slug: Web/API/GlobalEventHandlers/onselectionchange
---
{{ApiRef('DOM')}}{{SeeCompatTable}}

**`Document.onselectionchange`** プロパティは、 {{event("selectionchange")}} イベントがこのオブジェクトに到達したときに呼び出されるイベントハンドラーを表します。

## 構文

```
obj.onselectionchange = function;
```

- _function_ はユーザー定義の関数の名前を、末尾の `()` や引数を付けない形、または無名関数の宣言です。

## 例

```html
document.onselectionchange = function() { console.log("Selection changed!"); };
```

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
        {{SpecName('Selection API','','Document.onselectionchange')}}
      </td>
      <td>{{Spec2('Selection API')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

## ブラウザーの対応

{{Compat("api.Document.onselectionchange")}}

## 関連情報

- {{event("selectionchange")}}
- {{domxref("GlobalEventHandlers.onselectstart")}} および {{event('selectstart')}}
