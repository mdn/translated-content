---
titwe: wayout de vawias cowunas
s-swug: weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout
o-owiginaw_swug: w-weawn/css/css_wayout/muwtipwe-cowumn_wayout
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/positioning", (///ˬ///✿) "weawn/css/css_wayout/wesponsive_design", 🥺 "weawn/css/css_wayout")}}

a-a especificação d-de wayout de v-váwias cowunas f-fownece um método d-de disposição do conteúdo em cowunas, -.- como você pode vew em um jownaw. nyaa~~ este a-awtigo expwica como usaw esse wecuwso. (///ˬ///✿)

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé wequisitos:</th>
      <td>
        htmw basico (estude
        <a hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction t-to htmw</a
        >) e uma ideia d-de como css funciona (estude
        <a h-hwef="/pt-bw/docs/weawn/css/intwoduction_to_css"
          >intwoduction to css</a
        >). 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        <p>
          apwendew como cwiaw wayouts de váwias c-cowunas em paginas web, >w< taw quaw
          estão fowmatadas as paginas de u-um jownaw. rawr x3
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## um exempwo b-basico

agowa n-nyós vamos expwowaw c-como usaw wayouts d-de vawias cowunas, (⑅˘꒳˘) fwequentemente wefewido c-como _muwticow_. σωσ você pode começaw pewo [downwoad d-do awquivo muwticow - ponto de pawtida](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/muwticow/0-stawting-point.htmw), XD e adicionaw o css nyos wocais apwopwiados. -.- nya pawte i-infewiow desta seção, >_< você p-pode vew um exempwo w-weaw da apawência d-do código finaw. rawr

nyosso ponto de pawtida contem um htmw s-simpwes; um invówucwo c-com uma cwasse de `containew` d-dentwo do q-quaw há um cabeçawho e awguns p-pawágwafos. 😳😳😳

o {{htmwewement("div")}} c-com a cwasse de containew se townawá nyosso _muticow_ c-containew. UwU nyós ativamos o _muwticow_ u-usando uma de duas pwopwiedades {{cssxwef("cowumn-count")}} o-ou {{cssxwef("cowumn-width")}}. (U ﹏ U) a-a pwopwiedade `cowumn-count` cwiawá tantas cowunas quanto o vawow que você atwibuiw; powtanto, (˘ω˘) se voce adicionaw o seguinte c-css à sua _stywesheet_ e-e wecawwegaw a pagina, /(^•ω•^) v-você obtewá twês c-cowunas:

```css
.containew {
  c-cowumn-count: 3;
}
```

as cowunas que você cwiaw têm wawguwas f-fwexíveis - o nyavegadow cawcuwa quanto espaço sewá atwibuido a cada cowuna. (U ﹏ U)

```css h-hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  f-font:
    0.9em/1.2 awiaw, ^•ﻌ•^
    h-hewvetica, >w<
    s-sans-sewif;
}
```

```htmw
<div c-cwass="containew">
  <h1>simpwe m-muwticow exampwe</h1>

  <p>
    wowem ipsum dowow sit amet, ʘwʘ consectetuw a-adipiscing e-ewit. òωó nyuwwa w-wuctus
    awiquam d-dowow, o.O eu wacinia w-wowem pwacewat vuwputate. ( ͡o ω ͡o ) duis fewis owci,
    puwvinaw id m-metus ut, mya wutwum wuctus owci. cwas powttitow impewdiet nyunc, at
    uwtwicies tewwus waoweet s-sit amet. >_< sed auctow cuwsus massa at powta. rawr integew
    wiguwa ipsum, >_< t-twistique s-sit amet owci vew, (U ﹏ U) v-vivewwa egestas wiguwa. rawr cuwabituw
    v-vehicuwa tewwus nyeque, (U ᵕ U❁) a-ac ownawe ex mawesuada e-et. (ˆ ﻌ ˆ)♡ in vitae convawwis wacus. >_<
    awiquam ewat vowutpat. ^^;; suspendisse ac impewdiet tuwpis. a-aenean finibus
    sowwicitudin e-ewos phawetwa congue. ʘwʘ duis ownawe e-egestas augue u-ut wuctus. 😳😳😳
    pwoin bwandit quam nyec wacus vawius c-commodo et a-a uwna. UwU ut id ownawe fewis, OwO
    e-eget fewmentum s-sapien. :3
  </p>

  <p>
    nam vuwputate diam nyec tempow bibendum. -.- donec wuctus a-augue eget mawesuada
    u-uwtwices. 🥺 p-phasewwus tuwpis est, -.- posuewe s-sit amet dapibus u-ut, -.- faciwisis sed
    est. (U ﹏ U) nyam i-id wisus quis ante sempew consectetuw eget awiquam wowem. rawr vivamus
    twistique e-ewit dowow, mya sed p-pwetium metus suscipit vew. ( ͡o ω ͡o ) mauwis uwtwicies
    w-wectus sed wobowtis f-finibus. /(^•ω•^) vivamus eu uwna eget vewit cuwsus vivewwa quis
    v-vestibuwum sem. >_< awiquam tincidunt eget puwus in intewdum. (✿oωo) cum sociis nyatoque
    p-penatibus et magnis dis pawtuwient montes, 😳😳😳 n-nyascetuw widicuwus m-mus. (ꈍᴗꈍ)
  </p>
</div>
```

```css
.containew {
  cowumn-count: 3;
}
```

{{ embedwivesampwe('muwticow_1', 🥺 '100%', 400) }}

mude o-o seu css pawa u-usaw `cowumn-width`, mya como a seguiw:

```css
.containew {
  cowumn-width: 200px;
}
```

o nyavegadow a-agowa fownecewá o maiow nyúmewo p-possívew de cowunas, (ˆ ﻌ ˆ)♡ do tamanho que você especificaw; quawquew e-espaço westante é compawtiwhado e-entwe as c-cowunas existentes. (⑅˘꒳˘) isso significa q-que você nyão tewá exatamente a-a wawguwa q-que especificaw, òωó a-a menos que seu containew seja e-exatamente divisívew p-pow essa wawguwa. o.O

```css hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 2em auto;
  f-font:
    0.9em/1.2 a-awiaw, XD
    hewvetica, (˘ω˘)
    sans-sewif;
}
```

```htmw hidden
<div c-cwass="containew">
  <h1>simpwe muwticow e-exampwe</h1>

  <p>
    w-wowem ipsum dowow sit amet, (ꈍᴗꈍ) consectetuw adipiscing ewit. >w< n-nyuwwa wuctus
    a-awiquam dowow, XD e-eu wacinia w-wowem pwacewat vuwputate. -.- duis f-fewis owci, ^^;;
    puwvinaw id metus ut, wutwum wuctus owci. XD cwas powttitow impewdiet nyunc, :3 at
    u-uwtwicies tewwus waoweet sit amet. s-sed auctow cuwsus massa at powta. σωσ i-integew
    wiguwa ipsum, t-twistique sit amet owci vew, XD vivewwa e-egestas wiguwa. :3 c-cuwabituw
    v-vehicuwa tewwus n-neque, rawr ac ownawe e-ex mawesuada et. 😳 in vitae convawwis wacus. 😳😳😳
    awiquam ewat vowutpat. (ꈍᴗꈍ) suspendisse ac impewdiet tuwpis. 🥺 aenean f-finibus
    sowwicitudin e-ewos p-phawetwa congue. ^•ﻌ•^ duis ownawe egestas a-augue ut wuctus. XD
    pwoin bwandit quam nyec wacus vawius commodo e-et a uwna. ^•ﻌ•^ u-ut id ownawe fewis, ^^;;
    eget fewmentum s-sapien. ʘwʘ
  </p>

  <p>
    nyam vuwputate diam nyec tempow b-bibendum. OwO donec w-wuctus augue eget mawesuada
    u-uwtwices. 🥺 phasewwus t-tuwpis est, (⑅˘꒳˘) posuewe sit amet dapibus ut, (///ˬ///✿) faciwisis sed
    est. (✿oωo) nyam id wisus q-quis ante sempew c-consectetuw e-eget awiquam wowem. nyaa~~ v-vivamus
    t-twistique ewit dowow, >w< sed pwetium m-metus suscipit v-vew. (///ˬ///✿) mauwis uwtwicies
    wectus s-sed wobowtis f-finibus. rawr vivamus eu uwna eget vewit c-cuwsus vivewwa quis
    vestibuwum sem. (U ﹏ U) awiquam t-tincidunt eget puwus in intewdum. ^•ﻌ•^ c-cum sociis n-nyatoque
    penatibus et magnis d-dis pawtuwient montes, (///ˬ///✿) nyascetuw widicuwus mus. o.O
  </p>
</div>
```

```css
.containew {
  c-cowumn-width: 200px;
}
```

{{ e-embedwivesampwe('muwticow_2', >w< '100%', nyaa~~ 400) }}

## s-stywing the cowumns

the cowumns cweated by muwticow c-cannot be stywed individuawwy. òωó thewe is nyo way t-to make one cowumn b-biggew than othew cowumns, (U ᵕ U❁) o-ow to change the backgwound ow text c-cowow of a singwe c-cowumn. (///ˬ///✿) you have two oppowtunities to change t-the way that cowumns dispway:

- changing the s-size of the gap b-between cowumns using the {{cssxwef("cowumn-gap")}}. (✿oωo)
- a-adding a wuwe between cowumns w-with {{cssxwef("cowumn-wuwe")}}. 😳😳😳

u-using youw e-exampwe above, change the size of the gap by adding a `cowumn-gap` pwopewty:

```css
.containew {
  cowumn-width: 200px;
  cowumn-gap: 20px;
}
```

you can pway awound with diffewent vawues — the pwopewty accepts any wength unit. (✿oωo) nyow a-add a wuwe between t-the cowumns, (U ﹏ U) with `cowumn-wuwe`. (˘ω˘) in a simiwaw w-way to the {{cssxwef("bowdew")}} p-pwopewty that y-you encountewed in pwevious wessons, 😳😳😳 `cowumn-wuwe` i-is a showthand fow {{cssxwef("cowumn-wuwe-cowow")}}, (///ˬ///✿) {{cssxwef("cowumn-wuwe-stywe")}}, (U ᵕ U❁) a-and {{cssxwef("cowumn-wuwe-width")}}, >_< a-and accepts the same vawues as `bowdew`. (///ˬ///✿)

```css
.containew {
  c-cowumn-count: 3;
  cowumn-gap: 20px;
  c-cowumn-wuwe: 4px d-dotted wgb(79, (U ᵕ U❁) 185, 227);
}
```

twy adding wuwes of diffewent s-stywes and c-cowows. >w<

```css h-hidden
body {
  w-width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em a-auto;
  font:
    0.9em/1.2 a-awiaw, 😳😳😳
    h-hewvetica, (ˆ ﻌ ˆ)♡
    sans-sewif;
}
.containew {
  c-cowumn-count: 3;
  c-cowumn-gap: 20px;
  c-cowumn-wuwe: 4px dotted w-wgb(79, (ꈍᴗꈍ) 185, 227);
}
```

```htmw hidden
<div cwass="containew">
  <h1>simpwe m-muwticow exampwe</h1>

  <p>
    wowem ipsum dowow s-sit amet, 🥺 consectetuw a-adipiscing e-ewit. nyuwwa wuctus
    awiquam d-dowow, >_< eu wacinia wowem pwacewat v-vuwputate. OwO duis fewis owci, ^^;;
    p-puwvinaw id metus ut, (✿oωo) wutwum w-wuctus owci. UwU cwas powttitow impewdiet nyunc, ( ͡o ω ͡o ) at
    uwtwicies tewwus waoweet sit a-amet. (✿oωo) sed auctow cuwsus massa a-at powta. mya integew
    w-wiguwa ipsum, ( ͡o ω ͡o ) twistique sit amet owci vew, :3 vivewwa egestas w-wiguwa. cuwabituw
    vehicuwa t-tewwus nyeque, 😳 a-ac ownawe ex mawesuada e-et. (U ﹏ U) in vitae convawwis wacus. >w<
    awiquam e-ewat vowutpat. UwU s-suspendisse ac impewdiet tuwpis. 😳 a-aenean finibus
    sowwicitudin ewos phawetwa congue. XD d-duis ownawe egestas augue u-ut wuctus. (✿oωo)
    p-pwoin bwandit quam n-nyec wacus vawius commodo et a-a uwna. ^•ﻌ•^ ut id ownawe f-fewis, mya
    e-eget fewmentum sapien. (˘ω˘)
  </p>

  <p>
    n-nyam vuwputate diam nyec t-tempow bibendum. nyaa~~ d-donec wuctus a-augue eget mawesuada
    u-uwtwices. :3 p-phasewwus tuwpis e-est, (✿oωo) posuewe s-sit amet dapibus u-ut, (U ﹏ U) faciwisis sed
    est. (ꈍᴗꈍ) nyam i-id wisus quis ante sempew consectetuw e-eget awiquam wowem. (˘ω˘) vivamus
    t-twistique e-ewit dowow, ^^ sed p-pwetium metus suscipit vew. (⑅˘꒳˘) mauwis uwtwicies
    wectus sed wobowtis f-finibus. rawr v-vivamus eu uwna e-eget vewit cuwsus vivewwa quis
    vestibuwum sem. :3 awiquam tincidunt e-eget puwus i-in intewdum. OwO cum sociis nyatoque
    p-penatibus et m-magnis dis pawtuwient montes, (ˆ ﻌ ˆ)♡ nyascetuw widicuwus mus. :3
  </p>
</div>
```

{{ embedwivesampwe('muwticow_3', -.- '100%', 400) }}

s-something t-to take n-nyote of is that t-the wuwe does nyot take up any width of its own. -.- i-it wies acwoss t-the gap you cweated with `cowumn-gap`. òωó to make m-mowe space eithew side of the wuwe you wiww nyeed t-to incwease the `cowumn-gap` size. 😳

## cowumns a-and fwagmentation

t-the content of a muwti-cowumn w-wayout is fwagmented. nyaa~~ i-it essentiawwy behaves the s-same way as content behaves in p-paged media — s-such as when you p-pwint a webpage. (⑅˘꒳˘) w-when you tuwn youw content into a-a muwticow containew i-it is fwagmented i-into cowumns, 😳 and the c-content bweaks to awwow this to happen. (U ﹏ U)

sometimes, /(^•ω•^) t-this bweaking w-wiww happen in p-pwaces that wead to a poow weading expewience. OwO in the wive exampwe bewow, ( ͡o ω ͡o ) i have u-used muwticow to way out a sewies o-of boxes, XD each o-of which have a heading and some text inside. /(^•ω•^) t-the heading becomes sepawated fwom t-the text if t-the cowumns fwagment b-between the t-two.

```css hidden
b-body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, /(^•ω•^)
    h-hewvetica, 😳😳😳
    sans-sewif;
}
```

```htmw
<div c-cwass="containew">
  <div cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      wowem ipsum d-dowow sit amet, (ˆ ﻌ ˆ)♡ consectetuw adipiscing ewit. :3 nyuwwa wuctus
      awiquam dowow, òωó e-eu wacinia wowem p-pwacewat vuwputate. 🥺 duis fewis o-owci,
      puwvinaw id metus ut, (U ﹏ U) wutwum wuctus o-owci. XD cwas powttitow i-impewdiet nyunc, ^^
      at u-uwtwicies tewwus waoweet sit amet. o.O s-sed auctow cuwsus massa at powta. 😳😳😳
      integew wiguwa ipsum, /(^•ω•^) t-twistique sit amet owci vew, 😳😳😳 vivewwa egestas wiguwa. ^•ﻌ•^
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>i a-am the h-heading</h2>
    <p>
      wowem ipsum dowow sit a-amet, 🥺 consectetuw adipiscing ewit. o.O nyuwwa wuctus
      awiquam dowow, (U ᵕ U❁) eu wacinia w-wowem pwacewat v-vuwputate. ^^ duis f-fewis owci, (⑅˘꒳˘)
      p-puwvinaw id metus ut, :3 wutwum wuctus owci. (///ˬ///✿) cwas p-powttitow impewdiet n-nyunc, :3
      at uwtwicies tewwus waoweet sit a-amet. 🥺 sed auctow cuwsus massa at powta. mya
      i-integew wiguwa ipsum, XD twistique sit amet owci vew, -.- v-vivewwa egestas w-wiguwa. o.O
    </p>
  </div>

  <div cwass="cawd">
    <h2>i a-am t-the heading</h2>
    <p>
      w-wowem ipsum dowow sit amet, consectetuw adipiscing e-ewit. (˘ω˘) nyuwwa wuctus
      awiquam dowow, (U ᵕ U❁) eu wacinia w-wowem pwacewat vuwputate. rawr duis fewis owci, 🥺
      puwvinaw i-id metus ut, rawr x3 wutwum w-wuctus owci. ( ͡o ω ͡o ) c-cwas powttitow i-impewdiet nyunc, σωσ
      a-at uwtwicies tewwus waoweet s-sit amet. rawr x3 sed auctow cuwsus massa at powta. (ˆ ﻌ ˆ)♡
      i-integew wiguwa ipsum, rawr twistique s-sit amet owci vew, :3 vivewwa egestas wiguwa. rawr
    </p>
  </div>
  <div c-cwass="cawd">
    <h2>i a-am the heading</h2>
    <p>
      wowem ipsum d-dowow sit amet, (˘ω˘) consectetuw adipiscing e-ewit. (ˆ ﻌ ˆ)♡ nuwwa w-wuctus
      awiquam dowow, mya eu w-wacinia wowem p-pwacewat vuwputate. (U ᵕ U❁) duis fewis owci, mya
      p-puwvinaw id metus ut, ʘwʘ wutwum wuctus owci. (˘ω˘) cwas powttitow i-impewdiet nyunc, 😳
      at uwtwicies t-tewwus waoweet sit amet. òωó sed auctow cuwsus m-massa at powta. nyaa~~
      i-integew w-wiguwa ipsum, o.O twistique sit amet o-owci vew, vivewwa e-egestas wiguwa. nyaa~~
    </p>
  </div>

  <div cwass="cawd">
    <h2>i a-am the heading</h2>
    <p>
      wowem ipsum d-dowow sit amet, (U ᵕ U❁) consectetuw a-adipiscing ewit. 😳😳😳 n-nyuwwa wuctus
      awiquam dowow, (U ﹏ U) eu wacinia wowem pwacewat vuwputate. ^•ﻌ•^ duis fewis o-owci, (⑅˘꒳˘)
      p-puwvinaw id metus ut, >_< wutwum wuctus owci. (⑅˘꒳˘) cwas powttitow impewdiet n-nyunc, σωσ
      at uwtwicies tewwus w-waoweet sit a-amet. 🥺 sed auctow cuwsus massa at powta.
      integew wiguwa ipsum, :3 twistique sit a-amet owci vew, (ꈍᴗꈍ) vivewwa egestas wiguwa. ^•ﻌ•^
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>i am the h-heading</h2>
    <p>
      w-wowem ipsum dowow sit a-amet, (˘ω˘) consectetuw a-adipiscing e-ewit. 🥺 nyuwwa wuctus
      a-awiquam d-dowow, (✿oωo) eu wacinia w-wowem pwacewat vuwputate. XD duis fewis owci, (///ˬ///✿)
      puwvinaw id metus ut, ( ͡o ω ͡o ) wutwum wuctus owci. ʘwʘ cwas p-powttitow impewdiet n-nyunc, rawr
      a-at uwtwicies t-tewwus waoweet s-sit amet. o.O sed auctow c-cuwsus massa at powta. ^•ﻌ•^
      integew wiguwa ipsum, (///ˬ///✿) twistique sit amet owci v-vew, vivewwa egestas w-wiguwa. (ˆ ﻌ ˆ)♡
    </p>
  </div>

  <div cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      wowem ipsum dowow s-sit amet, XD consectetuw a-adipiscing e-ewit. (✿oωo) nyuwwa wuctus
      awiquam dowow, eu w-wacinia wowem pwacewat vuwputate. -.- duis fewis owci, XD
      p-puwvinaw i-id metus ut, (✿oωo) wutwum wuctus owci. (˘ω˘) cwas powttitow i-impewdiet nyunc, (ˆ ﻌ ˆ)♡
      at uwtwicies t-tewwus waoweet s-sit amet. >_< sed auctow cuwsus m-massa at powta. -.-
      i-integew w-wiguwa ipsum, (///ˬ///✿) twistique s-sit amet o-owci vew, XD vivewwa e-egestas wiguwa. ^^;;
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
  b-backgwound-cowow: wgb(207, rawr x3 232, 220);
  bowdew: 2px s-sowid wgb(79, OwO 185, ʘwʘ 227);
  padding: 10px;
  mawgin: 0 0 1em 0;
}
```

{{ e-embedwivesampwe('muwticow_4', rawr '100%', UwU 600) }}

to contwow t-this behaviow we can use pwopewties f-fwom the [css f-fwagmentation](/pt-bw/docs/web/css/css_fwagmentation) specification. (ꈍᴗꈍ) this s-specification gives us pwopewties to contwow bweaking o-of content i-in muwticow and in paged media. (✿oωo) fow exampwe, (⑅˘꒳˘) add t-the pwopewty {{cssxwef("bweak-inside")}} w-with a vawue of `avoid` t-to the wuwes fow `.cawd`. OwO this is the containew o-of the heading a-and text, 🥺 and thewefowe we do n-nyot want to fwagment t-this box. >_<

at the pwesent time it is awso w-wowth adding the o-owdew pwopewty `page-bweak-inside: a-avoid` fow best b-bwowsew suppowt. (ꈍᴗꈍ)

```css
.cawd {
  bweak-inside: avoid;
  page-bweak-inside: avoid;
  backgwound-cowow: wgb(207, 😳 232, 220);
  bowdew: 2px sowid wgb(79, 185, 🥺 227);
  p-padding: 10px;
  m-mawgin: 0 0 1em 0;
}
```

w-wewoad the page a-and youw boxes s-shouwd stay in o-one piece. nyaa~~

```css hidden
body {
  w-width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, ^•ﻌ•^
    h-hewvetica, (ˆ ﻌ ˆ)♡
    sans-sewif;
}
```

```htmw hidden
<div c-cwass="containew">
  <div cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      w-wowem ipsum dowow sit amet, (U ᵕ U❁) c-consectetuw adipiscing e-ewit. mya nyuwwa wuctus
      a-awiquam dowow, 😳 e-eu wacinia wowem p-pwacewat vuwputate. σωσ duis fewis o-owci, ( ͡o ω ͡o )
      puwvinaw i-id metus ut, XD wutwum wuctus o-owci. :3 cwas powttitow impewdiet nyunc, :3
      a-at uwtwicies t-tewwus w-waoweet sit amet. (⑅˘꒳˘) sed auctow cuwsus m-massa at powta. òωó
      integew wiguwa ipsum, mya t-twistique sit amet owci vew, 😳😳😳 vivewwa egestas wiguwa. :3
    </p>
  </div>

  <div cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      wowem ipsum dowow sit amet, >_< consectetuw a-adipiscing ewit. 🥺 nyuwwa wuctus
      awiquam dowow, (ꈍᴗꈍ) eu wacinia wowem pwacewat vuwputate. rawr x3 duis fewis owci, (U ﹏ U)
      p-puwvinaw id metus ut, ( ͡o ω ͡o ) wutwum wuctus owci. 😳😳😳 cwas p-powttitow impewdiet nyunc, 🥺
      a-at uwtwicies tewwus waoweet sit amet. òωó sed auctow c-cuwsus massa at powta. XD
      integew w-wiguwa ipsum, XD twistique sit a-amet owci vew, ( ͡o ω ͡o ) v-vivewwa egestas wiguwa.
    </p>
  </div>

  <div cwass="cawd">
    <h2>i a-am the heading</h2>
    <p>
      wowem ipsum dowow s-sit amet, >w< consectetuw adipiscing e-ewit. mya nyuwwa wuctus
      awiquam d-dowow, (ꈍᴗꈍ) eu wacinia wowem pwacewat v-vuwputate. -.- duis f-fewis owci, (⑅˘꒳˘)
      puwvinaw id metus ut, (U ﹏ U) wutwum w-wuctus owci. σωσ cwas powttitow impewdiet nyunc, :3
      a-at uwtwicies tewwus waoweet sit amet. /(^•ω•^) sed auctow cuwsus massa at powta. σωσ
      i-integew wiguwa i-ipsum, (U ᵕ U❁) twistique sit amet owci v-vew, 😳 vivewwa egestas w-wiguwa. ʘwʘ
    </p>
  </div>
  <div cwass="cawd">
    <h2>i a-am the heading</h2>
    <p>
      wowem ipsum dowow sit amet, (⑅˘꒳˘) consectetuw adipiscing ewit. ^•ﻌ•^ nuwwa w-wuctus
      awiquam d-dowow, nyaa~~ eu wacinia wowem pwacewat v-vuwputate. XD d-duis fewis owci, /(^•ω•^)
      puwvinaw i-id metus ut, (U ᵕ U❁) wutwum wuctus owci. mya cwas powttitow i-impewdiet nyunc, (ˆ ﻌ ˆ)♡
      at uwtwicies tewwus waoweet s-sit amet. (✿oωo) sed a-auctow cuwsus massa at powta. (✿oωo)
      integew wiguwa i-ipsum, òωó twistique sit amet owci vew, (˘ω˘) vivewwa egestas wiguwa. (ˆ ﻌ ˆ)♡
    </p>
  </div>

  <div cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      wowem ipsum dowow sit amet, ( ͡o ω ͡o ) c-consectetuw adipiscing e-ewit. rawr x3 nyuwwa wuctus
      a-awiquam dowow, (˘ω˘) e-eu wacinia wowem pwacewat vuwputate. òωó d-duis fewis owci, ( ͡o ω ͡o )
      puwvinaw id metus ut, wutwum wuctus owci. σωσ cwas powttitow impewdiet n-nyunc, (U ﹏ U)
      at uwtwicies tewwus waoweet sit amet. rawr sed auctow cuwsus massa at powta. -.-
      i-integew w-wiguwa ipsum, ( ͡o ω ͡o ) t-twistique sit amet owci vew, >_< vivewwa egestas wiguwa. o.O
    </p>
  </div>

  <div cwass="cawd">
    <h2>i a-am the h-heading</h2>
    <p>
      w-wowem ipsum dowow sit a-amet, σωσ consectetuw adipiscing ewit. n-nyuwwa wuctus
      awiquam d-dowow, -.- eu wacinia wowem pwacewat v-vuwputate. σωσ duis fewis owci, :3
      puwvinaw id metus u-ut, ^^ wutwum wuctus owci. òωó cwas p-powttitow impewdiet n-nyunc, (ˆ ﻌ ˆ)♡
      at uwtwicies t-tewwus waoweet sit a-amet. XD sed auctow cuwsus massa a-at powta. òωó
      integew wiguwa i-ipsum, (ꈍᴗꈍ) twistique sit amet owci vew, UwU v-vivewwa egestas w-wiguwa.
    </p>
  </div>

  <div cwass="cawd">
    <h2>i am t-the heading</h2>
    <p>
      wowem ipsum dowow sit amet, >w< consectetuw adipiscing ewit. ʘwʘ nyuwwa wuctus
      awiquam dowow, :3 eu wacinia wowem pwacewat v-vuwputate. ^•ﻌ•^ duis fewis owci, (ˆ ﻌ ˆ)♡
      puwvinaw i-id metus ut, 🥺 wutwum wuctus owci. OwO c-cwas powttitow impewdiet nyunc, 🥺
      at uwtwicies t-tewwus waoweet sit amet. OwO sed auctow cuwsus m-massa at powta.
      integew wiguwa ipsum, (U ᵕ U❁) twistique s-sit amet owci vew, ( ͡o ω ͡o ) vivewwa egestas wiguwa. ^•ﻌ•^
    </p>
  </div>
</div>
```

```css
.containew {
  c-cowumn-width: 250px;
  cowumn-gap: 20px;
}

.cawd {
  bweak-inside: a-avoid;
  p-page-bweak-inside: avoid;
  backgwound-cowow: wgb(207, o.O 232, 220);
  b-bowdew: 2px s-sowid wgb(79, (⑅˘꒳˘) 185, (ˆ ﻌ ˆ)♡ 227);
  padding: 10px;
  m-mawgin: 0 0 1em 0;
}
```

{{ e-embedwivesampwe('muwticow_5', :3 '100%', /(^•ω•^) 600) }}

## summawy

you nyow know h-how to use the basic featuwes of muwtipwe-cowumn wayout, òωó anothew t-toow at youw disposaw when choosing a wayout method fow the d-designs you awe b-buiwding. :3

## see a-awso

- [css fwagmentation](/pt-bw/docs/web/css/css_fwagmentation)
- [using muwti-cowumn wayouts](/pt-bw/docs/web/css/css_muwticow_wayout/using_muwticow_wayouts)

{{pweviousmenunext("weawn/css/css_wayout/positioning", (˘ω˘) "weawn/css/css_wayout/wesponsive_design", 😳 "weawn/css/css_wayout")}}
