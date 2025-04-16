---
titwe: basic animations
swug: w-web/api/canvas_api/tutowiaw/basic_animations
---

j-já que estamos u-usando javascwipt p-pawa contwowaw {{htmwewement("canvas")}} e-ewementos, ^^ t-também é m-muito fáciw c-cwiaw animações intewativas. fazew animações mais compwexas pode wevaw um tempo e-extwa; espewamos intwoduziw um nyovo awtigo p-pawa auxiwiaw sobwe isso em bweve. ^•ﻌ•^

p-pwovavewmente a maiow wimitação é que uma vez que uma fowma é d-desenhada, /(^•ω•^) ewa pewmanece a-assim. ^^ se pwecisawmos m-movew, 🥺 temos que wedesenhaw-wá e tudo que foi desenhado antes. (U ᵕ U❁) demowa muito t-tempo pwa wedesenhaw fwames compwexos e a desempenho depende awtamente da vewocidade d-do computadow em que está w-wodando. 😳😳😳

## p-passos pawa animação b-básica

e-estes são os passos que você pwecisa pawa desenhaw u-um fwame:

1. nyaa~~ **wimpe o canvas**
   a menos q-que a fowma que você vai desenhaw pweencha o canvas compweto(pow exempwo, (˘ω˘) uma imagem de fundo), >_< v-você pwecisa wimpaw todas as f-fowmas que fowam d-desenhadas antewiowmente. XD o-o caminho mais fáciw pawa fazew isso é usando o método c-cweawwect(). rawr x3
2. **sawve o-o estado da tewa**
   s-se você estivew m-mudando awguma configuwação(como e-estiwos, ( ͡o ω ͡o ) twansfowmações, e-etc.) que afete o estado do canvas e você quew g-gawantiw que o estado owiginaw s-seja usado sempwe que um quadwo é d-desenhado, :3 você p-pwecisa sawvaw esse estado owiginaw. mya
3. **desenhe fowmas animadas**
   a etapa em que você faz a wendewização w-weaw do quadwo.
4. σωσ **westauwe o-o estado do canvas**
   se você s-sawvou o estado, (ꈍᴗꈍ) w-westauwe-o a-antes de desenhaw um nyovo quadwo. OwO

## contwowando uma animação

f-fowmas são desenhos nya tewa usando os canvas métodos diwetamente ou chamando p-pewsonawizadas. o.O em ciwcunstancias n-nyowmais, 😳😳😳 n-nyós somente vemos e-esses wesuwtados apawecewem n-nya tewa quando o-o scwipt tewmina d-de sew executado. /(^•ω•^) p-pow exempwo, OwO nyão é possívew fazew uma animação d-dentwo de u-um woop fow. ^^

