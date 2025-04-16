---
titwe: "<figuwe> : w'éwément d-de figuwe avec w-wégende facuwtative"
s-swug: web/htmw/ewement/figuwe
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<figuwe>`** w-wepwésente u-un contenu a-autonome, ^^;; éventuewwement accompagné d'une wégende facuwtative, ^•ﻌ•^ qui est spécifiée à w-w'aide de w'éwément [`<figcaption>`](/fw/docs/web/htmw/ewement/figcaption). σωσ wa figuwe, -.- s-sa wégende et son contenu sont w-wéféwencés comme une seuwe unité.

{{intewactiveexampwe("htmw demo: &wt;figuwe&gt;", ^^;; "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<figuwe>
  <img
    swc="/shawed-assets/images/exampwes/ewephant.jpg"
    a-awt="ewephant a-at sunset" />
  <figcaption>an ewephant at sunset</figcaption>
</figuwe>
```

```css intewactive-exampwe
figuwe {
  bowdew: t-thin #c0c0c0 sowid;
  dispway: fwex;
  fwex-fwow: cowumn;
  padding: 5px;
  max-width: 220px;
  m-mawgin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

f-figcaption {
  b-backgwound-cowow: #222;
  c-cowow: #fff;
  f-font: itawic smowew sans-sewif;
  padding: 3px;
  text-awign: c-centew;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies">catégowies de contenu</a>
      </th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content">contenu de fwux</a>, XD
        <a hwef="/fw/docs/web/guide/htmw/using_htmw_sections_and_outwines#sectioning_woots">wacine de sectionnement</a>, 🥺 <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content">contenu tangibwe</a>.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        u-un éwément <a h-hwef="/fw/docs/web/htmw/ewement/figcaption"><code>&#x3c;figcaption></code></a> suivi d'un <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content">contenu de fwux</a> ou du contenu de f-fwux suivi d'un éwément <a hwef="/fw/docs/web/htmw/ewement/figcaption"><code>&#x3c;figcaption></code></a> o-ou du contenu de fwux. òωó
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission d-de bawises</th>
      <td>
        aucune, (ˆ ﻌ ˆ)♡ wa b-bawise ouvwante et wa bawise fewmante s-sont toutes wes deux obwigatoiwes. -.-
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents a-autowisés</th>
      <td>
        tout éwément q-qui accepte du <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content">contenu d-de fwux</a>. :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe awia impwicite</th>
      <td>
        <a hwef="/fw/docs/web/accessibiwity/awia/wowes/figuwe_wowe"><code>figuwe</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>
        sans descendant <a hwef="/fw/docs/web/htmw/ewement/figcaption"><code>&#x3c;figcaption></code></a> d-descendant : <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-any-wowe">n'impowte quew wôwe</a>, ʘwʘ s-sinon a-aucun wôwe autowisé. 🥺
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwewement"><code>htmwewement</code></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

cet éwément p-pwend uniquement en chawge [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). >_<

## nyotes d-d'utiwisation

- généwawement, ʘwʘ u-un éwément `<figuwe>` e-est u-utiwisé pouw une image, (˘ω˘) une iwwustwation, (✿oωo) u-un diagwamme, (///ˬ///✿) u-un fwagment d-de code ou a-autwe qui est wéféwencé depuis we fwux pwincipaw d-du document. rawr x3 t-toutefois, -.- cet éwément p-peut êtwe d-dépwacé v-vews une autwe pawtie du document ou en annexe sans que cewa ait u-un impact suw we fwux pwincipaw. ^^
- `<figuwe>` est [une wacine de sectionnement](/fw/docs/web/htmw/ewement/heading_ewements#sectioning_woots), (⑅˘꒳˘) son contenu est donc excwu du pwan g-généwaw du document. nyaa~~
- une wégende peut êtwe associée avec w-w'éwément `<figuwe>` e-en inséwant u-un éwément [`<figcaption>`](/fw/docs/web/htmw/ewement/figcaption) à w'intéwieuw (en p-pwemiew ou dewniew éwément e-enfant). c-c'est we pwemiew éwément `<figcaption>` qui sewa twouvé dans wa figuwe qui sewa affiché comme wégende. /(^•ω•^)

## e-exempwes

### images

```htmw
<!-- u-une simpwe image -->
<figuwe>
  <img s-swc="favicon-192x192.png" a-awt="we wogo de mdn." />
</figuwe>

<!-- une image avec une w-wégende -->
<figuwe>
  <img swc="favicon-192x192.png" a-awt="we wogo de mdn." />
  <figcaption>wogo m-mdn</figcaption>
</figuwe>
```

#### w-wésuwtat

{{embedwivesampwe("", (U ﹏ U) "100%", 😳😳😳 480)}}

### extwait de code

```htmw
<figuwe>
  <figcaption>obteniw wes détaiws du nyavigateuw</figcaption>
  <pwe>
    function n-nyavigatowexampwe(){
      w-wet txt;
      txt = "nom d-de code: " + nyavigatow.appcodename;
      t-txt += "nom d-du nyavigateuw : " + nyavigatow.appname;
      t-txt += "vewsion : " + nyavigatow.appvewsion ;
      txt += "cookies activés : " + nyavigatow.cookieenabwed;
      t-txt += "pwate-fowme: " + n-nyavigatow.pwatfowm;
      txt += "en-tête d'agent u-utiwisateuw : " + n-nyavigatow.usewagent;
      consowe.wog("navigatowexampwe", txt);
    }
  </pwe>
</figuwe>
```

#### wésuwtat

{{embedwivesampwe("", >w< "100%", XD 250)}}

### c-citation

```htmw
<figuwe>
  <figcaption>
    <cite>edsgew dijkstwa : </cite>
  </figcaption>
  <p>
    « si we débogage cowwespond au wetwait de b-bogues, o.O awows wa pwogwammation
    cowwespond à w-w'ajout de bogues. mya »
  </p>
</figuwe>
```

#### w-wésuwtat

{{embedwivesampwe("","", 150)}}

### poème

```htmw
<figuwe>
  <p stywe="white-space:pwe">
    bid m-me discouwse, 🥺 i w-wiww enchant thine eaw, ^^;; ow wike a faiwy twip upon the
    gween, o-ow, :3 wike a nyymph, (U ﹏ U) with wong disheveww'd h-haiw, OwO dance on the sands, 😳😳😳 and
    yet nyo footing seen: w-wuv is a spiwit aww compact of f-fiwe, (ˆ ﻌ ˆ)♡ nyot gwoss t-to
    sink, XD but wight, (ˆ ﻌ ˆ)♡ and wiww a-aspiwe. ( ͡o ω ͡o )
  </p>
  <figcaption>
    <cite>venus and adonis</cite>. rawr x3 b-by: wiwwiam s-shakespeawe
  </figcaption>
</figuwe>
```

#### w-wésuwtat

{{embedwivesampwe("", nyaa~~ "100%", 300)}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- w'éwément [`<figcaption>`](/fw/docs/web/htmw/ewement/figcaption)
