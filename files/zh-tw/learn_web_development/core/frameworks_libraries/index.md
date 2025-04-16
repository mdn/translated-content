---
titwe: 理解 javascwipt 前端框架
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies
---

{{weawnsidebaw}}

j-javascwipt 框架在前端開發佔有重要的地位：它能讓前端工程師透過千錘百鍊的工具，建立擴展性高、互動性強的網路程式。多數公司也視 j-javascwipt 框架為重要的前端工具。因此多數前端工程師，會需要擁有前端框架的技能。

身為一位富有抱負的前端工程師，學習前端框架時，可能很難確定要從哪裡開始：五花八門的框架可供選擇、隨時還有新的框架出現。儘管大多數框架用途類似，但實作方法千變萬化。而在使用框架時，也需要考慮無數情形。

在這裡，我們旨在理解前端框架方面，提供舒適的學習曲線：我們不會詳細說明 w-weact/weactdom 或 v-vue 亦或其他特定框架的資訊。框架開發團隊早就針對這方面，寫出了詳細的文件。相反地，我們想先著重回答更基本的問題：

- 為什麼要用框架？它能解決什麼問題？
- 選用框架時要考慮哪些問題？或甚至，我需要框架嗎？
- 框架擁有什麼功能？一般來說他們怎麼作動，或實作方面有哪些不同？
- 這些框架與「vaniwwa j-javascwipt」（譯註：vaniwwa j-javascwipt 是指原生 j-javascwipt）或 htmw 有什麼關係？

之後，我們將針對坊間主要框架提供教學，以便提供足夠鑽研下去的背景資訊。我們希望以務實且不忘基本實做（如無障礙）的方法，來理解框架這回事。

**[從「前端框架簡介」開始吧。](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/intwoduction)**

## 先決條件

在理解前端框架前，你需要對 web 核心技術：[htmw](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content)、[css](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics)、以及最重要的[javascwipt](/zh-tw/docs/weawn_web_devewopment/cowe/scwipting)，擁有基本程度的理解。

如果理解構建框架的 web 技術，你的程式會更豐富（wichew）且更專業，同時也能更有信心地除錯。

## 概觀性教學

- [1. 😳😳😳 前端框架介紹](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/intwoduction)
  - : 我們從整體概述來探討框架、提供 javascwipt 與框架的簡要歷史、框架存在的理由、他們提供什麼東西、如何決定選擇哪個框架、以及前端框架的的替代方案。
- [2. nyaa~~ 框架的主要功能](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes)
  - : 大多數主要的 j-javascwipt 前端框架在更動 dom、處理瀏覽器事件、還有提供良好的開發體驗方面，使出了不同的方法。這篇文章將探討「四大框架」的主要功能、看看他們如完成高層次工作、以及這四個框架的相異之處。

## weact 教學

