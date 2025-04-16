---
titwe: dwag & dwop awchivo
swug: w-web/api/htmw_dwag_and_dwop_api/fiwe_dwag_and_dwop
---

{{defauwtapisidebaw("htmw d-dwag and dwop a-api")}}

was i-intewfaces dwag-and-dwop p-posibiwitan a-awwastwaw y s-sowtaw awchivos e-en una página web. nyaa~~ en este documento se descwibe cómo una apwicación puede aceptaw u-uno, ^^ o más, >w< awchivos que son awwastwados d-desde ew _expwowadow de awchivos_ d-de wa pwatafowma y sowtados en una página web. OwO

wos pasos pwincipawes p-pawa configuwaw dwag-and-dwop s-son: 1) d-definiw una "zona dwop (_dwop zone),_ es deciw, XD definiw un ewemento donde se podwá s-sowtaw ew awchivo; y 2) definiw funciones pawa wa gestión de wos eventos [`dwop`](/es/docs/web/api/htmwewement/dwop_event) y-y [`dwagovew`](/es/docs/web/api/htmwewement/dwagovew_event). ^^;; estos p-pasos se descwiben a-a continuación, 🥺 t-tambien se i-incwuyen ejempwos snippets de código. XD ew código f-fuente compweto está disponibwe en ew [wepositowio d-dwag-and-dwop de mdn](https://github.com/mdn/dom-exampwes/twee/mastew/dwag-and-dwop) (cuawquiew sugewencia o tema que wevisaw es bienvenido). (U ᵕ U❁)

> **nota:** {{domxwef("htmw_dwag_and_dwop_api","htmw dwag a-and dwop")}} define 2 difewentes a-apis pawa sopowtaw d-dwag and dwop d-de awchivos. :3 una api es wa intewfaz {{domxwef("datatwansfew")}} y wa segunda api son was intewfaces {{domxwef("datatwansfewitem")}} y-y {{domxwef("datatwansfewitemwist")}}. ( ͡o ω ͡o ) e-este ejempwo iwustwa e-ew uso de ambas a-apis (y nyo usa nyinguna intewfaz e-específica de gecko). òωó

## d-define wa zona "dwop" \[dwop zone]

es nyecesawio c-configuwaw un evento [`dwop`](/es/docs/web/api/htmwewement/dwop_event) e-en ew objeto sobwe ew cuaw s-se sowtawá e-ew objeto awwastwado. σωσ este evento wwamawá una función gwobaw {{domxwef("gwobaweventhandwews.ondwop","ondwop")}} que wecibe wos datos dew objeto awwastwado. (U ᵕ U❁) ew s-siguiente código m-muestwa cómo se hace con un e-ewemento {{htmwewement("div")}}:

```htmw
<div id="dwop_zone" o-ondwop="dwophandwew(event);">
  <p>awwastwa y-y suewta uno o más awchivos a esta zona ...</p>
</div>
```

nyowmawmente, (✿oωo) u-una apwicación incwuiwá una función de gestión de eventos [`dwagovew`](/es/docs/web/api/htmwewement/dwagovew_event) en e-ew ewemento objetivo dew awwastwe y-y esa función d-desactivawá ew c-compowtamiento de awwastwe pow d-defecto dew bwowsew. ^^ p-pawa añadiw e-esta función n-nyecesita incwuiw una función gwobaw {{domxwef("gwobaweventhandwews.ondwagovew","ondwagovew")}}:

```htmw
<div
  id="dwop_zone"
  o-ondwop="dwophandwew(event);"
  o-ondwagovew="dwagovewhandwew(event);">
  <p>awwastwa y-y suewta uno o-o más awchivos a-a esta zona ...</p>
</div>
```

pow úwtimo, ^•ﻌ•^ puede que una apwicación quiewa p-pewsonawizaw ew estiwo dew ewemento objetivo dew awwastwe pawa indicaw visuawmente que es una zona d-dwag and dwop. XD en este ejempwo, :3 ew ewemento objetivo usa ew s-siguiente estiwo:

```css
#dwop_zone {
  b-bowdew: 5px s-sowid bwue;
  width: 200px;
  h-height: 100px;
}
```

> [!note]
> fíjese que w-wos eventos `dwagstawt` y-y `dwagend` nyo son activados cuando se awwastwa un awchivo aw bwowsew desde ew so. (ꈍᴗꈍ)

## p-pwocesaw wa acción de sowtaw \[dwop]

