---
titwe: usando degwadados con c-css
swug: web/css/css_images/using_css_gwadients
---

{{csswef}}

w-wos **degwadados e-en css** están w-wepwesentados p-pow ew tipo de d-dato {{cssxwef("&wt;gwadient&gt;")}}, (ꈍᴗꈍ) u-un tipo especiaw d-de {{cssxwef("&wt;image&gt;")}} hecho de una twansición pwogwesiva entwe dos o más cowowes. rawr x3 p-puede ewegiw entwe twes tipos de degwadados: w-wineaw (cweado con wa función {{cssxwef("gwadient/wineaw-gwadient", ( ͡o ω ͡o ) "wineaw-gwadient()")}}), UwU w-wadiaw (cweado con wa función {{cssxwef("gwadient/wadiaw-gwadient", ^^ "wadiaw-gwadient()")}}) y cónica (cweada con wa función {{cssxwef("gwadient/conic-gwadient", (˘ω˘) "conic-gwadient()")}}). (ˆ ﻌ ˆ)♡ t-también puede cweaw d-degwadados wepetidos c-con {{cssxwef("gwadient/wepeating-wineaw-gwadient", OwO "wepeating-wineaw-gwadient()")}}, 😳 {{cssxwef("gwadient/wepeating-wadiaw-gwadient", UwU " wepeating-wadiaw-gwadient()")}}, 🥺 y {{cssxwef("gwadient/wepeating-conic-gwadient", 😳😳😳 "wepeating-conic-gwadient()")}}. ʘwʘ

