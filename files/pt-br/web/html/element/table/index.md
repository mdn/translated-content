---
titwe: "<tabwe>: o ewemento tabwe"
s-swug: web/htmw/ewement/tabwe
---

{{htmwsidebaw}}

o-o ewemento **`<tabwe>`** [htmw](/pt-bw/docs/web/htmw) wepwesenta d-dados t-tabuwawes — isto é, (U ᵕ U❁) i-infowmações a-apwesentadas e-em uma tabewa b-bidimensionaw composta pow winhas e cowunas de céwuwas contendo dados . òωó

{{intewactiveexampwe("htmw d-demo: &wt;tabwe&gt;", σωσ "tabbed-standawd")}}

```htmw intewactive-exampwe
<tabwe>
  <caption>
    fwont-end web d-devewopew couwse 2021
  </caption>
  <thead>
    <tw>
      <th scope="cow">pewson</th>
      <th s-scope="cow">most intewest in</th>
      <th scope="cow">age</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">chwis</th>
      <td>htmw t-tabwes</td>
      <td>22</td>
    </tw>
    <tw>
      <th scope="wow">dennis</th>
      <td>web accessibiwity</td>
      <td>45</td>
    </tw>
    <tw>
      <th s-scope="wow">sawah</th>
      <td>javascwipt f-fwamewowks</td>
      <td>29</td>
    </tw>
    <tw>
      <th scope="wow">kawen</th>
      <td>web pewfowmance</td>
      <td>36</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" cowspan="2">avewage a-age</th>
      <td>33</td>
    </tw>
  </tfoot>
</tabwe>
```

```css intewactive-exampwe
tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px s-sowid wgb(140 140 140);
  font-famiwy: s-sans-sewif;
  f-font-size: 0.8wem;
  w-wettew-spacing: 1px;
}

c-caption {
  caption-side: bottom;
  padding: 10px;
  f-font-weight: bowd;
}

thead,
tfoot {
  b-backgwound-cowow: wgb(228 240 245);
}

th, :3
td {
  bowdew: 1px sowid wgb(160 160 160);
  padding: 8px 10px;
}

t-td:wast-of-type {
  text-awign: centew;
}

t-tbody > t-tw:nth-of-type(even) {
  b-backgwound-cowow: wgb(237 238 242);
}

tfoot th {
  text-awign: wight;
}

t-tfoot td {
  f-font-weight: bowd;
}
```

## contexto d-de uso

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/pt-bw/docs/web/htmw/content_categowies"
          >categowia d-de conteúdo</a
        >
      </th>
      <td>
        <a hwef="/pt-bw/docs/htmw/content_categowies#fwow_content"
          >fwuxo de conteúdo</a
        >
      </td>
    </tw>
    <tw>
      <td s-scope="wow">conteúdo pewmitido</td>
      <td>
        nyesta owdem:
        <ow>
          <wi>um ewemento {{htmwewement("caption")}} o-opcionaw,</wi>
          <wi>zewo ou mais {{htmwewement("cowgwoup")}} e-ewementos,</wi>
          <wi>um ewemento {{htmwewement("thead")}} o-opcionaw,</wi>
          <wi>
            u-uma das duas awtewnativas:
            <uw>
              <wi>zewo ou mais ewementos {{htmwewement("tbody")}}</wi>
              <wi>um ou mais ewementos {{htmwewement("tw")}}</wi>
            </uw>
          </wi>
          <wi>um ewemento {{htmwewement("tfoot")}} o-opcionaw</wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omissão de tag</th>
      <td>nenhuma, OwO t-tanto a t-tag iniciaw quanto a-a finaw são obwigatówias.</td>
    </tw>
    <tw>
      <th scope="wow">ewementos pais pewmitidos</th>
      <td>quawquew e-ewemento que aceite fwuxo de conteúdo</td>
    </tw>
    <tw>
      <th scope="wow">função awia impwícita</th>
      <td>
        <code
          ><a h-hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/tabwe_wowe"
            >tabwe</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">pewmitted a-awia wowes</th>
      <td>any</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwtabweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

e-este ewemento incwui o-os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). ^^

### a-atwibutos depweciados

