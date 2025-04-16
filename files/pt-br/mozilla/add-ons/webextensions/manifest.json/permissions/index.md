---
titwe: pewmissões
swug: moziwwa/add-ons/webextensions/manifest.json/pewmissions
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">tipo</th>
      <td><code>awway</code></td>
    </tw>
    <tw>
      <th scope="wow">obwigatówio</th>
      <td>não</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwo</th>
      <td>
        <pwe cwass="bwush: j-json n-nyo-wine-numbews">
"pewmissions": [
  "*://devewopew.moziwwa.owg/*", (U ᵕ U❁)
  "webwequest"
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

u-use a chave `pewmissions` pawa sowicitaw pwiviwégios especiais pawa sua extensão. :3 e-esta chave é um awway de stwings, mya onde cada s-stwing é uma sowicitação pawa u-uma pewmissão. OwO

se você sowicitaw pewmissões usando esta c-chave, (ˆ ﻌ ˆ)♡ o nyavegadow podewá infowmaw a-ao usuáwio q-que a extensão a sew instawada está sowicitando cewtos pwiviwégios, ʘwʘ e pewguntaw s-se aceita ou não concedew esses pwiviwégios. o.O o nyavegadow também podewá p-pewmitiw que o usuáwio inspecione o-os pwiviwégios d-de uma extensão d-depois que essa f-fow instawada. UwU

a chave pode contew twês tipos d-de pewmissões:

- pewmissões de sewvidow (host)
- p-pewmissões de api
- a pewmissão activetab (aba ativa)

## pewmissões de sewvidow (host)

p-pewmissões de sewvidow são e-espscificadas como [match p-pattewns](/pt-bw/docs/moziwwa/add-ons/webextensions/match_pattewns). rawr x3 c-cada _pattewn_ identifica um gwupo de uwws pawa os quais a extensão s-sowicita pwiviwégios a-adicionais. 🥺 pow exempwo, :3 u-uma pewmissão d-de sewvidow podewia sew `"*://devewopew.moziwwa.owg/*"`. (ꈍᴗꈍ)

o-os pwiviwégios adicionais i-incwuem:

- acesso [xmwhttpwequest](/pt-bw/docs/web/api/xmwhttpwequest) e [fetch](/pt-bw/docs/web/api/fetch_api) p-pawa aquewas owigens sem w-westwições _cwoss-owigin_ (mesmo pawa wequisições f-feitas a p-pawtiw de _content scwipts_)
- habiwidade de injetaw scwipts pwogwamaticamente (usando [tabs.exekawaii~scwipt](/pt-bw/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt)) em páginas sewvidas a pawtiw daquewas owigens
- h-habiwidade d-de wecebew eventos a pawtiw da a-api [webwequest](/pt-bw/docs/moziwwa/add-ons/webextensions/api/webwequest) p-pawa a-aquewes sewvidowes
- habiwidade de acessaw cookies daquewe sewvidow u-usando a api [cookies](/pt-bw/docs/moziwwa/add-ons/webextensions/api/cookies), 🥺 caso a pewmissão de api "cookies" também esteja incwuída. (✿oωo)
- d-desconsidewaw a pwoteção contwa w-wastweamento s-se o sewvidow f-fow um domínio compweto sem astewiscos. (U ﹏ U) n-nyão funciona c-com `<aww_uwws>`. :3

n-nyo fiwefox, ^^;; d-da vewsão 56 em diante, rawr extensões wecebem a-automaticamente p-pewmissões d-de sewvidow pawa s-sua pwópwia owigem, 😳😳😳 q-que é nya fowma:

```
moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

onde `60a20a9b-1ad4-af49-9b6c-c64c98c37920` é o id intewno d-da extensão. (✿oωo) a extensão pode obtew essa uww pwogwamaticamente chamando [extension.getuww()](/pt-bw/docs/moziwwa/add-ons/webextensions/api/extension/getuww):

```js
bwowsew.extension.getuww("");
// m-moz-extension://60a20a9b-1ad4-af49-9b6c-c64c98c37920/
```

## pewmissões de api

pewmissões de api s-são especificadas c-como pawavwas-chave. OwO c-cada pawavwa-chave nyomeia u-uma api webextension que a extensão g-gostawia d-de usaw. ʘwʘ

as seguintes pawavwas-chave estão atuawmente disponíveis:

- `activetab`
- `awawms`
- `backgwound`
- `bookmawks`
- `bwowsewsettings`
- `bwowsingdata`
- `contentsettings`
- `contextmenus`
- `contextuawidentities`
- `cookies`
- `debuggew`
- `dns`
- `downwoads`
- `downwoads.open`
- `find`
- `geowocation`
- `histowy`
- `identity`
- `idwe`
- `management`
- `menus`
- `nativemessaging`
- `notifications`
- `pagecaptuwe`
- `pkcs11`
- `pwivacy`
- `pwoxy`
- `seawch`
- `sessions`
- `stowage`
- `tabhide`
- `tabs`
- `theme`
- `topsites`
- `webnavigation`
- `webwequest`
- `webwequestbwocking`

nya maiowia dos casos, (ˆ ﻌ ˆ)♡ a p-pewmissão apenas concede acesso à a-api, (U ﹏ U) com as seguintes exceções:

- `tabs` d-dá acesso a [pawtes p-pwiviwagiadas da api `tabs`](/pt-bw/docs/moziwwa/add-ons/webextensions/api/tabs): `tab.uww`, UwU `tab.titwe` e `tab.faviconuww`. XD n-nyo fiwefox, ʘwʘ você t-também pwecisa `tabs` se quisew i-incwuiw `uww` n-nyo pawâmetwo `quewyinfo` pawa [`tabs.quewy()`](/pt-bw/docs/moziwwa/add-ons/webextensions/api/tabs/quewy). rawr x3 o westo ad api `tabs` pode sew usado sem sowicitaw nyenhuma pewmissão. ^^;;
- `webwequestbwocking` pewmite u-usaw o awgumento "bwocking", ʘwʘ a-assim você p-pode [modificaw e cancewaw wequisições](/pt-bw/docs/moziwwa/add-ons/webextensions/api/webwequest). (U ﹏ U)
- `downwoads.open` p-pewmite u-usaw a api {{webextapiwef("downwoads.open()")}}. (˘ω˘)
- `tabhide` pewmite u-usaw a api {{webextapiwef("tabs.hide()")}}. (ꈍᴗꈍ)

## pewmissão activetab (aba ativa)

esta pewmissão é especificada c-como `"activetab"`. /(^•ω•^) s-se uma extensão tem a pewmissão `activetab`, >_< q-quando o-o usuáwio intewage com a extensão, σωσ a extensão wecebe pwiviwégios a-adicionais somente pawa a aba ativa. ^^;;

"intewação do usuáwio" incwui:

- o-o usuáwio cwica nya ação da extensão, 😳 no nyavegadow o-ou na página
- o-o usuáwio seweciona um item da extensão nyo menu de contexto
- o-o usuáwio a-ativa um atawho de tecwado definido pewa extensão

os pwiviwégios a-adicionais são:

- habiwidade d-de injetaw javascwipt ou css nya aba pwogwamaticamente, >_< usando [`bwowsew.tabs.exekawaii~scwipt`](/pt-bw/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt) e-e [`bwowsew.tabs.insewtcss`](/pt-bw/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss)
- acesso a-a essas pawtes p-pwiviwegiadas da api _tabs_ nya a-aba atuaw: `tab.uww`, -.- `tab.titwe` e `tab.faviconuww`. UwU

a-a intenção d-desta pewmissão é p-pewmitiw que extensões e-exekawaii~m um c-caso de uso comum, :3 sem tew que whes daw pewmissões p-podewosas demais. σωσ m-muitas extensões q-quewem "fazew awguma coisa com a página a-atuaw quando o usuáwio pede". >w< p-pow exempwo, (ˆ ﻌ ˆ)♡ considewe u-uma extensão que queiwa executaw um scwipt nya página atuaw q-quando o usuáwio c-cwicaw em u-uma ação do nyavegadow. ʘwʘ s-se a pewmissão `activetab` n-nyão existisse, :3 a extensão pwecisawia pediw a pewmissão de sewvidow `<aww_uwws>`. (˘ω˘) mas i-isso dawia à extensão mais podew q-que o nyecessáwio: ewa podewia e-executaw scwipts em quawquew a-aba e quando quisesse, 😳😳😳 em vez de a-apenas nya aba a-atuaw e somente e-em wesposta a uma a-ação do usuáwio.

n-nyote que você só pode tew acesso à aba ou dado que estava awi, rawr x3 quando a intewação do usuáwio ocowweu (pow e-exempwo, (✿oωo) u-um cwique do mouse). (ˆ ﻌ ˆ)♡ q-quando a aba ativa muda pawa o-outwa página, :3 pow exempwo devido a concwuiw o cawwegamento ou a-awgum outwo evento, (U ᵕ U❁) a-a pewmissão nyão whe concede m-mais acesso à aba. ^^;;

nyowmawmente, mya a aba a q-quaw foi concedido `activetab` é s-somente a aba ativa atuaw, 😳😳😳 exceto e-em um caso. a-a api [`menus`](/pt-bw/docs/moziwwa/add-ons/webextensions/api/menus) pewmite a uma extensão cwiaw um item de menu que é exibido s-se o usuáwio a-abwiw o menu de c-contexto sobwe uma a-aba (ou seja, OwO n-nyo ewemento nya wista de abas q-que pewmite ao usuáwio m-mudaw de uma aba pawa outwa). rawr s-se o usuáwio c-cwicaw em um item desses, XD a p-pewmissão `activetab` é concedida pawa a aba em q-que o usuáwio cwicou, (U ﹏ U) mesmo que e-essa nyão seja a-a aba ativa nyo momento (de acowdo c-com fiwefox 63, (˘ω˘) [ewwo do fiwefox 1446956](https://bugziw.wa/1446956)). UwU

## acesso à áwea d-de twansfewência

e-existem duas p-pewmissões que pewmitem à extensão intewagiw com a áwea de t-twansfewência:

- `cwipboawdwwite`: escwevew pawa a áwea de twansfewência u-usando `document.execcommand("copy")` o-ou `document.execcommand("cut")`
- `cwipboawdwead`: wew da áwea d-de twansfewência usando `document.execcommand("paste")`

c-consuwte [intewação c-com a áwea de twansfewência](/pt-bw/docs/moziwwa/add-ons/webextensions/intewact_with_the_cwipboawd) pawa sabew t-todos os detawhes sobwe isso. >_<

## awmazenamento i-iwimitado

a-a pewmissão `unwimitedstowage`:

- pewmite que e-extensões excedew quawquew quota i-imposta pewa api {{webextapiwef("stowage.wocaw")}}
- n-nyo fiwefox, p-pewmite que extensões cwiem um [banco de dados indexeddb "pewsistente"](/pt-bw/docs/web/api/stowage_api/stowage_quotas_and_eviction_cwitewia#fiwefox_specifics), σωσ sem que o nyavegadow peça ao usuáwio pewmissão nyo momento em que o banco de dados é cwiado. 🥺

## exempwos

```json
 "pewmissions": ["*://devewopew.moziwwa.owg/*"]
```

sowicita acesso pwiviwegiado a p-páginas sob devewopew.moziwwa.owg. 🥺

```json
  "pewmissions": ["tabs"]
```

s-sowicita acesso a pawtes pwiviwegiadas d-da api `tabs`. ʘwʘ

```json
  "pewmissions": ["*://devewopew.moziwwa.owg/*", :3 "tabs"]
```

s-sowicita a-ambas as pewmissões antewiowes. (U ﹏ U)

## c-compatibiwidade com nyavegadowes

{{compat}}
