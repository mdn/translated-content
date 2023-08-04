---
title: window.alert
slug: Web/API/Window/alert
---

{{ApiRef}}

**`Window.alert()`** は、任意のメッセージを含むダイアログを表示し、ユーザーがそのダイアログを閉じるまで待機します。

一部の条件下（ユーザーがタブを切り替えた場合など）では、ブラウザーが実際にダイアログを表示しない場合や、ユーザーがダイアログを閉じるのを待たない場合があります。

## 構文

```js-nolint
alert()
alert(message)
```

### パラメーター

- `message` {{optional_inline}}
  - : ダイアログに表示したい文字列、または、文字列に変換されて表示されるオブジェクト。

### 戻り値

なし（{{jsxref("undefined")}}）

## 例

```js
window.alert("Hello world!");
alert("Hello world!");
```

いずれも、以下のように表示されます。

![黒いダイアログボックス。左上の小さな丸いアイコンに続いて、白い開き括弧と閉じ括弧があり、白いテキスト「JavaScript Application」が含まれています。その下の左側には「Hello world!」という白いテキストがあります。そして、右下には小さな水色のボタンがあります。ボタンのテキストは黒で「OK」です](alerthelloworld.png)

## 注意事項

ダイアログは、ユーザー側からの応答を必要としないメッセージのために使われるべきです。

ダイアログボックスはモーダルウィンドウです。ダイアログボックスを閉じるまで、ユーザーはプログラムの他の部分にアクセスすることができません。このため、ダイアログボックス (もしくは、モーダルウィンドウ) を生成する関数を過度に使用すべきではありません。

## 仕様

{{Specifications}}

## 関連情報

- {{HTMLElement("dialog")}} element
- {{domxref("window.confirm","confirm")}}
- {{domxref("window.prompt","prompt")}}
