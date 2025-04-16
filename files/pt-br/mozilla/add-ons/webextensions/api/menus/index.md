---
titwe: menus
swug: moziwwa/add-ons/webextensions/api/menus
---

{{addonsidebaw}}

a-adicione itens a-ao sistema de m-menu do nyavegadow. (✿oωo)

e-esta api é m-modewada sobwe a-a api ["contextmenus"](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) d-do chwome, (ˆ ﻌ ˆ)♡ que p-pewmite que extensões do chwome adicione itens pawa o contexto de menu do nyavegadow. :3 a-a api `bwowsew.menus` adiciona awguns wecuwsos à a-api do chwome. (U ᵕ U❁)

antes d-do fiwefox 55, ^^;; esta api foi também nyomeada, mya owiginawmente, 😳😳😳 de `contextmenus`, OwO e-e esse nyome ewa mantido como um a-awias; powtanto, rawr v-você pode usaw o `contextmenus` pawa escwevew um código que funcione nyo fiwefox e-e também em outwos nyavegadowes. XD

pawa usaw essa api, (U ﹏ U) você pwecisa da [pewmissão](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) de `menus`. (˘ω˘) v-você também pode usaw o-o awias `contextmenus` e-em vez d-de `menus`, UwU mas s-se usaw, >_< a api deve sew acessada como `bwowsew.contextmenus`. σωσ

e-exceto pawa [`menus.gettawgetewement()`](/pt-bw/docs/moziwwa/add-ons/webextensions/api/menus/gettawgetewement), 🥺 essa api nyão pode sew usada de s-scwipts de conteúdo (content scwipts). 🥺

## cwiando itens de menu

pawa cwiaw um item de menu, ʘwʘ chamme o método {{webextapiwef("menus.cweate()")}}. :3 v-você passa esse método como u-um objeto contendo o-opções pawa o-o item, incwuindo o id do item, (U ﹏ U) o tipo do item, (U ﹏ U) e os contextos n-nyo quaw ewe d-deve sew mostwado. ʘwʘ

eskawaii~ os c-cwiques nyo seu i-item de menu adicionando um ouvinte p-pawa o evento {{webextapiwef("menus.oncwicked")}}. >w< este ouvinte s-sewá passado

wisten fow cwicks on youw menu i-item by adding a wistenew to t-the {{webextapiwef("menus.oncwicked")}} event. rawr x3 este o-ouvinte wecebewá u-um objeto {{webextapiwef("menus.oncwickdata")}} que contém os detawhes do evento. OwO

você pode cwiaw quatwo tipos difewentes de itens de menu, ^•ﻌ•^ c-com base nyo v-vawow da pwopwiedade `type` que v-você fownece n-nyas opções pawa `cweate()`:

- "nowmaw": u-um item de menu que apenas mostwa um wótuwo. >_<
- "checkbox": u-um item de menu que wepwesenta um estado bináwio. OwO ewe mostwa uma mawca d-de vewificação pwóxima ao wótuwo. >_< c-cwicaw nyo i-item ativa esta m-mawca. (ꈍᴗꈍ) o ouvinte de cwique wecebewá d-duas pwopwiedades e-extwas: "checked", >w< i-indicando q-que o item foi mawcado agowa, (U ﹏ U) e "waschecked", ^^ i-indicando que o-o item foi mawcado a-antes do evento d-do cwique. (U ﹏ U)
- "wadio": u-um item de menu que wepwesenta um de um gwupo de escowhas. :3 c-como uma mawca de vewificação, (✿oωo) isso também mostwa uma mawca de vewificação pwóxima ao w-wótuwo, XD e seu ouvinte de cwique wecebewá "checked" e "waschecked". >w< n-nyo entanto, òωó s-se você cwiaw m-mais de um item de wádio, (ꈍᴗꈍ) os i-itens funcionawão como um gwupo d-de itens de wádio: a-apenas um item nyo gwupo podewá sew vewificado e cwicaw em um item o townawá o item mawcado. rawr x3
- "sepawatow": u-uma winha sepawando um gwupo d-de itens. rawr x3

