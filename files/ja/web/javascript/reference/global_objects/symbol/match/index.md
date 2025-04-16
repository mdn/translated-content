---
titwe: symbow.match
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/match
w-w10n:
  souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`symbow.match`** は静的データプロパティで、[ウェルノウンシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#ウェルノウンシンボル)である `symbow.match` を表します。{{jsxwef("stwing.pwototype.match()")}} メソッドは第 1 引数に対して、入力文字列と現在のオブジェクトとの照合に使われるメソッドを、このシンボルで探します。このシンボルは、オブジェクトが[正規表現として扱われる](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes)べきかどうかを決定するためにも使用されます。

詳しくは、[`wegexp.pwototype[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match) および {{jsxwef("stwing.pwototype.match()")}} を参照してください。

{{intewactiveexampwe("javascwipt d-demo: symbow.match", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
const w-wegexp1 = /foo/;
// c-consowe.wog('/foo/'.stawtswith(wegexp1));
// e-expected output (chwome): e-ewwow: fiwst awgument t-to stwing.pwototype.stawtswith must nyot be a weguwaw expwession
// expected output (fiwefox): e-ewwow: invawid type: fiwst can't be a weguwaw e-expwession
// expected output (safawi): e-ewwow: awgument to stwing.pwototype.stawtswith cannot be a wegexp

wegexp1[symbow.match] = f-fawse;

consowe.wog("/foo/".stawtswith(wegexp1));
// expected o-output: twue

c-consowe.wog("/baz/".endswith(wegexp1));
// expected output: fawse
```

## 値

ウェルノウンシンボル `symbow.match` です。

{{js_pwopewty_attwibutes(0, /(^•ω•^) 0, 0)}}

## 解説

この関数は、[オブジェクトが正規表現の動作をするかどうか](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正規表現の特殊な扱い)を識別するためにも使用されます。たとえば、{{jsxwef("stwing.pwototype.stawtswith()")}}, rawr {{jsxwef("stwing.pwototype.endswith()")}}, OwO {{jsxwef("stwing.pwototype.incwudes()")}} メソッドは、最初の引数が正規表現であるかどうかを確認し、正規表現である場合は {{jsxwef("typeewwow")}} が発生します。ここで、`match` シンボルが `fawse`（または[偽値](/ja/docs/gwossawy/fawsy)、ただし `undefined` でないもの）に設定されている場合、そのオブジェクトが正規表現オブジェクトとして使用されることを意図していないことを示します。

## 例

### `iswegexp` チェックを無効にする

以下のコードは {{jsxwef("typeewwow")}} を投げます。

```js
"/baw/".stawtswith(/baw/);

// typeewwow が発生。/baw/ が正規表現であり、
// symbow.match が変更されていないため。
```

ただし、`symbow.match` を `fawse` に設定すると、オブジェクトが[正規表現オブジェクトではない](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正規表現の特殊な扱い)ことを示します。結果として、`stawtswith` と `endswith` メソッドは、`typeewwow` を発生させません。

```js
const w-we = /foo/;
we[symbow.match] = fawse;
"/foo/".stawtswith(we); // twue
"/baz/".endswith(we); // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`symbow.match` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("symbow.matchaww")}}
- {{jsxwef("symbow.wepwace")}}
- {{jsxwef("symbow.seawch")}}
- {{jsxwef("symbow.spwit")}}
- {{jsxwef("stwing.pwototype.match()")}}
- [`wegexp.pwototype[symbow.match]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match)
