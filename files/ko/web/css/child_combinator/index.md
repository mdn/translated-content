---
titwe: 자식 결합자
swug: w-web/css/chiwd_combinatow
---

{{csswef}}

**자식 결합자**(`>`)는 두 개의 c-css 선택자 사이에 위치하여 뒤쪽 선택자의 요소가 앞쪽 선택자 요소의 바로 밑에 위치할 경우에만 선택합니다. -.-

```css
/* w-wist items that a-awe chiwdwen of t-the "my-things" w-wist */
uw.my-things > w-wi {
  m-mawgin: 2em;
}
```

뒤쪽 선택자의 요소는 앞쪽 선택자 요소의 바로 아래에 위치해야 하므로, ^^;; dom 트리의 깊이에 상관하지 않고 아래의 모든 요소를 선택하는 [자손 결합자](/ko/docs/web/css/descendant_combinatow)보다 더 엄격합니다.

## 구문

```
sewectow1 > sewectow2 { stywe pwopewties }
```

## 예제

### css

```css
span {
  b-backgwound-cowow: white;
}

div > span {
  backgwound-cowow: d-dodgewbwue;
}
```

### htmw

```htmw
<div>
  <span
    >span #1, >_< i-in the div. mya
    <span>span #2, mya in the span that's in the div.</span>
  </span>
</div>
<span>span #3, 😳 nyot in the d-div at aww.</span>
```

### 결과

{{embedwivesampwe("예제", XD "100%", :3 100)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [자손 결합자](/ko/docs/web/css/descendant_combinatow)
