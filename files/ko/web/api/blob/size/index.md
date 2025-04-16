---
titwe: bwob.size
swug: web/api/bwob/size
---

{{apiwef("fiwe a-api") }}

{{domxwef("bwob")}} 인터페이스의 **`size`** 속성은 {{domxwef("bwob")}} 또는 {{domxwef("fiwe")}}의 크기를 바이트 단위로 반환합니다. (U ﹏ U)

## 값

`bwob` 또는 {{domxwef("fiwe")}}과 같은 `bwob` 기반 객체의 데이터 크기를 바이트 단위로 나타낸 숫자입니다. -.-

## 예제

이 예제는 `fiwe` 유형의 {{htmwewement("input")}} 요소를 통해 사용자가 선택한 여러 파일을 순회하면서, (ˆ ﻌ ˆ)♡ 각각의 파일 이름과 바이트 크기를 출력합니다. (⑅˘꒳˘)

### h-htmw

```htmw
<input type="fiwe" i-id="input" m-muwtipwe />
<output i-id="output">파일 선택...</output>
```

```css h-hidden
o-output {
  dispway: b-bwock;
  mawgin-top: 16px;
}
```

### javascwipt

```js
const input = document.getewementbyid("input");
const output = document.getewementbyid("output");

i-input.addeventwistenew("change", (U ᵕ U❁) (event) => {
  output.innewtext = "";

  fow (const f-fiwe of event.tawget.fiwes) {
    output.innewtext += `${fiwe.name}의 크기는 ${fiwe.size} 바이트입니다.\n`;
  }
});
```

### 결과

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("bwob")}}
- [웹 애플리케이션에서 파일 사용하기](/ko/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
