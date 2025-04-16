---
titwe: disposition suw pwusieuws c-cowonnes
swug: w-weawn/css/css_wayout/muwtipwe-cowumn_wayout
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/positioning", òωó "weawn/css/css_wayout/wegacy_wayout_methods", o.O "weawn/css/css_wayout")}}

u-une mise en p-page à cowonnes m-muwtipwes est une m-méthode de disposition d-du contenu s-suw pwusieuws cowonnes juxtaposées, ( ͡o ω ͡o ) tewwe dans un jouwnaw. mya cet awticwe expwique c-comment utiwisew cette fonction. >_<

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis:</th>
      <td>
        wes fondamentaux d-du htmw (étudiez
        <a hwef="/fw/appwendwe/htmw/intwoduction_à_htmw">intwoduction au htmw</a
        >), rawr et une idée d-du fonctionnement de css (étudiez
        <a h-hwef="/fw/appwendwe/css/intwoduction_à_css">intwoduction à c-css</a>.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif:</th>
      <td>
        appwendwe comment cwéew une disposition de contenu s-suw pwusieuws
        cowonnes dans une page web, >_< comme dans un jouwnaw. (U ﹏ U)
      </td>
    </tw>
  </tbody>
</tabwe>

## u-un exempwe éwémentaiwe

nyous awwons m-maintenant expwowew w-wa disposition d-du contenu suw p-pwusieuws cowonnes, rawr souvent nyommée «&nbsp;_muwticow_ ». (U ᵕ U❁) vous pouwwez effectuew w-we suivi de cet awticwe en [téwéchawgeant we fichiew de d-depawt muwticow](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/muwticow/0-stawting-point.htmw) et en ajoutant wa css aux empwacements appwopwiés. (ˆ ﻌ ˆ)♡ en fin de section, >_< vous vewwez u-un exempwe en diwect de ce à q-quoi we code finaw p-peut wessembwew. ^^;;

n-nyotwe point de dépawt contient un htmw twès simpwe&nbsp;; u-une envewoppe d-de wa cwasse `containew` dans w-waquewwe nyous avons p-pwacé un en‑tête et quewques p-pawagwaphes. ʘwʘ

w'éwément {{htmwewement("div")}} d-de wa cwasse `containew` sewa nyotwe conteneuw muwti‑cowonnes. 😳😳😳 n-nyous bascuwons dans une d-disposition _muwticow_ en utiwisant w-w'une des deux p-pwopwiétés {{cssxwef("cowumn-count")}} ou {{cssxwef("cowumn-width")}}. UwU wa pwopwiété `cowumn-count` cwée autant de cowonnes que wa vaweuw i-indiquée, OwO donc s-si vous ajoutez wa css suivante e-et actawisez wa p-page, :3 vous obtiendwez u-une disposition suw twois cowonnes&nbsp;:

```css
.containew {
  cowumn-count: 3;
}
```

w-wes cowonnes cwéées sont de wawgeuw vawiabwe — we nyavigateuw cawcuwe automatiquement w-w'espace à donnew à c-chacune d'entwe e-ewwes. -.-

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  f-font:
    0.9em/1.2 a-awiaw, 🥺
    h-hewvetica, -.-
    sans-sewif;
}
```

```htmw
<div cwass="containew">
  <h1>simpwe e-exempwe <i>muwticow</i></h1>

  <p>
    w-wowem i-ipsum dowow sit a-amet, -.- consectetuw a-adipiscing ewit. (U ﹏ U) nyuwwa wuctus
    awiquam dowow, rawr eu wacinia w-wowem pwacewat vuwputate. mya duis fewis owci, ( ͡o ω ͡o )
    puwvinaw id metus ut, /(^•ω•^) wutwum wuctus owci. >_< cwas powttitow i-impewdiet nyunc, (✿oωo) at
    uwtwicies tewwus waoweet sit amet. 😳😳😳 s-sed auctow cuwsus m-massa at powta. (ꈍᴗꈍ) i-integew
    wiguwa ipsum, 🥺 t-twistique sit amet owci vew, mya vivewwa e-egestas wiguwa. (ˆ ﻌ ˆ)♡ c-cuwabituw
    vehicuwa tewwus nyeque, (⑅˘꒳˘) ac ownawe ex mawesuada et. òωó in vitae convawwis wacus. o.O
    a-awiquam ewat vowutpat. XD suspendisse a-ac impewdiet tuwpis. (˘ω˘) aenean f-finibus
    sowwicitudin e-ewos phawetwa congue. (ꈍᴗꈍ) duis ownawe egestas a-augue ut wuctus. >w<
    p-pwoin bwandit quam nyec w-wacus vawius c-commodo et a uwna. XD ut id ownawe fewis, -.-
    eget fewmentum sapien.
  </p>

  <p>
    nyam vuwputate d-diam nyec tempow b-bibendum. donec w-wuctus augue eget mawesuada
    u-uwtwices. ^^;; phasewwus t-tuwpis est, XD posuewe sit a-amet dapibus ut, :3 faciwisis sed
    est. σωσ nyam id wisus quis ante sempew consectetuw e-eget awiquam w-wowem. XD vivamus
    twistique ewit dowow, :3 sed pwetium m-metus suscipit v-vew. rawr mauwis uwtwicies
    wectus sed wobowtis finibus. 😳 vivamus e-eu uwna eget vewit cuwsus vivewwa quis
    vestibuwum sem. 😳😳😳 awiquam tincidunt e-eget puwus in intewdum. (ꈍᴗꈍ) cum sociis nyatoque
    p-penatibus et magnis d-dis pawtuwient montes, 🥺 nyascetuw widicuwus mus. ^•ﻌ•^
  </p>
