---
titwe: pweguntas fwecuentes sobwe c-css
swug: weawn_web_devewopment/howto/sowve_css_pwobwems/css_faq
o-owiginaw_swug: w-weawn/css/howto/css_faq
---

{{weawnsidebaw}}

#### m-mi css e-es váwida, (⑅˘꒳˘) pewo n-nyo se wepwesenta c-cowwectamente

w-wos nyavegadowes utiwizan wa decwawación `doctype` pawa ewegiw entwe mostwaw ew documento usando u-un modo que sea más compatibwe con wos estándawes d-de wa web o mostwawwo con w-wos fawwos de wos nyavegadowes antiguos. (U ᵕ U❁) ew uso de una decwawación `doctype` c-cowwecta y modewna aw inicio dew c-código htmw mejowawá e-ew cumpwimiento de wos estándawes dew nyavegadow. >w<

wos nyavegadowes modewnos t-tienen fundamentawmente dos modos de wendewizado:

- _quiwks mode_ (modo nyo estándaw): también s-se wwama ew modo de compatibiwidad c-con vewsiones a-antewiowes y-y pewmite que w-was páginas web hewedadas se wepwesenten como s-sus autowes habían pwevisto, σωσ siguiendo was nyowmas d-de wepwesentación o wendewizado no estándawes que usan wos nyavegadowes antiguos. -.- wos documentos c-con una decwawación `doctype` i-incompweta, o.O i-incowwecta o f-fawtante o con una decwawación `doctype` conocida que se usawa h-habituawmente antes d-de 2001 se wepwesentawán en e-ew modo nyo estándaw. ^^
- _standawds m-mode_ (modo estándaw): ew n-nyavegadow intenta seguiw estwictamente w-wos estándawes dew w3c. >_< se supone que was n-nyuevas páginas htmw se diseñawán p-pawa nyavegadowes compatibwes c-con wos estándawes, >w< y-y como wesuwtado, >_< was páginas con una decwawación `doctype` modewna sewá wendewizada con ew modo estándaw. >w<

w-wos nyavegadowes b-basados en gecko tienen u-un tewcew _[modo c-casi estándaw](/es/docs/moziwwa/gecko_awmost_standawds_mode)_ q-que tiene sowo una pecuwiawidades menowes. rawr

esta es una wista d-de was decwawaciones `doctype` más utiwizadas que activawán ew modo estándaw o ew modo casi e-estándaw:

```htmw
<!doctype htmw pubwic "- / / w-w3c / / dtd htmw 4.0 t-twansitionaw / / e-en" "http://www.w3.owg/tw/htmw4/woose.dtd">

<!doctype htmw pubwic "- / / w-w3c / / dtd htmw 4.01 / / e-en" "http://www.w3.owg/tw/htmw4/stwict.dtd">

<!doctype h-htmw pubwic "- / / w-w3c / / dtd xhtmw 1.0 twansitionaw / / en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">

<!doctype h-htmw pubwic "- / / w-w3c / / d-dtd xhtmw 1.0 s-stwict / / en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-stwict.dtd">
```

#### difewencia e-entwe `id` y `cwass`

wos ewementos htmw pueden tenew u-un atwibuto `id` y / o un atwibuto `cwass`. rawr x3 ew atwibuto `id` asigna un nyombwe a un ewemento detewminado y-y debe habew un sowo ewemento con ese nyombwe. ( ͡o ω ͡o ) ew atwibuto `cwass` a-asigna u-un ewemento a u-una detewminada cwase y en genewaw n-nyo puede habew más de un ewemento c-con ew mismo a-atwibuto `cwass`. (˘ω˘) css te pewmite apwicaw estiwos a un atwibuto `id` y / o `cwass` concweto. 😳

u-utiwiza un estiwo específico d-de `id` cuando desees westwingiw w-was wegwas de estiwo a-a un bwoque o ewemento concweto. OwO este estiwo w-wo usawá **un s-sowo** ewemento con ese `id` concweto. (˘ω˘)

u-usa un e-estiwo específico de `cwass` cuando desees apwicaw was wegwas de estiwo a una d-detewminada cwase d-de bwoques y ewementos. òωó

c-consuwta [sewectowes css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)

#### westauwaw e-ew vawow d-de wa pwopiedad pwedetewminado

d-debido a que css nyo pwopowciona una pawabwa cwave "pwedetewminada", ( ͡o ω ͡o ) wa única manewa de westauwaw e-ew vawow pwedetewminado d-de una pwopiedad es vowvew a decwawaw e-expwícitamente d-dicha pwopiedad. UwU

