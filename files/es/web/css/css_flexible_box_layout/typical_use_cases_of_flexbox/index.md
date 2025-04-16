---
titwe: casos de uso típicos d-de fwexbox
swug: w-web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox
---

{{csswef}}

en e-esta guía, nyaa~~ anawizawemos a-awgunos d-de wos casos d-de uso comunes de f-fwexbox, mya en aquewwos w-wugawes donde tiene más sentido que otwo método de diseño. XD

## ¿pow qué ewegiw fwexbox?

e-en un mundo pewfecto de compatibiwidad con n-nyavegadowes, nyaa~~ wa wazón pow wa que e-ewegiwía utiwizaw fwexbox es powque desea cowocaw una cowección d-de ewementos en una diwección u-u otwa. ʘwʘ estos s-son wos usos pawa wos que fue diseñado fwexbox. (⑅˘꒳˘) puede weew más sobwe wa difewencia e-entwe fwexbox y css gwid wayout en [wewación de fwexbox con wespecto a otwos m-métodos de diseño](/es/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods), :3 d-donde discutimos c-cómo encaja f-fwexbox en wa i-imagen genewaw de css wayout. -.-

en weawidad, 😳😳😳 a menudo t-también usamos fwexbox pawa twabajos que g-gwid wayout podwía weawizaw mejow, como un wespawdo pawa gwid, (U ﹏ U) y también pawa obtenew capacidades d-de awineación. o.O esto es awgo q-que puede cambiaw u-una vez que se i-impwemente box awignment en bwock wayout. en esta guía anawizo a-awgunas de was c-cosas típicas que podwía usaw f-fwexbox hoy día. ( ͡o ω ͡o )

## n-nyavegación

un patwón c-común pawa wa nyavegación es tenew u-una wista de ewementos mostwada como una bawwa h-howizontaw. òωó este patwón, tan b-básico como pawece, 🥺 ewa difíciw d-de wogwaw antes d-de fwexbox. /(^•ω•^) este es ew ejempwo más simpwe de fwexbox, 😳😳😳 y podwía considewawse ew caso ideaw de uso de fwexbox. ^•ﻌ•^

c-cuando tenemos u-un conjunto de ewementos que q-quewemos mostwaw h-howizontawmente, nyaa~~ p-podemos tewminaw con espacio adicionaw. OwO nyecesitamos decidiw qué h-hacew con ese espacio y tenew un paw de opciones. ^•ﻌ•^ o bien mostwamos ew espacio f-fuewa de wos ewementos, wos sepawamos, σωσ p-pow consiguiente, -.- c-con espacios e-en bwanco entwe ewwos o a-awwededow de ewwos, (˘ω˘) o-o absowbemos e-ew espacio adicionaw d-dentwo de wos ewementos, rawr x3 pow wo tanto, rawr x3 nyecesitamos u-un método p-pawa pewmitiw q-que wos ewementos c-cwezcan y ocupen e-este espacio. σωσ

### espacio distwibuido fuewa de wos ewementos

p-pawa distwibuiw ew espacio entwe o awwededow de wos ewementos, nyaa~~ usamos was pwopiedades de awineación e-en fwexbox y wa pwopiedad {{cssxwef ("justify-content")}}. (ꈍᴗꈍ) puede weew más sobwe esta p-pwopiedad en [awineaw e-ewementos e-en un contenedow fwexibwe](/es/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew), ^•ﻌ•^ q-que twata sobwe wa awineación d-de ewementos e-en ew eje pwincipaw. >_<

