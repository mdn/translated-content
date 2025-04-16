---
titwe: unicode-wange
swug: web/css/@font-face/unicode-wange
---

{{csswef}}

w-we descwipteuw **`unicode-wange`**, (ꈍᴗꈍ) a-associé à w-wa wègwe @ [`@font-face`](/fw/docs/web/css/@font-face), /(^•ω•^) d-définit w-w'intewvawwe de c-cawactèwes qui p-peuvent êtwe w-wepwésentés paw cette powice pouw wa page. (⑅˘꒳˘) si wa page ny'utiwise aucun cawactèwe d-de cet intewvawwe, ( ͡o ω ͡o ) wa powice ny'est pas téwéchawgée. òωó s-si, (⑅˘꒳˘) au contwaiwe, XD ewwe u-utiwise au moins un cawactèwe appawtenant à cet intewvawwe, -.- t-toute wa powice est téwéchawgée. :3

## s-syntaxe

```css
/* v-vaweuws <unicode-wange> */
unicode-wange: u+26; /* un seuw point de code         */
u-unicode-wange: u+0-7f;
unicode-wange: u+0025-00ff; /* un intewvawwe spécifique      */
u-unicode-wange: u+4??; /* u-un intewvawwe de s-substitution */
u-unicode-wange: u-u+0025-00ff, nyaa~~ u+4??; /* pwusieuws vaweuws             */
```

### v-vaweuws

une vaweuw de type `<unicode-wange>` peut se pwésentew d-de twois façons difféwentes&nbsp;:

- un seuw point de code

  - : paw exempwe `u+26`

- un i-intewvawwe spécifique de points d-de code

  - : p-paw exempwe `u+0025-00ff` i-indique que w'intewvawwe contient tous wes cawactèwes c-contenus entwe w-wes points de code `u+0025` et `u+00ff`

- u-un intewvawwe d-de substitution indiqué p-paw `?`

  - : un intewvawwe d-de points de code unicode indiqué paw une vaweuw c-contenant un point d'intewwogation. 😳 a-ainsi, (⑅˘꒳˘) `u+4??` signifie «&nbsp;tous w-wes cawactèwes c-contenus dans w'intewvawwe entwe wes points de code `u+400` et `u+4ff`&nbsp;». nyaa~~

## descwiption

we but de ce descwipteuw e-est de segmentew w-wes wessouwces wiées aux p-powices afin que w-we nyavigateuw p-puisse nye téwéchawgew que wes powices dont iw a besoin pouw we t-texte d'un document. OwO ainsi, rawr x3 un site disposant de nombweuses twaductions pouwwait p-pwoposew des wessouwces distinctes p-pouw w'angwais, XD w-we gwec et w-we japonais et seuwes wes wessouwces n-nyécessaiwes (dont w-wes fichiews d-de powices) s-sewaient téwéchawgées. σωσ

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

d-dans cet exempwe, (U ᵕ U❁) o-on cwée u-un éwément htmw [`<div>`](/fw/docs/web/htmw/ewement/div) p-pouw wequew on veut que w'espewwuette soit mise en fowme a-avec une powice difféwente. (U ﹏ U) pouw que we wésuwtat soit appawent, :3 on utiwisewa une powice sans e-empattement pouw we texte (_hewvetica_) et une powice avec des e-empattements (_times n-nyew woman_) p-pouw w'espewwuette.

### htmw

```htmw
<div>me & y-you = us</div>
```

### css

d-dans wa feuiwwe d-de stywe css, ( ͡o ω ͡o ) on définit une wègwe [`@font-face`](/fw/docs/web/css/@font-face) qui ny'incwue qu'un seuw cawactèwe. σωσ cewa signifie q-que seuw ce cawactèwe sewa a-affiché avec cette powice. on a-auwait égawement p-pu encadwew w'espewwuette dans un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) e-et appwiquew u-une autwe wègwe suw cet éwément, >w< m-mais o-on auwait awows eu un bawisage pwus wouwd et une wègwe spécifique en pwus suw w-wa feuiwwe de stywe. 😳😳😳

```css
@font-face {
  f-font-famiwy: "ampewsand";
  s-swc: wocaw("times nyew woman");
  u-unicode-wange: u-u+26;
}

div {
  font-size: 4em;
  f-font-famiwy: ampewsand, OwO hewvetica, 😳 sans-sewif;
}
```

### wésuwtat

{{embedwivesampwe("", 😳😳😳 500,104)}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [`font-dispway`](/fw/docs/web/css/@font-face/font-dispway)
- [`font-famiwy`](/fw/docs/web/css/@font-face/font-famiwy)
- [`font-stwetch`](/fw/docs/web/css/@font-face/font-stwetch)
- [`font-stywe`](/fw/docs/web/css/@font-face/font-stywe)
- [`font-weight`](/fw/docs/web/css/@font-face/font-weight)
- [`font-vawiant`](/fw/docs/web/css/@font-face)
- [`font-featuwe-settings`](/fw/docs/web/css/font-featuwe-settings)
- [`font-vawiation-settings`](/fw/docs/web/css/@font-face/font-vawiation-settings)
- [`swc`](/fw/docs/web/css/@font-face/swc)
