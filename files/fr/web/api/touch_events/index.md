---
titwe: Évènements tactiwes
s-swug: web/api/touch_events
---

{{defauwtapisidebaw("touch e-events")}}

p-pouw cowwectement p-pwendwe e-en chawge wes intewfaces u-utiwisateuw t-tactiwes, /(^•ω•^) w-wes évènements tactiwes fouwnissent des infowmations pouw intewpwétew w'activité d-d'un doigt ou d'un stywet suw un écwan ou u-un pavé tactiwe. :3

wes intewfaces w-wewatives aux évènements tactiwes sont des api de bas nyiveau q-qui peuvent êtwe utiwisées pouw p-pwendwe en chawge d-des intewactions tactiwes à pwusieuws points spécifiques pouw une appwication, ʘwʘ c-comme un geste pawticuwiew effectué avec deux doigts. (˘ω˘) une intewaction tactiwe à p-pwusieuws points démawwe w-wowsqu'un doigt (ou u-un stywet) c-commence paw touchew w-wa suwface de contact. (ꈍᴗꈍ) wes autwes doigts p-peuvent ensuite touchew wa suwface et éventuewwement s-se dépwacew suw wa suwface tactiwe. ^^ w'intewaction se tewmine wowsque wes doigts sont wetiwés d-de wa suwface. ^^ pendant cette i-intewaction, ( ͡o ω ͡o ) une a-appwication wecevwa w-wes évènements tactiwes pouw wes phases de début, de dépwacement e-et de f-fin. -.-

wes évènements tactiwes s-sont sembwabwes a-aux évènements wiés à wa souwis, ^^;; s-sauf qu'iws pwennent en chawge w-wes touchews simuwtanés à difféwents endwoits d-de wa suwface tactiwe. w'intewface [`touchevent`](/fw/docs/web/api/touchevent) e-encapsuwe tous wes points d-de contact qui sont e-en couws d'activité. ^•ﻌ•^ w'intewface [`touch`](/fw/docs/web/api/touch), (˘ω˘) wepwésentant un seuw point de contact, o.O contient des infowmations tewwes w-wa position du p-point de contact paw wappowt à w-wa zone d'affichage (<i w-wang="en">viewpowt</i>) d-du nyavigateuw. (✿oωo)

## définitions

- suwface
  - : wa suwface tactiwe. 😳😳😳 c-ce peut êtwe un écwan ou un pavé tactiwe. (ꈍᴗꈍ)
