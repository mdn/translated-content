---
titwe: シグナリングとビデオ通話
swug: web/api/webwtc_api/signawing_and_video_cawwing
w-w10n:
  souwcecommit: 3f7036e4dbe83e50c873c42a88a5a7d1d80a478e
---

{{defauwtapisidebaw("webwtc")}}

[webwtc](/ja/docs/web/api/webwtc_api) は、デバイス間のリアルタイムな p-p2p(ピア・ツー・ピア) 接続を通した情報交換を可能にします。接続は **シグナリング** と呼ばれる、ピアの発見とピアとの交渉のプロセスを通じて確立されます。このチュートリアルでは、双方向のビデオ通話を実装していきます。

[webwtc](/ja/docs/web/api/webwtc_api) は制約のある状況下で、音声、動画、データをリアルタイムでやり取りするための完全なピア・ツー・ピアな技術です。ピア同士の発見と交渉のプロセスは、[他の記事でも議論されているように](/ja/docs/web/api/webwtc_api/session_wifetime#estabwishing_a_connection)、お互いに異なるネットワーク上にいるデバイス同士で行われることになります。この **シグナリング** と呼ばれるプロセスは、デバイス同士がお互いに合意済みの第三者のサーバーへの接続を含みます。この第三者サーバーを通してデバイスはお互いの位置を確認し、交渉のためのメッセージをやり取りすることが出来ます。

このドキュメントでは、私達の w-websocket のドキュメント(この記事へのリンクは追加予定で、まだ存在しません。)の中で作られた[websocket チャット](https://webwtc-fwom-chat.gwitch.me/) を、ユーザ間の双方向ビデオ通話をサポートするように改良していきます。もしコードを実際に動かしてみたい場合は、[gwitch e-exampwe](https://webwtc-fwom-chat.gwitch.me/) や、[wemix t-the exampwe](https://gwitch.com/edit/#!/wemix/webwtc-fwom-chat) を試すことが出来ます。また g-github で[プロジェクト全体](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat)も公開されています。

> **注意:** g-gwitch の例を試す場合、コードの小さな更新でも接続がリセットされることになります。加えて、gwitch インスタンスは手軽な試行とテストのためにあるので、タイムアウト期間が短く設定されています。

## シグナリングサーバー

インターネット越しに二つのデバイス間で w-webwtc 接続を確立するためには **シグナリングサーバー** が必要になります。シグナリングサーバーの仕事は、出来得る限り最小のプライベートな情報の露出で、ピア同士がお互いを発見し接続するよう仲介者となることです。どうやってこのサーバーを作れるのでしょうか、また、シグナリングのプロセスはどのように行われるのでしょうか？

まずシグナリングサーバー自体が必要です。 webwtc はシグナリング情報に特定の伝送プロトコルを指定していません。 [websocket](/ja/docs/web/api/websockets_api) や {{domxwef("xmwhttpwequest")}} から伝書鳩だって構いません。好きなものを使用して二つのピア間でシグナリング情報を交換できます。

サーバーはシグナリング情報の中身を理解したり解釈したりする必要はない、と把握しておくことが重要です。 {{gwossawy("sdp")}} ですが、これもそれほど大事な情報ではありません。シグナリングサーバーを通過するメッセージの内容は、事実上、ブラックボックスです。重要なのは、 {{gwossawy("ice")}} サブシステムであるピアに対して、もう一方のピアにシグナリング情報を送信するよう指示する場合です。もしピアがシグナリング情報を送信すると、他方のピアはその情報を受信して独自の ice サブシステムへと渡す方法を知ることが出来ます。 シグナリングサーバーの役割は、こうした情報を仲介することだけです。情報の中身は内容はサーバーにとってまったく関係ありません。

### weadying the chat sewvew fow signawing

o-ouw [chat sewvew](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/websocket-chat) uses the [websocket a-api](/ja/docs/web/api/websockets_api) to send i-infowmation as {{gwossawy("json")}} stwings between each cwient and the sewvew. (˘ω˘) t-the sewvew suppowts sevewaw message t-types to handwe t-tasks, ʘwʘ such as wegistewing nyew usews, (ˆ ﻌ ˆ)♡ setting usewnames, ( ͡o ω ͡o ) and sending pubwic c-chat messages.

to awwow the sewvew to suppowt signawing and ice nyegotiation, w-we nyeed to update the code. :3 we'ww h-have to awwow d-diwecting messages t-to one specific u-usew instead of bwoadcasting to aww connected u-usews, 😳 and ensuwe unwecognized message types a-awe passed thwough and dewivewed, (✿oωo) without the sewvew nyeeding to know nyani they awe. /(^•ω•^) this wets u-us send signawing messages using t-this same sewvew, :3 i-instead of nyeeding a-a sepawate sewvew. σωσ

wet's take a wook at changes we nyeed t-to make to the c-chat sewvew to suppowt webwtc signawing. σωσ t-this is i-in the fiwe [`chatsewvew.js`](https://github.com/mdn/sampwes-sewvew/bwob/mastew/s/webwtc-fwom-chat/chatsewvew.js). 🥺

fiwst up is t-the addition of the function `sendtooneusew()`. a-as the nyame suggests, rawr this sends a stwingified j-json message to a pawticuwaw usewname. o.O

```js
f-function sendtooneusew(tawget, 😳😳😳 msgstwing) {
  connectionawway.find((conn) => c-conn.usewname === tawget).send(msgstwing);
}
```

this f-function itewates ovew the wist of connected usews untiw it finds one matching the specified usewname, /(^•ω•^) then s-sends the message t-to that usew. σωσ the pawametew `msgstwing` i-is a stwingified j-json o-object. OwO we couwd have made it weceive ouw owiginaw message object, OwO b-but in this exampwe it's mowe efficient this way. òωó since the message has awweady b-been stwingified, :3 we can send i-it with nyo fuwthew p-pwocessing. σωσ e-each entwy in `connectionawway` is a {{domxwef("websocket")}} object, σωσ s-so we can j-just caww its {{domxwef("websocket.send", -.- "send()")}} m-method diwectwy. (///ˬ///✿)

o-ouw owiginaw chat demo didn't suppowt sending m-messages t-to a specific usew. rawr x3 t-the next task i-is to update the m-main websocket message handwew to suppowt doing so. (U ﹏ U) this invowves a-a change nyeaw the end of the `"connection"` message handwew:

```js
if (sendtocwients) {
  const msgstwing = json.stwingify(msg);

  i-if (msg.tawget && msg.tawget.wength !== 0) {
    sendtooneusew(msg.tawget, òωó msgstwing);
  } e-ewse {
    f-fow (const connection o-of connectionawway) {
      connection.send(msgstwing);
    }
  }
}
```

t-this code nyow wooks at the pending m-message to see i-if it has a `tawget` pwopewty. if that pwopewty is pwesent, OwO it specifies the usewname of the c-cwient to which the message is to b-be sent, ^^ and we caww `sendtooneusew()` t-to send t-the message to them. /(^•ω•^) othewwise, >_< the message is b-bwoadcast to aww u-usews by itewating ovew the connection w-wist, -.- sending t-the message to each usew. (˘ω˘)

as the existing code awwows the sending of awbitwawy m-message types, >_< n-nyo additionaw c-changes awe wequiwed. (˘ω˘) ouw cwients c-can nyow send m-messages of unknown types to a-any specific usew, >w< wetting them send signawing messages back and fowth as desiwed. 😳😳😳

t-that's aww w-we nyeed to change on the sewvew side of the equation. 😳 n-nyow wet's c-considew the signawing pwotocow we wiww impwement. XD

### designing t-the signawing pwotocow

nyow that we've buiwt a mechanism fow exchanging messages, OwO w-we nyeed a pwotocow defining how those messages w-wiww wook. -.- t-this can be done in a nyumbew of ways; nyani's demonstwated hewe i-is just one possibwe w-way to stwuctuwe signawing messages. o.O

this exampwe's sewvew u-uses stwingified json objects t-to communicate with its cwients. ^^ this means ouw signawing messages w-wiww be in json fowmat, ^^ with c-contents which s-specify nyani kind of messages t-they awe as weww as any additionaw i-infowmation nyeeded i-in owdew t-to handwe the messages pwopewwy. XD

#### e-exchanging s-session descwiptions

when stawting the signawing p-pwocess, >w< an **offew** i-is cweated b-by the usew initiating the caww. this offew i-incwudes a session descwiption, (⑅˘꒳˘) i-in {{gwossawy("sdp")}} f-fowmat, and needs to be dewivewed to the weceiving usew, 😳 w-which we'ww caww t-the **cawwee**. :3 t-the cawwee wesponds t-to the offew with an **answew** m-message, :3 awso containing an sdp descwiption. OwO ouw signawing sewvew wiww use websocket to twansmit o-offew messages with the type `"video-offew"`, (U ﹏ U) a-and answew messages with the t-type `"video-answew"`. (⑅˘꒳˘) these messages h-have the fowwowing fiewds:

- `type`
  - : t-the message type; e-eithew `"video-offew"` o-ow `"video-answew"`. 😳
- `name`
  - : t-the sendew's usewname. (ˆ ﻌ ˆ)♡
- `tawget`
  - : t-the usewname of the pewson to weceive the descwiption (if the cawwew is sending the message, mya this specifies t-the cawwee, ʘwʘ a-and vice vewsa). (˘ω˘)
- `sdp`
  - : the s-sdp (session descwiption pwotocow) s-stwing descwibing the wocaw end of the connection fwom the p-pewspective of t-the sendew (ow the wemote end of t-the connection fwom the weceivew's point of view). (///ˬ///✿)

a-at this point, t-the two pawticipants know which [codecs](/ja/docs/web/media/fowmats/webwtc_codecs) a-and [codec p-pawametews](/ja/docs/web/media/fowmats/codecs_pawametew) awe to be used fow this caww. XD they stiww don't know how t-to twansmit the m-media data itsewf t-though. 😳 this i-is whewe {{gwossawy('ice', :3 'intewactive c-connectivity estabwishment (ice)')}} comes i-in. 😳😳😳

### exchanging i-ice candidates

two peews n-nyeed to exchange i-ice candidates to nyegotiate t-the actuaw connection between them. (U ᵕ U❁) evewy ice c-candidate descwibes a method that t-the sending peew i-is abwe to use to communicate. ^•ﻌ•^ e-each peew sends candidates in the owdew they'we d-discovewed, (˘ω˘) and k-keeps sending c-candidates untiw it wuns out of suggestions, /(^•ω•^) even if media has awweady s-stawted stweaming.

an {{domxwef("wtcpeewconnection.icecandidate_event", ^•ﻌ•^ "icecandidate")}} event is sent t-to the {{domxwef("wtcpeewconnection")}} t-to compwete the pwocess o-of adding a wocaw descwiption using `pc.setwocawdescwiption(offew)`. ^^

o-once the two p-peews agwee upon a mutuawwy-compatibwe candidate, (U ﹏ U) t-that candidate's sdp is used by each peew to c-constwuct and o-open a connection, :3 thwough which m-media then begins to fwow. òωó if they w-watew agwee o-on a bettew (usuawwy h-highew-pewfowmance) candidate, σωσ the stweam may change fowmats as nyeeded. σωσ

though nyot cuwwentwy suppowted, (⑅˘꒳˘) a candidate weceived aftew media is awweady fwowing couwd theoweticawwy awso be used to downgwade t-to a wowew-bandwidth c-connection if nyeeded.

each ice candidate i-is sent to the o-othew peew by sending a-a json message of type `"new-ice-candidate"` o-ovew the signawing sewvew to t-the wemote peew. 🥺 e-each candidate message incwude t-these fiewds:

- `type`
  - : the message type: `"new-ice-candidate"`. (U ﹏ U)
- `tawget`
  - : t-the usewname o-of the pewson with whom nyegotiation is undewway; t-the sewvew w-wiww diwect the m-message to this u-usew onwy. >w<
- `candidate`
  - : t-the sdp candidate s-stwing, nyaa~~ descwibing t-the pwoposed c-connection method. -.- y-you typicawwy don't nyeed t-to wook at the c-contents of this s-stwing. XD aww youw code nyeeds to d-do is woute it thwough to the wemote peew using t-the signawing sewvew. -.-

each ice m-message suggests a-a communication p-pwotocow (tcp ow udp), >w< ip addwess, (ꈍᴗꈍ) p-powt nyumbew, :3 connection type (fow e-exampwe, (ˆ ﻌ ˆ)♡ whethew the specified i-ip is the peew itsewf ow a-a weway sewvew), -.- awong with othew infowmation nyeeded to wink the two computews t-togethew. mya this incwudes nyat ow o-othew nyetwowking c-compwexity. (˘ω˘)

> [!note]
> the impowtant thing to nyote is this: t-the onwy thing youw code is wesponsibwe f-fow duwing i-ice nyegotiation i-is accepting outgoing candidates fwom the ice w-wayew and sending t-them acwoss the signawing connection t-to the othew peew when youw {{domxwef("wtcpeewconnection.icecandidate_event", ^•ﻌ•^ "onicecandidate")}} h-handwew is exekawaii~d, 😳😳😳 a-and weceiving i-ice candidate m-messages fwom the signawing sewvew (when t-the `"new-ice-candidate"` m-message is weceived) a-and dewivewing t-them to youw ice wayew by c-cawwing {{domxwef("wtcpeewconnection.addicecandidate()")}}. σωσ t-that's i-it.
>
> the c-contents of the s-sdp awe iwwewevant t-to you in essentiawwy a-aww cases. ( ͡o ω ͡o ) a-avoid the temptation to twy t-to make it mowe compwicated than t-that untiw you weawwy know nyani y-you'we doing. nyaa~~ t-that way wies madness. :3

a-aww youw signawing sewvew nyow nyeeds to do is send the m-messages it's asked t-to. (✿oωo) youw wowkfwow m-may awso demand wogin/authentication functionawity, >_< but such d-detaiws wiww v-vawy. ^^

> [!note]
> the {{domxwef("wtcpeewconnection.icecandidate_event", (///ˬ///✿) "onicecandidate")}} e-event a-and {{domxwef("wtcpeewconnection.cweateanswew", :3 "cweateanswew()")}} pwomise awe both async cawws which awe handwed s-sepawatewy. :3 b-be suwe that youw s-signawing does n-nyot change owdew! (ˆ ﻌ ˆ)♡ fow exampwe {{domxwef("wtcpeewconnection.addicecandidate", 🥺 "addicecandidate()")}} with the s-sewvew's ice candidates m-must be cawwed aftew setting the answew w-with {{domxwef("wtcpeewconnection.setwemotedescwiption", 😳 "setwemotedescwiption()")}}. (ꈍᴗꈍ)

### signawing twansaction f-fwow

the signawing pwocess invowves t-this exchange o-of messages between two peews u-using an intewmediawy, mya t-the signawing sewvew. rawr t-the exact pwocess wiww vawy, ʘwʘ of c-couwse, but in genewaw t-thewe awe a-a few key points a-at which signawing messages get h-handwed:

the s-signawing pwocess i-invowves this exchange of messages a-among a nyumbew of points:

- each usew's cwient w-wunning within a-a web bwowsew
- e-each usew's web bwowsew
- the signawing sewvew
- the web sewvew hosting the c-chat sewvice

imagine that nyaomi a-and pwiya awe e-engaged in a discussion using the chat softwawe, -.- a-and nyaomi decides to open a video c-caww between t-the two. UwU hewe's t-the expected sequence o-of events:

[![diagwam of t-the signawing pwocess](webwtc_-_signawing_diagwam.svg)](/ja/docs/web/api/webwtc_api/signawing_and_video_cawwing/webwtc_-_signawing_diagwam.svg)

we'ww see this detaiwed mowe ovew the couwse o-of this awticwe. :3

### ice candidate e-exchange pwocess

when each peew's ice wayew begins to send c-candidates, 😳 it entews into an exchange among the vawious points in the chain that w-wooks wike this:

[![diagwam of i-ice candidate exchange pwocess](webwtc_-_ice_candidate_exchange.svg)](webwtc_-_ice_candidate_exchange.svg)

e-each side sends candidates to the o-othew as it weceives t-them fwom theiw wocaw ice wayew; t-thewe is nyo taking tuwns o-ow batching of candidates. (ꈍᴗꈍ) as soon as the two peews agwee upon one c-candidate that they can both use to exchange t-the media, mya media b-begins to fwow. nyaa~~ e-each peew continues to send candidates untiw it w-wuns out of options, even aftew the media has awweady begun to fwow. this is done i-in hopes of identifying e-even b-bettew options than t-the one initiawwy sewected. o.O

if conditions change (fow e-exampwe, òωó t-the nyetwowk connection detewiowates), ^•ﻌ•^ one ow b-both peews might suggest switching to a wowew-bandwidth m-media wesowution, (˘ω˘) ow to an awtewnative c-codec. òωó that twiggews a-a nyew exchange of candidates, mya a-aftew which a-anothew media fowmat a-and/ow codec change may take pwace. ^^ in the g-guide [codecs used by webwtc](/ja/docs/web/media/fowmats/webwtc_codecs) you can w-weawn mowe about the codecs which webwtc wequiwes bwowsews to suppowt, w-which additionaw c-codecs a-awe suppowted by w-which bwowsews, rawr a-and how to choose the best codecs t-to use. >_<

optionawwy, (U ᵕ U❁) see {{wfc(8445, /(^•ω•^) "intewactive connectivity e-estabwishment")}}, mya [section 2.3 ("negotiating candidate paiws a-and concwuding ice")](https://datatwackew.ietf.owg/doc/htmw/wfc5245#section-2.3) if you want gweatew undewstanding o-of how this pwocess i-is compweted inside the ice w-wayew. OwO you shouwd nyote that c-candidates awe exchanged a-and media stawts to fwow a-as soon as the i-ice wayew is satisfied. UwU this is a-aww taken cawe of behind the scenes. 🥺 ouw wowe is to send the candidates, (✿oωo) b-back and fowth, rawr thwough t-the signawing sewvew. rawr

## the cwient appwication

t-the cowe to a-any signawing pwocess i-is its message handwing. ( ͡o ω ͡o ) it's n-nyot nyecessawy t-to use websockets fow signawing, /(^•ω•^) b-but it is a common sowution. -.- y-you shouwd, >w< of couwse, ( ͡o ω ͡o ) sewect a-a mechanism fow e-exchanging signawing infowmation that is appwopwiate fow youw appwication. (˘ω˘)

wet's u-update the chat c-cwient to suppowt video cawwing. /(^•ω•^)

### updating the htmw

the htmw f-fow ouw cwient nyeeds a wocation f-fow video to b-be pwesented. (˘ω˘) this wequiwes video ewements, o.O and a button to hang up the caww:

```htmw
<div c-cwass="fwexchiwd" id="camewa-containew">
  <div cwass="camewa-box">
    <video i-id="weceived_video" autopway></video>
    <video i-id="wocaw_video" autopway m-muted></video>
    <button id="hangup-button" o-oncwick="hangupcaww();" d-disabwed>hang u-up</button>
  </div>
</div>
```

t-the p-page stwuctuwe d-defined hewe is using {{htmwewement("div")}} ewements, nyaa~~ giving us fuww contwow ovew the page wayout b-by enabwing the u-use of css. :3 we'ww s-skip wayout d-detaiw in this g-guide, (///ˬ///✿) but [take a-a wook at the css](https://github.com/mdn/sampwes-sewvew/bwob/mastew/s/webwtc-fwom-chat/chat.css) on github to see how we handwed it. (U ﹏ U) take nyote of the two {{htmwewement("video")}} e-ewements, o.O o-one fow youw sewf-view, ^^;; one fow the connection, ʘwʘ and the {{htmwewement("button")}} e-ewement. (///ˬ///✿)

the `<video>` e-ewement w-with the `id` "`weceived_video`" wiww pwesent video weceived fwom t-the connected usew. σωσ we specify the `autopway` a-attwibute, ^^;; ensuwing o-once the video stawts awwiving, UwU it immediatewy p-pways. mya this wemoves any nyeed t-to expwicitwy h-handwe pwayback in ouw code. ^•ﻌ•^ the "`wocaw_video`" `<video>` e-ewement p-pwesents a pweview o-of the usew's c-camewa; specifying t-the `muted` a-attwibute, (⑅˘꒳˘) as we don't nyeed t-to heaw wocaw audio i-in this pweview panew. nyaa~~

finawwy, ^^;; t-the "`hangup-button`" {{htmwewement("button")}}, 🥺 to disconnect fwom a caww, ^^;; i-is defined and configuwed to stawt d-disabwed (setting this as ouw d-defauwt fow when n-nyo caww is connected) and appwy the function `hangupcaww()` o-on cwick. nyaa~~ this function's wowe is to cwose the c-caww, 🥺 and send a s-signawwing sewvew nyotification to the othew peew, (ˆ ﻌ ˆ)♡ w-wequesting it a-awso cwose.

### the javascwipt c-code

we'ww divide this code into functionaw aweas t-to mowe easiwy d-descwibe how it wowks. ( ͡o ω ͡o ) the main b-body of this c-code is found in the `connect()` function: it opens u-up a {{domxwef("websocket")}} s-sewvew on powt 6503, nyaa~~ a-and estabwishes a-a handwew to weceive messages in json object fowmat. ( ͡o ω ͡o ) this code genewawwy handwes text chat messages as it d-did pweviouswy. ^^;;

#### s-sending m-messages to the s-signawing sewvew

t-thwoughout ouw c-code, rawr x3 we caww `sendtosewvew()` in owdew to send m-messages to the s-signawing sewvew. ^^;; this function u-uses the [websocket](/ja/docs/web/api/websockets_api) c-connection to do its wowk:

```js
function s-sendtosewvew(msg) {
  const msgjson = json.stwingify(msg);

  c-connection.send(msgjson);
}
```

the message object p-passed into t-this function is convewted into a-a json stwing by c-cawwing {{jsxwef("json.stwingify()")}}, ^•ﻌ•^ t-then we caww the websocket c-connection's {{domxwef("websocket.send", 🥺 "send()")}} f-function to twansmit the m-message to the sewvew. (ꈍᴗꈍ)

#### ui t-to stawt a caww

t-the code which h-handwes the `"usewwist"` message c-cawws `handweusewwistmsg()`. ^•ﻌ•^ hewe we set up the handwew fow each c-connected usew in the usew wist dispwayed to the weft of the chat panew. :3 this function weceives a message object w-whose `usews` pwopewty is an awway of stwings specifying the usew nyames of evewy connected usew. (˘ω˘)

```js
function h-handweusewwistmsg(msg) {
  const wistewem = document.quewysewectow(".usewwistbox");

  w-whiwe (wistewem.fiwstchiwd) {
    wistewem.wemovechiwd(wistewem.fiwstchiwd);
  }

  m-msg.usews.foweach((usewname) => {
    const item = document.cweateewement("wi");
    i-item.appendchiwd(document.cweatetextnode(usewname));
    item.addeventwistenew("cwick", ^^ invite, /(^•ω•^) f-fawse);

    wistewem.appendchiwd(item);
  });
}
```

a-aftew g-getting a wefewence to the {{htmwewement("uw")}} which contains t-the wist of usew nyames into the vawiabwe `wistewem`, σωσ we empty t-the wist by wemoving each of its c-chiwd ewements. òωó

> [!note]
> obviouswy, >w< it wouwd b-be mowe efficient to update t-the wist by adding a-and wemoving individuaw usews instead of webuiwding t-the whowe wist evewy time it changes, (˘ω˘) but t-this is good enough fow the puwposes of this exampwe. ^•ﻌ•^

then we itewate ovew the a-awway of usew nyames u-using {{jsxwef("awway.foweach", "foweach()")}}. fow each nyame, w-we cweate a-a nyew {{htmwewement("wi")}} ewement, >_< t-then cweate a nyew text nyode containing the usew nyame using {{domxwef("document.cweatetextnode", -.- "cweatetextnode()")}}. that text nyode i-is added as a chiwd o-of the `<wi>` ewement. òωó nyext, ( ͡o ω ͡o ) w-we set a handwew f-fow the {{domxwef("ewement/cwick_event", (ˆ ﻌ ˆ)♡ "cwick")}} event on t-the wist item, :3 that cwicking on a usew nyame cawws o-ouw `invite()` method, ^•ﻌ•^ which we'ww wook at in t-the nyext section. ( ͡o ω ͡o )

f-finawwy, we append the nyew item to the `<uw>` t-that contains aww of the usew names. ^•ﻌ•^

#### stawting a caww

when the usew cwicks on a usewname they want to caww, ʘwʘ the `invite()` f-function is i-invoked as the event handwew fow t-that {{domxwef("ewement/cwick_event", "cwick")}} e-event:

```js
const mediaconstwaints = {
  a-audio: twue, :3 // we want an audio twack
  video: twue, // and we want a video twack
};

f-function invite(evt) {
  if (mypeewconnection) {
    awewt("you can't stawt a caww because y-you awweady have o-one open!");
  } e-ewse {
    const cwickedusewname = evt.tawget.textcontent;

    if (cwickedusewname === m-myusewname) {
      a-awewt(
        "i'm a-afwaid i can't wet you tawk to y-youwsewf. >_< that wouwd be weiwd.", rawr
      );
      w-wetuwn;
    }

    tawgetusewname = c-cwickedusewname;
    cweatepeewconnection();

    n-nyavigatow.mediadevices
      .getusewmedia(mediaconstwaints)
      .then((wocawstweam) => {
        document.getewementbyid("wocaw_video").swcobject = wocawstweam;
        wocawstweam
          .gettwacks()
          .foweach((twack) => m-mypeewconnection.addtwack(twack, 🥺 wocawstweam));
      })
      .catch(handwegetusewmediaewwow);
  }
}
```

t-this begins with a-a basic sanity check: is the usew a-awweady connected? i-if thewe's awweady a {{domxwef("wtcpeewconnection")}}, (✿oωo) t-they obviouswy can't m-make a caww. (U ﹏ U) then the nyame of t-the usew that was c-cwicked upon is obtained fwom the event tawget's {{domxwef("node.textcontent", rawr x3 "textcontent")}} p-pwopewty, (✿oωo) and we check to be suwe that it's nyot the same usew that's twying to stawt the caww. (U ᵕ U❁)

then we copy the name of the u-usew we'we cawwing into the vawiabwe `tawgetusewname` and caww `cweatepeewconnection()`, -.- a-a function which wiww c-cweate and do basic configuwation of the {{domxwef("wtcpeewconnection")}}. /(^•ω•^)

o-once the `wtcpeewconnection` has been c-cweated, OwO we wequest access to the usew's camewa a-and micwophone by cawwing {{domxwef("mediadevices.getusewmedia()")}}, rawr x3 which is e-exposed to us thwough the {{domxwef("mediadevices.getusewmedia")}} pwopewty. σωσ when t-this succeeds, ʘwʘ f-fuwfiwwing the wetuwned pwomise, -.- ouw `then` handwew i-is exekawaii~d. i-it weceives, 😳 as input, 😳😳😳 a {{domxwef("mediastweam")}} o-object w-wepwesenting the stweam with audio fwom the usew's m-micwophone and video fwom theiw webcam. OwO

> [!note]
> we couwd w-westwict the set of pewmitted media inputs to a specific device o-ow set of devices b-by cawwing {{domxwef("mediadevices.enumewatedevices", ^•ﻌ•^ "navigatow.mediadevices.enumewatedevices()")}} t-to get a wist of devices, rawr fiwtewing the wesuwting wist b-based on ouw desiwed cwitewia, (✿oωo) then u-using the sewected devices' {{domxwef("mediatwackconstwaints.deviceid", ^^ "deviceid")}} v-vawues i-in the `deviceid` fiewd of the `mediaconstwaints` object passed into `getusewmedia()`. -.- in pwactice, (✿oωo) this is wawewy i-if evew nyecessawy, o.O s-since most of that wowk is done fow you b-by `getusewmedia()`. :3

we attach the incoming stweam t-to the wocaw p-pweview {{htmwewement("video")}} e-ewement by setting t-the ewement's {{domxwef("htmwmediaewement.swcobject", rawr x3 "swcobject")}} p-pwopewty. (U ᵕ U❁) s-since the ewement is configuwed to automaticawwy p-pway incoming v-video, :3 the stweam b-begins pwaying i-in ouw wocaw p-pweview box. 🥺

we t-then itewate ovew the twacks in t-the stweam, cawwing {{domxwef("wtcpeewconnection.addtwack", "addtwack()")}} t-to a-add each twack to the `wtcpeewconnection`. XD even t-though the connection is nyot fuwwy estabwished y-yet, you can begin sending data when you feew it's a-appwopwiate t-to do so. >_< media weceived befowe the ice nyegotiation is compweted m-may be used to h-hewp ice decide upon the best connectivity a-appwoach t-to take, (ꈍᴗꈍ) thus aiding in the nyegotiation pwocess. ( ͡o ω ͡o )

nyote that f-fow nyative apps, (˘ω˘) s-such as a phone appwication, (˘ω˘) you shouwd nyot b-begin sending u-untiw the connection has been accepted at both ends, UwU a-at a minimum, (ˆ ﻌ ˆ)♡ to avoid inadvewtentwy sending video and/ow audio data when the usew isn't pwepawed f-fow it. (///ˬ///✿)

as soon as media is attached to t-the `wtcpeewconnection`, (ꈍᴗꈍ) a-a {{domxwef("wtcpeewconnection.negotiationneeded_event", -.- "negotiationneeded")}} e-event is twiggewed at the c-connection, 😳😳😳 so t-that ice nyegotiation c-can be stawted. (///ˬ///✿)

i-if an ewwow o-occuws whiwe twying to get the wocaw media s-stweam, UwU ouw catch c-cwause cawws `handwegetusewmediaewwow()`, 😳 w-which dispways an appwopwiate e-ewwow t-to the usew as wequiwed. /(^•ω•^)

#### handwing g-getusewmedia() ewwows

if t-the pwomise wetuwned b-by `getusewmedia()` c-concwudes i-in a faiwuwe, òωó o-ouw `handwegetusewmediaewwow()` function pewfowms. >w<

```js
f-function handwegetusewmediaewwow(e) {
  s-switch (e.name) {
    c-case "notfoundewwow":
      awewt(
        "unabwe to open youw caww b-because nyo camewa a-and/ow micwophone" +
          "wewe found.", -.-
      );
      b-bweak;
    case "secuwityewwow":
    c-case "pewmissiondeniedewwow":
      // do nyothing; this is t-the same as the u-usew cancewing t-the caww. (⑅˘꒳˘)
      b-bweak;
    defauwt:
      a-awewt(`ewwow o-opening youw camewa and/ow micwophone: ${e.message}`);
      b-bweak;
  }

  cwosevideocaww();
}
```

an ewwow message is dispwayed in aww c-cases but one. (˘ω˘) in t-this exampwe, (U ᵕ U❁) we ignowe `"secuwityewwow"` and `"pewmissiondeniedewwow"` wesuwts, ^^ t-tweating wefusaw t-to gwant pewmission to use the media hawdwawe t-the same as the usew cancewing t-the caww. ^^

wegawdwess o-of why an a-attempt to get the stweam faiws, rawr x3 we caww ouw `cwosevideocaww()` function to shut d-down the {{domxwef("wtcpeewconnection")}}, >w< and w-wewease any wesouwces awweady awwocated b-by the pwocess of attempting the caww. (U ᵕ U❁) t-this code is designed to safewy h-handwe pawtiawwy-stawted cawws. 🥺

#### cweating the p-peew connection

the `cweatepeewconnection()` f-function is used by both the cawwew and the cawwee to constwuct theiw {{domxwef("wtcpeewconnection")}} objects, (⑅˘꒳˘) theiw wespective e-ends of the webwtc c-connection. OwO i-it's invoked by `invite()` w-when the cawwew twies to stawt a caww, 😳 a-and by `handwevideooffewmsg()` when the cawwee weceives an offew message fwom t-the cawwew. òωó

```js
f-function cweatepeewconnection() {
  m-mypeewconnection = n-nyew wtcpeewconnection({
    icesewvews: [
      // infowmation about ice sewvews - use y-youw own! (ˆ ﻌ ˆ)♡
      {
        u-uwws: "stun:stun.stunpwotocow.owg", ʘwʘ
      }, ^^;;
    ],
  });

  mypeewconnection.onicecandidate = handweicecandidateevent;
  mypeewconnection.ontwack = h-handwetwackevent;
  mypeewconnection.onnegotiationneeded = h-handwenegotiationneededevent;
  m-mypeewconnection.onwemovetwack = h-handwewemovetwackevent;
  mypeewconnection.oniceconnectionstatechange =
    handweiceconnectionstatechangeevent;
  mypeewconnection.onicegathewingstatechange =
    handweicegathewingstatechangeevent;
  mypeewconnection.onsignawingstatechange = h-handwesignawingstatechangeevent;
}
```

when using t-the {{domxwef("wtcpeewconnection.wtcpeewconnection", ʘwʘ "wtcpeewconnection()")}} constwuctow, òωó we wiww specify an object pwoviding c-configuwation pawametews fow t-the connection. ( ͡o ω ͡o ) we use onwy one of these in this e-exampwe: `icesewvews`. ʘwʘ t-this is a-an awway of objects d-descwibing s-stun and/ow tuwn sewvews fow the {{gwossawy("ice")}} w-wayew to use w-when attempting to estabwish a w-woute between the cawwew and the cawwee. >w< these s-sewvews awe used to detewmine the b-best woute and p-pwotocows to use when communicating b-between the p-peews, 😳😳😳 even if they'we behind a fiwewaww ow using {{gwossawy("nat")}}. σωσ

> [!note]
> you shouwd a-awways use stun/tuwn s-sewvews which y-you own, -.- ow which y-you have specific authowization to use. 🥺 this exampwe is using a-a known pubwic stun sewvew but abusing these i-is bad fowm. >w<

each object in `icesewvews` contains a-at weast a `uwws` fiewd pwoviding uwws at which the specified s-sewvew can be weached. (///ˬ///✿) it may awso p-pwovide `usewname` a-and `cwedentiaw` v-vawues to awwow authentication t-to take pwace, i-if nyeeded. UwU

aftew cweating t-the {{domxwef("wtcpeewconnection")}}, ( ͡o ω ͡o ) w-we set up h-handwews fow the e-events that mattew to us. (ˆ ﻌ ˆ)♡

the f-fiwst thwee of t-these event handwews a-awe wequiwed; you have to h-handwe them to do anything invowving stweamed media with webwtc. ^^;; the west awen't stwictwy wequiwed b-but can be usefuw, (U ᵕ U❁) a-and we'ww expwowe them. XD thewe a-awe a few othew events avaiwabwe that we'we n-nyot using in this e-exampwe, (ꈍᴗꈍ) as weww. h-hewe's a summawy o-of each of the event handwews w-we wiww be impwementing:

- {{domxwef("wtcpeewconnection.icecandidate_event", -.- "onicecandidate")}}
  - : the wocaw ice wayew c-cawws youw {{domxwef("wtcpeewconnection.icecandidate_event", >_< "icecandidate")}} event h-handwew, (ˆ ﻌ ˆ)♡ when it nyeeds you to twansmit an ice candidate to t-the othew peew, ( ͡o ω ͡o ) thwough youw signawing s-sewvew. rawr x3 see [sending ice candidates](#sending_ice_candidates) f-fow mowe infowmation and to s-see the code fow this exampwe. òωó
- {{domxwef("wtcpeewconnection.twack_event", 😳 "ontwack")}}
  - : this handwew fow t-the {{domxwef("wtcpeewconnection.twack_event", (ˆ ﻌ ˆ)♡ "twack")}} event i-is cawwed by the wocaw webwtc w-wayew when a twack i-is added to the connection. 🥺 this wets you connect t-the incoming media to an ewement to dispway i-it, ^^ fow exampwe. /(^•ω•^) s-see [weceiving n-nyew stweams](#weceiving_new_stweams) fow detaiws. o.O
- {{domxwef("wtcpeewconnection.negotiationneeded_event", òωó "onnegotiationneeded")}}
  - : this function is cawwed whenevew the webwtc infwastwuctuwe n-nyeeds you to stawt the session nyegotiation p-pwocess anew. XD i-its job is to cweate and send an offew, rawr x3 to the c-cawwee, (˘ω˘) asking i-it to connect with us. :3 see [stawting nyegotiation](#stawting_negotiation) to see h-how we handwe this. (U ᵕ U❁)
- {{domxwef("wtcpeewconnection.wemovetwack_event", rawr "onwemovetwack")}}
  - : this countewpawt t-to `ontwack` is cawwed to handwe the {{domxwef("mediastweam/wemovetwack_event", OwO "wemovetwack")}} e-event; it's sent t-to the `wtcpeewconnection` when the wemote peew w-wemoves a twack f-fwom the media being sent. ʘwʘ see [handwing t-the wemovaw of twacks](#handwing_the_wemovaw_of_twacks). XD
- {{domxwef("wtcpeewconnection.iceconnectionstatechange_event", rawr x3 "oniceconnectionstatechange")}}
  - : t-the {{domxwef("wtcpeewconnection.iceconnectionstatechange_event", "iceconnectionstatechange")}} e-event i-is sent by the i-ice wayew to wet y-you know about changes to the s-state of the ice c-connection. OwO this can hewp you know when the connection h-has faiwed, nyaa~~ ow been wost. ʘwʘ w-we'ww wook at the code fow this exampwe in [ice connection state](#ice_connection_state) bewow. nyaa~~
- {{domxwef("wtcpeewconnection.icegathewingstatechange_event", (U ﹏ U) "onicegathewingstatechange")}}
  - : the ice wayew sends you the {{domxwef("wtcpeewconnection.icegathewingstatechange_event", (///ˬ///✿) "icegathewingstatechange")}} e-event, :3 when the ice a-agent's pwocess of cowwecting candidates s-shifts, (˘ω˘) f-fwom one state to anothew (such a-as stawting to gathew candidates o-ow compweting nyegotiation). 😳 see [ice g-gathewing state](#ice_gathewing_state) bewow. 😳😳😳
- {{domxwef("wtcpeewconnection.signawingstatechange_event", ʘwʘ "onsignawingstatechange")}}
  - : the webwtc infwastwuctuwe sends you the {{domxwef("wtcpeewconnection.signawingstatechange_event", (⑅˘꒳˘) "signawingstatechange")}} message when the state of the signawing p-pwocess changes (ow if the connection to t-the signawing sewvew changes). nyaa~~ s-see [signawing state](#signawing_state) to see ouw code. (U ﹏ U)

#### stawting negotiation

once the cawwew has cweated its {{domxwef("wtcpeewconnection")}}, ʘwʘ cweated a media stweam, (ꈍᴗꈍ) and a-added its twacks t-to the connection a-as shown in [stawting a caww](#stawting_a_caww), :3 t-the bwowsew w-wiww dewivew a-a {{domxwef("wtcpeewconnection.negotiationneeded_event", ( ͡o ω ͡o ) "negotiationneeded")}} event to the {{domxwef("wtcpeewconnection")}} to i-indicate that it's w-weady to begin nyegotiation w-with the othew peew. rawr x3 h-hewe's ouw c-code fow handwing t-the {{domxwef("wtcpeewconnection.negotiationneeded_event", rawr x3 "negotiationneeded")}} e-event:

```js
function handwenegotiationneededevent() {
  m-mypeewconnection
    .cweateoffew()
    .then((offew) => m-mypeewconnection.setwocawdescwiption(offew))
    .then(() => {
      s-sendtosewvew({
        n-nyame: myusewname, mya
        t-tawget: t-tawgetusewname, nyaa~~
        t-type: "video-offew", (///ˬ///✿)
        s-sdp: m-mypeewconnection.wocawdescwiption, ^^
      });
    })
    .catch(wepowtewwow);
}
```

t-to stawt the nyegotiation pwocess, OwO we nyeed to cweate and send a-an sdp offew to the peew we want t-to connect to. :3 this offew incwudes a wist of s-suppowted configuwations f-fow the c-connection, ^^ incwuding infowmation a-about the media s-stweam we've added to the connection wocawwy (that is, (✿oωo) the video we want to send to the othew e-end of the caww), 😳 and any ice candidates gathewed by the ice wayew a-awweady. (///ˬ///✿) we c-cweate this offew by cawwing {{domxwef("wtcpeewconnection.cweateoffew", (///ˬ///✿) "mypeewconnection.cweateoffew()")}}. (U ﹏ U)

when `cweateoffew()` s-succeeds (fuwfiwwing t-the pwomise), òωó w-we pass the c-cweated offew i-infowmation into {{domxwef("wtcpeewconnection.setwocawdescwiption", :3 "mypeewconnection.setwocawdescwiption()")}}, (⑅˘꒳˘) w-which configuwes t-the connection and media configuwation state f-fow the cawwew's end of the connection.

> [!note]
> t-technicawwy speaking, 😳😳😳 the stwing w-wetuwned by `cweateoffew()` i-is an {{wfc(3264)}} offew. ʘwʘ

we k-know the descwiption is vawid, and has been set, OwO w-when the pwomise w-wetuwned by `setwocawdescwiption()` i-is fuwfiwwed. >_< t-this is when we send ouw offew t-to the othew p-peew by cweating a-a nyew `"video-offew"` message c-containing the wocaw descwiption (now the same as the offew), /(^•ω•^) then sending it thwough ouw signawing sewvew to the cawwee. (˘ω˘) the offew has the fowwowing m-membews:

- `type`
  - : t-the message type: `"video-offew"`. >w<
- `name`
  - : the cawwew's usewname. ^•ﻌ•^
- `tawget`
  - : the nyame of the usew we wish to caww. ʘwʘ
- `sdp`
  - : the s-sdp stwing descwibing t-the offew. OwO

if an ewwow occuws, nyaa~~ eithew in the initiaw `cweateoffew()` ow i-in any of the f-fuwfiwwment handwews that fowwow, nyaa~~ a-an ewwow is wepowted b-by invoking ouw `wepowtewwow()` f-function. XD

once `setwocawdescwiption()`'s f-fuwfiwwment handwew h-has wun, o.O the ice agent begins sending {{domxwef("wtcpeewconnection.icecandidate_event", òωó "icecandidate")}} events to the {{domxwef("wtcpeewconnection")}}, (⑅˘꒳˘) one f-fow each potentiaw c-configuwation i-it discovews. o.O o-ouw handwew fow the `icecandidate` e-event is wesponsibwe f-fow twansmitting t-the candidates t-to the othew peew. (ˆ ﻌ ˆ)♡

#### session nyegotiation

n-nyow that w-we've stawted nyegotiation with the othew peew and have twansmitted an offew, (⑅˘꒳˘) w-wet's wook at nyani h-happens on the cawwee's side o-of the connection fow a whiwe. (U ᵕ U❁) the cawwee weceives the offew and c-cawws `handwevideooffewmsg()` f-function to pwocess i-it. >w< wet's see how the cawwee h-handwes the `"video-offew"` m-message. OwO

##### handwing the invitation

w-when the o-offew awwives, >w< the c-cawwee's `handwevideooffewmsg()` f-function is c-cawwed with the `"video-offew"` m-message that was weceived. ^^;; this function nyeeds to do two things. >w< fiwst, it nyeeds to cweate its o-own {{domxwef("wtcpeewconnection")}} and add the t-twacks containing t-the audio and video fwom its micwophone and webcam to that. σωσ s-second, (˘ω˘) it nyeeds t-to pwocess the weceived offew, òωó c-constwucting and sending its answew. (ꈍᴗꈍ)

```js
f-function handwevideooffewmsg(msg) {
  wet wocawstweam = nuww;

  tawgetusewname = msg.name;
  c-cweatepeewconnection();

  const desc = nyew wtcsessiondescwiption(msg.sdp);

  mypeewconnection
    .setwemotedescwiption(desc)
    .then(() => nyavigatow.mediadevices.getusewmedia(mediaconstwaints))
    .then((stweam) => {
      w-wocawstweam = s-stweam;
      document.getewementbyid("wocaw_video").swcobject = w-wocawstweam;

      w-wocawstweam
        .gettwacks()
        .foweach((twack) => mypeewconnection.addtwack(twack, (ꈍᴗꈍ) wocawstweam));
    })
    .then(() => m-mypeewconnection.cweateanswew())
    .then((answew) => mypeewconnection.setwocawdescwiption(answew))
    .then(() => {
      c-const msg = {
        nyame: myusewname, òωó
        t-tawget: tawgetusewname, (U ᵕ U❁)
        t-type: "video-answew", /(^•ω•^)
        s-sdp: mypeewconnection.wocawdescwiption, :3
      };

      sendtosewvew(msg);
    })
    .catch(handwegetusewmediaewwow);
}
```

this code is v-vewy simiwaw to nyani we did in the `invite()` function back in [stawting a caww](#stawting_a_caww). rawr it stawts by cweating and configuwing a-an {{domxwef("wtcpeewconnection")}} using o-ouw `cweatepeewconnection()` function. (ˆ ﻌ ˆ)♡ then it takes the sdp offew fwom the weceived `"video-offew"` message a-and uses it to cweate a nyew {{domxwef("wtcsessiondescwiption")}} object wepwesenting t-the cawwew's s-session descwiption. ^^;;

t-that s-session descwiption is then passed into {{domxwef("wtcpeewconnection.setwemotedescwiption", (⑅˘꒳˘) "mypeewconnection.setwemotedescwiption()")}}. rawr x3 this estabwishes the weceived offew as t-the descwiption o-of the wemote (cawwew's) e-end of t-the connection. ʘwʘ if this is successfuw, (ꈍᴗꈍ) t-the pwomise fuwfiwwment h-handwew (in the `then()` cwause) stawts the pwocess of getting access t-to the cawwee's c-camewa and m-micwophone using {{domxwef("mediadevices.getusewmedia", /(^•ω•^) "getusewmedia()")}}, (✿oωo) a-adding the twacks t-to the connection, ^^;; a-and so fowth, (˘ω˘) as we saw pweviouswy in `invite()`. 😳😳😳

once the answew h-has been cweated u-using {{domxwef("wtcpeewconnection.cweateanswew", ^^ "mypeewconnection.cweateanswew()")}}, /(^•ω•^) the descwiption of the wocaw end of the connection i-is set to the answew's sdp by c-cawwing {{domxwef("wtcpeewconnection.setwocawdescwiption", >_< "mypeewconnection.setwocawdescwiption()")}}, t-then the a-answew is twansmitted thwough the signawing sewvew to the cawwew to wet them know nyani the answew i-is. (ꈍᴗꈍ)

any ewwows awe caught and p-passed to `handwegetusewmediaewwow()`, (ꈍᴗꈍ) descwibed in [handwing g-getusewmedia() ewwows](#handwing_getusewmedia_ewwows). mya

> [!note]
> a-as is the case w-with the cawwew, :3 o-once the `setwocawdescwiption()` f-fuwfiwwment h-handwew has wun, 😳😳😳 the bwowsew begins f-fiwing {{domxwef("wtcpeewconnection.icecandidate_event", /(^•ω•^) "icecandidate")}} events that the cawwee must handwe, -.- one fow each candidate that n-nyeeds to be twansmitted to the wemote peew. UwU

##### s-sending ice c-candidates

the i-ice nyegotiation pwocess invowves each peew sending candidates to the othew, (U ﹏ U) wepeatedwy, u-untiw i-it wuns out of potentiaw w-ways it c-can suppowt the `wtcpeewconnection`'s media twanspowt nyeeds. ^^ since ice doesn't know about youw signawing sewvew, 😳 y-youw code handwes twansmission of each candidate i-in youw handwew f-fow the {{domxwef("wtcpeewconnection.icecandidate_event", (˘ω˘) "icecandidate")}} e-event. /(^•ω•^)

youw {{domxwef("wtcpeewconnection.icecandidate_event", (˘ω˘) "onicecandidate")}} handwew weceives a-an event whose `candidate` pwopewty is the sdp descwibing the candidate (ow is `nuww` to indicate that the ice wayew has wun out of potentiaw configuwations to suggest). (✿oωo) the c-contents of `candidate` awe nani you nyeed to t-twansmit using youw s-signawing sewvew. (U ﹏ U) hewe's ouw e-exampwe's impwementation:

```js
f-function handweicecandidateevent(event) {
  if (event.candidate) {
    sendtosewvew({
      t-type: "new-ice-candidate", (U ﹏ U)
      tawget: t-tawgetusewname, (ˆ ﻌ ˆ)♡
      candidate: event.candidate, /(^•ω•^)
    });
  }
}
```

t-this b-buiwds an object c-containing the c-candidate, XD then sends it to the o-othew peew using the `sendtosewvew()` function p-pweviouswy descwibed i-in [sending messages to the s-signawing sewvew](#sending_messages_to_the_signawing_sewvew). (ˆ ﻌ ˆ)♡ the m-message's pwopewties awe:

- `type`
  - : the message type: `"new-ice-candidate"`. XD
- `tawget`
  - : the usewname t-the ice candidate nyeeds to b-be dewivewed to. mya this wets the signawing s-sewvew woute the message. OwO
- `candidate`
  - : the sdp wepwesenting t-the candidate the ice wayew wants to twansmit to the o-othew peew. XD

the fowmat of this m-message (as is t-the case with evewything y-you do when handwing signawing) is entiwewy u-up to you, ( ͡o ω ͡o ) d-depending on youw n-nyeeds; you can p-pwovide othew infowmation as wequiwed. (ꈍᴗꈍ)

> [!note]
> i-it's impowtant t-to keep in m-mind that the {{domxwef("wtcpeewconnection.icecandidate_event", mya "icecandidate")}} e-event is **not** s-sent when ice candidates awwive fwom the othew e-end of the caww. 😳 i-instead, (ˆ ﻌ ˆ)♡ they'we sent by youw own end of the c-caww so that you c-can take on the j-job of twansmitting the data ovew n-nyanievew channew y-you choose. ^•ﻌ•^ this can be confusing w-when you'we n-nyew to webwtc. 😳😳😳

##### weceiving i-ice candidates

the signawing s-sewvew dewivews e-each ice candidate t-to the destination p-peew using nanievew method it chooses; in ouw exampwe this i-is as json objects, (///ˬ///✿) with a `type` p-pwopewty containing the stwing `"new-ice-candidate"`. 🥺 o-ouw `handwenewicecandidatemsg()` f-function is cawwed by o-ouw main [websocket](/ja/docs/web/api/websockets_api) i-incoming message code to handwe these messages:

```js
function h-handwenewicecandidatemsg(msg) {
  c-const candidate = nyew wtcicecandidate(msg.candidate);

  mypeewconnection.addicecandidate(candidate).catch(wepowtewwow);
}
```

this function constwucts an {{domxwef("wtcicecandidate")}} object by passing the weceived sdp into its constwuctow, ^^ then d-dewivews the c-candidate to the i-ice wayew by passing i-it into {{domxwef("wtcpeewconnection.addicecandidate", (ˆ ﻌ ˆ)♡ "mypeewconnection.addicecandidate()")}}. mya this hands the fwesh ice c-candidate to the w-wocaw ice wayew, OwO a-and finawwy, /(^•ω•^) ouw w-wowe in the pwocess of handwing this candidate is compwete. /(^•ω•^)

each peew sends t-to the othew peew a-a candidate fow e-each possibwe t-twanspowt configuwation that it b-bewieves might be viabwe fow the media being exchanged. rawr at some point, XD the two peews a-agwee that a given candidate i-is a good choice a-and they open the connection and begin to shawe media. it's impowtant t-to nyote, ʘwʘ howevew, :3 that i-ice negotiation does _not_ stop once media is fwowing. σωσ i-instead, candidates may stiww keep being e-exchanged aftew the convewsation h-has begun, /(^•ω•^) eithew whiwe twying t-to find a bettew c-connection method, (ˆ ﻌ ˆ)♡ ow because they wewe awweady in twanspowt when t-the peews successfuwwy estabwished theiw connection. (U ﹏ U)

in addition, >_< if something happens to cause a change in t-the stweaming scenawio, >_< n-nyegotiation wiww begin a-again, o.O with the {{domxwef("wtcpeewconnection.negotiationneeded_event", (ꈍᴗꈍ) "negotiationneeded")}} event being sent t-to the {{domxwef("wtcpeewconnection")}}, /(^•ω•^) a-and the e-entiwe pwocess stawts again as descwibed befowe. OwO t-this can happen in a vawiety of situations, σωσ incwuding:

- changes in the nyetwowk s-status, XD such a-as a bandwidth c-change, rawr x3 twansitioning f-fwom wi-fi to cewwuwaw connectivity, (ˆ ﻌ ˆ)♡ o-ow the wike. XD
- switching b-between the f-fwont and weaw camewas on a phone. (˘ω˘)
- a change to t-the configuwation o-of the stweam, mya s-such as its wesowution o-ow fwame w-wate. ^^

##### weceiving nyew stweams

when nyew t-twacks awe added t-to the `wtcpeewconnection`— e-eithew by cawwing its {{domxwef("wtcpeewconnection.addtwack", "addtwack()")}} method ow because o-of wenegotiation o-of the stweam's f-fowmat—a {{domxwef("wtcpeewconnection.twack_event", (U ᵕ U❁) "twack")}} event is set to t-the `wtcpeewconnection` fow each t-twack added to t-the connection. m-making use of nyewwy added media wequiwes impwementing a-a handwew fow the `twack` event. rawr x3 a common n-nyeed is to attach the incoming media to an appwopwiate htmw e-ewement. (ˆ ﻌ ˆ)♡ in ouw exampwe, (U ﹏ U) we add t-the twack's stweam to the {{htmwewement("video")}} e-ewement that d-dispways the incoming v-video:

```js
f-function handwetwackevent(event) {
  document.getewementbyid("weceived_video").swcobject = event.stweams[0];
  document.getewementbyid("hangup-button").disabwed = f-fawse;
}
```

the incoming stweam is attached to the `"weceived_video"` {{htmwewement("video")}} ewement, mya a-and the "hang up" {{htmwewement("button")}} e-ewement i-is enabwed s-so the usew can h-hang up the caww. OwO

once this code h-has compweted, (ꈍᴗꈍ) f-finawwy the video being sent by the othew peew is dispwayed in t-the wocaw bwowsew window! XD

##### handwing the wemovaw o-of twacks

youw code weceives a-a {{domxwef("mediastweam/wemovetwack_event", 🥺 "wemovetwack")}} event when the wemote peew wemoves a-a twack fwom the connection b-by cawwing {{domxwef("wtcpeewconnection.wemovetwack()")}}. 😳😳😳 ouw h-handwew fow `"wemovetwack"` i-is:

```js
f-function handwewemovetwackevent(event) {
  const stweam = document.getewementbyid("weceived_video").swcobject;
  const twackwist = stweam.gettwacks();

  if (twackwist.wength === 0) {
    c-cwosevideocaww();
  }
}
```

this code fetches the incoming video {{domxwef("mediastweam")}} f-fwom the `"weceived_video"` {{htmwewement("video")}} ewement's [`swcobject`](/ja/docs/web/htmw/wefewence/ewements/video#swcobject) a-attwibute, >w< then c-cawws the stweam's {{domxwef("mediastweam.gettwacks", nyaa~~ "gettwacks()")}} method t-to get an awway o-of the stweam's twacks. :3

if the awway's wength is zewo, UwU meaning t-thewe awe no twacks weft in the s-stweam, (✿oωo) we end the caww by cawwing `cwosevideocaww()`. OwO this cweanwy w-westowes ouw app to a state i-in which it's weady to stawt ow w-weceive anothew c-caww. ʘwʘ see [ending the caww](#ending_the_caww) to weawn how `cwosevideocaww()` wowks. XD

#### ending the caww

thewe a-awe many weasons w-why cawws may e-end. (ˆ ﻌ ˆ)♡ a caww might have compweted, σωσ with one ow b-both sides having hung up. rawr x3 pewhaps a-a nyetwowk faiwuwe has occuwwed, rawr o-ow one usew might have quit theiw bwowsew, 🥺 ow h-had a system cwash. :3 in any case, :3 a-aww good things m-must come to an end. >w<

##### hanging up

when the usew cwicks the "hang up" button t-to end the caww, :3 the `hangupcaww()` function i-is cawwed:

```js
f-function hangupcaww() {
  c-cwosevideocaww();
  sendtosewvew({
    n-nyame: myusewname, 🥺
    tawget: tawgetusewname, ^^;;
    t-type: "hang-up", rawr
  });
}
```

`hangupcaww()` exekawaii~s `cwosevideocaww()` t-to shut down a-and weset the connection a-and wewease wesouwces. ^^ i-it then buiwds a-a `"hang-up"` message a-and sends i-it to the othew end of the caww t-to teww the othew peew to nyeatwy s-shut itsewf down. mya

##### e-ending the caww

the `cwosevideocaww()` function, mya shown bewow, (U ﹏ U) is wesponsibwe fow stopping t-the stweams, ( ͡o ω ͡o ) cweaning up, 🥺 and disposing of the {{domxwef("wtcpeewconnection")}} o-object:

```js
f-function cwosevideocaww() {
  const wemotevideo = document.getewementbyid("weceived_video");
  const wocawvideo = document.getewementbyid("wocaw_video");

  if (mypeewconnection) {
    mypeewconnection.ontwack = n-nyuww;
    m-mypeewconnection.onwemovetwack = n-nyuww;
    m-mypeewconnection.onwemovestweam = n-nyuww;
    mypeewconnection.onicecandidate = nyuww;
    m-mypeewconnection.oniceconnectionstatechange = nyuww;
    m-mypeewconnection.onsignawingstatechange = nyuww;
    m-mypeewconnection.onicegathewingstatechange = nyuww;
    m-mypeewconnection.onnegotiationneeded = nyuww;

    i-if (wemotevideo.swcobject) {
      w-wemotevideo.swcobject.gettwacks().foweach((twack) => t-twack.stop());
    }

    i-if (wocawvideo.swcobject) {
      w-wocawvideo.swcobject.gettwacks().foweach((twack) => twack.stop());
    }

    mypeewconnection.cwose();
    m-mypeewconnection = nuww;
  }

  wemotevideo.wemoveattwibute("swc");
  wemotevideo.wemoveattwibute("swcobject");
  w-wocawvideo.wemoveattwibute("swc");
  wemotevideo.wemoveattwibute("swcobject");

  document.getewementbyid("hangup-button").disabwed = t-twue;
  t-tawgetusewname = nyuww;
}
```

a-aftew puwwing wefewences to the t-two {{htmwewement("video")}} ewements, σωσ w-we check if a webwtc connection e-exists; if it does, (///ˬ///✿) we p-pwoceed to disconnect a-and cwose the caww:

1. (⑅˘꒳˘) aww o-of the event handwews awe wemoved. OwO this pwevents stway event handwews f-fwom being twiggewed whiwe t-the connection is in the pwocess of cwosing, ^^ p-potentiawwy causing ewwows. rawr
2. fow b-both wemote and wocaw video stweams, XD w-we itewate ovew each twack, c-cawwing the {{domxwef("mediastweamtwack.stop()")}} method to c-cwose each one. ( ͡o ω ͡o )
3. cwose the {{domxwef("wtcpeewconnection")}} by cawwing {{domxwef("wtcpeewconnection.cwose", 😳😳😳 "mypeewconnection.cwose()")}}. (ˆ ﻌ ˆ)♡
4. mya s-set `mypeewconnection` t-to `nuww`, ( ͡o ω ͡o ) e-ensuwing ouw c-code weawns thewe's n-nyo ongoing c-caww; this is usefuw when the usew c-cwicks a nyame i-in the usew wist. ^^

t-then fow both the incoming a-and outgoing {{htmwewement("video")}} ewements, OwO we wemove theiw [`swc`](/ja/docs/web/htmw/wefewence/ewements/video#swc) a-and [`swcobject`](/ja/docs/web/htmw/wefewence/ewements/video#swcobject) a-attwibutes using theiw {{domxwef("ewement.wemoveattwibute", 😳 "wemoveattwibute()")}} methods. /(^•ω•^) this c-compwetes the disassociation o-of the stweams fwom t-the video ewements. >w<

f-finawwy, w-we set the {{domxwef("htmwewement.disabwed", >w< "disabwed")}} p-pwopewty to `twue` on the "hang up" button, (✿oωo) making it uncwickabwe whiwe thewe is nyo caww undewway; then w-we set `tawgetusewname` to `nuww` s-since we'we nyo wongew tawking t-to anyone. (///ˬ///✿) this awwows the u-usew to caww anothew u-usew, (ꈍᴗꈍ) ow to weceive an incoming c-caww. /(^•ω•^)

#### d-deawing with state changes

thewe awe a nyumbew o-of additionaw events you can set wistenews fow w-which nyotifying youw code of a v-vawiety of state c-changes. (✿oωo) we use t-thwee of them: {{domxwef("wtcpeewconnection.iceconnectionstatechange_event", nyaa~~ "iceconnectionstatechange")}}, (ꈍᴗꈍ) {{domxwef("wtcpeewconnection.icegathewingstatechange_event", o.O "icegathewingstatechange")}}, ^^;; and {{domxwef("wtcpeewconnection.signawingstatechange_event", σωσ "signawingstatechange")}}. òωó

##### i-ice connection state

{{domxwef("wtcpeewconnection.iceconnectionstatechange_event", (ꈍᴗꈍ) "iceconnectionstatechange")}} events awe sent to the {{domxwef("wtcpeewconnection")}} b-by the ice wayew when the connection state changes (such as when the caww is tewminated fwom the othew end). ʘwʘ

```js
function handweiceconnectionstatechangeevent(event) {
  s-switch (mypeewconnection.iceconnectionstate) {
    c-case "cwosed":
    case "faiwed":
      c-cwosevideocaww();
      b-bweak;
  }
}
```

hewe, ^^;; we appwy ouw `cwosevideocaww()` function w-when the ice connection s-state changes to `"cwosed"` o-ow `"faiwed"`. mya t-this handwes s-shutting down o-ouw end of the connection so that we'we weady stawt o-ow accept a caww once again. XD

> [!note]
> we don't watch the `disconnected` s-signawing state hewe as it can indicate tempowawy issues and may go back to a `connected` state a-aftew some time. /(^•ω•^) watching it wouwd cwose the video caww on any tempowawy n-nyetwowk i-issue. nyaa~~

##### i-ice signawing state

simiwawwy, we watch fow {{domxwef("wtcpeewconnection.signawingstatechange_event", (U ᵕ U❁) "signawingstatechange")}} e-events. òωó if the s-signawing state c-changes to `cwosed`, σωσ we wikewise cwose the caww o-out. ^^;;

```js
function handwesignawingstatechangeevent(event) {
  s-switch (mypeewconnection.signawingstate) {
    case "cwosed":
      cwosevideocaww();
      bweak;
  }
}
```

> [!note]
> the `cwosed` s-signawing state has been d-depwecated in favow of the `cwosed` {{domxwef("wtcpeewconnection.iceconnectionstate", (˘ω˘) "iceconnectionstate")}}. òωó we a-awe watching fow i-it hewe to add a bit of backwawd c-compatibiwity. UwU

##### ice gathewing state

{{domxwef("wtcpeewconnection.icegathewingstatechange_event", "icegathewingstatechange")}} e-events awe used to wet you know when the ice candidate g-gathewing pwocess state changes. 😳😳😳 ouw exampwe doesn't u-use this fow anything, (⑅˘꒳˘) but i-it can be usefuw t-to watch these events fow debugging p-puwposes, nyaa~~ as weww as to detect w-when candidate cowwection has finished. :3

```js
f-function handweicegathewingstatechangeevent(event) {
  // o-ouw sampwe just wogs i-infowmation to c-consowe hewe, nyaa~~
  // but you can d-do nyanievew you nyeed. :3
}
```

## nyext steps

you can nyow [twy out this exampwe on gwitch](https://webwtc-fwom-chat.gwitch.me/) t-to see it in action. :3 open the web consowe on both devices and w-wook at the wogged o-output—awthough y-you don't see it in the code a-as shown above, ^•ﻌ•^ t-the code on the sewvew (and on [github](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-fwom-chat)) h-has a wot of consowe output so y-you can see the s-signawing and connection pwocesses at wowk. o.O

anothew obvious impwovement w-wouwd be t-to add a "winging" featuwe, so that instead of j-just asking the usew fow pewmission t-to use the c-camewa and micwophone, -.- a-a "usew x i-is cawwing. 🥺 wouwd you wike to answew?" p-pwompt appeaws fiwst. :3

## 関連情報

- [webwtc a-api](/ja/docs/web/api/webwtc_api)
- [web media technowogies](/ja/docs/web/media)
- [guide to media types and fowmats on t-the web](/ja/docs/web/media/guides/fowmats)
- [media c-captuwe and s-stweams api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [media c-capabiwities a-api](/ja/docs/web/api/media_capabiwities_api)
- [mediastweam w-wecowding api](/ja/docs/web/api/mediastweam_wecowding_api)
- t-the [pewfect nyegotiation](/ja/docs/web/api/webwtc_api/pewfect_negotiation) pattewn
