---
title: 使用IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
---

IndexedDB 提供了在瀏覽器上儲存保留資料的功能，藉由它，不論是線上或線下我們的應用都可以進行資料存取。

## 關於本文

本文會帶領各位操作非同步 IndexedDB 的 API，如果不知道甚麼是 IndexedDB，請先看看["IndexedDB 基本礎念"](/zh-TW/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB)。

## 基本操作步驟

操作 IndexedDB 的基本步驟建議如下:

1. 開啟資料庫和交易(transaction)。
2. 建立物件存檔(object store)
3. 發出資料庫操作請求，例如新增或取得資料。
4. 聆聽對應 DOM 事件等待操作完成。
5. 從 result 物件上取得結果進行其他工作。

好了，知道了上述概念後，我們可以來實際做些甚麼。

## 建立和結構資料庫

由於 IndexedDB 的標準仍在演進，所以目前一些實作還需要加上瀏覽器前綴標示(如 Gecko 基礎瀏覽器的前綴標示為 moz，WebKit 基礎瀏覽器的前綴標示為 webkit)，瀏覽器的實作也可能會有所差異，不過一旦共識標準達成，無瀏覽器前綴標示實作將出現。其實，Internet Explorer 10, Firefox 16, Chrome 24 已經有了無瀏覽器前綴標示實作。

### 操作實驗性質的 IndexedDB

如果需要試驗瀏覽器的前綴標示，可以如下:

```js
// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction =
  window.IDBTransaction ||
  window.webkitIDBTransaction ||
  window.msIDBTransaction;
window.IDBKeyRange =
  window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)
```

請注意瀏覽器前綴標示的實作可能不完整、有些問題或仍然遵守舊版標準，因此不建議在正式版程式碼中使用。與其宣稱支援又有問題，倒不如直接不支援。

```js
if (!window.indexedDB) {
  window.alert(
    "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.",
  );
}
```

### 開啟資料庫

開頭如下:

```js
// Let us open our database
var request = window.indexedDB.open("MyTestDatabase", 3);
```

注意到了嗎，開啟資料庫必須要進行請求。

開啟請求並不會立刻開啟資料庫或交易，呼叫 open()方法會回傳一個[`IDBOpenDBRequest`](/zh-TW/docs/IndexedDB/IDBOpenDBRequest)物件，這個物件擁有兩個事件(success 和 error)。大部分 IndexedDB 的非同步功能都會回傳一個[`IDBDatabase`](/zh-TW/docs/IndexedDB/IDBDatabase)類物件，然後我們可以註冊成功和失敗事件處理器。

