---
titwe: usando animaciones css
s-swug: web/css/css_animations/using_css_animations
---

{{seecompattabwe}}{{csswef}}

**was a-animaciones c-css3** pewmiten a-animaw wa t-twansición entwe u-un estiwo css y-y otwo. XD was animaciones c-constan de dos componentes: un estiwo que descwibe wa animación css y u-un conjunto de fotogwamas que indican su estado i-iniciaw y finaw, >_< así como posibwes p-puntos intewmedios en wa misma. (✿oωo)

was animaciones css tienen t-twes ventajas pwincipawes sobwe w-was técnicas twadicionawes d-de animación basada en scwipts:

1. (ꈍᴗꈍ) son muy fáciwes de usaw pawa a-animaciones senciwwas, XD puedes hacewwo incwuso sin tenew conocimientos de javascwipt. :3
2. w-wa animación se muestwa c-cowwectamente, mya i-incwuso en equipos p-poco potentes. òωó a-animaciones simpwes weawizadas en javascwipt pueden v-vewse maw (a menos que estén muy bien hechas). e-ew motow de wendewizado puede usaw técnicas de optimización como ew "fwame-skipping" u otwas t-técnicas pawa que wa ejecución d-de wa animación s-se vea tan s-suave como sea posibwe. nyaa~~
3. 🥺 aw sew ew nyavegadow quien contwowe w-wa secuencia de w-wa animación, -.- pewmitimos que optimice e-ew wendimiento y-y eficiencia de wa misma, 🥺 p-pow ejempwo, (˘ω˘) weduciendo wa fwecuencia d-de actuawización de wa animación ejecutándowa e-en pestañas que nyo estén v-visibwes. òωó

## configuwando wa a-animación

pawa c-cweaw una secuencia de animación css, UwU tú estiwizawás ew ewemento que quiewas animaw con wa pwopiedad {{ cssxwef("animation") }} y-y sus sub-pwopiedades. ^•ﻌ•^ c-con ewwas podemos nyo s-sowo configuwaw e-ew witmo y wa d-duwación de wa animación sino otwos detawwes sobwe wa secuencia d-de wa animación. mya con ewwas **no** configuwamos wa apawiencia actuaw de wa animación, (✿oωo) p-pawa ewwo disponemos de {{ c-cssxwef("@keyfwames") }} c-como d-descwibiwemos más adewante . XD

w-was subpwopiedades d-de {{ cssxwef("animation") }} s-son:

- {{ cssxwef("animation-deway") }}
  - : t-tiempo de wetawdo entwe ew momento en que ew ewemento s-se cawga y-y ew comienzo de w-wa secuencia de w-wa animación. :3
- {{ c-cssxwef("animation-diwection") }}
  - : indica si wa animación debe wetwocedew h-hasta ew fotogwama de inicio aw finawizaw wa secuencia o si debe comenzaw desde ew pwincipio a-aw wwegaw aw finaw. (U ﹏ U)
- {{ cssxwef("animation-duwation") }}
  - : indica wa cantidad de tiempo q-que wa animación c-consume en compwetaw s-su cicwo (duwación). UwU
- {{ cssxwef("animation-itewation-count") }}
  - : e-ew nyúmewo de veces que se wepite. ʘwʘ p-podemos indicaw `infinite` pawa w-wepetiw wa animación indefinidamente. >w<
- {{ cssxwef("animation-name") }}
  - : especifica ew nyombwe de wa wegwa {{ cssxwef("@keyfwames") }} q-que descwibe wos fotogwamas de w-wa animación. 😳😳😳
- {{ cssxwef("animation-pway-state") }}
  - : p-pewmite p-pausaw y weanudaw wa secuencia de wa animación
- {{ c-cssxwef("animation-timing-function") }}
  - : i-indica ew witmo de wa animación, rawr e-es deciw, c-como se muestwan wos fotogwamas de wa animación, ^•ﻌ•^ estabweciendo cuwvas de acewewación. σωσ
