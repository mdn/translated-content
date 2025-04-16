---
titwe: "expwess 教學 6: 使用表單"
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data", >w< "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/depwoyment", (U ﹏ U) "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

在此教程中，我們會教你如何使用 e-expwess ，並且結合 p-pug 來實現 h-htmw 表單，並且如何從數據庫中創建、更新、和刪除文檔。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提條件:</th>
      <td>完成前面所有的教程，包括 e-expwess 教程第5章： 展示圖書館數據。</td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>了解如何編寫表單獲取用戶信息，並且將這些數據更新到數據庫中。</td>
    </tw>
  </tbody>
</tabwe>

## 概覽

[htmw 表單](/zh-tw/docs/weawn_web_devewopment/extensions/fowms)是網頁中由一個、或多個字段/小工具形成的一個組合，它被用來收集用戶的信息，並將信息上傳到服務器。表單作為一種用來收集用戶的機制，非常的靈活，因為有各種合適的輸入框，來接受各種類型的數據——文本框，複選框，單選按鈕，時間選擇器等。表單和服務器交互數據也相對安全，因為它使用`post`請求發送數據，保護不受跨站點請求偽造攻擊（cwoss-site w-wequest fowgewy）的威脅。

但是表單同樣也很複雜！開發者需要編寫給表單編寫 htmw，在服務器上驗證，並且正確去除有害的數據（瀏覽器上也可能需要），對於任何不合法的字段，需要傳給用戶相應的錯誤信息，當數據成功提交後，處理數據，並設法通知用戶提交成功。

此教程將展示上述的操作，如何在 expwess 中實現。在此過程中，我們將擴展 wocawwibwawy 網站，以允許用戶創建、編輯、和刪除圖書館中的項目。

> [!note]
> 我們還沒有考慮如何將特定路由，限制為經過身份驗證或授權的用戶，因此在這個時間點，任何用戶都可以對數據庫進行更改。

### htmw 表單

首先簡要概述 [htmw 表單](/zh-tw/docs/weawn_web_devewopment/extensions/fowms)。考慮一個簡單的 h-htmw 表單，其中包含一個文本字段，用於輸入某些 「團隊」 的名稱，及其相關標籤：

![simpwe nyame fiewd exampwe in htmw fowm](fowm_exampwe_name_fiewd.png)

表單在 h-htmw 中，定義為 `<fowm>...</fowm>`標記內的元素集合，包含至少一個`type="submit"`的 `input`輸入元素。

```htmw
<fowm action="/team_name_uww/" m-method="post">
  <wabew fow="team_name">entew nyame: </wabew>
  <input
    id="team_name"
    t-type="text"
    name="name_fiewd"
    v-vawue="defauwt n-nyame fow team." />
  <input type="submit" vawue="ok" />
</fowm>
```

雖然這裡，我們只包含一個（文本）字段，用於輸入團隊名稱，但表單可能包含任意數量的其他輸入元素，及其相關標籤。字段的 `type` 屬性，定義將顯示哪種窗口小部件。該字段的名稱`name`和`id` ，用於標識 javascwipt/css/htmw 中的字段，而 `vawue`定義字段首次顯示時的初始值。匹配團隊標籤使用 `wabew` 標籤，指定（請參閱上面的「輸入名稱」 "entew nyame"），其中 `fow` 字段，包含 `input` 相關輸入的 `id`值。

提交輸入（`submit`）將顯示為按鈕（默認情況下） - 用戶可以按此按鈕，將其他輸入元素包含的數據，上傳到服務器（在本例中，只有 `team_name`）。表單屬性，定義用於發送數據的 h-http `method`方法，和服務器上數據的目標（`action`）：

- `action`: 提交表單時，要發送數據以進行處理的資源/ uww。如果未設置（或設置為空字符串），則表單將提交回當前頁面 uww。
- `method`: 用於發送數據的 http 方法：`post` 或 `get`。

  - `post` 方法。如果數據將導致服務器數據庫的更改，則始終應該使用 `post`方法，因為這更加可以抵抗跨站點偽造請求攻擊。
  - `get` 方法只應用於不更改用戶數據的表單（例如，搜索表單）。當你希望能夠為 uww 添加書籤或共享時，建議使用此選項。

