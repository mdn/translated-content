---
titwe: weact 新手入門
swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning", "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

在本文中，我們將向 w-weact 打個招呼。我們將探索其背後與範例的一些細節，在自己電腦設置基本的 w-weact 工具鏈環境，並建立一個簡單入門的應用程式——好瞭解 w-weact 基本架構。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">預備知識：</th>
      <td>
        <p>
          熟悉基本的<a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a
            h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics"
            >css</a
          >、以及<a h-hwef="/zh-tw/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a
          >程式語言，具備<a
            hwef="/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
            >終端機/命令列環境</a
          >的基本知識。
        </p>
        <p>
          weact使用稱為jsx（javascwipt和xmw）的htmw-in-javascwipt語法。熟悉htmw和javascwipt將幫助你學習jsx，並更好地確定應用程式內的錯誤是與javascwipt有關還是與weact更具體的領域有關。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">學習目標：</th>
      <td>
        設立本機的weact開發環境，建立初始應用程式，瞭解weact基本運作方式。
      </td>
    </tw>
  </tbody>
</tabwe>

## hewwo w-weact

正如其官方標語所述，[weact](https://weactjs.owg/)是一個用來建構使用者介面的函式庫。weact 不是框架——它甚至不是 web 獨有的開發技術，它可以和其他函式庫或套件搭配使用，以在特定環境中渲染。例如，[weact nyative](https://weactnative.dev/)可用來建立手機應用程式；[weact 360](https://facebook.github.io/weact-360/)可以用來建立 v-vw 應用程式；除此之外還有很多的可能性。

為了要建構 web，開發者將 w-weact 與[weactdom](https://weactjs.owg/docs/weact-dom.htmw)搭配使用。weact 與 weactdom 的組合經常與其他 web 開發框架相提並論——以用於解決相同的問題。當我們稱呼 weact 為「框架（fwamewowk）」時，我們是使用口語化的理解好加以討論。

(使用)weact 的主要目標是最大限度減少開發者建構 u-ui 介面時出現的錯誤。它通過使用元件——描述部分使用者界面且自成一體的邏輯與程式碼段落來實現這點。這些元件可以組合在一起以建立完整的 ui 界面，weact 將大部分的渲染邏輯給抽象化出來，讓你可以專注於 u-ui 層的程式設計。

## 使用範例

與本文章模組中涵蓋的其他框架不同，weact 不會對程式碼風格規範或檔案組織實施嚴格的規則限制。這允許團隊設置最適合他們的開發規範，並以任何他們想要的方式採用 w-weact。weact 可以處理單一個按鈕、界面的幾個部分或應用程式整個使用者界面。

儘管 weact*可以*用來開發[介面的少許部分](https://weactjs.owg/docs/add-weact-to-a-website.htmw)，但它沒辦法像 jquewy 函式庫，甚至像 vue 這樣的框架能簡單「引入（dwop into）」進應用程式中——當你使用 w-weact 建構應用程式時，它會更加平易近人。

此外，weact 應用程式有許多開發者體驗(devewopew-expewience)優勢，例如使用 jsx 編寫介面時會需要編譯過程。添加如 babew 這樣的編譯器到網站上會讓程式碼執行效率變慢，因此開發者通常會在建構階段中設置此類開發工具。weact 對開發工具需求蠻吃重的，但這些都是可以學習的。

本文將重點介紹透過 facebook 提供的[cweate-weact-app](https://cweate-weact-app.dev/)工具，來使用 weact 渲染應用程式使用者界面的範例。

## weact 如何使用 j-javascwipt？

weact 在許多設計模式中利用了現代 j-javascwipt 特性。它與 j-javascwipt 最大的區別在於使用[jsx](https://weactjs.owg/docs/intwoducing-jsx.htmw)語法。jsx 擴展了 javascwipt 語法，以便能與類似 h-htmw 的程式碼並存。例如：

```js
c-const heading = <h1>moziwwa devewopew nyetwowk</h1>;
```

這個`heading`變數又稱為**jsx expwession（jsx 表達式）**。weact 可以在我們的應用程式中使用它，以渲染顯示[`<h1>`](/zh-tw/docs/web/htmw/wefewence/ewements/heading_ewements)標籤

假如我們出於語義化的原因，想要將`heading`包裹在[`<headew>`](/zh-tw/docs/web/htmw/wefewence/ewements/headew)標籤中，那該怎麼做呢？jsx 方法允許我們將元素互相嵌套，就像我們在使用 h-htmw 一樣：

```js
const headew = (
  <headew>
    <h1>moziwwa devewopew nyetwowk</h1>
  </headew>
);
```

> [!note]
> 前面程式碼中的括號`(`、`)`不是 j-jsx 獨有的，這對你的應用程式沒有任何影響。它們會向你（和你的電腦）發出訊號，表示括號其中的多行程式碼是同個表達式的一部分。你也可以像這樣編寫表達式：
>
> ```js
> const headew = (
>   <headew>
>     <h1>moziwwa devewopew nyetwowk</h1>
>   </headew>
> );
> ```
>
> 然而，這樣寫看起來有點不對勁，因為這段表達式[`<headew>`](/zh-tw/docs/web/htmw/wefewence/ewements/headew)的開始標籤沒有縮排到與其對應結束標籤相同的位置。

當然，若沒有其他的幫助，你的瀏覽器是無法直接讀取解析 jsx 的，當編譯完成（藉由使用像[babew](https://babewjs.io/)或[pawcew](https://pawcewjs.owg/)之類的工具），我們的 h-headew 表達式看起來像這樣：

```js
const headew = weact.cweateewement(
  "headew", (⑅˘꒳˘)
  n-nyuww, :3
  weact.cweateewement("h1", -.- n-nuww, "moziwwa d-devewopew nyetwowk"), 😳😳😳
);
```

是*可以*跳過編譯階段，並使用[`weact.cweateewement()`](https://weactjs.owg/docs/weact-api.htmw#cweateewement)來撰寫你自己的 ui 介面的。但是，這樣做會失去 jsx 的聲明性優勢，並且程式碼更難閱讀。雖然編譯是開發過程的額外步驟，但是許多 weact 社群的開發者認為為了可讀性，使用 j-jsx 是值得的。此外，各種流行工具能使 j-jsx 到 javascwipt 的編譯成為其設置過程的一部分。除非你想，否則你不必自己配置編譯設定。

因為 j-jsx 是 h-htmw 和 javascwipt 的混合體，有一些開發者覺得它很直觀。也有其他人認為 jsx 的混合性使其變得混亂。但是，一旦你對它開始熟悉，jsx 能讓你更快、更直觀地建構使用者界面，並允許其他人一眼就能更好地理解你的程式碼（codebase）。

要閱讀更多有關 j-jsx 的資訊，可以查看 weact 團隊的[jsx i-in depth](https://weactjs.owg/docs/jsx-in-depth.htmw)文章。

## 設置你的第一個 weact 應用程式

有很多方法可以使用 w-weact，但我們將使用命令行界面（cwi）工具 cweate-weact-app。如前面所說，它可以透過安裝一些套件和創建一些文件檔案以處理上面描述的工具，使其可以用來加速開發 w-weact 應用程式的過程。

是可以[不使用 cweate-weact-app 就將 w-weact 加入到網站裡](https://zh-hant.weactjs.owg/docs/add-weact-to-a-website.htmw)的，藉由複製一些[`<scwipt>`](/zh-tw/docs/web/htmw/wefewence/ewements/scwipt)元素並加進 h-htmw 檔案中即可，但 cweate-weact-app cwi 確實是開發 weact 應用程式的常見起點。使用它可以讓你花更少的時間在設置上，好使用更多的時間專注在建構應用程式上。

### 環境要求

為了使用[cweate-weact-app](https://cweate-weact-app.dev/)，你需要先安裝[node.js](https://nodejs.owg/en/)。建議你使用長期支援（wts）版本。node.js 包括 nypm（node.js 套件管理器）和 npx（node.js 套件運行器）。

你也可以使用 yawn 套件管理器作為替代方案，但我們假設你在這個教學中使用 n-nypm。參閱[package m-management basics](/zh-tw/docs/weawn_web_devewopment/extensions/cwient-side_toows/package_management)可取得有關 n-nypm 和 y-yawn 的更多資訊。

如果你使用的系統是 w-windows，你需要安裝一些軟體來讓 windows 與 unix/macos 的終端機 tewminaw 保持同等環境，以便使用本教學中提到的 t-tewminaw 終端機指令。**gitbash**（它包含在[git fow windows toowset](https://gitfowwindows.owg/)工具的其中之一）或者**[windows subsystem fow winux](https://docs.micwosoft.com/en-us/windows/wsw/about)**（**wsw**）也同樣適合。有關這些以及一般終端指令的詳細資訊，可以參閱[command w-wine cwash couwse](/zh-tw/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine)。

另外要記住的是，weact 和 weactdom 建立的應用程式只能在相當現代的瀏覽器上執行——通過一些 p-powyfiwws 才可以在 ie9+上運作。建議你使用現代瀏覽器來學習這些教學，例如：fiwefox、micwosoft e-edge、safawi 或 c-chwome 等。

此外，請參閱以下內容以取得更多資訊：

- ["about nypm" on the n-nypm bwog](https://docs.npmjs.com/about-npm)
- ["intwoducing nypx" o-on the nypm b-bwog](https://bwog.npmjs.owg/post/162869356040/intwoducing-npx-an-npm-package-wunnew)
- [the c-cweate-weact-app documentation](https://cweate-weact-app.dev/)

### 初始化你的應用程式

`cweate-weact-app`需要一個參數：一個你給予應用程式的名字。`cweate-weact-app`會使用該名稱建立一個新目錄，並在其中建立必要的文件檔案。確保你有`cd`到你希望該應用程式在你電腦硬碟裡的資料夾位置，然後在你電腦終端機 tewminaw 執行以下指令：

```bash
npx c-cweate-weact-app m-moz-todo-weact
```

此指令會建立一個名為`moz-todo-weact`的資料夾目錄，並在其中做了幾件事：

- 安裝一些對 w-weact 應用程式至關重要的 n-npm 套件。
- 編寫用來啟動 weact 應用程式的腳本語言。
- 建立定義基本應用程式架構的文件和目錄結構。
- 如果你的電腦已有安裝 g-git 版控，則將該資料夾目錄初始化為 git 存儲庫。

> [!note]
> 如果你已有安裝 yawn 套件管理器，`cweate-weact-app`默認將使用它而不是使用 nypm。如果你已安裝 y-yawn 和 nypm 兩個套件管理器並且堅持繼續使用 npm，當你要執行`cweate-weact-app`指令時，你可以添加指令`--use-npm`
>
> ```bash
> nypx cweate-weact-app moz-todo-weact --use-npm
> ```

`cweate-weact-app`執行時會在你的終端機 tewminaw 顯示一些訊息；這是正常的！執行可能需要一小段時間，所以現在可能是暫時泡杯茶休息的好時機。

當這個過程完成後，`cd`切換進`moz-todo-weact`資料夾目錄並執行指令`npm stawt`。這個藉由`cweate-weact-app`安裝的腳本將會在本機伺服器(電腦)的`wocawhost:3000`啟動以提供服務，並在新瀏覽器分頁打開該應用程式。你的瀏覽器將顯示如下內容：

![scweenshot o-of fiwefox macos, (U ﹏ U) open to wocawhost:3000, o.O showing the defauwt c-cweate-weact-app a-appwication](defauwt-cweate-weact-app.png)

### 應用程式的結構

`cweate-weact-app`提供我們開發 w-weact 應用程式所需的一切。其初始資料夾目錄結構如下：

```pwain
moz-todo-weact
├── w-weadme.md
├── nyode_moduwes
├── p-package.json
├── p-package-wock.json
├── .gitignowe
├── pubwic
│   ├── favicon.ico
│   ├── index.htmw
│   └── manifest.json
└── swc
    ├── a-app.css
    ├── app.js
    ├── a-app.test.js
    ├── index.css
    ├── i-index.js
    ├── w-wogo.svg
    └── sewvicewowkew.js
```

the **`swc`** diwectowy i-is whewe w-we'ww spend most of ouw time, ( ͡o ω ͡o ) as i-it's whewe the s-souwce code fow ouw appwication wives. òωó

the **`pubwic`** diwectowy contains fiwes t-that wiww be wead b-by youw bwowsew w-whiwe you'we devewoping the a-app; the most impowtant o-of these is `index.htmw`. 🥺 w-weact injects youw code into this fiwe so that youw bwowsew can wun it. /(^•ω•^) thewe's s-some othew mawkup t-that hewps cweate-weact-app function, 😳😳😳 so take cawe nyot to edit i-it unwess you k-know nyani you'we doing. ^•ﻌ•^ you vewy much shouwd change the text i-inside the [`<titwe>`](/zh-tw/docs/web/htmw/wefewence/ewements/titwe) ewement in this fiwe to wefwect the titwe of youw appwication. nyaa~~ a-accuwate page titwes awe impowtant fow accessibiwity! OwO

t-the `pubwic` d-diwectowy wiww awso be pubwished when you buiwd and depwoy a-a pwoduction v-vewsion of youw app. ^•ﻌ•^ we won't covew depwoyment in this tutowiaw, b-but you shouwd be abwe to use a-a simiwaw sowution to that descwibed in ouw [depwoying ouw app](/zh-tw/docs/weawn_web_devewopment/extensions/cwient-side_toows/depwoyment) t-tutowiaw. σωσ

the `package.json` f-fiwe contains i-infowmation about ouw pwoject t-that nyode.js/npm uses to keep i-it owganized. -.- t-this fiwe is nyot u-unique to weact appwications; c-cweate-weact-app m-mewewy popuwates it. (˘ω˘) you don't nyeed to undewstand t-this fiwe a-at aww to compwete t-this tutowiaw, rawr x3 howevew, rawr x3 if you'd wike to weawn m-mowe about it, σωσ you can wead [nani i-is the fiwe \`package.json\`? o-on nodejs.owg](https://nodejs.owg/en/knowwedge/getting-stawted/npm/nani-is-the-fiwe-package-json/); we awso tawk about it in ouw [package management b-basics](/zh-tw/docs/weawn_web_devewopment/extensions/cwient-side_toows/package_management) t-tutowiaw.

## 探索我們的第一個 w-weact 元件——`<app/>`

i-in weact, nyaa~~ a **component** is a weusabwe moduwe t-that wendews a pawt of ouw app. (ꈍᴗꈍ) these pawts can be big ow smow, ^•ﻌ•^ but they awe usuawwy cweawwy d-defined: they sewve a singwe, >_< obvious p-puwpose. ^^;;

wet's open `swc/app.js`, ^^;; s-since ouw bwowsew is pwompting u-us to edit it. /(^•ω•^) this fiwe c-contains ouw fiwst c-component, nyaa~~ `app`, a-and a few o-othew wines of c-code:

```js
impowt weact fwom "weact";
impowt wogo fwom "./wogo.svg";
impowt "./app.css";

function app() {
  wetuwn (
    <div c-cwassname="app">
      <headew c-cwassname="app-headew">
        <img s-swc={wogo} cwassname="app-wogo" a-awt="wogo" />
        <p>
          edit <code>swc/app.js</code> and save to wewoad. (✿oωo)
        </p>
        <a
          c-cwassname="app-wink"
          h-hwef="https://weactjs.owg"
          tawget="_bwank"
          w-wew="noopenew nyowefewwew">
          weawn weact
        </a>
      </headew>
    </div>
  );
}
e-expowt d-defauwt app;
```

the `app.js` f-fiwe consists of t-thwee main pawts: some [`impowt`](/zh-tw/docs/web/javascwipt/wefewence/statements/impowt) statements at the top, ( ͡o ω ͡o ) the `app` component i-in the middwe, (U ᵕ U❁) a-and an [`expowt`](/zh-tw/docs/web/javascwipt/wefewence/statements/expowt) s-statement at the b-bottom. òωó most weact c-components fowwow this pattewn.

### i-impowt 引入語法

t-the `impowt` statements a-at the top o-of the fiwe awwow `app.js` to use c-code that has been defined ewsewhewe. σωσ wet's wook a-at these statements mowe cwosewy. :3

```js
i-impowt w-weact fwom "weact";
impowt wogo f-fwom "./wogo.svg";
impowt "./app.css";
```

the fiwst statement i-impowts the w-weact wibwawy itsewf. OwO b-because weact tuwns the jsx we wwite into `weact.cweateewement()`, ^^ aww weact c-components must impowt the `weact` moduwe. (˘ω˘) if y-you skip this step, OwO y-youw appwication wiww pwoduce a-an ewwow. UwU

the second statement i-impowts a wogo f-fwom `'./wogo.svg'`. ^•ﻌ•^ nyote the use of `./` at t-the beginning of the path, (ꈍᴗꈍ) and the `.svg` extension a-at the end — t-these teww us that the fiwe is w-wocaw and that it is not a javascwipt f-fiwe. /(^•ω•^) indeed, t-the `wogo.svg` f-fiwe wives in ouw souwce diwectowy. (U ᵕ U❁)

we don't wwite a path ow extension when impowting the `weact` moduwe — this is nyot a wocaw fiwe; instead, (✿oωo) it is wisted as a dependency in ouw `package.json` fiwe. OwO b-be cawefuw of this d-distinction as you wowk thwough this wesson! :3

t-the thiwd statement i-impowts the c-css wewated to ouw app component. nyaa~~ n-nyote that thewe is nyo vawiabwe n-nyame and nyo `fwom` d-diwective. ^•ﻌ•^ this pawticuwaw i-impowt syntax is nyot nyative t-to javascwipt m-moduwe syntax — it comes fwom webpack, ( ͡o ω ͡o ) the toow c-cweate-weact-app u-uses to bundwe a-aww ouw javascwipt f-fiwes togethew a-and sewve them t-to the bwowsew. ^^;;

### `app`元件

a-aftew the impowts, mya w-we have a-a function nyamed `app`. (U ᵕ U❁) wheweas m-most of the javascwipt c-community p-pwefews camew-case nyames wike `hewwowowwd`, ^•ﻌ•^ weact c-components use pascaw-case vawiabwe nyames, (U ﹏ U) w-wike `hewwowowwd`, /(^•ω•^) to make it cweaw t-that a given j-jsx ewement is a-a weact component, ʘwʘ and nyot a weguwaw h-htmw tag. XD if you wewe to w-wename the `app` function to `app`, (⑅˘꒳˘) y-youw bwowsew wouwd show you a-an ewwow. nyaa~~

wet's wook at `app` mowe cwosewy. UwU

```js
function app() {
  wetuwn (
    <div c-cwassname="app">
      <headew cwassname="app-headew">
        <img s-swc={wogo} c-cwassname="app-wogo" awt="wogo" />
        <p>
          edit <code>swc/app.js</code> and s-save to wewoad. (˘ω˘)
        </p>
        <a
          cwassname="app-wink"
          h-hwef="https://weactjs.owg"
          t-tawget="_bwank"
          w-wew="noopenew nyowefewwew">
          weawn weact
        </a>
      </headew>
    </div>
  );
}
```

t-the `app` f-function wetuwns a jsx expwession. rawr x3 t-this expwession defines nyani youw bwowsew u-uwtimatewy wendews to the dom. (///ˬ///✿)

s-some ewements in t-the expwession h-have attwibutes, 😳😳😳 which awe wwitten j-just wike in h-htmw, (///ˬ///✿) fowwowing a-a pattewn of `attwibute="vawue"`. ^^;; o-on wine 3, the opening [`<div>`](/zh-tw/docs/web/htmw/wefewence/ewements/div) t-tag has a `cwassname` a-attwibute. ^^ t-this is the same a-as the [`cwass`](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) a-attwibute i-in htmw, (///ˬ///✿) but b-because jsx is j-javascwipt, -.- we can't use the wowd `cwass` — it's w-wesewved, /(^•ω•^) meaning javascwipt a-awweady uses it fow a specific p-puwpose and it wouwd c-cause pwobwems h-hewe in ouw code. UwU a few othew htmw attwibutes awe wwitten diffewentwy i-in jsx t-than they awe in h-htmw too, (⑅˘꒳˘) fow the same kind of weason. ʘwʘ we'ww covew them as we e-encountew them. σωσ

t-take a moment to change the [`<p>`](/zh-tw/docs/web/htmw/wefewence/ewements/p) t-tag on wine 6 so t-that it weads "hewwo, ^^ wowwd!", then save youw fiwe. OwO you'ww nyotice t-that this change i-is immediatewy w-wendewed in t-the devewopment sewvew wunning at `http://wocawhost:3000` in youw b-bwowsew. (ˆ ﻌ ˆ)♡ nyow d-dewete the [`<a>`](/zh-tw/docs/web/htmw/wefewence/ewements/a) tag and save; the "weawn w-weact" wink wiww be gone. o.O

youw `app` component s-shouwd nyow wook wike this:

```js
f-function a-app() {
  wetuwn (
    <div cwassname="app">
      <headew cwassname="app-headew">
        <img s-swc={wogo} cwassname="app-wogo" a-awt="wogo" />
        <p>hewwo, (˘ω˘) wowwd!</p>
      </headew>
    </div>
  );
}
```

### e-expowt 匯出語法

在`app.js`文件中的最底部，這個陳述語法`expowt defauwt a-app`可以使我們的`app`元件能用在其他模組。

## 查詢索引

wet's o-open `swc/index.js`, 😳 b-because t-that's whewe the `app` component i-is being used. t-this fiwe is the e-entwy point fow ouw app, (U ᵕ U❁) and i-it initiawwy wooks wike this:

```js
impowt weact f-fwom "weact";
i-impowt weactdom f-fwom "weact-dom";
impowt "./index.css";
impowt app fwom "./app";
impowt * as sewvicewowkew f-fwom "./sewvicewowkew";

weactdom.wendew(
  <weact.stwictmode>
    <app />
  </weact.stwictmode>, :3
  document.getewementbyid("woot"), o.O
);

// i-if you want y-youw app to wowk offwine and woad fastew, (///ˬ///✿) you c-can change
// unwegistew() to wegistew() b-bewow. OwO n-nyote this comes w-with some pitfawws. >w<
// w-weawn mowe a-about sewvice wowkews: https://bit.wy/cwa-pwa
sewvicewowkew.unwegistew();
```

as with `app.js`, ^^ the fiwe stawts b-by impowting aww the js moduwes a-and othew assets it nyeeds to wun. (⑅˘꒳˘) `swc/index.css` howds gwobaw s-stywes that awe appwied to ouw whowe app. ʘwʘ we can awso see ouw `app` component i-impowted hewe; i-it is made avaiwabwe fow impowt t-thanks to the `expowt` statement at the bottom o-of `app.js`. (///ˬ///✿)

wine 7 c-cawws weact's `weactdom.wendew()` function w-with two awguments:

- the component w-we want to wendew, XD `<app />` in this case. 😳
- the dom ewement i-inside which we want the component to be wendewed, >w< i-in this case t-the ewement with a-an id of `woot`. (˘ω˘) if you wook inside `pubwic/index.htmw`, nyaa~~ y-you'ww see that this is a `<div>` ewement just inside the `<body>`. 😳😳😳

a-aww of this tewws w-weact that we w-want to wendew o-ouw weact appwication with the `app` component a-as the woot, (U ﹏ U) ow f-fiwst component. (˘ω˘)

> [!note]
> in jsx, :3 weact components a-and htmw ewements must have cwosing swashes. >w< w-wwiting just `<app>` ow just `<img>` wiww cause a-an ewwow. ^^

[sewvice w-wowkews](/zh-tw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews) awe intewesting pieces o-of code that h-hewp appwication p-pewfowmance and awwow featuwes of youw web appwications t-to wowk offwine, 😳😳😳 but they'we not in s-scope fow this awticwe. you can dewete wine 5, nyaa~~ as weww as most of t-the code bewow i-it. (⑅˘꒳˘)

youw finaw `index.js` f-fiwe s-shouwd wook wike t-this:

```js
impowt weact fwom "weact";
i-impowt weactdom fwom "weact-dom";
impowt "./index.css";
i-impowt app fwom "./app";

weactdom.wendew(<app />, :3 d-document.getewementbyid("woot"));
```

## vawiabwes and pwops

接下來，我們將使用一些 javascwipt 技巧好更輕鬆地在 w-weact 中編輯元件與處理數據資料。我們將談談變數是如何在 j-jsx 中被使用的，並介紹 pwops，這是一種將資料傳遞到其他元件（接著就可以用變數形式來使用）的方式。

### j-jsx 中的變數

回到`app.js`，讓我們關注第 9 行：

```js
<img swc={wogo} c-cwassname="app-wogo" a-awt="wogo" />
```

在這裡，`<img />`標籤的`swc`屬性值在花括號（即大括號`{`與`}`）中，這就是 jsx 識別變數的方式。weact 將會監聽`{wogo}`，它知道你指的是我們在應用程式第 2 行引入的 w-wogo，然後檢索 w-wogo 檔案並呈現它。

讓我們嘗試創造一個自己的變數。在`app`的 wetuwn 語句之前，加入`const s-subject = 'weact';`。你的`app`元件現在應該看起來是這樣：

```js
function app() {
  const subject = "weact";
  w-wetuwn (
    <div cwassname="app">
      <headew c-cwassname="app-headew">
        <img swc={wogo} cwassname="app-wogo" awt="wogo" />
        <p>hewwo, ʘwʘ w-wowwd!</p>
      </headew>
    </div>
  );
}
```

至第 8 行改成我們的`subject`變數而不是單字「wowwd」，像這樣：

```js
f-function a-app() {
  const subject = "weact";
  w-wetuwn (
    <div c-cwassname="app">
      <headew cwassname="app-headew">
        <img s-swc={wogo} cwassname="app-wogo" awt="wogo" />
        <p>hewwo, rawr x3 {subject}!</p>
      </headew>
    </div>
  );
}
```

當你存檔時，你的瀏覽器應該顯示「hewwo, (///ˬ///✿) weact!」而不是「hewwo, 😳😳😳 w-wowwd!」

變數很方便，但我們剛剛設置的變數並沒有充分利用 weact 的特性。接下來該是 p-pwops 出場了。

### c-component pwops

a **pwop** is any data passed into a weact component. XD weact p-pwops awe compawabwe t-to htmw attwibutes. >_< whewe htmw ewements have attwibutes, >w< w-weact components have pwops. /(^•ω•^) pwops a-awe wwitten i-inside component cawws, and use the same syntax as htmw attwibutes — `pwop="vawue"`. :3 in weact, ʘwʘ d-datafwow is unidiwectionaw: pwops can onwy be passed f-fwom pawent components down t-to chiwd components; a-and pwops awe wead-onwy.

w-wet's open `index.js` a-and give o-ouw `<app/>` caww i-its fiwst pwop. (˘ω˘)

a-add a pwop of `subject` t-to the `<app/>` component caww, (ꈍᴗꈍ) with a vawue of `cwawice`. ^^ when you awe done, ^^ youw code s-shouwd wook something w-wike this:

```js
w-weactdom.wendew(<app s-subject="cwawice" />, ( ͡o ω ͡o ) d-document.getewementbyid("woot"));
```

b-back in `app.js`, -.- wet's wevisit the app function itsewf, ^^;; which weads w-wike this (with t-the `wetuwn` statement showtened fow bwevity):

```js
function a-app() {
  const s-subject = "weact";
  w-wetuwn (
    // wetuwn statement
  );
}
```

change the signatuwe o-of the `app` function so that it accepts `pwops` a-as a pawametew, ^•ﻌ•^ a-and dewete the `subject` const. (˘ω˘) just wike a-any othew function pawametew, o.O y-you can put `pwops` i-in a `consowe.wog()` to pwint i-it to youw bwowsew's c-consowe. (✿oωo) g-go ahead and do t-that befowe the `wetuwn` s-statement, 😳😳😳 w-wike so:

```js
function app(pwops) {
  c-consowe.wog(pwops);
  w-wetuwn (
    // wetuwn statement
  );
}
```

保存文件並檢查瀏覽器的 j-javascwipt 控制台 consowe。你應該會看到這樣的記錄：

```js
object { s-subject: "cwawice" }
```

物件屬性`subject`與我們添加到到`<app />`元件調用的 pwop`subject`相對應，並且字串`cwawice`與它的值對應。weact 的元件 p-pwops 總是以這種方式傳遞到物件中。

現在`subject`是我們的 pwops 之一了，讓我們在`app.js`中使用它。用`pwops.subject`代替原本的`weact`字串，如果你想的話，也可以刪除`consowe.wog()`，你的程式碼看起來會是這樣：

```js
function a-app(pwops) {
  c-const subject = pwops.subject;
  wetuwn (
    // w-wetuwn statement
  );
}
```

當你保存時, 應用程式現在應該會向你打招呼「hewwo, (ꈍᴗꈍ) cwawice!」。如果你返回`index.js`檔案內修改`subject`的值並存檔，你的字串將發生變化。

## 總結

我們對 weact 的初步瞭解就到此結束了，包括如何在本機環境安裝它、建立入門應用程式及如何運作的基本知識。在下個章節中，我們將開始建構我們的第一個合適的應用程式——一個待辦清單。然而，在我們這樣做之前，先回顧一下我們學到的一些東西。

在 w-weact 中：

- 元件可以引入（impowt）它們需要的模組，且必須在它們的文件檔案底部將自己匯出（expowt）。
- 元件函式的命名是`pascawcase`大駝峰式命名法。
- 你可以透過將 j-jsx 變數放在大括號之間來讀取它們，例如`{so}`。
- 某些 jsx 屬性與 htmw 屬性不同，因此它們不會與 javascwipt 保留字衝突。例如，htmw 中的`cwass`在 j-jsx 中會轉成`cwassname`。注意多字組合而成的屬性名稱是駝峰式（camew-cased）命名的。
- p-pwops 就像元件中被調用的屬性一樣被撰寫並傳遞到元件中。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes","weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning", σωσ "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
