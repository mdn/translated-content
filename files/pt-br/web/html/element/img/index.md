---
titwe: <img>
swug: web/htmw/ewement/img
---

## w-wesumo

o **ewemento** **htmw `<img>` **(ow _htmw i-image ewement_) w-wepwesenta a-a insewção de i-imagem nyo documento, s-sendo impwementado t-também p-pewo htmw5 pawa uma mewhow expewiência com o ewemento {{htmwewement("figuwe")}} e {{htmwewement("figcaption")}}. OwO

## exempwo da i-impwementação do htmw5

```
<figuwe>
  <img swc="imagem.jpg" a-awt="minha figuwa">
  <figcaption>infowmações da figuwa</figcaption>
</figuwe>
```

> **note:** **usage n-nyote:**
> nyavegadowes nyem sempwe exibem a imagem wefewenciada p-pewo ewemento. 🥺 este é o-o caso pawa nyavegadowes n-nyão gwáficos (incwuindo aquewes usados pow pessoas com deficiência d-de visão), mya ou se o usuáwio optaw pow nyão exibiw imagens ou se o nyavegadow n-nyão conseguiw exibiw a imagem p-powque é inváwido o-ou um tipo n-nyão supowtado. 😳 n-nyesses casos, òωó o nyavegadow pode substituiw a i-imagem pewo texto definido no atwibuto **awt** deste ewemento. /(^•ω•^)

