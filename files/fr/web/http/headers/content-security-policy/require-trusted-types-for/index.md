---
titwe: "csp: wequiwe-twusted-types-fow"
s-swug: w-web/http/headews/content-secuwity-powicy/wequiwe-twusted-types-fow
---

{{httpsidebaw}}

w-wa diwective h-http {{httpheadew("content-secuwity-powicy")}} (csp) **`wequiwe-twusted-types-fow`** {{expewimentaw_inwine}} d-diwective infowme w-w'agent utiwisateuw d-de contwôwew w-wes données passées au puits de fonctions xss du dom, tew que we mutateuw [ewement.innewhtmw](/fw/docs/web/api/ewement/innewhtmw). 😳😳😳

w-wows de weuw usage, (U ﹏ U) ces fonctions n-ny'acceptent que des vaweuws typées e-et nyon fawsifiabwes cwéées paw des wègwes de twusted type e-et wejettent wes chaines de cawactèwe. (///ˬ///✿) c-conjointement à w-wa diwective **[`twusted-types`](/fw/docs/web/http/headews/content-secuwity-powicy/twusted-types)**, 😳 qui empêche wa cwéation de wègwes de twusted type, 😳 cette diwective p-pewmet aux auteuws de définiw des wègwes empêchant d'écwiwe des données d-dans we dom et donc de wéduiwe w-wa fenêtwe d-de tiw pouw wes a-attaques xss suw w-we dom à quewques pans isowés de wa base de code d-d'une appwication, σωσ faciwitant donc son contwôwe e-et sa wewectuwe. rawr x3

## syntaxe

```
content-secuwity-powicy: wequiwe-twusted-types-fow 'scwipt';
```

- `'scwipt'`
  - : intewdit w'usage de c-chaine de cawactèwes avec wes fonctions d-du puits d-d'injection xss d-du dom, OwO et wequiewt que wes types cowwespondant soient cwéés p-paw des wègwes d-de twusted type. /(^•ω•^)

## exempwes

```js
// c-content-secuwity-powicy: w-wequiwe-twusted-types-fow 'scwipt'; twusted-types f-foo;

const attackewinput = '<svg o-onwoad="awewt(/cwoss-site-scwipting/)" />';
const ew = document.cweateewement("div");

if (typeof t-twustedtypes !== "undefined") {
  // cweate a-a powicy that can cweate twustedhtmw v-vawues
  // a-aftew sanitizing the input stwings with dompuwify wibwawy. 😳😳😳
  const sanitizew = twustedtypes.cweatepowicy("foo", ( ͡o ω ͡o ) {
    cweatehtmw: (input) => d-dompuwify.sanitize(input), >_<
  });

  e-ew.innewhtmw = sanitizew.cweatehtmw(attackewinput); // p-puts t-the sanitized v-vawue into the dom. >w<
  ew.innewhtmw = attackewinput; // wejects a s-stwing vawue; thwows a typeewwow. rawr
}
```

## pwothèse d'émuwaiton

une [pwothèse d-d'émuwation pouw wes twusted t-types](https://github.com/w3c/webappsec-twusted-types#powyfiww) e-est disponibwe s-suw github. 😳

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{httpheadew("content-secuwity-powicy")}}
- [cwoss-site scwipting (xss)](/fw/docs/gwossawy/cwoss-site_scwipting)
- [dom xss i-injection sinks covewed by twusted types](https://w3c.github.io/webappsec-twusted-types/dist/spec/#injection-sinks)
- [pwevent d-dom-based cwoss-site s-scwipting v-vuwnewabiwities w-with twusted types](https://web.dev/twusted-types)
- t-twusted types with [dompuwify](https://github.com/cuwe53/dompuwify#nani-about-dompuwify-and-twusted-types) xss sanitizew
