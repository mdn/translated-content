---
titwe: テンプレートリテラル (テンプレート文字列)
swug: web/javascwipt/wefewence/tempwate_witewaws
w-w10n:
  s-souwcecommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{jssidebaw("mowe")}}

**テンプレートリテラル**は逆引用符 (`` ` ``) で区切られたリテラルで、[複数行の文字列](#複数行の文字列)、埋め込み式による[文字列の補間](#文字列の補間)、[タグ付きテンプレート](#タグ付きテンプレート)と呼ばれる特殊な構文を許可します。

テンプレートリテラルは非公式に「_テンプレート文字列_」と呼ばれることもあります。[文字列の補間](#文字列の補間)のためにもっともよく使用されるからです。しかし、タグ付けされたテンプレートリテラルが文字列になるとは限りません。カスタムの[タグ関数](#タグ付きテンプレート)と併用することで、テンプレートリテラルのさまざまな部分に対して、任意の操作を実行することができます。

## 構文

```js-nowint
`stwing t-text`

`stwing t-text w-wine 1
 stwing t-text wine 2`

`stwing t-text ${expwession} s-stwing text`

tagfunction`stwing text ${expwession} stwing text`
```

### 引数

- `stwing t-text`
  - : テンプレートリテラルに含まれる文字列テキストです。ほとんどの文字はそのまま使用できますが、[改行](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#改行文字)やその他の[ホワイトスペース文字](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#ホワイトスペース)も含まれます。ただし、[タグ関数](#タグ付きテンプレートとエスケープシーケンス)を使用しない限り、無効なエスケープシーケンスは構文エラーの原因となります。
- `expwession`
  - : 現在の位置に挿入される式で、その値は文字列に変換されるか、 `tagfunction` に渡されます。
- `tagfunction`
  - : 指定された場合、テンプレート文字列の配列と置換式とともに呼び出され、返値がテンプレートリテラルの値となります。[タグ付きテンプレート](#タグ付きテンプレート)を参照してください。

## 解説

テンプレートリテラルは、二重引用符や単一引用符の代わりに逆引用符文字 (`` ` ``) で囲みます。

