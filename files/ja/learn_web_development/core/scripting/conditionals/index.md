---
title: コードでの意思決定 — 条件文
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

どのプログラミング言語でも、コードは様々な入力に応じた決定を迫られ、その結果として動作を起こします。例えば、ゲームではプレイヤーの残機が 0 になった場合、ゲームオーバーとなります。天気アプリは朝に起動された場合は日の出の画像を表示し、夜に起動された場合は星や月の画像を表示します。この記事では、JavaScript において、条件文と呼ばれるものがどのように動作するかを説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS の基礎</a>を理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>条件分岐とは何かを理解すること。条件に応じて異なるコードパスを実行するためのコード構造。</li>
          <li><code>if</code>/<code>else</code>/<code>else if</code> を使用した条件の実装。</li>
          <li>比較演算子を使用して条件を作成すること。</li>
          <li>条件に AND、OR、NOT 論理を実装すること。</li>
          <li>switch 文。</li>
          <li>三項演算子。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## すべては条件次第

人類（と他の動物たち）は 小さいもの（「クッキーを 1 つ食べるべきか、2 つ食べるべきか」）から大きいもの（「故郷に残って親父の農場を継ぐべきか、アメリカに渡って宇宙物理学を学ぶべきか」）まで、生活に関わるすべての決定を下します。

JavaScript では、条件文を使ってそのような決定を下すことが可能です。条件文は、選ばなければならない選択肢（例えば「クッキーを 1 つまたは 2 つ食べる」）からそれを選んだ場合の結果を導き出します（おそらく「1 つクッキーを食べる」を選んだら、「まだちょっとお腹が空いている」という結果となるでしょうし、「2 つクッキーを食べる」を選んだら「お腹いっぱい。だけどクッキーを全部食べてママに怒られる」という結果となってしまうでしょう。）

!['Cookies' と書かれたクッキーの瓶を持つ人に似た漫画のキャラクター。キャラクターの頭の上には疑問符があります。吹き出しが2つあります。左の吹き出しにはクッキーが1つあります。右の吹き出しにはクッキーが2つあります。共に、キャラクターがクッキーを1枚にするか2枚にするかを決めようとしていることを暗示しています。](cookie-choice-small.png)

## if...else 文

それでは、JavaScript で最もよく使われる条件文から始めましょう。それは [`if...else` 文](/ja/docs/Web/JavaScript/Reference/Statements/if...else)です。

### if...else の基本的な構文

`if...else` の基本的な構文は次のようになっています。

```js
if (条件式) {
  /* 条件式が true の場合に実行されるコード */
} else {
  /* それ以外の場合に実行されるコード */
}
```

ここでは...

