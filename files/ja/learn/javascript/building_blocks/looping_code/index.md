---
title: ループするコード
slug: Learn/JavaScript/Building_blocks/Looping_code
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

プログラミング言語は、繰り返し実行するタスクを素早く終わらせるのがとても得意です。基本的な計算処理から、同じような作業がたくさんあるのならどんな状況でもこなします。今度は JavaScript でそういった目的を果たすために使用するループ構造を見てみましょう。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターの知識、HTML と CSS への理解、
        <a href="/ja/docs/Learn/JavaScript/First_steps"
          >JavaScript の第一歩</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>JavaScript でのループの使い方を理解する。</td>
    </tr>
  </tbody>
</table>

## なぜループが有用か

ループは、同じことを何度も何度も繰り返すものです。多くの場合、コードはループを一巡するたびに少しずつ異なり、また、同じコードを実行しても変数が異なることもあります。

### ループコードの例

例えば、{{htmlelement("canvas")}} 要素に 100 個のランダムな円を描画したいとします（\[更新] ボタンを押すと、例を何度も実行して異なるランダムコレクションを見ることができます）。

```html hidden
<button>更新</button> <canvas></canvas>
```

```css hidden
html {
  width: 100%;
  height: inherit;
  background: #ddd;
}

canvas {
  display: block;
}

body {
  margin: 0;
}

button {
  position: absolute;
  top: 5px;
  left: 5px;
}
```

{{ EmbedLiveSample('Looping_code_example', '100%', 400) }}

こちらはこの例を実装している JavaScript コードです。

```js
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}

btn.addEventListener("click", draw);
```

### ループありとループなし

これですべてのコードを理解する必要はありませんが、実際に 100 個の円を描画している部分を見てみましょう。

```js
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,0.5)";
  ctx.arc(
    random(canvas.width),
    random(canvas.height),
    random(50),
    0,
    2 * Math.PI,
  );
  ctx.fill();
}
```

- `random(x)` は、コードの手前で定義されており、 `0` と `x-1` の間の実数を返します。

基本的なことが分かると思います。ループを使用してこのコードを 100 回反復処理し、それぞれがページ上のランダムな位置に円を描画します。
必要なコードの量は、100 個の円を描画する場合でも、1000 個の円を描画する場合でも、1 万個の円を描画する場合でも同じです。
変更しなければならないのは、たった一つの数字だけです。

もしここでループを使用していなければ、描画したい円ごとに以下のコードを繰り返して書く必要があります。

```js
ctx.beginPath();
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.arc(
  random(canvas.width),
  random(canvas.height),
  random(50),
  0,
  2 * Math.PI,
);
ctx.fill();
```

これはとても退屈で、メンテナンスも大変でしょう。

## コレクション内のループ処理

ループを使用する場合のほとんどは、アイテムのコレクションがあって、すべてのアイテムに対して何かを行いたいときです。

{{jsxref("Array")}} は、コレクションの一種です。このコースの[配列](/ja/docs/Learn/JavaScript/First_steps/Arrays)の章で紹介しました。
しかし、JavaScript には他にも {{jsxref("Set")}} や {{jsxref("Map")}} などのコレクションがあります。

### for...of ループ

コレクションをループ処理する基本的なツールは {{jsxref("statements/for...of","for...of")}} ループです。

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

この例では、`for (const cat of cats)` は次のように言っています。

1. コレクション `cats` が指定されたら、コレクション内の最初のアイテムを取得する。
2. それを変数 `cat` に割り当てて、中括弧 `{}` で囲まれたコードを実行する。
3. 次のアイテムを取得し、コレクションの終わりに達するまで (2) を繰り返す。

### map() と filter()

JavaScript には、コレクションに対してより特化したループもあるので、ここではそのうちの 2つを紹介します。

`map()` を使用すると、コレクション内の各アイテムに対して何かを行い、変更されたアイテムを格納した新しいコレクションを作成することができます。

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

