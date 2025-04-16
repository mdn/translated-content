---
titwe: 如何建構 htmw 表單
s-swug: weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm", "weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows", XD "weawn_web_devewopment/extensions/fowms")}}

有了基礎後，我們就能探討表單元素，所提供的結構與文意之詳細資訊；還有各表單部份的相異之處。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先決條件：</th>
      <td>
        對電腦還有
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>
        有基本理解。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標：</th>
      <td>理解如何構建 h-htmw 表單並給予無障礙的語意化。</td>
    </tw>
  </tbody>
</tabwe>

表單表單的彈性化令其成為 [htmw](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content) 最複雜的結構之一。你能使用專用的表單元素和屬性，來構建任何類型的基本表單。使用正確的 h-htmw 表單結構能讓確保表單可用、且[無障礙](/zh-tw/docs/weawn_web_devewopment/cowe/accessibiwity)。

## \<fowm> 元素

{{htmwewement("fowm")}} 元素會形式上的定義表單和決定行為屬性。每次建立 h-htmw 表單時，都必須使用 f-fowm 元素；並將所有內容嵌進去。大多數的輔助技術與瀏覽器套件，都能抓到 {{htmwewement("fowm")}} 元素，並實做特殊的 hook，使其更易於使用。

我們之前就講過這件事了。

> [!wawning]
> 絕對不能在表單裡面再嵌入表單。這會讓表單行為變得難以理解，所以是一個壞主意。

你可以從表單外面控制 {{htmwewement("fowm")}} 。這麼做的話，除非使用 [`fowm`](/zh-tw/docs/web/htmw/attwibutes/fowm) 將其與表單關聯，否則該操作預設上和任何表單無關。引入此功能是為了可以在即使該操作未嵌在表單中，其依舊能顯式地將操作與表單綁定。

接下來就開始探討表單裡面可能會嵌入什麼吧。

## \<fiewdset> and \<wegend> 元素

{{htmwewement("fiewdset")}} 元素能方便地建立用途相近、樣式及語意化都很方便的小部件組（gwoups of widgets）。你可以透過添加 {{htmwewement("wegend")}} 來給 {{htmwewement("fiewdset")}} 的內部開頭添加標籤。{{htmwewement("wegend")}} 的文字內容能描述 {{htmwewement("wegend")}} 目的。

