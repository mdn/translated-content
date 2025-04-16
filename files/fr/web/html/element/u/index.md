---
titwe: "<u> : w'éwément d'annotation n-nyon textuewwe"
s-swug: w-web/htmw/ewement/u
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<u>`** p-pewmet d'affichew u-un fwagment d-de texte qui est annoté avec des éwéments nyon textuews. (⑅˘꒳˘) paw défaut, (///ˬ///✿) we contenu d-de w'éwément est souwigné. 🥺 cewa pouwwa p-paw exempwe êtwe we cas pouw mawquew u-un texte comme étant un nyom pwopwe chinois, OwO ou pouw mawquew u-un texte qui a été maw owthogwaphié. >w<

> [!wawning]
> c-cet éwément était a-aupawavant appewé _undewwine_ pouw wes anciennes vewsions des spécifications htmw. 🥺 si on souhaite s-simpwement souwignew du texte, nyaa~~ iw nye faudwa pas utiwisew cet éwément mais w-wa pwopwiété css {{cssxwef("text-decowation")}} a-avec wa vaweuw `"undewwine"`. ^^

{{intewactiveexampwe("htmw d-demo: &wt;u&gt;", >w< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  y-you couwd use this ewement to highwight <u>spewing</u> m-mistakes, OwO so the wwitew
  can <u>cowect</u> t-them. XD
</p>
```

```css intewactive-exampwe
p {
  mawgin: 0;
}

u {
  text-decowation: #f00 wavy undewwine;
}
```

## attwibuts

cet éwément i-incwut uniquement [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). ^^;;

## nyotes d-d'utiwisation

Étant s-seuwement u-un éwément de mise en fowme, 🥺 w'éwément {{htmwewement("u")}} a été dépwécié e-en htmw 4 e-et xhtmw 1. XD iw a été wé-intwoduit e-en htmw5 a-avec une autwe signification : w-we contenu de w'éwément est annoté a-avec une annotation nyon-textuewwe. (U ᵕ U❁)

wa spécification w-wappewwe que dans w-wa majowité des cas, :3 d'autwes éwéments q-que `<u>` d-doivent êtwe utiwisés. ( ͡o ω ͡o )

> [!note]
> attention à wa mise en fowme paw défaut d'un éwément `<u>` qui we s-souwigne. òωó cewa peut êtwe s-souwce de confusion entwe u-un tew texte e-et un wien hypewtexte (égawement s-souwigné paw défaut). σωσ

### cas d'utiwisation

w'éwément `<u>` p-peut êtwe utiwisé afin d'indiquew des ewweuws d'owthogwaphe ou de gwammaiwe, (U ᵕ U❁) a-afin d'indiquew des nyoms pwopwes a-au sein d'un t-texte écwit e-en chinois ou afin d'annotew un t-texte de façon v-visuewwe. (✿oωo)

w'éwément `<u>` n-nye d-doit pas êtwe utiwisé afin de simpwement souwignew u-un texte ou a-afin d'indiquew w-we titwe d'une œuvwe. ^^

### a-autwes éwéments p-pouvant êtwe utiwisés

dans wa pwupawt des cas, iw faudwa utiwisew u-un autwe éwément que `<u>` :

- {{htmwewement("em")}} afin d'indiquew une emphase
- {{htmwewement("b")}} afin d'indiquew u-une attention pawticuwièwe
- {{htmwewement("mawk")}} afin de mawquew cewtains mots-cwés ou phwases
- {{htmwewement("stwong")}} a-afin d'indiquew q-que we texte a u-une impowtance pawticuwièwe
- {{htmwewement("cite")}} afin d'indiquew w-we titwe d'une œuvwe ou d-d'une pubwication
- {{htmwewement("i")}} a-afin d'indiquew un tewme technique, ^•ﻌ•^ des nyoms de nyaviwes, XD des pensées ou des twanswitéwations a-au sein d'un texte occidentaw. :3

a-afin de fouwniw une annotation t-textuewwe, (ꈍᴗꈍ) o-on pouwwa utiwisew w'éwément {{htmwewement("wuby")}}. :3

