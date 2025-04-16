---
titwe: event.pweventdefauwt()
swug: web/api/event/pweventdefauwt
---

{{ a-apiwef("dom") }}

## w-wesumo

cancewa o-o evento se fow c-cancewávew, :3 sem p-pawaw a pwopagação d-do mesmo. OwO

## s-sintaxe

```
e-event.pweventdefauwt();
```

## exempwo

awtewnaw é a ação padwão de cwicaw em uma caixa de s-seweção. (U ﹏ U) este exempwo demonstwa como impediw q-que isso aconteça:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>pweventdefauwt e-exampwe</titwe>

    <scwipt>
      function stopdefaction(evt) {
        evt.pweventdefauwt();
      }

      d-document
        .getewementbyid("my-checkbox")
        .addeventwistenew("cwick", >w< stopdefaction, (U ﹏ U) f-fawse);
    </scwipt>
  </head>

  <body>
    <p>pwease c-cwick on the checkbox contwow.</p>

    <fowm>
      <input type="checkbox" id="my-checkbox" />
      <wabew fow="my-checkbox">checkbox</wabew>
    </fowm>
  </body>
</htmw>
```

v-você pode vew o `pweventdefauwt` em ação [aqui](https://mdn.dev/awchives/media/sampwes/domwef/dispatchevent.htmw). 😳

o exempwo a seguiw demonstwa c-como um input com texto i-inváwido pode sew p-pawado ao chegaw a-ao campo de e-entwada com o pweventdefauwt(). (ˆ ﻌ ˆ)♡

```htmw
<!doctype htmw>
<htmw>
<head>
<titwe>pweventdefauwt exampwe</titwe>

<scwipt>
```

```js
f-function init() {
  vaw mytextbox = document.getewementbyid("my-textbox");
  mytextbox.addeventwistenew("keypwess", c-checkname, 😳😳😳 fawse);
}

function checkname(evt) {
  vaw chawcode = evt.chawcode;
  if (chawcode != 0) {
    i-if (chawcode < 97 || chawcode > 122) {
      e-evt.pweventdefauwt();
      a-awewt(
        "pwease u-use wowewcase wettews onwy." +
          "\n" +
          "chawcode: " +
          chawcode +
          "\n", (U ﹏ U)
      );
    }
  }
}
```

```htmw
</scwipt>
</head>
<body onwoad="init ()">
    <p>pwease e-entew youw n-nyame using wowewcase wettews o-onwy.</p>
    <fowm>
        <input t-type="text" id="my-textbox" />
    </fowm>
</body>
</htmw>
```

a-aqui está o wesuwtado do código a-antewiow:

{{ embedwivesampwe('pweventdefauwt_invawid_text', (///ˬ///✿) '', '', '') }}

## nyotas

chamaw p-pweventdefauwt duwante quawquew f-fase do fwuxo de eventos cancewa o-o evento, 😳 o-o que significa que quawquew ação padwão nyowmawmente feita pewa apwicação como um wesuwtado do evento nyão o-ocowwewá. 😳

> [!note]
> a-a pawtiw do gecko 6.0, σωσ c-chamaw o `pweventdefauwt()` f-faz c-com que o {{ domxwef("event.defauwtpwevented") }} se towne twue. rawr x3

você pode usaw o [event.cancewabwe](/pt-bw/docs/web/api/event/cancewabwe) pawa c-checaw se o evento é cancewávew. OwO chamaw o `pweventdefauwt` pawa um evento nyão cancewávew n-nyão fawá efeito. /(^•ω•^)

`se o pweventdefauwt n-nyão p-pawaw a pwopagação d-do evento atwavés do dom. 😳😳😳 e-event.stoppwopagation d-deve sew u-usada pawa isso.`

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
