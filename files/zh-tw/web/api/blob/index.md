---
title: Blob
slug: Web/API/Blob
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("File API")}}{{AvailableInWorkers}}

**`Blob`** 介面表示一個 blob，是一種不可變的原始資料檔案物件；可以將其作為文字或二進位資料讀取，或者轉換為 {{DOMxRef("ReadableStream")}}，以便使用其方法來處理資料。

Blob 可以表示不一定是 JavaScript 原生格式的資料。{{DOMxRef("File")}} 介面基於 `Blob`，繼承了 blob 的功能並擴展了對用戶系統中文件的支援。

## 使用 Blob

要從其他非 blob 物件和資料構造一個 `Blob`，請使用 {{DOMxRef("Blob.Blob", "Blob()")}} 建構子。要創建包含另一個 blob 資料子集的 blob，請使用 {{DOMxRef("Blob.slice()", "slice()")}} 方法。要獲取用戶檔案系統中的檔案的 `Blob` 物件，請參見 {{DOMxRef("File")}} 文件。

接受 `Blob` 物件的 API 也列在 {{DOMxRef("File")}} 文件中。

## 建構子

- {{DOMxRef("Blob.Blob", "Blob()")}}
  - : 回傳一個新創建的 `Blob` 物件，其中包含傳入建構子的陣列中所有資料的串聯。

## 實例屬性

- {{DOMxRef("Blob.size")}} {{ReadOnlyInline}}
  - : `Blob` 物件中包含的資料大小（以位元組為單位）。
- {{DOMxRef("Blob.type")}} {{ReadOnlyInline}}
  - : 一個字串，表示 `Blob` 中包含資料的 MIME 類型。如果類型未知，此字串為空。

## 實例方法

- {{DOMxRef("Blob.arrayBuffer()")}}
  - : 回傳一個 promise，其兌現為包含 `Blob` 全部內容的 {{jsxref("ArrayBuffer")}}（以二進位資料形式表示）。
- {{DOMxRef("Blob.bytes()")}}
  - : 回傳一個 promise，其兌現為包含 `Blob` 內容的 {{jsxref("Uint8Array")}}。
- {{DOMxRef("Blob.slice()")}}
  - : 回傳一個新的 `Blob` 物件，其中包含在呼叫的 blob 中指定範圍的位元組資料。
- {{DOMxRef("Blob.stream()")}}
  - : 回傳一個 {{DOMxRef("ReadableStream")}}，可用於讀取 `Blob` 的內容。
- {{DOMxRef("Blob.text()")}}
  - : 回傳一個 promise，其兌現為包含 `Blob` 全部內容的字串（以 UTF-8 文字表示）。

## 範例

### 創建一個 blob

{{DOMxRef("Blob.Blob", "Blob()")}} 建構子可以從其他物件創建 blob。例如，從 JSON 字串構造一個 blob：

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});
```

### 創建一個表示型別陣列內容的 URL

以下範例創建了一個 JavaScript [型別陣列](/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays)，並創建了一個包含型別化陣列資料的新 `Blob`。然後呼叫 {{DOMxRef("URL/createObjectURL_static", "URL.createObjectURL()")}} 將 blob 轉換為 {{glossary("URL")}}。

```html live-sample___url-from-array
<p>
  此範例創建了一個包含 ASCII 碼（從空格字元到字母
  Z）的型別化陣列，然後將其轉換為物件 URL。創建了一個連結以開啟該物件
  URL。點擊連結以查看解碼後的物件 URL。
</p>
```

此範例的主要程式碼是 `typedArrayToURL()` 函數，它從給定的型別化陣列創建一個 `Blob`，並回傳其物件 URL。將資料轉換為物件 URL 後，可以以多種方式使用，包括作為 {{HTMLElement("img")}} 元素的 [`src`](/zh-TW/docs/Web/HTML/Reference/Elements/img#src) 屬性值（假設資料包含圖像）。

```js live-sample___url-from-array
function showViewLiveResultButton() {
  if (window.self !== window.top) {
    // 確保如果我們的文件在框架中，讓用戶
    // 首先在自己的標籤或窗口中打開它。否則，此
    // 範例將無法運行。
    const p = document.querySelector("p");
    p.textContent = "";
    const button = document.createElement("button");
    button.textContent = "查看上方範例程式碼的即時結果";
    p.append(button);
    button.addEventListener("click", () => window.open(location.href));
    return true;
  }
  return false;
}

if (!showViewLiveResultButton()) {
  function typedArrayToURL(typedArray, mimeType) {
    return URL.createObjectURL(
      new Blob([typedArray.buffer], { type: mimeType }),
    );
  }
  const bytes = new Uint8Array(59);

  for (let i = 0; i < 59; i++) {
    bytes[i] = 32 + i;
  }

  const url = typedArrayToURL(bytes, "text/plain");
  const link = document.createElement("a");

  link.href = url;
  link.innerText = "開啟陣列 URL";
  document.body.appendChild(link);
}
```

{{EmbedLiveSample('url-from-array', , , , , , , 'allow-popups')}}

### 從 blob 中提取資料

讀取 `Blob` 內容的一種方法是使用 {{DOMxRef("FileReader")}}。以下程式碼將 `Blob` 的內容讀取為型別陣列：

```js
const reader = new FileReader();
reader.addEventListener("loadend", () => {
  // reader.result 包含 blob 的內容，作為型別陣列
});
reader.readAsArrayBuffer(blob);
```

另一種讀取 `Blob` 內容的方法是使用 {{domxref("Response")}}。以下程式碼將 `Blob` 的內容讀取為文字：

```js
const text = await new Response(blob).text();
```

或者使用 {{DOMxRef("Blob.text()")}}：

```js
const text = await blob.text();
```

通過使用 `FileReader` 的其他方法，可以將 Blob 的內容讀取為字串或資料 URL。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{DOMxRef("FileReader")}}
- {{DOMxRef("File")}}
- {{DOMxRef("URL/createObjectURL_static", "URL.createObjectURL()")}}
- [在 Web 應用程式中使用檔案](/zh-TW/docs/Web/API/File_API/Using_files_from_web_applications)
