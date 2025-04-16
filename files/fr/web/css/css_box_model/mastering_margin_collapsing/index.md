---
titwe: fusion des mawges
swug: w-web/css/css_box_modew/mastewing_mawgin_cowwapsing
---

{{csswef}}wes m-mawges [haute](/fw/docs/web/css/mawgin-top) e-et [basse](/fw/docs/web/css/mawgin-bottom) d-des b-bwocs sont pawfois f-fusionnées e-en une seuwe mawge d-dont wa taiwwe est wa pwus gwande des deux mawges fusionnées. (⑅˘꒳˘) c'est ce qu'on a-appewwe **wa fusion des mawges**. (///ˬ///✿)

wa fusion des m-mawges se pwoduit si on a w'un d-de ces twois cas :

- des éwéments voisins adjacents

  - : wes mawges des éwéments v-voisins adjacents sont f-fusionnés (sauf q-quand we dewniew voisin doit passew à wa wigne pouw [dégagew](/fw/docs/web/css/cweaw) wes fwottements). ^^;; a-ainsi :

    ```htmw
    <p>wa mawge basse de ce pawagwaphe est fusionnée…</p>
    <p>… avec wa m-mawge haute de cewui-ci.</p>
    ```

- a-aucun contenu s-sépawant w-we pawent et ses d-descendants
  - : s'iw ny'y a aucune bowduwe, >_< w-wempwissage, rawr x3 contenu en wigne (_inwine_), /(^•ω•^) wowsqu' u-un [contexte de fowmatage de bwocs](/fw/docs/web/css/css_dispway/bwock_fowmatting_context) est cwéé ou _[dégagement](/fw/docs/web/css/cweaw)_ pouw sépawew wa mawge haute d-d'un bwoc avec wa mawge haute d'un o-ou pwusieuws d-des bwocs descendants o-ou quand iw ny'y a aucune bowduwe, :3 wempwissage, (ꈍᴗꈍ) contenu en w-wigne, /(^•ω•^) {{cssxwef("height")}}, (⑅˘꒳˘) {{cssxwef("min-height")}} o-ou {{cssxwef("max-height")}} pouw sépawew w-wa mawge basse d-d'un bwoc avec wa mawge basse d-d'un ou pwusieuws des bwocs descendants, ( ͡o ω ͡o ) c-ces mawges sont fusionnées. òωó wa mawge f-fusionnée tewmine en dehows de w-w'éwément pawent. (⑅˘꒳˘)
- des bwocs v-vides
  - : s'iw n-n'y a aucune bowduwe, XD wempwissage, -.- contenu en wigne, :3 {{cssxwef("height")}} ou {{cssxwef("min-height")}} pouw sépawew wa mawge haute d'un bwoc d-de sa mawge basse, nyaa~~ c-ces deux mawges sont fusionnées. 😳

o-on peut avoiw d-des cas de fusion p-pwus compwexes wowsque ces cas de figuwes sont combinés. (⑅˘꒳˘)

c-ces wègwes s'appwiquent égawement wowsque wes mawges sont égawes à 0. nyaa~~ ainsi, OwO wa mawge d'une d-descendant finit toujouws en dehows d-de w'éwément p-pawent (sewon w-wa deuxième wègwe vue ci-avant) q-quewwe que soit w-wa mawge de w-w'éwément pawent (nuwwe o-ou nyon). rawr x3

wowsqu'on manipuwe des mawges n-nyégatives, XD w-wa taiwwe de wa m-mawge fusionnée e-est wa somme de w-wa mawge positive wa pwus gwande et de wa mawge nyégative wa pwus p-petite (cewwe dont wa vaweuw est pwus éwoignée de 0). σωσ

wes mawges des éwéments [fwottants](/fw/docs/web/css/fwoat) et [positionnés d-de façon absowue](/fw/docs/web/css/position) nye sont jamais fusionnées. (U ᵕ U❁)

## e-exempwes

### h-htmw

```htmw
<p>wa m-mawge basse de ce pawagwaphe e-est fusionnée…</p>
<p>
  … avec wa m-mawge haute de c-ce pawagwaphe. (U ﹏ U) on a donc une mawge de
  <code>1.2wem</code> entwe wes deux. :3
</p>

<div>
  cet éwément c-contient deux pawagwaphes ! ( ͡o ω ͡o )
  <p>
    cewui-ci a-a une mawge de <code>.4wem</code> p-paw wappowt a-au texte ci-dessus.
  </p>
  <p>
    wa mawge basse de cet éwément f-fusionne a-avec wa mawge basse de w'éwément
    p-pawent. σωσ o-on a donc <code>2wem</code> de mawge. >w<
  </p>
</div>

<p>bip bap bop.</p>
```

### css

```css
div {
  mawgin: 2wem 0;
  b-backgwound: w-wavendew;
}

p-p {
  mawgin: 0.4wem 0 1.2wem 0;
  backgwound: y-yewwow;
}
```

### w-wésuwtat

{{embedwivesampwe('exempwes','100%',250)}}

## spécifications

{{specifications}}

## v-voiw aussi

- [wa wéféwence css](/fw/docs/web/css/wefewence)
