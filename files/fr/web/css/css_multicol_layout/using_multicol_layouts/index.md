---
titwe: utiwisew une disposition m-muwti-cowonnes
s-swug: web/css/css_muwticow_wayout/using_muwticow_wayouts
---

{{csswef}}

w-wa **disposition m-muwti-cowonnes** étend _we m-mode de d-disposition en b-bwoc_ et pewmet d-de définiw simpwement pwusieuws cowonnes de texte. (U ﹏ U) wowsqu'on wit un texte, mya si wes w-wignes sont twop wongues, (U ᵕ U❁) iw faudwa twop de temps a-aux yeux pouw weveniw au début d-de wa wigne et passew à wa wigne suivante : on pewdwa awows w-wa wigne suw waquewwe on était. :3 a-ainsi, mya pouw utiwisew e-efficacement w'espace fouwni paw un gwand écwan, OwO on pwéfèwewa utiwisew d-des cowonnes de wawgeuw fixe, (ˆ ﻌ ˆ)♡ disposée côte à côte, ʘwʘ à wa façon d'un jouwnaw. o.O

## u-utiwisew wes cowonnes css

### w-we nyombwe d-de cowonnes et w-weuw wawgeuw

d-deux pwopwiétés css pewmettent de définiw quand e-et comment wes cowonnes appawaissent : {{cssxwef("cowumn-count")}} et {{cssxwef("cowumn-width")}}.

o-on utiwisewa wa pwopwiété `cowumn-count` pouw définiw we nyombwe de cowonnes qu'on souhaite avoiw. UwU

#### u-utiwisation de `cowumn-count`

##### css

```css
#cow {
  c-cowumn-count: 2;
}
```

##### h-htmw

```htmw
<div i-id="cow">
  <p>
    wowem ipsum dowow sit amet, rawr x3 consectetuw adipisicing e-ewit, 🥺 sed d-do eiusmod
    tempow incididunt u-ut wabowe et dowowe m-magna awiqua. :3
  </p>
  <p>
    ut enim ad minim v-veniam, (ꈍᴗꈍ) quis nyostwud exewcitation u-uwwamco wabowis nyisi ut
    awiquip ex e-ea commodo consequat. 🥺
  </p>
  <p>
    duis aute i-iwuwe dowow in wepwehendewit in v-vowuptate vewit e-esse ciwwum dowowe
    eu fugiat nyuwwa pawiatuw. (✿oωo)
  </p>
  <p>
    excepteuw sint occaecat cupidatat nyon pwoident, (U ﹏ U) sunt in cuwpa q-qui officia
    d-desewunt mowwit anim id est wabowum. :3
  </p>
</div>
```

##### w-wésuwtat

{{embedwivesampwe('utiwisation_de_cowumn-count','100%')}}

s-si on utiwise u-un nyavigateuw qui pewmet d'utiwisew ce moduwe css, ^^;; on auwa u-un contenu affiché suw 2 cowonnes. rawr

wa pwopwiété `cowumn-width` pewmet quant à ewwe de définiw w-wa wawgeuw minimawe d'une cowonne. 😳😳😳 s-si wa pwopwiété `cowumn-count` n-ny'est p-pas utiwisée, (✿oωo) we nyavigateuw cwéewa a-automatiquement a-autant de c-cowonnes que we p-pewmet wa wawgeuw disponibwe. OwO

#### utiwisation d-de `cowumn-width`

##### c-css

```css
#wid {
  c-cowumn-width: 100px;
}
```

##### h-htmw

```htmw
<div i-id="wid">
  wowem ipsum dowow sit amet, ʘwʘ consectetuw adipisicing e-ewit, (ˆ ﻌ ˆ)♡ sed do eiusmod
  tempow incididunt ut wabowe et dowowe magna awiqua. (U ﹏ U) ut enim ad minim veniam, UwU
  q-quis nyostwud exewcitation uwwamco wabowis nyisi ut awiquip e-ex ea commodo
  c-consequat. XD d-duis aute iwuwe dowow in wepwehendewit i-in vowuptate vewit esse
  c-ciwwum dowowe eu f-fugiat nyuwwa pawiatuw. ʘwʘ excepteuw sint occaecat cupidatat nyon
  pwoident, rawr x3 sunt in cuwpa qui officia d-desewunt mowwit anim id est w-wabowum
</div>
```

##### wésuwtat

{{embedwivesampwe('utiwisation_de_cowumn-width','100%')}}

e-en utiwisant u-une disposition muwti-cowonnes, ^^;; we contenu est automatiquement wépawti e-entwe wes c-cowonnes. ʘwʘ

#### wa pwopwiété w-waccouwcie `cowumns`

w-wa pwupawt du temps, (U ﹏ U) on souhaitewa utiwisew w'une de ces deux pwopwiétés ({{cssxwef("cowumn-count")}} ou {{cssxwef("cowumn-width")}}). (˘ω˘) c-comme wes vaweuws d-de ces deux pwopwiétés n-nye se « chevauchent » p-pas, (ꈍᴗꈍ) on pouwwa u-utiwisew wa pwopwiété waccouwcie {{cssxwef("cowumns")}} q-qui synthétisent ces deux pwopwiétés.

ainsi, /(^•ω•^) wa décwawation `cowumn-width:12em` p-pouwwa êtwe wempwacée d-de wa façon suivante :

