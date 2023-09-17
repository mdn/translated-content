---
title: 양식 자동 완성을 끄는 방법
slug: Web/Security/Securing_your_site/Turning_off_form_autocompletion
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

이 문서는 웹사이트에서 양식 필드의 자동 완성을 비활성화하는 방법에 대해 설명합니다.

기본적으로 브라우저는 사용자가 웹사이트의 {{HTMLElement("input")}} 필드를 통해 제출한 정보를 기억합니다. 이를 통해 브라우저는 자동 완성(즉, 사용자가 입력하기 시작한 필드에 대해 가능성 있는 완성을 제안) 또는 자동 채우기(즉, 로드 시 특정 필드를 미리 채움)를 제공할 수 있습니다.

일반적으로 이러한 기능은 기본적으로 활성화되어 있지만, 사용자의 개인 정보 보호에 문제가 될 수 있으므로 사용자는 브라우저에서 이 기능을 비활성화할 수 있습니다. 그러나 양식으로 제출된 데이터 중 일부는 향후에 유용하지 않거나(예: 일회성 핀) 민감한 정보(예: 고유한 정부 식별자 또는 신용 카드 보안 코드)를 포함하기 때문에, 웹 사이트 개발자로서, 브라우저의 자동 완성 기능이 활성화된 경우에도 브라우저가 이러한 필드의 값을 기억하지 않기를 원할 수 있습니다.

실제로 [WCAG 2.1 Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)는 자동 완성/자동 채우기가 작동할 것을 요구하지 않습니다. 단지 특정 개인 사용자 정보와 관련된 양식 필드가 프로그래밍 방식으로 식별되기만 하면 됩니다. 즉, 양식 자체에 대한 자동 완성 기능이 꺼진 경우에도 기준을 통과할 수 있습니다(개별 양식 필드에 관련 [`autocomplete`](/ko/docs/Web/HTML/Attributes/autocomplete) 속성을 추가하여).

## 자동 완성 비활성화하기

양식에서 자동 완성을 비활성화하려면 [`autocomplete`](/ko/docs/Web/HTML/Attributes/autocomplete) 속성을 "off"로 설정합니다.

```plain
autocomplete="off"
```

전체 양식 또는 양식의 특정 입력 요소에 대해서도 이 작업을 수행할 수 있습니다.

```html-nolint
<form method="post" action="/form" autocomplete="off">
  …
</form>
```

```html
<form method="post" action="/form">
  …
  <div>
    <label for="cc">신용 카드:</label>
    <input type="text" id="cc" name="cc" autocomplete="off" />
  </div>
</form>
```

필드에 `autocomplete="off"`를 설정하면 두 가지 효과가 있습니다.

- 브라우저에 따라 이를 준수하는 휴리스틱이 다르긴 하지만, 나중에 비슷한 양식에서 자동 완성을 위해 사용자가 입력한 데이터를 저장하지 않도록 브라우저에 지시합니다.
- 브라우저가 세션 기록에서 양식 데이터를 캐싱 하는 것을 방지합니다. 양식 데이터가 세션 히스토리에 캐시 되면, 사용자가 양식을 제출하고 원래 양식 페이지로 돌아가기 위해 뒤로 가기 버튼을 클릭했을 때, 사용자가 작성한 정보가 표시됩니다.

자동 완성을 해제한 후에도 브라우저가 계속 자동 완성을 제안하는 경우, 입력 요소의 이름 특성을 변경해야 합니다.

## 자동 완성의 특성과 로그인 필드

최신 브라우저는 통합된 비밀번호 관리를 제공합니다. 사용자가 사이트에 대한 사용자 이름과 암호를 입력하면, 브라우저는 사용자를 위해 이를 기억하는 것을 제안합니다. 사용자가 사이트를 다시 방문하면 브라우저는 저장된 값으로 로그인 필드를 자동으로 채웁니다.

또한, 사용자는 브라우저에서 저장된 로그인 정보를 암호화하는 데 사용할 마스터 암호를 선택할 수 있습니다.

마스터 암호가 없더라도 브라우저 내 암호 관리는 일반적으로 전체적인 보안 향상으로 이어집니다. 사용자는 브라우저가 저장한 암호를 기억할 필요가 없기 때문에 암호를 기억해야 하는 경우보다 더 강력한 암호를 선택할 수 있습니다.

이러한 이유로, 많은 최신 브라우저가 로그인 필드에 대해 `autocomplete="off"`를 지원하지 않습니다.

- 사이트에서 사용자 이름과 암호 입력 필드가 포함된 {{HTMLElement("form")}}에 `autocomplete="off"`를 설정하면, 브라우저는 여전히 이 로그인을 기억하도록 제안하고, 사용자가 동의하면 다음에 사용자가 페이지를 방문할 때 브라우저가 해당 필드를 자동으로 채웁니다.
- 사이트에서 사용자 이름과 비밀번호 {{HTMLElement("input")}} 필드에 `autocomplete="off"`를 설정하면, 브라우저는 여전히 이 로그인을 기억하도록 제안하고, 사용자가 동의하면 다음에 사용자가 페이지를 방문할 때 브라우저가 해당 필드를 자동으로 채웁니다.

### autocomplete="new-password"를 사용하여 자동 채우기 방지하기

사용자가 다른 사람의 새 암호를 지정할 수 있는 사용자 관리 페이지에서 암호 필드의 자동 채우기를 방지하기 위해 `autocomplete="new-password"`를 사용할 수 있습니다.

브라우저는 이 힌트를 준수할 필요가 없습니다. 그러나, 최신 브라우저는 바로 위와 같은 이유로 `autocomplete="new-password"`가 있는 `<input>` 요소의 자동 채우기를 중단했습니다. 예를 들어, Firefox 버전 67([Firefox bug 1119063](https://bugzil.la/1119063) 참조)은 이 경우에 대해 자동 채우기를 중지했습니다. 그러나, Firefox 70([Firefox bug 1565407](https://bugzil.la/1565407) 참조)은 안전하게 생성된 암호를 제안할 수 있지만, 저장된 암호를 자동으로 채우지는 않습니다. 자세한 내용은 [`autocomplete` 호환성 표](/ko/docs/Web/HTML/Attributes/autocomplete#browser_compatibility)를 참조하세요.

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}
