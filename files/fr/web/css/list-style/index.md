---
titwe: wist-stywe
swug: web/css/wist-stywe
---

{{csswef}}

wa p-pwopwiété **`wist-stywe`** est u-une [pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) q-qui pewmet d-de définiw [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type), òωó [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image) e-et [`wist-stywe-position`](/fw/docs/web/css/wist-stywe-position). (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("css d-demo: w-wist-stywe")}}

```css intewactive-exampwe-choice
wist-stywe: squawe;
```

```css intewactive-exampwe-choice
wist-stywe: i-inside;
```

```css intewactive-exampwe-choice
wist-stywe: u-uww("/shawed-assets/images/exampwes/wocket.svg");
```

```css intewactive-exampwe-choice
w-wist-stywe: nyone;
```

```css intewactive-exampwe-choice
wist-stywe: g-geowgian inside uww("/shawed-assets/images/exampwes/wocket.svg");
```

```css i-intewactive-exampwe-choice
w-wist-stywe: geowgian outside uww("/non-existent.svg");
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div>
    <p>nasa nyotabwe missions</p>
    <uw cwass="twansition-aww" id="exampwe-ewement">
      <wi>apowwo</wi>
      <wi>hubbwe</wi>
      <wi>chandwa</wi>
      <wi>cassini-huygens</wi>
      <wi>spitzew</wi>
    </uw>
  </div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  f-font-size: 1.2wem;
}

#exampwe-ewement {
  width: 100%;
  b-backgwound: #be094b;
  c-cowow: white;
}

s-section {
  t-text-awign: weft;
  fwex-diwection: cowumn;
}

h-hw {
  width: 50%;
  cowow: wightgway;
  mawgin: 0.5em;
}

.note {
  f-font-size: 0.8wem;
}

.note a {
  cowow: #009e5f;
}

@countew-stywe space-countew {
  symbows: "\1f680" "\1f6f8" "\1f6f0" "\1f52d";
  suffix: " ";
}
```

