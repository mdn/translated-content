---
title: "HTMLImageElement: crossOrigin プロパティ"
short-title: crossOrigin
slug: Web/API/HTMLImageElement/crossOrigin
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} インターフェイスの **`crossOrigin`** 属性は、画像を取得する際に使用するオリジン間リソース共有 ({{Glossary("CORS")}}) 設定を指定するための文字列です。

## 値

文字列で、画像リソースを取得する際に使用する CORS モードを指定するキーワードです。 `crossOrigin` を指定しない場合、画像は CORS なしで取得されます（`no-cors` フェッチモード）。

許可されている値は次の通りです。

- `anonymous`
  - : {{HTMLElement("img")}} 要素によるリクエストは、{{domxref("Request.mode", "mode")}} が `cors` に、{{domxref("Request.credentials", "credentials")}} モードが `same-origin` に設定されて行われます。これは、CORS が有効であり、文書が読み込まれたのと同じオリジンから画像が取得された場合に、資格情報が送信されることを意味します。
- `use-credentials`
  - : {{domxref("HTMLImageElement")}} によるリクエストは `cors` モードと `include` 認証モードを使用します。この要素によるすべての画像リクエストは、取得元のドメインに関係なく CORS を使用します。

`crossOrigin` が空の文字列 (`""`) の場合、`anonymous` モードが選択されます。

## 例

この例では、新しい {{HTMLElement("img")}} 要素が作成されて文書に追加され、匿名状態の画像が読み込まれます。画像は CORS を使用して読み込まれ、資格情報がオリジンをまたいだすべての読み込みに使用されます。

### JavaScript

以下のコードでは、 `<img>` 要素に `crossOrigin` プロパティを設定して、新しく作成された画像のフェッチに対する CORS アクセスを設定する例を示しています。

```js
const imageUrl = "clock-demo-400px.png";
const container = document.querySelector(".container");

function loadImage(url) {
  const image = new Image(200, 200);
  image.addEventListener("load", () => container.prepend(image));

  image.addEventListener("error", () => {
    const errMsg = document.createElement("output");
    errMsg.value = `Error loading image at ${url}`;
    container.append(errMsg);
  });

  image.crossOrigin = "anonymous";
  image.alt = "";
  image.src = url;
}

loadImage(imageUrl);
```

### HTML

```html
<div class="container">
  <p>
    ここに 1 つの段落があります。とても面白い段落です。
    あなたはこの段落に魅了されています。 この段落を読み続けてください。
    じゃあ、もうこの段落を読むのはやめていいよ。 読んでくれてありがとう。
  </p>
</div>
```

### CSS

```css
body {
  font:
    1.125rem/1.5,
    Helvetica,
    sans-serif;
}

.container {
  display: flow-root;
  width: 37.5em;
  border: 1px solid #d2d2d2;
}

img {
  float: left;
  padding-right: 1.5em;
}

output {
  background: rgb(100 100 100 / 100%);
  font-family: Courier, monospace;
  width: 95%;
}
```

### 結果

{{EmbedLiveSample("Examples", 600, 260)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
