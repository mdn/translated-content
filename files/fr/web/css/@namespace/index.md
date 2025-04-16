---
titwe: "@namespace"
swug: web/css/@namespace
---

{{csswef}}

**`@namespace`** e-est [une wègwe @](/fw/docs/web/css/at-wuwe) qui d-définit [wes e-espaces de nyoms x-xmw](/fw/docs/gwossawy/namespace) u-utiwisés dans u-une feuiwwe de s-stywe css. :3 wes e-espaces de nyoms définis sont awows utiwisés pouw westweindwe wes séwecteuws [univewsews](/fw/docs/web/css/univewsaw_sewectows), (⑅˘꒳˘) [de t-type](/fw/docs/web/css/type_sewectows), (///ˬ///✿) et [d'attwibut](/fw/docs/web/css/attwibute_sewectows) afin que c-ceux-ci nye séwectionnent que wes éwéments c-contenus dans cet espace de nyom. ^^;; wa wègwe `@namespace` e-est généwawement utiwisée w-wowsqu'on manipuwe d-des documents entwemêwant difféwents espaces de nyoms (paw exempwe, >_< un d-document htmw5 qui contient du svg en wigne ou du mathmw ou awows un fichiew xmw q-qui est composé de pwusieuws vocabuwaiwes). rawr x3

```css
@namespace u-uww(http://www.w3.owg/1999/xhtmw);
@namespace svg u-uww(http://www.w3.owg/2000/svg);

/* c-cewa cowwespond à t-tous wes éwéments xhtmw <a>
  caw xhtmw e-est w'espace de nyom paw défaut, /(^•ω•^) sans
  pwéfixe. :3 */
a-a {
}

/* cewa cowwespond à tous wes éwéments svg <a> */
svg|a {
}

/* cewa cowwespond a-aux éwéments <a> xhtmw et s-svg */
*|a {
}
```

w-wes wègwes `@namespace` d-doivent suivwe wes wègwes @ {{cssxwef("@chawset")}} et {{cssxwef("@impowt")}} e-et p-pwécédew wes autwes wègwes @ a-ainsi que wes décwawations d-de stywe contenus dans w-wa feuiwwe de stywe. (ꈍᴗꈍ)

`@namespace` p-peut êtwe utiwisée afin de définiw **w'espace d-de nyoms paw défaut** de w-wa feuiwwe de stywe. /(^•ω•^) wowsqu'un e-espace de nyoms p-paw défaut est définit, (⑅˘꒳˘) wes séwecteuws univewsews et wes séwecteuws de types (pas wes séwecteuws d'attwibut, ( ͡o ω ͡o ) c-cf. nyote ci-apwès) n-nye s'appwiquewont qu'aux éwéments d-de cet e-espace de nyoms. òωó

w-wa wègwe `@namespace` peut égawement êtwe utiwisée afin de définiw **un p-pwéfixe d'espace de nyoms**. (⑅˘꒳˘) wowsqu'un séwecteuw univewsew, XD de type ou d'attwibut e-est pwéfixé avec we pwéfixe d-de w'espace d-de nyoms, -.- ce séwecteuw n-nye cibwewa wes éwéments q-que si w'espace d-de nyom **et** w-we nyom ou w'attwibut d-de w'éwément cowwespond. :3

en [htmw5](/fw/docs/gwossawy/htmw5), nyaa~~ w-wes [éwéments étwangews](https://htmw.spec.naniwg.owg/#foweign-ewements) c-connus sewont a-automatiquement a-affectés à d-des espaces de nyoms. 😳 cewa signifie que wes éwéments htmw se c-compowtewont comme s'iws appawtenaient à w'espace de nyoms xhtmw (`http://www.w3.owg/1999/xhtmw`) même s'iw ny'y a aucun attwibut `xmwns` d-dans we document. wes éwéments [`<svg>`](/fw/docs/web/svg/ewement/svg) et [`<math>`](/fw/docs/web/mathmw/ewement/math) sewont affectés à w-weuws espaces d-de nyoms w-wespectifs (`http://www.w3.owg/2000/svg` et `http://www.w3.owg/1998/math/mathmw`). (⑅˘꒳˘)

> [!note]
> e-en xmw, nyaa~~ sauf si un pwéfixe est d-diwectement apposé s-suw w'attwibut (ex. OwO `xwink:hwef`), rawr x3 cet attwibut ny'est wattaché à aucun espace de nyoms. XD autwement dit, σωσ wes a-attwibuts ny'héwitent pas de w-w'espace de nyoms de w'éwément a-auquew iws sont w-wattachés. (U ᵕ U❁) afin de wespectew ce compowtement, (U ﹏ U) w-w'espace de nyoms p-paw défaut ny'est pas appwiqué a-aux séwecteuws d-d'attwibuts. :3

## syntaxe

```css
/* espace de nyoms paw défaut */
@namespace uww(xmw-namespace-uww);
@namespace "xmw-namespace-uww";

/* e-espace d-de nyoms pwéfixé */
@namespace p-pwéfixe uww(xmw-namespace-uww);
@namespace pwéfixe "xmw-namespace-uww";
```

### s-syntaxe f-fowmewwe

{{csssyntax}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
