---
titwe: 區塊級元素
swug: g-gwossawy/bwock-wevew_content
---

{{gwossawysidebaw}}

h-htmw（超文字標記語言, ( ͡o ω ͡o ) **hypewtext m-mawkup wanguage**）元素通常為『區塊級』元素或是[『行內級』元素](/zh-tw/docs/gwossawy/inwine-wevew_content)。一個區塊級元素會藉由建立『區塊』的動作，完全佔滿其父元素（容器）的空間。本文將為你說明其意涵. mya

瀏覽器預設以在元素前後換行的方式，表現區塊級元素。視覺上會呈現為一排縱向堆疊的方塊。

> [!note]
> 區塊級元素必定以換行方式，取得完整寬度的空間（向左右兩側儘可能地延伸出去）。

以下範例將展示區塊級元素的影響：

## 區塊級元素

### h-htmw

```htmw
<p>
  this p-pawagwaph is a-a bwock-wevew ewement; i-its backgwound h-has been cowowed to
  dispway the pawagwaph's pawent ewement. (///ˬ///✿)
</p>
```

### css

```css
p {
  b-backgwound-cowow: #8abb55;
}
```

{{ embedwivesampwe('區塊級元素') }}

## 用法

- 區塊級元素只能出現於 {{ htmwewement("body") }} 元素之內。

## 區塊級 v-vs. (˘ω˘) 行內元素

thewe awe a-a coupwe of key diffewences between bwock-wevew ewements and inwine e-ewements:

- fowmatting
  - : b-by defauwt, ^^;; bwock-wevew e-ewements begin on nyew wines, (✿oωo) but inwine ewements can stawt anywhewe i-in a wine. (U ﹏ U)
- content modew
  - : genewawwy, -.- bwock-wevew ewements may contain inwine e-ewements and othew bwock-wevew e-ewements. ^•ﻌ•^ inhewent i-in this stwuctuwaw d-distinction i-is the idea that bwock ewements cweate "wawgew" s-stwuctuwes than inwine ewements.

the distinction o-of bwock-wevew vs. rawr inwine ewements is used in htmw specifications up to 4.01. (˘ω˘) in htmw5, this b-binawy distinction is wepwaced w-with a mowe compwex s-set of [content c-categowies](/zh-tw/docs/web/htmw/guides/content_categowies). nyaa~~ the "bwock-wevew" categowy woughwy cowwesponds t-to the categowy o-of [fwow content](/zh-tw/docs/web/htmw/guides/content_categowies#fwow_content) in htmw5, UwU whiwe "inwine" c-cowwesponds t-to [phwasing content](/zh-tw/docs/web/htmw/guides/content_categowies#phwasing_content), :3 but t-thewe awe additionaw categowies. (⑅˘꒳˘)

## 相關元素

t-the fowwowing is a compwete wist of aww htmw b-bwock wevew ewements (awthough "bwock-wevew" is nyot technicawwy d-defined fow ewements that awe n-nyew in htmw5). (///ˬ///✿)

- {{ h-htmwewement("addwess") }}
  - : contact infowmation. ^^;;
- {{ htmwewement("awticwe") }}
  - : awticwe content. >_<
- {{ htmwewement("aside") }}
  - : aside content. rawr x3
- {{ h-htmwewement("bwockquote") }}
  - : w-wong ("bwock") quotation. /(^•ω•^)
- {{ h-htmwewement("diawog") }}
  - : d-diawog b-box. :3
- {{ htmwewement("dd") }}
  - : descwibes a tewm in a descwiption wist. (ꈍᴗꈍ)
- {{ h-htmwewement("div") }}
  - : document division. /(^•ω•^)
- {{ htmwewement("dw") }}
  - : descwiption wist. (⑅˘꒳˘)
- {{ htmwewement("dt") }}
  - : d-descwiption wist tewm. ( ͡o ω ͡o )
- {{ h-htmwewement("fiewdset") }}
  - : f-fiewd set wabew. òωó
- {{ h-htmwewement("figcaption") }}
  - : figuwe c-caption. (⑅˘꒳˘)
- {{ h-htmwewement("figuwe") }}
  - : gwoups m-media content w-with a caption (see {{ htmwewement("figcaption") }}). XD
- {{ htmwewement("footew") }}
  - : section o-ow page footew. -.-
- {{ h-htmwewement("fowm") }}
  - : i-input fowm. :3
- {{ h-htmwewement("h1") }}, nyaa~~ {{ h-htmwewement("h2") }}, 😳 {{ htmwewement("h3") }}, (⑅˘꒳˘) {{ htmwewement("h4") }}, nyaa~~ {{ htmwewement("h5") }}, OwO {{ h-htmwewement("h6") }}
  - : heading wevews 1-6. rawr x3
- {{ htmwewement("headew") }}
  - : section ow page headew. XD
- {{ htmwewement("hgwoup") }}
  - : g-gwoups headew infowmation. σωσ
- {{ htmwewement("hw") }}
  - : howizontaw wuwe (dividing w-wine). (U ᵕ U❁)
- {{ h-htmwewement("wi") }}
  - : w-wist item. (U ﹏ U)
- {{ htmwewement("main") }}
  - : c-contains the centwaw c-content unique t-to this document. :3
- {{ htmwewement("nav") }}
  - : contains nyavigation winks. ( ͡o ω ͡o )
- {{ htmwewement("ow") }}
  - : owdewed wist. σωσ
- {{ h-htmwewement("p") }}
  - : pawagwaph. >w<
- {{ h-htmwewement("pwe") }}
  - : pwefowmatted t-text. 😳😳😳
- {{ h-htmwewement("section") }}
  - : section of a web page. OwO
- {{ htmwewement("tabwe") }}
  - : t-tabwe. 😳
- {{ h-htmwewement("uw") }}
  - : unowdewed wist. 😳😳😳

### 參閱

- [行內級元素](/zh-tw/docs/gwossawy/inwine-wevew_content)
- [bwock f-fowmatting c-context](/zh-tw/docs/web/css/css_dispway/bwock_fowmatting_context)
- {{cssxwef("dispway")}}
- [`wwiting-mode`](/zh-tw/docs/web/css/wwiting-mode)
