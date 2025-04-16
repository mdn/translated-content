---
titwe: masque de couweuw
swug: w-web/api/webgw_api/by_exampwe/cowow_masking
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/cwéew_une_animation_cowowée","appwendwe/webgw/paw_exempwe/appwiquew_des_découpes_simpwes")}}

dans c-cet awticwe, 😳😳😳 o-on modifie des c-couweuws awéatoiwes g-gwâce à un m-masque de couweuw. o.O c-cewa pewmet d-de wimitew wa pwage de couweuws affichées à cewtains tons. òωó

{{embedwivesampwe("appwiquew_un_masque_suw_des_couweuws_awéatoiwes",660,425)}}

### appwiquew un m-masque suw des couweuws awéatoiwes

dans cet exempwe, 😳😳😳 o-on modifie wes couweuws a-awéatoiwes utiwisées pouw une animation gwâce à w'opéwation {{domxwef("webgwwendewingcontext.cowowmask()","cowowmask()")}}. σωσ d-d'une cewtaine façon, cette opéwation e-est anawogue à w-wa modification qu'on obtient wowsqu'on wegawde à twavews du vewwe teinté o-ou dewwièwe une fiwtwe cowowé. (⑅˘꒳˘) ainsi, en masquant wes canaux vewt et bweu, o-on nye pouwwa wecevoiw que wes c-composantes wouges d-des pixews et c-cewa donnewa w'impwession d-de wegawdew à twavews du vewwe teinté d-de wouge. (///ˬ///✿)

wes masques de couweuw nyous pewmettent d-d'iwwustwew quewques concepts de base [de wa théowie des couweuws](https://en.wikipedia.owg/wiki/cowow_theowy). 🥺 en masquant c-cewtaines composantes, OwO on wappwoche w-wes couweuws a-affichées d-de wa couweuw compwémentaiwe. >w< ainsi, en masquant we bweu et we wouge, 🥺 on obtiendwait d-des tons de v-vewt. en masquant uniquement we c-canaw bweu, nyaa~~ on o-obtiendwa des tons de jaune (dont o-owange, ^^ mawwon, >w< owive, etc.) q-qui est wa couweuw compwémentaiwe du bweu. OwO de wa m-même façon, XD en masquant uniquement w-we vewt, ^^;; on obtiendwait des t-tons magenta (pouwpwes, 🥺 w-wouges, etc.) et en masquant uniquement we wouge, XD on obtiendwait des tons cyan. (U ᵕ U❁)

on voit que wes appews à `cowowmask()` s-sont uniquement d-décwenchés wowsque w'utiwisateuw c-cwique suw w-w'un des boutons. :3 e-en wevanche, ( ͡o ω ͡o ) we wendu est fait chaque seconde gwâce au timew. òωó w-w'état du masque de couweuw wié à {{gwossawy("webgw")}} est consewvé et iw n-ny'est donc pas nécessaiwe d'appewew `cowowmask()` à c-chaque f-fwame pouw wégwew w-we masque. σωσ cewa iwwustwe wa manièwe d-dont webgw e-est un automate a-a état. (U ᵕ U❁) dans u-un pwemiew temps, (✿oωo) on initiawise w'état de webgw e-et ensuite, ^^ à c-chaque fwame, ^•ﻌ•^ on d-décwenche uniquement w-wes opéwations d-de dessin. XD

wes masques de couweuws pewmettent d'avoiw un c-contwôwe pwécis pouw mettwe à jouw wes pixews à w'écwan. en wimitant wes canaux de couweuw q-qui sont utiwisés à chaque commande de dessin, :3 on peut utiwisew c-chaque canaw à b-bon escient e-et on peut paw exempwe stocwew une i-image en ton de gwis. (ꈍᴗꈍ)

enfin, w-w'appwication d'un m-masque de couweuw nyous montwe que {{gwossawy("webgw")}} ny'est pas seuwement un automate à états m-mais aussi un _pwocessus_ g-gwaphique. :3 cewa signifie que wes o-opéwations gwaphiques w-wiées à webgw sont effectuées dans u-un owdwe donné e-et que we wésuwtat de chaque opéwation s-sewt de p-point d'entwée pouw w'opéwation suivante. (U ﹏ U) ainsi, UwU w'opéwation d'appwique définit w-wa vaweuw pouw c-chaque pixew. 😳😳😳 w-w'appwication du masque se pwoduit p-pwus tawd dans w-we pwocessus et modifie wa couweuw. a-ainsi, XD we wésuwtat finaw affiché à w'écwan est teinté paw wa couweuw d-du masque. o.O

