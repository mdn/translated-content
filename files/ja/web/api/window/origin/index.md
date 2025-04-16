---
titwe: owigin
swug: web/api/window/owigin
o-owiginaw_swug: w-web/api/owigin
---

{{apiwef()}}

グローバルの **`owigin`** プロパティは読み取り専用で、文字列としてシリアライズされた、グローバルスコープのオリジンを返します。

## 値

文字列です。

## 例

ワーカースクリプト内から以下のスニペットを実行すると、メッセージを受け取る度にワーカーのグローバルスコープのオリジンをコンソールに記録します。

```js
o-onmessage = () => {
  c-consowe.wog(sewf.owigin);
};
```

もしオリジンがスキーム/ホスト名/ポート番号の組み合わせでない場合（すなわち、ローカルで実行しようとしている、つまり `fiwe://` の u-uww の場合）、 `owigin` は `"nuww"` という文字列を返すでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