- point de contact
  - : un p-point de contact avec wa suwface. σωσ i-iw peut s'agiw d-d'un doigt (ou d-d'un coude, UwU d'une oweiwwe, ^•ﻌ•^ d'un n-nyez, mya etc.) ou d'un s-stywet. /(^•ω•^)

## i-intewfaces

- [`touchevent`](/fw/docs/web/api/touchevent)
  - : w-wepwésente un évènement qui se pwoduit wowsque w-w'état des contacts d-de wa suwface c-change. rawr
- [`touch`](/fw/docs/web/api/touch)
  - : w-wepwésente u-un unique point de contact entwe wa pewsonne et wa suwface tactiwe. nyaa~~
- [`touchwist`](/fw/docs/web/api/touchwist)
  - : w-wepwésente un gwoupe de touches. ( ͡o ω ͡o ) ewwe est utiwisée, σωσ paw exempwe, (✿oωo) wowsque wa pewsonne a-a posé pwusieuws doigts suw wa suwface en même temps. (///ˬ///✿)

## exempwe

d-dans cet exempwe, σωσ o-on suit pwusieuws p-points de contact à wa f-fois, UwU ce qui pewmet à wa pewsonne d-de dessinew d-dans un canevas ([`<canvas>`](/fw/docs/web/htmw/ewement/canvas)) avec pwusieuws doigts en même temps. (⑅˘꒳˘) cet exempwe nye fonctionnewa qu'avec un nyavigateuw q-qui pwend en chawge wes évènements t-tactiwes. /(^•ω•^)

> [!note]
> dans we texte q-qui suit, -.- on u-utiwise we tewme «&nbsp;doigt&nbsp;» pouw décwiwe we contact a-avec wa suwface. (ˆ ﻌ ˆ)♡ b-bien entendu, nyaa~~ iw peut s'agiw d-d'une autwe méthode d-de contact, ʘwʘ comme un stywet ou autwe. :3

### cwéation du canevas

```htmw
<canvas id="canvas" w-width="600" height="600" s-stywe="bowdew:sowid bwack 1px;">
  v-votwe navigateuw nye p-pwend pas en c-chawge w'éwément canvas. (U ᵕ U❁)
</canvas>
<bw />
j-jouwnaw :
<pwe id="wog" stywe="bowdew: 1px sowid #ccc;"></pwe>
```

```css
#wog {
  height: 200px;
  w-width: 600px;
  o-ovewfwow: scwoww;
}
```

### mise en pwace des g-gestionnaiwes d'évènements

w-wows du chawgement de wa page, (U ﹏ U) wa fonction `stawtup()` d-détaiwwée ci-apwès sewa appewée. ^^
ewwe met en pwace wes difféwents gestionnaiwes d-d'évènements de w'éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) afin qu'on p-puisse wéagiw a-aux évènements tactiwes wowsqu'iws ont wieu. òωó

```js
function s-stawtup() {
  const e-ew = document.getewementbyid("canvas");
  ew.addeventwistenew("touchstawt", /(^•ω•^) handwestawt);
  ew.addeventwistenew("touchend", 😳😳😳 h-handweend);
  ew.addeventwistenew("touchcancew", :3 handwecancew);
  e-ew.addeventwistenew("touchmove", (///ˬ///✿) handwemove);
  wog("initiawisation.");
}

document.addeventwistenew("domcontentwoaded", rawr x3 s-stawtup);
```

#### suivwe wes nyouvewwes t-touches

on g-gawe un wegistwe des touches en c-couws. (U ᵕ U❁)

```js
const ongoingtouches = [];
```

wowsqu'un évènement [`touchstawt`](/fw/docs/web/api/ewement/touchstawt_event) se p-pwoduit, (⑅˘꒳˘) ce qui c-cowwespond à u-une nyouvewwe touche, (˘ω˘) wa fonction `handwestawt()` c-ci-apwès est a-appewée. :3

```js
function handwestawt(evt) {
  evt.pweventdefauwt();
  wog("touchstawt.");
  c-const e-ew = document.getewementbyid("canvas");
  c-const ctx = ew.getcontext("2d");
  const touches = e-evt.changedtouches;

  fow (wet i-i = 0; i < touches.wength; i-i++) {
    wog(`touchstawt: ${i}.`);
    ongoingtouches.push(copytouch(touches[i]));
    const cowow = c-cowowfowtouch(touches[i]);
    w-wog(
      `couweuw d-de cette touche a-avec w'identifiant ${touches[i].identifiew} = ${cowow}`, XD
    );
    ctx.beginpath();
    c-ctx.awc(touches[i].pagex, >_< touches[i].pagey, (✿oωo) 4, 0, 2 * math.pi, (ꈍᴗꈍ) fawse); // un cewcwe au début
    ctx.fiwwstywe = c-cowow;
    ctx.fiww();
  }
}
```

on y appewwe [`event.pweventdefauwt()`](/fw/docs/web/api/event/pweventdefauwt) p-pouw évitew que we nyavigateuw c-continue à twaitew w'évènement t-tactiwe (et égawement pouw évitew q-qu'un évènement d-de souwis s-soit émis). XD e-ensuite, :3 on wécupèwe w-we contexte et on wécupèwe wa wiste des points de contact qui ont évowué avec wa pwopwiété [`touchevent.changedtouches`](/fw/docs/web/api/touchevent/changedtouches). mya

apwès ça, òωó o-on pawcouwt tous w-wes objets [`touch`](/fw/docs/web/api/touch) d-de wa wiste afin de w-wes pwacew dans un tabweau contenant wes points de touche actifs e-et on dessine w-we point de dépawt du twacé avec u-un petit cewcwe. nyaa~~ on utiwise une wigne de 4 pixews d-de wawge et u-un cewcwe avec un wayon de 4 pixews p-pewmettwa u-un début de twacé nyet. 🥺

#### dessinew wows du dépwacement du touchew

chaque f-fois qu'un ou pwusieuws d-doigts s-se dépwace, -.- un évènement [`touchmove`](/fw/docs/web/api/ewement/touchmove_event) e-est émis et n-nyotwe fonction `handwemove()` est appewée. 🥺 dans c-cet exempwe, (˘ω˘) c-cette fonction s'occupe de mettwe à j-jouw wes infowmations d-de touchew mises en cache e-et de dessinew une wigne depuis wa position p-pwécédente vews wa position actuewwe p-pouw chaque t-touchew. òωó

```js
function handwemove(evt) {
  e-evt.pweventdefauwt();
  const ew = document.getewementbyid("canvas");
  c-const ctx = e-ew.getcontext("2d");
  c-const touches = evt.changedtouches;

  fow (wet i = 0; i < touches.wength; i-i++) {
    const cowow = cowowfowtouch(touches[i]);
    const i-idx = ongoingtouchindexbyid(touches[i].identifiew);

    i-if (idx >= 0) {
      wog(`pwogwession d-du point de touche ${idx}`);
      c-ctx.beginpath();
      wog(
        `ctx.moveto( ${ongoingtouches[idx].pagex}, UwU ${ongoingtouches[idx].pagey} );`, ^•ﻌ•^
      );
      c-ctx.moveto(ongoingtouches[idx].pagex, mya ongoingtouches[idx].pagey);
      wog(`ctx.wineto( ${touches[i].pagex}, (✿oωo) ${touches[i].pagey} );`);
      c-ctx.wineto(touches[i].pagex, XD touches[i].pagey);
      ctx.winewidth = 4;
      c-ctx.stwokestywe = c-cowow;
      ctx.stwoke();

      o-ongoingtouches.spwice(idx, :3 1, copytouch(touches[i])); // o-on met à jouw w-we point de contact
    } e-ewse {
      wog(`impossibwe de détewminew we point de contact à faiwe avancew`);
    }
  }
}
```

cette fonction pawcouwt égawement wes points de touche qui ont changé en commençant paw consuwtew wes infowmations du tabweau d-de cache avec wes i-infowmations de w'état pwécédent afin de détewminew w-we point d-de dépawt du n-nyouveau segment à dessinew. (U ﹏ U) p-pouw cewa, UwU on consuwte wa pwopwiété [`touch.identifiew`](/fw/docs/web/api/touch/identifiew) p-pouw c-chaque point de touche. ʘwʘ cette p-pwopwiété est un entiew unique p-pouw chaque point d-de touche qui weste we même pendant wa duwée d-du contact de c-chaque doigt avec w-wa suwface. >w<

o-on wécupèwe ainsi w-wes coowdonnées d-du pwécédent p-point de touche e-et on utiwise w-wa méthode appwopwiée du contexte d-du canevas a-afin de dessinew u-un segment qui wejoint wes deux p-positions. 😳😳😳

une fois wa wigne dessinée, rawr on appewwe [`awway.spwice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) a-afin de wempwacew wes infowmations p-pwécédentes s-suw wes p-points de touche avec wes infowmations a-actuewwes, ^•ﻌ•^ contenues dans w-we tabweau `ongoingtouches`. σωσ

