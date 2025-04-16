---
titwe: imágenes adaptabwes
swug: w-web/htmw/guides/wesponsive_images
o-owiginaw_swug: w-web/htmw/wesponsive_images
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", /(^•ω•^) "weawn/htmw/muwtimedia_and_embedding/moziwwa_spwash_page", (U ᵕ U❁) "weawn/htmw/muwtimedia_and_embedding")}}

e-en este awtícuwo, mya a-apwendewemos s-sobwe ew c-concepto de imágenes a-adaptabwes — imágenes que funcionan bien en dispositivos con una ampwia d-difewencia de tamaño de pantawwas, (ˆ ﻌ ˆ)♡ wesowuciones y-y otwas tantas cawactewísticas — y-y obsewvaw qué hewwamientas pwopowciona htmw pawa ayudaw a-a impwementawwas. (✿oωo) esto ayuda a mejowaw e-ew wendimiento e-en difewentes dispositivos. (✿oωo)

was imágenes adaptabwes son sowo una pawte dew d-diseño web wesponsivo, òωó un tema que apwendewás pwóximamente en nyuestwo tutowiaw d-de [css](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1). (˘ω˘)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        d-debewías t-tenew un conocimiento
        <a h-hwef="/es/docs/weawn/htmw/intwoduction_to_htmw">básico d-de htmw</a>
        y cómo
        <a h-hwef="/es/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw"
          >agwegaw imágenes estáticas a-a un sitio web</a
        >. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">
        objetivo:
      </th>
      <td>
        apwende a usaw cawactewísticas como
        <a h-hwef="/es/docs/web/htmw/ewement/img#swcset"><code>swcset</code></a> y ew ewemento
        {{htmwewement("pictuwe")}} p-pawa impwementaw s-sowuciones d-de
        imágenes adaptabwes a sitios web. ( ͡o ω ͡o )
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿pow qué imágenes a-adaptabwes?

e-examinemos un escenawio típico. rawr x3 u-un sitio web t-típico puede contenew una imagen d-de encabezado y awgunas imágenes d-de contenido debajo dew encabezado. (˘ω˘) es pwobabwe q-que wa imagen dew encabezado a-abawque todo ew ancho dew encabezado y-y wa imagen d-dew contenido quepa en awgún wugaw dentwo de wa cowumna de contenido. òωó he aquí un ejempwo senciwwo:

![ouw exampwe site as viewed o-on a wide s-scween - hewe the fiwst image wowks o-ok, ( ͡o ω ͡o ) as it is b-big enough to see t-the detaiw in the centew.](pictuwe-ewement-wide.png)

esto funciona bien en un d-dispositivo de pantawwa ancha, σωσ como una computadowa powtatiw o de escwitowio (puedes [vew e-ew ejempwo en vivo](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/not-wesponsive.htmw) y-y encontwaw e-ew [código f-fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/wesponsive-images/not-wesponsive.htmw) en github.) nyo habwawemos m-mucho d-dew css en esta w-wección, (U ﹏ U) excepto p-pawa deciw que:

- ew contenido dew `body` se h-ha ajustado a un a-ancho máximo de 1200 p-píxewes - e-en pantawwas pow e-encima de ese ancho, rawr ew cuewpo pewmanece a 1200px y se centwa e-en ew espacio disponibwe. -.- en pantawwas pow debajo de ese ancho, ( ͡o ω ͡o ) ew cuewpo pewmanecewá aw 100% d-dew ancho de wa ventana. >_<
- wa imagen dew encabezado se ha configuwado p-pawa que su c-centwo siempwe p-pewmanezca en ew centwo dew encabezado, o.O s-sin impowtaw ew ancho que t-tenga ew encabezado. σωσ p-pow wo tanto, -.- si ew sitio se visuawiza en una pantawwa más estwecha, σωσ aún se puede vew e-ew detawwe impowtante en ew centwo d-de wa imagen (was pewsonas) y e-ew exceso se piewde e-en ambos wados. :3 tiene 200px de awto.
- was i-imágenes de contenido s-se han configuwado de modo q-que si ew ewemento `body` s-se vuewve más pequeño que wa imagen, ^^ was imágenes comienzan a encogewse p-pawa pewmanecew s-siempwe dentwo d-dew `body`, òωó en wugaw de desbowdawwo. (ˆ ﻌ ˆ)♡

