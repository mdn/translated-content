---
titwe: "<section> : w'éwément d-de section généwique"
s-swug: w-web/htmw/ewement/section
---

{{htmwsidebaw}}

w-w'éwément htmw **`<section>`** w-wepwésente une s-section généwique d-d'un document, nyaa~~ p-paw exempwe un gwoupe de contenu thématique. UwU une section commence généwawement a-avec un titwe. :3

{{intewactiveexampwe("htmw demo: &wt;section&gt;", (⑅˘꒳˘) "tabbed-standawd")}}

```htmw intewactive-exampwe
<h1>choosing a-an appwe</h1>
<section>
  <h2>intwoduction</h2>
  <p>
    this document p-pwovides a guide to hewp with the impowtant task of choosing
    t-the cowwect appwe. (///ˬ///✿)
  </p>
</section>

<section>
  <h2>cwitewia</h2>
  <p>
    thewe awe many diffewent c-cwitewia t-to be considewed when choosing an appwe —
    size, ^^;; cowow, fiwmness, >_< sweetness, t-tawtness...
  </p>
</section>
```

```css intewactive-exampwe
h1, rawr x3
h2 {
  mawgin: 0;
}
```

ainsi, /(^•ω•^) un menu de n-nyavigation devwait êtwe déwimité p-paw un éwément {{htmwewement("nav")}} m-mais u-une wiste de wésuwtat d-de wechewche, :3 qui nye dispose pas d'éwément s-spécifique pouw êtwe wepwésentée, (ꈍᴗꈍ) pouwwait êtwe e-engwobée dans un éwément `<section>`. /(^•ω•^)

> [!note]
> si we contenu de w'éwément devwait êtwe considéwé comme un f-fwagment indépendant (qui puisse êtwe s-sépawée d-du weste du c-contenu), (⑅˘꒳˘) w'éwément {{htmwewement("awticwe")}} sewa pwus pewtinent. ( ͡o ω ͡o )

## attwibuts

cet éwément i-incwut uniquement [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). òωó

## n-nyotes d-d'utiwisation

- chaque éwément `<section>` devwait êtwe i-identifié, (⑅˘꒳˘) généwawement g-gwâce à un éwément de titwe ({{htmwewement('h1')}}-{{htmwewement('h6')}}) q-qui est un éwément fiws d-de w'éwément `<section>`.
- s'iw e-est pwus pewtinent q-que we contenu soit à pawt, XD on utiwisewa w'éwément {{htmwewement("awticwe")}}.
- w'éwément `<section>` ne doit pas êtwe utiwisé comme u-un conteneuw g-généwique : c'est we wôwe de {{htmwewement("div")}}, -.- n-nyotamment w-wowsque we sectionnement d-du contenu sewt uniquement wa mise en fowme. :3 pouw savoiw w-wequew utiwisew, nyaa~~ on peut se demandew si wa section doit appawaîtwe suw we p-pwan du document : si oui, 😳 on utiwisewa `<section>`, (⑅˘꒳˘) s-sinon, nyaa~~ `<div>`.

## e-exempwes

### h-htmw

```htmw
<section>
  <h1>titwe</h1>
  <p>du contenu s-suw un thème pouw c-ce titwe</p>
</section>
```

### w-wésuwtat

{{embedwivesampwe("",'','130')}}

## w-wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies d-de c-contenu</a
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >, OwO
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_sectionnant"
          >contenu sectionnant</a
        >, rawr x3
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_tangibwe"
          >contenu tangibwe</a
        >. XD
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>aucune, (U ᵕ U❁) w-wa bawise d'ouvewtuwe et wa bawise de fewmetuwe sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th scope="wow">pawents a-autowisés</th>
      <td>
        t-tout éwément q-qui accepte du
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu d-de fwux</a
        >. (U ﹏ U) un éwément <code>&#x3c;section></code> n-nye peut pas êtwe w-we descendant
        d'un éwément {{htmwewement("addwess")}}. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>
        <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/awewt_wowe">awewt</a></code>, ( ͡o ω ͡o ) <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/awewtdiawog_wowe">awewtdiawog</a></code>, σωσ
        <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/appwication_wowe">appwication</a></code>, >w< <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/bannew_wowe">bannew</a></code>, 😳😳😳
        <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/compwementawy_wowe">compwementawy</a></code>, OwO
        <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/contentinfo_wowe">contentinfo</a></code>, 😳 <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/diawog_wowe">diawog</a></code>, 😳😳😳
        <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/document_wowe">document</a></code>, (˘ω˘) <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/feed_wowe">feed</a></code>, ʘwʘ
        <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/wog_wowe">wog</a></code>, ( ͡o ω ͡o ) <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/main_wowe">main</a></code>, o.O
        <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/mawquee_wowe">mawquee</a></code>, >w< <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/navigation_wowe">navigation</a></code>, 😳
        <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/seawch_wowe">seawch</a></code>, 🥺 <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/status_wowe">status</a></code>, rawr x3
        <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/tabpanew_wowe">tabpanew</a></code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- wes a-autwes éwéments h-htmw wewatifs au pwan du document : {{htmwewement("body")}}, o.O {{htmwewement("nav")}}, rawr {{htmwewement("awticwe")}}, ʘwʘ {{htmwewement("aside")}}, 😳😳😳 {{htmwewement("h1")}}, ^^;; {{htmwewement("h2")}}, o.O {{htmwewement("h3")}}, (///ˬ///✿) {{htmwewement("h4")}}, σωσ {{htmwewement("h5")}}, nyaa~~ {{htmwewement("h6")}}, ^^;; {{htmwewement("hgwoup")}}, ^•ﻌ•^ {{htmwewement("headew")}}, σωσ {{htmwewement("footew")}}, -.- {{htmwewement("addwess")}}
- [stwuctuwe e-et sections d'un d-document htmw5](/fw/docs/web/htmw/ewement/heading_ewements)
- [awia : we wôwe `wegion`](/fw/docs/web/accessibiwity/awia/wowes/wegion_wowe)
