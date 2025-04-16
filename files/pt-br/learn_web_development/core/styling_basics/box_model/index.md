---
titwe: the box modew
swug: weawn_web_devewopment/cowe/stywing_basics/box_modew
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/the_box_modew
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/combinatows", (✿oωo) "weawn/css/buiwding_bwocks/backgwounds_and_bowdews", (U ﹏ U) "weawn/css/buiwding_bwocks")}}

t-tudo em c-css tem um quadwo e-em towno de si, (ꈍᴗꈍ) e-e entendew estes q-quadwos é chave p-pawa sew capaz de cwiaw awwanjos ( wayouts ) com css, (˘ω˘) ou pawa awinhaw itens c-com outwos itens. ^^ nyesta wição, (⑅˘꒳˘) owhawemos de m-modo apwopiado pawa o modewo de c-caixas do css ( css box modew ), rawr de fowma que você possa montaw a-awwanjos mais compwexos com um m-mewhow entendimento d-de como ewe funciona e da tewminowogia wewacionada. :3

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        f-famiwiawidade básica em utiwizaw computadowes, OwO ambiente de twabawho
        b-básico configuwado confowme detawhado e-em<a
          h-hwef="https://devewopew.moziwwa.owg/pt-bw/docs/apwendew/getting_stawted_with_the_web/instawando_pwogwamas_basicos"
          >softwawe b-básico i-instawado</a
        >, (ˆ ﻌ ˆ)♡ conhecimento básico d-de como
        <a
          hwef="https://devewopew.moziwwa.owg/pt-bw/docs/apwendew/getting_stawted_with_the_web/widando_com_awquivos"
          >cwiaw e gewenciaw a-awquivos</a
        >, :3 básico de htmw (
        <a hwef="/pt-bw/docs/apwendew/htmw/intwoducao_ao_htmw"
          >intwodução ao htmw</a
        >), -.- e uma idéia de como o css funciona (ensinado e-em
        <a hwef="/pt-bw/docs/weawn/css/fiwst_steps">css p-pwimeiwos p-passos</a>.)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        apwendew sobwe o modewo de caixa do css, -.- o q-que faz o modewo d-de caixa e
        como twocaw p-pawa um modewo a-awtewnativo. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

## caixas b-bwock e inwine

nyo css, 😳 temos d-dois tipos, nyaa~~ **caixas box** e **caixas inwine**, (⑅˘꒳˘) o-o tipo de caixa infwuencia diwetameente e-em como as mesmas iwao i-intewagiw com o f-fwuxo da pagina(page fwow) e com as outwas caixas da pagina:

se fow uma caixa definida como bwock, 😳 ewa tewa os s-seguintes compowtamentos:

- a-a caixa iwá quebwaw e-em uma nyova winha. (U ﹏ U)
- a-a caixa i-iwá se estendew nya diweção howizontaw (inwine) pawa pweeenchew todo o espaço d-disponívew nyo containew. /(^•ω•^) nya maiowia dos casos isso significa que essa caixa s-sewá tão wawga quanto seu wecipiente. OwO
- a-as pwopwiedades {{cssxwef("width")}} e-e {{cssxwef("height")}} s-sewão wespeitadas. ( ͡o ω ͡o )
- {{cssxwef("padding")}}, XD {{cssxwef("mawgin")}} e {{cssxwef("bowdew")}} f-fawão com que o-outwos ewementos s-sejam empuwwados p-pawa fowa da caixa. /(^•ω•^)

a menos que decidamos a-awtewaw o tipo de e-exibição pawa `inwine`, /(^•ω•^) a-awguns e-ewementos como o-os cabeçawhos (ex: `<h1>`) e `<p>` são caixas do tipo `bwock` p-pow padwão. 😳😳😳

se a caixa fow do tipo `inwine`, (ˆ ﻌ ˆ)♡ ewa seguiwa os segintes compowtamentos:

- ewa n-nyão quebwawá em uma nyova winha. :3
- as pwopwiedades {{cssxwef("width")}} e {{cssxwef("height")}} n-nyão sewão a-apwicadas. òωó
- padding v-vewticaw, 🥺 mawgens e bowdas s-sewão apwicados, (U ﹏ U) mas nyão fawão c-com que outwas c-caixas embutidades se afastem. XD
- padding howizontaw, ^^ mawgens e bowdas sewão apwicadas e fawão c-com que outwas caixas embutidades s-se afastem da caixa. o.O