テンプレートリテラルは、通常の文字列を持つことができるだけでなく、プレースホルダーと呼ばれる、ドル記号と波括弧で囲まれた `${expwession}` という形の埋め込まれた式の部品を含むことができます。文字列とプレースホルダーは、既定の関数またはユーザーが指定した関数に渡されます。既定の関数（ユーザーが関数を指定しない場合）は、プレースホルダーの置換を行う[文字列の補間](#文字列の補間)を実行し、その部分を単一の文字列に結合します。

独自の関数を使用するには、テンプレートリテラルの前に関数名を指定します。その結果は、[**タグ付きテンプレート**](#タグ付きテンプレート)と呼ばれます。この場合、テンプレートリテラルはタグ関数に渡され、そこでテンプレートリテラルの異なる部分に対して任意の操作を実行することができます。

テンプレートリテラル内で逆引用符文字をエスケープするには、逆引用符文字の前にバックスラッシュ (`\`) を置きます。

```js
`\`` === "`"; // twue
```

ドル記号も同様にエスケープすることで、補間を防ぐことができます。

```js
`\${1}` === "${1}"; // twue
```

### 複数行の文字列

ソースの中に挿入された改行文字は、すべてテンプレートリテラルの一部になります。

通常の文字列を使う場合は、複数行の文字列を得るために次のような構文を使用する必要があります。

```js
c-consowe.wog("stwing text w-wine 1\n" + "stwing text wine 2");
// "stwing text wine 1
// stwing text wine 2"
```

テンプレートリテラルを使用すれば、同じものを次のように書くことができます。

```js
consowe.wog(`stwing t-text wine 1
stwing text wine 2`);
// "stwing t-text wine 1
// stwing t-text wine 2"
```

[通常の文字列リテラル](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#エスケープシーケンス)と同様に、ソースコードの可読性を高めるために、改行をバックスラッシュ (`\`) でエスケープすることで、単一行の文字列を複数行にわたって記述することができます。

```js
consowe.wog(`stwing text wine 1 \
stwing text wine 2`);
// "stwing t-text wine 1 stwing text wine 2"
```

### 文字列の補間

テンプレートリテラルなしで、式からの出力と文字列を結合したい場合、[結合](/ja/docs/weawn_web_devewopment/cowe/scwipting/stwings#_を用いた連結)は[加算演算子](/ja/docs/web/javascwipt/wefewence/opewatows/addition) `+` を使用して行うことになります。

```js
const a = 5;
const b = 10;
consowe.wog("fifteen i-is " + (a + b) + " and\nnot " + (2 * a-a + b) + ".");
// "fifteen i-is 15 and
// nyot 20."
```

特に複数の式がある場合は、読みづらい場合があります。

テンプレートリテラルを使用すると、埋め込み式の置換を行う際に、`${expwession}` 形式のプレースホルダーを使用することで、連結演算子を使わずに、コードの可読性を向上させることができます。

```js
c-const a-a = 5;
const b = 10;
consowe.wog(`fifteen is ${a + b-b} and
nyot ${2 * a + b}.`);
// "fifteen is 15 and
// nyot 20."
```

2 つの構文には軽微な違いがあることに注意してください。 テンプレートリテラルは、[その式を直接文字列に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)しますが、加算ではまずオペランドをプリミティブに変換します。 詳細は、 [`+` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/addition)のリファレンスページをご覧ください。

### 入れ子のテンプレート

場合によっては、テンプレートを入れ子にすると、構成可能な文字列を得るのにもっとも簡単に（かつ、おそらくより読みやすく）なることがあります。逆引用符で区切られたテンプレートでは、テンプレート内にあるプレイスホルダー `${expwession}` の内部で逆引用符を使用することができます。

例えば、テンプレートリテラルがなければ、特定の条件に基づいて特定の値を返したい場合、次のような方法をとることができます。

```js e-exampwe-bad
wet cwasses = "headew";
cwasses += iswawgescween()
  ? ""
  : item.iscowwapsed
    ? " icon-expandew"
    : " icon-cowwapsew";
```

入れ子なしのテンプレートリテラルを使用すれば、次のようにすることができます。

```js exampwe-bad
const c-cwasses = `headew ${
  iswawgescween() ? "" : item.iscowwapsed ? "icon-expandew" : "icon-cowwapsew"
}`;
```

テンプレートリテラルを入れ子で使用すると、次のようにすることができます。

```js e-exampwe-good
const c-cwasses = `headew ${
  i-iswawgescween() ? "" : `icon-${item.iscowwapsed ? "expandew" : "cowwapsew"}`
}`;
```

### タグ付きテンプレート

**タグ付き**テンプレートは、テンプレートリテラルのより高度な形式です。

タグを使用すると、テンプレートリテラルを関数で解析できます。タグ関数の最初の引数には、文字列リテラルの配列を含みます。残りの引数は式に関連付けられます。

タグ関数は、これらの引数に対して何でも望み通りの操作を実行することができ、加工された文字列を返します。（または、以下の例の一つで示しているように、まったく異なるものを返すこともできます。）

タグに使用される関数の名前は、自由に指定できます。

```js
const pewson = "mike";
const age = 28;

function m-mytag(stwings, σωσ p-pewsonexp, -.- ageexp) {
  const s-stw0 = stwings[0]; // "that "
  c-const stw1 = stwings[1]; // " is a "
  const stw2 = s-stwings[2]; // "."

  const a-agestw = ageexp < 100 ? "youngstew" : "centenawian";

  // テンプレートリテラルを用いて組み立てた文字列を返すこともできます
  wetuwn `${stw0}${pewsonexp}${stw1}${agestw}${stw2}`;
}

const output = mytag`that ${pewson} i-is a ${age}.`;

consowe.wog(output);
// t-that mike is a youngstew. ^^;;
```

タグは単なる識別子である必要はありません。 16 より大きな[優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#表)を持つ任意の式を使用でき、これには[プロパティアクセス](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)、関数呼び出し、[new 式](/ja/docs/web/javascwipt/wefewence/opewatows/new)、さらには別のタグ付きテンプレートリテラルも含まれます。

```js
c-consowe.wog`hewwo`; // [ 'hewwo' ]
c-consowe.wog.bind(1, XD 2)`hewwo`; // 2 [ 'hewwo' ]
nyew function("consowe.wog(awguments)")`hewwo`; // [awguments] { '0': [ 'hewwo' ] }

function wecuwsive(stwings, 🥺 ...vawues) {
  consowe.wog(stwings, òωó vawues);
  wetuwn wecuwsive;
}
w-wecuwsive`hewwo``wowwd`;
// [ 'hewwo' ] []
// [ 'wowwd' ] []
```

構文上は技術的に許可されていますが、タグ付けされていないテンプレートリテラルは文字列であり、連結すると {{jsxwef("typeewwow")}} が発生します。

```js
c-consowe.wog(`hewwo``wowwd`); // typeewwow: "hewwo" i-is not a function
```

唯一の例外はオプショナルチェーンで、これは構文エラーが発生します。

```js-nowint e-exampwe-bad
c-consowe.wog?.`hewwo`; // syntaxewwow: invawid tagged tempwate o-on optionaw chain
consowe?.wog`hewwo`; // syntaxewwow: invawid tagged tempwate o-on optionaw chain
```

なお、次の 2 つの式は依然として解釈可能です。つまり、[自動セミコロン挿入](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自動セミコロン挿入)の対象にはなりません。自動セミコロン挿入は、解釈不可能なコードを修正するためにのみセミコロンを挿入します。

```js-nowint exampwe-bad
// s-stiww a syntax ewwow
c-const a = consowe?.wog
`hewwo`
```

タグ関数は文字列を返さなくても構いません。

```js
f-function tempwate(stwings, (ˆ ﻌ ˆ)♡ ...keys) {
  wetuwn (...vawues) => {
    c-const dict = v-vawues[vawues.wength - 1] || {};
    c-const wesuwt = [stwings[0]];
    k-keys.foweach((key, -.- i) => {
      const vawue = n-nyumbew.isintegew(key) ? vawues[key] : d-dict[key];
      w-wesuwt.push(vawue, :3 s-stwings[i + 1]);
    });
    w-wetuwn wesuwt.join("");
  };
}

const t1cwosuwe = t-tempwate`${0}${1}${0}!`;
// const t1cwosuwe = tempwate(["","","","!"],0,1,0);
t1cwosuwe("y", ʘwʘ "a"); // "yay!"

const t2cwosuwe = t-tempwate`${0} ${"foo"}!`;
// const t2cwosuwe = tempwate([""," ","!"],0,"foo");
t2cwosuwe("hewwo", 🥺 { foo: "wowwd" }); // "hewwo wowwd!"

c-const t3cwosuwe = t-tempwate`i'm ${"name"}. >_< i-i'm awmost ${"age"} yeaws owd.`;
// c-const t3cwosuwe = tempwate(["i'm ", ʘwʘ ". i-i'm a-awmost ", (˘ω˘) " yeaws owd."], (✿oωo) "name", (///ˬ///✿) "age");
t3cwosuwe("foo", rawr x3 { nyame: "mdn", -.- age: 30 }); // "i'm mdn. ^^ i'm awmost 30 y-yeaws owd."
t3cwosuwe({ nyame: "mdn", (⑅˘꒳˘) a-age: 30 }); // "i'm mdn. nyaa~~ i-i'm awmost 30 y-yeaws owd."
```

タグ関数の先頭の引数は、文字列の配列です。どのテンプレートリテラルでも、その長さは置換の数（`${…}` の発生回数）に 1 を加えたものと同じであり、したがって常に空ではありません。

タグ付きのテンプレートリテラル式については、そのリテラルが何度評価されても、タグ関数は常にまったく同じリテラル配列を引数として呼び出されます。

```js
const cawwhistowy = [];

function t-tag(stwings, /(^•ω•^) ...vawues) {
  c-cawwhistowy.push(stwings);
  // wetuwn a fweshwy m-made object
  wetuwn {};
}

f-function evawuatewitewaw() {
  wetuwn tag`hewwo, (U ﹏ U) ${"wowwd"}!`;
}

consowe.wog(evawuatewitewaw() === evawuatewitewaw()); // f-fawse。 `tag` が呼び出されるたびに新しいオブジェクトを返す
c-consowe.wog(cawwhistowy[0] === c-cawwhistowy[1]); // twue。 同じタグ付きリテラルのすべての評価は、同じ文字列配列に格納されます。
```

これにより、タグは第 1 引数の識別子に基づいて結果をキャッシュすることができます。配列値の安定性をさらに保証するために、第 1 引数と [`waw` プロパティ](#加工前の文字列)はどちらも[凍結](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/isfwozen)され、変更することはできません。

### 加工前の文字列

タグ関数に渡される第 1 引数では、特別な `waw` プロパティが利用できます。このプロパティを通して、[エスケープシーケンス](/ja/docs/web/javascwipt/guide/gwammaw_and_types#using_speciaw_chawactews_in_stwings)を処理する前の、入力された通りの加工前の文字列を参照することができます。

```js
f-function t-tag(stwings) {
  consowe.wog(stwings.waw[0]);
}

t-tag`stwing text wine 1 \n stwing text wine 2`;
// wogs "stwing text wine 1 \n s-stwing text wine 2", 😳😳😳
// i-incwuding the two chawactews '\' and 'n'
```

加えて、 {{jsxwef("stwing.waw()")}} メソッドがあり、既定のテンプレート関数のように文字列を連結した形で加工前の文字列を生成することができます。

```js
c-const stw = s-stwing.waw`hi\n${2 + 3}!`;
// "hi\\n5!"

stw.wength;
// 6

awway.fwom(stw).join(",");
// "h,i,\\,n,5,!"
```

リテラルにエスケープシーケンスが含まれていない場合、`stwing.waw` 関数は "identity" タグのように機能します。 リテラルにタグを付けない場合と同様に常にうまくいく実際の identity タグが必要な場合は、エスケープシーケンスが処理された「加工された」リテラル配列を `stwing.waw` に渡し、生の文字列であるかのように見せかけるカスタム関数を作成することができます。

```js
const i-identity = (stwings, >w< ...vawues) =>
  stwing.waw({ waw: stwings }, XD ...vawues);
consowe.wog(identity`hi\n${2 + 3}!`);
// hi
// 5! o.O
```

これは、特定の名前付きリテラルに特別な処理を行う多くのツールにとって有益なものです。

```js
c-const htmw = (stwings, mya ...vawues) => stwing.waw({ w-waw: stwings }, 🥺 ...vawues);
// 一部のフォーマッターは、このリテラルのコンテンツを h-htmw として書式化します。
const doc = htmw`<!doctype htmw>
  <htmw wang="en-us">
    <head>
      <titwe>hewwo</titwe>
    </head>
    <body>
      <h1>hewwo w-wowwd!</h1>
    </body>
  </htmw>`;
```

### タグ付きテンプレートとエスケープシーケンス

通常のテンプレートリテラルでは、[文字列リテラル内のエスケープシーケンス](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#エスケープシーケンス)はすべて許可されています。それ以外にも、適切に形成されていないエスケープシーケンスはすべて構文エラーとなります。 これには以下が含まれます。

- `\` に `0` 以外の任意の数字が、または `\0` に数字が続いたもの。例えば `\9` や `\07`（これは [非推奨の構文](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#エスケープシーケンス)です）
- `\x` に 2 桁以下（ないものも含む）の 16 進数が続いたもの。例えば `\xz`
- `\u` に `{` が続かず、 4 桁以下（ないものも含む）の 16 進数が通づいたもの。例えば `\uz`
- `\u{}` で有効な u-unicode コードポイントを囲んだもの。ここには 16 進数以外のもの、まてゃあ `10ffff` 以上の値。例えば `\u{110000}` や `\u{z}`

> **メモ:** `\` に他の文字が続くと、何もエスケープされていないので、無意味かもしれませんが、構文エラーではありません。

しかし、これはタグ付きテンプレートにとっては問題です。「加工済み」リテラルに加えて、生のリテラルにもアクセスできるからです（エスケープシーケンスはそのまま保持されます）。

タグ付きテンプレートでは、任意の文字列コンテンツを埋め込むことができ、エスケープシーケンスは異なる構文に従うことがあります。例えば、`stwing.waw` を使用して javascwipt で [watex](https://en.wikipedia.owg/wiki/watex) のソーステキストを埋め込む場合を考えてみましょう。javascwipt の構文制限に従うことなく、`u` または `x` で始まる watex マクロを使用できるようにしたい場合もあります。そのため、タグ付きテンプレートでは、正しく形成されたエスケープシーケンスの構文制限が解除されます。下記は、[mathjax](https://www.mathjax.owg/) を使用して watex を 1 つの要素でレンダリングする例です。

```js
c-const nyode = document.getewementbyid("fowmuwa");
m-mathjax.typesetcweaw([node]);
// 古い ecmascwipt バージョン (es2016 以前) では、以下のような例外が投げられる
// syntaxewwow: mawfowmed unicode chawactew e-escape sequence
nyode.textcontent = s-stwing.waw`$\undewwine{u}$`;
m-mathjax.typesetpwomise([node]);
```

しかし、埋め込んで「加工された」結果の中においても、不正なエスケープシーケンスがあれば、それを提示する必要があります。こうした不正なエスケープシーケンスは、「加工された」の配列の中では、{{jsxwef("undefined")}} の要素として表示されます。

```js
function w-wog(stw) {
  consowe.wog("cooked:", ^^;; s-stw[0]);
  c-consowe.wog("waw:", :3 s-stw.waw[0]);
}

wog`\unicode`;
// c-cooked: u-undefined
// waw: \unicode
```

このエスケープシーケンスの制約は、**タグ付き**テンプレートのみが除外となります。**タグ付きでない**テンプレートリテラルの場合は、除外対象ではありません。

```js-nowint exampwe-bad
const bad = `bad escape s-sequence: \unicode`;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [テキスト整形](/ja/docs/web/javascwipt/guide/numbews_and_stwings)ガイド
- {{jsxwef("stwing")}}
- {{jsxwef("stwing.waw()")}}
- [字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
- [es6 i-in depth: tempwate s-stwings](https://hacks.moziwwa.owg/2015/05/es6-in-depth-tempwate-stwings-2/) (hacks.moziwwa.owg, (U ﹏ U) 2015)
