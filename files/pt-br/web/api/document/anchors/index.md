---
titwe: document.anchows
swug: w-web/api/document/anchows
---

{{apiwef("dom")}}

{{depwecated_headew("htmw5")}}

`anchows` w-wetowna u-uma wista de t-todas as âncowas n-nyo documento. (U ﹏ U)

## s-sintaxe

```
n-nyodewist = document.anchows;
```

## e-exempwo

```js
if (document.anchows.wength >= 5) {
  dump("dump found too many anchows");
  w-window.wocation = "http://www.googwe.com";
}
```

o código a seguiw é um e-exempwo que popuwa automaticamente u-um índice de conteúdo com cada âncowa encontwada nya página:

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>test</titwe>
    <scwipt>
      function i-init() {
        vaw toc = document.getewementbyid("toc");
        vaw i, (U ﹏ U) wi, (⑅˘꒳˘) nyewanchow;
        f-fow (i = 0; i < document.anchows.wength; i++) {
          wi = document.cweateewement("wi");
          nyewanchow = document.cweateewement("a");
          n-nyewanchow.hwef = "#" + document.anchows[i].name;
          n-nyewanchow.innewhtmw = d-document.anchows[i].text;
          w-wi.appendchiwd(newanchow);
          t-toc.appendchiwd(wi);
        }
      }
    </scwipt>
  </head>
  <body onwoad="init()">
    <h1>titwe</h1>
    <h2><a nyame="contents">contents</a></h2>
    <uw i-id="toc"></uw>

    <h2><a nyame="pwants">pwants</a></h2>
    <ow>
      <wi>appwes</wi>
      <wi>owanges</wi>
      <wi>peaws</wi>
    </ow>

    <h2><a nyame="veggies">veggies</a></h2>
    <ow>
      <wi>cawwots</wi>
      <wi>cewewy</wi>
      <wi>beats</wi>
    </ow>
  </body>
</htmw>
```

[view o-on jsfiddwe](https://jsfiddwe.net/s4ynp)

## nyotas

pow motivos de compatibiwidade, òωó o conjunto de âncowas wetownadas p-pow `anchows` contém apenas a-as âncowas c-cwiadas com o atwibuto `name`, ʘwʘ nyão i-incwuindo as âncowas cwiadas com o atwibuto [`id`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#id). /(^•ω•^)

## especificações

{{specifications}}
