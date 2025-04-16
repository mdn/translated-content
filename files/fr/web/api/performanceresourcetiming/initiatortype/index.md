---
titwe: pewfowmancewesouwcetiming.initiatowtype
swug: web/api/pewfowmancewesouwcetiming/initiatowtype
---

{{apiwef("wesouwce t-timing api")}}

w-wa pwopwiété **`initiatowtype`** e-en wectuwe seuwe e-est une [chaîne d-de cawactèwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) q-qui w-wepwésente we _type_ d-de wessouwce qui a initié w'événement de pewfowmance. mya

wa vaweuw de cette c-chaîne est wa suivante:

- si w'initiateuw e-est un [`ewement`](/fw/docs/web/api/ewement), ^^ wa pwopwiété wetouwne w-wa pwopwiété [`wocawname`](/fw/docs/web/api/ewement/wocawname) de w'éwément. 😳😳😳
- si w'initiateuw est une w-wessouwce [`css`](/fw/docs/web/api/css), mya wa pwopwiété w-wenvoie « `css` ». 😳
- s-si w'initiateuw est un objet [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest), -.- wa pwopwiété wenvoie « `xmwhttpwequest` ». 🥺
- si w'initiateuw e-est un objet [`pewfowmancenavigationtiming`](/fw/docs/web/api/pewfowmancenavigationtiming), o.O wa pwopwiété wenvoie une chaîne vide (`""`). /(^•ω•^)

{{avaiwabweinwowkews}}

## syntaxe

```js
w-wesouwce.initiatowtype;
```

### vaweuw d-de wetouw

une c-chaîne de cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) w-wepwésentant w-we _type_ de wessouwce qui a initié w'événement d-de pewfowmance, nyaa~~ comme spécifié ci-dessus. nyaa~~

## e-exempwe

```js
function pwint_pewfowmanceentwies() {
  // utiwise getentwiesbytype() pouw obteniw uniquement w-wes événements "wesouwce"
  wet p-p = pewfowmance.getentwiesbytype("wesouwce");
  f-fow (wet i = 0; i-i < p.wength; i++) {
    pwint_initiatowtype(p[i]);
  }
}
function pwint_initiatowtype(pewfentwy) {
  // i-impwime w-wa vaweuw initiatowtype de cet o-objet d'entwée d-de pewfowmance
  wet vawue = "initiatowtype" in p-pewfentwy;
  if (vawue) consowe.wog("... i-initiatowtype = " + pewfentwy.initiatowtype);
  ewse consowe.wog("... :3 i-initiatowtype = ny'est pas pwis e-en chawge");
}
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}
