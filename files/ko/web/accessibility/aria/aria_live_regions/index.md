---
title: ARIA live regions
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
---

JavaScript를 이용하면, 전체 페이지를 다시 로드할 필요 없이 페이지의 일부를 동적으로 변경하는 것이 가능합니다. 예를 들면, 검색 결과 리스트를 즉시 업데이트 하거나, 사용자 상호 작용이 필요 없는 경고 또는 알림을 표시합니다. 이러한 변경사항들은 일반적으로 페이지를 볼 수 있는 사용자에게 시각적으로 분명하게 보이지만, 보조과학기술 사용자들에겐 분명하지 않을 수 있습니다. ARIA live regions은 이 간격을 메우고, 보조과학기술에 의해 발표될 수 있는 방식으로 동적 컨텐츠 변화들을 프로그래밍 방식으로 노출할 수 있는 방법을 제공합니다.

> **참고:** **Note**: 보조과학기술은 live region 컨텐츠에 _동적인_ 변화를 발표할 것입니다. Including an `aria-live` attribute or a specialized live region `role` (such as `role="alert"`) on the element you want to announce changes to works as long as you add the attribute before the changes occur — either in the original markup, or dynamically using JavaScript.

## 간단한 live regions

페이지를 재로드 없이 업데이트 되는 동적 컨텐츠는 일반적으로 영역 또는 위젯입니다. 대화형 컨텐츠가 아닌 단순 컨텐츠 변경은 live regions 으로 표시해야만 합니다. 아래는 관련 ARIA live region 속성에 관한 리스트와 설명입니다.

1. **`aria-live`**: `aria-live=POLITENESS_SETTING`는 스크린 리더가 live regions에 대한 업데이트를 처리할때 우선 순위를 설정하는 데 사용되며, 가능한 세팅으로 `off`, `polite`, `assertive` 가 있습니다. 기본 설정은 `off`입니다. 이 속성은 단연코 가장 중요합니다.
2. **`aria-controls`**: The `aria-controls=[IDLIST]` is used to associate a control with the regions that it controls. Regions are identified just like an `id` in a `div`, and multiple regions can be associated with a control using a space, e.g. `aria-controls="myRegionID1 myRegionsID2"`.

> **경고:** Not known if the aria-controls aspect of live regions is implemented in current ATs, or which. Needs research.

Normally, only `aria-live="polite"` is used. Any region which receives updates that are important for the user to receive, but not so rapid as to be annoying, should receive this attribute. The screen reader will speak changes whenever the user is idle.

For regions which are not important, or would be annoying because of rapid updates or other reasons, silence them with `aria-live="off"`.

### Dropdown box updates useful onscreen information

A website specializing in providing information about planets provides a dropdown box. When a planet is selected from the dropdown, a region on the page is updated with information about the selected planet.

#### HTML

```html
<fieldset>
  <legend>Planet information</legend>
  <label for="planetsSelect">Planet:</label>
  <select id="planetsSelect" aria-controls="planetInfo">
    <option value="">Select a planet&hellip;</option>
    <option value="mercury">Mercury</option>
    <option value="venus">Venus</option>
    <option value="earth">Earth</option>
    <option value="mars">Mars</option>
  </select>
  <button id="renderPlanetInfoButton">Go</button>
</fieldset>

<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">No planet selected</h2>
  <p id="planetDescription">Select a planet to view its description</p>
</div>

<p><small>Information courtesy <a href="https://en.wikipedia.org/wiki/Solar_System#Inner_Solar_System">Wikipedia</a></small></p>
```

#### JavaScript

```js
const PLANETS_INFO = {
  mercury: {
    title: 'Mercury',
    description: 'Mercury is the smallest and innermost planet in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.'
  },

  venus: {
    title: "Venus",
    description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.'
  },

  earth: {
    title: "Earth",
    description: 'Earth is the third planet from the Sun and the only object in the Universe known to harbor life.'
  },

  mars: {
    title: "Mars",
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet".'
  }
};

function renderPlanetInfo(planet) {
  const planetTitle = document.querySelector('#planetTitle');
  const planetDescription = document.querySelector('#planetDescription');

  if (planet in PLANETS_INFO) {
    planetTitle.textContent = PLANETS_INFO[planet].title;
    planetDescription.textContent = PLANETS_INFO[planet].description;
  } else {
    planetTitle.textContent = 'No planet selected';
    planetDescription.textContent = 'Select a planet to view its description';
  }
}

const renderPlanetInfoButton = document.querySelector('#renderPlanetInfoButton');

renderPlanetInfoButton.addEventListener('click', event => {
  const planetsSelect = document.querySelector('#planetsSelect');
  const selectedPlanet = planetsSelect.options[planetsSelect.selectedIndex].value;

  renderPlanetInfo(selectedPlanet);
});
```

{{EmbedLiveSample('Dropdown_box_updates_useful_onscreen_information', '', 350)}}

As the user selects a new planet, the information in the live region will be announced. Because the live region has `aria-live="polite"`, the screen reader will wait until the user pauses before announcing the update. Thus, moving down in the list and selecting another planet will not announce updates in the live region. Updates in the live region will only be announced for the planet finally chosen.

Here is a screenshot of VoiceOver on Mac announcing the update (via subtitles) to the live region:

![A screenshot of VoiceOver on Mac announcing the update to a live region. Subtitles are shown in the picture.](web_accessibility_aria_aria_live_regions.png)

## Preferring specialized live region roles

In the following well-known predefined cases it is better to use a specific provided "live region role":

