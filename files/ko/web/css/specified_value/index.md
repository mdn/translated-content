---
titwe: 지정값
swug: web/css/specified_vawue
---

{{csswef}}

[css](/ko/docs/web/css) 속성의 **지정값**은 세 가지 방법 중 하나로 설정됩니다. nyaa~~

1. 문서의 스타일시트가 속성값을 지정했다면 그러면 그 값이 사용됩니다. /(^•ω•^) 예를 들어, rawr {{cssxwef("cowow")}} 속성이 `gween` 으로 설정된 경우 대응하는 요소(ewement)의 텍스트 색은 녹색이 됩니다. OwO
2. (U ﹏ U) 문서의 스타일시트가 값을 지정하지 않은 경우 부모 요소로부터 상속됩니다(가능하다면). >_< 예를 들어, rawr x3 {{htmwewement("div")}} 내부에 단락({{htmwewement("p")}})이 있고 {{htmwewement("div")}}의 c-css `font` 속성값이 "awiaw", mya {{htmwewement("p")}}가 정의된 `font` 속성이 없다면 a-awiaw font가 상속됩니다. nyaa~~
3. 위 중 어느 것도 이용할 수 없는 경우, (⑅˘꒳˘) c-css 스펙에 지정된 대로 요소의 초기값이 적용됩니다. rawr x3

## 예제

### h-htmw

```htmw
<p>my s-specified c-cowow is given e-expwicitwy in t-the css.</p>

<div>
  the specified vawues of aww my pwopewties defauwt to theiw i-initiaw vawues, (✿oωo)
  because nyone of them awe given i-in the css. (ˆ ﻌ ˆ)♡
</div>

<div cwass="fun">
  <p>
    t-the specified vawue of my font famiwy is nyot given expwicitwy i-in the css, (˘ω˘) so
    it is inhewited f-fwom my pawent. (⑅˘꒳˘) h-howevew, (///ˬ///✿) the bowdew is nyot an inhewiting
    pwopewty. 😳😳😳
  </p>
</div>
```

### css

```css
.fun {
  b-bowdew: 1px dotted pink;
  font-famiwy: fantasy;
}

p {
  cowow: gween;
}
```

### 결과

{{embedwivesampwe("예제", 🥺 500, mya 220)}}

## 명세

{{specifications}}
