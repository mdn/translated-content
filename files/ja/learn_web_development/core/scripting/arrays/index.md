---
title: 配列
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

このモジュールの最後に、配列について見ていきましょう。配列は 1 つの変数名でリスト形式のデータを保持するのに好都合です。ここでは、どう便利なのか、どのように作るのか、そして配列の項目を追加したり削除したり取得したりする方法について学びます。

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
          <li>配列とは何か。それは、変数のリストを保持する構造です。</li>
          <li>配列の構文 — <code>[a, b, c]</code> およびアクセサー構文、<code>myArray[x]</code>。</li>
          <li>配列の値の変更。</li>
          <li><code>length</code>、<code>push()</code>、<code>pop()</code>、<code>join()</code>、<code>split()</code> などの一般的なプロパティやメソッドを使用した配列操作。</li>
          <li><code>forEach()</code>、<code>map()</code>、<code>filter()</code> などの高度な配列メソッド。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 配列とは何？

配列はたいてい「リストのようなオブジェクトである」と説明され、単一のオブジェクト内に複数の値をリストとして持っています。配列オブジェクトは変数に格納され、その他の型と同様に扱われます。配列オブジェクトは変数に格納することができ、他の型の値とほとんど同じように扱うことができます。異なる点は、リスト内のそれぞれの値に個別にアクセスすることができ、ループを回してすべての値に同じ処理を行うなど、リストを使って非常に便利で効率的な処理を行うことができる点です。商品とその価格の一覧を配列に保持し、その値をループして合計額を計算しつつ請求書にそれぞれの価格を表示して一番下に合計額を表示することもできるでしょう。

もし配列がなかったとしたら、別々の変数にそれぞれの値を格納しなければならず、各変数を表示するのと計算するので別々に呼び出さなければならなかったでしょう。こうなると、書き出すのがとても長く、非効率的でエラーを起こしやすいプログラムとなるでしょう。例えば、10 個の項目を請求書に出すだけでも最悪ですが、それが 100 個や 1000 個だったらどうでしょう。この記事の最後に実例としてやってみましょう。

前回までの記事と同様に、JavaScript コンソールに配列の基礎となるコード例を[ブラウザーの開発者コンソール](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)に入力しながら学びましょう。

## 配列の作成

配列を作るには、角括弧の中にカンマで区切ったリストの形式で項目を並べます。

1. 買い物リストを配列に保持したいとき、次のようにします。下のコードをコンソールに入力してみましょう。

   ```js
   const shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
   console.log(shopping);
   ```

2. 上の例では、各項目は文字列ですが、配列の中には文字列、数値、オブジェクト、さらには他の配列など、さまざまなデータ型を格納することができます。一つの配列の中でデータ型を混在させることもできます。ある配列には数値だけを格納し、別の配列には文字列だけを格納するといった制限をする必要はありません。例を挙げます。

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. いくつか配列を作ってみましょう。それから先に進みます。

## 配列の長さを求める

文字列の長さ（文字数）を調べるのとまったく同じ方法で、配列の長さ（その中にいくつの項目があるか）を調べることができます。 {{jsxref("Array.prototype.length", "length")}} プロパティを使用します。次のようにしてみてください。

```js
const shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
console.log(shopping.length); // 5
```

## 配列の項目を取得し変更する

