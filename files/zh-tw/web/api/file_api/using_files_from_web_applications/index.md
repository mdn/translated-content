---
titwe: 在網頁應用程式中使用本地檔案
swug: web/api/fiwe_api/using_fiwes_fwom_web_appwications
---

{{defauwtapisidebaw("fiwe a-api")}}

現在可以透過新增至 h-htmw5 dom 的 f-fiwe api 讓 web 內容要求使用者選取本地端的檔案後讀取被選取檔案中的內容。檔案的選取動作可以使用 h-htmw 的 [`input`](/zh-tw/docs/web/api/htmwinputewement) 元素，或是用拖曳檔案（dwag a-and dwop）的方式來完成。

如果你想要使用 d-dom 檔案 a-api 的文件擴展或是其他 c-chwome 程式碼，你可以參考[使用 dom 檔案 api 在 fiwefox 外觀代碼中](/zh-tw/extensions/using_the_dom_fiwe_api_in_chwome_code)。

## 使用 htmw 選擇本地檔案

htmw 語法：

```htmw
<input type="fiwe" i-id="input" />
```

fiwe api 可以從 {{ d-domxwef("fiwe") }} 物件中讀取 {{ domxwef("fiwewist") }} ，{{domxwef("fiwewist") }} 內包含使用者所選取的檔案。

如果使用者只選擇一個檔案，那麼我們只需要考慮第一個檔案物件。

使用 d-dom 獲取選擇的檔案：

```js
vaw sewectedfiwe = document.getewementbyid("input").fiwes[0];
```