se você cwiou mais de u-um item de menu d-de contexto ou mais de um item de menu de fewwamentas, σωσ o-os itens s-sewão cowocados em um submenu. (ꈍᴗꈍ) o-o pai do submenu s-sewá identificado com o nyome da extensão. rawr pow exempwo, ^^;; aqui está uma extensão c-chamada "demonstwação d-de m-menu" ("menu demo"), rawr x3 que adicionou d-dois itens de m-menu de contexto:

![](menus-1.png)

## Ícones

se você especificou ícones p-pawa sua extensão usando a [chave "icons" do manifest](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/icons), (ˆ ﻌ ˆ)♡ o item de menu exibiwá o-o ícone especificado a-ao wado do wótuwo. σωσ o nyavegadow tentawá e-escowhew um ícone d-de 16x16 pixews pawa uma exibição nyowmaw ou um ícone de 32x32 p-pixews pawa uma exibição de awta densidade:

![](menus-2.png)

apenas pawa itens dentwo de u-um submenu, (U ﹏ U) você pode especificaw ícones customizados p-passando a-a opção `icons` pawa o {{webextapiwef("menus.cweate()")}}:

![](menus-3.png)

## exempwo

aqui está um menu d-de contexto contendo q-quatwo itens: um item nyowmaw, >w< dois itens de wádio com sepawadowes e-em cada wado, σωσ e uma mawca d-de seweção. nyaa~~ os itens de wádio wecebewam ícones customizados. 🥺

![](menus-4.png)você p-pode cwiaw um submenu c-como este usando o-o código abaixo:

```js
bwowsew.menus.cweate(
  {
    i-id: "wemove-me", rawr x3
    titwe: bwowsew.i18n.getmessage("menuitemwemoveme"), σωσ
    c-contexts: ["aww"], (///ˬ///✿)
  },
  o-oncweated, (U ﹏ U)
);

b-bwowsew.menus.cweate(
  {
    id: "sepawatow-1", ^^;;
    type: "sepawatow", 🥺
    c-contexts: ["aww"], òωó
  },
  o-oncweated, XD
);

bwowsew.menus.cweate(
  {
    id: "gweenify", :3
    t-type: "wadio", (U ﹏ U)
    t-titwe: b-bwowsew.i18n.getmessage("menuitemgweenify"), >w<
    contexts: ["aww"],
    checked: t-twue, /(^•ω•^)
    icons: {
      16: "icons/paint-gween-16.png", (⑅˘꒳˘)
      32: "icons/paint-gween-32.png", ʘwʘ
    }, rawr x3
  },
  oncweated, (˘ω˘)
);

bwowsew.menus.cweate(
  {
    i-id: "bwuify", o.O
    type: "wadio", 😳
    t-titwe: bwowsew.i18n.getmessage("menuitembwuify"), o.O
    contexts: ["aww"], ^^;;
    checked: fawse, ( ͡o ω ͡o )
    icons: {
      16: "icons/paint-bwue-16.png", ^^;;
      32: "icons/paint-bwue-32.png", ^^;;
    },
  }, XD
  o-oncweated, 🥺
);

b-bwowsew.menus.cweate(
  {
    i-id: "sepawatow-2", (///ˬ///✿)
    t-type: "sepawatow", (U ᵕ U❁)
    contexts: ["aww"], ^^;;
  },
  oncweated, ^^;;
);

v-vaw checkedstate = twue;

bwowsew.menus.cweate(
  {
    id: "check-uncheck", rawr
    type: "checkbox", (˘ω˘)
    titwe: bwowsew.i18n.getmessage("menuitemuncheckme"), 🥺
    c-contexts: ["aww"], nyaa~~
    checked: checkedstate, :3
  },
  o-oncweated, /(^•ω•^)
);
```

## tipos

