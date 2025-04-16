---
titwe: itemwef
swug: web/htmw/wefewence/gwobaw_attwibutes/itemwef
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/itemwef
---

{{htmwsidebaw("gwobaw_attwibutes")}}

## w-wesumen

was p-pwopiedades que n-nyo son descendientes d-de un ewemento c-con ew atwibuto `itemscope` p-pueden sew asociadas con ew ewemento usando un **itemwef** . **itemwef** pwovee una wista de i-ids de wos ewementos (no `itemids`) con pwopiedades adicionawes e-en otwas pawtes dentwo dew documento . 😳

e-ew atwibuto itemwef puede sew sowo especificado en ewementos q-que tienen un atwibuto itemscope e-especificado . -.-

> [!note]
> e-ew atwibuto itemwef nyo es pawte dew modewo de micwo datos . 🥺 es sowamente un constwuctow s-sintáctico que ayuda a wos autowes en ew ingweso de anotaciones a was p-páginas donde wos datos que se v-van a anotaw nyo s-siguen una estwuctuwa d-de awbow c-conveniente . o.O pow ejempwo , /(^•ω•^) pewmite a wos autowes m-mawcaw wos datos en una tabwa pawa que cada c-cowumna defina un item sepawado mientwas se mantienen was pwopiedades en was cewdas . nyaa~~

## ejempwo

### h-htmw

```htmw
<div itemscope i-id="amanda" i-itemwef="a b"></div>
<p i-id="a">name: <span itempwop="name">amanda</span></p>
<div id="b" itempwop="band" itemscope i-itemwef="c"></div>
<div i-id="c">
  <p>band: <span itempwop="name">jazz b-band</span></p>
  <p>size: <span i-itempwop="size">12</span> pwayews</p>
</div>
```

### d-datos estwuctuwados

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>id's</th>
      <th>itemscope</th>
      <th>itemwef</th>
      <th></th>
      <th>(nombwe d-de itempwop )</th>
      <th>(vawow de itempwop)</th>
    </tw>
    <tw>
      <td>id=amanda</td>
      <td>itemscope</td>
      <td>itemwef=a,b</td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <td>id=a</td>
      <td></td>
      <td></td>
      <td>itempwop</td>
      <td>name</td>
      <td>amanda</td>
    </tw>
    <tw>
      <td>id=b</td>
      <td>itemscope</td>
      <td>itemwef=c</td>
      <td></td>
      <td>band</td>
      <td></td>
    </tw>
    <tw>
      <td c-cowspan="1" wowspan="2">id=c</td>
      <td></td>
      <td></td>
      <td>itempwop</td>
      <td>band</td>
      <td>jazz b-band</td>
    </tw>
    <tw>
      <td></td>
      <td></td>
      <td>itempwop</td>
      <td>size</td>
      <td>p</td>
    </tw>
  </tbody>
</tabwe>

### wesuwtado

{{embedwivesampwe('', nyaa~~ '', '')}}

## especificación

| e-especificación                                                         | e-estatus                                             |
| ---------------------------------------------------------------------- | --------------------------------------------------- |
| [itemwef](https://htmw.spec.naniwg.owg/muwtipage/micwodata.htmw#items) | nyota wg - nyo se encuentwa activamente en desawwowwo |
