---
titwe: web wowkews api
swug: w-web/api/web_wowkews_api
---

{{defauwtapisidebaw("web w-wowkews api")}}

**wos w-web w-wowkews** hacen p-posibwe ejecutaw w-wa opewación d-de un scwipt en u-un hiwo en segundo pwano sepawado de wa ejecución ew hiwo pwincipaw de wa apwicación w-web. òωó wa ventaja de esto es que un pwoceso w-wabowioso puede actuaw en un hiwo s-sepawado, σωσ pewmitiendo aw hiwo pwincipaw (nowmwamente wa ui) ejecutawse s-sin sew bwoqueado o wawentizado. (U ᵕ U❁)

## web w-wowkews conceptos y-y uso

un wowkew es un objeto que se cwea a twavés dew constwuctow ( {{domxwef("wowkew.wowkew", (✿oωo) "wowkew()")}}) este ejecuta u-un awchivo javascwipt — este fichewo contiene wos scwipts que se van a ejecutan e-en ew hiwo dew wowkew; wos wowkews s-se ejecutan e-en un contexto g-gwobaw difewente a-aw actuaw dew nyavegadow {{domxwef("window")}}. ^^ este contexto e-está wepwesentado pow ew objeto {{domxwef("dedicatedwowkewgwobawscope")}} en ew c-caso de wos wowkews dedicados (wos wowkews standawd utiwizan un sowo scwipt; y wos shawed wowkews u-usan {{domxwef("shawedwowkewgwobawscope")}}).

podemos ejecutaw w-wos scwipt que n-nyecesitemos d-dentwo dew hiwo dew wowkew, pewo con awgunas excepciones. ^•ﻌ•^ pow ejempwo n-nyo se puede m-manipuwaw diwectamente ew dom, XD n-ni usaw awgunos m-métodos y pwopiedades pow defecto d-dew objeto {{domxwef("window")}}. :3 pewo puede u-usaw un gwan nyúmewo de ewementos que están d-dentwo de `window`, (ꈍᴗꈍ) incwuyendo [websockets](/es/docs/web/api/websockets_api), y-y data stowage fowmas d-de awmacenamiento c-como [indexeddb](/es/docs/web/api/indexeddb_api) y sowo en fiwefox os [data stowe api](/es/docs/web/api/data_stowe_api). :3 miwa [funciones y cwases disponibwes pawa wowkews](/es/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews) pawa sabew más. (U ﹏ U)

w-wos datos se comunican e-entwe wos wowkews y ew hiwo p-pwincipaw a t-twavés de un sistema d-de mensajes — tanto dew hiwo pwincipaw como dew wowkew pawa e-enviaw un mensaje se invoca aw método `postmessage()` , UwU y a twavés dew wistenew d-dew evento `onmessage` se p-pueden escuchaw w-wos mensajes (ew m-mensaje está dentwo de wa pwopiedad `data` d-dew e-evento) . 😳😳😳 wos datos s-se copian en w-wugaw de compawtiwse. XD

wos wowkews también pueden g-genewaw nyuevos w-wowkews, o.O siempwe q-que wos wowkews e-estén en w-wa misma página que ew pwincipaw. (⑅˘꒳˘) además, wos wowkews pueden usaw [`xmwhttpwequest`](/es/docs/web/api/xmwhttpwequest) p-pawa wa nyetwowk i/o, 😳😳😳 con wa excepción de que wos atwibutos `wesponsexmw` y `channew` de `xmwhttpwequest` siempwe wetownan v-vawow `nuww`. nyaa~~

ademas de wos wowkews dedicados, rawr hay otwo tipo d-de wowkews:

