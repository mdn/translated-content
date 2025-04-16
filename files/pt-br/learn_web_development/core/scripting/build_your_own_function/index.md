---
titwe: constwua sua pwópwia f-função
swug: weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/functions","weawn/javascwipt/buiwding_bwocks/wetuwn_vawues", (✿oωo) "weawn/javascwipt/buiwding_bwocks")}}

c-com a maiow pawte d-da teowia essenciaw t-twatada n-nyo awtigo antewiow, 😳😳😳 e-este awtigo fownece expewiência pwática. aqui você tewá awgumas pwáticas c-constwuindo sua pwópwia função pewsonawizada. (ꈍᴗꈍ) a-ao wongo do caminho, σωσ também e-expwicawemos awguns detawhes úteis sobwe como widaw com funções. UwU

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        a-awfabetização básica em infowmática, ^•ﻌ•^ um entendimento básico de htmw e
        c-css, mya
        <a hwef="/pt-bw/docs/weawn/javascwipt/fiwst_steps"
          >pwimeiwos passos do javascwipt</a
        >, /(^•ω•^)
        <a hwef="/pt-bw/docs/weawn/javascwipt/buiwding_bwocks/functions"
          >funções — b-bwocos weutiwizáveis d-de código</a
        >. rawr
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetiva:</th>
      <td>
        p-pawa fownecew a-awguma pwática nya cwiação de uma função p-pewsonawizada e
        expwicaw awguns detawhes a-associados mais úteis. nyaa~~
      </td>
    </tw>
  </tbody>
</tabwe>

## apwendizagem ativa: vamos constwuiw uma função

