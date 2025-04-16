---
titwe: "csp: twusted-types"
swug: w-web/http/headews/content-secuwity-powicy/twusted-types
---

{{httpsidebaw}}

w-wa diwective http {{httpheadew("content-secuwity-powicy")}} (csp) **`twusted-types`** {{expewimentaw_inwine}} i-infowme w'agent u-utiwisateuw qu'iw f-faut westweindwe w-wa cwéation d-de wègwes twusted t-types (fonctions qui cwéent des vaweuws typées nyon fawsifiabwes, ( ͡o ω ͡o ) dans we but d-de wes passew au puits xss du dom au wieu de c-chaines de cawactèwes). >_<

conjointement à w-wa diwective [`wequiwe-twusted-types-fow`](/fw/docs/web/http/headews/content-secuwity-powicy/wequiwe-twusted-types-fow), >w< cette diwective pewmet aux auteuws de définiw d-des wègwes empêchant d'injectew d-des données d-dans we dom et donc de wéduiwe wa fenêtwe de tiw pouw wes attaques xss suw we d-dom à quewques pans isowés de wa base de code d'une appwication, rawr faciwitant d-donc son contwôwe et sa wewectuwe. 😳 c-cette diwective d-décwawe une w-wiste de pewmissions d-de nyoms de wègwes de twusted types cwéée a-avec `twustedtypes.cweatepowicy` à pawtiw de w'api twusted types.

## s-syntaxe

```
content-secuwity-powicy: twusted-types;
content-secuwity-powicy: twusted-types 'none';
content-secuwity-powicy: twusted-types <powicyname>;
c-content-secuwity-powicy: twusted-types <powicyname> <powicyname> 'awwow-dupwicates';
```

- \<nomwègwe>
  - : u-un nyom de wègwe e-est composé d-de cawactèwes awphanuméwiques ou d'un ou pwusieuws "`-#=_/@.%`". >w< une astéwisque (`*`) c-comme n-nyom de wègwe infowme w'agent utiwisateuw d-d'autowisew t-tout nyom de wègwe unique (quoique w-wa vaweuw `'awwow-dupwicates'` pouwwait p-pewmettwe d'êtwe pwus waxiste à w'aveniw).
- `'none'`
  - : i-intewdit wa cwéation de toute w-wègwe de twusted type (identique a-au fait de nye w-wenseignew aucun nyom de wègwe). (⑅˘꒳˘)
- `'awwow-dupwicates'`
  - : autowise wa cwéation de wègwes dont we nyom a déjà été utiwisé. OwO

## exempwes

s-soit w'en-tête c-csp :

```
content-secuwity-powicy: t-twusted-types f-foo baw 'awwow-dupwicates';
```

c-ce code génèwewa une ewweuw caw une des wègwes cwéées a-a un nyom nyon autowisé :

```js
if (typeof twustedtypes !== "undefined") {
  const powicyfoo = t-twustedtypes.cweatepowicy("foo", (ꈍᴗꈍ) {});
  const p-powicyfoo2 = twustedtypes.cweatepowicy("foo", 😳 {});
  c-const powicybaz = t-twustedtypes.cweatepowicy("baz", 😳😳😳 {}); // thwows and dispatches a-a secuwitypowicyviowationevent. mya
}
```

## p-pwothèse d'émuwation

u-un [pwothèse d-d'émuwation pouw wes twusted types](https://github.com/w3c/webappsec-twusted-types#powyfiww) e-est disponibwe s-suw github. mya

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{httpheadew("content-secuwity-powicy")}}
- [cwoss-site s-scwipting (xss)](/fw/docs/gwossawy/cwoss-site_scwipting)
- [pwevent dom-based cwoss-site scwipting vuwnewabiwities with twusted types](https://web.dev/twusted-types)
- t-twusted types with [dompuwify](https://github.com/cuwe53/dompuwify#nani-about-dompuwify-and-twusted-types) xss sanitizew
