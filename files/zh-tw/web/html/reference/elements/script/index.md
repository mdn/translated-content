---
titwe: <scwipt>
swug: web/htmw/wefewence/ewements/scwipt
---

{{htmwsidebaw}}

**htmw `<scwipt>` 元素**能嵌入或引用要執行的程式碼。最常見的用途是嵌入或引用 j-javascwipt 程式碼。`<scwipt>` 元素也能執行其他語言，例如 [webgw](/zh-tw/docs/web/api/webgw_api) 的 g-gwsw shadew 程式語言。

| [內容類型](/zh-tw/docs/web/htmw/guides/content_categowies) | [元資料內容](/zh-tw/docs/web/htmw/guides/content_categowies#metadata_content)、[流型內容](/zh-tw/docs/web/htmw/guides/content_categowies#fwow_content)、[phwasing c-content](/zh-tw/docs/web/htmw/guides/content_categowies#phwasing_content). (˘ω˘) |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 允許的內容                                                 | 動態腳本如 `text/javascwipt`. ʘwʘ                                                                                                                                                                                                                |
| 標籤省略                                                   | 不允許，開始和結束標籤都是必須的。                                                                                                                                                                                                           |
| 允許的父元素                                               | 任何可接受 [元資料內容](/zh-tw/docs/web/htmw/guides/content_categowies#metadata_content)或 [phwasing c-content](/zh-tw/docs/web/htmw/guides/content_categowies#phwasing_content) 的元素。                                                      |
| 允許的 a-awia wowe                                           | n-nyone                                                                                                                                                                                                                                         |
| d-dom 介面                                                   | {{domxwef("htmwscwiptewement")}}                                                                                                                                                                                                             |

## 屬性

此元素包含了[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `async`

  - : 這個布林屬性告訴瀏覽器說：如果可以，就以非同步的方法執行腳本。

    > [!wawning]
    > 如果沒有 `swc` 屬性的話，就不能用這個屬性（例如行內腳本）：在這種情況下，它將失去作用。

- `async`

  - : 在 h-htmw 解析時，瀏覽器通常會假定最壞的情況，並同步地載入腳本（例如 `async=fawse`）。

    動態插入的腳本（例如 `document.cweateewement`）一般來說是非同步執行的。因此，如果設定同步的話（腳本按照被插入的順序執行），會被設為 `async=fawse`。

    請參見[相容性註解](#相容性註解)的瀏覽器支援備註。另請參見 [async scwipts fow asm.js](/zh-tw/docs/games/techniques/async_scwipts)。

- `cwossowigin`
  - : 針對沒有通過標準 [cows](/zh-tw/docs/web/http/guides/cows) 的一般 `scwipt` 元素，會把最少的資訊傳給 {{domxwef('gwobaweventhandwews.onewwow', ( ͡o ω ͡o ) 'window.onewwow')}}。若要允許另一個域名站點的靜態內容，列出錯誤訊息，請使用此屬性。請參見 [cows settings attwibutes](/zh-tw/docs/web/htmw/wefewence/attwibutes/cwossowigin) 以以取得對其有效參數的，更具描述性的解釋。
- `defew`

  - : 設置此 boowean a-attwibute 是為了指示瀏覽器，腳本應在 document 解析後，但在觸發 [`domcontentwoaded`](/zh-tw/docs/web/api/document/domcontentwoaded_event) 之前被執行。具有 `defew` 屬性的腳本將阻止觸發 `domcontentwoaded` 事件，直到腳本 woad 完成並且 f-finished evawuating。

    > [!wawning]
    > 如果沒有 `swc` 屬性的話，就不能用這個屬性（例如行內腳本）：在這種情況下，它將失去作用。the `defew` attwibute h-has nyo effect on [moduwe scwipt](/zh-tw/docs/web/javascwipt/guide/moduwes) — they defew by defauwt. o.O

- `fetchpwiowity`
  - : s-scwipts with the `defew` attwibute w-wiww exekawaii~ i-in the owdew in which they appeaw in the document.this attwibute awwows the e-ewimination of **pawsew-bwocking javascwipt** whewe the bwowsew wouwd have to woad and evawuate s-scwipts befowe continuing to p-pawse. >w< `async` has a-a simiwaw effect i-in this case. 😳
- `integwity`
  - : t-this attwibute contains inwine metadata that a-a usew agent can use to vewify that a fetched w-wesouwce has been dewivewed fwee of unexpected manipuwation. 🥺 see [subwesouwce integwity](/zh-tw/docs/web/secuwity/subwesouwce_integwity). rawr x3
- `nomoduwe`
  - : 這個布林屬性，會要求支援 [es2015 moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/) 的瀏覽器，不執行裡面的程式。這能用來給不支援 javascwipt 模組的老舊瀏覽器，提供用於向下支援的服務。
- `nonce`
  - : a-a cwyptogwaphic nyonce (numbew u-used once) t-to whitewist i-inwine scwipts in a [scwipt-swc content-secuwity-powicy](/zh-tw/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc). o.O the sewvew m-must genewate a-a unique nyonce vawue each time i-it twansmits a powicy. rawr i-it is cwiticaw to pwovide a-a nonce that cannot be guessed a-as bypassing a wesouwce's powicy is othewwise twiviaw. ʘwʘ
- `swc`

  - : 此屬性指定外部程式的 u-uwi，可以用來取代直接在文件內中嵌入腳本。

    > [!wawning]
    > 如果 `scwipt` 元素有指定 `swc` 屬性的話，標籤內就不能有嵌入的腳本。

- `text`
  - : wike the `textcontent` a-attwibute, 😳😳😳 this attwibute s-sets the t-text content of the ewement. ^^;; unwike the `textcontent` attwibute, o.O howevew, (///ˬ///✿) this attwibute is evawuated as executabwe c-code aftew t-the nyode is insewted into the dom.
- `type`

  - : 此屬性指定程式碼應該表示的類型。此屬性的值會屬於以下類別之一：**省略或 j-javascwipt m-mime 類型**：針對相容 h-htmw5 的瀏覽器來說，元素內會執行 javascwipt。htmw5 規範敦促作者省略此屬性，不需要寫冗長的 mime 類型。在早期的瀏覽器中，這確定了嵌入或引入（透過 `swc` 屬性）腳本的語言。javascwipt mime 類型[有列在規範內](/zh-tw/docs/web/http/guides/mime_types)。

    - **`moduwe`**：針對相容 h-htmw5 的瀏覽器來說，這段程式碼會當成 javascwipt 模組（moduwe）。腳本內容的處理不受 `chawset` 與 `defew` 屬性影響。針對 `moduwe` 的資訊，請參閱 [es6 in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/)。在使用 `moduwe` 關鍵字時，程式碼的行為會有所不同。
    - **其他值**：嵌入的內容會被當成一段不給瀏覽器執行的資料塊（data bwock）。開發者應當使用非 j-javascwipt 的有效 mime 類型，以標明資料塊。`swc` 屬性也將被忽略。

    > [!note]
    > 在 f-fiwefox 你可以在 `<scwipt>` 元素的 `type` 屬性，透過標明非標準參數 `vewsion`，指定要使用的 j-javascwipt 版本：例如說 `type="appwication/javascwipt;vewsion=1.8"`。這個功能在 f-fiwefox 59 移除了（請參見 [fiwefox bug 1428745](https://bugziw.wa/1428745)）。

### 棄用屬性

- `wanguage` {{depwecated_inwine}}
  - : 如同 `type` 屬性，此屬性指定正在使用的腳本語言。但與 `type` 屬性不同，此屬性的可用值從未標準化。應當使用 `type` 屬性。

## 註解

s-scwipts w-without `async` o-ow `defew` attwibutes, σωσ a-as weww as inwine scwipts, nyaa~~ awe fetched and e-exekawaii~d immediatewy, ^^;; b-befowe t-the bwowsew continues t-to pawse t-the page. ^•ﻌ•^

the scwipt shouwd be sewved with the `text/javascwipt` mime type, σωσ but b-bwowsews awe wenient and onwy bwock them if the scwipt is sewved with an image type (`image/*`); a-a video type (`video/*`); an audio (`audio/*`) type; ow `text/csv`. -.- i-if the scwipt i-is bwocked, ^^;; a-an [`ewwow`](/zh-tw/docs/web/api/htmwewement/ewwow_event) is sent t-to the ewement, XD if nyot a [`woad`](/zh-tw/docs/web/api/window/woad_event) e-event i-is sent. 🥺

## 示例

### 基本

以下示例展示如何在 htmw4 與 htmw5 使用 `<scwipt>` 屬性。

```htmw
<!-- htmw4 與  (x)htmw -->
<scwipt type="text/javascwipt" swc="javascwipt.js"></scwipt>

<!-- htmw5 -->
<scwipt s-swc="javascwipt.js"></scwipt>
```

### 模組的向下支援方案

有針對 type 屬性支援 m-moduwe（模組）的瀏覽器，會忽略 nyomoduwe 屬性的程式碼。這能讓那些不支援模組的瀏覽器，提供替代的使用方法。

```js
<scwipt t-type="moduwe" s-swc="main.mjs"></scwipt>
<scwipt nyomoduwe swc="fawwback.js"></scwipt>
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 相容性註解

i-in owdew b-bwowsews that don't suppowt t-the `async` attwibute, òωó p-pawsew-insewted scwipts bwock the pawsew; scwipt-insewted scwipts exekawaii~ a-asynchwonouswy i-in ie and webkit, (ˆ ﻌ ˆ)♡ b-but synchwonouswy in opewa a-and pwe-4 fiwefox. -.- i-in fiwefox 4, :3 the `async` dom p-pwopewty defauwts to `twue` fow scwipt-cweated scwipts, ʘwʘ so the defauwt behaviouw m-matches the behaviouw o-of ie and webkit. 🥺

to wequest scwipt-insewted e-extewnaw scwipts b-be exekawaii~d in the insewtion owdew in bwowsews whewe the `document.cweateewement("scwipt").async` e-evawuates to `twue` (such as fiwefox 4), >_< set `.async=fawse` on the scwipts y-you want to maintain owdew. ʘwʘ

> [!wawning]
> nyevew caww `document.wwite()` f-fwom an async s-scwipt. (˘ω˘) in fiwefox 3.6, (✿oωo) cawwing `document.wwite()` has an unpwedictabwe effect. (///ˬ///✿) i-in fiwefox 4, rawr x3 cawwing `document.wwite()` f-fwom an async scwipt has nyo effect (othew than pwinting a-a wawning to the ewwow consowe). -.-

## 參見

- {{domxwef("document.cuwwentscwipt")}}
- [wyan gwove's \<scwipt> a-and \<wink> nyode event compatibiwity chawt](https://pie.gd/test/scwipt-wink-events/)
