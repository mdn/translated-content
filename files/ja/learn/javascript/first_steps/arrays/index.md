---
title: 配列
slug: Learn/JavaScript/First_steps/Arrays
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

このモジュールの最後に、配列について見ていきましょう。配列は 1 つの変数名でリスト形式のデータを保持するのに好都合です。ここでは、どう便利なのか、どのように作るのか、そして配列の項目を追加したり削除したり取得したりする方法について学びます。

| 前提条件: | 基礎的なコンピューターの知識、HTML と CSS への基本的な理解、JavaScript についての理解。 |
| --------- | --------------------------------------------------------------------------------------- |
| 目的:     | JavaScript において、配列とは何か、どのように操作するのかを理解する。                   |

## 配列とは何？

配列はたいてい「リストのようなオブジェクトである」と説明され、単一のオブジェクト内に複数の値をリストとして持っています。配列オブジェクトは変数に格納され、その他の型と同様に扱われます。異なるのはリスト内の値に個別にアクセスすることができ、繰り返しを用いて全ての値に同じことをするといった、リストとして便利で効率的に扱うことができます。商品とその価格の一覧を配列に保持し、その値をループして合計額を計算しつつ請求書にそれぞれの価格を表示して一番下に合計額を表示することもできるでしょう。

もし配列がなかったとしたら、別々の変数にそれぞれの値を格納しなければならず、各変数を表示するのと計算するので別々に呼び出さなければならなかったでしょう。こうなると、書き出すのがとても長く、非効率的でエラーを起こしやすいプログラムとなるでしょう。例えば、10 個の項目を請求書に出すだけでも最悪ですが、それが 100 個や 1000 個だったらどうでしょう。この記事の最後に実例としてやってみましょう。

前回までの記事と同様に、JavaScript コンソールに配列の基礎となるコード例を[ブラウザーの開発者コンソール](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)に入力しながら学びましょう。

### 配列を作る

配列を作るには、角括弧の中にカンマで区切ったリストの形式で項目を並べます。

1. 買い物リストを配列に保持したいとき、次のようにします。下のコードをコンソールに入力してみましょう。

   ```js
   let shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
   shopping;
   ```

2. この例では、配列の各項目は文字列ですが、配列には何でも格納することができることを頭に入れておきましょう。文字列、数値、オブジェクト、その他の変数、さらには別の配列ですら格納することができます。そして混ぜ合わせることも。すべて同じデータ型である必要はありません。

   ```js
   let sequence = [1, 1, 2, 3, 5, 8, 13];
   let random = ["tree", 795, [0, 1, 2]];
   ```

3. いくつか配列を作ってみましょう。それから先に進みます。

### 配列の項目を取得し変更する

配列の各項目は[文字列中の文字を取得したときのように](/ja/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)列で角括弧 (`[]`) を使用して取得することができます。

1. 次のコードをコンソールに入力してください。

   ```js
   shopping[0];
   // "パン"という値が戻ります
   ```

2. そして、配列中の項目は単に新しい値を代入することで変更することが出来ます。

   ```js
   shopping[0] = "タヒーニ";
   shopping;
   // ショッピングリストは[ "タヒーニ", "牛乳", "チーズ", "ハム", "麺" ]に変更されています。
   ```

   > **メモ:** 前にも言いましたが、重要なことなのでもう一度言います。コンピューターは 0 から数を数えます！

3. 配列の中に配列があるとき、その配列は多次元配列と呼ばれます。配列中の配列に含まれる項目には角括弧を繋げて書くことでアクセスすることができます。例えば、先ほどの例で出てきた `random` 変数に格納された配列の 3 番目の項目のさらに 3 番目の項目を取得するには以下のようにします。

   ```js
   random[2][2];
   ```

4. 移動する前に、配列の例をいくつか変更してみてください。遊んでみて、何が動いて何がそうでないかを見てください

### 配列の長さを調べる

ある配列の長さ (いくつの項目が配列中に存在するか) を知るには、文字列の (文字の) 長さを調べた時と全く同じようにします。{{jsxref("Array.prototype.length","length")}}プロパティを使用して長さを取得することができます。

```js
sequence.length;
// 7 が返る
```

このプロパティはいろいろな使われ方をするのですが、最もよく使われるのは、配列中の全項目をループするために使用されます。次の例を見てください。

```js
let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
```

