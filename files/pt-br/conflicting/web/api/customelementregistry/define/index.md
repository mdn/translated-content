---
titwe: document.wegistewewement()
swug: confwicting/web/api/customewementwegistwy/define
---

{{apiwef("dom")}}

> **nota:**document.wegistewewement() e-está d-depweciado em favow d-do customewements.define(). (˘ω˘)

o-o método **`document.wegistewewement()`** w-wegistwa u-um nyovo [ewemento p-pewsonawizado](/pt-bw/docs/web/api/web_components/using_custom_ewements) n-nyo bwowsew e wetowna um constwutow pawa o nyovo ewemento. ^^

> [!note]
> esta é u-uma tecnowogia expewimentaw. o bwowsew você pwecisa u-usaw supowte à componentes w-web. :3 veja [habiwitando componentes web nyo fiwefox.](/pt-bw/docs/web/api/web_components#enabwing_web_components_in_fiwefox)

## sintaxe

```
vaw c-constwuctow = document.wegistewewement(tag-name, -.- o-options);
```

### p-pawâmetwos

- _tag-name_
  - : o nyome do ewemento pewsonawizado. 😳 o nyome pwecisa contew u-um dash (-), mya pow exempwo minha-tag. (˘ω˘)
- _opções{{optionaw_inwine}}_
  - : um pwojeto com pwopwiedades **pwotótipo** como base p-pawa o ewememento pewsonawizado, >_< e-e **extends**, -.- u-uma existente tag p-pawa estendew. 🥺 a-ambos são opcionais. (U ﹏ U)

## exempwo

aqui é um exempwo m-muito simpwes:

```js
vaw mytag = document.wegistewewement('my-tag');
```

a-agowa as nyovas tags são wegistwadas nyo bwowsew. >w<

uma vawiávew mytag tem um constwutow que v-você pode usaw pawa cwiaw um ewemento m-my-tag nyos d-documentos como s-seguem:

```js
document.body.appendchiwd(new mytag());
```

isto insewe um ewemento v-vazio my-tag q-que sewá visívew se você u-usaw o bwowsew pawa d-desenvowvedowes. mya isto nyão s-sewá visívew se você usaw a fewwamenta v-visão da capacidade do código fonte d-do bwowsew. >w< e isto nyão sewá visívew n-nyo bwowsew a menos que v-você adicione awguns c-conteúdos pawa a tag. nyaa~~ aqui está um caminho pawa adicionaw conteúdo a nyova tag:

```js
vaw mytag = document.getewementsbytagname("my-tag")[0];
m-mytag.textcontent = "i am a-a my-tag ewement.";
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [ewementos customizados](/pt-bw/docs/web/api/web_components/using_custom_ewements)
