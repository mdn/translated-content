---
title: "Translator: translate() メソッド"
short-title: translate()
slug: Web/API/Translator/translate
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

**`translate()`** は {{domxref("Translator")}} インターフェイスのメソッドで、入力文字列の翻訳結果を返します。

## 構文

```js-nolint
translate(input)
translate(input, options)
```

### 引数

- `input`
  - : 翻訳されるテキストを表す文字列です。
- `options` {{optional_inline}}
  - : `translate()` 操作の構成オプションを指定するオブジェクト。利用可能な値は次の通りです。
    - `signal`
      - : {{domxref("AbortSignal")}} オブジェクトのインスタンス。これを使用すると、関連付けられた {{domxref("AbortController")}} を通じて `translate()` 操作を中止することができます。

### 返値

生成された翻訳が含まれている文字列で履行される {{jsxref("Promise")}} です。

### 例外

- `AbortError` {{domxref("DOMException")}}
  - : `Translator` がすでに破棄されていた場合（{{domxref("Translator.destroy()")}} が呼び出されていた場合、または作成後にその中止の [`signal`](/ja/docs/Web/API/Translator/create_static#signal) によって中止されていた場合）に発生します。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 現在の {{domxref("Document")}} がまだアクティブでない場合に発生します。
- {{domxref("QuotaExceededError")}}
  - : 翻訳操作が利用できる {{domxref("Translator.inputQuota", "inputQuota")}} を超えた場合に発生します。

## 例

### 基本的な `translate()` の使い方

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const translation = await translator.translate(myTextString);
console.log(translation);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [翻訳と言語検出 API の使用](/ja/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
