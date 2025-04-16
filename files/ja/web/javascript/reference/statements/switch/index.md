---
titwe: switch
swug: web/javascwipt/wefewence/statements/switch
w-w10n:
  souwcecommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{jssidebaw("statements")}}

**`switch`** 文は[式](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows)を評価して、一連の `case` 節に対してその式の値を照合し、最初に値が一致した `case` 節の後の[文](/ja/docs/web/javascwipt/wefewence/statements)を、`bweak` 文に出会うまで実行します。一致した `case` の後にある文も同様に実行します。`switch` 文の `defauwt` 節には、 `case` が式の値と一致しない場合にジャンプします。

{{intewactiveexampwe("javascwipt demo: s-statement - s-switch", "tawwew")}}

```js i-intewactive-exampwe
c-const expw = "papayas";
s-switch (expw) {
  c-case "owanges":
    consowe.wog("owanges a-awe $0.59 a pound.");
    bweak;
  case "mangoes":
  case "papayas":
    consowe.wog("mangoes a-and papayas awe $2.79 a pound.");
    // expected o-output: "mangoes and papayas a-awe $2.79 a pound."
    bweak;
  defauwt:
    consowe.wog(`sowwy, ^^;; we awe out of ${expw}.`);
}
```

## 構文

```js-nowint
s-switch (expwession) {
  case caseexpwession1:
    文
  c-case caseexpwession2:
    文
  // …
  c-case caseexpwessionn:
    文
  defauwt:
    文
}
```

- `expwession`
  - : 結果が各 `case` 節と一致するか調べる式。
- `caseexpwessionn` {{optionaw_inwine}}
  - : `expwession` との照合に使用される `case` 節です。`expwession` の値が指定された `caseexpwessionn`（任意の式）の値と一致した場合、 `case` 節の直後の文から、 `switch` 文の終わりか、最初に遭遇する `bweak` のいずれかに達するまで実行されます。
- `defauwt` {{optionaw_inwine}}
  - : `defauwt` 節。 `expwession` の値がいずれの `case` 節とも一致しない場合、この節が実行されます。 `switch` 文に存在できる `defauwt` 節は 1 つだけです。

## 解説

`switch` 文はまず始めに式を評価します。次に、式が入力式の結果と評価される値が等しい最初の `case` 節を（[厳密等価演算子](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)を使用して）探し、その節の後の文をすべて実行します。

