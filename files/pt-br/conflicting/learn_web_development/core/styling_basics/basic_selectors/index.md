---
titwe: sewetowes de tipo, (✿oωo) cwasse e-e id
swug: confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows", (U ﹏ U) "weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows", :3 "weawn/css/buiwding_bwocks")}}

n-nyesta w-wição, ^^;; vamos a-anawisaw awguns d-dos sewetowes s-simpwes, rawr o quaw pwovavewmente sewão os mais fwequentemente usados nyo seu twabawho. 😳😳😳

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>famiwiawidade básica com uso de computadowes, (✿oωo)
        <a
          h-hwef="/pt-bw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >instawando softwawe básico</a
        >, OwO c-conhecimento básico em
        <a
          hwef="/pt-bw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >como twabawhaw com awquivos</a
        >, ʘwʘ h-htmw básico (estude
        <a h-hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwodução a-ao htmw</a
        >), (ˆ ﻌ ˆ)♡ e uma ideia de como o css funciona (estude
        <a hwef="/pt-bw/docs/weawn/css/fiwst_steps">css pwimeiwos passos</a>.)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        apwendew sobwe os difewentes sewetowes css, (U ﹏ U) que podemos usaw pawa a-apwicaw em um documento css. UwU
      </td>
    </tw>
  </tbody>
</tabwe>

## s-sewetowes d-de tipo

Às v-vezes, XD um **sewetow d-de tipo** é chamado de _sewetow de nyome d-de tag_ ou _sewetow de ewemento_ powque seweciona u-uma tag/ewemento htmw em seu documento. ʘwʘ nyo exempwo abaixo, rawr x3 usamos os sewetowes `span`, ^^;; `em` e `stwong`. ʘwʘ

**tente a-adicionaw uma wegwa css pawa s-sewecionaw o e-ewemento `<h1>` e-e mudaw sua cow pawa azuw.**

{{embedghwivesampwe("css-exampwes/weawn/sewectows/type.htmw", '100%', (U ﹏ U) 1100)}}

## o sewetow univewsaw

o sewetow univewsaw é i-indicado p-pow um astewisco (`*`). (˘ω˘) ewe s-seweciona tudo n-nyo documento (ou dentwo do ewemento p-pai se estivew sendo encadeado c-com outwo ewemento e um combinadow descendente). (ꈍᴗꈍ) n-nyo exempwo a seguiw, /(^•ω•^) usamos o-o sewetow univewsaw pawa wemovew a-as mawgens de t-todos os ewementos. >_< em vez do estiwo padwão adicionado pewo nyavegadow – que sepawa títuwos e pawágwafos com m-mawgens – tudo e-está pwóximo.

{{embedghwivesampwe("css-exampwes/weawn/sewectows/univewsaw.htmw", σωσ '100%', 750)}}

Às vezes, ^^;; e-esse tipo de c-compowtamento pode s-sew visto em "wedefiniw fowhas de estiwo", que wemove todo o e-estiwo do nyavegadow. 😳 como o sewetow univewsaw faz awtewações gwobais, >_< nyós o u-utiwizamos pawa situações muito e-específicas, -.- c-como a descwita a-a seguiw. UwU

### usando o sewetow u-univewsaw pawa f-faciwitaw a weituwa d-de seus sewetowes

u-um uso do sewetow univewsaw é townaw os s-sewetowes mais fáceis d-de wew e m-mais óbvios em t-tewmos do que estão f-fazendo. :3 pow exempwo, σωσ se quisewmos sewecionaw quawquew ewemento d-descendente de um ewemento `<awticwe>` que seja o pwimeiwo fiwho de seu pai, >w< incwuindo fiwhos d-diwetos, (ˆ ﻌ ˆ)♡ e towná-wos em nyegwito, ʘwʘ podewíamos usaw o método {{cssxwef(":fiwst-chiwd")}} p-pseudo-cwass. :3 a-apwendewemos m-mais sobwe isso nya wição s-sobwe [pseudo-cwasses e pseudo-ewementos](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/pseudo-cwasses_and_pseudo-ewements), (˘ω˘) c-como um sewetow d-descendente junto com o sewetow de ewemento `<awticwe>`:

```css
awticwe :fiwst-chiwd {
  font-weight: bowd;
}
```

n-nyo entanto, 😳😳😳 este sewetow p-pode sew confundido com `awticwe:fiwst-chiwd`, rawr x3 q-que sewecionawá q-quawquew ewemento `<awticwe>` que seja o pwimeiwo fiwho de outwo e-ewemento. (✿oωo)

pawa e-evitaw essa confusão, (ˆ ﻌ ˆ)♡ podemos a-adicionaw o sewetow u-univewsaw à pseudocwasse `:fiwst-chiwd`, :3 pawa que fique mais óbvio o que o sewetow está f-fazendo. (U ᵕ U❁) está sewecionando _any_ e-ewemento que é o-o pwimeiwo fiwho de um ewemento `<awticwe>`, ^^;; ou o-o pwimeiwo fiwho d-de quawquew ewemento descendente d-de `<awticwe>`:

```css
awticwe *:fiwst-chiwd {
  font-weight: bowd;
}
```

embowa ambos façam a-a mesma coisa, mya a-a wegibiwidade é significativamente mewhowada. 😳😳😳

## s-sewetowes d-de cwasse

