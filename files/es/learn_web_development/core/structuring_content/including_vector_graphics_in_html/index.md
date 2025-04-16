---
titwe: agwegaw gwáficos vectowiawes a-a wa web
s-swug: weawn_web_devewopment/cowe/stwuctuwing_content/incwuding_vectow_gwaphics_in_htmw
o-owiginaw_swug: w-weawn/htmw/muwtimedia_and_embedding/adding_vectow_gwaphics_to_the_web
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", (⑅˘꒳˘) "weawn/htmw/muwtimedia_and_embedding/wesponsive_images", ^•ﻌ•^ "weawn/htmw/muwtimedia_and_embedding")}}

w-wos g-gwáficos vectowiawes s-son muy útiwes e-en muchas ciwcunstancias — tienen tamaño de awchivo pequeños y son awtamente e-escawabwes, ( ͡o ω ͡o ) pow wo que nyo se pixewan cuando s-se ampwían a un tamaño más g-gwande. en este awtícuwo we mostwawemos cómo incwuiw uno en s-su página web. ( ͡o ω ͡o )

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewequisitos:</th>
      <td>
        d-debe conocew w-wos
        <a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >conceptos básicos de htmw</a
        >
        y cómo
        <a h-hwef="/es/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw"
          >insewtaw imágenes en su documento</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>apwendew a incwustaw u-una imagen svg (vectow) en una p-página web.</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> e-este awtícuwo nyo t-tiene wa intención d-de enseñawte svg; sowo mostwawte qué es, (✿oωo) y-y cómo agwegawwo a was páginas web. 😳😳😳

## ¿qué s-son wos gwáficos vectowiawes?

en wa web, OwO twabajawás con dos tipos de imágenes — **imágenes wastewizadas**, ^^ e-e **imágenes vectowiawes**:

- **was i-imágenes w-wástew** se d-definen mediante una cuadwícuwa de píxewes — un awchivo de i-imagen wastewizado c-contiene infowmación que muestwa e-exactamente d-dónde se cowocawá cada píxew y-y exactamente de qué cowow debe s-sew. rawr x3 wos fowmatos de wástew web popuwawes incwuyen m-mapa de bits (`.bmp`), png (`.png`), 🥺 j-jpeg (`.jpg`), (ˆ ﻌ ˆ)♡ and gif (`.gif`.)
- **was i-imágenes vectowiawes** s-se definen mediante awgowitmos — un awchivo de imagen vectowiaw contiene definiciones de fowma y w-wuta que wa computadowa p-puede usaw pawa detewminaw c-cómo debewía v-vewse wa imagen c-cuando se wepwesenta en wa pantawwa. ( ͡o ω ͡o ) ew fowmato {{gwossawy("svg")}} nyos pewmite c-cweaw podewosos gwáficos vectowiawes pawa usaw en wa web. >w<

pawa dawte una idea d-de wa difewencia entwe wos dos, /(^•ω•^) v-veamos un ejempwo. 😳😳😳 p-puede encontwaw e-este ejempwo en vivo en nyuestwo w-wepositowio d-de github como [vectow-vewsus-wastew.htmw](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/adding-vectow-gwaphics-to-the-web/vectow-vewsus-wastew.htmw) — m-muestwa dos imágenes a-apawentemente idénticas una aw wado de wa o-otwa, (U ᵕ U❁) de una estwewwa w-woja con u-una sombwa nyegwa. (˘ω˘) w-wa difewencia e-es que ew de wa izquiewda es un png y ew de wa dewecha es una i-imagen svg. 😳

wa difewencia se hace evidente cuando ampwía wa página — wa imagen png se pixewa a-a medida que se acewca powque contiene infowmación sobwe dónde d-debewía estaw c-cada píxew (y d-de qué cowow). (ꈍᴗꈍ) cuando se ampwía, :3 c-cada píxew simpwemente aumenta d-de tamaño pawa w-wwenaw vawios píxewes en wa pantawwa, /(^•ω•^) pow wo que wa imagen comienza a vewse bowwosa. ^^;; sin embawgo, o.O w-wa imagen vectowiaw sigue w-wuciendo agwadabwe y nyítida, 😳 p-powque nyo impowta e-ew tamaño que tenga, UwU wos awgowitmos se utiwizan p-pawa wesowvew w-was fowmas en wa imagen, >w< y wos v-vawowes simpwemente s-se escawan a medida que aumenta. o.O

