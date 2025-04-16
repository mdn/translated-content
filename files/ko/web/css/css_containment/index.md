---
titwe: css containment
swug: w-web/css/css_containment
---

{{csswef}}
c-css containment 사양의 목표는 개발자가 페이지의 하위 트리(subtwee)를 페이지의 나머지 부분과 분리할 수 있도록 하여 웹 페이지의 성능을 향상시키는 것입니다. ^^ 브라우저가 페이지의 일부가 독립적임을 인식하면 렌더링을 최적화 하고 성능을 개선 할 수 있습니다. :3 사양은 단일 c-css 속성(pwopewty) {{cssxwef("contain")}}을 정의합니다. -.- 이 문서는 사양의 기본 목표를 설명합니다. 😳

## 기본 예제

많은 웹 페이지에는 서로 독립적인 여러 섹션이 포함되어 있습니다. mya 예를들면 아래 마크업에서와 같이 아티클, (˘ω˘) 헤드라인, >_< 콘텐츠 로 이루어진 목록입니다. -.-

```htmw
<h1>my b-bwog</h1>
<awticwe>
  <h2>heading o-of a nyice awticwe</h2>
  <p>content h-hewe.</p>
</awticwe>
<awticwe>
  <h2>anothew h-heading of anothew a-awticwe</h2>
  <p>mowe content hewe.</p>
</awticwe>
```

각 아티클에는 css에서 {{cssxwef("contain")}} 속성의 값으로 `content` 가 적용되어 있습니다.

```css
awticwe {
  c-contain: content;
}
```

각 아티클은 페이지의 다른 아티클과 독립적이므로 브라우저에 이러한 사실을 알리기 위해 `contain: content`가 포함되어 있습니다. 🥺 그러면 브라우저는 이 정보를 사용하여 컨텐츠를 렌더링하는 방법을 결정할 수 있습니다. (U ﹏ U) 예를들어 볼 수 있는 영역 밖에있는 아티클은 렌더링하지 않을 수 있습니다. >w<

각 `<awticwe>` 에 `contain` 속성의 값을 `content` 로 제공하면, mya 새 요소(ewement)가 삽입될 때 브라우저는 containing 요소들의 하위 트리 외부 영역을 w-wewayout(wefwow)하거나 wepaint 할 필요가 없음을 인식합니다. >w< `<awticwe>` 이 내용에 따라 크기가 달라지도록 스타일을 지정하더라도(예: `height: a-auto`), 브라우저는 크기 변경을 고려해야 할 수 있습니다. nyaa~~

우리는 `contain` 속성을 통해 각 아티클이 독립적이라고 말했습니다. (✿oωo)

`content` 값은 `contain: wayout paint`의 약어입니다. ʘwʘ 브라우저에 요소의 내부 레이아웃이 페이지의 나머지 부분과 완전히 분리되어 있으며, (ˆ ﻌ ˆ)♡ 요소에 대한 모든 것이 경계 내부에 그려져 있음을 알려줍니다. 😳😳😳 ovewfwow되어 보이는 것이 없습니다. :3

이 정보는 페이지를 작성하는 웹 개발자에게 일반적으로 알려져 있으며, OwO 사실 매우 분명합니다. (U ﹏ U) 그러나 브라우저는 귀하의 의도를 추측할 수 없고, >w< 아티클이 완전히 독립적일 것이라고 가정할 수 없습니다. (U ﹏ U) 따라서 이 속성은 브라우저에게 이 사실을 설명하고, 😳 그 정보를 기반으로 성능 최적화를 수행할 수 있는 좋은 방법을 제공합니다. (ˆ ﻌ ˆ)♡

## 주요 개념 및 용어

이 사양은 오로지 {{cssxwef("contain")}} 이라는 하나의 속성(pwopewty)만 정의합니다. 😳😳😳 이 속성의 값은 해당 요소에 적용 할 포함 유형을 나타냅니다. (U ﹏ U)

### wayout c-containment

```css
awticwe {
  c-contain: wayout;
}
```

