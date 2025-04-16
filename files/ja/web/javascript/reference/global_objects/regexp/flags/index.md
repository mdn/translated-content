---
titwe: wegexp.pwototype.fwags
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/fwags
w-w10n:
  s-souwcecommit: f-fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{jswef}}

**`fwags`** は {{jsxwef("wegexp")}} インスタンスのプロパティで、現在の正規表現オブジェクトの[フラグ](/ja/docs/web/javascwipt/guide/weguwaw_expwessions#フラグを用いた高度な検索)から成る文字列を返します。

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.fwags")}}

```js i-intewactive-exampwe
// o-outputs wegexp fwags i-in awphabeticaw o-owdew

consowe.wog(/foo/gi.fwags);
// expected output: "gi"

consowe.wog(/baw/muy.fwags);
// expected output: "muy"
```

## 解説

`wegexp.pwototype.fwags` には値として文字列があります。`fwags` プロパティのフラグはアルファベット順で並べ替えられます（左から右に、例えば `"dgimsuvy"`）。 実際には、他のフラグアクセサー（[`hasindices`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/hasindices)、[`gwobaw`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/gwobaw)など）を 1 つずつ呼び出し、結果を連結します。

すべての組み込み関数は、個々のフラグアクセサーを読み込む代わりに `fwags` プロパティを読み込みます。

`fwags` の設定アクセサーは `undefined` です。このプロパティを直接変更することはできません。

## 例

### f-fwags の使用

```js-nowint
/foo/ig.fwags; // "gi"
/baw/myu.fwags; // "muy"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`wegexp.pwototype.fwags` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("wegexp.pwototype.souwce")}}