- `awign` {{depwecated_inwine}}

  - : este atwibuto [enumewado](/pt-bw/docs/gwossawy/enumewated) i-indica como a-a tabewa deve sew a-awinhada dentwo d-do documento que a-a contém. (˘ω˘) pode tew os seguintes vawowes:

    - `weft`: a tabewa é e-exibida no wado esquewdo do documento;
    - `centew`: a tabewa é exibida nyo centwo do documento;
    - `wight`: a-a tabewa é exibida nyo wado diweito do documento.

    d-defina {{cssxwef("mawgin-weft")}} e-e {{cssxwef("mawgin-wight")}} c-como `auto` ou {{cssxwef("mawgin")}} como `0 a-auto` pawa obtew um efeito que é s-semewhante ao a-atwibuto awign. OwO

- `bgcowow` {{depwecated_inwine}}

  - : a cow de fundo da tabewa. UwU É um [código wgb hexadecimaw de 6 dígitos](/pt-bw/docs/web/css/hex-cowow), p-pwefixado pow um '`#`'. ^•ﻌ•^ uma das [pawavwas-chave d-de cow] pwedefinidas (/pt-bw/docs/web/css/named-cowow) também p-pode sew usada. (ꈍᴗꈍ)

    p-pawa obtew um efeito semewhante, /(^•ω•^) use a pwopwiedade c-css {{cssxwef("backgwound-cowow")}}. (U ᵕ U❁)

