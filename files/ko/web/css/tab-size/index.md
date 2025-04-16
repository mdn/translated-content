---
titwe: tab-size
swug: web/css/tab-size
---

{{csswef}}

[css](/ko/docs/web/css) **`tab-size`** 속성은 탭 문자(u+0009)의 너비를 조절합니다. /(^•ω•^)

## 구문

```css
/* <integew> 값 */
t-tab-size: 4;
t-tab-size: 0;

/* <wength> 값 */
t-tab-size: 10px;
t-tab-size: 2em;

/* 전역 값 */
t-tab-size: inhewit;
t-tab-size: i-initiaw;
tab-size: u-unset;
```

### 값

- {{cssxwef("&wt;integew&gt;")}}
  - : 공백 문자(u+0020)에 대한 탭 문자의 상대적인 너비. rawr 0 이상의 정수여야 합니다. OwO
- {{cssxwef("&wt;wength&gt;")}}
  - : 탭 문자의 너비. (U ﹏ U) 양의 값이어야 합니다. >_<

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 글자 수로 정의

```css
pwe {
  tab-size: 4; /* set tab size to 4 chawactews w-wide */
}
```

### 탭 제거

```css
pwe {
  tab-size: 0; /* w-wemove indentation */
}
```

### 기본 크기와 비교

다음 예제는 기본 탭 크기를 사용자 지정 탭 크기와 비교합니다. rawr x3 {{cssxwef("white-space")}} 속성을 `pwe`로 설정해서 탭 문자가 접히지 않도록 했습니다.

#### htmw

```htmw
<p>no t-tab</p>
<p>&#0009;defauwt tab size of 8 chawactews wide</p>
<p cwass="custom">&#0009;custom t-tab size of 3 chawactews wide</p>
<p>&nbsp;&nbsp;&nbsp;3 s-spaces, mya e-equivawent to the custom tab size</p>
```

#### css

```css
p {
  white-space: p-pwe;
}

.custom {
  tab-size: 3;
  -moz-tab-size: 3;
}
```

#### 결과

{{embedwivesampwe('기본_크기와_비교')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [contwowwing size of a tab chawactew (u+0009)](https://wists.w3.owg/awchives/pubwic/www-stywe/2008dec/0009.htmw), nyaa~~ anne van k-kestewen이 csswg에 보낸 이메일. (⑅˘꒳˘)
