---
title: "Translator: availability() 静的メソッド"
short-title: availability()
slug: Web/API/Translator/availability_static
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

**`availability()`** は {{domxref("Translator")}} インターフェイスの静的メソッドで、指定された `Translator` 設定における AI モデルの利用可否を示す列挙値を返します。

## 構文

```js-nolint
Translator.availability(options)
```

### 引数

- `options`
  - : `Translator` の構成オプションを指定するオブジェクト。取り得る値は以下の通りです。
    - `sourceLanguage`
      - : 入力テキストの翻訳元言語を指定する文字列。これは、有効な {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}である必要があります。
    - `targetLanguage`
      - : 入力テキストの翻訳先言語を指定する文字列。これは、有効な BCP 47 言語タグである必要があります。

### 返値

指定された `Translator` 設定に対する対応状況（利用可能か、または今後利用可能になるか）を示す列挙値で履行される {{jsxref("Promise")}} です。対応状況が判別できなかった場合は `null` となります。

取り得る値には、次のようなものがあります。

- `available`
  - : このブラウザーは指定された設定に対応しており、すぐに使用できます。
- `downloadable`
  - : このブラウザーは指定された設定に対応していますが、先に AI モデル、あるいはそのモデルの調整用データをダウンロードする必要があります。
- `downloading`
  - : このブラウザーは指定された設定に対応していますが、処理を進めるには、現在進行中のダウンロードが完了するのを待つ必要があります。
- `unavailable`
  - : ブラウザーは指定された設定に対応していません。また、指定された `sourceLanguage` と `targetLanguage` が同じ場合、または {{httpheader('Permissions-Policy/translator','translator')}} の {{httpheader("Permissions-Policy")}} によって翻訳 API がブロックされている場合にも、この値が返されます。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : このページの {{domxref("Document")}} がまだアクティブでない場合に発生します。
- `OperationError` {{domxref("DOMException")}}
  - : 何らかの理由で AI モデルの初期化に失敗した場合に発生します。
- `UnknownError` {{domxref("DOMException")}}
  - : `availability()` の呼び出しが、その他の何らかの理由、あるいはユーザーエージェントが開示を望まなかったために失敗した場合に発生します。

## 例

### 基本的な `availability()` の使い方

以下のコードスニペットでは、まず `availability()` メソッドを使用して、2 つの言語を対応させる際にモデルが利用できるかどうかを調べます。

- `unavailable` が返された場合は、コンソールに適切なエラーメッセージを表示します。
- `available` が返された場合は、{{domxref("Translator.create_static", "create()")}} メソッドを使用して、翻訳元言語と翻訳先言語を引数として渡して翻訳器を生成します。必要な AI モデルが利用可能であるため、すぐに使用することができます。
- それ以外の値（つまり `downloadable` または `downloading`）が返された場合は、同じ `create()` メソッドを実行しますが、この場合は {{domxref("CreateMonitor/downloadprogress_event", "downloadprogress")}} イベントが発生するたびに、モデルのダウンロード率をログに出力する `monitor` を含みます。

```js
async function getTranslator(languages) {
  const availability = await Translator.availability(languages);

  if (availability === "unavailable") {
    console.log(
      `この翻訳は対応していません。別の言語の組み合わせをお試しください。`,
    );
    return undefined;
  } else if (availability === "available") {
    return await Translator.create(languages);
  }
  return await Translator.create({
    ...languages,
    monitor(monitor) {
      monitor.addEventListener("downloadprogress", (e) => {
        console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
      });
    },
  });
}

const translator = await getTranslator({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

### 言語対応の検出

```js
async function langSupport(source, target) {
  const availability = await Translator.availability({
    sourceLanguage: source,
    targetLanguage: target,
  });
  return availability;
}

await langSupport("en", "fr");
await langSupport("en", "pt");
await langSupport("en", "zh");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [翻訳と言語検出 API の使用](/ja/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
