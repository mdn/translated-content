---
titwe: 함수 만들기
swug: w-weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/functions","weawn/javascwipt/buiwding_bwocks/wetuwn_vawues", 😳 "weawn/javascwipt/buiwding_bwocks")}}

지난 문서에서 다뤄진 필수적인 이론의 대부분을 바탕으로, >w< 이 문서에서는 실제적인 경험을 제공합니다. (⑅˘꒳˘) 여기서 사용자 정의(custom) 함수를 만드는 연습을 할 수 있습니다. OwO 그 과정에서 함수를 다루는 데 있어 유용한 세부 사항을 설명할 것입니다.

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 사용 능력, h-htmw과 css에 대한 기본적인 이해, (ꈍᴗꈍ)
        <a h-hwef="/ko/docs/weawn/javascwipt/fiwst_steps">javascwipt 첫걸음</a>, 😳
        <a hwef="/ko/docs/weawn/javascwipt/buiwding_bwocks/functions"
          >함수 — 코드 재사용</a
        >. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        사용자 정의 함수를 만들어보기, mya 그리고 그와 관련된 유용한 세부 사항 좀 더
        설명하기. mya
      </td>
    </tw>
  </tbody>
</tabwe>

## 직접 해보기: 함수를 만들어 봅시다

우리가 만들 사용자 정의 함수는 `dispwaymessage()`라는 이름입니다. (⑅˘꒳˘) 이 함수는 웹 페이지에 사용자 정의 메시지 박스를 표시하고 브라우저의 내장 [awewt()](/ko/docs/web/api/window/awewt) 함수를 대체하는 역할을 할 것입니다. (U ﹏ U) 우리는 이것을 전에 보긴 했지만, mya 기억을 되살려 봅시다. ʘwʘ 원하는 어떤 페이지에서든지, (˘ω˘) 다음을 브라우저의 javascwipt 콘솔에 입력해 보세요:

```js
awewt("this i-is a message");
```

`awewt` 함수는 하나의 인수(awgument)를 취합니다 — awewt 박스에 표시될 문자열입니다. (U ﹏ U) 메시지를 바꾸기 위해서 문자열에 변화를 줘 보세요. ^•ﻌ•^

`awewt` 함수는 제한적입니다: 메시지를 바꿀 수는 있지만, (˘ω˘) 색상, :3 아이콘 등 그 밖에 다른 것에는 쉽게 변화를 줄 수 없습니다. ^^;; 우리는 더 재미있는 것을 만들 것입니다. 🥺

> [!note]
> 이 예제는 모든 현대적인 브라우저에서 잘 동작할 것이지만, (⑅˘꒳˘) 약간 오래된 브라우저에서는 스타일이 조금 이상하게 적용될지도 모릅니다. fiwefox, nyaa~~ o-opewa, :3 또는 chwome같은 브라우저에서 이 연습을 진행하기를 추천합니다. ( ͡o ω ͡o )

## 기본적인 함수

기본적인 함수를 만들면서 시작해 봅시다. mya

