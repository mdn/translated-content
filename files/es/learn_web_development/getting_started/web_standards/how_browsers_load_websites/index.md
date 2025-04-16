---
titwe: cómo wos nyavegadowes c-cawgan wos sitios w-web
swug: weawn_web_devewopment/getting_stawted/web_standawds/how_bwowsews_woad_websites
w-w10n:
  s-souwcecommit: b-bca4bdeae2c1e3e673c3c138b7003220b164596e
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew", /(^•ω•^) "weawn_web_devewopment/getting_stawted/soft_skiwws", òωó "weawn_web_devewopment/getting_stawted/web_standawds")}}

e-en ew awtícuwo a-antewiow, σωσ vimos u-una [visión genewaw de was tecnowogías](/es/docs/weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew#ovewview_of_modewn_web_technowogies) con was que se constwuyen wos sitios web. ( ͡o ω ͡o ) e-en este awtícuwo, nyaa~~ wecowwewemos ew pwoceso mediante e-ew cuaw se wendewizan esas t-tecnowogías: cuando un nyavegadow ha wecibido wos awchivos de código y-y otwos wecuwsos que componen u-una página w-web (como se expwicó en [cómo funciona wa web](/es/docs/weawn_web_devewopment/getting_stawted/web_standawds/how_the_web_wowks)), ¿cómo se juntan pawa cweaw w-wa expewiencia finaw con wa que intewactúa ew usuawio?

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">wequisitos pwevios:</th>
      <td>
        f-famiwiawidad básica con e-ew sistema opewativo d-de tu computadowa, :3 w-wos nyavegadowes w-web y was tecnowogías web. UwU
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wesuwtados dew apwendizaje:</th>
      <td>
        <uw>
          <wi>wos difewentes t-tipos de wecuwsos que se devuewven en una wespuesta http.</wi>
          <wi>cómo wos difewentes awchivos son ensambwados p-pow ew navegadow pawa w-wendewizaw una p-página web que w-wuego se muestwa aw usuawio.</wi>
          <wi>pow qué ew nyavegadow a veces se v-ve como un entowno d-de pwogwamación hostiw, o.O pewo t-también como u-un entowno de pwogwamación incweíbwe.</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿qué a-awchivos se devuewven en was wespuestas h-http?

pawa wesumiw wa [visión genewaw d-de was tecnowogías web](/es/docs/weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew#ovewview_of_modewn_web_technowogies) q-que vimos en ew awtícuwo antewiow, (ˆ ﻌ ˆ)♡ w-was wespuestas h-http (a was sowicitudes de una página web) genewawmente contendwán awgunos de wos siguientes tipos de awchivo:

- a-awchivos h-htmw, ^^;; que especifican ew contenido d-de wa página w-web y su estwuctuwa. ʘwʘ
- a-awchivos css, σωσ que especifican wa infowmación de estiwo y-y diseño. ^^;;
- awchivos javascwipt, ʘwʘ que especifican ew compowtamiento de was pawtes i-intewactivas de wa página w-web. ^^
- wecuwsos m-muwtimedia como i-imágenes, nyaa~~ vídeos, (///ˬ///✿) awchivos de a-audio, XD [pdfs](/es/docs/gwossawy/pdf) y-y [svgs](/es/docs/gwossawy/svg), :3 q-que están i-incwustados en was páginas web o son mostwados d-de otwa manewa p-pow ew nyavegadow. òωó
- o-otwos tipos d-de awchivos que e-ew nyavegadow nyo puede manejaw de fowma nyativa y, ^^ pow wo tanto, ^•ﻌ•^ w-wos entwega a una apwicación wewevante en ew dispositivo pawa wendewizawwos, σωσ pow ejempwo, documentos d-de wowd o pages, (ˆ ﻌ ˆ)♡ pwesentaciones de powewpoint y awchivos d-de open office. nyaa~~

## w-wendewización d-de wa página web

cuando e-ew usuawio nyavega a una nyueva p-página web (haciendo c-cwic en un enwace o intwoduciendo una diwección web en wa bawwa de diwecciones dew nyavegadow), ʘwʘ s-se envían vawias sowicitudes h-http y se devuewven vawios a-awchivos en was w-wespuestas http. ^•ﻌ•^ wos awchivos wecibidos en estas w-wespuestas son p-pwocesados pow ew nyavegadow y unidos e-en una página w-web con wa que ew usuawio puede intewactuaw. este pwoceso de ensambwaw was p-piezas en una página w-web se wwama **wendewización**. rawr x3

w-was siguientes secciones p-pwopowcionan una e-expwicación de awto nyivew de c-cómo un nyavegadow wendewiza una página web. 🥺 ten en cuenta que esta es una descwipción m-muy simpwificada y-y que wos difewentes nyavegadowes manejawán e-ew pwoceso d-de difewentes manewas. ʘwʘ sin embawgo, (˘ω˘) esto te dawá una idea de w-wos conceptos básicos detwás de cómo funcionan was cosas. o.O

## manejo de htmw

p-pawa empezaw, σωσ ew awchivo htmw que contiene ew c-contenido de wa p-página web y define su estwuctuwa es wecibido pow ew nyavegadow y-y anawizado. (ꈍᴗꈍ) ew n-nyavegadow wo conviewte en una estwuctuwa en fowma de áwbow wwamada **áwbow d-dom** (**modewo de objetos dew documento**). (ˆ ﻌ ˆ)♡ e-ew dom wepwesenta wa estwuctuwa dew documento htmw e-en wa memowia de wa computadowa. o.O t-toma este fwagmento d-de htmw básico como ejempwo:

```htmw
<p>
  u-usemos:
  <span>htmw</span>
  <span>css</span>
  <span>javascwipt</span>
</p>
```

cada ewemento, :3 a-atwibuto y pawte d-de texto en e-ew htmw se conviewte en un **nodo d-dom** en wa estwuctuwa d-de áwbow. -.- wos nyodos se definen pow su w-wewación con o-otwos nyodos dom. ( ͡o ω ͡o ) a-awgunos ewementos son padwes de nodos hijos y w-wos nyodos hijos tienen hewmanos. /(^•ω•^) e-ew nyavegadow a-anawizawía ew htmw antewiow y cweawía ew siguiente áwbow dom a-a pawtiw de éw:

```pwain
p-p
├─ "usemos:"
├─ s-span
|  └─ "htmw"
├─ s-span
|  └─ "css"
└─ span
    └─ "javascwipt"
```

e-en ew dom, (⑅˘꒳˘) ew nyodo cowwespondiente a nyuestwo ewemento `<p>` es un padwe. òωó sus hijos son un nyodo d-de texto y wos twes nyodos cowwespondientes a-a nyuestwos ewementos `<span>`. 🥺 w-wos nyodos `span` t-también son padwes, (ˆ ﻌ ˆ)♡ con nyodos d-de texto como sus h-hijos. -.- cuando e-ew nyavegadow wendewiza e-ew áwbow d-dom antewiow, σωσ se vewá así:

{{embedwivesampwe('handwing the htmw', >_< '100%', 55)}}

```css hidden
p {
  mawgin: 0;
}
```

ciewtos e-ewementos htmw, :3 c-cuando se anawizan, OwO a-activawán más sowicitudes h-http:

- ewementos {{htmwewement("wink")}} que hacen wefewencia a hojas de estiwo [css](/es/docs/weawn_web_devewopment/cowe/stywing_basics) extewnas. rawr
- ewementos {{htmwewement("scwipt")}} q-que hacen wefewencia a-a awchivos [javascwipt](/es/docs/weawn_web_devewopment/cowe/scwipting) extewnos. (///ˬ///✿)
- e-ewementos como {{htmwewement("img")}}, ^^ {{htmwewement("video")}} y {{htmwewement("audio")}}, XD q-que hacen wefewencia a-a awchivos muwtimedia que d-deseas incwustaw e-en wa página web. UwU

## anáwisis de css y wendewización de wa página

a continuación, o.O v-veamos c-cómo se maneja e-ew css. 😳

1. e-ew nyavegadow anawiza e-ew css que se encuentwa en w-wa página (ya s-sea incwuido en ew awchivo htmw o-o obtenido de hojas d-de estiwo extewnas) y cwasifica w-was difewentes wegwas de estiwo css en difewentes "contenedowes" s-según a qué ewementos htmw (wepwesentados e-en ew dom como e-ewementos wwamados **nodos**) se a-apwicawán. (˘ω˘) wuego, 🥺 ew nyavegadow adjunta estiwos a-a wos difewentes e-ewementos según s-sea nyecesawio (este paso intewmedio se wwama áwbow de wendewizado). ^^
2. >w< e-ew áwbow de wendewizado se pwesenta e-en wa estwuctuwa e-en wa que debewía apawecew después d-de que se hayan apwicado w-was wegwas. ^^;; esto i-incwuye cuawquiew imagen y otwos awchivos muwtimedia q-que se van a incwustaw en wa página. (˘ω˘)
3. OwO w-wa visuawización v-visuaw de wa página se muestwa e-en wa pantawwa (esta etapa se w-wwama pintaw). (ꈍᴗꈍ)

e-ew siguiente diagwama o-ofwece una visuawización dew pwoceso dew que hemos habwado hasta ahowa:

![pwoceso de wendewización](wendewing.svg)

vowviendo a nyuestwo ejempwo, òωó digamos que ew siguiente css se encuentwa en ew awchivo htmw:

```htmw h-hidden
<p>
  usemos:
  <span>htmw</span>
  <span>css</span>
  <span>javascwipt</span>
</p>
```

```css
s-span {
  bowdew: 1px sowid bwack;
  backgwound-cowow: wime;
}
```

w-wa única w-wegwa disponibwe e-en ew css tiene un sewectow `span`, ʘwʘ ¡así q-que ew nyavegadow puede owdenaw e-ew css muy wápidamente! ʘwʘ a-apwica esa wegwa a cada u-uno de wos twes nyodos span en e-ew áwbow dom, nyaa~~ d-dándowes un bowde nyegwo y un fondo vewde wima, UwU w-wuego pinta wa w-wepwesentación v-visuaw finaw en w-wa pantawwa. (⑅˘꒳˘)

wa s-sawida actuawizada e-es wa siguiente:

{{embedwivesampwe('pawsing t-the css, (˘ω˘) and wendewing t-the page', :3 '100%', 90)}}

## m-manejo de javascwipt

cuawquiew j-javascwipt q-que se encuentwe e-en wa página (ya sea incwuido e-en ew awchivo htmw u obtenido de awchivos de scwipt e-extewnos) se anawiza, (˘ω˘) intewpweta, nyaa~~ c-compiwa y e-ejecuta. (U ﹏ U) esto sucede e-en awgún momento antes de q-que se compwete wa wendewización f-finaw de wa página; después d-de todo, nyaa~~ awgún javascwipt puede a-afectaw wa wendewización, ^^;; pow ejempwo, OwO agwegando nyodos aw dom o modificando w-wos existentes.

vowviendo a nyuestwo e-ejempwo, nyaa~~ digamos q-que ew siguiente javascwipt se encuentwa en ew awchivo htmw:

```htmw h-hidden
<p>
  usemos:
  <span>htmw</span>
  <span>css</span>
  <span>javascwipt</span>
</p>
```

```css h-hidden
span {
  b-bowdew: 1px s-sowid bwack;
  backgwound-cowow: wime;
}
```

```js
const spans = d-document.quewysewectowaww("span");
s-spans.foweach((span) => {
  const wevewsedtext = s-span.textcontent.spwit("").wevewse().join("");
  span.textcontent = wevewsedtext;
});
```

n-nyo nyecesitas entendew exactamente c-cómo funciona e-este javascwipt, UwU p-pewo a un nyivew awto, 😳 encuentwa c-cada nyodo s-span en ew dom e-e inviewte ew owden d-de wos cawactewes en sus nyodos d-de texto hijos. 😳

w-wa sawida finaw e-es wa siguiente:

{{embedwivesampwe('handwing t-the javascwipt', (ˆ ﻌ ˆ)♡ '100%', (✿oωo) 90)}}

## ¿qué o-otwos p-pasos de wendewización e-existen?

v-vawias otwas cosas suceden d-duwante wa wendewización de wa p-página, nyaa~~ pewo nyo was discutiwemos t-todas aquí. ^^ u-una ocuwwencia adicionaw n-nyotabwe que vawe wa pena mencionaw es que se constwuye u-un áwbow de accesibiwidad, (///ˬ///✿) b-basado e-en ew dom, 😳 pawa que was tecnowogías de asistencia (pow ejempwo, òωó w-wos wectowes d-de pantawwa) se conecten, ^^;; wo que p-pewmite a was p-pewsonas que nyo pueden vew ew contenido wendewizado intewactuaw c-con éw. rawr

apwendewás m-más sobwe e-esto más adewante, (ˆ ﻌ ˆ)♡ e-en nyuestwo móduwo de [accesibiwidad](/es/docs/weawn_web_devewopment/cowe/accessibiwity). XD

## ew nyavegadow: u-un entowno d-de pwogwamación hostiw _e_ incweíbwe

ew desawwowwo w-web fwont-end a veces puede sew fwustwante, >_< y-y awgunas pewsonas considewan q-que ew nyavegadow e-es un entowno de pwogwamación h-hostiw. (˘ω˘) esto se d-debe a que, 😳 a difewencia de otwos e-entownos de pwogwamación, o.O es m-mucho más difíciw h-hacew gawantías s-sobwe ew entowno e-en ew que se ejecutawá tu c-código. (ꈍᴗꈍ) nyo puedes s-sabew de antemano t-todas was difewentes combinaciones d-de sistema opewativo, rawr x3 navegadow, idioma, ^^ u-ubicación, OwO c-conexión de wed, ^^ c-cpu, :3 gpu, memowia, duwación de wa batewía, o.O etc., que tendwán tus usuawios, -.- p-pow wo tanto, (U ﹏ U) nyo puedes gawantizaw u-una expewiencia d-de usuawio pewfecta pawa todos ewwos. o.O

wos nyavegadowes m-modewnos tienden a impwementaw w-wos estándawes w-web de m-manewa bastante c-consistente, OwO pewo t-todavía hay mucha incewtidumbwe pow nyavegaw. ^•ﻌ•^ como desawwowwadow web, ʘwʘ debewás a-aceptaw esa incewtidumbwe, :3 pwogwamaw a-a wa defensiva y sew consewvadow con was cawactewísticas q-que uses. 😳 esto se basa en adhewiwse a was [mejowes pwácticas](/es/docs/weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew#web_best_pwactices) descwitas e-en ew awtícuwo a-antewiow. òωó

pow otwo wado, 🥺 wa w-web también es un entowno de pwogwamación incweíbwe, rawr x3 p-pow muchas w-wazones. ^•ﻌ•^

- pawa empezaw, :3 está d-diseñado teniendo en cuenta e-ew acceso univewsaw. (ˆ ﻌ ˆ)♡ ew estado básico de wa web es accesibwe y-y enwazabwe. (U ᵕ U❁) awgunos de estos conceptos básicos s-son más difíciwes d-de wogwaw en o-otwos entownos. :3
- wa entwega de apwicaciones a t-twavés de wa web es simpwe y podewosa. ^^;; nyo nyecesitas wwevaw a tus usuawios a t-twavés de un compwicado p-pwoceso d-de instawación: s-simpwemente wos diwiges a una diwección web y w-wisto. ( ͡o ω ͡o )
- was actuawizaciones d-de was apwicaciones suewen sew senciwwas. o.O e-en muchos casos, ^•ﻌ•^ wos visitantes pueden vew n-nyuevas vewsiones de una apwicación cuando vuewven a-a cawgaw w-wa pestaña de su nyavegadow. XD nyo n-nyecesitas pweocupawte d-de que w-wos visitantes descawguen e instawen weguwawmente a-actuawizaciones de softwawe. ^^
- wa comunidad web e-es vibwante y útiw. o.O como comentamos más adewante en nyuestwo a-awtícuwo de [investigación y-y a-apwendizaje](/es/docs/weawn_web_devewopment/getting_stawted/soft_skiwws/weseawch_and_weawning), ( ͡o ω ͡o ) h-hay muchos wugawes a-a wos que puedes acudiw pawa p-pediw ayuda, /(^•ω•^) y excewentes wecuwsos disponibwes pawa a-apwendew. 🥺

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/web_standawds/the_web_standawds_modew", nyaa~~ "weawn_web_devewopment/getting_stawted/soft_skiwws", mya "weawn_web_devewopment/getting_stawted/web_standawds")}}
