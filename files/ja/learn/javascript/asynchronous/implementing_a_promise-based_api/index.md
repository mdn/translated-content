---
title: プロミスベースの API の実装方法
slug: Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API
l10n:
  sourceCommit: 05d8b0eb3591009b6b7fee274bb7ed1bc5638f18
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}

前の記事では、プロミスを返す API を使用する方法について説明しました。この記事では、それとは逆の側面、つまりプロミスを返す API をどのように実装するかについて見ていきます。これはプロミスベースの API を使用するよりもはるかに少ないタスクですが、それでも知っておく価値があります。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、イベント処理や プロミスの基本を含む JavaScript の基本をそれなりに理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>プロミスベースのAPIを実装するための方法を理解すること。</td>
    </tr>
  </tbody>
</table>

一般に、プロミスベースの API を実装するときには、イベントやコールバック、メッセージパッシングモデルを使用した非同期処理をラップすることになるでしょう。そして、その処理の成功や失敗を適切に処理するために `Promise` オブジェクトを用意します。

## alarm() API の実装

この例では、`alarm()` と呼ばれるプロミスベースのアラーム API を実装することにします。これは、起こす人の名前と、その人を起こすまでの待ち時間（ミリ秒単位）を引数として受け取ります。待ち時間の後、この関数は起こすべき人の名前を含んだ「起きて！」というメッセージを送ります。

### setTimeout() のラップ

ここでは {{domxref("setTimeout()")}} を使用します。API を使って `alarm()` 関数を実装します。 `setTimeout()` API はコールバック関数と遅延時間（ミリ秒単位で指定される）を引数として受け取ります。 `setTimeout()` が呼び出されると、指定された待ち時間に設定されたタイマーを開始し、時間が経過すると、指定された関数を呼び出します。

以下の例では、 `setTimeout()` をコールバック関数および 1000 ミリ秒の待ち時間と共に呼び出します。

```html
<button id="set-alarm">アラームを設定</button>
<div id="output"></div>
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

```js
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
  setTimeout(() => {
    output.textContent = "起きて！";
  }, 1000);
}

button.addEventListener("click", setAlarm);
```

{{EmbedLiveSample("Wrapping setTimeout()", 600, 100)}}

### Promise() コンストラクター

この `alarm()` 関数は、タイマーが終了したときに履行される `Promise` を返します。これは `then()` ハンドラーに「起きて！」というメッセージを渡し、呼び出し側が負の遅延値を与えた場合はプロミスを拒否します。

ここで重要な成分は {{jsxref("Promise/Promise", "Promise()")}} コンストラクターです。 `Promise()` コンストラクターは、引数として単一の関数を受け取ります。ここでは、この関数を `executor` と呼びます。新しいプロミスを作成する際には、この executor の実装を指定します。

この executor 関数自身は 2 つの引数を取りますが、どちらも関数でもあり、慣例的に `resolve` と `reject` と呼ばれるものです。 executor の実装の中では、基本となる非同期関数を呼び出します。非同期関数が成功した場合には `resolve` を呼び出しますが、失敗した場合には `reject` を呼び出します。もし、実行関数がエラーを発生した場合には、自動的に `reject` が呼び出されます。 `resolve` と `reject` には、任意の型の単一の引数を渡すことができます。

よって、 `alarm()` はこのように実装できます。

```js
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("アラームの待ち時間を負数にすることはできません。");
    }
    setTimeout(() => {
      resolve(`${person}、起きて！`);
    }, delay);
  });
}
```

この関数は新しい `Promise` を作成し、その値を返します。プロミスの executor 内部では、

- `delay` が負でないことを調べ、負である場合にはエラーを発生させます。

- `setTimeout()` を呼び出し、コールバックと `delay` を渡します。コールバックはタイマーが切れたときに呼び出されます。コールバックでは `resolve` を呼び出して、 `"起きて！"` というメッセージを渡します。

## alarm() API の使用

この部分は前の記事でおなじみですね。 `alarm()` を呼び出すことができ、返されたプロミスにおいて `then()` と `catch()` を呼び出して、プロミスの履行と拒否の場合のハンドラーを設定することができます。

```html hidden
<div>
  <label for="name">名前:</label>
  <input type="text" id="name" name="name" size="4" value="Matilda" />
</div>

<div>
  <label for="delay">待ち時間:</label>
  <input type="text" id="delay" name="delay" size="4" value="1000" />
</div>

<button id="set-alarm">アラームを設定</button>
<div id="output"></div>
```

```css hidden
button {
  display: block;
}

div,
button {
  margin: 0.5rem 0;
}
```

```js
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("アラームの待ち時間を負数にすることはできません。");
    }
    setTimeout(() => {
      resolve(`${person}、起きて！`);
    }, delay);
  });
}

button.addEventListener("click", () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch(
      (error) => (output.textContent = `アラームを設定できません: ${error}`),
    );
});
```

{{EmbedLiveSample("Using the alarm() API", 600, 160)}}

「名前」と「待ち時間」の値を異なる値に設定してみてください。「待ち時間」に負の値を設定してみてください。

## async と await を alarm() API で使用

`alarm()` は `Promise` を返すので、他のプロミスと同じように、プロミス連鎖、 `Promise.all()`、 `async` / `await` を行うことができるようになります。

```html hidden
<div>
  <label for="name">名前:</label>
  <input type="text" id="name" name="name" size="4" value="Matilda" />
</div>

<div>
  <label for="delay">待ち時間:</label>
  <input type="text" id="delay" name="delay" size="4" value="1000" />
</div>

<button id="set-alarm">アラームを設定</button>
<div id="output"></div>
```

```css hidden
button {
  display: block;
}

div,
button {
  margin: 0.5rem 0;
}
```

```js
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("アラームの待ち時間を負数にすることはできません。");
    }
    setTimeout(() => {
      resolve(`${person}、起きて！`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `アラームを設定できません: ${error}`;
  }
});
```

{{EmbedLiveSample("Using async and await with the alarm() API", 600, 160)}}

## 関連情報

- [`Promise()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Introducing_workers", "Learn/JavaScript/Asynchronous")}}
