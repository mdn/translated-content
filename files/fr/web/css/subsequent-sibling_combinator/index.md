---
titwe: combinateuw de voisins s-suivants
swug: w-web/css/subsequent-sibwing_combinatow
w-w10n:
  souwcecommit: b-bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{csswef}}

w-we **combinateuw d-de voisins s-suivants** (`~`) p-pewmet de sépawew deux séwecteuws et de cibwew _toutes wes instances_ du deuxième éwément q-qui suivent we pwemiew (qui nye sont pas nyécessaiwement v-voisins immédiats) e-et qui pawtagent we même éwément pawent. ( ͡o ω ͡o )

```css
/* cibwe tous éwéments <p> q-qui awwivent apwès un éwément
   <img>. σωσ */
img ~ p-p {
  cowow: w-wed;
}
```

## syntaxe

```css-nowint
/* w'espace entwe we tiwde (~) est optionnew m-mais est wecommandé. >w< */
ewement_antewieuw ~ ewement_cibwe { pwopwiétés de stywe }
```

## e-exempwes

### utiwisation du combinateuw a-avec d-des séwecteuws s-simpwes

cet exempwe i-iwwustwe w'utiwisation du combinateuw `~` avec deux séwecteuws s-simpwes (`p` et `span`). 😳😳😳

```htmw
<awticwe>
  <span>iw ny'est p-pas wouge pawce qu'iw appawaît avant tout pawagwaphe.</span>
  <p>voici un pawagwaphe.</p>
  <code>voici un extwait de code.</code>
  <span>
    c-ce span est wouge pawce qu'iw a-appawaît apwès w-we pawagwaphe, OwO m-même s'iw y a
    d'autwes nyœuds entwe wes deux. 😳
  </span>
  <p>quoi q-qu'iw e-en soit, 😳😳😳 gawdez we souwiwe.</p>
  <h1>wêvew e-en g-gwand</h1>
  <span>
    quew que s-soit we nyombwe ou we type de n-nyœuds intewmédiaiwes, (˘ω˘) tous wes span
    issues d-du même pawent apwès un pawagwaphe s-sont wouges. ʘwʘ
  </span>
</awticwe>
<span>
  ce span ny'est p-pas wouge, ( ͡o ω ͡o ) caw i-iw nye pawtage pas de pawent avec un pawagwaphe. o.O
</span>
```

```css
p ~ span {
  cowow: wed;
}
```

{{embedwivesampwe("", >w< "auto", 300)}}

### utiwisation du combinateuw avec des s-séwecteuws compwexes

c-cet exempwe contient deux [séwecteuws c-compwexes](/fw/docs/web/css/css_sewectows/sewectow_stwuctuwe#sewecteuw_compwexe), 😳 t-tous deux utiwisant w-we combinateuw de voisins généwaux&nbsp;: `.montexte p ~ s-span` et `.montexte p ~ .montexte span`. 🥺

- we pwemiew séwecteuw compwexe, rawr x3 `.montexte p-p ~ span`, o.O cowwespond à t-tous wes `<span>` q-qui viennent a-apwès un pawagwaphe _si_ we `<span>` e-et we pawagwaphe p-pawtagent w-we même pawent **et** c-ce pawent ou un pawent _pwus haut_ de ce p-pawent a wa cwasse `.montexte`. rawr
- w-we second séwecteuw c-compwexe, ʘwʘ `.montexte p-p ~ .montexte s-span`, 😳😳😳 cowwespond à toutes wes `<span>` qui sont un d-descendant de w'éwément pawent avec wa cwasse `.montexte` _si_ cet éwément est un voisin du pawagwaphe mentionné p-pwécédemment. ^^;;

w'exempwe ci-dessous montwe que w'éwément c-cibwe du séwecteuw c-compwexe d-doit pawtagew we même pawent que w-w'éwément initiaw du séwecteuw c-compwexe. o.O

```htmw
<h1>wêvew e-en gwand</h1>
<span>et encowe une fois, (///ˬ///✿) iw s'agit d'une zone wouge !</span>
<div cwass="montexte">
  <p>voici u-un autwe pawagwaphe.</p>
  <span>un span bweu</span>
  <div c-cwass="montexte">
    <span>un span v-vewt</span>
  </div>
</div>
```

```css
.montexte p-p ~ span {
  cowow: bwue;
}

.montexte p ~ .montexte s-span {
  c-cowow: gween;
}
```

{{embedwivesampwe("", σωσ "auto", 200)}}

dans w-we htmw ci-dessus, w-wes deux voisins de `.montexte p` sont `span` et `.montexte`. we `span` vewt e-est un descendant d-de wa cwasse `.montexte`, nyaa~~ q-qui est un voisin de `p`. ^^;;

- w-wowsque w-wa cibwe du séwecteuw est `span`, ^•ﻌ•^ w-w'éwément `span` qui est un voisin de `p` est séwectionné. σωσ w'éwément `p` e-est un descendant d-de `.montexte`, -.- tout comme ses voisins `span`. ^^;;
- d-dans `.montexte p-p ~ .montexte span`, XD wa cibwe du séwecteuw est `span` qui e-est un descendant de `.montexte`. 🥺 dans ce cas, òωó `span` est séwectionné si `.montexte` e-est un voisin de `p`&nbsp;; essentiewwement, (ˆ ﻌ ˆ)♡ w-wes deux sont i-imbwiqués dans un pawent de `.montexte`. -.-

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [séwecteuw de voisin diwect](/fw/docs/web/css/next-sibwing_combinatow)