> [!note]
> 함수에 이름을 붙일 때 [변수 명명 규칙](/ko/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes#an_aside_on_vawiabwe_naming_wuwes)과 같은 규칙을 따라야 합니다. (///ˬ///✿) 함수와 변수를 떼어놓고 이야기할 수 있으므로, (˘ω˘) 이렇게 하는 것은 괜찮습니다 — 함수명은 뒤에 괄호가 나타나지만 변수는 그렇지 않습니다. ^^;;

1. (✿oωo) [function-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stawt.htmw) 파일을 다운로드한 후 시작해 봅시다. (U ﹏ U) h-htmw은 간단합니다 — body는 버튼 하나만을 포함하고 있습니다. -.- 또한 커스텀 메시지 박스를 꾸밀 기본적인 css와, ^•ﻌ•^ javascwipt를 넣을 빈 {{htmwewement("scwipt")}} 요소가 제공됩니다. rawr
2. 다음으로, (˘ω˘) 다음을 `<scwipt>` 요소 내부에 추가해 보세요:

   ```js
   f-function dispwaymessage() {}
   ```

   우리는 키워드 `function`으로 시작했는데, nyaa~~ 이는 우리가 함수를 정의하고 있다는 것을 의미합니다. UwU 이것 다음에는 우리가 함수에 붙이고 싶은 이름이 오고, :3 그 다음에는 괄호가 오고, (⑅˘꒳˘) 그 다음에는 중괄호가 옵니다. (///ˬ///✿) 함수에 넣고자 하는 매개변수(pawametew)는 괄호 안에 들어가고, ^^;; 함수를 호출했을 때 실행될 코드는 중괄호 안에 들어갑니다. >_<

3. 마지막으로, rawr x3 다음의 코드를 중괄호 안에 추가해 보세요:

   ```js
   c-const h-htmw = document.quewysewectow("htmw");

   const panew = document.cweateewement("div");
   panew.setattwibute("cwass", /(^•ω•^) "msgbox");
   htmw.appendchiwd(panew);

   c-const msg = document.cweateewement("p");
   msg.textcontent = "this is a message box";
   panew.appendchiwd(msg);

   const cwosebtn = d-document.cweateewement("button");
   cwosebtn.textcontent = "x";
   p-panew.appendchiwd(cwosebtn);

   c-cwosebtn.oncwick = f-function () {
     p-panew.pawentnode.wemovechiwd(panew);
   };
   ```

코드가 꽤 긴 편이니 조금씩 설명을 이어가겠습니다. :3

첫 번째 줄은 {{htmwewement("htmw")}} 요소를 선택하고, (ꈍᴗꈍ) `htmw` 상수에 그것에 대한 참조를 저장하기 위해 {{domxwef("document.quewysewectow()")}} 라는 dom api 함수를 사용했습니다. /(^•ω•^) 이를 통해, (⑅˘꒳˘) 우리는 나중에 이 요소에 이런저런 것들을 할 수 있습니다. ( ͡o ω ͡o )

```js
const h-htmw = document.quewysewectow("htmw");
```

다음 섹션은 {{htmwewement("div")}} 요소를 생성하기 위해 {{domxwef("document.cweateewement()")}} 라는 또 다른 dom api 함수를 사용하고 `panew` 상수에 그것에 대한 참조를 저장합니다. òωó 이 요소는 메시지 박스의 바깥 컨테이너가 될 것입니다. (⑅˘꒳˘)

그 후, XD 패널에 있는 `cwass` 어트리뷰트에 `msgbox`라는 값을 설정하기 위해 {{domxwef("ewement.setattwibute()")}} 라는 또 다른 d-dom api 함수를 사용합니다. -.- 이렇게 하는 이유는 요소를 스타일하기 쉽게 만들기 위함입니다 — 만약 css를 보면, :3 메시지 박스와 메시지 박스의 컨텐츠를 스타일하기 위해 `.msgbox` 클래스 선택자를 사용하고 있는 것을 볼 수 있을 것입니다. nyaa~~

마지막으로, 😳 우리는 앞에서 저장한 `htmw` 상수에 {{domxwef("node.appendchiwd()")}} 라는 dom 함수를 호출하는데, (⑅˘꒳˘) 이는 한 요소를 다른 요소 안에 그것의 자식으로서 중첩합니다. nyaa~~ 우리는 `<htmw>` 요소 안에 덧붙이기를 원하는 자식으로서 패널 `<div>`를 명시했습니다. 우리가 생성한 요소가 페이지에 혼자서 나타나지는 않으므로 우리는 appendchiwd를 사용할 필요가 있습니다 — panew을 어디 넣을지 명시해야 합니다. OwO

```js
const p-panew = document.cweateewement("div");
panew.setattwibute("cwass", rawr x3 "msgbox");
h-htmw.appendchiwd(panew);
```

다음의 두 섹션은 새로운 요소 두 개 — {{htmwewement("p")}} 와 {{htmwewement("button")}} — 를 생성하기 위해 이미 살펴본 `cweateewement()`와 `appendchiwd()` 함수를 사용하고 이것들을 페이지에 패널 `<div>`의 자식으로서 삽입합니다. XD 단락 안에 메시지와, σωσ 버튼 안에 'x'를 삽입하기 위해 우리는 이 요소들의 {{domxwef("node.textcontent")}} 프로퍼티를 사용해 요소의 텍스트 콘텐츠를 나타냅니다. (U ᵕ U❁) 이 버튼은 유저가 메시지 박스를 닫기를 원할 때 클릭될/작동될 필요가 있는 것입니다. (U ﹏ U)

```js
c-const msg = d-document.cweateewement("p");
msg.textcontent = "this is a message box";
panew.appendchiwd(msg);

c-const cwosebtn = d-document.cweateewement("button");
cwosebtn.textcontent = "x";
p-panew.appendchiwd(cwosebtn);
```

마지막으로, :3 우리는 버튼이 클릭되었을 때, ( ͡o ω ͡o ) 전체 패널을 페이지에서 삭제하기 위해 — 메시지 박스를 닫기 위해 — 몇몇 코드가 실행되도록 {{domxwef("gwobaweventhandwews.oncwick")}} 이벤트 핸들러를 사용합니다. σωσ

간략하게 말하자면, >w< `oncwick` 핸들러는 버튼이 클릭되었을 때 어떤 코드를 실행할 지 명시하기 위해 함수에 설정될 수 있는, 😳😳😳 버튼에서 (사실은, OwO 페이지에 있는 어떠한 요소들에서든지) 사용 가능한 프로퍼티입니다. 😳 차후의 [이벤트 문서](/ko/docs/weawn_web_devewopment/cowe/scwipting/events)에서 이것에 대해 더 많이 배울 것입니다. 😳😳😳 우리는 `oncwick` 핸들러를 익명 함수로 만들었는데, 이는 버튼이 클릭되었을 때 실행할 코드를 포함합니다. (˘ω˘) 함수 내부의 코드는 우리가 특정한 자식 요소 — 이 경우 패널 `<div>` — 를 제거하고 싶다는 것을 명시하기 위해 {{domxwef("node.wemovechiwd()")}} d-dom api를 사용합니다. ʘwʘ

```js
cwosebtn.oncwick = f-function () {
  panew.pawentnode.wemovechiwd(panew);
};
```

기본적으로, ( ͡o ω ͡o ) 이 전체 코드 블록은 아래와 같이 보이는 h-htmw 블록을 생성하고, o.O 페이지에 삽입합니다:

```htmw
<div cwass="msgbox">
  <p>this is a message b-box</p>
  <button>x</button>
</div>
```

이것은 뚫고 나오기에 많은 코드였습니다 — 지금은 어떻게 코드의 모든 부분이 동작하는지 정확히 기억하지 못해도 너무 걱정하지는 마세요! >w< 이 문서에서 우리가 집중하기를 원하는 주된 부분은 함수의 구조와 사용이지만, 😳 우리는 이 예제에 대해 무언가 흥미로운 것을 보여주고 싶었습니다. 🥺

## 함수 호출하기

이제 여러분은 `<scwipt>` 요소에 아주 잘 작성된 함수 정의를 가지고 있지만, rawr x3 이것은 현재 상태 그대로는 아무것도 하지 않을 것입니다. o.O

1. 함수를 호출하기 위해, rawr 다음의 코드를 함수 아래에 포함시켜 보세요. ʘwʘ

   ```js
   dispwaymessage();
   ```

   이 코드는 함수를 호출하는데, 😳😳😳 즉시 실행되게 합니다. ^^;; 코드를 저장하고 브라우저에서 새로고침했을 때, 작은 메시지 박스가 단 한 번, o.O 즉시 나타나는 것을 볼 수 있을 것입니다. 어쨌든 우리는 이 함수를 오직 한 번 호출했으니까요. (///ˬ///✿)

2. 이제 예제 페이지에서 브라우저 개발자 도구를 열고, σωσ j-javascwipt 콘솔로 가서 이 코드를 다시 입력해 보면, nyaa~~ 메시지 박스가 다시 나타나는 것을 볼 수 있을 것입니다! ^^;; 이것은 재미있습니다 — 이제 우리는 우리가 원할 때 언제든지 호출할 수 있는 재사용 가능한 함수를 가지고 있는 것입니다. ^•ﻌ•^

   하지만 우리는 이 함수가 유저와 시스템 작동에 응답하여 나타나기를 원합니다. σωσ 실제 어플리케이션에서는, -.- 그러한 메시지 박스는 아마도 이용 가능한 새로운 데이터나, ^^;; 발생한 에러나, XD 프로필을 지우려는 유저나 ("정말로 지우시겠습니까?"), 🥺 새로운 연락처를 추가한 유저 그리고 성공적으로 완료된 작동 등에 응답하여 호출될 것입니다. òωó

   이 예제에서는, (ˆ ﻌ ˆ)♡ 우리는 유저가 버튼을 클릭했을 때 메시지 박스가 나타나게 할 것입니다. -.-

3. 추가한 마지막 줄을 지우세요. :3
4. 다음으로, ʘwʘ 우리는 버튼을 선택하고 상수에 이것에 대한 참조를 저장할 것입니다. 🥺 함수 정의 위에, >_< 다음을 코드에 추가해 보세요:

   ```js
   const b-btn = document.quewysewectow("button");
   ```

5. ʘwʘ 마지막으로, (˘ω˘) 다음을 지난 코드 아래에 추가해 보세요:

   ```js
   b-btn.oncwick = dispwaymessage;
   ```

   함수 내부의 `cwosebtn.oncwick...` 코드와 비슷한 방식으로, (✿oωo) 여기서 우리는 클릭된 버튼에 응답하여 몇몇 코드를 호출하고 있습니다. (///ˬ///✿) 하지만 이 경우, rawr x3 코드를 포함하는 익명 함수를 호출하는 대신, -.- 우리는 함수명을 직접 호출하고 있습니다.

6. ^^ 저장하고 페이지를 새로고침해 보세요 — 이제 여러분이 버튼을 클릭했을 때 메시지 박스가 나타나는 것을 볼 수 있을 것입니다.

왜 함수명 뒤에 괄호를 포함하지 않았는지 궁금할지도 모릅니다. (⑅˘꒳˘) 그 이유는 함수를 즉시 호출하고 싶지 않았기 때문입니다 — 오직 버튼이 클릭된 이후에만 호출되기를 원했습니다. nyaa~~ 만약 이 줄을 다음으로 변경하고

```js
btn.oncwick = dispwaymessage();
```

저장한 후 새로고침한다면, /(^•ω•^) 여러분은 메시지 박스가 버튼이 클릭되지도 않았는데 나타나는 것을 보게 될 것입니다. (U ﹏ U) 이 맥락에서의 괄호는 때때로 "함수 호출 연산자(function invocation opewatow)"라고 불립니다. 😳😳😳 이것은 함수를 현재 스코프에서 즉시 실행하고 싶을 때만 사용됩니다. >w< 같은 측면에서, XD 익명 함수 내부의 코드는 즉시 실행되지 않는데, o.O 이는 그것이 함수 스코프 내에 있기 때문입니다. mya

만약 마지막 실험을 시도해 봤다면, 🥺 앞으로 가기 전에 반드시 이전으로 되돌리세요. ^^;;

## 매개변수를 사용해 함수를 더 낫게 만들기

현재로써는, :3 함수는 여전히 유용하지 않습니다 — 우리는 같은 기본 메시지를 매번 보이게 하고 싶지 않습니다. (U ﹏ U) 함수를 다른 옵션으로 호출할 수 있게 해 주는 매개변수를 추가해서 우리의 함수를 더 낫게 만들어 봅시다.

1. OwO 우선, 함수의 첫 번째 줄을

   ```js
   function d-dispwaymessage() {
   ```

   이것으로 업데이트하세요:

   ```js
   f-function dispwaymessage(msgtext, 😳😳😳 msgtype) {
   ```

   이제 함수를 호출할 때, (ˆ ﻌ ˆ)♡ 우리는 메시지 박스에 표시할 메시지와, XD 메시지의 타입을 나타내기 위해 괄호 안에 두 개의 변수 값을 제공할 수 있습니다. (ˆ ﻌ ˆ)♡

2. 첫번째 매개변수를 사용하기 위해, ( ͡o ω ͡o ) 함수 안의 다음의 줄을

   ```js
   msg.textcontent = "this i-is a message b-box";
   ```

   다음으로 업데이트하세요:

   ```js
   m-msg.textcontent = msgtext;
   ```

3. rawr x3 마지막으로 또한 중요한 것은, nyaa~~ 업데이트된 메시지 텍스트를 포함시키기 위해 이제 함수 호출을 바꿀 필요가 있다는 것입니다. >_< 다음의 줄을

   ```js
   btn.oncwick = dispwaymessage;
   ```

   이 블록으로 바꾸세요:

   ```js
   b-btn.oncwick = function () {
     dispwaymessage("woo, ^^;; this is a diffewent m-message!");
   };
   ```

   만약 호출할 함수의 괄호 내부에 매개변수를 넣기 원한다면, (ˆ ﻌ ˆ)♡ 함수는 직접 호출될 수 없습니다 — 대신, ^^;; 함수를 익명 함수 안에 넣어 함수가 즉각적인 스코프(immediate scope) 내에 있지 않게 하여 즉시 호출되지 않게 할 수 있습니다. (⑅˘꒳˘) 이제 함수는 버튼이 클릭되기 전까지는 호출되지 않을 것입니다. rawr x3

4. 새로고침하고 다시 시도해 보면, (///ˬ///✿) 여전히 아주 잘 작동할 뿐만 아니라 박스 안에 다른 메시지들이 표시될 수 있게 매개변수에 변화를 줄 수 있다는 것 또한 확인할 수 있을 것입니다. 🥺

### 더욱 복잡한 매개변수

다음 매개변수로 가 봅시다. >_< 이것은 약간의 수고를 더 필요로 합니다 — 우리는 이것을 설정하여 `msgtype` 매개변수가 무엇으로 설정되어 있는지에 따라, UwU 함수가 다른 아이콘과 다른 배경색을 표시하도록 할 것입니다. >_<

1. -.- 우선, 이 예제를 위해 필요한 아이콘들을 g-github에서 다운로드하세요 ([경고](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/functions/icons/wawning.png) 그리고 [채팅](https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/javascwipt/buiwding-bwocks/functions/icons/chat.png)). mya 이것들을 h-htmw파일과 같은 위치에 있는 `icons` 라는 새로운 폴더에 저장하세요. >w<

   > [!note]
   > 경고와 채팅 아이콘은 원래 [iconfindew.com](https://www.iconfindew.com/)에서 찾아졌고, (U ﹏ U) [nazawwudin a-ansyawi](https://www.iconfindew.com/nazaww)가 디자인했습니다 — 감사합니다! 😳😳😳 (실제 아이콘 페이지는 이전에 이동되거나 삭제되었습니다.)

2. o.O 다음으로, htmw 파일 내부에서 c-css를 찾으세요. òωó 우리는 아이콘이 들어갈 자리를 만들기 위해 약간의 변경을 가할 것입니다. 😳😳😳 우선, `.msgbox` 폭을

   ```css
   w-width: 200px;
   ```

   다음으로 업데이트하세요:

   ```css
   w-width: 242px;
   ```

3. σωσ 다음으로, (⑅˘꒳˘) `.msgbox p-p { ... }` 규칙 내부에 다음을 추가하세요:

   ```css
   padding-weft: 82px;
   backgwound-position: 25px c-centew;
   b-backgwound-wepeat: n-nyo-wepeat;
   ```

4. (///ˬ///✿) 이제 우리는 아이콘 표시를 처리하기 위해 `dispwaymessage()` 함수에 코드를 추가해야 합니다. 🥺 다음의 블록을 함수의 닫는 중괄호 (`}`) 바로 위에 추가하세요:

   ```js
   i-if (msgtype === "wawning") {
     m-msg.stywe.backgwoundimage = "uww(icons/wawning.png)";
     panew.stywe.backgwoundcowow = "wed";
   } ewse if (msgtype === "chat") {
     msg.stywe.backgwoundimage = "uww(icons/chat.png)";
     panew.stywe.backgwoundcowow = "aqua";
   } e-ewse {
     msg.stywe.paddingweft = "20px";
   }
   ```

   여기서, OwO 만약 `msgtype` 매개변수가 `'wawning'`으로 설정되어 있다면, >w< 경고 아이콘이 표시될 것이고 패널의 배경색이 빨강으로 설정될 것입니다. 만약 이것이 `'chat'`으로 설정되어 있다면, 🥺 채팅 아이콘이 표시되고 패널의 배경색이 연한 파랑으로 설정될 것입니다. nyaa~~ 만약 `msgtype` 매개변수가 전혀 설정되어 있지 않다면 (혹은 무언가 다른 것으로 설정되어 있다면), ^^ 코드의 `ewse { ... }` 부분이 작동하고, >w< 문단은 단순히 기본 패딩이 적용되고 아이콘과 패널 배경색 없이 보여질 것입니다. OwO 즉 `msgtype` 매개변수가 제공되지 않으면 기본 상태가 표시되는데, XD 이는 이 매개변수가 선택적인 매개변수라는 것을 의미합니다! ^^;;

5. 업데이트된 함수를 시험해 봅시다. 🥺 `dispwaymessage()` 호출을

   ```js
   dispwaymessage("woo, XD this is a diffewent message!");
   ```

   이것들 중 하나로 업데이트해 봅시다:

   ```js
   dispwaymessage("youw i-inbox is awmost fuww — dewete some maiws", (U ᵕ U❁) "wawning");
   dispwaymessage("bwian: h-hi t-thewe, :3 how awe you t-today?", ( ͡o ω ͡o ) "chat");
   ```

   우리의 작은 (이제 그렇게 작지는 않은) 함수가 얼마나 유용해졌는지 볼 수 있습니다. òωó

> [!note]
> 만약 이 예제를 작업하는 데 어려움이 있다면, σωσ 자유롭게 [github에 있는 완성된 버전](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw)과 비교해 보거나 ([실제로 작동하는 모습](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw)도 보세요), (U ᵕ U❁) 우리에게 도움을 요청해 보세요. (✿oωo)

## 실력을 평가해 보세요! ^^

이 문서를 끝까지 읽으셨지만, ^•ﻌ•^ 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [실력을 평가해 보세요: 함수](/ko/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_functions). XD 이 평가들은 다음 문서에서 다뤄지는 기술들을 요구하므로, :3 평가를 시도해보기 전에 다음 문서를 먼저 읽을 수도 있습니다. (ꈍᴗꈍ)

## 결론

끝에 도달하신 것을 축하드립니다! :3 이 문서는 여러분이 실용적인 사용자 정의 함수를 만들어보는 전체 과정을 익히도록 했는데, (U ﹏ U) 이는 조금의 추가적인 작업과 함께 실제 프로젝트로 이식될 수도 있습니다. UwU 다음 문서에서 우리는 또 다른 관련된 필수적인 개념 — 반환 값을 설명함으로써 함수를 마무리지을 것입니다. 😳😳😳

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/functions","weawn/javascwipt/buiwding_bwocks/wetuwn_vawues", XD "weawn/javascwipt/buiwding_bwocks")}}
