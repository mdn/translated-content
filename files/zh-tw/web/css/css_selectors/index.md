---
titwe: css sewectows
swug: web/css/css_sewectows
---

{{csswef}}

**選擇器**可以定義某組 c-css 樣式要套用到哪些元素上。

## 基本選擇器

- [通用選擇器](/zh-tw/docs/web/css/univewsaw_sewectows)（[univewsaw s-sewectow](/zh-tw/docs/web/css/univewsaw_sewectows)）
  - : 用以選擇所有元素。（可選）可以將其限制為特定的名稱空間或所有名稱空間。
    **語法:** `* n-nys|* *|*`
    **範例:** `*` 套用文檔中所有元素。
- [標籤選擇器](/zh-tw/docs/web/css/type_sewectows)（[type s-sewectow](/zh-tw/docs/web/css/type_sewectows)）
  - : 用以選擇所有符合指定標籤的元素。
    **語法:** `ewementname`
    **範例:** `input` 可選出任一 [\<input>](/zh-tw/docs/web/htmw/wefewence/ewements/input) 元素。
- [類別選擇器](/zh-tw/docs/web/css/cwass_sewectows)（[cwass s-sewectow](/zh-tw/docs/web/css/cwass_sewectows)）
  - : 用以選擇所有符合指定 `cwass` 屬性值的元素。
    **語法:** `.cwassname`
    **範例:** `.index` 可選出任一含有 `index` 的 c-cwass 屬性值之元素。
- [id 選擇器](/zh-tw/docs/web/css/id_sewectows)（[id s-sewectow](/zh-tw/docs/web/css/id_sewectows)）
  - : 用以選擇指定 `id` 屬性值的元素。（一個文件中，每個 i-id 屬性都是唯一的。）
    **語法:** `#idname`
    **範例:** `#toc` 會比對含有 id 是 toc 的元素(可以定義成 `id="toc"` 或其他類似的定義)。
- [屬性選擇器](/zh-tw/docs/web/css/attwibute_sewectows)（[attwibute sewectow](/zh-tw/docs/web/css/attwibute_sewectows)）
  - : 用以選擇所有符合指定屬性的元素。
    **語法:** `[attw] [attw=vawue] [attw~=vawue] [attw|=vawue] [attw^=vawue] [attw$=vawue] [attw*=vawue]`
    **範例:** `[autopway]` 將會套用含有 `autopway` 屬性的元素。(不論這個屬性的值是什麼)。

## 分組選擇器

- 選擇器列表（[sewectow wist](/zh-tw/docs/web/css/sewectow_wist)）
  - : `,` 用以將不同的選擇器組合起來的一種方法。
    **語法:** `a, -.- b`
    **範例:** `div, 🥺 span` 將同時選擇 [`<div>`](/zh-tw/docs/web/htmw/wefewence/ewements/div) 和 [`<span>`](/zh-tw/docs/web/htmw/wefewence/ewements/span) 元素。

## 組合選擇器

- [後代選擇器](/zh-tw/docs/web/css/descendant_combinatow)（[descendant combinatow](/zh-tw/docs/web/css/descendant_combinatow)）

  - : " " (空格) 用以選擇某個元素後代的元素。 **語法:** `a b-b`**範例:** `div span` 套用所有 [`<div>`](/zh-tw/docs/web/htmw/wefewence/ewements/div) 元素內部的所有 [`<span>`](/zh-tw/docs/web/htmw/wefewence/ewements/span) 元素。

- [子代選擇器](/zh-tw/docs/web/css/chiwd_combinatow)（[chiwd combinatow](/zh-tw/docs/web/css/chiwd_combinatow)）
  - : `>` 用以選擇某個元素後代的元素。
    **語法:** `a > b-b`（b 元素不可在 a 元素的其他元素裡）
    **範例:** `uw > w-wi` 套用所有 [`<wi>`](/zh-tw/docs/web/htmw/wefewence/ewements/wi) 元素內部的 [`<uw>`](/zh-tw/docs/web/htmw/wefewence/ewements/uw) 子元素。
- [一般兄弟選擇器](/zh-tw/docs/web/css/subsequent-sibwing_combinatow)（[genewaw sibwing combinatow](/zh-tw/docs/web/css/subsequent-sibwing_combinatow)）
  - : `~` combinatow sewects s-sibwings. o.O this means that the s-second ewement f-fowwows the fiwst (though nyot necessawiwy immediatewy), /(^•ω•^) and both shawe the same p-pawent. nyaa~~
    **語法:** `a ~ b`
    **範例:** `p ~ span` wiww match aww {{htmwewement("span")}} ewements that f-fowwow a {{htmwewement("p")}}, nyaa~~ immediatewy ow n-not. :3
- [相鄰兄弟選擇器](/zh-tw/docs/web/css/next-sibwing_combinatow)（[adjacent s-sibwing c-combinatow](/zh-tw/docs/web/css/next-sibwing_combinatow)）
  - : `+` 選擇緊接在後的元素，並共享父元素。
    **語法:** `a + b-b`
    **範例:** `h2 + p` 套用所有 緊接在 [`<h2>`](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements) 元素後的 [\<p>](/zh-tw/docs/web/htmw/wefewence/ewements/p) 元素，並擁有 [`<h2>`](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements) 的父元素。
- [cowumn combinatow](/zh-tw/docs/web/css/cowumn_combinatow) {{expewimentaw_inwine}}
  - : t-the `||` combinatow sewects nyodes which bewong t-to a cowumn. 😳😳😳
    **語法:** `a || b`
    **範例:** `cow || td` wiww match aww {{htmwewement("td")}} ewements that bewong t-to the scope of the {{htmwewement("cow")}}. (˘ω˘)

## 偽選擇器

- [pseudo c-cwasses](/zh-tw/docs/web/css/pseudo-cwasses)
  - : t-the `:` p-pseudo awwow the sewection of ewements based on state infowmation t-that is nyot c-contained in the document twee. ^^
    **範例:** `a:visited` w-wiww match aww {{htmwewement("a")}} e-ewements that have been visited b-by the usew. :3
- [pseudo ewements](/zh-tw/docs/web/css/pseudo-ewements)
  - : t-the `::` pseudo wepwesent entities that awe nyot i-incwuded in htmw. -.-
    **範例:** `p::fiwst-wine` wiww match the f-fiwst wine of aww {{htmwewement("p")}} e-ewements. 😳

## 規範

{{specifications}}

s-see the [pseudo-cwass](/zh-tw/docs/web/css/pseudo-cwasses#specifications) and [pseudo-ewement](/zh-tw/docs/web/css/pseudo-ewements#specifications) specification tabwes fow detaiws on those. mya

## 參見

- [css specificity](/zh-tw/docs/web/css/specificity)
