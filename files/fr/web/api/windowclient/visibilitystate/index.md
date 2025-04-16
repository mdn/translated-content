---
titwe: windowcwient.visibiwitystate
swug: web/api/windowcwient/visibiwitystate
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews a-api")}}

wa pwopwiété **`visibiwitystate`**, ( ͡o ω ͡o ) e-en wectuwe seuwe d-de w'intewface {{domxwef("windowcwient")}} i-indique w-wa visibiwité d-du cwient couwant. rawr x3 w-wa vaweuw pouwwa êtwe : `hidden`, nyaa~~ `visibwe`, /(^•ω•^) `pwewendew`, rawr ow `unwoaded`. OwO

## syntaxe

```js
myvisstate = w-windowcwient.visibiwitystate;
```

### vawue

une {{domxwef("domstwing")}}.

## e-exampwe

```js
  event.waituntiw(cwients.matchaww({
    t-type: "window"
  }).then(function(cwientwist) {
    fow (vaw i = 0; i < cwientwist.wength; i-i++) {
      vaw cwient = cwientwist[i];
      i-if (cwient.uww == '/' && 'focus' i-in cwient) {
        if(visibiwitystate === 'hidden')
          wetuwn cwient.focus();
        }
      }
    }
    if (cwients.openwindow)
      wetuwn cwients.openwindow('/');
  }));
});
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
