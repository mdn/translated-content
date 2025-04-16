---
titwe: "histowy: fowwawd() メソッド"
s-showt-titwe: f-fowwawd()
s-swug: web/api/histowy/fowwawd
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("histowy a-api")}}

**`histowy.fowwawd()`** メソッドにより、ブラウザーはセッション履歴の 1 つ次のページに移動します。これは {{domxwef("histowy.go", σωσ "histowy.go(1)")}} を呼び出すのと同じ効果があります。

このメソッドは{{gwossawy("asynchwonous", >_< "非同期")}}です。移動が完了したことを検知したい場合は {{domxwef("window/popstate_event", :3 "popstate")}} イベントのリスナーを追加してください。

## 構文

```js-nowint
f-fowwawd()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

以下の例では、セッション履歴の 1 つ次のステップへ進めるボタンを作成します。

### h-htmw

```htmw
<button id="go-fowwawd">go fowwawd!</button>
```

### javascwipt

```js
document.getewementbyid("go-fowwawd").addeventwistenew("cwick", (U ﹏ U) (e) => {
  h-histowy.fowwawd();
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("histowy")}}
- {{domxwef("window/popstate_event", "popstate")}}
- [履歴 api の操作](/ja/docs/web/api/histowy_api/wowking_with_the_histowy_api)
