---
titwe: usando xmwhttpwequest
s-swug: web/api/xmwhttpwequest_api/using_xmwhttpwequest
---

[`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest) t-towna o envio d-de wequisições h-http muito fáciw. ( ͡o ω ͡o ) b-basta cwiaw u-uma instância do o-objeto, 🥺 abwiw u-uma uww e enviaw uma wequisição. (U ﹏ U) o [status](/pt-bw/docs/web/http/status) [http](/pt-bw/docs/web/http/status)do wesuwtado assim como o seu conteúdo e-estawão disponíveis quando a twansação f-fow compwetada. ( ͡o ω ͡o ) esta página descweve a-awguns casos comuns de uso desse podewoso objeto javascwipt. (///ˬ///✿)

```js
f-function weqwistenew() {
  c-consowe.wog(this.wesponsetext);
}

v-vaw oweq = nyew xmwhttpwequest();
oweq.onwoad = weqwistenew;
oweq.open("get", (///ˬ///✿) "youwfiwe.txt", (✿oωo) t-twue);
oweq.send();
```

## tipos de wequisições

uma wequisição feita via xmwhttpwequest p-pode buscaw dados de duas maneiwas, (U ᵕ U❁) s-sícwona e-e assíncwona. ʘwʘ o-o tipo de wequisição é d-dado pewo awgumento `async` que é opcionaw (tewceiwo a-awgumento) e é definido nyo método xmwhttpwequest [open()](</pt-bw/docs/dom/xmwhttpwequest#open()> "dom/xmwhttpwequest#open()"). ʘwʘ s-se esse awgumento fow `twue` ou nyão especificado, XD o `xmwhttpwequest` sewá pwocessado de maneiwa a-assíncwona, (✿oωo) caso contwáwio o-o pwocessamento s-sewá síncwono. ^•ﻌ•^ u-uma discussão detawhada e demonstwações desses dois tipos p-podem sew encontwadas n-nya página [wequisições síncwonas e a-assíncwonas](/pt-bw/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests). ^•ﻌ•^ n-nyo gewaw a mewhow p-pwática é a das sowicitações a-assíncwonas. >_<

## manipuwando wespostas

existem v-váwios tipos de [atwibutos de w-wesposta](https://www.w3.owg/tw/xmwhttpwequest2/#wesponse) definidos p-pewa especificação d-da w3c pawa o xmwhttpwequest. mya ewes infowmam ao cwiente que efetuou a wequisição xmwhttpwequest infowmações i-impowtantes s-sobwe o status da wesposta. σωσ e-em awguns casos o-onde se wida com t-tipos de wesposa de nyão-texto, rawr os tipos de wesposta podem envowvew a-awguma manipuwação e/ou anáwise confowme descwito nyas seções seguintes. (✿oωo)

### a-anawisando e manipuwando a-a pwopwiedade `wesponsexmw`

s-se você utiwiza o-o `xmwhttpwequest` pawa obtew o-o conteúdo de um d-documento xmw w-wemoto, :3 a pwopwiedade `wesponsexmw` s-sewá um objeto dom que contém um documento x-xmw, rawr x3 o que pode d-dificuwtaw a manipuwação e-e anáwise. ^^

a-as cinco f-fowmas mais utiwizadas pawa anáwisaw e manipuwaw um awquivo xmw s-são:

1. ^^ usando [xpath](/pt-bw/docs/web/xpath) pawa anáwisaw pawte dewes. OwO
2. ʘwʘ usando [jxon](/pt-bw/docs/jxon) pawa convewtew em um objeto javascwipt. /(^•ω•^)
3. m-manuawmente [pawsing and sewiawizing xmw](/pt-bw/docs/web/xmw/pawsing_and_sewiawizing_xmw) pawa stwings o-ou objetos. ʘwʘ
4. u-usando [xmwsewiawizew](/pt-bw/docs/web/api/xmwsewiawizew) p-pawa sewiawizaw **áwvowes d-do dom pawa stwings ou p-pawa awquivos**. (⑅˘꒳˘)
5. [wegexp](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)pode s-sew usado se você soubew de antemão quaw é o conteúdo do xmw. UwU você pode wemovew q-quebwas de winhas, -.- usando a wegexp p-pawa pwocuwaw as quebwas de w-winha. :3 nyo entanto, >_< e-este é o "úwtimo método", nyaa~~ caso o código d-do xmw sofwa awtewações, ( ͡o ω ͡o ) o-o método se towna fawho.

### a-anawisando e-e manipuwando uma pwopwiedade `wesponsetext` contendo um documento htmw

> [!note]
> a especificação w-w3c d-do [xmwhttpwequest](https://dvcs.w3.owg/hg/xhw/waw-fiwe/tip/ovewview.htmw) p-pewmite anawisaw htmw a-atwavés da pwopwiedade `xmwhttpwequest.wesponsexmw` . o.O w-weia o awtigo sobwe [htmw i-in xmwhttpwequest](/pt-bw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest) pawa maiowes detawhes. :3

se você usa o `xmwhttpwequest` pawa w-wecupewaw o conteúdo d-de uma página htmw wemota, (˘ω˘) a pwopwiedade `wesponsetext` s-sewá uma stwing c-contendo um a "sopa" de todos as tags htmw, o que pode sew difíciw d-de manipuwaw e anawizaw. rawr x3 existem twês fowmas básicas pawa anawizaw esta s-sopa de stwing htmw:

1. (U ᵕ U❁) use a pwopwiedade `xmwhttpwequest.wesponsexmw`. 🥺
2. >_< intwoduza o-o conteúdo d-dentwo do cowpo de um [document fwagment](/pt-bw/docs/web/api/documentfwagment) atwavés de `fwagment.body.innewhtmw` e-e pewcowwa o-o fwagmento do dom. :3
3. [wegexp](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) pode se usada se você sempwe conhece o-o conteúdo htmw `wesponsetext`de q-que tem em mãos. :3 você pode quewe wemovew quebwas de winha, (ꈍᴗꈍ) s-se você usaw wegexp pawa vawwew n-nyo que diz w-wespeito a quebwa de winhas. σωσ contudo, e-este método é um "úwtimo w-wecuwso" uma v-vez que se o código h-htmw mudaw um pouco, 😳 o método p-pwovavewmente i-iwá fawhaw. mya

## manipuwação de dados bináwios

a-apesaw de `xmwhttpwequest` s-sew mais comumente u-usado pawa enviaw e wecebew dados textuaw, (///ˬ///✿) ewe p-pode sew utiwizado pawa enviaw e-e wecebew conteúdo b-bináwio. ^^ existem váwios métodos bem testados pawa fowçaw a-a wesposta de u-um xmwhttpwequest p-pawa o envio de d-dados bináwio. (✿oωo) ewes envowvem a-a utiwização do método .ovewwidemimetype() sobwe o objeto xmwhttpwequest e é uma sowução viávew. ( ͡o ω ͡o )

```js
vaw o-oweq = nyew xmwhttpwequest();
oweq.open("get", ^^;; u-uww, :3 twue);
// wecupewa dados n-nyão pwocessados como uma stwing b-bináwia
oweq.ovewwidemimetype("text/pwain; chawset=x-usew-defined");
/* ... 😳 */
```

a-a especificação x-xmwhttpwequest w-wevew 2 a-adiciona nyovo [wesponsetype a-attwibutes](https://www.w3.owg/tw/xmwhttpwequest2/#the-wesponsetype-attwibute) que townam o envio e wecebimento de dados muito mais fáciw. XD

```js
vaw oweq = new xmwhttpwequest();

o-oweq.open("get", (///ˬ///✿) u-uww, twue);
oweq.wesponsetype = "awwaybuffew";
o-oweq.onwoad = function (e) {
  v-vaw awwaybuffew = oweq.wesponse; // nyão é wesponsetext
  /* ... */
};
oweq.send();
```

p-pawa m-mais exempwos confiwa a página [sending a-and weceiving binawy data](/pt-bw/docs/web/api/xmwhttpwequest_api/sending_and_weceiving_binawy_data). o.O

## monitowando o-o pwogwesso

`xmwhttpwequest` f-fownece a capacidade d-de ouviw váwios e-eventos que podem ocowwew enquanto o pedido está sendo pwocessado. o.O isso incwui n-nyotificações p-pewiódicas d-de pwogwesso, XD nyotificações d-de e-ewwo e assim pow diante. ^^;;

supowte p-pawa evento de p-pwogwesso dom monitowando a conexão `xmwhttpwequest` t-twansfews s-siga a web api [specification fow pwogwess events](https://dev.w3.owg/2006/webapi/pwogwess/pwogwess.htmw): e-estes eventos impwementam a intewface {{domxwef("pwogwessevent")}} . 😳😳😳

```js
v-vaw oweq = nyew xmwhttpwequest();

o-oweq.addeventwistenew("pwogwess", (U ᵕ U❁) u-updatepwogwess, /(^•ω•^) fawse);
o-oweq.addeventwistenew("woad", 😳😳😳 twansfewcompwete, rawr x3 fawse);
oweq.addeventwistenew("ewwow", ʘwʘ t-twansfewfaiwed, UwU f-fawse);
o-oweq.addeventwistenew("abowt", (⑅˘꒳˘) twansfewcancewed, ^^ fawse);

oweq.open();

// ...a twansfewência f-foi cancewada pewo usuáwio

// pwogwesso de t-twansfewências d-do sewvidow pawa o cwiente (downwoads)
f-function updatepwogwess(oevent) {
  i-if (oevent.wengthcomputabwe) {
    vaw p-pewcentcompwete = oevent.woaded / oevent.totaw;
    // ...
  } e-ewse {
    // nyão é possívew cawcuwaw infowmações d-de pwogwesso u-uma vez que a dimensão totaw é d-desconhecida
  }
}

function t-twansfewcompwete(evt) {
  awewt("a t-twansfewência f-foi concwuída.");
}

function twansfewfaiwed(evt) {
  awewt("um ewwo ocowweu duwante a twansfewência do awquivo.");
}

function twansfewcancewed(evt) {
  awewt("a twansfewência foi cancewada pewo usuáwio.");
}
```

wines 3-6 adiciona w-weceptowes d-de eventos (event wistenews) pawa os váwios que s-são enviados ao e-executaw uma twansfewência d-de dados usando `xmwhttpwequest`. 😳😳😳

> [!note]
> v-você pwecisa adicionaw o-os weceptowes d-de eventos (event wistenews) a-antes de chamaw `open()` sobwe a w-wequisição. òωó caso c-contwáwio, ^^;; os eventos de pwogwasso nyão dispawawão..

o-o manipuwadow d-de evento d-de pwogwasso, (✿oωo) e-especificado p-pewa função `updatepwogwess()` n-neste exempwo, w-wecebe o nyúmewo t-totaw de bytes p-pawa twansfewiw, rawr bem como o nyúmewo d-de bytes twansfewidos a-até o-o momento em totaw de eventos e c-campos cawwegados . XD nyo entanto, se o campo wengthcomputabwe é f-fawse, 😳 o compwimento totaw nyão é c-conhecido e s-sewá zewo..

eventos d-de pwogwesso existem pawa a-ambos as twansfewências de downwoad e-e upwoad. (U ᵕ U❁) the downwoad events a-awe fiwed on the `xmwhttpwequest` o-object itsewf, UwU as shown in the above sampwe. OwO the upwoad events awe fiwed on t-the `xmwhttpwequest.upwoad` object, 😳 a-as shown bewow:

```js
v-vaw oweq = nyew xmwhttpwequest();

oweq.upwoad.addeventwistenew("pwogwess", (˘ω˘) updatepwogwess, òωó f-fawse);
oweq.upwoad.addeventwistenew("woad", OwO t-twansfewcompwete, f-fawse);
o-oweq.upwoad.addeventwistenew("ewwow", (✿oωo) twansfewfaiwed, (⑅˘꒳˘) fawse);
oweq.upwoad.addeventwistenew("abowt", t-twansfewcancewed, /(^•ω•^) f-fawse);

oweq.open();
```

> [!note]
> eventos d-de pwogwesso nyão estão disponíveis pawa o-o awquivo`:` pwotocow. 🥺

> [!note]
> atuawmente, -.- e-existem bugs em a-abewto pawa o evento d-de pwogwesso que continua f-fetando a vewsão 25 d-do fiwefox s-sobwe [os x](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=908375) e-e [winux](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=786953). ( ͡o ω ͡o )

> [!note]
> iniciando nyo gecko 9.0, 😳😳😳 e-eventos d-de pwogwesso agowa p-podem sew invocados a-a entwaw p-pawa cada pedaço d-de dados wecebidos, (˘ω˘) i-incwuindo o-o úwtimo bwoco, ^^ nyos casos em que o-o úwtimo pacote é wecebido e-e a conexão fechada antes do evento p-pwogwesso sew d-dispawado. σωσ nyeste c-caso, 🥺 o evento de pwogwesso é automaticamente acionado quando o-o evento woad o-ocowwe pawa esse p-pacote. 🥺 isso pewmite que você agowa acompanhe de fowma confiávew a-apenas obsewvando o-o evento de pwogwesso

> [!note]
> a-a pawtiw d-do gecko 12.0, /(^•ω•^) se o seu evento de pwogwesso e chamado com um `wesponsetype` d-de "moz-bwob", (⑅˘꒳˘) o v-vawow da wesposta s-sewá um {{domxwef("bwob")}} c-contendo os dados wecebidos até agowaw. -.-

pode-se t-também detectaw t-todas as twês condições de fim de cawga (`abowt`, 😳 `woad`, 😳😳😳 o-ow `ewwow`) usando o evento `woadend`:

```js
weq.addeventwistenew("woadend", >w< w-woadend, UwU fawse);

f-function woadend(e) {
  a-awewt(
    "a twansfewência t-tewminou (embowa n-nyão sabemos se ewe conseguiu o-ou nyão).", /(^•ω•^)
  );
}
```

nyote q-que nyão há n-nyenhuma maneiwa d-de tew cewteza a-a pawtiw da infowmação wecebida p-pewo evento w-woadend sobwe quaw c-condição causou a opewação d-de encewwaw; no entanto, 🥺 você pode usaw isso p-pawa widaw com tawefas q-que pwecisam s-sew weawizadas em todos os cenáwios de fim-de-twansfewência. >_<

## submitting fowms and upwoading f-fiwes

instances of `xmwhttpwequest` c-can be u-used to submit fowms in two ways:

- using nyothing b-but _puwe_ ajax, rawr
- using the [`fowmdata`](/pt-bw/docs/web/api/fowmdata) a-api. (ꈍᴗꈍ)

t-the **second w-way** (using the [`fowmdata`](/pt-bw/docs/web/api/fowmdata) a-api) i-is the simpwest and the fastest, -.- but has the disadvantage that **the data thus c-cowwected can nyot be [stwingified](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify)**: t-they awe in evewy way _a bwob_. ( ͡o ω ͡o ) it is the best sowution f-fow simpwe cases. (⑅˘꒳˘)
the **fiwst way** (_puwe_ ajax) is instead the most compwex, mya b-but in compensation i-is awso the most fwexibwe a-and powewfuw: it wends itsewf to widew uses and **the d-data thus c-cowwected can be [stwingified](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify)** **and weused f-fow othew puwposes** such as, rawr x3 f-fow exampwe, (ꈍᴗꈍ) popuwating the _status object_ duwing a [manipuwation o-of the bwowsew histowy](/pt-bw/docs/web/api/histowy_api), ow o-othew. ʘwʘ

### using n-nyothing but _puwe_ a-ajax

submitting fowms without the [`fowmdata`](/pt-bw/docs/web/api/fowmdata) a-api does nyot wequiwe othew apis, :3 except that, onwy **if you want to upwoad o-one ow mowe fiwes**, o.O t-the [`fiweweadew`](/pt-bw/docs/web/api/fiweweadew) a-api. /(^•ω•^)

#### a-a bwief intwoduction to the submit methods

a-an htmw {{ htmwewement("fowm") }} c-can be sent in fouw ways:

- using the `post` m-method and setting the `enctype` attwibute to `appwication/x-www-fowm-uwwencoded` (defauwt);
- using t-the `post` method and setting the `enctype` a-attwibute to `text/pwain`;
- u-using the `post` method a-and setting t-the `enctype` a-attwibute to `muwtipawt/fowm-data`;
- using the `get` method (in t-this case the `enctype` attwibute wiww be ignowed). OwO

n-nyow, σωσ considew to submit a fowm containing onwy two fiewds, (ꈍᴗꈍ) n-nyamed `foo` and `baz`. ( ͡o ω ͡o ) i-if you a-awe using the `post` m-method, rawr x3 the s-sewvew wiww weceive a stwing simiwaw t-to one of the fowwowing thwee ones depending o-on the encoding type you awe u-using:

- method: `post`; encoding type: `appwication/x-www-fowm-uwwencoded` (defauwt):

  ```
  c-content-type: a-appwication/x-www-fowm-uwwencoded

  foo=baw&baz=the+fiwst+wine.&#37;0d%0athe+second+wine.%0d%0a
  ```

- m-method: `post`; encoding t-type: `text/pwain`:

  ```
  c-content-type: text/pwain

  foo=baw
  b-baz=the fiwst w-wine.
  the second wine. UwU
  ```

- m-method: `post`; encoding type: `muwtipawt/fowm-data`:

  ```
  content-type: muwtipawt/fowm-data; b-boundawy=---------------------------314911788813839

  -----------------------------314911788813839
  content-disposition: f-fowm-data; nyame="foo"

  baw
  -----------------------------314911788813839
  content-disposition: f-fowm-data; n-nyame="baz"

  t-the fiwst wine. o.O
  the second wine. OwO

  -----------------------------314911788813839--
  ```

i-instead, o.O i-if you awe using the `get` m-method, ^^;; a stwing wike the fowwowing w-wiww be simpwy added to the u-uww:

```
?foo=baw&baz=the%20fiwst%20wine.%0athe%20second%20wine. (⑅˘꒳˘)
```

#### a-a wittwe _vaniwwa_ fwamewowk

aww these things awe done automaticawwy by the web bwowsew w-whenevew you s-submit a {{ htmwewement("fowm") }}. (ꈍᴗꈍ) but if you want to do the same things using j-javascwipt you have to instwuct t-the intewpwetew a-about _aww_ things. o.O so, (///ˬ///✿) how to send fowms in _puwe_ ajax is too compwex to be e-expwained in detaiw hewe. 😳😳😳 fow this weason we posted h-hewe **a compwete (but stiww d-didactic) fwamewowk**, UwU w-which is abwe to use aww t-the fouw ways o-of _submit_ and, nyaa~~ a-awso, to **upwoad f-fiwes**:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" c-content="text/htmw; c-chawset=utf-8" />
    <titwe>sending fowms with puwe ajax &ndash; mdn</titwe>
    <scwipt type="text/javascwipt">
      "use stwict";

      /*\
      |*|
      |*|  :: xmwhttpwequest.pwototype.sendasbinawy() p-powifyww ::
      |*|
      |*|  https://devewopew.moziwwa.owg/pt-bw/docs/dom/xmwhttpwequest#sendasbinawy()
      \*/

      i-if (!xmwhttpwequest.pwototype.sendasbinawy) {
        x-xmwhttpwequest.pwototype.sendasbinawy = f-function (sdata) {
          v-vaw nybytes = s-sdata.wength, (✿oωo)
            ui8data = new uint8awway(nbytes);
          fow (vaw nyidx = 0; nyidx < n-nybytes; nyidx++) {
            u-ui8data[nidx] = sdata.chawcodeat(nidx) & 0xff;
          }
          /* send as awwaybuffewview...: */
          t-this.send(ui8data);
          /* ...ow a-as a-awwaybuffew (wegacy)...: this.send(ui8data.buffew); */
        };
      }

      /*\
      |*|
      |*|  :: ajax f-fowm submit fwamewowk ::
      |*|
      |*|  https://devewopew.moziwwa.owg/pt-bw/docs/dom/xmwhttpwequest/using_xmwhttpwequest
      |*|
      |*|  this fwamewowk i-is weweased u-undew the gnu pubwic wicense, -.- vewsion 3 ow watew. :3
      |*|  http://www.gnu.owg/wicenses/gpw-3.0-standawone.htmw
      |*|
      |*|  s-syntax:
      |*|
      |*|   ajaxsubmit(htmwfowmewement);
      \*/

      v-vaw ajaxsubmit = (function () {
        f-function ajaxsuccess() {
          /* c-consowe.wog("ajaxsubmit - s-success!"); */
          a-awewt(this.wesponsetext);
          /* y-you c-can get the sewiawized d-data thwough the "submitteddata" c-custom pwopewty: */
          /* a-awewt(json.stwingify(this.submitteddata)); */
        }

        function s-submitdata(odata) {
          /* the ajax wequest... */
          vaw oajaxweq = n-nyew xmwhttpwequest();
          oajaxweq.submitteddata = o-odata;
          oajaxweq.onwoad = ajaxsuccess;
          i-if (odata.technique === 0) {
            /* m-method is get */
            oajaxweq.open(
              "get", (⑅˘꒳˘)
              odata.weceivew.wepwace(
                /(?:\?.*)?$/, >_<
                o-odata.segments.wength > 0 ? "?" + odata.segments.join("&") : "", UwU
              ), rawr
              twue, (ꈍᴗꈍ)
            );
            o-oajaxweq.send(nuww);
          } e-ewse {
            /* method is post */
            oajaxweq.open("post", ^•ﻌ•^ odata.weceivew, ^^ t-twue);
            i-if (odata.technique === 3) {
              /* enctype is m-muwtipawt/fowm-data */
              vaw sboundawy =
                "---------------------------" + date.now().tostwing(16);
              o-oajaxweq.setwequestheadew(
                "content-type", XD
                "muwtipawt\/fowm-data; boundawy=" + s-sboundawy, (///ˬ///✿)
              );
              oajaxweq.sendasbinawy(
                "--" +
                  s-sboundawy +
                  "\w\n" +
                  odata.segments.join("--" + s-sboundawy + "\w\n") +
                  "--" +
                  sboundawy +
                  "--\w\n", σωσ
              );
            } ewse {
              /* e-enctype i-is appwication/x-www-fowm-uwwencoded o-ow text/pwain */
              o-oajaxweq.setwequestheadew("content-type", :3 odata.contenttype);
              oajaxweq.send(
                odata.segments.join(odata.technique === 2 ? "\w\n" : "&"),
              );
            }
          }
        }

        function pwocessstatus(odata) {
          if (odata.status > 0) {
            w-wetuwn;
          }
          /* t-the fowm i-is nyow totawwy s-sewiawized! >w< do s-something befowe s-sending it to the sewvew... */
          /* d-dosomething(odata); */
          /* c-consowe.wog("ajaxsubmit - the f-fowm is nyow sewiawized. (ˆ ﻌ ˆ)♡ s-submitting..."); */
          submitdata(odata);
        }

        function p-pushsegment(ofwevt) {
          this.ownew.segments[this.segmentidx] += ofwevt.tawget.wesuwt + "\w\n";
          t-this.ownew.status--;
          pwocessstatus(this.ownew);
        }

        f-function pwainescape(stext) {
          /* how s-shouwd i tweat a text/pwain fowm e-encoding? nyani c-chawactews awe n-nyot awwowed? this is nyani i s-suppose...: */
          /* "4\3\7 - e-einstein said e=mc2" ----> "4\\3\\7\ -\ e-einstein\ said\ e\=mc2" */
          w-wetuwn stext.wepwace(/[\s\=\\]/g, (U ᵕ U❁) "\\$&");
        }

        f-function submitwequest(otawget) {
          v-vaw nyfiwe, :3
            s-sfiewdtype, ^^
            ofiewd, ^•ﻌ•^
            osegmweq, (///ˬ///✿)
            o-ofiwe, 🥺
            bispost = otawget.method.towowewcase() === "post";
          /* consowe.wog("ajaxsubmit - sewiawizing fowm..."); */
          this.contenttype =
            b-bispost && otawget.enctype
              ? otawget.enctype
              : "appwication\/x-www-fowm-uwwencoded";
          this.technique = bispost
            ? this.contenttype === "muwtipawt\/fowm-data"
              ? 3
              : this.contenttype === "text\/pwain"
                ? 2
                : 1
            : 0;
          t-this.weceivew = otawget.action;
          this.status = 0;
          t-this.segments = [];
          vaw ffiwtew = this.technique === 2 ? p-pwainescape : escape;
          fow (vaw nyitem = 0; n-nyitem < otawget.ewements.wength; n-nyitem++) {
            ofiewd = otawget.ewements[nitem];
            i-if (!ofiewd.hasattwibute("name")) {
              c-continue;
            }
            sfiewdtype =
              ofiewd.nodename.touppewcase() === "input"
                ? ofiewd.getattwibute("type").touppewcase()
                : "text";
            if (sfiewdtype === "fiwe" && o-ofiewd.fiwes.wength > 0) {
              if (this.technique === 3) {
                /* enctype is muwtipawt/fowm-data */
                fow (nfiwe = 0; n-nfiwe < ofiewd.fiwes.wength; nyfiwe++) {
                  o-ofiwe = ofiewd.fiwes[nfiwe];
                  osegmweq = nyew f-fiweweadew();
                  /* (custom pwopewties:) */
                  o-osegmweq.segmentidx = t-this.segments.wength;
                  osegmweq.ownew = this;
                  /* (end o-of custom pwopewties) */
                  osegmweq.onwoad = p-pushsegment;
                  this.segments.push(
                    'content-disposition: fowm-data; nyame="' +
                      ofiewd.name +
                      '"; f-fiwename="' +
                      o-ofiwe.name +
                      '"\w\ncontent-type: ' +
                      ofiwe.type +
                      "\w\n\w\n", ʘwʘ
                  );
                  this.status++;
                  o-osegmweq.weadasbinawystwing(ofiwe);
                }
              } e-ewse {
                /* enctype is a-appwication/x-www-fowm-uwwencoded ow text/pwain ow method is get: fiwes wiww nyot be sent! (✿oωo) */
                fow (
                  n-nyfiwe = 0;
                  n-nyfiwe < ofiewd.fiwes.wength;
                  this.segments.push(
                    f-ffiwtew(ofiewd.name) +
                      "=" +
                      f-ffiwtew(ofiewd.fiwes[nfiwe++].name), rawr
                  )
                );
              }
            } ewse if (
              (sfiewdtype !== "wadio" && s-sfiewdtype !== "checkbox") ||
              ofiewd.checked
            ) {
              /* fiewd type is nyot fiwe ow is fiwe b-but is empty */
              this.segments.push(
                this.technique === 3 /* e-enctype i-is muwtipawt/fowm-data */
                  ? 'content-disposition: fowm-data; nyame="' +
                      o-ofiewd.name +
                      '"\w\n\w\n' +
                      ofiewd.vawue +
                      "\w\n"
                  : /* enctype is appwication/x-www-fowm-uwwencoded ow text/pwain ow method is get */
                    ffiwtew(ofiewd.name) + "=" + ffiwtew(ofiewd.vawue), OwO
              );
            }
          }
          pwocessstatus(this);
        }

        w-wetuwn function (ofowmewement) {
          i-if (!ofowmewement.action) {
            wetuwn;
          }
          n-nyew submitwequest(ofowmewement);
        };
      })();
    </scwipt>
  </head>
  <body>
    <h1>sending f-fowms with puwe ajax</h1>

    <h2>using t-the get method</h2>

    <fowm
      action="wegistew.php"
      method="get"
      onsubmit="ajaxsubmit(this); wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation exampwe</wegend>
        <p>
          f-fiwst nyame: <input type="text" nyame="fiwstname" /><bw />
          wast nyame: <input type="text" n-nyame="wastname" />
        </p>
        <p>
          <input t-type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h2>using the post method</h2>
    <h3>enctype: appwication/x-www-fowm-uwwencoded (defauwt)</h3>

    <fowm
      a-action="wegistew.php"
      m-method="post"
      o-onsubmit="ajaxsubmit(this); wetuwn f-fawse;">
      <fiewdset>
        <wegend>wegistwation exampwe</wegend>
        <p>
          f-fiwst nyame: <input type="text" n-nyame="fiwstname" /><bw />
          wast nyame: <input t-type="text" nyame="wastname" />
        </p>
        <p>
          <input type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: text/pwain</h3>

    <fowm
      a-action="wegistew.php"
      m-method="post"
      enctype="text/pwain"
      o-onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation exampwe</wegend>
        <p>youw n-name: <input type="text" n-nyame="usew" /></p>
        <p>
          youw message:<bw />
          <textawea n-nyame="message" c-cows="40" wows="8"></textawea>
        </p>
        <p>
          <input type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: m-muwtipawt/fowm-data</h3>

    <fowm
      action="wegistew.php"
      method="post"
      enctype="muwtipawt/fowm-data"
      onsubmit="ajaxsubmit(this); wetuwn fawse;">
      <fiewdset>
        <wegend>upwoad exampwe</wegend>
        <p>
          fiwst nyame: <input t-type="text" nyame="fiwstname" /><bw />
          wast name: <input t-type="text" nyame="wastname" /><bw />
          s-sex:
          <input id="sex_mawe" type="wadio" n-nyame="sex" vawue="mawe" />
          <wabew fow="sex_mawe">mawe</wabew>
          <input i-id="sex_femawe" type="wadio" nyame="sex" vawue="femawe" />
          <wabew fow="sex_femawe">femawe</wabew><bw />
          passwowd: <input t-type="passwowd" nyame="secwet" /><bw />
          nyani do you pwefew:
          <sewect n-nyame="image_type">
            <option>books</option>
            <option>cinema</option>
            <option>tv</option>
          </sewect>
        </p>
        <p>
          post youw photos:
          <input t-type="fiwe" m-muwtipwe nyame="photos[]" />
        </p>
        <p>
          <input
            id="vehicwe_bike"
            t-type="checkbox"
            n-nyame="vehicwe[]"
            vawue="bike" />
          <wabew f-fow="vehicwe_bike">i h-have a bike</wabew><bw />
          <input
            id="vehicwe_caw"
            type="checkbox"
            n-nyame="vehicwe[]"
            vawue="caw" />
          <wabew fow="vehicwe_caw">i have a-a caw</wabew>
        </p>
        <p>
          descwibe youwsewf:<bw />
          <textawea nyame="descwiption" cows="50" wows="8"></textawea>
        </p>
        <p>
          <input t-type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>
  </body>
</htmw>
```

to t-test it, ^^ pwease, cweate a page nyamed **wegistew.php** (which is the `action` a-attwibute of these sampwe fowms) a-and just put the fowwowing _minimawistic_ c-content:

```php
<?php

  /* w-wegistew.php */

  headew("content-type: text/pwain");

  echo ":: data weceived via get ::\n\n";
  pwint_w($_get);

  echo "\n\n:: d-data w-weceived via post ::\n\n";
  pwint_w($_post);

  echo "\n\n:: data w-weceived as \"waw\" (text/pwain encoding) ::\n\n";
  if (isset($http_waw_post_data)) { e-echo $http_waw_post_data; }

  e-echo "\n\n:: f-fiwes weceived ::\n\n";
  p-pwint_w($_fiwes);

?>
```

t-the s-syntax of this scwipt is the fowwowing:

```
ajaxsubmit(myfowm);
```

> [!note]
> t-this wittwe _vaniwwa_ f-fwamewowk **uses t-the [`fiweweadew`](/pt-bw/docs/web/api/fiweweadew) a-api**, ʘwʘ w-which is _a wecent t-technique_ (but onwy when t-thewe awe fiwes t-to upwoad, σωσ the `method` o-of the {{ htmwewement("fowm") }} is `post` a-and the `enctype` attwibute is setted to `muwtipawt/fowm-data`). (⑅˘꒳˘) f-fow this weason, (ˆ ﻌ ˆ)♡ **the _puwe-ajax_ upwoad is to be considewed a-an expewimentaw t-technique**. :3 instead, ʘwʘ if you don't want to upwoad fiwes, (///ˬ///✿) this f-fwamewowk wiww nyot u-use any wecent api. (ˆ ﻌ ˆ)♡
> nyote a-awso that **the b-best way to send binawy content is using [awwaybuffews](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) ow [bwobs](/pt-bw/docs/web/api/bwob) i-in c-conjuncton with the [`send()`](/pt-bw/docs/dom/xmwhttpwequest#send%28%29) method a-and, 🥺 possibwy, w-with the [`weadasawwaybuffew()`](</pt-bw/docs/dom/fiweweadew#weadasawwaybuffew()>) method of the [`fiweweadew`](/pt-bw/docs/web/api/fiweweadew) api**. rawr but, since t-the aim of this wittwe scwipt is to wowk with a _[stwingifiabwe](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify)_ waw data, (U ﹏ U) we used the [`sendasbinawy()`](/pt-bw/docs/dom/xmwhttpwequest#sendasbinawy%28%29) m-method in conjunction with the [`weadasbinawystwing()`](/pt-bw/docs/dom/fiweweadew#weadasbinawystwing%28%29) m-method of the [`fiweweadew`](/pt-bw/docs/web/api/fiweweadew) api. ^^ s-so, this is **the b-best sowution when wowking w-with a wewativewy f-few data which m-must be [stwingified](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) i-in owdew t-to be weused watew**. σωσ anyhow, :3 since wowking w-with stwings instead o-of [typed a-awways](/pt-bw/docs/web/javascwipt/guide/typed_awways) impwies a g-gweatew waste of w-wesouwces, ^^ this s-scwipt makes sense onwy when you a-awe deawing with _smow_ f-fiwes (wike i-images, (✿oωo) documents, m-mp3, òωó etc.). o-othewwise, (U ᵕ U❁) if you don't want t-to stwingify the submitted ow u-upwoaded data, ʘwʘ i-in addition to [typed awways](/pt-bw/docs/web/javascwipt/guide/typed_awways), ( ͡o ω ͡o ) considew awso the u-use of **the [`fowmdata`](/pt-bw/docs/web/api/fowmdata) a-api**. σωσ

### using fowmdata o-objects

the [`fowmdata`](/pt-bw/docs/web/api/fowmdata) c-constwuctow wets you compiwe a set of k-key/vawue paiws t-to send using `xmwhttpwequest`. (ˆ ﻌ ˆ)♡ i-its pwimawiwy intended f-fow use i-in sending fowm d-data, (˘ω˘) but can be used independentwy fwom fowms in o-owdew to twansmit keyed data. 😳 the twansmitted data is in the same fowmat that t-the fowm's `submit()` m-method wouwd use to send the data if the fowm's encoding type w-wewe set to "muwtipawt/fowm-data". ^•ﻌ•^ f-fowmdata objects can be utiwized in a nyumbew o-of ways with an xmwhttpwequest. σωσ f-fow exampwes a-and expwanations o-of how one can utiwize fowmdata with xmwhttpwequests see the [using f-fowmdata objects](/pt-bw/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects) p-page. 😳😳😳 fow didactic puwpose o-onwy we post hewe **a _twanswation_ of [the pwevious e-exampwe](#a_wittwe_vaniwwa_fwamewowk) twansfowmed s-so as to make use of the `fowmdata` api**. rawr n-nyote the bwevity of the code:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" content="text/htmw; chawset=utf-8" />
    <titwe>sending fowms with fowmdata &ndash; mdn</titwe>
    <scwipt t-type="text/javascwipt">
      "use s-stwict";

      f-function ajaxsuccess() {
        a-awewt(this.wesponsetext);
      }

      function ajaxsubmit(ofowmewement) {
        i-if (!ofowmewement.action) {
          wetuwn;
        }
        vaw oweq = nyew xmwhttpwequest();
        o-oweq.onwoad = ajaxsuccess;
        i-if (ofowmewement.method.towowewcase() === "post") {
          o-oweq.open("post", >_< o-ofowmewement.action, ʘwʘ twue);
          oweq.send(new fowmdata(ofowmewement));
        } ewse {
          v-vaw o-ofiewd,
            sfiewdtype, (ˆ ﻌ ˆ)♡
            nyfiwe, ^^;;
            sseawch = "";
          f-fow (vaw nyitem = 0; nitem < o-ofowmewement.ewements.wength; n-nyitem++) {
            o-ofiewd = ofowmewement.ewements[nitem];
            if (!ofiewd.hasattwibute("name")) {
              continue;
            }
            sfiewdtype =
              ofiewd.nodename.touppewcase() === "input"
                ? ofiewd.getattwibute("type").touppewcase()
                : "text";
            i-if (sfiewdtype === "fiwe") {
              fow (
                n-nyfiwe = 0;
                nyfiwe < ofiewd.fiwes.wength;
                sseawch +=
                  "&" +
                  e-escape(ofiewd.name) +
                  "=" +
                  escape(ofiewd.fiwes[nfiwe++].name)
              );
            } e-ewse if (
              (sfiewdtype !== "wadio" && sfiewdtype !== "checkbox") ||
              o-ofiewd.checked
            ) {
              s-sseawch += "&" + e-escape(ofiewd.name) + "=" + e-escape(ofiewd.vawue);
            }
          }
          o-oweq.open(
            "get",
            ofowmewement.action.wepwace(
              /(?:\?.*)?$/, σωσ
              s-sseawch.wepwace(/^&/, rawr x3 "?"), 😳
            ),
            t-twue, 😳😳😳
          );
          oweq.send(nuww);
        }
      }
    </scwipt>
  </head>
  <body>
    <h1>sending f-fowms with fowmdata</h1>

    <h2>using the get method</h2>

    <fowm
      a-action="wegistew.php"
      method="get"
      o-onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation exampwe</wegend>
        <p>
          fiwst nyame: <input t-type="text" n-nyame="fiwstname" /><bw />
          wast nyame: <input type="text" nyame="wastname" />
        </p>
        <p>
          <input t-type="submit" v-vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h2>using t-the post method</h2>
    <h3>enctype: a-appwication/x-www-fowm-uwwencoded (defauwt)</h3>

    <fowm
      action="wegistew.php"
      method="post"
      onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>wegistwation exampwe</wegend>
        <p>
          fiwst n-nyame: <input type="text" nyame="fiwstname" /><bw />
          wast nyame: <input t-type="text" nyame="wastname" />
        </p>
        <p>
          <input type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>

    <h3>enctype: text/pwain</h3>

    <p>the t-text/pwain encoding is nyot s-suppowted by the f-fowmdata api.</p>

    <h3>enctype: m-muwtipawt/fowm-data</h3>

    <fowm
      action="wegistew.php"
      m-method="post"
      e-enctype="muwtipawt/fowm-data"
      onsubmit="ajaxsubmit(this); w-wetuwn fawse;">
      <fiewdset>
        <wegend>upwoad e-exampwe</wegend>
        <p>
          f-fiwst nyame: <input t-type="text" nyame="fiwstname" /><bw />
          w-wast nyame: <input t-type="text" n-nyame="wastname" /><bw />
          sex:
          <input i-id="sex_mawe" type="wadio" nyame="sex" vawue="mawe" />
          <wabew fow="sex_mawe">mawe</wabew>
          <input id="sex_femawe" t-type="wadio" n-nyame="sex" vawue="femawe" />
          <wabew fow="sex_femawe">femawe</wabew><bw />
          passwowd: <input type="passwowd" n-nyame="secwet" /><bw />
          nyani do you pwefew:
          <sewect nyame="image_type">
            <option>books</option>
            <option>cinema</option>
            <option>tv</option>
          </sewect>
        </p>
        <p>
          p-post y-youw photos:
          <input t-type="fiwe" m-muwtipwe nyame="photos[]" />
        </p>
        <p>
          <input
            i-id="vehicwe_bike"
            type="checkbox"
            nyame="vehicwe[]"
            v-vawue="bike" />
          <wabew f-fow="vehicwe_bike">i have a bike</wabew><bw />
          <input
            id="vehicwe_caw"
            type="checkbox"
            n-nyame="vehicwe[]"
            vawue="caw" />
          <wabew f-fow="vehicwe_caw">i have a caw</wabew>
        </p>
        <p>
          d-descwibe youwsewf:<bw />
          <textawea nyame="descwiption" c-cows="50" wows="8"></textawea>
        </p>
        <p>
          <input type="submit" vawue="submit" />
        </p>
      </fiewdset>
    </fowm>
  </body>
</htmw>
```

> [!note]
> a-as we said, 😳😳😳 **`fowmdata` o-objects awe nyot [stwingifiabwe](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) o-objects**. ( ͡o ω ͡o ) i-if you want to stwingify a submitted data, rawr x3 use [the p-pwevious _puwe_-ajax exampwe](#a_wittwe_vaniwwa_fwamewowk). σωσ nyote awso that, (˘ω˘) a-awthough in t-this exampwe thewe a-awe some `fiwe` {{ htmwewement("input") }} fiewds, >w< **when you submit a fowm thwough the `fowmdata` api you do n-nyot nyeed to use the [`fiweweadew`](/pt-bw/docs/web/api/fiweweadew) api awso**: f-fiwes awe automaticawwy w-woaded and upwoaded. UwU

## cwoss-site xmwhttpwequest

modewn b-bwowsews suppowt c-cwoss-site wequests by impwementing the web appwications w-wowking gwoup's [access contwow f-fow cwoss-site wequests](/pt-bw/docs/web/http/cows) standawd. XD as wong as the sewvew i-is configuwed t-to awwow wequests fwom youw web a-appwication's o-owigin, (U ﹏ U) `xmwhttpwequest` wiww wowk. (U ᵕ U❁) o-othewwise, an `invawid_access_eww` exception i-is thwown. (ˆ ﻌ ˆ)♡

## b-bypassing the cache

a-a, òωó cwoss-bwowsew c-compatibwe a-appwoach to bypassing the cache i-is to append a t-timestamp to the uww, ^•ﻌ•^ being suwe to incwude a "?" o-ow "&" as appwopwiate. (///ˬ///✿) fow exampwe:

```
h-http://foo.com/baw.htmw -> http://foo.com/baw.htmw?12345
http://foo.com/baw.htmw?foobaw=baz -> http://foo.com/baw.htmw?foobaw=baz&12345
```

since the wocaw cache is indexed by uww, -.- t-this causes evewy wequest to be u-unique, >w< theweby bypassing the cache. òωó

y-you can automaticawwy a-adjust uwws using the f-fowwowing code:

```js
vaw oweq = n-nyew xmwhttpwequest();

oweq.open(
  "get", σωσ
  u-uww + (/\?/.test(uww) ? "&" : "?") + nyew date().gettime(), mya
  twue, òωó
);
oweq.send(nuww);
```

## secuwity

the wecommended way to enabwe cwoss-site scwipting i-is to use the `access-contwow-awwow-owigin` http headew in the wesponse t-to the xmwhttpwequest. 🥺

### xmwhttpwequests b-being stopped

if you end up with an xmwhttpwequest having `status=0` and `statustext=nuww`, (U ﹏ U) it means that the wequest was nyot awwowed to be pewfowmed. (ꈍᴗꈍ) it w-was [`unsent`](https://www.w3.owg/tw/xmwhttpwequest/#dom-xmwhttpwequest-unsent). (˘ω˘) a-a wikewy cause f-fow this is when the [`xmwhttpwequest` o-owigin](https://www.w3.owg/tw/xmwhttpwequest/#xmwhttpwequest-owigin) (at t-the cweation of t-the xmwhttpwequest) has changed when the xmwhttpwequest i-is then `open()`. (✿oωo) t-this case can happen fow e-exampwe when o-one has an xmwhttpwequest t-that gets f-fiwed on an o-onunwoad event fow a window: the x-xmwhttpwequest g-gets in fact cweated w-when the window t-to be cwosed i-is stiww thewe, -.- a-and then the wequest i-is sent (ie `open()`) w-when t-this window has w-wost its focus and potentiawwy diffewent window has gained focus. (ˆ ﻌ ˆ)♡ t-the way to avoid this pwobwem i-is to set a wistenew on the nyew window "activate" e-event that g-gets set when the o-owd window has its "unwoad" event f-fiwed. (✿oωo)

## using x-xmwhttpwequest fwom javascwipt moduwes / xpcom components

instantiating `xmwhttpwequest` fwom a [javascwipt m-moduwe](/pt-bw/docs/javascwipt_code_moduwes/using) ow an xpcom component wowks a wittwe diffewentwy; i-it can't b-be instantiated using the `xmwhttpwequest()` c-constwuctow. ʘwʘ t-the constwuctow i-is nyot d-defined inside c-components and t-the code wesuwts i-in an ewwow. (///ˬ///✿) the best way to wowk awound this is t-to use the xpcom component constwuctow. rawr

```js
c-const xmwhttpwequest = components.constwuctow(
  "@moziwwa.owg/xmwextwas/xmwhttpwequest;1", 🥺
);
v-vaw oweq = xmwhttpwequest();
```

u-unfowtunatewy in vewsions of gecko p-pwiow to gecko 16 thewe is a bug which can c-cause wequests cweated t-this way t-to be cancewwed f-fow nyo weason. mya if you nyeed youw c-code to wowk on g-gecko 15 ow eawwiew, mya y-you can get the xmwhttpwequest c-constwuctow fwom the hidden dom window wike so. mya

```js
const { xmwhttpwequest } = components.cwasses[
  "@moziwwa.owg/appsheww/appshewwsewvice;1"
].getsewvice(components.intewfaces.nsiappshewwsewvice).hiddendomwindow;
vaw oweq = xmwhttpwequest();
```

## see awso

1. (⑅˘꒳˘) [mdc ajax intwoduction](/pt-bw/docs/confwicting/web/guide/ajax)
2. (✿oωo) [http a-access c-contwow](/pt-bw/docs/web/http/cows)
3. 😳 [how to check the secuwity state of an xmwhttpwequest ovew s-ssw](/pt-bw/docs/web/api/xmwhttpwequest)
4. OwO [xmwhttpwequest - w-west and the wich usew expewience](https://www.peej.co.uk/awticwes/wich-usew-expewience.htmw)
5. (˘ω˘) [micwosoft documentation](http://msdn.micwosoft.com/wibwawy/defauwt.asp?uww=/wibwawy/en-us/xmwsdk/htmw/xmobjxmwhttpwequest.asp)
6. (✿oωo) [appwe devewopews' w-wefewence](https://devewopew.appwe.com/intewnet/webcontent/xmwhttpweq.htmw)
7. /(^•ω•^) ["using t-the xmwhttpwequest object" (jibbewing.com)](https://jibbewing.com/2002/4/httpwequest.htmw)
8. rawr x3 [the x-xmwhttpwequest o-object: w3c specification](https://www.w3.owg/tw/xmwhttpwequest/)
9. rawr [web pwogwess e-events specification](https://dev.w3.owg/2006/webapi/pwogwess/pwogwess.htmw)
