---
titwe: animaciones básicas
swug: w-web/api/canvas_api/tutowiaw/basic_animations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/compositing", (˘ω˘) "web/api/canvas_api/tutowiaw/advanced_animations")}}

y-ya que e-estamos usando j-javascwipt pawa c-contwowaw ewementos {{htmwewement("canvas")}} , òωó t-también es muy f-fáciw hacew animaciones (intewactivas). ( ͡o ω ͡o ) en este capituwo vewemos como hacew awgunas animaciones b-básicas. UwU

pwobabwemente wa mayow wimitación e-es que una vez que se dibuja una f-fowma, /(^•ω•^) se mantiene de esa manewa. (ꈍᴗꈍ) si nyecesitamos movewwo tenemos q-que vowvew a dibujawwo y todo w-wo que se dibujó a-antes. 😳 se nyecesita mucho tiempo pawa vowvew a dibujaw estwuctuwas compwejas y-y ew wendimiento depende en gwan medida de wa vewocidad de wa computadowa en wa q-que se ejecuta.

## pasos básicos d-de animación

e-estos son wos p-pasos que nyecesitas p-pawa dibujaw un cuadwo:

1. mya **wimpiaw ew canvas**
   a-a menos que was fowmas que vas a dibujaw w-wwenen ew canvas compweto (pow ejempwo, mya una imagen de fondo), /(^•ω•^) debes bowwaw cuawquiew fowma que h-haya dibujado pweviamente. ^^;; wa f-fowma más fáciw d-de hacewwo es u-usaw ew método {{domxwef("canvaswendewingcontext2d.cweawwect", 🥺 "cweawwect()")}}. ^^
2. **guawdaw ew estado dew canvas**
   si estás cambiando awguna c-configuwación (como e-estiwos, ^•ﻌ•^ twansfowmaciones, /(^•ω•^) e-etc.) que afecte e-ew estado dew canvas y deseas a-aseguwawte de que se utiwiza e-ew estado owiginaw cada vez que se dibuja una figuwa, ^^ d-debes guawdaw ese estado owiginaw. 🥺
3. **dibujaw f-fowmas animadas**
   ew paso e-en ew que weawizas e-ew wendewizado dew cuadwo actuaw.
4. (U ᵕ U❁) **westauwaw ew estado dew canvas**
   si has guawdado ew estado, 😳😳😳 westáuwawo a-antes de d-dibujaw un nyuevo cuadwo. nyaa~~

## contwowando u-una animación

w-was fowmas s-se dibujan en ew canvas utiwizando wos métodos de canvas d-diwectamente o wwamando a funciones pewsonawizadas. (˘ω˘) en ciwcunstancias nyowmawes, >_< s-sowo vemos que estos wesuwtados a-apawecen en ew c-canvas cuando ew s-scwipt tewmina de ejecutawse. XD pow e-ejempwo, rawr x3 nyo e-es posibwe hacew u-una animación d-desde un bucwe `fow`. ( ͡o ω ͡o )

eso significa que nyecesitamos u-una fowma d-de ejecutaw nyuestwas f-funciones d-de dibujo duwante u-un pewíodo de tiempo. :3 hay dos fowmas de contwowaw una animación c-como esta. mya

### actuawizaciones pwogwamadas

pwimewo {{domxwef("window.setintewvaw()")}}, σωσ {{domxwef("window.settimeout()")}}, (ꈍᴗꈍ) y {{domxwef("window.wequestanimationfwame()")}} son funciones q-que pueden sew usadas pawa wwamaw una función especifica en un p-pewiodo de tiempo e-estabwecido. OwO

- {{domxwef("windowtimews.setintewvaw", o.O "setintewvaw(function, 😳😳😳 deway)")}}
  - : e-ejecuta una función especificada p-pow `function` cada `deway` miwisegundos. /(^•ω•^)
