---
title: 웹사이트의 외관은 어떻게 할까요?
slug: Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like
original_slug: Learn/Getting_started_with_the_web/What_will_your_website_look_like
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

_웹사이트의 외관은 어떻게 할까요?_ 에서는 "나의 웹사이트가 무슨 정보를 제공할 것인지?" "무슨 글꼴과 색상을 사용할 것인지?" "나의 웹사이트가 무엇을 하는지?" 를 포함해, 코드를 작성하기 _전에_ 여러분이 해야할 계획 세우기와 디자인에 대해 이야기 할 것입니다.

## 중요한것 먼저 하기: 계획 세우기

무언가를 하기 전에, 여러분은 어떤 아이디어가 필요합니다. 웹사이트가 실제로 무엇을 해야하는지? 웹사이트가 기본적으로 무엇을 할 수 있는지, 하지만 여러분의 첫 시도를 위해선 이것을 간단히 할 필요가 있습니다. 우리는 제목과 사진, 그리고 몇 개의 문단을 포함한 간단한 웹페이지를 제작하는 것부터 시작할 것입니다.

시작하기 위해, 여러분은 몇 가지 질문에 답해야 합니다.

1. **여러분의 웹사이트는 무엇에 관한 것인가요?** 강아지나 뉴욕, 또는 팩맨 좋아하세요?
2. **주제에 대해 어떤 정보를 나타낼 것인가요?** 여러분의 웹페이지에 나타내기 원하는 제목과 몇개의 문단들, 그리고 그림에 대한 생각을 작성하세요.
3. **웹사이트의 외관은 어떻게 할까요,** in simple high-level terms. 배경색은 무엇으로 할 것인지?어떤 글꼴(폰트)이 적합한지: 딱딱하게, 만화스럽게, 굵고 크게, 얇게?

> [!NOTE]
> 복잡한 프로젝트들은 색상, 글꼴, 페이지의 항목간 공간, 적절한 문체 등 세부적인 가이드라인을 필요로 합니다. 이것은 디자인 가이드 또는 브랜드 북이라고 불리기도 합니다. [Firefox OS 가이드라인](https://www.mozilla.org/en-US/styleguide/products/firefox-os/)_에서 그 예시를 볼 수 있습니다._.

## 디자인을 스케치하기

다음으로, 펜과 종이를 가져와 여러분의 사이트가 어떻게 나타날 것인지 대략적으로 스케치하세요. 여러분의 첫 번째 간단한 웹페이지를 위해선, 과도한 스케치는 필요 없지만, 지금 습관으로 만드는게 좋습니다. 정말 도움이 됩니다--반 고흐가 될 필요는 없습니다!

![](website-drawing-scan.png)

> [!NOTE]
> 실제로도, 복잡한 웹사이트들에서, 디자인팀은 보통 종이에 대략적인 스케치를 하는 것으로 일을 시작합니다. 그리고 이후에 시각적인 편집기나 웹 기술을 사용해 디지털 모형화 합니다.
>
> 웹 팀들은 그래픽 디자이너와 사용자 경험 (UX) 디자이너 모두와 일합니다. 그래픽 디자이너들은, 분명히, 웹사이트의 시각적인 것들을 합칩니다. UX 디자이너는 사용자들이 웹사이트를 어떻게 경험하고 반응하는지에 대한 무언가 더 추상적인 것을 합니다.

## 자원 선택하기

여기에서, 여러분의 웹페이지에 최종적으로 나타나게될 내용을 합치는 것을 시작하기에 좋습니다.

### 문자

여러분은 제목이나 문단들을 일찍 작성해야 합니다. 항상 신경쓰는것이 좋습니다.

### 주요 색상

색상을 선택하기 위해, [the Color Picker](/ko/docs/Web/CSS/CSS_colors/Color_picker_tool)로 가서 여러분이 원하는 색을 찾아보세요. 한 색을 선택하면, 여러분은 #660066같은 여섯 문자의 이상한 코드를 보게 될 것입니다. 이것은 _hex(adecimal)_ 코드로 불리고, 여러분의 색을 나타냅니다. 안전한 어느 곳에 복사해두세요.

![](screenshot_from_2014-11-03_17-40-49.png)

### 그림들

그림을 선택하기 위해, [Google Images](https://www.google.com/imghp?gws_rd=ssl)에 가서 적합한 것을 찾아보세요.

1. 원하는 그림을 찾으면, 이미지를 클릭하세요.
2. *이미지 보기(View image)*버튼을 누르세요.
3. 다음 페이지에서, 이미지를 우클릭하고 (맥에서는 Ctrl + click), *다른 이름으로 이미지 저장(Save Image As...)*를 누르고, 이미지를 저장할 안전한 공간을 선택하세요. 다른 방법으로는, 나중에 사용하기 위해 여러분의 웹 브라우저의 주소에서 이미지의 웹 주소를 복사하는 것이 있습니다.

![](screenshot_from_2014-11-04_15-09-21.png)

![](screenshot_from_2014-11-04_15-20-48.png)

> [!NOTE]
> Google Images를 포함한, 웹에 있는 대부분의 그림들은 저작권이 있습니다. 저작권 침해의 가능성을 줄이기 위해선, Google's license filter를 사용하는 방법이 있습니다. 1) **검색 도구**(**Search tools**)를 클릭하고, 2) **사용 권한**(**Usage rights**)를 선택하면 됩니다:
>
> ![](screenshot_from_2014-11-04_14-27-45.png)

### 글꼴

글꼴을 선택하기 위해:

1. [Google Fonts](https://www.google.com/fonts)에 가서 원하는 것을 찾을 때까지 스크롤을 내리세요. 결과에 대한 필터를 위해선 왼쪽 메뉴를 사용하면 됩니다.
2. 원하는 폰트의 옆에 있는 _Add to collection_ 버튼을 클릭하세요.
3. 페이지의 아래에 있는 _Use_ 버튼을 클릭하세요.
4. 다음 페이지에서, 3 과 4 구역으로 스크롤을 내리고, 구글에서 제공한 코드를 여러분의 텍스트 편집기에 복사하고 나중을 위해 저장하세요.

![](screenshot_from_2014-11-04_15-38-14.png)

![](screenshot_from_2014-11-04_15-51-36.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}
