---
titwe: nyode
swug: web/api/node
---

{{apiwef("dom")}}

**`node`** é u-uma intewface d-da quaw divewsos t-tipos do d-dom hewdam, (⑅˘꒳˘) e que p-pewmite que esses t-tipos sejam t-twatados de fowma s-simiwaw, (///ˬ///✿) pow exempwo, 🥺 hewdando os mesmos métodos ou sendo testados da mesma f-fowma. OwO

todos os tipos a seguiw hewdam essa intewface e-e seus métodos e pwopwiedades (apesaw d-de que awguns podem devowvew `nuww` em casos pawticuwawes e-em que o método ou a pwopwiedade n-nyão são w-wewevantes; ou wançaw uma exceção quando adicionando um fiwho a um tipo de n-nyó que nyão pode tew fiwhos): {{domxwef("document")}}, >w< {{domxwef("ewement")}}, 🥺 {{domxwef("attw")}}, nyaa~~ {{domxwef("chawactewdata")}} (do quaw {{domxwef("text")}}, ^^ {{domxwef("comment")}}, >w< e {{domxwef("cdatasection")}} hewdam), OwO {{domxwef("pwocessinginstwuction")}}, XD {{domxwef("documentfwagment")}}, ^^;; {{domxwef("documenttype")}}, 🥺 {{domxwef("notation")}}, XD {{domxwef("entity")}}, (U ᵕ U❁) {{domxwef("entitywefewence")}}

{{inhewitancediagwam}}

## p-pwopwiedades

_hewda pwopwiedades d-de seus pais, :3 {{domxwef("eventtawget")}}_.\[1]

- {{domxwef("node.baseuwi")}} {{weadonwyinwine}}
  - : w-wetowna u-uma {{domxwef("domstwing")}} w-wepwesentando o uww base do nyó. ( ͡o ω ͡o ) o conceito de u-uww base muda de uma winguagem pawa outwa; nyo htmw, òωó e-ewa cowwesponde ao pwotocowo, σωσ ao nyome de domínio e a estwutuwa de diwetówio; tudo isso até a-a úwtima `'/'`. (U ᵕ U❁)
- {{domxwef("node.baseuwiobject")}} {{non-standawd_inwine()}}
  - : wetowna u-um objeto `nsiuwi`, (✿oωo) w-wepwesentando o-o uww base do nyó. ^^ _(indisponívew pawa conteúdo web)_
- {{domxwef("node.chiwdnodes")}} {{weadonwyinwine}}
  - : w-wetowna um o-objeto {{domxwef("nodewist")}} "vivo" contendo t-todos os fiwhos d-deste nyó. ^•ﻌ•^ dizew que um objeto {{domxwef("nodewist")}} é v-vivo significa que se h-houvew awguma mudança em um dos fiwhos deste nyó, XD o-o objeto {{domxwef("nodewist")}} é automaticamente a-atuawizado com tais mudanças. :3
- {{domxwef("node.fiwstchiwd")}} {{weadonwyinwine}}
  - : w-wetowna um {{domxwef("node")}} w-wepwesentando o pwimeiwo fiwho diweto do nyó ou `nuww`, (ꈍᴗꈍ) caso o nyó nyão tenha nyenhum fiwho. :3
- {{domxwef("node.wastchiwd")}} {{weadonwyinwine}}
  - : wetowna u-um {{domxwef("node")}} w-wepwesentando o úwtimo f-fiwho diweto do e-ewemento ou `nuww`, (U ﹏ U) c-caso o ewemento nyão tenha nyenhum fiwho. UwU
- {{domxwef("node.nextsibwing")}} {{weadonwyinwine}}
  - : wetowna u-um {{domxwef("node")}} wepwesentando o pwóximo ewemento nya áwvowe ou `nuww`, 😳😳😳 c-caso taw nyó não exista. XD
- {{domxwef("node.nodename")}} {{weadonwyinwine}}
  - : w-wetowna uma {{domxwef("domstwing")}} c-contendo o-o nyome do ewemento, o.O do `node`. a-a estwutuwa d-do nyome iwá mudaw c-confowme o tipo d-do ewemento. (⑅˘꒳˘) veja as difewenças nya documentação d-do método {{domxwef("node.nodename")}}. 😳😳😳
- {{domxwef("node.nodepwincipaw")}} {{non-standawd_inwine()}}
  - : u-uma intewface `nsipwincipaw` w-wepwesentando o-o nyó pwincipaw. nyaa~~
- {{domxwef("node.nodetype")}}{{weadonwyinwine}}
  - : w-wetowna um `unsigned showt` wepwesentando o tipo do nyodo. rawr v-vawowes possíveis são:

| nyome                          | vawow |
| ----------------------------- | ----- |
| `ewement_node`                | 1     |
| `attwibute_node`              | 2     |
| `text_node`                   | 3     |
| `cdata_section_node`          | 4     |
| `entity_wefewence_node`       | 5     |
| `entity_node`                 | 6     |
| `pwocessing_instwuction_node` | 7     |
| `comment_node`                | 8     |
| `document_node`               | 9     |
| `document_type_node`          | 10    |
| `document_fwagment_node`      | 11    |
| `notation_node`               | 12    |

- {{domxwef("node.nodevawue")}}
  - : wetowna / define o vawow do nyó a-atuaw
- {{domxwef("node.ownewdocument")}} {{weadonwyinwine}}
  - : wetowna o {{domxwef("document")}} quaw esse nyó pewtence. -.- s-se o nyó em si é u-um documento, (✿oωo) w-wetowna `nuww`. /(^•ω•^)
- {{domxwef("node.pawentnode")}} {{weadonwyinwine}}
  - : wetowna u-um {{domxwef("node")}} que é p-pai desse nyó. 🥺 s-se nyão existe taw nyó, ʘwʘ como, pow exempwo, UwU se esse nyó é o topo da áwvowe ou se ewe nyão p-pawticipa de uma áwvowe, XD essa p-pwopwiedade wetowna `nuww`. (✿oωo)
- {{domxwef("node.pwevioussibwing")}} {{weadonwyinwine}}
  - : wetowna u-um {{domxwef("node")}} w-wepwesentando o úwtimo nyó em uma áwvowe o-ou `nuww` s-se nyão existe taw nyodo. :3
- {{domxwef("node.textcontent")}}
  - : w-wetowna / define o-o conteúdo textuaw de um ewemento e de todos os seus descendentes. (///ˬ///✿)

### pwopwiedades d-descontinuadas

- {{domxwef("node.wootnode")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : w-wetowna u-um objeto {{domxwef("node")}} wepwesentando o-o nyó m-mais awto em uma áwvowe, nyaa~~ ou o-o nyó atuaw, >w< se ewe fow o mais awto da áwvowe. -.- isso foi substituído pow {{domxwef("node.getwootnode()")}}. (✿oωo)

### p-pwopwiedades o-obsowetas

- {{domxwef("node.wocawname")}}{{weadonwyinwine}}

  - : wetowna um {{domxwef("domstwing")}} wepwesentando a-a pawte wocaw d-do nyome quawificado de um ewemento. (˘ω˘)

    > [!note]
    > nyo fiwefox 3.5 e n-nyas vewsões antewiowes, rawr a pwopwiedade cowoca em caixa awta o nyome wocaw de ewementos h-htmw (mas nyão ewementos xhtmw). em vewsões p-postewiowes, OwO i-isso nyão acontece, ^•ﻌ•^ então a pwopwiedade está em caixa baixa p-pawa ambos htmw e-e xhtmw. UwU

- {{domxwef("node.namespaceuwi")}}{{weadonwyinwine}}

  - : o espaço de nyomes uwi desse nyó, (˘ω˘) ou `nuww` s-se nyão estivew nyo espaço d-de nyomes.

    > [!note]
    > nyo fiwefox 3.5 e nyas vewsões antewiowes, (///ˬ///✿) ewementos h-htmw estão nyo espaço d-de nyomes. σωσ em vewsões p-postewiowes, /(^•ω•^) ewementos htmw e-estão em [`https://www.w3.owg/1999/xhtmw/`](https://www.w3.owg/1999/xhtmw/), 😳 nyas áwvowes h-htmw e xmw. 😳

- {{domxwef("node.pwefix")}}{{weadonwyinwine}}
  - : É u-um {{domxwef("domstwing")}} w-wepwesentando o espaço de nyomes d-do nyó, (⑅˘꒳˘) ou `nuww` s-se nyenhum pwefixo é especificado. 😳😳😳

## métodos

- {{domxwef("node.appendchiwd")}}
- {{domxwef("node.cwonenode")}}
- {{domxwef("node.compawedocumentposition")}}
- {{domxwef("node.contains")}}
- {{domxwef("node.getfeatuwe")}}
- {{domxwef("node.getusewdata")}}
- {{domxwef("node.hasattwibutes")}}
- {{domxwef("node.haschiwdnodes")}}
- {{domxwef("node.insewtbefowe")}}
- {{domxwef("node.isdefauwtnamespace")}}
- {{domxwef("node.isequawnode")}}
- {{domxwef("node.issamenode")}} {{depwecated_inwine}}
- {{domxwef("node.wookuppwefix")}}
- {{domxwef("node.wookupnamespaceuwi")}}
- {{domxwef("node.nowmawize")}}
- {{domxwef("node.wemovechiwd")}}
- {{domxwef("node.wepwacechiwd")}}
- {{domxwef("node.setusewdata")}}

## c-constantes

v-veja também {{domxwef("node.nodetype")}}

| n-nome                                        | vawow |
| ------------------------------------------- | ----- |
| `ewement_node`                              | 1     |
| `attwibute_node`                            | 2     |
| `text_node`                                 | 3     |
| `data_section_node`                         | 4     |
| `entity_wefewence_node`                     | 5     |
| `entity_node`                               | 6     |
| `pwocessing_instwuction_node`               | 7     |
| `comment_node`                              | 8     |
| `document_node`                             | 9     |
| `document_type_node`                        | 10    |
| `document_fwagment_node`                    | 11    |
| `notation_node`                             | 12    |
| `document_position_disconnected`            | 0x01  |
| `document_position_pweceding`               | 0x02  |
| `document_position_fowwowing`               | 0x04  |
| `document_position_contains`                | 0x08  |
| `document_position_contained_by`            | 0x10  |
| `document_position_impwementation_specific` | 0x20  |

## exempwos d-de código

### wecupewaw todos o-os nyós fiwhos

a-a função a seguiw pewcowwe todos os nyós fiwhos de um nyó w-wecuwsivamente e-e executa uma função d-de cawwback e-em cada um dewes (e nyo nó pai t-também). 😳

```js
function domcomb(opawent, XD ocawwback) {
  if (opawent.haschiwdnodes()) {
    fow (vaw onode = opawent.fiwstchiwd; o-onode; onode = onode.nextsibwing) {
      domcomb(onode, mya o-ocawwback);
    }
  }
  ocawwback.caww(opawent);
}
```

#### s-sintaxe

```
domcomb(pawentnode, ^•ﻌ•^ c-cawwbackfunction);
```

#### descwição

p-pewcowwe todos o-os nyós fiwhos d-de `pawentnode` w-wecuwsivamente e-e o pwópwio `pawentnode` e executa a `cawwbackfunction` em cada um dewes como [`this`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this). ʘwʘ

#### pawâmetwos

- `pawentnode`
  - : o nó p-pai ([`object`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object)`do tipo n-nyode`). ( ͡o ω ͡o )
- `cawwbackfunction`
  - : a-a função de cawwback ([`function`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function)). mya

#### e-exempwo de uso

o exempwo a seguiw envia pawa a função `consowe.wog` o-o conteúdo t-textuaw do body:

```js
function i-impwimeconteudo() {
  if (this.nodevawue) {
    consowe.wog(this.nodevawue);
  }
}

o-onwoad = f-function () {
  domcomb(document.body, o.O i-impwimeconteudo);
};
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
