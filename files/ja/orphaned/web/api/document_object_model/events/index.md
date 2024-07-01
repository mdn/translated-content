---
title: イベントと DOM
slug: orphaned/Web/API/Document_Object_Model/Events
---

{{DefaultAPISidebar("DOM")}}

## はじめに

この章では DOM のイベントモデルを説明します。この [Event](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event) インターフェイス自身は、 DOM のノード上にイベントを登録する為のインターフェイスと同様であり、[イベントリスナー](/ja/docs/Web/API/EventTarget/addEventListener)であるとも言えます。いくつかの長い例は、様々な Event インターフェイスがどのように他と関連するかを示します。

[DOM レベル 3 イベントの原案](http://www.w3.org/TR/DOM-Level-3-Events/#dom-event-architecture)に、DOM を通して 3 つのフェーズから構成されるイベントフローを明確に説明した素晴らしい説明図があります。

また、イベントが DOM 内をどのように伝播するかについては更に詳細なコード例、[例 5: イベント伝播 (propagation)](/ja/docs/DOM/DOM_Reference/Examples#Example_5.3A_Event_Propagation) を参照してください。

## イベントリスナーの登録

DOM の要素にイベントハンドラーを登録する方法は 3 つあります。

### {{domxref("EventTarget.addEventListener")}}

```js
// myButton は button 要素だと仮定します
myButton.addEventListener('click', greet, false);
function greet(event){
    // print and have a look at the event object
    // always print arguments in case of overlooking any other arguments
    console.log('greet:', arguments)
    alert('hello world')
}
```

これが最近のウェブページで使われる方法です。

> **メモ:** Internet Explorer 6 から 8 はこの方法をサポートせず、 {{domxref("EventTarget.attachEvent")}} という似た API を代わりにサポートします。ブラウザー間の互換性を確保するには、数多くある JavaScript ライブラリのうちの一つを使用してください。

さらに詳細を知りたい場合は {{domxref("EventTarget.addEventListener")}} のリファレンスを参照してください。

### [HTML 属性](/ja/docs/Web/Guide/HTML/Event_attributes)

```html
<button onclick="alert('Hello world!')">
```

HTML 属性に書かれたこの JavaScript コードには、 `event` 引数を通してイベントオブジェクトが渡されます。[返値は HTML の仕様で定義された特別な方法で処理されます](http://dev.w3.org/html5/spec/webappapis.html#the-event-handler-processing-algorithm)。

> **警告:** この方法は避けてください。これはマークアップを増加させ、可読性を下げます。コンテンツと振る舞いが正しく分離されておらず、バグの発見が困難になります。

### DOM 要素のプロパティ

```js
// myButton は button 要素と仮定します
myButton.onclick = function(event){alert('Hello world')}
```

この関数は 1 つの `event` 引数を取るように定義できます。[返り値は HTML の仕様で定義された特別な方法で処理されます](http://dev.w3.org/html5/spec/webappapis.html#the-event-handler-processing-algorithm)。

この書き方の問題は、各要素の各イベント毎に 1 つだけしかハンドラーを設定できないことです。

## Event インターフェイスへのアクセス

イベントハンドラーは (DOM 要素や文書、 {{domxref("window")}} オブジェクト等を含めた) 様々なオブジェクトに追加されるでしょう。イベントが発生すると、イベントオブジェクトが生成され順番にイベントリスナーが呼ばれます。

{{domxref("Event")}} インターフェイスは、イベントハンドラーの内部からアクセス可能で、第 1 引数としてイベントオブジェクトを介して渡されます。以下のシンプルな例は、イベントハンドラーにどのようにイベントオブジェクトが渡され、その中でどのように使われるかを示します。

```js
function print(evt) {
  // evt 引数は自動的にイベントオブジェクトに割り当てられます
  // console.log と alert の違いに注意してください
  console.log('print:', evt)
  alert(evt)
}
// どの関数も意味を持つ適切な名前を付けてください
table_el.onclick = print
```

## Subnav

- [DOM リファレンス](/ja/docs/Web/API/Document_Object_Model)
- [DOM への導入](/ja/docs/Web/API/Document_Object_Model/Introduction)
- [イベントと DOM](/ja/docs/Web/API/Document_Object_Model/Events)
- [例](/ja/docs/Web/API/Document_Object_Model/Examples)
