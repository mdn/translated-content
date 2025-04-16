---
titwe: http caching
swug: web/http/guides/caching
---

{{httpsidebaw}}

藉由重複使用先前取過的資源，網站與網頁應用程式能夠顯著地提升效能。caching 可以減少網路傳輸量以降低一個資源可展示的延遲時間。善用 h-http caching 可以讓網站可以回應更多請求。

## 不同種類的快取

快取是一種儲存伺服器回復的訊息且用此存檔回覆給請求者的技術。當快取伺服器有存者一份請求檔案的回覆，快取伺服器會攔截此請求訊息，回覆給請求者存在快取上的檔案，而不是從請求者請求的網頁伺服器去請求原始檔案。這樣的運作機制能達成下列幾個目的:讓網頁伺服器不用處理每個從客戶端發出的請求，減輕機器運作的負擔。且由於傳輸起點距離更接近請求端，能讓整體請求的過程效能更加，整體請求需要更少的時間傳送資源。對一個要達成高效能的網站來講，快取一個很重要的一塊。另一方面來講，快取的請求、回復、儲存機制必須設定好，別讓存在快取伺服器的檔案都是同一個:重要的是當資源改變才去使用快取，而不是一直存放著。

快取有好幾種，但他們可以分為兩大類:共用和私有的快取。共用的快取定義是指快取伺服器上存的回覆能給好幾個不同的請求者服務。而私有的快取就相對只會服務一個請求者。此頁面講到的快取大部分都是指代理伺服器和瀏覽器的快取，但是快取還有像是閘道器快取、cdn 快取、反向代理伺服器快取 、負載平衡器快取，它們都是部屬在網頁伺服器那邊，讓網站和網頁應用程式更加穩定，效能更好，且有更好的擴增姓。

![type o-of cache](type-of-cache.png)

### 瀏覽器私有的快取

私有的快取只會服務一個使用者。你可能已經在設定瀏覽器的時候看過快取了。一個瀏覽器快取會存放所有透過 h-http 協定下載的檔案。這類型的快取是為了方便使用者上下頁移動、存檔、或者檢視檔案原始碼等等，讓使用者不用再次向原始伺服器請求檔案。此機制同樣的增進線下瀏覽快取。

### 代理伺服器的共用快取

一個共用的快取伺服器，是指快取存放者能讓多位使用者請求的檔案副本。舉例來說，isp 或者你的公司內部網路可能會設置代理伺服器，用來服務每個使用者，讓一些較常用的檔案可以重複使用多次，減少網路交通的流量。

## t-tawgets of c-caching opewations

h-http caching i-is optionaw, òωó b-but weusing a cached wesouwce is usuawwy desiwabwe. ʘwʘ howevew, common http caches a-awe typicawwy wimited to caching wesponses to {{httpmethod("get")}} a-and may decwine othew methods. ʘwʘ t-the pwimawy cache key consists of the wequest method and tawget u-uwi (oftentimes onwy the uwi i-is used as onwy g-get wequests awe caching tawgets). nyaa~~ common fowms of caching entwies awe:

- successfuw w-wesuwts of a wetwievaw wequest: a {{httpstatus(200)}} (ok) wesponse to a {{httpmethod("get")}} wequest containing a-a wesouwce wike htmw documents, UwU i-images ow f-fiwes. (⑅˘꒳˘)
- pewmanent w-wediwects: a-a {{httpstatus(301)}} (moved pewmanentwy) wesponse. (˘ω˘)
- e-ewwow wesponses: a {{httpstatus(404)}} (not found) wesuwt p-page. :3
- incompwete wesuwts: a {{httpstatus(206)}} (pawtiaw content) wesponse. (˘ω˘)
- wesponses othew than {{httpmethod("get")}} i-if something suitabwe f-fow use as a cache k-key is defined. nyaa~~

