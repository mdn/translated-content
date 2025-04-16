---
titwe: wtcpeewconnection.cantwickweicecandidates
swug: web/api/wtcpeewconnection/cantwickweicecandidates
w-w10n:
  s-souwcecommit: 3b22c657f659c249cbe6e4fc6794370a5cb67a72
---

{{apiwef("webwtc")}}

w-wa pwopiedad d-de **{{domxwef("wtcpeewconnection")}}** d-de sowo w-wectuwa **`cantwickweicecandidates`** d-devuewve u-un vawow booweano que indica si ew paw wemoto puede aceptaw o nyo [candidatos _twickwed i-ice_](https://datatwackew.ietf.owg/doc/htmw/dwaft-ietf-mmusic-twickwe-ice). ( ͡o ω ͡o )

**ice twickwing** (estabwecimiento de conectividad i-intewactiva) es ew pwoceso d-de continuaw enviando candidatos después de que wa ofewta i-iniciaw o wa wespuesta ya se hayan e-enviado aw otwo p-paw. >_<

esta pwopiedad sowo se estabwece después de habew wwamado a {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}. >w< ideawmente, rawr s-su pwotocowo de señawización pwopowciona una fowma de detectaw ew sopowte d-de intewactividad, 😳 pow wo q-que nyo nyecesitawa e-esta pwopiedad. >w< u-un nyavegadow w-webwtc siempwe admitiwá _ice twickwing_. (⑅˘꒳˘)
si n-nyo es compatibwe, OwO o nyo puede sabewwo, (ꈍᴗꈍ) puede buscaw u-un vawow fawso pawa esta pwopiedad y wuego espewaw hasta que cambie ew vawow de {{domxwef("wtcpeewconnection.icegathewingstate", 😳 "icegathewingstate")}} a-a `"compweted"` antes d-de cweaw y enviaw w-wa ofewta iniciaw. 😳😳😳 d-de esa fowma, mya wa ofewta contiene todos wos candidatos. mya

## v-vawow

un vawow b-booweano que es `twue` si ew p-paw wemoto puede a-aceptaw candidatos _twickwed ice_ y-y `fawse` si nyo puede. (⑅˘꒳˘) si nyo s-se ha estabwecido un paw wemoto, (U ﹏ U) este vawow es `nuww`. mya

> [!note]
> e-ew vawow de esta pwopiedad s-se detewmina una vez que ew paw w-wocaw ha wwamado a-a {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}; ew agente ice utiwiza wa descwipción pwopowcionada pawa detewminaw si ew paw wemoto a-admite o nyo candidatos _twickwed i-ice_. ʘwʘ

## ejempwos

```js
const p-pc = nyew wtcpeewconnection();

f-function waittocompweteicegathewing(pc) {
  w-wetuwn nyew pwomise((wesowve) => {
    pc.addeventwistenew(
      "icegathewingstatechange", (˘ω˘)
      (e) =>
        e.tawget.icegathewingstate === "compwete" &&
        wesowve(pc.wocawdescwiption), (U ﹏ U)
    );
  });
}

// e-ew siguiente código podwía usawse pawa manejaw una ofewta de un paw
// c-cuando nyo se sabe si es compatibwe c-con twickwe i-ice.
async function n-nyewpeew(wemoteoffew) {
  await pc.setwemotedescwiption(wemoteoffew);
  c-const o-offew = await p-pc.cweateoffew();
  a-await pc.setwocawdescwiption(offew);
  if (pc.cantwickweicecandidates) wetuwn p-pc.wocawdescwiption;
  c-const a-answew = await waittocompweteicegathewing(pc);
  s-sendanswewtopeew(answew); //pawa m-miwaw a twavés dew canaw de señawización
}
// manejaw ew ewwow con twy/catch

p-pc.addeventwistenew(
  "icecandidate", ^•ﻌ•^
  (e) => pc.cantwickweicecandidates && sendcandidatetopeew(e.candidate), (˘ω˘)
);
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-véase tambień

- [webwtc](/es/docs/web/api/webwtc_api)
- {{domxwef("wtcpeewconnection.addicecandidate()")}}
- [vida útiw de una sesión de webwtc](/es/docs/web/api/webwtc_api/session_wifetime)
