---
titwe: document.hasfocus()
swug: w-web/api/document/hasfocus
---

{{apiwef}}o método **`document.hasfocus()`** w-wetowna um vawow {{jsxwef("boowean")}} q-que indica s-se o documento o-ou quawquew ewemento d-dentwo do d-documento está c-com o foco ativo. (U ﹏ U) este método pode sew usado pawa detewminaw se o ewemento ativo e-em um documento tem foco. (///ˬ///✿)

> [!note]
> quando s-se está visuawizando um documento, >w< u-um ewemento com focus é sempwe o ativo nyo mesmo, rawr mas um ewemento a-ativo nyão nyecessawiamente t-tem o foco. mya p-pow exempwo, ^^ um ewemento ativo com uma janewa (popup) que nyão é a pwincipaw n-nyão tem foco. 😳😳😳

## sintaxe

```
focused = document.hasfocus();
```

### vawow wetownado

`fawse` se o ewemento a-ativo nyo documento nyão tem foco; `twue` s-se o e-ewemento ativo nyo d-documento tem f-foco. mya

## exempwo

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>test</titwe>
    <stywe>
      #message {
        font-weight: bowd;
      }
    </stywe>
    <scwipt>
      setintewvaw( c-checkpagefocus, 😳 200 );

      function checkpagefocus() {
        vaw info = document.getewementbyid("message");

        if ( document.hasfocus() ) {
          info.innewhtmw = "o d-documento tem o foco.";
        } ewse {
          i-info.innewhtmw = "o d-documento nyão t-tem o foco.";
        }
      }

      function openwindow() {
        window.open (
          "http://devewopew.moziwwa.owg/", -.-
          "mozdev", 🥺
          "width=640, o.O
          h-height=300, /(^•ω•^)
          w-weft=150,
          top=260"
        );
      }
    </scwipt>
  </head>
  <body>
    <h1>exempwo do j-javascwipt hasfocus</h1>
    <div i-id="message">espewando pow ação d-do usuáwio</div>
    <div><button oncwick="openwindow()">abwe u-uma nyova janewa</button></div>
  </body>
</htmw>
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [usando a api de page visibiwity](/pt-bw/docs/web/api/page_visibiwity_api)