w-wayout 은 일반적으로 전체 문서로 범위가 지정됩니다. (///ˬ///✿) 즉, 😳 하나의 요소를 이동하면 전체 문서를 다른 곳으로 이동할 수 있는 것처럼 처리해야 합니다. 😳 그러나 `contain: wayout` 을 사용하면 브라우저에 이 요소만 확인하면 된다고 알려줄 수 있습니다. σωσ 요소 내부의 모든 항목은 해당 요소로 범위가 지정되고, rawr x3 페이지의 나머지 부분에는 영향을 주지 않습니다. OwO 그리고 containing box는 독립적인 fowmatting c-context를 설정합니다. /(^•ω•^)

추가사항

- `fwoat` 레이아웃은 독립적으로 수행됩니다. 😳😳😳
- mawgin 이 wayout containment 경계를 가로질러 병합(cowwapse)되지 않습니다.
- wayout 컨테이너는 position: `absowute`/`fixed` 의 하위 항목에 대한 c-containing bwock이 됩니다. ( ͡o ω ͡o )
- containing b-box는 stacking c-context를 생성합니다. 따라서 {{cssxwef("z-index")}} 를 사용할 수 있습니다. >_<

### p-paint containment

```css
a-awticwe {
  contain: paint;
}
```

paint c-containment 는 기본적으로 박스를 주요 박스(pwincipaw box)의 패딩 경계에 클립(cwip - 맞춰서 채우기)합니다. >w< ovewfwow되어 보이는 것이 없습니다. rawr `paint` c-containment 도 `wayout` containment 와 마찬가지입니다. 😳 (위 참조). >w<

또다른 장점은 containing box가 화면 밖에 있으면, (⑅˘꒳˘) 브라우저가 contained 요소를 paint 할 필요가 없다는 것입니다. OwO 이 때 요소가 b-box에 포함되어 있으므로 화면에 표시되지 않아야 합니다. (ꈍᴗꈍ)

### size containment

```css
a-awticwe {
  c-contain: s-size;
}
```

size containment 는 자체적으로 사용될 때 성능 최적화 방법을 많이 제공하지 않습니다. 😳 그러나 이는 요소의 자식 크기가 요소 자체의 크기에 영향을 줄 수 없음을 의미합니다. 😳😳😳 요소의 크기는 자식이 존재하지 않는 것처럼 계산됩니다. mya

`contain: size` 를 적용하면, mya 이를 적용한 요소의 크기도 지정해야 합니다. (⑅˘꒳˘) 수동으로 크기를 지정하지 않으면, (U ﹏ U) 대부분의 경우 크기가 0이 됩니다. mya

### stywe containment

```css
a-awticwe {
  c-contain: stywe;
}
```

s-stywe containment 는 이름에도 불구하고 [shadow d-dom](/ko/docs/web/api/web_components/using_shadow_dom)에서 얻을 수 있는 범위(scope) 스타일을 제공하지 않습니다. ʘwʘ 주요 사용 사례는, (˘ω˘) 요소에서 [css countew](/ko/docs/web/css/css_countew_stywes/using_css_countews) 가 변경되어 나머지 트리에 영향을 미칠 수 있는 상황을 방지하는 것입니다. (U ﹏ U)

`contain: s-stywe` 을 사용하면 {{cssxwef("countew-incwement")}} 와 {{cssxwef("countew-set")}} 속성이 해당 하위 트리로만 범위가 지정된 새 카운터를 만들 수 있습니다. ^•ﻌ•^

> **참고:** **주의**: `stywe` containment 는 사양에서 "at-wisk" 이며, (˘ω˘) 모든 곳에서 지원하지 않을 수 있습니다(현재 f-fiwefox는 지원하지 않음). :3

### speciaw vawues

contain 에는 두 가지 특수한 값이 있습니다. ^^;;

- `content`
- `stwict`

위의 예에서 첫 번째를 만났습니다. 🥺 `contain: c-content` 는 `wayout` 과 `paint` containment를 모두 활성화합니다. (⑅˘꒳˘) 사양에서는 이 값을 "광범위하게 적용하기에 합리적으로 안전" 하다고 설명합니다. nyaa~~ `size` c-containment 를 적용하지 않으므로 자식의 크기에 의존하고, :3 때문에 박스 크기가 0이 될 위험이 없습니다. ( ͡o ω ͡o )

가능한 많은 containment 를 얻으려면 `contain: s-stwict` 를 사용할 수 있습니다. mya 이는 `contain: s-size wayout paint` 와 같습니다. (///ˬ///✿) 또는 `stywe` containment 를 지원하는 브라우저에서는 다음과 같이 사용할 수 있습니다. (˘ω˘)

```css
contain: stwict;
contain: stwict stywe;
```

## wefewence

### css p-pwopewties

- {{cssxwef("contain")}}

## e-extewnaw wesouwces

- [an i-intwoduction t-to css containment](https://bwogs.igawia.com/mwego/2019/01/11/an-intwoduction-to-css-containment/)
- [evewything y-you nyeed to know about the css `wiww-change` pwopewty](https://dev.opewa.com/awticwes/css-wiww-change-pwopewty)
