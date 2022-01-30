---
title: イベントの作成と起動
slug: Web/Events/Creating_and_triggering_events
tags:
  - 上級者
  - DOM
  - ガイド
  - JavaScript
  - NeedsContent
  - イベント
translation_of: Web/Events/Creating_and_triggering_events
original_slug: Web/Events/Creating_and_triggering_events
---
この記事では、 DOM イベントを作成して処理する方法を説明します。このようなイベントは、一般に、ブラウザー自体によって起動されたイベントとは対照的に、**合成イベント**と呼ばれます。

## カスタムイベントの作成

イベントは、次のように [`Event`](/ja/docs/Web/API/Event) コンストラクターを使用して作成できます。

```js
const event = new Event('build');

// Listen for the event.
elem.addEventListener('build', function (e) { /* ... */ }, false);

// Dispatch the event.
elem.dispatchEvent(event);
```

上記のコード例は [EventTarget.dispatchEvent()](/ja/docs/Web/API/EventTarget/dispatchEvent) メソッドを使用します。

このコンストラクターは、ほとんどの最新のブラウザーでサポートされています (Internet Explorer は例外です)。もっと冗長的なアプローチ (Internet Explorer で動作するもの) は、下記の[古い方法](#古い方法)を参照して下さい。

### カスタムデータの追加 – CustomEvent()

イベントオブジェクトにデータを追加するには、[CustomEvent](/ja/docs/Web/API/CustomEvent) インターフェイスが存在し、**detail** プロパティを使用してカスタムデータを渡すことができます。
たとえば、イベントは次のようにして作成することができます。

```js
const event = new CustomEvent('build', { detail: elem.dataset.time });
```

これにより、イベントリスナー内の追加データにアクセスすることができます。

```js
function eventHandler(e) {
  console.log('The time is: ' + e.detail);
}
```

### 古い方法

イベントを作成する古いアプローチでは、 Java に触発された API が使用されます。以下に例を示します。

```js
/ イベントの作成
const event = document.createEvent('Event');

// イベントの名前を 'build' と定義する
event.initEvent('build', true, true);

// イベントを待ち受けする
elem.addEventListener('build', function (e) {
  // e.target が elem と一致したとき
}, false);

// 対象が何らかの Element またはその他の EventTarget の場合
elem.dispatchEvent(event);
```

### イベントのバブリング

子要素からイベントを起動させ、祖先要素がそれを、任意でデータも、受け取りたい場合がよくあります。

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

// 新しいイベントを生成し、バブリングを許可し、 "detail" プロパティに渡したいデータを設定する
const eventAwesome = new CustomEvent('awesome', {
  bubbles: true,
  detail: { text: () => textarea.value }
});

// フォームイベントが "awesome" カスタムイベントを待ち受けし、渡されたものの text() メソッドをコンソールに出力する
form.addEventListener('awesome', e => console.log(e.detail.text()));

// ユーザー型の場合、 form 内の textarea は発生させるイベントを起動・処理し、それを開始点として使用する
textarea.addEventListener('input', e => e.target.dispatchEvent(eventAwesome));
```

### イベントの動的な生成と処理

要素はまだ作成されていないイベントを待ち受けすることができます。

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector('form');
const textarea = document.querySelector('textarea');

form.addEventListener('awesome', e => console.log(e.detail.text()));

textarea.addEventListener('input', function() {
  // Create and dispatch/trigger an event on the fly
  // Note: Optionally, we've also leveraged the "function expression" (instead of the "arrow function expression") so "this" will represent the element
  this.dispatchEvent(new CustomEvent('awesome', { bubbles: true, detail: { text: () => textarea.value } }))
});
```

### 組み込みイベントの起動

この例では、 DOM メソッドを使用してチェックボックスでクリック (プログラムでクリックイベントを生成する) をシミュレートする方法を示します。[デモを見る](https://media.prod.mdn.mozit.cloud/samples/domref/dispatchEvent.html)。

```js
function simulateClick() {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  const cb = document.getElementById('checkbox');
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // A handler called preventDefault.
    alert("cancelled");
  } else {
    // None of the handlers called preventDefault.
    alert("not cancelled");
  }
}
```

## 関連情報

- [CustomEvent()](/ja/docs/Web/API/CustomEvent/CustomEvent)
- {{domxref("document.createEvent()")}}
- {{domxref("Event.initEvent()")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- {{domxref("EventTarget.addEventListener()")}}

<section id="Quick_links"><ul><li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベント入門</a></li><li><a href="/ja/docs/Web/Events/Event_handlers">イベントハンドラー (概要)</a></li><li><a href="/ja/docs/Web/Events">イベントリファレンス</a></li></ul></section>