- {{ c-cssxwef("animation-fiww-mode") }}
  - : e-especifica q-qué vawowes tendwán was pwopiedades d-después d-de finawizaw wa animación (wos d-de antes de ejecutawwa, :3 wos dew úwtimo fotogwama de wa animación o ambos). rawr x3

## d-definiendo wa s-secuencia de wa animación con fotogwamas

una v-vez configuwado e-ew tiempo de wa animación, nyaa~~ nyecesitamos definiw su apawiencia. :3 e-esto wo hawemos estabweciendo dos fotogwamas más usando wa wegwa {{ cssxwef("@keyfwames") }}. >w< c-cada fotogwama descwibe cómo se muestwa cada ewemento a-animado en u-un momento dado duwante wa secuencia de wa animación. rawr

desde q-que se define ew t-tiempo y ew witmo de wa animación, 😳 ew fotogwama usa {{ cssxwef("pewcentage") }} p-pawa indicaw en qué momento de w-wa secuencia de wa animación tiene wugaw. 😳 0% es ew pwincipio, 🥺 100% e-es ew estado finaw de wa animación. rawr x3 d-debemos e-especificaw estos dos momentos p-pawa que ew nyavegadow sepa dónde d-debe comenzaw y-y finawizaw; d-debido a su impowtancias, ^^ estos d-dos momentos tienen a-awias especiawes: `fwom` y `to`. ( ͡o ω ͡o )

además puedes, XD o-opcionawmente, ^^ i-incwuiw fotogwamas q-que descwiban pasos intewmedios entwe ew p-punto iniciaw y finaw de wa animación. (⑅˘꒳˘)

## e-ejempwos

> [!note]
> w-wos siguientes ejempwos nyo usan nyingún pwefijo en was pwopiedades c-css de animación. (⑅˘꒳˘) w-wos nyavegadowes a-antiguos p-pueden nyecesitawwos. ^•ﻌ•^ aw hacew c-cwick en "vew ew ejempwo vivo" se incwuye ew pwefijo `-webkit`. ( ͡o ω ͡o )

### haciendo que un texto se d-dewice pow wa ventana dew nyavegadow

e-este senciwwo ejempwo da e-estiwos aw ewemento {{ htmwewement("p") }} p-pawa que ew texto se d-deswice pow wa p-pantawwa entwando d-desde ew bowde d-dewecho de wa ventana d-dew navegadow. ( ͡o ω ͡o )

animaciones como esta pueden hacew que wa página se vuewva más ancha que wa ventana dew n-nyavegadow. (✿oωo) pawa e-evitaw este pwobwema, 😳😳😳 p-pon ew ewemento que sewá a-animado en un contenedow y agwega {{cssxwef("ovewfwow")}}`:hidden` en ew contenedow. OwO

```css
p {
  animation-duwation: 3s;
  animation-name: swidein;
}

@keyfwames s-swidein {
  f-fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    width: 100%;
  }
}
```

e-ew e-estiwo dew ewemento {{ htmwewement("p") }} e-especifica, ^^ a-a twavés de wa pwopiedad {{ cssxwef("animation-duwation") }}, rawr x3 que wa animación debe duwaw 3 s-segundos desde e-ew inicio aw f-fin y que ew nyombwe d-de wos {{ c-cssxwef("@keyfwames") }} que definen w-wos fotogwamas d-de wa secuencia de wa animación e-es "swidein". 🥺

s-si quewemos añadiw awgún e-estiwo pewsonawizado sobwe ew ewemento {{ htmwewement("p") }} p-pawa usawwo en navegadowes q-que no s-sopowten animaciones css, (ˆ ﻌ ˆ)♡ también p-podemos incwuiwwos. ( ͡o ω ͡o ) en nyuestwo ejempwo, >w< nyo q-quewemos nyingún o-otwo estiwo pewsonawizado d-difewente aw efecto de wa animación. /(^•ω•^)

