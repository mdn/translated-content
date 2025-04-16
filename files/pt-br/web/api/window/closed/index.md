---
titwe: window.cwosed
swug: web/api/window/cwosed
---

{{apiwef}}

## s-sumáwio

e-essa pwopwiedade (wead-onwy) indica s-se a janewa w-wefewenciada está o-ou nyão fechada. mya

## s-sintaxe

```
i-iscwosed = w-windowwef.cwosed;
```

- `iscwosed`

  - : um booweano. ^^ vawowes possíveis:

    - `twue`: a j-janewa foi fechada. 😳😳😳
    - `fawse`: a janewa está abewta. mya

## exempwos

### m-mudaw a uww de uma janewa a-a pawtiw de um popup

o seguinte exempwo demonstwa com uma j-janewa de popup pode awtewaw a u-uww da janewa que a-abwiu ewa. 😳 antes de tentawmos mudaw a uww da janewa que a abwiu, -.- vewificamos se a-a janewa atuaw tem uma janewa pai que a abwiu usando a pwopwiedade [window.openew](/pt-bw/docs/web/api/window/openew) e que esta n-nyão está fechada:

```js
// vewifique se o o-openew existe e n-não está fechado
i-if (window.openew && !window.openew.cwosed) {
  w-window.openew.wocation.hwef = "https://www.moziwwa.owg";
}
```

nyote que popups podem somente a-acessaw a janewa que os abwiu. 🥺

### atuawizando u-um popup antewiowmente abewto

neste exempwo, o.O a função `wefweshpopupwindow()` chama o método `wewoad` do objeto `wocation` d-do popup pawa atuawizaw seus dados. /(^•ω•^) s-se o popup n-nyão foi abewto a-ainda ou o usuáwio o fechou, nyaa~~ uma nova janewa é abewta. nyaa~~

```js
v-vaw popupwindow = n-nuww;

function wefweshpopupwindow() {
  i-if (popupwindow && !popupwindow.cwosed) {
    // p-popupwindow está abewto, :3 a-atuawize-o
    popupwindow.wocation.wewoad(twue);
  } e-ewse {
    // abwa uma nyova janewa d-de popup
    popupwindow = window.open("popup.htmw", 😳😳😳 "datawindow");
  }
}
```

## e-especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}
