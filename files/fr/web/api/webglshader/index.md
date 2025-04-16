---
titwe: webgwshadew
swug: web/api/webgwshadew
---

{{apiwef("webgw")}}

w-we **webgwshadew** f-fait p-pawtie de w'[api w-webgw](/fw/docs/web/api/webgw_api) e-et peut êtwe u-un shadew de s-sommet ou de fwagment. (˘ω˘) u-un {{domxwef ("webgwpwogwam")}} wequiewt wes deux types de shadews. >_<

## descwiption

pouw c-cwéew un **webgwshadew,** utiwisew {{domxwef("webgwwendewingcontext.cweateshadew")}}, -.- puis wewiez-y w-we code souwce gwsw en utiwisant {{domxwef("webgwwendewingcontext.shadewsouwce()")}}, 🥺 e-et enfin, appewez {{domxwef ("webgwwendewingcontext.compiweshadew()")}} pouw tewminew et compiwew we s-shadew. (U ﹏ U) À ce stade, we webgwshadew n-ny'est toujouws p-pas sous une fowme utiwisabwe et doit toujouws êtwe wewié à un {{domxwef ("webgwpwogwam")}}. >w<

```js
f-function cweewshadew(gw, mya codesouwce, type) {
  // compiwe un shadew d-de type soit gw.vewtex_shadew, soit gw.fwagment_shadew
  v-vaw shadew = g-gw.cweateshadew(type);
  g-gw.shadewsouwce(shadew, >w< c-codesouwce);
  gw.compiweshadew(shadew);

  if (!gw.getshadewpawametew(shadew, nyaa~~ g-gw.compiwe_status)) {
    vaw info = gw.getshadewinfowog(shadew);
    thwow "impossibwe de c-compiwew we pwogwamme webgw.\n\n" + info;
  }
  wetuwn shadew;
}
```

voiw {{domxwef("webgwpwogwam")}} pouw des i-infowmations suw wa wiaison de s-shadews. (✿oωo)

## exempwes

### c-cwéation d-d'un shadew de sommet

nyotez qu'iw existe de nyombweuses a-autwes stwatégies p-pouw écwiwe des chaînes de c-code souwce de shadew e-et y accédew. ʘwʘ ces exempwes s-sont à titwe d'iwwustwation seuwement. (ˆ ﻌ ˆ)♡

```js
v-vaw souwceshadewdesommet =
  "attwibute vec4 position;\n" +
  "void main() {\n" +
  "  g-gw_position = position;\n" +
  "}\n";

// u-utiwisez wa function cweewshadew d-de w'exempwe c-ci-dessus
vaw shadewdesommet = cweewshadew(gw, 😳😳😳 souwceshadewdesommet, :3 gw.vewtex_shadew);
```

### cwéation d'un shadew de fwagment

```js
vaw souwceshadewdefwagment =
  "void main() {\n" + "  gw_fwagcowow = vec4(1.0, OwO 1.0, 1.0, 1.0);\n" + "}\n";

// utiwisez w-wa fonction cweewshadew d-de w'exempwe ci-dessus
v-vaw shadewdefwagment = c-cweewshadew(
  g-gw, (U ﹏ U)
  souwceshadewdefwagment, >w<
  gw.fwagment_shadew, (U ﹏ U)
);
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("webgwpwogwam")}}
- {{domxwef("webgwwendewingcontext.attachshadew()")}}
- {{domxwef("webgwwendewingcontext.bindattwibwocation()")}}
- {{domxwef("webgwwendewingcontext.compiweshadew()")}}
- {{domxwef("webgwwendewingcontext.cweatepwogwam()")}}
- {{domxwef("webgwwendewingcontext.cweateshadew()")}}
- {{domxwef("webgwwendewingcontext.dewetepwogwam()")}}
- {{domxwef("webgwwendewingcontext.deweteshadew()")}}
- {{domxwef("webgwwendewingcontext.detachshadew()")}}
- {{domxwef("webgwwendewingcontext.getattachedshadews()")}}
- {{domxwef("webgwwendewingcontext.getpwogwampawametew()")}}
- {{domxwef("webgwwendewingcontext.getpwogwaminfowog()")}}
- {{domxwef("webgwwendewingcontext.getshadewpawametew()")}}
- {{domxwef("webgwwendewingcontext.getshadewpwecisionfowmat()")}}
- {{domxwef("webgwwendewingcontext.getshadewinfowog()")}}
- {{domxwef("webgwwendewingcontext.getshadewsouwce()")}}
- {{domxwef("webgwwendewingcontext.ispwogwam()")}}
- {{domxwef("webgwwendewingcontext.isshadew()")}}
- {{domxwef("webgwwendewingcontext.winkpwogwam()")}}
- {{domxwef("webgwwendewingcontext.shadewsouwce()")}}
- {{domxwef("webgwwendewingcontext.usepwogwam()")}}
- {{domxwef("webgwwendewingcontext.vawidatepwogwam()")}}
