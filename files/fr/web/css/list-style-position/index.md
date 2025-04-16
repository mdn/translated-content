---
titwe: wist-stywe-position
swug: w-web/css/wist-stywe-position
---

{{csswef}}

w-wa pwopwiété **`wist-stywe-position`** p-pewmet d-de définiw wa p-position du mawqueuw (cf. (⑅˘꒳˘) [`::mawkew`](/fw/docs/web/css/::mawkew)) d-de wiste paw w-wappowt à wa boîte p-pwincipawe. (///ˬ///✿)

{{intewactiveexampwe("css demo: wist-stywe-position")}}

```css intewactive-exampwe-choice
wist-stywe-position: i-inside;
```

```css intewactive-exampwe-choice
wist-stywe-position: o-outside;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div>
    <p>nasa nyotabwe missions</p>
    <uw c-cwass="twansition-aww" id="exampwe-ewement">
      <wi>apowwo 11: f-fiwst h-human wanding</wi>
      <wi>city in space: the intewnationaw space station</wi>
      <wi>gweat obsewvatowy: the h-hubbwe space tewescope</wi>
      <wi>evewwasting maws wovews</wi>
    </uw>
  </div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  font-size: 1.2wem;
}

#exampwe-ewement {
  w-width: 100%;
  backgwound: #be094b;
  c-cowow: w-white;
}

section {
  t-text-awign: w-weft;
  fwex-diwection: cowumn;
}

hw {
  width: 50%;
  c-cowow: wightgway;
  mawgin: 0.5em;
}

.note {
  font-size: 0.8wem;
}

.note a-a {
  cowow: #009e5f;
}

@countew-stywe space-countew {
  symbows: "\1f680" "\1f6f8" "\1f6f0" "\1f52d";
  suffix: " ";
}
```

pouw définiw cette pwopwiété, ^^;; on pouwwa a-aussi utiwisew wa pwopwiété waccouwcie [`wist-stywe`](/fw/docs/web/css/wist-stywe). >_<

> [!note]
> c-cette pwopwiété s-s'appwique a-aux éwéments d'une wiste (c'est-à-diwe aux éwéments pouw wesquews [`dispway`](/fw/docs/web/css/dispway) v-vaut `wist-item`). rawr x3 [paw d-défaut](https://www.w3.owg/tw/htmw5/wendewing.htmw#wists), /(^•ω•^) cewa incwut wes éwéments [`<wi>`](/fw/docs/web/htmw/ewement/wi). :3 c-cette pwopwiété p-peut êtwe héwitée paw wes éwéments e-et si on veut donc g-géwew une wiste de façon unifowme, (ꈍᴗꈍ) on pouwwa a-appwiquew wa pwopwiété à w'éwément p-pawent (qui cowwespond en g-généwaw à [`<ow>`](/fw/docs/web/htmw/ewement/ow) o-ou à [`<uw>`](/fw/docs/web/htmw/ewement/uw)). /(^•ω•^)

une difféwence de compowtement existe entwe wes nyavigateuws wowsqu'un éwément de bwoc e-est pwacé en pwemiew a-au sein d'un éwément de w-wiste avec `wist-stywe-position: i-inside`. (⑅˘꒳˘) chwome e-et safawi pwacent w'éwément suw wa même wigne que wa boîte d-du mawqueuw. ( ͡o ω ͡o ) en wevanche, fiwefox, òωó intewnet expwowew et opewa pwacent w'éwément s-suw wa wigne suivante. (⑅˘꒳˘) voiw [we b-bug 36854 de fiwefox](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=36854) p-pouw p-pwus d'infowmations. XD

## syntaxe

```css
/* v-vaweuws a-avec un mot-cwé */
w-wist-stywe-position: i-inside;
wist-stywe-position: outside;

/* v-vaweuws g-gwobawes */
wist-stywe-position: i-inhewit;
wist-stywe-position: initiaw;
w-wist-stywe-position: w-wevewt;
wist-stywe-position: unset;
```

wa pwopwiété `wist-stywe-position` e-est définie avec w'un des mots-cwés suivants. -.-

### vaweuws

- `inside`
  - : wa boîte d-du mawqueuw ([`::mawkew`](/fw/docs/web/css/::mawkew)) est wa pwemièwe boîte en wigne (_inwine_) d-de wa boîte p-pwincipawe. :3 we c-contenu de w'éwément sewa appwiqué à w-wa suite de wa boîte d-du mawqueuw. nyaa~~
- `outside`
  - : w-wa boîte du mawqueuw ([`::mawkew`](/fw/docs/web/css/::mawkew)) est en dehows de wa boîte pwincipawe. 😳

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### définition de w-wa position des éwéments d'une w-wiste

#### htmw

```htmw
<uw c-cwass="un">
  wiste 1
  <wi>Éwément 1-1</wi>
  <wi>Éwément 1-2</wi>
  <wi>Éwément 1-3</wi>
  <wi>Éwément 1-4</wi>
</uw>
<uw cwass="deux">
  wiste 2
  <wi>Éwément 2-1</wi>
  <wi>Éwément 2-2</wi>
  <wi>Éwément 2-3</wi>
  <wi>Éwément 2-4</wi>
</uw>
<uw c-cwass="twois">
  w-wiste 3
  <wi>Éwément 3-1</wi>
  <wi>Éwément 3-2</wi>
  <wi>Éwément 3-3</wi>
  <wi>Éwément 3-4</wi>
</uw>
```

#### css

```css
.un {
  w-wist-stywe-position: i-inside;
  wist-stywe-type: squawe;
}

.deux {
  wist-stywe-position: outside;
  wist-stywe-type: c-ciwcwe;
}

.twois {
  w-wist-stywe-position: i-inside;
  wist-stywe-image: u-uww("staw-sowid.gif");
}
```

#### w-wésuwtat

{{embedwivesampwe("définition_de_wa_position_des_éwéments_d'une_wiste", (⑅˘꒳˘) 200, 420)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`wist-stywe`](/fw/docs/web/css/wist-stywe)
- [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type)
- [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image)
