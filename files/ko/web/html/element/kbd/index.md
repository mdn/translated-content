---
title: "<kbd>: 키보드 입력 요소"
slug: Web/HTML/Element/kbd
---

{{HTMLSidebar}}

**HTML `<kbd>` 요소**는 키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타냅니다. 관례에 따라 {{glossary("user agent", "사용자 에이전트")}}의 고정폭 글꼴로 표시하지만, HTML 표준은 그런 점을 강제하지 않습니다.

{{EmbedInteractiveExample("pages/tabbed/kbd.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">콘텐츠 카테고리</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/HTML/Global_attributes)만 포함합니다.

## 사용 일람

`<kbd>` 요소를 다른 요소와 조합해 더 상세한 상황을 표현할 수 있습니다.

- `<kbd>` 요소를 다른 `<kbd>` 요소 안에 배치해, 하나의 입력 안의 작은 부분이나, 실제 타이핑 키를 하나씩 나타낼 수 있습니다. 아래의 [입력 안의 키입력 나타내기](#입력_안의_키입력_나타내기) 예제를 참고하세요.
- `<kbd>` 요소를 {{htmlelement("samp")}} 요소 안에 배치하면 시스템이 에코로써 다시 출력한 사용자 입력을 나타낼 수 있습니다. 아래의 [재출력된 입력](#재출력된_입력) 예제를 참고하세요.
- 반면, `<samp>` 요소를 `<kbd>` 요소 안에 배치하면 화면에 표시된 메뉴 이름, 메뉴 항목, 버튼 이름 등 시스템이 출력한 텍스트를 기반으로 한 입력을 나타낼 수 있습니다. 아래의 [화면에 표시된 입력 옵션 나타내기](#화면에_표시된_입력_옵션_나타내기) 예제를 참고하세요.

> **참고:** 사용자 지정 CSS 파일을 정의해 `<kbd>` 요소의 브라우저 기본 글꼴을 바꿀 수 있지만, 사용자 설정이 더 우선할 수도 있습니다.

## 예제

### 기본 예제

```html
<p>
  <kbd>help mycommand</kbd> 명령어를 입력해 "mycommand" 명령에 대한 문서를
  확인하세요.
</p>
```

#### 결과

{{EmbedLiveSample("기본_예제", 350, 80)}}

### 입력 안의 키입력 나타내기

다수의 키입력으로 구성된 입력을 설명할 땐 여러 개의 `<kbd>` 요소를 중첩할 수 있습니다. 바깥 `<kbd>`는 전체 입력을, 각각의 키입력 또는 구성요소는 안쪽의 `<kbd>`로 나타냅니다.

#### 스타일 없이

우선 기본 HTML에서 어떻게 나타나나 확인해보겠습니다.

##### HTML

```html
<p>
  새로운 문서는 키보드 단축키 <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd
  >으로 만들 수 있습니다.
</p>
```

단축키 조합 전체를 하나의 `<kbd>`로 감싼 후, 조합 구성요소를 나타내기 위해 각각의 키보드 키를 다른 `<kbd>`로 감싼 모습입니다.

> **참고:** 꼭 이렇게 중첩할 필요는 없습니다. 바깥 `<kbd>`를 생략하고, `<kbd>Ctrl</kbd>+<kbd>N</kbd>`로 작성하더라도 완벽하게 유효한 표기법입니다.
>
> 다만 현재 사용 중인 스타일에 따라 중첩이 유용할 때도 있습니다.

##### 결과

스타일 시트 없는 출력은 다음과 같습니다.

{{EmbedLiveSample("스타일_없이", 650, 80)}}

#### 스타일 적용

CSS를 좀 더해서 명확하게 바꿀 수 있습니다.

##### CSS

키보드 버튼을 렌더링 할 때 사용할 수 있는, `<kbd>` 요소의 `"key"` 스타일을 추가합니다.

```css
kbd.key {
  border-radius: 3px;
  padding: 1px 2px 0;
  border: 1px solid black;
}
```

##### HTML

HTML을 업데이트해 앞선 스타일을 적용합니다.

```html
<p>
  새로운 문서는 키보드 단축키
  <kbd><kbd class="key">Ctrl</kbd>+<kbd class="key">N</kbd></kbd
  >으로 만들 수 있습니다.
</p>
```

##### 결과

원하던 바로 그 결과입니다!

{{EmbedLiveSample("스타일_적용", 650, 80)}}

### 재출력된 입력

`<kbd>` 요소를 {{htmlelement("samp")}} 요소 안에 배치하면 시스템이 다시 출력한 입력을 나타낼 수 있습니다.

```html
<p>
  구문 오류가 발생하면, 오류 원인을 찾을 수 있도록 입력받은 명령을 다시
  출력합니다.
</p>
<blockquote>
  <samp><kbd>custom-git ad my-new-file.cpp</kbd></samp>
</blockquote>
```

결과는 다음과 같습니다.

{{EmbedLiveSample("재출력된_입력", 650, 120)}}

### 화면에 표시된 입력 옵션 나타내기

{{htmlelement("samp")}} 요소를 `<kbd>` 요소 안에 배치하면 시스템이 화면에 표시하는 입력 선택지(메뉴, 버튼...)에 기반한 사용자 입력을 나타냅니다.

예를 들면, "파일" 메뉴의 "새 문서" 옵션을 선택하는 방법에 대해 설명하는 HTML은 다음과 같은 형태를 가집니다.

```html
<p>
  새로운 파일을 생성하려면,
  <kbd>
    <kbd><samp>파일</samp></kbd
    >⇒<kbd><samp>새 문서</samp></kbd>
  </kbd>
  메뉴를 선택하세요.
</p>

<p>
  파일의 이름을 입력한 후, <kbd><samp>확인</samp></kbd
  >을 누르는 걸 잊지 마세요.
</p>
```

흥미로운 중첩 사용법을 볼 수 있습니다. 메뉴 옵션 설명을 보면, 전체 입력 시퀀스가 하나의 `<kbd>` 요소에 들어간 것을 볼 수 있으며, 메뉴 이름("파일")과 메뉴 항목("새 문서") 둘 다 각자의 `<kbd>`와 `<samp>`로 표시한 것을 볼 수 있습니다. `<kbd>` 안에 `<samp>`가 존재하므로, "파일"과 "새 문서"는 화면 위의 위젯을 사용한 입력임을 알 수 있습니다.

#### 결과

{{EmbedLiveSample("화면에_표시된_입력_옵션_나타내기", 650, 120)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{htmlelement("code")}}
