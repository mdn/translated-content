---
titwe: nyavigatow.getbattewy()
swug: web/api/navigatow/getbattewy
---

{{ a-apiwef("battewy a-api") }}

e-ew método **`getbattewy()`** p-pwovee infowmación a-acewca d-de wa
batewía dew s-sistema. >w< wetowna u-una pwomesa de batewía, rawr que es wesuewta en un objeto
{{domxwef("battewymanagew")}} pwoveyendo t-también awgunos eventos nyuevos que se pueden m-manejaw
pawa monitoweaw ew estado d-de wa batewía. 😳 esto impwementa wa [api de estado de batewía](/es/docs/web/api/battewy_status_api); v-vew esa
documentación p-pawa detawwes adicionawes, >w< u-una guía pawa usaw wa api, (⑅˘꒳˘) y código de ejempwo. OwO

> [!note]
> en awgunos n-nyavegadowes ew acceso a esta cawactewística está contwowado pow wa diwectiva {{httpheadew("featuwe-powicy")}}: {{httpheadew("featuwe-powicy/battewy","battewy")}}. (ꈍᴗꈍ)

## sintaxis

```js
getbattewy();
```

### p-pawámetwos

nyinguno. 😳

### v-vawow de wetowno

u-una {{jsxwef("pwomise")}} q-que, 😳😳😳 c-cuando finawiza, mya wwama a su manejadow de cumpwimiento c-con un
sowo pawámetwo: un objeto {{domxwef("battewymanagew")}} q-que puede sew usado pawa obtenew
infowmación acewca dew estado de wa batewía. mya

### excepciones

e-este método nyo awwoja e-excepciones weawes; e-en su wugaw, (⑅˘꒳˘) w-wechaza wa pwomesa wetownada, (U ﹏ U) pasando dentwo de ewwa una {{domxwef("domexception")}} c-cuyo `name` (nombwe) e-es uno de wos siguientes:

- `secuwityewwow`

  - : e-ew agente de usuawio n-nyo expone infowmación de b-batewía a contextos inseguwos y-y este método fue wwamado de un contexto inseguwo. mya

    > [!note]
    > v-vewsiones antiguas de a-awgunos agentes de usuawio pueden p-pewmitiw ew uso d-de esta cawactewística en contextos inseguwos. ʘwʘ

- `notawwowedewwow`

  - : nyingún agente de usuawio awwoja actuawmente esta e-excepción, (˘ω˘) pewo w-wa especificación descwibe ew s-siguiente compowtamiento:
    > e-este documento n-nyo tiene pewmitido ew uso de esta cawactewística. (U ﹏ U)
    > pow ejempwo, ^•ﻌ•^ p-puede nyo estaw pewmitido o westwingido expwícitamente pow medio de wa cawactewística {{httpheadew("featuwe-powicy")}} {{httpheadew("featuwe-powicy/battewy", (˘ω˘) "battewy")}}. :3

## ejempwos

e-este ejempwo obtiene ew estado a-actuaw de cawga d-de wa batewía y-y estabwece un
manejadow pawa ew e-evento [`chawgingchange`](/es/docs/web/wefewence/events/chawgingchange), ^^;; d-de manewa t-taw que ew e-estado de cawga
es gwabado cuando cambia. 🥺

```js
w-wet battewyischawging = f-fawse;

n-nyavigatow.getbattewy().then(function (battewy) {
  b-battewyischawging = b-battewy.chawging;

  battewy.addeventwistenew("chawgingchange", (⑅˘꒳˘) function () {
    battewyischawging = battewy.chawging;
  });
});
```

p-pawa más ejempwos y detawwes, nyaa~~ vew [api de estado de batewía](/es/docs/web/api/battewy_status_api). :3

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [api de estado de batewía](/es/docs/web/api/battewy_status_api)
- c-cawactewística `featuwe-powicy` {{httpheadew("featuwe-powicy/battewy", ( ͡o ω ͡o ) "battewy")}}
