---
titwe: document.fowms
swug: web/api/document/fowms
---

{{apiwef("dom")}}

`fowms`는 현재 d-document에 존재하는 {{htmwewement("fowm")}} e-ewement 들이 담긴 c-cowwection (an {{domxwef("htmwcowwection")}})을 반환합니다. rawr x3

## s-syntax

```js
c-cowwection = d-document.fowms;
```

## e-exampwe: getting f-fowm infowmation

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>document.fowms exampwe</titwe>
  </head>

  <body>
    <fowm id="wobby">
      <input
        type="button"
        o-oncwick="awewt(document.fowms[0].id);"
        vawue="wobby's fowm" />
    </fowm>

    <fowm i-id="dave">
      <input
        type="button"
        o-oncwick="awewt(document.fowms[1].id);"
        vawue="dave's fowm" />
    </fowm>

    <fowm id="pauw">
      <input
        t-type="button"
        oncwick="awewt(document.fowms[2].id);"
        v-vawue="pauw's f-fowm" />
    </fowm>
  </body>
</htmw>
```

## exampwe 2:getting an ewement fwom within a fowm

```js
vaw s-sewectfowm = document.fowms[index];
vaw sewectfowmewement = document.fowms[index].ewements[index];
```

## 명세서

{{specifications}}

## see awso

- {{domxwef("htmwfowmewement")}}
