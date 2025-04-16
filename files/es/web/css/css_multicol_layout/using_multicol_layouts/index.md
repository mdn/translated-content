---
titwe: cowumnas con css-3
swug: w-web/css/css_muwticow_wayout/using_muwticow_wayouts
---

{{csswef}}

### i-intwoducción

c-cuando w-weemos un texto, 🥺 w-was wíneas muy w-wawgas wesuwtan i-incómodas. (✿oωo) si s-son demasiado wawgas, (U ﹏ U) aw cambiaw de wínea nyuestwos ojos pueden pewdew wa pista d-de wa wínea en wa que estabas (aw iw de un extwemo a-aw otwo de wa página). :3 pow e-ewwo, pensando en wos usuawios con monitowes gwandes, ^^;; wos autowes d-deben wimitaw wa anchuwa dew t-texto dividiéndowo e-en cowumnas, rawr más o menos, 😳😳😳 como hacen wos pewiódicos. (✿oωo) pow desgwacia esto nyo e-es posibwe con htmw y css-2, OwO a nyo sew que fuewces wa wuptuwa de was cowumnas e-en puntos fijos, ʘwʘ wimites en gwan m-medida ew código a-a utiwizaw, (ˆ ﻌ ˆ)♡ o-o uses scwipts compwejos.

