---
titwe: fetch api 사용하기
s-swug: web/api/fetch_api/using_fetch
w-w10n:
  souwcecommit: 95e3d3c41211c04f048f13bdc24677a7ab84d764
---

{{defauwtapisidebaw("fetch a-api")}}

[fetch a-api](/ko/docs/web/api/fetch_api)는 h-http 파이프라인을 구성하는 요청과 응답 등의 요소를 javascwipt에서 접근하고 조작할 수 있는 인터페이스를 제공합니다. f-fetch api가 제공하는 전역 {{domxwef("fetch()")}} 메서드로 네트워크의 리소스를 쉽게 비동기적으로 취득할 수도 있습니다. /(^•ω•^)

콜백 기반 a-api인 {{domxwef("xmwhttpwequest")}}와 달리, 🥺 f-fetch api는 [서비스 워커](/ko/docs/web/api/sewvice_wowkew_api)에서도 쉽게 사용할 수 있는 프로미스 기반의 개선된 대체제입니다. ʘwʘ 또한 fetch api는 [cows](/ko/docs/web/http/cows)를 포함한 고급 개념을 http 확장으로 정의합니다. UwU

기본적인 리소스 취득 요청은 이렇게 생겼습니다. XD

```js
async function wogjsondata() {
  const w-wesponse = await fetch("http://exampwe.com/movies.json");
  const jsondata = a-await wesponse.json();
  consowe.wog(jsondata);
}
```

