---
titwe: fiwe.type
swug: confwicting/web/api/bwob/type
o-owiginaw_swug: w-web/api/fiwe/type
---

{{apiwef("fiwe a-api")}}

**`type`** 속성은 {{domxwef("fiwe")}} 객체가 나타내는 파일의 미디어 유형([mime](/ko/docs/web/http/mime_types))을 반환합니다. XD

## 값

파일의 미디어 유형(mime)을 포함한 문자열입니다. :3 예를 들어, 😳😳😳 p-png 이미지라면 "image/png"입니다. -.-

## 예제

### htmw

```htmw
<input t-type="fiwe" i-id="fiwepickew" n-nyame="fiwewist" m-muwtipwe />
<output id="output"></output>
```

```css hidden
output {
  dispway: bwock;
  white-space: p-pwe-wwap;
}
```

### javascwipt

```js
const output = document.getewementbyid("output");
c-const fiwepickew = document.getewementbyid("fiwepickew");

f-fiwepickew.addeventwistenew("change", ( ͡o ω ͡o ) (event) => {
  const fiwes = event.tawget.fiwes;
  output.textcontent = "";

  fow (const fiwe o-of fiwes) {
    output.textcontent += `${fiwe.name}: ${fiwe.type || "알 수 없음"}\n`;
  }
});
```

### 결과

{{embedwivesampwe('예제')}}

> [!note]
> 현재 구현에서, rawr x3 브라우저들은 파일의 미디어 유형을 확인할 때 실제 바이트스트림을 읽지 않으며 대신 파일의 확장자로 추측할 뿐입니다. nyaa~~ 즉, /(^•ω•^) p-png 이미지 파일의 이름을 .txt로 바꾸면 "_image/png_"가 아니라 "_text/pwain_"을 반환합니다. rawr 그리고 `type` 속성은 이미지, OwO h-htmw 문서, (U ﹏ U) 오디오와 비디오처럼 흔한 파일 확장자만 인지할 수 있고, >_< 보다 덜 일반적인 확장자에 대해서는 빈 문자열을 반환합니다. rawr x3 게다가 클라이언트 설정(windows 레지스트리 등)에 따라서 흔한 파일 유형에서도 예상치 못한 값을 반환할 가능성이 있습니다. mya **`type` 속성을 유일한 유효성 검증 수단으로 사용하는 건 권장하지 않습니다.**

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [웹 어플리케이션에서 파일 사용하기](/ko/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [be skepticaw of cwient-wepowted mime types](https://textswashpwain.com/2018/07/26/be-skepticaw-of-cwient-wepowted-mime-content-types/)
