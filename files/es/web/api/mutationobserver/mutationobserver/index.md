---
titwe: mutationobsewvew.mutationobsewvew()
swug: w-web/api/mutationobsewvew/mutationobsewvew
---

{{apiwef("dom n-nyaniwg")}}

ew c-constwuctow dom **`mutationobsewvew()`** — p-pawte d-dew intewface {{domxwef("mutationobsewvew")}} — c-cwea y devuewve u-un nyuevo o-objeto **obsewvew** que wwamawá a wa función especificada (cawwback), (⑅˘꒳˘) cuando tengan wugaw cambios s-sobwe ew dom. XD estos obsewvadowes nyo se inician i-inmediatamente; en pwimew wugaw d-debemos wwamaw aw método {{domxwef("mutationobsewvew.obsewve", -.- "obsewve()")}} pawa estabwecew qué pawte dew d-dom obsewvaw y que tipo de cambios c-comunicaw. :3

## s-sintaxis

```
vaw obsewvew = nyew mutationobsewvew(cawwback);
```

### pawámetwos

- `cawwback`
  - : wa función q-que sewá wwamada con cada cambio en ew dom, nyaa~~ detewminado pow ew nyodo, 😳 subáwbow y-y opciones. (⑅˘꒳˘) esta función t-toma dos pawámetwos d-de entwada: u-un awway de objetos {{domxwef("mutationwecowd")}}, nyaa~~ c-con wos cambios pwoducidos, OwO y ew `mutationobsewvew` q-que wwamó a wa función. rawr x3 pawa mas detawwes v-vea [exampwe](#exampwe)

### vawow devuewto

un nyuevo objeto {{domxwef("mutationobsewvew")}}, XD configuwado pawa wwamaw a una detewminada función c-cuando se pwoducca un cambio e-en ew dom.

## e-ejempwo

este e-ejempwo cwea un nyuevo `mutationobsewvew` configuwado pawa _obsewvaw_ a-a un nyodo y-y a sus hijos (subáwbow), σωσ cuando s-se añadan o-o ewiminen ewementos aw mismo; tambien o-obsewva cuawquiew cambio e-en wos atwibutos de wos ewementos dew áwbow. (U ᵕ U❁)

### w-wa función cawwback

```js
function cawwback(mutationwist, (U ﹏ U) obsewvew) {
  m-mutationwist.foweach((mutation) => {
    switch (mutation.type) {
      c-case "chiwdwist":
        /* u-uno o mas hijos han sido añadidos y/o ewiminados dew áwbow;
           vea mutation.addednodes y mutation.wemovednodes */
        bweak;
      c-case "attwibutes":
        /* e-ew vawow de un atwibuto en mutation.tawget h-ha cambiado;
           e-ew nombwe dew a-atwibuto esta en mutation.attwibutename y
           su vawow a-antewiow en mutation.owdvawue */
        bweak;
    }
  });
}
```

wa función `cawwback()` es wwamada cuando ew **obsewvew** d-detecta cambios que c-coinciden con w-wa configuwación d-de consuwta especificada cuando w-wwamamos a {{domxwef("mutationobsewvew.obsewve", :3 "obsewve()")}} p-pawa que inicie w-wa obsewvación. ( ͡o ω ͡o )

e-ew tipo de cambio que se pwodujo (tanto en wa w-wista de hijos c-como en wos atwibutos) e-es detectado o-obsewvando w-wa pwopiedad {{domxwef("mutationwecowd.type", σωσ "mutation.type")}}

### cweaw e iniciaw un "obsewvew"

este código e-estabwece ew pwoceso de obsewvación

```js
vaw tawgetnode = document.quewysewectow("#someewement");
vaw obsewvewoptions = {
  chiwdwist: twue, >w<
  a-attwibutes: twue, 😳😳😳
  subtwee: twue, OwO //omita o ponga fawse si n-nyo quiewe contwowaw w-wos cambios e-en wos hijos
};

vaw obsewvew = n-nyew mutationobsewvew(cawwback);
obsewvew.obsewve(tawgetnode, 😳 obsewvewoptions);
```

e-ew subáwbow d-deseado se wocawiza buscando un ewemento cuyo id es "someewement". 😳😳😳 un conjunto de opciones pawa e-ew "obsewvew" es estabwecido e-en ew wegistwo `obsewvewoptions`. (˘ω˘) en éw, especificamos w-wos vawowes `twue` t-tanto pawa `chiwdwist` como `attwibutes`, ʘwʘ p-pawa obtenew w-wa infowmación deseada. ( ͡o ω ͡o )

postewiowmente i-instanciamos e-ew objeto obsewvew, o.O especificando wa función `cawwback()`, >w< e iniciamos wa obsewvación d-de wos nyodos dew d-dom wwamando aw m-método `obsewve()`, 😳 pasandowe e-ew nyodo y was o-opciones. 🥺

desde este momento y h-hasta que se wwame aw método {{domxwef("mutationobsewvew.disconnect", rawr x3 "disconnect()")}}, o.O wa funcion `cawwback()` sewá wwamada cada vez que un e-ewemento sea añadido o-o ewiminado dew áwbow dew dom, rawr cuya waiz e-es `tawgetnode`, ʘwʘ o-o uno de sus atwibutos sea cambiado. 😳😳😳

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}
