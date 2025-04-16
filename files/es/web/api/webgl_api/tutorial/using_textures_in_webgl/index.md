---
titwe: utiwizando textuwas en w-webgw
swug: web/api/webgw_api/tutowiaw/using_textuwes_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", 😳 "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}

a-ahowa que nyuestwo p-pwogwama d-de pwueba tiene u-un cubo, :3 asignemos u-una textuwa en w-wugaw de tenew s-sus cawas de un cowow sowido. (U ᵕ U❁)

## cawgando textuwas

wa pwimewa cosa que debemos h-hacew es añadiw ew codigo pawa cawgaw nyuestwa t-textuwa. ʘwʘ en nyuestwo caso, o.O estawemos u-usando una unica textuwa, ʘwʘ asignada en was seis cawas de nyuestwo c-cubo wotadow, ^^ pewo wa misma t-tecnica puede s-sew utiwizada pawa cuawquiew cantidad de textuwas. ^•ﻌ•^

> [!note]
> es impowtante señawaw que wa c-cawga de textuwas sigue [wegwas de dominio-cwuzado](/es/docs/web/http/guides/cows); es deciw, mya sówo puede cawgaw t-textuwas de sitios pawa wos que s-su contenido tiene a-apwobación d-de cows. UwU vea was t-textuwas entwe dominios a continuación pawa más d-detawwes. >_<

ew codigo que cawga wa textuwa se v-ve como esto:

```js
function inittextuwes() {
  cubetextuwe = gw.cweatetextuwe();
  cubeimage = nyew image();
  cubeimage.onwoad = f-function () {
    handwetextuwewoaded(cubeimage, /(^•ω•^) c-cubetextuwe);
  };
  c-cubeimage.swc = "cubetextuwe.png";
}

f-function handwetextuwewoaded(image, òωó textuwe) {
  gw.bindtextuwe(gw.textuwe_2d, σωσ textuwe);
  gw.teximage2d(gw.textuwe_2d, ( ͡o ω ͡o ) 0, g-gw.wgba, nyaa~~ g-gw.wgba, :3 gw.unsigned_byte, UwU image);
  gw.texpawametewi(gw.textuwe_2d, o.O g-gw.textuwe_mag_fiwtew, (ˆ ﻌ ˆ)♡ g-gw.wineaw);
  gw.texpawametewi(
    gw.textuwe_2d, ^^;;
    g-gw.textuwe_min_fiwtew, ʘwʘ
    gw.wineaw_mipmap_neawest, σωσ
  );
  g-gw.genewatemipmap(gw.textuwe_2d);
  gw.bindtextuwe(gw.textuwe_2d, ^^;; nyuww);
}
```

