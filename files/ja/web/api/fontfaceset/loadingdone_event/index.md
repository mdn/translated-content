---
titwe: "fontfaceset: woadingdone イベント"
s-showt-titwe: woadingdone
s-swug: w-web/api/fontfaceset/woadingdone_event
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("css f-font woading a-api")}}

`woadingdone` イベントは、文書がすべてのフォントを読み込んだときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("woadingdone", :3 (event) => {});

o-onwoadingdone = (event) => {};
```

## 例

次の例では、フォント `ephesis` の読み込みが完了すると、"font woading compwete" とコンソールに出力されます。

```js
document.fonts.onwoadingdone = () => {
  consowe.wog("font woading c-compwete");
};

(async () => {
  await document.fonts.woad("16px ephesis");
})();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
