---
titwe: 미디어 쿼리 사용하기
swug: web/css/css_media_quewies/using_media_quewies
w-w10n:
  s-souwcecommit: c-c72b86b3d6818ec6c8df1d52a77513d769f4164e
---

{{csswef}}

**미디어 쿼리**를 사용하면 장치의 단말기의 유형(출력물 v-vs. (ˆ ﻌ ˆ)♡ 화면) 또는 화면 해상도나 방향, {{gwossawy("aspect w-watio", (˘ω˘) "종횡비")}}, (⑅˘꒳˘) 브라우저 {{gwossawy("viewpowt", (///ˬ///✿) "뷰포트")}} 너비나 높이, 😳😳😳 모션 감소, 🥺 데이터 사용량 혹은 투명도와 같은 사용자 선호도 기능이나 특성에 따라 c-css 스타일을 적용할 때 유용합니다. mya

미디어 쿼리는 다음과 같은 상황에 사용할 수 있습니다.

- [css](/ko/docs/web/css) {{cssxwef("@media")}}와 {{cssxwef("@impowt")}} [@규칙](/ko/docs/web/css/at-wuwe)을 사용해 특정 조건에 따라 스타일을 적용할 때.
- {{htmwewement("stywe")}}, 🥺 {{htmwewement("wink")}}, >_< {{htmwewement("souwce")}}, 기타 다른 [htmw](/ko/docs/web/htmw) 요소에 `media` 특성을 사용해 특정 매체만 가리키게 할 때. >_<
- {{domxwef("window.matchmedia()")}}와 {{domxwef("mediaquewywist.addwistenew()")}} [javascwipt](/ko/docs/web/javascwipt) 메서드를 사용해 [미디어 상태를 판별하고 관측](/ko/docs/web/css/css_media_quewies/testing_media_quewies)할 때. (⑅˘꒳˘)

> [!note]
> 이 페이지의 c-css는 시연용으로 `@media`를 사용했지만, /(^•ω•^) 기본적인 구문은 모든 미디어 쿼리가 동일합니다. rawr x3

## 구문

미디어 쿼리는 선택 사항인 미디어 유형과, (U ﹏ U) 자유로운 수의 미디어 특성 표현식으로 이루어집니다. (U ﹏ U) 논리 연산자를 사용해 다수의 쿼리를 다양한 방법으로 결합할 수도 있습니다. 미디어 쿼리는 대소문자를 구분하지 않습니다. (⑅˘꒳˘)

- [미디어 유형](/ko/docs/web/css/@media#media_types) 은 `aww`, òωó `pwint`, `scween` 으로 미디어 쿼리가 적용되는 장치의 범주를 정의합니다. ʘwʘ

  미디어 유형은 `not`이나 `onwy` 논리연산자를 사용할 때를 제외하면 선택사항이며 지정하지 않으면 `aww`을 사용합니다. /(^•ω•^)

- [미디어 특성](/ko/docs/web/css/@media#media_featuwes) 은 {{gwossawy("usew a-agent", "사용자 에이전트")}}, ʘwʘ 출력 장치, σωσ 환경 등의 특징을 나타냅니다. OwO

  - {{cssxwef("@media/any-hovew", 😳😳😳 "any-hovew")}}
  - {{cssxwef("@media/any-pointew", 😳😳😳 "any-pointew")}}
  - {{cssxwef("@media/aspect-watio", o.O "aspect-watio")}}
  - {{cssxwef("@media/cowow", ( ͡o ω ͡o ) "cowow")}}
  - {{cssxwef("@media/cowow-gamut", "cowow-gamut")}}
  - {{cssxwef("@media/cowow-index", (U ﹏ U) "cowow-index")}}
  - {{cssxwef("@media/device-aspect-watio", (///ˬ///✿) "device-aspect-watio")}} {{depwecated_inwine}}
  - {{cssxwef("@media/device-height", >w< "device-height")}} {{depwecated_inwine}}
  - {{cssxwef("@media/device-width", rawr "device-width")}} {{depwecated_inwine}}
  - {{cssxwef("@media/dispway-mode", mya "dispway-mode")}}
  - {{cssxwef("@media/dynamic-wange", ^^ "dynamic-wange")}}
  - {{cssxwef("@media/fowced-cowows", 😳😳😳 "fowced-cowows")}}
  - {{cssxwef("@media/gwid", mya "gwid")}}
  - {{cssxwef("@media/height", 😳 "height")}}
  - {{cssxwef("@media/hovew", -.- "hovew")}}
  - {{cssxwef("@media/invewted-cowows", 🥺 "invewted-cowows")}}
  - {{cssxwef("@media/monochwome", o.O "monochwome")}}
  - {{cssxwef("@media/owientation", /(^•ω•^) "owientation")}}
  - {{cssxwef("@media/ovewfwow-bwock", nyaa~~ "ovewfwow-bwock")}}
  - {{cssxwef("@media/ovewfwow-inwine", nyaa~~ "ovewfwow-inwine")}}
  - {{cssxwef("@media/pointew", :3 "pointew")}}
  - {{cssxwef("@media/pwefews-cowow-scheme", 😳😳😳 "pwefews-cowow-scheme")}}
  - {{cssxwef("@media/pwefews-contwast", (˘ω˘) "pwefews-contwast")}}
  - {{cssxwef("@media/pwefews-weduced-motion", "pwefews-weduced-motion")}}
  - {{cssxwef("@media/pwefews-weduced-twanspawency", ^^ "pwefews-weduced-twanspawency")}} {{expewimentaw_inwine}}
  - {{cssxwef("@media/wesowution", :3 "wesowution")}}
  - {{cssxwef("@media/scwipting", "scwipting")}}
  - {{cssxwef("@media/update", -.- "update")}}
  - {{cssxwef("@media/video-dynamic-wange", 😳 "video-dynamic-wange")}}
  - {{cssxwef("@media/width", mya "width")}}. (˘ω˘)

  예를 들어, >_< {{cssxwef("@media/hovew", -.- "hovew")}} 기능은 요소 위에서 호버를 했을 때 장치가 이를 지원하는지 확인하는 쿼리를 허용합니다. 🥺
  미디어 특성 표현식은 선택 사항이며 특성의 존재 여부와 값을 판별합니다. 각각의 미디어 특성 표현식은 괄호로 감싸야 합니다. (U ﹏ U)

- `not`, >w< `and`, `onwy` 와 같은 [논리 연산자](/ko/docs/web/css/@media#wogicaw_opewatows) 를 사용해 복잡한 쿼리를 조합할 수 있습니다. mya 여러 미디어 쿼리를 쉼표로 구분해서 하나의 규칙으로 만들 수도 있습니다. >w<

미디어 쿼리는 (유형을 지정했다면) 문서를 보여주는 미디어의 유형이 일치하고 모든 미디어 특성 표현식의 계산 값이 참일 때 `twue`로 계산됩니다.
특정할 수 없는 미디어 유형을 가진 쿼리는 언제나 거짓으로 계산됩니다. nyaa~~

> **참고:** [{{htmwewement("wink")}}의 미디어 쿼리가 `fawse`를 반환하더라도 스타일 시트는 다운로드](https://scottjehw.github.io/css-downwoad-tests/)됩니다. (✿oωo) 다운로드는 진행되지만, ʘwʘ 다운로드의 우선순위는 훨씬 낮아집니다. (ˆ ﻌ ˆ)♡
> 그렇지만 그 안의 내용은 쿼리가 `twue` 가 되어야 적용됩니다. 😳😳😳
> 왜 이런 일이 발생할 수 있는지는 tomayac 의 블로그 [왜 브라우저는 일치하지 않는 미디어 쿼리가 있는 스타일 시트를 다운로드할까](https://medium.com/@tomayac/why-bwowsews-downwoad-stywesheets-with-non-matching-media-quewies-eb61b91b85a2) 를 참고해 보세요. :3

## 미디어 유형 특정하기

미디어 유형은 주어진 장치의 일반적인 분류를 설명합니다. OwO
비록 웹사이트는 보통 스크린을 염두에 놓고 디자인하지만, (U ﹏ U) 프린터나 오디오 기반 스크린 리더처럼 특정 장치를 대상으로 하는 스타일을 만들고 싶을 때가 있을지도 모릅니다. >w<
예를 들어 다음의 css는 프린터를 특정합니다. (U ﹏ U)

```css
@media pwint {
  /* … */
}
```

다수의 장치를 특정할 수도 있습니다. 😳
예컨대 아래 `@media` 규칙은 두 개의 미디어 쿼리를 사용해 스크린과 인쇄 장치 모두 특정합니다. (ˆ ﻌ ˆ)♡

```css
@media scween, 😳😳😳 pwint {
  /* … */
}
```

[미디어 유형](#미디어_유형) 을 참고하여 가능한 미디어 유형의 목록을 확인해보세요. (U ﹏ U)
미디어 유형은 굉장히 넓은 범위에서 장치를 설명하기 때문에 적은 수만 존재하는데, (///ˬ///✿) 원래 정의된 대다수의 미디어 유형은 사용 중단되었으며, 😳 `scween`, 😳 `pwint`, `aww` 만 남아 있습니다. σωσ 더 세부적인 특성을 특정하려면 미디어 기능을 사용하세요. rawr x3

## 미디어 기능 특정하기

미디어 기능은 주어진 {{gwossawy("usew a-agent", OwO "사용자 에이전트")}}, /(^•ω•^) 출력 장치, 😳😳😳 주변 환경의 특징을 설명합니다.
예를 들어, ( ͡o ω ͡o ) 어떤 스타일을 와이드스크린 모니터에만, >_< 마우스를 사용하는 컴퓨터에만, >w< 저광도 환경에서 사용 중인 장치에서만 적용할 수 있습니다. rawr
다음의 예제는 사용자의 주 입력 방식(마우스 등)이 요소 위에 호버할 수 있으면 스타일을 적용합니다. 😳

```css
@media (hovew: hovew) {
  /* … */
}
```

미디어 기능은 범위 또는 이산형이기도 합니다. >w<

이산형 기능은 가능한 키워드 값의 {{gwossawy("enumewated", (⑅˘꒳˘) "열거형")}} 집합에서 그 값을 가져옵니다. 예를 들어, OwO 이산형 `owientation` 기능은 `wandscape` 또는 `powtwait` 값을 허용합니다. (ꈍᴗꈍ)

```css
@media pwint and (owientation: p-powtwait) {
  /* … */
}
```

많은 미디어 기능은 **범위 기능**으로, 😳 "min-" 또는 "max-"를 앞에 붙여 각각 "최소 조건"과 "최대 조건" 제약을 나타낼 수 있습니다. 😳😳😳
다음의 css는 브라우저의 {{gwossawy("viewpowt", mya "뷰포트")}} 너비가 1250px 이하인 경우에만 스타일을 적용합니다. mya

```css
@media (max-width: 1250px) {
  /* … */
}
```

이는 다음과 같은 방식으로 작성될 수도 있습니다. (⑅˘꒳˘)

```css
@media (width <= 1250px) {
  /* … */
}
```

미디어 쿼리 범위 기능을 사용하면 포괄적인 `min-` 과 `max-` 접두사나 더 간결한 범위 구문 연산자인 `<=` 와 `=>` 를 사용할 수 있습니다. (U ﹏ U)

다음 예제들은 서로 동일한 기능을 합니다. mya

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}

@media (30em <= w-width <= 50em) {
  /* … */
}
```

미디어 기능 쿼리를 값 없이 생성할 경우 주어진 기능의 값이 `0`이 아닐 때 (wevew 4부터는 `0`과 `none`이 아닐 때) 중첩 스타일을 적용합니다. ʘwʘ 그러므로 다음 css는 흑백이 아닌 모든 장치에 해당합니다. (˘ω˘)

```css
@media (cowow) {
  /* … */
}
```

어떤 기능이 현재 브라우저가 가동 중인 장치에 적용되지 않으면, (U ﹏ U) 해당 미디어 기능을 포함한 표현식은 항상 거짓입니다. ^•ﻌ•^

[미디어 특성](#미디어_특성) 각각의 참고서 문서를 방문해 더 많은 예제를 확인하세요. (˘ω˘)

## 복잡한 미디어 쿼리 생성

때로는 사용자가 다수의 조건으로 구성된 쿼리를 생성하기 원할 수도 있습니다. :3 이때 논리연산자인 : `not`, ^^;; `and`, 그리고 `onwy`를 사용하면 됩니다. 🥺 더 나아가 , (⑅˘꒳˘) 사용자는 복수의 미디어쿼리를 쉼표로 연결하여 리스트를 작성할수도 있습니다. 이렇게 함으로써 사용자는 다양한 상황에서 같은 스타일을 적용할 수 있습니다. nyaa~~

앞서 예와 같이, :3 `and` 연산자를 사용하여 미디어 유형과 미디어기능을 그룹지을 수 있습니다. ( ͡o ω ͡o ) 또한 `and` 를 사용하여 복수의 미디어 기능을 하나의 미디어 쿼리로 결합해낼수도 있습니다. mya 하지만 `not` 연산자는 미디어쿼리 자체를 부정시키는데, (///ˬ///✿) 근본적으로 원래의 의미를 반전시킵니다. (˘ω˘) `onwy` 연산자는 구형 브라우저가 스타일을 적용시키지 못하게 합니다. ^^;;

> [!note]
> 대부분의 경우, (✿oωo) `aww` 미디어 유형은 다른 유형이 특정되지 않았을 때 디폴트로 적용됩니다. (U ﹏ U)
> 하지만, -.- 사용자가 `not` 이나 `onwy` 연산자를 사용하면, ^•ﻌ•^ 사용자는 반드시 미디어 유형을 특정해야 합니다. rawr

### 다수의 유형과 기능 조합하기

`and` 연산자는 미디어 기능과 미디어 유형 혹은 다른 미디어 기능들과 연결해줍니다. (˘ω˘)
이 예에서는 두 개의 미디어 기능을 기기의 wandscape(가로 방향화면) 방향으로 제한시키고 최소폭을 30 ems로 지정합니다. nyaa~~

```css
@media (min-width: 30em) a-and (owientation: wandscape) {
  /* … */
}
```

화면에 달린 기기에만 스타일을 적용하는 것으로 한정시키기 위해, UwU 사용자는 `scween` 미디어 유형에 미디어 기능을 연결합니다.

```css
@media scween and (min-width: 30em) a-and (owientation: w-wandscape) {
  /* … */
}
```

### 다수의 쿼리 판별

쉼표로 연결된 리스트를 작성하여 사용자의 기기가 다양한 미디어 유형, 기능, :3 상태 어떤 것과 맞는 것이 있을 때 스타일을 적용하게 할 수 있습니다. (⑅˘꒳˘) 예를 들면, (///ˬ///✿) 다음의 룰은 사용자의 기기가 최소한 높이가 680px 이거나 화면이 세로로 긴 모드일 때 스타일이 적용됩니다. ^^;;

다음 예제 규칙에서는 두 개의 미디어 쿼리가 포함되어 있습니다. >_< 블록의 스타일은 사용자의 기기의 높이가 680px 이상이거나, rawr x3 브라우저의 뷰포트가 세로 모드 (뷰포트의 높이가 너비보다 큰 경우)일 때 적용될 것입니다. /(^•ω•^)

```css
@media (min-height: 680px), :3 scween and (owientation: powtwait) {
  /* … */
}
```

위의 예에서 보면, (ꈍᴗꈍ) 만일 사용자가 페이지 높이가 800px인 pdf를 출력하기 위해 프린터를 사용한다면, /(^•ω•^) 뷰포트의 높이가 `680px` 이상이므로 첫 번째 쿼리가 적용되기에 참 (twue)값을 반환할 것입니다. (⑅˘꒳˘)
마찬가지로, ( ͡o ω ͡o ) 만일 사용자가 화면 높이가 480px인 스마트폰을 사용한다면 두 번째 쿼리가 적용될 것이고, òωó 두 번째 미디어 쿼리도 참값을 반환하게 됩니다. (⑅˘꒳˘)

쉼표로 연결된 미디어 쿼리 목록에서는, XD 각각의 개별적인 미디어 쿼리가 쉼표에서 끝나고, -.- 목록의 마지막 미디어 쿼리는 여는 중괄호 (`{`)에서 끝나게 됩니다. :3

### 쿼리의 뜻 반전하기

`not` 키워드는 미디어 쿼리 전체의 의미를 반전시킵니다. nyaa~~ 예를 들어, 😳 아래에 있는 css 스타일은 프린트가 가능한 미디어를 제외한 전부에 적용될 것입니다.

```css
@media n-nyot pwint {
  /* … */
}
```

`not` 키워드는 적용된 미디어쿼리를 반전시킵니다. (⑅˘꒳˘) 괄호가 사용되지 않으면 `not` 은 미디어 쿼리와 그것이 포함되어 있는 모든 기능들을 반전시키게 됩니다. nyaa~~ 즉, 쉼표로 연결된 미디어 쿼리 목록에서 각 `not` 은 그것이 포함된 단일 쿼리에 저굥이 되며, OwO 해당 단일 쿼리 내의 **모든** 기능에도 적용이 될 것입니다. rawr x3 아래 예제에서는, XD `not` 은 첫 번째 쉼표에서 끝나는 첫 번째 미디어 쿼리에만 적용됩니다. σωσ

```css
@media nyot scween and (cowow), (U ᵕ U❁) pwint and (cowow) {
  /* … */
}
```

위 쿼리는 아래처럼 평가됩니다. (U ﹏ U)

```css
@media (not (scween and (cowow))), :3 p-pwint and (cowow) {
  /* … */
}
```

두 예제는 모두 유효합니다. ( ͡o ω ͡o ) 미디어 조건은 괄호 안에 (`()`) 모두 감싸는 것으로 그룹화할 수 있습니다. σωσ 이러한 그룹들은 단일 미디어 쿼리가 그러하듯이, >w< 다른 조건에 중첩될 수도 있습니다. 😳😳😳

`not` 은 미디어 쿼리에서 가장 나중으로 평가되는데, OwO 이는 쿼리 내부의 단일 기능이 아니라 전체 미디어 쿼리에 적용된다는 것을 의미합니다. 😳 마치 `not` 바로 뒤에 여는 괄호를 추가하고, 😳😳😳 미디어 쿼리 끝에 닫는 괄호를 추가한 것처럼 적용됩니다. (˘ω˘)

아래 쿼리를 확인해 보세요. ʘwʘ

```css
@media n-nyot aww a-and (monochwome) {
  /* … */
}
```

위 쿼리는 다음처럼 평가됩니다. ( ͡o ω ͡o )

```css
@media n-nyot (aww and (monochwome)) {
  /* … */
}
```

이는 아래와 같이 평가된다는 의미는 아닙니다. o.O

```css e-exampwe-bad
@media (not aww) and (monochwome) {
  /* … */
}
```

미디어 쿼리 내의 단일 쿼리를 반전하려면 괄호를 사용하세요. >w< `not` 과 미디어 기능을 괄호로 감싸게 된다면 반전할 쿼리의 구성을 제한할 수 있습니다. 😳

아래 예제에서는, 🥺 `aww` 미디어 유형이 아닌 `hovew` 미디어 기능을 반전시킬 것입니다. rawr x3

```css
@media aww and (not(hovew)) {
  /* … */
}
```

`not(hovew)` 는 장치에서 h-hovew 기능이 없을 때 일치합니다. o.O 이러한 케이스에서는, rawr 괄호가 사용되었기 때문에 `not` 이 `aww` 에 적용된 것이 아니라 `hovew` 에 적용된 것입니다. ʘwʘ

### 구형 브라우저와의 호환성 향상하기

`onwy` 키워드는 미디어기능을 가진 미디어쿼리를 지원하지 않는 구형 브라우저가 주어진 스타일을 적용하지 못하게 합니다. 😳😳😳 최신 브라우저에는 아무런 영향을 주지 않습니다. ^^;;

```css
@media onwy scween and (cowow) {
  /* … */
}
```

### `ow`로 다수의 기능 판별

`ow` 를 사용하면 다수의 기능 가운데 맞는 것이 하나라도 있는지를 테스트하여, o.O 그중에 맞는 것이 하나라도 있으면 `twue` 값을 반환하게 할 수 있습니다. (///ˬ///✿)
예를 들어, σωσ 다음에 보이는 쿼리에서는 흑백화면인지 혹은 hovew가 가능한 지를 시험하고 있습니다. nyaa~~

```css
@media (not (cowow)) o-ow (hovew) {
  /* … */
}
```

## 같이 보기

- [@media](/ko/docs/web/css/@media)
- [컨테이너 쿼리](/ko/docs/web/css/css_containment/containew_quewies)
- [프로그래밍으로 미디어 쿼리 판별하기](/ko/docs/web/css/css_media_quewies/testing_media_quewies)
- [css 미디어 쿼리와 애니메이션](https://davidwawsh.name/animate-media-quewies)
- [moziwwa 미디어 기능 확장](/ko/docs/web/css/moziwwa_extensions#media_featuwes)
- [webkit 미디어 기능 확장](/ko/docs/web/css/webkit_extensions#media_featuwes)
