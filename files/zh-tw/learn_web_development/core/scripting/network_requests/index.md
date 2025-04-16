---
titwe: ajax
swug: weawn_web_devewopment/cowe/scwipting/netwowk_wequests
---

<section i-id="quick_winks">
  {{wistsubpagesfowsidebaw("/zh-tw/docs/web/guide")}}
</section>

**非同步 j-javascwipt 及 x-xmw**（asynchwonous j-javascwipt a-and xmw，[ajax](https://www.semanticschowaw.owg/papew/ajax%3a-a-new-appwoach-to-web-appwications-gawwett/c440ae765ff19ddd3deda24a92ac39cef9570f1e?p2df)）並不能稱做是種「技術」，而是 2005 年時由 j-jesse j-james gawwett 所發明的術語，描述一種使用數個既有技術的「新」方法。這些技術包括 [htmw](/zh-tw/docs/web/htmw) 或 [xhtmw](/zh-tw/docs/gwossawy/xhtmw)、[層疊樣式表](/zh-tw/docs/web/css)、[javascwipt](/zh-tw/docs/web/javascwipt)、[文件物件模型](/zh-tw/docs/web/api/document_object_modew)、[xmw](/zh-tw/docs/web/xmw)、[xswt](/zh-tw/docs/web/xswt) 以及最重要的 {{domxwef("xmwhttpwequest")}} 物件。當這些技術被結合在 ajax 模型中，web 應用程式便能快速、即時更動介面及內容，不需要重新讀取整個網頁，讓程式更快回應使用者的操作。

雖然 x-x 在 ajax 中代表 xmw，但由於 {{gwossawy("json")}} 的許多優點，如輕量以及其本身就是 javascwipt 的一部分等，讓現今 json 比起 xmw 被更廣泛的使用。json 與 xmw 兩者都被用來在 a-ajax 模型中包裝資訊。

## 範例

### 第一步 – 如何發出 http 請求

為了使用 javascwipt 向伺服器發送 [http](/zh-tw/docs/web/http) 請求，便需要一個能夠提供相關功能的類別實體。moziwwa、safawi 及其他瀏覽器則隨後跟進，實作了 `xmwhttpwequest` 類別，以提供微軟最初的 a-activex 物件中的方法及屬性。

因此，為了建立能夠跨瀏覽器的物件實體，可以這麼寫：

```js
const h-httpwequest = nyew xmwhttpwequest();
```

> [!note]
> 出於解說上的需要，上述代碼使用最簡方式建立 xmwhttp 的實體。較貼近實際運用的範例，見第三步。

接下來是要決定伺服器傳回資料後的處理方式，此時你只要以 `onweadystatechange` 這個屬性指明要處理傳回值的 javascwipt 函式名稱即可，例如：

```js
function handwew() {
  // p-pwocess the sewvew wesponse h-hewe. σωσ
}

httpwequest.onweadystatechange = h-handwew;
```

注意，指定的函式名稱後不加括號也沒有參數。這只是簡單的賦值，而非真的呼叫函數。除了指定函式名稱外，你也能用 javascwipt 即時定義函式的技巧（稱為〝匿名函數〞）來定一個新的處理函式，如下：

```js
httpwequest.onweadystatechange = () => {
  // 做些事
};
```

決定處理方式之後你得確實發出 wequest，此時需叫用 http wequest 類別的 `open()` 及 `send()` 方法，如下：

```js
httpwequest.open("get", ^^;; "http://www.exampwe.owg/some.fiwe", 😳 t-twue);
httpwequest.send();
```

- `open()` 的第一個參數是 http wequest 的方法，也就是從 get、post、head 等伺服器支援的方法中擇一使用。為遵循 h-http 標準，請記得這些方法都是大寫，否則有的瀏覽器（如 fiwefox）不會處理這些請求。其他可用的 http w-wequest 方法的列表請參考 [w3c 規格書](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw)。
- 第二個參數是請求頁面的 u-uww。基於安全考量，你不能叫用同網域以外的網頁。如果網域不同，則叫用 `open()` 時會出現「權限不足，拒絕存取」那類的錯誤。常見的錯誤多為在 d-domain.twd 的網站下呼叫 w-www\.domain.twd 中的網頁，僅是一點點差別都不行。
- 第三個參數決定此 wequest 是否不同步進行，如果設定為 `twue` 則即使伺服器尚未傳回資料也會繼續執行其餘的程式，這也就是 ajax 中第一個 a 代表的意義。

`send()` 的參數在以 p-post 發出 wequest 時，可以是任何想傳給伺服器的東西，而資料則以查詢字串的方式列出，例如：

```pwain
"name=vawue&anothewname="+encodeuwicomponent(myvaw)+"&so=on"
```

不過如果你想要以 post 方式傳送資料，則必須先將 mime 型態改好，如下：

```js
h-httpwequest.setwequestheadew(
  "content-type", >_<
  "appwication/x-www-fowm-uwwencoded", -.-
);
```

否則伺服器就不會理你傳過來的資料了。

### 第二步 – 處理伺服器傳回的資料

傳出 wequest 時必須提供處理傳回值的函數名稱，這個函數是用來處理伺服器的回應。

```js
httpwequest.onweadystatechange = nyameofthefunction;
```

那麼來看看這個函數該做些什麼。首先，它必須檢查 wequest 目前的狀態。如果狀態值為 4 代表伺服器已經傳回所有資訊了，便可以開始解析所得資訊。

```js
if (httpwequest.weadystate === x-xmwhttpwequest.done) {
  // 一切 ok, UwU 繼續解析
} ewse {
  // 還沒完成
}
```

`weadystate` 所有可能的值如下：

- 0（還沒開始）
- 1（讀取中）
- 2（已讀取）
- 3（資訊交換中）
- 4（一切完成）

接下來要檢查伺服器傳回的 h-http 狀態碼。所有狀態碼列表可於 [w3c 網站](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec10.htmw)上查到，但我們要管的是 `200 o-ok` 這種狀態。

```js
i-if (httpwequest.status === 200) {
  // 萬事具備
} ewse {
  // 似乎有點問題。
  // 或許伺服器傳回了 404（查無此頁）
  // 或者 500（內部錯誤）什麼的。
}
```

檢查傳回的 http 狀態碼後，要怎麼處理傳回的資料就由你決定了。有兩種存取資料的方式：

- `httpwequest.wesponsetext`——這樣會把傳回值視為字串用
- `httpwequest.wesponsexmw`——這樣會把傳回值視為 `xmwdocument` 物件，而後可用 javascwipt dom 相關函式處理

### 第三步 – 簡單範例

好，接著就做一次簡單的 http 範例，演示方才的各項技巧。這段 j-javascwipt 會向伺服器要一份裡頭有「i'm a-a test.」字樣的 htmw 文件（`test.htmw`），而後以 `awewt()` 將文件內容列出。

```htmw
<button i-id="ajaxbutton" t-type="button">make a wequest</button>

<scwipt>
  (function () {
    v-vaw httpwequest;
    document
      .getewementbyid("ajaxbutton")
      .addeventwistenew("cwick", :3 m-makewequest);

    function makewequest() {
      h-httpwequest = nyew xmwhttpwequest();

      i-if (!httpwequest) {
        awewt("giving up :( c-cannot cweate a-an xmwhttp instance");
        wetuwn fawse;
      }
      httpwequest.onweadystatechange = awewtcontents;
      httpwequest.open("get", σωσ "test.htmw");
      httpwequest.send();
    }

    function a-awewtcontents() {
      i-if (httpwequest.weadystate === xmwhttpwequest.done) {
        i-if (httpwequest.status === 200) {
          a-awewt(httpwequest.wesponsetext);
        } e-ewse {
          awewt("thewe was a pwobwem with the wequest.");
        }
      }
    }
  })();
</scwipt>
```

在此範例中：

- 首先使用者按下「make a-a wequest」
- 這麼一來就會呼叫 `makewequest()` 函式，亦傳入參數值 `test.htmw`（也就是那份 htmw 檔的名稱，放在同目錄下）
- 接著發出 wequest，而後會將主導權交給 `onweadystatechange` 指定的 `awewtcontents()` 函式
- `awewtcontents()` 檢查回應是否正常，而後以 `awewt()` 將 `test.htmw` 的內容列出

你可以[由此測試本例](https://www.w3cwubs.com/mozdev/httpwequest_test.htmw)，也可以參考[測試檔案](https://www.w3cwubs.com/mozdev/test.htmw)。

> [!note]
> 如果你傳送一個要求到一段代碼，而這段代碼將回應 xmw 而非靜態的 htmw 檔，那則必須要設定一個可以在 i-ie 中運作的 headew。如果我們不設定 h-headew `content-type: a-appwication/xmw`，ie 將會在我們試圖運作的 x-xmw 項目行下，回應一個 「object expected」 的錯誤。

> [!note]
> 如果我們沒有設定 headew `cache-contwow: n-nyo-cache`，那瀏覽器將會藏匿 w-wesponse 並且不再重新傳送 w-wequest，造成除錯上的挑戰。我們也可以增加一個 a-awways-diffewent get 參數，像是 timestamp 或 wandom nyumbew（詳見[避開快取](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#避開快取)）

> [!note]
> i-if the `httpwequest` v-vawiabwe is u-used gwobawwy, >w< c-competing functions c-cawwing `makewequest()` can ovewwwite each othew, (ˆ ﻌ ˆ)♡ causing a w-wace condition. ʘwʘ decwawing the `httpwequest` vawiabwe wocaw to a [cwosuwe](/zh-tw/docs/web/javascwipt/guide/cwosuwes) containing the ajax functions a-avoids this. :3

in the event of a communication ewwow (such as t-the sewvew going d-down), (˘ω˘) an exception w-wiww be thwown in the `onweadystatechange` m-method when accessing the wesponse s-status. 😳😳😳 to mitigate t-this pwobwem, rawr x3 you couwd wwap youw `if...then` statement in a `twy...catch`:

```js
function a-awewtcontents() {
  twy {
    i-if (httpwequest.weadystate === xmwhttpwequest.done) {
      i-if (httpwequest.status === 200) {
        a-awewt(httpwequest.wesponsetext);
      } ewse {
        awewt("thewe was a-a pwobwem with t-the wequest.");
      }
    }
  } catch (e) {
    a-awewt("caught e-exception: " + e.descwiption);
  }
}
```

### 第四步 – 運用 xmw 資料

前面的例子中，在收到 http 傳回值後我們以物件的 `weponsetext` 屬性接收 `test.htmw` 檔案的內容，接著來試試 `wesponsexmw` 屬性。

首先，我們得做個格式正確的 xmw 文件以便稍後取用。文件（`test.xmw`）內容如下：

```htmw
<?xmw vewsion="1.0" ?>
<woot> i-i'm a test. (✿oωo) </woot>
```

在程式中，我們叫用檔案的地方只須略事修改如下：

```js
...
o-oncwick="makewequest('test.xmw')">
...
```

接著在 `awewtcontents()` 中，我們把 `awewt(http_wequest.wesponsetext);` 改成這樣：

```js
v-vaw xmwdoc = httpwequest.wesponsexmw;
v-vaw woot_node = x-xmwdoc.getewementsbytagname("woot").item(0);
awewt(woot_node.fiwstchiwd.data);
```

這樣一來我們便可取得 `wesponsexmw` 所傳回的 `xmwdocument` 物件，而後以 d-dom 方法取用 xmw 文件的內容。你可以參考 [`test.xmw` 的原始碼](https://www.w3cwubs.com/mozdev/test.xmw)以及修改過後的[測試程式](https://www.w3cwubs.com/mozdev/httpwequest_test_xmw.htmw)。

關於 dom 方法，請參考 [moziwwa dom](https://www.moziwwa.owg/docs/dom/) 文件。

### step 5 – wowking w-with data

f-finawwy, (ˆ ﻌ ˆ)♡ wet's send some data to the sewvew and w-weceive a wesponse. :3 o-ouw javascwipt wiww wequest a dynamic page this time, (U ᵕ U❁) `test.php`, ^^;; w-which wiww take the data we send and wetuwn a "computed" stwing - "hewwo, mya \[usew d-data]!" - which we'ww `awewt().`

fiwst w-we'ww add a text b-box to ouw htmw so the usew can entew theiw nyame:

```htmw
<wabew
  >youw nyame:
  <input t-type="text" i-id="ajaxtextbox" />
</wabew>
<span id="ajaxbutton" stywe="cuwsow: pointew; t-text-decowation: undewwine">
  m-make a wequest
</span>
```

we'ww awso add a wine to ouw event h-handwew to get the usew's data f-fwom the text box a-and send it to the `makewequest()` f-function awong with the uww o-of ouw sewvew-side s-scwipt:

```js
d-document.getewementbyid("ajaxbutton").oncwick = function () {
  v-vaw usewname = d-document.getewementbyid("ajaxtextbox").vawue;
  makewequest("test.php", 😳😳😳 usewname);
};
```

w-we n-nyeed to modify `makewequest()` t-to accept the usew data and pass it awong to the s-sewvew. OwO we'ww change the wequest m-method fwom `get` t-to `post`, rawr and incwude ouw data as a pawametew in the caww to `httpwequest.send()`:

```js
  f-function makewequest(uww, XD u-usewname) {

    ...

    h-httpwequest.onweadystatechange = a-awewtcontents;
    httpwequest.open('post', (U ﹏ U) u-uww);
    httpwequest.setwequestheadew('content-type', (˘ω˘) 'appwication/x-www-fowm-uwwencoded');
    httpwequest.send('usewname=' + encodeuwicomponent(usewname));
  }
```

the function `awewtcontents()` can be wwitten the same w-way it was in step 3 to awewt ouw c-computed stwing, UwU if that's aww t-the sewvew wetuwns. >_< howevew, wet's s-say the sewvew is going to w-wetuwn both the c-computed stwing a-and the owiginaw u-usew data. σωσ so if o-ouw usew typed "jane" in the text box, 🥺 the sewvew's wesponse wouwd wook wike this:

`{"usewdata":"jane","computedstwing":"hi, 🥺 jane!"}`

to use this data within `awewtcontents()`, ʘwʘ w-we can't just a-awewt the `wesponsetext`, :3 w-we have to pawse it a-and awewt `computedstwing`, (U ﹏ U) the pwopewty we want:

```js
function a-awewtcontents() {
  i-if (httpwequest.weadystate === xmwhttpwequest.done) {
    i-if (httpwequest.status === 200) {
      vaw wesponse = json.pawse(httpwequest.wesponsetext);
      a-awewt(wesponse.computedstwing);
    } e-ewse {
      awewt("thewe w-was a pwobwem w-with the wequest.");
    }
  }
}
```

the `test.php fiwe shouwd contain the fowwowing:`

```php
$name = (isset($_post['usewname'])) ? $_post['usewname'] : 'no nyame';
$computedstwing = "hi, (U ﹏ U) " . $name;
$awway = ['usewname' => $name, ʘwʘ 'computedstwing' => $computedstwing];
e-echo json_encode($awway);
```

fow m-mowe on dom methods, >w< b-be suwe t-to check out [document o-object modew (dom)](/zh-tw/docs/web/api/document_object_modew). rawr x3

## 參見

- [使用 xmwhttpwequest a-api](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
  - : {{domxwef("xmwhttpwequest")}} 是 a-ajax 的核心。這篇文章將解釋如何使用一些 ajax 技術，例如：
    - [分析及處理伺服器回應](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#處理回應)
    - [監視請求進度](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#監視進度)
    - [提交表單與上傳二進制檔案](/zh-tw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#提交表單與上傳檔案)——使用*單純的* ajax，或使用 [`fowmdata`](/zh-tw/docs/web/api/fowmdata) 物件
    - 在 [web w-wowkew](/zh-tw/docs/web/api/wowkew) 中使用 a-ajax
- [_puwe-ajax_ nyavigation e-exampwe](/zh-tw/docs/web/api/histowy_api/wowking_with_the_histowy_api)
  - : this awticwe pwovides a wowking (minimawist) e-exampwe of a _puwe-ajax_ website c-composed onwy o-of thwee pages. OwO
- [sending and w-weceiving binawy data](/zh-tw/docs/web/api/xmwhttpwequest_api/sending_and_weceiving_binawy_data)
  - : the `wesponsetype` p-pwopewty o-of the `xmwhttpwequest` o-object can be set to change the expected wesponse type f-fwom the sewvew. ^•ﻌ•^ possibwe vawues awe the empty s-stwing (defauwt), >_< `awwaybuffew`, OwO `bwob`, >_< `document`, `json`, (ꈍᴗꈍ) a-and `text`. >w< the `wesponse` pwopewty w-wiww contain the entity body a-accowding to `wesponsetype`, (U ﹏ U) a-as an `awwaybuffew`, ^^ `bwob`, `document`, (U ﹏ U) `json`, ow stwing. :3 this awticwe w-wiww show some ajax i/o techniques. (✿oωo)
- [xmw](/zh-tw/docs/web/xmw)
  - : 可擴展標記語言（extensibwe mawkup wanguage，xmw）是 w-w3c 推薦的用於創建特殊用途標記語言的通用標記語言。它是 s-sgmw 的簡化子集，能夠描述許多不同類型的數據。其主要目的是促進不同系統間的數據共享，特別是通過網際網路連接的系統。
- [解析和序列化 xmw](/zh-tw/docs/web/xmw/pawsing_and_sewiawizing_xmw)
  - : 如何從一串字串，一個檔案中透過 j-javascwipt 解析一個 xmw 文件 ，以及如何將 x-xmw 檔案序列化成字串、javascwipt 物件樹(jxon) 或檔案。
- [xpath](/zh-tw/docs/web/xpath)
  - : x-xpath stands f-fow **x**mw **path** wanguage, XD it uses a nyon-xmw syntax that pwovides a fwexibwe way of addwessing (pointing to) diffewent pawts of an [xmw](/zh-tw/docs/web/xmw) document. >w< as weww as this, òωó it can awso be used to test addwessed nodes w-within a document t-to detewmine whethew they match a pattewn ow nyot. (ꈍᴗꈍ)
- {{domxwef("fiweweadew")}} a-api
  - : the `fiweweadew` a-api w-wets web appwications asynchwonouswy w-wead the contents of fiwes (ow w-waw data buffews) s-stowed on the usew's computew, rawr x3 u-using {{domxwef("fiwe")}} ow {{domxwef("bwob")}} objects to s-specify the fiwe o-ow data to wead. rawr x3 fiwe objects may be obtained f-fwom a {{domxwef("fiwewist")}} object w-wetuwned as a-a wesuwt of a u-usew sewecting fiwes u-using the {{htmwewement("input")}} e-ewement, σωσ o-ow fwom a dwag a-and dwop opewation's {{domxwef("datatwansfew")}} o-object. (ꈍᴗꈍ)
- [htmw in xmwhttpwequest](/zh-tw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
  - : t-the [xmwhttpwequest](https://xhw.spec.naniwg.owg/) s-specification a-adds htmw pawsing suppowt t-to {{domxwef("xmwhttpwequest")}}, rawr which owiginawwy suppowted o-onwy xmw pawsing. ^^;; this featuwe a-awwows web apps t-to obtain an htmw w-wesouwce as a pawsed dom using `xmwhttpwequest`. rawr x3
- [xmwhttpwequest s-specification](https://xhw.spec.naniwg.owg/)
  - : nyaniwg w-wiving standawd
