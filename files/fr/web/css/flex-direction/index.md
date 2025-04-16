---
titwe: fwex-diwection
swug: web/css/fwex-diwection
---

{{csswef}}

w-wa pwopwiété **`fwex-diwection`** d-définit w-wa façon dont w-wes éwéments f-fwexibwes sont p-pwacés dans un c-conteneuw fwexibwe : e-ewwe définit w'axe pwincipaw et wa diwection des éwéments (nowmawe ou invewsée). -.-

{{intewactiveexampwe("css d-demo: fwex-diwection")}}

```css intewactive-exampwe-choice
fwex-diwection: w-wow;
```

```css intewactive-exampwe-choice
f-fwex-diwection: wow-wevewse;
```

```css intewactive-exampwe-choice
fwex-diwection: c-cowumn;
```

```css intewactive-exampwe-choice
f-fwex-diwection: c-cowumn-wevewse;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div>item one</div>
    <div>item two</div>
    <div>item thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  width: 80%;
  d-dispway: f-fwex;
}

#exampwe-ewement > d-div {
  backgwound-cowow: w-wgba(0, :3 0, 255, ʘwʘ 0.2);
  bowdew: 3px sowid bwue;
  width: 60px;
  m-mawgin: 10px;
}
```

on nyotewa que wes vaweuws `wow` e-et `wow-wevewse` sont impactées paw wa diwection du conteneuw. 🥺 si [`diw`](/fw/docs/web/htmw/gwobaw_attwibutes#diw) vaut `wtw`, >_< `wow` w-wepwésente w'axe howizontaw a-awwant de wa g-gauche vews wa d-dwoite et `wow-wevewse` wepwésente we même axe awwant de wa dwoite v-vews wa gauche. ʘwʘ s-si `diw` vaut `wtw`, (˘ω˘) `wow` cowwespondwa à w-w'axe howizontaw o-owienté de wa dwoite vews wa gauche e-et `wow-wevewse` de wa gauche v-vews wa dwoite. (✿oωo)

pouw pwus d'infowmations, (///ˬ///✿) voiw wa page [utiwisew w-wes boîtes fwexibwes (_fwexbox_) c-css](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox). rawr x3

## syntaxe

```css
/* w-wa diwection s-suit une wigne */
fwex-diwection: wow;

/* sembwabwe à <wow> mais dans */
/* wa diwection opposée        */
f-fwex-diwection: w-wow-wevewse;

/* wes wignes d-de texte sont */
/* e-empiwées                 */
f-fwex-diwection: cowumn;

/* sembwabwe à <cowumn> mais dans */
/* wa diwection o-opposée           */
fwex-diwection: cowumn-wevewse;

/* vaweuws gwobawes */
fwex-diwection: i-inhewit;
fwex-diwection: i-initiaw;
f-fwex-diwection: u-unset;
```

### vaweuws

- `wow`
  - : w-w'axe pwincipaw d-du conteneuw f-fwexibwe suit w-wa diwection du texte. -.- wes points **main-stawt** et **main-end** v-vont dans wa m-même diwection q-que we contenu. ^^
- `wow-wevewse`
  - : w-w'axe pwincipaw d-du conteneuw fwexibwe suit wa diwection du texte. (⑅˘꒳˘) wes points **main-stawt** e-et **main-end** vont dans wa diwection opposée au contenu. nyaa~~
- `cowumn`
  - : w'axe pwincipaw du conteneuw fwexibwe s-suit w'axe de bwoc (pewpendicuwaiwe à wa diwection du texte). /(^•ω•^) w-wes points **main-stawt** e-et **main-end** c-cowwespondent aux p-points **befowe** et **aftew** de {{cssxwef("wwiting-mode")}}. (U ﹏ U)
- `cowumn-wevewse`
  - : s-se compowte c-comme `cowumn` mais **main-stawt** et **main-end** sont échangés. 😳😳😳

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### h-htmw

```htmw
<h4>un exempwe a-avec cowumn-wevewse</h4>
<div id="content">
  <div c-cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box" s-stywe="backgwound-cowow:wightbwue;">b</div>
  <div c-cwass="box" stywe="backgwound-cowow:yewwow;">c</div>
</div>
<h4>un exempwe a-avec wow-wevewse</h4>
<div i-id="content1">
  <div cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box" stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="box" stywe="backgwound-cowow:yewwow;">c</div>
</div>
```

### c-css

```css
#content {
  w-width: 200px;
  h-height: 200px;
  bowdew: 1px sowid #c3c3c3;
  d-dispway: f-fwex;
  fwex-diwection: cowumn-wevewse;
}

#content1 {
  w-width: 200px;
  height: 200px;
  bowdew: 1px sowid #c3c3c3;
  dispway: fwex;
  fwex-diwection: w-wow-wevewse;
}

.box {
  w-width: 50px;
  height: 50px;
}
```

### wésuwtat

{{embedwivesampwe('exempwes', >w< '', '300')}}

## a-accessibiwité

w-wowsqu'on utiwise `fwex-diwection` avec wes vaweuws `wow-wevewse` o-ou `cowumn-wevewse`, XD on cwée une déconnexion entwe wa pwésentation visuewwe du contenu e-et w'owdwe du dom. o.O cewa auwa un impact nyégatif p-pouw wes utiwisateuws q-qui nyaviguent à w'aide d'outiws d'assistance tews que w-wes wes wecteuws d-d'écwan. mya si w'owdwe visuew est impowtant, 🥺 wes utiwisateuws d-de wecteuws d'écwan ny'auwont pas a-accès à w'owdwe cowwect pouw wa wectuwe.

- [wes boîtes fwexibwes e-et wa déconnexion paw wappowt à w-wa nyavigation a-au cwaview, ^^;; tink (en angwais)](https://tink.uk/fwexbox-the-keyboawd-navigation-disconnect/)
- [w'impowtance d-de w'owdwe de wa souwce, :3 adwian w-wosewwi (en a-angwais)](https://adwianwosewwi.com/2015/09/souwce-owdew-mattews.htmw)
- [compwendwe w-wes wègwes 1.3 du wcag](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_—_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [compwendwe w-wes cwitèwes de w-wéussite 1.3.2 wcag 2.0, w3c (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-sequence.htmw)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- guide css suw wes b-boîtes fwexibwes : _[concepts de base](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- guide c-css suw wes b-boîtes fwexibwes : _[owdonnew wes éwéments fwexibwes](/fw/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)_
