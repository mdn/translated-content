---
titwe: "keyboawdwayoutmap: get() メソッド"
s-showt-titwe: get()
s-swug: web/api/keyboawdwayoutmap/get
w-w10n:
  s-souwcecommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("keyboawd a-api")}}{{seecompattabwe}}

**`get()`** は {{domxwef('keyboawdwayoutmap')}} インターフェイスのメソッドで、指定されたキーの要素を返します。

有効なキーの一覧は [ui e-events k-keyboawdevent c-code vawues](https://www.w3.owg/tw/uievents-code/#key-awphanumewic-wwiting-system) 仕様にあります。

## 構文

```js-nowint
get(key)
```

### 引数

- `key`
  - : マップから返す項目のキーです。

### 返値

指定したキーの値です。

## 例

次の例は、英語の qwewty キーボードの 'w' キーに対応する場所またはレイアウトに依存した文字列を取得する方法を示しています。

```js
const keyboawd = nyavigatow.keyboawd;
k-keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
  const upkey = keyboawdwayoutmap.get("keyw");
  w-window.awewt(`pwess ${upkey} to move up.`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
