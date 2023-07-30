---
title: 便利な文字列メソッド
slug: Learn/JavaScript/First_steps/Useful_string_methods
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

文字列の基本についてはすでに見ました。ここからはレベルを上げて、組み込みのメソッドを使用して文字列に対して実行できる便利な操作について考えてみましょう。例えば、文字列の長さを調べたり、繋げたり、分割したり、ある文字を他の文字に置き換えたりなどです。

| 前提条件: | 基礎的なコンピュータの知識、HTML と CSS の基本の理解、JavaScript が何かを知っていること。                                        |
| --------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | 文字列がオブジェクトであることを理解して、そのオブジェクトで使用できる基本的なメソッドを使って文字列を操作する方法を身に付ける。 |

## オブジェクトとしての文字列

JavaScript ではほとんどのものはオブジェクトです。たとえば、次のように文字列を作った時も、

```js
let string = "This is my string";
```

この変数は文字列オブジェクトのインスタンスになり、大量のプロパティとメソッドが使用可能となります。{{jsxref("String")}} オブジェクトのページに行って、横にある一覧を眺めてみてください！

**また、脳が溶け出しそうかもしれませんが、安心してください！**先ほどのページにある、ほとんどのメソッドは学習の初期に覚える必要はありません。しかし、今から紹介する、文字列操作のメソッドはとてもよく使いますのでぜひ覚えましょう。

[ブラウザーの開発者コンソール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)にいくつかの例を入力してみましょう。

### 文字列の長さを調べる

ただ {{jsxref("String.prototype.length", "length")}} プロパティを使用すればよいので、とても簡単です。次の行を入力してみましょう。

```js
let browserType = "mozilla";
browserType.length;
```

これで 7 という数値が戻ります。なぜなら "mozilla" は 7 文字だからです。例えば、文字の長さによって文字列を並べたいときや、ユーザーがある長さ以上のユーザー名をフォームの入力フィールドに入れたことを知らせたりするような場面で便利です。

### 特定の文字列を扱う

前の例と関連していますが、文字列に対して**角括弧記法**を使用することで文字列中の任意の 1 文字が得られます。つまり角括弧 (`[]`) を変数名の後ろに付け、その中に数値を入れることで、その番目にある文字が返ってきます。例えば最初の一文字を取得するには次のようにします。

```js
browserType[0];
```

コンピューターは 1 からではなく、0 から数えます！例えば、文字列から最初の文字を見つけてアルファベット順に並べるときに使うことができます。

文字列の一番最後の文字を取得したいときは、先ほどの `length` プロパティと組み合わせて以下のようにします。

```js
browserType[browserType.length - 1];
```

"mozilla" の長さは 7 ですが、0 から始まるので、最後の文字の位置は 6 になります。よって `length-1` とする必要があるのです。

### 部分文字列を探して抽出する

長い文字列の中に、ある文字列が存在するか調べたいと思うことがあります (よく文字列中に部分文字列が存在するなどといいます)。これには、探したい部分文字列を{{glossary("parameter","引数")}}に取る {{jsxref("String.prototype.indexOf()", "indexOf()")}} メソッドを使用することで可能です。

もし対象の文字列中に部分文字列が*見つかった*場合、このメソッドは部分文字列のインデックス位置を表す数値 (対象の文字列上で部分文字列が始まる文字数) を返します。もし対象の文字列中に部分文字列が*見つからなかった*場合は、`-1` の値を返します。

1. 以下を試してみましょう。

   ```js
   browserType.indexOf("zilla");
   ```

   このコードは 2 を返します。なぜならば、"mozilla"という文字列中で、部分文字列"zilla"の開始位置が 2 (0、1、2 — つまり 3 文字目)であるからです。このようなコードは文字列を絞り込むときなどに使います。例えば、ウェブサイトのアドレスの一覧があったとき、その中から"mozilla"を含むものだけを表示したい場合などです。

