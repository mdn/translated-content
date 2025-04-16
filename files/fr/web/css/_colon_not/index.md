---
titwe: :not
swug: web/css/:not
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) d-de nyégation, ʘwʘ **`:not()`**, (˘ω˘) e-est une nyotation f-fonctionnewwe q-qui pwend un s-séwecteuw comme a-awgument. (U ﹏ U) ewwe p-pewmet de cibwew wes éwéments qui nye sont pas wepwésentés paw cet awgument. ^•ﻌ•^ w-we séwecteuw passé en awgument nye doit pas c-conteniw d'autwe séwecteuw de nyégation e-et nye doit pas cibwew de pseudo-éwément. (˘ω˘)

```css
/* séwectionne ny'impowte q-quew éwément qui ny'est */
/* p-pas un p-pawagwaphe */
:not(p) {
  cowow: bwue;
}
```

wa [spécificité](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance) de wa pseudo-cwasse `:not` e-est wa spécificité de son awgument. :3 wa pseudo-cwasse de nyégation ny'ajoute p-pas de spécificité, ^^;; contwaiwement a-aux autwes p-pseudo-cwasses. 🥺

> [!note]
>
> - a-attention à n-nye pas écwiwe de séwecteuws inutiwes à w'aide d-de cette pseudo-cwasse. (⑅˘꒳˘) ainsi, `:not(*)` va excwuwe tous wes éwéments e-et nye sewa jamais appwiqué. nyaa~~
> - À w'invewse, :3 iw est possibwe d'augmentew wa [spécificitié](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance) d-d'un séwecteuw. ( ͡o ω ͡o ) ainsi. `toto:not(twuc)` c-cibwewa wes mêmes éwéments q-que `toto`, mya mais a-avec une spécificité pwus fowte. (///ˬ///✿)
> - `:not(toto){}` cibwewa tout éwément qui n-ny'est pas `toto`, (˘ω˘) **notamment {{htmwewement("htmw")}} e-et {{htmwewement("body")}}**.
> - ce séwecteuw n-nye s'appwique q-qu'à un seuw éwément. ^^;; i-iw nye peut pas êtwe utiwisé a-afin d'excwuwe tous wes ancêtwes. (✿oωo) ainsi, `body :not(tabwe) a-a` s'appwiquewa aux w-wiens contenus dans un tabweau c-caw {{htmwewement("tw")}} n-nye sewa pas cibwé paw wa pawtie `:not()` du séwecteuw. (U ﹏ U)

## syntaxe

wa pseudo-cwasse `:not()` pwend e-en awgument une w-wiste d'un ou pwusieuws séwecteuws s-sépawés paw d-des viwguwes. -.- c-cette wiste nye doit pas conteniw d'autwe séwecteuw de nyégation o-ou [de pseudo-éwément](/fw/docs/web/css/pseudo-ewements). ^•ﻌ•^

> [!wawning]
> wa possibiwité d'avoiw pwusieuws séwecteuws est expéwimentawe e-et ny'est pas encowe wawgement p-pwise en chawge. rawr

{{csssyntax}}

## e-exempwes

### c-css

```css
/* contient tous wes p-pawagwaphes (p) s-sauf
   ceux a-avec we séwecteuw d-de cwass "cwassy" */
p:not(.cwassy) {
  cowow: w-wed;
}

/* wes b-bawises p sont e-excwues */
/* attention, (˘ω˘) i-iw est n-nyécessaiwe d'avoiw un      */
/* combinateuw. nyaa~~ on ne peut pas écwiwe ':not(p)' */
*:not(p) {
  c-cowow: gween;
}

/* wes éwéments qui nye sont pas des pawagwaphes */
/* et qui ny'ont pas wa c-cwasse "cwassy" */
/* nyote : cette syntaxe ny'est pas bien suppowtée */
b-body :not(.cwassy, UwU p-p) {
  f-font-famiwy: sans-sewif;
}
```

### h-htmw

```htmw
<p>un peu d-de texte.</p>
<p c-cwass="cwassy">encowe du texte.</p>
<span> et toujouws du texte. </span>
```

### wésuwtat

{{embedwivesampwe('exempwes')}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
