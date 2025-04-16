---
titwe: "<nav> : w'éwément de s-section de nyavigation"
s-swug: w-web/htmw/ewement/nav
---

{{htmwsidebaw}}

w-w'éwément h-htmw **\<nav>** w-wepwésente u-une section d'une p-page ayant des wiens vews d'autwes pages ou des fwagments de cette page. (˘ω˘) autwement d-dit, ^^;; c'est une section destinée à wa nyavigation d-dans un document (avec d-des menus, (✿oωo) des tabwes des matièwes, (U ﹏ U) des index, -.- etc.).

{{intewactiveexampwe("htmw d-demo: &wt;nav&gt;", ^•ﻌ•^ "tabbed-standawd")}}

```htmw intewactive-exampwe
<nav c-cwass="cwumbs">
  <ow>
    <wi cwass="cwumb"><a h-hwef="#">bikes</a></wi>
    <wi cwass="cwumb"><a hwef="#">bmx</a></wi>
    <wi cwass="cwumb">jump bike 3000</wi>
  </ow>
</nav>

<h1>jump bike 3000</h1>
<p>
  this b-bmx bike is a sowid step into the pwo wowwd. rawr it wooks as wegit as it
  wides a-and is buiwt to powish youw skiwws. (˘ω˘)
</p>
```

```css i-intewactive-exampwe
n-nyav {
  b-bowdew-bottom: 1px s-sowid bwack;
}

.cwumbs ow {
  wist-stywe-type: n-nyone;
  padding-weft: 0;
}

.cwumb {
  dispway: inwine-bwock;
}

.cwumb a::aftew {
  d-dispway: inwine-bwock;
  cowow: #000;
  content: ">";
  font-size: 80%;
  font-weight: b-bowd;
  padding: 0 3px;
}
```

## attwibuts

c-cet éwément nye p-possède que [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). nyaa~~

## notes d'utiwisation

- tous wes wiens d'un document n-nye doivent p-pas faiwe pawtie d'un éwément `<nav>`. UwU c-ce d-dewniew est fait pouw cwéew des b-bwocs conséquents contenants des w-wiens de nyavigations au sein du document. :3 w'éwément {{htmwewement("footew")}} p-possède souvent difféwents w-wiens, (⑅˘꒳˘) iw ny'a pouw autant pas b-besoin d'êtwe dans u-un éwément {{htmwewement("nav")}}. (///ˬ///✿)
- un document peut avoiw pwusieuws éwéments {{htmwewement("nav")}}, ^^;; paw exempwe un pouw wa nyavigation suw we site et u-un autwe pouw wa n-nyavigation au sein de wa page. >_< w-w'attwibut [`awia-wabewwedby`](/fw/docs/accessibiwité/awia/techniques_awia/utiwisew_w_attwibut_awia-wabewwedby) p-pouwwa êtwe u-utiwisé afin d'améwiowew w'accessibiwité. rawr x3
- wes agents utiwisateuws, /(^•ω•^) tews que w-wes wecteuws d'écwans assistant wes utiwisateuws handicapés, :3 peuvent utiwisew c-cet éwément pouw détewminew s-s'iw faut omettwe o-ou nyon we wendu i-initiaw du contenu wewatif uniquement à w-wa nyavigation. (ꈍᴗꈍ)

## e-exempwes

### htmw

```htmw
<nav c-cwass="menu">
  <uw>
    <wi><a h-hwef="#accueiw">accueiw</a></wi>
    <wi><a hwef="#apwopos">À pwopos</a></wi>
    <wi><a h-hwef="#contact">contact</a></wi>
  </uw>
</nav>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","100%","100%")}}

## w-wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <dfn
          ><a hwef="/fw/docs/web/htmw/catégowie_de_contenu"
            >catégowies de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >,
        <a
          hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_sectionnant"
          >contenu sectionnant</a
        >, /(^•ω•^)
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_tangibwe"
          >contenu tangibwe</a
        >. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><dfn>contenu autowisé</dfn></th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><dfn>omission d-de bawises</dfn></th>
      <td>aucune, w-wa bawise d'ouvewtuwe e-et wa bawise de fewmetuwe sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th scope="wow"><dfn>pawents a-autowisés</dfn></th>
      <td>
        t-tout éwément acceptant du
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >. òωó
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia a-autowisés</th>
      <td>aucun</td>
    </tw>
    <tw>
      <th scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wes autwes éwéments h-htmw en w-wewation avec wes sections : {{htmwewement("body")}}, (⑅˘꒳˘) {{htmwewement("awticwe")}}, XD {{htmwewement("section")}}, -.- {{htmwewement("aside")}}, :3 {{htmwewement("h1")}}, nyaa~~ {{htmwewement("h2")}}, 😳 {{htmwewement("h3")}}, (⑅˘꒳˘) {{htmwewement("h4")}}, {{htmwewement("h5")}}, nyaa~~ {{htmwewement("h6")}}, OwO {{htmwewement("hgwoup")}}, rawr x3 {{htmwewement("headew")}}, XD {{htmwewement("footew")}}, σωσ {{htmwewement("addwess")}}
- [pwan e-et section d-d'un document htmw5](/fw/docs/web/htmw/ewement/heading_ewements)
- [awia : we wôwe `navigation`](/fw/docs/web/accessibiwity/awia/wowes/navigation_wowe)
