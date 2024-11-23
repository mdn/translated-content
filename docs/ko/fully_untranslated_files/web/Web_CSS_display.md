---
title: display
slug: Web/CSS/display
---

{{CSSRef}}

**`display`** [CSS](/ko/docs/Web/CSS) 속성은 요소를
[블록과 인라인](/ko/docs/Web/CSS/CSS_Flow_Layout) 요소 중 어느 쪽으로 처리할지와 함께,
[플로우](/ko/docs/Web/CSS/CSS_Flow_Layout), [그리드](/ko/docs/Web/CSS/CSS_Grid_Layout),
[플렉스](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout)처럼 자식 요소를 배치할 때 사용할 레이아웃을 설정합니다.

`display` 속성은, 형식적으로는 요소의 내부와 외부 디스플레이 유형을 설정합니다. 외부 디스플레이 유형은
플로우 레이아웃에 요소가 참여하는 방법을 나타내고, 내부 디스플레이 유형은 자식의 레이아웃 방식을 설정합니다.
`display`의 일부 값은 자신만의 명세를 가지고 있습니다. 이 문서의 끝에서 찾을 수 있는 명세표를 참고하세요.

## 구문

`display` 속성은 키워드 값을 사용해 지정합니다. 키워드는 6개의 카테고리로 분류할 수 있습니다.

```
.container {
  display: <display-keyword>;
}
```

### 바깥쪽

- {{CSSxRef("&lt;display-outside&gt;")}}
  - : 요소의 외부 디스플레이 유형을 설정하는 키워드입니다. 외부 디스플레이 유형은 플로우 레이아웃에서 요소 자신의 역할과
    마찬가지입니다.
  - `block`
    - : The element generates a block element box, generating line breaks both before and after the element when in
      the normal flow.
  - `inline`
    - : The element generates one or more inline element boxes that do not generate line breaks before or after
      themselves. In normal flow, the next element will be on the same line if there is space

> **참고:** Browsers that support the two-value syntax, on finding the outer value only, such as when
> `display: block` or `display: inline` is specified, will set the inner value to
> `flow`. This will result in expected behavior; for example, if you specify an element to be block, you
> would expect that the children of that element would participate in block and inline normal flow layout.

### 안쪽

- {{CSSxRef("&lt;display-inside&gt;")}}

  - : 요소의 내부 디스플레이 유형을 설정하는 키워드입니다. 내부 디스플레이 유형은 대체 요소가 아닌 요소의 콘텐츠 서식과
    배치 방법을 나타냅니다.

    - `flow` {{Experimental_Inline}}

      - : The element lays out its contents using flow layout (block-and-inline layout).

        If its outer display type is `inline` or `run-in`, and it is participating in a block or
        inline formatting context, then it generates an inline box. Otherwise it generates a block container box.

        Depending on the value of other properties (such as {{CSSxRef("position")}}, {{CSSxRef("float")}}, or
        {{CSSxRef("overflow")}}) and whether it is itself participating in a block or inline formatting context, it
        either establishes a new
        [block formatting context](/ko/docs/Web/Guide/CSS/Block_formatting_context) (BFC) for its contents
        or integrates its contents into its parent formatting context.

    - `flow-root`
      - : The element generates a block element box that establishes a new
        [block formatting context](/ko/docs/Web/Guide/CSS/Block_formatting_context), defining where the
        formatting root lies.
    - `table`
      - : These elements behave like HTML {{HTMLElement("table")}} elements. It defines a block-level box.
    - `flex`
      - : The element behaves like a block element and lays out its content according to the
        [flexbox model](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout).
    - `grid`
      - : The element behaves like a block element and lays out its content according to the
        [grid model](/ko/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout).
    - `ruby` {{Experimental_Inline}}
      - : The element behaves like an inline element and lays out its content according to the ruby formatting model. It
        behaves like the corresponding HTML {{HTMLElement("ruby")}} elements.

> **참고:** Browsers that support the two-value syntax, on finding the inner value only, such as when
> `display: flex` or `display: grid` is specified, will set their outer value to
> `block`. This will result in expected behavior; for example, if you specify an element to be
> `display: grid`, you would expect that the box created on the grid container would be a block-level box.

### 리스트 아이템

