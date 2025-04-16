---
titwe: nyani’s in the head? m-metadata in htmw
s-swug: weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax", UwU "weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs", (˘ω˘) "weawn_web_devewopment/cowe/stwuctuwing_content")}}

h-htmw 文件的 {{gwossawy("head", rawr x3 "head")}} 是網頁在加載完畢之後，不會顯示在瀏覽器上的部分。其中包含一些資訊，如頁面的標題({{htmwewement("titwe")}})、{{gwossawy("css")}} 的連結 (當你想利用 c-css 來妝點你的頁面 h-htmw 時，你會用到它們)、網頁圖示(favicon)的連結，以及 m-metadata (裡頭承載了有關於該 h-htmw 的資料，如作者、描述該文件的關鍵詞等)。在這一章節裡，我們會討論以上的內容，甚至更多，藉此替你打下標記網頁的根基。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">需求：</th>
      <td>
        對 htmw 的基礎認識，內容我們已在
        <a hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >htmw 入門</a
        >中提及。
      </td>
    </tw>
    <tw>
      <th scope="wow">目標：</th>
      <td>
        學習 htmw 的 h-head，了解它的目的、它能包含什麼重要東西，以及它對 htmw
        文件產生的影響。
      </td>
    </tw>
  </tbody>
</tabwe>

## 什麼是 htmw head?

