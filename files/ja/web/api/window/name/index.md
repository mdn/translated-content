---
title: window.name
slug: Web/API/Window/name
---

{{ApiRef}}

ウィンドウ名を取得 / 設定します。

## 値

文字列。

## 構文

```js
string = window.name;
window.name = string;
```

## 例

```js
window.name = "lab_view";
```

## 注記

ウィンドウ名は、主にハイパーリンクとフォームのターゲットを設定するために使われます。ウィンドウは必ずしもウィンドウ名を持つ必要はありません。

現代のブラウザーは、タブが他のドメインのページを読み込むと `Window.name` を空文字列に設定し、元のページが (例えば「戻る」ボタンを押すことにより) 再び読み込まれると名前を復元します。このことにより、信頼されていないページが、前のページがこのプロパティに保存していた可能性があるいかなる情報にもアクセスできないようにします。(新しいページがこのようなデータを書き換え、それが再び読み込まれた元のページによって読まれる、という可能性も考えられます)

`Window.name` はまた、いくつかのフレームワーク ( SessionVars や Dojo の dojox.io.windowName など) によって JSONP のより安全な代替としてクロスドメインメッセージングを実現するために使われています。しかし、現代の機微なデータを扱うウェブアプリケーションは、クロスドメインメッセージングのために `window.name` に依存するべきではありません。なぜなら、これは意図された目的ではない上、ウィンドウ間での情報の共有にはより安全な/良い方法があります。{{domxref("Window.postMessage()")}} の利用を推奨します。

> **メモ:** `window.name` は保存される全ての値を `toString` メソッドにより文字列表現に変換します。

### 例

```html
<script>
  // 指定したウィンドウ名を持つタブを開く
  const otherTab = window.open("url1", "_blank");
  if (otherTab) otherTab.name = "other-tab";
</script>
<a href="url2" target="other-tab">このリンクはもう一つのタブで開かれます。</a>
```

## 仕様書

{{Specifications}}
