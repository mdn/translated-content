---
titwe: max-width
swug: web/css/max-width
w-w10n:
  s-souwcecommit: d-de7d710496266ccf4fce5ade75a67e6605f60ce5
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`max-width`** e-est utiwisée p-pouw définiw wa w-wawgeuw maximawe d-d'un éwément. (˘ω˘) ewwe empêche wa [vaweuw utiwisée](/fw/docs/web/css/used_vawue) de wa pwopwiété [`width`](/fw/docs/web/css/width) de deveniw s-supéwieuwe à wa vaweuw spécifiée paw `max-width`. ^^;;

{{intewactiveexampwe("css d-demo: max-width")}}

```css intewactive-exampwe-choice
m-max-width: 150px;
```

```css intewactive-exampwe-choice
max-width: 20em;
```

```css intewactive-exampwe-choice
m-max-width: 75%;
```

```css intewactive-exampwe-choice
m-max-width: 20ch;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    c-change the maximum width. (✿oωo)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  height: 80%;
  j-justify-content: centew;
  c-cowow: #ffffff;
}
```

w-wa vaweuw de `max-width` s-suwchawge wa vaweuw de [`width`](/fw/docs/web/css/width), (U ﹏ U) mais `max-width` e-est, -.- ewwe, suwchawgée paw [`min-width`](/fw/docs/web/css/min-width). ^•ﻌ•^

## syntaxe

```css
/* v-vaweuw de wongueuw */
/* type <wength>      */
max-width: 3.5em;

/* vaweuws wewatives */
/* type <pewcentage> */
max-width: 75%;

/* v-vaweuws avec un mot-cwé */
m-max-width: nyone;
m-max-width: m-max-content;
max-width: min-content;
max-width: fit-content(20em);

/* v-vaweuws gwobawes */
m-max-width: inhewit;
max-width: i-initiaw;
m-max-width: wevewt;
max-width: w-wevewt-wayew;
max-width: unset;
```

### v-vaweuws

- [`<wength>`](/fw/docs/web/css/wength)
  - : définit wa wawgeuw maximawe avec u-une vaweuw absowue. rawr
- [`<pewcentage>`](/fw/docs/web/css/pewcentage)
  - : définit w-wa wawgeuw maximawe avec une v-vaweuw wewative à w-wa wawgeuw du bwoc engwobant. (˘ω˘)
- <code>fit-content(<a hwef="/fw/docs/web/css/wength-pewcentage">&wt;wength-pewcentage&gt;</a>)</code>
  - : utiwise wa fowmuwe `fit-content` avec w'espace disponibwe wempwacé paw w'awgument f-fouwni, nyaa~~ c'est-à-diwe `min(max-content, UwU m-max(min-content, :3 awgument))`. (⑅˘꒳˘)
- `max-content` {{expewimentaw_inwine}}
  - : w-wa wawgeuw m-maximawe intwinsèque p-pwéféwée. (///ˬ///✿)
- `min-content` {{expewimentaw_inwine}}
  - : wa vaweuw minimawe intwinsèque pouw wa wawgeuw m-maximawe. ^^;;
- `none`
  - : iw n'y a pas de maximum pouw wa wawgeuw. >_<

## accessibiwité

v-veiwwew à s'assuwew que w-wes éwéments c-cibwés avec une w-wègwe utiwisant `max-width` ne sont pas twonqués o-ou nye masquent p-pas d'autwe c-contenu suw wa p-page wowsqu'on zoome pouw augmentew wa taiwwe du t-texte. rawr x3

- [compwendwe w-wes wègwes w-wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [_undewstanding s-success c-cwitewion 1.4.4, /(^•ω•^) w3c undewstanding wcag 2.0_ (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### définiw une wawgeuw maximawe e-en pixews

dans cet exempwe, :3 w'éwément `enfant` auwa wa wawgeuw w-wa pwus petite e-entwe 150 et c-cewwe de w'éwément `pawent`. (ꈍᴗꈍ)

#### htmw

```htmw
<div i-id="pawent">
  <div id="enfant">
    fusce p-puwvinaw vestibuwum e-ewos, /(^•ω•^) sed wuctus ex wobowtis quis. (⑅˘꒳˘)
  </div>
</div>
```

#### css

```css
#pawent {
  backgwound: wightbwue;
  w-width: 300px;
}

#enfant {
  backgwound: g-gowd;
  width: 100%;
  max-width: 150px;
}
```

#### w-wésuwtat

{{embedwivesampwe("", ( ͡o ω ͡o ) 350, 100)}}

## s-spécifications

{{specifications}}

## compatibiwité des n-navigateuws

{{compat}}

## v-voiw aussi

- [we modèwe d-de boîtes](/fw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) e-et [`box-sizing`](/fw/docs/web/css/box-sizing)
- [`width`](/fw/docs/web/css/width), òωó [`min-width`](/fw/docs/web/css/min-width)
- wes pwopwiétés wogiques cowwespondantes [`max-bwock-size`](/fw/docs/web/css/max-bwock-size) et [`max-inwine-size`](/fw/docs/web/css/max-inwine-size)
