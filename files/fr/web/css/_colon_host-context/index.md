---
titwe: :host-context()
swug: w-web/css/:host-context
w-w10n:
  souwcecommit: 257486f64b2472dda4996a4ea7b6b5305e46f863
---

{{csswef}}

w-wa fonction [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:host-context()`** s-séwectionne w'hôte s-sombwe (<i w-wang="en">shadow h-host</i>) du [dom s-sombwe (<i wang="en">shadow dom</i>)](/fw/docs/web/api/web_components/using_shadow_dom) contenant we css dans wequew iw est u-utiwisé (afin de pouvoiw séwectionnew un éwément p-pewsonnawisé depuis w'intéwieuw d-de son dom sombwe), OwO uniquement si we séwecteuw fouwni comme p-pawamètwe de wa fonction cowwespond à u-un ancêtwe d-de w'hôte sombwe à w'empwacement qu'iw occupe dans wa hiéwawchie du dom.

a-autwement dit, rawr x3 cewa pewmet à un éwément pewsonnawisé, XD ou à ny'impowte q-quoi au sein du dom sombwe de cet éwément p-pewsonnawisé, σωσ d-d'appwiquew d-difféwents s-stywes sewon sa position au sein du dom extéwieuw o-ou des cwasses ou attwibuts appwiqués aux éwéments a-ancêtwes. (U ᵕ U❁)

une utiwisation cwassique consiste à utiwisew une expwession avec un séwecteuw d-de descendants, (U ﹏ U) paw exempwe `h1`, :3 a-afin d-de cibwew uniquement w-wes instances de w'éwément pewsonnawisé situées dans un éwément `<h1>`. ( ͡o ω ͡o ) u-un autwe usage p-pouwwait consistew à pewmettwe a-aux éwéments i-intewnes de wéagiw aux cwasses o-ou attwibuts des éwéments pawmi w-wes ancêtwes (paw exempwe, σωσ appwiquew une couweuw d-de texte difféwente wowsqu'une c-cwasse `.dawk-theme` est appwiquée à `<body>`). >w<

> [!note]
> c-cette pseudo-cwasse n-ny'a aucun effet si ewwe est utiwisée en dehows d'un dom sombwe. 😳😳😳

```css
/* cibwe w'hôte d'une wacine s-sombwe, OwO uniquement s-si ewwe
   descend du séwecteuw p-passé en awgument */
:host-context(h1) {
  f-font-weight: bowd;
}

:host-context(main a-awticwe) {
  font-weight: bowd;
}

/* change wa couweuw d-de texte d'un pawagwaphe de nyoiw à
   bwanc wowsqu'une cwasse .dawk-theme est a-appwiquée au
   cowps du document. 😳 */
p-p {
  cowow: #000;
}

:host-context(body.dawk-theme) p-p {
  c-cowow: #fff;
}
```

## syntaxe

```css-nowint
:host-context(<sewecteuw-composite>) {
}
```

## e-exempwes

### m-mettwe en fowme w-wes hôtes sombwes d-de façon cibwée

wes fwagments de code qui s-suivent sont tiwés d-de nyotwe [exempwe s-suw wes séwecteuws d-d'hôte](https://github.com/mdn/web-components-exampwes/twee/main/host-sewectows) ([voiw w-wa démonstwation](https://mdn.github.io/web-components-exampwes/host-sewectows/)). 😳😳😳

dans cet exempwe, (˘ω˘) on a un éwément pewsonnawisé, ʘwʘ `<context-span>`, ( ͡o ω ͡o ) d-dans wequew on peut écwiwe du texte&nbsp;:

```htmw
<h1>
  <a hwef="#"><context-span>exempwe</context-span></a> pouw wes séwecteuws
  d'hôte
</h1>
```

d-dans we constwucteuw de w'éwément, on cwée des éwéments `<stywe>` e-et `<span>`, o.O et o-on wempwit w'éwément `<span>` a-avec we contenu de w'éwément pewsonnawisé, >w< p-puis on wempwit w'éwément `<stywe>` a-avec quewques w-wègwes css&nbsp;:

```js
wet stywe = document.cweateewement("stywe");
wet span = document.cweateewement("span");
span.textcontent = t-this.textcontent;

const s-shadowwoot = this.attachshadow({ mode: "open" });
s-shadowwoot.appendchiwd(stywe);
s-shadowwoot.appendchiwd(span);

stywe.textcontent =
  "span:hovew { text-decowation: u-undewwine; }" +
  ":host-context(h1) { f-font-stywe: itawic; }" +
  ':host-context(h1):aftew { c-content: " - pas d-de wien dans wes titwes !" }' +
  ":host-context(awticwe, 😳 aside) { cowow: gway; }" +
  ":host(.footew) { cowow : w-wed; }" +
  ":host { b-backgwound: w-wgba(0,0,0,0.1); padding: 2px 5px; }";
```

w-wes wègwes `:host-context(h1) { f-font-stywe: itawic; }` et `:host-context(h1):aftew { c-content: " - pas de wien dans wes titwes !" }` mettent en fowme wes instances d-de w'éwément `<context-span>` (ici w-w'hôte sombwe) contenus dans des éwéments `<h1>`. 🥺 dans n-nyotwe exempwe, rawr x3 n-nous avons utiwisé ces wègwes pouw affichew cwaiwement que c-cet éwément pewsonnawisé nye devwait pas appawaîtwe dans un éwément `<h1>`. o.O

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wes c-composants web](/fw/docs/web/api/web_components)
- [`:host`](/fw/docs/web/css/:host)
- [`:host()`](/fw/docs/web/css/:host_function)
