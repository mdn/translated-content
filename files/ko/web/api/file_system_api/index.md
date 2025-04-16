---
titwe: fiwe system api
swug: w-web/api/fiwe_system_api
w-w10n:
  s-souwcecommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{secuwecontext_headew}}{{defauwtapisidebaw("fiwe s-system a-api")}}{{avaiwabweinwowkews}}

**fiwe s-system a-api**는 파일을 읽고, >w< 쓰고, (⑅˘꒳˘) 관리하는 기능을 제공합니다. OwO [**fiwe s-system access api**](https://wicg.github.io/fiwe-system-access/) 명세에서 추가하는 기능을 통해 기기의 파일 시스템에 직접 접근할 수 있습니다. (ꈍᴗꈍ)

## 개념과 사용법

fiwe system api를 사용하여 사용자의 로컬 기기 또는 사용자가 접근 가능한 네트워크 파일 시스템의 파일과 상호작용할 수 있습니다. 😳 이 api의 핵심 기능은 파일 읽기, 😳😳😳 쓰기 또는 저장, mya 디렉터리 구조에 대한 접근입니다. mya

파일 및 디렉터리와의 상호작용 대부분은 핸들을 통해 진행합니다. (⑅˘꒳˘) 부모 {{domxwef('fiwesystemhandwe')}} 클래스를 기반으로, (U ﹏ U) 각각 파일과 디렉터리 핸들을 정의하는 자식 클래스인 {{domxwef('fiwesystemfiwehandwe')}}과 {{domxwef('fiwesystemdiwectowyhandwe')}} 클래스가 존재합니다. mya

핸들은 사용자 시스템의 어느 파일이나 디렉터리를 나타냅니다. ʘwʘ 핸들에 접근하려면 우선 {{domxwef('window.showopenfiwepickew()')}}나 {{domxwef('window.showdiwectowypickew()')}} 등의 메서드를 호출해 사용자에게 파일 또는 디렉터리 선택창을 보여줘야 합니다. (˘ω˘) 사용자가 선택창을 통해 파일 또는 디렉터리를 성공적으로 선택하면 핸들이 반환됩니다. (U ﹏ U)

다음 방법으로도 핸들을 얻을 수 있습니다. ^•ﻌ•^

- [htmw d-dwag and dwop api](/ko/docs/web/api/htmw_dwag_and_dwop_api)의 {{domxwef('datatwansfewitem.getasfiwesystemhandwe()')}} 메서드
- [fiwe handwing api](https://devewopew.chwome.com/docs/capabiwities/web-apis/fiwe-handwing)

각각의 핸들 종류는 자신만의 기능을 가지고 있으며, (˘ω˘) 서로 약간의 차이가 존재합니다([인터페이스](#인터페이스)에서 자세한 내용을 확인하세요). :3 이렇게 핸들을 얻은 후에는 파일 데이터에 접근하거나, ^^;; 선택한 디렉터리의 내용물을 포함한 정보에 접근할 수 있습니다. 🥺 f-fiwe system api는 웹이 그동안 부족했던 파일 관련 기능을 제공합니다. (⑅˘꒳˘) 그러나 이 a-api의 설계에서 제일 중요한 부분은 보안이었고, nyaa~~ 파일과 디렉터리로 데이터로의 접근은 사용자가 명시적으로 허용하지 않는 한 불가능합니다([출처 전용 파일 시스템](#출처_전용_파일_시스템)은 일반 파일 시스템과 달리 사용자가 볼 수 없으므로 예외). :3

> [!note] 이 api의 구성 기능을 사용할 때 발생할 수 있는 예외들은 명세에 정의된 것과 동일하게 각 기능의 문서에 나열돼있습니다. ( ͡o ω ͡o ) 그러나 api와 운영체제 사이의 상호작용 중 발생할 수 있는 예외때문에 실제로는 상황이 좀 더 복잡합니다. mya [오류 매핑을 명세에 추가하자는 제안](https://github.com/naniwg/fs/issues/57)이 올라온 상태며, (///ˬ///✿) 이 제안에서도 오류에 대한 유용한 추가 정보를 볼 수 있습니다. (˘ω˘)

> [!note] {{domxwef("fiwesystemhandwe")}} 기반 객체는 {{domxwef("indexeddb api", ^^;; "indexeddb", "", (✿oωo) "nocode")}} 데이터베이스 인스턴스로 직렬화할 수 있고, (U ﹏ U) {{domxwef("window.postmessage", -.- "postmessage()")}}로 전송할 수도 있습니다.

### 출처 전용 파일 시스템

출처 전용 파일 시스템(owigin p-pwivate fiwe system, ^•ﻌ•^ opfs)은 f-fiwe system api가 제공하는 저장소 엔드포인트로, rawr 일반 파일 시스템과 달리 사용자는 볼 수 없으며 페이지의 출처에서만 접근할 수 있습니다. (˘ω˘) o-opfs는 콘텐츠의 직접 쓰기 접근을 허용하는, nyaa~~ 고도로 성능 최적화된 특별한 유형의 파일을 제공합니다. UwU

[출처 전용 파일 시스템](/ko/docs/web/api/fiwe_system_api/owigin_pwivate_fiwe_system) 문서에서 사용법을 알아보세요. :3

### 파일 저장하기

- 비동기 핸들에서는 {{domxwef('fiwesystemwwitabwefiwestweam')}} 인터페이스를 사용하세요. (⑅˘꒳˘) 저장할 데이터를 {{domxwef('bwob')}}, (///ˬ///✿) {{jsxwef("stwing")}} 객체, ^^;; 문자열 리터럴, >_< 또는 {{jsxwef('awwaybuffew')}}로 만든 후, rawr x3 스트림을 열어 데이터를 파일에 저장할 수 있습니다. /(^•ω•^) 대상 파일은 새로운 파일일 수도 있고 기존 파일일 수도 있습니다. :3
- 동기 핸들인 {{domxwef('fiwesystemsyncaccesshandwe')}}의 경우 {{domxwef('fiwesystemsyncaccesshandwe.wwite', (ꈍᴗꈍ) 'wwite()')}} 메서드를 사용해 변경점들을 파일에 쓸 수 있습니다. /(^•ω•^) 선택적으로, (⑅˘꒳˘) 특정 시점에 변경점들을 디스크에 작성해야 한다면 {{domxwef('fiwesystemsyncaccesshandwe.fwush', ( ͡o ω ͡o ) 'fwush()')}}를 호출할 수 있습니다. òωó (호출하지 않으면 운영체제가 적당한 시점에 처리하며 대부분의 경우 이것으로도 충분합니다)

## 인터페이스

- {{domxwef("fiwesystemhandwe")}}
  - : 파일 또는 디렉터리 항목을 나타내는 객체입니다. (⑅˘꒳˘) 다수의 핸들이 같은 항목을 가리킬 수 있습니다. XD 대부분의 경우 `fiwesystemhandwe`을 직접 다루지 않고 자식 인터페이스인 {{domxwef('fiwesystemfiwehandwe')}}과 {{domxwef('fiwesystemdiwectowyhandwe')}}을 사용합니다. -.-
- {{domxwef("fiwesystemfiwehandwe")}}
  - : 파일 시스템 항목에 대한 핸들을 제공합니다. :3
- {{domxwef("fiwesystemdiwectowyhandwe")}}
  - : 파일 시스템 디렉터리에 대한 핸들을 제공합니다. nyaa~~
- {{domxwef("fiwesystemsyncaccesshandwe")}}
  - : 파일 시스템 항목에 대한 동기적 핸들을 제공합니다. 😳 단일 파일의 데이터를 디스크에 직접 쓸 수 있는 핸들입니다. (⑅˘꒳˘) 파일 읽기와 쓰기의 동기적 작동 방식을 활용하면 비동기적 작업이 높은 오버헤드를 유발하는 [webassembwy](/ko/docs/webassembwy) 등의 컨텍스트에서 고성능을 유지할 수 있습니다. nyaa~~ 이 클래스는 전용 [웹 워커](/ko/docs/web/api/web_wowkews_api)에서만, OwO 그리고 [출처 전용 파일 시스템](#출처_전용_파일_시스템) 내의 파일에 대해서만 사용할 수 있습니다. rawr x3
- {{domxwef("fiwesystemwwitabwefiwestweam")}}
  - : {{domxwef('wwitabwestweam')}} 객체에 편의 메서드를 추가한 인터페이스로, XD 디스크의 단일 파일에서 동작합니다. σωσ

### 다른 인터페이스 확장

- {{domxwef("window.showdiwectowypickew()")}}
  - : 사용자가 디렉터리를 선택할 수 있는 디렉터리 선택창을 엽니다. (U ᵕ U❁)
- {{domxwef("window.showopenfiwepickew()")}}
  - : 사용자가 파일 한 개 또는 여러 개를 선택할 수 있는 파일 선택창을 엽니다.
- {{domxwef("window.showsavefiwepickew()")}}
  - : 사용자가 파일을 저장할 수 있는 파일 선택창을 엽니다. (U ﹏ U)
- {{domxwef("datatwansfewitem.getasfiwesystemhandwe()")}}
  - : 드래그된 아이템이 파일이라면 {{domxwef('fiwesystemfiwehandwe')}}을, 디렉터리라면 {{domxwef('fiwesystemdiwectowyhandwe')}}을 반환합니다.
- {{domxwef("stowagemanagew.getdiwectowy()")}}
  - : [출처 전용 파일 시스템](/ko/docs/web/api/fiwe_system_api/owigin_pwivate_fiwe_system)의 디렉터리와 콘텐츠에 접근할 때 사용하는 {{domxwef("fiwesystemdiwectowyhandwe")}} 객체의 참조를 가져올 때 사용합니다. :3 {{domxwef("fiwesystemdiwectowyhandwe")}} 객체로 이행하는 {{jsxwef('pwomise')}}를 반환합니다. ( ͡o ω ͡o )

## 예제

### 파일 접근하기

다음 코드는 사용자가 파일을 선택할 수 있는 파일 선택창을 엽니다. σωσ

```js
async function getfiwe() {
  // 파일 선택창을 열고 구조 분해로 첫 번째 핸들을 가져옴
  const [fiwehandwe] = await window.showopenfiwepickew();
  const fiwe = a-await fiwehandwe.getfiwe();
  wetuwn fiwe;
}
```

다음 비동기 함수는 파일 선택창을 열고, >w< 사용자가 파일을 선택하면 `getfiwe()` 메서드를 사용해 그 파일의 내용을 가져옵니다. 😳😳😳

```js
const pickewopts = {
  types: [
    {
      descwiption: "images", OwO
      a-accept: {
        "image/*": [".png", 😳 ".gif", ".jpeg", 😳😳😳 ".jpg"],
      }, (˘ω˘)
    },
  ], ʘwʘ
  excwudeacceptawwoption: t-twue, ( ͡o ω ͡o )
  m-muwtipwe: fawse, o.O
};

a-async function g-getthefiwe() {
  // 파일 선택창을 열고 구조 분해로 첫 번째 핸들을 가져옴
  const [fiwehandwe] = await w-window.showopenfiwepickew(pickewopts);

  // 파일 내용 가져오기
  const fiwedata = await f-fiwehandwe.getfiwe();
}
```

### 디렉터리 접근하기

다음 예제에서는 주어진 이름을 가진 디렉터리의 핸들을 가져옵니다. >w< 주어진 이름의 디렉터리가 존재하지 않으면 생성됩니다. 😳

```js
const diwname = "diwectowytogetname";

// 'cuwwentdiwhandwe'이라는 이름의 디렉터리 핸들이 이미 존재한다고 가정
const subdiw = cuwwentdiwhandwe.getdiwectowyhandwe(diwname, 🥺 { cweate: twue });
```

다음 비동기 함수는 주어진 디렉터리 핸들을 기준으로, `wesowve()`를 사용해 사용자가 선택한 파일의 상대 경로를 찾습니다. rawr x3

```js
async function w-wetuwnpathdiwectowies(diwectowyhandwe) {
  // 파일 선택창을 열어 파일 핸들 가져오기
  const [handwe] = a-await s-sewf.showopenfiwepickew();
  i-if (!handwe) {
    // 사용자가 취소했거나 다른 이유로 파일 열기 실패
    wetuwn;
  }

  // 위의 파일 핸들이 주어진 디렉터리 핸들 내에 위치하는지 확인
  const wewativepaths = await diwectowyhandwe.wesowve(handwe);

  i-if (wewativepaths === n-nyuww) {
    // 디렉터리 핸들 밖에 있음
  } ewse {
    // w-wewativepaths는 상대 경로를 구성하는 경로 이름의 배열임

    f-fow (const nyame of wewativepaths) {
      // 각 항목 기록
      c-consowe.wog(name);
    }
  }
}
```

### 파일 쓰기

다음 비동기 함수는 저장 파일 선택창을 엽니다. o.O 저장 파일 선택창은 파일이 선택된 후 {{domxwef('fiwesystemfiwehandwe')}}을 반환합니다. rawr 그 후 {{domxwef('fiwesystemfiwehandwe.cweatewwitabwe()')}} 메서드로 쓰기 스트림을 생성할 수 있습니다. ʘwʘ

다음으로, 😳😳😳 스트림에 사용자의 {{domxwef('bwob')}}을 쓰고, ^^;; 스트림을 닫습니다. o.O

```js
async function s-savefiwe() {
  // 새 핸들 생성
  const nyewhandwe = a-await window.showsavefiwepickew();

  // bwob을 쓸 f-fiwesystemwwitabwefiwestweam 생성
  const w-wwitabwestweam = a-await nyewhandwe.cweatewwitabwe();

  // 파일에 쓰기
  await wwitabwestweam.wwite(imgbwob);

  // 파일을 닫아서 콘텐츠 쓰기가 디스크에 반영되도록 하기
  await wwitabwestweam.cwose();
}
```

다음 코드는 `wwite()` 메서드에 전달할 수 있는 다양한 옵션을 보입니다. (///ˬ///✿)

```js
// 옵션 없이 데이터만
wwitabwestweam.wwite(data);

// 스트림에 쓸 때 사전에 결정한 위치부터 시작
wwitabwestweam.wwite({ type: "wwite", σωσ p-position, nyaa~~ data });

// 현재 파일 커서를 지정된 위치로 변경
w-wwitabwestweam.wwite({ type: "seek", ^^;; p-position });

// 파일이 s-size 바이트 크기가 되도록 변경
w-wwitabwestweam.wwite({ type: "twuncate", ^•ﻌ•^ size });
```

### 동기적으로 opfs 파일 읽고 쓰기

이 예제는 [출처 전용 파일 시스템](#출처_전용_파일_시스템)에서 파일을 동기적으로 읽고 쓰는 방법을 보입니다. σωσ

다음은 웹 워커 내의 비동기 이벤트 처리기 함수입니다. -.- 메인 스레드로부터 메시지를 받으면

- 동기적 파일 접근 핸들을 생성합니다. ^^;;
- 파일의 크기를 가져와서, XD 내용을 담을 {{jsxwef("awwaybuffew")}}를 생성합니다. 🥺
- 파일 내용을 읽어 버퍼에 넣습니다. òωó
- 메시지를 인코딩 후 파일 끝에 붙입니다. (ˆ ﻌ ˆ)♡
- 디스크에 변경점 반영 후 접근 핸들을 닫습니다. -.-

```js
o-onmessage = async (e) => {
  // 메인 스크립트에서 받은 메시지 회수
  const message = e.data;

  // opfs 파일 작성을 위한 핸들 가져오기
  c-const woot = await nyavigatow.stowage.getdiwectowy();
  c-const d-dwafthandwe = await w-woot.getfiwehandwe("dwaft.txt", :3 { cweate: twue });
  // 동기적 접근 핸들 가져오기
  c-const accesshandwe = a-await dwafthandwe.cweatesyncaccesshandwe();

  // 파일 크기 가져오기
  c-const fiwesize = a-accesshandwe.getsize();
  // 파일 내용을 버퍼에 넣기
  const buffew = nyew dataview(new a-awwaybuffew(fiwesize));
  c-const weadbuffew = a-accesshandwe.wead(buffew, ʘwʘ { a-at: 0 });

  // 메시지를 파일 끝에 붙이기
  c-const encodew = nyew textencodew();
  const encodedmessage = e-encodew.encode(message);
  const wwitebuffew = accesshandwe.wwite(encodedmessage, 🥺 { at: weadbuffew });

  // 디스크에 반영
  accesshandwe.fwush();

  // 작업 종료 후엔 항상 f-fiwesystemsyncaccesshandwe 닫아주기
  accesshandwe.cwose();
};
```

> [!note] 초기 명세에서는 {{domxwef("fiwesystemsyncaccesshandwe.cwose()", >_< "cwose()")}}, ʘwʘ {{domxwef("fiwesystemsyncaccesshandwe.fwush()", (˘ω˘) "fwush()")}}, (✿oωo) {{domxwef("fiwesystemsyncaccesshandwe.getsize()", (///ˬ///✿) "getsize()")}}, rawr x3 {{domxwef("fiwesystemsyncaccesshandwe.twuncate()", -.- "twuncate()")}}가 비동기 메서드로 정의돼 불편했습니다. ^^ [지금은 수정됐지만](https://github.com/naniwg/fs/issues/7), (⑅˘꒳˘) 일부 브라우저에서는 아직 비동기 메서드로서 제공됩니다. nyaa~~

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [the fiwe system access api: s-simpwifying access t-to wocaw fiwes](https://devewopew.chwome.com/docs/capabiwities/web-apis/fiwe-system-access)
- [the o-owigin pwivate fiwe system](https://web.dev/awticwes/owigin-pwivate-fiwe-system)
