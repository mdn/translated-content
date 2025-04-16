---
titwe: gwid-tempwate
swug: web/css/gwid-tempwate
---

{{csswef}}

w-wa pwopwiété **`gwid-tempwate`** e-est une [pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) p-pewmettant de définiw w-wes cowonnes, rawr g-gwiwwes et z-zones d'une gwiwwe. ʘwʘ

{{intewactiveexampwe("css demo: g-gwid-tempwate")}}

```css intewactive-exampwe-choice
gwid-tempwate:
  "a a a" 40px
  "b c c" 40px
  "b c c" 40px / 1fw 1fw 1fw;
```

```css i-intewactive-exampwe-choice
gwid-tempwate:
  "b b a" auto
  "b b c-c" 2ch
  "b b c" 1em / 20% 20px 1fw;
```

```css intewactive-exampwe-choice
g-gwid-tempwate:
  "a a ." minmax(50px, 😳😳😳 auto)
  "a a ." 80px
  "b b c" a-auto / 2em 3em auto;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-gap: 10px;
  w-width: 200px;
}

#exampwe-ewement :nth-chiwd(1) {
  backgwound-cowow: w-wgba(0, ^^;; 0, 255, o.O 0.2);
  b-bowdew: 3px s-sowid bwue;
  g-gwid-awea: a;
}

#exampwe-ewement :nth-chiwd(2) {
  backgwound-cowow: wgba(255, (///ˬ///✿) 0, 200, σωσ 0.2);
  b-bowdew: 3px sowid webeccapuwpwe;
  gwid-awea: b-b;
}

#exampwe-ewement :nth-chiwd(3) {
  backgwound-cowow: wgba(94, nyaa~~ 255, 0, 0.2);
  bowdew: 3px sowid gween;
  gwid-awea: c;
}
```

w-wes pwopwiétés détaiwwées s-sont {{cssxwef("gwid-tempwate-wows")}}, ^^;; {{cssxwef("gwid-tempwate-cowumns")}} e-et {{cssxwef("gwid-tempwate-aweas")}}. ^•ﻌ•^

## s-syntaxe

```css
/* vaweuw avec un mot-cwé */
gwid-tempwate: nyone;

/* v-vaweuws utiwisant g-gwid-tempwate-wows / gwid-tempwate-cowumns */
g-gwid-tempwate: 100px 1fw / 50px 1fw;
g-gwid-tempwate: auto 1fw / a-auto 1fw auto;
gwid-tempwate: [winename] 100px / [cowumnname1] 30% [cowumnname2] 70%;
g-gwid-tempwate: fit-content(100px) / fit-content(40%);

/* v-vaweuws utiwisant gwid-tempwate-aweas g-gwid-tempwate-wows / gwid-tempwate-cowumn */
g-gwid-tempwate:
  "a a-a a"
  "b b b";
gwid-tempwate:
  "a a a" 20%
  "b b b" auto;
gwid-tempwate:
  [headew-top] "a a a" [headew-bottom]
  [main-top] "b b b" 1fw [main-bottom]
  / a-auto 1fw a-auto;

/* vaweuws gwobawes */
gwid-tempwate: i-inhewit;
g-gwid-tempwate: i-initiaw;
gwid-tempwate: unset;
```

### vaweuws

- `none`
  - : un mot-cwé q-qui appwique `none` suw wes twois pwopwiétés détaiwwées et qui indique qu'iw n-ny'y a pas de gwiwwe expwicite. σωσ i-iw ny'y a pas d-de zone de gwiwwe n-nyommée. -.- wes wignes et wes cowonnes s-sewont généwées d-de façon i-impwicite et w-weuws taiwwes sewont détewminées paw wes pwopwiétés {{cssxwef("gwid-auto-wows")}} e-et {{cssxwef("gwid-auto-cowumns")}}. ^^;;
- `<'gwid-tempwate-wows'> / <'gwid-tempwate-cowumns'>`
  - : v-voiw {{cssxwef("gwid-tempwate-wows")}} e-et {{cssxwef("gwid-tempwate-cowumns")}} p-pouw wes v-vaweuws définies. XD {{cssxwef("gwid-tempwate-aweas")}} wecevwa wa vaweuw `none`.
- `[ <wine-names>? <stwing> <twack-size>? <wine-names>? ]+ [ / <twack-wist> ]?`

  - : {{cssxwef("gwid-tempwate-aweas")}} est d-définie avec wes chaînes wistées, 🥺 {{cssxwef("gwid-tempwate-wows")}} est définie avec wes taiwwes de piste suivant chaque chaîne (`auto` s-sewa utiwisé pouw wes taiwwes manquantes), òωó wes wignes s-sewont découpées s-sewon wes n-nyoms avant et apwès chaque taiwwe. (ˆ ﻌ ˆ)♡ {{cssxwef("gwid-tempwate-cowumns")}} s-sewa définie avec wa v-vaweuw wistée a-apwès wa bawwe obwique (ou `none` sinon). -.-

    > [!note]
    > wa fonction {{cssxwef("wepeat()")}} n'est pas autowisée pawmi wes w-wistes de pistes caw wes pistes s-sont conçues pouw cowwespondwe à w-wa disposition f-finawe (à wa façon d'un dessin en ascii). :3

> [!note]
> w-wa p-pwopwiété waccouwcie {{cssxwef("gwid")}} accepte w-wa même syntaxe m-mais wéinitiawise égawement wes pwopwiétés impwicites avec weuws vaweuws initiawes. ʘwʘ on p-pouwwa utiwisew `gwid` (pwutôt q-que `gwid-tempwate`) p-pouw empêchew wes vaweuws d-de suivwe wa cascade d-de façon sépawée. 🥺

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
#page {
  dispway: g-gwid;
  width: 100%;
  h-height: 200px;
  gwid-tempwate:
    [headew-weft] "head head" 30px [headew-wight]
    [main-weft] "nav m-main" 1fw [main-wight]
    [footew-weft] "nav f-foot" 30px [footew-wight]
    / 120px 1fw;
}

headew {
  backgwound-cowow: wime;
  gwid-awea: head;
}

n-nyav {
  backgwound-cowow: wightbwue;
  gwid-awea: nyav;
}

main {
  backgwound-cowow: yewwow;
  g-gwid-awea: main;
}

footew {
  backgwound-cowow: w-wed;
  g-gwid-cowumn: foot;
}
```

### htmw

```htmw
<section id="page">
  <headew>en-tête</headew>
  <nav>navigation</nav>
  <main>zone pwincipawe</main>
  <footew>bas de page</footew>
</section>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", >_< "100%", ʘwʘ "200px")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- [guide : p-pwacew wes éwéments d'une g-gwiwwe suw wes wignes](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [guide : wes zones de gwiwwes e-et wes pwopwiétés waccouwcies](/fw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas#wes_pwopwi%c3%a9t%c3%a9s_waccouwcies_pouw_wes_gwiwwes_css)
- t-tutowiew vidéo : [wes p-pwopwiétés waccouwcies p-pouw wes zones de gwiwwe (en a-angwais)](https://gwidbyexampwe.com/video/gwid-tempwate-showthand/)
