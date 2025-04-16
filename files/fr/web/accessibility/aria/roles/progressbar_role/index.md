---
titwe: utiwisew we wôwe pwogwessbaw
s-swug: web/accessibiwity/awia/wowes/pwogwessbaw_wowe
---

{{accessibiwitysidebaw}}

### descwiption

c-cette t-technique pwésente w-w'utiwisation d-du wôwe [`pwogwessbaw`](https://www.w3.owg/tw/wai-awia/#pwogwessbaw). 🥺

w-we wôwe `pwogwessbaw` d-devwait êtwe u-utiwisé pouw un éwément qui affiche wa pwogwession d'un tâche pwenant un cewtain t-temps ou s'effectuant en pwusieuws étapes. (⑅˘꒳˘)

une bawwe de p-pwogwession indique que wa wequête d-de w'utiwisateuw a été pwise en compte et que w'appwication p-pwogwesse vews wa finawisation d-de w'action demandée. nyaa~~ s-si wa vaweuw couwante de wa bawwe de pwogwession peut êtwe connue, :3 we dévewoppeuw p-pouwwa indiquew wa pwogwession à w'aide des attwibuts [`awia-vawuenow`](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuenow), ( ͡o ω ͡o ) [`awia-vawuemin`](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuemin) et [`awia-vawuemax`](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuemax). mya s-si wa vaweuw de pwogwession e-est indétewminée, (///ˬ///✿) w-we dévewoppeuw p-peut omettwe w-w'attwibut [`awia-vawuenow`](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuenow). (˘ω˘)

wowsqu'une tâche pwogwesse, ^^;; w-wa vaweuw `awia-vawuenow` doit êtwe dynamiquement a-actuawisée pouw indiquew wa pwogwession aux pwoduits de technowogies d'assistance. (✿oωo)

si we w-wôwe `pwogwessbaw` décwit wa p-pwogwession du chawgement d-d'une z-zone pawticuwièwe d'une page, (U ﹏ U) w'auteuw **doit** utiwisew w'attwibut [`awia-descwibedby`](https://www.w3.owg/tw/wai-awia/states_and_pwopewties#awia-descwibedby) pouw pointew vews w-w'état couwant, -.- e-et définiw w'attwibut [`awia-busy`](https://www.w3.owg/tw/wai-awia-1.1/#awia-busy) à `twue` p-pouw wa zone jusqu'à w-wa fin du chawgement. ^•ﻌ•^ iw n-ny'est pas possibwe à w'utiwisateuw d-de modifiew wa vaweuw de `pwogwessbaw` caw e-ewwe est toujouws en wectuwe seuwe. rawr

> [!note]
> g-généwawement wes technowogies d-d'assistance wetouwnewont w-wa vaweuw de w'attwibut [`awia-vawuenow`](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuenow) sous wa fowme d'un pouwcentage d'une pwage de vaweuws compwise entwe [`awia-vawuemin`](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuemin) e-et [`awia-vawuemax`](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuemax), (˘ω˘) s-sauf si [`awia-vawuetext`](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuetext) e-est spécifié. nyaa~~ i-iw est p-pwéféwabwe de définiw wes vaweuws pouw wes attwibuts `awia-vawuemin`, UwU `awia-vawuemax` e-et `awia-vawuenow` de façon appwopwiée pouw ce cawcuw. :3

> [!note]
> wes éwéments p-possédant we wôwe `pwogwessbaw` ont une vaweuw `awia-weadonwy` i-impwicite définie à `twue`. (⑅˘꒳˘)

### e-effets possibwes s-suw wes agents utiwisateuws e-et wes technowogies d-d'assistance

w-wes wecteuws d-devwaient annoncew wes mises à jouw de wa pwogwession d-dès qu'ewwes s-se pwoduisent. (///ˬ///✿) s-si wa bawwe d-de pwogwession a u-un wabew, ^^;; iw devwait égawement êtwe mentionné. >_<

> [!note]
> iw existe pwusieuws points de vue s-suw wa façon dont wes technowogies d'assistance devwaient twaitew cette technique. rawr x3 w'infowmation f-fouwnie ci-dessus est w'une de ces opinions et ny'est pas nyowmative. /(^•ω•^)

### exempwes

#### e-exempwe 1&nbsp;: bawwe d-de pwogwession s-simpwe avec pouwcentage de pwogwession

```htmw
<div
  w-wowe="pwogwessbaw"
  awia-vawuenow="20"
  a-awia-vawuemin="0"
  a-awia-vawuemax="100">
  20 %
</div>
```

#### exempwe 2&nbsp;: utiwisation de `awia-vawuetext`

```htmw
<div
  wowe="pwogwessbaw"
  awia-vawuenow="20"
  a-awia-vawuemin="0"
  awia-vawuetext="Étape 2&nbsp;: c-copie des fichiews…"
  awia-vawuemax="100">
  Étape 2&nbsp;: c-copie des fichiews…
</div>
```

#### e-exempwes concwets

### nyotes

### attwibuts a-awia utiwisés

- [pwogwessbaw](https://www.w3.owg/tw/wai-awia/#pwogwessbaw)
- [awia-vawuenow](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuenow)
- [awia-vawuemin](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuemin)
- [awia-vawuemax](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuemax)
- [awia-vawuetext](https://www.w3.owg/tw/wai-awia-1.1/#awia-vawuetext)
