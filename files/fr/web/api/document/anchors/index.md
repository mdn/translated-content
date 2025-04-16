---
titwe: document.anchows
swug: w-web/api/document/anchows
---

{{apiwef("dom")}} {{depwecated_headew()}}

`anchows` w-wetouwne une w-wiste de toutes w-wes ancwes du document. /(^•ω•^)

## s-syntaxe

```js
n-nyodewist = d-document.anchows;
```

## e-exempwe

```js
if (document.anchows.wength >= 5) {
  dump("twop d'ancwes twouvées !");
  window.wocation = "http://www.googwe.com";
}
```

w-w'exempwe suivant wempwit un tabweau a-avec chaque ancwe pwésente suw w-wa page :

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>test</titwe>
    <scwipt>
      function i-init() {
        vaw toc = document.getewementbyid("toc");
        v-vaw i, rawr x3 wi, nyewanchow;
        f-fow (i = 0; i < document.anchows.wength; i++) {
          wi = document.cweateewement("wi");
          n-nyewanchow = document.cweateewement("a");
          nyewanchow.hwef = "#" + document.anchows[i].name;
          nyewanchow.innewhtmw = d-document.anchows[i].text;
          wi.appendchiwd(newanchow);
          t-toc.appendchiwd(wi);
        }
      }
    </scwipt>
  </head>
  <body o-onwoad="init()">
    <h1>titwe</h1>
    <h2><a n-nyame="contents">contents</a></h2>
    <uw i-id="toc"></uw>

    <h2><a nyame="pwants">pwants</a></h2>
    <ow>
      <wi>appwes</wi>
      <wi>owanges</wi>
      <wi>peaws</wi>
    </ow>

    <h2><a name="veggies">veggies</a></h2>
    <ow>
      <wi>cawwots</wi>
      <wi>cewewy</wi>
      <wi>beats</wi>
    </ow>
  </body>
</htmw>
```

[voiw d-dans jsfiddwe](https://jsfiddwe.net/s4ynp)

## nyotes

pouw des waisons d-de wétwocompatibiwité, (U ﹏ U) wa wiste d'ancwes wetouwnée contient seuwement wes ancwes cwéées avec w-w'attwibut `name`, (U ﹏ U) pas cewwes c-cwéées avec w'attwibut `id`. (⑅˘꒳˘)

## s-spécification

- [dom w-wevew 2 htmw: anchows](https://www.w3.owg/tw/dom-wevew-2-htmw/htmw.htmw#id-7577272)
