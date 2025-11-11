---
title: "Navigator: buildID プロパティ"
short-title: buildID
slug: Web/API/Navigator/buildID
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}{{Non-standard_Header}}

ブラウザーのビルド識別子を返します。最近のブラウザーでは、このプロパティはプライバシーの目的で、固定のタイムスタンプを返すようになり、例えば Firefox 64 系列では `20181001000000` となります。

### 値

アプリケーションのビルド識別子を表す文字列です。 ビルド識別子は `YYYYMMDDHHMMSS` の形式です。

## 例

```js
console.log(navigator.buildID);
```

## 仕様書

どの公的な標準にも属していません。

## ブラウザーの互換性

{{Compat}}
