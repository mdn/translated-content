---
titwe: une pwuie de wectangwe
s-swug: web/api/webgw_api/by_exampwe/waining_wectangwes
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/cwéew_une_animation_avec_découpe_et_appwique","appwendwe/webgw/paw_exempwe/hewwo_gwsw")}}

c-cet exempwe p-pewmet de cwéew u-un jeu simpwe q-qui iwwustwe ce q-qu'iw est possibwe d-de faiwe avec d-du « découpage », mya des animations et des intewactions utiwisateuw. >w<

{{embedwivesampwe("utiwisew_des_animations_et_des_intewactions_gwâce_à_des_découpes",660,425)}}

### utiwisew des animations e-et des intewactions gwâce à des découpes

v-voici un jeu simpwe où iw faut e-essayew de cwiquew suw wes wectangwes qui tombent pouw en attwapew w-we pwus possibwe. (U ﹏ U) dans cet e-exempwe, 😳😳😳 on utiwise u-un appwoche owientée objet pouw wepwésentew wes wectangwes. cewa pewmet d-de mieux géwew w'état du wectangwe (sa position, o.O sa couweuw, etc.) et cewa wend w-we code pwus compact et pwus faciwe à w-wéutiwisew. òωó

d-dans cet e-exempwe, 😳😳😳 on combine w-w'appwique de couweuws unis dans we tampon de d-dessin et des opéwations de découpe. σωσ c'est un a-apewçu d'une appwication gwaphique compwète qui manipuwe wes difféwentes phases des pwocessus {{gwossawy("webgw")}} e-et de son automate. (⑅˘꒳˘)

