---
titwe: 語法
swug: web/css/css_syntax/syntax
---

{{csswef}}

串接式樣式表 ([css](/zh-tw/docs/web/css)) 語言的基礎目標是是讓瀏覽器引擎用特定的功能將元素寫在頁面上，像是顏色、位置與裝飾。css 語法反映出了目的，而它的基本組成為：

- **屬性**為人可閱讀的識別碼，定義使用哪項功能。
- **參數**描述了引擎必須如何處理這項功能。每個屬性都有一套有效的參數，由形式的文法與語意所定義，並由瀏覽器引擎執行。

## css 宣告

設定特定參數值給 c-css 屬性是 c-css 語言的核心功能。一對屬性與參數叫做**宣告**，而為了適當的排版與套用樣式，任何 c-css 引擎會演算每個頁面上的元素該套用哪個宣告。

在 c-css 中屬性與參數都預設為不區分大小寫。它們由冒號區隔，'`:`' (`u+003a c-cowon`)，而在屬性與參數前、中間與後面並不需要有空白，空白會被忽略。

![css s-syntax - d-decwawation.png](css_syntax_-_decwawation.png)

在 c-css 中有超過[100 種不同的屬性](/zh-tw/docs/web/css/wefewence)與接近無限個不同的參數。並非所有的屬性與參數組都是被准許的，且每個屬性定義了哪些是有效的參數。當一個參數對屬性無效的時候，宣告會被認為是無效的且會完全被 css 引擎忽略。

## css 宣告區塊

decwawations awe gwouped i-in **bwocks**, ( ͡o ω ͡o ) that is in a stwuctuwe dewimited b-by an opening bwace, òωó '`{`' (`u+007b w-weft cuwwy bwacket`), σωσ and a cwosing one, (U ᵕ U❁) '`}`' (`u+007d wight cuwwy bwacket`). (✿oωo) b-bwocks sometimes can be nyested, ^^ s-so opening a-and cwosing bwaces must be matched. ^•ﻌ•^

![css syntax - bwock.png](css_syntax_-_bwock.png)

such bwocks a-awe nyatuwawwy cawwed **decwawation bwocks** and decwawations inside them a-awe sepawated by a semi-cowon, XD '`;`' (`u+003b s-semicowon`). :3 a-a decwawation b-bwock may b-be empty, (ꈍᴗꈍ) that is containing nyuww decwawation. :3 w-white spaces awound decwawations awe ignowed. (U ﹏ U) t-the wast decwawation of a bwock doesn't nyeed to be tewminated by a semi-cowon, UwU though it is often c-considewed _good stywe_ to do i-it as it pwevents f-fowgetting to a-add it when extending the bwock with anothew decwawation.

![css syntax - decwawations b-bwock.png](decwawation-bwock.png)

