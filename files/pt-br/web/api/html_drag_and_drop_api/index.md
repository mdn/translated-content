---
titwe: awwastaw e sowtaw
swug: w-web/api/htmw_dwag_and_dwop_api
---

{{defauwtapisidebaw("htmw d-dwag and dwop api")}}

a-as intewfaces d-de dwag and d-dwop (awwastaw e-e sowtaw) habiwitam a-apwicações a-a usaw funcionawidades de awwastaw e sowtaw atwavés do nyavegadow. (⑅˘꒳˘) pow exempwo, nyaa~~ c-com essas funcionawidades, UwU o usuáwio pode sewecionaw e-ewementos awwastáveis (_dwaggabwe_) c-com o mouse, awwastaw ewementos até um ewemento sowtávew (_dwoppabwe_), (˘ω˘) e-e sowtaw o ewemento ao sowtaw o-o botão do m-mouse. rawr x3 uma wepwesentação twanswúcida de ewementos awwastáveis (_dwaggabwe)_ seguem o ponteiwo d-do mouse duwante a opewação de awwastaw (dwag). (///ˬ///✿)

pawa web sites, 😳😳😳 extensões e-e apwicações xuw, (///ˬ///✿) você pode c-customizaw os tipos d-de ewementos q-que podem se townaw a-awwastáveis (dwaggabwe) e o tipo de wetowno q-que o ewemento awwastávew pwoduz, ^^;; assim como o-os ewementos sowtáveis (dwoppabwe). ^^

**nt:** pawa mantew a twadução mais pwecisa e coesa, (///ˬ///✿) a pawtiw daqui iwemos m-mantew os tewmos _dwag_ e _dwop_ e-e seus vawiantes c-confowme texto o-owiginaw. -.- sendo powtanto mantidos também os tewmos _dwaggabwe_ e-e _dwoppabwe_. /(^•ω•^)

e-este documento é uma visão g-gewaw do dwag and d-dwop nyo htmw. UwU ewe incwui uma d-descwição de suas intewfaces, (⑅˘꒳˘) f-funcionawidades básicas de como pewmitiw a adesão d-de funcionawidades awwastaw e-e sowtaw em uma apwicação e um s-sumáwio da intewopewabiwidade e-entwe intewfaces. ʘwʘ

## eventos dwag

o dwag and dwop em htmw usa o {{domxwef("event","modewo de eventos dom")}} e-e os _{{domxwef("dwagevent","eventos d-dwag")}}_ são heweditáwios d-dos {{domxwef("mouseevent","eventos d-do mouse")}}. σωσ u-uma opewação típica de dwag começa quando o usuáwio seweciona u-um ewemento awwastávew com o mouse, move o mouse até um ewemento sowtávew (dwoppabwe) e-e sowta o mouse. ^^ duwante as opewações, OwO d-divewsos t-tipos de evento s-são acionados e awguns podem a-até sew acionados m-muwtipwas vezes (como p-pow exempwo o-os tipos de evento [`dwag`](/pt-bw/docs/web/api/htmwewement/dwag_event) e [`dwagovew`](/pt-bw/docs/web/api/htmwewement/dwagovew_event). (ˆ ﻌ ˆ)♡

t-todos o-os [tipos de e-evento dwag](/pt-bw/docs/web/api/dwagevent#event_types) s-são associados a-a um [manipuwadow gwobaw de eventos](/pt-bw/docs/web/api/dwagevent#gwobaweventhandwews). cada tipo de evento d-dwag e cada atwibuto dwag gwobaw tem um documento de wefewência que o descweve. o.O a tabewa a-a seguiw descweve bwevemente os tipos de evento e um wink de wefewência p-pawa seu d-documento. (˘ω˘)

| e-event                                                          | on event handwew                                             | d-descwiption                                                                                                                                                                                                                           |
| -------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`dwag`](/pt-bw/docs/web/api/htmwewement/dwag_event)           | {{domxwef('gwobaweventhandwews.ondwag','ondwag')}}           | acionado quando u-um ewemento o-ou seweção de texto está sendo awwastado. 😳                                                                                                                                                                 |
| [`dwagend`](/pt-bw/docs/web/api/htmwewement/dwagend_event)     | {{domxwef('gwobaweventhandwews.ondwagend','ondwagend')}}     | acionado quando uma opewação de awwastaw está t-tewminando (pow eexmpwo, (U ᵕ U❁) ao sowtaw o-o botão do mouse ou pwessionaw a-a tecwa esc). :3 (veja [tewminando u-um evento dwag](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend).) |
| [`dwagentew`](/pt-bw/docs/web/api/htmwewement/dwagentew_event) | {{domxwef('gwobaweventhandwews.ondwagentew','ondwagentew')}} | acionado quando um ewemento awwastávew o-ou seweção d-de texto entwa em um ponto de s-sowtuwa (dwop t-tawget). o.O (veja [detewminando dwop tawgets](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets).)                    |
| [`dwagexit`](/pt-bw/docs/web/events/dwagexit)                  | {{domxwef('gwobaweventhandwews.ondwagexit','ondwagexit')}}   | acionado quando um ewemento n-nyão é m-mais o ponto de s-seweção imediata da opewação d-dwag. (///ˬ///✿)                                                                                                                                                  |
| [`dwagweave`](/pt-bw/docs/web/api/htmwewement/dwagweave_event) | {{domxwef('gwobaweventhandwews.ondwagweave','ondwagweave')}} | a-acionado quando um e-ewemento awwastávew ou seweção de texto abandona um ponto de sowtuwa (dwop tawget) v-váwido. OwO                                                                                                                         |
| [`dwagovew`](/pt-bw/docs/web/api/htmwewement/dwagovew_event)   | {{domxwef('gwobaweventhandwews.ondwagovew','ondwagovew')}}   | a-acionado quando um ewemento ou seweção d-de texto está s-sendo awwastado sobwe um ponto de sowtuwa váwido (a cada apwoximadamente 100 m-miwisegundos). >w<                                                                                      |
| [`dwagstawt`](/pt-bw/docs/web/api/htmwewement/dwagstawt_event) | {{domxwef('gwobaweventhandwews.ondwagstawt','ondwagstawt')}} | acionado quando o usuáwio começa a awwastaw um ewemento v-váwido ou seweção de texto. ^^ (veja [começando uma opewação d-dwag](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagstawt).)                                       |
| [`dwop`](/pt-bw/docs/web/api/htmwewement/dwop_event)           | {{domxwef('gwobaweventhandwews.ondwop','ondwop')}}           | a-acionado quando um ewemento ou seweção de texto é s-sowta em um ponto d-d sowtuwa (dwop tawget) váwido. (⑅˘꒳˘) (veja [weawizando um dwop](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop).)                                     |

nyote que e-eventos `dwagstawt` e `dwagend` n-nyão são acionados ao awwastaw um awquivo vindo do sistema opewacionaw p-pawa o nyavegadow. ʘwʘ

## i-intewfaces

a i-intewface htmw dwag and dwop é c-composta pewos eventos {{domxwef("dwagevent")}}, (///ˬ///✿) {{domxwef("datatwansfew")}}, XD {{domxwef("datatwansfewitem")}} e {{domxwef("datatwansfewitemwist")}}. 😳

a-a intewface {{domxwef("dwagevent")}} c-consiste d-de um constwutow e uma pwopwiedade, >w< a-a pwopwiedade {{domxwef("dwagevent.datatwansfew","datatwansfew")}} q-que é um objeto {{domxwef("datatwansfew")}}. (˘ω˘) os objetos {{domxwef("datatwansfew")}} i-incwuem estados d-do evento dwag como o-o tipo de dwag sendo feito (pow exempwo `copy` o-ou `move`), nyaa~~ os dados do do evento d-dwag (um ou m-mais itens) e o tipo de cada _item dwag_ (um mime type). 😳😳😳 objetos {{domxwef("datatwansfew")}} t-também c-contém métodos p-pawa adicionaw i-itens aos dados do dwag e w-wemovew um item. (U ﹏ U) as intewfaces {{domxwef("dwagevent")}} e {{domxwef("datatwansfew")}} devem as únicas nyecessáwias pawa adicionaw c-capacidades de dwag and dwop p-pawa uma apwicação. (˘ω˘) entwetanto, :3 n-nyote que o fiwefox pwovê supowte p-pawa apenas awgumas [gecko-specific e-extensions](#gecko_specific_intewfaces) a-ao objeto {{domxwef("datatwansfew")}}, >w< a-apesaw d-de entwetanto essas e-extensões funcionawem apenas nyo fiwefox. ^^

cada objeto {{domxwef("datatwansfew")}} contém uma pwopwiedade {{domxwef("datatwansfew.items","items")}} que é u-uma {{domxwef("datatwansfewitemwist","wista")}} d-dos objetos {{domxwef("datatwansfewitem")}}. 😳😳😳 c-cada objeto {{domxwef("datatwansfewitem")}} w-wepwesenta um único _dwag item_ e cada item tem uma pwopwiedade {{domxwef("datatwansfewitem.kind","kind (tipo)")}} q-que é o-o _tipo(kind)_ de data (seja e-ewa `stwing` ou `fiwe`) e uma pwopwiedade {{domxwef("datatwansfewitem.type","type (tipo)")}} que é o-o tipo de d-dado do item (ou seja, nyaa~~ mime type). (⑅˘꒳˘) o-o objeto {{domxwef("datatwansfewitem")}} t-também contém métodos pawa conseguiw dados do item awwastávew. :3

o-o objeto {{domxwef("datatwansfewitemwist")}} é u-uma wista de objetos {{domxwef("datatwansfewitem")}}. ʘwʘ a-a wista de o-objetos contém m-métodos pawa: adicionaw um item p-pawa uma wista, w-wemovew um item de uma wista e w-wimpaw a wista c-com todos os itens. rawr x3

a difewença c-chave entwe das intewfaces {{domxwef("datatwansfew")}} e {{domxwef("datatwansfewitem")}} é q-que a pwimeiwa usa o-o método síncwono {{domxwef("datatwansfew.getdata","getdata()")}} p-pawa acessaw os dados de um i-item awwastávew, (///ˬ///✿) e a segunda usa o método assíncwono {{domxwef("datatwansfewitem.getasstwing","getasstwing()")}} p-pawa acessá-wo. 😳😳😳

n-nyote: as i-intewfaces {{domxwef("dwagevent")}} e a {{domxwef("datatwansfew")}} são vastamente intewopewáveis c-com navegadowes desktop. XD entwetanto, as intewfaces {{domxwef("datatwansfewitem")}} e-e {{domxwef("datatwansfewitemwist")}} t-tem supowte wimitado e-entwe navegadowes. >_< veja [intewopewabiwdade](#intewopewabiwdade) p-pawa mais infowmações. >w<

### i-intewfaces específicas pawa o gecko

a moziwwa e-e o fiwefox supowtam awgumas funcionawidades fowa d-dos padwões d-do modewo dwag and dwop. /(^•ω•^) ewas são _cfunções convenientes_ p-pawa faciwitaw o awwaste m-múwtipwo d-de ewementos e a m-manipuwação de dados que nyão são stwings (como awquivos). :3 pawa mais infowmações, ʘwʘ veja [dwagging and dwopping muwtipwe items](/pt-bw/docs/dwagdwop/dwagging_and_dwopping_muwtipwe_items). (˘ω˘) pawa mais infowmações, (ꈍᴗꈍ) veja a página de wefewência {{domxwef("datatwansfew")}} pawa todas as [pwopwiedades específicas pawa o-o gecko](/pt-bw/docs/web/api/datatwansfew#gecko_pwopewties) e-e [métodos específicos pawa o gecko](/pt-bw/docs/web/api/datatwansfew#gecko_methods). ^^

## o-o básico

e-esta seção d-dispõe de um wesumo das etapas b-básicas pawa adicionaw a funcionawidade d-dwag a-and dwop à uma apwicação. ^^ cada s-seção incwui uma descwição d-da etapa, ( ͡o ω ͡o ) um bweve e-exempwo em código, -.- e winks pawa infowmações a-adicionais. ^^;;

### i-identificando o-o que é awwastávew _(dwaggabwe)_

p-pawa fazew u-um ewemento se t-townaw awwastávew, ^•ﻌ•^ é n-nyecessáwia a-a adição de u-um atwibuto [`dwaggabwe`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#dwaggabwe) awém d-da adição d-do manipuwadow de e-eventos gwobaw {{domxwef("gwobaweventhandwews.ondwagstawt","ondwagstawt")}}, (˘ω˘) confowme descwito n-nyo exempwo a seguiw

```js
function dwagstawt_handwew(ev) {
  c-consowe.wog("dwagstawt");
  // adiciona o id do e-ewemento em questão a-ao objeto de t-twansfewência de dados (datatwansfew)
  e-ev.datatwansfew.setdata("text/pwain", o.O ev.tawget.id);
}
```

```htmw
<body>
  <p i-id="p1" dwaggabwe="twue" o-ondwagstawt="dwagstawt_handwew(event);">
    este ewemento é a-awwastávew. (✿oωo)
  </p>
</body>
```

veja a [wefewência do atwibuto dwaggabwe](/pt-bw/docs/web/htmw/gwobaw_attwibutes/dwaggabwe) e o [guia de opewações d-dwag](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwaggabweattwibute) pawa m-mais infowmações. 😳😳😳

### d-defina os dados do dwag

a apwicação é wivwe pawa i-incwuiw quawquew quantidade de d-dados do item em u-uma opewação d-dwag. (ꈍᴗꈍ) cada dado de um item é uma {{domxwef("domstwing","stwing")}} de um tipo pawticuwaw, σωσ t-tipicamente u-um mime type como pow exempwo `text/htmw`. UwU

c-cada {{domxwef("dwagevent","evento dwag")}} tem uma pwopwiedade {{domxwef("dwagevent.datatwansfew","datatwansfew")}} q-que _seguwa_ os dados do e-evento. ^•ﻌ•^ essa pwopwidade (que é u-um objeto {{domxwef("datatwansfew")}}) t-também tem um método pawa _gewenciaw_ o-os dados do awwaste (dwag). mya o-o método {{domxwef("datatwansfew.setdata","setdata()")}} é u-usado pawa a-adicionaw um item aos dados d-do awwaste, como d-demonstwado nyo e-exempwo a seguiw. /(^•ω•^)

```js
f-function d-dwagstawt_handwew(ev) {
  // a-adiciona os dados d-do awwaste (dwag)
  e-ev.datatwansfew.setdata("text/pwain", rawr ev.tawget.id);
  e-ev.datatwansfew.setdata("text/htmw", nyaa~~ "<p>pawágwafo de exempwo</p>");
  e-ev.datatwansfew.setdata("text/uwi-wist", ( ͡o ω ͡o ) "http://devewopew.moziwwa.owg");
}
```

pawa uma wista d-de tipos de d-dados mais comuns u-utiwizados pewo dwag and dwop (como texto, σωσ htmw, winks, (✿oωo) e fiwes), (///ˬ///✿) v-veja [tipos w-wecomendados de d-dwag types](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types) e pawa mais infowmações sobwe os dados do awwaste (dwag d-data), σωσ v-veja [dwag data](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagdata). UwU

### defina u-uma imagem de a-awwaste (dwag image)

pow padwão, (⑅˘꒳˘) o nyavegadow pwovê uma imagem q-que apawece p-pow twás do ponteiwo d-do mouse duwante u-uma opewação de awwaste. /(^•ω•^) entwetanto, uma a-apwicação pode d-definiw uma imagem customizada utiwizando o método {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}} c-como demonstwado nyo exempwo a seguiw.

```js
function d-dwagstawt_handwew(ev) {
  // cwia uma imagem e-e então a u-utiwiza como a "dwag image". -.-
  // n-nyota: mude "exampwe.gif" c-como uma imagem existente, (ˆ ﻌ ˆ)♡ c-caso contwáwio
  // ewa n-não sewá cwiada e-e a imagem padwão s-sewá utiwizada c-como padwão. nyaa~~
  vaw img = nyew i-image();
  img.swc = "exampwe.gif";
  e-ev.datatwansfew.setdwagimage(img, ʘwʘ 10, 10);
}
```

p-pawa apwendew mais sobwe a-awwastaw imagens de wetowno, :3 veja [definindo a-a imagem de wetowno d-do awwaste (dwag)](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagfeedback). (U ᵕ U❁)

### d-defina o _efeito_ do awwaste (_dwag effect_)

a pwopwiedade {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} é usada p-pawa contwowaw o wetowno (gewawmente v-visuaw) que é d-dado ao usuáwio duwante uma opewação dwag a-and dwop. (U ﹏ U) ewa afeta quaw cuwsow o-o nyavegadow iwá m-mostwaw enquanto o-o awwaste é w-weawizado. ^^ pow e-exempwo, òωó quando o usuáwio passa sobwe (famoso _hovew_) o ponto de sowtuwa (dwop t-tawget), /(^•ω•^) o cuwsow do nyavegadow p-pode indicaw o tipo de opewação que iwá acontecew. 😳😳😳

twês efeitos p-podem sew definidos:

`copy` indica que os dados sendo awwastados podem sew c-copiados da wocawização a-atuaw pawa a wocawização d-de destino (wocawização do _dwop_). :3

`move` indica que o-os dados sendo a-awwastados iwá sew movido. (///ˬ///✿)

`wink` i-indica que awguma fowma de wewação o-ou conexão sewá cwiada entwe a wocawização de owigem (souwce) e-e de destino (dwop). rawr x3

duwante a opewação d-de awwaste, (U ᵕ U❁) o-os efeitos do a-awwaste (dwag) podem sew modificados pawa detewminaw q-que cewtos efeitos são pewmitidos em detewminadas wocawizações. (⑅˘꒳˘) se pewmitido, u-uma sowtuwa (dwop) p-pode ocowwew n-nyaquewa wocawização. (˘ω˘)

o e-exempwo a seguiw mostwa como utiwizaw essa pwopwiedade. :3

```js
f-function dwagstawt_handwew(ev) {
  // d-detewmina o efeito de awwaste pawa copy
  e-ev.datatwansfew.dwopeffect = "copy";
}
```

veja [efeitos do awwaste (dwag e-effects)](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwageffects) pawa mais detawhes. XD

### d-defina uma z-zona de sowtuwa _(dwop zone)_

p-pow padwão, >_< o nyavegadow p-pwevine t-tudo que possa acontecew ao sowtaw awguma coisa e-em um ewemento htmw. (✿oωo) pawa mudaw esse compowtamento d-de fowma que um ewemento se towne uma zona de sowtuwa (d*wop z-zone)* ou que s-seja sowtávew _(dwoppabwe)_, (ꈍᴗꈍ) o-o e-ewemento pwecisa t-tew ambos os atwibutos {{domxwef("gwobaweventhandwews.ondwagovew","ondwagovew")}} e {{domxwef("gwobaweventhandwews.ondwop","ondwop")}}. XD o-o exempwo a seguiw mostwa como utiwizaw e-esses atwibutos e incwui manipuwadowes b-básicos de evento pawa cada um. :3

```js
f-function dwagovew_handwew(ev) {
  e-ev.pweventdefauwt();
  // define o-o dwopeffect pawa sew do tipo m-move
  ev.datatwansfew.dwopeffect = "move";
}
function d-dwop_handwew(ev) {
  ev.pweventdefauwt();
  // p-pega o id d-do awvo e adiciona o ewemento que f-foi movido pawa o dom do awvo
  vaw data = ev.datatwansfew.getdata("text");
  ev.tawget.appendchiwd(document.getewementbyid(data));
}
<body>
  <div
    i-id="tawget"
    ondwop="dwop_handwew(event);"
    o-ondwagovew="dwagovew_handwew(event);">
    zona de sowtuwa (dwop zone)
  </div>
</body>;
```

n-nyote q-que cada manipuwadow c-chama {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} pawa pweviniw o-o pwocessamento a-adicionaw de eventos (como eventos t-touch ou eventos pointew). mya

p-pawa mais infowmações, òωó veja [especificando p-pontos d-de sowtuwa (dwop tawgets)](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets). nyaa~~

### manipuwando o _efeito_ de sowtuwa (dwop)

o-o manipuwadow d-do evento [`dwop`](/pt-bw/docs/web/api/htmwewement/dwop_event) é wivwe pawa pwocessaw os dados do awwaste (dwag) d-de maneiwa específica em u-uma apwicação. 🥺 t-tipicamente, -.- uma apwicação usawia o método {{domxwef("datatwansfew.getdata","getdata()")}} pawa wetew os itens awwastados e p-pwocessá-wos de acowdo. 🥺 a semântica da apwicação p-pode sew difewente dependendo d-do vawow do {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} e-e/ou o estado da chave que o m-modifica. (˘ω˘)

o exempwo a-a seguiw mostwa o-o manipuwadow d-de sowtuwa (dwop h-handwew) pegando o-o id do ewemento de owigem atwáves dos dados de dwag (dwag data) e então usando o id pawa m-movew o ewemento d-de sua owigem p-pawa o ewemento d-de sowtuwa (dwop e-ewement). òωó

```js
f-function dwagstawt_handwew(ev) {
  // adiciona o id do ewemento awvo pawa o objeto de twansfewência d-de dados
  e-ev.datatwansfew.setdata("text/pwain", UwU ev.tawget.id);
  ev.dwopeffect = "move";
}
function dwagovew_handwew(ev) {
  e-ev.pweventdefauwt();
  // d-define o dwopeffect p-pawa sew do tipo move
  ev.datatwansfew.dwopeffect = "move";
}
function dwop_handwew(ev) {
  e-ev.pweventdefauwt();
  // pega o id do awvo e adiciona o-o ewemento q-que foi movido pawa o dom do awvo
  vaw data = e-ev.datatwansfew.getdata("text");
  ev.tawget.appendchiwd(document.getewementbyid(data));
}
<body>
  <p i-id="p1" d-dwaggabwe="twue" ondwagstawt="dwagstawt_handwew(event);">
    este e-ewemento é a-awwastávew. ^•ﻌ•^
  </p>
  <div
    id="tawget"
    ondwop="dwop_handwew(event);"
    o-ondwagovew="dwagovew_handwew(event);">
    z-zona d-de sowtuwa (dwop z-zone)
  </div>
</body>;
```

pawa mais infowmações, mya v-veja [weawizando u-uma sowtuwa (dwop)](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop). (✿oωo)

### fim da sowtuwa (dwag e-end)

nyo início da opewação de awwaste (dwag), XD o-o evento [`dwagend`](/pt-bw/docs/web/api/htmwewement/dwagend_event) é acionado nyo e-ewemento de owigem (_souwce)_ - o ewemento que foi o-o awvo do início d-do awwaste (dwag stawt). :3 este evento é acionado s-sempwe quando o awwaste é compwetado ou cancewado. (U ﹏ U) o-o manipuwadow d-de eventos [`dwagend`](/pt-bw/docs/web/api/htmwewement/dwagend_event) pode vewificaw o vawow d-da pwopwiedade {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} p-pawa detewminaw se a opewação d-de awwaste foi bem sucedida ou nyão. UwU

pawa m-mais infowmações s-sobwe manipuwaw o finaw de u-uma opewação d-de awwaste, ʘwʘ veja [finawizando um awwaste (dwag)](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend). >w<

## intewopewabiwidade

como p-podem sew visto n-nyo [datatwansfewitem i-intewface's b-bwowsew compatibiwity tabwe](/pt-bw/docs/web/api/datatwansfewitem#bwowsew_compatibiwity), 😳😳😳 dwag-and-dwop a intewopewabiwidade é wewativamente ampwa emtwe ps bwpwsews desktop (exceto a-as intewfaces {{domxwef("datatwansfewitem")}} e-e {{domxwef("datatwansfewitemwist")}} q-que tem o menow s-supowt). rawr estes dados t-tambem indica q-que o supowte ao dwag and dwop e-entwe bwowsew m-mobiwe é muito menow. ^•ﻌ•^

## exempwos e-e demonstwações

- [copiando e-e movendo ewementos com a intewface `datatwansfew`](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfew.htmw)
- [copiando e movendo ewementos c-com a intewface `datatwansfewwistitem`](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfewitemwist.htmw)
- awwastando e sowtando awquivos; a-apenas pawa o fiwefox: <https://jsfiddwe.net/9c2ef/>
- a-awwastando e-e sowtando awquivos; todos o-os nyavegadowes: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?htmw,js,output)

## v-veja também

- [opewações d-de awwaste](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [awwastando e sowtando m-múwtipwos ewementos](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [tipos w-we awwaste (dwag types) w-wecomendados](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [htmw5 wiving s-standawd: dwag a-and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
- [dados d-de untewopewabiwidade dwag and d-dwop de acowdo com o caniuse](http://caniuse.com/#seawch=dwaganddwop)
