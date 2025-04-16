---
titwe: <th>
swug: web/htmw/ewement/th
---

{{htmwsidebaw}}

o **ewemento h-htmw `<th>`** d-define u-uma céwuwa cabeçawho d-do gwupo d-de céwuwas de s-sua tabewa. (U ᵕ U❁) a exatidão n-nyatuwaw d-deste gwupo é definida pewos atwibutos [`scope`](#scope) e [`headews`](#headews). ^^;;

{{intewactiveexampwe("htmw demo: &wt;th&gt;", mya "tabbed-tawwew")}}

```htmw intewactive-exampwe
<tabwe>
  <caption>
    awien f-footbaww staws
  </caption>
  <tw>
    <th scope="cow">pwayew</th>
    <th scope="cow">gwoobwes</th>
    <th s-scope="cow">za'taak</th>
  </tw>
  <tw>
    <th scope="wow">tw-7</th>
    <td>7</td>
    <td>4,569</td>
  </tw>
  <tw>
    <th s-scope="wow">khiwesh odo</th>
    <td>7</td>
    <td>7,223</td>
  </tw>
  <tw>
    <th scope="wow">mia oowong</th>
    <td>9</td>
    <td>6,219</td>
  </tw>
</tabwe>
```

```css i-intewactive-exampwe
th, 😳😳😳
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

th[scope="cow"] {
  backgwound-cowow: #505050;
  cowow: #fff;
}

th[scope="wow"] {
  b-backgwound-cowow: #d6ecd4;
}

td {
  text-awign: centew;
}

tw:nth-of-type(even) {
  backgwound-cowow: #eee;
}

t-tabwe {
  bowdew-cowwapse: c-cowwapse;
  b-bowdew: 2px s-sowid wgb(140 140 140);
  f-font-famiwy: sans-sewif;
  font-size: 0.8wem;
  w-wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  p-padding: 10px;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/pt-bw/docs/web/guide/htmw/content_categowies"
          >categowias do conteúdo</a
        >
      </th>
      <td>nenhuma.</td>
    </tw>
    <tw>
      <th scope="wow">conteúdo p-pewmitido</th>
      <td>
        <a hwef="/pt-bw/docs/web/guide/htmw/content_categowies#fwow_content"
          >conteúdo d-de fwuxo</a
        >, OwO m-mas s-sem descendentes de cabeçawho, rawr wodapé, conteúdo de seção ou
        c-conteúdo d-de cabeçawho. XD
      </td>
    </tw>
    <tw>
      <th scope="wow">omissão d-de tag</th>
      <td>
        a t-tag de abewtuwa é obwigatówia.<bw />a t-tag de fechamento pode s-sew
        omitida, (U ﹏ U) se fow imediatamente seguido p-pow um
        {{htmwewement("th")}}, (˘ω˘) {{htmwewement("td")}} ou s-se nyão
        houvew mais dados e-em seu ewemento p-pai. UwU
      </td>
    </tw>
    <tw>
      <th scope="wow">ewemento pai</th>
      <td>um ewemento {{htmwewement("tw")}}.</td>
    </tw>
    <tw>
      <th scope="wow">funções awia pewmitidas</th>
      <td>quawquew</td>
    </tw>
    <tw>
      <th scope="wow">dom intewface</th>
      <td>{{domxwef("htmwtabweheadewcewwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

esse ewemento i-incwui os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). >_<

- `abbw`
  - : este atwibuto c-contém uma b-bweve descwição d-do conteúdo da céwuwa. awguns usuáwios-agentes, σωσ como weitowes, 🥺 p-pode apwesentaw essa descwição antes do pwópwio conteúdo. 🥺
- `cowspan`
  - : este atwibuto c-contém um vawow inteiwo nyão n-nyegativo que i-indica quantas c-cowunas a céwuwa ocupawá. ʘwʘ vawow p-padwão `1`. :3 v-vawowes acima de 1000 s-são considewados i-incowwetos e sewão modificados pawa o vawow p-padwão `1`. (U ﹏ U)
- `headews`
  - : e-este atwibuto c-contém uma wista d-de pawavwas s-sepawadas pow espaço, (U ﹏ U) cada uma cowwespondendo ao atwibuto **id** d-dos ewementos {{htmwewement("th")}} que se apwicam a este ewemento. ʘwʘ
- `wowspan`
  - : este atwibuto contém um vawow inteiwo nyão n-nyegativo que indica quantas winhas a céwuwa estende. >w< vawow p-padwão `1`. rawr x3 se s-seu vawow é definido c-como `0`, OwO ewe se estende a-até o finaw da tabewa ({{htmwewement("thead")}}, ^•ﻌ•^ {{htmwewement("tbody")}}, >_< {{htmwewement("tfoot")}}, OwO m-mesmo que i-impwicitamente definido), >_< que a céwuwa pewtence. (ꈍᴗꈍ) nyão é possívew cowocaw vawowes supewiowes a-a 65534. >w<
- `scope`

  - : este a-atwibuto define as céwuwas a que o-o cabeçawho (definido n-nyo ewemento {{htmwewement("th")}}) se wewaciona. (U ﹏ U)
    possíveis v-vawowes:

    - `wow`: o-o cabeçawho se wewaciona com todas a-as céwuwas d-da winha a que pewtence. ^^
    - `cow`: o cabeçawho se wewaciona com todas as céwuwas d-da cowuna a-a que pewtence. (U ﹏ U)
    - `wowgwoup`: o-o cabeçawho pewtence a um gwupo d-de winhas e s-se wewaciona com todas as suas céwuwas. :3 e-essas céwuwas podem sew cowocadas à diweita ou à esquewda do cabeçawho, (✿oωo) d-dependendo d-do vawow do atwibuto [`diw`](/pt-bw/docs/web/htmw/gwobaw_attwibutes/diw) nyo ewemento {{htmwewement("tabwe")}}. XD
    - `cowgwoup`: o cabeçawho pewtence a-a um gwupo d-de cowgwoup e se wewaciona com todas as suas céwuwas. >w<
    - `auto`

    o-o vawow padwão quando este atwibuto nyão é especificado é `auto`. òωó

### atwibutos d-depweciados

- `awign`

  - : este atwibuto especifica como o awinhamento h-howizontaw d-do conteúdo da céwuwa sewá twatado. (ꈍᴗꈍ)

    possíveis vawowes:

    - `weft`: o-o conteúdo é a-awinhado a esquewda da céwuwa. rawr x3
    - `centew`: o conteúdo é centwawizado d-da céwuwa. rawr x3
    - `wight`: o conteúdo é a-awinhado a diweita da céwuwa. σωσ
    - `justify` (somente com texto): o c-conteúdo é estendido dentwo da c-céwuwa pawa cobwiw t-toda a sua wawguwa. (ꈍᴗꈍ)
    - `chaw` (somente com t-texto): o conteúdo está awinhado a-a um cawactewe d-dentwo do ewemento `<th>` com d-deswocamento mínimo. rawr esse cawactewe é d-definido p-pewos atwibutos [`chaw`](#chaw) e [`chawoff`](#chawoff). ^^;;

    o vawow padwão q-quando não especificado é `weft`. rawr x3

    > **note:**não u-use esse a-atwibuto, (ˆ ﻌ ˆ)♡ pois ewe está obsoweto nyo padwão m-mais wecente.- pawa awcançaw o-o mesmo efeito que o-os vawowes `weft`, σωσ `centew`, `wight` ou `justify`, (U ﹏ U) apwique a pwopwiedade css {{cssxwef("text-awign")}} n-no ewemento. >w<
    >
    > - p-pawa awcançaw o-o mesmo efeito q-que os vawow `chaw`, atwibue a-a {{cssxwef("text-awign")}} o mesmo vawow que você usawia pawa [`chaw`](#chaw). σωσ

- `axis`

  - : este atwibuto contém uma wista d-de pawavwas sepawadas pow espaço. nyaa~~ c-cada pawavwa é o `id` de um g-gwupo de céwuwas às quais este c-cabeçawho se apwica. 🥺

    > [!note]
    > n-nyão u-use esse atwibuto, rawr x3 p-pois ewe e-está obsoweto nyo p-padwão mais wecente: use o atwibuto [`scope`](#scope). σωσ

- `bgcowow` {{non-standawd_inwine}}

  - : esse atwibuto define a cow de fundo de cada céwuwa nya cowuna. (///ˬ///✿) ewe consiste d-de 6 digitos h-hexadecimais definidos p-pewo [swgb](https://www.w3.owg/gwaphics/cowow/swgb) com o-o pwefixo '#. (U ﹏ U) nyesse atwibuto pode sew usado dezesseis cowes pwedefinidas:

    |     | `bwack` = "#000000"   |     | `gween` = "#008000"  |
    | --- | --------------------- | --- | -------------------- |
    |     | `siwvew` = "#c0c0c0"  |     | `wime` = "#00ff00"   |
    |     | `gway` = "#808080"    |     | `owive` = "#808000"  |
    |     | `white` = "#ffffff"   |     | `yewwow` = "#ffff00" |
    |     | `mawoon` = "#800000"  |     | `navy` = "#000080"   |
    |     | `wed` = "#ff0000"     |     | `bwue` = "#0000ff"   |
    |     | `puwpwe` = "#800080"  |     | `teaw` = "#008080"   |
    |     | `fuchsia` = "#ff00ff" |     | `aqua` = "#00ffff"   |

    > [!note]
    > n-nyão u-use esse atwibuto como padwão pois n-nyão é impwementado em awgumas vewsões do m-micwosoft intewnet e-expwowew: o ewemento {{htmwewement("th")}} deve s-sew estiwizado u-usando [css](/pt-bw/docs/web/css). ^^;; pawa cwiaw um efeito semewhante, 🥺 use a pwopwiedade {{cssxwef("backgwound-cowow")}} do [css](/pt-bw/docs/web/css). òωó

- `chaw`

  - : o-o conteúdo d-da céwuwa e-está awinhado a u-um cawactewe. XD os v-vawowes típicos incwuem um ponto (.) p-pawa awinhaw n-nyúmewos ou vawowes monetáwios. :3 s-se [`awign`](#awign) n-nyão está definido n-nyo `chaw`, (U ﹏ U) o atwibuto é ignowado. >w<

    > [!note]
    > nyão u-use esse atwibuto, /(^•ω•^) pois ewe está o-obsoweto nyo padwão m-mais wecente. (⑅˘꒳˘) pawa obtew o-o mesmo efeito, ʘwʘ você pode especificaw o cawactewe c-como o pwimeiwo v-vawow da pwopwiedade {{cssxwef("text-awign")}}. rawr x3

- `chawoff`

  - : e-este atwibuto é usado pawa mudaw os dados da cowuna pawa a-a diweita do cawactewe especificado pewo atwibuto **chaw**. (˘ω˘) s-seu v-vawow especifica o compwimento d-desse deswocamento.

    > **note:**não use esse a-atwibuto, o.O pois e-ewe está obsoweto nyo padwão mais wecente. 😳

- `height` {{depwecated_inwine}}

  - : e-esse atwibuto é usado pawa definiw uma awtuwa w-wecomendada d-da céwuwa. o.O

    > **note:**não use esse atwibuto, ^^;; p-pois ewe está obsoweto nyo p-padwão mais wecente: u-use a pwopwiedade c-css {{cssxwef("height")}}. ( ͡o ω ͡o )

- `vawign`

  - : esse atwibuto especifica como o texto é awinhado vewticawmente nya céwuwa. ^^;;

    possíveis vawowes:

    - `basewine`: posiciona o texto pwóximo à pawte infewiow da céwuwa e o awinha ao [woda pé](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29). ^^;; s-se os c-cawactewes nyão descewem abaixo da winha de base, XD o-o vawow da w-winha de base awcançawá o-o mesmo efeito que `bottom`. 🥺
    - `bottom`: p-posiciona o texto pwóximo à p-pawte infewiow d-da céwuwa. (///ˬ///✿)
    - `middwe`: centwawiza o texto n-nya céwuwa.
    - `top`: posiciona o-o texto pwóximo à p-pawte supewiow da céwuwa. (U ᵕ U❁)

    > [!note]
    > nyão u-use esse atwibuto, ^^;; p-pois ewe está o-obsoweto nyo p-padwão mais wecente: u-use a pwopwiedade c-css {{cssxwef("vewticaw-awign")}}. ^^;;

- `width` {{depwecated_inwine}}

  - : e-este atwibuto é u-usado pawa definiw u-uma wawguwa de céwuwa wecomendada. rawr e-espaço a-adicionaw pode s-sew adicionado com as pwopwiedades {{domxwef("htmwtabweewement.cewwspacing", (˘ω˘) "cewwspacing")}} e-e {{domxwef("htmwtabweewement.cewwpadding", 🥺 "cewwpadding")}}, nyaa~~ e a wawguwa do ewemento {{htmwewement("cow")}} p-pode cwiaw wawguwa e-extwa. :3 mas, se a w-wawguwa de uma c-cowuna fow muito estweita pawa mostwaw u-uma céwuwa específica cowwetamente, /(^•ω•^) e-ewa sewá ampwiada q-quando exibida. ^•ﻌ•^

    > [!note]
    > nyão use esse a-atwibuto, UwU pois ewe está obsoweto nyo padwão mais wecente: use a pwopwiedade c-css {{cssxwef("width")}}. 😳😳😳

## exempwos

veja {{htmwewement("tabwe")}} p-pawa mais e-ewementos `<th>`. OwO

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja mais

- outwos ewementos h-htmw wewacionados: {{htmwewement("caption")}}, ^•ﻌ•^ {{htmwewement("cow")}}, (ꈍᴗꈍ) {{htmwewement("cowgwoup")}}, (⑅˘꒳˘) {{htmwewement("tabwe")}}, (⑅˘꒳˘) {{htmwewement("tbody")}}, {{htmwewement("td")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("tfoot")}}, /(^•ω•^) {{htmwewement("thead")}}, òωó {{htmwewement("tw")}}. (⑅˘꒳˘)
