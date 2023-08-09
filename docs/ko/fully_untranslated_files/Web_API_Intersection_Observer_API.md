---
title: Intersection Observer API
slug: Web/API/Intersection_Observer_API
---

{{DefaultAPISidebar("Intersection Observer API")}}

Intersection Observer API는 타겟 요소와 상위 요소 또는 최상위 document 의 {{Glossary("viewport")}} 사이의 intersection 내의 변화를 비동기적으로 관찰하는 방법입니다.

역사적으로 요소의 가시성이나 두 요소의 상대적인 가시성을 탐지하는 것은 어려운 일이었습니다. 일반적으로 알려진 해결방법은 신뢰성이 부족하고 브라우저나 사이트에 부하를 주기때문에 좋지 못한 사용자 경험을 낳습니다. 웹이 성숙함에따라 이러한 정보의 필요성은 커졌습니다. intersection 정보는 아래와 같은 여러가지 이유 때문에 필요합니다:

- 페이지가 스크롤 되는 도중에 발생하는 이미지나 다른 컨텐츠의 지연 로딩.
- 스크롤 시에, 더 많은 컨텐츠가 로드 및 렌더링되어 사용자가 페이지를 이동하지 않아도 되게 하는 infinite-scroll 을 구현.
- 광고 수익을 계산하기 위한 용도로 광고의 가시성 보고.
- 사용자에게 결과가 표시되는 여부에 따라 작업이나 애니메이션을 수행할 지 여부를 결정.

과거에 intersection 감지를 구현하면 영향을 받는 모든 요소를 알기 위해서 {{domxref("Element.getBoundingClientRect()")}}와 같은 메서드를 호출하는 여러 이벤트 핸들러와 루프가 얽혀있었습니다. 모든 코드가 메인 스레드에서 실행되기 때문에, 이 중 하나라도 성능 문제를 일으킬 수 있습니다. 사이트가 이러한 테스트들과 함께 로드되면 상황이 더욱 나빠질 수 있습니다.

infinite-scroll이 구현된 웹 페이지를 생각해보십시오. 공급 업체가 제공하는 라이브러리를 사용하여 페이지 전체에 주기적으로 배치되는 광고를 관리하고 여기저기 애니메이션 그래픽이 있으며 알림 상자 등을 그리는 사용자 라이브러리를 사용합니다. 요소들 각각은 자신만의 교차 감지 루틴이 존재하고 이 모든 것들은 메인 스레드 위에서 동작합니다.

웹 페이지의 작성자는 사용중인 두 라이브러리의 내부 동작을 거의 알지 못하므로 이러한 일이 발생하는 것을 알지 못할 수도 있습니다. 사용자가 페이지를 스크롤할 때, 이러한 교차 탐지 루틴은 스크롤 처리 코드 중에 반복적으로 실행되므로 사용자는 브라우저, 웹사이트 및 컴퓨터에 좌절감을 느끼게 됩니다.

Intersection Observer API 는 그들이 감시하고자 하는 요소가 다른 요소({{Glossary("viewport")}})에 들어가거나 나갈때 또는 요청한 부분만큼 두 요소의 교차부분이 변경될 때 마다 실행될 콜백 함수를 등록할 수 있게 합니다. 즉, 사이트는 요소의 교차를 지켜보기 위해 메인 스레드를 사용할 필요가 없어지고 브라우저는 원하는 대로 교차 영역 관리를 최적화 할 수 있습니다.

정확히 몇 픽셀이 겹쳐졌고 어떠한 픽셀이 겹쳐졌는지 Intersection Observer API 가 알려줄 수 없습니다. 그러나 "N% 정도 교차하는 경우 상호작용이 이루어져야한다." 와 같은 더 일반적인 사용 사례를 다룰 수 있습니다.

## Intersection observer 의 컨셉과 사용

Intersection Observer API는 다음과 같은 상황에 호출되는 콜백을 생성하는 기능을 제공합니다:

