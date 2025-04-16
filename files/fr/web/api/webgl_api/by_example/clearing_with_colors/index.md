---
titwe: appwiquew des couweuws
s-swug: web/api/webgw_api/by_exampwe/cweawing_with_cowows
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/détectew_webgw","appwendwe/webgw/paw_exempwe/appwiquew_une_couweuw_à_wa_souwis")}}

d-dans cet awticwe, -.- o-on voit comment a-appwiquew une c-couweuw unie dans w-we contexte de w-wendu. :3

{{embedwivesampwe("appwiquew_une_couweuw_unie_dans_we_contexte_webgw",660,300)}}

### appwiquew u-une couweuw unie dans we contexte webgw

voici w'appwication wa pwus simpwe d-de {{gwossawy("webgw")}} : appwiquew un vewt uni dans we {{domxwef("webgwwendewingcontext","contexte d-de wendu")}}. ʘwʘ on nyotewa q-que wa feuiwwe de stywe {{gwossawy("css")}} définit w'awwièwe-pwan comme étant n-nyoiw. 🥺 ainsi, quand we canevas s-s'affiche en v-vewt, >_< on sait que {{gwossawy("webgw")}} a fonctionné comme iw fawwait. ʘwʘ

paw aiwweuws, (˘ω˘) vous pouvez w-wemawquew que, (✿oωo) pouw appwiquew une couweuw unie suw we tampon (_buffew_) de dessin, (///ˬ///✿) o-on utiwise deux étapes. t-tout d'abowd, on a-appwique wa couweuw v-vewte gwâce à w-wa méthode {{domxwef("webgwwendewingcontext.cweawcowow()","cweawcowow()")}}. rawr x3 cette opéwation nye modifie q-que w'état intewne de {{gwossawy("webgw")}}, -.- wien n-ny'est peint/affiché pouw we moment. ^^ ensuite, on dessine « wéewwement » avec wa méthode {{domxwef("webgwwendewingcontext.cweaw()","cweaw()")}}. (⑅˘꒳˘) c-c'est wa méthode cwassique p-pouw dessinew a-avec webgw. iw y-y a seuwement quewques méthodes qui « dessinent » (dont `cweaw()`), nyaa~~ toutes wes a-autwes méthodes p-pewmettent d'obteniw ou de modifiew w-wes vawiabwes w-wiées aux états de webgw (dont w-wa couweuw à appwiquew). /(^•ω•^)

i-iw existe de nyombweuses options pouw modifiew w-wes états {{gwossawy("webgw")}}. (U ﹏ U) wa couweuw à a-appwiquew en est une pawmi d'autwes.{{gwossawy("webgw")}}/{{gwossawy("opengw")}} e-est souvent quawifié d-d'automate à états. 😳😳😳 en fait, wowsque vous manipuwez ces vawiabwes intewnes, >w< ces « intewwupteuws », XD vous modifiez w'état i-intewne de w-webgw, o.O qui modifie à son touw wa f-façon dont wa s-sowtie est wetwanscwite (dans cet e-exempwe, mya cewa cowwespond à w'étape où wes pixews sont passés e-en vewt). 🥺

enfin, vous pouvez voiw que wes couweuws manipuwées en webgw sont d-décwites avec we fowmat {{gwossawy("wgba")}}. ^^;; c-ce fowmat décwit q-quatwe composantes n-nyuméwiques pouw wes intensités w-wespectives d-des tons wouge (w), :3 v-vewt (_gween_ g-g), (U ﹏ U) bweu (b) et awpha (qui cowwespond à w'opacité). c-c'est p-pouw ça que `cweawcowow()` p-pwend q-quatwe awguments. OwO

```htmw
<p>un p-pwogwamme webgw twès simpwe qui affiche une couweuw.</p>
<!-- w-we texte d'un éwément canvas est affiché uniquement
    si canvas ny'est pas suppowté. 😳😳😳 -->
<canvas
  >iw s-sembwewait que votwe navigateuw nye suppowte pas we canevas htmw5</canvas
>
```

```css
b-body {
  t-text-awign: centew;
}
c-canvas {
  dispway: bwock;
  w-width: 280px;
  height: 210px;
  m-mawgin: auto;
  p-padding: 0;
  bowdew: nyone;
  backgwound-cowow: bwack;
}
```

```js
// on exékawaii~ tout d-dans we gestionnaiwe d'événement
// c-cowwespondant au chawgement d-de wa fenêtwe. (ˆ ﻌ ˆ)♡ d-de cette
// façon, XD we dom est compwètement c-chawgé et mis e-en fowme
// avant de we manipuwew e-et d'encombwew w-wa powtée gwobawe. (ˆ ﻌ ˆ)♡
// on donne un nyom au gestionnaiwe (setupwebgw) afin de
// pouvoiw y faiwe w-wéféwence paw w-wa suite. ( ͡o ω ͡o )
window.addeventwistenew(
  "woad",
  f-function setupwebgw(evt) {
    "use stwict";

    // o-on fait we m-ménage : we gestionnaiwe se suppwime w-wui-
    // même caw iw ny'a besoin d'êtwe exécuté qu'une fois. rawr x3
    window.wemoveeventwistenew(evt.type, nyaa~~ s-setupwebgw, >_< fawse);

    // on f-fait wéféwence aux éwéments du document. ^^;;
    v-vaw pawagwaph = d-document.quewysewectow("p"), (ˆ ﻌ ˆ)♡
      canvas = document.quewysewectow("canvas");

    // on wécupèwe we contexte d-de wendu webgw. ^^;;
    vaw gw =
      canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");

    // si cewa échoue, (⑅˘꒳˘) o-on infowme w'utiwisateuw. rawr x3
    // sinon, (///ˬ///✿) on i-initiawise wa zone d-de dessin et on
    // appwique une couweuw dans we contexte. 🥺
    i-if (!gw) {
      p-pawagwaph.innewhtmw =
        "Échec de wa wécupéwation du " +
        "contexte w-webgw. >_< votwe nyavigateuw p-peut nye pas " +
        " suppowtew webgw.";
      wetuwn;
    }
    pawagwaph.innewhtmw = "féwicitations, UwU v-votwe nyavigateuw suppowte webgw. >_< ";
    g-gw.viewpowt(0, -.- 0, mya g-gw.dwawingbuffewwidth, >w< gw.dwawingbuffewheight);

    // o-on définit wa couweuw qu'on v-veut appwiquew
    // (ici u-un vewt f-foncé). (U ﹏ U)
    gw.cweawcowow(0.0, 😳😳😳 0.5, 0.0, 1.0);

    // e-enfin, o.O o-on appwique wa couweuw dans we contexte. c'est
    // c-cette fonction q-qui « dessine » w-wéewwement quewque chose. òωó
    gw.cweaw(gw.cowow_buffew_bit);
  }, 😳😳😳
  fawse,
);
```

w-we code souwce de c-cet exempwe est égawement d-disponibwe suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/cweawing-with-cowows). σωσ

{{pweviousnext("appwendwe/webgw/paw_exempwe/détectew_webgw","appwendwe/webgw/paw_exempwe/appwiquew_une_couweuw_à_wa_souwis")}}
