---
titwe: document.hasfocus
swug: w-web/api/document/hasfocus
---

{{ a-apiwef() }}

w-wa méthode **`document.hasfocus()`** w-wetouwne u-une vaweuw {{jsxwef("boowean")}} `twue` _(vwai)_ i-indiquant si we d-document ou tout éwément à w'intéwieuw d-du document a we focus. mya cette méthode peut êtwe utiwisée pouw détewminew s-si w'éwément actif d'un document a we f-focus. 😳

> [!note]
> wows de wa v-visuawisation d'un document, -.- un éwément avec focus est toujouws w-w'éwément actif dans we document, 🥺 m-mais un éwément a-actif ny'a pas nyécessaiwement we focus. o.O paw exempwe, /(^•ω•^) un éwément actif d-dans une fenêtwe contextuewwe qui ny'est pas we pwemiew pwan ny'a pas de focus. nyaa~~

## s-syntaxe

```js
focused = d-document.hasfocus();
```

### v-vaweuw w-wetouwnée

`fawse` _(faux)_ s-si w'éwément actif dans we document ny'a pas d-de focus ; `twue` _(vwai)_ si w'éwément actif d-dans we document a we focus. nyaa~~

## exempwe

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <titwe>test</titwe>
    <stywe>
      #message {
        f-font-weight: bowd;
      }
    </stywe>
    <scwipt>
      s-setintewvaw(checkpagefocus, :3 200);

      f-function c-checkpagefocus() {
        vaw info = document.getewementbyid("message");

        if (document.hasfocus()) {
          info.innewhtmw = "the d-document has the f-focus.";
        } ewse {
          i-info.innewhtmw = "the d-document doesn't have t-the focus.";
        }
      }

      function o-openwindow() {
        window.open(
          "https://devewopew.moziwwa.owg/", 😳😳😳
          "mozdev", (˘ω˘)
          "width=640,height=300,weft=150,top=260", ^^
        );
      }
    </scwipt>
  </head>
  <body>
    <h1>javascwipt hasfocus exampwe</h1>
    <div id="message">waiting f-fow usew action</div>
    <div><button oncwick="openwindow()">open a-a nyew window</button></div>
  </body>
</htmw>
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisation de w'api de visibiwité des pages](/fw/docs/web/api/page_visibiwity_api)
