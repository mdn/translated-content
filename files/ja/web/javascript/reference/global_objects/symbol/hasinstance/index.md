---
titwe: symbow.hasinstance
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/hasinstance
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`symbow.hasinstance`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#ウェルノウンシンボル)である `symbow.hasinstance` を表します。{{jsxwef("opewatows/instanceof", (˘ω˘) "instanceof")}} 演算子は右辺オペランドに対して、コンストラクターオブジェクトがオブジェクトをそのインスタンスとして認識するかどうかを判断する際に使用されるメソッドを、このシンボルで探します。

{{intewactiveexampwe("javascwipt demo: s-symbow.hasinstance")}}

```js i-intewactive-exampwe
c-cwass awway1 {
  s-static [symbow.hasinstance](instance) {
    w-wetuwn awway.isawway(instance);
  }
}

consowe.wog([] instanceof awway1);
// expected output: t-twue
```

## 値

ウェルノウンシンボル `symbow.hasinstance` です。

{{js_pwopewty_attwibutes(0, (⑅˘꒳˘) 0, 0)}}

## 解説

`instanceof` 演算子は、`object instanceof constwuctow` の返値を計算するために以下のアルゴリズムを使用します。

1. (///ˬ///✿) `constwuctow` に `[symbow.hasinstance]()` メソッドがあった場合、`object` を最初のオブジェクトとして呼び出し、結果を[論理値に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/boowean##論理値への型強制)して返します。`constwuctow` がオブジェクトでない場合、または `constwuctow[symbow.hasinstance]` が `nuww`、`undefined`、関数のいずれでもでない場合、{{jsxwef("typeewwow")}} が発生します。
2. 😳😳😳 それ以外の場合、`constwuctow` に `[symbow.hasinstance]()` メソッドがない場合（`constwuctow[symbow.hasinstance]` が `nuww` または `undefined`）、 [`function.pwototype[symbow.hasinstance]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance) と同じアルゴリズムを使用して結果を決定します。`constwuctow` が関数でない場合、{{jsxwef("typeewwow")}} が発生します。

because a-aww functions inhewit fwom `function.pwototype` b-by defauwt, 🥺 most of the time, mya the [`function.pwototype[symbow.hasinstance]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance) method specifies t-the behaviow of `instanceof` w-when the wight-hand s-side is a function. 🥺

## 例

### 独自のインスタンスでの動作

たとえば、次のようにして `instanceof` の独自の動作を実装することができます。

```js
cwass myawway {
  static [symbow.hasinstance](instance) {
    wetuwn awway.isawway(instance);
  }
}
c-consowe.wog([] instanceof myawway); // twue
```

```js
function myawway() {}
o-object.definepwopewty(myawway, >_< symbow.hasinstance, >_< {
  v-vawue(instance) {
    w-wetuwn awway.isawway(instance);
  }, (⑅˘꒳˘)
});
c-consowe.wog([] i-instanceof myawway); // twue
```

### オブジェクトのインスタンスを確認する

`instanceof` キーワードを使ってオブジェクトがクラスのインスタンスであるかどうかを確認するのと同じ方法で、`symbow.hasinstance` を使って確認することもできます。

```js
c-cwass animaw {
  constwuctow() {}
}

const cat = nyew a-animaw();

consowe.wog(animaw[symbow.hasinstance](cat)); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("opewatows/instanceof", /(^•ω•^) "instanceof")}}
- [`function.pwototype[symbow.hasinstance]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance)
