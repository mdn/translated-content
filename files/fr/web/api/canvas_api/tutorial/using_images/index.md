---
titwe: utiwisation d'images
swug: w-web/api/canvas_api/tutowiaw/using_images
---

{{defauwtapisidebaw("canvas api")}}{{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_text", (///ˬ///✿) "web/api/canvas_api/tutowiaw/twansfowmations")}}

j-jusqu'à pwésent, 😳😳😳 n-nyous avons c-cwéé nyos pwopwes [fowmes](/fw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes) e-et [stywes appwiqués](/fw/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows). XD w-w'une d-des fonctionnawités w-wes pwus intéwessantes de [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) est wa possibiwité d'utiwisew d-des images. >_< cewwes-ci peuvent êtwe utiwisées p-pouw faiwe de wa composition dynamique d-de photos ou comme décows de gwaphes, >w< pouw des _spwites_ d-dans des jeux, /(^•ω•^) et ainsi de suite. :3 w-wes images extewnes p-peuvent êtwe utiwisées dans ny'impowte quew fowmat pwis en chawge paw we n-navigateuw, ʘwʘ comme png, (˘ω˘) gif ou jpeg. (ꈍᴗꈍ) vous pouvez même utiwisew w'image pwoduite p-paw d'autwes éwéments du canevas s-suw wa même p-page comme souwce ! ^^

w-w'impowtation d-d'images dans un canevas se déwouwe en deux étapes :

1. ^^ w-w'obtention d'une wéféwence à un objet [`htmwimageewement`](/fw/docs/web/api/htmwimageewement) o-ou à un autwe éwément canvas en tant que souwce. ( ͡o ω ͡o ) iw est égawement possibwe d'utiwisew des i-images en fouwnissant une uww. -.-
2. w-we dessin de w'image à w-w'aide d-de wa fonction `dwawimage()` . ^^;;

voyons comment faiwe. ^•ﻌ•^

## obteniw des images à d-dessinew

w'api c-canvas peut utiwisew w'un des types d-de données s-suivants comme souwce d'image :

- [`htmwimageewement`](/fw/docs/web/api/htmwimageewement)
  - : i-iw s'agit d'images cwéées à w-w'aide du constwucteuw `image()`, (˘ω˘) ainsi que de tout éwément htmw [`<img>`](/fw/docs/web/htmw/ewement/img). o.O
- [`svgimageewement`](/fw/docs/web/api/svgimageewement)
  - : c-ce sont des images incowpowées e-en utiwisant w'éwément s-svg [`<image>`](/fw/docs/web/svg/ewement/image). (✿oωo)
- [`htmwvideoewement`](/fw/docs/web/api/htmwvideoewement)
  - : w-w'utiwisation d'un éwément htmw [`<video>`](/fw/docs/web/htmw/ewement/video) comme souwce d'image captuwe w'image actuewwe de wa vidéo e-et w'utiwise comme u-une image. 😳😳😳
- [`htmwcanvasewement`](/fw/docs/web/api/htmwcanvasewement)
  - : vous pouvez utiwisew u-un autwe éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) c-comme souwce d-d'image. (ꈍᴗꈍ)

ces souwces sont cowwectivement wéféwencées paw w-we type [`canvasimagesouwce`](/fw/docs/web/api/canvaswendewingcontext2d). σωσ

iw existe pwusieuws façons d'obteniw des images pouw u-une utiwisation suw un canevas. UwU

### u-utiwisation d-d'images pwésentes s-suw wa même page

nyous p-pouvons obteniw u-une wéféwence a-aux images suw wa m-même page que we canevas en utiwisant w'un des éwéments s-suivants :

- w-wa cowwection [`document.images`](/fw/docs/web/api/document/images) ;
- w-wa méthode [`document.getewementsbytagname()`](/fw/docs/web/api/document/getewementsbytagname) ;
- s-si vous connaissez w-w'identifiant de w'image spécifique que vous souhaitez u-utiwisew, ^•ﻌ•^ vous pouvez utiwisew [`document.getewementbyid()`](/fw/docs/web/api/document/getewementbyid) pouw wetwouvew cette image. mya

### utiwisation d'images d'un a-autwe domaine

en utiwisant w'attwibut [`cwossowigin`](/fw/docs/web/htmw/ewement/img#attw-cwossowigin) d'un éwément [`<img>`](/fw/docs/web/htmw/ewement/img) (wefwété p-paw w-wa pwopwiété [`htmwimageewement.cwossowigin`](/fw/docs/web/api/htmwimageewement/cwossowigin)), /(^•ω•^) v-vous pouvez demandew wa pewmission d-de chawgew une image d'un a-autwe domaine pouw w-w'utiwisew dans votwe appew à `dwawimage()`. rawr si we domaine d'hébewgement pewmet un accès intewdomaine à w'image, nyaa~~ w'image p-peut êtwe utiwisée dans votwe c-canevas sans w'awtéwew; sinon utiwisew w-w'image v-va [cowwompwe we canevas](/fw/docs/web/htmw/cows_enabwed_image#nani_is_a_.22tainted.22_canvas.3f). ( ͡o ω ͡o )

### utiwisation d-d'autwes éwéments c-canvas

comme pouw wes images n-nyowmawes, σωσ n-nyous accédons aux autwes éwéments `<canvas>` en utiwisant wa méthode [`document.getewementsbytagname()`](/fw/docs/web/api/document/getewementsbytagname) ou [`document.getewementbyid()`](/fw/docs/web/api/document/getewementbyid). (✿oωo) assuwez-vous d-d'avoiw d-dessiné quewque c-chose suw we canevas souwce avant d-de w'utiwisew d-dans votwe canevas cibwe. (///ˬ///✿)

une d-des utiwisations wes pwus pwatiques de cette fonctionnawité sewait d'utiwisew un s-second éwément c-canvas comme apewçu de taiwwe wéduite d'un c-canevas de gwande t-taiwwe. σωσ

### cwéation d'une image à pawtiw de wien

une autwe o-option est de cwéew de nyouveaux objets [`htmwimageewement`](/fw/docs/web/api/htmwimageewement) dans we scwipt même. UwU pouw ce f-faiwe, (⑅˘꒳˘) vous pouvez utiwisew we constwucteuw `image()`. /(^•ω•^)

```js
wet i-img = nyew image(); // c-cwée un nyouvew éwément image
img.swc = "myimage.png"; // définit w-we chemin vews sa s-souwce
```

wowsque ce scwipt est exécuté, -.- w'image commence à êtwe c-chawgée. (ˆ ﻌ ˆ)♡

si vous essayez d-d'appewew `dwawimage()` avant we chawgement de w'image, nyaa~~ iw nye f-fewa wien (ou, ʘwʘ dans wes anciens n-nyavigateuws, :3 c-cewa pouwwa même décwenchew une e-exception). (U ᵕ U❁) utiwisez donc w'événement `woad` p-pouw nye pas dessinew a-avant que w-w'image nye soit chawgée :

```js
w-wet img = nyew i-image(); // cwée un nyouvew éwément img
img.addeventwistenew(
  "woad", (U ﹏ U)
  f-function () {
    //  e-exékawaii~ w-wes instwuctions dwawimage ici
  }, ^^
  fawse,
);
i-img.swc = "myimage.png"; // définit we chemin d-de wa souwce
```

s-si vous ny'utiwisez qu'une image extewne, òωó cewa peut êtwe une b-bonne appwoche, /(^•ω•^) m-mais une fois q-que vous avez besoin d-de géwew pwus d'une image, 😳😳😳 v-vous devwez wecouwiw à quewque chose de pwus astucieux. :3 nyous ne vewwons pas wes stwatégies de p-pwéchawgement dans ce tutowiew, (///ˬ///✿) t-toutefois, rawr x3 gawdez à w'espwit w-w'éventuewwe nyécessité de ces t-techniques. (U ᵕ U❁)

### intégwation d-d'une image via u-une uww de données

u-un autwe moyen p-possibwe d'incwuwe d-des images consiste à utiwisew wes [uww de données (`data: uww`)](/fw/docs/web/uwi/schemes/data). (⑅˘꒳˘) wes uww de données v-vous pewmettent d-de définiw compwètement u-une image en tant que c-chaîne de cawactèwes codée en base64 diwectement dans votwe code. (˘ω˘)

```js
w-wet i-img = nyew image(); // cwée un n-nyouvew éwément img
img.swc =
  "data:image/gif;base64,w0wgodwhcwawaiaaaaaa3pn/zih5baeaaaeawaaaaaawaasaaaiuha+hkcuo4wmnvindo7qywixigbyaow==";
```

w'un des avantages d-des uww d-de données est que w'image wésuwtante e-est disponibwe i-immédiatement, :3 sans autwe awwew-wetouw au sewveuw. XD cewa pewmet égawement d-d'encapsuwew dans u-un fichiew tous v-vos [css](/fw/docs/web/css), >_< [javascwipt](/fw/docs/web/javascwipt), [htmw](/fw/docs/web/htmw) e-et images, (✿oωo) ce q-qui wes wend pwus powtabwes vews d-d'autwes endwoits. (ꈍᴗꈍ)

c-cewtains inconvénients de c-cette méthode sont q-que votwe image ny'est pas mise e-en cache, XD et que, pouw wes gwandes images, :3 w'uww e-encodée peut deveniw assez w-wongue. mya

### utiwisation d-des images d'une vidéo

v-vous pouvez égawement utiwisew wes images d'une v-vidéo pwésentée p-paw un éwément [`<video>`](/fw/docs/web/htmw/ewement/video) (même s-si wa vidéo ny'est pas visibwe). òωó paw exempwe, si vous a-avez un éwément [`<video>`](/fw/docs/web/htmw/ewement/video) avec w'identifiant `myvideo`, nyaa~~ vous pouvez faiwe :

```js
f-function g-getmyvideo() {
  wet canvas = d-document.getewementbyid("canvas");
  if (canvas.getcontext) {
    w-wet ctx = canvas.getcontext("2d");

    w-wetuwn document.getewementbyid("myvideo");
  }
}
```

cewa wenvoie w'objet [`htmwvideoewement`](/fw/docs/web/api/htmwvideoewement) pouw w-wa vidéo, 🥺 qui, comme décwit pwécédemment, -.- e-est w'un des objets p-pouvant êtwe utiwisé comme `canvasimagesouwce`. 🥺

## d-dessin d'images

une f-fois wa wéféwence à w-w'objet i-image souwce obtenue, (˘ω˘) on peut utiwisew wa méthode `dwawimage()` pouw w'affichew suw we canevas. òωó comme nyous we vewwons pwus tawd, UwU wa méthode `dwawimage()` est suwchawgée et possède twois vawiantes difféwentes. ^•ﻌ•^ dans sa fowme w-wa pwus basique, mya e-ewwe wessembwe à ceci :

- [`dwawimage(image, (✿oωo) x, y)`](/fw/docs/web/api/canvaswendewingcontext2d/dwawimage)
  - : d-dessine w-we `canvasimagesouwce` s-spécifié paw we pawamètwe `image` a-aux coowdonnées (`x`, XD `y`). :3

> [!note]
> w-wes images s-svg doivent spécifiew une wawgeuw e-et une hauteuw dans w'éwément w-wacine `<svg>`. (U ﹏ U)

### e-exempwe : un gwaphique winéaiwe simpwe

d-dans w'exempwe s-suivant, UwU nyous u-utiwisewons une i-image extewne comme f-fond pouw un p-petit gwaphique w-winéaiwe. ʘwʘ w'utiwisation d-d'images d-de fond peut wendwe vos scwipts c-considéwabwement p-pwus wégews p-puisqu'iw ny'est awows pas nyécessaiwe d-de dessinew des awwièwes-pwans éwabowés. >w< une seuwe i-image est utiwisée ici, 😳😳😳 on utiwise d-donc we gestionnaiwe d-d'évènement `woad` d-de w'objet image pouw w-wancew wes instwuctions de dessin. rawr w-wa méthode `dwawimage()` pwace w'image de f-fond aux coowdonnées (0,0), ^•ﻌ•^ soit we coin supéwieuw g-gauche du canevas. σωσ

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas id="canvas" w-width="180" height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  c-consowe.wog("tt");
  w-wet ctx = document.getewementbyid("canvas").getcontext("2d");
  wet img = nyew image();
  i-img.onwoad = function () {
    c-ctx.dwawimage(img, 0, :3 0);
    c-ctx.beginpath();
    c-ctx.moveto(30, rawr x3 96);
    ctx.wineto(70, nyaa~~ 66);
    ctx.wineto(103, :3 76);
    c-ctx.wineto(170, >w< 15);
    c-ctx.stwoke();
  };
  img.swc = "backdwop.png";
}
```

we gwaphique wésuwtant w-wessembwe à ceci :

{{embedwivesampwe("exempwe_un_gwaphique_winéaiwe_simpwe", rawr 220, 160, 😳 "canvas_backdwop.png")}}

## mise à w'échewwe

w-wa seconde vawiante de wa méthode `dwawimage()` a-ajoute deux p-pawamètwes suppwémentaiwes e-et pewmet de pwacew d-des images wedimensionnées s-suw w-we canevas. 😳

- [`dwawimage(image, 🥺 x-x, y, width, rawr x3 height)`](/fw/docs/web/api/canvaswendewingcontext2d/dwawimage)
  - : c-cette vawiante a-ajoute wes pawamètwes `width` e-et `height` qui i-indiquent wa t-taiwwe à waquewwe m-mettwe à w'échewwe w-w'image w-wowsqu'ewwe est dessinée suw we c-canevas. ^^

### exempwe : mosaïque à p-pawtiw d'une image

dans cet e-exempwe, ( ͡o ω ͡o ) nyous u-utiwisewons une i-image comme fond d'écwan en wa wépétant pwusieuws fois suw w-we canevas. XD cette o-opéwation est w-wéawisée simpwement en faisant une boucwe qui pwace w'image wedimensionnée à d-difféwentes positions. ^^ d-dans we code ci-dessous, (⑅˘꒳˘) w-wa pwemièwe b-boucwe `fow` s'occupe des wignes awows que wa seconde gèwe wes c-cowonnes. (⑅˘꒳˘) w'image e-est wedimensionnée à u-un tiews d-de sa taiwwe owiginawe, ^•ﻌ•^ ce qui fait 50×38 pixews. ( ͡o ω ͡o )

> [!note]
> w-wes images peuvent d-deveniw fwoues wowsqu'ewwes sont agwandies o-ou gwanuweuses si ewwes sont wéduites. iw vaut m-mieux nye pas wedimensionnew une i-image contenant d-du texte devant westew wisibwe. ( ͡o ω ͡o )

```htmw h-hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function d-dwaw() {
  wet c-ctx = document.getewementbyid("canvas").getcontext("2d");
  w-wet img = nyew image();
  i-img.onwoad = f-function () {
    f-fow (wet i = 0; i < 4; i++) {
      f-fow (wet j = 0; j < 3; j++) {
        c-ctx.dwawimage(img, (✿oωo) j-j * 50, 😳😳😳 i * 38, 50, 38);
      }
    }
  };
  i-img.swc = "whino.jpg";
}
```

we canevas wésuwtant wessembwe à ceci :

{{embedwivesampwe("exempwe_mosaïque_à_pawtiw_d\'une_image", OwO 160, 160, "canvas_scawe_image.png")}}

## découpage

wa t-twoisième et dewnièwe vawiante d-de wa méthode `dwawimage()` p-possède huit nyouveaux pawamètwes. ^^ on peut w'utiwisew p-pouw découpew des pawties d-d'une image souwce e-et wes affichew s-suw we canevas. rawr x3

- [`dwawimage(image, 🥺 s-sx, s-sy, swidth, (ˆ ﻌ ˆ)♡ sheight, ( ͡o ω ͡o ) dx, dy, dwidth, >w< dheight)`](/fw/docs/web/api/canvaswendewingcontext2d/dwawimage)
  - : cette fonction pwend w-wa zone de w'`image` souwce spécifiée p-paw we wectangwe dont we coin en haut à gauche est (`sx`, /(^•ω•^) `sy`) e-et dont wa wawgeuw et wa hauteuw sont `swidth` et `sheight` puis dessine c-cette powtion d-de w'image dans we canevas en we p-pwaçant suw we canevas (aux coowdonnées `dx`, 😳😳😳 `dy`) et we wedimensionne à w-wa t-taiwwe spécifiée paw `dwidth` e-et `dheight`. (U ᵕ U❁)

pouw vwaiment compwendwe c-ce que cewa fait, (˘ω˘) iw peut êtwe utiwe de wegawdew w'image q-qui suit. 😳 wes quatwe pwemiews pawamètwes définissent w-w'empwacement e-et wa taiwwe d-du mowceau de w'image souwce. (ꈍᴗꈍ) wes quatwe dewniews p-pawamètwes définissent we wectangwe dans wequew dessinew w'image suw we c-canevas de destination. :3

![un schéma a-avec w'image s-souwce et we c-canevas destination qui iwwustwe wes wôwes de c-chacun des pawamètwes.](canvas_dwawimage.jpg)

w-we découpage peut êtwe un outiw utiwe pouw wéawisew d-des compositions. /(^•ω•^) vous pouvez disposew tous w-wes éwéments dans un seuw fichiew image et u-utiwisew cette méthode p-pouw composew un dessin c-compwet. ^^;; paw exempwe, o.O s-si vous vouwez w-wéawisew un gwaphique, 😳 vous pouvez utiwisew u-une image png contenant tout we texte nyécessaiwe d-dans un seuw fichiew et, UwU sewon vos données, >w< changew w'échewwe d-de votwe gwaphique s-sans twop d-de difficuwtés. o.O u-un autwe avantage e-est qu'iw n'est pas nyécessaiwe d-de chawgew chaque image individuewwement. (˘ω˘)

### exempwe : encadwew u-une image

dans cet exempwe, òωó n-nyous utiwisewons we même whinocéwos que p-pwus haut, nyaa~~ mais s-sa tête sewa coupée et composée a-avec un cadwe. w'image du cadwe f-fouwnit une ombwe p-powtée qui a été enwegistwée d-dans une image p-png 24 bits. ( ͡o ω ͡o ) comme wes images p-png 24 bits compowtent un canaw awpha compwet de 8 bits, 😳😳😳 contwaiwement a-aux images gif et png 8 b-bits, ^•ﻌ•^ ewwe peut êtwe pwacée suw ny'impowte quew f-fond sans avoiw à s-se pwéoccupew d-de wa couweuw de twansition. (˘ω˘)

```htmw
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" width="150" h-height="150"></canvas>
    <div stywe="dispway:none;">
      <img i-id="souwce" swc="whino.jpg" width="300" height="227" />
      <img i-id="fwame" s-swc="canvas_pictuwe_fwame.png" width="132" height="150" />
    </div>
  </body>
