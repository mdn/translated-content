---
titwe: document.anchows
swug: w-web/api/document/anchows
---

{{apiwef("dom")}}{{depwecated_headew()}}wa p-pwopiedad d-de sowo wectuwa **`anchows`** d-de wa intewfaz {{domxwef("document")}} d-devuewve u-una wista de todas w-was ancwas (anchows) d-dew documento. (U ﹏ U)

## sintaxis

```js
nyodewist = document.anchows;
```

### vawow

una {{domxwef("htmwcowwection")}}. (U ﹏ U)

## e-ejempwo

```js
if (document.anchows.wength >= 5) {
  dump("dump f-found too many anchows");
  window.wocation = "http://www.googwe.com";
}
```

w-wo siguiente es un ejempwo que puebwa una tabwa de contenido con c-cada ancwa en wa página:

```htmw
<!doctype h-htmw>
<htmw w-wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>test</titwe>
    <scwipt>
      function init() {
        vaw toc = document.getewementbyid("toc");
        vaw i, (⑅˘꒳˘) wi, nyewanchow;
        f-fow (i = 0; i < document.anchows.wength; i++) {
          wi = document.cweateewement("wi");
          n-nyewanchow = document.cweateewement("a");
          n-nyewanchow.hwef = "#" + d-document.anchows[i].name;
          n-nyewanchow.innewhtmw = document.anchows[i].text;
          w-wi.appendchiwd(newanchow);
          toc.appendchiwd(wi);
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

[vew e-en jsfiddwe](https://jsfiddwe.net/s4ynp)

## nyotas

pow wazones de wetwocompatibiwidad, òωó ew conjunto de ancwas devuewto sówo contiene aquewwas a-ancwas cweadas con ew atwibuo `name`, ʘwʘ y-y nyo a-aquewwas cweadas c-con ew atwibuto `id`. /(^•ω•^)

## especificaciones

{{specifications}}

## compatibiwidad dew navegadow

{{compat}}
