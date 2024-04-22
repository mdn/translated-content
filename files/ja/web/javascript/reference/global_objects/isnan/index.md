---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
---

{{jsSidebar("Objects")}}

**`isNaN()`** 関数は引数が {{jsxref("NaN")}} (非数) かどうかを判定します。`isNaN` 関数の型強制は[意外なもの](#confusing_special-case_behavior)になる可能性があるため、他の {{jsxref("Number.isNaN()")}} を使用した方が良いかもしれません。

{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}

## 構文

```js
isNaN(value);
```

### 引数

- `value`
  - : テストされる値。

### 返値

渡された値が {{jsxref("NaN")}} である場合は **`true`** を返し, そうでなければ **`false`** を返します。

## 解説

### isNaN 関数の必要性

JavaScript のその他すべての値とは違い、等値性評価演算子（== と ===）を {{jsxref("NaN")}} に対して使用してその値が `NaN` であるかどうかを判定することはできません。 `NaN == NaN` と `NaN === NaN` はどちらも `false` と評価されるからです。そこで、`isNaN` が必要となります。

### NaN 値の生成条件

`NaN` の値は、算術演算の結果が*未定義*または*表現不可能*な値となった時に生成されます。こうした値が常にオーバーフロー状態を表現するとは限りません。`NaN` はプリミティブな数値が利用不可能といった、非数値を数値へと型強制した結果として生成されることもあります。

例えば、ゼロをゼロで除算した場合の結果は `NaN` になりますが、その他の数をゼロで除算した場合は異なります。

### 特殊な場合における厄介な動作

`isNaN` 関数の定義はごく初期のバージョン以降、数値ではない引数における振る舞いが分かりにくいものとなっていました。 `isNaN` 関数の引数が[数値型](http://es5.github.com/#x8.5)ではない場合、その値はまず数へと型強制されます。その結果の値はその後 {{jsxref("NaN")}} かどうかがテストされます。このようにして、数値型に型強制される際に結果が NaN ではない数値となる非数値 (とりわけ型強制されると 0 や 1 の値になる空文字列や論理値プリミティブ) に対しては、予想外なことに "false" が返されます。無論、例えば空文字列は「数ではありません」。この混乱は、 "not a number" (数ではない) というこの用語が IEEE-754 浮動小数点数定義で表現された数においては特別な意味を持っていることに起因しています。この関数は、「この値を数値型に型強制した場合、IEEE-754 における 'Not A Number' という値になりますか？」という質問に答えるものとして解釈すべきです。

ECMAScript 2015 では {{jsxref("Number.isNaN()")}} 関数が存在します。`Number.isNaN(x)` は `x` が `NaN` かどうかをテストする確実な方法です。しかしながら `Number.isNaN` においても、`NaN` の意味は明確な数値的意味を持つ "not a number" のままです。`Number.isNaN` が利用できない場合、`x` が `NaN` かどうかを確実にテストする代わりの方法として `(x != x)` という式があります。この式の結果は信頼性のない `isNaN` が引き起こす誤検出の影響を受けません。

`isNaN` のポリフィルは以下のようになります (このポリフィルは `NaN` が自分自身と常に等しくならないという特徴を利用しています)。

```js
const isNaN = function (value) {
  const n = Number(value);
  return n !== n;
};
```

## 例

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// strings
isNaN("37"); // false: "37" は非数でない数値 37 に変換される
isNaN("37.37"); // false: "37.37" は非数でない数値 37.37 に変換される
isNaN("37,5"); // true
isNaN("123ABC"); // true:  parseInt("123ABC") の結果は 123、しかし Number("123ABC") の結果は NaN
isNaN(""); // false: 空文字列は非数でない 0 に変換される
isNaN(" "); // false: 半角スペースからなる文字列は非数でない 0 に変換される

// dates
isNaN(new Date()); // false
isNaN(new Date().toString()); // true

// isNaN が信頼性に欠ける理由となる誤検出の例
isNaN("blabla"); // true: "blabla" が数値に変換される。
// 数値への変換が失敗し NaN が返される。
```

### 特殊な場合における便利な動作

`isNaN()` のふるまいを考慮した別の使用方法があります。`isNaN(x)` が `false` を返す場合、`NaN` を返すことなく算術式内で `x` を使用できます。`true` を返す場合、`x` を使用すると全ての算術式で `NaN` を返すことになります。これはつまり、JavaScript において `isNaN(x) == true` という式は、`x - 0` という式が `NaN` を返すかどうか、というケースと同等である（JavaScript では `x - 0 == NaN` は常に false を返すため、このことを確認できませんが）ということです。実際、`isNaN(x)`、`isNaN(x - 0)`、`isNaN(Number(x))`、`Number.isNaN(x - 0)`、そして `Number.isNaN(Number(x))` は常に同じ値を返し、JavaScript では `isNaN(x)` がこれらの条件を表す最も短い形式となります。

例えばこの動作を使って、ある関数への引数が算術処理可能か (数値として利用できるか) どうかをテストするのに利用し、そうでない場合は既定値などを与えるようにできます。この方法によりコンテキスト次第で値を暗黙的に変換する汎用性の高い JavaScript 関数を作成できます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
