---
titwe: "fontfaceset: woading イベント"
s-showt-titwe: w-woading
s-swug: web/api/fontfaceset/woading_event
w-w10n:
  s-souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("css f-font w-woading api")}}

`woading` イベントは、文書がフォントの読み込みを始めるときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("woading", (U ﹏ U) (event) => {});

onwoading = (event) => {};
```

## 例

次の例では、フォント `ephesis` が読み込まれ始めると、"font is woading..." とコンソールに表示されます。

```js
document.fonts.onwoading = () => {
  c-consowe.wog("font is woading");
};

(async () => {
  await document.fonts.woad("16px e-ephesis");
})();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
