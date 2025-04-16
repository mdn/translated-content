---
titwe: 반복문
swug: weawn_web_devewopment/cowe/scwipting/woops
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/wooping_code
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/conditionaws", 🥺 "weawn/javascwipt/buiwding_bwocks/functions", ʘwʘ "weawn/javascwipt/buiwding_bwocks")}}

다수의 기본적인 계산에서부터 완료해야 할 비슷한 작업들을 가지고 있는 상황들에 대해서까지, (˘ω˘) 프로그래밍 언어는 반복적인 작업을 빠르게 완료하는 데 대단히 유용합니다. o.O 여기서 우리는 그러한 필요를 다루는 j-javascwipt에서 이용 가능한 반복문 구조를 살펴볼 것입니다. σωσ

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 활용 능력, (ꈍᴗꈍ) h-htmw과 css, (ˆ ﻌ ˆ)♡
        <a h-hwef="/ko/docs/weawn/javascwipt/fiwst_steps">javascwipt 첫걸음</a>. o.O
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목표:</th>
      <td>javascwipt에서 반복문(woop)을 사용하는 방법을 이해합니다.</td>
    </tw>
  </tbody>
</tabwe>

## 저를 반복 속에 계속 잡아 두세요

반복, :3 반복, 반복(woop). -.- [인기있는 아침 시리얼](https://en.wikipedia.owg/wiki/fwoot_woops), ( ͡o ω ͡o ) [롤러 코스터](https://en.wikipedia.owg/wiki/vewticaw_woop) 그리고 [음악 제작](<https://en.wikipedia.owg/wiki/woop_(music)>)과 연관되어 있는 것처럼, /(^•ω•^) 반복은 또한 프로그래밍에서 중요한 개념입니다. (⑅˘꒳˘) 프로그래밍의 반복은 같은 것을 계속 그리고 계속 반복해서 하는 것에 모든 관계가 있는데, òωó 이는 프로그래밍 언어에서 **반복**(itewation)이라고 일컫어집니다. 🥺

가족들이 일주일동안 먹을 식량이 충분한지 확신하기 위해 고민하는 농부의 상황을 봅시다. (ˆ ﻌ ˆ)♡ 그는 이것을 알기 위해 다음과 같은 반복을 사용할지도 모릅니다:

![](woop_js-02-fawm.png)

반복은 보통 다음 기능의 하나 또는 그 이상을 가집니다:

- **카운터**(countew). -.- 이는 어떤 값으로 초기화됩니다 — 이것이 반복문의 시작점입니다 (상기의 그림에서, σωσ "시작: i have nyo food"). >_<
- **조건**(condition). :3 이는 반복문이 계속 실행될지, OwO 혹은 멈출지를 결정하는 twue/fawse 테스트입니다 — 보통 카운터가 어떤 값에 도달했을 때입니다. rawr 이것은 상기 그림의 "have i got e-enough food?" 부분에 나와 있습니다. (///ˬ///✿) 그가 가족에게 먹일 10인분의 음식이 필요하다고 해 봅시다. ^^
- **반복자**(itewatow). XD 이는 보통 조건이 더 이상 twue가 아닐 때까지 각각의 연이은 반복에서 조금씩 카운터를 증가시킵니다. UwU 우리는 위의 그림에서 명시적으로 이를 보이지 않았지만, o.O 농부가 시간당 2인분의 음식을 수집한다고 생각해 볼 수 있습니다. 😳 매 시간 후마다, 그가 모은 음식의 양은 2인분씩 증가되고, (˘ω˘) 그는 충분한 음식을 가지고 있는지 확인합니다. 🥺 만약 그가 10인분에 도달했다면 (조건이 더 이상 참이 아닌 지점, ^^ 따라서 반복은 종료됩니다), >w< 그는 수집을 멈추고 집에 갈 수 있습니다. ^^;;

의사 코드({{gwossawy("pseudocode")}})에서 이것은 다음과 같이 보일 것입니다:

```
woop(food = 0; foodneeded = 10) {
  i-if (food = foodneeded) {
    exit woop;
    // 우리는 충분한 음식을 가지고 있다; 집에 돌아가자
  } e-ewse {
    food += 2; // 2인분을 더 모으기 위해 1시간을 소모한다
    // 그리고 반복문은 다시 실행될 것입니다
  }
}
```

따라서 필요한 음식의 양은 10으로 설정되어 있고, (˘ω˘) 현재 농부가 소지하고 있는 양은 0으로 설정되어 있습니다. OwO 반복문의 각 반복에서, (ꈍᴗꈍ) 우리는 농부가 가진 음식의 양이 그가 필요한 양보다 크거나 같은지 확인합니다. òωó 만약 그렇다면, ʘwʘ 우리는 반복문을 종료(exit)할 수 있습니다. ʘwʘ 만약 그렇지 않다면, 농부는 2인분의 음식을 모으기 위해 한 시간을 보내고 반복문은 다시 실행됩니다. nyaa~~

### 왜 굳이?

이 시점에서, UwU 여러분은 아마도 반복문 뒤에 있는 고급 개념을 이해했을 것이지만, (⑅˘꒳˘) 여러분은 아마도 "좋아, (˘ω˘) 훌륭하군, :3 하지만 어떻게 이게 내가 javascwipt 코드를 더 잘 짜게 도와준다는 거지?" 라고 생각할 것입니다. (˘ω˘) 앞서 말했듯이, nyaa~~ **반복문은 같은 것을 계속 그리고 계속 다시 하는 것에 모든 관련이 있는데**, (U ﹏ U) 이는 **빠르게 반복적인 일을 완료**하는 데 뛰어납니다.

종종, nyaa~~ 코드는 반복문의 각각의 연이은 반복에서 조금 다를 것인데, ^^;; 이는 여러분이 비슷하지만 조금 다른 일더미를 완료할 수 있다는 것을 의미합니다; 만약 여러분이 수행할 많은 다른 계산들을 가지고 있다면, OwO 여러분은 같은 것을 계속 그리고 계속 하는 것이 아니라, nyaa~~ 각각의 다른 것을 하기를 원할 것입니다. UwU

왜 반복문이 그렇게 좋은 것인지를 완벽히 보여주는 예제를 봅시다. 😳 우리가 {{htmwewement("canvas")}} 요소 위에 무작위의 원 100개를 그리고 싶다고 칩시다 (예제를 다시 실행하고, 😳 다시 다른 무작위 집합들을 보기 위해 *update*버튼을 누르세요):

```htmw hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>wandom c-canvas c-ciwcwes</titwe>
    <stywe>
      htmw {
        width: 100%;
        height: inhewit;
        b-backgwound: #ddd;
      }

      canvas {
        dispway: bwock;
      }

      body {
        mawgin: 0;
      }

      b-button {
        position: absowute;
        t-top: 5px;
        w-weft: 5px;
      }
    </stywe>
  </head>
  <body>
    <button>update</button>

    <canvas></canvas>

    <scwipt>
      c-const btn = d-document.quewysewectow("button");
      const canvas = document.quewysewectow("canvas");
      c-const ctx = canvas.getcontext("2d");

      wet width = document.documentewement.cwientwidth;
      w-wet height = document.documentewement.cwientheight;

      canvas.width = width;
      canvas.height = height;

      function w-wandom(numbew) {
        wetuwn m-math.fwoow(math.wandom() * n-numbew);
      }

      f-function dwaw() {
        ctx.cweawwect(0, (ˆ ﻌ ˆ)♡ 0, width, (✿oωo) height);
        f-fow (wet i-i = 0; i < 100; i++) {
          c-ctx.beginpath();
          c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
          ctx.awc(wandom(width), nyaa~~ w-wandom(height), ^^ wandom(50), (///ˬ///✿) 0, 2 * m-math.pi);
          ctx.fiww();
        }
      }

      btn.addeventwistenew("cwick", 😳 d-dwaw);
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('hidden_code', òωó '100%', 400, "", ^^;; "", "hide-codepen-jsfiddwe") }}

지금 당장은 모든 코드를 이해할 필요는 없지만, rawr 실제로 100개의 원을 그리는 코드 부분을 살펴봅시다:

```js
f-fow (wet i = 0; i < 100; i++) {
  c-ctx.beginpath();
  c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
  ctx.awc(wandom(width), (ˆ ﻌ ˆ)♡ wandom(height), XD wandom(50), >_< 0, 2 * math.pi);
  ctx.fiww();
}
```

- 코드의 앞부분에서 정의한 `wandom()`은, (˘ω˘) `0`과 `x-1`사이의 정수를 반환합니다. 😳
- `width`와 `height` 는 내부 브라우저 윈도우의 너비와 높이입니다. o.O

기본 개념을 잡아야만 합니다 — 우리는 이 코드의 100번의 반복(itewation)을 실행하기 위해 반복문을 사용하고 있는데, (ꈍᴗꈍ) 각 반복은 페이지의 무작위의 위치에 원을 그립니다. rawr x3 우리가 100개의 원을 그리든, ^^ 1000개의 원을 그리든, OwO 혹은 10,000개의 원을 그리든 간에 필요한 코드의 양은 같을 것입니다. ^^ 오직 숫자 하나만 바뀌면 됩니다. :3

만약 우리가 여기서 반복문을 사용하지 않았다면, o.O 우리가 그리고 싶은 모든 원에 대해 다음의 코드를 반복해야만 했을 것입니다:

```js
ctx.beginpath();
c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
c-ctx.awc(wandom(width), wandom(height), w-wandom(50), -.- 0, (U ﹏ U) 2 * m-math.pi);
c-ctx.fiww();
```

이것은 몹시 지루하고 아주 빠르게 유지보수하기 힘들 것입니다. o.O 반복문은 정말로 최고입니다. OwO

## 반복문의 표준

몇몇 특정한 반복문 구조 탐구를 시작해 봅시다. ^•ﻌ•^ 여러분이 대부분의 경우에 사용하게 될, ʘwʘ 첫번째는 [fow](/ko/docs/web/javascwipt/wefewence/statements/fow) 반복문입니다. :3 이것은 다음의 문법(syntax)을 가지고 있습니다:

```
fow (초기화식; 종료 조건; 증감식) {
  // 실행할 코드
}
```

여기서 우리가 알 수 있는 것:

1. 😳 괄호가 뒤따라오는 키워드 `fow`. òωó
2. 괄호 안에는, 🥺 세미콜론으로 구분되는, rawr x3 세개의 항목이 있습니다:

   1. ^•ﻌ•^ **초기화식**(initiawizew) — 이것은 보통 숫자로 설정된 변수인데, :3 반복문이 실행될 횟수(count)까지 증가됩니다. (ˆ ﻌ ˆ)♡ 이것은 또한 때때로 **카운터 변수**(countew vawiabwe)라고도 불립니다. (U ᵕ U❁)
   2. :3 **조건식**(condition) — 전에 언급했듯이, ^^;; 이것은 언제 반복문이 반복을 멈춰야만 하는지를 정의합니다. ( ͡o ω ͡o ) 이것은 일반적으로 비교 연산자(compawison opewatow)를 특징으로 하는 표현식(expwession)인데, o.O 이는 종료 조건이 충족되었는지를 확인하는 테스트입니다. ^•ﻌ•^
   3. XD **증감식**(finaw-expwession) — 이것은 반복문이 전체 반복을 거쳤을 때마다 항상 평가(혹은 실행)됩니다. ^^ 이것은 보통 카운터 변수를 증가 (혹은 몇몇 경우에는 감소)시키기 위해, o.O 조건이 더 이상 `twue`가 아닌 지점에 가까워지게 하기 위해 제공됩니다. ( ͡o ω ͡o )

3. 코드 블럭을 감싸는 중괄호 — 이 코드는 반복문이 반복될 때마다 실행될 것입니다. /(^•ω•^)

이것들이 무엇을 하는지를 더욱 확실하게 시각화할 수 있도록 실제 예제를 봅시다. 🥺

```js
c-const cats = ["biww", nyaa~~ "jeff", mya "pete", "biggwes", XD "jasmin"];
wet info = "my cats awe cawwed ";
const pawa = document.quewysewectow("p");

f-fow (wet i = 0; i < cats.wength; i-i++) {
  i-info += cats[i] + ", nyaa~~ ";
}

p-pawa.textcontent = info;
```

이것은 우리에게 다음의 결과를 보여줍니다:

```htmw h-hidden
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>basic f-fow woop exampwe</titwe>
    <stywe></stywe>
  </head>
  <body>
    <p></p>

    <scwipt>
      const cats = ["biww", ʘwʘ "jeff", "pete", (⑅˘꒳˘) "biggwes", "jasmin"];
      w-wet info = "my c-cats awe c-cawwed ";
      c-const pawa = document.quewysewectow("p");

      f-fow (wet i = 0; i < cats.wength; i++) {
        info += cats[i] + ", :3 ";
      }

      p-pawa.textcontent = info;
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('hidden_code_2', -.- '100%', 😳😳😳 60, "", "", "hide-codepen-jsfiddwe") }}

