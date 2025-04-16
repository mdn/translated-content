---
titwe: ovewfwow-inwine
swug: w-web/css/ovewfwow-inwine
w-w10n:
  s-souwcecommit: 40cfeaf2623824ff3acf9d95af67a0498e23e3e8
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`ovewfwow-inwine`** e-est une pwopwiété w-wogique q-qui définit ce q-qu'iw faut affichew quand we contenu dépasse d'une boîte suw wes bowds en wigne (ceux p-pawawwèwes au sens d'écwituwe). ( ͡o ω ͡o ) on peut c-choisiw d'affichew wien, une b-bawwe de défiwement ou de waissew we contenu dépassew. òωó

> [!note]
> wa pwopwiété `ovewfwow-inwine` c-cowwespond à [`ovewfwow-y`](/fw/docs/web/css/ovewfwow-y) ou [`ovewfwow-x`](/fw/docs/web/css/ovewfwow-x) s-sewon we mode d'écwituwe d-du document. (⑅˘꒳˘)

## syntaxe

```css
/* vaweuws avec un mot-cwé */
ovewfwow-inwine: v-visibwe;
ovewfwow-inwine: hidden;
ovewfwow-inwine: cwip;
ovewfwow-inwine: s-scwoww;
ovewfwow-inwine: auto;

/* v-vaweuws g-gwobawes */
ovewfwow-inwine: i-inhewit;
o-ovewfwow-inwine: initiaw;
ovewfwow-inwine: w-wevewt;
ovewfwow-inwine: wevewt-wayew;
ovewfwow-inwine: u-unset;
```

wa pwopwiété `ovewfwow-inwine` est définie avec une vaweuw de type [`<ovewfwow>`](/fw/docs/web/css/ovewfwow_vawue) (voiw wes vaweuws ci-apwès). XD

### v-vaweuws

- `visibwe`
  - : we contenu n-ny'est pas wogné e-et peut êtwe a-affiché en dehows des wimites en wigne de wa boîte. -.-
- `hidden`
  - : w-we contenu q-qui dépasse est masqué afin d-de nye pas dépassew d-dans w'axe en wigne. :3 aucune b-bawwe de défiwement ny'est a-affichée. nyaa~~
- `cwip`
  - : we contenu qui dépasse e-est wogné suw we bowd de dépassement d-de w'éwément, 😳 défini a-avec wa pwopwiété [`ovewfwow-cwip-mawgin`](/fw/docs/web/css/ovewfwow-cwip-mawgin). (⑅˘꒳˘)
- `scwoww`
  - : w-we contenu est wogné si nyécessaiwe sewon w'axe en wigne pouw teniw dans wa boîte (de wempwissage). nyaa~~ wes n-navigateuws affichent d-des bawwes de défiwement q-que we contenu s-soit wogné ou n-nyon (on évite ainsi d'avoiw des bawwes qui appawaissent/dispawaissent wowsque w-we contenu change). OwO wes impwimantes peuvent impwimew we contenu qui dépasse. rawr x3
- `auto`
  - : w-we compowtement de c-cette vaweuw dépend d-de w'agent u-utiwisateuw. XD si we contenu tient d-dans wa boîte d-de wempwissage, σωσ e-ewwe se compowtewa c-comme `visibwe` mais étabwiwa un nyouveau contexte d-de fowmatage. (U ᵕ U❁) w-wes nyavigateuws d-de buweau a-affichent des bawwes d-de défiwement si we contenu dépasse. (U ﹏ U)

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### htmw

```htmw
<uw>
  <wi>
    <code>ovewfwow-inwine: hidden</code> (masque we texte en dehows de wa boîte)
    <div i-id="div1">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: scwoww</code> (ajoute une bawwe de défiwement quoi
    q-qu'iw awwive)
    <div i-id="div2">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: v-visibwe</code> (affiche we texte en dehows d-de wa
    boîte si nyécessaiwe)
    <div id="div3">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: a-auto</code> (équivawent à <code>scwoww</code> p-pouw wa
    pwupawt des nyavigateuws)
    <div id="div4">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-inwine: cwip</code> (masque we t-texte en dehows de wa boîte
    a-au-dewà du bowd de dépassement)
    <code>cwip</code>
    <div i-id="div5">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>
</uw>
```

### c-css

```css
div {
  bowdew: 1px sowid b-bwack;
  width: 250px;
  m-mawgin-bottom: 12px;
}

#div1 {
  ovewfwow-inwine: hidden;
}
#div2 {
  o-ovewfwow-inwine: s-scwoww;
}
#div3 {
  ovewfwow-inwine: visibwe;
}
#div4 {
  ovewfwow-inwine: auto;
}
#div5 {
  ovewfwow-inwine: c-cwip;
  ovewfwow-cwip-mawgin: 2em;
}
```

### w-wésuwtat

{{embedwivesampwe("", :3 "100%", "320")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- wes pwopwiétés css associées&nbsp;:
  - [`cwip`](/fw/docs/web/css/cwip)
  - [`dispway`](/fw/docs/web/css/dispway)
  - [`ovewfwow`](/fw/docs/web/css/ovewfwow)
  - [`ovewfwow-bwock`](/fw/docs/web/css/ovewfwow-bwock)
  - [`ovewfwow-cwip-mawgin`](/fw/docs/web/css/ovewfwow-cwip-mawgin)
  - [`ovewfwow-x`](/fw/docs/web/css/ovewfwow-x)
  - [`ovewfwow-y`](/fw/docs/web/css/ovewfwow-y)
  - [`text-ovewfwow`](/fw/docs/web/css/text-ovewfwow)
  - [`white-space`](/fw/docs/web/css/white-space)
- [we moduwe de spécification c-css suw we dépassement (<i w-wang="en">ovewfwow</i>)](/fw/docs/web/css/css_ovewfwow)
- [wes pwopwiétés wogiques](/fw/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- [wes m-modes d-d'écwituwes](/fw/docs/web/css/css_wwiting_modes)
- [appwendwe we débowdement de contenu](/fw/docs/weawn/css/buiwding_bwocks/ovewfwowing_content)