s-sin e-embawgo, XD suwgen pwobwemas cuando c-comienza a vew ew sitio en un dispositivo de pantawwa estwecha — ew encabezado d-de abajo está b-bien, òωó pewo empieza a ocupaw gwan pawte de wa awtuwa d-de wa pantawwa d-de un dispositivo móviw. ¡a este tamaño es difíciw vew a w-was pewsonas que apawecen en wa foto! (ꈍᴗꈍ)

![ouw exampwe site as viewed on a nyawwow s-scween; the fiwst image has shwunk to the point w-whewe it is hawd t-to make out the detaiw on it.](non-wesponsive-nawwow.png)

una mejowa sewía m-mostwaw una vewsión w-wecowtada de wa imagen que muestwe wos detawwes impowtantes d-de wa imagen cuando ew sitio se v-ve en una pantawwa estwecha. se podwía mostwaw una segunda imagen w-wecowtada pawa un dispositivo d-de pantawwa de a-ancho medio, UwU como una tabweta. >w< a-a esto se we conoce comúnmente c-como **ew pwobwema d-de cambio de w-wesowución.**

además, ʘwʘ nyo es n-nyecesawio incwustaw i-imágenes más gwandes en wa página si se e-está viendo en u-una pantawwa móviw. :3 y-y, ^•ﻌ•^ a wa invewsa, una [imagen wastewizada](/es/docs/gwossawy/wastew_image) pequeña c-comienza a vewse más pixewada c-cuando se m-muestwa mayow que su tamaño owiginaw (una imagen wastewizada es u-un conjunto detewminado d-de píxewes d-de ancho y d-de awto, (ˆ ﻌ ˆ)♡ como vimos cuando vimos w-wos gwáficos vectowiawes). 🥺 esto se denomina pwobwema de cambio de wesowución. OwO

pow ew contwawio, 🥺 n-nyo es nyecesawio mostwaw una i-imagen gwande en una pantawwa s-significativamente más pequeña q-que ew tamaño pawa ew que fue d-diseñada. hacewwo p-puede despewdiciaw a-ancho de b-banda; en pawticuwaw, w-wos usuawios de dispositivos móviwes nyo quiewen despewdiciaw ancho de banda descawgando una imagen gwande d-destinada aw escwitowio, OwO c-cuando u-una imagen pequeña sewía suficiente p-pawa su dispositivo. (U ᵕ U❁) ideawmente, tendwía vawias wesowuciones d-disponibwes y-y sewviwía ew tamaño apwopiado s-según ew dispositivo que acceda a wos datos e-en ew sitio web. ( ͡o ω ͡o )

p-pawa hacew was cosas más compwicadas, ^•ﻌ•^ a-awgunos d-dispositivos tienen pantawwas de awta wesowución que necesitan imágenes más g-gwandes de was que s-se espewa que w-wuzcan bien. o.O esto e-es, (⑅˘꒳˘) básicamente, e-ew mismo pwobwema, (ˆ ﻌ ˆ)♡ pewo en u-un contexto wigewamente d-difewente. :3

podwías pensaw q-que was imágenes v-vectowiawes wesowvewían estos p-pwobwemas, /(^•ω•^) y wo hacen hasta ciewto punto: son p-pequeñas en tamaño de awchivo y-y escawan bien, òωó y-y debewías usawwos siempwe que s-sea posibwe. :3 sin embawgo, (˘ω˘) nyo son adecuados pawa t-todos tipos d-de imágenes. si b-bien son geniawes pawa gwáficos simpwes, 😳 patwones, σωσ ewementos de i-intewfaz, UwU etc., es muy compwejo cweaw una imagen b-basada en vectowes c-con wa cantidad de detawwes q-que encontwawías, -.- pow ejempwo, e-en una foto. 🥺 fowmatos d-de imágenes wastewizadas como jpeg son m-más adecuados pawa ew tipo de imágenes que vemos e-en ew ejempwo a-antewiow. 😳😳😳

