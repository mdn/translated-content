---
title: 式文
slug: Web/JavaScript/Reference/Statements/Expression_statement
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

**式文**は、文を記述すべき場所で使用する式です。式は評価され、その結果は捨てられます。したがって、関数の実行や変数の更新など、副次的な効果のある式にのみ意味があります。

## 構文

```js-nolint
expression;
```

- `expression`
  - : 評価する任意の[式](/ja/docs/Web/JavaScript/Reference/Operators)です。他の文と紛らわしい[特定の式](#禁止されている式)は曖昧ですので禁止されています。

## 解説

[文専用の構文](/ja/docs/Web/JavaScript/Reference/Statements)とは別に、ほとんどすべての[式](/ja/docs/Web/JavaScript/Reference/Operators)をそれ自体で文として使用することもできます。式の構文では、終わりにセミコロンが必要ですが、セミコロンがないために構文が不正になる場合は、[自動セミコロン挿入](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入)で挿入されることがあります。

式は発生した後に破棄されるため、式の結果は利用できません。したがって、式が有益なものとなるためには、式に何か副次的な効果がある必要があります。式文は一般的に次のものです。

- 関数呼び出し (`console.log("Hello");`, `[1, 2, 3].forEach((i) => console.log(i));`)
- [タグ付きテンプレートリテラル](/ja/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)
- [代入式](/ja/docs/Web/JavaScript/Reference/Operators#代入演算子)（複合演算子を含む）
- [インクリメント／デクリメント演算子](/ja/docs/Web/JavaScript/Reference/Operators#インクリメントとデクリメント)
- [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete)
- [`import()`](/ja/docs/Web/JavaScript/Reference/Operators/import)
- [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield) および [`yield*`](/ja/docs/Web/JavaScript/Reference/Operators/yield*)

他にも副次的な効果がある場合があるものとして、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)の呼び出しや[型変換](/ja/docs/Web/JavaScript/Guide/Data_structures#型変換)の実行があります。

### 禁止されている式

式を文として使用するためには、他の文の構文とあいまいであってはいけません。したがって、式は以下のいずれかのトークンで始めてはいけません。

- `function`: [`function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)または [`function*` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/function*)となり、[`function` 式](/ja/docs/Web/JavaScript/Reference/Operators/function)または [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)とはならない。
- `async function`: [`async function` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function)または [`async function*` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)となり、[`async function` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function)または [`async function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function*)とはならない。
- `class`: [`class` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/class)となり、[`class` 式](/ja/docs/Web/JavaScript/Reference/Operators/class)にはならない。
- `let[`: [`let` 宣言](/ja/docs/Web/JavaScript/Reference/Statements/let) の[配列の構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)となり、`let` 上の[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)にはならない（`let` は[厳格モード以外](/ja/docs/Web/JavaScript/Reference/Strict_mode#extra_reserved_words)でのみ識別子になる）
- `{`: [ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)となり、[オブジェクトリテラル](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)にはなりません。

従って、以下のものは全て不正です。

```js-nolint example-bad
function foo() {
  console.log("foo");
}(); // SyntaxError: Unexpected token '('

// 何らか理由で、`let` という変数を作った
var let = [1, 2, 3];
let[0] = 4; // SyntaxError: Invalid destructuring assignment target

{
  foo: 1,
  bar: 2, // SyntaxError: Unexpected token ':'
};
```

さらに危険なことに、たまたま有効な構文であったとしても、意図しないコードになってしまうこともあります。

```js-nolint example-bad
// 何らか理由で、`let` という変数を作った
var let = [1, 2, 3];

function setIndex(index, value) {
  if (index >= 0) {
    // 配列 `let` に割り当てるつもりが、余計な変数を作成してしまう！
    let[index] = value;
  }
}

setIndex(0, [1, 2]);
console.log(let); // [1, 2, 3]

// これはオブジェクトリテラルではなくブロック文となり、
// `foo` はラベル、`1` は式文になる
// コンソールで起こることが多い
{ foo: 1 };
```

このような問題を避けるために、括弧を使用することで、一義的に式文となるようにすることができます。

```js example-good
(function foo() {
  console.log("foo");
})();
```

## 例

### 制御フロー文の回避

制御フロー文の使用は、式文を使ってほとんど避けることができます。例えば、`if...else` は[三項演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)や[論理演算子](/ja/docs/Web/JavaScript/Reference/Operators#バイナリー論理演算子)に置き換えることができます。`for` や `for...of` のような反復処理文は、[配列メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#インスタンスメソッド)に置き換えることができます。

```js
// 制御フロー文の使用
function range(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

// 式文の使用
function range2(start, end) {
  start > end && ([start, end] = [end, start]);
  return Array.from({ length: end - start }, (_, i) => start + i);
}
```

> [!WARNING]
> これは、言語の能力の一端を示すに過ぎません。制御フロー文の代用として式文を過剰に使用すると、コードの可読性が大幅に低下する可能性があります。

## 仕様書

{{Specifications}}

## 関連情報

- [文と宣言](/ja/docs/Web/JavaScript/Reference/Statements)
- [式と演算子](/ja/docs/Web/JavaScript/Reference/Operators)
