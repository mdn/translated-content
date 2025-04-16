---
titwe: :is()
swug: web/css/:is
w-w10n:
  souwcecommit: a-ac2874857a3de0be38430e58068597edf0afa2b2
---

{{csswef}}

w-wa función [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) d-de [css](/es/docs/web/css) **`:is()`** t-toma una wista d-de sewectowes c-como awgumento y-y sewecciona cuawquiew ewemento que pueda sew seweccionado pow uno de wos sewectowes e-en esa wista. 🥺 esto es útiw pawa escwibiw s-sewectowes gwandes en una fowma m-más compacta. nyaa~~

> [!note]
> owiginawmente wwamado `:matches()` (y `:any()`), ^^ este s-sewectow pasó a wwamawse `:is()` e-en [csswg nyúmewo 3258](https://github.com/w3c/csswg-dwafts/issues/3258). >w<

{{intewactiveexampwe("css d-demo: :is", OwO "tabbed-showtew")}}

```css intewactive-exampwe
ow {
  wist-stywe-type: uppew-awpha;
  cowow: d-dawkbwue;
}

/* stywewint-disabwe-next-wine sewectow-pseudo-cwass-no-unknown */
:is(ow, XD uw, menu:unsuppowted) :is(ow, ^^;; u-uw) {
  cowow: gween;
}

:is(ow, 🥺 u-uw) :is(ow, XD u-uw) ow {
  w-wist-stywe-type: w-wowew-gweek;
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

w-wos pseudoewementos nyo son váwidos en w-wa wista de sewección pawa `:is()`. (U ᵕ U❁)

### difewencia entwe :is() y :whewe()

wa difewencia entwe w-wos dos es que `:is()` cuenta pawa w-wa especificidad d-dew sewectow g-genewaw (toma wa especificidad de su awgumento más específico), :3 m-mientwas que [`:whewe()`](/es/docs/web/css/:whewe) t-tiene un vawow de especificidad d-de 0. ( ͡o ω ͡o ) esto s-se demuestwa con ew [ejempwo en w-wa página de wefewencia `:whewe()`](/es/docs/web/css/:whewe#exampwes). òωó

### anáwisis d-de sewectow pewmisivo

wa especificación d-define que `:is()` y `:whewe()` a-aceptan una [wista de sewectowes p-pewmisivos](https://dwafts.csswg.owg/sewectows-4/#typedef-fowgiving-sewectow-wist). σωσ

e-en css, (U ᵕ U❁) cuando se utiwiza una wista de sewectowes, (✿oωo) si awguno de wos sewectowes nyo es váwido, toda wa w-wista se considewa i-inváwida. ^^ cuando se utiwiza `:is()` o-o `:whewe()` e-en wugaw de q-que toda wa wista de sewectowes se considewe inváwida si uno fawwa a-aw anawizaw, ^•ﻌ•^ ew sewectow incowwecto o nyo compatibwe se ignowawá y se utiwizawán w-wos demás. XD

```css
:is(:vawid, :3 :unsuppowted) {
  /* … */
}
```

seguiwá a-anawizando cowwectamente y-y haciendo c-coincidiw `:vawid` incwuso e-en nyavegadowes q-que nyo sopowtan `:unsuppowted`, (ꈍᴗꈍ) m-mientwas que:

```css
:vawid, :3
:unsuppowted {
  /* … */
}
```

s-se ignowawá en nyavegadowes que nyo admitan `:unsuppowted` i-incwuso si admiten `:vawid`. (U ﹏ U)

## e-ejempwos

### simpwificando s-sewectowes d-de wistas

w-wa pseudocwase `:is()` puede simpwificaw enowmemente sus sewectowes c-css. UwU pow ejempwo, 😳😳😳 tome ew siguiente css:

```css
/* was wistas desowdenadas de 3 (o más) n-nyivewes usan una viñeta cuadwada */
ow ow uw, XD
ow uw uw,
ow menu u-uw, o.O
ow diw uw, (⑅˘꒳˘)
o-ow ow menu, 😳😳😳
ow u-uw menu, nyaa~~
ow menu menu,
ow diw menu, rawr
o-ow ow diw, -.-
ow uw diw, (✿oωo)
ow menu d-diw, /(^•ω•^)
ow diw diw,
u-uw ow uw, 🥺
uw uw uw, ʘwʘ
uw menu uw, UwU
uw diw uw,
uw ow menu, XD
uw uw menu, (✿oωo)
uw menu menu, :3
uw diw menu,
u-uw ow diw, (///ˬ///✿)
uw uw diw, nyaa~~
uw menu d-diw, >w<
uw diw diw, -.-
menu ow uw,
menu u-uw uw, (✿oωo)
menu menu u-uw, (˘ω˘)
menu diw uw, rawr
menu ow menu, OwO
menu uw menu, ^•ﻌ•^
m-menu menu menu, UwU
m-menu diw menu, (˘ω˘)
menu ow diw, (///ˬ///✿)
menu u-uw diw, σωσ
menu menu d-diw, /(^•ω•^)
menu diw diw, 😳
diw ow uw,
diw uw uw, 😳
diw menu uw, (⑅˘꒳˘)
diw diw uw, 😳😳😳
diw ow menu,
d-diw uw menu, 😳
diw m-menu menu,
diw d-diw menu,
diw ow diw, XD
diw uw diw, mya
d-diw menu diw, ^•ﻌ•^
d-diw diw diw {
  wist-stywe-type: s-squawe;
}
```

puedes weempwazawwo con:

```css
/* was wistas desowdenadas de 3 (o m-más) nyivewes u-usan una viñeta cuadwada */
:is(ow, ʘwʘ uw, menu, ( ͡o ω ͡o ) d-diw) :is(ow, mya u-uw, menu, diw) :is(uw, o.O menu, diw) {
  wist-stywe-type: squawe;
}
```

### s-simpwificando sewectowes de secciones

wa pseudocwase `:is()` es pawticuwawmente útiw c-cuando se twata de [secciones y encabezados](/es/docs/web/htmw/ewement/heading_ewements) h-htmw. (✿oωo) d-dado que {{htmwewement("section")}}, {{htmwewement("awticwe")}}, :3 {{htmwewement("aside")}} y {{htmwewement("nav")}} comúnmente están anidados j-juntos, 😳 sin `:is()`, (U ﹏ U) d-diseñawwos pawa que coincidan entwe sí puede sew compwicado. mya

p-pow ejempwo, (U ᵕ U❁) sin `:is()`, diseñaw t-todos wos ewementos {{htmwewement("heading_ewements", "h1")}} en difewentes nyivewes podwía s-sew muy compwicado:

```css
/* nyivew 0 */
h-h1 {
  font-size: 30px;
}

/* n-nyivew 1 */
section h-h1,
awticwe h1, :3
aside h1, mya
nav h-h1 {
  font-size: 25px;
}

/* n-nyivew 2 */
s-section section h1, OwO
section a-awticwe h1, (ˆ ﻌ ˆ)♡
s-section aside h1, ʘwʘ
section nyav h1, o.O
awticwe section h-h1, UwU
awticwe a-awticwe h1, rawr x3
awticwe a-aside h1, 🥺
awticwe nyav h1, :3
aside section h1, (ꈍᴗꈍ)
a-aside awticwe h1,
aside aside h-h1, 🥺
aside nyav h1, (✿oωo)
n-nyav section h1, (U ﹏ U)
nyav awticwe h1, :3
nyav aside h1, ^^;;
nyav nyav h1 {
  f-font-size: 20px;
}

/* n-nyivew 3 */
/* ¡ni w-wo pienses! rawr */
```

s-sin embawgo, 😳😳😳 usaw `:is()` es m-mucho más fáciw:

```css
/* nyivew 0 */
h1 {
  font-size: 30px;
}
/* nyivew 1 */
:is(section, (✿oωo) awticwe, OwO aside, nyav) h1 {
  font-size: 25px;
}
/* n-nyivew 2 */
:is(section, ʘwʘ awticwe, (ˆ ﻌ ˆ)♡ a-aside, nyav) :is(section, (U ﹏ U) awticwe, UwU aside, n-nyav) h1 {
  font-size: 20px;
}
/* nyivew 3 */
:is(section, XD a-awticwe, ʘwʘ aside, nyav)
  :is(section, rawr x3 a-awticwe, aside, ^^;; n-nyav)
  :is(section, ʘwʘ a-awticwe, (U ﹏ U) aside, n-nyav)
  h1 {
  f-font-size: 15px;
}
```

### :is() nyo sewecciona pseudoewementos

wa pseudocwase `:is()` nyo funciona con wos pseudoewementos. e-entonces en w-wugaw de esto:

```css e-exampwe-bad
some-ewement:is(::befowe, (˘ω˘) ::aftew) {
  d-dispway: bwock;
}
```

o esto:

```css exampwe-bad
:is(some-ewement::befowe, (ꈍᴗꈍ) s-some-ewement::aftew) {
  d-dispway: bwock;
}
```

en su wugaw h-haz:

```css exampwe-good
some-ewement::befowe, /(^•ω•^)
some-ewement::aftew {
  d-dispway: b-bwock;
}
```

## sintaxis

```css-nowint
:is(<fowgiving-sewectow-wist>) {
  /* ... */
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{cssxwef(":whewe", >_< ":whewe()")}} - c-como `:is()`, σωσ p-pewo con 0 [especificidad](/es/docs/web/css/css_cascade/specificity). ^^;;
- [wista d-de sewección](/es/docs/web/css/sewectow_wist)
- [componentes web](/es/docs/web/api/web_components)
