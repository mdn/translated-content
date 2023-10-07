---
title: 멀티미디어와 임베딩
slug: Learn/HTML/Multimedia_and_embedding
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}

우리는 이 과정에서 지금까지 많은 텍스트를 살펴 봤지만 텍스트만을 사용한 웹은 따분합니다. 보다 흥미로운 내용으로 웹을 생생하게 만드는 방법을 살펴 보도록 합시다! 여기에서는 HTML을 사용하여 이미지를 포함 할 수있는 다양한 방법과 비디오, 오디오 및 웹 페이지 전체를 포함하는 방법을 비롯하여 웹 페이지에 멀티미디어를 포함하는 방법을 살펴 보도록 하겠습니다.

## 전제조건

이 단원을 시작하기 전에 앞서 [HTML소개](/ko/docs/Learn/HTML/Introduction_to_HTML)에서 설명한대로 HTML에 대한 기본 지식이 있어야합니다. 이 모듈 (또는 이와 비슷한 것)을 사용해 보지 않았다면, 처음부터 다시 시작후 돌아오세요!

> **참고:** 자신만의 파일을 만들수 없는 컴퓨터/테블릿/그외 기기에서 작업하는 경우, 코드 예제를 (대부분을) [JSBin](https://jsbin.com/) 이나 [Glitch](https://glitch.com/)같은 온라인 코딩 프로그램을 통해 수행해 볼 수 있습니다

## 가이드

이 단원에는 웹 페이지에 멀티미디어를 삽입하는 모든 기본 사항을 설명하는 다음 문서가 포함되어 있습니다.

- [HTML 이미지](/ko/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : 여기에는 고려해야할 다른 종류의 멀티미디어들이 있지만, 간단한 이미지를 웹페이지에 삽입하는데 사용되는 일반적인 {{htmlelement("img")}} 엘리먼트를 사용하는것이 합리적입니다. 이번 내용에서는 {{htmlelement("figure")}} 사용하여, 기본적인 내용 및 캡션을 주석으로 추가하는 방법, CSS 배경 이미지와의 관계에 대해 자세히 다룰 것입니다.
- [비디오와 오디오 컨텐츠](/ko/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : 다음으로, {{htmlelement("video")}} 와{{htmlelement("audio")}} 엘리먼트를 사용하여 페이지에 비디오 및 오디오를 포함하는 방법을 살펴 보겠습니다. 기본기능을 포함, 여러종류의 브라우저에 다양한 파일 포맷에 접근하는 법, 캡션 및 자막 추가, 구형 브라우저에 대한 폴백 (fallback) 추가 방법 등 다양한 기능을 제공합니다.
- [\<object> 로부터 \<iframe>까지 — 기타 임베딩 기술](/ko/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : 여기서는 웹 페이지에 다양한 콘텐츠 유형을 삽입 할 수있게 해주는 몇가지 추가적인 요소를 살펴봅니다 : {{htmlelement("iframe")}}, {{htmlelement("embed")}} 그리고 {{htmlelement("object")}} 엘리먼트입니다. `<iframe>`은 다른 웹 페이지를 삽입하기위한 것이고, 나머지 두 개는 PDF, SVG 및 플래시까지 포함 할 수 있습니다. — 이 기술들은 사라지는 중이지만 여전히 볼수 있을것입니다.
- [Vector graphics 웹에 추가하기](/ko/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : Vector graphics 는 특정한 상황에서 매우 유용할 수 있습니다. Vector graphics 는 PNG/JPG와 같은 일반적인 형식과 달리 확대 시 왜곡/픽셀레이트가 발생하지 않으며, 스케일링 시 매끄러운 상태를 유지할 수 있습니다. 이 글에서는 Vector graphics 가 무엇인지, 웹 페이지에 인기 있는 {{glossary("SVG")}} 포맷을 포함시키는 방법에 대해 소개합니다.
- [Responsive images(반응형 이미지)](/ko/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : 휴대전화에서 데스크톱 컴퓨터에 이르기까지, 웹을 검색할 수 있는 매우 다양한 유형의 장치들로 인해서 형성된 현대 웹 세계를 마스터하기 위한 필수적인 개념은 반응형 디자인입니다. 이는 다양한 화면 크기, 해상도 등에 맞춰 기능을 자동으로 변경할 수 있는 웹 페이지를 만드는 것을 말합니다. 이것은 나중에 CSS 모듈에서 훨씬 더 자세히 살펴보겠지만, 현재로서는 HTML이 {{htmlelement("picture")}} 요소를 포함하여 반응형 이미지를 만드는 데 사용할 수 있는 도구를 살펴보기로 하겠습니다.

## 평가

아래의 평가는 위의 가이드에서 다루는 HTML 기본 사항에 대한 이해를 테스트합니다.

- [Mozilla 스플래시 페이지](/ko/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : 이 평가에서, 우리는 당신이 Mozilla 에 관한 모든 펑키한 스플래시 페이지에 몇 개의 이미지와 비디오를 추가하도록 하며, 이 모듈의 기사에서 논의된 몇 가지 기술에 대하여 당신의 지식을 테스트할 것입니다!

## 같이 보기

- [이미지 위에 히트맵 추가](/ko/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : 이미지 맵은 이미지 링크의 다른 부분을 다른 곳에 연결하는 메커니즘을 제공합니다(당신이 클릭하는 각 나라에 대한 추가 정보들과 연결되는 지도를 생각해 봅시다). 이 기술은 때때로 유용하게 활용될 수 있습니다.
- [Web literacy basics 2](https://mozilla.github.io/curriculum-final/web-lit-basics-two/session01-why-do-we-use-the-web.html#overview)
  - : 멀티미디어 및 임베딩 모듈에서 다룬 몇 가지 기술을 탐구하고 테스트하는 훌륭한 Mozilla 기초 과정입니다. 웹 페이지 작성, 접근성을 위한 디자인, 리소스 공유, 온라인 미디어 사용, 오픈 작업(콘텐츠를 다른 사람이 자유롭게 사용할 수 있고 공유할 수 있도록 하는 것)의 기본 사항에 대해 자세히 알아볼 수 있습니다.
