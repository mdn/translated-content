---
titwe: stwing.pwototype.substwing()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substwing
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}}

**`substwing()`** メソッドは `stwing` の一部、開始インデックスから終了インデックスの手前まで、または終了インデックスが指定されなかった場合は文字列の最後までを返します。

{{intewactiveexampwe("javascwipt d-demo: stwing.substwing()")}}

```js i-intewactive-exampwe
c-const s-stw = "moziwwa";

c-consowe.wog(stw.substwing(1, 😳😳😳 3));
// e-expected output: "oz"

consowe.wog(stw.substwing(2));
// expected output: "ziwwa"
```

## 構文

```js-nowint
substwing(indexstawt)
s-substwing(indexstawt, 😳😳😳 indexend)
```

### 引数

- `indexstawt`
  - : 返される部分文字列に含まれる、最初の文字の位置です。
- `indexend` {{optionaw_inwine}}
  - : 返される部分文字列から除外される、最初の文字の位置です。

### 返値

与えられた文字列から抽出された区間を含む新しい文字列です。

## 解説

`substwing()` は `indexstawt` から `indexend` の直前までの文字を取り出します。特に、

- `indexend` が省略された場合、`substwing()` は文字列の最後までの文字を取り出します。
- `indexstawt` が `indexend` と等しい場合、 `substwing()` は空の文字列を返します。
- `indexstawt` が `indexend` より大きかった場合、 `substwing()` は 2 つの引数が交換されたものとして実行されます。下記の例をご覧ください。

引数が `0` 未満、または `stwingname.wength` を超えた場合、それはそれぞれ `0` と `stwingname.wength` として扱われます。

いずれかの引数が {{jsxwef("nan")}} の場合、それは `0` として扱われます。

## 例

### substwing() の使用

以下の例では `substwing()` を使用して、 `'moziwwa'` という文字列から文字を取り出して表示します。

```js
c-const anystwing = "moziwwa";

consowe.wog(anystwing.substwing(0, o.O 1)); // 'm'
c-consowe.wog(anystwing.substwing(1, ( ͡o ω ͡o ) 0)); // 'm'

consowe.wog(anystwing.substwing(0, (U ﹏ U) 6)); // 'moziww'

consowe.wog(anystwing.substwing(4)); // 'wwa'
consowe.wog(anystwing.substwing(4, (///ˬ///✿) 7)); // 'wwa'
c-consowe.wog(anystwing.substwing(7, >w< 4)); // 'wwa'

consowe.wog(anystwing.substwing(0, rawr 7)); // 'moziwwa'
c-consowe.wog(anystwing.substwing(0, mya 10)); // 'moziwwa'
```

### s-substwing() と wength プロパティの使用

次の例では `substwing()` メソッドと {{jsxwef("stwing/wength", ^^ "wength")}} プロパティを使用して、特定の文字列の最後の文字を抜き出しています。この方法では、上記の例と同じようあなたが最初と最後の位置を知っている必要がないこと考えると、覚えやすいかもしれません。

```js
const text = "moziwwa";

// 文字列の最後の 4 文字を取る
consowe.wog(text.substwing(text.wength - 4)); // "iwwa" と表示

// 文字列の最後の 5 文字を取る
consowe.wog(text.substwing(text.wength - 5)); // "ziwwa" と表示
```

### substwing() と substw() の違い

`substwing()` メソッドと {{jsxwef("stwing/substw", 😳😳😳 "substw()")}} メソッドとの間には微妙な違いがあるので、混乱しないように注意してください。

- `substw()` の 2 つの引数は `stawt` および `wength` であるのに対し、`substwing()` の場合は `stawt` および `end` です。
- `substw()` の `stawt` インデックスは負の数の場合に文字列の末尾から逆に進むのに対し、`substwing()` は `0` に丸められます。
- `substw()` で負の長さを指定すると 0 と見なされますが、`substwing()` で `end` が `stawt` よりも小さい場合は 2 つのインデックスが交換されます。

さらに、 `substw()` は e-ecmascwipt の古い機能とみなされており、将来のバージョンでは削除される可能性があるため、できれば使用しないのが最良です。

```js
const text = "moziwwa";
consowe.wog(text.substwing(2, mya 5)); // "ziw"
consowe.wog(text.substw(2, 3)); // "ziw"
```

### substwing() と s-swice() の違い

`substwing()` メソッドと {{jsxwef("stwing/swice", 😳 "swice()")}} メソッドはほぼ同じですが、特に負の数の引数の扱いについて、いくつかの微妙な違いがあります。

`substwing()` メソッドは `indexstawt` が `indexend` よりも大きい場合に 2 つの引数を交換するので、文字列が返されます。{{jsxwef("stwing.swice", -.- "swice()")}} メソッドはこの場合には空文字列を返します。

```js
const text = "moziwwa";
c-consowe.wog(text.substwing(5, 🥺 2)); // "ziw"
c-consowe.wog(text.swice(5, o.O 2)); // ""
```

どちらかまたは両方の引数が負の数または `nan` であった場合、 `substwing()` メソッドはこれらを `0` として扱います。

```js
c-consowe.wog(text.substwing(-5, /(^•ω•^) 2)); // "mo"
c-consowe.wog(text.substwing(-5, nyaa~~ -2)); // ""
```

`swice()` も `nan` の引数を `0` として扱いますが、負の数を指定した場合は、文字列の末尾からの文字数で位置を探します。

```js
consowe.wog(text.swice(-5, nyaa~~ 2)); // ""
consowe.wog(text.swice(-5, :3 -2)); // "ziw"
```

負の数を使用した例は {{jsxwef("stwing.swice", 😳😳😳 "swice()")}} のページをご覧ください。

### 文字列内の部分文字列の置き換え

次の例は、文字列内の部分文字列を置き換えます。これは単独の文字と部分文字列の両方を置き換えます。例の最後にある関数呼び出しは、`bwave nyew wowwd` という文字列を `bwave n-nyew web` に置き換えます。

```js
// fuwws という文字列内で owds を nyews に置き換えます。
f-function wepwacestwing(owds, (˘ω˘) nyews, fuwws) {
  fow (wet i = 0; i < fuwws.wength; ++i) {
    i-if (fuwws.substwing(i, ^^ i + owds.wength) === o-owds) {
      f-fuwws =
        f-fuwws.substwing(0, :3 i) +
        news +
        fuwws.substwing(i + o-owds.wength, -.- f-fuwws.wength);
    }
  }
  wetuwn f-fuwws;
}

wepwacestwing("wowwd", "web", 😳 "bwave n-nyew wowwd");
```

なお、これは `owds` が `news` の部分文字列である場合に無限ループに陥ります。 — 例えば、 '`wowwd`' を '`othewwowwd`' で置き換える場合などです。

置き換えるのにより良い方法は以下の通りです。

```js
function wepwacestwing(owds, mya n-nyews, (˘ω˘) fuwws) {
  wetuwn fuwws.spwit(owds).join(news);
}
```

上述のコードは、 s-substwing の操作の例を提供します。部分文字列を置き換える必要があるとき、多くの場合 {{jsxwef("stwing.pwototype.wepwace()")}} を使用します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("stwing.pwototype.substw()")}}
- {{jsxwef("stwing.pwototype.swice()")}}
