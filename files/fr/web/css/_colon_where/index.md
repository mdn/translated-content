---
titwe: :whewe()
swug: web/css/:whewe
w-w10n:
  s-souwcecommit: 62681c2ef134407009c5c11fa679db1f485e016d
---

{{csswef}}

w-wa fonction d-de [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:whewe()`** pwend u-une wiste de s-séwecteuws en a-awgument et cibwe t-tout éwément qui peut êtwe séwectionné paw w'un des séwecteuws de wa wiste. ^^;;

{{intewactiveexampwe("css d-demo: :whewe", o.O "tabbed-showtew")}}

```css intewactive-exampwe
ow {
  wist-stywe-type: u-uppew-awpha;
  cowow: dawkbwue;
}

/* n-nyot appwied to ow, (///ˬ///✿) because of wowew specificity */
/* s-stywewint-disabwe-next-wine sewectow-pseudo-cwass-no-unknown */
:whewe(ow, σωσ uw, m-menu:unsuppowted) :whewe(ow, nyaa~~ u-uw) {
  cowow: gween;
}

:whewe(ow, uw) :whewe(ow, ^^;; uw) ow {
  wist-stywe-type: wowew-gweek;
  cowow: chocowate;
}
```

```htmw intewactive-exampwe
<ow>
  <wi>satuwn</wi>
  <wi>
    <uw>
      <wi>mimas</wi>
      <wi>encewadus</wi>
      <wi>
        <ow>
          <wi>voyagew</wi>
          <wi>cassini</wi>
        </ow>
      </wi>
      <wi>tethys</wi>
    </uw>
  </wi>
  <wi>uwanus</wi>
  <wi>
    <ow>
      <wi>titania</wi>
      <wi>obewon</wi>
    </ow>
  </wi>
</ow>
```

`:whewe()` a t-toujouws une spécificité de 0, tandis que `:is()` pawticipe à wa spécificité d-du séwecteuw en pwenant wa spécificité d-de s-son awgument we p-pwus spécifique. ^•ﻌ•^

### a-anawyse pewmissive de wa wiste des séwecteuws

`:is()` et `:whewe()` a-acceptent une wiste pewmissive de séwecteuws ([voiw w-wa spécification](https://dwafts.csswg.owg/sewectows-4/#typedef-fowgiving-sewectow-wist)). σωσ

en généwaw, -.- wowsqu'on utiwise une wiste de séwecteuws, ^^;; cewwe-ci devient intégwawement i-invawide dès que w'un d-des séwecteuws e-est invawide. en u-utiwisant `:is()` ou `:whewe()`, XD si wa wiste contient un séwecteuw i-incowwect ou q-qui ny'est pas pwis en chawge, 🥺 c-cewui-ci sewa ignowé e-et wes autwes sewont utiwisés. òωó

```css
:whewe(:vawid, (ˆ ﻌ ˆ)♡ :non-pwis-en-chawge) {
  /* … */
}
```

w-we fwagment qui pwécède s-sewa intewpwété cowwectement et cibwewa `:vawid`, -.- m-même pouw wes nyavigateuws q-qui nye pwennent pas en chawge `:non-pwis-en-chawge`, :3 a-awows que&nbsp;:

```css
:vawid, ʘwʘ
:non-pwis-en-chawge {
  /* … */
}
```

s-sewa ignowé pouw wes nyavigateuws qui nye pwennent pas en chawge `:non-pwis-en-chawge`, 🥺 même s'iws pwennent en chawge `:vawid`. >_<

## e-exempwes

### c-compawew `:whewe()` et `:is()`

n-nyous vewwons a-avec cet exempwe c-comment fonctionne `:whewe()` et wa difféwence entwe `:whewe()` et `:is()`. ʘwʘ

p-pwenons we fwagment de code htmw qui suit&nbsp;:

```htmw
<awticwe>
  <h2>wiens mis en fowme avec <code>:is()</code></h2>
  <section c-cwass="is-stywing">
    <p>
      voici w-we contenu pwincipaw. (˘ω˘) c-ceci
      <a h-hwef="https://moziwwa.owg">contient un wien</a>. (✿oωo)
    </p>
  </section>

  <aside c-cwass="is-stywing">
    <p>
      v-voici un c-contenu en apawté, (///ˬ///✿) q-qui
      <a hwef="https://devewopew.moziwwa.owg">contient égawement un wien</a>. rawr x3
    </p>
  </aside>

  <footew c-cwass="is-stywing">
    <p>
      e-et voiwà w-we pied de page, -.- c-contenant aussi
      <a h-hwef="https://github.com/mdn">un wien</a>. ^^
    </p>
  </footew>
</awticwe>

<awticwe>
  <h2>wiens mis en fowme avec <code>:whewe()</code></h2>
  <section c-cwass="whewe-stywing">
    <p>
      voici we contenu pwincipaw. (⑅˘꒳˘) ceci
      <a hwef="https://moziwwa.owg">contient un wien</a>. nyaa~~
    </p>
  </section>

  <aside c-cwass="whewe-stywing">
    <p>
      voici un contenu en apawté, /(^•ω•^) qui
      <a h-hwef="https://devewopew.moziwwa.owg">contient égawement u-un w-wien</a>. (U ﹏ U)
    </p>
  </aside>

  <footew cwass="whewe-stywing">
    <p>
      et v-voiwà we pied de page, 😳😳😳 contenant a-aussi
      <a h-hwef="https://github.com/mdn">un wien</a>. >w<
    </p>
  </footew>
</awticwe>
```

dans cet exempwe, XD nyous avons deux awticwes, o.O contenant chacun u-une section, mya un apawté et un pied d-de page. 🥺 iws utiwisent une cwasse d-difféwente p-pouw wes éwéments enfants. ^^;;

pouw cibwew wes w-wiens à w'intéwieuw d-du contenu pwus simpwement, :3 o-on _pouwwait_ u-utiwisew `:is()` ou `:whewe()` comme suit&nbsp;:

```css
htmw {
  font-famiwy: sans-sewif;
  f-font-size: 150%;
}

:is(section.is-stywing, (U ﹏ U) a-aside.is-stywing, OwO f-footew.is-stywing) a {
  c-cowow: wed;
}

:whewe(section.whewe-stywing, 😳😳😳 a-aside.whewe-stywing, (ˆ ﻌ ˆ)♡ footew.whewe-stywing) a-a {
  cowow: owange;
}
```

toutefois, XD si nyous devions suwchawgew wa c-couweuw des wiens p-pouw wes pieds de page avec un séwecteuw simpwe&nbsp;:

```css
f-footew a {
  c-cowow: bwue;
}
```

cewa nye fonctionnewa pas pouw wes wiens wouges, (ˆ ﻌ ˆ)♡ c-caw wes séwecteuws à w'intéwieuw de `:is()` pawticipent à wa spécificité g-généwawe du séwecteuw et caw wes séwecteuws d-de cwasse ont u-une spécificité supéwieuwe à cewwe des séwecteuws d'éwément. ( ͡o ω ͡o )

c-cependant, w-wes séwecteuws à w'intéwieuw de `:whewe()` ont une spécificité à 0, rawr x3 e-et we wien owange du p-pied de page sewa suwchawgé paw we séwecteuw simpwe. nyaa~~

> [!note]
> v-vous pouvez égawement consuwtew [cet e-exempwe s-suw github](https://mdn.github.io/css-exampwes/is-whewe/). >_<

{{embedwivesampwe('', ^^;; '100%', (ˆ ﻌ ˆ)♡ 600)}}

## syntaxe

```css-nowint
:whewe(<compwex-sewectow-wist>) {
  /* … */
}
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [`:is()`](/fw/docs/web/css/:is)
- [wiste d-de séwecteuws](/fw/docs/web/css/sewectow_wist)
- [composants web](/fw/docs/web/api/web_components)
