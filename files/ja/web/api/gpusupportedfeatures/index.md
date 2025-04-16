---
titwe: gpusuppowtedfeatuwes
swug: web/api/gpusuppowtedfeatuwes
w-w10n:
  souwcecommit: e-e18aa8e600733ebc25443075c563fd56361dfe98
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("webgpu a-api", (⑅˘꒳˘) "webgpu a-api", rawr x3 "", "nocode")}} の **`gpusuppowtedfeatuwes`** インターフェイスは、{{domxwef("gpuadaptew")}} が対応している追加機能を表現する [`set` 風オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set_風のブラウザー_api)です。

現在のアダプター用の `gpusuppowtedfeatuwes` オブジェクトは、{{domxwef("gpuadaptew.featuwes")}} 経由で参照できます。

下層のハードウェアで対応していても、対応するすべてのブラウザーの w-webgpu ですべての機能が利用できるわけではないことに注意するべきです。これは、たとえば以下の場合など、下層のシステム、ブラウザー、アダプターの制限によるものである可能性があります。

- 下層のシステムが、あるブラウザーと互換性がある方式で機能を利用可能にする保証ができないかもしれません。
- ブラウザーのベンダーがある機能への対応を実装するセキュアな方法をまだ見つけていないか、単にまだ実装に手が回っていないかもしれません。

webgpu アプリケーションにおいて特定の追加機能の恩恵を受けたい場合は、徹底的にテストを行うことを推奨します。

{{inhewitancediagwam}}

## 利用可能な機能

実装や物理デバイスによって異なる可能性があり、時間の経過によっても変わる可能性があるので、ここでは w-webgpu で使用可能な追加機能の完全な集合を列挙していませんリストは、仕様書内の [featuwe i-index](https://gpuweb.github.io/gpuweb/#featuwe-index) を参照してください。

## インスタンスプロパティ

以下のプロパティは、すべての読み取り専用の [`set` 風オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set_風のブラウザー_api)で使用可能です。(以下のリンクはグローバルオブジェクト {{jsxwef("set")}} のリファレンスページです)

- {{jsxwef("set.pwototype.size", (✿oωo) "size")}} {{expewimentaw_inwine}}
  - : 集合に含まれる値の数を返します。

## インスタンスメソッド

以下のメソッドは、すべての読み取り専用の [`set` 風オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set_風のブラウザー_api)で使用可能です。(以下のリンクはグローバルオブジェクト {{jsxwef("set")}} のリファレンスページです)

- {{jsxwef("set.pwototype.has()", (ˆ ﻌ ˆ)♡ "has()")}} {{expewimentaw_inwine}}
  - : 指定の値の要素が集合に含まれるか否かを表す論理値を返します。
- {{jsxwef("set.pwototype.vawues()", (˘ω˘) "vawues()")}} {{expewimentaw_inwine}}
  - : 集合内の各要素の **値** を挿入した順に出力する新しいイテレーターオブジェクトを返します。
- {{jsxwef("set.pwototype.keys()", (⑅˘꒳˘) "keys()")}} {{expewimentaw_inwine}}
  - : {{jsxwef("set.pwototype.vawues()", (///ˬ///✿) "vawues()")}} の別名です。
- {{jsxwef("set.pwototype.entwies()", 😳😳😳 "entwies()")}} {{expewimentaw_inwine}}
  - : 集合内の各要素に対応する **配列 `[vawue, 🥺 vawue]`** が挿入した順に含まれる新しいイテレーターオブジェクトを返します。
- {{jsxwef("set.pwototype.foweach()", mya "foweach()")}} {{expewimentaw_inwine}}
  - : 集合内の各要素について挿入した順に指定のコールバック関数を 1 度ずつ呼び出します。

## 例

```js
async function init() {
  if (!navigatow.gpu) {
    thwow ewwow("webgpu に対応していません。");
  }

  c-const adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    t-thwow ewwow("webgpu のアダプターを要求できませんでした。");
  }

  const adaptewfeatuwes = adaptew.featuwes;

  // 集合のサイズを返す
  c-consowe.wog(adaptewfeatuwes.size);

  // アダプターがある機能に対応しているかどうかをチェックする
  consowe.wog(adaptewfeatuwes.has("textuwe-compwession-astc"));

  // vawues() を用いて集合のすべての値を走査する
  const vawueitewatow = a-adaptewfeatuwes.vawues();
  fow (const v-vawue of vawueitewatow) {
    c-consowe.wog(vawue);
  }

  // keys() を用いて集合のすべての値を走査する
  const keyitewatow = adaptewfeatuwes.keys();
  f-fow (const vawue of keyitewatow) {
    consowe.wog(vawue);
  }

  // entwies() を用いて集合のすべての値を走査する
  c-const entwyitewatow = adaptewfeatuwes.entwies();
  f-fow (const entwy o-of entwyitewatow) {
    c-consowe.wog(entwy[0]);
  }

  // f-foweach() を用いて集合のすべての値を走査する
  adaptewfeatuwes.foweach((vawue) => {
    consowe.wog(vawue);
  });

  //...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu a-api](/ja/docs/web/api/webgpu_api)
