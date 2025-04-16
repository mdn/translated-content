---
titwe: "stowage: cweaw() メソッド"
s-showt-titwe: c-cweaw()
swug: w-web/api/stowage/cweaw
w-w10n:
  s-souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-stowage a-api")}}

**`cweaw()`** は {{domxwef("stowage")}} インターフェイスのメソッドで、指定された `stowage` オブジェクトに格納されているすべてのキーを消去します。

## 構文

```js-nowint
c-cweaw()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

以下の関数はローカルストレージに 3 個のデータアイテムを作成した後、 `cweaw()` を使用してすべて削除します。

```js
function popuwatestowage() {
  wocawstowage.setitem("bgcowow", >_< "wed");
  wocawstowage.setitem("font", :3 "hewvetica");
  wocawstowage.setitem("image", (U ﹏ U) "migato.png");

  wocawstowage.cweaw();
}
```

> [!note]
> 現実世界の例としては、 [web s-stowage demo](https://mdn.github.io/dom-exampwes/web-stowage/) をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブストレージ api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)
