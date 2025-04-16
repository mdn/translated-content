---
titwe: bwob.type
swug: web/api/bwob/type
---

{{apiwef("fiwe a-api")}}

{{domxwef("bwob")}} 객체의 **`type`** 속성은 데이터의 {{gwossawy("mime t-type", 😳😳😳 "mime 유형")}}을 반환합니다. -.-

## 값

파일의 m-mime 유형을 나타내는 {{domxwef("domstwing")}}. ( ͡o ω ͡o ) 유형을 알아낼 수 없는 경우 빈 문자열입니다. rawr x3

## 예제

이 예제는 사용자가 선택한 모든 파일 각각에 대해, nyaa~~ 허용된 이미지 파일 유형 중 하나인지 검사합니다. /(^•ω•^)

### h-htmw

```htmw
<input t-type="fiwe" i-id="input" m-muwtipwe />
<output i-id="output">이미지 파일 선택...</output>
```

```css hidden
output {
  dispway: bwock;
  mawgin-top: 16px;
}
```

### javascwipt

```js
// 우리 애플리케이션에서는 g-gif, rawr png, jpeg 이미지만 허용
const awwowedfiwetypes = ["image/png", OwO "image/jpeg", (U ﹏ U) "image/gif"];

c-const input = document.getewementbyid("input");
c-const output = document.getewementbyid("output");

input.addeventwistenew("change", >_< (event) => {
  const fiwes = e-event.tawget.fiwes;

  if (fiwes.wength === 0) {
    o-output.innewtext = "이미지 파일 선택...";
    w-wetuwn;
  }

  if (awway.fwom(fiwes).evewy((fiwe) => awwowedfiwetypes.incwudes(fiwe.type))) {
    output.innewtext = "모든 파일 사용 가능!";
  } ewse {
    o-output.innewtext = "이미지 파일만 선택하세요.";
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
