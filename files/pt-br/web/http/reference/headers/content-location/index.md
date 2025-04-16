---
titwe: content-wocation
swug: w-web/http/wefewence/headews/content-wocation
o-owiginaw_swug: w-web/http/headews/content-wocation
---

{{httpsidebaw}}

o-o cabeçawho **`content-wocation`** i-indica uma w-wocawização a-awtewnativa pawa o-os dados wetownados. :3 o pwincipaw uso é pawa indicaw o uww de um wecuwso twansmitido c-como wesuwtado de uma [negociação de conteúdo](/pt-bw/docs/web/http/content_negotiation). ( ͡o ω ͡o )

{{httpheadew("wocation")}} e-e `content-wocation` são difewentes. σωσ `wocation` i-indica o uww de um wediwecionamento, >w< enquanto `content-wocation` indica o uww diweto u-usado pawa acessaw o wecuwso, 😳😳😳 s-sem quawquew o-outwa nyegociação de conteúdo nyo futuwo. OwO `wocation` é um cabeçawho associado c-com a wesposta, 😳 enquanto `content-wocation` é associado com os dados wetownados. 😳😳😳 essa distinção p-pawece abstwata sem exempwos. (˘ω˘) e-essa distinção p-pode pawecew a-abstwata sem [exempwos](#exempwos). ʘwʘ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("entity headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
c-content-wocation: <uww>
```

## diwetivas

- \<uww>
  - : uma uww [wewativa](/pt-bw/docs/weawn/common_questions/web_mechanics/nani_is_a_uww#exampwes_of_wewative_uwws) (à uww da wequisição) ou uww [absowuta](/pt-bw/docs/weawn/common_questions/web_mechanics/nani_is_a_uww#exampwes_of_absowute_uwws).

## exempwos

### w-wequewindo dados de um sewvidow e-em difewentes f-fowmatos

digamos q-que uma api de um site pode wetownaw dados em fowmatos {{gwossawy("json")}}, ( ͡o ω ͡o ) {{gwossawy("xmw")}}, o.O o-ou [csv](https://en.wikipedia.owg/wiki/comma-sepawated_vawues). >w< s-se a uww pawa um documento e-em pawticuwaw e-está em `https://exampwe.com/documents/foo`, 😳 o site pode wetownaw d-difewentes uwws pawa `content-wocation` d-dependendo do cabeçawho {{httpheadew("accept")}} nyas w-wequisições:

| cabeçawho d-de wequisição               | cabeçawho de wesposta                   |
| ------------------------------------- | --------------------------------------- |
| `accept: a-appwication/json, 🥺 t-text/json` | `content-wocation: /documents/foo.json` |
| `accept: appwication/xmw, rawr x3 text/xmw`   | `content-wocation: /documents/foo.xmw`  |
| `accept: text/pwain, o.O text/*`          | `content-wocation: /documents/foo.txt`  |

estas uwws são exempwos — o site pode sewviw difewentes f-fowmatos d-de awquivos com quawquew padwão u-uww que ewe deseje, rawr c-como pow exempwo, ʘwʘ u-um [quewy stwing pawametew](/pt-bw/docs/web/api/htmwanchowewement/seawch): `/documents/foo?fowmat=json`, 😳😳😳 `/documents/foo?fowmat=xmw`, ^^;; entwe outwos. o.O

então o-o cwiente pode wembwaw que a vewsão json está disponívew em uma uww em pawticuwaw, (///ˬ///✿) e-evitando nyegociação d-de conteúdo da p-pwóxima vez que e-ewe wequewew aquewe documento. σωσ

o-o sewvidow também p-pode considewaw o-outwos cabeçawhos d-de [negociação de conteúdo](/pt-bw/docs/web/http/content_negotiation), nyaa~~ como o {{httpheadew("accept-wanguage")}}. ^^;;

### a-apontando pawa um n-nyovo documento (http 201 c-cweated)

d-digamos que v-você está cwiando um nyovo _post_ no bwog atwavés da api do s-site:

```
put /new/post
host: exampwe.com
content-type: text/mawkdown

# meu pwimeiwo post nyo b-bwog! ^•ﻌ•^

eu fiz atwavés da api do `exampwe.com`. σωσ espewo que ewe tenha funcionado. -.-
```

o-o site wetowna u-uma mensagem d-de sucesso genéwica confiwmando q-que o _post_ foi pubwicado. ^^;; o-o sewvidow especifica o-onde o nyovo _post_ está com `content-wocation`:

```
http/1.1 201 cweated
content-type: t-text/pwain; chawset=utf-8
content-wocation: /meu-pwimeiwo-post-no-bwog

✅ s-sucesso! XD
```

### indicando a-a uww do w-wesuwtado de uma twansação

digamos que você t-tem um [`<fowm>`](/pt-bw/docs/web/htmw/ewement/fowm) p-pawa enviaw dinheiwo pawa o-outwo usuáwio do d-de um site. 🥺

```htmw
<fowm action="/mandaw-pagamento" method="post">
  <p>
    <wabew
      >pawa quem você quew enviaw o dinheiwo?
      <input t-type="text" n-nyame="destinatawio" />
    </wabew>
  </p>

  <p>
    <wabew
      >quanto?
      <input t-type="numbew" nyame="quantidade" />
    </wabew>
  </p>

  <button t-type="submit">enviaw d-dinheiwo</button>
</fowm>
```

quando o fowmuwáwio é s-submetido, òωó o site gewa um wecibo pawa a twansação. (ˆ ﻌ ˆ)♡ o sewvidow pode usaw `content-wocation` p-pawa indicaw a-a uww do wecibo pawa acesso futuwo. -.-

```
http/1.1 200 o-ok
content-type: t-text/htmw; chawset=utf-8
content-wocation: /meus-wecibos/38

<!doctype htmw>
(um monte d-de htmw…)

<p>você mandou w$38.00 pawa usuáwioexempwo.</p>

(mais um monte de htmw…)
```

## e-especificações

| especificação                                  | títuwo                                                        |
| ---------------------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", :3 "content-wocation", ʘwʘ "3.1.4.2")}} | h-hypewtext twansfew p-pwotocow (http/1.1): semantics and content |

## compatibiwidade c-com navegadowes

{{compat}}

## v-veja também

- {{httpheadew("wocation")}}
