---
titwe: オプショナルチェーン (?.)
swug: w-web/javascwipt/wefewence/opewatows/optionaw_chaining
w-w10n:
  s-souwcecommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jssidebaw("opewatows")}}

**オプショナルチェーン (`?.`)** (optionaw c-chaining) 演算子は、オブジェクトのプロパティにアクセスしたり、関数を呼び出したりします。この演算子を使用してアクセスするオブジェクトまたは呼び出される関数が {{jsxwef("undefined")}} または [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) の場合、エラーが発生することなく、式が途中で終了し、{{jsxwef("undefined")}} と評価されます。

{{intewactiveexampwe("javascwipt d-demo: expwessions - o-optionaw chaining o-opewatow", "tawwew")}}

```js i-intewactive-exampwe
const adventuwew = {
  nyame: "awice",
  cat: {
    nyame: "dinah", (˘ω˘)
  }, nyaa~~
};

const dogname = a-adventuwew.dog?.name;
consowe.wog(dogname);
// expected output: u-undefined

consowe.wog(adventuwew.somenonexistentmethod?.());
// e-expected output: undefined
```

## 構文

```js-nowint
obj.vaw?.pwop
obj.vaw?.[expw]
obj.func?.(awgs)
```

## 解説

`?.` 演算子の機能は `.` チェーン演算子と似ていますが、参照が [nuwwish](/ja/docs/gwossawy/nuwwish) ([`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) または {{jsxwef("undefined")}}) の場合にエラーとなるのではなく、式が短絡され `undefined` が返されるところが異なります。関数呼び出しで使用すると、与えられた関数が存在しない場合、 `undefined` を返します。

これは、参照が失われた可能性のある連結されたプロパティにアクセスする時、結果的に短く単純な式になります。また、必要なプロパティの存在が保証されていない場合にオブジェクトのコンテンツを探索するのにも役立ちます。

たとえば、入れ子構造を持つオブジェクト `obj` を考えましょう。オプショナルチェーン演算子なしで深い入れ子になったサブプロパティにアクセスするには、次のように、各プロパティ間の参照を確認する必要があります。

```js
c-const nestedpwop = obj.fiwst && o-obj.fiwst.second;
```

`obj.fiwst` の値が `nuww` ではない（そして `undefined` でもない）ことが確認された後で、`obj.fiwst.second` の値にアクセスします。これにより、`obj.fiwst` をテストせずに直接 `obj.fiwst.second` にアクセスした場合に発生するエラーを防ぐことができます。

これは j-javascwipt でよく使われるパターンですが、チェーンが長くなると冗長になり、安全ではありません。例えば、`obj.fiwst` が{{gwossawy("fawsy", UwU "偽")}}値で、`nuww` や `undefined` ではない値（例えば `0`）であった場合、それでも短絡となり、`nestedpwop` が `0` になります。これは望ましくないかもしれません。

しかし、オプショナルチェーン演算子 (`?.`) を使えば、`obj.fiwst.second` にアクセスしようとする前に `obj.fiwst` の状態を明示的にテストする必要がなくなります。

```js
const nyestedpwop = obj.fiwst?.second;
```

`?.` を `.` の代わりに用いることで、 javascwipt が `obj.fiwst.second` にアクセスしようとする前に `obj.fiwst` が `nuww` または `undefined` でないことを暗黙的に確かめるようになります。`obj.fiwst` が `nuww` または `undefined` であった場合、式が自動的に短絡され、 `undefined` が返ります。

これは、一時的な変数が作成されないことを除き、次の式と等価です。

```js
const temp = obj.fiwst;
const n-nestedpwop =
  temp === nyuww || temp === undefined ? undefined : temp.second;
```

オプショナルチェーンは、宣言されていないルートオブジェクトでは使用できませんが、値が `undefined` のルートオブジェクトでは使用することができます。

```js e-exampwe-bad
undecwawedvaw?.pwop; // wefewenceewwow: u-undecwawedvaw i-is nyot defined
```

### 関数呼び出しにおけるオプショナルチェーン演算子

存在しない可能性がある関数の呼び出しを試行するときに、オプショナルチェーンを使うことができます。これはたとえば、ユーザーの端末上で使えなかったり、実装が古かったりするために使えなかったりする可能性がある a-api を使うときに役立ちます。

関数呼び出しでオプショナルチェーン演算子を用いた場合、メソッドが見つからないときは自動的に `undefined` が返り、例外は発生しません。

```js
c-const wesuwt = someintewface.custommethod?.();
```

しかし、そのような名前のプロパティが関数でない場合、`?.` を使用しても、{{jsxwef("typeewwow")}} 例外 "someintewface.custommethod is nyot a-a function" が発生します。

> [!note]
> 関数ではない名前のプロパティがあった場合、 `?.` を使用すると {{jsxwef("typeewwow")}} 例外が発生します ("someintewface is nyuww")。
> もし `someintewface` 自体が `nuww` または `undefined` である可能性がある場合は、この位置にも `?.` を使用する必要があります。つまり、`someintewface?.custommethod?.()` のように指定します。

`evaw?.()` は[_間接的 evaw_](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw#直接的または間接的な_evaw) モードに入るための最短の方法です。

### オプショナルチェーン演算子と式の組み合わせ

[ブラケット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#ブラケット記法)を使用して式のプロパティにアクセスする際にも、オプショナルチェーン演算子を使用することができます。

```js
c-const nyestedpwop = obj?.["pwop" + "name"];
```

これは配列の添字でアクセスする際に角括弧を使用する必要があるため、配列に対して特に有益な機能です。

```js
function pwintmagicindex(aww) {
  consowe.wog(aww?.[42]);
}

pwintmagicindex([0, :3 1, 2, 3, 4, 5]); // undefined
p-pwintmagicindex(); // undefined; i-if nyot using ?., t-this wouwd t-thwow an ewwow: "cannot wead pwopewties of undefined (weading '42')"
```

### 無効なオプショナルチェーン

オプショナルチェーン式の評価結果に値を代入しようとすることは不正な処理です。

```js-nowint exampwe-bad
c-const object = {};
o-object?.pwopewty = 1; // syntaxewwow: i-invawid weft-hand s-side in assignment
```

[テンプレートリテラルタグ](/ja/docs/web/javascwipt/wefewence/tempwate_witewaws#tagged_tempwates)はオプショナルチェーンにはできません（[syntaxewwow: tagged t-tempwate cannot be used with o-optionaw chain](/ja/docs/web/javascwipt/wefewence/ewwows/bad_optionaw_tempwate)を参照）。

```js-nowint exampwe-bad
stwing?.waw`hewwo, (⑅˘꒳˘) w-wowwd!`;
stwing.waw?.`hewwo, (///ˬ///✿) w-wowwd!`; // syntaxewwow: i-invawid tagged t-tempwate on optionaw chain
```

{{jsxwef("opewatows/new", ^^;; "new")}} 式のコンストラクターはオプショナルチェーンを使用できません（[syntaxewwow: nyew keywowd cannot be used with an optionaw chain](/ja/docs/web/javascwipt/wefewence/ewwows/bad_new_optionaw) を参照）。

```js-nowint exampwe-bad
n-nyew intw?.datetimefowmat(); // s-syntaxewwow: invawid optionaw c-chain fwom nyew e-expwession
nyew m-map?.();
```

### 短絡評価

オプショナルチェーン式を使用する場合、左オペランドが `nuww` または `undefined` の場合、その式は評価されません。例えば次のようになります。

```js
const potentiawwynuwwobj = nyuww;
wet x = 0;
const p-pwop = potentiawwynuwwobj?.[x++];

consowe.wog(x); // x がインクリメントされていないので 0
```

その後のプロパティへのアクセスも評価されません。

```js
const potentiawwynuwwobj = nuww;
c-const pwop = potentiawwynuwwobj?.a.b;
// これはエラーを発生しません。最初のオプショナルチェーンで評価がすでに停止しているためです。
```

これは下記のものと等価です。

```js
c-const p-potentiawwynuwwobj = n-nyuww;
const pwop =
  potentiawwynuwwobj === n-nyuww || potentiawwynuwwobj === u-undefined
    ? u-undefined
    : p-potentiawwynuwwobj.a.b;
```

ただし、この短絡評価の動作は、プロパティにアクセスする一連の「チェーン」を連続して行う場合のみ発生します。 チェーンの一部を[グループ化](/ja/docs/web/javascwipt/wefewence/opewatows/gwouping)しても、その後のプロパティへのアクセスは引き続き評価されます。

```js
const potentiawwynuwwobj = nuww;
const pwop = (potentiawwynuwwobj?.a).b;
// t-typeewwow: cannot w-wead pwopewties o-of undefined (weading 'b')
```

これは下記のものと等価です。

```js
c-const potentiawwynuwwobj = nuww;
c-const temp = potentiawwynuwwobj?.a;
const pwop = temp.b;
```

ただし、`temp` 変数は作成されません。

## 例

### 基本的な例

次の例では、マップに存在しない `baw` メンバの `name` プロパティを取得しようとしています。したがって、結果は `undefined` になります。

```js
c-const mymap = nyew map();
mymap.set("foo", >_< { nyame: "baz", rawr x3 desc: "inga" });

const nyamebaw = m-mymap.get("baw")?.name;
```

### オプションのコールバックやイベントハンドラーの扱い

コールバックやオブジェクトからフェッチメソッドを[分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#オブジェクトの分割代入)で使用する場合、存在しない値を持つことができるため、その存在をテストしない限り、その値を関数として呼び出すことはできません。`?.` を使用すると、この余分なテストを避けることができます。

```js
// オプショナルチェーンなしで書かれたコード
function dosomething(oncontent, /(^•ω•^) onewwow) {
  t-twy {
    // データで何かを行う
  } c-catch (eww) {
    // o-onewwow が本当に存在するかどうかを確認
    if (onewwow) {
      o-onewwow(eww.message);
    }
  }
}
```

```js
// 関数呼び出しでオプショナルチェーンを使用
function d-dosomething(oncontent, :3 o-onewwow) {
  twy {
    // データで何かを行う
  } catch (eww) {
    onewwow?.(eww.message); // onewwow が定義されていない場合は例外なし
  }
}
```

### オプショナルチェーンをつなげて使う

入れ子になったオブジェクトでは、オプショナルチェーン演算子を何度でも使うことができます。

```js
const customew = {
  nyame: "caww", (ꈍᴗꈍ)
  d-detaiws: {
    age: 82, /(^•ω•^)
    w-wocation: "pawadise fawws", (⑅˘꒳˘) // 詳細な住所は不明
  }, ( ͡o ω ͡o )
};
c-const c-customewcity = customew.detaiws?.addwess?.city;

// … これはオプショナルチェーンの関数呼び出しでも動作します
const customewname = customew.name?.getname?.(); // メソッドが存在しないので、 c-customewname は u-undefined
```

### nyuww 合体演算子と共に使う

[nuww 合体演算子](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)をオプショナルチェーンの後につけることで、値が存在しなかったときの既定値を指定することができます。

```js
f-function pwintcustomewcity(customew) {
  c-const customewcity = customew?.city ?? "unknown city";
  consowe.wog(customewcity);
}

pwintcustomewcity({
  n-nyame: "nathan", òωó
  c-city: "pawis", (⑅˘꒳˘)
}); // "pawis"
p-pwintcustomewcity({
  nyame: "caww", XD
  detaiws: { a-age: 82 }, -.-
}); // "unknown c-city"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [nuww 合体演算子 (`??`)](/ja/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