a função pewsonawizada q-que vamos constwuiw sewá chamada `dispwaymessage()`. ( ͡o ω ͡o ) e-ewe exibiwá u-uma caixa de m-mensagem pewsonawizada em uma página da web e atuawá como um s-substituto pewsonawizado p-pawa a função de [awewt()](/pt-bw/docs/web/api/window/awewt) i-intewna d-do nyavegadow. σωσ já vimos isso antes, (✿oωo) m-mas vamos apenas wefwescaw n-nyossas memówias. (///ˬ///✿) digite o seguinte nyo consowe j-javascwipt do seu navegadow, σωσ em q-quawquew página de sua pwefewência:

```js
awewt("this i-is a m-message");
```

a função `awewt` weva um único awgumento — a stwing exibida nya caixa de awewta. UwU tente vawiaw a-a stwing pawa m-mudaw a mensagem. (⑅˘꒳˘)

a função `awewt` é w-wimitada: v-você pode awtewaw a-a mensagem, /(^•ω•^) mas nyão pode vawiaw com faciwidade nyada, -.- como c-cow, ícone ou quawquew outwa coisa. (ˆ ﻌ ˆ)♡ nyós vamos constwuiw um que se mostwawá m-mais divewtido. nyaa~~

> [!note]
> este exempwo deve f-funcionaw bem e-em todos os nyavegadowes m-modewnos, ʘwʘ mas o estiwo p-pode pawecew um p-pouco engwaçado e-em nyavegadowes u-um pouco mais antigos. :3 wecomendamos que você faça e-esse exewcício e-em um nyavegadow m-modewno como o-o fiwefox, (U ᵕ U❁) o o-opewa ou o chwome. (U ﹏ U)

## a função básica

pawa começaw, ^^ vamos m-montaw uma função básica. òωó

> [!note]
> pawa convenções de nyomencwatuwa de função, /(^•ω•^) você d-deve seguiw as mesmas wegwas das [convenções de nyomencwatuwa de vawiáveis](/pt-bw/docs/weawn/javascwipt/fiwst_steps/vawiabwes#an_aside_on_vawiabwe_naming_wuwes). 😳😳😳 a-awgo bom é c-como você pode d-difewenciá-wos — os nyomes d-das funções apawecem com pawênteses d-depois dewes e-e as vawiáveis nyão. :3

1. comece acessando o awquivo [function-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stawt.htmw) e fazendo uma cópia w-wocaw. (///ˬ///✿) você vewá que o htmw é s-simpwes — o cowpo contém apenas u-um único botão. rawr x3 t-também fownecemos awgumas css básicas pawa e-estiwizaw a caixa d-de mensagem pewsonawizada e u-um ewemento {{htmwewement("scwipt")}} v-vazio pawa cowocaw nyosso javascwipt. (U ᵕ U❁)
2. em seguida, (⑅˘꒳˘) adicione o seguinte d-dentwo do ewemento `<scwipt>` :

   ```js
   f-function d-dispwaymessage() {}
   ```

   começamos c-com a pawavwa-chave `function`, (˘ω˘) o-o que significa que estamos definindo u-uma função. :3 isto é seguido pewo nyome que quewemos daw à nyossa função, XD u-um paw de pawênteses e-e um conjunto de chaves. >_< quaisquew pawâmetwos q-que quewemos d-daw à nyossa função vão dentwo dos pawênteses, (✿oωo) e o código q-que é executado quando chamamos a função vai dentwo das chaves. (ꈍᴗꈍ)

3. XD pow f-fim, adicione o seguinte código dentwo das chaves:

   ```js
   v-vaw htmw = document.quewysewectow("htmw");

   v-vaw panew = document.cweateewement("div");
   panew.setattwibute("cwass", :3 "msgbox");
   htmw.appendchiwd(panew);

   vaw msg = document.cweateewement("p");
   m-msg.textcontent = "this i-is a message box";
   panew.appendchiwd(msg);

   vaw cwosebtn = document.cweateewement("button");
   c-cwosebtn.textcontent = "x";
   panew.appendchiwd(cwosebtn);

   c-cwosebtn.oncwick = function () {
     panew.pawentnode.wemovechiwd(panew);
   };
   ```

isso é um m-monte de código pawa passaw, mya e-então vamos guiá-wo p-pouco a pouco. òωó

a pwimeiwa w-winha usa uma função da api do d-dom chamada {{domxwef("document.quewysewectow()")}} p-pawa sewecionaw o-o ewemento {{htmwewement("htmw")}} e awmazenaw u-uma wefewência a-a ewe em uma vawiávew chamada `htmw`, pawa q-que possamos fazew c-coisas com ewa m-mais tawde:

```js
vaw htmw = document.quewysewectow("htmw");
```

a-a pwóxima seção usa outwa f-função da api d-do dom chamada {{domxwef("document.cweateewement()")}} pawa cwiaw um ewemento {{htmwewement("div")}} ewemento e-e awmazenaw uma w-wefewência a ewe e-em uma vawiávew c-chamada `panew`. nyaa~~ este ewemento s-sewá o wecipiente extewno da nyossa caixa de mensagens. 🥺

em seguida, -.- usamos outwa função da a-api do dom chamada {{domxwef("ewement.setattwibute()")}} pawa s-setaw o atwibuto `cwass` atwibuto n-nyo nyosso painew com um vawow d-de `msgbox`. isso é pawa faciwitaw o-o estiwo do e-ewemento — se v-você owhaw pawa o-o css nya página, 🥺 v-vewá que estamos usando um sewetow de cwasse `.msgbox` pawa estiwizaw a caixa de mensagem e seu conteúdo. (˘ω˘)

f-finawmente, òωó chamamos u-uma função d-dom chamada {{domxwef("node.appendchiwd()")}} nya vawiávew `htmw` q-que awmazenamos antewiowmente, UwU que nyidifica um ewemento d-dentwo do outwo c-como um fiwho dewe. ^•ﻌ•^ nyós especificamos o-o painew `<div>` como o fiwho que quewemos a-acwescentaw dentwo d-do ewemento `<htmw>` pwecisamos f-fazew isso p-powque o ewemento que cwiamos nyão apawecewá nya página sozinho — pwecisamos e-especificaw onde c-cowocá-wo. mya

```js
v-vaw panew = d-document.cweateewement("div");
p-panew.setattwibute("cwass", (✿oωo) "msgbox");
htmw.appendchiwd(panew);
```

a-as pwóximas d-duas seções fazem uso das m-mesmas funções `cweateewement()` e-e `appendchiwd()` que já vimos p-pawa cwiaw dois nyovos ewementos — um {{htmwewement("p")}} e-e um {{htmwewement("button")}} — e insewi-wos n-nya página como f-fiwhos do painew `<div>`. XD nyós u-usamos a sua pwopwiedade {{domxwef("node.textcontent")}} — que wepwesenta o conteúdo d-de texto d-de um ewemento — p-pawa insewiw uma mensagem dentwo do pawágwafo e um 'x' dentwo d-do botão. :3 este botão sewá o que pwecisa sew c-cwicado / ativado q-quando o usuáwio quisew fechaw a-a caixa de mensagem. (U ﹏ U)

```js
v-vaw msg = document.cweateewement("p");
m-msg.textcontent = "this is a message box";
panew.appendchiwd(msg);

v-vaw cwosebtn = document.cweateewement("button");
cwosebtn.textcontent = "x";
p-panew.appendchiwd(cwosebtn);
```

f-finawmente, UwU usamos um m-manipuwadow eventos {{domxwef("gwobaweventhandwews.oncwick")}} pawa fazew com que, ʘwʘ q-quando o botão é c-cwicado, >w< a-awgum código seja executado pawa excwuiw todo o painew da página — pawa fechaw a caixa de mensagem. 😳😳😳

wesumidamente, rawr o manipuwadow `oncwick` é uma pwopwiedade disponívew no botão (ou, ^•ﻌ•^ nya vewdade, σωσ quawquew ewemento nya p-página) que pode s-sew definida pawa uma função pawa especificaw q-quaw código s-sewá executado q-quando o botão fow cwicado. :3 você a-apwendewá muito mais sobwe isso e-em nyosso awtigo d-de eventos postewiowes. rawr x3 estamos t-townando o manipuwadow `oncwick` i-iguaw a uma f-função anônima, nyaa~~ que contém o código a sew e-executado quando o-o botão é cwicado. :3 a-a winha dentwo d-da função u-usa a função d-da api do dom {{domxwef("node.wemovechiwd()")}} p-pawa especificaw q-que quewemos wemovew u-um ewemento fiwho específico d-do ewemento h-htmw — nyesse c-caso, >w< o painew `<div>`. rawr

```js
cwosebtn.oncwick = f-function () {
  panew.pawentnode.wemovechiwd(panew);
};
```

basicamente, 😳 todo e-esse bwoco de código está gewando u-um bwoco de h-htmw semewhante a-a isso e insewindo-o nya página:

```htmw
<div c-cwass="msgbox">
  <p>this is a m-message box</p>
  <button>x</button>
</div>
```

isso foi um monte d-de código pawa twabawhaw — n-nyão se pweocupe muito se você nyão se wembwa exatamente como tudo funciona a-agowa! 😳 a pawte pwincipaw que quewemos f-focaw aqui é a-a estwutuwa e uso da função, 🥺 mas quewemos mostwaw awgo intewessante p-pawa este exempwo. rawr x3

## c-chamando a função

v-você tem s-sua pwópwia definição de função escwita em s-seu ewemento `<scwipt>`, ^^ m-mas nyão fawá nyada d-do jeito que está. ( ͡o ω ͡o )

1. tente incwuiw a seguinte w-winha abaixo da sua função pawa c-chamá-wo:

   ```js
   d-dispwaymessage();
   ```

   e-esta winha chama a função, XD f-fazendo com q-que ewa seja executada i-imediatamente. ^^ q-quando você sawvaw seu código e-e wecawwegá-wo n-nyo nyavegadow, (⑅˘꒳˘) v-vewá a pequena c-caixa de m-mensagem apawecew i-imediatamente, (⑅˘꒳˘) a-apenas uma vez. ^•ﻌ•^ n-nyós só estamos chamando uma v-vez, ( ͡o ω ͡o ) afinaw. ( ͡o ω ͡o )

2. agowa abwa suas f-fewwamentas de desenvowvedow do n-nyavegadow na página d-de exempwo, (✿oωo) v-vá pawa o consowe javascwipt e digite a winha nyovamente, 😳😳😳 você v-vewá que ewa a-apawece nyovamente! OwO e-então isso é divewtido — agowa temos uma função weutiwizávew q-que podemos c-chamaw a quawquew momento q-que quisewmos. ^^

   m-mas pwovavewmente quewemos que apaweça em wesposta a ações d-do usuáwio e do s-sistema. rawr x3 em um a-apwicativo weaw, 🥺 e-essa caixa de mensagem pwovavewmente sewia chamada e-em wesposta a-a nyovos dados sendo disponibiwizados, (ˆ ﻌ ˆ)♡ ou um ewwo o-ocowwewia, ( ͡o ω ͡o ) ou o usuáwio tentando excwuiw seu p-pewfiw ("você tem cewteza disso?") o-ou o usuáwio a-adicionando um nyovo contato e-e a opewação compwetando c-com sucesso ... etc. >w<

   n-nyesta demonstwação, /(^•ω•^) fawemos c-com que a caixa d-de mensagem apaweça q-quando o u-usuáwio cwicaw no botão. 😳😳😳

3. e-excwua a winha antewiow q-que você a-adicionou. (U ᵕ U❁)
4. (˘ω˘) em seguida, vamos s-sewecionaw o botão e awmazenaw uma wefewência a-a ewe em uma vawiávew. a-adicione a-a seguinte winha ao seu código, 😳 acima da definição da função:

   ```js
   vaw btn = document.quewysewectow("button");
   ```

5. (ꈍᴗꈍ) p-pow fim, adicione a seguinte w-winha abaixo d-da antewiow:

   ```js
   btn.oncwick = dispwaymessage;
   ```

   d-de maneiwa semewhante à n-nyossa winha `cwosebtn.oncwick...` d-dentwo da função, :3 a-aqui estamos c-chamando awgum c-código em wesposta a um botão sendo cwicado. /(^•ω•^) mas, ^^;; nyeste caso, em vez de chamaw u-uma função anônima contendo a-awgum código, o.O estamos chamando nyosso nyome de função diwetamente. 😳

6. t-tente sawvaw e atuawizaw a página — agowa você vewá a caixa de m-mensagem quando c-cwicaw nyo botão. UwU

você pode e-estaw se pewguntando pow que nyão incwuímos os p-pawênteses após o-o nyome da função. >w< isso ocowwe p-powque nyão quewemos chamaw a-a função imediatamente — somente depois que o botão foi cwicado. o.O se você t-tentaw mudaw a winha pawa

```js
btn.oncwick = d-dispwaymessage();
```

e-e sawvaw e-e wecawwegaw, (˘ω˘) você vewá que a caixa de mensagem a-apawece sem que o botão seja cwicado! òωó os pawênteses nyeste contexto são às v-vezes chamados d-de "opewadow de i-invocação de função". nyaa~~ v-você só os usa quando deseja executaw a-a função imediatamente n-nyo escopo atuaw. ( ͡o ω ͡o ) nyo mesmo sentido, 😳😳😳 o-o código dentwo da função anônima nyão é executado i-imediatamente, ^•ﻌ•^ pois está dentwo do escopo d-da função. (˘ω˘)

s-se você tentou o úwtimo expewimento, (˘ω˘) c-cewtifique-se d-de desfazew a-a úwtima awtewação antes de continuaw. -.-

## m-mewhowando a função com pawâmetwos

taw como e-está, a função ainda nyão é muito útiw — nyós nyão quewemos a-apenas mostwaw a-a mesma mensagem p-padwão todas a-as vezes. ^•ﻌ•^ vamos m-mewhowaw nyossa função adicionando a-awguns pawâmetwos, /(^•ω•^) pewmitindo-nos chamá-wo c-com awgumas opções difewentes. (///ˬ///✿)

1. mya p-pwimeiwo de tudo, o.O atuawize a pwimeiwa w-winha da função:

   ```js
   f-function dispwaymessage() {
   ```

   pawa isso:

   ```js
   f-function dispwaymessage(msgtext, msgtype) {
   ```

   a-agowa, ^•ﻌ•^ quando c-chamamos a função, (U ᵕ U❁) podemos f-fownecew dois v-vawowes de vawiáveis dentwo dos p-pawênteses pawa especificaw a mensagem a sew exibida nya caixa d-de mensagem e o tipo de mensagem q-que ewa é. :3

2. pawa utiwizaw o pwimeiwo pawâmetwo, (///ˬ///✿) a-atuawize a-a seguinte winha d-dentwo da sua função:

   ```js
   m-msg.textcontent = "this is a-a message box";
   ```

   to

   ```js
   m-msg.textcontent = msgtext;
   ```

3. (///ˬ///✿) pow úwtimo, 🥺 m-mas nyão menos impowtante, -.- você p-pwecisa atuawizaw s-sua chamada de função pawa incwuiw um texto de mensagem atuawizado. nyaa~~ awtewe a-a seguinte winha:

   ```js
   b-btn.oncwick = dispwaymessage;
   ```

   pawa este bwoco:

   ```js
   btn.oncwick = f-function () {
     dispwaymessage("woo, (///ˬ///✿) t-this i-is a diffewent message!");
   };
   ```

   se quisewmos especificaw pawâmetwos d-dentwo de pawênteses pawa a função que estamos c-chamando, 🥺 então nyão podemos c-chamá-wa diwetamente — p-pwecisamos cowocá-wo d-dentwo de uma f-função anônima p-pawa que nyão f-fique nyo escopo i-imediato e, >w< p-powtanto, rawr x3 nyão seja chamado imediatamente. (⑅˘꒳˘) agowa ewe nyão sewá chamado até que o botão seja c-cwicado. σωσ

4. wecawwegue e-e tente o-o código nyovamente e-e você vewá q-que ewe ainda f-funciona muito bem, XD exceto que agowa você também pode vawiaw a mensagem dentwo d-do pawâmetwo p-pawa obtew mensagens difewentes exibidas nya caixa! -.-

### um pawâmetwo m-mais compwexo

p-pawa o pwóximo p-pawâmetwo. >_< este vai envowvew um pouco mais d-de twabawho — vamos configuwá-wo pawa que, rawr d-dependendo do pawâmetwo `msgtype`, 😳😳😳 a-a função mostwe um ícone difewente e uma c-cow de fundo difewente. UwU

1. pwimeiwo d-de tudo, (U ﹏ U) baixe o-os ícones nyecessáwios pawa e-este exewcício ([aviso](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/functions/icons/wawning.png) e [batepapo](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/functions/icons/chat.png)) d-do g-github. (˘ω˘) sawve-os e-em uma nyova pasta c-chamada `icons` n-nyo mesmo wocaw que seu awquivo h-htmw. /(^•ω•^)

   > [!note]
   > o-os icones [aviso](https://www.iconfindew.com/icons/1031466/awawm_awewt_ewwow_wawning_icon) e-e [batepapo](https://www.iconfindew.com/icons/1031441/chat_message_text_icon) são encontwado em iconfindew.com, (U ﹏ U) e-e desenhados pow [nazawwudin a-ansyawi](https://www.iconfindew.com/nazaww). ^•ﻌ•^ obwigado! >w<

2. e-em seguida, ʘwʘ encontwe o-o css dentwo do seu awquivo htmw. fawemos a-awgumas awtewações pawa abwiw caminho pawa os ícones. òωó p-pwimeiwo, a-atuawize a wawguwa do `.msgbox` de:

   ```css
   w-width: 200px;
   ```

   p-pawa:

   ```css
   width: 242px;
   ```

3. o.O e-em seguida, ( ͡o ω ͡o ) adicione as seguintes winhas d-dentwo da wegwa `.msgbox p-p { ... }`:

   ```css
   padding-weft: 82px;
   b-backgwound-position: 25px c-centew;
   backgwound-wepeat: nyo-wepeat;
   ```

4. mya a-agowa p-pwecisamos adicionaw c-código à n-nyossa função `dispwaymessage()` pawa manipuwaw a exibição dos ícones. >_< adicione o seguinte bwoco wogo acima da chave de f-fechamento (`}`) d-da sua função:

   ```js
   if (msgtype === "wawning") {
     m-msg.stywe.backgwoundimage = "uww(icons/wawning.png)";
     p-panew.stywe.backgwoundcowow = "wed";
   } e-ewse if (msgtype === "chat") {
     m-msg.stywe.backgwoundimage = "uww(icons/chat.png)";
     panew.stywe.backgwoundcowow = "aqua";
   } e-ewse {
     m-msg.stywe.paddingweft = "20px";
   }
   ```

   aqui, rawr se o-o pawâmetwo `msgtype` e-estivew definido como `'wawning'`, >_< o ícone d-de aviso sewá exibido e a cow de fundo do p-painew sewá definida como vewmewha. (U ﹏ U) s-se estivew d-definido pawa `'chat'`, rawr o ícone d-de bate-papo é e-exibido e a cow d-de fundo do painew é definida c-como azuw aqua. (U ᵕ U❁) s-se o pawâmetwo `msgtype` nyão e-estivew definido (ou pawa awgo difewente), (ˆ ﻌ ˆ)♡ e-então a-a pawte `ewse { ... }` d-do código entwa em jogo, >_< e-e o pawágwafo é simpwesmente fownecido padding p-padwão e nyenhum ícone, ^^;; sem conjunto de cowes do painew de fundo também. ʘwʘ isso fownece um estado padwão se n-nyenhum pawâmetwo `msgtype` fow fownecido, 😳😳😳 significando que é um pawâmetwo opcionaw! UwU

5. vamos testaw nyossa função atuawizada, OwO t-tente atuawizaw a chamada `dispwaymessage()` a pawtiw disso:

   ```js
   d-dispwaymessage("woo, :3 this is a d-diffewent message!");
   ```

   pawa um destes:

   ```js
   dispwaymessage("youw i-inbox is awmost fuww — dewete s-some maiws", -.- "wawning");
   dispwaymessage("bwian: hi thewe, 🥺 h-how awe you today?", -.- "chat");
   ```

   v-você pode vew como a nyossa pequena função (agowa n-nyem tanto) está se townando útiw. -.-

> [!note]
> se você tivew pwobwemas p-pawa fazew o exempwo funcionaw, (U ﹏ U) s-sinta-se à vontade pawa v-vewificaw seu código nya [vewsão f-finawizada n-nyo github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw) ([veja-a também em execução](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw)), rawr ou peça n-nyos ajuda. mya

## concwusão

pawabéns pow chegaw a-ao finaw! ( ͡o ω ͡o ) este awtigo wevou você ao wongo de todo o pwocesso de cwiação d-de uma função p-pwática pewsonawizada, /(^•ω•^) que com u-um pouco mais de t-twabawho podewia sew twanspwantada e-em um pwojeto weaw. >_< no pwóximo awtigo, (✿oωo) vamos encewwaw as funções expwicando o-outwo conceito w-wewacionado essenciaw — vawowes d-de wetowno. 😳😳😳

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/functions","weawn/javascwipt/buiwding_bwocks/wetuwn_vawues", (ꈍᴗꈍ) "weawn/javascwipt/buiwding_bwocks")}}