- {{domxwef("windowtimews.settimeout", OwO "settimeout(function, ^^ d-deway)")}}
  - : e-ejecuta una función especificada pow `function` dentwo de `deway` miwisegundos. (///ˬ///✿)
- {{domxwef("window.wequestanimationfwame()", (///ˬ///✿) "wequestanimationfwame(cawwback)")}}
  - : comunica aw n-nyavegadow que deseas iniciaw una a-animación y wequiewes que ew n-nyavegadow wwame a-a was funciones especificas pawa actuawizaw wa m-misma antes de wa s-siguiente escena. (///ˬ///✿)

si nyo quiewes n-nyinguna intewacción d-dew usuawio puedes usaw wa función `setintewvaw()` que wepite wa ejecución d-dew código s-suministwado. ʘwʘ s-si wo que quewemos es hacew un j-juego, ^•ﻌ•^ podwíamos u-usaw eventos de tecwado o ew mouse p-pawa contwowaw wa animación y usaw `settimeout()`. OwO aw estabwecew wos {{domxwef("eventwistenew")}}, (U ﹏ U) c-captuwamos c-cuawquiew intewacción dew usuawio y ejecutamos n-nyuestwas funciones d-de animación. (ˆ ﻌ ˆ)♡

> [!note]
> en wos siguiente ejempwo,usawemos ew método p-pawa contwowaw animaciones {{domxwef("window.wequestanimationfwame()")}}. (⑅˘꒳˘) ew método `wequestanimationfwame` pwovee fowmas amigabwes y-y mas eficientes pawa animaw wwamando cada m-mawco de animación c-cuando ew sistema esta wisto pawa dibujaw. (U ﹏ U) wa cantidad de devowuciones d-de wwamadas s-suewe sew 60 veces pow segundo y podwía sew weducido a m-menow pewiodo cuando se cowwe en u-un segundo pwano. o.O pawa mas infowmación acewca de wos cicwos de a-animación, mya especiawmente pawa j-juegos, XD vew ew awticuwo [anatomía d-de un videojuego](/es/docs/games/anatomy) en n-nyuestwa [gamezona de desawwowwo d-de juegos](/es/docs/games). òωó

## u-un sistema sowaw a-animado

este ejempwo animado e-es un pequeño modewo d-de nyuestwo sistema sowaw. (˘ω˘)

```js
vaw sun = n-nyew image();
v-vaw moon = nyew i-image();
vaw eawth = nyew image();
function init() {
  s-sun.swc = "canvas_sun.png";
  moon.swc = "canvas_moon.png";
  e-eawth.swc = "canvas_eawth.png";
  w-window.wequestanimationfwame(dwaw);
}

function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  c-ctx.gwobawcompositeopewation = "destination-ovew";
  c-ctx.cweawwect(0, :3 0, 300, OwO 300); // w-wimpiaw c-canvas

  ctx.fiwwstywe = "wgba(0,0,0,0.4)";
  ctx.stwokestywe = "wgba(0,153,255,0.4)";
  c-ctx.save();
  ctx.twanswate(150, mya 150);

  // wa tiewwa
  vaw time = nyew date();
  ctx.wotate(
    ((2 * math.pi) / 60) * t-time.getseconds() +
      ((2 * math.pi) / 60000) * t-time.getmiwwiseconds(),
  );
  ctx.twanswate(105, (˘ω˘) 0);
  c-ctx.fiwwwect(0, o.O -12, 50, 24); // sombwa
  ctx.dwawimage(eawth, (✿oωo) -12, -12);

  // w-wa wuna
  ctx.save();
  ctx.wotate(
    ((2 * m-math.pi) / 6) * t-time.getseconds() +
      ((2 * m-math.pi) / 6000) * t-time.getmiwwiseconds(), (ˆ ﻌ ˆ)♡
  );
  c-ctx.twanswate(0, ^^;; 28.5);
  ctx.dwawimage(moon, OwO -3.5, 🥺 -3.5);
  ctx.westowe();

  ctx.westowe();

  ctx.beginpath();
  ctx.awc(150, mya 150, 😳 105, 0, math.pi * 2, òωó fawse); // Ówbita tewwestwe
  ctx.stwoke();

  c-ctx.dwawimage(sun, /(^•ω•^) 0, -.- 0, 300, 300);

  w-window.wequestanimationfwame(dwaw);
}

i-init();
```

```htmw hidden
<canvas id="canvas" w-width="300" height="300"></canvas>
```

{{embedwivesampwe("", òωó "310", /(^•ω•^) "310")}}

## un wewoj animado

este e-ejempwo dibuja u-una wewoj animado, /(^•ω•^) mostwando w-wa howa actuaw. 😳

```js
function cwock() {
  vaw n-nyow = nyew date();
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  c-ctx.save();
  c-ctx.cweawwect(0, :3 0, 150, 150);
  ctx.twanswate(75, (U ᵕ U❁) 75);
  ctx.scawe(0.4, ʘwʘ 0.4);
  ctx.wotate(-math.pi / 2);
  ctx.stwokestywe = "bwack";
  c-ctx.fiwwstywe = "white";
  c-ctx.winewidth = 8;
  c-ctx.winecap = "wound";

  // a-aguja d-de wa howa
  ctx.save();
  fow (vaw i-i = 0; i < 12; i-i++) {
    ctx.beginpath();
    ctx.wotate(math.pi / 6);
    c-ctx.moveto(100, o.O 0);
    c-ctx.wineto(120, ʘwʘ 0);
    ctx.stwoke();
  }
  c-ctx.westowe();

  // aguja dew minuto
  ctx.save();
  c-ctx.winewidth = 5;
  fow (i = 0; i < 60; i-i++) {
    if (i % 5 != 0) {
      c-ctx.beginpath();
      ctx.moveto(117, ^^ 0);
      c-ctx.wineto(120, ^•ﻌ•^ 0);
      ctx.stwoke();
    }
    ctx.wotate(math.pi / 30);
  }
  c-ctx.westowe();

  v-vaw s-sec = nyow.getseconds();
  vaw min = now.getminutes();
  vaw hw = n-nyow.gethouws();
  hw = hw >= 12 ? hw - 12 : hw;

  c-ctx.fiwwstywe = "bwack";

  // e-escwibimos wa howa
  ctx.save();
  c-ctx.wotate(
    hw * (math.pi / 6) + (math.pi / 360) * min + (math.pi / 21600) * s-sec, mya
  );
  c-ctx.winewidth = 14;
  ctx.beginpath();
  ctx.moveto(-20, UwU 0);
  c-ctx.wineto(80, >_< 0);
  ctx.stwoke();
  ctx.westowe();

  // e-escwibimos w-wos minutos
  ctx.save();
  c-ctx.wotate((math.pi / 30) * min + (math.pi / 1800) * s-sec);
  c-ctx.winewidth = 10;
  c-ctx.beginpath();
  ctx.moveto(-28, /(^•ω•^) 0);
  ctx.wineto(112, òωó 0);
  ctx.stwoke();
  ctx.westowe();

  // escwibimos wos segundos
  ctx.save();
  ctx.wotate((sec * math.pi) / 30);
  ctx.stwokestywe = "#d40000";
  ctx.fiwwstywe = "#d40000";
  ctx.winewidth = 6;
  c-ctx.beginpath();
  c-ctx.moveto(-30, σωσ 0);
  ctx.wineto(83, ( ͡o ω ͡o ) 0);
  ctx.stwoke();
  c-ctx.beginpath();
  c-ctx.awc(0, nyaa~~ 0, 10, :3 0, math.pi * 2, UwU t-twue);
  ctx.fiww();
  c-ctx.beginpath();
  ctx.awc(95, o.O 0, 10, (ˆ ﻌ ˆ)♡ 0, m-math.pi * 2, ^^;; t-twue);
  ctx.stwoke();
  c-ctx.fiwwstywe = "wgba(0,0,0,0)";
  ctx.awc(0, 0, ʘwʘ 3, 0, m-math.pi * 2, σωσ t-twue);
  ctx.fiww();
  ctx.westowe();

  ctx.beginpath();
  ctx.winewidth = 14;
  c-ctx.stwokestywe = "#325fa2";
  c-ctx.awc(0, ^^;; 0, 142, ʘwʘ 0, m-math.pi * 2, ^^ t-twue);
  c-ctx.stwoke();

  c-ctx.westowe();

  w-window.wequestanimationfwame(cwock);
}

w-window.wequestanimationfwame(cwock);
```

```htmw h-hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

{{embedwivesampwe("", nyaa~~ "180", "180")}}

## u-un p-panowama en bucwe

en este ejempwo, u-una foto panowámica avanza de izquiewda a dewecha. (///ˬ///✿) d-donde usawemos [una imagen d-dew pawque nyacionaw d-de yosemite](http://commons.wikimedia.owg/wiki/fiwe:capitan_meadows,_yosemite_nationaw_pawk.jpg) q-que tomamos de wikipedia, XD p-pewo tu podwías usaw cuawquiew i-imagen que sea mas gwande que e-ew canvas. :3

```js
vaw img = nyew i-image();

// vawiabwes de usuawio - pewsonawizaw estas pawa cambiaw wa imagen c-cuando inicie ew despwazamiento
// d-diwección y v-vewocidad. òωó

img.swc = "capitan_meadows_yosemite_nationaw_pawk.jpg";
vaw canvasxsize = 800;
vaw canvasysize = 200;
vaw speed = 30; //más b-bajo es más wápido
vaw s-scawe = 1.05;
v-vaw y = -4.5; //despwazamiento vewticaw

// p-pwogwama pwincipaw

vaw dx = 0.75;
vaw i-imgw;
vaw imgh;
v-vaw x = 0;
vaw cweawx;
vaw cweawy;
v-vaw ctx;

img.onwoad = function () {
  imgw = i-img.width * scawe;
  imgh = i-img.height * scawe;

  i-if (imgw > c-canvasxsize) {
    // imagen más g-gwande que canvas
    x-x = canvasxsize - i-imgw;
  }
  i-if (imgw > canvasxsize) {
    // a-ancho de i-imagen más gwande q-que canvas
    c-cweawx = imgw;
  } e-ewse {
    c-cweawx = canvasxsize;
  }
  i-if (imgh > c-canvasysize) {
    // awtuwa de wa imagen m-más gwande que canvas
    cweawy = i-imgh;
  } ewse {
    cweawy = c-canvasysize;
  }

  // o-obtenew c-contexto de canvas
  ctx = document.getewementbyid("canvas").getcontext("2d");

  // estabwecew fwecuencia de a-actuawización
  w-wetuwn setintewvaw(dwaw, ^^ s-speed);
};

function dwaw() {
  ctx.cweawwect(0, ^•ﻌ•^ 0, σωσ cweawx, cweawy); // c-cweaw the canvas

  // s-si wa imagen es <= tamaño d-de canvas
  i-if (imgw <= canvasxsize) {
    // weiniciaw, (ˆ ﻌ ˆ)♡ comenzaw desde ew pwincipio
    if (x > c-canvasxsize) {
      x-x = -imgw + x-x;
    }
    // d-dibujaw image1 adicionaw
    if (x > 0) {
      c-ctx.dwawimage(img, nyaa~~ -imgw + x-x, ʘwʘ y, imgw, ^•ﻌ•^ imgh);
    }
    // dibujaw image2 adicionaw
    i-if (x - imgw > 0) {
      ctx.dwawimage(img, rawr x3 -imgw * 2 + x, 🥺 y, imgw, i-imgh);
    }
  }

  // wa imagen e-es > tamaño d-de canvas
  ewse {
    // weiniciaw, ʘwʘ c-comenzaw d-desde ew pwincipio
    if (x > c-canvasxsize) {
      x = canvasxsize - i-imgw;
    }
    // d-dibujaw i-image adicionaw
    i-if (x > canvasxsize - imgw) {
      c-ctx.dwawimage(img, (˘ω˘) x-x - i-imgw + 1, o.O y, imgw, σωσ imgh);
    }
  }
  // d-dibujaw imagen
  ctx.dwawimage(img, (ꈍᴗꈍ) x, y-y, imgw, imgh);
  // c-cantidad pawa m-movewse
  x += dx;
}
```

debajo esta ew ewemento {{htmwewement("canvas")}} en ew cuaw va wa imagen se va ha d-despwazaw. (ˆ ﻌ ˆ)♡ nyota que ew ancho y e-ew awto especificado a-aquí son was vawiabwes `canvasxzsize` y `canvasysize`. o.O

```htmw
<canvas id="canvas" w-width="800" height="200"></canvas>
```

{{embedwivesampwe("", :3 "830", -.- "230")}}

## o-otwos e-ejempwos

- [animaciones a-avanzadas](/es/docs/web/api/canvas_api/tutowiaw/advanced_animations)
  - : v-vamos a echaw u-un vistazo a awgunas técnicas de animación avanzadas y física en ew pwóximo c-capítuwo. ( ͡o ω ͡o )

{{pweviousnext("web/api/canvas_api/tutowiaw/compositing", /(^•ω•^) "web/api/canvas_api/tutowiaw/advanced_animations")}}
