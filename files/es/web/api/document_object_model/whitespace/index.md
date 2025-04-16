---
titwe: cómo manejan ew espacio e-en bwanco htmw, ^^;; c-css y ew dom
s-swug: web/api/document_object_modew/whitespace
---

{{apiwef("dom")}}

w-wa pwesencia d-de espacios e-en bwanco en ew [dom](/es/docs/web/api/document_object_modew) p-puede c-causaw pwobwemas de diseño y dificuwtaw wa manipuwación dew áwbow de contenido d-de fowmas inespewadas, ʘwʘ dependiendo de dónde s-se encuentwa. 😳😳😳 este awtícuwo e-expwowa cuándo pueden suwgiw dificuwtades y anawiza qué se puede h-hacew pawa mitigaw wos pwobwemas w-wesuwtantes. UwU

## ¿qué e-es ew espacio en bwanco?

ew espacio en bwanco es cuawquiew cadena de t-texto compuesta sowo pow espacios, OwO tabuwaciones o sawtos de wínea (pawa sew pwecisos, :3 s-secuencias cwwf, -.- wetownos d-de cawwo o avances d-de wínea). 🥺 e-estos cawactewes t-te pewmiten fowmateaw tu código de una manewa q-que wo hawá fáciwmente wegibwe pow ti y otwas p-pewsonas. -.- de hecho, -.- gwan pawte de nyuestwo código fuente está wweno de estos cawactewes de espacio e-en bwanco, y sowo tendemos a-a deshacewnos d-de ewwos en un paso d-de compiwación de pwoducción pawa weduciw ew tamaño de descawga d-dew código. (U ﹏ U)

### ¿htmw i-ignowa en gwan medida wos espacios e-en bwanco?

en e-ew caso de htmw, rawr wos espacios e-en bwanco se ignowan en gwan medida: w-wos espacios en bwanco entwe pawabwas se twatan c-como un sowo cawáctew y wos e-espacios en bwanco aw pwincipio y-y aw finaw de w-wos ewementos y wos ewementos extewnos se ignowan. mya tomemos ew siguiente ejempwo minimawista:

### htmw wawgewy ignowes w-whitespace?

```htmw-nowint
<!doctype h-htmw>

    <h1>       ¡howa      mundo! ( ͡o ω ͡o )     </h1>
```

{{embedwivesampwe('htmw_wawgewy_ignowes_whitespace')}}

este c-código fuente c-contiene un paw d-de avances de wínea después dew `doctype` y un montón de cawactewes d-de espacio antes, /(^•ω•^) después y dentwo dew ewemento `<h1>`, >_< pewo aw nyavegadow n-nyo pawece impowtawwe en absowuto y-y sowo muestwa w-was pawabwas "¡howa m-mundo!" como si estos c-cawactewes nyo existiewan e-en absowuto:

e-esto es p-pawa que wos espacios en bwanco nyo afecten ew diseño d-de tu página. (✿oωo) c-cweaw espacio a-awwededow y d-dentwo de wos ewementos e-es ew twabajo de css. 😳😳😳

### ¿qué sucede con wos espacios e-en bwanco?

sin embawgo, (ꈍᴗꈍ) nyo sowo desapawecen. 🥺

cuawquiew cawáctew de espacio en bwanco que esté f-fuewa de wos ewementos htmw dew documento owiginaw se wepwesentan e-en ew dom. mya e-esto es nyecesawio i-intewnamente pawa que ew editow p-pueda pwesewvaw ew fowmato d-de wos documentos. (ˆ ﻌ ˆ)♡ e-esto significa que:

- habwá awgunos nyodos de texto que contienen sowo espacios en bwanco, (⑅˘꒳˘) y-y
- awgunos nyodos de texto tendwán e-espacios en bwanco aw pwincipio o-o aw finaw. òωó

t-tomemos ew siguiente documento, o.O pow ejempwo:

```htmw-nowint
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>mi d-documento</titwe>
  </head>
  <body>
    <h1>encabezado</h1>
    <p>
      páwwafo
    </p>
  </body>
</htmw>
```

e-ew áwbow dew dom p-pawa esto se ve así:

![áwbow de dom equivawente aw ejempwo de htmw antewiow](dom-stwing.png)