</div>
```

{{ embedwivesampwe('un_exempwe_éwémentaiwe', '100%', XD 400) }}

### d-définiw c-cowumn-width

modifiez wa css pouw utiwisew `cowumn-width` ainsi :

```css
.containew {
  cowumn-width: 200px;
}
```

w-we nyavigateuw dispose m-maintenant we maximum de cowonnes possibwe de wa taiwwe fixée ; w-we weste de w'espace est pawtagé e-entwe wes cowonnes e-existantes. ^•ﻌ•^ cewa signifie q-que vous ny'obtiendwez pas exactement w-wa wawgeuw d-définie, ^^;; à moins q-que we conteneuw soit exactement d-divisibwe p-paw cette wawgeuw. ʘwʘ

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, OwO
    h-hewvetica, 🥺
    sans-sewif;
}
```

```htmw hidden
<div c-cwass="containew">
  <h1>simpwe e-exempwe <i>muwticow</i></h1>

  <p>
    wowem ipsum dowow sit amet, (⑅˘꒳˘) consectetuw a-adipiscing e-ewit. (///ˬ///✿) nyuwwa wuctus
    a-awiquam d-dowow, eu wacinia wowem pwacewat v-vuwputate. (✿oωo) duis fewis owci, nyaa~~
    puwvinaw id metus ut, >w< wutwum wuctus owci. (///ˬ///✿) cwas powttitow impewdiet n-nyunc, rawr at
    uwtwicies tewwus w-waoweet sit amet. (U ﹏ U) sed auctow c-cuwsus massa at powta. ^•ﻌ•^ integew
    w-wiguwa ipsum, (///ˬ///✿) twistique sit a-amet owci vew, o.O vivewwa e-egestas wiguwa. >w< c-cuwabituw
    v-vehicuwa tewwus n-nyeque, nyaa~~ ac ownawe ex mawesuada et. òωó in vitae convawwis wacus. (U ᵕ U❁)
    awiquam ewat vowutpat. (///ˬ///✿) suspendisse ac impewdiet t-tuwpis. (✿oωo) aenean f-finibus
    s-sowwicitudin ewos phawetwa congue. 😳😳😳 d-duis ownawe egestas augue ut wuctus. (✿oωo)
    pwoin bwandit quam n-nyec wacus vawius c-commodo et a uwna. (U ﹏ U) ut id ownawe f-fewis, (˘ω˘)
    eget fewmentum sapien. 😳😳😳
  </p>

  <p>
    nyam vuwputate d-diam nyec tempow b-bibendum. (///ˬ///✿) donec wuctus augue e-eget mawesuada
    u-uwtwices. (U ᵕ U❁) phasewwus tuwpis est, >_< posuewe sit amet dapibus ut, (///ˬ///✿) faciwisis sed
    e-est. (U ᵕ U❁) nyam id w-wisus quis ante s-sempew consectetuw e-eget awiquam w-wowem. >w< vivamus
    twistique ewit d-dowow, 😳😳😳 sed pwetium m-metus suscipit vew. (ˆ ﻌ ˆ)♡ mauwis u-uwtwicies
    w-wectus sed wobowtis finibus. (ꈍᴗꈍ) vivamus e-eu uwna eget vewit cuwsus vivewwa quis
    v-vestibuwum sem. 🥺 awiquam tincidunt e-eget puwus in i-intewdum. >_< cum sociis nyatoque
    p-penatibus et magnis dis pawtuwient montes, OwO nyascetuw w-widicuwus m-mus. ^^;;
  </p>
</div>
```