ここでは、{{jsxref("Array.prototype.map()","cats.map()")}} に関数を渡すと、`map()` は配列内のそれぞれのアイテムにその関数を 1 回ずつ、そのアイテムを渡して呼び出します。そして、それぞれの関数呼び出しの返値を新しい配列に追加し、最後に新しい配列を返します。この場合、提供した関数はアイテムを大文字に変換するので、結果として得られる配列には、すべてのネコ科動物がが大文字で格納されます。

```
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

{{jsxref("Array.prototype.filter()","filter()")}} を使用すると、コレクション内のそれぞれのアイテムをテストし、一致するアイテムのみを格納した新しいコレクションを作成することができます。

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

これは `map()` とよく似ていますが、渡す関数が[論理値](/ja/docs/Learn/JavaScript/First_steps/Variables#論理値)を返す点が異なります。 もし `true` を返すなら、アイテムは新しい配列に含まれます。
この関数では、アイテムが文字「L」で始まるかどうかをテストするので、結果は名前が「L」で始まる猫だけを含む配列になります。

```
[ "Leopard", "Lion" ]
```

なお、`map()` と `filter()` は、どちらもよく関数式と一緒に使われます。これは[関数](/ja/docs/Learn/JavaScript/Building_blocks/Functions)モジュールで学びます。
関数式を使用すると、上の例をもっとコンパクトに書き直すことができます。

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## 標準的な for ループ

上の「円を描く」例では、ループさせるアイテムのコレクションがある訳ではありません。実際には、同じコードを 100 回実行したいだけです。
このような用途では、{{jsxref("statements/for","for")}} ループを使用する必要があります。
これは以下のような構文があります。構文は以下の通りです。

```
for (初期化処理; 条件; 最後の式) {
  // 実行するコード
}
```

ここでは、次のようになります。

1. `for` キーワードに続き括弧があります。
2. 括弧の中には、セミコロンで区切られた以下の項目があります。

   1. **初期化処理**: これはたいていの場合、繰り返し回数分増やしていく変数の初期化処理となります。
      この変数を**カウンター変数**と呼ぶことがあります。
   2. **条件**: これは、ループがいつ繰り返しをやめるかを定義します。
      これはふつう、比較演算子を伴って、終了条件に達したかどうかを確認します。
   3. **最後の式**: これはループの 1 回が終了する度に評価される（または実行される）コードです。
      通常、カウンター変数を増加させ（場合によっては減少させ）、条件が `true` ではなくなるポイントに近づけていきます。

3. コードのブロックを格納する中括弧。このコードは、ループが反復処理されるたびに実行されます。

### 平方の計算

実際の例を見て、これらの機能をより明確にイメージできるようにしましょう。

```html hidden
<button id="calculate">計算</button>
<button id="clear">クリア</button>
<pre id="results"></pre>
```

```js
const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\n完了!";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
```

これは次のような出力結果となります。

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

このコードは、1 から 9 までの数字の平方を計算し、その結果を書き出します。コードの中心は、計算を行う `for` ループです。

`for (let i = 1; i < 10; i++)` の行を 3 つの部分に分割してみましょう。

1. `let i = 1`: カウンター変数である `i` は `1` から始めます。ループを一周するたびにカウンターに代入するため、カウンターに `let` を使用しなければならないことに注意してください。
2. `i < 10`: `i` が `10` よりも小さい限り、ループを繰り返し続けます。
3. `i++`: ループを一周するたびに `i` に 1 を加算します。

ループの内部では、現在の `i` の値の平方、すなわち `i * i` を計算します。計算した内容と結果を表す文字列を作成し、出力テキストに追加します。また、次に追加した文字列が改行されるように、`\n` も追加しています。すなわち、

1. 最初の実行時は `i = 1` なので `1 x 1 = 1` を追加します。
2. 二番目の実行時は `i = 2` なので `2 x 2 = 4` を追加します。
3. 以下、同様に行います。
4. `i` が `10` と等しくなったら、ループの実行を停止して、ループの下の次のコードにまっすぐ移動し、`完了!` というメッセージを新しい行に出力します。

### for ループでコレクションを繰り返し処理

`for` ループの代わりに、`for...of` ループを使用してコレクションを反復処理することができます。

上の `for...of` の例をもう一度見てみましょう。

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

このコードは次のように書き換えることができます。

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```

