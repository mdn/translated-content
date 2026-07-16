---
title: "SpeechRecognition: install() 静的メソッド"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
l10n:
  sourceCommit: fe2f6d4bc116bb285b4d697c5da988bcf7a7dee8
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

**`install()`** は[ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API) の静的メソッドで、指定された言語における[端末上音声認識](/ja/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition)のための必要な言語パックをインストールします。

言語パックが利用可能かどうかを確認するには、{{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} メソッドを使用してください。

`install()` メソッドへのアクセスは、 {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} ディレクティブで制御されます。具体的には、定義されたポリシーが使用をブロックしている場合、メソッドを呼び出そうとする試みはすべて失敗します。

## 構文

```js-nolint
install(options)
```

### 引数

- `options`
  - : インストール時のオプションを指定するオブジェクト。取りうるプロパティは次の通りです。
    - `langs`
      - : {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}を含む 1 つ以上の文字列の配列。それぞれは言語パックをインストールしようとしている言語を表します。

### 返値

言語パックが正常にインストールされたかどうかを示す論理値で解決する {{domxref("Promise")}} です。 それぞれの返値となる条件は以下の通りです。

- `true`
  - : 要求された言語のインストールがすべて成功した。または、それらの言語は既にインストール済みだった。
- `false`
  - : 要求された言語の 1 つ以上に対応していない、対応している言語パックのインストールに失敗した、`langs` プロパティに空の配列が渡された。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 現在の文書が完全にはアクティブではない。
- `SyntaxError` {{domxref("DOMException")}}
  - : `langs` で指定された文字列のうち 1 つ以上が有効な BCP 47 言語タグではない。

## 例

### 端末での利用可能性の確認と言語パックのインストール

端末上で音声認識を機能させるには、ブラウザーに認識したい言語の言語パックがインストールされている必要があります。`processLocally = true` を指定した後に `start()` メソッドを実行しても、正しい言語パックがインストールされていない場合、関数呼び出しは [`language-not-supported`](/ja/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) エラーで失敗します。

正しい言語パックをインストールするには、次の 2 つの手順を必ず踏んでください。

1. {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} メソッドを使用して、ユーザーのコンピューターに言語パックが利用可能かどうかを確認します。
2. 言語パックが利用できない場合は、`install()` メソッドを使用してインストールしてください。

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
- {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}}
