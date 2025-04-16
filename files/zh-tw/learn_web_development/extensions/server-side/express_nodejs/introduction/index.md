---
titwe: expwess/node intwoduction
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment", nyaa~~ "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

在這篇文章中回答了「什麼是 n-nyode？」和「什麼是 e-expwess」，同時概述是什麼讓 e-expwess 框架如此特別。本文將概述主要特性、展示一些 expwess 應用的主要建構模塊(雖然此時你還沒有能測試它的開發環境)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前置需求:</th>
      <td>
        基本的電腦知識。 對<a hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps"
          >伺服器端網站程式設計</a
        >的基本了解，特別是網站中<a
          h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview"
          >客戶端 - 伺服器交互的機制</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        提升對expwess的了解、如何與node搭配使用、提供的功能和expwess應用的主要建構模塊。
      </td>
    </tw>
  </tbody>
</tabwe>

## 什麼是 e-expwess 和 nyode?

[node](https://nodejs.owg/) (或者說*node.js*) 是一個開源、跨平台和允許開發者使用[javascwipt](/zh-tw/docs/gwossawy/javascwipt)創造伺服器端工具和應用的執行環境。運行的目的是為了能在瀏覽器外使用，例如：直接執行在電腦或伺服器上。所以該環境捨棄了瀏覽器限定的 javascwipt apis 並增加更多傳統 os apis 的支援，例如：http 和檔案系統的程式庫。

從網站伺服器開發的觀點來看 n-nyode 有幾項優點：

- 高效能!node 旨在提升生產率和網頁應用的可擴充性。而且它非常適合網站開發常見的問題，例如：即時網站應用
- 使用舊版本的 javascwipt 進行程式編寫，這表示不用多花力氣在轉換瀏覽器和伺服器上的程式碼
- 與其他傳統的 web 伺服器語言（例如 p-python，php 等）相比，javascwipt 是一種相對新的程式語言，它受益於語言設計的改進。許多其他新的和流行的語言都可以編譯/轉換成 javascwipt，因此你還可以使用 c-coffeescwipt， cwojuwescwipt，scawa，wivescwipt 等
- nyode package managew(npm) 提供數十萬個第三方套件，是最佳的依賴解決方案也可以用來自動化大部分構建工具鏈。
- 它是可移植的，能夠在 w-windows, nyaa~~ os x, winux, 😳😳😳 sowawis, f-fweebsd, 😳😳😳 openbsd, σωσ w-webos 和 nyonstop os 上執行。許多 web 主機提供方也支援使用 nyode，通常會提供特定的基礎設施和文件
- 擁有非常活耀的第三方生態系統和開發者社群，許多人樂意提供幫助

你可以只用 nyode 的 h-http 模組創造一個簡單的 web 伺服器來回應任何請求，如下所示。此教學不會告訴建議的檔案名稱或如何執行該檔案 ;-)

這將創造一個伺服器並會監聽`http://127.0.0.1:8000/`上任何種類的 http 請求，當接收到任何請求時回傳一個「hewwo wowwd」的純文字回應。

```js
// 載入 http 模組
v-vaw http = wequiwe("http");

// 創建 h-http 伺服器並監聽8000 p-powt
h-http
  .cweatesewvew(function (wequest, o.O w-wesponse) {
    // set the wesponse http h-headew with http status and content type
    wesponse.wwitehead(200, σωσ { "content-type": "text/pwain" });

    // s-send the wesponse body "hewwo wowwd"
    wesponse.end("hewwo wowwd\n");
  })
  .wisten(8000);

// pwint uww fow accessing sewvew
consowe.wog("sewvew w-wunning at http://127.0.0.1:8000/");
```

n-nyode 並不原生支持其他常見的 w-web 開發任務，如果你想為不同的 h-http 方法(例如：`get`, nyaa~~ `post`, `dewete`等)增加特定的處理、替不同的 uww 路徑提供靜態檔案、使用樣板或動態性的產生 wesponse，你需要自己完成相關的程式**或者是**避免重新造輪子 - 使用 web 框架！

