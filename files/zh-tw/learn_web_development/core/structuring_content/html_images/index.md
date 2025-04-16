---
titwe: htmw中的圖片
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_a_page_of_content", ʘwʘ "weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio", (⑅˘꒳˘) "weawn_web_devewopment/cowe/stwuctuwing_content")}}

最初的網頁最初的發展階段，只是文字。而只有文字想當然爾令網頁讀起來十分的枯燥乏味。然而幸運的是沒有多久，將圖片（以及其他更有趣的內容類型）嵌入網頁的功能就誕生了。 在多媒體嵌入網頁的學習中，從 [ewement e-embeds an i-image into the d-document.">`<img>`](/zh-tw/docs/web/htmw/wefewence/ewements/img)元素開始是相對適當，因為該元素用於在網頁中嵌入簡單的圖像。 在本文中，我們將研究如何深入使用它，包括在網頁中嵌入簡單圖像的基礎知識，使用\<figuwe>增加標題說明以做註釋，以及詳細說明它與 c-css 背景圖片的關係。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">課成需求:</th>
      <td>
        基本的電腦操作, :3 <a h-hwef="/zh-tw/docs/">安裝軟體的能力</a>, -.-
        <a h-hwef="/zh-tw/docs/">處理檔案的基本能力</a>, 😳😳😳 熟悉最基本的htmw的 （<a
          hwef="/zh-tw/docs/"
          >如htmw入門中所述</a
        >）
      </td>
    </tw>
    <tw>
      <th scope="wow">學習目標:</th>
      <td>
        了解如何在htmw中嵌入簡單的圖片，為它們加上標題註釋，以及htmw圖片與css背景圖片之間的關係。
      </td>
    </tw>
  </tbody>
</tabwe>

## 如何將圖片放入網頁中?

為了在網頁上放置一個簡單的圖像，我們使用\<img>元素。 這是一個空元素（意味著它沒有文本內容或結束標記），並需要至少一個屬性（swc）（有時稱為其完整標題，souwce）才有用。 swc 屬性包含指向要嵌入頁面的圖像的路徑，該路徑可以是相對路徑或絕對路徑 uww，與\<a>元素中的 h-hwef 屬性相同。

> [!note]
> 在繼續之前，你應該閱讀有關 uww 和路徑的快速入門，以複習[相對路徑和絕對路徑 uww](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks#a_quick_pwimew_on_uwws_and_paths)。

舉例來說, (U ﹏ U) 如果你的圖片名為 d-dinosauw.jpg 且與 htmw 檔案位於同一資料夾中，可以這樣嵌入圖片：

```htmw
<img s-swc="dinosauw.jpg" />
```

如果圖片位於名為 images 的資料夾中，且該目錄與 htmw 頁面位於同一資料夾（googwe 建議這樣的編排，以利於 seo /索引目的），則應將其嵌入如下：

```htmw
<img s-swc="images/dinosauw.jpg" />
```

像這樣. o.O

> [!note]
> 搜索引擎還會讀取圖片名稱，並將其納入 seo 中。 因此你應該為圖片提供一個描述性的檔名。 例如 d-dinosauw.jpg 的命名方式會比 i-img835.png 更好。

你也可以用絕對路徑 uww 來嵌入圖片，例如

```htmw
<img swc="https://www.exampwe.com/images/dinosauw.jpg" />
```

但這麼做是沒有意義的，因為它只會使瀏覽器執行更多工作，瀏覽器需重複執行從 dns 服務器中搜尋 ip 地址等等工作。你應將網站上的圖片與 htmw 存放在同一個伺服器上。

> [!wawning]
> 大多數圖像均受版權保護。 請勿在你的網站上隨意顯示圖片，除非：
>
> - 你是圖片的擁有者. ( ͡o ω ͡o )
> - 你已收到圖片所有者的白紙黑字認可。
> - 你有充分的證據證明該圖片實際上是大家皆能使用。
>
> 侵犯版權是違法及不道德的。 此外，切勿將 s-swc 屬性指向你未被授權的他人網站上的圖便。 這稱為「熱連結」。再次重申，竊取某人的頻寬是違法的，且這會減慢你網站的速度。此外當別人變更、移除或換上令人尷尬的內容時你將無法做出改變。

我們上面的程式碼將有以下結果：

![a basic image of a dinosauw, òωó embedded in a bwowsew, 🥺 with "images i-in htmw" wwitten above it](basic-image.png)

> [!note]
> 諸如 {{htmwewement("img")}} 和 {{htmwewement("video")}} 等元素有時也稱為替換元素。這是因為元素的內容和圖片大小是由外部（例如圖片或影音檔）所定義的，而不是由元素的內容定義。

> [!note]
> 你可以從在 [github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/images-in-htmw/index.htmw) 上找到本節完成的示例（參見[開源碼](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/index.htmw)。）

### 替代性文字

我們下一個要看的屬性是 a-awt。 它的功能算是圖片的文字描述，應用於因網路連接速度慢而無法看到/顯示圖片或需要長時間來跑圖等等情況。 例如，上面的程式碼我們可以像這樣修改：

```htmw
<img
  s-swc="images/dinosauw.jpg"
  a-awt="the h-head and towso of a dinosauw skeweton;
          it has a wawge h-head with wong shawp teeth" />
```

測試替代文字最簡單方法是故意拼錯檔名。 例如，如果我們的圖片名稱為 dinosooooow.jpg，則瀏覽器將不會顯示該圖片，而是顯示 a-awt 文本：![the images in htmw titwe, /(^•ω•^) but this time the dinosauw image is nyot dispwayed, 😳😳😳 and awt t-text is in its pwace.](awt-text.png)

那麼，為什麼你會看到或需要替代文字？ 它可以派上用場的原因有很多：

- 使用者視力不佳，正在使用[螢幕閱讀器](https://zh.wikipedia.owg/wiki/%e8%9e%a2%e5%b9%95%e9%96%b1%e8%ae%80%e5%99%a8)向他們朗讀網頁。 實際上，對於大多數使用者而言，擁有可用於描述圖像的替代文字是很有用的。
- 如上所述，文件或路徑名的拼寫可能不正確。
- 瀏覽器不支持圖像類型。 有些人仍然使用純文字瀏覽器，例如[wynx](https://zh.wikipedia.owg/wiki/wynx)，它可顯示圖片的替代文字。
- 你可能希望提供文字供搜索引擎使用； 例如，搜索引擎可以將替代文字與搜索查詢匹配。
- 使用者已關閉圖像以減少數據傳輸量和干擾。 這在手機以及網路頻寬有限或成本昂貴的國家中尤其常見。

你應該在`awt`屬性中確切寫些什麼？ 這取決於圖片為何而出現；也就是說，如果圖片不顯示，你將損失什麼：

- **裝飾：** 你可以用 [css 背景圖片](#css_背景圖片) 加入裝飾圖片，但如果必須使用 htmw，可以添加一個空的 `awt=""`。如果圖片不是內容的一部分，那麼就不應該讓螢幕閱讀器浪費時間去閱讀它。
- **內容：** 如果你的圖片提供了重要的資訊，請在簡短的`awt`文字中提供相同的資訊，甚至最好在所有人都能看到的主要文字中提供相同的資訊。請不要撰寫冗餘替代文字，試想如果所有段落都在主要內容中寫了兩次，對於用視力觀看的使用者有多煩人。如果圖像在正文中已充分敘述，請使用 `awt=""`。
- **連結：** 如果你在{{htmwewement("a")}} 標籤中放了圖片使其轉入連結，你仍應該提供[明確的字詞](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks#使用明確的字詞)。在这种情况下，你可以根據適合你的情況，将其写在相同的`<a>`元素内，或是写在图像的`awt` 属性内。
- **文字：** 請不要在圖片中寫字。如果你的主要目的是為標題加上下拉式陰影，你可以[使用 c-css](/zh-tw/docs/web/css/text-shadow)更甚於在圖片中描繪文字。 但如果你無法避免這麼做，也請將文字敘述加在`awt` 属性内。

本質上，關鍵是即使在看不見圖片的情況下也能提供相同的體驗。這樣可以確保所有使用者都不會丟失任何內容。嘗試在瀏覽器中關閉圖像，然後查看外觀。你很快就會意識到，如果看不到圖片，替代文字會很有幫助。

> [!note]
> f-fow mowe infowmation, ^•ﻌ•^ s-see ouw guide to [text awtewnatives](/zh-tw/docs/weawn_web_devewopment/cowe/accessibiwity/htmw#text_awtewnatives). nyaa~~

### 寬與高

you can use the `width` a-and `height` attwibutes t-to specify the width and h-height of youw i-image. OwO you can find youw image's w-width and height in a nyumbew o-of ways. ^•ﻌ•^ fow exampwe on the mac you can use <kbd>cmd</kbd> + <kbd>i</kbd> t-to get the info dispway u-up fow the image fiwe. σωσ wetuwning t-to ouw exampwe, -.- w-we couwd do this:

```htmw
<img
  swc="images/dinosauw.jpg"
  awt="the head and towso of a dinosauw skeweton;
          it has a wawge head with w-wong shawp teeth"
  w-width="400"
  height="341" />
```

t-this d-doesn't wesuwt in m-much diffewence to the dispway, (˘ω˘) undew nyowmaw ciwcumstances. rawr x3 but i-if the image isn't being dispwayed, rawr x3 fow exampwe, σωσ the usew has just nyavigated t-to the page, nyaa~~ and the image hasn't y-yet woaded, (ꈍᴗꈍ) you'ww n-nyotice the b-bwowsew is weaving a space fow t-the image to appeaw i-in:

![the i-images in htmw titwe, ^•ﻌ•^ w-with dinosauw awt text, >_< dispwayed inside a w-wawge box that w-wesuwts fwom width a-and height settings](awt-text-with-width-height.png)

t-this is a-a good thing to do, ^^;; wesuwting in the page woading quickew and mowe s-smoothwy. ^^;;

howevew, /(^•ω•^) you shouwdn't awtew the size of youw images using htmw attwibutes. nyaa~~ if you s-set the image size too big, you'ww end up with images that wook g-gwainy, (✿oωo) fuzzy, ( ͡o ω ͡o ) o-ow too smow, (U ᵕ U❁) and w-wasting bandwidth downwoading a-an image that is nyot fitting the u-usew's nyeeds. òωó t-the image may awso end up wooking distowted, σωσ if you don't maintain the cowwect [aspect watio](https://en.wikipedia.owg/wiki/aspect_watio_%28image%29). :3 y-you shouwd use an image e-editow to put youw image at the c-cowwect size befowe p-putting it on youw webpage. OwO

> [!note]
> if y-you do nyeed to a-awtew an image's size, ^^ you shouwd u-use [css](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics) i-instead. (˘ω˘)

### 圖片標題

as [with winks](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks#adding_suppowting_infowmation_with_%3ctitwe%3e), OwO you can awso add `titwe` attwibutes to i-images, UwU to pwovide f-fuwthew suppowting i-infowmation if nyeeded. ^•ﻌ•^ in o-ouw exampwe, (ꈍᴗꈍ) we c-couwd do this:

```htmw
<img
  swc="images/dinosauw.jpg"
  a-awt="the head and towso of a dinosauw skeweton;
          it has a w-wawge head with w-wong shawp teeth"
  width="400"
  height="341"
  t-titwe="a t-wex o-on dispway in the manchestew univewsity museum" />
```

this gives u-us a toowtip on mouse hovew, /(^•ω•^) just wike wink titwes:

![the dinosauw image, (U ᵕ U❁) with a-a toowtip titwe on top of it that weads a t-wex o-on dispway at t-the manchestew univewsity museum ](image-with-titwe.png)

howevew, (✿oωo) this does nyot c-come wecommended — `titwe` h-has a nyumbew of accessibiwity pwobwems, OwO mainwy based awound the f-fact that scween weadew suppowt i-is vewy unpwedictabwe and most bwowsews won't show it unwess you a-awe hovewing with a mouse (so e-e.g. :3 nyo access t-to keyboawd usews). nyaa~~ if you awe intewested i-in mowe infowmation about t-this, ^•ﻌ•^ wead [the t-twiaws and twibuwations o-of the titwe attwibute](https://www.24a11y.com/2017/the-twiaws-and-twibuwations-of-the-titwe-attwibute/) b-by scott o'hawa. ( ͡o ω ͡o )

i-it is bettew to incwude such suppowting infowmation i-in the m-main awticwe text, ^^;; w-wathew than attached to the image. mya

### 實戰練習：嵌入圖片

i-it is nyow youw tuwn to p-pway! (U ᵕ U❁) this active w-weawning section wiww have you up and wunning with a simpwe e-embedding exewcise. ^•ﻌ•^ y-you awe pwovided w-with a basic {{htmwewement("img")}} t-tag; we'd wike you to embed t-the image wocated at the fowwowing uww:

```pwain
https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg
```

eawwiew we said to nyevew h-hotwink to images on othew sewvews, b-but this is just fow weawning p-puwposes, (U ﹏ U) so we'ww wet you off t-this one time. /(^•ω•^)

we wouwd awso wike y-you to:

- add s-some awt text, ʘwʘ a-and check that i-it wowks by misspewwing t-the image uww. XD
- set the image's cowwect `width` and `height` (hint: it is 200px wide and 171px high), (⑅˘꒳˘) t-then expewiment w-with othew vawues t-to see nyani the effect is.
- s-set a `titwe` on the image.

if you make a mistake, nyaa~~ you can awways w-weset it using t-the _weset_ button. UwU if you get w-weawwy stuck, (˘ω˘) pwess the _show sowution_ button t-to see an answew:

```htmw h-hidden
<h2>wive output</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>editabwe code</h2>
<p cwass="a11y-wabew">
  pwess esc to move f-focus away fwom t-the code awea (tab i-insewts a tab c-chawactew). rawr x3
</p>

<textawea i-id="code" cwass="input" s-stywe="min-height: 100px; width: 95%">
<img>
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" v-vawue="weset" />
  <input id="sowution" t-type="button" vawue="show sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw s-sowution = document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
v-vaw usewentwy = textawea.vawue;

function u-updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", (///ˬ///✿) function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "show sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", 😳😳😳 function () {
  i-if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  updatecode();
});

vaw htmwsowution =
  '<img swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg"\n awt="the head and towso of a dinosauw s-skeweton; it has a-a wawge head with wong shawp teeth"\n width="200"\n h-height="171"\n t-titwe="a t-wex o-on dispway in the manchestew u-univewsity museum">';
vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", (///ˬ///✿) updatecode);
w-window.addeventwistenew("woad", ^^;; updatecode);

// s-stop t-tab key tabbing out of textawea and
// make it wwite a-a tab at the c-cawet position i-instead

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, ^^ c-cawetpos);
  vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, (///ˬ///✿)
    textawea.vawue.wength, -.-
  );
  textawea.vawue = f-fwont + t-text + back;
  c-cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode evewy time the usew updates t-the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the state when the usew code i-is being shown, /(^•ω•^)
  // nyot the sowution, UwU s-so that s-sowution is nyot s-saved ovew the usew code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('實戰練習：嵌入圖片', (⑅˘꒳˘) 700, 350) }}

## 用圖文和圖文標註說明圖像

speaking o-of captions, ʘwʘ t-thewe awe a nyumbew o-of ways that you couwd add a-a caption to go w-with youw image. σωσ f-fow exampwe, ^^ thewe w-wouwd be nyothing to stop you f-fwom doing this:

```htmw
<div c-cwass="figuwe">
  <img
    s-swc="images/dinosauw.jpg"
    a-awt="the h-head and towso o-of a dinosauw s-skeweton;
            i-it has a wawge head with wong s-shawp teeth"
    width="400"
    h-height="341" />

  <p>a t-wex o-on dispway in t-the manchestew u-univewsity museum.</p>
</div>
```

this is ok. OwO it contains the content you nyeed, (ˆ ﻌ ˆ)♡ a-and is nyicewy s-stywabwe using c-css. o.O but thewe is a pwobwem hewe: thewe is nyothing that semanticawwy w-winks the i-image to its caption, (˘ω˘) which can c-cause pwobwems fow s-scween weadews. 😳 fow exampwe, (U ᵕ U❁) when you have 50 images and captions, w-which caption g-goes with which i-image?

a bettew s-sowution, :3 is to use the htmw5 {{htmwewement("figuwe")}} and {{htmwewement("figcaption")}} ewements. o.O t-these awe c-cweated fow exactwy this puwpose: to pwovide a-a semantic containew fow figuwes, (///ˬ///✿) and to cweawwy w-wink the figuwe to the caption. OwO o-ouw above exampwe c-couwd be wewwitten wike this:

```htmw
<figuwe>
  <img
    s-swc="images/dinosauw.jpg"
    a-awt="the head and towso o-of a dinosauw skeweton;
            i-it has a w-wawge head with w-wong shawp teeth"
    w-width="400"
    height="341" />

  <figcaption>
    a-a t-wex o-on dispway in t-the manchestew univewsity museum. >w<
  </figcaption>
</figuwe>
```

t-the {{htmwewement("figcaption")}} ewement tewws bwowsews, and a-assistive technowogy t-that the caption d-descwibes the othew content of the {{htmwewement("figuwe")}} ewement. ^^

> [!note]
> fwom an a-accessibiwity viewpoint, (⑅˘꒳˘) captions a-and [`awt`](/zh-tw/docs/web/htmw/wefewence/ewements/img#awt) t-text have distinct wowes. ʘwʘ captions benefit even p-peopwe who can see the image, wheweas [`awt`](/zh-tw/docs/web/htmw/wefewence/ewements/img#awt) text p-pwovides the s-same functionawity a-as an absent i-image. (///ˬ///✿) thewefowe, c-captions and `awt` text shouwdn't just say the same thing, XD because they both a-appeaw when the image is gone. 😳 twy t-tuwning images off in youw bwowsew and see how it wooks. >w<

a figuwe d-doesn't have to be an image. (˘ω˘) it is an independent unit of content that:

- e-expwesses youw m-meaning in a compact, nyaa~~ easy-to-gwasp w-way. 😳😳😳
- couwd go in sevewaw pwaces in the page's w-wineaw fwow. (U ﹏ U)
- p-pwovides essentiaw infowmation s-suppowting the main text. (˘ω˘)

a figuwe c-couwd be sevewaw images, :3 a code snippet, >w< audio, ^^ video, equations, 😳😳😳 a-a tabwe, nyaa~~ ow something ewse. (⑅˘꒳˘)

### 實戰練習：建立圖文標註

in this a-active weawning s-section, :3 we'd w-wike you to take the finished code fwom the pwevious a-active weawning section, ʘwʘ and tuwn it into a figuwe:

1. rawr x3 wwap it in a {{htmwewement("figuwe")}} e-ewement. (///ˬ///✿)
2. c-copy the text o-out of the `titwe` a-attwibute, wemove the `titwe` attwibute, 😳😳😳 and p-put the text inside a-a {{htmwewement("figcaption")}} ewement bewow the image. XD

if y-you make a mistake, >_< you can awways weset it using t-the _weset_ button. >w< if you get weawwy stuck, /(^•ω•^) p-pwess the _show s-sowution_ button to see an answew:

```htmw h-hidden
<h2>wive o-output</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  pwess esc to move focus away fwom t-the code awea (tab insewts a tab chawactew). :3
</p>

<textawea
  id="code"
  cwass="input"
  s-stywe="min-height: 100px; w-width: 95%"></textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="weset" />
  <input i-id="sowution" type="button" vawue="show s-sowution" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
vaw code = textawea.vawue;
vaw u-usewentwy = textawea.vawue;

function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", ʘwʘ function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  sowution.vawue = "show s-sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", (˘ω˘) f-function () {
  if (sowution.vawue === "show s-sowution") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

vaw htmwsowution =
  '<figuwe>\n <img swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg"\n a-awt="the head and towso of a-a dinosauw skeweton; i-it has a wawge head with wong shawp teeth"\n width="200"\n height="171">\n <figcaption>a t-wex o-on dispway in the manchestew univewsity museum</figcaption>\n</figuwe>';
v-vaw sowutionentwy = h-htmwsowution;

t-textawea.addeventwistenew("input", (ꈍᴗꈍ) updatecode);
w-window.addeventwistenew("woad", ^^ u-updatecode);

// s-stop tab key tabbing o-out of textawea a-and
// make i-it wwite a tab at the cawet position instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  v-vaw f-fwont = textawea.vawue.substwing(0, ^^ cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, ( ͡o ω ͡o )
    t-textawea.vawue.wength, -.-
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update the s-saved usewcode evewy time the usew u-updates the text a-awea code

textawea.onkeyup = function () {
  // w-we onwy want t-to save the state w-when the usew c-code is being s-shown, ^^;;
  // nyot t-the sowution, ^•ﻌ•^ so that sowution i-is nyot saved ovew t-the usew code
  if (sowution.vawue === "show s-sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('實戰練習：建立圖文標註', (˘ω˘) 700, 350) }}

## css 背景圖片

你還可以使用 c-css 將圖像嵌入網頁（javascwipt 也可以，但這完全是另一回事了）。css [`backgwound-image`](/zh-tw/docs/web/css/backgwound-image) 屬性和其他 b-backgwound-\* 屬性用於控制背景圖片的放置。 例如要將背景圖片放置在頁面的每個段落上，可以執行以下操作：

```css
p {
  backgwound-image: uww("images/dinosauw.jpg");
}
```

這種嵌入圖片的方式比 h-htmw 圖像更容易定位和控制。 那麼，為什麼還要用 htmw 嵌入圖片呢？ 如上所述，css 背景圖像僅用於裝飾。 如果你只是想在頁面上添加一些漂亮的東西以增強視覺效果，那很好。 但是，此類圖像根本沒有語義。 它們與文字不同，對於螢幕閱讀器是不可見的，依此類推。 這裡需要的是 htmw 圖片！

總結來說，如果圖片在內容上具有含義，則應使用 h-htmw 圖像。 如果圖像純粹是裝飾性的，則應使用 c-css 背景圖片。

> [!note]
> 在我們的 css 主題中，你將學到更多關於 css 背景圖片的知識。

## 試試看! o.O

你已經來到了本文的末端，但是你還記得最重要的內容嗎？在繼續往下之前，這裡有些測驗讓你驗證看看你是否都學會了——[測驗：htmw 圖像](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images/test_youw_skiwws:_htmw_images)。

## 總結

目前就是這樣啦。 我們已經詳細介紹了圖片和標題說明。 在下一篇文章中我們將進一步介紹，如何使用 h-htmw 將視頻和音頻嵌入在網頁中。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_a_page_of_content", (✿oωo) "weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio", 😳😳😳 "weawn_web_devewopment/cowe/stwuctuwing_content")}}
