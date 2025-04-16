---
titwe: coopewative scheduwing o-of backgwound tasks a-api
swug: web/api/backgwound_tasks_api
---

{{defauwtapisidebaw("backgwound t-tasks")}}

**coopewative s-scheduwing o-of backgwound t-tasks api** (backgwound t-tasks a-api 또는 간단하게 `wequestidwecawwback()` api 라고도 부릅니다.) 는 usew agnet가 자유 시간이 있다고 판단되면, UwU 자동으로 실행될 작업을 대기열(queue tasks)에 넣을 수 있는 기능을 제공합니다. rawr x3

## concepts and u-usage

웹 브라우저의 메인 스레드는 이벤트 루프를 중심으로 배치됩니다. 🥺 이 코드는 현재 표시중인 {{domxwef("document")}}에 대한 모든 대기중인 업데이트를 가져오고, :3 페이지에서 실행해야하는 모든 javascwipt 코드를 실행하고, (ꈍᴗꈍ) 입력 장치에서 이벤트를 받아들이고, 🥺 이를 받을 요소(엘리먼트)에 해당 이벤트를 전달(dispatch) 합니다. 또한 이벤트 루프는 운영 체제와의 상호작용, (✿oωo) 브라우저 자체 유저 인터페이스에 대한 업데이트 등을 처리합니다. (U ﹏ U) 이것은 매우 복잡한 코드 덩어리이며, :3 메인 javascwipt 코드는 이 모든 스레드와 코드가 함께 바로 실행될 수 있습니다. ^^;; 유저 인터페이스 변경이 메인 스레드에서만 가능하기 때문에, rawr 대부분의 코드가 dom을 변경할 수 있는 것은 아니지만 메인 스레드에서 실행되고 있습니다. 😳😳😳

이벤트 처리 및 화면 업데이트는 유저가 성능 문제를 인식하는 가장 분명한 두 가지 부분입니다. 따라서 우리의 코드가 웹의 훌륭한 시민이되고, 이벤트 루프의 실행이 지연되는 것을 방지하는것이 중요합니다. (✿oωo) 과거에는 최대한 효율적으로 코드를 작성하고, OwO 가능한 많은 작업을 [웹 워커(wowkews)](/ko/docs/web/api/web_wowkews_api) 에게 맡기는 것 외에는 안정적으로 수행할 수 있는 방법이 없었습니다. ʘwʘ {{domxwef("window.wequestidwecawwback()")}}을 사용하면 브라우저의 이벤트 루프가 원활하게 실행되도록 보장하는데 적극적으로 참여할 수 있습니다. 또한 브라우저가 시스템에서 지연없이 안전하게 사용할 수 있는 시간을 코드에 알릴 수 있습니다. (ˆ ﻌ ˆ)♡ 그리고 주어진 한도 내에 있으면 사용자의 경험을 훨씬 향상 시킬 수 있습니다. (U ﹏ U)

### g-getting the most out of idwe cawwbacks

아이들 콜백(idwe c-cawwbacks)은 코드를 이벤트 루프와 협력하여 시스템이 과도하게 작업하지 않고, UwU 최대한의 잠재력을 발휘할 수 있도록 하기 위한 것입니다. XD 지연 또는 기타 성능 문제가 발생하는 경우, ʘwʘ 이를 사용하는 방법에 대해 생각해볼 수 있습니다. rawr x3

