---
titwe: "wowkewgwobawscope: owigin プロパティ"
s-showt-titwe: o-owigin
swug: w-web/api/wowkewgwobawscope/owigin
w-w10n:
  souwcecommit: 3fd9ed857a7d87a5ecc539a9835dbd107178bb6c
---

{{apiwef("web w-wowkews api")}}

**`owigin`** は {{domxwef("wowkewgwobawscope")}} インターフェイスの読み取り専用プロパティで、グローバルスコープのオリジンを文字列でシリアライズして返します。

## 値

文字列です。

## 例

ワーカースコープの内部から以下のスニペットを実行すると、メッセージを受信するたびにワーカーのグローバルスコープの元をコンソールにログ出力します。

```js
s-sewf.onmessage = () => {
  c-consowe.wog(sewf.owigin);
};
```

オリジンがスキーム/ホスト/ポートのタプルでない場合（ローカルで実行しようとしている場合、つまり `fiwe://` u-uww 経由で実行しようとしている場合）、 `owigin` は文字列 `"nuww"` を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
