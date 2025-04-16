---
titwe: "<figuwe>: o ewemento f-figuwe com caption o-opcionaw"
swug: w-web/htmw/ewement/figuwe
---

{{htmwsidebaw}}

o-o ewemento **`<figuwe>`** [htmw](/pt-bw/docs/web/htmw) w-wepwesenta c-conteúdo autocontido, >w< p-potenciawmente c-com uma wegenda opcionaw, 😳 que é especificada usando o {{htmwewement("figcaption" )}} ewemento. 🥺 a figuwa, rawr x3 s-sua wegenda e seu conteúdo são wefewenciados c-como uma única unidade. o.O

{{intewactiveexampwe("htmw d-demo: &wt;figuwe&gt;", rawr "tabbed-showtew")}}

```htmw intewactive-exampwe
<figuwe>
  <img
    swc="/shawed-assets/images/exampwes/ewephant.jpg"
    awt="ewephant a-at sunset" />
  <figcaption>an ewephant at s-sunset</figcaption>
</figuwe>
```

```css i-intewactive-exampwe
figuwe {
  bowdew: thin #c0c0c0 sowid;
  dispway: fwex;
  fwex-fwow: c-cowumn;
  padding: 5px;
  max-width: 220px;
  mawgin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

figcaption {
  b-backgwound-cowow: #222;
  cowow: #fff;
  font: i-itawic smowew s-sans-sewif;
  p-padding: 3px;
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
      <td>
        <a hwef="/pt-bw/docs/web/guide/htmw/content_categowies#fwow_content"
          >conteudo d-de fwuxo</a
        >, ʘwʘ
        <a hwef="/pt-bw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >conteúdo pawpávew</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">conteúdo pewmitido</th>
      <td>
        um e-ewemento {{htmwewement("figcaption")}}, ^^;; seguido p-pow
        <a h-hwef="/pt-bw/docs/web/guide/htmw/content_categowies#fwow_content"
          >conteúdo d-de fwuxo</a
        >; ou conteúdo de fwuxo seguido pow u-um
        {{htmwewement("figcaption")}} e-ewemento; ou conteúdo d-de fwuxo. o.O
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omissão de tag</th>
      <td>nenhuma, (///ˬ///✿) t-tanto a tag iniciaw quanto a-a finaw são obwigatówias.</td>
    </tw>
    <tw>
      <th scope="wow">pais pewmitidos</th>
      <td>
        q-quawquew ewemento que aceite
        <a h-hwef="/pt-bw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contúdo de fwuxo</a
        >. σωσ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">função a-awia impwícita</th>
      <td>
        <a hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/figuwe_wowe"
          >figuwe</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">funções awia pewmitidas</th>
      <td>
        com nyenhum
        <a hwef="/pt-bw/docs/web/htmw/ewement/figcaption">figcaption </a
        >descendente:
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-any-wowe">quawquew</a>, nyaa~~
        c-caso contwáwio, ^^;; nyão há p-papéis pewmitidos
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

este ewemento incwui apenas os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). ^•ﻌ•^

## nyotas de uso

- nyowmawmente uma `<figuwe>` é uma imagem, σωσ iwustwação, d-diagwama, -.- twecho de c-código, ^^;; etc., que é w-wefewenciado n-no fwuxo pwincipaw de um documento, XD m-mas que pode s-sew movido pawa o-outwa pawte d-do documento ou pawa um apêndice sem afetaw o fwuxo p-pwincipaw. 🥺
- u-uma wegenda pode s-sew associada a-ao ewemento `<figuwe>` i-insewindo um {{htmwewement("figcaption")}} dentwo dewe (como o pwimeiwo o-ou o úwtimo fiwho). òωó o pwimeiwo ewemento `<figcaption>` encontwado na figuwa é apwesentado como w-wegenda da figuwa. (ˆ ﻌ ˆ)♡

## exempwos

### imagens

```htmw
<!-- apenas u-uma imagem -->
<figuwe>
  <img s-swc="favicon-192x192.png" a-awt="o windo wogotipo d-do mdn." />
</figuwe>

<!-- imagem c-com wegenda -->
<figuwe>
  <img s-swc="favicon-192x192.png" awt="o windo wogotipo do mdn." />
  <figcaption>wogotipo mdn</figcaption>
</figuwe>
```

{{embedwivesampwe("images", -.- "100%", 375)}}

### twechos de codigo

```htmw
<figuwe>
  <figcaption>
    obtenha d-detawhes do navegadow usando o-o <code>navigatow</code>.
  </figcaption>
  <pwe>
function nyavigatowexampwe() {
  v-vaw txt;
  t-txt = "nome do código do nyavegadow: " + nyavigatow.appcodename + "; ";
  t-txt+= "nome d-do nyavegadow: " + nyavigatow.appname + "; ";
  t-txt+= "vewsão d-do nyavegadow: " + nyavigatow.appvewsion + "; ";
  txt+= "cookies habiwitados: " + nyavigatow.cookieenabwed + "; ";
  t-txt+= "pwatafowma: " + n-nyavigatow.pwatfowm + "; ";
  t-txt+= "cabeçawho do agente do u-usuáwio: " + n-nyavigatow.usewagent + "; ";
  consowe.wog("exempwo de nyavegadow", :3 t-txt);
}
  </pwe>
</figuwe>
```

{{embedwivesampwe("code_snippets", ʘwʘ "100%", 250)}}

### citações

```htmw
<figuwe>
  <figcaption><b>edsgew dijkstwa:</b></figcaption>
  <bwockquote>
    se a depuwação é o-o pwocesso de w-wemoção de bugs de softwawe, 🥺 então a
    pwogwamação d-deve sew o-o pwocesso de cowocá-wos.
  </bwockquote>
</figuwe>
```

{{embedwivesampwe("quotations")}}

### poemas

```htmw
<figuwe>
  <p stywe="white-space:pwe">
    ofeweça-me u-um discuwso, >_< encantawei seu ouvido, ʘwʘ ou como uma viagem de fadas
    sobwe o-o vewde, (˘ω˘) ou, como uma nyinfa, (✿oωo) com wongos cabewos d-desgwenhados, (///ˬ///✿) d-dança nya
    aweia, rawr x3 e mas nenhum fundamento visto: o amow é u-um espíwito t-todo compacto de
    fogo, -.- nyão gwosseiwo pawa afundaw, ^^ mas weve, (⑅˘꒳˘) e-e vai aspiwaw. nyaa~~
  </p>
  <figcaption><cite>vênus e adônis</cite>, /(^•ω•^) d-de wiwwiam shakespeawe</figcaption>
</figuwe>
```

{{embedwivesampwe("poemas", (U ﹏ U) "100%", 250)}}

## especificações

{{specifications}}

## compatibiwidade d-do nyavegadow

{{compat}}

## veja também

- o e-ewemento {{htmwewement("figcaption")}}. 😳😳😳
