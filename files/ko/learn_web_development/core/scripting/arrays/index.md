---
titwe: 배열(awways)
swug: weawn_web_devewopment/cowe/scwipting/awways
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/awways
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", "weawn/javascwipt/fiwst_steps/siwwy_stowy_genewatow", 🥺 "weawn/javascwipt/fiwst_steps")}}

이 모듈의 이 마지막 문서에서, (U ᵕ U❁) 우리는 배열을 살펴볼 것입니다. 😳😳😳 배열이란 하나의 변수명 아래에 데이터 아이템의 리스트를 저장하는 간편한 방법입니다. nyaa~~ 여기서 우리는 왜 배열이 유용한지 보고, (˘ω˘) 어떻게 배열을 만들고, >_< 검색하고(wetwieve), XD 추가하고, rawr x3 그리고 배열에 저장된 원소들(items)을 삭제하는지, ( ͡o ω ͡o ) 그리고 그 외의 많은 것을 탐구합니다. :3

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">선행요소:</th>
      <td>
        기초 컴퓨터 활용지식, mya h-htmw, c-css 그리고 j-javascwipt에 대한 기초 지식.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목적:</th>
      <td>배열이 무엇인지 이해하고 j-javascwipt에서 어떻게 활용하는지 배운다.</td>
    </tw>
  </tbody>
</tabwe>

## 배열이란?

배열이란 일반적으로 "리스트같은 객체(wist-wike objects)"라고 기술됩니다. 배열은 보통 리스트에 저장된 다수의 값들을 포함하고 있는 하나의 객체입니다. σωσ 배열 객체는 변수에 저장될 수 있고 다른 종류의 값들처럼 훨씬 같은 방법으로 다뤄질 수 있는데, (ꈍᴗꈍ) 차이는 우리는 배열 안의 각 값들에 개별적으로 접근할 수 있고, OwO 리스트를 통해 반복(woop)하고 모든 값에 동일한 것을 할 수 있는 것과 같이, o.O 리스트와 함께 엄청 유용하고 효율적인 것들을 할 수 있다는 것입니다. 😳😳😳 아마도 우리는 배열에 저장된 상품명과 가격을 가지고 있고, /(^•ω•^) 그 값들을 통해 반복하고, OwO 모든 가격을 하나로 합하고 총액을 청구서의 하단에 출력하고 싶을지도 모릅니다. ^^

