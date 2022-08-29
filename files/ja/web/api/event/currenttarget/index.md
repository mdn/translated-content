---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
page-type: web-api-instance-property
tags:
  - プロパティ
  - 読み取り専用
  - リファレンス
browser-compat: api.Event.currentTarget
translation_of: Web/API/Event/currentTarget
---
{{APIRef("DOM")}}

**`currentTarget`** は {{domxref("Event")}} インターフェイスの読み取り専用プロパティで、イベントが DOM を走査する際の、イベントの現在のターゲットを特定します。これは常にイベントハンドラーが装着されている要素を指し、 {{domxref("Event.target")}} とは対照的に、イベントが発生した要素やその子孫である可能性のある要素を特定します。

## 値

{{domxref("EventTarget")}} で、現在のイベントハンドラーが装着されているオブジェクトを表します。

## 例

`Event.currentTarget` は、複数の要素に同じイベントハンドラーを割り当てるときに使用すると面白いです。

```js
function hide(e){
  e.currentTarget.style.visibility = 'hidden';
  console.log(e.currentTarget);
  // この関数がイベントハンドラとして使用されるとき： this === e.currentTarget
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i < ps.length; i++){
  // console: print the clicked <p> element
  ps[i].addEventListener('click', hide, false);
}
// console: print <body>
document.body.addEventListener('click', hide, false);

// 周辺をクリックすると段落が消えます。
```

> **Note:** イベント処理中**だけ** `event.currentTarget` の値は利用可能です。
> もし {{DOMxRef("console.log()")}} で `event` オブジェクトを変数に格納し、コンソールで `currentTarget` キーを探すと、その値は `null` となります。<br/>
> `console.log(event.currentTarget)` を使ってコンソールで表示するか、 [`debugger`](/ja/docs/Web/JavaScript/Reference/Statements/debugger) 文を使ってコードの実行を一時停止し、 `event.currentTarget` の値を表示させる必要があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [イベントターゲットの比較](/ja/docs/Web/API/Event/Comparison_of_Event_Targets)
