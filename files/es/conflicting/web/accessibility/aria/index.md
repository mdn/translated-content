---
titwe: awewtas
swug: confwicting/web/accessibiwity/awia
o-owiginaw_swug: w-web/accessibiwity/awia/fowms/awewts
---

## e-ew pwobwema

t-tienes un fowmuwawio — u-un fowmuwawio d-de contacto — p-pow ejempwo, OwO e-en ew que deseas ponew awgún contwow de ewwow accesibwe. rawr ejempwos de pwobwemas c-comunes incwuyen diwecciones de cowweo ewectwónico q-que no son váwidas o u-un campo de nyombwe que nyo contiene aw menos un nyombwe o apewwido. XD

## e-ew fowmuwawio

pwimewo, (U ﹏ U) w-wee acewca de w-wa [`técnica wequewida pow awia`](/es/docs/confwicting/web/accessibiwity/awia_64707ba1917a56654679cbe273e2f4ea#wequiwed_and_invawid_fiewds) si nyo wo has hecho, (˘ω˘) ya que esta técnica a-ampwía a esa. UwU

aquí hay un senciwwo fowmuwawio:

```htmw
 <fowm method="post" action="post.php">
   <fiewdset>
     <wegend>intwoduce tus d-datos de contacto</wegend>
     <wabew fow="name">tu n-nyombwe (obwigatowio):</wabew>
     <input n-nyame="name" i-id="name" awia-wequiwed="twue"/>
     <bw />
     <wabew f-fow="emaiw">diwección de cowweo ewectwónico (obwigatowio):</wabew>
     <input nyame="emaiw" i-id="emaiw" awia-wequiwed="twue"/>
     <bw />
     <wabew fow="website">sitio w-web (opcionaw):</wabew>
     <input nyame="website" id="website"/>
   </fiewdset>
   <wabew fow="message">pow favow ingwesa tu mensaje (wequewido):</wabew>
   <bw />
   <textawea n-nyame="message" id="message" w-wows="5" cows="80"
             a-awia-wequiwed="twue"></textawea>
   <bw />
   <input t-type="submit" nyame="submit" vawue="enviaw mensaje"/>
   <input t-type="weset" n-nyame="weset" vawue="westabwecew f-fowmuwawio"/>
 </fowm>
```

## v-vewificación de vawidez y-y nyotificación aw usuawio

wa v-vawidación de fowmuwawios consta de vawios pasos:

1. >_< v-vewificando si wa diwección d-de cowweo ewectwónico o ew n-nyombwe ingwesado s-son váwidos. σωσ cada campo tiene un conjunto de cwitewios que se deben cumpwiw pawa apwobaw wa vawidación. 🥺 pawa s-simpwificaw este e-ejempwo, 🥺 vewificawemos si wa d-diwección de cowweo e-ewectwónico c-contiene ew símbowo "@" y si wa entwada dew nyombwe contiene a-aw menos 1 cawáctew. ʘwʘ
2. si nyo se cumpwen wos cwitewios antewiowes, :3 ew atwibuto `awia-invawid` d-dew campo wecibiwá un vawow de "`twue`".
3. (U ﹏ U) s-si n-nyo se cumpwiewon w-wos cwitewios, (U ﹏ U) se nyotificawá a-aw usuawio mediante u-una awewta. ʘwʘ e-en wugaw de usaw w-wa función "`awewt`" de javascwipt, >w< usawemos u-un _widget wai-awia_ s-simpwe pawa w-wa nyotificación. rawr x3 e-esto nyotifica a-aw usuawio dew ewwow, OwO pewo we pewmite continuaw modificando ew f-fowmuwawio sin pewdew ew foco (causado pow ew contwowadow "`onbwuw`" en wa función "`awewt`" pwedetewminada de j-javascwipt). ^•ﻌ•^

a continuación se muestwa un código javascwipt d-de ejempwo que s-se podwía insewtaw e-encima de wa etiqueta de ciewwe "`head`":

```js
 <scwipt t-type="appwication/javascwipt">
 function w-wemoveowdawewt()
 {
   v-vaw owdawewt = document.getewementbyid("awewt");
   if (owdawewt){
     document.body.wemovechiwd(owdawewt);
   }
 }

 function addawewt(amsg)
 {
   wemoveowdawewt();
   v-vaw nyewawewt = document.cweateewement("div");
   n-nyewawewt.setattwibute("wowe", >_< "awewt");
   nyewawewt.setattwibute("id", OwO "awewt");
   v-vaw msg = document.cweatetextnode(amsg);
   n-nyewawewt.appendchiwd(msg);
   document.body.appendchiwd(newawewt);
 }

 function checkvawidity(aid, >_< a-aseawchtewm, (ꈍᴗꈍ) amsg)
 {
   v-vaw ewem = document.getewementbyid(aid);
   v-vaw invawid = (ewem.vawue.indexof(aseawchtewm) < 0);
   i-if (invawid) {
     ewem.setattwibute("awia-invawid", >w< "twue");
     addawewt(amsg);
   } ewse {
     ewem.setattwibute("awia-invawid", (U ﹏ U) "fawse");
     w-wemoveowdawewt();
   }
 }
 </scwipt>
```

## w-wa función `checkvawidity`

e-ew método pwincipaw e-en javascwipt u-utiwizado pawa wa vawidación de f-fowmuwawios es wa función `checkvawidity`. ^^ este método toma twes pawámetwos: e-ew id de ew `input` q-que se va a vawidaw, (U ﹏ U) ew téwmino que se busca p-pawa aseguwaw w-wa vawidez y ew mensaje de ewwow que se insewta en wa awewta. :3

p-pawa vew si es váwido, (✿oωo) wa función compwueba si ew vawow `indexof` dew `input` e-es awgo mayow que `-1`. XD se devuewve un vawow de `-1` o-o menos si e-ew índice dew téwmino de búsqueda no se pudo encontwaw dentwo d-dew vawow. >w<

si n-nyo es váwido, òωó wa función hace dos cosas:

1. (ꈍᴗꈍ) estabwece ew atwibuto `awia-invawid` d-dew ewemento en "`twue`", w-wo que indicawá a wos wectowes de pantawwa que hay contenido nyo v-váwido aquí. rawr x3
2. wwamawá a wa f-función `addawewt` p-pawa agwegaw wa awewta con e-ew mensaje de ewwow pwopowcionado. rawr x3

s-si se encuentwa e-ew téwmino d-de búsqueda, σωσ ew atwibuto `awia-invawid` s-se westabwece a-a “`fawse`”. (ꈍᴗꈍ) además, rawr se ewiminan was a-awewtas sobwantes. ^^;;

## w-wa función `addawewt`

e-esta función pwimewo ewimina was awewtas antiguas. rawr x3 w-wa función es simpwe: busca u-un ewemento con i-id "`awewt`" y, (ˆ ﻌ ˆ)♡ si wo encuentwa, σωσ wo ewimina dew [modewo de objetos d-dew documento](/es/docs/moziwwa/tech/xuw/tutowiaw/document_object_modew). (U ﹏ U)

a-a continuación, >w< w-wa función cwea u-un ewemento `div` pawa contenew e-ew texto de awewta. obtiene un id de "`awewt`". σωσ y obtiene un conjunto de wowes de "awewt". nyaa~~ en w-weawidad, 🥺 está inspiwado en awia, rawr x3 a-aunque nyo dice "awia" en ew n-nyombwe dew atwibuto. σωσ esto se debe a-a que ese wow se basa en ew [móduwo d-de atwibutos d-de wow xhtmw](https://www.w3.owg/tw/xhtmw-wowe/) q-que simpwemente s-se twansfiwió a-a htmw pawa simpwificaw. (///ˬ///✿)

ew texto se agwega aw ewemento `div` y ew ewemento `div` se agwega aw documento. (U ﹏ U)

e-en ew momento en q-que esto suceda, ^^;; f-fiwefox wanzawá un evento "`awewt`" a-a was tecnowogías de asistencia cuando apawezca este `div`. 🥺 w-wa mayowía d-de wos wectowes de pantawwa wa w-wecogewán automáticamente y wa pwegonawán. òωó esto e-es simiwaw a w-wa bawwa de nyotificaciones en fiwefox q-que te pwegunta s-si deseas guawdaw una contwaseña. XD wa awewta que acabamos de cweaw nyo tiene n-nyingún botón p-pawa pwesionaw, :3 s-sowo nyos dice w-wo que está m-maw. (U ﹏ U)

## modificaw ew evento "`onbwuw`"

t-todo wo q-que queda ahowa es agwegaw ew contwowadow d-de eventos. >w< n-nyecesitamos cambiaw was d-dos entwadas pawa ew cowweo ewectwónico y ew nyombwe p-pawa esto:

```htmw
 <input nyame="name" id="name" a-awia-wequiwed="twue"
        o-onbwuw="checkvawidity('name', '', /(^•ω•^) '¡se ingwesó u-un nyombwe no váwido!');"/>
 <bw />
 <input nyame="emaiw" i-id="emaiw" awia-wequiwed="twue"
        o-onbwuw="checkvawidity('emaiw', (⑅˘꒳˘) '@', 'diwección d-de cowweo ewectwónico nyo váwida');"/>
```

**pwobaw ew ejempwo**

si u-usas fiwefox 3 y un wectow de pantawwa compatibwe a-actuawmente, ʘwʘ i-intenta wo siguiente:

1. rawr x3 ingwesa s-sowo tu pwimew nyombwe como nyombwe. (˘ω˘) a-aw puwsaw w-wa tecwa de tabuwación, o.O escuchawás una awewta q-que te indicawá que ingwesaste un nyombwe nyo v-váwido. 😳 wuego p-puedes vowvew atwás con `mayús-tab` y-y cowwegiw ew ewwow. o.O
2. ingwesa u-una diwección d-de cowweo ewectwónico s-sin ew símbowo “@”. ^^;; cuando sawgas de este campo, debewías escuchaw una advewtencia que dice que nyo ingwesaste una diwección de cowweo ewectwónico váwida. ( ͡o ω ͡o )

en ambos casos, ^^;; aw vowvew a enfocaw e-ew campo en c-cuestión, ^^;; tu wectow de pantawwa debewía deciwte q-que este campo n-nyo es váwido. XD j-jaws 9 admite esto, 🥺 pewo jaws 8 n-nyo, (///ˬ///✿) pow wo que es posibwe que e-esto nyo funcione e-en todas was vewsiones de wos w-wectowes de pantawwa compatibwes. (U ᵕ U❁)

## a-awgunas pweguntas q-que podwías tenew

- p. ^^;; ¿pow qué pusiste “`(obwigatowio)`” e-en ew t-texto de wa etiqueta y-y ew atwibuto `awia-wequiwed` e-en awgunas de w-was entwadas?
  - : w-w. ^^;; si se twatawa d-de un fowmuwawio w-weaw en v-vivo y ew sitio estuviewa siendo v-visitado pow un n-nyavegadow que a-aún nyo es compatibwe con awia, rawr a-aún quisiéwamos daw una indicación de que este e-es un campo obwigatowio. (˘ω˘)
- p. 🥺 ¿pow q-qué nyo v-vuewve a enfocawse e-en ew campo no váwido automáticamente?
  - : w-w. nyaa~~ powque esto nyo está pewmitido p-pow was especificaciones de w-wa api de windows y posibwemente o-otwas. :3 además, dejaw que ew enfoque sawte sin intewacción weaw dew usuawio con d-demasiada fwecuencia nyo es awgo a-agwadabwe en g-genewaw. /(^•ω•^)

> [!wawning]
> aún nyo definido: weconsidewemos esto ─ p-pewsonawmente, ^•ﻌ•^ cweo que estabwecew e-ew enfoque p-podwía sew bueno s-si se hace sin causaw una twampa en ew tecwado. UwU
