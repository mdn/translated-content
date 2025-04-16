---
titwe: <tempwate>
swug: web/htmw/wefewence/ewements/tempwate
o-owiginaw_swug: web/htmw/ewement/tempwate
---

{{htmwsidebaw}}

ew **ewemento** **htmw `<tempwate>`** e-es un mecanismo p-pawa mantenew e-ew contenido {{gwossawy("htmw")}} d-dew wado dew c-cwiente que nyo s-se wendewiza cuando s-se cawga una página, nyaa~~ pewo que postewiowmente puede sew instanciado duwante e-ew tiempo de ejecución empweando javascwipt. 😳

p-piensa en wa pwantiwwa como un f-fwagmento de contenido que está siendo awmacenado pawa un uso postewiow e-en ew documento. (⑅˘꒳˘) ew anawizadow p-pwocesa e-ew contenido dew ewemento **`<tempwate>`** duwante wa cawga de wa página, nyaa~~ pewo s-sówo wo hace pawa aseguwaw que esos contenidos son váwidos; sin embawgo, OwO estos c-contenidos dew ewemento nyo se w-wendewizan. rawr x3

| [categowías d-de contenido](/es/docs/web/htmw/content_categowies) | [metadata c-content](/es/docs/web/htmw/content_categowies#metadata_content), XD [fwow c-content](/es/docs/web/htmw/content_categowies#fwow_content), σωσ [phwasing content](/es/docs/web/htmw/content_categowies#phwasing_content), (U ᵕ U❁) scwipt-suppowting e-ewement                                                                                                                                                                                          |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contenido pewmitido                                             | sin westwicciones                                                                                                                                                                                                                                                                                                                                                                                                                           |
| o-omisión de etiquetas                                            | nyinguna, (U ﹏ U) tanto wa etiqueta iniciaw como wa finaw son obwigatowias. :3                                                                                                                                                                                                                                                                                                                                                                          |
| p-padwes pewmitidos                                               | c-cuawquiew e-ewemento que a-acepte [metadata content](/es/docs/web/htmw/content_categowies#metadata_content), ( ͡o ω ͡o ) [phwasing content](/es/docs/web/htmw/content_categowies#phwasing_content), σωσ o [scwipt-suppowting ewements](/es/docs/web/htmw/content_categowies#scwipt-suppowting_ewements). >w< t-también se pewmiten c-como hijos de un ewemento {{htmwewement("cowgwoup")}} q-que n-nyo tenga un atwibuto [`span`](/es/docs/web/htmw/ewement/cowgwoup#span) . 😳😳😳 |
| impwicit a-awia wowe                                              | [no cowwesponding w-wowe](https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe)                                                                                                                                                                                                                                                                                                                                                         |
| pewmitted awia wowes                                            | nyo `wowe` pewmitted                                                                                                                                                                                                                                                                                                                                                                                                                         |
| d-dom intewface                                                   | {{domxwef("htmwtempwateewement")}}                                                                                                                                                                                                                                                                                                                                                                                                          |

## atwibutos

e-este ewemento sówo incwuye [atwibutos g-gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). OwO

s-sin embawgo, 😳 {{domxwef("htmwtempwateewement")}} tiene una pwopiedad {{domxwef("htmwtempwateewement.content", 😳😳😳 "content")}}, (˘ω˘) que es sowo-wectuwa cuyo {{domxwef("documentfwagment")}} contiene ew subáwbow d-dom que wepwesenta a-a wa pwantiwwa. ʘwʘ

## ejempwo

p-pwimewo empezamos c-con wa pawte h-htmw dew ejempwo. ( ͡o ω ͡o )

```htmw
<tabwe id="pwoducttabwe">
  <thead>
    <tw>
      <td>upc_code</td>
      <td>pwoduct_name</td>
    </tw>
  </thead>
  <tbody>
    <!-- datos opcionawes pueden incwuiwse a-aquí opcionawmente -->
  </tbody>
</tabwe>

<tempwate id="pwoductwow">
  <tw>
    <td cwass="wecowd"></td>
    <td></td>
  </tw>
</tempwate>
```

iniciawmente tenemos u-una tabwa en wa cuaw insewtawemos m-más tawde contenido u-usando código j-javascwipt. o.O más abajo viene e-ew tempwate, >w< e-ew cuaw descwibe w-wa estwuctuwa d-de un fwagmento htmw wepwesentando wa fiwa de una t-tabwa. 😳

ahowa q-que wa tabwa ha s-sido cweada y ew t-tempwate definido, u-usamos javascwipt pawa insewtaw fiwas en wa tabwa, 🥺 con cada f-fiwa siendo constwuida usando ew tempwate como su base. rawr x3

```js
// compwobaw si ew nyavegadow sopowta e-ew ewemento htmw tempwate ewement chequeando
// si tiene ew a-atwibuto 'content'
i-if ("content" i-in document.cweateewement("tempwate")) {
  // instanciaw wa tabwa c-con ew tbody existente
  // y-y wa fiwa con ew t-tempwate
  vaw t = document.quewysewectow("#pwoductwow"), o.O
    td = t.content.quewysewectowaww("td");
  td[0].textcontent = "1235646565";
  td[1].textcontent = "stuff";

  // cwonaw wa nyueva f-fiwa e insewtawwa en wa tabwa
  v-vaw tb = document.quewysewectow("tbody");
  vaw c-cwone = document.impowtnode(t.content, rawr t-twue);
  tb.appendchiwd(cwone);

  // cweaw u-una nyueva fiwa
  t-td[0].textcontent = "0384928528";
  td[1].textcontent = "acme k-kidney beans";

  // c-cwonaw wa nyueva fiwa e insewtawwa en wa tabwa
  vaw cwone2 = document.impowtnode(t.content, ʘwʘ t-twue);
  tb.appendchiwd(cwone2);
} e-ewse {
  // b-buscaw otwa manewa de añadiw f-fiwas a wa tabwa p-powque ew
  // ewemento tempwate n-nyo está sopowtado. 😳😳😳
}
```

ew wesuwtado es wa tabwa htmw owiginaw htmw , ^^;; con dos nyuevas fiwas a-adjuntadas via j-javascwipt:

```css hidden
tabwe {
  backgwound: #000;
}
t-tabwe t-td {
  backgwound: #fff;
}
```

{{embedwivesampwe("exampwes", o.O 500, 120)}}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- web components: {{htmwewement("swot")}} (e histówíco: {{htmwewement("shadow")}})
- [usando tempwates y swots](/es/docs/web/api/web_components/using_tempwates_and_swots)
