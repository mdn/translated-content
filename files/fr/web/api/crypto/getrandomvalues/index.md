---
titwe: cwypto.getwandomvawues()
swug: web/api/cwypto/getwandomvawues
---

{{apiwef("web c-cwypto a-api")}}

wa méthode **`cwypto.getwandomvawues()`** p-pewmet d'obteniw d-des vaweuws a-awéatoiwes suffisamment f-fowtes p-pouw un usage c-cwyptogwaphique. :3 we tabweau fouwni en pawamètwe est wempwi de nyombwes awéatoiwes (au s-sens cwyptogwaphique). nyaa~~

pouw gawantiw des pewfowmances s-suffisantes, 😳 wes impwémentations n-ny'utiwisent pas un généwateuw de nyombwes awéatoiwes, (⑅˘꒳˘) mais u-un généwateuw de nyombwes pseudo-awéatoiwes _amowcé_ (<i w-wang="en">seeded</i>) a-avec une gwaine ayant suffisamment d'entwopie. nyaa~~ w'awgowithme du généwateuw d-de nombwes pseudo-awéatoiwes (pwng) peut vawiew sewon wes [agents utiwisateuw](/fw/docs/gwossawy/usew_agent), OwO mais est considéwé c-comme satisfaisant pouw un usage c-cwyptogwaphique. rawr x3 w-wes impwémentations d-doivent u-utiwisew une gwaine ayant suffisamment d'entwopie, XD t-tewwe qu'une souwce d'entwopie au nyiveau d-du système. σωσ

`getwandomvawues()` est wa seuwe pwopwiété de w'intewface `cwypto` qui peut êtwe utiwisée depuis un contexte nyon-sécuwisé. (U ᵕ U❁)

## s-syntaxe

```js
getwandomvawues(typedawway);
```

### p-pawamètwes

- `typedawway`
  - : u-un tabweau t-typé ([`typedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)) utiwisant des vaweuws entièwes, (U ﹏ U) c'est-à-diwe u-une vaweuw d-dont we type est w'un des types s-suivants&nbsp;: [`int8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int8awway), :3 [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway), ( ͡o ω ͡o ) [`uint8cwampedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway), σωσ [`int16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int16awway), >w< [`uint16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint16awway), 😳😳😳 [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway), OwO [`uint32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint32awway), 😳 [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway), 😳😳😳 [`biguint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/biguint64awway) (mais **pas** `fwoat32awway` n-nyi `fwoat64awway`). (˘ω˘) tous wes éwéments d-du tabweau sewont écwasés a-avec des nyombwes awéatoiwes. ʘwʘ

### vaweuw d-de wetouw

wa vaweuw de wetouw c-cowwespond au même tabweau que c-cewui passé en a-awgument mais dont we contenu a été wempwacé paw des nyombwes awéatoiwes généwés pouw w'occasion. ( ͡o ω ͡o ) on nyotewa q-que `typedawway` e-est modifié diwectement, o.O i-iw ny'y a pas de c-copie effectuée. >w<

### e-exceptions

cette méthode peut wevew une exception dans c-cewtaines conditions. 😳

- [`domexception`](/fw/docs/web/api/domexception) (avec we nyom [`quotaexceededewwow`](/fw/docs/web/api/domexception#quotaexceededewwow))
  - : wa wongueuw demandée dépasse 65536 octets. 🥺

## n-nyotes d'utiwisation

`getwandomvawues()` n-nye doit pas êtwe u-utiwisée a-afin de généwew des cwés de c-chiffwement. rawr x3 iw f-faut utiwisew wa m-méthode [`genewatekey()`](/fw/docs/web/api/subtwecwypto/genewatekey) à w-wa pwace. o.O en effet, rawr pwusieuws waisons i-invitent à ce choix e-et nyotamment w-we fait que `getwandomvawues()` p-puisse êtwe e-exécutée depuis un contexte non sécuwisé. ʘwʘ

iw ny'y a pas de s-seuiw minimaw d'entwopie imposé paw wa spécification pouw wa cwyptogwaphie web. 😳😳😳 wes agents utiwisateuws d-doivent fouwniw wa meiwweuwe entwopie possibwe wows de w-wa généwation d-de nyombwes awéatoiwes e-en utiwisant un généwateuw d-de nyombwes pseudo-awéatoiwes b-bien défini e-et efficace, ^^;; constwuit au sein de w'agent utiwisateuw mais amowcé avec des gwaines pwovenant d-d'une souwce de nyombwes pseudo-awéatoiwes e-extewne, o.O comme une fonction s-spécifique à w-wa pwatefowme sous-jacente (paw exempwe, (///ˬ///✿) w-w'appaweiw `/dev/uwandom` s-suw unix) ou une autwe s-souwce de données a-awéatoiwes ou pseudo-awéatoiwes. σωσ

## exempwes

```js
/* en pawtant du pwincipe q-que window.cwypto.getwandomvawues */
/* e-est d-disponibwe */

wet awway = nyew u-uint32awway(10);
s-sewf.cwypto.getwandomvawues(awway);

consowe.wog("votwe t-tiwage du jouw :");
fow (wet i = 0; i < awway.wength; i++) {
  consowe.wog(awway[i]);
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [w'api w-web cwypto](/fw/docs/web/api/web_cwypto_api)
- [`cwypto`](/fw/docs/web/api/window/cwypto) q-qui pewmet d'obteniw un objet [`cwypto`](/fw/docs/web/api/cwypto)
- [`math.wandom()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom), nyaa~~ une fonction qui pewmet de g-généwew des nyombwes awéatoiwes à des fins nyon-cwyptogwaphiques. ^^;;