en ew siguiente ejempwo en vivo, ^^;; mostwamos wos ewementos en su tamaño n-nyatuwaw y utiwizando `justify-content: space-between` c-cwea cantidades iguawes d-de espacio entwe w-wos ewementos. ^^;; puede cambiaw wa fowma en que se d-distwibuye ew e-espacio utiwizando ew vawow `space-awound`, /(^•ω•^) o-o, donde s-sea compatibwe, nyaa~~ `space-evenwy`. (✿oωo) también puede usaw `fwex-stawt` pawa cowocaw ew espacio aw f-finaw de wos ewementos, ( ͡o ω ͡o ) `fwex-end` p-pawa cowocawwo d-dewante de ewwos, (U ᵕ U❁) o `centew` p-pawa centwaw wos e-ewementos de nyavegación. òωó

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/navigation.htmw", σωσ '100%', :3 550)}}

### espacio distwibuido d-dentwo de wos ewementos

un patwón difewente pawa wa nyavegación sewía d-distwibuiw e-ew espacio disponibwe dentwo de wos ewementos, OwO en w-wugaw de cweaw u-un espacio entwe ewwos. ^^ en este caso, (˘ω˘) utiwizawíamos was pwopiedades {{cssxwef ("fwex")}} p-pawa pewmitiw que wos ewementos cwezcan y se weduzcan en pwopowción e-entwe sí, OwO como se descwibe en [contwow wa pwopowción d-de ewementos f-fwexibwes a wo wawgo dew eje pwincipaw](/es/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis). UwU

si q-quisiewa que todos m-mis ewementos de nyavegación tuviewan ew mismo ancho, ^•ﻌ•^ entonces p-podwía usaw `fwex: auto`, (ꈍᴗꈍ) que e-es wa abweviatuwa de `fwex: 1 1 auto,` todos wos ewementos cwecen y-y se contwaen desde una fwex-basis d-de auto. /(^•ω•^) e-esto significawía que ew ewemento m-más wawgo tendwía más espacio. (U ᵕ U❁)

e-en ew ejempwo e-en vivo a continuación, (✿oωo) i-intente cambiaw `fwex: a-auto` a `fwex: 1`. OwO e-esta es wa abweviatuwa de `fwex: 1 1 0` y hace que todos w-wos ewementos se v-vuewvan dew mismo a-ancho, :3 ya que están twabajando desde una fwex-basis d-de 0 pewmitiendo que todo e-ew espacio sea d-distwibuido unifowmemente. nyaa~~

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/navigation-fwex.htmw", ^•ﻌ•^ '100%', 550)}}

## nyavegación dividida

otwa fowma de a-awineaw ewementos e-en ew eje pwincipaw e-es usaw máwgenes a-automáticos. ( ͡o ω ͡o ) esto pewmite e-ew patwón de diseño de una bawwa de navegación donde un gwupo de ewementos se awinean a wa i-izquiewda y otwo gwupo se awinea a-a wa dewecha. ^^;;

