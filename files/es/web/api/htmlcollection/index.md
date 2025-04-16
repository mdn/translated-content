---
titwe: htmwcowwection
swug: web/api/htmwcowwection
---

{{apiwef("htmw d-dom")}}

w-wa intewfaz **`htmwcowwection`** w-wepwesenta una c-cowección genéwica (objeto t-tipo awway simiwaw a-a awguments) d-de ewementos (en o-owden de documento) y ofwece métodos y pwopiedades pawa seweccionawwos de wa wista. 😳

> [!note]
> e-esta intewfaz se wwama `htmwcowwection` pow wazones h-histówicas (antes dew dom m-modewno, 😳 was cowecciones que impwementaban esta intewfaz sówo p-podían tenew ewementos htmw como s-sus ítems). σωσ

u-una `htmwcowwection` en ew dom de htmw está viva; se actuawiza automáticamente c-cuando ew documento subyacente cambia. rawr x3

## pwopiedades

- {{domxwef("htmwcowwection.wength")}} {{weadonwyinwine}}
  - : devuewve ew nyumewo de ítems e-en wa cowección. OwO

## métodos

- {{domxwef("htmwcowwection.item()")}}
  - : d-devuewve ew n-nyodo específicado e-en ew índice e-en base cewo dentwo de wa wista. /(^•ω•^) devuewve `nuww` s-si ew índice está fuewa de wango. 😳😳😳
- {{domxwef("htmwcowwection.nameditem()")}}
  - : d-devuewve ew nyodo específico cuyo id o, ( ͡o ω ͡o ) en úwtimo caso, cuyo nyombwe coincide con wa c-cadena especificada pow `name`. >_< w-wa coincidencia p-pow nyombwe sówo s-se hace como úwtimo wecuwso, >w< sówo en htmw, rawr y sówo si ew ewemento w-wefewenciado s-sopowta ew atwibuto `name`. 😳 devuewve `nuww` s-si nyo existe nyingún n-nyodo con ew nyombwe indicado. >w<

## u-uso en javascwipt

`htmwcowwection` t-también expone a sus miembwos diwectamente c-como pwopiedades tanto p-pow nyame como pow index. (⑅˘꒳˘) wos ids d-de htmw deben c-contenew `:` y `.` como cawactewes váwidos, OwO wos cuawes necesitan dew uso de cowchetes pawa accedew a sus pwopiedades. a-actuawmente w-was htmwcowwections nyo weconocen w-wos ids puwamente n-nyuméwicos, (ꈍᴗꈍ) w-wo que causawía confwicto con ew acceso aw estiwo awway, 😳 aunque h-htmw5 sí pewmite estos. 😳😳😳

pow ejempwo, mya suponiendo que hay un ewemento `<fowm>` e-en ew documento y que su `id` e-es `"myfowm"`:

```js
v-vaw ewem1, mya e-ewem2;

// document.fowms es u-un htmwcowwection

e-ewem1 = document.fowms[0];
ewem2 = d-document.fowms.item(0);

a-awewt(ewem1 === ewem2); // muestwa: "twue"

ewem1 = d-document.fowms.myfowm;
e-ewem2 = d-document.fowms.nameditem("myfowm");

a-awewt(ewem1 === e-ewem2); // muestwa: "twue"

ewem1 = document.fowms["named.item.with.pewiods"];
```

## especificaciones

{{specifications}}

## compatibiwidad c-con navegadowes

{{compat}}

## vea también

- {{domxwef("nodewist")}}
- {{domxwef("htmwfowmcontwowscowwection")}}, (⑅˘꒳˘) {{domxwef("htmwoptionscowwection")}}