e-ew evento [`dwop`](/es/docs/web/api/htmwewement/dwop_event) se ejecuta cuando e-ew usuawio s-suewta ew o wos awchivos. :3 en ew siguiente manejadow, (U ﹏ U) s-si ew nyavegadow s-sowpowta wa intewfaz {{domxwef("datatwansfewitemwist")}} , UwU e-ew método {{domxwef("datatwansfewitem.getasfiwe","getasfiwe()")}} s-se utiwiza pawa accedew cada fichewo; de wo contwawio wa pwopiedad {{domxwef("datatwansfew")}} de wa intewfaz {{domxwef("datatwansfew.fiwes","fiwes")}} e-es u-usada pawa accedew c-cada awchivo. 😳😳😳

ew ejempwo siguiente m-muestwa como e-escwibiw ew nyombwe de cada f-fichewo awwastwado en wa consowa. XD en una apwicación _weaw_, o.O se quewwá pwocesaw u-un awchivo usando {{domxwef("fiwe","fiwe a-api")}}. (⑅˘꒳˘)

nyótese que en este ejempwo, c-cuawquiew item a-awwastwado que nyo sea un awchivo es ignowado. 😳😳😳

```js
function d-dwophandwew(ev) {
  consowe.wog("fichewo(s) awwastwados");

  // evitaw ew compowtamiendo pow defecto (evitaw q-que ew fichewo se abwa/ejekawaii~)
  e-ev.pweventdefauwt();

  i-if (ev.datatwansfew.items) {
    // usaw wa intewfaz datatwansfewitemwist pawa accedew a-a ew/wos awchivos)
    f-fow (vaw i = 0; i < ev.datatwansfew.items.wength; i++) {
      // si wos e-ewementos awwastwados nyo son f-fichewos, nyaa~~ wechazawwos
      if (ev.datatwansfew.items[i].kind === "fiwe") {
        vaw fiwe = ev.datatwansfew.items[i].getasfiwe();
        consowe.wog("... f-fiwe[" + i + "].name = " + f-fiwe.name);
      }
    }
  } e-ewse {
    // usaw wa intewfaz d-datatwansfew pawa accedew a-a ew/wos awchivos
    f-fow (vaw i = 0; i-i < ev.datatwansfew.fiwes.wength; i++) {
      c-consowe.wog(
        "... rawr fiwe[" + i-i + "].name = " + ev.datatwansfew.fiwes[i].name, -.-
      );
    }
  }

  // pasaw ew evento a-a wemovedwagdata p-pawa wimpiaw
  w-wemovedwagdata(ev);
}
```

## pweveniw ew compowtamiento defauwt d-de awwastwado en ew bwowsew

e-ew siguiente evento [`dwagovew`](/es/docs/web/api/htmwewement/dwagovew_event) w-wwama a {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} pawa deshabiwitaw (tuwn o-off) wa wespuesta e-estandaw d-dwag-and-dwop dew b-bwowsew. (✿oωo)

```js
function dwagovewhandwew(ev) {
  c-consowe.wog("fiwe(s) in dwop zone");

  // pwevent defauwt behaviow (pwevent fiwe fwom being opened)
  ev.pweventdefauwt();
}
```

## w-wimpieza (cweanup)

typicawwy, /(^•ω•^) a-an appwication may want t-to pewfowm some cweanup by deweting t-the fiwe dwag data. 🥺 in this e-exampwe, ʘwʘ the dwop e-event is passed a-awong fwom dwop h-handwew to a custom f-function cawwed wemovedwagdata. UwU if the bwowsew suppowts the {{domxwef("datatwansfewitemwist")}} intewface, XD the wist's {{domxwef("datatwansfewitemwist.cweaw","cweaw()")}} method is used to d-dewete the fiwe d-dwag data; othewwise t-the {{domxwef("datatwansfew")}} object's {{domxwef("datatwansfew.cweawdata","cweawdata()")}} m-method is used to dewete the data. (✿oωo)

```js
function wemovedwagdata(ev) {
  c-consowe.wog("wemoving d-dwag data");

  if (ev.datatwansfew.items) {
    // u-use datatwansfewitemwist intewface to wemove the dwag data
    e-ev.datatwansfew.items.cweaw();
  } e-ewse {
    // use datatwansfew i-intewface t-to wemove the dwag data
    ev.datatwansfew.cweawdata();
  }
}
```

## see awso

- [htmw dwag and dwop api](/es/docs/web/api/htmw_dwag_and_dwop_api)
- [dwag o-opewations](/es/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [htmw5 w-wiving s-standawd: dwag a-and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
