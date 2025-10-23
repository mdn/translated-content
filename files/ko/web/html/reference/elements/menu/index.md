---
title: "<menu>: 메뉴 요소"
slug: Web/HTML/Reference/Elements/menu
original_slug: Web/HTML/Element/menu
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

[HTML](/ko/docs/Web/HTML) **`<menu>`** 요소는 {{HTMLElement("ul")}}의 의미론적 대안으로 설명되지만, 브라우저에 의해서는 {{HTMLElement("ul")}}과 다르지 않게 다루어집니다. {{HTMLElement("li")}} 요소들로 표현되는 항목들의 비정렬 목록을 나타냅니다.

{{InteractiveExample("HTML Demo: &lt;menu&gt;", "tabbed-shorter")}}

```html interactive-example
<div class="news">
  <a href="#">NASA’s Webb Delivers Deepest Infrared Image of Universe Yet</a>
  <menu>
    <li><button id="save">Save for later</button></li>
    <li><button id="share">Share this news</button></li>
  </menu>
</div>
```

```css interactive-example
.news {
  background-color: bisque;
  padding: 1em;
  border: solid thin black;
}

menu {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin-bottom: 0;
  gap: 1em;
}
```

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)만 포함합니다.

## 사용 일람

`<menu>`와 {{HTMLElement("ul")}} 요소 모두 비정렬 목록을 표현합니다. 주요 차이점은 {{HTMLElement("ul")}}이 주로 표시를 위한 항목들을 포함하는 반면, `<menu>`는 상호작용을 위한 항목들을 포함하도록 의도되어 있습니다. 관련된 {{HTMLElement("menuitem")}} 요소는 사용이 중단되었습니다.

> [!NOTE]
> HTML 사양의 초기 버전에서는 `<menu>` 요소가 [컨텍스트 메뉴](/ko/docs/conflicting/Web/HTML/Element/menu)로서 사용되는 사례가 있었습니다. 이 기능은 오래되었으며 사양에는 포함되어 있지 않습니다.

## 예시

### 툴바

이 예시에서는, 편집 앱을 위한 툴바를 생성하는 데에 `<menu>`가 사용됩니다.

#### HTML

```html
<menu>
  <li><button onclick="copy()">Copy</button></li>
  <li><button onclick="cut()">Cut</button></li>
  <li><button onclick="paste()">Paste</button></li>
</menu>
```

이는 기능적으로 다음과 다르지 않습니다.

```html
<ul>
  <li><button onclick="copy()">Copy</button></li>
  <li><button onclick="cut()">Cut</button></li>
  <li><button onclick="paste()">Paste</button></li>
</ul>
```

#### CSS

```css
menu,
ul {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
}

li {
  flex-grow: 1;
}

button {
  width: 100%;
}
```

#### 결과

{{EmbedLiveSample("Toolbar", "100%", 100)}}

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/HTML/Content_categories"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <p>
          <a href="/ko/docs/Web/HTML/Content_categories#flow_content"
            >플로우 콘텐츠</a
          >. 요소의 자식으로 적어도 한 개 이상의 {{HTMLElement("li")}} 요소를 포함한다면:
          <a
            href="/ko/docs/Web/HTML/Content_categories#palpable_content"
            >뚜렷한 콘텐츠</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <p>
          {{HTMLElement("li")}}와 {{HTMLElement("script")}}, {{HTMLElement("template")}}가 0번 이상 존재할 수 있음.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>불가능, 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#flow_content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <code
          ><a href="/ko/docs/Web/Accessibility/ARIA/Roles/List_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href="/ko/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>, <a href="/ko/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>,
        <code
          ><a href="/ko/docs/Web/Accessibility/ARIA/Roles/listbox_role"
            >listbox</a
          ></code
        >, <a href="/ko/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>, <a href="/ko/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>,
        <a href="/ko/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/ko/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/ko/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/ko/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a> or <a href="/ko/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{DOMxRef("HTMLMenuElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 목록과 관련된 다른 HTML 요소들: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, and {{HTMLElement("li")}}.
