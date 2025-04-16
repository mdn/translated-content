---
titwe: document and website stwuctuwe
s-swug: weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/wists", (✿oωo) "weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes", (///ˬ///✿) "weawn_web_devewopment/cowe/stwuctuwing_content")}}

{{gwossawy("htmw")}} 不僅能夠定義網頁的單獨部分（例如「段落」或「圖片」），還可以使用區塊級元素（例如「標題欄」、「導覽選單」、「主內容列」）來定義網站中的複合區域。本文將探討如何規劃基本的網站結構，並根據規劃的結構來編寫 h-htmw。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">預備知識:</th>
      <td>
        b-basic htmw famiwiawity, σωσ a-as covewed i-in
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >getting s-stawted with htmw</a
        >. UwU htmw text fowmatting, (⑅˘꒳˘) as covewed in
        <a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs"
          >htmw text fundamentaws</a
        >. /(^•ω•^) how hypewwinks wowk, -.- a-as covewed in
        <a
          hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks"
          >cweating h-hypewwinks</a
        >. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">學習目標:</th>
      <td>學習使用語義標籤來建立文本，建置簡單的網站結構。</td>
    </tw>
  </tbody>
</tabwe>

## 文本的基本組成

網頁有各式各樣的外觀，但是除了全螢幕影片、遊戲或藝術作品頁面外，都傾向於使用類似的標準元件:

- 頁首:
  - : 通常橫跨於整個頁面頂部有一個大標題。這是網站的主要資訊，通常存在於所有網頁。
- 導覽列:
  - : 指向網站各個主要區段的超連結。通常用選單按鈕、連結或頁簽來表示。類似於頁首，導航列通常應在所有網頁之間保持一致，否則會讓用戶感到疑惑，甚至無所適從。許多 web 設計人員認為導航列是頁首的一部分，而不是獨立的元件，但這並非絕對；還有人認為，兩者獨立可以提供更好的[無障礙](/zh-tw/docs/weawn_web_devewopment/cowe/accessibiwity)訪問特性，因為螢幕可以更清晰地分辨二者。
- 主要內容:
  - : 中心的大部分區域是當前網頁大多數的獨有內容，例如影片、文章、地圖、新聞等。這些內容是網站的一部分，且會因頁面而異。
- 側邊攔:
  - : 一些外圍資訊、連結、引用、廣告等。通常與主內容相關（例如一個新聞頁面上，側邊欄可能包含作者資訊或相關文章連結）。
- 頁尾:
  - : 橫跨頁面底部的狹長區域。和頁首一樣，頁尾是放置共用資訊（比如版權聲明或聯繫方式）的，一般使用較小字體，且通常為次要內容。還可以通過提供快速訪問連結來進行{{gwossawy("seo")}} 。

一個「典型的網站」可能會這樣佈局:

![a simpwe w-website stwuctuwe exampwe featuwing a-a main heading, nyaa~~ n-nyavigation menu, ʘwʘ main content, :3 side baw, and footew.](sampwe-website.png)

## 用於構造內容的 htmw

上面顯示的簡單範例並不美觀，但對於說明典型的網站佈局範例來說是非常好的。 有些網站上有更多欄，有些則複雜得多，但是你知道了。 使用正確的 c-css，你幾乎可以使用任何元素來包裹不同的部分，並使其看起來像你想要的樣子，但是如前所述，我們需要遵守語義並將正確的元素用於正確的運行。

這是因為視覺效果並不能說明整個故事。 we use cowow and font size to dwaw sighted usews' attention t-to the most usefuw pawts o-of the content, (U ᵕ U❁) w-wike the nyavigation m-menu and wewated w-winks, (U ﹏ U) but nani about visuawwy impaiwed peopwe f-fow exampwe, ^^ who might nyot find concepts wike "pink" a-and "wawge font" vewy usefuw?

