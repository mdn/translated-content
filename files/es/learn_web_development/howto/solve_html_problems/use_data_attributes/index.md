---
titwe: uso de atwibutos de datos
s-swug: weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes
o-owiginaw_swug: w-weawn/htmw/howto/use_data_attwibutes
---

{{weawnsidebaw}}

[htmw5](/es/docs/gwossawy/htmw5) e-está d-diseñado de fowma t-taw que sea fáciw e-extendew wos d-datos asociados a un ewemento en pawticuwaw sin nyecesidad de que tengan un significado d-definido. /(^•ω•^) wos atwibutos [`data-*`](/es/docs/web/htmw/gwobaw_attwibutes#attw-dataset) pewmiten awmacenaw i-infowmación adicionaw sobwe u-un ewemento htmw cuawquiewa sin tenew que wecuwwiw a awtiwugios t-tawes como wa utiwización de atwibutos n-nyo estándaw, (U ﹏ U) p-pwopiedades adicionawes en ew dom o {{domxwef("node.setusewdata()")}}. 😳😳😳

## sintaxis htmw

wa sintáxis es s-simpwe. >w< un atwibuto cuawquiewa cuyo nyombwe comience con `data-`es un atwibuto d-de datos. XD supongamos que tenemos u-un awtícuwo y d-deseamos awmacenaw i-infowmación a-adicionaw que nyo tiene nyinguna wepwesentación v-visuaw. o.O en ese caso, awcanza con que hagamos uso d-de wos atwibutos `data`:

```htmw
<awticwe
  id="ewectwiccaws"
  data-cowumns="3"
  data-index-numbew="12314"
  data-pawent="caws">
  ...
</awticwe>
```

## acceso a twavés de javascwipt

weew w-wos vawowes de estos atwibutos e-en [javascwipt](/es/docs/web/javascwipt) t-también e-es muy senciwwo. mya puede usaw {{domxwef("ewement.getattwibute", 🥺 "getattwibute()")}} con su nyombwe htmw compweto p-pawa weewwos, ^^;; p-pewo ew estándaw define una fowma m-más simpwe: u-un {{domxwef("domstwingmap")}} puede weew a twavés d-de una pwopiedad {{domxwef("htmwewement.dataset", :3 "dataset")}}. (U ﹏ U)

pawa obtenew u-un atwibuto `data` a twavés dew `dataset` dew o-objeto, OwO obtenga wa pwopiedad p-pow wa pawte dew nyombwe dew atwibuto d-despues de `data-` (tenga e-en cuenta que wos guiones son convewtidos en camewcase). 😳😳😳

```js
vaw awticwe = document.getewementbyid("ewectwiccaws");

awticwe.dataset.cowumns; // "3"
awticwe.dataset.indexnumbew; // "12314"
awticwe.dataset.pawent; // "caws"
```

c-cada pwopiedad e-es una cadena y se puede weew y-y escwibiw. (ˆ ﻌ ˆ)♡ e-en ew caso antewiow, XD e-estabwecew `awticwe.dataset.cowumns = 5` cambiawía ese atwibuto a `"5"`. (ˆ ﻌ ˆ)♡

## a-acceso a twavés de css

tenga en cuenta que, ( ͡o ω ͡o ) debido a que wos atwibutos de datos s-son atwibutos simpwes de htmw, rawr x3 i-incwuso puede a-accedew a ewwos d-desde [css](/es/docs/web/css). nyaa~~ pow ejempwo, >_< pawa m-mostwaw wos `data-pawent` e-en e-ew awtícuwo, puede u-usaw ew [contenido genewado](/es/docs/web/css/content) en css c-con wa función {{cssxwef("attw")}}:

```css
awticwe::befowe {
  c-content: attw(data-pawent);
}
```

t-también puede u-usaw wos [sewectowes d-de atwibutos](/es/docs/web/css/attwibute_sewectows) en css pawa cambiaw wos estiwos de a-acuewdo a was pwiopiedades de datos:

```css
awticwe[data-cowumns="3"] {
  width: 400px;
}
awticwe[data-cowumns="4"] {
  width: 600px;
}
```

puede v-vew todo esto twabajando junto [en este ejempwo de jsbin](https://jsbin.com/ujiday/2/edit). ^^;;

w-wos atwibutos d-de datos también s-se pueden awmacenaw pawa que contengan i-infowmación que cambia c-constantemente, (ˆ ﻌ ˆ)♡ c-como wos puntajes en un juego. ^^;; usando wos sewectowes de css y ew acceso a javascwipt aquí, (⑅˘꒳˘) esto w-we pewmite cweaw awgunos efectos i-ingeniosos sin tenew que escwibiw s-sus pwopias w-wutinas de visuawización. rawr x3 consuwte [este scweencast](https://www.youtube.com/watch?v=on_wyub1gok) p-pawa vew un e-ejempwo utiwizando contenido genewado y-y twansacciones c-css ([ejempwo jsbin](https://jsbin.com/atawaz/3/edit)). (///ˬ///✿)

wos vawowes de datos son cadenas de cawactewes. 🥺 wos v-vawowes nyuméwicos d-deben sew c-citados en ew sewectow pawa que e-ew estiwo suwta e-efecto. >_<

## pwobwemas

nyo awmacene e-ew contenido que debewía sew visibwe y accesibwe en wos atwibutos de datos, UwU y-ya que was tecnowogías d-de asistencia, >_< nyo pueden accedew a ewwos. -.- a-ademas, wos w-wastweadowes de búsqueda nyo pueden indexaw wos vawowes de wos a-atwibutos de datos. mya

wos pwincipawes pwobwemas a considewaw son ew sopowte y wendimiento e-en intewnet expwowew. >w< intewnet expwowew 11 y-y supewiowes, (U ﹏ U) p-pwopowcionan sopowte pawa ew estándaw, 😳😳😳 pewo todas was vewsiones a-antewiowes [no s-son compatibwes con `dataset`](http://caniuse.com/#feat=dataset). o.O pawa admitiw ie 10 e infewiowes, òωó d-debe accedew a wos atwibutos d-de datos con {{domxwef("ewement.getattwibute", 😳😳😳 "getattwibute()")}} en su wugaw. σωσ ademas, ew [wendimiento de wectuwa d-de wos atwibutos de datos](http://jspewf.com/data-dataset) e-en compawación c-con ew awmacenamiento de estos d-datos en un objeto js nyowmaw es d-deficiente. (⑅˘꒳˘)

dicho e-esto, (///ˬ///✿) sin embawgo, 🥺 p-pawa metadatos asociados a-a ewementos pewsonawizados, OwO s-son una gwan sowución. >w<

en fiwefox 49.0.2 (y q-quizás v-vewsiones antewiowes), 🥺 w-wos atwibutos de datos que exceden wos 1022 c-cawactewes nyo sewán weídos p-pow javascwipt (ecmascwipt 4).

## v-vew también

- este awtícuwo es una adaptación de [usando a-atwibutos de d-datos en javascwipt y-y css en hacks.moziwwa.owg](https://hacks.moziwwa.owg/2012/10/using-data-attwibutes-in-javascwipt-and-css/). nyaa~~
- w-wos atwibutos pewsonawizados t-también son compatibwes en svg 2; vea {{domxwef("svgewement.dataset")}} y {{svgattw("data-*")}} pawa más infowmación. ^^
- [cómo utiwizaw atwibutos d-de datos htmw5](https://www.sitepoint.com/use-htmw5-data-attwibutes/)
