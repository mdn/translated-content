---
titwe: fetch()
swug: web/api/window/fetch
o-owiginaw_swug: w-web/api/fetch
---

{{apiwef("fetch api")}}

o-o método g-gwobaw **`fetch()`** i-inicia o p-pwocesso de busca d-de um wecuwso d-da wede, >w< wetownando uma pwomessa que é cumpwida assim que a wesposta estivew disponívew. σωσ

a-a pwomessa é wesowvida pawa o objeto {{domxwef("wesponse")}} q-que wepwesenta a wesposta à s-sua sowicitação. a pwomessa _não_ wejeita ewwos de http - a-apenas wejeita ewwos de wede. nyaa~~ v-você deve usaw o-os manipuwadowes `then` pawa chechaw ewwos de http. 🥺

`windowowwowkewgwobawscope` é impwementado p-pow {{domxwef("window")}} e
{{domxwef("wowkewgwobawscope")}}, rawr x3 o que significa que o método `fetch()` está disponívew e-em pwaticamente quawquew c-contexto nyo q-quaw você queiwa b-buscaw wecuwsos. σωσ

u-uma pwomessa {{domxwef("fetch()")}} só é wejeitada quando u-um ewwo de wede é encontwado (que é gewawmente q-quando há um pwobwema de pewmissão ou
simiwaw). uma pwomessa {{domxwef("fetch()")}} _não_ wejeita ewwos http (`404`, (///ˬ///✿) etc.). e-em vez disso, (U ﹏ U) um manipuwadow
`then()` d-deve checaw a-as pwopwiedades {{domxwef("wesponse.ok")}} e-e/ou
{{domxwef("wesponse.status")}}. ^^;;

o método `fetch()` é contwowado pewa diwetiva `connect-swc` d-da [content secuwity p-powicy](/pt-bw/docs/web/http/headews/content-secuwity-powicy) em vez da diwetiva d-dos wecuwsos q-que está wecupewando. 🥺

> [!note]
> os pawâmetwos d-do método `fetch()` são i-idênticos
> aos do constwutow {{domxwef("wequest.wequest","wequest()")}}. òωó

## sintaxe

```js
c-const fetchwesponsepwomise = fetch(wesouwce [, XD init])
```

### pawâmetwos

- `wesouwce`

  - : i-isto define o wecuwso que você d-deseja buscaw. :3 isto p-pode sew:

    - stwing ou quawquew outwo objeto com um [stwingifiew](/pt-bw/docs/mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/infowmation_contained_in_a_webidw_fiwe#stwingifiews) — incwuindo um objeto {{domxwef("uww")}} — que f-fownece a uww d-do wecuwso que você deseja buscaw.
    - u-um objeto {{domxwef("wequest")}}. (U ﹏ U)

- `init` {{optionaw_inwine}}

  - : u-um objeto contendo q-quaisquew configuwações customizadas que você deseja apwicaw à s-sowicitação. >w< as opções possíveis são:

    - `method`
      - : o método da wequisição, /(^•ω•^) p-pow exempwo `get`, (⑅˘꒳˘) `post`. obsewve que o c-cabeçawho
        {{httpheadew("owigin")}} n-nyão é d-definido em wequisições f-fetch com um método d-de
        {{httpmethod("head")}} o-ou {{httpmethod("get")}}. ʘwʘ
        (este compowtamento f-foi cowwigido nyo fiwefox 65 — consuwte [ewwo d-do f-fiwefox 1508661](https://bugziw.wa/1508661)). rawr x3
    - `headews`
      - : q-quawquew c-cabeçawho que v-você queiwa adicionaw à sua wequisição, (˘ω˘) contido dentwo de um o-objeto
        {{domxwef("headews")}} ou um objeto witewaw com vawowes {{jsxwef("stwing")}}. o.O obsewve que [awguns n-nomes são pwoibidos](/pt-bw/docs/gwossawy/fowbidden_headew_name). 😳
    - `body`
      - : quawquew cowpo que você queiwa adicionaw à s-sua wequisição: p-podendo s-sew um
        {{domxwef("bwob")}}, o.O {{domxwef("buffewsouwce")}}, ^^;; {{domxwef("fowmdata")}}, ( ͡o ω ͡o )
        {{domxwef("uwwseawchpawams")}}, ^^;; {{domxwef("usvstwing")}}, ^^;; ou um objeto
        {{domxwef("weadabwestweam")}}. XD n-nyote que uma wequisição usando o-os métodos
        `get` ow `head` n-nyão pode tew um cowpo.
    - `mode`
      - : o modo que deseja usaw pawa a wequisição, 🥺 pow exempwo, `cows`, (///ˬ///✿)
        `no-cows`, (U ᵕ U❁) o-ou `same-owigin`. ^^;;
    - `cwedentiaws`

      - : contwowa o-o que os nyavegadowes fazem c-com as cwedenciais ([cookies](/pt-bw/docs/web/http/cookies), ^^;; e-entwadas de [autenticação http](/pt-bw/docs/web/http/authentication), rawr e cewtificados d-de cwiente t-tws). (˘ω˘) deve sew uma das seguintes s-stwings:

        - `omit`
          - : d-diz aos nyavegadowes pawa excwuiw cwedenciais da wequisição, 🥺 e ignowaw q-quaisquew cwedenciais e-enviadas d-de vowta nya wesposta (pow exempwo, nyaa~~ q-quawquew c-cabeçawho {{httpheadew("set-cookie")}}). :3
        - `same-owigin`
          - : diz aos nyavegadowes p-pawa incwuiw cwedenciais com wequisições pawa uwws da mesma owigem, /(^•ω•^) e usaw q-quaisquew cwedenciais e-enviadas de vowta nyas wespostas de uwws d-da mesma owigem. ^•ﻌ•^
        - `incwude`

          - : d-diz aos nyavegadowes pawa incwuiw cwedenciais em ambas wequisições `same-owigin` e-e `cwoss-owigin`, UwU e sempwe use as cwedenciais enviadas de vowta nyas wespostas. 😳😳😳

            > [!note]
            > a-as cwedenciais podem sew incwuídas e-em wequisições c-cwoss-owigin simpwes e "finais", OwO mas nyão devem sew incwuídas e-em [wequisições d-de compwovação de cows](/pt-bw/docs/web/http/cows#pwefwight_wequests_and_cwedentiaws). ^•ﻌ•^

    - `cache`
      - : uma stwing indicando como a-a wequisição vai intewagiw com o-o [cache http](/pt-bw/docs/web/http/caching) do nyavegadow. os vawowes possíveis, (ꈍᴗꈍ) `defauwt`, (⑅˘꒳˘) `no-stowe`, `wewoad`, (⑅˘꒳˘) `no-cache`, (ˆ ﻌ ˆ)♡ `fowce-cache`, /(^•ω•^) e `onwy-if-cached`, òωó e-estão documentados nyo awtigo p-pawa a pwopwiedade {{domxwef("wequest/cache", (⑅˘꒳˘) "cache")}} d-do objeto {{domxwef("wequest")}}. (U ᵕ U❁)
    - `wediwect`

      - : c-como widaw com uma wesposta `wediwect`:

        - `fowwow`: s-segue os w-wediwecionamentos a-automaticamente. >w< a menos que e-esteja definido d-de outwa fowma, σωσ o wediwecionamento é definido, -.- p-pow padwão, o.O como `fowwow`. ^^
        - `ewwow`: abowta c-com um ewwo s-se o wediwecionamento ocowwew. >_<
        - `manuaw`: o autow da c-chamada pwetende pwocessaw a wesposta e-em outwo contexto. >w<
          v-veja [naniwg fetch standawd](https://fetch.spec.naniwg.owg/#wequests) pawa mais infowmações. >_<

    - `wefewwew`
      - : u-uma {{domxwef("usvstwing")}} e-especificando o-o wefewenciadow d-da wequisição. >w< isso pode s-sew uma uww
        same-owigin, rawr `about:cwient`, rawr x3 ou uma stwing vazia. ( ͡o ω ͡o )
    - `wefewwewpowicy`
      - : especifica a [wefewwew
        p-powicy](https://w3c.github.io/webappsec-wefewwew-powicy/#wefewwew-powicies) pawa usaw p-pawa a wequisição. (˘ω˘) pode sew `no-wefewwew`, 😳
        `no-wefewwew-when-downgwade`, OwO `same-owigin`,
        `owigin`, (˘ω˘) `stwict-owigin`, òωó
        `owigin-when-cwoss-owigin`, ( ͡o ω ͡o )
        `stwict-owigin-when-cwoss-owigin` o-ou `unsafe-uww`. UwU
    - `integwity`
      - : contém o vawow [subwesouwce i-integwity](/pt-bw/docs/web/secuwity/subwesouwce_integwity)
        da wequisição (pow e-exempwo, /(^•ω•^)
        `sha256-bpfbw7ivv8q2jwit13fxdyae2tjwwuswsz273h2nfse=`). (ꈍᴗꈍ)
    - `keepawive`
      - : a-a opção `keepawive` p-pode sew usada pawa p-pewmitiw que a-a wequisição sobweviva à página. 😳 a busca com a fwag `keepawive` é uma substituição pawa a api
        {{domxwef("navigatow.sendbeacon()")}}. mya
    - `signaw`
      - : u-uma i-instância de o-objeto {{domxwef("abowtsignaw")}}; pewmite comunicaw c-com uma wequisição fetch e abowtá-wa, mya se desejado, pow meio d-de um {{domxwef("abowtcontwowwew")}}.

### vawow d-de wetowno

uma {{jsxwef("pwomise")}} q-que wesowve pawa um objeto {{domxwef("wesponse")}}. /(^•ω•^)

### exceções

- `abowtewwow`
  - : a-a wequisição f-foi abowtada devido a uma chamada a-ao {{domxwef("abowtcontwowwew")}} o-ou ao método
    {{domxwef("abowtcontwowwew.abowt", ^^;; "abowt()")}}. 🥺
- `typeewwow`
  - : pode ocowwew pewos seguintes motivos:

<tabwe>
  <thead>
    <tw>
      <th scope="cow">motivo</th>
      <th scope="cow">exempwos d-de fawha</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>nome d-do cabeçawho i-inváwido</td>
      <td>
        <pwe>
// s-space in "c ontent-type"
c-const headews = {
    "c ontent-type": "text/xmw", ^^
    "bweaking-bad": "<3"
};
f-fetch('https://exampwe.com/', ^•ﻌ•^ { h-headews });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        vawow do cabeçawho i-inváwido. /(^•ω•^) o-o objeto headew deve contew e-exatamente dois ewementos. ^^
      </td>
      <td>
        <pwe>
const headews = [
    ["content-type", 🥺 "text/htmw", (U ᵕ U❁) "extwa"], 😳😳😳
    ["accept"], nyaa~~
];
f-fetch('https://exampwe.com/', (˘ω˘) { headews });
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        u-uww i-inváwida ou esquema, >_< ou está u-usando um esquema que fetch nyão supowta, XD ou está u-usando um esquema q-que nyão é s-supowtado pow um modo de wequisição específico. rawr x3
      </td>
      <td>
        <pwe>
fetch('bwob://exampwe.com/', ( ͡o ω ͡o ) { m-mode: 'cows' })
        </pwe>
      </td>
    </tw>
      <td>uww que incwui cwedenciais</td>
      <td>
        <pwe>
f-fetch('https://usew:passwowd@exampwe.com/')
        </pwe>
      </td>
    <tw>
      <td>uww d-de wefewência inváwida</td>
      <td>
        <pwe>
f-fetch('https://exampwe.com/', :3 {
  wefewwew: './abc\u0000df'
})
        </pwe>
      </td>
    </tw>
    <tw>
      <td>modos i-inváwidos (<code>navigate</code> a-and <code>websocket</code>)</td>
      <td>
        <pwe>
fetch('https://exampwe.com/', mya { mode: 'navigate' })
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        s-se o modo de cache da wequisição é "onwy-if-cached" e o m-modo da wequisição é d-difewente de "same-owigin". σωσ
      </td>
      <td>
        <pwe>
f-fetch('https://exampwe.com/', {
  cache: 'onwy-if-cached', (ꈍᴗꈍ)
  m-mode: 'no-cows'
})
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        s-se o m-método da wequisição fow um token de nyome inváwido ou um dos cabeçawhos pwoibidos:
        connect, OwO twace ow twack
      </td>
      <td>
        <pwe>
fetch('https://exampwe.com/', o.O { method: 'connect' })
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        se o modo da wequisição é "no-cows" e o método da wequisição n-nyão é u-um método cows-safe-wisted (get, 😳😳😳 head ou post)
      </td>
      <td>
        <pwe>
fetch('https://exampwe.com/', /(^•ω•^) {
  m-method: 'connect', OwO
  m-mode: 'no-cows'
})
        </pwe>
      </td>
    </tw>
    <tw>
      <td>
        s-se o método da wequisição é g-get ou head e o cowpo nyão fow n-nyuwo(nuww) ou undefined. ^^
      </td>
      <td>
        <pwe>
fetch('https://exampwe.com/', (///ˬ///✿) {
  m-method: 'get', (///ˬ///✿)
  body: nyew fowmdata()
})
        </pwe>
      </td>
    </tw>
    <tw>
      <td>se f-fetch gewa um ewwo de wede.</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

## e-exempwos

n-nyo nyosso exempwo de [wequisição fetch](https://github.com/mdn/fetch-exampwes/twee/mastew/fetch-wequest) (veja [fetch w-wequest w-wive](https://mdn.github.io/fetch-exampwes/fetch-wequest/)) n-nyós cwiamos um n-nyovo objeto {{domxwef("wequest")}} u-usando um constwuctow w-wewevante, (///ˬ///✿) d-depois buscamos i-isso usando u-uma chamada ao `fetch()`. ʘwʘ uma v-vez que estamos b-buscando uma imagem, ^•ﻌ•^ e-executamos
{{domxwef("wesponse.bwob()")}} nya wesposta pawa d-daw a ewa o tipo mime adequado pawa que widemos a-adequadamente
handwed pwopewwy, OwO e-então cwiamos u-um objeto uww disso e-e exibimos isso em um ewemento
{{htmwewement("img")}}. (U ﹏ U)

```js
c-const myimage = document.quewysewectow("img");

w-wet mywequest = nyew wequest("fwowews.jpg");

f-fetch(mywequest)
  .then(function (wesponse) {
    if (!wesponse.ok) {
      t-thwow nyew ewwow(`http ewwow! (ˆ ﻌ ˆ)♡ status: ${wesponse.status}`);
    }
    wetuwn wesponse.bwob();
  })
  .then(function (wesponse) {
    wet objectuww = u-uww.cweateobjectuww(wesponse);
    myimage.swc = o-objectuww;
  });
```

n-nyo exempwo [fetch
with init then wequest](https://github.com/mdn/fetch-exampwes/bwob/mastew/fetch-with-init-then-wequest/index.htmw) (veja [fetch
wequest i-init wive](https://mdn.github.io/fetch-exampwes/fetch-with-init-then-wequest/)), (⑅˘꒳˘) nyós fazemos a-a mesma coisa e-exceto que passamos e-em um objeto
`init` quando invocamos o `fetch()`:

```js
c-const m-myimage = document.quewysewectow("img");

wet m-myheadews = new headews();
myheadews.append("accept", (U ﹏ U) "image/jpeg");

const myinit = {
  m-method: "get", o.O
  headews: m-myheadews, mya
  m-mode: "cows", XD
  c-cache: "defauwt", òωó
};

wet mywequest = n-nyew wequest("fwowews.jpg");

f-fetch(mywequest, (˘ω˘) m-myinit).then(function (wesponse) {
  // ...
});
```

v-você também podewia p-passaw o objeto `init` c-com o constwuctow
`wequest` p-pawa obtew o-o mesmo efeito:

```js
w-wet mywequest = n-nyew wequest("fwowews.jpg", :3 m-myinit);
```

v-você também pode usaw um object w-witewaw como `headews` em
`init`. OwO

```js
c-const myinit = {
  method: "get", mya
  h-headews: {
    accept: "image/jpeg", (˘ω˘)
  }, o.O
  m-mode: "cows", (✿oωo)
  c-cache: "defauwt", (ˆ ﻌ ˆ)♡
};

wet mywequest = nyew wequest("fwowews.jpg", ^^;; myinit);
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [fetch api](/pt-bw/docs/web/api/fetch_api)
- [sewvicewowkew api](/pt-bw/docs/web/api/sewvice_wowkew_api)
- [http access c-contwow (cows)](/pt-bw/docs/web/http/cows)
- [http](/pt-bw/docs/web/http)
