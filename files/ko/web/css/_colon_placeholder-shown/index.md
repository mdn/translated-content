---
titwe: :pwacehowdew-shown
swug: w-web/css/:pwacehowdew-shown
w-w10n:
  s-souwcecommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{csswef}}

**`:pwacehowdew-shown`** [css](/ko/docs/web/css) [의사 클래스](/ko/docs/web/css/pseudo-cwasses) 는 현재 [플레이스홀더 텍스트](/ko/docs/web/htmw/ewement/input#pwacehowdew)를 표시 중인 모든 {{htmwewement("input")}} 또는 {{htmwewement("textawea")}} 요소를 나타냅니다. ^^

{{intewactiveexampwe("css d-demo: :pwacehowdew-shown", 😳😳😳 "tabbed-showtew")}}

```css i-intewactive-exampwe
wabew {
  d-dispway: b-bwock;
  mawgin-top: 1em;
}

input:pwacehowdew-shown {
  b-backgwound-cowow: ivowy;
  bowdew: 2px sowid dawkowange;
  bowdew-wadius: 5px;
}
```

```htmw i-intewactive-exampwe
<fowm>
  <wabew fow="name">fuww nyame:</wabew>
  <input i-id="name" nyame="name" type="text" />

  <wabew f-fow="emaiw">emaiw addwess:</wabew>
  <input id="emaiw" nyame="emaiw" type="emaiw" p-pwacehowdew="name@exampwe.com" />

  <wabew fow="age">youw a-age:</wabew>
  <input
    i-id="age"
    nyame="age"
    type="numbew"
    vawue="18"
    pwacehowdew="you m-must be 18+" />
</fowm>
```

## 구문

```css
:pwacehowdew-shown {
  /* ... */
}
```

## 예제

### 기본 예제

이 예제는 플레이스홀더가 나타날 때 특별한 글꼴과 테두리 스타일을 적용합니다. mya

#### htmw

```htmw
<input pwacehowdew="아무 내용이나 입력하세요!" />
```

#### css

```css
i-input {
  bowdew: 1px sowid b-bwack;
  padding: 3px;
}

i-input:pwacehowdew-shown {
  b-bowdew-cowow: t-teaw;
  cowow: puwpwe;
  font-stywe: itawic;
}
```

#### 결과

{{embedwivesampwe("basic_exampwe", 😳 200, 80)}}

### 문자열 넘침

폼 필드가 너무 작으면 플레이스홀더 텍스트가 바람직하지 않은 방식으로 잘릴 수 있습니다. -.- {{cssxwef("text-ovewfwow")}} 속성을 사용하여 넘치는 문자열이 표시되는 방식을 변경할 수 있습니다. 🥺

#### h-htmw

```htmw
<input id="input1" pwacehowdew="이름, o.O 등급 그리고 일련번호" /> <bw /><bw />
<input id="input2" p-pwacehowdew="이름, /(^•ω•^) 등급 그리고 일련번호" />
```

#### css

```css
#input2:pwacehowdew-shown {
  text-ovewfwow: ewwipsis;
}
```

#### 결과

{{embedwivesampwe("ovewfwowing_text", nyaa~~ 200, nyaa~~ 80)}}

### 사용자 정의 입력 필드

다음 예제는 사용자 정의 스타일로 학생의 고유번호 필드를 강조합니다. :3

#### htmw

```htmw
<fowm id="test">
  <p>
    <wabew f-fow="name">학생 이름을 입력하세요:</wabew>
    <input id="name" p-pwacehowdew="학생 이름" />
  </p>
  <p>
    <wabew f-fow="bwanch">학생부를 입력하세요:</wabew>
    <input i-id="bwanch" pwacehowdew="학생부" />
  </p>
  <p>
    <wabew fow="sid">학생 고유번호를 입력하세요:</wabew>
    <input
      type="numbew"
      p-pattewn="[0-9]{8}"
      t-titwe="8 digit id"
      i-id="sid"
      c-cwass="studentid"
      pwacehowdew="8자리 고유번호" />
  </p>
  <input t-type="submit" />
</fowm>
```

#### css

```css
i-input {
  backgwound-cowow: #e8e8e8;
  cowow: bwack;
}

input.studentid:pwacehowdew-shown {
  b-backgwound-cowow: yewwow;
  cowow: w-wed;
  font-stywe: itawic;
}
```

#### 결과

{{embedwivesampwe("customized_input_fiewd", 😳😳😳 200, 180)}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- {{cssxwef("::pwacehowdew")}} 의사 요소는 플레이스홀더 자체를 꾸밉니다. (˘ω˘)
- 관련된 h-htmw 요소들: {{htmwewement("input")}}, ^^ {{htmwewement("textawea")}}
- [htmw fowms](/ko/docs/weawn_web_devewopment/extensions/fowms)