- {{cssxref("&lt;display-listitem&gt;")}}
  - : 요소가 콘텐츠 블록 박스를 생성하고, 리스트 아이템 인라인 박스를 분리합니다.

A single value of `list-item` will cause the element to behave like a list item. This can be used together
with {{CSSxRef("list-style-type")}} and {{CSSxRef("list-style-position")}}.

`list-item` can also be combined with any {{CSSxRef("&lt;display-outside&gt;")}} keyword and the
`flow` or `flow-root` {{CSSxRef("&lt;display-inside&gt;")}} keywords.

> **참고:** In browsers that support the two-value syntax, if no inner value is specified, it will
> default to `flow`. If no outer value is specified, the principal box will have an outer display type of
> `block`.

### 내부적

- {{cssxref("&lt;display-internal&gt;")}}
  - : `table`, `ruby` 등 일부 레이아웃 모델은 복잡한 내부 구조를 가지며, 자식과 자손이 채워넣을
    여러가지 역할을 지닙니다. 이 항목은 그런 특정 레이아웃 모드에서만 의미를 갖는 "내부적"인 값을 정의합니다.
    - `table-row-group`
      - : These elements behave like {{HTMLElement("tbody")}} HTML elements.
    - `table-header-group`
      - : These elements behave like {{HTMLElement("thead")}} HTML elements.
    - `table-footer-group`
      - : These elements behave like {{HTMLElement("tfoot")}} HTML elements.
    - `table-row`
      - : These elements behave like {{HTMLElement("tr")}} HTML elements.
    - `table-cell`
      - : These elements behave like {{HTMLElement("td")}} HTML elements.
    - `table-column-group`
      - : These elements behave like {{HTMLElement("colgroup")}} HTML elements.
    - `table-column`
      - : These elements behave like {{HTMLElement("col")}} HTML elements.
    - `table-caption`
      - : These elements behave like {{HTMLElement("caption")}} HTML elements.
    - `ruby-base` {{Experimental_Inline}}
      - : These elements behave like {{HTMLElement("rb")}} HTML elements.
    - `ruby-text` {{Experimental_Inline}}
      - : These elements behave like {{HTMLElement("rt")}} HTML elements.
    - `ruby-base-container` {{Experimental_Inline}}
      - : These elements behave like {{HTMLElement("rbc")}} HTML elements generated as anonymous boxes.
    - `ruby-text-container` {{Experimental_Inline}}
      - : These elements behave like {{HTMLElement("rtc")}} HTML elements.

### 박스