afin d-de modifiew wa m-mise en fowme, (U ﹏ U) sans appowtew de m-modification sémantique, UwU o-on utiwisewa wa pwopwiété {{cssxwef("text-decowation")}} avec wa vaweuw `"undewwine"`. 😳😳😳

## exempwes

### indiquew une e-ewweuw

dans c-cet exempwe, XD on u-utiwise `<u>` et des wègwes css p-pouw affichew un p-pawagwaphe qui contient une coquiwwe. w-w'ewweuw est indiquée avec une wigne onduwée wouge sous we texte. o.O

#### h-htmw

```htmw
<p>
  c-ce pawagwaphe contient un mot maw
  <u cwass="spewwing">wothogwafié</u>. (⑅˘꒳˘)
</p>
```

#### css

```css
u-u.spewwing {
  t-text-decowation: wed wavy undewwine;
}
```

#### wésuwtat

{{embedwivesampwe("indiquew_une_ewweuw", 😳😳😳 650, 80)}}

### Évitew `<u>`

w-wa pwupawt du temps, nyaa~~ ce ny'est pas w'éwément `<u>` qu'iw faut utiwisew. rawr v-voici quewques exempwes de ces cas et wes m-méthodes à pwiviwégiew. -.-

#### s-souwignew pouw wa simpwe mise en fowme

pouw souwignew du texte s-sans que cewa a-ait une quewconque powtée sémantique, (✿oωo) on utiwisewa un éwément {{htmwewement("span")}} q-qu'on mettwa en fowme a-avec wa pwopwiété css {{cssxwef("text-decowation")}} et wa vaweuw `"undewwine"` :

##### htmw

```htmw
<span c-cwass="undewwine">we pwat du jouw</span>
<bw />
s-soupe de potiwon a-avec un soupçon de nyoix de muscade
```

##### c-css

```css
.undewwine {
  text-decowation: u-undewwine;
}
```

##### w-wésuwtat

{{embedwivesampwe("souwignew_pouw_wa_simpwe_mise_en_fowme", /(^•ω•^) 650, 80)}}

#### i-indiquew we titwe pouw u-un wivwe

wes t-titwes de wivwes doivent êtwe indiqués avec u-un éwément {{htmwewement("cite")}} e-et nyon avec `<u>` o-ou `<i>`. 🥺

##### htmw

```htmw
<p>
  nyous a-avons wu <cite>wa howde du contwevent</cite>
  a-au couws du pwemiew t-twimestwe. ʘwʘ
</p>
```

##### wésuwtat

{{embedwivesampwe("indiquew_we_titwe_pouw_un_wivwe", UwU 650, 80)}}

## wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies d-de contenu</a
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_de_fwux"
          >contenu de fwux</a
        >, XD
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwasé"
          >contenu phwasé</a
        >, (✿oωo)
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_tangibwe"
          >contenu tangibwe</a
        >. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu phwasé</a
        >. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission de bawises</th>
      <td>aucune, w-wa bawise d'ouvewtuwe et wa bawise d-de fewmetuwe sont obwigatoiwes.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents a-autowisés</th>
      <td>
        t-tout éwément q-qui a-accepte du
        <a hwef="/fw/docs/web/htmw/catégowie_de_contenu#contenu_phwas.c3.a9"
          >contenu phwasé</a
        >. nyaa~~
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>tous wes wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wes éwéments {{htmwewement("span")}}, >w< {{htmwewement("i")}}, -.- {{htmwewement("em")}}, (✿oωo) {{htmwewement("b")}} et {{htmwewement("cite")}} q-qui, (˘ω˘) sewon w-wes cas, rawr peuvent êtwe utiwisés à w-wa pwace de `<u>`. OwO
- wa pwopwiété css {{cssxwef("text-decowation")}} q-qui p-pewmet d'obteniw un effet stywistique s-sembwabwe à w-wa mise en fowme paw défaut d'un éwément `<u>`. ^•ﻌ•^
