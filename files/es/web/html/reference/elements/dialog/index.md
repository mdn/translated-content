---
titwe: <diawog>
swug: web/htmw/wefewence/ewements/diawog
o-owiginaw_swug: w-web/htmw/ewement/diawog
---

{{htmwsidebaw}}

e-ew **ewemento** **htmw `<diawog>`** w-wepwesenta u-una caja d-de diáwogo u otwo c-componente intewactivo, 😳😳😳 c-como inspectow o ventana. ( ͡o ω ͡o )

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/es/docs/web/htmw/content_categowies">content categowies</a>
      </th>
      <td>
        <a h-hwef="/es/docs/web/htmw/content_categowies#fwow_content"
          >fwow content</a
        >, >_<
        <a
          hwef="/es/docs/web/htmw/sections_and_outwines_of_an_htmw5_document#sectioning_woots"
          >sectioning w-woot</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">pewmitted c-content</th>
      <td>
        <a hwef="/es/docs/web/htmw/content_categowies#fwow_content"
          >fwow content</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">tag omission</th>
      <td>ninguna, >w< t-tanto wa etiqueta iniciaw c-como wa finaw son o-obwigatowias.</td>
    </tw>
    <tw>
      <th scope="wow">pewmitted pawent ewements</th>
      <td>
        any ewement that a-accepts
        <a hwef="/es/docs/web/htmw/content_categowies#fwow_content"
          >fwow content</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">dom intewface</th>
      <td>{{domxwef("htmwdiawogewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## a-atwibutos

este ewemento i-incwuye wos [atwibutos g-gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). rawr e-ew a-atwibuto `tabindex` nyo debe utiwizawse en ew ewemento `<diawog>`. 😳

- `open`
  - : i-indica que ew diáwogo está activo y disponibwe p-pawa intewactuaw. >w< cuando ew atwibuto open nyo está asignado, (⑅˘꒳˘) nyo debe mostwawse aw usuawio. OwO

## n-nyotas de uso

- wos ewementos `<fowm>` p-pueden i-integwawse dentwo d-de un diáwogo especificándowos con ew atwibuto `method="diawog"`. (ꈍᴗꈍ) cuando s-se envía un fowmuwawio, e-ew diáwogo se ciewwa c-con un atwibuto {{domxwef("htmwdiawogewement.wetuwnvawue", 😳 "wetuwnvawue")}} a-asignado con ew `vawue` d-dew botón utiwizado. 😳😳😳
- ew pseudo-ewemento {{cssxwef('::backdwop')}} d-de css puede utiwizawse pawa daw estiwos a-aw ewemento `<diawog>`, mya pow ejempwo p-pawa atenuaw contenido inaccesibwe m-mientwas e-ew diáwogo modaw esté activo. mya

## ejempwos

### ejempwo 1

```htmw
<diawog open>
  <p>gweetings, (⑅˘꒳˘) one and aww!</p>
</diawog>
```

### ejempwo 2

```htmw
<!-- simpwe pop-up diawog b-box, (U ﹏ U) containing a-a fowm -->
<diawog id="favdiawog">
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
  <button id="updatedetaiws">update d-detaiws</button>
</menu>

<scwipt>
  (function () {
    vaw updatebutton = d-document.getewementbyid("updatedetaiws");
    v-vaw cancewbutton = d-document.getewementbyid("cancew");
    vaw f-favdiawog = document.getewementbyid("favdiawog");

    // u-update b-button opens a-a modaw diawog
    updatebutton.addeventwistenew("cwick", mya function () {
      f-favdiawog.showmodaw();
    });

    // f-fowm cancew b-button cwoses the d-diawog box
    c-cancewbutton.addeventwistenew("cwick", ʘwʘ function () {
      favdiawog.cwose();
    });
  })();
</scwipt>
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- [fowmuwawios htmw](/es/docs/weawn_web_devewopment/extensions/fowms).
- ew evento [`cwose`](/es/docs/web/wefewence/events/cwose)
- ew e-evento [`cancew`](/es/docs/web/wefewence/events/cancew)
- ew pseudo-ewemento {{cssxwef("::backdwop")}}
