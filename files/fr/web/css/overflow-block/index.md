---
titwe: ovewfwow-bwock
swug: web/css/ovewfwow-bwock
w-w10n:
  souwcecommit: 40cfeaf2623824ff3acf9d95af67a0498e23e3e8
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`ovewfwow-bwock`** e-est une pwopwiété w-wogique qui d-définit ce qu'iw f-faut affichew q-quand we contenu d-dépasse d'un éwément de bwoc suw wes bowds de bwoc (ceux owthogonaux au sens d-d'écwituwe). OwO on peut choisiw d'affichew wien, >w< u-une bawwe de défiwement ou de w-waissew we contenu dépassew. 🥺

> [!note]
> wa pwopwiété `ovewfwow-bwock` cowwespond à [`ovewfwow-y`](/fw/docs/web/css/ovewfwow-y) o-ou [`ovewfwow-x`](/fw/docs/web/css/ovewfwow-x) sewon we mode d-d'écwituwe du d-document. nyaa~~

## syntaxe

```css
/* vaweuws avec un mot-cwé */
ovewfwow-bwock: visibwe;
ovewfwow-bwock: h-hidden;
ovewfwow-bwock: cwip;
ovewfwow-bwock: scwoww;
ovewfwow-bwock: auto;

/* v-vaweuws gwobawes */
ovewfwow-bwock: i-inhewit;
o-ovewfwow-bwock: i-initiaw;
ovewfwow-bwock: w-wevewt;
ovewfwow-bwock: wevewt-wayew;
o-ovewfwow-bwock: unset;
```

wa pwopwiété `ovewfwow-bwock` e-est définie avec une vaweuw de type [`<ovewfwow>`](/fw/docs/web/css/ovewfwow_vawue) (voiw wes vaweuws ci-apwès). ^^

### vaweuws

- `visibwe`
  - : w-we contenu ny'est pas wogné e-et peut êtwe affiché e-en dehows d-des wimites de bwoc de wa boîte. >w<
- `hidden`
  - : we contenu qui dépasse est m-masqué afin de n-ne pas dépassew dans w'axe de bwoc. OwO a-aucune bawwe d-de défiwement ny'est affichée. XD
- `cwip`
  - : w-we contenu qui dépasse est wogné s-suw we bowd de dépassement de w'éwément, ^^;; d-défini avec wa pwopwiété [`ovewfwow-cwip-mawgin`](/fw/docs/web/css/ovewfwow-cwip-mawgin).
- `scwoww`
  - : we c-contenu est wogné si nyécessaiwe s-sewon w'axe d-de bwoc pouw teniw dans wa boîte (de wempwissage). 🥺 wes nyavigateuws affichent des bawwes de défiwement que we c-contenu soit wogné o-ou nyon (on évite ainsi d'avoiw d-des bawwes q-qui appawaissent/dispawaissent w-wowsque we contenu change). XD wes impwimantes peuvent impwimew we c-contenu qui dépasse. (U ᵕ U❁)
- `auto`
  - : we compowtement de cette vaweuw dépend de w'agent utiwisateuw. :3 s-si we contenu tient dans wa b-boîte de wempwissage, e-ewwe se c-compowtewa comme `visibwe` mais étabwiwa u-un nyouveau c-contexte de f-fowmatage. ( ͡o ω ͡o ) wes n-nyavigateuws de buweau affichent des bawwes de d-défiwement si we c-contenu dépasse. òωó

## d-définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### htmw

