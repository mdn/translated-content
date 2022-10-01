---
title: Response.json()
slug: Web/API/Response/json
original_slug: Web/API/Body/json
---

{{APIRef("Fetch API")}}

**`json()`** は {{DOMxRef("Response")}} インターフェイスのメソッドで、 {{DOMxRef("Response")}} のストリームを取得して完全に読み取ります。本文のテキストを {{JSxRef("JSON")}} として解釈した結果で解決するプロミスを返します。

なお、このメソッドは `json()` という名前であるにもかかわらず、結果は JSON ではありません。入力として JSON を取って解釈し、 JavaScript のオブジェクトを生成します。

## 構文

```js
response.json().then(data => {
  // data を使用した処理を実行する
});
```

### 引数

なし。

### 返値

JavaScript オブジェクトに解決される {{jsxref("Promise")}}。 このオブジェクトは、オブジェクト、配列、文字列、数値など、JSON で表現できるものであれば何でもなります。

## 例

[fetch json の例](https://github.com/mdn/fetch-examples/tree/master/fetch-json)（[fetch json をライブで](https://mdn.github.io/fetch-examples/fetch-json/)実行）では、 {{DOMxRef("Request.Request", "Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して `.json` ファイルを読み取ります。読み取りに成功したら、`json()` を使用してデータを読み取り、解析し、結果のオブジェクトから期待通りに値を読み出し、それらの値をリスト項目に追加して商品データとして表示します。

```js
const myList = document.querySelector('ul');
const myRequest = new Request('products.json');

fetch(myRequest)
  .then(response => response.json())
  .then(data => {
    for (const product of data.products) {
      let listItem = document.createElement('li');
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = product.Name;
      listItem.append(
        ` can be found in ${
          product.Location
        }. Cost: `
      );
      listItem.appendChild(
        document.createElement('strong')
      ).textContent = `£${product.Price}`;
      myList.appendChild(listItem);
    }
  })
  .catch(console.error);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ServiceWorker API](/ja/docs/Web/API/Service_Worker_API)
- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
