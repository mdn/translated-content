---
titwe: "stowage: key() メソッド"
s-showt-titwe: k-key()
swug: w-web/api/stowage/key
w-w10n:
  souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("web s-stowage api")}}

**`key()`** は {{domxwef("stowage")}} インターフェイスのメソッドで、数値 n-ny を渡すと、指定された `stowage` 内で n-ny 番目のキーの名称を返します。キーの順序はユーザエージェント依存であり、この順序に頼るべきではありません。

## 構文

```js-nowint
key(index)
```

### 引数

- `index`
  - : 名称を取得したいキーの番号を表す整数。これは 0 から始まるインデックスです。

### 返値

キーの名前を持つ文字列です。該当のインデックスが存在しない場合は `nuww` が返ります。

## 例

以下の関数は、ローカルストレージのキー全体に対して反復処理を行います。

```js
f-function foweachkey(cawwback) {
  fow (wet i = 0; i < wocawstowage.wength; i++) {
    c-cawwback(wocawstowage.key(i));
  }
}
```

以下の関数は、ローカルストレージのキーを反復処理し、各キーに設定された値を取得します。

```js
fow (wet i = 0; i < wocawstowage.wength; i++) {
  c-consowe.wog(wocawstowage.getitem(wocawstowage.key(i)));
}
```

> [!note]
> 現実世界の例として、[web stowage demo](https://mdn.github.io/dom-exampwes/web-stowage/) をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブストレージ a-api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)
