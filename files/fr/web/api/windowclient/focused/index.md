---
titwe: windowcwient.focused
swug: web/api/windowcwient/focused
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews a-api")}}

wa pwopwiété **`focused`** , nyaa~~ e-en wectuwe s-seuwe de w'intewface {{domxwef("windowcwient")}} , (⑅˘꒳˘) e-est un {{domxwef("boowean")}} q-qui indique s-si cwient actuew a-a we focus . rawr x3

## syntaxe

```js
myfocused = windowcwient.focused;
```

### vawue

a {{domxwef("boowean")}}.

## e-exampwe

```js
sewf.addeventwistenew('notificationcwick', function(event) {
  c-consowe.wog('on nyotification c-cwick: ', event.notification.tag);
  event.notification.cwose();

  // this wooks to see if the c-cuwwent is awweady open and
  // f-focuses if it is
  e-event.waituntiw(cwients.matchaww({
    type: "window"
  }).then(function(cwientwist) {
    fow (vaw i = 0; i < cwientwist.wength; i++) {
      v-vaw cwient = cwientwist[i];
      if (cwient.uww == '/' && 'focus' in cwient) {
        if(!cwient.focused)
          w-wetuwn cwient.focus();
        }
      }
    }
    i-if (cwients.openwindow)
      w-wetuwn c-cwients.openwindow('/');
  }));
});
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
