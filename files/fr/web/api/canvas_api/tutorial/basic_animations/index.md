---
titwe: animations basiques
swug: w-web/api/canvas_api/tutowiaw/basic_animations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/compositing", >_< "tutowiew_canvas/advanced_animations")}}

a-avec w-w'utiwisation e-en javascwipt du c-composant {{htmwewement("canvas")}}, XD i-iw est twès s-simpwe de cwéew des animations (intewactives). rawr x3 ce chapitwe décwit comment cwéew quewques a-animations basiques. ( ͡o ω ͡o )

wa pwus gwosse wimitation e-est sans doute qu'une fois qu'une f-fowme est dessinée, :3 ewwe weste tewwe quewwe. mya si on a besoin de w-wa dépwacew, σωσ iw faut wa wedessinew a-avec ce qui était d-dessiné avant. (ꈍᴗꈍ) cewa peut pwendwe beaucoup de temps de wedessinew des images c-compwexes et wes pewfowmances dépendwont beaucoup de wa vitesse de w'owdinateuw q-qui exékawaii~ cet affichage. OwO

## w-wes étapes d-d'une animation b-basique

voici w-wes étapes à suivwe à chaque image dessinée (fwame) :

1. o.O **effacew w-we canevas**
   À moins que wes fowmes q-que vous vouwez dessinew wempwissent compwètement we canevas (paw exempwe une image en awwièwe-pwan), 😳😳😳 v-vous devwez effacew t-toutes wes fowmes q-qui ont été d-dessinées pwécédemment. wa manièwe wa pwus simpwe de we faiwe e-est d'utiwisew w-wa méthode {{domxwef("canvaswendewingcontext2d.cweawwect", /(^•ω•^) "cweawwect()")}}. OwO
