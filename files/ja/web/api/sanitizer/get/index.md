---
title: "Sanitizer: get() メソッド"
short-title: get()
slug: Web/API/Sanitizer/get
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("HTML Sanitizer API")}}

{{domxref("Sanitizer")}} インターフェイスの **`get()`** メソッドは、現在の `Sanitizer` の構成を表す {{domxref('SanitizerConfig')}} 辞書インスタンスを返します。

これは、デフォルトから少し変更した無害化オブジェクトを作成するために使用できます。まずデフォルトの `Sanitizer` の構成を取得して変更し、それを使用して新しい `Sanitizer` を構築します。

返された構成は、構成の検査にも使用でき、HTML 解析関数に直接渡すこともできます。
ただし、特に `Sanitizer` を複数回使用する場合は、構成辞書ではなく {{domxref("Sanitizer")}} を渡す方が効率的です。

## 構文

```js-nolint
get()
```

### 引数

なし

### 返値

{{domxref("SanitizerConfig")}} です。

## 例

### 構成の取得

この例では、新しい無害化オブジェクトを作成して、その構成を取得する方法を示します。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

#### JavaScript

次のコードは、`Sanitizer` インターフェイスに対応しているかをテストし、対応している場合は、{{htmlelement("div")}}、{{htmlelement("p")}}、{{htmlelement("span")}}、{{htmlelement("script")}} の HTML 要素を許可する単純な {{domxref("SanitizerConfig")}} を使用して、新しい `Sanitizer` オブジェクトを作成します。
その後、構成を取得してログに出力します。

```js hidden
if ("Sanitizer" in window) {
```

```js
// SanitizerConfig を使用して無害化オブジェクトを作成
const sanitizer = new Sanitizer({ elements: ["div", "p", "span", "script"] });

// 現在の構成を取得
const sanitizerConfig = sanitizer.get();

log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### 結果

以下に出力結果をログ表示します。
無害化オブジェクトの構築時に設定したものと同じ要素が返されますが、新しい要素には名前空間も付いていることに注意してください。
また、コメントとデータ属性も許可されることに注意してください。

{{EmbedLiveSample("Getting a configuration","100","480px")}}

### デフォルトの無害化オブジェクトの取得

この例では、デフォルトの `Sanitizer` の構成を取得する方法を示します。
取得した構成を変更して、特定の要件を満たす新しい `Sanitizer` の作成に使用できます。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

次のコードは、`Sanitizer` インターフェイスに対応しているかをテストします。
その後、オプションを渡さずにデフォルトの `Sanitizer` を作成し、構成を取得してログに出力します。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

```js hidden
if ("Sanitizer" in window) {
```

```js
// デフォルトの無害化オブジェクトを作成
const sanitizer = new Sanitizer();

// デフォルトの構成を取得
const defaultConfig = sanitizer.get();

log(JSON.stringify(defaultConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### 結果

以下に[デフォルトの無害化オブジェクトの構成](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)をログ表示します。
デフォルトの構成は非常に大きく、多くの要素と属性を許可することに注意してください。

{{EmbedLiveSample("Getting the default sanitizer","100","480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
