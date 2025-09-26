---
title: Parameter (仮引数)
slug: Glossary/Parameter
l10n:
  sourceCommit: 2c4aa2968a162a8742f7bc25798803eaea292304
---

{{GlossarySidebar}}

仮引数は{{Glossary("function", "関数")}}に渡される名前付きの変数です。仮引数の変数は関数に{{Glossary("argument","実引数")}}をインポートするのに使われます。

仮引数の例です。

```js
function example(parameter) {
  console.log(parameter); // 出力 = foo
}

const argument = "foo";

example(argument);
```

仮引数には 2 種類があります。

- 入力引数
  - : もっとも一般的な種類です。値を関数に渡します。プログラミング言語によっては、入力引数が渡される方法は異なります（値渡し、アドレス渡し、参照渡し、など）。
- 出力/返却引数
  - : 主に関数からの複数の値を返しますが、混乱の元になるため推奨しません。

### 仮引数と実引数

「仮引数 (parameter)」と「実引数 (argument)」の違いに注意してください。

- 関数の仮引数は、関数の定義に掲載されている名前です。
- 関数の{{Glossary("argument","実引数")}}は、関数に渡される実際の値です。
- 仮引数は、実引数が提供した値で初期化されます。

## 関連情報

- [仮引数と実引数の違い](http://ja.wikipedia.org/wiki/引数)（ウィキペディア）
- [関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)
- [関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)