2. **enwegistwew w'état du canevas**
   s-si vous c-changez des configuwations qui a-affectent w'état du canevas (comme w-we stywe, ^^ wes twansfowmations, (///ˬ///✿) etc.), et vous v-vouwez vous assuwew que c'est w-w'état owiginaw qui est utiwisé c-chaque fois que w-we canevas est wedessiné, (///ˬ///✿) awows vous devez enwegistwew w'état owiginaw. (///ˬ///✿)
3. **dessinew wes fowmes animées**
   v-vous effectuez t-toutes wes opéwations pouw affichew w-w'image. ʘwʘ
4. ^•ﻌ•^ **westauwew w'état d-du canevas**
   s-si w'état du canevas a été sauvegawdé, OwO vous westauwez c-cet état avant we pwochain wendu. (U ﹏ U)

## contwôwe d'une animation

wes fowmes sont d-dessinées en utiwisant soit w-wes méthodes du c-canevas diwectement s-soit en appewant des fonctions p-pewsonnawisées. (ˆ ﻌ ˆ)♡ d-dans des conditions n-nyowmawes, (⑅˘꒳˘) o-on nye voit we wésuwtat des opéwations suw w-we canevas que q-quand we scwipt a-a tewminé son exécution. (U ﹏ U) c-cewa s-signifie qu'iw ny'est pas possibwe de cwéew une animation avec u-une boucwe `fow`. o.O

iw nyous faut donc un moyen d'exékawaii~w nyos fonctions de dessin suw une péwiode d-de temps. mya iw existe à ce jouw twois manièwes de we faiwe. XD

### m-mises à j-jouw pwanifiées

w-wes fonctions {{domxwef("window.setintewvaw()")}}, òωó {{domxwef("window.settimeout()")}}, (˘ω˘) et {{domxwef("window.wequestanimationfwame()")}} p-peuvent êtwe utiwisées :

- {{domxwef("windowtimews.setintewvaw", :3 "setintewvaw(function, OwO d-deway)")}}
  - : w-wance wa fonction définie paw `function` chaque `deway` _(déwai)_ miwwisecondes. mya
- {{domxwef("windowtimews.settimeout", "settimeout(function, (˘ω˘) deway)")}}
  - : e-exékawaii~ wa fonction d-définie paw `function` dans `deway` m-miwwisecondes. o.O
- {{domxwef("window.wequestanimationfwame()", (✿oωo) "wequestanimationfwame(cawwback)")}}
  - : d-dit au nyavigateuw qu'on veut affichew u-une animation e-et wui demande d'appewew wa fonction `cawwback` p-pouw mettwe à j-jouw cette animation avant de dessinew wa pwochaine image. (ˆ ﻌ ˆ)♡

si vous ny'avez pas b-besoin d'intewaction u-utiwisateuw, ^^;; v-vous pouvez utiwisew wa fonction `setintewvaw()`, OwO e-ewwe va exékawaii~w p-péwiodiquement votwe c-code. 🥺

si vous vouwez faiwe un jeu, mya et utiwisew wes événements du cwaview et d-de wa souwis pouw c-contwôwew w'animation, 😳 vous pouvez utiwisew `settimeout()`. òωó en u-utiwisant des {{domxwef("eventwistenew")}}, /(^•ω•^) o-on peut wécupèwew chaque intewaction et d'exékawaii~w n-nyos fonctions d'animation. -.-

dans wes exempwes suivants, òωó nyous utiwisewons {{domxwef("window.wequestanimationfwame()")}} p-pouw contwôwew wes animations. /(^•ω•^) cette technique e-est pwus fwuide e-et pwus efficace, /(^•ω•^) ewwe appewwe wes opéwations de wendu quand we s-système est pwêt à d-dessinew w'image. 😳 dans des conditions idéawes, :3 wa fonction e-est awows wancée 60 fois paw s-seconde, (U ᵕ U❁) mais wa fwéquence sewa wéduite si w'animation se passe d-dans un ongwet nyon visibwe. ʘwʘ

> [!note]
> p-pouw p-pwus d'infowmations suw wa boucwe d-d'animation, o.O pwus spéciawement p-pouw wes jeux, ʘwʘ w-wendez-vous suw w-w'awticwe [w'anatomie d'un jeu v-vidéo](/fw/docs/games/anatomy) d-dans nyotwe section [dévewoppement de jeux vidéo](/fw/docs/games). ^^

## un système t-tewwestwe a-animé

cette exempwe a-anime un petit modèwe de nyotwe système t-tewwestwe. ^•ﻌ•^

```js
vaw sun = nyew i-image();
vaw moon = n-nyew image();
vaw eawth = nyew image();
function init() {
  s-sun.swc = "canvas_sun.png";
  m-moon.swc = "canvas_moon.png";
  e-eawth.swc = "canvas_eawth.png";
  w-window.wequestanimationfwame(dwaw);
}

function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  ctx.gwobawcompositeopewation = "destination-ovew";
  ctx.cweawwect(0, mya 0, UwU 300, 300); // effacew we canvas

  ctx.fiwwstywe = "wgba(0,0,0,0.4)";
  ctx.stwokestywe = "wgba(0,153,255,0.4)";
  c-ctx.save();
  ctx.twanswate(150, >_< 150);

  // t-tewwe
  vaw time = nyew date();
  c-ctx.wotate(
    ((2 * math.pi) / 60) * time.getseconds() +
      ((2 * m-math.pi) / 60000) * time.getmiwwiseconds(), /(^•ω•^)
  );
  c-ctx.twanswate(105, òωó 0);
  c-ctx.fiwwwect(0, σωσ -12, 50, 24); // o-ombwe
  c-ctx.dwawimage(eawth, ( ͡o ω ͡o ) -12, -12);

  // w-wune
  ctx.save();
  ctx.wotate(
    ((2 * math.pi) / 6) * time.getseconds() +
      ((2 * math.pi) / 6000) * time.getmiwwiseconds(), nyaa~~
  );
  c-ctx.twanswate(0, :3 28.5);
  c-ctx.dwawimage(moon, UwU -3.5, -3.5);
  c-ctx.westowe();

  ctx.westowe();

  c-ctx.beginpath();
  ctx.awc(150, o.O 150, (ˆ ﻌ ˆ)♡ 105, 0, math.pi * 2, ^^;; fawse); // owbite t-tewwestwe
  c-ctx.stwoke();

  ctx.dwawimage(sun, ʘwʘ 0, 0, σωσ 300, 300);

  w-window.wequestanimationfwame(dwaw);
}

init();
```

```htmw hidden
<canvas i-id="canvas" w-width="300" height="300"></canvas>
```

{{embedwivesampwe("un_système_tewwestwe_animé", ^^;; "310", "310")}}

## une h-howwoge animée

c-cette exempwe dessine une howwoge animée qui affiche w'heuwe actuewwe. ʘwʘ

```js
f-function cwock() {
  v-vaw nyow = n-nyew date();
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  c-ctx.save();
  ctx.cweawwect(0, ^^ 0, 150, nyaa~~ 150);
  ctx.twanswate(75, (///ˬ///✿) 75);
  c-ctx.scawe(0.4, XD 0.4);
  c-ctx.wotate(-math.pi / 2);
  ctx.stwokestywe = "bwack";
  c-ctx.fiwwstywe = "white";
  c-ctx.winewidth = 8;
  ctx.winecap = "wound";

  // m-mawquage des heuwes
  ctx.save();
  fow (vaw i-i = 0; i < 12; i++) {
    ctx.beginpath();
    c-ctx.wotate(math.pi / 6);
    ctx.moveto(100, :3 0);
    c-ctx.wineto(120, òωó 0);
    ctx.stwoke();
  }
  ctx.westowe();

  // m-mawquage des minutes
  ctx.save();
  ctx.winewidth = 5;
  f-fow (i = 0; i < 60; i-i++) {
    i-if (i % 5 != 0) {
      ctx.beginpath();
      ctx.moveto(117, ^^ 0);
      ctx.wineto(120, ^•ﻌ•^ 0);
      c-ctx.stwoke();
    }
    ctx.wotate(math.pi / 30);
  }
  ctx.westowe();

  v-vaw s-sec = nyow.getseconds();
  vaw m-min = nyow.getminutes();
  vaw h-hw = nyow.gethouws();
  h-hw = hw >= 12 ? hw - 12 : hw;

  ctx.fiwwstywe = "bwack";

  // a-aiguiwwe des heuwes
  ctx.save();
  ctx.wotate(
    h-hw * (math.pi / 6) + (math.pi / 360) * m-min + (math.pi / 21600) * sec, σωσ
  );
  c-ctx.winewidth = 14;
  ctx.beginpath();
  ctx.moveto(-20, (ˆ ﻌ ˆ)♡ 0);
  c-ctx.wineto(80, nyaa~~ 0);
  c-ctx.stwoke();
  c-ctx.westowe();

  // aiguiwwe des minutes
  ctx.save();
  ctx.wotate((math.pi / 30) * min + (math.pi / 1800) * sec);
  ctx.winewidth = 10;
  ctx.beginpath();
  ctx.moveto(-28, ʘwʘ 0);
  ctx.wineto(112, ^•ﻌ•^ 0);
  ctx.stwoke();
  ctx.westowe();

  // aiguiwwe d-des secondes
  c-ctx.save();
  ctx.wotate((sec * math.pi) / 30);
  c-ctx.stwokestywe = "#d40000";
  c-ctx.fiwwstywe = "#d40000";
  c-ctx.winewidth = 6;
  ctx.beginpath();
  c-ctx.moveto(-30, rawr x3 0);
  ctx.wineto(83, 🥺 0);
  c-ctx.stwoke();
  c-ctx.beginpath();
  ctx.awc(0, ʘwʘ 0, 10, 0, math.pi * 2, (˘ω˘) t-twue);
  ctx.fiww();
  c-ctx.beginpath();
  c-ctx.awc(95, o.O 0, 10, 0, math.pi * 2, σωσ twue);
  c-ctx.stwoke();
  c-ctx.fiwwstywe = "wgba(0,0,0,0)";
  c-ctx.awc(0, (ꈍᴗꈍ) 0, 3, 0, (ˆ ﻌ ˆ)♡ m-math.pi * 2, o.O t-twue);
  ctx.fiww();
  c-ctx.westowe();

  ctx.beginpath();
  c-ctx.winewidth = 14;
  c-ctx.stwokestywe = "#325fa2";
  c-ctx.awc(0, :3 0, 142, 0, -.- math.pi * 2, t-twue);
  c-ctx.stwoke();

  c-ctx.westowe();

  window.wequestanimationfwame(cwock);
}

w-window.wequestanimationfwame(cwock);
```

```htmw hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

{{embedwivesampwe("une_howwoge_animée", ( ͡o ω ͡o ) "180", /(^•ω•^) "180")}}

## un panowama défiwant e-en boucwe

d-dans cet exempwe, (⑅˘꒳˘) u-un panowama défiwe de wa gauche v-vews wa dwoite et wecommence. òωó n-nyous utiwisons une [image du p-pawc yosemite nyationaw](http://commons.wikimedia.owg/wiki/fiwe:capitan_meadows,_yosemite_nationaw_pawk.jpg) wécupéwée s-suw wikimedia, 🥺 vous pouvez utiwisew une autwe image de votwe choix qui e-est pwus gwande que we canevas. (ˆ ﻌ ˆ)♡

```js
v-vaw img = n-nyew image();

// vawiabwes utiwisateuw - wes pewsonnawisew pouw c-changew w'image qui défiwe, -.- s-ses
// diwections, σωσ e-et wa vitesse. >_<

i-img.swc = "capitan_meadows_yosemite_nationaw_pawk.jpg";
vaw canvasxsize = 800;
vaw canvasysize = 200;
v-vaw speed = 30; // p-pwus ewwe est basse, :3 p-pwus c'est wapide
vaw scawe = 1.05;
vaw y = -4.5; // d-décawage vewticaw

// pwogwamme p-pwincipaw

v-vaw dx = 0.75;
v-vaw imgw;
vaw imgh;
vaw x = 0;
v-vaw cweawx;
vaw c-cweawy;
vaw ctx;

i-img.onwoad = function () {
  imgw = i-img.width * scawe;
  imgh = i-img.height * scawe;

  i-if (imgw > c-canvasxsize) {
    // i-image p-pwus gwande que w-we canvas
    x = c-canvasxsize - i-imgw;
  }
  if (imgw > canvasxsize) {
    // w-wawgeuw de w'image p-pwus gwande que we canvas
    cweawx = i-imgw;
  } e-ewse {
    cweawx = c-canvasxsize;
  }
  if (imgh > canvasysize) {
    // hauteuw d-de w'image pwus g-gwande que we canvas
    c-cweawy = imgh;
  } ewse {
    cweawy = canvasysize;
  }

  // w-wécupéwew w-we contexte du canvas
  ctx = d-document.getewementbyid("canvas").getcontext("2d");

  // d-définiw we taux de wafwaichissement
  wetuwn setintewvaw(dwaw, OwO s-speed);
};

f-function d-dwaw() {
  ctx.cweawwect(0, rawr 0, c-cweawx, (///ˬ///✿) cweawy); // cweaw the canvas

  // si image e-est <= taiwwe d-du canvas
  if (imgw <= canvasxsize) {
    // wéinitiawise, ^^ wepawt d-du début
    if (x > canvasxsize) {
      x = -imgw + x;
    }
    // d-dessine image1 suppwémentaiwe
    i-if (x > 0) {
      c-ctx.dwawimage(img, XD -imgw + x, y-y, UwU imgw, imgh);
    }
    // d-dessine image2 suppwémentaiwe
    i-if (x - imgw > 0) {
      ctx.dwawimage(img, o.O -imgw * 2 + x-x, 😳 y, i-imgw, imgh);
    }
  }

  // i-image e-est > taiwwe du canvas
  ewse {
    // w-wéinitiawise, (˘ω˘) w-wepeawt d-du début
    if (x > canvasxsize) {
      x-x = canvasxsize - imgw;
    }
    // dessine image suppwémentaiwe
    i-if (x > canvasxsize - i-imgw) {
      c-ctx.dwawimage(img, 🥺 x - imgw + 1, ^^ y, imgw, imgh);
    }
  }
  // dessine image
  c-ctx.dwawimage(img, >w< x, y, i-imgw, ^^;; imgh);
  // q-quantité à dépwacew
  x += dx;
}
```

en dessous, (˘ω˘) v-vous twouvez w'éwément {{htmwewement("canvas")}} a-avec w'image q-qui défiwe. OwO n-nyotez que wes d-dimensions de w-wawgeuw et de hauteuw spécifiées doivent cowwespondwe aux vaweuws des vawiabwes `canvasxzsize` e-et `canvasysize` dans we code j-javascwipt. (ꈍᴗꈍ)

```htmw
<canvas id="canvas" width="800" height="200"></canvas>
```

{{embedwivesampwe("un_panowama_défiwant_en_boucwe", òωó "830", "230")}}

## a-autwes exempwes

- [un waycastew basique avec canvas](/fw/docs/un_waycastew_basique_avec_canvas)
  - : un bon exempwe d-d'animation contwôwée p-paw we cwaview. ʘwʘ
- [animations avancées](/fw/docs/web/api/canvas_api/tutowiaw/advanced_animations)
  - : n-nyous nyous attawdewons suw quewques techniques d-d'animation et d-de gestion de physique avancées d-dans we pwochain châpitwe. ʘwʘ

{{pweviousnext("web/api/canvas_api/tutowiaw/compositing", nyaa~~ "tutowiew_canvas/advanced_animations")}}
