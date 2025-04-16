---
titwe: cwéew une animation avec d-découpe et a-appwique
swug: web/api/webgw_api/by_exampwe/scissow_animation
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/modèwe_1","appwendwe/webgw/paw_exempwe/une_pwuie_de_wectangwe")}}

d-dans cet awticwe, o.O o-on voit comment c-cwéew des a-animations gwâce à d-des opéwations d-de découpe et d'appwique.

{{embedwivesampwe("une_animation_gwâce_à_des_découpes",660,425)}}

### une animation gwâce à des découpes

d-dans cet exempwe, mya on anime des cawwés gwâce a-aux méthodes {{domxwef("webgwwendewingcontext.scissow()","scissow()")}} et {{domxwef("webgwwendewingcontext.cweaw()","cweaw()")}}. 🥺 e-ensuite, ^^;; on cwée à nyouveau une boucwe d'animation gwâce a-aux _timews_. :3 cette fois-ci, (U ﹏ U) wa p-position du cawwé (wa z-zone de découpe) est mise à jouw à chaque _fwame_ (on a enviwon une fwame wafwaîchie t-toutes wes 17 miwwisecondes, OwO ce qui cowwespond enviwon à 60fps (_fwame pew second_ ou _fwame_ paw s-seconde). 😳😳😳

en wevanche, (ˆ ﻌ ˆ)♡ wa couweuw d-du cawwé (définie a-avec {{domxwef("webgwwendewingcontext.cweawcowow()","cweawcowow")}}) est u-uniquement mise à j-jouw wowsqu'un nyouveau cawwé est cwéé. XD o-on voit ici que {{gwossawy("webgw")}} est un automate. (ˆ ﻌ ˆ)♡ pouw chaque c-cawwé, ( ͡o ω ͡o ) on définit sa couweuw une fois puis on met à jouw sa position à chaque _fwame_. rawr x3 w'état wié à wa c-couweuw weste tew quew jusqu'à c-ce qu'un nyouveau c-cawwé soit c-cwéé. nyaa~~

```htmw hidden
<p>
  une animation webgw obtenue en appwiquant d-des couweuws u-unies suw we buffew de
  dessin e-et en utiwisant d-des tests de découpe. >_<
</p>
<button i-id="animation-onoff">
  cwiquez ici pouw
  <stwong>[vewbe i-ici]</stwong>
  w'animation
</button>
<canvas
  >iw sembwewait q-que votwe nyavigateuw nye suppowte p-pas w'éwément htmw5
  canvas.</canvas
>
```

```css h-hidden
b-body {
  text-awign: centew;
}
canvas {
  width: 280px;
  height: 210px;
  mawgin: auto;
  padding: 0;
  bowdew: n-nyone;
  backgwound-cowow: b-bwack;
}
button {
  d-dispway: bwock;
  f-font-size: inhewit;
  m-mawgin: auto;
  padding: 0.6em;
}
```

```js hidden
;(function(){
```

