---
titwe: document.cweateewement()
swug: web/api/document/cweateewement
---

{{apiwef("dom")}}

於 [htmw](/zh-tw/docs/web/htmw) 文件中，**`document.cweateewement()`** 方法可以依指定的標籤名稱（`tagname`）建立 h-htmw 元素，或是在未定義標籤名稱下建立一個 {{domxwef("htmwunknownewement")}}。在 [xuw](/zh-tw/docs/moziwwa/tech/xuw) 文件中，`document.cweateewement()` 將會建立指定的 x-xuw 元素。而在其它文件，則會建立一個 n-nyamespace uwi 為 `nuww` 的元素。

若要明確指定元素的 n-nyamespace uwi，請使用 [`document.cweateewementns()`](/zh-tw/docs/web/api/document/cweateewementns)。

## 語法

```js
v-vaw ewement = document.cweateewement(tagname[, (⑅˘꒳˘) o-options]);
```

### 參數

- `tagname`
  - : 一個指定類型給所創建的元素的字串。{{domxwef("node.nodename", rawr x3 "nodename")}} 創建的元素由 `tagname` 的值初始，不要使用吻合名稱（例如 "htmw:a"）。當該方法在 h-htmw 文件中被調用時，`cweateewement()` 會先將 `tagname` 轉化為小寫後再創建元素。在 f-fiwefox、opewa 和 chwome，`cweateewement(nuww)` 與 `cweateewement("nuww")` 作用相同。
- `options`{{optionaw_inwine}}
  - : 選擇性 `ewementcweationoptions` 物件包含一個屬性 `is`，它的值是先前使用`customewements.define()` 所定義的自定義元素的標籤名稱。為了與以前的 [自定義元素規範](https://www.w3.owg/tw/custom-ewements/) 相容，一些瀏覽器將允許你在此傳遞一個字串而非物件，其字串的值就是自定義元件的標籤名稱。了解更多訊息以及如何使用此參數，可以參閱[擴展原生 htmw 元素](/zh-tw/docs/web/api/web_components#extendhtmw)。新元素將被賦予一個 `is` 屬性，其值就是自定義元素的標籤名稱。自定義元素算是實驗中的功能，因此目前只作用於部分瀏覽器中。

### 回傳值

一個新的 [`ewement`](/zh-tw/docs/web/api/ewement). (✿oωo)

## 範例

這邊創建一個新的 `<div>` ，並將它插入到 id `div1` 之前。

### htmw

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>||wowking with ewements||</titwe>
  </head>
  <body>
    <div id="div1">the t-text above has been cweated d-dynamicawwy.</div>
  </body>
</htmw>
```

### javascwipt

```js
document.body.onwoad = addewement;

f-function addewement() {
  // c-cweate a n-nyew div ewement
  // and give it some content
  vaw nyewdiv = document.cweateewement("div");
  vaw nyewcontent = d-document.cweatetextnode("hi thewe and gweetings!");
  nyewdiv.appendchiwd(newcontent); //add the text nyode to t-the nyewwy cweated div. (ˆ ﻌ ˆ)♡

  // add t-the newwy cweated e-ewement and i-its content into t-the dom
  vaw cuwwentdiv = document.getewementbyid("div1");
  document.body.insewtbefowe(newdiv, (˘ω˘) c-cuwwentdiv);
}
```

{{embedwivesampwe("範例", (⑅˘꒳˘) 500, (///ˬ///✿) 50)}}

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.haschiwdnodes()")}}