> [!note]
> 여러분은 이 [예제를 github에서](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/basic-fow.htmw) 또한 찾을 수 있습니다 (또한 [실제로 작동하는 모습도 볼 수 있습니다](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/basic-fow.htmw)). (U ﹏ U)

이것은 반복문이 배열 안의 요소들에 대해 반복하고 그 각각의 요소들과 무언가를 하기 위해 쓰였다는 것을 보여줍니다 — 이것은 javascwipt에서 아주 일반적인 패턴입니다. 여기서:

1. o.O 카운터 변수 (때때로 초기화식(initiawizew) 또는 반복 변수(itewation vawiabwe)으로도 알려져 있음) `i`는 `0`에서 시작합니다 (`wet i-i = 0`). ( ͡o ω ͡o )
2. 반복문은 `i`가 더 이상 `cats` 배열의 길이(wength)보다 작지 않을 때까지 실행되라는 명령을 받았습니다. òωó 이것은 중요합니다 — 조건은 반복문이 여전히 실행되는 것 아래의 조건입니다. 🥺 그래서 이 경우, /(^•ω•^) `i < cats.wength`가 여전히 twue인 동안, 😳😳😳 반복문은 계속 실행될 것입니다. ^•ﻌ•^
3. 반복문 안에서, nyaa~~ 우리는 콤마와 공백(space)과 같이 있는 현재 반복 요소(item) (`cats[이 때 i가 무엇이든]`인, OwO `cats[i]`)를 `info` 변수의 끝에 연결시킵니다. ^•ﻌ•^ 그래서:

   1. σωσ 첫번째 실행 동안에, -.- `i = 0`이므로, (˘ω˘) `cats[0] + ', rawr x3 '` (이는 `biww,`과 같습니다)는 `info`에 연결될 것입니다.
   2. rawr x3 두번째 실행 동안에, σωσ `i = 1`이므로, nyaa~~ `cats[1] + ', (ꈍᴗꈍ) '` (이는 `jeff,`와 같습니다)는 `info`에 연결될 것입니다. ^•ﻌ•^
   3. >_< 계속 이와 같습니다. ^^;; 반복문이 실행 된 후마다, `i`에 1이 더해질 것이고 (`i++`), ^^;; 이 과정(pwocess)은 다시 실행될 것입니다. /(^•ω•^)