2. 部分文字列が含まれてることを確認するもう一つの方法があり、こちらのほうが効果的な場合があります。

   ```js
   browserType.indexOf("vanilla");
   ```

   上記のコードは `-1` を返します。これは部分文字列 (この場合は 'vanilla') がメインの文字列の中に見つからなかった場合に返されます。

   これを使って、部分文字列 'mozilla' を**含まない** (あるいは否定演算子 `!==` を使うなら**含む**) 文字列のすべてのインスタンスを見つけることができます。

   ```js
   if (browserType.indexOf("mozilla") === -1) {
     // もし部分文字列 'mozilla' が含まれていない場合は、
     // 文字列で何かをします。
   }

   if (browserType.indexOf("mozilla") !== -1) {
     // もし部分文字列 'mozilla' が含まれている場合は、
     // 文字列で何かをします。
   }
   ```

3. 部分文字列がその文字列のどこから始まるかが分かっており、どこで終わっているかがわかれば、その部分文字列を {{jsxref("String.prototype.slice()", "slice()")}} メソッドを使用することで抽出することができます。

   ```js
   browserType.slice(0, 3);
   ```

   このコードは "moz" という文字列を返します。最初の引数は抽出を始める最初の位置で、2 番目の引数が抽出する最後の文字の直後の位置です。つまり、この場合先頭から 4 番目の手前までの文字列が切り出されたということです。言い換えると、この場合は 2 番目の引数と同じ 3 文字が切り出されました。

4. また、ある文字以降の文字列の残りの文字をすべて抽出したいとわかっている場合は、2 番目のパラメータを含める必要はありません！その代わり、文字列内の残りの文字を抽出したい文字の位置を含める必要があるだけです。次のようにしてみてください。

   ```js
   browserType.slice(2);
   ```

   この例は "zilla" という文字列を返します。なぜなら、2 の位置にある文字は z であり、2 番目の引数を指定していないため、3 文字目から最後までが部分文字列として戻ったのです。

> **メモ:** `slice()` の 2 番目の引数はオプション (任意指定) です。もし指定しなければ、元々の文字列の最後まで切り出しを行います。他にもオプションがありますので、さらに詳しく知りたければ{{jsxref("String.prototype.slice()", "slice()")}}のページで調べてみましょう。

### 大文字・小文字の切り替え

