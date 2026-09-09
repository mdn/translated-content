---
title: "Translator: measureInputUsage() メソッド"
short-title: measureInputUsage()
slug: Web/API/Translator/measureInputUsage
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

**`measureInputUsage()`** は {{domxref("Translator")}} インターフェイスのメソッドで、指定されたテキスト入力に対して、翻訳処理によってどの程度の入力クォータが使用されるかを報告します。

## 構文

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### 引数

- `input`
  - : 入力使用状況の測定対象とする入力テキストを表す文字列。
- `options` {{optional_inline}}
  - : `measureInputUsage()` 操作の構成オプションを指定するオブジェクト。取り得る値は次のとおりです。
    - `signal`
      - : {{domxref("AbortSignal")}} オブジェクトのインスタンス。これを使用すると、関連付けられた {{domxref("AbortController")}} を通じて `measureInputUsage()` 操作を中止することができます。

### 返値

指定された入力テキストの {{domxref("Translator.inputQuota", "inputQuota")}} によるクォータを表す数値で履行される {{jsxref("Promise")}} です。

この数値は実装に依存します。{{domxref("Translator.inputQuota", "inputQuota")}} よりも小さい場合、その文字列は翻訳可能です。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : このメソッドの使用が {{httpheader('Permissions-Policy/translator','translator')}} の {{httpheader("Permissions-Policy")}} によってブロックされた場合に発生します。
- `NotReadableError` {{domxref("DOMException")}}
  - : 出力された翻訳が、有害、不正確、意味不明であると検出された場合、例えば、ユーザーエージェントによってフィルターされた場合に、この例外が発生します。
- `UnknownError` {{domxref("DOMException")}}
  - : `measureInputUsage()` の呼び出しが、その他の理由、またはユーザーエージェントが開示を望まない理由で失敗した場合に発生します。

## 例

### 十分なクォータがあるかどうかを確認

下記のコードスニペットでは、{{domxref("Translator.create_static", "create()")}} を使用して新しい `Translator` インスタンスを作成し、{{domxref("Translator.inputQuota", "inputQuota")}} を通じて総入力クォータを返し、`measureInputUsage()` を通じて具体的なテキスト文字列の翻訳にかかる入力クォータの使用量を返します。

次に、その文字列に対する個別の使用量が、利用できるクォータの合計を上回っているかどうかを検査します。上回っている場合は、適切なエラーが発生し、そうでない場合は、{{domxref("Translator.translate", "translate()")}} を使用して文字列を翻訳します。

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const totalInputQuota = translator.inputQuota;
const inputUsage = await translator.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("翻訳に十分なクォータがありません。");
} else {
  console.log("翻訳に利用可能なクォータがあります。");
  const translation = await translator.translate(myTextString);
  // ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [翻訳と言語検出 API の使用](/ja/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
