---
title: クロージャ
slug: Web/JavaScript/Closures
l10n:
  sourceCommit: 9c4fb236cd9ced12b1eb8e7696d8e6fcb8d8bad3
---

{{jsSidebar("Intermediate")}}

**クロージャ**は、組み合わされた（囲まれた）関数と、その周囲の状態（**レキシカル環境**）への参照の組み合わせです。言い換えれば、クロージャは内側の関数から外側の関数スコープへのアクセスを提供します。JavaScript では、関数が作成されるたびにクロージャが作成されます。

## レキシカルスコープ

次のような関数を考えてみてください。

```js
function init() {
  var name = "Mozilla"; // name は、init が作成するローカル変数
  function displayName() {
    // displayName() は内部に閉じた関数
    console.log(name); // 親関数で宣言された変数を使用
  }
  displayName();
}
init();
```

`init()` 関数はローカル変数 `name` を作成し、それから関数 `displayName()` を定義しています。`displayName()` は `init()` の中で定義されている内部関数で、その関数本体の内部でしか利用できません。`displayName()` 自体はローカル変数を持っていませんが、外側の関数で宣言された変数にアクセスできるので、`displayName()` では親関数 `init()` で宣言された変数 `name` を使用できます。しかし、 `displayName()` に同じローカル変数があればそれが使われます。