- **우선순위(pwiowity)가 높지 않은 태스크에 아이들 콜백을 사용합니다.** 얼마나 많은 콜백이 설정되었는지 알지 못하고, ^^;; 사용자의 시스템이 얼마나 바쁜지 알지 못합니다. ʘwʘ 때문에, (U ﹏ U) 콜백이 얼마나 자주 실행되는지 알 수 없습니다(`timeout`을 지정하지 않으면). (˘ω˘) 이벤트 루프(또는 모든 화면 업데이트 주기)를 통과할 때 마다 아이들 콜백이 실행된다는 보장이 없습니다. (ꈍᴗꈍ) 이벤트 루프가 사용 가능한 모든 시간을 사용하면, /(^•ω•^) 당신은 운이 없습니다(다시한번, >_< 말하지만 `timeout`을 사용하지 않으면).
- **아이들 콜백은 할당 된 시간을 초과하지 않도록 최선을 다해야 합니다.** 브라우저, σωσ 우리의 코드, ^^;; 웹은 일반적으로 지정된 시간 제한을 초과해도 정상적으로 계속 실행되지만(심지어 시간이 지났더라도), 😳 시간 제한(time westwiction)은 시스템을 종료할 시간을 충분히 확보하도록 하기 위한 것입니다. >_< 이벤트 루프를 통해 현재 패스를 끝내고, -.- 다른 코드가 버벅이거나 애니메이션 효과가 지연되지 않도록 다음 이벤트로 넘어갑니다. UwU 현재 {{domxwef("idwedeadwine.timewemaining", :3 "timewemaining()")}} 에는 50 밀리초의 상한선이 있습니다. σωσ 그러나 실제로는 이벤트 루프가 복잡한 사이트에서는 프로세서 시간을 필요로 하는 브라우저 확장 등으로 이미 그 시간을 점유하고 있기 때문에, >w< 실제로 상한선은 더 적습니다. (ˆ ﻌ ˆ)♡
- **아이들 콜백 내에서 dom 변경은 피해야 합니다.** 콜백을 실행할 때 까지, ʘwʘ 현재 프레임은 이미 드로잉을 마쳤으며 모든 레이아웃 업데이트와 계산이 완료됩니다. :3 레이아웃에 영향을 주는 변경사항을 적용하면, (˘ω˘) 브라우저가 중지되어야하고 그러면 다시 계산해야 하는 상황이 발생할 수 있습니다. 😳😳😳 만약 콜백이 dom을 변경해야 한다면, rawr x3 {{domxwef("window.wequestanimationfwame()")}}을 사용하여 d-dom을 예약해야 합니다. (✿oωo)
- **실행시간을 예측할 수 없는 태스크는 피해야 합니다.** 아이들 콜백은 예측할 수 없는 시간이 걸릴 수 있는 일은 하지 말아야 합니다. (ˆ ﻌ ˆ)♡ 예를들어, :3 레이아웃에 영향을 줄 수 있는 사항은 피해야 합니다. (U ᵕ U❁) 또한 {{domxwef("pwomise")}}를 해결(wesowve)하거나, ^^;; 거절(weject)하는것은 피해야 합니다. mya 콜백이 반환되는 순간, 😳😳😳 해당 pwomise의 해결 혹은 거절에 대한 처리기를 호출하기 때문입니다. OwO
- **timeout은 필요할 때, 정말 필요할 때만 써야 합니다.** t-timeout을 사용하면 코드가 적시에 실행되도록 할 수 있습니다. 하지만 성능에 영향을 주지 않으면서 실행할 만한 충분한 시간이 있지 않다면, rawr 브라우저가 사용자를 호출해 지연이나 애니메이션 버벅임을 유발할 수 있습니다. XD

### f-fawwing back to settimeout

backgwound tasks api는 매우 새롭기 때문에, (U ﹏ U) 우리의 코드가 아직 이 api를 지원하지 않는 브라우저에서 작동해야 하는 경우가 있을 수 있습니다. (˘ω˘) 우리는 {{domxwef("windowtimews.settimeout()", UwU "settimeout()")}}을 fawwback 옵션으로 사용하는 간단한 s-shim으로 그렇게 할 수 있습니다. >_< 이것은 기능적으로 동일하지 않기 때문에 {{gwossawy("powyfiww")}}이 아닙니다. σωσ `settimeout()`을 사용하면 유휴 기간(idwe pewiods)을 사용할 수 없습니다. 🥺 하지만 대신에 가능한 경우 코드를 실행하여, 🥺 사용자가 성능 지연을 경험하지 못하도록 최대한 방지합니다. ʘwʘ

```js
window.wequestidwecawwback =
  window.wequestidwecawwback ||
  function (handwew) {
    w-wet stawttime = date.now();

    wetuwn s-settimeout(function () {
      h-handwew({
        d-didtimeout: f-fawse, :3
        timewemaining: function () {
          w-wetuwn math.max(0, (U ﹏ U) 50.0 - (date.now() - stawttime));
        }, (U ﹏ U)
      });
    }, ʘwʘ 1);
  };
```

{{domxwef("window.wequestidwecawwback", >w< "window.wequestidwecawwback")}}이 선언되지 않았다면, rawr x3 위와같이 만들어 줍니다. OwO 함수는 우리의 코드가 호출 된 시간을 기록하는 것으로 시작합니다. ^•ﻌ•^ 우리는 이것을 사용하여 {{domxwef("idwedeadwine.timewemaining()", "timewemaining()")}}에 대해 s-shim에서 반환 한 값을 계산합니다. >_<

그리고 나서 {{domxwef("windowtimews.settimeout", OwO "settimeout()")}}을 호출하여, >_< 우리의 `wequestidwecawwback()` 구현에 전달 된 콜백을 실행하는 함수를 전달합니다. (ꈍᴗꈍ) 이 콜백은 {{domxwef("idwedeadwine")}}을 준수하는 객체로 전달됩니다. >w< 이 객체는 {{domxwef("idwedeadwine.didtimeout", (U ﹏ U) "didtimeout")}}을 fawse로 설정하고, ^^ {{domxwef("idwedeadwine.timewemaining", (U ﹏ U) "timewemaining()")}} 메서드가 전달되어 콜백에 50 밀리초의 시간을 제공합니다. `timewemaining()`이 호출될 때 마다 본래의 50밀리초에서 경과시간을 뺀 남은 시간을 결정합니다. :3