(1) **대상(target)** 으로 칭하는 요소가 기기 뷰포트나 특정 요소(이 API에서 이를 **root** 요소 혹은 **root**로 칭함)와 교차함.

(2) observer가 최초로 타겟을 관측하도록 요청받을 때마다.

일반적으로, 당신은 요소의 교차성이 가장 가까운 스크롤 가능한 조상에 의해 변경되길 원할 것입니다(혹은 대상 요소가 다른 요소의 자손이 아니라면 뷰포트에 의해 변경될 수 있을 것입니다). document의 루트 요소를 기준으로 해당 요소를 관측하기 위해서는 `null`을 설정하세요.

당신이 뷰포트 혹은 다른 요소를 root로 사용하건 간에, 이 API는 같은 방식으로 동작합니다. 대상 요소의 가시성이 변경될 때마다 당신이 등록한 콜백 함수를 실행하며, 그것은 당신이 원하는 만큼 root 요소와 교차합니다.

root 와 대상 요소가 교차하는 정도를 **intersection ratio** 라고 합니다. 이것은 대상 요소의 가시성 퍼센티지를 0.0\~1.0의 숫자로 표현합니다.

### intersection observer 생성하기

intersection observer를 생성하기 위해서는 생성자 호출 시 콜백 함수를 제공해야 합니다. 이 콜백 함수는 threshold가 한 방향 혹은 다른 방향으로 교차할 때 실행됩니다.

```js
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(callback, options);
```

`threshold: 1.0` 은 대상 요소가 `root` 에 지정된 요소 내에서 100% 보여질 때 콜백이 호출될 것을 의미합니다.

#### Intersection observer 설정