1. `if` キーワードの後ろに括弧が並んでいます。
2. 判断に用いる条件式はその括弧の中にあります（たいていの場合は「この値はもう一方より大きい」や、「この値は存在する」などです）。この条件には、前回のモジュールで習った[比較演算子](/ja/docs/Learn_web_development/Core/Scripting/Math#比較演算子)を使用し、 `true` または `false` を返します。
3. 中にコードが書いてある（実際のコードはどんなものでも構いません）中括弧のペアは、条件式が `true` の場合に実行されます。
4. 続いて `else` キーワードがあります。
5. さらに他のコードが書いてある（こちらもどんなコードでも構いません）中括弧のペアは条件式が `true` ではない場合に実行されます。

このコードは（英語を使う人には）とても読みやすいものになっています。このコードは「もし ( **if** ) **条件式** が `true` を返したら A のコードを実行し、それ以外ならば ( **else** ) B のコードを実行する」と読めます。

`else` とそれに続く中括弧は必ずしも書く必要がないことを覚えておきましょう。次のコードも全く問題のないコードです。

```js
if (条件式) {
  /* 条件式が true の場合に実行されるコード */
}

/* 普通に実行されるコード */
```

ここで注意しておかなければならないことがあります。それは 2 つ目のコードブロックは、条件分岐の管理下になく、条件式が `true` か `false` かに関係なく、**常に**実行されることです。これはまったく悪いことではないのですが、条件に応じてどちらか一方のみ動かしたいと思っている場合には、気を付けておかないと思った通りの動作をしないでしょう。

最後の確認点として、`if...else` 文が中括弧なしで書かれているのを見ることがあります。以下のような省略した書き方です。

```js example-bad
if (条件式) /* 条件式が true の場合に実行されるコード */
else /* それ以外の場合に実行されるコード */
```

この構文は完全に有効ですが、中括弧を使用してコードのブロックを区切り、複数行とインデントを使用した方がコードを理解しやすくなります。

### 実際の例

この構文をよりよく理解するために、実際の例を考えてみましょう。子どもが母親か父親に雑用を頼まれたとします。親は「買い物に行って手伝ってくれたら、お小遣いをあげるから、欲しかったおもちゃを買いなさい」と言うかもしれません。JavaScript ではこのように表します。

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

このコードは常に `shoppingDone` 変数が `false` なので、かわいそうな子供は追加のお小遣いを受け取れません。両親が子供がお使いを完了した場合に `shoppingDone` 変数を `true` にセットしてあげるかどうかはプログラム次第です（つまり私たち次第です。）

> [!NOTE]
> [GitHub で上記のコードの完全なバージョン](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html)が公開されています。（[ライブ実行](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html)でも確認できます。）

### else if

先ほどの例では実行結果は 2 つだけでしたが、もっと選択肢がある場合はどうでしょうか？

`else if` を使って、追加の選択肢を `if...else` に繋ぐ方法があります。追加の選択肢は `if () { }` と `else { }` の間に、コードブロックを続けて追加する必要があります。具体的な例として、天気予報のアプリケーションの一部を見てみましょう。

```html
<label for="weather">今日の天気を選択してください: </label>
<select id="weather">
  <option value="">--選択してください--</option>
  <option value="sunny">晴れ</option>
  <option value="rainy">雨</option>
  <option value="snowing">雪</option>
  <option value="overcast">曇り</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "今日はとてもいい天気です。半ズボンをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！";
  } else if (choice === "rainy") {
    para.textContent =
      "外は雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。";
  } else if (choice === "snowing") {
    para.textContent =
      "雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。";
  } else if (choice === "overcast") {
    para.textContent =
      "雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持っていきましょう。";
  } else {
    para.textContent = "";
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100, "", "") }}

1. HTML に、天気を選ぶことが可能な {{htmlelement("select")}} 要素があり、1 つの段落がありますね。
2. JavaScript では、{{htmlelement("select")}} と {{htmlelement("p")}} の各要素について、参照を取得して保持し、`<select>` 要素にはイベントリスナーを設定しています。もし、要素の値が変わったら `setWeather()` 関数が動きます。
3. この関数が実行されると、まずは `choice` という変数に、`<select>` 要素の現在選択されている値を入れます。そして、条件文を使い、 `choice` の値に応じた文字列が段落に設定されます。最初の `if () { }` のブロックを除いて、どのように `else if () { }` のブロックで判定しているか注目してください。
4. 一番下の `else { }` 選択肢は、「最後の手段」となるオプションで、この中のコードは、どの条件にも一致しなかった場合（`true` とならなかった場合）に実行されます。今回の場合選択されていない場合に、段落を空にしています。何も選択されていない場合というのは、ユーザーが再度最初に表示されていた「--選択してください--」というオプションを選んだ場合です。

> [!NOTE]
> [GitHub で上記のコードの完全なバージョン](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html)が公開されています。（[ライブ実行](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html)でも確認できます。）

### 比較演算子に関するメモ

比較演算子は条件文の中で使われます。[JavaScript での基本演算 — 数値と演算子](/ja/docs/Learn_web_development/Core/Scripting/Math#比較演算子)で初めて出てきましたね。演算子には以下のようなものがありました。

- `===` と `!==` は、ある値がもう一方の値と等しいか、もしくは等しくないかを判定します。
- `<` と `>` は、ある値がもう一方の値より大きいか、より小さいかを判定します。
- `<=` と `>=` は、ある値がもう一方の値以上か、以下かを判定します。

論理値 (`true`/`false`) を判定する場合には、少しの配慮が必要であることを付け加えさせてください。おそらく何度かつまずくであろう、よくあるパターンです。条件文で何らかの値が検査される場合、`false`、`undefined`、`null`、`0`、`NaN`、空文字列 (`''`) 以外であれば `true` となります。ですから、その値が `true` であるか判定したい場合や、その値が存在するか（例えば、`undefined` ではないこと）判定したい場合は単に変数名を使用するだけです。

```js
let cheese = "チェダー";

if (cheese) {
  console.log("やった！チーズトーストを作るチーズがあるよ。");
} else {
  console.log("今日はチーズトーストのチーズがないよ。");
}
```

先ほどの子供のお使いの例に戻ると、以下のようにも書くことができます。

```js
let shoppingDone = false;
let childsAllowance;

// 'shoppingDone === true' と明示的に指定する必要はありません
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

### 入れ子の if...else

`if...else` 文を入れ子にして、他の `if...else` 文の中で使用することは全く問題ありません。例えば、天気予報アプリケーションで気温に応じて表示する内容を切り替えたい場合以下のように書くことができます。

```js
if (choice === "sunny") {
  if (temperature < 30) {
    para.textContent = `外の気温は ${temperature} 度です — とてもいい天気です。海水浴や、公園に出かけてアイスクリームを食べましょう。`;
  } else if (temperature >= 30) {
    para.textContent = `外の気温は ${temperature} 度です — かなり暑いです！外に出るときは、日焼け止めを塗りましょう。`;
  }
}
```

たとえコードがすべて一緒に動作したとしても、それぞれの `if...else` 文は完全に独立して動作します。

### 論理演算子: AND と OR と NOT

複数の条件を入れ子の `if...else` 文を書かずに判定したいなら、[論理演算子](/ja/docs/Web/JavaScript/Reference/Operators)の出番です。条件で使用すると、最初の 2 つは以下のようになります。

- `&&` — AND は 2 つ以上の式を一つに繋げ、それぞれの式を個別に評価して、すべて `true` になった場合、その式全体が `true` として返します。
- `||` — OR は 2 つ以上の式を 1 つに繋げ、それぞれの式を個別に評価し、最初に `true` になったところで、その式全体を `true` として返します。

AND の例を示すため、先ほどのコードを書き直すと以下のようになります。

```js
if (choice === "sunny" && temperature < 30) {
  para.textContent = `外の気温は ${temperature} 度です — とてもいい天気です。海水浴や、公園に出かけてアイスクリームを食べましょう。`;
} else if (choice === "sunny" && temperature >= 30) {
  para.textContent = `外の気温は ${temperature} 度です — かなり暑いです！外に出るときは、日焼け止めを塗りましょう。`;
}
```

例では、最初のブロックは `choice === 'sunny'` _および_ `temperature < 30` のどちらも `true` となった場合にのみ実行されます。

今度は OR の例を見てみましょう。

```js
if (iceCreamVanOutside || houseStatus === "火事") {
  console.log("すぐに家から出ましょう。");
} else {
  console.log("それでは家にいましょう。");
}
```

論理演算子の最後は NOT です。`!` 演算子で表され、式を否定するのに使用します。それでは先ほどの OR と組み合わせてみましょう。

```js
if (!(iceCreamVanOutside || houseStatus === "火事")) {
  console.log("それでは家にいましょう。");
} else {
  console.log("すぐに家から出ましょう。");
}
```

このコード例では、OR 文が `true` となれば、 NOT 演算子がそれを否定します。そのため、式全体は `false` となります。

論理文は、どんな構造でも好きなだけ結合することができます。例えば、次の例では、両方の OR 文が真を返した場合にのみ、内部のコードが実行されます。つまり、 AND 文全体が真を返すということです。

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "スティーブ")) {
  // コードを実行
}
```

論理 OR 演算子を使用するうえでよくある間違いは、判定しようとしている変数を一度だけ書いて、その後に判定したい値を `||` (OR) 演算子で区切って指定する誤りです。次のような例です。

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // コードを実行する
}
```

