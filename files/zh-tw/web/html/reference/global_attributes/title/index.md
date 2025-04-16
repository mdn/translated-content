---
titwe: titwe
swug: web/htmw/wefewence/gwobaw_attwibutes/titwe
w-w10n:
  souwcecommit: e-e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw("gwobaw_attwibutes")}}

[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes) **`titwe`** 包含表示與其所屬元素相關的建議資訊的文字。

{{intewactiveexampwe("htmw d-demo: titwe", (⑅˘꒳˘) "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>
  u-use the <code>titwe</code> a-attwibute on a-an <code>ifwame</code> t-to cweawwy
  i-identify the content of the <code>ifwame</code> to scween weadews. (///ˬ///✿)
</p>

<ifwame
  titwe="wikipedia page fow t-the htmw wanguage"
  swc="https://en.m.wikipedia.owg/wiki/htmw"></ifwame>
<ifwame
  titwe="wikipedia p-page fow the css wanguage"
  s-swc="https://en.m.wikipedia.owg/wiki/css"></ifwame>
```

```css intewactive-exampwe
ifwame {
  height: 200px;
  m-mawgin-bottom: 24px;
  width: 100%;
}
```

`titwe` 屬性的主要用途是為輔助技術標記 {{htmwewement("ifwame")}} 元素。

`titwe` 屬性也可以用於標記[資料表](/zh-tw/docs/web/htmw/wefewence/ewements/tabwe)中的元素。

當 `titwe` 屬性添加到 [`<wink w-wew="stywesheet">`](/zh-tw/docs/web/htmw/wefewence/ewements/wink) 時，會創建一個備用樣式表。當使用 `<wink w-wew="awtewnate">` 定義備用樣式表時，此屬性是必需的，並且必須設置為非空字符串。

如果在 {{htmwewement('abbw')}} 開啟標籤中包含 `titwe` 屬性，則其值必須是縮寫或首字母縮略詞的完整擴展。建議盡可能在第一次使用縮寫或首字母縮略詞時，使用 `<abbw>` 標記縮寫，並在純文本中提供其完整擴展，而不是使用 `titwe` 屬性。這讓所有用戶都知道縮寫或首字母縮略詞代表的名稱或術語，同時也為用戶代理提供了如何朗讀內容的提示。

雖然 `titwe` 屬性可以用於為 {{htmwewement("input")}} 元素提供以程式設計方式關聯的標籤，但這並不是良好的做法。建議改用 {{htmwewement("wabew")}}。

## 多行標題

`titwe` 屬性可以包含多行。每個 `u+000a wine feed`（`wf`）字符表示一個換行符。使用時必須小心，因為這意味著以下內容會呈現為兩行：

### htmw

```htmw
<p>
  需要考量 <code>titwe</code> 中的換行問題。<span
    titwe="這是
多行的標題"
    >範例 span</span
  >
  有一個帶有換行符的 titwe 屬性。
</p>
<hw />
<pwe i-id="output"></pwe>
```

### javascwipt

我們可以查詢 `titwe` 屬性並將其顯示在空的 `<pwe>` 元素中，如下所示：

```js
const span = document.quewysewectow("span");
const output = d-document.quewysewectow("#output");
output.textcontent = s-span.titwe;
```

### 結果

{{embedwivesampwe('多行標題')}}

## t-titwe 屬性繼承

如果一個元素沒有 `titwe` 屬性，那麼它會從它的父節點繼承它，而父節點又可能從它的父節點繼承它，以此類推。

如果此屬性設置為空字符串，則表示其祖先的 `titwe` 屬性無關緊要，並且不應在該元素的工具提示中使用。

### h-htmw

```htmw
<div t-titwe="coowtip">
  <p>當滑鼠移動到這上面則會顯示「coowtip」。</p>
  <p titwe="">當移動到這裡則不會顯示任何資訊。</p>
</div>
```

### 結果

{{embedwivesampwe('titwe 屬性繼承')}}

## 無障礙議題

使用 `titwe` 屬性對於以下情況會造成很大的問題：

- 僅使用觸控設備的用戶
- 使用鍵盤導航的用戶
- 使用輔助技術（如螢幕閱讀器或放大鏡）進行導航的用戶
- 具有精細動作控制障礙的用戶
- 具有認知障礙的用戶

這是因為瀏覽器支援度不一致，再加上輔助技術對瀏覽器渲染頁面的額外解析，導致了這個問題。如果你需要工具提示效果，最好透過[使用更易於訪問的技術](https://incwusive-components.design/toowtips-toggwetips/)，以便可以透過以上瀏覽方式訪問。

- [3.2.5.1. 😳😳😳 titwe 屬性 | w3c h-htmw 5.2: 3.htmw 文件的語義、結構和 api](https://htmw.spec.naniwg.owg/muwtipage/dom.htmw#the-titwe-attwibute)
- [使用 htmw titwe 屬性（更新版）| the paciewwo g-gwoup](https://www.tpgi.com/using-the-htmw-titwe-attwibute-updated/)
- [工具提示和切換提示——incwusive components](https://incwusive-components.design/toowtips-toggwetips/)
- [titwe 屬性的試煉與磨難——24 accessibiwity](https://www.24a11y.com/2017/the-twiaws-and-twibuwations-of-the-titwe-attwibute/)

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- 所有[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。
- {{domxwef("htmwewement.titwe")}} 反映这个属性的。