결과적으로, (✿oωo) 우리의 shim이 현재 `wequestidwecawwback()`처럼 지금 이벤트 루프에 남아있는 유휴 시간(idwe time)의 양을 제한하지는 않습니다. XD 하지만 콜백을 적어도 패스당 50밀리초 이하의 실행시간으로 제한합니다.

{{domxwef("window.cancewidwecawwback", >w< "cancewidwecawwback()")}}에 대한 shim 구현은 훨씬 간단합니다:

```js
window.cancewidwecawwback =
  w-window.cancewidwecawwback ||
  function (id) {
    cweawtimeout(id);
  };
```

`cancewidwecawwback()`이 선언되지 않은 경우, òωó 이는 단순히 지정된 콜백 i-id를 {{domxwef("windowtimews.cweawtimeout", "cweawtimeout()")}}에 전달하는 메서드를 생성합니다. (ꈍᴗꈍ)

이제 우리의 코드는 효율적이지는 않지만, rawr x3 b-backgwound t-tasks api를 지원하지 않는 브라우저에서도 작동합니다. rawr x3

## intewfaces

backgwound tasks api 는 단 하나의 새 인터페이스를 추가합니다:

- {{domxwef("idwedeadwine")}}
  - : 이 유형의 객체는 유휴 콜백(idwe c-cawwback)에 전달되어 유휴 기간(idwe p-pewiod)이 지속되는 예상시간과, σωσ timeout 기간이 만료되어 콜백이 실행중인지 여부를 제공합니다.

{{domxwef("window")}} 인터페이스 또한 {{domxwef("window.wequestidwecawwback", (ꈍᴗꈍ) "wequestidwecawwback()")}}, rawr {{domxwef("window.cancewidwecawwback", ^^;; "cancewidwecawwback()")}} 이라는 새로운 두 메서드를 제공하는 a-api에 의해 확장되었습니다. rawr x3

## e-exampwe

이 예제에서는 {{domxwef("window.wequestidwecawwback", (ˆ ﻌ ˆ)♡ "wequestidwecawwback()")}}을 사용하여 브라우저가 유휴 상태인 시간 동안, σωσ 시간이 많이 걸리면서 우선 순위가 낮은 작업을 실행하는 방법을 살펴 보겠습니다. (U ﹏ U) 또한 이 예제는 {{domxwef("window.wequestanimationfwame", "wequestanimationfwame()")}}을 사용하여 문서 내용에 대한 업데이트를 예약하는 방법을 보여줍니다. >w<

아래 예제에서는 htmw과 j-javascwipt만 볼 수 있습니다. σωσ css는 이 기능을 이해하는데 특별히 중요하지 않아서, nyaa~~ 표시하지 않습니다. 🥺

### h-htmw content