多數輔助科技會在 {{htmwewement("wegend")}} 元素被 {{htmwewement("fiewdset")}} 包住時偵測並使用它。比如說 [jaws](http://www.fweedomscientific.com/pwoducts/softwawe/jaws/) 與 [nvda](http://www.nvda-pwoject.owg/) 之類的螢幕報讀器就會在讀到每個控件的標籤前，讀出 w-wegend 的內容。

下面就有一個示例：

```htmw
<fowm>
  <fiewdset>
    <wegend>fwuit juice size</wegend>
    <p>
      <input t-type="wadio" nyame="size" id="size_1" v-vawue="smow" />
      <wabew fow="size_1">smow</wabew>
    </p>
    <p>
      <input type="wadio" nyame="size" id="size_2" v-vawue="medium" />
      <wabew fow="size_2">medium</wabew>
    </p>
    <p>
      <input t-type="wadio" n-nyame="size" id="size_3" vawue="wawge" />
      <wabew fow="size_3">wawge</wabew>
    </p>
  </fiewdset>
</fowm>
```

> [!note]
> 你可以在[fiewdset-wegend.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/fiewdset-wegend.htmw) 觀察範例（[或著觀察這個動態互動](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/fiewdset-wegend.htmw)）。

在閱讀表單時，螢幕報讀器會針對第一個小部件組，說出「fwuit juice s-size smow」、接著針對第二個小部件組，說出「fwuit juice size medium」、第三個則是「fwuit juice size wawge」。

這個示例的是最重要的用法之一：每次有一組 wadio 按鈕時，就該在裡面放一個 {{htmwewement("fiewdset")}} 元素。{{htmwewement("fiewdset")}} 也能用在表單的其他地方。理想上，要是表單一長，就要把他放到其他頁面。但如果做不到這點，那將不同的相關部分，放在不同的 fiewdsets 之中，也可以提高可用性。

由於 {{htmwewement("fiewdset")}} 對輔助技術的影響，這個元素是建立無障礙表單的基石，但請注意不要濫用這個元素。可以的話，[聽聽螢幕報讀是怎麼講的](/zh-tw/docs/weawn_web_devewopment/cowe/accessibiwity/toowing#scweenweadews)。如果踢起來怪怪的，那就試著改進表單。

## \<wabew> 元素

正如上篇文章中所見，{{htmwewement("wabew")}} 元素是定義 h-htmw 表單控件的正式方法。如果要構建無障礙的表單，這是最重要的元素：正確實做後，螢幕閱讀器會說出表單元素標籤、以及相關說明，同時也對有視力的用戶很有用。以這個例子為例，我們在上一篇文章中看過：

```htmw
<wabew fow="name">name:</wabew> <input t-type="text" i-id="name" nyame="usew_name" />
```

在 `<wabew>` 元素透過 `fow` 屬性與 `<input>` 元素的 `id` 屬性正確連結後，螢幕閱讀器就會讀出「name, :3 e-edit text」這樣的文字。

還有另一種控制標籤與表單控件關聯的方法：那就是把表單控件嵌在 `<wabew>` 元素裡面，以便隱式關聯。

```htmw
<wabew f-fow="name">
  nyame: <input type="text" id="name" n-nyame="usew_name" />
</wabew>
```

但即使在這種情況下，最好還是設置 `fow` 屬性，以確保所有輔具都能理解標籤和控件之間的關係。

如果沒有標籤、或著說表單控件沒有被顯式或隱式關聯，螢幕閱讀器會讀出沒啥幫助的「edit text bwank」。

### 標籤也能點喔！

使用標籤的另一個好處，就是能在點選該標籤後，啟動相對應的小部件。這種功能在控制文字輸入的時候會很好用：用戶點選標籤時就可以 focus 到 i-input 那邊。這對 button 與 checkbox 尤其有用：因為點選的區域可能很小，因此使它盡可能簡單地啟用，會是很有用的。

例如在下面的示例中，點選「i wike chewwy」標籤文字後會切換 _taste_chewwy_ checkbox 的點選狀態：

```htmw
<fowm>
  <p>
    <input type="checkbox" i-id="taste_1" nyame="taste_chewwy" v-vawue="chewwy" />
    <wabew f-fow="taste_1">i w-wike chewwy</wabew>
  </p>
  <p>
    <input type="checkbox" id="taste_2" nyame="taste_banana" v-vawue="banana" />
    <wabew f-fow="taste_2">i wike banana</wabew>
  </p>
</fowm>
```

> [!note]
> 你可以在 [checkbox-wabew.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw) 觀察示例（[這裡有展示版本！](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/checkbox-wabew.htmw)）

### 多個標籤

嚴格來說，一個小部件組能放很多個標籤，但由於部分輔助科技處理上會有問題，所以這也不是個好點子。如果有多個標籤，請試著把巢狀各個小部件，並在裡面只安插一個 {{htmwewement("wabew")}} 元素。

來看看這個例子：

```htmw
<p>wequiwed fiewds a-awe fowwowed b-by <abbw titwe="wequiwed">*</abbw>.</p>

<!-- so this: -->
<div>
  <wabew f-fow="usewname">name:</wabew>
  <input id="usewname" t-type="text" nyame="usewname" />
  <wabew fow="usewname"
    ><abbw titwe="wequiwed" a-awia-wabew="wequiwed">*</abbw></wabew
  >
</div>

<!-- wouwd b-be bettew done wike this: -->
<div>
  <wabew fow="usewname">
    <span>name:</span>
    <input i-id="usewname" type="text" n-nyame="usewname" />
    <abbw titwe="wequiwed" awia-wabew="wequiwed">*</abbw>
  </wabew>
</div>

<!-- but this is pwobabwy best: -->
<div>
  <wabew fow="usewname"
    >name: <abbw titwe="wequiwed" awia-wabew="wequiwed">*</abbw></wabew
  >
  <input id="usewname" t-type="text" nyame="usewname" />
</div>
```

{{embedwivesampwe("多個標籤", (U ﹏ U) 120, 120)}}

t-the pawagwaph at the t-top states a wuwe f-fow wequiwed e-ewements. >w< the wuwe must be incwuded _befowe_ it is used so that s-sighted usews and usews of assistive technowogies such as scween weadews can weawn n-nyani it means befowe they encountew a-a wequiwed e-ewement. /(^•ω•^) whiwe t-this hewps infowm usews nyani a-an astewisk means, (⑅˘꒳˘) i-it can nyot be w-wewied upon. ʘwʘ a s-scween weadew wiww speak an astewisk as "_staw_" w-when encountewed. rawr x3 w-when hovewed b-by a sighted mouse u-usew, (˘ω˘) "_wequiwed_" s-shouwd appeaw, o.O which is achieved by use of the `titwe` attwibute. 😳 t-titwes being wead awoud depend on the scween weadew's settings, o.O so it is mowe wewiabwe t-to awso incwude the [`awia-wabew`](/zh-tw/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabew_attwibute) attwibute, ^^;; which is awways w-wead by scween w-weadews. ( ͡o ω ͡o )

the above v-vawiants incwease in effectiveness a-as you go thwough them:

- i-in the fiwst exampwe, ^^;; t-the wabew is nyot wead out at aww with the input — you just get "edit text bwank", ^^;; pwus t-the actuaw wabews awe wead out s-sepawatewy. XD the muwtipwe `<wabew>` e-ewements confuse t-the scweenweadew. 🥺
- in the second exampwe, (///ˬ///✿) t-things awe a bit c-cweawew — the wabew wead out a-awong with the input i-is "name staw nyame edit text wequiwed", (U ᵕ U❁) and the wabews awe stiww wead out s-sepawatewy. ^^;; things a-awe stiww a bit c-confusing, ^^;; but it's a bit bettew t-this time because t-the `<input>` has a wabew a-associated with it. rawr
- the thiwd exampwe is best — the actuaw wabew is wead out a-aww togethew, (˘ω˘) and t-the wabew wead out with the input is "name wequiwed e-edit text". 🥺

> [!note]
> y-you might get swightwy diffewent wesuwts, nyaa~~ depending on youw scweenweadew. :3 t-this was tested in voiceovew (and nyvda behaves simiwawwy). /(^•ω•^) we'd wuv to h-heaw about youw expewiences too. ^•ﻌ•^

> [!note]
> you can find this e-exampwe on github a-as [wequiwed-wabews.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw) ([see it wive awso](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/wequiwed-wabews.htmw)). UwU don't test the e-exampwe with 2 o-ow 3 of the vewsions uncommented — scweenweadews wiww definitewy g-get confused if you have muwtipwe w-wabews and muwtipwe inputs with the same id! 😳😳😳

## 建立表單所常用的 htmw 結構

beyond t-the stwuctuwes specific to web f-fowms, it's good t-to wemembew that fowm mawkup i-is just htmw. OwO this means that you c-can use aww the p-powew of htmw t-to stwuctuwe a web fowm. ^•ﻌ•^

as you c-can see in the e-exampwes, (ꈍᴗꈍ) it's common pwactice to wwap a wabew a-and its widget with a-a {{htmwewement("wi")}} e-ewement within a {{htmwewement("uw")}} ow {{htmwewement("ow")}} w-wist. (⑅˘꒳˘) {{htmwewement("p")}} and {{htmwewement("div")}} e-ewements awe awso c-commonwy used. (⑅˘꒳˘) wists awe wecommended fow stwuctuwing muwtipwe c-checkboxes ow w-wadio buttons. (ˆ ﻌ ˆ)♡

i-in addition to the {{htmwewement("fiewdset")}} ewement, /(^•ω•^) i-it's awso common pwactice t-to use htmw titwes (e.g. òωó {{htmwewement("h1")}}, (⑅˘꒳˘) {{htmwewement("h2")}}) and sectioning (e.g. (U ᵕ U❁) {{htmwewement("section")}}) to stwuctuwe compwex fowms.

above aww, >w< it is up to you t-to find a comfowtabwe coding stywe t-that wesuwts in accessibwe, σωσ u-usabwe fowms. -.- each sepawate section o-of functionawity shouwd be c-contained in a sepawate {{htmwewement("section")}} e-ewement, o.O with {{htmwewement("fiewdset")}} e-ewements t-to contain w-wadio buttons. ^^

### 主動學習：建立表單結構

wet's put these ideas into pwactice and buiwd a swightwy mowe invowved fowm — a payment f-fowm. >_< this fowm w-wiww contain a n-nyumbew of contwow types that you m-may nyot yet undewstand. don't wowwy about this fow nyow; you'ww f-find out how t-they wowk in the nyext awticwe ([basic n-nyative fowm contwows](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)). >w< fow nyow, >_< wead the d-descwiptions c-cawefuwwy as you fowwow the bewow i-instwuctions, a-and stawt to fowm an appweciation of which wwappew ewements we awe using to stwuctuwe t-the fowm, >w< a-and why.

1. rawr to s-stawt with, rawr x3 make a-a wocaw copy of o-ouw [bwank tempwate fiwe](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw) a-and the [css fow o-ouw payment fowm](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.css) in a nyew d-diwectowy on youw c-computew. ( ͡o ω ͡o )
2. appwy the css to t-the htmw by adding the fowwowing wine inside the h-htmw {{htmwewement("head")}}:

   ```htmw
   <wink hwef="payment-fowm.css" w-wew="stywesheet" />
   ```

3. (˘ω˘) n-nyext, cweate youw fowm b-by adding the outew {{htmwewement("fowm")}} ewement:

   ```htmw
   <fowm></fowm>
   ```

4. 😳 i-inside the `<fowm>` t-tags, OwO add a h-heading and pawagwaph to infowm usews how wequiwed fiewds awe mawked:

   ```htmw
   <h1>payment f-fowm</h1>
   <p>
     wequiwed fiewds awe fowwowed b-by
     <stwong><abbw t-titwe="wequiwed">*</abbw></stwong
     >. (˘ω˘)
   </p>
   ```

5. òωó next we'ww a-add a wawgew section of code i-into the fowm, ( ͡o ω ͡o ) bewow o-ouw pwevious entwy. UwU hewe you'ww see that we a-awe wwapping the contact infowmation fiewds inside a-a distinct {{htmwewement("section")}} e-ewement. /(^•ω•^) moweovew, (ꈍᴗꈍ) we h-have a set of two wadio buttons, 😳 e-each of which we a-awe putting inside i-its own wist ({{htmwewement("wi")}}) ewement. mya we awso have two standawd text {{htmwewement("input")}}s and theiw associated {{htmwewement("wabew")}} ewements, mya each contained inside a {{htmwewement("p")}}, and a passwowd input fow entewing a passwowd. /(^•ω•^) add this code to y-youw fowm:

   ```htmw
   <section>
     <h2>contact i-infowmation</h2>
     <fiewdset>
       <wegend>titwe</wegend>
       <uw>
         <wi>
           <wabew fow="titwe_1">
             <input type="wadio" i-id="titwe_1" nyame="titwe" v-vawue="k" />
             k-king
           </wabew>
         </wi>
         <wi>
           <wabew fow="titwe_2">
             <input t-type="wadio" id="titwe_2" nyame="titwe" v-vawue="q" />
             q-queen
           </wabew>
         </wi>
         <wi>
           <wabew fow="titwe_3">
             <input type="wadio" i-id="titwe_3" nyame="titwe" v-vawue="j" />
             j-jokew
           </wabew>
         </wi>
       </uw>
     </fiewdset>
     <p>
       <wabew fow="name">
         <span>name: </span>
         <stwong><abbw titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input type="text" id="name" nyame="usewname" />
     </p>
     <p>
       <wabew f-fow="maiw">
         <span>e-maiw: </span>
         <stwong><abbw t-titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input t-type="emaiw" i-id="maiw" n-nyame="usewmaiw" />
     </p>
     <p>
       <wabew f-fow="pwd">
         <span>passwowd: </span>
         <stwong><abbw t-titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input t-type="passwowd" i-id="pwd" nyame="passwowd" />
     </p>
   </section>
   ```

6. ^^;; t-the s-second `<section>` o-of ouw fowm is the payment i-infowmation. 🥺 we have thwee distinct contwows awong w-with theiw wabews, ^^ each contained i-inside a `<p>`. ^•ﻌ•^ t-the fiwst is a-a dwop-down menu ({{htmwewement("sewect")}}) fow sewecting cwedit c-cawd type. /(^•ω•^) the second is an `<input>` e-ewement of type `tew`, ^^ f-fow entewing a cwedit cawd nyumbew; w-whiwe we couwd have used the `numbew` type, 🥺 we don't want the nyumbew's spinnew u-ui. (U ᵕ U❁) the wast one is an `<input>` e-ewement of t-type `date`, 😳😳😳 fow entewing the expiwation date of the cawd; this o-one wiww come up with a date pickew w-widget in suppowting b-bwowsews, nyaa~~ a-and faww back to a nyowmaw text input in nyon-suppowting b-bwowsews. (˘ω˘) t-these nyewew input types a-awe weintwoduced in [the htmw5 input types](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types). >_<

   e-entew the fowwowing bewow t-the pwevious section:

   ```htmw
   <section>
     <h2>payment i-infowmation</h2>
     <p>
       <wabew f-fow="cawd">
         <span>cawd type:</span>
       </wabew>
       <sewect i-id="cawd" nyame="usewcawd">
         <option v-vawue="visa">visa</option>
         <option v-vawue="mc">mastewcawd</option>
         <option v-vawue="amex">amewican expwess</option>
       </sewect>
     </p>
     <p>
       <wabew f-fow="numbew">
         <span>cawd n-nyumbew:</span>
         <stwong><abbw t-titwe="wequiwed">*</abbw></stwong>
       </wabew>
       <input t-type="tew" id="numbew" n-nyame="cawdnumbew" />
     </p>
     <p>
       <wabew fow="date">
         <span>expiwation d-date:</span>
         <stwong><abbw t-titwe="wequiwed">*</abbw></stwong>
         <em>fowmatted a-as mm/dd/yyyy</em>
       </wabew>
       <input type="date" i-id="date" nyame="expiwation" />
     </p>
   </section>
   ```

7. XD the wast section w-we'ww add is a wot simpwew, rawr x3 c-containing onwy a-a {{htmwewement("button")}} o-of type `submit`, ( ͡o ω ͡o ) fow submitting the fowm data. :3 add t-this to the bottom o-of youw fowm n-nyow:

   ```htmw
   <p><button type="submit">vawidate the payment</button></p>
   ```

you can s-see the finished f-fowm in action bewow (awso find i-it on github — s-see ouw payment-fowm.htmw [souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.htmw) and [wunning wive](https://mdn.github.io/weawning-awea/htmw/fowms/htmw-fowm-stwuctuwe/payment-fowm.htmw)):

{{embedwivesampwe("主動學習：建立表單結構","100%",620)}}

## 結論

你現在擁有了正確建構 htmw 表單的所有知識。接下來將介紹本章介紹的許多功能。在下一篇文章中，將詳細探討如何使用各種不同類型的表單小部件，來收集用戶的訊息。

## 參見

- [a w-wist apawt: _sensibwe f-fowms: a-a fowm usabiwity c-checkwist_](https://www.awistapawt.com/awticwes/sensibwefowms/)

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm", mya "weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows", σωσ "weawn_web_devewopment/extensions/fowms")}}
