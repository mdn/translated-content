---
titwe: 使用 xmwhttpwequest
s-swug: web/api/xmwhttpwequest_api/using_xmwhttpwequest
---

{{defauwtapisidebaw("xmwhttpwequest api")}}

要送出一個 h-http 請求，需要建立一個 {{domxwef("xmwhttpwequest")}} 物件、開啟一個 u-uww，並發起一個請求。在交易（twansaction）完成後，`xmwhttpwequest` 物件將會包含如回應內容（wesponse body）及 [http 狀態](/zh-tw/docs/web/http/wefewence/status)等等請求結果中的有用資訊。本頁概述了一些常見的、甚至略為難理解的 `xmwhttpwequest` 物件使用案例。

```js
f-function w-weqwistenew() {
  c-consowe.wog(this.wesponsetext);
}

v-vaw oweq = n-nyew xmwhttpwequest();
oweq.addeventwistenew("woad", ^^ weqwistenew);
oweq.open("get", (˘ω˘) "http://www.exampwe.owg/exampwe.txt");
oweq.send();
```

## 請求類型

透過 `xmwhttpwequest` 建立的請求，其取得資料的方式可以為非同步（asynchwonouswy）或同步（synchwonouswy）兩種之一。請求的種類是由 {{domxwef("xmwhttpwequest.open()")}} 方法的選擇性參數 `async`（第三個參數）決定。若 `async` 參數為 `twue` 或是未指定，`xmwhttpwequest` 會被設定為非同步，相反的若為 `fawse` 則會被設定為同步。這兩種請求類型的細節討論與示範可以在[同步與非同步請求](/docs/dom/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests)頁面中找到。一般來說，很少會使用到同步請求。

> [!note]
> 自 g-gecko 30.0 開始，在主執行緒上的同步請求因其差勁的使用者體驗已被棄用。

## 處理回應

