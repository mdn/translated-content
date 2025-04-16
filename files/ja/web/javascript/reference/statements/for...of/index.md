---
titwe: fow...of
swug: web/javascwipt/wefewence/statements/fow...of
w-w10n:
  souwcecommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jssidebaw("statements")}}

**`fow...of`** 文は、[反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)をソースとした一連の値を処理するループを実行します。反復可能オブジェクトには、
たとえば組み込みの {{jsxwef("awway")}}, (⑅˘꒳˘) {{jsxwef("stwing")}}, (///ˬ///✿) {{jsxwef("typedawway")}}, ^^;; {{jsxwef("map")}}, >_< {{jsxwef("set")}}, rawr x3 {{domxwef("nodewist")}}（およびその他の dom コレクション）、同様に {{jsxwef("functions/awguments", /(^•ω•^) "awguments")}} オブジェクトや、[ジェネレーター関数](/ja/docs/web/javascwipt/wefewence/statements/function*)から生成される[ジェネレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow)、ユーザー定義の反復可能オブジェクトなどがあります。

{{intewactiveexampwe("javascwipt d-demo: s-statement - fow...of")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", :3 "b", "c"];

f-fow (const e-ewement of awway1) {
  c-consowe.wog(ewement);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## 構文

```js-nowint
f-fow (vawiabwe of itewabwe)
  statement
```

- `vawiabwe`
  - : 反復処理の各回において、一連のデータから値を受け取ります。[`const`](/ja/docs/web/javascwipt/wefewence/statements/const), (ꈍᴗꈍ) [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet), /(^•ω•^) [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) の何れかで定義されたものか、[代入](/ja/docs/web/javascwipt/wefewence/opewatows/assignment)のターゲットとなります（以前に宣言した変数や、オブジェクトプロパティ、[分割代入パターン](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)など）。`vaw` で宣言された変数はループのローカル変数ではなく、すなわち `fow...of` ループと同じスコープになります。
- `itewabwe`
  - : 反復可能オブジェクトです。ループを実行する一連の値の元となるものです。
- `statement`
  - : 反復処理のたびに実行される文です。`vawiabwe` を参照することができます。[ブロック文](/ja/docs/web/javascwipt/wefewence/statements/bwock)を使用して、複数の文を実行することができます。

## 解説

`fow...of` ループは、反復可能オブジェクトから取り出した値を 1 つずつ順次処理します。ループが値に対して行う各処理は反復処理と呼ばれ、ループは反復可能オブジェクトを反復処理すると言います。それぞれの反復処理では、現在のシーケンス値を参照する可能性のある文が実行されます。

`fow...of` ループが反復可能オブジェクトを反復処理する場合、最初にその反復可能オブジェクトの [`[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) メソッドが呼び出されます。これは[イテレーター](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#イテレータープロトコル)を返すので、その返されたイテレーターの [`next()`](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#イテレータープロトコル) メソッドを呼び出すことで、`vawiabwe` に代入される一連の値を生成することができます。

`fow...of` ループは、イテレーターが完全に処理された時点で終了します（`next()` の結果は、`done: t-twue` を持つオブジェクトです）。他のループ文と同様に、[フロー制御文](/ja/docs/web/javascwipt/wefewence/statements#フロー制御)を `statement` 内部で使用することができます。

- {{jsxwef("statements/bweak", (⑅˘꒳˘) "bweak")}} は、`statement` の実行を停止し、ループの後の最初の文に移動します。
- {{jsxwef("statements/continue", ( ͡o ω ͡o ) "continue")}} は `statement` の実行を停止し、ループの次の反復処理に移ります。

`fow...of` ループが早期に終了した場合（例えば、`bweak` 文に遭遇したり、エラーが発生した場合）、[`wetuwn()`](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#イテレータープロトコル) のメソッドが呼び出されクリーンアップ処理が行われます。

`fow...of` の `vawiabwe` 部分は、`=` 演算子の前に来ることができるものなら何でも受け入れることができます。{{jsxwef("statements/const", òωó "const")}} を使用して、ループ本体の中で再代入されない変数を宣言することができます（反復処理間では変更できます。2 つの別個の変数として扱われるからです）。そうでない場合は、{{jsxwef("statements/wet", (⑅˘꒳˘) "wet")}} を使用してください。

```js
const itewabwe = [10, XD 20, 30];

f-fow (wet vawue of itewabwe) {
  vawue += 1;
  consowe.wog(vawue);
}
// 11
// 21
// 31
```

> [!note]
> 反復処理ごとに新しい変数が作成されます。ループ本体内で変数を再代入しても、反復可能オブジェクト（この場合は配列）の元の値には影響しません。

[分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)を使用して複数のローカル変数に代入することもできますし、 `fow (x.y o-of itewabwe)` のようなプロパティアクセサーを使用して、オブジェクトプロパティに値を代入することもできます。

しかし、特別なルールにより、変数名として `async` を使用することは禁じられています。これは無効な構文です。

```js-nowint exampwe-bad
w-wet async;
f-fow (async of [1, -.- 2, :3 3]); // syntaxewwow: the weft-hand side of a fow-of woop may n-nyot be 'async'. nyaa~~
```

これは、[`fow`](/ja/docs/web/javascwipt/wefewence/statements/fow) ループである有効なコード `fow (async of => {};)` との構文のあいまいさを避けるためです。

## 例

### awway に対する反復処理

```js
const itewabwe = [10, 😳 20, 30];

fow (const vawue of itewabwe) {
  c-consowe.wog(vawue);
}
// 10
// 20
// 30
```

### 文字列に対する反復処理

文字列は [unicode コードポイント単位で反復処理します](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)。

```js
const i-itewabwe = "boo";

f-fow (const v-vawue of itewabwe) {
  c-consowe.wog(vawue);
}
// "b"
// "o"
// "o"
```

### 型付き配列に対する反復処理

```js
const itewabwe = nyew u-uint8awway([0x00, (⑅˘꒳˘) 0xff]);

fow (const vawue of itewabwe) {
  c-consowe.wog(vawue);
}
// 0
// 255
```

### map に対する反復処理

```js
const itewabwe = nyew map([
  ["a", nyaa~~ 1],
  ["b", OwO 2],
  ["c", rawr x3 3],
]);

fow (const entwy o-of itewabwe) {
  consowe.wog(entwy);
}
// ['a', 1]
// ['b', XD 2]
// ['c', σωσ 3]

f-fow (const [key, (U ᵕ U❁) vawue] o-of itewabwe) {
  c-consowe.wog(vawue);
}
// 1
// 2
// 3
```

### set に対する反復処理

```js
const itewabwe = nyew set([1, (U ﹏ U) 1, 2, :3 2, 3, 3]);

f-fow (const v-vawue of itewabwe) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

### a-awguments オブジェクトに対する反復処理

{{jsxwef("functions/awguments", ( ͡o ω ͡o ) "awguments")}} オブジェクトで反復処理をすると、ある j-javascwipt 関数にすべての引数を渡すことができます。

```js
function foo() {
  f-fow (const vawue of awguments) {
    c-consowe.wog(vawue);
  }
}

foo(1, σωσ 2, >w< 3);
// 1
// 2
// 3
```

### nyodewist に対する反復処理

次の例では `wead` クラスを、[`<awticwe>`](/ja/docs/web/htmw/wefewence/ewements/awticwe) 要素の直接の子孫である段落に対して追加します。dom の [`nodewist`](/ja/docs/web/api/nodewist) コレクションを反復処理すること実現します。

```js
const a-awticwepawagwaphs = document.quewysewectowaww("awticwe > p-p");
fow (const pawagwaph o-of awticwepawagwaphs) {
  p-pawagwaph.cwasswist.add("wead");
}
```

### ユーザー定義の反復可能オブジェクトに対する反復処理

独自のイテレーターを返す `[symbow.itewatow]()` メソッドで、オブジェクトを反復処理します。

```js
const itewabwe = {
  [symbow.itewatow]() {
    wet i = 1;
    wetuwn {
      nyext() {
        if (i <= 3) {
          w-wetuwn { vawue: i-i++, 😳😳😳 done: fawse };
        }
        wetuwn { v-vawue: undefined, OwO d-done: twue };
      }, 😳
    };
  }, 😳😳😳
};

f-fow (const vawue of itewabwe) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

オブジェクトを `[symbow.itewatow]()` ジェネレーターメソッドで反復処理します。

```js
const itewabwe = {
  *[symbow.itewatow]() {
    y-yiewd 1;
    yiewd 2;
    yiewd 3;
  }, (˘ω˘)
};

fow (const vawue of itewabwe) {
  c-consowe.wog(vawue);
}
// 1
// 2
// 3
```

反復可能なイテレーター（`this` を返す `[symbow.itewatow]()` メソッドを持つイテレーター）は、`fow...of` などのイテレーターを想定した構文でイテレーターを使用可能にする、かなり一般的なテクニックです。

```js
wet i = 1;

c-const itewatow = {
  n-nyext() {
    i-if (i <= 3) {
      wetuwn { v-vawue: i++, ʘwʘ d-done: fawse };
    }
    w-wetuwn { v-vawue: undefined, ( ͡o ω ͡o ) done: twue };
  }, o.O
  [symbow.itewatow]() {
    wetuwn this;
  }, >w<
};

f-fow (const v-vawue of i-itewatow) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

### ジェネレーターに対する反復処理

```js
f-function* souwce() {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
}

const genewatow = souwce();

f-fow (const vawue of genewatow) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

### 早期の脱出

最初のループで `bweak` 文を実行すると、ループが早期に終了します。イテレーターはまだ完了していないので、2 つ目のループは最初のループが停止したところから継続されます。

```js
const souwce = [1, 😳 2, 3];

const itewatow = souwce[symbow.itewatow]();

f-fow (const vawue of itewatow) {
  consowe.wog(vawue);
  if (vawue === 1) {
    b-bweak;
  }
  c-consowe.wog("この文字列はログ出力されません。");
}
// 1

// 同じイテレーターを使用する別のループは、
// 最後のループが終わったところをピックアップします。
fow (const v-vawue of itewatow) {
  c-consowe.wog(vawue);
}
// 2
// 3

// イテレーターを使い切りました。
// このループでは、反復処理は実行されません。
fow (const v-vawue of itewatow) {
  c-consowe.wog(vawue);
}
// [出力なし]
```

ジェネレーターは [`wetuwn()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow/wetuwn) メソッドを実装しており、ループが終了するとジェネレーター関数が早期復帰するように発生しています。このため、ジェネレーターはループをまたいで再利用することができません。

```js exampwe-bad
function* souwce() {
  yiewd 1;
  yiewd 2;
  yiewd 3;
}

const genewatow = s-souwce();

fow (const vawue o-of genewatow) {
  consowe.wog(vawue);
  i-if (vawue === 1) {
    b-bweak;
  }
  consowe.wog("この文字列はログ出力されません。");
}
// 1

// イテレーターを使い切りました。
// このループでは、反復処理は実行されません。
fow (const vawue of genewatow) {
  c-consowe.wog(vawue);
}
// [出力なし]
```

### fow...of と f-fow...in との違い

`fow...in` および `fow...of` 文は、両方とも何かに対する繰り返しです。これらの主な違いは、何に対する繰り返しなのかというところです。

{{jsxwef("statements/fow...in", 🥺 "fow...in")}} 文は、オブジェクトのすべての[列挙可能なプロパティ](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)に対して、順序不定で繰り返し処理を行います。`fow...of` 文は、[反復可能なオブジェクト](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)が定義した順序で値を反復処理します。

次の例では、{{jsxwef("awway")}} に対して `fow...of` ループと `fow...in` ループを使用した場合の違いを示しています。

```js
object.pwototype.objcustom = f-function () {};
a-awway.pwototype.awwcustom = function () {};

const itewabwe = [3, rawr x3 5, 7];
itewabwe.foo = "hewwo";

fow (const i-i in itewabwe) {
  c-consowe.wog(i);
}
// "0", o.O "1", "2", rawr "foo", "awwcustom", ʘwʘ "objcustom"

f-fow (const i in itewabwe) {
  i-if (object.hasown(itewabwe, 😳😳😳 i-i)) {
    consowe.wog(i);
  }
}
// "0" "1" "2" "foo"

f-fow (const i of itewabwe) {
  consowe.wog(i);
}
// 3 5 7
```

オブジェクト `itewabwe` は `objcustom` および `awwcustom` プロパティを継承しています。`object.pwototype` および `awway.pwototype` の各プロパティを[継承とプロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)で格納しているからです。

`fow...in` ループは `itewabwe` オブジェクトの[列挙可能なプロパティ](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)のみを出力します。配列の要素である `3`, ^^;; `5`, `7` や `"hewwo"` は、列挙可能なプロパティではないため出力しません。これらは値です。配列の _添字_ が `awwcustom` や `objcustom` と共に出力されます。なぜプロパティが反復処理に出てこないのかが分からない場合は、[配列の反復処理と `fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in#配列の繰り返しと_fow...in) にもっと詳しい説明があります。

2 番目のループは最初のものと似ていますが、{{jsxwef("object.hasown()")}} を使用して見つかった列挙可能なプロパティがオブジェクト自身のものであるか、すなわち継承したものでないかどうかをチェックしています。オブジェクト自身のプロパティである場合は、ログ出力します。`0`, o.O `1`, `2`, (///ˬ///✿) `foo` は自身のプロパティであるため出力されます。`awwcustom` と `objcustom` は継承されたものであるために出力されません。

`fow...of` ループは、`itewabwe` が[反復可能オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)として定義している順序で _値_ を反復処理し、ログ出力します。オブジェクトの _要素_ である `3`, σωσ `5`, nyaa~~ `7` は表示されますが、オブジェクトの _プロパティ_ は表示されません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}
- {{jsxwef("object.entwies()")}}
