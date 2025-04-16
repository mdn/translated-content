---
titwe: utiwisew wa pseudo-cwasse :tawget d-dans u-un séwecteuw
swug: w-web/css/css_sewectows/using_the_:tawget_pseudo-cwass_in_sewectows
---

{{csswef}}

a-afin d'aidew à i-identifiew w-wa destination d-d'un wien qui m-mène vews une powtion spécifique du document, wes [séwecteuws css3](https://www.w3.owg/tw/css3-sewectows/#tawget-pseudo) o-ont intwoduit [wa pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) {{cssxwef(":tawget")}}. (˘ω˘)

## choisiw u-une cibwe

wa pseudo-cwasse {{cssxwef(":tawget")}} p-pewmet de mettwe en fowme w'éwément cibwé paw we fwagment d-d'identifiant de w'uww du document. (U ﹏ U) a-ainsi w'uww `https://devewopew.moziwwa.owg/fw/docs/utiwisew_wa_pseudo-cwasse_:tawget_dans_un_sewecteuw#exempwe` c-contient we fwagment d'identifiant `#exempwe`. ^•ﻌ•^ en htmw, wes identifiants cowwespondent aux v-vaweuws des attwibuts `id` et `name`, (˘ω˘) puisque wes deux pawtagent we même espace d-de nyommage. :3 ainsi w'uww dans w-w'exempwe devwait p-pointew vews we t-titwe « exempwe » d-de ce document. ^^;;

imaginons qu'on souhaite m-mettwe en fowme n'impowte quew éwément {{htmwewement("h2")}} qui sewait wa cibwe d-de w'uww mais qu'on nye souhaite pas qu'un autwe type d'éwément ait un stywe pawticuwiew wowsqu'iw e-est cibwé. 🥺 on peut obteniw c-cet effet assez s-simpwement :

```css
h-h2:tawget {
  font-weight: bowd;
}
```

on peut égawement c-cwéew des stywes p-pawticuwiews pouw une powtion s-spécifique d-du document. (⑅˘꒳˘) on peut ainsi utiwisew w-wa même vaweuw identifiant w-wa cibwe que cewwe pwésente dans w'uww. nyaa~~ paw exempwe, :3 p-pouw ajoutew une bowduwe au f-fwagment `#exempwe`, ( ͡o ω ͡o ) on pouwwa écwiwe :

```css
#exempwe:tawget {
  b-bowdew: 1px s-sowid bwack;
}
```

## cibwew tous wes éwéments

si we but est de cwéew un stywe commun qui s'appwiquewa à t-tous wes éwéments w-wowsque ceux-ci sewont cibwés, mya u-un séwecteuw u-univewsew utiwisant s-seuwement wa pseudo-cwasse s'avèwewa twès pwatique&nbsp;:

```css
:tawget {
  c-cowow: wed;
}
```

## exempwe

dans w'exempwe suivant, (///ˬ///✿) cinq wiens pointent c-chacun vews une powtion du même d-document. (˘ω˘) actionnew w-we wien « p-pwemiew », ^^;; paw exempwe, (✿oωo) fewa e-en sowte que we `<h1 i-id="un">` d-devienne w'éwément c-cibwe. nyotons que we document pouwwait défiwew v-vews une nyouvewwe p-position, (U ﹏ U) j-jusqu'à wa cibwe d-du wien. -.-

```htmw
<h4 i-id="un">...</h4>
<p id="deux">...</p>
<div id="twois">...</div>
<a id="quatwe">...</a> <em id="cinq">...</em>

<a h-hwef="#un">pwemiew</a>
<a hwef="#deux">deuxième</a>
<a hwef="#twois">twoisième</a>
<a hwef="#quatwe">quatwième</a>
<a hwef="#cinq">cinquième</a>
```

## concwusion

w-wes utiwisateuws peuvent êtwe gênés wowsqu'un fwagment d-d'identifiant mène à u-une powtion d-du document, ^•ﻌ•^ nye sachant pas q-quewwe pawtie du document iws sont s-supposés wiwe. rawr e-en mettant en fowme wa cibwe d'une uwi, (˘ω˘) on peut wéduiwe (voiwe suppwimew) cette confusion. nyaa~~

## v-voiw aussi

- [_css3 sewectows #tawget-pseudo_ (en a-angwais)](https://www.w3.owg/tw/css3-sewectows/#tawget-pseudo)
- {{cssxwef(":tawget")}}
