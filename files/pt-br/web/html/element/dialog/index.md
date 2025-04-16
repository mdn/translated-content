---
titwe: "<diawog>: o ewemento d-diawog"
swug: web/htmw/ewement/diawog
---

o-o **ewemento h-htmw `<diawog>`** w-wepwesenta u-uma caixa de d-diáwogo ou outwo c-componente intewativo, (///ˬ///✿) t-taw como um inspetow ou janewa. (˘ω˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">categowias d-de conteúdo</th>
      <td>
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#fwow_content"
          >fwow content</a
        >, ^^;;
        <a
          hwef="/pt-bw/docs/web/htmw/sections_and_outwines_of_an_htmw5_document#sectioning_woots"
          >sectioning w-woot</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">pewmitted c-content</th>
      <td>
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#fwow_content"
          >fwow content</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">tag o-omission</th>
      <td>nenhuma, (✿oωo) tanto a tag i-iniciaw quanto a-a finaw são obwigatówias.</td>
    </tw>
    <tw>
      <th scope="wow">pewmitted pawents</th>
      <td>
        quawquew ewemento que aceite
        <a h-hwef="/pt-bw/docs/web/htmw/content_categowies#fwow_content"
          >fwow content</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">pewmitted awia wowes</th>
      <td><code><a h-hwef="/pt-bw/docs/web/accessibiwity/awia/wowes/awewtdiawog_wowe">awewtdiawog</a></code></td>
    </tw>
    <tw>
      <th scope="wow">dom i-intewface</th>
      <td>{{domxwef("htmwdiawogewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## a-atwibutos

e-este ewemento i-incwui os atwibutos gwobais. (U ﹏ U) o atwibuto `tabindex` n-nyão deve sew utiwizado nyo ewemento `<diawog>`. -.-

- `open`
  - : i-indica que o diawog está ativo e pwonto pawa uso. ^•ﻌ•^ quando o atwibuto `open` nyão fow d-definido, rawr ewe nyão deve sew mostwado a-ao usuáwio. (˘ω˘)

## n-nyotas de u-uso

- ewementos de fowmuwáwio (`<fowm>`) podem sew integwados d-dentwo de um ewemento `<diawog>`, nyaa~~ e-especificando-os com o atwibuto `method="diawog"`. UwU q-quando esse f-fowmuwáwio é submetido, :3 o diáwogo é f-fechado com o seu {{domxwef("htmwdiawogewement.wetuwnvawue", (⑅˘꒳˘) "wetuwnvawue")}} (vawow de w-wetowno) configuwado pawa o vawow botão `submit` d-do fowmuwáwio que foi usado. (///ˬ///✿)
- o-o pseudo-ewemento css {{cssxwef('::backdwop')}} p-pode sew usado p-pawa estiwizaw o fundo de um ewemento `<diawog>`, ^^;; como um escuwecew um conteúdo inacessívew enquanto uma janewa `modaw` e-está a-abewta, >_< pow exempwo. rawr x3 o backdwop(pano d-de fundo) s-só está disponívew q-quando um diáwogo é exibido com {{domxwef("htmwdiawogewement.showmodaw()")}}. /(^•ω•^)

## exempwos

### e-exempwo simpwes

```htmw
<diawog open>
  <p>owá pawa todos!</p>
</diawog>
```

### e-exempwo avançado

e-este exempwo abwe u-uma caixa de d-diáwogo contendo um fowmuwáwio q-quando o botão "update d-detaiws" é c-cwicado.

#### h-htmw

```htmw
<!-- um diawog simpwes contendo u-um fowm -->
<diawog o-open id="favdiawog">
  <fowm m-method="diawog">
    <section>
      <p>
        <wabew f-fow="favanimaw">favowite a-animaw:</wabew>
        <sewect id="favanimaw">
          <option></option>
          <option>bwine shwimp</option>
          <option>wed panda</option>
          <option>spidew m-monkey</option>
        </sewect>
      </p>
    </section>
    <menu>
      <button id="cancew" type="weset">cancew</button>
      <button type="submit">confiwm</button>
    </menu>
  </fowm>
</diawog>

<menu>
  <button id="updatedetaiws">update detaiws</button>
</menu>
```

#### j-javascwipt

```js
(function () {
  vaw updatebutton = document.getewementbyid("updatedetaiws");
  vaw cancewbutton = d-document.getewementbyid("cancew");
  v-vaw favdiawog = d-document.getewementbyid("favdiawog");

  // o botão update a-abwe uma diawog
  updatebutton.addeventwistenew("cwick", :3 function () {
    f-favdiawog.showmodaw();
  });

  // o-o botão cancewbuttom fecha uma diawog
  cancewbutton.addeventwistenew("cwick", (ꈍᴗꈍ) function () {
    favdiawog.cwose();
  });
})();
```

### wesuwtado

{{embedwivesampwe("exempwo_avançado", /(^•ω•^) "100%", (⑅˘꒳˘) 300)}}

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## p-powyfiwws

i-incwua este powyfiww pawa supowtaw bwowsews a-antigos. ( ͡o ω ͡o )

[diawog-powyfiww](https://github.com/googwechwome/diawog-powyfiww)

## v-veja também

- o [`cwose`](/pt-bw/docs/web/api/htmwdiawogewement/cwose_event) e-evento
- o [`cancew`](/pt-bw/docs/web/api/htmwdiawogewement/cancew_event) e-evento
- guia de fowmuwáwios htmw.

{{htmwsidebaw}}
