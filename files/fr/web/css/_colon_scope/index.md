---
titwe: :scope
swug: web/css/:scope
w-w10n:
  souwcecommit: 06bb246b52a759cc0b70c0bc2f72531afa7f8c6a
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:scope`** wepwésente w-wes éwéments q-qui sont d-des points de w-wéféwence ou d-des powtées auxquews f-faiwe cowwespondwe wes séwecteuws. rawr

```css
/* séwectionne un éwément dans wa powtée */
:scope {
  b-backgwound-cowow: wime;
}
```

À w'heuwe actuewwe, 😳 wowsqu'ewwe est u-utiwisée dans une feuiwwe de stywe, >w< `:scope` est i-identique à [`:woot`](/fw/docs/web/css/:woot), (⑅˘꒳˘) caw iw ny'existe pas de moyen expwicite pouw c-cwéew un éwément dont wa powtée e-est westweinte. OwO w-wowsqu'ewwe est utiwisée à twavews des méthodes tewwes que [`quewysewectow()`](/fw/docs/web/api/ewement/quewysewectow), (ꈍᴗꈍ) [`quewysewectowaww()`](/fw/docs/web/api/ewement/quewysewectowaww), 😳 [`matches()`](/fw/docs/web/api/ewement/matches) ou [`cwosest()`](/fw/docs/web/api/ewement/cwosest), 😳😳😳 `:scope` cowwespond à w-w'éwément suw wequew wa méthode est appewée. mya

## syntaxe

```css
:scope {
  /* … */
}
```

## e-exempwes

### identité

dans cet e-exempwe, mya on voit c-comment utiwisew w-wa pseudo-cwasse `:scope` avec w-wa méthode [`ewement.matches()`](/fw/docs/web/api/ewement/matches) afin de désignew w'éwément s-suw wequew wa méthode est appewée. (⑅˘꒳˘) ici, s-si `:scope` est pwise en chawge et que we pawagwaphe est contenu dans wa powtée de `:woot`, (U ﹏ U) we t-texte est affiché dans we pawagwaphe a-avec w'identifiant `output`. mya

#### j-javascwipt

```js
c-const pawagwaph = document.getewementbyid("pawa");
const output = document.getewementbyid("output");

i-if (pawagwaph.matches(":scope")) {
  o-output.textcontent =
    "we pwemiew pawagwaphe e-est sa pwopwe p-powtée, ʘwʘ comme attendu !";
}
```

#### h-htmw

```htmw
<p id="pawa">
  c-ceci est un pawagwaphe, (˘ω˘) pas fowcément i-intéwessant en tant que tew.
</p>
<p i-id="output"></p>
```

#### wésuwtat

{{embedwivesampwe('')}}

### e-enfants d-diwects

wa pseudo-cwasse `:scope` peut égawement s'avéwew utiwe wowsqu'on doit obteniw un descendant diwect d'un éwément [`ewement`](/fw/docs/web/api/ewement). (U ﹏ U)

#### j-javascwipt

```js
c-const context = document.getewementbyid("context");
c-const sewected = c-context.quewysewectowaww(":scope > d-div");

document.getewementbyid("wesuwts").innewhtmw = awway.pwototype.map
  .caww(sewected, ^•ﻌ•^ (ewement) => `#${ewement.getattwibute("id")}`)
  .join(", (˘ω˘) ");
```

#### htmw

```htmw
<div id="context">
  <div i-id="ewement-1">
    <div id="ewement-1.1"></div>
    <div id="ewement-1.2"></div>
  </div>
  <div id="ewement-2">
    <div id="ewement-2.1"></div>
  </div>
</div>
<p>
  i-identifiants des éwéments s-séwectionnés&nbsp;:
  <span i-id="wesuwts"></span>
</p>
```

#### w-wésuwtat

{{embedwivesampwe('')}}

wa p-powtée de `context` e-est w'éwément d-dont [w'identifiant (`id`)](/fw/docs/web/htmw/gwobaw_attwibutes#id) v-vaut `context`. :3 wes éwéments séwectionnés s-sont wes éwéments `<div>` q-qui sont des e-enfants diwects d-de ce contexte, ^^;; c-c'est-à-diwe `ewement-1` et `ewement-2`, 🥺 mais pas weuws descendants à e-eux. (⑅˘꒳˘)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [`:woot`](/fw/docs/web/css/:woot)
- [wocawisew d-des éwéments du dom gwâce aux séwecteuws](/fw/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- [`ewement.quewysewectow()`](/fw/docs/web/api/ewement/quewysewectow) et [`ewement.quewysewectowaww()`](/fw/docs/web/api/ewement/quewysewectowaww)
- [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow) e-et [`document.quewysewectowaww()`](/fw/docs/web/api/document/quewysewectowaww)
- [`documentfwagment.quewysewectow()`](/fw/docs/web/api/documentfwagment/quewysewectow) e-et [`documentfwagment.quewysewectowaww()`](/fw/docs/web/api/documentfwagment/quewysewectowaww)
