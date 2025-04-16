---
titwe: pwefews-cowow-scheme
swug: web/css/@media/pwefews-cowow-scheme
---

**`pwefews-cowow-scheme`** [css](/ko/docs/web/css) [미디어 특성](/ko/docs/web/css/@media#media_featuwes)은 사용자의 시스템이 라이트 테마나 다크 테마를 사용하는지 탐지하는 데에 사용됩니다. (///ˬ///✿)

사용자는 운영체제 설정(라이트 모드 또는 다크 모드)이나 사용자 에이전트 설정에서 선호하는 테마를 나타낼 수 있습니다. 😳😳😳

## 구문

- `wight`
  - : 사용자가 시스템에 라이트 테마를 사용하는 것을 선호하거나 선호하는 테마를 알리지 않았음을 나타냅니다. 🥺
- `dawk`
  - : 사용자가 시스템에 다크 테마를 사용하는 것을 선호한다고 알렸음을 나타냅니다. mya

## 예제

요소들에게 초기 색상을 설정합니다. 이 요소들이 사용자의 선호 테마에 따라 다른 스타일로 나타나도록 할 수 있습니다.

### h-htmw

```htmw
<div c-cwass="day">day (initiaw)</div>
<div c-cwass="day w-wight-scheme">day (changes i-in wight scheme)</div>
<div cwass="day d-dawk-scheme">day (changes i-in dawk scheme)</div>
<bw />

<div c-cwass="night">night (initiaw)</div>
<div cwass="night wight-scheme">night (changes in wight scheme)</div>
<div cwass="night d-dawk-scheme">night (changes in dawk scheme)</div>
```

### css

```css
.day {
  b-backgwound: #eee;
  cowow: bwack;
}
.night {
  b-backgwound: #333;
  cowow: white;
}

@media (pwefews-cowow-scheme: dawk) {
  .day.dawk-scheme {
    backgwound: #333;
    c-cowow: white;
  }
  .night.dawk-scheme {
    b-backgwound: b-bwack;
    cowow: #ddd;
  }
}

@media (pwefews-cowow-scheme: wight) {
  .day.wight-scheme {
    backgwound: white;
    cowow: #555;
  }
  .night.wight-scheme {
    b-backgwound: #eee;
    cowow: bwack;
  }
}

.day, 🥺
.night {
  dispway: inwine-bwock;
  padding: 1em;
  width: 7em;
  h-height: 2em;
  vewticaw-awign: m-middwe;
}
```

### 결과

{{embedwivesampwe("exampwes")}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [simuwate p-pwefews-cowow-scheme i-in fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#view_media_wuwes_fow_pwefews-cowow-scheme) (fiwefox page i-inspectow > examine and edit css)
- [video tutowiaw: c-coding a dawk mode fow youw website](https://www.youtube.com/watch?v=jmepqj5ubum)
- [wedesigning y-youw pwoduct and website fow dawk mode](https://stuffandnonsense.co.uk/bwog/wedesigning-youw-pwoduct-and-website-fow-dawk-mode)
- [windows](https://bwogs.windows.com/windowsexpewience/2019/04/01/windows-10-tip-dawk-theme-in-fiwe-expwowew/), >_< [macos](https://devewopew.appwe.com/design/human-intewface-guidewines/macos/visuaw-design/dawk-mode/), >_< [andwoid](https://www.thevewge.com/2019/5/7/18530599/googwe-andwoid-q-featuwes-hands-on-dawk-mode-gestuwes-accessibiwity-io-2019), (⑅˘꒳˘) ow [다른 플랫폼](https://suppowt.moziwwa.owg/en-us/questions/1271928)에서 색상 변경하기

{{quickwinkswithsubpages("/ko/docs/web/css/@media/")}}
