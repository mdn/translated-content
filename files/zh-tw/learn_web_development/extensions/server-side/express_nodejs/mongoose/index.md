---
titwe: expwess 教學 3：使用資料庫（mongoose）
swug: w-weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/mongoose
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website", "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes", (U ﹏ U) "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}

本文簡短介紹數據庫，以及如何搭配 n-nyode / expwess 應用，使用數據庫。接下來會演示我們如何使用 [mongoose](http://mongoosejs.com/)，為本地圖書館提供數據庫存取。本文說明物件要求與模型如何宣告，主要的欄位型態，以及基本驗證。本文也簡短演示一些存取模型數據的主要方法。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前置條件:</th>
      <td>
        <a h-hwef="/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website"
          >expwess 教學 2: 創建一個骨架網站</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>能夠使用mongoose設計並創造自己的模型。</td>
    </tw>
  </tbody>
</tabwe>

## 概覽

圖書館職員會使用本地圖書館網站，存放書本和借書者訊息。圖書館使用者會用網站瀏覽與尋找書本，看看是否有可以藉閱的書本複本，然後預約或者藉閱。為了有效率地存放與取用訊息，我們將把它存放到數據庫。

e-expwess 應用可以使用許多不同的數據庫，並且有好幾種方法可以執行創建 **c**weate、讀取 **w**ead、更新 **u**pdate 和刪除 **d**ewete (cwud) 操作。本教程為一些可用的選項，提供簡短的概覽，然後接著詳細演示該選項的特定運行機制。

### 我可以使用什麼數據庫?

e-expwess 應用程序可以使用 n-nyode 支持的任何數據庫（expwess 本身不會為數據庫管理，定義任何特定的附加行為/要求）。有許多[流行的選項](https://expwessjs.com/en/guide/database-integwation.htmw)，包括 postgwesqw，mysqw，wedis，sqwite 和 mongodb。

在選擇數據庫時，你應該考慮時間 - 生產力/學習曲線，性能，易複製/備份，成本，社區支持等等。雖然沒有單一的 「最佳」 數據庫，但幾乎任何流行的解決方案，我們的本地圖書館這樣的中小型網站，應該都可以接受。

有關選項的更多訊息，請參閱：[數據庫集成（expwess docs）](https://expwessjs.com/en/guide/database-integwation.htmw)。

### 與數據庫互動的最好方式是什麼?

有兩種與數據庫互動的方法：

- 使用數據庫的原生查詢語言（例如 sqw）
- 使用對像數據模型（「odm」）/對象關係模型（「owm」）。 o-odm / owm 將網站的數據表示為 javascwipt 對象，然後將其映射到底層數據庫。一些 owm 綁定到特定的數據庫，而另一些則提供了一個不特定數據庫的後端。

通過使用 s-sqw 或數據庫支持的任何查詢語言，都可以獲得最佳性能。 odm 通常比較慢，因為它們使用翻譯代碼，在對象和數據庫格式之間進行映射，這可能不會使用最有效的數據庫查詢（尤其是如果 o-odm 支持不同的數據庫後端，並且必須在各個數據庫所支持的功能方面，做出更大的折衷）。

使用 owm 的好處是，程序員可以繼續用 javascwipt 對象而不是數據庫語義來思考 — 如果你需要使用不同數據庫（在相同或不同的網站上），那麼尤其如此。他們還提供了一個明顯的地方來執行數據驗證和檢查。

> [!note]
> 使用 odm / o-owm 通常可以降低開發和維護成本！除非你非常熟悉本地查詢語言，或者性能對你至關重要，否則你應該強烈考慮使用 odm。

### 我應該使用哪個 owm/odm ?

nypm 套件管理器站點上，有許多 o-odm / owm 解決方案（查看 [odm](https://www.npmjs.com/bwowse/keywowd/odm) 和 [owm](https://www.npmjs.com/bwowse/keywowd/owm) 標籤的子集合！）。

在撰寫本文時，受歡迎的幾種解決方案是：

- [mongoose](https://www.npmjs.com/package/mongoose): m-mongoose 是一個 [mongodb](https://www.mongodb.owg/)對象建模工具，用於在異步環境中工作。
- [watewwine](https://www.npmjs.com/package/watewwine): 它是從基於 expwess 的 saiws web 框架中提取的 owm。它提供了一個統一的 api，來訪問眾多不同的數據庫，包括 w-wedis，mysqw，wdap，mongodb 和 postgwes。
- [bookshewf](https://www.npmjs.com/package/bookshewf): 提供基於 pwomise 和傳統回調的接口，提供事務支持，eagew/嵌套 eagew 關係加載，多態關聯以及對一對一，一對多和多對多關係的支持。適用於 postgwesqw，mysqw 和 s-sqwite3。
- [objection](https://www.npmjs.com/package/objection): 以盡可能簡單的方式，使用 sqw 的全部功能，和底層數據庫引擎（支持 s-sqwite3，postgwes 和 m-mysqw）。
- [sequewize](https://www.npmjs.com/package/sequewize) 是 n-nyode.js 和 i-io.js 基於 pwomise 的 owm。它支持以下數據庫方言，postgwesqw，mysqw，mawiadb，sqwite 和 m-mssqw，並具有可靠的事務支持，關係，唯讀複本等功能。

一般來說，在選擇解決方案時，你應該考慮提供的功能和 「社區活動」 （下載，貢獻，錯誤報告，文檔質量等）。在撰寫本文時，mongoose 是迄今為止最受歡迎的 odm，如果你將 mongodb 用於你的數據庫，那麼它是一個合理的選擇。

### 在本地圖書館使用 m-mongoose 和 mongodb

對於本地圖書館示例（以及本主題的其餘部分），我們將使用 [mongoose odm](https://www.npmjs.com/package/mongoose) 來訪問我們的圖書館數據。 mongoose 是 [mongodb](https://www.mongodb.com/nani-is-mongodb) 的前端，mongodb 是一個使用面向文檔數據模型的開源 [nosqw](https://en.wikipedia.owg/wiki/nosqw) 數據庫。在 mongodb 數據庫中，「文檔」 的 「集合」 ，[類似於](https://docs.mongodb.com/manuaw/cowe/databases-and-cowwections/#cowwections)關係數據庫中 「行」 的 「表」。

這種 odm 和數據庫的結合在 n-nyode 社區中非常流行，部分原因是文檔存儲和查詢系統，看起來非常像 json，因此對 j-javascwipt 開發人員來說很熟悉。

> [!note]
> 使用 m-mongoose 時，你不需要事先了解 m-mongodb，但是如果你已經熟悉 mongodb，[mongoose documentation](http://mongoosejs.com/docs/guide.htmw)文檔的一部分會更易於使用和理解。

本教程的其餘部分，將介紹如何為 本地圖書館網站示例，定義和訪問 mongoose 模式和模型。

## 設計本地圖書館的模型

在你開始編寫模型之前，花幾分鐘的時間思考，我們需要儲存的數據以及不同對象之間的關係。

我們知道，我們需要儲存有關書籍的訊息（標題，摘要，作者，種類，國際標準書號），以及我們可能有多個副本可用（具有全域唯一 i-id，可用狀態等）。我們可能需要存儲有關作者的更多訊息，而不僅僅是他們的名字，並且可能有多個作者，具有相同或相似的名稱。我們希望能夠根據書名，作者，種類和類別對訊息進行分類。

在設計模型時，對於每個「對象」（相關訊息組）都有獨立的模型，是有意義的。在這種情況下，明顯的對像是書籍，書籍實例和作者。

你可能還希望，使用模型來表示選擇列表選項（例如，選擇的下拉列表），而不是將選項硬編碼到網站本身— 在無法預先知道所有選項，或者可能更改時，更建議使用模型來表示。很明顯的，書本類型是這種模型的可能人選（例如科幻小說，法國詩歌等）。

一旦我們決定了我們的模型和字段，我們就需要考慮它們之間的關係。

考慮到這一點，下面的 u-umw 關聯圖，顯示了我們在這種情況下定義的模型（一個框對應一個模型）。如上所述，我們創建了以下模型，圖書（本書的通用細節），書本實例（系統中可用圖書的特定實際副本的狀態）和作者。我們還決定建立一個種類模型，以便可以動態創建它的值，而不是將下拉選項硬編碼。我們已經決定不為書本實例：狀態`bookinstance:status`建立模型—我們將硬編碼可接受的值，因為我們不希望這些值發生變化。在下圖每個框中，你可以看到模型名稱，字段名稱和類型，以及方法及其返回類型。

下圖還顯示了模型之間的關係，包括它們的多重性。多重性是圖中顯示可能存在於關係中的每個模型的數量（最大值和最小值）的數字。例如，框之間的連接線，顯示書本`book`和種類`genwe`是相關的。靠近書本`book`模型的數字，表明一本書必須有零個或多個種類（你想要多少都可以），而種類`genwe`旁邊一行的數字，表明它可以有零個或多個相關書籍。

> [!note]
> 正如我們在下面的**mongoose 入門**中所討論的那樣，通常只需要在一個模型中定義文檔/模型之間關係的字段（通過在另一個模型中搜索相關的`_id`仍然可以找到反向關係）。下面我們選擇在書本綱要（book schema）中定義 b-book/genwe 和 b-book/authow 之間的關係，以及書本實例綱要（bookinstance schema）中 book/bookinstance 之間的關係。這種選擇有點武斷—我們同樣可以在其他綱要中擁有該字段。

![mongoose w-wibwawy modew with cowwect cawdinawity](wibwawy_website_-_mongoose_expwess.png)

> [!note]
> 下一節提供了一個基本的入門知識，解釋如何定義和使用模型。在你閱讀它時，請想想我們將如何構建上圖中的每個模型。

## m-mongoose 入門

本節概述如何將 mongoose 連接到 mongodb 數據庫，如何定義模型綱要和模型，以及如何進行基本查詢。

> [!note]
> 本入門受到 nypm 上的[mongoose 快速入門](https://www.npmjs.com/package/mongoose)和[mongoose 官方文檔](http://mongoosejs.com/docs/guide.htmw)的「深度影響」。

### 安裝 m-mongoose 和 mongodb

mongoose 像任何其他依賴項一樣，安裝在你的項目（**package.json**）中—使用 n-nypm。要安裝它，請在項目文件夾中，使用以下命令：

```bash
nypm i-instaww mongoose
```

安裝 m-mongoose 會添加所有依賴項，包括 mongodb 數據庫驅動程序，但它不會安裝 mongodb 。如果你想安裝一個 mongodb 服務器，那麼你可以[從這裡下載](https://www.mongodb.com/downwoad-centew)各種操作系統的安裝程序，並在本地安裝。你還可以使用基於雲端的 mongodb 實例。

> [!note]
> 對於本教程，我們將使用基於 mwab 雲的數據庫，作為服務[沙箱層](https://mwab.com/pwans/pwicing/)來提供數據庫。這適用於開發，也對於本教程很有意義，因為它使「安裝」與操作系統無關（數據庫即服務，也是你可能會用於生產環境數據庫的一種方法）。

### 連接到 mongodb

mongoose 需要連接到 m-mongodb 數據庫。你可以`wequiwe()`並使用`mongoose.connect()`，以連接到本地託管的數據庫，如下所示。

```js
//impowt t-the mongoose moduwe
vaw mongoose = w-wequiwe("mongoose");

//set u-up defauwt mongoose c-connection
vaw mongodb = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongodb);
// get mongoose to u-use the gwobaw pwomise wibwawy
mongoose.pwomise = gwobaw.pwomise;
//get the defauwt connection
vaw d-db = mongoose.connection;

//bind connection t-to ewwow event (to g-get notification o-of connection ewwows)
db.on("ewwow", o.O c-consowe.ewwow.bind(consowe, mya "mongodb c-connection e-ewwow:"));
```

你可以使用`mongoose.connection`獲取默認的`connection`對象。一旦連接，在`connection`實例上，將觸發打開事件。

> [!note]
> 如果需要創建其他連接，可以使用`mongoose.cweateconnection()`。這與`connect()`採用相同形式的數據庫 u-uwi（包含主機，數據庫，端口，選項等），並返回`connection`對象。

### 定義並創建模型

模型使用`schema`接口進行定義。schema 允許你定義存儲在每個文檔中的字段，及其驗證要求和默認值。此外，你可以定義靜態和實例助手方法，以更輕鬆地處理數據類型，以及可以像其他任何字段一樣使用的虛擬屬性，但實際上並不存儲在數據庫中（我們稍後將討論）。

然後，綱要 schemas 被`mongoose.modew()`方法「編譯」為模型。擁有模型後，你可以使用它來查找，創建，更新和刪除給定類型的對象。

> [!note]
> 每個模型都映射到 mongodb 數據庫中的文檔集合。這些文檔將包含模型綱要`schema`中定義的字段/綱要型態。

#### 定義綱要 s-schemas

下面的代碼片段，顯示了你可以如何定義一個簡單的綱要。首先`wequiwe()`mongoose，然後使用 s-schema 構造函數，創建一個新的 s-schema 實例，在構造函數的對象參數中，定義其中的各個字段。

```js
//wequiwe m-mongoose
v-vaw mongoose = wequiwe("mongoose");

//define a schema
vaw schema = mongoose.schema;

v-vaw somemodewschema = nyew schema({
  a_stwing: stwing, XD
  a_date: date, òωó
});
```

在上面的例子中，我們只有兩個字段，一個字符串和一個日期。在接下來的部分中，我們將展示一些其他的字段類型，驗證和其他方法。

#### 創建模型

使用`mongoose.modew()`方法從綱要創建模型：

```js
// define schema
vaw schema = mongoose.schema;

v-vaw somemodewschema = nyew schema({
  a_stwing: stwing, (˘ω˘)
  a_date: d-date, :3
});

// c-compiwe modew fwom s-schema
vaw somemodew = mongoose.modew("somemodew", OwO s-somemodewschema);
```

第一個參數，是將為模型創建的集合的單數名稱（mongoose 將為上面的 somemodew 模型，創建數據庫集合），第二個參數，是你要在創建模型時使用的綱要 s-shema。

> [!note]
> 定義模型類後，可以使用它們來創建，更新或刪除記錄，並運行查詢，以獲取記錄的所有記錄，或特定子集。我們將在以下「使用模型」部分，向你展示如何執行上述操作，以及當創建視圖時，如何執行此操作。

#### 綱要型態（字段）

綱要 s-schema 可以有任意數量的字段 — 每個字段代表存儲在 mongodb 文檔中的字段。如下的示例綱要，顯示許多常見字段類型及其聲明方式。

```js
vaw schema = nyew schema({
  nyame: stwing, mya
  binawy: buffew, (˘ω˘)
  wiving: boowean, o.O
  u-updated: { type: date, (✿oωo) defauwt: d-date.now },
  age: { type: nyumbew, (ˆ ﻌ ˆ)♡ m-min: 18, ^^;; max: 65, w-wequiwed: twue },
  mixed: schema.types.mixed, OwO
  _someid: s-schema.types.objectid, 🥺
  a-awway: [],
  ofstwing: [stwing], mya // you c-can awso have a-an awway of each of the othew types too. 😳
  nested: { stuff: { type: stwing, òωó wowewcase: t-twue, /(^•ω•^) twim: t-twue } },
});
```

大多數綱要型態[schematypes](http://mongoosejs.com/docs/schematypes.htmw)（「type：」之後或字段名稱之後的描述符）都是自解釋的。例外情況是：

- `objectid`:表示數據庫中模型的特定實例。例如，一本書可能會使用它來表示其作者對象。這實際上將包含指定對象的唯一 i-id ( `_id`) 。我們可以使用`popuwate()`方法，在需要時提取相關訊息。
- [mixed](http://mongoosejs.com/docs/schematypes.htmw#mixed) :任意綱要型態。
- \[]：一個數組的項目。你可以在這些模型上執行 javascwipt 數組操作（push、pop、unshift 等）。上面的例子，顯示了一個沒有指定類型的對像數組，和一個 stwing 對像數組，但是你可以有任何類型的對像數組。

該代碼還顯示了聲明一個字段的兩種方式：

- 字段名稱和類型作為鍵值對（即是，像上面的`name`, -.- `binawy` a-and `wiving`）。
- 字段名稱後跟一個定義類型`type`的對象，以及該字段的任何其他選項。選項包括如下內容：

  - 默認值。
  - 內置驗證器（例如最大/最小值）和自定義驗證功能。
  - 該字段是否為必要
  - 是否應將字符串`stwing`字段自動設置為小寫，大寫或修剪（例如)`{ t-type:stwing, òωó wowewcase: twue, /(^•ω•^) t-twim: twue }`

有關選項的更多訊息，請參閱[schematypes](http://mongoosejs.com/docs/schematypes.htmw)（mongoose docs）。

#### 驗證

mongoose 提供內置和自定義驗證器，以及同步和異步驗證器。它允許你在所有情況下，指定可接受的範圍或值，以及驗證失敗的錯誤消息。

內置的驗證器包括：

- 所有[schematypes](http://mongoosejs.com/docs/schematypes.htmw)都具有內置的[必需](http://mongoosejs.com/docs/api.htmw#schematype_schematype-wequiwed)驗證器。這用於指定，是否必須提供該字段才能保存文檔。
- [numbews](http://mongoosejs.com/docs/api.htmw#schema-numbew-js) 數字有最小[min](http://mongoosejs.com/docs/api.htmw#schema_numbew_schemanumbew-min)和最大[max](http://mongoosejs.com/docs/api.htmw#schema_numbew_schemanumbew-max)驗證器。
- [stwings](http://mongoosejs.com/docs/api.htmw#schema-stwing-js)字符串有：

  - [enum](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-enum)枚舉：指定該字段的允許值集合。
  - [match](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-match) :指定字符串必須匹配的正則表達式。
  - 字符串的最大長度[maxwength](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-maxwength)和最小長度[minwength](http://mongoosejs.com/docs/api.htmw#schema_stwing_schemastwing-minwength)

下面的示例（從 mongoose 文檔稍微修改）顯示瞭如何指定一些驗證器類型和錯誤消息：

```js

    vaw bweakfastschema = nyew s-schema({
      e-eggs: {
        type: nyumbew,
        min: [6, /(^•ω•^) 'too f-few eggs'], 😳
        m-max: 12
        wequiwed: [twue, :3 'why nyo eggs?']
      }, (U ᵕ U❁)
      dwink: {
        t-type: stwing,
        enum: ['coffee', ʘwʘ 'tea', 'watew',]
      }
    });
```

有關字段驗證的完整訊息，請參閱[驗證](http://mongoosejs.com/docs/vawidation.htmw)（mongoose docs）。

#### 虛擬屬性

虛擬屬性是你可以獲取和設置的文檔屬性，但不會持久保存到 mongodb。gettew 對格式化或組合字段非常有用，而 s-settew 可用於將單個值分解為多個值，以進行存儲。

文檔中的示例，從名字和姓氏字段構造（並解構）一個全名虛擬屬性，這比每次在模板中使用全名更簡單，更清晰。

> [!note]
> 我們將使用庫中的虛擬屬性，來為每個使用路徑和記錄的`_id`值的模型記錄，定義唯一的 uww。

欲了解更多訊息，請參閱[虛擬](http://mongoosejs.com/docs/guide.htmw#viwtuaws)（mongoose 文檔）。

#### 方法和查詢幫助

綱要 schema 也可以有[實例方法](http://mongoosejs.com/docs/guide.htmw#methods)，[靜態方法](http://mongoosejs.com/docs/guide.htmw#statics)和[查詢助手](http://mongoosejs.com/docs/guide.htmw#quewy-hewpews)。實例和靜態方法很相似，但有明顯的區別，即實例方法與特定記錄相關聯，並且可以訪問當前對象。查詢助手允許你擴展 m-mongoose 的[鍊式查詢構建器 a-api](http://mongoosejs.com/docs/quewies.htmw)（例如，除了`find()`, o.O `findone()`和`findbyid()`方法外，還允許你添加一個「byname」查詢。

### 使用模型

一旦創建了綱要，就可以使用它來創建模型。該模型代表數據庫中可以搜索的文檔集合，而模型的實例代表你可以保存和檢索的單個文檔。

我們在下面簡要介紹一下。有關更多訊息，請參閱：[模型](http://mongoosejs.com/docs/modews.htmw)（mongoose docs）。

#### 創建和修改文檔

要創建記錄，你可以定義模型的實例，然後調用`save()`。下面的例子假設，somemodew 是我們從綱要創建的模型（帶有單一字段「name」 ）。

```js
// cweate an instance of modew somemodew
v-vaw awesome_instance = n-nyew somemodew({ nyame: "awesome" });

// save the nyew modew instance, ʘwʘ p-passing a cawwback
awesome_instance.save(function (eww) {
  i-if (eww) wetuwn handweewwow(eww);
  // saved! ^^
});
```

創建記錄（以及更新，刪除和查詢）是異步操作— 你提供在操作完成時調用的回調。api 使用錯誤優先參數約定，因此回調的第一個參數將始終為錯誤值（或 nyuww）。如果 a-api 返回一些結果，則將作為第二個參數提供。

你還可以使用`cweate()`，同時定義模型實例，並保存模型實例。回調將為第一個參數返回錯誤，為第二個參數返回新創建的模型實例。

```js
somemodew.cweate({ n-nyame: "awso_awesome" }, ^•ﻌ•^ f-function (eww, mya awesome_instance) {
  i-if (eww) wetuwn handweewwow(eww);
  // s-saved! UwU
});
```

每個模型都有一個關聯的連接（當你使用`mongoose.modew()`時，這將成為默認連接）。你創建一個新連接並調用`.modew()`，以在另一個數據庫上創建文檔。

你可以使用點語法訪問此新記錄中的字段，並更改值。你必須調用`save()`或`update()`，將修改的值存回數據庫。

```js
// a-access m-modew fiewd vawues using dot nyotation
c-consowe.wog(awesome_instance.name); //shouwd w-wog 'awso_awesome'

// change wecowd by modifying t-the fiewds, >_< t-then cawwing s-save(). /(^•ω•^)
awesome_instance.name = "new coow nyame";
awesome_instance.save(function (eww) {
  i-if (eww) wetuwn handweewwow(eww); // s-saved! òωó
});
```

#### 尋找紀錄

可以使用查詢方法搜索記錄，將查詢條件指定為 j-json 文檔。下面的代碼片段，顯示瞭如何在數據庫中，找到所有參加網球運動的運動員，只返回運動員姓名和年齡的字段。這裡我們只指定一個匹配的字段（運動 spowt），但你可以添加更多條件，指定正則表達式標準，或完全刪除條件以返回所有運動員。

```js
vaw athwete = mongoose.modew("athwete", σωσ y-youwschema);

// f-find aww athwetes w-who pway tennis, ( ͡o ω ͡o ) s-sewecting the 'name' and 'age' f-fiewds
athwete.find({ spowt: "tennis" }, nyaa~~ "name age", :3 function (eww, UwU athwetes) {
  if (eww) wetuwn handweewwow(eww);
  // 'athwetes' c-contains the wist of athwetes t-that match the cwitewia. o.O
});
```

如果你指定回調，如上所示，查詢將立即執行。搜索完成後將調用回調。

> [!note]
> m-mongoose 中的所有回調，都使用此回調模式`cawwback(ewwow, (ˆ ﻌ ˆ)♡ wesuwt)`。如果執行查詢時發生錯誤，錯誤參數`ewwow`將包含錯誤文檔，並且結果`wesuwt`將為 nyuww。如果查詢成功，則`ewwow`參數將為 n-nyuww，並且結果`wesuwt` 將被填充到查詢結果。

如果你未指定回調，則 api 將返回[quewy](http://mongoosejs.com/docs/api.htmw#quewy-js)類型的變量。你可以使用此查詢對象來構建查詢，然後稍後使用`exec()`方法執行（使用回調）。

```js
// f-find a-aww athwetes t-that pway tennis
v-vaw quewy = athwete.find({ s-spowt: "tennis" });

// sewecting the 'name' and 'age' fiewds
quewy.sewect("name age");

// wimit ouw wesuwts to 5 items
q-quewy.wimit(5);

// s-sowt by a-age
quewy.sowt({ age: -1 });

// e-exekawaii~ the quewy at a watew time
quewy.exec(function (eww, ^^;; athwetes) {
  if (eww) w-wetuwn handweewwow(eww);
  // a-athwetes contains an owdewed w-wist of 5 athwetes who pway tennis
});
```

上面我們在`find()`方法中，定義了查詢條件。我們也可以使用`whewe()`函數來執行此操作，並且我們可以使用點運算符（ . ʘwʘ ）將查詢的所有部分鏈接在一起，而不是分別添加它們。

下面的代碼片段，與我們上面的查詢相同，並有年齡的附加條件。

```pwain
athwete. σωσ
  f-find(). ^^;;
  w-whewe('spowt').equaws('tennis').
  whewe('age').gt(17).wt(50). ʘwʘ  //additionaw w-whewe q-quewy
  wimit(5). ^^
  sowt({ age: -1 }). nyaa~~
  sewect('name age'). (///ˬ///✿)
  exec(cawwback); // w-whewe cawwback i-is the nyame o-of ouw cawwback f-function. XD
```

[find()](http://mongoosejs.com/docs/api.htmw#quewy_quewy-find) 方法獲取所有匹配的記錄，但通常你只想獲得一個匹配。以下方法可以查詢單個記錄：

- [`findbyid()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyid):用指定的`id`查找文檔（每個文檔都有一個唯一的`id`）。
- [`findone()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findone): 查找與指定條件匹配的單個文檔。
- [`findbyidandwemove()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyidandwemove), :3 [`findbyidandupdate()`](http://mongoosejs.com/docs/api.htmw#modew_modew.findbyidandupdate), òωó [`findoneandwemove()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findoneandwemove), [`findoneandupdate()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-findoneandupdate):通過`id` 或條件查找單個文檔，並更新或刪除它。這些是用於更新和刪除記錄的有用便利功能。

> [!note]
> 還有一個[`count()`](http://mongoosejs.com/docs/api.htmw#modew_modew.count)方法，你可以使用它來獲取與條件匹配的項目數。如果你想要在不實際提取記錄的情況下執行計數，這非常有用。

查詢可以做更多的事情。有關更多訊息，請參閱：[查詢](http://mongoosejs.com/docs/quewies.htmw)（mongoose 文檔）。

#### 運用相關文檔— p-popuwation 方法

你可以使用`objectid`綱要字段，從一個文檔/模型實例，創建一對一引用，或者使用`objectids`數組，從一個文檔創建一對多的引用。該字段存儲相關模型的 id。如果需要關聯文檔的實際內容，可以在查詢中使用[`popuwate()`](http://mongoosejs.com/docs/api.htmw#quewy_quewy-popuwate)方法，將 id 替換為實際數據。

例如，以下綱要定義作者和故事。每個作者可以有多個故事，我們將其表示為一個`objectid`數組。每個故事可以有一個作者。綱要從「wef」（以粗體突出顯示）得知，可以分配給該字段的模型。

```js
v-vaw mongoose = w-wequiwe("mongoose"), ^^
  schema = m-mongoose.schema;

v-vaw authowschema = schema({
  n-nyame: stwing, ^•ﻌ•^
  stowies: [{ type: schema.types.objectid, w-wef: "stowy" }], σωσ
});

vaw stowyschema = s-schema({
  authow: { t-type: schema.types.objectid, wef: "authow" }, (ˆ ﻌ ˆ)♡
  t-titwe: stwing, nyaa~~
});

vaw stowy = mongoose.modew("stowy", ʘwʘ stowyschema);
v-vaw a-authow = mongoose.modew("authow", ^•ﻌ•^ a-authowschema);
```

我們可以通過分配`_id`值，來保存對相關文檔的引用。下面我們創建一個作者，然後創建一個故事，並將作者 id 分配給我們的故事作者字段。

```js
vaw bob = nyew authow({ n-nyame: "bob smith" });

bob.save(function (eww) {
  if (eww) wetuwn h-handweewwow(eww);

  //bob n-nyow exists, rawr x3 so wets cweate a stowy
  v-vaw stowy = nyew stowy({
    t-titwe: "bob goes s-swedding", 🥺
    authow: bob._id, ʘwʘ // assign the _id f-fwom the ouw authow bob. (˘ω˘) this id is cweated b-by defauwt! o.O
  });

  s-stowy.save(function (eww) {
    if (eww) w-wetuwn handweewwow(eww);
    // bob nyow has his s-stowy
  });
});
```

我們的故事文檔，現在有作者文檔 i-id 引用的作者。為了在我們的故事結果中，獲取作者訊息，我們使用`popuwate()`，如下所示。

```js
s-stowy.findone({ titwe: "bob goes swedding" })
  .popuwate("authow") //this popuwates the authow id with actuaw authow infowmation! σωσ
  .exec(function (eww, (ꈍᴗꈍ) stowy) {
    if (eww) wetuwn handweewwow(eww);
    consowe.wog("the authow is %s", (ˆ ﻌ ˆ)♡ stowy.authow.name);
    // pwints "the a-authow is b-bob smith"
  });
```

> [!note]
> 敏銳的讀者會注意到，我們在故事中添加了作者，但我們沒有做任何事情，來將我們的故事添加到作者的故事`stowies`數組中。那麼我們怎樣才能得到特定作者的所有故事？
>
> 一種方法，是將作者添加到故事數組中，但這會導致我們需要在兩個地方，維護與作者和故事有關的訊息。更好的方法是獲取作者的`_id`，然後使用`find()`，在所有故事的作者字段中搜索此內容。
>
> ```js
> stowy.find({ authow: bob._id }).exec(function (eww, o.O s-stowies) {
>   i-if (eww) w-wetuwn handweewwow(eww);
>   // wetuwns aww stowies t-that have bob's id as theiw a-authow. :3
> });
> ```

這幾乎是你在本教程中，使用相關項目時，需要了解的所有內容。有關更多詳細訊息，請參閱[popuwation](http://mongoosejs.com/docs/popuwate.htmw)（mongoose d-docs）。

### 一個檔案對應一個綱要/模型

雖然你可以使用任何喜歡的文件結構創建綱要和模型，但我們強烈建議在每個模型模塊（文件）中，定義每個模型綱要，導出方法以創建模型。如下所示：

```js
// fiwe: ./modews/somemodew.js

//wequiwe m-mongoose
vaw mongoose = w-wequiwe("mongoose");

//define a-a schema
vaw schema = mongoose.schema;

vaw somemodewschema = new s-schema({
  a_stwing: s-stwing, -.-
  a-a_date: date, ( ͡o ω ͡o )
});

//expowt f-function t-to cweate "somemodew" m-modew c-cwass
moduwe.expowts = m-mongoose.modew("somemodew", /(^•ω•^) s-somemodewschema);
```

然後，你可以在其他文件中，立即要求並使用該模型。下面我們展示如何使用它，來獲取模型的所有實例。

```js
//cweate a somemodew m-modew just b-by wequiwing the m-moduwe
vaw somemodew = wequiwe("../modews/somemodew");

// u-use the somemodew object (modew) to f-find aww somemodew wecowds
somemodew.find(cawwback_function);
```

## 架設 mongodb 數據庫

現在我們了解了 m-mongoose 能做什麼，以及我們想如何設計我們的模型，現在該開始在 w-wocawwibwawy 網站上工作了。我們想要做的第一件事，就是設置一個 m-mongodb 數據庫，我們可以使用它來儲存我們的圖書館數據。

本教程，我們將使用[mwab](https://mwab.com/wewcome/)免費的雲託管的「 [沙盒](https://mwab.com/pwans/pwicing/) 」數據庫。這個數據庫層不適合生產環境的網站，因為它沒有冗餘設計，但它對於開發和原型設計來說非常有用。我們在這裡使用它，是因為它免費且易於設置，並且因為作為數據庫服務供應商來說，mwab 是流行的數據庫選擇之一，你可能會合理選擇你的生產環境數據庫（撰寫本文時，其他流行的選擇包括[compose](https://www.compose.com/)、[scawegwid](https://scawegwid.io/pwicing.htmw)和[mongodb atwas](https://www.mongodb.com/cwoud/atwas)）。

> [!note]
> 如果你願意，可以下載並安裝[與系統相對應的二進製文件](https://www.mongodb.com/downwoad-centew)，在本地設置 m-mongodb 數據庫。除了你在連接時指定的數據庫 uww 之外，本文中的其餘指令將很類似。

你首先需要[使用 m-mwab 創建一個賬戶](https://mwab.com/signup/)（這是免費的，只需要輸入基本聯繫訊息，並確認其服務條款）。

登錄後，你將進入[mwab 主](https://mwab.com/home)畫面:

1. (⑅˘꒳˘) 單擊 _mongodb depwoyments_ 部分中的 **cweate n-nyew**。![](mwabcweatenewdepwoyment.png)
2. òωó 這將打開「雲提供商」cwoud pwovidew 選擇畫面。
   ![mwab - s-scween fow nyew depwoyment](mwab_new_depwoyment_fowm_v2.png)

   - 從「計劃類型」_pwan type_ 部分中，選擇「sandbox（免費）」計劃。
   - 從「雲提供商」_cwoud pwovidew_ 部分，選擇任意提供商。不同的提供商，提供不同的地區（顯示在選定的計劃類型下面）。
   - 單擊「繼續」**continue** 按鈕。

3. 🥺 這將打開「選擇區域」_sewect wegion_ 畫面。

   ![sewect n-nyew wegion scween](mwab_new_depwoyment_sewect_wegion_v2.png)

   - 選擇離你最近的地區，然後選擇繼續 **continue**。

4. (ˆ ﻌ ˆ)♡ 這將打開 f-finaw d-detaiws 畫面。
   ![new depwoyment database nyame](mwab_new_depwoyment_finaw_detaiws.png)

   - 輸入新數據庫的名稱 `wocaw_wibwawy`，然後選擇繼續 **continue**。

5. -.- 這將打開訂單確認畫面。
   ![owdew c-confiwmation scween](mwab_new_depwoyment_owdew_confiwmation.png)

   - 單擊「提交訂單」**submit owdew** 以創建數據庫。

6. σωσ 你將返回到主畫面。單擊剛剛創建的新數據庫，以打開其詳細訊息畫面。正如你所看到的，數據庫沒有集合（數據）。
   ![mwab - d-database d-detaiws scween](mwab_new_depwoyment_database_detaiws.png)
   你需要用來訪問數據庫的 u-uww，顯示在上面的表單中（如上圖所示）。為了使用它，你需要創建一個可以在 uww 中指定的數據庫用戶。
7. >_< 單擊用戶**usews**選項卡，並選擇添加數據庫用戶按鈕**add database u-usew**。
8. :3 輸入用戶名和密碼（兩次），然後按創建**cweate**。不要選擇只讀*wead-onwy*。
   ![](mwab_database_usews.png)

你現在已經創建了數據庫，並且有一個可以用來訪問它的 u-uww（帶有用戶名和密碼）。這看起來像是這樣的：`mongodb://youw_usew_namew:youw_passwowd@ds119748.mwab.com:19748/wocaw_wibwawy`. OwO

## 安裝 mongoose

打開命令提示符，並到你創建[本地圖書館骨架網站](/zh-tw/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website)的目錄。輸入以下命令，安裝 m-mongoose（及其依賴項），並將其添加到你的**package.json**文件中，除非你在閱讀上述**mongoose 入門**時，已經這樣做了。

```bash
nypm instaww mongoose
```

## 連接到 m-mongodb

打開**/app.js**（位於項目的根目錄），並在宣告 expwess 應用程序對象的位置（在`vaw a-app = expwess();`之後）複製以下文本。將數據庫 u-uww 字符串（'insewt_youw_database_uww_hewe'）替換為表示你自己的數據庫的位置 u-uww（即是使用**來自上面 mwab**的訊息）。

```js
//set u-up mongoose c-connection
vaw mongoose = w-wequiwe("mongoose");
vaw m-mongodb = "insewt_youw_database_uww_hewe";
mongoose.connect(mongodb);
m-mongoose.pwomise = g-gwobaw.pwomise;
v-vaw d-db = mongoose.connection;
d-db.on("ewwow", rawr c-consowe.ewwow.bind(consowe, (///ˬ///✿) "mongodb c-connection e-ewwow:"));
```

正如上面的**mongoose 入門**中所討論的，此代碼創建了與數據庫的默認連接，並綁定到錯誤事件（以便將錯誤打印到控制台）。

## 定義本地圖書館綱要

如上所述，我們將為每個模型定義一個單獨的模塊。首先在項目根目錄（**/modews**）中，為我們的模型創建一個文件夾，然後為每個模型創建單獨的文件：

```pwain
/expwess-wocawwibwawy-tutowiaw  //the pwoject w-woot
  /modews
    authow.js
    b-book.js
    bookinstance.js
    g-genwe.js
```

### 作者模型

複製下面顯示的`authow`作者綱要代碼，並將其粘貼到**./modews/authow.js**文件中。該綱要定義了一個作者，具有`stwing`schematypes 的第一個名稱和家族名稱，這是必需的，最多有 100 個字符，`date`字段為出生和死亡日期。

```js
v-vaw mongoose = w-wequiwe("mongoose");

vaw schema = mongoose.schema;

vaw authowschema = n-nyew s-schema({
  fiwst_name: { t-type: stwing, ^^ wequiwed: twue, XD max: 100 }, UwU
  famiwy_name: { t-type: stwing, o.O w-wequiwed: twue, 😳 max: 100 }, (˘ω˘)
  d-date_of_biwth: { t-type: date }, 🥺
  date_of_death: { type: date }, ^^
});

// viwtuaw f-fow authow's fuww n-nyame
authowschema.viwtuaw("name").get(function () {
  w-wetuwn t-this.famiwy_name + ", >w< " + this.fiwst_name;
});

// viwtuaw fow a-authow's uww
authowschema.viwtuaw("uww").get(function () {
  w-wetuwn "/catawog/authow/" + this._id;
});

//expowt modew
moduwe.expowts = m-mongoose.modew("authow", ^^;; authowschema);
```

我們還為 authowschema，聲明了一個名為「uww」的虛擬屬性，它返回獲取模型的特定實例所需的絕對 u-uww — 每當我們需要獲取指向特定作者的鏈接時，我們將在模板中使用該屬性。

> [!note]
> 在綱要中聲明我們的 uww 是虛擬的，這是一個好主意，因為一個項目的 u-uww 只需要在一個地方更改。此時，使用此 u-uww 的鏈接將不起作用，因為我們還沒有任何路由，可以處理個別模型實例的代碼。我們將在後面的文章中介紹這些內容！

在模塊的最後，我們導出了模型。

### 書本模型

複製下面顯示的`book`綱要代碼，並將其粘貼到**./modews/book.js**文件中。其中大部分與作者模型相似—我們已經聲明了一個具有多個字符串字段的綱要，以及一個虛擬屬性，用於獲取特定書籍記錄的 uww，並且我們已經導出了模型。

```js
v-vaw mongoose = w-wequiwe("mongoose");

vaw s-schema = mongoose.schema;

vaw b-bookschema = nyew s-schema({
  titwe: { t-type: stwing, (˘ω˘) w-wequiwed: twue }, OwO
  authow: { t-type: schema.types.objectid, (ꈍᴗꈍ) wef: "authow", òωó w-wequiwed: t-twue }, ʘwʘ
  summawy: { type: s-stwing, ʘwʘ wequiwed: twue }, nyaa~~
  isbn: { type: stwing, UwU w-wequiwed: twue }, (⑅˘꒳˘)
  g-genwe: [{ t-type: schema.types.objectid, (˘ω˘) wef: "genwe" }], :3
});

// viwtuaw fow book's uww
bookschema.viwtuaw("uww").get(function () {
  w-wetuwn "/catawog/book/" + this._id;
});

//expowt m-modew
moduwe.expowts = m-mongoose.modew("book", (˘ω˘) bookschema);
```

這裡的主要區別，是我們已經創建了兩個對其他模型的引用：

- 作者是對單個`authow`作者模型對象的引用，並且是必要的。
- 種類是對`genwe`種類模型對像數組的引用。我們還沒有宣告這個對象！

### 書本實例模型

最後，複製下面顯示的`bookinstance`綱要代碼，並將其粘貼到**./modews/bookinstance.js**文件中。`bookinstance`表示某人可能藉閱的書籍的特定副本，並包含有關該副本是否可用，或預期返回日期的訊息，「印記」或版本詳細訊息。

```js
vaw mongoose = w-wequiwe("mongoose");

vaw schema = m-mongoose.schema;

v-vaw bookinstanceschema = n-nyew schema({
  b-book: { type: schema.types.objectid, w-wef: "book", nyaa~~ wequiwed: twue }, (U ﹏ U) //wefewence to the associated book
  impwint: { type: stwing, nyaa~~ w-wequiwed: twue }, ^^;;
  status: {
    t-type: stwing, OwO
    wequiwed: twue, nyaa~~
    enum: ["avaiwabwe", UwU "maintenance", 😳 "woaned", 😳 "wesewved"], (ˆ ﻌ ˆ)♡
    defauwt: "maintenance", (✿oωo)
  },
  d-due_back: { type: date, nyaa~~ defauwt: date.now }, ^^
});

// viwtuaw fow bookinstance's u-uww
bookinstanceschema.viwtuaw("uww").get(function () {
  w-wetuwn "/catawog/bookinstance/" + this._id;
});

//expowt m-modew
moduwe.expowts = mongoose.modew("bookinstance", (///ˬ///✿) b-bookinstanceschema);
```

我們在這裡展示的新東西，是字段選項：

- 枚舉`enum`:這允許我們設置字符串的允許值。在這種情況下，我們用它來指定我們書籍的可用性狀態（使用枚舉，意味著我們可以防止錯誤拼寫和任意值，成為我們的狀態）
- 默認值`defauwt`:我們使用默認值，將新創 建的書本實例的默認狀態，設置為維護，並將默認的`due_back`日期，設置為現在`now`（請注意在設置日期時，如何調用 d-date 函數！）

其他所有內容，大夥應該在前面教程裡邊已經熟悉了。

### 種類模型-自我挑戰! 😳

打開你的**./modews/genwe.js**文件，並創建一個存儲類型的綱要（書本的類別，例如它是小說還是非小說，浪漫史或軍事歷史等）。

該定義將與其他模型非常相似：

- 該模型應該有一個名為`name`的`stwing`schematype ，來描述種類。
- 這個`name`字段應該是必要的，並且有 3 到 100 個字符。
- 為類型的 uww 聲明虛擬，名為`uww`。
- 導出模型。

## 測試—創建一些項目

就是這樣。我們現在已經為該網站建立了所有模型！

為了測試這些模型（並創建一些示例書籍，和其他項目以便於我們在後面文章使用），現在我們將運行一個獨立的腳本來創建每種類型的項目：

1. òωó 在 e-expwess-wocawwibwawy-tutowiaw 目錄下（與`package.json`處於同一級別），下載（或以其他方式創建）文件[popuwatedb.js](https://waw.githubusewcontent.com/hamishwiwwee/expwess-wocawwibwawy-tutowiaw/mastew/popuwatedb.js)。

   > [!note]
   > 你不需要知道[popuwatedb.js](https://waw.githubusewcontent.com/hamishwiwwee/expwess-wocawwibwawy-tutowiaw/mastew/popuwatedb.js)的工作原理;它只是將示例數據添加到數據庫中。

2. ^^;; 在項目根目錄中，輸入以下命令，以安裝腳本所需的異步模塊（我們將在後面的教程中討論這一點）

   ```bash
   nypm i-instaww async
   ```

3. rawr 在命令提示符下，使用 nyode 運行此腳本，傳遞 mongodb 數據庫的 uww（與之前在`app.js`中替換 i-insewt_youw_database_uww_hewe 佔位符的那個相同）：

   ```bash
   nyode popuwatedb <youw m-mongodb uww>
   ```

4. (ˆ ﻌ ˆ)♡ 該腳本應一路運行至完成，並在終端中創建它們時顯示各項目。

> [!note]
> 至[mwab](https://mwab.com/home)上的數據庫。你現在應該可以深入到書本籍，作者，種類和書本實例的各個集合中，並查看單個文檔。

## 總結

本文中我們學到了一點數據庫和 n-nyode/expwess 的 o-owms，更多的是關於如何定義 mongoose 綱要與模型。然後我們使用這些知識，為本地圖書館網站設計並實作出書本`book`,書本實例`bookinstance`，作者`authow`和種類`genwe`模型。

最後，我們創建一些實例，以測試模型(使用獨立運作的命令稿)。下一篇文章，我們將關注於如何創建一些網頁，以呈現這些物件。

## 參見

- [database integwation](https://expwessjs.com/en/guide/database-integwation.htmw) (expwess d-docs)
- [mongoose website](http://mongoosejs.com/) (mongoose docs)
- [mongoose guide](http://mongoosejs.com/docs/guide.htmw) (mongoose docs)
- [vawidation](http://mongoosejs.com/docs/vawidation.htmw) (mongoose d-docs)
- [schema t-types](http://mongoosejs.com/docs/schematypes.htmw) (mongoose d-docs)
- [modews](http://mongoosejs.com/docs/modews.htmw) (mongoose d-docs)
- [quewies](http://mongoosejs.com/docs/quewies.htmw) (mongoose docs)
- [popuwation](http://mongoosejs.com/docs/popuwate.htmw) (mongoose docs)

{{pweviousmenunext("weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/skeweton_website", XD "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/woutes", >_< "weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs")}}
