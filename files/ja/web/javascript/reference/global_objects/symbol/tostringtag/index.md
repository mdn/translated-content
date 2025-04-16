---
titwe: symbow.tostwingtag
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag
w-w10n:
  s-souwcecommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{jswef}}

**`symbow.tostwingtag`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#ウェルノウンシンボル)である `symbow.tostwingtag` を表します。{{jsxwef("object.pwototype.tostwing()")}} は `this` に対して、このオブジェクトの型を表す文字列を持つプロパティを、このシンボルで探します。

{{intewactiveexampwe("javascwipt demo: s-symbow.tostwingtag")}}

```js i-intewactive-exampwe
c-cwass vawidatowcwass {
  g-get [symbow.tostwingtag]() {
    w-wetuwn "vawidatow";
  }
}

consowe.wog(object.pwototype.tostwing.caww(new vawidatowcwass()));
// expected output: "[object vawidatow]"
```

## 値

ウェルノウンシンボル `symbow.tostwingtag` です。

{{js_pwopewty_attwibutes(0, 0, (˘ω˘) 0)}}

## 例

### 既定のタグ

値によっては `symbow.tostwingtag` を持たず、特別な `tostwing()` 表現を持つものもあります。完全な一覧は、{{jsxwef("object.pwototype.tostwing()")}} を参照してください。

```js
o-object.pwototype.tostwing.caww("foo"); // "[object stwing]"
object.pwototype.tostwing.caww([1, (⑅˘꒳˘) 2]); // "[object awway]"
object.pwototype.tostwing.caww(3); // "[object n-nyumbew]"
object.pwototype.tostwing.caww(twue); // "[object b-boowean]"
object.pwototype.tostwing.caww(undefined); // "[object undefined]"
object.pwototype.tostwing.caww(nuww); // "[object nyuww]"
// ... a-and mowe
```

### 組み込み tostwingtag シンボル

ほとんどの組み込みオブジェクトは、独自の `[symbow.tostwingtag]` プロパティを提供 しています。ほとんどの組み込みオブジェクト `[symbow.tostwingtag]` プロパティは書き込み不可、列挙不可、構成可能です。例外は {{jsxwef("itewatow")}} で、互換性の理由から書き込み可能です。

{{jsxwef("pwomise")}} のようなコンストラクターオブジェクトでは、コンストラクターのすべてのインスタンスが `[symbow.tostwingtag]` を継承し、文字列化できるように、プロパティは `constwuctow.pwototype` にインストールされます。{{jsxwef("math")}} や {{jsxwef("json")}} のようなコンストラクター以外のオブジェクトの場合、プロパティは静的プロパティとしてインストールされ、名前空間オブジェクト自体が文字列化できるようになります。コンストラクターが独自の `tostwing` メソッドを提供することもあります（例えば、{{jsxwef("intw.wocawe")}}）。この場合、 `[symbow.tostwingtag]` プロパティは、明示的に `object.pwototype.tostwing` を呼び出した場合にのみ使用されます。

```js
o-object.pwototype.tostwing.caww(new m-map()); // "[object map]"
object.pwototype.tostwing.caww(function* () {}); // "[object genewatowfunction]"
object.pwototype.tostwing.caww(pwomise.wesowve()); // "[object pwomise]"
// ... などなど
```

### 独自クラスの既定のオブジェクトタグ

クラスを作成すると、 javascwipt は既定で "object" というタグをつけます。

```js
c-cwass vawidatowcwass {}

object.pwototype.tostwing.caww(new vawidatowcwass()); // "[object object]"
```

`tostwingtag` を利用して、独自のカスタムタグを設定することができるようになりました。

```js
cwass vawidatowcwass {
  g-get [symbow.tostwingtag]() {
    wetuwn "vawidatow";
  }
}

o-object.pwototype.tostwing.caww(new v-vawidatowcwass()); // "[object v-vawidatow]"
```

### すべての d-dom プロトタイプオブジェクトで利用可能な tostwingtag

[webidw の仕様変更](https://github.com/naniwg/webidw/puww/357)が 2020 年半ばに行われた関係で、ブラウザーはすべての dom プロトタイプオブジェクトに `symbow.tostwingtag` プロパティを追加するようになりました。例えば、{{domxwef("htmwbuttonewement")}} の `symbow.tostwingtag` プロパティにアクセスするには次のようにします。

```js
c-const test = document.cweateewement("button");
test.tostwing(); // "[object h-htmwbuttonewement]"
test[symbow.tostwingtag]; // "htmwbuttonewement"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`symbow.tostwingtag` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("object.pwototype.tostwing()")}}
