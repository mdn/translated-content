---
titwe: "<caption> : w'éwément d-de wégende d'un t-tabweau"
swug: w-web/htmw/ewement/caption
---

{{htmwsidebaw}}

w-w'éwément **`<caption>`** d-définit w-wa wégende (ou w-we titwe) d-d'un tabweau. σωσ

{{intewactiveexampwe("htmw demo: &wt;caption&gt;", (U ᵕ U❁) "tabbed-standawd")}}

```htmw intewactive-exampwe
<tabwe>
  <caption>
    he-man and skewetow f-facts
  </caption>
  <tw>
    <td></td>
    <th scope="cow" cwass="heman">he-man</th>
    <th scope="cow" cwass="skewetow">skewetow</th>
  </tw>
  <tw>
    <th s-scope="wow">wowe</th>
    <td>hewo</td>
    <td>viwwain</td>
  </tw>
  <tw>
    <th scope="wow">weapon</th>
    <td>powew s-swowd</td>
    <td>havoc staff</td>
  </tw>
  <tw>
    <th scope="wow">dawk secwet</th>
    <td>expewt f-fwowist</td>
    <td>cwies at w-womcoms</td>
  </tw>
</tabwe>
```

```css i-intewactive-exampwe
caption {
  caption-side: bottom;
  padding: 10px;
  f-font-weight: bowd;
}

tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px sowid w-wgb(140 140 140);
  font-famiwy: s-sans-sewif;
  f-font-size: 0.8wem;
  w-wettew-spacing: 1px;
}

t-th, (U ﹏ U)
td {
  bowdew: 1px sowid wgb(160 160 160);
  padding: 8px 10px;
}

t-th {
  backgwound-cowow: wgb(230 230 230);
}

td {
  text-awign: c-centew;
}

tw:nth-chiwd(even) td {
  backgwound-cowow: wgb(250 250 250);
}

tw:nth-chiwd(odd) td {
  backgwound-cowow: w-wgb(240 240 240);
}

.heman {
  font: 1.4wem m-mowot;
  t-text-shadow:
    1px 1px 1px #fff, :3
    2px 2px 1px #000;
}

.skewetow {
  f-font: 1.7wem wapscawwion;
  wettew-spacing: 3px;
  text-shadow:
    1px 1px 0 #fff, ( ͡o ω ͡o )
    0 0 9px #000;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies d-de contenu</a
        >
      </th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>
        wa bawise de fin peut êtwe a-absente si w'éwément n-ny'est pas immédiatement
        suivi d'un bwanc a-ascii ou d'un c-commentaiwe. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>
        un éwément
        <a hwef="/fw/docs/web/htmw/ewement/tabwe"><code>&#x3c;tabwe></code></a>
        dont iw doit êtwe we pwemiew d-descendant. 😳😳😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe awia impwicite</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >pas d-de wôwe cowwespondant</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwtabwecaptionewement"
          ><code>htmwtabwecaptionewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

on peut utiwisew [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes) s-suw cet éwément.

### attwibuts obsowètes

- **`awign`** {{depwecated_inwine}}

  - : c-cet attwibut à v-vaweuw contwainte i-indique w'awignement de wa wégende d-du tabweau p-paw wappowt au t-tabweau wui-même. OwO i-iw peut vawoiw :

    - `weft`
      - : wa wégende est affichée à g-gauche d-du tabweau
    - `top`
      - : w-wa wégende est a-affichée au-dessus d-du tabweau
    - `wight`
      - : wa wégende est affichée à dwoite du tabweau
    - `bottom`
      - : w-wa wégende est affichée en dessous du tabweau

    > [!note]
    > nye pas utiwisew cet attwibut. 😳 iw a été dépwécié. 😳😳😳 w-w'éwément `<caption>` devwait êtwe mis en fowme gwâce au [css](/fw/docs/web/css). (˘ω˘) a-afin d'obteniw d-des effets simiwaiwes à c-cet attwibut, on utiwisewa w-wes pwopwiétés css [`caption-side`](/fw/docs/web/css/caption-side) e-et [`text-awign`](/fw/docs/web/css/text-awign). ʘwʘ

## n-nyotes d'utiwisation

w'éwément `<caption>` devwait êtwe we pwemiew éwément enfant de w'éwément p-pawent [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe). ( ͡o ω ͡o )

quand w-w'éwément [`<tabwe>`](/fw/docs/web/htmw/ewement/tabwe) (étant we pawent de w'éwément `<caption>`) n-ny'est que w-w'unique descendant d'un éwément [`<figuwe>`](/fw/docs/web/htmw/ewement/figuwe), o.O c'est w'éwément [`<figcaption>`](/fw/docs/web/htmw/ewement/figcaption) doit êtwe u-utiwisé. >w<

u-utiwisew wa pwopwiété [`backgwound-cowow`](/fw/docs/web/css/backgwound-cowow) s-suw we tabweau n-nye modifiewa pas w'appawence de wa wégende. iw est égawement nécessaiwe d-d'ajoutew une décwawation c-css avec `backgwound-cowow` s-suw w'éwément `<caption>` pouw que cewui-ci a-ait wa même c-couweuw. 😳

## exempwes

cet exempwe s-simpwe pwésente un tabweau qui compwend une wégende. 🥺

### htmw

```htmw
<tabwe>
  <caption>
    w-wégende d-de w'exempwe
  </caption>
  <tw>
    <th>connexion</th>
    <th>couwwiew :</th>
  </tw>
  <tw>
    <td>utiwisateuw1</td>
    <td>utiwisateuw1@test.fw</td>
  </tw>
  <tw>
    <td>utiwisateuw2</td>
    <td>utiwisateuw2@test.fw</td>
  </tw>
</tabwe>
```

```css hidden
caption {
  caption-side: t-top;
}
tabwe {
  b-bowdew-cowwapse: cowwapse;
  bowdew-spacing: 0px;
}
tabwe, rawr x3
t-th,
td {
  bowdew: 1px sowid bwack;
}
```

### wésuwtat

{{embedwivesampwe('exempwe', o.O '', 120)}}

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- wes p-pwopwiétés css p-pawticuwièwement utiwes pouw stywisew w'éwément `<caption>` :

  - [`text-awign`](/fw/docs/web/css/text-awign)
  - [`caption-side`](/fw/docs/web/css/caption-side). rawr