このループでは、`i` を `0` で開始し、`i` が配列の長さに達した時点で停止しています。
そして、ループの中で `i` を使って、配列のそれぞれのアイテムに順番にアクセスしています。

JavaScript の初期のバージョンでは、`for...of` は存在しなかったので、これが配列を反復処理する標準的な方法でした。
しかし、この方法は、コードにバグを引き起こす可能性が高くなります。例えば、

- 配列の添字が 1 ではなく 0 から始まることを忘れて、`i` を `1` から始めてしまうかもしれません。
- 最後の配列の添字が `length - 1` にあることを忘れて、`i <= cats.length` で止めてしまうかもしれません。

このような理由から、通常は、できる限り `for...of` を使用するのがベストです。

時には、配列を繰り返し処理するために `for` ループを使用する必要があります。
例えば、以下のコードでは、猫の一覧をメッセージとして出力したい。

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

最終的に出力される文章はあまり整ったものではありません。

```
My cats are called Pete, Biggles, Jasmine,
```

最後の猫については、このように別の処理をしてくれるのが望ましいと思います。

```
My cats are called Pete, Biggles, and Jasmine.
```

しかし、これを行うには、ループがいつ最後の反復処理に入ったかを知る必要があります。そのためには、`for` ループを使い、`i` の値を調べればよいのです。

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // 配列の最後にいる場合
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

## break でループを終了

