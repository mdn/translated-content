---
title: ループコード
slug: Learn/JavaScript/Building_blocks/Looping_code
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

プログラミング言語は、繰り返し実行するタスクを素早く終わらせるのがとても得意です。基本的な計算処理から、同じような作業がたくさんあるのならどんな状況でもこなします。今度は JavaScript でそういった目的を果たすために使用するループ構造を見てみましょう。

| 前提条件: | 基本的なコンピューターの知識および HTML と CSS への理解、[JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps)。 |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| 目的:     | JavaScript でループの使い方を理解する。                                                                                 |

## ループの中にとどまる

ループ、ループ、ループ。[朝食用シリアル](https://en.wikipedia.org/wiki/Froot_Loops)や、[ジェットコースター](https://en.wikipedia.org/wiki/Vertical_loop)、[音楽](<https://en.wikipedia.org/wiki/Loop_(music)>)でもおなじみですが、プログラミングにおいても、とても重要な概念です。プログラミングにおけるループとは同じことを何度も何度も繰り返すことで、**反復**や**繰り返し**とも言われます。

それでは、農家のケースについて考えてみましょう。彼は家族を養うため十分な食料があるか確認しようとしています。それを実現するため、以下のようなループを使用するでしょう。

![](loop_js-02-farm.png)

ループにはたいてい以下のような機能があります。

- **カウンター:** ループの開始地点で、初期化される値です。(上記の絵の、"I have no food" \[食料がない] の部分です)。
- **条件:** ループの実行を継続するか終了するかを決める true/false の判定です。たいていはカウンターがある値に達した場合に終了します。上記の絵の、"Do I have enough food?" \[十分な食料があるか？] の部分です。例えば、家族に食べさせる 10 個の食料が必要である、というようなことです。
- **イテレーター:** これは一般的には条件が `true`. では無くなるまで、カウンターの値をループごとに少量ずつ増加させます。上記の絵には明示的には描いていませんが、農家が 1 時間に 2 つの食料を集めることができると考えるとします。この場合、1 時間ごとに 2 つずつ食料が増えていき、農家は十分な食料が集まったかを確認することができます。もし食料が 10 個になったら (条件が true では無くなったため、ループが終了するポイント)、集めるのをやめて家に帰ることができるでしょう。

{{glossary("pseudocode", "疑似コード")}}では、以下のようになるでしょう。

```
loop(food = 0; foodNeeded = 10) {
  if (food >= foodNeeded) {
    exit loop;
    // 十分な食料が集まりました。家に帰りましょう
  } else {
    food += 2; // 1 時間経って 2 つの食料を集めました
    // ループはさらに続きます
  }
}
```

最初に、必要な食料が 10 に設定され、農家が現在持っている食料は 0 に設定されます。ループの繰り返しごとに、農家の持っている食料が必要な食料の数に等しいかを調べています。もしそうであれば、ループを抜けられます。そうでなければ、農家は 1 時間ごとに 2 つの食料を集めるのを繰り返します。

### どうしてこんなことをするの？

これで、恐らくループの背後にあるコンセプトが理解できたことでしょう。けれど、「それが JavaScript のコードを書くのにどう役立つの？」と思っているかもしれませんね。先ほど**ループは同じことを繰り返すこと**だと言いいましたが、それは**素早く繰り返し同じ作業を完了させる**のに最適なことなのです。

たいてい、コードはループの連続する反復のたびごとにわずかに異なるものになります。つまり、似ているけれどわずかに異なる多数のタスク全体を完了出来るのです。もしたくさんの異なる計算をしなければならないとしたら、同じことを何度も何度もするのではなく、それぞれ異なることをしたいですよね。

ループがどれだけ素晴らしいものかを説明する例を見てみましょう。100 個のランダムな円を {{htmlelement("canvas")}} 要素に描きたいとします (*更新*ボタンを押して、例を何度となく実行し、結果が異なることを見てみましょう。)

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>キャンバスに描くランダムな円</title>
    <style>
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
    </style>
  </head>
  <body>

  <button>更新</button>

  <canvas></canvas>


    <script>
    const btn = document.querySelector('button');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    let WIDTH = document.documentElement.clientWidth;
    let HEIGHT = document.documentElement.clientHeight;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    function random(number) {
      return Math.floor(Math.random()*number);
    }

    function draw() {
      ctx.clearRect(0,0,WIDTH,HEIGHT);
      for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    btn.addEventListener('click',draw);

    </script>

  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code', '100%', 400, "", "", "hide-codepen-jsfiddle") }}

今はコードをすべて理解する必要はありません。ですが、コードの一部で 100 個の円を実際に描いている箇所を見てみましょう。

```js
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
```

- `random(x)` はコードの前半で定義され、`0` から `x-1` までの整数を返します
- `WIDTH` と `HEIGHT` は、内側のブラウザーウィンドウの幅と高さです。

基本的な考えがわかりましたか？このコードをループを使用して 100 回実行しますが、毎回ページ内のランダムな場所に円を描いています。必要なコードは 100 個の円を描くときも、1000 個でも 10,000 個でも同じです。1 か所だけ変更すればいいのです。

ここでループを使用しないとすれば、次のコードを描きたい数だけ繰り返し書かなければなりません。

```js
ctx.beginPath();
ctx.fillStyle = 'rgba(255,0,0,0.5)';
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
ctx.fill();
```

これはとてもつまらなく、素早くメンテナンスするのが難しいコードです。ループが一番良いです。

## 標準的な for ループ

ここからは、具体的なループの構造を見ていきましょう。最初は、特によく使うことになるであろう [for](/ja/docs/Web/JavaScript/Reference/Statements/for) ループについてです。構文は以下の通りです。

```
for (初期化処理; 条件; 最後の式) {
  // 実行するコード
}
```

ここでは...

1. `for` キーワードに続き括弧があります。
2. 括弧の中にはセミコロンで区切られて以下の項目があります。

    1. **初期化処理**: これはたいていの場合、繰り返し回数分増やしていく変数の初期化処理となります。この変数を**カウンター変数**と呼ぶことがあります。
    2. **条件**: 既に取り上げた通り、これはループが繰り返しをやめるべき条件を定義します。ほとんどの場合は比較演算子を伴って、終了条件を満たしているかを判定します。
    3. **最後の式**: これはループの 1 回が終了する度に評価される (または実行される) コードです。大体、カウンター変数を増やし(または減らし)、条件が `true` では無くなるポイントに近づけていきます。

3. そして中括弧があり、中括弧の中のコードブロックが各ループの繰り返しで実行されます。

それでは実際の例を見て、これらを明確に分かるようにしてみましょう。

```js
const cats = ['ビル', 'ジェフ', 'ピート', 'ビッグルズ', 'ジャスミン'];
let info = '私の猫の名前は、';
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
  info += cats[i] + '、';
}

para.textContent = info;
```

これで次の結果が得られます。

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>for ループの例</title>
    <style>

    </style>
  </head>
  <body>

  <p></p>


    <script>
    const cats = ['ビル', 'ジェフ', 'ピート', 'ビッグルズ', 'ジャスミン'];
    let info = '私の猫の名前は、';
    const para = document.querySelector('p');

    for (let i = 0; i < cats.length; i++) {
      info += cats[i] + '、';
    }

    para.textContent = info;

    </script>

  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code_2', '100%', 60, "", "", "hide-codepen-jsfiddle") }}

> **メモ:** [このコードは GitHub でも](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for.html)見られます ([動くデモも](http://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for.html)ありますよ)。

これは配列のすべての要素に対して、繰り返し何かを実行するループの使用例です。JavaScript ではとてもよく見られるパターンです。

1. `i` をカウンター変数(イニシャライザーやイテレーター変数ともいう)として、`0` から開始します (`let i = 0`)。
2. `i` が `cats` 配列の長さより小さくなくなるまで実行すると、ループには指定されています。これは重要です、条件にはループが継続するための条件が示されています。今回は、`i < cats.length` が真となるため、ループは継続します。
3. ループの内側では、現在繰り返し対象となる項目 (`cats[i]` は `cats[i に入っているそのときの値]` となります) を `info` 変数に対してカンマとスペースとともに結合しています。つまり...

    1. 初回の実行時には、`i = 0` なので `cats[0] + ', '` ("ビル、") が `info` に対して結合されます。
    2. 2 回目の実行時には、`i = 1` なので `cats[1] + ', '` ("ジェフ、") が `info` に対して結合されます。
    3. このように、ループ内の処理が実行されるたび、1 が `i` に加算され (`i++`)、次の処理が開始されます。

4. `i` が `cats.length` の値 (ここでは 5) と等しくなったときにループは終了し、ブラウザーはループの後に続くコードを実行します。

> **メモ:** 条件を `i <= cats.length` ではなく、`i < cats.length` としているのは、コンピューターが数値を 1 からではなく、0 から数えるためです。コードでも `i` を `0` から始め、`i = 4` (配列内の要素の最後のインデックス) となるまで加算していきます。配列内の要素が 5 つなので `cats.length` は 5 となりますが、`i = 5` とすると、(配列に 5 のインデックスの要素がないので) `undefined` となってしまいます。なので、`cats.length` と同じ値まで (`i <=`) ではなく、`i` の最大値を 1 減らして `cats.length` より小さくなる (`i <`) まで加算しています。

> **メモ:** 条件の指定でよくある間違いは「以下」(`<=`) ではなく、「等しい」(`===`) を使ってしまうことです。もし、`i = 5` となるまでループを実行したければ、終了条件は `i <= cats.length` と指定しなければなりません。`i === cats.length` と指定した場合、ループは 1 度も実行されずに終了してしまいます。なぜなら、ループの最初では `i` が `5` ではないため、そこで終わってしまうからです。

残る小さな問題は、出力された文が完全ではないことです。

> 私の猫の名前は、ビル、ジェフ、ピート、ビッグルズ、ジャスミン、

ループの最後の結合処理を変更して文の最後が「、」で終わらないようにしたいと思います。まったく問題ありません。ループの中に条件ブロックを挿入して、これに対処しましょう。

```js
for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += cats[i] + 'です。';
  } else {
    info += cats[i] + '、';
  }
}
```

> **メモ:** [このコードは GitHub でも](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for-improved.html)見られます ([動いているデモも](http://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for-improved.html)あります)。

> **警告:** for ループ (他のループも同様) では、カウンター変数を増加、もしくは場合により減少させて、最終的に条件が true では無くなるポイントに達するようにする必要があります。もしそうで無い場合、ループは永遠に回り続け、ブラウザーが強制的に停止するか、クラッシュしてしまうでしょう。これは**無限ループ**といいます。

## break でループを終了する

すべての繰り返し処理が終了する前にループを終了したいとき、[break](/ja/docs/Web/JavaScript/Reference/Statements/break) 文を使用して終了させることができます。前回の記事、[switch 文](/ja/Learn/JavaScript/Building_blocks/conditionals#switch_statements)で、入力した値が switch 文の case にマッチしたとき、switch 文を抜け、それ以降のコードを実行するために `break` 文を使用しました。

これはループでも同様で、`break` 文を使用することで即時にループを抜けて、ブラウザーに続きのコードを実行させることができます。

それでは、連絡先 (電話番号を持っている) の配列の中から特定の連絡先を検索してみましょう。まずは HTML です。検索するテキスト入力用の {{htmlelement("input")}} 要素と、検索内容を送信 (submit) する {{htmlelement("button")}} 要素、検索結果を表示する {{htmlelement("p")}} 要素を備えます。

```html
<label for="search">連絡先の名前: </label>
<input id="search" type="text">
<button>検索</button>

<p></p>
```

現在の JavaScript について：

```js
const contacts = ['クリス:2232322', 'サラ:3453456', 'ビル:7654322', 'メアリー:9998769', 'ダイアン:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  let searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  for (let i = 0; i < contacts.length; i++) {
    let splitContact = contacts[i].split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = splitContact[0] + ' の電話番号は ' + splitContact[1] + ' です。';
      break;
    } else {
      para.textContent = '連絡先が見つかりません。';
    }
  }
});
```

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>連絡先検索の例</title>
    <style>

    </style>
  </head>
  <body>

  <label for="search">連絡先の名前: </label>
  <input id="search" type="text">
  <button>検索</button>

  <p></p>


    <script>
    const contacts = ['クリス:2232322', 'サラ:3453456', 'ビル:7654322', 'メアリー:9998769', 'ダイアン:9384975'];
    const para = document.querySelector('p');
    const input = document.querySelector('input');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function() {
      let searchName = input.value;
      input.value = '';
      input.focus();
      for (let i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(':');
        if (splitContact[0] === searchName) {
          para.textContent = splitContact[0] + ' の電話番号は ' + splitContact[1] + ' です。';
          break;
        } else {
          para.textContent = '連絡先が見つかりません。';
        }
      }
    });
    </script>

  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code_3', '100%', 100, "", "", "hide-codepen-jsfiddle") }}

1. コードの先頭で、いくつか変数を宣言しています。その中に、連絡先の情報を持った配列があり、各要素は名前と電話番号をコロンで区切った文字列となっています。
2. 次に、ボタン (`btn`) にイベントリスナーを設定しています。ボタンが押されたときに検索結果が戻ってくるようになっています。
3. テキスト入力欄に入力された値を `searchName` という変数に格納してから、次の検索に備え、入力欄をクリアし、フォーカスを設定しています。検索に大文字小文字を気にしないよう、文字列に [`toLowerCase()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) を実行しているのに注意してください。
4. ここからが本題の for ループです。

    1. カウンター変数を `0` から始め、`contacts.length` より小さくなくなるまで、ループの繰り返しの度に `i` を 1 増やしていきます。
    2. ループの内側では、まず現在の連絡先 (`contacts[i]`) をコロンの文字で分割し、`splitContact` という配列に格納します。
    3. それから、条件文を用いて、`splitContact[0]` (連絡先の名前) が入力された `searchName` にまた [`toLowerCase()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) を使って小文字化したものと等しいかを判定します。もし等しければ、連絡先の電話番号を段落 ({{htmlelement("p")}} 要素) に表示し、`break` を使用してループを終了しています。

5. `(contacts.length-1)` 回目の繰り返しの後に、もし連絡先の名前が入力された検索語に一致しなければ、段落に「連絡先が見つかりません。」という文字列を表示し、条件が true では無くなるまでループを継続します。

> **メモ:** [すべてのソースは GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/contact-search.html) で見ることができます ([動いているデモ](http://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)もあります)。

## continue で繰り返しをスキップする

[continue](/ja/docs/Web/JavaScript/Reference/Statements/continue) 文は `break` と同じような動作をします。けれど、ループを完全に抜けてしまうのではなく、次の繰り返しまで飛ばします。それでは、今度は入力として数値を受け取り、その数以下で整数の平方である値のみを返すという例を見てみましょう。

HTML は基本的に先ほどの例と同様で、1 つのテキストボックスと出力用の段落があります。JavaScript もループ自体を除けばほぼ同じですので、違う部分のみを示します。

```js
let num = input.value;

for (let i = 1; i <= num; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  para.textContent += i + ' ';
}
```

出力結果はこちらです。

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>整数の平方根の生成</title>
    <style>

    </style>
  </head>
  <body>

  <label for="number">数値を入力してください: </label>
  <input id="number" type="text">
  <button>整数の平方根を生成</button>

  <p>出力結果: </p>


    <script>
    const para = document.querySelector('p');
    const input = document.querySelector('input');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function() {
      para.textContent = 'Output: ';
      let num = input.value;
      input.value = '';
      input.focus();
      for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
          continue;
        }

        para.textContent += i + ' ';
      }
    });
    </script>

  </body>
</html>
```

{{ EmbedLiveSample('Hidden_code_4', '100%', 100, "", "", "hide-codepen-jsfiddle") }}

1. 今回の入力内容は数値 (`num`) です。`for` ループには、カウンターの初期値として、(今回は 0 ではなく) 1 が与えられ、終了する条件としてカウンターが入力値 (`num`) より大きくなった場合と指定されており、イテレーターとして、カウンターに 1 ずつ加算するよう指定されています。
2. ループ内部では、各値の平方根を [Math.sqrt(i)](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) を使用して求め、求めた平方根を切り捨てた値が、切り捨てる前の平方根と等しいかどうかを調べています (切り捨てには [Math.floor()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) に任意の数値を渡します)。
3. もし、平方根と切り捨てた数値が等しくないのなら (`!==`)、平方根は整数ではないことを示しています。整数以外には興味がありませんので、`continue` 文を用いて、その数値をどこにも保持することなく、次のループの繰り返しまでスキップします。
4. もし、その平方根が整数値であるならば、if ブロックは飛ばされるので、`continue` 文は実行されません。代わりに、現在の `i` の値を段落の内容の後ろにスペースと一緒に結合します。

> **メモ:** [すべてのソースは GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/integer-squares.html) でも見ることができます ([動いているデモ](http://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)もあります)。

## while と do ... while

`for` は JavaScript で利用可能な唯一のループのタイプではありません。実際には多くのものがありますが、これらのすべてを理解する必要はありませんが、仕事の同じ機能をわずかに異なる方法で認識できるように、他のものの構造を見ておく価値があります。

まず、while ループを見てみましょう。このループの構文は次のようになります。

```
初期化処理
while (条件) {
  // 実行するコード

  最後の式
}
```

これは for ループとよく似ていますが、初期化条件はループの前に設定され、最後の式は実行するコードの後のループ内に含まれます。これら二つの項目は丸括弧の中に含まれません。条件は、`for` ではなく `while` キーワードが前に付いた括弧内に含まれています。

for ループにもある３つの項目が、for ループとおなじ順序で定義されています。これは理にかなっています。条件が true では無くなるポイントに達したかどうかを確認する前に初期化処理を定義する必要があります ; ループ内のコードが実行された後（1 回の繰り返しの完了）、最期の式が実行されます。これは、条件がまだ true である場合にのみ発生します。

猫のリストの例をもう一度見てみましょう。ただし、while ループを使うように書き直してみましょう：

```js
let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
}
```

> **メモ:** これは期待どおりに動作します。[GitHub でライブ実行](http://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html)してみてください（[完全なソースコード](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/do-while.html)を見ることもできます）。

[do ... while](/ja/docs/Web/JavaScript/Reference/Statements/do...while) ループは非常によく似ていますが、while 構造にはバリエーションがあります。

```
初期化処理
do {
  // 実行するコード

  最後の式
} while (条件)
```

この場合、初期化処理は、ループが始まる前に、再び最初に来ています。キーワードは、実行するコードと最期の式を含む中括弧の直前にあります。

ここでの違いは、条件がほかの全ての後にあり、括弧で囲まれ、その前に `while` キーワードが付いていることです。`do...while` ループでは、中括弧内のコードは、チェックが再度実行されるかどうかを確認する前に常に 1 回実行されます (while と for の場合、チェックが最初に来るため、コードは実行されない可能性があります) 。

`do...while` ループを使用するように、猫のリストの例をもう一度書き直してみましょう：

```js
let i = 0;

do {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
} while (i < cats.length);
```

> **メモ:** 再度、これは期待どおりに動作します。[GitHub でライブ実行](http://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html)してみてください（[完全なソースコード](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/do-while.html)を見ることもできます）。

> **警告:** while と do ... while では、すべてのループと同様に、カウンター変数を増加、もしくは場合により減少させて、最終的に条件が false となるようにする必要があります。そうしなければループは永遠に進み、ブラウザーはそれ強制的に停止させるか、クラッシュします。これは**無限ループ**と呼ばれます。

## アクティブラーニング: カウントダウンを開始します!

この練習では、出力ボックスへの簡単な起動カウントダウンを 10 から Blast off まで印字してください。具体的には、

- 10 から 0 までのループ。イニシャライザを提供します — `let i = 10;`.
- 各繰り返しに対して、新しい段落を作成し、それを出力\<div>に追加します。これは、`const output = document.querySelector('.output');`を使用して選択したものです。コメントでは、ループ内のどこかで使用する必要がある 3 つのコード行を提供しました

  - `const para = document.createElement('p');` — 新しいパラグラフを作成します
  - `output.appendChild(para);` — 出力の `<div>`にパラグラフを追加します。
  - `para.textContent =` — パラグラフ内のテキストを、イコールの後の右辺においたものにする。

- 反復回数が異なると、その反復の段落に異なるテキストを入れる必要があります（条件文と複数の `para.textContent =` 行が必要です）。

  - 数字が 10 の場合、パラグラフに "Countdown 10" と出力する。
  - 数字が 0 の場合、パラグラフに "Blast off!" と出力する。
  - その他の数字では、パラグラフにその数字を出力する。

- イテレーターを含めることを忘れないでください！ですが、この例では各反復の後にカウント(アップではなく)ダウンするため、`i++` は要らないでしょう — 減少方向にどうやって反復しますか？

> **メモ:** あなたがループ(例えば (while(i>=0))からタイピングを始めると、ブラウザーが固まってしまうかもしれません。終了条件をまだ入力していないからです。注意して下さい。この問題に対処するにはコメントの中にコードを書き始めて、完了してからコメントを削除することです。

間違えた場合は、「リセット」ボタンを使用してこの例をいつでもリセットできます。あなたが本当に立ち往生したら、"ソリューションを表示"を押して解決策を見てください。

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 410px;overflow: auto;">

</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>
<textarea id="code" class="playable-code" style="height: 300px;width: 95%">
let output = document.querySelector('.output');
output.innerHTML = '';

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
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
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

let jsSolution = 'const output = document.querySelector(\'.output\');\noutput.innerHTML = \'\';\n\nlet i = 10;\n\nwhile(i >= 0) {\n let para = document.createElement(\'p\');\n if(i === 10) {\n para.textContent = \'Countdown \' + i;\n } else if(i === 0) {\n  para.textContent = \'Blast off!\';\n } else {\n para.textContent = i;\n }\n\n output.appendChild(para);\n\n i--;\n}';
let solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  const caretPos = textarea.selectionStart;
  const front = (textarea.value).substring(0, caretPos);
  const back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);

  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning', '100%', 880, "", "", "hide-codepen-jsfiddle") }}

## アクティブラーニング: ゲストリストに記入する

この演習では、配列に格納された名前のリストを取得して、それらをゲストリストに入れることが必要です。しかし、これはそれほど簡単ではありません — 彼らは貪欲で失礼で、常にすべての食べ物を食べるので、私たちはフィルとローラを入れさせたくありません！ 私たちは 2 つのリストを持っています。1 つは承認するゲストのためのもの、もう 1 つは拒否するゲストのためのものです。

具体的には、

- 0 から `people` 配列の長さまで反復するループを作成します。`let i = 0;` の初期化処理で始める必要がありますが、どのような条件が必要ですか？
- 各ループ反復中に、条件文を使用して現在の配列項目が "Phil" または "Lola" に等しいかチェックします。

  - そうである場合は、`refused` パラグラフの `textContent` の最後に配列項目を連結し、その後にカンマとスペースを続けます
  - そうでない場合は、配列項目を、`admitted` パラグラフの `textContent` の末尾に連結し、その後にカンマとスペースを続けます

私たちはすでにあなたに次のものを提供しました：

- `let i = 0;` — イニシャライザー
- `refused.textContent +=` — `refused.textContent` の後に文字を連結する開始行
- `admitted.textContent +=` — `admitted.textContent` の後に文字を連結する開始行

特別ボーナス問題 — 上のタスクを正常に完了すると、カンマで区切られた 2 つの名前リストが残されますが、それらは整頓されません。それぞれの末尾にカンマがあります。それぞれの場合に最後のカンマを切り取り、末尾にピリオドを追加した行をどのように書くかという問題を解決出来ますか？ヘルプのため[便利な文字列メソッド](/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods)の記事を見てみてください。

間違えた場合は、「リセット」ボタンを使用してこの例をいつでもリセットできます。あなたが本当に立ち往生したら、"ソリューションを表示"を押して解決策を見てください。

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Admit: </p>
  <p class="refused">Refuse: </p>
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>
<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// let i = 0;

// refused.textContent += ;
// admitted.textContent += ;

</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
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
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

const jsSolution = 'const people = [\'Chris\', \'Anne\', \'Colin\', \'Terri\', \'Phil\', \'Lola\', \'Sam\', \'Kay\', \'Bruce\'];\n\nconst admitted = document.querySelector(\'.admitted\');\nconst refused = document.querySelector(\'.refused\');\n\nadmitted.textContent = \'Admit: \';\nrefused.textContent = \'Refuse: \'\nlet i = 0;\n\ndo {\n if(people[i] === \'Phil\' || people[i] === \'Lola\') {\n refused.textContent += people[i] + \', \';\n } else {\n admitted.textContent += people[i] + \', \';\n }\n i++;\n} while(i < people.length);\n\nrefused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + \'.\';\nadmitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + \'.\';';
let solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  const tcaretPos = textarea.selectionStart;
  const front = (textarea.value).substring(0, caretPos);
  const back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);

  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_2', '100%', 680, "", "", "hide-codepen-jsfiddle") }}

## どのタイプのループを使用しますか？

基本的な用途では for、while、do ... while ループはほぼ互換性があります。それらはすべて同じ問題を解決するために使用することができます。どちらを使用するかは、あなたの個人的な好みに大きく左右されます。これは、どれが最も覚えやすいか、最も直感的かということです。それらをもう一度見てみましょう。

まずは `for`:

```
for (初期化処理; 条件; 最後の式) {
  // 実行するコード
}
```

`while`:

```
初期化処理
while (条件) {
  // 実行するコード

  最後の式
}
```

そして最後は `do...while`:

```
初期化処理
do {
  // 実行するコード

  最後の式
} while (条件)
```

少なくとも最初は `for` から始めることをお勧めします。すべてを覚えておくことが簡単だからです。初期化処理、条件、最後の式をすべて括弧内にきちんと入れなければならないので、それらがどこにあるかや見落としていないことの確認が簡単です。

> **メモ:** 高度な/特殊な状況やこの記事の範囲を超えて有用な、他のループタイプ/機能もあります。ループ学習をさらに進めたい場合は、高度な[ループと反復処理ガイド](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)をお読みください。

## スキルをテストしよう!

この記事の最後に到達しましたが、最も大事な情報を覚えていますか？移動する前に、情報を維持しているか検証するテストを見ることができます — [Test your skills: Loops](/ja/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops) を見てください。

## まとめ

この記事では、背後にある基本的な概念と、JavaScript でコードをループする際に使用できるさまざまなオプションについて説明しました。今はループが反復コードを処理するための良い仕組みである理由がはっきり分かり、自身の例で使用できることを誇らしく思うでしょう。

あなたが理解できなかったことがあれば、記事をもう一度読んだり、ヘルプを求めて[私たちに連絡](/ja/docs/Learn#Contact_us)してください。

## 関連情報

- [ループと反復処理](/ja/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for 文のリファレンス](/ja/docs/Web/JavaScript/Reference/Statements/for)
- [while](/ja/docs/Web/JavaScript/Reference/Statements/while) と [do...while](/ja/docs/Web/JavaScript/Reference/Statements/do...while) リファレンス
- [break](/ja/docs/Web/JavaScript/Reference/Statements/break) と [continue](/ja/docs/Web/JavaScript/Reference/Statements/continue) リファレンス
- [What’s the Best Way to Write a JavaScript For Loop?](https://www.impressivewebs.com/javascript-for-loop/) — 高度なループのベストプラクティス

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

## このモジュール

- [コードでの意思決定 — 条件文](/ja/docs/Learn/JavaScript/Building_blocks/conditionals)
- [ループコード](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [関数 — 再利用可能なコードブロック](/ja/docs/Learn/JavaScript/Building_blocks/Functions)
- [独自の関数を作る](/ja/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [関数の戻り値](/ja/docs/Learn/JavaScript/Building_blocks/Return_values)
- [イベントの紹介](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- [イメージギャラリー](/ja/docs/Learn/JavaScript/Building_blocks/Image_gallery)