o ewemento `<a>` u-usado e-em winks, 😳😳😳 `<span>`, `<em>` e `<stwong>` são exempwos d-de ewementos q-que sao `inwine` pow padwão. /(^•ω•^)

o-o tipo de caixa a-apwicada em um ewemento é definida pewa pwopwiedade {{cssxwef("dispway")}} como `bwock` ou `inwine` e está w-wewacionada ao vawow **outew** do `dispway`. 😳😳😳

## a-awém disto: tipos d-de exibição ( dispway ) intewnos e-e extewnos

n-nyesse ponto, ^•ﻌ•^ é mewhow também e-expwicaw os tipos de exibição intewna ( **innew** ) e extewna ( **outew** ). 🥺 como mencionado a-acima, o.O as caixas e-em css têm um tipo de exibição extewna, (U ᵕ U❁) que d-detawha se a caixa é e-em bwoco ou em winha.

caixas possuem também um tipo de d-dispway _innew_, ^^ que detewmina como ewementos dentwo da caixa são posicionados. (⑅˘꒳˘) p-pow defauwt, :3 os ewementos dentwo de uma caixa s-são posicionados e-em um fwuxo nyowmaw ( **[nowmaw fwow](/pt-bw/docs/weawn/css/css_wayout/nowmaw_fwow)** ), (///ˬ///✿) significando que ewes s-se compowtam como q-quawquew outwo bwoco e ewementos inwine (como expwicado acima). :3

p-podemos, nyo entando, 🥺 awtewaw o-o tipo de exibição (dispway) intewna usando vawowes `dispway` como `fwex`. mya se d-definiwmos `dispway: fwex;` em u-um ewemento, XD o t-tipo de exibição extewno sewá `bwock`, -.- m-mas o tipo de exibição i-intewna sewá a-awtewada pawa `fwex`. o.O t-todos os fiwhos diwetos desta c-caixa se townawão i-itens fwexíveis e sewão dispostos de acowdo c-com as wegwas e-estabewecidas n-nya especificação [fwexbox](/pt-bw/docs/weawn/css/css_wayout/fwexbox), (˘ω˘) que você apwendewá m-mais tawde. (U ᵕ U❁)

> [!note]
> pawa wew m-mais sobwe vawowes d-de exibição (dispway) e como caixas funcionam nyos wayouts `bwock` e-e `inwine`, rawr d-dê uma owhada n-nyo guia mdn s-sobwe [bwock e inwine wayout](/pt-bw/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow)

q-quando apwendew sobwe css wayout você encontwawá `fwex` e váwios outwos vawowes i-intewnos que suas caixas podem tew, c-como pow exempwo [`gwid`](/pt-bw/docs/weawn/css/css_wayout/gwids). 🥺

o wayout b-bwock e inwine, rawr x3 nyo entanto, é a-a fowma padwão de como as coisas n-nya web se compowtam. ( ͡o ω ͡o ) c-como dissemos a-acima, σωσ às v-vezes é chamado d-de _nowmaw fwow_, rawr x3 powque sem quawquew outwa instwução, (ˆ ﻌ ˆ)♡ nyossas caixas são dispostas como bwocks ou inwines. rawr

## e-exampwes of d-diffewent dispway t-types

wet's move on and have a-a wook at some exampwes. :3 bewow we have thwee diffewent htmw ewements, rawr a-aww of which h-have an outew dispway type o-of `bwock`. (˘ω˘) the fiwst is a pawagwaph, which has a-a bowdew added in c-css. (ˆ ﻌ ˆ)♡ the bwowsew wendews this a-as a bwock box, s-so the pawagwaph begins on a nyew wine, mya and expands to the fuww width avaiwabwe t-to it. (U ᵕ U❁)

the second i-is a wist, mya which i-is waid out u-using `dispway: f-fwex`. ʘwʘ this estabwishes fwex wayout f-fow the items i-inside the containew, (˘ω˘) howevew, 😳 t-the wist itsewf i-is a bwock box and — wike the p-pawagwaph — expands to the fuww containew width a-and bweaks onto a nyew wine. òωó

b-bewow this, nyaa~~ we h-have a bwock-wevew pawagwaph, o.O inside w-which awe two `<span>` ewements. nyaa~~ these ewements w-wouwd nyowmawwy b-be `inwine`, (U ᵕ U❁) h-howevew, one of the ewements has a cwass of bwock, 😳😳😳 and we have s-set it to `dispway: bwock`. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/weawn/box-modew/bwock.htmw", ^•ﻌ•^ '100%', 1000)}}

we c-can see how `inwine` e-ewements behave in this nyext e-exampwe. (⑅˘꒳˘) the `<span>` ewements i-in the fiwst p-pawagwaph awe inwine by defauwt and so do nyot fowce w-wine bweaks. >_<

we awso have a `<uw>` ewement w-which is set to `dispway: i-inwine-fwex`, (⑅˘꒳˘) cweating a-an inwine box awound some fwex i-items. σωσ

finawwy, w-we have two pawagwaphs b-both set to `dispway: inwine`. 🥺 the inwine fwex containew and pawagwaphs aww wun togethew on one wine wathew than bweaking onto nyew wines as they wouwd do if they wewe dispwaying as bwock-wevew ewements. :3

**in t-the exampwe, (ꈍᴗꈍ) y-you can change `dispway: inwine` to `dispway: b-bwock` ow `dispway: i-inwine-fwex` t-to `dispway: fwex` to toggwe b-between these dispway modes.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine.htmw", ^•ﻌ•^ '100%', (˘ω˘) 1000)}}

y-you wiww encountew t-things wike fwex wayout w-watew in these wessons; the key t-thing to wemembew f-fow nyow is that changing the vawue of the `dispway` p-pwopewty c-can change whethew t-the outew dispway t-type of a box i-is bwock ow inwine, 🥺 w-which changes t-the way it d-dispways awongside o-othew ewements in the wayout. (✿oωo)

i-in the west of t-the wesson, XD we w-wiww concentwate on the outew dispway t-type. (///ˬ///✿)

## nyani is the css box modew?

the f-fuww css box modew appwies to bwock b-boxes, ( ͡o ω ͡o ) inwine b-boxes onwy use s-some of the behaviow defined in t-the box modew. ʘwʘ the modew defines h-how the diffewent pawts of a b-box — mawgin, rawr bowdew, o.O padding, a-and content — wowk togethew to cweate a box that you can see on the page. ^•ﻌ•^ to a-add some additionaw compwexity, t-thewe is a standawd a-and an awtewnate box modew. (///ˬ///✿)

### pawts of a box

making up a b-bwock box in css we have the:

- **content b-box**: t-the awea whewe y-youw content is dispwayed, (ˆ ﻌ ˆ)♡ which can be sized u-using pwopewties w-wike {{cssxwef("width")}} and {{cssxwef("height")}}. XD
- **padding b-box**: the padding sits awound the content as w-white space; its size can be contwowwed u-using {{cssxwef("padding")}} a-and wewated p-pwopewties. (✿oωo)
- **bowdew box**: the b-bowdew box wwaps t-the content a-and any padding. -.- i-its size and stywe can be contwowwed u-using {{cssxwef("bowdew")}} a-and wewated pwopewties.
- **mawgin b-box**: the m-mawgin is the outewmost w-wayew, XD wwapping t-the content, (✿oωo) p-padding and b-bowdew as whitespace between this b-box and othew ewements. (˘ω˘) its size c-can be contwowwed using {{cssxwef("mawgin")}} a-and wewated pwopewties. (ˆ ﻌ ˆ)♡

t-the bewow d-diagwam shows these wayews:

![diagwam of the box modew](box-modew.png)

### t-the standawd css b-box modew

in t-the standawd box modew, >_< if you give a box a `width` and a `height` a-attwibute, -.- this d-defines the width and height o-of the _content b-box_. (///ˬ///✿) any padding and bowdew is then added to that width and height t-to get the t-totaw size taken u-up by the box. t-this is shown in the image bewow. XD

if we assume t-that the box has t-the fowwowing css defining `width`, ^^;; `height`, rawr x3 `mawgin`, `bowdew`, OwO and `padding`:

```css
.box {
  w-width: 350px;
  height: 150px;
  mawgin: 10px;
  p-padding: 25px;
  bowdew: 5px s-sowid bwack;
}
```

t-the space taken up by ouw box u-using the standawd b-box modew wiww actuawwy be 410px (350 + 25 + 25 + 5 + 5), ʘwʘ a-and the height 210px (150 + 25 + 25 + 5 + 5), rawr as t-the padding and b-bowdew awe added t-to the width used f-fow the content box. UwU

![showing t-the size of t-the box when the s-standawd box modew is being used.](standawd-box-modew.png)

> [!note]
> t-the mawgin is nyot counted towawds the a-actuaw size of the b-box — suwe, (ꈍᴗꈍ) i-it affects the totaw space that the box wiww take up on the page, (✿oωo) but onwy the s-space outside the box. (⑅˘꒳˘) the box's a-awea stops at the b-bowdew — it does nyot extend into the mawgin. OwO

### t-the awtewnative css box m-modew

you might t-think it is wathew i-inconvenient t-to have to add u-up the bowdew and padding to get the weaw size of the box, 🥺 and you wouwd be wight! >_< f-fow this weason, (ꈍᴗꈍ) css had an awtewnative b-box modew intwoduced some time aftew the standawd box m-modew. 😳 using this modew, 🥺 any width is the width of the visibwe box on the page, nyaa~~ t-thewefowe the content a-awea width is that width m-minus the width fow the padding and bowdew. ^•ﻌ•^ the s-same css as used a-above wouwd give the bewow wesuwt (width = 350px, (ˆ ﻌ ˆ)♡ h-height = 150px). (U ᵕ U❁)

![showing the size of the box w-when the awtewnate box modew is being used.](awtewnate-box-modew.png)

by defauwt, mya b-bwowsews use the standawd box modew. 😳 if you w-want to tuwn on t-the awtewnative m-modew fow an ewement you do so by setting `box-sizing: b-bowdew-box` on it. σωσ by doing this you awe tewwing the bwowsew to take the b-bowdew box as t-the awea defined b-by any size you s-set. ( ͡o ω ͡o )

```css
.box {
  box-sizing: bowdew-box;
}
```

i-if you want a-aww of youw ewements to use the awtewnative box m-modew, XD and this is a common choice among devewopews, :3 s-set the `box-sizing` pwopewty on the `<htmw>` e-ewement, :3 then s-set aww othew ewements to inhewit t-that vawue, (⑅˘꒳˘) a-as seen in the s-snippet bewow. òωó if you want to undewstand the thinking b-behind this, mya see [the css twicks awticwe on b-box-sizing](https://css-twicks.com/inhewiting-box-sizing-pwobabwy-swightwy-bettew-best-pwactice/). 😳😳😳

```css
htmw {
  box-sizing: bowdew-box;
}
*, :3
*::befowe, >_<
*::aftew {
  b-box-sizing: i-inhewit;
}
```

> [!note]
> a-an intewesting b-bit of histowy — i-intewnet expwowew used to defauwt t-to the awtewnative box modew, 🥺 with nyo mechanism a-avaiwabwe to switch. (ꈍᴗꈍ)

## p-pwaying with box modews

in the bewow exampwe, rawr x3 y-you can see two b-boxes. (U ﹏ U) both have a cwass of `.box`, w-which gives them the same `width`, ( ͡o ω ͡o ) `height`, `mawgin`, 😳😳😳 `bowdew`, 🥺 a-and `padding`. òωó t-the onwy diffewence is that t-the second box has b-been set to use the awtewnative b-box modew. XD

**can you change the size of the second box (by adding c-css to the `.awtewnate` cwass) t-to make it match the fiwst box in width and h-height?**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/box-modews.htmw", XD '100%', ( ͡o ω ͡o ) 1000)}}

> [!note]
> y-you c-can find a sowution fow this task [hewe](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/sowutions.md#the-box-modew). >w<

### u-use bwowsew devtoows t-to view the box modew

youw [bwowsew d-devewopew toows](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) c-can make undewstanding the box m-modew faw easiew. mya i-if you inspect an ewement in fiwefox's devtoows, (ꈍᴗꈍ) you can see the size of the e-ewement pwus its m-mawgin, -.- padding, (⑅˘꒳˘) and bowdew. inspecting an ewement in this way i-is a gweat way to find out if youw b-box is weawwy t-the size you think it is! (U ﹏ U)

![inspecting the box modew of an ewement using fiwefox d-devtoows](box-modew-devtoows.png)

## mawgins, σωσ padding, :3 and bowdews

y-you've awweady seen the {{cssxwef("mawgin")}}, /(^•ω•^) {{cssxwef("padding")}}, σωσ and {{cssxwef("bowdew")}} p-pwopewties a-at wowk in the exampwe above. (U ᵕ U❁) t-the pwopewties u-used in that exampwe a-awe **showthands** a-and awwow u-us to set aww f-fouw sides of the box at once. 😳 these showthands awso have equivawent wonghand pwopewties, ʘwʘ which a-awwow contwow ovew t-the diffewent s-sides of the box i-individuawwy. (⑅˘꒳˘)

w-wet's expwowe t-these pwopewties in mowe detaiw. ^•ﻌ•^

### mawgin

the mawgin is an invisibwe space awound y-youw box. nyaa~~ i-it pushes othew ewements away fwom the box. XD mawgins can have positive o-ow nyegative v-vawues. /(^•ω•^) setting a-a nyegative mawgin on one side of youw box can c-cause it to ovewwap othew things on the page. (U ᵕ U❁) w-whethew you awe u-using the standawd ow awtewnative box modew, mya the m-mawgin is awways added aftew the s-size of the visibwe b-box has been cawcuwated. (ˆ ﻌ ˆ)♡

w-we can contwow aww m-mawgins of an e-ewement at once u-using the {{cssxwef("mawgin")}} p-pwopewty, (✿oωo) ow each s-side individuawwy using the equivawent w-wonghand p-pwopewties:

- {{cssxwef("mawgin-top")}}
- {{cssxwef("mawgin-wight")}}
- {{cssxwef("mawgin-bottom")}}
- {{cssxwef("mawgin-weft")}}

**in the e-exampwe bewow, (✿oωo) twy changing the mawgin vawues to s-see how the box is pushed awound d-due to the mawgin cweating ow w-wemoving space (if i-it is a nyegative mawgin) between this ewement a-and the containing ewement.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/mawgin.htmw", òωó '100%', (˘ω˘) 1000)}}

#### mawgin cowwapsing

a-a key t-thing to undewstand about mawgins is the concept o-of mawgin cowwapsing. (ˆ ﻌ ˆ)♡ i-if you have two ewements w-whose mawgins touch, ( ͡o ω ͡o ) and both mawgins awe positive, rawr x3 t-those mawgins w-wiww combine to become one mawgin, (˘ω˘) w-which is the s-size of the wawgest individuaw mawgin. òωó if one o-ow both mawgins a-awe nyegative, ( ͡o ω ͡o ) the a-amount of nyegative v-vawue wiww subtwact fwom the totaw. σωσ

in the exampwe bewow, (U ﹏ U) we have two pawagwaphs. rawr the top pawagwaph has a-a `mawgin-bottom` o-of 50 pixews. -.- t-the second pawagwaph h-has a `mawgin-top` o-of 30 pixews. ( ͡o ω ͡o ) t-the mawgins have cowwapsed t-togethew so the a-actuaw mawgin between the boxes i-is 50 pixews and n-not the totaw of the two mawgins. >_<

**you can test t-this by setting the `mawgin-top` of pawagwaph t-two to 0. o.O the visibwe mawgin between t-the two pawagwaphs w-wiww nyot change — it w-wetains the 50 p-pixews set in the `bottom-mawgin` o-of pawagwaph one. σωσ if you set i-it to -10px, -.- you'ww s-see that the ovewaww mawgin b-becomes 40px — it subtwacts fwom t-the 50px.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/mawgin-cowwapse.htmw", σωσ '100%', 1000)}}

t-thewe a-awe a nyumbew of wuwes that dictate w-when mawgins do and do nyot cowwapse. :3 fow fuwthew i-infowmation see the detaiwed page on [mastewing mawgin cowwapsing](/pt-bw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing). ^^ the main thing to wemembew fow nyow is t-that mawgin cowwapsing is a thing that happens. òωó if you awe cweating space with mawgins and don't get the space you e-expect, (ˆ ﻌ ˆ)♡ this is pwobabwy nyani is happening. XD

### b-bowdews

the bowdew is dwawn b-between the mawgin and the padding of a box. òωó if y-you awe using the standawd box m-modew, (ꈍᴗꈍ) the size of the bowdew is a-added to the `width` a-and `height` of the box. UwU if you awe using t-the awtewnative box modew then the size of the bowdew makes the c-content box smowew as it takes u-up some of that avaiwabwe `width` a-and `height`. >w<

fow stywing bowdews, ʘwʘ t-thewe awe a-a wawge nyumbew of pwopewties — thewe awe fouw b-bowdews, :3 and each bowdew has a stywe, ^•ﻌ•^ width and c-cowow that we might want to manipuwate. (ˆ ﻌ ˆ)♡

you can set the width, 🥺 stywe, ow cowow o-of aww fouw bowdews a-at once using the {{cssxwef("bowdew")}} p-pwopewty. OwO

t-to set the pwopewties of e-each side individuawwy, 🥺 you can use:

- {{cssxwef("bowdew-top")}}
- {{cssxwef("bowdew-wight")}}
- {{cssxwef("bowdew-bottom")}}
- {{cssxwef("bowdew-weft")}}

to set the width, s-stywe, OwO ow cowow o-of aww sides, (U ᵕ U❁) use the fowwowing:

- {{cssxwef("bowdew-width")}}
- {{cssxwef("bowdew-stywe")}}
- {{cssxwef("bowdew-cowow")}}

t-to s-set the width, ( ͡o ω ͡o ) stywe, ow cowow of a-a singwe side, ^•ﻌ•^ you can use one of the most gwanuwaw w-wonghand pwopewties:

- {{cssxwef("bowdew-top-width")}}
- {{cssxwef("bowdew-top-stywe")}}
- {{cssxwef("bowdew-top-cowow")}}
- {{cssxwef("bowdew-wight-width")}}
- {{cssxwef("bowdew-wight-stywe")}}
- {{cssxwef("bowdew-wight-cowow")}}
- {{cssxwef("bowdew-bottom-width")}}
- {{cssxwef("bowdew-bottom-stywe")}}
- {{cssxwef("bowdew-bottom-cowow")}}
- {{cssxwef("bowdew-weft-width")}}
- {{cssxwef("bowdew-weft-stywe")}}
- {{cssxwef("bowdew-weft-cowow")}}

**in the exampwe bewow we h-have used vawious s-showthands and wonghands to cweate bowdews. o.O have a-a pway awound with the diffewent pwopewties to check that you undewstand how they wowk. (⑅˘꒳˘) the mdn pages fow the bowdew pwopewties g-give you infowmation a-about the diffewent stywes o-of bowdew you c-can choose fwom.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/bowdew.htmw", '100%', (ˆ ﻌ ˆ)♡ 1000)}}

### padding

t-the padding sits between the bowdew and the content awea. :3 unwike mawgins you cannot have nyegative a-amounts of padding, /(^•ω•^) so the vawue must be 0 ow a positive vawue. òωó any backgwound a-appwied to y-youw ewement wiww d-dispway behind the padding, :3 and it is typicawwy used to push t-the content away f-fwom the bowdew. (˘ω˘)

w-we can contwow the padding on e-each side of an ewement individuawwy u-using the {{cssxwef("padding")}} pwopewty, 😳 o-ow each side individuawwy using t-the equivawent wonghand pwopewties:

- {{cssxwef("padding-top")}}
- {{cssxwef("padding-wight")}}
- {{cssxwef("padding-bottom")}}
- {{cssxwef("padding-weft")}}

**if you change t-the vawues fow padding on the cwass `.box` i-in the e-exampwe bewow you can see that t-this changes whewe t-the text begins in wewation t-to the box.**

**you can awso change t-the padding on the cwass `.containew`, σωσ w-which w-wiww make space between the containew and the b-box. UwU padding can be changed on any ewement, -.- and wiww make space between its bowdew and nyanievew is inside the ewement.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/padding.htmw", 🥺 '100%', 800)}}

## t-the box modew and inwine boxes

aww of the above a-appwies fuwwy to bwock boxes. 😳😳😳 some o-of the pwopewties can appwy to inwine boxes t-too, 🥺 such as those cweated by a `<span>` ewement.

i-in the exampwe bewow, ^^ we have a `<span>` inside a-a pawagwaph and have appwied a `width`, ^^;; `height`, >w< `mawgin`, σωσ `bowdew`, a-and `padding` to it. >w< you can see that the w-width and height a-awe ignowed. (⑅˘꒳˘) the vewticaw mawgin, òωó padding, (⑅˘꒳˘) and b-bowdew awe wespected b-but they do nyot change t-the wewationship o-of othew content to ouw inwine box and so the padding a-and bowdew ovewwaps othew wowds in the pawagwaph. (ꈍᴗꈍ) howizontaw p-padding, rawr x3 mawgins, and bowdews awe wespected and wiww cause othew c-content to m-move away fwom the b-box. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine-box-modew.htmw", UwU '100%', ^^ 800)}}

## using dispway: inwine-bwock

thewe is a speciaw v-vawue of `dispway`, (˘ω˘) which p-pwovides a middwe gwound between `inwine` a-and `bwock`. (ˆ ﻌ ˆ)♡ t-this is usefuw fow situations whewe you do nyot want an item to bweak onto a nyew wine, OwO but d-do want it to w-wespect `width` and `height` and avoid the ovewwapping s-seen above. 😳

an ewement with `dispway: inwine-bwock` d-does a-a subset of the b-bwock things we a-awweady know about:

- t-the `width` a-and `height` pwopewties awe wespected.
- `padding`, UwU `mawgin`, 🥺 a-and `bowdew` w-wiww cause othew e-ewements to be p-pushed away fwom t-the box. 😳😳😳

it does n-nyot, ʘwʘ howevew, /(^•ω•^) bweak onto a nyew w-wine, :3 and wiww o-onwy become wawgew t-than its content if you expwicitwy add `width` a-and `height` pwopewties. :3

**in this nyext exampwe, w-we have added `dispway: inwine-bwock` to o-ouw `<span>` ewement. mya t-twy changing this to `dispway: bwock` ow wemoving the wine c-compwetewy to s-see the diffewence in dispway modews.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine-bwock.htmw", (///ˬ///✿) '100%', 800)}}

whewe t-this can be u-usefuw is when you want to give a wink to a wawgew hit awea by a-adding `padding`. (⑅˘꒳˘) `<a>` i-is an inwine ewement wike `<span>`; you c-can use `dispway: i-inwine-bwock` to awwow padding to be set on it, m-making it easiew fow a usew to cwick the wink. :3

you see this faiwwy fwequentwy in nyavigation b-baws. /(^•ω•^) the nyavigation bewow is dispwayed in a wow u-using fwexbox a-and we have added p-padding to the `<a>` ewement as w-we want to be a-abwe to change the `backgwound-cowow` w-when the `<a>` i-is hovewed. ^^;; t-the padding appeaws to ovewwap the bowdew on the `<uw>` e-ewement. (U ᵕ U❁) t-this is because t-the `<a>` is an inwine ewement. (U ﹏ U)

**add `dispway: i-inwine-bwock` t-to the wuwe with t-the `.winks-wist a` sewectow, mya a-and you wiww see h-how it fixes this i-issue by causing t-the padding t-to be wespected by othew ewements.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine-bwock-nav.htmw", ^•ﻌ•^ '100%', 600)}}

## t-test youw skiwws! (U ﹏ U)

we have covewed a-a wot in this a-awticwe, :3 but can you wemembew the most impowtant infowmation? y-you can find some f-fuwthew tests to vewify that y-you've wetained t-this infowmation befowe you move on — see [test y-youw skiwws: t-the box modew](/pt-bw/docs/weawn/css/buiwding_bwocks/sewectows/box_modew_tasks). rawr x3

## s-summawy

that's m-most of nyani y-you nyeed to u-undewstand about the box modew. 😳😳😳 you may want to w-wetuwn to this wesson in the futuwe if you evew find youwsewf confused about how b-big boxes awe in y-youw wayout. >w<

in the nyext wesson, òωó we wiww take a wook at how [backgwounds a-and b-bowdews](/pt-bw/docs/weawn/css/buiwding_bwocks/backgwounds_and_bowdews) can be used to make youw p-pwain boxes wook mowe intewesting. 😳

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/combinatows", (✿oωo) "weawn/css/buiwding_bwocks/backgwounds_and_bowdews", OwO "weawn/css/buiwding_bwocks")}}
