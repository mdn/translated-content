---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jsSidebar("Statements")}}

**`switch`** 文は[式](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators)を評価して、一連の `case` 節に対してその式の値を照合し、最初に値が一致した `case` 節の後の[文](/ja/docs/Web/JavaScript/Reference/Statements)を、`break` 文に出会うまで実行します。一致した `case` の後にある文も同様に実行します。`switch` 文の `default` 節には、 `case` が式の値と一致しない場合にジャンプします。

{{EmbedInteractiveExample("pages/js/statement-switch.html", "taller")}}

## 構文

```js-nolint
switch (expression) {
  case value1:
    文
  case value2:
    文
  // …
  case valueN:
    文
  default:
    文
}
```

- `expression`
  - : 結果が各 `case` 節と一致するか調べる式。
- `case valueN` {{optional_inline}}
  - : `expression` との照合に使用される `case` 節です。`expression` が指定された `valueN` （任意の式）と一致した場合、 `case` 節の直後の文から、 `switch` 文の終わりか、最初に遭遇する `break` のいずれかに達するまで実行されます。
- `default` {{optional_inline}}
  - : `default` 節。 `expression` の値がいずれの `case` 節とも一致しない場合、この節が実行されます。 `switch` 文に存在できる `default` 節は 1 つだけです。

## 解説

`switch` 文はまず始めに式を評価します。次に、式が入力式の結果と評価される値が等しい最初の `case` 節を（[厳密等価演算子](/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality)を使用して）探し、その節の後の文をすべて実行します。

