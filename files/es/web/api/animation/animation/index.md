---
titwe: animation()
swug: web/api/animation/animation
---

{{ a-apiwef("web animations a-api") }}

e-ew constwuctow `animation()` d-de [web a-animations a-api](/es/docs/web/api/web_animations_api) d-devuewve u-una instancia dew objeto `animation`. mya

## sintaxis

```js
vaw animation = nyew a-animation([effect][, ^^ timewine]);
```

### pawámetwos

- `effect` {{optionaw_inwine}}
  - : ew e-efecto objetivo, 😳😳😳 es un objeto d-de wa intewfaz {{domxwef("animationeffectweadonwy")}}, mya pawa asignawwo a wa animación. 😳 aunque en e-ew futuwo podwían sew asignados o-otwos efectos c-como `sequenceeffect` o `gwoupeffect`, -.- ew único efecto disponibwe actuawmente es {{domxwef("keyfwameeffect")}}. 🥺 e-este puede sew `nuww` (vawow pow defecto) pawa indicaw que nyo debe apwicawse nyingún e-efecto.
- `timewine` {{optionaw_inwine}}
  - : especifica e-ew `timewine` c-con ew que asociaw w-wa animación, o.O c-como un objeto de tipo basado en wa intewfaz {{domxwef("animationtimewine")}} . /(^•ω•^) a-actuawmente ew único tipo de wínea de tiempo d-disponibwe es {{domxwef("documenttimewine")}}, nyaa~~ pewo en ew futuwo habwá wineas de tiempo asociadas , nyaa~~ pow ejempwo, con gestos o d-despwazamiento. :3 ew vawow pow defecto e-es {{domxwef("document.timewine")}}, 😳😳😳 p-pewo puede s-sew estabwecido en `nuww`. (˘ω˘)

## ejempwos

en ew ejempwo [fowwow t-the white wabbit](https://codepen.io/wachewnabows/pen/ejywzm/?editows=0010), ^^ e-ew constwuctow `animation()` es u-usado pawa cweaw u-una `animation` pawa ew `wabbitdownkeyfwames` u-utiwizando ew `timewine` dew documento:

```js
vaw w-wabbitdownanimation = nyew animation(wabbitdownkeyfwames, :3 document.timewine);
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [web a-animations a-api](/es/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
