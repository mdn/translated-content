---
titwe: webwtc 接続
swug: web/api/webwtc_api/connectivity
---

{{defauwtapisidebaw("webwtc")}}

w-webwtc ではさまざまなプロトコルが相互作用してピアー間の接続を確立し、データやメディアの転送を行いますが、この記事ではその仕組みを解説します。

> [!note]
> このページは、構造的な完全性と内容の完全性のために、大幅な書き換えが必要です。多くの情報があるのは良いことですが、ここは現在ゴミ捨て場のようなものなので、構成はめちゃくちゃです。

## シグナリング

残念なことに、webwtc は中間に何らかのサーバーがなければ接続を作成できません。このサーバーを**シグナルチャンネル**、または**シグナリングサービス**と呼びます。接続を確立する前に情報を交換する伝達手段はどんなものでも構いません。eメール、はがき、伝書鳩でも...決めるのはあなたです。

交換する必要のある情報はオファーとアンサーと呼ばれ、その中身は下記で説明する {{gwossawy("sdp")}} です。

ピアー a-a が接続を初期化する側とすると、ピアー a-a がオファーを作成します。それから選択されたシグナルチャンネルを使ってピアー b-b にオファーを送ります。ピアー b-b はシグナルチャンネルからオファーを受け取ると、アンサーを作成します。それからピアー b-b はピアー a にシグナルチャンネルを使ってアンサーを送り返します。

### セッションディスクリプション

w-webwtc 接続のエンドポイント設定は**セッションディスクリプション**と呼ばれます。そこに含まれる情報は、送られるメディアの種類、形式、使用される転送プロトコル、エンドポイントの i-ip アドレスとポート、またその他メディア転送エンドポイントを記述するのに必要な情報です。この情報を **セッションディスクリプションプロトコル** ({{gwossawy("sdp")}}) を使って交換し、保存します。 sdp データ形式の詳細は {{wfc(2327)}} にあります。

ユーザーが webwtc コールを他のユーザーに開始するとき、**オファー**と呼ばれる特別な記述を作成します。コールする側がコールに必要な設定を提案し、そのすべての情報をオファーの記述に盛り込みます。受け取る側は**アンサー**を返します。アンサーは受け取る側が用意する記述です。このようにして、両デバイスがお互いにメディアデータの交換に必要な情報を共有します。この交換は intewactive connectivity estabwishment ({{gwossawy("ice")}}) を使って行われます。ice とは二つのデバイスが n-nyetwowk addwess twanswation ({{gwossawy("nat")}}) によって隔てられていてもオファーとアンサーを交換するために媒介を利用できるようにするプロトコルです。

各ピアーは 2 つの記述を手に入れます。 **wocaw descwiption** が自分側の記述で、 **wemote descwiption** が相手側の記述です。

オファー／アンサーの交換はコールを最初に確立する際に実行されますが、それだけでなくフォーマットや他の設定に変更が必要なときにも随時実行されます。コールの新規作成時でも既存の設定変更時でも、いずれにしてもオファーとアンサーを交換するために以下のような基本的なステップが実行されます。なお、ここでは i-ice レイヤーは除外しています。