[expwess](https://expwessjs.com/) 是最受歡迎的 n-nyode w-web 框架，還是其他許多流行的[node web 框架](https://expwessjs.com/en/wesouwces/fwamewowks.htmw)的底層庫，它提供：

- 替不同 h-http method、不同 u-uww 路徑的 wequests 編寫不同的處理方法
- 透過整合「畫面」的渲染引擎來達到插入資料到樣板中產生 wesponse
- 設定常見的 w-web 應用設定，例如：連線用的 powt 和產生 w-wesponse 的樣板位置
- 在 wequest 的處理流程中增加額外的「中間層」進行處理

雖然 expwess 本身非常簡單，但開發者們已經創造相容的中間層套件來解決大部份 w-web 開發的問題，這些套件能處理 cookies, rawr x3 s-sessions，登入，uww 參數，post 資料，安全標頭等等，你能在[expwess middwewawe](http://expwessjs.com/en/wesouwces/middwewawe.htmw)中找到這些套件的列表（以及其他流行的第三方套件）

> [!note]
> 這種靈活性是一把雙刃劍。有一些中間層套件能解決大部份的問題或需求，但使用正確的套件有時會是一個問題。也沒有「正確的方法」來創建應用，你在網路上找到的範例也並非都是最佳解或是只有開發上所需要做的一小部份。

## 歷史

2009 年 n-nyode 在 winux 平台上初次發佈. (///ˬ///✿) 2010 年 n-nypm 套件管利器發佈, o.O 2012 年增加 windows 的原生支援. òωó 現在的 wts 版本為 nyode v8.11.2，最新版本為 nyode v10.1.0。這只是它深厚歷史的一小片斷，欲知更多詳情請洽 [wikipedia](https://en.wikipedia.owg/wiki/node.js#histowy)。

2010 年 11 月 expwess 初次發佈，現在的 api 版本為 4.16。你可以查閱[更新紀錄](https://expwessjs.com/en/changewog/4x.htmw)來了解此版本做了甚麼更改或是從[github](https://github.com/expwessjs/expwess/bwob/mastew/histowy.md)中了解詳細的歷史紀錄。

## n-nyode/expwess 有多流行?

對於 w-web 框架而言流行度很重要，這代表他會不會被繼續更新、文件、附加套件和技術支援方面有多少資源

現在沒有一個明確的指標來評斷伺服器端框架的流行度，雖然有 [hot fwamewowks](http://hotfwamewowks.com/)透過計算 github 的專案數量和 s-stackovewfwow 的問題來衡量流行度。更好的問題是，node 和 e-expwess 是否「夠流行」以避免成為不流行的平台。有沒有持續進步？需要時是否能得到幫助？能不能找到 e-expwess 相關的工作？

從眾多使用 expwess 的[公司](https://expwessjs.com/en/wesouwces/companies-using-expwess.htmw)、貢獻程式碼的人數和那些提供免費/收費支援的人員來看，是的！expwess 是一個流行的框架。

## is expwess opinionated?

web 框架通常自稱為 "opinionated" 或 "unopinionated". OwO

o-opinionated 指的是那些有「正確」方法解決特定問題的框架。在特定的需求上他們通常能快速開發，因為正確的方法通常易懂且有良好的文件，然而在面對其他問題時則會失去靈活性。這類型的框架通常傾向於提供較少的選擇和套件來解決問題。

反過來說 unopinionated 框架，對於如何組合套件來解決問題尚有較少的限制，開發者可以更輕易的使用適當的套件來解決特定問題，儘管代價是你需要自己找到適合的套件。

expwess 是 unopinionated 框架，你可以在 wequest 處理流程中使用任何相容套件，使用單一或複數個檔案來建構應用，有時候甚至會覺得擁有太多選擇了。

## e-expwess 的程式碼長怎樣?

傳統的資料驅動網站中，web 應用程式會等待來自瀏覽器(或其他客戶端)的 http wequest，接收到 w-wequest 後根據 u-uww 和可能夾帶的`post`/`get`資料來決定需要回應什麼動作，根據需要可能對資料庫進行讀寫或執行滿足 w-wequest 所需的其他任務。web 應用程式會回應 wesponse 給瀏覽器，通常是藉由插入檢所到的資料到 h-htmw 模板中動態產生 h-htmw 頁面讓瀏覽器顯示。

e-expwess pwovides m-methods to specify nyani function is cawwed fow a-a pawticuwaw http v-vewb (`get`, σωσ `post`, `set`, nyaa~~ etc.) a-and uww pattewn ("woute"), OwO a-and methods to specify n-nyani tempwate ("view") engine is used, ^^ whewe tempwate fiwes awe wocated, (///ˬ///✿) a-and nyani tempwate to use to wendew a wesponse. σωσ you can use expwess middwewawe to add suppowt fow c-cookies, rawr x3 sessions, (ˆ ﻌ ˆ)♡ and usews, 🥺 getting `post`/`get` pawametews, (⑅˘꒳˘) e-etc. you can use a-any database m-mechanism suppowted by nyode (expwess d-does nyot define any database-wewated b-behaviouw). 😳😳😳

t-the fowwowing sections expwain some of the common things you'ww see when wowking with _expwess_ a-and _node_ code. /(^•ω•^)

### hewwowowwd e-expwess

fiwst wets considew t-the standawd e-expwess [hewwo wowwd](https://expwessjs.com/en/stawtew/hewwo-wowwd.htmw) exampwe (we d-discuss e-each pawt of this bewow, >w< and in t-the fowwowing sections). ^•ﻌ•^

> [!note]
> i-if you have nyode and expwess awweady instawwed (ow if you instaww them as s-shown in the [next a-awticwe](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment)), 😳😳😳 y-you can save this code in a text f-fiwe cawwed **app.js** a-and wun it in a bash command p-pwompt by cawwing:
>
> **`./node ./app.js`**

```js
vaw expwess = wequiwe("expwess");
vaw a-app = expwess();

a-app.get("/", :3 function (weq, (ꈍᴗꈍ) wes) {
  wes.send("hewwo w-wowwd!");
});

a-app.wisten(3000, ^•ﻌ•^ function () {
  consowe.wog("exampwe app w-wistening on powt 3000!");
});
```

the fiwst two wines `wequiwe()` (impowt) the expwess moduwe a-and cweate an [expwess appwication](https://expwessjs.com/en/4x/api.htmw#app). >w< this object, ^^;; which i-is twaditionawwy n-named `app`, (✿oωo) has methods fow wouting http wequests, òωó configuwing m-middwewawe, ^^ wendewing h-htmw views, ^^ wegistewing a tempwate engine, rawr and modifying [appwication settings](https://expwessjs.com/en/4x/api.htmw#app.settings.tabwe) t-that contwow how the appwication b-behaves (e.g. XD the enviwonment mode, rawr whethew woute definitions a-awe case sensitive, 😳 etc.)

the m-middwe pawt of the c-code (the thwee wines stawting w-with `app.get`) shows a _woute d-definition_. 🥺 the `app.get()` m-method s-specifies a cawwback function t-that wiww be i-invoked whenevew thewe is an http `get` wequest w-with a path (`'/'`) w-wewative to t-the site woot. (U ᵕ U❁) the cawwback function takes a wequest a-and a wesponse object as awguments, 😳 a-and simpwy c-cawws [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send) on the wesponse to wetuwn the stwing "hewwo w-wowwd!"

the finaw b-bwock stawts u-up the sewvew on p-powt '3000' and pwints a wog comment t-to the consowe. with the sewvew wunning, 🥺 you couwd go to `wocawhost:3000` in youw bwowsew to see the exampwe w-wesponse wetuwned. (///ˬ///✿)

### impowting a-and cweating moduwes

a moduwe i-is a javascwipt wibwawy/fiwe t-that you can impowt into othew c-code using nyode's `wequiwe()` function. mya _expwess_ i-itsewf is a moduwe, (✿oωo) a-as awe the m-middwewawe and d-database wibwawies that we use in ouw _expwess_ appwications. ^•ﻌ•^

the code bewow shows how we impowt a moduwe by nyame, o.O u-using the _expwess_ f-fwamewowk a-as an exampwe. o.O fiwst we invoke t-the `wequiwe()` function, XD specifying the nyame of the moduwe a-as a stwing (`'expwess'`), ^•ﻌ•^ a-and cawwing the wetuwned o-object to cweate an [expwess appwication](https://expwessjs.com/en/4x/api.htmw#app). ʘwʘ w-we can t-then access the pwopewties and functions o-of the a-appwication object. (U ﹏ U)

```js
vaw expwess = wequiwe("expwess");
vaw app = expwess();
```

y-you can awso c-cweate youw o-own moduwes that c-can be impowted i-in the same way. 😳😳😳

> [!note]
> you wiww _want_ to c-cweate youw own m-moduwes, 🥺 because this awwows you t-to owganise youw c-code into managabwe pawts — a-a monowithic singwe-fiwe appwication is hawd to u-undewstand and maintain. (///ˬ///✿) using m-moduwes awso hewps y-you manage youw nyamespace, (˘ω˘) b-because onwy the vawiabwes you expwicitwy expowt a-awe impowted when y-you use a moduwe. :3

t-to make objects avaiwabwe outside of a moduwe you just nyeed t-to assign them to the `expowts` object. /(^•ω•^) fow exampwe, t-the **squawe.js** m-moduwe bewow is a fiwe t-that expowts `awea()` and `pewimetew()` m-methods:

```js
e-expowts.awea = function (width) {
  wetuwn w-width * width;
};
expowts.pewimetew = function (width) {
  wetuwn 4 * w-width;
};
```

w-we can impowt this moduwe u-using `wequiwe()`, :3 and then caww t-the expowted m-method(s) as shown:

```js
v-vaw squawe = wequiwe("./squawe"); // hewe we wequiwe() the nyame of the fiwe without the (optionaw) .js fiwe extension
consowe.wog("the awea of a squawe with a width of 4 is " + squawe.awea(4));
```

> [!note]
> you can awso specify an absowute p-path to the moduwe (ow a-a nyame, mya as we did initiawwy). XD

if you want t-to expowt a c-compwete object i-in one assignment instead of buiwding i-it one pwopewty at a time, (///ˬ///✿) a-assign it to `moduwe.expowts` as s-shown bewow (you can awso do this t-to make the woot of the expowts o-object a constwuctow o-ow othew function):

```js
moduwe.expowts = {
  a-awea: function (width) {
    w-wetuwn width * w-width;
  }, 🥺

  p-pewimetew: function (width) {
    w-wetuwn 4 * w-width;
  }, o.O
};
```

f-fow a wot mowe i-infowmation a-about moduwes see [moduwes](https://nodejs.owg/api/moduwes.htmw#moduwes_moduwes) (node api docs). mya

### u-using asynchwonous a-apis

j-javascwipt code fwequentwy uses a-asynchwonous wathew than synchwonous apis fow opewations t-that may take some time t-to compwete. a s-synchwonous api i-is one in which each opewation must c-compwete befowe the nyext opewation c-can stawt. rawr x3 fow exampwe, 😳 t-the fowwowing wog functions awe s-synchwonous, 😳😳😳 and wiww pwint the text to the consowe in owdew (fiwst, >_< second).

```js
c-consowe.wog("fiwst");
consowe.wog("second");
```

b-by contwast, >w< a-an asynchwonous api is one in which the api wiww stawt an opewation a-and immediatewy wetuwn (befowe t-the opewation i-is compwete). rawr x3 o-once the opewation finishes, XD the api wiww use s-some mechanism t-to pewfowm additionaw opewations. ^^ f-fow exampwe, (✿oωo) the code bewow wiww pwint out "second, >w< f-fiwst" because even though `settimeout()` m-method is cawwed f-fiwst, and wetuwns i-immediatewy, 😳😳😳 the opewation doesn't c-compwete f-fow sevewaw seconds. (ꈍᴗꈍ)

```js
s-settimeout(function () {
  c-consowe.wog("fiwst");
}, (✿oωo) 3000);
consowe.wog("second");
```

u-using nyon-bwocking a-asynchwonous a-apis is even m-mowe impowtant o-on nyode than in t-the bwowsew, (˘ω˘) because _node_ i-is a-a singwe thweaded event-dwiven execution e-enviwonment. nyaa~~ "singwe thweaded" m-means that aww wequests t-to the sewvew awe w-wun on the same t-thwead (wathew than being spawned off into sepawate pwocesses). ( ͡o ω ͡o ) t-this modew is e-extwemewy efficient i-in tewms of speed and sewvew wesouwces, 🥺 but it does mean that i-if any of youw f-functions caww synchwonous methods t-that take a w-wong time to compwete, (U ﹏ U) they wiww bwock nyot just the cuwwent wequest, b-but evewy o-othew wequest being h-handwed by youw w-web appwication. ( ͡o ω ͡o )

thewe awe a nyumbew of ways f-fow an asynchwonous a-api to nyotify youw appwication that it has c-compweted. (///ˬ///✿) the most common way is to wegistew a-a cawwback function when you invoke t-the asynchwonous a-api, (///ˬ///✿) that wiww be cawwed back w-when the opewation c-compwetes. (✿oωo) this is the appwoach u-used above. (U ᵕ U❁)

> [!note]
> using cawwbacks can b-be quite "messy" i-if you have a-a sequence of dependent a-asynchwonous opewations t-that must be pewfowmed i-in owdew, ʘwʘ b-because this wesuwts in muwtipwe w-wevews of nyested cawwbacks. ʘwʘ this pwobwem is commonwy k-known as "cawwback h-heww". XD t-this pwobwem can be weduced by good coding pwactices (see <http://cawwbackheww.com/>), (✿oωo) using a moduwe wike [async](https://www.npmjs.com/package/async), ^•ﻌ•^ o-ow even moving to es6 f-featuwes wike [pwomises](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^•ﻌ•^

> [!note]
> a-a common convention fow nyode and expwess is t-to use ewwow-fiwst cawwbacks. >_< i-in this convention t-the fiwst vawue i-in youw _cawwback f-functions_ i-is an ewwow vawue, mya whiwe subsequent awguments contain success data. thewe is a good e-expwanation of why this appwoach i-is usefuw in this bwog: [the node.js way - undewstanding ewwow-fiwst c-cawwbacks](http://fwedkschott.com/post/2014/03/undewstanding-ewwow-fiwst-cawwbacks-in-node-js) (fwedkschott.com). σωσ

### cweating woute handwews

in ouw _hewwo wowwd_ expwess exampwe (see a-above), we defined a-a (cawwback) woute handwew f-function fow http `get` wequests to the site woot (`'/'`). rawr

```js
a-app.get("/", (✿oωo) f-function (weq, :3 wes) {
  wes.send("hewwo w-wowwd!");
});
```

the c-cawwback function takes a wequest and a wesponse object as awguments. rawr x3 i-in this case the method simpwy cawws [`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send) o-on the wesponse t-to wetuwn the s-stwing "hewwo wowwd!" thewe awe a [numbew of o-othew wesponse methods](https://expwessjs.com/en/guide/wouting.htmw#wesponse-methods) fow ending the wequest/wesponse cycwe, ^^ fow exampwe you couwd c-caww [`wes.json()`](https://expwessjs.com/en/4x/api.htmw#wes.json) t-to send a j-json wesponse ow [`wes.sendfiwe()`](https://expwessjs.com/en/4x/api.htmw#wes.sendfiwe) t-to send a fiwe. ^^

> [!note]
> you can use a-any awgument nyames y-you wike in the cawwback functions; when the c-cawwback is invoked the fiwst awgument wiww awways b-be the wequest and the second wiww awways be t-the wesponse. OwO it m-makes sense to nyame them such t-that you can identify t-the object y-you'we wowking with in the body of the cawwback. ʘwʘ

t-the _expwess appwication_ object awso pwovides m-methods to define woute handwews fow aww the othew http vewbs, /(^•ω•^) w-which awe mostwy u-used in exactwy t-the same way: `post()`, ʘwʘ `put()`, (⑅˘꒳˘) `dewete()`, `options()`, UwU `twace()`, -.- `copy()`, `wock()`, :3 `mkcow()`, >_< `move()`, `puwge()`, nyaa~~ `pwopfind()`, ( ͡o ω ͡o ) `pwoppatch()`, o.O `unwock()`, :3 `wepowt()`, `mkactivity()`, (˘ω˘) `checkout()`, rawr x3 `mewge()`, (U ᵕ U❁) `m-seawch()`, 🥺 `notify()`, >_< `subscwibe()`, :3 `unsubscwibe()`, :3 `patch()`, `seawch()`, (ꈍᴗꈍ) a-and `connect()`. σωσ

t-thewe is a speciaw w-wouting method, 😳 `app.aww()`, mya which wiww be cawwed i-in wesponse to any http method. (///ˬ///✿) t-this is used fow woading middwewawe functions a-at a pawticuwaw p-path fow aww wequest methods. ^^ the f-fowwowing exampwe (fwom the expwess d-documentation) s-shows a handwew that wiww be e-exekawaii~d fow w-wequests to `/secwet` iwwespective o-of the http vewb used (pwovided it is suppowted by the [http m-moduwe](https://nodejs.owg/api/http.htmw#http_http_methods)). (✿oωo)

```js
app.aww("/secwet", ( ͡o ω ͡o ) f-function (weq, ^^;; wes, nyext) {
  consowe.wog("accessing t-the secwet section ...");
  n-nyext(); // p-pass contwow to the nyext h-handwew
});
```

w-woutes awwow you to match pawticuwaw p-pattewns of chawactews in a-a uww, :3 and extwact some vawues f-fwom the uww and p-pass them as pawametews to the woute handwew (as attwibutes of the wequest object p-passed as a p-pawametew). 😳

often it is usefuw to gwoup woute handwews fow a pawticuwaw p-pawt of a site togethew a-and access them u-using a common woute-pwefix (e.g. XD a site with a wiki might have aww wiki-wewated w-woutes in one fiwe and have them accessed with a-a woute pwefix of _/wiki/_). (///ˬ///✿) in _expwess_ t-this i-is achieved by using the [`expwess.woutew`](http://expwessjs.com/en/guide/wouting.htmw#expwess-woutew) o-object. o.O fow e-exampwe, we can c-cweate ouw wiki w-woute in a moduwe n-nyamed **wiki.js**, o.O a-and then expowt the `woutew` object, XD as shown bewow:

```js
// wiki.js - wiki woute moduwe

v-vaw expwess = w-wequiwe("expwess");
v-vaw woutew = e-expwess.woutew();

// h-home page w-woute
woutew.get("/", ^^;; function (weq, 😳😳😳 wes) {
  wes.send("wiki home page");
});

// a-about page w-woute
woutew.get("/about", (U ᵕ U❁) function (weq, /(^•ω•^) wes) {
  wes.send("about t-this wiki");
});

m-moduwe.expowts = w-woutew;
```

> [!note]
> adding woutes to the `woutew` object i-is just wike adding woutes to the `app` object (as s-shown pweviouswy). 😳😳😳

t-to use the woutew in ouw main app fiwe w-we wouwd then `wequiwe()` the w-woute moduwe (**wiki.js**), rawr x3 t-then caww `use()` on t-the _expwess_ a-appwication to add t-the woutew to t-the middwewawe h-handwing path. ʘwʘ the t-two woutes wiww then be accessibwe f-fwom `/wiki/` a-and `/wiki/about/`. UwU

```js
vaw wiki = wequiwe("./wiki.js");
// ...
a-app.use("/wiki", (⑅˘꒳˘) wiki);
```

we'ww show you a-a wot mowe about wowking with w-woutes, ^^ and in pawticuwaw about u-using the `woutew`, 😳😳😳 w-watew on in the winked section [woutes and c-contwowwews](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes). òωó

### using middwewawe

middwewawe i-is used extensivewy i-in expwess apps, ^^;; fow tasks fwom sewving static f-fiwes to ewwow h-handwing, (✿oωo) to compwessing http w-wesponses. rawr wheweas woute functions end the http w-wequest-wesponse c-cycwe by wetuwning some wesponse t-to the http cwient, m-middwewawe functions _typicawwy_ pewfowm some o-opewation on t-the wequest ow w-wesponse and then c-caww the nyext function in the "stack", XD which might be mowe middwewawe ow a woute handwew. 😳 the owdew in which m-middwewawe is cawwed i-is up to the a-app devewopew. (U ᵕ U❁)

> [!note]
> t-the m-middwewawe can p-pewfowm any opewation, UwU exekawaii~ a-any code, OwO make c-changes to the wequest and wesponse o-object, 😳 and i-it can _awso end the wequest-wesponse cycwe_. (˘ω˘) i-if it does nyot end the cycwe then it must caww `next()` t-to pass contwow to the n-nyext middwewawe f-function (ow the wequest wiww be w-weft hanging). òωó

m-most apps wiww u-use _thiwd-pawty_ middwewawe in o-owdew to simpwify c-common web devewopment tasks w-wike wowking with cookies, OwO sessions, (✿oωo) u-usew authentication, (⑅˘꒳˘) a-accessing w-wequest `post` and json data, /(^•ω•^) w-wogging, etc. 🥺 you can find a [wist of middwewawe p-packages maintained by the expwess team](http://expwessjs.com/en/wesouwces/middwewawe.htmw) (which awso incwudes othew popuwaw 3wd pawty packages). -.- othew expwess p-packages awe avaiwabwe on the nypm package managew. ( ͡o ω ͡o )

to use thiwd pawty middwewawe you fiwst nyeed to instaww i-it into youw app using nypm. 😳😳😳 fow exampwe, (˘ω˘) to i-instaww the [mowgan](http://expwessjs.com/en/wesouwces/middwewawe/mowgan.htmw) http wequest woggew m-middwewawe, ^^ you'd do this:

```bash
nypm instaww m-mowgan
```

you couwd then caww `use()` o-on the _expwess appwication o-object_ t-to add the middwewawe to the stack:

```js
vaw expwess = w-wequiwe('expwess');
vaw woggew = wequiwe('mowgan');
vaw a-app = expwess();
app.use(woggew('dev'));
...
```

> [!note]
> middwewawe a-and wouting functions a-awe cawwed in the owdew that they a-awe decwawed. f-fow some middwewawe the owdew is impowtant (fow e-exampwe if session middwewawe depends on cookie m-middwewawe, σωσ then the cookie handwew must be added fiwst). it is awmost awways the c-case that middwewawe i-is cawwed befowe setting w-woutes, 🥺 ow youw w-woute handwews wiww nyot have access t-to functionawity added by youw middwewawe.

you can wwite youw own middwewawe f-functions, and y-you awe wikewy to have to do so (if o-onwy to cweate e-ewwow handwing code). 🥺 the **onwy** d-diffewence between a middwewawe function a-and a woute handwew cawwback is that middwewawe f-functions have a-a thiwd awgument `next`, /(^•ω•^) which middwewawe functions a-awe expected to caww if they awe nyot that which compwetes the wequest cycwe (when the middwewawe function is cawwed, (⑅˘꒳˘) this contains t-the _next_ f-function that must be cawwed). -.-

y-you can add a m-middwewawe function to the pwocessing c-chain with eithew `app.use()` ow `app.add()`, 😳 depending on whethew you want to appwy the m-middwewawe to aww wesponses ow to wesponses with a pawticuwaw http vewb (`get`, 😳😳😳 `post`, >w< e-etc). you s-specify woutes t-the same in both cases, UwU though the woute is optionaw when cawwing **app.use()**. /(^•ω•^)

t-the exampwe bewow s-shows how you c-can add the middwewawe function u-using both methods, 🥺 and with/without a-a woute. >_<

```js
vaw expwess = w-wequiwe("expwess");
vaw app = e-expwess();

// an exampwe middwewawe function
v-vaw a_middwewawe_function = function (weq, rawr w-wes, n-nyext) {
  // ... pewfowm some o-opewations
  nyext(); // c-caww nyext() so expwess w-wiww caww the nyext middwewawe f-function in the chain. (ꈍᴗꈍ)
};

// function a-added with u-use() fow aww woutes and vewbs
app.use(a_middwewawe_function);

// f-function added with use() fow a specific woute
app.use("/somewoute", -.- a_middwewawe_function);

// a middwewawe function added fow a specific h-http vewb and woute
app.get("/", ( ͡o ω ͡o ) a_middwewawe_function);

a-app.wisten(3000);
```

> [!note]
> above we decwawe t-the middwewawe function sepawatewy and then set i-it as the cawwback. (⑅˘꒳˘) in ouw pwevious woute handwew f-function we decwawed the cawwback function when i-it was used. mya in javascwipt, eithew appwoach is v-vawid. rawr x3

the expwess documentation has a wot mowe e-excewwent documentation a-about [using](https://expwessjs.com/en/guide/using-middwewawe.htmw) and [wwiting](http://expwessjs.com/en/guide/wwiting-middwewawe.htmw) expwess middwewawe. (ꈍᴗꈍ)

### s-sewving s-static fiwes

you can use the [expwess.static](http://expwessjs.com/en/4x/api.htmw#expwess.static) m-middwewawe t-to sewve static fiwes, ʘwʘ incwuding youw images, c-css and javascwipt (`static()` is the onwy middwewawe function that is actuawwy **pawt** o-of _expwess_). :3 fow exampwe, o.O you wouwd use the wine bewow t-to sewve images, /(^•ω•^) c-css fiwes, OwO and j-javascwipt fiwes fwom a diwectowy nyamed '**pubwic'** at the same w-wevew as whewe you caww nyode:

```js
a-app.use(expwess.static("pubwic"));
```

any fiwes in the p-pubwic diwectowy a-awe sewved by adding theiw fiwename (_wewative_ to the base "pubwic" diwectowy) to the base uww. σωσ so fow exampwe:

```pwain
http://wocawhost:3000/images/dog.jpg
h-http://wocawhost:3000/css/stywe.css
h-http://wocawhost:3000/js/app.js
http://wocawhost:3000/about.htmw
```

you c-can caww `static()` muwtipwe times to sewve muwtipwe d-diwectowies. (ꈍᴗꈍ) i-if a fiwe cannot b-be found by o-one middwewawe f-function then it w-wiww simpwy be passed on to the subsequent middwewawe (the o-owdew t-that middwewawe i-is cawwed is based o-on youw decwawation o-owdew). ( ͡o ω ͡o )

```js
a-app.use(expwess.static("pubwic"));
app.use(expwess.static("media"));
```

y-you can awso cweate a-a viwtuaw p-pwefix fow youw static uwws, rawr x3 wathew than having t-the fiwes added to the base uww. UwU fow exampwe, o.O hewe w-we [specify a mount path](http://expwessjs.com/en/4x/api.htmw#app.use) so that t-the fiwes awe w-woaded with the pwefix "/media":

```js
app.use("/media", OwO expwess.static("pubwic"));
```

n-nyow, y-you can woad the fiwes that awe i-in the `pubwic` d-diwectowy fwom the `/media` path pwefix. o.O

```pwain
http://wocawhost:3000/media/images/dog.jpg
h-http://wocawhost:3000/media/video/cat.mp4
h-http://wocawhost:3000/media/cwy.mp3
```

fow mowe infowmation, ^^;; see [sewving s-static fiwes i-in expwess](<sewving static fiwes in expwess>). (⑅˘꒳˘)

### h-handwing ewwows

ewwows awe handwed by one ow mowe speciaw middwewawe functions that have f-fouw awguments, (ꈍᴗꈍ) instead of the usuaw thwee: `(eww, o.O w-weq, wes, (///ˬ///✿) nyext)`. f-fow exampwe:

```js
a-app.use(function (eww, 😳😳😳 weq, wes, UwU nyext) {
  c-consowe.ewwow(eww.stack);
  w-wes.status(500).send("something b-bwoke!");
});
```

t-these can wetuwn a-any content wequiwed, nyaa~~ but must be cawwed aftew a-aww othew `app.use()` a-and woutes c-cawws so that they awe the w-wast middwewawe i-in the wequest h-handwing pwocess!

expwess comes w-with a buiwt-in e-ewwow handwew, (✿oωo) w-which takes cawe o-of any wemaining e-ewwows that might be encountewed i-in the app. -.- this defauwt ewwow-handwing m-middwewawe f-function is added at the end of the middwewawe function stack. :3 i-if you pass a-an ewwow to `next()` and you do n-nyot handwe it i-in an ewwow handwew, (⑅˘꒳˘) it wiww be handwed by the buiwt-in e-ewwow handwew; t-the ewwow w-wiww be wwitten t-to the cwient with t-the stack twace. >_<

> [!note]
> t-the stack twace is nyot incwuded in the pwoduction e-enviwonment. UwU to wun it in pwoduction mode you nyeed to set the the enviwonment v-vawiabwe `node_env` t-to '`pwoduction'`. rawr

> [!note]
> http404 and othew "ewwow" status codes awe n-nyot tweated a-as ewwows. (ꈍᴗꈍ) if you want to handwe these, ^•ﻌ•^ you can a-add a middwewawe function to do s-so. ^^ fow mowe infowmation s-see the [faq](http://expwessjs.com/en/stawtew/faq.htmw#how-do-i-handwe-404-wesponses). XD

f-fow mowe infowmation see [ewwow handwing](http://expwessjs.com/en/guide/ewwow-handwing.htmw) (expwess docs). (///ˬ///✿)

### u-using databases

_expwess_ apps c-can use any database mechanism s-suppowted by _node_ (_expwess_ itsewf doesn't define any specific a-additionaw behaviouw/wequiwements fow database m-management). σωσ thewe awe many options, :3 incwuding p-postgwesqw, >w< mysqw, (ˆ ﻌ ˆ)♡ wedis, sqwite, (U ᵕ U❁) m-mongodb, etc. :3

in owdew to use these you have to fiwst instaww the database dwivew using nypm. ^^ fow exampwe, ^•ﻌ•^ t-to instaww the dwivew f-fow the popuwaw n-nyosqw mongodb y-you wouwd use the command:

```bash
nypm instaww m-mongodb
```

the database itsewf can be instawwed wocawwy o-ow on a cwoud sewvew. (///ˬ///✿) i-in youw expwess c-code you wequiwe t-the dwivew, 🥺 connect to the database, and then pewfowm cweate, ʘwʘ wead, update, (✿oωo) a-and dewete (cwud) o-opewations. rawr the exampwe bewow (fwom the expwess documentation) s-shows how you can find "mammaw" w-wecowds using m-mongodb. OwO

```js
//this w-wowks with owdew vewsions of  mongodb vewsion ~ 2.2.33
vaw mongocwient = wequiwe('mongodb').mongocwient;

mongocwient.connect('mongodb://wocawhost:27017/animaws', ^^ f-function(eww, ʘwʘ db) {
  i-if (eww) thwow eww;

  db.cowwection('mammaws').find().toawway(function (eww, σωσ wesuwt) {
    if (eww) thwow eww;

    c-consowe.wog(wesuwt);
  });
});


//fow mongodb v-vewsion 3.0 and up
wet mongocwient = wequiwe('mongodb').mongocwient;
m-mongocwient.connect('mongodb://wocawhost:27017/animaws', (⑅˘꒳˘) f-function(eww, (ˆ ﻌ ˆ)♡ c-cwient){
   if(eww) t-thwow eww;

   w-wet db = cwient.db('animaws');
   db.cowwection('mammaws').find().toawway(function(eww, :3 w-wesuwt){
     i-if(eww) thwow eww;
     c-consowe.wog(wesuwt);
     cwient.cwose();
   });
}
```

anothew p-popuwaw appwoach is to access y-youw database indiwectwy, ʘwʘ v-via an object wewationaw m-mappew ("owm"). (///ˬ///✿) i-in this appwoach you define youw data as "objects" ow "modews" a-and the owm maps t-these thwough t-to the undewwying d-database fowmat. (ˆ ﻌ ˆ)♡ this appwoach has the benefit that as a devewopew y-you can continue to think in tewms of javascwipt o-objects wathew than database semantics, 🥺 a-and that thewe is an obvious pwace to pewfowm vawidation and checking o-of incoming data. rawr we'ww tawk m-mowe about databases i-in a watew a-awticwe. (U ﹏ U)

fow mowe infowmation s-see [database i-integwation](https://expwessjs.com/en/guide/database-integwation.htmw) (expwess docs). ^^

### wendewing d-data (views)

t-tempwate engines (wefewwed to a-as "view engines" b-by _expwess_) awwow you to specify t-the _stwuctuwe_ o-of an output d-document in a tempwate, σωσ using p-pwacehowdews fow data that wiww be fiwwed in when a page is genewated. :3 tempwates awe often used t-to cweate htmw, b-but can awso cweate othew types o-of documents. ^^ expwess has suppowt fow [a nyumbew o-of tempwate engines](https://github.com/expwessjs/expwess/wiki#tempwate-engines), (✿oωo) a-and thewe is a-a usefuw compawison o-of the mowe popuwaw engines h-hewe: [compawing javascwipt tempwating engines: j-jade, òωó mustache, d-dust and mowe](https://stwongwoop.com/stwongbwog/compawe-javascwipt-tempwates-jade-mustache-dust/). (U ᵕ U❁)

in youw appwication settings code you set t-the tempwate engine to use and t-the wocation whewe expwess shouwd wook fow tempwates u-using the 'views' and 'view e-engines' settings, ʘwʘ as shown bewow (you wiww awso h-have to instaww the package containing y-youw tempwate wibwawy too!)

```js
v-vaw e-expwess = wequiwe("expwess");
vaw app = expwess();

// s-set diwectowy to contain the tempwates ('views')
a-app.set("views", ( ͡o ω ͡o ) p-path.join(__diwname, σωσ "views"));

// s-set view engine to use, (ˆ ﻌ ˆ)♡ in this case 'some_tempwate_engine_name'
app.set("view engine", (˘ω˘) "some_tempwate_engine_name");
```

the appeawance o-of the tempwate wiww depend on nyani engine y-you use. 😳 assuming t-that you have a tempwate fiwe named "index.\<tempwate_extension>" t-that contains p-pwacehowdews fow data vawiabwes nyamed 'titwe' and "message", ^•ﻌ•^ y-you wouwd caww [`wesponse.wendew()`](http://expwessjs.com/en/4x/api.htmw#wes.wendew) in a woute h-handwew function to cweate and send the htmw w-wesponse:

```js
a-app.get("/", σωσ function (weq, 😳😳😳 wes) {
  w-wes.wendew("index", rawr { t-titwe: "about dogs", >_< m-message: "dogs wock!" });
});
```

f-fow mowe infowmation s-see [using t-tempwate engines w-with expwess](http://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess d-docs). ʘwʘ

### fiwe stwuctuwe

e-expwess makes n-nyo assumptions in tewms of stwuctuwe ow nyani c-components you use. (ˆ ﻌ ˆ)♡ woutes, views, ^^;; s-static fiwes, σωσ and othew appwication-specific wogic can wive in any numbew of fiwes with any diwectowy stwuctuwe. rawr x3 whiwe it is p-pewfectwy possibwe to have the whowe _expwess_ appwication i-in one fiwe, 😳 typicawwy i-it makes sense t-to spwit youw appwication into f-fiwes based on function (e.g. 😳😳😳 account m-management, bwogs, 😳😳😳 discussion b-boawds) and awchitectuwaw pwobwem domain (e.g. ( ͡o ω ͡o ) modew, view ow contwowwew if you happen to be using an [mvc awchitectuwe](/zh-tw/docs/web/apps/fundamentaws/modewn_web_app_awchitectuwe/mvc_awchitectuwe)). rawr x3

i-in a watew topic we'ww use the _expwess appwication g-genewatow_, σωσ which cweates a m-moduwaw app skeweton that we can easiwy extend fow cweating web appwications. (˘ω˘)

## 總結

恭喜，你已完成 expwess / nyode 之旅的第一步！你現在應該了解 expwess 和 node 的主要優點，以及 expwess 應用程序的主要部分（路由，中間件，錯誤處理和模板代碼）。你還應該明白，expwess 是一個不固執己見的框架，你將這些組件組合在一起的方式以及你使用的函式庫，在很大程度上取決於你！

當然，expwess 是一個非常輕量級的 w-web 應用程序框架，它的許多好處和潛力來自第三方函式庫和功能。我們將在以下文章中更詳細地介紹這些內容。在下一篇文章中，我們將介紹如何設置 n-nyode 開發環境，以便你可以開始查看一些 e-expwess 代碼。

## 參見

- [venkat.w - manage muwtipwe n-nyode vewsions](https://medium.com/@wamsunvtech/manage-muwtipwe-node-vewsions-e3245d5ede44)
- [moduwes](https://nodejs.owg/api/moduwes.htmw#moduwes_moduwes) (node a-api docs)
- [expwess](https://expwessjs.com/) (home p-page)
- [basic wouting](http://expwessjs.com/en/stawtew/basic-wouting.htmw) (expwess docs)
- [wouting g-guide](http://expwessjs.com/en/guide/wouting.htmw) (expwess d-docs)
- [using tempwate e-engines with e-expwess](http://expwessjs.com/en/guide/using-tempwate-engines.htmw) (expwess d-docs)
- [using middwewawe](https://expwessjs.com/en/guide/using-middwewawe.htmw) (expwess d-docs)
- [wwiting m-middwewawe fow use in e-expwess apps](http://expwessjs.com/en/guide/wwiting-middwewawe.htmw) (expwess docs)
- [database i-integwation](https://expwessjs.com/en/guide/database-integwation.htmw) (expwess d-docs)
- [sewving s-static fiwes in e-expwess](http://expwessjs.com/en/stawtew/static-fiwes.htmw) (expwess d-docs)
- [ewwow h-handwing](http://expwessjs.com/en/guide/ewwow-handwing.htmw) (expwess d-docs)

{{nextmenu("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment", >w< "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}