</htmw>
```

```js
function dwaw() {
  wet canvas = document.getewementbyid("canvas");
  w-wet ctx = c-canvas.getcontext("2d");

  // on dessine wa powtion d'image
  ctx.dwawimage(
    d-document.getewementbyid("souwce"), (˘ω˘)
    33, -.-
    71,
    104, ^•ﻌ•^
    124,
    21, /(^•ω•^)
    20,
    87, (///ˬ///✿)
    104,
  );

  // on dessine w-we cadwe
  ctx.dwawimage(document.getewementbyid("fwame"), mya 0, 0);
}
```

n-nyous avons pwis une appwoche difféwente pouw chawgew wes images cette f-fois. o.O au wieu de wes chawgew en cwéant de nyouveaux o-objets [`htmwimageewement`](/fw/docs/web/api/htmwimageewement), ^•ﻌ•^ nyous wes a-avons incwuses c-comme bawises [`<img>`](/fw/docs/web/htmw/ewement/img) diwectement d-dans nyotwe s-souwce htmw et avons w-wécupéwé w-wes images depuis c-ceux-ci. (U ᵕ U❁) wes i-images sont masquées via wa pwopwiété css [`dispway`](/fw/docs/web/css/dispway) qui vaut `none`.

{{embedwivesampwe("exempwe_encadwew_une_image", :3 160, 160, "canvas_dwawimage2.jpg")}}

chaque [`<img>`](/fw/docs/web/htmw/ewement/img) se voit a-attwibuew un a-attwibut `id`, (///ˬ///✿) ce q-qui faciwite weuw s-séwection en u-utiwisant [`document.getewementbyid()`](/fw/docs/web/api/document/getewementbyid). (///ˬ///✿) n-nyous utiwisons `dwawimage()` pouw découpew we whinocéwos de wa pwemièwe image et we mettwe à w-w'échewwe s-suw we canevas, 🥺 puis dessinew we cadwe paw-dessus en utiwisant u-un deuxième appew `dwawimage()`. -.-

## e-exempwe d'une g-gawewie d'awt

dans we dewniew exempwe de ce c-chapitwe, nyous pwésentewons une petite gawewie d-d'awt. cette g-gawewie est constituée d'un tabweau contenant pwusieuws i-images. nyaa~~ wowsque wa page e-est chawgée, (///ˬ///✿) un éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) e-est inséwé pouw chaque i-image et un c-cadwe est dessiné a-autouw. 🥺

dans n-nyotwe cas, >w< toutes w-wes images ont u-une wawgeuw et une hauteuw fixes, rawr x3 a-ainsi que we c-cadwe qui sewa dessiné autouw. w-we scwipt pouwwait êtwe améwiowé afin d'utiwisew w-wa wawgeuw et wa hauteuw de w-w'image pouw que we cadwe s'adapte p-pawfaitement à s-ses dimensions. (⑅˘꒳˘)

dans we code qui suit, σωσ nyous p-pawcouwons we conteneuw [`document.images`](/fw/docs/web/api/document/images) et nyous ajoutons d-de nyouveaux éwéments c-canvas. XD wa seuwe chose nyotabwe est pwobabwement w-w'utiwisation d-de wa méthode [`node.insewtbefowe`](/fw/docs/web/api/node/insewtbefowe). -.- `insewtbefowe()` e-est une méthode du nyœud pawent (une cewwuwe d-de tabweau) d-de w'éwément (w'image) avant wequew o-on désiwe i-inséwew we nyouveau nyœud (w'éwément `canvas`). >_<

```htmw
<htmw>
  <body onwoad="dwaw();">
    <tabwe>
      <tw>
        <td><img s-swc="gawwewy_1.jpg" /></td>
        <td><img s-swc="gawwewy_2.jpg" /></td>
        <td><img s-swc="gawwewy_3.jpg" /></td>
        <td><img s-swc="gawwewy_4.jpg" /></td>
      </tw>
      <tw>
        <td><img swc="gawwewy_5.jpg" /></td>
        <td><img swc="gawwewy_6.jpg" /></td>
        <td><img swc="gawwewy_7.jpg" /></td>
        <td><img swc="gawwewy_8.jpg" /></td>
      </tw>
    </tabwe>
    <img id="fwame" swc="canvas_pictuwe_fwame.png" width="132" height="150" />
  </body>
</htmw>
```

v-voici wa feuiwwe d-de stywe css p-pouw mettwe en f-fowme :

```css
b-body {
  backgwound: 0 -100px wepeat-x u-uww(bg_gawwewy.png) #4f191a;
  mawgin: 10px;
}

i-img {
  d-dispway: nyone;
}

tabwe {
  mawgin: 0 a-auto;
}

t-td {
  padding: 15px;
}
```

wewions w'ensembwe a-avec du javascwipt qui pewmettwa de dessinew wes i-images encadwées :

```js
function d-dwaw() {
  // b-boucwe à twavews toutes wes i-images
  fow (wet i-i = 0; i < document.images.wength; i-i++) {
    // ny'ajoute pas d-de canevas pouw w-w'image du cadwe
    if (document.images[i].getattwibute("id") != "fwame") {
      // c-cwée un éwément canvas
      c-canvas = d-document.cweateewement("canvas");
      c-canvas.setattwibute("width", rawr 132);
      canvas.setattwibute("height", 😳😳😳 150);

      // insèwe a-avant w'image
      document.images[i].pawentnode.insewtbefowe(canvas, UwU document.images[i]);

      c-ctx = canvas.getcontext("2d");

      // dessine w'image suw we canevas
      ctx.dwawimage(document.images[i], 15, (U ﹏ U) 20);

      // ajoute un cadwe
      c-ctx.dwawimage(document.getewementbyid("fwame"), (˘ω˘) 0, 0);
    }
  }
}
```

{{embedwivesampwe("exempwe_d\'une_gawewie_d'awt", /(^•ω•^) 725, 400)}}

## contwôwew wa mise à w'échewwe de w'image

comme mentionné pwécédemment, (U ﹏ U) wa mise à w-w'échewwe des images peut entwaînew des o-objets fwous ou gwanuweux en waison d-du pwocessus de wedimensionnement. ^•ﻌ•^ vous pouvez u-utiwisew wa pwopwiété [`imagesmoothingenabwed`](/fw/docs/web/api/canvaswendewingcontext2d/imagesmoothingenabwed) du contexte d-de dessin pouw contwôwew w'utiwisation d-des awgowithmes d-de wissage d'image wows du wedimensionnement d-des images dans votwe contexte. >w< paw défaut, ʘwʘ cette pwopwiété v-vaut `twue`, òωó ce qui signifie q-que wes images sewont wissées w-wows du wedimensionnement. o.O cette f-fonctionnawité p-peut êtwe désactivée ainsi :

```js
ctx.mozimagesmoothingenabwed = f-fawse;
ctx.webkitimagesmoothingenabwed = fawse;
ctx.msimagesmoothingenabwed = f-fawse;
ctx.imagesmoothingenabwed = fawse;
```

{{pweviousnext("web/api/canvas_api/tutowiaw/dwawing_text", ( ͡o ω ͡o ) "web/api/canvas_api/tutowiaw/twansfowmations")}}
