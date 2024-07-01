---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
---

**`prefers-color-scheme`** [CSS](/ko/docs/Web/CSS) [미디어 특성](/ko/docs/Web/CSS/@media#media_features)은 사용자의 시스템이 라이트 테마나 다크 테마를 사용하는지 탐지하는 데에 사용됩니다.

사용자는 운영체제 설정(라이트 모드 또는 다크 모드)이나 사용자 에이전트 설정에서 선호하는 테마를 나타낼 수 있습니다.

## 구문

- `light`
  - : 사용자가 시스템에 라이트 테마를 사용하는 것을 선호하거나 선호하는 테마를 알리지 않았음을 나타냅니다.
- `dark`
  - : 사용자가 시스템에 다크 테마를 사용하는 것을 선호한다고 알렸음을 나타냅니다.

## 예제

요소들에게 초기 색상을 설정합니다. 이 요소들이 사용자의 선호 테마에 따라 다른 스타일로 나타나도록 할 수 있습니다.

### HTML

```html
<div class="day">Day (initial)</div>
<div class="day light-scheme">Day (changes in light scheme)</div>
<div class="day dark-scheme">Day (changes in dark scheme)</div>
<br />

<div class="night">Night (initial)</div>
<div class="night light-scheme">Night (changes in light scheme)</div>
<div class="night dark-scheme">Night (changes in dark scheme)</div>
```

### CSS

```css
.day {
  background: #eee;
  color: black;
}
.night {
  background: #333;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}

.day,
.night {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 2em;
  vertical-align: middle;
}
```

### 결과

{{EmbedLiveSample("Examples")}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Simulate prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view_media_rules_for_prefers-color-scheme) (Firefox Page Inspector > Examine and edit CSS)
- [Video tutorial: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019), or [다른 플랫폼](https://support.mozilla.org/en-US/questions/1271928)에서 색상 변경하기

{{QuickLinksWithSubpages("/ko/docs/Web/CSS/@media/")}}