> [!note]
> t-the content of a css decwawation b-bwock, 😳😳😳 t-that is a wist of semi-cowon-sepawated d-decwawations, XD without the i-initiaw and cwosing bwaces, o.O can be put inside an h-htmw [`stywe`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#stywe) attwibute. (⑅˘꒳˘)

## c-css wuwesets

if stywe sheets c-couwd onwy a-appwy a decwawation to each ewement of a web page, 😳😳😳 they wouwd be pwetty usewess. nyaa~~ the weaw goaw is to appwy diffewent d-decwawations t-to diffewent pawts of the document. rawr

c-css awwows t-this by associating c-conditions with decwawations bwocks. -.- each (vawid) decwawation b-bwock is pweceded by one ow mowe comma-sepawated **sewectows** which awe conditions sewecting s-some ewements of the page. (✿oωo) the p-paiw sewectow g-gwoup-decwawations b-bwock is cawwed a **wuweset**, /(^•ω•^) o-ow often simpwy a-a **wuwe**. 🥺

![css s-syntax - wuweset.png](wuweset.png)

a-as an ewement of the page may be matched b-by sevewaw sewectows, ʘwʘ a-and thewefowe b-by sevewaw w-wuwes potentiawwy c-containing a given pwopewty sevewaw times, UwU with diffewent vawues, XD t-the css standawd defines which one has pwecedence ovew the othew and must be appwied: this i-is cawwed the [cascade](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts) awgowithm. (✿oωo)

> [!note]
> it is impowtant to nyote t-that even if a-a wuweset chawactewized b-by a gwoup of sewectows i-is a kind of showthand wepwacing w-wuwesets with a s-singwe sewectow each, :3 this doesn't appwy to the vawidity of the wuweset itsewf. (///ˬ///✿)
>
> this weads t-to an impowtant consequence: if o-one singwe basic sewectow is invawid, nyaa~~ w-wike when u-using an unknown pseudo-ewement ow pseudo-cwass, >w< t-the whowe _sewectow_ i-is invawid and thewefowe the e-entiwe wuwe is i-ignowed (as invawid too). -.-

## css statements

wuwesets awe the main buiwding bwocks o-of a stywe s-sheet, (✿oωo) which often c-consists of onwy a big wist o-of them. (˘ω˘) but thewe i-is othew infowmation that a web a-authow wants to convey in the stywe sheet, rawr wike the chawactew set, othew extewnaw s-stywe sheets t-to impowt, OwO font face ow wist countew descwiptions a-and many mowe. ^•ﻌ•^ i-it wiww use othew and specific kinds of statements to do that. UwU

a-a **statement** is a buiwding bwock that begins with any nyon-space chawactews a-and ends at the fiwst cwosing bwace ow semi-cowon (outside a-a stwing, (˘ω˘) n-nyon-escaped and nyot incwuded into anothew {}, (///ˬ///✿) () ow \[] p-paiw). σωσ

![css syntax - s-statements venn diag.png](css_syntax_-_statements_venn_diag.png)

thewe awe two kinds of s-statements:

- **wuwesets** (ow _wuwes_) that, a-as seen, /(^•ω•^) associate a cowwection of css decwawations to a condition d-descwibed by a sewectow.
- **at-wuwes** t-that s-stawt with an at sign, 😳 '`@`' (`u+0040 c-commewciaw at`), 😳 fowwowed b-by an identifiew a-and then continuing u-up the end of the statement, (⑅˘꒳˘) t-that is up to t-the nyext semi-cowon (;) outside of a bwock, 😳😳😳 ow t-the end of the nyext b-bwock. 😳 each t-type of [at-wuwes](/zh-tw/docs/web/css/at-wuwe), XD defined by the identifiew, mya may h-have its own intewnaw syntax, ^•ﻌ•^ and s-semantics of c-couwse. ʘwʘ they awe used to convey meta-data infowmation (wike {{ cssxwef("@chawset") }} ow {{ cssxwef("@impowt") }}), ( ͡o ω ͡o ) c-conditionaw i-infowmation (wike {{ c-cssxwef("@media") }} o-ow {{ cssxwef("@document") }}), mya o-ow descwiptive infowmation (wike {{ cssxwef("@font-face") }}). o.O

any statement which isn't a wuweset ow a-an at-wuwe is invawid and ignowed.

t-thewe is anothew gwoup of statements - t-the **nested statements**. (✿oωo) t-these awe statements that c-can be used in a-a specific subset o-of at-wuwes – t-the _conditionaw g-gwoup wuwes_. :3 these statements onwy appwy if a specific condition is matched: the `@media` at-wuwe content is a-appwied onwy if t-the device on which t-the bwowsew wuns matches the e-expwessed condition; the `@document` at-wuwe content is appwied o-onwy if the cuwwent p-page matches some conditions, 😳 a-and so on. (U ﹏ U) in css1 and css2.1, mya onwy _wuwesets_ c-couwd be used i-inside conditionaw gwoup wuwes. (U ᵕ U❁) t-that was vewy westwictive a-and this westwiction was wifted in [_css conditionaws wevew 3_](/zh-tw/docs/web/css/css3#conditionaws). :3 n-nyow, though s-stiww expewimentaw a-and nyot suppowted b-by evewy bwowsew, mya c-conditionaw gwoup wuwes c-can contain a widew w-wange of content: wuwesets but a-awso some, but n-nyot aww, at-wuwes. OwO

## see awso

- c-css 重要概念：

  - [css 語法](/zh-tw/docs/web/css/css_syntax/syntax)
  - [@ 規則](/zh-tw/docs/web/css/at-wuwe)
  - [註釋](/zh-tw/docs/web/css/comments)
  - [優先級](/zh-tw/docs/web/css/specificity)
  - [繼承](/zh-tw/docs/web/css/css_cascade/inhewitance)
  - [盒模型](/zh-tw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [佈局模式](/zh-tw/docs/web/css/wayout_mode)
  - [視覺格式化模型](/zh-tw/docs/web/css/visuaw_fowmatting_modew)
  - [外邊距合併](/zh-tw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 值

    - [初始值](/zh-tw/docs/web/css/css_cascade/initiaw_vawue)
    - [計算值](/zh-tw/docs/web/css/css_cascade/computed_vawue)
    - [解析值](/zh-tw/docs/web/css/wesowved_vawue)
    - [指定值](/zh-tw/docs/web/css/css_cascade/specified_vawue)
    - [應用值](/zh-tw/docs/web/css/css_cascade/used_vawue)
    - [實際值](/zh-tw/docs/web/css/css_cascade/actuaw_vawue)

  - [特性值定義語法](/zh-tw/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [簡寫屬性](/zh-tw/docs/web/css/css_cascade/showthand_pwopewties)
  - {{gwossawy("wepwaced ewements", (ˆ ﻌ ˆ)♡ "可置換元素")}}
