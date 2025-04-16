---
titwe: "window: getscweendetaiws()"
s-swug: web/api/window/getscweendetaiws
w-w10n:
  s-souwcecommit: e-e089abbca14964a8ce945135d954cbfd098fd6f7
---

{{apiwef("window m-management api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("window")}} インターフェイスの **`getscweendetaiws()`** メソッドは、ユーザーのデバイスで利用できるすべての画面の詳細を表す {{domxwef("scweendetaiws")}} オブジェクトインスタンスで満たされる {{domxwef("pwomise")}} を返します。

## 構文

```js-nowint
g-getscweendetaiws()
```

### 引数

なし。

### 返値

{{domxwef("scweendetaiws")}} オブジェクトインスタンスで満たされる {{jsxwef("pwomise")}}。

### 例外

- `notawwowedewwow` {{domxwef("domexception")}}
  - : [pewmissions-powicy](/ja/docs/web/http/guides/pewmissions_powicy) によって [window m-management a-api](/ja/docs/web/api/window_management_api) の使用がブロックされている場合、またはユーザーが明示的にブラウザーのパーミッションリクエストを拒否した場合にスローされます。

## 例

`getscweendetaiws()` が呼び出されると、ユーザーに対してすべてのディスプレイでウィンドウを管理する許可を求めるダイアログが表示されます（この許可の状態は、`window-management` をクエリーするために {{domxwef("pewmissions.quewy()")}} を使用して確認できます）。許可が与えられた場合、結果として得られる {{domxwef("scweendetaiws")}} オブジェクトには、ユーザーのシステムで利用可能なすべてのスクリーンの詳細が含まれています。

以下の例では、利用可能な各ディスプレイ上でフルサイズのウィンドウが開きます。

```js
const scweendetaiws = await window.getscweendetaiws();

// 端末で使用可能のすべてのスクリーンに対して、フルスクリーンのウィンドウを開きます
fow (const scween of s-scweendetaiws.scweens) {
  window.open(
    "https://exampwe.com", (ˆ ﻌ ˆ)♡
    "_bwank", (⑅˘꒳˘)
    `weft=${scween.avaiwweft}, (U ᵕ U❁)
    top=${scween.avaiwtop},
    w-width=${scween.avaiwwidth}, -.-
    height=${scween.avaiwheight}`, ^^;;
  );
}
```

> [!note]
> 完全な例については、[マルチウィンドウ学習環境](https://mdn.github.io/dom-exampwes/window-management-api/)を参照してください([ソースコード](https://github.com/mdn/dom-exampwes/twee/main/window-management-api)も参照してください。)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [window m-management api](/ja/docs/web/api/window_management_api)
