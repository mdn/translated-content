---
title: <input type="time">
slug: Web/HTML/Element/Input/time
---
{{HTMLRef("Input_types")}}

类型为 time 的输入元素{{htmlelement("input")}} ，旨在让用户轻松输入时间（小时和分钟，以及可选的秒）。

控件的用户界面因浏览器而异。在现代浏览器中，支持是很好的，因为 Safari 是唯一尚未实现的主要浏览器；在 Safari 和任何其他不支持`<time>`的浏览器中，它会优雅地降级为`<input type=“text”>`。

{{EmbedInteractiveExample("pages/tabbed/input-time.html", "tabbed-standard")}}

## Appearance

### Chrome and Opera

在 chrome/opera 中，选择时间很简单，根据操作系统区域设置，插槽以 12 或 24 小时格式输入小时和分钟，上下箭头用于递增和递减当前选定的组件。在某些版本中，会提供一个 “x” 按钮来清除控件的值。

![12-hour Chrome time input](chrome_time.png) 12-hour

![24-hour Chrome time input](chrome-time.png) 24-hour

### Firefox

火狐的时间选择和 Chrome 非常相似，只是它没有上下箭头。它还使用 12 或 24 小时格式输入时间，基于系统区域设置。提供 “X” 按钮以清除控件的值。

![12-hour Firefox time input](firefox-time.png) 12-hour

![24-hour Firefox time input](firefox-time-24.png) 24-hour

### Edge

Edgede 时间选择有点复杂，打开一个小时和分钟的滚动区域。它和 chrome 一样，使用 12 或 24 小时格式输入时间，基于系统区域设置：

![12-hour Edge time input](edge_time.png) 12-hour