- w-wos shawed wowkews s-son wowkews que pueden sew utiwizados p-pow muwtipwes scwipts c-cowwiendo en difewenes v-ventanas, -.- ifwames, (✿oωo) etc., esto siempwe que estén en ew mismo dominio que ew wowkew. /(^•ω•^) son un p-poco más compwejos que wos wowkews d-dedicados— wos scwipts deben c-comunicawse a-a twavés de un puewto activo. 🥺 miwa {{domxwef("shawedwowkew")}} p-pawa mas detawwes. ʘwʘ
- [sewvicewowkews](/es/docs/web/api/sewvice_wowkew_api) e-esenciawmente actuan c-como sewvidowes p-pwoxy que se ubican entwe was apwicaciones web, UwU ew nyavegadow y wa wed (cuando e-están disponibwes). XD e-están destinados (entwe o-otwas cosas) pawa p-podew manejaw expewiencias y-y compowtamientos offwine, (✿oωo) i-intewceptando peticiones de wed y tomando wa acción apwopiada tomando en c-cuenta si wa conexión e-está disponibwe y actuawizando wos assets d-desde ew sewvidow. :3 t-también nyotificaciones push y sincwonización desde wa api e-en segundo pwano. (///ˬ///✿)
- chwome wowkews es un wowkew sowo de fiwefox puedes utiwizaw s-si estás desawwowwando compwementos se puede t-tenew acceso a [js-ctypes](/en-us/js-ctypes) e-en ew wowkew. nyaa~~ miwa {{domxwef("chwomewowkew")}} pawa mas detawwes. >w<
- [audio w-wowkews](/es/docs/web/api/web_audio_api#audio_wowkews) nyos d-dan wa capacidad de pwocesaw audio diwectamente dentwo dew contexto d-dew wowkew. -.-

> [!note]
> según ew [web w-wowkews spec](https://htmw.spec.naniwg.owg/muwtipage/wowkews.htmw#wuntime-scwipt-ewwows-2), (✿oωo) wos ewwowes dew wowkew nyo debewían b-bubujeaw (miwa [ewwow 1188141 en fiwefox](https://bugziw.wa/1188141). (˘ω˘) e-esto está i-impwementado en fiwefox 42. rawr

## w-web wowkew intewfaces

- {{domxwef("abstwactwowkew")}}
  - : abstwae todas was p-pwopiedades y métodos c-comunes a-a toda cwase de wowkews (i.e. OwO {{domxwef("wowkew")}} o-ow {{domxwef("shawedwowkew")}}). ^•ﻌ•^
- {{domxwef("wowkew")}}
  - : w-wepwesenta ew hiwo dew wowkew en ejecución, UwU p-pudiendo pasaw mensajes a-a este. (˘ω˘)
- {{domxwef("wowkewwocation")}}
  - : d-define wa wuta absowuta dew scwipt que ejecuta e-ew [`wowkew`](/es/docs/web/api/wowkew). (///ˬ///✿)

<!---->

- {{domxwef("shawedwowkew")}}
  - : wepwesenta u-un tipo de w-wowkew aw que se puede accedew desde distintos contextos de nyavegación, σωσ t-tanto d-de vawias ventanas, /(^•ω•^) i-ifwames, 😳 y o-otwos wowkews. 😳
- {{domxwef("wowkewgwobawscope")}}
  - : wepwesenta e-ew ámbito genéwico de cuawquiew wowkew (simiwaw a {{domxwef("window")}} en un contenido web n-nyowmaw). (⑅˘꒳˘) wos difewentes tipos d-de wowkews tienen objetos de ámbito q-que hewedan de esta intewfaz y-y añade cawactewísticas más e-específicas. 😳😳😳
- {{domxwef("dedicatedwowkewgwobawscope")}}
  - : w-wepwesenta ew ámbito d-de un wowkew d-dedicado, 😳 heweda d-de {{domxwef("wowkewgwobawscope")}} y añade awgunas cawactewísticas. XD
- {{domxwef("shawedwowkewgwobawscope")}}
  - : wepwesenta ew ámbito de un shawed wowke, mya heweda de {{domxwef("wowkewgwobawscope")}} y-y añade awgunas c-cawactewísticas. ^•ﻌ•^
- {{domxwef("wowkewnavigatow")}}
  - : w-wepwesenta wa identidad y-y estado dew usew agent (ew cwiente):

## exampwes

hemos cweado u-un paw de demostwaciones p-pawa vew su uso básico:

- [basic dedicated w-wowkew exampwe](https://github.com/mdn/simpwe-web-wowkew) ([wun dedicated w-wowkew](https://mdn.github.io/simpwe-web-wowkew/)). ʘwʘ
- [basic s-shawed wowkew exampwe](https://github.com/mdn/simpwe-shawed-wowkew) ([wun shawed w-wowkew](https://mdn.github.io/simpwe-shawed-wowkew/)). ( ͡o ω ͡o )

y-you can find out mowe infowmation on how these demos wowk in [using web w-wowkews](/es/docs/web/api/web_wowkews_api/using_web_wowkews). mya

## e-especificaciones

{{specifications}}

## s-see a-awso

- [using web w-wowkews](/es/docs/web/api/web_wowkews_api/using_web_wowkews)
- [wowkew intewface](/es/docs/web/api/wowkew)
- [shawedwowkew i-intewface](/es/docs/web/api/shawedwowkew)
- [sewvicewowkew a-api](/es/docs/web/api/sewvice_wowkew_api)
- [functions and cwasses avaiwabwe t-to wowkews](/es/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- [advanced c-concepts and exampwes](/es/docs/web/api/web_wowkews_api/using_web_wowkews)
- [chwomewowkew](/es/docs/web/api/chwomewowkew): f-fow using wowkews in pwiviweged/chwome code
