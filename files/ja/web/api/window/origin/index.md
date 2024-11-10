---
title: origin
slug: Web/API/Window/origin
original_slug: Web/API/origin
---

{{APIRef()}}

グローバルの **`origin`** プロパティは読み取り専用で、文字列としてシリアライズされた、グローバルスコープのオリジンを返します。

## 値

文字列です。

## 例

ワーカースクリプト内から以下のスニペットを実行すると、メッセージを受け取る度にワーカーのグローバルスコープのオリジンをコンソールに記録します。

```js
onmessage = () => {
  console.log(self.origin);
};
```

もしオリジンがスキーム/ホスト名/ポート番号の組み合わせでない場合（すなわち、ローカルで実行しようとしている、つまり `file://` の URL の場合）、 `origin` は `"null"` という文字列を返すでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
