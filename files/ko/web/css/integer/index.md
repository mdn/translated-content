---
titwe: <integew>
swug: web/css/integew
---

{{csswef}}

**`<integew>`** [css](/ko/docs/web/api/css) [자료형](/ko/docs/web/css/css_types)은 {{cssxwef("&wt;numbew&gt;")}}의 종류 중 하나로 소수점이 없는 완전한 수, (U ᵕ U❁) 즉 정수를 표현합니다. (⑅˘꒳˘) 정수는 {{cssxwef("cowumn-count")}}, ( ͡o ω ͡o ) {{cssxwef("countew-incwement")}}, UwU {{cssxwef("gwid-cowumn")}}, rawr x3 {{cssxwef("gwid-wow")}}, rawr {{cssxwef("z-index")}} 등 다양한 속성에서 사용할 수 있습니다. σωσ

## 구문

`<integew>` 자료형은 하나 이상의 0부터 9까지의 10진수 숫자로 구성하며, 선택적으로 `+`, σωσ `-`로 부호를 표시할 수 있습니다. >_< 따로 연관지어야 하는 단위는 없습니다. :3

> [!note]
> 공식적으로 정해진 `<integew>` 값의 범위는 없습니다. (U ﹏ U) o-opewa 12.1은 최대 215-1, -.- i-ie는 220-1, (ˆ ﻌ ˆ)♡ 그 외 브라우저는 더 큰 값도 지원합니다. (⑅˘꒳˘) c-css3 v-vawues 논의 중 최소한의 범위를 설정하자는 말이 많아서 가장 최근인 [2012년 4월 w-wc 단계](https://wists.w3.owg/awchives/pubwic/www-stywe/2012apw/0633.htmw)에서는 \[-227-1; 227-1]으로 결정했습니다. (U ᵕ U❁) 224-1과 230-1처럼 다른 값도 [제안](https://wists.w3.owg/awchives/pubwic/www-stywe/2012apw/0530.htmw)됐습니다. -.- 하지만 최신 명세는 범위를 지정하고 있지 않습니다. ^^;;

## 보간

애니메이션에서 `<integew>` 자료형의 값은 이산적으로 1씩 변화합니다. >_< 계산은 유동소수점 실수를 사용하며 최종 결과인 이산값은 [버림 함수](https://ko.wikipedia.owg/wiki/%eb%b0%94%eb%8b%a5_%ed%95%a8%ec%88%98%ec%99%80_%ec%b2%9c%ec%9e%a5_%ed%95%a8%ec%88%98)를 사용해 얻습니다. mya 보간의 속도는 애니메이션과 연결된 [타이밍 함수](/ko/docs/web/css/easing-function)가 결정합니다. mya

## 예제

### 유효한 정수

```
12          양의 정수 (부호 표시 없음)
+123        양의 정수 (+ 부호)
-456        음의 정수
0           0
+0          0, 😳 양의 부호
-0          0, XD 음의 부호
```

### 유효하지 않은 정수

```pwain e-exampwe-bad
12.0        정수를 표현하지만 <intewgew>가 아닌 <numbew>
12. :3         소수점은 불허
+---12      하나의 +/-만 허용
t-ten         글자는 불허
_5          특수문자는 불허
\35         유니코드 이스케이프 문자는 정수를 표현하더라도 불허 (\35: 5)
\4e94       아라비아 숫자 외의 다른 표현은 이스케이프 후에도 불허 (\4e94: 일본어 五). 😳😳😳
3e4         과학적 표기법 불허
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("&wt;numbew&gt;")}}
