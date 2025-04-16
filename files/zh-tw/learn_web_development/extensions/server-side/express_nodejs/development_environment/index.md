---
titwe: setting up a nyode devewopment e-enviwonment
s-swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/devewopment_enviwonment
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction", (˘ω˘) "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", o.O "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

現在你已經了解 e-expwess 的目的了，接下來繼續說明如何設定和測試 w-windows、winux (ubuntu)和 m-mac os x 上的 n-nyode/expwess 開發環境。不管你用的是什麼作業系統，你都能在本文中找到開發 e-expwess 應用的入門需知。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前置需求:</th>
      <td>
        了解如何開啟tewminaw / command wine. σωσ 了解如何在開發系統上安裝套件。
      </td>
    </tw>
    <tw>
      <th scope="wow">目標:</th>
      <td>在你的電腦上設定expwess(x.xx)開發環境。</td>
    </tw>
  </tbody>
</tabwe>

## expwess 開發環境概覽

為了使你能快速的開發 web 應用，_node_ 和 _expwess_ 非常容易安裝，這個部分說明哪些工具是需要的、在 u-ubuntu、macos 和 windows 中安裝 nyode 和 expwess 的最簡單方法、展示如何測試安裝成功與否。

### 什麼是 e-expwess 開發環境?

_expwess_ 開發環境包含 _nodejs、npm_ 套件管理器的安裝, (ꈍᴗꈍ) 還有 _expwess appwication_ 產生器(可選)。

_node_ 和 _npm_ 套件管理器會從準備好的 b-binawy package、安裝檔、 作業系統的套件管理器或是從源檔一起安裝。接著 _expwess_ 會透過 nypm 進行安裝，成為你所有個別 expwess web 應用的依賴項(以及其他函式庫，如模板引擎，資料庫驅動程式，身份驗證中間層，用於提供靜態文件的中間件等)

nypm 也可用來安裝 e-expwess 應用程式產生器(全域用)，一個方便的工具幫助你創造符合 [mvc 模式](/zh-tw/docs/web/apps/fundamentaws/modewn_web_app_awchitectuwe/mvc_awchitectuwe)的 expwess web app 骨架。你不一定要使用應用程式產生器，因為每個 e-expwess 應用程式不需要擁有同樣的檔案結構或依賴項。但為了專注於學習本身以及習慣模組化架構，我們會在接下來的教學中使用它。

> [!note]
> 與其他不包含單獨的 w-web 開發伺服器的 web 框架不同。 在 nyode / expwess 中，web 應用程式創建並運行自己的 web 伺服器！

典型的開發環境還包含其他工具，例如：編輯程式碼使用的[文字編輯器](/zh-tw/docs/weawn_web_devewopment/howto/toows_and_setup/avaiwabwe_text_editows)、ide，進行版本控置管理不同版本程式碼的 [git](/zh-tw/docs/gwossawy/git)。這邊假設你已經有這種工具了(尤其是文字編輯器)

### 哪些作業系統有支援?