{{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} 생성자에 전달되는 `options` 객체는 observer 콜백이 호출되는 상황을 조작할 수 있습니다. 이는 아래와 같은 필드를 가집니다:

- `root`
  - : 대상 객체의 가시성을 확인할 때 사용되는 뷰포트 요소입니다. 이는 대상 객체의 조상 요소여야 합니다. 기본값은 브라우저 뷰포트이며, `root` 값이 `null` 이거나 지정되지 않을 때 기본값으로 설정됩니다.
- `rootMargin`
  - : root 가 가진 여백입니다. 이 속성의 값은 CSS의 {{cssxref("margin")}} 속성과 유사합니다. e.g. "`10px 20px 30px 40px"` (top, right, bottom, left). 이 값은 퍼센티지가 될 수 있습니다. 이것은 root 요소의 각 측면의 bounding box를 수축시키거나 증가시키며, 교차성을 계산하기 전에 적용됩니다. 기본값은 0입니다.
- `threshold`
  - : observer의 콜백이 실행될 대상 요소의 가시성 퍼센티지를 나타내는 단일 숫자 혹은 숫자 배열입니다. 만일 50%만큼 요소가 보여졌을 때를 탐지하고 싶다면, 값을 `0.5`로 설정하면 됩니다. 혹은 25% 단위로 요소의 가시성이 변경될 때마다 콜백이 실행되게 하고 싶다면 `[0, 0.25, 0.5, 0.75, 1]` 과 같은 배열을 설정하세요.
    기본값은 `0`이며(이는 요소가 1픽셀이라도 보이자 마자 콜백이 실행됨을 의미합니다). `1.0`은 요소의 모든 픽셀이 화면에 노출되기 전에는 콜백을 실행시키지 않음을 의미합니다.

#### Targeting an element to be observed

Once you have created the observer, you need to give it a target element to watch:

```js
let target = document.querySelector("#listItem");
observer.observe(target);

// the callback we setup for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
```

Whenever the target meets a threshold specified for the `IntersectionObserver`, the callback is invoked. The callback receives a list of {{domxref("IntersectionObserverEntry")}} objects and the observer:

```js
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

Be aware that your callback is executed on the main thread. It should operate as quickly as possible; if anything time-consuming needs to be done, use {{domxref("Window.requestIdleCallback()")}}.

Also, note that if you specified the `root` option, the target must be a descendant of the root element.

### How intersection is calculated

All areas considered by the Intersection Observer API are rectangles; elements which are irregularly shaped are considered as occupying the smallest rectangle which encloses all of the element's parts. Similarly, if the visible portion of an element is not rectangular, the element's intersection rectangle is construed to be the smallest rectangle that contains all the visible portions of the element.

It's useful to understand a bit about how the various properties provided by {{domxref("IntersectionObserverEntry")}} describe an intersection.

#### The intersection root and root margin

Before we can track the intersection of an element with a container, we need to know what that container is. That container is the **intersection root**, or **root element**. This can be either a specific element in the document which is an ancestor of the element to be observed, or `null` to use the document's viewport as the container.

The **_root intersection rectangle_** is the rectangle used to check against the target or targets. This rectangle is determined like this:

- If the intersection root is the implicit root (that is, the top-level {{domxref("Document")}}), the root intersection rectangle is the viewport's rectangle.
- If the intersection root has an overflow clip, the root intersection rectangle is the root element's content area.
- Otherwise, the root intersection rectangle is the intersection root's bounding client rectangle (as returned by calling {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} on it).

The root intersection rectangle can be adjusted further by setting the **root margin**, `rootMargin`, when creating the {{domxref("IntersectionObserver")}}. The values in `rootMargin` define offsets added to each side of the intersection root's bounding box to create the final intersection root bounds (which are disclosed in {{domxref("IntersectionObserverEntry.rootBounds")}} when the callback is executed).

#### Thresholds

Rather than reporting every infinitesimal change in how much a target element is visible, the Intersection Observer API uses **thresholds**. When you create an observer, you can provide one or more numeric values representing percentages of the target element which are visible. Then, the API only reports changes to visibility which cross these thresholds.

For example, if you want to be informed every time a target's visibility passes backward or forward through each 25% mark, you would specify the array \[0, 0.25, 0.5, 0.75, 1] as the list of thresholds when creating the observer. You can tell which direction the visibility changed in (that is, whether the element became more visible or less visible) by checking the value of the {{domxref("IntersectionObserverEntry.isIntersecting", "isIntersecting")}} property on the {{domxref("IntersectionObserverEntry")}} passed into the callback function at the time of the visibility change. If `isIntersecting` is `true`, the target element has become at least as visible as the threshold that was passed. If it's `false`, the target is no longer as visible as the given threshold.

To get a feeling for how thresholds work, try scrolling the box below around. Each colored box within it displays the percentage of itself that's visible in all four of its corners, so you can see these ratios change over time as you scroll the container. Each box has a different set of thresholds:

- The first box has a threshold for each percentage point of visibility; that is, the {{domxref("IntersectionObserver.thresholds")}} array is `[0.00, 0.01, 0.02, ..., 0.99, 1.00]`.
- The second box has a single threshold, at the 50% mark.
- The third box has thresholds every 10% of visibility (0%, 10%, 20%, etc.).
- The last box has thresholds each 25%.

```html hidden
<template id="boxTemplate">
  <div class="sampleBox">
    <div class="label topLeft"></div>
    <div class="label topRight"></div>
    <div class="label bottomLeft"></div>
    <div class="label bottomRight"></div>
  </div>
</template>

<main>
  <div class="contents">
    <div class="wrapper"></div>
  </div>
</main>
```

```css hidden
.contents {
  position: absolute;
  width: 700px;
  height: 1725px;
}

.wrapper {
  position: relative;
  top: 600px;
}

.sampleBox {
  position: relative;
  left: 175px;
  width: 150px;
  background-color: rgb(245, 170, 140);
  border: 2px solid rgb(201, 126, 17);
  padding: 4px;
  margin-bottom: 6px;
}

#box1 {
  height: 200px;
}

#box2 {
  height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  height: 100px;
}

.label {
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
  position: absolute;
  margin: 0;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.7);
  width: 3em;
  height: 18px;
  padding: 2px;
  text-align: center;
}

.topLeft {
  left: 2px;
  top: 2px;
}

.topRight {
  right: 2px;
  top: 2px;
}

.bottomLeft {
  bottom: 2px;
  left: 2px;
}

.bottomRight {
  bottom: 2px;
  right: 2px;
}
```

```js hidden
let observers = [];

startup = () => {
  let wrapper = document.querySelector(".wrapper");

  // Options for the observers

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [],
  };

  // An array of threshold sets for each of the boxes. The
  // first box's thresholds are set programmatically
  // since there will be so many of them (for each percentage
  // point).

  let thresholdSets = [
    [],
    [0.5],
    [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    [0, 0.25, 0.5, 0.75, 1.0],
  ];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholdSets[0].push(i);
  }

  // Add each box, creating a new observer for each

  for (let i = 0; i < 4; i++) {
    let template = document
      .querySelector("#boxTemplate")
      .content.cloneNode(true);
    let boxID = "box" + (i + 1);
    template.querySelector(".sampleBox").id = boxID;
    wrapper.appendChild(document.importNode(template, true));

    // Set up the observer for this box

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(
      intersectionCallback,
      observerOptions,
    );
    observers[i].observe(document.querySelector("#" + boxID));
  }

  // Scroll to the starting position

  document.scrollingElement.scrollTop =
    wrapper.firstElementChild.getBoundingClientRect().top + window.scrollY;
  document.scrollingElement.scrollLeft = 750;
};

intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    let box = entry.target;
    let visiblePct = Math.floor(entry.intersectionRatio * 100) + "%";

    box.querySelector(".topLeft").innerHTML = visiblePct;
    box.querySelector(".topRight").innerHTML = visiblePct;
    box.querySelector(".bottomLeft").innerHTML = visiblePct;
    box.querySelector(".bottomRight").innerHTML = visiblePct;
  });
};

startup();
```

{{EmbedLiveSample("Threshold_example", 500, 500)}}

#### Clipping and the intersection rectangle

The browser computes the final intersection rectangle as follows; this is all done for you, but it can be helpful to understand these steps in order to better grasp exactly when intersections will occur.

1. The target element's bounding rectangle (that is, the smallest rectangle that fully encloses the bounding boxes of every component that makes up the element) is obtained by calling {{domxref("Element.getBoundingClientRect", "getBoundingClientRect()")}} on the target. This is the largest the intersection rectangle may be. The remaining steps will remove any portions that don't intersect.
2. Starting at the target's immediate parent block and moving outward, each containing block's clipping (if any) is applied to the intersection rectangle. A block's clipping is determined based on the intersection of the two blocks and the clipping mode (if any) specified by the {{cssxref("overflow")}} property. Setting `overflow` to anything but `visible` causes clipping to occur.
3. If one of the containing elements is the root of a nested browsing context (such as the document contained in an {{HTMLElement("iframe")}}, the intersection rectangle is clipped to the containing context's viewport, and recursion upward through the containers continues with the container's containing block. So if the top level of an `<iframe>` is reached, the intersection rectangle is clipped to the frame's viewport, then the frame's parent element is the next block recursed through toward the intersection root.
4. When recursion upward reaches the intersection root, the resulting rectangle is mapped to the intersection root's coordinate space.
5. The resulting rectangle is then updated by intersecting it with the [root intersection rectangle](/ko/docs/Web/API/Intersection_Observer_API#root-intersection-rectangle).
6. This rectangle is, finally, mapped to the coordinate space of the target's {{domxref("document")}}.

### Intersection change callbacks

When the amount of a target element which is visible within the root element crosses one of the visibility thresholds, the {{domxref("IntersectionObserver")}} object's callback is executed. The callback receives as input an array of all of `IntersectionObserverEntry` objects, one for each threshold which was crossed, and a reference to the `IntersectionObserver` object itself.

Each entry in the list of thresholds is an {{domxref("IntersectionObserverEntry")}} object describing one threshold that was crossed; that is, each entry describes how much of a given element is intersecting with the root element, whether or not the element is considered to be intersecting or not, and the direction in which the transition occurred.

The code snippet below shows a callback which keeps a counter of how many times elements transition from not intersecting the root to intersecting by at least 75%.

```js
intersectionCallback(entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let elem = entry.target;

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++;
      }
    }
  });
}
```

## Interfaces

- {{domxref("IntersectionObserver")}}
  - : The primary interface for the Intersection Observer API. Provides methods for creating and managing an observer which can watch any number of target elements for the same intersection configuration. Each observer can asynchronously observe changes in the intersection between one or more target elements and a shared ancestor element or with their top-level {{domxref("Document")}}'s {{Glossary('viewport')}}. The ancestor or viewport is referred to as the **root**.
- {{domxref("IntersectionObserverEntry")}}
  - : Describes the intersection between the target element and its root container at a specific moment of transition. Objects of this type can only be obtained in two ways: as an input to your `IntersectionObserver` callback, or by calling {{domxref("IntersectionObserver.takeRecords()")}}.

## A simple example

This simple example causes a target element to change its color and transparency as it becomes more or less visible. At [Timing element visibility with the Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API/Timing_element_visibility), you can find a more extensive example showing how to time how long a set of elements (such as ads) are visible to the user and to react to that information by recording statistics or by updating elements..

### HTML

The HTML for this example is very short, with a primary element which is the box that we'll be targeting (with the creative ID `"box"`) and some contents within the box.

```html
<div id="box">
  <div class="vertical">Welcome to <strong>The Box!</strong></div>
</div>
```

### CSS

The CSS isn't terribly important for the purposes of this example; it lays out the element and establishes that the {{cssxref("background-color")}} and {{cssxref("border")}} attributes can participate in [CSS transitions](/ko/docs/Web/CSS/CSS_Transitions), which we'll use to affect the changes to the element as it becomes more or less obscured.

```css
#box {
  background-color: rgba(40, 40, 190, 255);
  border: 4px solid rgb(20, 20, 120);
  transition:
    background-color 1s,
    border 1s;
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.vertical {
  color: white;
  font: 32px "Arial";
}

.extra {
  width: 350px;
  height: 350px;
  margin-top: 10px;
  border: 4px solid rgb(20, 20, 120);
  text-align: center;
  padding: 20px;
}
```

### JavaScript

Finally, let's take a look at the JavaScript code that uses the Intersection Observer API to make things happen.

#### Setting up

First, we need to prepare some variables and install the observer.

```js
const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener(
  "load",
  (event) => {
    boxElement = document.querySelector("#box");

    createObserver();
  },
  false,
);
```

The constants and variables we set up here are:

- `numSteps`
  - : A constant which indicates how many thresholds we want to have between a visibility ratio of 0.0 and 1.0.
- `prevRatio`
  - : This variable will be used to record what the visibility ratio was the last time a threshold was crossed; this will let us figure out whether the target element is becoming more or less visible.
- `increasingColor`
  - : A string defining a color we'll apply to the target element when the visibility ratio is increasing. The word "ratio" in this string will be replaced with the target's current visibility ratio, so that the element not only changes color but also becomes increasingly opaque as it becomes less obscured.
- `decreasingColor`
  - : Similarly, this is a string defining a color we'll apply when the visibility ratio is decreasing.

We call {{domxref("EventTarget.addEventListener", "Window.addEventListener()")}} to start listening for the {{event("load")}} event; once the page has finished loading, we get a reference to the element with the ID `"box"` using {{domxref("Document.querySelector", "querySelector()")}}, then call the `createObserver()` method we'll create in a moment to handle building and installing the intersection observer.

#### Creating the intersection observer

The `createObserver()` method is called once page load is complete to handle actually creating the new {{domxref("IntersectionObserver")}} and starting the process of observing the target element.

```js
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}
```

This begins by setting up an `options` object containing the settings for the observer. We want to watch for changes in visibility of the target element relative to the document's viewport, so `root` is `null`. We need no margin, so the margin offset, `rootMargin`, is specified as "0px". This causes the observer to watch for changes in the intersection between the target element's bounds and those of the viewport, without any added (or subtracted) space.

The list of visibility ratio thresholds, `threshold`, is constructed by the function `buildThresholdList()`. The threshold list is built programmatically in this example since there are a number of them and the number is intended to be adjustable.

Once `options` is ready, we create the new observer, calling the {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} constructor, specifying a function to be called when intersection crosses one of our thresholds, `handleIntersect()`, and our set of options. We then call {{domxref("IntersectionObserver.observe", "observe()")}} on the returned observer, passing into it the desired target element.

We could opt to monitor multiple elements for visibility intersection changes with respect to the viewport by calling `observer.observe()` for each of those elements, if we wanted to do so.

#### Building the array of threshold ratios

The `buildThresholdList()` function, which builds the list of thresholds, looks like this:

```js
function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
```

This builds the array of thresholds—each of which is a ratio between 0.0 and 1.0, by pushing the value `i/numSteps` onto the `thresholds` array for each integer `i` between 1 and `numSteps`. It also pushes 0 to include that value. The result, given the default value of `numSteps` (20), is the following list of thresholds:

| #   | Ratio | #   | Ratio |
| --- | ----- | --- | ----- |
| 1   | 0.05  | 11  | 0.55  |
| 2   | 0.1   | 12  | 0.6   |
| 3   | 0.15  | 13  | 0.65  |
| 4   | 0.2   | 14  | 0.7   |
| 5   | 0.25  | 15  | 0.75  |
| 6   | 0.3   | 16  | 0.8   |
| 7   | 0.35  | 17  | 0.85  |
| 8   | 0.4   | 18  | 0.9   |
| 9   | 0.45  | 19  | 0.95  |
| 10  | 0.5   | 20  | 1.0   |

We could, of course, hard-code the array of thresholds into our code, and often that's what you'll end up doing. But this example leaves room for adding configuration controls to adjust the granularity, for example.

#### Handling intersection changes

When the browser detects that the target element (in our case, the one with the ID `"box"`) has been unveiled or obscured such that its visibility ratio crosses one of the thresholds in our list, it calls our handler function, `handleIntersect()`:

```js
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace(
        "ratio",
        entry.intersectionRatio,
      );
    }

    prevRatio = entry.intersectionRatio;
  });
}
```

For each {{domxref("IntersectionObserverEntry")}} in the list `entries`, we look to see if the entry's {{domxref("IntersectionObserverEntry.intersectionRatio", "intersectionRatio")}} is going up; if it is, we set the target's {{cssxref("background-color")}} to the string in `increasingColor` (remember, it's `"rgba(40, 40, 190, ratio)"`), replaces the word "ratio" with the entry's `intersectionRatio`. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.

Similarly, if the `intersectionRatio` is going down, we use the string `decreasingColor` and replace the word "ratio" in that with the `intersectionRatio` before setting the target element's `background-color`.

Finally, in order to track whether the intersection ratio is going up or down, we remember the current ratio in the variable `prevRatio`.

### Result

Below is the resulting content. Scroll this page up and down and notice how the appearance of the box changes as you do so.

{{EmbedLiveSample('A_simple_example', 400, 400)}}

There's an even more extensive example at [Timing element visibility with the Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API/Timing_element_visibility).

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Intersection Observer polyfill](https://github.com/w3c/IntersectionObserver)
- [Timing element visibility with the Intersection Observer API](/ko/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
- {{domxref("IntersectionObserver")}} and {{domxref("IntersectionObserverEntry")}}