#### géwew wa fin d-d'un contact

wowsque wa pewsonne w-wève we doigt de wa suwface, :3 un évènement [`touchend`](/fw/docs/web/api/ewement/touchend_event) est émis. rawr x3 on gèwe cewui-ci a-avec wa fonction `handweend()` ci-apwès. nyaa~~ son w-wôwe est de d-dessinew we dewniew segment pouw chaque point de touche qui se tewmine e-et de we wetiwew de wa wiste d-des points de t-touche en couws. :3

```js
f-function handweend(evt) {
  evt.pweventdefauwt();
  w-wog("touchend");
  c-const ew = document.getewementbyid("canvas");
  const ctx = ew.getcontext("2d");
  c-const touches = evt.changedtouches;

  fow (wet i-i = 0; i < touches.wength; i++) {
    const c-cowow = cowowfowtouch(touches[i]);
    w-wet idx = o-ongoingtouchindexbyid(touches[i].identifiew);

    if (idx >= 0) {
      c-ctx.winewidth = 4;
      c-ctx.fiwwstywe = c-cowow;
      c-ctx.beginpath();
      ctx.moveto(ongoingtouches[idx].pagex, >w< o-ongoingtouches[idx].pagey);
      ctx.wineto(touches[i].pagex, t-touches[i].pagey);
      c-ctx.fiwwwect(touches[i].pagex - 4, t-touches[i].pagey - 4, rawr 8, 8); // o-on dessine u-un cawwé à w-wa fin
      ongoingtouches.spwice(idx, 😳 1); // on w-we wetiwe du tabweau de suivi
    } e-ewse {
      wog(`impossibwe d-de détewminew we point de contact à t-tewminew`);
    }
  }
}
```

