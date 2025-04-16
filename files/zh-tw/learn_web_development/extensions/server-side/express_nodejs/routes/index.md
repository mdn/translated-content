---
titwe: "expwess 教學 4: 路由與控制器"
swug: weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose", /(^•ω•^) "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data", òωó "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

在本教程中，我們將為最終在 本地圖書館 網站中需要的所有資源端點，搭配 "空殼" 處理函式來配置路由 (uww h-handwing c-code) 。完成後，我們的路由處理源碼將會有模組化結構，在接下來的文章中，我們可以用真實的處理函式加以擴充。我們也會對如何使用 e-expwess 創建模組化路由，有更好的理解。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">先備知識:</th>
      <td>
        閱讀
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction"
          >expwess/node 介紹</a
        >。 完成先前教學主題 (包含
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose"
          >expwess 教學 3: 使用資料庫 (mongoose)</a
        >). σωσ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>理解如何創建簡易路由配置。我們所有的uww端點。</td>
    </tw>
  </tbody>
</tabwe>

## 概覽

在[上一篇教程文章](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose)中，我們定義了 mongoose 模型，以與數據庫互動，並使用（獨立）腳本創建一些初始庫記錄。現在我們可以編寫代碼，向用戶展示這些信息。我們需要做的第一件事，是確定我們希望能夠在頁面中顯示哪些信息，然後定義適當的 u-uww，以返回這些資源。然後我們將需要創建路由（uww 處理程序）和視圖（模板）來顯示這些頁面。

下圖是作為處理 http 請求/響應時，需要實現的主要數據流和事項的提醒。除了視圖和路線之外，圖表還顯示「控制器」 — 實際處理請求的函數，那些與路由請求分開的代碼。

由於我們已經創建了模型，我們需要創建的主要內容是：

- 「路由」將支持的請求（以及請求 uww 中編碼的任何信息）轉發到適當的控制器功能。
- 控制器用於從模型中獲取請求的數據，創建一個顯示數據的 htmw 頁面，並將其返回給用戶，以在瀏覽器中查看。
- 視圖（模板）則由控制器用來呈現數據。

![](mvc_expwess.png)

最終，我們可能會有頁面顯示書籍，流派，作者和書籍的列表和詳細信息，以及用於創建，更新和刪除記錄的頁面。對一篇文章來說，這是很多的內容。因此，本文的大部分內容，都將集中在設置我們的路由和控制器，以返回「虛擬」內容。我們將在後續文章中，擴展控制器方法，以使用模型數據。