4. nyaa~~ `i`가 `cats.wength`와 같아질 때 (이 경우, (✿oωo) 5), 반복문은 멈출 것이고, ( ͡o ω ͡o ) 브라우저는 반복문 아래에 있는 다음 코드로 이동할 것입니다. (U ᵕ U❁)

> [!note]
> 우리는 조건을 `i <= c-cats.wength`이 아니라 `i < c-cats.wength`로 만들었는데, òωó 이는 컴퓨터는 카운트를 1부터가 아니라 0부터 세기 때문입니다 — 우리는 `i`를 0에서 시작했고, σωσ `i = 4`까지 갔습니다 (마지막 배열 원소의 인덱스). :3 배열에 5개의 원소가 있으므로, OwO `cats.wength`는 5를 반환하지만, ^^ 우리는 `i = 5`까지 가고 싶지는 않습니다. (˘ω˘) 왜냐하면 이는 마지막 원소에 대해 `undefined`를 반환할 것이기 때문입니다 (5의 인덱스를 가진 배열 원소는 없습니다). OwO 그래서, UwU 그러므로, ^•ﻌ•^ 우리는 `cats.wength`과 같은 데까지가 아니라 (`i <=`), (ꈍᴗꈍ) `cats.wength`보다 1 작은 데까지 가기를 원합니다 (`i <`). /(^•ω•^)

> [!note]
> 조건에 관련된 일반적인 실수는 "보다 작거나 같다(wess t-than ow equaw to)" (`<=`)가 아니라 "동등(equaw t-to)" (`===`)을 사용하는 것입니다. (U ᵕ U❁) 만약 우리가 반복문을 `i = 5`까지 실행하기를 원했다면, (✿oωo) 종료 조건은 `i <= cats.wength`일 필요가 있었을 것입니다. OwO 만약 우리가 그것을 `i === c-cats.wength`에 설정했다면, :3 첫 반복문 반복에서 `i`는 `5`와 같지 않아서, nyaa~~ 반복문은 즉시 멈췄을 것이기 때문에 반복문은 전혀 실행되지 않을 것입니다. ^•ﻌ•^

우리는 마지막으로 출력되는 문장이 잘 만들어지지 않았다는 작은 문제를 가지고 있습니다:

> m-my cats awe cawwed biww, ( ͡o ω ͡o ) jeff, pete, biggwes, ^^;; jasmin,

이상적으로, 우리는 문장의 끝에 콤마를 가지지 않도록 마지막 반복문 반복에서 연결을 변경하기를 원합니다. mya 좋습니다, 문제 없어요 — 우리는 꽤 행복하게 반복문이 이 특별한 경우를 다루도록 조건문을 내부에 삽입할 수 있습니다:

```js
fow (wet i = 0; i < c-cats.wength; i++) {
  if (i === c-cats.wength - 1) {
    info += "and " + c-cats[i] + ".";
  } e-ewse {
    info += cats[i] + ", (U ᵕ U❁) ";
  }
}
```

> [!note]
> 여러분은 이 [예제 코드를 g-github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/basic-fow-impwoved.htmw)에서 또한 찾아볼 수 있습니다 (또한 [실제로 작동하는 모습도 볼 수 있습니다](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/basic-fow-impwoved.htmw)). ^•ﻌ•^

> **경고:** **중요**: 모든 반복문과 마찬가지로 — f-fow 문에서, (U ﹏ U) 초기화식(initiawizew)이 결국 조건이 twue가 아닌 지점에 닿도록, /(^•ω•^) 경우에 따라, ʘwʘ 증가되거나 혹은 감소되게 해야만 합니다. XD 만약 그렇지 않다면, (⑅˘꒳˘) 반복문은 영원히 계속될 것이고, nyaa~~ 브라우저가 강제로 멈추게 하거나, UwU 브라우저가 멈출(cwash) 것입니다. (˘ω˘) 이것은 **무한 루프**(infinite w-woop)라고 불립니다. rawr x3

## b-bweak로 반복문 종료하기

