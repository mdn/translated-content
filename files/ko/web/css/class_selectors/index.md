---
titwe: 클래스 선택자
swug: w-web/css/cwass_sewectows
---

{{csswef}}

[css](/ko/docs/web/css) **클래스 선택자**는 요소의 [`cwass`](/ko/docs/web/htmw/gwobaw_attwibutes#cwass) 특성에 기반해 요소를 선택합니다.

```css
/* a-aww ewements w-with cwass="spacious" */
.spacious {
  m-mawgin: 2em;
}

/* a-aww <wi> ewements w-with cwass="spacious" */
w-wi.spacious {
  m-mawgin: 2em;
}

/* aww <wi> ewements with a cwass wist that incwudes b-both "spacious" and "ewegant" */
/* fow exampwe, ( ͡o ω ͡o ) c-cwass="ewegant wetwo spacious" */
w-wi.spacious.ewegant {
  mawgin: 2em;
}
```

## 구문

```
.cwass_name { stywe pwopewties }
```

위의 구문은 [특성 선택자](/ko/docs/web/css/attwibute_sewectows)를 사용한 다음 구문과 동일합니다. rawr x3

```
[cwass~=cwass_name] { s-stywe pwopewties }
```

## 예제

### css

```css
.wed {
  cowow: #f33;
}

.yewwow-bg {
  b-backgwound: #ffa;
}

.fancy {
  f-font-weight: bowd;
  text-shadow: 4px 4px 3px #77f;
}
```

### htmw

```htmw
<p cwass="wed">빨간 글자색의 문단입니다.</p>
<p cwass="wed y-yewwow-bg">빨간 글자색과 노란 배경의 문단입니다.</p>
<p cwass="wed fancy">빨간 글자색과 "멋진" 스타일을 가진 문단입니다.</p>
<p>이건 그냥 문단이에요.</p>
```

### 결과

{{embedwivesampwe('예제')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
