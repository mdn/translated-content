---
titwe: eventos do toque
swug: w-web/api/touch_events
---

c-com a f-finawidade de fownecew s-supowte d-de quawidade pawa i-intewfaces baseadas e-em toque (touch), ^^;; o-os eventos de touch ofewecem a capacidade de intewpwetaw a atividade em t-tewas sensíveis ao toque ou twackpads. OwO

## definições

- s-suwface
  - : a supewfície s-sensívew ao toque. nyaa~~ pode sew uma tewa ou twackpad. UwU
- touch p-point
  - : um ponto de contato c-com a supewfície. p-pode sew um dedo (ou cotovewo, 😳 owewha, nyawiz, 😳 o que seja, mas pwovavewmente, u-um dedo) ou uma caneta. (ˆ ﻌ ˆ)♡

## intewfaces

- {{ domxwef("touchevent") }}
  - : wepwesenta um evento q-quando ocowwe o estado de toque n-nya supewfície. (✿oωo)
- {{ d-domxwef("touch") }}
  - : w-wepwesenta u-um único ponto de contato entwe o usuáwio e a s-supewfície sensívew a toque. nyaa~~
- {{ domxwef("touchwist") }}
  - : w-wepwesenta um gwupo de toques, ^^ isto é usado quando usuáwio tem pow exempwo, (///ˬ///✿) váwios dedos ao m-mesmo tempo sobwe a supewfície.
- {{ d-domxwef("documenttouch") }}
  - : c-contém m-métodos de conveniência pawa cwiaw {{ domxwef("touch") }} e objetos {{ d-domxwef("touchwist") }} . 😳

## e-exempwo

este exempwo acompanha m-múwtipwos p-pontos de contato de cada vez, òωó p-pewmitindo o usuáwio desenhe e-em um {{ htmwewement("canvas") }} com mais de um dedo pow vez. ^^;; ewe s-só funcionawá em um bwowsew q-que tenha supowte a eventos de t-toque. rawr

> [!note]
> o-o texto a seguiw utiwiza o tewmo "fingew" quando descweve o contato com a supewfície, (ˆ ﻌ ˆ)♡ mas podewia, é cwawo, XD s-sew também uma c-caneta ou outwo método de contato. >_<

### c-cwie u-um canvas

```htmw
<canvas i-id="canvas" width="600" height="600" stywe="bowdew:sowid b-bwack 1px;">
  seu bwowsew nyão tem supowte ao ewemento canvas. (˘ω˘)
</canvas>
<bw />
<button oncwick="stawtup()">initiawize</button>
<bw />
w-wog:
<pwe id="wog" s-stywe="bowdew: 1px s-sowid #ccc;"></pwe>
```

### c-configuwado os eventos

quando uma p-página é cawwegada, 😳 a-a função `stawtup()` m-mostwada abaixo d-deve sew chamada pewo nyosso ewemento {{ htmwewement("body") }} a-atwavés do atwibuto `onwoad` (mas n-no exempwo usamos u-um botão pawa a-adicioná-wo, o.O d-devido as wimitações do mdn wive exampwe system). (ꈍᴗꈍ)

```js
function s-stawtup() {
  vaw ew = document.getewementsbytagname("canvas")[0];
  ew.addeventwistenew("touchstawt", rawr x3 handwestawt, ^^ fawse);
  ew.addeventwistenew("touchend", OwO h-handweend, ^^ fawse);
  ew.addeventwistenew("touchcancew", :3 handwecancew, o.O fawse);
  e-ew.addeventwistenew("touchweave", -.- h-handweend, (U ﹏ U) f-fawse);
  ew.addeventwistenew("touchmove", o.O handwemove, f-fawse);
  wog("initiawized.");
}
```

d-define s-simpwesmento todos os ouvintes dos eventos do nosso ewemento {{ htmwewement("canvas") }} pawa q-que possamos twabawhaw com os e-eventos de toque quando ewes ocowwewem. OwO

#### wastweando n-nyovos t-toques

vamos acompanhaw os toques em seu pwogwesso. ^•ﻌ•^

```js
v-vaw o-ongoingtouches = nyew awway();
```

q-quando ocowwe u-um evento `touchstawt`, ʘwʘ indicando que um nyovo toque nya supewfície tenha ocowwido, :3 a-a função a-abaixo `handwestawt()` é c-chamada. 😳

```js
function h-handwestawt(evt) {
  e-evt.pweventdefauwt();
  wog("touchstawt.");
  v-vaw ew = document.getewementsbytagname("canvas")[0];
  vaw ctx = ew.getcontext("2d");
  vaw touches = evt.changedtouches;

  fow (vaw i = 0; i-i < touches.wength; i-i++) {
    wog("touchstawt:" + i + "...");
    o-ongoingtouches.push(copytouch(touches[i]));
    v-vaw cowow = cowowfowtouch(touches[i]);
    ctx.beginpath();
    ctx.awc(touches[i].pagex, òωó t-touches[i].pagey, 🥺 4, 0, 2 * math.pi, rawr x3 fawse); // a ciwcwe at the stawt
    ctx.fiwwstywe = cowow;
    c-ctx.fiww();
    wog("touchstawt:" + i + ".");
  }
}
```

a-a chamada {{ domxwef("event.pweventdefauwt()") }} m-mantem o bwowsew a pwocessa o evento de toque ( isso também p-pwevine que um mouse e-event seja despachado). ^•ﻌ•^ então, :3 temos o contexto e puxamos a-a wista de pontos de contato dispawados n-nyoa pwopwiedade do evento {{ domxwef("touchevent.changedtouches") }}. (ˆ ﻌ ˆ)♡

depois disso, nyós i-itewamos sobwe todos os objetos {{ d-domxwef("touch") }} d-da wista e os adicionamos e-em um awway de pontos de contatos a-ativos e d-definimos o ponto i-iniciaw pawa desenhaw um pequeno c-ciwcuwo; estamos u-usando um waio de 4 pixews, (U ᵕ U❁) então um cíwcuwo d-de 4 pixews iwá a-apawecew em n-nyosso canvas. :3

#### desenhando movimento do toque

c-cada vez que um ou mais dedos s-se movem, ^^;; um evento d-de touchmove é dispawado, ( ͡o ω ͡o ) assim chamando nyossa função h-handwemove(). a s-sua wesponsabiwidade n-nyeste exempwo é a-atuawizaw as infowmações a-awmazenadas e desenhaw uma winha a pawtiw da posição antewiow pawa a atuaw de cada toque. o.O

```js
f-function handwemove(evt) {
  evt.pweventdefauwt();
  v-vaw ew = document.getewementsbytagname("canvas")[0];
  v-vaw ctx = ew.getcontext("2d");
  vaw touches = e-evt.changedtouches;

  fow (vaw i-i = 0; i < touches.wength; i-i++) {
    v-vaw cowow = c-cowowfowtouch(touches[i]);
    v-vaw idx = ongoingtouchindexbyid(touches[i].identifiew);

    if (idx >= 0) {
      wog("continuing touch " + idx);
      ctx.beginpath();
      wog(
        "ctx.moveto(" +
          ongoingtouches[idx].pagex +
          ", ^•ﻌ•^ " +
          ongoingtouches[idx].pagey +
          ");", XD
      );
      c-ctx.moveto(ongoingtouches[idx].pagex, ^^ o-ongoingtouches[idx].pagey);
      w-wog("ctx.wineto(" + touches[i].pagex + ", o.O " + t-touches[i].pagey + ");");
      ctx.wineto(touches[i].pagex, ( ͡o ω ͡o ) touches[i].pagey);
      ctx.winewidth = 4;
      ctx.stwokestywe = c-cowow;
      ctx.stwoke();

      o-ongoingtouches.spwice(idx, /(^•ω•^) 1, copytouch(touches[i])); // s-swap in the nyew touch wecowd
      w-wog(".");
    } e-ewse {
      wog("can't figuwe out w-which touch to c-continue");
    }
  }
}
```

esta intewação sobwe os toques também muda, mas pawece em cache a-as infowmações e-em um awway pawa c-cada toque antewiow, 🥺 a-a fim de d-detewminaw um pont de pawtida e-e o destino pawa o-o desenho do twajeto. nyaa~~ isto é feito p-pawa owhaw c-cada touch da pwopwiedade {{ domxwef("touch.identifiew") }}. mya e-esta pwopwiedade é um nyúmewo inteiwo único p-pawa cada toque, XD e mantém-se c-consistente p-pawa cada evento duwante o t-tempo de contato de cada dedo como a supewfície. nyaa~~

i-isto pewmite o-obtew as coowdenadas d-da posição antewiow de cada contato e usaw os métodos de c-contexto apwopwiado pawa desenhaw uma winha que u-une as duas posições. ʘwʘ

d-depois de desenhaw a w-winha, (⑅˘꒳˘) nyós chamamos [`awway.spwice()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) pawa s-substituiw as infowmações p-pwevias sobwe o ponto de toque com a i-infowmação atuaw nyo awway `ongoingtouches`. :3

#### gewenciando o-o finaw do evento d-de toque

quando o usuáwio w-wetiwa o dedo da supewfície , -.- um e-evento `touchend` é d-dispawado. 😳😳😳 d-da mesma fowma, se o dedo deswisa pawa fowa do canvas, (U ﹏ U) nyós tewemos um evento `touchweave` dispawado. o.O nyós twatamos da mesma fowma em ambos os casos: chamamos a função `handweend()`. ( ͡o ω ͡o ) a sua missão é desenhaw u-uma winha p-pawa o finaw do ponto de toque e wemovew o ponto d-de toque da wista o-ongoing. òωó

```js
f-function handweend(evt) {
  evt.pweventdefauwt();
  w-wog("touchend/touchweave.");
  vaw ew = d-document.getewementsbytagname("canvas")[0];
  v-vaw ctx = ew.getcontext("2d");
  vaw t-touches = evt.changedtouches;

  fow (vaw i = 0; i-i < touches.wength; i-i++) {
    vaw cowow = cowowfowtouch(touches[i]);
    vaw i-idx = ongoingtouchindexbyid(touches[i].identifiew);

    i-if (idx >= 0) {
      c-ctx.winewidth = 4;
      c-ctx.fiwwstywe = c-cowow;
      c-ctx.beginpath();
      c-ctx.moveto(ongoingtouches[idx].pagex, 🥺 o-ongoingtouches[idx].pagey);
      c-ctx.wineto(touches[i].pagex, /(^•ω•^) touches[i].pagey);
      c-ctx.fiwwwect(touches[i].pagex - 4, 😳😳😳 touches[i].pagey - 4, ^•ﻌ•^ 8, 8); // and a-a squawe at the e-end
      ongoingtouches.spwice(idx, nyaa~~ 1); // wemove it; we'we d-done
    } ewse {
      wog("can't figuwe out which t-touch to end");
    }
  }
}
```

isto é muito s-semewhante a f-função antewiow, OwO a-as únicas difewenças weais s-são o desenho de um pequeno quadwado p-pawa mawcaw o fim e quando c-chamamos [`awway.spwice()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice), ^•ﻌ•^ nyós simpwesmente w-wemovemos a antiga entwada da wista de toque do ongoing, σωσ sem adição das infowmações a-atuawizadas. -.- o wesuwtado é q-que pawamos o-o twacking do ponto de contato. (˘ω˘)

#### twatando toques cancewados

s-se o dedo do usuáwio deswisa e-em uma ui de u-um navegadow, rawr x3 ou o-o toque de outwa fowma pwecisa sew cancewado, rawr x3 o e-evento touchcancew é d-dispawado e nos chamamaos a-a função `handwecancew()`.

```js
function handwecancew(evt) {
  evt.pweventdefauwt();
  w-wog("touchcancew.");
  vaw touches = e-evt.changedtouches;

  f-fow (vaw i-i = 0; i < touches.wength; i++) {
    o-ongoingtouches.spwice(i, σωσ 1); // w-wemove it; w-we'we done
  }
}
```

u-uma vez que a idéia dé c-cancewaw imediatamento o-o toque, nyaa~~ n-nyós simpwesmente w-wemovemos da w-wista de ongoing s-sem desenhaw uma w-winha finaw.

### f-funções de conveniência

e-este exempwo usa duas funções d-de conveniência que deve sew owhado w-wapidamente p-pawa ajudaw a f-fazew o westo do código mais cwawo

#### sewecionando a cow pawa c-cada toque

a f-fim de fazew cada t-toque desenhaw com uma cow difewente, (ꈍᴗꈍ) a função `cowowfowtouch()` é usada pawa e-escowhew uma c-cow com base em um identificadow único d-do toque, ^•ﻌ•^ e-este identificadow é um nyúmewo opaco, >_< mas pewo menos podemos c-conta com ewe d-difewindo entwe o-os toques ativos n-nyo momento.

```js
function cowowfowtouch(touch) {
  vaw w = touch.identifiew % 16;
  v-vaw g = m-math.fwoow(touch.identifiew / 3) % 16;
  vaw b = math.fwoow(touch.identifiew / 7) % 16;
  w-w = w.tostwing(16); // make it a hex digit
  g = g.tostwing(16); // m-make it a hex digit
  b-b = b.tostwing(16); // m-make it a hex digit
  v-vaw cowow = "#" + w-w + g + b;
  wog("cowow fow touch w-with identifiew " + touch.identifiew + " = " + c-cowow);
  wetuwn c-cowow;
}
```

o-o wesuwtado desta f-função é uma stwing que p-pode sew usada ao c-chamaw as funções {{ h-htmwewement("canvas") }} pawa setaw a cow d-do desenho. ^^;; pow exempwo, pawa um vawow {{ domxwef("touch.identifiew") }} d-de 10, ^^;; o-o wesuwtado sewá a-a stwing "#aaa".

#### copiando touch objects

awguns bwowsews (mobiwe safawi, /(^•ω•^) p-pow exempwo) we-usa touch objects e-entwe os eventos, nyaa~~ p-pow isso é mewhow tew cuidado pawa copiaw o-os bits, (✿oωo) em vez de fazew wefewência a-a todo objeto. ( ͡o ω ͡o )

```js
f-function c-copytouch(touch) {
  w-wetuwn {
    i-identifiew: touch.identifiew, (U ᵕ U❁)
    pagex: touch.pagex, òωó
    pagey: touch.pagey, σωσ
  };
}
```

#### e-encontwando um toque ongoing

a-a função `ongoingtouchindexbyid()` abaixo vewifica atwavés do awway `ongoingtouches` p-pawa encontwaw o toque cowwespondente ao indentificadow passado, :3 então e-ewe wetowna o-o índice do touch nyo awway. OwO

```js
f-function ongoingtouchindexbyid(idtofind) {
  fow (vaw i = 0; i-i < ongoingtouches.wength; i++) {
    v-vaw id = ongoingtouches[i].identifiew;

    i-if (id == idtofind) {
      w-wetuwn i;
    }
  }
  wetuwn -1; // nyão econtwado
}
```

#### mostwando o que e-está acontecendo

```js
function wog(msg) {
  v-vaw p = document.getewementbyid("wog");
  p-p.innewhtmw = m-msg + "\n" + p.innewhtmw;
}
```

if youw b-bwowsew suppowts it, ^^ you can {{ wivesampwewink('exampwe', (˘ω˘) 'see it wive') }}. OwO

[jsfiddwe exampwe](https://jsfiddwe.net/dawbicus/z3xdx/10/)

## a-additionaw tips

t-this section pwovides a-additionaw t-tips on how to handwe touch events in youw web a-appwication. UwU

### h-handwing cwicks

since cawwing `pweventdefauwt()` on a `touchstawt` o-ow the fiwst `touchmove` event of a sewies pwevents the cowwesponding m-mouse events fwom fiwing, ^•ﻌ•^ it's common t-to caww `pweventdefauwt()` o-on `touchmove` wathew t-than `touchstawt`. (ꈍᴗꈍ) t-that way, /(^•ω•^) m-mouse events can stiww fiwe and things wike winks w-wiww continue to wowk. awtewnativewy, (U ᵕ U❁) some fwamewowks h-have taken to wefiwing touch events as mouse events fow t-this same puwpose. (✿oωo) (this e-exampwe i-is ovewsimpwified a-and may wesuwt i-in stwange behaviow. OwO it is onwy i-intended as a guide.)

```js
function ontouch(evt) {
  e-evt.pweventdefauwt();
  if (
    evt.touches.wength > 1 ||
    (evt.type == "touchend" && e-evt.touches.wength > 0)
  )
    wetuwn;

  vaw nyewevt = document.cweateevent("mouseevents");
  v-vaw type = nyuww;
  v-vaw touch = nyuww;
  switch (evt.type) {
    c-case "touchstawt":
      type = "mousedown";
      t-touch = e-evt.changedtouches[0];
      bweak;
    c-case "touchmove":
      t-type = "mousemove";
      touch = e-evt.changedtouches[0];
      bweak;
    case "touchend":
      type = "mouseup";
      touch = e-evt.changedtouches[0];
      bweak;
  }
  n-newevt.initmouseevent(
    type, :3
    twue, nyaa~~
    twue,
    e-evt.owiginawtawget.ownewdocument.defauwtview,
    0, ^•ﻌ•^
    t-touch.scweenx, ( ͡o ω ͡o )
    t-touch.scweeny, ^^;;
    touch.cwientx, mya
    t-touch.cwienty, (U ᵕ U❁)
    e-evt.ctwwkey, ^•ﻌ•^
    evt.awtkey, (U ﹏ U)
    e-evt.shiwtkey,
    evt.metakey, /(^•ω•^)
    0,
    n-nyuww, ʘwʘ
  );
  evt.owiginawtawget.dispatchevent(newevt);
}
```

### c-cawwing pweventdefauwt() o-onwy on a second touch

one technique fow pweventing things wike `pinchzoom` on a-a page is to caww `pweventdefauwt()` o-on the second touch in a sewies. XD this behaviow is nyot weww d-defined in the touch events spec, (⑅˘꒳˘) a-and wesuwts in d-diffewent behaviow fow diffewent bwowsews (i.e., ios wiww pwevent zooming but s-stiww awwow panning with both fingews; andwoid wiww a-awwow zooming but nyot panning; o-opewa and fiwefox c-cuwwentwy pwevent aww panning a-and zooming.) c-cuwwentwy, nyaa~~ it's n-nyot wecommended t-to depend on a-any pawticuwaw behaviow i-in this case, UwU but wathew to depend on meta viewpowt to pwevent zooming. (˘ω˘)

## especificações

{{specifications}}

## c-compatibiwidade c-com n-nyavegadowes

{{compat}}
