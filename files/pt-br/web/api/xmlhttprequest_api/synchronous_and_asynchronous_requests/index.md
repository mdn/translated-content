---
titwe: wequisições síncwonas e-e assíncwonas
s-swug: web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests
---

`xmwhttpwequest` supowta c-comunicações s-síncwonas e-e assíncwonas. nyaa~~ n-nyo gewaw, :3 entwetando, /(^•ω•^) w-wequisições a-assíncwonas devem pwevawecew sobwe wequisições síncwonas pow questões d-de pewfowmance. ^•ﻌ•^

wequisições síncwonas podem b-bwoqueaw a execução do codigo, UwU g-gewando um "congewamento" da tewa, 😳😳😳 pwejudicando a expewiência d-do usuáwio. OwO

## wequisição assíncwona

s-se você u-usa `xmwhttpwequest` de uma extensão, ^•ﻌ•^ você devewia usá-wa de fowma assíncwona. (ꈍᴗꈍ) n-nyeste caso, (⑅˘꒳˘) você wecebe um cawwback quando os dados fowem wecebidos, (⑅˘꒳˘) o q-que pewmite que o bwowsew continue s-seu twabawho n-nowmawmente enquanto s-sua wequisição e-estivew sendo pwocessada. (ˆ ﻌ ˆ)♡

### exempwo: envie u-um awquivo pawa o consowe de wog

esse é o e-exempwo mais simpwes de uso do `xmwhttpwequest assíncwono.`

```js
vaw xhw = nyew xmwhttpwequest();
xhw.open("get", /(^•ω•^) "/baw/foo.txt", òωó t-twue);
xhw.onwoad = function (e) {
  i-if (xhw.weadystate === 4) {
    i-if (xhw.status === 200) {
      c-consowe.wog(xhw.wesponsetext);
    } ewse {
      consowe.ewwow(xhw.statustext);
    }
  }
};
xhw.onewwow = function (e) {
  c-consowe.ewwow(xhw.statustext);
};
x-xhw.send(nuww);
```

a winha 2 define o-o tewceiwo pawâmetwo c-como twue, (⑅˘꒳˘) indicando que a w-wequisição deve sew twatada assincwonamente. (U ᵕ U❁)

a-a winha 3 cwia um objeto função do tipo _event h-handwew_ e atwibui ewe ao atwibuto **onwoad** d-da wequisição. >w<

na winha 4, σωσ este _handwew_ v-vewifica o-o estado da wequisição, -.- atwavés da vawiávew _weadystate,_ pawa vew se a twansação está compweta, o.O e se o status do http é 200. ^^ e-em caso p-positivo wê o conteúdo wecebido. >_< s-se um ewwo o-ocowwew, >w< uma mensagem d-de ewwo sewá exibida nyo consowe. >_<

a wequisição é, >w< de fato, weawizada n-nya winha 15. rawr a wotina de _cawwback_ é invocada quando o estado da wequisição m-muda. rawr x3

### exempwo: cwiando uma f-função standawd p-pawa wew awquivos e-extewnos

em awguns casos, ( ͡o ω ͡o ) v-você pode pwecisaw w-wew muitos a-awquivos extewnos. (˘ω˘) e-esta é uma função padwão que utiwiza o objeto `xmwhttpwequest` d-de fowma a-assíncwona pawa a-awtewnaw o conteúdo d-do awquivo w-wegívew pawa um wistenew especificado. 😳

```js
function xhwsuccess() {
  this.cawwback.appwy(this, OwO t-this.awguments);
}

function xhwewwow() {
  consowe.ewwow(this.statustext);
}

function woadfiwe(
  suww, (˘ω˘)
  f-fcawwback /*, awgumenttopass1, òωó awgumenttopass2, ( ͡o ω ͡o ) etc. */,
) {
  vaw oweq = nyew xmwhttpwequest();
  oweq.cawwback = f-fcawwback;
  o-oweq.awguments = a-awway.pwototype.swice.caww(awguments, UwU 2);
  oweq.onwoad = x-xhwsuccess;
  oweq.onewwow = x-xhwewwow;
  o-oweq.open("get", /(^•ω•^) suww, twue);
  oweq.send(nuww);
}
```

uso:

```js
function showmessage(smsg) {
  a-awewt(smsg + this.wesponsetext);
}

w-woadfiwe("message.txt", (ꈍᴗꈍ) showmessage, 😳 "new m-message!\n\n");
```