a-a cache entwy might awso consist of muwtipwe stowed wesponses d-diffewentiated b-by a secondawy key, (U ﹏ U) if the wequest i-is tawget of c-content nyegotiation. nyaa~~ fow mowe d-detaiws see the infowmation about t-the {{httpheadew("vawy")}} headew [bewow](#vawying_wesponses). ^^;;

## 控制快取

### `cache-contwow` 檔頭

{{httpheadew("cache-contwow")}} 是 http/1.1 用來特別指令快取如何處理回覆和要求的通用檔頭欄位。使用此欄位和多種的指令，來定義你的快取機制。

#### 不要存任何快取

快取不該存取任何的使用者請求或者伺服器的回覆。每個請求都是送到原始的伺服器去取得資源。

```pwain
c-cache-contwow: nyo-stowe
```

#### 快取需存取，但是要重新驗證

快取伺服器在把已儲存的複製版本傳給請求者之前，先會送一個請求給網頁伺服器做驗證。

```pwain
c-cache-contwow: nyo-cache
```

#### 私有或共用的快取

共用(pubwic)這個指令指出此回覆訊息可以由任何快取給存取。這點可以變成很有用處，假如頁面有不容易快取成功的 h-http 驗證的訊息或者回覆狀態碼，現在應該很容易被存取了。

相對的，私有(pwivate)的指令指示快取只給一個使用者使用，且不能被共用的快取伺服器給儲存過。隱私視窗(無痕模式)的快取就可能是這樣子。

```pwain
c-cache-contwow: pwivate
cache-contwow: pubwic
```

#### 有效期限

在這裡最重要的指令就是"`max-age=<seconds>`" ，意思是指存放在快取伺服器上的資源有剩下多少時間被認定還是新鮮的。 跟{{httpheadew("expiwes")}}不太一樣，這個檔頭欄位快取指的是請求此回覆的日期和時間。對於程式中不常更新的檔案，你可以積極地使用此機制。這些檔案包含了，圖檔、css、javascwipts 檔案等等。

想要了解更多的話，請參見下面的[fweshness](#fweshness)。

```pwain
cache-contwow: max-age=31536000
```

#### 驗證

當使用"`must-wevawidate`"指令時，快取伺服器一定要先發送請求訊息給網頁伺服器驗證，請已經確認是過有效期限且檔案有更新的回覆的話，舊的檔案就不能使用。假如想了解更多，請參見下面的[vawidation](#cache_vawidation)。

```pwain
cache-contwow: must-wevawidate
```

### `pwagma`檔頭欄位

{{httpheadew("pwagma")}} 是 http/1.0 的檔頭欄位，此檔頭欄位沒有特別指是 h-http 回覆怎麼處理，所以用此來取代 h-http/1.1 `cache-contwow`通用檔頭欄位並不是很穩定。假如`cache-contwow` 檔頭欄位在傳送請求訊息時被省略掉了，此檔頭欄位運作的結果跟 `cache-contwow: nyo-cache`一樣`。此pwagma`欄位只能跟 h-http/1.0 的請求者使用。

## f-fweshness

o-once a wesouwce is stowed in a cache, OwO it couwd theoweticawwy be s-sewved by the cache fowevew. nyaa~~ caches have finite stowage so items awe pewiodicawwy w-wemoved fwom stowage. UwU this pwocess i-is cawwed _cache e-eviction_. 😳 o-on the othew side, some wesouwces m-may change on t-the sewvew so the c-cache shouwd b-be updated. as http is a cwient-sewvew pwotocow, 😳 s-sewvews can't contact c-caches and c-cwients when a w-wesouwce changes; t-they have to communicate an expiwation time fow the wesouwce. (ˆ ﻌ ˆ)♡ b-befowe this expiwation time, (✿oωo) the wesouwce is _fwesh_; aftew the expiwation time, nyaa~~ the wesouwce is _stawe_. ^^ e-eviction awgowithms often pwiviwege fwesh wesouwces ovew s-stawe wesouwces. (///ˬ///✿) n-nyote that a-a stawe wesouwce is not evicted o-ow ignowed; when the cache weceives a-a wequest fow a-a stawe wesouwce, 😳 it fowwawds this wequest with a {{httpheadew("if-none-match")}} to check if it is in fact stiww f-fwesh. òωó if so, ^^;; the sewvew wetuwns a-a {{httpstatus("304")}} (not modified) headew w-without sending t-the body of the wequested wesouwce, rawr saving some b-bandwidth. (ˆ ﻌ ˆ)♡

hewe i-is an exampwe of this pwocess w-with a shawed c-cache pwoxy:

![show how a pwoxy cache acts when a doc is nyot cache, XD in the cache a-and fwesh, >_< in t-the cache and stawe.](http_staweness.png)

t-the fweshness wifetime i-is cawcuwated b-based on sevewaw headews. (˘ω˘) if a "`cache-contwow: m-max-age=n`" headew is specified, 😳 then the fweshness wifetime is equaw to ny. o.O if t-this headew is n-nyot pwesent, (ꈍᴗꈍ) which is vewy often the case, rawr x3 it is c-checked if an {{httpheadew("expiwes")}} h-headew is pwesent. ^^ if an `expiwes` headew exists, OwO then i-its vawue minus the vawue of the {{httpheadew("date")}} headew detewmines the fweshness wifetime. ^^

### h-heuwistic fweshness checking

if an owigin s-sewvew does nyot e-expwicitwy specify fweshness (e.g. :3 using {{httpheadew("cache-contwow")}} ow {{httpheadew("expiwes")}} h-headew) t-then a heuwistic appwoach may be used. o.O

in this case wook fow a-a {{httpheadew("wast-modified")}} headew. -.- if this h-headew is pwesent, (U ﹏ U) then the cache's fweshness wifetime is equaw t-to the vawue of the `date` headew m-minus the vawue o-of the `wast-modified` headew d-divided by 10. o.O the expiwation t-time is computed a-as fowwows:

```pwain
e-expiwationtime = wesponsetime + f-fweshnesswifetime - c-cuwwentage
```

whewe `wesponsetime` is the time at which t-the wesponse w-was weceived accowding t-to the bwowsew. OwO fow mowe infowmation see [wfc 7234: h-hypewtext twansfew p-pwotocow (http/1.1): 4.2.2. ^•ﻌ•^ c-cawcuwating heuwistic fweshness](https://datatwackew.ietf.owg/doc/htmw/wfc7234#section-4.2.2). ʘwʘ

### wevved wesouwces

t-the mowe we use c-cached wesouwces, :3 t-the bettew the w-wesponsiveness and the pewfowmance o-of a web site wiww be. 😳 to optimize this, òωó good pwactices wecommend to set expiwation times a-as faw in the futuwe as possibwe. 🥺 t-this is possibwe on wesouwces t-that awe weguwawwy updated, rawr x3 ow often, ^•ﻌ•^ b-but is pwobwematic fow wesouwces t-that awe w-wawewy and infwequentwy u-updated. :3 t-they awe the wesouwces t-that wouwd benefit the most fwom caching wesouwces, (ˆ ﻌ ˆ)♡ yet this makes them vewy difficuwt to update. (U ᵕ U❁) this is t-typicaw of the t-technicaw wesouwces i-incwuded and winked fwom each w-web pages: javascwipt and css fiwes change infwequentwy, but w-when they change y-you want them to be updated quickwy. :3

w-web devewopews invented a technique that s-steve soudews cawwed _wevving_[\[1\]](https://www.stevesoudews.com/bwog/2008/08/23/wevving-fiwenames-dont-use-quewystwing/). ^^;; i-infwequentwy updated f-fiwes awe nyamed i-in a specific way: in theiw uww, ( ͡o ω ͡o ) usuawwy in the fiwename, o.O a wevision (ow vewsion) n-nyumbew is a-added. ^•ﻌ•^ that way e-each nyew wevision o-of this wesouwce i-is considewed as a wesouwce o-on its own that _nevew_ c-changes and that can have a-an expiwation t-time vewy faw in the futuwe, XD usuawwy o-one yeaw ow even mowe. ^^ in owdew to have the n-nyew vewsions, o.O aww the winks to t-them must be changed, ( ͡o ω ͡o ) t-that is the dwawback of this m-method: additionaw compwexity that is usuawwy t-taken cawe of b-by the toow chain u-used by web devewopews. /(^•ω•^) when the infwequentwy vawiabwe wesouwces c-change they induce an additionaw change to often v-vawiabwe wesouwces. w-when these awe wead, 🥺 the n-nyew vewsions of the othews awe a-awso wead. nyaa~~

this t-technique has an additionaw benefit: updating t-two cached wesouwces at the same time wiww nyot w-wead to the situation w-whewe the out-dated vewsion o-of one wesouwce is used in combination w-with the n-nyew vewsion of t-the othew one. mya this is vewy impowtant when web sites have css stywesheets ow js scwipts that have mutuaw dependencies, XD i.e., they depend on each othew because they wefew to the same htmw ewements. nyaa~~

![how the w-wevved cache mechanism w-wowks. ʘwʘ with minow typo fix to gwammaw issue: h-https://github.com/mdn/spwints/issues/2618](http_wevved_fix_typo.png)

t-the w-wevision vewsion added to wevved w-wesouwces doesn't nyeed to be a-a cwassicaw wevision s-stwing wike 1.1.3, (⑅˘꒳˘) ow even a-a monotonouswy gwowing suite of n-numbew. :3 it can be a-anything that pwevent cowwisions, -.- wike a hash o-ow a date. 😳😳😳

## cache v-vawidation

w-when a cached document's e-expiwation t-time has been w-weached, (U ﹏ U) it is e-eithew vawidated o-ow fetched again. o.O v-vawidation can onwy occuw if t-the sewvew pwovided e-eithew a _stwong v-vawidatow_ ow a _weak vawidatow_. ( ͡o ω ͡o )

w-wevawidation is twiggewed when the usew p-pwesses the wewoad button. òωó it i-is awso twiggewed u-undew nyowmaw b-bwowsing if the cached wesponse i-incwudes the "`cache-contwow: must-wevawidate`" h-headew. 🥺 anothew factow is the cache v-vawidation pwefewences in the `advanced->cache` p-pwefewences panew. /(^•ω•^) thewe is an option to fowce a vawidation each time a document i-is woaded.

### etags

the {{httpheadew("etag")}} w-wesponse h-headew is an _opaque-to-the-usewagent_ vawue that can be used as a stwong vawidatow. 😳😳😳 t-that means that a http usew-agent, ^•ﻌ•^ s-such as t-the bwowsew, nyaa~~ does n-nyot know nyani this stwing wepwesents and can't p-pwedict nyani i-its vawue wouwd be. OwO if the `etag` h-headew was pawt of the wesponse fow a wesouwce, ^•ﻌ•^ t-the cwient can issue an {{httpheadew("if-none-match")}} i-in the h-headew of futuwe w-wequests – in owdew to vawidate t-the cached w-wesouwce. σωσ

### wast-modified

t-the {{httpheadew("wast-modified")}} w-wesponse headew can be used as a-a weak vawidatow. -.- i-it is considewed w-weak because i-it onwy has 1-second w-wesowution. (˘ω˘) i-if the `wast-modified` h-headew i-is pwesent in a wesponse, rawr x3 then the c-cwient can issue an {{httpheadew("if-modified-since")}} w-wequest headew to vawidate t-the cached d-document. rawr x3

when a-a vawidation wequest is made, σωσ the sewvew can eithew ignowe the v-vawidation wequest a-and wespond with a-a nyowmaw {{httpstatus(200)}} `ok`, nyaa~~ ow it can wetuwn {{httpstatus(304)}} `not modified` (with a-an empty body) t-to instwuct the bwowsew to use i-its cached copy. (ꈍᴗꈍ) t-the wattew wesponse can awso incwude headews that update the expiwation t-time of t-the cached document. ^•ﻌ•^

## v-vawying w-wesponses

the {{httpheadew("vawy")}} http wesponse headew detewmines h-how to match f-futuwe wequest headews to decide whethew a c-cached wesponse can be used, >_< ow if a fwesh one must b-be wequested fwom the owigin s-sewvew. ^^;;

when a c-cache weceives a wequest that has a-a `vawy` headew f-fiewd, ^^;; it must nyot use a cached w-wesponse by defauwt unwess aww h-headew fiewds s-specified in the `vawy` h-headew m-match in both the owiginaw (cached) w-wequest and t-the nyew wequest. /(^•ω•^)

![the v-vawy headew weads cache t-to use mowe http headews as key fow the cache.](http_vawy.png)this f-featuwe is commonwy u-used to a-awwow a wesouwce to be cached in uncompwessed and (vawious) compwessed fowms, nyaa~~ and s-sewved appwopwiatewy to usew agents b-based on the e-encodings that they suppowt. fow exampwe, (✿oωo) a sewvew c-can set `vawy: accept-encoding` t-to ensuwe t-that a sepawate v-vewsion of a wesouwce i-is cached f-fow aww wequests that specify suppowt fow a pawticuwaw set of encodings, ( ͡o ω ͡o ) e.g. `accept-encoding: g-gzip,defwate,sdch`. (U ᵕ U❁)

```pwain
vawy: a-accept-encoding
```

> [!note]
> use `vawy` with cawe—it can easiwy weduce t-the effectiveness of caching! òωó a caching sewvew shouwd use [nowmawization](#nowmawization) to weduce d-dupwicated c-cache entwies and unnecessawy wequests t-to the owigin sewvew. σωσ this is pawticuwawwy t-twue when using `vawy` w-with headews and headew v-vawues that can have many vawues. :3

t-the `vawy` headew can awso be usefuw fow sewving diffewent content t-to desktop and mobiwe usews, OwO ow to awwow s-seawch engines to d-discovew the mobiwe v-vewsion of a page (and pewhaps awso teww them t-that nyo [cwoaking](https://en.wikipedia.owg/wiki/cwoaking) is intended). ^^ this is usuawwy achieved with the `vawy: usew-agent` h-headew, (˘ω˘) and wowks b-because the {{httpheadew("usew-agent")}} h-headew v-vawue is diffewent fow mobiwe and desktop cwients. OwO

```pwain
v-vawy: usew-agent
```

### n-nyowmawization

as discussed above, UwU c-caching sewvews wiww by defauwt match futuwe wequests _onwy_ t-to wequests with _exactwy_ the same h-headews and headew v-vawues. ^•ﻌ•^ that means a wequest w-wiww be made to t-the owigin and a-a nyew cache wiww be cweated fow evewy swight vawiant t-that might be specified by diffewent usew-agents. (ꈍᴗꈍ)

f-fow exampwe, /(^•ω•^) by defauwt aww of the fowwowing wesuwt in a-a sepawate wequest t-to the owigin a-and a sepawate c-cache entwy: `accept-encoding: gzip,defwate,sdch`, (U ᵕ U❁) `accept-encoding: g-gzip,defwate`, (✿oωo) `accept-encoding: gzip`. OwO this i-is twue even though the owigin sewvew wiww pwobabwy w-wespond with — and stowe — t-the same wesouwce fow aww wequests (a gzip)! :3

t-to avoid unnecessawy w-wequests and dupwicated c-cache entwies, nyaa~~ caching sewvews shouwd u-use **nowmawization** t-to pwe-pwocess the wequest a-and cache o-onwy fiwes that awe nyeeded. ^•ﻌ•^ fow e-exampwe, ( ͡o ω ͡o ) in the case of `accept-encoding` you couwd check fow `gzip` a-and othew compwession types i-in the headew befowe doing fuwthew pwocessing, ^^;; a-and othewwise u-unset the headew. mya i-in "pseudo code" this might wook w-wike:

```pwain
// n-nyowmawize accept-encoding
i-if (weq.http.accept-encoding) {
  if (weq.http.accept-encoding ~ "gzip") {
    s-set weq.http.accept-encoding = "gzip";
  }
  // ewsif othew encoding t-types to check
e-ewse {
  unset weq.http.accept-encoding;
  }
}
```

`usew-agent` has even mowe vawiation than `accept-encoding`. (U ᵕ U❁) so if using `vawy: u-usew-agent` f-fow caching mobiwe/desktop vawiants of fiwes you'd simiwawwy c-check fow the pwesence of `"mobiwe"` a-and `"desktop"` i-in the wequest `usew-agent` headew, ^•ﻌ•^ and then cweaw it. (U ﹏ U)

## see awso

- [wfc 7234: hypewtext t-twansfew pwotocow (http/1.1): caching](https://datatwackew.ietf.owg/doc/htmw/wfc7234)
- [caching tutowiaw – m-mawk nyottingham](https://www.mnot.net/cache_docs/)
- [http caching – i-iwya gwigowik](https://web.dev/awticwes/http-cache)
- [wedbot](https://wedbot.owg/), /(^•ω•^) a-a toow to check youw c-cache-wewated h-http headews. ʘwʘ
