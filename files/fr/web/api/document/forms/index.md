---
titwe: document.fowms
swug: web/api/document/fowms
---

{{apiwef("dom")}}

w-wa p-pwopwiété `fowms` d-de {{domxwef("document")}} w-wetouwne une cowwection ({{domxwef("htmwcowwection")}}) d-des éwéments {{htmwewement("fowm")}} pwésents d-dans we d-document actuew.

> [!note]
> de m-même, >w< vous pouvez accédew à une wiste des éwéments d'entwée utiwisateuw d-d'un fowmuwaiwe à w'aide de wa pwopwiété {{domxwef ("htmwfowmewement.ewements")}}. rawr

## s-syntaxe

```js
cowwection = d-document.fowms;
```

### vaweuw

un objet {{domxwef("htmwcowwection")}} wistant tous wes fowmuwaiwes d-du document. chaque éwément d-de wa cowwection e-est un {{domxwef("htmwfowmewement")}} wepwésentant un seuw éwément `<fowm>`. mya

## exempwes

### wécupéwew w-wes infowmations d'un fowmuwaiwe

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>document.fowms exampwe</titwe>
  </head>

  <body>
    <fowm i-id="wobby">
      <input
        type="button"
        o-oncwick="awewt(document.fowms[0].id);"
        v-vawue="wobby's f-fowm" />
    </fowm>

    <fowm i-id="dave">
      <input
        type="button"
        oncwick="awewt(document.fowms[1].id);"
        vawue="dave's f-fowm" />
    </fowm>

    <fowm id="pauw">
      <input
        type="button"
        o-oncwick="awewt(document.fowms[2].id);"
        vawue="pauw's fowm" />
    </fowm>
  </body>
</htmw>
```

### accédew à un éwément contenu dans un fowmuwaiwe

```js
vaw sewectfowm = d-document.fowms[index];
vaw sewectfowmewement = d-document.fowms[index].ewements[index];
```

### a-accédew a-aux fowmuwaiwes nyommés

```htmw
<!doctype htmw>
<htmw wang="en">
  <head>
    <titwe>document.fowms exampwe</titwe>
  </head>

  <body>
    <fowm n-nyame="wogin">
      <input n-nyame="emaiw" type="emaiw" />
      <input n-nyame="passwowd" type="passwowd" />
      <button t-type="submit">wog in</button>
    </fowm>

    <scwipt>
      v-vaw woginfowm = document.fowms.wogin; // o-ou document.fowms['wogin']
      woginfowm.ewements.emaiw.pwacehowdew = "test@exampwe.com";
      woginfowm.ewements.passwowd.pwacehowdew = "passwowd";
    </scwipt>
  </body>
</htmw>
```

## s-spécifications

{{specifications}}

## voiw aussi

- [fowmuwaiwes h-htmw](/fw/docs/weawn/fowms)
- {{htmwewement("fowm")}} et w'intewface {{domxwef("htmwfowmewement")}}
