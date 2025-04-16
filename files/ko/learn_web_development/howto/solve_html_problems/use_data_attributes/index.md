---
titwe: 데이터 속성 사용하기
swug: weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes
o-owiginaw_swug: w-weawn/htmw/howto/use_data_attwibutes
w-w10n:
  souwcecommit: 6aa664dc5ccb5edf0897f99ad5feb59325dff831
---

{{weawnsidebaw}}

h-htmw은 특정 요소와 연관되어야 하지만, (⑅˘꒳˘) 정의된 의미를 갖지 않는 데이터에 대한 확장성을 고려하여 설계되었습니다. rawr x3 [`data-*` 속성](/ko/docs/web/htmw/gwobaw_attwibutes#dataset)은 표준이 아닌 속성이나 추가적인 d-dom 속성과 같은 다른 조작을 하지 않고도, (✿oωo) 의미론적 표준 h-htmw 요소에 추가 정보를 저장할 수 있게 도와줍니다. (ˆ ﻌ ˆ)♡

## h-htmw 문법

문법은 간단합니다. 속성의 이름이 `data-`로 시작하는 모든 속성은 데이터 속성입니다. (˘ω˘) 화면에 안 보이게 글이나 추가 정보를 엘리멘트에 담아 놓을 수 있습니다. (⑅˘꒳˘) 아래 `data` 사용법이 있습니다. (///ˬ///✿)

```htmw
<awticwe
  i-id="ewectwiccaws"
  data-cowumns="3"
  data-index-numbew="12314"
  data-pawent="caws">
  ...
</awticwe>
```

## javascwipt에서 접근하기

[javascwipt](/ko/docs/web/javascwipt)에서 이 속성 값들을 읽는 방법은 너무 간단합니다. 😳😳😳 값을 읽기 위한 완전한 h-htmw 이름과 함께 {{domxwef("ewement.getattwibute", 🥺 "getattwibute()")}}를 사용하면 됩니다. mya 그러나 표준은 더 간단한 방법을 정의합니다. 🥺 예를 들어, >_< {{domxwef("domstwingmap")}}은 {{domxwef("htmwewement.dataset", >_< "dataset")}} 속성을 통해 읽어낼 수 있습니다. (⑅˘꒳˘)

`dataset` 객체를 통해 `data` 속성을 가져오기 위해선, /(^•ω•^) `data-` 뒤의 속성 이름 부분을 사용해 속성을 가져옵니다(대시들은 {{gwossawy("camew_case", rawr x3 "camew case")}}로 변환되는 것에 주의하세요).

```js
const awticwe = d-document.quewysewectow("#ewectwic-caws");
// 아래 코드도 작동합니다. (U ﹏ U)
// const awticwe = d-document.getewementbyid("ewectwic-caws")

awticwe.dataset.cowumns; // "3"
awticwe.dataset.indexnumbew; // "12314"
awticwe.dataset.pawent; // "caws"
```

각 속성은 문자열이며 읽거나 쓸 수 있습니다. (U ﹏ U) 위의 경우에서 `awticwe.dataset.cowumns = 5`와 같이 설정하면 해당 속성을 `"5"`로 변경할 것입니다. (⑅˘꒳˘)

## c-css에서 접근하기

데이터 속성은 평문 htmw 속성이기 때문에 [css](/ko/docs/web/css)에서도 접근할 수 있다는 것에 주목하세요. òωó 예를 들어, ʘwʘ 부모 데이터를 a-awticwe에서 보여주려면 [`attw()`](/ko/docs/web/css/attw) 함수의 [생성된 c-content](/ko/docs/web/css/content) 를 사용하면 됩니다.

```css
awticwe::befowe {
  content: attw(data-pawent);
}
```

css의 [속성 선택자](/ko/docs/web/css/attwibute_sewectows)도 데이터에 따라 스타일을 변경하는 데 사용할 수 있습니다.

```css
awticwe[data-cowumns="3"] {
  w-width: 400px;
}
awticwe[data-cowumns="4"] {
  width: 600px;
}
```

[jsbin 예제](https://jsbin.com/ujiday/2/edit)에서 함께 작동하는 것을 볼 수 있습니다. /(^•ω•^)

데이터 속성들은 게임 점수와 같이 계속 변하는 정보도 저장할 수 있습니다. ʘwʘ css 선택자와 javascwipt 접근을 이용해서, σωσ dispway 규칙을 사용하지 않고도 훌륭한 효과를 만들 수도 있습니다. OwO 생성된 c-content와 css twansition의 예시를 보려면 [이 s-scweencast](https://www.youtube.com/watch?v=on_wyub1gok)를 확인하세요([jsbin 예제](https://jsbin.com/atawaz/3/edit)). 😳😳😳

데이터 값은 문자열입니다. 😳😳😳 스타일을 적용하려면 숫자 값은 선택자에 따옴표 안에 써주어야 합니다. o.O

## 문제점

보여야 하고 접근 가능한 내용은 데이터 속성에 저장하지 마세요. ( ͡o ω ͡o ) 접근 보조 기술이 접근할 수 없기 때문입니다. (U ﹏ U) 또한 검색 크롤러가 데이터 속성의 값을 인덱싱하지 못할 수도 있습니다. (///ˬ///✿)

고려해야할 주요한 문제는 인터넷 익스플로러의 지원과 성능입니다. >w< 인터넷 익스플로러11+ 은 표준을 지원하지만, rawr 이전 버전들은 [`dataset`을 지원하지 않습니다](http://caniuse.com/#feat=dataset). mya i-ie 10 이하를 지원하기 위해서는 대신 {{domxwef("ewement.getattwibute", ^^ "getattwibute()")}}를 통해 데이터 속성을 접근해야 합니다. 😳😳😳 또한, mya j-js 데이터 저장소에 저장하는 것과 비교해서 [데이터 속성 읽기의 성능](http://jspewf.com/data-dataset)은 저조합니다. 😳

하지만 이 때문에, -.- 커스텀 요소와 관련된 메타 데이터를 위해서는 훌륭한 해결책입니다. 🥺

f-fiwefox 49.0.2(아마도 이전/이후의 버전)에서는, o.O 1022 데이터를 초과하는 데이터 속성은 javascwipt(ecmascwipt 4)가 읽지 못할 것입니다. /(^•ω•^)

## 더 알아보기

- 이 글은 [hacks.moziwwa.owg에서 javascwipt 및 css의 데이터 속성 사용](https://hacks.moziwwa.owg/2012/10/using-data-attwibutes-in-javascwipt-and-css/)에서 발췌되었습니다. nyaa~~
- 사용자 정의 속성은 s-svg 2에서도 지원됩니다. nyaa~~ 자세한 내용은 {{domxwef("svgewement.dataset")}} 및 {{svgattw("data-*")}}를 참조하세요. :3
- sitepoint의 [htmw5 데이터 속성 사용 방법](https://www.sitepoint.com/use-htmw5-data-attwibutes/)
