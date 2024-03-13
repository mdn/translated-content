---
title: PWA를 설치가능하게 만드는 방법
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
---

{{PreviousMenuNext("Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive/Re-engageable_Notifications_Push", "Web/Apps/Progressive")}}

이전 문서에서는 [service worker](/ko/docs/Web/API/Service_Worker_API)의 도움으로 [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) 을 오프라인에서 동작하는 방법에 대해 알아보았습니다. 그런데 우리는 더 나아가 모바일 브라우저를 지원하는 웹 앱을 네이티브 앱처럼 설치할 수 있게 할수도 있습니다. 이 문서에서는 웹 manifest를 사용해 홈 화면에 추가라고 불리는 기능을 구현하는 방법에 대해 설명합니다.

이러한 기술들은 앱을 URL을 수동으로 브라우저에 입력하는 대신 기기의 홈 화면에서 바로 실행할 수 있도록 해줍니다. 여러분의 웹 앱을 네이티브 어플리케이션 바로 옆 가장 좋은 자리에 놓을 수 있습니다. 따라서 접근이 더 쉽고, 브라우저 주변 기능이 없는 전체 화면에서 실행되도록 지정하여 더욱 더 네이티브 앱과 같은 느낌을 줄 수 있습니다.

## 요구 사항

웹 사이트를 설치가능하게 하려면 다음과 같은 것들이 필요합니다.