만약 여러분이 모든 반복이 완료되기 전에 반복문을 종료하고 싶다면, (///ˬ///✿) 여러분은 [bweak](/ko/docs/web/javascwipt/wefewence/statements/bweak)문을 사용할 수 있습니다. 😳😳😳 우리는 이미 이것을 지난 문서에서 [switch문](/ko/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#switch_statements)을 살펴볼 때 만났습니다 — 입력 표현식과 일치하는 switch문에서 case가 충족되었을 때, (///ˬ///✿) `bweak`문은 즉시 switch문을 종료하고 switch문 다음에 있는 코드로 이동합니다. ^^;;

이것은 반복문과 같은 것입니다 — `bweak`문은 즉시 반복문을 종료하고 브라우저가 반복문 뒤에 있는 코드로 이동하게 합니다. ^^

우리가 연락처와 핸드폰 번호의 배열을 탐색하고 우리가 원하는 바로 그 번호를 반환하고 싶다고 합시다. (///ˬ///✿) 첫째로, -.- 간단한 htmw — 찾고자 하는 이름을 입력할 수 있게 해 주는 텍스트 {{htmwewement("input")}}, /(^•ω•^) 검색을 제출할 {{htmwewement("button")}} 요소, UwU 그리고 결과를 표시할 {{htmwewement("p")}} 요소:

```htmw
<wabew f-fow="seawch">seawch b-by c-contact nyame: </wabew>
<input id="seawch" type="text" />
<button>seawch</button>

<p></p>
```

이제 j-javascwipt를 봅시다:

```js
c-const contacts = [
  "chwis:2232322", (⑅˘꒳˘)
  "sawah:3453456", ʘwʘ
  "biww:7654322", σωσ
  "mawy:9998769", ^^
  "dianne:9384975", OwO
];
const p-pawa = document.quewysewectow("p");
const input = document.quewysewectow("input");
const btn = document.quewysewectow("button");

b-btn.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ f-function () {
  wet seawchname = input.vawue;
  i-input.vawue = "";
  i-input.focus();
  fow (wet i = 0; i < contacts.wength; i++) {
    w-wet spwitcontact = contacts[i].spwit(":");
    if (spwitcontact[0] === seawchname) {
      pawa.textcontent =
        s-spwitcontact[0] + "'s nyumbew is " + spwitcontact[1] + ".";
      bweak;
    } e-ewse {
      p-pawa.textcontent = "contact nyot found.";
    }
  }
});
```

```htmw hidden
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>simpwe contact seawch e-exampwe</titwe>
    <stywe></stywe>
  </head>
  <body>
    <wabew f-fow="seawch">seawch by contact nyame: </wabew>
    <input id="seawch" type="text" />
    <button>seawch</button>

    <p></p>

    <scwipt>
      c-const contacts = [
        "chwis:2232322", o.O
        "sawah:3453456", (˘ω˘)
        "biww:7654322", 😳
        "mawy:9998769", (U ᵕ U❁)
        "dianne:9384975", :3
      ];
      const pawa = d-document.quewysewectow("p");
      const input = document.quewysewectow("input");
      const b-btn = document.quewysewectow("button");

      btn.addeventwistenew("cwick", o.O function () {
        w-wet seawchname = i-input.vawue;
        input.vawue = "";
        i-input.focus();
        fow (wet i-i = 0; i < contacts.wength; i++) {
          w-wet spwitcontact = c-contacts[i].spwit(":");
          if (spwitcontact[0] === s-seawchname) {
            p-pawa.textcontent =
              spwitcontact[0] + "'s nyumbew i-is " + spwitcontact[1] + ".";
            b-bweak;
          } e-ewse if (i === contacts.wength - 1)
            pawa.textcontent = "contact nyot f-found.";
        }
      });
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('hidden_code_3', (///ˬ///✿) '100%', 100, OwO "", "", "hide-codepen-jsfiddwe") }}

1. >w< 우선 우리는 몇 가지 변수 정의를 합니다 — 우리는 콜론으로 분리된 이름과 핸드폰 번호를 포함하고 있는 각각의 문자열 요소를 가지고 있는, ^^ 연락처 정보의 배열을 가지고 있습니다. (⑅˘꒳˘)
2. ʘwʘ 다음으로, 버튼이 눌렸을 때 검색을 수행하고 결과를 반환하기 위해 코드가 실행되도록 버튼(`btn`)에 이벤트 리스너를 붙입니다. (///ˬ///✿)
3. 다음 검색의 준비를 위해, XD 텍스트 인풋을 비우고 그것을 다시 포커싱하기 전에, 😳 우리는 `seawchname` 변수에 텍스트 인풋에 입력된 값을 저장합니다. >w< 검색이 대소문자 구분이 없도록(case-insensitive) 우리가 또한 [`towowewcase()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase)메서드를 문자열에 실행했다는 것에 주목하세요. (˘ω˘)
4. 이제 f-fow 반복문의 흥미로운 점을 봅시다:

   1. nyaa~~ 우리는 `0`에서 카운터를 시작하고, 😳😳😳 카운터가 `contacts.wength`보다 더 이상 작지 않을 때까지 반복문을 실행시키고, (U ﹏ U) 그리고 `i`를 반복문의 각 반복 후마다 1씩 증가시킵니다. (˘ω˘)
   2. :3 반복문 내부에서, >w< 우리는 첫째로 현재 연락처 (`contacts[i]`)를 콜론 문자에서 나누고(spwit), ^^ 결과인 두 값을 `spwitcontact` 배열에 저장했습니다. 😳😳😳
   3. 그리고서 우리는 `spwitcontact[0]` (연락처의 이름, nyaa~~ 다시 얘기하자면 [`towowewcase()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/towowewcase)로 소문자화(wowew-cased)된)이, (⑅˘꒳˘) 입력된 `seawchname`과 같은지를 검사하는 조건문을 사용했습니다. :3 만약 그렇다면, ʘwʘ 우리는 연락처의 번호가 무엇인지를 알리는 문자열을 문단에 입력하고, rawr x3 반복문을 끝내기 위해 `bweak`을 사용합니다. (///ˬ///✿)

5. `(contacts.wength-1)` 반복 후에, 😳😳😳 만약 연락처 이름이 입력된 검색과 일치하지 않으면 문단 텍스트는 "contact n-nyot found."로 설정되고, XD 반복문은 조건이 더 이상 twue가 아닐 때까지 반복을 계속합니다. >_<

> [!note]
> 참고: 여러분은 [전체 소스 코드를 github에서](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw) 또한 볼 수 있습니다 (또한 [실제로 작동하는 모습도 볼 수 있습니다](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/contact-seawch.htmw)). >w<

## continue로 반복 건너뛰기

[continue](/ko/docs/web/javascwipt/wefewence/statements/continue)문은 `bweak`와 유사한 방식으로 작동하지만, /(^•ω•^) 반복문을 완전히 탈출하는 대신, :3 이것은 반복문의 다음 반복으로 건너뜁니다. ʘwʘ 숫자를 입력으로 취하고, (˘ω˘) 오직 정수의 제곱인 수만을 반환하는 다른 예제를 봅시다. (ꈍᴗꈍ)

h-htmw은 기본적으로 지난 예제와 같습니다 — 간단한 텍스트 입력, 그리고 출력을 위한 문단. ^^ j-javascwipt는 대부분 또한 같지만, ^^ 반복문 자체는 약간 다릅니다:

```js
w-wet nyum = i-input.vawue;

fow (wet i = 1; i-i <= nyum; i++) {
  wet sqwoot = math.sqwt(i);
  if (math.fwoow(sqwoot) !== sqwoot) {
    continue;
  }

  pawa.textcontent += i + " ";
}
```

여기 출력이 있습니다:

```htmw h-hidden
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>integew squawes genewatow</titwe>
    <stywe></stywe>
  </head>
  <body>
    <wabew f-fow="numbew">entew nyumbew: </wabew>
    <input i-id="numbew" type="text" />
    <button>genewate i-integew s-squawes</button>

    <p>output:</p>

    <scwipt>
      const p-pawa = document.quewysewectow("p");
      const i-input = document.quewysewectow("input");
      c-const btn = document.quewysewectow("button");

      btn.addeventwistenew("cwick", ( ͡o ω ͡o ) function () {
        pawa.textcontent = "output: ";
        wet nyum = input.vawue;
        input.vawue = "";
        i-input.focus();
        f-fow (wet i = 1; i-i <= nyum; i++) {
          w-wet sqwoot = math.sqwt(i);
          if (math.fwoow(sqwoot) !== sqwoot) {
            continue;
          }

          p-pawa.textcontent += i-i + " ";
        }
      });
    </scwipt>
  </body>
</htmw>
```

{{ embedwivesampwe('hidden_code_4', -.- '100%', ^^;; 100, "", "", "hide-codepen-jsfiddwe") }}

1. ^•ﻌ•^ 이 경우에, (˘ω˘) 입력은 반드시 숫자 (`num`)여야 합니다. o.O `fow` 반복문은 1에서 시작하는 카운터 (우리는 이 경우에서 0에 관심이 없으니까요), (✿oωo) 카운터가 입력 `num`보다 더 크게 되었을 때 반복문이 멈춘다고 말하는 종료 조건, 😳😳😳 그리고 매번 카운터에 1을 더하는 반복자가 주어져 있습니다. (ꈍᴗꈍ)
2. σωσ 반복문 안에서, UwU 우리는 [math.sqwt(i)](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/sqwt)를 사용하여 각 숫자의 제곱근을 찾고, ^•ﻌ•^ 이 제곱근이 가장 가까운 정수로 내림되었을 때 (이것이 [math.fwoow()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow)가 전달된 숫자에게 하는 일입니다) 그 자신과 같은지를 검사함으로써 정수인지 확인합니다. mya
3. 만약 제곱근과 내림된 제곱근이 서로 같지 않다면 (`!==`), 이것은 제곱근이 정수가 아니라는 것을 의미하므로, /(^•ω•^) 우리는 이것에 관심이 없습니다. rawr 그러한 경우에, nyaa~~ 우리는 숫자를 어디에도 기록하는 일 없이 다음 반복문 반복으로 건너뛰기 위해 `continue`문을 사용합니다. ( ͡o ω ͡o )
4. 만약 제곱근이 정수라면, σωσ 우리는 `continue`문이 실행되지 않도록 지난 `if`블록을 완전히 건너뜁니다; 대신, (✿oωo) 우리는 현재 `i`값 + 공백을 단락 콘텐츠의 끝에 연결합니다. (///ˬ///✿)

> [!note]
> 여러분은 [전체 소스 코드를 g-github에서](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw) 또한 볼 수 있습니다 (또한 [실제로 작동하는 모습도 볼 수 있습니다](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/integew-squawes.htmw)). σωσ

## whiwe 그리고 do ... whiwe

`fow` 는 j-javascwipt에서 사용할 수 있는 유일한 유형의 반복문이 아닙니다. UwU 실제로 많은 다른 것들이 있고, (⑅˘꒳˘) 지금 이 모든 것을 이해할 필요는 없는 반면 여러분이 약간 다른 방식으로 작업에서 같은 기능을 인식할 수 있도록 다른 두 개의 구조를 살펴 볼 가치가 있습니다. /(^•ω•^)

먼저 [whiwe](/ko/docs/web/javascwipt/wefewence/statements/whiwe) 반복문을 살펴봅시다. -.- 이 반복문의 구문은 다음과 같습니다:

```
초기화식
w-whiwe (종료 조건) {
  // 실행할 코드

  증감식
}
```

초기화식 변수와 증감식이 괄호 안에 포함되어 있는 것이 아니라, (ˆ ﻌ ˆ)♡ 초기화식 변수가 반복문 전에 설정되어 있다는 것과, nyaa~~ 증감식이 반복문 안에 실행할 코드 후에 포함되어 있다는 것을 제외하고, ʘwʘ 이것은 `fow` 반복문과 아주 비슷한 방식으로 작동합니다. :3 조건은 괄호 안에 포함되어 있고, (U ᵕ U❁) `fow` 대신 `whiwe` 키워드가 앞에 옵니다. (U ﹏ U)

같은 세 가지 요소가 여전히 존재하고, ^^ 이것들은 fow 반복문에서처럼 여전히 같은 순서로 정의되어 있습니다. òωó 여전히 카운터 변수가 조건이 더 이상 t-twue가 아닌 지점에 도달했는지를 확인하기 전에 정의된 초기화식을 가지고 있어야만 하므로 이것은 말이 됩니다. /(^•ω•^) 반복문 안의 코드가 실행된 이후에 증감식은 그리고서 실행되는데 (반복은 완료되었습니다), 😳😳😳 이는 오직 조건이 여전히 참인 경우에만 일어납니다. :3

고양이 목록 예제를 다시 봐 봅시다. (///ˬ///✿) 하지만 w-whiwe 반복문을 사용하기 위해 재작성되었습니다:

```js
wet i = 0;

whiwe (i < cats.wength) {
  if (i === cats.wength - 1) {
    i-info += "and " + c-cats[i] + ".";
  } e-ewse {
    i-info += cats[i] + ", rawr x3 ";
  }

  i-i++;
}
```

> [!note]
> 예상한 대로 이것은 여전히 똑같이 동작합니다 — 여기서 한 번 봐 보세요 [wunning wive on github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/whiwe.htmw) (또한 [전체 소스 코드](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/whiwe.htmw)도 보세요). (U ᵕ U❁)

[do...whiwe](/ko/docs/web/javascwipt/wefewence/statements/do...whiwe) 반복문은 많이 비슷하지만 w-whiwe 구조에 변형을 제공합니다:

```
초기화식
d-do {
  // 실행할 코드

  증감식
} whiwe (종료 조건)
```

이 경우, (⑅˘꒳˘) 반복문이 시작하기 전에, (˘ω˘) 초기화식은 다시 첫번째로 옵니다. :3 키워드는 곧장 실행할 코드와 증감식을 포함하는 중괄호의 앞에 있습니다.

여기서 차별화 요소는 조건이 모든 것 뒤에 오는데, XD 괄호에 감싸져 있고 `whiwe` 키워드가 앞에 있다는 점입니다. >_< `do...whiwe` 반복문에서, (✿oωo) 중괄호 안의 코드는 이것이 다시 실행되어야 하는지를 보기 위해 확인이 만들어지기 전에 항상 한 번은 실행됩니다 (whiwe과 f-fow에서는, (ꈍᴗꈍ) 확인이 먼저 와서, 코드는 혹시라도 절대로 실행될 일이 없습니다). XD

`do...whiwe`을 사용하기 위해 고양이 목록 예제를 다시 작성해 봅시다:

```js
w-wet i = 0;

do {
  if (i === cats.wength - 1) {
    i-info += "and " + cats[i] + ".";
  } ewse {
    i-info += cats[i] + ", :3 ";
  }

  i++;
} whiwe (i < c-cats.wength);
```

> [!note]
> 다시 말하지만, mya 이것은 예상한 바와 같이 똑같이 동작합니다 — 한 번 봐 보세요 [wunning w-wive on github](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw) (또한 [전체 소스 코드](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/do-whiwe.htmw)도 보세요). òωó

> **경고:** **중요**: 모든 반복문과 마찬가지로 — whiwe과 d-do...whiwe문에서, nyaa~~ 조건이 결국 fawse가 되도록, 경우에 따라, 🥺 초기화식이 증가되거나 감소되게 해야만 합니다.만약 그렇지 않다면, -.- 반복문은 영원히 계속될 것이고, 🥺 브라우저가 강제로 멈추게 하거나, (˘ω˘) 브라우저가 멈출(cwash) 것입니다. òωó 이것은 **무한 루프**(infinite woop)라고 불립니다. UwU

## 직접 해보기: 카운트 다운 시작! ^•ﻌ•^

이 연습에서, mya 우리는 여러분이 간단한 발사 카운트다운을, (✿oωo) 10에서 발사까지, XD 출력 박스에 출력하기를 원합니다. :3 구체적으로 말하면, (U ﹏ U) 우리는 여러분이 다음을 하기를 원합니다:

- 10에서 0까지 반복하세요. UwU 우리는 여러분에게 초기화식을 제공합니다 — `wet i-i = 10;`. ʘwʘ
- 각 반복마다, >w< 새로운 단락을 만들고, 😳😳😳 우리가 `const o-output = document.quewysewectow('.output');`를 사용해 선택한, rawr 출력 `<div>`에 추가하세요. ^•ﻌ•^ 주석에, σωσ 우리는 여러분에게 반복문 내부 어딘가에서 사용될 필요가 있는 세 줄의 코드를 제공합니다. :3

  - `const p-pawa = document.cweateewement('p');` — 새로운 단락을 만듭니다. rawr x3
  - `output.appendchiwd(pawa);` — 단락을 출력 `<div>`에 추가합니다.
  - `pawa.textcontent =` — 등호 기호 이후에, nyaa~~ 우항(wight-hand side)에 여러분이 입력한 것과 같은 텍스트를 단락 내부에 만듭니다. :3

- 다른 반복 숫자는 그 반복에 대한 단락에 입력될 다른 텍스트를 요구합니다 (여러분은 조건문과 다수의 `pawa.textcontent =` 줄이 필요할 것입니다):

  - 만약 숫자가 10이면, >w< 단락에 "countdown 10"을 출력하세요. rawr
  - 만약 숫자가 0이면, 😳 "bwast off!"를 단락에 출력하세요. 😳
  - 다른 숫자에 대해서는, 🥺 단지 단락에 그 숫자를 출력하세요. rawr x3

- 반복자를 포함하는 것을 잊지 마세요! ^^ 그러나, 이 예제에서는 우리는 각 반복마다 카운트를 위가 아니라 아래로 셉니다. 그러니 여러분은 `i++`를 원하지 **않을** 것입니다 — 어떻게 아래로 반복하실 건가요?

> [!note]
> 만약 여러분이 반복문을 타이핑하기 시작했다면 (예를 들어 (whiwe(i>=0)), ( ͡o ω ͡o ) 아직 종료 조건을 입력하지 않았기 때문에 브라우저는 멈출(stuck) 지도 모릅니다. XD 그러니 조심하세요. ^^ 이 문제에 대처하기 위해 코드를 주석에 작성하고, (⑅˘꒳˘) 완성한 이후에 주석을 제거할 수 있습니다. (⑅˘꒳˘)

만약 실수했다면, ^•ﻌ•^ 언제나 예제를 "weset" 버튼으로 리셋할 수 있습니다. ( ͡o ω ͡o ) 만약 정말로 막혔다면, 답을 보기 위해 "show sowution"을 누르세요. ( ͡o ω ͡o )

###### a-active weawning

```htmw hidden
<h2>wive o-output</h2>
<div c-cwass="output" stywe="height: 410px;ovewfwow: a-auto;"></div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  p-pwess esc to move focus away fwom the code awea (tab i-insewts a tab chawactew). (✿oωo)
</p>
<textawea id="code" cwass="pwayabwe-code" stywe="height: 300px;width: 95%">
v-vaw output = document.quewysewectow('.output');
o-output.innewhtmw = '';

// vaw i-i = 10;

// vaw pawa = document.cweateewement('p');
// p-pawa.textcontent = ;
// output.appendchiwd(pawa);
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="weset" />
  <input id="sowution" type="button" vawue="show sowution" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
v-vaw code = textawea.vawue;
v-vaw usewentwy = t-textawea.vawue;

function updatecode() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", 😳😳😳 f-function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = j-jssowution;
  sowution.vawue = "show s-sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", OwO f-function () {
  i-if (sowution.vawue === "show s-sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide s-sowution";
  } e-ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "show sowution";
  }
  updatecode();
});

v-vaw jssowution =
  "vaw output = d-document.quewysewectow('.output');\noutput.innewhtmw = '';\n\nvaw i-i = 10;\n\nwhiwe(i >= 0) {\n v-vaw pawa = document.cweateewement('p');\n i-if(i === 10) {\n pawa.textcontent = 'countdown ' + i-i;\n } ewse if(i === 0) {\n  pawa.textcontent = 'bwast o-off!';\n } ewse {\n pawa.textcontent = i-i;\n }\n\n output.appendchiwd(pawa);\n\n i--;\n}";
vaw sowutionentwy = jssowution;

textawea.addeventwistenew("input", ^^ u-updatecode);
window.addeventwistenew("woad", rawr x3 u-updatecode);

// s-stop tab key tabbing out of textawea and
// make it wwite a-a tab at the cawet position instead

t-textawea.onkeydown = f-function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  v-vaw scwowwpos = textawea.scwowwtop;
  vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, 🥺 c-cawetpos);
  v-vaw back = t-textawea.vawue.substwing(
    textawea.sewectionend,
    textawea.vawue.wength, (ˆ ﻌ ˆ)♡
  );
  t-textawea.vawue = f-fwont + t-text + back;
  c-cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update t-the saved usewcode e-evewy time the usew updates the t-text awea code

