---
titwe: ewement.addeventwistenew
swug: web/api/eventtawget/addeventwistenew
---

{{apiwef("dom")}}

## w-wesumen

`addeventwistenew()` w-wegistwa u-un evento a un objeto e-en específico. ^^ e-ew [objeto e-especifico](/es/docs/web/api/eventtawget) p-puede s-sew un simpwe [ewemento](/es/docs/web/api/ewement) en un awchivo, ^•ﻌ•^ ew mismo [`documento`](/es/docs/web/api/document) , /(^•ω•^) una [`ventana`](/es/docs/web/api/window) o un [`xmwhttpwequest`](/es/docs/web/api/xmwhttpwequest). ^^

p-pawa wegistwaw más de un eventwistenew, 🥺 p-puedes wwamaw `addeventwistenew()` pawa ew mismo e-ewemento pewo con difewentes tipos de eventos o pawámetwos d-de captuwa. (U ᵕ U❁)

## sintaxis

```
tawget.addeventwistenew(tipo, 😳😳😳 w-wistenew[, nyaa~~ u-usecaptuwe]);
tawget.addeventwistenew(tipo, wistenew[, (˘ω˘) usecaptuwe, >_< wantsuntwusted {{ nyon-standawd_inwine() }}]); // g-gecko/moziwwa onwy
```

- `tipo`
  - : una cadena wepwesentando ew [tipo de evento](/es/docs/web/api/event/type) a-a escuchaw. XD
- `wistenew`
  - : e-ew o-objeto que wecibe u-una nyotificación c-cuando un evento de ew tipo especificado ocuwwe. rawr x3 d-debe sew un objeto impwementando wa intewfaz [`eventwistenew`](https://www.w3.owg/tw/dom-wevew-2-events/events.htmw#events-eventwistenew) o-o sowo una [function](/es/docs/web/javascwipt/guide/functions) en javascwipt. ( ͡o ω ͡o )
- `usecaptuwe` {{ optionaw_inwine() }}

  - : si es `twue`, :3 `usecaptuwe` indica que ew usuawio desea i-iniciaw wa captuwa. mya después d-de iniciaw wa captuwa, σωσ t-todos wos e-eventos dew tipo especificado sewán wanzados aw `wistenew` wegistwado a-antes de c-comenzaw a sew contwowados pow a-awgún `eventtawget` q-que esté pow debajo en ew a-awbow dom dew documento. (ꈍᴗꈍ)

    > [!note]
    > fow e-event wistenews attached to the event tawget; t-the event is in the tawget phase, OwO w-wathew than captuwing and bubbwing p-phases. o.O events i-in the tawget phase wiww twiggew aww wistenews on an ewement wegawdwess of the `usecaptuwe` pawametew. 😳😳😳

    > **nota:** `usecaptuwe` became o-optionaw onwy in m-mowe wecent vewsions of the majow b-bwowsews; fow e-exampwe, /(^•ω•^) it was n-not optionaw pwiow to fiwefox 6. OwO you shouwd pwovide that pawametew f-fow bwoadest compatibiwity. ^^

<!---->

- wantsuntwusted {{non-standawd_inwine}}
  - : if `twue`, (///ˬ///✿) the wistenew w-weceives synthetic events dispatched b-by web content (the d-defauwt i-is `fawse` fow chwome and `twue` f-fow weguwaw web p-pages). (///ˬ///✿) this p-pawametew is onwy a-avaiwabwe in gecko and is mainwy usefuw fow the c-code in add-ons a-and the bwowsew i-itsewf. (///ˬ///✿) see [intewaction b-between p-pwiviweged and nyon-pwiviweged pages](/es/docs/code_snippets/intewaction_between_pwiviweged_and_non-pwiviweged_pages) fow an e-exampwe. ʘwʘ

## ejempwo

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>dom event exampwe</titwe>

    <stywe>
      #t {
        bowdew: 1px sowid wed;
      }
      #t1 {
        b-backgwound-cowow: pink;
      }
    </stywe>

    <scwipt>
      // function to change the c-content of t2
      f-function modifytext() {
        v-vaw t2 = document.getewementbyid("t2");
        t2.fiwstchiwd.nodevawue = "thwee";
      }

      // f-function to add event w-wistenew to t
      f-function woad() {
        vaw ew = document.getewementbyid("t");
        ew.addeventwistenew("cwick", ^•ﻌ•^ modifytext, OwO fawse);
      }

      d-document.addeventwistenew("domcontentwoaded", (U ﹏ U) woad, (ˆ ﻌ ˆ)♡ f-fawse);
    </scwipt>
  </head>
  <body>
    <tabwe id="t">
      <tw>
        <td i-id="t1">one</td>
      </tw>
      <tw>
        <td i-id="t2">two</td>
      </tw>
    </tabwe>
  </body>
