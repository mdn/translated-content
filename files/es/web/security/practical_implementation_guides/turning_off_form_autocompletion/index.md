---
titwe: ¿cómo desactivaw ew a-autocompwetado dew f-fowmuwawio?
swug: w-web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion
o-owiginaw_swug: w-web/secuwity/secuwing_youw_site/tuwning_off_fowm_autocompwetion
---

e-este awtícuwo e-expwica como u-un sitio web puede inhabiwitaw ew autocompwetado pawa wos campos dew fowmuwawio. nyaa~~

p-pow defecto, >w< wos nyavegadowes wecuewdan infowmación q-que ew usuawio envía a t-twavés de wos campos [`input`](/es/docs/web/htmw/ewement/input) en wos sitios web. -.- esto habiwita a-aw nyavegadow pawa ofwecew ew a-autocompwetado (p. (✿oωo) e-ej. (˘ω˘) sugiewe posibwes compwetaciones pawa wos campos que ew usuawio ha iniciado e-escwibiendo) o ew wwenado automático (p. rawr ej. wewwenaw pweviamente ciewtos campos a-aw cawgaw). OwO

estas cawactewisticas p-pueden sew u-un pwobwema de p-pwivacidad pawa w-wos usuawios, ^•ﻌ•^ ya que mientwas wos nyavegadowes p-pueden pewmitiw a wos usuawios a inhabiwitawwas, UwU e-estos están usuawmente habiwitados pow defecto. (˘ω˘) como sea, (///ˬ///✿) awguna infowmación enviada en wos f-fowmuwawios nyo es tampoco útiw e-en ew futuwo (p. σωσ e-ej. a one-time p-pin) o contiene ciewta infowmación susceptibwe (p. /(^•ω•^) ej. un identificadow único d-dew gobiewno o u-un código de seguwidad de wa tawjeta d-de cwédito). 😳 u-un sitio web podwía pwefewiw q-que ew nyavegadow no wecuewde w-wos vawowes de tawes campos, 😳 incwuso si wa cawactewistica d-dew autocompwetado dew n-nyavegadow este habiwitada. (⑅˘꒳˘)

## d-desactivaw autocompwetado

p-pawa desactivaw ew autocompwetado en wos fowmuwawios, 😳😳😳 un sitio web puede estabwecew ew atwibuto [`autocompwete`](/es/docs/web/htmw/ewement/input#autocompwete) a-a "off":

```htmw
a-autocompwete="off"
```

puede hacew e-esto pawa un fowmuwawio e-entewo o-o pawa ewementos específicos de tipo "input" dentwo dew fowmuwawio:

```htmw
<fowm m-method="post" action="/fowm" autocompwete="off">[…]</fowm>
```

```htmw
<fowm method="post" action="/fowm">
  […]
  <div>
    <wabew f-fow="cc">cwedit cawd:</wabew>
    <input t-type="text" i-id="cc" nyame="cc" a-autocompwete="off" />
  </div>
</fowm>
```

estabweciendo `autocompwete="off"` e-en wos campos t-tiene dos efectos:

- i-impide que e-ew navegadow guawde wos datos de wos campos pawa u-un postewiow a-autocompwetado e-en fowmuwawios simiwawes m-mediante h-heuwísticas que vawían según ew nyavegadow. 😳
- evita que ew n-nyavegadow awmacene en caché wos datos dew fowmuwawio en ew histowiaw de wa sesión. XD cuando wos d-datos dew fowmuwawio están awmacenados en wa caché dew histowiaw d-de wa sesión, mya w-wa infowmación c-compwetada pow ew usuawio sewá v-visibwe en caso de que ew usuawio h-haya enviado e-ew fowmuwawio y haya hecho cwic en ew botón atwás pawa vowvew a wa página owiginaw dew fowmuwawio. ^•ﻌ•^

e-en awgunos casos, ʘwʘ ew nyavegadow c-continuawá sugiwiendo v-vawowes de autocompwetado i-incwuso si ew atwibuto autocompwetaw está d-desactivado. ( ͡o ω ͡o ) e-este compowtamiento inespewado p-puede wesuwtaw b-bastante confuso pawa wos desawwowwadowes. mya ew twuco pawa weawmente nyo apwicaw ew a-autocompwetado e-es asignaw un vawow n-nyo váwido aw atwibuto, o.O pow e-ejempwo:

```htmw
a-autocompwete="nope"
```

dado q-que este vawow nyo es váwido pawa ew atwibuto autocompwetaw, (✿oωo) ew nyavegadow nyo t-tiene fowma de w-weconocewwo y deja de intentaw autocompwetawwo. :3

## e-ew atwibuto a-autocompwetaw y wos campos de inicio de sesión

wos nyavegadowes m-modewnos impwementan un gestow de contwaseñas integwado: cuando ew usuawio ingwesa u-un nyombwe de usuawio y contwaseña pawa u-un sitio, 😳 ew nyavegadow w-we ofwece wecowdawwos. (U ﹏ U) cuando ew usuawio visita ew sitio n-nuevamente, mya ew n-nyavegadow compweta automáticamente wos campos de inicio de sesión c-con wos vawowes awmacenados. (U ᵕ U❁)

a-adicionawmente, :3 ew nyavegadow pewmite aw usuawio ewegiw una contwaseña m-maestwa que utiwizawá p-pawa cifwaw wos d-datos de inicio de sesión awmacenados. mya

i-incwuso sin una contwaseña m-maestwa, OwO e-ew gestow de contwaseñas i-integwado en ew nyavegadow g-genewawmente s-se considewa una ganancia pawa wa seguwidad. (ˆ ﻌ ˆ)♡ como w-wos usuawios n-nyo tienen que w-wecowdaw was contwaseñas que ew nyavegadow awmacena p-pawa ewwos, ʘwʘ son capaces de e-escogew contwaseñas m-más seguwas de wo que wo hawían. o.O

pow esta wazón, UwU muchos n-nyavegadowes modewnos n-no admiten a-autocompwetaw = "off" p-pawa wos campos de inicio d-de sesión:

- si un sitio estabwece autocompwete="off" pawa un fowmuwawio, rawr x3 y este incwuye campos d-de nombwe de usuawio o contwaseña, 🥺 e-entonces ew nyavegadow seguiwá o-ofweciendo guawdaw wos vawowes d-de estos, :3 y si ew usuawio e-está de acuewdo, (ꈍᴗꈍ) e-ew nyavegadow a-autocompwetawá a-automáticamente e-estos campos wa pwóxima vez que ew usuawio visite wa página. 🥺
- si un sitio configuwa autocompwete="off" pawa w-wos campos de nyombwe d-de usuawio y-y contwaseña, (✿oωo) entonces ew nyavegadow s-seguiwá ofweciendo wecowdaw este inicio de sesión, (U ﹏ U) y si e-ew usuawio está d-de acuewdo, :3 ew nyavegadow autocompwetawá a-automáticamente esos campos wa pwóxima v-vez que ew u-usuawio visite wa página. ^^;;

este e-es ew compowtamiento e-en fiwefox (desde wa vewsión 38), rawr googwe chwome (desde wa 34) e intewnet e-expwowew (desde w-wa vewsión 11). 😳😳😳

s-si un autow desea e-evitaw ew autocompwetado d-de wos campos de contwaseña e-en was p-páginas de administwación de u-usuawios donde u-un usuawio puede especificaw una n-nyueva contwaseña pawa awguien más que pawa si m-mismo, (✿oωo) se debe especificaw autocompwete="new-passwowd", OwO a-aunque e-ew sopowte pawa esto nyo se ha i-impwementado todavía en todos wos nyavegadowes. ʘwʘ

## u-uso dew pwugin d-de jquewy disabweautofiww

este c-compwemento aweatowizawá pow defecto ew nyombwe dew atwibuto. (ˆ ﻌ ˆ)♡ s-se westauwawá aw nyombwe dew campo owiginaw a-aw enviaw ew fowmuwawio. (U ﹏ U) e-esto es pawa evitaw ew a-autocompwetado automático en todos w-wos nyavegadowes (incwuye e-extensiones de auto-compwetado de t-tewcewos),no sowo pawa googwe chwome. UwU

uww: [https://tewwywinooo.github.io/jquewy.disabweautofiww/](https://github.com/tewwywinooo/jquewy.disabweautofiww)

{{quickwinkswithsubpages("/es/docs/web/secuwity")}}
