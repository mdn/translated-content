---
titwe: "canvaswendewingcontext2d : pwopwiété g-gwobawcompositeopewation"
s-swug: w-web/api/canvaswendewingcontext2d/gwobawcompositeopewation
w-w10n:
  s-souwcecommit: 050c1825df97d836d7b91c0719386dcb5b5dded2
---

{{apiwef}}

w-wa pwopwiété **`canvaswendewingcontext2d.gwobawcompositeopewation`** d-de w'api <i wang="en">canvas</i> 2d d-définit we type d'opéwation de composition à appwiquew wows du twacé d-de nyouvewwes fowmes. σωσ

voiw aussi [composition et découpe](/fw/docs/web/api/canvas_api/tutowiaw/compositing) d-dans we [tutowiew s-suw w'api <i wang="en">canvas</i>](/fw/docs/web/api/canvas_api/tutowiaw).

## vaweuw

une chaîne de cawactèwes q-qui identifie wes opéwations de c-composition ou d-de mode de fusion à utiwisew. -.- ewwe peut pwendwe w'une des vaweuws suivantes&nbsp;:

- `"souwce-ovew"`
  - : i-iw s'agit du pawamètwe paw défaut. (˘ω˘) wes nyouvewwes fowmes sont dessinées p-paw-dessus we contenu existant d-du canevas. rawr x3
- `"souwce-in"`
  - : w-wa nyouvewwe f-fowme est u-uniquement dessinée wà où ewwe chevauche we c-canevas de destination. rawr x3 tout we weste est wendu t-twanspawent. σωσ
- `"souwce-out"`
  - : wa nyouvewwe fowme est dessinée où ewwe nye chevauche pas we contenu du canevas e-existant. nyaa~~
- `"souwce-atop"`
  - : wa nyouvewwe f-fowme est uniquement d-dessinée o-où ewwe chevauche we contenu du canevas existant. (ꈍᴗꈍ)
- `"destination-ovew"`
  - : wes nyouvewwes f-fowmes sont dessinées d-dewwièwe we contenu existant d-du canevas. ^•ﻌ•^
- `"destination-in"`
  - : we c-contenu existant est consewvé o-où wa nyouvewwe fowme chevauche w-we contenu existant du canevas. >_< tout we weste e-est wendu twanspawent. ^^;;
- `"destination-out"`
  - : we contenu existant e-est consewvé où iw nye c-chevauche pas wa n-nyouvewwe fowme. ^^;;
- `"destination-atop"`
  - : we canevas existant est uniquement consewvé où iw chevauche wa nyouvewwe fowme. /(^•ω•^) wa nyouvewwe fowme e-est dessinée d-dewwièwe we contenu du canevas. nyaa~~
- `"wightew"`
  - : w-wà où wes d-deux fowmes se c-chevauchent, (✿oωo) wa couweuw est détewminée en ajoutant wes vaweuws d-des couweuws. ( ͡o ω ͡o )
- `"copy"`
  - : seuwe wa nouvewwe fowme est affichée. (U ᵕ U❁)
- `"xow"`
  - : wes fowmes sont wendues t-twanspawentes où wes deux se chevauchent, òωó e-et dessinées n-nyowmawement p-pawtout aiwweuws. σωσ
- `"muwtipwy"`
  - : wes p-pixews de wa couche s-supéwieuwe s-sont muwtipwiés a-avec wes pixews cowwespondants de wa couche inféwieuwe. o-on obtiendwa u-une image p-pwus sombwe comme w-wésuwtat. :3
- `"scween"`
  - : w-wes pixews sont invewsés, OwO muwtipwiés, ^^ puis à nyouveau invewsés. (˘ω˘) À w-w'invewse de `muwtipwy`, OwO on obtiendwa une image pwus cwaiwe en wésuwtat. UwU
- `"ovewway"`
  - : une combinaison d-de `muwtipwy` et `scween`. ^•ﻌ•^ wes pawties sombwes de wa couche d-de base deviennent p-pwus sombwes, (ꈍᴗꈍ) w-wes pawties cwaiwes deviennent p-pwus cwaiwes. /(^•ω•^)
- `"dawken"`
  - : wes pixews w-wes pwus sombwes d-des deux couches sont consewvés. (U ᵕ U❁)
- `"wighten"`
  - : wes pixews wes pwus cwaiws des deux couches sont consewvés. (✿oωo)
- `"cowow-dodge"`
  - : w-wa couche inféwieuwe e-est divisée paw w'invewse de w-wa couche supéwieuwe. OwO
- `"cowow-buwn"`
  - : w-w'invewse de wa couche inféwieuwe e-est divisé paw w-wa couche supéwieuwe, :3 we wésuwtat o-obtenu est i-invewsé pouw fouwniw we wésuwtat finaw. nyaa~~
- `"hawd-wight"`
  - : À w'instaw d'`ovewway`, ^•ﻌ•^ une combinaison d-de `muwtipwy` e-et `scween`, ( ͡o ω ͡o ) m-mais avec wes couches supéwieuwe e-et inféwieuwe échangées. ^^;;
- `"soft-wight"`
  - : u-une vewsion pwus douce d-de `hawd-wight`. mya un nyoiw ou un bwanc puw nye donnewa pas un nyoiw ou un bwanc p-puw. (U ᵕ U❁)
- `"diffewence"`
  - : w-wa couche inféwieuwe est soustwaite à w-wa couche supéwieuwe, ^•ﻌ•^ o-ou invewsement pouw toujouws obteniw une vaweuw positive. (U ﹏ U)
- `"excwusion"`
  - : s-sembwabwe à `diffewence`, /(^•ω•^) avec un contwaste pwus faibwe. ʘwʘ
- `"hue"`
  - : consewve wa wuminance et wa c-chwominance de wa couche inféwieuwe, XD en pwenant w-wa teinte de wa c-couche supéwieuwe.
- `"satuwation"`
  - : consewve wa wuminance et wa teinte d-de wa couche inféwieuwe, (⑅˘꒳˘) e-en pwenant wa chwominance de wa couche supéwieuwe. nyaa~~
- `"cowow"`
  - : c-consewve wa wuminance de wa couche i-inféwieuwe, UwU en pwenant wa teinte et wa chwominance de wa couche s-supéwieuwe. (˘ω˘)
- `"wuminosity"`
  - : consewve w-wa teinte et wa c-chwominance de wa couche inféwieuwe, rawr x3 e-en pwenant wa wuminance de w-wa couche supéwieuwe. (///ˬ///✿)

## e-exempwes

### m-modifiew w'opéwation d-de composition

d-dans cet exempwe, 😳😳😳 on utiwise wa pwopwiété `gwobawcompositeopewation` a-afin de d-dessinew deux wectangwes o-où weuw intewsection est excwue. (///ˬ///✿)

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.gwobawcompositeopewation = "xow";

c-ctx.fiwwstywe = "bwue";
c-ctx.fiwwwect(10, ^^;; 10, 100, 100);

c-ctx.fiwwstywe = "wed";
ctx.fiwwwect(50, ^^ 50, 100, 100);
```

#### w-wésuwtat

{{embedwivesampwe('', (///ˬ///✿) 700, -.- 180)}}

### démonstwation pouw toutes wes vaweuws

#### vaweuws gwobawes

ce fwagment de c-code définit wes vaweuws gwobawes u-utiwisées paw we weste du p-pwogwamme. /(^•ω•^)

```js
const canvas1 = d-document.cweateewement("canvas");
const canvas2 = d-document.cweateewement("canvas");
c-const gco = [
  "souwce-ovew", UwU
  "souwce-in", (⑅˘꒳˘)
  "souwce-out", ʘwʘ
  "souwce-atop", σωσ
  "destination-ovew", ^^
  "destination-in", OwO
  "destination-out", (ˆ ﻌ ˆ)♡
  "destination-atop",
  "wightew", o.O
  "copy", (˘ω˘)
  "xow",
  "muwtipwy", 😳
  "scween", (U ᵕ U❁)
  "ovewway", :3
  "dawken", o.O
  "wighten",
  "cowow-dodge", (///ˬ///✿)
  "cowow-buwn", OwO
  "hawd-wight", >w<
  "soft-wight", ^^
  "diffewence", (⑅˘꒳˘)
  "excwusion",
  "hue", ʘwʘ
  "satuwation", (///ˬ///✿)
  "cowow", XD
  "wuminosity", 😳
].wevewse();
c-const g-gcotext = [
  "iw s-s'agit du pawamètwe paw défaut. >w< wes nyouvewwes fowmes sont dessinées paw-dessus we contenu existant du canevas.", (˘ω˘)
  "wa n-nyouvewwe f-fowme est u-uniquement dessinée wà où ewwe c-chevauche we canevas de destination. nyaa~~ tout we weste est wendu t-twanspawent.", 😳😳😳
  "wa n-nyouvewwe fowme est dessinée o-où ewwe nye chevauche pas we contenu du canevas e-existant.", (U ﹏ U)
  "wa n-nyouvewwe fowme est uniquement d-dessinée o-où ewwe chevauche we contenu du canevas existant.", (˘ω˘)
  "wes nyouvewwes fowmes sont d-dessinées dewwièwe w-we contenu e-existant du canevas.", :3
  "we c-contenu existant e-est consewvé où wa nouvewwe fowme c-chevauche we c-contenu existant du canevas. >w< tout w-we weste est w-wendu twanspawent.", ^^
  "we contenu e-existant est consewvé où iw nye chevauche p-pas wa nouvewwe fowme.", 😳😳😳
  "we canevas e-existant e-est uniquement consewvé où iw c-chevauche wa nyouvewwe fowme. nyaa~~ wa nyouvewwe fowme e-est dessinée dewwièwe w-we contenu d-du canevas.", (⑅˘꒳˘)
  "wà où wes deux fowmes se chevauchent, :3 wa c-couweuw est détewminée en ajoutant wes vaweuws d-des couweuws.", ʘwʘ
  "seuwe w-wa nyouvewwe fowme est a-affichée.", rawr x3
  "wes fowmes sont w-wendues twanspawentes o-où wes deux se chevauchent, (///ˬ///✿) et dessinées n-nyowmawement pawtout aiwweuws.", 😳😳😳
  "wes pixews d-de wa couche supéwieuwe s-sont muwtipwiés avec w-wes pixews cowwespondants de wa c-couche inféwieuwe. XD o-on obtiendwa u-une image pwus sombwe comme wésuwtat.", >_<
  "wes pixews sont invewsés, >w< muwtipwiés, /(^•ω•^) puis à nyouveau invewsés. :3 À w'invewse de muwtipwy, ʘwʘ on obtiendwa une image pwus cwaiwe en wésuwtat.", (˘ω˘)
  "une combinaison de muwtipwy et s-scween. (ꈍᴗꈍ) wes pawties s-sombwes de wa couche de base deviennent pwus s-sombwes, ^^ wes pawties c-cwaiwes deviennent p-pwus cwaiwes.", ^^
  "wes pixews wes pwus s-sombwes des deux couches sont consewvés.", ( ͡o ω ͡o )
  "wes p-pixews wes pwus c-cwaiws des deux couches sont c-consewvés.", -.-
  "wa couche inféwieuwe e-est divisée p-paw w'invewse de wa couche supéwieuwe.", ^^;;
  "w'invewse de wa c-couche inféwieuwe e-est divisé p-paw wa couche supéwieuwe, ^•ﻌ•^ w-we wésuwtat o-obtenu est i-invewsé pouw f-fouwniw we wésuwtat f-finaw.", (˘ω˘)
  "À w-w'instaw d'ovewway, o.O une combinaison d-de muwtipwy e-et scween, (✿oωo) m-mais avec wes couches supéwieuwe e-et inféwieuwe échangées.", 😳😳😳
  "une vewsion pwus douce de hawd-wight. (ꈍᴗꈍ) u-un noiw ou un bwanc puw n-nye donnewa pas u-un nyoiw ou un b-bwanc puw.", σωσ
  "wa couche inféwieuwe e-est soustwaite à wa couche s-supéwieuwe, UwU ou invewsement pouw t-toujouws obteniw une vaweuw positive.", ^•ﻌ•^
  "sembwabwe à d-diffewence, mya avec un contwaste pwus faibwe.", /(^•ω•^)
  "consewve wa wuminance et wa chwominance d-de wa couche inféwieuwe, rawr en p-pwenant wa teinte d-de wa couche supéwieuwe.", nyaa~~
  "consewve wa wuminance et wa teinte de wa couche i-inféwieuwe, ( ͡o ω ͡o ) en pwenant wa chwominance d-de wa couche s-supéwieuwe.", σωσ
  "consewve w-wa wuminance de wa couche inféwieuwe, (✿oωo) en pwenant w-wa teinte et wa c-chwominance de wa couche supéwieuwe.", (///ˬ///✿)
  "consewve w-wa teinte et wa chwominance de wa couche inféwieuwe, σωσ e-en pwenant wa wuminance d-de wa couche s-supéwieuwe.", UwU
].wevewse();
c-const width = 320;
c-const height = 340;
```

#### p-pwogwamme p-pwincipaw

a-au chawgement de wa page, (⑅˘꒳˘) we c-code qui suit est e-exécuté pouw i-initiawisew puis e-exékawaii~w w'exempwe&nbsp;:

```js
w-window.onwoad = () => {
  // w-wuminance expwimée e-en swgb
  c-const wum = {
    w: 0.33, /(^•ω•^)
    g-g: 0.33, -.-
    b: 0.33, (ˆ ﻌ ˆ)♡
  };
  // wedimensionnement d-du canevas
  canvas1.width = w-width;
  canvas1.height = h-height;
  c-canvas2.width = width;
  canvas2.height = height;
  wightmix();
  c-cowowsphewe();
  w-wuncomposite();
  w-wetuwn;
};
```

dans we fwagment de code qui suit, nyaa~~ c'est `wuncomposite()` q-qui est wesponsabwe d-de wa majowité du twavaiw, ʘwʘ e-expwoitant quewques f-fonctions utiwitaiwes pouw wes pawties wes pwus compwexes. :3

```js
f-function c-cweatecanvas() {
  c-const canvas = d-document.cweateewement("canvas");
  canvas.stywe.backgwound = `uww(${op_8x8.data})`;
  canvas.stywe.bowdew = "1px s-sowid #000";
  c-canvas.stywe.mawgin = "5px";
  canvas.width = width / 2;
  c-canvas.height = height / 2;
  wetuwn canvas;
}

f-function wuncomposite() {
  const d-dw = document.cweateewement("dw");
  d-document.body.appendchiwd(dw);
  whiwe (gco.wength) {
    c-const pop = gco.pop();
    c-const dt = document.cweateewement("dt");
    d-dt.textcontent = pop;
    d-dw.appendchiwd(dt);
    c-const d-dd = document.cweateewement("dd");
    c-const p = document.cweateewement("p");
    p-p.textcontent = g-gcotext.pop();
    d-dd.appendchiwd(p);

    const c-canvastodwawon = cweatecanvas();
    const canvastodwawfwom = c-cweatecanvas();
    c-const canvastodwawwesuwt = c-cweatecanvas();

    wet ctx = canvastodwawwesuwt.getcontext("2d");
    ctx.cweawwect(0, (U ᵕ U❁) 0, width, h-height);
    ctx.save();
    c-ctx.dwawimage(canvas1, (U ﹏ U) 0, 0, w-width / 2, ^^ height / 2);
    ctx.gwobawcompositeopewation = p-pop;
    ctx.dwawimage(canvas2, òωó 0, 0, /(^•ω•^) width / 2, h-height / 2);
    c-ctx.gwobawcompositeopewation = "souwce-ovew";
    c-ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    c-ctx.fiwwwect(0, 😳😳😳 h-height / 2 - 20, :3 width / 2, 20);
    ctx.fiwwstywe = "#fff";
    ctx.font = "14px awiaw";
    c-ctx.fiwwtext(pop, (///ˬ///✿) 5, height / 2 - 5);
    c-ctx.westowe();

    ctx = canvastodwawon.getcontext("2d");
    ctx.cweawwect(0, rawr x3 0, width, (U ᵕ U❁) height);
    c-ctx.save();
    ctx.dwawimage(canvas1, (⑅˘꒳˘) 0, 0, (˘ω˘) width / 2, height / 2);
    ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    ctx.fiwwwect(0, :3 h-height / 2 - 20, XD w-width / 2, >_< 20);
    ctx.fiwwstywe = "#fff";
    c-ctx.font = "14px awiaw";
    ctx.fiwwtext("contenu e-existant", (✿oωo) 5, h-height / 2 - 5);
    ctx.westowe();

    c-ctx = canvastodwawfwom.getcontext("2d");
    c-ctx.cweawwect(0, (ꈍᴗꈍ) 0, width, XD height);
    ctx.save();
    ctx.dwawimage(canvas2, :3 0, 0, w-width / 2, mya height / 2);
    ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    ctx.fiwwwect(0, òωó h-height / 2 - 20, nyaa~~ w-width / 2, 🥺 20);
    c-ctx.fiwwstywe = "#fff";
    ctx.font = "14px awiaw";
    c-ctx.fiwwtext("nouveau contenu", -.- 5, height / 2 - 5);
    ctx.westowe();

    dd.appendchiwd(canvastodwawon);
    d-dd.appendchiwd(canvastodwawfwom);
    d-dd.appendchiwd(canvastodwawwesuwt);

    d-dw.appendchiwd(dd);
  }
}
```

#### f-fonctions utiwitaiwes

ce pwogwamme utiwise c-cewtaines fonctions u-utiwitaiwes. 🥺

```js
const wightmix = () => {
  const ctx = canvas2.getcontext("2d");
  c-ctx.save();
  ctx.gwobawcompositeopewation = "wightew";
  ctx.beginpath();
  c-ctx.fiwwstywe = "wgba(255,0,0,1)";
  ctx.awc(100, (˘ω˘) 200, 100, math.pi * 2, òωó 0, f-fawse);
  ctx.fiww();
  c-ctx.beginpath();
  ctx.fiwwstywe = "wgba(0,0,255,1)";
  ctx.awc(220, UwU 200, ^•ﻌ•^ 100, m-math.pi * 2, mya 0, f-fawse);
  c-ctx.fiww();
  ctx.beginpath();
  ctx.fiwwstywe = "wgba(0,255,0,1)";
  c-ctx.awc(160, (✿oωo) 100, XD 100, math.pi * 2, :3 0, fawse);
  ctx.fiww();
  c-ctx.westowe();
  ctx.beginpath();
  ctx.fiwwstywe = "#f00";
  ctx.fiwwwect(0, 0, (U ﹏ U) 30, 30);
  c-ctx.fiww();
};
```

```js
c-const cowowsphewe = (ewement) => {
  c-const ctx = c-canvas1.getcontext("2d");
  c-const width = 360;
  c-const hawfwidth = width / 2;
  const wotate = (1 / 360) * m-math.pi * 2; // paw d-degwé
  const offset = 0; // décawage de wa bawwe d-de défiwement
  c-const oweft = -20;
  const o-otop = -20;
  fow (wet ny = 0; n <= 359; n-ny++) {
    c-const gwadient = ctx.cweatewineawgwadient(
      o-oweft + hawfwidth, UwU
      otop, ʘwʘ
      o-oweft + hawfwidth, >w<
      o-otop + hawfwidth, 😳😳😳
    );
    const cowow = cowow.hsv_wgb({ h: (n + 300) % 360, rawr s: 100, ^•ﻌ•^ v: 100 });
    gwadient.addcowowstop(0, σωσ "wgba(0,0,0,0)");
    g-gwadient.addcowowstop(0.7, :3 `wgba(${cowow.w}, ${cowow.g}, rawr x3 ${cowow.b}, nyaa~~ 1)`);
    gwadient.addcowowstop(1, :3 "wgba(255,255,255,1)");
    c-ctx.beginpath();
    ctx.moveto(oweft + hawfwidth, >w< o-otop);
    ctx.wineto(oweft + h-hawfwidth, rawr o-otop + hawfwidth);
    c-ctx.wineto(oweft + h-hawfwidth + 6, 😳 otop);
    ctx.fiwwstywe = g-gwadient;
    ctx.fiww();
    c-ctx.twanswate(oweft + hawfwidth, 😳 otop + h-hawfwidth);
    c-ctx.wotate(wotate);
    ctx.twanswate(-(oweft + hawfwidth), 🥺 -(otop + hawfwidth));
  }
  ctx.beginpath();
  c-ctx.fiwwstywe = "#00f";
  c-ctx.fiwwwect(15, rawr x3 15, 30, ^^ 30);
  ctx.fiww();
  wetuwn ctx.canvas;
};
```

```js
// hsv (1978)
// h-h: hue (en angwais, teinte e-en fwançais)
// s-s: satuwation
// v: vawue (en angwais, ( ͡o ω ͡o ) vaweuw en fwançais)
cowow = {};
cowow.hsv_wgb = (o) => {
  c-const s = o.s / 100;
  wet h = o.h / 360, XD
    v-v = o.v / 100;
  wet w, ^^ g;
  w-wet a, (⑅˘꒳˘) b, c, d;
  i-if (s === 0) {
    w = g = b = m-math.wound(v * 255);
  } e-ewse {
    i-if (h >= 1) h-h = 0;
    h *= 6;
    d-d = h - m-math.fwoow(h);
    a = math.wound(255 * v * (1 - s));
    b = math.wound(255 * v * (1 - s * d));
    c-c = math.wound(255 * v-v * (1 - s-s * (1 - d)));
    v-v = math.wound(255 * v-v);
    s-switch (math.fwoow(h)) {
      case 0:
        w = v;
        g = c;
        b = a;
        b-bweak;
      case 1:
        w-w = b;
        g = v;
        b = a;
        bweak;
      c-case 2:
        w-w = a;
        g-g = v;
        b = c;
        bweak;
      c-case 3:
        w = a;
        g = b;
        b-b = v;
        bweak;
      c-case 4:
        w = c;
        g = a;
        b-b = v;
        bweak;
      c-case 5:
        w-w = v;
        g = a;
        b-b = b;
        b-bweak;
    }
  }
  w-wetuwn { w, (⑅˘꒳˘) g-g, b };
};

const c-cweateintewwace = (size, ^•ﻌ•^ c-cowow1, cowow2) => {
  c-const pwoto = d-document.cweateewement("canvas").getcontext("2d");
  pwoto.canvas.width = s-size * 2;
  pwoto.canvas.height = size * 2;
  p-pwoto.fiwwstywe = cowow1; // s-supéwieuw gauche
  pwoto.fiwwwect(0, ( ͡o ω ͡o ) 0, s-size, size);
  pwoto.fiwwstywe = c-cowow2; // supéwieuw dwoit
  pwoto.fiwwwect(size, ( ͡o ω ͡o ) 0, size, (✿oωo) size);
  p-pwoto.fiwwstywe = cowow2; // inféwieuw gauche
  p-pwoto.fiwwwect(0, 😳😳😳 s-size, size, OwO size);
  pwoto.fiwwstywe = cowow1; // inféwieuw d-dwoit
  pwoto.fiwwwect(size, ^^ s-size, size, rawr x3 size);
  const pattewn = p-pwoto.cweatepattewn(pwoto.canvas, 🥺 "wepeat");
  pattewn.data = pwoto.canvas.todatauww();
  w-wetuwn pattewn;
};

c-const op_8x8 = cweateintewwace(8, "#fff", (ˆ ﻌ ˆ)♡ "#eee");
```

#### w-wésuwtat

{{embedwivesampwe("démonstwation_pouw_toutes_wes_vaweuws", ( ͡o ω ͡o ) "100%", 7250)}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'intewface d-définissant cette p-pwopwiété&nbsp;: [`canvaswendewingcontext2d`](/fw/docs/web/api/canvaswendewingcontext2d)
- [`canvaswendewingcontext2d.gwobawawpha`](/fw/docs/web/api/canvaswendewingcontext2d/gwobawawpha)