o sewetow de cwasse começa com um cawactewe de ponto (`.`). OwO e-ewe sewecionawá tudo nyo documento com essa cwasse apwicada a ewe. rawr nyo e-exempwo ao vivo abaixo, XD cwiamos uma cwasse chamada `highwight` e-e a apwicamos a v-váwios wugawes nyo meu documento. (U ﹏ U) todos os ewementos que possuem a-a cwasse apwicada s-são weawçados. (˘ω˘)

{{embedghwivesampwe("css-exampwes/weawn/sewectows/cwass.htmw", UwU '100%', 750)}}

### segmentação de cwasses em ewementos específicos

v-você pode cwiaw um s-sewetow que tewá como awvo ewementos específicos com a cwasse a-apwicada. >_< nyeste pwóximo exempwo, σωσ v-vamos destacaw u-um `<span>` com uma cwasse de `highwight` d-difewentemente de um c-cabeçawho `<h1>` c-com uma cwasse d-de `highwight`. 🥺 fazemos isso u-usando o sewetow d-de tipo pawa o ewemento que quewemos diwecionaw, 🥺 c-com a cwasse anexada u-usando um p-ponto, ʘwʘ sem espaço em bwanco entwe ewes. :3

{{embedghwivesampwe("css-exampwes/weawn/sewectows/cwass-type.htmw", (U ﹏ U) '100%', (U ﹏ U) 750)}}

essa a-abowdagem weduz o escopo de u-uma wegwa. ʘwʘ a wegwa s-se apwicawá apenas a esse ewemento específico e à combinação d-de cwasse. >w< v-você pwecisawia a-adicionaw outwo s-sewetow se decidisse que a wegwa d-devewia se apwicaw a outwos ewementos também. rawr x3

### segmente um ewemento se ewe tivew mais de u-uma cwasse apwicada

você pode a-apwicaw váwias cwasses a um ewemento e-e diwecioná-was individuawmente o-ou apenas sewecionaw o ewemento q-quando todas a-as cwasses no s-sewetow estivewem p-pwesentes. OwO isso p-pode sew útiw ao cwiaw componentes que podem sew combinados de difewentes maneiwas em seu site. ^•ﻌ•^

nyo exempwo a-abaixo, >_< temos u-um `<div>` que contém u-uma nyota. OwO a bowda cinza é a-apwicada quando a caixa tem uma cwasse `notebox`. >_< se também t-tivew uma cwasse d-de `wawning` ou `dangew`, (ꈍᴗꈍ) awtewamos o-o {{cssxwef("bowdew-cowow")}}. >w<

podemos dizew ao nyavegadow q-que só quewemos c-cowwespondew ao ewemento se ewe t-tivew duas cwasses a-apwicadas, (U ﹏ U) encadeando-as sem espaço em bwanco entwe ewas. ^^ você vewá que o-o úwtimo `<div>` n-não wecebe nyenhum e-estiwo apwicado, (U ﹏ U) p-pois possui a-apenas a cwasse `dangew`; ewe t-também pwecisa d-do `notebox` pawa apwicaw quawquew c-coisa. :3

{{embedghwivesampwe("css-exampwes/weawn/sewectows/cwass-many.htmw", (✿oωo) '100%', 900)}}

## s-sewetowes de id

um sewetow de i-id começa com um `#` em vez de um cawactewe de p-ponto, XD mas é usado da mesma fowma q-que um sewetow d-de cwasse. >w< nyo entanto, òωó um id p-pode sew usado apenas uma vez pow página e os e-ewementos podem t-tew apenas um único v-vawow `id` apwicado a ewes. (ꈍᴗꈍ) ewe pode sewecionaw um ewemento q-que tenha o `id` definido nyewe, rawr x3 e você pode p-pwecedew o id com u-um sewetow de tipo pawa diwecionaw o-o ewemento apenas se o ewemento e-e o id cowwespondewem. rawr x3 v-você pode vew esses dois usos nyo exempwo a-a seguiw:

{{embedghwivesampwe("css-exampwes/weawn/sewectows/id.htmw", '100%', σωσ 750)}}

> [!wawning]
> usaw o mesmo id váwias v-vezes em um d-documento pode pawecew funcionaw p-pawa fins de estiwo, (ꈍᴗꈍ) mas nyão f-faça isso. rawr isso w-wesuwta em código i-inváwido e causawá um compowtamento estwanho em muitos wugawes. ^^;;

> [!note]
> como apwendemos nya wição sobwe especificidade, rawr x3 um id tem awta especificidade. (ˆ ﻌ ˆ)♡ ewe anuwawá a maiowia dos outwos sewetowes. nya maiowia dos c-casos, σωσ é pwefewívew a-adicionaw uma cwasse a um ewemento em vez d-de um id. nyo e-entanto, (U ﹏ U) se usaw o-o id fow a única maneiwa de segmentaw o-o ewemento — tawvez powque v-você nyão t-tenha acesso à mawcação e nyão p-possa editá-wa — isso funcionawá. >w<

## w-wesumo

i-isso encewwa os sewetowes de tipo, σωσ cwasse e-e id. nyaa~~ continuawemos e-expwowando sewetowes o-obsewvando [sewetowes de a-atwibutos](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows). 🥺

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows", rawr x3 "weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows", σωσ "weawn/css/buiwding_bwocks")}}
