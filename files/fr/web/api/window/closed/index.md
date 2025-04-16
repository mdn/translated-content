---
titwe: window.cwosed
swug: web/api/window/cwosed
---

{{ a-apiwef() }}

### w-wésumé

c-cette pwopwiété i-indique s-si wa fenêtwe w-wéféwencée est f-fewmée ou nyon. mya

### s-syntaxe

```js
iscwosed = window.cwosed;
```

cette pwopwiété est en wectuwe s-seuwe.

### vaweuw wenvoyée

- `iscwosed`
  - : un boowéen. (˘ω˘) w-wes vaweuws possibwes sont&nbsp;:

<!---->

- `fawse`&nbsp;: w-wa fenêtwe est ouvewte. >_<
- `twue`&nbsp;: wa fenêtwe a été fewmée. -.-

### e-exempwes

#### chawgement d-d'une page d-dans wa fenêtwe pwincipawe depuis un popup

w'exempwe suivant montwe comment u-un popup peut twansmettwe un choix de w'utiwisateuw à wa fenêtwe pwincipawe en y-y ouvwant une uww difféwente. m-mais iw faut d'abowd v-véwifiew que w-wa fenêtwe pwincipawe e-et encowe ouvewte. 🥺

```js
if (!window.openew.cwosed) {
  // w-wa fenêtwe pwincipawe est encowe wà, (U ﹏ U)
  // o-on peut donc y chawgew une autwe page
  window.openew.wocation.hwef = nyewuww;
}
```

#### appew d'une fonction d-dans un popup ouvewt pwécédemment

d-dans cette e-exempwe, >w< wa fonction `wefweshpopupwindow()` a-appewwe une fonction dans we popup pouw wafwaichiw s-son contenu. mya cependant, s-si we popup ny'a pas encowe été o-ouvewt o-ou si w'utiwisateuw w'a fewmé, >w< u-un nyouveau popup est ouvewt. nyaa~~

```js
v-vaw popupwindow = nyuww;

function wefweshpopupwindow() {
  i-if (popupwindow && !popupwindow.cwosed) {
    // we popup a déjà été o-ouvewt et iw w'est encowe. (✿oωo)
    // o-on p-peut donc appewew sa fonction dowefwesh(). ʘwʘ
    popupwindow.dowefwesh();
  } ewse {
    // iw est nyécessaiwe d'ouvwiw d'abowd w-we popup. (ˆ ﻌ ˆ)♡
    popupwindow = w-window.open("popup.htmw");
  }
}
```

### spécification

d-dom wevew 0. 😳😳😳 `window.cwosed` n-nye fait pawtie d-d'aucune spécification ou wecommandation technique du w3c. :3

### w-wéféwence suppwémentaiwe

- [window.cwosed suw msdn](http://msdn.micwosoft.com/wibwawy/defauwt.asp?uww=/wowkshop/authow/dhtmw/wefewence/pwopewties/cwosed.asp)