String には{{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}と{{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}という 2 つのメソッドがあり、引数として渡された文字列のすべての文字の大文字・小文字を切り替えます。これは例えば、ユーザーの入力を DB に保存する場合に、値を正規化するのに便利です。

それでは次の行を入力し、何が起きるか見てみましょう。

```js
let radData = "My NaMe Is MuD";
radData.toLowerCase();
radData.toUpperCase();
```

### 文字列の一部分を書き換える

{{jsxref("String.prototype.replace()", "replace()")}}メソッドを使用することで、ある部分文字列を他の文字列に置き換えることができます。基本レベルではとても単純に動作しますが、`replace()` メソッドは高度な機能を持っています (今回はその機能は紹介しませんが)。

検索する文字列と、置き換える文字列の 2 つを引数に取ります。次の例を実行してみてください。

```js
browserType.replace("moz", "van");
```

これはコンソールで"vanilla"を返しますが、`browserType` の値は、"mozilla"のままです。プログラムで変数 `browserType` の値を実際に更新するには、演算の結果を変数に設定し直す必要があります。つまりそれ変数に設定されている部分文字列を自動的には更新してくれないのです。従って実際に変数の内容を更新するためには `browserType = browserType.replace('moz','van');` のように書きます。

## アクティブ学習の実例

この章では、文字列を操作するコードを書いてもらいます。以下のどの問題も文字列の配列をループで回して、順序なしリスト形式で表示しますが、配列やループに関して今は理解する必要はありません。配列については今後の記事で説明します。必要なのは、どのような書式で出力するかという要求を満たすコードを書くことです。

どの例も「リセット」ボタンがあるので、コードが動かなくなった場合は使用してみてください。もし本当に行き詰まってしまった場合には、「答えを見る」ボタンを押すことで、回答を見ることができます。

### 挨拶を選別する

まずは簡単な問題から始めます。挨拶状に使用するメッセージの配列の中から、クリスマスのメッセージのみを選別し、並べ替えてください。やるべきことは、メッセージがクリスマスメッセージであることを判定しその場合のみ表示されるよう、`if ( ... )` 文の条件式を埋めることです。

1. まず、各メッセージがどうであればクリスマス(Christmas)メッセージとみなせるかを考えてください。こういうメッセージ中にはどんな文字列があり、それが存在するか判定するのにどんなメソッドが使えるでしょうか？
2. それから、オペランド 1 演算子 オペランド 2 の形で条件を書いてください。その条件は左辺と右辺が等しいかというものでしょうか？もしくは左辺のメソッドの戻り値が、右辺であるかというものでしょうか。
3. ヒント: 今回の場合、メソッドの戻り値の結果が何でないかを判定するとよいでしょう。

```html hidden
<h2>出力結果</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>コードエディタ</h2>
<p class="a11y-label">
  コードエディタから抜けるには Esc
  キーを押して下さい(タブキーではタブ文字を挿入します)。
</p>

<textarea id="code" class="playable-code" style="height: 290px; width: 95%">
const list = document.querySelector('.output ul');
list.innerHTML = '';
let greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
  // 以下の条件の括弧内の内容を書き換えて下さい
  if (greetings[i]) {
    let listItem = document.createElement('li');
    listItem.textContent = input;
    list.appendChild(listItem);
  }
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
  solution.value = "答えを見る";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "答えを見る") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを見る";
  }
  updateCode();
});

const jsSolution =
  "const list = document.querySelector('.output ul');" +
  "\nlist.innerHTML = '';" +
  "\nlet greetings = ['Happy Birthday!'," +
  "\n                 'Merry Christmas my love'," +
  "\n                 'A happy Christmas to all the family'," +
  "\n                 'You\\'re all I want for Christmas'," +
  "\n                 'Get well soon'];" +
  "\n" +
  "\nfor (let i = 0; i < greetings.length; i++) {" +
  "\n  let input = greetings[i];" +
  "\n  if (greetings[i].indexOf('Christmas') !== -1) {" +
  "\n    let result = input;" +
  "\n    let listItem = document.createElement('li');" +
  "\n    listItem.textContent = result;" +
  "\n    list.appendChild(listItem);" +
  "\n  }" +
  "\n}";

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// タブキーでテキストエリアから抜けてしまうのを防ぎ、
// 代わりにカーソル位置にタブ文字を挿入する

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
  const caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// ユーザーがテキストエリアのコードを書き換える度に userCode を毎回更新する

textarea.onkeyup = function () {
  // ユーザーのコードが表示されているときのみ状態を保存し、
  // 答えのコードでユーザーコードが上書きされないようにする
  if (solution.value === "答えを見る") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', '100%', 590, "", "", "hide-codepen-jsfiddle") }}

### 単語の最初の文字を大文字に直す

この課題ではイギリスの都市名を題材にします。ところが、単語の大文字と小文字がぐちゃぐちゃになっています。そこで最初の文字を大文字にし、残りをすべて小文字にしてみましょう。こういう手順でやってみます:

1. `input` 変数に入っている文字列全体を小文字に変換し、それを新しい変数に格納します。
2. この新しい変数にある最初の文字を取り出し、さらに別の変数に格納します。
3. その新しい変数を部分文字列とし、小文字ばかりの文字列にある最初の文字を置換して、大文字化します。この置換処理の結果を別の新しい変数に格納します。
4. `input` 変数ではなく、最終結果が `result` 変数の値に代入されるよう修正します。

> **メモ:** ヒント — 文字列メソッドのパラメーターは文字列リテラルである必要はありません。変数でもよいですし、メソッドが呼び出される変数であっても構いません。

```html hidden
<h2>出力結果</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>コードエディタ</h2>
<p class="a11y-label">
  コードエディタから抜けるには Esc
  キーを押して下さい(タブキーではタブ文字を挿入します)。
</p>

<textarea id="code" class="playable-code" style="height: 250px; width: 95%">
const list = document.querySelector('.output ul');
list.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // この下にコードを書いて下さい

  let result = input;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
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
  solution.value = "答えを見る";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "答えを見る") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを見る";
  }
  updateCode();
});

const jsSolution =
  "const list = document.querySelector('.output ul');" +
  "\nlist.innerHTML = '';" +
  "\nlet cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];" +
  "\n" +
  "\nfor (let i = 0; i < cities.length; i++) {" +
  "\n  let input = cities[i];" +
  "\n  let lower = input.toLowerCase();" +
  "\n  let firstLetter = lower.slice(0,1);" +
  "\n  let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());" +
  "\n  let result = capitalized;" +
  "\n  let listItem = document.createElement('li');" +
  "\n  listItem.textContent = result;" +
  "\n  list.appendChild(listItem);" +
  "\n" +
  "\n}";

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// タブキーでテキストエリアから抜けてしまうのを防ぎ、
// 代わりにカーソル位置にタブ文字を挿入する

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
  const caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// ユーザーがテキストエリアのコードを書き換える度に userCode を毎回更新する