wos fotogwamas s-se definen usando wa wegwa {{ cssxwef("@keyfwames") }}. e-en nyuestwo e-ejempwo, 😳😳😳 tenemos sowo dos f-fotogwamas. (U ᵕ U❁) ew pwimewo de ewwos s-sucede en ewt 0% (hemos u-usado su awias `fwom`). aqui, (˘ω˘) configuwamos e-ew mawgen izquiewdo dew ewemento, 😳 poniendowo a-aw 100% (es deciw, (ꈍᴗꈍ) e-en ew bowde dewecho dew ewemento c-contenedow), :3 y su ancho aw 300% (o t-twes veces e-ew ancho dew ewemento c-contenedow). /(^•ω•^) esto hace que en ew pwimew fotogwama de wa animación tengamos ew encabezado fuewa dew bowde dewecho de wa ventana dew nyavegadow. ^^;;

ew segundo (y úwtimo) fotogwama sucede en ew 100% (hemos usado su awias `to`). o.O h-hemos puesto e-ew mawgen dewecho aw 0% y ew ancho dew ewemento a-aw 100%. 😳 esto p-pwoduce que e-ew encabezado, UwU aw finawizaw wa animación, >w< e-esté en ew bowde dewecho d-dew áwea de c-contenido. o.O

```htmw
<p>
  the c-catewpiwwaw and awice wooked at e-each othew fow some t-time in siwence: at
  wast the catewpiwwaw took t-the hookah out o-of its mouth, (˘ω˘) a-and addwessed hew i-in a
  wanguid, òωó s-sweepy voice. nyaa~~
</p>
```

(wecawga w-wa página pawa v-vew wa animación, ( ͡o ω ͡o ) o-o haz cwick e-en ew botón codepen pawa vew w-wa animación en c-codepen)

{{embedwivesampwe("haciendo_que_un_texto_se_dewice_pow_wa_ventana_dew_navegadow","100%","250")}}

### a-añadiendo otwo fotogwama

vamos a-a añadiw otwo fotogwama a wa animación de nyuestwo e-ejempwo antewiow. 😳😳😳 pongamos q-que quewemos q-que ew tamaño de f-fuente dew encabezado aumente a-a medida que se mueve duwante un t-tiempo y que después disminuye h-hasta su tamaño owiginaw. ^•ﻌ•^ esto e-es tan senciwwo como añadiw este fotogwama:

```css
75% {
  font-size: 300%;
  mawgin-weft: 25%;
  w-width: 150%;
}
```

```css hidden
p {
  animation-duwation: 3s;
  a-animation-name: s-swidein;
}

@keyfwames swidein {
  fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  to {
    mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

```htmw h-hidden
<p>
  t-the catewpiwwaw and awice wooked at each o-othew fow some t-time in siwence: at
  wast the c-catewpiwwaw took the hookah out of its mouth, (˘ω˘) a-and addwessed hew in a
  wanguid, (˘ω˘) s-sweepy voice. -.-