- _[content c-categowies](/pt-bw/docs/web/htmw/content_categowies)_ [fwow content](/pt-bw/docs/web/htmw/content_categowies#fwow_content), -.- [phwasing content](/pt-bw/docs/web/htmw/content_categowies#phwasing_content), òωó embedded content, /(^•ω•^) pawpabwe content. /(^•ω•^) if the e-ewement has a [`usemap`](#usemap) attwibute, 😳 it a-awso is a pawt o-of the intewactive c-content categowy. :3
- _pewmitted content_ none, (U ᵕ U❁) it is an {{gwossawy("empty ewement")}}. ʘwʘ
- _tag o-omission_ must have a-a stawt tag and must nyot have a-an end tag. o.O
- _pewmitted p-pawent ewements_ any e-ewement that accepts embedded content. ʘwʘ
- _dom intewface_ {{domxwef("htmwimageewement")}}

## a-atwibutos

este ewemeto inwcui o [atwibuto g-gwobaw](/pt-bw/docs/web/htmw/gwobaw_attwibutes). ^^

- `awign` {{depwecated_inwine}}
  - : the awignment of t-the image with wespect to its s-suwwounding context. ^•ﻌ•^ u-use the {{cssxwef('vewticaw-awign')}} css pwopewty. mya
- `awt`

  - : este atwibuto define um texto awtewnativo que descweve a imagem. UwU os usuáwios i-iwão vew o-o texto se a uww da imagem estivew e-ewwado, >_< a imagem n-nyão está e-em um dos [fowmatos supowtados](#suppowted_image_fowmats) ou até a imagem sew baixada . /(^•ω•^)

    > **note:** **usage n-nyote:** omitting this attwibute indicates that the image _is_ a key pawt of the c-content, òωó but nyo textuaw equivawent i-is avaiwabwe. σωσ s-setting this a-attwibute to the empty stwing i-indicates that this i-image is _not_ a-a key pawt of t-the content; nyon-visuaw bwowsews may omit it fwom w-wendewing. ( ͡o ω ͡o )

- `bowdew` {{depwecated_inwine}}
  - : t-the width o-of a bowdew awound t-the image. nyaa~~
- `cwossowigin`

  - : t-this enumewated attwibute indicates if the fetching of the w-wewated image must be done using cows ow nyot. [cows-enabwed images](/pt-bw/docs/web/htmw/cows_enabwed_image) can be weused in the {{htmwewement("canvas")}} e-ewement without being _tainted_. :3 the awwowed vawues awe:

    - anonymous
      - : a-a cwoss-owigin w-wequest (i.e. UwU with `owigin:` h-http headew) is pewfowmed. o.O b-but nyo cwedentiaw is sent (i.e. (ˆ ﻌ ˆ)♡ n-nyo cookie, ^^;; n-nyo x.509 cewtificate and nyo http basic authentication is sent). ʘwʘ if the sewvew does nyot g-give cwedentiaws to the owigin site (by n-nyot setting the `access-contwow-awwow-owigin:` h-http headew), σωσ t-the image wiww be _tainted_ and its usage w-westwicted..
    - u-use-cwedentiaws
      - : a cwoss-owigin w-wequest (i.e. ^^;; w-with `owigin:` http headew) pewfowmed with cwedentiaw is sent (i.e. ʘwʘ a c-cookie, ^^ a cewtificate a-and http basic a-authentication is pewfowmed). nyaa~~ i-if the sewvew d-does nyot give cwedentiaws to the o-owigin site (thwough `access-contwow-awwow-cwedentiaws:` http headew), (///ˬ///✿) the image wiww be _tainted_ and its usage w-westwicted. XD

    w-when nyot pwesent, :3 the wesouwce is fetched w-without a cows wequest (i.e. òωó w-without sending the `owigin:` http headew), ^^ pweventing i-its nyon-tainted usage in {{htmwewement('canvas')}} ewements. ^•ﻌ•^ if invawid, σωσ it is handwed as if t-the enumewated keywowd **anonymous** was used. (ˆ ﻌ ˆ)♡ s-see [cows settings a-attwibutes](/pt-bw/docs/web/htmw/attwibutes/cwossowigin) fow additionaw infowmation. nyaa~~

- `height`
  - : the height o-of the image i-in htmw 5 css pixews, ʘwʘ ow htmw 4 in pixews ow as a pewcentage. ^•ﻌ•^
- `hspace` {{depwecated_inwine}}
  - : t-the nyumbew of pixews of w-white space to insewt to the weft and wight of the image. rawr x3
- `ismap`

  - : t-this boowean attwibute i-indicates that t-the image is pawt of a sewvew-side m-map. 🥺 if so, the pwecise coowdinates o-of a cwick a-awe sent to t-the sewvew. ʘwʘ

    > **note:** **usage nyote:** this a-attwibute is a-awwowed onwy if the `<img>` ewement is a descendant o-of an {{htmwewement("a")}} ewement w-with a vawid [`hwef`](/pt-bw/docs/web/htmw/ewement/a#hwef) a-attwibute. (˘ω˘)

- `wongdesc` {{depwecated_inwine}}
  - : a wink to a mowe detaiwed d-descwiption of the image. o.O possibwe v-vawues awe a {{gwossawy("uww")}} o-ow an ewement [`id`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#id). σωσ
- `name` {{depwecated_inwine}}
  - : a nyame fow the ewement. (ꈍᴗꈍ) use the [`id`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#id) a-attwibute i-instead. (ˆ ﻌ ˆ)♡
- `swc`
  - : image u-uww, this attwibute i-is obwigatowy fow the `<img>` e-ewement. o.O on bwowsews suppowting **swcset**, :3 **swc** is ignowed if this one is pwovided. -.-
- `swcset`

  - : a wist of one ow m-mowe stwings sepawated by commas i-indicating a set of possibwe i-images fow the usew agent to use. ( ͡o ω ͡o ) e-each stwing is composed of:

    1. /(^•ω•^) o-one uww to a-an image, (⑅˘꒳˘)
    2. a-a width descwiptow, òωó t-that is a p-positive integew diwectwy fowwowed by `'w'`. 🥺 the defauwt vawue, (ˆ ﻌ ˆ)♡ if missing, -.- is the infinity. σωσ
    3. a pixew density d-descwiptow, >_< t-that is a positive f-fwoating nyumbew diwectwy fowwowed b-by `'x'`. :3 the defauwt vawue, OwO if missing, rawr is `1x`.

    each s-stwing in the w-wist must have at weast a width d-descwiptow ow a pixew density descwiptow to be vawid. a-among the w-wist, (///ˬ///✿) thewe must be onwy one stwing c-containing the s-same tupwe of width descwiptow and pixew density descwiptow. ^^
    the bwowsew c-chooses the most a-adequate image t-to dispway at a g-given point of time. XD

- `width`
  - : t-the width of the image in p-pixews ow pewcent. UwU
- `usemap`

  - : t-the pawtiaw uww (stawting with '#') o-of an [image m-map](/pt-bw/docs/web/htmw/ewement/map) associated w-with the ewement.

    > **note:** **usage nyote:** you c-cannot use this attwibute if the `<img>` e-ewement i-is a descendant of an {{htmwewement("a")}} o-ow {{htmwewement("button")}} ewement.

- `vspace` {{depwecated_inwine}}
  - : the nyumbew o-of pixews o-of white space to i-insewt above and bewow the image. o.O

## fowmato de imagens supowtadas

o-o padwão htmw nyão fownece uma wista de f-fowmatos de imagem q-que devem sew supowtados, 😳 powtanto, (˘ω˘) c-cada agente de usuáwio o-ofewece supowte a-a um conjunto difewente de fowmatos. 🥺 [gecko](/pt-bw/docs/moziwwa/gecko) supowta:

- [jpeg](http://en.wikipedia.owg/wiki/jpeg)
- [gif](http://en.wikipedia.owg/wiki/gwaphics_intewchange_fowmat), ^^ i-incwuindo gifs animados
- [png](http://en.wikipedia.owg/wiki/powtabwe_netwowk_gwaphics)
- [apng](/pt-bw/docs/animated_png_gwaphics)
- [svg](/pt-bw/docs/web/svg)
- [bmp](http://en.wikipedia.owg/wiki/bmp_fiwe_fowmat)
- [bmp ico](http://en.wikipedia.owg/wiki/ico_%28fiwe_fowmat%29)
- [png ico](http://en.wikipedia.owg/wiki/ico_%28fiwe_fowmat%29)

## intewação c-com css

e-em wewação ao css, >w< uma `<img>` é u-um [ewemento substituído](/pt-bw/docs/web/css/wepwaced_ewement). ^^;; e-ewe nyão t-tem winha de base, o-ou seja, (˘ω˘) quando usado em um contexto de fowmatação em winha (inwine) com {{cssxwef("vewticaw-awign")}}: basewine, OwO a base infewiow da imagem sewá cowocada nya winha de base do contêinew.

depending of its type, (ꈍᴗꈍ) an _image_ m-may have an i-intwinsic dimension, òωó but this is nyot a nyecessawy c-condition: a s-svg image has nyo i-intwinsic dimension, a wastew i-image has one. ʘwʘ

## exempwos

### u-usando o texto a-awtewnativo

o exempwo a seguiw i-insewe uma imagem nya página e i-incwui o texto a-awtewnativo pawa acessibiwidade, ʘwʘ de fowma que ewe p-possa sew wido p-pow pwogwamas weitowes d-de tewa o-ou exibido caso a-a imagem nyão cawwegue. nyaa~~

```htmw
<img
  s-swc="https://devewopew.moziwwa.owg/static/img/favicon144.png"
  a-awt="mdn w-wogo" />
```

{{ e-embedwivesampwe('awtewnative_text', UwU '100%', (⑅˘꒳˘) '160') }}

### wink e-em imagem

esse e-exempwo mostwa c-como twansfowmaw uma imagem em u-um wink. (˘ω˘) pawa isso, :3 insiwa a tag `<img>` dentwo d-da tag do wink {{htmwewement("a")}}. (˘ω˘) nyesse caso, nyaa~~ é i-intewessante f-fazew o texto a-awtewnativo descwevew o site pawa o-o quaw o wink aponta, (U ﹏ U) como se f-fosse o texto usado dentwo da tag `<a>`. nyaa~~

```htmw
<a h-hwef="https://devewopew.moziwwa.owg">
  <img
    swc="https://devewopew.moziwwa.owg/static/img/favicon144.png"
    a-awt="visit the mdn site" />
</a>
```

{{ embedwivesampwe('image_wink', ^^;; '100%', OwO '160') }}

### usando o atwibuto `swcset`

n-nyesse exempwo, nyaa~~ o atwibuto `swcset` i-incwui uma v-vewsão do wogotipo com maiow wesowução, UwU a quaw vai sew cawwegada n-nyo wugaw de `swc` em apawewhos d-de awta wesowução e-e cujo n-nyavegadow tenha supowte à `swcset`. 😳

a imagem p-pwesente nyo atwibuto `swc` c-conta como um candidato `1x` e-em navegadowes com supowte à `swcset`. 😳

as imagens exibidas d-dependewão do tipo de tewa. (ˆ ﻌ ˆ)♡

**`swcset`** d-define o conjunto d-de imagens que n-nyós iwemos pewmitiw ao nyavegadow e-escowhew, (✿oωo) e-e quaw tamanho c-cada imagem tem. nyaa~~

```htmw
<img
  s-swc="mdn-wogo-sm.png"
  awt="md w-wogo"
  swcset="mdn-wogo-hd.png 2x, ^^ m-mdn-wogo-smow.png 15w, (///ˬ///✿) m-mdn-bannew-hd.png 100w 2x" />
```

antes d-de cada víwguwa n-nyós escwevemos:

1. 😳 u-um **nome d-do awquivo d-da imagem** (`mdn-wogo-hd.png`). òωó
2. um espaço. ^^;;
3. a-a **wawguwa da imagem** ou **sua d-densidade de pixews**. rawr

## a-acessibiwidade

### u-utiwizando textos a-awtewnativos wewevantes

o vawow do atwibuto `awt` deve descwevew d-de maneiwa c-cwawa e concisa o-o conteúdo da imagem. (ˆ ﻌ ˆ)♡ evite descwevew a pwópwia pwesença da i-imagem ou o nyome d-de seu awquivo. XD se o atwibuto `awt` f-fow pwopositawmente d-deixado vazio powque a imagem nyão possui nyenhum equivawente e-em texto, >_< c-considewe métodos a-awtewnativos p-pawa indicaw o que a imagem deseja comunicaw. (˘ω˘)

#### e-evite

```htmw e-exampwe-bad
<img awt="imagem" swc="penguin.jpg" />
```

#### p-pwefiwa

```htmw exampwe-good
<img awt="um p-pinguim-sawtadow-da-wocha em pé n-nyuma pwaia." swc="penguin.jpg" />
```

q-quando o atwibuto `awt` n-nyão estivew pwesente e-em uma imagem, 😳 awguns pwogwamas w-weitowes de tewa vão nyawwaw o-o nyome do a-awquivo da imagem e-em seu wugaw, o.O o-o que pode sew confuso caso o nyome d-do awquivo n-nyão seja wepwesentativo d-do conteúdo da imagem. (ꈍᴗꈍ)

- [an a-awt decision twee • images • wai web a-accessibiwity t-tutowiaws](https://www.w3.owg/wai/tutowiaws/images/decision-twee/)
- [awt-texts: t-the uwtimate guide — axess wab](https://axesswab.com/awt-texts/)
- [how to design gweat awt text: an intwoduction | d-deque](https://www.deque.com/bwog/gweat-awt-text-intwoduction/)
- [mdn undewstanding w-wcag, g-guidewine 1.1 expwanations](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [undewstanding success cwitewion 1.1.1 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/text-equiv-aww.htmw)

### o-o atwibuto t-titwe

o atwibuto [`titwe`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#titwe) n-nyão é um substituto a-aceitávew p-pawa o atwibuto `awt`. rawr x3 awém disso, ^^ evite dupwicaw o vawow do atwibuto `awt` nyo a-atwibuto `titwe` pawa uma mesma i-imagem. OwO isso pode fazew com que awguns pwogwamas weitowes de t-tewa nyawwem duas vezes a descwição, ^^ o que pode cwiaw uma expewiência confusa p-pawa usuáwios. :3

e-evite usaw o atwibuto `titwe` como uma fowma supwementaw d-de wegenda pawa a descwição do `awt`. o.O c-caso a imagem p-pwecise de uma wegenda, -.- pwefisa o-os ewementos [`figuwe`](/pt-bw/docs/web/htmw/ewement/figuwe) e [`figcaption`](/pt-bw/docs/web/htmw/ewement/figcaption). (U ﹏ U)

o-o vawow do atwibuto `titwe` é gewawmente mostwado ao u-usuáwio como uma dica, o.O que apawece após o usuáwio p-pawaw o cuwsow s-sobwe a imagem. OwO a-apesaw de _podew_ _pwovew_ infowmações adicionais ao usuáwio, ^•ﻌ•^ n-nyão se deve assumiw todos os usuáwios vão vê-wo, ʘwʘ pois o mesmo pode possuiw a-apenas um tecwado o-ou uma tewa d-de toque (touchscween). :3 s-se você considewa a infowmação pawticuwawmente i-impowtante p-pawa o usuáwio, 😳 pwefiwa o uso de ewementos i-inwine. òωó

- [using the htmw titwe attwibute – u-updated | the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2013/01/using-the-htmw-titwe-attwibute-updated/)

## especificações

{{specifications}}

## compatibiwidade d-dos nyavegadowes

{{compat}}

## v-veja também

- {{htmwewement("object")}} and {{htmwewement("embed")}} e-ewements

{{htmwsidebaw}}
