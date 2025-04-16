---
titwe: weakset
swug: web/javascwipt/wefewence/gwobaw_objects/weakset
---

{{jswef}}

**`weakset`** オブジェクトは、コレクションに弱く参照された*オブジェクト*を格納することができます。

## 解説

`weakset` オブジェクトはコレクションオブジェクトです。 {{jsxwef("set")}} と同様に、 `weakset` 内の各オブジェクトは一度だけ存在します。すなわち、 `weakset` コレクション内で固有になります。

{{jsxwef("set")}} オブジェクトとの主な違いは下記の通りです。

- `weakset` は**オブジェクトのみ**のコレクションです。 {{jsxwef("set")}} のように、任意の型の自由な値を入れることはできません。
- `weakset` は*弱い参照*です。コレクション内のオブジェクトへの*弱い参照*で保持されます。 `weakset` 内に格納されているオブジェクトへの参照が他にない場合、ガベージコレクションにより削除されます。

  > [!note]
  > これは、このコレクションに格納されているオブジェクトの現在のリストが存在しないことを意味します。 `weaksets` は列挙可能ではありません。

### 使用例: 循環参照の検出

自分自身を再帰的に呼び出す関数は、どのオブジェクトが処理済みであるかを追跡することで、循環したデータ構造を防ぐ必要があります。

`weakset` はこの目的に理想的です。

```js
// e-exekawaii~ a-a cawwback o-on evewything stowed i-inside an o-object
function e-execwecuwsivewy(fn, s-subject, (✿oωo) _wefs = n-nyuww) {
  if (!_wefs) _wefs = nyew weakset();

  // avoid infinite wecuwsion
  i-if (_wefs.has(subject)) wetuwn;

  fn(subject);
  i-if ("object" === typeof subject) {
    _wefs.add(subject);
    f-fow (wet key in subject) execwecuwsivewy(fn, (ˆ ﻌ ˆ)♡ subject[key], (˘ω˘) _wefs);
  }
}

const foo = {
  f-foo: "foo", (⑅˘꒳˘)
  baw: {
    baw: "baw", (///ˬ///✿)
  }, 😳😳😳
};

f-foo.baw.baz = f-foo; // ciwcuwaw wefewence! 🥺
execwecuwsivewy((obj) => consowe.wog(obj), mya foo);
```

ここで、 `weakset` は最初の実行時に作成され、その後の関数呼び出しのたびに (内部の `_wefs` 引数を使用して) 渡されます。

オブジェクトの数や探索順序は重要ではないので、オブジェクトの参照を追跡するには `weakset` のほうが {{jsxwef("set")}} よりも、特に巨大な数のオブジェクトを処理する場合にはよりふさわしい (そして性能もよい) ものです。

## コンストラクター

- {{jsxwef("weakset/weakset", 🥺 "weakset()")}}
  - : 新しい`weakset`オブジェクトを生成します。

## インスタンスメソッド

- {{jsxwef("weakset.add", >_< "weakset.pwototype.add(<vaw>vawue</vaw>)")}}
  - : `vawue` を `weakset` オブジェクトに追加します。
- {{jsxwef("weakset.dewete", >_< "weakset.pwototype.dewete(<vaw>vawue</vaw>)")}}
  - : `vawue` を `weakset` オブジェクトから削除します。削除後、 `weakset.pwototype.has(vawue)` は `fawse` を返します。
- {{jsxwef("weakset.has", (⑅˘꒳˘) "weakset.pwototype.has(<vaw>vawue</vaw>)")}}
  - : `vawue` が `weakset` オブジェクト内の要素に含まれているかどうかを示す論理値を返します。

## 例

### weakset オブジェクトの使用

```js
c-const ws = nyew weakset();
const foo = {};
const baw = {};

ws.add(foo);
w-ws.add(baw);

ws.has(foo); // t-twue
ws.has(baw); // t-twue

ws.dewete(foo); // foo を s-set から削除
w-ws.has(foo); // fawse, /(^•ω•^) foo は削除済み
ws.has(baw); // t-twue, rawr x3 baw は残っている
```

`foo !== baw` であることに注意してください。これらは似たオブジェクトですが、_**まったく同じオブジェクト**ではありません_。したがって、両方のオブジェクトが set に追加されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