Open 方法第二個參數是資料庫版本，資料庫版本決定了資料庫結構，也就是資料庫物件存檔的結構。如果請求版本不存在(比如因為這是一個新資料庫或是資料庫版本已升級)，onupgradeneeded 事件會被觸發，然後我們可以在 onupgradeneeded 事件處理器中再建立新的版本，下面[升級資料庫版本](#Updating_the_version_of_the_database)有更詳細的說明。

#### 產生事件處理器

幾乎所有第一件要對請求做的事都是產生 success 和 error 事件處理器:

```js
request.onerror = function (event) {
  // Do something with request.errorCode!
};
request.onsuccess = function (event) {
  // Do something with request.result!
};
```

如果一切正常，success 事件(也就是 DOM 事件的 type 屬性設為 success)會以 request 為目標觸發，然後 request 物件上的 onsuccess 函數接著被呼叫，其中 success 事件就是參數；否則 error 事件(也就是 DOM 事件的 type 屬性設為 error)會以 request 為目標觸發，然後 request 物件上的 onerror 函數接著被呼叫，其中 error 事件就是參數。

IndexedDB 的 API 設計上盡量減少錯誤處理，所以不太常看到錯誤事件，不過開啟資料庫的時候還是有一些狀況會產產生錯誤，最常見的狀況是使用者拒絕我們建立資料庫。

IndexedDB 設計目標之一為存放大量資料以供離線使用(請參考["儲存限制"](/zh-TW/IndexedDB#Storage_limits)了解更多細節)。但很明顯地，瀏覽器又不樂見一些廣告網站或惡意網站汙染電腦，所以當任一個網路應用第一次開啟 IndexedDB 資料庫，瀏覽器會徵詢使用者是否准許其作業；同時在私密瀏覽中開啟作業也會失敗，因為私密瀏覽不會留下任何瀏覽痕跡。

這裡呼叫 indexedDB.open()開啟 indexedDB 資料庫並回傳 request 物件，假設使用者允許我們建立 indexedDB 資料庫，我們也收到 suceess 事件觸發了 success 回呼函數(callback)，request 物件的 result 屬性會是一個 IDBDatabase 物件 ，接下來便是要儲存這個物件之後使用。下方是整個作業的示範程式碼:

```js
var db;
var request = indexedDB.open("MyTestDatabase");
request.onerror = function (event) {
  alert("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = function (event) {
  db = request.result;
};
```

#### 錯誤處理

錯誤事件會向上傳遞；錯誤事件以產生錯誤之請求為目標觸發，然後一路傳遞到交易，最後到資料庫物件；如果不想要為每一個請求新增錯誤處理器，可以改為資料庫物件加入一個錯誤處理器。

```js
db.onerror = function (event) {
  // Generic error handler for all errors targeted at this database's
  // requests!
  alert("Database error: " + event.target.errorCode);
};
```

最常見的錯誤之一就是 VER_ERR，該錯誤代表現在資料料庫版本大於嘗試開啟的資料庫版本，這項錯誤必須要有錯誤處理器處理。

### 建立或更新資料庫版本

新版本資料庫建立會觸發 onupgradeneeded 事件，在這個事件的處理器中要建立這個版本資料庫需要的物件存檔。

```js
// This event is only implemented in recent browsers
request.onupgradeneeded = function (event) {
  var db = event.target.result;

  // Create an objectStore for this database
  var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

資料庫版本是 unsigned long long 的數字，所以能夠非常長。

> **警告：** 請注意這也意味著版本不能為浮點數，否則小數點部分將會無條件捨去，而交易也可能不會開始，upgradeneeded 事件也不會觸發。不要像以下例子以 2.4 作版本:
>
> ```js
> var request = indexedDB.open("MyTestDatabase", 2.4); // don't do this, as the version will be rounded to 2
> ```

升級版本資料庫建立會觸發 onupgradeneeded 事件，這個時候資料庫裡面已經含有前版本下的物件存檔，所以說不需要再次建立這些物件存檔了，剩下的是新增或刪除物件存檔。如果想要更動既存物件存檔(例如改變資料鍵路徑)，那麼會需要先刪除舊的再產生一個新的(請注意這也會刪除物件存檔裡的資料，所以如果資料需要保留的話，請在升級前先讀出資料備份。)

Webkit 支援最新標準不過只有 Chrome 23 才開始導入，而較舊不支援最新版標準的版本則不支援 indexedDB.open(name, version).onupgradeneeded。關於如何在舊版標準下升級資料庫版本請參考["IDBDatabase 參考文章"](/zh-TW/docs/Web/API/IDBDatabase?redirectlocale=en-US&redirectslug=IndexedDB%2FIDBDatabase#setVersion%28%29_.0A.0ADeprecated)。

### 結構化資料庫

indexedDB 不用資料表而是物件存檔，物件存檔可以有很多。一筆物件存檔裡的資料值對應一筆資料鍵，依據使用{資料鍵路徑([key path](/zh-TW/IndexedDB#gloss_key_path))}或{資料鍵產生器([key generator](/zh-TW/IndexedDB#gloss_key_generator))}。

下表列出資料建各類產生途徑:

| Key Path | Key Generator | 描述                                                                                                                                                                                                   |
| -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| No       | No            | 物件存檔資料值能為任何型別，即使像數字或字串。每當新增一筆資料，必須提供不同的資料鍵。                                                                                                                 |
| Yes      | No            | 物件存檔資料值僅能為 Javacript 物件，而該資料物件必須含有和資料鍵路徑相同名稱之屬性成員。                                                                                                              |
| No       | Yes           | 物件存檔資料值能為任何型別，資料鍵自動產生，但如果想要指定資料鍵也可以另外提供資料鍵。                                                                                                                 |
| Yes      | Yes           | 物件存檔資料值僅能為 Javascript 物件。通常被產生的新資料鍵的值會被存在物件屬性名稱和資料鍵路徑名稱相同的物件屬性下，如果這個屬性已經存在，這個已經存在之屬性之值將被用作為資料鍵，而非新產生的資料鍵。 |

我們可以替任何儲存資料為物件型態而非原始資料型態的物件存檔建立索引，索引讓我們能夠用物件存檔中資料物件內的某一個屬性值查找資料，而非僅僅物件的資料鍵。

除此之外，利用索引還可以施加簡單的儲存限制；建立索引時設定獨特旗標(flag)，這個索引保證在此索引資料鍵下不會存在兩個物件存檔擁有同樣資料值，比如說現在有一個存放許多使用者的物件存檔，而且我們希望保證不會存在有兩個使用者的電子郵件地址一樣，此使索引的獨特旗標便可以幫助我們達成目標。

以上聽起來可能會有些複雜，請看一下下面的實例:

```js
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];
const dbName = "the_name";

var request = indexedDB.open(dbName, 2);

request.onerror = function (event) {
  // Handle errors.
};
request.onupgradeneeded = function (event) {
  var db = event.target.result;

  // Create an objectStore to hold information about our customers. We're
  // going to use "ssn" as our key path because it's guaranteed to be
  // unique.
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // Create an index to search customers by name. We may have duplicates
  // so we can't use a unique index.
  objectStore.createIndex("name", "name", { unique: false });

  // Create an index to search customers by email. We want to ensure that
  // no two customers have the same email, so use a unique index.
  objectStore.createIndex("email", "email", { unique: true });

  // Store values in the newly created objectStore.
  for (var i in customerData) {
    objectStore.add(customerData[i]);
  }
};
```

請注意 onupgradeneeded 事件是唯一能夠變更資料庫結構之處，在此事件才能建立或刪除物件存檔以及建立和刪除索引。

呼叫[IDBDatabase](/zh-TW/docs/Web/API/IDBDatabase?redirectlocale=en-US&redirectslug=IndexedDB%2FIDBDatabase#setVersion%28%29_.0A.0ADeprecated)類別物件的 createObjectStore 方法會立刻創造一個物件存檔，這個方法接收兩個參數，一個是物件存檔名稱，一個是非必填的參數物件，雖然參數物件不為必填但是卻相當重要，因為它讓我們定義了一些重要屬性(請參考[createObjectStore](/zh-TW/docs/Web/API/IDBDatabase?redirectlocale=en-US&redirectslug=IndexedDB%2FIDBDatabase#createObjectStore))。本例中我們要求建立了一個"customer"物件存檔，定義"ssn"屬性為資料件路徑，使用"ssn"作為資料鍵路徑是因為每個客戶的 ssn 碼一定是獨立的。一旦決定了"ssn"作為資料鍵路徑，那麼每一筆資料一定要含有"ssn"。

本例還創建一個稱為"name"的索引，"name"索引查找目標為資料的"name"屬性，且不設立其獨特旗標(unique 為 false)，同樣地，我們又呼叫[createIndex](</zh-TW/docs/Web/API/IDBObjectStore?redirectlocale=en-US&redirectslug=IndexedDB%2FIDBObjectStore#createIndex()>)方法創建了一個"email"索引，不過"email"索引具備獨特旗標(unique 為 true)。雖然存在"name"索引，但資料不一定要含有"name"屬性，只是當搜索"name"索引時資料不會出現。

接下來我們可以開始用 ssn 從物件存檔中取出資料，或是用索引找出資料(請參考[使用索引](/zh-TW/docs/IndexedDB/Using_IndexedDB#.E4.BD.BF.E7.94.A8.E7.B4.A2.E5.BC.95))。

### 使用資料鍵產生器

當建立物件存檔時設定 autoIncrement 旗標為 ture 將啟動資料鍵產生器，預設上該旗標為 false。

有了資料鍵產生器，當新增資料到物件存檔中，資料鍵產生器會自動幫我們產生資料鍵。資料鍵產生器產生的資料鍵由整數 1 開始，而基本上新產生的資料鍵是由前一個資料鍵加 1 產生。資料鍵的產生不會因為資料刪除或清空所有資料而重新開始起算，所以資料鍵值是一直累加上去的，除非資料庫操作中斷，整個交易作業被取消。

我們可以建立一個有資料鍵產生器的物件存檔如下:

```js
// Open the indexedDB.
var request = indexedDB.open(dbName, 3);

request.onupgradeneeded = function (event) {
  var db = event.target.result;

  // Create another object store called "names" with the autoIncrement flag set as true.
  var objStore = db.createObjectStore("names", { autoIncrement: true });

  // Because the "names" object store has the key generator, the key for the name value is generated automatically.
  // The added records would be like:
  // key : 1 => value : "Bill"
  // key : 2 => value : "Donna"
  for (var i in customerData) {
    objStore.add(customerData[i].name);
  }
};
```

關於資料鍵產生器細節，請參考["W3C Key Generators"](http://www.w3.org/TR/IndexedDB/#key-generator-concept)。

## 新增和刪除資料

在操作資料庫之前必須要先進行交易，交易來自資料庫物件，在交易中要指定涵蓋物件存檔範圍，然後也要決定是要變更資料庫或純粹讀取資料。交易共有三種種類，分別是讀取(read-only)，讀寫(read/write), 以及版本變更(versionchange)，如果只需要讀資料最好只使用讀取(read-only)交易，因為讀取(read-only)交易可以多重同步進行。

### 新增資料到資料庫

創建資料庫後，如果要寫入資料請這麼做:

```js
var transaction = db.transaction(["customers"], "readwrite");
// Note: Older experimental implementations use the deprecated constant IDBTransaction.READ_WRITE instead of "readwrite".
// In case you want to support such an implementation, you can just write:
// var transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

呼叫[transaction()](/zh-TW/docs/Web/API/IDBDatabase#transaction)方法會回傳一個交易物件。transaction()第一個接受參數代表交易涵蓋的物件存檔，雖然傳入空陣列會讓交易涵蓋所有物件存檔，但請不要這麼做，因為根據正式標準傳入空陣列應該要導致 InvalidAccessError 錯誤；第二個參數代表交易種類，不傳入的話預設為讀取交易，本例要寫入資料庫所以傳入讀寫("readwrite")。

交易的生命週期和事件循環關係密切。當我們發起交易又回到事件循環中後，如果忽略，那麼交易將轉成結束，唯一保持交易存活的方法是在交易上發出請求；當請求完成後我們會收到 DOM 事件，假設請求結果成功，我們可以在事件的回呼函數(callback 中)繼續進行交易，反之，如果我們沒有繼續進行交易，那麼交易將結束，也就是說只要尚有未完成請求的話，交易就會繼續存活，如果收到 TRANSACTION_INACTIVE_ERR 錯誤那便意謂著交易早已結束，我們錯過了繼續進行交易的機會。

交易能收到三種事件: 錯誤(error)、中斷(abort)以及完成(complete)，其中錯誤事件會向上傳遞，所以任何一個交易下轄的請求產生錯誤事件，該交易都會收到。如果交易收到錯誤事件時，瀏覽器預設行為會中斷交易，除非我們有在錯誤事件上呼叫 preventDefault()阻擋瀏覽器預設行動，否則整筆交易都將取消、復原，這樣的設計告訴我們必須要思考如何處裡錯誤，或者說如果對每一個錯誤進行處裡過於麻煩，那麼至少加入一個概括性的錯誤處理器也是可以。只要不處裡錯誤或呼叫 abort()，交易將取消、復原，然後中斷事件接著觸發，反之，當所有請求都完成後，我們會收到一個完成事件，所以說如果我們同時發起多項請求時，可以只追蹤單一交易而非個別請求，這樣會大大減輕我們的負擔。

有了交易之後便能夠從中取得物件存檔，有了物件存檔便能夠新增資料(請注意唯有在建立交易時指定的物件存檔能夠取得)。

```js
// Do something when all the data is added to the database.
transaction.oncomplete = function (event) {
  alert("All done!");
};

transaction.onerror = function (event) {
  // Don't forget to handle errors!
};

var objectStore = transaction.objectStore("customers");
for (var i in customerData) {
  var request = objectStore.add(customerData[i]);
  request.onsuccess = function (event) {
    // event.target.result == customerData[i].ssn;
  };
}
```

呼叫[add](</zh-TW/docs/Web/API/IDBObjectStore#add()>)方法可以加入一筆新資料，呼叫後會回傳一個[IDBRequest](/zh-TW/docs/Web/API/IDBRequest?redirectlocale=en-US&redirectslug=IndexedDB%2FIDBRequest)物件，即為上方範例中的 request，如果新增成功，request 的成功事件會被觸發，而成功事件物件中有一個 result 屬性，這個 result 值剛好就等於新資料的資料鍵，所以說上方範例中的 event.target.result 剛好就等於顧客的 ssn 值(因為我們用 ssn 屬性作為資料鍵路徑)。請注意 add 方法只在當物件存檔中沒有相同資料鍵資料存在時有用，如果想要更動或是直接覆蓋現存資料請呼叫[put](</zh-TW/docs/Web/API/IDBObjectStore#put()>)方法。

## 移除資料

移除資料十分容易:

```js
var request = db
  .transaction(["customers"], "readwrite")
  .objectStore("customers")
  .delete("444-44-4444");
request.onsuccess = function (event) {
  // It's gone!
};
```

## 讀取資料

要圖取資料庫內的資料有數種途徑，第一個最簡單的途徑就是提供資料鍵，呼叫[get](</zh-TW/docs/Web/API/IDBObjectStore#get()>)方法取得資料:

```js
var transaction = db.transaction(["customers"]);
var objectStore = transaction.objectStore("customers");
var request = objectStore.get("444-44-4444");
request.onerror = function (event) {
  // Handle errors!
};
request.onsuccess = function (event) {
  // Do something with the request.result!
  alert("Name for SSN 444-44-4444 is " + request.result.name);
};
```

假設我們把錯誤處理放在資料庫層級，我們可以再縮短上面的程式碼如下:

```js
db
  .transaction("customers")
  .objectStore("customers")
  .get("444-44-4444").onsuccess = function (event) {
  alert("Name for SSN 444-44-4444 is " + event.target.result.name);
};
```

呼叫 transcation 方法而不指定模式會開啟讀取(readonly)模式，接著取得我們的目標物件存檔，輸入目標資料的資料鍵，呼叫 get 方法取得請求物件，然後在請求物件上註冊成功事件處理器，當作業成功後，成功事件會觸發，成功事件的物件中含有請求物件(event.target 如上述範例)，請求物件中含有請求結果(event.target.result 如上述範例)。

## 使用指標(Cursor)

使用 get 方法需要知道資料鍵，如果想要一一存取物件存檔中的資料，我們可以利用指標:

```js
var objectStore = db.transaction("customers").objectStore("customers");

objectStore.openCursor().onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    alert("Name for SSN " + cursor.key + " is " + cursor.value.name);
    cursor.continue();
  } else {
    alert("No more entries!");
  }
};
```

[openCursor](</zh-TW/docs/Web/API/IDBObjectStore#openCursor()>)方法第一個參數用來接受資料鍵範圍物件來限制存取資料範圍，第二個參數用來指定存取進行方向，像上面的範例程式便是以資料鍵由小到大之方向存取資料；呼叫 openCursor 方法後一樣會回傳一個請求物件，成功時成功事件會觸發，不過這裡有些地方要特別注意，當成功事件處裡函數被喚起時，指標物件(cursor)會存放在 result 屬性內(亦即上述 event.target.result)，cursor 物件下有兩個屬性，key 屬性是資料鍵，value 屬性是資料值，如果要取得下一份資料就呼叫 cursor 的 continue()方法，然後 cursor 物件就會指向下一份資料，當沒有資料時，cursor 會是 undefined，當請求一開始便找沒有資料，result 屬性也會是 undefined。

以下用 cursor 存取一遍資料後放在陣列中的作法相當常見:

```js
var customers = [];

objectStore.openCursor().onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    customers.push(cursor.value);
    cursor.continue();
  } else {
    alert("Got all customers: " + customers);
  }
};
```

> **警告：** 以下範例不是 IndexedDB 標準!

Mozilla 瀏覽器自己做了一個 getAll()方法來方便一次取得所有 cursor 下的資料值，這個方法相當方便，不過請小心未來它有可能會消失。以下程式碼的效果和上面的一樣:

```js
objectStore.getAll().onsuccess = function (event) {
  alert("Got all customers: " + event.target.result);
};
```

一一檢查 cursor 的 value 屬性較不利性能表現，因為物件是被動一一建立，然而呼叫 getAll()，Gecko 一定要一次建立所有物件，所以如果想要一次取得所有物件的資料值陣列使用 getAll()比較好，如果想要一一檢查每筆資料則請利用 cursor 的方法。

### 使用索引

利用一定唯一的 ssn 碼作為資料鍵相當合乎邏輯(隱私權的問題先擱置一放，不在本文探討範圍)。不過當我們想要查詢使用者的名字的時候，如果沒有索引就需要一一檢查每一筆資料，十分沒有效率，所以我們可以建立 name 的索引。

```js
var index = objectStore.index("name");
index.get("Donna").onsuccess = function (event) {
  alert("Donna's SSN is " + event.target.result.ssn);
};
```

因為 name 不是唯一值，所以可能會有多筆資料符合"Donna"名字，此時呼叫 get()會取得資料鍵最小值的資料。

如果我們想要查看特定名字下所有的資料，可以利用 cursor。有兩種 cursor 能用在索引上，第一種一般 cursor 會比對索引值並回傳整份資料(物件存檔中的物件)，第二種資料鍵 cursor 則只會回傳資料鍵值，請參考下方範例比較兩者差異:

```js
index.openCursor().onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // cursor.key is a name, like "Bill", and cursor.value is the whole object.
    alert(
      "Name: " +
        cursor.key +
        ", SSN: " +
        cursor.value.ssn +
        ", email: " +
        cursor.value.email,
    );
    cursor.continue();
  }
};

index.openKeyCursor().onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // cursor.key is a name, like "Bill", and cursor.value is the SSN.
    // No way to directly get the rest of the stored object.
    alert("Name: " + cursor.key + ", SSN: " + cursor.value);
    cursor.continue();
  }
};
```

### 設定指標查詢範圍和方向

如果想要限定指標查詢範圍，那麼在乎叫 openCursor()或 openKeyCursor()時第一個參數要傳入[IDBKeyRange](/zh-TW/IndexedDB/IDBKeyRange)物件以限制範圍。IDBKeyRange 物件能夠只聚焦在單一資料鍵上或者一段上下限區間；上下限區間可以是封閉(含界限)或開放(不含界限)，請看以下範例:

```js
// Only match "Donna"
var singleKeyRange = IDBKeyRange.only("Donna");

// Match anything past "Bill", including "Bill"
var lowerBoundKeyRange = IDBKeyRange.lowerBound("Bill");

// Match anything past "Bill", but don't include "Bill"
var lowerBoundOpenKeyRange = IDBKeyRange.lowerBound("Bill", true);

// Match anything up to, but not including, "Donna"
var upperBoundOpenKeyRange = IDBKeyRange.upperBound("Donna", true);

// Match anything between "Bill" and "Donna", but not including "Donna"
var boundKeyRange = IDBKeyRange.bound("Bill", "Donna", false, true);

index.openCursor(boundKeyRange).onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the matches.
    cursor.continue();
  }
};
```

有時候我們會想要由大到小查看資料而非預設由小到大方向，傳入第二個"prev"字串便能做到:

```js
objectStore.openCursor(null, "prev").onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

由於"name"索引不具唯一性，所以一個名字下可能會出現多筆資料，此時如果想要避開這多筆資料，請傳入"nextunique"或"prevunique"做為第二個方向參數，當傳入之後，如一個名字下遇到多筆資料，則只有資料鍵最小的資料會被回傳。

```js
index.openKeyCursor(null, "nextunique").onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    // Do something with the entries.
    cursor.continue();
  }
};
```

關於可傳入的方向參數，請參考[IDBCursor](/zh-TW/docs/Web/API/IDBCursor?redirectlocale=en-US&redirectslug=IndexedDB%2FIDBCursor#Constants)常數。

## 當網頁應用程式於瀏覽器另一個分頁開啟時變更版本

請思考以下狀況: 使用者在第一個瀏覽器分頁中使用著舊版本，然後使用者又打開第二個分頁載入網頁，此時我們在新分頁需要對資料庫進行升級，所以呼叫 open()以更新版本開啟資料庫，但是由於第一個瀏覽器分頁並沒有關閉資料庫，因此第二個分頁的資料庫升級作業會被擋住。所以我們需要注意多個分頁同時開啟的狀況，每個分頁都得注意當發生資料庫升級事件時，要記得關閉資料庫，讓資料庫升級作業得以進行。實際作法如下:

```js
var openReq = mozIndexedDB.open("MyTestDatabase", 2);

openReq.onblocked = function (event) {
  // If some other tab is loaded with the database, then it needs to be closed
  // before we can proceed.
  alert("Please close all other tabs with this site open!");
};

openReq.onupgradeneeded = function (event) {
  // All other databases have been closed. Set everything up.
  db.createObjectStore(/* ... */);
  useDatabase(db);
};

openReq.onsuccess = function (event) {
  var db = event.target.result;
  useDatabase(db);
  return;
};

function useDatabase(db) {
  // Make sure to add a handler to be notified if another page requests a version
  // change. We must close the database. This allows the other page to upgrade the database.
  // If you don't do this then the upgrade won't happen until the user closes the tab.
  db.onversionchange = function (event) {
    db.close();
    alert("A new version of this page is ready. Please reload!");
  };

  // Do stuff with the database.
}
```

## 安全性

IndexedDB 遵守[同源政策](/zh-TW/docs/Web/JavaScript/Same_origin_policy_for_JavaScript)，所以它綁定創建它的來源網站，其他來源網站無法存取。就像對載入 {{ HTMLElement("frame") }} 和 {{ HTMLElement("iframe") }} 網頁的第三方 cookie 所設下的安全性和隱私權考量限制，IndexedDB 無法在載入 {{ HTMLElement("frame") }} 和 {{ HTMLElement("iframe") }} 網頁上運作，詳情請見 [Firefox bug 595307](https://bugzil.la/595307)。

## 瀏覽器關閉風險

當瀏覽器關閉，例如使用者按下關閉鈕，任何未完成 IndexedDB 交易都將默默中止，這些交易不會完成，錯誤事件也不會觸發。既然瀏覽器可能隨時被關閉，我們無法完全指望任何特定交易一定會完成，或是依賴錯誤事件做出相應處理，針對這種狀況，我們需要注意:

第一、每一筆交易結束後都應該要保持資料庫完整性，例如說，有一串使用者編輯項目清單正要存入資料庫，我們如果先在一個交易中清除舊清單，然後在另一個交易中存入新清單，那就會面臨到清除完就清單後，新清單存入交易還來不及回存，瀏覽器就關閉的風險，而這個時候資料庫裡面的清單資料將消失。所以比較好的做法應該是在同一筆交易中完成清除舊清單和存入新清單。

第二、永遠不要在 unload 事件中執行資料庫交易，因為如果 unload 事件是觸發在瀏覽器關閉下，任何資料庫交易都不會發生，或許，瀏覽器(或分頁)打開時讀取資料庫，更新資料庫當使用者編輯資料，當瀏覽器(或分頁)關閉時儲存資料這樣的做法比較直覺，不過資料庫的操作是非同步進行地，所以瀏覽器關閉的執行會在資料庫操作前發生，進而中斷後續非同步的資料庫交易，所以在 unload 事件中執行資料庫交易是行不通地。

事實上不論瀏覽器是否正常關閉，都沒有任何方法保證 IndexedDB 交易能夠順利完成，請見 [Firefox bug 870645](https://bugzil.la/870645)。

## 完整 IndexedDB 範例

### HTML

```html
<script
  type="text/javascript"
  src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<h1>IndexedDB Demo: storing blobs, e-publication example</h1>
<div class="note">
  <p>Works and tested with:</p>
  <div id="compat"></div>
</div>

<div id="msg"></div>

<form id="register-form">
  <table>
    <tbody>
      <tr>
        <td>
          <label for="pub-title" class="required"> Title: </label>
        </td>
        <td>
          <input type="text" id="pub-title" name="pub-title" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="pub-biblioid" class="required">
            Bibliographic ID:<br />
            <span class="note">(ISBN, ISSN, etc.)</span>
          </label>
        </td>
        <td>
          <input type="text" id="pub-biblioid" name="pub-biblioid" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="pub-year"> Year: </label>
        </td>
        <td>
          <input type="number" id="pub-year" name="pub-year" />
        </td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>
          <label for="pub-file"> File image: </label>
        </td>
        <td>
          <input type="file" id="pub-file" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="pub-file-url">
            Online-file image URL:<br />
            <span class="note">(same origin URL)</span>
          </label>
        </td>
        <td>
          <input type="text" id="pub-file-url" name="pub-file-url" />
        </td>
      </tr>
    </tbody>
  </table>

  <div class="button-pane">
    <input type="button" id="add-button" value="Add Publication" />
    <input type="reset" id="register-form-reset" />
  </div>
</form>

<form id="delete-form">
  <table>
    <tbody>
      <tr>
        <td>
          <label for="pub-biblioid-to-delete">
            Bibliographic ID:<br />
            <span class="note">(ISBN, ISSN, etc.)</span>
          </label>
        </td>
        <td>
          <input
            type="text"
            id="pub-biblioid-to-delete"
            name="pub-biblioid-to-delete" />
        </td>
      </tr>
      <tr>
        <td>
          <label for="key-to-delete">
            Key:<br />
            <span class="note">(for example 1, 2, 3, etc.)</span>
          </label>
        </td>
        <td>
          <input type="text" id="key-to-delete" name="key-to-delete" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="button-pane">
    <input type="button" id="delete-button" value="Delete Publication" />
    <input
      type="button"
      id="clear-store-button"
      value="Clear the whole store"
      class="destructive" />
  </div>
</form>

<form id="search-form">
  <div class="button-pane">
    <input
      type="button"
      id="search-list-button"
      value="List database content" />
  </div>
</form>

<div>
  <div id="pub-msg"></div>
  <div id="pub-viewer"></div>
  <ul id="pub-list"></ul>
</div>
```

### CSS

```css
body {
  font-size: 0.8em;
  font-family: Sans-Serif;
}

form {
  background-color: #cccccc;
  border-radius: 0.3em;
  display: inline-block;
  margin-bottom: 0.5em;
  padding: 1em;
}

table {
  border-collapse: collapse;
}

input {
  padding: 0.3em;
  border-color: #cccccc;
  border-radius: 0.3em;
}

.required:after {
  content: "*";
  color: red;
}

.button-pane {
  margin-top: 1em;
}

#pub-viewer {
  float: right;
  width: 48%;
  height: 20em;
  border: solid #d092ff 0.1em;
}
#pub-viewer iframe {
  width: 100%;
  height: 100%;
}

#pub-list {
  width: 46%;
  background-color: #eeeeee;
  border-radius: 0.3em;
}
#pub-list li {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-right: 0.5em;
}

