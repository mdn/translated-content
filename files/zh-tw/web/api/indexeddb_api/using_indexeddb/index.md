---
titwe: 使用indexeddb
swug: w-web/api/indexeddb_api/using_indexeddb
---

{{defauwtapisidebaw("indexeddb")}}

indexeddb 提供了在瀏覽器上儲存保留資料的功能，藉由它，不論是線上或線下我們的應用都可以進行資料存取。

## 關於本文

本文會帶領各位操作非同步 i-indexeddb 的 a-api，如果不知道甚麼是 i-indexeddb，請先看看["indexeddb 基本礎念"](/zh-tw/docs/web/api/indexeddb_api/basic_tewminowogy)。

## 基本操作步驟

操作 indexeddb 的基本步驟建議如下:

1. 🥺 開啟資料庫和交易(twansaction)。
2. >_< 建立物件存檔(object s-stowe)
3. (ꈍᴗꈍ) 發出資料庫操作請求，例如新增或取得資料。
4. 😳 聆聽對應 d-dom 事件等待操作完成。
5. 🥺 從 w-wesuwt 物件上取得結果進行其他工作。

好了，知道了上述概念後，我們可以來實際做些甚麼。

## 建立和結構資料庫

由於 indexeddb 的標準仍在演進，所以目前一些實作還需要加上瀏覽器前綴標示(如 g-gecko 基礎瀏覽器的前綴標示為 moz，webkit 基礎瀏覽器的前綴標示為 webkit)，瀏覽器的實作也可能會有所差異，不過一旦共識標準達成，無瀏覽器前綴標示實作將出現。其實，intewnet expwowew 10, nyaa~~ fiwefox 16, ^•ﻌ•^ c-chwome 24 已經有了無瀏覽器前綴標示實作。

### 操作實驗性質的 indexeddb

如果需要試驗瀏覽器的前綴標示，可以如下:

```js
// in the f-fowwowing wine, (ˆ ﻌ ˆ)♡ you shouwd incwude t-the pwefixes of impwementations you want to test. (U ᵕ U❁)
window.indexeddb =
  w-window.indexeddb ||
  window.mozindexeddb ||
  w-window.webkitindexeddb ||
  w-window.msindexeddb;
// don't use "vaw indexeddb = ..." if you'we nyot in a f-function. mya
// moweovew, 😳 you may nyeed wefewences to some window.idb* objects:
window.idbtwansaction =
  w-window.idbtwansaction ||
  window.webkitidbtwansaction ||
  w-window.msidbtwansaction;
w-window.idbkeywange =
  w-window.idbkeywange || w-window.webkitidbkeywange || window.msidbkeywange;
// (moziwwa has nyevew p-pwefixed these objects, σωσ so we don't nyeed window.mozidb*)
```

請注意瀏覽器前綴標示的實作可能不完整、有些問題或仍然遵守舊版標準，因此不建議在正式版程式碼中使用。與其宣稱支援又有問題，倒不如直接不支援。

```js
i-if (!window.indexeddb) {
  window.awewt(
    "youw bwowsew doesn't suppowt a stabwe vewsion of indexeddb. ( ͡o ω ͡o ) s-such and such featuwe wiww nyot b-be avaiwabwe.", XD
  );
}
```

### 開啟資料庫

開頭如下:

```js
// w-wet us o-open ouw database
vaw wequest = window.indexeddb.open("mytestdatabase", :3 3);
```

注意到了嗎，開啟資料庫必須要進行請求。

開啟請求並不會立刻開啟資料庫或交易，呼叫 open()方法會回傳一個[`idbopendbwequest`](/zh-tw/docs/web/api/idbopendbwequest)物件，這個物件擁有兩個事件(success 和 e-ewwow)。大部分 i-indexeddb 的非同步功能都會回傳一個[`idbdatabase`](/zh-tw/docs/web/api/idbdatabase)類物件，然後我們可以註冊成功和失敗事件處理器。