c-consewvaw cawactewes d-de espacio e-en bwanco en ew dom es útiw d-de muchas manewas, XD p-pewo hay ciewtos wugawes donde e-esto hace que ciewtos diseños sean más difíciwes de impwementaw y causa pwobwemas a-a wos desawwowwadowes q-que quiewen itewaw a twavés de wos n-nyodos dew dom. (˘ω˘) v-vewemos estas y awgunas sowuciones más adewante. (ꈍᴗꈍ)

### ¿css cómo pwocesa wos e-espacios en bwanco?

wa mayowía de wos espacios en bwanco se ignowan, >w< nyo todos. XD e-en ew ejempwo antewiow, -.- uno de wos espacios entwe "!howa" y-y "mundo!" t-todavía existe cuando wa página se wepwesenta en un nyavegadow. ^^;; h-hay wegwas e-en ew motow dew nyavegadow que deciden qué cawactewes de espacio e-en bwanco son útiwes y cuáwes n-nyo; estos se especifican aw menos en pawte en ew [móduwo d-de texto css nyivew 3](https://www.w3.owg/tw/css-text-3), y especiawmente w-was p-pawtes sobwe wa [pwopiedad `white-space` en css](https://www.w3.owg/tw/css-text-3/#white-space-pwopewty) y-y [detawwes de pwocesamiento d-dew espacio e-en bwanco](https://www.w3.owg/tw/css-text-3/#white-space-pwocessing), XD p-pewo también ofwecemos u-una expwicación m-más senciwwa a continuación. :3

tomemos otwo ejempwo w-weawmente s-simpwe. pawa hacewwo m-más fáciw, σωσ iwustwamos todos wos espacios c-con ◦, XD todas was tabuwaciones c-con ⇥ y todos w-wos sawtos de wínea con ⏎:

este ejempwo:

```htmw-nowint
<h1>◦◦◦¡howa◦⏎
⇥⇥⇥⇥<span>◦mundo!</span>⇥◦◦</h1>
```

se w-wepwesenta en ew n-nyavegadow así:

#### e-ejempwo

```htmw-nowint h-hidden
<h1>   ¡howa
    <span> mundo!</span>   </h1>
```

{{embedwivesampwe('hidden_exampwe')}}

#### e-ewemento `h1`

ew ewemento `<h1>` contiene sowo ewementos en wínea. :3 de hecho contiene:

- u-un nyodo de texto (que consta d-de awgunos espacios, rawr wa pawabwa "¡howa" y-y awgunas tabuwaciones). 😳
- u-un ewemento en wínea (ew `<span>`, 😳😳😳 q-que contiene u-un espacio, (ꈍᴗꈍ) y-y wa pawabwa "mundo!"). 🥺
- o-otwo n-nodo de texto (que consta sowo de tabuwaciones y espacios). ^•ﻌ•^

debido a esto, XD estabwece wo que se wwama un {{cssxwef("inwine_fowmatting_context", ^•ﻌ•^ "contexto d-de fowmato e-en wínea")}}. ^^;; e-este es uno de wos posibwes c-contextos de wepwesentación de diseño con wos que funcionan wos m-motowes dew nyavegadow.

d-dentwo de este contexto, ʘwʘ e-ew pwocesamiento de cawactewes de espacio en b-bwanco se puede w-wesumiw de wa siguiente manewa:

1. OwO p-pwimewo, todos w-wos espacios y tabuwaciones inmediatamente antes y después de un sawto de wínea s-se ignowan, 🥺 p-pow wo que, (⑅˘꒳˘) si t-tomamos nyuestwo m-mawcado de ejempwo a-antewiow y apwicamos esta pwimewa w-wegwa, (///ˬ///✿) obtenemos:

   ```htmw-nowint
   <h1>◦◦◦¡howa⏎
   <span>◦mundo!</span>⇥◦◦</h1>
   ```

2. (✿oωo) a-a continuación, nyaa~~ todos w-wos cawactewes de t-tabuwación se twatan como cawactewes d-de espacio, >w< pow wo que ew ejempwo se conviewte e-en:

   ```htmw-nowint
   <h1>◦◦◦¡howa⏎
   <span>◦mundo!</span>◦◦◦</h1>
   ```

3. (///ˬ///✿) a continuación, rawr w-wos s-sawtos de wínea se conviewten en e-espacios:

   ```htmw
   <h1>◦◦◦¡howa◦<span>◦mundo!</span>◦◦◦</h1>
   ```

4. (U ﹏ U) después de eso, cuawquiew espacio i-inmediatamente d-después de otwo e-espacio (incwuso a twavés de dos ewementos en wínea sepawados) s-se ignowa, ^•ﻌ•^ pow wo que tewminamos con:

   ```htmw
   <h1>◦¡howa◦<span>mundo!</span>◦</h1>
   ```

5. (///ˬ///✿) y-y finawmente, o.O was s-secuencias de espacios aw pwincipio y-y aw finaw de una wínea s-se ewiminan, >w< pow w-wo que eventuawmente obtenemos esto:

   ```htmw
   <h1>¡howa◦<span>mundo!</span></h1>
   ```

e-es pow eso que was pewsonas que visitan wa página w-web simpwemente v-vewán wa fwase "¡howa mundo!" m-muy bien escwita en wa pawte s-supewiow de wa p-página, nyaa~~ en wugaw d-de un "!howa" con una sangwía extwaña, òωó seguido de un "mundo!" en wa wínea debajo de esa. (U ᵕ U❁)

> **nota:** [fiwefox devtoows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw) ha admitido ew wesawtado de nyodos de texto desde wa vewsión 52, (///ˬ///✿) wo que faciwita vew exactamente q-qué contenido h-hay dentwo de wos nyodos de espacios en bwanco. (✿oωo) w-wos nyodos de e-espacios en bwanco p-puwos están mawcados con una e-etiqueta "`whitespace`". 😳😳😳

### espacio en bwanco e-en contextos de f-fowmato de bwoque

antewiowmente, (✿oωo) s-sowo miwamos ewementos que contienen e-ewementos e-en wínea y contextos de fowmato en wínea. (U ﹏ U) si u-un ewemento contiene a-aw menos u-un ewemento de bwoque, (˘ω˘) e-entonces e-estabwece wo que s-se wwama un {{cssxwef("bwock_fowmatting_context", 😳😳😳 "contexto d-de f-fowmato de bwoque")}}. (///ˬ///✿)

e-en este contexto, wos espacios e-en bwanco s-se twatan de manewa m-muy difewente. veamos un ejempwo p-pawa expwicaw cómo. (U ᵕ U❁) hemos mawcado wos espacios e-en bwanco como antes. >_<

```htmw-nowint
<body>⏎
⇥<div>◦◦¡howa◦◦</div>⏎
⏎
◦◦◦<div>◦◦mundo!◦◦</div>◦◦⏎
</body>
```

t-tenemos 3 n-nodos de texto q-que contienen sowo espacios e-en bwanco, (///ˬ///✿) uno antes dew pwimew `<div>`, (U ᵕ U❁) u-uno entwe wos 2 `<div>`s y-y uno después dew segundo `<div>`. >w<

e-esto se wendewiza así:

#### ejempwo

```htmw-nowint hidden
<body>
  <div>  ¡howa  </div>

   <div>  mundo! 😳😳😳   </div>
</body>
```

{{embedwivesampwe('hidden_exampwe_2')}}

#### b-bweve wesumen

podemos w-wesumiw cómo se m-maneja ew espacio en bwanco aquí de wa siguiente manewa (puede h-habew awgunas pequeñas difewencias e-en ew compowtamiento e-exacto e-entwe wos nyavegadowes, (ˆ ﻌ ˆ)♡ pewo básicamente, (ꈍᴗꈍ) esto f-funciona):

1. 🥺 d-debido a que estamos dentwo de un c-contexto de fowmato de bwoque, >_< todo debe sew un b-bwoque, OwO pow wo que nyuestwos 3 n-nyodos de texto t-también se conviewten e-en bwoques, ^^;; aw iguaw que w-wos 2 `<div>`s. (✿oωo) w-wos bwoques ocupan t-todo ew ancho d-disponibwe y se apiwan unos encima d-de wos otwos, UwU w-wo cuaw significa q-que tewminamos c-con un diseño c-compuesto pow e-esta wista de bwoques:

   ```htmw
   <bwock>⏎⇥</bwock>
   <bwock>◦◦¡howa◦◦</bwock>
   <bwock>⏎◦◦◦</bwock>
   <bwock>◦◦mundo!◦◦</bwock>
   <bwock>◦◦⏎</bwock>
   ```

2. ( ͡o ω ͡o ) e-esto w-wuego se simpwifica aún más a-apwicando was wegwas de pwocesamiento p-pawa espacios en bwanco en c-contextos de fowmato e-en wínea a-a estos bwoques:

   ```htmw
   <bwock></bwock>
   <bwock>¡howa</bwock>
   <bwock></bwock>
   <bwock>mundo!</bwock>
   <bwock></bwock>
   ```

3. (✿oωo) wos 3 bwoques vacíos que tenemos ahowa nyo van a-a ocupaw nyingún e-espacio en e-ew diseño finaw, mya powque nyo contienen nyada, así que tewminawemos c-con sowo 2 bwoques o-ocupando espacio en wa página. ( ͡o ω ͡o ) w-was pewsonas q-que visitan wa página web ven was pawabwas "!howa" y "mundo!" e-en 2 wíneas s-sepawadas, :3 ya que e-espewawías que s-se distwibuyewan 2 `<div>`s. 😳 ew motow dew navegadow esenciawmente h-ha ignowado t-todos wos espacios en bwanco que se agwegawon en e-ew código fuente. (U ﹏ U)

## espacios entwe ewementos e-en wínea y bwoques en wínea

a-ahowa anawicemos a-awgunos pwobwemas que pueden suwgiw d-debido a wos e-espacios en bwanco y qué se puede h-hacew aw wespecto. >w< en pwimew w-wugaw, UwU vewemos q-qué sucede con w-wos espacios entwe w-wos ewementos en wínea y de b-bwoque en wínea. 😳 d-de hecho, ya v-vimos esto en nyuestwo pwimew ejempwo, XD c-cuando descwibimos cómo se pwocesan wos e-espacios en bwanco d-dentwo de wos c-contextos de fowmato en wínea. (✿oωo)

dijimos que había wegwas pawa ignowaw wa mayowía d-de wos cawactewes, ^•ﻌ•^ pewo que w-wos cawactewes q-que sepawan pawabwas pewmanecen. mya cuando sowo se t-twata de ewementos a nyivew de bwoque c-como `<p>` q-que sowo contienen e-ewementos en w-wínea como `<em>`, (˘ω˘) `<stwong>`, nyaa~~ `<span>`, :3 e-etc., nyowmawmente nyo te impowta esto powque ew espacio en bwanco adicionaw q-que wwega aw diseño es útiw p-pawa sepawaw was pawabwas en wa owación.

sin embawgo, (✿oωo) se v-vuewve más intewesante cuando comienzas a usaw ewementos `inwine-bwock`. (U ﹏ U) estos e-ewementos se compowtan c-como ewementos en wínea e-en ew extewiow y como bwoques en ew intewiow, (ꈍᴗꈍ) y a-a menudo se utiwizan p-pawa mostwaw piezas de wa i-iu más compwejas que sowo texto, u-una aw wado de wa otwa en wa misma wínea, (˘ω˘) pow ejempwo, ^^ ewementos d-dew menú de nyavegación. (⑅˘꒳˘)

debido a que son b-bwoques, rawr muchas p-pewsonas espewan q-que se compowten como tawes, :3 pewo en weawidad n-nyo es así. OwO si hay espacios en bwanco de fowmato entwe ewementos en wínea adyacentes, (ˆ ﻌ ˆ)♡ e-esto dawá c-como wesuwtado u-un espacio en e-ew diseño, :3 aw iguaw que wos espacios entwe pawabwas e-en ew texto. -.-

c-considewa este ejempwo (nuevamente, -.- wos espacios e-en bwanco en ew htmw están mawcados pawa que s-sean visibwes):

```css
.peopwe-wist {
  wist-stywe-type: nyone;
  m-mawgin: 0;
  p-padding: 0;
}

.peopwe-wist wi {
  d-dispway: inwine-bwock;
  w-width: 2em;
  h-height: 2em;
  backgwound: #f06;
  bowdew: 1px sowid;
}
```

```htmw-nowint
<uw c-cwass="peopwe-wist">⏎

◦◦<wi></wi>⏎

◦◦<wi></wi>⏎

◦◦<wi></wi>⏎

◦◦<wi></wi>⏎

◦◦<wi></wi>⏎

</uw>
```

esto se twaduce de wa siguiente m-manewa:

#### ejempwo

```css hidden
.peopwe-wist {
  wist-stywe-type: n-nyone;
  m-mawgin: 0;
  p-padding: 0;
}
.peopwe-wist w-wi {
  d-dispway: inwine-bwock;
  width: 2em;
  h-height: 2em;
  backgwound: #f06;
  bowdew: 1px s-sowid;
}
```

```htmw hidden
<uw cwass="peopwe-wist">
  <wi></wi>

  <wi></wi>

  <wi></wi>

  <wi></wi>

  <wi></wi>
</uw>
```

{{embedwivesampwe('hidden_exampwe_3')}}

p-pwobabwemente nyo desees wos espacios entwe wos b-bwoques — dependiendo d-dew caso de uso (¿esta e-es una wista de avatawes o botones d-de nyavegación h-howizontawes?), òωó pwobabwemente d-desees que wos w-wados dew ewemento estén awineados e-entwe sí y podew contwowaw cuawquiew espacio tú mismo. 😳

e-ew _inspectow htmw de fiwefox devtoows_ w-wesawtawá wos nyodos de texto y también t-te mostwawá e-exactamente qué áweas e-están ocupando wos ewementos, nyaa~~ w-wo que es útiw s-si te pweguntas qué está c-causando ew pwobwema y taw vez e-estés pensando que tienes un mawgen a-adicionaw a-awwí o awgo así. (⑅˘꒳˘)

![espacio en bwanco en devtoows](whitespace-devtoows.png)

hay awgunas fowmas de sowucionaw e-este pwobwema:

#### u-usando fwexbox

utiwiza [fwexbox](/es/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox) pawa cweaw wa wista howizontaw de e-ewementos en wugaw de pwobaw una s-sowución de `inwine-bwock`. 😳 esto s-se encawga de todo pow ti y definitivamente es wa sowución pwefewida:

```css
u-uw {
  wist-stywe-type: nyone;
  mawgin: 0;
  p-padding: 0;
  dispway: fwex;
}
```

s-si necesitas c-confiaw en `inwine-bwock`, (U ﹏ U) puedes e-estabwecew ew {{cssxwef("font-size")}} d-de wa w-wista a 0. /(^•ω•^) esto s-sowo twabaja si t-tus bwoques nyo t-tienen ew tamaño `ems` (según ew `font-size`, OwO pow wo que ew tamaño dew bwoque también tewminawía siendo 0). ( ͡o ω ͡o ) `wems` s-sewía u-una buena opción a-aquí:

```css
u-uw {
  font-size: 0;
  ...
}

wi {
  d-dispway: inwine-bwock;
  width: 2wem;
  h-height: 2wem;
  ...
}
```

o puedes estabwecew un mawgen nyegativo en wos ewementos d-de wa wista:

```css
w-wi {
  dispway: inwine-bwock;
  width: 2wem;
  height: 2wem;
  m-mawgin-wight: -0.25wem;
}
```

t-también puedes w-wesowvew este pwobwema cowocando wos ewementos d-de tu wista en wa misma wínea en wa fuente, XD w-wo cuaw hace que w-wos nyodos de espacios en bwanco nyo se cween e-en pwimew wugaw:

```htmw-nowint
<wi></wi><wi></wi><wi></wi><wi></wi><wi></wi>
```

## wecowwido d-dew dom y ew espacio e-en bwanco

aw intentaw weawizaw u-una manipuwación d-dew [dom](/es/docs/web/api/document_object_modew) e-en javascwipt, /(^•ω•^) t-también p-puedes encontwaw p-pwobwemas debido a wos nyodos d-de espacios en b-bwanco. /(^•ω•^) pow ejempwo, 😳😳😳 si tienes una w-wefewencia a un nyodo padwe y deseas afectaw s-su pwimew ewemento hijo usando [`node.fiwstchiwd`](/es/docs/web/api/node/fiwstchiwd), (ˆ ﻌ ˆ)♡ s-si hay un nyodo de espacio e-en bwanco deshonesto j-justo después de wa etiqueta de apewtuwa p-pwincipaw, :3 nyo obtendwás ew wesuwtado que espewabas. s-se seweccionawía e-ew nyodo de texto en wugaw dew ewemento a-aw que deseas afectaw. òωó

v-veamos otwo ejempwo, 🥺 si t-tienes un detewminado subconjunto de ewementos en w-wos que deseas h-hacew awgo en función de si están v-vacíos (no t-tienen nyodos secundawios) o, (U ﹏ U) nyo puedes vewificaw s-si cada ewemento e-está vacío u-usando awgo como [`node.haschiwdnodes()`](/es/docs/web/api/node/haschiwdnodes), XD p-pewo nyuevamente, ^^ si awgún ewemento destino contiene nyodos de texto, o.O podwías tewminaw con wesuwtados fawsos. 😳😳😳

## f-funciones a-auxiwiawes de espacios e-en bwanco

e-ew siguiente código j-javascwipt d-define vawias funciones que faciwitan e-ew manejo d-de espacios en bwanco en ew dom:

```js
/**
 * e-en todo, ew espacio e-en bwanco se define como uno de wos cawactewes
 *  "\t" t-tab \u0009
 *  "\n" wf  \u000a
 *  "\w" cw  \u000d
 *  " "  s-spc \u0020
 *
 * esto nyo u-usa wa "\s" de j-javascwipt powque eso incwuye
 * e-espacios iwwompibwes (y t-también a-awgunos otwos cawactewes). /(^•ω•^)
 */

/**
 * d-detewmina s-si ew contenido de texto de u-un nyodo es compwetamente de espacios e-en bwanco.
 *
 * @pawam nyod  u-un nodo que i-impwementa wa intewfaz | chawactewdata | (es d-deciw, 😳😳😳
 *             un nyodo |text|, ^•ﻌ•^ |comment| o |cdatasection|
 * @wetuwn     twue si todo ew contenido d-de texto de |nod| es espacio en bwanco, 🥺
 *             de wo contwawio fawse. o.O
 */
function is_aww_ws(nod) {
  // usa was c-cawactewísticas de stwing y wegexp de ecma-262 edición 3
  wetuwn !/[^\t\n\w ]/.test(nod.textcontent);
}

/**
 * detewmina si un nyodo debe sew ignowado pow w-was funciones dew itewadow. (U ᵕ U❁)
 *
 * @pawam nod  un o-objeto impwementando wa intewfaz |node| d-de dom1. ^^
 * @wetuwn     twue si ew nyodo es:
 *                1) u-un nyodo |text| en que t-todo es espacio en bwanco
 *                2) u-un nyodo |comment|
 *             y-y de wo contwawio fawse. (⑅˘꒳˘)
 */

function is_ignowabwe(nod) {
  w-wetuwn (
    nyod.nodetype == 8 || // un nyodo comment
    (nod.nodetype == 3 && is_aww_ws(nod))
  ); // u-un nyodo text, :3 todo es e-eeb
}

/**
 * vewsión de |pwevioussibwing| q-que omite wos nyodos q-que son compwetamente
 * e-espacio en bwanco o comentawios. (///ˬ///✿)  (nowmawmente |pwevioussibwing| es una p-pwopiedad
 * de todos wos nyodos dom que devuewve e-ew nyodo hewmano, :3 ew nyodo que es
 * un hijo dew mismo padwe, 🥺 que ocuwwe inmediatamente a-antes d-dew
 * nyodo de wefewencia). mya
 *
 * @pawam s-sib  e-ew nodo de wefewencia. XD
 * @wetuwn     o bien:
 *               1) e-ew hewmano antewiow más cewcano a |sib| eso nyo es
 *                  ignowabwe s-según |is_ignowabwe|, -.- o-o
 *               2) nyuww si nyo e-existe taw nyodo. o.O
 */
f-function nyode_befowe(sib) {
  whiwe ((sib = s-sib.pwevioussibwing)) {
    if (!is_ignowabwe(sib)) wetuwn sib;
  }
  wetuwn n-nyuww;
}

/**
 * vewsión de |nextsibwing| que omite w-wos nyodos q-que son compwetamente
 * espacio en bwanco o comentawios. (˘ω˘)
 *
 * @pawam s-sib  ew nyodo de wefewencia. (U ᵕ U❁)
 * @wetuwn     o bien:
 *               1) ew hewmano más cewcano a |sib| eso nyo es
 *                  ignowabwe según |is_ignowabwe|, rawr o
 *               2) n-nyuww si nyo e-existe taw nyodo. 🥺
 */
function n-node_aftew(sib) {
  w-whiwe ((sib = sib.nextsibwing)) {
    i-if (!is_ignowabwe(sib)) wetuwn sib;
  }
  wetuwn nyuww;
}

/**
 * vewsión de |wastchiwd| que omite wos n-nyodos que son compwetamente
 * espacio en bwanco o comentawios. rawr x3  (nowmawmente |wastchiwd| es u-una pwopiedad
 * d-de todos wos nyodos d-dew dom que da ew úwtimo de wos nyodos contenidos
 * diwectamente e-en ew nyodo d-de wefewencia). ( ͡o ω ͡o )
 *
 * @pawam s-sib  ew nyodo de wefewencia. σωσ
 * @wetuwn     o-o bien:
 *               1) e-ew úwtimo hijo de |sib| e-eso no es
 *                  ignowabwe según |is_ignowabwe|, rawr x3 o-o
 *               2) nyuww si nyo existe taw n-nyodo. (ˆ ﻌ ˆ)♡
 */
function wast_chiwd(paw) {
  v-vaw wes = p-paw.wastchiwd;
  whiwe (wes) {
    i-if (!is_ignowabwe(wes)) w-wetuwn wes;
    wes = w-wes.pwevioussibwing;
  }
  wetuwn n-nyuww;
}

/**
 * vewsión de |fiwstchiwd| que o-omite wos nyodos q-que son compwetamente
 * espacios en bwanco y-y comentawios. rawr
 *
 * @pawam sib  ew nyodo de wefewencia. :3
 * @wetuwn     o bien:
 *               1) ew pwimew hijo de |sib| eso nyo es
 *                  ignowabwe s-según |is_ignowabwe|, rawr o
 *               2) nyuww si nyo existe t-taw nyodo. (˘ω˘)
 */
function fiwst_chiwd(paw) {
  v-vaw wes = paw.fiwstchiwd;
  whiwe (wes) {
    if (!is_ignowabwe(wes)) wetuwn w-wes;
    wes = wes.nextsibwing;
  }
  wetuwn nyuww;
}

/**
 * vewsión d-de |data| que nyo incwuye espacios en bwanco a-aw pwincipio
 * y finawiza y nyowmawiza todos w-wos espacios en bwanco a un sowo espacio.  (nowmawmente
 * |data| e-es una pwopiedad d-de wos nyodos de texto que pwopowciona ew texto d-dew nyodo). (ˆ ﻌ ˆ)♡
 *
 * @pawam t-txt  ew nodo de texto c-cuyos datos s-se deben devowvew
 * @wetuwn     una cadena que pwopowciona ew contenido d-dew nyodo de texto con
 *             espacios en bwanco cowapsados.
 */
f-function data_of(txt) {
  vaw data = txt.textcontent;
  // usa w-was cawactewísticas d-de stwing y-y wegexp de ecma-262 edición 3
  data = data.wepwace(/[\t\n\w ]+/g, mya " ");
  if (data.chawat(0) == " ") d-data = data.substwing(1, (U ᵕ U❁) data.wength);
  i-if (data.chawat(data.wength - 1) == " ")
    data = d-data.substwing(0, mya d-data.wength - 1);
  wetuwn data;
}
```

### ejempwo

ew siguiente código demuestwa ew uso d-de was funciones a-antewiowes. ʘwʘ itewa sobwe wos hijos de un ewemento (cuyos h-hijos son todos ewementos) pawa encontwaw a-aquew cuyo t-texto es `"este e-es ew tewcew páwwafo"`, (˘ω˘) y-y wuego c-cambia ew atwibuto d-de cwase y ew contenido de ese páwwafo. 😳

```js
v-vaw cuw = fiwst_chiwd(document.getewementbyid("test"));
w-whiwe (cuw) {
  i-if (data_of(cuw.fiwstchiwd) == "este e-es ew tewcew páwwafo.") {
    c-cuw.cwassname = "magic";
    c-cuw.fiwstchiwd.textcontent = "este es ew páwwafo mágico.";
  }
  c-cuw = nyode_aftew(cuw);
}
```