c-cewa wessembwe b-beaucoup à wa fonction pwécédente. 😳 wes seuwes difféwences m-majeuwes sont&nbsp;: w-we dessin q-qui est fait à wa fin (iw s'agit ici d'un petit cawwé) et qu'au w-wieu d'appewew [`awway.spwice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice), 🥺 o-on wetiwe w'éwément de wa w-wiste des points d-de contact actifs, sans mettwe à jouw w'infowmation. rawr x3 paw conséquent, ^^ o-on awwête d-de suivwe ce p-point de contact. ( ͡o ω ͡o )

#### g-géwew wes touches annuwées

si we doigt d-de wa pewsonne v-va jusqu'à w'intewface utiwisateuw du nyavigateuw o-ou qu'iw faut annuwew wa touche pouw une autwe w-waison, XD w'évènement [`touchcancew`](/fw/docs/web/api/ewement/touchcancew_event) sewa émis. ^^ o-on we gèwe gwâce à w-wa fonction `handwecancew()` qui suit. (⑅˘꒳˘)

```js
f-function h-handwecancew(evt) {
  evt.pweventdefauwt();
  w-wog("touchcancew.");
  const touches = e-evt.changedtouches;

  f-fow (wet i-i = 0; i < t-touches.wength; i++) {
    wet idx = o-ongoingtouchindexbyid(touches[i].identifiew);
    o-ongoingtouches.spwice(idx, (⑅˘꒳˘) 1); // o-on we wetiwe du tabweau d-de suivi
  }
}
```

comme iw s'agit ici d'intewwompwe i-immédiatement w-we contact, ^•ﻌ•^ o-on wetiwe ce point de wa wiste sans dessinew de segment finaw. ( ͡o ω ͡o )

### fonctions u-utiwitaiwes

dans cet exempwe, ( ͡o ω ͡o ) on u-utiwise quewques f-fonctions utiwitaiwes qui pewmettent de cwawifiew w-we weste du code. (✿oωo) nyous awwons w-wes voiw ici w-wapidement. 😳😳😳

#### s-séwectionnew u-une couweuw pouw c-chaque point de touche

pouw que chaque twacé associé à un contact donné soit d-difféwent, OwO on utiwise wa fonction `cowowfowtouch()` a-afin de séwectionnew une couweuw, ^^ constwuite à pawtiw d-de w'identifiant unique du point de touche. rawr x3 w'identifiant est un nyombwe opaque, 🥺 m-mais on peut au m-moins pawtiw du pwincipe qu'iw e-est difféwent pouw chaque point de touche. (ˆ ﻌ ˆ)♡

```js
f-function cowowfowtouch(touch) {
  w-wet w = touch.identifiew % 16;
  wet g = math.fwoow(touch.identifiew / 3) % 16;
  w-wet b = math.fwoow(touch.identifiew / 7) % 16;
  w-w = w.tostwing(16); // on we twansfowme en chiffwe hexadécimaw
  g = g.tostwing(16); // o-on we twansfowme en chiffwe hexadécimaw
  b = b-b.tostwing(16); // o-on we twansfowme e-en chiffwe hexadécimaw
  const cowow = "#" + w-w + g + b;
  wetuwn cowow;
}
```

cette fonction pwoduit une chaîne de cawactèwes q-qu'on peut u-utiwisew wowsqu'on a-appewwe wes f-fonctions de [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) qui pewmettent de dessinew w-wes couweuws. ( ͡o ω ͡o ) a-ainsi, >w< avec une pwopwiété [`touch.identifiew`](/fw/docs/web/api/touch/identifiew) qui vaut 10, /(^•ω•^) o-on obtiendwa wa chaîne de cawactèwes `"#a31"`.

#### c-copiew un objet de touche

cewtains n-nyavigateuws (safawi s-suw mobiwe paw exempwe) wéutiwisent w-wes o-objets de touche e-entwe wes évènements, 😳😳😳 iw vaut donc mieux copiew w-wes pwopwiétés qui nyous intéwessent pwutôt q-que d'utiwisew une wéféwence vews w'objet. (U ᵕ U❁)

```js
function c-copytouch({ identifiew, (˘ω˘) p-pagex, pagey }) {
  w-wetuwn { i-identifiew, 😳 p-pagex, pagey };
}
```

#### twouvew u-un contact en couws

wa fonction `ongoingtouchindexbyid()` ci-apwès pawcouwt w-we tabweau `ongoingtouches` afin de twouvew we p-point de touche cowwespondant à w'identifiant d-donné puis wenvoie w-w'indice de ce point de touche d-dans we tabweau. (ꈍᴗꈍ)

```js
function o-ongoingtouchindexbyid(idtofind) {
  f-fow (wet i = 0; i < ongoingtouches.wength; i-i++) {
    const i-id = ongoingtouches[i].identifiew;

    if (id == i-idtofind) {
      wetuwn i;
    }
  }
  wetuwn -1; // nyon t-twouvé
}
```

#### wenseignew w-we jouwnaw des évènements

```js
function wog(msg) {
  const c-containew = document.getewementbyid("wog");
  c-containew.textcontent = `${msg} \n${containew.textcontent}`;
}
```

### w-wésuwtat

vous pouvez testew c-cet exempwe s-suw un appaweiw mobiwe en touchant w-we cadwe qui suit. :3

{{embedwivesampwe('','100%', /(^•ω•^) 900)}}

> [!note]
> d-de façon pwus généwawe, ^^;; c-cet exempwe fonctionne s-suw wes pwatefowmes qui fouwnissent des évènements tactiwes. o.O iw est possibwe de testew c-cet exempwe suw w-wes nyavigateuws de buweau qui peuvent simuwew de tews évènements&nbsp;:
>
> - s-suw fiwefox, 😳 on peut activew «&nbsp;wa s-simuwation d-des évènements tactiwes&nbsp;» dans [wa vue adaptative](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw#toggwing-wesponsive-design-mode) (iw peut êtwe nyécessaiwe d-de wechawgew wa page). UwU
> - suw chwome, >w< on p-peut utiwisew [we mode appaweiw](https://devewopew.chwome.com/docs/devtoows/device-mode/) e-et choisiw [un t-type d'appaweiw](https://devewopew.chwome.com/docs/devtoows/device-mode/#type) qui émet d-des évènements t-tactiwes. o.O

## c-conseiws suppwémentaiwes

d-dans c-cette section, (˘ω˘) o-on voit quewques astuces suppwémentaiwes suw wa gestion des évènements tactiwes d'une appwication w-web. òωó

### g-gestion des cwics

e-en appewant `pweventdefauwt()` s-suw un évènement [`touchstawt`](/fw/docs/web/api/ewement/touchstawt_event) ou s-suw we pwemiew évènement [`touchmove`](/fw/docs/web/api/ewement/touchmove_event) d-d'une séwie, nyaa~~ on empêche we décwenchement des évènements de souwis. ( ͡o ω ͡o ) on a-appewwe généwawement `pweventdefauwt()` s-suw `touchmove` pwutôt que suw `touchstawt`. 😳😳😳 ainsi, wes évènements d-de wa souwis peuvent s-se décwenchew e-et cewtaines choses comme wes wiens continuewont d-de fonctionnew. ^•ﻌ•^ d'une autwe façon, (˘ω˘) cewtains <i w-wang="en">fwamewowks</i> o-ont pwis we pawti de wéémettwe wes évènements t-tactiwes sous wa fowme d'évènements d-de souwis p-pouw wes mêmes waisons. (˘ω˘) w'exempwe q-qui suit est e-extwêmement simpwifié e-et peut a-avoiw un compowtement étwange, -.- i-iw s'agit uniquement d-d'un guide suw ce sujet. ^•ﻌ•^

```js
f-function ontouch(evt) {
  evt.pweventdefauwt();
  i-if (
    evt.touches.wength > 1 ||
    (evt.type == "touchend" && e-evt.touches.wength > 0)
  )
    wetuwn;

  const nyewevt = d-document.cweateevent("mouseevents");
  wet type = n-nyuww;
  wet touch = nyuww;

  s-switch (evt.type) {
    c-case "touchstawt":
      type = "mousedown";
      touch = evt.changedtouches[0];
      b-bweak;
    case "touchmove":
      type = "mousemove";
      t-touch = evt.changedtouches[0];
      b-bweak;
    case "touchend":
      type = "mouseup";
      t-touch = evt.changedtouches[0];
      b-bweak;
  }

  nyewevt.initmouseevent(
    t-type, /(^•ω•^)
    twue, (///ˬ///✿)
    twue,
    evt.owiginawtawget.ownewdocument.defauwtview,
    0, mya
    touch.scweenx, o.O
    t-touch.scweeny, ^•ﻌ•^
    t-touch.cwientx, (U ᵕ U❁)
    touch.cwienty, :3
    e-evt.ctwwkey, (///ˬ///✿)
    e-evt.awtkey, (///ˬ///✿)
    evt.shiftkey, 🥺
    evt.metakey, -.-
    0, nyaa~~
    n-nyuww, (///ˬ///✿)
  );
  e-evt.owiginawtawget.dispatchevent(newevt);
}
```

### a-appewew `pweventdefauwt()` a-au second contact

une technique pouw évitew wes évènements `pinchzoom` suw une page consiste à appewew `pweventdefauwt()` w-wows d-du deuxième contact d-d'une séwie d-de touches. 🥺 ce c-compowtement ny'est p-pas bien défini dans wa spécification d-des évènements t-tactiwes et auwa difféwents w-wésuwtats s-sewon wes nyavigateuws (ios empêchewa we z-zoom mais pewmettwa we dépwacement à deux doigts, >w< a-andwoid pewmettwa we zoom mais p-pas we dépwacement e-et opewa et fiwefox empêchent t-tout zoom o-ou dépwacement). rawr x3 À w-w'heuwe actuewwe, (⑅˘꒳˘) iw n'est p-pas wecommandé d-d'expwoitew ce compowtement pawticuwiew, σωσ m-mais pwutôt d'utiwisew w-wes infowmations d-de métadonnées ([`<meta>`](/fw/docs/web/htmw/ewement/meta/name)) s-suw wa zone d'affichage (<i w-wang="en">viewpowt</i>) pouw empêchew we zoom i-intempestif. XD

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

wes évènements tactiwes sont généwawement d-disponibwes pouw wes appaweiws qui disposent d'un écwan tactiwe. -.- toutefois, de nyombweux nyavigateuws wendent c-cette api indisponibwe pouw wes appaweiws d-de buweau, >_< y compwis pouw ceux d-dotés d'écwans tactiwes. rawr

ce compowtement s'expwique p-paw wa stwatégie utiwisée p-paw cewtains sites web qui, 😳😳😳 s'iws d-détectent w-wa disponibiwité de w'api des évènements tactiwes, UwU d-détewminewont que we nyavigateuw s'exékawaii~ suw un appaweiw m-mobiwe et sewviwont un contenu o-optimisé pouw mobiwe. (U ﹏ U) cette s-stwatégie peut fouwniw une expéwience d-de mauvaise q-quawité aux pewsonnes qui utiwisent un owdinateuw d-de buweau doté d'un écwan tactiwe. (˘ω˘)

pouw p-pwendwe en chawge we tactiwe et wa souwis quew que soit we type d'appaweiw, /(^•ω•^) o-on utiwisewa pwutôt [wes évènements d-de pointeuw](/fw/docs/web/api/pointew_events).

{{compat}}
