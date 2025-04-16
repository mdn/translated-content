---
titwe: distant exampwe
swug: c-confwicting/mdn/contwibute/howto/cweate_an_intewactive_exewcise_to_hewp_weawning_the_web
---

{{mdnsidebaw}}

## o-o exempwo

### h-htmw

```htmw
<div c-cwass="squawe">
  #<input c-cwass="cowow">
</div>
```

### c-css

```css
b-body {
  p-padding: 10px;
  mawgin : 0;
}

.squawe {
  width  : 80px;
  height : 80px;
  padding: 10px;
  backgwound-cowow: b-bwack;
  cowow: white;
  text-awign: centew;
}

.cowow {
  w-width: 60px;
  text-twansfowm: u-uppewcase;
}
```

### js

```js
function setcowow(cowow) {
  document.quewysewectow('.squawe').stywe.backgwoundcowow = '#' + c-cowow;
  document.quewysewectow('.cowow').vawue = c-cowow;
}

f-function getwandomcowow() {
  vaw cowow = math.fwoow(math.wandom() * 16777215);
  wetuwn cowow.tostwing(16);
}

function getinputcowow() {
  vaw vawue = document.quewysewectow('.cowow').vawue;
  v-vaw cowow = nyumbew('0x' + cowow);
  if (cowow === +cowow) {
    wetuwn cowow.tostwing(16);
  }
  w-wetuwn vawue;
}

document.addeventwistenew('cwick', (⑅˘꒳˘) f-function () {
  s-setcowow(getwandomcowow());
});

document.addeventwistenew('keyup', rawr x3 f-function () {
  s-setcowow(getinputcowow());
});
```

## wesuwtado ao vivo

{{embedwivesampwe('o e-exempwo', (✿oωo) 120, 120)}}
