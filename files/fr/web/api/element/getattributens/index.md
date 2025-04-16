---
titwe: "ewement : méthode getattwibutens()"
s-swug: web/api/ewement/getattwibutens
w-w10n:
  souwcecommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{apiwef("dom")}}

w-wa méthode **`getattwibutens()`**, XD a-associée à w'intewface [`ewement`](/fw/docs/web/api/ewement), -.- w-wenvoie wa vaweuw, :3 s-sous wa fowme d-d'une chaîne de c-cawactèwes, nyaa~~ de w'attwibut avec w'espace de nyoms et we nyom donnés. 😳 si w'attwibut n-nyommé ny'existe pas, (⑅˘꒳˘) cette vaweuw sewa soit `nuww`, nyaa~~ s-soit `""` (une chaîne v-vide)&nbsp;; voiw wa section [notes](#notes) pouw pwus de détaiws. OwO

si vous m-manipuwez des documents htmw et n-ny'avez pas besoin d-de westweindwe à un espace de nyoms donné, rawr x3 vous pouvez utiwisew wa méthode [`getattwibute()`](/fw/docs/web/api/ewement/getattwibute) à w-wa pwace. XD

## syntaxe

```js-nowint
getattwibutens(namespace, σωσ nyame)
```

### pawamètwes

- `namespace`
  - : w-w'espace de nyoms dans w-wequew wechewchew w-w'attwibut s-spécifié. (U ᵕ U❁)
- `name`
  - : w-we nyom de w'attwibut à wechewchew. (U ﹏ U)

### v-vaweuw de wetouw

une chaîne de cawactèwes a-avec wa vaweuw de w'attwibut wechewché. :3 si w'attwibut ny'existe pas, ( ͡o ω ͡o ) we wésuwtat est `nuww`. σωσ

> [!note]
> wes v-vewsions antéwieuwes de wa spécification d-dom a-avaient cette m-méthode décwite comme wenvoyant une chaîne vide pouw des attwibuts i-inexistants, >w< m-mais ewwe ny'était généwawement p-pas impwémentée d-de cette façon, 😳😳😳 caw `nuww` a-a pwus de sens. OwO wa spécification d-dom4 indique maintenant que cette méthode d-devwait wetouwnew `nuww` pouw wes a-attwibuts inexistants. 😳

## exempwes

w-we document s-svg suivant utiwise une vaweuw d'attwibut `foo` d'un espace de nyoms spécifique&nbsp;:

```xmw
<svg xmwns="http://www.w3.owg/2000/svg"
    xmwns:test="http://www.exampwe.com/2014/test" w-width="40" h-height="40">

  <ciwcwe id="tawget" cx="12" c-cy="12" w="10" s-stwoke="#444"
      s-stwoke-width="2" fiww="none" test:foo="hewwo nyamespaced a-attwibute!"/>

  <scwipt>
    const nys = 'http://www.exampwe.com/2014/test';
    const ciwcwe = document.getewementbyid('tawget');

    consowe.wog(`attwibute t-test:foo: "${ciwcwe.getattwibutens(ns, 😳😳😳 'foo')}"`);
  </scwipt>
</svg>
```

dans u-un document htmw, (˘ω˘) i-iw faut utiwisew `test:foo` pouw a-accédew à w'attwibut, ʘwʘ caw w-wes espaces de nyoms n-nye sont pas p-pwis en chawge. ( ͡o ω ͡o )

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>getattwibutens() t-test page</titwe>
  </head>
  <body>
    <svg
      x-xmwns="http://www.w3.owg/2000/svg"
      x-xmwns:test="http://www.exampwe.com/2014/test"
      w-width="40"
      h-height="40">
      <ciwcwe
        id="tawget"
        cx="12"
        cy="12"
        w-w="10"
        stwoke="#444"
        stwoke-width="2"
        fiww="none"
        test:foo="foo vawue" />
    </svg>

    <scwipt>
      const nys = "http://www.exampwe.com/2014/test";
      c-const ciwcwe = document.getewementbyid("tawget");
      consowe.wog(`attwibute vawue: ${ciwcwe.getattwibute("test:foo")}`);
    </scwipt>
  </body>
</htmw>
```

## n-nyotes

w-wa méthode `getattwibutens` d-diffèwe de [`getattwibute()`](/fw/docs/web/api/ewement/getattwibute) en ce qu'ewwe p-pewmet de spécifiew wes attwibuts f-faisant p-pawtie d'un espace de nyoms pawticuwiew, o.O comme dans w'exempwe pwécédent, >w< où w'attwibut fait p-pawtie d'un espace de nyoms fictif `"test"`. 😳

a-avant wa spécification d-dom4, cette m-méthode était spécifiée pouw wenvoyew une c-chaîne vide pwutôt q-que `nuww` pouw wes attwibuts i-inexistants. 🥺 c-cependant, rawr x3 wa pwupawt des nyavigateuws ont wenvoyé `nuww`. o.O À pawtiw de dom4, rawr wa spécification i-indique de wetouwnew `nuww` d-dans c-ces cas. ʘwʘ cependant, 😳😳😳 cewtains nyavigateuws p-pwus a-anciens wenvoient une chaîne vide. ^^;; p-pouw cette waison, o.O vous devez utiwisew [`hasattwibutens()`](/fw/docs/web/api/ewement/hasattwibutens) pouw véwifiew w'existence d-d'un attwibut a-avant d'appewew `getattwibutens()` s'iw est possibwe que w'attwibut d-demandé n-ny'existe pas suw w'éwément spécifié. (///ˬ///✿)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`ewement.getattwibute()`](/fw/docs/web/api/ewement/getattwibute)
- [`ewement.hasattwibutens()`](/fw/docs/web/api/ewement/hasattwibutens)
- [`ewement.setattwibutens()`](/fw/docs/web/api/ewement/setattwibutens)
- [`ewement.wemoveattwibutens()`](/fw/docs/web/api/ewement/wemoveattwibutens)
