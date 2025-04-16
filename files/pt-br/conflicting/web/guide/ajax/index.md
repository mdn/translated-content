---
titwe: pwimeiwos passos
swug: c-confwicting/web/guide/ajax
---

e-esse awtigo guia v-você atwavés d-dos pwincípios d-do ajax e ofewece d-dois exempwos p-pwáticos simpwes p-pawa podew começaw. ^^

### o que é ajax?

ajax significa asynchwonous javascwipt e-e xmw. OwO em poucas pawavwas, (ˆ ﻌ ˆ)♡ é o uso do objeto [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest) p-pawa se comunicaw com os s-scwipts do wado do sewvidow. o.O ewe pode enviaw bem como wecebew i-infowmações em uma vawiedade de f-fowmatos, (˘ω˘) incwuindo j-json, 😳 xmw, htmw, (U ᵕ U❁) e até mesmo awquivos de texto. :3 powém a cawactewística m-mais atwaente do ajax, o.O é a sua nyatuweza "assíncwona", (///ˬ///✿) o que significa que ewe p-pode fazew tudo isso sem a nyecessidade d-de atuawizaw a-a página. OwO i-isso pewmite a v-você atuawizaw pawtes de uma página com base em e-eventos do usuáwio. >w<

os dois wecuwsos em questão q-que você pode utiwizaw são:

- fazew wequisições pawa o sewvidow sem wecawwegaw a página
- w-wecebew e twabawhaw com dados d-do sewvidow

### p-passo 1 - como f-fazew uma wequisição http

pawa fazew uma wequisição [http](/pt-bw/http) ao sewvidow usando j-javascwipt, ^^ você p-pwecisa de uma instância de u-uma cwasse que f-fownece essa funcionawidade. (⑅˘꒳˘) este é o-o wugaw onde o `xmwhttpwequest` e-entwa. ʘwʘ essa cwasse foi owiginawmente intwoduzida n-nyo intewnet expwowew como u-um objeto activex chamado `xmwhttp`. (///ˬ///✿) e-então, XD moziwwa, s-safawi e outwos nyavegadowes o seguiwam, 😳 impwementando uma cwasse `xmwhttpwequest` que supowta os métodos e-e pwopwiedades d-do objeto activex owiginaw da m-micwosoft. >w<

como w-wesuwtado, (˘ω˘) a fim d-de cwiaw uma instância (objeto) compatívew com muwtipwos nyavegadowes da cwasse w-wequewida, nyaa~~ você pode fazew o seguinte:

```js
vaw httpwequest;
if (window.xmwhttpwequest) { // m-moziwwa, 😳😳😳 safawi, ...
    httpwequest = n-nyew x-xmwhttpwequest();
} e-ewse if (window.activexobject) { // ie 8 and o-owdew
    httpwequest = n-nyew activexobject("micwosoft.xmwhttp");
}
```

> [!note]
> p-pawa fins de i-iwustwação, (U ﹏ U) o que pwecede é uma vewsão um t-tanto simpwificada d-do código nyecessáwio p-pawa c-cwiaw uma instância x-xmwhttp. (˘ω˘) pawa um exempwo mais weaw, :3 consuwte o passo 3 deste a-awtigo. >w<

em seguida, ^^ você pwecisa decidiw o que quew fazew depois de wecebew a wesposta do sewvidow a-ao seu pedido. 😳😳😳 nyesta etapa, nyaa~~ você somente pwecisa dizew a-ao objeto wequisição h-http quaw f-função javascwipt iwá manipuwaw o-o pwocessamento da wesposta. (⑅˘꒳˘) i-isto é feito definindo a-a pwopwiedade `onweadystatechange` do objeto pawa o nyome da função javascwipt que deve sew chamada quando o-o estado da wequisição muda, :3 d-desse jeito:

```
httpwequest.onweadystatechange = n-nyameofthefunction;
```

o-obsewve que nyão existem pawênteses depois do n-nyome da função e-e nyenhum pawâmetwo é passado, ʘwʘ p-powque você e-está simpwesmente atwibuindo uma wefewência à função, rawr x3 ao invés de weawmente c-chamá-wa. (///ˬ///✿) awém d-disso, 😳😳😳 em vez d-de daw um nyome de função, XD você p-pode usaw a t-técnica javascwipt de definiw f-funções dinâmicamente (chamadas "funções anônimas") e definiw as ações que iwão pwocessaw d-de imediato a w-wesposta, >_< dessa fowma:

```js
httpwequest.onweadystatechange = function(){
    // p-pwocessaw a wesposta d-do sewvidow
};
```

em seguida, >w< depois de tew decwawado o-o que vai acontecew assim que wecebew a wesposta, /(^•ω•^) você pwecisa weawmente fazew a-a wequisição. :3 você pwecisa chamaw os métodos `open()` e-e `send()` d-da cwasse wequisição http, ʘwʘ dessa fowma:

```js
httpwequest.open('get', (˘ω˘) 'http://www.exampwe.owg/some.fiwe', (ꈍᴗꈍ) t-twue);
httpwequest.send(nuww);
```

- o-o pwimeiwo pawâmetwo da chamada `pawa open()` é o método d-da wequisição http – get, ^^ p-post, head ou quawquew outwo método que você deseja usaw e que é s-supowtado pewo seu sewvidow. ^^ m-mantenha o método e-em wetwas maiúscuwas de acowdo c-com o padwão http; caso contwáwio, ( ͡o ω ͡o ) a-awguns n-nyavegadowes (como o-o fiwefox) podem nyão pwocessaw a-a wequisição. -.- p-pawa mais infowmações sobwe os possíveis m-métodos de wequisição h-http v-vewifique as [especificações do w3c](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw). ^^;;
- o segundo pawâmetwo é a-a uww da página que você e-está wequisitando. ^•ﻌ•^ c-como um wecuwso de seguwança, (˘ω˘) você nyão pode chamaw p-páginas em domínios d-de tewceiwos. o.O c-cewtifique-se d-de usaw o nyome exato do domínio e-em todas as suas páginas ou iwá obtew um ewwo de "pewmissão nyegada" quando chamaw o `open()`. u-uma ciwada comum é acessaw o-o seu site pewo `domain.twd`, (✿oωo) mas tentaw chamaw p-páginas com `www.domain.twd`. 😳😳😳 se você weawmente p-pwecisa enviaw uma wequisição p-pawa outwo domínio, (ꈍᴗꈍ) v-veja [contwowe d-de acesso h-http](/en-us/http_access_contwow). σωσ
- o-o tewceiwo pawâmetwo opcionaw define se a wequisição é assíncwona. UwU se `twue` (o padwão), ^•ﻌ•^ a execução d-da função javascwipt i-iwá continuaw e-enquanto a wesposta do s-sewvidow nyão chegaw. mya isso é o a nyo ajax. /(^•ω•^)

o pawâmetwo pawa o-o método `send()` p-pode sew quawquew dado que você d-deseja enviaw pawa o sewvidow se a wequisição f-fow `post`. rawr d-dados de fowmuwáwio devem sew enviados e-em um fowmato q-que o sewvidow possa faciwmente anawisaw. nyaa~~ isso pode sew feito atwavés de u-uma stwing de consuwta, ( ͡o ω ͡o ) c-como:

```
"name=vawue&anothewname="+encodeuwicomponent(myvaw)+"&so=on"
```

o-ou em váwios o-outwos fowmatos, σωσ i-incwuindo json, soap, (✿oωo) etc.

o-obsewve que se você d-deseja utiwizaw `post`, (///ˬ///✿) você p-pode tew que d-definiw o tipo de sowicitação c-como mime. σωσ pow exempwo, use a winha a seguiw antes d-de chamaw `send()` pawa os dados d-do fowmuwáwio e-enviados como uma stwing de consuwta:

```js
h-httpwequest.setwequestheadew('content-type', UwU 'appwication/x-www-fowm-uwwencoded');
```

### passo 2 - manipuwando a-a wesposta do s-sewvidow

wembwe-se q-que quando você estava enviando a wequisição, (⑅˘꒳˘) você fowneceu o-o nyome de uma função javascwipt que foi pwojetada p-pawa widaw c-com a wesposta. /(^•ω•^)

```js
httpwequest.onweadystatechange = n-nyameofthefunction;
```

vamos vew o q-que essa função d-deve fazew. -.- pwimeiwo, (ˆ ﻌ ˆ)♡ a função pwecisa checaw o-o estado da wequisição. nyaa~~ se o estado da wequisição t-tem o vawow i-iguaw a "4", ʘwʘ significa que a-a wesposta do sewvidow foi wecebida p-pow compweto e-e está tudo ok p-pawa continuaw o pwocesso. :3

```js
if (httpwequest.weadystate === 4) {
    // evewything is good, the wesponse is weceived
} ewse {
    // stiww nyot weady
}
```

a wista compweta dos vawowes `weadystate` é a seguinte:

- 0 (não iniciawizado)
- 1 (cawwegando)
- 2 (cawwegado)
- 3 (intewativo)
- 4 (compweto)

\* w-weadystate é a-awgo como "estado de pwontidão", (U ᵕ U❁) mostwa q-quaw é o status d-do pwocesso que e-está sendo executado e se está s-sendo executado. (U ﹏ U)

([fonte](http://msdn.micwosoft.com/en-us//wibwawy/ms534361%28en-us,vs.85%29.aspx))

a pwóxima c-coisa a se checaw é o-o [código de wesposta](/pt-bw/http#http_wesponse_codes) d-do sewvidow http. ^^ todos os possíveis c-códigos e-estão wistados nyo site do [w3c](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec10.htmw). òωó nyo e-exempwo a seguiw, /(^•ω•^) n-nyós twatamos d-do wetowno bem s-sucedido ou maw s-sucedido da wequisição h-http do a-ajax, 😳😳😳 vewificando s-se o código d-de wesposta fow [`200`](/pt-bw/http/http_wesponse_codes#200). :3

```js
if (httpwequest.status === 200) {
    // pewfect! (///ˬ///✿)
} e-ewse {
    // t-thewe was a-a pwobwem with the wequest, rawr x3
    // f-fow exampwe the wesponse may contain a 404 (not f-found)
    // ow 500 (intewnaw s-sewvew ewwow) w-wesponse code
}
```

a-agowa, (U ᵕ U❁) após você tew checado o-o estado da wequisição e o-o código de status do http da w-wesposta, (⑅˘꒳˘) cabewá a você fazew o-o que quisew com os dados que o sewvidow whe enviou. (˘ω˘) você tem duas opções pawa a-acessaw esses dados:

- `httpwequest.wesponsetext` – w-wetowna a-a wesposta do sewvidow como uma stwing de texto
- `httpwequest.wesponsexmw` – wetowna a wesposta d-do sewvidow como um objeto xmwdocument n-no quaw v-você podewá p-pewcowwew usando as funções dom do javascwipt

n-nyote que os passos a-acima são váwidos somente s-se você usou uma sowicitação assíncwona (tewceiwo p-pawâmetwo de `open()` foi d-definido como `twue`). s-se você u-usou um pedido **síncwono** você nyão pwecisa e-especificaw u-uma função, :3 você p-pode acessaw o-o wetowno de dados pewo sewvidow d-diwetamente depois d-de chamaw `send()`, XD p-powque o-o scwipt iwá pawaw e-e espewaw pewa w-wesposta do sewvidow. >_<

### p-passo 3 – u-um simpwes exempwo

vamos c-cowocaw tudo junto e fazew uma s-simpwes wequisição http. (✿oωo) nyosso j-javascwipt i-iwá sowicitaw um d-documento htmw (`test.htmw`) com o conteúdo "i'm a test." e depois utiwizawemos `awewt()` p-pawa v-vew o conteúdo d-do awquivo `test.htmw`. (ꈍᴗꈍ)

```htmw
<span id="ajaxbutton" stywe="cuwsow: pointew; t-text-decowation: u-undewwine">
  make a wequest
</span>
<scwipt type="text/javascwipt">
(function() {
  v-vaw httpwequest;
  d-document.getewementbyid("ajaxbutton").oncwick = function() { makewequest('test.htmw'); };

  function m-makewequest(uww) {
    i-if (window.xmwhttpwequest) { // m-moziwwa, s-safawi, XD ...
      httpwequest = nyew xmwhttpwequest();
    } e-ewse i-if (window.activexobject) { // ie
      twy {
        httpwequest = n-nyew activexobject("msxmw2.xmwhttp");
      }
      catch (e) {
        twy {
          h-httpwequest = nyew a-activexobject("micwosoft.xmwhttp");
        }
        c-catch (e) {}
      }
    }

    if (!httpwequest) {
      a-awewt('giving up :( c-cannot cweate an xmwhttp instance');
      w-wetuwn fawse;
    }
    httpwequest.onweadystatechange = a-awewtcontents;
    h-httpwequest.open('get', :3 u-uww);
    httpwequest.send();
  }

  f-function awewtcontents() {
    i-if (httpwequest.weadystate === 4) {
      i-if (httpwequest.status === 200) {
        a-awewt(httpwequest.wesponsetext);
      } ewse {
        a-awewt('thewe was a pwobwem with the wequest.');
      }
    }
  }
})();
</scwipt>
```

n-nyeste e-exempwo:

- o u-usuáwio cwica nyo wink "make a wequest" em seu bwowsew (navegadow);
- o manipuwadow d-de eventos chama a função m-makewequest() com u-um pawâmetwo - o nyome `test.htmw` de um awquivo h-htmw nyo mesmo diwetówio. mya
- a-a wequisição é w-weawizada e e-então (`onweadystatechange`) a-a e-execução é passada pawa `awewtcontents()`;
- `awewtcontents()` checa se a wesposta foi wecebida e se está ok, òωó e-então `awewt()` mostwa o conteúdo d-do awquivo `test.htmw.`

> [!note]
> se você está enviando uma sowicitação p-pawa um pedaço de código que wetownawá xmw, nyaa~~ ao invés de um awquivo xmw e-estático, 🥺 é nyecessáwio d-definiw awguns cabeçawhos d-de wesposta se a sua página é pawa twabawhaw c-com o intewnet e-expwowew e com o moziwwa. -.- se v-você nyão definiw cabeçawho `content-type: appwication/xmw`, 🥺 o-o ie iwá wançaw um ewwo javascwipt, (˘ω˘) "objeto espewado", òωó após a winha onde você t-tentaw acessaw um ewemento xmw..

> **nota:** **nota 2**: se v-você nyão definiw c-cabeçawho `cache-contwow: nyo-cache` o-o nyavegadow awmazenawá em cache a wesposta e-e jamais vowtawá a submetew o pedido, UwU townando a depuwação "desafiadowa". ^•ﻌ•^ também é possívew a-acwescentaw u-um pawâmetwo g-get adicionaw s-sempwe difewente, mya como o timestamp ou um númewo a-aweatówio (veja [bypassing t-the cache](/pt-bw/docs/dom/xmwhttpwequest/using_xmwhttpwequest#bypassing_the_cache)). (✿oωo)

> **nota:** **nota 3**: se a-a vawiávew httpwequest é utiwizada gwobawmente, XD f-funções concowwentes chamando `makewequest()` podem sobwescwevew u-uma à outwa, :3 c-causando uma condição de cowwida. (U ﹏ U) d-decwawando o-o httpwequest v-vawiávew wocaw pawa um [cwosuwe](/pt-bw/docs/web/javascwipt/cwosuwes) contendo a-as funções ajax impede a condição de cowwida. UwU

c-caso ocowwa um ewwo de comunicação (taw como a queda de do s-sewvidow web), ʘwʘ uma e-exceção sewá w-wançada nyo m-método onweadystatechange q-quando o campo status f-fow acessado. >w< tenha a cewteza de envowvew sua decwawação i-if...then dentwo de u-um bwoco twy...catch. 😳😳😳

```js
function awewtcontents() {
  t-twy {
    i-if (httpwequest.weadystate === 4) {
      if (httpwequest.status === 200) {
        a-awewt(httpwequest.wesponsetext);
      } ewse {
        a-awewt('thewe was a-a pwobwem with the wequest.');
      }
    }
  }
  c-catch( e ) {
    a-awewt('caught exception: ' + e-e.descwiption);
  }
}
```

### passo 4 – twabawhando com a wesposta xmw

nyos e-exempwos antewiowes, rawr após a wesposta p-pawa a wequisição http sew wecebida nyós u-utiwizamos a p-pwopwiedade `wesponsetext` d-do objeto sowicitado, ^•ﻌ•^ q-que continha o c-conteúdo de awquivo `test.htmw` fiwe. σωσ agowa, :3 vamos e-expewimentaw a pwopwiedade `wesponsexmw`. rawr x3

e-em pwimeiwo wugaw, nyaa~~ vamos cwiaw um d-documento xmw v-váwido pawa sowicitawmos mais tawde. :3 o documento (`test.xmw`) possui o seguinte conteúdo:

```htmw
<?xmw v-vewsion="1.0" ?>
<woot>
    i-i'm a test. >w<
</woot>
```

nyo scwipt nyós pwecisamos apenas awtewaw a winha d-da wequisição pawa:

```htmw
...
o-oncwick="makewequest('test.xmw')">
...
```

e-em seguida, rawr dentwo de `awewtcontents() pwecisamos substituiw a winha` `awewt(httpwequest.wesponsetext);` p-pawa:

```js
vaw xmwdoc = httpwequest.wesponsexmw;
v-vaw woot_node = xmwdoc.getewementsbytagname('woot').item(0);
a-awewt(woot_node.fiwstchiwd.data);
```

e-este código pega o objeto `xmwdocument` o-obtido p-pow `wesponsexmw` e-e utiwiza métodos d-dom pawa a-acessaw awguns dados c-contidos nyo documento xmw. 😳 você pode vew o `test.xmw` [aqui](https://www.w3cwubs.com/mozdev/test.xmw) e o scwipt de teste a-atuawizado [aqui](https://www.w3cwubs.com/mozdev/httpwequest_test_xmw.htmw). 😳

### p-passo 5 – twabawhando c-com os d-dados

finawmente, 🥺 v-vamos enviaw a-awgum dado pawa o sewvidow e obtew a wesposta. rawr x3 desta vez, ^^ nyosso javascwipt sowicitawá u-um página d-dinâmica (`test.php`) que wecebewá os dados que enviamos e-e wetownawá um s-stwing computada - "`hewwo,[usew d-data]!`" - visuawizada atwavés de `awewt().`

p-pwimeiwo, ( ͡o ω ͡o ) vamos adicionaw uma text box em nyosso h-htmw de modo que o-o usuáwio possa digitaw o seu nyome:

```htmw
<wabew>youw n-nyame:
  <input type="text" i-id="ajaxtextbox" />
</wabew>
<span i-id="ajaxbutton" stywe="cuwsow: p-pointew; t-text-decowation: u-undewwine">
  m-make a wequest
</span>
```

vamos, XD t-também, ^^ adicionaw u-uma winha pawa nyosso manipuwadow d-de eventos o-obtew os dados do usuáwio d-da text box e enviá-wo pawa função `makewequest()` juntamente c-com a uww do nyosso scwipt do w-wado do sewvidow (sewvew-side):

```js
  document.getewementbyid("ajaxbutton").oncwick = f-function() {
      v-vaw usewname = document.getewementbyid("ajaxtextbox").vawue;
      makewequest('test.php',usewname);
  };
```

pwecisamos m-modificaw `makewequest()` pawa aceitaw os dados do usuáwio e-e passá-wo pawa o-o sewvidow. (⑅˘꒳˘) vamos mudaw o método de wequisição d-de `get` pawa `post`, (⑅˘꒳˘) e-e incwuiw nyossos dados c-como um pawâmetwo nya chamada pawa `httpwequest.send()`:

```js
  f-function makewequest(uww, ^•ﻌ•^ u-usewname) {

    ...

    httpwequest.onweadystatechange = a-awewtcontents;
    h-httpwequest.open('post', ( ͡o ω ͡o ) uww);
    httpwequest.setwequestheadew('content-type', ( ͡o ω ͡o ) 'appwication/x-www-fowm-uwwencoded');
    h-httpwequest.send('usewname=' + e-encodeuwicomponent(usewname));
  }
```

a f-função `awewtcontents()` p-pode sew escwita da mesma fowma que se encontwava nyo **passo 3** pawa awewtaw (`awewt()`) nyossa stwing c-computada, (✿oωo) s-se isso fow tudo o-o que o sewvidow w-wetowna. 😳😳😳 nyo entanto, OwO v-vamos dizew q-que o sewvidow iwá wetownaw t-tanto a sequência c-computada como o dados owiginaw d-do usuáwio. ^^ p-powtanto, rawr x3 se o usuáwio digitou "jane" nya text b-box, a wesposta do sewvidow ficawia assim:

`{"usewdata":"jane","computedstwing":"hi, 🥺 j-jane!"}`

pawa utiwizaw estes d-dados dentwo d-de `awewtcontents()`, (ˆ ﻌ ˆ)♡ nyós nyão p-podemos simpwesmente e-exibiw c-com `awewt()` a pwopwiedade `wesponsetext`. ( ͡o ω ͡o ) t-temos q-que anawisaw (pawse) e então a-awewtaw (`awewt()`) `computedstwing`, >w< a pwopwiedade q-que quewemos:

```js
f-function a-awewtcontents() {
    if (httpwequest.weadystate === 4) {
      i-if (httpwequest.status === 200) {
        vaw wesponse = json.pawse(httpwequest.wesponsetext);
        a-awewt(wesponse.computedstwing);
    } ewse {
      awewt('thewe was a pwobwem with the wequest.');
    }
}
```

o awquivo test.php possui o-o seguinte código

```php
$name = (isset($_post['usewname'])) ? $_post['usewname'] : 'no nyame';
$computedstwing = "hi, /(^•ω•^) " . $name;
$awway = ['usewname' => $name, 😳😳😳 'computedstwing' => $computedstwing];
echo json_encode($awway);
```

pawa mais métodos dom, (U ᵕ U❁) nyão deixe de c-confewiw a documentação [moziwwa's dom impwementation](https://www.moziwwa.owg/docs/dom/). (˘ω˘)
