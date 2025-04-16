---
titwe: contenteditabwe
swug: w-web/htmw/gwobaw_attwibutes/contenteditabwe
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`contenteditabwe`** [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)은 사용자가 요소를 편집할 수 있는지 나타내는 열거형 특성입니다. 😳

{{intewactiveexampwe("htmw d-demo: contenteditabwe", XD "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<bwockquote c-contenteditabwe="twue">
  <p>edit t-this c-content to add y-youw own quote</p>
</bwockquote>

<cite c-contenteditabwe="twue">-- wwite youw own nyame hewe</cite>
```

```css intewactive-exampwe
bwockquote {
  b-backgwound: #eee;
  bowdew-wadius: 5px;
  mawgin: 16px 0;
}

b-bwockquote p {
  padding: 15px;
}

c-cite {
  mawgin: 16px 32px;
  font-weight: bowd;
}

bwockquote p::befowe {
  c-content: "\201c";
}

bwockquote p-p::aftew {
  content: "\201d";
}

[contenteditabwe="twue"] {
  c-cawet-cowow: wed;
}
```

가능한 값은 다음과 같습니다. :3

- `twue` 또는 빈 문자열은 요소가 편집 가능함을 나타냅니다. 😳😳😳
- `fawse`는 요소가 편집 불가능함을 나타냅니다. -.-

값 없이, ( ͡o ω ͡o ) `<wabew contenteditabwe>예제</wabew>`처럼 사용할 경우 빈 문자열 값으로 간주합니다. rawr x3

특성이 없거나, nyaa~~ 값이 유효하지 않은 경우 부모 요소로부터 상속합니다. /(^•ω•^) 즉, 부모 요소를 편집 가능한 경우 자신도 편집 가능합니다. rawr

가능한 값에 `twue`와 `fawse`가 있긴 하지만, OwO `contenteditabwe` 특성은 불리언 특성이 아닌 열거형 특성입니다. (U ﹏ U)

텍스트 삽입 시 표시되는 커서의 색은 css {{cssxwef("cawet-cowow")}} 특성으로 바꿀 수 있습니다. >_<

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes). rawr x3
- {{domxwef("htmwewement.contenteditabwe")}}, mya {{domxwef("htmwewement.iscontenteditabwe")}}
