---
title: Firefox 추적 방지
slug: Web/Privacy/Guides/Firefox_tracking_protection
original_slug: Web/Privacy/Firefox_tracking_protection
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

## 추적 방지란 무엇인가요?

데스크탑용 Firefox와 Android용 Firefox에는 내장된 추적 방지 기능이 포함되어 있습니다. 사생활 보호 창(Android용 Firefox에서는 탭)에서 Firefox는 사이트 전반에 걸쳐 사용자를 추적하는 도메인에서 로드된 콘텐츠를 차단합니다(예: [서드파티 쿠키](/ko/docs/Web/Privacy/Third-party_cookies)).

차단된 콘텐츠가 페이지 레이아웃의 일부인 경우, Firefox가 이러한 콘텐츠 로드를 차단하면 레이아웃 문제가 발생할 수 있습니다. 때로는 페이지 그리드가 차단된 요소가 남긴 구멍을 채우도록 작동하여 사용자가 전혀 눈치채지 못할 수도 있습니다.

Firefox가 콘텐츠를 차단하면 다음과 같은 메시지가 웹 콘솔에 기록됩니다.

```plain
콘텐츠 차단이 켜져 있어서 "http://some/url"에 있는 리소스가 차단되었습니다.
```

Android용 Firefox의 경우, 원격 디버거를 사용하여 콘솔 출력을 확인할 수 있습니다.

![차단된 콘텐츠를 보여주는 페이지 정보.](blocked_content.png)

주소 표시줄의 ⓘ 기호를 클릭하여 현재 로드된 페이지에 대한 정보를 확인할 수 있습니다. 나타나는 팝업은 콘텐츠가 차단되었을 때 이를 알려줍니다. 또한 추적 방지 설정에 접근하여 추적 방지를 완전히 비활성화할 수도 있습니다.

추적 쿠키가 있는 경우, 위 이미지에서 "추적 쿠키 차단"을 클릭하여 다음 팝업을 통해 목록을 확인할 수 있습니다.

![쿠키 및 사이트 데이터를 보여주는 페이지 정보.](tracking_cookies.png)

"콘텐츠 차단 관리"를 클릭하여 차단 설정을 변경할 수 있습니다.

![표준, 엄격 또는 사용자 정의의 3가지 콘텐츠 차단 수준이 있으며, 항상 켜짐 또는 Firefox가 알려진 추적기를 차단하도록 설정된 경우에만 켜짐으로 설정할 수 있습니다.](content_blocking.png)

## Firefox는 무엇을 차단할지 어떻게 선택하나요?

콘텐츠는 로드될 도메인을 기준으로 차단됩니다.

Firefox는 교차 사이트 사용자 추적에 관여하는 것으로 확인된 사이트 목록을 제공합니다. 추적 방지 기능이 활성화되면 Firefox는 목록에 있는 사이트의 콘텐츠를 차단합니다.

사용자를 추적하는 사이트는 대부분 서드파티 광고 및 분석 사이트입니다.

## 이것이 귀하의 웹사이트에 어떤 의미를 갖나요?

추적 방지 기능이 활성화되면 다음을 의미합니다.

- 서드파티 추적기에서 제공하는 콘텐츠는 사용자에게 보이지 않습니다.
- 귀하의 사이트는 추적에 관여하는 서드파티 광고 또는 분석 서비스를 사용할 수 없습니다.

좀 더 정확하게 말하자면, 사이트의 한 부분이 추적기가 로드되는 것에 의존하는 경우, 추적 방지 기능이 활성화되면 이러한 부분도 작동하지 않을 수 있습니다. 예를 들어, 추적 사이트에서 콘텐츠가 로드될 때 실행되는 콜백을 포함하는 경우, 콜백이 실행되지 않습니다.

예를 들어, 다음과 같은 방식으로 Google Analytics를 사용해서는 안 됩니다.

```html example-bad
<a
  href="http://www.example.com"
  onclick="trackLink('http://www.example.com', event);">
  Visit example.com
</a>

<script>
  function trackLink(url, event) {
    event.preventDefault();
    ga("send", "event", "outbound", "click", url, {
      transport: "beacon",
      hitCallback() {
        document.location = url;
      },
    });
  }
</script>
```

대신, Google Analytics가 없는 경우를 고려하여 ga 객체가 초기화되었는지 확인해야 합니다.

```html example-good
<a
  href="http://www.example.com"
  onclick="trackLink('http://www.example.com', event);">
  Visit example.com
</a>

<script>
  function trackLink(url, event) {
    event.preventDefault();
    if (window.ga && ga.loaded) {
      ga("send", "event", "outbound", "click", url, {
        transport: "beacon",
        hitCallback() {
          document.location = url;
        },
      });
    } else {
      document.location = url;
    }
  }
</script>
```

이 기술에 대한 자세한 정보는 [Google Analytics, Privacy, and Event Tracking](https://hacks.mozilla.org/2016/01/google-analytics-privacy-and-event-tracking/)에서 확인할 수 있습니다.

> [!NOTE]
> 이러한 방식으로 서드파티에 의존하는 것은 좋은 관행이 아닙니다. 서드파티가 느리거나 사용할 수 없거나, 또는 추적기가 애드온에 의해 차단된 경우 사이트가 깨질 수 있기 때문입니다.

<section id="Quick_links">
{{ListSubpages("/en-US/docs/Web/Privacy", "2", "0", "0")}}
</section>