- {{CSSxRef("&lt;display-box&gt;")}}

  - : 요소의 디스플레이 박스를 생성해야 하는지 지정합니다.

    - `contents`

      - : These elements don't produce a specific box by themselves. They are replaced by their pseudo-box and their
        child boxes. Please note that the CSS Display Level 3 spec defines how the `contents` value should
        affect "unusual elements" — elements that aren't rendered purely by CSS box concepts such as replaced
        elements. See
        [Appendix B: Effects of display: contents on Unusual Elements](https://drafts.csswg.org/css-display/#unbox)
        for more details.

        _Due to a bug in browsers, this will currently remove the element from the accessibility tree — screen
        readers will not look at what's inside. See the
        [Accessibility concerns](#accessibility_concerns) section below for more details._

    - `none`
      - : 레이아웃에 영향을 주지 않도록 요소의 display를 끄게 합니다(웹문서는 마치 해당 요소가 존재하지 않는 것처럼 렌더링되어집니다). 모든 하위 요소들 또한 display를 끄게 합니다. 요소가 정상적으로 본연의 공간을 가지고 있게 하면서 해당 공간에 아무것도 렌더링되지 않게 하려면, {{CSSxRef("visibility")}} 속성으로 대체하여 사용하시기 바랍니다.

### 레거시

- {{CSSxRef("&lt;display-legacy&gt;")}}

  - : CSS 2는 `display` 속성에 단일 키워드만 사용했으므로, 같은 레이아웃 모드를 위해 블록 레벨과 인라인 레벨
    키워드를 각각 필요로 했습니다.

    - `inline-block`

      - : The element generates a block element box that will be flowed with surrounding content as if it were a single
        inline box (behaving much like a replaced element would).

        It is equivalent to `inline flow-root`.

    - `inline-table`

      - : The `inline-table` value does not have a direct mapping in HTML. It behaves like an HTML
        {{HTMLElement("table")}} element, but as an inline box, rather than a block-level box. Inside the table box is
        a block-level context.

        It is equivalent to `inline table`.

    - `inline-flex`

      - : The element behaves like an inline element and lays out its content according to the flexbox model.

        It is equivalent to `inline flex`.

    - `inline-grid`

      - : The element behaves like an inline element and lays out its content according to the grid model.

        It is equivalent to `inline grid`.

### Which syntax should you use now?

The Level 3 specification details two values for the `display` property — enabling the specification of the
outer and inner display type explicitly — but this is not yet well-supported by browsers.

The `<display-legacy>` methods allow the same results with single keyword values, and should be
favoured by developers until the two keyword values are better supported. For example, using two values you might
specify an inline flex container as follows:

```css
.container {
  display: inline flex;
}
```

This can currently be specified using a single value.

```css
.container {
  display: inline-flex;
}
```

For more information on these changes to the specification, see the article
[Adapting to the new two-value syntax of display](/ko/docs/Web/CSS/display/two-value_syntax_of_display).

### Global

```css
/* Global values */
display: inherit;
display: initial;
display: unset;
```

## 안내서 및 예제

The individual pages for the different types of value that `display` can have set on it feature multiple
examples of those values in action — see the [Syntax](#syntax) section. In addition, see the following material,
which covers the various values of display in depth.

### CSS Flow Layout (`display: block`, `display: inline`)

- [Block and Inline Layout in Normal Flow](/ko/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Flow Layout and Overflow](/ko/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
- [Flow Layout and Writing Modes](/ko/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [Formatting Contexts Explained](/ko/docs/Web/CSS/CSS_Flow_Layout/Formatting_Contexts_Explained)
- [In Flow and Out of Flow](/ko/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

### `display: flex`

- [Basic concepts of flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Aligning Items in a Flex Container](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [Controlling Ratios of Flex Items Along the Main Axis](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
- [Cross-browser Flexbox mixins](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Mixins)
- [Mastering Wrapping of Flex Items](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [Ordering Flex Items](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
- [Relationship of flexbox to other layout methods](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
- [Backwards Compatibility of Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Typical use cases of Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

### `display: grid`

- [Basic Concepts of Grid Layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relationship to other layout methods](/ko/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Line-based placement](/ko/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Grid template areas](/ko/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout using named grid lines](/ko/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Auto-placement in grid layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Box alignment in grid layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [Grids, logical values and writing modes](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and Accessibility](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid Layout and Progressive Enhancement](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realizing common layouts using grids](/ko/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

## 접근성 고려사항

### `display: none`

Using a `display` value of `none` on an element will remove it from the
[accessibility tree](/ko/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs). This will
cause the element and all its descendant elements to no longer be announced by screen reading technology.

If you want to visually hide the element, a more accessible alternative is to use
[a combination of properties](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link)
to remove it visually from the screen but keep it parseable by assistive technology such as screen readers.

### `display: contents`

Current implementations in most browsers will remove from the
[accessibility tree](/ko/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs) any element
with a `display` value of `contents` (but descendants will remain). This will cause the element
itself to no longer be announced by screen reading technology. This is incorrect behavior according to the
[CSS specification](https://drafts.csswg.org/css-display/#valdef-display-contents).

- [More accessible markup with display: contents | Hidde de Vries](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [Display: Contents Is Not a CSS Reset | Adrian Roselli](http://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

### Tables

Changing the `display` value of a {{HTMLElement("table")}} element to `block`,
`grid`, or `flex` will alter its representation in the
[accessibility tree](/ko/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs). This will
cause the table to no longer be announced properly by screen reading technology.

- [Short note on what CSS display properties do to table semantics — The Paciello Group](https://developer.paciellogroup.com/blog/2018/03/short-note-on-what-css-display-properties-do-to-table-semantics/)
- [Hidden content for better a11y | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Block and Inline Layout in Normal Flow](/ko/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Formatting contexts explained](/ko/docs/Web/CSS/CSS_Flow_Layout/Formatting_Contexts_Explained)
- {{CSSxRef("visibility")}}, {{CSSxRef("float")}}, {{CSSxRef("position")}}
- {{CSSxRef("grid")}}, {{CSSxRef("flex")}}
