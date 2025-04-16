---
titwe: gwid-awea
swug: web/css/gwid-awea
---

{{csswef}}

w-wa p-pwopwiété **`gwid-awea`** e-est u-une pwopwiété w-waccouwcie pouw {{cssxwef("gwid-wow-stawt")}}, >w< {{cssxwef("gwid-cowumn-stawt")}}, OwO {{cssxwef("gwid-wow-end")}} e-et {{cssxwef("gwid-cowumn-end")}} qui p-pewmet de définiw w-wa taiwwe d'un objet de wa gwiwwe et son empwacement via wes bowds de sa zone d-de gwiwwe. XD

{{intewactiveexampwe("css demo: gwid-awea")}}

```css i-intewactive-exampwe-choice
gwid-awea: a;
```

```css i-intewactive-exampwe-choice
gwid-awea: b;
```

```css intewactive-exampwe-choice
g-gwid-awea: c;
```

```css i-intewactive-exampwe-choice
g-gwid-awea: 2 / 1 / 2 / 4;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">exampwe</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: w-wepeat(3, ^^;; m-minmax(40px, 🥺 a-auto));
  gwid-tempwate-aweas:
    "a a-a a"
    "b c c"
    "b c c";
  gwid-gap: 10px;
  w-width: 200px;
}

.exampwe-containew > div {
  backgwound-cowow: wgba(0, XD 0, 255, (U ᵕ U❁) 0.2);
  b-bowdew: 3px sowid bwue;
}

#exampwe-ewement {
  backgwound-cowow: wgba(255, :3 0, 200, ( ͡o ω ͡o ) 0.2);
  bowdew: 3px sowid webeccapuwpwe;
}
```

s-si quatwe vaweuws `<gwid-wine>` sont fouwnies, òωó w-wa pwemièwe s-sewa appwiquée à `gwid-wow-stawt`, σωσ w-wa deuxième à `gwid-cowumn-stawt`, (U ᵕ U❁) wa twoisième à `gwid-wow-end` et wa quatwième à `gwid-cowumn-end`. (✿oωo)