この場合、`if ()` の条件式は常に真となります。なぜなら 7 (もしくはその他 0 以外の数値) が常に `true` と評価されるためです。この条件式は「もし x が 5 であるか 7 が真であるならば (7 は常に真です)」となります。これは求めているものではありませんよね！このコードの誤りを修正するためには、OR 演算子の隣に常に完全な条件を書かなければなりません。

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // コードを実行する
}
```

## switch 文

`if...else` 文は条件の判定を上手くこなしていましたが、欠点がないわけではありません。いくつかの選択肢しかない場合には申し分ないのですが、AND / OR の条件が複雑になるにつれて（例えば、複数の論理演算子を使ったりする場合など）、相当量のコードを書かなければなりません。ある選択肢に応じて値を変数に設定したり、特定の条件に応じて何かを表示したりするとき、選択肢がたくさんあると、`if...else` 文を書くのは面倒です。

[`switch` 文](/ja/docs/Web/JavaScript/Reference/Statements/switch)はそんなときの味方です。`switch` 文は一つの式または値を受け取り、それに合致する値が見つかるまで選択肢を探します。そして合致した選択肢に対応するコードを実行します。まずは擬似コードを見て、雰囲気をつかみましょう。

```js
switch (式) {
  case 選択肢1:
    // このコードを実行する
    break;

  case 選択肢2:
    // 代わりにこのコードを実行する
    break;

  // 以下に選択肢を好きなだけ並べる

  default:
    // 既定でこのコードを実行する
    break;
}
```

上記のコードには...

1. `switch` キーワードに続き、一組の括弧があります。
2. 括弧の中には、式または値があります。
3. `case` キーワードに続き、選択肢となる式または値、それにコロン (`:`) が並んでいます。
4. もしその選択肢にマッチすれば、コードが実行されます。
5. `break` 文とセミコロン (`;`) があります。もし前の選択肢にマッチして入ればブラウザーはコードの実行をここでやめ、switch 文の後ろにあるコードに移動します。
6. `case` 節 (上記 3. から 5. ) は好きなだけ書くことができます。
7. 上記 3. から 5.の `case` 節と全く同じコードパターンで書かれている `default` キーワードがあります。違いは `default` の後ろに選択肢が書かれていないことです。また、後ろに続くコードがないので、ここには `break` 文が必要ありません。もし、選択肢のどれにもマッチするものがない場合に既定のオプションとして実行されます。

> [!NOTE]
> 評価する式の値が不明な値にならないのであれば、`default` 節は書く必要はありません。しかし、式が不明な値となり、それに対処する必要があるのなら、`default` 節を書くことで対応が可能です。

### switch の例

それでは実際の例を見てみましょう。先ほどの天気予報アプリを switch 文を使用して書き直してみました。

```html
<label for="weather">今日の天気を選択してください: </label>
<select id="weather">
  <option value="">--選択してください--</option>
  <option value="sunny">晴れ</option>
  <option value="rainy">雨</option>
  <option value="snowing">雪</option>
  <option value="overcast">曇り</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "今日はとてもいい天気です。半ズボンをはいて、砂浜や公園に出かけ、アイスクリームを食べましょう！";
      break;
    case "rainy":
      para.textContent =
        "外は雨が降っています。レインコートと傘を忘れないようにして、できる限り室内で過ごしましょう。";
      break;
    case "snowing":
      para.textContent =
        "雪が降ってとても寒いです！室内でホットチョコレートを飲むか、雪だるまを作るのがよいでしょう。";
      break;
    case "overcast":
      para.textContent =
        "雨は降っていませんが、空はとても暗くなっています。万が一に備えレインコートを持っていきましょう。";
      break;
    default:
      para.textContent = "";
  }
}
```

{{ EmbedLiveSample('A_switch_example', '100%', 100, "", "") }}

> [!NOTE]
> [このサンプルを GitHub で見る](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html)ことができます。（[実行可能なデモ](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)もあります。）

## 三項演算子

例題に進む前に、ちょっとした構文をご紹介しましょう。[三項演算子 (もしくは条件演算子)](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator) は条件式を判定し、その結果に応じて 2 つの値または式のうち、どちらか一方を返します。これはある状況においてはとても便利です。単純に `true`/`false` で判定可能な 2 つの選択肢のうちより片方を選ぶという場合には、`if...else` ブロックを書くよりも多くのコードを節約できます。この擬似コードは以下のようなものになります。

```js-nolint
条件式 ? こちらのコードを実行する : 代わりにこちらのコードを実行する
```

それでは実際に例を見て見ましょう。

```js
const greeting = isBirthday
  ? "スミスさん、誕生日おめでとうございます！良い一日を。"
  : "スミスさんおはようございます。";
