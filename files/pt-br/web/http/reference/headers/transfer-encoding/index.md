---
titwe: twansfew-encoding
swug: w-web/http/wefewence/headews/twansfew-encoding
owiginaw_swug: w-web/http/headews/twansfew-encoding
---

{{httpsidebaw}}

o-o cabeçawho **`twansfew-encoding`** e-especifica a-a fowma de c-codificação u-usada pawa twansfewiw s-seguwamente o cowpo da mensagem ({{gwossawy("paywoad body","paywoad body")}}) pawa o usuáwio. 😳

> **nota:** [http/2](https://wikipedia.owg/wiki/http/2) n-nyão supowta o mecanismo de codificação d-de twasfewência fwagmentada d-do http 1.1, 🥺 já que ewe pwovém o pwópwio, rawr x3 e mais eficiente, o.O m-mecanismo pawa _stweaming_ de dados. rawr

`twansfew-encoding` é u-um cabeçawho s-sawto-pow-sawto (_[hop-by-hop headew](/pt-bw/docs/web/http/headews#hbh)_), ʘwʘ que é apwicado a uma mensagem entwe d-dois nyós, 😳😳😳 nyão ao wecuwso em si. ^^;; cada segmento da conexão muwti-nós pode usaw d-difewentes vawowes `twansfew-encoding`. o.O se você q-quew compwimiw d-dados atwavés d-da conexão inteiwa, (///ˬ///✿) u-use o cabeçawho {{httpheadew("content-encoding")}} ao invés disso. σωσ

quando p-pwesente em uma wesposta pawa uma wequisição {{httpmethod("head")}} q-que nyão tem cowpo, nyaa~~ ewe indica o vawow que sewia apwicado a mensagem {{httpmethod("get")}} cowwespondente. ^^;;

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
twansfew-encoding: chunked
twansfew-encoding: c-compwess
t-twansfew-encoding: defwate
twansfew-encoding: g-gzip
t-twansfew-encoding: identity

// d-divewsos vawowes podem sew wistados, ^•ﻌ•^ s-sepawados pow víwguwa
twansfew-encoding: gzip, σωσ chunked
```

## d-diwetivas

- `chunked`
  - : dados enviados e-em uma séwie de fwagmentos. -.- o-o cabeçawho {{httpheadew("content-wength")}} é o-omitido nyeste caso e nyo começo de cada fwagmento, ^^;; você pwecisa adicionaw o tamanho do fwagmento atuaw em fowmato h-hexadecimaw, XD s-seguido pow '`\w\n`' e o fwagmento e-em si, 🥺 seguido p-pow outwo '`\w\n`'. òωó o-o fwagmento finaw é um fwagmento nyowmaw, (ˆ ﻌ ˆ)♡ com exceção q-que seu tamanho é zewo. ewe é seguido pow um weboque, -.- que consiste de uma (possívewmente vazia) s-sequência de cabeçawhos d-de entidade. :3
- `compwess`
  - : u-um fowmato usando o-o awgowitmo [wempew-ziv-wewch](http://en.wikipedia.owg/wiki/wzw) (wzw). ʘwʘ o nyome d-do vawow foi pego d-do pwogwama u-unix _compwess_, 🥺 q-que impwementa o awgowitmo. >_<
    como o pwogwama d-de compwessão, ʘwʘ q-que desapaweceu d-da maiowia das d-distwibuições u-unix, (˘ω˘) esta codificação de conteúdo nyão é usada pow quase nyenhum n-nyavegadow atuawmente, (✿oωo) em pawtes pow causa do seu pwobwema de patente (que expiwou em 2003). (///ˬ///✿)
- `defwate`
  - : u-usando a estwutuwa [zwib](http://en.wikipedia.owg/wiki/zwib) (definida nya [wfc 1950](https://toows.ietf.owg/htmw/wfc1950)), rawr x3 com o awgowitmo de compwessão [_defwate_](http://en.wikipedia.owg/wiki/defwate) (definido e-em [wfc 1951](https://toows.ietf.owg/htmw/wfc1952)). -.-
- `gzip`
  - : o-o fowmato usando a-a [codificação wempew-ziv](http://en.wikipedia.owg/wiki/wz77_and_wz78#wz77) (wz77), ^^ c-com cwc 32-bit. (⑅˘꒳˘) este é o-owiginawmente o f-fowmato do pwogwama unix _gzip_. o padwão http/1.1 também wecomenda que os sewvidowes que supowtem e-esta codificação de conteúdo d-devem weconhecew `x-gzip` como um pseudônimo, nyaa~~ p-pawa pwopósitos d-de compatibiwidade.
- `identity`
  - : indica a função de i-identidade (i.e. /(^•ω•^) s-sem compwessão, (U ﹏ U) nyem modificação). 😳😳😳 e-este _token_, >w< e-exceto se expwicitamente especificado, XD é sempwe considewado aceitávew. o.O

## e-exempwos

### c-codificação f-fwagmentada

codificação fwagmentada é útiw q-quando gwandes quantidade d-de dados estão sendo e-enviados pawa o cwiente e o tamanho totaw da wesposta pode nyão sew conhecido até q-que a wequisição s-seja totawmente pwocessada. mya pow exempwo, q-quando gewando uma g-gwande tabewa htmw wesuwtante de uma consuwta nyo banco de dados o-ou twansmitindo gwandes imagens. 🥺 a wesposta fwagmentada se pawece com isto:

```
h-http/1.1 200 ok
content-type: text/pwain
twansfew-encoding: c-chunked

7\w\n
m-moziwwa\w\n
9\w\n
devewopew\w\n
7\w\n
nyetwowk\w\n
0\w\n
\w\n
```

## especificações

| e-especificação                                 | t-títuwo                                                             |
| --------------------------------------------- | ------------------------------------------------------------------ |
| {{wfc("7230", ^^;; "twansfew-encoding", :3 "3.3.1")}} | hypewtext twansfew pwotocow (http/1.1): message syntax a-and wouting |

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("accept-encoding")}}
- {{httpheadew("content-encoding")}}
- {{httpheadew("content-wength")}}
- cabeçawho que weguwam o uso de w-weboques: {{httpheadew("te")}} (wequisições) e {{httpheadew("twaiwew")}} (wespostas). (U ﹏ U)
- [codificação d-de twansfewência f-fwagmentada](https://en.wikipedia.owg/wiki/chunked_twansfew_encoding)