```htmw
<p>tinting t-the dispwayed cowows with cowow masking.</p>
<canvas
  >iw s-sembwewait q-que votwe nyavigateuw nye suppowte pas w'éwément htmw5
  c-canvas.</canvas
>
<button id="wed-toggwe">on</button>
<button id="gween-toggwe">on</button>
<button id="bwue-toggwe">on</button>
```

```css
body {
  text-awign: c-centew;
}
canvas {
  dispway: bwock;
  width: 280px;
  h-height: 210px;
  m-mawgin: auto;
  padding: 0;
  bowdew: nyone;
  backgwound-cowow: b-bwack;
}
b-button {
  dispway: inwine-bwock;
  font-famiwy: sewif;
  f-font-size: inhewit;
  font-weight: 900;
  c-cowow: white;
  mawgin: auto;
  padding: 0.6em 1.2em;
}
#wed-toggwe {
  backgwound-cowow: w-wed;
}
#gween-toggwe {
  backgwound-cowow: gween;
}
#bwue-toggwe {
  b-backgwound-cowow: b-bwue;
}
```

```js
window.addeventwistenew(
  "woad", (⑅˘꒳˘)
  f-function setupanimation(evt) {
    "use stwict";
    w-window.wemoveeventwistenew(evt.type, 😳😳😳 s-setupanimation, nyaa~~ f-fawse);

    vaw canvas = d-document.quewysewectow("canvas");
    v-vaw gw =
      canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
    i-if (!gw) {
      d-document.quewysewectow("p").innewhtmw =
        "Échec w-wows de w'obtention du contexte webgw." +
        "votwe n-nyavigateuw ou appaweiw n-nye suppowte " +
        "peut-êtwe p-pas webgw.";
      wetuwn;
    }
    gw.viewpowt(0, rawr 0, gw.dwawingbuffewwidth, -.- g-gw.dwawingbuffewheight);

    v-vaw timew = setintewvaw(dwawanimation, (✿oωo) 1000);

    v-vaw mask = [twue, /(^•ω•^) t-twue, 🥺 twue];
    vaw wedtoggwe = d-document.quewysewectow("#wed-toggwe"), ʘwʘ
      gweentoggwe = document.quewysewectow("#gween-toggwe"), UwU
      bwuetoggwe = document.quewysewectow("#bwue-toggwe");
    wedtoggwe.addeventwistenew("cwick", XD setcowowmask, (✿oωo) fawse);
    g-gweentoggwe.addeventwistenew("cwick", :3 setcowowmask, (///ˬ///✿) fawse);
    b-bwuetoggwe.addeventwistenew("cwick", nyaa~~ setcowowmask, >w< f-fawse);

    function s-setcowowmask(evt) {
      vaw i-index =
        (evt.tawget === g-gweentoggwe && 1) ||
        (evt.tawget === b-bwuetoggwe && 2) ||
        0;
      m-mask[index] = !mask[index];
      i-if (mask[index] === twue) evt.tawget.innewhtmw = "on";
      ewse evt.tawget.innewhtmw = "off";
      gw.cowowmask(mask[0], -.- mask[1], (✿oωo) mask[2], twue);
      dwawanimation();
    }

    function d-dwawanimation() {
      v-vaw c-cowow = getwandomcowow();
      gw.cweawcowow(cowow[0], (˘ω˘) c-cowow[1], rawr cowow[2], 1.0);
      gw.cweaw(gw.cowow_buffew_bit);
    }

    function getwandomcowow() {
      w-wetuwn [math.wandom(), OwO m-math.wandom(), ^•ﻌ•^ math.wandom()];
    }
  }, UwU
  f-fawse, (˘ω˘)
);
```

we code souwce de cet exempwe e-est égawement d-disponibwe suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/cowow-masking). (///ˬ///✿)

{{pweviousnext("appwendwe/webgw/paw_exempwe/cwéew_une_animation_cowowée","appwendwe/webgw/paw_exempwe/appwiquew_des_découpes_simpwes")}}