```

この例では `isBirthday` という変数があり、この変数が `true` の場合、お客に誕生日を祝福するメッセージを送ります。そうでなければ、通常の挨拶を送ります。

### 三項演算子を使用する例

三項演算子を変数の代入にのみ使用する必要はありません。関数や、複数行に渡るコードを実行する場合にも (それ以外にも好きなように) 使用できます。次の例は三項演算子を使用してサイトにテーマを適用しています。

```html
<label for="theme">テーマを選んでください: </label>
<select id="theme">
  <option value="white">白</option>
  <option value="black">黒</option>
</select>

<h1>私のウェブサイト</h1>
```

```js
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);
```

{{ EmbedLiveSample('Ternary_operator_example', '100%', 300, "", "") }}

上記の例では、テーマ（黒または白）を選択することができる {{htmlelement('select')}} 要素と、サイトのタイトルが書かれた単純な {{htmlelement("Heading_Elements", "h1")}} 要素があります。さらに `update()` という関数があり、その関数は引数（入力値）として 2 つの色を取ります。この関数が呼ばれると、ウェブサイトの背景色は 1 つ目の引数に、文字の色は 2 つの目の引数に設定されます。

さらに、三項演算子を含む [onchange](/ja/docs/Web/API/HTMLElement/change_event) イベントリスナーがあります。`select.value === 'black'` という条件式で始まっています。この式が `true` であるならば、`update()` 関数を引数に `'black'`、`'white'` を指定して実行します (つまり、背景色を黒、文字色を白に設定します)。この式が `false` であるならば、`update()` 関数を引数に `'white'`、`'black'` を指定して実行します (つまり、背景色を逆にします)。

> [!NOTE]
> この例は [GitHub でも公開しています](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html)。（[ライブ実行](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)でも確認できます。）

## アクティブラーニング: 単純なカレンダー

この例では、単純なカレンダーアプリケーションの作成を手伝ってもらいます。現在、以下の内容がコードに書かれています。

- ユーザーが月を選択できるように {{htmlelement("select")}} 要素があります。
- `<select>` メニューの選択内容が変更された場合に、イベントを捕捉できるように `onchange` イベントハンドラーが設定されています。
- カレンダーを描画し、 {{htmlelement("Heading_Elements", "h1")}} 要素に適切な月を設定する `createCalendar()` と呼ばれる関数があります。

あなたには、`onchange` ハンドラーの内部に条件式を書いてもらいます。`// 条件式をここに書く` というコメントのすぐ下に...

