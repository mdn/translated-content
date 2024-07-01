---
title: <url>
slug: Web/CSS/url
---

{{ CssRef() }}

**`<url>`** [CSS](/ko/docs/Web/CSS) [자료형](/ko/docs/Web/CSS/CSS_Types)은 이미지나 글꼴 등 리소스를 가리키는 문자열을 나타냅니다. URL은 {{ Cssxref("background-image") }}, {{ Cssxref("cursor") }}, {{ cssxref("list-style") }} 등 다양한 속성에서 사용할 수 있습니다.

> **참고:** **URI와 URL** [URI](http://en.wikipedia.org/wiki/Uniform_Resource_Identifier)와 [URL](http://en.wikipedia.org/wiki/Uniform_Resource_Locator)은 다릅니다. URI는 단순히 리소스의 식별자입니다. URL은 URI의 종류 중 하나로, 리소스의 **위치**를 표현합니다. URI는 URL일 수도 있고, 리소스의 이름([URN](http://en.wikipedia.org/wiki/Uniform_Resource_Name))일 수도 있습니다.
>
> CSS Level 1의 `url()` 함수형 표기법은 순수 URL을 나타낼 때만 사용했고, CSS Level 2에서 범위가 늘어나 URL이나 URN 등 어떤 URI도 사용할 수 있도록 바뀌었습니다. 이로써 `url()`을 사용해 `<uri>` CSS 자료형을 표현할 수 있었는데, 이상한 방식인데다 실제 CSS에서 URN은 거의 사용하지 않았으므로 불필요하다고 생각할만한 점이었습니다. CSS3에서는 혼란을 잠재우기 위해 초기의 더 좁은 정의로 돌아갔기 때문에 이제 `url()`은 `<url>`만을 나타낼 수 있습니다.

## 구문

`<url>` 자료형은 `url()` 함수형 표기법을 사용해 설정합니다. 따옴표는 선택사항으로 작은따옴표, 큰따옴표 둘 다 사용할 수 있습니다. 상대 URL도 사용할 수 있으며, 웹페이지의 URL이 아닌 스타일시트의 URL을 기준으로 사용합니다.

```
<a_css_property>: url("http://mysite.example.com/mycursor.png")
<a_css_property>: url('http://mysite.example.com/mycursor.png')
<a_css_property>: url(http://mysite.example.com/mycursor.png)
```

> **참고:** Firefox 15부터, 0x7e을 초과하는 제어 문자는 URL을 따옴표로 둘러싸야 유요합니다. 자세한 내용은 [Firefox bug 752230](https://bugzil.la/752230)을 참고하세요.

## 예제

```css
.topbanner {
  background: url("topbanner.png") #00d no-repeat fixed;
}
```

```css
ul {
  list-style: square url(http://www.example.com/redball.png);
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
