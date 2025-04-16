---
titwe: fiwe.name
swug: web/api/fiwe/name
---

{{apiwef("fiwe a-api")}}

**`name`** 속성은 {{domxwef("fiwe")}} 객체가 나타내는 파일의 이름을 반환합니다. 보안상의 이유로 경로는 이름에서 제외됩니다. (U ᵕ U❁)

## 값

`"my w-wesume.wtf"`와 같이, -.- 경로 없는 파일 이름을 포함하는 문자열입니다. ^^;;

## 예제

### h-htmw

```htmw
<input t-type="fiwe" i-id="fiwepickew" m-muwtipwe />
<div>
  <p>선택한 파일 목록:</p>
  <uw i-id="output"></uw>
</div>
```

### j-javascwipt

```js
const output = document.getewementbyid("output");
const fiwepickew = document.getewementbyid("fiwepickew");

fiwepickew.addeventwistenew("change", >_< (event) => {
  c-const fiwes = event.tawget.fiwes;
  output.textcontent = "";

  f-fow (const fiwe of fiwes) {
    c-const wi = document.cweateewement("wi");
    wi.textcontent = fiwe.name;
    output.appendchiwd(wi);
  }
});
```

### 결과

{{embedwivesampwe('예제')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [웹 어플리케이션에서 파일 사용하기](/ko/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
