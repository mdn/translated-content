---
title: 모바일과 데스크톱용 개별 사이트
slug: conflicting/Web/Progressive_web_apps
---

모바일 웹 개발에 관한 "개별 사이트" 접근 방식은 모바일과 데스크톱 웹 사용자를 위해 서로 다른 사이트를 제작한다는 의미입니다. 이러한 접근 방식에는 긍정적인 측면과 부정적인 측면이 있습니다.

## 장점

첫 번째 선택 사항은 가장 대중적입니다. 전화기에서 사용자들이 전형적인 m.example.com 식의 개별 모바일 사이트로 가도록 [사용자 에이전트 탐지(user-agent detection)](https://en.wikipedia.org/wiki/User_agent#User_agent_sniffing)를 이용합니다. 간단히 말하면, 이 기술은 [바일 웹 개발에서의 3가지 목표](https://blog.mozilla.com/webdev/2011/05/04/approaches-to-mobile-web-development-part-1-what-is-mobile-friendliness/)를 한 번에 해결하고자 서버 측(server-side) 로직을 사용합니다. 사용자의 브라우저가 전화기에 있는 것 같으면, 전화기에 맞춰 형식화되고 속도에 최적화된 모바일 콘텐츠를 제공합니다.

개념적으로 단순한 이 방식은 기존에 있는 사이트에 추가하면 되는 가장 쉬운 선택 사항입니다. 특히 템플릿을 제공하는 CMS나 웹 애플리케이션을 이용하고 있다면 말이죠. 모바일에 특화된 콘텐츠와 스타일, 스크립트만 모바일 사용자에게 보내지기 때문에 이 방식은 여기에서 보여진 다른 선택 사항들 중에 가장 높은 성능을 제공하기도 합니다. 마지막으로 데스크톱과 모바일에서 완전히 차별화된 사용자 경험을 줄 수 있습니다. 결국에는 두 개의 다른 사이트니까요!

## 단점

아쉽게도, 이 접근 방식에 문제점이 없지는 않습니다. 우선 첫째로, 모바일 사용자에게 보여주고 싶은 여러분의 사이트에서 모든 페이지에 대해 2가지 서로 다른 페이지를 유지 보수하게 됩니다. 만약 CMS를 사용 중이라면 이런 중복 작업을 최소화할 방법으로 사이트 템플릿을 정리할 수 있겠지요. 그렇더라도 모바일과 데스크톱 템플릿 간에 차이가 있는 때에는 코드에 복잡한 소스가 생길 가능성이 있습니다. 마찬가지로 프론트엔드 로직의 2세트에 대해 코드를 작성해야 하므로 새로운 사이트 피처(features)를 제공하는 시간이 길어집니다.

그보다 더 중요한 것은 사용자 에이전트 탐지에 본질적인 오류가 있고 결코 미래를 대비하지 못한다는 사실입니다. 새로운 브라우저가 나올 때마다 그에 부응하는 알고리즘을 수정해야 합니다. 그리고 긍정 오류(false positives)는 특히나 두렵습니다. 우연히 데스크톱 사용자들에게 모바일 사이트를 제공하는 황당함을 범할 수 있기 때문입니다.

## 이 선택이 옳은 경우

우선 목표 대상(target audience)에 오래되거나 저가(low-end) [피처폰](https://www.cnet.com/8301-17918_1-10461614-85.html)을 사용하는 사용자들을 포함한다면, 필히 이 전략을 [어느 정도](https://www.passani.it/gap/#adaptation) 이용해야 한다는 데 주목할 가치가 있습니다. 이는 일부 피처폰에 장착된 기본 브라우저에서 데스크톱용 대상인 웹사이트를 코딩하는데 쓰인 동일한 마크업을 지원하지 않기 때문입니다. 그대신[XHTML-MP](https://en.wikipedia.org/wiki/XHTML_Mobile_Profile)이나 더 오래된 [WML](https://en.wikipedia.org/wiki/Wireless_Markup_Language) 형식을 알고 있습니다.

이 요인 외에 이 전략이 다른 방식보다 더 빛을 발하는 경우가 하나 있습니다. 모바일 기기에서 사용자에게 제공하고 싶은 기능이 데스크톱에서의 기능과 완전히 다르다면, 개별 사이트를 이용하는 것이 [가장 실용적인 선택](https://tripleodeon.com/2010/10/not-a-mobile-web-merely-a-320px-wide-one)이 될 수 있습니다. 전혀 서로 다른 HTML과 자바스크립트, CSS를 전화기와 PC로 전송하는 선택 사항이기 때문이지요.

이 접근 방식을 강제로 써야 할 수 있는 또 다른 경우는, 이유가 무엇이든지, 기존에 있는 데스크톱 사이트를 수정하지 못해서 100% 개별 모바일 사이트가 필요할 때입니다. 이상적이진 않지만, 최소한 이런 선택 사항은 있습니다.

## 예제

[Facebook](https://m.facebook.com/)과 [YouTube](https://m.youtube.com/), [Digg](https://m.digg.com/), [Flickr](https://m.flickr.com/)를 포함해 여러분이 세상에서 보는 주요 웹 애플리케이션 중 대다수가 이 경로를 택했습니다. 실은 모질라는 [addons.mozilla.org](httpss://addons.mozilla.org/) (AMO)와 [support.mozilla.org](https://support.mozilla.com/) (SUMO)의 모바일 버전에도 이 전략을 선택했지요. 만약 여러분이 실제로 적용된 이 접근 방식의 예제 배후에 있는 소스 코드를 보고 싶다면, 맘 편히 [github repository for AMO](httpss://github.com/jbalogh/zamboni/) or [SUMO](httpss://github.com/jsocol/kitsune)를 확인해 보세요.

## 모바일 웹 개발에 관한 접근 방식

모바일 플랫폼 개발에 관한 배경과 다른 접근 방식을 다룬 아래 글들을 참조해 보세요.

- [모바일 친화적(mobile-friendliness)이란 무엇인가?](/en/Web_development/Mobile/Mobile-friendliness)
- [반응형 디자인](/ko/docs/Web_Development/Mobile/Responsive_design)
- [하이브리드 방식](/ko/docs/Web_Development/Mobile/A_hybrid_approach)

### 원문에 관한 정보

이 글은 본래 제이슨 그를리키(Jason Grlicky)가 작성한 "[모바일 웹 개발로의 접근 방식 2부 – 개별 사이트](https://blog.mozilla.com/webdev/2011/05/13/approaches-to-mobile-web-development-part-2-separate-sites/)"로 모질라 웹데브(Mozilla Webdev) 블로그에 2011년 5월 13일자로 게재되었습니다.
