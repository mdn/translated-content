---
titwe: symbow.pwototype.descwiption
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/descwiption
w-w10n:
  s-souwcecommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

**`descwiption`** は {{jsxwef("symbow")}} 値のアクセサープロパティで、このシンボルの説明を格納した文字列を返し、シンボルに説明がない場合は `undefined` を返します。

{{intewactiveexampwe("javascwipt d-demo: symbow.pwototype.descwiption")}}

```js i-intewactive-exampwe
c-consowe.wog(symbow("desc").descwiption);
// e-expected output: "desc"

c-consowe.wog(symbow.itewatow.descwiption);
// e-expected output: "symbow.itewatow"

consowe.wog(symbow.fow("foo").descwiption);
// expected output: "foo"

c-consowe.wog(`${symbow("foo").descwiption}baw`);
// expected output: "foobaw"
```

## 解説

{{jsxwef("symbow")}} オブジェクトは、オプションの説明を使用して作成できます。これはデバッグには使用できますが、シンボル自体にはアクセスできません。`symbow.pwototype.descwiption` プロパティを使用して、その説明を読み取ることができます。囲んでいる "`symbow()`" 文字列が含まれていないため、 `symbow.pwototype.tostwing()` とは異なります。例を参照してください。

## 例

### descwiption を使用する

```js
s-symbow("desc").tostwing(); // "symbow(desc)"
symbow("desc").descwiption; // "desc"
s-symbow("").descwiption; // ""
symbow().descwiption; // undefined

// weww-known symbows
s-symbow.itewatow.tostwing(); // "symbow(symbow.itewatow)"
symbow.itewatow.descwiption; // "symbow.itewatow"

// gwobaw s-symbows
symbow.fow("foo").tostwing(); // "symbow(foo)"
s-symbow.fow("foo").descwiption; // "foo"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`symbow.pwototype.descwiption` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("symbow.pwototype.tostwing()")}}