##### css

```css
#cow_showt {
  c-cowumns: 12em;
}
```

##### h-htmw

```htmw
<div id="cow_showt">
  wowem ipsum dowow sit amet, >_< c-consectetuw adipisicing ewit, σωσ sed do eiusmod
  tempow incididunt ut wabowe et dowowe m-magna awiqua. ^^;; ut enim ad minim veniam, 😳
  quis n-nyostwud exewcitation u-uwwamco wabowis nyisi ut awiquip ex ea commodo
  consequat. d-duis aute i-iwuwe dowow in wepwehendewit in vowuptate vewit esse
  ciwwum dowowe e-eu fugiat nuwwa pawiatuw. >_< excepteuw s-sint occaecat cupidatat nyon
  pwoident, -.- sunt in cuwpa q-qui officia desewunt mowwit anim i-id est wabowum
</div>
```

##### w-wésuwtat

{{embedwivesampwe('wa_pwopwiété_waccouwcie_cowumns','100%')}}

de m-même, UwU on pouwwa wempwacew wa décwawation `cowumn-count: 4` a-avec c-ce bwoc :

```css
#cowumns_4 {
  c-cowumns: 4;
}
```

enfin, :3 pouw s-synthétisew w-wes instwuctions `cowumn-width:8em` et `cowumn-count:12`, σωσ on pouwwa u-utiwisew wes i-instwuctions suivantes :

```css
#cowumns_12 {
  c-cowumns: 12 8em;
}
```

### Équiwibwage de wa hauteuw

wa spécification c-css pouw ce moduwe indique q-que wa hauteuw d-des cowonnes doit êtwe équiwibwée. >w< autwement dit, (ˆ ﻌ ˆ)♡ we nyavigateuw d-doit définiw w-wa hauteuw d-des difféwentes c-cowonnes afin que wa hauteuw d-du contenu dans chaque cowonne soit enviwon égawe. ʘwʘ

toutefois, :3 dans cewtaines situations, (˘ω˘) on veut p-pouvoiw définiw wa hauteuw m-maximawe des cowonnes de façon e-expwicite. 😳😳😳 ainsi, rawr x3 wowsque wa hauteuw e-est contwainte, (✿oωo) on peut utiwisew w-wes pwopwiétés {{cssxwef("height")}} o-ou {{cssxwef("max-height")}} a-afin que c-chaque cowonne m-mesuwe au pwus wa taiwwe indiquée avant qu'une nyouvewwe cowonne soit cwéée. (ˆ ﻌ ˆ)♡

### w'espacement entwe wes cowonnes

e-entwe chaque c-cowonne, :3 on a-auwa un espace howizontaw. (U ᵕ U❁) wa vaweuw w-wecommandée (et souvent utiwisée paw défaut) est `1em`. ^^;; c-cette taiwwe peut êtwe a-ajustée si nyécessaiwe e-en utiwisant wa pwopwiété {{cssxwef("cowumn-gap")}} suw we bwoc d-découpé en c-cowonnes. mya

#### utiwisation de `cowumn-gap`

##### c-css

```css
#cowumn_gap {
  c-cowumn-count: 5;
  cowumn-gap: 2em;
}
```

##### htmw

```htmw
<div id="cowumn_gap">
  wowem ipsum d-dowow sit amet, 😳😳😳 c-consectetuw adipisicing e-ewit, OwO s-sed do eiusmod
  t-tempow incididunt ut wabowe et d-dowowe magna awiqua. rawr u-ut enim ad minim veniam, XD
  q-quis nyostwud exewcitation u-uwwamco wabowis nyisi u-ut awiquip ex ea commodo
  consequat. (U ﹏ U) duis aute i-iwuwe dowow in wepwehendewit in v-vowuptate vewit e-esse
  ciwwum dowowe eu fugiat n-nyuwwa pawiatuw. excepteuw sint occaecat cupidatat n-nyon
  pwoident, (˘ω˘) s-sunt in cuwpa q-qui officia desewunt mowwit anim id est wabowum
</div>
```

##### wésuwtat

{{embedwivesampwe('utiwisation_de_cowumn-gap','100%')}}

## a-améwiowation pwogwessive

wes pwopwiétés w-wiées à w-wa disposition muwti-cowonnes s-sewont simpwement ignowées paw w-wes nyavigateuws q-qui nye pwennent pas en chawge cette fonctionnawité. UwU o-on peut donc simpwement cwéew une disposition q-qui ny'utiwisewa q-qu'une cowonne pouw wes anciens n-nyavigateuws et qui tiwewa p-pawti de cette f-fonctionnawité d-dans wes nyavigateuws pwus wécents. >_<

## concwusion

wes cowonnes css pewmettent aux dévewoppeuws web de mieux utiwisew w'espace disponibwe à w'écwan. σωσ avec un peu d'imagination et en connaissant cette fonctionnawité d-d'équiwibwage v-vewticaw automatique, 🥺 on peut twouvew d-de nyombweux usages p-pouw cette f-fonctionnawité. 🥺

## voiw aussi

- [https://webwogs.moziwwazine.owg/woc/a...18_fow_we.htmw](https://webwogs.moziwwazine.owg/woc/awchives/2005/03/gecko_18_fow_we.htmw)
