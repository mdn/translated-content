---
title: window.alert
slug: Web/API/Window/alert
---

{{ApiRef}}

**`Window.alert()`** メソッドは、オプションの指定されたコンテンツと OK ボタンを持つ警告ダイアログを表示します。

一部の条件下（ユーザーがタブを切り替えた場合など）では、ブラウザーが実際にダイアログを表示しない場合や、ユーザーがダイアログを閉じるのを待たない場合があります。

## 構文

```
window.alert(message);
```

### パラメーター

- `message` {{optional_inline}}
  - : 警告ダイアログに表示したいオプションの文字列または、文字列に変換されて表示されるオブジェクトです。

## 例

```js
window.alert("Hello world!");
alert("Hello world!");
```

いずれも、以下のように表示されます。

![Image:AlertHelloWorld.png](/files/130/AlertHelloWorld.png)

## 注記

警告ダイアログは、メッセージの確認応答以外に、ユーザ側で応答を必要としないメッセージのために使われるべきです。

この記事では、 DOM:window\.prompt と DOM：window\.confirm のテキストが共有されています。ダイアログボックスはモーダルウィンドウです。つまり、ユーザーはこれを閉じないとプログラムの他のインターフェイス部分にアクセスする事ができません。ですから、ダイアログボックス (もしくは、モーダルウィンドウ) を生成する関数を過度に使用すべきではありません。

## 仕様

| 仕様                                                                                                         | 状態                             | コメント |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName('HTML WHATWG', 'timers-and-user-prompts.html#dom-alert', 'alert()')}} | {{Spec2('HTML WHATWG')}} |          |

## 関連情報

- {{domxref("window.confirm","confirm")}}
- {{domxref("window.prompt","prompt")}}
- [Mozilla Chrome](/ja/docs/Chrome) については、`nsIPromptService.alert` と `nsIPromptService.alertCheck` を参照してください。