ループについてはそのうち ([Looping code](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code) の記事で) しっかりと学ぶ機会があるでしょうが、ここで簡単に説明すると上のコードは次のように動きます。

1. 配列中の項目 0 番よりループを開始します。
2. 項目番号が配列の長さと同じ数になったら、繰り返しを終了します。これで配列中の要素がいくつであっても動くようになります。今回の場合は、項目の番号が 7 のときに終了します(ループでカバーしたい最後の項目番号は 6 なので、これで問題ありません)。
3. そして、各項目を [`console.log()`](/ja/docs/Web/API/Console/log) メソッドを使用してブラウザーのコンソールに出力しています。

## 便利な配列メソッド

このセクションでは、文字列を配列にしたり、配列を文字列にしたり、配列に項目を追加したり、ちょっと便利な配列関連のメソッドを見てみましょう。

### 文字列と配列を相互に変換する

データが長い長い文字列の中に含まれていて、それを使いやすい形に分割して操作したいときがあります。例えばデータを表形式で表示するというようなときです。それには{{jsxref("String.prototype.split()","split()")}} メソッドが使用できます。このメソッドは文字列を分割するのに使用する文字を引数として取り、文字列をその文字で区切った部分文字列の配列に分割します。

> **メモ:** 実際のところ、これは配列ではなく文字列のメソッドです。しかし、ここで紹介するのが一番だと思い取り上げています。

1. それではどのように動くか試してみましょう。まずは文字列をコンソールに作ります。

   ```js
   let myData = "札幌,仙台,東京,名古屋,大阪,博多";
   ```

2. この文字列をカンマで区切ります。

   ```js
   let myArray = myData.split(",");
   myArray;
   ```

3. そして、できた配列の長さを確認して、その中身を見てみましょう。

   ```js
   myArray.length;
   myArray[0]; // 配列の最初の項目
   myArray[1]; // 配列の二番目の項目
   myArray[myArray.length - 1]; // 配列の最後の項目
   ```

4. {{jsxref("Array.prototype.join()","join()")}} メソッドを使うことで、逆のことができます。

   ```js
   let myNewString = myArray.join(",");
   myNewString;
   ```

5. 配列を文字列にするもう一つの方法は、{{jsxref("Array.prototype.toString()","toString()")}} メソッドを使うことです。引数を取らない `toString()` は `join()` と比べ簡単でしょうが、制限があります。`join()` を使えば、他の区切り文字を指定することもできます (4. の例をカンマ以外の他の文字を指定して試してください)。

   ```js
   let dogNames = ["ポチ", "ハチ", "タロウ", "モコ"];
   dogNames.toString(); //ポチ,ハチ,タロウ,モコ
   ```

### 項目の追加と削除

まだ配列への項目の追加と削除をやっていませんでしたね。次はこれをやりましょう。先ほどの例にあった `myArray` 配列を使用します。先ほどの例をまだ実行していなければ、以下のコードをコンソールに入力して配列を作ってください。

```js
let myArray = ["札幌", "仙台", "東京", "名古屋", "大阪", "博多"];
```

まず、配列の最後に項目を追加したり、最後の項目を削除するには、それぞれ {{jsxref("Array.prototype.push()","push()")}} と {{jsxref("Array.prototype.pop()","pop()")}} を使います。

1. 先に `push()` を使ってみます。配列の最後に項目を追加するには 1 つ以上の項目を引数に指定します。

   ```js
   myArray.push("横浜");
   myArray;
   myArray.push("神戸", "広島");
   myArray;
   ```

2. メソッドの呼び出しが終わると、新しい配列の長さが返ります。もし新しい配列の長さを変数に格納したければ、次のようにできます。

   ```js
   let newLength = myArray.push("京都");
   myArray;
   newLength;
   ```

3. 配列の最後の要素を削除するには `pop()` を呼び出すだけです。

   ```js
   myArray.pop();
   ```

4. メソッドの呼び出しが終わると、削除された項目それ自体が返ります。

   ```js
   let removedItem = myArray.pop();
   myArray;
   removedItem;
   ```

{{jsxref("Array.prototype.unshift()","unshift()")}} と {{jsxref("Array.prototype.shift()","shift()")}} はそれぞれ `push()` や `pop()` と同様の動作ですが、配列の末尾ではなく先頭において動作します。

1. まずは、`unshift()` を次のように実行します。

   ```js
   myArray.unshift("奈良");
   myArray;
   ```

