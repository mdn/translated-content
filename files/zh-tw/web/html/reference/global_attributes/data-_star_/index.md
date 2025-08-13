---
title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
---

**data-\*** [全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)構成一組稱作**自訂 data 屬性**的屬性。它能令 [HTML](/zh-TW/docs/Web/HTML) 與其 [DOM](/zh-TW/docs/Web/API/Document_Object_Model) 擁有給腳本用的交換資訊。這種屬性設置的自訂資料，能透過元素的 {{domxref("HTMLElement")}} 介面而活用。{{domxref("HTMLElement.dataset")}} property 允許訪問它們。`*` 可以是任何遵循以下規則的 [xml 名稱](https://www.w3.org/TR/REC-xml/#NT-Name)：

- 名字絕對不能以 `xml` 起頭，無論是否用於 xml、
- 名字絕對不能包含分號（`U+003A`）、
- 名字絕對不能包含大寫 `A` 到大小 `Z` 的拉丁字母。

請注意 {{domxref("HTMLElement.dataset")}} property 是個 {{domxref("DOMStringMap")}}，而自訂的 data 屬性名 _data-test-value_ 因為所有的減號（`U+002D`）都會被消去、緊接著的第一個字母，會被取代為駝峰式（camelcase）名字，所以要透過 `HTMLElement.dataset.testValue` 或 `HTMLElement.dataset["testValue"]` 訪問。

### 用法

藉由增加 **data-\*** 屬性，即使是普通的 HTML 元素也能變成複雜而強大程式物件。例如說遊戲裡面的太空船[精靈](<https://zh.wikipedia.org/zh-tw/%E7%B2%BE%E7%81%B5_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9B%BE%E5%BD%A2%E5%AD%A6)>) 能成為帶有 [class](/zh-TW/docs/Web/HTML/Reference/Global_attributes/class) 與數個 data-\* 屬性的 {{HTMLElement("img")}} 元素：

```plain
<img class="spaceship cruiserX3" src="shipX3.png"
  data-ship-id="324"   data-weapons="laserI laserII"   data-shields="72%"
  data-x="414354" data-y="85160" data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()" />
```

（參見[_這個網站_](https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)）

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 所有的[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)
- The {{domxref("HTMLElement.dataset")}} property that allows to access and modify these values.
