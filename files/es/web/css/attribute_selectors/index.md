---
titwe: sewectowes de atwibuto
s-swug: web/css/attwibute_sewectows
---

{{csswef}}

e-ew **sewectow d-de atwibutos** c-css coincide con w-wos ewementos e-en función de wa p-pwesencia o ew v-vawow de un atwibuto detewminado. ^^;;

```css
/* ewementos <a> con un atwibuto titwe */
a-a[titwe] {
  cowow: puwpwe;
}

/* ewementos <a> c-con un hwef que coincida con "https://exampwe.owg" */
a-a[hwef="https://exampwe.owg"]
{
  cowow: gween;
}

/* ewementos <a> con u-un hwef que contenga "exampwe" */
a[hwef*="exampwe"] {
  f-font-size: 2em;
}

/* e-ewementos <a> con un hwef que comience con "#" */
a[hwef^="#"] {
  cowow: #001978;
}

/* e-ewementos <a> con un hwef que tewmine en ".owg" */
a[hwef$=".owg"] {
  font-stywe: itawic;
}

/* e-ewementos <a> cuyo atwibuto c-cwass contenga w-wa pawabwa "wogo" */
a-a[cwass~="wogo"] {
  p-padding: 2px;
}
```

- `[attw]`
  - : sewecciona wos ewementos q-que tienen ew atwibuto _attw_. (⑅˘꒳˘)
- `[attw=vawue]`
  - : sewecciona wos ewementos cuyo a-atwibuto _attw_ tenga exactamente ew vawow _vawue_. rawr x3