![24-hour Edge time input](edge-time.png) 24-hour

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#value">Value</a></strong></td>
   <td>A {{domxref("DOMString")}} representing a time, or empty.</td>
  </tr>
  <tr>
   <td><strong>Events</strong></td>
   <td>{{event("change")}} and {{event("input")}}</td>
  </tr>
  <tr>
   <td><strong>Supported common attributes</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}, {{htmlattrxref("list", "input")}}, {{htmlattrxref("readonly", "input")}}, and {{htmlattrxref("step", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL attributes</strong></td>
   <td><code>value</code>, <code>valueAsDate</code>, <code>valueAsNumber</code>, and <code>list</code>.</td>
  </tr>
  <tr>
   <td><strong>Methods</strong></td>
   <td>{{domxref("HTMLInputElement.select", "select()")}}, {{domxref("HTMLInputElement.stepDown", "stepDown()")}}, and {{domxref("HTMLInputElement.stepUp", "stepUp()")}}.</td>
  </tr>
 </tbody>
</table>

## Value

A {{domxref("DOMString")}} containing the value of the time entered into the input. You can set a default value for the input by including a valid time in the {{htmlattrxref("value", "input")}} attribute when creating the `<input>` element, like so:

```html
<label for="appt-time">Choose an appointment time: </label>
<input id="appt-time" type="time" name="appt-time" value="13:30">
```

{{ EmbedLiveSample('value-sample1', 600, 60) }}

You can also get and set the date value in JavaScript using the {{domxref("HTMLInputElement.value")}} property, for example:

```js
var timeControl = document.querySelector('input[type="time"]');
timeControl.value = '15:30';
```

### Time value format

The `value` of the `time` input is always in 24-hour format: `hh:mm`, regardless of the input format, which is likely to be selected based on the user's locale (or by the user agent). If the time includes seconds (see [Using the step attribute](#using_the_step_attribute)), the format is always `hh:mm:ss`. You can learn more about the format of the time value used by this input type in {{SectionOnPage("/en-US/docs/Web/HTML/Date_and_time_formats", "Time strings")}}.

在此示例中，您可以通过输入时间并查看之后如何更改来查看时间输入的值。

首先，看一下 HTML。这很简单，带有我们之前看到的标签和输入，但添加了额外的元素`p`和`span`用来显示时间值

```html
<form>
  <label for="startTime">Start time: </label>
  <input type="time" id="startTime">
  <p>
    Value of the <code>time</code> input: <code>
            "<span id="value">n/a</span>"</code>.
  </p>
</form>
```

The JavaScript code adds code to the time input to watch for the {{event("input")}} event, which is triggered every time the contents of an input element change. When this happens, the contents of the `<span>` are replaced with the new value of the input element.

```js
var startTime = document.getElementById("startTime");
var valueSpan = document.getElementById("value");

startTime.addEventListener("input", function() {
  valueSpan.innerText = startTime.value;
}, false);
```

{{EmbedLiveSample("Time_value_format", 600, 80)}}

When a form including a `time` input is submitted, the value is encoded before being included in the form's data. The form's data entry for a time input will always be in the form `name=hh%3Amm`, or `name=hh%3Amm%3ass` if seconds are included (see [Using the step attribute](#using_the_step_attribute)).

## Additional attributes

In addition to the attributes common to all {{HTMLElement("input")}} elements, `time` inputs offer the following attributes:

| Attribute               | Description                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [`max`](#max)           | The latest time to accept, in the syntax described under [Time value format](#time_value_format)                   |
| [`min`](#min)           | The earliest time to accept as a valid input                                                                       |
| [`readonly`](#readonly) | A Boolean attribute which, if present, indicates that the contents of the `time` input should not be user-editable |
| [`step`](#step)         | The stepping interval to use both for user interfaces purposes and during constraint validation                    |

Unlike many data types, time values have a **periodic domain**, meaning that the values reach the highest possible value, then wrap back around to the beginning again. For example, specifying a `min` of `14:00` and a `max` of `2:00` means that the permitted time values start at 2:00 PM, run through midnight to the next day, ending at 2:00 AM.

### max

A string indicating the latest time to accept, specified in the same [time value format](#time_value_format) as described above. If the specified string isn't a valid time, no maximum value is set.

### min

A string specifying the earliest time to accept, given in the [time value format](#time_value_format) described previously. If the value specified isn't a valid time string, no minimum value is set.

{{page("/en-US/docs/Web/HTML/Element/input/text", "readonly", 0, 1, 2)}}

### step

{{page("/en-US/docs/Web/HTML/Element/input/number", "step-include")}}

For `time` inputs, the value of `step` is given in seconds, with a scaling factor of 1000 (since the underlying numeric value is in milliseconds). The default value of `step` is 60, indicating 60 seconds (or 1 minute, or 60,000 milliseconds).

_At this time, it's unclear what a value of `any` means for `step` when used with `time` inputs. This will be updated as soon as that information is determined._

## Using time inputs

虽然 data 和 time 输入类型中的时间具有最广泛的浏览器支持，但它尚未接近普及，因此您可能需要提供一种替代方法来输入日期和时间，以便 Safari 用户（和用户）其他非支持浏览器）仍然可以轻松输入时间值。

We'll look at basic and more complex uses of `<input type="time">`, then offer advice on mitigating the browser support issue later on (see [Handling browser support](#handling_browser_support)).

### Basic uses of time

The simplest use of `<input type="time">` involves a basic `<input>` and {{htmlelement("label")}} element combination, as seen below:

```html
<form>
  <label for="appt-time">Choose an appointment time: </label>
  <input id="appt-time" type="time" name="appt-time">
</form>
```

{{EmbedLiveSample('Basic_uses_of_time', 600, 40)}}

### Controlling input size

`<input type="time">` doesn't support form sizing attributes such as {{htmlattrxref("size", "input")}}, since times are always about the same number of characters long. You'll have to resort to [CSS](/zh-CN/docs/Web/CSS) for sizing needs.

### Using the step attribute

You can use the {{htmlattrxref("step", "input")}} attribute to vary the amount of time jumped whenever the time is incremented or decremented (for example, so the time moves by 10 minutes at a time when clicking the little arrow widgets).

> **备注：** This property has some strange effects across browsers, so is not completely reliable.

It takes an integer value that equates to the number of seconds you want to increment by; the default value is 60 seconds, or one minute. If you specify a value of less than 60 seconds (1 minute), the `time` input will show a seconds input area alongside the hours and minutes:

```html
<form>
  <label for="appt-time">Choose an appointment time: </label>
  <input id="appt-time" type="time" name="appt-time" step="2">
</form>
```

{{EmbedLiveSample('Using_the_step_attribute', 600, 40)}}

In Chrome and Opera, which are the only browsers to show up/down iteration arrows, clicking the arrows changes the seconds value by two seconds, but doesn't affect the hours or minutes. Minutes (or hours) can only be used for stepping when you specify a number of minutes (or hours) in seconds, such as 120 for 2 minutes, or 7200 for 2 hours).

In Firefox, there are no arrows, so the `step` value isn't used. However, providing it _does_ add the seconds input area adjacent to the minutes section.

The steps value seems to have no effect in Edge.

> **备注：** Using `step` seems to cause validation to not work properly (as seen in the next section).

## Validation

By default, `<input type="time">` does not apply any validation to entered values, other than the user agent's interface generally not allowing you to enter anything other than a time value. This is helpful (assuming the `time` input is fully supported by the user agent), but you can't entirely rely on the value to be a proper time string, since it might be an empty string (`""`), which is allowed. It's also possible for the value to look roughly like a valid time but not be correct, such as `25:05`.

### Setting maximum and minimum times

You can use the {{htmlattrxref("min", "input")}} and {{htmlattrxref("max", "input")}} attributes to restrict the valid times that can be chosen by the user. In the following example we are setting a minimum time of `12:00` and a maximum time of `18:00`:

```html
<form>
  <label for="appt-time">Choose an appointment time (opening hours 12:00 to 18:00): </label>
  <input id="appt-time" type="time" name="appt-time"
         min="12:00" max="18:00">
  <span class="validity"></span>
</form>
```

{{ EmbedLiveSample('Setting_maximum_and_minimum_times', 600, 40) }}

Here's the CSS used in the above example. Here we make use of the {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS properties to style the input based on whether or not the current value is valid. We had to put the icons on a {{htmlelement("span")}} next to the input, not on the input itself, because in Chrome the generated content is placed inside the form control, and can't be styled or shown effectively.

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

The result here is that:

- Only times between 12:00 and 18:00 will be seen as valid; times outside that range will be denoted as invalid.
- Depending on what browser you're using, you might find that times outside the specified range might not even be selectable in the time picker (e.g. Edge).

### Making times required

In addition, you can use the {{htmlattrxref("required", "input")}} attribute to make filling in the time mandatory. As a result, supporting browsers will display an error if you try to submit a time that is outside the set bounds, or an empty time field.

Let's look at an example; here we've set minimum and maximum times, and also made the field required:

```html
<form>
  <div>
    <label for="appt-time">Choose an appointment time (opening hours 12:00 to 18:00): </label>
    <input id="appt-time" type="time" name="appt-time"
           min="12:00" max="18:00" required>
    <span class="validity"></span>
  </div>
  <div>
      <input type="submit" value="Submit form">
  </div>
</form>
```

If you try to submit the form with an incomplete time (or with a time outside the set bounds), the browser displays an error. Try playing with the example now:

{{ EmbedLiveSample('Making_times_required', 600, 120) }}

Here's a screenshot for those of you who aren't using a browser that supports `time` inputs:

![](https://mdn.mozillademos.org/files/15405/firefox-validation-message.png)

> **警告：** HTML form validation is _not_ a substitute for scripts that ensure that the entered data is in the proper format. It's far too easy for someone to make adjustments to the HTML that allow them to bypass the validation, or to remove it entirely. It's also possible for someone to simply bypass your HTML entirely and submit the data directly to your server. If your server-side code fails to validate the data it receives, disaster could strike when improperly-formatted data is submitted (or data which is too large, of the wrong type, and so forth).

## Handling browser support

As mentioned above, Safari and a few other, less common, browsers don't yet support time inputs natively. In general, otherwise, support is good — especially on mobile platforms, which tend to have very nice user interfaces for specifying a time value. For example, the `time` picker on Chrome for Android looks like this:

![](chrome-android-time.png)

Browsers that don't support time inputs gracefully degrade to a text input, but this creates problems both in terms of consistency of user interface (the presented control will be different), and data handling.

The second problem is the more serious; as mentioned previously, `time` inputs' values are always normalized to the format `hh:mm` or `hh:mm:ss`. With a text input, on the other hand, by default the browser has no idea of what format the time should be in, and there multiple ways in which people write times, such as:

- `3.00 pm`
- `3:00pm`
- `15:00`
- `3 o'clock in the afternoon`
- etc.

One way around this is to put a {{htmlattrxref("pattern", "input")}} attribute on your `time` input. Even though the `time` input doesn't use it, the `text` input fallback will. For example, try viewing the following demo in a browser that doesn't support time inputs:

```html
<form>
  <div>
    <label for="appt-time">Choose an appointment time (opening hours 12:00 to 18:00): </label>
    <input id="appt-time" type="time" name="appt-time"
           min="12:00" max="18:00" required
           pattern="[0-9]{2}:[0-9]{2}">
    <span class="validity"></span>
  </div>
  <div>
      <input type="submit" value="Submit form">
  </div>
</form>
```

{{ EmbedLiveSample('Handling_browser_support', 600, 100) }}

If you try submitting it, you'll see that non-supporting browsers now display an error message (and highlight the input as invalid) if your entry doesn't match the pattern `nn:nn`, where `n` is a number from 0 to 9. Of course, this doesn't stop people from entering invalid times, or incorrectly formatted times that follow the pattern.

Then there's the problem of the user having no idea exactly what format the time is expected to be in.

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

The best way to deal with times in forms in a cross-browser way, for the time being, is to get the user to enter the hours and minutes (and seconds if required) in separate controls ({{htmlelement("select")}} elements are popular; see below for an example), or use JavaScript libraries such as the [jQuery timepicker plugin](http://timepicker.co/).

## Examples

In this example, we create two sets of interface elements for choosing times: a native picker created with `<input type="time">`, and a set of two {{htmlelement("select")}} elements for choosing hours/minutes in older browsers that don't support the native input.

{{ EmbedLiveSample('Examples', 600, 140) }}

The HTML looks like so:

```html
<form>
  <div class="nativeTimePicker">
    <label for="appt-time">Choose an appointment time (opening hours 12:00 to 18:00): </label>
      <input id="appt-time" type="time" name="appt-time"
             min="12:00" max="18:00" required>
      <span class="validity"></span>
    </div>
  <p class="fallbackLabel">Choose an appointment time (opening hours 12:00 to 18:00):</p>
  <div class="fallbackTimePicker">
    <div>
      <span>
        <label for="hour">Hour:</label>
        <select id="hour" name="hour">
        </select>
      </span>
      <span>
        <label for="minute">Minute:</label>
        <select id="minute" name="minute">
        </select>
      </span>
    </div>
  </div>
</form>
```

The hour and minutes values for their `<select>` elements are dynamically generated.

```css hidden
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid+span:after {
  position: absolute;
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  position: absolute;
  content: '✓';
  padding-left: 5px;
}
```

The other part of the code that may be of interest is the feature detection code — to detect whether the browser supports `<input type="time">`, we create a new {{htmlelement("input")}} element, set its `type` to `time`, then immediately check what its type is set to — non-supporting browsers will return `text`, because the `time` type falls back to type `text`. If `<input type="time">` is not supported, we hide the native picker and show the fallback picker UI ({{htmlelement("select")}}s) instead.

```js
// define variables
var nativePicker = document.querySelector('.nativeTimePicker');
var fallbackPicker = document.querySelector('.fallbackTimePicker');
var fallbackLabel = document.querySelector('.fallbackLabel');

var hourSelect = document.querySelector('#hour');
var minuteSelect = document.querySelector('#minute');

// hide fallback initially
fallbackPicker.style.display = 'none';
fallbackLabel.style.display = 'none';

// test whether a new date input falls back to a text input or not
var test = document.createElement('input');
test.type = 'time';
// if it does, run the code inside the if() {} block
if(test.type === 'text') {
  // hide the native picker and show the fallback
  nativePicker.style.display = 'none';
  fallbackPicker.style.display = 'block';
  fallbackLabel.style.display = 'block';

  // populate the hours and minutes dynamically
  populateHours();
  populateMinutes();
}

function populateHours() {
  // populate the hours <select> with the 6 open hours of the day
  for(var i = 12; i <= 18; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // populate the minutes <select> with the 60 hours of each minute
  for(var i = 0; i <= 59; i++) {
    var option = document.createElement('option');
    option.textContent = (i < 10) ? ("0" + i) : i;
    minuteSelect.appendChild(option);
  }
}

// make it so that if the hour is 18, the minutes value is set to 00
// — you can't select times past 18:00
 function setMinutesToZero() {
   if(hourSelect.value === '18') {
     minuteSelect.value = '00';
   }
 }

 hourSelect.onchange = setMinutesToZero;
 minuteSelect.onchange = setMinutesToZero;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The generic {{HTMLElement("input")}} element and the interface used to manipulate it, {{domxref("HTMLInputElement")}}
- [Date and time formats used in HTML](/zh-CN/docs/Web/HTML/Date_and_time_formats)
- [Date and Time picker tutorial](/zh-CN/docs/Web/Guide/HTML/Forms/The_native_form_widgets#Date_and_time_picker)
- [`<input type="datetime-local">`](/en-US/docs/Web/HTML/Element/input/datetime-local), [`<input type="date">`](/en-US/docs/Web/HTML/Element/input/date), [`<input type="week">`](/en-US/docs/Web/HTML/Element/input/week), and [`<input type="month">`](/en-US/docs/Web/HTML/Element/input/month)
