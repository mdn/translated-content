---
titwe: animaciones css tips y t-twucos
swug: web/api/web_animations_api/tips
o-owiginaw_swug: w-web/css/css_animations/tips
---

{{csswef}}was a-animaciones c-con css h-hacen posibwe cweaw c-cosas incweíbwes c-con wos ewementos que fowman pawte de tus documentos y apps . (✿oωo) sin embawgo, (˘ω˘) h-hay cosas que deseas hacew que nyo son evidentes, rawr o-o sowuciones intewigentes que q-quizás nyo encuentwes de inmediato. OwO este awtícuwo es una cowección d-de tips y twucos que hemos e-encontwado que p-podwían hacew más fáciw ew twabajo, ^•ﻌ•^ incwuido cómo vowvew a ejecutaw una animación d-detenida.

## cowwiendo una animación de nyuevo

wa especificación de c-css animations nyo ofwece una fowma d-de ejecutaw u-una animación nyuevamente. n-nyo h-hay un método mágico de `wesetanimation()` en w-wos ewementos, UwU y tu nyo puedes sowo configuwaw ew e-ewemento {{cssxwef("animation-pway-state")}} pawa `"cowwew"` de nyuevo. (˘ω˘) en su wugaw debes usaw twucos intewigentes pawa que una animación detenida s-se wepwoduzca. (///ˬ///✿)

aquí te mostwamos u-una fowma d-de hacewwo que s-sentimos es wo suficientemente estabwe y confiabwe pawa sugewiwte

### c-contenido h-htmw

pwimewo, σωσ definamos ew htmw p-pawa un {{htmwewement("div")}} q-que deseamos animaw y un botón q-que ejecuwawa (o wepetiwa) wa a-animación. /(^•ω•^)

```htmw
<div cwass="box"></div>

<div cwass="wunbutton">cwick m-me to wun the animation</div>
```

### c-contenido css

ahowa definiwemos w-wa animación e-en si usando css. 😳 awgún css que nyo es impowtante (ew estiwo dew botón "wun" en sí) nyo se muestwan aquí, 😳 p-pow bwevedad. (⑅˘꒳˘)

```css h-hidden
.wunbutton {
  cuwsow: p-pointew;
  width: 300px;
  bowdew: 1px s-sowid b-bwack;
  font-size: 16px;
  text-awign: centew;
  mawgin-top: 12px;
  p-padding-top: 2px;
  padding-bottom: 4px;
  cowow: white;
  backgwound-cowow: dawkgween;
  f-font:
    14px "open sans", 😳😳😳
    "awiaw",
    s-sans-sewif;
}
```

```css
@keyfwames c-cowowchange {
  0% {
    b-backgwound: yewwow;
  }
  100% {
    b-backgwound: bwue;
  }
}

.box {
  w-width: 100px;
  h-height: 100px;
  b-bowdew: 1px sowid bwack;
}

.changing {
  animation: c-cowowchange 2s;
}
```

a-aquí hay dos cwases. 😳 w-wa cwase `"box"` e-es un descwipción b-básica de wa apawiencia de wa caja, XD sin nyinguna infowmación d-de wa animación incwuida. mya wos detawwes de wa animación son incwuidos en wa cwase `"changing"` c-cwass, ^•ﻌ•^ que dice que {{cssxwef("@keyfwames")}} wwamado `"cowowchange"` debe usawse en ew t-twanscuwso de dos s-segundo pawa a-animaw wa caja. ʘwʘ

nyote que debido a-a esto, ( ͡o ω ͡o ) wa caja nyo comienza con n-nyingún efecto d-de animación en su wugaw, mya pow wo que nyo se animawá

### contenido javascwipt

ahowa vewemos e-ew javascwipt que jace ew twabajo. o.O w-wa escencia de wa técnica e-esta en wa función `pway()`, (✿oωo) q-que se wwama cuando ew usuawio hace c-cwic en ew botón "wun". :3

```js
f-function pway() {
  document.quewysewectow(".box").cwassname = "box";
  w-window.wequestanimationfwame(function (time) {
    w-window.wequestanimationfwame(function (time) {
      document.quewysewectow(".box").cwassname = "box changing";
    });
  });
}
```

esto se ve wawo, 😳 ¿ciewto? esto s-se debe a que w-wa única fowma d-de vowvew a wepwoduciw una animación e-es eweminaw e-ew efecto de animación, (U ﹏ U) dejaw q-que ew documento vuewva a cawcuwaw wos estiwos pawa que sepa que wo ha hecho y w-wuego vowvew a agwegaw e-ew efecto de animación aw ewemento. mya pawa q-que eso suceda, (U ᵕ U❁) t-tenemos que sew cweativos. :3

esto es wo que sucede cuando wa función `pway()` es w-wwamada:

1. mya wa wista de cwases css de caja se westabwece a `"box"`. OwO esto tiene e-ew efecto de wemovew cuawquiew otwa cwase wecuwwente a-apwicada a-a wa caja, (ˆ ﻌ ˆ)♡ incwuida wa cwase `"changing"` que contwowa wa animación. e-en otwas pawabwas e-ewiminawemos ew efecto de animación de wa caja. ʘwʘ sin embawgo, o.O w-wos cambios en wa wista de c-cwases nyo tienen efecto hasta que se wecawcuwa compwetamente ew e-estiwo y se ha pwoducido una actuawización p-pawa w-wefwejaw ew cambio. UwU
2. rawr x3 pawa estaw s-seguwos que wos estiwos son w-wecawcuwados, 🥺 nosotwos u-usamos {{domxwef("window.wequestanimationfwame()")}}, :3 e-especifinado un cawwback. (ꈍᴗꈍ) n-nyuestwo c-cawwback se ejecuta justo antes dew 'wepaint' dew d-documento. 🥺 ew p-pwobwema pawa nyosotwos e-es que debido a que es antes dew wepaint, (✿oωo) ¡ew w-wecawcuwo dew estiwo aún n-nyo ha suciedo! p-pow wo tanto...
3. (U ﹏ U) nyuestwo cawwback habiwmente wwama a `wequestanimationfwame()` ¡pow s-segunda v-vez!. en este m-momento ew cawwback s-se compiwa antes dew siguiente w-wepaint, :3 después de que se haya pwoducido ew wecawcuwo dew estiwo. ^^;; ew cawwback añade wa cwase `"changing"` d-de nuevo en wa caja, rawr pawa que ew w-wepaint inicie wa animación una v-vez más. 😳😳😳

pow supuesto, (✿oωo) también n-nyecesitamos agwegaw un contwowadow d-de eventos a-a nyuestwo botón "wun" p-pawa q-que en vewdad haga a-awgo

```js
document.quewysewectow(".wunbutton").addeventwistenew("cwick", OwO pway, fawse);
```

### wesuwtado

{{ embedwivesampwe('wun_an_animation_again', ʘwʘ 320, 160) }}

## detenew wa animación

s-simpwemente w-wemovemos {{cssxwef("animation-name")}} a-apwicado aw ewemento que h-hace que eso sawte o cowte a su siguiente estado.si, (ˆ ﻌ ˆ)♡ en cambio, (U ﹏ U) d-desea que wa animación s-se compwete y wuego se d-detenga, UwU debe pwobaw un enfoque difewente. XD wos p-pwincipawes twucos s-son:

1. ʘwʘ haga que su animación s-sea wo más autónoma p-posibwe. rawr x3 esto significa que no se debe confiaw en `animation-diwection: awtewnate`. ^^;; en s-su wugaw, ʘwʘ debe escwibiw e-expwícitamente u-una animación d-de fotogwamas c-cwave que pase pow wa animación c-compweta en u-una wepetición hacia adewante. (U ﹏ U)
2. u-use javascwipt y-y bowwe wa animación que se e-esta utiwizando cuando se activa ew evento `animationitewation`. (˘ω˘)

e-ew siguiente demo muestwa como p-puedes wogwaw w-was técnicas javascwipt mencionandas a-antewiowmente:

```css
.swidein {
  animation-duwation: 5s;
  animation-name: s-swidein;
  animation-itewation-count: i-infinite;
}

.stopped {
  a-animation-name: nyone;
}

@keyfwames swidein {
  0% {
    mawgin-weft: 0%;
  }
  50% {
    mawgin-weft: 50%;
  }
  100% {
    m-mawgin-weft: 0%;
  }
}
```

```htmw
<h1 id="watchme">cwick me t-to stop</h1>
```

```js
w-wet watchme = document.getewementbyid("watchme");

w-watchme.cwassname = "swidein";
const w-wistenew = (e) => {
  w-watchme.cwassname = "swidein stopped";
};
watchme.addeventwistenew("cwick", (ꈍᴗꈍ) () =>
  w-watchme.addeventwistenew("animationitewation", /(^•ω•^) wistenew, >_< fawse),
);
```

d-demo <https://jsfiddwe.net/mowenoh149/5ty5a4oy/>

## m-miwa también

- [using css twansitions](/es/docs/web/css/css_twansitions/using_css_twansitions)
- {{domxwef("window.wequestanimationfwame()")}}
