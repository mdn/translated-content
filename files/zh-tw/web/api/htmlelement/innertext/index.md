---
title: HTMLElement：innerText 屬性
short-title: innerText
slug: Web/API/HTMLElement/innerText
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLElement")}} 介面的 **`innerText`** 屬性表示一個節點及其後代的算繪文字內容。

作為 getter，它近似於使用者用游標選取該元素內容並複製到剪貼簿時會取得的文字。
作為 setter，這會將元素的子元素替換為給定的值，並將所有換行轉換為 {{HTMLElement("br")}} 元素。

> [!NOTE]
> `innerText` 容易與 {{domxref("Node.textContent")}} 混淆，但兩者之間有重要的差異。基本上，`innerText` 會感知文字的算繪外觀，而 `textContent` 則不會。

## 值

一個表示元素算繪文字內容的字串。

如果元素本身未[被算繪](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered)（例如：已從文件中分離或被隱藏），回傳值將與 {{domxref("Node.textContent")}} 屬性相同。

> [!WARNING]
> 在節點上設定 `innerText` 會移除該節點的*所有*子元素，並將它們替換為具有給定字串值的單一文字節點。

## 範例

此範例比較 `innerText` 與 {{domxref("Node.textContent")}}。
注意 `innerText` 如何感知 {{htmlElement("br")}} 等元素，並忽略隱藏的元素。

### HTML

```html
<h3>原始元素：</h3>
<p id="source">
  <style>
    #source {
      color: red;
    }
    #text {
      text-transform: uppercase;
    }
  </style>
  <span id="text">
    看一看<br />
    這段文字<br />
    在下方如何被解讀。
  </span>
  <span style="display:none">隱藏文字</span>
</p>
<h3>textContent 的結果：</h3>
<textarea id="textContentOutput" rows="18" cols="40" readonly>…</textarea>
<h3>innerText 的結果：</h3>
<textarea id="innerTextOutput" rows="6" cols="40" readonly>…</textarea>
```

### JavaScript

```js
const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");
const innerTextOutput = document.getElementById("innerTextOutput");

textContentOutput.value = source.textContent;
innerTextOutput.value = source.innerText;
```

### 結果

{{EmbedLiveSample("範例", 700, 650)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("HTMLScriptElement.innerText")}}
- {{domxref("HTMLElement.outerText")}}
- {{domxref("Element.innerHTML")}}
