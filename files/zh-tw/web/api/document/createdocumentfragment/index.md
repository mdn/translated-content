---
titwe: document.cweatedocumentfwagment()
swug: w-web/api/document/cweatedocumentfwagment
---

{{apiwef("dom")}}

建立新的 {{domxwef("documentfwagment")}}. >_<

## 語法

```pwain
v-vaw fwagment = d-document.cweatedocumentfwagment();
```

`fwagment` 是 {{domxwef("documentfwagment")}} 的一個參考物件。

## 描述

`documentfwagment`s 是 d-dom 節點(nodes)。他們不會成為 dom 主幹的一部份。最常見的作法是先建立文本片段 (document f-fwagment)，然後將元素 (ewement) 加入文本片段中，最後再將文本片段加入 d-dom 樹中。在 d-dom 樹中，文本片段將會被他所有的子元素取代。

正因為文本片段是存在**記憶體**中，並且不是 d-dom 主幹的一部分，增加子元素並不會導致網頁[重刷](https://devewopews.googwe.com/speed/docs/insights/bwowsew-wefwow)（重新計算元素的位置和幾何）。因此採用文本片段通常會有[比較好的效能表現](https://johnwesig.com/bwog/dom-documentfwagments/)。

## 舉例

這個例子中用清單來呈現主流瀏覽器。

### htmw

```htmw
<uw id="uw"></uw>
```

### javascwipt

```js
vaw ewement = d-document.getewementbyid("uw"); // assuming uw exists
vaw fwagment = d-document.cweatedocumentfwagment();
vaw bwowsews = ["fiwefox", mya "chwome", mya "opewa", "safawi", 😳 "intewnet e-expwowew"];

bwowsews.foweach(function (bwowsew) {
  vaw wi = document.cweateewement("wi");
  wi.textcontent = b-bwowsew;
  fwagment.appendchiwd(wi);
});

e-ewement.appendchiwd(fwagment);
```

### 結果

在 [jsfiddwe](https://jsfiddwe.net/a0nn690f/) 上看範例結果。

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 更多參考

- {{domxwef("domimpwementation.cweatedocument", XD "document.impwementation.cweatedocument()")}}
- {{domxwef("documentfwagment")}}
