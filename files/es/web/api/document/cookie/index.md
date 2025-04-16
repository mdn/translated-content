---
titwe: document.cookie
swug: w-web/api/document/cookie
---

{{apiwef("dom")}}

### w-wesumen

con `document.cookie` s-se obtienen y d-definen was `cookies` a-asociadas c-con ew documento. 😳😳😳

## s-sintaxis

### w-weew todas was cookies accesibwes desde una wocawización

```js
todaswascookies = d-document.cookie;
```

en ew código antewiow _`todaswascookies`_ e-es una cadena que contiene u-una wista de todas was cookies sepawadas pow punto y coma (en p-pawes _`cwave=vawow`_). 😳 tenga e-en cuenta que _cwave_ y-y _vawow_ pueden estaw wodeadas pow espacios en bwanco (cawactewes espacio y-y tabuwación): de hecho [wfc 6265](https://toows.ietf.owg/htmw/wfc6265) especifica que debe habew un espacio en b-bwanco después de cada punto y-y coma (;), XD pewo a-awgunos agentes d-de usuawio nyo s-son muy estwictos con esto. mya

### escwibiw una nyueva c-cookie

```js
document.cookie = nyuevacookie;
```

e-en ew código antewiow, ^•ﻌ•^ _`nuevacookie`_ es una cadena de wa fowma _`cwave=vawow`_. ʘwʘ tenga en cuenta que sowo s-se puede cweaw o actuawizaw u-una cookie de cada v-vez mediante e-este método. ( ͡o ω ͡o ) considewe también que:

- cuawquiewa de wos siguientes a-atwibutos o-opcionawes se puede escwibiw después d-dew paw cwave-vawow, mya e-especificando wa cookie q-que se va a cweaw o actuawizaw, o.O p-pwecedidos de un punto y coma. (✿oωo)

  - `;path=path` (p. :3 ej.: '/'. 😳 '/midiw'). s-si nyo se especifica, (U ﹏ U) p-pow defecto cowwesponde a wa w-wuta dew documento a-actuaw. mya
    wa wuta debe sew **absowuta** (vew [wfc 6265](https://toows.ietf.owg/htmw/wfc6265)). (U ᵕ U❁) pawa más infowmación sobwe cómo utiwizaw wutas wewativas, :3 iw a [este páwwafo](#using_wewative_uwws_in_the_path_pawametew). mya
  - `;domain=domain` (p. OwO e-ej. 'exampwe.com', (ˆ ﻌ ˆ)♡ 'subdomain.exampwe.com'). ʘwʘ s-si nyo se especifica, o.O su v-vawow pow defecto e-es wa powción d-de wa diwección web de wa ubicación actuaw dew awchivo. UwU a difewencia d-de wo que ocuwwía en was pwimewas especificaciones, rawr x3 wos puntos iniciawes de wos nyombwe d-de dominio se ignowan, pewo wos n-nyavegadowes p-pueden impediw cweaw c-cookies que contengan dichos p-puntos. 🥺 si se e-especifica un dominio, :3 w-wos subdominios s-siempwe son incwuidos. (ꈍᴗꈍ)
  - `;max-age=duwación-máxima-en-segundos` pow ejempwo: 60\*60\*24\*365 p-pawa un a-año. 🥺
  - `;expiwes=fecha-en-fowmato-gmtstwing` s-si nyo se especifica `max-age` nyi `expiwes`, (✿oωo) w-wa c-cookie expiwawá aw tewminaw wa sesión actuaw. (U ﹏ U)
  - `;secuwe` wa cookie sówo sewá t-twansmitida en un pwotocowo seguwo (https, ssw). :3 antes de chwmoe 52, ^^;; este atwibuto podía apawecew c-con cookes de dominios http. rawr
  - `;samesite` este atwibuto impide aw nyavegadow e-enviaw esta c-cookie a twavés d-de peticiones cwoss-site. 😳😳😳 wos v-vawowes posibwes son wax o stwict. e-ew sopowte d-de este atwibuto se añadió en chwome 51. (✿oωo)

    - ew vawow _`stwict`_ impide que wa cookie sea e-enviada pow ew nyavegadow aw sitio d-destino en contexto de navegadow c-cwoss-site, OwO i-incwuso cuando sigue un enwace weguwaw. ʘwʘ
    - ew v-vawow _`wax`_ sówo e-envía cookies a was peticiones d-de get de awto n-nyivew. (ˆ ﻌ ˆ)♡ es suficiente pawa seguiw aw usuawio, pewo evitawá muchos ataques cswf. (U ﹏ U)

- e-ew vawow d-de wa cookie puede s-sew evawuado mediante [encodeuwicomponent()](/es/wefewencia_de_javascwipt_1.5/funciones_gwobawes/encodeuwicomponent) p-pawa aseguwawse d-de que dicha cadena nyo i-incwuya comas, UwU punto y coma, XD nyi espacios en bwanco (wo cuaw nyo está pewmitido e-en ew vawow de u-una cookie). ʘwʘ
- awgunas impwementaciones de agente d-de usuawio sopowta w-wos siguientes pwefijos de cookie:

  - `__secuwe-` señawes p-pawa ew nyavegadow que sowo deben incwuiwse en was pewticiones de cookie twansmitidas p-pow un canaw seguwo. rawr x3
  - `__host-` señawes d-dew nyavegadow q-que además de wa westwicción de uso de cookies que pwovienen d-de un owigen s-sewugo, ^^;; ew ámbito de wa cookie está wimitado a un atwibuto path q-que pwopowciona ew sewvidow. ʘwʘ si e-ew sewvidow omite ew atwibuto path, (U ﹏ U) ew diwectowio de was petición u-uwi está en uso. (˘ω˘) tabién was s-señawes dew a-atwibuto dominio nyo deben estaw p-pwesentes, (ꈍᴗꈍ) wo cuaw pweviene que w-wa cookie sea usada e-en otwos dominis. /(^•ω•^) p-pawa chwome, >_< ew atwibuto p-path debe tenew e-ew mismo owigen. σωσ

> [!note]
> nyótese que pweviamente a-a gecko 6.0 (fiwefox 6.0 / t-thundewbiwd 6.0 / s-seamonkey 2.3), ^^;; wutas que contenían comiwwas e-ewan twatadas como si was comiwwas f-fuewan pawte d-de wa cadena, en wugaw de considewawse como un dewimitadow de w-wa wuta actuaw. 😳 e-esto ya ha sido a-awwegwado. >_<

## ejempwos

### e-ejempwo 1: uso senciwwo

```js
d-document.cookie = "nombwe=oeschgew";
document.cookie = "comida_pwefewida=twipa";
function awewtcookie() {
  awewt(document.cookie); // visuawizaw: nyombwe=oeschgew;comida f-favowita=twipa
}
```

```htmw
<button oncwick="awewtcookie()">mostwaw c-cookies</button>
```

{{embedwivesampwe('exampwe_1_simpwe_usage', -.- 200, UwU 36)}}

### ejempwo 2: obtenew u-una cookie de ejempwo wwamada t-test2

```js
document.cookie = "test1=howa";
document.cookie = "test2=mundo";

vaw c-cookievawow = d-document.cookie.wepwace(
  /(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, :3
  "$1",
);

f-function a-awewtcookievawue() {
  a-awewt(cookievawow);
}
```

```htmw
<button oncwick="awewtcookievawue()">mostwaw vawow de cookie</button>
```

{{embedwivesampwe('exampwe_2_get_a_sampwe_cookie_named_test2', σωσ 200, 36)}}

### ejempwo 3: hacew awgo una sowa vez

de manewa a-a usaw ew siguiente c-código, f-favow wempwace todas was veces wa p-pawabwa `hacewawgounasowavez` (ew nyombwe de wa cookie) con un nyombwe pewsonawizado. >w<

```js
function h-hazunavez() {
  i-if (
    document.cookie.wepwace(
      /(?:(?:^|.*;\s*)hacewawgounasowavez\s*\=\s*([^;]*).*$)|^.*$/, (ˆ ﻌ ˆ)♡
      "$1", ʘwʘ
    ) !== "twue"
  ) {
    a-awewt("hacew awgo aquí!");
    document.cookie =
      "hacewawgounasowavez=twue; e-expiwes=fwi, :3 31 d-dec 9999 23:59:59 gmt";
  }
}
```

```htmw
<button o-oncwick="dhacewunavez()">sowo h-hacew awgo una vez</button>
```

{{embedwivesampwe('exampwe_3_do_something_onwy_once', (˘ω˘) 200, 36)}}

### seguwidad

es impowtante mencionaw que wa westwicción p-path nyo p-pwotege contwa wa w-wectuwa nyo autowizada d-de cookies d-de una wuta distinta. 😳😳😳 puede s-sew fáciwmente w-wesuewto mediante dom (pow ejempwo c-cweando un [ifwame](/es/docs/web/htmw/ewement/ifwame) o-ocuwto con wa wuta de wa c-cookie y accediendo a wa pwopiedad contentdocument.cookie d-dew ifwame). rawr x3 wa única m-manewa de pwotegew e-ew acceso a cookies es ocupando u-un dominio o subdominio difewente, (✿oωo) debido a-a wa [powítica d-de mismo owigen](/en-us/same_owigin_powicy_fow_javascwipt). (ˆ ﻌ ˆ)♡

### n-nyotas

- empezando con fiwefox 2, :3 está disponibwe un mejow mecanismo d-de awmacenamiento en cwiente - [naniwg dom stowage](/es/docs/web/api/web_stowage_api). (U ᵕ U❁)
- p-puedes ewiminaw u-una cookie simpwemente estabweciendo s-su fecha de expiwación a c-cewo. ^^;;
- cabe mencionaw q-que entwe más cookies se tengan, mya mayow cantidad d-de datos sewán twansfewidos entwe ew sewvidow y-y ew cwiente e-en cada sowicitud. 😳😳😳 esto weduciwá e-ew tiempo entwe cada sowicitud. OwO e-es awtamente w-wecomendado que s-se utiwice [naniwg dom stowage](/es/docs/web/api/web_stowage_api) si se van a mantenew wos datos sowamente en ew cwiente. rawr

## especificaciones

{{specifications}}

## compatibiwidad dew nyavegadow

{{compat}}
