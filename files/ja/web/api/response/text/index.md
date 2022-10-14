---
title: Response.text()
slug: Web/API/Response/text
original_slug: Web/API/Body/text
---

{{APIRef("Fetch")}}

**`text()`** は {{domxref("Response")}} インターフェイスのメソッドで、 {{domxref("Response")}} ストリームを取得して完全に読み込みます。 {{jsxref("String")}} で解決するプロミスを返します。 レスポンスは*常に* UTF-8 としてデコードされます。

## 構文

```js
response.text().then(function (text) {
  // text レスポンスを使用して何か実行する。
});
```

### 引数

なし。

### 返値

{{jsxref("String")}} で解決するプロミスです。

## 例

[fetch text の例](https://github.com/mdn/fetch-examples/tree/master/fetch-text)（[fetch text をライブで](https://mdn.github.io/fetch-examples/fetch-text/)実行）には、{{htmlelement("article")}} 要素と 3 つのリンク（`myLinks` 配列に格納されています）があります。 最初に、リンクのすべてをループし、それぞれのリンクに、その 1 つをクリックしたとき、 `getData()` 関数がリンクの `data-page` 識別子を引数として実行されるように、`onclick` イベントハンドラーを設定します。

`getData()` が実行されると、{{domxref("Request.Request","Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して特定の `.txt` ファイルをフェッチします。 フェッチが成功したら、`text()` を使用してレスポンスから {{domxref("USVString")}} (テキスト) オブジェクトを読み取り、{{htmlelement("article")}} 要素の {{domxref("Element.innerHTML","innerHTML")}} にテキストオブジェクトの値を設定します。

```js
let myArticle = document.querySelector('article');
let myLinks = document.querySelectorAll('ul a');

for(let i = 0; i <= myLinks.length-1; i++) {
  myLinks[i].onclick = function(e) {
    e.preventDefault();
    let linkData = e.target.getAttribute('data-page');
    getData(linkData);
  }
};

function getData(pageId) {
  console.log(pageId);
  var myRequest = new Request(pageId + '.txt');
  fetch(myRequest).then(function(response) {
    return response.text().then(function(text) {
      myArticle.innerHTML = text;
    });
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
