---
title: 関数
slug: Web/JavaScript/Guide/Functions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_Operators")}}

関数は、 JavaScript の基本的な構成要素のひとつです。 JavaScript の関数は、プロシージャに似ています。 — タスクを実行したり値を計算したりする一連の文ですが、プロシージャが関数として認められるためには、何らかの入力を受け取り、入力と出力の間に何らかの明白な関係がある出力を返す必要があります。関数を使用するには、呼び出したいスコープのどこかで関数を定義する必要があります。

より詳しくは [JavaScript の関数に関する完全なリファレンスについての章](/ja/docs/Web/JavaScript/Reference/Functions)をご覧ください。

## 関数の定義

### 関数宣言

**関数定義** (**関数宣言**や**関数定義文** とも呼ばれます) は [`function`](/ja/docs/Web/JavaScript/Reference/Statements/function) キーワードと、それに続く以下の内容で構成されます。

- 関数の名前。
- 関数への引数のリスト。丸括弧でくくり、カンマで区切ります。
- 関数を定義する JavaScript の文。波括弧 `{...}` でくくります。

例えば、次のコードは `square` という名前の簡単な関数を定義します。

```js
function square(number) {
  return number * number;
}
```

関数 `square` は `number` という名前の引数を 1 つとります。この関数は、引数 (すなわち `number`) の 2 乗を返すように指示する 1 つの文で構成されています。[`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文は、関数が返す値を指定します。

```js
return number * number;
```

プリミティブな引数 (数値など) は**値渡し**で関数に渡されます。つまり、値は関数に渡されますが、関数が引数の値を変更しても、**この変更はグローバルな値や関数の呼び出し元の値には影響を与えません**。

オブジェクト (すなわち非プリミティブ値、例えば {{jsxref("Array")}} オブジェクトやユーザー定義オブジェクトなど) を引数として渡すと、関数がオブジェクトのプロパティを変更した場合、その変更が関数外でも有効になります。次の例をご覧ください。

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = { make: "Honda", model: "Accord", year: 1998 };
var x, y;

x = mycar.make; // x は "Honda" という値になる

myFunc(mycar);
y = mycar.make; // y は "Toyota" という値になる
// (プロパティが関数で変更されている)
```

### 関数式

ここまでの関数宣言はすべて構文的な文でしたが、関数は[関数式](/ja/docs/Web/JavaScript/Reference/Operators/function)によって作成することもできます。

このような関数は**無名** (anonymous) にすることができます。名前をつけなくてもよいのです。例えば、関数 `square` は次のように定義することができます。

```js
const square = function (number) {
  return number * number;
};
var x = square(4); // x の値は 16 となる
```

ただし、関数式には名前を指定することもできます。名前を指定することで、関数が自分自身を参照することができ、また、デバッガーのスタックトレースで関数を特定しやすくなります。

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
```

関数式は、ある関数を別の関数の引数として渡すときに便利です。次の例では、第 1 引数に関数を、第 2 引数に配列を受け取るべき `map` 関数を示しています。

```js
function map(f, a) {
  let result = []; // 新しい配列を作成
  let i; // 変数の宣言
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
```

下記のコードでは、この関数は関数式で定義された関数を受け取って、2 つ目の引数で受け取った配列の各要素に対して実行しています。

```js
function map(f, a) {
  let result = []; // 新しい配列を作成
  let i; // 変数の宣言
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);
```

これは `[0, 1, 8, 125, 1000]` を返します。

JavaScript では、条件に基づいて関数を定義することもできます。例えば次の関数の定義は、 `myFunc` という関数を、変数 `num` が `0` に等しい場合のみ定義します。

```js
var myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

これまで説明してきた関数の定義に加えて、{{jsxref("Function")}} コンストラクターを、{{jsxref("Global_Objects/eval", "eval()")}} のような文字列からの関数作成に用いることができます。

**メソッド**は、オブジェクトのプロパティである関数のことです。オブジェクトとメソッドについて詳しくは、「[オブジェクトを利用する](/ja/docs/Web/JavaScript/Guide/Working_with_Objects)」の章をご覧ください。

## 関数の呼び出し

関数を*定義*しても、その関数が*実行*されるわけではありません。関数の定義とは、ただ単に関数に名前をつけ、その関数が呼び出されたときに何をするかを指定することです。

関数の**呼び出し**は、指定した引数を用いて実際に指定された動作を実行します。例えば、 `square` という関数を定義した場合、次のようにして呼び出すことができます。

```js
square(5);
```

この文は `5` という引数とともに関数を呼び出します。関数は自身の文を実行し、 `25` という値を返します。

関数を呼び出すときは*スコープ内*になければいけませんが、次の例のように、関数の宣言を巻き上げる (呼び出しより後に置く) ことができます。

```js
console.log(square(5));
/* ... */
function square(n) {
  return n * n;
}
```

関数のスコープは自身が宣言された関数内、あるいは最上位で宣言されたのであればプログラム全体になります。

> **メモ:** この動作は、上記の構文 (すなわち `function funcName(){}`) を用いて関数を定義したときに限ることに注意してください。次のコードは動作しません。
>
> これは、関数の巻き上げが*関数式*ではなく*関数宣言*でしか機能しないことを意味しています。
>
> ```js example-bad
> console.log(square); // square は初期値が undefined の状態で巻き上げられています。
> console.log(square(5)); // Uncaught TypeError: square is not a function
> const square = function (n) {
>   return n * n;
> };
> ```

関数の引数は、文字列や数値に限られてはいません。オブジェクト全体を関数に渡すこともできます。`show_props` 関数 ([オブジェクトを利用する](/ja/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties)の章で定義) は、オブジェクトを引数にとる関数の例です。

関数はその関数自身を呼び出すこともできます。例えば、ここに階乗を計算する関数を示します。

```js
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}
```

1 から 5 までの階乗の計算は、次のようになります。

```js
var a, b, c, d, e;
a = factorial(1); // a の値は 1 となる
b = factorial(2); // b の値は 2 となる
c = factorial(3); // c の値は 6 となる
d = factorial(4); // d の値は 24 となる
e = factorial(5); // e の値は 120 となる
```

関数を呼び出す方法は他にもあります。関数を動的に呼び出す必要があったり、関数の引数の数が変化したり、関数呼び出しのコンテキストを実行時に決定された特定のオブジェクトに設定する必要があったりする場合がよくあります。

*関数はそれ自体がオブジェクト*です。 — そして、それらのオブジェクトはメソッドを持っています。 ({{jsxref("Function")}} オブジェクトを参照してください。) そのうちのひとつ、 {{jsxref("Function.apply", "apply()")}} メソッドを使って、この目的を達成することができます。

## 関数のスコープ

関数の内部で宣言された変数は、関数の外部からアクセスすることができません。これは、変数が関数のスコープ内でのみ定義されているためです。その一方、関数は自身が定義されたスコープ内で定義されているすべての変数や関数にアクセスできます。

言い換えると、グローバルスコープで定義された関数は、グローバルスコープで定義されたすべての変数にアクセスできます。ある関数の内部で宣言された関数は、自身の親となる関数内で定義されたすべての変数や、その関数がアクセス権を持つ他の変数にもアクセスできます。

```js
// 以下の変数はグローバルスコープで定義
var num1 = 20,
  num2 = 3,
  name = "Chamakh";

// この関数はグローバルスコープで定義
function multiply() {
  return num1 * num2;
}

multiply(); // 60 を返す

// 入れ子になっている関数の例
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // "Chamakh scored 5" を返す
```

## スコープと関数スタック

### 再帰

関数は自身を参照し、呼び出すことができます。関数が自身を参照する方法は 3 種類あります。

1. 関数名
2. [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3. 関数を参照しているスコープ内の変数

例えば、以下のような関数定義を考えてみましょう。

```js
var foo = function bar() {
  // ここには文が来る
};
```

関数本体の中で、以下のものはすべて同様の意味となります。

1. `bar()`
2. `arguments.callee()`
3. `foo()`

自身を呼び出す関数のことを**再帰関数**と言います。いくつかの点で、再帰はループに似ています。どちらも同じコードを何度も実行しますし、 (無限ループを防ぐため、というより無限再帰を防ぐために) 条件が必要です。

例えば、以下のループは・・・

```js
var x = 0;
while (x < 10) {
  // "x < 10" がループ条件
  // 何らかの処理を行う
  x++;
}
```

再帰関数の宣言とその呼び出しとに置き換えることができます。

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" が終了条件  ("!(x < 10)" と同等)
    return;
  }
  // 何らかの処理を行う
  loop(x + 1); // 再帰呼び出し
}
loop(0);
```

一方で、単純な反復ループでは行えないアルゴリズムもあります。例えば、ツリー構造 (例えば [DOM](/ja/docs/Web/API/Document_Object_Model)) のすべてのノードを取得する処理は、再帰を使うとより簡単です。

```js
function walkTree(node) {
  if (node == null) {
    return;
  }
  // ノードに対し処理を行う
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

関数 `loop` と比較すると、再帰呼び出しごとにさらに多数の再帰呼び出しを行います。

どんな再帰アルゴリズムも再帰でないものに書き換えることが可能ですが、ロジックがはるかに複雑になることが多く、そのためにはスタックを使用する必要があります。

実際、再帰自体もスタックを使用しています。関数スタックです。このスタックのような動作は、次の例で見ることができます。

```js
function foo(i) {
  if (i < 0) return;
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
}
foo(3);

// 出力:

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3
```

### 入れ子の関数とクロージャ

関数の中に関数を入れ子に (ネスト) することができます。入れ子になった (内側の) 関数は、それを含んでいる (外側の) 関数の外には非公開となります。

これにより**クロージャ**が作られます。クロージャとは、環境に束縛された (式によって「閉じ込められた」) 変数を自由に持たせることができる式 (通常は一つの関数) のことです。

入れ子になった関数はクロージャなので、これはつまり、入れ子になった関数は内包する関数の引数と変数を「継承」することができるということです。別の言い方をすれば、内側の関数は外側の関数のスコープを持っているということです。

まとめると、次のようになります。

- 内側の関数へは、外側の関数の中にある文からのみアクセスできます。
- 内側の関数はクロージャを形成します。内側の関数は外側の関数の引数と変数を利用できますが、外側の関数は内側の関数の引数と変数を利用できません。

以下の例では入れ子になった関数が示されています。

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // 13 を返す
b = addSquares(3, 4); // 25 を返す
c = addSquares(4, 5); // 41 を返す
```

内側の関数はクロージャとなるので、外側の関数からクロージャを呼び出し、外部と内部両方の関数に対し引数を指定することができます。

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // 渡されたものに 3 を加算する関数を取得する、と
// 考えてください。
result = fn_inside(5); // 8 を返す

result1 = outside(3)(5); // 8 を返す
```

### 変数の保護

`inside` が返されるとき、変数 `x` がどのように保護されるのかに注目してください。クロージャはそれ自身が参照しているすべてのスコープ内の引数と変数を保護することになります。それぞれの呼び出しには異なる引数が渡される可能性があるので、 `outside` を呼び出すたびに新しいクロージャが作られます。返された `inside` がもはやアクセスできなくなった時にのみメモリーが解放されます。

これはその他のオブジェクトの内部で参照を保持する場合と違いはないのですが、クロージャの場合は直接参照を設定せず、また情報を取得できないので、明白さは劣ります。

### 多重入れ子関数

関数は下記のように、多重に入れ子にすることができます。

- 関数 (`A`) の中に関数 (`B`) があり、関数 (`B`) の中に関数 (`C`) があるとします。
- 関数 `B` と `C` はクロージャとなるので、 `B` は `A` にアクセスでき、 `C` は `B` にアクセスできます。
- さらに、 `C` は `A` にアクセス可能な `B` にアクセスできるので、 `C` は `A` にもアクセスできます。

このようにして、クロージャは多重スコープを導入できます。つまり関数のスコープが再帰的に包含されているのです。これを*スコープチェーン*と呼びます。 (なぜ「チェーン」と呼ぶのかは後で説明します。)

次の例を見てみましょう。

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // 6 がログに出力される (1 + 2 + 3)
```

この例では、関数 `C` は関数 `B` の引数 `y` と関数 `A` の引数 `x` にアクセスしています。

なぜこれが可能かというと、

1. 関数 `B` は関数 `A` に含まれたクロージャとなっています (すなわち、 `B` は `A` の引数と変数にアクセスできます)。
2. 関数 `C` は関数 `B` に含まれたクロージャとなっています。
3. クロージャ `B` は `A` の中にあり、 `C` のクロージャも `A` の中にあるので、 `C` は `B` _と_ `A` の*両方*の引数と変数にアクセスできます。言い換えれば、`C` は `B`、`A` の順でスコープがつながっている (_chain_) のです。

その一方で、逆は成り立ちません。 `A` は `C` にアクセスできません。なぜなら `A` は、 `C` を変数の一つとして持っている `B` の引数や変数にはアクセスできないからです。このように `C` は `B` の外に対してのみ非公開となっています。

### 名前の衝突

クロージャ中のスコープに同じ名前の 2 つの引数や変数がある場合、*名前の衝突*が生じます。より内側のスコープが優先されるので、最も内側にあるスコープが最優先に、最も外側のスコープが最も低い優先度となります。これがスコープチェーンです。チェーンの最初は最も内側のスコープ、そして最後は最も外側のスコープとなります。次の例を見てみましょう。

```js
function outside() {
  var x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

outside()(10); // 10 ではなく 20 を返す
```

文 `return x` の箇所で、`inside` の引数 `x` と `outside` の変数 `x` との間に名前の衝突が発生しています。ここでのスコープチェーンは、{ `inside`, `outside`, グローバルオブジェクト } です。したがって `inside` の `x` が `outside` の `x` より優先され、結果 10 (`outside` の `x`) ではなく、20 (`inside` の `x`) が返されます。

## クロージャ

クロージャは、 JavaScript でもっとも強力な機能のひとつです。 JavaScript では関数の入れ子が可能であることに加えて、内側の関数が外側の関数内で定義されたすべての変数や関数に対し (外側の関数がアクセスできる、他の変数や関数すべてにも) 自由にアクセスできます。

しかし、外側の関数は内側の関数内で定義された変数や関数にアクセスできません。これは、内側の関数の変数に対する一種のセキュリティ機構を提供します。

また、内側の関数は外側の関数のスコープにアクセスできることから、もし内側の関数が外側の関数よりも長く生存できた場合、外側の関数内で定義された変数や関数は外側の関数よりも長く残る可能性があります。クロージャは、内側の関数が何かしらの形で外側の関数のスコープ外のどこかで使用可能になった場合に作られます。

```js
var pet = function (name) {
  // 外側の関数は変数 "name" を定義
  var getName = function () {
    return name; // 内側の関数は外側の関数の変数 "name" にアクセス可能
  };
  return getName; // 内側の関数を返すことで、外側の関数に公開する
};
myPet = pet("Vivie");

myPet(); // "Vivie" を返す
```

上記のコードより複雑なコードにすることもできます。外側の関数の内部にある変数を操作するメソッドを含む、オブジェクトを返すことができます。

```js
var createPet = function (name) {
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver
```

上記の例で、外側の関数の変数 `name` は内側の関数からアクセスでき、また内側の関数を通さずに内側の変数へアクセスする他の方法はありません。内側の関数の内部変数は、内側の関数の安全な保存領域として振る舞います。それらは内側の関数と連動するデータを、「永続的」かつ「安全に」保持します。関数は変数を割り当てる必要さえなく、また名前を持つ必要もありません。

```js
var getCode = (function () {
  var apiCode = "0]Eal(eh&2"; // 外側の関数が変更できないようにしたいコード

  return function () {
    return apiCode;
  };
})();

getCode(); // シークレットコードを返す
```

> **メモ:** クロージャを使用する際に注意すべき落とし穴がいくつかあります。
>
> 取り囲まれている関数で外部スコープの変数と同じ名前の変数を定義した場合、外部スコープにある変数を再び参照する方法がなくなります。 (プログラムが内部スコープを終了するまで、内部スコープ変数は外部変数を「上書き」します。)
>
> ```js example-bad
> var createPet = function (name) {
>   // 外側の関数で "name" という変数を定義します。
>   return {
>     setName: function (name) {
>       // 内側の関数も "name" という変数を定義します
>       name = name; // 外側の関数で定義した "name" へどのようにしてアクセスするのか？
>     },
>   };
> };
> ```

## arguments オブジェクトの使用

関数の引数 (argument) は、配列風オブジェクトで管理されます。関数内では、次のようにして渡された引数を指定することができます。

```js
arguments[i];
```

ここで `i` は引数の順序を表す数で、 `0` から始まります。関数に渡された第 1 引数は `arguments[0]` となります。引数の総数は `arguments.length` で表されます。

`arguments` オブジェクトを使用すると、宣言時の引数の数よりも多くの引数を用いて関数を呼び出すことができます。これによって関数に渡す引数の数が前もってわからない場合にしばしば役立ちます。 `arguments.length` を使用することで、実際に関数に渡された引数の数を特定することができます。そして、 `arguments` オブジェクトを使用して各引数にアクセスできます。

例えば、複数の文字列を連結する関数を考えてみましょう。この関数の唯一の正式な引数は，連結する項目を区切る文字を指定する文字列です。この関数は次のように定義されています。

```js
function myConcat(separator) {
  var result = ""; // リストを初期化する
  var i;
  // 引数について繰り返し
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
```

この関数に引数をいくつも渡すことができます。そして、各引数を文字列の「リスト」に連結します。

```js
// "red, orange, blue, " を返す
myConcat(", ", "red", "orange", "blue");

// "elephant; giraffe; lion; cheetah; " を返す
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// "sage. basil. oregano. pepper. parsley. " を返す
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

> **メモ:** 変数 `arguments` は「配列風の変数」であり、配列ではありません。添字が数値であることと `length` プロパティがあることで、配列風となってはいます。しかし、配列操作のメソッドのすべてを持っているわけではありません。

さらなる情報については、JavaScript リファレンスの {{jsxref("Function")}} オブジェクトをご覧ください。

## 関数の引数

ECMAScript 2015 から、新しい形の引数が 2 つあります。それが*デフォルト引数*と*残余引数*です。

### デフォルト引数

JavaScript では、関数の引数は既定で `undefined` となります。しかし、別の既定値が設定されていれば便利だという状況もあるでしょう。デフォルト引数がここで役に立ちます。

#### デフォルト引数がない場合 (ECMAScript 2015 以前)

以前、既定値を設定する一般的な方法は、関数の本体で引数の値をテストし、`undefined` だった場合にある値を割り当てる、というものでした。

以下の例では、 `b` の値が与えられなかった場合、 `a*b` を評価する際にこの値は `undefined` となるため、 `multiply` を呼び出すと `NaN` が返されます。しかしながら、この例の 2 行目でこの問題を回避しています。

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;

  return a * b;
}

multiply(5); // 5
```

#### デフォルト引数がある場合 (ECMAScript 2015 以降)

*デフォルト引数*を使えば、関数本体での引数チェックはもう必要ありません。これからは、関数の最初で単純に `b` に `1` を代入することができます。

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```

詳細については、リファレンスの[デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)をご覧ください。

### 残余引数

[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)の構文によって、不特定多数の引数を配列のように表すことができます。

次の例では、2 つ目から最後までの引数をまとめるのに*残余引数*を使っています。そして最初の引数を使って乗算します。

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## アロー関数

[アロー関数式](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (以前、そして今も誤って**ファットアロー関数**とも呼ばれる) は関数式と比較してより短い構文を持ち、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this)、[arguments](/ja/docs/Web/JavaScript/Reference/Functions/arguments)、[super](/ja/docs/Web/JavaScript/Reference/Operators/super)、[new.target](/ja/docs/Web/JavaScript/Reference/Operators/new.target) の値を持ちません。アロー関数は常に無名関数です。 hacks.mozilla.org によるブログ記事、 "[ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)" も参照してください。

アロー関数の導入には 2 つの要素が絡んでいます。それは*短縮形の関数*と `this` との*結びつけがない*ことです。

### 短縮形の関数

関数パターンによっては、短縮形の関数がうってつけです。比較してみましょう。

```js
var a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

var a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map((s) => s.length);

console.log(a3); // logs [8, 6, 7, 9]
```

### 独自の `this` を持たない

アロー関数の導入以前は、すべての新しい関数には独自の [this](/ja/docs/Web/JavaScript/Reference/Operators/this) 値が定義されていました (コンストラクターの場合は新しいオブジェクトに、 [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) の関数呼び出しの場合は undefined に、関数が「オブジェクトのメソッド」として呼び出された場合はその基底オブジェクトに、といったように) 。これはオブジェクト指向プログラミングにとっては厄介です。

```js
function Person() {
  // この Person() コンストラクターは自身を `this` と定義します。
  this.age = 0;

  setInterval(function growUp() {
    // strict モードでない場合、この growUp() 関数は
    // Person() コンストラクターによる定義とは異なり、
    // グローバルオブジェクトを `this` として定義します。
    this.age++;
  }, 1000);
}

var p = new Person();
```

ECMAScript 3/5 では、`this` の値をアクセス可能な別の値に割り当てることでこの問題を解決します。

```js
function Person() {
  var self = this; // `self` の代わりに `that` を選ぶ人もいます。
  // どちらか一方を選び、そちらだけを使うようにしましょう。
  self.age = 0;

  setInterval(function growUp() {
    // このコールバックは、その値が期待通りのオブジェクトを指す
    // 変数 `self` を参照しています。
    self.age++;
  }, 1000);
}
```

代わりに、[束縛関数](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)を使って変数を束縛すれば `growUp()` 関数に適切な `this` を渡すことができます。

アロー関数は自身の `this` を持ちません、つまり関数を取り囲む実行コンテキストの `this` の値が使われます。このため、下記のコードでは、`setInterval` に渡される関数内の `this` は、それを取り囲む関数の `this` と同じ値を持ちます。

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` は的確に person オブジェクトを参照する
  }, 1000);
}

var p = new Person();
```

## 定義済み関数

JavaScript には、定義済みの最上位関数がいくつかあります。

- {{jsxref("Global_Objects/eval", "eval()")}}
  - : **`eval()`** メソッドは文字列として書き表された JavaScript のコードを評価します。
- {{jsxref("Global_Objects/uneval", "uneval()")}}
  - : **`uneval()`** メソッドは{{jsxref("Object","オブジェクト","","true")}}のソースコードを表す文字列を生成します。
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
  - : このグローバル関数 **`isFinite()`** は渡された値が有限数であるかを判定します。必要であれば、引数は初めに数値へと変換されます。
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
  - : **`isNaN()`** 関数は値が {{jsxref("Global_Objects/NaN", "NaN")}} (非数) であるかどうかを判定します。注: `isNaN` 関数内での強制型変換は[変わった](/ja/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description)ルールを持っています。値が非数であるかを判定するには、代わりに ECMAScript 2015 で定義された {{jsxref("Number.isNaN()")}} か、 [`typeof`](/ja/docs/Web/JavaScript/Reference/Operators/typeof) を使うことができます。
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
  - : **`parseFloat()`** 関数は引数の文字列を解釈して浮動小数点数を返します。
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
  - : **`parseInt()`** 関数は引数の文字列を解釈して指定された基数 (数学的記数法における基数) による整数を返します。
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
  - : **`decodeURI()`** 関数は前もって {{jsxref("Global_Objects/encodeURI", "encodeURI")}} 関数によって、または同様の方法で作られた URL (Uniform Resource Identifier) をデコードします。
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
  - : **`decodeURIComponent()`** メソッドは前もって {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} 関数によって、あるいは同様の方法で作られた部分的な URI をデコードします。
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
  - : **`encodeURI()`** メソッドは、特定の文字をそれぞれ UTF-8 文字エンコーディングで表された 1 から 4 つのエスケープシーケンス (4 つのエスケープシーケンスはサロゲートペア文字のみ) に置き換えることで URI をエンコードします。
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
  - : **`encodeURIComponent()`** メソッドは、特定の文字をそれぞれ UTF-8 文字エンコーディングで表された 1 から 4 つのエスケープシーケンス (4 つのエスケープシーケンスはサロゲートペア文字のみ) に置き換えることで部分的な URI をエンコードします。
- {{jsxref("Global_Objects/escape", "escape()")}}
  - : 非推奨の **`escape()`** メソッドはある文字列を 16 進数によるエスケープシーケンスで置換した新しい文字列を計算します。代わりに {{jsxref("Global_Objects/encodeURI", "encodeURI")}} または {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} を使用してください。
- {{jsxref("Global_Objects/unescape", "unescape()")}}
  - : 非推奨の **`unescape()`** メソッドはある文字列中の 16 進数によるエスケープシーケンスを、それが表す所定の文字に置換した新しい文字列を計算します。エスケープシーケンスは {{jsxref("Global_Objects/escape", "escape")}} といった関数によって提供されているかもしれません。 `unescape()` は非推奨なので、代わりに {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} または {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} を使用してください。

{{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_Operators")}}