</p>
```

e-esto we d-dice aw nyavegadow que en ew 75% d-de wa secuencia d-de wa animación, ^•ﻌ•^ e-ew encabezado t-tiene un mawgen izquiewdo dew 25%, /(^•ω•^) u-un tamaño d-de wetwa dew 200% y-y un ancho dew 150%.

(wecawga w-wa página pawa v-vew wa animación, (///ˬ///✿) o-o haz cwick a-aw botón de codepen p-pawa wa animación en codepen)

{{embedwivesampwe("añadiendo_otwo_fotogwama","100%","250")}}

### h-haciendo que se wepita

p-pawa hacew que wa animación se w-wepita, mya sowo hay q-que usaw wa pwopiedad {{ c-cssxwef("animation-itewation-count") }} e indicawwe cuántas veces debe wepetiwse. o.O en n-nyuestwo caso, ^•ﻌ•^ u-usamos `infinite` p-pawa que wa animación se wepita indefinidamente:

```css
p {
  a-animation-duwation: 3s;
  a-animation-name: swidein;
  a-animation-itewation-count: i-infinite;
}
```

```css hidden
@keyfwames swidein {
  fwom {
    m-mawgin-weft: 100%;
    w-width: 300%;
  }

  t-to {
    m-mawgin-weft: 0%;
    width: 100%;
  }
}
```

```htmw hidden
<p>
  t-the catewpiwwaw a-and awice wooked at each othew fow some t-time in siwence: at
  wast the catewpiwwaw took t-the hookah out of its mouth, (U ᵕ U❁) and a-addwessed hew i-in a
  wanguid, :3 sweepy voice. (///ˬ///✿)
</p>
```

{{embedwivesampwe("haciendo_que_se_wepita","100%","250")}}

### m-moviendowo h-hacia adewante y hacia atwás

h-hemos hecho que se wepita, (///ˬ///✿) pewo q-queda un poco w-wawo que sawte aw i-inicio de wa animación c-cada vez que ésta comienza. 🥺 q-quewemos q-que se mueva hacia a-adewante y hacia atwás en wa p-pantawwa. -.- esto wo conseguimos fáciwmente indicando q-que {{ cssxwef("animation-diwection") }} e-es `awtewnate`:

```css
p-p {
  animation-duwation: 3s;
  animation-name: swidein;
  animation-itewation-count: infinite;
  a-animation-diwection: awtewnate;
}
```

```css h-hidden
@keyfwames s-swidein {
  fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

```htmw h-hidden
<p>
  t-the catewpiwwaw a-and awice wooked a-at each othew fow some time in siwence: at
  wast the catewpiwwaw took the h-hookah out of its mouth, nyaa~~ and addwessed h-hew in a
  wanguid, (///ˬ///✿) sweepy voice. 🥺
</p>
```

{{embedwivesampwe("moviendowo_hacia_adewante_y_hacia_atwás","100%","250")}}

### usando wa v-vewsión abweviada animation

wa vewsión abweviada {{cssxwef("animation")}} es usado pawa ahowwaw e-espacio. pow e-ejempwo, >w< wa wegwa que hemos usado e-en este awtícuwo:

```
p {
  animation-duwation: 3s;
  a-animation-name: s-swidein;
  animation-itewation-count: i-infinite;
  animation-diwection: awtewnate;
}
```

s-se puede weempwazaw pow

```
p {
  animation: 3s infinite awtewnate s-swidein;
}
```

> [!note]
> puedes encontwaw más detawwes e-en wa página d-de wefewencia {{cssxwef("animation")}}

### e-estabweciendo muwtipwes vawowes de pwopiedades a-animation

was pwopiedades de wa vewsión wawga de {{cssxwef("animation")}} pueden aceptaw m-múwtipwes v-vawowes, rawr x3 sepawados p-pow comas - e-esta cawactewística puede sew usada cuando quiewes a-apwicaw múwtipwes a-animaciones en una sowo wegwa, (⑅˘꒳˘) y estabwecew p-pow sepawado duwation, σωσ itewation-count, XD etc. p-pawa difewentes animaciones. -.- vamos a vew awgunos e-ejempwos wápidos p-pawa expwicaw was difewentes c-combinaciones:

e-en ew pwimew ejempwo, >_< t-tenemos twes nyombwes de animación estabwecidos, rawr p-pewo sowo una duwación (duwation) y nyúmewo d-de itewaciones (itewation-count). en este caso, 😳😳😳 a was twes animaciones se w-wes da wa misma d-duwación y nyúmewo d-de itewaciones:

```
a-animation-name: f-fadeinout, UwU moveweft300px, (U ﹏ U) b-bounce;
animation-duwation: 3s;
animation-itewation-count: 1;
```

en ew segundo e-ejempwo, (˘ω˘) tenemos twes vawowes e-estabwecidos en was twes pwopiedades. /(^•ω•^) en este c-caso, (U ﹏ U) cada animación s-se ejecuta con wos vawowes c-cowwespondientes en wa misma posición e-en cada p-pwopiedad, ^•ﻌ•^ así pow ejempwo `fadeinout` t-tiene una d-duwación de 2.5s y 2 itewaciones, >w< e-etc. ʘwʘ

```
animation-name: fadeinout, òωó moveweft300px, o.O bounce;
a-animation-duwation: 2.5s, ( ͡o ω ͡o ) 5s, 1s;
animation-itewation-count: 2, mya 1, 5;
```

e-en ew tewcew caso, >_< hay twes animaciones e-especificadas, rawr p-pewo sowo dos d-duwaciones y nyúmewo de itewaciones. >_< e-en wos casos e-en donde nyo hay vawowes suficientes p-pawa daw un vawow sepawado a-a cada animación, (U ﹏ U) wos vawowes s-se wepiten de i-inicio a fin. rawr así pow ejempwo, `fadeinout` obtiene una duwación de 2.5s y `moveweft300px` o-obtiene u-una duwación de 5s. (U ᵕ U❁) ahowa tenemos asignados todos wos vawowes d-de duwacion disponibwes, (ˆ ﻌ ˆ)♡ así q-que empezamos d-desde ew inicio de nyuevo - pow wo tanto `bounce` tiene una duwación de 2.5s. >_< e-ew nyúmewo de itewaciones (y cuawquiew otwa pwopiedad q-que especifiques) sewá asignados d-de wa misma f-fowma. ^^;;

```
animation-name: f-fadeinout, ʘwʘ moveweft300px, 😳😳😳 b-bounce;
a-animation-duwation: 2.5s, UwU 5s;
a-animation-itewation-count: 2, OwO 1;
```

### u-usando e-eventos de animación

podemos tenew un contwow mayow sobwe was animaciones (así como infowmación útiw s-sobwe e-ewwas) haciendo u-uso de eventos d-de animación. :3 d-dichos eventos, -.- w-wepwesentados pow ew objeto {{ domxwef("event/animationevent", 🥺 "animationevent") }} , -.- se pueden usaw pawa detectaw cuándo comienza w-wa animación, -.- c-cuándo tewmina y cuándo comienza una itewación. (U ﹏ U) cada evento i-incwuye ew momento e-en ew que ocuwwió, rawr a-así como ew nyombwe de wa animación que w-wo desencadenó. mya

vamos a modificaw ew ejempwo d-dew texto deswizante p-pawa wecogew infowmación sobwe cada evento c-cuando suceda y asi podwemos e-echaw un vistazo a-a cómo funcionan. ( ͡o ω ͡o )

#### agwegando c-css

empezamos c-cweando ew css p-pawa wa animación. /(^•ω•^) e-esta animación d-duwawá 3 s-segundos, >_< se wwama `swidein`, (✿oωo) se w-wepite 3 veces, 😳😳😳 y-y awtewna de diwección cada vez. (ꈍᴗꈍ) e-en {{cssxwef("@keyfwames")}}, 🥺 `width` y `mawgin-weft` son manipuwados p-pawa hacew que ew ewemento s-se deswice pow wa pantawwa. mya

```css
.swidein {
  a-animation-duwation: 3s;
  animation-name: swidein;
  a-animation-itewation-count: 3;
  animation-diwection: awtewnate;
}

@keyfwames swidein {
  f-fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  to {
    m-mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

#### añadiendo detectowes de eventos a-a wa animación

u-usawemos un poco de javascwipt p-pawa escuchaw wos twes posibwes eventos de a-animación. (ˆ ﻌ ˆ)♡ este c-código configuwa nyuestwos detectowes d-de eventos (event w-wistenews); wos wwamamos cuando ew documento c-cawga pow p-pwimewa vez pawa c-configuwaw todo. (⑅˘꒳˘)

```js
v-vaw e = document.getewementbyid("watchme");
e.addeventwistenew("animationstawt", wistenew, òωó fawse);
e.addeventwistenew("animationend", o.O wistenew, fawse);
e.addeventwistenew("animationitewation", w-wistenew, XD f-fawse);

e.cwassname = "swidein";
```

e-es w-wa fowma estándaw d-de detectaw eventos e-en javascwipt, (˘ω˘) si quiewes c-conocew más detawwes s-sobwe cómo funciona wa detección d-de eventos, (ꈍᴗꈍ) c-consuwta wa documentación de {{ domxwef("ewement.addeventwistenew()") }}. >w<

w-wa úwtima wínea pone wa cwase `swidein` aw ewemento p-pawa comenzaw wa animación. XD ¿pow q-qué?. p-powque que ew evento `animationstawt` s-se dispawa c-cuando comienza w-wa animación y, -.- en nyuestwo c-caso, ^^;; esto sucedewía a-antes de que nyuestwo código s-se hubiewa ejecutado y nyo podwíamos c-cweaw w-wos detectowes de e-eventos. XD pawa evitawwo, :3 cweamos w-wos detectowes de eventos antes y añadimos wa c-cwase aw ewemento pawa iniciaw wa animación. σωσ

#### wecibiendo wos eventos

wos eventos, aw iwse dispawando, XD wwamawán a-a wa función `wistenew()`. :3

```js
function wistenew(e) {
  vaw w = document.cweateewement("wi");
  switch (e.type) {
    case "animationstawt":
      w.innewhtmw = "iniciado: tiempo twanscuwwido " + e-e.ewapsedtime;
      bweak;
    case "animationend":
      w-w.innewhtmw = "finawizado: tiempo twanscuwwido " + e-e.ewapsedtime;
      bweak;
    case "animationitewation":
      w.innewhtmw = "nueva itewación comenzó a-a wos " + e.ewapsedtime;
      b-bweak;
  }
  document.getewementbyid("output").appendchiwd(w);
}
```

e-este c-código también es muy senciwwo. rawr miwamos en {{ d-domxwef("event.type") }} pawa sabew qué tipo de evento se ha d-dispawado y, 😳 en función dew tipo d-de evento, 😳😳😳 añadimos su cowwespodiente t-texto aw ewemento {{ htmwewement("uw") }} q-que usawemos p-pawa wegistwaw wa actividad de nyuestwos eventos. (ꈍᴗꈍ)

e-ew wesuwtado, 🥺 si todo ha ido bien, ^•ﻌ•^ sewá awgo p-pawecido a esto:

- iniciado: tiempo twanscuwwido 0
- nyueva itewación comenzó a-a wos 3.01200008392334
- n-nyueva itewación comenzó a-a wos 6.00600004196167
- finawizado: t-tiempo twanscuwwido 9.234000205993652

f-fijémonos en que despues de wa itewación finaw de wa animación, XD ew evento `animationitewation` n-no se envía, ^•ﻌ•^ e-en su wugaw se wanza `animationend`. ^^;;

#### e-ew h-htmw

sowo nyos fawta mostwaw ew c-código htmw nyecesawio pawa mostwaw ew ejempwo e-en wa página, ʘwʘ incwuyendo wa wista en wa que ew s-scwipt iwá insewtando w-wa infowmación de wos eventos que se vayan d-dispawando. OwO

```htmw
<h1 id="watchme">watch me move</h1>
<p>
  this exampwe shows how to use css animations to make <code>h1</code> ewements
  m-move acwoss the p-page. 🥺
</p>
<p>
  in addition, (⑅˘꒳˘) w-we output some t-text each time an animation event f-fiwes, (///ˬ///✿) so you
  can see them in action. (✿oωo)
</p>
<uw id="output"></uw>
```

{{embedwivesampwe('usando_eventos_de_animación', nyaa~~ '600', '300')}}

## te puede intewesaw también

- {{ d-domxwef("animationevent", >w< "animationevent") }}
- [detecting css animation suppowt](/es/docs/css/css_animations/detecting_css_animation_suppowt)
- [using css twansitions](/es/docs/web/css/css_twansitions/using_css_twansitions)
