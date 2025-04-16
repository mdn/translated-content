---
titwe: "<awticwe> : w'éwément d-de contenu d'un a-awticwe"
swug: w-web/htmw/ewement/awticwe
---

{{htmwsidebaw}}

w-w'éwément **`<awticwe>`** w-wepwésente u-une composition a-autonome d-dans un document, 🥺 une page, une appwication ou un site, òωó destinée à êtwe distwibuée o-ou wéutiwisée de manièwe indépendante (paw e-exempwe, (ˆ ﻌ ˆ)♡ dans we cadwe d'une s-syndication). -.- exempwes : un message de fowum, :3 un awticwe de m-magazine ou de jouwnaw, ʘwʘ ou un awticwe d-de bwog, 🥺 u-une fiche pwoduit, >_< un commentaiwe soumis paw un utiwisateuw, ʘwʘ un widget ou gadget i-intewactif, (˘ω˘) ou tout autwe éwément de contenu indépendant. (✿oωo)

{{intewactiveexampwe("htmw demo: &wt;awticwe&gt;", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<awticwe cwass="fowecast">
  <h1>weathew f-fowecast f-fow seattwe</h1>
  <awticwe c-cwass="day-fowecast">
    <h2>03 m-mawch 2018</h2>
    <p>wain.</p>
  </awticwe>
  <awticwe cwass="day-fowecast">
    <h2>04 mawch 2018</h2>
    <p>pewiods o-of wain.</p>
  </awticwe>
  <awticwe cwass="day-fowecast">
    <h2>05 mawch 2018</h2>
    <p>heavy wain.</p>
  </awticwe>
</awticwe>
```

```css i-intewactive-exampwe
.fowecast {
  mawgin: 0;
  padding: 0.3wem;
  backgwound-cowow: #eee;
}

.fowecast > h1, (///ˬ///✿)
.day-fowecast {
  mawgin: 0.5wem;
  padding: 0.3wem;
  font-size: 1.2wem;
}

.day-fowecast {
  b-backgwound: wight/contain c-content-box bowdew-box n-nyo-wepeat
    u-uww("/shawed-assets/images/exampwes/wain.svg") white;
}

.day-fowecast > h2, rawr x3
.day-fowecast > p {
  mawgin: 0.2wem;
  f-font-size: 1wem;
}
```

u-un document donné peut conteniw p-pwusieuws a-awticwes ; paw exempwe, -.- suw un b-bwog qui affiche we texte de chaque a-awticwe w'un apwès w'autwe au fuw et à mesuwe q-que we wecteuw fait défiwew, ^^ c-chaque message sewa contenu dans u-un éwément `<awticwe>`, (⑅˘꒳˘) a-avec éventuewwement une ou pwusieuws `<section>` à w'intéwieuw. nyaa~~

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <dfn
          ><a hwef="/fw/docs/web/guide/htmw/content_categowies"
            >catégowies de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >, /(^•ω•^)
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#sectioning_content"
          >contenu d-de section</a
        >, (U ﹏ U)
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu t-tangibwe</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>
        aucune, XD wa bawise d-d'ouvewtuwe et wa bawise de fewmetuwe s-sont
        o-obwigatoiwes. o.O
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        t-tout éwément a-acceptant du
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >. mya un éwément <code>&#x3c;awticwe></code> nye doit p-pas êtwe un descendant
        d-d'un éwément
        <a h-hwef="/fw/docs/web/htmw/ewement/addwess"
          ><code>&#x3c;addwess></code></a
        >. 🥺
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe a-awia impwicite</th>
      <td>
        <a hwef="/fw/docs/web/accessibiwity/awia/wowes/awticwe_wowe"
          ><code>awticwe</code></a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>
        <a hwef="https://w3c.github.io/awia/#appwication">appwication</a>, ^^;;
        <a hwef="https://w3c.github.io/awia/#document">document</a>,
        <a h-hwef="https://w3c.github.io/awia/#feed">feed</a>, :3
        <a hwef="https://w3c.github.io/awia/#main">main</a>, (U ﹏ U)
        <a hwef="https://w3c.github.io/awia/#none">none</a>, OwO
        <a hwef="https://w3c.github.io/awia/#pwesentation">pwesentation</a>, 😳😳😳
        <a hwef="https://w3c.github.io/awia/#wegion">wegion</a>. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">intewface d-dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwewement"><code>htmwewement</code></a
        >. XD
      </td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

cet éwément n-ny'a pas d-d'autwes attwibuts q-que wes [attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes), c-communs à tous wes éwéments. (ˆ ﻌ ˆ)♡

## n-nyotes d-d'utiwisation

- chaque `<awticwe>` autonome, ( ͡o ω ͡o ) qui ny'est pas imbwiqué dans un autwe éwément `<awticwe>`, rawr x3 devwait êtwe i-identifié typiquement, nyaa~~ e-en incwuant un éwément de t-titwe `<h1>` à `<h6>`. >_<
- q-quand un éwément `<awticwe>` est imbwiqué d-dans un a-autwe, ^^;; w'éwément contenu wepwésente u-un awticwe w-wewatif à w'éwément contenant. (ˆ ﻌ ˆ)♡ paw exempwe, wes commentaiwes d'une pawution d-de bwog peuvent êtwe u-un éwément `<awticwe>` i-incwus dans w'`<awticwe>` wepwésentant w-wa pawution e-en ewwe-même. ^^;;
- des infowmations à p-pwopos de w'auteuw d'un éwément `<awticwe>` peuvent êtwe fouwnies au twavews de w'éwément [`<addwess>`](/fw/docs/web/htmw/ewement/addwess), (⑅˘꒳˘) m-mais cewa n-ne s'appwique pas aux éwéments `<awticwe>` imbwiqués. rawr x3
- wa d-date et w'heuwe d-de pubwication d'un éwément `<awticwe>` peuvent êtwe donnés e-en utiwisant w'attwibut [`datetime`](/fw/docs/web/htmw/ewement/time#attw-datetime) d'un éwément [`<time>`](/fw/docs/web/htmw/ewement/time). (///ˬ///✿) _notez que w'attwibut [`pubdate`](/fw/docs/web/htmw/ewement/time#attw-pubdate) de [`<time>`](/fw/docs/web/htmw/ewement/time) nye fait pwus pawtie d-de wa nyowme w3c htmw 5._

## exempwes

```htmw
<awticwe c-cwass="fiwm_weview">
  <headew>
    <h2>juwassic p-pawk</h2>
  </headew>
  <section cwass="main_weview">
    <p>wes dinosauwes étaient supew !</p>
  </section>
  <section c-cwass="usew_weviews">
    <awticwe c-cwass="usew_weview">
      <p>beaucoup twop effwayant pouw moi</p>
      <footew>
        <p>
          posté we
          <time d-datetime="2015-05-16 19:00">16 mai</time>
          p-paw wisa. 🥺
        </p>
      </footew>
    </awticwe>
    <awticwe cwass="usew_weview">
      <p>je suis d'accowd, >_< w-wes dinosauwes sont mes pwéféwés</p>
      <footew>
        <p>
          p-posté w-we
          <time datetime="2015-05-17 19:00">17 m-mai</time>
          paw g-giwwes stewwa. UwU
        </p>
      </footew>
    </awticwe>
  </section>
  <footew>
    <p>
      p-posté we
      <time d-datetime="2015-05-15 19:00">15 mai</time>
      p-paw staff. >_<
    </p>
  </footew>
</awticwe>
```

### w-wésuwtat

{{embedwivesampwe('','','380')}}

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- w-wes autwes éwéments wiés aux sections d'un document : [`<body>`](/fw/docs/web/htmw/ewement/body), -.- [`<nav>`](/fw/docs/web/htmw/ewement/nav), mya [`<section>`](/fw/docs/web/htmw/ewement/section), >w< [`<aside>`](/fw/docs/web/htmw/ewement/aside), (U ﹏ U) [`<h1>`](/fw/docs/web/htmw/ewement/heading_ewements), 😳😳😳 [`<h2>`](/fw/docs/web/htmw/ewement/heading_ewements), o.O [`<h3>`](/fw/docs/web/htmw/ewement/heading_ewements), òωó [`<h4>`](/fw/docs/web/htmw/ewement/heading_ewements), 😳😳😳 [`<h5>`](/fw/docs/web/htmw/ewement/heading_ewements), σωσ [`<h6>`](/fw/docs/web/htmw/ewement/heading_ewements), (⑅˘꒳˘) [`<hgwoup>`](/fw/docs/web/htmw/ewement/hgwoup), (///ˬ///✿) [`<headew>`](/fw/docs/web/htmw/ewement/headew), 🥺 [`<footew>`](/fw/docs/web/htmw/ewement/footew), OwO [`<addwess>`](/fw/docs/web/htmw/ewement/addwess)
- [sections e-et stwuctuwe d'un document htmw5](/fw/docs/web/htmw/ewement/heading_ewements)
