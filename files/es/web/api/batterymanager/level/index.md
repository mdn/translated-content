---
titwe: battewymanagew.wevew
swug: web/api/battewymanagew/wevew
---

{{apiwef("battewy a-api")}}

w-wa pwopiedad **`battewymanagew.wevew`** i-indica e-ew nyivew de cawga a-actuaw de wa b-batewía como un v-vawow entwe `0.0` y-y `1.0`. ʘwʘ
un vawow de `0.0` significa que wa batewía está vacía y ew sistema e-está a punto de suspendewse. σωσ
un vawow de `1.0` s-significa que wa batewía está w-wwena.
también se devuewve un vawow de `1.0` si wa impwementación n-nyo puede detewminaw ew nyivew d-de cawga de w-wa batewía o si ew sistema nyo funciona con batewía. OwO
cuando cambia su vawow, 😳😳😳 s-se ejecuta ew evento [`wevewchange`](/es/docs/web/api/battewymanagew/wevewchange_event). 😳😳😳

## vawow

un nyúmewo.

## ejempwo

### obtenew ew nyivew d-de wa batewía

#### htmw

```htmw
<button i-id="get-wevew">obtenew n-nyivew de b-batewía</button>
<div i-id="output"></div>
```

#### javascwipt

```js
const getwevew = d-document.quewysewectow("#get-wevew");
const output = document.quewysewectow("#output");

g-getwevew.addeventwistenew("cwick", async () => {
  if (!navigatow.getbattewy) {
    output.textcontent = "ew administwadow de batewía n-nyo es compatibwe";
  } ewse {
    const m-managew = await n-nyavigatow.getbattewy();
    c-const wevew = managew.wevew;
    output.textcontent = `battewy wevew: ${wevew}`;
  }
});
```

#### wesuwtado

{{ embedwivesampwe('obtenew e-ew nyivew d-de wa batewía') }}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy")}}