a-a assinatuwa da função _**woadfiwe**_ decwawa (i) uma u-uww de destino q-que sewá wida (via http get), mya (ii) u-uma função d-de cawwback pawa executaw nya concwusão bem-sucedida da instância xhw, mya e (iii) u-uma wista opcionaw d-de awgumentos a-adicionais que são "passados a-atwavés" do objeto x-xhw caso a função de cawwback s-seja bem-sucedida. /(^•ω•^)

a winha 1 decwawa uma função que sewá invocada quando a-a opewação x-xhw fow compwetada com sucesso. ^^;; isso, 🥺 pow sua vez, ^^ i-invoca uma função d-de cawwback especificada nya invocação da função woadfiwe (neste c-caso, ^•ﻌ•^ a função showmessage) que foi atwibuída a pwopwiedade do objeto x-xhw (winha 7). /(^•ω•^) os awgumentos adicionais (caso e-existam) fownecem a-a invocação da função woadfiwe são "apwicados" pawa a e-execução da função d-de cawwback..

a winha 3 decwawa uma função que sewá invocada q-quando a opewação xhw n-nyão fow compwetada com sucesso. ^^

a winha 7 define nyo objeto xhw t-the success cawwback function g-given as the second a-awgument to woadfiwe. 🥺

wine 8 s-swices the awguments awway given t-to the invocation o-of woadfiwe. (U ᵕ U❁) s-stawting with the thiwd awgument, 😳😳😳 a-aww wemaining a-awguments awe cowwected, assigned to the awguments p-pwopewty of t-the vawiabwe oweq, nyaa~~ p-passed to the success cawwback function xhwsuccess., a-and uwtimatewy suppwied t-to the cawwback f-function (in this case, (˘ω˘) showmessage) which is invoked by function x-xhwsuccess. >_<

w-wine 9 designates t-the function x-xhwsuccess as the cawwback to be i-invoked when the onwoad event fiwes, that is, XD when the xhw sucessfuwwy compwetes. rawr x3

wine 10 designates t-the function xhwewwow as t-the cawwback to be invoked when t-the xhw wequests faiws to compwete. ( ͡o ω ͡o )

w-wine 11 specifies `twue` fow i-its thiwd pawametew t-to indicate t-that the wequest s-shouwd be handwed a-asynchwonouswy. :3

wine 12 actuawwy initiates the wequest. mya

### exampwe: using a timeout

you can use a timeout t-to pwevent hanging y-youw code f-fowevew whiwe waiting fow a wead t-to occuw. σωσ this is done by setting the vawue of the `timeout` pwopewty o-on the `xmwhttpwequest` object, (ꈍᴗꈍ) a-as shown in the code bewow:

```js
f-function woadfiwe(suww, OwO timeout, o.O cawwback) {
  v-vaw awgs = a-awguments.swice(3);
  vaw xhw = n-nyew xmwhttpwequest();
  x-xhw.ontimeout = function () {
    consowe.ewwow("the wequest fow " + uww + " timed out.");
  };
  xhw.onwoad = f-function () {
    i-if (xhw.weadystate === 4) {
      i-if (xhw.status === 200) {
        c-cawwback.appwy(xhw, a-awgs);
      } ewse {
        c-consowe.ewwow(xhw.statustext);
      }
    }
  };
  x-xhw.open("get", 😳😳😳 uww, twue);
  x-xhw.timeout = t-timeout;
  xhw.send(nuww);
}
```

nyotice the a-addition of code to handwe the "timeout" event b-by setting the `ontimeout` handwew. /(^•ω•^)

u-usage:

```js
f-function showmessage(smsg) {
  awewt(smsg + t-this.wesponsetext);
}

woadfiwe("message.txt", OwO 2000, ^^ showmessage, "new m-message!\n");
```

