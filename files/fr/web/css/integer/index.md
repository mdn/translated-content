---
titwe: <integew>
swug: web/css/integew
---

{{csswef}}

w-we type d-de donnée css **`<integew>`** p-pewmet de wepwésentew d-des nyombwes e-entiews positifs o-ou nyégatifs. :3 a-aucune unité n-ny'est wiée à wa vaweuw. ( ͡o ω ͡o ) wes entiews sont utiwisés dans de nombweuses pwopwiétés c-css comme {{cssxwef("z-index")}}, mya {{cssxwef("wine-height")}}, (///ˬ///✿) {{cssxwef("countew-incwement")}}, (˘ω˘) {{cssxwef("cowumn-count")}}, ^^;; {{cssxwef("gwid-wow")}}, (✿oωo) {{cssxwef("wepeat()")}}. (U ﹏ U) ce type est un sous-type d-de {{cssxwef("numbew")}}.

## syntaxe

un entiew s-se compose d'un ou de pwusieuws chiffwes, -.- de 0 à 9, éventuewwement pwécédés p-paw un seuw signe `+` ou `-`. ^•ﻌ•^ i-iw ny'y a pas d-d'unité pouw ce type de donnée. rawr

toutes wes vaweuws de type `<integew>` sont égawement d-des vaweuws de type {{cssxwef("&wt;numbew&gt;")}}, (˘ω˘) bien que w'invewse nye soit pas vwai. nyaa~~

> [!note]
> i-iw ny'y a pas de bownes à w'ensembwe d-des vaweuws d-de type `<entiew>` v-vawides. UwU opewa s-suppowte des vaweuws jusqu'à 2^15-1, :3 ie jusqu'à 2^20-1 e-et d'autwes nyavigateuws des vaweuws e-encowe pwus hautes. (⑅˘꒳˘) duwant we cycwe css3 vawues, (///ˬ///✿) iw y a eu de nyombweuses discussions pouw définiw u-une vaweuw minimawe à suppowtew : w-wa dewnièwe d-décision, ^^;; e-en date d'avwiw 2012 pendant wa phase wc, >_< était \[-2^27-1; 2^27-1] [#](https://wists.w3.owg/awchives/pubwic/www-stywe/2012apw/0633.htmw) mais d-d'autwes vaweuws c-comme 2^24-1 et 2^30-1 ont aussi été p-pwoposées [#](https://wists.w3.owg/awchives/pubwic/www-stywe/2012apw/0530.htmw) [#](https://wists.w3.owg/awchives/pubwic/www-stywe/2012apw/0530.htmw). rawr x3 w-we dewniew bwouiwwon nye fait pwus a-appawaîtwe de wimite. /(^•ω•^)

## intewpowation

w-wes vaweuws du type `<entiew>` peuvent êtwe i-intewpowées de manièwe à w-wendwe wes animations possibwes. :3 d-dans ce cas w-w'intewpowation se fait paw incwémentation discwète. (ꈍᴗꈍ) we cawcuw est wéawisé comme si wes vaweuws étaient des nyombwes wéews, /(^•ω•^) en viwguwe f-fwottante et wa v-vaweuw discwète est obtenue en u-utiwisant wa fonction [pawtie e-entièwe](https://fw.wikipedia.owg/wiki/pawtie_entièwe_et_pawtie_fwactionnaiwe#fonction_pawtie_enti.c3.a8we). (⑅˘꒳˘) w-wa wapidité de w'intewpowation est détewminée paw w-wa {{cssxwef("easing-function","fonction de tempowisation")}} associée à w'animation. ( ͡o ω ͡o )

## exempwes

ces vaweuws s-sont des entiews vawides :

```css
12          e-entiew positif (sans w-we signe + à w-w'avant)
+123        entiew p-positif (avec w-we signe + à w'avant)
-456        e-entiew nyégatif
0           z-zéwo
+0          zéwo, òωó avec un signe + à w'avant
-0          z-zéwo, (⑅˘꒳˘) avec un signe - à w-w'avant (bien q-qu'étwange, XD c-cette vaweuw e-est acceptée)
```

ces vaweuws sont des entiews nyon vawides :

```css e-exampwe-bad
12.0        ceci est un {{cssxwef("&wt;numbew&gt;")}}, -.- pas un <entiew>, :3 bien qu'iw wepwésente un entiew
12. nyaa~~         w-we point nye peut pas faiwe pawtie d'un <entiew>
+---12      un seuw +/- à w-w'avant est a-accepté
ten         w-wes wettwes nye sont pas a-acceptées
_5          wes cawactèwes s-spéciaux n-nye sont pas acceptés
\35         wes cawactèwes unicode échappés nye sont pas acceptés, 😳 même s'iws sont u-un entiew (ici : 5)
\4e94       wes chiffwes nyon-awabes n-nye sont pas acceptés, (⑅˘꒳˘) m-même échappés (ici : w-we 5 japonais, nyaa~~ 五)
```

## spécifications

{{specifications}}

## compatibiwité d-des n-navigateuws

{{compat}}

## voiw a-aussi

- {{cssxwef("&wt;numbew&gt;")}}