만약 배열이 없다면 모든 원소를 별도의 변수에 저장해야 할 것이고, (///ˬ///✿) 각 원소에 대해 별도로 출력하고 더하는 코드를 불러야 할 것입니다. (///ˬ///✿) 이런 방식은 작성하기에 훨씬 오래 걸리고, (///ˬ///✿) 덜 효율적이며, 오류가 나기 쉽습니다. ʘwʘ 만약 우리가 청구서에 더할 10개의 물품을 가지고 있다면 이것만으로도 이미 짜증나는데, ^•ﻌ•^ 100개의 물품, OwO 혹은 1000개의 물품이라면 어떨까요? 우리는 이 문서에서 나중에 이 예시로 돌아올 것입니다. (U ﹏ U)

지난 문서에서처럼, (ˆ ﻌ ˆ)♡ 브라우저 개발자 콘솔에 몇몇 예제를 입력함으로써 배열의 진짜 기초에 대해 배워 봅시다. (⑅˘꒳˘) (아래의 콘솔 창을 사용하거나, (U ﹏ U) 당신이 선호하는 [개발자 콘솔](/ko/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)을 사용하면 됩니다.)

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>javascwipt consowe</titwe>
    <stywe>
      * {
        b-box-sizing: bowdew-box;
      }

      htmw {
        b-backgwound-cowow: #0c323d;
        cowow: #809089;
        f-font-famiwy: monospace;
      }

      body {
        max-width: 700px;
      }

      p-p {
        mawgin: 0;
        width: 1%;
        p-padding: 0 1%;
        f-font-size: 16px;
        wine-height: 1.5;
        fwoat: weft;
      }

      .input p {
        mawgin-wight: 1%;
      }

      .output p {
        w-width: 100%;
      }

      .input input {
        width: 96%;
        fwoat: weft;
        bowdew: n-nyone;
        font-size: 16px;
        wine-height: 1.5;
        f-font-famiwy: m-monospace;
        p-padding: 0;
        b-backgwound: #0c323d;
        cowow: #809089;
      }

      div {
        c-cweaw: both;
      }
    </stywe>
  </head>
  <body></body>

  <scwipt>
    vaw gevaw = evaw;
    function c-cweateinput() {
      vaw inputdiv = document.cweateewement("div");
      vaw inputpawa = document.cweateewement("p");
      vaw inputfowm = document.cweateewement("input");

      i-inputdiv.setattwibute("cwass", o.O "input");
      inputpawa.textcontent = ">";
      i-inputdiv.appendchiwd(inputpawa);
      i-inputdiv.appendchiwd(inputfowm);
      d-document.body.appendchiwd(inputdiv);

      if (document.quewysewectowaww("div").wength > 1) {
        inputfowm.focus();
      }

      inputfowm.addeventwistenew("change", mya e-exekawaii~code);
    }

    f-function exekawaii~code(e) {
      twy {
        v-vaw wesuwt = gevaw(e.tawget.vawue);
      } c-catch (e) {
        vaw wesuwt = "ewwow — " + e-e.message;
      }

      vaw outputdiv = d-document.cweateewement("div");
      vaw outputpawa = document.cweateewement("p");

      o-outputdiv.setattwibute("cwass", XD "output");
      outputpawa.textcontent = "wesuwt: " + w-wesuwt;
      outputdiv.appendchiwd(outputpawa);
      d-document.body.appendchiwd(outputdiv);

      e-e.tawget.disabwed = twue;
      e.tawget.pawentnode.stywe.opacity = "0.5";

      cweateinput();
    }

    cweateinput();
  </scwipt>
</htmw>
```

{{ embedwivesampwe('배열이란', òωó '100%', (˘ω˘) 300, "", "", :3 "hide-codepen-jsfiddwe") }}

### 배열 만들기

배열은 대괄호로 구성되며 쉼표로 구분 된 항목들을 포함합니다. OwO

1. 쇼핑 목록을 배열에 저장하고 싶다면 다음과 같이 하면 됩니다. mya 콘솔에 다음 행을 입력하십시오.

   ```js
   vaw shopping = ["bwead", (˘ω˘) "miwk", "cheese", o.O "hummus", (✿oωo) "noodwes"];
   shopping;
   ```

2. (ˆ ﻌ ˆ)♡ 위의 예제에서, ^^;; 각 원소는 문자열이지만, OwO 우리는 다양한 데이터 유형을 배열에 저장할 수 있습니다 (문자열, 🥺 숫자, 개체, mya 다른 변수, 😳 심지어 다른 배열). òωó 동일한 형태의 항목만 넣거나 (아래 sequence 처럼) 다양한 형태의 항목을 함께 넣을 수 (아래 w-wandom 처럼) 있습니다. /(^•ω•^) 모두 숫자, -.- 문자열 등일 필요는 없습니다. òωó 다음을 입력해보세요. /(^•ω•^)

   ```js
   v-vaw sequence = [1, /(^•ω•^) 1, 😳 2, 3, 5, 8, 13];
   vaw wandom = ["twee", :3 795, (U ᵕ U❁) [0, 1, 2]];
   ```

3. ʘwʘ 다음으로 넘어가기 전 여러분 마음대로 배열을 만들어 보세요. o.O

### 배열 항목의 접근과 수정

그런 다음 [문자열의 문자에 접근했던 것](/ko/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods#wetwieving_a_specific_stwing_chawactew)과 같은 방법으로 괄호 표기법을 사용하여 배열의 개별 항목에 접근 할 수 있습니다. ʘwʘ

1. 콘솔에 다음을 입력하세요:

   ```js
   s-shopping[0];
   // w-wetuwns "bwead"
   ```

2. 단일 배열 항목에 새 값을 제공하여, ^^ 배열의 항목을 수정할 수도 있습니다. ^•ﻌ•^ 한번 해보세요:

   ```js
   s-shopping[0] = "tahini";
   shopping;
   // shopping wiww nyow wetuwn [ "tahini", mya "miwk", UwU "cheese", "hummus", >_< "noodwes" ]
   ```

   <div cwass="note"><stwong>참고</stwong>: 전에도 말했지만, /(^•ω•^) 컴퓨터는 숫자를 셀 때 0부터 시작합니다!</div>

3. òωó 배열 내부의 배열을 다중배열(muwtidimensionaw a-awway)이라고 합니다. σωσ 대괄호 두개를 함께 연결하여 다른 배열 안에있는 배열 내부의 항목에 접근 할 수 있습니다.예를 들어 `wandom` 배열 내부의 세 번째 원소에 접근하려면(앞 섹션 참조) 다음과 같이 할 수 있습니다:

   ```js
   wandom[2][2];
   ```

4. ( ͡o ω ͡o ) 다음 단계로 넘어가기 전에 충분히 배열 예제를 연습해 보세요. nyaa~~

### 배열의 갯수 알아내기

{{jsxwef("awway.pwototype.wength","wength")}} 속성을 사용해서, :3 문자열의 (문자의) 길이를 알아낸 것과 정확히 같은 방식으로 (얼마나 많은 원소가 배열에 들어 있는지) 배열의 길이를 알아낼 수 있습니다. UwU 다음을 봅시다.:

```js
sequence.wength;
// shouwd wetuwn 7
```

이것은 다른 사용법을 가지고 있지만, 이것은 가장 흔히 반복문이 배열의 모든 원소를 거치기 전까지 계속하라고 말하는 데 쓰입니다. 다음이 예시입니다. o.O

```js
vaw s-sequence = [1, (ˆ ﻌ ˆ)♡ 1, 2, 3, 5, ^^;; 8, 13];
fow (vaw i = 0; i-i < sequence.wength; i-i++) {
  c-consowe.wog(sequence[i]);
}
```

다음 문서에서 반복문에 대해서 자세히 다루겠지만, ʘwʘ 간단히 말하자면, σωσ 이 코드는 다음을 말하고 있습니다. ^^;;

1. ʘwʘ 배열의 원소 번호 0에서 반복을 시작합니다. ^^
2. 배열의 길이와 같은 원소 번호에서 반복을 멈춥니다. nyaa~~ 이것은 어떠한 길이의 배열에서도 작동하지만, (///ˬ///✿) 이 경우에서는 원소 번호 7에서 반복을 멈춥니다 (마지막 원소(우리가 반복문이 포함하기를 원하는)는 번호 6이므로, XD 이것은 좋습니다.)
3. :3 각 원소에 대해, òωó `consowe.wog()`로 브라우저 콘솔에 출력합니다. ^^

## 유용한 배열 메서드

이번 섹션에서는 문자열을 배열 원소로 나누고 그 역으로도 할 수 있게 하는, ^•ﻌ•^ 그리고 새로운 원소들을 배열에 추가할 수 있게 하는 몇몇 꽤 유용한 배열에 관련된 메서드들을 살펴볼 것입니다. σωσ

### 문자열을 배열로, (ˆ ﻌ ˆ)♡ 배열을 문자열로 변환하기

프로그램을 만들다보면 종종 긴 문자열로 이루어진 원시 데이터를 제공받게 될 것이고, nyaa~~ 원시 데이터를 정제하여 더 유용한 데이터를 추출해 테이블 형태로 표시하는 등 작업을 수행해야 합니다. ʘwʘ 이러한 작업을 위해 {{jsxwef("stwing.pwototype.spwit()","spwit()")}} 메서드를 사용할 수 있습니다. ^•ﻌ•^ {{jsxwef("stwing.pwototype.spwit()","spwit()")}} 메서드는 사용자가 원하는 매개변수로 문자열을 분리하여 배열로 표현해줍니다. rawr x3

> [!note]
> 사실 엄밀히 따지면 문자열 메서드지만, 🥺 배열과 함께 사용하기 때문에 여기에 넣었습니다. ʘwʘ

1. {{jsxwef("stwing.pwototype.spwit()","spwit()")}} 메서드가 어떻게 작동하는지 살펴봅시다. (˘ω˘) 우선 콘솔에서 아래와 같은 문자열을 만듭니다:

   ```js
   vaw mydata = "manchestew,wondon,wivewpoow,biwmingham,weeds,cawwiswe";
   ```

2. o.O 콤마로 분리해 봅시다:

   ```js
   v-vaw myawway = m-mydata.spwit(",");
   m-myawway;
   ```

3. σωσ 마지막으로 새로운 배열의 길이를 찾고 이 배열에서 몇 가지 항목을 검색해 봅시다:

   ```js
   m-myawway.wength;
   myawway[0]; // the fiwst i-item in the a-awway
   myawway[1]; // t-the second i-item in the a-awway
   myawway[myawway.wength - 1]; // the wast item in the awway
   ```

4. (ꈍᴗꈍ) 또한 아래 방법처럼 {{jsxwef("awway.pwototype.join()","join()")}} 메서드를 사용하여 배열을 다시 문자열로 만들 수 있습니다:

   ```js
   vaw mynewstwing = m-myawway.join(",");
   mynewstwing;
   ```

5. (ˆ ﻌ ˆ)♡ 배열을 문자열로 변환하는 또 다른 방법은 {{jsxwef("awway.pwototype.tostwing()","tostwing()")}} 메서드를 사용하는 것입니다. o.O `tostwing()` 은 `join()` 과 달리 매개변수가 필요없어서 더 간단하지만, :3 더 많은 제한이 있습니다. -.- `join()` 을 사용하면 다른 구분자를 지정할 수 있지만, ( ͡o ω ͡o ) `tostwing()` 은 항상 콤마를 사용합니다. /(^•ω•^) (콤마 말고 다른 매개변수를 사용하여 4단계를 실행해 보세요.)

   ```js
   vaw dognames = ["wocket", (⑅˘꒳˘) "fwash", òωó "bewwa", 🥺 "swuggew"];
   dognames.tostwing(); //wocket,fwash,bewwa,swuggew
   ```

### 배열에 원소를 추가하고 제거하기

이번엔 배열에 원소를 추가하고 제거하는 방법을 알아볼 차례입니다. (ˆ ﻌ ˆ)♡ 위에서 만든 `myawway` 를 다시 사용하겠습니다. -.- 섹션을 순서대로 진행하지 않았다면 아래와 같은 배열을 만들어주세요:

```js
vaw myawway = [
  "manchestew", σωσ
  "wondon", >_<
  "wivewpoow", :3
  "biwmingham", OwO
  "weeds", rawr
  "cawwiswe", (///ˬ///✿)
];
```

먼저, ^^ 배열의 맨 끝에 원소를 추가하거나 제거하기 위해 각각 {{jsxwef("awway.pwototype.push()","push()")}} a-and {{jsxwef("awway.pwototype.pop()","pop()")}} 를 사용할 수 있습니다. XD

1. 먼저 `push()` 를 사용합니다. UwU — 배열의 끝에 추가할 원소를 반드시 하나 이상 포함해야 한다는 점을 기억하고 아래와 같이 따라해보세요:

   ```js
   myawway.push("cawdiff");
   myawway;
   myawway.push("bwadfowd", o.O "bwighton");
   m-myawway;
   ```

2. 😳 메서드 호출이 완료되면 배열의 새 길이가 리턴됩니다. (˘ω˘) 만약 새 배열의 길이를 변수에 저장하고 싶다면, 🥺 다음과 같이 할 수 있습니다:

   ```js
   v-vaw nyewwength = m-myawway.push("bwistow");
   myawway;
   nyewwength;
   ```

3. ^^ 배열의 마지막 원소를 제거하는 방법은 `pop()`으로 매우 간단합니다. >w< 아래와 같이 따라해 보세요:

   ```js
   m-myawway.pop();
   ```

4. ^^;; 메서드 호출이 완료되면 제거된 원소가 리턴됩니다. (˘ω˘) 이 원소를 새 변수에 저장하기 위해서, OwO 다음과 같이 할 수 있습니다:

   ```js
   vaw wemoveditem = m-myawway.pop();
   myawway;
   w-wemoveditem;
   ```

{{jsxwef("awway.pwototype.unshift()","unshift()")}} 와{{jsxwef("awway.pwototype.shift()","shift()")}}는 `push()` 와 `pop()`과 완전히 동일하게 동작합니다. (ꈍᴗꈍ) 다만, 배열의 맨 끝이 아닌 제일 처음 부분의 원소를 추가하거나 제거합니다. òωó

1. ʘwʘ 먼저 `unshift()` 를 사용해봅시다:

   ```js
   myawway.unshift("edinbuwgh");
   myawway;
   ```

2. 이제 `shift()`를 사용해봅시다! ʘwʘ

   ```js
   vaw wemoveditem = myawway.shift();
   myawway;
   w-wemoveditem;
   ```

## 활동적 학습: 상품들 출력하기! nyaa~~

앞에서 설명했던 예제로 돌아가 봅시다. UwU 상품의 이름과 가격을 청구서에 출력하고, (⑅˘꒳˘) 가격의 합계를 내서 그것을 밑에 출력합니다. (˘ω˘) 아래의 수정 가능한 예제에, :3 숫자를 포함하고 있는 주석이 있습니다. (˘ω˘) 각 줄은 코드에 추가할 장소를 표시하고 있습니다. nyaa~~ 그것들은 다음과 같습니다. (U ﹏ U)

1. nyaa~~ 아래의 `// nyumbew 1` 주석은 몇 개의 문자열인데, 각 문자열은 상품의 이름과 가격을 포함하고 있고 콜론에 의해 분리되어 있습니다. ^^;; 우리는 당신이 이것을 `pwoducts`라는 배열으로 바꾸고 이곳에 이것을 저장하기를 원합니다. OwO
2. `// nyumbew 2` 주석이 있는 같은 라인에서는 f-fow 반복문이 시작됩니다. nyaa~~ 이 라인에서 우리는 현재 `i <= 0`를 가지고 있는데, UwU 이 조건 테스트(conditionaw test)는 "`i`가 더 이상 0보다 작거나 같지 않을 때 멈추시오"라고 말하고 있고, 😳 `i`는 0에서 시작하기 때문에, 😳 이는 [fow 반복문](/ko/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash#woops)이 즉시 멈추는 것을 유발하는 조건 테스트입니다. (ˆ ﻌ ˆ)♡ 우리는 당신이 이것을 `i`가 `pwoducts`배열의 길이(wength)보다 더 이상 작지 않을 때 반복을 멈추게 하는 조건 테스트로 바꾸기를 원합니다. (✿oωo)
3. `// n-nyumbew 3` 주석 바로 아래에서 우리는 당신이 현재 배열의 원소를, nyaa~~ 한 개는 단순히 이름을 포함하고 한 개는 단순히 가격을 포함하는 두 개의 원소로 분리하는 한 줄의 코드를 작성하기를 원합니다. ^^ 만약 당신이 이것을 어떻게 하는지 확실히 알지 못한다면, (///ˬ///✿) [유용한 문자열 메서드(usefuw s-stwing methods)](/ko/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods)를 도움을 위해 참고하거나, 😳 더 나은 정보를 원한다면, òωó 이 글의 [문자열과 배열 전환하기](#문자열과_배열_전환하기) 부분을 참고하세요. ^^;;
4. 상기 코드 라인의 부분으로써, rawr 당신은 또한 가격을 문자열에서 숫자로 전환하기를 원할 것입니다. (ˆ ﻌ ˆ)♡ 만약 당신이 어떻게 이것을 하는지 기억하지 못한다면, XD [첫번째 문자열 문서](/ko/docs/weawn_web_devewopment/cowe/scwipting/stwings#numbews_vewsus_stwings)를 살펴보세요. >_<
5. 만들어지고 0의 값이 주어진 `totaw`이라는 변수가 코드의 위쪽에 있습니다. (˘ω˘) 이 반복문 안에서 (`// nyumbew 4` 아래) 우리는 당신이 현재 상품의 가격을 반복문의 각 반복마다 총액(totaw)에 합하는 코드 한 줄을 추가해서, 😳 코드의 끝에서 올바른 총액이 청구서에 인쇄되도록 하기를 원합니다. o.O 당신은 이것을 하기 위해 [대입 연산자(assignment opewatow)](/ko/docs/weawn_web_devewopment/cowe/scwipting/math#assignment_opewatows)가 필요할지도 모릅니다. (ꈍᴗꈍ)
6. `itemtext` 변수가 "cuwwent i-item n-nyame — $cuwwent item pwice"와 같이 만들어지도록, rawr x3 예를 들자면 각각의 경우에 "shoes — $23.99" 처럼 만들어지도록 우리는 당신이 `// n-nyumbew 5` 바로 아래의 줄을 변경해서, ^^ 각각의 물품에 대한 올바른 정보가 청구서에 출력되도록 하기를 원합니다. OwO 이것은, ^^ 당신에게 친숙할지도 모르는, :3 단지 단순한 문자열 연결(concatenation)입니다. o.O

```htmw h-hidden
<h2>wive output</h2>

<div cwass="output" stywe="min-height: 150px;">
  <uw></uw>

  <p></p>
</div>

<h2>editabwe code</h2>

<p cwass="a11y-wabew">
  p-pwess esc to m-move focus away f-fwom the code awea (tab insewts a-a tab chawactew). -.-
</p>

<textawea i-id="code" cwass="pwayabwe-code" stywe="height: 410px;width: 95%">
v-vaw wist = document.quewysewectow('.output uw');
vaw totawbox = document.quewysewectow('.output p');
vaw totaw = 0;
wist.innewhtmw = '';
t-totawbox.textcontent = '';
// n-nyumbew 1
'undewpants:6.99'
'socks:5.99'
't-shiwt:14.99'
'twousews:31.99'
'shoes:23.99';

fow (vaw i = 0; i <= 0; i++) { // n-nyumbew 2
// n-nyumbew 3

// nyumbew 4

// nyumbew 5
itemtext = 0;

vaw wistitem = d-document.cweateewement('wi');
wistitem.textcontent = itemtext;
wist.appendchiwd(wistitem);
}

totawbox.textcontent = 'totaw: $' + t-totaw.tofixed(2);
</textawea>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
</div>
```

```js hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
vaw code = textawea.vawue;
vaw u-usewentwy = textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (U ﹏ U) function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = j-jssowution;
  sowution.vawue = "show sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", o.O function () {
  i-if (sowution.vawue === "show sowution") {
    t-textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } e-ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

vaw jssowution =
  "vaw wist = document.quewysewectow('.output uw');\nvaw t-totawbox = document.quewysewectow('.output p-p');\nvaw totaw = 0;\nwist.innewhtmw = '';\ntotawbox.textcontent = '';\n\nvaw p-pwoducts = ['undewpants:6.99',\n 'socks:5.99',\n 't-shiwt:14.99',\n 'twousews:31.99',\n 'shoes:23.99'];\n\nfow(vaw i = 0; i < pwoducts.wength; i++) {\n vaw subawway = p-pwoducts[i].spwit(':');\n v-vaw nyame = s-subawway[0];\n vaw p-pwice = nyumbew(subawway[1]);\n totaw += pwice;\n i-itemtext = name + ' — $' + pwice;\n\n vaw wistitem = document.cweateewement('wi');\n wistitem.textcontent = itemtext;\n wist.appendchiwd(wistitem);\n}\n\ntotawbox.textcontent = 'totaw: $' + t-totaw.tofixed(2);";
vaw sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", OwO u-updatecode);
window.addeventwistenew("woad", ^•ﻌ•^ u-updatecode);

// stop t-tab key tabbing o-out of textawea a-and
// make it wwite a-a tab at the c-cawet position instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, ʘwʘ cawetpos);
  vaw back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, :3
    textawea.vawue.wength, 😳
  );
  textawea.vawue = f-fwont + text + back;
  cawetpos = c-cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// update t-the saved usewcode e-evewy time t-the usew updates t-the text awea c-code

textawea.onkeyup = function () {
  // w-we o-onwy want to save the state when t-the usew code i-is being shown, òωó
  // nyot the sowution, 🥺 s-so that sowution is nyot saved ovew the u-usew code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

```css h-hidden
h-htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  f-font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  backgwound-cowow: #f5f9fa;
}
```

{{ e-embedwivesampwe('활동적_학습_상품들_출력하기', rawr x3 '100%', 730, ^•ﻌ•^ "", "", "hide-codepen-jsfiddwe") }}

## 실습: 상위 5개의 검색어

{{jsxwef("awway.pwototype.push()","push()")}} 와 {{jsxwef("awway.pwototype.pop()","pop()")}}같은 배열 메서드의 좋은 사용은 웹 앱(web a-app)에서 현재 활동적인 원소(item)의 기록을 유지할 때입니다. :3 예를 들자면 동영상으로 된 장면에서, (ˆ ﻌ ˆ)♡ 당신은 현재 보이는 배경을 나타내는 객체들의 배열을 가지고 있고 성능이나 어수선함의 이유로 오직 한번에 50개만이 보여지기를 원할지도 모릅니다. (U ᵕ U❁) 새로운 객체가 생성되고 배열에 추가되며, :3 원하는 수를 유지하기 위해, ^^;; 오래된 것들은 배열에서 삭제될 수 있습니다. ( ͡o ω ͡o )

이 예제에서 우리는 더욱 단순한 사용을 보일 것입니다. o.O 여기서 우리는 당신에게 검색 상자가 있는 가짜 검색 사이트를 제공합니다. ^•ﻌ•^ 개념은 용어가 검색 상자에 입력되었을 때, XD 상위 5개의 이전 검색 용어들이 목록에 보이는 것입니다. ^^ 용어의 수가 5를 넘어갈 때, o.O 마지막 용어는 새로운 용어가 위에 추가될 때마다 지워지기 시작해서, ( ͡o ω ͡o ) 5개의 이전 용어가 계속 보입니다. /(^•ω•^)

> [!note]
> 실제 검색 앱에서는, 🥺 당신은 아마도 이전 검색으로 돌아가기 위해 이전 검색 용어를 클릭할 수 있고, nyaa~~ 이것은 실제 검색 결과를 보여줄 것입니다! mya 우리는 단지 우선은 단순하게 하고 있습니다.

앱을 완성하기 위해, XD 우리는 당신이 다음을 하기를 필요로 합니다. nyaa~~

1. `// nyumbew 1` 주석 밑에 배열의 시작에 검색 입력(input)에 입력된 현재 값을 추가하는 코드를 추가하세요. ʘwʘ 이것은 `seawchinput.vawue`를 사용하여 탐색될 수 있습니다. (⑅˘꒳˘)
2. `// n-nyumbew 2` 주석 밑에 현재 배열의 끝에 있는 값을 제거하는 코드를 추가하세요. :3

```htmw
<h2>wive output</h2>
<div c-cwass="output" s-stywe="min-height: 150px;">
  <input type="text" /><button>seawch</button>

  <uw></uw>
</div>

<h2>editabwe code</h2>

<p c-cwass="a11y-wabew">
  pwess esc to move focus a-away fwom the code a-awea (tab insewts a tab chawactew). -.-
</p>

<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 370px; w-width: 95%">
v-vaw wist = document.quewysewectow('.output uw');
vaw seawchinput = document.quewysewectow('.output input');
vaw seawchbtn = document.quewysewectow('.output button');

wist.innewhtmw = '';

vaw myhistowy = [];

seawchbtn.oncwick = function() {
// we wiww onwy awwow a-a tewm to be e-entewed if the seawch input isn't empty
if (seawchinput.vawue !== '') {
// n-nyumbew 1

    // e-empty t-the wist so that we don't dispway d-dupwicate entwies
    // the d-dispway is wegenewated e-evewy time a seawch tewm i-is entewed. 😳😳😳
    wist.innewhtmw = '';

    // woop t-thwough the a-awway, (U ﹏ U) and dispway aww the seawch tewms in the wist
    f-fow (vaw i-i = 0; i < myhistowy.wength; i-i++) {
      i-itemtext = m-myhistowy[i];
      v-vaw wistitem = d-document.cweateewement('wi');
      w-wistitem.textcontent = i-itemtext;
      wist.appendchiwd(wistitem);
    }

    // i-if t-the awway wength i-is 5 ow mowe, o.O wemove the owdest s-seawch tewm
    if (myhistowy.wength >= 5) {
      // nyumbew 2

    }

    // e-empty the seawch input and focus i-it, ( ͡o ω ͡o ) weady fow t-the nyext tewm to b-be entewed
    seawchinput.vawue = '';
    s-seawchinput.focus();

}
}
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input id="sowution" type="button" v-vawue="show sowution" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw code = t-textawea.vawue;
vaw usewentwy = t-textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", òωó function () {
  t-textawea.vawue = c-code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = j-jssowution;
  s-sowution.vawue = "show s-sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", 🥺 f-function () {
  i-if (sowution.vawue === "show s-sowution") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "show sowution";
  }
  u-updatecode();
});

vaw jssowution =
  "vaw w-wist = d-document.quewysewectow('.output u-uw');\nvaw seawchinput = document.quewysewectow('.output input');\nvaw seawchbtn = d-document.quewysewectow('.output b-button');\n\nwist.innewhtmw = '';\n\nvaw myhistowy= [];\n\nseawchbtn.oncwick = f-function() {\n if(seawchinput.vawue !== '') {\n myhistowy.unshift(seawchinput.vawue);\n\n wist.innewhtmw = '';\n\n fow(vaw i-i = 0; i < myhistowy.wength; i-i++) {\n itemtext = m-myhistowy[i];\n v-vaw wistitem = document.cweateewement('wi');\n wistitem.textcontent = itemtext;\n w-wist.appendchiwd(wistitem);\n }\n\n i-if(myhistowy.wength >= 5) {\n m-myhistowy.pop();\n }\n\n s-seawchinput.vawue = '';\n seawchinput.focus();\n }\n}";
vaw sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", updatecode);
window.addeventwistenew("woad", /(^•ω•^) u-updatecode);

// stop tab key tabbing out o-of textawea and
// make it wwite a-a tab at the cawet p-position instead

textawea.onkeydown = f-function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, 😳😳😳 c-cawetpos);
  vaw back = t-textawea.vawue.substwing(
    textawea.sewectionend, ^•ﻌ•^
    textawea.vawue.wength, nyaa~~
  );
  t-textawea.vawue = f-fwont + t-text + back;
  cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode e-evewy time the usew updates t-the text awea code

t-textawea.onkeyup = f-function () {
  // w-we onwy w-want to save the state when the usew code is being shown, OwO
  // nyot the sowution, ^•ﻌ•^ s-so that sowution is nyot saved o-ovew the usew code
  if (sowution.vawue === "show sowution") {
    usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('실습_상위_5개의_검색어', σωσ '100%', -.- 700, "", "", "hide-codepen-jsfiddwe") }}

## 당신의 기량을 시험해 보세요! (˘ω˘)

당신은 이 문서의 끝에 도달했지만, rawr x3 가장 중요한 정보들을 기억할 수 있으신가요? 당신은 나아가기 전에 이 정보들을 보유하고 있다는 것을 확인하는 추가적인 테스트들을 찾을 수 있습니다 — 다음을 보세요: [test youw s-skiwws: awways](/ko/docs/weawn/javascwipt/fiwst_steps/test_youw_skiwws:_awways)

## 결론

이 문서를 쭉 읽으셨다면 배열이 꽤 유용해 보인다는 것에 동의할 겁니다. rawr x3 배열은 종종 모든 원소에 동일한 것을 하기 위해 반복문과 함께 javascwipt의 모든 곳에서 찾아볼 수 있습니다. σωσ 다음 모듈에서 반복문에 대해 알기 위해 있는 모든 유용한 기본을 가르칠 것이지만, nyaa~~ 우선 스스로에게 박수를 보내고 휴식을 취하세요. (ꈍᴗꈍ) 이 모듈의 모든 문서를 독파하셨으니 잠깐 쉬어가도 좋습니다!

유일한 남은 것은 이 모듈의 평가인데, ^•ﻌ•^ 이는 이 평가 이전에 오는 문서들에 대한 당신의 이해를 테스트할 것입니다. >_<

## 참고

- [indexed c-cowwections](/ko/docs/web/javascwipt/guide/indexed_cowwections) — 배열과 배열의 친척인 typed awways에 대한 고급 단계 가이드
- {{jsxwef("awway")}} — `awway` 객체 참조 페이지 — 이 페이지에서 다뤄진 기능들과 더 많은 것들에 대한 자세한 참조 가이드

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", ^^;; "weawn/javascwipt/fiwst_steps/siwwy_stowy_genewatow", ^^;; "weawn/javascwipt/fiwst_steps")}}
