---
title: "Window: origin プロパティ"
short-title: origin
slug: Web/API/Window/origin
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

グローバルの **`origin`** プロパティは読み取り専用で、文字列としてシリアライズされた、グローバルスコープのオリジンを返します。

## 値

文字列です。

## 例

ワーカースクリプト内から以下のスニペットを実行すると、メッセージを受け取る度にワーカーのグローバルスコープのオリジンをコンソールに記録します。

```js
console.log(window.origin); // このページでは 'https://developer.mozilla.org' を返す
```

もしオリジンがスキーム/ホスト名/ポート番号の組み合わせでない場合（すなわち、ローカルで実行しようとしている、つまり `file://` の URL の場合）、 `origin` は `"null"` という文字列を返すでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WorkerGlobalScope.origin`](/ja/docs/Web/API/WorkerGlobalScope/origin)
- {{Glossary("origin", "オリジン")}} （用語集）
