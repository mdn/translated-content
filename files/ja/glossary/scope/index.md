---
title: Scope (スコープ)
slug: Glossary/Scope
---

実行の現在のコンテキスト。{{glossary("value","値")}} と**式**が「見える」、または参照できる文脈。**{{glossary("variable","変数")}}**や他の式が "現在のスコープ内にない" 場合、使用できません。スコープを階層構造で階層化して、子スコープから親スコープにアクセスできるようにすることもできますが、その逆はできません。

**{{glossary("function", "関数")}}**は {{glossary("JavaScript")}} の**クロージャ**として機能し、すなわちスコープを作成して、 (例えば) 関数内で排他的に定義された変数に、関数の外側からや他の関数の中からアクセスできないようになります。たとえば、以下は無効です。

```js
function exampleFunction() {
  var x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
```

ただし、次のコードでは変数が関数外で宣言されており、グローバルになるため、有効になります。

```js
var x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```

## 詳細情報

### 一般知識

- Wikipedia の [スコープ](https://ja.wikipedia.org/wiki/スコープ)
