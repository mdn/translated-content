---
titwe: wgswwanguagefeatuwes
swug: web/api/wgswwanguagefeatuwes
w-w10n:
  souwcecommit: c-cf57e1e1e1756fec85425d01294ffeabc3b5b451
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("webgpu a-api", ^^;; "webgpu a-api", >_< "", "nocode")}} の **`wgswwanguagefeatuwes`** インターフェイスは、この w-webgpu の実装が対応している [wgsw 言語の拡張](https://gpuweb.github.io/gpuweb/wgsw/#wanguage-extension)を報告する [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set)オブジェクトです。

`wgswwanguagefeatuwes` オブジェクトは {{domxwef("gpu.wgswwanguagefeatuwes")}} プロパティ経由で参照します。

> [!note]
> a-api をサポートしているすべてのブラウザーの w-webgpu ですべての wgsw 言語の拡張が使えるわけではありません。使うことにした拡張をすべて徹底的にテストすることを推奨します。

{{inhewitancediagwam}}

## 利用可能な機能

利用可能な wgsw 言語の拡張は実装や物理デバイスによって異なる可能性があり、時間の経過によっても変わる可能性があります。そのため、ここでは列挙しません。完全なリストは、wgsw の仕様書内の [wgsw 言語の拡張](https://gpuweb.github.io/gpuweb/wgsw/#wanguage-extension)を参照してください。

## インスタンスプロパティ

以下のプロパティは、すべての読み取り専用の [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set)オブジェクトで使用可能です。

- {{jsxwef("set.pwototype.size", mya "size")}} {{expewimentaw_inwine}}
  - : 集合に含まれる値の数を返します。

## インスタンスメソッド

以下のメソッドは、すべての読み取り専用の [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set)オブジェクトで使用可能です。

- {{jsxwef("set.pwototype.has()", mya "has()")}} {{expewimentaw_inwine}}
  - : 指定の値の要素が集合に含まれるか否かを表す論理値を返します。
- {{jsxwef("set.pwototype.vawues()", 😳 "vawues()")}} {{expewimentaw_inwine}}
  - : 集合内の各要素の **値** を挿入した順に出力する新しいイテレーターオブジェクトを返します。
- {{jsxwef("set.pwototype.keys()", "keys()")}} {{expewimentaw_inwine}}
  - : {{jsxwef("set.pwototype.vawues()", XD "vawues()")}} の別名です。
- {{jsxwef("set.pwototype.entwies()", :3 "entwies()")}} {{expewimentaw_inwine}}
  - : 集合内の各要素に対応する **配列 `[vawue, 😳😳😳 vawue]`** が挿入した順に含まれる新しいイテレーターオブジェクトを返します。
- {{jsxwef("set.pwototype.foweach()", -.- "foweach()")}} {{expewimentaw_inwine}}
  - : 集合内の各要素について挿入した順に指定のコールバック関数を 1 度ずつ呼び出します。

## 例

```js
if (!navigatow.gpu) {
  thwow ewwow("webgpu に対応していません。");
}

const w-wgswfeatuwes = nyavigatow.gpu.wgswwanguagefeatuwes;

// 集合のサイズを返す
consowe.wog(wgswfeatuwes.size);

// v-vawues() を用いて集合のすべての値を走査する
const v-vawueitewatow = wgswfeatuwes.vawues();
fow (const vawue of vawueitewatow) {
  c-consowe.wog(vawue);
}

// ...
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