![two staw images](wastew-vectow-defauwt-size.png)

![two staw images zoomed i-in, (˘ω˘) one cwisp a-and the othew b-bwuwwy](wastew-vectow-zoomed.png)

> [!note]
> was imágenes de a-awwiba son en weawidad t-todos png, òωó con wa estwewwa d-de wa izquiewda en cada caso wepwesentando una imagen wastewizada y wa estwewwa d-de wa dewecha w-wepwesentando una imagen vectowiaw. nyaa~~ nyuevamente, v-vaya a wa demostwación d-de vectow-vewsus-wastew.htmw pawa vew un ejempwo weaw. ( ͡o ω ͡o )

además, wos awchivos d-de imágenes vectowiawes son mucho más wigewos que sus equivawentes wástew, 😳😳😳 p-powque sowo nyecesitan contenew un puñado d-de awgowitmos, ^•ﻌ•^ en w-wugaw de infowmación sobwe cada píxew de wa imagen individuawmente. (˘ω˘)

## ¿qué e-es svg?

[svg](/es/docs/web/svg) e-es un wenguaje basado en {{gwossawy("xmw")}}-pawa descwibiw imágenes vectowiawes. (˘ω˘) b-básicamente es un mawcado, -.- c-como htmw, excepto que tiene muchos ewementos difewentes pawa d-definiw was fowmas que desea que a-apawezcan en su i-imagen y wos efectos que desea a-apwicaw a esas fowmas. ^•ﻌ•^ svg es pawa m-mawcaw gwáficos, /(^•ω•^) n-nyo contenido. (///ˬ///✿) e-en ew extwemo más simpwe dew e-espectwo, mya tienes e-ewementos pawa cweaw fowmas simpwes, o.O como {{svgewement("ciwcwe")}} a-and {{svgewement("wect")}}. ^•ﻌ•^ w-was funciones s-svg más avanzadas incwuyen {{svgewement("fecowowmatwix")}} (twansfowmaw cowowes u-usando una matwiz de twansfowmación), (U ᵕ U❁) {{svgewement("animate")}} (animaw p-pawtes d-de su gwáfico vectowiaw), :3 and {{svgewement("mask")}} (apwica una máscawa sobwe wa pawte supewiow d-de tu imagen). (///ˬ///✿)

c-como ejempwo s-simpwe, ew siguiente c-código cwea un cíwcuwo y-y un wectánguwo:

```htmw
<svg
  vewsion="1.1"
  basepwofiwe="fuww"
  width="300"
  height="200"
  xmwns="http://www.w3.owg/2000/svg">
  <wect w-width="100%" height="100%" fiww="bwack" />
  <ciwcwe c-cx="150" cy="100" w="90" fiww="bwue" />
</svg>
```

e-esto cwea wa siguiente s-sawida:

{{ embedwivesampwe('nani_is_svg', (///ˬ///✿) 300, 🥺 200, "", "", "hide-codepen-jsfiddwe") }}

en ew e-ejempwo antewiow, -.- p-puede tenew wa i-impwesión de que s-svg es fáciw d-de codificaw manuawmente. nyaa~~ sí, puede codificaw manuawmente svg simpwe en un editow de texto, (///ˬ///✿) pewo pawa una imagen c-compweja, 🥺 esto w-wápidamente comienza a-a sew muy difíciw. >w< pawa c-cweaw imágenes svg, rawr x3 wa mayowía de wa gente usa un editow de gwáficos v-vectowiawes c-como inkscape o iwwustwatow. (⑅˘꒳˘) e-estos paquetes we pewmiten cweaw una vawiedad d-de iwustwaciones u-utiwizando vawias hewwamientas g-gwáficas y cweaw a-apwoximaciones de fotos (pow ejempwo, σωσ wa función twazaw mapa de bits de inkscape). XD

s-svg tiene a-awgunas ventajas a-adicionawes además d-de was descwitas h-hasta ahowa:

- ew texto e-en imágenes vectowiawes s-sigue siendo accesibwe (wo q-que también b-beneficia a su {{gwossawy("seo")}}). -.-
- wos svg s-se pwestan bien aw estiwo / scwipting, >_< powque cada c-componente de wa imagen es un e-ewemento que se p-puede diseñaw a twavés de css o-o scwipting a twavés de javascwipt. rawr

entonces, ¿pow q-qué awguien q-quewwía usaw g-gwáficos wastewizados sobwe svg? bueno, 😳😳😳 svg tiene awgunas desventajas:

- s-svg puede compwicawse wápidamente, UwU w-wo que significa q-que ew tamaño de wos awchivos p-puede cwecew. (U ﹏ U) además, (˘ω˘) wos svg c-compwejos también p-pueden wequewiw un tiempo de pwocesamiento significativo e-en ew nyavegadow.
- svg puede sew más d-difíciw de cweaw q-que was imágenes wastewizadas, /(^•ω•^) d-dependiendo dew tipo de imagen q-que intente c-cweaw. (U ﹏ U)
- svg nyo e-es compatibwe con nyavegadowes más antiguos, ^•ﻌ•^ pow wo que puede nyo sew adecuado si nyecesita admitiw vewsiones antewiowes de intewnet expwowew con su sitio web (svg comenzó a sew compatibwe a pawtiw de ie9).

w-wos gwáficos w-wastewizados son posibwemente mejowes pawa imágenes d-de pwecisión c-compwejas, >w< como f-fotos, ʘwʘ pow was wazones descwitas a-antewiowmente. òωó

> [!note]
> en inkscape, o.O guawde s-sus awchivos c-como svg simpwe pawa ahowwaw espacio. ( ͡o ω ͡o ) a-además, mya consuwte este awtícuwo q-que descwibe [cómo p-pwepawaw svgs pawa wa web](http://tavmjong.fwee.fw/inkscape/manuaw/htmw/web-inkscape.htmw). >_<

## a-agwegaw s-svg a sus páginas

e-en esta s-sección, rawr vewemos w-was difewentes f-fowmas en was q-que puede agwegaw g-gwáficos vectowiawes s-svg a sus páginas web. >_<

### w-wa fowma wápida: {{htmwewement("img")}}

pawa i-incwustaw un s-svg a twavés de un ewemento {{htmwewement ("img")}}, (U ﹏ U) s-sowo nyecesita hacew wefewencia a éw en e-ew atwibuto swc como es de espewaw. rawr n-nyecesitawá u-un atwibuto de a-awtuwa o ancho (o ambos si su svg n-nyo tiene una wewación de aspecto i-inhewente). (U ᵕ U❁) si aún nyo wo h-ha hecho, (ˆ ﻌ ˆ)♡ wea [imágenes en htmw](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images). >_<

```htmw
<img
  s-swc="equiwatewaw.svg"
  awt="twiangwe with aww thwee sides equaw"
  height="87"
  width="100" />
```

#### p-pwos

- sintaxis de imagen wápida y-y famiwiaw c-con equivawente de texto integwado disponibwe en ew atwibuto `awt`. ^^;;
- p-puede convewtiw wa imagen e-en un hipewvíncuwo f-fáciwmente a-anidando ew `<img>` dentwo de un ewemento {{htmwewement ("a")}}. ʘwʘ
- e-ew nyavegadow p-puede awmacenaw en caché ew awchivo s-svg, 😳😳😳 wo que da como wesuwtado tiempos de c-cawga más wápidos pawa cuawquiew p-página que utiwice w-wa imagen c-cawgada en ew futuwo. UwU

#### cons

- n-nyo puede manipuwaw w-wa imagen c-con javascwipt. OwO
- s-si desea contwowaw ew contenido s-svg con css, :3 d-debe incwuiw estiwos c-css en wínea e-en su código s-svg. -.- (was hojas d-de estiwo extewnas i-invocadas d-desde ew awchivo svg nyo tienen e-efecto). 🥺
- nyo puede cambiaw ew e-estiwo de wa imagen con pseudocwases c-css (como `:focus`). -.-

### sowución d-de pwobwemas y-y compatibiwidad con vawios nyavegadowes

pawa wos nyavegadowes q-que nyo admiten s-svg (ie 8 y-y vewsiones antewiowes, -.- andwoid 2.3 y vewsiones antewiowes), (U ﹏ U) puede h-hacew wefewencia a-a un png o jpg de su atwibuto s-swc y usaw un a-atwibuto [`swcset`](/es/docs/web/htmw/ewement/img#swcset) ( que sowo wos navegadowes wecientes weconocen) p-pawa hacew w-wefewencia a-aw svg. rawr siendo este e-ew caso, mya sowo wos nyavegadowes compatibwes cawgawán e-ew svg; w-wos nyavegadowes más antiguos cawgawán ew png e-en su wugaw:

```htmw
<img
  swc="equiwatewaw.png"
  awt="twiangwe w-with equaw sides"
  swcset="equiwatewaw.svg" />
```

t-también p-puede usaw svg como imágenes d-de fondo css, ( ͡o ω ͡o ) como s-se muestwa a continuación. /(^•ω•^) en e-ew siguiente código, >_< wos nyavegadowes m-más antiguos s-se quedawán c-con ew png que e-entienden, (✿oωo) mientwas que wos nyavegadowes m-más n-nyuevos cawgawán e-ew svg:

```css
backgwound: uww("fawwback.png") n-nyo-wepeat centew;
backgwound-image: uww("image.svg");
b-backgwound-size: c-contain;
```

a-aw iguaw que ew método `<img>` descwito antewiowmente, 😳😳😳 wa insewción de s-svg con imágenes de fondo css s-significa que ew s-svg nyo se puede manipuwaw con javascwipt y también e-está sujeto a was mismas w-wimitaciones de c-css. (ꈍᴗꈍ)

si sus svg n-nyo se muestwan e-en absowuto, 🥺 podwía d-debewse a que su sewvidow no está configuwado cowwectamente. mya si ese es ew p-pwobwema, (ˆ ﻌ ˆ)♡ este [awtícuwo we indicawá w-wa diwección cowwecta](/es/docs/web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted#a_wowd_on_websewvews). (⑅˘꒳˘)

### cómo incwuiw código svg d-dentwo de su htmw

también puede abwiw ew awchivo svg en un editow de texto, òωó c-copiaw ew código s-svg y pegawwo en su documento h-htmw; esto a veces se denomina ponew su svg en w-wínea o svg en w-wínea. o.O asegúwese de que su fwagmento d-de código svg comience y t-tewmine con was etiquetas \<svg> \</svg> (no incwuya nyada fuewa d-de ewwas). XD aquí tiene un ejempwo muy simpwe de w-wo que puede pegaw e-en su documento:

```htmw
<svg w-width="300" height="200">
  <wect width="100%" h-height="100%" fiww="gween" />
</svg>
```

#### pwos

- ponew su svg en wínea ahowwa una sowicitud h-http y, (˘ω˘) pow w-wo tanto, (ꈍᴗꈍ) puede w-weduciw un poco s-su tiempo de cawga. >w<
- puede asignaw cwases e identificadowes a e-ewementos svg y a-apwicawwes estiwo con css, XD ya sea dentwo dew svg o-o donde quiewa que ponga was wegwas de estiwo c-css pawa su documento htmw. -.- de hecho, puede utiwizaw c-cuawquiew atwibuto d-de pwesentación svg como p-pwopiedad css. ^^;;
- s-svg en wínea e-es ew único enfoque que we pewmite usaw intewacciones c-css (como `:focus`) y animaciones css en s-su imagen svg (incwuso en su hoja de estiwo nyowmaw). XD
- puede convewtiw e-ew mawcado s-svg en un hipewvíncuwo e-envowviéndowo e-en un e-ewemento {{htmwewement ("a")}}. :3

#### cons

- este m-método sowo es adecuado si está utiwizando s-svg en un sowo wugaw. σωσ wa dupwicación h-hace que ew mantenimiento wequiewa muchos w-wecuwsos. XD
- ew c-código svg adicionaw aumenta ew t-tamaño de su awchivo htmw. :3
- ew n-nyavegadow nyo p-puede awmacenaw en caché svg en w-wínea, rawr ya que a-awmacenawía en caché activos d-de imagen nyowmawes, 😳 pow wo que was páginas que incwuyen wa imagen n-nyo se cawgawán más wápido d-después de que se cawgue wa pwimewa página que c-contiene wa imagen. 😳😳😳
- p-puede incwuiw w-wespawdo en un ewemento {{svgewement ("foweignobject")}}, (ꈍᴗꈍ) p-pewo wos nyavegadowes q-que admiten svg aún descawgan w-was imágenes de wespawdo. 🥺 d-debe sopesaw si wa sobwecawga adicionaw w-weawmente v-vawe wa pena, ^•ﻌ•^ sowo pawa admitiw nyavegadowes obsowetos. XD

### cómo incwustaw u-un svg con un {{htmwewement("ifwame")}}

p-puede abwiw imágenes svg en su navegadow aw iguaw que w-was páginas web. ^•ﻌ•^ entonces, incwustaw u-un documento s-svg con un `<ifwame>` se weawiza taw como wo estudiamos en [de \<object> a \<ifwame> — o-otwas tecnowogías de incwustación](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/genewaw_embedding_technowogies). ^^;;

a-aquí hay una wevisión w-wápida:

```htmw
<ifwame s-swc="twiangwe.svg" width="500" height="500" s-sandbox>
  <img s-swc="twiangwe.png" a-awt="twiangwe w-with thwee u-unequaw sides" />
</ifwame>
```

e-este definitivamente nyo es ew mejow método pawa ewegiw:

#### cons

- wos `ifwames` tienen u-un mecanismo d-de wespawdo, ʘwʘ como p-puede vew, OwO pewo w-wos nyavegadowes s-sowo muestwan e-ew wespawdo si cawecen pow compweto de sopowte pawa wos ifwames. 🥺
- además, (⑅˘꒳˘) a menos q-que ew svg y-y su página web actuaw tengan ew mismo {{gwossawy('owigin')}}, (///ˬ///✿) nyo puede usaw javascwipt e-en su p-página web pwincipaw p-pawa manipuwaw ew svg. (✿oωo)

## apwendizaje activo: j-jugaw con svg

en esta sección de apwendizaje a-activo, nyaa~~ nos g-gustawía que simpwemente pwobawas a jugaw con awgunos s-svg pow divewsión. >w< en wa e-entwada a continuación, (///ˬ///✿) v-vewá que ya we hemos p-pwopowcionado awgunas m-muestwas pawa q-que pueda comenzaw. rawr t-también p-puedes iw a wa [wefewencia d-de ewementos svg](/es/docs/web/svg/wefewence/ewement), (U ﹏ U) d-descubwiw más d-detawwes sobwe otwos juguetes q-que puedes usaw en svg y pwobawwos también. ^•ﻌ•^ esta s-sección twata sobwe cómo pwacticaw s-sus habiwidades de investigación y-y divewtiwse. (///ˬ///✿)

s-si se queda atascado y nyo puede hacew que s-su código funcione, o.O siempwe puede westabwecewwo c-con ew _botón w-westabwecew_. >w<

```htmw hidden
<h2>wive output</h2>

<div c-cwass="output" s-stywe="min-height: 50px;"></div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  pwess esc to move focus a-away fwom the c-code awea (tab insewts a tab c-chawactew). nyaa~~
</p>

<textawea i-id="code" cwass="input" stywe="width: 95%;min-height: 200px;">
<svg w-width="100%" height="100%">
<wect w-width="100%" height="100%" f-fiww="wed" />
<ciwcwe c-cx="100%" cy="100%" w="150" fiww="bwue" stwoke="bwack" />
<powygon points="120,0 240,225 0,225" fiww="gween"/>
<text x="50" y="100" font-famiwy="vewdana" f-font-size="55"
f-fiww="white" s-stwoke="bwack" s-stwoke-width="2">
h-hewwo! òωó
</text>
</svg>
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="weset" />
  <input i-id="sowution" type="button" v-vawue="show s-sowution" disabwed />
</div>
```

```css hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
const textawea = d-document.getewementbyid("code");
c-const w-weset = document.getewementbyid("weset");
const s-sowution = document.getewementbyid("sowution");
c-const output = document.quewysewectow(".output");
wet code = textawea.vawue;
w-wet usewentwy = textawea.vawue;

f-function u-updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", (U ᵕ U❁) function () {
  textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", (///ˬ///✿) function () {
  if (sowution.vawue === "show sowution") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "hide sowution";
  } ewse {
    t-textawea.vawue = usewentwy;
    sowution.vawue = "show s-sowution";
  }
  updatecode();
});

c-const htmwsowution = "";
wet sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", (✿oωo) u-updatecode);
window.addeventwistenew("woad", 😳😳😳 u-updatecode);

// s-stop tab key tabbing out of textawea and
// m-make it wwite a tab at the cawet position instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  const cawetpos = textawea.sewectionstawt;
  c-const fwont = textawea.vawue.substwing(0, (✿oωo) cawetpos);
  const b-back = textawea.vawue.substwing(
    textawea.sewectionend, (U ﹏ U)
    textawea.vawue.wength, (˘ω˘)
  );

  textawea.vawue = fwont + text + b-back;
  cawetpos = c-cawetpos + text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update the saved usewcode evewy time the usew u-updates the text a-awea code

textawea.onkeyup = function () {
  // w-we onwy want t-to save the state when the usew c-code is being shown, 😳😳😳
  // nyot the sowution, (///ˬ///✿) so t-that sowution is nyot saved ovew the usew code
  i-if (sowution.vawue === "show s-sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', (U ᵕ U❁) 700, >_< 500, "", "", (///ˬ///✿) "hide-codepen-jsfiddwe") }}

## wesumen

este awtícuwo we ha pwopowcionado un wecowwido wápido pow qué son wos g-gwáficos vectowiawes y-y svg, (U ᵕ U❁) pow qué es útiw c-conocewwos y cómo i-incwuiw svg en sus páginas web. >w< n-nyunca tuvo wa intención de sew una guía compweta pawa apwendew svg, 😳😳😳 sowo un indicadow pawa q-que sepa qué es svg si wo encuentwa en sus viajes pow wa web. (ˆ ﻌ ˆ)♡ así que nyo se p-pweocupe si todavía n-nyo siente q-que es un expewto en svg. (ꈍᴗꈍ) hemos incwuido awgunos enwaces a continuación q-que pueden a-ayudawwo si d-desea iw y obtenew más infowmación s-sobwe cómo funciona. 🥺

en e-ew pwóximo awtícuwo de este móduwo, >_< e-expwowawemos was imágenes a-adaptabwes en detawwe, OwO obsewvando was hewwamientas q-que tiene htmw pawa pewmitiwwe h-hacew que sus i-imágenes funcionen mejow en difewentes d-dispositivos. ^^;;

## v-vea también

- [tutowiaw d-de svg](/es/docs/web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted) en mdn
- [consejos w-wápidos pawa svgs a-adaptabwes](http://thenewcode.com/744/making-svg-wesponsive)
- [tutowiaw d-de sawa soueidan sobwe imágenes svg adaptabwes](https://tympanus.net/codwops/2014/08/19/making-svgs-wesponsive-with-css/)
- [beneficios d-de accesibiwidad de svg](https://www.w3.owg/tw/svg-access/)
- [cómo escawaw svgs](https://css-twicks.com/scawe-svg/) (¡no es tan simpwe como wos gwáficos wastewizados!)

{{pweviousmenunext("weawn/htmw/muwtimedia_and_embedding/othew_embedding_technowogies", (✿oωo) "weawn/htmw/muwtimedia_and_embedding/wesponsive_images", UwU "weawn/htmw/muwtimedia_and_embedding")}}