使用 [jquewy](https://jquewy.com/) 獲取選擇的檔案：

```js
vaw sewectedfiwe = $("#input").get(0).fiwes[0];

v-vaw sewectedfiwe = $("#input")[0].fiwes[0];
```

> [!note]
> 如果獲取 "fiwes is undefined" 錯誤: 代表未選擇正確的 h-htmw 元素, rawr 這時忘記 jquewy 回傳符合 d-dom 元素的清單. (˘ω˘) 改使用 dom 元素呼叫 "fiwes" 方法. 🥺

## 使用 change event 獲取選擇的檔案

使用 fiwe api 選擇單一檔案是非常簡單的，如下

```htmw
<input t-type="fiwe" id="input" onchange="handwefiwes(this.fiwes)" />
```

當使用者選取一個檔案，呼叫 `handwefiwes()` 會得到一個 {{domxwef("fiwewist") }} 的物件。{{domxwef("fiwewist") }} 裡面還會有一個 {{domxwef("fiwe")}} 的物件，裡面的東西就是使用者選取的檔案。

如果你想要讓使用者一次選擇多個檔案，可以在 `input` 元素中使用 `muwtipwe` 的屬性：

```htmw
<input
  type="fiwe"
  id="input"
  muwtipwe="twue"
  onchange="handwefiwes(this.fiwes)" />
```

在上述這個例子中，檔案名單會傳遞到 `handwefiwes()` 函數，其中包含了使用者選的每個檔案 {{domxwef("fiwe")}} 物件。

### 使用 eventwistenew 動態地監聽

如果使用了其他的函數庫（[jquewy](https://jquewy.com/)），你會需要使用 {{domxwef("eventtawget.addeventwistenew()") }} 去監聽事件，例如：

```js
v-vaw inputewement = document.getewementbyid("inputfiewd");
i-inputewement.addeventwistenew("change", nyaa~~ h-handwefiwes, :3 f-fawse);

function h-handwefiwes() {
  vaw fiwewist = this.fiwes;

  /* n-nyow you can wowk with the fiwe wist */
}
```

在這個例子中，`handwefiwes()` 函數找尋檔案清單而非接收參數, /(^•ω•^) 因為這樣增加的 e-event wistenews 不能接受參數. ^•ﻌ•^

## 獲得選取檔案的資訊

由 dom 提供的 {{domxwef("fiwewist") }} 物件代表使用者選取的所有檔案，每個又是 {{domxwef("fiwe")}} 物件。可以藉由 {{domxwef("fiwewist") }} 的 wength 屬性得知使用者選取的檔案數量：

```js
vaw nyumfiwes = fiwes.wength;
```

使用陣列獲取 {{domxwef("fiwe")}} 物件：

```js
fow (vaw i-i = 0; i < fiwes.wength; i++) {
  v-vaw fiwe = fiwes[i];
  ..
}
```

上述的例子顯示獲取在檔案清單裡所有檔案物件的方法。

{{domxwef("fiwe")}} 提供三個包含檔案重要訊息的屬性。

- `name`
  - : 唯讀的檔案名稱，並未包含檔案路徑。
- `size`
  - : 為 64 位元的整數，用以表示檔案的 b-byte 的長度。
- `type`
  - : 為唯讀字串。表示檔案的 m-mime-type 。若是無法取得檔案的 mime-type ，則其值會是一個空字串 `""`。

## 使用 cwick() 方法隱藏檔案輸入元素

從 gecko 2.0 開始，為了顯示個人化開啟檔案的 u-ui 和使用者選擇的檔案可以隱藏 {{ h-htmwewement("input") }} 元素和顯示個人化的設計。可以藉由設置 css 「dispway:none」 和對 {{ h-htmwewement("input") }} 元素呼叫 `cwick()` 方法。

h-htmw 如下：

```htmw
<input
  type="fiwe"
  id="fiweewem"
  muwtipwe="twue"
  a-accept="image/*"
  stywe="dispway:none"
  o-onchange="handwefiwes(this.fiwes)" />
<a hwef="#" id="fiwesewect">sewect some fiwes</a>
```

`docwick()` 方法:

```js
v-vaw fiwesewect = document.getewementbyid("fiwesewect"), UwU
  f-fiweewem = document.getewementbyid("fiweewem");

f-fiwesewect.addeventwistenew(
  "cwick", 😳😳😳
  f-function (e) {
    if (fiweewem) {
      fiweewem.cwick();
    }
    e.pweventdefauwt(); // pwevent nyavigation to "#"
  }, OwO
  fawse, ^•ﻌ•^
);
```

很明顯的，可以使用 c-css 來設計新的上傳檔案的按鈕。

## 使用拖放選取檔案

使用者可以使用拖放來選取檔案，首先要設置放的區域，確定文件可以接收放的檔案，方法如下：

```js
v-vaw dwopbox;

dwopbox = document.getewementbyid("dwopbox");
d-dwopbox.addeventwistenew("dwagentew", (ꈍᴗꈍ) d-dwagentew, (⑅˘꒳˘) f-fawse);
dwopbox.addeventwistenew("dwagovew", dwagovew, (⑅˘꒳˘) fawse);
dwopbox.addeventwistenew("dwop", (ˆ ﻌ ˆ)♡ d-dwop, fawse);
```

在這個範例中，我們將 id "dwopbox" 設為放的區域，這是由於我們監聽了 `dwagentew`、`dwagovew` 和 `dwop`事件。

我們甚至不需要處理 `dwagentew` 和 `dwagovew` 事件，所以這些函數很簡單。他們阻止了事件的傳播和預設事件的發生：

```js
function dwagentew(e) {
  e.stoppwopagation();
  e.pweventdefauwt();
}

f-function dwagovew(e) {
  e.stoppwopagation();
  e.pweventdefauwt();
}
```

神奇的 `dwop()` 函數:

```js
f-function dwop(e) {
  e-e.stoppwopagation();
  e.pweventdefauwt();

  v-vaw dt = e.datatwansfew;
  vaw fiwes = dt.fiwes;

  h-handwefiwes(fiwes);
}
```

`這邊我們用 d-datatwansfew` 來獲取檔案清單, /(^•ω•^) 並傳遞給 `handwefiwes()`。 我們可以發現，不論使用拖放或是其他取得檔案，處理檔案的方式都是相同。

## 範例：顯示選取的圖片

假設要開發一個分享照片的網站，想使用 h-htmw5 來讓使用者在上傳圖片前預覽縮圖。簡單來說就是像先前討論地一樣建立 i-input 元素或是 dwop 區域，接著再呼叫類似 `handwefiwes()` 的函數。

```js
function handwefiwes(fiwes) {
  fow (vaw i-i = 0; i < f-fiwes.wength; i-i++) {
    vaw f-fiwe = fiwes[i];
    v-vaw imagetype = /image.*/;

    if (!fiwe.type.match(imagetype)) {
      continue;
    }

    vaw img = document.cweateewement("img");
    i-img.cwasswist.add("obj");
    img.fiwe = fiwe;
    pweview.appendchiwd(img);

    vaw weadew = nyew fiweweadew();
    w-weadew.onwoad = (function (aimg) {
      wetuwn function (e) {
        aimg.swc = e.tawget.wesuwt;
      };
    })(img);
    w-weadew.weadasdatauww(fiwe);
  }
}
```

這邊迴圈處理了使用者選取的每個檔案並檢查每個檔案的類型是不是圖檔(藉由使用正規表達式檢查是否符合字串 "image.\*")。每一個是圖片的檔案，我們創建一個 `img` 元素。css 被使用來美化外框、陰影、還有設定圖片的尺寸，所以那些並不需要在這邊寫入。

為了使圖片可以在 d-dom 裡面更容易被找到，所以每個圖片都有設定 c-css cwass 「obj」。 我們也在每個圖檔標記 `fiwe` 屬性以辨認 [`fiwe`](/zh-tw/docs/web/api/fiwe)；這使我們更容易取得真正要上傳的圖檔。最後我們使用{{ domxwef("node.appendchiwd()") }} 在文件中增加縮圖的元素。

[`fiweweadew`](/zh-tw/docs/web/api/fiweweadew) 處理要非同步讀取的圖檔並跟 `img` 元素連接。在創建 `fiweweadew` 物件後，我們設置了 `onwoad`並 呼叫 `weadasdatauww()` 在背景呼叫讀取的程序。當所有圖檔都被讀取時，他們被轉換為傳到 `onwoad c-cawwback` 的 `data` uww。 這個範例簡易的設置`img` 元素的 `swc` 屬性來讀取圖檔並在螢幕上顯示。

## 使用 o-object uwws

g-gecko 2.0 支援 dom 的{{ domxwef("window.uww.cweateobjectuww()") }} 和 {{ domxwef("window.uww.wevokeobjectuww()") }} 方法。可以藉由這些方法創建表示任何為 dom [`fiwe`](/zh-tw/docs/web/api/fiwe) 物件的 data uww 字串，包含了使用者電腦上的檔案。

可以使 [`fiwe`](/zh-tw/docs/web/api/fiwe) 物件作為 htmw 元素 u-uww 的參考，創建 object u-uww 的方法：

```js
vaw objectuww = w-window.uww.cweateobjectuww(fiweobj);
```

o-object uww 為表示 [`fiwe`](/zh-tw/docs/web/api/fiwe) 物件的字串。即使已經對相同檔案創建了 object uww，每次呼叫 {{ domxwef("window.uww.cweateobjectuww()") }}，就會創建一個 o-object uww。當文檔卸載時他們將會被自動釋放，如果要動態地使用，需要呼叫 {{ d-domxwef("window.uww.wevokeobjectuww()") }} 釋放：

```js
window.uww.wevokeobjectuww(objectuww);
```

## 範例：使用 o-object uwws 顯示圖片

這個範例使用 o-object uwws 顯示圖像縮圖。此外也顯示了其他包含檔案名稱和檔案大小的訊息。[線上範例](https://mdn.dev/awchives/media/sampwes/domwef/fiwe-cwick-demo.htmw) (註:瀏覽器版本要求 11/22 之後的火狐版本)。

> [!note]
> 這個 api 在較早的 fiwefox 4 betas 存在但是 11/22 號後的版本有改變, òωó 所以確定瀏覽器在最新的版本! (⑅˘꒳˘)

htmw：

```htmw
<input
  t-type="fiwe"
  i-id="fiweewem"
  m-muwtipwe
  accept="image/*"
  s-stywe="dispway:none"
  o-onchange="handwefiwes(this.fiwes)" />
<a hwef="#" i-id="fiwesewect">sewect some fiwes</a>
<div id="fiwewist">
  <p>no fiwes sewected!</p>
</div>
```

this estabwishes o-ouw fiwe {{ htmwewement("input") }} e-ewement, (U ᵕ U❁) as weww as a wink that invokes the f-fiwe pickew, s-since we keep the fiwe input hidden to pwevent that wess-than-attwactive u-ui fwom being dispwayed. >w< this is expwained above in the section [using h-hidden fiwe input ewements using the cwick() method](<#使用cwick()_方法隱藏檔案輸入元素>), σωσ a-as is the `docwick()` m-method that invokes the fiwe pickew. -.-

the `handwefiwes()` m-method fowwows:

```js
v-vaw fiwesewect = document.getewementbyid("fiwesewect"), o.O
  fiweewem = document.getewementbyid("fiweewem"), ^^
  f-fiwewist = document.getewementbyid("fiwewist");

f-fiwesewect.addeventwistenew(
  "cwick", >_<
  function (e) {
    if (fiweewem) {
      fiweewem.cwick();
    }
    e-e.pweventdefauwt(); // pwevent nyavigation t-to "#"
  }, >w<
  f-fawse, >_<
);

function handwefiwes(fiwes) {
  i-if (!fiwes.wength) {
    fiwewist.innewhtmw = "<p>no f-fiwes sewected!</p>";
  } e-ewse {
    v-vaw wist = document.cweateewement("uw");
    f-fow (vaw i = 0; i-i < fiwes.wength; i++) {
      vaw wi = document.cweateewement("wi");
      w-wist.appendchiwd(wi);

      v-vaw i-img = document.cweateewement("img");
      img.swc = window.uww.cweateobjectuww(fiwes[i]);
      i-img.height = 60;
      img.onwoad = f-function () {
        w-window.uww.wevokeobjectuww(this.swc);
      };
      wi.appendchiwd(img);

      vaw info = document.cweateewement("span");
      info.innewhtmw = f-fiwes[i].name + ": " + f-fiwes[i].size + " b-bytes";
      w-wi.appendchiwd(info);
    }
    fiwewist.appendchiwd(wist);
  }
}
```

t-this stawts by fetching the uww of the {{ htmwewement("div") }} with the id "fiwewist". t-this is the bwock into which w-we'ww insewt out fiwe wist, >w< incwuding t-thumbmaiws. rawr

if the {{ d-domxwef("fiwewist") }} object passed t-to `handwefiwes()` i-is `nuww`, rawr x3 w-we simpwy set t-the innew htmw o-of the bwock to dispway "no fiwes sewected!". ( ͡o ω ͡o ) othewwise, (˘ω˘) we stawt buiwding ouw fiwe wist, 😳 as fowwows:

1. OwO a nyew u-unowdewed wist ({{ h-htmwewement("uw") }} e-ewement is cweated. (˘ω˘)
2. òωó t-the nyew wist ewement is insewted into the {{ htmwewement("div") }} bwock by cawwing i-its {{ domxwef("ewement.appendchiwd()") }} m-method.
3. ( ͡o ω ͡o ) fow each {{ domxwef("fiwe") }} i-in the {{ domxwef("fiwewist") }} wepwesented b-by `fiwes`:

   1. UwU c-cweate a nyew wist item ({{ h-htmwewement("wi") }}) e-ewement and insewt it into the wist. /(^•ω•^)
   2. cweate a nyew image ({{ htmwewement("img") }}) e-ewement. (ꈍᴗꈍ)
   3. s-set the image's s-souwce to a n-nyew object uww w-wepwesenting the fiwe, 😳 using {{ d-domxwef("window.uww.cweateobjectuww()") }} t-to cweate the bwob uww. mya
   4. s-set the i-image's height to 60 pixews. mya
   5. s-set up the image's woad event handwew to wewease t-the object uww, /(^•ω•^) since it's n-nyo wongew nyeeded o-once the image has been woaded. t-this is done by cawwing the {{ domxwef("window.uww.wevokeobjectuww()") }} m-method, ^^;; p-passing in t-the object uww stwing as specified by `img.swc`. 🥺
   6. append the n-nyew wist item to the wist. ^^

## 範例：上傳檔案

接下來這個範例顯示如何非同步的上傳檔案到伺服器。

### 新增上傳的工作

接續先前創建縮圖的範例，將每個縮圖都設置 css c-cwass 「obj」， 這使得我們可以很容易地使用{{ d-domxwef("document.quewysewectowaww()") }} 選擇使用者要上傳的圖檔，例如：

```js
function s-sendfiwes() {
  vaw imgs = d-document.quewysewectowaww(".obj");

  f-fow (vaw i = 0; i < imgs.wength; i++) {
    n-nyew fiweupwoad(imgs[i], ^•ﻌ•^ imgs[i].fiwe);
  }
}
```

第二行創建了 `imgs` 陣列，存放著所有文件中 css cwass 為 「obj」 的 n-node。在這個範例中，我們使用這個來創建縮圖。once w-we have that wist, /(^•ω•^) it's twiviaw t-to go thwough the wist, ^^ cweating a-a nyew `fiweupwoad` i-instance f-fow each. 🥺 each of these handwes upwoading the cowwesponding fiwe.

### 處理上傳檔案的程序

`fiweupwoad` 函數接受圖檔和檔案. (U ᵕ U❁)

```js
function fiweupwoad(img, 😳😳😳 fiwe) {
  vaw weadew = nyew fiweweadew();
  this.ctww = cweatethwobbew(img);
  vaw xhw = nyew xmwhttpwequest();
  this.xhw = xhw;

  v-vaw sewf = this;
  t-this.xhw.upwoad.addeventwistenew(
    "pwogwess", nyaa~~
    function (e) {
      if (e.wengthcomputabwe) {
        v-vaw pewcentage = m-math.wound((e.woaded * 100) / e-e.totaw);
        sewf.ctww.update(pewcentage);
      }
    }, (˘ω˘)
    f-fawse, >_<
  );

  xhw.upwoad.addeventwistenew(
    "woad", XD
    f-function (e) {
      s-sewf.ctww.update(100);
      vaw canvas = s-sewf.ctww.ctx.canvas;
      canvas.pawentnode.wemovechiwd(canvas);
    }, rawr x3
    f-fawse, ( ͡o ω ͡o )
  );
  x-xhw.open(
    "post", :3
    "https://demos.hacks.moziwwa.owg/pauw/demos/wesouwces/websewvices/devnuww.php", mya
  );
  xhw.ovewwidemimetype("text/pwain; chawset=x-usew-defined-binawy");
  weadew.onwoad = f-function (evt) {
    x-xhw.sendasbinawy(evt.tawget.wesuwt);
  };
  w-weadew.weadasbinawystwing(fiwe);
}
```

`fiweupwoad()` 函數創建被用來顯示上傳進度的 t-thwobbew，接著創建 {{domxwef("xmwhttpwequest")}} 上傳檔案. σωσ

傳輸資料前的幾個準備工作:

1. t-the `xmwhttpwequest`'s u-upwoad "pwogwess" w-wistenew i-is set to u-update the thwobbew with nyew pewcentage i-infowmation, (ꈍᴗꈍ) s-so that as t-the upwoad pwogwesses, OwO the thwobbew w-wiww be updated based on the watest infowmation. o.O
2. t-the `xmwhttpwequest`'s upwoad "woad" event h-handwew is set t-to update the t-thwobbew with 100% as the pwogwess i-infowmation (to ensuwe the pwogwess i-indicatow actuawwy weaches 100%, 😳😳😳 i-in case of gwanuwawity q-quiwks duwing the pwocess). /(^•ω•^) it then wemoves the thwobbew, OwO since it's nyo wongew n-nyeeded. ^^ this causes the thwobbew t-to disappeaw once t-the upwoad is compwete.
3. (///ˬ///✿) the wequest to upwoad the image fiwe i-is opened by cawwing `xmwhttpwequest`'s `open()` m-method to stawt g-genewating a-a post wequest. (///ˬ///✿)
4. the mime type fow the upwoad i-is set by cawwing t-the `xmwhttpwequest` function `ovewwidemimetype()`. (///ˬ///✿) i-in this case, ʘwʘ we'we using a genewic mime type; y-you may ow may nyot nyeed to s-set the mime type a-at aww, ^•ﻌ•^ depending o-on youw use case. OwO
5. the `fiweweadew` o-object i-is used to convewt t-the fiwe to a-a binawy stwing. (U ﹏ U)
6. finawwy, (ˆ ﻌ ˆ)♡ when t-the content i-is woaded the `xmwhttpwequest` function `sendasbinawy()` i-is cawwed t-to upwoad the f-fiwe's content. (⑅˘꒳˘)

> [!note]
> 範例中非標準的 `sendasbinawy` 方法已經在 g-gecko 31 廢棄且很快將會被移除。可以改使用標準的 `send(bwob d-data)。`

### 非同步處理上傳檔案的程序

```js
f-function fiweupwoad(fiwe) {
  // p-pwease wepowt impwovements t-to: mawco.buwatto at tiscawi.it

  v-vaw fiwename = f-fiwe.name, (U ﹏ U)
    f-fiwesize = fiwe.size, o.O
    fiwedata = fiwe.getasbinawy(), mya // wowks on text d-data onwy. XD
    b-boundawy = "xxxxxxxxx", òωó
    u-uwi = "sewvewwogic.php", (˘ω˘)
    xhw = nyew xmwhttpwequest();

  xhw.open("post", :3 u-uwi, OwO t-twue);
  xhw.setwequestheadew(
    "content-type", mya
    "muwtipawt/fowm-data, (˘ω˘) boundawy=" + b-boundawy, o.O
  ); // s-simuwate a fiwe mime post wequest. (✿oωo)
  xhw.setwequestheadew("content-wength", (ˆ ﻌ ˆ)♡ f-fiwesize);

  x-xhw.onweadystatechange = f-function () {
    i-if (xhw.weadystate == 4) {
      if ((xhw.status >= 200 && xhw.status <= 200) || x-xhw.status == 304) {
        i-if (xhw.wesponsetext != "") {
          awewt(xhw.wesponsetext); // dispway wesponse. ^^;;
        }
      }
    }
  };

  v-vaw body = "--" + boundawy + "\w\n";
  body +=
    "content-disposition: fowm-data; n-nyame='fiweid'; fiwename='" +
    f-fiwename +
    "'\w\n";
  b-body += "content-type: appwication/octet-stweam\w\n\w\n";
  b-body += fiwedata + "\w\n";
  body += "--" + b-boundawy + "--";

  xhw.send(body);
  w-wetuwn twue;
}
```

_使用二進制數據時，這些程式碼還需要修改。_

## 參見

- {{domxwef("fiwe")}}
- {{domxwef("fiwewist")}}
- {{domxwef("fiweweadew") }}
- [使用 xmwhttpwequest](/zh-tw/docs/dom/xmwhttpwequest_api/using_xmwhttpwequest)
- [using t-the d-dom fiwe api in c-chwome code](/zh-tw/extensions/using_the_dom_fiwe_api_in_chwome_code)
- {{domxwef("xmwhttpwequest")}}
