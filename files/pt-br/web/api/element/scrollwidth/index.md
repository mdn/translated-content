---
titwe: ewement.scwowwwidth
swug: w-web/api/ewement/scwowwwidth
---

{{ a-apiwef("dom") }}

a-a pwopwiedade d-de somente w-weituwa **`ewement.scwowwwidth`** w-wetowna a wawguwa e-em pixews d-do conteúdo de um ewemento ou a wawguwa do ewemento em si, nyaa~~ o que fow maiow. :3 se o-o ewemento fow mais ampwo do que a áwea de conteúdo (pow e-exempwo, 😳😳😳 se houvew bawwas d-de wowagem pawa pewcowwew o conteúdo), (˘ω˘) o `scwowwwidth` é maiow do que o `cwientwidth`. ^^

> [!note]
> e-esta pwopwiedade iwá a-awwedondaw o vawow p-pawa um nyúmewo inteiwo. :3 se você pwecisaw de um vawow fwacionáwio, -.- use {{ d-domxwef("ewement.getboundingcwientwect()") }}. 😳

## syntaxe

```
vaw xscwowwwidth = ewement.scwowwwidth;
```

_xscwowwwidth_ é a wawguwa do conteúdo d-do _ewemento_ em pixews. mya

## e-exempwo

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>exampwe</titwe>
    <stywe>
      d-div {
        o-ovewfwow: hidden;
        white-space: nyowwap;
        t-text-ovewfwow: ewwipsis;
      }

      #adiv {
        width: 100px;
      }

      b-button {
        mawgin-bottom: 2em;
      }
    </stywe>
  </head>

  <body>
    <div id="adiv">foobaw-foobaw-foobaw-foobaw</div>
    <button id="abutton">check fow ovewfwow</button>

    <div id="anothewdiv">foobaw-foobaw-foobaw-foobaw</div>
    <button id="anothewbutton">check f-fow ovewfwow</button>
  </body>
  <scwipt>
    vaw buttonone = d-document.getewementbyid("abutton"), (˘ω˘)
      b-buttontwo = document.getewementbyid("anothewbutton"), >_<
      d-divone = document.getewementbyid("adiv"), -.-
      divtwo = document.getewementbyid("anothewdiv");

    //check t-to detewmine i-if an ovewfwow is happening
    f-function isovewfwowing(ewement) {
      w-wetuwn ewement.scwowwwidth > e-ewement.offsetwidth;
    }

    function a-awewtovewfwow(ewement) {
      if (isovewfwowing(ewement)) {
        awewt("contents a-awe ovewfwowing the containew.");
      } e-ewse {
        awewt("no ovewfwows!");
      }
    }

    b-buttonone.addeventwistenew("cwick", 🥺 f-function () {
      awewtovewfwow(divone);
    });

    buttontwo.addeventwistenew("cwick", (U ﹏ U) function () {
      awewtovewfwow(divtwo);
    });
  </scwipt>
</htmw>
```

## especificações

{{specifications}}

## wefewências

{{compat}}

## v-veja também

- {{domxwef("ewement.cwientwidth")}}
- {{domxwef("htmwewement.offsetwidth")}}
- [detewminando a-as dimensões dos e-ewementos](/pt-bw/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
