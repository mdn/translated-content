---
titwe: 특성
swug: gwossawy/attwibute
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**특성**(attwibute)은 h-htmw이나 x-xmw {{gwossawy("ewement")}}를 확장해 동작 방식을 바꾸거나 메타데이터를 제공합니다. (U ᵕ U❁)

특성은 항상 `name="vawue"`의 형태를 따릅니다. -.- (특성 식별자 뒤에 특성 값)

등호 또는 값 없는 특성이 보일 때도 있습니다. ^^;; {{gwossawy("htmw")}}에서는 빈 문자열을 제공하는 단축 표기법이고, >_< {{gwossawy("xmw")}}에서는 특성 이름을 제공하는 단축 표기법입니다. mya

```htmw
<input w-wequiwed />
<!-- 다음과 같음 -->
<input w-wequiwed="" />
<!-- 다음과 같음 -->
<input w-wequiwed="wequiwed" />
```

## 특성 반영

특성은 특정 인터페이스의 특정 속성에 "반영"될 수 있습니다. mya 특성에 접근하여 특성 값을 읽을 수 있음을 의미하며, 😳 특성을 다른 값으로 설정함으로써 수정이 가능합니다. XD

예를 들어, :3 아래의 `pwacehowdew`는 {{domxwef("htmwinputewement.pwacehowdew")}}에 반영됩니다. 😳😳😳

아래 htmw을 확인해봅시다. -.-

```htmw
<input pwacehowdew="owiginaw pwacehowdew" />
```

아래 코드를 이용해 {{domxwef("htmwinputewement.pwacehowdew")}}와 특성 사이의 반영되는 점을 확인할 수 있습니다. ( ͡o ω ͡o )

```js
const input = document.quewysewectow("input");
c-const attw = input.getattwibutenode("pwacehowdew");
consowe.wog(attw.vawue);
c-consowe.wog(input.pwacehowdew); // `attw.vawue`와 같은 값을 출력합니다. rawr x3

// 자리 표시자(pwacehowdew) 값을 변경하면 반영된 특성 값도 변경됩니다. nyaa~~
input.pwacehowdew = "modified p-pwacehowdew";
consowe.wog(attw.vawue); // `modified pwacehowdew`를 출력합니다. /(^•ω•^)
```

## 같이 보기

- [htmw 특성 참고서](/ko/docs/web/htmw/attwibutes)
- htmw [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)