2. 今度は `shift()` でやってみましょう！

   ```js
   let removedItem = myArray.shift();
   myArray;
   removedItem;
   ```

## アクティブラーニング: 商品を印字しよう！

商品の名前と価格、合計金額を請求書に印字するという最初の話に戻りましょう。以下に示す編集可能なコードのコメントの中に数字が書かれています。この数字はコードを書くべき場所を示しています。各数字の場所に次のようなコードを書いてください。

1. `// No.1` というコメントの下に、商品の名前と価格をコロン (:) で繋げた、いくつか文字列が並んでいます。これを `products` という名前の配列にしてください。
2. `// No.2` というコメントの行から for ループが始まっています。この行には `i <= 0` と書かれています。「`i` の値が 0 以下でなくなれば終了」と書かれており、`i` は 0 から始まるので、この [for ループ](/ja/Learn/JavaScript/First_steps/A_first_splash#Loops)は一度しか実行されません。この条件を `i` が `products` 配列の長さより小さくなくなった場合に終了するような条件に置き換えて下さい。
3. `// No.3` のコメントの直下に 1 行で、現在の配列の項目 (`name:price`) を 2 つに分割するコードを書いてください。一方は商品の名前、もう一方は価格です。もしどうすればいいのかわからなければ、[便利な文字列のメソッド](/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods)の記事を参照してください。さらに[文字列と配列を相互に変換する](#converting_between_strings_and_arrays)も役に立つでしょう。
4. 上記のコードの一部として、価格を文字列から数値に変換する必要もあるでしょう。どのようにすべきか思い出せなければ、[文字列の最初の記事](/ja/Learn/JavaScript/First_steps/Strings#Numbers_vs._strings)を確認してみましょう。
5. コードの先頭に `total` という名前の変数が宣言されて、0 で初期化されています。ループの中で (`// No.4` *の*下) 繰り返している現在の項目の価格を `total` 変数に加算するコードを一行で書いてください。そうすれば、コードの最後で正しい合計が請求書に印字されます。恐らく[代入演算子](/ja/Learn/JavaScript/First_steps/Math#Assignment_operators)が役に立つでしょう。
6. `// No.5` のコメントの直下のコードを `itemText` 変数が「現在の項目の商品名 — $現在の項目の価格」となるように変更してください。「靴 — $23.99」という感じです。そうすれば正しい情報が請求書に印字されます。これはもう慣れたはずの単純な文字列結合で実現できます。

```html hidden
<h2>出力結果</h2>

<div class="output" style="min-height: 150px;">
  <ul></ul>

  <p></p>
</div>

<h2>コードエディター</h2>

<p class="a11y-label">
  コードエディターから抜けるには Esc
  キーを押して下さい(タブキーではタブ文字を挿入します)。
</p>

<textarea id="code" class="playable-code" style="height: 410px;width: 95%">
const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// No.1
                'パンツ:6.99'
                '靴下:5.99'
                'T シャツ:14.99'
                'ズボン:31.99'
                '靴:23.99';

for (let i = 0; i <= 0; i++) { // No.2
  // No.3

  // No.4

  // No.5
  let itemText = 0;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = '合計: $' + total.toFixed(2);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="リセット" />
  <input id="solution" type="button" value="答えを見る" />
</div>
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
  solution.value = "Show solution";
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
  "const list = document.querySelector('.output ul');\nconst totalBox = document.querySelector('.output p');\nlet total = 0;\nlist.innerHTML = '';\ntotalBox.textContent = '';\n\nlet products = ['パンツ:6.99',\n  '靴下:5.99',\n  'T シャツ:14.99',\n  'ズボン:31.99',\n  '靴:23.99'];\n\nfor(let i = 0; i < products.length; i++) {\n  let subArray = products[i].split(':');\n  let name = subArray[0];\n  let price = Number(subArray[1]);\n  total += price;\n  itemText = name + ' — $' + price;\n\n  let listItem = document.createElement('li');\n  listItem.textContent = itemText;\n  list.appendChild(listItem);\n}\n\ntotalBox.textContent = '合計: $' + total.toFixed(2);";
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
  background-color: #f5f9fa;
}
```

{{ EmbedLiveSample('Playable_code', '100%', 730, "", "", "hide-codepen-jsfiddle") }}

## アクティブラーニング: 上位 5 件の検索

{{jsxref("Array.prototype.push()","push()")}} や{{jsxref("Array.prototype.pop()","pop()")}} といったメソッドを使用するよい例は、ウェブアプリでデータの中で有効な項目だけを抜き出して維持したいときなどです。例えば、アニメーションのあるシーンで、現在表示中の背景イメージを保持している配列があり、一度に表示するイメージをパフォーマンスなどの理由で 50 に制限したいとします。その際、新しいオブジェクトを配列に追加したと同時に、古いオブジェクトを削除して配列を希望のサイズに維持します。

次の例では、もう少し単純に、検索ボックスのある、ダミーの検索サイトを用意しました。検索ボックスに文字が入力されたら、直前 5 つの検索語がリストに表示されます。検索された語が 5 を超えたら最後の検索語が削除されるようになります。新しい検索語が先頭に追加されるので、常に 5 つの検索語が表示されます。

> **メモ:** 本当の検索アプリでは、前回の検索語をクリックすることでその検索に戻れて、実際に検索結果が表示されることでしょう！ただし、今は単純にしておきましょう。

アプリを完成させるには...

1. `// No.1` コメントの下に、検索ボックスに入力された検索語を配列の先頭に追加するコードを書いてください。検索語は `searchInput.value` と書いて取得します。
2. `// No.2` コメントの下に、配列の最後の項目を削除するコードを書いてください。

```html hidden
<h2>出力結果</h2>
<div class="output" style="min-height: 150px;">
  <input type="text" /><button>検索</button>

  <ul></ul>
</div>

<h2>コードエディター</h2>

<p class="a11y-label">
  コードエディターから抜けるには Esc
  キーを押して下さい(タブキーではタブ文字を挿入します)。
</p>

<textarea id="code" class="playable-code" style="height: 370px; width: 95%">
const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // 検索ボックスが空ではない場合のみ検索語を受け付けるようにします
  if (searchInput.value !== '') {
    // No.1

    // 表示中の一覧を空にして、同じ項目が表示されないようにして、
    // 結果は検索語が入力される度に毎回作り直されます。
    list.innerHTML = '';

    // 配列をループして、リスト内の全ての検索語を表示します
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // 配列の長さが 5以上になったら一番古い検索語を削除します
    if (myHistory.length >= 5) {
      // No.2

    }

    // 次の検索語を受け付けるため、検索ボックスを空にしてフォーカスします
    searchInput.value = '';
    searchInput.focus();
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
  solution.value = "Show solution";
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
  "const list = document.querySelector('.output ul');\nconst searchInput = document.querySelector('.output input');\nconst searchBtn = document.querySelector('.output button');\n\nlist.innerHTML = '';\n\nlet myHistory= [];\n\nsearchBtn.onclick = function() {\n if(searchInput.value !== '') {\n myHistory.unshift(searchInput.value);\n\n list.innerHTML = '';\n\n for(let i = 0; i < myHistory.length; i++) {\n itemText = myHistory[i];\n const listItem = document.createElement('li');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n }\n\n if(myHistory.length >= 5) {\n myHistory.pop();\n }\n\n searchInput.value = '';\n searchInput.focus();\n }\n}";
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

{{ EmbedLiveSample('Playable_code_2', '100%', 700, "", "", "hide-codepen-jsfiddle") }}

## スキルをテストしよう!

この記事の最後に到達しましたが、最も大事な情報を覚えていますか？移動する前に、情報を維持しているか検証するテストを見ることができます — [Test your skills: Arrays](/ja/docs/Learn/JavaScript/First_steps/Test_your_skills:_Arrays) を見てください。

## 結論

この記事を読んで、配列がとても使えるものであることがお分かりいただけたのではないでしょうか。配列は JavaScript の至るところで見かけます。特に配列の各項目に対して同じことをする際にループと一緒に使われます。便利なループの基本については次のモジュールで教えますが、今は自分自身を褒めて、十分に休みましょう！このモジュールのすべての記事をやり終えました！

ただし、次のモジュールの前に、理解度を確認するため、このモジュールの課題をやりましょう。残っているのはそれだけです。

## 関連情報

- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections) — 配列とそのいとこにあたる型付き配列についての高度なガイドです。
- {{jsxref("Array")}} — `Array` オブジェクトのリファレンスページです。詳細なガイドと機能については、このリファレンスページで紹介されています。

{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}
