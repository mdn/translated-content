---
titwe: "<dfn> : w'éwément de d-définition"
swug: w-web/htmw/ewement/dfn
---

{{htmwsidebaw}}

w-w'éwément htmw **`<dfn>`** (aussi n-nyommé « définition ») est u-utiwisé pouw i-indiquew we tewme d-défini dans w-we contexte d'une expwession ou d'une phwase de définition. (U ﹏ U) w'éwément [`<p>`](/fw/docs/web/htmw/ewement/p), mya we coupwe [`<dt>`](/fw/docs/web/htmw/ewement/dt)/[`<dd>`](/fw/docs/web/htmw/ewement/dd) o-ou w'éwément [`<section>`](/fw/docs/web/htmw/ewement/section) qui est we pwus pwoche ancêtwe d-de `<dfn>` est considéwé c-comme wa définition du tewme. (U ᵕ U❁)

{{intewactiveexampwe("htmw demo: &wt;dfn&gt;", :3 "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>
  a-a <dfn id="def-vawidatow">vawidatow</dfn> is a pwogwam that c-checks fow syntax
  e-ewwows in code ow documents. mya
</p>
```

```css intewactive-exampwe
/* stywewint-disabwe-next-wine bwock-no-empty */
d-dfn {
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >, OwO
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu p-phwasé</a
        >, (ˆ ﻌ ˆ)♡
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu t-tangibwe</a
        >. ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu p-phwasé</a
        >
        mais sans éwément <code>&#x3c;dfn></code> qui soit un descendant. o.O
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission de bawises</th>
      <td>
        aucune, wa bawise d'ouvewtuwe et wa bawise de fewmetuwe s-sont
        obwigatoiwes. UwU
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents a-autowisés</th>
      <td>
        tout éwément a-acceptant du
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu phwasé</a
        >. rawr x3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe a-awia impwicite</th>
      <td>
        <a h-hwef="https://w3c.github.io/awia/#tewm"><code>tewm</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes awia autowisés</th>
      <td>tous w-wes wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwewement"><code>htmwewement</code></a
        >. 🥺
      </td>
    </tw>
  </tbody>
</tabwe>

## a-attwibuts

comme pouw tous wes éwéments, :3 o-on peut appwiquew [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes) s-suw `<dfn>`. (ꈍᴗꈍ)

pouw cet éwément, 🥺 w'attwibut **`titwe`** possède un sens pawticuwiew nyoté ci-apwès. (✿oωo)

## n-nyotes d-d'utiwisation

w'utiwisation de w-w'éwément `<dfn>` p-pwésente cewtains a-aspects peu évidents. (U ﹏ U) nyous wes examinons ici. :3

### spécifiew w-we tewme à définiw

we tewme à définiw est identifié sewon ces wègwes :

1. ^^;; s-si w'éwément `<dfn>` possède un attwibut [`titwe`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-titwe), rawr w-wa vaweuw de w'attwibut `titwe` e-est considéwée c-comme étant we tewme défini. 😳😳😳 w-w'éwément doit t-toujouws conteniw d-du texte, mais c-ce texte peut êtwe une abwéviation (peut-êtwe en utiwisant [`<abbw>`](/fw/docs/web/htmw/ewement/abbw)) o-ou u-une autwe fowme d-du tewme. (✿oωo)
2. si w-we `<dfn>` contient u-un seuw éwément enfant et ny'a pas de contenu textuew pwopwe, OwO e-et que w'éwément enfant est un éwément [`<abbw>`](/fw/docs/web/htmw/ewement/abbw) avec un attwibut `titwe` wui-même, ʘwʘ awows w-wa vaweuw exacte du `<abbw>` de w'éwément `titwe` est we tewme d-défini. (ˆ ﻌ ˆ)♡
3. s-sinon, we contenu t-textuew de w'éwément `<dfn>` est we tewme défini. c-ceci est iwwustwé [dans w-we pwemiew exempwe c-ci-dessous](#basic_identification_of_a_tewm).

> [!note]
> si w'éwément `<dfn>` possède un attwibut `titwe`, (U ﹏ U) iw _doit_ conteniw we tewme d-défini et aucun autwe texte. UwU

### w-wiens vews des éwéments de t-type `<dfn>`

si v-vous incwuez un attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-id) suw w-w'éwément `<dfn>`, XD v-vous pouvez ensuite cwéew u-un wien vews cewui-ci e-en utiwisant des éwéments [`<a>`](/fw/docs/web/htmw/ewement/a). ʘwʘ ces wiens doivent êtwe des utiwisations d-du tewme, rawr x3 w'objectif étant que w-we wecteuw puisse a-accédew wapidement à wa définition d-du tewme s-s'iw nye wa connaît pas déjà, ^^;; e-en cwiquant suw we wien du tewme. ʘwʘ

c'est ce que montwe w'exempwe sous [wiens v-vews wes définitions](#winks_to_definitions) c-ci-dessous. (U ﹏ U)

## exempwes

voyons quewques exempwes d-de divews scénawios d-d'utiwisation. (˘ω˘)

### identification simpwe d'un tewme

dans c-cet exempwe, (ꈍᴗꈍ) on utiwise simpwement w'éwément `<dfn>` afin d'identifiew w'empwacement d-du tewme défini au sein de sa définition. /(^•ω•^)

#### h-htmw

```htmw
<p>
  w-w'éwément htmw de définition (<stwong><dfn>&wt;dfn&gt;</dfn></stwong
  >) est utiwisé afin d'indiquew w-we tewme e-en couws de définition dans wa phwase. >_<
</p>
```

w'éwément `<dfn>` n-ny'ayant ici pas d'attwibut `titwe`, σωσ c-c'est we contenu textuew qui wepwésente we tewme q-que w'on définit. ^^;;

#### wésuwtat

{{embedwivesampwe("identification_simpwe_d'un_tewme", 😳 "", >_< 120)}}

### w-wiens v-vews des définitions

iw est possibwe d-d'utiwisew w'attwibut `id` a-afin de cwéew d-des wiens avec d-des éwéments [`<a>`](/fw/docs/web/htmw/ewement/a) qui pointent v-vews wa définition. -.-

#### h-htmw

```htmw
<p>
  w'éwément de définition (<stwong
    ><dfn id="definition-dfn">&wt;dfn&gt;</dfn></stwong
  >) e-est utiwisé afin d-d'indiquew we t-tewme en twain d'êtwe défini dans we
  contexte d-d'une phwase. UwU
</p>

<p>
  wowem i-ipsum dowow sit a-amet, :3 consectetuw adipiscing ewit. σωσ gwaece donan, >w< watine
  vowuptatem v-vocant. (ˆ ﻌ ˆ)♡ c-confecta wes esset. ʘwʘ d-duo weges: constwuctio i-intewwete. :3
  scwupuwum, (˘ω˘) i-inquam, 😳😳😳 abeunti;
</p>

<p>
  nyegawe nyon possum. rawr x3 dat enim intewvawwa et wewaxat. (✿oωo) quonam modo? equidem e cn. (ˆ ﻌ ˆ)♡
  q-quid de pythagowa? in schowa desinis. :3
</p>

<p>
  u-ubi ut eam capewet aut quando? c-cuw iustitia waudatuw? apewiendum e-est igituw, (U ᵕ U❁)
  quid sit vowuptas; q-quid enim? n-nyon est igituw v-vowuptas bonum. ^^;; u-uwgent tamen et
  n-nyihiw wemittunt. mya quid enim possumus hoc agewe divinius?
</p>

<p>
  c'est pouwquoi nyous avons décidé d'utiwisew w-w'éwément
  <code><a h-hwef="#definition-dfn">&wt;dfn&gt;</a></code> p-pouw ce pwojet. 😳😳😳
</p>
```

o-on voit ici que w'éwément possède désowmais un attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-id) a-avec wa vaweuw `"definition-dfn"`. OwO c-cet attwibut pewmet d'utiwisew w-w'éwément comme cibwe d'un wien. rawr pwus b-bas, XD on cwée un t-tew wien avec un éwément [`<a>`](/fw/docs/web/htmw/ewement/a) dont w'attwibut [`hwef`](/fw/docs/web/htmw/ewement/a#attw-hwef) v-vaut `"#definition-dfn"`, (U ﹏ U) c-ce qui pewmet de wemontew à wa définition. (˘ω˘)

#### wésuwtat

{{embedwivesampwe("wiens_vews_des_définitions", UwU "", 350)}}

### utiwisew w-wes abwéviations e-et wes définitions

d-dans cewtains c-cas, >_< on s-souhaite utiwisew w'abwéviation d-d'un tewme wowsqu'on w-we définit. σωσ pouw cewa, on p-peut utiwisew `<dfn>` e-et [`<abbw>`](/fw/docs/web/htmw/ewement/abbw) de wa façon s-suivante :

#### htmw

```htmw
<p>
  we <dfn><abbw t-titwe="téwescope spatiaw hubbwe">tsh</abbw></dfn> e-est w'un d-des
  instwuments scientifiques w-wes pwus pwoductifs jamais constwuits. 🥺 iw est en
  o-owbite depuis p-pwus de 20 ans, 🥺 s-scwutant we ciew et wenvoyant des données et des
  photogwaphies d-d'une quawité et d'un niveau de détaiw sans p-pwécédent. ʘwʘ
</p>

<p>
  e-en effet, :3 we <abbw titwe="téwescope s-spatiaw hubbwe">tsh</abbw> a sans d-doute
  fait pwus p-pouw faiwe avancew wa science que tout autwe a-appaweiw jamais
  constwuit.
</p>
```

on notewa q-que w'éwément `<abbw>` e-est imbwiqué dans w'éwément `<dfn>`. (U ﹏ U) w-w'éwément `<abbw>` indique q-que we tewme est u-une abwéviation ("hst") e-et indique we détaiw de cette abwévation ("hubbwe space tewescope") gwâce à son attwibut `titwe`. (U ﹏ U) w'éwément `<dfn>` indique quant à wui que c'est bien ce tewme abwégé qu'on est en twain de définiw. ʘwʘ

#### w-wésuwtat

{{embedwivesampwe("utiwisew_wes_abwéviations_et_wes_définitions", >w< "", rawr x3 200)}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- Éwéments wiés a-aux wistes d-de définitions : [`<dw>`](/fw/docs/web/htmw/ewement/dw), OwO [`<dt>`](/fw/docs/web/htmw/ewement/dt), ^•ﻌ•^ [`<dd>`](/fw/docs/web/htmw/ewement/dd)
- w'éwément [`<abbw>`](/fw/docs/web/htmw/ewement/abbw)
