---
title: イベントの扱い (概要)
slug: Web/Events/Event_handlers
---

イベントとは、ブラウザーや OS の環境の変化を知らせる信号で、ブラウザーのウィンドウ内で発行されます。プログラマーは、イベントが発行されたときに実行される*イベントハンドラー*のコードを作成することで、ウェブページが変化に適切に対応できるようになります。

このページでは、イベントとイベントハンドラーの扱い方について、ごく簡単な「覚え書き」を提供しています。初めての方は、[イベント入門](/ja/docs/Learn/JavaScript/Building_blocks/Events)をお読みください。

## イベントでは何ができるのか

イベントは、そのイベントを発行させる JavaScript オブジェクトのページの中や下に記述されています。例えば、ブラウザーのウィンドウや現在の文書で発生したイベントを確認するには、 [`Window`](/ja/docs/Web/API/Window#events) や [`Document`](/ja/docs/Web/API/Document#events) のイベントの節を参照してください。

[イベントのリファレンス](/ja/docs/Web/Events#イベント索引)を使用すると、アニメーションやメディアなどの特定の API に対してどの JavaScript オブジェクトがイベントを発行するかを調べることができます。

## イベントハンドラーの登録

ハンドラーの登録には、推奨される方法が 2 つあります。イベントハンドラーのコードは、ターゲットとなる要素の対応する _onevent_ プロパティに割り当てて、イベントが起動されたときに実行されるようにするか、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} メソッドを使用して、ハンドラーを要素のリスナーとして登録するかすることができます。いずれの場合も、ハンドラーは [`Event` インターフェイス](/ja/docs/Web/API/Event) (または[派生インターフェイス](/ja/docs/Web/API/Event#introduction)) に準拠したオブジェクトを受け取ります。主な違いは、イベントリスナーのメソッドを使うと、複数のイベントハンドラーを追加 (または削除) できることです。

> **警告:** 第 3 の方法として、 HTML の onevent 属性を使ってイベントハンドラーを設定する方法がありますが、お勧めしません。これはマークアップを膨張させ、可読性を低下させ、デバッグを困難にします。詳しくは、[インラインイベントハンドラー](/ja/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_—_dont_use_these)を参照してください。

### onevent プロパティの使用

慣習上、イベントを発行する Javascript オブジェクトには、それに対応する "onevent" プロパティ (イベント名の前に "on" を付けて命名) があります。これらのプロパティは、イベントが発行されたときに、関連するハンドラーコードを実行するために呼び出されます。

イベントハンドラーのコードを設定するには、適切な onevent プロパティに代入してください。 1 つの要素のそれぞれのイベントに対して、割り当てることができるイベントハンドラーは 1 つだけです。必要に応じて、同じプロパティに別の関数を代入することで、ハンドラーを置き換えることができます。

以下の例では、 `greet()` 関数を `click` イベントに割り当てるために `onclick` プロパティを使用しています。

```js
const btn = document.querySelector("button");

function greet(event) {
  // print the event object to console
  console.log("greet:", arguments);
}

btn.onclick = greet;
```

なお、イベントハンドラーの第一引数には、イベントを表すオブジェクトが渡されます。このイベントオブジェクトは、 {{domxref("Event")}} インターフェースを実装しているか、またはそれを継承しています。

### EventTarget.addEventListener

要素にイベントハンドラーを設定する最も柔軟な方法は、 {{domxref("EventTarget.addEventListener")}} メソッドを使用することです。この方法では、複数のリスナーを 1 つの要素に割り当てることができ、必要に応じて ({{domxref("EventTarget.removeEventListener")}} を使用して) リスナーを削除することができます。

> **メモ:** イベントハンドラーの追加と削除ができることで、例えば、同じボタンで状況によって異なるアクションを実行することができます。また、より複雑なプログラムでは、古い、使われていないイベントハンドラーを整理することで、効率を上げることができます。

以下では、単純な `greet()` 関数をクリックイベントのリスナーまたはイベントハンドラーとして設定する方法を示します (必要に応じて、名前付き関数の代わりにラムダ関数を使用することもできます)。繰り返しますが、イベントは、イベントハンドラーの第一引数として渡されます。

```js
const btn = document.querySelector("button");

function greet(event) {
  // print the event object to console
  console.log("greet:", arguments);
}

btn.addEventListener("click", greet);
```

このメソッドは、イベントのキャプチャおよび削除の制御をするために、追加の引数/オプションを取ることもできます。詳細については、 {{domxref("EventTarget.addEventListener")}} のリファレンスページを参照してください。

#### 中止シグナルの使用

イベントリスナーの注目すべき機能は、中止シグナルを使って複数のイベントハンドラーを同時にクリーンアップできることです。

これは、同じ {{domxref("AbortSignal")}} を、一緒に削除できるようにしたいすべてのイベントハンドラーの {{domxref("EventTarget/addEventListener()", "addEventListener()")}} 呼び出しに渡すことで行われます。その後、 `AbortSignal` を所有するコントローラーで {{domxref("AbortController/abort()", "abort()")}} を呼び出すと、そのシグナルで追加されたすべてのイベントハンドラーが削除されます。例えば、 `AbortSignal` で削除できるイベントハンドラーを追加するには、次のようにします。

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  function (event) {
    // イベントオブジェクトをコンソールに表示
    console.log("greet:", arguments);
  },
  { signal: controller.signal },
); // このハンドラーに AbortSignal を渡す
```

上記のコードで生成したイベントハンドラーは、次のようにして削除することができます。

```js
controller.abort(); // このコントローラーに関連付けられたすべてのイベントハンドラーを削除
```

<section id="Quick_links"><ul><li><a href="/ja/docs/Learn/JavaScript/Building_blocks/Events">イベント入門</a></li><li><a href="/ja/docs/Web/Events">イベントリファレンス</a></li></ul></section>
