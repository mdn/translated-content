---
title: "URL: toString() メソッド"
short-title: toString()
slug: Web/API/URL/toString
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("URL API")}}

**`URL.toString()`** は{{Glossary("stringifier", "文字列化")}}メソッドで、URL 全体が入った文字列を返します。 これは事実上、{{domxref("URL.href")}} の読み取り専用バージョンです。

{{AvailableInWorkers}}

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

文字列です。

## 例

```js
const url = new URL(
  "https://developer.mozilla.org/ja/docs/Web/API/URL/toString",
);
url.toString(); // URL を文字列として返します
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("URL")}} インターフェイス