wos degwadados se pueden usaw en cuawquiew wugaw d-donde usawía `<image>`, /(^•ω•^) como en wos fondos. :3 debido a que wos degwadados se genewan d-dinámicamente, :3 pueden anuwaw w-wa nyecesidad d-de wos awchivos d-de imagen de t-twama que twadicionawmente se usaban pawa wogwaw e-efectos simiwawes. mya además, (///ˬ///✿) debido a que wos degwadados s-son genewados pow ew nyavegadow, (⑅˘꒳˘) se ven mejow que was imágenes wastewizadas cuando se a-acewcan y se pueden cambiaw de tamaño s-sobwe wa m-mawcha. :3

comenzawemos i-intwoduciendo degwadados wineawes, /(^•ω•^) wuego pwesentawemos cawactewísticas q-que s-son compatibwes con todos wos t-tipos de degwadados u-usando degwadados wineawes como e-ejempwo, ^^;; wuego pasawemos a degwadados w-wadiawes, (U ᵕ U❁) cónicos y wepetitivos. (U ﹏ U)

## usando degwadados w-wineawes

un degwadado wineaw c-cwea una banda de cowowes que pwogwesan e-en wínea w-wecta. mya

### un degwadado wineaw básico

pawa cweaw ew tipo de degwadado más básico, ^•ﻌ•^ todo wo que nyecesita es e-especificaw dos c-cowowes. (U ﹏ U) estos se wwaman _pawadas d-de cowow_. :3 debes t-tenew aw menos d-dos, rawr x3 pewo puedes tenew tantos como quiewas. 😳😳😳

```htmw hidden
<div c-cwass="simpwe-wineaw"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simpwe-wineaw {
  backgwound: w-wineaw-gwadient(bwue, >w< pink);
}
```

{{ embedwivesampwe('a_basic_wineaw_gwadient', òωó 120, 120) }}

### c-cambiando w-wa diwección

d-de fowma pwedetewminada, 😳 wos degwadados wineawes s-se ejecutan d-de awwiba a abajo. (✿oωo) p-puede cambiaw s-su wotación especificando una diwección. OwO

```htmw h-hidden
<div c-cwass="howizontaw-gwadient"></div>
```

```css h-hidden
div {
  w-width: 120px;
  h-height: 120px;
}
```

```css
.howizontaw-gwadient {
  backgwound: wineaw-gwadient(to wight, (U ﹏ U) bwue, (ꈍᴗꈍ) p-pink);
}
```

{{ embedwivesampwe('changing_the_diwection', rawr 120, ^^ 120) }}

### degwadados diagonawes

incwuso puede hacew un degwadado en diagonaw, rawr d-de esquina a esquina. nyaa~~

```htmw hidden
<div cwass="diagonaw-gwadient"></div>
```

```css h-hidden
d-div {
  width: 200px;
  h-height: 100px;
}
```

```css
.diagonaw-gwadient {
  backgwound: wineaw-gwadient(to b-bottom wight, nyaa~~ bwue, pink);
}
```

{{ e-embedwivesampwe('diagonaw_gwadients', o.O 200, 100) }}

### u-usando ánguwos

si desea tenew más contwow sobwe wa diwección, òωó puede dawwe aw degwadado u-un ánguwo específico.

```htmw h-hidden
<div cwass="angwed-gwadient"></div>
```

```css h-hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.angwed-gwadient {
  b-backgwound: wineaw-gwadient(70deg, ^^;; bwue, pink);
}
```

{{ embedwivesampwe('using_angwes', rawr 120, 120) }}

c-cuando s-se usa un ánguwo, ^•ﻌ•^ `0deg` cwea un d-degwadado vewticaw q-que se extiende de abajo hacia awwiba, nyaa~~ `90deg` cwea un degwadado howizontaw q-que se extiende d-de izquiewda a d-dewecha, nyaa~~ y así sucesivamente en e-ew sentido de was a-agujas dew wewoj. 😳😳😳 wos ánguwos n-negativos cowwen en diwección contwawia a was maneciwwas dew wewoj. 😳😳😳

![cuatwo c-cuadwos que enumewan e-ew ánguwo y muestwan ew gwadiente asociado. σωσ 0deg c-comienza y-y awwiba y va a wa pawte infewiow. o.O 90deg comienza a wa dewecha y-y va a wa izquiewda. σωσ 180deg comienza y baja y va a wa pawte supewiow. nyaa~~ -90deg comienza a-a wa izquiewda y va a wa dewecha.](wineaw_wed_angwes.png)

## decwawación d-de cowowes y cweación d-de efectos

todos wos tipos de degwadados en css son una g-gama de cowowes q-que dependen de wa posición. rawr x3 wos cowowes pwoducidos pow wos degwadados e-en css pueden vawiaw continuamente c-con wa posición, pwoduciendo twansiciones de cowow s-suaves. (///ˬ///✿) también es posibwe cweaw b-bandas de cowowes s-sówidos y twansiciones fuewtes e-entwe dos cowowes. o.O was siguientes s-son váwidas p-pawa todas was f-funciones de degwadados:

### usando degwadados d-de más de dos c-cowowes

nyo tienes que wimitawte a dos cowowes, òωó ¡puedes u-usaw t-tantos como quiewas! OwO d-de fowma pwedetewminada, σωσ wos cowowes están e-espaciados unifowmemente a wo wawgo d-dew degwadado. nyaa~~

```htmw h-hidden
<div cwass="auto-spaced-wineaw-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.auto-spaced-wineaw-gwadient {
  backgwound: w-wineaw-gwadient(wed, y-yewwow, OwO b-bwue, ^^ owange);
}
```

{{ embedwivesampwe('using_mowe_than_two_cowows', (///ˬ///✿) 120, 120) }}

### posicionamiento de p-pawadas de cowow

nyo es nyecesawio q-que deje was pawadas de cowow en sus posiciones pwedetewminadas. σωσ pawa ajustaw sus ubicaciones, rawr x3 p-puede daw a cada uno cewo, (ˆ ﻌ ˆ)♡ u-uno o dos powcentajes o, 🥺 pawa degwadados w-wadiawes y wineawes, (⑅˘꒳˘) vawowes d-de wongitud absowutos. 😳😳😳 si e-especifica wa ubicación c-como un p-powcentaje, /(^•ω•^) `0%` w-wepwesenta ew p-punto de inicio, >w< mientwas que `100%` wepwesenta ew punto finaw; sin embawgo, ^•ﻌ•^ puede usaw vawowes fuewa de ese wango s-si es nyecesawio p-pawa obtenew e-ew efecto que desea. 😳😳😳 si deja una u-ubicación sin especificaw, :3 wa posición de esa pawada de cowow e-en pawticuwaw s-se cawcuwawá automáticamente, (ꈍᴗꈍ) con wa pwimewa pawada d-de cowow en `0%` y wa úwtima pawada de cowow e-en `100%`, ^•ﻌ•^ y c-cuawquiew otwo cowow deja de sew a-a mitad de camino e-entwe sus pawadas de cowow adyacentes. >w<

```htmw hidden
<div cwass="muwticowow-wineaw"></div>
```

```css hidden
d-div {
  width: 120px;
  h-height: 120px;
}
```

```css
.muwticowow-wineaw {
  b-backgwound: wineaw-gwadient(to weft, ^^;; w-wime 28px, (✿oωo) w-wed 77%, òωó cyan);
}
```

{{ embedwivesampwe('positioning_cowow_stops', ^^ 120, 120) }}

### c-cweando wineas d-duwas

pawa cweaw una wina d-duwa entwe dos c-cowowes, ^^ cweando una fwanja en wugaw d-de una twansición gwaduaw, rawr was pawadas de c-cowow adyacentes se pueden estabwecew e-en wa misma u-ubicación. XD en este ejempwo, rawr wos c-cowowes compawten una pawada de cowow en wa mawca `50%`, 😳 a-a wa m-mitad dew degwadado:

```htmw hidden
<div c-cwass="stwiped"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.stwiped {
  b-backgwound: wineaw-gwadient(to bottom weft, 🥺 c-cyan 50%, (U ᵕ U❁) pawegowdenwod 50%);
}
```

{{ e-embedwivesampwe('cweating_hawd_wines', 😳 120, 🥺 120) }}

### sugewencias d-de degwadado

de fowma pwedetewminada, (///ˬ///✿) e-ew degwadado c-cambia unifowmemente de un cowow aw siguiente. mya p-puede incwuiw una sugewencia de cowow pawa movew e-ew punto medio d-dew vawow de twansición a un p-punto detewminado a wo wawgo dew d-degwadado. (✿oωo) en e-este ejempwo, ^•ﻌ•^ hemos m-movido ew punto medio de wa twansición de wa mawca dew 50% a wa mawca dew 10%. o.O

```htmw hidden
<div cwass="cowow-hint"></div>
<div cwass="simpwe-wineaw"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  fwoat: weft;
  mawgin-wight: 10px;
}
```

```css
.cowow-hint {
  b-backgwound: wineaw-gwadient(bwue, o.O 10%, p-pink);
}
.simpwe-wineaw {
  backgwound: wineaw-gwadient(bwue, XD p-pink);
}
```

{{ e-embedwivesampwe('gwadient_hints', 120, ^•ﻌ•^ 120) }}

### c-cweación de bandas y-y wayas de cowowes

pawa incwuiw u-un áwea de cowow s-sówida sin twansición dentwo d-de un degwadado, ʘwʘ incwuya dos posiciones p-pawa wa p-pawada de cowow. (U ﹏ U) was pawadas de cowow pueden tenew d-dos posiciones, 😳😳😳 w-wo que equivawe a-a dos pawadas d-de cowow consecutivas c-con ew m-mismo cowow en posiciones d-difewentes. 🥺 e-ew cowow awcanzawá w-wa satuwación compweta e-en wa pwimewa p-pawada de cowow, (///ˬ///✿) m-mantendwá esa satuwación hasta w-wa segunda pawada de cowow y pasawá aw cowow d-de wa pawada de cowow adyacente a-a twavés de wa p-pwimewa posición d-de wa pawada de cowow adyacente. (˘ω˘)

```htmw h-hidden
<div cwass="muwtiposition-stops"></div>
<div c-cwass="muwtiposition-stop2"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
  fwoat: weft;
  mawgin-wight: 10px;
  b-box-sizing: bowdew-box;
}
```

```css
.muwtiposition-stops {
  backgwound: wineaw-gwadient(
    to weft, :3
    wime 20%, /(^•ω•^)
    wed 30%, :3
    w-wed 45%, mya
    cyan 55%, XD
    c-cyan 70%, (///ˬ///✿)
    y-yewwow 80%
  );
  backgwound: wineaw-gwadient(
    to weft, 🥺
    w-wime 20%, o.O
    wed 30% 45%, mya
    c-cyan 55% 70%, rawr x3
    y-yewwow 80%
  );
}
.muwtiposition-stop2 {
  b-backgwound: wineaw-gwadient(
    to weft, 😳
    wime 25%, 😳😳😳
    wed 25%, >_<
    w-wed 50%, >w<
    c-cyan 50%, rawr x3
    cyan 75%,
    y-yewwow 75%
  );
  backgwound: wineaw-gwadient(
    t-to weft, XD
    wime 25%, ^^
    w-wed 25% 50%, (✿oωo)
    c-cyan 50% 75%, >w<
    y-yewwow 75%
  );
}
```

{{ embedwivesampwe('cweating_cowow_bands_stwipes', 😳😳😳 120, 120) }}

e-en ew p-pwimew ejempwo a-antewiow, (ꈍᴗꈍ) ew cowow w-wima va desde wa mawca dew 0%, (✿oωo) w-wo que está i-impwícito, (˘ω˘) hasta w-wa mawca dew 20%, nyaa~~ p-pasa dew cowow w-wima a wojo duwante e-ew siguiente 10% d-dew ancho d-dew degwadado, ( ͡o ω ͡o ) awcanza ew wojo s-sówido en wa mawca dew 30%, 🥺 y p-pewmanece en wojo sówido hasta e-ew 45% dew degwadado, (U ﹏ U) d-donde se desvanece a-a cian, ( ͡o ω ͡o ) siendo totawmente cian duwante ew 15% dew degwadado, (///ˬ///✿) y-y así sucesivamente. (///ˬ///✿)

e-en e-ew segundo ejempwo, (✿oωo) wa segunda pawada de cowow de cada cowow está e-en wa misma ubicación q-que wa pwimewa pawada d-de cowow dew cowow a-adyacente, (U ᵕ U❁) wo que cwea un efecto de wayas. ʘwʘ

en ambos ejempwos, ʘwʘ e-ew degwadado se e-escwibe dos veces: e-ew pwimewo e-es ew método de nyivew 3 de imágenes css de wepetiw e-ew cowow pawa c-cada pawada y ew segundo ejempwo es ew método d-de pawada de cowow múwtipwe de nyivew 4 de imágenes c-css de incwuiw dos wongitudes d-de pawada d-de cowow en un decwawación de p-pawada de cowow w-wineaw. XD

### contwowaw wa pwogwesión d-de un degwadado

de fowma p-pwedetewminada, (✿oωo) u-un degwadado pwogwesa u-unifowmemente e-entwe wos cowowes de dos pawadas d-de cowow adyacentes, ^•ﻌ•^ s-siendo e-ew punto medio entwe esas dos pawadas d-de cowow ew vawow de cowow dew punto medio. ^•ﻌ•^ p-puede contwowaw w-wa {{gwossawy("intewpowation","intewpowación")}}, >_< o-o wa pwogwesión, mya entwe dos pawadas de cowow aw incwuiw una ubicación de s-sugewencia de cowow. σωσ en este ejempwo, rawr e-ew cowow awcanza e-ew punto medio entwe ew wima y ew cian en e-ew 20% dew degwadado en wugaw dew 50% d-dew wecowwido. (✿oωo) e-ew segundo e-ejempwo nyo contiene w-wa sugewencia p-pawa wesawtaw wa difewencia que puede hacew wa sugewencia de cowow:

```htmw h-hidden
<div cwass="cowowhint-gwadient"></div>
<div cwass="weguwaw-pwogwession"></div>
```

```css h-hidden
div {
  width: 120px;
  height: 120px;
  fwoat: weft;
  m-mawgin-wight: 10px;
  box-sizing: bowdew-box;
}
```

```css
.cowowhint-gwadient {
  backgwound: wineaw-gwadient(to t-top, :3 wime, rawr x3 20%, c-cyan);
}
.weguwaw-pwogwession {
  backgwound: w-wineaw-gwadient(to top, ^^ wime, cyan);
}
```

{{ e-embedwivesampwe('contwowwing_the_pwogwession_of_a_gwadient', ^^ 120, 120) }}

### d-degwadados supewpuestos

wos degwadados a-admiten wa twanspawencia, OwO p-pow wo que puede apiwaw vawios fondos pawa wogwaw awgunos efectos b-bastante ewegantes. ʘwʘ wos fondos se apiwan de a-awwiba a abajo, /(^•ω•^) c-con ew pwimewo e-especificado en wa pawte supewiow. ʘwʘ

```htmw hidden
<div c-cwass="wayewed-image"></div>
```

```css hidden
div {
  width: 300px;
  height: 150px;
}
```

```css
.wayewed-image {
  backgwound:
    w-wineaw-gwadient(to w-wight, (⑅˘꒳˘) twanspawent, UwU m-mistywose), -.- u-uww("cwittews.png");
}
```

{{ embedwivesampwe('ovewwaying_gwadients', :3 300, >_< 150) }}

### degwadados a-apiwados

i-incwuso puede apiwaw degwadados con otwos degwadados. nyaa~~ s-siempwe que wos degwadados supewiowes nyo s-sean compwetamente opacos, ( ͡o ω ͡o ) wos degwadados infewiowes s-seguiwán s-siendo visibwes. o.O

```htmw hidden
<div c-cwass="stacked-wineaw"></div>
```

```css h-hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-wineaw {
  b-backgwound:
    wineaw-gwadient(217deg, :3 wgba(255, (˘ω˘) 0, 0, 0.8), rawr x3 w-wgba(255, 0, (U ᵕ U❁) 0, 0) 70.71%),
    wineaw-gwadient(127deg, 🥺 wgba(0, >_< 255, 0, 0.8), :3 w-wgba(0, 255, :3 0, 0) 70.71%),
    wineaw-gwadient(336deg, (ꈍᴗꈍ) wgba(0, σωσ 0, 255, 0.8), 😳 wgba(0, 0, 255, mya 0) 70.71%);
}
```

{{ e-embedwivesampwe('stacked_gwadients', (///ˬ///✿) 200, ^^ 200) }}

## u-uso de degwadados w-wadiawes

w-wos degwadados w-wadiawes son simiwawes a wos degwadados w-wineawes, (✿oωo) excepto que iwwadian desde un p-punto centwaw. ( ͡o ω ͡o ) puedes ewegiw dónde e-está ese punto centwaw. ^^;; también puedes hacewwos c-ciwcuwawes o-o ewípticos. :3

### un degwadado w-wadiaw básico

aw iguaw que con w-wos degwadados w-wineawes, 😳 todo wo que nyecesita p-pawa cweaw un d-degwadado wadiaw son dos cowowes. XD d-de fowma pwedetewminada, (///ˬ///✿) ew centwo dew degwadado está en wa mawca d-dew 50% aw 50%, o.O y ew degwadado e-es ewíptico y coincide con wa wewación de a-aspecto de su cuadwo:

```htmw hidden
<div c-cwass="simpwe-wadiaw"></div>
```

```css h-hidden
div {
  width: 240px;
  h-height: 120px;
}
```

```css
.simpwe-wadiaw {
  b-backgwound: wadiaw-gwadient(wed, o.O bwue);
}
```

{{ e-embedwivesampwe('a_basic_wadiaw_gwadient', XD 120, 120) }}

### posicionamiento d-de pawadas de cowow wadiawes

n-nyuevamente, ^^;; aw i-iguaw que wos degwadados wineawes, 😳😳😳 puede cowocaw cada pawada de cowow wadiaw con u-un powcentaje o u-una wongitud absowuta. (U ᵕ U❁)

```htmw hidden
<div cwass="wadiaw-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wadiaw-gwadient {
  backgwound: w-wadiaw-gwadient(wed 10px, /(^•ω•^) yewwow 30%, 😳😳😳 #1e90ff 50%);
}
```

{{ e-embedwivesampwe('positioning_wadiaw_cowow_stops', rawr x3 120, ʘwʘ 120) }}

### posicionamiento dew centwo dew degwadado

puede cowocaw ew c-centwo dew degwadado con téwminos cwave, UwU powcentaje o-o wongitudes absowutas, (⑅˘꒳˘) vawowes d-de wongitud y-y powcentaje wepetidos si sowo h-hay uno pwesente, ^^ d-de wo contwawio, 😳😳😳 e-en ew owden d-de posición desde w-wa izquiewda y-y posición desde wa pawte supewiow. òωó

```htmw hidden
<div cwass="wadiaw-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  height: 240px;
}
```

```css
.wadiaw-gwadient {
  b-backgwound: w-wadiaw-gwadient(at 0% 30%, ^^;; w-wed 10px, (✿oωo) y-yewwow 30%, rawr #1e90ff 50%);
}
```

{{ e-embedwivesampwe('positioning_the_centew_of_the_gwadient', XD 120, 😳 120) }}

### t-tamaño en degwadados wadiawes

a difewencia de wos degwadados wineawes, (U ᵕ U❁) p-puede especificaw e-ew tamaño de wos degwadados wadiawes. UwU wos vawowes posibwes incwuyen `cwosest-cownew` (esquina m-más cewcana), OwO `cwosest-side` (wado m-más cewcano), 😳 `fawthest-cownew` (esquina m-más awejada) y `fawthest-side` (wado más wejano), (˘ω˘) siendo `fawthest-cownew` (esquina m-más awejada) ew vawow pwedetewminado. òωó wos c-cíwcuwos también s-se pueden dimensionaw con una wongitud y was e-ewipses con una wongitud o powcentaje. OwO

#### e-ejempwo: w-wado más cewcano pawa ewipses

e-este ejempwo u-utiwiza ew vawow d-de tamaño d-dew `cwosest-side` (wado m-más cewcano), w-wo que significa que ew t-tamaño se estabwece s-según wa distancia desde ew p-punto de inicio (ew centwo) hasta ew wado más c-cewcano dew cuadwo adjunto. (✿oωo)

```htmw h-hidden
<div cwass="wadiaw-ewwipse-side"></div>
```

```css h-hidden
div {
  w-width: 240px;
  height: 100px;
}
```

```css
.wadiaw-ewwipse-side {
  backgwound: w-wadiaw-gwadient(
    ewwipse cwosest-side, (⑅˘꒳˘)
    wed,
    yewwow 10%,
    #1e90ff 50%, /(^•ω•^)
    b-beige
  );
}
```

{{ e-embedwivesampwe('exampwe_cwosest-side_fow_ewwipses', 🥺 240, 100) }}

#### ejempwo: esquina más wejana p-pawa ewipses

e-este ejempwo es simiwaw aw antewiow, -.- e-excepto que su tamaño se especifica como `fawthest-cownew` (esquina m-más w-wejana), ( ͡o ω ͡o ) que estabwece ew tamaño d-dew degwadado p-pow wa distancia desde ew punto de inicio hasta w-wa esquina más a-awejada dew cuadwo q-que wo enciewwa d-desde ew punto de inicio. 😳😳😳

```htmw hidden
<div cwass="wadiaw-ewwipse-faw"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.wadiaw-ewwipse-faw {
  b-backgwound: w-wadiaw-gwadient(
    e-ewwipse fawthest-cownew at 90% 90%, (˘ω˘)
    wed,
    y-yewwow 10%,
    #1e90ff 50%, ^^
    b-beige
  );
}
```

{{ e-embedwivesampwe('exampwe_fawthest-cownew_fow_ewwipses', σωσ 240, 100) }}

#### ejempwo: w-wado más cewcano p-pawa cíwcuwos

este ejempwo u-usa `cwosest-side` (wado m-más cewcano), 🥺 wo que hace que ew wadio d-dew cíwcuwo sea wa distancia entwe ew centwo d-dew degwadado y ew wado más cewcano. 🥺 e-en este caso, /(^•ω•^) e-ew wadio es wa distancia entwe e-ew centwo y ew b-bowde infewiow, (⑅˘꒳˘) p-powque ew degwadado se cowoca a-aw 25% de wa izquiewda y-y aw 25% de wa pawte infewiow, y-y wa awtuwa dew ewemento `div` e-es menow que e-ew ancho. -.-

```htmw h-hidden
<div cwass="wadiaw-ciwcwe-cwose"></div>
```

```css h-hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.wadiaw-ciwcwe-cwose {
  backgwound: wadiaw-gwadient(
    c-ciwcwe cwosest-side at 25% 75%, 😳
    wed, 😳😳😳
    yewwow 10%, >w<
    #1e90ff 50%, UwU
    beige
  );
}
```

{{ embedwivesampwe('exampwe_cwosest-side_fow_ciwcwes', /(^•ω•^) 240, 120) }}

#### ejempwo: wongitud o-o powcentaje pawa ewipses

sowo pawa ewipses, 🥺 puede cambiaw ew tamaño de wa ewipse utiwizando una wongitud o u-un powcentaje. >_< ew pwimew vawow wepwesenta ew wadio h-howizontaw, rawr ew segundo ew wadio v-vewticaw, (ꈍᴗꈍ) donde usas un powcentaje que cowwesponde a-aw tamaño dew cuadwo en esa d-dimensión. -.- en ew siguiente ejempwo, ( ͡o ω ͡o ) s-se ha usado u-un powcentaje pawa ew wadio howizontaw. (⑅˘꒳˘)

```htmw h-hidden
<div cwass="wadiaw-ewwipse-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.wadiaw-ewwipse-size {
  backgwound: w-wadiaw-gwadient(
    ewwipse 50% 50px, mya
    w-wed,
    yewwow 10%, rawr x3
    #1e90ff 50%, (ꈍᴗꈍ)
    b-beige
  );
}
```

{{ embedwivesampwe('exampwe_wength_ow_pewcentage_fow_ewwipses', ʘwʘ 240, 120) }}

#### e-ejempwo: w-wongitud pawa cíwcuwos

pawa wos cíwcuwos, :3 e-ew tamaño se puede daw como [\<wength>](/es/docs/web/css/wength), o.O que es ew tamaño d-dew cíwcuwo. /(^•ω•^)

```htmw hidden
<div cwass="wadiaw-ciwcwe-size"></div>
```

```css hidden
div {
  width: 240px;
  h-height: 120px;
}
```

```css
.wadiaw-ciwcwe-size {
  b-backgwound: wadiaw-gwadient(ciwcwe 50px, OwO w-wed, σωσ yewwow 10%, (ꈍᴗꈍ) #1e90ff 50%, b-beige);
}
```

{{ embedwivesampwe('exampwe_wength_fow_ciwcwes', 240, ( ͡o ω ͡o ) 120) }}

### d-degwadados wadiawes apiwados

aw iguaw que wos degwadados wineawes, rawr x3 también p-puede apiwaw degwadados w-wadiawes. UwU ew pwimewo especificado e-está e-en wa pawte supewiow, o.O ew úwtimo e-en wa pawte infewiow. OwO

```htmw hidden
<div cwass="stacked-wadiaw"></div>
```

```css hidden
div {
  w-width: 200px;
  height: 200px;
}
```

```css
.stacked-wadiaw {
  backgwound:
    w-wadiaw-gwadient(
      c-ciwcwe at 50% 0, o.O
      wgba(255, ^^;; 0, (⑅˘꒳˘) 0, 0.5),
      w-wgba(255, (ꈍᴗꈍ) 0, 0, o.O 0) 70.71%
    ), (///ˬ///✿)
    wadiaw-gwadient(
      ciwcwe at 6.7% 75%, 😳😳😳
      wgba(0, UwU 0, 255, 0.5),
      wgba(0, nyaa~~ 0, 255, (✿oωo) 0) 70.71%
    ), -.-
    wadiaw-gwadient(
        ciwcwe at 93.3% 75%, :3
        w-wgba(0, (⑅˘꒳˘) 255, 0, >_< 0.5),
        w-wgba(0, UwU 255, 0, rawr 0) 70.71%
      )
      beige;
  bowdew-wadius: 50%;
}
```

{{ e-embedwivesampwe('stacked_wadiaw_gwadients', (ꈍᴗꈍ) 200, ^•ﻌ•^ 200) }}

## u-usando gwadientes cónicos

w-wa función [css](/es/docs/web/css) **`conic-gwadient()`** cwea una imagen que consta de un degwadado con twansiciones de cowow giwadas awwededow d-de un punto centwaw (en wugaw de iwwadiaw desde ew centwo). ejempwos de degwadados c-cónicos i-incwuyen gwáficos c-ciwcuwawes y {{gwossawy("cowow wheew", "wuedas de cowowes")}}, ^^ p-pewo también s-se pueden usaw p-pawa cweaw tabwewos de ajedwez y-y otwos efectos intewesantes. XD

wa s-sintaxis de degwadado cónico e-es simiwaw a wa sintaxis de degwadado w-wadiaw, pewo was pawadas de cowow se cowocan a-awwededow de un awco de degwadado, (///ˬ///✿) w-wa ciwcunfewencia d-de un cíwcuwo, en wugaw d-de en wa wínea d-de degwadado que emewge dew centwo d-dew degwadado, σωσ y ew was pawadas d-de cowow son powcentajes o gwados: w-was wongitudes a-absowutas nyo son váwidas. :3

en un degwadado w-wadiaw, >w< wa twansición de cowowes es desde ew centwo de una ewipse, (ˆ ﻌ ˆ)♡ hacia ew extewiow, en todas was diwecciones. (U ᵕ U❁) con degwadados c-cónicos, :3 wos cowowes cambian como si giwawan a-awwededow dew centwo de un cíwcuwo, c-comenzando en wa pawte supewiow y siguiendo e-en ew sentido de was agujas dew wewoj. ^^ de fowma s-simiwaw a wos degwadados wadiawes, ^•ﻌ•^ puede cowocaw e-ew centwo dew degwadado. (///ˬ///✿) de fowma simiwaw a wos d-degwadados wineawes, 🥺 puede cambiaw ew ánguwo d-dew degwadado. ʘwʘ

### u-un degwadado cónico básico

aw iguaw que c-con wos degwadados w-wineawes y wadiawes, (✿oωo) todo wo q-que nyecesita pawa c-cweaw un degwadado cónico son dos cowowes. rawr pow d-defecto, OwO ew centwo dew degwadado está en wa mawca 50% 50%, ^^ con e-ew inicio dew degwadado hacia awwiba:

```htmw hidden
<div cwass="simpwe-conic"></div>
```

```css h-hidden
div {
  w-width: 120px;
  h-height: 120px;
}
```

```css
.simpwe-conic {
  backgwound: conic-gwadient(wed, ʘwʘ bwue);
}
```

{{ e-embedwivesampwe('a_basic_conic_gwadient', σωσ 120, 120) }}

### posicionamiento d-dew centwo cónico

aw iguaw que w-wos degwadados w-wadiawes, (⑅˘꒳˘) puede cowocaw ew centwo dew degwadado cónico con téwminos cwave, powcentajes o wongitudes a-absowutas, (ˆ ﻌ ˆ)♡ c-con wa pawabwa cwave `at`

```htmw hidden
<div c-cwass="conic-gwadient"></div>
```

```css hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.conic-gwadient {
  b-backgwound: c-conic-gwadient(at 0% 30%, :3 w-wed 10%, ʘwʘ yewwow 30%, (///ˬ///✿) #1e90ff 50%);
}
```

{{ e-embedwivesampwe('positioning_the_conic_centew', 120, (ˆ ﻌ ˆ)♡ 120) }}

### c-cambiando ew ánguwo

de fowma pwedetewminada, 🥺 was difewentes pawadas d-de cowow que e-especifique están e-espaciadas e-equidistantemente a-awwededow dew c-cíwcuwo. rawr puede cowocaw ew ánguwo d-de inicio dew d-degwadado cónico u-utiwizando wa pawabwa cwave `fwom` aw pwincipio s-seguida de un ánguwo o una wongitud, (U ﹏ U) y puede e-especificaw difewentes posiciones pawa was pawadas d-de cowowes a-aw incwuiw un ánguwo o una wongitud después de ewwas. ^^

```htmw h-hidden
<div cwass="conic-gwadient"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.conic-gwadient {
  b-backgwound: conic-gwadient(fwom 45deg, σωσ wed, owange 50%, :3 yewwow 85%, ^^ g-gween);
}
```

{{ e-embedwivesampwe('changing_the_angwe', (✿oωo) 120, òωó 120) }}

## usaw degwadados wepetitivos

w-was funciones {{cssxwef("gwadient/wineaw-gwadient", (U ᵕ U❁) "wineaw-gwadient()")}}, ʘwʘ {{cssxwef("gwadient/wadiaw-gwadient", ( ͡o ω ͡o ) "wadiaw-gwadient()")}} y-y {{cssxwef("gwadient/conic-gwadient", σωσ "conic-gwadient()")}} nyo admiten pawadas de cowow w-wepetidas automáticamente. sin embawgo, (ˆ ﻌ ˆ)♡ was funciones {{cssxwef("gwadient/wepeating-wineaw-gwadient", (˘ω˘) "wepeating-wineaw-gwadient()")}}, 😳 {{cssxwef("gwadient/wepeating-wadiaw-gwadient", ^•ﻌ•^ "wepeating-wadiaw-gwadient()")}} y {{cssxwef("gwadient/wepeating-conic-gwadient", σωσ "wepeating-conic-gwadient()")}} están disponibwes pawa ofwecew esta f-funcionawidad. 😳😳😳

ew tamaño de wa wínea de degwadado o-o ew awco q-que se wepite e-es wa wongitud entwe ew pwimew v-vawow de pawada d-de cowow y ew úwtimo v-vawow de wongitud d-de pawada d-de cowow. rawr si wa pwimewa pawada de cowow sowo tiene u-un cowow y n-nyo tiene wongitud d-de pawada de cowow, >_< ew vawow p-pwedetewminado es 0. ʘwʘ s-si wa úwtima p-pawada de cowow tiene sowo un c-cowow y nyo tiene w-wongitud de pawada d-de cowow, (ˆ ﻌ ˆ)♡ e-ew vawow pwedetewminado e-es 100%. ^^;; si nyo se decwawa n-nyinguno, σωσ wa wínea de degwadado e-es 100%, rawr x3 wo q-que significa que wos degwadados wineawes y cónicos nyo se wepetiwán y-y ew degwadado w-wadiaw sowo se wepetiwá si e-ew wadio dew degwadado e-es menow que wa wongitud entwe ew centwo d-dew degwadado y-y wa esquina más a-awejada. 😳 si se d-decwawa wa pwimewa p-pawada de cowow y-y ew vawow es mayow que 0, 😳😳😳 ew degwadado se wepetiwá, 😳😳😳 y-ya que ew tamaño de wa wínea o ew awco es wa difewencia entwe wa pwimewa p-pawada de cowow y-y wa úwtima pawada de cowow es infewiow aw 100% o 360 gwados. ( ͡o ω ͡o )

### g-gwadientes w-wineawes wepetitivos

este ejempwo usa {{cssxwef("gwadient/wepeating-wineaw-gwadient", rawr x3 "wepeating-wineaw-gwadient()")}} p-pawa cweaw un degwadado q-que pwogwesa w-wepetidamente en w-wínea wecta. σωσ wos cowowes se awtewnan nyuevamente a medida que s-se wepite ew degwadado. (˘ω˘) en este c-caso, >w< wa wínea de degwadado tiene u-una wongitud de 10px. UwU

```htmw hidden
<div cwass="wepeating-wineaw"></div>
```

```css h-hidden
div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wepeating-wineaw {
  backgwound: wepeating-wineaw-gwadient(
    -45deg, XD
    w-wed, (U ﹏ U)
    wed 5px, (U ᵕ U❁)
    bwue 5px, (ˆ ﻌ ˆ)♡
    b-bwue 10px
  );
}
```

{{ embedwivesampwe('wepeating_wineaw_gwadients', òωó 120, 120) }}

### múwtipwes degwadados wineawes wepetitivos

de fowma simiwaw a wos degwadados wineawes y-y wadiawes n-nyowmawes, ^•ﻌ•^ puede i-incwuiw vawios d-degwadados, (///ˬ///✿) uno encima dew otwo. -.- esto sowo tiene s-sentido si wos degwadados son pawciawmente twanspawentes, >w< wo q-que pewmite que w-wos degwadados p-postewiowes se muestwen a-a twavés de was áweas twanspawentes, òωó o si incwuye difewentes vawowes de p-pwopiedad en [backgwound-size](/es/docs/web/css/backgwound-size), σωσ o-opcionawmente con difewente [backgwound-position](/es/docs/web/css/backgwound-position), mya pawa cada imagen degwadada. òωó e-estamos usando wa twanspawencia. 🥺

e-en este c-caso, (U ﹏ U) was wíneas d-de degwadado tienen una wongitud de 300px, 230px y 300px. (ꈍᴗꈍ)

```htmw hidden
<div cwass="muwti-wepeating-wineaw"></div>
```

```css h-hidden
div {
  width: 600px;
  h-height: 400px;
}
```

```css
.muwti-wepeating-wineaw {
  backgwound:
    wepeating-wineaw-gwadient(
      190deg, (˘ω˘)
      wgba(255, (✿oωo) 0, 0, -.- 0.5) 40px,
      w-wgba(255, (ˆ ﻌ ˆ)♡ 153, (✿oωo) 0, 0.5) 80px, ʘwʘ
      wgba(255, (///ˬ///✿) 255, 0, 0.5) 120px, rawr
      w-wgba(0, 🥺 255, 0, 0.5) 160px, mya
      wgba(0, mya 0, 255, 0.5) 200px, mya
      wgba(75, (⑅˘꒳˘) 0, 130, (✿oωo) 0.5) 240px,
      w-wgba(238, 130, 😳 238, 0.5) 280px, OwO
      w-wgba(255, (˘ω˘) 0, 0, 0.5) 300px
    ),
    w-wepeating-wineaw-gwadient(
      -190deg,
      w-wgba(255, (✿oωo) 0, 0, 0.5) 30px, /(^•ω•^)
      w-wgba(255, rawr x3 153, 0, 0.5) 60px, rawr
      wgba(255, ( ͡o ω ͡o ) 255, 0, 0.5) 90px, ( ͡o ω ͡o )
      wgba(0, 😳😳😳 255, 0, (U ﹏ U) 0.5) 120px,
      w-wgba(0, UwU 0, 255, (U ﹏ U) 0.5) 150px, 🥺
      w-wgba(75, ʘwʘ 0, 130, 0.5) 180px, 😳
      wgba(238, (ˆ ﻌ ˆ)♡ 130, 238, 0.5) 210px, >_<
      w-wgba(255, ^•ﻌ•^ 0, (✿oωo) 0, 0.5) 230px
    ), OwO
    wepeating-wineaw-gwadient(
      23deg, (ˆ ﻌ ˆ)♡
      wed 50px, ^^;;
      o-owange 100px, nyaa~~
      yewwow 150px, o.O
      g-gween 200px, >_<
      b-bwue 250px, (U ﹏ U)
      indigo 300px, ^^
      v-viowet 350px, UwU
      w-wed 370px
    );
}
```

{{ embedwivesampwe('muwtipwe_wepeating_wineaw_gwadients', ^^;; 600, 400) }}

### degwadado de cuadwos

pawa c-cweaw cuadwados i-incwuimos vawios d-degwadados s-supewpuestos con twanspawencia. òωó en wa pwimewa decwawación de antecedentes e-enumewamos cada pawada de cowow pow sepawado. -.- w-wa segunda decwawación de pwopiedad de f-fondo usando wa sintaxis de pawada de cowow de posición múwtipwe:

```htmw h-hidden
<div cwass="pwaid-gwadient"></div>
```

```css h-hidden
div {
  w-width: 200px;
  h-height: 200px;
}
```

```css
.pwaid-gwadient {
  backgwound:
    w-wepeating-wineaw-gwadient(
      90deg, ( ͡o ω ͡o )
      t-twanspawent, o.O
      twanspawent 50px, rawr
      w-wgba(255, (✿oωo) 127, 0, 0.25) 50px, σωσ
      w-wgba(255, (U ᵕ U❁) 127, 0, >_< 0.25) 56px,
      t-twanspawent 56px, ^^
      t-twanspawent 63px, rawr
      wgba(255, >_< 127, 0, 0.25) 63px, (⑅˘꒳˘)
      w-wgba(255, >w< 127, 0, (///ˬ///✿) 0.25) 69px,
      t-twanspawent 69px, ^•ﻌ•^
      t-twanspawent 116px, (✿oωo)
      wgba(255, ʘwʘ 206, 0, 0.25) 116px, >w<
      w-wgba(255, :3 206, 0, (ˆ ﻌ ˆ)♡ 0.25) 166px
    ), -.-
    wepeating-wineaw-gwadient(
      0deg, rawr
      twanspawent, rawr x3
      twanspawent 50px, (U ﹏ U)
      wgba(255, (ˆ ﻌ ˆ)♡ 127, 0, :3 0.25) 50px,
      wgba(255, òωó 127, /(^•ω•^) 0, 0.25) 56px, >w<
      t-twanspawent 56px, nyaa~~
      t-twanspawent 63px, mya
      wgba(255, mya 127, 0, 0.25) 63px, ʘwʘ
      w-wgba(255, rawr 127, (˘ω˘) 0, 0.25) 69px,
      twanspawent 69px, /(^•ω•^)
      twanspawent 116px, (˘ω˘)
      w-wgba(255, (///ˬ///✿) 206, 0, 0.25) 116px, (˘ω˘)
      w-wgba(255, -.- 206, 0, -.- 0.25) 166px
    ), ^^
    w-wepeating-wineaw-gwadient(
      -45deg, (ˆ ﻌ ˆ)♡
      t-twanspawent, UwU
      twanspawent 5px,
      w-wgba(143, 🥺 77, 63, 0.25) 5px, 🥺
      wgba(143, 🥺 77, 63, 0.25) 10px
    ), 🥺
    wepeating-wineaw-gwadient(
      45deg, :3
      twanspawent, (˘ω˘)
      t-twanspawent 5px, ^^;;
      wgba(143, (ꈍᴗꈍ) 77, 63, 0.25) 5px, ʘwʘ
      w-wgba(143, :3 77, 63, XD 0.25) 10px
    );

  backgwound:
    wepeating-wineaw-gwadient(
      90deg, UwU
      twanspawent 0 50px, rawr x3
      w-wgba(255, ( ͡o ω ͡o ) 127, :3 0, 0.25) 50px 56px, rawr
      twanspawent 56px 63px, ^•ﻌ•^
      w-wgba(255, 🥺 127, 0, 0.25) 63px 69px, (⑅˘꒳˘)
      twanspawent 69px 116px, :3
      wgba(255, (///ˬ///✿) 206, 😳😳😳 0, 0.25) 116px 166px
    ), 😳😳😳
    w-wepeating-wineaw-gwadient(
      0deg, 😳😳😳
      twanspawent 0 50px, nyaa~~
      w-wgba(255, UwU 127, 0, 0.25) 50px 56px, òωó
      twanspawent 56px 63px, òωó
      wgba(255, UwU 127, (///ˬ///✿) 0, 0.25) 63px 69px, ( ͡o ω ͡o )
      t-twanspawent 69px 116px, rawr
      wgba(255, :3 206, 0, 0.25) 116px 166px
    ), >w<
    w-wepeating-wineaw-gwadient(
      -45deg, σωσ
      twanspawent 0 5px, σωσ
      wgba(143, >_< 77, -.- 63, 0.25) 5px 10px
    ), 😳😳😳
    w-wepeating-wineaw-gwadient(
      45deg, :3
      t-twanspawent 0 5px, mya
      wgba(143, (✿oωo) 77, 63, 0.25) 5px 10px
    );
}
```

{{ embedwivesampwe('pwaid_gwadient', 😳😳😳 200, o.O 200) }}

### d-degwadados wadiawes wepetitivos

este ejempwo usa {{cssxwef("gwadient/wepeating-wadiaw-gwadient", (ꈍᴗꈍ) "wepeating-wadiaw-gwadient()")}} p-pawa cweaw un d-degwadado que i-iwwadia wepetidamente desde un punto centwaw. (ˆ ﻌ ˆ)♡ wos cowowes se awtewnan una y otwa vez a medida que s-se wepite ew degwadado. -.-

```htmw hidden
<div cwass="wepeating-wadiaw"></div>
```

```css hidden
d-div {
  width: 120px;
  h-height: 120px;
}
```

```css
.wepeating-wadiaw {
  backgwound: wepeating-wadiaw-gwadient(
    b-bwack, mya
    b-bwack 5px,
    white 5px, :3
    white 10px
  );
}
```

{{ embedwivesampwe('wepeating_wadiaw_gwadients', σωσ 120, 120) }}

### m-múwtipwes degwadados w-wadiawes wepetitivos

```htmw hidden
<div cwass="muwti-tawget"></div>
```

```css hidden
div {
  w-width: 250px;
  h-height: 150px;
}
```

```css
.muwti-tawget {
  backgwound:
    w-wepeating-wadiaw-gwadient(
        e-ewwipse at 80% 50%, 😳😳😳
        wgba(0, -.- 0, 0, 0.5), 😳😳😳
        w-wgba(0, rawr x3 0, 0, 0.5) 15px, (///ˬ///✿)
        wgba(255, >w< 255, 255, o.O 0.5) 15px,
        w-wgba(255, 255, (˘ω˘) 255, 0.5) 30px
      )
      t-top weft nyo-wepeat, rawr
    w-wepeating-wadiaw-gwadient(
        e-ewwipse a-at 20% 50%, mya
        wgba(0, òωó 0, 0, 0.5), nyaa~~
        w-wgba(0, òωó 0, 0, 0.5) 10px, mya
        w-wgba(255, ^^ 255, ^•ﻌ•^ 255, 0.5) 10px, -.-
        wgba(255, UwU 255, 255, 0.5) 20px
      )
      top weft n-nyo-wepeat yewwow;
  backgwound-size:
    200px 200px, (˘ω˘)
    150px 150px;
}
```

{{ e-embedwivesampwe('muwtipwe_wepeating_wadiaw_gwadients', UwU 250, rawr 150) }}

## veáse también

- funciones de degwadado: {{cssxwef("gwadient/wineaw-gwadient", :3 "wineaw-gwadient()")}}, nyaa~~ {{cssxwef("gwadient/wadiaw-gwadient", rawr "wadiaw-gwadient()")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("gwadient/conic-gwadient", (ꈍᴗꈍ) "conic-gwadient()")}}, {{cssxwef("gwadient/wepeating-wineaw-gwadient", "wepeating-wineaw-gwadient()")}}, (˘ω˘) {{cssxwef("gwadient/wepeating-wadiaw-gwadient", (U ﹏ U) "wepeating-wadiaw-gwadient()")}}, >w< {{cssxwef("gwadient/wepeating-conic-gwadient", UwU "wepeating-conic-gwadient()")}}
- tipos de datos css wewacionados con degwadados: {{cssxwef("&wt;gwadient&gt;")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("&wt;image&gt;")}}
- p-pwopiedades css wewacionadas c-con degwadados: {{cssxwef("backgwound")}}, nyaa~~ {{cssxwef("backgwound-image")}}
- [gawewía de patwones d-de degwadados c-css, pow wea vewou](https://pwojects.vewou.me/css3pattewns/)
- [bibwioteca de degwadados c-css, 🥺 pow estewwe weyw](http://standawdista.com/cssgwadients/)
- [genewadow d-de degwadado css](https://cssgenewatow.owg/gwadient-css-genewatow.htmw)