配列の項目には 0 から始まる番号が振られます。この番号は項目のインデックス（添字）と呼ばれます。つまり、最初の項目はインデックス 0、2 番目の項目はインデックス 1、のようになります。配列の各項目は、角括弧 (`[]`) を使用してその項目のインデックスを与えることで、[文字列中の文字を取得するときのように](/ja/docs/Learn_web_development/Core/Scripting/Useful_string_methods#文字列の特定の文字を受け取る)取得することができます。

1. 次のコードをコンソールに入力してください。

   ```js
   const shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
   console.log(shopping[0]);
   // "パン"という値が戻ります
   ```

2. また、配列のある項目に新しい値を与えて、その項目を変更することもできます。試してみてください。

   ```js
   const shopping = ["パン", "牛乳", "チーズ", "ハム", "麺"];
   shopping[0] = "タヒーニ";
   shopping;
   // 買い物リストは [ "タヒーニ", "牛乳", "チーズ", "ハム", "麺" ] に変更されています。
   ```

   > [!NOTE]
   > 前にも言いましたが、重要なことなのでもう一度言います。コンピューターは 0 から数を数えます。

3. なお、配列の中の配列を多次元配列と呼びます。 2 つの角括弧を連結することで、それ自身が別の配列の中にある配列の中の項目にアクセスすることができます。例えば、 `random` 配列（前の節を参照）の 3 番目の項目である配列の中の 1 つの項目にアクセスするには、次のようにします。

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. 次へ行く前に、配列の例をいくつか変更してみてください。遊んでみて、何が動いて何がそうでないかを見てください

### 配列内におけるアイテムのインデックスの検索

アイテムのインデックスが分からない場合は、 {{jsxref("Array.prototype.indexOf()","indexOf()")}} メソッドを使用します。
`indexOf()` メソッドはアイテムを引数として取り、アイテムのインデックスを返すか、アイテムが配列にない場合は `-1` を返します。

```js
const birds = ["オウム", "鷹", "フクロウ"];
console.log(birds.indexOf("フクロウ")); // 2
console.log(birds.indexOf("ウサギ")); // -1
```

## アイテムの追加

配列の末尾に 1 つ以上の項目を追加するには、 {{jsxref("Array.prototype.push()","push()")}} を使用します。なお、配列の末尾に追加したい項目を 1 つ以上含める必要があります。

```js
const cities = ["東京", "大阪"];
cities.push("広島");
console.log(cities); // [ "東京", "大阪", "広島" ]
cities.push("福岡", "鹿児島");
console.log(cities); // [ "東京", "大阪", "広島", "福岡", "鹿児島" ]
```

メソッド呼び出しが完了すると、配列の新しい長さが返されます。新しい配列の長さを変数に格納したい場合は、次のようにします。

```js
const cities = ["東京", "大阪"];
const newLength = cities.push("神戸");
console.log(cities); // [ "東京", "大阪", "神戸" ]
console.log(newLength); // 3
```

項目を配列の先頭に追加するには、 {{jsxref("Array.prototype.unshift()","unshift()")}} を使用してください。

```js
const cities = ["東京", "大阪"];
cities.unshift("札幌");
console.log(cities); // [ "札幌", "東京", "大阪" ]
```

## アイテムの削除

配列から最後の項目を削除するには、 {{jsxref("Array.prototype.pop()", "pop()")}} を使用してください。

```js
const cities = ["東京", "大阪"];
cities.pop();
console.log(cities); // [ "東京" ]
```

`pop()` メソッドは削除された項目を返します。その項目を新しい変数に保存するには、次のようにします：

```js
const cities = ["東京", "大阪"];
const removedCity = cities.pop();
console.log(removedCity); // "大阪"
```

配列から最初の項目を削除するには、 {{jsxref("Array.prototype.shift()","shift()")}} を使用してください。

```js
const cities = ["東京", "大阪"];
cities.shift();
console.log(cities); // [ "大阪" ]
```

項目のインデックスがわかっていれば、 {{jsxref("Array.prototype.splice()","splice()")}} を使って配列から取り除くことができます。

```js
const cities = ["東京", "大阪", "仙台", "札幌"];
const index = cities.indexOf("大阪");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "東京", "仙台", "札幌" ]
```

この `splice()` の呼び出しでは、最初の引数で項目の削除を始める場所を指定し、 2 番目の引数でいくつの項目を削除するかを指定します。つまり、複数の項目を削除することができます。

```js
const cities = ["東京", "大阪", "仙台", "札幌"];
const index = cities.indexOf("大阪");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "東京", "札幌" ]
```

## それぞれの項目へのアクセス

配列のすべての項目にアクセスしたいことがよくあるでしょう。この場合、 {{jsxref("statements/for...of","for...of")}} 文を使用します。

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

配列の各項目に対して同じことを行い、変更された項目を含む配列を残したい場合があります。これには {{jsxref("Array.prototype.map()","map()")}} を使います。以下のコードは、数値の配列を受け取り、それぞれの数値を 2 倍にします。

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

`map()` に関数を渡すと、 `map()` は配列の各項目に対してその関数を 1 回ずつ呼び出します。そして、それぞれの関数呼び出しの返値を新しい配列に追加し、最後に新しい配列を返します。

元の配列の中でテストに適合する項目のみを含む新しい配列を作成したい場合があります。その場合は {{jsxref("Array.prototype.filter()","filter()")}} を使います。以下のコードは、文字列の配列を受け取り、 2 文字を超えている（ 3 文字以上の）文字列だけを含む配列を返します。

```js
function isLong(city) {
  return city.length > 2;
}
const cities = ["東京", "名古屋", "大阪", "鹿児島"];
const longer = cities.filter(isLong);
console.log(longer); // [ "名古屋", "鹿児島" ]
```

`map()` と同じように、 `filter()` メソッドに関数を与えて、 `filter()` は配列の各項目に対してこの関数を呼び出します。関数が `true` を返した場合、その項目は新しい配列に追加されます。最後に、この関数は新しい配列を返します。

### 文字列と配列を相互に変換する

データが長い長い文字列の中に含まれていて、それを使いやすい形に分割して操作したいときがあります。例えばデータを表形式で表示するというようなときです。それには{{jsxref("String.prototype.split()","split()")}} メソッドが使用できます。このメソッドは文字列を分割するのに使用する文字を引数として取り、文字列をその文字で区切った部分文字列の配列に分割します。

> [!NOTE]
> 厳密には、これは配列ではなく文字列のメソッドです。しかし、ここで紹介するのが一番だと思い取り上げています。

1. それではどのように動くか試してみましょう。まずは文字列をコンソールに作ります。

   ```js
   const data = "札幌,仙台,東京,名古屋,大阪,福岡";
   ```

2. この文字列をカンマで分割します。

   ```js
   const cities = data.split(",");
   cities;
   ```

3. そして、できた配列の長さを確認して、その中身を見てみましょう。

   ```js
   cities.length;
   cities[0]; // 配列の最初の項目
   cities[1]; // 配列の 2 番目の項目
   cities[cities.length - 1]; // 配列の最後の項目
   ```

4. {{jsxref("Array.prototype.join()","join()")}} メソッドを使うことで、逆のことができます。

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. 配列を文字列にするもう一つの方法は、 {{jsxref("Array.prototype.toString()","toString()")}} メソッドを使うことです。引数を取らない `toString()` は `join()` と比べ簡単でしょうが、制限があります。 `join()` を使えば、他の区切り文字を指定することもできます。（4. の例をカンマ以外の他の文字を指定して試してください。）

   ```js
   const dogNames = ["ポチ", "ハチ", "タロウ", "モコ"];
   dogNames.toString(); //ポチ,ハチ,タロウ,モコ
   ```

## アクティブラーニング: 商品を印字する

先ほど記述した例に戻りましょう。請求書に製品名と価格を印刷し、価格を合計して下部に印刷します。下記に記述されている編集可能な例には、数字を含むコメントがあります。これらのコメントは、コードに何かを追加しなければならない場所を示しています。次のようにします。

1. `// No.1` というコメントの下に、商品の名前と価格をコロン (:) で繋げた、いくつか文字列が並んでいます。これを `products` という名前の配列にしてください。
2. `// No.2` というコメントの下で、 `for...of()` ループを始めて `products` 配列のすべての項目を繰り返すようにしてください。
3. `// No.3` のコメントの下に 1 行で、現在の配列の項目 (`name:price`) を 2 つに分割するコードを書いてください。一方は商品の名前、もう一方は価格です。もしどうすればいいのかわからなければ、[便利な文字列のメソッド](/ja/docs/Learn_web_development/Core/Scripting/Useful_string_methods)の記事を参照してください。さらに[文字列と配列を相互に変換する](#文字列と配列を相互に変換する)も役に立つでしょう。
4. 上記のコードの一部として、価格を文字列から数値に変換する必要もあるでしょう。どのようにすべきか思い出せなければ、[文字列の最初の記事](/ja/docs/Learn_web_development/Core/Scripting/Strings#数値と文字列)を確認してみましょう。
5. コードの先頭に `total` という名前の変数が宣言されて、0 で初期化されています。ループの中で (`// No.4` *の*下) 繰り返している現在の項目の価格を `total` 変数に加算するコードを一行で書いてください。そうすれば、コードの最後で正しい合計が請求書に印字されます。恐らく[代入演算子](/ja/docs/Learn_web_development/Core/Scripting/Math#代入演算子)が役に立つでしょう。
6. `// No.5` のコメントの直下のコードを `itemText` 変数が「現在の項目の商品名 — $現在の項目の価格」となるように変更してください。「靴 — $23.99」という感じです。そうすれば正しい情報が請求書に印字されます。これはもう慣れたはずの単純な文字列結合で実現できます。
7. 最後に、 `// No.6` のコメントの下に、 `}` を追加して `for...of()` ループの最後を示す必要があるでしょう。

```html-nolint hidden
<h2>出力結果</h2>

<div class="output" style="min-height: 150px;">
  <ul></ul>

  <p></p>
</div>

<h2>コードエディター</h2>

<p class="a11y-label">
  コードエディターから抜けるには Esc キーを押して下さい（タブキーではタブ文字を挿入します）。
</p>

<textarea id="code" class="playable-code" style="height: 410px;width: 95%">
const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.textContent = "";
totalBox.textContent = "";
// No.1
                'パンツ:6.99'
                '靴下:5.99'
                'T シャツ:14.99'
                'ズボン:31.99'
                '靴:23.99';

// No.2

  // No.3

  // No.4

  // No.5
  let itemText = 0;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);

// No.6
//
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

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "答えを見る") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを見る";
  }
  updateCode();
});

const jsSolution = `const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.textContent = "";
totalBox.textContent = "";

const products = [
  'パンツ:6.99',
  '靴下:5.99',
  'T シャツ:14.99',
  'ズボン:31.99',
  '靴:23.99',
];

for (const product of products) {
  const subArray = product.split(':');
  const name = subArray[0];
  const price = Number(subArray[1]);
  total += price;
  const itemText = \`\${name} — $\${price}\`;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = \`合計: $\${total.toFixed(2)}\`;`;
let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// タブキーでテキストエリアから抜けてしまうのを防ぎ、
// 代わりにカーソル位置にタブ文字を挿入する

textarea.onkeydown = (event) => {
  if (event.code === "Tab") {
    event.preventDefault();
    insertAtCaret("\t");
  }
  if (event.code === "Escape") {
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

// ユーザーがテキストエリアのコードを書き換える度に userCode を毎回更新する

textarea.onkeyup = () => {
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

{{ EmbedLiveSample('Active_learning_Printing_those_products', '100%', 750) }}

## アクティブラーニング: 上位 5 件の検索

{{jsxref("Array.prototype.push()","push()")}} や{{jsxref("Array.prototype.pop()","pop()")}} といったメソッドを使用するよい例は、ウェブアプリでデータの中で有効な項目だけを抜き出して維持したいときなどです。例えば、アニメーションのあるシーンで、現在表示中の背景イメージを保持している配列があり、一度に表示するイメージをパフォーマンスなどの理由で 50 に制限したいとします。その際、新しいオブジェクトを配列に追加したと同時に、古いオブジェクトを削除して配列を希望のサイズに維持します。

この例では、よりシンプルな使用方法を示します。ここでは、検索ボックスを備えた模擬の検索サイトを提供します。検索ボックスに語句が入力されると、過去 5 回分の検索語句がリストに表示されるという仕組みです。 時間経過に伴う検索語句の数が 5 つを超えると、新しい語句をリストの一番上に追加するたびに、最後の語句が削除されます。これにより、常に過去 5 回分の検索語句がリストに表示されます。

> [!NOTE]
> 実際の検索アプリでは、以前の検索語をクリックすることができ、そうすれば実際の検索結果が表示されるでしょう。今のところは単純にしておきましょう。

アプリを完成させるには、次のようにする必要があります。

1. `// No.1` コメントの下に、検索ボックスに入力された検索語を配列の先頭に追加するコードを書いてください。検索語は `searchInput.value` と書いて取得します。
2. `// No.2` コメントの下に、配列の最後の項目を削除するコードを書いてください。

```html-nolint hidden
<h2>出力結果</h2>
<div class="output" style="min-height: 150px;">
  <input type="text" /><button>検索</button>

  <ul></ul>
</div>

<h2>コードエディター</h2>

<p class="a11y-label">
  コードエディターから抜けるには Esc キーを押して下さい（タブキーではタブ文字を挿入します）。
</p>

<textarea id="code" class="playable-code" style="height: 370px; width: 95%">
const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.onclick = () => {
  // 検索ボックスが空ではない場合のみ検索語を受け付けるようにする
  if (searchInput.value !== '') {
    // No.1

    // 表示中の一覧を空にして、同じ項目が表示されないようにして、
    // 結果は検索語が入力される度に毎回作り直される
    list.innerHTML = '';

    // 配列をループして、リスト内の全ての検索語を表示する
    for (const itemText of myHistory) {
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // 配列の長さが 5 以上になったら一番古い検索語を削除する
    if (myHistory.length >= MAX_HISTORY) {
      // No.2
    }

    // 次の検索語を受け付けるため、検索ボックスを空にしてフォーカスする
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

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "答えを見る") {
    textarea.value = solutionEntry;
    solution.value = "答えを隠す";
  } else {
    textarea.value = userEntry;
    solution.value = "答えを見る";
  }
  updateCode();
});

const jsSolution = `const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.onclick = () => {
  // 検索ボックスが空ではない場合のみ検索語を受け付けるようにする
  if (searchInput.value !== '') {
    myHistory.unshift(searchInput.value);

    // 表示中の一覧を空にして、同じ項目が表示されないようにして、
    // 結果は検索語が入力される度に毎回作り直される
    list.textContent = "";

    // 配列をループして、リスト内の全ての検索語を表示する
    for (const itemText of myHistory) {
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // 配列の長さが 5 以上になったら一番古い検索語を削除する
    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    // 次の検索語を受け付けるため、検索ボックスを空にしてフォーカスする
    searchInput.value = '';
    searchInput.focus();
  }
}`;
let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// タブキーでテキストエリアから抜けてしまうのを防ぎ、
// 代わりにカーソル位置にタブ文字を挿入する

textarea.onkeydown = (event) => {
  if (event.code === "Tab") {
    event.preventDefault();
    insertAtCaret("\t");
  }
  if (event.code === "Escape") {
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

// ユーザーがテキストエリアのコードを書き換える度に userCode を毎回更新する

textarea.onkeyup = () => {
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

{{ EmbedLiveSample('Active_learning_Top_5_searches', '100%', 700) }}

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 配列](/ja/docs/Learn_web_development/Core/Scripting/Test_your_skills/Arrays)を見てください。

## 結論

この記事を読んで、配列がとても使えるものであることがお分かりいただけたのではないでしょうか。配列は JavaScript の至るところで見かけます。特に配列の各項目に対して同じことをする際にループと一緒に使われます。便利なループの基本については次のモジュールで教えますが、今は自分自身を褒めて、十分に休みましょう！このモジュールのすべての記事をやり終えました！

ただし、次のモジュールの前に、理解度を確認するため、このモジュールの課題をやりましょう。残っているのはそれだけです。

## 関連情報

- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections) — 配列とそのいとこにあたる型付き配列についての高度なガイドです。
- {{jsxref("Array")}} — `Array` オブジェクトのリファレンスページです。詳細なガイドと機能については、このリファレンスページで紹介されています。
- [Aside: Intro to arrays](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn), Scrimba <sup>_MDN カリキュラムパートナー_</sup>
  - : 配列の入門として提供された対話形式のレッスン。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
