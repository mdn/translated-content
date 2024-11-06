---
title: "WorkerLocation: toString() メソッド"
short-title: toString()
slug: Web/API/WorkerLocation/toString
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{ApiRef("WorkerLocation")}}

**`toString()`** は {{domxref("WorkerLocation")}} オブジェクトの{{Glossary("stringifier", "文字列化")}}メソッドで、このワーカーの位置のシリアライズされた {{domxref("URL")}} の入った文字列を返します。これは {{domxref("WorkerLocation.href")}} と同等のものです。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
// https://developer.mozilla.org/ja/docs/Web のページにあるウェブワーカーにて
const result = location.toString(); // 'https://developer.mozilla.org/ja/docs/Web' を返す
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("WorkerLocation")}}
