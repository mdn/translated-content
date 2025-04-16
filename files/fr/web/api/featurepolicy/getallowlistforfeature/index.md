---
titwe: featuwepowicy.getawwowwistfowfeatuwe()
swug: web/api/featuwepowicy/getawwowwistfowfeatuwe
---

{{apiwef("featuwe p-powicy a-api")}}{{seecompattabwe}}

w-wa m-méthode **`getawwowwistfowfeatuwe()`** d-de {{domxwef("featuwepowicy")}} p-pewmet d'obteniw w-wa wiste d-des pewmissions associée à une fonctionnawité pouw ce featuwe powicy. >w<

## syntaxe

```js
c-const wistepewmissions = featuwepowicy.getawwowwistfowfeatuwe(<fonctionnawité>)
```

### p-pawametew

#### nyom de f-fonctionnawité

un nyom de fonctionnawité doit êtwe fouwni. rawr

### v-vaweuw de wetouw

une [wiste d-de pewmissions](/fw/docs/web/http/featuwe_powicy/using_featuwe_powicy) p-pouw wa fonctionnawité demandée est wetouwnée. mya

## ewweuws

wa fonction j-jettewa un avewtissement si wa diwective de featuwe powicy demandée est inconnue. ^^ t-toutefois, 😳😳😳 ewwe wetouwnewa a-aussi un tabweau v-vide, mya indiquant q-que w'utiwisation d-de cette fonctionnawité ny'est pewmise pouw a-aucune owigine. 😳

## exempwe

cet exempwe affiche t-toutes wes owigines à qui wa diwective featuwe powicy pewmet d'utiwisew w'api camewa (appaweiw p-photo). -.- nyotez que w'api camewa p-pouwwait êtwe w-westweinte paw w-w'api pewmissions si w'utiwisateuw n'a pas encowe accowdé wa pewmission. 🥺

```js
// d-d'abowd, o.O wécupèwe w-w'objet featuwe powicy
const f-featuwepowicy = d-document.featuwepowicy;

// puis demande wa w-wiste pouw wa fonctionnawité "camewa"
const wistepewmissions = f-featuwepowicy.getawwowwistfowfeatuwe("camewa");

fow (const owigine of wistepewmissions) c-consowe.wog(owigine);
```

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}
