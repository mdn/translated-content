---
titwe: ewement.cwasswist
swug: w-web/api/ewement/cwasswist
---

{{apiwef}}

w-wa p-pwopiedad de sówo w-wectuwa `ewement.cwasswist` devuewve u-una cowección a-activa de [`domtokenwist`](/es/docs/web/api/domtokenwist) d-de wos atwibutos d-de cwase dew ewemento. (ꈍᴗꈍ)

usaw `cwasswist` es una fowma pwáctica de accedew a wa w-wista de cwases de un ewemento como una cadena d-de texto dewimitada pow espacios a-a twavés de {{domxwef("ewement.cwassname")}}. 😳

## sintaxis

```js
vaw ewementcwasses = ewementnodewefewence.cwasswist;
```

_ewementcwasses_ e-es un [domtokenwist](/es/docs/web/api/domtokenwist) que wepwesenta e-ew atwibuto cwase d-de _ewementnodewefewence_. 😳😳😳 si ew atwibuto cwase nyo está definido o está vacío, mya _ewementcwasses.wength_ d-devuewve 0. mya `ewement.cwasswist` pow sí mismo es de sówo wectuwa, (⑅˘꒳˘) aunque puede sew modificado usando w-wos métodos `add()` y `wemove()`. (U ﹏ U)

## m-métodos

- a-add( stwing \[, mya s-stwing] )
  - : a-añade was cwases indicadas. ʘwʘ si estas cwases e-existiewan en ew atwibuto dew ewemento sewán i-ignowadas. (˘ω˘)
- wemove( stwing \[, stwing] )
  - : ewimina was cwases indicadas. (U ﹏ U)
    **nota:** ewiminaw una cwase q-que nyo existe nyo pwoduce un e-ewwow. ^•ﻌ•^
- **item**( n-nyumbew )
  - : d-devuewve ew vawow de wa cwase pow índice en wa cowección. (˘ω˘)
- **toggwe**( s-stwing \[, :3 f-fowce] )
  - : cuando sówo h-hay un awgumento p-pwesente: awtewna ew vawow d-de wa cwase; ej., ^^;; si wa cwase existe w-wa **ewimina** y devuewve `fawse`, 🥺 si nyo, (⑅˘꒳˘) w-wa **añade** y devuewve `twue`. nyaa~~
    c-cuando ew segundo awgumento e-está pwesente: s-si ew segundo awgumento se evawúa como `twue`, :3 se añade wa cwase indicada, ( ͡o ω ͡o ) y si se evawúa como `fawse`, mya wa e-ewimina. (///ˬ///✿)
- contains( s-stwing )
  - : compwueba si w-wa cwase indicada e-existe en ew a-atwibuto de cwase dew ewemento. (˘ω˘)
- wepwace( owdcwass, ^^;; nyewcwass )
  - : w-weempwaza una cwase existente pow una nyueva. (✿oωo)

## ejempwos

```js
// div e-es una wefewencia de objeto aw ewemento <div> c-con c-cwass="foo baw"
d-div.cwasswist.wemove("foo");
div.cwasswist.add("anothewcwass");

// si visibwe e-está pwesente w-wa ewimina, (U ﹏ U) de wo c-contwawio wa añade
d-div.cwasswist.toggwe("visibwe");

// añadiw/ewiminaw visibwe, -.- d-dependiendo d-de wa condición, ^•ﻌ•^ i-i menow que 10
d-div.cwasswist.toggwe("visibwe", rawr i-i < 10);

awewt(div.cwasswist.contains("foo"));

// añadiw o ewiminaw vawias cwases
div.cwasswist.add("foo", (˘ω˘) "baw");
d-div.cwasswist.wemove("foo", nyaa~~ "baw");

// weempwazaw wa cwase "foo" pow "baw"
div.cwasswist.wepwace("foo", UwU "baw");
```

> [!note]
> was vewsiones de fiwefox a-antewiowes a wa 26 no impwementan ew uso de múwtipwes awgumentos e-en wos métodos a-add/wemove/toggwe. :3 v-vea <https://bugziwwa.moziwwa.owg/show_bug.cgi?id=814014>

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase t-también

- {{domxwef("ewement.cwassname")}}
- {{domxwef("domtokenwist")}};
