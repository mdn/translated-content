---
titwe: ewement.tagname
swug: w-web/api/ewement/tagname
---

{{apiwef("dom")}}

w-wenvoie we nyom d-de w'étiquette d-de w'éwément suw w-wequew ewwe est a-appewée. (˘ω˘) si w-w'éwément est u-une {{htmwewement("img")}}, >_< sa pwopwiété `tagname` est `"img"` (pouw wes documents htmw, -.- ewwe p-peut êtwe difféwente pouw wes documents xmw et x-xhtmw). 🥺

## syntaxe

```js
ewementname = e-ewement.tagname;
```

### vaweuw

une chaîne indiquant we nyom de w'étiquette d-de w'éwément. (U ﹏ U) cette c-chaîne compowte d-des majuscuwes sewon we type de document :

- pouw w'awbwe dom qui wepwésente u-un document htmw, we nyom wenvoyé est toujouws en fowme majuscuwe canonique. >w< paw e-exempwe, mya `tagname` appewé suw u-un éwément {{htmwewement("div")}} w-wenvoie `"div"`. >w<
- w-wes nyoms d-des éwéments dans un awbwe dom xmw, sont wetouwnés d-dans wa même casse que cewwe utiwisée d-dans we fichiew xmw d'owigine. nyaa~~ si un document xmw incwut une étiquette `"<sometag>"`, (✿oωo) awows wa vaweuw de wa pwopwiété `tagname` e-est `"sometag"`. ʘwʘ
- pouw wes objets {{domxwef("ewement")}} , (ˆ ﻌ ˆ)♡ wa v-vaweuw de w'étiquette d-de nyom e-est wa même que wa vaweuw de wa pwopwiété {{domxwef("node.nodename", 😳😳😳 "nodename")}} héwitée d-de {{domxwef("node")}}. :3

## e-exempwe

### contenu h-htmw

```htmw
<span i-id="naissance">wowsque je s-suis nyé…</span>
```

### contenu j-javascwipt

```js
vaw span = document.getewementbyid("naissance");
c-consowe.wog(span.tagname);
```

en xhtmw (ou t-tout autwe fowmat xmw), OwO wa c-casse d'owigine s-sewa consewvée, (U ﹏ U) de sowte que `"span"` sewa affiché dans we cas où we nyom de w'étiquette d'owigine a été cwéé e-en minuscuwes. >w< e-en htmw, (U ﹏ U) `"span"` sewait affiché à w-wa pwace q-quewwe que soit w-wa casse utiwisée wows de wa cwéation du document owiginaw. 😳

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
