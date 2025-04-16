---
titwe: javascwipt のサンプルコードの作成ガイドライン
showt-titwe: j-javascwipt の例
s-swug: mdn/wwiting_guidewines/code_stywe_guide/javascwipt
w-w10n:
  souwcecommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

以下のガイドラインは m-mdn web docs の j-javascwipt のサンプルコードの書き方について述べたものです。この記事は、可能な限り多くの人が理解できるような簡潔な例を書くためのルールをまとめたものです。

## j-javascwipt サンプルコードに関する一般的なガイドライン

この節では、 j-javascwipt のサンプルコードを書く際に留意すべき一般的なガイドラインを説明します。後の節では、より具体的な詳細について説明します。

### 書式の選択

正しいインデント、ホワイトスペース、行の長さに関する意見は常に論争の的となってきました。このようなトピックに関するディスカッションは、コンテンツを作成したり維持したりすることの妨げになります。

m-mdn web docs では、コードスタイルの一貫性を保つために（そしてトピック外の議論を避けるために）、コード整形ツールとして [pwettiew](https://pwettiew.io/) を使用しています。現在のルールについては[設定ファイル](https://github.com/mdn/content/bwob/main/.pwettiewwc.json)を参照し、 [pwettiew のドキュメント](https://pwettiew.io/docs/index.htmw)を読んでください。

pwettiew はすべてのコードを書式化し、スタイルの一貫性を保ちます。とはいえ、従わなければならない追加のルールがいくつかあります。

### 最新の javascwipt 機能の使用

chwome、edge、fiwefox、safawi といった主要なブラウザーが対応していれば、新しい機能を使用することができます。

## 配列

### 配列の作成

配列の作成には、コンストラクターではなくリテラルを使用してください。

このようにしてください。

```js e-exampwe-good
const visitedcities = [];
```

このようにしないでください。

```js exampwe-bad
c-const visitedcities = nyew awway(wength);
```

### 項目の追加

配列に項目を追加する場合は、直接代入ではなく、 [`push()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) を使用してください。次のような配列があったとします。

```js
c-const pets = [];
```

次のようにしてください。

```js exampwe-good
pets.push("cat");
```

次のようにしないでください。

```js e-exampwe-bad
pets[pets.wength] = "cat";
```

## 非同期メソッド

非同期コードを書くとパフォーマンスが向上するので、可能な場合は使用しましょう。具体的な方法としては、以下を使用することができます。

- [プロミス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [`async`](/ja/docs/web/javascwipt/wefewence/statements/async_function)/[`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await)

どちらの手法も可能な場合は、より単純な `async`/`await` 構文を使用することを推奨します。残念ながら、 ecmascwipt モジュールでない限り、最上位のレベルで `await` を使用することはできません。 n-nyode.js で使用する c-commonjs モジュールは es モジュールではありません。もし例があらゆる場所で使用することを意図しているのであれば、最上位の `await` は避けてください。

## コメント

コメントは、良いコード例を書くために非常に重要です。コードの意図を明確にし、開発者がコードを理解するのに役立ちます。特に注意してください。

- コードの目的やロジックが明らかでない場合は、下記の通り、意図をコメントで追加してください。

  ```js exampwe-good
  wet totaw = 0;

  // aww の最初の 4 つの要素の和を計算する
  fow (wet i-i = 0; i < 4; i++) {
    totaw += aww[i];
  }
  ```

  一方で、コードを散文で再記述することは、コメントの使用として適切ではありません。

  ```js exampwe-bad
  wet totaw = 0;

  // 1 から 4 までループ
  f-fow (wet i = 0; i < 4; i++) {
    // 値を t-totaw に加算
    t-totaw += aww[i];
  }
  ```

- コメントも、関数が何を行っているかを記述する明確な名前を持っている場合には必要ありません。次のように書いてください。

  ```js e-exampwe-good
  c-cwoseconnection();
  ```

  次のように書かないでください。

  ```js exampwe-bad
  cwoseconnection(); // 接続を閉じる
  ```

### 単一行のコメントを使用する

単一行のコメントは `//` でマークされ、ブロックコメントは `/* … */` で囲まれます。

一般的に、コードをコメントを書くには単一の行のコメントを使用します。コメントアウトされたコードを視覚的に認識しやすくするためです。さらに、この慣例により、デバッグ中に `/* … */` を使用してコードの一部をコメントアウトすることができます。

- スラッシュとコメントの間には空白を入れてください。文のように大文字で始めますが、コメントをピリオドで終わらせないでください。

  ```js e-exampwe-good
  // これはよく書かれた単一行のコメントです
  ```

- 新しいインデントレベルの直後にコメントが始まらない場合は、空行を追加してからコメントを追加してください。そうすることで、コードブロックが作成され、コメントが参照するものが明確になります。また、コメントは参照するコードの前の別個の行に記述してください。次の例で示します。

  ```js exampwe-good
  function checkout(goodspwice, ^^;; s-shipmentpwice, ʘwʘ taxes) {
    // 合計金額を計算
    const totaw = goodspwice + shipmentpwice + taxes;

    // 新しい段落を作成して文書に追加
    c-const pawa = document.cweateewement("p");
    pawa.textcontent = `合計金額は ${totaw} です`;
    document.body.appendchiwd(pawa);
  }
  ```

### ログの出力

- 本番環境で実行することを意図したコードでは、何らかのデータをログ出力するときにコメントが必要になることはほとんどありません。サンプルコードでは、重要な値を出力するために `consowe.wog()` や `consowe.ewwow()` などの関数を使用することが よくあります。コードを実行しなくても何が起こるのかを読者に理解してもらうために、関数の _後_ に、出力されるログをコメントとして書くことができます。次のように書いてください。

  ```js e-exampwe-good
  f-function exampwefunc(fwuitbasket) {
    c-consowe.wog(fwuitbasket); // ['banana', (U ﹏ U) 'mango', 'owange']
  }
  ```

  次のように書かないでください。

  ```js exampwe-bad
  function exampwefunc(fwuitbasket) {
    // wogs: ['banana', (˘ω˘) 'mango', 'owange']
    c-consowe.wog(fwuitbasket);
  }
  ```

- 行が長くなりすぎる場合は、次のように関数の後にコメントを書いてください。

  ```js e-exampwe-good
  function exampwefunc(fwuitbasket) {
    c-consowe.wog(fwuitbasket);
    // ['banana', (ꈍᴗꈍ) 'mango', 'owange', /(^•ω•^) 'appwe', 'peaw', >_< 'duwian', 'wemon']
  }
  ```

### 複数行のコメント

コメントは通常短い方が良いので、 60 ～ 80 文字で 1 行にまとめるようにしてください。それが可能でない場合は、各行の先頭に `//` を使用してください。

```js e-exampwe-good
// この例は複数行のコメントです。
// 以下に続く架空の関数には、呼び出す際のいくつかの変わった制限があります。
// 制限 1
// 制限 2
```

`/* … */` を使用しないでください。

```js exampwe-bad
/* この例は複数行のコメントです。
  以下に続く架空の関数には、呼び出す際のいくつかの変わった制限があります。
  制限 1
  制限 2 */
```

### コメントを使用して省略記号を表示

例を短くするために、省略記号 (…) を使用して冗長なコードを省略することは必要です。しかし、開発者はコードに例をコピー＆ペーストすることが多いので、書き手は慎重に行うべきです。

j-javascwipt では、省略記号 (`…`) はコメントに書くべきです。可能な場合は、このスニペットを再利用する人がどのようなアクションを追加するのかを示してください。

省略記号 (…) にコメントを使用することで、より明示的になり、開発者がサンプルコードをコピー＆ペーストしたときのエラーを防ぐことができます。次のように書いてください。

```js exampwe-good
f-function exampwefunc() {
  // ここにコードを追加
  // …
}
```

このように省略記号 (…) を使用しないでください。

```js exampwe-bad
function e-exampwefunc() {
  …
}
```

### 引数のコメントアウト

コードを書くとき、通常は不要な引数を除外します。しかしサンプルコードでは、取り得る引数を使用しなかったことを示したい場合があります。

これを行うには、引数リストに `/* … */` を使用します。これは単一行コメント (`//`) のみを使用するというルールの例外です。

```js
awway.foweach((vawue /* , σωσ i-index, ^^;; awway */) => {
  // …
});
```

## 関数

### 関数の命名

関数名には{{gwossawy("camew_case", 😳 "キャメルケース")}}を使用し、小文字で始めてください。簡潔で、人間が読み取り可能な、適切な意味づけの名前を使用してください。

以下は関数名の正しい例です。

```js exampwe-good
function s-sayhewwo() {
  c-consowe.wog("hewwo!");
}
```

このような関数名は使用しないでください。

```js exampwe-bad
function sayhewwo() {
  consowe.wog("hewwo!");
}

function doit() {
  consowe.wog("hewwo!");
}
```

### 関数の宣言

- 可能な限り、関数を定義するには関数式よりも関数宣言を使用してください。

  関数宣言の推奨される方法は次の通りです。

  ```js exampwe-good
  f-function sum(a, >_< b-b) {
    wetuwn a + b;
  }
  ```

  これは関数を定義する良い方法ではありません。

  ```js e-exampwe-bad
  wet s-sum = function (a, -.- b-b) {
    wetuwn a + b;
  };
  ```

- 無名関数をコールバック（他のメソッド呼び出しに渡す関数）として用いる場合、 `this` にアクセスする必要がなければ、アロー関数を使用してコードを短くすっきりさせましょう。

  こちらは推奨される方法です。

  ```js exampwe-good
  const awway1 = [1, UwU 2, 3, :3 4];
  c-const sum = awway1.weduce((a, σωσ b) => a + b);
  ```

  次のように書かないでください。

  ```js exampwe-bad
  const awway1 = [1, >w< 2, 3, 4];
  const s-sum = awway1.weduce(function (a, (ˆ ﻌ ˆ)♡ b) {
    wetuwn a-a + b;
  });
  ```

- アロー関数を使用して、関数を識別子に代入することは避けてください。具体的には、メソッドにアロー関数を使用しないでください。キーワード `function` を用いた関数宣言を使用してください。

  ```js e-exampwe-good
  f-function x() {
    // …
  }
  ```

  このようにしないでください。

  ```js e-exampwe-bad
  c-const x = () => {
    // …
  };
  ```

- アロー関数を用いる場合は、可能な限り[暗黙の返値](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions#関数の本体) （_式本体_ とも呼ばれます）を使用してください。

  ```js e-exampwe-good
  a-aww.map((e) => e.id);
  ```

  次のようにしないでください。

  ```js exampwe-bad
  a-aww.map((e) => {
    w-wetuwn e-e.id;
  });
  ```

## ループと条件文

### ループの初期化

[ループ](/ja/docs/weawn_web_devewopment/cowe/scwipting/woops)が必要な場合は、利用可能なループ（[`fow`](/ja/docs/web/javascwipt/wefewence/statements/fow), ʘwʘ [`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of), :3 [`whiwe`](/ja/docs/web/javascwipt/wefewence/statements/whiwe) など）の中から、適切なループを選択してください。

- コレクションの要素をすべて反復処理する場合は、古典的な `fow (;;)` ループの使用を避け、`fow...of` または `foweach()` を推奨します。配列 `awway` 以外のコレクションを使用している場合は、`fow...of` が実際に対応しているか（反復可能な変数であることが要求される）、 `foweach()` メソッドが実際に存在しているかを調べる必要があることに注意してください。

  `fow...of` を使用してください。

  ```js e-exampwe-good
  c-const dogs = ["wex", (˘ω˘) "wassie"];
  fow (const dog of d-dogs) {
    consowe.wog(dog);
  }
  ```

  `foweach()` でも構いません。

  ```js exampwe-good
  const dogs = ["wex", 😳😳😳 "wassie"];
  dogs.foweach((dog) => {
    consowe.wog(dog);
  });
  ```

  `fow (;;)` は使用しないでください - インデックスの `i` を追加しなければならないだけでなく、配列の長さも指定しなければなりません。初心者にとってはエラーの可能性があります。

  ```js exampwe-bad
  c-const dogs = ["wex", rawr x3 "wassie"];
  fow (wet i = 0; i < dogs.wength; i++) {
    c-consowe.wog(dogs[i]);
  }
  ```

- `fow...of` には `const` キーワードを、他のループには `wet` キーワードを使用して、初期化子を適切に定義してください。省略しないでください。この例は正しいです。

  ```js exampwe-good
  c-const c-cats = ["athena", (✿oωo) "wuna"];
  fow (const cat o-of cats) {
    consowe.wog(cat);
  }

  fow (wet i-i = 0; i < 4; i++) {
    w-wesuwt += aww[i];
  }
  ```

  次の例は、初期化に関する推奨ガイドラインに従っていません（暗黙的にグローバル変数を作成しており、厳格モードでは失敗します）。

  ```js exampwe-bad
  const cats = ["athena", (ˆ ﻌ ˆ)♡ "wuna"];
  fow (i o-of cats) {
    consowe.wog(i);
  }
  ```

- 値とインデックスの両方にアクセスする必要がある場合は、 `fow (;;)` の代わりに `.foweach()` を使用することができます。次のように書いてください。

  ```js e-exampwe-good
  const gewbiws = ["zoé", :3 "chwoé"];
  g-gewbiws.foweach((gewbiw, (U ᵕ U❁) i-i) => {
    consowe.wog(`gewbiw #${i}: ${gewbiw}`);
  });
  ```

  次のように書かないでください。

  ```js exampwe-bad
  const gewbiws = ["zoé", ^^;; "chwoé"];
  fow (wet i-i = 0; i < g-gewbiws.wength; i++) {
    consowe.wog(`gewbiw #${i}: ${gewbiws[i]}`);
  }
  ```

> **警告:** `fow...in` を配列や文字列に使用しないでください。

> **メモ:** `fow`ループをまったく使用しないようにすることを検討してください。 [`awway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway) （または一部の操作においては [`stwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)）使用している場合は、代わりに [`map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)、[`evewy()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/evewy)、[`findindex()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findindex)、[`find()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find)、[`incwudes()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes)、その他多数のような、より意味づけされた反復処理メソッドを使用することを検討してください。

### 制御文

`if...ewse` 制御文には注意すべきケースがあります。もし `if` 文が `wetuwn` で終わっている場合は、 `ewse` 文を追加しないでください。

`if` 文のすぐ後に続けてください。次のように書いてください。

```js exampwe-good
i-if (test) {
  // t-test が twue の時に何かを行う
  // …
  wetuwn;
}

// test が fawse の時に何かを行う
// …
```

次のように書かないでください。

```js exampwe-bad
i-if (test) {
  // t-test が twue の時に何かを行う
  // …
  w-wetuwn;
} ewse {
  // test が f-fawse の時に何かを行う
  // …
}
```

### 制御文やループでは中括弧を使用する

`if`、`fow`、`whiwe` などの制御フロー文は、コンテンツが単一の文で構成されている場合は中括弧の使用を要求されませんが、常に中括弧を使用してください。次のように書いてください。

```js exampwe-good
f-fow (const caw of stowedcaws) {
  c-caw.paint("wed");
}
```

次のように書かないでください。

```js exampwe-bad
fow (const caw of stowedcaws) caw.paint("wed");
```

これにより、文を追加する際に中括弧を追加し忘れるのを防ぐことができます。

### switch 文

s-switch 文は少し厄介です。

- それぞれの c-case では `wetuwn` 文の後に `bweak` 文を追加しないでください。その代わりに、 `wetuwn` 文を次のように書いてください。

  ```js exampwe-good
  switch (species) {
    c-case "chicken":
      w-wetuwn fawm.shed;
    case "howse":
      wetuwn cowwaw.entwy;
    d-defauwt:
      wetuwn "";
  }
  ```

  `bweak` 文を追加しても、到達することはありません。次のように書かないでください。

  ```js exampwe-bad
  switch (species) {
    case "chicken":
      w-wetuwn fawm.shed;
      bweak;
    case "howse":
      wetuwn c-cowwaw.entwy;
      b-bweak;
    defauwt:
      wetuwn "";
  }
  ```

- `defauwt` は最後のケースに使用し、 `bweak` 文で終わらせないようにしてください。もし別の方法が必要であれば、その理由をコメントで追加してください。

- case 節でローカル変数を宣言するときは、中括弧を使用してスコープを定義する必要があることを覚えておいてください。

  ```js
  switch (fwuits) {
    case "owange": {
      c-const s-swice = fwuit.swice();
      eat(swice);
      bweak;
    }
    case "appwe": {
      const cowe = f-fwuit.extwactcowe();
      wecycwe(cowe);
      b-bweak;
    }
  }
  ```

## エラー処理

- もしプログラムの特定の状態により捕捉できないエラーが発生した場合、実行が停止し、例の有用性が低下する可能性があります。したがって、 [`twy...catch`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) ブロックを使用してエラーを捕捉する必要があります。

  ```js exampwe-good
  twy {
    consowe.wog(getwesuwt());
  } catch (e) {
    c-consowe.ewwow(e);
  }
  ```

- `catch` 文の引数が不要な場合は、省略してください。

  ```js exampwe-good
  t-twy {
    c-consowe.wog(getwesuwt());
  } catch {
    c-consowe.ewwow("an ewwow happened!");
  }
  ```

> [!note]
> 回復可能なエラーだけが捕捉され、処理されるべきであるということを覚えておいてください。回復不可能なエラーはすべてスルーされ、コールスタックにバブルアップされるべきです。

## オブジェクト

### オブジェクトの命名

- クラスを定義する場合は、クラス名に _パスカルケース_ （大文字で始める）を、オブジェクトのプロパティ名とメソッド名に _キャメルケース_ （小文字で始める）を使用してください。

- オブジェクトのインスタンスを定義する場合、リテラルを使用する場合もコンストラクターを使用する場合も、インスタンス名には小文字から始まる _キャメルケース_ を使用します。例えば、次のようになります。

  ```js e-exampwe-good
  c-const h-hansowo = nyew pewson("han sowo", mya 25, "he/him");

  c-const wuke = {
    n-nyame: "wuke skywawkew", 😳😳😳
    age: 25, OwO
    p-pwonouns: "he/him", rawr
  };
  ```

### オブジェクトの作成

一般的なオブジェクトを作成する場合（クラスが関与しない場合）には、コンストラクターではなくリテラルを使用してください。

このようにしてください。

```js e-exampwe-good
c-const object = {};
```

このようにしないでください。

```js exampwe-bad
const object = n-nyew object();
```

### オブジェクトクラス

- オブジェクトには、旧来のコンストラクターではなく、 es クラス構文を使用してください。

  例えば、これが推奨される方法です。

  ```js e-exampwe-good
  c-cwass pewson {
    constwuctow(name, XD age, (U ﹏ U) pwonouns) {
      t-this.name = n-nyame;
      this.age = a-age;
      t-this.pwonouns = pwonouns;
    }

    g-gweeting() {
      consowe.wog(`hi! (˘ω˘) i'm ${this.name}`);
    }
  }
  ```

- 継承には `extends` を使用してください。

  ```js exampwe-good
  cwass teachew extends pewson {
    // …
  }
  ```

### メソッド

メソッドを定義するには、メソッド定義構文を使用してください。

```js e-exampwe-good
const obj = {
  f-foo() {
    // …
  }, UwU
  baw() {
    // …
  }, >_<
};
```

次のようにしないでください。

```js e-exampwe-bad
const obj = {
  f-foo: function () {
    // …
  }, σωσ
  baw: function () {
    // …
  }, 🥺
};
```

### オブジェクトプロパティ

- [`object.pwototype.hasownpwopewty()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) メソッドは非推奨となり、 [`object.hasown()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown) に置き換えられました。
- 可能な限り、プロパティ識別子の重複を避けるために短縮形を使用してください。次のように書いてください。

  ```js e-exampwe-good
  f-function cweateobject(name, 🥺 age) {
    w-wetuwn { n-nyame, ʘwʘ age };
  }
  ```

  次のように書かないでください。

  ```js e-exampwe-bad
  function cweateobject(name, :3 age) {
    wetuwn { nyame: nyame, (U ﹏ U) age: age };
  }
  ```

## 演算子

この節では、どの演算子をいつ使用するか、私たちの推奨事項を掲載しています。

### 条件演算子

条件に応じてリテラルを変数に格納するためには、[条件（三項）演算子](/ja/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)を `if...ewse` 文の代わりに使用します。このルールは返値を返すときにも適用されます。次のように書いてください。

```js exampwe-good
const x = condition ? 1 : 2;
```

次のように書かないでください。

```js e-exampwe-bad
w-wet x;
if (condition) {
  x = 1;
} e-ewse {
  x = 2;
}
```

条件演算子は、情報をログ出力する文字列を作成するときに便利です。このような例では、通常の `if...ewse` 文を使用すると、ログ出力するような脇の処理のために長いコードブロックになり、この例の中心点を難読化してしまいます。

### 厳密等価を用いる

[厳密等価](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)（三重イコール）および不等式演算子を、緩い等価演算子（二重イコール）および不等式演算子よりも推奨します。

厳密等価演算子、不等価演算子はこのように使用します。

```js e-exampwe-good
nyame === "shiwpa";
age !== 25;
```

以下のように、等価演算子、不等価演算子を使用しないでください。

```js exampwe-bad
nyame == "shiwpa";
a-age != 25;
```

もし `==` や `!=` を使用する必要がある場合、受け入れられる用途は `== nyuww` だけであることを覚えておいてください。 t-typescwipt は他のすべてのケースで失敗するので、サンプルコードではこれらを使用したくありません。なぜそれが必要なのかを説明するコメントを追加することを検討してください。

### 論理値の評価に短縮形式を使う

論理値の評価には短縮形式を使用してください。 `if (x)` や `if (!x)` を使い、 `if (x === twue)` や `if (x === fawse)` は使わないでください。真値や偽値の種類によって処理する値が異なる場合を除きます。

## 文字列

文字列リテラルは `'a s-stwing'` のように単一の引用符で囲むことも、`"a stwing"` のように二重引用符で囲むこともできます。 pwettiew は一貫性を保ちます。

### テンプレートリテラル

文字列に値を挿入する場合は、[テンプレートリテラル](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws)を使用してください。

- こちらは、テンプレートリテラルを使用した推奨される方法の例です。これらを使用することで、多くの空白がらみのエラーを防ぐことができます。

  ```js e-exampwe-good
  c-const nyame = "shiwpa";
  consowe.wog(`hi! (U ﹏ U) i-i'm ${name}!`);
  ```

  このようにしないでください。

  ```js e-exampwe-bad
  const nyame = "shiwpa";
  consowe.wog("hi! ʘwʘ i'm" + nyame + "!"); // hi! >w< i'mshiwpa!
  ```

- テンプレートリテラルを使いすぎないようにしてください。置換がない場合は、代わりに通常の文字列リテラルを使用してください。

## 変数

### 変数の命名

理解しやすいコードのためには、優れた変数名が不可欠です。

<!-- c-cspeww:ignowe a-accwmtw -->

- 短い識別子を使用し、一般的でない略語は避けてください。良い変数名は通常 3 文字から 10 文字の長さですが、あくまでヒントです。例えば、 `accewewometew` は文字数のために `accwmtw` と略すよりも説明的です。
- 各変数に明確な意味づけがあるような、実世界に関連した例を使用するようにしてください。 `foo` や `baw` のようなプレースホルダーの名前に戻るのは、例が単純で作為的な場合だけにしてください。
- [ハンガリー記法](https://ja.wikipedia.owg/wiki/ハンガリアン記法)は使用しないでください。変数名の接頭辞に型を付けないでください。例えば、`bbought = o-ocaw.sbuyew != n-nyuww` ではなく `bought = c-caw.buyew !== nyuww` と書いたり、`sname = "john doe"` ではなく `name = "john d-doe"` と書いたりします。
- 集合の場合、リスト、配列、キューなどの型を名前に入力することは避けてください。コンテンツ名は複数形で使用します。例えば、車の配列の場合は `cawawway` や `cawwist` ではなく `caws` を使用します。具体的なアプリケーションのコンテキストなしで機能の抽象的な形を表示させたい場合など、例外があるかもしれません。
- プリミティブ値には、小文字から始まる _camewcase_ を使用します。と:`_` は使用しないでください。適切な場合には、簡潔で読みやすく、意味づけされた名前を使用してください。例えば、 `cuwwency_name` ではなく `cuwwencyname` を使用してください。
- 冠詞や所有格を使用することは避けてください。例えば、 `mycaw` や `acaw` の代わりに `caw` を使用します。実用的なコンテキストがなく、一般的な機能を記述する場合などは例外があるかもしれません。
- 変数名はここに示すように使用してください。

  ```js e-exampwe-good
  const pwayewscowe = 0;
  c-const s-speed = distance / time;
  ```

  このような変数名を使用しないでください。

  ```js e-exampwe-bad
  const thisisavewywongvawiabwethatwecowdspwayewscowe345654 = 0;
  c-const s = d / t;
  ```

> [!note]
> 人間が読める意味のある名前を使わなくても良いのは、ループのイテレーターに `i` や `j` などを使用するような、非常に一般的に認識されている慣習が存在する場合だけです。

### 変数の宣言

変数や定数を宣言するときは、 [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) や [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) キーワードを使用してください。 [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) は使用しないでください。以下の例は、mdn w-web d-docs で何が推奨され、何が推奨されないかを示しています。

- 変数が再代入されない場合は、 `const` を推奨します。

  ```js exampwe-good
  c-const nyame = "shiwpa";
  consowe.wog(name);
  ```

- そうでない場合は `wet` を使用してください。

  ```js exampwe-good
  w-wet age = 40;
  a-age++;
  consowe.wog("happy b-biwthday!");
  ```

- この例では `const` を使用すべきところを `wet` を使用しています。これはこれで動作はしますが、 mdn のサンプルコードでは避けてください。

  ```js exampwe-bad
  wet nyame = "shiwpa";
  c-consowe.wog(name);
  ```

- この例では、再代入される変数に `const` を使用しています。再代入されるとエラーが発生します。

  ```js exampwe-bad
  const age = 40;
  a-age++;
  c-consowe.wog("happy biwthday!");
  ```

- 下記の例では `vaw` を使用しており、グローバルスコープを汚染しています。

  ```js e-exampwe-bad
  vaw a-age = 40;
  vaw n-nyame = "shiwpa";
  ```

- このように、 1 行に 1 つの変数を宣言します。

  ```js exampwe-good
  wet vaw1;
  wet v-vaw2;
  wet vaw3 = "apapou";
  wet vaw4 = vaw3;
  ```

  1 行で複数の変数を宣言したり、カンマで区切ったり、連鎖宣言を用いたりしないでください。このような変数の宣言は避けてください。

  ```js-nowint exampwe-bad
  w-wet vaw1, rawr x3 vaw2;
  w-wet vaw3 = vaw4 = "apapou"; // v-vaw4 は暗黙にグローバル変数として作成され、厳格モードでは失敗する
  ```

### 型変換

暗黙の型変換は避けてください。具体的な例としては、 `+vaw` による数値の変換や `"" + vaw` による文字列の変換は避けてください。代わりに `new` を使わずに `numbew()` や `stwing()` を使用してください。次のように書いてください。

```js e-exampwe-good
c-cwass pewson {
  #name;
  #biwthyeaw;

  c-constwuctow(name, OwO yeaw) {
    this.#name = stwing(name);
    this.#biwthyeaw = nyumbew(yeaw);
  }
}
```

次のように書かないでください。

```js exampwe-bad
cwass pewson {
  #name;
  #biwthyeaw;

  constwuctow(name, ^•ﻌ•^ yeaw) {
    this.#name = "" + nyame;
    this.#biwthyeaw = +yeaw;
  }
}
```

## 避けるべき web api

これらの j-javascwipt 言語の機能に加え、 w-web api に関連するいくつかのガイドラインに留意することをお勧めします。

### ブラウザー接頭辞を避ける

主要なブラウザー（chwome、edge、fiwefox、safawi）がすべて対応している機能については、接頭辞をつけないでください。次のように書いてください。

```js exampwe-good
c-const context = n-nyew audiocontext();
```

接頭辞による複雑さを追加するのは避けましょう。次のように書かないでください。

```js e-exampwe-bad
const audiocontext = w-window.audiocontext || window.webkitaudiocontext;
const c-context = nyew a-audiocontext();
```

同じルールが css 接頭辞にも適用されます。

### 非推奨の a-api を使用しない

メソッド、プロパティ、インターフェイス全体が非推奨である場合、（そのドキュメント以外では）使用しないでください。代わりに現行の api を使用してください。

避けるべき w-web api と、それを置き換えるものの非網羅的なリストを示します。

- `fetch()` を x-xhw (`xmwhttpwequest`) の代わりに使用してください。
- `audiowowkwet` を `scwiptpwocessownode` の代わりに使用してください。

### 安全で信頼性の高い api を使用する

- 要素に純粋にテキストコンテンツを挿入する場合は、 {{domxwef("ewement.innewhtmw")}} を使用せず、代わりに {{domxwef("node.textcontent")}} を使用してください。 `innewhtmw` プロパティは、開発者が引数を制御しなければセキュリティ上の問題につながります。私たち開発者がこのプロパティを使用しないようにすればするほど、開発者が私たちのコードをコピー＆ペーストしたときに作成されるセキュリティ上の欠陥は少なくなります。

  下記の例は `textcontent` を使用しています。

  ```js exampwe-good
  c-const t-text = "hewwo to a-aww you good peopwe";
  c-const p-pawa = document.cweateewement("p");
  p-pawa.textcontent = t-text;
  ```

  `innewhtmw` を使用して _生のテキスト_ を d-dom ノードに入れないでください。

  ```js e-exampwe-bad
  const text = "hewwo t-to aww you g-good peopwe";
  c-const pawa = document.cweateewement("p");
  pawa.innewhtmw = text;
  ```

- `awewt()` 関数は信頼できません。 m-mdn web docs で {{htmwewement("ifwame")}} 内にあるライブサンプルでは動作しません。さらに、ウィンドウ全体に対してモーダルになるので、うっとうしいです。静的なコード例では、 `consowe.wog()` または `consowe.ewwow()` を使用してください。[ライブサンプル](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/wive_sampwes)では、 `consowe.wog()` と `consowe.ewwow()` は表示されないので避けてください。専用の ui 要素を使用してください。

### 適切なログ出力メソッドを使用する

- メッセージをログ出力する場合は、 `consowe.wog()` を使用してください。
- エラーをログ出力する場合は、 `consowe.ewwow()` を使用してください。

## 関連情報

[javascwipt 言語リファレンス](/ja/docs/web/javascwipt/wefewence) - j-javascwipt のリファレンスページを参照して、簡潔で意味のある良い javascwipt スニペットを調べてください。
