---
title: "SpeechRecognition: available() 静的メソッド"
short-title: available()
slug: Web/API/SpeechRecognition/available_static
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

**`available()`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) の静的メソッドで、指定された言語が音声認識に使用可能かどうかを確認します。

音声認識用の言語パックをローカルにインストールするには、{{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} メソッドを使用します。

`available()` メソッドへのアクセスは、 {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} によって制御されます。具体的には、定義されたポリシーが使用をブロックしている場合、メソッドの呼び出しはすべて失敗します。

## 構文

```js-nolint
available(options)
```

### 引数

- `options`
  - : 可用性チェックのオプションを指定するオブジェクト。 以下のプロパティが利用可能です。
    - `langs`
      - : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}を含む 1 つ以上の文字列の配列。各タグは利用可能性を確認する言語を表します。空の `langs` 配列を渡してもエラーは発生しませんが、返値は常に `unavailable` となります。
    - `processLocally` {{optional_inline}}
      - : [端末上の音声認識](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition)のみ (`true`) か、端末上またはリモート音声認識の両方 (`false`) の言語利用可能性を確認するかを指定する論理値。デフォルト値は `false` です。
        > [!NOTE]
        > `available()` を使用して、リモートサービスが指定された言語に対応していることを保証することはできません。`false` の値は、端末上の音声認識サービス、またはリモート音声認識サービスのいずれかがそれらに対応していることを意味します。

### 返値

指定された言語の音声認識の可用性を示す列挙型値で解決する {{domxref("Promise")}} です。

取りうる値は次の通りです。

- `available`
  - : 指定されたすべての言語への対応が利用可能であることを示します。
    - `processLocally` が `true` に設定されている場合、`available` は、それらの言語の音声認識が端末上で利用可能であることを意味します（必要な言語パックがユーザーのコンピューターにダウンロードされ、インストール済みです）。
    - `processLocally` が `false` に設定されている場合、`available` は、それらの言語に対して音声認識が端末上またはリモートで利用可能であることを意味します。
- `downloading`
  - : 指定された言語の対応が端末上で利用可能であり、少なくとも 1 つの言語に関連する言語パックのダウンロードが進行中であることを示します。`processLocally` が `true` の場合にのみ関連します。
- `downloadable`
  - : 指定された言語の対応が端末上で利用可能であることを示しますが、少なくとも 1 つの言語に対応する言語パックがまだダウンロードされていません。`processLocally` が `true` の場合にのみ関連します。
- `unavailable`
  - : 指定された言語のうち少なくとも 1 つに対する対応が利用できないことを示します。
    - `processLocally` が `true` に設定されている場合、`unavailable` は、指定された言語のうち少なくとも 1 つについて、端末上の音声認識が利用できないことを意味します。
    - `processLocally` が `false` に設定されている場合、`unavailable` は、指定された言語のうち少なくとも 1 つについて、端末上またはリモートで音声認識が利用できないことを意味します。

#### 異なるステータスを持つ複数言語に対する最終的な返値

`langs` 配列に複数の言語が指定されていても、返されるステータス値は1つだけです。指定された言語ごとに利用可能ステータスが異なる場合、最終的な返値は、以下のリストに示される順序で、いずれかの言語において `available` から最も遠いステータスとなります。

`processLocally` が `false` の場合、

- すべての言語が `available` であれば、 `available` を返します。
- そうでなければ `unavailable` を返します。

`processLocally` が `true` の場合、

- すべての言語が `available` であれば、 `available` を返します。
- 1 つ以上の言語が `downloading` であれば、 `downloading` を返します。
- 1 つ以上の言語が `downloadable` であれば、 `downloadable` を返します。
- 1 つ以上の言語が `unavailable` であれば、 `unavailable` を返します。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 現在の文書は完全に有効ではありません。
- `SyntaxError` {{domxref("DOMException")}}
  - : `langs` で指定された文字列のうち、 1 つ以上が有効な BCP 47 言語タグではありません。

## 例

### 端末での利用可能性の確認と言語パックのインストール

端末上で音声認識を機能させるには、ブラウザーに認識したい言語の言語パックがインストールされている必要があります。`processLocally = true` を指定した後に `start()` メソッドを実行しても、正しい言語パックがインストールされていない場合、関数呼び出しは [`language-not-supported`](/ja/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) エラーで失敗します。

正しい言語パックをインストールするには、次の 2 つの手順を必ず踏んでください。

1. `available()` メソッドを使用して、ユーザーのコンピューターに言語パックが利用可能かどうかを確認します。
2. 言語パックが利用できない場合は、 {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} メソッドを使用してインストールしてください。

これらの手順は、以下のコードスニペットを使用して処理されます。

```js
startBtn.addEventListener("click", () => {
  // 対象言語の利用可能性を確認
  SpeechRecognition.available({ langs: ["en-US"], processLocally: true }).then(
    (result) => {
      if (result === "unavailable") {
        diagnostic.textContent = `en-US は現在ダウンロードができません。すみません。`;
      } else if (result === "available") {
        recognition.start();
        console.log("カラーコマンドを受け取る準備ができました。");
      } else {
        diagnostic.textContent = `en-US 言語パックをダウンロード中`;
        SpeechRecognition.install({
          langs: ["en-US"],
          processLocally: true,
        }).then((result) => {
          if (result) {
            diagnostic.textContent = `en-US 言語パックがダウンロードされました。やりなおしてください。`;
          } else {
            diagnostic.textContent = `en-US 言語パックのダウンロードに失敗しました。後でやりなおしてください。`;
          }
        });
      }
    },
  );
});
```

まず `available()` メソッドを実行し、利用可能な言語を確認するために 1 つの言語 (`langs: ["en-US"]`) を指定し、`processLocally: true` を設定します。返値の 3 つの異なる可能性について検査します。

- 結果の値が `unavailable` の場合、ダウンロード可能な適切な言語パックが存在しないことを意味します。また、出力に適切なメッセージを表示します。
- 結果の値が `available` の場合、言語パックがローカルで利用可能であることを意味し、認識を開始できます。この場合、`start()` を実行し、アプリが音声受信の準備が整った際にコンソールへメッセージをログ出力します。
- 値が他のもの（`downloadable` または `downloading`）の場合、言語パックのダウンロードが開始されることをユーザーに通知する診断メッセージを出力し、その後ダウンロード処理を実行するために `install()` メソッドを呼び出します。

`install()` メソッドは `available()` メソッドと同様に動作しますが、そのオプションオブジェクトは `langs` 配列のみを受け取ります。実行されると、`en-US` 言語パックのダウンロードを開始し、指定された言語パックが正常にダウンロードおよびインストールされたか (`true`)、そうでないか (`false`) を示す論理値で解決される {{jsxref("Promise")}} を返します。

このコードは、[端末上音声カラーチェンジャー](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer)（[デモをライブで実行](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)）からの抜粋です。詳細な説明については[ウェブ音声 API の使用](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)方法をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
- [ウェブ音声 API の使用](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- {{domxref("SpeechRecognition.processLocally")}}
- {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}}