[この JSFiddle リンク](https://jsfiddle.net/3dxck52m/)を使用してコードを実行すると、`displayName()` 関数内の `console.log()` 文が、その親関数で宣言されている `name` 変数の値を正常に表示していることに注意してください。これはレキシカルスコープの例で、関数が入れ子になっているときにパーサーがどのように変数名を解決するかを記述したものです。レキシカルという言葉は、レキシカルスコープがソースコード内で変数が宣言された場所を使用して、その変数が利用できる場所を決定するという事実を示しています。入れ子の関数は、その外側のスコープで宣言された変数にアクセスすることができます。

この具体例では、変数が宣言された関数本体の中でしかアクセスできないため、スコープは関数スコープと呼ばれます。

### let と const のスコープ

従来（ES6 以前）、JavaScript には関数スコープとグローバルスコープの 2 種類のスコープしかありませんでした。`var` で宣言された変数は、関数内で宣言されたか、関数外で宣言されたかによって、関数スコープかグローバルスコープかのどちらかになります。中括弧で囲まれたブロックはスコープを作成しないので、これはやっかいなことです。

```js
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
```

ブロックがスコープを作成する他の言語（例えば C や Java）から来た人にとって、上記のコードは、`console.log` の行がどちらのブロックでも `x` のスコープ外になるため、エラーが発生するはずです。しかし、ブロックは `var` のスコープを作成しないので、ここでの `var` の記述は実際にはグローバル変数を作成することになります。また、クロージャと組み合わせると実際にバグが発生することを示す[実例](#creating_closures_in_loops_a_common_mistake)が下記で紹介されています。

ES6 で JavaScript は `let` と `const` 宣言を導入し、他にも[一時的なデッドゾーン](/ja/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) など、ブロックスコープ変数を作成できるようにしました。

```js
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

要するに、ブロックは ES6 でようやくスコープとして扱われるようになりましたが、`let` や `const` で変数を宣言した場合に限ります。さらに、ES6 では[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)が導入され、別の種類のスコープが導入されました。クロージャはこれらすべてのスコープで変数を捕捉することができるのですが、これについては後ほど紹介します。

## クロージャ

今度は次のような例を考えます。

```js
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

このコードを実行すると、前回例に挙げた `init()` 関数と全く同じ効果があります。異なる形で興味深いのは、`displayName()` の内部関数が、実行される前に外部関数から返されることです。

このコードが動作するということは直感的に理解できないかもしれません。いくつかのプログラミング言語では、関数内部のローカル変数はその関数が実行されている間だけ存在します。一旦 `makeFunc()` の実行が完了したら、name 変数はもう必要とされなくなると考えた方が筋は通っています。ただこのコードが期待したとおりに動くという事は、これは明らかに JavaScript にはあてはまりません。

この理由は、JavaScript の関数はクロージャとなるためです。クロージャは関数とその関数が作られた環境という 2 つのものの組み合わせです。この環境は、クロージャが作られた時点でスコープ内部にあったあらゆる変数によって構成されています。この場合、`myFunc` は `makeFunc` が実行された時に作られた `displayName` 関数のインスタンスへの参照です。`displayName` のインスタンスはレキシカル環境への参照を保持し、そこに `name` 変数が存在します。このため、`makeFunc` が実行された時に、`name` 変数が残っていて "Mozilla" が `alert` に渡されます。

ここにもう少し面白い例があります。`makeAdder` 関数です。

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

この例では、1 つの引数 `x` を取り、新しい関数を返す `makeAdder(x)` 関数を定義しています。返される関数は 1 つの引数 `y` を取り、`x` と `y` の和を返します。

要するに、`makeAdder` は関数ファクトリーです。これは与えられた引数に特定の値を足す関数を作ります。上の例では関数ファクトリーを使って 2 つの新しい関数を作成しています。1 つは引数に 5 を加えるもので、もう 1 つは 10 を加えるものです。

`add5` と `add10` は両方ともクロージャです。両者は同じ関数本体の定義を共有していますが、保有している環境は異なります。`add5` の環境では `x` は 5 で、`add10` の環境では `x` は 10 です。

## 実用的なクロージャ

クロージャが有益なのは、データ（レキシカル環境）とそのデータを使用する関数を関連付けることができるからです。これは、オブジェクト指向プログラミングと明らかに並列しています。オブジェクトでは、データ（オブジェクトのプロパティ）を 1 つまたは複数のメソッドに関連付けることができます。

したがって、メソッドを 1 つだけ持つオブジェクトを使いたくなるような状況ならば、どんな時でもクロージャを使う事ができます。

ウェブではこのような状況はよくあります。私たちが書く JavaScript のコードは大半がイベントベースです。つまり、ある動作を定義し、それを click や keypress といったユーザーによって引き起こされるイベントに取り付けます。私たちのコードの多くはコールバック、すなわちイベントに反応して実行される単独の関数として取り付けられます。

実例を挙げましょう。あるページにそのページのテキストの大きさを調整するためのボタンを追加しようとしているとします。1 つの方法として、まず `body` 要素の font-size をピクセル数で指定して、そのページ内の (見出しなどの) 他の要素のサイズを相対単位 `em` で設定します。

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

これから作る対話式のテキストサイズ調整ボタンは、`body` 要素の `font-size` プロパティを変更し、その変更は相対単位によってページ上のほかの要素にも適用されます。

JavaScript のコード:

```js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
```

`size12`、`size14`、`size16` はそれぞれ body のテキストサイズを 12、14、16 px に変更する関数になっています。これらは以下のようにしてボタン (この場合はリンク) に取り付けられます。

```js
document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

```html
<button id="size-12">12</button>
<button id="size-14">14</button>
<button id="size-16">16</button>
```

[JSFiddle](https://jsfiddle.net/hotae160/) でコードを実行します。

## クロージャでプライベートメソッドを模倣する

Java などの言語ではプライベートなメソッドを宣言することが出来ます。これは同じクラス内にあるほかのメソッドからのみ呼び出せるメソッドのことです。

JavaScript には、[クラス](/ja/docs/Web/JavaScript/Reference/Classes)が登場するまで、[プライベートメソッド](/ja/docs/Web/JavaScript/Reference/Classes/Private_class_fields#プライベートメソッド)を宣言するネイティブの方法はありませんでしたが、クロージャを使うとプライベートメソッドを模倣することができます。プライベートメソッドはコードへのアクセスを制限するのに役立つだけではなく、コードのパブリックインターフェイスが不要なメソッドでいっぱいになるのを防ぐため、グローバル名前空間を管理するのに非常に有効です。

[モジュールパターン](https://www.google.com/search?q=javascript+module+pattern)としても知られるクロージャを使って、プライベートな関数と変数にアクセスできるパブリック関数を定義するにはこのようにします。

```js
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
```

ここでは色々なことが行われています。前の例ではクロージャがそれぞれ独自の環境を持っていましたが、この例では環境が 1 つだけ作成され、その環境は `counter.increment`, `counter.decrement`, `counter.value` という 3 つの関数によって共有されています。

この共有レキシカル環境は、_定義されるとすぐに実行される_（[IIFE](/ja/docs/Glossary/IIFE) とも呼ばれます）無名関数の本文で作成されています。この環境は変数 `privateCounter` と関数 `changeBy` という 2 つのプライベートアイテムを含んでいます。これらはどちらも無名関数の外側からは直接アクセス出来ません。その代わり、この無名ラッパー関数から返される 3 つのパブリック関数からはアクセスできます。

これら 3 つのパブリック関数は同じ環境を共有するクロージャです。JavaScript のレキシカルスコープにより、これらの関数はそれぞれが変数 `privateCounter` と関数 `changeBy` にアクセスできます。

```js
const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
```

2 つのカウンターが互いに独立した状態を維持していることに注目してください。各クロージャは、独自のクロージャを介して異なるバージョンの `privateCounter` 変数を参照しています。カウンターのいずれかが呼び出されるたびに、この変数の値を変更することで、そのレキシカル環境が変化します。あるクロージャで変数値を変更しても、もう一方のクロージャの値には影響しません。

> **メモ:** このようにしてクロージャを使うと、普通はオブジェクト指向プログラミングに付き物のいくつかの利点、具体的には*データの隠蔽*や*カプセル化*が利用できるようになります。

## クロージャのスコープチェーン

すべてのクロージャには 3 つのスコープがあります。

- ローカルスコープ（独自のスコープ）
- 外側の関数スコープ
- グローバルスコープ

よくある間違いは、外側の関数がネストされた関数である場合、外側の関数スコープへのアクセスにはさらに外側の関数スコープが含まれており。実質的にスコープチェーンが生じていることに気づかないことです。次のコードの例を考えてみましょう。

```js
// グローバルスコープ
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // 外側の関数スコープ
      return function (d) {
        // ローカルスコープ
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

無名関数を使わずに書くこともできます。

```js
// グローバルスコープ
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // 外側の関数スコープ
      return function sum4(d) {
        // ローカルスコープ
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20
```

上記の例では、一連のネストされた関数があり、それらはすべて外側の関数スコープにアクセスできます。この文脈では、クロージャは*すべて*の外側の関数スコープにアクセスできると言えます。

クロージャはブロックスコープやモジュールスコープの変数も取り込むことができます。例えば、以下はブロックスコープにある変数 `y` に対してクロージャを作成します。

```js
function outer() {
  const x = 5;
  if (Math.random() > 0.5) {
    const y = 6;
    return () => console.log(x, y);
  }
}

outer()(); // Logs 5 6
```

モジュール上のクロージャは、もっと興味深いものになります。

```js
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

ここでは、モジュールはモジュールスコープの変数 `x` を隠蔽するゲッターセッター関数のペアをエクスポートします。他のモジュールから `x` に直接アクセスできない場合でも、この関数で読み書きができます。

```js
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

クロージャはインポートされた値も隠蔽することができ、元の値が変わるとインポートされた値もそれに応じて変わるため、_ライブバインド_ と見なされます。

```js
// myModule.js
export let x = 1;
export const setX = (val) => {
  x = val;
};
```

```js
// closureCreator.js
import { x } from "./myModule.js";

export const getX = () => x; // インポートされたライブバインドを隠蔽
```

```js
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
```

## ループ内でクロージャを作成: 良くある間違い

[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) キーワードが導入される前までは、ループの内部でクロージャが作成された時にある問題がよく起こっていました。次のような例を考えてみます。

```html
<p id="help">ここにヘルプが表示されます</p>
<p>E メール: <input type="text" id="email" name="email" /></p>
<p>名前: <input type="text" id="name" name="name" /></p>
<p>年齢: <input type="text" id="age" name="age" /></p>
```

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "あなたの E メールアドレス" },
    { id: "name", help: "あなたのフルネーム" },
    { id: "age", help: "あなたの年齢 (17 歳以上)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // この行で `var` を使用していることが原因
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

[JSFiddle](https://jsfiddle.net/v7gjv/8164/) でコードを実行してみてください。

配列 `helpText` は 3 つのヘルプを定義しており、それぞれが文書内の入力フィールドの ID と関連付けられています。ループがこれらの定義を巡回して、それぞれの入力フィールドの `onfocus` イベントをそれに関連付けられたヘルプを表示するメソッドと結び付けています。

このコードを実行してみると、期待したとおりには動かないのが分かります。どのフィールドにフォーカスしても、表示されるのは年齢についてのメッセージです。

こうなる理由は、`onfocus` に代入された関数がクロージャだからです。このクロージャは、関数定義と、`setupHelp` 関数スコープから捕捉された環境から成っています。クロージャは 3 つ作られましたが、これらはみな 1 つの同じ環境を共有しています。`onfocus` コールバックが実行される時にはループはすべて終了しており、変数 `item`（3 つのクロージャ全てに共有されている）は `helpText` リストの最後の項目を示したままにされています。

こういった場合の解決策の 1 つとして、より多くのクロージャを使う方法があります。具体的には、前に述べたような関数ファクトリーを使います。

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "あなたの E メールアドレス" },
    { id: "name", help: "あなたのフルネーム" },
    { id: "age", help: "あなたの年齢 (17 歳以上)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

[JSFiddle](https://jsfiddle.net/v7gjv/9573/) でコードを実行してみてください。

これは期待通り動きます。全てのコールバックが 1 つの環境を共有するのではなく、`makeHelpCallback` 関数がそれぞれに対して*新しいレキシカル環境*を作っており、そこでは `help` が配列 `helpText` の対応する文字列を参照しています。

上のものを無名クロージャを使って書く、他の方法もあります。

```js
function showHelp(help) {
  document.getElementById("help").innerHTML = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "あなたの E メールアドレス" },
    { id: "name", help: "あなたのフルネーム" },
    { id: "age", help: "あなたの年齢 (17 歳以上)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function () {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(); // item の現在値（反復処理まで保存される）を持つ即時イベントリスナーの装着
  }
}

setupHelp();
```

これ以上クロージャを使いたくない場合、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) や [`const`](/ja/docs/Web/JavaScript/Reference/Statements/const) キーワードも使用できます。

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  const helpText = [
    { id: "email", help: "あなたの E メールアドレス" },
    { id: "name", help: "あなたのフルネーム" },
    { id: "age", help: "あなたの年齢 (17 歳以上)" },
  ];

  for (let i = 0; i < helpText.length; i++) {
    const item = helpText[i];
    document.getElementById(item.id).onfocus = () => {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

この例では `var` の代わりに `const` を使っているため、すべてのクロージャがブロックスコープの変数をバインドしており、つまり追加のクロージャは要求されません。

他の方法として、以下のように `forEach()` を使用して配列 `helpText` を操作し、それぞれの [`<input>`](/ja/docs/Web/HTML/Element/input) にリスナーを割り当てることができます。

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "あなたの E メールアドレス" },
    { id: "name", help: "あなたのフルネーム" },
    { id: "age", help: "あなたの年齢 (17 歳以上)" },
  ];

  helpText.forEach(function (text) {
    document.getElementById(text.id).onfocus = function () {
      showHelp(text.help);
    };
  });
}

setupHelp();
```

## パフォーマンスへの配慮

前回述べたように、それぞれの関数インスタンスは、独自のスコープとクロージャを管理します。したがって、クロージャが具体的なタスクに必要でない場合に、不必要に他の関数の中に関数を作成することは、処理速度とメモリー消費の両面でスクリプトのパフォーマンスに悪影響を与えるので、賢明ではありません。

例えば、新しくオブジェクト/クラスを作成する時、一般的にメソッドはオブジェクトのコンストラクターの中で定義するのではなく、オブジェクトのプロトタイプに結びつけるべきです。コンストラクタの中で定義してしまうと、コンストラクターが呼び出されるたびに（つまりオブジェクトが作成されるたびに）メソッドが再代入されてしまうことになるからです。

以下のケースを考えてみてください。

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };

  this.getMessage = function () {
    return this.message;
  };
}
```

上のコードは、この具体的な例ではクロージャを使用することの恩恵を受けられないので、代わりに以下のようにクロージャを使用しないように書き換えることができます。

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName() {
    return this.name;
  },
  getMessage() {
    return this.message;
  },
};
```

ただし、プロトタイプの再定義は推奨されません。以下の例のように既存のプロトタイプに追加するのがより好ましい方法です。

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
```

上の 2 つの例では、プロトタイプが継承されて全てのオブジェクトによって共有されるため、オブジェクトが作成されるたびにメソッドが定義されずに済みます。詳しくは[継承とプロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)を参照して下さい。
