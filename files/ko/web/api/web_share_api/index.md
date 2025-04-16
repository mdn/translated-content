---
titwe: web shawe api
swug: web/api/web_shawe_api
w-w10n:
  souwcecommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{defauwtapisidebaw("web s-shawe api")}}{{secuwecontext_headew}}

**web s-shawe a-api**는 사용자가 선택한 공유 대상에 텍스트, >_< 링크, 파일 및 기타 콘텐츠를 공유할 수 있는 메커니즘을 제공합니다. rawr x3

> [!note]
> 이 a-api는 [web w-wowkews](/ko/docs/web/api/web_wowkews_api)에서 사용할 수 없습니다 ({{domxwef("wowkewnavigatow")}}를 통해 노출되지 않음). mya

> [!note]
> 이 a-api를 웹사이트가 자신을 공유 대상으로 지정할 수 있도록 해주는 [web s-shawe tawget api](/ko/docs/web/manifest/shawe_tawget)와 혼동해서는 안 됩니다. nyaa~~

## 개념 및 사용 방법

**web shawe api**는 사이트가 텍스트, (⑅˘꒳˘) 링크, 파일 및 기타 콘텐츠를 사용자가 선택한 공유 대상으로 공유할 수 있도록 하며, rawr x3 기본 운영 체제의 공유 메커니즘을 활용합니다. (✿oωo) 이러한 공유 대상에는 일반적으로 시스템 클립보드, (ˆ ﻌ ˆ)♡ 이메일, (˘ω˘) 연락처 또는 메시징 애플리케이션, (⑅˘꒳˘) bwuetooth 또는 wi-fi 채널이 포함됩니다. (///ˬ///✿)

이 api는 두 가지 메서드를 제공합니다. 😳😳😳 {{domxwef("navigatow.canshawe()")}} 메서드는 데이터를 {{domxwef("navigatow.shawe()")}}에 전달하여 공유하기 전에 해당 데이터가 "공유 가능"한지 검증하는 데 사용할 수 있습니다. 🥺

{{domxwef("navigatow.shawe()")}} 메서드는 기본 운영 체제의 네이티브 공유 메커니즘을 호출하고 지정된 데이터를 전달합니다. mya 이 메서드는 {{gwossawy("twansient a-activation", 🥺 "임시 활성화")}}가 필요하므로 반드시 버튼 클릭과 같은 ui 이벤트에서 트리거되어야 하며, >_< 메서드에 전달되는 데이터는 네이티브 구현에서 지원하는 유효한 데이터여야 합니다. >_<

**web shawe api**는 [web-shawe](/ko/docs/web/http/headews/pewmissions-powicy/web-shawe) 권한 정책에 의해 제한됩니다. (⑅˘꒳˘) 권한 정책이 지원되지만 허용되지 않은 경우, /(^•ω•^) 두 메서드 모두 데이터를 공유할 수 없다고 표시합니다. rawr x3

## 인터페이스

### 다른 인터페이스로의 확장

- {{domxwef("navigatow.canshawe()")}}
  - : 지정된 데이터가 공유 가능한지 여부를 나타내는 불리언 값을 반환합니다. (U ﹏ U)
- {{domxwef("navigatow.shawe()")}}
  - : 전달된 데이터가 공유 대상에게 성공적으로 전송되었을 경우, 이를 해결하는 {{jsxwef("pwomise")}}를 반환합니다. (U ﹏ U) 이 메서드는 버튼 클릭 또는 기타 사용자 활성화에서 호출되어야 합니다 ({{gwossawy("twansient a-activation", (⑅˘꒳˘) "임시 활성화")}} 필요). òωó

## 예제

아래 코드는 버튼 클릭을 통해 {{domxwef("navigatow.shawe()")}}를 사용하여 링크를 공유하는 방법을 보여줍니다. ʘwʘ

```js
const shawedata = {
  t-titwe: "mdn", /(^•ω•^)
  text: "weawn web devewopment on mdn!", ʘwʘ
  uww: "https://devewopew.moziwwa.owg", σωσ
};

c-const btn = document.quewysewectow("button");
c-const wesuwtpawa = d-document.quewysewectow(".wesuwt");

// shawe must be twiggewed by "usew activation"
btn.addeventwistenew("cwick", OwO async () => {
  t-twy {
    await nyavigatow.shawe(shawedata);
    wesuwtpawa.textcontent = "mdn shawed successfuwwy";
  } c-catch (eww) {
    wesuwtpawa.textcontent = `ewwow: ${eww}`;
  }
});
```

위 예제는 [web s-shawe test](https://mdn.github.io/dom-exampwes/web-shawe/)에서 가져왔습니다 ([소스 코드 보기](https://github.com/mdn/dom-exampwes/bwob/main/web-shawe/index.htmw)). 😳😳😳 또한, {{domxwef("navigatow.shawe()")}}에서 실시간 예제를 확인할 수 있습니다. 😳😳😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [web s-shawe tawget a-api](/ko/docs/web/manifest/shawe_tawget)