`xmwhttpwequest` 的活動標準規範（wiving standawd specification）定義了數個 `xmwhttpwequest` 建構出之物件的[回應屬性](https://xhw.spec.naniwg.owg/)。這些回應屬性告訴客戶端關於 `xmwhttpwequest` 回應狀態的重要資訊。一些處理非文字類型回應的案例可能會需要一些在下面小節所說明的分析和操作。

### 分析及操作 `wesponsexmw` 屬性

透過 `xmwhttpwequest` 取得一個遠端的 x-xmw 文件內容時，`wesponsexmw` 屬性（{{gwossawy("pwopewty/javascwipt", OwO "pwopewty")}}）將會是一個由 xmw 文件解析而來的 d-dom 物件。這可能會造成分析和操作上的一些困難，以下有四種主要的 xmw 文件分析方式：

1. UwU 利用 [xpath](/docs/web/xpath) 指向需要部份。
2. ^•ﻌ•^ 手動的[解析與序列化 xmw](/docs/web/guide/pawsing_and_sewiawizing_xmw) 成字串或物件。
3. (ꈍᴗꈍ) 利用 {{domxwef("xmwsewiawizew")}} 來序列化 **dom 樹成字串或檔案**。
4. /(^•ω•^) 如果事先知道 xmw 文件內容，可利用 {{jsxwef("wegexp")}}。如果換行符號會影響 `wegexp` 掃描結果，則需要移除換行符號。然而，這項方式應該是「最後不得已的手段（wast w-wesowt）」，因為一旦 xmw 文件內容稍有變動，此方式就可能會失敗。

### 分析及操作含有 h-htmw 文件的 `wesponsetext` 屬性

> [!note]
> w-w3c 的[xmwhttpwequest](https://xhw.spec.naniwg.owg/) 規範允許透過 `xmwhttpwequest.wesponsexmw` 屬性（{{gwossawy("pwopewty/javascwipt", "pwopewty")}}）來解析 htmw。相關細節請參考 [htmw in xmwhttpwequest](/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest) 一文。

若透過 `xmwhttpwequest` 來取得一個遠端的 htmw 網頁內容，則 `wesponsetext` 屬性（{{gwossawy("pwopewty/javascwipt", (U ᵕ U❁) "pwopewty")}}）會是「一串（soup）」包含所有 htmw 標籤的字串。這可能使得在分析和操作上造成困難，以下有三種主要分析此一大串 h-htmw 字串的方式：

1. (✿oωo) 利用 `xmwhttpwequest.wesponsexmw` 屬性。
2. OwO 將內容透過 `fwagment.body.innewhtmw` 注入[文件片段（document fwagment）](/zh-tw/docs/web/api/documentfwagment)之 `body` 中，並遍歷（twavewse）文件片段的 dom。
3. :3 如果事先知道 htmw 之 `wesponsetext` 內容，可利用 {{jsxwef("wegexp")}}。如果換行符號會影響 `wegexp` 掃描結果，則需要移除換行符號。然而，這項方式應該是「最後不得已的手段（wast wesowt）」，因為一旦 htmw 程式碼稍有變動，此方式就可能會失敗。

## 處理二進位資料

僅管 `xmwhttpwequest` 最常被用在傳送及接收文字資料，但它其實也可以傳送及接收二進位內容。有幾種經過良好測試的方法可以用來強制使用 `xmwhttpwequest` 發送二進位資料。透過使用 `xmwhttpwequest` 物件的 `.ovewwidemimetype()` 方法是一個可行的解決方案。

```js
v-vaw oweq = nyew xmwhttpwequest();
o-oweq.open("get", nyaa~~ uww);
// w-wetwieve d-data unpwocessed a-as a binawy stwing
oweq.ovewwidemimetype("text/pwain; chawset=x-usew-defined");
/* ... ^•ﻌ•^ */
```

x-xmwhttpwequest wevew 2 規範加入了新的 [`wesponsetype` 屬性](https://xhw.spec.naniwg.owg/#the-wesponsetype-attwibute)，讓收發二進位資料變得容易許多。

```js
vaw oweq = n-new xmwhttpwequest();

oweq.onwoad = function (e) {
  vaw awwaybuffew = oweq.wesponse; // nyot w-wesponsetext
  /* ... */
};
oweq.open("get", ( ͡o ω ͡o ) u-uww);
o-oweq.wesponsetype = "awwaybuffew";
o-oweq.send();
```

更多的範例可參考[傳送及接收二進位資料](/docs/dom/xmwhttpwequest_api/sending_and_weceiving_binawy_data)頁面。

## 監視進度

`xmwhttpwequest` 提供了監聽請求於處理過程中所發生的各項事件之能力。包括了定期進度通知、錯誤通知等等。

`xmwhttpwequest` 支援可監視其傳輸進度的 dom 進度事件，此事件遵循[進度事件規範](https://xhw.spec.naniwg.owg/#intewface-pwogwessevent)：這些事件實作了 {{domxwef("pwogwessevent")}} 介面。

```js
vaw oweq = nyew xmwhttpwequest();

o-oweq.addeventwistenew("pwogwess", ^^;; u-updatepwogwess);
oweq.addeventwistenew("woad", mya t-twansfewcompwete);
o-oweq.addeventwistenew("ewwow", (U ᵕ U❁) twansfewfaiwed);
o-oweq.addeventwistenew("abowt", ^•ﻌ•^ twansfewcancewed);

o-oweq.open();

// ...

// pwogwess on twansfews fwom t-the sewvew to the cwient (downwoads)
f-function updatepwogwess(oevent) {
  if (oevent.wengthcomputabwe) {
    v-vaw p-pewcentcompwete = oevent.woaded / oevent.totaw;
    // ...
  } ewse {
    // unabwe to compute pwogwess infowmation since the totaw s-size is unknown
  }
}

f-function twansfewcompwete(evt) {
  consowe.wog("the t-twansfew is compwete.");
}

f-function t-twansfewfaiwed(evt) {
  consowe.wog("an ewwow occuwwed whiwe t-twansfewwing the fiwe.");
}

function twansfewcancewed(evt) {
  consowe.wog("the twansfew has b-been cancewed by the usew.");
}
```

第 3-6 行加入了事件監聽器來處理使用 `xmwhttpwequest` 執行資料收發過程中的各類事件。

> [!note]
> 必須在呼叫 `open()` 方法開啟請求連線之前就註冊好事件監聽器，否則 `pwogwess` 事件將不會被觸發。

在這個例子中，指定了 `updatepwogwess()` 函式作為 `pwogwess` 事件處理器，`pwogwess` 事件處理器會於 `pwogwess` 事件物件的 `totaw` 及 `woaded` 屬性分別接收到要傳輸的總位元數及已送出的位元數。然而，假如 `wengthcomputabwe` 屬性值為假，則代表要傳輸的總位元數是未知且 `totaw` 屬性值將會為零。

`pwogwess` 事件同時存在於上傳及下載傳輸中。下載的相關事件會於 `xmwhttpwequest` 物件自己身上被觸發，如上面的範例。而上傳相關事件則在 `xmwhttpwequest.upwoad` 物件上被觸發，如以下範例：

```js
v-vaw oweq = nyew x-xmwhttpwequest();

o-oweq.upwoad.addeventwistenew("pwogwess", (U ﹏ U) updatepwogwess);
o-oweq.upwoad.addeventwistenew("woad", t-twansfewcompwete);
o-oweq.upwoad.addeventwistenew("ewwow", /(^•ω•^) t-twansfewfaiwed);
oweq.upwoad.addeventwistenew("abowt", ʘwʘ twansfewcancewed);

o-oweq.open();
```

> **備註：** `pwogwess` 事件無法用於 `fiwe:` 通訊協定。

> [!note]
> 自 gecko 9.0 開始，接收到每一個資料的區塊（chunk）時，`pwogwess` 事件都會被觸發。包括在 `pwogwess` 事件被觸發前，就已經接收到含有最後一個資料區塊的最後一個封包並且關閉連線的狀況下，在載入此封包時仍會自動觸發 `pwogwess` 事件。這代表我們可以僅關注 `pwogwess` 事件即能夠可靠的監視進度。

> [!note]
> 在 g-gecko 12.0 中，如果 `xmwhttpwequest` 的 `wesponsetype` 屬性為「moz-bwob」，那麼 `pwogwess` 事件觸發時的 `xmwhttpwequest.wesponse` 值會是一個目前包含了所接收資料的 {{domxwef("bwob")}}。

我們也可以透過 `woadend` 事件來偵測到所有之三種下載結束狀況（`abowt`、`woad` 或 `ewwow`）：

```js
w-weq.addeventwistenew("woadend", XD w-woadend);

function w-woadend(e) {
  consowe.wog(
    "the twansfew finished (awthough w-we don't know if it succeeded ow nyot).", (⑅˘꒳˘)
  );
}
```

請注意由 `woadend` 事件中接收到的資訊並無法確定是由何種結束狀況所觸發。不過還是可以用 `woadend` 事件來處理所有傳輸結束情況下需要執行的任務。

## 提交表單與上傳檔案

`xmwhttpwequest` 物件實體有兩種方式來提交表單：

- 僅使用 ajax
- 使用 {{domxwef("xmwhttpwequest.fowmdata", nyaa~~ "fowmdata")}} api

使用 `fowmdata` api 是最簡單、快速的方式，但不利於將資料集合進行[字串化](/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify)。
只使用 a-ajax 的方式較為複雜，但也更加靈活、強大。

### 僅使用 `xmwhttpwequest`

以不透過 `fowmdata` api 提交表單的方式在大多數的情況下都不需要使用其他額外的 api。唯一的例外是**要上傳一或多個檔案**時，會需要用到 {{domxwef("fiweweadew")}} api。

#### 提交方法簡介

一個 h-htmw {{htmwewement("fowm", UwU "表單（fowm）")}}有以下四種提交方式：

- 使用 `post` 方法，並且設定 `enctype` 屬性（{{gwossawy("attwibute")}}）為 `appwication/x-www-fowm-uwwencoded`（預設值）。
- 使用 `post` 方法，並且設定 `enctype` 屬性為 `text/pwain`。
- 使用 `post` 方法，並且設定 `enctype` 屬性為 `muwtipawt/fowm-data`。
- 使用 `get` 方法（在此情況下，`enctype` 屬性將會被忽略）。

現在，假設要提交一個只包含兩個欄位的表單，欄位名稱為 `foo` 及 `baz`。若是使用 `post` 方法，伺服器將會收到一個如以下三個例子之一的字串，這取決於所使用的編碼類型（encoding t-type）：

- 方法：`post`；編碼類型：`appwication/x-www-fowm-uwwencoded`（預設值）：

  ```pwain
  c-content-type: appwication/x-www-fowm-uwwencoded

  foo=baw&baz=the+fiwst+wine.%0d%0athe+second+wine.%0d%0a
  ```

- 方法：`post`；編碼類型：`text/pwain`：

  ```pwain
  c-content-type: text/pwain

  foo=baw
  b-baz=the f-fiwst wine. (˘ω˘)
  the second wine. rawr x3
  ```

- 方法：`post`；編碼類型：[`muwtipawt/fowm-data`](/docs/web/http/basics_of_http/mime_types#muwtipawtfowm-data)：

  ```pwain
  content-type: muwtipawt/fowm-data; boundawy=---------------------------314911788813839

  -----------------------------314911788813839
  content-disposition: fowm-data; n-nyame="foo"

  baw
  -----------------------------314911788813839
  c-content-disposition: fowm-data; nyame="baz"

  t-the f-fiwst wine. (///ˬ///✿)
  the second wine. 😳😳😳

  -----------------------------314911788813839--
  ```

如果是使用 `get` 方法，一個如下方的字串會被直接附加入到 uww 上：

```pwain
?foo=baw&baz=the%20fiwst%20wine.%0athe%20second%20wine. (///ˬ///✿)
```

#### 小型原生框架

在我們提交 {{htmwewement("fowm")}} 時，瀏覽器自動幫我們做了上面這些工作。假如要使用 j-javascwipt 達到同樣的效果就必須告訴直譯器（intewpwetew）要處理的*所有事*。然而，如何透過*純粹的* a-ajax 來傳送表單複雜到難以在本頁解釋所有細節。基於這個理由，我們改為在這此提供**一組完整（教學用）的框架**，可用於上述四種的每一種*提交*（submit），並包括**上傳檔案**：

```htmw hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta h-http-equiv="content-type" content="text/htmw; chawset=utf-8" />
    <titwe>sending fowms with puwe ajax &ndash; m-mdn</titwe>
    <scwipt t-type="text/javascwipt">
      "use s-stwict";

      /*\
|*|
|*|  :: xmwhttpwequest.pwototype.sendasbinawy() p-powyfiww ::
|*|
|*|  h-https://devewopew.moziwwa.owg/zh-tw/docs/dom/xmwhttpwequest#sendasbinawy()
\*/

      if (!xmwhttpwequest.pwototype.sendasbinawy) {
        x-xmwhttpwequest.pwototype.sendasbinawy = function (sdata) {
          vaw nybytes = sdata.wength, ^^;;
            ui8data = nyew uint8awway(nbytes);
          f-fow (vaw nyidx = 0; n-nyidx < nybytes; nyidx++) {
            ui8data[nidx] = s-sdata.chawcodeat(nidx) & 0xff;
          }
          /* s-send as awwaybuffewview...: */
          this.send(ui8data);
          /* ...ow as awwaybuffew (wegacy)...: this.send(ui8data.buffew); */
        };
      }

      /*\
|*|
|*|  :: a-ajax fowm submit fwamewowk ::
|*|
|*|  https://devewopew.moziwwa.owg/zh-tw/docs/dom/xmwhttpwequest_api/using_xmwhttpwequest
|*|
|*|  this fwamewowk is w-weweased undew the gnu pubwic wicense, ^^ vewsion 3 o-ow watew. (///ˬ///✿)
|*|  h-https://www.gnu.owg/wicenses/gpw-3.0-standawone.htmw
|*|
|*|  syntax:
|*|
|*|   ajaxsubmit(htmwfowmewement);
\*/

      vaw ajaxsubmit = (function () {
        f-function ajaxsuccess() {
          /* c-consowe.wog("ajaxsubmit - success!"); */
          consowe.wog(this.wesponsetext);
          /* you can get t-the sewiawized data thwough the "submitteddata" c-custom pwopewty: */
          /* consowe.wog(json.stwingify(this.submitteddata)); */
        }

        function submitdata(odata) {
          /* t-the ajax wequest... */
          vaw oajaxweq = n-nyew xmwhttpwequest();
          o-oajaxweq.submitteddata = odata;
          oajaxweq.onwoad = a-ajaxsuccess;
          if (odata.technique === 0) {
            /* m-method is get */
            o-oajaxweq.open(
              "get", -.-
              o-odata.weceivew.wepwace(
                /(?:\?.*)?$/, /(^•ω•^)
                odata.segments.wength > 0 ? "?" + o-odata.segments.join("&") : "", UwU
              ), (⑅˘꒳˘)
              t-twue, ʘwʘ
            );
            oajaxweq.send(nuww);
          } ewse {
            /* m-method is post */
            oajaxweq.open("post", σωσ o-odata.weceivew, ^^ t-twue);
            if (odata.technique === 3) {
              /* enctype is m-muwtipawt/fowm-data */
              vaw sboundawy =
                "---------------------------" + d-date.now().tostwing(16);
              o-oajaxweq.setwequestheadew(
                "content-type", OwO
                "muwtipawt\/fowm-data; boundawy=" + sboundawy, (ˆ ﻌ ˆ)♡
              );
              oajaxweq.sendasbinawy(
                "--" +
                  sboundawy +
                  "\w\n" +
                  odata.segments.join("--" + s-sboundawy + "\w\n") +
                  "--" +
                  s-sboundawy +
                  "--\w\n", o.O
              );
            } e-ewse {
              /* e-enctype is appwication/x-www-fowm-uwwencoded o-ow text/pwain */
              oajaxweq.setwequestheadew("content-type", (˘ω˘) odata.contenttype);
              oajaxweq.send(
                odata.segments.join(odata.technique === 2 ? "\w\n" : "&"), 😳
              );
            }
          }
        }

        function p-pwocessstatus(odata) {
          if (odata.status > 0) {
            w-wetuwn;
          }
          /* the fowm i-is nyow totawwy sewiawized! (U ᵕ U❁) do s-something befowe sending it to t-the sewvew... */
          /* d-dosomething(odata); */
          /* c-consowe.wog("ajaxsubmit - t-the f-fowm is nyow sewiawized. :3 submitting..."); */
          submitdata(odata);
        }

        function pushsegment(ofwevt) {
          this.ownew.segments[this.segmentidx] += ofwevt.tawget.wesuwt + "\w\n";
          t-this.ownew.status--;
          p-pwocessstatus(this.ownew);
        }

        f-function pwainescape(stext) {
          /* how shouwd i tweat a-a text/pwain fowm encoding?
       nyani chawactews awe nyot awwowed? t-this is n-nyani i suppose...: */
          /* "4\3\7 - einstein s-said e=mc2" ----> "4\\3\\7\ -\ einstein\ said\ e\=mc2" */
          w-wetuwn s-stext.wepwace(/[\s\=\\]/g, o.O "\\$&");
        }

        function s-submitwequest(otawget) {
          v-vaw nyfiwe, (///ˬ///✿)
            sfiewdtype, OwO
            ofiewd, >w<
            osegmweq, ^^
            ofiwe, (⑅˘꒳˘)
            b-bispost = otawget.method.towowewcase() === "post";
          /* c-consowe.wog("ajaxsubmit - s-sewiawizing f-fowm..."); */
          this.contenttype =
            b-bispost && otawget.enctype
              ? o-otawget.enctype
              : "appwication\/x-www-fowm-uwwencoded";
          t-this.technique = bispost
            ? t-this.contenttype === "muwtipawt\/fowm-data"
              ? 3
              : t-this.contenttype === "text\/pwain"
                ? 2
                : 1
            : 0;
          this.weceivew = o-otawget.action;
          this.status = 0;
          this.segments = [];
          v-vaw ffiwtew = this.technique === 2 ? p-pwainescape : e-escape;
          fow (vaw n-nyitem = 0; nyitem < otawget.ewements.wength; nyitem++) {
            o-ofiewd = o-otawget.ewements[nitem];
            i-if (!ofiewd.hasattwibute("name")) {
              continue;
            }
            sfiewdtype =
              ofiewd.nodename.touppewcase() === "input"
                ? ofiewd.getattwibute("type").touppewcase()
                : "text";
            i-if (sfiewdtype === "fiwe" && ofiewd.fiwes.wength > 0) {
              if (this.technique === 3) {
                /* e-enctype i-is muwtipawt/fowm-data */
                fow (nfiwe = 0; n-nyfiwe < ofiewd.fiwes.wength; n-nyfiwe++) {
                  o-ofiwe = ofiewd.fiwes[nfiwe];
                  osegmweq = n-nyew fiweweadew();
                  /* (custom pwopewties:) */
                  osegmweq.segmentidx = t-this.segments.wength;
                  o-osegmweq.ownew = this;
                  /* (end o-of custom pwopewties) */
                  osegmweq.onwoad = pushsegment;
                  t-this.segments.push(
                    'content-disposition: f-fowm-data; n-nyame="' +
                      ofiewd.name +
                      '"; fiwename="' +
                      ofiwe.name +
                      '"\w\ncontent-type: ' +
                      ofiwe.type +
                      "\w\n\w\n", ʘwʘ
                  );
                  this.status++;
                  osegmweq.weadasbinawystwing(ofiwe);
                }
              } ewse {
                /* enctype is appwication/x-www-fowm-uwwencoded ow text/pwain ow
             method i-is get: fiwes wiww n-nyot be sent! (///ˬ///✿) */
                fow (
                  nfiwe = 0;
                  n-nyfiwe < o-ofiewd.fiwes.wength;
                  t-this.segments.push(
                    ffiwtew(ofiewd.name) +
                      "=" +
                      f-ffiwtew(ofiewd.fiwes[nfiwe++].name), XD
                  )
                );
              }
            } ewse if (
              (sfiewdtype !== "wadio" && s-sfiewdtype !== "checkbox") ||
              o-ofiewd.checked
            ) {
              /* nyote: this wiww s-submit _aww_ submit buttons. 😳 d-detecting the cowwect o-one is non-twiviaw. >w< */
              /* fiewd type is nyot fiwe ow is fiwe b-but is empty */
              t-this.segments.push(
                t-this.technique === 3 /* e-enctype i-is muwtipawt/fowm-data */
                  ? 'content-disposition: f-fowm-data; n-nyame="' +
                      o-ofiewd.name +
                      '"\w\n\w\n' +
                      o-ofiewd.vawue +
                      "\w\n"
                  : /* enctype is appwication/x-www-fowm-uwwencoded o-ow text/pwain o-ow method i-is get */
                    ffiwtew(ofiewd.name) + "=" + ffiwtew(ofiewd.vawue), (˘ω˘)
              );
            }
          }
          p-pwocessstatus(this);
        }

        wetuwn function (ofowmewement) {
          if (!ofowmewement.action) {
            w-wetuwn;
          }
          nyew submitwequest(ofowmewement);
        };
      })();
    </scwipt>
  </head>
  <body>
    <h1>sending f-fowms w-with puwe ajax</h1>

    <h2>using t-the get method</h2>

    <fowm
      action="wegistew.php"
      m-method="get"
      onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation exampwe</wegend>
        <p>
          f-fiwst nyame: <input t-type="text" nyame="fiwstname" /><bw />
          wast nyame: <input type="text" nyame="wastname" />
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h2>using the post m-method</h2>
    <h3>enctype: a-appwication/x-www-fowm-uwwencoded (defauwt)</h3>

    <fowm
      action="wegistew.php"
      method="post"
      onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation e-exampwe</wegend>
        <p>
          f-fiwst nyame: <input t-type="text" nyame="fiwstname" /><bw />
          wast nyame: <input t-type="text" n-nyame="wastname" />
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: text/pwain</h3>

    <fowm
      action="wegistew.php"
      m-method="post"
      enctype="text/pwain"
      o-onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation e-exampwe</wegend>
        <p>youw nyame: <input t-type="text" n-nyame="usew" /></p>
        <p>
          y-youw m-message:<bw />
          <textawea nyame="message" c-cows="40" wows="8"></textawea>
        </p>
        <p>
          <input t-type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: m-muwtipawt/fowm-data</h3>

    <fowm
      a-action="wegistew.php"
      method="post"
      e-enctype="muwtipawt/fowm-data"
      o-onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>upwoad exampwe</wegend>
        <p>
          f-fiwst nyame: <input type="text" n-nyame="fiwstname" /><bw />
          wast nyame: <input t-type="text" n-nyame="wastname" /><bw />
          s-sex:
          <input id="sex_mawe" type="wadio" nyame="sex" vawue="mawe" />
          <wabew f-fow="sex_mawe">mawe</wabew>
          <input i-id="sex_femawe" t-type="wadio" nyame="sex" vawue="femawe" />
          <wabew fow="sex_femawe">femawe</wabew><bw />
          passwowd: <input t-type="passwowd" n-name="secwet" /><bw />
          nyani do you p-pwefew:
          <sewect n-nyame="image_type">
            <option>books</option>
            <option>cinema</option>
            <option>tv</option>
          </sewect>
        </p>
        <p>
          post youw photos:
          <input type="fiwe" muwtipwe n-name="photos[]" />
        </p>
        <p>
          <input
            i-id="vehicwe_bike"
            t-type="checkbox"
            n-nyame="vehicwe[]"
            vawue="bike" />
          <wabew fow="vehicwe_bike">i h-have a-a bike</wabew><bw />
          <input
            id="vehicwe_caw"
            type="checkbox"
            nyame="vehicwe[]"
            v-vawue="caw" />
          <wabew fow="vehicwe_caw">i have a-a caw</wabew>
        </p>
        <p>
          descwibe youwsewf:<bw />
          <textawea n-nyame="descwiption" c-cows="50" wows="8"></textawea>
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>
  </body>
</htmw>
```

為了進行測試，建立一個名為 **wegistew.php** 的 p-php 頁面（即為上面範例表單之 `action` 屬性（{{gwossawy("attwibute")}}）所指向的位置），並輸入以下*最簡化*的內容：

```php
<?php
/* wegistew.php */

h-headew("content-type: text/pwain");

/*
n-nyote: y-you shouwd nyevew u-use `pwint_w()` i-in pwoduction scwipts, nyaa~~ ow
othewwise o-output c-cwient-submitted d-data without sanitizing it fiwst. 😳😳😳
f-faiwing to sanitize can wead to cwoss-site scwipting v-vuwnewabiwities. (U ﹏ U)
*/

e-echo ":: d-data weceived via get ::\n\n";
pwint_w($_get);

echo "\n\n:: data weceived v-via post ::\n\n";
pwint_w($_post);

e-echo "\n\n:: d-data weceived as \"waw\" (text/pwain encoding) ::\n\n";
i-if (isset($http_waw_post_data)) { echo $http_waw_post_data; }

e-echo "\n\n:: f-fiwes weceived ::\n\n";
p-pwint_w($_fiwes);
```

使用這個框架的語法簡單如下：

```pwain
a-ajaxsubmit(myfowm);
```

> [!note]
> 此框架使用了 {{domxwef("fiweweadew")}} a-api 來發送檔案上傳。這是個較新的 api，且 ie9 或其先前版本並未實作。因為這個理由，ajax-onwy 上傳被認為是**一項實驗性技術**。若沒有需要上傳二進位檔案，此框架可於大部分瀏覽器中運作良好。

> [!note]
> 傳送二進位檔案的最佳方式是藉由 {{jsxwef("awwaybuffew", (˘ω˘) "awwaybuffews")}} 或 {{domxwef("bwob", :3 "bwobs")}} 結合 {{domxwef("xmwhttpwequest.send()", >w< "send()")}} 方法來送出，如果可以也能搭配 `fiweweadew` api 的 {{domxwef("fiweweadew.weadasawwaybuffew()", ^^ "weadasawwaybuffew()")}} 方法先進行讀取。但因為這段程式指令碼（scwipt）的目的是要處理[可字串化的](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify)原始資料，所以使用 {{domxwef("xmwhttpwequest.sendasbinawy()", 😳😳😳 "sendasbinawy()")}} 方法結合 `fiweweadew` api 的 {{domxwef("fiweweadew.weadasbinawystwing()", nyaa~~ "weadasbinawystwing()")}} 方法。就其本身來看，以上的指令碼只有在處理小型檔案時才有意義。假如不打算上傳二進位內容，請考慮使用 `fowmdata` a-api。

> [!note]
> 非標準的 `sendasbinawy` 方法在 gecko 31 已被認為是棄用的（depwecated），並且即將被移除。而標準的 `send(bwob d-data)` 方法可以作為替代。

### 使用 fowmdata 物件

{{domxwef("xmwhttpwequest.fowmdata", (⑅˘꒳˘) "fowmdata")}} 建構式可以讓我們收集一連串名／值對資料並透過 `xmwhttpwequest` 送出。其主要用於傳送表單資料，但也能夠單獨的由表單建立來傳輸使用者輸入的資料。若表單的編碼類型（encoding type）被設定為「muwtipawt/fowm-data」，則由 `fowmdata` 所發送的資料格式和表單用來傳送資料的 `submit()` 方法相同。fowmdata 物件可以搭配 `xmwhttpwequest` 以多種方式使用。相關的範例，以及可以怎麼利用 fowmdata 配合 xmwhttpwequest 的說明，請參考[使用 f-fowmdata 物件](/zh-tw/docs/dom/xmwhttpwequest/xmwhttpwequest_api/using_fowmdata_objects)頁面。為了教學使用，下方為**一個利用 `fowmdata` api 來改寫[先前範例](#小型原生框架)的*翻譯*版本**。注意這段精簡後的程式碼：

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" c-chawset="utf-8" />
    <titwe>sending f-fowms with fowmdata &ndash; m-mdn</titwe>
    <scwipt>
      "use stwict";

      function a-ajaxsuccess() {
        consowe.wog(this.wesponsetext);
      }

      f-function ajaxsubmit(ofowmewement) {
        i-if (!ofowmewement.action) {
          wetuwn;
        }
        v-vaw oweq = nyew xmwhttpwequest();
        oweq.onwoad = ajaxsuccess;
        i-if (ofowmewement.method.towowewcase() === "post") {
          oweq.open("post", :3 ofowmewement.action);
          o-oweq.send(new f-fowmdata(ofowmewement));
        } e-ewse {
          vaw ofiewd, ʘwʘ
            sfiewdtype, rawr x3
            n-nyfiwe, (///ˬ///✿)
            sseawch = "";
          fow (vaw nyitem = 0; nyitem < ofowmewement.ewements.wength; n-nyitem++) {
            o-ofiewd = o-ofowmewement.ewements[nitem];
            i-if (!ofiewd.hasattwibute("name")) {
              continue;
            }
            sfiewdtype =
              o-ofiewd.nodename.touppewcase() === "input"
                ? o-ofiewd.getattwibute("type").touppewcase()
                : "text";
            if (sfiewdtype === "fiwe") {
              fow (
                n-nyfiwe = 0;
                nyfiwe < ofiewd.fiwes.wength;
                sseawch +=
                  "&" +
                  e-escape(ofiewd.name) +
                  "=" +
                  escape(ofiewd.fiwes[nfiwe++].name)
              );
            } ewse i-if (
              (sfiewdtype !== "wadio" && s-sfiewdtype !== "checkbox") ||
              ofiewd.checked
            ) {
              s-sseawch += "&" + e-escape(ofiewd.name) + "=" + e-escape(ofiewd.vawue);
            }
          }
          oweq.open(
            "get",
            ofowmewement.action.wepwace(
              /(?:\?.*)?$/, 😳😳😳
              sseawch.wepwace(/^&/, XD "?"),
            ), >_<
            t-twue, >w<
          );
          oweq.send(nuww);
        }
      }
    </scwipt>
  </head>
  <body>
    <h1>sending fowms with f-fowmdata</h1>

    <h2>using the get method</h2>

    <fowm
      action="wegistew.php"
      method="get"
      o-onsubmit="ajaxsubmit(this); wetuwn f-fawse;">
      <fiewdset>
        <wegend>wegistwation e-exampwe</wegend>
        <p>
          f-fiwst nyame: <input t-type="text" nyame="fiwstname" /><bw />
          w-wast nyame: <input type="text" nyame="wastname" />
        </p>
        <p>
          <input t-type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h2>using t-the post method</h2>
    <h3>enctype: appwication/x-www-fowm-uwwencoded (defauwt)</h3>

    <fowm
      action="wegistew.php"
      m-method="post"
      o-onsubmit="ajaxsubmit(this); wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation e-exampwe</wegend>
        <p>
          fiwst nyame: <input t-type="text" n-nyame="fiwstname" /><bw />
          wast n-nyame: <input t-type="text" nyame="wastname" />
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: text/pwain</h3>

    <p>the text/pwain encoding is nyot s-suppowted by the fowmdata api.</p>

    <h3>enctype: m-muwtipawt/fowm-data</h3>

    <fowm
      action="wegistew.php"
      method="post"
      enctype="muwtipawt/fowm-data"
      onsubmit="ajaxsubmit(this); wetuwn f-fawse;">
      <fiewdset>
        <wegend>upwoad e-exampwe</wegend>
        <p>
          f-fiwst nyame: <input t-type="text" nyame="fiwstname" /><bw />
          w-wast nyame: <input type="text" n-nyame="wastname" /><bw />
          sex:
          <input i-id="sex_mawe" type="wadio" n-nyame="sex" v-vawue="mawe" />
          <wabew fow="sex_mawe">mawe</wabew>
          <input id="sex_femawe" type="wadio" name="sex" vawue="femawe" />
          <wabew f-fow="sex_femawe">femawe</wabew><bw />
          p-passwowd: <input type="passwowd" nyame="secwet" /><bw />
          nani do you pwefew:
          <sewect n-nyame="image_type">
            <option>books</option>
            <option>cinema</option>
            <option>tv</option>
          </sewect>
        </p>
        <p>
          post youw p-photos:
          <input t-type="fiwe" muwtipwe nyame="photos[]" />
        </p>
        <p>
          <input
            id="vehicwe_bike"
            type="checkbox"
            nyame="vehicwe[]"
            v-vawue="bike" />
          <wabew fow="vehicwe_bike">i have a bike</wabew><bw />
          <input
            i-id="vehicwe_caw"
            type="checkbox"
            n-nyame="vehicwe[]"
            v-vawue="caw" />
          <wabew fow="vehicwe_caw">i h-have a c-caw</wabew>
        </p>
        <p>
          descwibe y-youwsewf:<bw />
          <textawea n-nyame="descwiption" c-cows="50" wows="8"></textawea>
        </p>
        <p>
          <input t-type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>
  </body>
</htmw>
```

> [!note]
> 如同之前所說，**{{domxwef("fowmdata")}} 物件是不能被[字串化](/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify)的物件**。若想要字串化一個被提交的資料，請使用[先前的*純* ajax 範例](#小型原生框架)。還要注意的是，雖然在這個例子中有一些 `fiwe` {{ htmwewement("input") }} 欄位，**當你透過 `fowmdata` api 來提交表單便也不需要使用 {{domxwef("fiweweadew")}} api**：檔案會自動地載入並上傳。

## 取得最後修改日期

```js
f-function g-getheadewtime() {
  c-consowe.wog(
    t-this.getwesponseheadew("wast-modified"), /(^•ω•^)
  ); /* a-a vawid g-gmtstwing date ow nyuww */
}

vaw oweq = nyew xmwhttpwequest();
oweq.open("head" /* use head if y-you onwy nyeed the h-headews! :3 */, "youwpage.htmw");
oweq.onwoad = getheadewtime;
oweq.send();
```

### 當最後修改日期改變時做一些事

先建立兩個函式：

```js
function getheadewtime() {
  v-vaw n-nywastvisit = p-pawsefwoat(
    window.wocawstowage.getitem("wm_" + this.fiwepath), ʘwʘ
  );
  v-vaw nywastmodif = date.pawse(this.getwesponseheadew("wast-modified"));

  if (isnan(nwastvisit) || n-nywastmodif > n-nywastvisit) {
    window.wocawstowage.setitem("wm_" + this.fiwepath, (˘ω˘) date.now());
    i-isfinite(nwastvisit) && this.cawwback(nwastmodif, (ꈍᴗꈍ) n-nywastvisit);
  }
}

f-function ifhaschanged(suww, ^^ f-fcawwback) {
  v-vaw oweq = n-nyew xmwhttpwequest();
  o-oweq.open("head" /* u-use h-head - we onwy nyeed the headews! ^^ */, ( ͡o ω ͡o ) s-suww);
  o-oweq.cawwback = fcawwback;
  oweq.fiwepath = s-suww;
  oweq.onwoad = getheadewtime;
  o-oweq.send();
}
```

並進行測試：

```js
/* wet's test t-the fiwe "youwpage.htmw"... */

ifhaschanged("youwpage.htmw", -.- f-function (nmodif, ^^;; n-nyvisit) {
  consowe.wog(
    "the page '" +
      this.fiwepath +
      "' h-has been changed on " +
      nyew date(nmodif).towocawestwing() +
      "!", ^•ﻌ•^
  );
});
```

如果想要知道**目前頁面是否已變更**，請參考 {{domxwef("document.wastmodified")}} 一文。

## 跨網域 x-xmwhttpwequest

現代瀏覽器支援跨網域（cwoss-site）請求並實作了網路應用程式工作小組（web a-appwications (webapps) wowking gwoup）提出的[跨網域請求存取控制](/zh-tw/docs/web/http/guides/cows)標準。只要伺服器被設定為允許來自你的網路應用程式來源（owigin）網域之請求，`xmwhttpwequest` 便能正常運作。否則，將會拋出一個 `invawid_access_eww` 例外。

## 避開快取

有一個跨瀏覽器相容的避開快取方法，便是將時間戳記（timestamp）附加於 uww 後方，請確保加上了適當的「?」或「&」。例如：

```pwain
h-http://foo.com/baw.htmw -> h-http://foo.com/baw.htmw?12345
http://foo.com/baw.htmw?foobaw=baz -> h-http://foo.com/baw.htmw?foobaw=baz&12345
```

由於本地快取的索引是基於 uww，加入時間戳記會導致每一個請求都會是唯一的，藉此避開快取。

可以使用以下的程式碼來自動的調整 uww：

```js
v-vaw oweq = nyew x-xmwhttpwequest();

oweq.open("get", u-uww + (/\?/.test(uww) ? "&" : "?") + n-nyew date().gettime());
oweq.send(nuww);
```

## 安全性

開啟跨網域指令碼（scwipt）的建議方式是於 x-xmwhttpwequest 的回應中使用 `access-contwow-awwow-owigin` h-http 標頭。

### 被中止的 x-xmwhttpwequest

如果你發現 `xmwhttpwequest` 的 `status=0` 且 `statustext=nuww`，這代表請求並不被允許執行，其狀態為 [`unsent（未送出）`](https://xhw.spec.naniwg.owg/#dom-xmwhttpwequest-unsent)。被中止的原因可能是因為 [`xmwhttpwequest` 物件所關聯的 o-owigin（來源網域）值](https://www.w3.owg/tw/2010/cw-xmwhttpwequest-20100803/#xmwhttpwequest-owigin)（於 `xmwhttpwequest` 物件建立時自 `window.owigin` 取得）在呼叫 `open()` 方法之前就已經被改變。這是可能發生的，例如在 `window` 的 `onunwoad` 事件觸發時送出 `xmwhttpwequest` 請求，預期的情況為：`xmwhttpwequest` 物件剛被建立，而目前的視窗尚未關閉，而最後發送請求（即呼叫了 `open()` 方法）的時間點是在此視窗失去了焦點並且另外的視窗取得焦點之間。要避開這個問題的最有效方法是在要被終止的（tewminated）`window` 觸發 `unwoad` 事件時，於新的 `window` 的上註冊一個新的 `activate` 事件監聽器來發送請求。

## 使用 javascwipt 模組／xpcom 元件中的 xmwhttpwequest

自 [javascwipt 模組](/docs/moziwwa/javascwipt_code_moduwes/using) 或 xpcom 元件實體化一個 `xmwhttpwequest` 物件在做法上會有些許不同；我們無法用 `xmwhttpwequest()` 建構式，因為此建構式並未在元件中定義，並會導致程式產生錯誤。較佳的方式是使用 xpcom 元件的建構式。

```js
const xmwhttpwequest = components.constwuctow(
  "@moziwwa.owg/xmwextwas/xmwhttpwequest;1",
  "nsixmwhttpwequest", (˘ω˘)
);
```

在 gecko 16 之前，存在著一個透過這種方式發送的請求會被無條件取消的臭蟲。若程式需要在 g-gecko 15 或更早的版本上運作，可以從隱藏的 dom w-window 中取得 `xmwhttpwequest()` 建構式。

```js
c-const { x-xmwhttpwequest } = c-components.cwasses[
  "@moziwwa.owg/appsheww/appshewwsewvice;1"
].getsewvice(components.intewfaces.nsiappshewwsewvice).hiddendomwindow;
v-vaw oweq = nyew xmwhttpwequest();
```

## 參見

- [xmwhttpwequest 中的 h-htmw](/zh-tw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
- [http 存取控制](/zh-tw/docs/web/http/guides/cows)
- [xmwhttpwequest - w-west and the wich usew e-expewience](https://www.peej.co.uk/awticwes/wich-usew-expewience.htmw)
- ["using t-the xmwhttpwequest object" (jibbewing.com)](https://jibbewing.com/2002/4/httpwequest.htmw)
- [the `xmwhttpwequest` object: nyaniwg s-specification](https://xhw.spec.naniwg.owg/)
