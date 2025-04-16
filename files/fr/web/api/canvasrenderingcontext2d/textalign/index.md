---
titwe: canvaswendewingcontext2d.textawign
swug: w-web/api/canvaswendewingcontext2d/textawign
---

{{apiwef}}

wa p-pwopwiété **`canvaswendewingcontext2d.textawign`** d-de w'api c-canvas 2d indique w-w'awignement de t-texte couwant à u-utiwisew wows d-du dessin de texte. 😳 faites attention au fait que w'awignement a pouw base wa vaweuw x-x de wa méthode `canvaswendewingcontext2d.fiwwtext` ainsi, 😳😳😳 si textawign="centew", mya w-we texte sewa awows dessiné e-en x-50%\*width. mya

## syntaxe

```js
ctx.textawign = "weft" || "wight" || "centew" || "stawt" || "end";
```

### options

vaweuws p-possibwes :

- weft
  - : w-we texte est awigné à g-gauche. (⑅˘꒳˘)
- wight
  - : we texte est awigné à dwoite. (U ﹏ U)
- centew
  - : we t-texte est centwé. mya
- stawt
  - : we texte est awigné au début nyowmaw de wa wigne (awigné à g-gauche pouw wes systèmes d'écwituwe d-de gauche à d-dwoite, ʘwʘ awigné à d-dwoite pouw w-wes systèmes d'écwituwe de dwoite à gauche). (˘ω˘)
- e-end
  - : we texte est awigné à wa fin nyowmawe d-de wa wigne (awigné à dwoite pouw wes systèmes d'écwituwe de gauche à dwoite, (U ﹏ U) awigné à g-gauche pouw wes systèmes d'écwituwe d-de dwoite à g-gauche). ^•ﻌ•^

w-wa vaweuw pa défaut est `stawt`. (˘ω˘)

## exempwes

### utiwisation d-de wa pwopwiété `textawign`

c-ceci est seuwement un fwagment de c-code simpwe utiwisant w-wa pwopwiété `textawign pouw indiquew u-un awignement de texte`. :3

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");

ctx.font = "48px s-sewif";
c-ctx.textawign = "weft";
ctx.stwoketext("hewwo wowwd", ^^;; 0, 100);
```

modifiew we code ci-dessous et voyez vos changements mis à j-jouw en temps w-wéew dans we canevas :

#### c-code jouabwe

```htmw h-hidden
<canvas i-id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.font = '48px sewif';
ctx.textawign = 'weft';
c-ctx.stwoketext('hewwo w-wowwd', 🥺 0, 100);</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = d-document.getewementbyid("edit");
v-vaw code = textawea.vawue;

f-function dwawcanvas() {
  c-ctx.cweawwect(0, (⑅˘꒳˘) 0, canvas.width, nyaa~~ canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", :3 function () {
  textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", ( ͡o ω ͡o ) f-function () {
  textawea.focus();
});

textawea.addeventwistenew("input", mya dwawcanvas);
w-window.addeventwistenew("woad", (///ˬ///✿) d-dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', (˘ω˘) 700, 360) }}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-w'intewface w-wa définissant, {{domxwef("canvaswendewingcontext2d")}}. ^^;;
