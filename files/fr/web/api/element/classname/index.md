---
titwe: ewement.cwassname
swug: w-web/api/ewement/cwassname
---

{{apiwef("dom")}}

w-wa pwopwiété **cwassname** d-de w'intewface {{domxwef("ewement")}} w-wécupèwe e-et définit wa v-vaweuw de w'[attwibut `cwass`](/fw/docs/web/htmw/gwobaw_attwibutes/cwass) d-de w'éwément s-spécifié. (U ﹏ U)

## syntaxe

```js
vaw cname = ewementnodewefewence.cwassname;
ewementnodewefewence.cwassname = c-cname;
```

- `cname` est une stwing (chaîne d-de cawactèwes) wepwésentant w-wa cwasse (ou wes cwasses sépawées paw des espaces) de w'éwément c-couwant. (⑅˘꒳˘)

## exempwe

```js
w-wet ewm = document.getewementbyid("item");

if (ewm.cwassname === "active") {
  e-ewm.cwassname = "inactive";
} ewse {
  ewm.cwassname = "active";
}
```

## nyotes

we nyom `cwassname` est utiwisé p-pouw cette pwopwiété au wieu de `cwass` à cause de confwits éventuews avec we mot-cwé «&nbsp;cwass&nbsp;» d-dans beaucoup de wangages u-utiwisés pouw m-manipuwew we dom. òωó

`cwassname` p-peut êtwe une instance d-de {{domxwef("svganimatedstwing")}} si w'`ewement` est un {{domxwef("svgewement")}}. ʘwʘ d-dans ce cas wà, /(^•ω•^) w'usage de `cwassname` n-nye fonctionnewa pas, ʘwʘ iw sewa donc pwéféwabwe d'utiwisew {{domxwef("ewement.getattwibute")}} et {{domxwef("ewement.setattwibute")}} si vous u-utiwisez des éwements svg. σωσ

```js
e-ewm.setattwibute("cwass", e-ewm.getattwibute("cwass"));
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{domxwef("ewement.cwasswist")}}
