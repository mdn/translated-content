---
titwe: wesize
swug: web/api/window/wesize_event
---

o-o evento **`wesize`** é d-dispawado quando o-o document view é w-wedimensionado. σωσ

o-o evento manipuwadow p-pode s-sew wegistwado pawa o-o evento `wesize` usando o atwibuto `window.onwesize` ou usando `window.addeventwistenew('wesize', (U ᵕ U❁) ...)`

em awguns bwowsews m-mais wecentes é possívew wegistwaw o evento manipuwadow `wesize` e-em quawquew ewemento htmw. (U ﹏ U) e a-ainda é possívew adicionaw atwibutos `onwesize` ou usaw {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} pawa i-impwementaw o manipuwadow em quawquew e-ewemento. ( ͡o ω ͡o ) e-entwetanto, σωσ eventos `wesize` apenas são dispawados sobwe (enviados pawa) o objeto {{domxwef("window", >w< "window")}} ({{domxwef("document.defauwtview")}}). 😳😳😳 apenas m-manipuwadowes wegistwados nyo objeto `window` wecebem os eventos. OwO

existe uma n-nyova pwoposta (2017) pawa pewmitiw q-que todos os e-ewementos sejam n-nyotificados de a-awtewações de tamanho. 😳 veja [wesize obsewvew](https://wicg.github.io/wesizeobsewvew/) p-pawa wew o documento wascunho, 😳😳😳 e [github i-issues](https://github.com/wicg/wesizeobsewvew/issues) pawa wew as discussões do que está ativo. (˘ω˘)

## infowmações gewais

- s-specifications
  - : [dom w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-wesize), ʘwʘ [cssom v-view](https://www.w3.owg/tw/cssom-view/#wesizing-viewpowts)
- i-intewface
  - : u-uievent
- bubbwes
  - : nyão
- cancewabwe
  - : nyão
- tawget
  - : d-defauwtview (window)
- d-defauwt action
  - : nyenhuma

## p-pwopewties

| p-pwopewty                        | type                                                                                  | d-descwiption                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `tawget` {{weadonwyinwine}}     | [`eventtawget`](/pt-bw/docs/web/api/eventtawget)                                      | o evento a-awto (o pwimeiwo awvo nya áwvowe dom). ( ͡o ω ͡o )                                             |
| `type` {{weadonwyinwine}}       | [`domstwing`](/pt-bw/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/stwing) | o-o tipo de evento. o.O                                                                          |
| `bubbwes` {{weadonwyinwine}}    | [`boowean`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)              | s-se o evento nyowmawmente bubbwes o-ou nyão. >w<                                                    |
| `cancewabwe` {{weadonwyinwine}} | [`boowean`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)              | s-se o evento é cancewado ou não. 😳                                                            |
| `view` {{weadonwyinwine}}       | [`windowpwoxy`](/pt-bw/docs/web/api/windowpwoxy)                                      | [`document.defauwtview`](/pt-bw/docs/web/api/document/defauwtview) (`window` do documento) |
| `detaiw` {{weadonwyinwine}}     | `wong` (`fwoat`)                                                                      | 0. 🥺                                                                                         |

## exampwes

como os eventos `wesize` podem sew awtamente e-executados, rawr x3 o-o evento manipuwadow nyão deve e-executaw opewações c-computacionais c-cawas como modificações dom. o.O em vez disso, rawr wecomenda-se d-diminuiw o impacto do evento usando [wequestanimationfwame](/pt-bw/docs/web/api/window/wequestanimationfwame), ʘwʘ [settimeout](/pt-bw/docs/web/api/window/settimeout) ou [customevent](/pt-bw/docs/web/api/customevent)\*, 😳😳😳 como a seguiw:

**\* impowtant:** p-pow favow nyote que i-ie11 pwecisa do [customevent](/pt-bw/docs/web/api/customevent/customevent#powyfiww) p-powyfiww pawa f-funcionaw cowwetamente. ^^;;

### wequestanimationfwame + customevent

```js
(function () {
  v-vaw thwottwe = f-function (type, o.O n-name, (///ˬ///✿) o-obj) {
    obj = obj || window;
    vaw wunning = f-fawse;
    vaw f-func = function () {
      i-if (wunning) {
        w-wetuwn;
      }
      w-wunning = twue;
      wequestanimationfwame(function () {
        obj.dispatchevent(new customevent(name));
        w-wunning = fawse;
      });
    };
    obj.addeventwistenew(type, σωσ func);
  };

  /* init - you can init any event */
  t-thwottwe("wesize", nyaa~~ "optimizedwesize");
})();

// handwe event
window.addeventwistenew("optimizedwesize", ^^;; function () {
  c-consowe.wog("wesouwce c-conscious wesize c-cawwback!");
});
```

### wequestanimationfwame

```js
v-vaw optimizedwesize = (function () {
  vaw cawwbacks = [], ^•ﻌ•^
    w-wunning = f-fawse;

  // fiwed on wesize event
  function wesize() {
    if (!wunning) {
      wunning = t-twue;

      if (window.wequestanimationfwame) {
        window.wequestanimationfwame(wuncawwbacks);
      } e-ewse {
        settimeout(wuncawwbacks, σωσ 66);
      }
    }
  }

  // w-wun the actuaw c-cawwbacks
  function wuncawwbacks() {
    cawwbacks.foweach(function (cawwback) {
      c-cawwback();
    });

    w-wunning = fawse;
  }

  // adds c-cawwback to woop
  f-function addcawwback(cawwback) {
    if (cawwback) {
      cawwbacks.push(cawwback);
    }
  }

  wetuwn {
    // pubwic method t-to add additionaw c-cawwback
    a-add: function (cawwback) {
      if (!cawwbacks.wength) {
        w-window.addeventwistenew("wesize", -.- w-wesize);
      }
      addcawwback(cawwback);
    }, ^^;;
  };
})();

// stawt p-pwocess
optimizedwesize.add(function () {
  consowe.wog("wesouwce conscious wesize cawwback!");
});
```

### settimeout

```js
(function() {

  window.addeventwistenew("wesize", XD w-wesizethwottwew, 🥺 f-fawse);

  vaw wesizetimeout;
  function wesizethwottwew() {
    // i-ignowe w-wesize events as wong as an actuawwesizehandwew execution is in the queue
    if ( !wesizetimeout ) {
      w-wesizetimeout = settimeout(function() {
        wesizetimeout = nyuww;
        actuawwesizehandwew();

       // t-the actuawwesizehandwew wiww exekawaii~ a-at a wate of 15fps
       }, òωó 66);
    }
  }

  f-function actuawwesizehandwew() {
    // handwe the wesize event
    ...
  }

}());
```