すべての反復処理が終了する前にループを終了したいときは、[break](/ja/docs/Web/JavaScript/Reference/Statements/break) 文を使用して終了させることができます。
前回の記事の [switch 文](/ja/docs/Learn/JavaScript/Building_blocks/conditionals#switch_文)で、入力した値が switch 文の case に一致したとき、switch 文を抜け、それ以降のコードを実行するために `break` 文を使用しました。

これはループでも同様で、`break` 文を使用することで即時にループを抜けて、ブラウザーに続きのコードを実行させることができます。

連絡先や電話番号の配列を検索して、見つけたい番号だけを返したいとします。
まずは HTML です。検索するテキスト入力用の {{htmlelement("input")}} 要素と、検索内容を送信 (submit) する {{htmlelement("button")}} 要素、検索結果を表示する {{htmlelement("p")}} 要素を備えます。

```html
<label for="search">連絡先の名前: </label>
<input id="search" type="text" />
<button>検索</button>

<p></p>
```

現在の JavaScript では、

```js
const contacts = [
  "クリス:2232322",
  "サラ:3453456",
  "ビル:7654322",
  "メアリー:9998769",
  "ダイアン:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}の電話番号は${splitContact[1]}です。`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "連絡先が見つかりません。";
  }
});
```

{{ EmbedLiveSample('Exiting_loops_with_break', '100%', 100) }}

1. コードの先頭で、いくつか変数を宣言しています。その中に、連絡先の情報を持った配列があり、各要素は名前と電話番号をコロンで区切った文字列となっています。
2. 次に、ボタン (`btn`) にイベントリスナーを設定しています。ボタンが押されたときに検索結果が戻ってくるようになっています。
3. テキスト入力欄に入力された値を `searchName` という変数に格納してから、次の検索に備え、入力欄をクリアし、フォーカスを設定しています。検索に大文字小文字を区別しないよう、文字列に [`toLowerCase()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) を実行しているのに注意してください。
4. ここからが本題の `for...of` ループです。

   1. ループの中では、まず現在の連絡先をコロン文字で分割し、結果の 2 つの値を `splitContact` という配列に格納します。
   2. それから、条件文を用いて、`splitContact[0]` （連絡先の名前）が入力された `searchName` にまた [`toLowerCase()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) を使って小文字化したものと等しいかを判定します。
      もし等しければ、文字列を段落に入れてその連絡先の電話番号を示し、`break` を使用してループを終了しています。

5. ループの後、連絡先が設定されたかどうかをチェックし、設定されていない場合は段落テキストを「連絡先が見つかりません。」に設定しています。

> **メモ:** [すべてのソースは GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) で見ることができます（[動いているデモ](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)もあります）。

## continue で繰り返しをスキップする

[continue](/ja/docs/Web/JavaScript/Reference/Statements/continue) 文は `break` と同じような動作をします。けれど、ループを完全に抜けてしまうのではなく、次の繰り返しまで飛ばします。
それでは、今度は入力として数値を受け取り、その数以下で整数の平方である値のみを返すという例を見てみましょう。

HTML は基本的に前回の例と同じで、単純なテキスト入力と、出力用の段落があります。

```html
<label for="number">数値を入力してください: </label>
<input id="number" type="text" />
<button>整数の平方を生成</button>

<p>出力:</p>
```

JavaScript もほとんど同じですが、ループ自体が若干異なります。

```js
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "出力: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});
```

出力結果はこちらです。

{{ EmbedLiveSample('Skipping_iterations_with_continue', '100%', 100) }}

1. 今回の入力内容は数値 (`num`) です。`for` ループには、カウンターの初期値として、（今回は 0 ではなく）1 が与えられ、終了する条件としてカウンターが入力値 (`num`) より大きくなった場合と指定されており、イテレーターとして、カウンターに 1 ずつ加算するよう指定されています。
2. ループ内部では、各値の平方根を [Math.sqrt(i)](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) を使用して求め、求めた平方根を切り捨てた値が、切り捨てる前の平方根と等しいかどうかを調べています（切り捨てには [Math.floor()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) に任意の数値を渡します）。
3. もし、平方根と切り捨てた数値が等しくないのなら (`!==`)、平方根は整数ではないことを示しています。整数以外には興味がありませんので、`continue` 文を用いて、その数値をどこにも保持することなく、次のループの繰り返しまでスキップします。
4. もし、その平方根が整数値であるならば、if ブロックは飛ばされるので、`continue` 文は実行されません。代わりに、現在の `i` の値を段落の内容の後ろにスペースと一緒に結合します。

> **メモ:** [すべてのソースは GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) でも見ることができます（[動いているデモ](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)もあります）。

## while と do...while

`for` は JavaScript で利用可能な唯一のループの種類ではありません。実際には多くのものがありますが、これらのすべてを理解する必要はありませんが、仕事の同じ機能をわずかに異なる方法で認識できるように、他のものの構造を見ておく価値があります。

まず、[while](/ja/docs/Web/JavaScript/Reference/Statements/while) ループを見てみましょう。このループの構文は次のようになります。

```
初期化処理
while (条件) {
  // 実行するコード

  最後の式
}
```

これは `for` ループととてもよく似た動作をしますが、初期化変数がループの前に設定される点と、最後の式が、これら 2 つの項目が括弧の中に入っているのではなく、実行するコードの後にループの中に含まれている点が異なります。
条件は括弧の中に入っており、その前には `for` ではなく `while` キーワードが置かれています。

同じ 3 つの項目が、for ループの中で定義されているのと同じ順番で存在しています。
これは、条件が真かどうかをチェックする前に、初期化処理を定義しておく必要があるためです。
そして、ループ内のコードが実行された（反復処理が完了した）後に最後の式が実行されますが、これは条件がまだ真である場合にのみ実行されます。

猫のリストの例をもう一度見てみましょう。ただし、while ループを使うように書き直してみましょう。

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

> **メモ:** これは期待どおりに動作します。[GitHub でライブ実行](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html)してみてください（[完全なソースコード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)を見ることもできます）。

[do...while](/ja/docs/Web/JavaScript/Reference/Statements/do...while) ループはとてもよく似ていますが、while 構造の別な形です。

```
初期化処理
do {
  // 実行するコード

  最後の式
} while (条件)
```

この場合、初期化処理は再び、ループが始まる前に来ています。キーワードは、実行するコードと最期の式を含む中括弧の直前にあります。

`do...while` ループと `while` ループの主な違いは、_`do...while` ループの中のコードは常に少なくとも 1 回は実行される_ ということです。それは、ループ内のコードの後に条件が来るからです。つまり、常にそのコードを実行し、その後、もう一度実行する必要があるかどうかをチェックするのです。`while` ループや `for` ループでは、チェックが最初に来るので、そのコードは一度も実行されないかもしれません。

`do...while` ループを使用するように、猫のリストの例をもう一度書き直してみましょう。

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

> **メモ:** こちらも、これは期待どおりに動作します。[GitHub でライブ実行](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html)してみてください（[完全なソースコード](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)を見ることもできます）。

> **警告:** while と do...while では、すべてのループと同様に、カウンター変数を増加、もしくは場合により減少させて、最終的に条件が false となるようにする必要があります。
> そうしなければループは永遠に進み、ブラウザーはそれ強制的に停止させるか、クラッシュします。これは**無限ループ**と呼ばれます。

## アクティブラーニング: 発射のカウントダウン

この練習では、出力ボックスへの簡単な発射のカウントダウンを 10 から Blast off まで表示してください。
具体的には、次のようなことをしていただきます。

- 10 から 0 までのループ。初期化処理として `let i = 10;` を示します。
- それぞれの反復処理に対して、新しい段落を作成し、それを出力用の `<div>` に追加します。`const output = document.querySelector('.output');` を使うことを選択しました。
  コメント内で、ループ内のどこかで使用する必要がある 3 つのコード行を提供します。

  - `const para = document.createElement('p');` — 新しい段落を作成します。
  - `output.appendChild(para);` — 出力の `<div>` に段落を追加します。
  - `para.textContent =` — 段落内のテキストを、イコール記号の後の右辺においたものにします。

- 反復回数が異なれば、その反復回数の段落に入れるテキストも異なります（条件文と複数の `para.textContent =` 行が必要です）。

  - 数字が 10 の場合、段落に "Countdown 10" と出力する。
  - 数字が 0 の場合、段落に "Blast off!" と出力する。
  - その他の数字では、段落にその数字を出力する。

- イテレーターを含めることを忘れないでください！ですが、この例では各反復の後にカウント（アップではなく）ダウンするため、`i++` は要らないでしょう。減少方向にどうやって反復するのでしょうか？

> **メモ:** あなたがループ（例えば while(i>=0)）からタイピングを始めると、ブラウザーが固まってしまうかもしれません。終了条件をまだ入力していないからです。注意して下さい。この問題に対処するにはコメントの中にコードを書き始めて、完了してからコメントを削除することです。

間違えた場合は、［リセット］ボタンを使用してこの例をいつでもリセットできます。あなたが本当に立ち往生したら、［解答を表示］を押して解決策を見てください。

```html hidden
<h2>ライブ出力</h2>
<div class="output" style="height: 410px;overflow: auto;"></div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すと、コード領域からフォーカスを外すことができます（Tab
  はタブ文字を挿入します）。
</p>
<textarea id="code" class="playable-code" style="height: 300px;width: 95%">
let output = document.querySelector('.output');
output.innerHTML = '';

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="リセット" />
  <input id="solution" type="button" value="解答を表示" />
</div>
```

```css
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "解答を表示";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "解答を表示") {
    textarea.value = solutionEntry;
    solution.value = "解答を隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "解答を表示";
  }
  updateCode();
});

