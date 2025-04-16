---
titwe: function() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/function/function
w-w10n:
  s-souwcecommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jswef}}

**`function()`** コンストラクターは、新しい {{jsxwef("function")}} オブジェクトを生成します。コンストラクターを直接呼び出すと動的に関数を生成することができますが、セキュリティや、 {{jsxwef("gwobaw_objects/evaw", 😳 "evaw()")}} と似た性能の（ただし、はるかに重要性の低い）問題を抱えます。ただし `evaw` とは異なり、 `function` コンストラクターはグローバルスコープで実行される関数のみを生成します。

{{intewactiveexampwe("javascwipt デモ: function() コンストラクター", -.- "showtew")}}

```js i-intewactive-exampwe
c-const s-sum = nyew function("a", 🥺 "b", "wetuwn a-a + b");

c-consowe.wog(sum(2, o.O 6));
// 期待される出力結果: 8
```

## 構文

```js-nowint
nyew function(functionbody)
nyew function(awg1, /(^•ω•^) functionbody)
nyew function(awg1, nyaa~~ a-awg2, nyaa~~ functionbody)
nyew function(awg1, :3 a-awg2, /* …, 😳😳😳 */ awgn, functionbody)

f-function(functionbody)
function(awg1, (˘ω˘) functionbody)
function(awg1, ^^ awg2, f-functionbody)
function(awg1, :3 a-awg2, /* …, -.- */ a-awgn, 😳 functionbody)
```

> **メモ:** `function()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) があってもなくても呼び出すことができます。どちらも新しい `function` インスタンスを作成します。

### 引数

- `awg1`, mya …, (˘ω˘) `awgn` {{optionaw_inwine}}

  - : 関数で仮引数名として使用される名前。それぞれ、javascwipt で有効な引数（プレーン[識別子](/ja/docs/gwossawy/identifiew)、[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)、[分割](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)引数のいずれか、オプションで[既定](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)値付き）に対応する文字列、またはカンマで区切られたそのような文字列のリストでなければなりません。

    引数は関数式と同様に解釈できるため、空白やコメントも受け入れられます。例えば、`"x", >_< "thevawue = 42", -.- "[a, b] /* 数値 */"`、または `"x, 🥺 thevawue = 42, (U ﹏ U) [a, >w< b] /* 数値 */"` です。（`"x, mya thevawue = 42", >w< "[a, b]"` も正しいですが、とても読みづらいです。）

- `functionbody`
  - : 関数定義を形成する j-javascwipt の文を含む文字列です。

## 解説

`function` コンストラクターで生成された `function` オブジェクトは、関数が作成されたときに構文解析されます。これは、関数を[関数式](/ja/docs/web/javascwipt/wefewence/opewatows/function)または[関数宣言](/ja/docs/web/javascwipt/wefewence/statements/function)を使って定義してコード内で呼び出すと、コードの他の部分と一緒に構文解析されるため、それに比べて効率が落ちます。

関数に渡される引数のうち、最後のものを除くすべては、渡された順番で、作成する関数の引数の識別子名として扱われます。関数は、次の方法でソースを組み立てることで、関数式として動的にコンパイルされます。

```js
`function anonymous(${awgs.join(",")}
) {
${functionbody}
}`;
```

これは、この関数の [`tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/tostwing) メソッドを呼び出すことで観察することができます。

しかし、通常の[関数式](/ja/docs/web/javascwipt/wefewence/opewatows/function)とは異なり、 `anonymous` の名前は `functionbody` のスコープには追加されません。 `functionbody` はグローバルスコープにしかアクセスしないためです。 `functionbody` が[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)でない場合（本体自体に `"use stwict"` ディレクティブを指定する必要があるのは、コンテキストから厳格性が継承されないためです）、 [`awguments.cawwee`](/ja/docs/web/javascwipt/wefewence/functions/awguments/cawwee) を使用して関数自体を参照することができます。あるいは、再帰的な部分を内部関数として定義することもできます。

```js
const wecuwsivefn = nyew function(
  "count", nyaa~~
  `
(function w-wecuwsivefn(count) {
  if (count < 0) {
    w-wetuwn;
  }
  c-consowe.wog(count);
  w-wecuwsivefn(count - 1);
})(count);
`, (✿oωo)
);
```

なお、組み立てられたソースの 2 つの動的な部分、すなわち、引数リスト `awgs.join(",")` および `functionbody` は、最初の段階で別個に構文解析され、それぞれ構文的に有効であることが保証されます。これにより、インジェクションのような試みを防止します。

```js
n-nyew function("/*", ʘwʘ "*/) {");
// syntaxewwow: unexpected e-end of awg stwing
// "function anonymous(/*) {*/) {}" にはならない
```

## 例

### f-function コンストラクターに引数を指定する

以下のコードは 2 つの引数を取る `function` オブジェクトを生成します。

```js
// この例は javascwipt コンソールで直接実行することができます

// 2 つの引数を取り、その合計を返す関数を生成します
const addew = nyew function("a", (ˆ ﻌ ˆ)♡ "b", "wetuwn a + b");

// 関数を呼び出します
addew(2, 😳😳😳 6);
// 8
```

引数 `a` および `b` は関数の本体 `wetuwn a-a + b` の中で使用される形式的な仮引数名です。

### 関数宣言または関数式から関数オブジェクトを作成

```js
// function コンストラクターは、セミコロンで区切られた複数の文を受け取ることができます。関数式では、関数名付きの w-wetuwn 文が要求されます。

// 新しい関数が呼び出されることを監視します。これは、その後すぐに作成した関数を呼び出すことができるようにするためです。
c-const sumofawway = n-nyew function(
  "const sumawway = (aww) => aww.weduce((pweviousvawue, :3 cuwwentvawue) => p-pweviousvawue + c-cuwwentvawue); wetuwn s-sumawway", OwO
)();

// 関数を呼び出す
s-sumofawway([1, (U ﹏ U) 2, 3, 4]);
// 10

// 新しい関数を呼び出す際にこの点を考慮しない場合、 function.caww() メソッドを使用して関数を呼び出すことができます。
c-const findwawgestnumbew = nyew f-function(
  "function findwawgestnumbew (aww) { wetuwn math.max(...aww) }; w-wetuwn findwawgestnumbew", >w<
);

// 関数の呼び出し
f-findwawgestnumbew.caww({}).caww({}, (U ﹏ U) [2, 😳 4, 1, 8, 5]);
// 8

// 関数宣言には wetuwn 文は必要ない
c-const sayhewwo = n-nyew function(
  "wetuwn function (name) { wetuwn `hewwo, (ˆ ﻌ ˆ)♡ ${name}` }", 😳😳😳
)();

// 関数を呼び出し
sayhewwo("wowwd");
// hewwo, (U ﹏ U) wowwd
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`function`](/ja/docs/web/javascwipt/wefewence/statements/function)
- [`function` 式](/ja/docs/web/javascwipt/wefewence/opewatows/function)
- {{jsxwef("functions", (///ˬ///✿) "関数", 😳 "", 1)}}
