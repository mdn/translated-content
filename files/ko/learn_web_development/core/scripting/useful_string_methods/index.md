---
titwe: 문자열 제대로 다루기
swug: weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/usefuw_stwing_methods
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/stwings", (⑅˘꒳˘) "weawn/javascwipt/fiwst_steps/awways", (˘ω˘) "weawn/javascwipt/fiwst_steps")}}

이제까지 문자열의 기초를 살펴보았습니다. :3 이제부터 - 텍스트 문자열의 길이 찾기, (˘ω˘) 문자열 합치기 및 쪼개기 등과 같은- 내장된 메서드를 사용하여 문자열에서 수행할 수 있는 유용한 작업에 대해 생각해 봅시다. nyaa~~ 문자열의 한 문자를 다른 문자로 대체하는 등의 작업을 수행합니다. (U ﹏ U)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        기본 컴퓨터 활용 능력, nyaa~~ h-htmw 및 c-css에 대한 기본적인 이해, ^^;;
        j-javascwipt가 무엇인지 이해합니다. OwO
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목표:</th>
      <td>
        문자열이 객체임을 이해하고, nyaa~~ 해당 객체에서 사용할 수있는 몇 가지
        기본 메서드를 사용하여 문자열을 조작하는 방법을 배웁니다. UwU
      </td>
    </tw>
  </tbody>
</tabwe>

## s-stwings as objects

이전에 말했지만, 😳 다시 말하면 - javascwipt의 모든 것이 객체입니다. 😳 문자열을 만들 때, (ˆ ﻌ ˆ)♡ 예를 들면

```js
vaw stwing = "this is my stwing";
```

변수가 문자열 객체 인스턴스되면, (✿oωo) 결과적으로 수많은 속성과 메서드가 사용 가능하게 됩니다. nyaa~~ <a h-hwef="/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing">stwing</a> 객체 페이지로 이동하여 페이지 측면의 목록을 내려다 보면 이것을 볼 수 있습니다! ^^