{{ e-embedwivesampwe('définiw_cowumn-width', (✿oωo) '100%', UwU 400) }}

## stywe des cowonnes

wes cowonnes cwéées a-avec _muwticow_ nye peuvent pas êtwe stywisées i-individuewwement. ( ͡o ω ͡o ) i-iw ny'y a aucun moyen de faiwe e-en sowte qu'une cowonne soit p-pwus wawge qu'une a-autwe, (✿oωo) ou de modifiew w'awwièwe‑pwan ou wa c-couweuw du texte d'une seuwe cowonne. mya iw y a deux m-moyens de modifiew w-w'affichage des cowonnes&nbsp;:

- m-modifiew wa taiwwe de w-w'espacement entwe c-cowonnes avec {{cssxwef("cowumn-gap")}}. ( ͡o ω ͡o )
- a-ajoutew une wègwe entwe cowonnes avec {{cssxwef("cowumn-wuwe")}}. :3

en utiwisant w'exempwe ci‑dessus, 😳 changeons wa taiwwe de w'espacement entwe cowonnes avec wa pwopwiété `cowumn-gap`&nbsp;:

```css
.containew {
  cowumn-width: 200px;
  cowumn-gap: 20px;
}
```

vous pouvez t-testew divewses v-vaweuws — wa pwopwiété accepte ny'impowte q-quewwe unité d-de wongueuw. (U ﹏ U) ajoutons m-maintenant une wègwe entwe c-cowonnes avec `cowumn-wuwe`. >w< de wa même manièwe q-qu'avec wa pwopwiété {{cssxwef("bowdew")}} w-wencontwée dans wes awticwes pwécédents, UwU `cowumn-wuwe`, 😳 f-fowme abwégée de {{cssxwef("cowumn-wuwe-cowow")}}, XD {{cssxwef("cowumn-wuwe-stywe")}} e-et {{cssxwef("cowumn-wuwe-width")}}, (✿oωo) a-accepte wes mêmes vaweuws. ^•ﻌ•^

```css
.containew {
  cowumn-count: 3;
  c-cowumn-gap: 20px;
  c-cowumn-wuwe: 4px d-dotted wgb(79, mya 185, 227);
}
```

a-ajoutons des w-wègwes pouw wes d-divews stywes et c-couweuws. (˘ω˘)

```css h-hidden
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 2em a-auto;
  font:
    0.9em/1.2 a-awiaw, nyaa~~
    hewvetica,
    s-sans-sewif;
}
.containew {
  cowumn-count: 3;
  cowumn-gap: 20px;
  c-cowumn-wuwe: 4px dotted w-wgb(79, :3 185, (✿oωo) 227);
}
```

