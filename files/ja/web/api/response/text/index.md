---
title: "Response: text() メソッド"
short-title: text()
slug: Web/API/Response/text
l10n:
  sourceCommit: 889fd7ca9d03276638ec065e47ea967c1a2fc10b
---

{{APIRef("Fetch API")}}

**`text()`** は {{domxref("Response")}} インターフェイスのメソッドで、 {{domxref("Response")}} ストリームを取得して完全に読み込みます。文字列で解決するプロミスを返します。 レスポンスは*常に* UTF-8 としてデコードされます。

## 構文

```js-nolint
text()
```

### 引数

なし。

### 返値

文字列で解決するプロミスです。

### 例外

- {{domxref("DOMException")}} `AbortError`
  - : リクエストが[中止された](/ja/docs/Web/API/Fetch_API/Using_Fetch#リクエストの中止)場合。
- {{jsxref("TypeError")}}
  - : 以下のいずれかの原因で発生します。
    - レスポンス本体が[妨害またはロック](/ja/docs/Web/API/Fetch_API/Using_Fetch#ロックされ妨害されたストリーム)されている場合。
    - 本体コンテンツをデコードする際にエラーが発生した場合（例えば、{{httpheader("Content-Encoding")}} ヘッダーが不正な場合など）。

## 例

[fetch text の例](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-text)（[fetch text をライブで](https://mdn.github.io/dom-examples/fetch/fetch-text/)実行）には、{{htmlelement("article")}} 要素と 3 つのリンク（`myLinks` 配列に格納されています）があります。
最初に、リンクのすべてを反復処理し、それぞれのリンクに、その 1 つをクリックしたとき、 `getData()` 関数がリンクの `data-page` 識別子を引数として実行されるように、`onclick` イベントハンドラーを設定します。

`getData()` が実行されると、{{domxref("Request.Request","Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して特定の `.txt` ファイルをフェッチします。 フェッチが成功したら、`text()` を使用してレスポンスから文字列を読み取り、{{htmlelement("article")}} 要素の {{domxref("HTMLElement.innerText","innerText")}} にそのテキストオブジェクトの値を設定します。

```js
const myArticle = document.querySelector("article");
const myLinks = document.querySelectorAll("ul a");

for (const link of myLinks) {
  link.onclick = (e) => {
    e.preventDefault();
    const linkData = e.target.getAttribute("data-page");
    getData(linkData);
  };
}

function getData(pageId) {
  console.log(pageId);
  const myRequest = new Request(`${pageId}.txt`);
  fetch(myRequest)
    .then((response) => response.text())
    .then((text) => {
      myArticle.innertext = text;
    });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
