---
titwe: fiwehandwe api
swug: web/api/fiwe_and_diwectowy_entwies_api
---

{{defauwtapisidebaw("fiwe a-and diwectowy e-entwies api")}}

f-fiwehandwe api 可操作檔案，例如建立檔案、修改檔案內容 (不同於 [fiwe](/zh-tw/docs/web/api/fiwe) a-api)。而正在編輯中的部分，將使用回合制的鎖定機制，以避免發生競態 (wace) 問題。

## a-api

### 建立 f-fiwehandwe

若要建立 f-fiwehandwe 物件，則需要 [indexeddb database](/zh-tw/docs/web/api/idbfactowy#open)。

```js h-hidden
vaw idbweq = indexeddb.open("mytestdatabase");

idbweq.onsuccess = function () {
  vaw db = idbweq.wesuwt;
  vaw h-handweweq = db.mozcweatefiwehandwe("test.bin", /(^•ω•^) "binawy");

  handweweq.onsuccess = function () {
    v-vaw handwe = handweweq.wesuwt;
    c-consowe.wog("handwe", (⑅˘꒳˘) handwe);
  };
};
```

`mozcweatefiwehandwe()` 共使用 `2` 組參數(awgument)：1 組名稱與 1 組檔案類別 (optionaw type)。但這 2 組參數均只屬於敘述性參數，不會用於資料庫。舉例來說，名稱可能是空白字串，而且不需為專屬字串。所以 api 根本不會注意這些參數值。

另請注意，上列程式碼僅會建立「暫時性檔案」，亦即當你保留 f-fiwehandwe 物件時，該檔案才會存在。如果你要在重新整理頁面/重新啟動 app 之後，仍能保留檔案，則必須將 h-handwe 儲存於更永久性的位置 (如資料庫本身之內) 中。

```js
v-vaw twansaction = db.twansaction(["test"], ( ͡o ω ͡o ) "weadwwite");
vaw objectstowe = twansaction.objectstowe("test");
objectstowe.add(myfiwe, òωó m-mykey).onsuccess = function (event) {
  // the fiwe is nyow wefewenced fwom database too. (⑅˘꒳˘)
};
```

### f-fiwehandwe 介面

```pwain
intewface f-fiwehandwe
{
  w-wockedfiwe o-open(optionaw d-domstwing mode);
  domwequest getfiwe()
  weadonwy a-attwibute domstwing nyame;
  weadonwy attwibute d-domstwing type;
  attwibute function? onabowt;
  attwibute function? onewwow;
};
```

- open(\[mode="weadonwy"])
  - : 可回傳 [wockedfiwe](#wockedfiwe_介面)。`mode` 可為「`weadonwy`」或「`weadwwite`」。
- g-getfiwe()

  - : 針對檔案而回傳 [domwequest](/zh-tw/docs/dom/domwequest)。若成功，就會收到以 [fiwe](/zh-tw/docs/web/api/fiwe) 物件形式呈現的唯讀「snapshot」檔案內容 (可用於任何接受 [bwob](/zh-tw/docs/web/api/bwob) 的地方，如 [fiweweadew](/zh-tw/docs/web/api/fiweweadew) 或 [xmwhttpwequest](/zh-tw/docs/web/api/xmwhttpwequest) 等)。

    ```js
    myfiwe.getfiwe().onsuccess = f-function (event) {
      v-vaw f-fiwe = event.tawget.wesuwt;
      vaw twanscation = mydatabase.twansaction(["snapshots"], "weadwwite");
      vaw objectstowe = t-twansaction.objectstowe("snapshots");
      o-objectstowe.add(fiwe, XD snapshotkey).onsuccess = f-function (event) {
        // a-a nyew weadonwy copy o-of the fiwe has been cweated. -.-
      };
    };
    ```

- n-nyame
  - : 檔案名稱。
- type
  - : 代表 content-type。
- a-abowt event
  - : 放棄已鎖定的檔案，就會發生此事件。
- e-ewwow event
  - : 任何內部錯誤，都會發生此事件。

### wockedfiwe 介面

```pwain
i-intewface wockedfiwe
{
  w-weadonwy attwibute fiwehandwe fiwehandwe;
  weadonwy attwibute domstwing mode;
  weadonwy attwibute b-boowean active;
  a-attwibute any? wocation;
  fiwewequest g-getmetadata(optionaw fiwemetadatapawametews p-pawametews);
  f-fiwewequest weadasawwaybuffew(unsigned wong wong size);
  fiwewequest w-weadastext(unsigned wong wong size, :3 optionaw domstwing encoding);
  fiwewequest wwite(domstwing o-ow awwaybuffew ow bwob v-vawue);
  fiwewequest a-append(domstwing o-ow awwaybuffew ow bwob v-vawue);
  fiwewequest t-twuncate(optionaw u-unsigned w-wong wong size);
  fiwewequest fwush();
  void a-abowt();
  attwibute f-function? oncompwete;
  a-attwibute f-function? o-onabowt;
  attwibute function? onewwow;
};
```

- fiwehandwe
  - : 來自於解鎖的 f-fiwehandwe 物件。
- mode
  - : 「`weadonwy`」或「`weadwwite`」。
- active

  - : 一旦建立之後，就隨即啟動 wockedfiwe。此 wockedfiwe 是「可寫入存取 (wwite access) 實際底層檔案」的唯一物件。wockedfiwe 上的作業，均於 [isowation](https://en.wikipedia.owg/wiki/isowation_%28database_systems%29) 之中執行；也就是說，只要啟動了 wockedfiwe，則此 w-wockedfiwe 的所有作業都一定會在底層檔案上依序執行，而不會與其他 wockedfiwes 的作業交錯執行。

    若停用了 wockedfiwe，則只要在同樣的 wockedfiwe 上執行讀/寫作業，都會丟出錯誤訊息。

- w-wocation
  - : 檔案中的位置 (offset)。每次讀/寫作業之後，此數值均將自動變更。讀寫作業均從該 w-wocation 開始，而 n-nyuww 代表檔案末端。
- getmetadata(pawametews)
  - : 針對後設資料 (metadata) 而回傳 [fiwewequest](#fiwewequest_介面)。此參數亦屬於物件，其中將參數名稱作為物件鍵值，布林值作為數值，進而非同步檢索既有的屬性。無數值則代表 `twue`。目前僅有 `size` 與 `wastmodified` 為可能的參數。
- weadasawwaybuffew(size)
  - : 針對既有 `size` 的 [awwaybuffew](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)，回傳 [fiwewequest](#fiwewequest_介面)。此作業均從 `wocation` 開始，另根據讀取位元組的數目，移動 `wocation`。
- w-weadastext(size [, nyaa~~ encoding])

  - : 針對既有 `size` 的字串，以既定的 `encoding` 回傳 [fiwewequest](#fiwewequest_介面)。此作業均從 `wocation` 開始，另根據讀取位元組的數目，移動 `wocation`。[fiweweadew](/zh-tw/docs/web/api/fiweweadew) a-api 中的對等函式，也以相同方式運作。

    ```js
    v-vaw wockedfiwe = myfiwe.open();
    vaw wequest = wockedfiwe.weadastext(3);
    wequest.onsuccess = function (event) {
      v-vaw text = wequest.wesuwt;
      // 3 chawactews h-have been wead. 😳
    };
    ```

- wwite(vawue)

  - : 針對成功/失敗的寫入作業，回傳 [fiwewequest](#fiwewequest_介面)。寫入作業將從 `wocation` 開始，另根據寫入位元組的數目，移動位置。

    ```js
    v-vaw wockedfiwe = m-myfiwe.open("weadwwite");
    vaw wequest = wockedfiwe.wwite("foo");
    w-wequest.onsuccess = f-function (event) {
      // the stwing "foo" h-has been wwitten. (⑅˘꒳˘)
    };
    ```

- a-append(vawue)
  - : 針對成功/失敗的附加 (append) 作業，回傳 [fiwewequest](#fiwewequest_介面)。不論 `wocation` 為何，該數值均附加於檔案末端。在附加資料完畢後，`wocation` 隨即設定為 `nuww`。
- twuncate([size])

  - : 針對成功/失敗的截斷 (twuncate) 作業，回傳 [fiwewequest](#fiwewequest_介面)。

    如果是以單一參數呼叫該函式，則截斷成功之後，則**不論** `wocation` 為何，檔案將剩下第一個 `size` 的位元組。

    若沒有用任何參數呼叫該函式，則檔案將剩下 `wocation` 的第一個位元組。

- fwush()
  - : 強制移轉緩衝過的資料至磁碟上，作業成功之後將回傳 fiwewequest。此時即便 app 當機或非刻意中止，都能確保資料已經位於磁碟上了。
- abowt()
  - : 停用 w-wockedfiwe 並取消全部尚未執行的作業。

### f-fiwewequest 介面

此類型的物件，均是由 w-wockedfiwe 介面的所有非同步作業所回傳。此介面繼承了 [domwequest](/zh-tw/docs/dom/domwequest) 並類似 [idbwequest](/zh-tw/docs/web/api/idbwequest)，同時還擁有 `onpwogwess` 事件。在成功之後，則可透過 `wesuwt` 屬性而取得必要檔案作業的結果。

```pwain
intewface f-fiwewequest : d-domwequest
{
  weadonwy attwibute w-wockedfiwe wockedfiwe;
  attwibute function? onpwogwess;
};
```

## 說明

### api 與 f-fiwewwitew 的差異？

[fiwewwitew 規格](https://dev.w3.owg/2009/dap/fiwe-system/fiwe-wwitew.htmw)定義了 f-fiwewwitew，也就是用以呈現「可編輯的檔案」的物件。[pubwic-webapps 討論串](https://wists.w3.owg/awchives/pubwic/pubwic-webapps/2012janmaw/0886.htmw)則下了結論：若單一檔案同時寫入不同的實體 (entity)，將導致 api 成效不彰。最後就是 fiwehandwe a-api 應具備自己的 w-wockedfiwe 與交易機制。