節の値は必要なときにしか評価されません。一致する `case` 節がすでに見つかっている場合、以降の `case` 節の値は評価されません。これは、[落下](#break_を置かないとどうなるか)が発生した場合にも同様です。

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// 1 だけが出力されます
```

一致する `case` 節が見つからない場合、プログラムは省略可能な `default` 節を探し、見つかればその節に制御を移し、関連する文を実行します。`default` 節が見つからない場合、プログラムは `switch` の終了に続く文で実行を続けます。慣習では、`default` 節は最後の節ですが、そうである必要はありません。`switch` 文は `default` 節を一つだけ持つことができます。複数の `default` 節がある場合は {{jsxref("SyntaxError")}} が発生します。

### 中断と落下

`switch` 文の本体の中で [`break`](/ja/docs/Web/JavaScript/Reference/Statements/break) 文を使用すると、2 つの `case` 節の間のすべての文が実行されたとき、早期に抜け出すことができます。実行は `switch` に続く最初の文で継続されます。

もし `break` が省略された場合は、次の `case` 節に進みます。たとえ `default` 節であっても、その値が一致するかどうかに関係なく、実行は続行されます。この動作は「落下」 (fall-through) と呼ばれます。

```js
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // foo の値はこの式に一致します。実行はここから始まります。
    console.log(0);
  // break を忘れています。実行は落下します。
  case 1: // 'case 0:' に break 文がないので、同様に実行されます。
    console.log(1);
    break; // break に出会いました。 'case 2:' へは続きません。
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// 0 と 1 が出力される
```

適切なコンテキストにおいて、その他の制御フロー文は `switch` 文から抜け出す効果があります。例えば、`switch`文が関数の中に含まれている場合、[`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文は関数本体の実行を終了し、したがって `switch` 文の実行を終了させます。もし `switch` 文がループに含まれている場合、[`continue`](/ja/docs/Web/JavaScript/Reference/Statements/break) 文は `switch` 文を中断し、ループの次の反復処理にジャンプさせます。

### 字句スコープ

`case` と `default` 句は[ラベル](/ja/docs/Web/JavaScript/Reference/Statements/label)のようなものです。これらは、制御フローがジャンプする可能性のある場所があることを示します。しかし、これらは字句の[スコープ](/ja/docs/Glossary/Scope)そのものを作成するわけではありません（自動的に脱出することもありません。上で示したとおりです）。例えば次のようになります。

```js example-bad
const action = "say_hello";
switch (action) {
  case "say_hello":
    const message = "hello";
    console.log(message);
    break;
  case "say_hi":
    const message = "hi";
    console.log(message);
    break;
  default:
    console.log("Empty action received.");
}
```

この例では、 "Uncaught SyntaxError: Identifier 'message' has already been declared" というエラーが出力されます。なぜなら、最初の `const message = 'hello';` と 2 つ目の `const message = 'hi';` の宣言が、自分自身で別個の case 節の中にあっても、競合してしまうからです。結局のところ、これは両方の `const` 宣言が `switch` 本体で作成された同じブロックスコープ内にあることが原因です。

これを修正するには、 `case` 節の中で `let` や `const` 宣言を使用する必要がある場合には、それをブロックで囲みます。

```js
const action = "say_hello";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}
```

これで、このコードはエラーもなく、本来のように `hello` をコンソールに出力するようになります。

## 例

### switch の使用

次の例では、 `expr` が `Bananas` と評価された場合、プログラムは `case 'Bananas'` で値に一致し、関連付けられた文を実行します。 `break` と遭遇したとき、プログラムは `switch` から抜け出し、 `switch` に続く文を実行します。 `break` が省略された場合は、 `case 'Cherries'` に対する文も実行されます。

```js
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");
```

### case の間に default を置いた場合

もし一致するものが見つからなければ、 `default` 節から実行が始まり、それ以降のすべての文が実行されます。

```js
const foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // この break に当たれば 'default:' に継続されることはない
  default:
    console.log("default");
  // 落下
  case 1:
    console.log("1");
}
```

他のすべての `case` の前に `default` を設定した場合にも機能します。

### 落下の活用

この方法は、 `case` 節の配下に `break` がない場合に、次の `case` も基準を満たすかに関係なく実行されるという事実を活用します。

これは連続した `case` 文でひとつの操作を行う例であり、4 つの異なる値でまったく同じ操作を行います。

```js
const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}
```

次のものは一連の `case` 節と複数の操作の例であり、与えられた整数によって、異なる出力を行います。これは、 `case` 節を置いた順番に走査することを示しており、数値的な順序である必要はありません。 JavaScript では、この `case` 文の中に文字列の定義も混ぜることができます。

```js
const foo = 1;
let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
```

この例の出力は以下のとおりです。

| 値                                                                    | 出力するテキスト                  |
| --------------------------------------------------------------------- | --------------------------------- |
| `foo` が `NaN` であるか、 `1`, `2`, `3`, `4`, `5`, `0` のどれでもない | Please pick a number from 0 to 5! |
| `0`                                                                   | Output: So What Is Your Name?     |
| `1`                                                                   | Output: What Is Your Name?        |
| `2`                                                                   | Output: Your Name?                |
| `3`                                                                   | Output: Name?                     |
| `4`                                                                   | Output: ?                         |
| `5`                                                                   | Output: !                         |

### if...else チェーンによる代替

[`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) という照合を何度もすることになることが多いのではないでしょうか。

```js
if ("fetch" in globalThis) {
  // fetch でリソースを読み取る
} else if ("XMLHttpRequest" in globalThis) {
  // XMLHttpRequest でリソースを読み取る
} else {
  // 何らかのカスタム AJAX ロジックでリソースを読み取る
}
```

このパターンは、一連の `===` 比較を行うものではありませんが、 `switch` 構造に変換することができます。

```js
switch (true) {
  case "fetch" in globalThis:
    // fetch でリソースを読み取る
    break;
  case "XMLHttpRequest" in globalThis:
    // XMLHttpRequest でリソースを読み取る
    break;
  default:
    // 何らかのカスタム AJAX ロジックでリソースを読み取る
    break;
}
```

`if...else` の代わりに `switch (true)` パターンを使用すると、落下動作を使用する場合に特に有益です。

```js
switch (true) {
  case isSquare(shape):
    console.log("This shape is a square.");
  // square は rectangle でもあるため、落下する
  case isRectangle(shape):
    console.log("This shape is a rectangle.");
  case isQuadrilateral(shape):
    console.log("This shape is a quadrilateral.");
    break;
  case isCircle(shape):
    console.log("This shape is a circle.");
    break;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/if...else", "if...else")}}
