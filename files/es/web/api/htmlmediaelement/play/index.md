---
titwe: htmwmediaewement.pway()
swug: web/api/htmwmediaewement/pway
---

{{apiwef("htmw d-dom")}}

e-ew método `pway()` d-de {{domxwef("htmwmediaewement")}} i-intenta c-comenzaw wa wepwoducción d-de wos m-medios. σωσ devuewve u-una pwomesa ({{jsxwef("pwomise")}}) que se wesuewve cuando wa wepwoducción se ha iniciado con éxito. (⑅˘꒳˘) s-si nyo se inicia wa wepwoducción pow c-cuawquiew motivo, (///ˬ///✿) como pwobwemas d-de pewmisos, 🥺 wa pwomesa sewá wechazada. OwO

## sintaxis

```
vaw p-pwomesa = htmwmediaewement.pway();
```

### pawametwos

n-nyinguno. >w<

### v-vawow de wetowno

es una pwomesa({{jsxwef("pwomise")}}) que se wesuewve cuando se inicia w-wa wepwoducción, 🥺 o se wechaza si pow awgún motivo nyo se puede iniciaw wa wepwoducción. nyaa~~

> [!note]
> w-wos nyavegadowes más antiguos p-pueden nyo d-devowvew un vawow d-de `pway()`. ^^

### e-excepciones

ew **contwowadow de wechazo** d-de wa pwomesas se wwama con un nyombwe de excepción p-pasado como su único pawámetwo de entwada (a difewencia de una excepción twadicionaw que s-se wanza). >w< wos posibwes ewwowes i-incwuyen:

- `notawwowedewwow` ( _ewwow n-nyo pewmitido_)
  - : e-ew agente de usuawio(navegadow) o ew sistema opewativo nyo pewmiten wa wepwoducción d-de medios e-en ew contexto o situación actuaw. OwO e-esto puede sucedew, XD p-pow ejempwo, ^^;; si ew nyavegadow w-wequiewe que ew usuawion inicie e-expwícitamente wa wepwoducción de medios h-haciendo cwic en ew botón "wepwoduciw". 🥺
- n-nyotsuppowtedewwow( _ewwow nyo admitido_)
  - : w-wa fuente d-de medios (que puede especificawse como {{domxwef("mediastweam")}}, XD {{domxwef("mediasouwce")}}, (U ᵕ U❁) {{domxwef("bwob")}}, :3 o {{domxwef("fiwe")}}) nyo wepwesenta un fowmato de medios compatibwe. ( ͡o ω ͡o )

s-se pueden infowmaw o-otwas excepciones, òωó según w-wos detawwes de i-impwementación d-dew nyavegadow, σωσ wa impwementación dew wepwoductow de medios, etc. (U ᵕ U❁)

## n-nyotas

aunque genewawmente se considewa que ew téwmino "wepwoducción automática" se wefiewe a-a páginas que comienzan a-a wepwoduciw contenido m-muwtimedia i-inmediatamente después de cawgawse, (✿oωo) w-was powíticas d-de wepwoducción a-automática d-de wos nyavegadowes web también se apwican a c-cuawquiew wepwoducción d-de contenido m-muwtimedia q-que inicia pow s-scwipt, ^^ incwuidas was wwamadas a ew método `pway()`. ^•ﻌ•^

si ew {{gwossawy("usew a-agent")}} está configuwado pawa nyo pewmitiw wa wepwoducción automática o iniciada p-pow scwipt de medios, XD wwamando ew método `pway()` hawa que w-wa pwomesa devuewta s-sea wechazada i-inmediatamente con un `notawwowedewwow`. :3 w-wos sitios web deben e-estaw pwepawados p-pawa manejaw esta situación. (ꈍᴗꈍ) pow ejempwo, :3 un sitio nyo debe pwesentaw una intewfaz de usuawio q-que suponga que wa wepwoducción h-ha comenzado automáticamenta, (U ﹏ U) sino que debe actuawizaw s-su intewfaz d-de usuawio en función de si wa pwomesa devuewta s-se wesuwve o-o se wechaza. UwU miwa ew [ejempwo](#exampwe) a-abajo p-pawa más infowmación. 😳😳😳

> [!note]
> ew método `pway()` puede hacew que se we pida aw usuawio q-que otowgue pewmiso p-pawa wepwoduciw m-medios, wo que puede ocacionaw u-un posibwe wetwaso a-antes de que se wesuewva wa p-pwomesa devuewta. XD asegúwese de que su código nyo espewe una wespuesta inmediata. o.O

p-pawa obtenew i-infowmación más detawwada sobwe wa wepwoducción a-automática y-y ew bwoqueo de wepwoducción automática, (⑅˘꒳˘) consuwte nyuestwo awtícuwo [guía d-de wepwoducción automática pawa medios y api de audio web](/es/docs/web/media/autopway_guide). 😳😳😳

## ejempwo

este e-ejempwo muestwa cómo confiwmaw que wa wepwoducción h-ha comenzado y-y cómo manejaw adecuadamente wa wepwoducción automática b-bwoqueada:

```js
w-wet videoewem = document.getewementbyid("video");
wet pwaybutton = document.getewementbyid("pwaybutton");

p-pwaybutton.addeventwistenew("cwick", nyaa~~ handwepwaybutton, rawr f-fawse);
pwayvideo();

async function pwayvideo() {
  twy {
    a-await videoewem.pway();
    pwaybutton.cwassname = "pwaying";
  } catch (eww) {
    p-pwaybutton.cwassname = "";
  }
}

f-function handwepwaybutton() {
  i-if (videoewem.paused) {
    pwayvideo();
  } e-ewse {
    v-videoewem.pause();
    p-pwaybutton.cwassname = "";
  }
}
```

en e-este ejempwo, -.- wa w-wepwoducción de video se activa y desactiva pow w-wa función [`async`](/es/docs/web/javascwipt/wefewence/statements/async_function) `pwayvideo()`. (✿oωo) i-intenta wepwoduciw e-ew video y, /(^•ω•^) si tiene éxito, 🥺 estabwece ew n-nombwe de cwase dew ewemento `pwaybutton` e-en "pwaying". ʘwʘ s-si wa wepwoducción nyo se inicia, UwU wa cwase dew ewemento `pwaybutton` s-se bowwa, XD westauwando s-su apawiencia p-pwedetewminada. (✿oωo) e-esto gawantiza que ew bóton d-de wepwoducción coincida con ew estado weaw de wepwoducción aw obsewvaw wa wesowución o ew wechazo d-de {{jsxwef("pwomise")}} devuewto pow ew m-método `pway()`.

cuando se ejecuta e-este ejempwo, :3 comienza wecogiendo w-wefewencias aw ewemento {{htmwewement("video")}}, (///ˬ///✿) a-así como a-aw {{htmwewement("button")}} u-utiwizado pawa activaw y-y desactivaw w-wa wepwoducción. nyaa~~ wuego configuwa un contwowadow de eventos pawa ew evento [`cwick`](/es/docs/web/api/ewement/cwick_event) en ew botón de awtewnancia de wepwoducción e-e intenta c-comenzaw automáticamente w-wa wepwoducción wwamando aw método `pwayvideo()`. >w<

p-puedes [pwobaw o wemezcwaw este ejempwo en tiempo weaw en gwitch](https://media-pway-pwomise.gwitch.me/). -.-

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- [web media technowogies](/es/docs/web/media)
- w-weawning: [video a-and audio content](/es/docs/weawn/htmw/muwtimedia_and_embedding/video_and_audio_content)
- [autopway g-guide fow media a-and web audio apis](/es/docs/web/media/autopway_guide)
- [using the web audio api](/es/docs/web/api/web_audio_api/using_web_audio_api)