#msg {
  margin-bottom: 1em;
}

.action-success {
  padding: 0.5em;
  color: #00d21e;
  background-color: #eeeeee;
  border-radius: 0.2em;
}

.action-failure {
  padding: 0.5em;
  color: #ff1408;
  background-color: #eeeeee;
  border-radius: 0.2em;
}

.note {
  font-size: smaller;
}

.destructive {
  background-color: orange;
}
.destructive:hover {
  background-color: #ff8000;
}
.destructive:active {
  background-color: red;
}
```

### JavaScript

```js
(function () {
  var COMPAT_ENVS = [
    ["Firefox", ">= 16.0"],
    [
      "Google Chrome",
      ">= 24.0 (you may need to get Google Chrome Canary), NO Blob storage support",
    ],
  ];
  var compat = $("#compat");
  compat.empty();
  compat.append('<ul id="compat-list"></ul>');
  COMPAT_ENVS.forEach(function (val, idx, array) {
    $("#compat-list").append("<li>" + val[0] + ": " + val[1] + "</li>");
  });

  const DB_NAME = "mdn-demo-indexeddb-epublications";
  const DB_VERSION = 1; // Use a long long for this value (don't use a float)
  const DB_STORE_NAME = "publications";

  var db;

  // Used to keep track of which view is displayed to avoid uselessly reloading it
  var current_view_pub_key;

  function openDb() {
    console.log("openDb ...");
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      // Better use "this" than "req" to get the result to avoid problems with
      // garbage collection.
      // db = req.result;
      db = this.result;
      console.log("openDb DONE");
    };
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
      console.log("openDb.onupgradeneeded");
      var store = evt.currentTarget.result.createObjectStore(DB_STORE_NAME, {
        keyPath: "id",
        autoIncrement: true,
      });

      store.createIndex("biblioid", "biblioid", { unique: true });
      store.createIndex("title", "title", { unique: false });
      store.createIndex("year", "year", { unique: false });
    };
  }

  /**
   * @param {string} store_name
   * @param {string} mode either "readonly" or "readwrite"
   */
  function getObjectStore(store_name, mode) {
    var tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }

  function clearObjectStore(store_name) {
    var store = getObjectStore(DB_STORE_NAME, "readwrite");
    var req = store.clear();
    req.onsuccess = function (evt) {
      displayActionSuccess("Store cleared");
      displayPubList(store);
    };
    req.onerror = function (evt) {
      console.error("clearObjectStore:", evt.target.errorCode);
      displayActionFailure(this.error);
    };
  }

  function getBlob(key, store, success_callback) {
    var req = store.get(key);
    req.onsuccess = function (evt) {
      var value = evt.target.result;
      if (value) success_callback(value.blob);
    };
  }

  /**
   * @param {IDBObjectStore=} store
   */
  function displayPubList(store) {
    console.log("displayPubList");

    if (typeof store == "undefined")
      store = getObjectStore(DB_STORE_NAME, "readonly");

    var pub_msg = $("#pub-msg");
    pub_msg.empty();
    var pub_list = $("#pub-list");
    pub_list.empty();
    // Resetting the iframe so that it doesn't display previous content
    newViewerFrame();

    var req;
    req = store.count();
    // Requests are executed in the order in which they were made against the
    // transaction, and their results are returned in the same order.
    // Thus the count text below will be displayed before the actual pub list
    // (not that it is algorithmically important in this case).
    req.onsuccess = function (evt) {
      pub_msg.append(
        "<p>There are <strong>" +
          evt.target.result +
          "</strong> record(s) in the object store.</p>",
      );
    };
    req.onerror = function (evt) {
      console.error("add error", this.error);
      displayActionFailure(this.error);
    };

    var i = 0;
    req = store.openCursor();
    req.onsuccess = function (evt) {
      var cursor = evt.target.result;

      // If the cursor is pointing at something, ask for the data
      if (cursor) {
        console.log("displayPubList cursor:", cursor);
        req = store.get(cursor.key);
        req.onsuccess = function (evt) {
          var value = evt.target.result;
          var list_item = $(
            "<li>" +
              "[" +
              cursor.key +
              "] " +
              "(biblioid: " +
              value.biblioid +
              ") " +
              value.title +
              "</li>",
          );
          if (value.year != null) list_item.append(" - " + value.year);

          if (
            value.hasOwnProperty("blob") &&
            typeof value.blob != "undefined"
          ) {
            var link = $('<a href="' + cursor.key + '">File</a>');
            link.on("click", function () {
              return false;
            });
            link.on("mouseenter", function (evt) {
              setInViewer(evt.target.getAttribute("href"));
            });
            list_item.append(" / ");
            list_item.append(link);
          } else {
            list_item.append(" / No attached file");
          }
          pub_list.append(list_item);
        };

        // Move on to the next object in store
        cursor.continue();

        // This counter serves only to create distinct ids
        i++;
      } else {
        console.log("No more entries");
      }
    };
  }

  function newViewerFrame() {
    var viewer = $("#pub-viewer");
    viewer.empty();
    var iframe = $("<iframe />");
    viewer.append(iframe);
    return iframe;
  }

  function setInViewer(key) {
    console.log("setInViewer:", arguments);
    key = Number(key);
    if (key == current_view_pub_key) return;

    current_view_pub_key = key;

    var store = getObjectStore(DB_STORE_NAME, "readonly");
    getBlob(key, store, function (blob) {
      console.log("setInViewer blob:", blob);
      var iframe = newViewerFrame();

      // It is not possible to set a direct link to the
      // blob to provide a mean to directly download it.
      if (blob.type == "text/html") {
        var reader = new FileReader();
        reader.onload = function (evt) {
          var html = evt.target.result;
          iframe.load(function () {
            $(this).contents().find("html").html(html);
          });
        };
        reader.readAsText(blob);
      } else if (blob.type.indexOf("image/") == 0) {
        iframe.load(function () {
          var img_id = "image-" + key;
          var img = $('<img id="' + img_id + '"/>');
          $(this).contents().find("body").html(img);
          var obj_url = window.URL.createObjectURL(blob);
          $(this)
            .contents()
            .find("#" + img_id)
            .attr("src", obj_url);
          window.URL.revokeObjectURL(obj_url);
        });
      } else if (blob.type == "application/pdf") {
        $("*").css("cursor", "wait");
        var obj_url = window.URL.createObjectURL(blob);
        iframe.load(function () {
          $("*").css("cursor", "auto");
        });
        iframe.attr("src", obj_url);
        window.URL.revokeObjectURL(obj_url);
      } else {
        iframe.load(function () {
          $(this).contents().find("body").html("No view available");
        });
      }
    });
  }

  /**
   * @param {string} biblioid
   * @param {string} title
   * @param {number} year
   * @param {string} url the URL of the image to download and store in the local
   *   IndexedDB database. The resource behind this URL is subjected to the
   *   "Same origin policy", thus for this method to work, the URL must come from
   *   the same origin as the web site/app this code is deployed on.
   */
  function addPublicationFromUrl(biblioid, title, year, url) {
    console.log("addPublicationFromUrl:", arguments);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    // Setting the wanted responseType to "blob"
    // http://www.w3.org/TR/XMLHttpRequest2/#the-response-attribute
    xhr.responseType = "blob";
    xhr.onload = function (evt) {
      if (xhr.status == 200) {
        console.log("Blob retrieved");
        var blob = xhr.response;
        console.log("Blob:", blob);
        addPublication(biblioid, title, year, blob);
      } else {
        console.error(
          "addPublicationFromUrl error:",
          xhr.responseText,
          xhr.status,
        );
      }
    };
    xhr.send();

    // We can't use jQuery here because as of jQuery 1.8.3 the new "blob"
    // responseType is not handled.
    // http://bugs.jquery.com/ticket/11461
    // http://bugs.jquery.com/ticket/7248
    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   xhrFields: { responseType: 'blob' },
    //   success: function(data, textStatus, jqXHR) {
    //     console.log("Blob retrieved");
    //     console.log("Blob:", data);
    //     // addPublication(biblioid, title, year, data);
    //   },
    //   error: function(jqXHR, textStatus, errorThrown) {
    //     console.error(errorThrown);
    //     displayActionFailure("Error during blob retrieval");
    //   }
    // });
  }

  /**
   * @param {string} biblioid
   * @param {string} title
   * @param {number} year
   * @param {Blob=} blob
   */
  function addPublication(biblioid, title, year, blob) {
    console.log("addPublication arguments:", arguments);
    var obj = { biblioid: biblioid, title: title, year: year };
    if (typeof blob != "undefined") obj.blob = blob;

    var store = getObjectStore(DB_STORE_NAME, "readwrite");
    var req;
    try {
      req = store.add(obj);
    } catch (e) {
      if (e.name == "DataCloneError")
        displayActionFailure(
          "This engine doesn't know how to clone a Blob, " + "use Firefox",
        );
      throw e;
    }
    req.onsuccess = function (evt) {
      console.log("Insertion in DB successful");
      displayActionSuccess();
      displayPubList(store);
    };
    req.onerror = function () {
      console.error("addPublication error", this.error);
      displayActionFailure(this.error);
    };
  }

  /**
   * @param {string} biblioid
   */
  function deletePublicationFromBib(biblioid) {
    console.log("deletePublication:", arguments);
    var store = getObjectStore(DB_STORE_NAME, "readwrite");
    var req = store.index("biblioid");
    req.get(biblioid).onsuccess = function (evt) {
      if (typeof evt.target.result == "undefined") {
        displayActionFailure("No matching record found");
        return;
      }
      deletePublication(evt.target.result.id, store);
    };
    req.onerror = function (evt) {
      console.error("deletePublicationFromBib:", evt.target.errorCode);
    };
  }

  /**
   * @param {number} key
   * @param {IDBObjectStore=} store
   */
  function deletePublication(key, store) {
    console.log("deletePublication:", arguments);

    if (typeof store == "undefined")
      store = getObjectStore(DB_STORE_NAME, "readwrite");

    // As per spec http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation
    // the result of the Object Store Deletion Operation algorithm is
    // undefined, so it's not possible to know if some records were actually
    // deleted by looking at the request result.
    var req = store.get(key);
    req.onsuccess = function (evt) {
      var record = evt.target.result;
      console.log("record:", record);
      if (typeof record == "undefined") {
        displayActionFailure("No matching record found");
        return;
      }
      // Warning: The exact same key used for creation needs to be passed for
      // the deletion. If the key was a Number for creation, then it needs to
      // be a Number for deletion.
      req = store.delete(key);
      req.onsuccess = function (evt) {
        console.log("evt:", evt);
        console.log("evt.target:", evt.target);
        console.log("evt.target.result:", evt.target.result);
        console.log("delete successful");
        displayActionSuccess("Deletion successful");
        displayPubList(store);
      };
      req.onerror = function (evt) {
        console.error("deletePublication:", evt.target.errorCode);
      };
    };
    req.onerror = function (evt) {
      console.error("deletePublication:", evt.target.errorCode);
    };
  }

  function displayActionSuccess(msg) {
    msg = typeof msg != "undefined" ? "Success: " + msg : "Success";
    $("#msg").html('<span class="action-success">' + msg + "</span>");
  }
  function displayActionFailure(msg) {
    msg = typeof msg != "undefined" ? "Failure: " + msg : "Failure";
    $("#msg").html('<span class="action-failure">' + msg + "</span>");
  }
  function resetActionStatus() {
    console.log("resetActionStatus ...");
    $("#msg").empty();
    console.log("resetActionStatus DONE");
  }

  function addEventListeners() {
    console.log("addEventListeners");

    $("#register-form-reset").click(function (evt) {
      resetActionStatus();
    });

    $("#add-button").click(function (evt) {
      console.log("add ...");
      var title = $("#pub-title").val();
      var biblioid = $("#pub-biblioid").val();
      if (!title || !biblioid) {
        displayActionFailure("Required field(s) missing");
        return;
      }
      var year = $("#pub-year").val();
      if (year != "") {
        // Better use Number.isInteger if the engine has EcmaScript 6
        if (isNaN(year)) {
          displayActionFailure("Invalid year");
          return;
        }
        year = Number(year);
      } else {
        year = null;
      }

      var file_input = $("#pub-file");
      var selected_file = file_input.get(0).files[0];
      console.log("selected_file:", selected_file);
      // Keeping a reference on how to reset the file input in the UI once we
      // have its value, but instead of doing that we rather use a "reset" type
      // input in the HTML form.
      //file_input.val(null);
      var file_url = $("#pub-file-url").val();
      if (selected_file) {
        addPublication(biblioid, title, year, selected_file);
      } else if (file_url) {
        addPublicationFromUrl(biblioid, title, year, file_url);
      } else {
        addPublication(biblioid, title, year);
      }
    });

    $("#delete-button").click(function (evt) {
      console.log("delete ...");
      var biblioid = $("#pub-biblioid-to-delete").val();
      var key = $("#key-to-delete").val();

      if (biblioid != "") {
        deletePublicationFromBib(biblioid);
      } else if (key != "") {
        // Better use Number.isInteger if the engine has EcmaScript 6
        if (key == "" || isNaN(key)) {
          displayActionFailure("Invalid key");
          return;
        }
        key = Number(key);
        deletePublication(key);
      }
    });

    $("#clear-store-button").click(function (evt) {
      clearObjectStore();
    });

    var search_button = $("#search-list-button");
    search_button.click(function (evt) {
      displayPubList();
    });
  }

  openDb();
  addEventListeners();
})(); // Immediately-Invoked Function Expression (IIFE)
```

{{ LiveSampleLink('Full_IndexedDB_example', "線上範例") }}

## 下一步

請參考[IndexedDB 文件](/zh-TW/docs/IndexedDB)，看看有甚麼 IndexedDB API 可供使用，實際試玩一下吧。

## 延伸閱讀

參照

- [IndexedDB API Reference](/zh-TW/IndexedDB)
- [Indexed Database API Specification](http://www.w3.org/TR/IndexedDB/)
- [Using IndexedDB in chrome](/zh-TW/docs/IndexedDB/Using_IndexedDB_in_chrome)

相關教學

- [A simple TODO list using HTML5 IndexedDB](http://www.html5rocks.com/tutorials/indexeddb/todo/).

  > **備註：** 請注意此教學範例用到的已經廢棄的`setVersion()`方法。

- [Databinding UI Elements with IndexedDB](http://www.html5rocks.com/en/tutorials/indexeddb/uidatabinding/)

相關文章

- [IndexedDB — The Store in Your Browser](http://msdn.microsoft.com/en-us/scriptjunkie/gg679063.aspx)

Firefox

- Mozilla [interface files](https://mxr.mozilla.org/mozilla-central/find?text=&string=dom%2FindexedDB%2F.*%5C.idl&regexp=1)
