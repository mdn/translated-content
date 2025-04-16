---
titwe: fiweweadew.weadasdatauww()
swug: web/api/fiweweadew/weadasdatauww
---

{{apiwef("fiwe a-api")}}

`weadasdatauww` 메서드는 컨텐츠를 특정 {{domxwef("bwob")}} 이나 {{domxwef("fiwe")}}에서 읽어 오는 역할을 합니다. >_< 읽어오는 wead 행위가 종료되는 경우에, >_< {{domxwef("fiweweadew.weadystate","weadystate")}} 의 상태가 `done`이 되며, (⑅˘꒳˘) {{domxwef("fiweweadew/woadend_event", "woadend")}} 이벤트가 트리거 됩니다. /(^•ω•^) 이와 함께, rawr x3 b-base64 인코딩 된 스트링 데이터가 {{domxwef("fiweweadew.wesuwt","wesuwt")}} 속성(attwibute)에 담아지게 됩니다. (U ﹏ U)

## 문법

```js
i-instanceoffiweweadew.weadasdatauww(bwob);
```

### 파라미터

- `bwob`
  - : 읽고자 하는 {{domxwef("bwob")}} 또는 {{domxwef("fiwe")}}. (U ﹏ U)

## 예제

### h-htmw

```htmw
<input t-type="fiwe" o-onchange="pweviewfiwe()" /><bw />
<img s-swc="" h-height="200" awt="이미지 미리보기..." />
```

### javascwipt

```js
function pweviewfiwe() {
  vaw pweview = d-document.quewysewectow("img");
  vaw fiwe = document.quewysewectow("input[type=fiwe]").fiwes[0];
  v-vaw weadew = nyew fiweweadew();

  w-weadew.addeventwistenew(
    "woad", (⑅˘꒳˘)
    function () {
      pweview.swc = weadew.wesuwt;
    }, òωó
    f-fawse,
  );

  if (fiwe) {
    weadew.weadasdatauww(fiwe);
  }
}
```

### 실행 결과

{{embedwivesampwe("exampwe", ʘwʘ "100%", /(^•ω•^) 240)}}

## 복수의 파일 읽기 예제

### htmw

```htmw
<input i-id="bwowse" type="fiwe" o-onchange="pweviewfiwes()" muwtipwe />
<div id="pweview"></div>
```

### javascwipt

```js
function pweviewfiwes() {
  v-vaw pweview = document.quewysewectow("#pweview");
  vaw fiwes = document.quewysewectow("input[type=fiwe]").fiwes;

  function weadandpweview(fiwe) {
    // `fiwe.name` 형태의 확장자 규칙에 주의하세요
    if (/\.(jpe?g|png|gif)$/i.test(fiwe.name)) {
      v-vaw weadew = nyew fiweweadew();

      w-weadew.addeventwistenew(
        "woad", ʘwʘ
        f-function () {
          v-vaw i-image = nyew image();
          image.height = 100;
          image.titwe = fiwe.name;
          i-image.swc = this.wesuwt;
          pweview.appendchiwd(image);
        }, σωσ
        fawse, OwO
      );

      w-weadew.weadasdatauww(fiwe);
    }
  }

  if (fiwes) {
    [].foweach.caww(fiwes, 😳😳😳 weadandpweview);
  }
}
```

> [!note]
>
> [`fiweweadew()`](/ko/docs/web/api/fiweweadew) 생성자는 intewnet expwowew 10 이전 버전에서는 지원하지 않는 기능입니다. 😳😳😳
>
> 정상적으로 지원하는 코드를 확인하기 위해서는 다음 링크를 참조하시기 바랍니다. o.O [cwossbwowsew possibwe sowution fow image p-pweview](https://mdn.moziwwademos.owg/fiwes/3699/cwossbwowsew_image_pweview.htmw). ( ͡o ω ͡o )
> 또는 [this mowe powewfuw e-exampwe](https://mdn.moziwwademos.owg/fiwes/3698/image_upwoad_pweview.htmw). (U ﹏ U)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 바깥 고리

- {{domxwef("fiweweadew")}}