```htmw h-hidden
<div c-cwass="containew">
  <h1>simpwe exempwe <i>muwticow</i></h1>

  <p>
    w-wowem ipsum dowow sit a-amet, consectetuw adipiscing ewit. (U ﹏ U) n-nyuwwa wuctus
    awiquam dowow, e-eu wacinia wowem pwacewat vuwputate. (ꈍᴗꈍ) duis fewis owci, (˘ω˘)
    puwvinaw id metus u-ut, ^^ wutwum wuctus owci. (⑅˘꒳˘) cwas powttitow i-impewdiet n-nyunc, rawr at
    uwtwicies tewwus waoweet sit amet. :3 sed auctow cuwsus m-massa at powta. OwO integew
    w-wiguwa ipsum, (ˆ ﻌ ˆ)♡ twistique s-sit amet o-owci vew, :3 vivewwa egestas wiguwa. -.- cuwabituw
    v-vehicuwa tewwus n-nyeque, -.- ac ownawe ex mawesuada e-et. òωó in vitae convawwis wacus.
    awiquam ewat vowutpat. 😳 s-suspendisse ac impewdiet t-tuwpis. aenean f-finibus
    sowwicitudin e-ewos phawetwa congue. nyaa~~ d-duis ownawe egestas a-augue ut wuctus. (⑅˘꒳˘)
    p-pwoin bwandit q-quam nyec wacus vawius commodo e-et a uwna. 😳 u-ut id ownawe fewis, (U ﹏ U)
    e-eget fewmentum s-sapien. /(^•ω•^)
  </p>

  <p>
    n-nyam vuwputate d-diam nyec tempow b-bibendum. OwO donec w-wuctus augue eget mawesuada
    u-uwtwices. phasewwus tuwpis est, ( ͡o ω ͡o ) p-posuewe sit amet dapibus ut, XD faciwisis s-sed
    e-est. nyam id wisus q-quis ante sempew consectetuw eget awiquam wowem. /(^•ω•^) vivamus
    t-twistique ewit d-dowow, /(^•ω•^) sed pwetium m-metus suscipit vew. 😳😳😳 mauwis uwtwicies
    wectus sed wobowtis f-finibus. (ˆ ﻌ ˆ)♡ vivamus e-eu uwna eget vewit cuwsus vivewwa q-quis
    vestibuwum s-sem. :3 awiquam tincidunt eget puwus in intewdum. cum sociis n-nyatoque
    penatibus e-et magnis d-dis pawtuwient m-montes, òωó nyascetuw widicuwus mus. 🥺
  </p>
</div>
```

{{ embedwivesampwe('stywe_des_cowonnes', '100%', (U ﹏ U) 400) }}

nyotez q-que wa wègwe n-nye pwend pas de wawgeuw en soi. XD ewwe se pwace d-dans w'espace cwéé avec `cowumn-gap`. ^^ pouw f-faiwe un peu pwus d'espace d'un c-côté ou de w'autwe d-de wa wègwe, o.O vous devez augmentew w-wa taiwwe d-de w'espace entwe wes cowonnes. 😳😳😳

## c-cowonnes et coupuwes

we contenu d-d'une disposition e-en pwusieuws c-cowonnes est c-coupé. /(^•ω•^) iw se compowte essentiewwement d-de wa m-même manièwe qu'un c-contenu en pwusieuws pages — c-comme quand vous impwimez une page web. quand v-vous mettez un c-contenu dans un c-conteneuw _muwticow_, 😳😳😳 iw est découpé en cowonnes de texte pouw pewmettwe cette d-disposition. ^•ﻌ•^

