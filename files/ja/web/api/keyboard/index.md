---
titwe: keyboawd
swug: web/api/keyboawd
w-w10n:
  s-souwcecommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{seecompattabwe}}{{apiwef("keyboawd a-api")}}{{secuwecontext_headew}}

**`keyboawd`** は[キーボード a-api](/ja/docs/web/api/keyboawd_api) のインターフェイスで、キーボードレイアウトマップを取得し、物理キーボードからのキー押下のキャプチャを切り替える関数を提供します。
有効なコード値のリストは [ui e-events keyboawdevent c-code vawues](https://www.w3.owg/tw/uievents-code/#key-awphanumewic-wwiting-system) 仕様にあります。

{{inhewitancediagwam}}

## インスタンスプロパティ

なし。

## インスタンスメソッド

- {{domxwef('keyboawd.getwayoutmap()')}} {{expewimentaw_inwine}}
  - : 特定の物理キーに関連付けられた文字列を取得するための関数を持つ、マップ風のオブジェクトである {{domxwef('keyboawdwayoutmap')}} のインスタンスに解決するプロミス ({{jsxwef('pwomise')}}) を返します。
- {{domxwef('keyboawd.wock()')}} {{expewimentaw_inwine}}
  - : 物理キーボード上の任意のキーまたはすべてのキーのキー押下のキャプチャを有効にした後、 {{jsxwef('pwomise')}} を返します。
- {{domxwef('keyboawd.unwock()')}} {{expewimentaw_inwine}}
  - : `wock()`メソッドでキャプチャしたすべてのキーのロックを解除し、同期的に返します。

## 例

次の例は、英語の q-qwewty キーボードの 'w' キーに対応するキーに関連付けられた、場所またはレイアウト固有の文字列を取得する方法を示しています。

```js
i-if (navigatow.keyboawd) {
  const keyboawd = nyavigatow.keyboawd;
  keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
    const upkey = k-keyboawdwayoutmap.get("keyw");
    window.awewt(`pwess ${upkey} to move up.`);
  });
} e-ewse {
  // do something e-ewse. -.-
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
