---
title: Window.toolbar
slug: Web/API/Window/toolbar
---

{{APIRef}}

## 요약

창에서 끌 수 있는, 눈에 보이는 toolbar 문제를 해결합니다.

## 문법

```js
objRef = window.toolbar
```

## 예제

{{deprecated_inline()}} 주어진 HTML 예제는 다양한 "바" 객체의 visible 프로퍼티의 사용방법과, 권한상승 역시 현재창에서 어떠한 bar의 visible 프로퍼티로 쓰여지는것을 필요로한다는 것을 보여주고 있습니다. 하지만 [deprecation of enablePrivilege](/ko/docs/Bypassing_Security_Restrictions_and_Signing_Code) 때문에 이 기능은 웹 페이지에서 사용할 수 없습니다. EnablePrivilege는 Firefox 15 에서 작동하지 않고, Firefox 17 에서 삭제 될 것입니다.

```html
<!DOCTYPE html>
<html>
<head>
<title>Various DOM Tests</title>
<script>

// 현재창에서 존재하는 바의 상태를 변경
netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserWrite");
window.toolbar.visible=!window.toolbar.visible;

</script>
</head>

<body>
  <p>Various DOM Tests</p>
</body>
</html>
```

## 설명

페이지를 띄울때, 브라우저는 다음과 같은 dialog를 출력할 것입니다. : <img alt="Image:Modify_any_open_window_dialog.png">

이러한 눈에 보이는 바들을 끄기 위해서, 당신의 스크립트를 확인하거나 위의 예제처럼 적절한 권한을 활성화 시켜야 합니다. 또한 주의해야 할 점은 동적으로 업데이트 되는 다양한 보이는 toolbar는 창의 크기에 따라 동적으로 업데이트 될 수 있고, 당신의 페이지의 레이아웃에 영향을 끼칠 수 있습니다.

See also: [window.locationbar](/ko/docs/Window.locationbar), [window.menubar](/ko/docs/Window.menubar), [window.personalbar](/ko/docs/Window.personalbar), [window.scrollbars](/ko/docs/Window.scrollbars), [window.statusbar](/ko/docs/Window.statusbar)

## 사양

HTML5
