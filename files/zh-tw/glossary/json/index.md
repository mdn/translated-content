---
title: JSON
slug: Glossary/JSON
---

_JavaScript Object Notation_（**JSON**）是一種資料交換格式。JSON 的語法非常接近 {{Glossary("JavaScript")}}，但嚴格上來說 JSON 並不是 JavaScript 的一個子集。許多程式語言都支援 JSON，不過 JSON 在基於 JavaScript 的應用程式（包含網站和瀏覽器擴充功能）中特別有用。

JSON 可以表示數字、布林值、字串、`null`、陣列（一些有順序的數值），以及由這些數值所組成的物件（字串和數值的對應表）。原生的 JSON 不能用來表示較複雜的資料，像是函式、正規表達式、日期等。（日期物件可以被序列化成為 ISO 格式的日期字串，不會完全遺失資料。）如果你需要 JSON 來表示這些額外的資料類型，請在他們序列或反序列化時轉換數值。

JSON 和 XML 很像，能夠儲存傳統 CSV 格式不能儲存的多層級資料。有許多工具可以互相轉換這些格式，例如 [JSON to CSV Converter](https://json-csv.com)。

## 了解更多

### 基礎知識

- 維基百科上的 [JSON](https://zh.wikipedia.org/wiki/JSON) 條目

### 技術資料

- MDN 上的 [JSON](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/JSON) 條目