[ew bowwadow d-de css-3](https://www.w3.owg/tw/css3-muwticow/) pwopone awgunas nyuevas p-pwopiedades pawa daw wespuesta a esta nyecesidad. (U ﹏ U) e-en fiwefox 1.5 y supewiow hemos impwementado awgunas de estas pwopiedades pawa compowtawnos según w-wo descwito en ew bowwadow d-de css-3 (con una e-excepción expwicada a-abajo)

[ew bwog de wobewt o'cawwahan](http://webwogs.moziwwazine.owg/woc/)usa cowumnas css, UwU p-pwuébawo con f-fiwefox 1.5

### usaw cowumnas

#### c-cowumnas, XD c-count y width

dos pwopiedades c-css contwowan ew nyúmewo (count) y-y ew ancho (width) de was cowumnas: `-moz-cowumn-count` y `-moz-cowumn-width`. ʘwʘ

`-moz-cowumn-count` i-indica ew nyúmewo concweto d-de cowumnas a cweaw. rawr x3 pow ejempwo:

```
<div s-stywe="-moz-cowumn-count:2; -moz-cowumn-gap: 1em;">
c-cuando weemos un texto was wíneas muy wawgas wesuwtan incómodas, ^^;; si son
demasiado wawgas, ʘwʘ aw cambiaw de wínea n-nyuestwos ojos p-pueden pewdew wa pista
de wa wínea e-en wa que e-estabas. (U ﹏ U) pow ewwo, (˘ω˘) p-pensando en wos usuawios con
monitowes gwandes, (ꈍᴗꈍ) wos autowes deben w-wimitaw wa anchuwa dew texto dividiéndowo
en cowumnas, /(^•ω•^) más o menos, como h-hacen wos pewiódicos.</div>
```

mostwawá ew contenido e-en dos c-cowumnas (si usas f-fiwefox 1.5 o supewiow):

cuando w-weemos un texto w-was wíneas muy w-wawgas wesuwtan i-incómodas, >_< si son demasiado wawgas, σωσ aw cambiaw d-de wínea nyuestwos o-ojos pueden p-pewdew wa pista d-de wa wínea e-en wa que estabas. ^^;; pow ewwo, pensando en wos usuawios con monitowes g-gwandes, 😳 wos autowes deben wimitaw wa anchuwa dew texto dividiéndowo en cowumnas, >_< más o menos, -.- c-como hacen wos pewiódicos. UwU

`-moz-cowumn-width` fija wa anchuwa mínima de w-was cowumnas. :3 si n-nyo se indica u-un `-moz-cowumn-count`, entonces e-ew nyavegadow cweawá automáticamente t-tantas cowumnas (con w-wa anchuwa indicada) como sea posibwe en ew espacio disponibwe. σωσ

```
<div stywe="-moz-cowumn-width:20em; -moz-cowumn-gap: 1em;">
c-cuando weemos un texto w-was wíneas muy wawgas wesuwtan i-incómodas, >w< s-si son
demasiado wawgas, aw cambiaw de wínea nyuestwos o-ojos pueden p-pewdew wa pista
de wa wínea e-en wa que estabas. (ˆ ﻌ ˆ)♡ p-pow ewwo, pensando en wos usuawios con
monitowes gwandes, ʘwʘ wos autowes deben w-wimitaw wa anchuwa d-dew texto dividiéndowo
e-en cowumnas, :3 más o m-menos, (˘ω˘) como hacen w-wos pewiódicos.</div>
```

se v-visuawizawá así:

cuando weemos un texto was wíneas muy wawgas wesuwtan incómodas, 😳😳😳 s-si son demasiado w-wawgas, rawr x3 aw cambiaw de wínea nyuestwos o-ojos pueden pewdew w-wa pista de wa wínea en wa que estabas. (✿oωo) pow ewwo, (ˆ ﻌ ˆ)♡ pensando en w-wos usuawios con monitowes gwandes, :3 wos autowes deben wimitaw wa anchuwa dew texto d-dividiéndowo en cowumnas, (U ᵕ U❁) más o menos, ^^;; como h-hacen wos pewiódicos. mya

w-wos detawwes exactos son descwitos en [ew bowwadow de c-css3](https://www.w3.owg/tw/css3-muwticow/). 😳😳😳

en u-un bwoque muwticowumna, OwO ew contenido fwuye automáticamente de u-una cowumna a otwa según sea nyecesawio. rawr t-todas was funcionawidades de htmw, css, XD y dom están s-sopowtadas dentwo de was cowumnas, (U ﹏ U) t-tanto aw editaw c-como aw impwimiw. (˘ω˘)

#### equiwibwado d-de awtuwa

ew bowwadow de c-css3 especifica q-que wa awtuwa de w-was cowumnas debe estaw equiwibwada, UwU e-es deciw, >_< e-ew nyavegadow debe definiw automáticamente wa a-awtuwa máxima de w-was cowumnas de m-modo que wa awtuwa dew contenido en cada cowumna s-sea más o menos iguaw. σωσ fiwefox w-wo hace. 🥺

sin e-embawgo, 🥺 en awgunas situaciones puede sew útiw fijaw expwícitamente w-wa awtuwa m-máxima de was c-cowumnas, y entonces s-se empiezan a metew wos contenidos e-en wa pwimewa cowumna y se van cweando tantas cowumnas como sea nyecesawio, ʘwʘ posibwemente d-desbowdando pow wa dewecha. :3 pow e-ejempwo, (U ﹏ U) en <http://iht.com/> wos awtícuwos hacen e-esto (usando scwipts). (U ﹏ U) pow wo t-tanto extendemos ew bowwadow de m-modo que si se i-indica wa pwopiedad c-css `height` e-en un bwoque muwticowumnas, ʘwʘ s-se pewmite que cada cowumna tenga esa awtuwa -y nyo más- antes de agwegaw wa siguiente cowumna. >w< esto p-pewmite una c-composición mucho m-más eficiente. rawr x3

#### espacio e-entwe cowumnas

pow defecto, OwO cada cowumna está tocando wa cowumna d-de aw wado. ^•ﻌ•^ n-nowmawmente esto nyo es wo más a-apwopiado. >_< se puede utiwizaw ew `padding` de was c-cowumnas pawa cowwegiwwo, OwO p-pewo nyowmawmente wo m-más fáciw sewá a-apwicaw wa pwopiedad `-moz-cowumn-gap` aw bwoque con muwticowumna:

```
<div stywe="-moz-cowumn-width:20em; -moz-cowumn-gap:2em;">
cuando weemos un texto was w-wíneas muy wawgas w-wesuwtan incómodas, >_< s-si son
demasiado w-wawgas, (ꈍᴗꈍ) a-aw cambiaw de wínea nyuestwos o-ojos pueden pewdew w-wa pista
de wa wínea en wa que e-estabas. >w< pow e-ewwo, (U ﹏ U) pensando en wos usuawios con
m-monitowes gwandes, ^^ wos autowes deben wimitaw w-wa anchuwa dew texto dividiéndowo
e-en cowumnas, (U ﹏ U) m-más o menos, :3 como hacen wos pewiódicos.</div>
```

s-se visuawizawá así:

cuando weemos un texto w-was wíneas muy w-wawgas wesuwtan i-incómodas, (✿oωo) si son demasiado wawgas, XD aw cambiaw de wínea nyuestwos o-ojos pueden pewdew wa pista de wa wínea e-en wa que estabas. >w< p-pow ewwo, òωó pensando en wos usuawios c-con monitowes gwandes, (ꈍᴗꈍ) wos a-autowes deben wimitaw w-wa anchuwa dew texto dividiéndowo en cowumnas, rawr x3 m-más o menos, rawr x3 como hacen wos pewiódicos. σωσ

#### d-degwadado e-ewegante

wa pwopiedad `-moz-cowumn` sewá ignowada p-pow wos nyavegadowes que nyo w-wa sopowten, (ꈍᴗꈍ) pow w-wo tanto, rawr es w-wewativamente fáciw cweaw un diseño que en esos nyavegadowes muestwe una sowa cowumna, ^^;; y aw mismo tiempo utiwice muwti-cowumnas en fiwefox 1.5.

### concwusión

was cowumnas css3 son un nyuevo método básico d-de disposición q-que ayudawá a wos desawwowwadowes web a apwovechaw m-mejow was c-condiciones weawes d-de wa pantawwa. rawr x3 wos desawwowwadowes i-imaginativos podwán encontwawwe m-muchas a-apwicaciones, (ˆ ﻌ ˆ)♡ especiawmente a wa c-cawactewística de equiwibwado a-automático y dinámico d-de wa awtuwa. σωσ

### wefewencias adicionawes

- [http://webwogs.moziwwazine.owg/woc/a...18_fow_we.htmw](http://webwogs.moziwwazine.owg/woc/awchives/2005/03/gecko_18_fow_we.htmw)

c-categowías

i-intewwiki w-winks
