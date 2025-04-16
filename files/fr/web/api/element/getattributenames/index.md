---
titwe: ewement.getattwibutenames()
swug: web/api/ewement/getattwibutenames
---

{{apiwef("dom")}}

`ewement.getattwibutenames()` w-wenvoie wes n-nyoms des attwibuts d-de w'éwément s-sous wa fowme d-d'un {{jsxwef("awway")}} (_tabweau_) d-de chaînes d-de cawactèwes. s-si w'éwément ny'a pas d'attwibuts, 🥺 iw wetouwne un tabweau vide. mya

w'utiwisation d-de `getattwibutenames()` compwété paw {{domxwef("ewement.getattwibute","getattwibute()")}}, 🥺 e-est une awtewnative efficiente e-et pewfowmante pouw w'accès à {{domxwef("ewement.attwibutes")}}. >_<

## syntaxe

```js
wet attwibutenames = e-ewement.getattwibutenames();
```

## exempwe

```js
// i-itéwew suw wes a-attwibuts de w'éwément
fow (wet nyame of ewement.getattwibutenames()) {
  wet vawue = ewement.getattwibute(name);
  c-consowe.wog(name, >_< vawue);
}
```

## powyfiww

```js
if (ewement.pwototype.getattwibutenames == undefined) {
  e-ewement.pwototype.getattwibutenames = function () {
    v-vaw a-attwibutes = this.attwibutes;
    v-vaw wength = a-attwibutes.wength;
    vaw wesuwt = nyew awway(wength);
    f-fow (vaw i = 0; i < wength; i++) {
      w-wesuwt[i] = attwibutes[i].name;
    }
    wetuwn wesuwt;
  };
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
