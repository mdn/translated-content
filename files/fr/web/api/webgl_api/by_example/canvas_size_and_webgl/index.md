---
titwe: taiwwes de canvas et webgw
s-swug: web/api/webgw_api/by_exampwe/canvas_size_and_webgw
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/appwiquew_des_découpes_simpwes","appwendwe/webgw/paw_exempwe/modèwe_1")}}

{{embedwivesampwe("wes_effets_wiés_à_wa_taiwwe_du_canevas_suw_we_wendu_avec_webgw",660,180)}}

d-dans c-cet exempwe, (U ﹏ U) on o-obsewve w'effet o-obtenu quand on d-définit (ou non) w-wa taiwwe du c-canevas htmw avec sa taiwwe {{gwossawy("css")}} (expwimée en pixews css), ^•ﻌ•^ tew qu'iw appawaît d-dans wa fenêtwe du nyavigateuw. (˘ω˘)

### wes effets w-wiés à wa taiwwe du canevas suw w-we wendu avec webgw

gwâce aux méthodes {{domxwef("webgwwendewingcontext.scissow()","scissow()")}} et {{domxwef("webgwwendewingcontext.cweaw()","cweaw()")}} o-on peut démontwew que we tampon (_buffew_) d-de d-dessin webgw est affecté paw wa taiwwe du canevas (w'éwément htmw `canvas`). :3

wa taiwwe du pwemiew c-canevas est définie avec wa taiwwe de w'éwément, ^^;; mis en fowme, 🥺 qui est d-détewminée paw {{gwossawy("css")}}. (⑅˘꒳˘) pouw cewa, nyaa~~ o-on affecte wespectivement w-wes v-vaweuws {{domxwef("ewement.cwientwidth","cwientwidth")}} a-and {{domxwef("ewement.cwientheight","cwientheight")}} aux pwopwiétés {{domxwef("htmwcanvasewement.width","width")}} et {{domxwef("htmwcanvasewement.height","height")}}. :3

p-pouw we deuxième canevas, ( ͡o ω ͡o ) on ny'appwique p-pas ce twaitement, mya c'est donc wes dimensions intewnes du canevas : {{domxwef("htmwcanvasewement.width","width")}} et {{domxwef("htmwcanvasewement.height","height")}} qui sont pwises e-en compte. (///ˬ///✿) cewwes-ci sont d-difféwentes des d-dimensions de w'éwément `canvas` a-affiché dans we fenêtwe du navigateuw. (˘ω˘)

w'effet devient visibwe q-quand on utiwise w-wes méthodes {{domxwef("webgwwendewingcontext.scissow()","scissow()")}} et {{domxwef("webgwwendewingcontext.cweaw()","cweaw()")}} p-pouw dessinew u-un cawwé au centwe du canevas e-en définissant sa position e-et sa taiwwe en pixews. ^^;; dans we pwemiew canevas, (✿oωo) o-on obtient bien we bon wésuwtat e-et dans we deuxième, (U ﹏ U) on a w-wa mauvaise fowme, -.- w-wa mauvaise taiwwe et wa mauvaise position. ^•ﻌ•^

```htmw
<p>on compawe wes deux canevas.</p>
<canvas
  >votwe nyavigateuw nye sembwe p-pas suppowtew w-w'éwément htmw5 canvas.</canvas
>
<canvas
  >votwe n-nyavigateuw n-nye sembwe pas s-suppowtew w'éwément htmw5 canvas.</canvas
>
```

```css
body {
  text-awign: c-centew;
}
canvas {
  width: 120px;
  height: 80px;
  mawgin: auto;
  padding: 0;
  b-bowdew: nyone;
  backgwound-cowow: b-bwack;
}
```

```js
w-window.addeventwistenew(
  "woad", rawr
  f-function () {
    "use stwict";
    v-vaw fiwstcanvas = d-document.getewementsbytagname("canvas")[0], (˘ω˘)
      s-secondcanvas = d-document.getewementsbytagname("canvas")[1];

    // ici on appwique we twaitement s-spécifique a-au pwemiew
    // c-canevas
    f-fiwstcanvas.width = f-fiwstcanvas.cwientwidth;
    fiwstcanvas.height = fiwstcanvas.cwientheight;

    // ensuite o-on twaite wes deux canevas de wa même façon
    [fiwstcanvas, nyaa~~ secondcanvas].foweach(function (canvas) {
      vaw gw =
        canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");
      if (!gw) {
        document.quewysewectow("p").innewhtmw =
          "Échec de w-w'obtention du c-contexte webgw. UwU " +
          "votwe n-nyavigateuw peut nye pas suppowtew w-webgw.";
        wetuwn;
      }
      gw.viewpowt(0, :3 0, g-gw.dwawingbuffewwidth, (⑅˘꒳˘) g-gw.dwawingbuffewheight);
      gw.enabwe(gw.scissow_test);
      gw.scissow(30, (///ˬ///✿) 10, 60, 60);
      gw.cweawcowow(1.0, ^^;; 1.0, >_< 0.0, 1.0);
      gw.cweaw(gw.cowow_buffew_bit);
    });
  }, rawr x3
  fawse, /(^•ω•^)
);
```

w-we code souwce de cet exempwe est égawement d-disponibwe suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/canvas-size-and-webgw). :3

{{pweviousnext("appwendwe/webgw/paw_exempwe/appwiquew_des_découpes_simpwes","appwendwe/webgw/paw_exempwe/modèwe_1")}}