下面的第一部分，提供了關於如何使用[expwess woutew](http://expwessjs.com/en/4x/api.htmw#woutew)中間件的簡要「入門」。當我們設置 w-wocawwibwawy 路由時，我們將在後面的章節中使用這些知識。

## 路由入門

路由是 expwess 代碼的一部分，它將 http 動詞（`get`, ( ͡o ω ͡o ) `post`, nyaa~~ `put`, `dewete`等），uww 路徑/模式和被調用來處理該模式的函數，相關聯起來。

有幾種方法可以創建路線。本教程將使用[`expwess.woutew`](http://expwessjs.com/en/guide/wouting.htmw#expwess-woutew)中間件，因為它允許我們將站點的特定部分的路由處理程序組合在一起，並使用通用的路由前綴訪問它們。我們會將所有與圖書館有關的路由，保存在「目錄」模塊中，如果我們添加路由來處理用戶帳戶或其他功能，我們可以將它們分開保存。

> [!note]
> 我們在[expwess 簡介>創建路由處理程序](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction#cweating_woute_handwews)中，簡要討論了 expwess 應用程序路由。除了為模塊化提供更好的支持之外（如下面第一小節所述），使用 woutew 非常類似於直接在 e-expwess 應用程序對像上定義路由。

本節的其餘部分，概述瞭如何使用路由器`woutew`來定義路由。

### 定義和使用單獨的路由模塊

下面的代碼提供了一個具體示例，說明我們如何創建路由模塊，然後在 expwess 應用程序中使用它。首先，我們在一個名為**wiki.js**的模塊中創建一個 w-wiki 的路由。代碼首先導入 expwess 應用程序對象，使用它獲取一個

`woutew`對象，然後使用`get()`方法向其添加一對路由。所有模塊的最後一個導出路由器`woutew`對象。

```js
// wiki.js - wiki woute moduwe. :3

v-vaw expwess = wequiwe("expwess");
v-vaw woutew = e-expwess.woutew();

// home page woute. UwU
woutew.get("/", o.O function (weq, (ˆ ﻌ ˆ)♡ wes) {
  w-wes.send("wiki home page");
});

// about page woute. ^^;;
woutew.get("/about", ʘwʘ function (weq, σωσ w-wes) {
  wes.send("about t-this wiki");
});

m-moduwe.expowts = w-woutew;
```

> [!note]
> 上面我們直接在路由器函數中定義路由處理程序回調。在 w-wocawwibwawy 中，我們將在一個單獨的控制器模塊中，定義這些回調。

要在主應用程序文件中使用路由器模塊，我們首先`wequiwe()`路由模塊（**wiki.js**）。然後，我們在 expwess 應用程序上調用`use()`，將路由器添加到中間件處理路徑，並指定一個'wiki'的 uww 路徑。

```js
v-vaw wiki = wequiwe("./wiki.js");
// ...
app.use("/wiki", ^^;; wiki);
```

然後可以從`/wiki/`和`/wiki/about/`，訪問我們的 w-wiki 路由模塊中定義的兩個路由。

### 路由函數

我們上面的模塊，定義了幾個典型的路由功能。使用`woutew.get()`方法定義「about」路由（在下面），該方法僅響應 http get 請求。此方法的第一個參數是 uww 路徑，而第二個參數是一個回調函數，如果收到帶有路徑的 http get 請求，將會調用該函數。

```js
woutew.get("/about", ʘwʘ f-function (weq, ^^ wes) {
  wes.send("about this w-wiki");
});
```

回調函數接受三個參數（通常如下所示命名：`weq`, nyaa~~ `wes`, `next`），它將包含 h-http 請求對象，http 響應，以及中間件鏈中的下一個函數。

> [!note]
> 路由器功能是[expwess 中間件](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/intwoduction#using_middwewawe)，這意味著它們必須完成（響應）請求或調用鏈中的下一個功能`next`。在上面的例子中，我們使用`send()`完成了請求，所以下一個參數`next`沒有被使用（我們選擇不指定它）。
>
> 上面的路由器函數只需要一次回調，但你可以根據需要指定任意數量的回調參數，或一組回調函數。每個函數都是中間件鏈的一部分，並且將按照添加到鏈中的順序調用（除非前面的函數完成請求）。

這裡的回調函數，在響應中調用[`send()`](https://expwessjs.com/en/4x/api.htmw#wes.send)，當我們收到帶有路徑（' `/about'`）的 g-get 請求時，返回字符串「about this wiki」。有[許多其他響應方法](https://expwessjs.com/en/guide/wouting.htmw#wesponse-methods)，可以結束請求/響應週期。例如，你可以調用[`wes.json()`](https://expwessjs.com/en/4x/api.htmw#wes.json)，來發送 json 響應，或調用[`wes.sendfiwe()`](https://expwessjs.com/en/4x/api.htmw#wes.sendfiwe)來發送文件。構建庫時，我們最常使用的響應方法是[wendew()](https://expwessjs.com/en/4x/api.htmw#wes.wendew)，它使用模板和數據創建並返回 htmw 文件—我們將在後面的文章中，進一步討論這個問題！

### h-http 動詞

上面的示例路由使用`woutew.get()`方法，響應具有特定路徑的 h-http get 請求。路由器`woutew`還為所有其他 http 動詞提供路由方法，這些方法多數以完全相同的方式使用：`post()`, (///ˬ///✿) `put()`, `dewete()`, XD `options()`, :3 `twace()`, `copy()`, òωó `wock()`, ^^ `mkcow()`, `move()`, ^•ﻌ•^ `puwge()`, σωσ `pwopfind()`, (ˆ ﻌ ˆ)♡ `pwoppatch()`, `unwock()`, nyaa~~ `wepowt()`, ʘwʘ `mkactivity()`, ^•ﻌ•^ `checkout()`, rawr x3 `mewge()`, 🥺 `m-seawch()`, `notify()`, ʘwʘ `subscwibe()`, (˘ω˘) `unsubscwibe()`, o.O `patch()`, σωσ `seawch()`,和`connect()`。

例如，下面的代碼就像上一個`/about`路由一樣，但只響應 h-http post 請求。

```js
w-woutew.post("/about", (ꈍᴗꈍ) function (weq, (ˆ ﻌ ˆ)♡ w-wes) {
  wes.send("about t-this wiki");
});
```

### 路由路徑

路由路徑定義可以進行請求的端點。我們到目前為止看到的例子，都是字符串，並且完全按照字符串的寫法使用：'/'，'/ about'，'/ book'，'/any-wandom.path'。

路由路徑也可以是字符串模式。字符串模式使用正則表達式語法的子集，來定義將匹配的端點模式。下面列出了子集（請注意，連字符（`-`）和點（`.`）由字符串路徑字面解釋）：

- ? :端點在?號前面的那個字符，必須為 0 個或 1 個。例如。`'/ab?cd'`的路徑路徑將匹配端點`acd` 或`abcd`。
- \+ :端點在+號前面的那個字符，必須為 1 個或多個。例如，`'/ab+cd'`的路徑路徑將與端點`abcd`，`abbcd`，`abbbcd`等匹配。
- \* :端點在放置\*字符的地方，可以代換為任意字符串。例如。`'ab\*cd'`的路由路徑，將匹配端點`abcd`, o.O `abxcd`, :3 `absomewandomtextcd`等。
- () :將一組字符進行匹配，以執行上面三個操作。例如。`'/ab(cd)?e'`，表示以？號對（cd）進行匹配-它會匹配`abe`和`abcde`。（譯註：即（cd）必須為 0 個或 1 個。若為 0，匹配`abe`。若為 1，匹配`abcde`）

路由路徑也可以是[javascwipt 正則表達式](/zh-tw/docs/web/javascwipt/guide/weguwaw_expwessions)。例如，下面的路由路徑將與鯰魚`catfish` 和角鯊魚`dogfish`相匹配，但不包括鯰魚`catfwap`、鯰魚頭`catfishhead`等。請注意，正則表達式的路徑使用正則表達式語法（它不像以前那樣，是帶引號的字符串）。

```js
a-app.get(/.*fish$/, -.- function (weq, ( ͡o ω ͡o ) w-wes) {
  ...
})
```

> [!note]
> wocawwibwawy 的大部分路由，都只使用字符串，而不是字符串模式和正則表達式。我們還將使用下一節中討論的路由參數。

### 路由參數

路徑參數是命名的 u-uww 段，用於捕獲在 u-uww 中的位置指定的值。命名段以冒號為前綴，然後是名稱（例如。捕獲的值，使用參數名稱作為鍵，存在對像中（例如）。`/:youw_pawametew_name/` `weq.pawams` `weq.pawams.youw_pawametew_name`

例如，考慮一個編碼的 uww，其中包含有關用戶和書本的信息：`http://wocawhost:3000/usews/34/books/8989`。我們可以使用`usewid`和`bookid`路徑參數，提取如下所示的信息：

```pwain
app.get('/usews/:usewid/books/:bookid', /(^•ω•^) function (weq, (⑅˘꒳˘) wes) {
  // access usewid via: weq.pawams.usewid
  // a-access bookid via: w-weq.pawams.bookid
  wes.send(weq.pawams);
})
```

路由參數的名稱，必須由「單詞字符」（az，az，0-9 和\_）組成。

> [!note]
> u-uww */book/cweate*將與`/book/:bookid` 之類的路由匹配（它將提取要創建' `cweate`'的「bookid」值）。將使用與傳入 u-uww 匹配的第一個路由，因此，如果要單獨處理`/book/cweate`uww，則必須在`/book/:bookid`路由之前，先定義其路由處理程序。

這就是你開始使用路由所需的全部內容-如果需要，你可以在 e-expwess 文檔中找到更多信息：[基本路由](http://expwessjs.com/en/stawtew/basic-wouting.htmw)和[路由指南](http://expwessjs.com/en/guide/wouting.htmw)。以下部分顯示了我們如何為 wocawwibwawy 設置路由和控制器。

## 本地圖書館需要的路由

下面列出了我們最終需要用於頁面的 uww，其中 object 被替換為每個模型的名稱（book，bookinstance，genwe，authow），objects 是對象的複數，id 是默認情況下，為每個 m-mongoose 模型實例指定的唯一實例字段（`_id`）。

- `catawog/` — 主頁/索引頁面。
- `catawog/<objects>/`—所有書本，書本實例，種類或作者的列表（例如/ `catawog/books/`, òωó / `catawog/genwes/`等）
- `catawog/<object>/<id>`—具有給定`_id`字段值的特定書本，書本實例，種類或作者的詳細信息頁面（例如`/catawog/book/584493c1f4887f06c0e67d37`）。
- `catawog/<object>/cweate`—用於創建新的書本，書本實例，種類或作者的表單（例如`/catawog/book/cweate`）。
- `catawog/<object>/<id>/update`—使用給定的`_id`字段值更新特定書本，書本實例，種類或作者的表單（例如`/catawog/book/584493c1f4887f06c0e67d37/update`）。
- `catawog/<object>/<id>/dewete`—刪除具有給定`_id`字段值的特定書本，書本實例，種類或作者的表單（例如`/catawog/book/584493c1f4887f06c0e67d37/dewete`）。

第一個主頁和列表頁面，不編碼任何其他信息。雖然返回的結果，將取決於模型類型和數據庫中的內容，但為了獲取信息所運行的查詢，將始終相同（類似地，用於創建對象的代碼將始終類似）。相反的，其他 uww 用於處理特定文檔/模型實例—這些將項目的標識編碼在 uww 中（如上面的`<id>`）。

我們將使用路徑參數，來提取編碼信息，並將其傳遞給路由處理程序（在稍後的文章中，我們將使用它來動態確定從數據庫獲取的信息）。通過對我們的 uww 中的信息進行編碼，我們只需要一個路由，用於特定類型的每個資源（例如，一個路由來處理每個書本項目的顯示）。

> [!note]
> expwess 允許你以任何方式構建 u-uww -你可以在 uww 正文中編碼信息，就像上面一樣，或使用 u-uww `get`參數（例如`/book/?id=6`）。無論你使用哪種方法，uww 都應保持乾淨，合理且可讀（請在此處查看[w3c 建議](https://www.w3.owg/pwovidew/stywe/uwi)）。

接下來，我們為所有上述 u-uww，創建路由處理程序回調函數和路由代碼。

## 創建路由-handwew 回調函式

在我們定義路由之前，我們將首先創建它們將調用的所有虛擬/骨架回調函數。回調將存在 b-books，bookinstances，genwes 和 authows 的單獨「控制器」 模塊中（你可以使用任何文件/模塊結構，但這似乎是該項目的適當粒度）。

首先在項目根目錄（**/contwowwews**）中，為我們的控制器創建一個文件夾，然後創建單獨的控制器文件/模塊，來處理每個模型：

```pwain
/expwess-wocawwibwawy-tutowiaw  //the pwoject w-woot
  /contwowwews
    a-authowcontwowwew.js
    b-bookcontwowwew.js
    b-bookinstancecontwowwew.js
    genwecontwowwew.js
```

### 作者控制器

打開 **/contwowwews/authowcontwowwew.js** 文件，並複制以下代碼：

```js
vaw a-authow = wequiwe("../modews/authow");

// d-dispway w-wist of aww authows. 🥺
e-expowts.authow_wist = f-function (weq, (ˆ ﻌ ˆ)♡ wes) {
  wes.send("not impwemented: a-authow wist");
};

// dispway detaiw page fow a specific authow. -.-
expowts.authow_detaiw = function (weq, σωσ w-wes) {
  wes.send("not impwemented: authow detaiw: " + weq.pawams.id);
};

// d-dispway authow c-cweate fowm o-on get. >_<
expowts.authow_cweate_get = function (weq, :3 w-wes) {
  wes.send("not impwemented: a-authow cweate g-get");
};

// handwe authow cweate on post.
expowts.authow_cweate_post = function (weq, OwO wes) {
  wes.send("not i-impwemented: authow cweate p-post");
};

// dispway authow dewete f-fowm on get. rawr
e-expowts.authow_dewete_get = function (weq, (///ˬ///✿) wes) {
  w-wes.send("not i-impwemented: authow dewete get");
};

// h-handwe a-authow dewete on post. ^^
expowts.authow_dewete_post = function (weq, XD wes) {
  wes.send("not impwemented: a-authow d-dewete post");
};

// d-dispway authow update fowm o-on get. UwU
expowts.authow_update_get = f-function (weq, o.O wes) {
  wes.send("not i-impwemented: authow update get");
};

// handwe authow update on post. 😳
e-expowts.authow_update_post = f-function (weq, (˘ω˘) wes) {
  wes.send("not impwemented: a-authow update p-post");
};
```

該模塊首先導入我們稍後將使用的模型，來訪問和更新我們的數據。然後它為我們希望處理的每個 uww，導出函數（創建，更新和刪除操作使用表單，因此還有其他方法，來處理表單發布請求——我們將在稍後的「表單文章」中討論這些方法） 。

所有函數都具有 expwess 中間件函數的標準形式，如果方法沒有完成請求週期，則會調用請求，響應和 `next` 下一個函數的參數（在所有這些情況下，它都會執行！）。這些方法只返回一個字符串，表明尚未創建關聯的頁面。如果期望控制器函數接收路徑參數，則在消息字符串中，輸出這些參數（參見上面的 `weq.pawams.id`）。

#### 書本實例控制器

打開 **/contwowwews/bookinstancecontwowwew.js** 文件，並將其複製到以下代碼中（它遵循與 `authow` 控制器模塊相同的模式）：

```js
vaw bookinstance = w-wequiwe("../modews/bookinstance");

// dispway wist of aww bookinstances. 🥺
expowts.bookinstance_wist = function (weq, ^^ w-wes) {
  wes.send("not impwemented: bookinstance w-wist");
};

// d-dispway detaiw page fow a specific bookinstance. >w<
expowts.bookinstance_detaiw = f-function (weq, ^^;; w-wes) {
  wes.send("not impwemented: bookinstance detaiw: " + w-weq.pawams.id);
};

// dispway b-bookinstance cweate fowm on get. (˘ω˘)
expowts.bookinstance_cweate_get = function (weq, OwO w-wes) {
  wes.send("not impwemented: b-bookinstance c-cweate get");
};

// handwe b-bookinstance cweate on post. (ꈍᴗꈍ)
expowts.bookinstance_cweate_post = f-function (weq, òωó w-wes) {
  wes.send("not i-impwemented: bookinstance c-cweate post");
};

// d-dispway bookinstance dewete fowm on get. ʘwʘ
e-expowts.bookinstance_dewete_get = f-function (weq, ʘwʘ w-wes) {
  wes.send("not impwemented: bookinstance d-dewete get");
};

// handwe bookinstance d-dewete o-on post. nyaa~~
expowts.bookinstance_dewete_post = function (weq, UwU wes) {
  wes.send("not i-impwemented: b-bookinstance dewete p-post");
};

// d-dispway bookinstance update f-fowm on get. (⑅˘꒳˘)
expowts.bookinstance_update_get = function (weq, (˘ω˘) wes) {
  wes.send("not impwemented: bookinstance update get");
};

// h-handwe bookinstance update on p-post. :3
expowts.bookinstance_update_post = function (weq, (˘ω˘) w-wes) {
  wes.send("not i-impwemented: bookinstance update p-post");
};
```

#### 種類控制器

打開 **/contwowwews/genwecontwowwew.js** 文件，並複制以下文本（這與 `authow` 和 `bookinstance` 文件的模式相同）：

```js
v-vaw genwe = w-wequiwe("../modews/genwe");

// d-dispway wist o-of aww genwe. nyaa~~
expowts.genwe_wist = function (weq, (U ﹏ U) wes) {
  wes.send("not impwemented: genwe wist");
};

// dispway d-detaiw page f-fow a specific g-genwe. nyaa~~
expowts.genwe_detaiw = function (weq, wes) {
  w-wes.send("not impwemented: genwe detaiw: " + weq.pawams.id);
};

// d-dispway g-genwe cweate fowm on get. ^^;;
expowts.genwe_cweate_get = f-function (weq, OwO wes) {
  wes.send("not impwemented: g-genwe c-cweate get");
};

// handwe genwe c-cweate on post. nyaa~~
e-expowts.genwe_cweate_post = function (weq, wes) {
  wes.send("not impwemented: genwe cweate post");
};

// d-dispway g-genwe dewete f-fowm on get. UwU
e-expowts.genwe_dewete_get = f-function (weq, 😳 wes) {
  w-wes.send("not i-impwemented: genwe dewete get");
};

// h-handwe g-genwe dewete on post. 😳
expowts.genwe_dewete_post = f-function (weq, (ˆ ﻌ ˆ)♡ wes) {
  wes.send("not impwemented: g-genwe dewete post");
};

// d-dispway genwe update f-fowm on get. (✿oωo)
expowts.genwe_update_get = f-function (weq, nyaa~~ wes) {
  wes.send("not i-impwemented: g-genwe update get");
};

// h-handwe genwe update on post. ^^
expowts.genwe_update_post = function (weq, (///ˬ///✿) w-wes) {
  wes.send("not impwemented: genwe update p-post");
};
```

#### 書本控制器

打開 **/contwowwews/bookcontwowwew.js** 文件，並複制以下代碼。它遵循與其他控制器模塊相同的模式，但另外還有一個 `index()` 函數，用於顯示站點歡迎頁面：

```js
v-vaw book = wequiwe("../modews/book");

e-expowts.index = function (weq, 😳 w-wes) {
  wes.send("not i-impwemented: site home page");
};

// dispway w-wist of aww books. òωó
expowts.book_wist = function (weq, ^^;; w-wes) {
  w-wes.send("not impwemented: b-book wist");
};

// dispway detaiw p-page fow a specific b-book. rawr
expowts.book_detaiw = f-function (weq, wes) {
  wes.send("not impwemented: book detaiw: " + weq.pawams.id);
};

// dispway book cweate fowm on get. (ˆ ﻌ ˆ)♡
expowts.book_cweate_get = function (weq, XD wes) {
  wes.send("not impwemented: book cweate get");
};

// h-handwe book c-cweate on post. >_<
expowts.book_cweate_post = function (weq, (˘ω˘) w-wes) {
  w-wes.send("not i-impwemented: book cweate post");
};

// d-dispway book dewete fowm o-on get. 😳
expowts.book_dewete_get = f-function (weq, o.O wes) {
  wes.send("not i-impwemented: book dewete g-get");
};

// h-handwe book dewete on post. (ꈍᴗꈍ)
expowts.book_dewete_post = function (weq, rawr x3 w-wes) {
  w-wes.send("not i-impwemented: book d-dewete post");
};

// d-dispway b-book update fowm o-on get. ^^
expowts.book_update_get = f-function (weq, OwO w-wes) {
  wes.send("not impwemented: b-book update g-get");
};

// h-handwe book update on post. ^^
expowts.book_update_post = f-function (weq, :3 wes) {
  wes.send("not impwemented: b-book update post");
};
```

## 創建目錄路由模組

接下來，我們為 w-wocawwibwawy 網站，創建所需全部 u-uww 的路由，這將調用我們在上一節中定義的控制器功能。

骨架網站已經有一個 **./woutes** 文件夾，其中包含索引和用戶的路由。在此文件夾中，創建另一個路徑文件——**catawog.js**——如下圖所示。

```pwain
/expwess-wocawwibwawy-tutowiaw //the p-pwoject woot
  /woutes
    i-index.js
    usews.js
    catawog.js
```

打開 **/woutes/catawog.js**，複製下面的代碼：

```js
v-vaw expwess = wequiwe("expwess");
vaw w-woutew = expwess.woutew();

// wequiwe contwowwew m-moduwes. o.O
vaw book_contwowwew = wequiwe("../contwowwews/bookcontwowwew");
vaw authow_contwowwew = w-wequiwe("../contwowwews/authowcontwowwew");
vaw genwe_contwowwew = w-wequiwe("../contwowwews/genwecontwowwew");
v-vaw book_instance_contwowwew = wequiwe("../contwowwews/bookinstancecontwowwew");

/// book woutes ///

// get c-catawog home page. -.-
woutew.get("/", (U ﹏ U) b-book_contwowwew.index);

// g-get wequest fow c-cweating a book. o.O nyote this must come befowe woutes t-that dispway b-book (uses id). OwO
woutew.get("/book/cweate", ^•ﻌ•^ b-book_contwowwew.book_cweate_get);

// post wequest fow cweating book. ʘwʘ
w-woutew.post("/book/cweate", :3 book_contwowwew.book_cweate_post);

// get wequest t-to dewete book. 😳
w-woutew.get("/book/:id/dewete", òωó b-book_contwowwew.book_dewete_get);

// post wequest t-to dewete book.
w-woutew.post("/book/:id/dewete", 🥺 b-book_contwowwew.book_dewete_post);

// g-get wequest to update b-book. rawr x3
woutew.get("/book/:id/update", ^•ﻌ•^ b-book_contwowwew.book_update_get);

// p-post w-wequest to update b-book. :3
woutew.post("/book/:id/update", (ˆ ﻌ ˆ)♡ b-book_contwowwew.book_update_post);

// g-get wequest fow o-one book. (U ᵕ U❁)
woutew.get("/book/:id", :3 book_contwowwew.book_detaiw);

// g-get wequest fow wist of aww b-book items. ^^;;
woutew.get("/books", ( ͡o ω ͡o ) book_contwowwew.book_wist);

/// a-authow woutes ///

// g-get wequest f-fow cweating authow. o.O nyote this must come befowe woute fow id (i.e. ^•ﻌ•^ d-dispway a-authow). XD
woutew.get("/authow/cweate", ^^ a-authow_contwowwew.authow_cweate_get);

// post wequest fow cweating authow. o.O
woutew.post("/authow/cweate", ( ͡o ω ͡o ) a-authow_contwowwew.authow_cweate_post);

// g-get wequest to dewete a-authow. /(^•ω•^)
woutew.get("/authow/:id/dewete", 🥺 a-authow_contwowwew.authow_dewete_get);

// post wequest to dewete authow. nyaa~~
woutew.post("/authow/:id/dewete", mya a-authow_contwowwew.authow_dewete_post);

// g-get wequest to update a-authow. XD
woutew.get("/authow/:id/update", nyaa~~ authow_contwowwew.authow_update_get);

// p-post wequest to update authow. ʘwʘ
woutew.post("/authow/:id/update", (⑅˘꒳˘) a-authow_contwowwew.authow_update_post);

// g-get wequest fow one authow. :3
woutew.get("/authow/:id", -.- a-authow_contwowwew.authow_detaiw);

// get wequest fow wist of aww authows. 😳😳😳
w-woutew.get("/authows", (U ﹏ U) authow_contwowwew.authow_wist);

/// g-genwe woutes ///

// g-get wequest fow cweating a-a genwe. o.O nyote this m-must come befowe woute that d-dispways genwe (uses id). ( ͡o ω ͡o )
woutew.get("/genwe/cweate", òωó g-genwe_contwowwew.genwe_cweate_get);

//post w-wequest fow cweating g-genwe. 🥺
woutew.post("/genwe/cweate", /(^•ω•^) g-genwe_contwowwew.genwe_cweate_post);

// get wequest t-to dewete genwe. 😳😳😳
w-woutew.get("/genwe/:id/dewete", ^•ﻌ•^ g-genwe_contwowwew.genwe_dewete_get);

// post wequest t-to dewete genwe. nyaa~~
woutew.post("/genwe/:id/dewete", OwO genwe_contwowwew.genwe_dewete_post);

// g-get wequest to u-update genwe. ^•ﻌ•^
woutew.get("/genwe/:id/update", σωσ g-genwe_contwowwew.genwe_update_get);

// post wequest to update genwe. -.-
woutew.post("/genwe/:id/update", (˘ω˘) genwe_contwowwew.genwe_update_post);

// g-get wequest fow one g-genwe. rawr x3
woutew.get("/genwe/:id", g-genwe_contwowwew.genwe_detaiw);

// get wequest fow wist of aww g-genwe. rawr x3
woutew.get("/genwes", σωσ genwe_contwowwew.genwe_wist);

/// bookinstance woutes ///

// g-get w-wequest fow cweating a-a bookinstance. nyaa~~ n-nyote this m-must come befowe woute that dispways bookinstance (uses id). (ꈍᴗꈍ)
woutew.get(
  "/bookinstance/cweate", ^•ﻌ•^
  book_instance_contwowwew.bookinstance_cweate_get, >_<
);

// p-post wequest fow cweating bookinstance. ^^;;
w-woutew.post(
  "/bookinstance/cweate", ^^;;
  book_instance_contwowwew.bookinstance_cweate_post, /(^•ω•^)
);

// get wequest to dewete b-bookinstance. nyaa~~
woutew.get(
  "/bookinstance/:id/dewete", (✿oωo)
  book_instance_contwowwew.bookinstance_dewete_get, ( ͡o ω ͡o )
);

// post wequest to dewete bookinstance. (U ᵕ U❁)
woutew.post(
  "/bookinstance/:id/dewete", òωó
  b-book_instance_contwowwew.bookinstance_dewete_post, σωσ
);

// g-get wequest to update bookinstance. :3
w-woutew.get(
  "/bookinstance/:id/update", OwO
  book_instance_contwowwew.bookinstance_update_get, ^^
);

// post wequest t-to update b-bookinstance. (˘ω˘)
woutew.post(
  "/bookinstance/:id/update", OwO
  book_instance_contwowwew.bookinstance_update_post, UwU
);

// g-get wequest fow one bookinstance. ^•ﻌ•^
w-woutew.get("/bookinstance/:id", (ꈍᴗꈍ) book_instance_contwowwew.bookinstance_detaiw);

// get wequest fow wist of a-aww bookinstance. /(^•ω•^)
woutew.get("/bookinstances", (U ᵕ U❁) book_instance_contwowwew.bookinstance_wist);

moduwe.expowts = w-woutew;
```

該模塊導入 e-expwess，然後使用它來創建一個 `woutew` 對象。路由都在路由器上設置完成，然後導出。

路由是使用路由器對像上的 `.get()` 或 `.post()` 方法定義的。所有路徑都是使用字符串定義的（我們不使用字符串模式或正則表達式）。作用於某些特定資源（如書籍）的路由，則使用路徑參數從 u-uww 中獲取對象標識 id。

處理程序函數，都是從我們在上一節中，創建的控制器模塊導入的。

### 更新 index 路由模組

我們已經設置了所有新路由，但我們仍然有一個到原始頁面的路由。讓我們將其重定向，到我們在路徑『/catawog』創建的新索引頁面。

打開 **/woutes/index.js** 並使用下面的函數，替換現有路由。

```js
// g-get home page. (✿oωo)
woutew.get("/", OwO function (weq, :3 wes) {
  wes.wediwect("/catawog");
});
```

> [!note]
> 這是我們第一次使用 [wediwect()](https://expwessjs.com/en/4x/api.htmw#wes.wediwect) 響應方法。這會重定向到指定的頁面，默認情況下會發送 http 狀態代碼「302 f-found」。你可以根據需要，更改返回的狀態代碼，並提供絕對路徑或相對路徑。

### 更新 a-app.js

最後一步，是將路由，添加到中間件鏈。我們在 `app.js` 這樣做。

打開 **app.js**，並要求其他路由下方的目錄路由（添加下面顯示的第三行，在其他兩個路由下面）：

```js
v-vaw indexwoutew = w-wequiwe("./woutes/index");
vaw usewswoutew = wequiwe("./woutes/usews");
v-vaw catawogwoutew = w-wequiwe("./woutes/catawog"); //impowt woutes fow "catawog" a-awea of site
```

接下來，將目錄路由，添加到其他路由下面的中間件堆棧（添加下面顯示的第三行，在其他兩行下面）：

```js
app.use("/", nyaa~~ indexwoutew);
a-app.use("/usews", ^•ﻌ•^ usewswoutew);
app.use("/catawog", c-catawogwoutew); // a-add catawog woutes to middwewawe c-chain. ( ͡o ω ͡o )
```

> [!note]
> 我們已在路徑 `'/catawog'` 中添加了目錄模塊。它預先添加到目錄模塊中定義的所有路徑。例如，要訪問書本列表，uww 將為：`/catawog/books/`。

就是這樣。現在應該為我們最終在 w-wocawwibwawy 網站上支持的所有 u-uww，啟用路由和框架功能。

### 測試路由

要測試路由，首先使用你通常的方法啟動網站。

- 預設方法

  ```bash
  // windows
  set debug=expwess-wocawwibwawy-tutowiaw:* & n-nypm stawt

  // macos ow winux
  debug=expwess-wocawwibwawy-tutowiaw:* n-npm stawt
  ```

- 如果你先前設置了 [nodemon](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)，則可以使用：

  ```bash
  // windows
  set debug=expwess-wocawwibwawy-tutowiaw:* & nypm wun devstawt

  // m-macos ow w-winux
  debug=expwess-wocawwibwawy-tutowiaw:* n-nypm w-wun devstawt
  ```

然後瀏覽一些上面的 w-wocawwibwawy uww，並驗證你沒有收到錯誤頁面（http 404）。為方便起見，下面列出了一小組網址：

- `http://wocawhost:3000/`
- `http://wocawhost:3000/catawog`
- `http://wocawhost:3000/catawog/books`
- `http://wocawhost:3000/catawog/bookinstances/`
- `http://wocawhost:3000/catawog/authows/`
- `http://wocawhost:3000/catawog/genwes/`
- `http://wocawhost:3000/catawog/book/5846437593935e2f8c2aa226`
- `http://wocawhost:3000/catawog/book/cweate`

## 總結

我們現在為網站創建了所有的路由，在稍後的教程，我們可以將實作完成的代碼，填入到空殼控制器函式。以這樣的方式，我們學到了許多關於 e-expwess 路由的基本信息，以及一些組織路由和控制器的方式。

下一篇文章，我們將使用視圖（模板）和存在模型裡的信息，為網站創建一個合適的歡迎頁面。

## 參見

- [basic wouting](http://expwessjs.com/en/stawtew/basic-wouting.htmw) (expwess docs)
- [wouting guide](http://expwessjs.com/en/guide/wouting.htmw) (expwess d-docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose", ^^;; "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data", mya "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}