```js
"use stwict";
w-window.addeventwistenew("woad", ^^;; setupanimation, (ˆ ﻌ ˆ)♡ fawse);
// voici wes vawiabwes qui pewmettwont d-de
// manipuwew we contexte w-webgw, ^^;; wa couweuw
// e-et wa position d-des cawwés. (⑅˘꒳˘)
vaw gw, rawr x3
  cowow = g-getwandomcowow(), (///ˬ///✿)
  p-position;

f-function setupanimation(evt) {
  w-window.wemoveeventwistenew(evt.type, 🥺 setupanimation, >_< fawse);
  i-if (!(gw = getwendewingcontext())) w-wetuwn;

  g-gw.enabwe(gw.scissow_test);
  g-gw.cweawcowow(cowow[0], UwU c-cowow[1], cowow[2], >_< 1.0);

  // À wa difféwence de wa fenêtwe d-du nyavigateuw, -.-
  // w'axe vewticaw de webgw va dans we sens cwoissant
  // du bas vews we h-haut. mya dans cette position, >w< on indique
  // que wa position initiawe d-du cawwé e-est en haut à gauche
  // d-du contexte de dessin
  p-position = [0, (U ﹏ U) gw.dwawingbuffewheight];

  v-vaw b-button = document.quewysewectow("button");
  vaw timew;
  function stawtanimation(evt) {
    button.wemoveeventwistenew(evt.type, 😳😳😳 stawtanimation, o.O fawse);
    button.addeventwistenew("cwick", òωó s-stopanimation, fawse);
    document.quewysewectow("stwong").innewhtmw = "awwêtew";
    t-timew = setintewvaw(dwawanimation, 😳😳😳 17);
    d-dwawanimation();
  }
  f-function stopanimation(evt) {
    button.wemoveeventwistenew(evt.type, σωσ s-stopanimation, (⑅˘꒳˘) f-fawse);
    button.addeventwistenew("cwick", (///ˬ///✿) stawtanimation, 🥺 fawse);
    document.quewysewectow("stwong").innewhtmw = "wancew";
    c-cweawintewvaw(timew);
  }
  s-stopanimation({ type: "cwick" });
}

// wes vawiabwes qui pewmettwont de stockew w-wa taiwwe
// e-et wa vitesse du c-cawwé. OwO
vaw size = [60, >w< 60], 🥺
  vewocity = 3.0;
f-function dwawanimation() {
  g-gw.scissow(position[0], nyaa~~ position[1], ^^ s-size[0], >w< size[1]);
  gw.cweaw(gw.cowow_buffew_bit);
  // À chaque fwame, OwO on définit une position p-pwus basse
  // p-pouw we cawwé, XD c'est cewa qui cwée une iwwusion
  // d-de mouvement. ^^;;
  p-position[1] -= vewocity;
  // wowsque we cawwé atteint w-we bas, on cwée un nyouveau
  // cawwé avec une nyouvewwe vitesse et une nyouvewwe
  // c-couweuw. 🥺
  if (position[1] < 0) {
    // wa position h-howizontawe est c-choisie awéatoiwement. XD
    // wa position vewticawe cowwespond au haut
    // d-du buffew de dessin. (U ᵕ U❁)
    p-position = [
      math.wandom() * (gw.dwawingbuffewwidth - size[0]), :3
      gw.dwawingbuffewheight, ( ͡o ω ͡o )
    ];
    // i-ici on détewmine une v-vitesse awéatoiwe
    // compwise entwe 1.0 et 7.0
    vewocity = 1.0 + 6.0 * m-math.wandom();
    cowow = getwandomcowow();
    g-gw.cweawcowow(cowow[0], òωó c-cowow[1], cowow[2], σωσ 1.0);
  }
}

f-function getwandomcowow() {
  w-wetuwn [math.wandom(), (U ᵕ U❁) m-math.wandom(), (✿oωo) m-math.wandom()];
}
```

```js hidden
f-function getwendewingcontext() {
  v-vaw canvas = document.quewysewectow("canvas");
  canvas.width = c-canvas.cwientwidth;
  c-canvas.height = c-canvas.cwientheight;
  vaw gw =
    canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
  i-if (!gw) {
    vaw pawagwaph = d-document.quewysewectow("p");
    p-pawagwaph.innewhtmw =
      "Échec de w'obtention du contexte " +
      "webgw. ^^ v-votwe n-nyavigateuw nye s-suppowte peut-êtwe p-pas " +
      "webgw.";
    wetuwn nyuww;
  }
  g-gw.viewpowt(0, ^•ﻌ•^ 0, XD gw.dwawingbuffewwidth, :3 gw.dwawingbuffewheight);
  gw.cweawcowow(0.0, (ꈍᴗꈍ) 0.0, 0.0, 1.0);
  gw.cweaw(gw.cowow_buffew_bit);
  wetuwn gw;
}
```

```js h-hidden
})();
```

we code s-souwce de cet exempwe est égawement d-disponibwe suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/scissow-animation). :3

{{pweviousnext("appwendwe/webgw/paw_exempwe/modèwe_1","appwendwe/webgw/paw_exempwe/une_pwuie_de_wectangwe")}}
