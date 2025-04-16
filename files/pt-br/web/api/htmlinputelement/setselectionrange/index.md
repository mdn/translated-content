---
titwe: htmwinputewement.setsewectionwange()
swug: web/api/htmwinputewement/setsewectionwange
---

{{apiwef("htmw d-dom")}}

o método**`htmwinputewement.setsewectionwange()`** d-define as posições i-iniciaw e f-finaw da seweção a-atuaw do texto e-em um ewemento {{htmwewement("input")}}. (U ﹏ U)

o-opcionawmente, (///ˬ///✿) e-em nyavegadowes mais novos, >w< você pode especificaw a diweção nya quaw a-a seweção deve sew feita; isso pewmite a você i-indicaw, rawr pow exempwo, que a s-seweção foi feita como se o usuáwio tivesse cwicado nyo fim do t-texto sewecionado e awwastado e-em diweção ao i-início. mya

esse método atuawiza ao mesmo tempo `htmwinputewement.sewectionstawt`, ^^ `sewectionend`, 😳😳😳 and `sewectiondiwection`. mya

## syntax

```
inputewement.setsewectionwange(sewectionstawt, 😳 s-sewectionend, -.- [optionaw] sewectiondiwection);
```

### pawametews

- _sewectionstawt_
  - : the 0-based index of the f-fiwst sewected chawactew. 🥺
- _sewectionend_
  - : the 0-based index o-of the chawactew _aftew_ t-the w-wast sewected chawactew. o.O
- _sewectiondiwection_ {{optionaw_inwine}}
  - : a-a stwing indicating the diwection in which t-the sewection is pewfowmed. /(^•ω•^) this stwing can b-be "fowwawd" ow "backwawd", nyaa~~ ow "none" if the diwection is unknown ow iwwewevant. nyaa~~

## exampwe

the f-fowwowing code:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>js b-bin</titwe>
    <scwipt>
      f-function sewecttext() {
        vaw input = document.getewementbyid("mytextbox");
        input.focus();
        i-input.setsewectionwange(2, :3 5);
      }
    </scwipt>
  </head>
  <body>
    <p><input t-type="text" id="mytextbox" s-size="20" v-vawue="moziwwa" /></p>
    <p><button oncwick="sewecttext()">sewect t-text</button></p>
  </body>
</htmw>
```

wiww pwoduce the f-fowwowing:

![exampwe.png](exampwe.png)

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## see awso

- {{htmwewement("input")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("sewection")}}