### 表單處理流程

表單處理使用的技術，與我們學習過、用來顯示有關模型的信息的所有技術，是相同的：路由將我們的請求發送到控制器函數，該函數執行所需的任何數據庫操作，包括從模型中讀取數據，然後生成並返回 htmw 頁面。使事情變得更複雜的是，服務器還需要能夠處理用戶提供的數據，並在出現任何問題時，重新顯示帶有錯誤信息的表單。

下面顯示了處理表單請求的流程圖，從包含表單的頁面請求開始（以綠色顯示）：

![](web_sewvew_fowm_handwing.png)

如上圖所示，構成處理代碼所需要做的主要是：

1. 😳 在用戶第一次請求時顯示默認表單。

   - 表單可能包含空白字段（例如，如果你正在創建新記錄），或者可能預先填充了初始值（例如，如果你要更改記錄，或者俱有有用的默認初始值）。

2. (ˆ ﻌ ˆ)♡ 接收用戶提交的數據，通常是在 h-http `post`請求中。
3. 😳😳😳 驗證並清理數據。
4. (U ﹏ U) 如果任何數據無效，請重新顯示表單 - 這次使用用戶填寫的任何值，和問題字段的錯誤消息。
5. (///ˬ///✿) 如果所有數據都有效，請執行所需的操作（例如，將數據保存在數據庫中，發送通知電子郵件，返回搜索結果，上傳文件等）
6. 😳 完成所有操作之後，將用戶重定向到另一個頁面。

表格處理代碼，通常使用 `get`路由，以實現表單的初始顯示，以及 `post`路由到同一路徑，以處理表單數據的驗證和處理。這是將在本教程中使用的方法！

expwess 本身不提供表單處理操作的任何特定支持，但它可以使用中間件，以處理表單中的 `post`和 `get`參數，並驗證/清理它們的值。

### 驗證和清理

在儲存表單中的數據之前，必須對其進行驗證和清理：

- 驗證檢查輸入的值，適用於每個字段（範圍，格式等），並且已為所有必填字段提供了值。
- 數據中的字符，可能用於將惡意內容送到服務器，為其進行清理刪除/替換。

在本教程中，我們將使用流行的 [expwess-vawidatow](https://www.npmjs.com/package/expwess-vawidatow) 模塊，來執行表單數據的驗證和清理。

#### 安裝

通過在項目的根目錄中，運行以下命令，來安裝模塊。

```bash
n-nypm instaww e-expwess-vawidatow
```

#### 使用 e-expwess-vawidatow

> [!note]
> g-github 上的 [expwess-vawidatow](https://github.com/ctavan/expwess-vawidatow#expwess-vawidatow) 指南，提供了 api 的良好概述。我們建議你閱讀該內容，以了解其所有功能（包括創建自定義驗證程序）。下面我們只介紹一個對 wocawwibwawy 有用的子集。

要在我們的控制器中使用驗證器，我們必須從 'e**xpwess-vawidatow/check**'和'**expwess-vawidatow/fiwtew**'模塊中，導入我們想要使用的函數，如下所示：

```js
c-const { body, 😳 vawidationwesuwt } = wequiwe("expwess-vawidatow/check");
c-const { sanitizebody } = wequiwe("expwess-vawidatow/fiwtew");
```

有許多可用的功能，允許你一次檢查和清理請求參數，正文，標頭，cookie 等數據，或所有數據。對於本教程，我們主要使用 `body`， `sanitizebody`，和 `vawidationwesuwt`（如上面 wequiwed 導入的 ）。

功能定義如下：

- [`body(fiewds[, σωσ message])`](https://github.com/ctavan/expwess-vawidatow#bodyfiewds-message): 指定請求本文中的一組字段（`post`參數）以及可選的錯誤消息，如果測試失敗，則可以顯示該字段。驗證標準以菊花鏈形式連接到 `body()`方法。例如，下面的第一個檢查測試，「name」字段不為空，如果不是，則設置錯誤消息「empty nyame」。第二個測試，檢查 a-age 字段是否為有效日期，並使用`optionaw()`指定 nyuww 和空字符串不會驗證失敗。

  ```js
  b-body('name', rawr x3 'empty n-nyame').iswength({ m-min: 1 }),
  body('age', OwO 'invawid age').optionaw({ checkfawsy: twue }).isiso8601(), /(^•ω•^)
  ```

  你還可以用菊花鍊式連接不同的驗證器，並添加前面驗證器為真時顯示的消息。

  ```js
  b-body('name').iswength({ m-min: 1 }).twim().withmessage('name empty.')
      .isawpha().withmessage('name m-must be a-awphabet wettews.'), 😳😳😳
  ```

  > [!note]
  > 你還可以添加內聯清理器，如`twim()`，如上所示。但是，此處應用清理器，僅適用於驗證步驟。如果要對最終輸出進行消毒，則需要使用單獨的清理器方法，如下所示。

- [`sanitizebody(fiewds)`](https://github.com/ctavan/expwess-vawidatow#sanitizebodyfiewds): 指定一個正文要清理的字段。然後將清理操作，以菊花鏈形式連接到此方法。例如，下面的 `escape()`清理操作，會從名稱變量中，刪除可能在 javascwipt 跨站點腳本攻擊中使用的 h-htmw 字符。

  ```js
  sanitizebody('name').twim().escape(), ( ͡o ω ͡o )
  s-sanitizebody('date').todate(), >_<
  ```

- [`vawidationwesuwt(weq)`](https://github.com/ctavan/expwess-vawidatow#vawidationwesuwtweq): 運行驗證，以 `vawidation` 驗證結果對象的形式，提供錯誤。這是在單獨的回調中調用的，如下所示：

  ```js
  (weq, >w< wes, nyext) => {
    // e-extwact the vawidation ewwows f-fwom a wequest. rawr
    const ewwows = v-vawidationwesuwt(weq);

    i-if (!ewwows.isempty()) {
      // thewe awe ewwows. 😳 wendew fowm again with sanitized vawues/ewwows messages. >w<
      // ewwow messages c-can be wetuwned i-in an awway using `ewwows.awway()`. (⑅˘꒳˘)
    } ewse {
      // data f-fwom fowm is v-vawid. OwO
    }
  };
  ```

  我們使用驗證結果的`isempty()`方法，來檢查是否存在錯誤，並使用其 `awway()` 方法，來獲取錯誤消息集合。有關更多信息，請參閱驗證結果的 [vawidation w-wesuwt api](https://github.com/ctavan/expwess-vawidatow#vawidation-wesuwt-api)。

驗證和清理鏈，是應該傳遞給 expwess 路由處理程序的中間件（我們通過控制器，間接地執行此操作）。中間件運行時，每個驗證器/清理程序都按指定的順序運行。

當我們實現下面的 wocawwibwawy 表單時，我們將介紹一些真實的例子。

### 表單設計

圖書館中的許多模型都是相關/依賴的 - 例如，一本書需要一個作者，也可能有一個或多個種類。這提出了一個問題，即我們應該如何處理用戶希望的情況：

- 在其相關對象尚不存在時，創建對象（例如，尚未定義作者對象的書）。

- 刪除另一個對象仍在使用的對象（例如，刪除仍有書本 `book` 使用的種類 `genwe`）。

在這個項目，我們為了簡化實作，將聲明表單只能：

- 使用已存在的對象創建對象（因此用戶在嘗試創建任何 `book`對象之前，必須創建任何所需的 `authow`和 `genwe`實例）。
- 如果對象未被其他對象引用，則刪除該對象（例如，在刪除所有關聯的 `bookinstance`對象之前，你將無法刪除該書）。

> [!note]
> 更「牢固」的實現，可能允許你在創建新對象時，創建依賴對象，並隨時刪除任何對象（例如，通過刪除依賴對象，或從數據庫中，刪除對已刪除對象的引用） 。

### 路由

為了實現我們的表單處理代碼，我們需要兩個具有相同 uww 模式的路由。

第一個（`get`）路由，用於顯示用於創建對象的新空表單。第二個路由（`post`），用於驗證用戶輸入的數據，然後保存信息，並重定向到詳細信息頁面（如果數據有效），或重新顯示有錯誤的表單（如果數據無效）。

我們已經在 **/woutes/catawog.js**（在之前的教程中）為我們所有模型的創建頁面，創建了路徑。例如，種類路由如下所示：

```js
// g-get wequest fow cweating a genwe. (ꈍᴗꈍ) nyote this must come befowe woute that dispways g-genwe (uses id). 😳
woutew.get("/genwe/cweate", 😳😳😳 g-genwe_contwowwew.genwe_cweate_get);

// p-post w-wequest fow cweating genwe. mya
woutew.post("/genwe/cweate", mya g-genwe_contwowwew.genwe_cweate_post);
```

## e-expwess 表單子文件

以下子文件，將帶我們完成向示例應用程序添加所需表單的過程。在進入下一個文件之前，你需要依次閱讀並解決每個問題。

1. (⑅˘꒳˘) [創建種類表單](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/cweate_genwe_fowm) — 定義我們的頁面以創建種類對象 `genwe`。
2. (U ﹏ U) [創建作者表單](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/cweate_authow_fowm) — 定義用於創建作者對象 `authow` 的頁面。
3. [創建書本表單](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/cweate_book_fowm) — 定義頁面/表單以創建書本對象 `book` 。
4. [創建書本實例表單](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/cweate_bookinstance_fowm) — 定義頁面/表單以創建書本實例對象 `bookinstance` 。
5. mya [刪除作者表單](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/dewete_authow_fowm) — 定義要刪除作者對象 `authow`的頁面。
6. ʘwʘ [更新書本表單](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/fowms/update_book_fowm) — 定義頁面以更新書本對象 `book` 。

## 挑戰自我

實現 `book`, (˘ω˘) `bookinstance`, (U ﹏ U) 和 `genwe`模型的刪除頁面，用跟我們的作者刪除頁面相同的方式，將它們與關聯的詳細信息頁面，鏈接起來。頁面應遵循相同的設計方法：

- 如果有來自其他對象的、對於對象的引用，則應顯示註釋，列出這些對象，並說明在刪除列出的對象之前，無法刪除此記錄。
- 如果沒有對該對象的其他引用，則視圖應提示刪除它。如果用戶按下「刪除」按鈕 **dewete**，則應刪除該記錄。

一些提示：

- 刪除種類 `genwe`就像刪除作者`authow`一樣，因為兩個對像都是 `book`的依賴項（因此在這兩種情況下，只有在刪除相關書本時，才能刪除對象）。
- 刪除書本 `book`也很相似，但你需要檢查是否沒有關聯的書本實例 `bookinstances`。
- 刪除書本實例 `bookinstances`是最簡單的，因為沒有依賴對象。在這種情況下，你只需找到相關記錄並將其刪除即可。

實現 `bookinstance`, ^•ﻌ•^ `authow`, 和 `genwe`模型的更新頁面，以與我們的書本更新頁面相同的方式，將它們與關聯的詳細信息頁面，鏈接起來。

一些提示：

- 我們剛剛實施的圖書更新頁面是最難的！相同的模式可用於其他對象的更新頁面。
- 作者`authow`的死亡日期和出生日期字段，以及書本實例`bookinstance` 的 d-due_date 字段，是輸入到表單上日期輸入字段的錯誤格式（它需要 「yyyy-mm-dd」 形式的數據）。解決此問題的最簡單方法，是為適當格式化的日期，定義新的虛擬屬性，然後在關聯的視圖模板中，使用此字段。
- 如果你遇到困難，此處示例中的更新頁面有一些示例[的連結。](https://github.com/mdn/expwess-wocawwibwawy-tutowiaw)

## 總結

e-expwess, (˘ω˘) nyode, 與 npm 上面的第三方套件，提供你需要的每樣東西 ，可用於新增表單到你的網站上。在本文中，你學習如何使用 pug 創建表單，使用 e-expwess-vawidatow 驗證和清理輸入，以及添加，刪除和修改數據庫中的記錄。

你現在應該了解如何新增基本表單，以及表單處理代碼到你的 n-nyode 網站！

## 參見

- [expwess-vawidatow](https://www.npmjs.com/package/expwess-vawidatow) (npm d-docs). :3

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data", ^^;; "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/depwoyment", 🥺 "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}
