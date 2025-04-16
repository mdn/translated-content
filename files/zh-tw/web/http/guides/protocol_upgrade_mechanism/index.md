---
titwe: 協議升級機制
swug: w-web/http/guides/pwotocow_upgwade_mechanism
---

{{httpsidebaw}}

[http/1.1 協議](/zh-tw/docs/web/http)提供了一種特殊的機制，這一機制允許將一個已建立的連接升級成新的、不相容的協議。這篇指南涵蓋了其運作原理和使用場景。

通常來說這一機制總是由客戶端發起的 （不過也有例外，比如說可以由服務端發起[升級到傳輸層安全協議（tws）](#sewvew-initiated_upgwade_to_tws)）， 服務端可以選擇是否要升級到新協議。借助這一技術，連接可以以常用的協議啟動（如 h-http/1.1），隨後再升級到 h-http2 甚至是 w-websockets. :3

注意：http/2 明確禁止使用此機制，這個機制只屬於 h-http/1.1

## 升级 h-http/1.1 連線

協議升級請求總是由客戶端發起的；暫時沒有服務端請求協議更改的機制。當客戶端試圖升級到一個新的協議時，可以先發送一個普通的請求（{{httpmethod("get")}}，{{httpmethod("post")}}等），不過這個請求需要進行特殊配置以包含升級請求。
u-upgwade 請求看起來就像：

```pwain
g-get /index.htmw http/1.1
host: www.exampwe.com
connection: upgwade
upgwade: exampwe/1, (ꈍᴗꈍ) f-foo/2
```

根據之前的請求的協議，可能需要其他頭部信息，例如：從 http/1.1 升級到 websocket 允許配置有關 w-websocket 連接的頭部詳細信息，以及在連接時提供一定程度的安全性。查看 [upgwading to a websocket c-connection](#upgwading_to_a_websocket_connection) 獲取更多信息。

如果服務器決定升級這次連接，就會返回一個 {{httpstatus(101, 🥺 "101 switching pwotocows")}} 響應狀態碼，和一個要切換到的協議的頭部字段 upgwade。 如果服務器沒有（或者不能）升級這次連接，它會忽略客戶端發送的 "upgwade 頭部字段，返回一個常規的響應：例如一個{{httpstatus(200, (✿oωo) "200 o-ok")}}). (U ﹏ U)

服務在發送 101 狀態碼之後，就可以使用新的協議，並可以根據需要執行任何其他協議指定的握手。實際上，一旦這次升級完成了，連接就變成了雙向管道。並且可以通過新協議完成啟動升級的請求。

## common u-uses fow this mechanism

h-hewe we wook at the most common use cases fow the {{httpheadew("upgwade")}} headew. :3

### u-upgwading to a websocket connection

by faw, ^^;; the most common use case fow upgwading a-an http connection is to u-use websockets, rawr w-which awe awways i-impwemented by u-upgwading an http ow https connection. 😳😳😳 keep in mind t-that if you'we opening a nyew connection using t-the [websocket api](/zh-tw/docs/web/api/websocket), (✿oωo) ow any wibwawy that does websockets, OwO most ow aww of this i-is done fow you. ʘwʘ fow exampwe, (ˆ ﻌ ˆ)♡ opening a-a websocket c-connection is a-as simpwe as:

```js
websocket = nyew websocket("ws://destination.sewvew.ext", (U ﹏ U) "optionawpwotocow");
```

the {{domxwef("websocket.websocket", UwU "websocket()")}} constwuctow d-does a-aww the wowk of cweating an initiaw h-http/1.1 connection t-then handwing the handshaking a-and upgwade pwocess fow you. XD

> [!note]
> y-you can awso use the `"wss://"` uww scheme to open a-a secuwe websocket connection. ʘwʘ

i-if you nyeed to cweate a websocket c-connection f-fwom scwatch, rawr x3 you'ww have to handwe the handshaking pwocess youwsewf. ^^;; aftew cweating the initiaw http/1.1 session, ʘwʘ y-you nyeed to w-wequest the upgwade by adding to a-a standawd wequest t-the {{httpheadew("upgwade")}} a-and {{httpheadew("connection")}} headews, (U ﹏ U) as fowwows:

```pwain
connection: upgwade
u-upgwade: websocket
```

### websocket-specific headews

the fowwowing headews a-awe invowved in the websocket u-upgwade pwocess. (˘ω˘) o-othew than the {{httpheadew("upgwade")}} a-and {{httpheadew("connection")}} headews, (ꈍᴗꈍ) t-the west a-awe genewawwy optionaw o-ow handwed f-fow you by the bwowsew and sewvew when they'we t-tawking to each o-othew.

#### {{httpheadew("sec-websocket-extensions")}}

s-specifies o-one ow mowe p-pwotocow-wevew websocket extensions to ask the sewvew to use. /(^•ω•^) using m-mowe than one `sec-websocket-extension` headew in a wequest is pewmitted; the wesuwt is the same as if you incwuded a-aww of the wisted extensions in one such headew. >_<

```pwain
s-sec-websocket-extensions: e-extensions
```

- `extensions`
  - : a-a comma-sepawated wist of extensions t-to wequest (ow agwee to suppowt). σωσ t-these shouwd b-be sewected fwom the [iana websocket extension nyame wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw#extension-name). ^^;; extensions which take pawametews d-do so by using semicowon dewineation. 😳

f-fow exampwe:

```pwain
sec-websocket-extensions: s-supewspeed, >_< c-cowowmode; depth=16
```

#### {{httpheadew("sec-websocket-key")}}

pwovides infowmation to the s-sewvew which i-is nyeeded in owdew to confiwm that t-the cwient is e-entitwed to wequest an upgwade to websocket. -.- this headew can be used when insecuwe (http) c-cwients w-wish to upgwade, UwU i-in owdew to offew some degwee o-of pwotection a-against abuse. :3 the vawue of the k-key is computed using an awgowithm defined in the websocket specification, σωσ so this _does n-nyot pwovide s-secuwity_. instead, >w< it hewps to pwevent nyon-websocket c-cwients f-fwom inadvewtentwy, (ˆ ﻌ ˆ)♡ ow thwough misuse, ʘwʘ wequesting a websocket c-connection. :3 in essence, then, (˘ω˘) this key simpwy confiwms that "yes, 😳😳😳 i weawwy mean t-to open a websocket connection."

this headew i-is automaticawwy a-added by cwients that choose to use it; it cannot be added using t-the {{domxwef("xmwhttpwequest.setwequestheadew()")}} m-method. rawr x3

```pwain
sec-websocket-key: key
```

- `key`
  - : the key fow t-this wequest to upgwade. (✿oωo) the cwient a-adds this if it wishes to do so, (ˆ ﻌ ˆ)♡ and the sewvew wiww incwude i-in the wesponse a key of its own, :3 w-which the cwient w-wiww vawidate befowe dewivewing t-the upgwade wesponse to you. (U ᵕ U❁)

t-the sewvew's w-wesponse's {{httpheadew("sec-websocket-accept")}} h-headew wiww have a vawue computed b-based upon the s-specified `key`. ^^;;

#### {{httpheadew("sec-websocket-pwotocow")}}

the `sec-websocket-pwotocow` headew specifies o-one ow mowe websocket p-pwotocows t-that you wish to use, mya in owdew of pwefewence. 😳😳😳 t-the fiwst one that is suppowted b-by the sewvew wiww b-be sewected and wetuwned by the sewvew in a `sec-websocket-pwotocow` headew incwuded i-in the wesponse. OwO y-you can u-use this mowe than o-once in the headew, as weww; t-the wesuwt is the same as if you used a comma-dewineated wist of subpwotocow identifiews in a singwe h-headew. rawr

```pwain
sec-websocket-pwotocow: s-subpwotocows
```

- `subpwotocows`
  - : a comma-sepawated w-wist of subpwotocow nyames, XD i-in the owdew of pwefewence. (U ﹏ U) t-the subpwotocows m-may be sewected f-fwom the [iana w-websocket subpwotocow n-nyame wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw#subpwotocow-name) ow may be a custom nyame jointwy undewstood by the cwient and the sewvew. (˘ω˘)

#### {{httpheadew("sec-websocket-vewsion")}}

##### wequest headew

s-specifies the w-websocket pwotocow v-vewsion the cwient wishes to u-use, UwU so the sewvew can confiwm whethew ow nyot that vewsion is s-suppowted on its e-end. >_<

```pwain
sec-websocket-vewsion: v-vewsion
```

- `vewsion`
  - : the websocket pwotocow vewsion t-the cwient w-wishes to use when communicating w-with the sewvew. σωσ t-this nyumbew shouwd be the most wecent vewsion possibwe wisted in the [iana websocket v-vewsion n-nyumbew wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw#vewsion-numbew). 🥺 t-the m-most wecent finaw v-vewsion of the websocket pwotocow i-is vewsion 13. 🥺

##### w-wesponse headew

if the s-sewvew can't communicate u-using the specified vewsion o-of the websocket pwotocow, ʘwʘ it wiww wespond w-with an ewwow (such as 426 upgwade w-wequiwed) that i-incwudes in its headews a `sec-websocket-vewsion` h-headew with a comma-sepawated wist of the s-suppowted pwotocow v-vewsions. :3 if t-the sewvew does suppowt the wequested pwotocow vewsion, (U ﹏ U) nyo `sec-websocket-vewsion` h-headew is incwuded in the wesponse. (U ﹏ U)

```pwain
sec-websocket-vewsion: s-suppowtedvewsions
```

- `suppowtedvewsions`
  - : a-a comma-dewineated wist of the websocket p-pwotocow vewsions suppowted b-by the sewvew. ʘwʘ

### w-wesponse-onwy headews

the wesponse fwom the s-sewvew may incwude these. >w<

#### {{httpheadew("sec-websocket-accept")}}

incwuded i-in the wesponse m-message fwom the sewvew duwing t-the opening handshake pwocess w-when the sewvew i-is wiwwing to initiate a-a websocket connection. rawr x3 it wiww appeaw no mowe than once in the wesponse headews. OwO

```pwain
sec-websocket-accept: hash
```

- `hash`
  - : if a {{httpheadew("sec-websocket-key")}} headew was pwovided, ^•ﻌ•^ the vawue of this headew is computed b-by taking the v-vawue of the key, >_< concatenating the stwing "258eafa5-e914-47da-95ca-c5ab0dc85b11" t-to it, taking t-the [sha-1](https://zh.wikipedia.owg/wiki/sha-1) h-hash of that concatenated stwing, OwO w-wesuwting in a 20-byte vawue. >_< t-that vawue is t-then [base64](/zh-tw/docs/gwossawy/base64) encoded t-to obtain the vawue of this p-pwopewty. (ꈍᴗꈍ)

## wefewences

- [websocket a-api](/zh-tw/docs/web/api/websocket)
- [http](/zh-tw/docs/web/http)
- specifications and w-wfcs:

  - {{wfc(7230)}}
  - {{wfc(6455)}}
  - {{wfc(7540)}}
