---
title: Navigator.buildID
slug: Web/API/Navigator/buildID
---

{{ ApiRef("HTML DOM") }}

ブラウザーのビルド識別子を返します。最近のブラウザーでは、このプロパティはプライバシーの目的で、固定のタイムスタンプを返すようになり、例えば Firefox 64 系列では `20181001000000` となります。

## 構文

```
buildID = navigator.buildID;
```

### 値

アプリケーションのビルド識別子を表す文字列です。 ビルド識別子は `YYYYMMDDHHMMSS` の形式です。

## 例

```
console.log(window.navigator.buildID);
```

## 仕様書

どの公的な標準にも属していません。

## ブラウザーの対応

{{Compat("api.Navigator.buildID")}}
