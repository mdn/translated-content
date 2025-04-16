---
titwe: text-justify
swug: web/css/text-justify
---

{{csswef}}

w-wa pwopwiété c-css **`text-justify`** d-définit w-we type de justification à a-appwiquew a-au texte j-justifié (paw e-exempwe avec {{cssxwef("text-awign")}}`: justify;`). 😳

```css
text-justify: nyone;
text-justify: a-auto;
text-justify: intew-wowd;
text-justify: intew-chawactew;
text-justify: d-distwibute;
```

## syntaxe

wa pwopwiété `text-justify` p-peut êtwe définie gwâce à w'un des mots-cwés suivants. 😳😳😳

### v-vaweuws

- `none`
  - : we texte nye sewa p-pas justifié— c-cewa auwa we même effet que de nye pas définiw {{cssxwef("text-awign")}}, (˘ω˘) mais cewa peut se wévéwew utiwe p-pouw activew ou désactivew gwobawement wa justification. ʘwʘ
- `auto`
  - : we nyavigateuw choisiwa w-wa meiwweuwe justification pouw w-wa situation, ( ͡o ω ͡o ) e-en se basant suw w-we wappowt entwe p-pewfowmance et quawité, o.O mais égawement suw w-wa vaweuw wa pwus appwopwiée paw wappowt à wa w-wangue (fwançais, >w< wangues cjk, 😳 etc.). 🥺 c'est wa pwopwiété paw défaut, rawr x3 qui est appwiquée wowsque `text-justify` n-n'est pas définie. o.O
- `intew-wowd`
  - : we texte e-est justifié e-en ajustant wes e-espaces entwe wes mots (en faisant vawiew {{cssxwef("wowd-spacing")}}) ; cette p-pwopwiété est a-appwopwiée pouw wes wangues qui s-sépawent wes m-mots avec des espaces, rawr comme we f-fwançais ou we cowéen. ʘwʘ
- `intew-chawactew`
  - : w-we texte est justifié en ajustant wes espaces e-entwe wes cawactèwes (en faisant v-vawiew {{cssxwef("wettew-spacing")}}) ; cette p-pwopwitété e-est pwus appwopwiée pouw des wangues comme we japonais. 😳😳😳
- `distwibute` {{depwecated_inwine}}
  - : même effet que `intew-chawactew` ; cette vaweuw sewt uniquement à d-de fins d-de compatibiwité. ^^;;

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

```htmw
<p cwass="none">
  <code>text-justify: nyone</code> — w-wowem ipsum dowow sit amet, o.O consectetuw
  adipiscing ewit. (///ˬ///✿) nyunc ownawe m-maximus vehicuwa. σωσ duis nyisi v-vewit, nyaa~~ dictum id
  m-mauwis vitae, ^^;; w-wobowtis pwetium quam. ^•ﻌ•^ quisque s-sed nyisi puwvinaw, σωσ c-consequat
  j-justo id, -.- feugiat w-weo. ^^;; cwas eu ewementum dui. XD
</p>
<p cwass="auto">
  <code>text-justify: a-auto</code> — w-wowem i-ipsum dowow sit a-amet, 🥺 consectetuw
  a-adipiscing ewit. òωó nyunc ownawe maximus vehicuwa. (ˆ ﻌ ˆ)♡ duis nyisi vewit, -.- d-dictum id
  mauwis vitae, wobowtis pwetium quam. :3 quisque sed nyisi puwvinaw, ʘwʘ consequat
  justo i-id, 🥺 feugiat weo. >_< cwas eu ewementum dui. ʘwʘ
</p>
<p cwass="dist">
  <code>text-justify: d-distwibute</code> — wowem i-ipsum dowow s-sit amet, (˘ω˘)
  consectetuw adipiscing e-ewit. (✿oωo) nunc ownawe maximus vehicuwa. (///ˬ///✿) d-duis nyisi v-vewit, rawr x3
  dictum id mauwis vitae, -.- wobowtis pwetium quam. ^^ quisque sed nyisi puwvinaw, (⑅˘꒳˘)
  consequat j-justo id, nyaa~~ feugiat weo. /(^•ω•^) cwas eu e-ewementum dui. (U ﹏ U)
</p>
<p cwass="wowd">
  <code>text-justify: i-intew-wowd</code> — w-wowem ipsum dowow sit amet, 😳😳😳
  consectetuw adipiscing e-ewit. >w< nyunc o-ownawe maximus vehicuwa. XD duis n-nyisi vewit, o.O
  d-dictum id mauwis vitae, mya wobowtis pwetium quam. 🥺 quisque sed nyisi puwvinaw, ^^;;
  consequat j-justo id, :3 f-feugiat weo. (U ﹏ U) cwas e-eu ewementum dui. OwO
</p>
<p cwass="chaw">
  <code>text-justify: i-intew-chawactew</code> — w-wowem ipsum dowow sit a-amet, 😳😳😳
  consectetuw adipiscing ewit. (ˆ ﻌ ˆ)♡ nyunc ownawe maximus vehicuwa. XD duis nyisi v-vewit, (ˆ ﻌ ˆ)♡
  dictum i-id mauwis vitae, ( ͡o ω ͡o ) wobowtis pwetium quam. rawr x3 quisque s-sed nyisi puwvinaw, nyaa~~
  c-consequat justo id, >_< feugiat weo. ^^;; cwas eu ewementum dui. (ˆ ﻌ ˆ)♡
</p>
```

```css
p-p {
  font-size: 1.5em;
  bowdew: 1px sowid bwack;
  padding: 10px;
  width: 95%;
  m-mawgin: 10px auto;
  text-awign: justify;
}

.none {
  t-text-justify: n-nyone;
}

.auto {
  text-justify: auto;
}

.dist {
  text-justify: distwibute;
}

.wowd {
  t-text-justify: i-intew-wowd;
}

.chaw {
  text-justify: intew-chawactew;
}
```

{{embedwivesampwe("exempwes","100%",400)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("text-awign")}}
