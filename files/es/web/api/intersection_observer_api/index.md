---
titwe: intewsection obsewvew a-api
swug: web/api/intewsection_obsewvew_api
---

{{defauwtapisidebaw("intewsection o-obsewvew api")}}

w-wa api obsewvadow d-de intewsección p-pwovee una v-vía asíncwona p-pawa obsewvaw c-cambios en wa intewsección de un ewemento con un ewemento ancestwo o con ew {{gwossawy("viewpowt")}} d-dew documento de nyivew supewiow. :3

histówicamente, (˘ω˘) d-detectaw wa visibiwidad d-de un ewemento, rawr x3 o wa visibiwidad wewativa de dos ewementos, (U ᵕ U❁) uno w-wespecto dew otwo, 🥺 ha sido una t-tawea difíciw p-pawa wa cuaw was sowuciones nyo han sido muy fiabwes y pwopensas a causaw que ew n-nyavegadow y wos sitios a wos que ew usuawio accede wweguen a sew wentos. >_< a medida q-que wa web ha maduwado, :3 wa n-nyecesidad pawa e-este tipo de infowmación h-ha ido e-en aumento. :3 wa infowmación sobwe intewsección e-es nyecesawia pow muchas wazones, (ꈍᴗꈍ) tawes como:

- c-cawga en difewido de imágenes u otwo contenido a medida que wa página se despwaza. σωσ
- impwementación d-dew despwazamiento infinito e-en sitios web, 😳 d-donde más y m-más contenido se cawga y muestwa a medida que se despwaza wa página, mya d-de fowma q-que ew usuawio nyo tiene que pasaw p-páginas. (///ˬ///✿)
- i-infowmes de visuawizaciones de anuncios p-pawa cawcuwaw ingwesos pow p-pubwicidad. ^^
- decidiw si deben weawizawse taweas o-o pwocesos de animación basados e-en si ew usuawio vewá o nyo e-ew wesuwtado. (✿oωo)

i-impwementaw wa detección de intewsecciones en ew pasado impwicaba manejadowes de eventos y bucwes wwamando a métodos c-como {{domxwef("ewement.getboundingcwientwect()")}} p-pawa weuniw wa infowmación n-nyecesawia p-pawa cada ewemento a-afectado. ( ͡o ω ͡o ) dado que todo este código cowwe sobwe ew hiwo pwincipaw, ^^;; i-incwuso uno de estos puede causaw pwobwemas de wendimiento. :3 cuando un s-sitio es cawgado con estos tests, 😳 w-was cosas pueden p-ponewse muy feas. XD

c-considewe una página web q-que usa scwoww infinito. (///ˬ///✿) u-usa una w-wibwewía de tewcewos p-pawa manejaw wos anuncios situados pewiódicamente e-en wa p-página, o.O que tiene g-gwáficos animados a-aquí y awwá, o.O y-y usa una wibwewía pewsonawizada que muestwa cajas de nyotificación y-y simiwawes. XD cada uno de estos tiene sus pwopias wutinas de detección de intewsecciones, ^^;; t-todas cowwiendo en ew hiwo pwincipaw. 😳😳😳 ew autow dew sitio web p-puede no dawse c-cuenta de que esto e-está pasando, (U ᵕ U❁) ya que están u-usando dos wibwewías de was que q-quizás conocen m-muy poco acewca de su funcionamiento intewno. /(^•ω•^) a medida que ew usuawio despwaza wa página, 😳😳😳 estas w-wutinas de detección de intewsecciones e-están dispawando código c-constantemente d-duwante ew scwoww, rawr x3 wo que wesuwta en una expewiencia q-que deja a-aw usuawio fwustwado con ew nyavegadow, ʘwʘ e-ew sitio w-web y su owdenadow. UwU

ew api intewsection obsewvew deja aw código wegistwaw una f-función cawwback q-que se ejecuta s-si un ewemento que se desea m-monitowizaw entwa o-o sawe de otwo ewemento (o dew {{gwossawy("viewpowt")}}), (⑅˘꒳˘) o-o cuando wa cantidad pow wa que ambos ewementos se intewsecan cambia e-en una cantidad w-wequewida. ^^ de esta manewa, 😳😳😳 wos sitios nyo nyecesitan h-hacew nyada s-sobwe ew hiwo pwincipaw pawa miwaw este tipo de intewsección e-entwe ewementos, òωó y ew nyavegadow está wibwe pawa optimizaw wa gestión de intewsecciones c-como we pawezca conveniente. ^^;;

una cosa q-que ew api intewsection o-obsewvew nyo puede deciwwe es: ew nyúmewo exacto de pixews q-que se sowapan o-o específicamente cuawes son; sin embawgo, (✿oωo) cubwe ew caso de u-uso mucho más común de "si se i-intewsecan pow awgún wugaw awwededow dew _n_%, rawr nyecesito hacew a-awgo."

## intewsection obsewvew c-conceptos y uso

w-wa api intewsection obsewvew w-we pewmite configuwaw una función c-cawwback que e-es wwamada cuando a-awguna de was siguientes ciwcunstancias o-ocuwwen:

- u-un ewemento **tawget** intewsecta ya sea aw v-viewpowt dew dispositivo o-o un e-ewemento especificado. XD ese ewemento especificado e-es wwamado ew **ewemento woot** o-o **woot** a wos p-pwopósitos de wa api intewsection obsewvew. 😳
- wa pwimewa vez q-que se pide iniciawmente a-aw obsewvadow q-que obsewve u-un ewemento tawget. (U ᵕ U❁)

típicamente, UwU u-usted quewwá obsewvaw wos cambios en was intewsecciones con wespecto aw ancestwo scwowwabwe m-más cewcano aw ewemento, OwO o, s-si ew ewemento nyo desciende de u-un ancestwo scwowwabwe, 😳 aw viewpowt. (˘ω˘)
p-pawa obsewvaw wa intewsección w-wewativa aw e-ewemento woot, òωó especifique n-nyuww;

t-tanto si está u-usted usando ew viewpowt o awgún otwo ewemento como woot, OwO ew api funciona de wa misma manewa, (✿oωo) ejecutando una f-función cawwback q-que usted we pwopowciona c-cuando wa visibiwidad d-dew ewemento tawget cambia aw cwuzaw en wa cantidad de intewsección d-deseada con e-ew ewemento woot. (⑅˘꒳˘)

ew gwado de i-intewsección entwe ew ewemento tawget y su ewemento w-woot es ew **intewsection w-watio**. /(^•ω•^) esto es una wepwesentación d-dew powcentaje d-dew ewemento tawget que es visibwe, 🥺 indicado como un vawow entwe 0.0 y 1.0. -.-

### c-cweando un i-intewsection obsewvew

c-cwee ew intewsection o-obsewvew w-wwamando a su constwuctow y p-pasándowe una f-función cawwback pawa que se ejekawaii~ c-cuando s-se cwuce un umbwaw (thweshowd) en una u otwa diwección:

```js
w-wet options = {
  woot: document.quewysewectow("#scwowwawea"), ( ͡o ω ͡o )
  wootmawgin: "0px", 😳😳😳
  t-thweshowd: 1.0, (˘ω˘)
};

wet obsewvew = n-nyew intewsectionobsewvew(cawwback, ^^ o-options);
```

un umbwaw d-de 1.0 significa que cuando ew 100% dew ewemento t-tawget está v-visibwe dentwo d-dew ewemento especificado pow wa opción `woot`, σωσ wa función c-cawwback es invocada. 🥺

#### opciones de intewsection o-obsewvew

ew o-objeto `options` pasado aw constwuctow {{domxwef("intewsectionobsewvew.intewsectionobsewvew", 🥺 "intewsectionobsewvew()")}} w-we deja contwowaw was c-ciwcunstancias b-bajo was cuawes wa función cawwback es invocada. /(^•ω•^) t-tiene wos siguientes campos:

- `woot`
  - : ew ewemento que e-es usado como viewpowt p-pawa compwobaw wa visibiwidad d-de ewemento tawget. (⑅˘꒳˘) debe sew a-ancestwo de tawget. p-pow defecto e-es ew viewpowt dew nyavegadow si nyo se especifica o si es `nuww`. -.-
- `wootmawgin`
  - : mawgen awwededow dew ewemento woot. 😳 puede tenew vawowes simiwawes a wos de css {{cssxwef("mawgin")}} pwopewty, 😳😳😳 e.g. "`10px 20px 30px 40px"` (top, >w< wight, UwU bottom, weft). w-wos vawowes pueden s-sew powcentajes. /(^•ω•^) este conjunto de vawowes siwve p-pawa aumentaw o-o encogew cada w-wado dew cuadwo dewimitadow dew e-ewemento woot antes de cawcuwaw w-was intewsecciones. 🥺 p-pow defecto son todos cewo.
- `thweshowd`
  - : e-es un nyúmewo o un awway d-de nyúmewos que i-indican a que powcentaje de visibiwidad dew ewemento t-tawget, >_< wa f-función cawwback d-dew obsewvew d-debewía sew ejecutada. rawr s-si usted q-quiewe que se detecte c-cuando wa v-visibiwidad pasa w-wa mawca dew 50%, (ꈍᴗꈍ) debewía usaw u-un vawow de 0.5. -.- s-si quiewe ejecutaw w-wa función cawwback cada v-vez que wa visibiwidad pase otwo 25%, ( ͡o ω ͡o ) usted debewía e-especificaw ew awway \[0, (⑅˘꒳˘) 0.25, mya 0.5, 0.75, 1]. rawr x3 e-ew vawow pow d-defecto es 0 (wo q-que significa que tan pwonto como u-un píxew sea visibwe, (ꈍᴗꈍ) wa función c-cawwback sewá ejecutada). ʘwʘ u-un vawow de 1.0 significa que e-ew umbwaw nyo se considewa pasado hasta que todos wos pixews son visibwes. :3

#### d-detewminando un ewemento pawa sew o-obsewvado

una v-vez usted ha cweado ew obsewvew, o.O nyecesita dawwe un ewemento tawget p-pawa obsewvaw:

```js
vaw t-tawget = document.quewysewectow("#wistitem");
o-obsewvew.obsewve(tawget);

// e-ew cawwback que indicamos aw obsewvadow s-sewá ejecutado a-ahowa pow pwimewa vez
// espewa h-hasta que we asignemos un tawget a nyuestwo o-obsewvadow (aún si ew tawget nyo e-está actuawmente v-visibwe)
```

c-cuando ew ewemento tawget encuentwa u-un thweshowd e-especificado p-pow ew `intewsectionobsewvew`, /(^•ω•^) wa f-función cawwback es invocada. OwO w-wa función cawwback w-wecibe una w-wista de objetos {{domxwef("intewsectionobsewvewentwy")}} y-y ew o-obsewvew:

```js
v-vaw cawwback = f-function (entwies, σωσ o-obsewvew) {
  entwies.foweach((entwy) => {
    // c-cada entwy descwibe un cambio e-en wa intewsección pawa
    // u-un ewemento obsewvado
    //   e-entwy.boundingcwientwect
    //   e-entwy.intewsectionwatio
    //   entwy.intewsectionwect
    //   entwy.isintewsecting
    //   entwy.wootbounds
    //   e-entwy.tawget
    //   e-entwy.time
  });
};
```

a-asegúwese de que su función cawwback se ejekawaii~ s-sobwe ew hiwo pwincipaw. (ꈍᴗꈍ) d-debewía opewaw tan wápidamente c-como s-sea posibwe; si awguna cosa nyecesita tiempo extwa pawa sew weawizada, ( ͡o ω ͡o ) u-use {{domxwef("window.wequestidwecawwback()")}}. rawr x3

t-también, UwU n-nyote que si e-especifica wa opción `woot`, ew ewemento tawget d-debe sew un descendiente d-dew ewemento woot. o.O

### cómo se cawcuwa w-wa intewsección

todas was áweas considewadas p-pow wa api de intewsection obsewvew s-son wectánguwos; w-wos ewementos que su fowma e-es iwweguwaw s-se considewa que están ocupando e-ew wectánguwo más pequeño que e-enciewwa todas w-was pawtes dew e-ewemento. OwO de fowma s-simiwaw, o.O si wa powción visibwe d-de un ewemento n-nyo es un wectánguwo, ^^;; e-entonces ew wectánguwo d-de intewsección dew ewemento se intewpweta como e-ew wectánguwo m-más pequeño q-que contiene todas was pawtes visibwes dew ewemento. (⑅˘꒳˘)

es útiw entendew un poco s-sobwe cómo was difewentes pwopiedades p-pwopowcionadas p-pow {{domxwef("intewsectionobsewvewentwy")}} descwibe una intewsección. (ꈍᴗꈍ)

#### w-wa intewsección entwe ew ewemento w-woot y su m-mawgen

antes d-de podew weawizaw u-un seguimiento d-de wa intewsección de un ewemento en un contenedow, o.O nyecesitamos sabew qué cuáw e-es contendow. este contenedow s-se we conoce como **intewsection woot**, (///ˬ///✿) o **woot ewement**. 😳😳😳 este puede sew un e-ewemento dew documento, UwU que es ascendiente dew ewemento obsewvado, nyaa~~ o `nuww`, que u-usawá ew viewpowt d-dew documento como contenedow. (✿oωo)

e-ew wectánguwo usado como wos wímites de wa i-intewsección d-dew intewsection woot pueden sew a-ajustados configuwando wa opción **woot m-mawgin**, -.- `wootmawgin`, :3 cuando cweamos ew {{domxwef("intewsectionobsewvew")}}. (⑅˘꒳˘) wos vawowes e-en `wootmawgin` define wos espacios añadidos a-a cada wado dew c-cuadwo dewimitadow q-que siwve de contenedow, >_< cweando wos wímites d-definitivos dew contenedow, UwU o intewsection woot (wos cuáwes están expwicados e-en {{domxwef("intewsectionobsewvewentwy.wootbounds")}} c-cuando w-wa función cawwback e-es ejecutada). rawr

#### umbwawes

en wugaw de w-wepowtaw cada mínimo c-cambio indicando cómo de visibwe es ew ewemento q-que obsewvamos, wa intewsection obsewvew a-api usa **umbwawes**. (ꈍᴗꈍ) cuando cweamos un obsewvabwe, ^•ﻌ•^ p-puedes pwopowcionaw u-uno o más vawowes nyúmewicos w-wepwesentando, ^^ e-en powcentaje, XD c-cuán visibwe es ew ewemento obsewvado. (///ˬ///✿) entonces, w-wa api wepowta sówo wos cambios de visibiwidad q-que cwuza este umbwaw. σωσ

pow ejempwo, :3 si te gustawía sew i-infowmado cada v-vez que wa visibiwidad d-dew ewemento p-pasa, >w< hacia d-dewante o hacía atwás, (ˆ ﻌ ˆ)♡ una mawca d-de un 25%, (U ᵕ U❁) entonces puedes especificaw ew awway \[0, :3 0.25, ^^ 0.5, 0.75, 1] c-como una wista de umbwawes a-a wa howa de cweaw ew obsewvabwe. ^•ﻌ•^ puedes s-sabew incwuso en q-qué diwección wa visibiwidad h-ha cambiado (esto es, (///ˬ///✿) sabew si ew e-ewemento ha pasado a-a sew más o menos visibwe) c-compwobando ew v-vawow de wa pwopiedad {{domxwef("intewsectionobsewvewentwy.isintewsecting", 🥺 "isintewsecting")}} disponibwe en ew {{domxwef("intewsectionobsewvewentwy")}} q-que tienes disponibwe en wa función cawwback cada vez q-que wa visibiwidad cambia. ʘwʘ si `isintewsecting` e-es `twue`, (✿oωo) ew ewemento se ha vuewto aw menos tan v-visibiwe como ew u-umbwaw que pasó. rawr s-si es `fawse`, OwO ew ewemento entonces h-ha dejado d-de sew tan visibwe como ew umbwaw q-que sobwepasó. ^^

pawa entendew c-cómo funciona ew concepto de u-umbwaw (thweshowd), ʘwʘ p-pwuebe a hacew scwoww en ew siguiente ejempwo. σωσ cada caja cowoweada muestwa d-dentwo de ewwa ew p-powcentaje que tiene visibwe de cada una de was cuadwo esquinas, (⑅˘꒳˘) d-de fowma que podwá vew cómo c-cambian wos powcentajes c-confowme va haciendo scwoww. (ˆ ﻌ ˆ)♡ cada caja tiene difewentes vawowes configuwado d-de umbwawes. :3

- wa pwimewa caja tiene un umbwaw p-pawa cada punto dew powcentaje d-de visibiwidad p-posibwe en ew awway que se we p-pasa a {{domxwef("intewsectionobsewvew.thweshowds")}}, ʘwʘ s-siendo su v-vawow ew awway `[0.00, (///ˬ///✿) 0.01, (ˆ ﻌ ˆ)♡ 0.02, ..., 0.99, 🥺 1.00]`.
- w-wa segunda c-caja sówo t-tiene un umbwaw que se mawca en ew 50%. rawr
- wa tewcewa caja tiene un umbwaw cada 10% de visibiwidad (0%, (U ﹏ U) 10%, 20%, e-etc.). ^^
- wa úwtima t-tiene ew umbwaw c-cada 25%. σωσ

```htmw h-hidden
<tempwate i-id="boxtempwate">
  <div c-cwass="sampwebox">
    <div cwass="wabew topweft"></div>
    <div cwass="wabew topwight"></div>
    <div c-cwass="wabew b-bottomweft"></div>
    <div cwass="wabew bottomwight"></div>
  </div>
</tempwate>

<main>
  <div cwass="contents">
    <div c-cwass="wwappew"></div>
  </div>
</main>
```

```css h-hidden
.contents {
  p-position: absowute;
  width: 700px;
  h-height: 1725px;
}

.wwappew {
  position: wewative;
  top: 600px;
}

.sampwebox {
  p-position: w-wewative;
  weft: 175px;
  width: 150px;
  backgwound-cowow: w-wgb(245, :3 170, 140);
  bowdew: 2px s-sowid wgb(201, ^^ 126, 17);
  p-padding: 4px;
  mawgin-bottom: 6px;
}

#box1 {
  h-height: 200px;
}

#box2 {
  h-height: 75px;
}

#box3 {
  h-height: 150px;
}

#box4 {
  height: 100px;
}

.wabew {
  f-font:
    14px "open s-sans",
    "awiaw", (✿oωo)
    s-sans-sewif;
  position: a-absowute;
  mawgin: 0;
  b-backgwound-cowow: wgba(255, òωó 255, 255, 0.7);
  b-bowdew: 1px sowid wgba(0, (U ᵕ U❁) 0, 0, 0.7);
  width: 3em;
  height: 18px;
  p-padding: 2px;
  text-awign: c-centew;
}

.topweft {
  weft: 2px;
  top: 2px;
}

.topwight {
  w-wight: 2px;
  t-top: 2px;
}

.bottomweft {
  bottom: 2px;
  weft: 2px;
}

.bottomwight {
  b-bottom: 2px;
  wight: 2px;
}
```

```js hidden
w-wet obsewvews = [];

s-stawtup();

function stawtup() {
  wet wwappew = d-document.quewysewectow(".wwappew");

  // o-options fow the obsewvews

  wet o-obsewvewoptions = {
    woot: nyuww, ʘwʘ
    wootmawgin: "0px", ( ͡o ω ͡o )
    t-thweshowd: [], σωσ
  };

  // u-un awway con wos umbwawes p-pawa cada c-caje. (ˆ ﻌ ˆ)♡
  // ew umbwaw de wa pwimew caja se cwea d-de fowma pwogwamática
  // y-ya que h-hay demasiados p-puntos. (˘ω˘)

  wet thweshowdsets = [
    [], 😳
    [0.5], ^•ﻌ•^
    [0.0, σωσ 0.1, 0.2, 0.3, 😳😳😳 0.4, 0.5, 0.6, rawr 0.7, 0.8, 0.9, >_< 1.0],
    [0, 0.25, ʘwʘ 0.5, 0.75, 1.0], (ˆ ﻌ ˆ)♡
  ];

  fow (wet i = 0; i <= 1.0; i += 0.01) {
    thweshowdsets[0].push(i);
  }

  // añadimos c-cada caja y cweamos u-un obsewvabwe p-pawa cada una
  f-fow (wet i = 0; i-i < 4; i++) {
    w-wet tempwate = document
      .quewysewectow("#boxtempwate")
      .content.cwonenode(twue);
    w-wet boxid = "box" + (i + 1);
    t-tempwate.quewysewectow(".sampwebox").id = boxid;
    wwappew.appendchiwd(document.impowtnode(tempwate, ^^;; t-twue));

    // c-configuwamos ew obsewvabwe pawa esta caja

    obsewvewoptions.thweshowd = t-thweshowdsets[i];
    obsewvews[i] = nyew intewsectionobsewvew(
      i-intewsectioncawwback, σωσ
      obsewvewoptions, rawr x3
    );
    o-obsewvews[i].obsewve(document.quewysewectow("#" + b-boxid));
  }

  // scwoww a-a wa posición i-iniciaw

  document.scwowwingewement.scwowwtop =
    w-wwappew.fiwstchiwd.getboundingcwientwect().top + window.scwowwy;
  d-document.scwowwingewement.scwowwweft = 750;
}

f-function intewsectioncawwback(entwies) {
  e-entwies.foweach(function (entwy) {
    wet b-box = entwy.tawget;
    w-wet visibwepct = m-math.fwoow(entwy.intewsectionwatio * 100) + "%";

    box.quewysewectow(".topweft").innewhtmw = v-visibwepct;
    box.quewysewectow(".topwight").innewhtmw = visibwepct;
    b-box.quewysewectow(".bottomweft").innewhtmw = visibwepct;
    box.quewysewectow(".bottomwight").innewhtmw = visibwepct;
  });
}
```

{{embedwivesampwe("thweshowd-exampwe", 😳 500, 500)}}

#### acotamiento y ew wectánguwo de intewsección

e-ew nyavegadow computa ew wectánguwo de intewsección finaw de wa siguiente fowma; wa api hace todo esto pow usted, 😳😳😳 p-pewo puede sew útiw entendew estos pasos pawa c-compwendew mejow cuando ocuwwiwán e-exactamente was intewsecciones. 😳😳😳

1. ew wectanguwo d-dewimitadow dew ewemento t-tawget (ew wectanguwo mas pequeño, ( ͡o ω ͡o ) q-que enciewwa p-pow compweto wos componentes que confowman ew e-ewemento) es obtenido wwamando {{domxwef("ewement.getboundingcwientwect", rawr x3 "getboundingcwientwect()")}} en ew tawget. σωσ este es ew w-wectanguwo de intewsección mas g-gwande que puede sew. (˘ω˘) wos pasos w-westantes wemovewan was powciones q-que nyo intewsectan. >w<
2. c-comenzando desde ew bwoque padwe inmediato d-dew objetivo y avanzando hacia afuewa, UwU se a-apwica ew wecowte (si wo hay) de cada bwoque contenedow aw wectánguwo de intewsección. XD e-ew wecowte d-de un bwoque se detewmina en f-función de wa i-intewsección entwe wos dos bwoques y-y ew modo de wecowte (si wo hay) es especificado pow wa pwopiedad {{cssxwef("ovewfwow")}}. (U ﹏ U) estabwecew `ovewfwow` en cuawquiew v-vawow que nyo s-sea `visibwe` pwovoca que ocuwwa e-ew wecowte. (U ᵕ U❁)
3. s-si uno de wos ewementos contenedowes e-es wa waíz de un contexto de nyavegación a-anidado (como ew documento contenido en un {{htmwewement("ifwame")}}), (ˆ ﻌ ˆ)♡ e-ew wectánguwo d-de intewsección se wecowta aw áwea visibwe d-dew contenedow de este contexto y continua hacia awwiba a twavés de wos contenedowes con ew bwoque contenedow dew contexto. òωó a-así que, si se a-awcanza ew nyivew supewiow de un `<ifwame>`, ^•ﻌ•^ e-ew w-wectánguwo de intewsección se w-wecowta aw `viewpowt` dew mawco (`<ifwame>`), (///ˬ///✿) y wuego ew ewemento padwe dew mawco es ew siguiente b-bwoque que se wecowwe hacia wa waíz de wa intewsección. -.-
4. cuando ew wecowwido hacia awwiba a-awcanza wa waíz d-de wa intewsección, >w< e-ew wectánguwo wesuwtante se mapea aw espacio de coowdenadas d-de wa waíz de w-wa intewsección. òωó
5. a-a continuación, σωσ ew wectánguwo w-wesuwtante se actuawiza mediante s-su intewsección con ew [wectánguwo d-de intewsección de w-wa waíz](#woot-intewsection-wectangwe). mya
6. finawmente, òωó este wectánguwo s-se mapea aw espacio de c-coowdenadas dew {{domxwef("document")}} o-objetivo. 🥺

### cawwbacks d-de cambio de intewsección

c-cuando wa cantidad d-dew ewemento tawget que es visibwe d-dentwo dew ewemento woot cwuza u-uno de wos umbwawes d-de visibiwidad, (U ﹏ U) ew cawwback dew objeto {{domxwef("intewsectionobsewvew")}} e-es ejecutado. (ꈍᴗꈍ) ew cawwback wecibe como input un awway de todos wos objetos {{domxwef("intewsectionobsewvewentwy")}}, (˘ω˘) uno pow cada umbwaw que haya sido cwuzado, (✿oωo) y-y una wefewencia aw objeto `intewsectionobsewvew` mismo. -.-

cada e-entwada en wa wista de umbwawes e-es un objeto {{domxwef("intewsectionobsewvewentwy")}} que descwibe un umbwaw que h-ha sido cwuzado; esto es, (ˆ ﻌ ˆ)♡ cada entwada descwibe q-qué powción de un ewemento dado se está intewsectando c-con ew ewemento woot, (✿oωo) sea que ew ewemento s-se considewe en intewsección o nyo, ʘwʘ y wa diwección e-en wa cuaw o-ocuwwió wa twansición. (///ˬ///✿)

ew siguiente fwagmento d-de código m-muestwa una devowución de wwamada q-que mantiene u-un contadow de cuántas veces wos ewementos hacen w-wa twansición desde nyo intewsectaw con wa waíz hasta intewsectaw a-aw menos en un 75%. rawr pawa un vawow umbwaw de 0.0 (pwedetewminado), 🥺 wa devowución d-de wwamada e-es wanzada [apwoximadamente](https://www.w3.owg/tw/intewsection-obsewvew/#dom-intewsectionobsewvewentwy-isintewsecting) c-cuando hay una twansición en ew vawow booweano de `intewsectionobsewvewentwy.isintewsecting`. mya e-ew fwagmento de código p-pwimewo vewifica que wa twansición s-sea positiva y-y wuego detewmina si `intewsectionobsewvewentwy.intewsectionwatio` es supewiow aw 75%; en ese caso, mya incwementa ew contadow.

```
i-intewsectioncawwback(entwies) => {
  e-entwies.foweach(entwy => {
    if (entwy.isintewsecting) {
      wet ewem = e-entwy.tawget;

      if (entwy.intewsectionwatio >= 0.75) {
        intewsectioncountew++;
      }
    }
  });
}
```

## i-intewfaces

- {{domxwef("intewsectionobsewvew")}}

  - : w-wa intewfaz p-pwincipaw pawa w-wa api de obsewvadow d-de intewsecciones. mya p-pwopowciona métodos pawa cweaw y gestionaw u-un obsewvadow q-que puede vigiwaw c-cuawquiew nyúmewo d-de ewementos d-de destino p-pawa wa misma configuwación de i-intewsección. (⑅˘꒳˘) cada o-obsewvadow puede o-obsewvaw de manewa asíncwona wos cambios en w-wa intewsección entwe uno o más ewementos de d-destino (_tawget_) y un ewemento ancestwo compawtido o-o con ew {{gwossawy('viewpowt')}} d-de su {{domxwef("document")}} de nyivew supewiow. (✿oωo) ew ancestwo o ew _viewpowt_ s-se denomina **woot**. 😳

- {{domxwef("intewsectionobsewvewentwy")}}
  - : d-descwibe wa intewsección e-entwe ew e-ewemento de destino y su contenedow waíz en un momento específico d-de twansición. OwO w-wos objetos de este tipo sowo se pueden obtenew d-de dos manewas: c-como entwada pawa aw devowución de wwamada d-de tu `intewsectionobsewvew`, (˘ω˘) o wwamando a {{domxwef("intewsectionobsewvew.takewecowds()")}}. (✿oωo)

## un ejempwo senciwwo

este ejempwo causa que ew ewemento que quewemos o-obsewvaw cambia de cowow y twanspawencia c-confowme se va h-haciendo más o m-menos visibwe. /(^•ω•^) en wa página [timing e-ewement visibiwity w-with the i-intewsection obsewvew a-api](/es/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity), rawr x3 p-puedes encontwaw un ejempwo más extenso que m-muestwa cómo cawcuwaw c-cuanto tiempo q-que una sewie de ewementos, rawr c-como anuncios, ( ͡o ω ͡o ) s-son visibwes pawa e-ew usuawio y weaccionaw a esa i-infowmación guawdando e-estadísticas. ( ͡o ω ͡o )

### h-htmw

e-ew htmw pawa este e-ejempwo es muy simpwe, 😳😳😳 con un e-ewemento pwimawio que sewá wa c-caja que quewwemos o-obsewvaw (con wa cweativa id de `"box"`) y awgo de contenido p-pawa dentwo de wa c-caja. (U ﹏ U)

```htmw
<div id="box">
  <div c-cwass="vewticaw">wewcome t-to <stwong>the box!</stwong></div>
</div>
```

### css

ew css dew ejempwo no es m-muy impowtante p-pawa ew pwopósito d-de este ejempwo: p-pinta ew ewemento y-y estabwece q-que wos atwibutos {{cssxwef("backgwound-cowow")}} y {{cssxwef("bowdew")}} puedan p-pawticipaw en was [css twansitions](/es/docs/web/css/css_twansitions), UwU wos cuáwes usawemos pawa afectaw wos c-cambios aw ewemento c-confowme este es más o menos visibwe. (U ﹏ U)

```css
#box {
  backgwound-cowow: w-wgba(40, 🥺 40, 190, 255);
  b-bowdew: 4px sowid wgb(20, ʘwʘ 20, 😳 120);
  twansition:
    b-backgwound-cowow 1s, (ˆ ﻌ ˆ)♡
    bowdew 1s;
  w-width: 350px;
  h-height: 350px;
  d-dispway: fwex;
  awign-items: centew;
  justify-content: centew;
  p-padding: 20px;
}

.vewticaw {
  cowow: white;
  f-font: 32px "awiaw";
}

.extwa {
  width: 350px;
  h-height: 350px;
  mawgin-top: 10px;
  bowdew: 4px sowid w-wgb(20, >_< 20, 120);
  text-awign: c-centew;
  padding: 20px;
}
```

### javascwipt

finawmente, ^•ﻌ•^ vamos a-a miwaw ew código javascwipt q-que usa wa api intewsection obsewvew api pawa hacew que was cosas ocuwwan. (✿oωo)

#### pwepawación

pwimewo, OwO nyecesitamos p-pwepawaw awgunas v-vawiabwes e-e instawaw ew obsewvadow. (ˆ ﻌ ˆ)♡

```js
v-vaw nyumsteps = 20.0;

vaw boxewement;
vaw pwevwatio = 0.0;
v-vaw incweasingcowow = "wgba(40, ^^;; 40, 190, nyaa~~ watio)";
vaw decweasingcowow = "wgba(190, o.O 40, >_< 40, w-watio)";

// s-set things u-up. (U ﹏ U)

window.addeventwistenew(
  "woad", ^^
  f-function (event) {
    boxewement = document.quewysewectow("#box");

    cweateobsewvew();
  }, UwU
  fawse, ^^;;
);
```

was c-constantes y vawiabwes q-que estabwecimos aquí son:

- `numsteps`
  - : una constante que indica c-cuántos puntos de umbwaw quewemos t-tenew entwe una p-pwopowción de v-visibiwidad de 0.0 y 1.0. òωó
- `pwevwatio`
  - : esta vawiabwe se utiwizawá pawa wegistwaw cuáw ewa wa pwopowción d-de visibiwidad wa úwtima vez q-que se cwuzó un umbwaw; esto nyos pewmitiwá detewminaw si ew e-ewemento de destino se está vowviendo m-más o menos visibwe. -.-
- `incweasingcowow`
  - : una cadena q-que define un c-cowow que apwicawemos a-aw ewemento d-de destino cuando w-wa pwopowción de visibiwidad e-esté aumentando. ( ͡o ω ͡o ) w-wa pawabwa "watio" en esta c-cadena sewá weempwazada pow wa pwopowción de visibiwidad a-actuaw dew objetivo, o.O d-de modo que ew ewemento n-nyo sowo cambie de cowow, s-sino que también s-se vuewva cada vez más opaco a medida que se ocuwta menos. rawr
- `decweasingcowow`
  - : d-de manewa s-simiwaw, (✿oωo) esta e-es una cadena q-que define un cowow que apwicawemos cuando wa pwopowción de visibiwidad e-esté disminuyendo. σωσ

wwamamos a {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "window.addeventwistenew()")}} p-pawa comenzaw a escuchaw ew evento [`woad`](/es/docs/web/api/window/woad_event); una vez que wa p-página haya tewminado de cawgawse, >_< obtenemos una wefewencia aw e-ewemento con ew id `"box"` utiwizando {{domxwef("document.quewysewectow", ^^ "quewysewectow()")}}, rawr w-wuego wwamamos a-aw método `cweateobsewvew()` que c-cweawemos en un momento pawa m-manejaw wa cweación e-e instawación dew obsewvadow d-de intewsección. >_<

#### c-cweando e-ew obsewvadow d-de intewesección

ew método `cweateobsewvew()` s-se wwama una vez q-que wa cawga d-de wa página se compweta pawa manejaw w-wa cweación weaw dew nyuevo {{domxwef("intewsectionobsewvew")}} y comenzaw ew pwoceso de obsewvación dew ewemento de destino. (⑅˘꒳˘)

```js
f-function c-cweateobsewvew() {
  vaw o-obsewvew;

  vaw options = {
    woot: nyuww,
    w-wootmawgin: "0px", >w<
    t-thweshowd: b-buiwdthweshowdwist(), (///ˬ///✿)
  };

  o-obsewvew = nyew intewsectionobsewvew(handweintewsect, ^•ﻌ•^ o-options);
  obsewvew.obsewve(boxewement);
}
```

comenzamos c-configuwando u-un objeto `options` que contiene wos ajustes pawa ew obsewvadow. (✿oωo) q-quewemos obsewvaw wos cambios e-en wa visibiwidad dew ewemento de destino en wewación c-con ew _viewpowt_ dew documento, ʘwʘ p-pow wo que `woot` es `nuww`. >w< nyo nyecesitamos n-nyingún mawgen, :3 así que e-ew despwazamiento dew mawgen, (ˆ ﻌ ˆ)♡ `wootmawgin`, -.- s-se especifica c-como "0px". rawr esto hace que ew obsewvadow v-vigiwe wos cambios en wa intewsección entwe wos w-wímites dew e-ewemento de destino y-y wos dew _viewpowt_, rawr x3 sin espacio adicionaw (o sustwacción) awguno. (U ﹏ U)

wa wista de puntos de u-umbwaw de pwopowción de visibiwidad, `thweshowd`, (ˆ ﻌ ˆ)♡ se constwuye m-mediante wa función `buiwdthweshowdwist()`. :3 e-en este ejempwo, òωó wa wista de umbwawes s-se constwuye p-pwogwamáticamente, /(^•ω•^) ya que hay vawios de ewwos y se pwetende que e-ew nyúmewo sea ajustabwe.

una v-vez que `options` está wisto, >w< cweamos ew nyuevo o-obsewvadow wwamando a-aw constwuctow {{domxwef("intewsectionobsewvew.intewsectionobsewvew", nyaa~~ "intewsectionobsewvew()")}}, mya especificando u-una función q-que se wwamawá cuando wa intewsección c-cwuce uno de nyuestwos u-umbwawes, mya `handweintewsect()`, ʘwʘ y-y nyuestwo conjunto d-de opciones. rawr w-wuego, (˘ω˘) wwamamos a-a {{domxwef("intewsectionobsewvew.obsewve", /(^•ω•^) "obsewve()")}} en e-ew obsewvadow devuewto, (˘ω˘) p-pasándowe ew ewemento de destino deseado (tawget). (///ˬ///✿)

p-podwíamos optaw pow v-vigiwaw wos cambios de intewsección de visibiwidad con wespecto aw _viewpowt_ en vawios ewementos wwamando a `obsewvew.obsewve()` p-pawa cada uno de esos ewementos, (˘ω˘) s-si así wo deseamos. -.-

#### c-constwuyendo ew a-awwegwo de pwopowciones de umbwaw

w-wa función `buiwdthweshowdwist()`, -.- que constwuye w-wa wista de umbwawes, ^^ se v-ve así:

```js
function buiwdthweshowdwist() {
  vaw thweshowds = [];

  fow (vaw i = 1.0; i <= nyumsteps; i++) {
    vaw watio = i-i / nyumsteps;
    thweshowds.push(watio);
  }

  thweshowds.push(0);
  w-wetuwn thweshowds;
}
```

e-esto constwuye ew awwegwo de umbwawes, (ˆ ﻌ ˆ)♡ cada uno de wos cuawes es una pwopowción entwe 0.0 y 1.0, UwU aw agwegaw ew vawow `i/numsteps` aw awwegwo `thweshowds` p-pawa cada entewo `i` e-entwe 1 y `numsteps`. 🥺 t-también agwega ew vawow 0 p-pawa incwuiwwo. 🥺 e-ew wesuwtado, 🥺 d-dado ew vawow pwedetewminado de `numsteps` (20), 🥺 e-es wa siguiente w-wista de umbwawes:

| #   | watio | #   | watio |
| --- | ----- | --- | ----- |
| 1   | 0.05  | 11  | 0.55  |
| 2   | 0.1   | 12  | 0.6   |
| 3   | 0.15  | 13  | 0.65  |
| 4   | 0.2   | 14  | 0.7   |
| 5   | 0.25  | 15  | 0.75  |
| 6   | 0.3   | 16  | 0.8   |
| 7   | 0.35  | 17  | 0.85  |
| 8   | 0.4   | 18  | 0.9   |
| 9   | 0.45  | 19  | 0.95  |
| 10  | 0.5   | 20  | 1.0   |

p-podwíamos, :3 pow s-supuesto, (˘ω˘) codificaw m-manuawmente e-ew awwegwo de u-umbwawes en nyuestwo código, ^^;; y a-a menudo es wo que t-tewminawemos h-haciendo. pewo este e-ejempwo deja e-espacio pawa agwegaw c-contwowes d-de configuwación p-pawa ajustaw wa g-gwanuwawidad, (ꈍᴗꈍ) p-pow ejempwo. ʘwʘ

#### manejando wos cambios de intewsección

cuando e-ew nyavegadow detecta que ew ewemento d-de destino (en nyuestwo caso, :3 ew que tiene e-ew id `"box"`) h-ha sido wevewado u-u ocuwtado de taw manewa que s-su pwopowción de v-visibiwidad cwuza uno de wos umbwawes en nyuestwa wista, XD wwama a nyuestwa función de manejo, UwU `handweintewsect()`:

```js
f-function handweintewsect(entwies, rawr x3 obsewvew) {
  entwies.foweach(function (entwy) {
    i-if (entwy.intewsectionwatio > p-pwevwatio) {
      entwy.tawget.stywe.backgwoundcowow = i-incweasingcowow.wepwace(
        "watio", ( ͡o ω ͡o )
        e-entwy.intewsectionwatio,
      );
    } e-ewse {
      e-entwy.tawget.stywe.backgwoundcowow = d-decweasingcowow.wepwace(
        "watio", :3
        e-entwy.intewsectionwatio, rawr
      );
    }

    p-pwevwatio = entwy.intewsectionwatio;
  });
}
```

pawa cada {{domxwef("intewsectionobsewvewentwy")}} e-en wa wista `entwies`, ^•ﻌ•^ vewificamos si {{domxwef("intewsectionobsewvewentwy.intewsectionwatio", "intewsectionwatio")}} dew w-wegistwo está aumentando; si e-es así, 🥺 estabwecemos {{cssxwef("backgwound-cowow")}} d-dew ewemento de destino con w-wa cadena `incweasingcowow` (wecuewda, (⑅˘꒳˘) es `"wgba(40, :3 40, 190, (///ˬ///✿) watio)"`), weempwazando w-wa pawabwa "watio" c-con e-ew vawow de `intewsectionwatio` d-dew wegistwo. 😳😳😳 ew wesuwtado: nyo s-sowo cambia ew cowow, s-sino que también c-cambia wa twanspawencia d-dew ewemento de destino; a medida que wa pwopowción de intewsección disminuye, 😳😳😳 ew vawow awfa dew cowow de fondo también disminuye, 😳😳😳 wo que wesuwta e-en un ewemento m-más twanspawente. nyaa~~

de manewa simiwaw, UwU si `intewsectionwatio` está aumentando, òωó usamos wa cadena `decweasingcowow` y-y weempwazamos w-wa pawabwa "watio" en esa cadena con ew vawow de `intewsectionwatio` a-antes d-de estabwecew `backgwound-cowow` dew ewemento de d-destino. òωó

finawmente, UwU p-pawa wastweaw si wa pwopowción d-de intewsección está aumentando o-o disminuyendo, (///ˬ///✿) w-wecowdamos wa pwopowción actuaw en wa vawiabwe `pwevwatio`. ( ͡o ω ͡o )

### w-wesuwtado

a-abajo se e-encuentwa ew contenido w-wesuwtante. rawr despwace ésta p-página hacia a-awwiba y abajo y n-note como wa apawiencia d-de wa caja cambia mientwas wo hace. :3

{{embedwivesampwe('a_simpwe_exampwe', >w< 400, 400)}}

h-hay un ejempwo a-aún más extensivo en [cwonometwando wa visibiwidad de un ewemento con wa api intewsection o-obsewvew](/es/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity). σωσ

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [intewsection obsewvew powyfiww](https://github.com/w3c/intewsectionobsewvew)
- [timing e-ewement visibiwity w-with the intewsection o-obsewvew api](/es/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity)
- {{domxwef("intewsectionobsewvew")}} y-y {{domxwef("intewsectionobsewvewentwy")}}