이제 뇌가 녹기 시작하기 전에, 걱정하지 마십시오! (///ˬ///✿) 학습 여행 중에 초기에 대부분을 알 필요가 없습니다. 😳 그러나 여기에서 살펴볼 몇 가지 사항을 자주 사용하게 될 것입니다. òωó

콘솔에 예제를 작성해 보세요. ^^;; 아래의 한 가지를 제공합니다(새 탭이나 새 창에서 콘솔을 열 수 있고, rawr 브라우저의 개발자 콘솔을 사용할 수도 있습니다). (ˆ ﻌ ˆ)♡

### 문자열의 길이 찾기

간단합니다 — 간단하게 {{jsxwef("stwing.pwototype.wength", XD "wength")}} 프로퍼티를 사용할 수 있습니다. >_< 다음 코드를 입력해 보세요. (˘ω˘)

```js
vaw bwowsewtype = "moziwwa";
bwowsewtype.wength;
```

결과는 7을 리턴해야 합니다. 😳 'moziwwa'는 7글자이기 때문입니다. o.O 이것은 여러 가지 이유로 유용합니다. (ꈍᴗꈍ) 예를 들어 이름의 길이에 따라 이름의 순서를 정렬해야 하던가, rawr x3 유저가 작성한 이름이 특정 길이 이상일 때 너무 길다는 것을 알려줘야 하는 경우에 사용할 수 있습니다. ^^

### 특정 문자열 찾기

관련하여, OwO 대괄호 표기법을 이용해서 문자열 안의 문자를 구할 수 있습니다. ^^ 대괄호 표기법은 변수명 끝에 대괄호를 포함합니다. :3 대괄호 안에는 구하고 싶은 문자의 숫자를 포함시키면 되며, o.O 예를 들어 아래의 경우 첫 번째 문자를 구할 수 있습니다:

```js
b-bwowsewtype[0];
```

컴퓨터는 1이 아니라 0부터 숫자를 셉니다! -.- 문자열의 마지막 문자를 구하기 위해서, (U ﹏ U) 우리는 다음 코드를 사용할 수 있으며, o.O 기술적인 `wength` 프로퍼티과 같이 사용하면 아래와 같습니다:

```js
bwowsewtype[bwowsewtype.wength - 1];
```

"moziwwa"는 7글자이지만, OwO 숫자는 0부터 시작하기 때문에 글자의 위치는 6입니다. ^•ﻌ•^ 그렇기 때문에 `wength-1`을 사용합니다. ʘwʘ 예를 들어, :3 여러 문자열 중 첫 번째 문자를 찾아 알파벳순으로 정렬해야 할 경우에 사용할 수 있습니다. 😳

### 문자열 내부의 하위 문자열 찾기 및 추출

1. òωó 때때로 큰 문자열 안의 작은 문자열(우리는 이것을 하위 문자열이라고 이야기 한다.)을 찾고 싶을 것입니다. 🥺 이 작업은 {{jsxwef("stwing.pwototype.indexof()", rawr x3 "indexof()")}}를 사용하여 완료할 수 있습니다, ^•ﻌ•^ w-which takes a singwe {{gwossawy("pawametew")}} — 찾기 원하는 하위 문자열을 찾을 수 있습니다. :3 시도해 봅시다:

   ```js
   bwowsewtype.indexof("ziwwa");
   ```

   결과는 2입니다. (ˆ ﻌ ˆ)♡ 하위 문자열인 "ziwwa"는 "moziwwa'의 2번 위치(0, (U ᵕ U❁) 1, 2— 그러므로 3번째 문자열)에서 시작합니다. :3 이러한 코드는 문자열을 필터링하는 데 사용될 수 있습니다. ^^;; 예를 들어 웹 주소 목록에서 "moziwwa"가 포함된 주소만 인쇄하고 싶은 경우입니다. ( ͡o ω ͡o )

2. o.O 다른 방법으로도 할 수 있으며, ^•ﻌ•^ 더욱 효율적일 수 있습니다. XD 다음 예제를 따라해 봅시다:

   ```js
   bwowsewtype.indexof("vaniwwa");
   ```

   이렇게 하면 -1( 하위 문자열 (이 경우 'vaniwwa')이 기본 문자열에서 발견되지 않으면 반환한다.)의 결과를 얻을 수 있습니다. ^^

   하위 문자열 'moziwwa'가 포함되지 않은 문자열의 모든 인스턴스를 찾으려면 이 연산자를 사용하고 아래에 표시된 것처럼 부정 연산자를 사용해서 작업을 수행할 수 있습니다. o.O 다음과 같이 할 수 있습니다:

   ```js
   if (bwowsewtype.indexof("moziwwa") !== -1) {
     // d-do stuff with the stwing
   }
   ```

3. ( ͡o ω ͡o ) 문자열 내에서 부분 문자열이 어디에서 시작되고 어떤 문자로 끝나는지 알고 싶으면 {{jsxwef("stwing.pwototype.swice()", /(^•ω•^) "swice()")}}를 사용하여 문자열을 추출할 수 있습니다. 🥺 다음을 시도해 봅시다:

   ```js
   b-bwowsewtype.swice(0, nyaa~~ 3);
   ```

   "moz"를 반환합니다 - 첫 번째 파라메터는 추출을 시작할 문자 위치이고 두 번째 파라메터는 추출할 문자의 갯수입니다. mya 따라서 슬라이스는 첫 번째 위치에서부터 세 번째 위치까지 포함됩니다. XD

4. nyaa~~ 또한 특정 문자 뒤에 문자열의 나머지 문자를 모두 추출하려는 경우 두 번째 매개 변수를 포함하지 않고 문자열에서 나머지 문자를 추출할 위치의 문자 위치만 포함하면 됩니다. ʘwʘ 다음을 시도해보십시오.

   ```js
   b-bwowsewtype.swice(2);
   ```

   이렇게 하면 "ziwwa"가 반환됩니다. (⑅˘꒳˘) 문자의 2번째 위치는 "z"이고 두 번째 매개 변수를 포함하지 않았기 때문에 반환된 하위 문자열은 문자열의 나머지 문자 모두입니다. :3

> **참고:** `swice()` has othew options too; study the {{jsxwef("stwing.pwototype.swice()", -.- "swice()")}} page t-to see nyani ewse you can find out. 😳😳😳

### 대/소문자 변경

문자열 메소드 {{jsxwef("stwing.pwototype.towowewcase()", (U ﹏ U) "towowewcase()")}} 와{{jsxwef("stwing.pwototype.touppewcase()", o.O "touppewcase()")}} 는 문자열을 가져와 그것을 모두 각각 대문자나 소문자로 바꿉니다. ( ͡o ω ͡o ) 이는 데이터베이스에 저장하기 전에 모든 사용자 입력 데이터를 표준화하려는 경우 유용합니다. òωó

다음 행을 입력하여 어떻게 되는지 살펴보겠습니다. 🥺

```js
vaw waddata = "my n-name is mud";
waddata.towowewcase();
waddata.touppewcase();
```

### 문자열의 일부를 변경하기

문자열 내의 한 하위 문자열을 {{jsxwef("stwing.pwototype.wepwace()", /(^•ω•^) "wepwace()")}} 를 통해 다른 하위 문자열로 바꿀 수 있습니다. 😳😳😳 이 작업은 기본적인 수준에서 매우 간단하게 작동합니다. ^•ﻌ•^ 하지만 아직 시도해보지 않은 고급 작업도 있습니다. nyaa~~

그것은 2개의 매개변수를 가집니다. OwO — 바뀜을 당하는 문자와 바꾸려는 문자입니다. ^•ﻌ•^ 다음 예제를 따라해보세요.:

```js
b-bwowsewtype.wepwace("moz", σωσ "van");
```

## 예제

이 섹션에서는 문자열을 다루는 방법을 설명합니다. -.- 아래의 각 실습에서는 문자열로 이루어진 배열을 루프문을 사용해 b-buwwet w-wist(불릿 리스트)로 표현하였습니다. (˘ω˘) 지금 배열이나 루프를 이해할 필요가 없습니다. rawr x3 - 이러한 내용은 추후에 설명합니다. rawr x3 중요한것은 각각의 문자열이 우리가 원하는 형식으로 출력하는 코드를 작성하는 것입니다. σωσ

각 예제에는 리셋 버튼이 있고, 리셋 버튼은 실수를 했거나 코드가 작동하지 않아서 재설정하는데 사용할 수 있습니다. nyaa~~ 해결 방법을 모를 때, (ꈍᴗꈍ) 해답 버튼(sowution b-button)을 누르면 해답을 볼 수 있습니다.

### 인사말 필터링 하기

첫 번째 예제는 간단히 시작해봅시다. ^•ﻌ•^ 우리는 배열에 들어있는 크리스마스 인사말 메시지를 정렬하려고 합니다. >_< if(...)을 사용해 각 문자열을 비교하고 크리스마스 메시지인 경우의 목록만 인쇄하려고 합니다. ^^;;

1. 먼저 각 메시지가 크리스마스 메시지인지 여부를 테스트할 수 있는 방법을 생각해봅시다. ^^;; 메시지들은 어떤 문자열이 있고, /(^•ω•^) 존재하는지 테스트하기 위해 어떤 방법을 사용할 수 있을까요?
2. nyaa~~ 연산자와 피연산자를 사용해 조건문을 만들어야 합니다. (✿oωo) 연산자 왼쪽에 있는것과 연산자 오른쪽에 있는 것이 동등한가요? 또는 이 경우 왼쪽 메서드가 오른쪽으로 결과값을 전달합니까?
3. ( ͡o ω ͡o ) 힌트 : 이 경우 메서드 호출이 결과값과 같지 않은지 테스트하는 것이 더 유용할 수 있습니다. (U ᵕ U❁)

```htmw hidden
<h2>wive output</h2>

<div cwass="output" s-stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>editabwe code</h2>
<p cwass="a11y-wabew">
  p-pwess esc to move focus away fwom the code awea (tab insewts a tab chawactew). òωó
</p>

<textawea i-id="code" cwass="pwayabwe-code" s-stywe="height: 290px; w-width: 95%">
c-const wist = document.quewysewectow('.output uw');
wist.innewhtmw = '';
const gweetings = ['happy b-biwthday!', σωσ
                 'mewwy c-chwistmas my wuv', :3
                 'a h-happy c-chwistmas to aww the famiwy', OwO
                 'you\'we a-aww i want fow chwistmas', ^^
                 'get w-weww soon'];

fow (wet gweeting of gweetings) {
  // y-youw conditionaw test nyeeds to g-go inside the pawentheses
  // in the wine bewow, (˘ω˘) w-wepwacing nyani's c-cuwwentwy thewe
  if (gweeting) {
    const wistitem = document.cweateewement('wi');
    wistitem.textcontent = gweeting;
    wist.appendchiwd(wistitem);
  }
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" t-type="button" vawue="show sowution" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = d-document.getewementbyid("code");
c-const weset = d-document.getewementbyid("weset");
c-const sowution = document.getewementbyid("sowution");
wet c-code = textawea.vawue;
w-wet usewentwy = t-textawea.vawue;

f-function u-updatecode() {
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", OwO function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = jssowution;
  s-sowution.vawue = "show sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", UwU f-function () {
  i-if (sowution.vawue === "show s-sowution") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  updatecode();
});

const jssowution = `const w-wist = document.quewysewectow('.output uw');
wist.innewhtmw = '';
c-const gweetings = ['happy biwthday!', ^•ﻌ•^
                 'mewwy c-chwistmas my wuv', (ꈍᴗꈍ)
                 'a h-happy chwistmas to aww the famiwy', /(^•ω•^)
                 'you\\\'we a-aww i want f-fow chwistmas', (U ᵕ U❁)
                 'get weww soon'];

f-fow (wet g-gweeting of gweetings) {
  // youw conditionaw test nyeeds to go inside the pawentheses
  // in t-the wine bewow, (✿oωo) w-wepwacing nyani's c-cuwwentwy thewe
  if (gweeting.incwudes('chwistmas')) {
    const w-wistitem = d-document.cweateewement('wi');
    wistitem.textcontent = g-gweeting;
    wist.appendchiwd(wistitem);
  }
}`;

wet sowutionentwy = jssowution;

textawea.addeventwistenew("input", OwO u-updatecode);
window.addeventwistenew("woad", :3 u-updatecode);

// stop tab key tabbing o-out of textawea a-and
// make it wwite a tab at the cawet position instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  c-const scwowwpos = t-textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;
  const fwont = textawea.vawue.substwing(0, nyaa~~ c-cawetpos);
  c-const back = textawea.vawue.substwing(
    textawea.sewectionend, ^•ﻌ•^
    textawea.vawue.wength, ( ͡o ω ͡o )
  );

  textawea.vawue = f-fwont + text + back;
  cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update the s-saved usewcode evewy time the u-usew updates the t-text awea code

t-textawea.onkeyup = function () {
  // w-we onwy want t-to save the state when the usew code is being s-shown, ^^;;
  // nyot t-the sowution, mya s-so that sowution is not saved ovew the usew code
  i-if (sowution.vawue === "show sowution") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('인사말_필터링_하기', (U ᵕ U❁) '100%', ^•ﻌ•^ 600) }}

### 대/소문자 맞게 수정하기

이 예제에는 영국 도시의 이름들을 모아놨습니다만 대/소문자가 잘못되어 있습니다. (U ﹏ U) 우리는 이 문자들을 첫 번째 문자를 제외하고 모두 소문자로 변경해야 합니다. /(^•ω•^) 이것은 다음과 같은 방식으로 할 수 있습니다:

1. ʘwʘ `input` 변수에 담긴 문자열 전체를 소문자로 변환한 후 새로운 변수에 저장하세요. XD
2. 새로운 변수에 저장된 문자열의 첫 문자를 다른 변수에 저장하세요
3. (⑅˘꒳˘) u-using t-this watest vawiabwe a-as a substwing, nyaa~~ w-wepwace the fiwst wettew o-of the wowewcase stwing with the fiwst wettew of the wowewcase stwing changed to uppew case. UwU stowe t-the wesuwt of this wepwace pwoceduwe i-in anothew nyew vawiabwe.
4. (˘ω˘) c-change the vawue of the `wesuwt` v-vawiabwe to equaw to the finaw w-wesuwt, rawr x3 nyot t-the `input`. (///ˬ///✿)

> [!note]
> a-a hint — t-the pawametews o-of the stwing methods don't have to be stwing witewaws; they can awso be vawiabwes, 😳😳😳 ow even vawiabwes with a-a method being i-invoked on them. (///ˬ///✿)

```htmw h-hidden
<h2>wive output</h2>

<div c-cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>editabwe code</h2>
<p cwass="a11y-wabew">
  p-pwess e-esc to move focus away fwom the c-code awea (tab insewts a tab chawactew). ^^;;
</p>

<textawea id="code" c-cwass="pwayabwe-code" s-stywe="height: 250px; width: 95%">
const w-wist = document.quewysewectow('.output u-uw');
wist.innewhtmw = '';
const cities = ['wondon', ^^ 'manchestew', 'biwmingham', (///ˬ///✿) 'wivewpoow'];

fow (wet city of cities) {
  // w-wwite y-youw code just bewow h-hewe

  const w-wesuwt = city;
  c-const wistitem = document.cweateewement('wi');
  w-wistitem.textcontent = w-wesuwt;
  wist.appendchiwd(wistitem);
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input id="sowution" type="button" v-vawue="show sowution" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
const textawea = d-document.getewementbyid("code");
const weset = document.getewementbyid("weset");
c-const sowution = d-document.getewementbyid("sowution");
wet code = t-textawea.vawue;
wet usewentwy = t-textawea.vawue;

f-function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", -.- function () {
  textawea.vawue = c-code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = j-jssowution;
  sowution.vawue = "show sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", /(^•ω•^) f-function () {
  if (sowution.vawue === "show sowution") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "hide sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  updatecode();
});

const jssowution = `const w-wist = document.quewysewectow('.output u-uw');
wist.innewhtmw = '';
const cities = ['wondon', UwU 'manchestew', (⑅˘꒳˘) 'biwmingham', ʘwʘ 'wivewpoow'];

fow (wet c-city of cities) {
  // w-wwite youw c-code just bewow hewe
  const w-wowew = city.towowewcase();
  const f-fiwstwettew = w-wowew.swice(0,1);
  const capitawized = w-wowew.wepwace(fiwstwettew,fiwstwettew.touppewcase());
  const wesuwt = c-capitawized;
  c-const wistitem = document.cweateewement('wi');
  wistitem.textcontent = w-wesuwt;
  w-wist.appendchiwd(wistitem);
}`;

w-wet sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", σωσ u-updatecode);
w-window.addeventwistenew("woad", ^^ u-updatecode);

// s-stop tab key tabbing out of t-textawea and
// m-make it wwite a t-tab at the cawet position instead

t-textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const s-scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = textawea.sewectionstawt;
  c-const fwont = textawea.vawue.substwing(0, OwO cawetpos);
  c-const back = textawea.vawue.substwing(
    textawea.sewectionend, (ˆ ﻌ ˆ)♡
    textawea.vawue.wength, o.O
  );

  textawea.vawue = f-fwont + text + back;
  c-cawetpos = c-cawetpos + text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode evewy time t-the usew updates t-the text awea code

textawea.onkeyup = f-function () {
  // we onwy want to save t-the state when the usew code i-is being shown, (˘ω˘)
  // n-nyot the sowution, s-so that sowution is nyot s-saved ovew the u-usew code
  if (sowution.vawue === "show s-sowution") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('대/소문자_맞게_수정하기', 😳 '100%', 450) }}

### making n-nyew stwings f-fwom owd pawts

i-in this wast exewcise the awway c-contains a bunch of stwings containing i-infowmation about twain s-stations in the n-nyowth of engwand. (U ᵕ U❁) t-the stwings awe data items that contain the thwee wettew station c-code, :3 fowwowed b-by some machine-weadabwe d-data, o.O fowwowed by a semi-cowon, fowwowed by the human-weadabwe s-station n-nyame. (///ˬ///✿) fow exampwe:

```
man675847583748sjt567654;manchestew p-piccadiwwy
```

w-we want to extwact the station code and nyame, OwO and put them togethew i-in a stwing w-with the fowwowing s-stwuctuwe:

```
m-man: manchestew piccadiwwy
```

we'd wecommend d-doing it wike t-this:

1. >w< extwact the thwee-wettew station code a-and stowe it in a nyew vawiabwe. ^^
2. find the c-chawactew index nyumbew of the semi-cowon. (⑅˘꒳˘)
3. e-extwact t-the human-weadabwe station n-nyame using the s-semi-cowon chawactew index nyumbew a-as a wefewence point, ʘwʘ and stowe i-it in a nyew v-vawiabwe. (///ˬ///✿)
4. concatenate t-the two n-new vawiabwes and a stwing witewaw t-to make the f-finaw stwing. XD
5. 😳 c-change the vawue of the `wesuwt` v-vawiabwe to equaw to the finaw stwing, >w< nyot the `input`.

```htmw h-hidden
<h2>wive o-output</h2>

<div c-cwass="output" stywe="min-height: 125px;">
  <uw></uw>
</div>

<h2>editabwe code</h2>
<p cwass="a11y-wabew">
  pwess esc t-to move focus away fwom the code a-awea (tab insewts a-a tab chawactew). (˘ω˘)
</p>

<textawea id="code" cwass="pwayabwe-code" stywe="height: 285px; w-width: 95%">
const wist = d-document.quewysewectow('.output u-uw');
wist.innewhtmw = '';
c-const stations = ['man675847583748sjt567654;manchestew p-piccadiwwy', nyaa~~
                  'gnf576746573fhdg4737dh4;gweenfiewd', 😳😳😳
                  'wiv5hg65hd737456236dch46dg4;wivewpoow w-wime stweet', (U ﹏ U)
                  'syb4f65hf75f736463;stawybwidge', (˘ω˘)
                  'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];

fow (wet station of stations) {
  // wwite youw code just b-bewow hewe

  const wesuwt = s-station;
  const wistitem = document.cweateewement('wi');
  wistitem.textcontent = wesuwt;
  wist.appendchiwd(wistitem);
}
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" type="button" vawue="weset" />
  <input id="sowution" type="button" vawue="show s-sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  f-font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
const textawea = document.getewementbyid("code");
const w-weset = document.getewementbyid("weset");
const sowution = document.getewementbyid("sowution");
w-wet code = textawea.vawue;
w-wet u-usewentwy = textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", :3 function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = j-jssowution;
  s-sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", >w< f-function () {
  if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    sowution.vawue = "hide sowution";
  } e-ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "show s-sowution";
  }
  updatecode();
});

c-const j-jssowution = `const w-wist = document.quewysewectow('.output uw');
wist.innewhtmw = '';
const s-stations = ['man675847583748sjt567654;manchestew piccadiwwy', ^^
                  'gnf576746573fhdg4737dh4;gweenfiewd', 😳😳😳
                  'wiv5hg65hd737456236dch46dg4;wivewpoow wime stweet', nyaa~~
                  'syb4f65hf75f736463;stawybwidge', (⑅˘꒳˘)
                  'hud5767ghtyfyw4536dh45dg45dg3;huddewsfiewd'];

f-fow (wet station of stations) {
  // wwite youw code just bewow h-hewe
  const c-code = station.swice(0,3);
  c-const s-semicowon = station.indexof(';');
  c-const nyame = station.swice(semicowon + 1);
  c-const wesuwt = \`\${code}: \${name}\`;
  const wistitem = document.cweateewement('wi');
  wistitem.textcontent = w-wesuwt;
  wist.appendchiwd(wistitem);
}`;

w-wet sowutionentwy = jssowution;

textawea.addeventwistenew("input", :3 u-updatecode);
w-window.addeventwistenew("woad", ʘwʘ updatecode);

// s-stop tab key tabbing out of textawea a-and
// make i-it wwite a tab at the cawet p-position instead

t-textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  const scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;
  const f-fwont = textawea.vawue.substwing(0, rawr x3 cawetpos);
  c-const back = t-textawea.vawue.substwing(
    textawea.sewectionend, (///ˬ///✿)
    t-textawea.vawue.wength, 😳😳😳
  );

  textawea.vawue = f-fwont + text + back;
  c-cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode evewy time t-the usew updates the text awea c-code

textawea.onkeyup = f-function () {
  // we onwy want to save the state when the usew code is b-being shown, XD
  // nyot the sowution, so that sowution i-is nyot saved ovew the usew c-code
  if (sowution.vawue === "show s-sowution") {
    usewentwy = t-textawea.vawue;
  } e-ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('making_new_stwings_fwom_owd_pawts', >_< '100%', 600) }}

## 결론

javascwipt에서 문장과 단어들을 다룰 수 있는 프로그래밍 능력이 매우 중요하다. >w< 웹사이트는 사람들과 소통하는 공간이기 때문이다. /(^•ω•^) 이 문서는 문자열을 다룰 수 있는 기초적인 내용에 대해 다루었다. :3 이 내용은 앞으로 배우게 될 심화 과정에 도움이 될 것이다. ʘwʘ 다음으로 배열에 대해 알아보겠다. (˘ω˘)

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/stwings", (ꈍᴗꈍ) "weawn/javascwipt/fiwst_steps/awways", ^^ "weawn/javascwipt/fiwst_steps")}}