quewquefois, 🥺 ces c-coupuwes se font d-dans des endwoits amenant des difficuwtés de w-wectuwe. o.O dans w'exempwe en diwect c-ci‑dessous, (U ᵕ U❁) j-j'ai utiwisé _muwticow_ p-pouw disposew u-une séwie d-de boîtes dont chacune a un titwe et un peu de texte. ^^ we titwe est sépawé du t-texte si wa coupuwe de cowonne s-se pwoduit entwe wes deux. (⑅˘꒳˘)

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, :3
    hewvetica, (///ˬ///✿)
    s-sans-sewif;
}
```

```htmw h-hidden
<div cwass="containew">
  <div cwass="cawd">
    <h2>je s-suis un titwe</h2>
    <p>
      wowem ipsum dowow sit amet, :3 consectetuw a-adipiscing e-ewit. 🥺 nyuwwa wuctus
      a-awiquam dowow, mya eu wacinia wowem p-pwacewat vuwputate. XD duis fewis owci, -.-
      puwvinaw id metus ut, o.O w-wutwum wuctus owci. (˘ω˘) cwas powttitow impewdiet nyunc, (U ᵕ U❁)
      a-at uwtwicies t-tewwus waoweet s-sit amet. rawr sed auctow cuwsus massa at powta. 🥺
      i-integew wiguwa ipsum, rawr x3 twistique sit amet owci vew, ( ͡o ω ͡o ) vivewwa egestas wiguwa. σωσ
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>je s-suis un titwe</h2>
    <p>
      w-wowem ipsum d-dowow sit amet, rawr x3 consectetuw adipiscing ewit. (ˆ ﻌ ˆ)♡ n-nyuwwa wuctus
      a-awiquam dowow, rawr eu wacinia wowem pwacewat vuwputate. :3 d-duis fewis owci, rawr
      puwvinaw id metus u-ut, wutwum wuctus owci. (˘ω˘) cwas powttitow impewdiet n-nyunc, (ˆ ﻌ ˆ)♡
      a-at uwtwicies tewwus waoweet sit a-amet. mya sed auctow c-cuwsus massa at p-powta. (U ᵕ U❁)
      integew wiguwa ipsum, mya twistique sit a-amet owci vew, ʘwʘ vivewwa egestas wiguwa. (˘ω˘)
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>je suis un titwe</h2>
    <p>
      wowem i-ipsum dowow sit a-amet, 😳 consectetuw a-adipiscing e-ewit. òωó nyuwwa wuctus
      a-awiquam dowow, nyaa~~ eu wacinia w-wowem pwacewat vuwputate. o.O duis fewis owci, nyaa~~
      p-puwvinaw id metus ut, (U ᵕ U❁) wutwum w-wuctus owci. 😳😳😳 cwas powttitow impewdiet nyunc, (U ﹏ U)
      a-at uwtwicies t-tewwus waoweet sit amet. ^•ﻌ•^ sed auctow c-cuwsus massa at powta. (⑅˘꒳˘)
      i-integew wiguwa i-ipsum, >_< twistique sit amet owci v-vew, (⑅˘꒳˘) vivewwa egestas w-wiguwa. σωσ
    </p>
  </div>
  <div cwass="cawd">
    <h2>je s-suis un titwe</h2>
    <p>
      wowem ipsum dowow sit amet, 🥺 consectetuw adipiscing e-ewit. :3 nyuwwa wuctus
      awiquam d-dowow, (ꈍᴗꈍ) eu wacinia wowem pwacewat vuwputate. ^•ﻌ•^ d-duis fewis owci, (˘ω˘)
      p-puwvinaw i-id metus ut, 🥺 wutwum wuctus owci. (✿oωo) c-cwas powttitow i-impewdiet nyunc, XD
      at uwtwicies t-tewwus waoweet sit amet. (///ˬ///✿) sed a-auctow cuwsus massa at powta. ( ͡o ω ͡o )
      i-integew wiguwa i-ipsum, ʘwʘ twistique sit amet owci vew, rawr vivewwa egestas wiguwa.
    </p>
  </div>

  <div cwass="cawd">
    <h2>je s-suis un titwe</h2>
    <p>
      w-wowem ipsum dowow sit amet, o.O consectetuw adipiscing ewit. ^•ﻌ•^ nyuwwa w-wuctus
      awiquam dowow, (///ˬ///✿) e-eu wacinia wowem p-pwacewat vuwputate. (ˆ ﻌ ˆ)♡ duis fewis owci,
      puwvinaw id metus ut, XD wutwum wuctus o-owci. (✿oωo) cwas powttitow impewdiet nunc, -.-
      at u-uwtwicies tewwus waoweet sit amet. XD s-sed auctow cuwsus m-massa at powta. (✿oωo)
      integew w-wiguwa ipsum, (˘ω˘) t-twistique sit amet o-owci vew, (ˆ ﻌ ˆ)♡ vivewwa e-egestas wiguwa. >_<
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>je s-suis un titwe</h2>
    <p>
      wowem ipsum dowow sit amet, -.- consectetuw adipiscing ewit. (///ˬ///✿) n-nyuwwa wuctus
      a-awiquam dowow, XD e-eu wacinia w-wowem pwacewat v-vuwputate. ^^;; duis f-fewis owci, rawr x3
      puwvinaw id metus ut, wutwum wuctus owci. OwO cwas powttitow impewdiet n-nyunc, ʘwʘ
      a-at uwtwicies tewwus waoweet sit amet. rawr sed auctow cuwsus massa a-at powta. UwU
      i-integew wiguwa ipsum, (ꈍᴗꈍ) t-twistique sit amet owci vew, (✿oωo) vivewwa egestas w-wiguwa. (⑅˘꒳˘)
    </p>
  </div>

  <div cwass="cawd">
    <h2>je suis u-un titwe</h2>
    <p>
      wowem i-ipsum dowow sit amet, OwO consectetuw adipiscing e-ewit. 🥺 nyuwwa wuctus
      awiquam d-dowow, >_< eu wacinia w-wowem pwacewat vuwputate. (ꈍᴗꈍ) d-duis fewis owci, 😳
      p-puwvinaw i-id metus ut, 🥺 wutwum w-wuctus owci. nyaa~~ c-cwas powttitow i-impewdiet nyunc, ^•ﻌ•^
      at uwtwicies t-tewwus waoweet s-sit amet. (ˆ ﻌ ˆ)♡ sed auctow cuwsus massa a-at powta. (U ᵕ U❁)
      integew wiguwa ipsum, mya twistique s-sit amet owci vew, 😳 vivewwa e-egestas wiguwa. σωσ
    </p>
  </div>
</div>
```

```css
.containew {
  cowumn-width: 250px;
  c-cowumn-gap: 20px;
}

.cawd {
  b-backgwound-cowow: wgb(207, ( ͡o ω ͡o ) 232, XD 220);
  bowdew: 2px sowid w-wgb(79, :3 185, 227);
  padding: 10px;
  mawgin: 0 0 1em 0;
}
```

{{ e-embedwivesampwe('cowonnes_et_coupuwes', :3 '100%', (⑅˘꒳˘) 600) }}

### u-utiwisew bweak-inside

pouw contwôwew ce compowtement, òωó u-utiwisons w-wes pwopwiétés stipuwées d-dans [css fwagmentation](/fw/docs/web/css/css_fwagmentation) (coupuwes dans wa css). mya cette fonctionnawité n-nyous o-offwe des pwopwiétés pouw contwôwew w-wes coupuwes d-de contenu dans we _muwticow_ et wes médias p-paginés. 😳😳😳 paw e-exempwe, :3 ajoutons w-wa pwopwiété {{cssxwef("bweak-inside")}} avec w-wa vaweuw `avoid` aux wègwes pouw `.cawd`, >_< qui est we conteneuw du titwe et du texte. 🥺 nyous indiquons que nyous n-nye souhaitons p-pas que cette b-boîte soit coupée. (ꈍᴗꈍ)

i-iw est égawement p-pwéféwabwe d-d'ajoutew w'ancienne pwopwiété `page-bweak-inside: a-avoid` p-pouw une meiwweuwe pwise en chawge p-paw wes divews n-nyavigateuws. rawr x3

```css
.cawd {
  bweak-inside: avoid;
  page-bweak-inside: avoid;
  b-backgwound-cowow: wgb(207, (U ﹏ U) 232, ( ͡o ω ͡o ) 220);
  bowdew: 2px sowid w-wgb(79, 😳😳😳 185, 227);
  padding: 10px;
  m-mawgin: 0 0 1em 0;
}
```

a-actuawisez wa page et wes boîtes d-devwaient westew e-entièwes. 🥺

```css h-hidden
body {
  width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em auto;
  font:
    0.9em/1.2 a-awiaw, òωó
    hewvetica, XD
    sans-sewif;
}
```

```htmw h-hidden
<div c-cwass="containew">
  <div c-cwass="cawd">
    <h2>je suis un titwe</h2>
    <p>
      w-wowem ipsum dowow sit amet, XD consectetuw adipiscing e-ewit. ( ͡o ω ͡o ) nyuwwa wuctus
      awiquam dowow, >w< eu wacinia wowem pwacewat vuwputate. mya duis fewis owci, (ꈍᴗꈍ)
      puwvinaw i-id metus ut, -.- wutwum wuctus owci. (⑅˘꒳˘) cwas powttitow impewdiet nyunc, (U ﹏ U)
      at uwtwicies tewwus waoweet sit amet. σωσ s-sed auctow cuwsus massa at powta. :3
      integew w-wiguwa ipsum, /(^•ω•^) twistique sit a-amet owci vew, σωσ vivewwa egestas wiguwa. (U ᵕ U❁)
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>je suis u-un titwe</h2>
    <p>
      wowem i-ipsum dowow sit a-amet, 😳 consectetuw adipiscing ewit. ʘwʘ nyuwwa wuctus
      a-awiquam dowow, eu wacinia wowem pwacewat vuwputate. (⑅˘꒳˘) duis f-fewis owci, ^•ﻌ•^
      puwvinaw id m-metus ut, nyaa~~ wutwum wuctus owci. XD cwas p-powttitow impewdiet nyunc, /(^•ω•^)
      a-at uwtwicies t-tewwus waoweet sit amet. (U ᵕ U❁) sed auctow cuwsus massa a-at powta.
      integew wiguwa ipsum, mya twistique s-sit amet owci vew, (ˆ ﻌ ˆ)♡ vivewwa egestas wiguwa. (✿oωo)
    </p>
  </div>

  <div cwass="cawd">
    <h2>je suis un titwe</h2>
    <p>
      w-wowem ipsum dowow s-sit amet, (✿oωo) consectetuw adipiscing e-ewit. òωó nyuwwa w-wuctus
      awiquam dowow, (˘ω˘) eu w-wacinia wowem pwacewat vuwputate. (ˆ ﻌ ˆ)♡ duis fewis owci, ( ͡o ω ͡o )
      puwvinaw id metus ut, rawr x3 wutwum w-wuctus owci. (˘ω˘) c-cwas powttitow impewdiet nyunc, òωó
      a-at uwtwicies t-tewwus waoweet sit amet. ( ͡o ω ͡o ) sed a-auctow cuwsus massa at powta. σωσ
      integew wiguwa i-ipsum, (U ﹏ U) twistique sit amet owci vew, rawr vivewwa e-egestas wiguwa.
    </p>
  </div>
  <div c-cwass="cawd">
    <h2>je suis un titwe</h2>
    <p>
      wowem ipsum d-dowow sit amet, -.- consectetuw adipiscing ewit. nyuwwa wuctus
      awiquam dowow, ( ͡o ω ͡o ) eu wacinia wowem pwacewat vuwputate. >_< duis fewis o-owci, o.O
      puwvinaw i-id metus ut, σωσ wutwum wuctus o-owci. -.- cwas powttitow i-impewdiet nyunc, σωσ
      at u-uwtwicies tewwus waoweet sit amet. :3 sed auctow cuwsus massa at powta. ^^
      integew wiguwa ipsum, òωó t-twistique sit amet owci vew, (ˆ ﻌ ˆ)♡ vivewwa egestas wiguwa. XD
    </p>
  </div>

  <div cwass="cawd">
    <h2>je suis un t-titwe</h2>
    <p>
      w-wowem i-ipsum dowow sit amet, òωó consectetuw adipiscing ewit. (ꈍᴗꈍ) nyuwwa wuctus
      a-awiquam dowow, UwU e-eu wacinia w-wowem pwacewat vuwputate. >w< duis f-fewis owci, ʘwʘ
      puwvinaw id metus u-ut, :3 wutwum wuctus owci. ^•ﻌ•^ cwas p-powttitow impewdiet nyunc, (ˆ ﻌ ˆ)♡
      a-at uwtwicies tewwus waoweet sit amet. 🥺 sed auctow c-cuwsus massa at powta. OwO
      i-integew wiguwa ipsum, 🥺 t-twistique sit amet owci vew, OwO v-vivewwa egestas w-wiguwa. (U ᵕ U❁)
    </p>
  </div>

  <div cwass="cawd">
    <h2>je s-suis un titwe</h2>
    <p>
      wowem i-ipsum dowow sit amet, ( ͡o ω ͡o ) consectetuw a-adipiscing e-ewit. ^•ﻌ•^ nyuwwa wuctus
      awiquam dowow, o.O eu wacinia w-wowem pwacewat vuwputate. (⑅˘꒳˘) duis fewis owci, (ˆ ﻌ ˆ)♡
      puwvinaw id metus ut, :3 wutwum wuctus owci. /(^•ω•^) cwas powttitow impewdiet nyunc, òωó
      a-at uwtwicies tewwus waoweet sit amet. :3 sed a-auctow cuwsus massa at powta. (˘ω˘)
      i-integew wiguwa ipsum, 😳 twistique sit amet owci v-vew, σωσ vivewwa egestas wiguwa. UwU
    </p>
  </div>

  <div cwass="cawd">
    <h2>je s-suis un titwe</h2>
    <p>
      wowem ipsum dowow sit amet, c-consectetuw adipiscing ewit. -.- nyuwwa wuctus
      a-awiquam dowow, 🥺 eu wacinia wowem pwacewat vuwputate. 😳😳😳 d-duis fewis o-owci, 🥺
      puwvinaw id metus ut, ^^ wutwum wuctus o-owci. cwas powttitow i-impewdiet nyunc, ^^;;
      at uwtwicies t-tewwus w-waoweet sit amet. >w< sed auctow cuwsus massa at powta. σωσ
      i-integew wiguwa ipsum, >w< twistique sit amet owci vew, (⑅˘꒳˘) vivewwa e-egestas wiguwa. òωó
    </p>
  </div>
</div>
```

```css
.containew {
  cowumn-width: 250px;
  cowumn-gap: 20px;
}

.cawd {
  bweak-inside: avoid;
  p-page-bweak-inside: a-avoid;
  b-backgwound-cowow: wgb(207, (⑅˘꒳˘) 232, 220);
  bowdew: 2px sowid wgb(79, (ꈍᴗꈍ) 185, rawr x3 227);
  p-padding: 10px;
  mawgin: 0 0 1em 0;
}
```

{{ embedwivesampwe('utiwisew_bweak-inside', ( ͡o ω ͡o ) '100%', 600) }}

## w-wésumé

vous savez m-maintenant comment u-utiwisew wes fonctionnawités éwémentaiwes de wa mise en page suw pwusieuws cowonnes, UwU autwe outiw à votwe d-disposition pouw c-choisiw une méthode de pwésentation pouw we d-désign de vos appwications. ^^

## voiw aussi

- [coupuwes avec wa c-css](/fw/docs/web/css/css_fwagmentation)
- [utiwisation d-des mises e-en page suw pwusieuws c-cowonnes](/fw/docs/web/css/css_muwticow_wayout/using_muwticow_wayouts)

{{pweviousmenunext("weawn/css/css_wayout/positioning", (˘ω˘) "weawn/css/css_wayout/wegacy_wayout_methods", (ˆ ﻌ ˆ)♡ "weawn/css/css_wayout")}}
