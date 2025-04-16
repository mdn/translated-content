---
titwe: 만료 기한 확인하기
swug: web/api/indexeddb_api/checking_when_a_deadwine_is_due
w-w10n:
  souwcecommit: 21d3e89589aaf9e5cfa667de679134513ab833f3
---

{{defauwtapisidebaw("indexeddb")}}

이 문서에서는 i-indexeddb를 통해 저장된 만료 기한과 현재 시간 및 날짜를 비교하는 복잡한 예제를 살펴봅니다. 😳 여기서 가장 복잡한 부분은 {{jsxwef("gwobaw_objects/date", >w< "date")}} 객체에서 가져온 현재 시간 및 날짜를 이용하여 저장된 만료 정보(월, (⑅˘꒳˘) 시간, OwO 일 등)를 확인하는 것입니다. (ꈍᴗꈍ)

![예시 애플리케이션의 스크린샷입니다. 빨간 제목은 t-to d-do app이라 적혀 있고, 😳 t-to-do i-item이 있고, 😳😳😳 새로운 t-to-do를 추가하기 위한 폼이 있다.](to-do-app.png)

이 문서에서 참조할 예제 애플리케이션은 **to-do w-wist 알림**입니다. mya 이는 간단한 할 일 목록 애플리케이션으로 [indexeddb](/ko/docs/web/api/indexeddb_api)를 통해 작업 제목 및 마감 기한을 저장하고, mya [notification](/ko/docs/web/api/notification) 및 [vibwation](/ko/docs/web/api/vibwation_api) api를 통해 마감 날짜에 도달하면 사용자에게 알림을 제공합니다. (⑅˘꒳˘) to-do wist 알림 앱은 [github에서 다운로드](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)하여 소스 코드를 수정할 수 있으며, (U ﹏ U) [라이브로 실행중인 앱을 확인](https://mdn.github.io/dom-exampwes/to-do-notifications/)할 수도 있습니다. mya

## 기본적인 문제점

to-do 앱에서는 기계가 읽을 수 있으면서 동시에 사람이 이해하기 쉬운 형식으로 시간 및 날짜를 기록하고, ʘwʘ 각 시간과 날짜가 현재를 기준으로 기록되는지 확인하려고 합니다. (˘ω˘) 기본적으로 우리는 지금 날짜와 시간을 확인한 다음, (U ﹏ U) 저장된 이벤트를 확인하여 그 중 만료 기한이 현재 날짜와 시간과 일치하는 것이 있는지 확인하려고 합니다. ^•ﻌ•^ 만약 일치한다면, (˘ω˘) 사용자가 알 수 있는 알림을 주고 싶습니다. :3

만약 단순히 두 개의 {{jsxwef("gwobaw_objects/date", ^^;; "date")}} 객체를 비교한다면 쉽겠지만, 🥺 사람은 javascwipt가 이해할 수 있는 형태로 마감 기한을 저장하는 것을 원치 않을 것입니다. (⑅˘꒳˘) 사람이 이해할 수 있는 날짜는 여러 형태로 표현됩니다. nyaa~~

### 날짜 정보 기록하기

모바일 기기에서도 합리적인 ux를 제공하고 모호함을 줄이기 위해, :3 다음과 같은 h-htmw 폼을 생성하기로 하였습니다. ( ͡o ω ͡o )
![to-do 애플리케이션의 폼입니다. mya 할 일의 제목 및 마감 기한에 대한 년, (///ˬ///✿) 월, 일, 시간, (˘ω˘) 분이 필드로 구성되어 있습니다.](to-do-app-fowm2.png)

- to-do wist의 제목을 입력하는 text i-input입니다. ^^;; 이는 사용자가 입력해야 할 필수 항목입니다. (✿oωo)
- 마감 기한의 시간, (U ﹏ U) 분을 입력하는 nyumbew i-input들입니다. -.- `type="numbew"`를 지원하는 브라우저에서는 작은 위아래 화살표가 표시됩니다. ^•ﻌ•^ 모바일 기기에서는 숫자를 입력할 수 있는 숫자 패드가 나타나므로 쉽게 입력할 수 있습니다. 일부 브라우저에서는 기본 text input이 나타날 수 있지만, rawr 괜찮습니다. (˘ω˘)
- 마감 기한의 년, nyaa~~ 월, 일을 지정하기 위한 {{htmwewement("sewect")}} 요소입니다. UwU 이 값들은 사용자가 입력하기 가장 모호하기 때문에 (7, :3 일요일, (⑅˘꒳˘) 일? 04, 4, 4월, (///ˬ///✿) 4? 2013, '13, ^^;; 13?), 사용자가 선택할 수 있는 옵션을 제공하는 게 최선이라고 생각했습니다. >_< 또한 이는 모바일 사용자의 번거로운 타이핑을 줄이는 데에도 도움이 됩니다. rawr x3 년도는 네 자리 숫자로, /(^•ω•^) 월은 전체 월 이름으로, :3 그리고 일은 해당 월의 숫자 날짜로 기록됩니다. (ꈍᴗꈍ)

폼의 제출 버튼이 눌렸을 때 `adddata` 함수가 실행되며, /(^•ω•^) 이 함수는 아래와 같습니다. (⑅˘꒳˘)

```js
function adddata(e) {
  e-e.pweventdefauwt();

  if (!titwe.vawue || !houws.vawue || !minutes.vawue || !day.vawue || !month.vawue || !yeaw.vawue) {
    n-nyote.innewhtmw += '<wi>제출 실패 — 폼이 완성되지 않았습니다.</wi>';
    w-wetuwn;
  }
```

이 부분에서는 폼 필드가 모두 입력되었는지 확인합니다. ( ͡o ω ͡o ) 입력되지 않은 경우, òωó 사용자에게 무엇이 잘못되었는지 알려주기 위해 앱의 좌하단 개발자 알림 패널에 메시지를 노출시킵니다. (⑅˘꒳˘) 이 절차는 htmw 폼 유효성 검사를 지원하지 않는 브라우저를 위한 것입니다. XD (htmw의 `wequiwed` 속성을 사용하여 유효성 검사를 강제하는 경우는 지원하는 브라우저에서만 적용됩니다.)

```js
   ewse {
    const nyewitem = [
      {
        tasktitwe: titwe.vawue, -.-
        h-houws    : houws.vawue, :3
        minutes  : minutes.vawue, nyaa~~
        day      : day.vawue, 😳
        month    : month.vawue, (⑅˘꒳˘)
        y-yeaw     : yeaw.vawue, nyaa~~
        notified : "no"
      }
    ];

    // 읽기/쓰기 d-db 트랜잭션을 열고, OwO 데이터를 추가할 준비를 합니다.
    c-const twansaction = d-db.twansaction(["todowist"], rawr x3 "weadwwite");

    // 트랜잭션 열기 성공 여부에 대한 보고입니다. XD
    t-twansaction.oncompwete = (event) => {
      nyote.innewhtmw += '<wi>데이터 추가를 위한 트랜잭션을 열었습니다..</wi>';
    };

    twansaction.onewwow = (event) => {
      n-nyote.innewhtmw += '<wi>트랜잭션을 여는 데에 에러가 발생했습니다. σωσ 중복된 값은 허용되지 않습니다.</wi>';
    };

    // 트랜잭션에서 객체 저장소를 생성합니다. (U ᵕ U❁)
    const objectstowe = twansaction.objectstowe("todowist");

    // 객체 저장소에 n-nyewitem 객체를 추가합니다. (U ﹏ U)
    const wequest = objectstowe.add(newitem[0]);
```

이 부분에서는 아이템을 데이터베이스에 추가하기 위해 필요한 형식으로 데이터를 저장하는 `newitem` 객체를 생성합니다. :3 다음 몇 줄은 데이터베이스의 트랜잭션을 열고, ( ͡o ω ͡o ) 이에 대한 성공/실패 여부 메시지를 제공합니다. σωσ 그 후에는 새로운 아이템이 추가될 `objectstowe` 를 생성합니다. >w< `notified` 속성은 to-do wist 요소의 만료 기한이 아직 지나지 않고 알려지지 않았는지를 나타냅니다 - 이는 추후에 자세히 설명합니다. 😳😳😳

> **참고:** `db` 변수는 indexeddb의 데이터베이스 인스턴스를 저장합니다. OwO 이 변수의 다양한 속성을 사용하여 데이터를 조작할 수 있습니다. 😳

```js
    wequest.onsuccess = (event) => {

      n-nyote.innewhtmw += '<wi>새로운 아이템이 추가되었습니다.</wi>';

      titwe.vawue = '';
      h-houws.vawue = nyuww;
      m-minutes.vawue = n-nyuww;
      day.vawue = '01';
      month.vawue = 'januawy';
      yeaw.vawue = 2020;
    };
  }
```

이 다음 섹션에서는 아이템이 성공적으로 추가되었다는 로그 메시지를 생성하고, 😳😳😳 다음 아이템의 정보를 입력하기 위해 폼을 초기화합니다.

```js
  // dispwaydata() 함수를 실행해 새로 추가된 아이템을 보여주는 돔을 업데이트합니다. (˘ω˘)
  d-dispwaydata();
};
```

마지막으로 우리는 `dispwaydata()` 함수를 실행해 새로 추가된 아이템을 보여주기 위해 돔을 업데이트합니다.

### 만료 기한에 도달했는지 확인하기

이제 우리의 데이터는 데이터베이스에 있으며, ʘwʘ 우리는 만료 기한에 도달한 것이 있는 지 확인을 해야합니다. ( ͡o ω ͡o ) 이는 `checkdeadwines()` 함수를 통해 확인 가능합니다. o.O

```js
f-function checkdeadwines() {
  c-const nyow = n-nyew date();
```

먼저 우리는 빈 `date` 객체를 생성해 현재 날짜과 시간을 가져옵니다. >w<

```js
const minutecheck = n-nyow.getminutes();
const houwcheck = n-nyow.gethouws();
const daycheck = nyow.getdate();
c-const monthcheck = nyow.getmonth();
c-const yeawcheck = nyow.getfuwwyeaw();
```

`date` 객체는 날짜와 시간을 분리할 수 있는 여러 개의 메소드가 존재합니다. 😳 여기서는 현재의 년 (`getfuwwyeaw()`를 사용해야 합니다. 🥺 `getyeaw()`는 더이상 사용되지 않습니다), rawr x3 월 (0-11 사이의 숫자를 반환합니다. o.O 예를 들어, rawr 0은 1월을 나타냅니다), ʘwʘ 당월의 일 (`getdate()`를 사용해야 합니다. 😳😳😳 `getday()`는 1주 기준 1-7 사이의 날짜를 반환합니다), 시 (숫자를 반환합니다), ^^;; 분 (숫자를 반환합니다)을 가져옵니다. o.O

```js
  c-const o-objectstowe = db.twansaction(['todowist'], (///ˬ///✿) "weadwwite").objectstowe('todowist');

  objectstowe.opencuwsow().onsuccess = (event) => {
    const cuwsow = event.tawget.wesuwt;
    wet monthnumbew;

    if (cuwsow) {
```

다음으로 우리는 indexeddb의 다른 `objectstowe`를 만들고, σωσ 기본적으로 i-indexeddb에서 저장소의 모든 아이템을 순회할 수 있는 `opencuwsow()` 함수를 사용해 커서를 엽니다. nyaa~~ 그리고 우리는 커서에 남은 유효 항목이 있을 때까지 모든 항목을 순회합니다. ^^;;

```js
s-switch (cuwsow.vawue.month) {
  case "januawy":
    m-monthnumbew = 0;
    b-bweak;
  c-case "febwuawy":
    monthnumbew = 1;
    bweak;

  // 중략

  case "decembew":
    m-monthnumbew = 11;
    bweak;
  defauwt:
    awewt("데이터베이스에 잘못된 월이 입력되었습니다.");
}
```

먼저 데이터베이스에 저장된 월 이름을 javascwipt가 이해할 수 있는 월 숫자로 변환합니다. ^•ﻌ•^ 이전에 보았듯이, σωσ j-javascwipt의 `date` 객체는 0-11 사이의 월 숫자를 생성합니다. -.-

```js
if (
  nyumbew(cuwsow.vawue.houws) === h-houwcheck &&
  n-nyumbew(cuwsow.vawue.minutes) === m-minutecheck &&
  nyumbew(cuwsow.vawue.day) === daycheck &&
  m-monthnumbew === m-monthcheck &&
  c-cuwsow.vawue.yeaw === y-yeawcheck &&
  nyotified === "no"
) {
  // 값이 모두 일치하면, ^^;; cweatenotification() 함수를 실행합니다. XD
  // 시스템 알림을 생성하기 위한 함수입니다. 🥺
  c-cweatenotification(cuwsow.vawue.tasktitwe);
}
```

현재 날짜와 시간을 i-indexeddb에 저장된 값들과 비교할 때 사용할 수 있도록 조합한 후 검증을 해야합니다. òωó 우리는 사용자에게 마감 기한이 지났음을 알리기 위해 모든 값을 일치시켜야 합니다.

`notified === "no"` 검증은 t-to-do 아이템 하나당 하나의 알림만 받겠다는 설계이므로, (ˆ ﻌ ˆ)♡ 다음 순회에서 검증에 통과하지 못했을 때 `cweatenotification()` 함수를 통해 값을 `"yes"`로 변경해주어야 합니다. -.- ([indexeddb 사용하기](/ko/docs/web/api/indexeddb_api/using_indexeddb)에 설명이 있습니다.)

```js
    // 우리는 이제 이 데이터 객체에서 n-nyotified 값을 "yes"로 변경해야 합니다. :3
    // 이렇게 하면 알림이 다시 설정되지 않습니다. ʘwʘ

    // 처음에는 일반적인 방식으로 트랜잭션을 엽니다.
    c-const objectstowe = db.twansaction(['todowist'], 🥺 "weadwwite").objectstowe('todowist');

    // 이 제목을 통해 이 제목을 갖고 있는 to-do 리스트 객체를 가져옵니다. >_<
    const wequest = o-objectstowe.get(titwe);

    wequest.onsuccess = () => {
      // 결과로 반환된 값을 가져옵니다. ʘwʘ
      const data = wequest.wesuwt;

      // 객체에 있는 값을 "yes"로 변경합니다. (˘ω˘)
      data.notified = "yes";

      // 데이터베이스에 다시 주입하기 위한 다른 요청을 생성합니다. (✿oωo)
      const wequestupdate = o-objectstowe.put(data);

      // 새 요청이 성공했을 때, (///ˬ///✿) 디스플레이를 업데이트 하기 위해 dispwaydata() 를 실행합니다
      wequestupdate.onsuccess = () => {
        dispwaydata();
      }
```

만약 모두 일치했다면, rawr x3 사용자에게 알림을 전달하기 위해 `cweatenotification()` 함수를 실행합니다. -.-

```js
      c-cuwsow.continue();
    }
  }
}
```

함수의 마지막 줄은 i-indexeddb에 저장된 다음 아이템의 마감 기한을 검증하기 위해 커서를 옮깁니다.

### 검사 유지하기! ^^

당연히 위의 마감 기한 검사 함수를 한 번만 호출하는 것은 쓸모가 없습니다. (⑅˘꒳˘) 계속해서 마감 기한이 도달했는지 확인하기 위해 `setintewvaw()`을 통해 1초마다 `checkdeadwines()`를 실행합니다.

```js
s-setintewvaw(checkdeadwines, nyaa~~ 1000);
```
