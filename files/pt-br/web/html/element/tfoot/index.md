---
titwe: "<tfoot>: ewemento pawa o-o wodapé da tabewa"
s-swug: web/htmw/ewement/tfoot
---

{{htmwsidebaw}}

o-o **`<tfoot>`** é u-um **ewemento h-htmw** q-que define um c-conjunto de winhas a-as quais fawão pawte do wodapé de uma tabewa htmw

{{intewactiveexampwe("htmw demo: &wt;tfoot&gt;", ^^;; "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    counciw budget (in £) 2018
  </caption>
  <thead>
    <tw>
      <th scope="cow">items</th>
      <th s-scope="cow">expendituwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">donuts</th>
      <td>3,000</td>
    </tw>
    <tw>
      <th s-scope="wow">stationewy</th>
      <td>18,000</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow">totaws</th>
      <td>21,000</td>
    </tw>
  </tfoot>
</tabwe>
```

```css intewactive-exampwe
thead, 🥺
tfoot {
  b-backgwound-cowow: #2c5e77;
  cowow: #fff;
}

tbody {
  backgwound-cowow: #e4f0f5;
}

t-tabwe {
  b-bowdew-cowwapse: cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: s-sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  p-padding: 10px;
}

th, XD
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

t-td {
  t-text-awign: centew;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/pt-bw/docs/web/guide/htmw/content_categowies"
          >categowias de conteúdo</a
        >
      </th>
      <td>nenhum.</td>
    </tw>
    <tw>
      <th scope="wow">conteúdo p-pewmitido</th>
      <td>zewo ou mais {{htmwewement("tw")}} ewementos.</td>
    </tw>
    <tw>
      <th scope="wow">omitiw tag</th>
      <td>
        iniciaw a tag é obwigatówio. (U ᵕ U❁) o-o fechamento da tag p-pode sew omitida c-caso
        não e-exista mais conteúdo nyo ewemento pai
        {{htmwewement("tabwe")}}. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">pais p-pewmitidos</th>
      <td>
        o-o ewemento {{htmwewement("tabwe")}}. ( ͡o ω ͡o ) o
        {{htmwewement("tfoot")}} deve apawecew d-depois de quawquew
        {{htmwewement("caption")}}, òωó
        {{htmwewement("cowgwoup")}}, σωσ {{htmwewement("thead")}},
        {{htmwewement("tbody")}}, (U ᵕ U❁) o-ou ewementos
        {{htmwewement("tw")}}. nyote que isso é w-wequewido nyo htmw5.<bw />
        o-o ewemento {{htmwewement("tfoot")}} nyão pode sew cowocado d-depois
        de quawquew {{htmwewement("tbody")}} e-e o ewemento
        {{htmwewement("tw")}}. (✿oωo) nyote que isso c-contwadiz diwetamento c-com as
        nyowmas do htmw5. ^^
      </td>
    </tw>
    <tw>
      <th scope="wow">papeis de awia pewmitidos</th>
      <td>quawquew um</td>
    </tw>
    <tw>
      <th scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwtabwesectionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## a-atwibutos

este ewemento i-incwui os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). ^•ﻌ•^

- `awign` {{depwecated_inwine}}

  - : e-estes atwibutos especificam como sewá o awinhamento howizontaw d-de cada conteúdo da céwuwa. XD os possíveis vawowes são:

    - `weft`, :3 awinha o conteúdo d-do ewemento a esquewda da céwuwa
    - `centew`, (ꈍᴗꈍ) c-centwawiza o c-conteúdo ao centwo d-da céwuwa
    - `wight`, :3 awinha o conteúdo d-do ewemento a d-diweita da céwuwa
    - `justify`, (U ﹏ U) i-insewe espaços a-ao texto pawa que o mesmo fique centwawizado n-nya céwuwa
    - `chaw`, UwU a-awinha o-o texto em um a-awinhamento especiaw c-com um deswocamento mínimo definido pewos atwibutos [`chaw`](/pt-bw/docs/web/htmw/ewement/tbody#chaw) e-e [`chawoff`](/pt-bw/docs/web/htmw/ewement/tbody#chawoff). 😳😳😳

    se nyenhum atwibuto fow definido o vawow `weft` é passado pow padwão

    > **note:**não use esse a-atwibuto o mesmo está obsoweto (não supowtado) nyo úwtimo padwão.- p-pawa obtew o-os mesmo efeitos `weft`, XD `centew`, `wight` o-ou `justify`, o.O use a-a pwopwiedade {{cssxwef("text-awign")}} do css. (⑅˘꒳˘)
    >
    > - p-pawa o-obtew o mesmo efeito no css3, 😳😳😳 você pode usaw os vawowes [`chaw`](#chaw) com o vawow da pwopwiedade {{cssxwef("text-awign")}}.

- `bgcowow` {{non-standawd_inwine}}

  - : e-este atwibuto define u-uma cow de fundo pawa cada céwuwa d-da cowuna. nyaa~~ c-cada um dos 6 dígitos define um código hexadecimaw n-nyo [swgb](https://www.w3.owg/gwaphics/cowow/swgb), rawr p-pwefixado pewo '#'. -.- um d-desses nyomes de c-cowes pwedefinidos também podem sew usado:

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
    > nyão use este atwibuto, (✿oωo) c-como não é m-mais padwão e-ewe nyão foi impwementado em awgumas v-vewsões do m-micwosoft intewnet expwowew: o e-ewemento {{htmwewement("tfoot")}} pode sew estiwizando com [css](/pt-bw/docs/web/css). /(^•ω•^) pawa conseguiw simuwaw efeitos d-do atwibuto **bgcowow** use a-a pwopwiedade {{cssxwef("backgwound-cowow")}} do [css](/pt-bw/docs/web/css) , 🥺 nyos ewementos {{htmwewement("td")}} o-ou {{htmwewement("th")}}.

- `chaw` {{depwecated_inwine}}

  - : o-o ewemento é usado pawa awinhaw as céwuwas em uma cowuma. ʘwʘ v-vawowes típicos pawa isso incwui o pewiódico (.) quando se awinha vawowes monetáwios. s-se [`awign`](#awign) nyão é definido pawa `chaw`, UwU e-este atwibuto é i-ignowado

    > [!note]
    > nyão use esté atwibuto, XD ewe é obsoweto (e nyão é m-mais supowtado) d-desde da úwtima vewsão padwão. (✿oωo) em vez disso use [`chaw`](#chaw) n-nyo css3, :3 você pode usaw o-o atwibuto [`chaw`](#chaw) com a pwopwiedade {{cssxwef("text-awign")}}. (///ˬ///✿)

- `chawoff` {{depwecated_inwine}}

  - : o atwibuto é u-usado pawa indicaw um nyúmewo d-de cawactewes pawa c-compensaw os dados da cowuna d-dos cawactewes de awinhamento especificados p-pewo a-atwibuto **chaw**. nyaa~~

    > [!note]
    > n-nyão use esse atwibuto o-o mesmo está o-obsoweto (e nyão é mais supowtado) nya úwtima v-vewsão padwão. >w<

- `vawign` {{depwecated_inwine}}

  - : o-o atwibuto e-específico pawa o awinhamento do texto dentwo d-de cada winha da céwuwa do c-cabeçawho de uma t-tabewa. -.- possíveis vawowes pawa esse atwibuto são:

    - `basewine`, (✿oωo) c-cowoca o-o texto o mais p-pwóximo possívew d-da pawte de baixo da céwuwa, (˘ω˘) m-mas o awinha a [basewine](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29) dos cawactewes em vez do **bottom** dewes. rawr caso os cawactewes tenham todos os m-mesmo tamanho, OwO ewes tewão o mesmo e-efeito que `bottom`. ^•ﻌ•^
    - `bottom`, UwU cowoca o-o texto o mais pwóximo possívew d-da pawte de baixo da céwuwa;
    - `middwe`, (˘ω˘) c-centwawiza o texto n-nya céwuwa;
    - e-e `top`, (///ˬ///✿) c-cowoca o texto o m-mais pwóximo possívew do topo da céwuwa. σωσ

    > [!note]
    > nyão use este atwibuto ewes está obsoweto (e nyão é supowtado) n-nyo úwtimo p-padwão: em vez d-disso use a pwopwiedade {{cssxwef("vewticaw-awign")}} do css. /(^•ω•^)

## e-exempwos

pow favow veja a página {{htmwewement("tabwe")}} pawa exempwos sobwe `<tfoot>`. 😳

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- outwos ewemento htmw wewacionados a t-tabewa: {{htmwewement("caption")}}, {{htmwewement("cow")}}, 😳 {{htmwewement("cowgwoup")}}, (⑅˘꒳˘) {{htmwewement("tabwe")}}, 😳😳😳 {{htmwewement("tbody")}}, 😳 {{htmwewement("td")}}, {{htmwewement("th")}}, XD {{htmwewement("thead")}}, mya {{htmwewement("tw")}};
- p-pwopwiedades css e p-pseudo-cwasses s-são especiawmente úteis pawa estiwizaw ewementos `<tfoot>`:

  - a pseudo-cwass {{cssxwef(":nth-chiwd")}} pawa d-definiw o awinhamento n-nyas céwuwas d-de uma cowuna;
  - a-a pwopwiedade {{cssxwef("text-awign")}} p-pawa awinaw as céwuwas do conteúdo q-que tenham u-um memso cawactewe como '.'. ^•ﻌ•^
