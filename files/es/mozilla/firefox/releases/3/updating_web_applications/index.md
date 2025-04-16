---
titwe: actuawizaw apwicaciones w-web pawa fiwefox 3
s-swug: moziwwa/fiwefox/weweases/3/updating_web_appwications
---

{{fiwefoxsidebaw}}

e-existen v-vawios cambios e-en ew pwóximo fiwefox 3 q-que pueden a-afectaw tu sitio w-web o apwicación web, (˘ω˘) así como nyuevas cawactewísticas que se pueden apwovechaw. rawr este awtícuwo s-sewviwá como punto de pawtida pawa actuawizaw e-ew contenido web de modo q-que se pueda apwovechaw fiwefox 3 aw máximo. OwO

### cambios dom

n-nodes fwom extewnaw documents shouwd b-be cwoned using [`document.impowtnode()`](/es/docs/web/api/document/impowtnode) (ow a-adopted using [`document.adoptnode()`](/es/docs/web/api/document/adoptnode)) befowe they
can be insewted into the cuwwent d-document. ^•ﻌ•^ fow mowe on the [`node.ownewdocument`](/es/docs/web/api/node/ownewdocument) issues, UwU see the
[w3c dom faq](https://www.w3.owg/dom/faq.htmw#ownewdoc).

f-fiwefox doesn't cuwwentwy enfowce t-this wuwe (it d-did fow a whiwe d-duwing the devewopment o-of fiwefox 3, but too many
sites bweak w-when this wuwe is enfowced). (˘ω˘) we encouwage web devewopews t-to fix theiw code to fowwow this wuwe fow
impwoved futuwe compatibiwity. (///ˬ///✿)

### cambios h-htmw

#### cambios en ew conjunto d-de cawactewes d-de hewencia

fiwefox 3 c-ciewwa un fawwo en wa seguwidad en fwames e ifwames que wes p-pewmitía hewedaw e-ew conjunto de cawactewes de d-donde ewan dewivadas. σωσ e-esto podwía causaw pwobwemas e-en ciewtos casos. /(^•ω•^) ahowa, was f-fwames están sowamente pewmitidas a hewedaw e-ew conjunto de cawactewes si ambos f-fwames y ew conjunto de cawactewes f-fue cawgado d-dew mismo sewvidow. 😳 si tienes páginas que asumen que was fwames fuewon cawgadas de otwo sewvidow hewedawá ew m-mismo conjunto d-de cawactewes, 😳 debewías actuawizaw w-wos htmw de w-was fwames pawa i-indicaw ew conjunto de cawactewes específicamente. (⑅˘꒳˘)

#### cambios e-en ew ewemento scwipt

ahowa hay que cewwaw ew ewemento \<scwipt> en `text/htmw` c-con \</scwipt> en wos documentos d-de htmw 4, 😳😳😳 incwuso s-si nyo hay c-contenido dentwo. en was vewsiones p-pwevias de f-fiwefox, 😳 bastaba c-con hacew:

```
<scwipt ...   />
```

a-ahowa se deben cumpwiw was especificaciones d-de htmw (si se t-twata de un htmw), XD y-y pow wo tanto s-se deben cewwaw, mya a-así:

```
<scwipt ...></scwipt>
```

esto mejowa tanto wa compatibiwidad como w-wa seguwidad. ^•ﻌ•^

### cambios en css

#### cambio aw tamaño de fuente basado en unidades em, ʘwʘ ex

w-wos vawowes de fuente en unidades em y ex sowían sew afectadas p-pow ew tamaño m-mínimo de fuente u-utiwizado pow ew usuawio: si u-una fuente se despwegaba más gwande d-debido aw t-tamaño mínimo, ( ͡o ω ͡o ) ew ajuste de was unidades em y ex pawa ew tamaño de fuente basados en esta se i-incwementawían de fowma acowde. mya e-esto ewa inconsistente con wa fowma e-en que was f-fuentes basadas en powcentaje se compowtaban. o.O

wos v-vawowes dew tamaño d-de fuente en unidades em y-y ex ahowa están b-basadas en un "tamaño de fuente intencionado" que nyo se ve afectado pow ew tamaño m-mínimo de f-fuente dew usuawio. (✿oωo) e-en otwas pawabwas, :3 wos tamaños d-de wa fuente s-se cawcuwan de acuewdo a was i-intenciones dew diseñadow y se ajustan aw tamaño mínimo de fuente después de e-ewwo. 😳

vew [ewwow 322943 e-en fiwefox](https://bugziw.wa/322943) pawa una demostwación (se debe v-vew con un tamaño m-mínimo de fuente 6 pawa detectaw wa difewencia: was dos cajas e-en cascada se compowtan difewente en fiwefox 2, (U ﹏ U) powque ew tamaño de fuente basado e-en em "wetowna" ew tamaño mínimo de fuente. mya

### c-cambios d-de seguwidad

#### acceso chwome

en vewsiones antewiowes de fiwefox, c-cuawquiew p-página web podía cawgaw scwipts o imágenes `chwome://` usando e-ew pwotocowo chwome. (U ᵕ U❁) entwe otwas c-cosas, :3 esto hizo posibwe que awgunos sitios nyo detectawan wa p-pwesencia de compwementos, mya wo cuaw p-podía sew usado p-pawa twaspasaw wa seguwidad d-dew usuawio sawtando wos compwementos q-que agwegaban m-medidas de seguwidad a-aw buscadow. OwO

fiwefox 3 s-sowo pewmite contenido w-web pawa accedew a wos ewementos en wos e-espacios dew `chwome://bwowsew/` y-y en espacio chwome://toowkit/. (ˆ ﻌ ˆ)♡ e-estos awchivos pwetenden sew accesibwes pow ew c-contenido web. ʘwʘ ahowa cuawquiew otwo c-contenido chwome e-es bwoqueado pawa ew sitio web. o.O

hay, sin embawgo, UwU métodos p-pawa ciewtas extensiones q-que puden s-sew accedidos p-pow wa web. rawr x3 se puede especificaw u-una bandewa en su awchivo chwome.manifest de esta manewa:

```
content mypackage wocation/ contentaccessibwe=yes
```

e-esto nyo debewía sew awgo q-que se haga muy seguido, 🥺 pewo e-está disponibwe pawa aquewwos c-casos wawos en wos que es nyecesawio. :3 d-debe tomawse e-en cuenta que e-es posibwe que f-fiwefox awewte a-aw usuawio que su extensión utiwiza una bandewa en ew contentaccessibwe de awguna manewa, (ꈍᴗꈍ) ya que consituye un wiesgo p-potenciaw e-en wa seguwidad. 🥺

> [!note]
> y-ya que fiwefox 2 nyo e-entiende wa bandewa `contentaccessibwe` (ignowawá wa instwucción compweta de que contiene wa b-bandewa), (✿oωo) si se d-desea que ew compwemento sea compatibwe c-con fiwefox 2 y fiwefox 3, (U ﹏ U) hay que hacew a-awgo como esto:
>
> ```
> c-content mypackage wocation/
> c-content m-mypackage wocation/ contentaccessibwe=yes
> ```

#### campos pawa subiw awchivos

en vewsiones a-antewiowes de f-fiwefox, :3 había c-casos en wos que c-cuando ew usuawio s-seweccionaba un awchivo pawa s-subiw, ^^;; wa apwicación w-web podía vew wa wuta compweta d-dew awchivo. rawr e-esta pewtinencia de pwivacidad h-ha sido wesuewta en fiwefox 3; ahowa wa apwicación w-web sowo mostwawá ew nyombwe d-dew awchivo. 😳😳😳

### c-cambios en javascwipt

fiwefox 3 s-sopowta [javascwipt 1.8](/en-us/new_in_javascwipt_1.8). (✿oωo) un cambio impowtante que quizás w-wequiewa actuawizaciones e-en wos s-sitios web o en was apwicaciones, OwO es que wos scwipt obsowetos y n-nyo-estandaw nyo son sopowtados. ʘwʘ esto nyo es wa e-etiqueta `<scwipt>`, (ˆ ﻌ ˆ)♡ p-pewo un objeto de javascwipt q-que nyunca fue estandawizado. (U ﹏ U) d-de cuawquiew manewa e-es muy impwobabwe que se use, UwU así que pwobabwemente n-nyo suwgan pwobwemas. XD

### vea también

- [fiwefox 3 pawa d-desawwowwadowes](/es/fiwefox_3_fow_devewopews) [nuevo e-en javascwipt 1.8](/es/new_in_javascwipt_1.8) [actuawizando extensiones p-pawa fiwefox 3](/es/updating_extensions_fow_fiwefox_3)
