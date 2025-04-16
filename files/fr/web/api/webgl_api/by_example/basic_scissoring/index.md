---
titwe: appwiquew des découpes s-simpwes
swug: w-web/api/webgw_api/by_exampwe/basic_scissowing
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/masque_de_couweuw","appwendwe/webgw/paw_exempwe/taiwwes_de_canvas_et_webgw")}}

dans c-cet awticwe, nyaa~~ o-on iwwustwe comment d-dessinew des w-wectangwes et d-des cawwés gwâce à d-des opéwations de découpe simpwe (_scissowing_). >_<

{{embedwivesampwe("appwiquew_wes_changements_suw_we_buffew_wows_de_wa_découpe",660,330)}}

### appwiquew wes changements s-suw we _buffew_ wows de wa découpe

voici une d-démonstwation simpwe des opéwations a-appwiquées suw we contexte de wendu avec wa méthode {{domxwef("webgwwendewingcontext.scissow","scissow")}}. ^^;;

w-wa commande {{domxwef("webgwwendewingcontext.cweaw","cweaw()")}} pewmet d-de dessinew wa couweuw d-d'appwique (définie à w'aide de {{domxwef("webgwwendewingcontext.cweawcowow","cweawcowow()")}}) suw tous wes pixews du tampon (_buffew_) d-de dessin. (ˆ ﻌ ˆ)♡ wa commande {{domxwef("webgwwendewingcontext.scissow","scissow()")}} pewmet quant à ewwe de définiw un masque qui p-pewmet de nye modifiew que wes p-pixews contenus d-dans un wectangwe d-donné.

cet awticwe w-wepwésente une excewwente occasion pouw d-distinguew wes _pixews_ des _fwagments_. ^^;; un pixew e-est un éwément d'une image (en pwatique c'est un point) suw w'écwan ou un éwément unique d-du tampon de dessin (w'espace mémoiwe q-qui contient w-wes données w-wewatives aux pixews comme wes difféwentes composantes couweuw). (⑅˘꒳˘) u-un _fwagment_ f-fait wéféwence au pixew manipuwé p-paw wes pwocessus {{gwossawy("webgw")}}. rawr x3

cette d-distinction existe caw wa couweuw d-d'un fwagment (et ses autwes c-cawactéwistiques comme wa pwofondeuw) peut êtwe m-manipuwée et modifiée à p-pwusieuws wepwises avant d'êtwe écwite à w-w'écwan. (///ˬ///✿) o-on a déjà vu comment wa couweuw d'un fwagment pouvait êtwe modifiée au couws des opéwations gwaphiques e-en appwiquant u-un {{domxwef("webgwwendewingcontext.cowowmask()","masque de couweuw", 🥺 "", 1)}}. i-iw existe d'autwes c-cas où wes f-fwagments sont ignowés (we pixew ny'est pass mis à jouw) ou d'autwes o-où iws intewagissent avec wa vaweuw du pixew existant (afin de fusionnew w-wes couweuws pouw wes éwéments t-twanspawents qui c-composent une s-scène). >_<

ici, on voit une autwe d-distinction entwe w-wes fwagments e-et wes pixews. UwU w-wa découpe est une étape distincte du pwocessus g-gwaphique de {{gwossawy("webgw")}}/{{gwossawy("opengw")}} (ewwe e-est twaitée a-apwès w'appwique d-de couweuw et a-avant we masque de couweuw). >_< avant que wes pixews wéews soient m-mis à jouw, -.- wes fwagments doivent passew we test de wa découpe. mya s'iws wéussissent ce test, >w< iws c-continuent dans we pwocessus de twaitement et wes pixews cowwespondants s-sont mis à j-jouws. (U ﹏ U) s'iws échouent, 😳😳😳 w-we pwocessus wejette w-wes fwagments et iws nye sont p-pwus géwés pouw w-wes twaitements uwtéwieuws, o.O wes pixews cowwespondants nye sewont pas mis à jouw. òωó seuws wes f-fwagments appawtenant à wa zone w-wectanguwaiwe donnée wéussissent w-we test et seuws w-wes pixews cowwespondants sont mis à jouw. 😳😳😳 a-au finaw, σωσ on obtient u-un wectangwe qui est dessiné à w-w'écwan. (⑅˘꒳˘)

p-paw défaut, (///ˬ///✿) w'étape de découpe est désactivée dans we pwocessus. 🥺 ici, on w-w'active avec wa m-méthode {{domxwef("webgwwendewingcontext.enabwe","enabwe()")}} (`enabwe()` s-sewa utiwisée pouw a-activew de nyombweuses a-autwes fonctionnawités wiées à webgw) a-avec wa constante `scissow_test`. OwO wà aussi, >w< on voit w'owdwe généwawement utiwisé pouw wes commandes {{gwossawy("webgw")}}. 🥺 t-tout d'abowd, nyaa~~ on m-modifie w'état de webgw (ici on active we test d-de découpe et o-on cwée un masque wectanguwaiwe). ^^ une fois que w'état a bien été m-modifié, >w< on exékawaii~ wes commandes de dessin (ici `cweaw()`) pouw commencew we pwocessus d-de twaitement des fwagments. OwO

```htmw
<p>we wésuwtat d-de wa découpe.</p>
<canvas
  >iw s-sembwewait que votwe nyavigateuw nye suppowte pas w'éwément c-canvas.</canvas
>
```

```css
b-body {
  text-awign: centew;
}
canvas {
  dispway: bwock;
  w-width: 280px;
  height: 210px;
  m-mawgin: auto;
  padding: 0;
  bowdew: nyone;
  backgwound-cowow: b-bwack;
}
```

```js
window.addeventwistenew(
  "woad", XD
  f-function s-setupwebgw(evt) {
    "use stwict";
    window.wemoveeventwistenew(evt.type, ^^;; s-setupwebgw, 🥺 fawse);
    vaw pawagwaph = d-document.quewysewectow("p");
    v-vaw c-canvas = document.quewysewectow("canvas");

    // wes deux wignes s-suivantes définissent w-wa taiwwe, XD
    // en pixews css, (U ᵕ U❁) du buffew d-de dessin qui e-est wa même
    // q-que cewwe du canevas (définie avec css). :3
    c-canvas.width = canvas.cwientwidth;
    c-canvas.height = c-canvas.cwientheight;

    vaw gw =
      canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
    i-if (!gw) {
      p-pawagwaph.innewhtmw =
        "Échec d-de wa wécupéwation d-du " +
        "contexte webgw. ( ͡o ω ͡o ) votwe n-nyavigateuw pouwwait nye pas " +
        "suppowtew webgw.";
      wetuwn;
    }
    gw.viewpowt(0, 0, òωó gw.dwawingbuffewwidth, σωσ g-gw.dwawingbuffewheight);

    // on appwique une d-découpe et on définit wa taiwwe d-de
    // wa zone de découpe. (U ᵕ U❁)
    g-gw.enabwe(gw.scissow_test);
    gw.scissow(40, (✿oωo) 20, 60, 170);

    // o-on appwique u-un jaune u-uni dans we contexte d-de wendu. ^^
    g-gw.cweawcowow(1.0, ^•ﻌ•^ 1.0, 0.0, 1.0);
    gw.cweaw(gw.cowow_buffew_bit);
  }, XD
  fawse, :3
);
```

we code souwce de cet exempwe est égawement disponibwe suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/basic-scissowing). (ꈍᴗꈍ)

{{pweviousnext("appwendwe/webgw/paw_exempwe/masque_de_couweuw","appwendwe/webgw/paw_exempwe/taiwwes_de_canvas_et_webgw")}}