- [올바른 값들로 채워진](/ko/Apps/Progressive/Add_to_home_screen#Manifest) 웹 manifest
- 보안 (HTTPS) 도메인에서 제공되는 웹 사이트
- 기기에서 앱을 나타낼 아이콘
- 앱을 오프라인에서 동작하게 하기 위한 service worker 등록(현재 Android용 Chrome에서만 요구됩니다)

### manifest 파일

핵심 요소는 JSON 형식으로 웹 사이트에 대한 모든 정보를 나열한 웹 manifest 파일입니다.

파일은 일반적으로 웹 앱의 루트 폴더에 위치합니다. 앱의 title, 모바일 OS에서 앱을 나타내는데 사용(예를 들어, 홈 화면 아이콘)되는 다른 크기의 아이콘들의 경로, 로딩 또는 스플래시 화면에서 사용할 배경 색상과 같은 유용한 정보들을 포함합니다. 이는 브라우저가 웹 앱을 설치할 때 그리고 홈 화면에서 웹 앱을 적절히 표현하기 위해 필요한 정보입니다.

[js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) 웹 앱의 `js13kpwa.webmanifest` 파일은 코드의 다음 라인을 통해 `index.html` 파일의 {{htmlelement("head")}} 섹션에 포함됩니다.

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> **참고:** 과거에 manifest로 사용되던 몇 가지 흔한 확장자들이 있습니다: `manifest.webapp` 은 Firefox OS 웹 manifest로 유명하며, 많은 사람들이 JSON 구조로 내용이 구성된 `manifest.json`을 사용합니다. 하지만, `.webmanifest` 확장자는 [W3C manifest 명세](https://w3c.github.io/manifest/)에 명시적으로 언급되고 있으므로 이를 그대로 사용하도록 하겠습니다.

파일의 내용은 다음과 같습니다.

```json
{
  "name": "js13kGames Progressive Web App",
  "short_name": "js13kPWA",
  "description": "Progressive Web App that lists games submitted to the A-Frame category in the js13kGames 2017 competition.",
  "icons": [
    {
      "src": "icons/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    // ...
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/pwa-examples/js13kpwa/index.html",
  "display": "fullscreen",
  "theme_color": "#B12A34",
  "background_color": "#B12A34"
}
```

항목은 대부분은 스스로를 설명하고있지만, 문서를 분석하고 자세한 내용에 대해 설명해드리겠습니다.

- `name`: 웹 앱의 이름입니다.
- `short_name`: 홈 화면에 표시할 약식 이름입니다.
- `description`: 앱이 무엇을 하는지 설명하는 간략한 문장입니다.
- `icons`: 아이콘들의 정보(URL, 크기, 타입)입니다. 사용자의 기기에 적합한 것을 선택할 수 있도록 여러 개를 추가하시기 바랍니다.
- `start_url`: 앱이 시작할 때 실행할 초기 문서입니다.
- `display`: 앱을 표시하는 방식입니다(전체 화면, 독립형(standalone), 최소 UI, 또는 브라우저).
- `theme_color`: 운영 체제에 의해 사용될 UI를 위한 주요 색상입니다.
- `background_color`: 스플래시 화면과 설치하는 동안 사용될 배경 색상입니다.

웹 manifest를 위한 최소 요구 사항은 `name`과 적어도 하나(`src`, `size`, `type`을 포함)의 아이콘입니다. `description`, `short_name`, `start_url`은 권장사항입니다. 위에서 나열한 항목 외 더 많은 항목들이 있습니다. [Web App Manifest 레퍼런스](/ko/docs/Web/Manifest)에서 자세한 내용에 대해 확인하시기 바랍니다.

## 홈 화면에 추가

"홈 화면에 추가"(또는 간단히 a2hs)는 모바일 브라우저에서 구현된 기능으로, 앱의 웹 manifest에서 찾은 정보를 사용해 아이콘과 이름 정보로 기기의 홈 화면에서 앱을 나타냅니다. 이는 앱이 위에서 설명한 모든 필수 요구조건을 만족할때만 동작합니다.

사용자가 모바일 브라우저를 지원하는 PWA에 방문할 때, PWA로써 앱 설치를 가능하게하는 배너가 나타나야합니다.

![Add to Home screen popup of js13kPWA.](js13kpwa-icon.png)

사용자가 이 배너를 클릭하면 설치 배너가 나타납니다. 배너는 브라우저에의해 자동으로 생성되며, manifest 파일의 정보(프롬프트에 보여질 이름, 아이콘)를 기반으로합니다.

![Install banner of js13kPWA.](js13kpwa-banner.png)

사용자가 버튼을 클릭하면 앱이 어떻게 표시될지를 보여주며, 사용자에게 정말 앱 추가를 원하는지 선택하도록 하는 마지막 단계가 있습니다.

![Add to Home screen popup of js13kPWA.](js13kpwa-add.png)

확인을 하면 앱이 홈 화면에 설치됩니다.

![](js13kpwa-installed.png)

그 후, 즉시 아이콘을 사용해 이를 실행하여 시작할 수 있습니다. PWA가 가끔(여러분이 사용하는 브라우저나 운영체제에 따라) 아이콘의 우측 하단에 작은 브라우저 이미지가 있어 사용자에게 웹 특성에 대한 정보를 줍니다.

### 스플래시 화면

일부 브라우저에서, PWA가 실행될 때 보여지는 스플래시 화면 역시 manifest의 정보로부터 생성됩니다.

![](js13kpwa-splash.png)

아이콘과 테마 그리고 배경 색상은 이 화면을 생성하기 위해 사용됩니다.

## 요약

이 문서에서는 웹 manifest와 홈 화면에 추가를 사용해 PWA를 설치가능하게 하는 방법에 대해 배웠습니다.

홈 화면에 추가에 대한 자세한 내용은 [홈 화면에 추가 가이드](/ko/docs/Web/Apps/Progressive/Add_to_home_screen)를 읽어보시기 바랍니다. 브라우저 지원은 현재 Android 용 Firefox 58+, 모바일 Chrome 및 Android 웹 뷰 31+, Android 32+ 용 Opera로 제한되어 있지만 가까운 장래에 개선 될 것입니다.

이제 PWA 퍼즐의 마지막 조각(푸시 알림을 통한 재참여)으로 이동해봅시다.

{{PreviousMenuNext("Web/Apps/Progressive/Offline_Service_workers", "Web/Apps/Progressive/Re-engageable_Notifications_Push", "Web/Apps/Progressive")}}
