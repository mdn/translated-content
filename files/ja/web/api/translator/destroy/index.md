---
title: "Translator: destroy() メソッド"
short-title: destroy()
slug: Web/API/Translator/destroy
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}} {{securecontext_header}}

**`destroy()`** は {{domxref("Translator")}} インターフェイスのメソッドで、呼び出された `Translator` インスタンスに割り当てられたリソースを解放し、そのインスタンスに対するそれ以降のすべての処理を停止します。つまり、この `Translator` に対して行われている、あるいはその後行われるメソッド呼び出しはすべて、`AbortError` を返して失敗します。

`Translator` オブジェクトは、処理する際に多大なリソースを消費するため、使用できなくなった場合に破棄することはが意味があります。

## 構文

```js-nolint
destroy()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 基本的な `destroy()` の使い方

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

// ...

translator.destroy();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [翻訳と言語検出 API の使用](/ja/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