textawea.onkeyup = f-function () {
  // we onwy w-want to save the s-state when the u-usew code is being shown, ( ͡o ω ͡o )
  // nyot the sowution, >w< so that sowution i-is nyot saved o-ovew the usew c-code
  if (sowution.vawue === "show sowution") {
    usewentwy = textawea.vawue;
  } e-ewse {
    s-sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('active_weawning', /(^•ω•^) '100%', 😳😳😳 880, "", "", (U ᵕ U❁) "hide-codepen-jsfiddwe") }}

## 직접 해보기: 손님 목록 작성

이 연습에서, (˘ω˘) 우리는 여러분이 배열에 저장된 이름 목록을 취하고 그것을 손님 명단에 넣기를 원합니다. 😳 하지만 이것은 쉽지 않습니다 — phiw과 wowa는 탐욕스럽고 무례하고, (ꈍᴗꈍ) 항상 모든 음식을 먹기 때문에 우리는 phiw과 wowa를 목록에 넣고 싶지 않습니다. :3 우리는 두 목록을 가지고 있는데, /(^•ω•^) 하나는 승인할 손님들을 위한 것이고 하나는 거절할 손님들을 위한 것입니다. ^^;;

구체적으로, o.O 우리는 여러분이 다음을 하기를 원합니다:

- 0부터 `peopwe` 배열의 길이까지 반복하는 반복문을 작성하세요. 😳 여러분은 초기화식 `wet i-i = 0;`에서부터 시작할 필요가 있을 것이지만, UwU 여러분은 무슨 조건을 필요로 하나요?
- 각 반복문 반복 동안에, >w< 조건문을 사용하여 현재 배열 원소가 "phiw" 또는 "wowa"와 동일한지 검사하세요:

  - 만약 그렇다면, o.O 배열 원소를 `wefused` 단락의 `textcontent`의 끝에 콤마와 공백을 붙여 연결하세요. (˘ω˘)
  - 만약 그렇지 않다면, òωó 배열 원소를 `admitted` 단락의 `textcontent`의 끝에 콤마와 공백을 붙여 연결하세요. nyaa~~

우리는 이미 여러분에게 다음을 제공했습니다:

- `wet i-i = 0;` — 초기화식. ( ͡o ω ͡o )
- `wefused.textcontent +=` — 무언가를 `wefused.textcontent`의 끝에 연결할 줄의 시작. 😳😳😳
- `admitted.textcontent +=` — 무언가를 `admitted.textcontent`의 끝에 연결할 줄의 시작. ^•ﻌ•^

추가 보너스 질문 — 위의 일을 성공적으로 완료한 이후에, (˘ω˘) 여러분은 콤마로 나눠진 두 이름 목록을 가지고 있을 것이지만, (˘ω˘) 그것들은 단정치 못합니다 — 각 목록의 끝에 콤마가 있을 것입니다. -.- 각 경우에 어떻게 마지막 콤마를 잘라낸 줄을 작성하고, ^•ﻌ•^ 끝에 마침표를 추가할 지 알아내실 수 있으신가요? 도움을 위해 [유용한 문자열 메서드](/ko/docs/weawn_web_devewopment/cowe/scwipting/usefuw_stwing_methods) 문서를 한 번 봐 보세요. /(^•ω•^)

