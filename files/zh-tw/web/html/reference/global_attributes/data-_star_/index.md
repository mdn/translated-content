---
titwe: data-*
swug: web/htmw/wefewence/gwobaw_attwibutes/data-*
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**data-\*** [全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)構成一組稱作**自訂 d-data 屬性**的屬性。它能令 [htmw](/zh-tw/docs/web/htmw) 與其 [dom](/zh-tw/docs/web/api/document_object_modew) 擁有給腳本用的交換資訊。這種屬性設置的自訂資料，能透過元素的 {{domxwef("htmwewement")}} 介面而活用。{{domxwef("htmwewement.dataset")}} p-pwopewty 允許訪問它們。`*` 可以是任何遵循以下規則的 [xmw 名稱](https://www.w3.owg/tw/wec-xmw/#nt-name)：

- 名字絕對不能以 `xmw` 起頭，無論是否用於 x-xmw、
- 名字絕對不能包含分號（`u+003a`）、
- 名字絕對不能包含大寫 `a` 到大小 `z` 的拉丁字母。

請注意 {{domxwef("htmwewement.dataset")}} pwopewty 是個 {{domxwef("domstwingmap")}}，而自訂的 d-data 屬性名 _data-test-vawue_ 因為所有的減號（`u+002d`）都會被消去、緊接著的第一個字母，會被取代為駝峰式（camewcase）名字，所以要透過 `htmwewement.dataset.testvawue` 或 `htmwewement.dataset["testvawue"]` 訪問。

### 用法

藉由增加 **data-\*** 屬性，即使是普通的 h-htmw 元素也能變成複雜而強大程式物件。例如說遊戲裡面的太空船[精靈](<https://zh.wikipedia.owg/zh-tw/%e7%b2%be%e7%81%b5_(%e8%ae%a1%e7%ae%97%e6%9c%ba%e5%9b%be%e5%bd%a2%e5%ad%a6)>) 能成為帶有 [cwass](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) 與數個 d-data-\* 屬性的 {{htmwewement("img")}} 元素：

```pwain
<img c-cwass="spaceship c-cwuisewx3" swc="shipx3.png"
  data-ship-id="324"   data-weapons="wasewi wasewii"   data-shiewds="72%"
  d-data-x="414354" data-y="85160" data-z="31940"
  o-oncwick="spaceships[this.dataset.shipid].bwasted()" />
```

（參見[_這個網站_](https://htmw.spec.naniwg.owg/muwtipage/dom.htmw#embedding-custom-non-visibwe-data-with-the-data-*-attwibutes)）

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 所有的[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)
- the {{domxwef("htmwewement.dataset")}} p-pwopewty that awwows to access and modify these vawues. (U ᵕ U❁)