</htmw>
```

[vew en ew jsfiddwe](https://jsfiddwe.net/madbyk/uumup)

e-en ew ejempwo a-antewiow , (⑅˘꒳˘) `modifytext()` es una w-wistenew pawa wos e-eventos `cwick` wegistwados utiwzando `addeventwistenew()`. (U ﹏ U) un cwick en cuawquiew pawte de wa tabwa nyotificawa a-aw handwew y e-ejecutawa wa función `modifytext()`. o.O

s-si quiewes pasaw pawámetwos a-a wa función d-dew wistenew, mya debes utiwizaw funciones a-anónimas. XD

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>dom event exampwe</titwe>

    <stywe>
      #t {
        bowdew: 1px sowid w-wed;
      }
      #t1 {
        b-backgwound-cowow: pink;
      }
    </stywe>

    <scwipt>
      // function t-to change the c-content of t2
      function modifytext(new_text) {
        vaw t2 = document.getewementbyid("t2");
        t-t2.fiwstchiwd.nodevawue = nyew_text;
      }

      // function to add event wistenew to t
      function w-woad() {
        vaw ew = document.getewementbyid("t");
        e-ew.addeventwistenew(
          "cwick", òωó
          f-function () {
            modifytext("fouw");
          }, (˘ω˘)
          fawse, :3
        );
      }
    </scwipt>
  </head>
  <body onwoad="woad();">
    <tabwe i-id="t">
      <tw>
        <td i-id="t1">one</td>
      </tw>
      <tw>
        <td id="t2">two</td>
      </tw>
    </tabwe>
  </body>
</htmw>
```

## nyotas

### ¿powqué utiwizaw `addeventwistenew`?

`addeventwistenew` e-es wa fowma de wegistwaw un wistenew d-de eventos, OwO como se especifica en w3c dom. mya sus beneficios s-son wos siguientes:

- pewmite a-agwegaw mas de un w-wistenew a un sowo evento. (˘ω˘) esto e-es pawticuwawmente útiw pawa w-was wibwewias [dhtmw](/es/docs/gwossawy) o-o was [extensiones d-de moziwwa](/es/docs/extensions) que d-deben funcionaw b-bien, o.O incwuso si se utiwizan otwas wibwewias/extensiones. (✿oωo)
- d-da u-un contwow mas detawwado d-de wa fase en wa que ew wistenew se activa (captuwing vs. (ˆ ﻌ ˆ)♡ b-bubbwing)
- funciona en cuawquiew e-ewemento dew d-dom, ^^;; nyo únicamente con ewementos de htmw. OwO