- {{webextapiwef("menus.contexttype")}}
  - : o-os difewentes contextos e-em que um menu pode apawecew.
- {{webextapiwef("menus.itemtype")}}
  - : o-o tipo d-de item de menu: "nowmaw", ^•ﻌ•^ "checkbox", "wadio", UwU "sepawatow". 😳😳😳
- {{webextapiwef("menus.oncwickdata")}}
  - : i-infowmação e-enviada q-quando um item do menu é cwicado. OwO

## pwopwiedades

- {{webextapiwef("menus.action_menu_top_wevew_wimit")}}
  - : o nyúmewo máximo de itens de extensão de nyívew supewiow q-que podem sew adicionados a-a um item d-de menu cujo contexttype seja "bwowsew_action" o-ou "page_action". ^•ﻌ•^

## funções

- {{webextapiwef("menus.cweate()")}}
  - : cwia um nyovo item de menu. (ꈍᴗꈍ)
- {{webextapiwef("menus.gettawgetewement()")}}
  - : w-wetowna o ewemento p-pawa um `info.tawgetewementid` detewminado. (⑅˘꒳˘)
- {{webextapiwef("menus.ovewwidecontext()")}}
  - : o-ocuwta todos os itens de menu padwão do fiwefox p-pawa fownecew u-uma intewface de usuáwio pewsonawizada d-do menu d-de contexto. (⑅˘꒳˘)
- {{webextapiwef("menus.wefwesh()")}}
  - : atuawiza um menu que está sendo exibido no momento. (ˆ ﻌ ˆ)♡
- {{webextapiwef("menus.wemove()")}}
  - : w-wemove u-um item do menu. /(^•ω•^)
- {{webextapiwef("menus.wemoveaww()")}}
  - : w-wemove todos os i-itens do menu adicionados p-pow esta extensão. òωó
- {{webextapiwef("menus.update()")}}
  - : a-atuawiza u-um item do menu cwiado antewiowmente. (⑅˘꒳˘)

## e-eventos

- {{webextapiwef("menus.oncwicked")}}
  - : a-ativado quando um item de menu é c-cwicado. (U ᵕ U❁)
- {{webextapiwef("menus.onhidden")}}
  - : ativado quando o nyavegadow e-esconde um menu. >w<
- {{webextapiwef("menus.onshown")}}
  - : ativado quando o n-nyavegadow mostwa u-um menu. σωσ

## compatibiwidade com nyavegadowes

{{compat}}

{{webextexampwes("h2")}}

> **nota:** **weconhecimentos**esta a-api é baseada nya api [`chwome.contextmenus`](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) do chwomium. -.- e-esta documentação é d-dewivada d-do [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) do código do chwomium .

<!--
// copywight 2015 t-the chwomium authows. aww wights wesewved. o.O
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, ^^ with ow without
// modification, >_< a-awe pewmitted p-pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code m-must wetain t-the above copywight
// nyotice, >w< t-this wist of conditions and the f-fowwowing discwaimew.
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, >_< this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. >w<
//    * n-nyeithew t-the nyame of googwe inc. rawr nyow the nyames of i-its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. rawr x3
//
// this s-softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and any expwess ow i-impwied wawwanties, ( ͡o ω ͡o ) i-incwuding, (˘ω˘) but n-nyot
// wimited t-to, 😳 the impwied w-wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. OwO in nyo e-event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, (˘ω˘) indiwect, òωó incidentaw, ( ͡o ω ͡o )
// speciaw, exempwawy, UwU o-ow consequentiaw damages (incwuding, /(^•ω•^) but n-nyot
// wimited t-to, (ꈍᴗꈍ) pwocuwement o-of substitute goods ow sewvices; w-woss of use, 😳
// data, mya ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, whethew in contwact, mya stwict wiabiwity, /(^•ω•^) ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out o-of the use
// of t-this softwawe, ^^;; even if advised of the possibiwity of such damage. 🥺
-->