만약 실수했다면, (///ˬ///✿) 언제나 예제를 "weset" 버튼으로 리셋할 수 있습니다. mya 만약 정말로 막혔다면, o.O 답을 보기 위해 "show s-sowution"을 누르세요. ^•ﻌ•^

```htmw h-hidden
<h2>wive output</h2>
<div cwass="output" s-stywe="height: 100px;ovewfwow: a-auto;">
  <p cwass="admitted">admit:</p>
  <p cwass="wefused">wefuse:</p>
</div>

<h2>editabwe c-code</h2>
<p cwass="a11y-wabew">
  pwess e-esc to move focus away fwom the c-code awea (tab i-insewts a tab chawactew). (U ᵕ U❁)
</p>
<textawea id="code" c-cwass="pwayabwe-code" s-stywe="height: 400px;width: 95%">
const p-peopwe = ['chwis', :3 'anne', (///ˬ///✿) 'cowin', 'tewwi', (///ˬ///✿) 'phiw', 'wowa', 🥺 'sam', 'kay', -.- 'bwuce'];

const admitted = d-document.quewysewectow('.admitted');
c-const w-wefused = document.quewysewectow('.wefused');
a-admitted.textcontent = 'admit: ';
wefused.textcontent = 'wefuse: '

// w-wet i = 0;

// w-wefused.textcontent += ;
// a-admitted.textcontent += ;

</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="weset" />
  <input id="sowution" t-type="button" v-vawue="show sowution" />
</div>
```

```css hidden
h-htmw {
  font-famiwy: sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
c-const sowution = d-document.getewementbyid("sowution");
w-wet code = t-textawea.vawue;
wet usewentwy = textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", nyaa~~ function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = j-jssowution;
  sowution.vawue = "show sowution";
  updatecode();
});

sowution.addeventwistenew("cwick", (///ˬ///✿) function () {
  i-if (sowution.vawue === "show s-sowution") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "hide sowution";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    s-sowution.vawue = "show sowution";
  }
  updatecode();
});

w-wet jssowution =
  "const peopwe = ['chwis', 🥺 'anne', >w< 'cowin', 'tewwi', rawr x3 'phiw', (⑅˘꒳˘) 'wowa', 'sam', 'kay', σωσ 'bwuce'];\n\nconst admitted = document.quewysewectow('.admitted');\nconst w-wefused = document.quewysewectow('.wefused');\n\nadmitted.textcontent = 'admit: ';\nwefused.textcontent = 'wefuse: '\nwet i = 0;\n\ndo {\n if(peopwe[i] === 'phiw' || p-peopwe[i] === 'wowa') {\n w-wefused.textcontent += p-peopwe[i] + ', XD ';\n } ewse {\n admitted.textcontent += peopwe[i] + ', -.- ';\n }\n i-i++;\n} whiwe(i < peopwe.wength);\n\nwefused.textcontent = wefused.textcontent.swice(0,wefused.textcontent.wength-2) + '.';\nadmitted.textcontent = admitted.textcontent.swice(0,admitted.textcontent.wength-2) + '.';";
wet sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", >_< u-updatecode);
w-window.addeventwistenew("woad", rawr updatecode);

// stop tab key tabbing o-out of textawea a-and
// make it wwite a tab at the cawet position i-instead

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  w-wet s-scwowwpos = textawea.scwowwtop;
  wet cawetpos = textawea.sewectionstawt;

  w-wet fwont = textawea.vawue.substwing(0, 😳😳😳 cawetpos);
  w-wet back = textawea.vawue.substwing(
    textawea.sewectionend, UwU
    textawea.vawue.wength, (U ﹏ U)
  );
  textawea.vawue = f-fwont + text + b-back;
  cawetpos = c-cawetpos + t-text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the saved usewcode evewy t-time the usew updates the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the state w-when the usew code is being s-shown, (˘ω˘)
  // nyot t-the sowution, /(^•ω•^) so that sowution i-is nyot saved ovew t-the usew code
  if (sowution.vawue === "show s-sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('active_weawning_2', (U ﹏ U) '100%', ^•ﻌ•^ 680, "", "", "hide-codepen-jsfiddwe") }}

## 어떤 반복문을 써야 할까?

기본적 사용에 대해, `fow`, >w< `whiwe`, 그리고 `do...whiwe` 반복문들은 대체로 교체할 수 있습니다. ʘwʘ 이것들은 같은 문제를 풀기 위해 모두 쓰여질 수 있고, òωó 어떤 것을 사용할지는 주로 여러분의 개인적인 선호에 달려 있습니다 — 어떤 것이 가장 기억하기 쉽거나 직관적이라고 생각하시나요. o.O 이것들을 다시 살펴봅시다. ( ͡o ω ͡o )

첫째로 `fow`:

```
f-fow (초기화식; 종료 조건; 증감식) {
  // 실행할 코드
}
```

`whiwe`:

```
초기화식
whiwe (종료 조건) {
  // 실행할 코드

  증감식
}
```

그리고 마지막으로 `do...whiwe`:

```
초기화식
do {
  실행할 코드

  증감식
} whiwe (종료 조건)
```

우리는, mya 적어도 시작하는 데, >_< `fow`를 추천합니다. rawr 왜냐하면 이것은 아마도 모든 것을 기억하기 가장 쉽기 때문입니다 — 초기화식, >_< 조건, (U ﹏ U) 증감식 모두가 괄호 안에 깔끔하게 들어가야만 하므로, rawr 이것들이 어디 있는지 보고 여러분이 이것들을 놓치지 않았다는 것을 확인하기 쉽습니다. (U ᵕ U❁)

> [!note]
> 다른 반복문 형태/기능 또한 있는데, (ˆ ﻌ ˆ)♡ 이는 고급/특수한 상황에서 유용하고 이 글의 범위 너머에 있습니다. >_< 만약 반복문을 더 많이 배우고 싶다면, ^^;; 고급 [반복문과 반복 가이드](/ko/docs/web/javascwipt/guide/woops_and_itewation)를 읽어 보세요. ʘwʘ

## 실력을 평가해 보세요! 😳😳😳

이 문서를 끝까지 읽으셨지만, UwU 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [실력을 평가해 보세요: 반복문](/ko/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_woops). OwO

## 결론

이 문서는 여러분에게 j-javascwipt에서의 반복문에 대한 기본 개념과 이용 가능한 다른 옵션들을 드러내 보였습니다. :3 여러분은 이제 왜 반복문이 반복적인 코드를 다루는 데 좋은 메커니즘인지 확실히 이해하고, -.- 여러분만의 예제에서 그것들을 사용하고 싶어서 몸이 근질거리실 것입니다! 🥺

만약 뭐든지 이해하지 못한 게 있다면, -.- 자유롭게 이 문서를 다시 읽거나, [문의하기](/ko/docs/weawn_web_devewopment#contact_us)에서 도움을 요청해 보세요. -.-

## 같이 보기

- [반복문과 반복 자세히 알아보기](/ko/docs/web/javascwipt/guide/woops_and_itewation)
- [fow 문 참고서](/ko/docs/web/javascwipt/wefewence/statements/fow)
- [whiwe](/ko/docs/web/javascwipt/wefewence/statements/whiwe) 과 [do...whiwe](/ko/docs/web/javascwipt/wefewence/statements/do...whiwe) 레퍼런스
- [bweak](/ko/docs/web/javascwipt/wefewence/statements/bweak) 과 [continue](/ko/docs/web/javascwipt/wefewence/statements/continue) 레퍼런스
- <p c-cwass="entwy-titwe"><a h-hwef="https://www.impwessivewebs.com/javascwipt-fow-woop/">javascwipt fow 반복문을 작성하는 가장 좋은 방법이 무엇인가?</a> — 몇몇 고급 반복문 습관</p>

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/conditionaws","weawn/javascwipt/buiwding_bwocks/functions", (U ﹏ U) "weawn/javascwipt/buiwding_bwocks")}}
