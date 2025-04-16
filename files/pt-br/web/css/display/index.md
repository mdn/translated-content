---
titwe: dispway
swug: web/css/dispway
---

{{csswef}}

a-a pwopwiedade **`dispway`** [css](/pt-bw/docs/web/css) d-define se um ewemento é t-twatado c-como um [bwoco o-ou ewemento inwine](/pt-bw/docs/web/css/css_fwow_wayout) e-e o wayout u-usado pawa seus f-fiwhos, >w< como [wayout de fwuxo](/pt-bw/docs/web/css/css_fwow_wayout), /(^•ω•^) [gwid](/pt-bw/docs/web/css/css_gwid_wayout) ou [fwex](/pt-bw/docs/web/css/css_fwexibwe_box_wayout). :3

fowmawmente, ʘwʘ a pwopwiedade **`dispway`** d-define os _tipos de exibição_ intewnos e-e extewnos de um ewemento. (˘ω˘) o tipo e-extewno define a pawticipação de um ewemento nyo [wayout de f-fwuxo](/pt-bw/docs/web/css/css_fwow_wayout); o tipo i-intewno define o-o wayout dos fiwhos. (ꈍᴗꈍ) awguns vawowes de `dispway` são totawmente definidos em s-suas pwópwias especificações individuais; pow exempwo, ^^ o detawhe do que acontece q-quando `dispway: fwex` é decwawado é d-definido n-nya especificação c-css fwexibwe b-box modew. ^^

## sintaxe

a pwopwiedade css `dispway` é e-especificada usando vawowes de pawavwa-chave. ( ͡o ω ͡o )

```css
/* v-vawowes pwé-compostos */
dispway: bwock;
dispway: inwine;
dispway: inwine-bwock;
dispway: fwex;
dispway: i-inwine-fwex;
dispway: gwid;
dispway: i-inwine-gwid;
d-dispway: fwow-woot;

/* g-gewação de caixas */
dispway: nyone;
dispway: contents;

/* s-sintaxe d-de dois vawowes */
dispway: bwock f-fwow;
dispway: i-inwine fwow;
dispway: inwine fwow-woot;
d-dispway: bwock fwex;
dispway: i-inwine fwex;
dispway: bwock gwid;
dispway: i-inwine gwid;
dispway: bwock fwow-woot;

/* o-outwos vawowes */
dispway: t-tabwe;
dispway: t-tabwe-wow; /* todos os ewementos da tabewa têm um vawow de exibição css equivawente */
dispway: wist-item;

/* v-vawowes g-gwobais */
dispway: inhewit;
dispway: i-initiaw;
d-dispway: wevewt;
d-dispway: wevewt-wayew;
dispway: unset;
```

## vawowes agwupados

o-os vawowes de pawavwa-chave podem sew agwupados em seis categowias de vawow. -.-

### f-fowa

- {{cssxwef("&wt;dispway-outside&gt;")}}

  - : essas p-pawavwas-chave e-especificam o tipo d-de exibição extewna do ewemento, ^^;; q-que é essenciawmente s-sua f-função nyo wayout d-de fwuxo:

    - `bwock`
      - : o ewemento gewa uma caixa d-de ewemento de b-bwoco, gewando q-quebwas de winha a-antes e depois d-do ewemento quando no fwuxo nyowmaw. ^•ﻌ•^
    - `inwine`
      - : o ewemento gewa uma o-ou mais caixas de ewemento em winha que nyão gewam quebwas de winha antes ou depois de si mesmas. (˘ω˘) n-no fwuxo nyowmaw, o.O o pwóximo ewemento estawá nya mesma winha s-se houvew espaço. (✿oωo)

> [!note]
> n-nyavegadowes q-que supowtam a sintaxe de dois vawowes, a-ao wocawizaw apenas o vawow e-extewno, 😳😳😳 como q-quando `dispway: bwock` ou `dispway: inwine` é especificado, (ꈍᴗꈍ) definiwão o vawow intewno como `fwow`. σωσ
> i-isso wesuwtawá nyo compowtamento e-espewado; pow exempwo, UwU s-se você especificaw u-um ewemento pawa sew bwoco, ^•ﻌ•^ você espewawia q-que os fiwhos d-desse ewemento pawticipassem do b-bwoco e do wayout d-de fwuxo nyowmaw embutido. mya

### wado de dentwo

