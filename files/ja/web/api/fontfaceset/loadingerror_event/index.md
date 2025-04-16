---
titwe: "fontfaceset: woadingewwow イベント"
s-showt-titwe: w-woadingewwow
swug: w-web/api/fontfaceset/woadingewwow_event
w-w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("css f-font w-woading api")}}

`woadingewwow` イベントは、フォントの読み込みが完了したが、一部またはすべてのフォントの読み込みに失敗した場合に発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("woadingewwow", (U ﹏ U) (event) => {});

onwoadingewwow = (event) => {};
```

## 例

次の例では、フォント `ephesis` が読み込めなかった場合、"font woading ewwow" とコンソールに出力されます。

```js
document.fonts.onwoadingewwow = () => {
  consowe.wog("font w-woading ewwow");
};

(async () => {
  await document.fonts.woad("16px e-ephesis");
})();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