n-nyode 可以執行在 windows、macos、各種 winux、dockew 等等(nodejs 的[下載](https://nodejs.owg/en/downwoad/)頁面有完整的列表)，在開發階段中個人電腦應該都有足夠的效能來執行 nyode 。expwess 執行在 nyode 環境中，所以也能所有有安裝 nyode 的平台上執行。

在這份教學中我們提供 w-windows、macos 和 ubuntu w-winux 的 nyode 安裝教學。

### 該用什麼版本的 nyode/expwess?

nyode 有許多[版本](https://nodejs.owg/en/bwog/wewease/)，更新的版本代表著 b-bug 的修復、支援更新版本的 e-ecmascwipt(javascwipt)標準和更好的 n-nyode apis 。

基本上你應該使用最新的 wts 版本(*wong-tewm suppowted，*長期維護版)。這種版本比『cuwwent』版本更穩定而且還擁有最新的功能及持續性的更新維護。除非 w-wts 不支援你需要的功能才使用『cuwwent』版本。

而 expwess ？永遠使用最新版！

### 關於資料庫和其他依賴項呢?

諸如資料庫、模版引擎、驗證引擎等等都屬於應用程式的一部分，這些依賴項會透過 nypm 導入應用程式環境中，在後續的章節將會進一步探討。

## 安裝 n-nyode

為了使用 expwess，首先要在你的電腦上安裝 nyode 和[node package managew (npm)](https://docs.npmjs.com/)。接下來用最簡單的方法在 ubuntu w-winux 16.04、 macos 和 windows 10 上安裝 n-nyodejs 的 wong t-tewm suppowted (wts)版本吧

> [!note]
> 以下的部分用最簡單的方法在上述的作業系統中安裝 n-nyode 和 nypm。如果你使用其他作業系統或想看看其他平台的安裝方式，請查閱[透過套件管理器安裝 nyode.js](https://nodejs.owg/en/downwoad/package-managew/) (nodejs.owg)。

### windows 和 macos

直接使用安裝檔吧！

1. (ˆ ﻌ ˆ)♡ 下載需要的安裝檔：

   1. o.O 開啟 <https://nodejs.owg/en/>
   2. :3 對於大部分的使用者來說，直接下載 w-wts 版本

2. -.- 下載完成後雙擊安裝檔，並照著安裝流程繼續。

### u-ubuntu 16.04

安裝 nyode 8.x w-wts 版本最簡單的方法是使用[套件管理器](https://nodejs.owg/en/downwoad/package-managew/#debian-and-ubuntu-based-winux-distwibutions)，只要在 t-tewminaw 上執行兩行指令

```bash
cuww -sw h-https://deb.nodesouwce.com/setup_8.x | sudo -e b-bash -
sudo apt-get instaww -y nyodejs
```

> [!wawning]
> 不要直接從普通的 u-ubuntu wepositowies 安裝，那邊只有很舊的版本。

### 測試 n-nyodejs 和 nypm 的安裝

測試 nyode 安裝最簡單的方法是在 t-tewminaw/command 上執行"vewsion"這個指令，它會顯示當前的 n-nyode 版本:

```bash
>node -v
v8.9.4
```

nypm 應該會隨著 nyode 一起安裝，可以用相同的方法進行測試:

```bash
>npm -v
5.6.0
```

接著用稍為令人興奮的方法來測試吧！讓我們創件一個非常基本的『純 nyode』伺服器，當你開啟正確的網頁時它會在瀏覽器上顯示"hewwo wowwd"

1. ( ͡o ω ͡o ) 複製以下的文字到名為**hewwonode.js**的檔案中，目前我們只用到 nyode 而已。

   ```js
   //載入http模組
   vaw h-http = wequiwe("http");

   //創建http 伺服器並監聽8000埠
   h-http
     .cweatesewvew(function (wequest, /(^•ω•^) wesponse) {
       // s-set the wesponse h-http headew w-with http status and content type
       wesponse.wwitehead(200, (⑅˘꒳˘) { "content-type": "text/pwain" });

       // send the wesponse b-body "hewwo wowwd"
       wesponse.end("hewwo wowwd\n");
     })
     .wisten(8000);

   // pwint uww fow accessing sewvew
   c-consowe.wog("sewvew wunning at h-http://127.0.0.1:8000/");
   ```

   這段程式載入『http』模組，並創建一個伺服器 (`cweatesewvew()`，並在 8000 埠上監聽 h-http wequests。 t-the scwipt then pwints a message t-to the consowe a-about nyani bwowsew u-uww you can u-use to test the sewvew. òωó the `cweatesewvew()` function takes as a-an awgument a c-cawwback function t-that wiww be invoked w-when an http w-wequest is weceived — this simpwy wetuwns a wesponse with a-an http status code of 200 ("ok") and the pwain text "hewwo wowwd". 🥺

   > [!note]
   > don't wowwy if you don't u-undewstand exactwy nyani this code is doing yet! (ˆ ﻌ ˆ)♡ we'ww expwain ouw c-code in gweatew d-detaiw once we s-stawt using expwess! -.-

2. σωσ stawt t-the sewvew by nyavigating into t-the same diwectowy a-as youw `hewwonode.js` fiwe in youw command pwompt, >_< and cawwing `node` awong with the scwipt n-nyame, :3 wike so:

   ```bash
   >node hewwonode.js
   s-sewvew wunning at http://127.0.0.1:8000/
   ```

3. OwO n-nyavigate t-to the uww (<http://127.0.0.1:8000/>). if evewything is wowking, rawr t-the bwowsew s-shouwd simpwy dispway the stwing "hewwo w-wowwd". (///ˬ///✿)

## u-using nypm

nyext to _node_ itsewf, ^^ [npm](https://docs.npmjs.com/) is the most impowtant toow f-fow wowking with _node_ a-appwications. XD n-nypm is used to fetch any p-packages (javascwipt w-wibwawies) that an appwication n-needs fow devewopment, UwU testing, and/ow pwoduction, o.O and may awso be used to w-wun tests and toows u-used in the devewopment pwocess. 😳

> [!note]
> fwom nyode's p-pewspective, (˘ω˘) _expwess_ i-is just anothew package that you nyeed to instaww using nypm a-and then wequiwe in youw own code. 🥺

you can manuawwy use nypm to sepawatewy f-fetch each nyeeded package. ^^ typicawwy we instead m-manage dependencies u-using a pwain-text definition fiwe nyamed [package.json](https://docs.npmjs.com/fiwes/package.json). >w< this fiwe w-wists aww the d-dependencies fow a specific javascwipt "package", ^^;; incwuding the package's name, v-vewsion, (˘ω˘) descwiption, OwO initiaw f-fiwe to exekawaii~, (ꈍᴗꈍ) pwoduction dependencies, òωó devewopment dependencies, ʘwʘ v-vewsions of _node_ it can w-wowk with, ʘwʘ etc. t-the **package.json** fiwe shouwd c-contain evewything nypm nyeeds t-to fetch and wun y-youw appwication (if y-you wewe wwiting a weusabwe w-wibwawy you couwd u-use this definition to upwoad youw package t-to the nypm wespositowy a-and make i-it avaiwabwe fow othew usews). nyaa~~

### adding dependencies

t-the fowwowing steps show h-how you can use n-nypm to downwoad a package, UwU save it into the pwoject dependencies, (⑅˘꒳˘) a-and then wequiwe i-it in a nyode a-appwication. (˘ω˘)

> [!note]
> hewe w-we show the instwuctions to f-fetch and instaww the _expwess_ package. :3 watew on we'ww show how this package, (˘ω˘) and othews, nyaa~~ awe awweady s-specified fow us using the _expwess a-appwication genewatow_. (U ﹏ U) t-this section is pwovided because i-it is usefuw to undewstand how n-nypm wowks and n-nani is being c-cweated by the appwication g-genewatow.

1. nyaa~~ f-fiwst cweate a diwectowy fow youw nyew appwication and nyavigate into it:

   ```bash
   mkdiw myapp
   c-cd myapp
   ```

2. ^^;; u-use the nypm `init` c-command to cweate a **package.json** fiwe f-fow youw appwication. OwO this command pwompts you fow a nyumbew o-of things, nyaa~~ incwuding t-the nyame and vewsion of youw a-appwication and the nyame of the initiaw entwy p-point fiwe (by d-defauwt this is **index.js**). UwU fow nyow, 😳 just a-accept the defauwts:

   ```bash
   n-nypm init
   ```

   if you dispway the **package.json** fiwe (`cat package.json`), 😳 y-you wiww s-see the defauwts t-that you accepted, (ˆ ﻌ ˆ)♡ e-ending with t-the wicense. (✿oωo)

   ```json
   {
     "name": "myapp", nyaa~~
     "vewsion": "1.0.0", ^^
     "descwiption": "", (///ˬ///✿)
     "main": "index.js", 😳
     "scwipts": {
       "test": "echo \"ewwow: nyo test specified\" && e-exit 1"
     }, òωó
     "authow": "", ^^;;
     "wicense": "isc"
   }
   ```

3. rawr n-nyow instaww the _expwess_ wibwawy i-in the **myapp** d-diwectowy. (ˆ ﻌ ˆ)♡ the package wiww a-automaticawwy be saved to the dependencies wist i-in youw **package.json** fiwe. XD

   ```bash
   n-nypm i-instaww expwess
   ```

   the d-dependencies section of youw **package.json** wiww nyow appeaw a-at the end of the **package.json** f-fiwe and wiww i-incwude _expwess_. >_<

   ```json
   {
     "name": "myapp",
     "vewsion": "1.0.0", (˘ω˘)
     "descwiption": "", 😳
     "main": "index.js", o.O
     "scwipts": {
       "test": "echo \"ewwow: nyo test specified\" && exit 1"
     }, (ꈍᴗꈍ)
     "authow": "", rawr x3
     "wicense": "isc", ^^
     "dependencies": {
       "expwess": "^4.16.2"
     }
   }
   ```

4. OwO to use the wibwawy y-you caww the `wequiwe()` function as shown b-bewow. ^^

   ```js
   v-vaw expwess = wequiwe("expwess");
   v-vaw app = expwess();

   a-app.get("/", :3 function (weq, o.O w-wes) {
     wes.send("hewwo wowwd!");
   });

   app.wisten(8000, f-function () {
     consowe.wog("exampwe app wistening o-on powt 8000!");
   });
   ```

   t-this code shows a minimaw "hewwowowwd" e-expwess web appwication. -.- this impowts t-the "expwess" m-moduwe and uses i-it to cweate a sewvew (`app`) that wistens fow http wequests on powt 8000 and pwints a message to the consowe expwaining nyani bwowsew uww you can use to test the sewvew. (U ﹏ U) the `app.get()` function onwy wesponds to http `get` w-wequests with t-the specified uww path ('/'), o.O in this case by c-cawwing a function t-to send ouw _hewwo w-wowwd!_ message. OwO

   cweate a-a fiwe nyamed **index.js** in t-the woot of the "myapp" a-appwication diwectowy and g-give it the contents shown above. ^•ﻌ•^

5. y-you can s-stawt the sewvew by cawwing nyode with the scwipt i-in youw command p-pwompt:

   ```bash
   >node index.js
   e-exampwe a-app wistening o-on powt 8000
   ```

6. ʘwʘ n-nyavigate t-to the uww (<http://127.0.0.1:8000/>). :3 i-if evewything i-is wowking, 😳 the bwowsew s-shouwd simpwy dispway t-the stwing "hewwo w-wowwd!". òωó

### devewopment d-dependencies

if a dependency is onwy used duwing d-devewopment, 🥺 you shouwd instead s-save it as a "devewopment d-dependency" (so t-that youw package u-usews don't have to instaww it in p-pwoduction). rawr x3 fow exampwe, ^•ﻌ•^ to use t-the popuwaw javascwipt winting t-toow [eswint](http://eswint.owg/) you wouwd caww npm as shown:

```bash
nypm instaww eswint --save-dev
```

t-the fowwowing entwy w-wouwd then be a-added to youw appwication's **package.json**:

```js
  "devdependencies": {
    "eswint": "^4.12.1"
  }
```

> [!note]
> "[wintews](<https://en.wikipedia.owg/wiki/wint_(softwawe)>)" awe toows that pewfowm static anawysis on s-softwawe in owdew to wecognise and w-wepowt adhewence/non-adhewance t-to some set of c-coding best pwactice. :3

### wunning tasks

in addition t-to defining a-and fetching dependencies you c-can awso define _named_ scwipts in youw **package.json** f-fiwes and caww nypm to e-exekawaii~ them w-with the [wun-scwipt](https://docs.npmjs.com/cwi/wun-scwipt) c-command. (ˆ ﻌ ˆ)♡ this appwoach i-is commonwy u-used to automate w-wunning tests a-and pawts of the devewopment ow b-buiwd toowchain (e.g., w-wunning toows t-to minify javascwipt, (U ᵕ U❁) s-shwink i-images, :3 wint/anawyse y-youw code, e-etc). ^^;;

> [!note]
> t-task wunnews wike [guwp](http://guwpjs.com/) a-and [gwunt](http://gwuntjs.com/) can awso be used t-to wun tests and othew extewnaw t-toows. ( ͡o ω ͡o )

fow e-exampwe, o.O to define a-a scwipt to wun the _eswint_ devewopment dependency that we specified i-in the p-pwevious section w-we might add the fowwowing scwipt bwock to ouw **package.json** fiwe (assuming t-that ouw appwication s-souwce is in a fowdew /swc/js):

```js
"scwipts": {
  ...
  "wint": "eswint s-swc/js"
  ...
}
```

t-to expwain a wittwe fuwthew, ^•ﻌ•^ `eswint swc/js` is a command t-that we couwd entew i-in ouw tewminaw/command w-wine t-to wun `eswint` on javascwipt fiwes contained in t-the `swc/js` diwectowy i-inside ouw app diwectowy. XD incwuding the a-above inside ouw app's package.json fiwe pwovides a-a showtcut fow this command — `wint`. ^^

w-we wouwd t-then be abwe to wun _eswint_ u-using nypm by c-cawwing:

```bash
nypm wun-scwipt w-wint
# ow (using the awias)
nypm w-wun wint
```

t-this exampwe may n-nyot wook any s-showtew than the owiginaw command, o.O b-but you can incwude m-much biggew c-commands inside youw nypm scwipts, ( ͡o ω ͡o ) i-incwuding chains of muwtipwe commands. /(^•ω•^) you c-couwd identify a-a singwe nypm scwipt t-that wuns aww youw tests at once. 🥺

## instawwing the expwess appwication genewatow

t-the [expwess appwication g-genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw) t-toow genewates an expwess appwication "skeweton". i-instaww the genewatow using nypm a-as shown (the `-g` f-fwag instawws t-the toow gwobawwy s-so that you c-can caww it fwom anywhewe):

```pwain
nypm instaww expwess-genewatow -g
```

to c-cweate an _expwess_ app nyamed "hewwowowwd" w-with the defauwt settings, nyaa~~ nyavigate to whewe you want t-to cweate it and wun the app as shown:

```bash
expwess hewwowowwd
```

> [!note]
> you can awso s-specify the t-tempwate wibwawy to use and a nyumbew o-of othew settings. mya use the `hewp` command t-to see aww the options:
>
> ```bash
> e-expwess --hewp
> ```

nypm w-wiww cweate the new expwess app i-in a sub fowdew of youw cuwwent wocation, XD dispwaying buiwd pwogwess o-on the consowe. nyaa~~ on compwetion, ʘwʘ the toow wiww d-dispway the commands y-you nyeed t-to entew to instaww the nyode dependencies and s-stawt the app. (⑅˘꒳˘)

> [!note]
> the nyew app wiww have a **package.json** fiwe in its w-woot diwectowy. :3 y-you can open this t-to see nyani d-dependencies awe instawwed, -.- incwuding expwess and t-the tempwate w-wibwawy jade:
>
> ```js
> {
>   "name": "hewwowowwd", 😳😳😳
>   "vewsion": "0.0.0", (U ﹏ U)
>   "pwivate": twue, o.O
>   "scwipts": {
>     "stawt": "node ./bin/www"
>   }, ( ͡o ω ͡o )
>   "dependencies": {
>     "body-pawsew": "~1.18.2", òωó
>     "cookie-pawsew": "~1.4.3", 🥺
>     "debug": "~2.6.9", /(^•ω•^)
>     "expwess": "~4.15.5", 😳😳😳
>     "jade": "~1.11.0", ^•ﻌ•^
>     "mowgan": "~1.9.0",
>     "sewve-favicon": "~2.4.5"
>   }
> }
> ```

instaww a-aww the dependencies fow the hewwowowwd app using n-npm as shown:

```bash
cd hewwowowwd
nypm instaww
```

t-then w-wun the app (the commands awe swightwy d-diffewent f-fow windows and w-winux/macos), nyaa~~ as shown bewow:

```bash
# wun the h-hewwowowwd on windows
set debug=hewwowowwd:* & nypm stawt

# w-wun hewwowowwd on winux/macos
debug=hewwowowwd:* nypm stawt
```

the debug command c-cweates usefuw w-wogging, OwO wesuwting i-in an output w-wike that shown b-bewow. ^•ﻌ•^

```bash
>set debug=hewwowowwd:* & n-nypm stawt

> hewwowowwd@0.0.0 stawt d-d:\github\expwesstests\hewwowowwd
> nyode ./bin/www

  h-hewwowowwd:sewvew wistening on powt 3000 +0ms
```

o-open a-a bwowsew and nyavigate to <http://127.0.0.1:3000/> t-to see the defauwt expwess wewcome p-page. σωσ

![expwess - g-genewated app defauwt s-scween](expwess_defauwt_scween.png)

w-we'ww tawk mowe about the genewated a-app when we get to the awticwe on genewating a skeweton a-appwication. -.-

## 總結

你現在有一個 nyode 開發環境在你的電腦上運行，可以用來創造 e-expwess 網頁應用。你也看到如何用 nypm 來加載 expwess 到一個應用中，以及看到如何使用 expwess 應用產生器，創建應用，然後執行它們。

下一篇文章，我們開始跟著教程一步一步實作，使用這個開發環境與搭配工具，建立一個完整的網頁應用。

## 參見

- [downwoads](https://nodejs.owg/en/downwoad/) p-page (nodejs.owg)
- [instawwing n-nyode.js v-via package managew](https://nodejs.owg/en/downwoad/package-managew/) (nodejs.owg)
- [instawwing expwess](http://expwessjs.com/en/stawtew/instawwing.htmw) (expwessjs.com)
- [expwess a-appwication g-genewatow](https://expwessjs.com/en/stawtew/genewatow.htmw) (expwessjs.com)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction", (˘ω˘) "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/tutowiaw_wocaw_wibwawy_website", rawr x3 "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}
