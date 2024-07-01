---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
---

{{HTMLSidebar("Global_attributes")}}

**`accesskey`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 현재 요소에 대한 키보드 단축키를 생성할 때 사용할 힌트를 제공합니다. `accesskey` 속성의 값은 반드시 출력 가능한 단일 문자(키보드로 입력할 수 있는 글자)여야 합니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-accesskey.html","tabbed-shorter")}}

> **참고:** WHATWG 명세는 `accesskey`의 값에 공백으로 구분한 여러 개의 문자를 사용할 수 있고, 브라우저는 그 중 지원하는 첫 번째 문자를 사용한다고 되어 있습니다. 하지만 대부분의 브라우저는 이렇게 동작하지 않습니다. 단, 다른 명령과 충돌하지 않는 경우, IE/Edge에서는 지원되는 첫 번째 문자를 문제 없이 사용합니다.

단축키를 활성화하는 방법은 브라우저와 플랫폼에 따라 다를 수 있습니다.

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Linux</th>
      <th>Mac</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        Firefox 57 이상에서는 <kbd>Control</kbd> + <kbd>Option</kbd> +
        <kbd><em>key</em></kbd> 또는 <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd
        ><br />Firefox 14 이상에서는 <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd
        ><br />Firefox 13 이하에서는 <kbd>Control</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Internet Explorer</th>
      <td rowspan="3" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd
        ><br /><kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td colspan="2" rowspan="1" style="text-align: center">없음</td>
    </tr>
    <tr>
      <th>Edge</th>
      <td style="text-align: center">없음</td>
      <td rowspan="3" style="text-align: center">
        <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>key</em></kbd
        ><br /><kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Google Chrome</th>
      <td style="text-align: center">
        <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Safari</th>
      <td colspan="2" style="text-align: center">없음</td>
    </tr>
    <tr>
      <th>Opera 15+</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 12</th>
      <td colspan="3" rowspan="1">
        <kbd>Shift</kbd> + <kbd>Esc</kbd>를 통해 접근 가능한 단축키 목록을 열고,
        그 중에서 <kbd>key</kbd>를 눌러 선택합니다.
      </td>
    </tr>
  </tbody>
</table>

## 접근성 고려사항

`accesskey` 특성은 빈약한 브라우저 지원을 포함해, 사용하기 전 고려해야 할 수많은 사항이 있습니다.

- `accesskey` 값은 시스템이나 브라우저 키보드 단축키 또는 보조 기술 기능과 충돌할 수 있습니다. 운영 체제, 보조 기술, 브라우저의 어떤 조합에서 동작하는 키가 다른 조합에서는 동작하지 않을 수 있습니다.
- 특정 `accesskey` 값은 특정 키보드에 존재하지 않을 수 있으며, 국제화가 중요한 경우 많은 키보드 종류로 인해 문제가 될 가능성이 커집니다. 따라서 특정 언어에 맞추는 것은 미래의 문제를 유발할 수 있습니다.
- 숫자에 의존하는 `accesskey` 값은, 해당 숫자와 그 동작에 연관성이 없는 경우 인지력 문제를 겪고 있는 사용자에게 혼란스러울 수 있습니다.
- 사용자에게 `accesskey`가 존재한다고 알리세요. 시스템에 해당 기능을 알리는 기능이 없다면, 사용자가 실수로 `accesskey`를 사용할수도 있습니다.

이러한 문제로 인해, 일반적인 목적을 갖는 웹 사이트와 웹 앱에서는 `accesskey`를 사용하지 않는 것을 권장합니다.

- [WebAIM: Keyboard Accessibility - Accesskey](https://webaim.org/techniques/keyboard/accesskey#spec)

## 명세

{{Specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- {{domxref("Element.accessKey")}}
- {{domxref("HTMLElement.accessKeyLabel")}}
- 모든 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
- [`aria-keyshortcuts`](https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts)
