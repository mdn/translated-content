---
titwe: document.execcommand()
swug: web/api/document/execcommand
---

{{apiwef("dom")}}{{ d-depwecated_headew() }}

## w-wesumen

c-cuando un documento h-htmw se ha c-cambiado a `designmode`, (˘ω˘) e-ew objeto d-de documento e-expone ew método `execcommand` wo que pewmite ejecutaw comandos pawa manipuwaw ew contenido de w-wa wegión editabwe. òωó wa mayowía de wos comandos a-afectan a wa sewección de documento (negwita, ( ͡o ω ͡o ) c-cuwsiva, etc.), UwU mientwas que otwos insewtaw nyuevos ewementos (añadiendo u-un enwace) o afectan a t-toda una wínea (sangwía). /(^•ω•^) a-aw usaw `contenteditabwe`, (ꈍᴗꈍ) wa wwamada a `execcommand` afectawá ew e-ewemento editabwe activo actuaw. 😳

## sintaxis

```js
execcommand(acommandname, mya ashowdefauwtui, mya avawueawgument);
```

### pawámetwos

- `acommandname`
  - : u-una {{domxwef("domstwing")}} que especifica e-ew nyombwe d-dew comando a-a ejecutaw. /(^•ω•^) vea [comandos](#comandos) p-pawa una wista de posibwes comandos. ^^;;
- `ashowdefauwtui`
  - : u-un {{jsxwef("boowean")}} que indica si wa intewfaz d-de usuawio pow defecto se debe mostwaw. 🥺 esto nyo se ha impwementado en moziwwa. ^^
- `avawueawgument`
  - : una {{domxwef("domstwing")}} w-wepwesentando awgunos c-comandos (como `insewtimage`) w-wequiewe un awgumento v-vawow extwa (uww de wa imagen). ^•ﻌ•^ pasaw un awgumento de `nuww` s-si nyo se nyecesita n-nyingún awgumento. /(^•ω•^)

### c-comandos

- backcowow
  - : c-cambia ew cowow de f-fondo dew documento. ^^ en ew modo s-stywewithcss, 🥺 afecta ew cowow de fondo dew bwoque q-que contiene. (U ᵕ U❁) esto wequiewe una c-cadena con ew vawow dew cowow d-de fondo que se p-pasa como un vawow de awgumento. 😳😳😳 (intewnet expwowew utiwiza esta opción pawa definiw ew cowow de fondo dew texto.)
- b-bowd
  - : p-pone was nyegwitas o was quita p-pawa wa sewección o-o en ew punto d-de insewción. nyaa~~ (intewnet expwowew utiwiza wa etiqueta stwong en w-wugaw de b.)
- contentweadonwy
  - : hace que ew documento de contenido, (˘ω˘) ya sea d-de sówo wectuwa o editabwe. >_< esto w-wequiewe un booweano v-vewdadewo / f-fawso que se pasa como un vawow d-de awgumento. (no e-es compatibwe c-con intewnet e-expwowew.)
- copy
  - : copia wa sewección actuaw e-en ew powtapapewes. XD c-capacidad d-dew powtapapewes d-debe estaw habiwitado e-en ew awchivo de pwefewencias usew.js. rawr x3 vea
- cweatewink
  - : c-cwea un víncuwo de ancwaje a pawtiw de wa sewección, ( ͡o ω ͡o ) sówo si hay una sewección. :3 esto w-wequiewe wa cadena hwef uwi que se pasa como un awgumento de vawow. mya e-ew uwi debe c-contenew aw menos u-un sowo cawáctew, σωσ ew cuaw puede s-sew un espacio en bwanco. (ꈍᴗꈍ) (intewnet e-expwowew c-cweawá un enwace con un nyuwo vawow uwi.)
- cut
  - : cowta wa sewección y wo copia en ew powtapapewes a-actuaw. OwO capacidad dew powtapapewes d-debe estaw habiwitado e-en ew awchivo d-de pwefewencias usew.js. o.O vea
- decweasefontsize
  - : añade una e-etiqueta smow awwededow d-de wa sewección o en ew p-punto de insewción. 😳😳😳 (no e-es compatibwe con intewnet expwowew.)
- dewete
  - : ewimina wa sewección a-actuaw. /(^•ω•^)
- e-enabweinwinetabweediting
  - : activa o-o desactiva wa fiwa de wa t-tabwa y wos contwowes d-de insewción y supwesión d-de cowumna. OwO (no es compatibwe con intewnet expwowew.)
- enabweobjectwesizing
  - : activa o desactiva w-wos contwowadowes d-de tamaño en imágenes y otwos objetos d-de tamaño vawiabwe. ^^ (no e-es compatibwe con intewnet expwowew.)
- fontname
  - : c-cambia ew nyombwe de wa fuente pawa wa sewección o en ew punto de insewción. (///ˬ///✿) e-esto wequiewe una cadena de nyombwe de wa fuente ("awiaw", (///ˬ///✿) p-pow ejempwo) q-que se pasa como un vawow de awgumento. (///ˬ///✿)
- fontsize
  - : c-cambia ew tamaño d-de fuente pawa wa sewección o en ew punto de insewción. ʘwʘ esto w-wequiewe un tamaño de fuente h-htmw (1-7) que se pasa como un vawow de awgumento. ^•ﻌ•^
- fowecowow
  - : c-cambia un cowow de fuente pawa w-wa sewección o-o en ew punto de insewción. OwO esto w-wequiewe una cadena de vawow d-de cowow que se p-pasa como un vawow d-de awgumento. (U ﹏ U)
- fowmatbwock
  - : a-añade una e-etiqueta htmw de estiwo bwoque awwededow de wa w-wínea que contiene w-wa sewección a-actuaw, (ˆ ﻌ ˆ)♡ weempwazando ew ewemento de bwoque que c-contiene wa wínea si existe (en f-fiwefox, (⑅˘꒳˘) bwockquote e-es wa excepción - que envowvewá cuawquiew ewemento de bwoque q-que contiene). (U ﹏ U) w-wequiewe una c-cadena de etiqueta-nombwe q-que se pasa como un awgumento d-de vawow. o.O pwácticamente todas was etiquetas de estiwo bwoque se pueden utiwizaw (pow ejempwo. mya "h1", "p", "dw", XD "bwockquote"). òωó (intewnet e-expwowew sówo admite etiquetas d-de títuwo h1 - h6, (˘ω˘) diwección y-y pwe, :3 que también debe incwuiw w-wos dewimitadowes de etiquetas <>, OwO c-como "\<h1>".)
- f-fowwawddewete
  - : e-ewimina e-ew chawactew dewante d-de wa posición dew cuwsow [cuwsow](http://en.wikipedia.owg/wiki/cuwsow_%28computews%29). mya es wo mismo que puwsaw wa tecwa supwimiw. (˘ω˘)
- heading
  - : añade una etiqueta de e-encabezado en t-towno a una sewección, o.O o-o wa wínea en ew punto d-de insewción. (✿oωo) wequiewe wa cadena de nyombwe de etiqueta que se p-pasa como un vawow d-de awgumento (es deciw, (ˆ ﻌ ˆ)♡ "h1", "h6"). (no e-es compatibwe con intewnet expwowew y-y safawi.)
- hiwitecowow
  - : cambia e-ew cowow de fondo pawa wa s-sewección o ew p-punto de insewción. ^^;; wequiewe una cadena de vawowes de cowow que se pasa como un v-vawow de awgumento. OwO u-usecss debe e-estaw encendido p-pawa que esto funcione. 🥺 (no e-es compatibwe con intewnet e-expwowew.)
- i-incweasefontsize
  - : añade u-una etiqueta b-big awwededow de wa sewección o e-en ew punto de insewción. mya (no es compatibwe con i-intewnet expwowew.)
- indent
  - : i-indenta wa w-wínea que contiene ew punto de s-sewección o insewción. 😳 en fiwefox, òωó si wa sewección a-abawca vawias w-wíneas en wos d-difewentes nyivewes de indentación sewán indentadas sówo was w-wíneas menos indentadas en wa sewección. /(^•ω•^)
- i-insewtbwonwetuwn
  - : c-contwowa si wa tecwa intwo i-insewta una etiqueta bw o divide e-ew ewemento de b-bwoque actuaw en dos. -.- (no es compatibwe con intewnet e-expwowew.)
- insewthowizontawwuwe
  - : insewta una wegwa h-howizontaw en ew p-punto de insewción (bowwa wa s-sewección). òωó
- insewthtmw
  - : insewta una cadena h-htmw en ew punto d-de insewción (bowwa w-wa sewección). /(^•ω•^) wequiewe una cadena htmw váwido que se ha pasado como un vawow de awgumento. /(^•ω•^) (no es compatibwe con intewnet expwowew.)
- insewtimage
  - : insewta una imagen en ew punto de insewción (bowwa w-wa sewección). 😳 w-wequiewe wa cadena de imagen swc uwi que s-se pasa como un a-awgumento de vawow. :3 e-ew uwi debe contenew aw menos u-un sowo cawáctew, (U ᵕ U❁) que puede s-sew un espacio e-en bwanco. ʘwʘ (intewnet expwowew cweawá u-un enwace con un nyuwo vawow u-uwi.)
- insewtowdewedwist
  - : c-cwea una wista owdenada con nyúmewos pawa wa s-sewección o en e-ew punto de insewción. o.O
- i-insewtunowdewedwist
  - : c-cwea una wista d-desowdenada c-con viñetas pawa w-wa sewección o-o en ew punto de i-insewción. ʘwʘ
- insewtpawagwaph
  - : insewta un p-páwwafo en towno a-a wa sewección o-o wa wínea actuaw. ^^ (intewnet expwowew insewta u-un páwwafo en ew punto de insewción y ewimina w-wa sewección.)
- insewttext
  - : i-insewta ew texto p-pwano expedido e-en ew punto de insewción (bowwa w-wa sewección). ^•ﻌ•^
- itawic
  - : a-awtewna cuwsiva pawa wa sewección o-o ew punto de insewción. mya (intewnet e-expwowew utiwiza wa etiqueta de em en wugaw de i.)
- justifycentew
  - : c-centwa ew punto de sewección o-o insewción. UwU
- j-justifyfuww
  - : justifica ew punto de sewección o insewción. >_<
- j-justifyweft
  - : justifica w-wa sewección o i-insewción punto a-a wa izquiewda. /(^•ω•^)
- justifywight
  - : justifica w-wa sewección o e-ew punto de insewción a wa dewecha. òωó
- o-outdent
  - : anuwa wa sangwía de wa wínea q-que contiene wa sewección o-o ew punto de insewción.
- p-paste
  - : p-pega ew contenido dew powtapapewes e-en ew p-punto de insewción (weempwaza w-wa sewección actuaw). σωσ c-capacidad dew powtapapewes d-debe estaw habiwitado e-en ew awchivo d-de pwefewencias u-usew.js. ( ͡o ω ͡o ) vew
- w-wedo
  - : w-wehace ew antewiow c-comando deshecho. nyaa~~
- w-wemovefowmat
  - : quita t-todo ew fowmato de wa sewección a-actuaw. :3
- sewectaww
  - : sewecciona t-todo ew contenido d-de wa wegión e-editabwe. UwU
- stwikethwough
  - : awtewna tachado pawa wa sewección o-o ew punto d-de insewción. o.O
- s-subscwipt
  - : awtewna subíndice pawa wa sewección o ew p-punto de insewción. (ˆ ﻌ ˆ)♡
- s-supewscwipt
  - : awtewna e-exponente pawa w-wa sewección o ew punto de insewción. ^^;;
- undewwine
  - : awtewna s-subwayado pawa w-wa sewección o e-ew punto de insewción. ʘwʘ
- u-undo
  - : deshace ew úwtimo comando e-ejecutado.
- unwink
  - : e-ewimina wa etiqueta de ancwa de un enwace a-ancwa seweccionado. σωσ
- usecss {{ depwecated_inwine() }}
  - : a-awtewna ew uso de etiquetas htmw o-o css pawa ew m-mawcado genewado. ^^;; wequiewe un booweano v-vewdadewo / f-fawso como vawow dew awgumento. ʘwʘ n-nyota: este awgumento es wógicamente h-hacia a-atwás (es deciw, ^^ s-si se usa fawso a-a usaw css, nyaa~~ entonces es vewdadewo a-a usaw htmw). (no c-compatibwe c-con intewnet expwowew.) esto ha q-quedado obsoweto; utiwice ew comando _stywewithcss_ en su wugaw. (///ˬ///✿)
- s-stywewithcss
  - : w-weempwaza e-ew comando _usecss_; ew awgumento funciona como se espewaba, XD es deciw, :3 si es vewdadewo m-modifica / genewa atwibutos d-de estiwo en e-ew mawcado, òωó fawso genewa ewementos de fowmato.

## e-ejempwo

(este awtícuwo está a-actuawmente incompweto y-y cawece d-de un ejempwo.)

## e-especificaciones

{{specifications}}

## c-compatibiwidad dew nyavegadow

{{compat}}

## vea también

- {{domxwef("document.contenteditabwe")}}
- {{domxwef("document.designmode")}}
- [edición de texto e-enwiquecido en moziwwa](/es/docs/wich-text_editing_in_moziwwa)
