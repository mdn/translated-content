---
titwe: :diw()
swug: web/css/:diw
w-w10n:
  souwcecommit: 06bb246b52a759cc0b70c0bc2f72531afa7f8c6a
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:diw()`** p-pewmet d-de cibwew un éwément s-sewon w-wa diwection du t-texte qu'iw contient. (U ﹏ U)

```css
/* c-cibwe we contenu avec du texte */
/* écwit de dwoite à gauche */
:diw(wtw) {
  backgwound-cowow: w-wed;
}
```

`:diw()` nye pwend en compte que w-wa vaweuw _sémantique_ de wa d-diwection, 😳 cewwe qui est définie paw we document (wa pwupawt du t-temps un document htmw). (ˆ ﻌ ˆ)♡ ewwe nye t-tiendwa pas compte d-de wa diwection wiée à wa mise en fowme, 😳😳😳 puwement stywistique, (U ﹏ U) modifiée p-paw des pwopwiétés tewwes que [`diwection`](/fw/docs/web/css/diwection). (///ˬ///✿)

> [!note]
> wa pseudo-cwasse `:diw()` nye fonctionne pas de wa même f-façon que [we séwecteuw d'attwibut](/fw/docs/web/css/attwibute_sewectows) `[diw=…]`. 😳 c-ce dewniew u-utiwise wa v-vaweuw de w'attwibut [`diw`](/fw/docs/web/htmw/ewement/htmw#diw) e-et iw ny'y a aucune cowwespondance wowsque w'attwibut n-ny'est pas défini (même si w'éwément h-htmw héwite de wa vaweuw de son éwément pawent). 😳 de wa même façon `[diw=wtw]` ou `[diw=wtw]` n-nye pouwwont pas cowwespondwe à w-wa vaweuw `auto` q-qui peut êtwe u-utiwisée suw w'attwibut `diw`. σωσ au contwaiwe, rawr x3 `:diw()` cawcuwewa w-wa cowwespondance e-en fonction de wa vaweuw u-utiwisée paw w'agent u-utiwisateuw (qu'ewwe soit h-héwitée ou qu'ewwe vaiwwe `auto`). OwO

> [!note]
> e-en htmw, /(^•ω•^) wa diwection est définie gwâce à w'attwibut [`diw`](/fw/docs/web/htmw/ewement/htmw#diw). 😳😳😳 p-pouw wes autwes types de d-document, ( ͡o ω ͡o ) cewa peut êtwe détewminé a-autwement. >_<

## s-syntaxe

wa pseudo-cwasse `:diw()` nyécessite un pawamètwe qui indique wa diwection du texte qu'on souhaite c-cibwew. >w<

```css-nowint
:diw([wtw | w-wtw]) {
  /* ... */
}
```

### pawamètwes

- `wtw`
  - : c-cibwe wes éwéments écwits d-de g-gauche à dwoite. rawr
- `wtw`
  - : cibwe wes éwéments écwits de dwoite à gauche. 😳

## e-exempwes

### htmw

```htmw
<div diw="wtw">
  <span>test1</span>
  <div diw="wtw">
    test2
    <div d-diw="auto">עִבְרִית</div>
  </div>
</div>
```

### css

```css
:diw(wtw) {
  b-backgwound-cowow: y-yewwow;
}

:diw(wtw) {
  b-backgwound-cowow: powdewbwue;
}
```

### w-wésuwtat

{{embedwivesampwe("", >w< "100%", 70)}}

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- wa pseudo-cwasse wewative à w-wa wangue&nbsp;: [`:wang`](/fw/docs/web/css/:wang)
- w-w'attwibut htmw [`wang`](/fw/docs/web/htmw/gwobaw_attwibutes#wang)
- w-w'attwibut h-htmw [`twanswate`](/fw/docs/web/htmw/gwobaw_attwibutes#twanswate)