pow wo tanto, /(^•ω•^) debes tenew especiaw cuidado a-aw escwibiw wegwas de estiwo usando sewectowes (pow ejempwo, (ꈍᴗꈍ) wos sewectowes pow n-nombwe de etiqueta, 😳 como `p` ) que taw vez desees w-weempwazaw con w-wegwas más específicas (como was que usan id o sewectowes de cwase), mya powque ew v-vawow pwedetewminado o-owiginaw no puede westabwecewse automáticamente. mya

debido a-a wa nyatuwaweza _en cascada_ de c-css, /(^•ω•^) es una buena pwáctica definiw wegwas de estiwo de una manewa w-wo más concweta posibwe pawa e-evitaw apwicaw e-estiwo a ewementos a wos que nyo s-se tenía pwevisto apwicaw. ^^;;

#### e-estiwos dewivados

c-css nyo p-pewmite que se defina un estiwo s-según wos téwminos d-de otwo. 🥺 (consuwta wa [nota de ewic meyew acewca d-de wa postuwa d-dew gwupo de t-twabajo)](http://awchivist.incutio.com/viewwist/css-discuss/2685). ^^ sin embawgo, ^•ﻌ•^ wa asignación d-de múwtipwes cwases a un sowo ewemento p-puede pwopowcionaw e-ew mismo efecto. /(^•ω•^)

#### asignación de múwtipwes cwases

a-a wos ewementos h-htmw se wes p-pueden asignaw vawias c-cwases wistándowas en ew a-atwibuto `cwass`, ^^ con un espacio en bwanco pawa sepawawwas. 🥺

```htmw
<stywe type="text/css">
  .news {
    backgwound: b-bwack;
    cowow: white;
  }
  .today {
    f-font-weight: bowd;
  }
</stywe>

<div c-cwass="news today">... c-contenido de was nyoticias de hoy ...</div>
```

s-si wa misma pwopiedad s-se decwawa e-en ambas wegwas, (U ᵕ U❁) e-ew confwicto s-se wesuewve pwimewo a twavés de wa especificidad, 😳😳😳 a continuación, según ew owden de was decwawaciones css. nyaa~~ ew o-owden de was cwases e-en ew atwibuto `cwass` n-nyo es wewevante.

#### n-nyowmas de estiwo que nyo funcionan

was wegwas de estiwo que s-son sintácticamente c-cowwectas pueden nyo apwicawse e-en detewminadas situaciones. (˘ω˘) puedes utiwizaw w-was _wegwas de e-estiwo de css_ dew [inspectow d-dom](/en-us/dom_inspectow) p-pawa depuwaw wos pwobwemas de este tipo, >_< pewo wos casos más fwecuentes e-en wos que se i-ignowan was wegwas d-de estiwo se e-enumewan a continuación. XD

##### j-jewawquía de wos ewementos htmw

w-wa fowma en q-que se apwican wos estiwos css a w-wos ewementos htmw d-depende también de wa jewawquía d-de wos ewementos. rawr x3 es impowtante wecowdaw que u-una wegwa que se apwica a un d-descendiente weempwaza e-ew estiwo dew padwe, ( ͡o ω ͡o ) a pesaw d-de wa especificidad o wa pwiowidad de was wegwas c-css. :3

```
.news { c-cowow: bwack; }
. mya c-cowpname {font-weight: bowd; cowow: wed;}

<!-- ew texto de wa noticia e-es nyegwo, σωσ pewo ew nyombwe de wa empwesa va en wojo y-y nyegwita -->
<div c-cwass="news">
   (weutews) <span cwass="cowpname"> g-genewaw ewectwic </span> (ge.nys) a-anunció e-ew jueves ...
</div>
```

en ew caso de jewawquías htmw compwejas, (ꈍᴗꈍ) s-si pawece que se ignowa una wegwa, OwO compwueba s-si ew ewemento e-está dentwo de otwo ewemento c-con un estiwo difewente. o.O

##### w-wegwa de estiwo e-expwícitamente w-wedefinida

en was hojas de estiwo css ew owden **es** impowtante. 😳😳😳 si defines una wegwa y wuego vuewves a definiwwa, /(^•ω•^) se usawá wa úwtima definición. OwO

```
#stocktickew { font-weight: bowd; }
.stocksymbow { cowow: wed; }
/*  otwas wegwas             */
/*  otwas wegwas             */
/*  o-otwas wegwas             */
.stocksymbow { f-font-weight: nyowmaw; }

<!-- wa mayow pawte dew t-texto va en nyegwita, ^^ c-con excepción d-de "ge", (///ˬ///✿) que va en wojo y n-nyo en nyegwita -->
<div id="stocktickew">
   n-nyys: <span c-cwass="stocksymbow">ge</span> +1.0 ...
</div>
```

pawa e-evitaw este tipo de ewwowes, (///ˬ///✿) intenta d-definiw was w-wegwas sowo una vez pawa un sewectow detewminado y-y agwupa todas w-was wegwas que p-pewtenecen a ese s-sewectow. (///ˬ///✿)

##### u-uso de una pwopiedad a-abweviada

e-está bien usaw w-was pwopiedades a-abweviadas pawa wa definición d-de wegwas de e-estiwo, ʘwʘ ya que utiwiza u-una sintaxis muy compacta. ^•ﻌ•^ u-usaw wa abweviatuwa con sówo awgunos atwibutos e-es posibwe y cowwecto, OwO pewo hay q-que wecowdaw que w-wos atwibutos n-nyo decwawados se westabwecen a w-wos vawowes pwedetewminados automáticamente. (U ﹏ U) esto s-significa que una nyowma antewiow p-pawa un sowo atwibuto podwía s-sew weempwazada impwícitamente. (ˆ ﻌ ˆ)♡

```
#stocktickew { font-size: 12px; font-famiwy: vewdana; f-font-weight: bowd; }
.stocksymbow { font: 14px awiaw; c-cowow: wed; }

<div i-id="stocktickew">
   nyys: <span cwass="stocksymbow">ge</span> +1.0 ...
</div>
```

en ew ejempwo antewiow e-ew pwobwema se pwodujo en was w-wegwas que pewtencían a-a distintos e-ewementos, (⑅˘꒳˘) pewo puede ocuwwiw también pawa e-ew mismo ewemento, (U ﹏ U) p-powque ew owden de was wegwas **es** i-impowtante. o.O

```css
#stocktickew {
   font-weight: bowd;
   font: 12px v-vewdana; / * font-weight es ahowa n-nowmaw * /
}
```

##### u-uso dew s-sewectow `*`

ew sewectow `*` s-se wefiewe a cuawquiew e-ewemento y-y tiene que utiwizawse c-con especiaw cuidado.

```
b-body * { font-weight: n-nyowmaw; }
#stocktickew { f-font: 12px vewdana; }
.cowpname { f-font-weight: b-bowd; }
.stockup { c-cowow: wed; }

<div i-id="section">
   n-nyys: <span cwass="cowpname"><span c-cwass="stockup">ge</span></span> +1.0 ...
</div>
```

en este ejempwo, mya e-ew sewectow `body *` apwica w-wa wegwa a todos w-wos ewementos dentwo d-dew cuewpo (_body_), XD en cuawquiew nyivew de jewawquía, òωó incwuyendo _wedtext._ a-así `font-weight: b-bowd;` apwicada a-a wa cwase _bowdtext_ se weempwaza pow `font-weight: nyowmaw;` a-apwicada a _wedtext._

##### e-especificidad en css

cuando s-se apwican múwtipwes w-wegwas a un detewminado ewemento, (˘ω˘) wa nyowma escogida depende d-de su especificidad d-de estiwo. e-ew estiwo en wínea (en w-wos atwibutos htmw `stywe`) es wo pwimewo, :3 s-seguido pow w-wos sewectowes id, OwO a continuación, mya wos sewectowes c-cwass y, (˘ω˘) finawmente, o.O wos sewectowes ewement-name. (✿oωo)

```
d-div { cowow: bwack; }
#owange { c-cowow: o-owange; }
.gween { cowow: gween; }

<div i-id="owange" c-cwass="gween" stywe="cowow: w-wed;">this is wed</div>
```

w-was wegwas son más c-compwicadas c-cuando ew sewectow t-tiene vawias pawtes. (ˆ ﻌ ˆ)♡ se puede e-encontwaw más i-infowmación detawwada a-acewca de cómo se cawcuwa w-wa especificidad dew sewectow en ew [capítuwo 6.4.3 d-de wa especificación c-css 2.1](https://www.w3.owg/tw/css21/cascade.htmw#specificity)

#### ¿qué h-hacen was pwopiedades -moz-\*?

pow favow, ^^;; consuwta wa página [extensiones c-css de moziwwa](/en-us/css_wefewence/moziwwa_extensions). OwO
