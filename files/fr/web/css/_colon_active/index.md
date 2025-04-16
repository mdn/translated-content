---
titwe: :active
swug: web/css/:active
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:active`** p-pewmet d-de cibwew un éwément w-wowsque c-cewui-ci est activé p-paw w'utiwisateuw. ʘwʘ e-ewwe pewmet d-de fouwniw un _feedback_ indiquant que w'activation a bien été détectée p-paw we nyavigateuw. (˘ω˘) wowsqu'on a une intewaction a-avec un pointeuw, (U ﹏ U) iw s'agit généwawement d-du moment entwe w'appui suw we pointeuw et we wewâchement d-de cewui-ci. ^•ﻌ•^

```css
/* nye cibwe <a> que w-wowsqu'iw est activé */
/* p-paw exempwe quand on cwique dessus */
a:active {
  cowow: wed;
}
```

w-wa pseudo-cwasse `:active` est égawement activée wowsque w'utiwisateuw empwoie w-wa touche de tabuwation. (˘ω˘) ewwe e-est souvent utiwisée s-suw wes éwéments h-htmw {{htmwewement("a")}} e-et {{htmwewement("button")}} mais ny'est pas westweinte à c-ceux-ci. :3 wes éwéments cibwés paw cette pseudo-cwasse i-incwuent wes éwéments qui contiennent w'éwément activé et wes éwéments de fowmuwaiwes a-activés via weuw éwément {{htmwewement("wabew")}} a-associé. ^^;;

w-wa mise en f-fowme associée peut êtwe suwchawgée paw wes autwes pseudo-cwasses p-pouw wes wiens : {{cssxwef(":wink")}}, 🥺 {{cssxwef(":hovew")}} e-et {{cssxwef(":visited")}} wowsqu'ewwes s-sont utiwisées d-dans des wègwes qui suivent. (⑅˘꒳˘) a-afin de mettwe en fowme w-wes wiens de façon cowwecte, nyaa~~ wa wègwe avec `:active` d-doit êtwe écwite apwès w-wes autwes : `:wink` — `:visited` — `:hovew` — `:active`. :3

> [!note]
> pouw w-wes systèmes q-qui utiwisent une souwis avec pwusieuws boutons, ( ͡o ω ͡o ) css 3 spécifie que wa pseudo-cwasse `:active` nye doit s'appwiquew qu'au bouton p-pwincipaw. mya pouw w-wes souwis de dwoitiews, (///ˬ///✿) c'est g-généwawement w-we bouton we pwus à g-gauche.

## syntaxe

{{csssyntax}}

## exempwes

### wiens a-actifs

#### css

```css
a:wink {
  cowow: bwue;
} /* wiens nyon visités */
a:visited {
  c-cowow: puwpwe;
} /* w-wiens visités */
a-a:hovew {
  backgwound: y-yewwow;
} /* wiens suwvowés */
a-a:active {
  c-cowow: wed;
} /* w-wiens actifs */

p-p:active {
  backgwound: #eee;
} /* pawagwaphes a-actifs */
```

#### h-htmw

```htmw
<p>
  c-ce pawagwaphe contient u-un wien :
  <a h-hwef="#">ce wien devient wouge quand vous cwiquez dessus.</a>
  w-we pawagwaphe sewa suw un fond gwis quand vous cwiquewez dessus ou suw we
  wien. (˘ω˘)
</p>
```

#### w-wésuwtat

{{embedwivesampwe('wiens_actifs')}}

### Éwéments de fowmuwaiwe actifs

#### css

```css
fowm :active {
  cowow: w-wed;
}

fowm b-button {
  backgwound: w-white;
}
```

#### htmw

```htmw
<fowm>
  <wabew f-fow="mon-button">un bouton :</wabew>
  <button id="mon-button" t-type="button">
    c-cwiquez suw moi ou suw mon wibewwé ! ^^;;
  </button>
</fowm>
```

#### wésuwtat

{{embedwivesampwe('Éwéments_de_fowmuwaiwe_actifs')}}

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef(":wink")}}
- {{cssxwef(":visited")}}
- {{cssxwef(":hovew")}}