1. 選択されている月を取得します。（これは `choice` 変数に格納されています。この値は `<select>` 要素で選択された後の値で、例えば 1 月なら、"1" といった値です。）
2. `days` という変数に、選択された月の日数を設定します。そのためには、1 年の各月の日数を調べる必要があるでしょう。うるう年はこの例題の目的から外れるため、無視してください。

ヒント:

- ほとんどの月は日数が同じなので、複数の月を OR 演算子を用いて一つの条件式にまとめるのが良いでしょう。
- どの月が最も多い日数なのか考えてください。そして、その日数を既定値として使用しましょう。

もし間違ってしまっても、「リセット」ボタンを押すことでいつでも元に戻せます。詰まってしまったら、「答えを見る」ボタンで答えが見られます。

```html-nolint hidden
<h2>ライブ出力</h2>
<iframe id="output" width="100%" height="600px"></iframe>

<h2>コードエディター</h2>
<p class="a11y-label">
  コードエディターから抜けるには Esc キーを押して下さい（Tab はタブ文字を挿入します）。
</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  // 条件式をここに書く

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "1 月";
createCalendar("1 月");
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="リセット" />
  <input id="solution" type="button" value="答えを見る" />
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
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const outputIFrame = document.querySelector("#output");
const textarea = document.getElementById("code");
const initialCode = textarea.value;
let userCode = textarea.value;

const solutionCode = `const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  if (month === "2 月") {
    days = 28;
  } else if (
    month === "4 月" ||
    month === "6 月" ||
    month === "9 月" ||
    month === "11 月"
  ) {
    days = 30;
  }

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "1 月";
createCalendar("1 月");`;

function outputDocument(code) {
  const outputBody = `
