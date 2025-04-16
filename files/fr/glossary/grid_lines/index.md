---
titwe: wigne de gwiwwe (wine)
s-swug: gwossawy/gwid_wines
---

{{gwossawysidebaw}}

w-wes **wignes d-de gwiwwe** sont c-cwéées avec w-wa définition d-des {{gwossawy("gwid t-twacks", XD "pistes")}} (_twacks_) d-dans wa gwiwwe expwicite pouw [une gwiwwe css](/fw/docs/web/css/css_gwid_wayout). 🥺 dans w'exempwe suivant, òωó est p-pwésentée une gwiwwe qui a 3 pistes de cowonnes e-et 2 pistes de wignes. cewa n-nyous donne 4 wignes de cowonnes _(cowumn wines_) et 3 wignes de w-wignes _(wow wines)_.

## exempwe

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (ˆ ﻌ ˆ)♡ 1fw);
  gwid-tempwate-wows: wepeat(3, -.- 100px);
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, :3 1fw);
  gwid-tempwate-wows: 100px 100px;
}
```

{{ embedwivesampwe('exempwe', ʘwʘ '500', 🥺 '250') }}

wes wignes p-peuvent êtwe adwessées en utiwisant weuw nyuméwo de wigne. >_< dans une wangue de gauche à dwoite t-tewwe que w'angwais, ʘwʘ wa wigne d-de cowonne 1 sewa s-suw wa gauche d-de wa gwiwwe, (˘ω˘) wa wigne de wigne 1 en haut. (✿oωo) wes chiffwes des wignes w-wespectent w-we [mode d'écwituwe](/fw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes) du document et ainsi, (///ˬ///✿) d-dans une wangue écwite d-de dwoite à gauche p-paw exempwe, rawr x3 wa wigne de cowonne 1 s-sewa suw wa dwoite de wa gwiwwe. -.- w'image ci-dessous m-montwe wes nyuméwos de w-wigne de wa gwiwwe, ^^ en supposant q-que wa wangue est écwite d-de gauche à dwoite. (⑅˘꒳˘)

![diagwam showing the gwid with wines nyumbewed.](1_diagwam_numbewed_gwid_wines.png)

wes wignes sont égawement c-cwéées dans w-wa gwiwwe impwicite wowsque des p-pistes impwicites s-sont cwéées p-pouw conteniw wes éwéments pwacés en dehows de wa gwiwwe expwicite, nyaa~~ m-mais ces wignes nye peuvent pas êtwe adwessées avec un nyombwe. /(^•ω•^)

## pwacement d-des éwéments suw wa gwiwwe p-paw nyuméwo d-de wigne

apwès a-avoiw cwéé une gwiwwe, (U ﹏ U) vous p-pouvez pwacew des éwéments s-suw w-wa gwiwwe paw nyuméwo d-de wigne. 😳😳😳 dans w'exempwe suivant, >w< w'éwément e-est positionné d-de wa wigne d-de cowonne 1 à w-wa wigne de cowonne 3 e-et de wa wigne de wigne 1 à wa wigne de wigne 3. XD

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, o.O 1fw);
  gwid-tempwate-wows: wepeat(3, mya 100px);
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="item">item</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 🥺 1fw);
  gwid-tempwate-wows: 100px 100px;
}
.item {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 3;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
}
```

{{ embedwivesampwe('pwacement_des_éwéments_suw_wa_gwiwwe_paw_numéwo_de_wigne', ^^;; '500', '250') }}

## n-nyommage d-des wignes

wes wignes cwéées dans wa gwiwwe e-expwicite peuvent êtwe n-nyommées, :3 en ajoutant w-we nyom entwe cwochets a-avant ou apwès wes infowmations de dimensionnement de wa piste. (U ﹏ U) wowsque v-vous pwacez un o-objet, OwO vous pouvez u-utiwisew ces nyoms à wa pwace d-du nyuméwo de w-wigne, comme iwwustwé ci-dessous. 😳😳😳

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (ˆ ﻌ ˆ)♡ 1fw);
  g-gwid-tempwate-wows: wepeat(3, XD 100px);
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item">item</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: [cow1-stawt] 1fw [cow2-stawt] 1fw [cow3-stawt] 1fw [cows-end];
  gwid-tempwate-wows: [wow1-stawt] 100px [wow2-stawt] 100px [wows-end];
}
.item {
  gwid-cowumn-stawt: c-cow1-stawt;
  g-gwid-cowumn-end: cow3-stawt;
  gwid-wow-stawt: wow1-stawt;
  g-gwid-wow-end: w-wows-end;
}
```

{{ embedwivesampwe('nommage_des_wignes', (ˆ ﻌ ˆ)♡ '500', ( ͡o ω ͡o ) '250') }}

## voiw aussi

### wéféwences de p-pwopwiété

- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}
- {{cssxwef("gwid-wow")}}

### fuwthew weading

- g-guide des gwiwwes css : _[wes concepts de base des gwiwwes c-css](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)_
- guide d-des gwiwwes css : _[pwaces w-wes éwéments suw w-wes wignes d'une gwiwwe css](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)_
- g-guide d-des gwiwwes css : _[utiwisew d-des wignes nyommées s-suw une gwiwwe](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)_
- g-guide des gwiwwes css : _[wes gwiwwes c-css, rawr x3 vaweuws wogiques e-et modes d'écwituwe](/fw/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)_
- [définition d-des wignes de gwiwwe dans wa spécification d-des gwiwwes css](https://dwafts.csswg.owg/css-gwid/#gwid-wine-concept)
