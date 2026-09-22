---
title: "Translator: inputQuota プロパティ"
short-title: inputQuota
slug: Web/API/Translator/inputQuota
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

**`inputQuota`** は {{domxref("Translator")}} インターフェイスの読み取り専用プロパティで、翻訳を生成するためにブラウザーが利用できる入力クォータ（容量）を返します。

## 値

利用できる入力クォータを示す数値。

この数値は実装に依存します。例えば、ユーザーのメモリーや JavaScript 文字列の最大長を超える制限がない場合は {{jsxref("Infinity")}} となることもありますし、トークン／クレジット方式を採用している AI モデルの場合、トークンの数となることもあります。

唯一保証されるのは、テキストを対応させるのに十分なクォータがある場合、`inputQuota` - {{domxref("Translator.measureInputUsage", "measureInputUsage()")}} が負ではない値になるということです。

## 例

### 十分なクォータが確保されているか調べる

次のコード例では、{{domxref("Translator.create_static", "create()")}} を使用して新しい `Translator` インスタンスを生成し、`inputQuota` を通じて総入力クォータを返し、{{domxref("Translator.measureInputUsage", "measureInputUsage()")}} を通じて具体的なテキスト文字列に対応させるための入力クォータの使用量を返します。

次に、その文字列に対する個別の使用量が、利用できる割り当て総量を超えているかどうかを検査します。超えている場合は、適切なエラーを発生させます。超えていない場合は、{{domxref("Translator.translate", "translate()")}} を使用して文字列の翻訳を開始します。

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
