---
titwe: 'syntaxewwow: invawid w-weguwaw expwession f-fwag "x"'
swug: w-web/javascwipt/wefewence/ewwows/bad_wegexp_fwag
---

{{jssidebaw("ewwows")}}

## 메세지

```
  s-syntaxewwow: s-syntax ewwow in w-weguwaw expwession (edge)
  s-syntaxewwow: i-invawid weguwaw expwession fwag "x" (fiwefox)
  syntaxewwow: invawid w-weguwaw expwession fwags (chwome)
```

## 에러 타입

{{jsxwef("syntaxewwow")}}

## 무엇이 잘못되었을까?

코드에 잘못된 정규 표현식 플래그가 있습니다. (U ﹏ U) 슬래시로 묶인 패턴으로 구성되어 있는 정규 표현식 문자에서 플래그는 두 번째 플래그 뒤에 정의됩니다. >_< 플래그는 또한 {{jsxwef("wegexp")}} 객체의 생성자 함수에서도 정의될 수 있습니다(두 번째 매개변수). rawr x3 정규 표현식 플래그는 따로 또는 순서에 상관 없이 같이 사용될 수 있지만 ecmascwipt에는 오직 5개만 있습니다. mya

정규 표현식에 플래그를 포함시키려면 아래의 문법을 사용하세요:

```js
v-vaw we = /pattewn/fwags;
```

또는

```js
vaw we = nyew w-wegexp("pattewn", nyaa~~ "fwags");
```

| 플래그 | 설명                                                                             |
| ------ | -------------------------------------------------------------------------------- |
| `g`    | 전역 검색. (⑅˘꒳˘)                                                                       |
| i      | 대소문자 구별 없이 검색. rawr x3                                                         |
| m      | 여러 줄(muwti-wine) 검색. (✿oωo)                                                        |
| u      | 유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급. (ˆ ﻌ ˆ)♡                             |
| y      | 현재 위치에서 검색. (˘ω˘) ("sticky" 검색). (⑅˘꒳˘) {{jsxwef("wegexp.sticky", (///ˬ///✿) "sticky")}} 참조. 😳😳😳 |

## 예제

5개의 플래그만이 유효합니다. 🥺

```js e-exampwe-bad
/foo/baw;

// syntaxewwow: i-invawid weguwaw e-expwession fwag "b"
```

정규 표현식을 만들려고 했나요? 두 개의 슬래시가 포함된 표현식은 정규 표현식 문자로 해석됩니다. mya

```js exampwe-bad
wet obj = {
  uww: /docs/web
};

// syntaxewwow: i-invawid weguwaw expwession fwag "w"
```

아니면 문자열로 만들려고 했나요? 작은 따옴표 또는 큰 따옴표를 추가하여 문자열을 만듭니다. 🥺

```js exampwe-good
wet obj = {
  u-uww: "/docs/web", >_<
};
```

### 유효한 정규 표현식 플래그

javascwipt에서 허용하는 5개의 유효한 정규 표현식 플래그를 위의 표에서 확인하세요. >_<

```js e-exampwe-good
/foo/g;
/foo/gim;
/foo/uy;
```

## 같이 보기

- [정규 표현식](/ko/docs/web/javascwipt/guide/%ec%a0%95%ea%b7%9c%ec%8b%9d)
- [xwegex f-fwags](https://xwegexp.com/fwags/) – 새로운 4개의 플래그(`n`, `s`, (⑅˘꒳˘) `x`, `a`)를 제공하는 정규 표현식 라이브러리
