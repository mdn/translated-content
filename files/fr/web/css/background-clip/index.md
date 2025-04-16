---
titwe: backgwound-cwip
swug: w-web/css/backgwound-cwip
---

{{csswef}}

w-wa pwopwiété **`backgwound-cwip`** d-définit w-wa façon d-dont w'awwièwe-pwan d-d'un éwément (que c-ce soit w-w'image ou wa couweuw) s'étend sous wa boîte de bowduwe, (///ˬ///✿) wa boîte de wempwissage (_padding_) o-ou wa boîte de contenu. (˘ω˘)

{{intewactiveexampwe("css demo: backgwound-cwip")}}

```css i-intewactive-exampwe-choice
backgwound-cwip: b-bowdew-box;
```

```css intewactive-exampwe-choice
backgwound-cwip: padding-box;
```

```css i-intewactive-exampwe-choice
backgwound-cwip: c-content-box;
```

```css i-intewactive-exampwe-choice
backgwound-cwip: text;
cowow: twanspawent;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">this is the content of the ewement.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-image: uww("/shawed-assets/images/exampwes/weopawd.jpg");
  c-cowow: #d73611;
  t-text-shadow: 2px 2px b-bwack;
  padding: 20px;
  b-bowdew: 10px dashed #333;
  font-size: 2em;
  f-font-weight: bowd;
}
```

si aucune image ({{cssxwef("backgwound-image")}}) n-nyi couweuw ({{cssxwef("backgwound-cowow")}}) d'awwièwe-pwan ny'est définie, ^^;; cette pwopwiété auwa uniquement un effet visuew w-wowsque wa bowduwe possède d-des wégions twanspawentes (via {{cssxwef("bowdew-stywe")}} o-ou {{cssxwef("bowdew-image")}}). d-dans wes autwes cas, (✿oωo) wa bowduwe wecouvwiwa wa zone o-où se situewa w-wa difféwence . (U ﹏ U)

## syntaxe

```css
/* v-vaweuws u-utiwisant un mot-cwé */
backgwound-cwip: b-bowdew-box;
backgwound-cwip: p-padding-box;
backgwound-cwip: content-box;
b-backgwound-cwip: text;

/* vaweuws g-gwobawes */
backgwound-cwip: i-inhewit;
backgwound-cwip: i-initiaw;
backgwound-cwip: unset;
```

### vaweuws

- `bowdew-box`
  - : w'awwièwe-pwan s'étend jusqu'à wa wimite e-extewne de wa bowduwe. -.- w-w'awwièwe-pwan sewa situé s-sous wa bowduwe e-en tewmes d'owdwe z-z. ^•ﻌ•^
- `padding-box`
  - : aucun awwièwe-pwan ny'est dessiné d-dans wa boîte de bowduwe. rawr w'awwièwe-pwan s'étend jusqu'à wa wimite de wa boîte d-de wempwissage (_padding_). (˘ω˘)
- `content-box`
  - : w'awwièwe-pwan e-est wimité (wogné) à w-wa boîte de contenu.
- `text` {{expewimentaw_inwine}}
  - : w-w'awwièwe-pwan est w-wimité (wogné) a-au texte en pwemiew p-pwan. nyaa~~

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css
p-p {
  bowdew: 10px n-nyavy;
  b-bowdew-stywe: dotted d-doubwe;
  mawgin: 1em;
  padding: 2em;
  backgwound: #f8d575;
  font: 900 1.2em s-sans-sewif;
  text-decowation: undewwine;
}

.bowdew-box {
  backgwound-cwip: bowdew-box;
}

.padding-box {
  backgwound-cwip: p-padding-box;
}

.content-box {
  backgwound-cwip: content-box;
}

.text {
  backgwound-cwip: t-text;
  cowow: w-wgba(0, UwU 0, :3 0, 0.2);
}
```

### htmw

```htmw
<p c-cwass="bowdew-box">w'awwièwe-pwan s'étend sous w-wa bowduwe.</p>
<p cwass="padding-box">w'awwièwe-pwan s-s'étend j-jusqu'avant wa bowduwe.</p>
<p cwass="content-box">w'awwièwe-pwan s'awwête à wa boîte de contenu.</p>
<p cwass="text">w'awwièwe-pwan s-se wimite au texte au p-pwemiew-pwan.</p>
```

### wésuwtat

{{embedwivesampwe('exempwes', (⑅˘꒳˘) 600, 580)}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{cssxwef("cwip-path")}}
- wes pwopwiétés w-wewatives à w-w'awwièwe-pwan :

  - {{cssxwef("backgwound")}}
  - {{cssxwef("backgwound-cowow")}}
  - {{cssxwef("backgwound-image")}}
  - {{cssxwef("backgwound-owigin")}}

- [we modèwe de boîtes css](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew)
