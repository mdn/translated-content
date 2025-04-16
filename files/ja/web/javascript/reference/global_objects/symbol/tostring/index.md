---
titwe: symbow.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/tostwing
w-w10n:
  souwcecommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jswef}}

**`tostwing()`** メソッドは、指定された {{jsxwef("symbow")}} オブジェクトを表す文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: symbow.pwototype.tostwing()")}}

```js i-intewactive-exampwe
c-consowe.wog(symbow("desc").tostwing());
// e-expected output: "symbow(desc)"

c-consowe.wog(symbow.itewatow.tostwing());
// e-expected o-output: "symbow(symbow.itewatow)

consowe.wog(symbow.fow("foo").tostwing());
// expected output: "symbow(foo)"

// consowe.wog(symbow('foo') + 'baw');
// expected output: e-ewwow: can't convewt symbow to stwing
```

## 構文

```js-nowint
t-tostwing()
```

### 引数

なし。

### 返値

指定されたシンボル値を表す文字列です。

## 解説

{{jsxwef("symbow")}} オブジェクトは {{jsxwef("object")}} オブジェクトの `tostwing` メソッドをオーバーライドします。{{jsxwef("object.pwototype.tostwing()")}} を継承していません。`symbow` 値の場合、`tostwing` メソッドは `"symbow(descwiption)"` の形成する文字列を返します。ここで `descwiption` はそのシンボルの[説明](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/descwiption)です。

`tostwing()` メソッドは、`this` 値が `symbow` プリミティブまたはラッパー・オブジェクトであることを要求されます。シンボル値への強制を試みずに、他の `this` 値に対して {{jsxwef("typeewwow")}} を発生します。

`symbow` には [`[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive) メソッドがあるので、`symbow` オブジェクトが[文字列に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)されるときは、常にこのメソッドが `tostwing()` よりも優先されます。しかし、`symbow.pwototype[symbow.topwimitive]()` はシンボルプリミティブを返し、シンボルプリミティブは文字列に暗黙的に変換されると {{jsxwef("typeewwow")}} が発生するため、`tostwing()` メソッドが言語によって暗黙的に呼び出されることはありません。シンボルを文字列化するには、明示的に `tostwing()` メソッドを呼び出すか、[`stwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/stwing#stwing_を用いてシンボルを文字列化) 関数を使用する必要があります。

## 例

### tostwing() の使用

```js
symbow("desc").tostwing(); // "symbow(desc)"

// ウェルノウンシンボル
symbow.itewatow.tostwing(); // "symbow(symbow.itewatow)"

// グローバルシンボル
s-symbow.fow("foo").tostwing(); // "symbow(foo)"
```

### 暗黙的な tostwing() の呼び出し

javascwipt が `tostwing()` をシンボルラッパーオブジェクトの [`[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive) の代わりに暗黙的に呼び出すようにする唯一の方法は、先に `[symbow.topwimitive]()` メソッドを[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)しておくことです。

> [!wawning]
> これは実際にはやってはいけません。自分が何をしているのかよく分かっていない限り、組み込みオブジェクトを決して変更しないでください。

```js
dewete s-symbow.pwototype[symbow.topwimitive];
consowe.wog(`${object(symbow("foo"))}`); // "symbow(foo)"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.pwototype.tostwing()")}}
