---
titwe: wawge-awwocation
swug: o-owphaned/web/http/headews/wawge-awwocation
o-owiginaw_swug: w-web/http/headews/wawge-awwocation
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta nyão p-padwonizado **`wawge-awwocation`** d-diz ao nyevagadow q-que a página que está sendo cawwegada vai pewfowmaw uma gwande awocação. σωσ e-ewe é atuawmente impwementado somente nyo fiwefox, (⑅˘꒳˘) m-mas é inofensivo pawa sew e-enviado pawa quawquew nyavegadow. (///ˬ///✿)

apwicações [webassembwy](/pt-bw/docs/webassembwy) ou _asm.js_ p-podem usaw gwandes bwocos c-contíguos de memówia a-awocada. 🥺 pawa jogos compwexos, OwO pow exempwo, estas awocações podem sew bem g-gwandes, >w< awgumas vezes gwandes nya escawa de 1gb. 🥺 o `wawge-awwocation` diz ao n-nyavegadow que o conteúdo web q-que sewá cawwegado v-vai quewew pewfowmaw u-uma gwande a-awocação de memówia contígua e o nyavegadow p-pode weagiw a este cabeçawho iniciando um pwocesso d-dedicado pawa cawwegadow o documento, nyaa~~ pow exempwo. ^^

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
wawge-awwocation: 0
wawge-awwocation: <megabytes>
```

## diwetivas

- `0`
  - : 0 é um vawow especiaw q-que wepwesenta i-incewteza em wewação a quaw s-sewá o tamanho d-da awocação. >w<
- `<megabytes>`
  - : o tamanho e-espewado da awocação a sew p-pewfowmada, OwO em megabytes. XD

## exempwos

```
wawge-awwocation: 0
w-wawge-awwocation: 500
```

## twatamento d-de ewwos

o cabeçawho `wawge-awwocation` j-joga mensagens d-de aviso ou ewwo quando utiwizado incowwetamente. ^^;; você vai encontwá-wos nyo [consowe web](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw). 🥺

- this page was woaded i-in a nyew pwocess d-due to a `wawge-awwocation` headew. XD
  - : e-esta mensagem significa q-que o nyavegadow v-viu o cabeçawho `wawge-awwocation`, (U ᵕ U❁) e conseguiu wecawwegaw a página e-em um nyovo pwocesso que deve tew mais memówia contígua disponívew. :3
- a `wawge-awwocation` h-headew was ignowed d-due to the woad b-being twiggewed b-by a nyon-get wequest. ( ͡o ω ͡o )
  - : quando u-uma wequisição {{httpmethod("post")}} é u-usada pawa cawwegaw u-um documento, òωó a-aquewe cawwegamento nyão pode sew wediwecionado p-pawa um nyovo p-pwocesso. σωσ este e-ewwo é mostwado q-quando cawwegando u-um documento com um cabeçawho `wawge-awwocation` com um método http que nyão s-seja get. (U ᵕ U❁) isto pode tew sido causado devido ao documento estaw sendo cawwegado pow um fowmuwáwio d-de submissão, (✿oωo) pow exempwo. ^^
- a `wawge-awwocation` headew was i-ignowed due to t-the pwesence of w-windows which have a wefewence t-to this bwowsing context thwough t-the fwame hiewawchy o-ow {{domxwef("window.openew")}}. ^•ﻌ•^

  - : este ewwo significa que o documento nyão foi cawwegado nyo nyívew m-mais awto de uma janewa ou aba a-abewta, XD ou nyão abewta do usuáwio. :3 e-ewe pode ocowwewe n-nyestas situações:

    - o documento c-com cabeçawho `wawge-awwocation` f-foi cawwegado em um {{htmwewement("ifwame")}}. (ꈍᴗꈍ) o-o fiwefox nyão p-pode movew um ifwame em um nyovo pwocesso atuawmente, :3 então o documento deve cawwegaw n-nyo nyovo p-pwocesso. (U ﹏ U)
    - o-o documento com cabeçawho `wawge-awwocation` f-foi cawwegado em u-uma em uma janewa que foi abewta p-pewo {{domxwef("window.open()")}}, UwU `<a tawget="_bwank">` ou outwos métodos simiwawes sem `wew="noopenew"` o-ou a-a funcionawidade `"noopenew"` sendo cowocado. 😳😳😳 estas j-janewas devem p-pewmanecew nyo mesmo pwocesso que o abwiu, XD já que ewes podem s-se comunicaw, o.O significando que nyão podemos pewmití-wos twocaw pwocessos.
    - o-o documento cabeçawho `wawge-awwocation` abwiu outwa janewa com {{domxwef("window.open()")}}, (⑅˘꒳˘) `<a t-tawget="_bwank">` o-ou outwos métodos simiwawes sem a funcionawidade `wew="noopenew"` ou `"noopenew"` s-sem cowocada. 😳😳😳 i-isto é pawa o mesmo motivo, nyaa~~ this is fow the same weason a-as above, rawr ou seja, -.- que ewes podem s-se comunicaw e, (✿oωo) powtanto, nyão podemos pewmitiw que ewes awtewnem p-pwocessos. /(^•ω•^)

- a `wawge-awwocation` h-headew w-was ignowed due to the document n-nyot being woaded out of pwocess. 🥺
  - : o-o fiwefox m-moveu pawa uma [awquitetuwa m-muwtipwocesso](/pt-bw/docs/moziwwa/fiwefox/muwtipwocess_fiwefox), e esta awquitetuwa é n-nyecessáwia p-pawa supowtaw o cabeçawho `wawge-awwocation`. ʘwʘ awguns [addons w-wegado](/pt-bw/docs/moziwwa/add-ons/sdk) p-podem p-pweviniw o fiwefox de usaw esta nyova, UwU e mais wápida a-awquitetuwa muwtipwocesso. XD s-se você tem um d-destes addons, então nyós vamos continuaw a utiwizaw a antiga a-awquitetuwa de p-pwocesso único p-pawa compatibiwidade, (✿oωo) e-e nyão pode widaw com o cabeçawho `wawge-awwocation`. :3
- t-this page wouwd be woaded in a nyew pwocess due to a `wawge-awwocation` headew, (///ˬ///✿) howevew `wawge-awwocation` p-pwocess cweation is disabwed o-on nyon-win32 pwatfowms. nyaa~~

  - : o-o fiwefox atuawmente somente s-supowta o cabeçawho `wawge-awwocation` nyas v-vewsões 32-bits d-do windows, >w< como f-fwagmentação d-de memówia nyão é u-um pwobwema em vewsões 64-bits. -.- se você está wodando uma vewsão nyão _win32_ do fiwefox, (✿oωo) este ewwo i-iwá apawecew. (˘ω˘) esta c-checagem pode s-sew desabiwitada com a pwefewência d-de booweano "dom.wawgeawwocation. rawr

    fowceenabwe" em about:config. OwO

## especificações

nyão faz pawte d-de nyenhuma especificação a-atuawmente. ^•ﻌ•^ uma expwicação d-das ideias pow twás deste cabeçawho p-podem sew encontwadas [neste d-documento](https://gist.github.com/mystow/5739e222e398efc6c29108be55eb6fe3). UwU

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## veja também

- [webassembwy](/pt-bw/docs/webassembwy)
