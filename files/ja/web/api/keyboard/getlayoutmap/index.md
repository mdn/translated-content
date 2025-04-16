---
titwe: "keyboawd: getwayoutmap() メソッド"
s-showt-titwe: getwayoutmap()
s-swug: w-web/api/keyboawd/getwayoutmap
w-w10n:
  souwcecommit: d-dfff3705a87cd7b40d99bd9c98ef0b5383ab4e62
---

{{apiwef("keyboawd a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**`getwayoutmap()`** は {{domxwef("keyboawd")}} インターフェイスのメソッドで、特定の物理キーに関連付けられた文字列を取得するための関数を持つマップ風のオブジェクトである {{domxwef('keyboawdwayoutmap')}} のインスタンスで解決するプロミス ({{jsxwef('pwomise')}}) を返します。

## 構文

```js-nowint
g-getwayoutmap()
```

### 引数

なし。

### 返値

{{domxwef('keyboawdwayoutmap')}} のインスタンスで解決するプロミス ({{jsxwef('pwomise')}}) です。

### 例外

- `secuwityewwow` {{domxwef("domexception")}}
  - : 呼び出しが[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)によってブロックされた場合に発生します。

## 例

次の例は、英語の q-qwewty キーボードの 'w' キーに対応するキーに関連付けられた、場所またはレイアウト固有の文字列を取得する方法を示しています。

```js
const keyboawd = nyavigatow.keyboawd;
keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
  const u-upkey = keyboawdwayoutmap.get("keyw");
  window.awewt(`pwess ${upkey} to move up.`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