| Role        | Description                                                                                                                                                                          | Compatibility Notes                                                                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| log         | Chat, error, game or other type of log                                                                                                                                               | To maximize compatibility, add a redundant `aria-live="polite"` when using this role.                                                                                                                                    |
| status      | A status bar or area of the screen that provides an updated status of some kind. Screen reader users have a special command to read the current status.                              | To maximize compatibility, add a redundant `aria-live="polite"` when using this role.                                                                                                                                    |
| alert       | Error or warning message that flashes on the screen. Alerts are particularly important for client side validation notices to users. (TBD: link to ARIA form tutorial with aria info) | To maximize compatibility, some people recommend adding a redundant `aria-live="assertive"` when using this role. However, adding both `aria-live` and `role="alert"` causes double speaking issues in VoiceOver on iOS. |
| progressbar | A hybrid between a widget and a live region. Use this with aria-valuemin, aria-valuenow and aria-valuemax. (TBD: add more info here).                                                |                                                                                                                                                                                                                          |
| marquee     | for text which scrolls, such as a stock ticker.                                                                                                                                      |                                                                                                                                                                                                                          |
| timer       | or any kind of timer or clock, such as a countdown timer or stopwatch readout.                                                                                                       |                                                                                                                                                                                                                          |

## Advanced live regions

(TBD: more granular information on the support of the individual attributes with combinations of OS/Browser/AT).

General support for Live Regions was added to JAWS on version 10.0. In Windows Eyes supports Live Regions since version 8.0 "for use outside of Browse Mode for Microsoft Internet Explorer and Mozilla Firefox". NVDA added some basic support for Live Regions for Mozilla Firefox back in 2008 and was improved in 2010 and 2014. In 2015, basic support was also added for Internet Explorer (MSHTML).

The Paciello Group has some [information about the state of the support of Live Regions](https://www.paciellogroup.com/blog/2014/03/screen-reader-support-aria-live-regions/)(2014). Paul J. Adam has researched [the support of Aria-Atomic and Aria-Relevant](http://pauljadam.com/demos/aria-atomic-relevant.html) in particular.

1. **`aria-atomic`**: The `aria-atomic=BOOLEAN` is used to set whether or not the screen reader should always present the live region as a whole, even if only part of the region changes. The possible settings are: `false` or `true`. The default setting is `false`.
2. **[`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute)**

    : The `aria-relevant=[LIST_OF_CHANGES]` is used to set what types of changes are relevant to a live region. The possible settings are one or more of: `additions`, `removals`, `text`, `all`. The default setting is: `additions text`.

3. **`aria-labelledby`**: The `aria-labelledby=[IDLIST]` is used to associate a region with its labels, similar to aria-controls but instead associating labels to the region. and label identifiers are separated with a space.
4. **`aria-describedby`**: The `aria-describedby=[IDLIST]` is used to associate a region with its descriptions, similar to aria-controls but instead associating descriptions to the region and description identifiers are separated with a space.

### Advanced use case: Clock

As an illustration of `aria-atomic`, consider a site with a simple clock, showing hours and minutes. The clock is updated each minute, with the new remaining time simply overwriting the current content.

```html
    <div id="clock" role="timer" aria-live="polite"></div>
```

```js
/* basic JavaScript to update the clock */

setInterval(function() {
  var now = new Date();
  document.getElementById('clock').innerHTML = "Time: " + now.getHours() + ":" + ("0"+now.getMinutes()).substr(-2);
}, 60000);
```

The first time the function executes, the entirety of the string that is added will be announced. On subsequent calls, only the parts of the content that changed compared to the previous content will be announced. For instance, when the clock changes from "17:33" to "17:34", assistive technologies will only announce "4", which won't be very useful to users.

One way around this would be to first clear the contents of the live region, and then inject the new content. However, this can sometimes be unreliable, as it's dependent on the exact timing of these two updates.

`aria-atomic="true"` ensures that each time the live region is updated, the entirety of the content is announced in full (e.g. "Time: 17:34").

```html
    <div id="clock" role="timer" aria-live="polite" aria-atomic="true"></div>
```

> **참고:** As observed, setting/updating the innerHTML again would cause the whole text to be read again, whether or not you set aria-atomic="true", so the above Clock example does not work as expected.

A working example of a simple year control for better understanding:

```html
    <div id="date-input">
      <label>Year:
        <input type="text" id="year" value="1990" onblur="change(event)"/>
      </label>
    </div>

    <div id="date-output" aria-live="polite">
      The set year is:
      <span id="year-output">1990</span>
    </div>
```

```js
    function change(event) {
      var yearOut = document.getElementById("year-output");
      switch (event.target.id) {
        case "year":
          yearOut.innerHTML = event.target.value;
          break;
       default:
          return;
      }
    };
```

Without `aria-atomic="true"` the screenreader announces only the changed value of year.

With `aria-atomic="true"`, the screenreader announces "The set year is: _changedvalue_"

### Advanced use case: Roster

A chat site would like to display a list of users currently logged in. Display a list of users where a user's log-in and log-out status will be reflected dynamically (without a page reload).

```html
    <ul id="roster" aria-live="polite" aria-relevant="additions removals">
      <!-- use JavaScript to add remove users here-->
    </ul>
```

Breakdown of ARIA live properties:

- `aria-live="polite"` indicates that the screen reader should wait until the user is idle before presenting updates to the user. This is the most commonly used value, as interrupting the user with "assertive" might interrupt their flow.
- `aria-atomic` is not set (`false` by default) so that only the added or removed users should be spoken and not the entire roster each time.
- `aria-relevant="additions removals"` ensures that both users added or removed to the roster will be spoken.

## See also

- [ARIA roles](/ko/docs/Web/Accessibility/ARIA/Roles)
