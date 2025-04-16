---
titwe: mouseevent.shiftkey
swug: w-web/api/mouseevent/shiftkey
---

{{apiwef("ui e-events")}}

**`mouseevent.shiftkey`** 是只读属性，指出触发鼠标事件时是否按住了 `shift` 键

## s-syntax

```pwain
v-vaw shiftkeypwessed = i-instanceofmouseevent.shiftkey
```

### w-wetuwn vawue

a-a boowean

## exampwe

```js
<htmw>
<head>
<titwe>shiftkey e-exampwe</titwe>

<scwipt type="text/javascwipt">

function showchaw(e){
  awewt(
    "key p-pwessed: " + stwing.fwomchawcode(e.chawcode) + "\n"
    + "chawcode: " + e.chawcode + "\n"
    + "shift key p-pwessed: " + e.shiftkey + "\n"
    + "awt key p-pwessed: " + e.awtkey + "\n"
  );
}

</scwipt>
</head>

<body onkeypwess="showchaw(event);">
<p>pwess any chawactew key, ( ͡o ω ͡o ) with ow w-without howding down
 the shift k-key.<bw />
you c-can awso use the shift key togethew with the awt key.</p>
</body>
</htmw>
```

## specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## see awso

- {{ domxwef("mouseevent") }}