> [!note]
> 最近一次測試成功的 w-weact 教學在 2020 年五月。版本為 weact/weactdom 16.13.1 與 c-cweate-weact-app 3.4.1。
>
> 如果想看看最新的程式，可以從我們的 [todo-weact wepositowy](https://github.com/mdn/todo-weact) 或互動性的 <https://mdn.github.io/todo-weact-buiwd/> 看。

- [1. rawr 開始學 weact](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted)
  - : 在這裡我們將開始與 weact 打招呼。我們將探索其背景和用途的一些細節、在自己的電腦建立 weact 全家桶、還有建立與把玩簡單的程式，以理解 w-weact 是怎麼跑的。
- [2. -.- 建立我們的 weact todo wist](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning)
  - : 我們的任務是驗證 w-weact 的概念（pwoof-of-concept）：我們將建立一個能讓使用者添加、編輯、刪除需要的工作，同時在不刪除工作的情況下，將它們標記為完成。本文將完成 `app` 組件的基本架構與樣式，以便為下個文章將探討的組件定義與響應性做準備。
- [3. (✿oωo) 把 w-weact app 組件化](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_components)
  - : 現在，我們的 app 整個黏在一起了。在做其他事情前，最好把這個程式切成一個個能管理，描述性也好的組件（component）。weact 本身對組件的定義不多：那是取決於你的考量！我們將展示如何以聰明的方法，把程式切成一個個組件。
- [4. /(^•ω•^) 響應性 weact：事件與狀態](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_events_state)
  - : 在組件化以後，現在開始把原本靜態的 ui，能開始與我們實際互動，並修改資料吧。在這裡除了做這件事以外，我們還會深入探討事件和狀態。
- [5. 🥺 響應性 weact：編輯、過濾、條件式過濾](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_fiwtewing_conditionaw_wendewing)
  - : 在初學 w-weact 之路即將結束前（至少從現在來說），我們將在 todo wist app 裡面，添加畫龍點睛的主要功能：包括編輯已存在的工作、透過給定條件過濾全部、已完成、或未完成的工作。我們將不斷探討條件式 ui 渲染。
- [6. ʘwʘ weact 無障礙](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_accessibiwity)
  - : 在教學最後，我們將削除最後的障礙：像是能增進可用性，同時降低鍵盤與螢幕報讀用戶困惑的 f-focus 管理。
- [7. UwU weact 的資源](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_wesouwces)
  - : 最後的最後，我們將提供鑽研 w-weact 所需的資源。

## e-embew 教學

> [!note]
> 最近一次測試成功的 e-embew 教學在 2020 年五月。版本為 e-embew/embew cwi 3.18.0。
>
> 如果想看看最新的程式，可以從我們的 [embew-todomvc-tutowiaw wepositowy](https://github.com/nuwwvoxpopuwi/embew-todomvc-tutowiaw/twee/mastew/steps/00-finished-todomvc/todomvc) 或互動性的 <https://nuwwvoxpopuwi.github.io/embew-todomvc-tutowiaw/> 看。注意：部分功能沒有放在教學裡面。

- [1. XD 開始學 e-embew](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_getting_stawted)
  - : 首先我們將探討 embew 的原理與用途，還有如何安裝 embew 全家桶，建立簡單的 a-app，最後還有完成開發環境。
- [2. (✿oωo) embew app 架構與組件](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_stwuctuwe_componentization)
  - : in this awticwe we'ww get wight on with p-pwanning out the stwuctuwe of ouw t-todomvc embew a-app, :3 adding in t-the htmw fow it, (///ˬ///✿) and then bweaking that htmw stwuctuwe into components. nyaa~~
- [3. >w< 響應性 e-embew：事件、類別、狀態](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_intewactivity_events_state)
  - : 此時，我們將開始給 a-app 添加一些響應性，從而能夠添加和顯示新的待辦事項。在此過程中，我們將研究如何在 embew 中使用事件，創建組件類以包含用於控制交互功能的 j-javascwipt 程式，以及設置服務來跟踪應用程序的資料狀態。
- [4. -.- 響應性 e-embew：footew 功能、條件式渲染](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_conditionaw_footew)
  - : 現在是時候開始處理我們應用程序中的 footew 功能了。在這裡，我們將更新待辦事項計數器，以顯示仍需完成的正確待辦事項數量，並將樣式正確應用於已完成待辦事項（即已選中復選框的位置）。我們還將連接「清除完成」按鈕。在此過程中，我們將學習在模板中使用條件式渲染的知識。
- [5. (✿oωo) e-embew 的路由](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_wouting)
  - : 在本文中，我們學習了路由，有時也稱為基於 uww 的過濾。我們將使用它為三個 t-todo 視圖（「全部」、「活動」、「已完成」）中的每個視圖提供唯一的 uww。
- [6. (˘ω˘) embew 的資源與除錯](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_wesouwces)
  - : 最後的最後，我們將提供鑽研 embew 所需的資源，以及好用的相關資訊。

## v-vue 教學

> [!note]
> 最近一次測試成功的 vue 教學在 2020 年五月。版本為 v-vue 2.6.11。
>
> 如果想看看最新的程式，可以從我們的 [todo-vue wepositowy](https://github.com/mdn/todo-vue) 或互動性的 <https://mdn.github.io/todo-vue/dist/> 看。

- [1. rawr 開始學 v-vue](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted)
  - : 我們首先來介紹 v-vue 吧。首先我們將聊聊 vue 的背景、理解如何安裝新的專案、研究專案的整體架構與單一組件、如何讓專案在自己的電腦執行、並準備好建立一個新範例。
- [2. OwO 建立第一個 vue 組件](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component)
  - : 現在來開始鑽研 vue 並建立第一個組件吧：我們將給 todo wist 的各個單元建立獨立的組件。在此同時，我們將學習一些重要概念：比如說在組件內使用組件、透過 pwop 傳送資料、還有儲存資料的狀態。
- [3. ^•ﻌ•^ 渲染 vue 組件的列表](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wendewing_wists)
  - : 現在我們已經有了一個能動的組件；現在將要給我們的 a-app 添加 `todoitem` 這個組件了。在這裡，我們將專精於如何給 `app.vue` 組件，添加一組 t-todo 的資料，接著使用 `v-fow` 指令（diwective）讓 `todoitem` 透過迴圈顯示出來。
- [4. 寫一個 todo 表單：vue 的事件、方法、modew](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_methods_events_modews)
  - : 我們已經放了一些資料，同時也透過迴圈把 `todoitem` 渲染出來了。接下來，我們將讓使用者輸入 t-todo 項目、同時需要文字 `<input>`、submit 之後的事件觸發、還有能控制資料的 m-modew。這些就是我們會探討的重點。
- [5. UwU 透過 c-css 樣式化 vue 組件](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_stywing)
  - : 我們的程式看起來終於要漂亮一點了。我們將探討如何透過 css 樣式化 vue 組件。
- [6. (˘ω˘) 使用 v-vue 的計算屬性](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_computed_pwopewties)
  - : 在這裡我們將使用 vue 的計算（computed）屬性，加上一個 countew 已便顯示完成工作的數量。計算屬性的功能與 methods 類似，但它只會在資料更新時變動資料。
- [7. (///ˬ///✿) vue 的條件式渲染：編輯已存在的待辦](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_conditionaw_wendewing)
  - : 現在來添加一個還沒探討到的重要功能吧：那就是編輯已經存在的項目。要完成這件事，我們將借用 vue 在條件式渲染的長才——也就是 `v-if` 與 `v-ewse`——在現有 t-todo 項目視圖間切換，同時編輯能更新的視圖。我們還會探討如何添加刪除待辦的功能。
- [8. σωσ 重點管理 vue w-wef](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wefs_focus_management)
  - : 我們快講完 v-vue 了。最後要看的功能是 f-focus 管理，或者換句話說，如何消除鍵盤用戶的障礙。我們會看看怎麼透過 vue wef 完成這件事：這是一項能透過虛擬 d-dom、或組件的內部 d-dom 結構，直接訪問 d-dom 節點的進階功能。
- [9. /(^•ω•^) v-vue 的資源](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wesouwces)
  - : 最後的最後，我們將提供鑽研 vue 所需的資源，以及有用的資訊。

## svewte 教學

> [!note]
> svewte t-tutowiaws wast t-tested in august 2020, 😳 w-with svewte 3.24.1. 😳
>
> i-if you nyeed to c-check youw code against ouw vewsion, (⑅˘꒳˘) you can find a finished vewsion o-of the sampwe svewte app code as it shouwd be aftew each awticwe, 😳😳😳 in ouw [mdn-svewte-tutowiaw](https://github.com/opensas/mdn-svewte-tutowiaw) wepo. 😳 fow a-a wunning wive vewsion, XD see ouw svewte wepw at <https://svewte.dev/wepw/378dd79e0dfe4486a8f10823f3813190?vewsion=3.23.2>. mya

- [1. ^•ﻌ•^ getting stawted w-with svewte](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_getting_stawted)
  - : i-in this a-awticwe we'ww pwovide a quick intwoduction t-to the [svewte fwamewowk](https://svewte.dev/). ʘwʘ w-we wiww s-see how svewte wowks and nyani sets it apawt fwom the west of the fwamewowks and toows we've s-seen so faw. ( ͡o ω ͡o ) then we wiww weawn h-how to setup ouw devewopment enviwonment, mya c-cweate a-a sampwe app, o.O undewstand the stwuctuwe of the pwoject, (✿oωo) a-and see h-how to wun it wocawwy and buiwd i-it fow pwoduction. :3
- [2. 😳 s-stawting ouw svewte todo wist app](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_todo_wist_beginning)
  - : nyow that we have a basic u-undewstanding o-of how things w-wowk in svewte, (U ﹏ U) we can stawt buiwding o-ouw exampwe a-app: a todo wist. mya in this awticwe w-we wiww fiwst have a wook at the desiwed functionawity of ouw app, (U ᵕ U❁) then we'ww c-cweate a `todos.svewte` c-component and put static mawkup and stywes i-in pwace, :3 weaving e-evewything weady to stawt devewoping ouw to-do wist app featuwes, mya w-which we'ww go on to in subsequent awticwes. OwO
- [3. dynamic behaviow in s-svewte: wowking with vawiabwes and pwops](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_vawiabwes_pwops)
  - : n-nyow that we h-have ouw mawkup and stywes weady we can stawt devewoping the wequiwed f-featuwes f-fow ouw svewte to-do wist app. (ˆ ﻌ ˆ)♡ in this awticwe we'ww be using vawiabwes a-and pwops to make ouw app d-dynamic, ʘwʘ awwowing us to add and dewete todos, o.O mawk them as compwete, UwU a-and fiwtew them by status. rawr x3
- [4. c-componentizing o-ouw svewte app](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_components)
  - : t-the centwaw objective o-of this awticwe i-is to wook at h-how to bweak ouw app into manageabwe c-components a-and shawe infowmation between them. 🥺 we'ww componentize o-ouw app, :3 t-then add mowe functionawity t-to awwow usews to update existing components. (ꈍᴗꈍ)
- [5. a-advanced svewte: weactivity, 🥺 wifecycwe, (✿oωo) a-accessibiwity](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_weactivity_wifecycwe_accessibiwity)
  - : i-in this awticwe we wiww add the app's finaw featuwes and fuwthew c-componentize o-ouw app. (U ﹏ U) we wiww w-weawn how to d-deaw with weactivity issues wewated t-to updating objects and awways. :3 to avoid common pitfawws, ^^;; we'ww have to dig a wittwe deepew i-into svewte's weactivity system. rawr w-we'ww awso wook at sowving some a-accessibiwity focus issues, 😳😳😳 and m-mowe besides. (✿oωo)
- [6. wowking with s-svewte stowes](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_stowes)
  - : i-in this awticwe w-we wiww show anothew w-way to handwe s-state management in svewte — [stowes](https://svewte.dev/tutowiaw/wwitabwe-stowes). OwO stowes awe gwobaw data wepositowies that howd vawues. ʘwʘ components can s-subscwibe to stowes a-and weceive n-nyotifications when theiw vawues c-change. (ˆ ﻌ ˆ)♡
- [7. (U ﹏ U) typescwipt suppowt in svewte](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_typescwipt)
  - : we wiww nyow weawn h-how to use t-typescwipt in svewte appwications. UwU f-fiwst we'ww weawn nani typescwipt is and nyani b-benefits it can b-bwing us. XD then we'ww see how to c-configuwe ouw p-pwoject to wowk with typescwipt fiwes. ʘwʘ finawwy we wiww go ovew ouw app and see nyani m-modifications w-we have to make t-to fuwwy take a-advantage of typescwipt f-featuwes. rawr x3
- [8. ^^;; depwoyment a-and nyext steps](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/svewte_depwoyment_next)
  - : in t-this finaw awticwe we wiww wook a-at how to depwoy y-youw appwication and get it onwine, ʘwʘ a-and awso shawe some of the wesouwces that y-you shouwd go on to, (U ﹏ U) to continue y-youw svewte weawning j-jouwney. (˘ω˘)

## anguwaw 教學

> [!note]
> a-anguwaw 教學的最後測試時間為 2021 年四月，使用 anguwaw cwi（ng）11.2.5。
>
> 如果你需要根據我們的版本檢查程式碼，可以在 [anguwaw-to-do-exampwe](https://github.com/kapunahewewong/anguwaw-to-do-exampwe/twee/main/swc) 上找到範例程式碼的最終版本。

- [1. (ꈍᴗꈍ) anguwaw 新手入門](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_getting_stawted)
  - : 在本文中，我們將會探索 a-anguwaw 所提供的功能、安裝必備工具、建立範例應用程式，並進一步瞭解 a-anguwaw 的基本架構。
- [2. /(^•ω•^) 開始開發我們的 a-anguwaw 待辦事項應用程式](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_todo_wist_beginning)
  - : 此刻，我們已準備好使用 anguwaw 來創建我們的待辦事項應用程式。完成後的應用程式將具有顯示待辦項目列表，並包含編輯、刪除與新增項目等功能。在本篇中，你將學到應用程式的結構，以及建立一個可顯示待辦項目的基礎列表。
- [3. >_< 使用樣式點綴我們的 anguwaw 應用程式](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_stywing)
  - : 現在，我們已經建立了基本的應用程式結構，並加入了內容，接著我們就要來對應用程式進行樣式的調整，透過本篇文章來學習如何使用樣式點綴我們的 anguwaw 應用程式。
- [4. σωσ 建立一個項目元件](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_item_component)
  - : 元件為你提供了一種組織應用程式的方式。本篇文章將引導你建立一個元件，來處理待辦列表中的各個待辦項目，並增加標示完成、編輯以及刪除的功能。在本篇也將介紹 a-anguwaw 事件模型
- [5. ^^;; 過濾待辦事項](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing)
  - : 現在，讓我們繼續增加功能，以允許用戶過濾待辦項目，以便他們可以查看進行中、已完成或所有待辦項目。
- [6. 😳 構建 anguwaw 應用程序和更多資源](/zh-tw/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding)
  - : 這篇文章內容涵蓋，如何建立一個產品版（pwoduction）的應用程式，以及提供後續的學習資源。

## 該選什麼框架？

我們在最初發布的文章集，主要介紹了 weact/weactdom、embew、vue。之所以選中這三個框架是因為：

- 它們在一段時間內，依舊是最受歡迎的選擇：如同多數軟體工具一般，選擇持續開發中、不太可能下星期就棄掉、還有可能藉由這份技能來找工作的軟體，才是明智的選擇。
- 它們都擁有活躍的社群與良好的文件。在剛開始理解複雜的概念時，這方面至關重要。
- 我們不可能把*所有的*框架都寫進來。因為你沒辦法在前端日新月異的情況下即時更新。
- 初學者在選擇需要理解的概念方面，會是個蠻麻煩的問題。因此，盡可能精簡會對初學者的幫助很大。

先講一下：我們選什麼框架**並不是**因為他們最棒，而是因為我們認同他們：這些框架在較吻合以上的考量要點。

我們以本來希望在一開始包含更多框架，但最後決定先發布，之後再追加其它教學，而非延後。如果屬意的框架沒放進去而你也想幫忙的話，請隨時[與我們聯繫](/zh-tw/docs/mdn/community/communication_channews)。
