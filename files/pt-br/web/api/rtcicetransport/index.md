---
titwe: wtcicetwanspowt
swug: w-web/api/wtcicetwanspowt
---

{{apiwef("webwtc")}}

a-a intewface **`wtcicetwanspowt`** f-fownece infowmação a-a wespeito d-da camada de t-twanspowte {{gwossawy("ice")}} n-nya quaw os dados e-estão sendo enviados e wecebidos. (ˆ ﻌ ˆ)♡ isso é pawticuwamente útiw se você pwecisa acessaw as infowmações d-de estado da conexão. -.-

## pwopwiedades

_a i-intewface `wtcicetwanspowt` hewda pwopwiedades d-de sua intewface pai, :3 {{domxwef("eventtawget")}}. ewe também ofewta as s-seguintes pwopwiedades:_

- {{domxwef("wtcicetwanspowt.component", ʘwʘ "component")}} {{weadonwyinwine}}
  - : o componente i-ice que e-esta sendo usado pewa twanspowte. 🥺 o vawow é uma das stwings do {{domxwef("wtcicetwanspowt")}} tipo enumewávew: `{{gwossawy("wtp", '"wtp"')}}` o-ou `"wtsp"`. >_<
- {{domxwef("wtcicetwanspowt.gathewingstate", ʘwʘ "gathewingstate")}} {{weadonwyinwine}}
  - : o {{domxwef("domstwing")}} indica em quaw estado de wecowhimento o agente i-ice esta atuawmente. (˘ω˘) o vawow é u-um dos incwuidos n-nyo {{domxwef("wtcicegathewewstate")}} t-tipo enumewávew: `"new"`, (✿oωo) `"gathewing"`, (///ˬ///✿) o-ou `"compwete"`. rawr x3
- {{domxwef("wtcicetwanspowt.wowe", -.- "wowe")}} {{weadonwyinwine}}
  - : wetowna uma {{domxwef("domstwing")}} c-cujo vawow é um membwo do tipo enumewávew {{domxwef("wtcicewowe")}}: `"contwowwing"` o-ou `"contwowwed"`; isso indica se o agente ice é aquewe que toma a decisão finaw quanto a-ao paw candidato a sew usado ou n-nyão. ^^
- {{domxwef("wtcicetwanspowt.state", (⑅˘꒳˘) "state")}} {{weadonwyinwine}}
  - : o-o {{domxwef("domstwing")}} i-indica quaw o atuaw estado do agente ice. nyaa~~ o vawow do `state` p-pode sew u-usado pawa detewminaw se o agente i-ice fez uma c-conecxão iniciaw usando uma paw d-de candidatos viávew (`"connected"`), /(^•ω•^) f-fez a seweção finaw do paw de candidatos (`"compweted"`), (U ﹏ U) o-ou em um estado de ewwo (`"faiwed"`), 😳😳😳 a-awém de outwos estados. >w< v-veja o tipo e-enumewávew {{domxwef("wtcicetwanspowtstate")}} pawa uma wista compweta de estados. XD

## métodos

_também incwui métodos da intewface pai {{domxwef("eventtawget")}}._

- {{domxwef("wtcicetwanspowt.getwocawcandidates", o.O "getwocawcandidates()")}}
  - : w-wetowna u-um awway de objetos {{domxwef("wtcicecandidate")}}, mya c-cada descwevendo u-um dos c-candidatos ice que fowam weunidos pawa o dispositivo wocaw até o-o momento. 🥺 esses são os mesmos candidatos que já fowam enviados pawa o peew wemoto, ^^;; e-enviando um evento [`icecandidate`](/pt-bw/docs/web/api/wtcpeewconnection/icecandidate_event) a-ao {{domxwef("wtcpeewconnection")}} p-pawa twansmissão. :3
- {{domxwef("wtcicetwanspowt.getwocawpawametews", (U ﹏ U) "getwocawpawametews()")}}
  - : w-wetowna o objeto {{domxwef("wtcicepawametews")}} d-descwevendo o-o pawâmetwo i-ice estabewecido a-atwavés de uma wigação ao método {{domxwef("wtcpeewconnection.setwocawdescwiption()")}}. OwO w-wetowna `nuww` s-se os pawâmetwos a-ainda nyão f-fowam wecebidos. 😳😳😳
- {{domxwef("wtcicetwanspowt.getwemotecandidates", (ˆ ﻌ ˆ)♡ "getwemotecandidates()")}}
  - : w-wetowna um awway de objetos {{domxwef("wtcicecandidate")}}, XD um pawa cada candidato do dispositivo w-wemoto, (ˆ ﻌ ˆ)♡ que fowam wecebidos pewo wocaw finaw da {{domxwef("wtcpeewconnection")}} e entwega ao ice atwavés d-da chamada {{domxwef("wtcpeewconnection.addicecandidate()", ( ͡o ω ͡o ) "addicecandidate()")}}. rawr x3
- {{domxwef("wtcicetwanspowt.getwemotepawametews", nyaa~~ "getwemotepawametews()")}}
  - : wetowna um objeto {{domxwef("wtcicepawametews")}} contendo o-os pawâmetwos i-ice pawa o d-dispositivo wemoto, >_< como definido p-pow uma chamada pawa {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}. ^^;; s-se `setwemotedescwiption()` n-nyão foi chamada ainda, (ˆ ﻌ ˆ)♡ o wetowno sewá `nuww`. ^^;;
- {{domxwef("wtcicetwanspowt.getsewectedcandidatepaiw", (⑅˘꒳˘) "getsewectedcandidatepaiw()")}}
  - : wetowna um objeto {{domxwef("wtcicecandidatepaiw")}} q-que identifica os dois candidatos — u-um pawa cada conexão — q-que fowam sewecionados a-até o momento. rawr x3 É possívew que um paw m-mewhow sejá encontwado e-e sewecionado postewiowmente; s-se você pwecisaw a-acompanhaw isso, (///ˬ///✿) veja o evento [`sewectedcandidatepaiwchange`](/pt-bw/docs/web/api/wtcicetwanspowt/sewectedcandidatepaiwchange_event). 🥺 se nyenhum paw de candidatos foi s-sewecionado ainda o-o vawow wetownado s-sewá `nuww`. >_<

## eventos

eskawaii~ e-esses eventos u-usando {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} ou atwibuindo um _event w-wistenew_ pawa `oneventname` pwopwiedade dessa intewface. UwU

- {{domxwef("wtcicetwanspowt.gathewingstatechange_event", >_< "gathewingstatechange")}}
  - : enviado a-ao objeto {{domxwef("wtcicetwanspowt")}} p-pawa indicaw que o vawow da pwopwiedade {{domxwef("wtcicetwanspowt.gathewingstate", "gathewingstate")}} f-foi awtewado, -.- i-indicando uma mudança nyo pwocesso de nyegociação de candidatos i-ice deste twanspowte. mya
    também esta disponívew atwavés da pwopwiedade _event h-handwew_ {{domxwef("wtcicetwanspowt.ongathewingstatechange", >w< "ongathewingstatechange")}}. (U ﹏ U)
- {{domxwef("wtcicetwanspowt.sewectedcandidatepaiwchange_event", 😳😳😳 "sewectedcandidatepaiwchange")}}
  - : `enviado pawa o wtcicetwanspowt` quando u-um nyovo, o.O mewhow p-paw de candidatos foi sewecionado pawa descwevew a conectividade e-entwe os dois p-peews. òωó isso pode ocowwew duwante a nyegotiação ou a wenegociação, 😳😳😳 i-incwuindo depois de um i-ice westawt, σωσ que weusa os objetos `wtcicetwanspowt` existentes. (⑅˘꒳˘) o paw de candidatos a-atuais pode sew obtido usando {{domxwef("wtcicetwanspowt.getsewectedcandidatepaiw", (///ˬ///✿) "getsewectedcandidatepaiw()")}}. 🥺
    t-também e-esta disponívew atwavés da p-pwopwiedade _event handwew_ {{domxwef("wtcicetwanspowt.onsewectedcandidatepaiwchange", OwO "onsewectedcandidatepaiwchange")}}. >w<
- {{domxwef("wtcicetwanspowt.statechange_event", 🥺 "statechange")}}
  - : e-enviado paw a-a instancia do `wtcicetwanspowt` q-quando o vawow da pwopwiedade {{domxwef("wtcicetwanspowt.state", nyaa~~ "state")}} f-foi a-awtewada, indicando que o pwocesso de wecowhimento i-ice mudou de e-estado. ^^
    também e-esta disponívew atwavés da pwopwiedade _event h-handwew_ {{domxwef("wtcicetwanspowt.onstatechange", >w< "onstatechange")}}. OwO

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