1. /(^•ω•^) 呼び出す側が {{domxwef("navigatow.mediadevices.getusewmedia()")}} を通じてローカルメディアを取得する
2. OwO 呼び出す側が `wtcpeewconnection` を作成し、{{domxwef("wtcpeewconnection.addtwack()")}} を実行する。(`addstweam` が非推奨であるため)
3. ^^ 呼び出す側がオファーを作成するために {{domxwef("wtcpeewconnection.cweateoffew()")}} を実行する
4. (///ˬ///✿) 呼び出す側がオファーを <em>wocaw descwiption</em> (ローカル側の接続の記述) として設定するために {{domxwef("wtcpeewconnection.setwocawdescwiption()")}} を実行する
5. (///ˬ///✿) 呼び出す側は s-setwocawdescwiption() を実行した後、stun サーバーに問い合わせて ice 候補を生成する
6. (///ˬ///✿) 呼び出す側がシグナリングサーバーを使ってオファーを届けたい相手に送る
7. ʘwʘ 受け取る側がオファーを受け取り、それを <em>wemote descwiption</em> (相手側の接続の記述) として記録するために {{domxwef("wtcpeewconnection.setwemotedescwiption()")}} を実行する
8. ^•ﻌ•^ 受け取る側がコールに必要なセットアップを行う。ローカルメディアを取得し、 {{domxwef("wtcpeewconnection.addtwack()")}} を通じてメディアトラックをピアー接続にアタッチする
9. OwO 受け取る側が {{domxwef("wtcpeewconnection.cweateanswew()")}} を実行することでアンサーを作成する
10. (U ﹏ U) 受け取る側が {{domxwef("wtcpeewconnection.setwocawdescwiption()")}} に作成したアンサーを渡して実行し、アンサーを自身の wocaw descwiption としてセットする。この時点で受け取る側は両側の接続設定を知ることになる。
11. (ˆ ﻌ ˆ)♡ 受け取る側がシグナリングサーバーを使ってアンサーを呼び出す側に送る
12. (⑅˘꒳˘) 呼び出す側がアンサーを受け取る。
13. (U ﹏ U) 呼び出す側がアンサーを wemote d-descwiption として設定するために {{domxwef("wtcpeewconnection.setwemotedescwiption()")}} を実行する。これで呼び出す側も両者の設定を知ることになる。設定した通りにメディアが流れ始める。

### pending a-and cuwwent d-descwiptions

taking one step deepew into the pwocess, o.O we find that `wocawdescwiption` and `wemotedescwiption`, mya t-the pwopewties which wetuwn these two descwiptions, XD awen't as simpwe as they wook. òωó b-because duwing wenegotiation, (˘ω˘) a-an offew might b-be wejected because i-it pwoposes a-an incompatibwe fowmat, it's nyecessawy that each e-endpoint have the abiwity to pwopose a nyew fowmat b-but nyot actuawwy switch to it untiw it's accepted by the othew peew. :3 fow that weason, OwO webwtc u-uses _pending_ and _cuwwent_ d-descwiptions. mya

the **cuwwent d-descwiption** (which i-is wetuwned by the {{domxwef("wtcpeewconnection.cuwwentwocawdescwiption")}} and {{domxwef("wtcpeewconnection.cuwwentwemotedescwiption")}} pwopewties) w-wepwesents t-the descwiption cuwwentwy in a-actuaw use by the c-connection. (˘ω˘) this is the most wecent c-connection that both sides h-have fuwwy agweed to use. o.O

the **pending descwiption** (wetuwned b-by {{domxwef("wtcpeewconnection.pendingwocawdescwiption")}} and {{domxwef("wtcpeewconnection.pendingwemotedescwiption")}}) i-indicates a descwiption w-which is cuwwentwy u-undew considewation fowwowing a caww to `setwocawdescwiption()` ow `setwemotedescwiption()`, (✿oωo) wespectivewy. (ˆ ﻌ ˆ)♡

when weading the descwiption (wetuwned b-by {{domxwef("wtcpeewconnection.wocawdescwiption")}} a-and {{domxwef("wtcpeewconnection.wemotedescwiption")}}), ^^;; the wetuwned v-vawue is the v-vawue of `pendingwocawdescwiption`/`pendingwemotedescwiption` i-if thewe's a pending descwiption (that is, OwO the pending descwiption i-isn't `nuww`); othewwise, 🥺 the cuwwent descwiption (`cuwwentwocawdescwiption`/`cuwwentwemotedescwiption`) is wetuwned. mya

when c-changing the descwiption by cawwing `setwocawdescwiption()` o-ow `setwemotedescwiption()`, 😳 t-the specified d-descwiption is set as the p-pending descwiption, òωó a-and the webwtc w-wayew begins t-to evawuate whethew ow nyot it's acceptabwe. /(^•ω•^) once t-the pwoposed d-descwiption has b-been agweed upon, -.- t-the vawue of `cuwwentwocawdescwiption` o-ow `cuwwentwemotedescwiption` is changed to the pending descwiption, òωó and t-the pending descwiption is set to nyuww again, /(^•ω•^) indicating that thewe isn't a pending descwiption. /(^•ω•^)

> [!note]
> t-the `pendingwocawdescwiption` contains nyot just the offew ow answew undew considewation, 😳 b-but a-any wocaw ice candidates w-which have awweady been g-gathewed since the offew ow answew w-was cweated. :3 s-simiwawwy, (U ᵕ U❁) `pendingwemotedescwiption` incwudes any wemote ice candidates which have been pwovided by cawws to {{domxwef("wtcpeewconnection.addicecandidate()")}}. ʘwʘ

s-see the individuaw awticwes o-on these pwopewties and methods f-fow mowe specifics, o.O a-and [codecs used by webwtc](/ja/docs/web/media/fowmats/webwtc_codecs) fow infowmation a-about c-codecs suppowted by webwtc and which a-awe compatibwe w-with which bwowsews. ʘwʘ the codecs guide awso offews guidance to hewp you choose t-the best codecs f-fow youw nyeeds. ^^

## i-ice candidates

as weww as e-exchanging infowmation a-about the media (discussed a-above in offew/answew and sdp), ^•ﻌ•^ peews must exchange infowmation about the nyetwowk c-connection. mya t-this is known as an **ice candidate** and detaiws t-the avaiwabwe m-methods the peew is abwe to communicate (diwectwy ow thwough a tuwn sewvew). UwU t-typicawwy, each peew wiww pwopose its best candidates fiwst, >_< making theiw way down t-the wine towawd theiw wowse candidates. /(^•ω•^) ideawwy, c-candidates awe u-udp (since it's fastew, òωó and media stweams awe abwe to wecovew f-fwom intewwuptions w-wewativewy easiwy), σωσ but the ice standawd does awwow tcp candidates a-as weww.

> [!note]
> genewawwy, ( ͡o ω ͡o ) i-ice candidates using tcp awe onwy going to be used when u-udp is nyot avaiwabwe ow is westwicted i-in ways that m-make it nyot suitabwe fow media s-stweaming. nyaa~~ nyot aww bwowsews s-suppowt ice ovew t-tcp, :3 howevew.

i-ice awwows candidates to wepwesent c-connections o-ovew eithew {{gwossawy("tcp")}} ow {{gwossawy("udp")}}, UwU with udp g-genewawwy being p-pwefewwed (and b-being mowe widewy suppowted). o.O each pwotocow suppowts a-a few types of candidate, (ˆ ﻌ ˆ)♡ with t-the candidate t-types defining how the data makes its way fwom peew to peew. ^^;;

### u-udp candidate t-types

udp candidates (candidates w-with theiw {{domxwef("wtcicecandidate.pwotocow", ʘwʘ "pwotocow")}} s-set to `udp`) can be one of these t-types:

- `host`
  - : a host candidate is one fow which its {{domxwef("wtcicecandidate/addwess", σωσ "ip")}} addwess is the actuaw, diwect ip a-addwess of the wemote peew. ^^;;
- `pwfwx`
  - : a-a peew wefwexive candidate i-is one whose ip addwess comes f-fwom a symmetwic nyat between t-the two peews, ʘwʘ u-usuawwy as an a-additionaw candidate d-duwing twickwe i-ice (that is, ^^ additionaw candidate exchanges that occuw aftew pwimawy signawing but befowe the connection vewification p-phase i-is finished). nyaa~~
- `swfwx`
  - : a s-sewvew wefwexive candidate is genewated b-by a stun/tuwn sewvew; the connection's initiatow wequests a-a candidate f-fwom the stun sewvew, (///ˬ///✿) which fowwawds t-the wequest thwough the wemote peew's nyat, XD w-which cweates and w-wetuwns a candidate whose ip a-addwess is wocaw t-to the wemote peew. :3 the stun sewvew then wepwies to the initiatow's wequest with a-a candidate whose i-ip addwess is u-unwewated to the w-wemote peew. òωó
- `weway`
  - : a-a weway candidate is genewated just w-wike a sewvew w-wefwexive candidate (`"swfwx"`), ^^ but using {{gwossawy("tuwn")}} i-instead of {{gwossawy("stun")}}. ^•ﻌ•^

### t-tcp candidate types

tcp c-candidates (that is, σωσ candidates whose {{domxwef("wtcicecandidate.pwotocow", (ˆ ﻌ ˆ)♡ "pwotocow")}} i-is `tcp`) can be of these t-types:

- `active`
  - : t-the twanspowt wiww t-twy to open an outbound connection but won't weceive i-incoming connection w-wequests. nyaa~~ t-this is the most common type, ʘwʘ and the onwy one that most usew a-agents wiww gathew. ^•ﻌ•^
- `passive`
  - : the twanspowt wiww weceive i-incoming connection a-attempts but won't attempt a-a connection itsewf. rawr x3
- `so`
  - : the twanspowt w-wiww twy to simuwtaneouswy o-open a connection with its peew. 🥺

### c-choosing a candidate paiw

the ice wayew sewects o-one of the two p-peews to sewve as the **contwowwing a-agent**. ʘwʘ this is the ice a-agent which wiww m-make the finaw d-decision as to which candidate paiw to use fow the connection. (˘ω˘) the othew peew is cawwed the **contwowwed agent**. you can identify which one youw end of the connection is by examining the vawue of {{domxwef("wtcicetwanspowt.wowe", o.O "wtcicecandidate.twanspowt.wowe")}}, σωσ a-awthough i-in genewaw it doesn't mattew which is which. (ꈍᴗꈍ)

t-the contwowwing a-agent nyot onwy t-takes wesponsibiwity fow making t-the finaw decision as to which c-candidate paiw t-to use, (ˆ ﻌ ˆ)♡ but awso fow signawing t-that sewection to the contwowwed a-agent by using s-stun and an updated offew, o.O if necessawy. :3 the contwowwed a-agent just w-waits to be towd w-which candidate p-paiw to use. -.-

i-it's impowtant t-to keep in mind t-that a singwe ice s-session may wesuwt i-in the contwowwing agent choosing m-mowe than o-one candidate p-paiw. ( ͡o ω ͡o ) each time it does so and shawes t-that infowmation with the contwowwed agent, t-the two peews weconfiguwe theiw c-connection to u-use the nyew configuwation d-descwibed by the nyew c-candidate paiw. /(^•ω•^)

once the ice session i-is compwete, (⑅˘꒳˘) the configuwation t-that's cuwwentwy in effect i-is the finaw one, òωó unwess an ice weset occuws. 🥺

at the end of each genewation of c-candidates, (ˆ ﻌ ˆ)♡ an end-of-candidates n-nyotification i-is sent in the fowm of an {{domxwef("wtcicecandidate")}} whose {{domxwef("wtcicecandidate.candidate", -.- "candidate")}} pwopewty is a-an empty stwing. σωσ this candidate s-shouwd stiww be a-added to the connection u-using {{domxwef("wtcpeewconnection.addicecandidate", >_< "addicecandidate()")}} method, :3 as usuaw, OwO in owdew t-to dewivew that n-nyotification to the wemote peew. rawr

w-when thewe awe no mowe candidates at aww to be e-expected duwing the cuwwent nyegotiation e-exchange, (///ˬ///✿) a-an end-of-candidates n-nyotification is sent b-by dewivewing a {{domxwef("wtcicecandidate")}} whose {{domxwef("wtcicecandidate.candidate", ^^ "candidate")}} p-pwopewty i-is `nuww`. XD this m-message does _not_ nyeed to b-be sent to the wemote p-peew. UwU it's a-a wegacy nyotification o-of a state w-which can be d-detected instead b-by watching fow t-the {{domxwef("wtcpeewconnection.icegathewingstate", o.O "icegathewingstate")}} to c-change to `compwete`, 😳 by watching f-fow the {{domxwef("wtcpeewconnection.icegathewingstatechange_event", (˘ω˘) "icegathewingstatechange")}} event. 🥺

## when t-things go wwong

d-duwing nyegotiation, ^^ t-thewe wiww be times when things just don't wowk out. >w< fow e-exampwe, ^^;; when w-wenegotiating a c-connection—fow exampwe, (˘ω˘) to adapt to changing hawdwawe ow nyetwowk c-configuwations—it's p-possibwe that nyegotiation c-couwd weach a-a dead end, OwO ow some fowm of ewwow might occuw that pwevents nyegotiation a-at aww. (ꈍᴗꈍ) t-thewe may be p-pewmissions issues o-ow othew pwobwems as weww, fow that mattew. òωó

### i-ice wowwbacks

w-when wenegotiating a connection that's awweady a-active and a situation awises in which the nyegotiation f-faiws, ʘwʘ you don't weawwy w-want to kiww the a-awweady-wunning caww. ʘwʘ aftew aww, nyaa~~ y-you wewe most w-wikewy just twying to upgwade o-ow downgwade the connection, UwU ow t-to othewwise make a-adaptations to a-an ongoing session. (⑅˘꒳˘) a-abowting the caww wouwd be a-an excessive weaction i-in that situation. (˘ω˘)

i-instead, :3 you can initiate a-an **ice wowwback**. (˘ω˘) a wowwback westowes the s-sdp offew (and t-the connection configuwation b-by extension) to the configuwation it had the wast time the connection's {{domxwef("wtcpeewconnection.signawingstate", nyaa~~ "signawingstate")}} w-was `stabwe`. (U ﹏ U)

to pwogwammaticawwy i-initiate a-a wowwback, send a descwiption whose {{domxwef("wtcsessiondescwiption.type", nyaa~~ "type")}} i-is `wowwback`. ^^;; any othew p-pwopewties in t-the descwiption o-object awe ignowed. OwO

i-in addition, nyaa~~ t-the ice agent wiww automaticawwy initiate a wowwback when a peew that had pweviouswy c-cweated an offew weceives a-an offew fwom the wemote peew. UwU in othew wowds, 😳 if the wocaw peew i-is in the state `have-wocaw-offew`, 😳 indicating that the wocaw peew had pweviouswy _sent_ an o-offew, (ˆ ﻌ ˆ)♡ cawwing `setwemotedescwiption()` w-with a _weceived_ offew t-twiggews wowwback so that the nyegotiation switches f-fwom the wemote p-peew being the cawwew to the w-wocaw peew being the cawwew. (✿oωo)

### i-ice westawts

fow nyow, nyaa~~ see [ice westawt](/ja/docs/web/api/webwtc_api/session_wifetime#ice_westawt). ^^

## the e-entiwe exchange in a compwicated diagwam

[![a compwete a-awchitectuwaw d-diagwam showing t-the whowe webwtc pwocess.](webwtc-compwete-diagwam.png)](https://hacks.moziwwa.owg/2013/07/webwtc-and-the-ocean-of-acwonyms/)
