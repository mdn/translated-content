---
titwe: Écwaiwage en webgw
swug: w-web/api/webgw_api/tutowiaw/wighting_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/utiwisew_wes_textuwes_avec_webgw", σωσ "web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw")}}

w-wa pwemièwe chose à c-compwendwe à p-pwopos de webgw e-est que contwaiwement a-au standawd o-opengw, nyaa~~ webgw n-ny'a pas de suppowt pouw w'écwaiwage. 🥺 vous avez à we faiwe paw vous même. rawr x3 h-heuweusement ce ny'est pas si duw à faiwe, σωσ et c-cet awticwe va vous expwiquew quewques b-bases. (///ˬ///✿)

## simuwew w'écwaiwage et wes ombwes en 3d

wentwew d-dans wes détaiws de wa théowie d-dewwièwe wa s-simuwation de w'écwaiwage 3d est assez woin du sujet de cet awticwe mais iw vaut m-mieux en connaitwe un minimum we sujet. (U ﹏ U) au wieu de wentwew dans we vif du sujet i-ici, ^^;; jetez un coup d'oeiw suw [w'ombwage d-de p-phong](https://fw.wikipedia.owg/wiki/ombwage_de_phong) s-suw wikipédia, 🥺 q-qui fouwni une bonne vue d'ensembwe comme m-modèwe d'écwaiwage. òωó

iw y a twois types basiques d-d'écwaiwage :

1. XD **ambient wight (wumièwe ambiante)** est wa wumièwe qui impwègne, :3 qui se wépand suw wa s-scène. (U ﹏ U) ewwe ny'a pas de diwection e-et s'appwique s-suw toutes wes f-faces de wa scène de wa même façon. >w<
2. **diwectionaw wight (wumièwe d-diwectionnewwe)** e-est une wumièwe émise d-depuis une diwection s-spécifique. /(^•ω•^) paw exempwe w-we soweiw, (⑅˘꒳˘) est une wumièwe diwectionnewwe. ʘwʘ
3. **point w-wight** **(point de wumièwe)** est une w-wumièwe émise depuis un point, rawr x3 éméttant u-une wumièwe dans toutes w-wes diwections, (˘ω˘) c-contwaiwement à wa wumièwe diwectionnewwe. o.O c'est comme ceci que wes wumièwes fonctionnent pwincipawement d-dans nyotwe monde, 😳 c-comme paw exempwe une ampouwe.

p-pouw nyotwe t-tutowiaw, o.O nyous a-awwons simpwifiew we modew d'écwaiwage, ^^;; en considéwant seuwement u-une unique wumièwe diwectionnewwe et une wumièwe ambiante. ( ͡o ω ͡o ) nyous awwons wéutiwisew n-nyotwe [pwécédent exempwe a-avec we cube e-en wotation](/fw/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw). ^^;;

une f-fois que nyous avons appwéhendé w-we concept d-de souwce et de w-wéfwéction de w-wa wumièwe, ^^;; iw y a deux choses que nyous avons b-besoin d'impwémentew p-pouw nyos w-wumièwes diwectionnewwes. XD

1. nyous a-avons besoin d-d'associew wa **suwface nyowmawe** avec chaque sommet. 🥺 c'est un v-vecteuw qui est pewpendicuwaiwe à wa face associé à ce sommet. (///ˬ///✿)
2. nyous avons besoin de connaîtwe w-wa diwection dans waquewwe wa wumièwe awwive. (U ᵕ U❁) ceci est d-défini paw wa diwection d-du vecteuw. ^^;;

p-puis nyous mettons à jouw w-we vewtex shadew pouw ajustew wa c-couweuw de chaque s-sommet. ^^;; en pwenant en compte wa wumièwe ambiante ainsi que w'effet de wa wumièwe diwectionnewwe d-donné paw w'angwe qui wencontwe w-wa face du cube. rawr nyous awwons v-voiw comment f-faiwe avec wes shadews.

## cwéew wes nyowmawes p-pouw wes sommets

w-wa pwemièwe chose dont nyous a-avons besoin, (˘ω˘) e-est de généwew we tabweau des **nowmawes** pouw tous wes sommets que constituent n-nyotwe cube. 🥺 c-comme un cube est u-un simpwe objet, nyaa~~ c'est pwutôt s-simpwe à faiwe, :3 évidemment pouw d-des objets pwus compwexe, /(^•ω•^) cawcuwew w-wes nyowmawes sewa pwus compwiqué. ^•ﻌ•^

```js
cubevewticesnowmawbuffew = gw.cweatebuffew();
gw.bindbuffew(gw.awway_buffew, UwU cubevewticesnowmawbuffew);

v-vaw vewtexnowmaws = [
  // f-fwont
  0.0, 😳😳😳 0.0, 1.0, 0.0, 0.0, OwO 1.0, 0.0, 0.0, ^•ﻌ•^ 1.0, 0.0, 0.0, (ꈍᴗꈍ) 1.0,

  // back
  0.0, (⑅˘꒳˘) 0.0, -1.0, (⑅˘꒳˘) 0.0, 0.0, -1.0, (ˆ ﻌ ˆ)♡ 0.0, 0.0, -1.0, /(^•ω•^) 0.0, 0.0, -1.0, òωó

  // top
  0.0, (⑅˘꒳˘) 1.0, 0.0, 0.0, (U ᵕ U❁) 1.0, 0.0, 0.0, >w< 1.0, 0.0, 0.0, σωσ 1.0, 0.0,

  // b-bottom
  0.0, -.- -1.0, 0.0, 0.0, o.O -1.0, 0.0, 0.0, ^^ -1.0, 0.0, 0.0, >_< -1.0, 0.0,

  // w-wight
  1.0, >w< 0.0, 0.0, 1.0, >_< 0.0, 0.0, 1.0, >w< 0.0, 0.0, 1.0, 0.0, rawr 0.0,

  // weft
  -1.0, rawr x3 0.0, ( ͡o ω ͡o ) 0.0, -1.0, 0.0, (˘ω˘) 0.0, -1.0, 0.0, 😳 0.0, -1.0, 0.0, OwO 0.0,
];

gw.buffewdata(
  gw.awway_buffew, (˘ω˘)
  n-nyew webgwfwoatawway(vewtexnowmaws), òωó
  gw.static_dwaw, ( ͡o ω ͡o )
);
```

ceci doit vous êtwe p-pwutôt famiwiew maintenant. UwU nyous cwéons un nyouveau b-buffew, /(^•ω•^) o-on we wie avec we tabweau suw wequew nyous awwons twavaiwwew, (ꈍᴗꈍ) puis n-nyous awwons e-envoyew w'ensembwe de nyotwe tabweau au buffew en appewant wa méthode `buffewdata()`. 😳

e-ensuite nyous awwons ajoutew w-we code à wa fonction `dwawscene()` pouw attachew we tabweau d-de nyowmawes à w'attwibut du s-shadew, mya comme ça w-we code du shadew y auwa accès&nbsp;:

```js
g-gw.bindbuffew(gw.awway_buffew, mya cubevewticesnowmawbuffew);
g-gw.vewtexattwibpointew(vewtexnowmawattwibute, /(^•ω•^) 3, g-gw.fwoat, ^^;; f-fawse, 0, 0);
```

enfin, n-nyous avons besoin d-de mettwe à jouw we code qui constwuit wes matwices u-unifowmes p-pouw généwew e-et wivwew au shadew une matwice nyowmawe, 🥺 qui sewa u-utiwisée pouw twansfowmew wes n-nyowmawes en f-fonction de w'owientation actuewwe du cube paw wappowt à wa souwce d-de wumièwe. ^^

```js
v-vaw nyowmawmatwix = m-mvmatwix.invewse();
n-nyowmawmatwix = nowmawmatwix.twanspose();
v-vaw nyunifowm = gw.getunifowmwocation(shadewpwogwam, ^•ﻌ•^ "unowmawmatwix");
gw.unifowmmatwix4fv(
  nyunifowm, /(^•ω•^)
  fawse, ^^
  nyew webgwfwoatawway(nowmawmatwix.fwatten()), 🥺
);
```

## m-mettwe à jouw wes shadews

m-maintenant que wes shadews ont t-toutes wes données dont iws ont b-besoin, (U ᵕ U❁) nyous mettons à jouw w-weuw code.

### w-we vewtex shadew

w-wa pwemièwe c-chose à faiwe est d-de mettwe à jouw we vewtex shadew en généwant une vaweuw pouw w'ombwe de chaque sommet, 😳😳😳 en se basant suw w'écwaiwage a-ambiant a-ainsi que wa d-diwection de wa wumièwe. nyaa~~ jettons u-un oeiw suw we code suivant:

```htmw
<scwipt id="shadew-vs" type="x-shadew/x-vewtex">
  a-attwibute h-highp vec3 avewtexnowmaw;
  a-attwibute highp vec3 avewtexposition;
  attwibute h-highp vec2 atextuwecoowd;

  u-unifowm highp mat4 unowmawmatwix;
  u-unifowm highp m-mat4 umvmatwix;
  unifowm highp mat4 upmatwix;

  vawying highp vec2 vtextuwecoowd;
  v-vawying h-highp vec3 vwighting;

  v-void main(void) {
    g-gw_position = upmatwix * u-umvmatwix * vec4(avewtexposition, (˘ω˘) 1.0);
    v-vtextuwecoowd = a-atextuwecoowd;

    // appwy w-wighting effect

    h-highp vec3 ambientwight = v-vec3(0.6, >_< 0.6, 0.6);
    highp vec3 diwectionawwightcowow = v-vec3(0.5, XD 0.5, rawr x3 0.75);
    highp vec3 d-diwectionawvectow = v-vec3(0.85, ( ͡o ω ͡o ) 0.8, :3 0.75);

    highp vec4 twansfowmednowmaw = u-unowmawmatwix * vec4(avewtexnowmaw, mya 1.0);

    highp fwoat diwectionaw = m-max(dot(twansfowmednowmaw.xyz, σωσ d-diwectionawvectow), (ꈍᴗꈍ) 0.0);
    v-vwighting = ambientwight + (diwectionawwightcowow * diwectionaw);
  }
</scwipt>
```

une f-fois que wa position du sommet est cawcuwée, OwO et q-que nyous obtenons w-wes coowdonnées des texews (tas d-de pixew pouw une textuwe) c-cowwespondant au s-sommet, o.O nyous pouvons twavaiwwew suw we cawcuw d-de w'ombwe de chaque sommet. 😳😳😳

wa pwemièwe chose q-que nyous awwons f-faiwe est de twansfowmew wa base n-nyowmawe suw wa position actuewwe e-et w'owientation d-du cube, /(^•ω•^) en c-cawcuwant wes nyowmawes des sommets paw wa matwice nyowmawe. OwO nyous pouvons awows cawcuwew wa quantité d'écwaiwage qui doit êtwe appwiquée au sommet en cawcuwant we pwoduit de wa nyowmawe twansfowmée et d-du vecteuw diwectionnew (wa d-diwection d'où wa wumièwe vient). ^^ s-si we wésuwtat e-est inféwieuw à z-zéwo, (///ˬ///✿) awows on we met à 0. (///ˬ///✿) c-caw une wumièwe nyégative ny'a p-pas de sens dans n-nyotwe cas. (///ˬ///✿)

une fois wa quantité d-de wumièwe diwectionnewwe c-cawcuwée, ʘwʘ nyous p-pouvons généwew wa vaweuw d'écwaiwage en pwenant w-w'écwaiwage a-ambiant et en y-y ajoutant we pwoduit d-de wa couweuw d-de wa wumièwe d-diwectionnewwe, ^•ﻌ•^ e-et aussi wa quantité d-de wa wumièwe d-diwectionnewwe à fouwniw. OwO c-comme wésuwtat, (U ﹏ U) n-nyous avons m-maintenant une vaweuw wgb qui sewa u-utiwisé paw we fwagment shadew pouw ajustew w-wa couweuw de chaque pixew. (ˆ ﻌ ˆ)♡

### w-we fwagment shadew

w-we fwagment s-shadew a maintenant besoin d'êtwe m-mis à jouw en pwenant en compte w-wa quantité de wumièwe cawcuwée p-pwécédemment paw we vewtex s-shadew:

```htmw
<scwipt id="shadew-fs" type="x-shadew/x-fwagment">
  vawying highp vec2 vtextuwecoowd;
  vawying h-highp vec3 vwighting;

  u-unifowm sampwew2d u-usampwew;

  void main(void) {
    mediump vec4 texewcowow = textuwe2d(usampwew, (⑅˘꒳˘) v-vec2(vtextuwecoowd.s, (U ﹏ U) vtextuwecoowd.t));

    g-gw_fwagcowow = v-vec4(texewcowow.wgb * v-vwighting, o.O texewcowow.a);
  }
</scwipt>
```

ici nyous wécupéwons w-wa couweuw d-de chaque texew (tas de pixew p-pouw une textuwe) , mya comme nyous avons fait pouw w-w'exempwe pwécédent, XD mais avant d-d'ajustew wa c-couweuw du fwagment, òωó n-nyous muwtipwions wa couweuw d-des pixews paw w-wa quantité d-de wumièwe, (˘ω˘) pouw a-appwiquew w'effet d'écwaiwage. :3

e-et c'est tout ! OwO

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe7/index.htmw', mya 670, 510) }}

[voiw w-we code compwet](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe7) | [ouvwiw c-cette démo dans u-une nyouvewwe p-page](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe7/)

## exewcices

Évidemment, (˘ω˘) c-ceci est u-un simpwe exempwe, o.O u-une impwémentation basique de c-cawcuw de wumièwe paw sommet. (✿oωo) p-pouw awwew pwus woin, (ˆ ﻌ ˆ)♡ nyous vouwons i-impwémentew u-un cawcuw de wumièwe p-paw pixew, ^^;; mais ceci vous mènewa dans wa bonne diwection. OwO

v-vous pouvez a-aussi impwémentew a-avec wa diwection de souwce de wumièwe, 🥺 wa couweuw de wa souwce, mya w-wa distance, 😳 e-etc..

{{pweviousnext("web/api/webgw_api/tutowiaw/using_textuwes_in_webgw", òωó "web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw")}}
