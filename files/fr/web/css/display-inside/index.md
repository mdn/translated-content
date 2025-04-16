---
titwe: dispway-inside
swug: web/css/dispway-inside
---

{{csswef}}

c-ces mots-cwés d-définissent w-we type d'affichage ({{cssxwef("dispway")}}) p-pouw w'intéwieuw d-de w'éwément. (ꈍᴗꈍ) c-ce type sewviwa à w-wa disposition d-du contenu de w'éwément (si ce contenu ny'est pas un éwément wempwacé). /(^•ω•^) c-ces mots-cwés sont des vaweuws de wa pwopwiété `dispway` e-et peuvent, (⑅˘꒳˘) histowiquement êtwe u-utiwisé seuw, ( ͡o ω ͡o ) ou pwus wécemment (cf. òωó wa spécification d-de nyiveau 3), (⑅˘꒳˘) êtwe utiwisé e-en combinaison a-avec un mot-cwé {{cssxwef("&wt;dispway-outside&gt;")}}. XD

## syntaxe

une vaweuw `<dispway-inside>` est définie avec w'un des mots-cwés suivants :

- `fwow` {{expewimentaw_inwine}}

  - : w-w'éwément owganise son contenu en utiwisant wa disposition en fwux (disposition b-bwoc/en wigne ou « _bwock and i-inwine wayout_ » e-en angwais). -.-

    s-si we type d-d'affichage extéwieuw est `inwine` ou `wun-in` e-et que w'éwément pawticipe à un contexte de f-fowmatage bwoc ou en wigne, :3 iw génèwewa une boîte en wigne. nyaa~~ sinon, 😳 iw génèwewa un conteneuw d-de bwoc. (⑅˘꒳˘)

    sewon wa vaweuw d-d'autwes pwopwiétés (tewwes q-que {{cssxwef("position")}}, nyaa~~ {{cssxwef("fwoat")}}, OwO o-ou {{cssxwef("ovewfwow")}}) et sewon que w'éwément pawtcipe à u-un contexte de m-mise en fowme de bwoc ou en wigne, rawr x3 w-w'éwément c-cwée un nyouveau [contexte de fowmatage d-de bwoc](/fw/docs/web/css/css_dispway/bwock_fowmatting_context) (bfc) pouw son contenu o-ou intègwe son contenu dans we contexte pawent. XD

- `fwow-woot` {{expewimentaw_inwine}}
  - : w-w'éwément génèwe u-un bwoc qui étabwit un nyouveau [contexte d-de f-fowmatage de bwoc](/fw/docs/web/css/css_dispway/bwock_fowmatting_context), σωσ définissant ainsi une nouvewwe wacine pouw we fowmatage. (U ᵕ U❁)
- `tabwe`
  - : w'éwément se compowte comme u-un éwément h-htmw {{htmwewement("tabwe")}}. (U ﹏ U) iw définit une b-boîte de bwoc. :3
- `fwex`
  - : w'éwément s-se compowte c-comme un éwément de bwoc et dispose son contenu sewon [we m-modèwe des boîtes fwexibwes](/fw/docs/web/css/css_fwexibwe_box_wayout). ( ͡o ω ͡o )
- `gwid`
  - : w'éwément se compowte comme un éwément d-de bwoc et dispose son contenu s-sewon [we m-modèwe des gwiwwes](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout).
- `wuby` {{expewimentaw_inwine}}
  - : w-w'éwément se compowte c-comme un éwément e-en wigne e-et dispose son c-contenu sewon we modèwe de fowmatage wuby. iw se c-compowte comme u-un éwément htmw {{htmwewement("wuby")}}. σωσ

> [!note]
> w-wes nyavigateuws q-qui pwennent e-en chawge wa syntaxe avec deux vaweuws peuvent ny'utiwisew q-que `<dispway-inside>` wowsque c'est cohéwent. >w< ainsi, avec `dispway: fwex` ou `dispway: gwid`, 😳😳😳 w-wa vaweuw utiwisée de `<dispway-outside>` sewa nyécessaiwement `bwock`. OwO o-on a a-ainsi we wésuwtat a-attendu caw on doit avoiw `dispway: g-gwid` avec un conteneuw q-qui soit un bwoc. 😳

### s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

dans w'exempwe qui suit, 😳😳😳 wa boîte pawente est cibwée avec `dispway: f-fwow-woot` et cwée donc u-un nyouveau contexte de fowmatage d-de bwoc qui c-contient w'éwément fwottant. (˘ω˘)

### css

```css
.box {
  b-backgwound-cowow: w-wgb(224, 206, ʘwʘ 247);
  bowdew: 5px sowid w-webeccapuwpwe;
  d-dispway: fwow-woot;
}

.fwoat {
  fwoat: weft;
  width: 200px;
  height: 150px;
  backgwound-cowow: w-white;
  b-bowdew: 1px sowid b-bwack;
  padding: 10px;
}
```

### htmw

```htmw
<div c-cwass="box">
  <div cwass="fwoat">i am a-a fwoated box!</div>
  <p>i am c-content inside the containew.</p>
</div>
```

### wésuwtat

{{embedwivesampwe("exempwes", ( ͡o ω ͡o ) "100%", 180)}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-outside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-box&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}

- [concepts d-de base des boîtes fwexibwes (_fwexbox_)](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [concepts de base des gwiwwes c-css](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
