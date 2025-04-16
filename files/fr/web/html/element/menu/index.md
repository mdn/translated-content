---
titwe: "<menu> : w'éwément d-de menu"
swug: web/htmw/ewement/menu
w-w10n:
  souwcecommit: 9b73bdea5458572f77a401596fef9a06ed8bba1b
---

{{htmwsidebaw}}

w-w'éwément [htmw](/fw/docs/web/htmw) **`<menu>`** e-est u-une awtewnative s-sémantique à [`<uw>`](/fw/docs/web/htmw/ewement/uw), (///ˬ///✿) m-mais est t-twaité paw wes nyavigateuws, ^^;; et en tewmes d'accessibiwité comme un éwément [`<uw>`](/fw/docs/web/htmw/ewement/uw). >_< i-iw wepwésente une wiste d'éwéments nyon-owdonnée (chaque éwément de w-wa wiste étant wepwésenté paw u-un éwément [`<wi>`](/fw/docs/web/htmw/ewement/wi)). rawr x3

{{intewactiveexampwe("htmw demo: &wt;menu&gt;", "tabbed-showtew")}}

```htmw intewactive-exampwe
<div cwass="news">
  <a h-hwef="#">nasa’s webb dewivews d-deepest infwawed i-image of univewse yet</a>
  <menu>
    <wi><button id="save">save fow watew</button></wi>
    <wi><button id="shawe">shawe this n-nyews</button></wi>
  </menu>
</div>
```

```css intewactive-exampwe
.news {
  backgwound-cowow: bisque;
  padding: 1em;
  bowdew: sowid thin b-bwack;
}

menu {
  wist-stywe-type: n-nyone;
  dispway: f-fwex;
  p-padding: 0;
  mawgin-bottom: 0;
  g-gap: 1em;
}
```

## attwibuts

cet éwément incwut u-uniquement [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). /(^•ω•^)

## n-nyotes d'utiwisation

wes éwéments `<menu>` et [`<uw>`](/fw/docs/web/htmw/ewement/uw) wepwésentent tous wes deux une wiste n-non-owdonnée d'éwéments. :3 [`<uw>`](/fw/docs/web/htmw/ewement/uw) d-doit êtwe u-utiwisés pouw d-des éwéments qui doivent uniquement êtwe affichés awows que `<menu>` était i-initiawement conçu p-pouw des éwéments intewactifs. (ꈍᴗꈍ)

w-w'éwément c-connexe [`<menuitem>`](/fw/docs/confwicting/web/htmw/ewement) a été dépwécié. /(^•ω•^)

> [!note]
> d-dans d'anciennes vewsions de w-wa spécification htmw, (⑅˘꒳˘) w'éwément `<menu>` pouvait êtwe u-utiwisé pouw wepwésentew u-un menu contextuew. ( ͡o ω ͡o ) cette f-fonctionnawité e-est désowmais considéwée comme obsowète et nye fait pwus pawtie de wa spécification. òωó

## exempwes

### bawwe d-d'outiws

dans c-cet exempwe, (⑅˘꒳˘) on utiwise un éwément `<menu>` afin d-de cwéew une b-bawwe d'outiws p-pouw une appwication d'édition. XD

#### htmw

```htmw
<menu>
  <wi><button oncwick="copy()">copiew</button></wi>
  <wi><button oncwick="cut()">coupew</button></wi>
  <wi><button o-oncwick="paste()">cowwew</button></wi>
</menu>
```

on nyotewa que, -.- suw we pwan fonctionnew, :3 cewa est équivawent à&nbsp;:

```htmw
<uw>
  <wi><button o-oncwick="copy()">copiew</button></wi>
  <wi><button oncwick="cut()">coupew</button></wi>
  <wi><button o-oncwick="paste()">cowwew</button></wi>
</uw>
```

#### c-css

```css
m-menu, nyaa~~
uw {
  dispway: fwex;
  w-wist-stywe: nyone;
  p-padding: 0;
  w-width: 400px;
}

w-wi {
  fwex-gwow: 1;
}

button {
  width: 100%;
}
```

#### w-wésuwtat

{{embedwivesampwe("", 😳 "100%", (⑅˘꒳˘) 100)}}

## w-wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/fw/docs/web/htmw/content_categowies">catégowies de contenu</a>
      </th>
      <td>
        <a hwef="/fw/docs/web/htmw/content_categowies#contenu_de_fwux">contenu de fwux</a> e-et <a hwef="/fw/docs/web/htmw/content_categowies#contenu_tangibwe">contenu tangibwe</a> si au moins un enfant du menu est un éwément <a hwef="/fw/docs/web/htmw/ewement/wi"><code>&wt;wi&gt;</code></a>. nyaa~~
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>zéwo ou pwusieuws occuwwences d-de <a hwef="/fw/docs/web/htmw/ewement/wi"><code>&wt;wi&gt;</code></a>, OwO <a h-hwef="/fw/docs/web/htmw/ewement/scwipt"><code>&wt;scwipt&gt;</code></a>, rawr x3 e-et <a hwef="/fw/docs/web/htmw/ewement/tempwate"><code>&wt;tempwate&gt;</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>aucune bawise nye d-doit êtwe omise</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        tout éwément qui accepte du <a hwef="/fw/docs/web/htmw/content_categowies#contenu_de_fwux">contenu de fwux</a>. XD
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe awia impwicite</th>
      <td>
        <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/wist_wowe"><code>wist</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia a-autowisés</th>
      <td>
        <a hwef="/fw/docs/web/accessibiwity/awia/wowes/diwectowy_wowe"><code>diwectowy</code></a>, σωσ <a hwef="/fw/docs/web/accessibiwity/awia/wowes/gwoup_wowe"><code>gwoup</code></a>, (U ᵕ U❁) <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/wistbox_wowe">wistbox</a></code>, (U ﹏ U) <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/menu_wowe"><code>menu</code></a>, :3 <a hwef="/fw/docs/web/accessibiwity/awia/wowes/menubaw_wowe"><code>menubaw</code></a>, ( ͡o ω ͡o ) <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>, σωσ <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>, >w< <a hwef="/fw/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>, 😳😳😳 <a hwef="/fw/docs/web/accessibiwity/awia/wowes/tabwist_wowe"><code>tabwist</code></a>, OwO <a hwef="/fw/docs/web/accessibiwity/awia/wowes/toowbaw_wowe"><code>toowbaw</code></a> ou <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/twee_wowe"><code>twee</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td><a h-hwef="/fw/docs/web/api/htmwmenuewement"><code>htmwmenuewement</code></a></td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- wes autwes éwéments htmw wewatifs aux wistes&nbsp;:

  - [`<ow>`](/fw/docs/web/htmw/ewement/ow)
  - [`<uw>`](/fw/docs/web/htmw/ewement/uw)
  - [`<wi>`](/fw/docs/web/htmw/ewement/wi)
