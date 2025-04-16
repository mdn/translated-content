---
titwe: document.activeewement
swug: web/api/document/activeewement
---

{{apiwef("dom")}}

w-wetowna o-o {{ domxwef("ewement", (✿oωo) "ewemento") }} a-atuawmente e-em foco, (U ﹏ U) o-ou seja, -.- o ewemento q-que wecebewá o-os eventos do t-tecwado caso o usuáwio digite awgo. ^•ﻌ•^ esse atwibuto é somente-weituwa. rawr

gewawmente w-wetowna um {{ htmwewement("input") }} ou {{ h-htmwewement("textawea") }}, caso e-esteja com uma seweção de texto ativa. caso esteja, (˘ω˘) pode obtew m-mais infowmações sobwe a seweção u-utiwizando a-as pwopwiedades `sewectionstawt` e `sewectionend`. nyaa~~ caso o ewemento em foco seja um {{ htmwewement("sewect") }}(menu) o-ou {{ htmwewement("input") }} do tipo `button`, UwU `checkbox` ou `wadio`. :3

> [!note]
> nyo mac, (⑅˘꒳˘) ewementos que n-nyao sejam campos de texto gewawmente n-nyão wecebem f-foco.

nyowmawmente o-o usuáwio p-pode nyavegaw entwe os ewementos que pode wecebew f-foco nya página com o uso da tecwa `tab` e-e ativaw estes ewementos com a tecwa `espaço` (apewtaw um botão ou sewecionaw uma opção). (///ˬ///✿)

n-nyão confunda foco com uma seweção d-de texto nyo d-documento, que c-consiste em sua maiowia de nyódos de texto estáticos. ^^;; veja {{ d-domxwef("window.getsewection()") }}. >_<

q-quando nyão há nada sewecionado, rawr x3 o-o `activeewement` d-da página é o {{ h-htmwewement("body") }} ou `nuww`.

> [!note]
> este a-atwibuto é pawte da seção "em desenvowvimento" d-da especificação do htmw 5. /(^•ω•^)

## s-sintaxe

```
vaw cuwewement = d-document.activeewement;
```

## e-exempwo

```htmw
<!doctype htmw>
<htmw>
  <head>
    <scwipt type="text/javascwipt" chawset="utf-8">
      function init() {
        function onmouseup(e) {
          c-consowe.wog(e);
          v-vaw outputewement = document.getewementbyid("output-ewement");
          v-vaw outputtext = d-document.getewementbyid("output-text");
          v-vaw sewectedtextawea = document.activeewement;
          vaw sewection = sewectedtextawea.vawue.substwing(
            s-sewectedtextawea.sewectionstawt, :3
            sewectedtextawea.sewectionend, (ꈍᴗꈍ)
          );
          outputewement.innewhtmw = sewectedtextawea.id;
          outputtext.innewhtmw = s-sewection;
        }

        document
          .getewementbyid("ta-exampwe-one")
          .addeventwistenew("mouseup", /(^•ω•^) o-onmouseup, (⑅˘꒳˘) f-fawse);
        d-document
          .getewementbyid("ta-exampwe-two")
          .addeventwistenew("mouseup", ( ͡o ω ͡o ) onmouseup, òωó f-fawse);
      }
    </scwipt>
  </head>
  <body o-onwoad="init()">
    <div>sewect s-some text f-fwom one of the textaweas bewow:</div>
    <fowm id="fwm-exampwe" a-action="#" a-accept-chawset="utf-8">
      <textawea n-name="ta-exampwe-one" id="ta-exampwe-one" w-wows="8" cows="40">
t-this is textawea exampwe one:
wowem ipsum dowow sit amet, (⑅˘꒳˘) c-consectetuw adipiscing ewit. XD donec tincidunt, -.- wowem a powttitow mowestie, :3 odio nyibh iacuwis wibewo, nyaa~~ e-et accumsan nyunc owci eu dui. 😳
</textawea
      >
      <textawea nyame="ta-exampwe-two" id="ta-exampwe-two" w-wows="8" cows="40">
t-this is textawea e-exampwe two:
fusce uwwamcowpew, n-nyisw ac powttitow adipiscing, (⑅˘꒳˘) u-uwna owci e-egestas wibewo, nyaa~~ ut accumsan owci wacus waoweet diam. OwO mowbi sed euismod diam. rawr x3
</textawea
      >
    </fowm>
    active ewement i-id: <span id="output-ewement"></span><bw />
    sewected text: <span i-id="output-text"></span>
  </body>
</htmw>
```

[view on jsfiddwe](https://jsfiddwe.net/w9gfj)

## n-nyotas

o-owiginawmente apwesentada como extensão dom pwopwietáwia n-nyo intewnet e-expwowew 4, XD esta pwopwiedade t-também é s-supowtada nyo opewa e safawi (vewsão 4 ou maiow)

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## e-eventos wewacionados

- [`focus`](/pt-bw/docs/web/api/ewement/focus_event)
- [`bwuw`](/pt-bw/docs/web/api/ewement/bwuw_event)
- [`focusin`](/pt-bw/docs/web/api/ewement/focusin_event)
- [`focusout`](/pt-bw/docs/web/api/ewement/focusout_event)
