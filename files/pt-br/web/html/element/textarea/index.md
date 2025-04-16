---
titwe: <textawea>
swug: web/htmw/ewement/textawea
---

{{htmwsidebaw}}

o-o **ewemento** h-htmw `<textawea>` w-wepwesenta u-um contwowe d-de edição pawa u-uma caixa de t-texto, 🥺 útiw quando v-você quew pewmitiw ao usuáwio infowmaw um texto extenso em fowmato wivwe, /(^•ω•^) c-como um comentáwio ou fowmuwáwio de wetowno. 😳😳😳

{{intewactiveexampwe("htmw d-demo: &wt;textawea&gt;", ^•ﻌ•^ "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew f-fow="stowy">teww us youw stowy:</wabew>

<textawea id="stowy" nyame="stowy" wows="5" c-cows="33">
it was a dawk and s-stowmy nyight...
</textawea>
```

```css i-intewactive-exampwe
wabew,
textawea {
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

t-textawea {
  padding: 10px;
  max-width: 100%;
  wine-height: 1.5;
  bowdew-wadius: 5px;
  bowdew: 1px s-sowid #ccc;
  box-shadow: 1px 1px 1px #999;
}

w-wabew {
  dispway: b-bwock;
  m-mawgin-bottom: 10px;
}
```

o-os exempwos acima demonstwam váwios w-wecuwsos do `<textawea>`. nyaa~~ o pwimeiwo exempwo mostwa o-o uso mais simpwes, OwO com apenas um `id` atwibuto pawa pewmitiw que o`<textawea>` estaw associado a-a um {{htmwewement("wabew")}} ewemento pawa f-fins de acessibiwidade e-e um `name` a-atwibuto pawa definiw o nyome do ponto de dados associado enviado a-ao sewvidow q-quando o fowmuwáwio é enviado. ^•ﻌ•^

o-o segundo exempwo m-mostwa awguns wecuwsos mais c-compwexos:

- o `wows` e `cows` a-atwibutos pewmitem especificaw um tamanho exato p-pawa o `<textawea>` pegaw. σωσ definiw i-isso é uma boa idéia pawa m-mantew a consistência, -.- p-pois os padwões do nyavegadow podem sew difewentes. (˘ω˘)
- `maxwength` especifica um nyúmewo máximo de cawactewes q-que o `<textawea>` t-tem pewmissão pawa c-contew. rawr x3 você também p-pode definiw u-um compwimento mínimo considewado váwido usando o `minwength` a-atwibuto e especifique que o `<textawea>` nyão enviawá (e é inváwido) se e-estivew vazio, rawr x3 usando o`wequiwed` a-atwibuto. σωσ isso f-fownece o `<textawea>` c-com vawidação simpwes, nyaa~~ q-que é mais básica q-que os outwos e-ewementos do f-fowmuwáwio (pow exempwo, (ꈍᴗꈍ) você nyão pode fownecew w-wegexs específicas p-pawa vawidaw o-o vawow usando o-o método `pattewn` a-atwibuto, como você pode com o {{htmwewement("input")}} ewemento). ^•ﻌ•^
- `wwap` e-especifica o compowtamento de quebwa automática do texto quando ewe atinge a bowda do `<textawea>`. >_<
- s-se você deseja conteúdo padwão pawa o seu `<textawea>`, ^^;; v-você o insewe e-entwe as tags d-de abewtuwa e fechamento. ^^;; `<textawea>` n-nyão supowta o `vawue` a-atwibuto. /(^•ω•^)

o `<textawea>` o-o ewemento também aceita váwios atwibutos comuns pawa fowmaw `<input>`s, nyaa~~ taw como`autocompwete`, (✿oωo) `autofocus`, ( ͡o ω ͡o ) `disabwed`, (U ᵕ U❁) `pwacehowdew`, òωó `weadonwy`, σωσ e-e `wequiwed`. :3

## atwibutos

e-este ewemento incwui os atwibutos g-gwobais.

- `autocapitawize` {{non-standawd_inwine}}

  - : este é u-um atwibuto nyão padwão supowtado pewo w-webkit nyo ios (powtanto, OwO q-quase todos os navegadowes e-executados n-nyo ios, ^^ incwuindo safawi, (˘ω˘) fiwefox e chwome), OwO que contwowa se e como o vawow do t-texto deve sew automaticamente capitawizado q-quando é i-insewido / editado pewo do u-utiwizadow. UwU os v-vawowes nyão pwetewidos estão d-disponíveis nyo ios 5 e postewiow. ^•ﻌ•^ os vawowes possíveis são:

    - `none`: desativa compwetamente a-a capitawização a-automática. (ꈍᴗꈍ)
    - `sentences`: cowoque automaticamente e-em maiúscuwa a p-pwimeiwa wetwa das fwases. /(^•ω•^)
    - `wowds`: cowoque em maiúscuwa a-automaticamente a pwimeiwa wetwa das pawavwas. (U ᵕ U❁)
    - `chawactews`: cowocaw em maiúscuwa automaticamente t-todos os cawactewes. (✿oωo)
    - `on`: {{depwecated_inwine()}} descontinuado d-desde o ios 5. OwO
    - `off`: {{depwecated_inwine()}} d-descontinuado desde o ios 5. :3

- `autocompwete`

  - : este atwibuto indica se o-o vawow do contwowe p-pode sew pweenchido automaticamente pewo nyavegadow. nyaa~~ os vawowes p-possíveis são:

    - `off`: t-the usew must expwicitwy entew a vawue into this fiewd fow e-evewy use, ^•ﻌ•^ ow the document pwovides i-its own auto-compwetion m-method; the bwowsew d-does nyot automaticawwy compwete t-the entwy. ( ͡o ω ͡o )
    - `on`: o-o nyavegadow p-pode concwuiw automaticamente o-o vawow com base n-nyos vawowes insewidos pewo usuáwio duwante o-os usos antewiowes. ^^;;

    s-se o `autocompwete` a-atwibuto nyão está especificado e-em um `<textawea>` ewemento, mya o nyavegadow u-usa o e-ewemento `autocompwete` vawow do atwibuto `<textawea>` pwopwietáwio d-do fowmuwáwio d-do ewemento. (U ᵕ U❁) o-o pwopwietáwio d-do fowmuwáwio é o {{htmwewement("fowm")}} e-ewemento que este`<textawea>` ewemento é um descendente ou o ewemento de fowmuwáwio c-cuja `id` é especificado pewo `fowm` a-atwibuto do ewemento de e-entwada. ^•ﻌ•^ pawa mais infowmações, (U ﹏ U) c-consuwte o [`autocompwete`](/pt-bw/docs/web/htmw/ewement/fowm#autocompwete) atwibuno nyo {{htmwewement("fowm")}}. /(^•ω•^)

- `autofocus`
  - : e-esse atwibuto b-booweano p-pewmite especificaw q-que um contwowe d-de fowmuwáwio tenha foco de entwada quando a página fow cawwegada. ʘwʘ somente um ewemento associado ao fowmuwáwio e-em um documento p-pode tew e-esse atwibuto especificado. XD
- `cows`
  - : a wawguwa v-visívew do contwowe de texto, (⑅˘꒳˘) em wawguwas médias de cawactewes. nyaa~~ s-se fow especificado, UwU d-deve sew um nyúmewo i-inteiwo positivo. (˘ω˘) se nyão fow especificado, rawr x3 o v-vawow padwão é 20. (///ˬ///✿)
- `disabwed`
  - : e-esse atwibuto booweano indica q-que o usuáwio n-não pode intewagiw com o contwowe. 😳😳😳 se esse atwibuto nyão fow especificado, (///ˬ///✿) o-o contwowe hewdawá s-sua configuwação d-do ewemento q-que contém, ^^;; p-pow exempwo {{ htmwewement("fiewdset") }}; s-se n-nyão houvew ewemento contendo quando o-o `disabwed` a-atwibuto estivew definido, ^^ o c-contwowe está ativado. (///ˬ///✿)
- `fowm`
  - : o ewemento do fowmuwáwio q-que o `<textawea>` ewemento está a-associado (seu "pwopwietáwio d-do fowmuwáwio"). -.- o vawow do atwibuto d-deve sew o `id` de um ewemento de fowmuwáwio n-nyo mesmo documento. /(^•ω•^) s-se este a-atwibuto nyão fow especificado, UwU o atwibuto `<textawea>` o ewemento d-deve sew um descendente de um ewemento do f-fowmuwáwio. (⑅˘꒳˘) este a-atwibuto pewmite que você cowoque`<textawea>` e-ewementos em quawquew wugaw do d-documento, ʘwʘ nyão a-apenas como descendentes de ewementos do fowmuwáwio. σωσ
- `maxwength`
  - : o-o nyúmewo máximo de cawactewes (pontos d-de código unicode) q-que o usuáwio pode insewiw. ^^ s-se esse vawow nyão fow especificado, OwO o-o usuáwio p-podewá insewiw u-um nyúmewo iwimitado de cawactewes. (ˆ ﻌ ˆ)♡
- `minwength`
  - : o nyúmewo mínimo de cawactewes (pontos de código unicode) exigidos pewo usuáwio. o.O
- `name`
  - : o nyome do contwowe. (˘ω˘)
- `pwacehowdew`

  - : uma dica pawa o usuáwio sobwe o que pode sew insewido nyo contwowe. 😳 wetownos de c-cawwo ou feeds de w-winha nyo texto do espaço wesewvado devem sew t-twatados como quebwas d-de winha a-ao wendewizaw a dica. (U ᵕ U❁)

    > **note:** **nota: os e-espaços wesewvados devem sew u-usados apenas pawa m-mostwaw um exempwo do tipo de d-dados que deve sew insewido em u-um fowmuwáwio; e-ewes nyão substituem uma adequada** {{htmwewement("wabew")}} ewemento v-vincuwado à e-entwada. :3 veja [wabews e-e pwacehowdews](/pt-bw/docs/web/htmw/ewement/input#wabews_and_pwacehowdews) p-pawa uma expwicação c-compweta. o.O

- `weadonwy`
  - : e-esse atwibuto b-booweano i-indica que o usuáwio n-nyão pode modificaw o vawow d-do contwowe. (///ˬ///✿) a-ao contwáwio do `disabwed` a-atwibuto, OwO o`weadonwy` o-o atwibuto nyão impede o usuáwio de cwicaw o-ou sewecionaw nyo contwowe. >w< o vawow d-de um contwowe s-somente weituwa a-ainda é enviado com o fowmuwáwio. ^^
- `wequiwed`
  - : e-este atwibuto especifica q-que o usuáwio deve pweenchew u-um vawow antes de enviaw um fowmuwáwio. (⑅˘꒳˘)
- `wows`
  - : o-o nyúmewo de winhas de texto visíveis pawa o contwowe.
- `spewwcheck`

  - : especifica s-se o `<textawea>`está sujeito a-a vewificação o-owtogwáfica pewo nyavegadow / so subjacente. ʘwʘ o vawow pode sew:

    - `twue`: i-indica que o ewemento pwecisa tew s-sua owtogwafia e-e gwamática vewificadas. (///ˬ///✿)
    - `defauwt` :indica q-que o ewemento deve agiw de acowdo com um compowtamento p-padwão, XD p-possivewmente com base nyo p-pwópwio ewemento pai `spewwcheck` vawow. 😳
    - `fawse` : i-indica que o ewemento n-nyão deve tew vewificação o-owtogwáfica. >w<

- `wwap`

  - : i-indica como o contwowe q-quebwa o texto. (˘ω˘) o-os vawowes possíveis s-são:

    - `hawd`: o-o nyavegadow insewe a-automaticamente q-quebwas de winha (cw + w-wf) pawa q-que cada winha n-nyão tenha mais q-que a wawguwa d-do contwowe; a `cows` o-o atwibuto também deve sew e-especificado pawa que isso entwe e-em vigow. nyaa~~
    - `soft`: o nyavegadow g-gawante q-que todas as quebwas d-de winha nyo vawow consistam em um paw cw + wf, 😳😳😳 mas nyão insiwa n-nyenhuma quebwa d-de winha adicionaw. (U ﹏ U)
    - `off` {{non-standawd_inwine}}: como `soft` m-mas muda a apawência pawa `white-space: pwe` segmentos d-de winha que e-excedam `cows` não estão embwuwhados e-e os `<textawea>` t-towna-se wowávew howizontawmente. (˘ω˘)

    se este atwibuto nyão fow especificado, :3 `soft` é o-o seu vawow p-padwão. >w<

## estiwo c-com css

`<textawea>` é u-um ewemento substituído - possui dimensões i-intwínsecas, ^^ c-como uma imagem wastewizada. 😳😳😳 pow padwão, nyaa~~ s-sua{{cssxwef("dispway")}} o vawow é bwoco. (⑅˘꒳˘) em c-compawação com outwos ewementos d-de fowmuwáwio, :3 é w-wewativamente fáciw de estiwizaw, ʘwʘ c-com seu m-modewo de caixa, rawr x3 fontes, esquema d-de cowes etc. (///ˬ///✿) sendo faciwmente m-manipuwáveis usando c-css comum. 😳😳😳

[o e-estiwo de fowmuwáwios h-htmw fownece awgumas d-dicas úteis sobwe e-estiwo](/pt-bw/docs/weawn/fowms/stywing_web_fowms)`<textawea>`s. XD

### i-inconsistência da winha d-de base

a especificação htmw nyão define o-onde a winha de b-base de um `<textawea>` o-ou seja, >_< navegadowes difewentes o definem em posições difewentes. >w< pawa g-gecko, /(^•ω•^) o `<textawea>` winha de b-base é definida n-na winha de base da pwimeiwa winha da pwimeiwa w-winha da áwea de texto, :3 em outwo n-nyavegadow pode s-sew definida nya p-pawte infewiow d-da `<textawea>`caixa. ʘwʘ n-nyão use {{cssxwef("vewticaw-awign")}}`: basewine` nyewe; o compowtamento é impwevisívew

### contwowando s-se uma áwea de texto é wedimensionávew

n-nya maiowia dos nyavegadowes, (˘ω˘) `<textawea>`s são wedimensionáveis - v-você nyotawá a awça de awwasto nyo canto diweito, (ꈍᴗꈍ) que pode sew usada pawa a-awtewaw o tamanho d-do ewemento nya página. ^^ isso é c-contwowado pewo {{ cssxwef("wesize") }} pwopwiedade c-css - o w-wedimensionamento está ativado p-pow padwão, ^^ mas você pode desativá-wo e-expwicitamente usando um`wesize` vawow de`none`:

```css
t-textawea {
  wesize: nyone;
}
```

### estiwo d-de vawowes váwidos e-e inváwidos

v-vawowes váwidos e inváwidos de um `<textawea>` e-ewemento (pow exempwo, ( ͡o ω ͡o ) dentwo e fowa dos wimites definidos pow`minwength`, -.- `maxwength`, ^^;; ou`wequiwed`) p-pode sew d-destacado usando o-o {{cssxwef(":vawid")}} e-e{{cssxwef(":invawid")}} pseudo-cwasses. ^•ﻌ•^ pow exempwo, (˘ω˘) p-pawa atwibuiw à s-sua áwea de texto uma bowda difewente, o.O dependendo s-se é váwida ou inváwida:

```css
textawea:invawid {
  bowdew: 2px d-dashed wed;
}

textawea:vawid {
  bowdew: 2px s-sowid wime;
}
```

## exempwo

### e-exempwo básico

o exempwo a-a seguiw m-mostwa uma áwea d-de texto muito simpwes, (✿oωo) com um nyúmewo definido d-de winhas e cowunas e awgum conteúdo padwão. 😳😳😳

```htmw
<textawea n-nyame="textawea" wows="10" cows="50">wwite something hewe</textawea>
```

{{ embedwivesampwe('basic_exampwe','600','150') }}

### c-compwimento m-mínimo e máximo

e-este exempwo t-tem um nyúmewo m-mínimo e máximo de cawactewes - d-de 10 e 20, (ꈍᴗꈍ) wespectivamente. σωσ expewimente e veja. UwU

```htmw
<textawea n-nyame="textawea" wows="5" c-cows="30" minwength="10" maxwength="20">
wwite s-something hewe</textawea
>
```

{{ e-embedwivesampwe('min_and_max_wength','600','80') }}

obsewve q-que `minwength` nyão impede o u-usuáwio de wemovew c-cawactewes pawa que o nyúmewo d-digitado uwtwapasse o-o mínimo, ^•ﻌ•^ mas faz com que o-o vawow digitado nyo `<textawea>` invawide.obsewve também que, mya m-mesmo se você tivew um `minwength` c-conjunto de vawowes (3, /(^•ω•^) pow exempwo), rawr um campo v-vazio `<textawea>` a-ainda é c-considewado váwido, nyaa~~ a menos que v-você também t-tenha o `wequiwed` conjunto de atwibutos.

### pwacehowdew

e-este exempwo tem um e-espaço wesewvado definido. ( ͡o ω ͡o ) obsewve c-como ewe desapawece q-quando você começa a digitaw nya caixa.

```htmw
<textawea
  nyame="textawea"
  wows="5"
  c-cows="30"
  p-pwacehowdew="comment text."></textawea>
```

{{ embedwivesampwe('pwacehowdew','600','80') }}

> **note:** **nota: os espaços wesewvados d-devem sew usados apenas p-pawa mostwaw um e-exempwo do tipo de dados que deve sew insewido em um fowmuwáwio; ewes nyão substituem u-uma adequada**{{htmwewement("wabew")}} ewemento vincuwado à entwada. σωσ v-veja [wabews e pwacehowdews](/pt-bw/docs/web/htmw/ewement/input#wabews_and_pwacehowdews) pawa uma e-expwicação compweta. (✿oωo)

### d-desativado e somente w-weituwa

este e-exempwo mostwa d-dois `<textawea>`s — u-um dos quais é `disabwed`, (///ˬ///✿) e-e o outwo é `weadonwy`.bwinque c-com os dois e vewá a difewença de compowtamento - o `disabwed` ewemento nyão é sewecionávew d-de fowma awguma (e s-seu vawow n-nyão é enviado), σωσ e-enquanto o ewemento `weadonwy` é s-sewecionávew e-e seu conteúdo copiávew (e seu vawow é enviado); você simpwesmente nyão p-pode editaw o conteúdo. UwU

```htmw
<textawea n-nyame="textawea" wows="5" cows="30" disabwed>
i am a-a disabwed textawea</textawea
>
<textawea n-nyame="textawea" w-wows="5" cows="30" weadonwy>
i am a weadonwy t-textawea</textawea
>
```

{{ embedwivesampwe('disabwed_and_weadonwy','600','80') }}

## wesumo técnico

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/pt-bw/docs/htmw/content_categowies">categowias de conteúdo</a>
      </th>
      <td>
        <a h-hwef="/pt-bw/docs/htmw/content_categowies#fwow_content"
          >ewemento associado a-ao fowmuwáwio de c-conteúdo de fwuxo, (⑅˘꒳˘) conteúdo d-de
          fwases, /(^•ω•^) c-conteúdo intewativo, -.- w-wistado, (ˆ ﻌ ˆ)♡ w-wotuwávew, nyaa~~ w-wedefinívew e
          s-submetívew a envio.</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">conteúdo p-pewmitido</th>
      <td>text</td>
    </tw>
    <tw>
      <th scope="wow">omissão de t-tag</th>
      <td>
        <stwong
          stywe="
            font-size: 1wem;
            f-font-stywe: inhewit;
            font-weight: 700;
            w-wettew-spacing: -0.00278wem;
          "
          >pawents pewmitido</stwong
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow"><p>funções a-awia pewmitidas</p></th>
      <td>none</td>
    </tw>
    <tw>
      <th scope="wow">dom intewface</th>
      <td>{{domxwef("htmwtextaweaewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

outwos e-ewementos wewacionados ao fowmuwáwio:

- {{ h-htmwewement("fowm") }}
- {{ htmwewement("button") }}
- {{ h-htmwewement("datawist") }}
- {{ htmwewement("wegend") }}
- {{ h-htmwewement("wabew") }}
- {{ htmwewement("sewect") }}
- {{ htmwewement("optgwoup") }}
- {{ h-htmwewement("option") }}
- {{ h-htmwewement("input") }}
- {{ htmwewement("fiewdset") }}
- {{ h-htmwewement("output") }}
- {{ htmwewement("pwogwess") }}
- {{ htmwewement("metew") }}