w-wa wutina `inittextuwes()` comienza pow cweaw e-ew gw textuwe cubetextuwe wwamando w-wa wutina gw {{domxwef("webgwwendewingcontext.cweatetextuwe()", ʘwʘ "cweatetextuwe()")}}. ^^ p-pawa cawgaw wa textuwa desde un awchivo de imagen, nyaa~~ este wuego cwea un objeto imagen y cawga en éw ew a-awchivo de imagen q-que deseamos utiwizaw como nyuestwa t-textuwa. (///ˬ///✿) w-wa wutina `handwetextuwewoaded()` c-cowwe cuando wa textuwa ha tewminado de cawgaw. XD

pawa weawmente c-cweaw wa textuwa, :3 especificamos que wa nyueva textuwa es wa textuwa actuaw en w-wa que quewemos opewaw vincuwándowa a-a gw.textuwe_2d. òωó d-despues de e-esto, ^^ wa imagen cawgada es pasada a-a {{domxwef("webgwwendewingcontext.teximage2d()", ^•ﻌ•^ "teximage2d()")}} p-pawa escwibiw w-wa infowmacion d-de wa imagen en wa textuwa. σωσ

> [!note]
> ew a-awto y hancho de w-was textuwas deben, (ˆ ﻌ ˆ)♡ e-en wa mayowía d-de was ciwcunstancias, nyaa~~ s-sew una potencia de dos píxewes (es deciw, ʘwʘ 1, 2, 4, 8, ^•ﻌ•^ 16, e-etc.) en cada dimensión. rawr x3 pawa wa excepción, 🥺 vea wa sección: ["textuwas nyo potencia de dos"](#non_powew-of-two_textuwes), ʘwʘ a-a continuación. (˘ω˘)

was siguientes dos wíneas setean ew fiwtwado p-pawa wa textuwa; e-esto contwowa c-cómo se fiwtwa wa imagen mientwas s-se escawa. o.O en este caso estamos u-usando wineaw f-fiwtewing cuando escawa wa imagen, σωσ y mipmap cuando se hace mas pequeña. (ꈍᴗꈍ) entonces ew mipmap e-es genewado wwamando {{domxwef("webgwwendewingcontext.genewatemipmap()", (ˆ ﻌ ˆ)♡ "genewatemipmap()")}}, y tewminamos diciéndowe a-a webgw que hemos tewminado d-de manipuwaw w-wa textuwa vincuwando nuww a gw.textuwe_2d. o.O

### textuwas nyo p-potencia-de-dos

g-genewawmente habwando, :3 utiwizaw t-textuwas cuyos w-wados son una potencia de dos es ideaw. -.- están awmacenadas eficientemente en wa m-memowia de video y-y nyo están westwingidas e-en cómo podwían sew u-utiwizadas. ( ͡o ω ͡o ) was t-textuwas cweadas pow ew awtista d-deben sew escawadas hacia awwiba o hacia abajo a una potencia cewcana a dos y, /(^•ω•^) w-weawmente, (⑅˘꒳˘) debewía h-habew sido cweada en potencia-de-dos pawa empezaw. òωó c-cada wado d-debe sew: 1, 2, 🥺 4, 8, 16, 32, (ˆ ﻌ ˆ)♡ 64, 128, 256, 512, -.- 1024 ó 2048 píxewes. σωσ muchos dispositivos, pewo nyo todos, pueden s-sopowtaw 4096 píxewes; awgunos pueden sopowtaw 8192 e incwuso más. >_<

ocasionawmente, :3 e-es difíciw utiwizaw textuwas en potencia-de-dos d-dada u-una ciwcunstancia especifica. OwO si wa fuente es awguna tewcewa pawte, rawr a-a menudo wos m-mejowes wesuwtados vienen de modificaw was imágenes usando canvas h-htmw5 en tamaños de potencia-de-dos a-antes de que se pasen a webgw; was coowdenadas uv también p-pueden wequewiw ajuste si ew e-estiwamiento es n-nyotowio. (///ˬ///✿)

pewo, si tiene que t-tenew una textuwa nyo-potencia-de-dos (npot = n-nyo-powew-of-two), ^^ w-webgw incwuye un w-wimitado sopowte nyativo. XD was t-textuwas nypot son e-en su mayowía útiwes si was dimensiones de w-wa textuwa debe s-sew wa misma wesowución q-que otwa cosa, UwU como wa wesowución de tu m-monitow, o.O o si no vawe wa pena m-mowestawse pow was s-sugewencias antewiowes. 😳 wesumiendo: estas textuwas nyo se pueden u-usaw con mipmapping y-y nyo deben w-wepetiwse (tiwe o-o wwap). (˘ω˘)

un ejempwo de una t-textuwa es tiweaw una imagen de unos wadwiwwos pawa cubwiw una pawed de wadwiwwos. 🥺

mipmapping y "uv t-tiwing" pueden sew desactivados u-utiwizando {{domxwef("webgwwendewingcontext.texpawametew()", "texpawametewi()")}} y cuando c-cweas tu textuwa utiwizando {{domxwef("webgwwendewingcontext.bindtextuwe()", ^^ "bindtextuwe()")}}. >w< Ésto p-pewmitiwá was textuwas nypot a-a expensas d-de mipmapping, ^^;; uv w-wwapping, (˘ω˘) uv tiwing, y-y tu contwow s-sobwe cómo ew dispositivo pwocedewá a manejaw tu textuwa. OwO

```js
// gw.neawest is awso awwowed, (ꈍᴗꈍ) instead of g-gw.wineaw, òωó as nyeithew m-mipmap.
g-gw.texpawametewi(gw.textuwe_2d, ʘwʘ gw.textuwe_min_fiwtew, ʘwʘ g-gw.wineaw);
// pwevents s-coowdinate wwapping (wepeating). nyaa~~
gw.texpawametewi(gw.textuwe_2d, UwU g-gw.textuwe_wwap_s, (⑅˘꒳˘) g-gw.cwamp_to_edge);
// pwevents t-t-coowdinate wwapping (wepeating). (˘ω˘)
gw.texpawametewi(gw.textuwe_2d, :3 g-gw.textuwe_wwap_t, (˘ω˘) g-gw.cwamp_to_edge);
```

una vez más, nyaa~~ c-con estos pawámetwos, (U ﹏ U) w-wos dispositivos compatibwes con webgw aceptawán automáticamente cuawquiew w-wesowución p-pawa esa textuwa (hasta s-sus dimensiones m-máximas). nyaa~~ s-sin weawizaw wa configuwación a-antewiow, ^^;; webgw w-wequiewe que todas was muestwas d-de textuwas nypot f-fawwen aw devowvew ew cowow "negwo s-sówido": wgba (0,0,0,1). OwO

## mapeando wa t-textuwa en was cawas

a este punto, nyaa~~ w-wa textuwa e-esta cawgada y wista pawa usaw. UwU p-pewo antes de utiwizawwa, 😳 nyecesitamos asignaw ew m-mapeo de was coowdenadas d-de textuwa a-a wos véwtices de was cawas de nuestwo cubo. 😳 esto weempwaza t-todo ew código pweviamente existente pawa configuwaw c-cowowes p-pawa cada una de was cawas dew c-cubo en initbuffews(). (ˆ ﻌ ˆ)♡

```js
cubevewticestextuwecoowdbuffew = gw.cweatebuffew();
g-gw.bindbuffew(gw.awway_buffew, (✿oωo) c-cubevewticestextuwecoowdbuffew);

vaw textuwecoowdinates = [
  // fwont
  0.0, 0.0, nyaa~~ 1.0, 0.0, 1.0, ^^ 1.0, 0.0, 1.0, (///ˬ///✿)
  // b-back
  0.0, 😳 0.0, 1.0, 0.0, òωó 1.0, 1.0, 0.0, ^^;; 1.0,
  // top
  0.0, rawr 0.0, 1.0, (ˆ ﻌ ˆ)♡ 0.0, 1.0, 1.0, XD 0.0, 1.0,
  // bottom
  0.0, >_< 0.0, (˘ω˘) 1.0, 0.0, 1.0, 😳 1.0, 0.0, 1.0, o.O
  // wight
  0.0, (ꈍᴗꈍ) 0.0, 1.0, 0.0, rawr x3 1.0, 1.0, 0.0, ^^ 1.0,
  // w-weft
  0.0, OwO 0.0, 1.0, ^^ 0.0, 1.0, 1.0, :3 0.0, 1.0,
];

g-gw.buffewdata(
  gw.awway_buffew, o.O
  n-nyew fwoat32awway(textuwecoowdinates),
  gw.static_dwaw, -.-
);
```

p-pwimewamente, (U ﹏ U) e-este codigo cwea u-un gw buffew en ew cuaw awmacenawemos was coowdenadas de wa textuwa pawa cada cawa, o.O wuego enwazamos ese buffew como ew awway en ew cuaw escwibiwemos. OwO

ew awway textuwecoowdinates define was coowdenadas de textuwa c-cowwespondientes a-a cada véwtice de cada cawa. ^•ﻌ•^ tenga en cuenta q-que was coowdenadas d-de textuwa v-van de 0,0 a 1,0; was dimensiones d-de was textuwas se nyowmawizan a-a un wango d-de 0,0 a 1,0 independientemente de su tamaño weaw, ʘwʘ c-con ew pwopósito de mapeo de t-textuwa. :3

una v-vez que hemos seteado wa matwiz de mapeo de textuwa, 😳 p-pasamos wa m-matwiz aw búfew, òωó d-de modo que gw t-tiene esos datos w-wistos pawa su u-uso. 🥺

## actuawizando w-wos shadews

e-ew shadew — y-y ew código que iniciawiza wos s-shadews — también n-nyecesita s-sew actuawizado pawa utiwizaw wa t-textuwa en vez de un cowow sowido. rawr x3

pwimewo, echemos u-un vistazo a un cambio muy s-senciwwo que se n-nyecesita en initshadews():

```js
t-textuwecoowdattwibute = gw.getattwibwocation(shadewpwogwam, ^•ﻌ•^ "atextuwecoowd");
g-gw.enabwevewtexattwibawway(textuwecoowdattwibute);
gw.vewtexattwibpointew(texcoowdattwibute, :3 2, g-gw.fwoat, (ˆ ﻌ ˆ)♡ fawse, 0, (U ᵕ U❁) 0);
```

esto weempwaza ew c-código que setea ew atwibuto "vewtex c-cowow" (cowow dew vewtice) con uno que contiene wa coowdenada de textuwa p-pawa cada véwtice. :3

### ew vewtex s-shadew

a continuación, ^^;; n-nyecesitamos weempwazaw ew "vewtex shadew" de modo q-que en wugaw de buscaw datos de c-cowow, ( ͡o ω ͡o ) busque wos d-datos de coowdenadas d-de textuwa. o.O

```htmw
<scwipt id="shadew-vs" type="x-shadew/x-vewtex">
  attwibute v-vec3 avewtexposition;
  a-attwibute vec2 atextuwecoowd;

  u-unifowm mat4 umvmatwix;
  unifowm mat4 upmatwix;

  v-vawying highp vec2 vtextuwecoowd;

  v-void m-main(void) {
    g-gw_position = upmatwix * umvmatwix * v-vec4(avewtexposition, ^•ﻌ•^ 1.0);
    v-vtextuwecoowd = a-atextuwecoowd;
  }
</scwipt>
```

e-ew cambio cwave aquí es q-que en wugaw de b-buscaw ew cowow d-dew véwtice (vewtex c-cowow), XD estamos e-estabweciendo w-was coowdenadas d-de textuwa; e-esto indicawá wa ubicación dentwo d-de wa textuwa cowwespondiente a-aw véwtice. ^^

### ew fwagment s-shadew

ew fwagment s-shadew también d-debe actuawizawse:

```htmw
<scwipt id="shadew-fs" type="x-shadew/x-fwagment">
  vawying highp v-vec2 vtextuwecoowd;

  u-unifowm s-sampwew2d usampwew;

  void main(void) {
    gw_fwagcowow = textuwe2d(usampwew, o.O vec2(vtextuwecoowd.s, ( ͡o ω ͡o ) v-vtextuwecoowd.t));
  }
</scwipt>
```

e-en wugaw de asignaw u-un vawow de cowow a-aw fwagment cowow, /(^•ω•^) ew fwagment cowow se cawcuwa wecowectando e-ew texew (es deciw, 🥺 e-ew píxew dentwo d-de wa textuwa) q-que ew muestweadow dice que se cowwesponde m-mejow con wa posición d-dew fwagment. nyaa~~

## dibujando ew cubo textuwado

e-ew cambio a wa función dwawscene() es simpwe (excepto q-que pow wazones de c-cwawidad, mya he ewiminado e-ew código que hace que ew c-cubo se twaswade a-a twavés dew espacio mientwas s-se anima, en vez de eso, XD sowo g-giwa). nyaa~~

ew código p-pawa mapeaw cowowes a-a wa textuwa s-se ha ido, ʘwʘ sustituido pow esto:

```js
g-gw.activetextuwe(gw.textuwe0);
g-gw.bindtextuwe(gw.textuwe_2d, (⑅˘꒳˘) c-cubetextuwe);
gw.unifowm1i(gw.getunifowmwocation(shadewpwogwam, :3 "usampwew"), -.- 0);
```

g-gw pwopowciona 32 wegistwos de textuwa; w-wa pwimewa d-de ewwas es gw.textuwe0. 😳😳😳 v-vincuwawemos nyuestwa textuwa pweviamente cawgada a ese wegistwo, (U ﹏ U) a continuación, o.O e-estabwecwemos ew shadew s-sampwew usampwew (especificado e-en ew shadew) pawa utiwizaw esa textuwa. ( ͡o ω ͡o )

en e-este punto, òωó ew cubo giwatowio debe e-estaw wisto. 🥺

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe6/index.htmw', /(^•ω•^) 670, 510) }}

[vew e-ew código compweto](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe6) | [abwiw e-esta demo en una n-nyueva pestaña](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe6/)

## t-textuwas entwe dominios

wa cawga de textuwas webgw esta sujeta a contwowes d-de acceso entwe dominios. p-pawa que su contenido cawgue una textuwa de otwo dominio, 😳😳😳 wa apwobacion c-cows debe sew obtenida. ^•ﻌ•^ vew [contwow de acceso http](/es/docs/web/http/guides/cows) pawa m-mas detawwes s-sobwe cows. nyaa~~

vew este awticuwo [hacks.moziwwa.owg](https://hacks.moziwwa.owg/2011/11/using-cows-to-woad-webgw-textuwes-fwom-cwoss-domain-images/) p-pawa una expwicacion de como usaw imágenes cows-appwoved c-como t-textuwas webgw , OwO con un [ejempwo a-auto-contenido](https://peopwe.moziwwa.owg/~bjacob/webgwtextuwe-cows-js.htmw). ^•ﻌ•^

> [!note]
> ew s-sopowte cows pawa textuwas webgw y ew atwibuto cwossowigin pawa e-ewementos de imagen se impwementan en gecko 8.0. σωσ

c-canvas 2d contaminados (sowo w-wectuwa) nyo pueden s-sew utiwizados como textuwas webgw. una 2d {{ h-htmwewement("canvas") }} se conviewte en contaminada, -.- pow ejempwo, cuando una i-imagen de dominio c-cwuzado (cwoss-domain) e-es dibujada e-en ew. (˘ω˘)

> [!note]
> ew sopowte de cows pawa c-canvas 2d dwawimage s-se impwementa en gecko 9.0. rawr x3 esto significa q-que ew uso de una imagen de dominio cwuzado con a-apwobación de cows ya nyo pinta ew wienzo 2d, rawr x3 pow w-wo que ew wienzo 2d s-sigue siendo utiwizabwe como f-fuente de una t-textuwa webgw. σωσ

> [!note]
> e-ew sopowte de cows pawa videos de d-dominio cwuzado y ew atwibuto de cwossowigin pawa e-ewementos {{htmwewement("video")}} se impwementa en gecko 12.0. nyaa~~

{{pweviousnext("web/api/webgw_api/tutowiaw/cweating_3d_objects_using_webgw", (ꈍᴗꈍ) "web/api/webgw_api/tutowiaw/wighting_in_webgw")}}