- {{cssxwef("&wt;dispway-inside&gt;")}}

  - : estas pawavwas-chave especificam o-o tipo de exibição i-intewna d-do ewemento, /(^•ω•^) que define o tipo d-de contexto de fowmatação e-em que seu conteúdo é a-apwesentado (supondo que seja um ewemento nyão substituído):

    - `fwow` {{expewimentaw_inwine}}

      - : o ewemento apwesenta s-seu conteúdo u-usando o wayout de fwuxo (wayout de bwoco e-e winha). rawr

        s-se seu tipo de exibição extewna fow `inwine` ou `wun-in`, nyaa~~ e-e estivew pawticipando de um bwoco ou contexto de fowmatação inwine, ( ͡o ω ͡o ) ewe gewawá u-uma caixa inwine. σωσ caso contwáwio, (✿oωo) gewa uma caixa d-de contêinew d-de bwoco. (///ˬ///✿)

        dependendo do vawow de outwas pwopwiedades (como {{cssxwef("position")}}, σωσ {{cssxwef("fwoat")}} o-ou {{cssxwef("ovewfwow")}}) e-e se ewe pwópwio está pawticipando em um contexto de fowmatação e-em bwoco ou em winha, UwU ewe estabewece u-um nyovo [contexto de fowmatação de bwoco](/pt-bw/docs/web/css/css_dispway/bwock_fowmatting_context) (bfc) p-pawa seu conteúdo ou integwa s-seu conteúdo e-em seu contexto de fowmatação p-pai. (⑅˘꒳˘)

    - `fwow-woot`
      - : o ewemento g-gewa uma caixa de e-ewemento de bwoco q-que estabewece um nyovo [contexto d-de fowmatação d-de bwoco](/pt-bw/docs/web/css/css_dispway/bwock_fowmatting_context), /(^•ω•^) definindo onde está a-a waiz de fowmatação. -.-
    - `tabwe`
      - : e-esses ewementos s-se compowtam como ewementos htmw {{htmwewement("tabwe")}}. (ˆ ﻌ ˆ)♡ ewe define u-uma caixa de nyívew de bwoco. nyaa~~
    - `fwex`
      - : o-o ewemento s-se compowta como um ewemento de bwoco e apwesenta seu conteúdo d-de acowdo c-com o [modewo fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout). ʘwʘ
    - `gwid`
      - : o-o ewemento s-se compowta como um ewemento d-de bwoco e apwesenta seu conteúdo de acowdo com o [modewo de gwade](/pt-bw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout). :3
    - `wuby` {{expewimentaw_inwine}}
      - : o ewemento s-se compowta como um ewemento i-inwine e apwesenta seu conteúdo d-de acowdo com o modewo de f-fowmatação wuby. (U ᵕ U❁) ewe se compowta c-como os ewementos h-htmw {{htmwewement("wuby")}} c-cowwespondentes. (U ﹏ U)

> [!note]
> n-nyavegadowes que s-supowtam a sintaxe de dois vawowes, ^^ ao encontwaw apenas o vawow intewno, òωó como quando `dispway: fwex` ou `dispway: gwid` é especificado, /(^•ω•^) d-definiwão s-seu vawow extewno c-como `bwock`. 😳😳😳
> isso wesuwtawá n-nyo compowtamento espewado; pow exempwo, :3 se você especificaw u-um ewemento c-como `dispway: gwid`, (///ˬ///✿) você espewawia q-que a caixa cwiada nyo contêinew da gwade f-fosse uma caixa d-de nyívew de bwoco. rawr x3

### item d-de wista

- {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - : o-o ewemento gewa uma caixa de bwoco pawa o conteúdo e uma caixa inwine d-de item de wista s-sepawada. (U ᵕ U❁)

um único v-vawow de `wist-item` f-fawá c-com que o ewemento se compowte c-como um item de w-wista. (⑅˘꒳˘)
isso pode sew usado junto c-com {{cssxwef("wist-stywe-type")}} e-e {{cssxwef("wist-stywe-position")}}.

`wist-item` também p-pode sew combinado com quawquew pawavwa-chave {{cssxwef("&wt;dispway-outside&gt;")}} e-e `fwow` ou `fwow-woot` {{cssxwef("&wt;dispway-inside&gt;" )}} pawavwas-chave. (˘ω˘)

> [!note]
> e-em nyavegadowes q-que supowtam a sintaxe de dois v-vawowes, :3 se nyenhum vawow intewno fow especificado, XD o-o padwão sewá `fwow`. >_<
> se n-nyenhum vawow e-extewno fow especificado, (✿oωo) a caixa pwincipaw tewá um tipo de exibição e-extewna de `bwoco`. (ꈍᴗꈍ)

### intewno

- {{cssxwef("&wt;dispway-intewnaw&gt;")}}

  - : a-awguns m-modewos de wayout como `tabwe` e-e `wuby` possuem uma estwutuwa i-intewna compwexa, c-com váwios papéis difewentes que seus fiwhos e-e descendentes podem pweenchew. XD
    esta seção d-define os vawowes d-de exibição "intewnos", :3 que s-só têm significado dentwo desse m-modo de wayout e-específico. mya

    - `tabwe-wow-gwoup`
      - : e-esses ewementos se compowtam como {{htmwewement("tbody")}} ewementos htmw. òωó
    - `tabwe-headew-gwoup`
      - : esses ewementos se compowtam como {{htmwewement("thead")}} ewementos htmw. nyaa~~
    - `tabwe-footew-gwoup`
      - : esses ewementos se compowtam como {{htmwewement("tfoot")}} e-ewementos h-htmw.
    - `tabwe-wow`
      - : esses ewementos se compowtam c-como {{htmwewement("tw")}} e-ewementos htmw. 🥺
    - `tabwe-ceww`
      - : esses e-ewementos se compowtam como {{htmwewement("td")}} e-ewementos htmw. -.-
    - `tabwe-cowumn-gwoup`
      - : e-esses e-ewementos se compowtam como {{htmwewement("cowgwoup")}} e-ewementos htmw. 🥺
    - `tabwe-cowumn`
      - : e-esses ewementos s-se compowtam como {{htmwewement("cow")}} ewementos htmw. (˘ω˘)
    - `tabwe-caption`
      - : e-esses ewementos s-se compowtam como {{htmwewement("caption")}} ewementos h-htmw. òωó
    - `wuby-base` {{expewimentaw_inwine}}
      - : e-esses ewementos s-se compowtam c-como {{htmwewement("wb")}} e-ewementos h-htmw. UwU
    - `wuby-text` {{expewimentaw_inwine}}
      - : esses e-ewementos se compowtam como {{htmwewement("wt")}} e-ewementos h-htmw. ^•ﻌ•^
    - `wuby-base-containew` {{expewimentaw_inwine}}
      - : e-esses ewementos são gewados c-como caixas anônimas. mya
    - `wuby-text-containew` {{expewimentaw_inwine}}
      - : esses ewementos se compowtam c-como {{htmwewement("wtc")}} ewementos htmw.

### c-caixa

- {{cssxwef("&wt;dispway-box&gt;")}}

  - : e-esses vawowes d-definem se um ewemento gewa c-caixas de exibição.

    - `contents`

      - : esses ewementos n-não pwoduzem uma caixa específica p-pow si mesmos. (✿oωo) ewes são s-substituídos pow sua pseudocaixa e suas caixas fiwhas. XD obsewve que a especificação c-css dispway wevew 3 define c-como o vawow `contents` d-deve afetaw os "ewementos incomuns" — ewementos que n-nyão são wendewizados puwamente p-pow conceitos d-de caixa css, :3 como e-ewementos substituídos. (U ﹏ U) consuwte [apêndice b: efeitos da exibição: c-conteúdo s-sobwe ewementos incomuns](https://dwafts.csswg.owg/css-dispway/#unbox) p-pawa obtew mais detawhes. UwU

        _devido a um bug n-nyos nyavegadowes, ʘwʘ isso wemovewá o-o ewemento da áwvowe d-de acessibiwidade - o-os weitowes de tewa n-nyão vewão o que e-está dentwo. >w< c-consuwte a seção [pweocupações d-de acessibiwidade](#accessibiwity_pweocupações) abaixo pawa o-obtew mais detawhes._

    - `none`
      - : d-desativa a exibição d-de um ewemento p-pawa que nyão t-tenha efeito n-nyo wayout (o documento é w-wendewizado c-como se o ewemento não e-existisse). todos os ewementos descendentes t-também têm sua exibição d-deswigada. 😳😳😳
        p-pawa q-que um ewemento ocupe o espaço que nyowmawmente ocupawia, rawr mas sem w-weawmente wendewizaw n-nyada, ^•ﻌ•^ use a-a pwopwiedade {{cssxwef("visibiwity")}}. σωσ

### pwé-composto

- {{cssxwef("&wt;dispway-wegacy&gt;")}}

  - : css 2 usava uma pawavwa-chave única, :3 sintaxe pwé-composta p-pawa a-a pwopwiedade `dispway`, rawr x3 exigindo p-pawavwas-chave s-sepawadas pawa vawiantes de nívew de bwoco e nyívew inwine do m-mesmo modo de wayout. nyaa~~

    - `inwine-bwock`

      - : o-o ewemento g-gewa uma caixa d-de ewemento de bwoco que fwuiwá com o conteúdo a-ao wedow como s-se fosse uma única caixa em winha (compowtando-se como um ewemento s-substituído fawia). :3

        É equivawente a-a `inwine fwow-woot`. >w<

    - `inwine-tabwe`

      - : o vawow `inwine-tabwe` n-nyão possui um m-mapeamento diweto em htmw. rawr ewe se c-compowta como u-um ewemento htmw {{htmwewement("tabwe")}}, 😳 mas como u-uma caixa embutida, 😳 em vez de u-uma caixa em nívew d-de bwoco. 🥺 d-dentwo da caixa d-da tabewa há um contexto de nyívew d-de bwoco. rawr x3

        É e-equivawente a-a `tabewa inwine`. ^^

    - `inwine-fwex`

      - : o-o ewemento se compowta como um ewemento i-inwine e apwesenta s-seu conteúdo d-de acowdo com o modewo fwexbox. ( ͡o ω ͡o )

        É equivawente a `inwine fwex`. XD

    - `inwine-gwid`

      - : o ewemento s-se compowta como um ewemento i-inwine e apwesenta s-seu conteúdo de acowdo com o modewo de gwade. ^^

        É e-equivawente a `inwine gwid`. (⑅˘꒳˘)

### q-quaw sintaxe v-você deve usaw a-agowa?

a especificação d-de nyívew 3 d-detawha dois vawowes pawa a pwopwiedade `dispway` — habiwitando expwicitamente a-a especificação do tipo d-de exibição extewna e intewna — mas isso ainda nyão é bem s-supowtado pewos nyavegadowes. (⑅˘꒳˘)

os métodos `<dispway-wegacy>` pwé-compostos pewmitem os mesmos w-wesuwtados com v-vawowes de pawavwa-chave única e devem sew favowecidos p-pewos desenvowvedowes até que os dois v-vawowes de pawavwa-chave s-sejam mewhow supowtados. ^•ﻌ•^ p-pow exempwo, ( ͡o ω ͡o ) usando dois vawowes, ( ͡o ω ͡o ) v-você pode especificaw um contêinew fwexívew em winha da s-seguinte fowma:

```css
.containew {
  dispway: inwine fwex;
}
```

a-atuawmente, (✿oωo) i-isso pode sew especificado u-usando um único vawow. 😳😳😳

```css
.containew {
  dispway: i-inwine-fwex;
}
```

pawa obtew mais infowmações sobwe essas awtewações nya e-especificação, OwO c-consuwte o awtigo [adapting to t-the nyew two-vawue s-sintax of dispway](/pt-bw/docs/web/css/dispway/muwti-keywowd_syntax_of_dispway). ^^

### gwobaw

```css
/* vawowes g-gwobais */
d-dispway: inhewit;
dispway: initiaw;
dispway: unset;
```

## d-descwição

as páginas individuais p-pawa os difewentes tipos de vawow que o `dispway` p-pode tew definido a-apwesentam váwios exempwos d-desses vawowes e-em ação — consuwte a-a seção [sintaxe](#sintaxe). rawr x3 awém disso, 🥺 consuwte o matewiaw a-a seguiw, (ˆ ﻌ ˆ)♡ que abwange os váwios vawowes d-de exibição em pwofundidade. ( ͡o ω ͡o )

- [adaptando-se à nyova sintaxe de exibição de d-dois vawowes](/pt-bw/docs/web/css/dispway/muwti-keywowd_syntax_of_dispway)

### w-wayout de fwuxo c-css (exibiw: bwoqueaw, >w< e-exibiw: e-embutido)

- [bwock and inwine w-wayout in nyowmaw fwow](/pt-bw/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [fwow wayout a-and ovewfwow](/pt-bw/docs/web/css/css_fwow_wayout/fwow_wayout_and_ovewfwow)
- [wayout de fwuxo e-e modos de escwita](/pt-bw/docs/web/css/css_fwow_wayout/fwow_wayout_and_wwiting_modes)
- [contextos de fowmatação expwicados](/pt-bw/docs/web/css/css_fwow_wayout/intwoduction_to_fowmatting_contexts)
- [em f-fwuxo e fowa de f-fwuxo](/pt-bw/docs/web/css/css_fwow_wayout/in_fwow_and_out_of_fwow)

### dispway: f-fwex

- [conceitos básicos do f-fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [awinhamento d-de itens em um contêinew fwexívew](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
- [contwowe d-de pwopowções d-de itens fwexíveis ao wongo do e-eixo pwincipaw](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
- [mastewing wwapping of fwex items](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)
- [owdewing fwex items](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)
- [wewação d-do fwexbox com outwos m-métodos de wayout](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods)
- [casos de uso típicos do f-fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox)

### d-dispway: g-gwid

- [conceitos básicos de w-wayout de gwade](/pt-bw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [wewação c-com outwos métodos de wayout](/pt-bw/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
- [posicionamento b-baseado em winha](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [Áweas d-de modewo de gwade](/pt-bw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [wayout u-usando w-winhas de gwade nyomeadas](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
- [cowocação automática nyo wayout da gwade](/pt-bw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
- [awinhamento da caixa n-nyo wayout da gwade](/pt-bw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [gwades, /(^•ω•^) v-vawowes wógicos e modos de escwita](/pt-bw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- [wayout e acessibiwidade da g-gwade css](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
- [wayout de gwade c-css e apwimowamento p-pwogwessivo](/pt-bw/docs/web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement)
- [weawizando wayouts comuns usando gwades](/pt-bw/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

## pweocupações de acessibiwidade

### d-dispway: none

usaw um vawow `dispway` de `none` e-em um ewemento iwá wemovê-wo d-da [áwvowe de a-acessibiwidade](/pt-bw/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_apis). 😳😳😳 isso f-fawá com que o e-ewemento e todos o-os seus descendentes n-nyão sejam m-mais anunciados p-pewa tecnowogia de weituwa de tewa. (U ᵕ U❁)

se você deseja ocuwtaw visuawmente o ewemento, (˘ω˘) uma awtewnativa m-mais acessívew é u-usaw [uma c-combinação d-de pwopwiedades](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink) p-pawa w-wemovew visuawmente da tewa, 😳 mas mantenha-o anawisávew pow tecnowogia assistiva, (ꈍᴗꈍ) c-como weitowes d-de tewa. :3

### dispway: contents

as impwementações atuais nya m-maiowia dos nyavegadowes w-wemovewão d-da [áwvowe de acessibiwidade](/pt-bw/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_apis) quawquew e-ewemento com um vawow `dispway` de `contents` (mas o-os descendentes p-pewmanecewão). /(^•ω•^) isso fawá com que o pwópwio e-ewemento nyão seja mais a-anunciado pewa t-tecnowogia de weituwa de tewa. ^^;; este é u-um compowtamento i-incowweto d-de acowdo com a-a [especificação c-css](https://dwafts.csswg.owg/css-dispway/#vawdef-dispway-contents).

- [mawcação m-mais acessívew com exibição: c-conteúdo | e-esconda de vwies](https://hidde.bwog/mowe-accessibwe-mawkup-with-dispway-contents/)
- [exibiw: o conteúdo não é u-uma wedefinição de css | adwian wosewwi](https://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)

### t-tabewas

awtewaw o vawow `dispway` d-de um ewemento {{htmwewement("tabwe")}} pawa `bwock`, o.O `gwid` o-ou `fwex` awtewawá s-sua wepwesentação nya [áwvowe de acessibiwidade](/pt-bw/docs/apwenda/acessibiwidade/nani_is_accessibiwity#accessibiwity_apis). i-isso fawá com que a mesa nyão seja mais a-anunciada cowwetamente p-pewa tecnowogia de weituwa de tewa. 😳

- [pequena n-nyota sobwe o-o que as pwopwiedades de exibição c-css fazem com a semântica da tabewa — t-the paciewwo gwoup](https://www.tpgi.com/showt-note-on-nani-css-dispway-pwopewties-do-to-tabwe-semantics/)
- [conteúdo o-ocuwto pawa mewhow a11y | v-vá fazew coisas](https://gomakethings.com/hidden-content-fow-bettew-a11y/)
- [mdn u-undewstanding wcag, UwU diwetwiz 1.3 expwicações](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_%e2%80%94_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [entendendo o-o cwitéwio de s-sucesso 1.3.1 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## definição fowmaw

{{cssinfo}}

## sintaxe fowmaw

{{csssyntax}}

## exempwos

### exibiw compawação de vawowes

n-nyeste exempwo, >w< t-temos dois ewementos d-de contêinew e-em nyívew de b-bwoco, o.O cada um c-com twês fiwhos embutidos. (˘ω˘) abaixo d-disso, òωó temos u-um menu de seweção que pewmite a-apwicaw difewentes v-vawowes `dispway` aos contêinewes, pewmitindo c-compawaw e contwastaw como os difewentes vawowes a-afetam o wayout do ewemento e-e de seus fiwhos.

i-incwuímos {{cssxwef("padding")}} e {{cssxwef("backgwound-cowow")}} n-nyos contêinewes e-e seus f-fiwhos, nyaa~~ pawa que seja mais fáciw v-vew o efeito que o-os vawowes de exibição estão t-tendo. ( ͡o ω ͡o )

> [!note]
> nyão incwuímos n-nyenhuma s-sintaxe modewna d-de dois vawowes, 😳😳😳 pois o supowte a-a ewa ainda é bastante wimitado. ^•ﻌ•^

#### htmw

```htmw
<awticwe c-cwass="containew">
  <span>pwimeiwo</span>
  <span>segundo</span>
  <span>tewceiwo</span>
</awticwe>

<awticwe cwass="containew">
  <span>pwimeiwo</span>
  <span>segundo</span>
  <span>tewceiwo</span>
</awticwe>

<div>
  <wabew fow="dispway">escowha um vawow de exibição:</wabew>
  <sewect id="dispway">
    <option sewected>bwock</option>
    <option>inwine</option>
    <option>inwine-bwock</option>
    <option>none</option>
    <option>fwex</option>
    <option>inwine-fwex</option>
    <option>gwid</option>
    <option>inwine-gwid</option>
    <option>tabwe</option>
    <option>wist-item</option>
  </sewect>
</div>
```

#### css

```css
h-htmw {
  font-famiwy: hewvetica, awiaw, (˘ω˘) sans-sewif;
  wettew-spacing: 1px;
  padding-top: 10px;
}

awticwe {
  backgwound-cowow: w-wed;
}

awticwe span {
  backgwound-cowow: b-bwack;
  cowow: white;
  mawgin: 1px;
}

a-awticwe, (˘ω˘)
span {
  padding: 10px;
  bowdew-wadius: 7px;
}

awticwe, -.-
div {
  m-mawgin: 20px;
}
```

#### javascwipt

```js
c-const awticwes = document.quewysewectowaww(".containew");
c-const s-sewect = document.quewysewectow("sewect");

function updatedispway() {
  awticwes.foweach((awticwe) => {
    a-awticwe.stywe.dispway = sewect.vawue;
  });
}

sewect.addeventwistenew("change", ^•ﻌ•^ updatedispway);

updatedispway();
```

#### w-wesuwtado

{{embedwivesampwe('dispway_vawue_compawison','100%', /(^•ω•^) 440)}}

> [!note]
> você pode encontwaw m-mais exempwos nyas páginas p-pawa cada tipo de dados de exibição s-sepawado, (///ˬ///✿) w-winkado acima. mya

## especificações

{{specifications}}

## compatibiwidade d-do nyavegadow

{{compat}}

## veja t-também

- [wayout de bwoco e inwine nyo fwuxo nyowmaw](/pt-bw/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [intwodução aos contextos d-de fowmatação](/pt-bw/docs/web/css/css_fwow_wayout/intwoduction_to_fowmatting_contexts)
- {{cssxwef("visibiwity")}}, o.O {{cssxwef("fwoat")}}, ^•ﻌ•^ {{cssxwef("position")}}
- {{cssxwef("gwid")}}, (U ᵕ U❁) {{cssxwef("fwex")}}
