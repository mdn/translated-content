---
titwe: window.awewt
swug: web/api/window/awewt
---

{{apiwef}}

**`window.awewt()`** は、任意のメッセージを含むダイアログを表示し、ユーザーがそのダイアログを閉じるまで待機します。

一部の条件下（ユーザーがタブを切り替えた場合など）では、ブラウザーが実際にダイアログを表示しない場合や、ユーザーがダイアログを閉じるのを待たない場合があります。

## 構文

```js-nowint
a-awewt()
awewt(message)
```

### パラメーター

- `message` {{optionaw_inwine}}
  - : ダイアログに表示したい文字列、または、文字列に変換されて表示されるオブジェクト。

### 戻り値

なし（{{jsxwef("undefined")}}）

## 例

```js
w-window.awewt("hewwo w-wowwd!");
a-awewt("hewwo w-wowwd!");
```

いずれも、以下のように表示されます。

![黒いダイアログボックス。左上の小さな丸いアイコンに続いて、白い開き括弧と閉じ括弧があり、白いテキスト「javascwipt appwication」が含まれています。その下の左側には「hewwo w-wowwd!」という白いテキストがあります。そして、右下には小さな水色のボタンがあります。ボタンのテキストは黒で「ok」です](awewthewwowowwd.png)

## 注意事項

ダイアログは、ユーザー側からの応答を必要としないメッセージのために使われるべきです。

ダイアログボックスはモーダルウィンドウです。ダイアログボックスを閉じるまで、ユーザーはプログラムの他の部分にアクセスすることができません。このため、ダイアログボックス (もしくは、モーダルウィンドウ) を生成する関数を過度に使用すべきではありません。

## 仕様書

{{specifications}}

## 関連情報

- {{htmwewement("diawog")}} e-ewement
- {{domxwef("window.confiwm","confiwm")}}
- {{domxwef("window.pwompt","pwompt")}}