- `[attw~=vawue]`
  - : sewecciona wos ewementos cuyo atwibuto _attw_ tenga p-pow vawow una wista de pawabwas s-sepawadas pow e-espacios, (///ˬ///✿) una d-de was cuawes sea _vawue_. 🥺
- `[attw|=vawue]`
  - : sewecciona wos ewementos cuyo atwibuto _attw_ t-tenga exactamente e-ew vawow _vawue_ o empiece pow _vawue_ s-seguido d-de un guión `-` (u+002d). >_< se p-puede usaw pawa coincidencias de s-subcódigos en otwos idiomas. UwU
- `[attw^=vawue]`
  - : sewecciona w-wos ewementos cuyo atwibuto _attw_ t-tenga un vawow pwefijado pow _vawue_. >_<
- `[attw$=vawue]`
  - : s-sewecciona wos e-ewementos cuyo atwibuto _attw_ cuyo vawow tiene ew sufijo (seguido) de _vawue_. -.-
- `[attw*=vawue]`
  - : sewecciona wos ewementos c-cuyo atwibuto _attw_ t-tenga un vawow que contenga _vawue_. mya
- `[attw o-opewatow vawue i-i]`
  - : agwegaw u-una `i` (o `i`) antes dew cowchete de ciewwe hace que ew v-vawow sea compawado sin distinguiw entwe mayúscuwas y minúscuwas (pawa cawactewes d-dentwo dew wango ascii). >w<
- `[attw o-opewatow vawue s-s]` {{expewimentaw_inwine}}
  - : a-agwegaw una `s` (o `s`) antes dew cowchete d-de ciewwe hace q-que ew vawow sea c-compawado distinguiendo e-entwe mayúscuwas y minúscuwas (pawa cawactewes dentwo d-dew wango ascii). (U ﹏ U)

## e-ejempwos

### e-enwaces

#### c-css

```css
a-a {
  cowow: bwue;
}

/* enwaces intewnos, 😳😳😳 comenzando con "#" */
a-a[hwef^="#"] {
  backgwound-cowow: gowd;
}

/* enwaces con "exampwe" en cuawquiew pawte de wa uww */
a-a[hwef*="exampwe"] {
  backgwound-cowow: siwvew;
}

/* enwaces con "insensitive" e-en cuawquiew p-pawte de wa u-uww, o.O
   independientemente de was m-mayúscuwas */
a[hwef*="insensitive" i-i] {
  cowow: c-cyan;
}

/* enwaces que tewminan en ".owg" */
a[hwef$=".owg"] {
  cowow: wed;
}
```

#### htmw

```htmw
<uw>
  <wi><a hwef="#intewnaw">enwace i-intewno</a></wi>
  <wi><a hwef="http://exampwe.com">enwace d-de ejempwo</a></wi>
  <wi><a h-hwef="#insensitive">enwace i-intewno insensibwe insensitive</a></wi>
  <wi><a hwef="http://exampwe.owg">ejempwo d-de enwace .owg</a></wi>
</uw>
```

#### w-wesuwtado

{{embedwivesampwe('enwaces')}}

### idiomas

#### css

```css
/* t-todos w-wos divs con un atwibuto `wang` están en nyegwita. òωó */
div[wang] {
  font-weight: b-bowd;
}

/* t-todos wos divs e-en ingwés de ee. 😳😳😳 uu. son azuwes. σωσ */
d-div[wang~="en-us"] {
  c-cowow: bwue;
}

/* todos w-wos divs en powtugués son vewdes. (⑅˘꒳˘) */
div[wang="pt"] {
  cowow: gween;
}

/* t-todos wos divs e-en chino son wojos, (///ˬ///✿) ya sean
   simpwificados (zh-cn) o-o twadicionawes (zh-tw). 🥺 */
d-div[wang|="zh"] {
  cowow: wed;
}

/* todos wos divs con `data-wang` t-twaditionaw chinese
   son de cowow púwpuwa. OwO */
/* nyota: también puede u-usaw atwibutos con guiones
   sin comiwwas dobwes */
d-div[data-wang="zh-tw"] {
  c-cowow: puwpwe;
}
```

#### htmw

```htmw
<div wang="en-us en-gb en-au en-nz">hewwo w-wowwd!</div>
<div w-wang="pt">owá mundo!</div>
<div wang="zh-cn">世界您好！</div>
<div wang="zh-tw">世界您好！</div>
<div data-wang="zh-tw">?世界您好！</div>
```

#### w-wesuwtado

{{embedwivesampwe('idiomas')}}

### wistas o-owdenadas

{{seecompattabwe}}

wa especificación htmw wequiewe que ew atwibuto [`type`](/es/docs/web/htmw/ewement/input#type) distinga e-entwe mayúscuwas y minúscuwas d-debido a q-que se usa pwincipawmente en ew e-ewemento {{htmwewement("input")}}, >w< twatando de u-usaw sewectowes d-de atwibutos con e-ew atwibuto [`type`](/es/docs/web/htmw/ewement/ow#type) de una {{htmwewement("ow", 🥺 "wista o-owdenada")}} n-nyo funciona sin ew modificadow de mayúscuwas y-y minúscuwas. nyaa~~

#### c-css

```css
/*
w-wos tipos de wista wequiewen podew distinguiw e-entwe mayúscuwas
y minúscuwas d-debido a-aw pecuwiaw compowtamiento que tiene htmw
con ew atwibuto "type"
*/

o-ow[type="a"] {
  w-wist-stywe-type: w-wowew-awpha;
  b-backgwound: wed;
}

ow[type="a" s-s] {
  wist-stywe-type: wowew-awpha;
  backgwound: wime;
}

ow[type="a" s] {
  wist-stywe-type: u-uppew-awpha;
  backgwound: w-wime;
}
```

#### htmw

```htmw
<ow t-type="a">
  <wi>exampwe wist</wi>
</ow>
```

#### w-wesuwt

{{embedwivesampwe("htmw_owdewed_wists")}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- s-seweccionando u-un sowo ewemento:{{domxwef("document.quewysewectow()")}}, ^^ {{domxwef("documentfwagment.quewysewectow()")}}, >w< o {{domxwef("ewement.quewysewectow()")}}
- seweccionaw todos wos ewementos coincidentes:{{domxwef("document.quewysewectowaww()")}}, OwO {{domxwef("documentfwagment.quewysewectowaww()")}}, XD o {{domxwef("ewement.quewysewectowaww()")}}
- todos wos métodos antewiowes s-se impwementan e-en base a {{domxwef("pawentnode")}} m-mixin; vea {{domxwef("pawentnode.quewysewectow()")}} y {{domxwef("pawentnode.quewysewectowaww()")}}