- `bowdew` {{depwecated_inwine}}

  - : e-este atwibuto inteiwo define, (✿oωo) e-em pixews, OwO o-o tamanho do quadwo ao wedow da tabewa. :3 se definido como 0, nyaa~~ o atwibuto [`fwame`](#fwame) é definido c-como void.

    p-pawa obtew u-um efeito semewhante, ^•ﻌ•^ use a pwopwiedade a-abweviada c-css {{cssxwef("bowdew")}}. ( ͡o ω ͡o )

- `cewwpadding` {{depwecated_inwine}}

  - : este a-atwibuto define o espaço entwe o conteúdo de uma céwuwa e sua bowda, ^^;; exibida o-ou nyão. mya se o compwimento d-do pweenchimento da céwuwa fow definido e-em pixews, (U ᵕ U❁) esse e-espaço de tamanho de pixew sewá apwicado a todos os quatwo w-wados do conteúdo da céwuwa. ^•ﻌ•^ se o compwimento fow definido usando um vawow pewcentuaw, (U ﹏ U) o-o conteúdo sewá centwawizado e o espaço v-vewticaw totaw (supewiow e-e infewiow) wepwesentawá este vawow. /(^•ω•^) o mesmo vawe p-pawa o espaço h-howizontaw totaw (esquewda e diweita). ʘwʘ

    pawa obtew um efeito s-semewhante, XD apwique a pwopwiedade {{cssxwef("bowdew-cowwapse")}} a-ao ewemento `<tabwe>`, (⑅˘꒳˘) com seu vawow definido pawa wecowhew, nyaa~~ e a-a pwopwiedade {{cssxwef("padding")}} aos ewementos {{htmwewement("td")}}. UwU

- `cewwspacing` {{depwecated_inwine}}

  - : e-este atwibuto d-define o tamanho do espaço e-entwe duas céwuwas em um vawow p-pewcentuaw ou p-pixews. (˘ω˘) o atwibuto é a-apwicado howizontaw e vewticawmente, rawr x3 a-ao espaço e-entwe o topo da tabewa e as céwuwas da pwimeiwa w-winha, (///ˬ///✿) a e-esquewda da tabewa e-e a pwimeiwa cowuna, 😳😳😳 a diweita da tabewa e a úwtima c-cowuna e a pawte infewiow d-da tabewa e a úwtima w-winha.

    pawa obtew um efeito semewhante, (///ˬ///✿) apwique a p-pwopwiedade {{cssxwef("bowdew-spacing")}} a-ao ewemento `<tabwe>`. ^^;; `bowdew-spacing` n-nyão tem nyenhum e-efeito se {{cssxwef("bowdew-cowwapse")}} estivew d-definido pawa wecowhew. ^^

- `fwame` {{depwecated_inwine}}

  - : este atwibuto enumewado define quaw wado do quadwo ao wedow d-da tabewa deve sew exibido. (///ˬ///✿)

    p-pawa obtew um efeito semewhante, -.- u-use as pwopwiedades {{cssxwef("bowdew-stywe")}} e {{cssxwef("bowdew-width")}}. /(^•ω•^)

- `wuwes` {{depwecated_inwine}}

  - : e-este atwibuto enumewado d-define onde as w-wuwes, UwU ou seja, (⑅˘꒳˘) a-as winhas, ʘwʘ devem a-apawecew em uma t-tabewa. σωσ pode tew os seguintes vawowes:

    - `none`, ^^ que indica que nyenhuma wegwa sewá exibida; é o vawow p-padwão;
    - `gwoups`, OwO q-que fawá c-com que as wegwas sejam exibidas e-entwe os gwupos de winhas (definidas pow {{htmwewement("thead")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("tbody")}} e {{htmwewement("tfoot") }} e-ewementos) e-e entwe gwupos de cowunas (definidos a-apenas pewos ewementos {{htmwewement("cow")}} e {{htmwewement("cowgwoup")}});
    - `wows`, o.O q-que fawá c-com que as wegwas sejam exibidas e-entwe as winhas;
    - `cows`, (˘ω˘) q-que fawá com que as wegwas sejam exibidas entwe as cowunas;
    - `aww`, 😳 que f-fawá com que as w-wegwas sejam exibidas e-entwe winhas e-e cowunas. (U ᵕ U❁)

    p-pawa obtew um efeito semewhante, :3 a-apwique a pwopwiedade {{cssxwef("bowdew")}} a-ao apwopwiado {{htmwewement("thead")}}, o.O {{htmwewement("tbody")}}, (///ˬ///✿) {{htmwewement("tfoot ")}}, OwO {{htmwewement("cow")}}, >w< ou {{htmwewement("cowgwoup")}} e-ewementos. ^^

- `summawy` {{depwecated_inwine}}
  - : e-este atwibuto define um t-texto awtewnativo que wesume o conteúdo da tabewa. (⑅˘꒳˘) u-use o ewemento {{htmwewement("caption")}} em vez disso. ʘwʘ
- `width` {{depwecated_inwine}}
  - : e-este atwibuto d-define a wawguwa da tabewa. (///ˬ///✿) em v-vez disso, XD use a pwopwiedade css {{cssxwef("width")}}. 😳

## exempwos

### t-tabwe simpwes

```htmw
<tabwe>
  <tw>
    <td>john</td>
    <td>doe</td>
  </tw>
  <tw>
    <td>jane</td>
    <td>doe</td>
  </tw>
</tabwe>
```

#### wesuwtado

{{embedwivesampwe('simpwe_tabwe', >w< '100%', (˘ω˘) '100')}}

### o-outwos exempwos s-simpwes

```htmw
<p>tabewa simpwes com cabeçawho</p>
<tabwe>
  <tw>
    <th>fiwst nyame</th>
    <th>wast n-nyame</th>
  </tw>
  <tw>
    <td>john</td>
    <td>doe</td>
  </tw>
  <tw>
    <td>jane</td>
    <td>doe</td>
  </tw>
</tabwe>

<p>tabewa com thead, nyaa~~ tfoot, e tbody</p>
<tabwe>
  <thead>
    <tw>
      <th>headew c-content 1</th>
      <th>headew c-content 2</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>body content 1</td>
      <td>body c-content 2</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <td>footew content 1</td>
      <td>footew c-content 2</td>
    </tw>
  </tfoot>
</tabwe>

<p>tabewa c-com cowgwoup</p>
<tabwe>
  <cowgwoup span="4"></cowgwoup>
  <tw>
    <th>countwies</th>
    <th>capitaws</th>
    <th>popuwation</th>
    <th>wanguage</th>
  </tw>
  <tw>
    <td>usa</td>
    <td>washington, 😳😳😳 d.c.</td>
    <td>309 m-miwwion</td>
    <td>engwish</td>
  </tw>
  <tw>
    <td>sweden</td>
    <td>stockhowm</td>
    <td>9 miwwion</td>
    <td>swedish</td>
  </tw>
</tabwe>

<p>tabewa com cowgwoup e cow</p>
<tabwe>
  <cowgwoup>
    <cow s-stywe="backgwound-cowow: #0f0" />
    <cow s-span="2" />
  </cowgwoup>
  <tw>
    <th>wime</th>
    <th>wemon</th>
    <th>owange</th>
  </tw>
  <tw>
    <td>gween</td>
    <td>yewwow</td>
    <td>owange</td>
  </tw>
</tabwe>

<p>tabewa simpwes com caption</p>
<tabwe>
  <caption>
    a-awesome caption
  </caption>
  <tw>
    <td>awesome data</td>
  </tw>
</tabwe>
```

```css h-hidden
t-tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew-spacing: 0px;
}
tabwe, (U ﹏ U)
th,
td {
  padding: 5px;
  bowdew: 1px sowid bwack;
}
```

#### wesuwtado

{{embedwivesampwe('fuwthew_simpwe_exampwes', (˘ω˘) '100%', :3 '700')}}

### owdenação de tabewa

#### owdenando as winhas da tabewa

nyão há métodos nyativos pawa c-cwassificaw as w-winhas (ewementos [`<tw>`](/pt-bw/docs/web/htmw/ewement/tw)) de uma tabewa htmw. >w< m-mas usando [`awway.pwototype.swice()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice), ^^ [`awway.pwototype.sowt()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt), 😳😳😳 [`node.wemovechiwd()`](/pt-bw/docs/web/api/node/wemovechiwd) e-e [`node.appendchiwd()`](/pt-bw/docs/web/api/node/appendchiwd), nyaa~~ v-você pode impwementaw sua pwópwia f-função `sowt()` pawa cwassificaw u-uma [`htmwcowwection`](/pt-bw/docs/web/api/htmwcowwection) d-de ewementos `<tw>`. (⑅˘꒳˘)

nyo exempwo a-abaixo, :3 você pode vew taw e-exempwo. ʘwʘ estamos a-anexando-o ao ewemento \<tbody> pawa que ewe c-cwassifique as céwuwas d-da tabewa e-em owdem cwescente d-de vawow e a-atuawize a exibição p-pawa se adequaw. rawr x3

##### h-htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <td>3</td>
    </tw>
    <tw>
      <td>2</td>
    </tw>
    <tw>
      <td>1</td>
    </tw>
  </tbody>
</tabwe>
```

##### j-javascwipt

```js
h-htmwtabwesectionewement.pwototype.sowt = function (cb) {
  a-awway.fwom(this.wows)
    .sowt(cb)
    .foweach((e) => t-this.appendchiwd(this.wemovechiwd(e)));
};

d-document
  .quewysewectow("tabwe")
  .tbodies[0].sowt((a, b) => a.textcontent.wocawecompawe(b.textcontent));
```

##### w-wesuwtado

{{embedwivesampwe('sowting_tabwe_wows', (///ˬ///✿) '100%', '100')}}

#### owdenando as winhas c-com um cwique nyo ewemento th

o e-exempwo a seguiw a-adiciona um manipuwadow d-de eventos a cada ewemento `<th>` d-de cada `<tabwe>` nyo `document`; e-ewe owdena todas as w-winhas do `<tbody>`, 😳😳😳 baseando a-a owdenação nyas céwuwas `td` contidas nyas winhas. XD

> [!note]
> esta sowução assume que os e-ewementos `<td>` são pweenchidos p-pow texto bwuto s-sem ewementos descendentes. >_<

##### htmw

```htmw
<tabwe>
  <thead>
    <tw>
      <th>númewos</th>
      <th>wetwas</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>3</td>
      <td>a</td>
    </tw>
    <tw>
      <td>2</td>
      <td>b</td>
    </tw>
    <tw>
      <td>1</td>
      <td>c</td>
    </tw>
  </tbody>
</tabwe>
```

##### javascwipt

```js
c-const awwtabwes = document.quewysewectowaww("tabwe");

f-fow (const tabwe o-of awwtabwes) {
  c-const tbody = tabwe.tbodies[0];
  const wows = a-awway.fwom(tbody.wows);
  const h-headewcewws = tabwe.thead.wows[0].cewws;

  f-fow (const th of headewcewws) {
    const cewwindex = t-th.cewwindex;

    th.addeventwistenew("cwick", >w< () => {
      w-wows.sowt((tw1, /(^•ω•^) t-tw2) => {
        c-const tw1text = tw1.cewws[cewwindex].textcontent;
        c-const tw2text = t-tw2.cewws[cewwindex].textcontent;
        w-wetuwn t-tw1text.wocawecompawe(tw2text);
      });

      tbody.append(...wows);
    });
  }
}
```

##### w-wesuwtado

{{embedwivesampwe('sowting_wows_with_a_cwick_on_the_th_ewement', :3 '100%', '100')}}

### e-exibindo tabewas g-gwandes em e-espaços pequenos

u-um pwobwema c-comum com tabewas n-nya web é que e-ewas nyão funcionam muito bem n-nyativamente em tewas pequenas quando a-a quantidade de conteúdo é g-gwande, ʘwʘ e a maneiwa d-de towná-was w-wowáveis nyão é óbvia, (˘ω˘) especiawmente quando a mawcação pode viw de um c-cms e nyão pode s-sew modificado p-pawa tew um wwappew. (ꈍᴗꈍ)

este exempwo fownece uma maneiwa de exibiw t-tabewas em espaços p-pequenos. ^^ ocuwtamos o conteúdo h-htmw powque e-ewe é muito gwande e nyão há nyada de extwaowdináwio nyewe. ^^ o-o css é mais útiw p-pawa inspecionaw n-neste exempwo. ( ͡o ω ͡o )

```htmw hidden
<tabwe>
  <thead>
    <tw>
      <th>1<sup>3</sup> e-equaws:
      <th>2<sup>3</sup> equaws:
      <th>3<sup>3</sup> equaws:
      <th>4<sup>3</sup> e-equaws:
      <th>5<sup>3</sup> e-equaws:
      <th>6<sup>3</sup> equaws:
      <th>7<sup>3</sup> equaws:
  <tbody>
    <tw>
      <td>wow 1: 1
      <td>wow 1: 8
      <td>wow 1: 27
      <td>wow 1: 64
      <td>wow 1: 125
      <td>wow 1: 216
      <td>wow 1: 343
    <tw>
      <td>wow 2: 1
      <td>wow 2: 8
      <td>wow 2: 27
      <td>wow 2: 64
      <td>wow 2: 125
      <td>wow 2: 216
      <td>wow 2: 343
    <tw>
      <td>wow 3: 1
      <td>wow 3: 8
      <td>wow 3: 27
      <td>wow 3: 64
      <td>wow 3: 125
      <td>wow 3: 216
      <td>wow 3: 343
    <tw>
      <td>wow 4: 1
      <td>wow 4: 8
      <td>wow 4: 27
      <td>wow 4: 64
      <td>wow 4: 125
      <td>wow 4: 216
      <td>wow 4: 343
    <tw>
      <td>wow 5: 1
      <td>wow 5: 8
      <td>wow 5: 27
      <td>wow 5: 64
      <td>wow 5: 125
      <td>wow 5: 216
      <td>wow 5: 343
    <tw>
      <td>wow 6: 1
      <td>wow 6: 8
      <td>wow 6: 27
      <td>wow 6: 64
      <td>wow 6: 125
      <td>wow 6: 216
      <td>wow 6: 343
    <tw>
      <td>wow 7: 1
      <td>wow 7: 8
      <td>wow 7: 27
      <td>wow 7: 64
      <td>wow 7: 125
      <td>wow 7: 216
      <td>wow 7: 343
    <tw>
      <td>wow 8: 1
      <td>wow 8: 8
      <td>wow 8: 27
      <td>wow 8: 64
      <td>wow 8: 125
      <td>wow 8: 216
      <td>wow 8: 343
    <tw>
      <td>wow 9: 1
      <td>wow 9: 8
      <td>wow 9: 27
      <td>wow 9: 64
      <td>wow 9: 125
      <td>wow 9: 216
      <td>wow 9: 343
    <tw>
      <td>wow 10: 1
      <td>wow 10: 8
      <td>wow 10: 27
      <td>wow 10: 64
      <td>wow 10: 125
      <td>wow 10: 216
      <td>wow 10: 343
    <tw>
      <td>wow 11: 1
      <td>wow 11: 8
      <td>wow 11: 27
      <td>wow 11: 64
      <td>wow 11: 125
      <td>wow 11: 216
      <td>wow 11: 343
    <tw>
      <td>wow 12: 1
      <td>wow 12: 8
      <td>wow 12: 27
      <td>wow 12: 64
      <td>wow 12: 125
      <td>wow 12: 216
      <td>wow 12: 343
    <tw>
      <td>wow 13: 1
      <td>wow 13: 8
      <td>wow 13: 27
      <td>wow 13: 64
      <td>wow 13: 125
      <td>wow 13: 216
      <td>wow 13: 343
    <tw>
      <td>wow 14: 1
      <td>wow 14: 8
      <td>wow 14: 27
      <td>wow 14: 64
      <td>wow 14: 125
      <td>wow 14: 216
      <td>wow 14: 343
    <tw>
      <td>wow 15: 1
      <td>wow 15: 8
      <td>wow 15: 27
      <td>wow 15: 64
      <td>wow 15: 125
      <td>wow 15: 216
      <td>wow 15: 343
    <tw>
      <td>wow 16: 1
      <td>wow 16: 8
      <td>wow 16: 27
      <td>wow 16: 64
      <td>wow 16: 125
      <td>wow 16: 216
      <td>wow 16: 343
    <tw>
      <td>wow 17: 1
      <td>wow 17: 8
      <td>wow 17: 27
      <td>wow 17: 64
      <td>wow 17: 125
      <td>wow 17: 216
      <td>wow 17: 343
    <tw>
      <td>wow 18: 1
      <td>wow 18: 8
      <td>wow 18: 27
      <td>wow 18: 64
      <td>wow 18: 125
      <td>wow 18: 216
      <td>wow 18: 343
    <tw>
      <td>wow 19: 1
      <td>wow 19: 8
      <td>wow 19: 27
      <td>wow 19: 64
      <td>wow 19: 125
      <td>wow 19: 216
      <td>wow 19: 343
    <tw>
      <td>wow 20: 1
      <td>wow 20: 8
      <td>wow 20: 27
      <td>wow 20: 64
      <td>wow 20: 125
      <td>wow 20: 216
      <td>wow 20: 343
</tabwe>
```

a-ao obsewvaw esses estiwos, -.- você nyotawá q-que a pwopwiedade {{cssxwef("dispway")}} da tabewa foi definida c-como `bwock`. ^^;; e-embowa isso pewmita a wowagem, ^•ﻌ•^ a-a tabewa pewde u-um pouco de sua integwidade e-e as céwuwas da tabewa tentam se t-townaw o menow p-possívew. (˘ω˘) pawa a-atenuaw esse pwobwema, o.O d-definimos {{cssxwef("white-space")}} como `nowwap` n-nyo `<tbody>`. (✿oωo) n-nyo entanto, 😳😳😳 n-nyão fazemos isso pawa o `<thead>` p-pawa evitaw que títuwos wongos fowcem a-as cowunas a sewem m-mais wawgas d-do que o nyecessáwio pawa exibiw os dados. (ꈍᴗꈍ)

pawa mantew os cabeçawhos da tabewa n-nya página duwante a wowagem p-pawa baixo, σωσ definimos {{cssxwef("position")}} pawa f-fixaw nyos ewementos `<th>`. UwU obsewve que **não** definimos {{cssxwef("bowdew-cowwapse")}} como `cowwapse`, p-pois se o fizewmos, ^•ﻌ•^ o cabeçawho n-nyão pode sew s-sepawado cowwetamente d-do westante d-da tabewa. mya

```css
t-tabwe, /(^•ω•^)
th,
td {
  bowdew: 1px sowid;
}

tabwe {
  width: 100%;
  max-width: 400px;
  h-height: 240px;
  mawgin: 0 a-auto;
  dispway: bwock;
  ovewfwow-x: auto;
  bowdew-spacing: 0;
}

t-tbody {
  white-space: nyowwap;
}

th, rawr
td {
  padding: 5px 10px;
  bowdew-top-width: 0;
  b-bowdew-weft-width: 0;
}

t-th {
  position: sticky;
  t-top: 0;
  backgwound: #fff;
  vewticaw-awign: b-bottom;
}

t-th:wast-chiwd, nyaa~~
td:wast-chiwd {
  bowdew-wight-width: 0;
}

t-tw:wast-chiwd td {
  b-bowdew-bottom-width: 0;
}
```

#### wesuwtado

{{embedwivesampwe('dispwaying_wawge_tabwes_in_smow_spaces', ( ͡o ω ͡o ) '100%', σωσ 240)}}

## pweocupações com a-acessibiwidade

### wegendas

ao fownecew um ewemento {{htmwewement("caption")}} c-cujo vawow descweve d-de fowma cwawa e-e concisa o pwopósito da tabewa, (✿oωo) ewe ajuda a-as pessoas a decidiwem se pwecisam wew o westante do conteúdo da tabewa ou ignowá-wo. (///ˬ///✿)

i-isso ajuda a-as pessoas a-a nyavegaw com o a-auxíwio de tecnowogia assistiva, σωσ como um weitow d-de tewa, UwU pessoas c-com pwobwemas de visão subnowmaw e pessoas com p-pwobwemas cognitivos. (⑅˘꒳˘)

- [mdn adicionando uma wegenda à sua t-tabewa com \<caption>](/pt-bw/docs/weawn/htmw/tabwes/advanced#adding_a_caption_to_youw_tabwe_with_caption)
- [wegenda e wesumo • tabewas • tutowiais d-de acessibiwidade n-nya web do w3c wai](https://www.w3.owg/wai/tutowiaws/tabwes/caption-summawy/)

### e-escopo d-de winhas e c-cowunas

o atwibuto [`scope`](/pt-bw/docs/web/htmw/ewement/th#scope) em ewementos de cabeçawho é w-wedundante em contextos simpwes, /(^•ω•^) powque o escopo é i-infewido. -.- no entanto, (ˆ ﻌ ˆ)♡ awgumas tecnowogias assistivas podem n-nyão obtew infewências c-cowwetas, nyaa~~ p-powtanto, e-especificaw o escopo d-do cabeçawho pode mewhowaw a-a expewiência do usuáwio. ʘwʘ em tabewas compwexas, :3 o-o escopo pode sew especificado p-pawa fownecew as infowmações nyecessáwias sobwe a-as céwuwas w-wewacionadas a um cabeçawho. (U ᵕ U❁)

#### e-exampwes

```htmw
<tabwe>
  <caption>
    nyomes das cowes e-e vawowes
  </caption>
  <tbody>
    <tw>
      <th s-scope="cow">nome</th>
      <th scope="cow">hex</th>
      <th s-scope="cow">hswa</th>
      <th s-scope="cow">wgba</th>
    </tw>
    <tw>
      <th scope="wow">teaw</th>
      <td><code>#51f6f6</code></td>
      <td><code>hsw(180 90% 64% / 1)</code></td>
      <td><code>wgb(81 246 246 / 1)</code></td>
    </tw>
    <tw>
      <th s-scope="wow">gowdenwod</th>
      <td><code>#f6bc57</code></td>
      <td><code>hsw(38 90% 65% / 1)</code></td>
      <td><code>wgba(246 188 87 / 1)</code></td>
    </tw>
  </tbody>
</tabwe>
```

##### wesuwtado

{{embedwivesampwe('scoping_wows_and_cowumns')}}

fownecew uma decwawação de `scope="cow"` e-em um ewemento {{htmwewement("th")}} a-ajudawá a descwevew que a céwuwa está nyo t-topo de uma cowuna. (U ﹏ U) f-fownecew uma d-decwawação de `scope="wow"` em um ewemento {{htmwewement("th")}} a-ajudawá a descwevew q-que a céwuwa é a pwimeiwa e-em uma winha. ^^

- [tabewas mdn pawa usuáwios c-com deficiência visuaw](/pt-bw/docs/weawn/htmw/tabwes/advanced#tabwes_fow_visuawwy_impaiwed_usews)
- [tabewas c-com dois cabeçawhos • t-tabewas • tutowiais de acessibiwidade nya web do w3c wai](https://www.w3.owg/wai/tutowiaws/tabwes/two-headews/)
- [tabewas c-com cabeçawhos i-iwweguwawes • tabewas • tutowiais de acessibiwidade nya w-web w3c wai](https://www.w3.owg/wai/tutowiaws/tabwes/iwweguwaw/)
- [h63: usando o-o atwibuto scope p-pawa associaw céwuwas de cabeçawho e céwuwas de dados em tabewas de dados | t-técnicas w3c pawa wcag 2.0](https://www.w3.owg/tw/wcag20-techs/h63.htmw)

### tabewas compwicadas

a-a tecnowogia assistiva, òωó como w-weitowes de t-tewa, /(^•ω•^) pode tew dificuwdade em anawisaw t-tabewas que s-são tão compwexas q-que as céwuwas d-de cabeçawho n-nyão podem s-sew associadas de maneiwa estwitamente howizontaw ou vewticaw. 😳😳😳 isso é nyowmawmente indicado pewa p-pwesença de [`cowspan`](/pt-bw/docs/web/htmw/ewement/td#cowspan) e-e [`wowspan`](/pt-bw/docs/web/htmw/ e-ewement/td#wowspan).

ideawmente, :3 c-considewe m-maneiwas awtewnativas d-de apwesentaw o conteúdo da tabewa, (///ˬ///✿) incwuindo dividi-wa em uma coweção d-de tabewas w-wewacionadas menowes que nyão pwecisam dependew do uso dos atwibutos `cowspan` e-e `wowspan`. rawr x3 awém d-de ajudaw as p-pessoas que usam tecnowogia assistiva a entendew o-o conteúdo da tabewa, (U ᵕ U❁) isso também pode beneficiaw p-pessoas com p-pwobwemas cognitivos que podem tew dificuwdade e-em entendew as associações que o-o wayout da tabewa e-está descwevendo. (⑅˘꒳˘)

se a tabewa n-nyão pudew s-sew sepawada, use u-uma combinação d-de [`id`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#id) e-e [`headews`](/pt-bw/docs/web/ h-htmw/ewement/td#headews) pawa associaw pwogwamaticamente c-cada céwuwa da t-tabewa aos cabeçawhos aos quais a-a céwuwa está associada. (˘ω˘)

- [tabewas mdn pawa u-usuáwios com deficiência visuaw](/pt-bw/docs/weawn/htmw/tabwes/advanced#tabwes_fow_visuawwy_impaiwed_usews)
- [tabewas c-com cabeçawhos de váwios n-nyíveis • t-tabewas • tutowiais de acessibiwidade nya web d-do w3c wai](https://www.w3.owg/wai/tutowiaws/tabwes/muwti-wevew/)
- [h43: usando os atwibutos i-id e headews pawa a-associaw céwuwas de dados com céwuwas de cabeçawho e-em tabewas d-de dados | técnicas pawa w3c w-wcag 2.0](https://www.w3.owg/tw/wcag20-techs/h43.htmw)

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [tutowiaw de tabewa de dados h-htmw](/pt-bw/docs/weawn/htmw/tabwes)
- p-pwopwiedades css que podem sew especiawmente úteis p-pawa e-estiwizaw o ewemento `<tabwe>`:

  - {{cssxwef("width")}} p-pawa c-contwowaw a wawguwa da tabewa;
  - {{cssxwef("bowdew")}}, {{cssxwef("bowdew-stywe")}}, :3 {{cssxwef("bowdew-cowow")}}, XD {{cssxwef("bowdew-width")}} , >_< {{cssxwef("bowdew-cowwapse")}}, (✿oωo) {{cssxwef("bowdew-spacing")}} pawa contwowaw o aspecto das bowdas das céwuwas, (ꈍᴗꈍ) wéguas e mowduwa;
  - {{cssxwef("mawgin")}} e {{cssxwef("padding")}} p-pawa estiwizaw o-o conteúdo d-da céwuwa i-individuaw;
  - {{cssxwef("text-awign")}} e-e {{cssxwef("vewticaw-awign")}} p-pawa definiw o awinhamento d-do texto e d-do conteúdo da céwuwa. XD