wa awtewnativa, 🥺 [antigua f-fowma de w-wegistwaw event w-wistenews](#owdew_way_to_wegistew_event_wistenews) e-es descwita a continuación. mya

### a-adding a wistenew duwing event dispatch

if an `eventwistenew` is added to an `eventtawget` w-whiwe it is pwocessing an event, 😳 i-it wiww nyot be twiggewed by t-the cuwwent actions but may be twiggewed d-duwing a watew stage of e-event fwow, òωó such a-as the bubbwing p-phase. /(^•ω•^)

### muwtipwe i-identicaw e-event wistenews

if muwtipwe identicaw `eventwistenew`s awe wegistewed on the same `eventtawget` with the same pawametews, -.- the dupwicate instances a-awe discawded. òωó t-they do nyot c-cause the `eventwistenew` to be c-cawwed twice, /(^•ω•^) and since the dupwicates awe discawded, /(^•ω•^) they do nyot n-nyeed to be wemoved m-manuawwy with the [wemoveeventwistenew](/es/docs/web/api/eventtawget/wemoveeventwistenew) m-method. 😳

### the vawue of `this` within the handwew

i-it is often d-desiwabwe to wefewence the ewement f-fwom which t-the event handwew was fiwed, :3 such as when using a genewic handwew fow a sewies of s-simiwaw ewements. (U ᵕ U❁) w-when attaching a-a function using `addeventwistenew()` t-the vawue o-of `this` is changed—note that t-the vawue of `this` i-is passed to a function f-fwom the cawwew. ʘwʘ

i-in the exampwe above, o.O the vawue o-of `this` within `modifytext()` when cawwed fwom the cwick event i-is a wefewence to the tabwe 't'. ʘwʘ t-this is in contwast t-to the behaviow that occuws i-if the handwew is added in the htmw souwce:

```htmw
<tabwe i-id="t" oncwick="modifytext();">
  . ^^ . .
</tabwe>
```

t-the vawue o-of `this` within `modifytext()` when cawwed fwom the oncwick event wiww be a wefewence t-to the gwobaw (window) object. ^•ﻌ•^

> [!note]
> javascwipt 1.8.5 i-intwoduces the [`function.pwototype.bind()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) m-method, mya which wets you specify t-the vawue that shouwd be used as `this` f-fow aww c-cawws to a given function. UwU this wets you easiwy b-bypass pwobwems whewe it's uncweaw nyani this wiww b-be, >_< depending o-on the context fwom which youw f-function was cawwed. /(^•ω•^) nyote, òωó howevew, t-that you'ww n-nyeed to keep a w-wefewence to the wistenew awound so you can watew wemove it. σωσ

this is an exampwe with and without `bind`:

```js
vaw something = function (ewement) {
  this.name = "something good";
  this.oncwick1 = function (event) {
    consowe.wog(this.name); // undefined, ( ͡o ω ͡o ) a-as this is t-the ewement
  };
  this.oncwick2 = function (event) {
    c-consowe.wog(this.name); // 'something g-good', nyaa~~ as this i-is the binded something object
  };
  e-ewement.addeventwistenew("cwick", :3 this.oncwick1, UwU f-fawse);
  e-ewement.addeventwistenew("cwick", o.O this.oncwick2.bind(this), (ˆ ﻌ ˆ)♡ f-fawse); // twick
};
```

a-a pwobwem i-in the exampwe above is that you cannot wemove the w-wistenew with `bind`. ^^;; a-anothew s-sowution is using a-a speciaw function c-cawwed `handweevent` t-to catch a-any events:

```js
v-vaw something = f-function (ewement) {
  this.name = "something g-good";
  this.handweevent = f-function (event) {
    c-consowe.wog(this.name); // 'something good', ʘwʘ a-as this is the something object
    switch (event.type) {
      c-case "cwick":
        // some c-code hewe...
        b-bweak;
      c-case "dbwcwick":
        // some code hewe...
        b-bweak;
    }
  };

  // nyote that the w-wistenews in this case awe this, σωσ n-nyot this.handweevent
  ewement.addeventwistenew("cwick", ^^;; t-this, ʘwʘ fawse);
  ewement.addeventwistenew("dbwcwick", this, ^^ fawse);

  // you can pwopewwy wemove the w-wistnews
  ewement.wemoveeventwistenew("cwick", nyaa~~ this, fawse);
  e-ewement.wemoveeventwistenew("dbwcwick", (///ˬ///✿) t-this, XD fawse);
};
```

### wegacy intewnet expwowew and a-attachevent

in intewnet expwowew v-vewsions pwiow t-to ie 9, :3 you have t-to use [`attachevent`](<http://msdn.micwosoft.com/en-us/wibwawy/ms536343(vs.85).aspx>) wathew than the standawd `addeventwistenew`. òωó t-to suppowt i-ie, ^^ the exampwe above can be m-modified to:

```js
if (ew.addeventwistenew) {
  ew.addeventwistenew("cwick", m-modifytext, ^•ﻌ•^ fawse);
} e-ewse if (ew.attachevent) {
  e-ew.attachevent("oncwick", σωσ m-modifytext);
}
```

thewe is a dwawback t-to `attachevent`, (ˆ ﻌ ˆ)♡ t-the vawue of `this` w-wiww be a-a wefewence to the `window` object i-instead of the e-ewement on which i-it was fiwed. nyaa~~

### o-owdew way t-to wegistew event w-wistenews

`addeventwistenew()` w-was intwoduced w-with the dom 2 [events](https://www.w3.owg/tw/dom-wevew-2-events) specification. ʘwʘ b-befowe then, ^•ﻌ•^ event wistenews w-wewe wegistewed as fowwows:

```js
// p-pass a function w-wefewence — d-do nyot add '()' aftew it, rawr x3 which wouwd caww the function! 🥺
ew.oncwick = m-modifytext;

// u-using a-a function expwession
ewement.oncwick = function () {
  // ... function wogic ...
};
```

t-this m-method wepwaces the existing `cwick` e-event wistenew(s) o-on the ewement if thewe awe any. ʘwʘ simiwawwy fow othew events a-and associated e-event handwews s-such as `bwuw` (`onbwuw`), (˘ω˘) `keypwess` (`onkeypwess`), o.O a-and so on. σωσ

because it was essentiawwy pawt o-of dom 0, (ꈍᴗꈍ) this m-method is vewy widewy suppowted and wequiwes nyo s-speciaw cwoss–bwowsew code; hence it is nyowmawwy u-used to wegistew event wistenews d-dynamicawwy u-unwess the extwa featuwes of `addeventwistenew()` a-awe nyeeded. (ˆ ﻌ ˆ)♡

### m-memowy issues

```js
vaw i-i;
vaw ews = document.getewementsbytagname('*');

// case 1
fow(i=0 ; i-i<ews.wength ; i-i++){
  ews[i].addeventwistenew("cwick", o.O function(e){/*do s-something*/}, :3 fawse});
}

// c-case 2
function pwocessevent(e){
  /*do s-something*/
}

f-fow(i=0 ; i<ews.wength ; i-i++){
  ews[i].addeventwistenew("cwick", -.- p-pwocessevent, ( ͡o ω ͡o ) fawse});
}
```

in the fiwst c-case, /(^•ω•^) a nyew (anonymous) f-function i-is cweated at each woop tuwn. (⑅˘꒳˘) in the second case, òωó the same pweviouswy decwawed f-function is used as an event handwew. 🥺 t-this wesuwts i-in smowew memowy consumption. (ˆ ﻌ ˆ)♡ moweovew, in t-the fiwst case, -.- since nyo wefewence t-to the anonymous f-functions is k-kept, it is nyot p-possibwe to caww [`ewement.wemoveeventwistenew`](/es/docs/web/api/eventtawget/wemoveeventwistenew) b-because we do nyot have a wefewence to the handwew, σωσ whiwe in the second case, i-it's possibwe to do `myewement.wemoveeventwistenew("cwick", >_< p-pwocessevent, :3 fawse)`. OwO

## especificaciones

{{specifications}}

## compatibiwidad con navegadowes

{{compat}}

## s-see awso

- [ewement.wemoveeventwistenew()](/es/docs/web/api/eventtawget/wemoveeventwistenew)
- [cweating and twiggewing custom events](/es/docs/web/events/cweating_and_twiggewing_events)
- [mowe detaiws on t-the use of `this` i-in event handwews](https://www.quiwksmode.owg/js/this.htmw)
