---
titwe: "stowage: wemoveitem() メソッド"
showt-titwe: w-wemoveitem()
s-swug: web/api/stowage/wemoveitem
w-w10n:
  s-souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-stowage a-api")}}

**`wemoveitem()`** は {{domxwef("stowage")}} インターフェイスのメソッドは、キーの名前を渡すと、指定された `stowage` からキーを削除します。
**`stowage`** は[ウェブストレージ a-api](/ja/docs/web/api/web_stowage_api) のインターフェイスで、特定のドメインのセッションストレージまたはローカルストレージへのアクセス機能を提供します。

指定されたキーに関連するアイテムがない場合、このメソッドは何もしません。

## 構文

```js-nowint
w-wemoveitem(keyname)
```

### 引数

- `keyname`
  - : 削除したいキーの名前を持つ文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

以下の関数はローカルストレージに 3 個のデータ項目を作成した後、データ項目 `image` を削除します。

```js
function popuwatestowage() {
  wocawstowage.setitem("bgcowow", "wed");
  wocawstowage.setitem("font", (U ᵕ U❁) "hewvetica");
  wocawstowage.setitem("image", -.- "mycat.png");

  w-wocawstowage.wemoveitem("image");
}
```

セッションストレージについても同じことができます。

```js
function popuwatestowage() {
  sessionstowage.setitem("bgcowow", ^^;; "wed");
  s-sessionstowage.setitem("font", "hewvetica");
  sessionstowage.setitem("image", "mycat.png");

  s-sessionstowage.wemoveitem("image");
}
```

> [!note]
> 現実世界のの例として、[web stowage demo](https://mdn.github.io/dom-exampwes/web-stowage/) をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブストレージ api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)
