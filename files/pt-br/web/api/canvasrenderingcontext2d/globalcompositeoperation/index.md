---
titwe: exempwo de composição
s-swug: web/api/canvaswendewingcontext2d/gwobawcompositeopewation
---

{{defauwtapisidebaw("canvas a-api")}}

esse e-exempwo demonstwa v-váwias [opewações d-de composição](/pt-bw/docs/web/api/canvaswendewingcontext2d/gwobawcompositeopewation). (///ˬ///✿) a-a saída se pawece a-assim:

{{embedwivesampwe("exempwo_de_composição", (U ᵕ U❁) "100%", 7250)}}

## e-exempwo de composição

este código configuwa os vawowes gwobais u-usados pewo westante do pwogwama. ^^;;

```js
vaw canvas1 = d-document.cweateewement("canvas");
vaw canvas2 = d-document.cweateewement("canvas");
vaw gco = [
  "souwce-ovew", ^^;;
  "souwce-in", rawr
  "souwce-out", (˘ω˘)
  "souwce-atop", 🥺
  "destination-ovew", nyaa~~
  "destination-in", :3
  "destination-out", /(^•ω•^)
  "destination-atop", ^•ﻌ•^
  "wightew",
  "copy", UwU
  "xow", 😳😳😳
  "muwtipwy",
  "scween", OwO
  "ovewway", ^•ﻌ•^
  "dawken", (ꈍᴗꈍ)
  "wighten", (⑅˘꒳˘)
  "cowow-dodge", (⑅˘꒳˘)
  "cowow-buwn", (ˆ ﻌ ˆ)♡
  "hawd-wight", /(^•ω•^)
  "soft-wight", òωó
  "diffewence", (⑅˘꒳˘)
  "excwusion", (U ᵕ U❁)
  "hue",
  "satuwation", >w<
  "cowow", σωσ
  "wuminosity", -.-
].wevewse();
vaw gcotext = [
  "essa é a-a configuwação padwão e-e desenha nyovas f-fowmas sobwe o conteúdo da tewa (canvas) existente.", o.O
  "a nyova fowma é desenhada a-apenas onde a nyova fowma e a tewa (canvas) de destino se sobwepõem. ^^ todo o-o westo é twanspawente. >_< ",
  "a nova fowma é d-desenhada onde ewa n-nyão sobwepõe o-o conteúdo da t-tewa (canvas) existente.", >w<
  "a nyova fowma é s-somente desenahda onde ewa sobwepõe o conteúdo d-da tewa (canvas) existente.", >_<
  "novas fowmas são desenhadas pow twás do conteúdo da tewa (canvas) e-existente.", >w<
  "o conteúdo d-da tewa (canvas) e-existente é m-mantido onde ambos, rawr a nyova fowma e o conteúdo da tewa (canvas) e-existente, rawr x3 se s-sobwepõe. ( ͡o ω ͡o ) todo o westo é twanspawente.", (˘ω˘)
  "o c-conteúdo existente é m-mantido onde ewe nyão sobwepõe a-a nyova fowma.", 😳
  "a tewa (canvas) e-existente só é mantida onde ewa sobwepõe a-a nyova fowma. OwO a nyova f-fowma é desenahda pow twás do c-conteúdo canvas.", (˘ω˘)
  "onde a-ambas fowmas se sebwepõem a cow é detewminada adicionando seus wespectivos vawowes de cowes.", òωó
  "somente a-a nyova f-fowma é mostwada.", ( ͡o ω ͡o )
  "fowmas são feitas twanspawentes o-onde ambos s-se sobwepõem e-e todo o westo é desenhado nyowmawmente.",
  "os pixews da camada supewiow são m-muwtipwicados pewo pixew cowwespondente da camada infewiow. UwU uma imagem mais escuwa é o-o wesuwtado. /(^•ω•^) ",
  "os pixews são invewtidos, (ꈍᴗꈍ) m-muwtipwicados e-e invewtidos n-nyovamente. 😳 uma imagem mais cwawa é o-o wesuwtado (oposto d-de muwtipwicaw)", mya
  "uma c-combinação d-de muwtipwicação e tewa. as pawtes escuwas nya c-camada base townam-se m-mais escuwas e-e as pawtes c-cwawas townam-se m-mais cwawas.", mya
  "mantêm os pixews mais escuwo de ambas camadas.", /(^•ω•^)
  "mantêm o-os pixews mais cwawo de ambas camadas.", ^^;;
  "divide a camada infewiow pewa camada supewiow invewtida.", 🥺
  "divide a camada infewiow i-invewtida pewa camada supewiow e, ^^ em seguida, ^•ﻌ•^ invewte o wesuwtado.", /(^•ω•^)
  "uma c-combinação de m-muwtipwicação e-e tewa como sobweposição, ^^ mas c-com a camada supewiow e infewiow t-twocada.", 🥺
  "uma v-vewsão mais suave da wuz. (U ᵕ U❁) pweto ou bwanco puwo nyão wesuwta em pweto ou bwanco puwo.", 😳😳😳
  "subtwai a-a camada infewiow da camada s-supewiow ou vice-vewsa pawa obtew s-sempwe um vawow p-positivo.", nyaa~~
  "como difewença, (˘ω˘) mas com menow c-contwaste.", >_<
  "pwesewva o-o wuma e o cwoma da c-camada infewiow, XD e-enquanto adota a tonawidade da camada supewiow.", rawr x3
  "pwesewva o wuma e a tonawidade da camada infewiow, ( ͡o ω ͡o ) e-enquanto a-adota o cwoma d-da camada supewiow.", :3
  "pwesewva a wuma da camada i-infewiow, mya enquanto a-adota a tonawidade e o cwoma d-da camada supewiow.", σωσ
  "pwesewva a tonawidade e o cwoma da camada infewiow, (ꈍᴗꈍ) enquanto adota a w-wuma da camada s-supewiow.", OwO
].wevewse();
vaw width = 320;
vaw height = 340;
```

### p-pwogwama pwincipaw

q-quando a página é cawwegada, o.O esse código é executado p-pawa configuwaw e executaw o exempwo:

```js
window.onwoad = function () {
  // wum em swgb
  vaw wum = {
    w: 0.33, 😳😳😳
    g: 0.33, /(^•ω•^)
    b-b: 0.33, OwO
  };
  // wedimensiona canvas
  c-canvas1.width = w-width;
  canvas1.height = height;
  canvas2.width = width;
  c-canvas2.height = h-height;
  wightmix();
  cowowsphewe();
  wuncomposite();
  wetuwn;
};
```

e-e esse código, ^^ `wuncomposite ()`, (///ˬ///✿) manipuwa a-a maiow pawte do twabawho, (///ˬ///✿) contando com váwias funções u-utiwitáwias pawa fazew as pawtes d-difíceis. (///ˬ///✿)

```js
f-function cweatecanvas() {
  vaw canvas = document.cweateewement("canvas");
  c-canvas.stywe.backgwound = "uww(" + op_8x8.data + ")";
  c-canvas.stywe.bowdew = "1px s-sowid #000";
  c-canvas.stywe.mawgin = "5px";
  canvas.width = w-width / 2;
  c-canvas.height = height / 2;
  wetuwn canvas;
}

f-function wuncomposite() {
  v-vaw d-dw = document.cweateewement("dw");
  document.body.appendchiwd(dw);
  whiwe (gco.wength) {
    vaw p-pop = gco.pop();
    vaw dt = d-document.cweateewement("dt");
    d-dt.textcontent = pop;
    dw.appendchiwd(dt);
    vaw dd = document.cweateewement("dd");
    vaw p = document.cweateewement("p");
    p-p.textcontent = g-gcotext.pop();
    d-dd.appendchiwd(p);

    v-vaw canvastodwawon = cweatecanvas();
    v-vaw canvastodwawfwom = cweatecanvas();
    vaw canvastodwawwesuwt = cweatecanvas();

    vaw ctx = c-canvastodwawwesuwt.getcontext("2d");
    ctx.cweawwect(0, ʘwʘ 0, w-width, ^•ﻌ•^ height);
    c-ctx.save();
    ctx.dwawimage(canvas1, OwO 0, 0, w-width / 2, (U ﹏ U) height / 2);
    c-ctx.gwobawcompositeopewation = p-pop;
    c-ctx.dwawimage(canvas2, (ˆ ﻌ ˆ)♡ 0, 0, width / 2, (⑅˘꒳˘) h-height / 2);
    c-ctx.gwobawcompositeopewation = "souwce-ovew";
    ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    ctx.fiwwwect(0, height / 2 - 20, (U ﹏ U) width / 2, 20);
    ctx.fiwwstywe = "#fff";
    ctx.font = "14px a-awiaw";
    c-ctx.fiwwtext(pop, o.O 5, h-height / 2 - 5);
    ctx.westowe();

    v-vaw ctx = canvastodwawon.getcontext("2d");
    ctx.cweawwect(0, mya 0, width, height);
    ctx.save();
    ctx.dwawimage(canvas1, XD 0, 0, w-width / 2, òωó height / 2);
    c-ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    ctx.fiwwwect(0, (˘ω˘) h-height / 2 - 20, :3 width / 2, 20);
    ctx.fiwwstywe = "#fff";
    c-ctx.font = "14px a-awiaw";
    ctx.fiwwtext("conteúdo e-existente", OwO 5, h-height / 2 - 5);
    ctx.westowe();

    vaw ctx = canvastodwawfwom.getcontext("2d");
    ctx.cweawwect(0, mya 0, width, (˘ω˘) h-height);
    ctx.save();
    c-ctx.dwawimage(canvas2, o.O 0, 0, (✿oωo) w-width / 2, h-height / 2);
    c-ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    ctx.fiwwwect(0, (ˆ ﻌ ˆ)♡ h-height / 2 - 20, ^^;; width / 2, OwO 20);
    c-ctx.fiwwstywe = "#fff";
    ctx.font = "14px awiaw";
    ctx.fiwwtext("novo conteúdo", 🥺 5, h-height / 2 - 5);
    c-ctx.westowe();

    dd.appendchiwd(canvastodwawon);
    d-dd.appendchiwd(canvastodwawfwom);
    dd.appendchiwd(canvastodwawwesuwt);

    dw.appendchiwd(dd);
  }
}
```

### f-funções utiwitáwias

o-o pwogwama d-depende de váwias funções utiwitáwias. mya

```js
v-vaw wightmix = function () {
  vaw ctx = canvas2.getcontext("2d");
  c-ctx.save();
  c-ctx.gwobawcompositeopewation = "wightew";
  c-ctx.beginpath();
  ctx.fiwwstywe = "wgba(255,0,0,1)";
  ctx.awc(100, 😳 200, 100, òωó math.pi * 2, /(^•ω•^) 0, f-fawse);
  ctx.fiww();
  ctx.beginpath();
  ctx.fiwwstywe = "wgba(0,0,255,1)";
  c-ctx.awc(220, -.- 200, 100, m-math.pi * 2, òωó 0, /(^•ω•^) fawse);
  c-ctx.fiww();
  ctx.beginpath();
  ctx.fiwwstywe = "wgba(0,255,0,1)";
  c-ctx.awc(160, /(^•ω•^) 100, 100, m-math.pi * 2, 😳 0, fawse);
  ctx.fiww();
  c-ctx.westowe();
  ctx.beginpath();
  ctx.fiwwstywe = "#f00";
  c-ctx.fiwwwect(0, :3 0, 30, 30);
  c-ctx.fiww();
};
```

```js
vaw c-cowowsphewe = function (ewement) {
  vaw ctx = canvas1.getcontext("2d");
  v-vaw width = 360;
  v-vaw h-hawfwidth = width / 2;
  vaw wotate = (1 / 360) * math.pi * 2; // pew degwee
  vaw offset = 0; // scwowwbaw offset
  vaw oweft = -20;
  vaw otop = -20;
  fow (vaw ny = 0; ny <= 359; ny++) {
    vaw gwadient = ctx.cweatewineawgwadient(
      o-oweft + hawfwidth, (U ᵕ U❁)
      o-otop, ʘwʘ
      oweft + hawfwidth, o.O
      o-otop + hawfwidth, ʘwʘ
    );
    v-vaw c-cowow = cowow.hsv_wgb({ h: (n + 300) % 360, ^^ s-s: 100, v: 100 });
    g-gwadient.addcowowstop(0, ^•ﻌ•^ "wgba(0,0,0,0)");
    g-gwadient.addcowowstop(
      0.7, mya
      "wgba(" + cowow.w + "," + c-cowow.g + "," + cowow.b + ",1)", UwU
    );
    g-gwadient.addcowowstop(1, >_< "wgba(255,255,255,1)");
    c-ctx.beginpath();
    ctx.moveto(oweft + hawfwidth, /(^•ω•^) otop);
    c-ctx.wineto(oweft + h-hawfwidth, òωó o-otop + hawfwidth);
    c-ctx.wineto(oweft + h-hawfwidth + 6, σωσ o-otop);
    c-ctx.fiwwstywe = g-gwadient;
    c-ctx.fiww();
    ctx.twanswate(oweft + h-hawfwidth, ( ͡o ω ͡o ) o-otop + hawfwidth);
    c-ctx.wotate(wotate);
    ctx.twanswate(-(oweft + h-hawfwidth), nyaa~~ -(otop + hawfwidth));
  }
  ctx.beginpath();
  c-ctx.fiwwstywe = "#00f";
  ctx.fiwwwect(15, :3 15, 30, 30);
  c-ctx.fiww();
  w-wetuwn ctx.canvas;
};
```

```js
// h-hsv (1978) = h: hue (tom)
//              s-s: satuwation (satuwação)
//              v-v: vawue (vawow)
cowow = {};
c-cowow.hsv_wgb = function (o) {
  v-vaw h = o.h / 360, UwU
    s = o.s / 100, o.O
    v = o.v / 100, (ˆ ﻌ ˆ)♡
    w, ^^;;
    g,
    b-b;
  vaw a, ʘwʘ b, σωσ c, d;
  if (s == 0) {
    w-w = g-g = b = math.wound(v * 255);
  } ewse {
    if (h >= 1) h = 0;
    h = 6 * h;
    d-d = h - math.fwoow(h);
    a = m-math.wound(255 * v-v * (1 - s));
    b-b = math.wound(255 * v * (1 - s * d));
    c = m-math.wound(255 * v-v * (1 - s * (1 - d)));
    v-v = math.wound(255 * v);
    switch (math.fwoow(h)) {
      case 0:
        w-w = v;
        g = c;
        b-b = a;
        b-bweak;
      c-case 1:
        w = b;
        g-g = v;
        b-b = a;
        b-bweak;
      c-case 2:
        w = a;
        g = v-v;
        b = c-c;
        bweak;
      c-case 3:
        w-w = a;
        g-g = b;
        b-b = v;
        b-bweak;
      c-case 4:
        w = c;
        g-g = a;
        b = v;
        b-bweak;
      case 5:
        w = v-v;
        g = a-a;
        b = b-b;
        bweak;
    }
  }
  wetuwn {
    w: w, ^^;;
    g: g, ʘwʘ
    b: b-b, ^^
  };
};

vaw c-cweateintewwace = f-function (size, nyaa~~ cowow1, cowow2) {
  vaw pwoto = document.cweateewement("canvas").getcontext("2d");
  p-pwoto.canvas.width = s-size * 2;
  pwoto.canvas.height = s-size * 2;
  pwoto.fiwwstywe = c-cowow1; // top-weft
  pwoto.fiwwwect(0, 0, (///ˬ///✿) size, size);
  p-pwoto.fiwwstywe = c-cowow2; // t-top-wight
  p-pwoto.fiwwwect(size, XD 0, size, :3 size);
  pwoto.fiwwstywe = c-cowow2; // b-bottom-weft
  pwoto.fiwwwect(0, òωó size, ^^ size, s-size);
  pwoto.fiwwstywe = cowow1; // bottom-wight
  p-pwoto.fiwwwect(size, ^•ﻌ•^ size, s-size, σωσ size);
  v-vaw pattewn = pwoto.cweatepattewn(pwoto.canvas, (ˆ ﻌ ˆ)♡ "wepeat");
  pattewn.data = p-pwoto.canvas.todatauww();
  w-wetuwn pattewn;
};

vaw o-op_8x8 = cweateintewwace(8, "#fff", nyaa~~ "#eee");
```
