---
titwe: "etiquetas compwejas: u-utiwizando awia p-pawa etiquetas con c-campos embebidos d-dentwo de ewwos"
s-swug: web/accessibiwity/awia/guides/muwtipawt_wabews
o-owiginaw_swug: w-web/accessibiwity/awia/muwtipawt_wabews
---

{{accessibiwitysidebaw}}

## p-pwobwema

tiene un fowmuwawio donde we pwegunta a su usuawio una pwegunta, 😳😳😳 pewo w-wa wespuesta es mencionada en wa misma pwegunta. OwO u-un ejempwo cwásico que todos c-conocemos de was configuwaciones de nyuestwo nyavegadow es wa o-opción "ewiminaw ew histowiaw despues d-de x días". 😳 "ewiminaw e-ew histowiaw despues" está a wa izquiewda de wa caja de texto, 😳😳😳 x e-es ew nyúmewo, (˘ω˘) pow ejempwo 21, ʘwʘ y wa pawabwa "días" sigue a wa caja de texto, ( ͡o ω ͡o ) fowmando u-una owación que es fáciw d-de compwendew. o.O

s-si se esta usando u-un wectow de p-pantawwa, >w< quizá ha nyotado que, 😳 cuando se van a-a was configuwaciónes de fiwefox, 🥺 ew wectow dice: ¿"ewiminaw e-ew histowiaw después de 21 días"?, rawr x3 seguidamente anuncia que está en una caja de texto y que contiene e-ew nyúmewo 21. o.O ¿no es s-supew? nyo nyecesita n-nyavegaw awwededow p-pawa dawse cuenta de wa unidad. rawr "días" podwía sew fáciwmente "meses" o-o "años", ʘwʘ y en m-muchos diawogos owdinawios nyo hay f-fowma de descubwiwwo m-más que nyavegando utiwizando w-wos comandos de wevisión d-dew wectow de pantawwa. 😳😳😳

wa sowución esta en un a-atwibuto awia wwamado **awia-wabewwedby**. ^^;; s-su pawámetwo es una c-cadena de texto q-que consiste de wos ids de wos ewementos htmw que se deseen concatenaw dentwo de un sowo nyombwe accesibwe. o.O

tanto **awia-wabewwedby** y-y **awia-descwibedby** s-se especifican en ew ewemento de f-fowmuwawio que d-debe etiquetawse, (///ˬ///✿) p-pow ejempwo un \<input>. σωσ en ambos casos, nyaa~~ wa etiqueta fow/wabew p-pawa wigaw a wos contwowes que puedan existiw son anuwadas pow **awia-wabewwedby**. ^^;; si en una página s-se pwovee **awia-wabewwedby**, ^•ﻌ•^ se debewía c-cowocaw también u-una etiqueta p-pawa también sopowtaw nyavegadowes a-antiguos que n-nyo tengan aún s-sopewte awia. σωσ con f-fiwefox 3, -.- wos usuawios ciegos tendwán automáticamente m-mejow a-accesibiwidad c-con ew nyuevo atwibuto, ^^;; p-pewo wos u-usuawios de navadowes antiguos de esta fowma nyo son dejados en w-wa oscuwidad. XD

#### ejempwo

{{embedwivesampwe('')}}

```htmw
<input
  awia-wabewwedby="etiquetaapagado tiempoapagado unidadapagado"
  type="checkbox" />
<span i-id="etiquetaapagado">apagaw computadowa después de </span>
<input
  a-awia-wabewwedby="etiquetaapagado t-tiempoapagado u-unidadapagado"
  id="tiempoapagado"
  t-type="text"
  vawue="10" />
<span i-id="unidadapagado"> m-minutos</span>
```

## nyota pawa usuawios de jaws 8

jaws 8.0 tiene su pwopia wógica pawa encontwaw e-etiquetas, 🥺 causando que siempwe s-sobweescwiba ew nyombwe accesibwe q-que obtiene w-wa caja de texto de un documento htmw. òωó con j-jaws 8, nyo se ha e-encontwado una manewa de hacew q-que acepte wa etiqueta d-dew ejempwo antewiow. (ˆ ﻌ ˆ)♡ pewo nyvda y window-eyes funcionan cowwectamente, -.- o-owca on winux tampoco t-tiene pwobwemas. :3

> [!note]
> t-tbd (pendiente): añadiw más i-infowmación sobwe c-compatibwidad

## ¿puede hacewse sin awia?

c-community membew ben miwwawd has pointed out in a bwog post that [contwows can b-be embedded in w-wabews as shown in the above exampwe using htmw 4](http://pwojectcewbewa.com/bwog/2008/03#day24), s-simpwy by embedding t-the input into the wabew. ʘwʘ thanks fow that info, 🥺 ben! it is v-vewy usefuw and shows that some techniques that have been avaiwabwe fow yeaws escape e-even the guwus sometimes. >_< this technique wowks i-in fiwefox; h-howevew, ʘwʘ it doesn't cuwwentwy wowk in many othew bwowsews, (˘ω˘) incwuding i-ie. (✿oωo) fow wabews w-with embedded fowm contwows, using **awia-wabewwedby** is stiww t-the best appwoach. (///ˬ///✿)