let jsSolution = `const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = \`Countdown \${i}\`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "解答を表示") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Launch_countdown', '100%', 900) }}

## アクティブラーニング: ゲストリストに記入する

この演習では、配列に格納された名前のリストを、ゲストリストにしていただきます。しかし、フィルとローラは貪欲で無礼で、いつも料理を全部食べてしまうので、ゲストに入れたくありません！私たちは 2 つのリストを用意しました。1 つはゲストを認めるためのリスト、もう 1 つはゲストを拒否するためのリストです。

具体的には、次のようなことをしていただきます。

- 0 から `people` 配列の長さまで反復するループを作成します。
- 各ループ反復中に、条件文を使用して現在の配列項目が "Phil" または "Lola" に等しいかチェックします。

  - そうである場合は、`refused` 段落の `textContent` の最後に配列項目を連結し、その後にカンマとスペースを続けます
  - そうでない場合は、配列項目を、`admitted` 段落の `textContent` の末尾に連結し、その後にカンマとスペースを続けます

既に提供されているものは次のものです。

- `refused.textContent +=` — `refused.textContent` の後に文字を連結する開始行
- `admitted.textContent +=` — `admitted.textContent` の後に文字を連結する開始行

特別ボーナス問題 — 上のタスクを正常に完了すると、カンマで区切られた 2 つの名前リストが残されますが、それらは整頓されません。それぞれの末尾にカンマがあります。
それぞれの場合に最後のカンマを切り取り、末尾にピリオドを追加した行をどのように書くかという問題を解決出来ますか？
ヘルプのため[便利な文字列メソッド](/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods)の記事を見てみてください。

間違えた場合は、「リセット」ボタンを使用してこの例をいつでもリセットできます。あなたが本当に立ち往生したら、"ソリューションを表示"を押して解決策を見てください。

```html hidden
<h2>ライブ出力</h2>
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Admit: </p>
  <p class="refused">Refuse: </p>