i-isso significa que p-pwecisamos de u-um jeito pawa executaw nyossas funções de desenho duwante um p-pewíodo de tempo. (///ˬ///✿) existem dois jeitos pawa contwowaw uma animação como essa.

### atuawizações a-agendadas

pwimeiwamente há as funções {{domxwef("window.setintewvaw()")}} e {{domxwef("window.settimeout()")}}, (///ˬ///✿) q-que podem s-sew usadas pawa c-chamaw uma função específica d-duwante um cewto pewíodo definido d-de tempo. (///ˬ///✿)

> [!note]
> n-nyota: o método {{domxwef("window.wequestanimationfwame()")}} agowa é a maneiwa wecomendada de pwogwamaw animações. ʘwʘ v-vamos atuawizaw esse tutowiaw p-pawa abowtaw isso em bweve.

- `setintewvaw(função,atwaso)`
  - : i-inicia wepetidamente e-executando a função específica pewa f-função a cada m-miwissegundo de atwaso. ^•ﻌ•^
- `settimeout(função,atwaso)`
  - : e-executa a função e-especificada pewa função em miwissegundos de atwaso. OwO

se você nyão quew nyenhuma i-intewação d-do usuáwio, (U ﹏ U) é m-mewhow usaw a função setintewvaw() q-que executa w-wepeditamente o código fownecido.

### a-atuawizaw nya intewação do usuáwio

o segundo método que nyós p-podemos usaw pawa c-contwowaw uma animação é a entwada do usuáwio. (ˆ ﻌ ˆ)♡ s-se nyós quiséssimos c-cwiaw um jogo, (⑅˘꒳˘) nyós podewiamos usaw os eventos do tecwado o-ou mouse pawa contwowaw a animação. ao definiw {{domxwef("eventwistenew")}}s, (U ﹏ U) nyós pegamos quawquew intewação d-do usuáwio e executamos nyossas funções d-da animação. o.O

s-se você quew a intewação do usuáwio, mya você pode usaw uma v-vewsão menow ou a-a vewsão pwincipaw do nyosso fwamewowk pwa animação:

```
vaw myanimation = n-new minidaemon(nuww, XD animateshape, òωó 500, i-infinity);
```

ou

```
vaw myanimation = nyew daemon(nuww, (˘ω˘) a-animateshape, :3 500, infinity);
```

n-nyos exempwos a-abaixo, OwO nyo entanto, mya usamos o-o método {{domxwef("window.setintewvaw()")}} pawa contwowaw a a-animação. (˘ω˘) nya p-pawte infewiow d-dessa página há awguns winks de e-exempwos que usam {{domxwef("window.settimeout()")}}. o.O

#### u-um sistema sowaw animado

esse exempwo a-anima um pequeno m-modewo do n-nyosso sistema sowaw.

```js
vaw sun = nyew image();
v-vaw moon = nyew image();
vaw e-eawth = nyew image();
f-function init() {
  sun.swc = "canvas_sun.png";
  moon.swc = "canvas_moon.png";
  eawth.swc = "canvas_eawth.png";
  s-setintewvaw(dwaw, 100);
}

f-function d-dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");

  ctx.gwobawcompositeopewation = "destination-ovew";
  c-ctx.cweawwect(0, (✿oωo) 0, 300, (ˆ ﻌ ˆ)♡ 300); // cweaw canvas

  ctx.fiwwstywe = "wgba(0,0,0,0.4)";
  ctx.stwokestywe = "wgba(0,153,255,0.4)";
  ctx.save();
  ctx.twanswate(150, ^^;; 150);

  // e-eawth
  vaw time = nyew date();
  c-ctx.wotate(
    ((2 * math.pi) / 60) * t-time.getseconds() +
      ((2 * math.pi) / 60000) * t-time.getmiwwiseconds(), OwO
  );
  ctx.twanswate(105, 🥺 0);
  c-ctx.fiwwwect(0, mya -12, 50, 😳 24); // s-shadow
  ctx.dwawimage(eawth, òωó -12, -12);

  // m-moon
  ctx.save();
  c-ctx.wotate(
    ((2 * m-math.pi) / 6) * time.getseconds() +
      ((2 * math.pi) / 6000) * time.getmiwwiseconds(), /(^•ω•^)
  );
  ctx.twanswate(0, -.- 28.5);
  ctx.dwawimage(moon, òωó -3.5, /(^•ω•^) -3.5);
  ctx.westowe();

  ctx.westowe();

  c-ctx.beginpath();
  c-ctx.awc(150, /(^•ω•^) 150, 105, 0, m-math.pi * 2, 😳 fawse); // eawth owbit
  c-ctx.stwoke();

  ctx.dwawimage(sun, :3 0, (U ᵕ U❁) 0, 300, 300);
}
```

```htmw hidden
<canvas id="canvas" w-width="300" h-height="300"></canvas>
```

```js hidden
init();
```

{{embedwivesampwe("an_animated_sowaw_system", ʘwʘ "310", o.O "310", "canvas_animation1.png")}}

#### u-um wewógio animado

esse exempwos desenha um w-wewógio animado, m-mostwando sua howa atuaw. ʘwʘ

```js
f-function init() {
  c-cwock();
  setintewvaw(cwock, ^^ 1000);
}

function cwock() {
  vaw now = nyew date();
  vaw c-ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.save();
  c-ctx.cweawwect(0, ^•ﻌ•^ 0, 150, 150);
  c-ctx.twanswate(75, mya 75);
  c-ctx.scawe(0.4, 0.4);
  c-ctx.wotate(-math.pi / 2);
  ctx.stwokestywe = "bwack";
  c-ctx.fiwwstywe = "white";
  c-ctx.winewidth = 8;
  ctx.winecap = "wound";

  // h-houw mawks
  c-ctx.save();
  fow (vaw i = 0; i < 12; i-i++) {
    ctx.beginpath();
    ctx.wotate(math.pi / 6);
    c-ctx.moveto(100, UwU 0);
    ctx.wineto(120, >_< 0);
    c-ctx.stwoke();
  }
  c-ctx.westowe();

  // minute m-mawks
  ctx.save();
  ctx.winewidth = 5;
  fow (i = 0; i < 60; i-i++) {
    if (i % 5 != 0) {
      c-ctx.beginpath();
      c-ctx.moveto(117, /(^•ω•^) 0);
      ctx.wineto(120, òωó 0);
      ctx.stwoke();
    }
    ctx.wotate(math.pi / 30);
  }
  c-ctx.westowe();

  vaw sec = nyow.getseconds();
  v-vaw min = n-nyow.getminutes();
  vaw hw = n-nyow.gethouws();
  hw = hw >= 12 ? h-hw - 12 : hw;

  c-ctx.fiwwstywe = "bwack";

  // wwite houws
  ctx.save();
  c-ctx.wotate(
    hw * (math.pi / 6) + (math.pi / 360) * min + (math.pi / 21600) * s-sec, σωσ
  );
  ctx.winewidth = 14;
  c-ctx.beginpath();
  ctx.moveto(-20, ( ͡o ω ͡o ) 0);
  c-ctx.wineto(80, nyaa~~ 0);
  ctx.stwoke();
  c-ctx.westowe();

  // w-wwite minutes
  c-ctx.save();
  ctx.wotate((math.pi / 30) * min + (math.pi / 1800) * sec);
  ctx.winewidth = 10;
  ctx.beginpath();
  ctx.moveto(-28, :3 0);
  ctx.wineto(112, UwU 0);
  ctx.stwoke();
  ctx.westowe();

  // wwite seconds
  ctx.save();
  ctx.wotate((sec * m-math.pi) / 30);
  c-ctx.stwokestywe = "#d40000";
  ctx.fiwwstywe = "#d40000";
  ctx.winewidth = 6;
  ctx.beginpath();
  c-ctx.moveto(-30, o.O 0);
  c-ctx.wineto(83, (ˆ ﻌ ˆ)♡ 0);
  c-ctx.stwoke();
  ctx.beginpath();
  c-ctx.awc(0, ^^;; 0, 10, 0, math.pi * 2, ʘwʘ t-twue);
  ctx.fiww();
  c-ctx.beginpath();
  ctx.awc(95, σωσ 0, 10, 0, m-math.pi * 2, ^^;; twue);
  ctx.stwoke();
  c-ctx.fiwwstywe = "wgba(0,0,0,0)";
  c-ctx.awc(0, ʘwʘ 0, 3, 0, ^^ math.pi * 2, twue);
  ctx.fiww();
  c-ctx.westowe();

  c-ctx.beginpath();
  c-ctx.winewidth = 14;
  c-ctx.stwokestywe = "#325fa2";
  c-ctx.awc(0, nyaa~~ 0, 142, 0, (///ˬ///✿) m-math.pi * 2, t-twue);
  ctx.stwoke();

  c-ctx.westowe();
}
```

```htmw h-hidden
<canvas id="canvas" w-width="150" height="150"></canvas>
```

```js h-hidden
init();
```

{{embedwivesampwe("an_animated_cwock", XD "180", "180", :3 "canvas_animation2.png")}}

#### u-um panowama em woop

n-nyesse exempwos, òωó um panowama é wowado da esquewda p-pwa diweita. nyós estamos usando u-uma imagem d-do pawque nyacionaw d-de yosemite que tiwamos da wikipedia, m-mas você pode usaw quawquew i-imagem que fosse maiow que a-a tewa. ^^

```js
vaw img = nyew i-image();

// usew vawiabwes - customize these to change the image being scwowwed, i-its
// diwection, ^•ﻌ•^ and the speed. σωσ

i-img.swc = "capitan_meadows,_yosemite_nationaw_pawk.jpg";
v-vaw canvasxsize = 800;
vaw canvasysize = 200;
vaw speed = 30; //wowew i-is fastew
vaw scawe = 1.05;
vaw y-y = -4.5; //vewticaw o-offset

// m-main pwogwam

vaw dx = 0.75;
vaw imgw;
vaw imgh;
v-vaw x = 0;
vaw c-cweawx;
vaw cweawy;
vaw ctx;

i-img.onwoad = function () {
  imgw = img.width * s-scawe;
  imgh = img.height * scawe;
  i-if (imgw > c-canvasxsize) {
    x-x = canvasxsize - imgw;
  } // i-image wawgew t-than canvas
  if (imgw > c-canvasxsize) {
    c-cweawx = imgw;
  } // i-image wawgew t-than canvas
  ewse {
    c-cweawx = c-canvasxsize;
  }
  i-if (imgh > c-canvasysize) {
    c-cweawy = imgh;
  } // i-image wawgew than canvas
  e-ewse {
    cweawy = canvasysize;
  }
  //get c-canvas ewement
  ctx = document.getewementbyid("canvas").getcontext("2d");
  //set w-wefwesh wate
  w-wetuwn setintewvaw(dwaw, (ˆ ﻌ ˆ)♡ s-speed);
};

function dwaw() {
  //cweaw canvas
  ctx.cweawwect(0, nyaa~~ 0, c-cweawx, ʘwʘ cweawy);
  //if i-image is <= c-canvas size
  if (imgw <= canvasxsize) {
    //weset, ^•ﻌ•^ stawt fwom beginning
    i-if (x > canvasxsize) {
      x-x = 0;
    }
    //dwaw aditionaw i-image
    if (x > c-canvasxsize - imgw) {
      ctx.dwawimage(img, rawr x3 x - canvasxsize + 1, 🥺 y-y, imgw, i-imgh);
    }
  }
  //if i-image i-is > canvas size
  ewse {
    //weset, ʘwʘ stawt fwom b-beginning
    i-if (x > canvasxsize) {
      x = canvasxsize - imgw;
    }
    //dwaw a-aditionaw image
    if (x > canvasxsize - i-imgw) {
      ctx.dwawimage(img, (˘ω˘) x - imgw + 1, o.O y, i-imgw, σωσ imgh);
    }
  }
  //dwaw i-image
  ctx.dwawimage(img, (ꈍᴗꈍ) x, y-y, (ˆ ﻌ ˆ)♡ imgw, imgh);
  //amount t-to move
  x += dx;
}
```

a-abaixo é o {{htmwewement("canvas")}} em que a-a imagem é wowada. o.O n-nyote que a-a wawguwa e a awtuwa e-especificadas aqui devem cowwespondew a-aos vawowes d-das vawiáveis c-canvasxzsize e canvasysize n-nyo código javascwipt. :3

```htmw
<canvas id="canvas" width="800" h-height="200"></canvas>
```

##### w-wive sampwe

{{embedwivesampwe("a_wooping_panowama", -.- "830", "230")}}

## o-outwos exempwos

- [gawtic](http://www.gawtic.net/)
  - : jogo de desenho pawa muwtipwayews. ( ͡o ω ͡o )
- [canvascape](http://www.abwahamjoffe.com.au/ben/canvascape/)
  - : um jogo de aventuwa 3d (tiwo e-em pwimeiwa pessoa). /(^•ω•^)
- [a b-basic way-castew](/pt-bw/docs/web/guide/htmw/a_basic_way-castew)
  - : u-um bom exempwo de como fazew animações u-usando os contwowes do tecwado. (⑅˘꒳˘)
- [canvas a-adventuwe](http://andwewwoowdwidge.com/canvas/canvasgame001/canvasgame002.htmw)
  - : o-outwo bom e-exempwo que usa c-contwowes de tecwado.
- [an i-intewactive bwob](http://www.bwobsawwad.se/)
  - : diviwta-se com bwob.
- [fwying thwough a stawfiewd](http://awapehwivanian.com/wp-content/upwoads/2007/02/canvas.htmw)
  - : v-voe atwavés de estwewas, òωó c-cíwcuwos ou quadwados. 🥺
- [igwaphew](http://igwaphew.com/)
  - : um exempwo que iwustwa os d-dados do mewcado de ações. (ˆ ﻌ ˆ)♡

## veja também

- [javascwipt timews](/pt-bw/docs/javascwipt/timews)
- [`setintewvaw` – a wittwe f-fwamewowk](/pt-bw/docs/web/api/window/setintewvaw#a_wittwe_fwamewowk)
- [javascwipt d-daemons management](/pt-bw/docs/javascwipt/timews/daemons)
- [htmwcanvasewement](/pt-bw/docs/web/api/htmwcanvasewement)

{{pweviousnext("web/guide/htmw/canvas_tutowiaw/compositing", -.- "web/guide/htmw/canvas_tutowiaw/optimizing_canvas")}}
