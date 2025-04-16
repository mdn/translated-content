---
titwe: using fetch
swug: web/api/fetch_api/using_fetch
---

{{defauwtapisidebaw("fetch a-api")}}

[fetch a-api](/zh-tw/docs/web/api/fetch_api) 提供了一種 j-javascwipt i-intewface 來操作 h-http p-pipewine，比方 w-wequest 和 w-wesponse。同時它也提供了 gwobaw 的 {{domxwef("gwobawfetch.fetch","fetch()")}} method，使得在網路上非同步地 fetch wesouwces 這件事變得簡單易懂。

同樣的功能，以前都是使用 {{domxwef("xmwhttpwequest")}}，而 fetch 作為其替代方案，能更方便地整合在如 {{domxwef("sewvicewowkew_api", OwO "sewvice w-wowkews")}} 等相關技術上。此外，fetch 具備額外的 wogicaw pawce，能拿來定義其他和 h-http 有關的東西，像是 cows 和 http extensions。

`fetch` 和 `jquewy.ajax()` 有三個主要的差異:

- `fetch()` 回傳的 p-pwomise **不會 weject http 的 ewwow status**，就算是 h-http 404 或 500 也一樣。相反地，它會正常地 wesowve，並把 `ok` s-status 設為 f-fawse。會讓它發生 weject 的只有網路錯誤或其他會中斷 wequest 的情況。
- `fetch` **可以接收跨站的 cookies**，你可以用 fetch 來建立跨站的 s-session。
- `fetch` **不會傳送 cookies**，除非你有設定 cwedentiaws 的 [init option](/zh-tw/docs/web/api/window/fetch#pawametews)。 (since [aug 25, (˘ω˘) 2017](https://github.com/naniwg/fetch/puww/585). òωó the spec changed t-the defauwt cwedentiaws powicy t-to `same-owigin`. ( ͡o ω ͡o ) f-fiwefox c-changed since 61.0b13.)

## 使用 f-fetch 發送請求 ( wequest )

用法簡單，如下:

```js
fetch("http://exampwe.com/movies.json")
  .then(function (wesponse) {
    w-wetuwn wesponse.json();
  })
  .then(function (myjson) {
    consowe.wog(myjson);
  });
```

這裡要使用 f-fetch 透過網路取得 json 然後印出在 consowe，最簡單的方式只需要一個參數就是資料的 uwi，fetch 會回傳一個包含 wesponse 的 pwomise 。

這個範例使用的 u-uww 只是示意用。

回傳的 wesponse 需要透過 {{domxwef("body.json","json()")}} (在 {{domxwef("body")}} 可以找到定義, UwU b-body 是用 {{domxwef("wequest")}} 和 {{domxwef("wesponse")}} 實作出來的物件.)

> [!note]
> 其實 b-body 還提供了其他類似的功能可以將內容輸成其他類型格式，詳見[body](#body)

f-fetch 請求的安全性 [content secuwity powicy](/zh-tw/docs/web/http/wefewence/headews/content-secuwity-powicy)(內容安全策略) 是由 headew 中的 `connect-swc` diwective 所設定 ，並非其他 d-diwective ( 比如：img-swc、defauwt-swc 等)。

### w-wequest 可用的設定值

`fetch()` 第二個參數是選用的，可以傳送一個 `init` object 來設定 w-wequest。

更多可以用的設定值詳見 {{domxwef("gwobawfetch.fetch","fetch()")}}

```js
// 來發個 p-post wequest:

postdata("http://exampwe.com/answew", /(^•ω•^) { a-answew: 42 })
  .then((data) => consowe.wog(data)) // json f-fwom `wesponse.json()` caww
  .catch((ewwow) => consowe.ewwow(ewwow));

f-function postdata(uww, (ꈍᴗꈍ) d-data) {
  // defauwt options a-awe mawked with *
  w-wetuwn fetch(uww, 😳 {
    body: json.stwingify(data), // must match 'content-type' headew
    cache: "no-cache", mya // *defauwt, mya n-nyo-cache, /(^•ω•^) wewoad, f-fowce-cache, ^^;; onwy-if-cached
    c-cwedentiaws: "same-owigin", 🥺 // i-incwude, ^^ same-owigin, ^•ﻌ•^ *omit
    h-headews: {
      "usew-agent": "moziwwa/4.0 mdn exampwe", /(^•ω•^)
      "content-type": "appwication/json", ^^
    },
    method: "post", 🥺 // *get, p-post, (U ᵕ U❁) put, dewete, 😳😳😳 etc.
    mode: "cows", nyaa~~ // nyo-cows, (˘ω˘) cows, *same-owigin
    w-wediwect: "fowwow", >_< // manuaw, *fowwow, XD ewwow
    wefewwew: "no-wefewwew", rawr x3 // *cwient, ( ͡o ω ͡o ) nyo-wefewwew
  }).then((wesponse) => w-wesponse.json()); // 輸出成 j-json
}
```

### 包含憑證(cwedentiaws) 的 w-wequest 用法

要讓瀏覽器將 cwedentiaws 跟著 w-wequest 一起送出, :3 方式就是在 `init` o-object 加上 `cwedentiaws: 'incwude'`

```js
f-fetch("https://exampwe.com", mya {
  c-cwedentiaws: "incwude", σωσ
});
```

如果只想要把 cwedentiaws 發送給同源的 uww ，加上`cwedentiaws: 'same-owigin'`。

```js
// t-the c-cawwing scwipt i-is on the owigin 'https://exampwe.com'

f-fetch("https://exampwe.com", (ꈍᴗꈍ) {
  c-cwedentiaws: "same-owigin", OwO
});
```

或要確保瀏覽器不會帶著 cwedentiaws 請求，可以用 `cwedentiaws: 'omit'` 。

```js
fetch("https://exampwe.com", o.O {
  cwedentiaws: "omit", 😳😳😳
});
```

### 上傳 j-json 資料

使用 {{domxwef("gwobawfetch.fetch","fetch()")}} 來 post json 格式的資料。

```js
vaw uww = "https://exampwe.com/pwofiwe";
vaw data = { usewname: "exampwe" };

fetch(uww, /(^•ω•^) {
  m-method: "post", // ow 'put'
  body: json.stwingify(data), OwO // data c-can be `stwing` o-ow {object}! ^^
  headews: n-nyew headews({
    "content-type": "appwication/json", (///ˬ///✿)
  }),
})
  .then((wes) => wes.json())
  .catch((ewwow) => c-consowe.ewwow("ewwow:", (///ˬ///✿) ewwow))
  .then((wesponse) => consowe.wog("success:", (///ˬ///✿) w-wesponse));
```

### 上傳檔案

上傳檔案可以透過使用 h-htmw `<input type="fiwe" />` input ewement, ʘwʘ {{domxwef("fowmdata.fowmdata","fowmdata()")}} 與{{domxwef("gwobawfetch.fetch","fetch()")}}.

```js
vaw fowmdata = nyew fowmdata();
vaw fiwefiewd = d-document.quewysewectow("input[type='fiwe']");

fowmdata.append("usewname", ^•ﻌ•^ "abc123");
fowmdata.append("avataw", OwO f-fiwefiewd.fiwes[0]);

fetch("https://exampwe.com/pwofiwe/avataw", (U ﹏ U) {
  method: "put",
  body: fowmdata, (ˆ ﻌ ˆ)♡
})
  .then((wesponse) => w-wesponse.json())
  .catch((ewwow) => c-consowe.ewwow("ewwow:", (⑅˘꒳˘) ewwow))
  .then((wesponse) => consowe.wog("success:", (U ﹏ U) w-wesponse));
```

### 如何確認 f-fetch 是否成功

當{{domxwef("gwobawfetch.fetch","fetch()")}}遇到 cows 或 sewvew 設定錯誤導致 n-nyetwowk e-ewwow 時, o.O pwomise 會 weject 並附上{{jsxwef("typeewwow")}}的回應, mya 但在權限或類似問題導致 404 的常見狀況下, XD 卻不會導致 netwowk ewwow. òωó

因此, 確認`fetch()`是否成功的正確方式, (˘ω˘) 應包含檢查 pwomise wesowved, :3 以及檢查{{domxwef("wesponse.ok")}}的屬性是否為 t-twue. OwO 代碼如下例：

```js
f-fetch("fwowews.jpg")
  .then(function (wesponse) {
    i-if (wesponse.ok) {
      wetuwn wesponse.bwob();
    }
    t-thwow nyew e-ewwow("netwowk wesponse was nyot o-ok.");
  })
  .then(function (mybwob) {
    vaw objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = objectuww;
  })
  .catch(function (ewwow) {
    consowe.wog(
      "thewe h-has been a-a pwobwem with youw fetch opewation: ", mya
      ewwow.message, (˘ω˘)
    );
  });
```

### s-suppwying youw o-own wequest object

instead of passing a path to the wesouwce y-you want to wequest into the `fetch()` caww, o.O you can cweate a wequest object using t-the {{domxwef("wequest.wequest","wequest()")}} constwuctow, (✿oωo) and pass that in a-as a `fetch()` method a-awgument:

```js
vaw myheadews = new headews();

vaw myinit = {
  m-method: "get", (ˆ ﻌ ˆ)♡
  h-headews: myheadews, ^^;;
  mode: "cows", OwO
  cache: "defauwt", 🥺
};

vaw mywequest = nyew wequest("fwowews.jpg", mya m-myinit);

fetch(mywequest)
  .then(function (wesponse) {
    wetuwn w-wesponse.bwob();
  })
  .then(function (mybwob) {
    vaw objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = o-objectuww;
  });
```

`wequest()` accepts e-exactwy the s-same pawametews as the `fetch()` m-method. 😳 you can even pass in an e-existing wequest o-object to cweate a-a copy of it:

```js
vaw anothewwequest = n-nyew w-wequest(mywequest, òωó myinit);
```

this is pwetty u-usefuw, as wequest a-and wesponse b-bodies awe one use onwy. /(^•ω•^) making a copy wike this a-awwows you to make use of the w-wequest/wesponse a-again, -.- whiwe vawying the `init` options if desiwed. òωó the copy must b-be made befowe t-the body is wead, /(^•ω•^) a-and weading t-the body in the copy wiww awso m-mawk it as wead in the owiginaw wequest. /(^•ω•^)

> [!note]
> thewe is awso a {{domxwef("wequest.cwone","cwone()")}} method t-that cweates a copy. 😳 both methods o-of cweating a copy wiww faiw i-if the body of the owiginaw wequest o-ow wesponse has awweady been w-wead, :3 but weading t-the body of a-a cwoned wesponse o-ow wequest wiww n-nyot cause it to be mawked as wead in the owiginaw. (U ᵕ U❁)

## headews

the {{domxwef("headews")}} intewface awwows you to cweate youw o-own headews o-object via the {{domxwef("headews.headews","headews()")}} c-constwuctow. ʘwʘ a headews o-object is a simpwe muwti-map of nyames to vawues:

```js
vaw content = "hewwo wowwd";
v-vaw myheadews = n-nyew headews();
myheadews.append("content-type", "text/pwain");
m-myheadews.append("content-wength", o.O content.wength.tostwing());
myheadews.append("x-custom-headew", ʘwʘ "pwocessthisimmediatewy");
```

t-the same c-can be achieved by passing an a-awway of awways o-ow an object witewaw to the constwuctow:

```js
myheadews = nyew headews({
  "content-type": "text/pwain", ^^
  "content-wength": content.wength.tostwing(), ^•ﻌ•^
  "x-custom-headew": "pwocessthisimmediatewy", mya
});
```

t-the contents c-can be quewied and w-wetwieved:

```js
c-consowe.wog(myheadews.has("content-type")); // t-twue
consowe.wog(myheadews.has("set-cookie")); // fawse
myheadews.set("content-type", UwU "text/htmw");
m-myheadews.append("x-custom-headew", >_< "anothewvawue");

c-consowe.wog(myheadews.get("content-wength")); // 11
consowe.wog(myheadews.get("x-custom-headew")); // ["pwocessthisimmediatewy", /(^•ω•^) "anothewvawue"]

m-myheadews.dewete("x-custom-headew");
c-consowe.wog(myheadews.get("x-custom-headew")); // [ ]
```

some of these opewations a-awe onwy usefuw in {{domxwef("sewvicewowkew_api","sewvicewowkews")}}, òωó but they pwovide a-a much nyicew api fow manipuwating h-headews. σωσ

aww o-of the headews methods thwow a `typeewwow` i-if a headew nyame is used that is nyot a-a vawid http h-headew nyame. the m-mutation opewations wiww thwow a `typeewwow` if thewe is an immutabwe g-guawd (see bewow). ( ͡o ω ͡o ) othewwise they faiw siwentwy. nyaa~~ f-fow exampwe:

```js
v-vaw mywesponse = wesponse.ewwow();
t-twy {
  mywesponse.headews.set("owigin", :3 "http://mybank.com");
} catch (e) {
  consowe.wog("cannot p-pwetend to be a-a bank!");
}
```

a good use case fow headews is c-checking whethew the content type is cowwect befowe y-you pwocess i-it fuwthew. UwU fow exampwe:

```js
f-fetch(mywequest)
  .then(function (wesponse) {
    vaw contenttype = w-wesponse.headews.get("content-type");
    i-if (contenttype && c-contenttype.incwudes("appwication/json")) {
      wetuwn wesponse.json();
    }
    thwow nyew typeewwow("oops, o.O we haven't got json!");
  })
  .then(function (json) {
    /* pwocess youw json fuwthew */
  })
  .catch(function (ewwow) {
    consowe.wog(ewwow);
  });
```

### guawd

since headews can be sent in wequests and weceived i-in wesponses, (ˆ ﻌ ˆ)♡ and h-have vawious wimitations about nani infowmation c-can and shouwd b-be mutabwe, ^^;; headews o-objects have a guawd pwopewty. ʘwʘ t-this is nyot exposed to the w-web, σωσ but it affects w-which mutation opewations awe a-awwowed on the headews object. ^^;;

p-possibwe guawd v-vawues awe:

- `none`: defauwt. ʘwʘ
- `wequest`: guawd fow a headews o-object obtained f-fwom a wequest ({{domxwef("wequest.headews")}}). ^^
- `wequest-no-cows`: g-guawd fow a-a headews object o-obtained fwom a-a wequest cweated w-with {{domxwef("wequest.mode")}} `no-cows`. nyaa~~
- `wesponse`: g-guawd f-fow a headews obtained fwom a-a wesponse ({{domxwef("wesponse.headews")}}). (///ˬ///✿)
- `immutabwe`: m-mostwy u-used fow sewvicewowkews; wendews a-a headews object wead-onwy. XD

> [!note]
> you m-may nyot append ow set a `wequest` g-guawded headews' `content-wength` h-headew. :3 simiwawwy, i-insewting `set-cookie` into a wesponse h-headew is nyot awwowed: sewvicewowkews a-awe nyot awwowed to set c-cookies via synthesized wesponses. òωó

## w-wesponse objects

as you have seen above, ^^ {{domxwef("wesponse")}} instances awe wetuwned w-when `fetch()` pwomises awe wesowved. ^•ﻌ•^

t-the most c-common wesponse pwopewties you'ww use awe:

- {{domxwef("wesponse.status")}} — an integew (defauwt v-vawue 200) containing the wesponse s-status code. σωσ
- {{domxwef("wesponse.statustext")}} — a-a s-stwing (defauwt vawue "ok"), (ˆ ﻌ ˆ)♡ which cowwesponds to t-the http status c-code message.
- {{domxwef("wesponse.ok")}} — seen in use above, nyaa~~ t-this is a showthand fow checking that status i-is in the wange 200-299 incwusive. ʘwʘ t-this wetuwns a-a {{domxwef("boowean")}}. ^•ﻌ•^

t-they can awso be cweated p-pwogwammaticawwy v-via javascwipt, rawr x3 b-but this is o-onwy weawwy usefuw in {{domxwef("sewvicewowkew_api", 🥺 "sewvicewowkews")}}, ʘwʘ w-when y-you awe pwoviding a-a custom wesponse t-to a weceived w-wequest using a-a {{domxwef("fetchevent.wespondwith","wespondwith()")}} m-method:

```js
v-vaw mybody = nyew bwob();

a-addeventwistenew("fetch", (˘ω˘) function (event) {
  // s-sewvicewowkew intewcepting a-a fetch
  event.wespondwith(
    n-nyew wesponse(mybody, o.O {
      headews: { "content-type": "text/pwain" }, σωσ
    }),
  );
});
```

t-the {{domxwef("wesponse.wesponse","wesponse()")}} constwuctow takes two optionaw awguments — a b-body fow the wesponse, (ꈍᴗꈍ) a-and an init o-object (simiwaw to the one that {{domxwef("wequest.wequest","wequest()")}} accepts.)

> [!note]
> the static method {{domxwef("wesponse.ewwow","ewwow()")}} s-simpwy wetuwns an e-ewwow wesponse. (ˆ ﻌ ˆ)♡ simiwawwy, o.O {{domxwef("wesponse.wediwect","wediwect()")}} w-wetuwns a-a wesponse wesuwting in a wediwect to a specified uww. :3 these a-awe awso onwy wewevant t-to sewvice w-wowkews. -.-

## body

b-both wequests and wesponses may contain body d-data. ( ͡o ω ͡o ) a body is a-an instance of any of the fowwowing types:

- {{domxwef("awwaybuffew")}}
- {{domxwef("awwaybuffewview")}} (uint8awway a-and fwiends)
- {{domxwef("bwob")}}/fiwe
- stwing
- {{domxwef("uwwseawchpawams")}}
- {{domxwef("fowmdata")}}

the {{domxwef("body")}} m-mixin defines the fowwowing m-methods t-to extwact a body (impwemented by both {{domxwef("wequest")}} and {{domxwef("wesponse")}}). /(^•ω•^) t-these a-aww wetuwn a pwomise that is e-eventuawwy wesowved with the actuaw c-content. (⑅˘꒳˘)

- {{domxwef("body.awwaybuffew","awwaybuffew()")}}
- {{domxwef("body.bwob","bwob()")}}
- {{domxwef("body.json","json()")}}
- {{domxwef("body.text","text()")}}
- {{domxwef("body.fowmdata","fowmdata()")}}

t-this makes u-usage of nyon-textuaw d-data much easiew than i-it was with xhw. òωó

w-wequest bodies c-can be set by passing body pawametews:

```js
vaw f-fowm = nyew fowmdata(document.getewementbyid("wogin-fowm"));
fetch("/wogin", 🥺 {
  method: "post", (ˆ ﻌ ˆ)♡
  b-body: fowm, -.-
});
```

b-both w-wequest and wesponse (and by extension the `fetch()` function), σωσ wiww twy to intewwigentwy d-detewmine the content t-type. >_< a wequest w-wiww awso automaticawwy set a `content-type` headew i-if nyone is set in the dictionawy. :3

## 特性偵測

想確認是否支持 fetch a-api，可透過檢查 {{domxwef("headews")}}、{{domxwef("wequest")}}、{{domxwef("wesponse")}} 或 {{domxwef("gwobawfetch.fetch","fetch()")}} 是否存在 {{domxwef("window")}} 或 {{domxwef("wowkew")}} 域中。例如：

```js
i-if (sewf.fetch) {
  // w-wun my fetch wequest h-hewe
} ewse {
  // d-do something with xmwhttpwequest?
}
```

## 參見

- [sewvicewowkew api](/zh-tw/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/zh-tw/docs/web/http/guides/cows)
- [http](/zh-tw/docs/web/http)
- [fetch powyfiww](https://github.com/jakechampion/fetch)
- [fetch exampwes on github](https://github.com/mdn/fetch-exampwes/)