<div class="output" style="height: 500px; overflow: auto">
  <label for="month">月を選択: </label>
  <select id="month">
    <option value="1 月">1 月</option>
    <option value="2 月">2 月</option>
    <option value="3 月">3 月</option>
    <option value="4 月">4 月</option>
    <option value="5 月">5 月</option>
    <option value="6 月">6 月</option>
    <option value="7 月">7 月</option>
    <option value="8 月">8 月</option>
    <option value="9 月">9 月</option>
    <option value="10 月">10 月</option>
    <option value="11 月">11 月</option>
    <option value="12 月">12 月</option>
  </select>

  <h1></h1>

  <ul></ul>
</div>`;

  const outputStyle = `
.output * {
  box-sizing: border-box;
}

.output ul {
  padding-left: 0;
}

.output li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4a2db6;
  color: white;
}
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}`;
  return `
<!doctype html>
<html>
  <head>
    <style>${outputStyle}</style>
  </head>
  <body>
    ${outputBody}
    <script>${code}<${"/"}script>
  </body>
</html>`;
}

function update() {
  output.setAttribute("srcdoc", outputDocument(textarea.value));
}

update();

textarea.addEventListener("input", update);

reset.addEventListener("click", () => {
  textarea.value = initialCode;
  userEntry = textarea.value;
  solution.value = "答えを見る";
  update();
});

solution.addEventListener("click", () => {
  if (solution.value === "答えを見る") {
    // 戻せるように、ユーザーのコードを
    // 記憶しておく
    userCode = textarea.value;
    textarea.value = solutionCode;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userCode;
    solution.value = "答えを見る";
  }
  update();
});

// タブキーでテキストエリアから抜けてしまうのを防ぎ、
// 代わりにカーソル位置にタブ文字を挿入する
textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
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
```

{{ EmbedLiveSample('Active_learning_A_simple_calendar', '100%', 1210) }}

## アクティブラーニング: もっとたくさんの色から選ぶ

この例では、先ほど見た三項演算子の例を元に、三項演算子を switch 文に変換し、単純なウェブサイトにさらに多くの選択肢を適用できるようにします。 {{htmlelement("select")}} 要素を見てください。今回は先ほどの 2 つではなく、5 つの選択肢があります。`// ここに SWITCH 文を書く` というコメントの真下に switch 文を追加してください。

