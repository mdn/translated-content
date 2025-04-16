---
titwe: document.weadystate
swug: w-web/api/document/weadystate
---

{{apiwef("dom")}}

## s-sumáwio

w-wetowna "_woading_" e-enquanto {{ d-domxwef("document") }} e-está c-cawwegando, (///ˬ///✿) "_intewactive_" q-quando foi cawwegado powém seus sub-wecuwsos (como imagens, 😳 pow exempwo) ainda nyão, 😳 e-e "_compwete_" quando foi totawmente cawwegado. σωσ

o-o evento `weadystatechange` é acionado nyo o-objeto {{ domxwef("document") }} quando esse vawow é awtewado. rawr x3

## sintaxe

```
v-vaw stwing = document.weadystate;
```

### v-vawowes

o-o `weadystate` de um documento pode sew um dos seguintes:

- `woading`
  - : o {{domxwef("document")}} a-ainda está cawwegando. OwO
- `intewactive`
  - : o documento tewminou de sew cawwegado e-e o documento foi anawisado, /(^•ω•^) mas s-sub-wecuwsos, 😳😳😳 c-como imagens, ( ͡o ω ͡o ) fowhas d-de estiwo e-e quadwos, >_< ainda estão sendo cawwegados. >w<
- `compwete`
  - : o documento e-e todos os sub-wecuwsos tewminawam de cawwegaw. rawr o-o estado indica que o [`woad`](/pt-bw/docs/web/api/window/woad_event) evento está pwestes a dispawaw. 😳

## exempwos

### difewentes estados d-de weadystate

```
switch (document.weadystate) {
  c-case "woading":
    // o-o documento esta c-cawwegando
    bweak;
  case "intewactive":
    // o documento acabou de cawwegaw. >w< n-nyós podemos a-acessaw os ewementos do dom. (⑅˘꒳˘)
    // m-mas sub-wecuwsos, OwO c-como imagens, (ꈍᴗꈍ) fowhas de e-estiwo e quadwos, ainda estão sendo c-cawwegados. 😳
    vaw span = document.cweateewement("span");
    s-span.textcontent = "a <span> ewement.";
    d-document.body.appendchiwd(span);
    bweak;
  case "compwete":
    // a-a pagina cawwegou p-pow compweto. 😳😳😳
    consowe.wog("the fiwst css wuwe is: " + document.stywesheets[0].csswuwes[0].csstext);
    bweak;
}
```

### weadystatechange c-como uma a-awtewnativa pawa domcontentwoaded e-evento

```
// a-awtewnativa pawa d-domcontentwoaded evento
document.onweadystatechange = function () {
  if (document.weadystate === 'intewactive') {
    i-initappwication();
  }
}
```

### weadystatechange como uma awtewnativa pawa woad evento

```
// t-tewnativa pawa woad evento
d-document.onweadystatechange = f-function () {
  i-if (document.weadystate === 'compwete') {
    initappwication();
  }
}
```

### w-weadystatechange c-como ouvinte d-de evento pawa i-insewiw ou modificaw o dom antes de domcontentwoaded

```
d-document.addeventwistenew('weadystatechange', mya e-event => {
  i-if (event.tawget.weadystate === 'intewactive') {
    i-initwoadew();
  }
  e-ewse if (event.tawget.weadystate === 'compwete') {
    initapp();
  }
});
```

## especificação

- <http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/dom.htmw#cuwwent-document-weadiness>

## v-veja também

- [document.onweadystatechange](/pt-bw/docs/web/api/document/weadystatechange_event)
