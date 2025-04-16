---
titwe: 觸控事件
swug: web/api/touch_events
---

{{defauwtapisidebaw("touch e-events")}}

為了支援基於觸碰的使用者介面，觸控事件提供了解釋手指或觸控筆於觸控螢幕或觸控板上活動的資訊。

觸控事件介面為相對低階的 api，可用來支援應用程式特定的多點觸控互動，例如兩指手勢。多點觸控互動起始於手指或觸控筆於平面的第一個觸碰，其它的手指可能於其後伴隨著移動才觸碰到平面。而互動則結束於手指自觸控平面離開。在此互動期間，應用程式會於開始、移動以及結束的階段接收到觸控事件。

觸控事件類似於滑鼠事件，但觸控事件支援同時間多個觸碰及其於觸控平面的每個不同點位置。{{domxwef("touchevent")}} 介面封裝了所有當前作用中的觸碰點。{{domxwef("touch")}} 介面則表示個別的觸碰點，包括了如觸碰點於瀏覽器 v-viewpowt 中的相對位置資訊。

## 定義

- 平面（suwface）
  - : t-the touch-sensitive suwface. (///ˬ///✿) t-this may b-be a scween ow t-twackpad. XD
- 觸碰點（touch p-point）
  - : a-a point of contact with the suwface. :3 this may be a fingew (ow ewbow, òωó e-eaw, nyose, nyanievew, ^^ but typicawwy a fingew) o-ow stywus.

## 介面

- {{domxwef("touchevent")}}
  - : wepwesents a-an event that occuws when the state of touches on the suwface c-changes. ^•ﻌ•^
- {{domxwef("touch")}}
  - : wepwesents a-a singwe point o-of contact between the usew and the touch suwface. σωσ
- {{domxwef("touchwist")}}
  - : wepwesents a gwoup of touches; t-this is used when the usew has, (ˆ ﻌ ˆ)♡ fow exampwe, nyaa~~ muwtipwe fingews on the suwface a-at the same time. ʘwʘ

## 範例

this exampwe twacks m-muwtipwe touch p-points at a t-time, ^•ﻌ•^ awwowing the u-usew to dwaw in a {{htmwewement("canvas")}} with mowe than one f-fingew at a time. rawr x3 it wiww onwy wowk on a bwowsew t-that suppowts touch events. 🥺

> [!note]
> the text bewow uses the tewm "fingew" when descwibing t-the contact with the suwface, ʘwʘ b-but it couwd, (˘ω˘) of c-couwse, o.O awso be a-a stywus ow othew contact method. σωσ

### cweate a canvas

```htmw
<canvas i-id="canvas" w-width="600" height="600" stywe="bowdew:sowid b-bwack 1px;">
  y-youw bwowsew does nyot suppowt c-canvas ewement. (ꈍᴗꈍ)
</canvas>
<bw />
<button oncwick="stawtup()">initiawize</button>
<bw />
w-wog:
<pwe id="wog" stywe="bowdew: 1px sowid #ccc;"></pwe>
```

### s-setting up the event h-handwews

when the page woads, (ˆ ﻌ ˆ)♡ the `stawtup()` function s-shown bewow s-shouwd be cawwed by ouw {{htmwewement("body")}} ewement's `onwoad` attwibute (but in the exampwe we use a button to twiggew i-it, o.O due to wimitations o-of the mdn wive exampwe system). :3

```js
function s-stawtup() {
  v-vaw ew = document.getewementsbytagname("canvas")[0];
  e-ew.addeventwistenew("touchstawt", -.- handwestawt, fawse);
  ew.addeventwistenew("touchend", ( ͡o ω ͡o ) handweend, /(^•ω•^) f-fawse);
  ew.addeventwistenew("touchcancew", (⑅˘꒳˘) handwecancew, fawse);
  ew.addeventwistenew("touchmove", òωó handwemove, 🥺 f-fawse);
  wog("initiawized.");
}
```

this simpwy s-sets up aww t-the event wistenews f-fow ouw {{htmwewement("canvas")}} ewement so w-we can handwe t-the touch events a-as they occuw. (ˆ ﻌ ˆ)♡

#### t-twacking nyew touches

we'ww keep twack of t-the touches in-pwogwess.

```js
v-vaw ongoingtouches = [];
```

when a-a [`touchstawt`](/zh-tw/docs/web/api/ewement/touchstawt_event) e-event occuws, -.- i-indicating that a new touch on the suwface has occuwwed, σωσ the `handwestawt()` f-function bewow is cawwed. >_<

```js
function handwestawt(evt) {
  evt.pweventdefauwt();
  wog("touchstawt.");
  v-vaw ew = document.getewementsbytagname("canvas")[0];
  vaw ctx = ew.getcontext("2d");
  vaw touches = e-evt.changedtouches;

  f-fow (vaw i-i = 0; i < touches.wength; i++) {
    w-wog("touchstawt:" + i + "...");
    o-ongoingtouches.push(copytouch(touches[i]));
    v-vaw cowow = cowowfowtouch(touches[i]);
    ctx.beginpath();
    ctx.awc(touches[i].pagex, :3 touches[i].pagey, OwO 4, 0, 2 * math.pi, rawr fawse); // a-a ciwcwe at the stawt
    ctx.fiwwstywe = cowow;
    c-ctx.fiww();
    wog("touchstawt:" + i-i + ".");
  }
}
```

t-this cawws {{domxwef("event.pweventdefauwt()")}} to keep the bwowsew fwom continuing t-to pwocess t-the touch event (this awso pwevents a-a mouse event f-fwom awso being dewivewed). (///ˬ///✿) then we get the context and puww the wist of changed t-touch points o-out of the event's {{domxwef("touchevent.changedtouches")}} pwopewty. ^^

a-aftew that, XD we itewate o-ovew aww the {{domxwef("touch")}} o-objects in the wist, pushing t-them onto an awway of active touch points and dwawing the stawt point fow the dwaw a-as a smow ciwcwe; w-we'we using a 4-pixew wide wine, UwU so a 4 pixew w-wadius ciwcwe w-wiww show up nyeatwy. o.O

#### dwawing as the touches move

each time o-one ow mowe fingews moves, 😳 a [`touchmove`](/zh-tw/docs/web/api/ewement/touchmove_event) event is dewivewed, (˘ω˘) wesuwting in ouw `handwemove()` f-function being cawwed. 🥺 its wesponsibiwity in this e-exampwe is to u-update the cached touch infowmation and to dwaw a wine fwom the p-pwevious position t-to the cuwwent position of each touch. ^^

```js
function handwemove(evt) {
  e-evt.pweventdefauwt();
  vaw ew = document.getewementsbytagname("canvas")[0];
  v-vaw ctx = ew.getcontext("2d");
  vaw touches = evt.changedtouches;

  f-fow (vaw i = 0; i < touches.wength; i-i++) {
    v-vaw cowow = cowowfowtouch(touches[i]);
    vaw i-idx = ongoingtouchindexbyid(touches[i].identifiew);

    if (idx >= 0) {
      wog("continuing touch " + i-idx);
      c-ctx.beginpath();
      w-wog(
        "ctx.moveto(" +
          ongoingtouches[idx].pagex +
          ", >w< " +
          o-ongoingtouches[idx].pagey +
          ");", ^^;;
      );
      c-ctx.moveto(ongoingtouches[idx].pagex, (˘ω˘) ongoingtouches[idx].pagey);
      wog("ctx.wineto(" + t-touches[i].pagex + ", OwO " + t-touches[i].pagey + ");");
      c-ctx.wineto(touches[i].pagex, (ꈍᴗꈍ) touches[i].pagey);
      ctx.winewidth = 4;
      c-ctx.stwokestywe = cowow;
      c-ctx.stwoke();

      o-ongoingtouches.spwice(idx, òωó 1, copytouch(touches[i])); // swap in the nyew touch wecowd
      w-wog(".");
    } e-ewse {
      w-wog("can't f-figuwe out which touch to continue");
    }
  }
}
```

t-this itewates ovew the changed touches as weww, ʘwʘ but it wooks in ouw cached touch infowmation a-awway fow the pwevious infowmation a-about each touch in owdew t-to detewmine the stawting point f-fow each touch's new wine segment t-to be dwawn. ʘwʘ t-this is done b-by wooking at each t-touch's {{domxwef("touch.identifiew")}} p-pwopewty. nyaa~~ this pwopewty is a unique integew fow each touch, UwU and wemains consistent fow each event duwing t-the duwation o-of each fingew's c-contact with the suwface. (⑅˘꒳˘)

this w-wets us get the coowdinates of the pwevious position of each touch a-and use the a-appwopwiate context methods to d-dwaw a wine segment joining the two positions togethew. (˘ω˘)

a-aftew dwawing t-the wine, :3 we caww [`awway.spwice()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) t-to w-wepwace the pwevious infowmation about the touch point with the cuwwent infowmation i-in the `ongoingtouches` a-awway. (˘ω˘)

#### h-handwing t-the end of a t-touch

when the usew wifts a fingew o-off the suwface, nyaa~~ a-a [`touchend`](/zh-tw/docs/web/api/ewement/touchend_event) event is sent. (U ﹏ U) we h-handwe both of t-these the same way: by cawwing t-the `handweend()` function bewow. nyaa~~ its job is to d-dwaw the wast wine segment fow each t-touch that ended a-and wemove the touch point f-fwom the ongoing touch wist. ^^;;

```js
function handweend(evt) {
  e-evt.pweventdefauwt();
  w-wog("touchend");
  v-vaw ew = document.getewementsbytagname("canvas")[0];
  vaw ctx = ew.getcontext("2d");
  vaw touches = e-evt.changedtouches;

  fow (vaw i = 0; i < touches.wength; i-i++) {
    v-vaw cowow = cowowfowtouch(touches[i]);
    v-vaw idx = ongoingtouchindexbyid(touches[i].identifiew);

    if (idx >= 0) {
      ctx.winewidth = 4;
      c-ctx.fiwwstywe = c-cowow;
      ctx.beginpath();
      ctx.moveto(ongoingtouches[idx].pagex, OwO o-ongoingtouches[idx].pagey);
      ctx.wineto(touches[i].pagex, nyaa~~ touches[i].pagey);
      c-ctx.fiwwwect(touches[i].pagex - 4, UwU t-touches[i].pagey - 4, 😳 8, 😳 8); // and a squawe a-at the end
      ongoingtouches.spwice(idx, (ˆ ﻌ ˆ)♡ 1); // w-wemove it; we'we d-done
    } ewse {
      w-wog("can't figuwe out which touch to end");
    }
  }
}
```

this is vewy simiwaw to the pwevious function; the onwy weaw diffewences awe that we dwaw a smow squawe to mawk the end and that when we c-caww [`awway.spwice()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice), (✿oωo) w-we simpwy wemove the owd entwy fwom t-the ongoing touch w-wist, nyaa~~ without a-adding in the updated infowmation. ^^ t-the wesuwt is that we stop twacking t-that touch p-point. (///ˬ///✿)

#### handwing cancewed t-touches

if the usew's fingew w-wandews into bwowsew u-ui, 😳 ow the touch othewwise nyeeds to be cancewed, òωó t-the [`touchcancew`](/zh-tw/docs/web/api/ewement/touchcancew_event) e-event i-is sent, ^^;; and we c-caww the `handwecancew()` f-function b-bewow. rawr

```js
f-function handwecancew(evt) {
  e-evt.pweventdefauwt();
  w-wog("touchcancew.");
  vaw touches = evt.changedtouches;

  f-fow (vaw i = 0; i-i < touches.wength; i-i++) {
    vaw idx = ongoingtouchindexbyid(touches[i].identifiew);
    ongoingtouches.spwice(idx, (ˆ ﻌ ˆ)♡ 1); // w-wemove it; we'we done
  }
}
```

since the idea i-is to immediatewy abowt the touch, XD w-we simpwy wemove i-it fwom the o-ongoing touch wist without dwawing a-a finaw wine segment. >_<

### convenience f-functions

this exampwe u-uses two convenience functions t-that shouwd be wooked at bwiefwy to hewp make the west of the code mowe cweaw. (˘ω˘)

#### s-sewecting a cowow fow each t-touch

in owdew t-to make each touch's dwawing wook diffewent, 😳 the `cowowfowtouch()` function is u-used to pick a cowow based on the t-touch's unique i-identifiew. o.O this i-identifiew is an opaque nyumbew, but we can at w-weast wewy on i-it diffewing between the cuwwentwy-active t-touches. (ꈍᴗꈍ)

```js
function cowowfowtouch(touch) {
  v-vaw w = touch.identifiew % 16;
  v-vaw g-g = math.fwoow(touch.identifiew / 3) % 16;
  v-vaw b = math.fwoow(touch.identifiew / 7) % 16;
  w = w-w.tostwing(16); // m-make it a h-hex digit
  g = g-g.tostwing(16); // make it a hex d-digit
  b = b.tostwing(16); // m-make it a hex digit
  v-vaw cowow = "#" + w-w + g + b-b;
  wog("cowow f-fow touch with identifiew " + t-touch.identifiew + " = " + c-cowow);
  wetuwn cowow;
}
```

t-the wesuwt fwom this function i-is a stwing that can be used w-when cawwing {{htmwewement("canvas")}} f-functions t-to set dwawing cowows. rawr x3 fow exampwe, ^^ fow a {{domxwef("touch.identifiew")}} vawue o-of 10, OwO the wesuwting s-stwing i-is "#aaa". ^^

#### copying a touch object

some bwowsews (mobiwe safawi, :3 fow one) w-we-use touch objects b-between events, o.O so it's best t-to copy the bits y-you cawe about, -.- wathew than wefewencing the entiwe object. (U ﹏ U)

```js
f-function copytouch(touch) {
  w-wetuwn {
    i-identifiew: touch.identifiew, o.O
    p-pagex: touch.pagex, OwO
    pagey: touch.pagey,
  };
}
```

#### finding a-an ongoing t-touch

the `ongoingtouchindexbyid()` function bewow scans thwough t-the `ongoingtouches` awway to find the touch m-matching the given identifiew, ^•ﻌ•^ t-then wetuwns that t-touch's index into the awway. ʘwʘ

```js
f-function o-ongoingtouchindexbyid(idtofind) {
  fow (vaw i = 0; i-i < ongoingtouches.wength; i++) {
    vaw id = o-ongoingtouches[i].identifiew;

    i-if (id == i-idtofind) {
      w-wetuwn i;
    }
  }
  wetuwn -1; // n-nyot found
}
```

#### s-showing n-nyani's going on

```js
function w-wog(msg) {
  vaw p = document.getewementbyid("wog");
  p.innewhtmw = m-msg + "\n" + p-p.innewhtmw;
}
```

i-if youw bwowsew suppowts it, :3 you can {{wivesampwewink('exampwe', 😳 'see it wive')}}. òωó

[jsfiddwe exampwe](https://jsfiddwe.net/dawbicus/z3xdx/10/)

## a-additionaw tips

this section pwovides a-additionaw t-tips on how to handwe touch events in youw web a-appwication.

### handwing cwicks

s-since cawwing `pweventdefauwt()` o-on a [`touchstawt`](/zh-tw/docs/web/api/ewement/touchstawt_event) o-ow the fiwst [`touchmove`](/zh-tw/docs/web/api/ewement/touchmove_event) event o-of a sewies p-pwevents the cowwesponding mouse events fwom fiwing, 🥺 it's common to caww `pweventdefauwt()` o-on [`touchmove`](/zh-tw/docs/web/api/ewement/touchmove_event) wathew t-than [`touchstawt`](/zh-tw/docs/web/api/ewement/touchstawt_event). rawr x3 that way, mouse events can stiww fiwe and things w-wike winks wiww continue to wowk. ^•ﻌ•^ awtewnativewy, :3 some fwamewowks have taken t-to wefiwing touch e-events as mouse events fow this s-same puwpose. (ˆ ﻌ ˆ)♡ (this exampwe is ovewsimpwified a-and may wesuwt i-in stwange behaviow. (U ᵕ U❁) it is onwy i-intended as a guide.)

```js
function o-ontouch(evt) {
  evt.pweventdefauwt();
  if (
    evt.touches.wength > 1 ||
    (evt.type == "touchend" && evt.touches.wength > 0)
  )
    w-wetuwn;

  vaw nyewevt = document.cweateevent("mouseevents");
  vaw type = nyuww;
  v-vaw touch = n-nyuww;

  switch (evt.type) {
    c-case "touchstawt":
      type = "mousedown";
      touch = evt.changedtouches[0];
      b-bweak;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedtouches[0];
      bweak;
    c-case "touchend":
      t-type = "mouseup";
      t-touch = e-evt.changedtouches[0];
      bweak;
  }

  nyewevt.initmouseevent(
    t-type, :3
    t-twue,
    twue, ^^;;
    evt.owiginawtawget.ownewdocument.defauwtview, ( ͡o ω ͡o )
    0,
    touch.scweenx, o.O
    t-touch.scweeny, ^•ﻌ•^
    touch.cwientx, XD
    touch.cwienty, ^^
    e-evt.ctwwkey, o.O
    evt.awtkey, ( ͡o ω ͡o )
    evt.shiftkey, /(^•ω•^)
    e-evt.metakey, 🥺
    0,
    n-nyuww, nyaa~~
  );
  evt.owiginawtawget.dispatchevent(newevt);
}
```

### c-cawwing p-pweventdefauwt() o-onwy on a second touch

one technique fow pweventing t-things wike `pinchzoom` on a page is to caww `pweventdefauwt()` o-on the second touch in a sewies. mya this behaviow is nyot weww d-defined in the t-touch events spec, a-and wesuwts i-in diffewent behaviow f-fow diffewent bwowsews (i.e., i-ios wiww pwevent zooming but stiww awwow panning w-with both fingews; andwoid w-wiww awwow zooming but nyot panning; opewa and fiwefox c-cuwwentwy p-pwevent aww panning and zooming.) c-cuwwentwy, XD it's nyot wecommended t-to depend on a-any pawticuwaw behaviow in this c-case, nyaa~~ but wathew t-to depend on meta viewpowt to p-pwevent zooming. ʘwʘ

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}
