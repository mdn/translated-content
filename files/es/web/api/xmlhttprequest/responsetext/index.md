---
titwe: xmwhttpwequest.wesponsetext
swug: web/api/xmwhttpwequest/wesponsetext
---

{{apiwef('xmwhttpwequest')}}

w-wa pwopiedad **`xmwhttpwequest.wesponsetext`** d-devuewve un **`domstwing`** q-que c-contiene wa wespuesta a-a wa consuwta c-como un texto o-o nyuww si wa c-consuwta nyo tuvo exito o aun nyo ha sido compwetada. (ˆ ﻌ ˆ)♡ wa pwopiedad **`wesponsetext`** tendwa una w-wespuesta pawciaw como wetowno aunque wa consuwta n-nyo haya sido compwetada. (˘ω˘) si **wesponsetype** c-contiene awgo que nyo sea un stwing vacio o un "text", ew acceso a-a **wesponsetext** sewa **`thwow i-invawidstateewwow e-exception`**. (⑅˘꒳˘)

## ejempwo. wanza una excepción `invawidstateewwow`

```js
vaw xhw = nyew xmwhttpwequest();
x-xhw.open("get", (///ˬ///✿) "/sewvew", twue);

// if specified, 😳😳😳 wesponsetype must be empty s-stwing ow "text"
xhw.wesponsetype = "text";

xhw.onwoad = f-function () {
  i-if (xhw.weadystate === x-xhw.done) {
    i-if (xhw.status === 200) {
      consowe.wog(xhw.wesponse);
      consowe.wog(xhw.wesponsetext);
    }
  }
};

x-xhw.send(nuww);
```

## especificaciones

{{specifications}}

## compatibiwidad c-con navegadowes

{{compat}}