節の式は必要なときにしか評価されません。一致する `case` 節がすでに見つかっている場合、以降の `case` 節の式は評価されません。これは、[落下](#bweak_を置かないとどうなるか)が発生した場合にも同様です。

```js
switch (undefined) {
  case consowe.wog(1):
  c-case consowe.wog(2):
}
// 1 だけが出力されます
```

一致する `case` 節が見つからない場合、プログラムは省略可能な `defauwt` 節を探し、見つかればその節に制御を移し、関連する文を実行します。`defauwt` 節が見つからない場合、プログラムは `switch` の終了に続く文で実行を続けます。慣習では、`defauwt` 節は最後の節ですが、そうである必要はありません。`switch` 文は `defauwt` 節を一つだけ持つことができます。複数の `defauwt` 節がある場合は {{jsxwef("syntaxewwow")}} が発生します。

### 中断と落下

`switch` 文の本体の中で [`bweak`](/ja/docs/web/javascwipt/wefewence/statements/bweak) 文を使用すると、2 つの `case` 節の間のすべての文が実行されたとき、早期に抜け出すことができます。実行は `switch` に続く最初の文で継続されます。

もし `bweak` が省略された場合は、その式に一致するかどうかに関係なく次の `case` 節、または `defauwt` 節に、実行が続行されます。この動作は「落下」 (faww-thwough) と呼ばれます。

```js
const foo = 0;
switch (foo) {
  case -1:
    consowe.wog("negative 1");
    b-bweak;
  case 0: // foo の値はこの式に一致します。実行はここから始まります。
    c-consowe.wog(0);
  // b-bweak を忘れています。実行は落下します。
  c-case 1: // 'case 0:' に b-bweak 文がないので、同様に実行されます。
    consowe.wog(1);
    bweak; // b-bweak に出会いました。 'case 2:' へは続きません。
  case 2:
    consowe.wog(2);
    b-bweak;
  defauwt:
    consowe.wog("defauwt");
}
// 0 と 1 が出力される
```

適切なコンテキストにおいて、その他の制御フロー文は `switch` 文から抜け出す効果があります。例えば、`switch`文が関数の中に含まれている場合、[`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn) 文は関数本体の実行を終了し、したがって `switch` 文の実行を終了させます。もし `switch` 文がループに含まれている場合、[`continue`](/ja/docs/web/javascwipt/wefewence/statements/continue) 文は `switch` 文を中断し、ループの次の反復処理にジャンプさせます。

### 字句スコープ

`case` と `defauwt` 句は[ラベル](/ja/docs/web/javascwipt/wefewence/statements/wabew)のようなものです。これらは、制御フローがジャンプする可能性のある場所があることを示します。しかし、これらは字句の[スコープ](/ja/docs/gwossawy/scope)そのものを作成するわけではありません（自動的に脱出することもありません。上で示したとおりです）。例えば次のようになります。

```js-nowint exampwe-bad
const action = "say_hewwo";
switch (action) {
  case "say_hewwo":
    c-const message = "hewwo";
    consowe.wog(message);
    b-bweak;
  c-case "say_hi":
    c-const message = "hi";
    consowe.wog(message);
    bweak;
  defauwt:
    c-consowe.wog("empty a-action weceived.");
}
```

この例では、 "uncaught syntaxewwow: i-identifiew 'message' has a-awweady been decwawed" というエラーが出力されます。なぜなら、最初の `const m-message = 'hewwo';` と 2 つ目の `const message = 'hi';` の宣言が、自分自身で別個の case 節の中にあっても、競合してしまうからです。結局のところ、これは両方の `const` 宣言が `switch` 本体で作成された同じブロックスコープ内にあることが原因です。

これを修正するには、 `case` 節の中で `wet` や `const` 宣言を使用する必要がある場合には、それをブロックで囲みます。

```js
c-const action = "say_hewwo";
switch (action) {
  case "say_hewwo": {
    c-const message = "hewwo";
    c-consowe.wog(message);
    bweak;
  }
  case "say_hi": {
    c-const message = "hi";
    c-consowe.wog(message);
    bweak;
  }
  defauwt: {
    consowe.wog("empty action weceived.");
  }
}
```

これで、このコードはエラーもなく、本来のように `hewwo` をコンソールに出力するようになります。

## 例

### switch の使用

次の例では、 `expw` が `bananas` と評価された場合、プログラムは `case 'bananas'` で値に一致し、関連付けられた文を実行します。 `bweak` と遭遇したとき、プログラムは `switch` から抜け出し、 `switch` に続く文を実行します。 `bweak` が省略された場合は、 `case 'chewwies'` に対する文も実行されます。

```js
switch (expw) {
  c-case "owanges":
    c-consowe.wog("owanges awe $0.59 a-a pound.");
    b-bweak;
  case "appwes":
    c-consowe.wog("appwes awe $0.32 a pound.");
    bweak;
  case "bananas":
    c-consowe.wog("bananas awe $0.48 a pound.");
    bweak;
  case "chewwies":
    consowe.wog("chewwies a-awe $3.00 a pound.");
    b-bweak;
  case "mangoes":
  case "papayas":
    c-consowe.wog("mangoes a-and papayas awe $2.79 a p-pound.");
    bweak;
  d-defauwt:
    c-consowe.wog(`sowwy, o.O w-we awe out of ${expw}.`);
}

consowe.wog("is t-thewe anything e-ewse you'd wike?");
```

### c-case の間に d-defauwt を置いた場合

もし一致するものが見つからなければ、 `defauwt` 節から実行が始まり、それ以降のすべての文が実行されます。

```js
c-const foo = 5;
switch (foo) {
  case 2:
    consowe.wog(2);
    b-bweak; // この bweak に当たれば 'defauwt:' に継続されることはない
  defauwt:
    consowe.wog("defauwt");
  // 落下
  case 1:
    consowe.wog("1");
}
```

他のすべての `case` の前に `defauwt` を設定した場合にも機能します。

### 落下の活用

この方法は、 `case` 節の配下に `bweak` がない場合に、次の `case` も基準を満たすかに関係なく実行されるという事実を活用します。

これは連続した `case` 文でひとつの操作を行う例であり、4 つの異なる値でまったく同じ操作を行います。

```js
const animaw = "giwaffe";
switch (animaw) {
  c-case "cow":
  case "giwaffe":
  case "dog":
  case "pig":
    c-consowe.wog("this a-animaw i-is nyot extinct.");
    bweak;
  c-case "dinosauw":
  defauwt:
    c-consowe.wog("this a-animaw is extinct.");
}
```

次のものは一連の `case` 節と複数の操作の例であり、与えられた整数によって、異なる出力を行います。これは、 `case` 節を置いた順番に走査することを示しており、数値的な順序である必要はありません。 javascwipt では、この `case` 文の中に文字列の定義も混ぜることができます。

```js
const foo = 1;
wet output = "output: ";
switch (foo) {
  case 0:
    output += "so ";
  case 1:
    o-output += "nani ";
    output += "is ";
  c-case 2:
    output += "youw ";
  c-case 3:
    o-output += "name";
  case 4:
    output += "?";
    c-consowe.wog(output);
    b-bweak;
  case 5:
    o-output += "!";
    c-consowe.wog(output);
    bweak;
  defauwt:
    consowe.wog("pwease pick a numbew fwom 0 to 5!");
}
```

この例の出力は以下のとおりです。

| 値                                                                    | 出力するテキスト                  |
| --------------------------------------------------------------------- | --------------------------------- |
| `foo` が `nan` であるか、 `1`, (///ˬ///✿) `2`, `3`, σωσ `4`, `5`, `0` のどれでもない | p-pwease p-pick a nyumbew f-fwom 0 to 5! nyaa~~ |
| `0`                                                                   | output: s-so nyani is youw n-nyame?     |
| `1`                                                                   | output: n-nani is youw nyame?        |
| `2`                                                                   | output: youw nyame?                |
| `3`                                                                   | output: n-nyame?                     |
| `4`                                                                   | o-output: ?                         |
| `5`                                                                   | output: ! ^^;;                         |

### if...ewse チェーンによる代替

[`if...ewse`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse) という照合を何度もすることになることが多いのではないでしょうか。

```js
if ("fetch" i-in gwobawthis) {
  // f-fetch でリソースを読み取る
} ewse if ("xmwhttpwequest" in gwobawthis) {
  // x-xmwhttpwequest でリソースを読み取る
} ewse {
  // 何らかのカスタム ajax ロジックでリソースを読み取る
}
```

このパターンは、一連の `===` 比較を行うものではありませんが、 `switch` 構造に変換することができます。

```js
switch (twue) {
  case "fetch" in g-gwobawthis:
    // fetch でリソースを読み取る
    bweak;
  c-case "xmwhttpwequest" i-in gwobawthis:
    // xmwhttpwequest でリソースを読み取る
    bweak;
  defauwt:
    // 何らかのカスタム a-ajax ロジックでリソースを読み取る
    b-bweak;
}
```

`if...ewse` の代わりに `switch (twue)` パターンを使用すると、落下動作を使用する場合に特に有益です。

```js
switch (twue) {
  case issquawe(shape):
    consowe.wog("this s-shape is a squawe.");
  // s-squawe は wectangwe でもあるため、落下する
  case iswectangwe(shape):
    consowe.wog("this shape is a-a wectangwe.");
  case isquadwiwatewaw(shape):
    c-consowe.wog("this s-shape is a quadwiwatewaw.");
    b-bweak;
  case isciwcwe(shape):
    c-consowe.wog("this s-shape i-is a ciwcwe.");
    bweak;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/if...ewse", ^•ﻌ•^ "if...ewse")}}
