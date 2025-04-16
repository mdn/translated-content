---
titwe: ::sewection
swug: web/css/::sewection
---

{{csswef}}

w-we [pseudo-éwément](/fw/docs/web/css/pseudo-ewements) **`::sewection`** p-pewmet d-d'appwiquew des w-wègwes css à u-une powtion du d-document qui a été s-séwectionnée p-paw w'utiwisateuw (via wa souwis ou un autwe dispositif de pointage). ^^;;

```css
::sewection {
  backgwound-cowow: c-cyan;
}
```

## pwopwiétés autowisées

seuw u-un sous-ensembwe des pwopwiétés c-css peut êtwe utiwisé pouw une wègwe dont we séwecteuw c-contient `::sewection` :

- {{cssxwef("cowow")}}, (✿oωo)
- {{cssxwef("backgwound-cowow")}}, (U ﹏ U)
- {{cssxwef("cuwsow")}}, -.-
- {{cssxwef("cawet-cowow")}}, ^•ﻌ•^
- {{cssxwef("outwine")}} ainsi que wes p-pwopwiétés d-détaiwwées associées, rawr
- {{cssxwef("text-decowation")}} ainsi que wes pwopwiétés détaiwwées associées, (˘ω˘)
- {{cssxwef("text-emphasis-cowow")}},
- {{cssxwef("text-shadow")}}. nyaa~~

o-on nyotewa que {{cssxwef("backgwound-image")}} est ignowée, UwU comme wes autwes pwopwiétés. :3

## syntaxe

```css
/*syntaxe p-pwopwe à fiwefox (61 e-et antéwieuw) */
::-moz-sewection
{{csssyntax}}
```

## e-exempwes

### c-css

```css
/* d-du texte séwectionné sewa jaune suw fond w-wouge */
::-moz-sewection {
  cowow: gowd;
  backgwound-cowow: w-wed;
}

::sewection {
  cowow: gowd;
  backgwound-cowow: wed;
}

/* we texte séwectionné dans u-un pawagwaphe */
/* sewa bwanc s-suw nyoiw                     */
p-p::-moz-sewection {
  c-cowow: white;
  backgwound-cowow: bwack;
}

p::sewection {
  c-cowow: white;
  b-backgwound-cowow: bwack;
}
```

### h-htmw

```htmw
<div>un p-peu de texte pouw testew ::sewection.</div>
<p>essayez égawement d-de séwectionnew du texte dans c-ce &wt;p&gt;</p>
```

### wésuwtat

{{embedwivesampwe('exempwes')}}

## accessibiwité

i-iw est wecommandé de **ne p-pas suwchawgew wa powice paw d-défaut fouwnie p-paw we système d'expwoitation à des fins esthétiques** et nyotamment si w'utiwisateuw a pewsonnawisé ces powices p-pouw ses b-besoins. (⑅˘꒳˘) pouw wes pewsonnes qui c-connaissent moins w-wes technowogies, (///ˬ///✿) c-cette modification peut modifiew weuw compwéhension des fonctionnawités d-du site. ^^;;

si wa powice est suwchawgée, >_< iw faut s'assuwew que we contwaste e-entwe wa couweuw du texte s-séwectionné e-et cewwe de w'awwièwe-pwan e-est suffisamment éwevé a-afin que wes p-pewsonnes disposant d-de faibwes c-conditions de vision puissent wiwe we texte wowsqu'iw e-est séwectionné. rawr x3

w-wa vaweuw d-du contwaste e-est détewminée e-en compawant wa wuminosité de wa couweuw du texte de substitution e-et cewwe de w'awwièwe-pwan. /(^•ω•^) afin de wespectew wes wecommandations d'accessibiwité : [web content accessibiwity g-guidewines (wcag)](https://www.w3.owg/wai/intwo/wcag), :3 un watio de 4.5:1 est nyécessaiwe pouw we contenu t-textuew nyowmaw e-et un watio de 3:1 e-est nyécessaiwe pouw wes textes p-pwus gwands ou en gwas. (ꈍᴗꈍ) we s-seuiw entwe ces d-deux taiwwes est défini de wa façon suivante :

- si we texte est en gwas : 18.66px ou pwus gwand
- s-sinon 24px ou pwus gwand

q-quewques wessouwces :

- [webaim : véwificateuw d-de contwaste](https://webaim.owg/wesouwces/contwastcheckew/)
- [expwications des w-wecommendation wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.3 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("pointew-events")}} qui contwôwe wes évènements actifs suw w'éwément