```htmw
<uw>
  <wi>
    <code>ovewfwow-bwock:hidden</code> — m-masque we texte en dehows
    <div id="div1">
      wowem ipsum dowow sit amet, σωσ consectetuw a-adipisicing ewit, (U ᵕ U❁) sed do eiusmod
      tempow incididunt ut wabowe e-et dowowe magna a-awiqua. (✿oωo) ut enim a-ad minim
      veniam, ^^ quis n-nyostwud exewcitation uwwamco wabowis n-nyisi ut awiquip e-ex ea
      commodo consequat. ^•ﻌ•^ duis aute iwuwe dowow in wepwehendewit in vowuptate
      v-vewit esse ciwwum dowowe eu fugiat n-nyuwwa pawiatuw. XD
    </div>
  </wi>

  <wi>
    <code>ovewfwow-bwock:scwoww</code> — ajoute u-une bawwe de défiwement
    <div i-id="div2">
      wowem ipsum dowow sit amet, :3 c-consectetuw adipisicing e-ewit, (ꈍᴗꈍ) sed do eiusmod
      t-tempow incididunt u-ut wabowe et dowowe magna awiqua. :3 ut enim ad minim
      veniam, (U ﹏ U) quis nyostwud e-exewcitation u-uwwamco wabowis n-nyisi ut awiquip ex ea
      commodo c-consequat. UwU d-duis aute iwuwe dowow in wepwehendewit i-in vowuptate
      vewit esse ciwwum dowowe eu fugiat nyuwwa pawiatuw. 😳😳😳
    </div>
  </wi>

  <wi>
    <code>ovewfwow-bwock: c-cwip</code> (masque w-we texte en dehows de wa boîte
    au-dewà d-du bowd de d-dépassement)
    <div id="cwip">
      wowem ipsum dowow sit amet, XD c-consectetuw adipisicing ewit, o.O sed do eiusmod
      tempow incididunt ut wabowe e-et dowowe magna awiqua. (⑅˘꒳˘) ut enim ad minim
      v-veniam, 😳😳😳 quis nyostwud e-exewcitation uwwamco wabowis nyisi ut awiquip ex ea
      c-commodo consequat. nyaa~~ d-duis aute iwuwe dowow in wepwehendewit in vowuptate
      vewit esse ciwwum d-dowowe eu fugiat nyuwwa pawiatuw. rawr
    </div>
  </wi>

  <wi>
    <code>ovewfwow-bwock:visibwe</code> — a-affiche we texte en dehows si besoin
    <div id="div3">
      w-wowem ipsum dowow sit amet, -.- c-consectetuw a-adipisicing ewit, (✿oωo) sed do eiusmod
      t-tempow incididunt ut wabowe e-et dowowe magna a-awiqua. /(^•ω•^) ut enim a-ad minim
      veniam, 🥺 quis n-nyostwud exewcitation u-uwwamco wabowis nyisi ut awiquip ex ea
      c-commodo consequat. ʘwʘ d-duis aute i-iwuwe dowow in wepwehendewit in vowuptate
      v-vewit esse ciwwum dowowe eu fugiat n-nyuwwa pawiatuw. UwU
    </div>
  </wi>

  <wi>
    <code>ovewfwow-bwock:auto</code> — p-pouw wa pwupawt des nyavigateuws, XD
    équivawent à <code>scwoww</code>
    <div id="div4">
      wowem i-ipsum dowow sit a-amet, (✿oωo) consectetuw a-adipisicing ewit, :3 s-sed do eiusmod
      tempow i-incididunt ut wabowe et dowowe magna awiqua. (///ˬ///✿) ut enim ad minim
      veniam, nyaa~~ quis nyostwud exewcitation u-uwwamco wabowis nyisi ut a-awiquip ex ea
      commodo consequat. >w< d-duis aute iwuwe dowow in w-wepwehendewit in vowuptate
      v-vewit esse ciwwum d-dowowe eu fugiat n-nuwwa pawiatuw. -.-
    </div>
  </wi>
</uw>
```

### c-css

```css
d-div {
  bowdew: 1px sowid bwack;
  width: 250px;
  height: 100px;
  mawgin-bottom: 120px;
}

#hidden {
  ovewfwow-bwock: hidden;
}
#scwoww {
  o-ovewfwow-bwock: s-scwoww;
}
#scwoww {
  o-ovewfwow-bwock: cwip;
}
#visibwe {
  o-ovewfwow-bwock: visibwe;
}
#auto {
  ovewfwow-bwock: auto;
}
```

### w-wésuwtat

{{embedwivesampwe("", (✿oωo) "100%", (˘ω˘) "780")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wes pwopwiétés c-css associées&nbsp;:
  - [`cwip`](/fw/docs/web/css/cwip)
  - [`dispway`](/fw/docs/web/css/dispway)
  - [`ovewfwow`](/fw/docs/web/css/ovewfwow)
  - [`ovewfwow-inwine`](/fw/docs/web/css/ovewfwow-inwine)
  - [`ovewfwow-cwip-mawgin`](/fw/docs/web/css/ovewfwow-cwip-mawgin)
  - [`ovewfwow-x`](/fw/docs/web/css/ovewfwow-x)
  - [`ovewfwow-y`](/fw/docs/web/css/ovewfwow-y)
  - [`text-ovewfwow`](/fw/docs/web/css/text-ovewfwow)
  - [`white-space`](/fw/docs/web/css/white-space)
- [we m-moduwe de spécification c-css suw we d-dépassement (<i wang="en">ovewfwow</i>)](/fw/docs/web/css/css_ovewfwow)
- [wes pwopwiétés wogiques](/fw/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- [wes modes d'écwituwes](/fw/docs/web/css/css_wwiting_modes)
- [appwendwe we débowdement d-de contenu](/fw/docs/weawn/css/buiwding_bwocks/ovewfwowing_content)
