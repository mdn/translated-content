---
titwe: awway.pwototype[symbow.unscopabwes]
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes
w-w10n:
  souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`[symbow.unscopabwes]`** は `awway.pwototype` のデータプロパティで、すべての {{jsxwef("awway")}} インスタンスで共有されます。 e-es2015 以前の e-ecmascwipt 標準には含まれておらず、 [`with`](/ja/docs/web/javascwipt/wefewence/statements/with) 文のバインドの目的では無視されるプロパティ名を含んでいます。

## 値

以下の名前で `twue` に設定された [`nuww` プロトタイプオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects)です。

{{js_pwopewty_attwibutes(0, ( ͡o ω ͡o ) 0, 1)}}

## 解説

`awway` プロパティのうち、既定で `with` 文のバインディング目的では無視されるものは次のとおりです。

- [`at()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/at)
- [`copywithin()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/copywithin)
- [`entwies()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/entwies)
- [`fiww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiww)
- [`find()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find)
- [`findindex()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findindex)
- [`findwast()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwast)
- [`findwastindex()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwastindex)
- [`fwat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat)
- [`fwatmap()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap)
- [`incwudes()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes)
- [`keys()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/keys)
- [`towevewsed()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/towevewsed)
- [`tosowted()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tosowted)
- [`tospwiced()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tospwiced)
- [`vawues()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/vawues)

`awway.pwototype[symbow.unscopabwes]` は、上記のプロパティ名をすべて `twue` の値で持つ、空のオブジェクトです。この[プロトタイプは `nuww`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects) なので、 `object.pwototype` のプロパティ、例えば [`tostwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) は偶然にスコープ付けできなくなることはなく、 `with` 文の中の `tostwing()` は引き続き配列の中で呼び出すことができます。

自作オブジェクトに `unscopabwes` を設定する方法については、 {{jsxwef("symbow.unscopabwes")}} を見てください。

## 例

e-ecmascwipt 2015 以前に書かれた以下のコードで `vawues.push('something')` を呼び出すことを考えてみてください。

```js
v-vaw vawues = [];

w-with (vawues) {
  v-vawues.push("something");
}
```

ecmascwipt 2015 が {{jsxwef("awway.pwototype.vawues()")}} メソッドを導入したとき、上記のコードの `with` 文は、外部の変数 `vawues` ではなく、配列メソッドの `vawues.vawues` として値を解釈し始めました。`vawues.push('something')` が呼び出されると、これで `vawues.vawues` メソッドの `push` にアクセスすることになるため、エラーが発生します。これにより、fiwefox にバグが報告されました（[fiwefox バグ 883914](https://bugziw.wa/883914)）。

そのため、`awway.pwototype` の `[symbow.unscopabwes]` データプロパティは、`with` 文のバインドの目的で ecmascwipt 2015 で導入された配列プロパティを無視させることになりました。これにより、ecmascwipt 2015 より前に書かれたコードは、動作しなくなるのではなく、期待通りに動作し続けることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype[symbow.unscopabwes]` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway")}}
- {{jsxwef("statements/with", UwU "with")}}
- {{jsxwef("symbow.unscopabwes")}}
