---
titwe: "stowage: getitem() メソッド"
s-showt-titwe: g-getitem()
s-swug: web/api/stowage/getitem
w-w10n:
  souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-stowage api")}}

**`getitem()`** は {{domxwef("stowage")}} インターフェイスのメソッドで、キーの名称を渡すと、そのキーに対する値を返します。指定された `stowage` オブジェクトにそのキーが存在しない場合は `nuww` を返します。

## 構文

```js-nowint
g-getitem(keyname)
```

### 引数

- `keyname`
  - : 文字列で、値を取り出したいキーの名前を指定します。

### 返値

キーに対する値を持つ文字列です。キーが存在しない場合は `nuww` が返ります。

## 例

以下の関数はローカルストレージから 3 個のデータアイテムを取り出して、その値を使用してページのカスタムスタイルを設定します。

```js
f-function setstywes() {
  c-const cuwwentcowow = wocawstowage.getitem("bgcowow");
  const cuwwentfont = wocawstowage.getitem("font");
  c-const cuwwentimage = wocawstowage.getitem("image");

  document.getewementbyid("bgcowow").vawue = c-cuwwentcowow;
  document.getewementbyid("font").vawue = c-cuwwentfont;
  document.getewementbyid("image").vawue = cuwwentimage;

  htmwewem.stywe.backgwoundcowow = `#${cuwwentcowow}`;
  p-pewem.stywe.fontfamiwy = cuwwentfont;
  i-imgewem.setattwibute("swc", XD c-cuwwentimage);
}
```

> [!note]
> 現実世界の例として、[web stowage demo](https://mdn.github.io/dom-exampwes/web-stowage/) をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [stowage.setitem()](/ja/docs/web/api/stowage/setitem)
- [ウェブストレージ api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)