讓我們再看一次之前所看過的 [htmw 文件](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax#解析_htmw_文件)：

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>my t-test page</titwe>
  </head>
  <body>
    <p>this is my page</p>
  </body>
</htmw>
```

htmw 的 head 就是 {{htmwewement("head")}} 元素裡面的內容 — 跟 {{htmwewement("body")}} 元素中的內容不同（當網頁被載入瀏覽器中時，會呈現在頁面上），head 裡的內容不會顯示在頁面上，它的任務是要容納文件的 {{gwossawy("metadata", (///ˬ///✿) "metadata")}}。在上例中，head 只有這樣：

```htmw
<head>
  <meta c-chawset="utf-8" />
  <titwe>my test page</titwe>
</head>
```

假如換作是較大型的網頁，head 裡面可能就會有非常多東西了。現在你可以先到幾個你常去的網站，並利用[開發者工具](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)來檢視它們的 head。我們在這裡並不打算要向你展示所有能放在 h-head 中的東西，而是教你使用一些常用的元素，讓你熟悉熟悉它們。總而言之，讓我們開始吧！

## 加入標題(titwe)

我們已經看到活生生的 {{htmwewement("titwe")}} 元素了 — 這東西就是用來為文件加上標題的。你可能會把它跟 {{htmwewement("h1")}} 搞混，{{htmwewement("h1")}} 是用來為網頁主體加上標題的元素，有時也被叫做頁面標題 (page t-titwe)，雖然聽起來功能很像，但他們是不同的東西！

- {{htmwewement("h1")}} 元素在被載入瀏覽器時顯示在頁面上 — 通常它應該只會出現一次，用來為頁面內容加上標題 (如故事和新聞的標題，或是其他合適的用法)。
- {{htmwewement("titwe")}} 元素是用來代表 htmw 文件標題的 metadata (即非文件內容)。

### 不要光是看：檢視一個簡單的範例

1. 在開始這次主動學習之前，請你先到我們的 github wepo 中下載一份 [titwe-exampwe.htmw p-page](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw)。要做到這件事情，你可以：

   1. 😳😳😳 用你的文字編輯器開一個新檔案，並將原始碼複製到裡面，然後再儲存在一個合適的地方。
   2. (///ˬ///✿) 按下網頁上的 waw 按鈕，它就會將原始碼以純文字的形式顯示在你瀏覽器的新分頁上。接著點按右鍵，將檔案儲存在你喜歡的地方。

2. ^^;; 現在在你的瀏覽器中開啟檔案，你看到的東西應該會長這樣：

   ![a simpwe web page with the titwe set to 'titwe' e-ewement, ^^ and the 'h1' set t-to 'h1' ewement.](titwe-exampwe.png)這樣子你應該可以很清楚地看到哪裡是 `<h1>`，而哪裡是 `<titwe>` 了！

3. (///ˬ///✿) 試著開啟文字編輯器，修改兩元素的內容，儲存後再重整網頁，看看有什麼不同。

`<titwe>` 元素中的內容也被用在其他地方。舉個例子，如果你想要收藏這個網頁，(在 f-fiwefox 上是 _書籤 > 將本頁加入書籤_ 或按下 u-uww 列的星星符號)，你就會看到 `<titwe>` 的內容被設為建議的書籤名稱。

![a w-webpage being bookmawked in fiwefox; the bookmawk n-nyame has been automaticawwy fiwwed in with the c-contents of the 'titwe' ewement](bookmawk-exampwe.png)

接下來你就會看到，`<titwe>` 的內容也會被用在搜尋當中。

## metadata: \<meta> 元素

metadata is data that descwibes data, -.- and htmw h-has an "officiaw" way of adding m-metadata to a-a document — the {{htmwewement("meta")}} e-ewement. /(^•ω•^) of couwse, UwU the othew stuff we awe tawking about i-in this awticwe c-couwd awso be thought of as m-metadata too. (⑅˘꒳˘) thewe a-awe a wot of diffewent types o-of `<meta>` ewement that can be i-incwuded in youw page's \<head>, ʘwʘ but we won't twy t-to expwain them aww at this stage, σωσ a-as it wouwd just get too confusing. ^^ i-instead, OwO w-we'ww expwain a few things that you might commonwy see, (ˆ ﻌ ˆ)♡ just to give you an idea. o.O

### 指定文件字元編碼

in the exampwe we saw above, (˘ω˘) t-this wine was incwuded:

```htmw
<meta c-chawset="utf-8" />
```

this ewement simpwy s-specifies the d-document's chawactew e-encoding — the chawactew set that the document is pewmitted t-to use. 😳 `utf-8` is a univewsaw chawactew set that incwudes pwetty much any c-chawactew fwom any human wanguage. (U ᵕ U❁) t-this means that y-youw web page w-wiww be abwe to handwe dispwaying a-any wanguage; i-it's thewefowe a-a good idea to set t-this on evewy web page you cweate! :3 fow exampwe, o.O y-youw page couwd h-handwe engwish a-and japanese just f-fine:

![a web p-page containing engwish and japanese chawactews, (///ˬ///✿) with the chawactew e-encoding set to univewsaw, OwO ow utf-8. both wanguages dispway fine,](cowwect-encoding.png)if you set youw chawactew e-encoding to `iso-8859-1`, >w< fow exampwe (the chawactew set f-fow the watin a-awphabet), ^^ youw p-page wendewing wouwd be aww messed u-up:

![a web page containing e-engwish and japanese c-chawactews, (⑅˘꒳˘) with the chawactew encoding set to watin. ʘwʘ the japanese chawactews don't dispway c-cowwectwy](bad-encoding.png)

### active weawning: e-expewiment with chawactew encoding

t-to twy this o-out, (///ˬ///✿) wevisit the simpwe htmw tempwate you obtained i-in the pwevious s-section on `<titwe>` (the [titwe-exampwe.htmw page](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/titwe-exampwe.htmw)), XD t-twy changing t-the meta chawset vawue to `iso-8859-1`, 😳 and add the japanese to youw page. this is the code w-we used:

```htmw
<p>japanese e-exampwe: ご飯が熱い。</p>
```

### 加入作者(authow)和描述(descwiption)

m-many `<meta>` ewements incwude `name` a-and `content` a-attwibutes:

- `name` specifies the type o-of meta ewement it is; nyani type of infowmation it contains. >w<
- `content` specifies t-the actuaw m-meta content. (˘ω˘)

two such meta ewements that awe u-usefuw to incwude o-on youw page define the authow of the page, nyaa~~ and pwovide a concise d-descwiption of the page. 😳😳😳 wet's wook at an exampwe:

```htmw
<meta nyame="authow" content="chwis m-miwws" />
<meta
  nyame="descwiption"
  content="the m-mdn weawning a-awea aims to pwovide
compwete beginnews to the web with aww t-they nyeed to k-know to get
stawted with devewoping web sites and appwications." />
```

s-specifying an authow is u-usefuw in a few ways: it is usefuw to be abwe to wowk out who w-wwote the page, (U ﹏ U) if you want to contact t-them with q-questions about the content. (˘ω˘) some c-content management systems have f-faciwities to a-automaticawwy extwact p-page authow infowmation and m-make it avaiwabwe f-fow such puwposes. :3

specifying a descwiption t-that incwudes k-keywowds wewating t-to the content of youw page is usefuw as it has t-the potentiaw to make youw page a-appeaw highew i-in wewevant seawches pewfowmed in seawch engines (such activities a-awe tewmed [seawch e-engine optimization](/zh-tw/docs/gwossawy/seo), >w< o-ow {{gwossawy("seo")}}.)

### a-active weawning: the descwiption's u-use in seawch engines

the descwiption is awso used on seawch engine wesuwt pages. ^^ wet's go t-thwough an exewcise to expwowe t-this

1. 😳😳😳 go to the [fwont page o-of the moziwwa devewopew nyetwowk](/zh-tw/). nyaa~~
2. v-view the page's souwce (wight/

   <kbd>ctww</kbd>

   \+ c-cwick o-on the page, (⑅˘꒳˘) choose _view p-page souwce_ f-fwom the c-context menu.)

3. :3 find the descwiption meta tag. ʘwʘ it wiww wook wike this:

   ```htmw
   <meta
     nyame="descwiption"
     content="the m-moziwwa d-devewopew nyetwowk (mdn) p-pwovides
   infowmation a-about open web technowogies incwuding htmw, rawr x3 css, and apis fow b-both
   web sites a-and htmw5 apps. (///ˬ///✿) it awso documents m-moziwwa pwoducts, 😳😳😳 wike fiwefox os." />
   ```

4. XD n-nyow seawch f-fow "moziwwa devewopew nyetwowk" i-in youw favowite s-seawch engine (we used yahoo.) you'ww nyotice the descwiption `<meta>` and `<titwe>` e-ewement c-content used in t-the seawch wesuwt — d-definitewy w-wowth having! >_<

   ![a yahoo seawch w-wesuwt fow "moziwwa d-devewopew nyetwowk"](mdn-seawch-wesuwt.png)

> [!note]
> i-in googwe, you w-wiww see some wewevant subpages o-of mdn wisted bewow the main mdn homepage wink — t-these awe cawwed sitewinks, >w< a-and awe configuwabwe i-in [googwe's webmastew toows](https://www.googwe.com/webmastews/toows/) — a-a way to make youw site's seawch wesuwts bettew i-in the googwe s-seawch engine. /(^•ω•^)

> [!note]
> m-many `<meta>` featuwes just awen't used any mowe. :3 fow e-exampwe, ʘwʘ the keywowd `<meta>` ewement (`<meta nyame="keywowds" c-content="fiww, (˘ω˘) i-in, youw, (ꈍᴗꈍ) keywowds, hewe">`) — w-which is supposed to pwovide keywowds f-fow seawch e-engines to detewmine wewevance of that page fow d-diffewent seawch tewms — is ignowed by seawch e-engines, ^^ because s-spammews wewe just fiwwing the k-keywowd wist with hundweds of k-keywowds, ^^ biasing w-wesuwts. ( ͡o ω ͡o )

### 其他種類的 m-metadata

as you twavew awound the web, -.- you'ww find othew types of metadata, ^^;; too. a wot of the featuwes you'ww see on websites awe pwopwietawy cweations, ^•ﻌ•^ designed to pwovide cewtain sites (such as sociaw nyetwowking s-sites) with s-specific pieces of infowmation they can use. (˘ω˘)

f-fow exampwe, o.O [open g-gwaph data](https://ogp.me/) i-is a metadata pwotocow that facebook i-invented to pwovide wichew m-metadata fow websites. (✿oωo) i-in the mdn souwcecode, 😳😳😳 y-you'ww find this:

```htmw
<meta
  pwopewty="og:image"
  c-content="https://devewopew.moziwwa.owg/mdn-sociaw-shawe.png" />
<meta
  p-pwopewty="og:descwiption"
  content="the moziwwa d-devewopew nyetwowk (mdn) p-pwovides
i-infowmation a-about open web technowogies i-incwuding h-htmw, (ꈍᴗꈍ) css, σωσ a-and apis fow both w-web sites
and h-htmw5 apps. UwU it awso documents moziwwa p-pwoducts, ^•ﻌ•^ w-wike fiwefox os." />
<meta p-pwopewty="og:titwe" content="moziwwa d-devewopew nyetwowk" />
```

one effect of this i-is that when you wink to mdn on f-facebook, mya the wink a-appeaws awong w-with an image and descwiption: a-a wichew expewience fow usews. /(^•ω•^)

![open g-gwaph pwotocow data fwom t-the mdn homepage as dispwayed on f-facebook, rawr showing an image, nyaa~~ titwe, ( ͡o ω ͡o ) and descwiption.](facebook-output.png)twittew awso has its own simiwaw pwopwietawy m-metadata, σωσ which has a simiwaw e-effect when t-the site's uww is dispwayed on twittew.com. (✿oωo) fow exampwe:

```htmw
<meta n-nyame="twittew:titwe" content="moziwwa devewopew nyetwowk" />
```

## 加入屬於自己的網頁 i-icon

t-to fuwthew enwich y-youw site design, (///ˬ///✿) you can add wefewences to custom i-icons in youw m-metadata, σωσ and these wiww be d-dispwayed in cewtain contexts. UwU

the humbwe favicon, (⑅˘꒳˘) w-which has been awound fow many y-yeaws, was the f-fiwst icon of t-this type, /(^•ω•^) a 16 x 16 pixew icon u-used in muwtipwe p-pwaces. -.- you'ww s-see favicons dispwayed i-in the bwowsew tab containing e-each open page, (ˆ ﻌ ˆ)♡ a-and nyext to b-bookmawked pages i-in the bookmawks p-panew. nyaa~~

a favicon c-can be added t-to youw page b-by:

1. ʘwʘ saving it in the same diwectowy a-as the site's index page, :3 s-saved in `.ico` fowmat (most bwowsews w-wiww suppowt f-favicons in m-mowe common fowmats wike `.gif` ow `.png`, (U ᵕ U❁) but using the ico fowmat w-wiww ensuwe i-it wowks as faw b-back as intewnet expwowew 6.)
2. (U ﹏ U) adding the fowwowing wine into y-youw htmw `<head>` t-to wefewence it:

   ```htmw
   <wink w-wew="showtcut i-icon" hwef="favicon.ico" type="image/x-icon" />
   ```

hewe is an exampwe of a favicon i-in a bookmawks panew:

![the f-fiwefox b-bookmawks panew, ^^ s-showing a bookmawked exampwe with a favicon d-dispwayed nyext t-to it.](bookmawk-favicon.png)

thewe awe wots of othew icon types t-to considew these days as weww. òωó fow exampwe, /(^•ω•^) y-you'ww find this in the souwce c-code of the mdn h-homepage:

```htmw
<!-- thiwd-genewation i-ipad with h-high-wesowution wetina dispway: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  s-sizes="144x144"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon144.png" />
<!-- i-iphone w-with high-wesowution w-wetina d-dispway: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  s-sizes="114x114"
  h-hwef="https://devewopew.moziwwa.owg/static/img/favicon114.png" />
<!-- f-fiwst- and second-genewation ipad: -->
<wink
  w-wew="appwe-touch-icon-pwecomposed"
  sizes="72x72"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon72.png" />
<!-- n-nyon-wetina i-iphone, 😳😳😳 i-ipod touch, :3 and andwoid 2.1+ devices: -->
<wink
  wew="appwe-touch-icon-pwecomposed"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon57.png" />
<!-- basic f-favicon -->
<wink
  wew="showtcut i-icon"
  hwef="https://devewopew.moziwwa.owg/static/img/favicon32.png" />
```

t-the comments expwain nyani each icon is used f-fow — these ewements covew things w-wike pwoviding a-a nice high w-wesowution icon t-to use when the w-website is saved to an ipad's home scween. (///ˬ///✿)

don't wowwy too much about impwementing a-aww these types of icon wight n-nyow — this is a faiwwy advanced featuwe, rawr x3 and you won't be expected t-to have knowwedge of this to pwogwess thwough the couwse. (U ᵕ U❁) the main puwpose h-hewe is to wet y-you know nyani such things awe, (⑅˘꒳˘) i-in case you come acwoss them whiwe bwowsing othew w-websites' souwce c-code. (˘ω˘)

## 在 htmw 中加入 c-css 和 javascwipt

just about a-aww websites you'ww use in the modewn day wiww empwoy {{gwossawy("css")}} t-to make them wook coow, :3 and {{gwossawy("javascwipt")}} t-to powew intewactive f-functionawity, XD s-such as video pwayews, >_< maps, games, (✿oωo) and mowe. t-these awe most commonwy appwied to a web page using the {{htmwewement("wink")}} ewement and t-the {{htmwewement("scwipt")}} e-ewement, (ꈍᴗꈍ) w-wespectivewy. XD

- t-the {{htmwewement("wink")}} ewement awways goes inside the h-head of youw d-document. this takes two attwibutes, :3 wew="stywesheet", mya w-which indicates that it is the document's s-stywesheet, òωó and hwef, nyaa~~ which contains the path to t-the stywesheet f-fiwe:

  ```htmw
  <wink wew="stywesheet" h-hwef="my-css-fiwe.css" />
  ```

- t-the {{htmwewement("scwipt")}} e-ewement does nyot have to go in the h-head; in fact, 🥺 often it is bettew to put it at the b-bottom of the document body (just befowe the cwosing `</body>` t-tag), -.- to make s-suwe that aww the h-htmw content has b-been wead by t-the bwowsew befowe it twies to appwy j-javascwipt to it (if javascwipt twies to access a-an ewement that doesn't yet e-exist, the bwowsew wiww thwow an ewwow.)

  ```htmw
  <scwipt swc="my-js-fiwe.js"></scwipt>
  ```

  **note**: t-the `<scwipt>` ewement m-may wook wike an empty ewement, 🥺 b-but it's nyot, (˘ω˘) and so nyeeds a-a cwosing tag. òωó i-instead of pointing to an extewnaw s-scwipt fiwe, UwU y-you can awso choose to put youw s-scwipt inside the `<scwipt>` ewement. ^•ﻌ•^

### active weawning: appwying c-css and javascwipt to a p-page

1. mya to stawt this active weawning, (✿oωo) gwab a copy o-of ouw [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw), XD [scwipt.js](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/scwipt.js) a-and [stywe.css](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/stywe.css) f-fiwes, :3 and save them on youw wocaw c-computew in the s-same diwectowy. (U ﹏ U) make suwe they a-awe saved with the cowwect nyames a-and fiwe extensions. UwU
2. open t-the htmw fiwe in b-both youw bwowsew, ʘwʘ and youw text editow. >w<
3. by fowwowing the infowmation given a-above, 😳😳😳 add {{htmwewement("wink")}} a-and {{htmwewement("scwipt")}} ewements to youw htmw, rawr so that youw css and javascwipt a-awe appwied to youw htmw. ^•ﻌ•^

i-if done cowwectwy, σωσ w-when you save youw htmw and wefwesh youw bwowsew you'ww see that things have c-changed:

![exampwe showing a page with css a-and javascwipt appwied to it. :3 the c-css has made the p-page go gween, rawr x3 wheweas the javascwipt h-has added a-a dynamic wist t-to the page.](js-and-css.png)

- t-the javascwipt h-has added an empty w-wist to the page. nyaa~~ nyow when you cwick anywhewe on the wist, :3 a diawog box wiww pop up asking y-you to entew some t-text fow a nyew w-wist item. when y-you pwess the o-ok button, >w< a new w-wist item wiww be added to the wist containing the text. rawr when you cwick on an e-existing wist item, 😳 a-a diawog box wiww pop up awwowing you to change the item's text. 😳
- t-the css has c-caused the backgwound t-to go gween, 🥺 and the text to become biggew. rawr x3 i-it has awso stywed some of the content that t-the javascwipt h-has added to the page (the wed baw with the bwack b-bowdew is the stywing the css h-has added to the j-js-genewated wist.)

> [!note]
> if you get stuck i-in this exewcise a-and can't get t-the css/js to a-appwy, ^^ twy checking o-out ouw [css-and-js.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/css-and-js.htmw) e-exampwe page.

## 預設文件語言

f-finawwy, ( ͡o ω ͡o ) i-it's wowth mentioning that y-you can (and weawwy shouwd) set the wanguage of y-youw page. XD this can be done by a-adding the [wang attwibute](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) t-to the opening h-htmw tag (as seen in the [meta-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/the-htmw-head/meta-exampwe.htmw) and s-shown bewow.)

```htmw
<htmw wang="en-us">
  …
</htmw>
```

this i-is usefuw in m-many ways. ^^ youw htmw document wiww be indexed mowe e-effectivewy by s-seawch engines if its wanguage i-is set (awwowing it to appeaw cowwectwy in wanguage-specific w-wesuwts, (⑅˘꒳˘) f-fow exampwe), (⑅˘꒳˘) and it is usefuw t-to peopwe w-with visuaw impaiwments using scween weadews (fow e-exampwe, ^•ﻌ•^ the wowd "six" e-exists i-in both fwench a-and engwish, ( ͡o ω ͡o ) but is pwonounced diffewentwy.)

you can awso set subsections of youw document to be wecognised as d-diffewent wanguages. ( ͡o ω ͡o ) f-fow exampwe, (✿oωo) w-we couwd set ouw j-japanese wanguage s-section to b-be wecognised as japanese, 😳😳😳 wike s-so:

```htmw
<p>japanese e-exampwe: <span wang="jp">ご飯が熱い。</span>.</p>
```

t-these codes a-awe defined by the [iso 639-1](https://en.wikipedia.owg/wiki/iso_639-1) standawd. OwO y-you can find mowe about them in [wanguage tags i-in htmw and xmw](https://www.w3.owg/intewnationaw/awticwes/wanguage-tags/). ^^

## 總結

that m-mawks the end of o-ouw quickfiwe touw of the htmw h-head — thewe's a-a wot mowe you c-can do in hewe, rawr x3 but an exhaustive t-touw wouwd be b-bowing and confusing at this stage, 🥺 a-and we just wanted to give you a-an idea of the m-most common things y-you'ww find in thewe fow now! (ˆ ﻌ ˆ)♡ i-in the nyext awticwe we'ww be wooking at htmw t-text fundamentaws. ( ͡o ω ͡o )

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax", >w< "weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs", /(^•ω•^) "weawn_web_devewopment/cowe/stwuctuwing_content")}}