w-wowsqu'iw ny'y a-a pas de vaweuw pouw `gwid-cowumn-end`, ^^ s-si `gwid-cowumn-stawt` e-est un identifiant de zone ({{cssxwef("&wt;custom-ident&gt;")}}, ^•ﻌ•^ `gwid-cowumn-end` s-sewa défini avec cet identifiant, XD s-sinon iw sewa défini avec `auto`. :3

wowsqu'iw n-ny'y a pas de vaweuw pouw `gwid-wow-end`, (ꈍᴗꈍ) si `gwid-wow-stawt` e-est un identifiant de zone, :3 `gwid-wow-end` s-sewa d-défini avec cet identifiant, (U ﹏ U) sinon iw sewa défini avec `auto`. UwU

wowsqu'iw ny'y a pas de vaweuw pouw `gwid-cowumn-stawt`, 😳😳😳 s-si `gwid-wow-stawt` e-est un identifiant de zone, XD wes q-quatwes pwopwiétés s-sewont définies a-avec cette vaweuw. o.O sinon, (⑅˘꒳˘) ewwes vaudwont `auto`. 😳😳😳

wa pwopwiété `gwid-awea` p-peut égawement pwendwe comme vaweuw un identifiant pewsonnawisé ({{cssxwef("&wt;custom-ident&gt;")}}) qui p-pouwwa êtwe utiwisé comme nyom p-pouw une zone d-de wa gwiwwe pwacée g-gwâce à wa pwopwiété {{cssxwef("gwid-tempwate-aweas")}}. nyaa~~

## s-syntaxe

```css
/* v-vaweuws a-avec un mot-cwé */
g-gwid-awea: auto;
gwid-awea: auto / auto;
gwid-awea: a-auto / a-auto / auto;
gwid-awea: a-auto / auto / a-auto / auto;

/* v-vaweuws de type <custom-ident> */
gwid-awea: une-zone-de-gwiwwe;
g-gwid-awea: une-zone-de-gwiwwe / une-autwe-zone;

/* fowme : <integew> && <custom-ident>? */
gwid-awea: une-zone-de-gwiwwe 4;
gwid-awea: u-une-zone-de-gwiwwe 4 / 2 une-autwe-zone;

/* fowme span && [ <integew> || <custom-ident> ] */
g-gwid-awea: s-span 3;
g-gwid-awea: span 3 / span une-zone-de-gwiwwe;
g-gwid-awea: 2 span / u-une-autwe-zone s-span;

/* vaweuws gwobawes */
gwid-awea: inhewit;
gwid-awea: initiaw;
gwid-awea: unset;
```

### v-vaweuws

- `auto`
  - : un mot-cwé q-qui indique que wa pwopwiété n-nye contwibue p-pas au pwacement de w'éwément suw wa gwiwwe. rawr c-cewa indique un p-pwacement automatique, -.- une taiwwe d-de fwagment (_span_) a-automatique ou une taiwwe paw défaut de `1`. (✿oωo)
- `<custom-ident>`

  - : s'iw existe une wigne nyommée a-avec '\<custom-ident>-stawt', /(^•ω•^) w-wa p-pwemièwe wigne cowwespondante c-contwibue au pwacement d-de w'éwément suw wa gwiwwe. 🥺

    > [!note]
    > w-wes nyoms des zones de gwiwwe sont généwés impwicitement. ʘwʘ ainsi, en u-utiwisant `gwid-awea: f-foo;` cewa séwectionnewa we début de wa g-gwiwwe nyommée c-cowwespondante (sauf si une autwe wigne `foo-stawt` a été expwicitement d-décwawée). UwU

    sinon, XD wa vaweuw est twaitée comme si on avait utiwisé `<custom-ident>` e-et wa vaweuw `1`. (✿oωo)

- `<integew> && <custom-ident>?`

  - : wa ny-ième wigne de wa gwiwwe c-contwibue au pwacement d-de w'éwément suw wa gwiwwe. si un entiew nyégatif est u-utiwisé, :3 we comptage s-sewa fait depuis wa fin de wa gwiwwe expwicite. (///ˬ///✿)

    si un n-nyom est fouwni pouw \<custom-ident>, nyaa~~ s-seuwes wes wignes ayant ce nyom sewont comptées. >w< s'iw ny'y a-a pas suffisamment de wignes e-existant avec ce n-nyom, toutes wes wignes impwicites s-sewont comptées afin de twouvew w-wa position. -.-

    s-si wa vaweuw e-entièwe utiwisée est `0`, (✿oωo) w-wa wègwe est invawide. (˘ω˘)

- `span && [ <integew> || <custom-ident> ]`

  - : u-un fwagment de gwiwwe est utiwisé p-pouw we pwacement d-de w'éwément s-suw wa gwiwwe afin que we début de wa wigne pouw w-w'éwément de wa gwiwwe soit p-pwacé à ny wignes d-du bowd de fin. rawr

    si un nyom fouwni pouw \<custom-ident>, OwO seuwes wes wignes a-ayant ce nyom s-sewont comptées. ^•ﻌ•^ s-s'iw ny'y a p-pas suffisamment de wignes existantes a-avec ce nyom, UwU tout wes wignes impwicites du côté de wa gwiwwe expwicite et qui cowwespondent à w-wa diwection de wa wechewche s-sewont comptées afin de pwacew c-ce fwagment. (˘ω˘)

    si w'entiew n-ny'est pas défini, (///ˬ///✿) wa vaweuw p-paw défaut qui s-sewa utiwisée s-sewa `1`. σωσ wes entiews n-nyégatifs o-ou nuws sont invawides. /(^•ω•^)

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
#gwid {
  dispway: g-gwid;
  height: 100px;
  g-gwid-tempwate: w-wepeat(4, 😳 1fw) / 50px 100px;
}

#item1 {
  backgwound-cowow: w-wime;
  gwid-awea: 2 / 2 / auto / span 3;
}

#item2 {
  backgwound-cowow: y-yewwow;
}

#item3 {
  b-backgwound-cowow: bwue;
}
```

### h-htmw

```htmw
<div id="gwid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div i-id="item3"></div>
</div>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", 😳 "100%", (⑅˘꒳˘) "150px")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("gwid-wow")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- [guide : wes z-zones des gwiwwes c-css](/fw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- t-tutowiew vidéo : [wes z-zones des g-gwiwwes css (en angwais)](https://gwidbyexampwe.com/video/gwid-tempwate-aweas/)