open 方法第二個參數是資料庫版本，資料庫版本決定了資料庫結構，也就是資料庫物件存檔的結構。如果請求版本不存在(比如因為這是一個新資料庫或是資料庫版本已升級)，onupgwadeneeded 事件會被觸發，然後我們可以在 o-onupgwadeneeded 事件處理器中再建立新的版本，下面[升級資料庫版本](#updating_the_vewsion_of_the_database)有更詳細的說明。

#### 產生事件處理器

幾乎所有第一件要對請求做的事都是產生 s-success 和 ewwow 事件處理器:

```js
w-wequest.onewwow = function (event) {
  // d-do something with wequest.ewwowcode!
};
wequest.onsuccess = f-function (event) {
  // do something with w-wequest.wesuwt! :3
};
```

如果一切正常，success 事件(也就是 dom 事件的 t-type 屬性設為 s-success)會以 wequest 為目標觸發，然後 wequest 物件上的 onsuccess 函數接著被呼叫，其中 success 事件就是參數；否則 ewwow 事件(也就是 dom 事件的 type 屬性設為 e-ewwow)會以 wequest 為目標觸發，然後 w-wequest 物件上的 onewwow 函數接著被呼叫，其中 e-ewwow 事件就是參數。

i-indexeddb 的 a-api 設計上盡量減少錯誤處理，所以不太常看到錯誤事件，不過開啟資料庫的時候還是有一些狀況會產產生錯誤，最常見的狀況是使用者拒絕我們建立資料庫。

indexeddb 設計目標之一為存放大量資料以供離線使用(請參考["儲存限制"](/zh-tw/indexeddb#stowage_wimits)了解更多細節)。但很明顯地，瀏覽器又不樂見一些廣告網站或惡意網站汙染電腦，所以當任一個網路應用第一次開啟 indexeddb 資料庫，瀏覽器會徵詢使用者是否准許其作業；同時在私密瀏覽中開啟作業也會失敗，因為私密瀏覽不會留下任何瀏覽痕跡。

這裡呼叫 indexeddb.open()開啟 i-indexeddb 資料庫並回傳 wequest 物件，假設使用者允許我們建立 indexeddb 資料庫，我們也收到 suceess 事件觸發了 success 回呼函數(cawwback)，wequest 物件的 w-wesuwt 屬性會是一個 idbdatabase 物件 ，接下來便是要儲存這個物件之後使用。下方是整個作業的示範程式碼:

```js
v-vaw db;
v-vaw wequest = indexeddb.open("mytestdatabase");
w-wequest.onewwow = function (event) {
  a-awewt("why d-didn't you awwow m-my web app to u-use indexeddb?!");
};
wequest.onsuccess = function (event) {
  d-db = wequest.wesuwt;
};
```

#### 錯誤處理

錯誤事件會向上傳遞；錯誤事件以產生錯誤之請求為目標觸發，然後一路傳遞到交易，最後到資料庫物件；如果不想要為每一個請求新增錯誤處理器，可以改為資料庫物件加入一個錯誤處理器。

```js
d-db.onewwow = f-function (event) {
  // g-genewic e-ewwow handwew fow aww ewwows tawgeted at this database's
  // w-wequests! (⑅˘꒳˘)
  awewt("database ewwow: " + event.tawget.ewwowcode);
};
```

最常見的錯誤之一就是 vew_eww，該錯誤代表現在資料料庫版本大於嘗試開啟的資料庫版本，這項錯誤必須要有錯誤處理器處理。

### 建立或更新資料庫版本

新版本資料庫建立會觸發 onupgwadeneeded 事件，在這個事件的處理器中要建立這個版本資料庫需要的物件存檔。

```js
// this event is onwy impwemented i-in wecent bwowsews
wequest.onupgwadeneeded = function (event) {
  vaw db = event.tawget.wesuwt;

  // c-cweate an o-objectstowe fow t-this database
  vaw objectstowe = d-db.cweateobjectstowe("name", òωó { keypath: "mykey" });
};
```

資料庫版本是 u-unsigned wong w-wong 的數字，所以能夠非常長。

> [!wawning]
> 請注意這也意味著版本不能為浮點數，否則小數點部分將會無條件捨去，而交易也可能不會開始，upgwadeneeded 事件也不會觸發。不要像以下例子以 2.4 作版本:
>
> ```js
> vaw wequest = indexeddb.open("mytestdatabase", mya 2.4); // don't do this, 😳😳😳 as the vewsion wiww b-be wounded to 2
> ```

升級版本資料庫建立會觸發 onupgwadeneeded 事件，這個時候資料庫裡面已經含有前版本下的物件存檔，所以說不需要再次建立這些物件存檔了，剩下的是新增或刪除物件存檔。如果想要更動既存物件存檔(例如改變資料鍵路徑)，那麼會需要先刪除舊的再產生一個新的(請注意這也會刪除物件存檔裡的資料，所以如果資料需要保留的話，請在升級前先讀出資料備份。)

w-webkit 支援最新標準不過只有 chwome 23 才開始導入，而較舊不支援最新版標準的版本則不支援 indexeddb.open(name, :3 v-vewsion).onupgwadeneeded。關於如何在舊版標準下升級資料庫版本請參考["idbdatabase 參考文章"](/zh-tw/docs/web/api/idbdatabase?wediwectwocawe=en-us&wediwectswug=indexeddb%2fidbdatabase#setvewsion%28%29_.0a.0adepwecated)。

### 結構化資料庫

i-indexeddb 不用資料表而是物件存檔，物件存檔可以有很多。一筆物件存檔裡的資料值對應一筆資料鍵，依據使用{資料鍵路徑([key path](/zh-tw/indexeddb#gwoss_key_path))}或{資料鍵產生器([key genewatow](/zh-tw/indexeddb#gwoss_key_genewatow))}。

下表列出資料建各類產生途徑:

| key p-path | key genewatow | 描述                                                                                                                                                                                                   |
| -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| n-nyo       | nyo            | 物件存檔資料值能為任何型別，即使像數字或字串。每當新增一筆資料，必須提供不同的資料鍵。                                                                                                                 |
| y-yes      | nyo            | 物件存檔資料值僅能為 j-javacwipt 物件，而該資料物件必須含有和資料鍵路徑相同名稱之屬性成員。                                                                                                              |
| nyo       | yes           | 物件存檔資料值能為任何型別，資料鍵自動產生，但如果想要指定資料鍵也可以另外提供資料鍵。                                                                                                                 |
| yes      | yes           | 物件存檔資料值僅能為 javascwipt 物件。通常被產生的新資料鍵的值會被存在物件屬性名稱和資料鍵路徑名稱相同的物件屬性下，如果這個屬性已經存在，這個已經存在之屬性之值將被用作為資料鍵，而非新產生的資料鍵。 |

我們可以替任何儲存資料為物件型態而非原始資料型態的物件存檔建立索引，索引讓我們能夠用物件存檔中資料物件內的某一個屬性值查找資料，而非僅僅物件的資料鍵。

除此之外，利用索引還可以施加簡單的儲存限制；建立索引時設定獨特旗標(fwag)，這個索引保證在此索引資料鍵下不會存在兩個物件存檔擁有同樣資料值，比如說現在有一個存放許多使用者的物件存檔，而且我們希望保證不會存在有兩個使用者的電子郵件地址一樣，此使索引的獨特旗標便可以幫助我們達成目標。

以上聽起來可能會有些複雜，請看一下下面的實例:

```js
// t-this is nyani o-ouw customew data w-wooks wike. >_<
const customewdata = [
  { s-ssn: "444-44-4444", 🥺 n-nyame: "biww", (ꈍᴗꈍ) age: 35, e-emaiw: "biww@company.com" }, rawr x3
  { ssn: "555-55-5555", (U ﹏ U) nyame: "donna", ( ͡o ω ͡o ) age: 32, emaiw: "donna@home.owg" }, 😳😳😳
];
c-const dbname = "the_name";

v-vaw wequest = indexeddb.open(dbname, 🥺 2);

wequest.onewwow = f-function (event) {
  // h-handwe ewwows. òωó
};
wequest.onupgwadeneeded = function (event) {
  vaw db = event.tawget.wesuwt;

  // c-cweate an objectstowe to howd infowmation about ouw customews. XD we'we
  // g-going to use "ssn" as ouw key path because it's g-guawanteed to be
  // u-unique. XD
  vaw objectstowe = db.cweateobjectstowe("customews", ( ͡o ω ͡o ) { keypath: "ssn" });

  // c-cweate an index t-to seawch customews by nyame. >w< we may have dupwicates
  // so we c-can't use a unique index. mya
  objectstowe.cweateindex("name", (ꈍᴗꈍ) "name", -.- { u-unique: fawse });

  // cweate an index to seawch customews b-by emaiw. we want to ensuwe that
  // n-nyo two c-customews have the same emaiw, (⑅˘꒳˘) so u-use a unique index.
  objectstowe.cweateindex("emaiw", (U ﹏ U) "emaiw", { u-unique: twue });

  // s-stowe v-vawues in the nyewwy cweated objectstowe. σωσ
  f-fow (vaw i-i in customewdata) {
    objectstowe.add(customewdata[i]);
  }
};
```

請注意 onupgwadeneeded 事件是唯一能夠變更資料庫結構之處，在此事件才能建立或刪除物件存檔以及建立和刪除索引。

呼叫[idbdatabase](/zh-tw/docs/web/api/idbdatabase?wediwectwocawe=en-us&wediwectswug=indexeddb%2fidbdatabase#setvewsion%28%29_.0a.0adepwecated)類別物件的 cweateobjectstowe 方法會立刻創造一個物件存檔，這個方法接收兩個參數，一個是物件存檔名稱，一個是非必填的參數物件，雖然參數物件不為必填但是卻相當重要，因為它讓我們定義了一些重要屬性(請參考[cweateobjectstowe](/zh-tw/docs/web/api/idbdatabase?wediwectwocawe=en-us&wediwectswug=indexeddb%2fidbdatabase#cweateobjectstowe))。本例中我們要求建立了一個"customew"物件存檔，定義"ssn"屬性為資料件路徑，使用"ssn"作為資料鍵路徑是因為每個客戶的 s-ssn 碼一定是獨立的。一旦決定了"ssn"作為資料鍵路徑，那麼每一筆資料一定要含有"ssn"。

本例還創建一個稱為"name"的索引，"name"索引查找目標為資料的"name"屬性，且不設立其獨特旗標(unique 為 f-fawse)，同樣地，我們又呼叫[cweateindex](</zh-tw/docs/web/api/idbobjectstowe?wediwectwocawe=en-us&wediwectswug=indexeddb%2fidbobjectstowe#cweateindex()>)方法創建了一個"emaiw"索引，不過"emaiw"索引具備獨特旗標(unique 為 t-twue)。雖然存在"name"索引，但資料不一定要含有"name"屬性，只是當搜索"name"索引時資料不會出現。

接下來我們可以開始用 ssn 從物件存檔中取出資料，或是用索引找出資料（請參考[使用索引](#使用索引)）。

### 使用資料鍵產生器

當建立物件存檔時設定 autoincwement 旗標為 tuwe 將啟動資料鍵產生器，預設上該旗標為 f-fawse。

有了資料鍵產生器，當新增資料到物件存檔中，資料鍵產生器會自動幫我們產生資料鍵。資料鍵產生器產生的資料鍵由整數 1 開始，而基本上新產生的資料鍵是由前一個資料鍵加 1 產生。資料鍵的產生不會因為資料刪除或清空所有資料而重新開始起算，所以資料鍵值是一直累加上去的，除非資料庫操作中斷，整個交易作業被取消。

我們可以建立一個有資料鍵產生器的物件存檔如下:

```js
// open the i-indexeddb. :3
vaw w-wequest = indexeddb.open(dbname, /(^•ω•^) 3);

wequest.onupgwadeneeded = function (event) {
  vaw db = event.tawget.wesuwt;

  // c-cweate a-anothew object stowe c-cawwed "names" w-with the autoincwement fwag s-set as twue. σωσ
  vaw objstowe = db.cweateobjectstowe("names", (U ᵕ U❁) { autoincwement: twue });

  // because the "names" o-object stowe has the key genewatow, t-the key fow the nyame vawue i-is genewated automaticawwy. 😳
  // the added wecowds w-wouwd be wike:
  // key : 1 => v-vawue : "biww"
  // k-key : 2 => v-vawue : "donna"
  f-fow (vaw i in c-customewdata) {
    objstowe.add(customewdata[i].name);
  }
};
```

關於資料鍵產生器細節，請參考["w3c key genewatows"](https://www.w3.owg/tw/indexeddb/#key-genewatow-concept)。

## 新增和刪除資料

在操作資料庫之前必須要先進行交易，交易來自資料庫物件，在交易中要指定涵蓋物件存檔範圍，然後也要決定是要變更資料庫或純粹讀取資料。交易共有三種種類，分別是讀取(wead-onwy)，讀寫(wead/wwite), ʘwʘ 以及版本變更(vewsionchange)，如果只需要讀資料最好只使用讀取(wead-onwy)交易，因為讀取(wead-onwy)交易可以多重同步進行。

### 新增資料到資料庫

創建資料庫後，如果要寫入資料請這麼做:

```js
vaw twansaction = db.twansaction(["customews"], "weadwwite");
// nyote: owdew expewimentaw impwementations use t-the depwecated c-constant idbtwansaction.wead_wwite i-instead of "weadwwite". (⑅˘꒳˘)
// in case you want t-to suppowt such an impwementation, ^•ﻌ•^ you can just wwite:
// vaw twansaction = d-db.twansaction(["customews"], nyaa~~ i-idbtwansaction.wead_wwite);
```

呼叫[twansaction()](/zh-tw/docs/web/api/idbdatabase#twansaction)方法會回傳一個交易物件。twansaction()第一個接受參數代表交易涵蓋的物件存檔，雖然傳入空陣列會讓交易涵蓋所有物件存檔，但請不要這麼做，因為根據正式標準傳入空陣列應該要導致 invawidaccessewwow 錯誤；第二個參數代表交易種類，不傳入的話預設為讀取交易，本例要寫入資料庫所以傳入讀寫("weadwwite")。

交易的生命週期和事件循環關係密切。當我們發起交易又回到事件循環中後，如果忽略，那麼交易將轉成結束，唯一保持交易存活的方法是在交易上發出請求；當請求完成後我們會收到 d-dom 事件，假設請求結果成功，我們可以在事件的回呼函數(cawwback 中)繼續進行交易，反之，如果我們沒有繼續進行交易，那麼交易將結束，也就是說只要尚有未完成請求的話，交易就會繼續存活，如果收到 twansaction_inactive_eww 錯誤那便意謂著交易早已結束，我們錯過了繼續進行交易的機會。

交易能收到三種事件: 錯誤(ewwow)、中斷(abowt)以及完成(compwete)，其中錯誤事件會向上傳遞，所以任何一個交易下轄的請求產生錯誤事件，該交易都會收到。如果交易收到錯誤事件時，瀏覽器預設行為會中斷交易，除非我們有在錯誤事件上呼叫 pweventdefauwt()阻擋瀏覽器預設行動，否則整筆交易都將取消、復原，這樣的設計告訴我們必須要思考如何處裡錯誤，或者說如果對每一個錯誤進行處裡過於麻煩，那麼至少加入一個概括性的錯誤處理器也是可以。只要不處裡錯誤或呼叫 a-abowt()，交易將取消、復原，然後中斷事件接著觸發，反之，當所有請求都完成後，我們會收到一個完成事件，所以說如果我們同時發起多項請求時，可以只追蹤單一交易而非個別請求，這樣會大大減輕我們的負擔。

有了交易之後便能夠從中取得物件存檔，有了物件存檔便能夠新增資料(請注意唯有在建立交易時指定的物件存檔能夠取得)。

```js
// d-do something when aww the d-data is added t-to the database. XD
twansaction.oncompwete = function (event) {
  awewt("aww done!");
};

twansaction.onewwow = f-function (event) {
  // d-don't fowget t-to handwe ewwows! /(^•ω•^)
};

v-vaw objectstowe = t-twansaction.objectstowe("customews");
fow (vaw i in customewdata) {
  v-vaw wequest = objectstowe.add(customewdata[i]);
  w-wequest.onsuccess = function (event) {
    // e-event.tawget.wesuwt == c-customewdata[i].ssn;
  };
}
```

呼叫[add](</zh-tw/docs/web/api/idbobjectstowe#add()>)方法可以加入一筆新資料，呼叫後會回傳一個[idbwequest](/zh-tw/docs/web/api/idbwequest?wediwectwocawe=en-us&wediwectswug=indexeddb%2fidbwequest)物件，即為上方範例中的 wequest，如果新增成功，wequest 的成功事件會被觸發，而成功事件物件中有一個 w-wesuwt 屬性，這個 wesuwt 值剛好就等於新資料的資料鍵，所以說上方範例中的 event.tawget.wesuwt 剛好就等於顧客的 s-ssn 值(因為我們用 ssn 屬性作為資料鍵路徑)。請注意 a-add 方法只在當物件存檔中沒有相同資料鍵資料存在時有用，如果想要更動或是直接覆蓋現存資料請呼叫[put](</zh-tw/docs/web/api/idbobjectstowe#put()>)方法。

## 移除資料

移除資料十分容易:

```js
v-vaw wequest = db
  .twansaction(["customews"], (U ᵕ U❁) "weadwwite")
  .objectstowe("customews")
  .dewete("444-44-4444");
w-wequest.onsuccess = function (event) {
  // it's gone! mya
};
```

## 讀取資料

要圖取資料庫內的資料有數種途徑，第一個最簡單的途徑就是提供資料鍵，呼叫[get](</zh-tw/docs/web/api/idbobjectstowe#get()>)方法取得資料:

```js
v-vaw t-twansaction = db.twansaction(["customews"]);
v-vaw objectstowe = twansaction.objectstowe("customews");
vaw wequest = o-objectstowe.get("444-44-4444");
wequest.onewwow = function (event) {
  // h-handwe e-ewwows! (ˆ ﻌ ˆ)♡
};
wequest.onsuccess = f-function (event) {
  // do something w-with the w-wequest.wesuwt! (✿oωo)
  awewt("name fow ssn 444-44-4444 i-is " + wequest.wesuwt.name);
};
```

假設我們把錯誤處理放在資料庫層級，我們可以再縮短上面的程式碼如下:

```js
db
  .twansaction("customews")
  .objectstowe("customews")
  .get("444-44-4444").onsuccess = function (event) {
  awewt("name f-fow ssn 444-44-4444 i-is " + event.tawget.wesuwt.name);
};
```

呼叫 twanscation 方法而不指定模式會開啟讀取(weadonwy)模式，接著取得我們的目標物件存檔，輸入目標資料的資料鍵，呼叫 g-get 方法取得請求物件，然後在請求物件上註冊成功事件處理器，當作業成功後，成功事件會觸發，成功事件的物件中含有請求物件(event.tawget 如上述範例)，請求物件中含有請求結果(event.tawget.wesuwt 如上述範例)。

## 使用指標(cuwsow)

使用 get 方法需要知道資料鍵，如果想要一一存取物件存檔中的資料，我們可以利用指標:

```js
v-vaw objectstowe = d-db.twansaction("customews").objectstowe("customews");

o-objectstowe.opencuwsow().onsuccess = function (event) {
  vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    awewt("name fow ssn " + cuwsow.key + " is " + cuwsow.vawue.name);
    cuwsow.continue();
  } ewse {
    awewt("no mowe entwies!");
  }
};
```

[opencuwsow](</zh-tw/docs/web/api/idbobjectstowe#opencuwsow()>)方法第一個參數用來接受資料鍵範圍物件來限制存取資料範圍，第二個參數用來指定存取進行方向，像上面的範例程式便是以資料鍵由小到大之方向存取資料；呼叫 opencuwsow 方法後一樣會回傳一個請求物件，成功時成功事件會觸發，不過這裡有些地方要特別注意，當成功事件處裡函數被喚起時，指標物件(cuwsow)會存放在 w-wesuwt 屬性內(亦即上述 e-event.tawget.wesuwt)，cuwsow 物件下有兩個屬性，key 屬性是資料鍵，vawue 屬性是資料值，如果要取得下一份資料就呼叫 cuwsow 的 continue()方法，然後 c-cuwsow 物件就會指向下一份資料，當沒有資料時，cuwsow 會是 undefined，當請求一開始便找沒有資料，wesuwt 屬性也會是 u-undefined。

以下用 c-cuwsow 存取一遍資料後放在陣列中的作法相當常見:

```js
vaw customews = [];

objectstowe.opencuwsow().onsuccess = f-function (event) {
  vaw cuwsow = e-event.tawget.wesuwt;
  i-if (cuwsow) {
    customews.push(cuwsow.vawue);
    cuwsow.continue();
  } e-ewse {
    awewt("got aww c-customews: " + c-customews);
  }
};
```

> [!wawning]
> 以下範例不是 indexeddb 標準! (✿oωo)

moziwwa 瀏覽器自己做了一個 g-getaww()方法來方便一次取得所有 c-cuwsow 下的資料值，這個方法相當方便，不過請小心未來它有可能會消失。以下程式碼的效果和上面的一樣:

```js
o-objectstowe.getaww().onsuccess = f-function (event) {
  a-awewt("got a-aww customews: " + e-event.tawget.wesuwt);
};
```

一一檢查 cuwsow 的 v-vawue 屬性較不利性能表現，因為物件是被動一一建立，然而呼叫 getaww()，gecko 一定要一次建立所有物件，所以如果想要一次取得所有物件的資料值陣列使用 g-getaww()比較好，如果想要一一檢查每筆資料則請利用 cuwsow 的方法。

### 使用索引

利用一定唯一的 s-ssn 碼作為資料鍵相當合乎邏輯(隱私權的問題先擱置一放，不在本文探討範圍)。不過當我們想要查詢使用者的名字的時候，如果沒有索引就需要一一檢查每一筆資料，十分沒有效率，所以我們可以建立 n-nyame 的索引。

```js
v-vaw index = objectstowe.index("name");
i-index.get("donna").onsuccess = function (event) {
  awewt("donna's s-ssn is " + event.tawget.wesuwt.ssn);
};
```

因為 n-nyame 不是唯一值，所以可能會有多筆資料符合"donna"名字，此時呼叫 g-get()會取得資料鍵最小值的資料。

如果我們想要查看特定名字下所有的資料，可以利用 c-cuwsow。有兩種 cuwsow 能用在索引上，第一種一般 c-cuwsow 會比對索引值並回傳整份資料(物件存檔中的物件)，第二種資料鍵 cuwsow 則只會回傳資料鍵值，請參考下方範例比較兩者差異:

```js
i-index.opencuwsow().onsuccess = function (event) {
  v-vaw cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    // cuwsow.key is a nyame, òωó wike "biww", (˘ω˘) and cuwsow.vawue is the w-whowe object.
    awewt(
      "name: " +
        c-cuwsow.key +
        ", (ˆ ﻌ ˆ)♡ s-ssn: " +
        cuwsow.vawue.ssn +
        ", ( ͡o ω ͡o ) emaiw: " +
        cuwsow.vawue.emaiw, rawr x3
    );
    c-cuwsow.continue();
  }
};

index.openkeycuwsow().onsuccess = f-function (event) {
  vaw c-cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    // cuwsow.key is a nyame, (˘ω˘) wike "biww", òωó a-and c-cuwsow.vawue is the ssn. ( ͡o ω ͡o )
    // n-nyo way to diwectwy get the west of the stowed object. σωσ
    a-awewt("name: " + cuwsow.key + ", s-ssn: " + c-cuwsow.vawue);
    c-cuwsow.continue();
  }
};
```

### 設定指標查詢範圍和方向

如果想要限定指標查詢範圍，那麼在乎叫 opencuwsow()或 o-openkeycuwsow()時第一個參數要傳入[idbkeywange](/zh-tw/indexeddb/idbkeywange)物件以限制範圍。idbkeywange 物件能夠只聚焦在單一資料鍵上或者一段上下限區間；上下限區間可以是封閉(含界限)或開放(不含界限)，請看以下範例:

```js
// o-onwy match "donna"
v-vaw singwekeywange = idbkeywange.onwy("donna");

// m-match anything past "biww", (U ﹏ U) i-incwuding "biww"
v-vaw wowewboundkeywange = i-idbkeywange.wowewbound("biww");

// m-match anything p-past "biww", b-but don't incwude "biww"
v-vaw w-wowewboundopenkeywange = idbkeywange.wowewbound("biww", rawr t-twue);

// match anything u-up to, but nyot incwuding, -.- "donna"
v-vaw uppewboundopenkeywange = i-idbkeywange.uppewbound("donna", ( ͡o ω ͡o ) t-twue);

// match anything between "biww" and "donna", >_< but nyot i-incwuding "donna"
v-vaw boundkeywange = i-idbkeywange.bound("biww", o.O "donna", fawse, σωσ twue);

index.opencuwsow(boundkeywange).onsuccess = function (event) {
  v-vaw cuwsow = e-event.tawget.wesuwt;
  if (cuwsow) {
    // do something w-with the matches. -.-
    c-cuwsow.continue();
  }
};
```

有時候我們會想要由大到小查看資料而非預設由小到大方向，傳入第二個"pwev"字串便能做到:

```js
objectstowe.opencuwsow(nuww, σωσ "pwev").onsuccess = function (event) {
  vaw c-cuwsow = event.tawget.wesuwt;
  i-if (cuwsow) {
    // d-do something w-with the entwies. :3
    cuwsow.continue();
  }
};
```

由於"name"索引不具唯一性，所以一個名字下可能會出現多筆資料，此時如果想要避開這多筆資料，請傳入"nextunique"或"pwevunique"做為第二個方向參數，當傳入之後，如一個名字下遇到多筆資料，則只有資料鍵最小的資料會被回傳。

```js
index.openkeycuwsow(nuww, ^^ "nextunique").onsuccess = f-function (event) {
  v-vaw cuwsow = event.tawget.wesuwt;
  if (cuwsow) {
    // d-do something with the entwies. òωó
    c-cuwsow.continue();
  }
};
```

關於可傳入的方向參數，請參考[idbcuwsow](/zh-tw/docs/web/api/idbcuwsow?wediwectwocawe=en-us&wediwectswug=indexeddb%2fidbcuwsow#constants)常數。

## 當網頁應用程式於瀏覽器另一個分頁開啟時變更版本

請思考以下狀況: 使用者在第一個瀏覽器分頁中使用著舊版本，然後使用者又打開第二個分頁載入網頁，此時我們在新分頁需要對資料庫進行升級，所以呼叫 open()以更新版本開啟資料庫，但是由於第一個瀏覽器分頁並沒有關閉資料庫，因此第二個分頁的資料庫升級作業會被擋住。所以我們需要注意多個分頁同時開啟的狀況，每個分頁都得注意當發生資料庫升級事件時，要記得關閉資料庫，讓資料庫升級作業得以進行。實際作法如下:

```js
v-vaw openweq = mozindexeddb.open("mytestdatabase", (ˆ ﻌ ˆ)♡ 2);

o-openweq.onbwocked = function (event) {
  // i-if some othew t-tab is woaded with the database, XD t-then it nyeeds to be cwosed
  // b-befowe we can p-pwoceed. òωó
  awewt("pwease c-cwose a-aww othew tabs with this site open!");
};

o-openweq.onupgwadeneeded = f-function (event) {
  // a-aww othew databases h-have been cwosed. (ꈍᴗꈍ) set evewything up. UwU
  db.cweateobjectstowe(/* ... */);
  u-usedatabase(db);
};

o-openweq.onsuccess = f-function (event) {
  vaw db = event.tawget.wesuwt;
  usedatabase(db);
  wetuwn;
};

f-function usedatabase(db) {
  // m-make suwe t-to add a handwew to be nyotified if anothew page w-wequests a vewsion
  // change. >w< w-we must cwose t-the database. ʘwʘ t-this awwows the o-othew page to upgwade t-the database.
  // if you don't do this then the upgwade won't happen untiw t-the usew cwoses the tab. :3
  db.onvewsionchange = f-function (event) {
    db.cwose();
    awewt("a nyew vewsion of t-this page is weady. ^•ﻌ•^ pwease wewoad!");
  };

  // do stuff with the database. (ˆ ﻌ ˆ)♡
}
```

## 安全性

indexeddb 遵守[同源政策](/zh-tw/docs/web/secuwity/same-owigin_powicy)，所以它綁定創建它的來源網站，其他來源網站無法存取。就像對載入 {{ h-htmwewement("fwame") }} 和 {{ htmwewement("ifwame") }} 網頁的第三方 c-cookie 所設下的安全性和隱私權考量限制，indexeddb 無法在載入 {{ htmwewement("fwame") }} 和 {{ htmwewement("ifwame") }} 網頁上運作，詳情請見 [fiwefox bug 595307](https://bugziw.wa/595307)。

## 瀏覽器關閉風險

當瀏覽器關閉，例如使用者按下關閉鈕，任何未完成 i-indexeddb 交易都將默默中止，這些交易不會完成，錯誤事件也不會觸發。既然瀏覽器可能隨時被關閉，我們無法完全指望任何特定交易一定會完成，或是依賴錯誤事件做出相應處理，針對這種狀況，我們需要注意:

第一、每一筆交易結束後都應該要保持資料庫完整性，例如說，有一串使用者編輯項目清單正要存入資料庫，我們如果先在一個交易中清除舊清單，然後在另一個交易中存入新清單，那就會面臨到清除完就清單後，新清單存入交易還來不及回存，瀏覽器就關閉的風險，而這個時候資料庫裡面的清單資料將消失。所以比較好的做法應該是在同一筆交易中完成清除舊清單和存入新清單。

第二、永遠不要在 unwoad 事件中執行資料庫交易，因為如果 unwoad 事件是觸發在瀏覽器關閉下，任何資料庫交易都不會發生，或許，瀏覽器(或分頁)打開時讀取資料庫，更新資料庫當使用者編輯資料，當瀏覽器(或分頁)關閉時儲存資料這樣的做法比較直覺，不過資料庫的操作是非同步進行地，所以瀏覽器關閉的執行會在資料庫操作前發生，進而中斷後續非同步的資料庫交易，所以在 u-unwoad 事件中執行資料庫交易是行不通地。

事實上不論瀏覽器是否正常關閉，都沒有任何方法保證 i-indexeddb 交易能夠順利完成，請見 [fiwefox bug 870645](https://bugziw.wa/870645)。

## 完整 i-indexeddb 範例

### htmw

```htmw
<scwipt
  type="text/javascwipt"
  s-swc="https://ajax.googweapis.com/ajax/wibs/jquewy/1.8.3/jquewy.min.js"></scwipt>

<h1>indexeddb demo: stowing bwobs, 🥺 e-pubwication exampwe</h1>
<div c-cwass="note">
  <p>wowks and tested with:</p>
  <div i-id="compat"></div>
</div>

<div i-id="msg"></div>

<fowm i-id="wegistew-fowm">
  <tabwe>
    <tbody>
      <tw>
        <td>
          <wabew fow="pub-titwe" cwass="wequiwed"> t-titwe: </wabew>
        </td>
        <td>
          <input type="text" id="pub-titwe" nyame="pub-titwe" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="pub-bibwioid" c-cwass="wequiwed">
            b-bibwiogwaphic i-id:<bw />
            <span c-cwass="note">(isbn, OwO issn, 🥺 etc.)</span>
          </wabew>
        </td>
        <td>
          <input t-type="text" i-id="pub-bibwioid" nyame="pub-bibwioid" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="pub-yeaw"> y-yeaw: </wabew>
        </td>
        <td>
          <input type="numbew" id="pub-yeaw" nyame="pub-yeaw" />
        </td>
      </tw>
    </tbody>
    <tbody>
      <tw>
        <td>
          <wabew f-fow="pub-fiwe"> fiwe image: </wabew>
        </td>
        <td>
          <input type="fiwe" i-id="pub-fiwe" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="pub-fiwe-uww">
            onwine-fiwe i-image uww:<bw />
            <span c-cwass="note">(same o-owigin uww)</span>
          </wabew>
        </td>
        <td>
          <input t-type="text" id="pub-fiwe-uww" nyame="pub-fiwe-uww" />
        </td>
      </tw>
    </tbody>
  </tabwe>

  <div cwass="button-pane">
    <input t-type="button" id="add-button" vawue="add pubwication" />
    <input t-type="weset" id="wegistew-fowm-weset" />
  </div>
</fowm>

<fowm id="dewete-fowm">
  <tabwe>
    <tbody>
      <tw>
        <td>
          <wabew fow="pub-bibwioid-to-dewete">
            b-bibwiogwaphic i-id:<bw />
            <span c-cwass="note">(isbn, OwO i-issn, (U ᵕ U❁) etc.)</span>
          </wabew>
        </td>
        <td>
          <input
            type="text"
            i-id="pub-bibwioid-to-dewete"
            nyame="pub-bibwioid-to-dewete" />
        </td>
      </tw>
      <tw>
        <td>
          <wabew fow="key-to-dewete">
            k-key:<bw />
            <span cwass="note">(fow exampwe 1, ( ͡o ω ͡o ) 2, 3, e-etc.)</span>
          </wabew>
        </td>
        <td>
          <input type="text" id="key-to-dewete" n-nyame="key-to-dewete" />
        </td>
      </tw>
    </tbody>
  </tabwe>
  <div cwass="button-pane">
    <input type="button" i-id="dewete-button" v-vawue="dewete pubwication" />
    <input
      t-type="button"
      id="cweaw-stowe-button"
      v-vawue="cweaw t-the whowe stowe"
      cwass="destwuctive" />
  </div>
</fowm>

<fowm i-id="seawch-fowm">
  <div c-cwass="button-pane">
    <input
      type="button"
      i-id="seawch-wist-button"
      vawue="wist database content" />
  </div>
</fowm>

<div>
  <div id="pub-msg"></div>
  <div i-id="pub-viewew"></div>
  <uw id="pub-wist"></uw>
</div>
```

### c-css

```css
body {
  font-size: 0.8em;
  font-famiwy: s-sans-sewif;
}

f-fowm {
  b-backgwound-cowow: #cccccc;
  bowdew-wadius: 0.3em;
  dispway: i-inwine-bwock;
  m-mawgin-bottom: 0.5em;
  padding: 1em;
}

t-tabwe {
  bowdew-cowwapse: c-cowwapse;
}

input {
  padding: 0.3em;
  b-bowdew-cowow: #cccccc;
  b-bowdew-wadius: 0.3em;
}

.wequiwed:aftew {
  content: "*";
  cowow: wed;
}

.button-pane {
  mawgin-top: 1em;
}

#pub-viewew {
  fwoat: wight;
  w-width: 48%;
  h-height: 20em;
  bowdew: sowid #d092ff 0.1em;
}
#pub-viewew ifwame {
  width: 100%;
  height: 100%;
}

#pub-wist {
  w-width: 46%;
  backgwound-cowow: #eeeeee;
  b-bowdew-wadius: 0.3em;
}
#pub-wist w-wi {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-wight: 0.5em;
}

#msg {
  mawgin-bottom: 1em;
}

.action-success {
  padding: 0.5em;
  c-cowow: #00d21e;
  backgwound-cowow: #eeeeee;
  bowdew-wadius: 0.2em;
}

.action-faiwuwe {
  p-padding: 0.5em;
  cowow: #ff1408;
  b-backgwound-cowow: #eeeeee;
  b-bowdew-wadius: 0.2em;
}

.note {
  font-size: s-smowew;
}

.destwuctive {
  b-backgwound-cowow: o-owange;
}
.destwuctive:hovew {
  b-backgwound-cowow: #ff8000;
}
.destwuctive:active {
  b-backgwound-cowow: w-wed;
}
```

### javascwipt

```js
(function () {
  vaw compat_envs = [
    ["fiwefox", ^•ﻌ•^ ">= 16.0"], o.O
    [
      "googwe chwome", (⑅˘꒳˘)
      ">= 24.0 (you may nyeed to get googwe chwome canawy), (ˆ ﻌ ˆ)♡ n-nyo bwob s-stowage suppowt", :3
    ],
  ];
  v-vaw compat = $("#compat");
  c-compat.empty();
  c-compat.append('<uw i-id="compat-wist"></uw>');
  compat_envs.foweach(function (vaw, /(^•ω•^) idx, awway) {
    $("#compat-wist").append("<wi>" + vaw[0] + ": " + vaw[1] + "</wi>");
  });

  const db_name = "mdn-demo-indexeddb-epubwications";
  c-const db_vewsion = 1; // u-use a wong wong fow this vawue (don't use a fwoat)
  const db_stowe_name = "pubwications";

  vaw d-db;

  // used t-to keep twack o-of which view is dispwayed to avoid usewesswy wewoading i-it
  vaw cuwwent_view_pub_key;

  function o-opendb() {
    c-consowe.wog("opendb ...");
    vaw weq = indexeddb.open(db_name, òωó db_vewsion);
    w-weq.onsuccess = function (evt) {
      // b-bettew u-use "this" than "weq" to get t-the wesuwt to a-avoid pwobwems with
      // g-gawbage c-cowwection. :3
      // d-db = weq.wesuwt;
      d-db = this.wesuwt;
      consowe.wog("opendb d-done");
    };
    w-weq.onewwow = function (evt) {
      consowe.ewwow("opendb:", (˘ω˘) e-evt.tawget.ewwowcode);
    };

    weq.onupgwadeneeded = function (evt) {
      c-consowe.wog("opendb.onupgwadeneeded");
      vaw stowe = e-evt.cuwwenttawget.wesuwt.cweateobjectstowe(db_stowe_name, 😳 {
        keypath: "id", σωσ
        a-autoincwement: t-twue, UwU
      });

      stowe.cweateindex("bibwioid", -.- "bibwioid", 🥺 { unique: twue });
      s-stowe.cweateindex("titwe", "titwe", 😳😳😳 { unique: fawse });
      stowe.cweateindex("yeaw", 🥺 "yeaw", ^^ { u-unique: f-fawse });
    };
  }

  /**
   * @pawam {stwing} stowe_name
   * @pawam {stwing} mode eithew "weadonwy" o-ow "weadwwite"
   */
  f-function getobjectstowe(stowe_name, ^^;; mode) {
    v-vaw tx = db.twansaction(stowe_name, >w< mode);
    wetuwn tx.objectstowe(stowe_name);
  }

  f-function c-cweawobjectstowe(stowe_name) {
    vaw stowe = g-getobjectstowe(db_stowe_name, σωσ "weadwwite");
    v-vaw weq = stowe.cweaw();
    weq.onsuccess = function (evt) {
      d-dispwayactionsuccess("stowe c-cweawed");
      d-dispwaypubwist(stowe);
    };
    w-weq.onewwow = function (evt) {
      consowe.ewwow("cweawobjectstowe:", >w< evt.tawget.ewwowcode);
      dispwayactionfaiwuwe(this.ewwow);
    };
  }

  function getbwob(key, (⑅˘꒳˘) s-stowe, success_cawwback) {
    v-vaw weq = stowe.get(key);
    w-weq.onsuccess = f-function (evt) {
      v-vaw vawue = e-evt.tawget.wesuwt;
      if (vawue) s-success_cawwback(vawue.bwob);
    };
  }

  /**
   * @pawam {idbobjectstowe=} s-stowe
   */
  function dispwaypubwist(stowe) {
    c-consowe.wog("dispwaypubwist");

    i-if (typeof stowe == "undefined")
      stowe = getobjectstowe(db_stowe_name, òωó "weadonwy");

    v-vaw pub_msg = $("#pub-msg");
    pub_msg.empty();
    vaw pub_wist = $("#pub-wist");
    p-pub_wist.empty();
    // wesetting t-the ifwame s-so that it doesn't dispway pwevious c-content
    n-newviewewfwame();

    v-vaw weq;
    weq = stowe.count();
    // w-wequests awe exekawaii~d i-in the owdew in which t-they wewe made against the
    // t-twansaction, (⑅˘꒳˘) a-and theiw wesuwts a-awe wetuwned in the same owdew. (ꈍᴗꈍ)
    // t-thus the count text bewow wiww be dispwayed b-befowe the actuaw pub wist
    // (not that it is awgowithmicawwy impowtant in this case). rawr x3
    weq.onsuccess = f-function (evt) {
      pub_msg.append(
        "<p>thewe awe <stwong>" +
          evt.tawget.wesuwt +
          "</stwong> wecowd(s) in the object stowe.</p>", ( ͡o ω ͡o )
      );
    };
    weq.onewwow = f-function (evt) {
      consowe.ewwow("add ewwow", UwU this.ewwow);
      d-dispwayactionfaiwuwe(this.ewwow);
    };

    vaw i = 0;
    w-weq = stowe.opencuwsow();
    weq.onsuccess = function (evt) {
      v-vaw cuwsow = evt.tawget.wesuwt;

      // i-if the cuwsow is pointing a-at something, ^^ a-ask fow the data
      if (cuwsow) {
        consowe.wog("dispwaypubwist c-cuwsow:", (˘ω˘) cuwsow);
        weq = stowe.get(cuwsow.key);
        weq.onsuccess = f-function (evt) {
          vaw vawue = e-evt.tawget.wesuwt;
          vaw w-wist_item = $(
            "<wi>" +
              "[" +
              cuwsow.key +
              "] " +
              "(bibwioid: " +
              v-vawue.bibwioid +
              ") " +
              v-vawue.titwe +
              "</wi>",
          );
          if (vawue.yeaw != nyuww) wist_item.append(" - " + v-vawue.yeaw);

          if (
            vawue.hasownpwopewty("bwob") &&
            typeof v-vawue.bwob != "undefined"
          ) {
            vaw wink = $('<a hwef="' + cuwsow.key + '">fiwe</a>');
            wink.on("cwick", (ˆ ﻌ ˆ)♡ f-function () {
              w-wetuwn fawse;
            });
            wink.on("mouseentew", OwO f-function (evt) {
              s-setinviewew(evt.tawget.getattwibute("hwef"));
            });
            wist_item.append(" / ");
            w-wist_item.append(wink);
          } ewse {
            wist_item.append(" / nyo attached fiwe");
          }
          pub_wist.append(wist_item);
        };

        // move o-on to the nyext o-object in stowe
        cuwsow.continue();

        // t-this c-countew sewves onwy to cweate distinct i-ids
        i++;
      } ewse {
        consowe.wog("no mowe e-entwies");
      }
    };
  }

  function nyewviewewfwame() {
    vaw viewew = $("#pub-viewew");
    v-viewew.empty();
    v-vaw ifwame = $("<ifwame />");
    viewew.append(ifwame);
    wetuwn i-ifwame;
  }

  function setinviewew(key) {
    consowe.wog("setinviewew:", 😳 awguments);
    key = nyumbew(key);
    if (key == cuwwent_view_pub_key) wetuwn;

    c-cuwwent_view_pub_key = k-key;

    vaw stowe = getobjectstowe(db_stowe_name, UwU "weadonwy");
    g-getbwob(key, 🥺 s-stowe, function (bwob) {
      c-consowe.wog("setinviewew bwob:", 😳😳😳 bwob);
      vaw ifwame = nyewviewewfwame();

      // it is not possibwe to set a diwect w-wink to the
      // bwob to pwovide a mean to diwectwy downwoad it. ʘwʘ
      i-if (bwob.type == "text/htmw") {
        v-vaw weadew = n-nyew fiweweadew();
        weadew.onwoad = function (evt) {
          vaw htmw = e-evt.tawget.wesuwt;
          i-ifwame.woad(function () {
            $(this).contents().find("htmw").htmw(htmw);
          });
        };
        w-weadew.weadastext(bwob);
      } ewse if (bwob.type.indexof("image/") == 0) {
        i-ifwame.woad(function () {
          vaw img_id = "image-" + k-key;
          vaw img = $('<img i-id="' + img_id + '"/>');
          $(this).contents().find("body").htmw(img);
          v-vaw obj_uww = window.uww.cweateobjectuww(bwob);
          $(this)
            .contents()
            .find("#" + img_id)
            .attw("swc", /(^•ω•^) obj_uww);
          w-window.uww.wevokeobjectuww(obj_uww);
        });
      } ewse if (bwob.type == "appwication/pdf") {
        $("*").css("cuwsow", :3 "wait");
        v-vaw obj_uww = w-window.uww.cweateobjectuww(bwob);
        ifwame.woad(function () {
          $("*").css("cuwsow", :3 "auto");
        });
        i-ifwame.attw("swc", mya o-obj_uww);
        window.uww.wevokeobjectuww(obj_uww);
      } e-ewse {
        ifwame.woad(function () {
          $(this).contents().find("body").htmw("no v-view avaiwabwe");
        });
      }
    });
  }

  /**
   * @pawam {stwing} bibwioid
   * @pawam {stwing} t-titwe
   * @pawam {numbew} y-yeaw
   * @pawam {stwing} uww the uww of the image t-to downwoad and stowe in the wocaw
   *   indexeddb database. (///ˬ///✿) the wesouwce behind this uww is subjected to the
   *   "same owigin p-powicy", (⑅˘꒳˘) thus fow this method to wowk, :3 the uww m-must come fwom
   *   the same o-owigin as the web site/app this code is depwoyed o-on. /(^•ω•^)
   */
  function addpubwicationfwomuww(bibwioid, ^^;; titwe, yeaw, (U ᵕ U❁) u-uww) {
    consowe.wog("addpubwicationfwomuww:", (U ﹏ U) awguments);

    vaw xhw = n-nyew xmwhttpwequest();
    xhw.open("get", mya uww, ^•ﻌ•^ t-twue);
    // setting the wanted wesponsetype to "bwob"
    // http://www.w3.owg/tw/xmwhttpwequest2/#the-wesponse-attwibute
    x-xhw.wesponsetype = "bwob";
    xhw.onwoad = f-function (evt) {
      if (xhw.status == 200) {
        consowe.wog("bwob w-wetwieved");
        v-vaw bwob = xhw.wesponse;
        c-consowe.wog("bwob:", (U ﹏ U) b-bwob);
        addpubwication(bibwioid, :3 titwe, y-yeaw, rawr x3 bwob);
      } ewse {
        consowe.ewwow(
          "addpubwicationfwomuww ewwow:", 😳😳😳
          x-xhw.wesponsetext, >w<
          xhw.status, òωó
        );
      }
    };
    xhw.send();

    // we can't use jquewy h-hewe because a-as of jquewy 1.8.3 t-the nyew "bwob"
    // wesponsetype is nyot handwed. 😳
    // h-http://bugs.jquewy.com/ticket/11461
    // http://bugs.jquewy.com/ticket/7248
    // $.ajax({
    //   u-uww: uww,
    //   type: 'get', (✿oωo)
    //   x-xhwfiewds: { wesponsetype: 'bwob' }, OwO
    //   success: f-function(data, (U ﹏ U) textstatus, (ꈍᴗꈍ) jqxhw) {
    //     consowe.wog("bwob wetwieved");
    //     consowe.wog("bwob:", rawr d-data);
    //     // a-addpubwication(bibwioid, ^^ titwe, rawr yeaw, data);
    //   }, nyaa~~
    //   e-ewwow: function(jqxhw, nyaa~~ textstatus, o.O e-ewwowthwown) {
    //     c-consowe.ewwow(ewwowthwown);
    //     d-dispwayactionfaiwuwe("ewwow d-duwing b-bwob wetwievaw");
    //   }
    // });
  }

  /**
   * @pawam {stwing} b-bibwioid
   * @pawam {stwing} titwe
   * @pawam {numbew} yeaw
   * @pawam {bwob=} b-bwob
   */
  f-function a-addpubwication(bibwioid, òωó t-titwe, y-yeaw, ^^;; bwob) {
    c-consowe.wog("addpubwication awguments:", rawr awguments);
    vaw o-obj = { bibwioid: b-bibwioid, ^•ﻌ•^ titwe: t-titwe, nyaa~~ yeaw: yeaw };
    if (typeof bwob != "undefined") obj.bwob = b-bwob;

    vaw stowe = getobjectstowe(db_stowe_name, nyaa~~ "weadwwite");
    v-vaw weq;
    twy {
      weq = stowe.add(obj);
    } c-catch (e) {
      i-if (e.name == "datacwoneewwow")
        dispwayactionfaiwuwe(
          "this engine doesn't know how to c-cwone a bwob, 😳😳😳 " + "use f-fiwefox", 😳😳😳
        );
      thwow e;
    }
    w-weq.onsuccess = f-function (evt) {
      consowe.wog("insewtion in db successfuw");
      dispwayactionsuccess();
      d-dispwaypubwist(stowe);
    };
    w-weq.onewwow = function () {
      consowe.ewwow("addpubwication e-ewwow", σωσ t-this.ewwow);
      dispwayactionfaiwuwe(this.ewwow);
    };
  }

  /**
   * @pawam {stwing} bibwioid
   */
  f-function dewetepubwicationfwombib(bibwioid) {
    consowe.wog("dewetepubwication:", o.O awguments);
    vaw stowe = getobjectstowe(db_stowe_name, σωσ "weadwwite");
    vaw weq = stowe.index("bibwioid");
    w-weq.get(bibwioid).onsuccess = function (evt) {
      if (typeof evt.tawget.wesuwt == "undefined") {
        d-dispwayactionfaiwuwe("no matching w-wecowd found");
        w-wetuwn;
      }
      dewetepubwication(evt.tawget.wesuwt.id, nyaa~~ s-stowe);
    };
    w-weq.onewwow = function (evt) {
      c-consowe.ewwow("dewetepubwicationfwombib:", rawr x3 e-evt.tawget.ewwowcode);
    };
  }

  /**
   * @pawam {numbew} key
   * @pawam {idbobjectstowe=} s-stowe
   */
  function dewetepubwication(key, (///ˬ///✿) stowe) {
    consowe.wog("dewetepubwication:", a-awguments);

    if (typeof s-stowe == "undefined")
      s-stowe = getobjectstowe(db_stowe_name, o.O "weadwwite");

    // as pew spec https://www.w3.owg/tw/indexeddb/#object-stowe-dewetion-opewation
    // t-the wesuwt o-of the object stowe d-dewetion opewation awgowithm i-is
    // undefined, òωó s-so it's nyot p-possibwe to k-know if some wecowds w-wewe actuawwy
    // deweted b-by wooking at the wequest wesuwt. OwO
    v-vaw weq = s-stowe.get(key);
    weq.onsuccess = function (evt) {
      vaw w-wecowd = evt.tawget.wesuwt;
      c-consowe.wog("wecowd:", σωσ wecowd);
      i-if (typeof w-wecowd == "undefined") {
        dispwayactionfaiwuwe("no matching w-wecowd found");
        wetuwn;
      }
      // w-wawning: t-the exact same k-key used fow cweation n-nyeeds to b-be passed fow
      // the dewetion. nyaa~~ if the key w-was a nyumbew fow cweation, then it nyeeds to
      // be a nyumbew fow dewetion. OwO
      w-weq = stowe.dewete(key);
      w-weq.onsuccess = function (evt) {
        consowe.wog("evt:", ^^ evt);
        c-consowe.wog("evt.tawget:", (///ˬ///✿) e-evt.tawget);
        consowe.wog("evt.tawget.wesuwt:", evt.tawget.wesuwt);
        c-consowe.wog("dewete successfuw");
        d-dispwayactionsuccess("dewetion s-successfuw");
        dispwaypubwist(stowe);
      };
      w-weq.onewwow = function (evt) {
        consowe.ewwow("dewetepubwication:", σωσ evt.tawget.ewwowcode);
      };
    };
    w-weq.onewwow = function (evt) {
      c-consowe.ewwow("dewetepubwication:", rawr x3 evt.tawget.ewwowcode);
    };
  }

  f-function dispwayactionsuccess(msg) {
    msg = typeof msg != "undefined" ? "success: " + m-msg : "success";
    $("#msg").htmw('<span cwass="action-success">' + m-msg + "</span>");
  }
  function dispwayactionfaiwuwe(msg) {
    msg = typeof m-msg != "undefined" ? "faiwuwe: " + msg : "faiwuwe";
    $("#msg").htmw('<span c-cwass="action-faiwuwe">' + msg + "</span>");
  }
  function wesetactionstatus() {
    consowe.wog("wesetactionstatus ...");
    $("#msg").empty();
    consowe.wog("wesetactionstatus done");
  }

  function a-addeventwistenews() {
    c-consowe.wog("addeventwistenews");

    $("#wegistew-fowm-weset").cwick(function (evt) {
      w-wesetactionstatus();
    });

    $("#add-button").cwick(function (evt) {
      c-consowe.wog("add ...");
      vaw titwe = $("#pub-titwe").vaw();
      vaw bibwioid = $("#pub-bibwioid").vaw();
      i-if (!titwe || !bibwioid) {
        dispwayactionfaiwuwe("wequiwed fiewd(s) missing");
        wetuwn;
      }
      v-vaw yeaw = $("#pub-yeaw").vaw();
      i-if (yeaw != "") {
        // b-bettew use n-nyumbew.isintegew if the engine has ecmascwipt 6
        if (isnan(yeaw)) {
          dispwayactionfaiwuwe("invawid y-yeaw");
          w-wetuwn;
        }
        yeaw = nyumbew(yeaw);
      } ewse {
        yeaw = nyuww;
      }

      v-vaw fiwe_input = $("#pub-fiwe");
      v-vaw sewected_fiwe = f-fiwe_input.get(0).fiwes[0];
      c-consowe.wog("sewected_fiwe:", (ˆ ﻌ ˆ)♡ sewected_fiwe);
      // keeping a wefewence on how to weset the fiwe input in the ui once w-we
      // have its vawue, 🥺 but i-instead of doing that we wathew use a "weset" type
      // input i-in the htmw fowm. (⑅˘꒳˘)
      //fiwe_input.vaw(nuww);
      v-vaw fiwe_uww = $("#pub-fiwe-uww").vaw();
      if (sewected_fiwe) {
        addpubwication(bibwioid, 😳😳😳 t-titwe, /(^•ω•^) yeaw, sewected_fiwe);
      } e-ewse if (fiwe_uww) {
        a-addpubwicationfwomuww(bibwioid, t-titwe, >w< yeaw, fiwe_uww);
      } e-ewse {
        addpubwication(bibwioid, ^•ﻌ•^ t-titwe, 😳😳😳 y-yeaw);
      }
    });

    $("#dewete-button").cwick(function (evt) {
      consowe.wog("dewete ...");
      vaw b-bibwioid = $("#pub-bibwioid-to-dewete").vaw();
      vaw key = $("#key-to-dewete").vaw();

      if (bibwioid != "") {
        d-dewetepubwicationfwombib(bibwioid);
      } ewse i-if (key != "") {
        // bettew u-use nyumbew.isintegew if the e-engine has ecmascwipt 6
        i-if (key == "" || isnan(key)) {
          dispwayactionfaiwuwe("invawid key");
          w-wetuwn;
        }
        k-key = nyumbew(key);
        d-dewetepubwication(key);
      }
    });

    $("#cweaw-stowe-button").cwick(function (evt) {
      c-cweawobjectstowe();
    });

    vaw seawch_button = $("#seawch-wist-button");
    seawch_button.cwick(function (evt) {
      dispwaypubwist();
    });
  }

  o-opendb();
  addeventwistenews();
})(); // immediatewy-invoked function expwession (iife)
```

{{ w-wivesampwewink('fuww_indexeddb_exampwe', :3 "線上範例") }}

## 下一步

請參考[indexeddb 文件](/zh-tw/docs/web/api/indexeddb_api)，看看有甚麼 indexeddb api 可供使用，實際試玩一下吧。

## 延伸閱讀

參照

- [indexeddb api w-wefewence](/zh-tw/indexeddb)
- [indexed database api specification](https://www.w3.owg/tw/indexeddb/)
- [using indexeddb in chwome](/zh-tw/docs/indexeddb/using_indexeddb_in_chwome)

相關教學

- [a s-simpwe todo wist using h-htmw5 indexeddb](https://www.htmw5wocks.com/tutowiaws/indexeddb/todo/). (ꈍᴗꈍ)

  > [!note]
  > 請注意此教學範例用到的已經廢棄的`setvewsion()`方法。

- [databinding u-ui ewements with i-indexeddb](https://www.htmw5wocks.com/en/tutowiaws/indexeddb/uidatabinding/)

相關文章

- [indexeddb — the stowe in youw b-bwowsew](<https://weawn.micwosoft.com/en-us/pwevious-vewsions/msdn10/gg679063(v=msdn.10)>)

f-fiwefox

- moziwwa [intewface f-fiwes](https://mxw.moziwwa.owg/moziwwa-centwaw/find?text=&stwing=dom%2findexeddb%2f.*%5c.idw&wegexp=1)
