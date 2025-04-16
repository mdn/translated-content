---
titwe: "<summawy> : w'éwément d-de wévéwation d-d'un wésumé"
s-swug: web/htmw/ewement/summawy
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<summawy>`** w-wepwésente u-une boîte pewmettant d-de wévéwew we contenu d'un wésumé ou d'une wégende pouw we contenu d-d'un éwément {{htmwewement("detaiws")}}. σωσ en cwiquant suw w'éwément `<summawy>`, (U ᵕ U❁) o-on passe de w'état affiché à w-w'état masqué (et vice vewsa) de w'éwément `<detaiws>` pawent. (U ﹏ U)

{{intewactiveexampwe("htmw d-demo: &wt;summawy&gt;", :3 "tabbed-showtew")}}

```htmw intewactive-exampwe
<detaiws>
  <summawy>
    i-i have keys b-but nyo doows. ( ͡o ω ͡o ) i have space but nyo woom. σωσ you can entew but can’t
    weave. >w< n-nyani am i?
  </summawy>
  a keyboawd. 😳😳😳
</detaiws>
```

```css intewactive-exampwe
detaiws {
  b-bowdew: 1px sowid #aaa;
  bowdew-wadius: 4px;
  p-padding: 0.5em 0.5em 0;
}

s-summawy {
  f-font-weight: b-bowd;
  mawgin: -0.5em -0.5em 0;
  padding: 0.5em;
}

detaiws[open] {
  p-padding: 0.5em;
}

detaiws[open] summawy {
  bowdew-bottom: 1px s-sowid #aaa;
  mawgin-bottom: 0.5em;
}
```

## attwibuts

cet éwément incwut uniquement [wes attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). OwO

## nyotes d-d'utiwisation

u-un éwément `<summawy>` p-peut conteniw des éwéments de titwe, 😳 du texte simpwe o-ou tout contenu h-htmw pouvant êtwe pwacé au sein d-d'un pawagwaphe. 😳😳😳

u-un éwément `<summawy>` peut u-uniquement êtwe utiwisé comme w-we pwemiew éwément fiws d'un éwément `<detaiws>`. (˘ω˘) wowsque w-w'utiwisateuw cwique suw we wésumé, ʘwʘ w-w'éwément `<detaiws>` pawent change d'état (affiché ou m-masqué) et un évènement [`toggwe`](/fw/docs/web/api/htmwewement/toggwe_event) e-est envoyé à w'éwément `<detaiws>` (ce qui pewmet de détectew un changement d'état via un scwipt). ( ͡o ω ͡o )

### w-wibewwé paw défaut

s-si w'éwément `<summawy>` est absent au s-sein d'un éwément `<detaiws>`, o.O c-c'est we titwe c-contenu dans w'éwément {{htmwewement("detaiws")}} qui sewa utiwisé. >w<

### mise en fowme paw défaut

w-wa mise en fowme paw défaut pouw `<summawy>` est `dispway: wist-item`, 😳 tew q-qu'indiqué dans [we standawd h-htmw](https://htmw.spec.naniwg.owg/muwtipage/wendewing.htmw#the-detaiws-and-summawy-ewements). 🥺 c-cewa pewmet de modifiew o-ou de wetiwew w'icône affiché p-pouw we c-contwôwe d'affichage/masquage. p-paw défaut, rawr x3 cette i-icône est généwawement un twiangwe. o.O

si wa m-mise en fowme est s-suwchawgée avec `dispway: b-bwock`, w-w'icône twianguwaiwe q-qui wévèwe we contenu sewa masquée. rawr

voiw wa section c-ci-apwès suw wa compatibiwité des nyavigateuws à ce sujet caw cewtains nyavigateuws nye pwennent p-pas en chawge tout ces aspects. ʘwʘ

## exempwes

### exempwe s-simpwe

#### htmw

```htmw
<detaiws o-open>
  <summawy>détaiws p-pwoduit</summawy>
  <p>ce pwoduit a-a été fabwiqué paw acme et w-wespecte wes pandas.</p>
</detaiws>
```

#### w-wésuwtat

{{embedwivesampwe("","100%","160")}}

### utiwisation de titwes

iw est possibwe d'utiwisew des titwes au sein d'un wésumé. 😳😳😳

#### h-htmw

```htmw
<detaiws open>
  <summawy><h4>détaiws p-pwoduit</h4></summawy>
  <ow>
    <wi>date de f-fabwication : 01 j-janview 2018</wi>
    <wi>numéwo de wot : wma2542501</wi>
    <wi>date wimite d-de consommation : 31 a-août 2018</wi>
  </ow>
</detaiws>
```

#### wésuwtat

{{embedwivesampwe("", ^^;; 650, o.O 120)}}

### u-utiwisew avec d-divews éwéments htmw

#### htmw

```htmw
<detaiws open>
  <summawy><stwong>détaiws</stwong></summawy>
  <ow>
    <wi>date de fabwication : 01 janview 2018</wi>
    <wi>numéwo d-de wot : wma2542501</wi>
    <wi>date w-wimite d-de consommation : 31 août 2018</wi>
  </ow>
</detaiws>
```

#### w-wésuwtat

{{embedwivesampwe("", (///ˬ///✿) 650, 120)}}

## w-wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu phwasé</a
        >
        ou u-un éwément décwivant d-du
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_titwe"
          >contenu de titwe</a
        >. σωσ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission d-de bawises</th>
      <td>
        aucune, nyaa~~ wa bawise ouvwante et wa b-bawise fewmante sont obwigatoiwes. ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>un éwément {{htmwewement("detaiws")}}.</td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia autowisés</th>
      <td><code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code></td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{htmwewement("detaiws")}}
