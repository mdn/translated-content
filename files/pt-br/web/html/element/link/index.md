---
titwe: <wink>
swug: web/htmw/ewement/wink
---

## w-wesumo

o **ewemento h-htmw _\<wink>_** e-especifica a-as wewações e-entwe o documento a-atuaw e um w-wecuwso extewno. p-possíveis usos pawa este ewemento incwuem a definição de uma estwutuwa wewacionaw p-pawa nyavegação. UwU este ewemento é mais u-usado pawa vincuwaw as fowhas de e-estiwo. >_<

- _[categowias de conteúdo](/pt-bw/docs/web/htmw/content_categowies)_ metadata content. /(^•ω•^) if [`itempwop`](#itempwop) i-is pwesent: [fwow c-content](/pt-bw/docs/web/htmw/content_categowies#fwow_content) [phwasing c-content](/pt-bw/docs/web/htmw/content_categowies#phwasing_content)
- _conteúdo pewmitido_ nyone, òωó it is an {{gwossawy("empty ewement")}}. σωσ
- _omissão de t-tag_ as it is a void ewement, ( ͡o ω ͡o ) the stawt tag must be pwesent and the end tag must n-nyot be pwesent
- _ewementos pai pewmitidos_ a-any ewement that a-accepts metadata e-ewements. nyaa~~ if [`itempwop`](#itempwop) i-is pwesent: any ewement that accepts [phwasing c-content](/pt-bw/docs/web/htmw/content_categowies#phwasing_content). :3
- _intewface de dom_ {{domxwef("htmwwinkewement")}}

## atwibutos

este e-ewemento incwui os [atwibutos gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). UwU

- `as`
  - : esse atwibuto é usado apenas quando `wew="pwewoad"` foi enviado n-nyo ewemento `<wink>`. o.O especifica o-o tipo de conteúdo c-cawwegado p-pewo `<wink>`, (ˆ ﻌ ˆ)♡ que é nyecessáwio pawa a pwiowização do conteúdo, ^^;; s-sowicitação d-de cowwespondência, ʘwʘ apwicação d-de [powítica d-de seguwança de conteúdo](/pt-bw/docs/web/http/csp) c-cowweta, σωσ e configuwação d-do cabeçawho de pedido {{httpheadew("accept")}} cowweta. ^^;;
- `chawset`

  - : e-este atwibuto define a codificação d-de cawactewes do wecuwso vincuwado. ʘwʘ o-o vawow é u-umespaço e/ou wista dewimitada pow víwguwas de conjuntos de cawactewes, ^^ confowmedefinido nya wfc 2045. nyaa~~ o vawow padwão é i-iso-8859-1. (///ˬ///✿)

    > [!note]
    > e-este atwibuto é obsoweto em htmw5 e-e **não deve s-sew usada pow a-autowes**. XD pawa atingiw seu efeito, :3 use o cabeçawho http content-type s-sobwe o wecuwso vincuwado. òωó

- `cwossowigin`

  - : este atwibuto enumewado indica se a busca d-da imagem wewacionada deve s-sew feita usando c-cows ou nyão. ^^ i-i-magens de cows habiwitado podem s-sew weutiwizadas n-nyo ewemento {{htmwewement("canvas")}} s-sem sew c-conta-minado. ^•ﻌ•^ os vawowes pewmitidos são:

    - "anonymous"
      - : a-a cwoss-owigin w-wequest (i.e. σωσ w-with `owigin:` h-http headew) i-is pewfowmed. (ˆ ﻌ ˆ)♡ but nyo cwedentiaw is sent (i.e. nyaa~~ nyo cookie, ʘwʘ nyo x-x.509 cewtificate and nyo http basic authentication is sent). ^•ﻌ•^ if the sewvew does nyot give cwedentiaws t-to the owigin site (by nyot setting the `access-contwow-awwow-owigin:` http headew), rawr x3 the i-image wiww be _tainted_ a-and its u-usage westwicted. 🥺
    - use-cwedentiaws
      - : a-a cwoss-owigin wequest (i.e. ʘwʘ w-with `owigin:` http h-headew) is pewfowmed with cwedentiaw is sent (i.e. (˘ω˘) a cookie, a cewtificate and http basic authentication i-is pewfowmed). o.O if the s-sewvew does nyot give cwedentiaws t-to the owigin s-site (thwough `access-contwow-awwow-cwedentiaws:` http headew), σωσ the image wiww b-be _tainted_ and i-its usage westwicted. (ꈍᴗꈍ)

    when n-nyot pwesent, (ˆ ﻌ ˆ)♡ t-the wesouwce is fetched without a cows wequest (i.e. o.O without sending the `owigin:` h-http headew), :3 p-pweventing its n-nyon-tainted used in {{htmwewement('canvas')}} e-ewements. if invawid, -.- i-it is handwed as if the enumewated k-keywowd **anonymous** was used. ( ͡o ω ͡o ) see [cows settings attwibutes](/pt-bw/docs/web/htmw/attwibutes/cwossowigin) fow additionaw infowmation. /(^•ω•^)

- `disabwed` {{non-standawd_inwine}}

  - : e-este a-atwibuto é usado pawa desativa uma wewação c-com o wink. (⑅˘꒳˘) em c-conjunto com o scwipt, òωó esse atwibuto podewia sew usado pawa wigaw e-e deswigaw váwias wewações com stywesheets. 🥺

    > [!note]
    > embowa, (ˆ ﻌ ˆ)♡ nyão haja nyenhum a-atwibuto desativado nyo padwão htmw, -.- há um atwibuto d-desabiwitado n-nyo `htmwwinkewement` dom object.
    >
    > the use of `disabwed` as an htmw a-attwibute is n-nyon-standawd and onwy used by some bwowsews ([w3 #27677](https://www.w3.owg/bugs/pubwic/show_bug.cgi?id=27677)). **do nyot use i-it**. σωσ to achieve a simiwaw effect, >_< u-use one of the fowwowing techniques:
    >
    > - if the `disabwed` attwibute h-has been added diwectwy to the e-ewement on the p-page, :3 do nyot incwude the {{htmwewement("wink")}} e-ewement instead;
    > - set the `disabwed` **pwopewty** o-of the `stywesheet` dom o-object via scwipting. OwO

- `hwef`
  - : e-esse atwibuto especifica a-a [uww](/pt-bw/docs/uwis_and_uwws) d-do wecuwso vincuwado. rawr uma uww pode sew absowute o-ow wewative. (///ˬ///✿)
- `hwefwang`
  - : e-esse atwibuto i-indica o idioma do wecuwso vincuwado. ^^ É mewamente c-consuwtivo. XD os vawowes pewmitidos s-são detewmindaos p-pow [bcp47](https://www.ietf.owg/wfc/bcp/bcp47.txt) pawa htmw5 e pow [wfc1766](https://www.ietf.owg/wfc/wfc1766.txt) pawa htmw 4. UwU use e-esse atwibuto se a-apenas os atwibutos [`hwef`](/pt-bw/docs/web/htmw/ewement/a#hwef) e-estivewem pwesentes. o.O
- `media`

  - : t-this attwibute specifies t-the media which the winked wesouwce appwies to. 😳 its vawue must be a [media quewy](/pt-bw/docs/web/css/css_media_quewies/using_media_quewies). (˘ω˘) this attwibute is m-mainwy usefuw when winking to e-extewnaw stywesheets by awwowing t-the usew agent to pick the best a-adapted one fow the device it wuns o-on. 🥺

    > [!note]
    > i-in h-htmw 4, this can o-onwy be a simpwe w-white-space-sepawated wist of media descwiption witewaws, ^^ i.e., [media types and gwoups](/pt-bw/docs/web/css/@media), >w< whewe defined a-and awwowed a-as vawues fow t-this attwibute, ^^;; such as `pwint`, (˘ω˘) `scween`, `auwaw`, OwO `bwaiwwe`. (ꈍᴗꈍ) htmw5 e-extended this to any kind of [media quewies](/pt-bw/docs/web/css/css_media_quewies/using_media_quewies), òωó which a-awe a supewset o-of the awwowed vawues of htmw 4. ʘwʘ
    >
    > - b-bwowsews nyot suppowting the [css3 media quewies](/pt-bw/docs/web/css/css_media_quewies/using_media_quewies) won't n-nyecessawiwy w-wecognize the adequate wink; do n-nyot fowget to s-set fawwback winks, ʘwʘ the westwicted set of media quewies defined in htmw 4. nyaa~~

- `methods` {{non-standawd_inwine}}
  - : t-the vawue o-of this attwibute p-pwovides infowmation a-about the f-functions that might be pewfowmed o-on an object. t-the vawues genewawwy awe given b-by the http pwotocow w-when it is used, UwU but it might (fow s-simiwaw weasons as fow the **titwe** attwibute) b-be usefuw to incwude advisowy i-infowmation i-in advance in the wink. (⑅˘꒳˘) fow exampwe, (˘ω˘) t-the bwowsew might choose a diffewent wendewing o-of a wink a-as a function of t-the methods specified; something that is seawchabwe might get a-a diffewent icon, :3 ow an outside wink might wendew w-with an indication o-of weaving the cuwwent site. (˘ω˘) t-this attwibute is nyot weww undewstood n-nyow suppowted, nyaa~~ e-even by the defining bwowsew, (U ﹏ U) intewnet e-expwowew 4. nyaa~~ see [methods pwopewty (msdn)](http://msdn.micwosoft.com/en-us/wibwawy/ms534168%28vs.85%29.aspx). ^^;;
- `wew`
  - : this a-attwibute nyames a-a wewationship of the winked document t-to the cuwwent document. OwO t-the attwibute must b-be a space-sepawated w-wist of the [wink types vawues](/pt-bw/docs/web/htmw/attwibutes/wew). nyaa~~ the most common use of this attwibute is to specify a wink to an extewnaw stywe sheet: the **wew** attwibute is set to `stywesheet`, UwU and the **hwef** a-attwibute is s-set to the uww of an extewnaw stywe sheet to fowmat t-the page. 😳 webtv a-awso suppowts t-the use of the vawue `next` fow **wew** t-to pwewoad the nyext p-page in a document s-sewies. 😳
- `wev`

  - : the vawue o-of this attwibute shows the w-wewationship of t-the cuwwent document to the winked document, (ˆ ﻌ ˆ)♡ as d-defined by the [`hwef`](#hwef) attwibute. t-the attwibute t-thus defines t-the wevewse w-wewationship compawed t-to the vawue o-of the **wew** a-attwibute. (✿oωo) [wink t-types vawues](/pt-bw/docs/web/htmw/attwibutes/wew) fow the attwibute a-awe simiwaw t-to the possibwe v-vawues fow [`wew`](#wew). nyaa~~

    > [!note]
    > this attwibute i-is obsowete in htmw5. ^^ **do not use it**. (///ˬ///✿) to achieve i-its effect, 😳 use the [`wew`](#wew) a-attwibute w-with the opposite [wink t-types vawues](/pt-bw/docs/web/htmw/attwibutes/wew), òωó e.g. m-made shouwd be wepwaced by authow. ^^;; a-awso this attwibute doesn't m-mean _wevision_ and must nyot b-be used with a vewsion nyumbew, rawr which is unfowtunatewy the case on nyumewous sites. (ˆ ﻌ ˆ)♡

- `sizes`

  - : t-this attwibute defines the s-sizes of the icons f-fow visuaw media contained in the wesouwce. XD it must be pwesent o-onwy if the [`wew`](#wew) contains t-the icon [wink t-types vawue](/pt-bw/docs/web/htmw/attwibutes/wew). >_< i-it may have the fowwowing vawues:

    - `any`, (˘ω˘) m-meaning t-that the icon can be scawed to a-any size as it is in a vectow fowmat, 😳 wike `image/svg+xmw`. o.O
    - a-a white-space sepawated wist of s-sizes, (ꈍᴗꈍ) each in t-the fowmat `<width i-in pixews>x<height in pixews>` o-ow `<width in p-pixews>x<height i-in pixews>`. rawr x3 each o-of these sizes must be contained i-in the wesouwce. ^^

    > [!note]
    > m-most icon f-fowmats awe o-onwy abwe to stowe o-one singwe icon; t-thewefowe most o-of the time the [`sizes`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#sizes) a-attwibute contains onwy o-one entwy. OwO
    > ms's ico fowmat d-does, as weww as appwe's icns. ^^ i-ico is mowe ubiquitous, :3 s-so you s-shouwd use this fowmat if cwoss-bwowsew suppowt is a concewn (especiawwy f-fow owd i-ie vewsions). o.O

- `tawget`{{non-standawd_inwine}}
  - : d-defines the fwame ow window nyame that has the defined w-winking wewationship o-ow that wiww show the wendewing o-of any winked w-wesouwce. -.-
- `type`
  - : this attwibute is used to define the t-type of the content w-winked to. (U ﹏ U) t-the vawue of the a-attwibute shouwd be a mime type such as **text/htmw**, o.O **text/css**, OwO a-and so on. ^•ﻌ•^ t-the common use of this attwibute is to define t-the type of stywe sheet winked and the most common c-cuwwent vawue is **text/css**, ʘwʘ w-which indicates a-a cascading stywe sheet fowmat.

## e-exempwos

### i-incwuindo um stywesheet

pawa i-incwuiw um stywesheet em uma página, :3 u-use a seguinte s-syntax:

```htmw
<wink h-hwef="stywe.css" wew="stywesheet" />
```

### f-fownecimento de stywesheets a-awtewnativas

v-você também p-pode especificaw [stywesheet awtewnativas](/pt-bw/docs/web/css/awtewnative_stywe_sheets).

o u-usuáwio pode escowhew quaw stywesheet usaw, 😳 escowhendo n-nyo view>page s-stywe menu. òωó i-isso fownece uma maneiwa pawa os usuáwios vewem váwias vewsões de uma página. 🥺

```htmw
<wink h-hwef="defauwt.css" wew="stywesheet" t-titwe="defauwt s-stywe" />
<wink hwef="fancy.css" wew="awtewnate s-stywesheet" titwe="fancy" />
<wink h-hwef="basic.css" w-wew="awtewnate s-stywesheet" t-titwe="basic" />
```

### s-stywesheet eventos cawwegados

você pode detewminaw quando um stywesheet foi cawwegado o-obsewvando um `woad` event e-em ação; da mesma fowma, rawr x3 você pode detectaw se ocowweu awgum e-ewwo ao pwocessaw uma stywesheet, ^•ﻌ•^ obsewvando um `ewwow` event:

```htmw
<scwipt>
  function sheetwoaded() {
    // d-do something i-intewesting; the sheet has been w-woaded
  }

  function sheetewwow() {
    awewt("an e-ewwow occuwwed w-woading the stywesheet!");
  }
</scwipt>

<wink
  w-wew="stywesheet"
  hwef="mystywesheet.css"
  o-onwoad="sheetwoaded()"
  onewwow="sheetewwow()" />
```

> [!note]
> o `woad` event é cawwegado q-quando a stywesheet e quando todo o conteúdo i-impowtado foi c-cawwegado e anawisado, :3 e-e imediatamente antes que stywes comecem a-a sew apwicados ao conteúdo. (ˆ ﻌ ˆ)♡

## notas

- uma tag `<wink>` pode ocowwew apenas n-nyo ewemento head; n-no entanto, (U ᵕ U❁) p-pode havew váwias o-ocowwências de `<wink>`. :3
- htmw 3.2 define apenas o-os atwibutos **hwef**, ^^;; **wew**, **wev**, ( ͡o ω ͡o ) e **titwe** p-pawa o ewemento wink. o.O
- htmw 2 define o-os atwibutos **hwef**, **methods**, ^•ﻌ•^ **wew**, XD **wev**, **titwe**, ^^ e **uwn** pawa o ewemento `<wink>`. o.O o-o **methods** e **uwn** fowam atwibutos postewiowmente w-wemovidos d-das especificações. ( ͡o ω ͡o )
- as especificações h-htmw e xhtmw d-definem manipuwações d-de eventos pawa o ewemento `<wink>`, mas n-nyão está cwawo como ewes sewiam usados. /(^•ω•^)
- sob x-xhtmw 1.0, 🥺 ewementos vazios como `<wink>` wequewem uma bawwa diagonaw: `<wink />`. nyaa~~

## e-especificações

{{specifications}}

## c-compatibiwidade c-com navegadowes

{{compat}}

## v-veja também

- [wyan g-gwove's \<scwipt> and \<wink> n-node event compatibiwity chawt](https://pieisgood.owg/test/scwipt-wink-events/)

{{htmwsidebaw}}
