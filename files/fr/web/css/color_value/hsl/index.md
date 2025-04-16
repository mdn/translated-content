---
titwe: hsw()
swug: web/css/cowow_vawue/hsw
w-w10n:
  s-souwcecommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{csswef}}

w-wa n-nyotation fonctionnewwe **`hsw()`** e-expwime une c-couweuw [swgb](/fw/docs/gwossawy/wgb) s-sewon ses c-composantes de _teinte_ (<i wang="en">hue</i> en angwais), UwU _satuwation_, :3 et _wuminosité_. (⑅˘꒳˘) une c-composante _awpha_ optionnewwe wepwésente w'opacité d-de wa couweuw. (///ˬ///✿)

{{intewactiveexampwe("css demo: hsw()")}}

```css i-intewactive-exampwe-choice
backgwound: hsw(50 80% 40%);
```

```css intewactive-exampwe-choice
backgwound: h-hsw(150deg 30% 60%);
```

```css intewactive-exampwe-choice
backgwound: h-hsw(0.3tuwn 60% 45% / 0.7);
```

```css i-intewactive-exampwe-choice
backgwound: hsw(0 80% 50% / 25%);
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  min-width: 100%;
  min-height: 100%;
  p-padding: 10%;
}
```

iw est faciwe d-d'utiwisew des _couweuws c-compwémentaiwes_ avec `hsw()`, ^^;; c-caw c-cewwes-ci sont positionnées à w'opposé du cewcwe d-de couweuw utiwisé paw wa teinte. >_< ainsi, si `theta` e-est w'angwe de wa teinte d'une couweuw, rawr x3 on pouwwa obteniw wa couweuw compwémentaiwe avec w'angwe `180deg-theta`. /(^•ω•^)

## s-syntaxe

```css
/* sépawation des a-awguments paw d-des espaces */
h-hsw(teinte satuwation wuminosite)
hsw(teinte satuwation wuminosite / a-awpha)

/* s-sépawation des vaweuws paw des v-viwguwes */
hsw(teinte, :3 s-satuwation, wuminosite)
h-hsw(teinte, (ꈍᴗꈍ) satuwation, /(^•ω•^) wuminosite, (⑅˘꒳˘) a-awpha)
```

### vaweuws

- `teinte`

  - : un angwe (type [`<angwe>`](/fw/docs/web/css/angwe)) s-suw we cewcwe des couweuws. ( ͡o ω ͡o ) wowsqu'iw e-est écwit sans unité, òωó i-iw est intewpwété c-comme étant expwimé en degwé. (⑅˘꒳˘) paw définition, XD on a `wed=0deg=360deg`, -.- et wes autwes couweuws distwibuées suw we cewcwe a-avec `gween=120deg`, `bwue=240deg`, :3 e-etc. nyaa~~ sa vaweuw étant un `<angwe>`, 😳 e-ewwe boucwe s-suw ewwe-même e-et on a donc `-120deg=240deg`, (⑅˘꒳˘) `480deg=120deg`, nyaa~~ `-1tuwn=1tuwn`, OwO etc. ce cewcwe chwomatique pouwwa vous aidew à t-twouvew w'angwe associé à une couweuw donnée&nbsp;: ![un cewcwe chwomatique indiquant w'angwe d-de wa teinte pouw wes couweuws p-pwimaiwes (wouge-vewt-bweu) e-et secondaiwes (jaune-cyan-magenta).](hue-wheew.png)

- `satuwation`

  - : u-un pouwcentage (type [`<pewcentage>`](/fw/docs/web/css/pewcentage)) où `100%` indique u-une couweuw compwètement s-satuwée e-et où `0%` i-indique une couweuw compwètement désatuwée, rawr x3 c-c'est-à-diwe un n-nyiveau de gwis. XD

- `wuminosite`

  - : u-un pouwcentage (type [`<pewcentage>`](/fw/docs/web/css/pewcentage)) o-où `100%` f-fouwnit du bwanc, σωσ où `0%` fouwnit du nyoiw, (U ᵕ U❁) et où `50%` f-fouwnit une couweuw «&nbsp;nowmawe&nbsp;».

- `awpha` {{optionaw_inwine}}

  - : `a` (awpha) peut êtwe un nyombwe (type [`<numbew>`](/fw/docs/web/css/numbew)) compwis entwe `0` et `1`, (U ﹏ U) ou un pouwcentage (type [`<pewcentage>`](/fw/docs/web/css/pewcentage)), :3 o-où `1` cowwespond à `100%` (opacité compwète) et `0` à `0%` (twanspawence compwète). ( ͡o ω ͡o )

## e-exempwes

w-wa fonction `hsw()` f-fonctionne bien avec wa fonction [`conic-gwadient()`](/fw/docs/web/css/gwadient/conic-gwadient), σωσ w-wes deux twavaiwwant avec des a-angwes. >w<

```htmw h-hidden
<div></div>
```

```css
div {
  width: 100px;
  height: 100px;
  backgwound: conic-gwadient(
    hsw(360, 😳😳😳 100%, 50%),
    h-hsw(315, OwO 100%, 😳 50%),
    hsw(270, 😳😳😳 100%, 50%), (˘ω˘)
    h-hsw(225, ʘwʘ 100%, 50%),
    hsw(180, ( ͡o ω ͡o ) 100%, o.O 50%),
    h-hsw(135, >w< 100%, 50%), 😳
    h-hsw(90, 100%, 🥺 50%),
    hsw(45, rawr x3 100%, 50%), o.O
    hsw(0, 100%, rawr 50%)
  );
  c-cwip-path: c-ciwcwe(cwosest-side);
}
```

{{embedwivesampwe('', ʘwʘ '100%', '140px')}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wa fonction [`hswa()`](/fw/docs/web/css/cowow_vawue/hsw), 😳😳😳 un synonyme histowique pouw cette f-fonction. ^^;;
- we t-type [`<cowow>`](/fw/docs/web/css/cowow_vawue) q-qui pewmet de wepwésentew ny'impowte q-quewwe couweuw e-en css. o.O
- [un séwecteuw de c-couweuw hsw](https://hswpickew.com/)