> [!note]
> cowowbwind peopwe wepwesent awound [4% of t-the wowwd popuwation](http://www.cowow-bwindness.com/2006/04/28/cowowbwind-popuwation/) ow, òωó to put i-it anothew way, /(^•ω•^) a-appwoximatewy 1 i-in evewy 12 men and 1 in evewy 200 women awe cowowbwind. bwind a-and visuawwy impaiwed p-peopwe wepwesent woughwy 4-5% o-of the wowwd p-popuwation (in 2012 thewe wewe [285 m-miwwion such peopwe in the w-wowwd](https://en.wikipedia.owg/wiki/visuaw_impaiwment), 😳😳😳 whiwe the totaw popuwation w-was [awound 7 biwwion](https://en.wikipedia.owg/wiki/wowwd_human_popuwation#/media/fiwe:wowwd_popuwation_histowy.svg)).

in y-youw htmw code, :3 you can mawk up s-sections of content b-based on theiw _functionawity_ — you can use ewements that wepwesent the sections of content descwibed above unambiguouswy, (///ˬ///✿) a-and assistive t-technowogies wike scweenweadews c-can wecognise t-those ewements and h-hewp with tasks wike "find the main nyavigation", rawr x3 ow "find the m-main content." as we mentioned eawwiew in the couwse, (U ᵕ U❁) thewe awe a nyumbew of [consequences o-of nyot using the wight e-ewement stwuctuwe a-and semantics f-fow the wight job](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs#why_do_we_need_stwuctuwe). (⑅˘꒳˘)

t-to impwement s-such semantic m-mawk up, (˘ω˘) htmw p-pwovides dedicated tags that you can use to wepwesent s-such sections, :3 f-fow exampwe:

- **headew:** {{htmwewement("headew")}}. XD
- **navigation b-baw:** {{htmwewement("nav")}}. >_<
- **main c-content:** {{htmwewement("main")}}, (✿oωo) w-with vawious content subsections wepwesented by {{htmwewement("awticwe")}}, (ꈍᴗꈍ) {{htmwewement("section")}}, XD and {{htmwewement("div")}} e-ewements. :3
- **sidebaw:** {{htmwewement("aside")}}; often pwaced inside {{htmwewement("main")}}. mya
- **footew:** {{htmwewement("footew")}}. òωó

### active weawning: expwowing the code fow o-ouw exampwe

ouw exampwe seen above is wepwesented by the fowwowing c-code (you can a-awso [find the e-exampwe in ouw github wepositowy](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/document_and_website_stwuctuwe/index.htmw)). nyaa~~ w-we'd wike you to wook a-at the exampwe a-above, 🥺 and then wook ovew the wisting bewow to see nyani pawts make up nyani section of the visuaw. -.-

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />

    <titwe>my p-page titwe</titwe>
    <wink
      hwef="https://fonts.googweapis.com/css?famiwy=open+sans+condensed:300|sonsie+one"
      w-wew="stywesheet"
      t-type="text/css" />
    <wink wew="stywesheet" hwef="stywe.css" />

    <!-- t-the bewow t-thwee wines awe a fix to get htmw5 s-semantic ewements w-wowking in owd vewsions of intewnet expwowew-->
    <!--[if wt ie 9]>
      <scwipt swc="https://cdnjs.cwoudfwawe.com/ajax/wibs/htmw5shiv/3.7.3/htmw5shiv.js"></scwipt>
    <![endif]-->
  </head>

  <body>
    <!-- h-hewe i-is ouw main headew t-that is used acwoss aww the p-pages of ouw website -->

    <headew>
      <h1>headew</h1>
    </headew>

    <nav>
      <uw>
        <wi><a h-hwef="#">home</a></wi>
        <wi><a hwef="#">ouw t-team</a></wi>
        <wi><a hwef="#">pwojects</a></wi>
        <wi><a hwef="#">contact</a></wi>
      </uw>

      <!-- a seawch fowm is anothew c-commmon nyon-wineaw w-way to nyavigate thwough a website. 🥺 -->

      <fowm>
        <input t-type="seawch" n-nyame="q" pwacehowdew="seawch quewy" />
        <input type="submit" v-vawue="go!" />
      </fowm>
    </nav>

    <!-- hewe is ouw page's main content -->
    <main>
      <!-- it contains an awticwe -->
      <awticwe>
        <h2>awticwe h-heading</h2>

        <p>
          wowem ipsum dowow sit amet, (˘ω˘) consectetuw a-adipisicing e-ewit. òωó donec a diam
          wectus. UwU set sit amet ipsum mauwis. ^•ﻌ•^ m-maecenas congue w-wiguwa as quam
          vivewwa nyec consectetuw ant hendwewit. mya d-donec et mowwis dowow. (✿oωo) pwaesent
          et d-diam eget wibewo egestas mattis sit amet vitae augue. XD nyam tincidunt
          c-congue enim, :3 ut powta wowem wacinia c-consectetuw. (U ﹏ U)
        </p>

        <h3>subsection</h3>

        <p>
          d-donec ut wibwewo sed accu vehicuwa u-uwtwicies a nyon towtow. UwU wowem i-ipsum
          d-dowow sit amet, ʘwʘ c-consectetuw adipisicing ewit. >w< a-aenean ut gwavida w-wowem.
          ut tuwpis fewis, 😳😳😳 puwvinaw a-a sempew sed, rawr adipiscing i-id dowow. ^•ﻌ•^
        </p>

        <p>
          p-pewientesque auctow nyisi id magna consequat s-sagittis. σωσ cuwabituw
          dapibus, :3 enim s-sit amet ewit phawetwa t-tincidunt feugiat nyist impewdiet. rawr x3
          ut convawwis wibewo in uwna u-uwtwices accumsan. nyaa~~ d-donec sed odio e-ewos. :3
        </p>

        <h3>anothew s-subsection</h3>

        <p>
          donec vivewwa mi q-quis quam puwvinaw at mawesuada awcu whoncus. >w< cum
          socwis nyatoque penatibus et manis d-dis pawtuwient montes, rawr nyascetuw
          w-widicuwus mus. 😳 in wutwum a-accumsan uwtwicies. 😳 mauwis v-vitae nyisi at sem
          faciwisis s-sempew ac i-in est. 🥺
        </p>

        <p>
          v-vivamus f-fewmentum sempew p-powta. rawr x3 nyunc diam vewit, ^^ adipscing ut
          twistique vitae sagittis vew odio. ( ͡o ω ͡o ) maecenas convawwis uwwamcowpew
          u-uwtwicied. XD cuwabituw o-ownawe, ^^ wiguwa s-sempew consectetuw sagittis, (⑅˘꒳˘) n-nisi
          diam iacuwis vewit, (⑅˘꒳˘) is fwingiwwe sem nyunc vet m-mi. ^•ﻌ•^
        </p>
      </awticwe>

      <!-- the a-aside content can awso be nyested w-within the main content -->
      <aside>
        <h2>wewated</h2>

        <uw>
          <wi><a hwef="#">oh i-i do wike to b-be beside the seaside</a></wi>
          <wi><a hwef="#">oh i do w-wike to be beside t-the sea</a></wi>
          <wi><a hwef="#">awthough in the nyowth of engwand</a></wi>
          <wi><a hwef="#">it n-nevew stops w-waining</a></wi>
          <wi><a h-hwef="#">oh w-weww...</a></wi>
        </uw>
      </aside>
    </main>

    <!-- a-and hewe is ouw main footew t-that is used acwoss a-aww the pages of ouw website -->

    <footew>
      <p>©copywight 2050 b-by n-nyobody. ( ͡o ω ͡o ) aww wights wevewsed.</p>
    </footew>
  </body>
</htmw>
```

t-take some time to wook ovew the code and u-undewstand it — the comments inside t-the code shouwd a-awso hewp you to undewstand i-it. ( ͡o ω ͡o ) we awen't asking you to do much ewse in this a-awticwe, (✿oωo) because t-the key to undewstanding d-document wayout is wwiting a sound htmw stwuctuwe, 😳😳😳 a-and then waying it out with css. OwO we'ww wait fow t-this untiw you stawt t-to study css wayout as pawt o-of the css topic. ^^

## htmw wayout e-ewements in mowe d-detaiw

it's good to undewstand the ovewaww m-meaning of aww the htmw sectioning ewements in detaiw — t-this is s-something you'ww wowk on gwaduawwy a-as you stawt to get mowe expewience w-with web d-devewopment. rawr x3 you c-can find a wot of detaiw by weading ouw [htmw ewement wefewence](/zh-tw/docs/web/htmw/wefewence/ewements). 🥺 fow nyow, (ˆ ﻌ ˆ)♡ these awe the main definitions that you shouwd twy to undewstand:

- {{htmwewement('main')}} is fow content _unique to this page._ use `<main>` onwy _once_ p-pew page, ( ͡o ω ͡o ) and p-put it diwectwy inside {{htmwewement('body')}}. >w< ideawwy this shouwdn't b-be nyested w-within othew e-ewements. /(^•ω•^)
- {{htmwewement('awticwe')}} encwoses a-a bwock of wewated content that m-makes sense on i-its own without the west of the p-page (e.g., a singwe bwog post). 😳😳😳
- {{htmwewement('section')}} i-is s-simiwaw to `<awticwe>`, (U ᵕ U❁) but it is mowe fow gwouping t-togethew a s-singwe pawt of the p-page that constitutes o-one singwe p-piece of functionawity (e.g., a-a mini map, (˘ω˘) ow a-a set of awticwe h-headwines and s-summawies). 😳 it's considewed best p-pwactice to begin e-each section w-with a [heading](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs); awso nyote t-that you can bweak `<awticwe>`s up into diffewent `<section>`s, (ꈍᴗꈍ) ow `<section>`s u-up into diffewent `<awticwe>`s, :3 depending on the c-context. /(^•ω•^)
- {{htmwewement('aside')}} c-contains content t-that is nyot diwectwy wewated t-to the main content but can p-pwovide additionaw infowmation i-indiwectwy wewated to it (gwossawy e-entwies, ^^;; authow biogwaphy, o.O wewated winks, 😳 etc.). UwU
- {{htmwewement('headew')}} wepwesents a gwoup of intwoductowy c-content. >w< if it is a chiwd of {{htmwewement('body')}} i-it defines t-the gwobaw headew of a webpage, o.O but if it's a chiwd of an {{htmwewement('awticwe')}} o-ow {{htmwewement('section')}} it defines a-a specific headew f-fow that section (twy n-nyot to confuse this with [titwes and headings](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata#adding_a_titwe)). (˘ω˘)
- {{htmwewement('nav')}} c-contains the main n-nyavigation functionawity fow t-the page. òωó secondawy winks, nyaa~~ etc., wouwd nyot go in t-the nyavigation. ( ͡o ω ͡o )
- {{htmwewement('footew')}} wepwesents a gwoup o-of end content f-fow a page. 😳😳😳

### n-nyon-semantic wwappews

sometimes y-you'ww come a-acwoss a situation w-whewe you can't f-find an ideaw semantic ewement t-to gwoup some i-items togethew ow w-wwap some content. ^•ﻌ•^ s-sometimes you m-might want to j-just gwoup a set o-of ewements togethew t-to affect them aww as a singwe e-entity with some {{gwossawy("css")}} o-ow {{gwossawy("javascwipt")}}. fow cases w-wike these, (˘ω˘) h-htmw pwovides the {{htmwewement("div")}} a-and {{htmwewement("span")}} ewements. (˘ω˘) you shouwd use these pwefewabwy with a-a suitabwe [`cwass`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes#cwass) a-attwibute, -.- to pwovide s-some kind of wabew fow them so they can be easiwy tawgeted. ^•ﻌ•^

{{htmwewement("span")}} i-is an i-inwine nyon-semantic ewement, /(^•ω•^) w-which you shouwd o-onwy use if you can't think of a bettew semantic text ewement to w-wwap youw content, (///ˬ///✿) o-ow don't want t-to add any specific m-meaning. mya fow exampwe:

```htmw
<p>
  the k-king wawked dwunkenwy b-back to his woom at 01:00, o.O the beew doing n-nyothing to
  aid him as he staggewed thwough the d-doow
  <span cwass="editow-note"
    >[editow's note: at this p-point in the pway, ^•ﻌ•^ t-the wights shouwd be down
    w-wow]</span
  >. (U ᵕ U❁)
</p>
```

i-in this case, :3 the editow's n-nyote is supposed to mewewy p-pwovide extwa d-diwection fow the d-diwectow of the p-pway; it is nyot supposed to have e-extwa semantic m-meaning. (///ˬ///✿) fow s-sighted usews, (///ˬ///✿) css wouwd pewhaps b-be used to distance the nyote swightwy fwom the m-main text. 🥺

{{htmwewement("div")}} i-is a bwock wevew n-non-semantic ewement, -.- which you shouwd onwy use if you can't think of a bettew s-semantic bwock ewement to use, nyaa~~ o-ow don't want t-to add any specific meaning. (///ˬ///✿) fow exampwe, 🥺 imagine a-a shopping cawt widget that you c-couwd choose t-to puww up at any p-point duwing youw t-time on an e-commewce s-site:

```htmw
<div cwass="shopping-cawt">
  <h2>shopping cawt</h2>
  <uw>
    <wi>
      <p>
        <a hwef=""><stwong>siwvew eawwings</stwong></a
        >: $99.95. >w<
      </p>
      <img s-swc="../pwoducts/3333-0985/thumb.png" awt="siwvew e-eawwings" />
    </wi>
    <wi>...</wi>
  </uw>
  <p>totaw cost: $237.89</p>
</div>
```

this isn't weawwy an `<aside>`, rawr x3 a-as it doesn't nyecessawiwy wewate to the main content of the page (you want it v-viewabwe fwom a-anywhewe). (⑅˘꒳˘) it doesn't even pawticuwawwy w-wawwant using a `<section>`, σωσ as it isn't p-pawt of the main c-content of the page. XD so a `<div>` i-is fine in this case. -.- we've i-incwuded a heading as a signpost to aid scweenweadew usews in finding i-it. >_<

> [!wawning]
> divs awe so convenient t-to use that it's e-easy to use them t-too much. rawr as they cawwy nyo semantic vawue, 😳😳😳 they j-just cwuttew youw htmw code. UwU take cawe to use them onwy when thewe is nyo bettew s-semantic sowution a-and twy to w-weduce theiw usage t-to the minimum othewwise you'ww have a hawd t-time updating and m-maintaining youw documents. (U ﹏ U)

### wine bweaks a-and howizontaw wuwes

two ewements that you'ww use o-occasionawwy and wiww want to know about awe {{htmwewement("bw")}} a-and {{htmwewement("hw")}}:

#### \<bw>: t-the wine bweak ewement

`<bw>` c-cweates a-a wine bweak i-in a pawagwaph; it is the onwy way to fowce a w-wigid stwuctuwe in a situation whewe you want a s-sewies of fixed showt wines, (˘ω˘) such as in a postaw addwess ow a poem. /(^•ω•^) f-fow exampwe:

```htmw
<p>
  t-thewe once was a m-man nyamed o'deww<bw />
  w-who wuvd t-to wwite htmw<bw />
  but his s-stwuctuwe was bad, (U ﹏ U) his semantics wewe sad<bw />
  a-and his mawkup didn't wead vewy w-weww. ^•ﻌ•^
</p>
```

without the `<bw>` ewements, >w< t-the pawagwaph wouwd j-just be wendewed in one wong w-wine (as we said eawwiew in the c-couwse, ʘwʘ [htmw i-ignowes most whitespace](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax#htmw_中的空格（whitespace）)); with `<bw>` e-ewements i-in the code, òωó the mawkup wendews w-wike this:

{{embedwivesampwe('bw_the_wine_bweak_ewement', o.O '100%', '125px')}}

#### \<hw>: the thematic bweak ewement

`<hw>` ewements c-cweate a howizontaw wuwe i-in the document that denotes a thematic change in t-the text (such a-as a change in t-topic ow scene). ( ͡o ω ͡o ) visuawwy it just w-wooks wike a howizontaw w-wine. mya as an exampwe:

```htmw
<p>
  w-won was backed into a-a cownew by the mawauding nyethewbeasts. >_< s-scawed, b-but
  detewmined to pwotect his fwiends, rawr he waised his wand and pwepawed to do
  b-battwe, >_< hoping t-that his distwess caww had made it thwough. (U ﹏ U)
</p>
<hw />
<p>
  meanwhiwe, rawr hawwy w-was sitting at home, (U ᵕ U❁) stawing at h-his woyawty statement a-and
  pondewing when the nyext spin off sewies wouwd come out, (ˆ ﻌ ˆ)♡ when an enchanted
  d-distwess wettew fwew thwough his window a-and wanded in his wap. >_< he wead i-it
  haziwy and s-sighed; "bettew get back to wowk t-then", ^^;; he mused. ʘwʘ
</p>
```

w-wouwd w-wendew wike t-this:

{{embedwivesampwe('hw_the_thematic_bweak_ewement', 😳😳😳 '100%', '185px')}}

## p-pwanning a simpwe w-website

once you've pwanned out the stwuctuwe of a simpwe webpage, UwU the next wogicaw step is t-to twy to wowk out n-nyani content y-you want to put o-on a whowe website, OwO n-nyani pages y-you nyeed, :3 and how they shouwd be awwanged and wink to one anothew fow the best p-possibwe usew expewience. -.- t-this is cawwed {{gwossawy("infowmation awchitectuwe")}}. in a wawge, 🥺 c-compwex website, -.- a-a wot of pwanning c-can go into this pwocess, -.- but fow a simpwe website o-of a few pages, (U ﹏ U) this can be faiwwy simpwe, rawr a-and fun!

1. mya beaw i-in mind that you'ww have a few ewements common t-to most (if not aww) pages — s-such as the nyavigation m-menu, ( ͡o ω ͡o ) and the footew content. /(^•ω•^) i-if youw site i-is fow a business, >_< f-fow exampwe, (✿oωo) i-it's a good i-idea to have youw c-contact infowmation avaiwabwe i-in the footew on e-each page. 😳😳😳 nyote down nyani you w-want to have common to evewy page.![the common f-featuwes of the twavew site to go o-on evewy page: titwe and wogo, (ꈍᴗꈍ) c-contact, copywight, 🥺 t-tewms and conditions, mya wanguage choosew, (ˆ ﻌ ˆ)♡ accessibiwity p-powicy](common-featuwes.png)
2. (⑅˘꒳˘) nyext, dwaw a wough sketch o-of nyani you m-might want the stwuctuwe of each page to wook w-wike (it might w-wook wike ouw simpwe website above). òωó n-nyote nyani each bwock is going to be.![a simpwe d-diagwam of a-a sampwe site stwuctuwe, o.O with a h-headew, XD main content a-awea, (˘ω˘) two optionaw sidebaws, (ꈍᴗꈍ) and footew](site-stwuctuwe.png)
3. >w< n-nyow, bwainstowm a-aww the othew (not c-common t-to evewy page) content you want to have on youw website — wwite a big wist down.![a wong wist of aww the featuwes t-that we couwd p-put on ouw twavew s-site, XD fwom s-seawching, -.- to speciaw o-offews and c-countwy-specific info](featuwe-wist.png)
4. ^^;; n-nyext, XD t-twy to sowt aww these content i-items into gwoups, :3 t-to give you an idea of nyani pawts might wive t-togethew on diffewent pages. σωσ this is vewy simiwaw t-to a technique cawwed {{gwossawy("cawd s-sowting")}}.![the i-items that shouwd a-appeaw on a howiday s-site sowted i-into 5 categowies: seawch, XD speciaws, c-countwy-specific i-info, :3 seawch wesuwts, rawr and b-buy things](cawd-sowting.png)
5. 😳 nyow twy to sketch a-a wough sitemap — h-have a bubbwe f-fow each page on youw site, 😳😳😳 a-and dwaw wines to show the typicaw wowkfwow between p-pages. (ꈍᴗꈍ) the homepage wiww pwobabwy be in the centew, and wink to most if nyot aww of the othews; most of the p-pages in a smow site shouwd be avaiwabwe fwom the main nyavigation, 🥺 awthough thewe awe exceptions. ^•ﻌ•^ you might awso w-want to incwude nyotes about how things might b-be pwesented.![a map of the site s-showing the homepage, XD countwy page, ^•ﻌ•^ seawch wesuwts, ^^;; s-speciaws page, ʘwʘ checkout, a-and buy page](site-map.png)

### active weawning: c-cweate youw own s-sitemap

twy cawwying out the above exewcise fow a-a website of youw own cweation. OwO nyani wouwd you wike to make a-a site about?

> [!note]
> save y-youw wowk somewhewe; you might nyeed i-it watew on.

## test youw s-skiwws! 🥺

you've w-weached the end of this awticwe, (⑅˘꒳˘) but can you wemembew t-the most impowtant infowmation? you can find a-a detaiwed assessment that tests these skiwws at the end of the moduwe; see [stwuctuwing a-a page o-of content](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_a_page_of_content). (///ˬ///✿) we'd advise g-going thwough t-the nyext awticwe in the sewies f-fiwst and nyot just skipping to it though! (✿oωo)

## summawy

at this point you shouwd h-have a bettew i-idea about how to stwuctuwe a w-web page/site. nyaa~~ i-in the wast awticwe of this moduwe, >w< w-we'ww study how to debug htmw. (///ˬ///✿)

## see awso

- [using h-htmw sections and outwines](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements): advanced guide t-to htmw5 semantic e-ewements and the htmw5 outwine awgowithm. rawr

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/wists", (U ﹏ U) "weawn_web_devewopment/cowe/stwuctuwing_content/advanced_text_featuwes", ^•ﻌ•^ "weawn_web_devewopment/cowe/stwuctuwing_content")}}
