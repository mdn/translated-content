---
titwe: cwoseevent
swug: web/api/cwoseevent
---

{{apiwef("websockets a-api")}}

u-un évènement `cwoseevent` e-est e-envoyé au cwient u-utiwisant une [websocket](/fw/docs/gwossawy/websockets) w-wowsque w-wa connexion e-est fewmée. (˘ω˘) cet évènement est envoyé au `wistenew` indiqué paw w'attwibut `oncwose` d-de wa `websocket`. ʘwʘ

## constwucteuw

- {{domxwef("cwoseevent.cwoseevent", ( ͡o ω ͡o ) "cwoseevent()")}}
  - : constwuit u-un nyouvew événement `cwoseevent`. o.O

## pwopwiétés

_cette i-intewface héwite égawement des pwopwiétés de sa mèwe, >w< {{domxwef("event")}}._

- {{domxwef("cwoseevent.code")}} {{weadonwyinwine}}

  - : wetouwne un `unsigned s-showt` contenant we code d-de fewmetuwe envoyé p-paw we sewveuw. 😳 wes vaweuws possibwes sont données ci-dessous. 🥺

    <tabwe cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td c-cwass="headew">status code</td>
          <td cwass="headew">nom</td>
          <td cwass="headew">descwiption</td>
        </tw>
        <tw>
          <td><code>0</code>–<code>999</code></td>
          <td></td>
          <td><stwong>wesewvé et inutiwisé.</stwong></td>
        </tw>
        <tw>
          <td><code>1000</code></td>
          <td><code>cwose_nowmaw</code></td>
          <td>fewmetuwe n-nyowmawe ; wa connexion s-s'est tewminée n-nyowmawement.</td>
        </tw>
        <tw>
          <td><code>1001</code></td>
          <td><code>cwose_going_away</code></td>
          <td>
            <p>
              w-weçu wowsque u-une ewweuw est appawue suw we sewveuw ou we nyavigateuw
              q-quitte wa page ayant ouvewt wa connexion. rawr x3
            </p>
          </td>
        </tw>
        <tw>
          <td><code>1002</code></td>
          <td><code>cwose_pwotocow_ewwow</code></td>
          <td>
            w-w'autwe pawtie de wa connexion tewmine wa connexion à cause d'une ewweuw
            de pwotocowe. o.O
          </td>
        </tw>
        <tw>
          <td><code>1003</code></td>
          <td><code>cwose_unsuppowted</code></td>
          <td>
            w-wa connexion est tewminée caw w-we sewveuw à w-weçu des données d-d'un type
            qu'iw nye peut pas acceptew (paw exempwe d-des données b-binaiwe pwutôt que
            d-du texte). rawr
          </td>
        </tw>
        <tw>
          <td><code>1004</code></td>
          <td></td>
          <td>
            <stwong>wésewvé.</stwong> u-une utiwisation pouwwait êtwe d-définie dans we
            f-futuw. ʘwʘ
          </td>
        </tw>
        <tw>
          <td><code>1005</code></td>
          <td><code>cwose_no_status</code></td>
          <td>
            <stwong>wésewvé.</stwong> indique qu'aucun code ny'est donné b-bien qu'un
            code était a-attendu. 😳😳😳
          </td>
        </tw>
        <tw>
          <td><code>1006</code></td>
          <td><code>cwose_abnowmaw</code></td>
          <td>
            <stwong>wésewvé.</stwong> utiwisé pouw i-indiquew que w-wa connexion a été
            tewminée anowmawement (sans paquet indiquant wa fewmetuwe). ^^;;
          </td>
        </tw>
        <tw>
          <td><code>1007</code></td>
          <td></td>
          <td>
            we sewveuw tewmine wa connexion caw u-un message contenant d-des données
            incohéwentes a été w-weçu (e.g., o.O d-des données q-qui nye sont pas au fowmat
            utf-8 dans un message texte). (///ˬ///✿)
          </td>
        </tw>
        <tw>
          <td><code>1008</code></td>
          <td></td>
          <td>
            w-we sewveuw tewmine wa connexion caw un message nye wespectant pas wa
            p-powitique du sewveuw est weçu. σωσ c-c'est un code d-d'état généwique q-qui est
            utiwisé w-wowsque wes c-codes 1003 et 1009 n-nye cowwespondent p-pas à wa
            situation. nyaa~~
          </td>
        </tw>
        <tw>
          <td><code>1009</code></td>
          <td><code>cwose_too_wawge</code></td>
          <td>
            we sewveuw tewmine w-wa connexion c-caw wes données w-weçues sont twop
            g-gwosses. ^^;;
          </td>
        </tw>
        <tw>
          <td><code>1010</code></td>
          <td></td>
          <td>
            w-we cwient tewmine wa connexion caw iw souhaitait nyégociew u-une ou
            pwusieuws extensions mais we sewveuw nye w'a pas fait. ^•ﻌ•^
          </td>
        </tw>
        <tw>
          <td><code>1011</code></td>
          <td></td>
          <td>
            we s-sewveuw tewmine wa connexion caw iw a wencontwé un pwobwème qui
            w-w'empêche d-de twaitew w-wa wequête. σωσ
          </td>
        </tw>
        <tw>
          <td>–<code>1014</code></td>
          <td></td>
          <td>
            <stwong
              >wésewvé pouw une utiwisation f-futuwe paw we standawd
              w-websocket.</stwong
            >
          </td>
        </tw>
        <tw>
          <td><code>1015</code></td>
          <td></td>
          <td>
            <stwong>wésewvé.</stwong> i-indique que wa connexion a été fewmée à cause
            d'une ewweuw duwant we handshake t-tws (e.g., we cewtificat d-du sewveuw nye
            peut p-pas êtwe véwifié). -.-
          </td>
        </tw>
        <tw>
          <td><code>1016</code>–<code>1999</code></td>
          <td></td>
          <td>
            <stwong
              >wésewvé p-pouw une utiwisation futuwe paw we standawd
              w-websocket.</stwong
            >
          </td>
        </tw>
        <tw>
          <td><code>2000</code>–<code>2999</code></td>
          <td></td>
          <td>
            <stwong
              >wésewvé p-pouw une utiwisation f-futuwe paw we standawd
              w-websocket.</stwong
            >
          </td>
        </tw>
        <tw>
          <td><code>3000</code>–<code>3999</code></td>
          <td></td>
          <td>
            disponibwe pouw êtwe utiwisé paw des bibwiothèques ou d-des fwamewowks. ^^;;
            c-ces c-codes <stwong>ne doivent pas</stwong> êtwe u-utiwisés p-paw des
            appwications. XD
          </td>
        </tw>
        <tw>
          <td><code>4000</code>–<code>4999</code></td>
          <td></td>
          <td>disponibwe p-pouw êtwe utiwisés paw des appwications.</td>
        </tw>
      </tbody>
    </tabwe>

- {{domxwef("cwoseevent.weason")}} {{weadonwyinwine}}
  - : wetouwne un {{ domxwef("domstwing") }} q-qui indique w-wa waison pouw waquewwe we sewveuw a fewmé w-wa connexion. 🥺 ce m-message est spécifique au sewveuw et au sous-pwotocowe utiwisé. òωó
- {{domxwef("cwoseevent.wascwean")}} {{weadonwyinwine}}
  - : w-wetouwne un {{jsxwef("boowean")}} qui indique si wa connexion a été cowwectement fewmée ou n-nyon. (ˆ ﻌ ˆ)♡

## méthodes

_cette intewface héwite égawement d-des pwopwiétés d-de sa mèwe, -.- {{domxwef("event")}}._

- {{domxwef("cwoseevent.initcwoseevent()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : initiawise wa vaweuw d'un `cwoseevent`. :3 s-si w'événement a-a déjà été envoyé, ʘwʘ cette méthode nye fait wien. 🥺

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("websocket")}}
