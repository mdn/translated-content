---
title: クロージャ
slug: Web/JavaScript/Closures
---

{{jsSidebar("Intermediate")}}

**クロージャ**は、組み合わされた（囲まれた）関数と、その周囲の状態（**レキシカル環境**）への参照の組み合わせです。言い換えれば、クロージャは内側の関数から外側の関数スコープへのアクセスを提供します。JavaScript では、関数が作成されるたびにクロージャが作成されます。

## レキシカルスコープ

次のような関数を考えます。

```js
function init() {
  var name = 'Mozilla'; // name は、init が作成するローカル変数

  function displayName() { // displayName() は内部に閉じた関数
    alert(name); // 親関数で宣言された変数を使用
  }
  displayName();
}
init();
```

`init()` 関数はローカル変数 `name` を作成し、それから関数 `displayName()` を定義しています。`displayName()` は `init()` の中で定義されている内部関数で、その関数本体の内部でしか利用できません。`displayName()` 自体はローカル変数を持っていませんが、外側の関数で宣言された変数にアクセスできるので、`displayName()` では親関数 `init()` で宣言された変数 `name` を使用できます。しかし、 `displayName()` に同じローカル変数があればそれが使われます。

コードを [JSFiddle で実行](http://jsfiddle.net/xAFs9/3/)して、`displayName()` 関数の `alert()` 文が、親関数で定義された `name` 変数の値を表示するのを確認してください。これは*レキシカルスコープ*、つまり関数がネストされている時にパーサーが変数名を解決する方法を示す例です。*レキシカル*という言葉の触れるところは、変数のスコープはソースコード内の位置によって決定され、ネストされた関数は外側のスコープで宣言された変数にアクセスすることができます。

## クロージャ

今度は次のような例を考えます。

```js
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

このコードを実行すると、前の `init()` の例と全く同じように文字列 "Mozilla" が JavaScript の警告ボックスに表示されます。前の例とは異なる、興味深い点は、内部関数 `displayName()` がそれが実行される前に外側の関数から返されているという事です。

このコードが動作するということは直感的に理解できないかもしれません。いくつかのプログラミング言語では、関数内部のローカル変数はその関数が実行されている間だけ存在します。一旦 `makeFunc()` の実行が完了したら、name 変数はもう必要とされなくなると考えた方が筋は通っています。ただこのコードが期待したとおりに動くという事は、これは明らかに JavaScript にはあてはまりません。

この理由は、JavaScript の関数は*クロージャとなるためで*す。クロージャは関数とその関数が作られた環境という 2 つのものの組み合わせです。この環境は、クロージャが作られた時点でスコープ内部にあったあらゆる変数によって構成されています。この場合、`myFunc` は `makeFunc` が実行された時に作られた `displayName` 関数のインスタンスへの参照です。`displayName` のインスタンスはレキシカル環境への参照を保持し、そこに `name` 変数が存在します。このため、`makeFunc` が実行された時に、`name` 変数が残っていて "Mozilla" が `alert` に渡されます。

ここにもう少し面白い例があります。`makeAdder` 関数です。

```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7 と表示される
console.log(add10(2)); // 12 と表示される
```

この例では、1 つの引数 `x` を取り、新しい関数を返す `makeAdder(x)` 関数を定義しています。返される関数は 1 つの引数 `y` を取り、`x` と `y` の和を返します。

要するに、`makeAdder` は関数ファクトリです。これは与えられた引数に特定の値を足す関数を作ります。上の例では関数ファクトリを使って 2 つの新しい関数を作成しています。1 つは引数に 5 を加えるもので、もう 1 つは 10 を加えるものです。

`add5` と `add10` は両方ともクロージャです。両者は同じ関数本体の定義を共有していますが、保有している環境は異なります。`add5` の環境では `x` は 5 で、`add10` の環境では `x` は 10 です。

## 実用的なクロージャ

理論はこれぐらいにしておくとして、クロージャは実際の役に立つのでしょうか? クロージャの実用上の意義を考えてみましょう。クロージャを使うと、データ (環境) をそれを操作する関数と結びつける事が出来ます。これはオブジェクトを使ってデータ (オブジェクトのプロパティ) を 1 つかそれ以上のメソッドと結びつける事が出来るオブジェクト指向プログラミングと明らかに類似しています。

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
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
```

`size12`、`size14`、`size16` はそれぞれ body のテキストサイズを 12、14、16 px に変更する関数になっています。これらは以下のようにしてボタン (この場合はリンク) に取り付けられます。

```js
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```

```html
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>
```

[JSFiddle](https://jsfiddle.net/vnkuZ/7726/) でコードを実行します。

## クロージャでプライベートメソッドを模倣する

Java などの言語ではプライベートなメソッドを宣言することが出来ます。これは同じクラス内にあるほかのメソッドからのみ呼び出せるメソッドのことです。

JavaScript にはこういった機能は組み込まれていませんが、クロージャを使うとプライベートメソッドを模倣する事ができます。プライベートメソッドはコードへのアクセスを制限するのに役立つだけではなく、コードのパブリックインターフェイスが不要なメソッドでいっぱいになるのを防ぐため、グローバル名前空間を管理するのに非常に有効です。

[モジュールパターン](http://www.google.com/search?q=javascript+module+pattern)としても知られる、クロージャを使って、プライベートな関数と変数にアクセスできるパブリック関数を定義するにはこのようにします。

```js
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.
```

ここでは色々な事が行われています。前の例ではクロージャがそれぞれ独自の環境を持っていましたが、この例では環境が 1 つだけ作成され、その環境は `counter.increment`, `counter.decrement`, `counter.value` という 3 つの関数によって共有されています。

この共有レキシカル環境は、_定義されるとすぐに実行される_（IIFE とも呼ばれます）無名関数の本文で作成されています。この環境は変数 `privateCounter` と関数 `changeBy` という 2 つのプライベートアイテムを含んでいます。これらはどちらも無名関数の外側からは直接アクセス出来ません。その代わり、この無名ラッパ関数から返される 3 つのパブリック関数からはアクセスできます。

これら 3 つのパブリック関数は同じ環境を共有するクロージャです。JavaScript のレキシカルスコープにより、これらの関数はそれぞれが変数 `privateCounter` と関数 `changeBy` にアクセスできます。

> **メモ:** カウンターを作成する無名関数を定義して、それをすぐに呼び出して結果を `counter` 変数に代入していることに注目してください。この関数を別の変数 `makeCounter` に格納し、複数のカウンターを作成するために使用することができます。

```js
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();

alert(counter1.value());  // 0.

counter1.increment();
counter1.increment();
alert(counter1.value()); // 2.

counter1.decrement();
alert(counter1.value()); // 1.
alert(counter2.value()); // 0.
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
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // ローカルスコープ
      return function(d){
        // ローカルスコープ
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// 無名関数を使わずに書くこともできます。

// グローバルスコープ
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // 外側の関数スコープ
      return function sum4(d){
        // ローカルスコープ
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) //log 20
```

上記の例では、一連のネストされた関数があり、それらはすべて外側の関数スコープにアクセスできます。この文脈では、クロージャは*すべて*の外側の関数スコープにアクセスできると言えます。

## よくある間違い: ループ内でクロージャを作成する

ECMAScript 2015 で [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) キーワードが導入される前までは、ループの内部でクロージャが作成された時にある問題がよく起こっていました。次のような例を考えてみます。

```html
<p id="help">ここにヘルプが表示されます</p>
<p>E メール: <input type="text" id="email" name="email"></p>
<p>名前: <input type="text" id="name" name="name"></p>
<p>年齢: <input type="text" id="age" name="age"></p>
```

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
    {'id': 'email', 'help': 'あなたの E メールアドレス'},
    {'id': 'name', 'help': 'あなたのフルネーム'},
    {'id': 'age', 'help': 'あなたの年齢 (17 歳以上)'}
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```

[JSFiddle](https://jsfiddle.net/v7gjv/8164/) でコードを実行します。

配列 `helpText` は 3 つのヘルプを定義しており、それぞれがドキュメント内の入力フィールドの ID と関連付けられています。ループがこれらの定義を巡回して、それぞれの入力フィールドの onfocus イベントをそれに関連付けられたヘルプを表示するメソッドと結び付けています。

このコードを実行してみると、期待したとおりには動かないのが判ります。どのフィールドにフォーカスしても、表示されるのは年齢についてのメッセージです。

こうなる理由は、`onfocus` に代入された関数がクロージャだからです。このクロージャは、関数定義と、`setupHelp` 関数スコープから捕捉された環境から成っています。クロージャは 3 つ作られましたが、これらはみな 1 つの同じ環境を共有しています。`onfocus` コールバックが実行される時にはループはすべて終了しており、変数 item (3 つのクロージャ全てに共有されている) は `helpText` リストの最後の項目を示したままにされています。

こういった場合の解決策の 1 つとして、より多くのクロージャを使う方法があります。具体的には、前に述べたような関数ファクトリを使います。

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'メールアドレス'},
      {'id': 'name', 'help': '氏名'},
      {'id': 'age', 'help': '年齢 (17歳以上)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

[JSFiddle](https://jsfiddle.net/v7gjv/9573/) でコードを実行します。

これは期待通り動きます。全てのコールバックが 1 つの環境を共有するのではなく、`makeHelpCallback` 関数がそれぞれに対して*新しいレキシカル環境*を作っており、そこでは `help` が配列 `helpText` の対応する文字列を参照しています。

上のものを匿名クロージャを使って書く、他の方法もあります:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'メールアドレス'},
      {'id': 'name', 'help': '氏名'},
      {'id': 'age', 'help': '年齢 (17歳以上)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    (function() {
       var item = helpText[i];
       document.getElementById(item.id).onfocus = function() {
         showHelp(item.help);
       }
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

setupHelp();
```

これ以上クロージャを使いたくない場合、ES2015 で導入された [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) キーワードも使用できます:

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'メールアドレス'},
      {'id': 'name', 'help': '氏名'},
      {'id': 'age', 'help': '年齢 (17歳以上)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```

この例では `var` の代わりに `let` を使っているため、すべてのクロージャがブロックスコープの変数をバインドしており、つまり追加のクロージャは要求されません。

他の方法として、以下のように `forEach()` を使用して配列 `helpText` を操作し、それぞれの {{htmlelement("div")}} にリスナーを割り当てることができます。

```js
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'メールアドレス'},
      {'id': 'name', 'help': '氏名'},
      {'id': 'age', 'help': '年齢 (17歳以上)'}
    ];

  helpText.forEach(function(text) {
      document.getElementById(text.id).onfocus = function() {
      showHelp(text.help);
      }
  });
}

setupHelp();
```

## パフォーマンスへの配慮

あるタスクを実行する時、クロージャが必要とされていないのにいたずらに関数を他の関数の中に作成するのは、スクリプトのパフォーマンスに悪影響を及ぼすのであまり賢いやり方ではありません。

例えば、新しくオブジェクト/クラスを作成する時、一般的にメソッドはオブジェクトのコンストラクタの中で定義するのではなく、オブジェクトのプロトタイプに結びつけるべきです。コンストラクタの中で定義してしまうと、コンストラクタが呼び出されるたびに (つまりオブジェクトが作成されるたびに) メソッドが再代入されてしまうことになるからです。

次の実践的ではない例証のためのケースを考えます。

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
```

上のコードではクロージャを使う事によって得るものが何もないので、再構成するべきです。

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};
```

ただし、プロトタイプの再定義は推奨されません。以下の例のように既存のプロトタイプに追加するのがより好ましい方法です。

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};
```

上の 2 つの例では、プロトタイプが継承されて全てのオブジェクトによって共有されるため、オブジェクトが作成されるたびにメソッドが定義されずに済みます。詳しくは[オブジェクトモデルの詳細](/ja/docs/Web/JavaScript/Guide/Details_of_the_Object_Model) を参照して下さい。