- `choice` 変数を判定する式として使用します。
- 各ケース (case) で、`choice` 変数は選択可能な値（`white`、`black`、`purple`、`yellow`、`psychedelic`）のうちのどれかです。オプション値は英小文字ですが、ライブ出力に表示されるオプション ラベルは日本語であることに注意してください。コードでは英小文字の値を使用しましょう。
- 各ケース (case) で、`update()` 関数が実行されるようにしてください。関数には 2 つの引数を指定します。1 つ目の引数は背景色、2 つ目の色は前景色です。色は文字列なので、忘れずに引用符で囲みましょう。

もし間違ってしまっても、「リセット」ボタンを押すことでいつでも元に戻せます。詰まってしまったら、「答えを見る」ボタンで答えが見られます。

```html-nolint hidden
<h2>ライブ出力</h2>
<iframe id="output" width="100%" height="350px"></iframe>

<h2>コードエディター</h2>
<p class="a11y-label">
  コードエディターから抜けるには Esc キーを押して下さい（Tab はタブ文字を挿入します）。
</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // ここに SWITCH 文を書く
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="リセット" />
  <input id="solution" type="button" value="答えを見る" />
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
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const outputIFrame = document.querySelector("#output");
const textarea = document.getElementById("code");
const initialCode = textarea.value;
let userCode = textarea.value;

const solutionCode = `const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  switch(choice) {
    case 'black':
      update('black','white');
      break;
    case 'white':
      update('white','black');
      break;
    case 'purple':
      update('purple','white');
      break;
    case 'yellow':
      update('yellow','purple');
      break;
    case 'psychedelic':
      update('lime','purple');
      break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}`;

function outputDocument(code) {
  const outputBody = `
<div class="output" style="height: 300px;">
  <label for="theme">テーマを選択: </label>
  <select id="theme">
    <option value="white">白</option>
    <option value="black">黒</option>
    <option value="purple">紫</option>
    <option value="yellow">黄色</option>
    <option value="psychedelic">サイケデリック</option>
  </select>

  <h1>これは私のウェブサイトです</h1>
</div>`;

  return `
<!doctype html>
<html>
  <head>
  </head>
  <body>
    ${outputBody}
    <script>${code}<${"/"}script>
  </body>
</html>`;
}

function update() {
  output.setAttribute("srcdoc", outputDocument(textarea.value));
}

update();

textarea.addEventListener("input", update);

reset.addEventListener("click", () => {
  textarea.value = initialCode;
  userEntry = textarea.value;
  solution.value = "Show solution";
  update();
});

solution.addEventListener("click", () => {
  if (solution.value === "答えを見る") {
    // remember the state of the user's code
    // so we can restore it
    userCode = textarea.value;
    textarea.value = solutionCode;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userCode;
    solution.value = "答えを見る";
  }
  update();
});

// タブキーでテキストエリアから抜けてしまうのを防ぎ、
// 代わりにカーソル位置にタブ文字を挿入する
textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
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
```

{{ EmbedLiveSample('Active_learning_More_color_choices', '100%', 950) }}

## スキルテスト

この記事の最後まで来ましたが、最も大事な情報を覚えていますか？先に進む前に、この情報を保持しているか検証するテストがあります — [スキルテスト: 条件文](/ja/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals) を見てください。

## まとめ

JavaScript で条件構造について、実際に使用する上で本当に必要があるのは、これですべてです。次は、コードのループ処理を見ていきます。

## 関連情報

- [比較演算子](/ja/docs/Learn_web_development/Core/Scripting/Math#比較演算子)
- [条件式についての詳細](/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else リファレンス](/ja/docs/Web/JavaScript/Reference/Statements/if...else)
- [条件（三項）演算子リファレンス](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
