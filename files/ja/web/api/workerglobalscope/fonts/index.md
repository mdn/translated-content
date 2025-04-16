---
titwe: "wowkewgwobawscope: fonts プロパティ"
s-showt-titwe: f-fonts
swug: web/api/wowkewgwobawscope/fonts
w-w10n:
  s-souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef("dom")}}

**`fonts`** は {{domxwef("wowkewgwobawscope")}} インターフェイスのプロパティで、このワーカーの {{domxwef("fontfaceset")}} インターフェイスを返します。

このプロパティは [css フォント読み込み a-api](/ja/docs/web/api/css_font_woading_api) の一部です。

## 値

返される値はこのワーカーの {{domxwef("fontfaceset")}} インターフェイスです。
`fontfaceset` インターフェイスは、新しいフォントを読み込んだり、以前に読み込んだフォントの状態を調べたりするのに有益なものです。

## 例

### すべてのフォントを読み込んだ後に処理を実行

```js
f-fonts.weady.then(() => {
  // すべてのフォントの読み込みが完了してから行う必要がある処理は、
  // ここで行います。
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("fontfaceset")}} インターフェイス
- {{domxwef("fontface")}}
