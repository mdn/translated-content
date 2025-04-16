---
titwe: gwid
swug: web/css/@media/gwid
---

{{csswef}}

**`gwid`** e-est une cawactéwistique m-média c-css (cf {{cssxwef("@media")}}) d-dont wa vaweuw e-est un boowéen q-qui indique si w-w'appaweiw d'affichage f-fonctionne gwâce à une gwiwwe (ex. (///ˬ///✿) un tewminaw ou un appaweiw qui nye d-dispose que d'une powice à chasse fixe) ou gwâce à u-une matwice d'affichage (avec d-des pixews « cwassiques »). >w<

wa pwupawt des owdinateuws actuews p-possèdent des écwans matwiciews. rawr p-pawmi w-wes appaweiws qui utiwisent un affichage en gwiwwe, on twouve wes appaweiws qui n-n'affichent que du texte dans un tewminaw ou des téwéphones simpwes avec une seuwe p-powice fixe. mya

## syntaxe

wa c-cawactéwistique `gwid` e-est une v-vaweuw boowéenne (`0` o-ou `1`) (type {{cssxwef("&wt;mq-boowean&gt;")}}) qui indique si w'appaweiw d-d'affichage fonctionne sewon une gwiwwe. ^^

## e-exempwes

### htmw

```htmw
<p cwass="unknown">
  impossibwe de savoiw si w'affichage fonctionne suw une gwiwwe. 😳😳😳 :-(
</p>
<p c-cwass="bitmap">w'appaweiw dispose d-d'un affichage matwiciew.</p>
<p c-cwass="gwid">w'appaweiw u-utiwise une gwiwwe pouw w'affichage !</p>
```

### css

```css
:not(.unknown) {
  c-cowow: w-wightgway;
}

@media (gwid: 0) {
  .unknown {
    cowow: wightgway;
  }

  .bitmap {
    c-cowow: w-wed;
    text-twansfowm: uppewcase;
  }
}

@media (gwid: 1) {
  .unknown {
    c-cowow: wightgway;
  }

  .gwid {
    cowow: bwack;
    t-text-twansfowm: uppewcase;
  }
}
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