textarea.onkeyup = function () {
  // ユーザーのコードが表示されているときのみ状態を保存し、
  // 答えのコードでユーザーコードが上書きされないようにする
  if (solution.value === "答えを見る") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_2', '100%', 550, "", "", "hide-codepen-jsfiddle") }}

### 既存の部分から新しい文字列を作成する

最後の課題では、北イングランドの駅に関する情報が入っている文字列を格納している配列を扱います。この文字列にはデータ項目として、アルファベット 3 文字の駅コード、次にコンピューター読み取り用のデータ、次にセミコロン、そして人間が読める駅名が入っています。例:

```
MAN675847583748sjt567654;Manchester Piccadilly
```

駅コードと駅名を抽出し、それを文字列にまとめてこのような形にします:

```
MAN: Manchester Piccadilly
```

このようにプログラムしてみましょう:

1. アルファベット 3 文字のコードを抽出し、新しい変数に格納します。
2. セミコロンの文字インデックス番号を検索します。
3. セミコロンの文字インデックス番号を参照位置にして、人が読める駅名を抽出し、新しい変数に格納します。
4. この 2 つの新しい変数と文字列リテラルとを連結し、最終的な文字列を作成します。
5. `input` 変数ではなく、この最終結果が `result` 変数の値に代入されるよう修正します。

```html hidden
<h2>出力結果</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>コードエディタ</h2>
<p class="a11y-label">
  コードエディタから抜けるには Esc
  キーを押して下さい(タブキーではタブ文字を挿入します)。
</p>

<textarea id="code" class="playable-code" style="height: 285px; width: 95%">
const list = document.querySelector('.output ul');
list.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  let input = stations[i];
  // この下にコードを書いてください

  let result = input;
  let listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
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
  solution.value = "答えを見る";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "答えを見る") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを見る";
  }
  updateCode();
});

const jsSolution =
  "const list = document.querySelector('.output ul');" +
  "\nlist.innerHTML = '';" +
  "\nlet stations = ['MAN675847583748sjt567654;Manchester Piccadilly'," +
  "\n                'GNF576746573fhdg4737dh4;Greenfield'," +
  "\n                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street'," +
  "\n                'SYB4f65hf75f736463;Stalybridge'," +
  "\n                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];" +
  "\n" +
  "\nfor (let i = 0; i < stations.length; i++) {" +
  "\n  let input = stations[i];" +
  "\n  let code = input.slice(0,3);" +
  "\n  let semiC = input.indexOf(';');" +
  "\n  let name = input.slice(semiC + 1);" +
  "\n  let result = code + ': ' + name;" +
  "\n  let listItem = document.createElement('li');" +
  "\n  listItem.textContent = result;" +
  "\n  list.appendChild(listItem);" +
  "\n}";

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// タブキーでテキストエリアから抜けてしまうのを防ぎ、
// 代わりにカーソル位置にタブ文字を挿入する

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
  const caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// ユーザーがテキストエリアのコードを書き換える度に userCode を毎回更新する

textarea.onkeyup = function () {
  // ユーザーのコードが表示されているときのみ状態を保存し、
  // 答えのコードでユーザーコードが上書きされないようにする
  if (solution.value === "答えを見る") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_3', '100%', 585, "", "", "hide-codepen-jsfiddle") }}

## スキルをテストしよう!

この記事の最後に到達しましたが、最も大事な情報を覚えていますか？移動する前に、情報を維持しているかを検証するテストを見ることができます— [Test your skills: Strings](/ja/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings) を見てください。

## 結論

プログラミング、特に JavaScript では単語や文を処理できるようになることが大事であるという現実から逃れることはできません。それはウェブサイトは人とのコミュニケーションがすべてとなるためです。この記事では、文字列を処理するのに当面知っておくべき基礎を解説しました。今後もっと複雑なトピックに進んで行くときに役立つはずです。次に、配列を見てみます。重要なデータ型のうち、短期間で押さえておくべき最後の 1 つです。

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
