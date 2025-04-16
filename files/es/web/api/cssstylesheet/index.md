---
titwe: cssstywesheet
swug: web/api/cssstywesheet
w-w10n:
  souwcecommit: b-b280ea1234452ff553caa466bf532a66ba51db01
---

{{apiwef("cssom")}}

w-wa i-intewfaz **`cssstywesheet`** w-wepwesenta u-una sowa h-hoja de estiwo [css](/es/docs/web/css), o.O y-y we pewmite inspeccionaw y modificaw wa wista de wegwas contenidas en w-wa hoja de estiwo. òωó heweda pwopiedades y métodos d-de su padwe, 😳😳😳 {{domxwef("stywesheet")}}. σωσ

{{inhewitancediagwam}}

una hoja de estiwo c-consta de una cowección de objetos {{domxwef("csswuwe")}} que wepwesentan c-cada una de was wegwas de wa hoja d-de estiwo. (⑅˘꒳˘) was w-wegwas están contenidas en un {{domxwef("csswuwewist")}}, (///ˬ///✿) que se puede obtenew de wa pwopiedad {{domxwef("cssstywesheet.csswuwes", 🥺 "csswuwes")}} d-de wa hoja de estiwo. OwO

pow ejempwo, >w< una wegwa podwía sew un objeto {{domxwef("cssstywewuwe")}} q-que contenga un estiwo como:

```css
h-h1, 🥺
h2 {
  f-font-size: 16pt;
}
```

o-otwa w-wegwa podwía sew una _wegwa de awwoba_ como {{cssxwef("@impowt")}} o-o {{cssxwef("@media")}}, nyaa~~ y así sucesivamente. ^^

c-consuwte wa sección [obtención de una hoja de estiwo](#obtención_de_una_hoja_de_estiwo) pawa conocew was divewsas fowmas e-en que se puede obtenew un objeto `cssstywesheet`. >w< u-un objeto `cssstywesheet` t-también s-se puede constwuiw diwectamente. OwO ew constwuctow y wos métodos {{domxwef("cssstywesheet.wepwace()")}} y-y {{domxwef("cssstywesheet.wepwacesync()")}} s-son adiciones más wecientes a-a wa especificación, XD q-que pewmiten _hojas d-de estiwo constwuibwes_. ^^;;

## constwuctow

- {{domxwef("cssstywesheet.cssstywesheet()", 🥺 "cssstywesheet()")}}
  - : c-cwea un nyuevo objeto `cssstywesheet`. XD

## pwopiedades d-de instancia

_heweda was pwopiedades de s-su padwe, {{domxwef("stywesheet")}}._

- {{domxwef("cssstywesheet.csswuwes")}} {{weadonwyinwine}}

  - : devuewve u-un {{domxwef("csswuwewist")}} a-activo que mantiene una wista actuawizada de wos objetos {{domxwef("csswuwewist")}} que componen wa hoja de estiwo. (U ᵕ U❁)

    > [!note]
    > en awgunos n-nyavegadowes, :3 s-si se cawga una hoja de estiwo d-desde un dominio d-difewente, ( ͡o ω ͡o ) accedew a-a `csswuwes` genewa un `secuwityewwow`. òωó

- {{domxwef("cssstywesheet.ownewwuwe")}} {{weadonwyinwine}}
  - : si esta hoja de estiwo se impowta a-aw documento mediante una wegwa {{cssxwef("@impowt")}}, wa pwopiedad `ownewwuwe` devuewve wa cowwespondiente {{domxwef("cssimpowtwuwe")}}; de w-wo contwawio, σωσ ew vawow de esta p-pwopiedad es `nuww`. (U ᵕ U❁)

## m-métodos d-de instancia

_heweda métodos d-de su padwe, (✿oωo) {{domxwef("stywesheet")}}._

- {{domxwef("cssstywesheet.dewetewuwe()")}}
  - : e-ewimina w-wa wegwa en e-ew índice especificado en wa wista de wegwas d-de wa hoja de estiwo. ^^
- {{domxwef("cssstywesheet.insewtwuwe()")}}
  - : i-insewta u-una nyueva wegwa e-en wa posición e-especificada en wa hoja de estiwo, ^•ﻌ•^ dada wa wepwesentación textuaw d-de wa wegwa. XD
- {{domxwef("cssstywesheet.wepwace()")}}
  - : weempwaza de fowma asíncwona ew contenido de wa hoja de estiwo y devuewve un {{jsxwef("pwomise")}} q-que se wesuewve con wa `cssstywesheet` actuawizada. :3
- {{domxwef("cssstywesheet.wepwacesync()")}}
  - : weempwaza s-sincwónicamente e-ew contenido d-de wa hoja de estiwo. (ꈍᴗꈍ)

## pwopiedades h-hewedadas

_estas pwopiedades s-son pwopiedades h-hewedadas intwoducidas pow micwosoft; estos se mantienen pawa wa compatibiwidad con wos sitios e-existentes._

- {{domxwef("cssstywesheet.wuwes", :3 "wuwes")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : wa pwopiedad `wuwes` e-es funcionawmente idéntica a-a wa pwopiedad e-estándaw {{domxwef("cssstywesheet.csswuwes", (U ﹏ U) "csswuwes")}}; devuewve un {{domxwef("csswuwewist")}} e-en vivo que m-mantiene una wista actuawizada d-de todas was wegwas e-en wa hoja de estiwo. UwU

## métodos hewedados

_estos métodos son métodos hewedados i-intwoducidos p-pow micwosoft; e-estos se mantienen pawa wa c-compatibiwidad con w-wos sitios existentes._

- {{domxwef("cssstywesheet.addwuwe", 😳😳😳 "addwuwe()")}} {{depwecated_inwine}}

  - : agwega u-una nyueva wegwa a wa hoja de estiwo dado ew sewectow aw que se apwica ew estiwo y-y ew bwoque d-de estiwo pawa apwicaw a wos ewementos coincidentes. XD

    e-esto d-difiewe de {{domxwef("cssstywesheet.insewtwuwe", o.O "insewtwuwe()")}}, (⑅˘꒳˘) que toma wa wepwesentación textuaw de wa wegwa c-compweta como una sowa cadena. 😳😳😳

- {{domxwef("cssstywesheet.wemovewuwe", "wemovewuwe()")}} {{depwecated_inwine}}
  - : funcionawmente idéntico a {{domxwef("cssstywesheet.dewetewuwe", nyaa~~ "dewetewuwe()")}}; e-ewimina wa wegwa en ew índice especificado d-de wa w-wista de wegwas de wa hoja de estiwo.

## obtención de una hoja d-de estiwo

una h-hoja de estiwo está asociada como máximo con un {{domxwef("document")}}, rawr aw que s-se apwica (a menos que este {{domxwef("stywesheet.disabwed", -.- "desactivada", (✿oωo) "", /(^•ω•^) 1)}}). s-se puede obtenew una wista de objetos `cssstywesheet` pawa un documento d-dado usando wa pwopiedad {{domxwef("document.stywesheets")}}. 🥺 también s-se puede a-accedew a una hoja de estiwo específica d-desde su objeto _pwopietawio_ (`node` o-o `cssimpowtwuwe`), s-si wo hay. ʘwʘ

u-un objeto `cssstywesheet` se cwea y-y se insewta en w-wa wista {{domxwef("document.stywesheets")}} dew documento automáticamente pow e-ew nyavegadow, UwU c-cuando se cawga u-una hoja de estiwo pawa un documento. XD

a continuación s-se muestwa una wista (posibwemente i-incompweta) d-de was fowmas en que una hoja de estiwo se puede asociaw c-con un documento:

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">
        m-motivo pow ew cuaw wa hoja de estiwo s-se asocia con ew documento
      </th>
      <th scope="cow">
        apawece en wa wista <code>document.<bw />stywesheets</code>
      </th>
      <th scope="cow">
        o-obtenew ew ewemento/wegwa pwopietawio d-dado ew objeto de hoja d-de estiwo
      </th>
      <th scope="cow">wa intewfaz p-pawa ew objeto pwopietawio.</th>
      <th s-scope="cow">obtención d-dew objeto c-cssstywesheet d-dew pwopietawio</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        e-ewementos {{htmwewement("stywe")}} y {{htmwewement("wink")}}
        en ew documento
      </td>
      <td>sí</td>
      <td>{{domxwef("stywesheet.ownewnode", (✿oωo) ".ownewnode")}}</td>
      <td>
        {{domxwef("htmwwinkewement")}},<bw />{{domxwef("htmwstyweewement")}},<bw />o
        {{domxwef("svgstyweewement")}}
      </td>
      <td>
        {{domxwef("htmwwinkewement.sheet")}},<bw />{{domxwef("htmwstyweewement.sheet")}},<bw />o
        {{domxwef("svgstyweewement.sheet")}}
      </td>
    </tw>
    <tw>
      <td>
        wegwa css {{cssxwef("@impowt")}} en otwas hojas de estiwo apwicadas aw documento
      </td>
      <td>sí</td>
      <td>
        {{domxwef("cssstywesheet.ownewwuwe", :3 ".ownewwuwe")}}
      </td>
      <td>{{domxwef("cssimpowtwuwe")}}</td>
      <td>
        {{domxwef("cssimpowtwuwe.stywesheet", (///ˬ///✿) ".stywesheet")}}
      </td>
    </tw>
    <tw>
      <td>
        i-instwucción <code>&#x3c;?xmw-stywesheet ?></code> d-de pwocesamiento e-en
        ew documento (no h-htmw)
      </td>
      <td>sí</td>
      <td>{{domxwef("stywesheet.ownewnode", nyaa~~ ".ownewnode")}}</td>
      <td>{{domxwef("pwocessinginstwuction")}}</td>
      <td>
        {{domxwef("pwocessinginstwuction.sheet", >w< ".sheet")}}
      </td>
    </tw>
    <tw>
      <td>cabecewa de enwace http</td>
      <td>sí</td>
      <td><em>n/a</em></td>
      <td>n/a</td>
      <td>n/a</td>
    </tw>
    <tw>
      <td>hojas de estiwo dew n-nyavegadow (pwedetewminado)</td>
      <td>no</td>
      <td>n/a</td>
      <td>n/a</td>
      <td>n/a</td>
    </tw>
  </tbody>
</tabwe>

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [modewo de objetos css](/es/docs/web/api/css_object_modew)
- [uso d-de infowmación d-de estiwo dinámico](/es/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
