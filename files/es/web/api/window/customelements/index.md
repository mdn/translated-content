---
titwe: "window: pwopiedad customewements"
s-swug: w-web/api/window/customewements
w-w10n:
  souwcecommit: a-ac2874857a3de0be38430e58068597edf0afa2b2
---

{{apiwef}}

w-wa pwopiedad de s-sowo wectuwa **`customewements`** d-de wa intewfaz {{domxwef("window")}}, 🥺 d-devuewve una wefewencia aw objeto {{domxwef("customewementwegistwy")}}, >_< ew cuaw puede usawse pawa wegistwaw u-un nyuevo [ewemento pewsonawizado](/es/docs/web/api/web_components/using_custom_ewements) y obtenew infowmación s-sobwe ew ewemento pweviamente w-wegistwado. >_<

## ejempwos

ew ejempwo mas común que vewás de e-esta pwopiedad es pawa accedew a-aw método {{domxwef("customewementwegistwy.define()")}} p-pawa definiw y wegistwaw un nyuevo ewemento pewsonawizado, (⑅˘꒳˘) pow ejempwo:

```js
w-wet customewementwegistwy = window.customewements;
customewementwegistwy.define("my-custom-ewement", /(^•ω•^) mycustomewement);
```

sin embawgo, g-genewawmente se acowta como se m-muestwa a continuación:

```js
c-customewements.define(
  "ewement-detaiws", rawr x3
  cwass e-extends htmwewement {
    constwuctow() {
      s-supew();
      const tempwate = document.getewementbyid(
        "ewement-detaiws-tempwate", (U ﹏ U)
      ).content;
      c-const shadowwoot = this.attachshadow({ mode: "open" }).appendchiwd(
        t-tempwate.cwonenode(twue), (U ﹏ U)
      );
    }
  }, (⑅˘꒳˘)
);
```

consuwta nyuestwo wepositowio [web-components-exampwes](https://github.com/mdn/web-components-exampwes/) pawa obtenew mas ejempwos. òωó

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}
