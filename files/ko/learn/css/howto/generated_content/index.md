---
title: 내용물
slug: Learn/CSS/Howto/Generated_content
---

> **경고:** 번역은 제가 필요한 부분 및 확인 가능한 부분만 진행 하였으며 변역된 날자는(2013/03/18)이며 문서 변경이 잦아 오늘 이후는 원문과 번역이 다를 수 있습니다. 참고하세요. 미 번역/변경된 부분은 추가로 다른 분이 해 주실 것으로 믿습니다.

[CSS 시작하기](/en/CSS/Getting_Started) 안내서 9번째 장; 이번에는 CSS에서Document에 표시될 내용물을 추가 하는 방법을 알아보자. stylesheet를 수정해서 텍스트 내용과 이미지를 수정해 보자.

## 정보: 내용물

CSS사용상의 가장 큰 장점은 document의 스타일과 내용물을 분리할 수 있도록 도와준다. 하지만 아직은 Document의 일부가 아니라 Stylesheet의 일부로서 존재해야 이치가 맞아 보이는 내용들도 있다.

stylesheet에 놓여진 내용물(content)은 텍스트나 이미지로 구성될 수 있다. Document의 구조와 밀접하게 연결된 내용물(content)은 stylesheet에 명시 할수 있다.

좀더 자세히

stylesheet에 내용물(content)을 표시하는 것은 복잡한 문제를 발생 시킬 수도 있다. 예를 들면, 동일한 stylesheet를 사용하는 여러 언어를 지원하는 Document의 경우이다. 만약 stylesheet일 일부분이 번역되어야 하는 경우가 있다면 이 부분은 stylesheet와는 분리된 파일로 저장하고 Document 언어에 맞는 파일이 연결 되도록 할당 해야 한다.

이미지나 심볼 혹은 모든 언어나 문화에 공통으로 사용되는 것을 쓴다면 이러한 문제는 발생하지 않는다.

stylesheet에 작성된 내용물(Content)은 DOM의 일부가 될 수는 없다.

### 텍스트 내용물

CSS는 element 전후로 텍스트 내용물을 넣을 수 있다. 이를 위해서는, 규칙을 만들고 {{ cssxref(":before") }}나 {{ cssxref(":after") }}를 구분자로 넣고 여기에 추가 하라. 선언부에 {{ cssxref("content") }}속성선언과 그 값으로 텍스트를 추가 하라.

예제

이 규칙은 모든 'ref' class element 앞에 'Reference :'텍스트를 추가 한다.

```css
.ref:before {
  font-weight: bold;
  color: navy;
  content: "Reference: ";
}
```

좀더 자세히

stylesheet의 코드셋은 UTF-8이 기본이다. 그러나 링크 내나 stylesheet내 혹은 다른 방법으로 코드셋을 설정 할 수 있다. CSS 사양서의 [4.4 CSS style sheet representation](http://www.w3.org/TR/CSS21/syndata.html#q23)를 참고 하라.

독특한 캐릭터도 백슬레쉬(\\)와 함께 사용하는 escape 표시법으로 사용 할 수 있다. 예를 들어 \256B는 블랙퀸 체스 심볼(♛)이다. 좀더 자세히는 CSS 사양서의 [문자열 코드표에 없는 문자열 참조](http://www.w3.org/TR/CSS21/syndata.html#q24)나 CSS 사양서의 [Characters and case](http://www.w3.org/TR/CSS21/syndata.html#q6)를 참고하라.

### 이미지 내용물

element 전/후로 이미지를 추가 하려면, {{ cssxref("content") }}속성에 이미지의 URL을 넣어라.

예제

이 규칙은 `'glossary`' class 다음에 공백과 하나의 아이콘을 추가한다.

```css
a.glossary:after {
  content: " " url("../images/glossary-icon.gif");
}
```

element의 배경으로 이미지를 추가 하고자 한다면, {{ cssxref("background") }}속성 값에 이미지의 URL을 할당 하라. 이것이 배경색이나, 이미지를 설정하거나, 이미지를 반복하거나 혹은 다른 사항을 설정하는 단순한 방법이다.

예제

이 규칙은 특정 element의 배경을 이미지 URL로 지정 하는 것이다.

이 설렉터는 element의 id를 나타낸다. `'no-repeat'` 값은 이미지가 한번만 나타나는 것을 말한다.

```css
#sidebar-box {
  background: url("../images/sidebar-ground.png") no-repeat;
}
```

좀더 자세히

배경설정에 관한 특별한 속성이나 이미지 설정 옵션에 관한 자세한 정보는 {{ cssxref("background") }} 참조 페이지를 보라.

## 액션: 배경 이미지 추가 하기

이 이미지는 아래쪽에 파란색 줄이 있는 흰사각형이다.:

| ![Image:Blue-rule.png](blue-rule.png) |
| ------------------------------------- |

1. 이 이미지를 다운 받아 예제파일들이 있는 폴더에 저장하라. (이미지에서 왼쪽 클릭을 하여 나타나는 메뉴에서 "다른 이름으로 사진저장"을 선택하여 예제가 있는 폴더를 선택하여 저장)
2. CSS파일을 열어 아래 규칙을 body부분에 추가 하여 전체 배경으로 해당 이미지를 설정하라.

   ```css
   background: url("Blue-rule.png");
   ```

   일단 위의 값은 이미지를 반복적으로 보여주는데, 기본 설정이므로 따로 표시 해 줄 필요는 없다. 이미지는 수직/수평적으로 반복되어 아래와 같이 편지지 같은 화면을 제공한다.

   ![Image:Blue-rule-ground.png](blue-rule-ground.png)

   **C**ascading **S**tyle **S**heets

   **C**ascading **S**tyle **S**heets

도전

아래 아미지를 다운 받아보라.

| ![Image:Yellow-pin.png](yellow-pin.png) |
| --------------------------------------- |

Stylesheet에 하나의 규칙을 추가 하여 아래와 같이 각라인 맨 앞에 나타나도록 하라.

![Image:Blue-rule-ground.png](blue-rule-ground.png)

![image:Yellow-pin.png](yellow-pin.png) **C**ascading **S**tyle **S**heets![image:Yellow-pin.png](yellow-pin.png) **C**ascading **S**tyle **S**heetsPossible solution

Add this rule to your stylesheet:

```css
p:before {
  content: url("yellow-pin.png");
}
```

[Hide solution](#challenge)[정답 확인.](#tutochallenge)

## 다음에는?

Stylesheet에 내용물을 추가 하는 일반 방법으로 리스트로 표기하는 방법이 있다. 다음장에는 [specify style for 리스트 elements를 위한 스타일 표기법에 대해 알아보자.](/ko/docs/CSS/Getting_Started/Lists)
