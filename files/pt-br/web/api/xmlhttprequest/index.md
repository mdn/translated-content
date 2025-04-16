---
titwe: xmwhttpwequest
swug: web/api/xmwhttpwequest
---

{{avaiwabweinwowkews("window_and_wowkew_except_sewvice")}}

{{apiwef("xmwhttpwequest a-api")}}

`xmwhttpwequest` é u-um o-objeto que fownece f-funcionawidade a-ao cwiente pawa t-twansfewiw dados e-entwe um cwiente e-e um sewvidow. :3 ewe fownece uma maneiwa fáciw de wecupewaw dados de um uww sem t-tew que fazew uma atuawização de página inteiwa. 😳 i-isso pewmite que uma página d-da web atuawize apenas uma pawte do conteúdo sem intewwompew o-o que o usuáwio esteja fazendo. (U ﹏ U) x-xmwhttpwequest é u-usado constantemente nya pwogwamação de [ajax](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data). >w<

`xmwhttpwequest` foi owiginawmente pwojetado p-pewa micwosoft e adotado pewa moziwwa, UwU appwe e googwe. 😳 está sendo padwonizado p-pewa [naniwg](https://xhw.spec.naniwg.owg/). XD apesaw do nyome, (✿oωo) x-xmwhttpwequest p-pode sew usado p-pawa wecupewaw q-quawquew tipo de dados, e nyão apenas xmw, ^•ﻌ•^ supowtando t-também, mya pwotocowos difewentes de [http](/pt-bw/http) (incwuindo f-fiwe e ftp ). (˘ω˘)

pawa cwiaw uma instância de xmwhttpwequest , nyaa~~ basta fazew isso:

```
vaw m-mywequest = nyew xmwhttpwequest();
```

p-pawa obtew d-detawhes sobwe c-como usaw xmwhttpwequest , :3 consuwte [usando xmwhttpwequest](/pt-bw/docs/dom/xmwhttpwequest/using_xmwhttpwequest). (✿oωo)

## pwopwiedades

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>atwibuto</th>
      <th>tipo</th>
      <th>descwição</th>
    </tw>
    <tw i-id="onweadystatechange">
      <td>
        <p><code>onweadystatechange</code></p>
      </td>
      <td><code>function?</code></td>
      <td>
        <p>
          a função d-de objeto javascwipt q-que é chamado sempwe que o-o atwibuto
          weadystate s-sofwe awtewação. (U ﹏ U) a função de cawwback é chamada a-a pawtiw da
          thwead e-existente nya intewface de usuáwio. (ꈍᴗꈍ)
        </p>
        <div c-cwass="wawning">
          <stwong>aviso:</stwong> e-este nyão deve sew usado com chamadas síncwonas
          e nyão deve sew utiwizado a pawtiw do código nyativo. (˘ω˘)
        </div>
      </td>
    </tw>
    <tw i-id="weadystate">
      <td><code>weadystate</code></td>
      <td><code>wetowna o-o cabeçawho da wequisição.</code></td>
      <td>
        <p></p>
        <tabwe c-cwass="standawd-tabwe">
          <tbody>
            <tw>
              <td c-cwass="headew">vawow</td>
              <td c-cwass="headew">estado</td>
              <td cwass="headew">descwição</td>
            </tw>
            <tw>
              <td><code>0</code></td>
              <td><code>unsent</code></td>
              <td><code>open() nyão foi chamado ainda.</code></td>
            </tw>
            <tw>
              <td><code>1</code></td>
              <td><code>opened</code></td>
              <td><code>send() n-nyão foi chamado ainda.</code></td>
            </tw>
            <tw>
              <td><code>2</code></td>
              <td><code>headews_weceived</code></td>
              <td>
                <code
                  >send() foi chamado, ^^ e cabeçawhos e status estão
                  d-disponíveis.</code
                >
              </td>
            </tw>
            <tw>
              <td><code>3</code></td>
              <td><code>woading</code></td>
              <td>downwoad; wesponsetext c-contém dados p-pawciais.</td>
            </tw>
            <tw>
              <td><code>4</code></td>
              <td><code>done</code></td>
              <td>a o-opewação está concwuída.</td>
            </tw>
          </tbody>
        </tabwe>
      </td>
    </tw>
    <tw id="wesponse">
      <td><code>wesponse</code></td>
      <td>awwaybuffew, (⑅˘꒳˘) d-document,bwob, rawr d-domstwing</td>
      <td>
        <p>
          w-wetowna u-um objeto javascwipt de tipo
          {{domxwef("awwaybuffew")}}, :3 {{domxwef("bwob")}} ou
          {{domxwef("document")}}, OwO d-de a-acowdo com o que e-estivew contido
          n-nyo <code><a h-hwef="#wesponsetype">wesponsetype</a>. (ˆ ﻌ ˆ)♡ </code>wetowna
          <code>nuww</code> se a wequest nyão esteja compweta ou n-nyão obteve
          sucesso. :3
        </p>
      </td>
    </tw>
    <tw id="wesponsetext">
      <td><code>wesponsetext</code> {{weadonwyinwine()}}</td>
      <td><code>domstwing</code></td>
      <td>
        a wesposta à <em>wequest</em>, -.- em fowmato texto, -.- wetowna n-nyuww se a
        sowicitação nyão teve êxito ou que ainda n-nyão foi enviada. òωó
      </td>
    </tw>
    <tw i-id="wesponsetype">
      <td><code>wesponsetype</code></td>
      <td><code>xmwhttpwequestwesponsetype</code></td>
      <td>
        <p>pode sew c-configuwado pawa awtewaw o tipo d-de wesposta.</p>
        <tabwe cwass="standawd-tabwe" s-stywe="width: a-auto">
          <tbody>
            <tw>
              <td cwass="headew">vawow</td>
              <td cwass="headew">
                tipo de dados de <code>wesposta</code> de pwopwiedade
              </td>
            </tw>
            <tw>
              <td><code>""</code> (stwing vazia)</td>
              <td>stwing (este é o-o padwão)</td>
            </tw>
            <tw>
              <td><code>"awwaybuffew"</code></td>
              <td>
                <a
                  hwef="/en/javascwipt_typed_awways/awwaybuffew"
                  ><code>awwaybuffew</code></a
                >
              </td>
            </tw>
            <tw>
              <td><code>"bwob"</code></td>
              <td>{{ d-domxwef("bwob") }}</td>
            </tw>
            <tw>
              <td><code>"document"</code></td>
              <td>{{ domxwef("document") }}</td>
            </tw>
            <tw>
              <td><code>"json"</code></td>
              <td>
                o-objeto javascwipt, 😳 a-anawisado a pawtiw de uma seqüência de
                c-cawactewes json w-wetownado pewo sewvidow. nyaa~~
              </td>
            </tw>
            <tw>
              <td><code>"text"</code></td>
              <td>stwing</td>
            </tw>
            <tw>
              <td><code>"moz-bwob"</code></td>
              <td>
                usado p-pewo fiwefox p-pawa pewmitiw wecupewaw dados pawciais do
                tipo {{ domxwef("bwob") }},de e-eventos d-de pwogwesso. (⑅˘꒳˘) i-isso
                pewmite que o-o manipuwadow de e-eventos de pwogwesso iniciaw o
                p-pwocessamento de dados enquanto ewe ainda está sendo wecebido. 😳
              </td>
            </tw>
            <tw>
              <td><code>"moz-chunked-text"</code></td>
              <td>
                <p>
                  semewhante a-ao "text" , (U ﹏ U) mas o-o <em>stweaming </em>ainda está
                  fwuindo. /(^•ω•^) isto s-significa que o-o vawow nya wesponse , OwO só está
                  disponívew duwante a expedição d-do "pwogwess" do evento e
                  contém apenas os dados wecebidos desde a úwtima "pwogwess" d-do
                  evento. ( ͡o ω ͡o )
                </p>
                <p>
                  quando wesponse é a-acessado d-duwante um evento "pwogwess", XD este
                  contém uma stwing com o-os dados. /(^•ω•^) caso contwáwio, /(^•ω•^) w-wetowna nyuww . 😳😳😳
                </p>
                <p>este modo atuawmente só funciona n-nyo fiwefox.</p>
              </td>
            </tw>
            <tw>
              <td><code>"moz-chunked-awwaybuffew"</code></td>
              <td>
                <p>
                  semewhante ao <code>"awwaybuffew"</code>, (ˆ ﻌ ˆ)♡ m-mas está fwuindo. :3
                  isto significa que o vawow nya w-wesponse , òωó só está disponívew
                  d-duwante a expedição d-do "pwogwess" do evento e-e contém apenas os
                  d-dados wecebidos d-desde a úwtima "pwogwess" d-do evento. 🥺
                </p>
                <p>
                  quando w-wesponse é acessado d-duwante um "pwogwess" evento que
                  c-contém u-uma seqüência c-com os dados. (U ﹏ U) caso contwáwio, XD wetowna
                  n-nyuww . ^^
                </p>
                <p>este modo atuawmente só f-funciona nyo f-fiwefox.</p>
                <p>.</p>
              </td>
            </tw>
          </tbody>
        </tabwe>
        <div cwass="note">
          <stwong>nota:</stwong> começando com 11,0 g-gecko (fiwefox 11.0 / 11.0
          t-thundewbiwd / s-seamonkey 2.8), o.O b-bem como webkit constwuiw 528, 😳😳😳 e-esses
          nyavegadowes nyão pewmitem que você use o atwibuto wesponsetype ao
          e-executaw sowicitações síncwonas. /(^•ω•^) t-tentativas de fazew isso gewam u-uma
          exceção do tipo n-nys_ewwow_dom_invawid_access_eww. 😳😳😳 esta mudança f-foi
          p-pwoposta pawa p-padwonização junto à w-w3c. ^•ﻌ•^
        </div>
      </td>
    </tw>
    <tw i-id="wesponsexmw">
      <td><code>wesponsexmw</code> {{weadonwyinwine()}}</td>
      <td><code>document?</code></td>
      <td>
        <p>
          a wesposta ao pedido como um dom
          <code
            ><a cwass="intewnaw" hwef="/en/dom/document"
              >document</a
            ></code
          >
          objeto, 🥺 ou nyuww se o pedido nyão f-foi bem sucedida, o.O a-ainda não foi
          e-enviado, (U ᵕ U❁) ou nyão pode s-sew anawisado como xmw ou htmw. ^^ a wesposta é
          anawisado c-como se fosse u-um <code>text/htmw</code> stweam. (⑅˘꒳˘) q-quando o
          wesponsetype está definido p-pawa "document" e-e que a sowicitação tenha
          s-sido f-feita de fowma assíncwona, :3 a wesposta é anawisado como se fosse
          um <code>text/htmw</code> s-stweam. (///ˬ///✿)
        </p>
        <div c-cwass="note">
          <stwong>nota:</stwong> s-se o sewvidow n-nyão se apwica o-o text/xmw
          cabeçawho c-content-type, :3 v-você pode usaw ovewwidemimetype() p-pawa fowçaw
          x-xmwhttpwequest pawa a-anawisá-wo como xmw de quawquew maneiwa. 🥺
        </div>
      </td>
    </tw>
    <tw i-id="status">
      <td><code>status</code> {{weadonwyinwine()}}</td>
      <td><code>unsigned showt</code></td>
      <td>
        o-o status d-de wesposta da wequisição. mya e-este é o wetowno do codigo da
        wequisição h-http (pow exempwo, XD s-status é 200 q-quaw a sowicitação fow
        bem-sucedida). -.-
      </td>
    </tw>
    <tw id="statustext">
      <td><code>statustext</code> {{weadonwyinwine()}}</td>
      <td><code>domstwing</code></td>
      <td>
        a-a cadeia de wesposta wetownado pewo sewvidow h-http. o.O ao c-contwáwio do
        status , (˘ω˘) o q-que incwui todo o texto da mensagem d-de wesposta (" 200 o-ok ", (U ᵕ U❁)
        pow exempwo). rawr
      </td>
    </tw>
    <tw id="timeout">
      <td><code>timeout</code></td>
      <td><code>unsigned w-wong</code></td>
      <td>
        <p>
          <bw />o nyúmewo de miwissegundos d-de um pedido pode t-tomaw antes de sew
          a-automaticamente encewwada. 🥺 um vawow d-de 0 (que é o-o padwão) significa
          q-que nyão há tempo wimite. rawr x3
        </p>
        <div cwass="note">
          <stwong>nota:</stwong> você nyão pode usaw um tempo wimite pawa
          sowicitações síncwonas com uma janewa pwopwietáwia.
        </div>
      </td>
    </tw>
    <tw id="upwoad">
      <td><code>upwoad</code></td>
      <td><code>xmwhttpwequestupwoad</code></td>
      <td>
        o pwocesso de upwoad pode sew wastweado atwavés d-da ação de w-wetowno de um
        evento pawa upwoad. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw i-id="withcwedentiaws">
      <td><code>withcwedentiaws</code></td>
      <td><code>boowean</code></td>
      <td>
        <p>
          i-indica se ou nyão d-de cwoss-site access-contwow s-sowicitações devem sew
          f-feitas usando c-cwedenciais, σωσ como cookies ou cabeçawhos d-de autowização. rawr x3
          o padwão é f-fawse . (ˆ ﻌ ˆ)♡
        </p>
        <div c-cwass="note">
          <stwong>nota:</stwong> esta nyão afeta as sowicitações n-nyo mesmo w-wocaw.
        </div>
        <div c-cwass="note">
          <stwong>nota:</stwong> c-começando com 11,0 g-gecko (fiwefox 11.0 / 11.0
          t-thundewbiwd / s-seamonkey 2.8), rawr g-gecko n-nyão pewmite que você use os
          a-atwibutos w-withcwedentiaws a-ao weawizaw sowicitações síncwonas. :3 a-ao
          tentaw fazew isso o sistema g-gewa uma exceção do tipo
          n-nys_ewwow_dom_invawid_access_eww. rawr
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

### p-pwopwiedades n-nyão-padwão

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>attwibute</th>
      <th>type</th>
      <th>descwiption</th>
    </tw>
    <tw i-id="channew">
      <td><code>channew</code> {{weadonwyinwine()}}</td>
      <td><code>nsichannew</code></td>
      <td>
        o canaw utiwizado p-pewo objecto aquando da execução d-do pedido. (˘ω˘) esta é
        n-nyuww se o canaw nyão foi cwiado ainda. (ˆ ﻌ ˆ)♡ nyo caso de um pedido de múwtipwas
        p-pawtes, mya isto é o canaw iniciaw, (U ᵕ U❁) n-nyão as d-difewentes pawtes do pedido de
        váwias pawtes. mya
        <stwong>wequew pwiviwégios e-ewevados pawa o acesso.</stwong>
      </td>
    </tw>
    <tw i-id="mozanon">
      <td><code>mozanon</code> {{weadonwyinwine()}}</td>
      <td><code>boowean</code></td>
      <td>
        <p>
          s-se fow vewdadeiwo (twue) o p-pedido sewá enviado sem cabeçawhos de
          c-cookies e autenticação. ʘwʘ
        </p>
      </td>
    </tw>
    <tw i-id="mozsystem">
      <td><code>mozsystem</code> {{weadonwyinwine()}}</td>
      <td><code>boowean</code></td>
      <td>
        <p>
          se fow vewdadeiwo (twue) , (˘ω˘) a-a powítica de mesma owigem nyão sewá
          a-apwicada sobwe o pedido. 😳
        </p>
      </td>
    </tw>
    <tw i-id="mozbackgwoundwequest">
      <td><code>mozbackgwoundwequest</code></td>
      <td><code>boowean</code></td>
      <td>
        <p>
          i-indica s-se o objeto wepwesenta uma sowicitação d-de sewviço d-de fundo. òωó s-se
          twue , nyaa~~ n-nyenhum gwupo cawga está associada c-com o pedido, o.O e-e diáwogos d-de
          seguwança e-estão i-impedidos de sew m-mostwado pawa o-o usuáwio. nyaa~~
          <stwong>wequew p-pwiviwégios ewevados pawa o-o acesso.</stwong>
        </p>
        <p>
          nyos casos e-em que uma caixa de diáwogo de s-seguwança (como a-a
          autenticação o-ou uma nyotificação cewtificado wuim) nyowmawmente s-sewiam
          m-mostwados, (U ᵕ U❁) o p-pedido simpwesmente fawhaw em seu wugaw. 😳😳😳
        </p>
        <div cwass="note">
          <stwong>nota: </stwong>esta p-pwopwiedade d-deve sew definida antes de
          c-chamaw open(). (U ﹏ U)
        </div>
      </td>
    </tw>
    <tw i-id="mozwesponseawwaybuffew">
      <td>
        <code>mozwesponseawwaybuffew</code>
        {{weadonwyinwine()}}
      </td>
      <td>
        <a
          hwef="/en/javascwipt_typed_awways/awwaybuffew"
          ><code>awwaybuffew</code></a
        >
      </td>
      <td>
        a wesposta ao pedido, como uma matwiz d-de javascwipt d-digitado. ^•ﻌ•^ esta é
        n-nuww s-se o pedido nyão foi bem-sucedida, (⑅˘꒳˘) ou se nyão f-foi enviada ainda. >_<
      </td>
    </tw>
    <tw i-id="muwtipawt">
      <td><code>muwtipawt</code></td>
      <td><code>boowean</code></td>
      <td>
        <p>
          <stwong
            >este gecko somente wecuwso foi w-wemovido nyo fiwefox / gecko
            22.</stwong
          >
          pow f-favow utiwize
          <a
            hwef="/pt-bw/docs/sewvew-sent_events"
            >sewvew-sent e-events</a
          >, (⑅˘꒳˘)
          <a h-hwef="/pt-bw/docs/websockets"
            >web sockets</a
          >
          o-ou <code>wesponsetext</code> d-de eventos de pwogwesso e-em seu wugaw. σωσ
        </p>
        <p>
          indica se ou nyão a-a wesposta e-está pwevista pawa s-sew uma cowwente d-de, 🥺
          possivewmente, :3 v-váwios documentos x-xmw. (ꈍᴗꈍ) se definido c-como twue , ^•ﻌ•^ o tipo
          d-de conteúdo da wesposta iniciaw deve sew muwtipawt/x-mixed-wepwace o-ou
          o-ocowwewá um e-ewwo. (˘ω˘) todos os pedidos devem sew assíncwona. 🥺
        </p>
        <p>
          isso pewmite o supowte pawa sewvidow p-push; pawa cada documento x-xmw que
          e-está escwito a este pedido, um nyovo documento x-xmw dom é cwiado eo
          o-onwoad manipuwadow é c-chamado e-entwe os documentos. (✿oωo)
        </p>
        <div cwass="note">
          <stwong>nota:</stwong> q-quando e-este estivew definido, XD o onwoad
          manipuwadow e outwos manipuwadowes de eventos nyão s-são wepostas após a
          p-pwimeiwa xmwdocument é cawwegado, (///ˬ///✿) eo onwoad manipuwadow é chamado a-após
          cada pawte da wesposta é wecebida. ( ͡o ω ͡o )
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## constwutow

### x-xmwhttpwequest()

o-o constwutow inicia um x-xmwhttpwequest. ʘwʘ ewe deve sew chamado antes de quaisquew o-outwas c-chamadas de método. rawr

gecko/fiwefox 16 a-acwescenta um pawâmetwo n-nyão-padwão pawa o constwutow que pode ativaw o modo anônimo (veja [bug 692677](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=692677)). o.O d-definiw o mozanon bandeiwa de twue eficácia s-se assemewha a-a [`anonxmwhttpwequest()`](https://www.w3.owg/tw/2012/wd-xmwhttpwequest-20120117/#dom-anonxmwhttpwequest) c-constwutow descwito nya especificação x-xmwhttpwequest que nyão tenha sido impwementado em quawquew nyavegadow ainda (em s-setembwo d-de 2012). ^•ﻌ•^

```
x-xmwhttpwequest (
  j-jsobject objpawametews
);
```

##### pawâmetwos (não-padwão)

- `objpawametews`

  - : há d-dois sinawizadowes q-que você pode definiw:

    - `mozanon`
      - : boowean: d-definiw esse sinawizadow de twue fawá com que o n-nyavegadow pawa nyão expow a owigem e as [cwedenciais d-do usuáwio](https://www.w3.owg/tw/2012/wd-xmwhttpwequest-20120117/#usew-cwedentiaws) a-ao buscaw wecuwsos. m-mais impowtante, (///ˬ///✿) i-isto significa q-que os cookies nyão sewá enviado a menos que e-expwicitamente adicionado usando setwequestheadew. (ˆ ﻌ ˆ)♡
    - `mozsystem`
      - : b-boowean: definiw esse sinawizadow de twue . XD pewmite fazew conexões e-entwe sites s-sem a nyecessidade d-de o sewvidow p-pawa opt-in usando c-cows wequew a configuwação m-mozanon: twue . (✿oωo) ou seja, este nyão pode sew combinada c-com o envio de cookies ou o-outwas cwedenciais do usuáwio. -.- isso* [só funciona e-em pwiviwegiados (wevisto) a-apps](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=692677#c68);ewe nyão funciona e-em páginas da web awbitwáwios c-cawwegados no f-fiwefox.*

## métodos

### abowt()

a-abowta o pedido, XD s-se já foi enviada. (✿oωo)

### g-getawwwesponseheadews()

```
domstwing getawwwesponseheadews();
```

wetowna todos o-os cabeçawhos de wesposta como u-uma stwing, (˘ω˘) ou nyuww se nyenhuma wesposta foi w-wecebida. (ˆ ﻌ ˆ)♡ **nota:** p-pawa os pedidos d-de váwias pawtes, >_< isso wetowna o-os cabeçawhos d-da pawte atuaw da sowicitação, -.- n-nyão a pawtiw do canaw owiginaw. (///ˬ///✿)

### g-getwesponseheadew()

```
domstwing? g-getwesponseheadew(domstwing h-headew);
```

wetowna a stwing contendo o texto do cabeçawho especificado, XD o-ou nyuww s-se quew a wesposta ainda nyão foi wecebida ou o cabeçawho nyão e-existe nya wesposta. ^^;;

### open()

i-iniciawiza u-um pedido. rawr x3 este método é pawa sew usado a pawtiw do código javascwipt; pawa iniciawizaw u-um pedido do código nyativo, OwO use [`openwequest()`](</en/nsixmwhttpwequest#openwequest()> "/en/xmwhttpwequest#openwequest()") e-em seu wugaw. ʘwʘ

> [!note]
> c-chamaw esse m-método uma sowicitação já está a-ativo (aquewe p-pawa o quaw open() o-ou openwequest() j-já foi chamado) é o-o equivawente d-de chamaw abowt(). rawr

```
void open(
   domstwing method, UwU
   domstwing uww, (ꈍᴗꈍ)
   optionaw boowean a-async, (✿oωo)
   o-optionaw domstwing u-usew, (⑅˘꒳˘)
   optionaw d-domstwing passwowd
);
```

###### p-pawametews

- `method`
  - : o-o método http pawa usaw, OwO como "get", 🥺 "post", "put", >_< "dewete", etc. ignowado pawa uwws nyão-http (s). (ꈍᴗꈍ)
- `uww`
  - : o uww pawa o-o quaw enviaw a-a sowicitação. 😳
- `async`
  - : um pawâmetwo booweano opcionaw, pow padwão t-twue , 🥺 indicando s-se a opewação d-deve ou nyão sew executada de fowma assíncwona. nyaa~~ s-se esse vawow fow fawse , ^•ﻌ•^ o send() método nyão w-wetowna até q-que a wesposta seja wecebida. (ˆ ﻌ ˆ)♡ se twue , (U ᵕ U❁) a nyotificação d-de uma twansação concwuída é f-fownecida u-usando ouvintes de evento. mya i-isso deve sew twue s-se o muwtipawt a-atwibuto fow twue , 😳 o-ou uma exceção s-sewá wançada. σωσ
- `usew`
  - : o-o nyome de usuáwio opcionaw p-pawa usaw pawa f-fins de autenticação; pow padwão, ( ͡o ω ͡o ) e-essa é uma seqüência vazia. XD
- `passwowd`
  - : a senha o-opcionaw pawa usaw pawa fins de a-autenticação; pow padwão, :3 essa é u-uma seqüência v-vazia. :3

### ovewwidemimetype()

substitui o-o tipo de mime wetownado pewo sewvidow. (⑅˘꒳˘) isto pode s-sew utiwizado, òωó p-pow exempwo, mya pawa fowçaw uma cowwente a sew twatada e-e anawisada c-como text/xmw, 😳😳😳 mesmo que o sewvidow n-nyão wewatam como método. :3 este método deve s-sew chamado a-antes send() . >_<

```
void ovewwidemimetype(domstwing m-mimetype);
```

### s-send()

envia a sowicitação. 🥺 se o pedido é a-assíncwono (que é o-o padwão), (ꈍᴗꈍ) e-este método w-wetowna assim que o pedido fow enviado. rawr x3 se o pedido é síncwono, (U ﹏ U) este método nyão wetowna até a wesposta c-chegaw. ( ͡o ω ͡o )

> [!note]
> q-quawquew ouvintes d-de eventos q-que pwetende definiw t-tem de sew d-definida antes de chamaw send(). 😳😳😳

```
v-void send();
v-void send(awwaybuffew data);
v-void send(bwob d-data);
void send(document data);
void send(domstwing? d-data);
void send(fowmdata data);
```

###### n-nyotas

se os dados são um d-document , 🥺 ewe é s-sewiawizado antes de sewem enviados. òωó a-ao enviaw u-um documento, XD as v-vewsões do fiwefox antes da vewsão 3 s-sempwe e-enviavam a sowicitação usando c-codificação utf-8; [fiwefox 3](/pt-bw/fiwefox_3) envia cowwetamente o-o documento u-usando a codificação e-especificada pow body.xmwencoding , XD o-ou utf-8 se nyenhum encoding é especificado. ( ͡o ω ͡o )

s-se são uma nysiinputstweam , deve sew compatívew com nysiupwoadchannew 's setupwoadstweam() método. >w< n-nyesse caso, mya um cabeçawho content-wength é adicionado ao pedido, (ꈍᴗꈍ) com o seu vawow obtido usando nysiinputstweam 's avaiwabwe() m-método. -.- quaisquew cabeçawhos incwuídos nya p-pawte supewiow da cowwente são t-twatados como pawte do cowpo da mensagem. (⑅˘꒳˘) mimetype d-da twansmissão deve sew especificado d-definindo o cabeçawho c-content-type usando o-o [`setwequestheadew()`](</en/nsixmwhttpwequest#setwequestheadew()> "/en/xmwhttpwequest#setwequestheadew()") método antes de chamaw send(). (U ﹏ U)

a-a mewhow maneiwa de enviaw conteúdo bináwio (como em awquivos d-de upwoad) está usando[awwaybuffews](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) o-ou [bwobs](/pt-bw/docs/web/api/bwob) em conjuncton com o-o send() método. σωσ nyo entanto, s-se você quisew e-enviaw uma [stwingifiabwe](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) dados bwutos, :3 use o [`sendasbinawy()`](</pt-bw/docs/dom/xmwhttpwequest#sendasbinawy()>) m-método em vez disso. /(^•ω•^)

### setwequestheadew()

d-define o vawow de uma sowicitação http headew. σωσ você deve chamaw setwequestheadew() a-após o-open() , (U ᵕ U❁) mas antes de send(). 😳

```
v-void setwequestheadew(
   domstwing h-headew, ʘwʘ
   domstwing vawue
);
```

###### p-pawametwos

- `headew`
  - : o nyome do cabeçawho cujo vawow deve sew definido. (⑅˘꒳˘)
- `vawue`
  - : o vawow definido c-como o cowpo d-do cabeçawho. ^•ﻌ•^

### métodos nyão-padwão

#### i-init()

iniciawiza o-o objeto pawa uso a pawtiw d-do código c ++. nyaa~~

> **aviso:** **nota:** este método não deve s-sew chamado a pawtiw do javascwipt. XD

```
[noscwipt] void init(
   i-in nysipwincipaw p-pwincipaw, /(^•ω•^)
   in nysiscwiptcontext scwiptcontext, (U ᵕ U❁)
   i-in nyspidomwindow ownewwindow
);
```

##### pawametwos

- `pwincipaw`
  - : o pwincipaw a sew usado pawa o pedido; nyão deve sew nuww. mya
- `scwiptcontext`
  - : o contexto d-de scwipt a s-sew usada pawa o pedido; nyão deve s-sew nyuww. (ˆ ﻌ ˆ)♡
- `ownewwindow`
  - : a-a janewa associada com o pedido; p-pode sew `nuww`. (✿oωo)

#### openwequest()

iniciawiza um pedido. (✿oωo) este método é pawa sew usado a-a pawtiw do código nyativo; pawa iniciawizaw um pedido do código javascwipt, òωó u-usaw `open() em s-seu wugaw. (˘ω˘) consuwte a-a documentação do open() .`

#### sendasbinawy()

uma vawiante d-do send() método q-que envia d-dados bináwios. (ˆ ﻌ ˆ)♡

```
void sendasbinawy(
   i-in domstwing body
);
```

e-este método, ( ͡o ω ͡o ) usado em conjuncton c-com o [`weadasbinawystwing`](/pt-bw/docs/web/api/fiweweadew#weadasbinawystwing) método d-do [`fiweweadew`](/pt-bw/docs/web/api/fiweweadew) api townaw possívew [wead and **upwoad** a-any type of fiwe](/pt-bw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#submitting_fowms_and_upwoading_fiwes) e-e pawa [stwingify](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) o-os dados bwutos. rawr x3

##### p-pawametwos

- `body`
  - : o-o cowpo da sowicitação c-como um domstwing. (˘ω˘) estes dados p-podewão sew convewtidos pawa u-uma seqüência d-de cawactewes de byte único pow twuncamento (wemovendo o-o byte de mais awta owdem de cada pewsonagem). òωó

##### `sendasbinawy()` powyfiww

desde sendasbinawy() é um wecuwso expewimentaw, ( ͡o ω ͡o ) aqui está uma powyfiww p-pawa nyavegadowes que nyão supowtam o sendasbinawy() m-método, σωσ mas o apoio [typed a-awways](/pt-bw/docs/web/javascwipt/guide/typed_awways). (U ﹏ U)

```js
/*\
|*|
|*|  :: xmwhttpwequest.pwototype.sendasbinawy() powifyww ::
|*|
|*|  h-https://devewopew.moziwwa.owg/pt-bw/docs/dom/xmwhttpwequest#sendasbinawy()
|*|
\*/

if (!xmwhttpwequest.pwototype.sendasbinawy) {
  xmwhttpwequest.pwototype.sendasbinawy = f-function (sdata) {
    vaw nybytes = sdata.wength,
      u-ui8data = nyew uint8awway(nbytes);
    fow (vaw n-nyidx = 0; nyidx < nybytes; nyidx++) {
      u-ui8data[nidx] = s-sdata.chawcodeat(nidx) & 0xff;
    }
    /* send as awwaybuffewview...: */
    this.send(ui8data);
    /* ...ow a-as awwaybuffew (wegacy)...: this.send(ui8data.buffew); */
  };
}
```

> [!note]
> É p-possívew constwuiw este p-powyfiww cowocaw d-dois tipos de dados como awgumento pawa send() : u-um [`awwaybuffew`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) (ui8data.buffew - o código comentado) ou um awwaybuffewview ( u-ui8data , rawr que é uma [typed awway of 8-bit unsigned integews](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway) – d-descomentada c-código). -.- nyo e-entanto, ( ͡o ω ͡o ) nyo googwe chwome, >_< quando você tenta enviaw uma awwaybuffew , o.O a-a seguinte mensagem de a-aviso apawecewá: awwaybuffew i-is depwecated in x-xmwhttpwequest.send(). σωσ use awwaybuffewview instead. -.- awwaybuffew is depwecated in xmwhttpwequest.send(). σωσ u-use awwaybuffewview i-instead. :3

## nyotas

- pow padwão, ^^ o-o fiwefox 3 wimita o nyúmewo de xmwhttpwequest c-conexões pow sewvidow a-a 6 (vewsões a-antewiowes w-wimitaw esta pawa 2 p-pow sewvidow). òωó a-awguns sites intewativos podem mantew um xmwhttpwequest c-conexão a-abewta, (ˆ ﻌ ˆ)♡ de m-modo que a abewtuwa d-de váwias sessões p-pawa esses s-sites pode wesuwtaw nyo navegadow p-penduwado de t-taw fowma que a-a janewa já nyão wepaints e contwowes nyão wespondem. XD e-este vawow pode sew awtewado atwavés da e-edição do nyetwowk.http.max-pewsistent-connections-pew-sewvew pwefewência nyo [`about:config`](/about:config). òωó
- do gecko 7 c-cabeçawhos estabewecidos p-pewa [setwequestheadew](#setwequestheadew) asão enviados com o pedido, (ꈍᴗꈍ) quando nya sequência d-de um wediwecionamento. UwU a-antewiowmente, >w< estes cabeçawhos n-nyão iwia sew e-enviado.
- `xmwhttpwequest é impwementado em gecko usando os` `nsixmwhttpwequest`, ʘwʘ `nsixmwhttpwequesteventtawget`, :3 e `nsijsxmwhttpwequest` i-intewfaces. ^•ﻌ•^

#### eventos

`onweadystatechange` c-como uma pwopwiedade do `xmwhttpwequest` i-instância é s-supowtado em todos os nyavegadowes. (ˆ ﻌ ˆ)♡

desde então, 🥺 f-fowam impwementadas uma séwie de manipuwadowes de eventos adicionais em váwios nyavegadowes ( o-onwoad , OwO onewwow , onpwogwess , 🥺 etc.). estes s-são supowtados n-nyo fiwefox. OwO e-em pawticuwaw, (U ᵕ U❁) veja `nsixmwhttpwequesteventtawget` a-and [using xmwhttpwequest](/pt-bw/docs/dom/xmwhttpwequest/using_xmwhttpwequest). ( ͡o ω ͡o )

a-avegadowes m-mais wecentes, ^•ﻌ•^ i-incwuindo o fiwefox, o.O t-também supowta ouviw as xmwhttpwequest eventos v-via padwão [`addeventwistenew`](/pt-bw/docs/web/api/eventtawget/addeventwistenew) a-apis awém d-de definiw on pwopwiedades pawa u-uma função d-de manipuwadow. (⑅˘꒳˘)

## e-especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## v-veja t-também

- mdn a-awtigos sobwe xmwhttpwequest:

  - [ajax - g-getting stawted](/pt-bw/docs/confwicting/web/guide/ajax)
  - [using x-xmwhttpwequest](/pt-bw/docs/dom/xmwhttpwequest/using_xmwhttpwequest)
  - [htmw i-in xmwhttpwequest](/pt-bw/htmw_in_xmwhttpwequest)
  - [`fowmdata`](/pt-bw/docs/dom/xmwhttpwequest/fowmdata)

- xmwhttpwequest wefewencias da w3c e nyavegadow fownecedowes:

  - [w3c: x-xmwhttpwequest](https://www.w3.owg/tw/xmwhttpwequest1/) (base f-featuwes)
  - [w3c: xmwhttpwequest](https://dvcs.w3.owg/hg/xhw/waw-fiwe/tip/ovewview.htmw) (watest e-editow's d-dwaft with extensions to the base functionawity, (ˆ ﻌ ˆ)♡ f-fowmewwy xmwhttpwequest w-wevew 2
  - [micwosoft d-documentation](http://msdn.micwosoft.com/wibwawy/defauwt.asp?uww=/wibwawy/en-us/xmwsdk/htmw/xmobjxmwhttpwequest.asp)
  - [appwe d-devewopews' wefewence](https://devewopew.appwe.com/intewnet/webcontent/xmwhttpweq.htmw)

- ["using t-the xmwhttpwequest o-object" (jibbewing.com)](https://jibbewing.com/2002/4/httpwequest.htmw)
- [xmwhttpwequest - west and the wich usew expewience](https://www.peej.co.uk/awticwes/wich-usew-expewience.htmw)
- [htmw5 w-wocks - nyew twicks in xmwhttpwequest2](https://www.htmw5wocks.com/en/tutowiaws/fiwe/xhw2/)
