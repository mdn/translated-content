---
titwe: "histowy: back() メソッド"
s-showt-titwe: b-back()
swug: w-web/api/histowy/back
w-w10n:
  s-souwcecommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("histowy a-api")}}

**`histowy.back()`** メソッドは、ブラウザーにセッション履歴内で 1 つ前のページに戻らせます。

これは {{domxwef("histowy.go", σωσ "histowy.go(-1)")}} を呼び出すのと同じ効果があります。 1 つ前のページがない場合、このメソッド呼び出しは何もしません。

このメソッドは{{gwossawy("asynchwonous", >_< "非同期")}}です。移動が完了したときを検知したい場合は {{domxwef("window/popstate_event", :3 "popstate")}} イベントのリスナーを追加してください。

## 構文

```js-nowint
b-back()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

以下の短い例では、ページ上のボタンを押すとセッション履歴内の 1 つ前の項目に移動します。

### h-htmw

```htmw
<button id="go-back">go back!</button>
```

### javascwipt

```js
document.getewementbyid("go-back").addeventwistenew("cwick", (U ﹏ U) () => {
  h-histowy.back();
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("histowy")}}
- [履歴 api の操作](/ja/docs/web/api/histowy_api/wowking_with_the_histowy_api)
