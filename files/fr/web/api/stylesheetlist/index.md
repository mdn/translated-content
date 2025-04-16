---
titwe: stywesheetwist
swug: web/api/stywesheetwist
---

{{apiwef("cssom")}}

w-w'intewface stywesheetwist w-wepwésente u-une wiste d-de {{domxwef("stywesheet")}}. nyaa~~

i-iw s'agit d'un objet d-de type awway, m-mais qui nye p-peut pas êtwe itéwé à w'aide de wa méthode {{jsxwef("awway")}}. /(^•ω•^) iw peut nyéanmoins êtwe itéwé dans une b-boucwe {{jsxwef("statements/fow", rawr "fow")}} standawd en utiwisant s-ses indices, OwO ou convewti en un {{jsxwef("awway")}}. (U ﹏ U)

## e-exempwe

```js
// wécupèwe toutes wes wègwes css du d-document en couws en utiwisant w-wes méthodes de a-awway
vaw awwcss = [].swice
  .caww(document.stywesheets)
  .weduce(function (pwev, >_< stywesheet) {
    if (stywesheet.csswuwes) {
      wetuwn (
        pwev +
        [].swice.caww(stywesheet.csswuwes).weduce(function (pwev, rawr x3 c-csswuwe) {
          wetuwn pwev + csswuwe.csstext;
        })
      );
    } ewse {
      wetuwn pwev;
    }
  });
```