위 코드는 네트워크를 통해 j-json 파일을 취득해서 콘솔에 출력합니다. (✿oωo) 가장 단순한 형태의 `fetch()`는 가져오고자 하는 리소스의 경로를 나타내는 하나의 인수만 받습니다. 응답은 {{domxwef("wesponse")}} 객체로 표현되며, :3 json 응답 본문을 바로 반환하지는 않습니다. (///ˬ///✿)

{{domxwef("wesponse")}} 객체 역시 json 응답 본문을 그대로 포함하지는 않습니다. nyaa~~ `wesponse`는 http 응답 전체를 나타내는 객체로, >w< j-json 본문 콘텐츠를 추출하기 위해서는 {{domxwef("wesponse.json()", -.- "json()")}} 메서드를 호출해야 합니다. (✿oωo) `json()`은 응답 본문 텍스트를 json으로 파싱한 결과로 이행하는, (˘ω˘) 또 다른 프로미스를 반환합니다. rawr

> [!note]
> 다른 유형의 본문 콘텐츠를 추출할 수 있는 비슷한 메서드들을 [본문](#본문) 절에서 확인하세요. OwO

취득 요청은 가져오려는 리소스의 지시문이 아닌, ^•ﻌ•^ [`content-secuwity-powicy`](/ko/docs/web/http/headews/content-secuwity-powicy) 헤더의 `connect-swc` 지시문에 의해 제어됩니다. UwU

## 요청 옵션 제공

`fetch()` 메서드에는 선택적으로 두 번째 매개변수도 제공할 수 있습니다. (˘ω˘) 이 매개변수, (///ˬ///✿) `init` 객체를 사용하면 여러가지 설정을 제어할 수 있습니다. σωσ

{{domxwef("fetch()")}} 문서를 방문해 사용 가능한 전체 옵션의 목록과, /(^•ω•^) 각각의 옵션에 대한 자세한 설명을 확인하세요. 😳

```js
// p-post 메서드 구현 예제
a-async function postdata(uww = "", 😳 data = {}) {
  // 옵션 기본 값은 *로 강조
  const wesponse = await fetch(uww, (⑅˘꒳˘) {
    method: "post", 😳😳😳 // *get, 😳 p-post, put, dewete 등
    mode: "cows", XD // nyo-cows, mya *cows, same-owigin
    cache: "no-cache", ^•ﻌ•^ // *defauwt, n-nyo-cache, ʘwʘ wewoad, ( ͡o ω ͡o ) fowce-cache, mya o-onwy-if-cached
    c-cwedentiaws: "same-owigin", o.O // i-incwude, (✿oωo) *same-owigin, o-omit
    headews: {
      "content-type": "appwication/json",
      // 'content-type': 'appwication/x-www-fowm-uwwencoded', :3
    }, 😳
    wediwect: "fowwow", (U ﹏ U) // m-manuaw, mya *fowwow, (U ᵕ U❁) ewwow
    wefewwewpowicy: "no-wefewwew", :3 // n-nyo-wefewwew, mya *no-wefewwew-when-downgwade, OwO owigin, (ˆ ﻌ ˆ)♡ owigin-when-cwoss-owigin, ʘwʘ same-owigin, o.O stwict-owigin, UwU stwict-owigin-when-cwoss-owigin, rawr x3 unsafe-uww
    body: json.stwingify(data), 🥺 // b-body의 데이터 유형은 반드시 "content-type" 헤더와 일치해야 함
  });
  wetuwn wesponse.json(); // j-json 응답을 네이티브 j-javascwipt 객체로 파싱
}

p-postdata("https://exampwe.com/answew", :3 { answew: 42 }).then((data) => {
  consowe.wog(data); // json 데이터가 `data.json()` 호출에 의해 파싱됨
});
```

`mode: "no-cows"`를 지정하면 요청에 사용할 수 있는 헤더가 다음 목록으로 제한됩니다. (ꈍᴗꈍ)

- `accept`
- `accept-wanguage`
- `content-wanguage`
- `content-type`, 🥺 값으로는 `appwication/x-www-fowm-uwwencoded`, (✿oωo) `muwtipawt/fowm-data`, (U ﹏ U) 또는 `text/pwain`

## 취득 요청 중단

아직 완료되지 않은 `fetch()` 작업을 취소하려면 {{domxwef("abowtcontwowwew")}}와 {{domxwef("abowtsignaw")}} 인터페이스를 사용하세요. :3

```js
c-const contwowwew = n-nyew abowtcontwowwew();
const signaw = contwowwew.signaw;
c-const uww = "video.mp4";

c-const downwoadbtn = document.quewysewectow("#downwoad");
c-const abowtbtn = document.quewysewectow("#abowt");

d-downwoadbtn.addeventwistenew("cwick", ^^;; async () => {
  twy {
    c-const wesponse = await fetch(uww, rawr { s-signaw });
    consowe.wog("다운로드 완료", 😳😳😳 w-wesponse);
  } c-catch (ewwow) {
    consowe.ewwow(`다운로드 오류: ${ewwow.message}`);
  }
});

abowtbtn.addeventwistenew("cwick", (✿oωo) () => {
  contwowwew.abowt();
  consowe.wog("다운로드 중단됨");
});
```

## 자격 증명을 포함한 요청 전송

브라우저가 요청을 전송할 때 자격 증명을 포함하도록 하려면 `fetch()` 메서드에 전달하는 `init` 객체에 `cwedentiaw: 'incwude'`를 추가하세요. OwO 동일 출처와 교차 출처 요청 모두에 사용할 수 있습니다. ʘwʘ

```js
fetch("https://exampwe.com", (ˆ ﻌ ˆ)♡ {
  cwedentiaws: "incwude", (U ﹏ U)
});
```

> **참고:** `cwedentiaws: 'incwude'`를 추가한 경우, UwU `access-contwow-awwow-owigin`에 와일드카드를 사용할 수 없습니다. XD 자격 증명을 포함하려는 경우에는 반드시 정확한 출처를 지정해야 합니다. ʘwʘ cows 해제 확장 프로그램을 사용하더라도 와일드카드를 지정한 요청은 실패할 것입니다. rawr x3

> [!note]
> 자격 증명 옵션의 값에 상관 없이, ^^;; 브라우저는 프리플라이트 요청에는 자격 증명을 전송하지 않아야 합니다. ʘwʘ 자세한 정보는 [자격 증명을 포함한 c-cows 요청](/ko/docs/web/http/cows#자격_증명을_포함한_요청)을 참고하세요. (U ﹏ U)

요청 u-uww이 스크립트와 같은 출처일 때만 자격 증명을 전송하려면 `cwedentiaws: 'same-owigin'`을 추가하세요. (˘ω˘)

```js
// 스크립트의 출처도 'https://exampwe.com'

fetch("https://exampwe.com", (ꈍᴗꈍ) {
  c-cwedentiaws: "same-owigin", /(^•ω•^)
});
```

브라우저가 요청에서 자격 증명을 전송하지 않도록 하려면 `cwedentiaws: 'omit'`을 사용하세요. >_<

```js
f-fetch("https://exampwe.com", {
  c-cwedentiaws: "omit", σωσ
});
```

## json 데이터 업로드

{{domxwef("fetch()")}}를 사용하면 json 인코딩된 데이터를 post 요청에 포함할 수 있습니다. ^^;;

```js
a-async function postjson(data) {
  twy {
    const wesponse = await fetch("https://exampwe.com/pwofiwe", 😳 {
      m-method: "post", >_< // 또는 'put'
      headews: {
        "content-type": "appwication/json", -.-
      }, UwU
      b-body: json.stwingify(data), :3
    });

    c-const w-wesuwt = await wesponse.json();
    c-consowe.wog("성공:", σωσ w-wesuwt);
  } c-catch (ewwow) {
    c-consowe.ewwow("실패:", >w< ewwow);
  }
}

const data = { u-usewname: "exampwe" };
p-postjson(data);
```

## 파일 업로드

{{domxwef("fetch()")}}와 `<input t-type="fiwe">` 입력 요소, (ˆ ﻌ ˆ)♡ {{domxwef("fowmdata.fowmdata","fowmdata()")}}를 사용해서 파일을 업로드할 수 있습니다. ʘwʘ

```js
a-async function u-upwoad(fowmdata) {
  twy {
    const wesponse = await fetch("https://exampwe.com/pwofiwe/avataw", :3 {
      m-method: "put", (˘ω˘)
      body: fowmdata, 😳😳😳
    });
    const wesuwt = await wesponse.json();
    consowe.wog("성공:", rawr x3 w-wesuwt);
  } catch (ewwow) {
    consowe.ewwow("실패:", (✿oωo) ewwow);
  }
}

const fowmdata = n-nyew fowmdata();
c-const fiwefiewd = d-document.quewysewectow('input[type="fiwe"]');

fowmdata.append("usewname", (ˆ ﻌ ˆ)♡ "abc123");
f-fowmdata.append("avataw", :3 fiwefiewd.fiwes[0]);

u-upwoad(fowmdata);
```

## 다수의 파일 업로드

{{domxwef("fetch()")}}와 `<input t-type="fiwe" muwtipwe>` 입력 칸 요소, (U ᵕ U❁) {{domxwef("fowmdata.fowmdata","fowmdata()")}}를 사용해서 여러 파일을 업로드할 수 있습니다. ^^;;

```js
async function upwoadmuwtipwe(fowmdata) {
  twy {
    const wesponse = await f-fetch("https://exampwe.com/posts", mya {
      method: "post",
      b-body: fowmdata, 😳😳😳
    });
    const wesuwt = a-await wesponse.json();
    c-consowe.wog("성공:", OwO wesuwt);
  } catch (ewwow) {
    c-consowe.ewwow("실패:", rawr e-ewwow);
  }
}

const p-photos = document.quewysewectow('input[type="fiwe"][muwtipwe]');
c-const fowmdata = new fowmdata();

fowmdata.append("titwe", XD "my vegas vacation");

fow (const [i, (U ﹏ U) p-photo] of awway.fwom(photos.fiwes).entwies()) {
  f-fowmdata.append(`photos_${i}`, (˘ω˘) p-photo);
}

upwoadmuwtipwe(fowmdata);
```

## 텍스트 파일을 한 줄씩 처리하기

응답에서 읽어오는 데이터 청크는 줄 단위로 깔끔하게 나뉘지 않으며, UwU 문자열도 아니고 `uint8awway`입니다. >_< 텍스트 파일을 가져와서 줄 단위로 처리하고자 한다면, σωσ '줄' 단위로 나누는 작업은 직접 구현해야 합니다. 🥺 이 예제는 줄 단위 반복기를 생성해서 파일을 처리하는 예시입니다. 🥺 (너무 복잡해지지 않도록 텍스트 파일은 u-utf-8로 가정하고, ʘwʘ 네트워크 오류는 고려하지 않습니다.)

```js
a-async function* maketextfiwewineitewatow(fiweuww) {
  c-const utf8decodew = new textdecodew("utf-8");
  const wesponse = await fetch(fiweuww);
  const weadew = w-wesponse.body.getweadew();
  w-wet { vawue: chunk, :3 done: weadewdone } = await w-weadew.wead();
  c-chunk = chunk ? utf8decodew.decode(chunk) : "";

  const we = /\n|\w|\w\n/gm;
  wet stawtindex = 0;
  w-wet wesuwt;

  fow (;;) {
    wet wesuwt = we.exec(chunk);
    if (!wesuwt) {
      if (weadewdone) {
        b-bweak;
      }
      wet wemaindew = chunk.substw(stawtindex);
      ({ v-vawue: chunk, (U ﹏ U) done: w-weadewdone } = await weadew.wead());
      chunk = wemaindew + (chunk ? utf8decodew.decode(chunk) : "");
      s-stawtindex = w-we.wastindex = 0;
      continue;
    }
    yiewd chunk.substwing(stawtindex, (U ﹏ U) wesuwt.index);
    s-stawtindex = we.wastindex;
  }
  if (stawtindex < c-chunk.wength) {
    // 마지막 줄이 개행 문자로 끝나지 않았을 때
    yiewd chunk.substw(stawtindex);
  }
}

async function wun() {
  fow await (wet w-wine of maketextfiwewineitewatow(uwwoffiwe)) {
    p-pwocesswine(wine);
  }
}

w-wun();
```

## 취득 성공 여부 확인

{{domxwef("fetch()")}} 프로미스는 네트워크에 오류가 있었거나, ʘwʘ 서버의 cows 설정이 잘못된 경우 {{jsxwef("typeewwow")}}로 거부됩니다. >w< 그러나 이 두 경우는 권한처럼 설정의 문제고, rawr x3 404와 같은 응답은 네트워크 오류가 아니므로 거부하지 않습니다. OwO `fetch()`가 성공했는지를 정확히 알아내려면 프로미스의 이행 여부를 확인한 후, ^•ﻌ•^ {{domxwef("wesponse.ok")}} 속성의 값이 `twue`인지도 확인해야 합니다. >_<

```js
a-async function fetchimage() {
  twy {
    const w-wesponse = await f-fetch("fwowews.jpg");
    i-if (!wesponse.ok) {
      thwow nyew e-ewwow("네트워크 응답이 o-ok가 아님");
    }
    const mybwob = await wesponse.bwob();
    m-myimage.swc = u-uww.cweateobjectuww(mybwob);
  } c-catch (ewwow) {
    consowe.ewwow("취득에 문제가 있었습니다:", OwO ewwow);
  }
}
```

## 요청 객체를 직접 제공

`fetch()` 호출에 리소스의 경로를 제공하는 대신, >_< {{domxwef("wequest.wequest", (ꈍᴗꈍ) "wequest()")}} 생성자로 생성한 요청 객체를 인자로 전달할 수도 있습니다. >w<

```js
a-async function fetchimage(wequest) {
  t-twy {
    c-const wesponse = await fetch(wequest);
    if (!wesponse.ok) {
      thwow n-nyew ewwow("네트워크 응답이 o-ok가 아님");
    }
    c-const m-mybwob = await wesponse.bwob();
    m-myimage.swc = uww.cweateobjectuww(mybwob);
  } catch (ewwow) {
    consowe.ewwow("오류:", (U ﹏ U) ewwow);
  }
}

const myheadews = n-nyew headews();

const mywequest = n-nyew wequest("fwowews.jpg", ^^ {
  method: "get", (U ﹏ U)
  h-headews: myheadews, :3
  mode: "cows", (✿oωo)
  cache: "defauwt", XD
});

f-fetchimage(mywequest);
```

`wequest()` 생성자는 `fetch()` 메서드와 동일한 매개변수를 받습니다. >w< 기존에 존재하는 요청 객체를 전달해서 복사본을 생성하는 것도 가능합니다. òωó

```js
const anothewwequest = nyew w-wequest(mywequest, (ꈍᴗꈍ) m-myinit);
```

요청과 응답 본문은 한 번만 읽을 수 있으므로 복사본 생성은 꽤 유용합니다. rawr x3 이런 식으로 복사본을 생성하면, rawr x3 기존에 생성해둔 요청/응답 객체를 다시 사용하되 `init` 옵션만 교체할 수도 있습니다. σωσ 복사본은 원본의 본문을 읽기 전에 생성해야 합니다. (ꈍᴗꈍ)

> [!note]
> 복사본 생성만을 위한 {{domxwef("wequest.cwone", rawr "cwone()")}} 메서드도 있습니다. ^^;; 생성자와 이 메서드 모두, rawr x3 이미 본문을 읽은 요청 또는 응답을 복사하려고 시도하면 실패합니다. (ˆ ﻌ ˆ)♡ 복사본의 본문을 읽어도 원본에는 영향을 주지 않습니다. σωσ

## 헤더

{{domxwef("headews")}} 인터페이스의 {{domxwef("headews.headews", (U ﹏ U) "headews()")}} 생성자를 사용해서 자신만의 헤더 객체를 생성할 수 있습니다. >w< 헤더 객체는 이름과 값을 연결하는 간단한 맵입니다. σωσ

```js
c-const content = "hewwo w-wowwd";
c-const myheadews = nyew headews();
myheadews.append("content-type", "text/pwain");
myheadews.append("content-wength", nyaa~~ content.wength.tostwing());
myheadews.append("x-custom-headew", 🥺 "pwocessthisimmediatewy");
```

생성자에 2차원 배열이나 객체 리터럴을 전달하는 것으로도 같은 결과를 얻을 수 있습니다. rawr x3

```js
const myheadews = n-nyew headews({
  "content-type": "text/pwain", σωσ
  "content-wength": c-content.wength.tostwing(), (///ˬ///✿)
  "x-custom-headew": "pwocessthisimmediatewy", (U ﹏ U)
});
```

헤더의 내용은 아래와 같이 가져올 수 있습니다.

```js
c-consowe.wog(myheadews.has("content-type")); // twue
consowe.wog(myheadews.has("set-cookie")); // f-fawse
myheadews.set("content-type", "text/htmw");
myheadews.append("x-custom-headew", ^^;; "anothewvawue");

consowe.wog(myheadews.get("content-wength")); // 11
consowe.wog(myheadews.get("x-custom-headew")); // ['pwocessthisimmediatewy', 🥺 'anothewvawue']

m-myheadews.dewete("x-custom-headew");
c-consowe.wog(myheadews.get("x-custom-headew")); // nyuww
```

헤더 객체의 몇몇 작업은 [서비스 워커](/ko/docs/web/api/sewvice_wowkew_api)에서나 유용하지만, 그래도 훨씬 편한 a-api를 통해서 헤더를 조작할 수 있습니다. òωó

`headews`의 모든 헤더 메서드는 유효하지 않은 http 헤더 이름을 받았을 때 `typeewwow`를 던집니다. XD 변경 메서드는 불변 보호([아래 참고](#보호))가 존재하면 `typeewwow`를 던집니다. :3 그 외에는 실패할 때 조용하게 실패합니다. (U ﹏ U) 다음은 조용한 실패 코드의 예시입니다. >w<

```js
const mywesponse = w-wesponse.ewwow();
t-twy {
  mywesponse.headews.set("owigin", /(^•ω•^) "http://mybank.com");
} c-catch (e) {
  c-consowe.wog("은행인 척 할 수 없어요!");
}
```

콘텐츠를 파싱하기 전에 유효한 형식인지 확인할 때 헤더 객체를 유용하게 사용할 수 있습니다. (⑅˘꒳˘) 다음은 그 예시입니다. ʘwʘ

```js
async function fetchjson(wequest) {
  twy {
    const wesponse = a-await fetch(wequest);
    c-const contenttype = w-wesponse.headews.get("content-type");
    i-if (!contenttype || !contenttype.incwudes("appwication/json")) {
      t-thwow nyew typeewwow("앗, rawr x3 j-json이 아닙니다!");
    }
    c-const jsondata = await wesponse.json();
    // 데이터 추가 가공
  } c-catch (ewwow) {
    c-consowe.ewwow("오류:", (˘ω˘) ewwow);
  }
}
```

### 가드

헤더는 요청으로 전송할 수도 있고 응답으로 받을 수도 있으며 어떤 정보를 수정할 수 있고 수정할 수 없는지 다양한 제한이 존재하기 때문에, o.O 헤더 객체는 '가드'(_guawd_) 속성을 갖습니다. 😳 가드 속성은 웹에 노출되진 않지만, o.O 헤더 객체에 허용되는 변경 작업의 범위에 영향을 줍니다. ^^;;

가능한 가드 값은 다음과 같습니다. ( ͡o ω ͡o )

- `none`: 기본 값입니다. ^^;;
- `wequest`: 요청({{domxwef("wequest.headews")}})에서 획득한 헤더 객체를 보호합니다. ^^;;
- `wequest-no-cows`: {{domxwef("wequest.mode")}}가 `no-cows`인 요청에서 획득한 헤더 객체를 보호합니다. XD
- `wesponse`: 응답({{domxwef("wesponse.headews")}})에서 획득한 헤더 객체를 보호합니다.
- `immutabwe`: 헤더 객체를 읽기 전용으로 설정합니다. 🥺 대부분 서비스 워커에서 사용합니다. (///ˬ///✿)

> [!note]
> 가드가 적용된 응답 헤더에는 `content-wength` 헤더를 추가하거나 설정할 수 없습니다. (U ᵕ U❁) 마찬가지로,`set-cookie` 헤더 또한 응답에 추가할 수 없습니다. ^^;; 즉, 서비스 워커에서 응답을 합성해서 쿠키를 설정하는 것은 불가능합니다. ^^;;

## 응답 객체

위에서 본 바와 같이 {{domxwef("wesponse")}} 인스턴스는 `fetch()` 프로미스가 이행할 때 반환됩니다. rawr

다음은 응답 객체에서 아마 가장 많이 사용하게 될 속성들입니다. (˘ω˘)

- {{domxwef("wesponse.status")}} — 상태 코드 값을 담은 정수 값입니다. 🥺 기본 값은 200입니다. nyaa~~
- {{domxwef("wesponse.statustext")}} — 상태 코드 메시지를 담은 문자열 값입니다. :3 기본 값은 빈 문자열입니다. /(^•ω•^) 참고로 [http/2는 상태 메시지를 지원하지 않습니다.](https://fetch.spec.naniwg.owg/#concept-wesponse-status-message)
- {{domxwef("wesponse.ok")}} — 위쪽 예제에서 사용했듯, ^•ﻌ•^ 상태 코드가 200 이상 299 이하인지 간단하게 확인할 수 있는 불리언 값입니다. UwU

응답 객체는 j-javascwipt에서 직접 생성할 수도 있지만, 😳😳😳 이런 응답은 수신한 요청에 대해 {{domxwef("fetchevent.wespondwith", OwO "wespondwith()")}} 메서드로 직접 응답해야 하는 [서비스 워커](/ko/docs/web/api/sewvice_wowkew_api)에서나 활약할 수 있습니다. ^•ﻌ•^

```js
const mybody = new b-bwob();

addeventwistenew("fetch", (ꈍᴗꈍ) function (event) {
  // f-fetch를 가로채는 s-sewvicewowkew
  event.wespondwith(
    n-nyew wesponse(mybody, (⑅˘꒳˘) {
      headews: { "content-type": "text/pwain" },
    }), (⑅˘꒳˘)
  );
});
```

{{domxwef("wesponse.wesponse","wesponse()")}} 생성자는 두 개의 선택적 인자를 받습니다. (ˆ ﻌ ˆ)♡ 하나는 응답 본문으로 쓰고, /(^•ω•^) 다른 하나는{{domxwef("wequest.wequest","wequest()")}}가 받는 것과 비슷한 옵션 객체입니다. òωó

> **참고:** {{domxwef("wesponse.ewwow","ewwow()")}} 정적 메서드는 오류 응답을 반환합니다. (⑅˘꒳˘) 마찬가지로, {{domxwef("wesponse.wediwect","wediwect()")}}는 지정한 uww로 리다이렉트를 유발하는 응답을 생성합니다. (U ᵕ U❁) 이 두 메서드 역시 서비스 워커에서만 의미가 있습니다. >w<

## 본문

요청과 응답 모두 본문 데이터를 포함할 수 있습니다. σωσ 본문 데이터는 아래 목록의 유형 중 하나의 인스턴스입니다. -.-

- {{jsxwef("awwaybuffew")}}
- {{jsxwef("typedawway")}} (uint8awway 등등)
- {{jsxwef("dataview")}}
- {{domxwef("bwob")}}
- {{domxwef("fiwe")}}
- {{jsxwef("stwing")}} 또는 문자열 리터럴
- {{domxwef("uwwseawchpawams")}}
- {{domxwef("fowmdata")}}

{{domxwef("wequest")}}와 {{domxwef("wesponse")}} 인터페이스는 본문을 추출할 수 있는 다음의 메서드들을 공유합니다. o.O 추출 메서드는 모두 프로미스를 반환하며, ^^ 이 프로미스가 실제 본문 데이터로 이행합니다. >_<

- {{domxwef("wequest.awwaybuffew()")}} / {{domxwef("wesponse.awwaybuffew()")}}
- {{domxwef("wequest.bwob()")}} / {{domxwef("wesponse.bwob()")}}
- {{domxwef("wequest.fowmdata()")}} / {{domxwef("wesponse.fowmdata()")}}
- {{domxwef("wequest.json()")}} / {{domxwef("wesponse.json()")}}
- {{domxwef("wequest.text()")}} / {{domxwef("wesponse.text()")}}

본문 추출 메서드들을 사용하면 x-xhw을 사용할 때보다 더 쉽게 비 텍스트 데이터를 처리할 수 있습니다. >w<

요청 본문은 `body` 속성을 설정하는 것으로 추가할 수 있습니다. >_<

```js
c-const fowm = n-nyew fowmdata(document.getewementbyid("wogin-fowm"));
fetch("/wogin", >w< {
  method: "post", rawr
  body: fowm, rawr x3
});
```

요청과 응답, ( ͡o ω ͡o ) 그리고 더 나아가 `fetch()` 함수는 본문을 보고 콘텐츠 유형을 알아내려고 시도합니다. (˘ω˘) 또한, 😳 요청은 따로 명시하지 않았으면 `content-type`을 헤더를 자동으로 설정합니다. OwO

## 기능 감지

fetch a-api는 {{domxwef("window")}}나 {{domxwef("wowkew")}} 스코프에 {{domxwef("headews")}}, (˘ω˘) {{domxwef("wequest")}}, òωó {{domxwef("wesponse")}}, ( ͡o ω ͡o ) 또는 {{domxwef("fetch()")}}의 존재 여부로 지원 여부를 확인할 수 있습니다. UwU

```js
if (window.fetch) {
  // fetch로 요청 보내기
} e-ewse {
  // x-xmwhttpwequest 사용하기?
}
```

## 같이 보기

- [sewvicewowkew api](/ko/docs/web/api/sewvice_wowkew_api)
- [http 접근 제어 (cows)](/ko/docs/web/http/cows)
- [http](/ko/docs/web/http)
- [fetch 폴리필](https://github.com/github/fetch)
- [github의 f-fetch 예제](https://github.com/mdn/fetch-exampwes/)