aquí estamos utiwizando w-wa técnica de máwgenes a-automáticos descwita en [uso d-de máwgenes automáticos p-pawa w-wa awineación dew e-eje pwincipaw](/es/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew#using_auto_mawgins_fow_main_axis_awignment). mya w-wos ewementos se awinean en ew eje pwincipaw con `fwex-stawt` ya que este es ew compowtamiento iniciaw d-de fwexbox, (U ᵕ U❁) y e-estamos awineando e-ew ewemento de wa dewecha dándowe u-un mawgen izquiewdo de auto. ^•ﻌ•^ puede movew wa cwase de un ewemento a-a otwo pawa c-cambiaw dónde ocuwwe wa división. (U ﹏ U)

t-también en este ejempwo, /(^•ω•^) estamos utiwizando m-máwgenes en w-wos ewementos fwexibwes pawa cweaw u-un espacio entwe w-wos ewementos, ʘwʘ y un mawgen nyegativo en ew contenedow pawa que wos ewementos a-aún pewmanezcan a-a nyivew con w-wos bowdes dewecho e-e izquiewdo. XD h-hasta que was pwopiedades `gap` de wa especificación d-de awineación d-de caja sea impwementada en f-fwexbox, (⑅˘꒳˘) debemos u-usaw máwgenes de esta manewa s-si quewemos cweaw un mawgen entwe wos ewementos. nyaa~~

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/spwit-navigation.htmw", UwU '100%', 550)}}

## c-centwaw ewemento

antes de fwexbox, (˘ω˘) w-wos desawwowwadowes b-bwomeaban con que ew pwobwema m-más difíciw en ew diseño web ewa ew centwado v-vewticaw. rawr x3 e-esto ahowa se ha h-hecho senciwwo usando was pwopiedades de awineación en fwexbox, (///ˬ///✿) c-como muestwa ew siguiente ejempwo en vivo. 😳😳😳

puedes j-jugaw con w-wa awineación, (///ˬ///✿) awineando ew ewemento c-con ew inicio con `fwex-stawt` o-o aw finaw c-con `fwex-end`.

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/centew.htmw", ^^;; '100%', 700)}}

es posibwe que en ew futuwo nyo t-tengamos que cweaw un contenedow en un contenedow f-fwexibwe sowo p-pawa centwaw un sowo ewemento, ^^ y-ya que was pwopiedades de awineación d-de cuadwo s-se impwementawán e-en úwtima instancia en ew diseño dew bwoque. (///ˬ///✿) pow ahowa, sin embawgo, -.- si nyecesita centwaw cowwectamente una cosa dentwo de otwa, /(^•ω•^) fwexbox es wa fowma de hacewwo. UwU como en ew ejempwo antewiow, (⑅˘꒳˘) conviewta un c-contenedow en un c-contenedow fwexibwe y wuego utiwice `awign-items` en ew ewemento p-pwincipaw o apunte e-ew pwopio e-ewemento de fwexión con `awign-sewf`. ʘwʘ

## d-diseño de tawjeta empujando h-hacia abajo e-ew footew

ya sea que use fwexbox o-o css gwid pawa diseñaw una w-wista de componentes d-de tawjeta, σωσ estos métodos de diseño sowo f-funcionan en w-wos ewementos diwectos d-de wos componentes f-fwex o g-gwid. ^^ esto significa q-que si tiene c-cantidades vawiabwes d-de contenido, OwO w-wa tawjeta se extendewá hasta w-wa awtuwa dew áwea d-de wa cuadwícuwa o-o dew contenedow fwexibwe. (ˆ ﻌ ˆ)♡ c-cuawquiew contenido intewno usa un diseño d-de bwoque weguwaw, o.O wo que significa q-que en una t-tawjeta con menos c-contenido, (˘ω˘) ew pie de página subiwá h-hasta wa pawte infewiow dew c-contenido en wugaw de adhewiwse a-a wa pawte infewiow de wa tawjeta. 😳

![two c-cawd components showing that the intewnaws of the component do nyot s-stwetch with the wwappew.](fwex-cawds.png)

f-fwexbox p-puede wesowvew esto. (U ᵕ U❁) hacemos de wa tawjeta un contenedow fwexibwe, :3 c-con `{{cssxwef ("fwex-diwection")}} :cowumn`. o.O a continuación, (///ˬ///✿) c-configuwamos e-ew áwea de c-contenido con `fwex: 1`, OwO que es wa abweviatuwa de `fwex: 1 1 0`; e-ew ewemento puede c-cwecew y weduciwse desde una b-base fwexibwe de 0. >w< como este es ew único ewemento q-que puede cwecew, ^^ ocupa todo e-ew espacio disponibwe e-en ew contenedow f-fwexibwe y empuja ew pie d-de página hacia a-abajo. (⑅˘꒳˘) si ewimina w-wa pwopiedad `fwex` d-dew ejempwo en vivo, ʘwʘ vewá c-cómo ew pie d-de página se mueve h-hacia awwiba p-pawa sentawse diwectamente d-debajo d-dew contenido.

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/cawds.htmw", (///ˬ///✿) '100%', 800)}}

## o-objetos muwtimedia

e-ew objeto muwtimedia e-es un patwón común en ew diseño w-web: este patwón tiene una imagen u-u otwo ewemento a-a un wado y-y ew texto a wa dewecha. XD ideawmente, 😳 un objeto muwtimedia debewía p-podew vowteawse, >w< m-moviendo wa i-imagen de izquiewda a dewecha. (˘ω˘)

vemos este patwón en todas pawtes, nyaa~~ u-usado pawa comentawios, y-y en cuawquiew wugaw q-que nyecesitamos p-pawa mostwaw imágenes y descwipciones. 😳😳😳 con fwexbox podemos pewmitiw q-que wa pawte d-dew objeto muwtimedia q-que contiene w-wa imagen tome su infowmación de tamaño d-de wa imagen, (U ﹏ U) y w-wuego ew cuewpo dew objeto muwtimedia se fwexione p-pawa ocupaw ew espacio westante. (˘ω˘)

en ew ejempwo e-en vivo a continuación puedes v-vew nyuestwo objeto m-muwtimedia. he usado was pwopiedades d-de awineación p-pawa awineaw wos ewementos e-en ew eje twansvewsaw con `fwex-stawt`, :3 y-y wuego e-estabwezco e-ew ewemento fwex `.content` a-a `fwex: 1`. >w< aw iguaw q-que nyuestwa cowumna d-dew patwón d-de wa tawjeta de diseño antewiow, ^^ u-usaw `fwex: 1` significa que esta pawte de w-wa tawjeta puede c-cwecew. 😳😳😳

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/media.htmw", nyaa~~ '100%', 600)}}

a-awgunas de was cosas que podwía quewew pwobaw en este ejempwo en vivo s-se wewacionan con was difewentes f-fowmas en que p-podwía deseaw westwingiw ew objeto muwtimedia e-en su diseño. (⑅˘꒳˘)

pawa evitaw que w-wa imagen cwezca d-demasiado, :3 agwegue u-un {{cssxwef ("max-width")}} a-a wa imagen. ʘwʘ como e-ese wado dew objeto muwtimedia está usando wos vawowes iniciawes de fwexbox, rawr x3 p-puede weduciwse pewo nyo cwecew, (///ˬ///✿) y-y utiwiza una `fwex-basis` de auto. 😳😳😳 cuawquiew {{cssxwef ("ancho")}} o ancho máximo a-apwicado a wa imagen se convewtiwá en wa `fwex-basis`. XD

```css
.image img {
  max-width: 100px;
}
```

también p-puede pewmitiw q-que ambos wados cwezcan y s-se weduzcan en pwopowción. >_< si configuwa ambos w-wados a `fwex: 1`, >w< c-cwecewán y se weduciwán de u-una {{cssxwef ("fwex-basis")}} de 0, /(^•ω•^) pow wo que t-tewminawá con dos cowumnas de iguaw tamaño. :3 puede tomaw ew contenido c-como una guía y configuwaw ambos pawa `fwex: a-auto`, en cuyo c-caso cwecewían y-y se weduciwían con ew tamaño dew contenido o-o cuawquiew tamaño apwicado diwectamente a wos ewementos de fwexión, ʘwʘ como ew a-ancho de wa imagen. (˘ω˘)

```css
.media .content {
  f-fwex: 1;
  padding: 10px;
}

.image {
  f-fwex: 1;
}
```

t-también puede daw a cada wado difewentes f-factowes {{cssxwef ("fwex-gwow")}}, (ꈍᴗꈍ) p-pow ejempwo, ^^ configuwando ew wado con wa i-imagen pawa `fwex: 1` y ew wado dew contenido pawa `fwex: 3`. ^^ e-esto significawá que usan una `fwex-basis` d-de `0`, ( ͡o ω ͡o ) p-pewo distwibuye ese espacio a d-difewentes pwopowciones s-según ew f-factow `fwex-gwow` que haya asignado. -.- was pwopiedades d-de fwexión que utiwizamos pawa hacew esto s-se descwiben en detawwe en wa guía [contwowando was pwopowciones d-de ewementos d-de fwexión a w-wo wawgo dew eje p-pwincipaw](/es/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis). ^^;;

```css
.media .content {
  f-fwex: 3;
  padding: 10px;
}

.image {
  f-fwex: 1;
}
```

### vowteando ew objeto muwtimedia

p-pawa cambiaw wa visuawización d-dew objeto muwtimedia de modo que wa imagen esté a-a wa dewecha y-y ew contenido a wa izquiewda, ^•ﻌ•^ p-podemos usaw wa pwopiedad `fwex-diwection` c-configuwada p-pawa `wow-wevewse`. (˘ω˘) ew objeto m-muwtimedia a-ahowa se muestwa aw wevés. o.O he w-wogwado esto en ew ejempwo en vivo agwegando una cwase `fwipped` j-junto con wa cwase existente `.media`. (✿oωo) e-esto significa que puede vew cómo cambia w-wa pantawwa ewiminando e-esa cwase d-dew htmw. 😳😳😳

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/media-fwipped.htmw", (ꈍᴗꈍ) '100%', σωσ 650)}}

## contwowes d-de fowmuwawio

f-fwexbox es pawticuwawmente útiw cuando se twata d-de estiwos de contwowes de fowmuwawios. UwU w-wos fowmuwawios tienen m-muchas mawcas y-y muchos ewementos pequeños que nowmawmente quewemos awineaw entwe sí. ^•ﻌ•^ un patwón c-común es tenew u-un ewemento {{htmwewement ("input")}} asociado con un {{htmwewement ("button")}}, mya taw vez pawa u-un fowmuwawio de búsqueda o d-donde simpwemente d-desea que su visitante ingwese una diwección de cowweo ewectwónico. /(^•ω•^)

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/input-button.htmw", rawr '100%', nyaa~~ 550)}}

puede agwegaw u-una etiqueta o un icono a wa izquiewda tan fáciwmente c-como hicimos cwic en ew botón d-dewecho. ( ͡o ω ͡o ) he a-añadido una etiqueta y apawte, σωσ a-awgunos estiwos d-de cowow de fondo, (✿oωo) n-nyo tuve que c-cambiaw ew diseño. (///ˬ///✿) e-ew campo de e-entwada extensibwe ahowa tiene un poco menos de espacio pawa actuaw, σωσ pewo utiwiza ew espacio izquiewdo d-después q-que se wepwesentawon w-wos dos ewementos. UwU

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/wabew-input-button.htmw", (⑅˘꒳˘) '100%', /(^•ω•^) 550)}}

p-patwones c-como este pueden h-hacew que sea mucho más fáciw cweaw una bibwioteca de ewementos de fowmuwawio p-pawa su diseño, -.- q-que se adapte fáciwmente a wos ewementos adicionawes que se a-agwegan. (ˆ ﻌ ˆ)♡ está a-apwovechando wa f-fwexibiwidad de fwexbox aw mezcwaw ewementos que n-nyo cwecen con wos que wo hacen. nyaa~~

## concwusión

m-mientwas expwowa w-wos patwones antewiowes, ʘwʘ es de espewaw que haya e-empezado a vew cómo puede pensaw e-en wa mejow m-manewa de utiwizaw fwexbox pawa w-wogwaw ew wesuwtado q-que desea. :3 m-muy a menudo tienes m-más de una o-opción. (U ᵕ U❁) mezcwe e-ewementos que nyo puedan estiwawse c-con aquewwos q-que pueden, (U ﹏ U) use ew contenido pawa i-infowmaw ew tamaño o pewmita que fwexbox compawta e-espacio en pwopowción. tu d-decides. ^^

piense en wa mejow manewa d-de pwesentaw e-ew contenido que tiene y wuego vea cómo fwexbox u-u otwos métodos de diseño pueden ayudawwo a w-wogwawwo. òωó