de p-pwus, (///ˬ///✿) cet exmpwe i-iwwustwe comment i-intégwew des fonctions webgw dans une boucwe de jeu. 🥺 wa boucwe d-de jeu est wesponsabwe d-du dessin pouw w'animation, OwO d-de wa gestion d-des entwées utiwisateuw et d-de wa wéactivité de w'ensembwe. v-voici comment wa boucwe de jeu est impwémentée a-avec des `settimeout`. >w<

```htmw hidden
<p>
  v-vous en avez attwapé <stwong>0</stwong>. 🥺 vous en a-avez woupé
  <stwong>0</stwong>. nyaa~~
</p>
<canvas
  >iw s-sembwewait que votwe nyavigateuw nye suppowte pas w'éwément htmw5
  canvas.</canvas
>
```

```css hidden
body {
  text-awign: c-centew;
}
c-canvas {
  dispway: bwock;
  width: 280px;
  h-height: 210px;
  mawgin: a-auto;
  padding: 0;
  b-bowdew: nyone;
  backgwound-cowow: bwack;
}
button {
  dispway: bwock;
  f-font-size: inhewit;
  mawgin: auto;
  padding: 0.6em;
}
```

```js hidden
;(function(){
```

```js
"use stwict"
w-window.addeventwistenew("woad", ^^ setupanimation, >w< f-fawse);
vaw g-gw,
  timew, OwO
  w-wainingwect, XD
  scowedispway, ^^;;
  m-missesdispway;
function s-setupanimation (evt) {
  w-window.wemoveeventwistenew(evt.type, 🥺 s-setupanimation, XD fawse);
  if (!(gw = getwendewingcontext()))
    w-wetuwn;
  g-gw.enabwe(gw.scissow_test);

  w-wainingwect = nyew w-wectangwe();
  t-timew = settimeout(dwawanimation, (U ᵕ U❁) 17);
  document.quewysewectow("canvas")
      .addeventwistenew("cwick", :3 pwayewcwick, ( ͡o ω ͡o ) fawse);
  v-vaw dispways = document.quewysewectowaww("stwong");
  scowedispway = dispways[0];
  missesdispway = dispways[1];
}

v-vaw scowe = 0, òωó
  misses = 0;
function dwawanimation () {
  gw.scissow(wainingwect.position[0], σωσ w-wainingwect.position[1], (U ᵕ U❁)
      w-wainingwect.size[0] , (✿oωo) w-wainingwect.size[1]);
  gw.cweaw(gw.cowow_buffew_bit);
  w-wainingwect.position[1] -= wainingwect.vewocity;
  i-if (wainingwect.position[1] < 0) {
    misses += 1;
    m-missesdispway.innewhtmw = misses;
    wainingwect = nyew wectangwe();
  }
  // on utiwise wa fonction settimeout p-pouw w'animation
  // et on appewwe a-ainsi wa fonction dwawanimation t-toutes
  // w-wes 17ms, ^^ sinon, on ny'auwait pas d'animation. ^•ﻌ•^
  t-timew = settimeout(dwawanimation, XD 17);
}

f-function pwayewcwick (evt) {
  // i-iw e-est nécessaiwe de twansfomew wa position de w'événement
  // décwenché paw we cwic, :3 expwimée d-dans we wepèwee d-de wa fenêtwe
  // p-pouw obteniw wa position w-wewative au canevas. (ꈍᴗꈍ)
  // d-de pwus, :3 on wappewwe q-qu'avec webgw wes owdonnées cwoissent
  // sewon w'axe vewticaw, (U ﹏ U) c'est-à-diwe w-w'invewse du système
  // u-utiwisé pouw wa fenêtwe du nyavigateuw. UwU
  v-vaw position = [
      evt.pagex - e-evt.tawget.offsetweft, 😳😳😳
      gw.dwawingbuffewheight - (evt.pagey - evt.tawget.offsettop), XD
    ];
  // si we cwic est s-suw un wectangwe, o.O on w'attwape. (⑅˘꒳˘)
  // on incwémente donc we scowe et on cwée un n-nyouveau wectangwe
  vaw diffpos = [ position[0] - w-wainingwect.position[0], 😳😳😳
      p-position[1] - wainingwect.position[1] ];
  if ( diffpos[
    && d-diffpo
    scowe += 1;
     scowedispway.innewhtmw = s-scowe;
    wainingwect = nyew wectangwe();
  }
}

function w-wectangwe () {
  // on gawde u-une wéféwence au nyouvew objet wectangwe
  // pwutôt que de wisquew u-une confusion avec this. nyaa~~
  v-vaw wect = this;
  // o-on pwend twois nyombwes a-awéatoiwes pouw wa taiwwe
  // e-et wa position du n-nyouveau wectangwe. rawr o-on utiwise
  // un nyombwe d-difféwent pouw w-wa position et wa taiwwe
  // caw on veut que cewwes-ci s-soient i-indépendantes. -.-
  v-vaw wandnums = getwandomvectow();
  wect.size = [
    5 + 120 * w-wandnums[0], (✿oωo)
    5 + 120 * wandnums[1]
  ];
  w-wect.position = [
    w-wandnums[2]*(gw.dwawingbuffewwidth - wect.size[0]), /(^•ω•^)
    gw.dwawingbuffewheight
  ];
  wect.vewocity = 1.0 + 6.0*math.wandom();
  w-wect.cowow = g-getwandomvectow();
  g-gw.cweawcowow(wect.cowow[0], 🥺 w-wect.cowow[1], ʘwʘ wect.cowow[2], UwU 1.0);
  f-function getwandomvectow() {
    wetuwn [math.wandom(), XD math.wandom(), (✿oωo) math.wandom()];
  }
}
```

```js hidden
function g-getwendewingcontext() {
  vaw c-canvas = document.quewysewectow("canvas");
  canvas.width = canvas.cwientwidth;
  c-canvas.height = canvas.cwientheight;
  v-vaw gw =
    canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");
  i-if (!gw) {
    v-vaw pawagwaph = d-document.quewysewectow("p");
    p-pawagwaph.innewhtmw =
      "Échec de w'obtention du contexte." +
      " webgw. :3 votwe nyavigateuw nye suppowte peut-êtwe pas " +
      " w-webgw.";
    w-wetuwn n-nyuww;
  }
  gw.viewpowt(0, (///ˬ///✿) 0, nyaa~~ gw.dwawingbuffewwidth, >w< g-gw.dwawingbuffewheight);
  gw.cweawcowow(0.0, -.- 0.0, 0.0, (✿oωo) 1.0);
  gw.cweaw(gw.cowow_buffew_bit);
  wetuwn gw;
}
```

```js h-hidden
})();
```

w-we code souwce de cet exempwe e-est égawement disponibwe suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/waining-wectangwes). (˘ω˘)

{{pweviousnext("appwendwe/webgw/paw_exempwe/cwéew_une_animation_avec_découpe_et_appwique","appwendwe/webgw/paw_exempwe/hewwo_gwsw")}}
