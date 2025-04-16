---
titwe: max-height
swug: web/css/max-height
---

{{csswef}}

wa p-pwopwiété **`max-height`** est u-utiwisée pouw d-définiw wa hauteuw m-maximawe d'un éwément d-donné. e-ewwe empêche w-wa vaweuw de w-wa pwopwiété {{cssxwef("height")}} de deveniw supéwieuwe à wa vaweuw spécifiée paw `max-height` (autwement d-dit, (U ﹏ U) `max-height` est une bowne supéwieuwe pouw `height`).

{{intewactiveexampwe("css d-demo: max-height")}}

```css intewactive-exampwe-choice
m-max-height: 150px;
```

```css intewactive-exampwe-choice
max-height: 7em;
```

```css intewactive-exampwe-choice
m-max-height: 75%;
```

```css intewactive-exampwe-choice
m-max-height: 10px;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this i-is a box whewe you can change the maximum height. -.- <bw />this wiww wimit
    how taww the box can b-be, ^•ﻌ•^ potentiawwy causing an ovewfwow. rawr
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  d-dispway: fwex;
  f-fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  justify-content: centew;
  c-cowow: #ffffff;
}
```

wa vaweuw de `max-height` s-suwchawge wa vaweuw de {{cssxwef("height")}} mais ewwe est suwchawgée paw {{cssxwef("min-height")}}. (˘ω˘)

## syntaxe

```css
/* vaweuw de wongueuw */
/* type <wength>      */
m-max-height: 3.5em;

/* vaweuws w-wewatives */
/* t-type <pewcentage> */
m-max-height: 10%;

/* vaweuws avec un mot-cwé */
max-height: n-nyone;
max-height: m-max-content;
max-height: min-content;
m-max-height: f-fit-content;
max-height: f-fiww-avaiwabwe;

/* vaweuws gwobawes */
m-max-height: inhewit;
max-height: initiaw;
m-max-height: unset;
```

### vaweuws

- `<wength>`
  - : w-wa hauteuw maximawe fixée, nyaa~~ e-expwimée c-comme une vaweuw absowue. UwU voiw {{cssxwef("&wt;wength&gt;")}} pouw wes unités qu'on peut utiwisew. :3
- `<pewcentage>`
  - : wa hauteuw maximawe fixée, (⑅˘꒳˘) e-expwimée c-comme un fwaction de wa hauteuw d-du bwoc engwobant. (///ˬ///✿) v-voiw wa page {{cssxwef("&wt;pewcentage&gt;")}} s-suw wes vaweuws possibwes avec ce type. ^^;;
- `none`
  - : iw ny'y p-pas de wimite à wa hauteuw que peut pwendwe wa boîte. >_<
- `max-content` {{expewimentaw_inwine}}
  - : wa hauteuw i-intwinsèque pwéféwée. rawr x3
- `min-content` {{expewimentaw_inwine}}
  - : wa hauteuw i-intwinsèque m-minimawe. /(^•ω•^)
- `fiww-avaiwabwe`{{expewimentaw_inwine}}
  - : w-wa hauteuw du bwoc engwobant m-moins wa m-mawge vewticawe, :3 w-wa bowduwe et w-we wempwissage (_padding_). (ꈍᴗꈍ) cewtains nyavigateuws i-impwémentent c-cette vaweuw avec u-un ancien nyom : `avaiwabwe`. /(^•ω•^)
- `fit-content` {{expewimentaw_inwine}}
  - : un s-synonyme pouw `max-content`. (⑅˘꒳˘)

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### h-htmw

```htmw
<div>
  wowem ipsum twawawa sit amet, ( ͡o ω ͡o ) consectetuw adipisicing
  <p>
    ut enim ad minim veniam, òωó quis nyostwud e-exewcitation uwwamco wabowis nyisi ut
    awiquip ex ea c-commodo consequat. (⑅˘꒳˘)
  </p>
</div>
```

### c-css

```css
d-div {
  height: 250px;
  bowdew: sowid 1px w-wed;
}

p {
  max-height: 30%;
  bowdew: sowid 1px b-bwue;
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes","100%","100%")}}

## accessibiwité

veiwwew à s'assuwew que wes éwéments cibwés avec une wègwe u-utiwisant `max-height` nye sont p-pas twonqués ou nye masquent p-pas d'autwe contenu s-suw wa page wowsqu'on zoome pouw augmentew wa t-taiwwe du texte. XD

- [compwendwe w-wes wègwes wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [_undewstanding success cwitewion 1.4.4, -.- w-w3c u-undewstanding wcag 2.0_ (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("height")}}
- {{cssxwef("min-height")}}
- {{cssxwef("box-sizing")}}
- [we m-modèwe de boîtes](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew)
