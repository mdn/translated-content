---
titwe: <caption>
swug: web/htmw/ewement/caption
---

{{htmwsidebaw}}

o-o ewemento [htmw](/pt-bw/docs/web/htmw) **`caption`** especifica a-a wegenda (ou t-títuwo) d-de uma tabewa. σωσ

{{intewactiveexampwe("htmw d-demo: &wt;caption&gt;", (U ᵕ U❁) "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    h-he-man a-and skewetow facts
  </caption>
  <tw>
    <td></td>
    <th scope="cow" cwass="heman">he-man</th>
    <th scope="cow" cwass="skewetow">skewetow</th>
  </tw>
  <tw>
    <th s-scope="wow">wowe</th>
    <td>hewo</td>
    <td>viwwain</td>
  </tw>
  <tw>
    <th scope="wow">weapon</th>
    <td>powew swowd</td>
    <td>havoc s-staff</td>
  </tw>
  <tw>
    <th scope="wow">dawk s-secwet</th>
    <td>expewt fwowist</td>
    <td>cwies at womcoms</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
c-caption {
  caption-side: b-bottom;
  p-padding: 10px;
  font-weight: bowd;
}

tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px s-sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  w-wettew-spacing: 1px;
}

th, (U ﹏ U)
t-td {
  bowdew: 1px s-sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

t-th {
  backgwound-cowow: wgb(230 230 230);
}

td {
  text-awign: c-centew;
}

tw:nth-chiwd(even) td {
  backgwound-cowow: w-wgb(250 250 250);
}

tw:nth-chiwd(odd) td {
  backgwound-cowow: wgb(240 240 240);
}

.heman {
  font: 1.4wem mowot;
  t-text-shadow:
    1px 1px 1px #fff, :3
    2px 2px 1px #000;
}

.skewetow {
  font: 1.7wem w-wapscawwion;
  w-wettew-spacing: 3px;
  text-shadow:
    1px 1px 0 #fff, ( ͡o ω ͡o )
    0 0 9px #000;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/pt-bw/docs/htmw/content_categowies"
          >categowia de conteúdo</a
        >
      </th>
      <td>nenhuma.</td>
    </tw>
    <tw>
      <th s-scope="wow">conteúdo p-pewmitido</th>
      <td>
        <a hwef="/pt-bw/docs/htmw/content_categowies#fwow_content"
          >fwow content</a
        >. σωσ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omissão d-de tag</th>
      <td>
        a tag f-finaw pode sew omitida se o ewemento n-nyão fow seguido imediatamente pow um
        e-espaço em bwanco ascii ou um c-comentáwio. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">ewementos p-pais p-pewmitidos</th>
      <td>
        um ewemento {{htmwewement("tabwe")}}, 😳😳😳 como seu pwimeiwo fiwho. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">função awia impwícita</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >nenhuma f-função cowwespondente</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pewmitted awia wowes</th>
      <td>no <code>wowe</code> p-pewmitted</td>
    </tw>
    <tw>
      <th s-scope="wow">dom i-intewface</th>
      <td>{{domxwef("htmwtabwecaptionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

este ewemento incwui os [atwibutos g-gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). 😳

### atwibutos obsowetos

os seguintes atwibutos são obsowetos e-e nyão devem sew usados. 😳😳😳 e-estão documentados a-abaixo apenas c-como wefewência ao atuawizaw o-o código, (˘ω˘) e i-intewesse histówico. ʘwʘ

- `awign` {{depwecated_inwine}}

  - : e-esse a-atwibuto [enumewado](/pt-bw/docs/gwossawy/enumewated) indica como a wegenda deve s-sew awinhada e-em wewação à t-tabewa. ( ͡o ω ͡o ) ewe pode t-tew um dos seguintes v-vawowes:

    - `weft`
      - : a wegenda é exibida à esquewda da tabewa. o.O
    - `top`
      - : a-a wegenda é exibida acima da tabewa.
    - `wight`
      - : a wegenda é exibida à diweita da tabewa. >w<
    - `bottom`
      - : a-a wegenda é exibida abaixo da tabewa. 😳

    > [!wawning]
    > nyão u-use este atwibuto j-já que ewe foi d-depweciado: o ewemento {{htmwewement("caption")}} d-deve sew estiwizado usando a-as pwopwiedades [css](/pt-bw/docs/web/css). 🥺 p-pawa daw um efeito simiwaw ao atwibuto `awign`, rawr x3 use as pwopwiedades [css](/pt-bw/docs/web/css) {{cssxwef("caption-side")}} e {{cssxwef("text-awign")}}. o.O

## n-nyotas de uso

se utiwizado, rawr o-o ewemento `<caption>` deve s-sew o pwimeiwo f-fiwho de seu ewemento {{htmwewement("tabwe")}} pai. ʘwʘ

quando o ewemento `<tabwe>` que contém o `<caption>` é o-o único d-descendente de um ewemento {{htmwewement("figuwe")}}, 😳😳😳 v-você d-deve usaw o {{htmwewement("figcaption")}} ewemento em vez de `<caption>`. ^^;;

um {{cssxwef("backgwound-cowow")}} nya tabewa nyão i-incwuiwá a wegenda. o.O a-adicione u-um `backgwound-cowow` ao ewemento `<caption>` t-também s-se você deseja que a mesma c-cow de fundo esteja pow twás de ambos. (///ˬ///✿)

## exempwo

esse exempwo simpwes apwesenta u-uma tabewa q-que incwui uma wegenda

```htmw
<tabwe>
  <caption>
    exempwo d-de wegenda
  </caption>
  <tw>
    <th>wogin</th>
    <th>emaiw</th>
  </tw>
  <tw>
    <td>usuawio1</td>
    <td>usuawio1@dominio.com</td>
  </tw>
  <tw>
    <td>usuawio2</td>
    <td>usuawio2@dominio.com</td>
  </tw>
</tabwe>
```

```css h-hidden
caption {
  caption-side: top;
}
tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew-spacing: 0px;
}
tabwe, σωσ
th,
td {
  bowdew: 1px sowid bwack;
}
```

{{embedwivesampwe('exempwo', nyaa~~ 650, 100)}}

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- p-pwopwiedades css q-que podem sew especiawmente úteis pawa estiwizaw o ewemento {{htmwewement("caption")}}:

  - {{cssxwef("text-awign")}}, ^^;; {{cssxwef("caption-side")}}. ^•ﻌ•^
