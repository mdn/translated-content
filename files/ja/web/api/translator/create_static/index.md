---
title: "Translator: create() 静的メソッド"
short-title: create()
slug: Web/API/Translator/create_static
l10n:
  sourceCommit: 613cb65038a6b572f78ce5f83c711ec2611599fb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

**`create()`** は {{domxref("Translator")}} インターフェイスの静的メソッドで、テキストを翻訳するために使用できる新しい `Translator` インスタンスを生成します。

> [!NOTE]
> `create()` メソッドでは [一時的な有効化](/ja/docs/Glossary/Transient_activation)が要求されます。つまり、マウスクリックやボタンの押下といったユーザー操作に応じて呼び出される必要があります。

## 構文

```js-nolint
Translator.create(options)
```

### 引数

- `options`
  - : `Translator` の構成オプションを指定するオブジェクト。取り得る値は以下の通りです。
    - `sourceLanguage`
      - : 入力テキストの翻訳元言語を指定する文字列。これは、有効な {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}である必要があります。
    - `targetLanguage`
      - : 入力テキストの翻訳先言語を指定する文字列。これは、有効な BCP 47 言語タグである必要があります。
    - `monitor` {{optional_inline}}
      - : {{domxref("CreateMonitor")}} 引数を受け取るコールバック関数で、AI モデルのダウンロード進捗状況を監視することができます。
    - `signal` {{optional_inline}}
      - : {{domxref("AbortSignal")}} オブジェクトのインスタンス。これを使用すると、関連付けられた {{domxref("AbortController")}} を通じて `create()` 操作を中止することができます。具体的な効果は、{{domxref("AbortController.abort()")}} がいつ呼び出されるかによって異なります。
        - `abort()` が `create()` のプロミスが解決する前に呼び出されると、`create()` 操作は取り消されます。
        - `abort()` が `create()` のプロミスが履行された後に呼び出されると、{{domxref("Translator.destroy()")}} を呼び出したのと同じ効果があります。つまり、生成された `Translator` インスタンスに割り当てられていたリソースが解放され、進行中の `Translator` メソッド呼び出しやそれ以降の呼び出しはすべて、`AbortError` を返して失敗します。

### 返値

`Translator` オブジェクトインスタンスで履行される {{jsxref("Promise")}} です。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : このページの {{domxref("Document")}} がまだアクティブでない場合に発生します。
- `NetworkError` {{domxref("DOMException")}}
  - : 次の場合に発生します。
    - AI モデルのダウンロードに利用できるネットワークに接続できなかった。
    - ユーザーが AI モデルのダウンロードを取り消した。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 次の場合に発生します。
    - このメソッドの使用が {{httpheader('Permissions-Policy/translator','translator')}} の {{httpheader("Permissions-Policy")}} によってブロックされた。
    - ユーザーが何らかの方法で AI モデルのダウンロードをブロックした。
    - `create()` メソッドが、{{glossary("transient activation", "一時的な有効化")}}を通じて呼び出されていない。
- `NotSupportedError` {{domxref("DOMException")}}
  - : 次の場合に発生します。
    - `sourceLanguage` または `targetLanguage` で指定された言語タグが無効であるか、対応していない。これは、指定された `sourceLanguage` と `targetLanguage` が同じ場合にも当てはまる。
    - 指定された `sourceLanguage` と `targetLanguage` の組み合わせに対応する AI モデルが利用できない。
- `OperationError` {{domxref("DOMException")}}
  - : その他の理由で `Translator` の生成に失敗した場合の汎用例外です。

## 例

### 基本的な `Translator` の生成

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [翻訳と言語検出 API の使用](/ja/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