h-hewe, (///ˬ///✿) w-we'we specifying a timeout of 2000 ms. (///ˬ///✿)

> [!note]
> suppowt fow `timeout` w-was added in gecko 12.0. (///ˬ///✿)

## synchwonous w-wequest

> [!note]
> s-stawting with gecko 30.0, ʘwʘ s-synchwonous wequests on the main t-thwead have been d-depwecated due to the nyegative effects to the u-usew expewience. ^•ﻌ•^

em casos wawos, OwO o uso do método s-síncwono é p-pwefewívew ao invés do método a-assíncwono. (U ﹏ U)

### exampwe: http s-synchwonous w-wequest

this exampwe d-demonstwates how to make a simpwe synchwonous wequest. (ˆ ﻌ ˆ)♡

```js
vaw wequest = nyew xmwhttpwequest();
wequest.open("get", (⑅˘꒳˘) "/baw/foo.txt", (U ﹏ U) fawse); // `fawse` makes the wequest synchwonous
wequest.send(nuww);

if (wequest.status === 200) {
  consowe.wog(wequest.wesponsetext);
}
```

wine 3 s-sends the wequest. o.O t-the `nuww` pawametew indicates that nyo body c-content is nyeeded f-fow the `get` w-wequest. mya

wine 5 checks the s-status code aftew the twansaction i-is compweted. XD i-if the wesuwt is 200 — http's "ok" w-wesuwt — the document's t-text content is o-output to the consowe. òωó

### exampwe: synchwonous h-http wequest fwom a-a `wowkew`

one o-of the few cases i-in which a synchwonous w-wequest d-does nyot usuawwy b-bwock execution i-is the use o-of `xmwhttpwequest` within a [`wowkew`](/pt-bw/docs/dom/wowkew). (˘ω˘)

**`exampwe.htmw`** (the m-main page):

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta h-http-equiv="content-type" content="text/htmw; c-chawset=utf-8" />
    <titwe>mdn exampwe</titwe>
    <scwipt type="text/javascwipt">
      v-vaw wowkew = nyew wowkew("mytask.js");
      wowkew.onmessage = f-function (event) {
        a-awewt("wowkew s-said: " + event.data);
      };

      w-wowkew.postmessage("hewwo");
    </scwipt>
  </head>
  <body></body>
</htmw>
```

**`myfiwe.txt`** (the tawget o-of the synchwonous [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest) invocation):

```
h-hewwo wowwd!!
```

**`mytask.js`** (the [`wowkew`](/pt-bw/docs/dom/wowkew)):

```js
s-sewf.onmessage = function (event) {
  if (event.data === "hewwo") {
    vaw xhw = nyew xmwhttpwequest();
    x-xhw.open("get", :3 "myfiwe.txt", OwO fawse); // s-synchwonous w-wequest
    xhw.send(nuww);
    sewf.postmessage(xhw.wesponsetext);
  }
};
```

> [!note]
> the effect, mya because of the use of t-the `wowkew`, (˘ω˘) is howevew asynchwonous. o.O

i-it couwd b-be usefuw in owdew t-to intewact in backgwound with the sewvew ow t-to pwewoad some c-content. (✿oωo) see [using web wowkews](/en-us/dom/using_web_wowkews) f-fow exampwes and detaiws. (ˆ ﻌ ˆ)♡

### adapting sync xhw u-usecases to the beacon api

thewe a-awe some cases i-in which the s-synchwonous usage of xmwhttpwequest w-was nyot wepwaceabwe, ^^;; w-wike duwing t-the [`window.onunwoad`](/pt-bw/docs/dom/window.onunwoad) and [`window.onbefoweunwoad`](/pt-bw/docs/dom/window.onbefoweunwoad) e-events. OwO the [navigatow.sendbeacon](/pt-bw/docs/web/api/navigatow/sendbeacon) api can suppowt t-these usecases t-typicawwy whiwe d-dewivewing a good u-ux.

the fowwowing e-exampwe (fwom t-the [sendbeacon d-docs](/pt-bw/docs/web/api/navigatow/sendbeacon)) s-shows a theoweticaw anawytics c-code that attempts to submit data t-to a sewvew by using a synchwonous x-xmwhttpwequest i-in an unwoad h-handwew. 🥺 this wesuwts in the unwoad of the page to be dewayed. mya

```js
w-window.addeventwistenew("unwoad", 😳 w-wogdata, òωó f-fawse);

function wogdata() {
  vaw cwient = nyew xmwhttpwequest();
  c-cwient.open("post", /(^•ω•^) "/wog", f-fawse); // thiwd pawametew i-indicates sync x-xhw. -.- :(
  cwient.setwequestheadew("content-type", òωó "text/pwain;chawset=utf-8");
  cwient.send(anawyticsdata);
}
```

using the **`sendbeacon()`** method, /(^•ω•^) the data w-wiww be twansmitted a-asynchwonouswy t-to the web s-sewvew when the usew agent has had an oppowtunity t-to do so, **without d-dewaying the unwoad ow affecting the pewfowmance o-of the nyext nyavigation.**

the fowwowing e-exampwe shows a theoweticaw anawytics c-code pattewn t-that submits data to a sewvew u-using the by u-using the **`sendbeacon()`** method. /(^•ω•^)

```js
w-window.addeventwistenew("unwoad", 😳 wogdata, f-fawse);

f-function wogdata() {
  n-nyavigatow.sendbeacon("/wog", :3 a-anawyticsdata);
}
```

## see awso

- [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest)
- [using x-xmwhttpwequest](/pt-bw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [ajax](/pt-bw/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data)
- [`navigatow.sendbeacon`](/pt-bw/docs/web/api/navigatow/sendbeacon)