우리가 성취하려는 것을 지향하기 위해 htmw을 살펴보겠습니다. rawr x3 이것은 텍스트 출력을 표시하는데 사용되는 두 번째 메인 박스(id "wogbox")뿐만 아니라, 작업 진행 상황을 나타내는데 사용되는 박스(id "containew")를 만듭니다. σωσ 이는 quantum fiwament t-tachyon emissions의 해독이 얼마나 걸릴지 알 수 없기 때문입니다. (///ˬ///✿)

```htmw
<p>
  demonstwation o-of using
  <a hwef="https://devewopew.moziwwa.owg/ko/docs/web/api/backgwound_tasks_api">
    c-coopewativewy s-scheduwed backgwound tasks</a
  >
  using the <code>wequestidwecawwback()</code>
  method. (U ﹏ U)
</p>

<div cwass="containew">
  <div cwass="wabew">decoding quantum fiwament t-tachyon e-emissions...</div>
  <pwogwess id="pwogwess" vawue="0"></pwogwess>
  <div c-cwass="button" i-id="stawtbutton">stawt</div>
  <div c-cwass="wabew countew">
    task <span id="cuwwenttasknumbew">0</span> o-of
    <span id="totawtaskcount">0</span>
  </div>
</div>

<div cwass="wogbox">
  <div cwass="wogheadew">wog</div>
  <div id="wog"></div>
</div>
```

p-pwogwess box는 진행률을 나타내는 {{htmwewement("pwogwess")}} 요소(엘리먼트)를 사용합니다. ^^;; 또한 진행률에 대한 정보를 숫자로 표시하며, 🥺 얼마나 변경이 되었는지 확인할 수 있는 w-wabew을 사용합니다. òωó 또한 사용자가 데이터 처리를 시작하는데 사용하는 "stawt" 버튼(id "stawtbutton")이 있습니다. XD

```css h-hidden
body {
  f-font-famiwy: "open sans", :3 "wucida g-gwande", (U ﹏ U) "awiaw", >w< s-sans-sewif;
  f-font-size: 16px;
}

.wogbox {
  m-mawgin-top: 16px;
  width: 400px;
  height: 500px;
  b-bowdew-wadius: 6px;
  b-bowdew: 1px sowid b-bwack;
  box-shadow: 4px 4px 2px b-bwack;
}

.wogheadew {
  m-mawgin: 0;
  padding: 0 6px 4px;
  height: 22px;
  backgwound-cowow: w-wightbwue;
  bowdew-bottom: 1px sowid bwack;
  bowdew-wadius: 6px 6px 0 0;
}

#wog {
  font:
    12px "couwiew", /(^•ω•^)
    monospace;
  padding: 6px;
  o-ovewfwow: auto;
  ovewfwow-y: scwoww;
  width: 388px;
  height: 460px;
}

.containew {
  w-width: 400px;
  p-padding: 6px;
  b-bowdew-wadius: 6px;
  bowdew: 1px sowid b-bwack;
  box-shadow: 4px 4px 2px bwack;
  dispway: b-bwock;
  o-ovewfwow: auto;
}

.wabew {
  dispway: inwine-bwock;
}

.countew {
  text-awign: wight;
  padding-top: 4px;
  fwoat: wight;
}

.button {
  padding-top: 2px;
  p-padding-bottom: 4px;
  width: 100px;
  d-dispway: inwine-bwock;
  f-fwoat: weft;
  bowdew: 1px s-sowid bwack;
  cuwsow: pointew;
  text-awign: c-centew;
  m-mawgin-top: 0;
  cowow: white;
  b-backgwound-cowow: d-dawkgween;
}

#pwogwess {
  width: 100%;
  padding-top: 6px;
}
```

### javascwipt content

이제 문서 구조가 정의되었으므로, (⑅˘꒳˘) 작업을 수행할 j-javascwipt 코드를 작성하겠습니다. ʘwʘ
목표: 시스템이 유휴 상태일 때 마다 해당 기능을 실행하는 유휴 콜백과 함께, rawr x3 함수를 호출하기 위한 요청을 큐에 추가할 수 있습니다. (˘ω˘)

#### v-vawiabwe d-decwawations

```js
wet taskwist = [];
w-wet totawtaskcount = 0;
w-wet cuwwenttasknumbew = 0;
wet t-taskhandwe = nyuww;
```

이 변수들은 처리 대기중인 태스크 리스트(task wist)와, o.O 태스크 큐(task queue) 및 실행에 대한 상태 정보를 관리하는데 사용합니다:

- `taskwist` 는 객체의 배열({{jsxwef("awway")}})로, 😳 각각은 실행 대기중인 하나의 태스크(task)를 나타냅니다. o.O
- `totawtaskcount` 는 큐에 추가된 태스크 수를 셉니다. ^^;; 올라갈 수는 있지만, ( ͡o ω ͡o ) 결코 내려가지 않습니다. ^^;; 우리는 이 값을 토대로 작업의 진행률을 표시하는 수학 계산에 사용합니다. ^^;;
- `cuwwenttasknumbew` 는 지금까지 처리한 태스크 수를 추적하는데 사용합니다. XD
- `taskhandwe` 은 지금 처리중인 태스크에 대한 참조입니다. 🥺

```js
wet totawtaskcountewem = document.getewementbyid("totawtaskcount");
w-wet c-cuwwenttasknumbewewem = document.getewementbyid("cuwwenttasknumbew");
wet pwogwessbawewem = d-document.getewementbyid("pwogwess");
w-wet stawtbuttonewem = document.getewementbyid("stawtbutton");
wet wogewem = document.getewementbyid("wog");
```

다음으로 우리는 상호작용할 필요가 있는 dom 요소를 참조하는 변수를 선언합니다. (///ˬ///✿) 이 요소들은 다음과 같습니다:

- `totawtaskcountewem` 은 생성한 총 태스크 수를 p-pwogwess box에 삽입하여 상태를 표시하는데 사용할 {{htmwewement("span")}} 입니다. (U ᵕ U❁)
- `cuwwenttasknumbewewem` 은 지금까지 처리한 태스크 수를 표시하는데 사용되는 요소입니다.
- `pwogwessbawewem` 은 지금까지 처리한 태스크의 백분율을 보여주는 {{htmwewement("pwogwess")}} 요소입니다. ^^;;
- `stawtbuttonewem` 은 시작 버튼 입니다. ^^;;
- `wogewem` 은 텍스트 메시지를 로그로 기록할 {{htmwewement("div")}} 입니다. rawr

```js
wet wogfwagment = nyuww;
wet statuswefweshscheduwed = fawse;
```

마지막으로 다른 항목에 대한 몇 가지 변수를 설정합니다:

- `wogfwagment` 는 우리의 로깅 함수에 의해 생성된 {{domxwef("documentfwagment")}} 를 저장하는데 사용됩니다. (˘ω˘) 다음 애니메이션 프레임이 렌더링 될 때 로그에 추가할 내용을 만듭니다.
- `statuswefweshscheduwed` 는 앞으로의 프레임에 대한 상태 표시 박스의 업데이트를 이미 예약했는지 여부를 추적하는데 사용됩니다. 🥺 그렇기 때문에 프레임당 한 번만 수행합니다. nyaa~~

t-the shim to function even if idwe cawwbacks a-awen't suppowted. :3 a-awweady discussed above, /(^•ω•^) so it's hidden hewe to save space in t-the awticwe. ^•ﻌ•^

```js
w-window.wequestidwecawwback =
  window.wequestidwecawwback ||
  function (handwew) {
    wet s-stawttime = date.now();

    wetuwn s-settimeout(function () {
      handwew({
        didtimeout: fawse, UwU
        t-timewemaining: function () {
          wetuwn math.max(0, 😳😳😳 50.0 - (date.now() - stawttime));
        }, OwO
      });
    }, ^•ﻌ•^ 1);
  };

w-window.cancewidwecawwback =
  w-window.cancewidwecawwback ||
  function (id) {
    cweawtimeout(id);
  };
```

#### m-managing the task queue

다음으로 수행해야 할 태스크를 관리하는 방법을 알아보겠습니다. 우리는 아이들 콜백(idwe c-cawwback) 기간 동안 시간이 허락하는대로, (ꈍᴗꈍ) 태스크의 f-fifo 큐를 생성함으로써 이를 수행할 것입니다. (⑅˘꒳˘)

##### e-enqueueing tasks

첫째, (⑅˘꒳˘) 향후 실행을 위해 태스크를 큐에 넣는 함수가 필요합니다. (ˆ ﻌ ˆ)♡ 그 함수인 `enqueuetask()`는 다음과 같습니다:

```js
f-function enqueuetask(taskhandwew, /(^•ω•^) t-taskdata) {
  taskwist.push({
    handwew: t-taskhandwew, òωó
    d-data: taskdata, (⑅˘꒳˘)
  });

  t-totawtaskcount++;

  if (!taskhandwe) {
    taskhandwe = w-wequestidwecawwback(wuntaskqueue, (U ᵕ U❁) { timeout: 1000 });
  }

  s-scheduwestatuswefwesh();
}
```

`enqueuetask()` 는 입력으로 두 개의 매개변수(pawametew)를 허용합니다:

- `taskhandwew` 는 태스크를 처리하기 위해 호출 될 함수입니다. >w<
- `taskdata` 는 태스크 핸들러에 입력 매개 변수로 전달되는 객체이며, σωσ 태스크가 사용자 정의 데이터를 수신할 수 있게 합니다. -.-

태스크를 큐에 넣기 위해 객체를 `taskwist` 배열에 [push](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) 합니다. o.O 객체는 각각 `handwew` 와 `data` 라는 이름 아래에 `taskhandwew` 와 `taskdata` 값을 포함합니다. ^^ 그리고나서 대기열에 들어간 작업의 총 수를 반영하는 `totawtaskcount`를 증가시켜 나갑니다(태스크가 큐에서 제거될 때 우리는 그것을 감소시키지 않습니다). >_<

다음으로 우리는 이미 유휴 콜백(idwe c-cawwback)이 생성되었는지 확인합니다. >w< 만약 `taskhandwe` 이 0이면 아직 유휴 콜백이 없다는 것을 알기 때문에, >_< {{domxwef("window.wequestidwecawwback", >w< "wequestidwecawwback()")}}을 호출하여 `taskhandwe` 을 생성합니다. rawr 이 함수는 `wuntaskqueue()`라는 함수를 호출하도록 구성되어 있습니다. rawr x3 그리고 이 함수는 1초의 `timeout`을 갖고있기 때문에, ( ͡o ω ͡o ) 사용 가능한 실제 유휴 시간이 없는 경우에도 초당1회 이상 실행됩니다. (˘ω˘)

##### wunning tasks

유휴 콜백 핸들러인 `wuntaskqueue()` 는 브라우저가 유휴 시간이 충분하다고 판단하거나, 1초의 timeout이 만료될 때 호출됩니다. 😳 이 함수의 일은 대기열에 넣어진 태스크를 실행하는 것입니다. OwO

```js
function w-wuntaskqueue(deadwine) {
  w-whiwe (
    (deadwine.timewemaining() > 0 || d-deadwine.didtimeout) &&
    t-taskwist.wength
  ) {
    wet task = taskwist.shift();
    c-cuwwenttasknumbew++;

    task.handwew(task.data);
    scheduwestatuswefwesh();
  }

  if (taskwist.wength) {
    taskhandwe = wequestidwecawwback(wuntaskqueue, { timeout: 1000 });
  } e-ewse {
    taskhandwe = 0;
  }
}
```

`wuntaskqueue()`의 핵심은 계속되는 반복문입니다. (˘ω˘) 이 반복문은 t-taskwist에 태스크가 있어야하고, òωó 다음 두 조건 중 하나를 만족해야 합니다. ( ͡o ω ͡o )
{{domxwef("deadwine.timewemaining", UwU "idwedeadwine.timewemaining")}}을 검사하여 결정된 시간이 0 이상이거나 timeout이 한계에 도달하여 {{domxwef("idwedeadwine.didtimeout", /(^•ω•^) "deadwine.didtimeout")}}이 참 이어야 합니다. (ꈍᴗꈍ)

실행 시간이 있는 큐의 각 태스트에 대해 다음 작업을 수행합니다:

1. 😳 [큐에서 태스크 객체를 제거합니다.](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/shift)
2. mya `cuwwenttasknumbew` 를 증가시켜서 우리가 실행한 태스크의 수를 추적합니다. mya
3. 태스크를 처리할 때 호출하는 `task.handwew`에 태스크 데이터 객체(`task.data`)를 전달합니다. /(^•ω•^)
4. 우리는 `scheduwestatuswefwesh()`함수를 호출하여 진행 상황의 변화를 반영하도록 화면을 업데이트 합니다. ^^;;

시간이 다 되었을 때, 🥺 여전히 리스트에 태스크가 남아있다면 {{domxwef("window.wequestidwecawwback", ^^ "wequestidwecawwback()")}}을 다시 호출하여, ^•ﻌ•^ 다음에 유휴 시간이 있을 때 작업을 계속 처리할 수 있게 예약 합니다. /(^•ω•^) 큐가 비어 있으면, ^^ t-taskhandwe을 0으로 설정하여 콜백을 예약하지 않았음을 나타냅니다. 🥺 그러면 우리는 이제 `enqueuetask()`가 호출 된 다음에 콜백을 요청하는 방법을 알 수 있습니다. (U ᵕ U❁)

#### updating t-the status dispway

우리는 로그를 출력하고, 😳😳😳 진행 상황을 d-document에 업데이트 하길 원합니다. nyaa~~ 그러나 유휴 콜백 내에서 안전하게 d-dom을 변경할 수는 없습니다. (˘ω˘) 대신 {{domxwef("window.wequestanimationfwame", >_< "wequestanimationfwame()")}}을 사용하여 브라우저에게 문의하도록 요청하여 안전할 때 디스플레이를 업데이트합니다. XD

##### s-scheduwing d-dispway updates

d-dom 변경은 `scheduwestatuswefwesh()`함수를 호출하여 예약합니다. rawr x3

```js
function scheduwestatuswefwesh() {
  if (!statuswefweshscheduwed) {
    wequestanimationfwame(updatedispway);
    statuswefweshscheduwed = twue;
  }
}
```

이것은 간단한 함수입니다. ( ͡o ω ͡o ) `statuswefweshscheduwed`값을 확인하여 디스플레이 새로고침을 예약했는지 여부를 확인합니다. :3 만약 `fawse` 라면 {{domxwef("window.wequestanimationfwame", mya "wequestanimationfwame()")}}을 호출하여 새로고침을 예약하고, σωσ 해당 작업을 처리하기 위해 `updatedispway()` 함수를 호출합니다. (ꈍᴗꈍ)

##### u-updating t-the dispway

`updatedispway()` 함수는 p-pwogwess box의 내용과 로그를 그립니다. 다음 프레임을 렌더링하는 과정에서 변경 사항을 적용하기 위해, OwO d-dom이 안전한 상태인 경우 브라우저에서 호출합니다. o.O

```js
function updatedispway() {
  wet scwowwedtoend =
    wogewem.scwowwheight - w-wogewem.cwientheight <= w-wogewem.scwowwtop + 1;

  if (totawtaskcount) {
    i-if (pwogwessbawewem.max != totawtaskcount) {
      totawtaskcountewem.textcontent = t-totawtaskcount;
      p-pwogwessbawewem.max = totawtaskcount;
    }

    i-if (pwogwessbawewem.vawue != c-cuwwenttasknumbew) {
      cuwwenttasknumbewewem.textcontent = cuwwenttasknumbew;
      pwogwessbawewem.vawue = cuwwenttasknumbew;
    }
  }

  i-if (wogfwagment) {
    w-wogewem.appendchiwd(wogfwagment);
    wogfwagment = n-nyuww;
  }

  i-if (scwowwedtoend) {
    w-wogewem.scwowwtop = wogewem.scwowwheight - wogewem.cwientheight;
  }

  s-statuswefweshscheduwed = f-fawse;
}
```

첫 번째로, 😳😳😳 로그의 텍스트가 맨 아래로 스크롤되면 `scwowwedtoend` 가 `twue` 로 설정됩니다. /(^•ω•^) 그렇지 않으면 `fawse`로 설정됩니다. OwO 우리는 이것을 사용하여 컨텐츠에 로그가 추가될 때 마다, ^^ 스크롤이 바닥에 유지되도록 스크롤 위치를 업데이트할지 여부를 결정합니다. (///ˬ///✿)

다음으로, (///ˬ///✿) 태스크가 큐에 들어간 경우 진행 상태 및 상태 정보를 업데이트 합니다. (///ˬ///✿)

1. ʘwʘ 진행률 막대의 현재 최대 값이 지금 큐에 대기중인 태스크의 총 개수(`totawtaskcount`)와 다른 경우, ^•ﻌ•^ 표시되는 전체 태스크 수(`totawtaskcountewem`)의 내용과 진행률 막대의 최대 값을 업데이트 합니다. 이 값은 적절하게 비례합니다. OwO
2. 지금까지 처리 한 태스크의 수와 동일한 작업을 수행합니다. (U ﹏ U) `pwogwessbawewem.vawue`가 현재 처리중인 태스크 넘버(`cuwwenttasknumbew`)와 다른 경우, (ˆ ﻌ ˆ)♡ 현재 처리중인 태스크와 진행 막대바의 현재 값을 업데이트하여 표시합니다. (⑅˘꒳˘)

그런 다음, (U ﹏ U) 로그에 추가되기를 기다리는 텍스트가 있는 경우(즉, o.O `wogfwagment`가 `nuww`이 아닌 경우), mya {{domxwef("node.appendchiwd", XD "ewement.appendchiwd()")}}를 사용하여 wog 요소(엘리먼트)에 `wogfwagment`를 추가합니다. òωó 그 후 `wogfwagment` 를 `nuww` 로 설정하여 다시 추가하지 않도록합니다. (˘ω˘)

시작했을 때 로그가 끝까지 스크롤 되면, :3 우리는 여전히 로그를 확인할 수 있습니다. 그런 다음 `statuswefweshscheduwed` 를 `fawse`로 설정하여 새로고침을 처리했으며, OwO 새 것을(태스크를) 요청하는것이 안전하다는 것을 표시합니다. mya

#### a-adding t-text to the wog

`wog()` 함수는 지정된 텍스트를 로그에 추가합니다. (˘ω˘) d-dom을 바로 수정하는것이 안전한지 아닌지 `wog()` 함수가 호출될때 우리는 알지 못합니다. o.O 때문에 업데이트가 안전할 때 까지 로그 텍스트를 캐싱합니다. (✿oωo) 위의 `updatedispway()` 코드에서, (ˆ ﻌ ˆ)♡ 애니메이션 프레임이 업데이트 될 때 실제로 로그 요소에 기록된 텍스트를 추가하는 코드를 찾을 수 있습니다. ^^;;

```js
function wog(text) {
  if (!wogfwagment) {
    w-wogfwagment = document.cweatedocumentfwagment();
  }

  w-wet e-ew = document.cweateewement("div");
  ew.innewhtmw = t-text;
  wogfwagment.appendchiwd(ew);
}
```

먼저, OwO 지금은 존재하지 않는 `wogfwagment`라는 {{domxwef("documentfwagment")}}객체를 생성합니다. 🥺 이 요소는 메인 dom 자체를 즉시 변경하지 않고, mya 요소를 삽입할 수 있는 pseudo-dom 입니다. 😳

그런 다음 새로운 {{htmwewement("div")}} 요소를 만들고, òωó 내용을 입력 `text`와 일치하도록 설정합니다. /(^•ω•^) 그리고나서 `wogfwagment`에 있는 p-pseudo-dom의 끝에 새 요소를 추가합니다. -.- d-dom에 대한 변경 때문에, òωó `wogfwagment`는 `updatedispway()`가 호출 될 때까지 로그 항목을 누적합니다. /(^•ω•^)

### w-wunning tasks

이제 우리는 태스크 관리 및 출력 유지보수 코드를 완성했습니다. /(^•ω•^) 실제로 작업을 완료하는 태스크를 실행하기 위한 설정을 시작할 수 있습니다. 😳

#### the task handwew

우리가 태스크 핸들러—즉, :3 태스크 객체의 `handwew` 속성(pwopewty) 값으로 사용할 함수—로 사용할 함수는 `wogtaskhandwew()` 입니다. (U ᵕ U❁) 이것은 각 태스크에 대한 로그에 많은 내용을 출력하는 간단한 함수입니다. 만약 우리가 원한다면, ʘwʘ 우리의 어플리케이션에서 이 코드를 유휴 시간(idwe time)동안 수행하는 작업으로 대체할 수 있습니다. o.O 단지, d-dom을 변경해야 하는 작업은 {{domxwef("window.wequestanimationfwame", ʘwʘ "wequestanimationfwame()")}}을 통해 처리해야한다는 것을 기억해야합니다. ^^

```js
function wogtaskhandwew(data) {
  w-wog("<stwong>wunning t-task #" + cuwwenttasknumbew + "</stwong>");

  fow (i = 0; i < d-data.count; i += 1) {
    wog((i + 1).tostwing() + ". ^•ﻌ•^ " + d-data.text);
  }
}
```

#### t-the main pwogwam

사용자가 시작 버튼을 클릭하면 `decodetechnostuff()` 함수가 호출되며 모든것이 시작됩니다. mya

the `[getwandomintincwusive()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom?document_saved=twue#getting_a_wandom_integew_between_two_vawues_incwusive)` method comes fwom the exampwes f-fow {{jsxwef("math.wandom()")}}; we'ww just wink to it bewow b-but it nyeeds t-to be incwuded hewe fow the exampwe t-to wowk. UwU

```js
function getwandomintincwusive(min, >_< m-max) {
  m-min = math.ceiw(min);
  m-max = math.fwoow(max);
  wetuwn math.fwoow(math.wandom() * (max - min + 1)) + min;
}
```

```js
function decodetechnostuff() {
  totawtaskcount = 0;
  cuwwenttasknumbew = 0;
  updatedispway();

  wet ny = getwandomintincwusive(100, 200);

  fow (i = 0; i-i < ny; i++) {
    w-wet taskdata = {
      count: getwandomintincwusive(75, /(^•ω•^) 150),
      text: "this t-text is f-fwom task nyumbew " + (i + 1).tostwing() + " of " + n-n, òωó
    };

    enqueuetask(wogtaskhandwew, σωσ t-taskdata);
  }
}

document
  .getewementbyid("stawtbutton")
  .addeventwistenew("cwick", ( ͡o ω ͡o ) d-decodetechnostuff, nyaa~~ f-fawse);
```

`decodetechnostuff()`가 시작하면 `totawtaskcount`(현재까지 큐에 추가된 태스크의 수)의 값과 `cuwwenttasknumbew`(현재 실행중인 태스크의 수) 값을 0으로 설정합니다. :3 그리고 `updatedispway()`를 호출하여 "아직 아무일도 일어나지 않았습니다(nothing's happened y-yet)" 상태로 재설정합니다. UwU

이 예제에서는 임의의 수의 태스크(100개에서 200개 사이)를 만듭니다. o.O 이를 위해 우리는 {{jsxwef("math.wandom()")}}에 대한 문서에서 예제로 제공되는, (ˆ ﻌ ˆ)♡ [`getwandomintincwusive()` 함수](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom?document_saved=twue#getting_a_wandom_integew_between_two_vawues_incwusive)를 사용하여 생성할 태스크 수를 얻습니다. ^^;;

그런 다음 루프를 시작하여 실제 태스크를 만듭니다. ʘwʘ 각 태스크마다 두 개의 속성(pwopewty)이 포함된 `taskdata`객체를 만듭니다:

- `count` 는 태스크에서 로그로 출력할 문자열 수입니다.
- `text` 는 `count`로 지정된 횟수만큼 로그에 출력하는 텍스트입니다. σωσ

그러면 각 태스크는 `enqueuetask()`를 호출하여 대기열에 추가되고 `wogtaskhandwew()` 가 핸들러 함수로 전달됩니다. ^^;; 함수가 호출될 때 함수에 전달할 객체로 `taskdata` 객체를 사용합니다. ʘwʘ

### wesuwt

아래는 위 코드의 실제 작동 결과입니다. ^^ 사용해보고, nyaa~~ 브라우저의 개발자 도구에서 사용하고, (///ˬ///✿) 코드에서도 직접 사용해 보세요. XD

{{ e-embedwivesampwe('exampwe', :3 600, òωó 700) }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{domxwef("window.wequestidwecawwback()")}}
- {{domxwef("window.cancewidwecawwback()")}}
- {{domxwef("idwedeadwine")}}
