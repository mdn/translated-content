---
title: "Response: bodyUsed プロパティ"
short-title: bodyUsed
slug: Web/API/Response/bodyUsed
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Fetch API")}}

**`bodyUsed`** は {{domxref("Response")}} インターフェイスの読み取り専用プロパティで、本体が読み取り済みであるかどうかを示す論理値です。

## 値

論理値です。

## 例

### `bodyUsed` のチェック

この例は、レスポンスの本体を読み込むと `bodyUsed` の値が `false` から `true` に変わることを示しています。

この例には、空の画像があります。

この例の JavaScript を実行すると、画像を取得し、返されたプロミスを変数 `responsePromise` に代入します。

ユーザーが「レスポンスを使用する」をクリックすると、レスポンスがすでに使用されているかどうかを調べます。もし指定されていたら、メッセージを出力します。もしまだ使用されていなければ、レスポンス本体を読み込み、それを用いて画像の `src` 属性の値を提供します。

#### HTML

```html
<button id="use">レスポンスを使用する</button>
<button id="reset">リセット</button>
<br />
<img id="my-image" src="" />
<pre id="log"></pre>
```

#### JavaScript

```js
const useResponse = document.querySelector("#use");
const reset = document.querySelector("#reset");
const myImage = document.querySelector("#my-image");
const log = document.querySelector("#log");

const responsePromise = fetch(
  "https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg",
);

useResponse.addEventListener("click", async () => {
  const response = await responsePromise;
  if (response.bodyUsed) {
    log.textContent = "Body has already been used!";
  } else {
    const result = await response.blob();
    const objectURL = URL.createObjectURL(result);
    myImage.src = objectURL;
  }
});

reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### 結果

初期状態では画像の値はありません。「レスポンスを使用する」を一度クリックすると、`bodyUsed` は `false` になるので、レスポンスを読み込んで画像を設定します。もう一度「レスポンスを使用する」をクリックすると、`bodyUsed` は `true` となり、メッセージを出力します。

「リセット」をクリックすると、例が再読み込みされますので、もう一度試してみてください。

{{ EmbedLiveSample('Examples', '100%', '300px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