</div>

<h2>編集可能なコード</h2>
<p class="a11y-label">
  Esc を押すと、コード領域からフォーカスを外すことができます（Tab はタブ文字を挿入します）。
</p>
<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here

// refused.textContent += ;
// admitted.textContent += ;

</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="リセット" />
  <input id="solution" type="button" value="解答を表示"
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "解答を表示";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "解答を表示") {
    textarea.value = solutionEntry;
    solution.value = "解答を隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "解答を表示";
  }
  updateCode();
});

const jsSolution = `
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += \`\${person}, \`;
  } else {
    admitted.textContent += \`\${person}, \`;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "解答を表示") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Filling_in_a_guest_list', '100%', 680) }}

## どの種類のループを使用するのか

配列やそれを扱うオブジェクトを反復処理し、各項目の添字の位置にアクセスする必要がない場合は、`for...of`が最良の選択となります。読みやすいし、間違うことも少ないからです。

その他の用途では、`for`、`while`、`do...while` のループはほとんど互換性があります。
これらはすべて同じ問題を解決するために使うことができ、どれを使うかは個人的な好み、つまり覚えやすいか直感的かによって大きく変わってきます。
少なくとも最初は `for` をお勧めします。初期化処理、条件、最後の式がすべて括弧の中にきちんと入るので、どこに何があるのかがわかりやすく、見落としがないかをチェックしやすいからです。

では、もう一度見てみましょう。

まずは `for...of` です。

```
for (const 項目 of 配列) {
  // 実行するコード
}
```

`for` です。

```
for (初期化処理; 条件; 最後の式) {
  // 実行するコード
}
```

`while` です。

```
初期化処理
while (条件) {
  // 実行するコード

  最後の式
}
```

そして最後は `do...while` です。

```
初期化処理
do {
  // 実行するコード

  最後の式
} while (条件)
```

> **メモ:** 高度な/特殊な状況やこの記事の範囲を超えて有用な、他のループタイプ/機能もあります。ループ学習をさらに進めたい場合は、高度な[ループと反復処理ガイド](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)をお読みください。

## スキルをテストしよう!

この記事の最後に到達しましたが、最も大事な情報を覚えていますか？移動する前に、情報を維持しているか検証するテストを見ることができます — [Test your skills: Loops](/ja/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops) を見てください。

## まとめ

この記事では、背後にある基本的な概念と、JavaScript でコードをループする際に使用できるさまざまなオプションについて説明しました。
ループが繰り返しの多いコードを処理するのに適したメカニズムであることを理解し、自分の例でループを使う気になったはずです。

理解できなかったことがあれば、記事をもう一度読んだり、ヘルプを求めて[私たちに連絡](/ja/docs/Learn#連絡方法)してください。

## 関連情報

- [ループと反復処理](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of のリファレンス](/ja/docs/Web/JavaScript/Reference/Statements/for...of)
- [while](/ja/docs/Web/JavaScript/Reference/Statements/while) と [do...while](/ja/docs/Web/JavaScript/Reference/Statements/do...while) リファレンス
- [break](/ja/docs/Web/JavaScript/Reference/Statements/break) と [continue](/ja/docs/Web/JavaScript/Reference/Statements/continue) リファレンス
- [What's the Best Way to Write a JavaScript For Loop?](https://www.impressivewebs.com/javascript-for-loop/) — 高度なループのベストプラクティス

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}