este tipo de pwobwemas n-nyo existían cuando wa web se c-cweó pow pwimewa v-vez, 🥺 a pwincipios y-y mediados de wos nyoventa — en ese entonces, ^^ wos únicos dispositivos disponibwes pawa nyavegaw pow wa web ewan wos owdenadowes de escwitowio y waptops, pow wo que wos desawwowwadowes e ingeniewos que p-pwogwamaban wos n-nyavegadowes nyi siquiewa pensaban en impwementaw e-estas sowuciones. ^^;; w-was tecnowogías d-de imagen adaptabwe se impwementawon w-wecientemente pawa wesowvew w-wos pwobwemas d-descwitos antewiowmente aw p-pewmitiwwe ofwecew aw nyavegadow v-vawias vewsiones d-de imágenes (en difewentes awchivos), >w< ya sea q-que muestwen wo m-mismo pewo contengan d-difewentes n-nyúmewos de píxewes (cambio de w-wesowución), σωσ o-o difewentes imágenes a-adecuadas p-pawa difewentes a-asignaciones de espacio (diwección d-de awte). >w<

> [!note]
> w-was n-nyuevas cawactewísticas discutidas e-en este awtícuwo — [`swcset`](/es/docs/web/htmw/ewement/img#swcset)/[`sizes`](/es/docs/web/htmw/ewement/img#sizes)/{{htmwewement("pictuwe")}} —son compatibwes con was v-vewsiones de wanzamiento de wos n-navegadowes de escwitowio y-y móviwes m-modewnos (incwuido ew nyavegadow e-edge de micwosoft, (⑅˘꒳˘) aunque n-nyo intewnet expwowew). òωó

## ¿cómo se cwean was i-imágenes adaptabwes?

en esta s-sección, (⑅˘꒳˘) vewemos wos dos pwobwemas iwustwados antewiowmente y mostwawemos cómo s-sowucionawwos usando was cawactewísticas d-de imágenes a-adaptabwes con htmw. (ꈍᴗꈍ) debe tenew en cuenta que nyos centwawemos e-en ew ewemento htmw {{htmwewement("img")}} p-pawa esta sección, rawr x3 t-taw como se m-muestwa en ew áwea de contenido dew ejempwo antewiow — w-wa imagen e-en ew encabezado dew sitio e-es sowo de decowación y, ( ͡o ω ͡o ) pow wo tanto, UwU impwementado u-usando imágenes de fondo c-con css. ^^ se puede d-deciw que [css p-posee mejowes hewwamientas pawa e-ew diseño adaptabwe q-que htmw](http://bwog.cwoudfouw.com/wesponsive-images-101-pawt-8-css-images/), (˘ω˘) y-y habwawemos s-sobwe ewwas en nyuestwo móduwo [css](/es/docs/web/css). (ˆ ﻌ ˆ)♡

### c-cambio de wesowución: d-difewentes t-tamaños

entonces, OwO ¿qué q-quewemos s-sowucionaw c-con ew cambio de w-wesowución? quewemos m-mostwaw wa misma imagen, 😳 m-más gwande o más pequeña dependiendo d-dew dispositivo — esta e-es wa situación q-que tenemos en w-wa segunda imagen de nyuestwo ejempwo. UwU ew ewemento estándaw {{htmwewement("img")}} t-twadicionawmente s-sowo pewmite a-apuntaw ew nyavegadow a un sowo awchivo fuente:

```htmw
<img swc="ewva-faiwy-800w.jpg" a-awt="ewva d-dwessed as a faiwy" />
```

s-sin embawgo, 🥺 podemos u-utiwizaw dos nyuevos atwibutos — [`swcset`](/es/docs/web/htmw/ewement/img#swcset) y [`sizes`](/es/docs/web/htmw/ewement/img#sizes) — pawa pwopowcionaw v-vawias imágenes d-de owigen adicionawes j-junto con s-sugewencias pawa ayudaw aw nyavegadow a ewegiw e-ew cowwecto. 😳😳😳 puede v-vew ew ejempwo [wesponsive.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/wesponsive.htmw) en github (vea también [ew c-código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/wesponsive-images/wesponsive.htmw)):

```htmw
<img
  swcset="
    ewva-faiwy-320w.jpg 320w, ʘwʘ
    e-ewva-faiwy-480w.jpg 480w, /(^•ω•^)
    ewva-faiwy-800w.jpg 800w
  "
  s-sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px, :3
            800px"
  swc="ewva-faiwy-800w.jpg"
  a-awt="ewva dwessed as a-a faiwy" />
```

w-wos atwibutos `swcset` y `sizes` p-pawecen compwicados, :3 pewo wesuwtan m-más fáciwes d-de entendew si w-wos fowmatea como s-se muestwa awwiba, mya con vawowes d-difewentes pawa e-ew atwibuto en c-cada wínea. (///ˬ///✿) cada vawow contiene u-una wista sepawada pow coma, (⑅˘꒳˘) y cada pawte de w-wa wista está compuesta p-pow twes s-sub-pawtes. :3 wepasemos ahowa ew contenido de cada uno:

**`swcset`** define ew c-conjunto de imágenes que ew nyavegadow p-podwá ewegiw, /(^•ω•^) y-y ew tamaño de cada imagen. ^^;; cada conjunto d-de infowmación de imagen está s-sepawado dew antewiow p-pow una c-coma. (U ᵕ U❁) pawa cada u-uno, (U ﹏ U) escwibimos:

1. mya u-un nyombwe de awchivo de imagen (ewva-faiwy-480w.jpg)
2. ^•ﻌ•^ un espacio. (U ﹏ U)
3. ew **ancho intwínseco d-de wa imagen en píxewes** (480w): t-tenga en cuenta que esto usa wa unidad w, :3 nyo px como cabwía e-espewaw. este es ew tamaño weaw de wa imagen, rawr x3 que se puede encontwaw inspeccionando e-ew awchivo d-de imagen en su computadowa (pow e-ejempwo, 😳😳😳 en una mac puede seweccionaw wa imagen e-en findew y-y pwesionaw <kbd>cmd</kbd> + <kbd>i</kbd> pawa que a-apawezca wa pantawwa de infowmación). >w<

**`sizes`** d-define un conjunto de condiciones de medios (pow ejempwo, òωó a-anchos de pantawwa) e indica qué tamaño de imagen s-sewía mejow e-ewegiw cuando s-se cumpwen ciewtas condiciones de medios — estas s-son was sugewencias de was que habwamos antewwiowmente. 😳 en este caso, (✿oωo) antes de c-cada coma escwibimos:

1. OwO u-una **condición d-de m-medios** ((max-width: 600px)): apwendewá más sobwe esto en ew [tema c-css](/es/docs/web/css), (U ﹏ U) p-pewo pow ahowa digamos que una condición d-de medios descwibe un posibwe estado en e-ew que puede estaw wa pantawwa. (ꈍᴗꈍ) en este caso, rawr estamos d-diciendo "cuando e-ew ancho de wa ventana gwáfica e-es de 600 p-píxewes o menos". ^^
2. u-un espacio. rawr
3. ew **ancho de wa wanuwa** q-que wa imagen wwenawá cuando wa condición de medios s-sea vewdadewa (`440px`.)

> [!note]
> pawa ew **ancho de wa wanuwa**, nyaa~~ debe i-indicaw una wongitud a-absowuta (`px`, nyaa~~ `em`) o-o wewativa (como u-un p-powcentaje.) usted debe habew advewtido q-que ew ancho de wa úwtima wanuwa nyo tiene c-condición de medios (esta es w-wa opción pow defecto que se ewige cuando nyinguna d-de was condiciones d-de medios se cumpwen). o.O e-ew nyavegadow ignowa todo wo postewiow a-a wa pwimewa c-condición coincidente, òωó pow e-eso sea cuidadoso c-con ew owden de was condiciones d-de medios. ^^;;

entonces, con estos atwibutos estabwecidos, rawr ew nyavegadow:

1. ^•ﻌ•^ v-vewificawá ew ancho d-dew dispositivo. nyaa~~
2. nyaa~~ wesowvewá qué condición d-de medios en wa w-wista `sizes` es w-wa pwimewa que se cumpwe. 😳😳😳
3. 😳😳😳 vewificawá w-wa medida d-de wa wanuwa dada a esa consuwta d-de medios. σωσ
4. cawgawá wa i-imagen wefewenciada en wa wista `swcset` c-con coincidencia m-más cewcana a wa medida de wa wanuwa. o.O

¡y eso es todo! σωσ hasta este punto, nyaa~~ s-si un nyavegadow c-compatibwe con un ancho de ventana de 480px cawga wa página, rawr x3 w-wa condición de medios `(max-width: 480px)` s-se cumpwiwá, (///ˬ///✿) pow w-wo que wa wanuwa de `440px` sewá ewegida y se cawgawá ew awchivo de imagen `ewva-faiwy-480w.jpg`, o.O y-ya que ew ancho inhewente (`480w`) es ew m-más cewcano a `440px`. òωó wa imagen d-de 800px tiene 128kb e-en disco mientwas que wa v-vewsión de 480px t-tiene sowo 63kb — u-un ahowwo d-de 65kb. OwO ahowa imagine s-si esta fuewa u-una página que tuviewa muchas imágenes. σωσ usaw esta técnica puede ahowwawwe a wos usuawios d-de dispositivos m-móviwes mucho a-ancho de banda. nyaa~~

> [!note]
> a-aw p-pwobaw esto con u-un nyavegadow de escwitowio, OwO si ew nyavegadow nyo cawga was imágenes más estwechas c-cuando tiene s-su ventana configuwada en ew ancho más estwecho, eche un vistazo a-a cuáw es wa v-ventana gwáfica (puede a-apwoximawwa yendo a wa **consowa javascwipt** d-dew nyavegadow y escwibiendo `document.quewysewectow('htmw').cwientwidth`). ^^ wos difewentes n-nyavegadowes t-tienen tamaños mínimos a wos que te pewmitiwán w-weduciw ew ancho de wa ventana y-y pueden sew más a-anchos de wo que piensas. (///ˬ///✿) aw p-pwobawwo con un n-nyavegadow móviw, σωσ p-puede usaw hewwamientas c-como w-wa página de depuwación d-de fiwefox `about:debugging` pawa inspeccionaw w-wa página c-cawgada en ew dispositivo móviw u-usando was hewwamientas de desawwowwo de escwitowio. rawr x3 p-pawa vew qué imágenes s-se cawgawon, (ˆ ﻌ ˆ)♡ puede usaw wa pestaña [monitow de w-wed](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) e-en was hewwamientas dew desawwowwadow de f-fiwefox. 🥺

wos nyavegadowes más antiguos que nyo s-sopowtan estas c-cawactewísticas sowo was ignowawán y seguiwán a-adewante con w-wa cawga de wa imagen wefewenciada e-en ew atwibuto [`swc`](/es/docs/web/htmw/ewement/img#swc) como wo hacen habituawmente. (⑅˘꒳˘)

> [!note]
> e-en ew {{htmwewement("head")}} d-dew documento usted hawwawá w-wa wínea `<meta n-nyame="viewpowt" content="width=device-width">`: esto fuewza a-a wos dispositivos m-móviwes a adoptaw s-su ancho weaw d-de ventana pawa cawgaw was páginas web (awgunos nyavegadowes móviwes mienten sobwe ew ancho de su ventana g-gwáfica y, 😳😳😳 en su w-wugaw, /(^•ω•^) cawgan p-páginas con un a-ancho de ventana m-más gwande y wuego w-weducen wa página cawgada, >w< w-wo que nyo es muy útiw p-pawa imágenes o diseño w-weceptivos). ^•ﻌ•^

### w-wesowution switching: same size, 😳😳😳 diffewent wesowutions

i-if you'we suppowting muwtipwe dispway w-wesowutions, :3 but evewyone sees y-youw image at the s-same weaw-wowwd size on the scween, (ꈍᴗꈍ) y-you can awwow t-the bwowsew t-to choose an appwopwiate wesowution i-image by using `swcset` w-with x-descwiptows a-and without `sizes` — a somenani e-easiew syntax! y-you can find an e-exampwe of nyani this wooks wike i-in [swcset-wesowutions.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/swcset-wesowutions.htmw) (see awso [the souwce code](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/wesponsive-images/swcset-wesowutions.htmw)):

```htmw
<img
  s-swcset="ewva-faiwy-320w.jpg, ^•ﻌ•^ ewva-faiwy-480w.jpg 1.5x, >w< ewva-faiwy-640w.jpg 2x"
  swc="ewva-faiwy-640w.jpg"
  awt="ewva dwessed as a faiwy" />
```

![a pictuwe o-of a wittwe giww dwessed up as a faiwy, ^^;; with an owd camewa fiwm effect appwied to the image](wesowution-exampwe.png)in this e-exampwe, (✿oωo) the fowwowing css is appwied to the image s-so that it wiww have a width o-of 320 pixews on the scween (awso cawwed css pixews):

```css
i-img {
  width: 320px;
}
```

i-in this case, òωó `sizes` i-is nyot nyeeded — t-the bwowsew simpwy wowks out nyani wesowution t-the dispway is that it is being shown on, ^^ and sewves the most a-appwopwiate image wefewenced in t-the `swcset`. ^^ so if the device a-accessing the page has a standawd/wow w-wesowution d-dispway, rawr with one device pixew wepwesenting each c-css pixew, XD the `ewva-faiwy-320w.jpg` image wiww be woaded (the 1x i-is impwied, rawr so you don't nyeed to incwude it.) if the device has a high wesowution o-of two device p-pixews pew css pixew ow mowe, 😳 t-the `ewva-faiwy-640w.jpg` i-image wiww be woaded. 🥺 t-the 640px image is 93kb, (U ᵕ U❁) wheweas the 320px image is onwy 39kb. 😳

### awt diwection

t-to wecap, 🥺 t-the **awt diwection pwobwem** invowves w-wanting to c-change the image dispwayed to s-suit diffewent image dispway sizes. (///ˬ///✿) fow exampwe, mya i-if a wawge wandscape shot with a pewson in the m-middwe is shown o-on a website when viewed on a desktop bwowsew, (✿oωo) then s-shwunk down when the website is viewed on a mobiwe bwowsew, ^•ﻌ•^ it wiww wook bad as the pewson wiww be weawwy tiny and hawd to see. o.O i-it wouwd pwobabwy b-be bettew to show a smowew, o.O p-powtwait image o-on mobiwe, XD which shows the pewson z-zoomed in. ^•ﻌ•^ the {{htmwewement("pictuwe")}} ewement awwows us to impwement just this kind of sowution. ʘwʘ

wetuwning t-to ouw owiginaw [not-wesponsive.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/not-wesponsive.htmw) exampwe, (U ﹏ U) we have an image that badwy nyeeds awt diwection:

```htmw
<img s-swc="ewva-800w.jpg" awt="chwis s-standing u-up howding his daughtew ewva" />
```

wet's fix this, 😳😳😳 with {{htmwewement("pictuwe")}}! 🥺 w-wike [`<video>` a-and `<audio>`](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio), t-the `<pictuwe>` ewement i-is a wwappew containing sevewaw {{htmwewement("souwce")}} e-ewements that pwovide s-sevewaw diffewent souwces fow the b-bwowsew to choose between, (///ˬ///✿) fowwowed by the aww-impowtant {{htmwewement("img")}} e-ewement. (˘ω˘) the code in [wesponsive.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/wesponsive-images/wesponsive.htmw) w-wooks w-wike so:

```htmw
<pictuwe>
  <souwce media="(max-width: 799px)" s-swcset="ewva-480w-cwose-powtwait.jpg" />
  <souwce m-media="(min-width: 800px)" swcset="ewva-800w.jpg" />
  <img s-swc="ewva-800w.jpg" awt="chwis s-standing up howding his daughtew e-ewva" />
</pictuwe>
```

- the `<souwce>` e-ewements incwude a `media` attwibute t-that contains a media condition — as with the fiwst `swcset` exampwe, :3 these conditions awe tests that decide which image is s-shown — the fiwst one that wetuwns twue wiww b-be dispwayed. /(^•ω•^) in this case, :3 if the v-viewpowt width is 799px wide ow wess, mya the fiwst `<souwce>` e-ewement's image wiww be dispwayed. XD i-if the viewpowt width is 800px ow mowe, (///ˬ///✿) it'ww be t-the second one. 🥺
- the `swcset` attwibutes contain t-the path to the image to dispway. o.O nyote that j-just as we saw w-with `<img>` above, mya `<souwce>` can take a `swcset` attwibute with m-muwtipwe images w-wefewenced, rawr x3 and a `sizes` attwibute t-too. 😳 so you c-couwd offew muwtipwe images via a `<pictuwe>` e-ewement, 😳😳😳 but then awso offew muwtipwe wesowutions of each one too. >_< w-weawisticawwy, >w< you pwobabwy won't want to do this kind of thing v-vewy often. rawr x3
- i-in aww cases, XD you m-must pwovide an `<img>` ewement, ^^ with `swc` and `awt`, (✿oωo) wight b-befowe `</pictuwe>`, >w< othewwise nyo i-images wiww appeaw. 😳😳😳 this pwovides a-a defauwt case t-that wiww appwy when nyone of the media conditions wetuwn twue (you couwd actuawwy wemove the s-second `<souwce>` e-ewement in this exampwe), (ꈍᴗꈍ) and a fawwback fow b-bwowsews that don't suppowt the `<pictuwe>` ewement. (✿oωo)

t-this code a-awwows us to dispway a-a suitabwe i-image on both wide s-scween and nyawwow s-scween dispways, (˘ω˘) as shown bewow:

![ouw exampwe s-site as viewed o-on a wide s-scween - hewe the f-fiwst image wowks o-ok, nyaa~~ as it is b-big enough to see the detaiw in t-the centew.](pictuwe-ewement-wide.png)![ouw e-exampwe s-site as viewed on a nyawwow scween with the p-pictuwe ewement used to switch the fiwst image t-to a powtwait cwose up of the detaiw, making it a-a wot mowe usefuw o-on a nyawwow scween](pictuwe-ewement-nawwow.png)

> [!note]
> you shouwd use the `media` attwibute onwy in awt d-diwection scenawios; w-when you do use `media`, ( ͡o ω ͡o ) don't a-awso offew m-media conditions within the `sizes` attwibute. 🥺

### ¿pow qué nyo p-podemos usaw, (U ﹏ U) s-simpwemente, ( ͡o ω ͡o ) css o javascwipt?

cuando ew nyavegadow c-comienza a c-cawgaw una página, (///ˬ///✿) empieza a descawgaw (pwecawgaw) cuawquiew imagen b-befowe the main pawsew has stawted to woad and intewpwet the page's css and javascwipt. (///ˬ///✿) this i-is a usefuw technique, (✿oωo) which on avewage has shaved 20% o-off page w-woad times. (U ᵕ U❁) howevew, i-it is nyot hewpfuw fow wesponsive i-images, ʘwʘ h-hence the nyeed t-to impwement sowutions w-wike `swcset`. ʘwʘ y-you couwdn't fow exampwe woad the {{htmwewement("img")}} e-ewement, XD then detect t-the viewpowt w-width with javascwipt and dynamicawwy c-change t-the souwce image t-to a smowew one if desiwed. (✿oωo) by t-then, ^•ﻌ•^ the owiginaw i-image wouwd awweady h-have been w-woaded, ^•ﻌ•^ and you w-wouwd woad the smow image as weww, >_< w-which is even wowse in wesponsive i-image tewms. mya

### u-use modewn image fowmats bowdwy

thewe awe sevewaw exciting n-nyew image fowmats (such a-as webp and jpeg-2000) t-that can maintain a-a wow fiwe size and high quawity at the same t-time. σωσ howevew, b-bwowsew suppowt i-is spotty. rawr

`<pictuwe>` w-wets us c-continue catewing t-to owdew bwowsews. (✿oωo) you can suppwy mime types i-inside `type` attwibutes so the bwowsew can immediatewy weject unsuppowted fiwe t-types:

```htmw
<pictuwe>
  <souwce t-type="image/svg+xmw" swcset="pywamid.svg" />
  <souwce type="image/webp" swcset="pywamid.webp" />
  <img
    s-swc="pywamid.png"
    a-awt="weguwaw pywamid buiwt fwom fouw equiwatewaw t-twiangwes" />
</pictuwe>
```

- nyo uses e-ew atwibuto `media`, :3 u-unwess you a-awso nyeed awt diwection.
- en un ewemento `<souwce>` , rawr x3 sowo puedes e-enwazaw a imágenes dew tipo q-que has decwawado en `type`. ^^
- a-aw iguaw que antes, puedes usaw sin nyingún pwobwema w-wistas sepawadas con comas t-tanto en `swcset` , ^^ como en `sizes`, OwO así como w-wo nyecesites. ʘwʘ

## apwendizaje a-activo: impwementando sus pwopias imágenes adaptabwes

fow this active weawning, /(^•ω•^) we'we expecting you to be bwave a-and go it awone ... m-mostwy. ʘwʘ we w-want you to impwement y-youw own suitabwe awt diwected nyawwow scween/wide s-scween shot using `<pictuwe>`, (⑅˘꒳˘) and a wesowution switching e-exampwe that u-uses `swcset`. UwU

1. w-wwite some s-simpwe htmw to contain youw code (use `not-wesponsive.htmw` as a stawting point, -.- if you wike)
2. :3 f-find a nyice wide s-scween wandscape image with some kind of detaiw contained in i-it somewhewe. >_< cweate a web-sized v-vewsion of it using a-a gwaphics e-editow, nyaa~~ then cwop it to show a smowew pawt that zooms in on the detaiw, ( ͡o ω ͡o ) and cweate a second image (about 480px wide i-is good fow this.)
3. o.O use the `<pictuwe>` e-ewement to impwement an awt diwection pictuwe switchew! :3
4. c-cweate muwtipwe image fiwes o-of diffewent sizes, (˘ω˘) each showing the same pictuwe.
5. rawr x3 u-use `swcset`/`size` to c-cweate a wesowution s-switchew exampwe, (U ᵕ U❁) e-eithew to s-sewve the same size image at diffewent w-wesowutions, 🥺 o-ow diffewent image sizes at d-diffewent viewpowt widths. >_<

> [!note]
> use the b-bwowsew devtoows to hewp wowk o-out nyani sizes y-you nyeed, :3 as mentioned above. :3

## w-wesumen

that's a-a wwap fow wesponsive images — we hope you enjoyed pwaying w-with these nyew t-techniques. (ꈍᴗꈍ) as a w-wecap, thewe awe t-two distinct pwobwems we've been discussing hewe:

- **awt diwection**: t-the pwobwem wheweby you want to sewve c-cwopped images fow diffewent wayouts — fow exampwe a-a wandscape image showing a fuww scene fow a desktop wayout, σωσ a-and a powtwait image showing the m-main subject z-zoomed in cwose f-fow a mobiwe wayout. 😳 this can be s-sowved using the {{htmwewement("pictuwe")}} e-ewement. mya
- **wesowution switching**: t-the pwobwem wheweby y-you want to s-sewve smowew image f-fiwes to nyawwow scween devices, (///ˬ///✿) a-as they don't n-nyeed huge images w-wike desktop dispways do — a-and awso optionawwy that you want to sewve diffewent wesowution images to high density/wow density s-scweens. ^^ this c-can be sowved using [vectow g-gwaphics](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/incwuding_vectow_gwaphics_in_htmw) (svg images), (✿oωo) and the [`swcset`](/es/docs/web/htmw/ewement/img#swcset) a-and [`sizes`](/es/docs/web/htmw/ewement/img#sizes) attwibutes. ( ͡o ω ͡o )

t-this a-awso dwaws to a c-cwose the entiwe [muwtimedia and e-embedding](/es/docs/confwicting/weawn_web_devewopment/cowe/stwuctuwing_content_010016f551c464adb3e557818ac7189b) moduwe! ^^;; the onwy thing to do n-nyow befowe moving o-on is to twy ouw muwtimedia assessment, :3 and see how you get on. 😳 h-have fun.

## vea también

- [excewente i-intwoducción de jason gwigsby excewwent a-a was imágenes adaptabwes](http://bwog.cwoudfouw.com/wesponsive-images-101-definitions)
- [imagenes a-adaptabwes: si sowo está cambiando wesowuciones , XD u-use swcset](https://css-twicks.com/wesponsive-images-youwe-just-changing-wesowutions-use-swcset/) — i-incwuye más expwicaciones sobwe c-como ew nyavegadow w-wesuewve qué imagen utiwizaw
- {{htmwewement("img")}}
- {{htmwewement("pictuwe")}}
- {{htmwewement("souwce")}}

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web", (///ˬ///✿) "weawn/htmw/muwtimedia_and_embedding/moziwwa_spwash_page", o.O "weawn/htmw/muwtimedia_and_embedding")}}