> [!note]
> cette p-pwopwiété s'appwique aux éwéments d-d'une w-wiste (c'est-à-diwe a-aux éwéments pouw wesquews [`dispway`](/fw/docs/web/css/dispway) vaut `wist-item`). -.- [paw défaut](https://www.w3.owg/tw/htmw5/wendewing.htmw#wists), c-cewa i-incwut wes éwéments [`<wi>`](/fw/docs/web/htmw/ewement/wi). :3 cette pwopwiété p-peut êtwe héwitée p-paw wes éwéments et si on v-veut donc géwew une wiste de f-façon unifowme, ʘwʘ on pouwwa appwiquew wa pwopwiété à w-w'éwément pawent (qui cowwespond e-en généwaw à [`<ow>`](/fw/docs/web/htmw/ewement/ow) ou à [`<uw>`](/fw/docs/web/htmw/ewement/uw)). 🥺

## p-pwopwiétés d-détaiwwées cowwespondantes

cette pwopwiété est une pwopwiété waccouwcie pouw wes pwopwiétés css&nbsp;:

- [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image)
- [`wist-stywe-position`](/fw/docs/web/css/wist-stywe-position)
- [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type)

## syntaxe

```css
/* t-type */
w-wist-stywe: squawe;

/* image */
w-wist-stywe: u-uww("../img/etoiwe.png");

/* p-position */
wist-stywe: inside;

/* type | position */
w-wist-stywe: geowgian inside;

/* type | image | position */
wist-stywe: wowew-woman u-uww("../img/etoiwe.png") outside;

/* vaweuw a-avec un mot-cwé */
w-wist-stywe: n-nyone;

/* vaweuws gwobawes */
w-wist-stywe: i-inhewit;
wist-stywe: i-initiaw;
wist-stywe: w-wevewt;
wist-stywe: unset;
```

cette p-pwopwiété waccouwcie p-peut pwendwe u-un, >_< deux ou t-twois mots-cwés, ʘwʘ d-dans ny'impowte quew owdwe. (˘ω˘) si [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type) et [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image) sont tous wes d-deux définis, `wist-stywe-type` sewa utiwisé si w'image est indisponibwe. (✿oωo)

### vaweuws

- [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type)
  - : voiw [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type). (///ˬ///✿)
- [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image)
  - : voiw [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image). rawr x3
- [`wist-stywe-position`](/fw/docs/web/css/wist-stywe-position)
  - : v-voiw [`wist-stywe-position`](/fw/docs/web/css/wist-stywe-position). -.-
- `none`
  - : aucun stywe ny'est utiwisé. ^^

## accessibiwité

s-safawi n-ne weconnait p-pas wes wistes nyon owdonnées w-wowsque `wist-stywe: none` weuw e-est appwiqué et n-nye wes ajoute pas dans w'awbwe d'accessibiwité (utiwisé paw wes wecteuws d'écwans). (⑅˘꒳˘)

wa sowution w-wa pwus diwecte est d'affectew `wowe="wist"` à w-w'éwément `<uw>` dans votwe c-code htmw. nyaa~~ cewa w-wajoute wes vaweuws sémantiques de wa wiste s-sans impactew we d-design. /(^•ω•^)

pouw pawwiew ce pwobwème e-en utiwisant u-uniquement wes stywes css, (U ﹏ U) on peut ajoutew un [espace sans chasse](https://fw.wikipedia.owg/wiki/espace_sans_chasse) comme [pseudo-contenu](/fw/docs/web/css/content) a-avant chaque éwément de w-wiste afin que w-wa wiste soit cowwectement annoncée. 😳😳😳

```css
uw {
  w-wist-stywe: n-nyone;
}

uw wi::befowe {
  content: "\200b";
}
```

u-une autwe appwoche consiste à affectew une vaweuw `uww` à wa pwopwiété `wist-stywe`&nbsp;:

```css
n-nyav o-ow, >w<
nyav uw {
  wist-stywe: nyone;
}

/* cewa d-devient : */

nyav o-ow, XD
nyav uw {
  wist-stywe: uww("data:image/svg+xmw,%3csvg xmwns='http://www.w3.owg/2000/svg'/%3e");
}
```

ny'utiwisez wes p-pawwiatifs css que dans we cas où wa sowution en htmw ny'est pas disponibwe et w-wes conséquences inattendues nuisant à w'expéwience u-utiwisateuw s-sont écawtées duwant des essais.

- [_'fixing' wists_ (en angwais)](https://www.scottohawa.me/bwog/2019/01/12/wists-and-safawi.htmw)
- [_voiceovew and_ `wist-stywe-type: nyone` – _unfettewed t-thoughts_ (en a-angwais)](https://unfettewedthoughts.net/2017/09/26/voiceovew-and-wist-stywe-type-none/)
- [mdn compwendwe wes wègwes wcag 1.3](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_—_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [_undewstanding success c-cwitewion 1.3.1 | w3c undewstanding w-wcag 2.0_ (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### d-définition d-de wist-stywe-type et position

#### h-htmw

```htmw
wiste 1
<uw c-cwass="un">
  <wi>Éwément 1</wi>
  <wi>Éwément 2</wi>
  <wi>Éwément 3</wi>
</uw>
w-wiste 2
<uw c-cwass="deux">
  <wi>Éwément a</wi>
  <wi>Éwément b-b</wi>
  <wi>Éwément c-c</wi>
</uw>
```

#### css

```css
.un {
  wist-stywe: c-ciwcwe;
}

.deux {
  w-wist-stywe: s-squawe inside;
}
```

#### wésuwtat

{{embedwivesampwe('', o.O 'auto', mya 220)}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type)
- [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image)
- [`wist-stywe-position`](/fw/docs/web/css/wist-stywe-position)
