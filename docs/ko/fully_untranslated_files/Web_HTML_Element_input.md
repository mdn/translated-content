---
title: "<input>: 입력 요소"
slug: Web/HTML/Element/input
---

{{HTMLSidebar}}

**HTML `<input>` 요소**는 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤을 생성합니다. {{glossary("user agent", "사용자 에이전트")}}에 따라서 다양한 종류의 입력 데이터 유형과 컨트롤 위젯이 존재합니다. 입력 유형과 특성의 다양한 조합 가능성으로 인해, `<input>` 요소는 HTML에서 제일 강력하고 복잡한 요소 중 하나입니다.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## `<input>` 유형

`<input>` 요소의 동작 방식은 [`type`](/ko/docs/Web/HTML/Global_attributes#type) 특성에 따라 현격히 달라지므로, 각각의 유형은 별도의 참고 문서에서 더 자세히 확인할 수 있습니다. 특성을 지정하지 않은 경우, 기본값은 `text`입니다.

가능한 유형은 다음과 같습니다.

<table class="standard-table">
  <colgroup>
    <col />
    <col style="width: 50%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>유형</th>
      <th>설명</th>
      <th>기본 예제</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>
        기본 행동을 가지지 않으며 <a href="/ko/docs/Web/HTML/Element/input#value"><code>value</code></a>을
        레이블로 사용하는 푸시 버튼.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="button" name="button" /></pre
        >
        {{EmbedLiveSample("examplebutton",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>단일 값을 선택하거나 선택 해제할 수 있는 체크박스.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="checkbox" name="checkbox"/></pre
        >
        {{EmbedLiveSample("examplecheckbox",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        색을 지정할 수 있는 컨트롤. 브라우저가 지원하는 경우, 활성화 시 색상
        선택기를 열어줍니다.
      </td>
      <td id="examplecolor">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="color" name="color"/></pre
        >
        {{EmbedLiveSample("examplecolor",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>
        날짜(연월일, 시간 없음)를 지정할 수 있는 컨트롤. 브라우저가 지원하는
        경우, 활성화 시 날짜를 선택할 수 있는 달력 등을 열어줍니다.
      </td>
      <td id="exampledate">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="date" name="date"/></pre
        >
        {{EmbedLiveSample("exampledate",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>
        날짜와 시간을 지정할 수 있는 컨트롤. 시간대는 지정할 수 없습니다.
        브라우저가 지원하는 경우, 활성화 시 날짜를 선택할 수 있는 달력과, 시계
        등을 열어줍니다.
      </td>
      <td id="exampledtl">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="datetime-local" name="datetime-local"/></pre
        >
        {{EmbedLiveSample("exampledtl",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/email", "email")}}</td>
      <td>
        이메일 주소를 편집할 수 있는 필드. 텍스트 입력 필드처럼 보이지만 유효성
        검증 매개변수가 존재하며, 브라우저와 장치가 동적 키보드를 지원하는 경우
        이메일에 적합한 키보드를 보여줍니다.
      </td>
      <td id="exampleemail">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="email" name="email"/></pre
        >
        {{EmbedLiveSample("exampleemail",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/file", "file")}}</td>
      <td>
        파일을 지정할 수 있는 컨트롤.
        <a href="/ko/docs/Web/HTML/Element/input#accept"><code>accept</code></a> 특성을 사용하면
        허용하는 파일 유형을 지정할 수 있습니다.
      </td>
      <td id="examplefile">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="file" accept="image/*, text/*" name="file"/></pre
        >
        {{EmbedLiveSample("examplefile",'100%',55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/hidden", "hidden")}}</td>
      <td>
        보이지 않지만 값은 서버로 전송하는 컨트롤. 오른쪽 칸에 예제가 있지만
        숨겨져서 안보이네요!
      </td>
      <td></td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>
        <code>src</code> 특성에 지정한 이미지로 나타나는 시각적 제출 버튼.
        이미지의 <a href="#src">src</a>를 누락한 경우
        <a href="#alt">alt</a> 특성의 텍스트를 대신 보여줍니다.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre
        >
        {{EmbedLiveSample("exampleimage",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>연과 월을 지정할 수 있는 컨트롤. 시간대는 지정할 수 없습니다.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="month" name="month"/></pre
        >
        {{EmbedLiveSample("examplemonth",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        <p>
          숫자를 입력하기 위한 컨트롤. 스피너를 표시하고 지원되는 기본 확인을
          추가합니다. 몇몇 장치에서는 동적 키패드들과 숫자 키패드를 표시합니다.
        </p>
      </td>
      <td id="examplenumber">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="number" name="number"/></pre
        >
        {{EmbedLiveSample("examplenumber",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/password", "password")}}</td>
      <td>
        <p>
          값이 가려진 한줄 텍스트 필드. 사이트가 안전하지 않으면 사용자에게
          경고합니다.
        </p>
      </td>
      <td id="examplepassword">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="password" name="password"/></pre
        >
        {{EmbedLiveSample("examplepassword",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/radio", "radio")}}</td>
      <td>
        <p>
          같은 <a href="#name">name</a> 값을 가진 여러개의 선택중에서 하나의
          값을 선택하게 하는 라디오 버튼입니다.
        </p>
      </td>
      <td id="exampleradio">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="radio" name="radio"/></pre
        >
        {{EmbedLiveSample("exampleradio",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>
        <p>
          값이 가려진 숫자를 입력하는 컨트롤. 디폴트 값이 중간값인 범위 위젯으로
          표시합니다. 접속사 <a href="#min">min</a> 와
          <a href="#max">max</a> 사이에 사용되며 수용가능한 값의 범위를
          정의합니다.
        </p>
      </td>
      <td id="examplerange">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="range" name="range" min="0" max="25"/></pre
        >
        {{EmbedLiveSample("examplerange",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/reset", "reset")}}</td>
      <td>
        양식의 내용을 디폴트값(기본값)으로 초기화하는 버튼. 권장되지 않습니다.
      </td>
      <td id="examplereset">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="reset" name="reset"/></pre
        >
        {{EmbedLiveSample("examplereset",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/search", "search")}}</td>
      <td>
        <p>
          검색문자열을 입력하는 한줄 텍스트 필드. 줄바꿈 문자는 입력값에서
          자동으로 제거됩니다. 지원 브라우저에서 필드를 클리어하기 위해 사용되는
          삭제 아이콘이 포함됩니다. 동적 키패드들이 있는 몇몇 장치에서 엔터키
          대신에 검색 아이콘을 표시합니다.
        </p>
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="search" name="search"/></pre
        >
        {{EmbedLiveSample("examplesearch",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>양식을 전송하는 버튼</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="submit" name="submit"/></pre
        >
        {{EmbedLiveSample("examplesubmit",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        전화번호를 입력하는 컨트롤. 몇몇 장치에서 동적 키패드들과 전화번호
        입력기를 표시한다.
      </td>
      <td id="exampletel">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="tel" name="tel"/></pre
        >
        {{EmbedLiveSample("exampletel",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/text", "text")}}</td>
      <td>
        <p>
          디폴트 값. 한줄의 텍스트 필드입니다. 새줄 문자는 입력값으로부터
          자동으로 제거됩니다.
        </p>
      </td>
      <td id="exampletext">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="text" name="text"/></pre
        >
        {{EmbedLiveSample("exampletext",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>시간대가 없는 시간값을 입력하는 콘트롤</td>
      <td id="exampletime">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="time" name="time"/></pre
        >
        {{EmbedLiveSample("exampletime",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        URL을 입력하는 필드. 텍스트 입력처럼 보이지만, 검증 매개변수가 있습니다.
        동적 키보드들을 지원하는 브라우저와 장치들에 관련된 키보드가 있습니다.
      </td>
      <td id="exampleurl">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="url" name="url"/></pre
        >
        {{EmbedLiveSample("exampleurl",200,55,"","", "nobutton")}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>
        시간대가 없는 주-년 값과 주의 값을 구성하는 날짜를 입력하는
        컨트롤입니다.
      </td>
      <td id="exampleweek">
        <pre class="brush: html hidden notranslate">
&#x3C;input type="week" name="week"/></pre
        >
        {{EmbedLiveSample("exampleweek",200,55,"","", "nobutton")}}
      </td>
    </tr>
  </tbody>
</table>

## 속성

`<input>` 요소가 강력한 이유는 바로 다양한 속성 때문입니다. 그 중에서도, 위의 표에서 확인할 수 있는 [`type`](/ko/docs/Web/HTML/Element/input#type) 속성이 제일 중요합니다. 모든 `<input>` 요소는 유형에 상관하지 않고 {{domxref("HTMLInputElement")}} 인터페이스에 기반하므로, 기술적으로는 모든 `<input>`이 동일한 속성을 가집니다. 그러나 사실 대부분의 속성은 일부 유형에서만 효과를 보입니다. 게다가, 어떤 속성은 유형별로 그 영향이 달라집니다.

여기에서는 모든 속성값들에 대해 간략한 설명을 담은 표를 제공합니다. 이 표 다음에는 각각의 속성을 더욱 상세하게 설명하는 목록이 나오는데, 그들이 연관된 input 유형과 함께 나옵니다. 대부분의 혹은 모든 input 유형에 공통적인 속성들은 그 아래 더욱 상세하게 설명되어 있습니다. 몇몇 input 유형에만 특정하게 해당하는 속성들이나 모든 유형에 공통적으로 해당하지만 특정 유형에 사용될 때 특정한 행동양식을 나타내는 속성들은 그 유형의 해당 페이지에 대신 기술되어 있습니다. 이 요소에는 글로벌 속성들도 포함됩니다. input에 관련된 특별히 중요한 속성들은 하이라이트로 표시되었습니다.

| 특성                                              | 유형                             | 설명                                                                                  |
| ------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------- |
| [accept](#htmlattrdefaccept)                      | file                             | 파일을 업로드 컨트롤에서 기대하는 파일 유형을 암시                                    |
| [alt](#htmlattrdefalt)                            | image                            | 이미지 유형에 대한 대체 속성. accessibiltiy 측면에서 필요.                            |
| [autocomplete](#htmlattrdefautocomplete)          | all                              | 양식 자동생성 기능 (form autofill) 암시                                               |
| [autofocus](#htmlattrdefautofocus)                | all                              | 페이지가 로딩될때 양식 제어에 오토포커스                                              |
| [capture](#htmlattrdefcapture)                    | file                             | 파일 업로드 제어에서 input 방식에서 미디어 capture                                    |
| [checked](#htmlattrdefchecked)                    | radio, checkbox                  | 커맨드나 컨트롤이 체크 되었는지의 여부                                                |
| [dirname](#htmlattrdefdirname)                    | text, search                     | 양식 전송시 요소의 방향성을 전송할 때 양식 필드의 Name                                |
| [disabled](#htmlattrdefdisabled)                  | all                              | 양식 컨트롤이 비활성화되었는지의 여부                                                 |
| [form](#htmlattrdefform)                          | all                              | 컨트롤을 양식 요소와 연결                                                             |
| [formaction](#htmlattrdefformaction)              | image, submit                    | 양식 전송시 URL 사용하기                                                              |
| [formenctype](#htmlattrdefformenctype)            | image, submit                    | 양식의 데이터 인코딩 유형이 양식 전송시 사용될 것                                     |
| [formmethod](#htmlattrdefformmethod)              | image, submit                    | 양식 전송시 HTTP 방식을 사용                                                          |
| [formnovalidate](#htmlattrdefformnovalidate)      | image, submit                    | 양식 전송시 양식 컨트롤 확인을 무시하기                                               |
| [formtarget](#htmlattrdefformtarget)              | image, submit                    | 양식 전송시 브라우징 맥락                                                             |
| [height](#htmlattrdefheight)                      | image                            | 이미지 높이에서 `height` 속성과 같음                                                  |
| [list](#htmlattrdeflist)                          | almost all                       | datalist 자동입력 옵션의 id 속성값                                                    |
| [max](#htmlattrdefmax)                            | numeric types                    | 최대값                                                                                |
| [maxlength](#htmlattrdefmaxlength)                | password, search, tel, text, url | `value`의 최대 길이 (문자수)                                                          |
| [min](#htmlattrdefmin)                            | numeric types                    | 최소값                                                                                |
| [minlength](#htmlattrdefminlength)                | password, search, tel, text, url | `value`의 최소 길이 (문자수)                                                          |
| [multiple](#htmlattrdefmultiple)                  | email, file                      | 불리언값. 여러 값을 허용할지의 여부                                                   |
| [name](#htmlattrdefname)                          | all                              | input 양식 컨트롤의 이름. 이름/값 짝(name/value pair)의 일부로서 양식과 함께 전송된다 |
| [pattern](#htmlattrdefpattern)                    | password, text, tel              | `value` 가 유효하기 위해 일치해야 하는 패턴                                           |
| [placeholder](#htmlattrdefplaceholder)            | password, search, tel, text, url | 양식 컨트롤이 비어있는 때 양식 컨트롤에 나타나는 내용                                 |
| [readonly](/ko/docs/Web/HTML/Attributes/readonly) | almost all                       | 불리언값. 이 값은 수정이 불가능함                                                     |
| [required](/ko/docs/Web/HTML/Attributes/required) | almost all                       | 불리언값. 양식이 전송되기 위해서 반드시 입력하거나 확인이 필요한 값                   |
| [size](#htmlattrdefsize)                          | email, password, tel, text       | 컨트롤의 크기                                                                         |
| [src](#htmlattrdefsrc)                            | image                            | 이미지 출처의 주소에서 `src` 와 같은 속성                                             |
| [step](#htmlattrdefstep)                          | numeric types                    | 유효한 증분적인 (Incremental)값                                                       |
| [type](#htmlattrdeftype)                          | all                              | input 양식 컨트롤의 유형                                                              |
| [value](#htmlattrdefvalue)                        | all                              | 양식 컨트롤의 현재 값. 이름/값 짝(name/value pair)의 일부로서 양식과 함께 전송된다    |
| [width](#htmlattrdefwidth)                        | image                            | 이미지의 `width` 속성과 같다                                                          |

A few additional non-standard attributes are listed following the descriptions of the standard attributes

### 개별 속성

- {{htmlattrdef("accept")}}
  - : Valid for the `file` input type only, the `accept` property defines which file types are selectable in a `file` upload control. See the {{HTMLElement("input/file", "file")}} input type.
- {{htmlattrdef("alt")}}
  - : Valid for the `image` button only, the alt attribute provides alternative text for the image, displaying the value of the attribute if the image [src](#src) is missing or otherwise fails to load. See the {{HTMLElement("input/image", "image")}} input type.
- {{htmlattrdef("autocomplete")}}

  - : **Not** a Boolean attribute, the [`autocomplete`](/ko/docs/Web/HTML/Attributes/autocomplete) attribute takes as its value a space separated string that describes what, if any, type of autocomplete functionality the input should provide. A typical implementation of autocomplete simply recalls previous values entered in the same input field, but more complex forms of autocomplete can exist. For instance, a browser could integrate with a device's contacts list to autocomplete email addresses in an email input field. See [Values](/ko/docs/Web/HTML/Attributes/autocomplete#값) for permitted values.

    The `autocomplete` attribute is valid on `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color` and `password`. This attribute has no effect on input types that do not return numeric or text data, being valid for all input types except `checkbox`, `radio`, `file`, or any of the button types. See [The HTML autocomplete attribute](/ko/docs/Web/HTML/Attributes/autocomplete) for additional information, including information on password security and how `autocomplete` is slightly different for `hidden` than for other input types.

- {{htmlattrdef("autofocus")}}

  - : A Boolean attribute which, if present, indicates that the input should automatically have focus when the page has finished loading (or when the {{HTMLElement("dialog")}} containing the element has been displayed).

    > **참고:** An element with the `autofocus` attribute may gain focus before the {{domxref("DOMContentLoaded")}} event is fired.

    No more than one element in the document may have the `autofocus` attribute, and `autofocus` cannot be used on inputs of type `hidden`, because hidden inputs can't be focused. If put on more than one element, the first one with the attribute receives focus .

    > **경고:** Automatically focusing a form control can confuse visually-impaired people using screen-reading technology and people with cognitive impairments. When `autofocus` is assigned, screen-readers "teleport" their user to the form control without warning them beforehand.

    For better usability, avoid using `autofocus`. Automatically focusing on a form control can cause the page to scroll on load. The focus can also cause dynamic keyboards to display on some touch devices. While a screen reader will announce the label of the form control receiving focus, the screen reader will not announce anything before the label, and the sighted user on a small device will equally miss the context created by the preceding content.

- {{htmlattrdef("capture")}}
  - : Introduced in the HTML Media Capture specification and valid for the `file` input type only, the `capture` attribute defines which media - microphone, video, or camera - should be used to capture a new file for upload with `file` upload control in supporting scenarios. See the {{HTMLElement("input/file", "file")}} input type.
- {{htmlattrdef("checked")}}

  - : Valid for both `radio` and `checkbox` types, `checked` is a Boolean attribute. If present on a radio type, it indicates that that radio button is the currently selected one in the group of same-named radio buttons. If present on a `checkbox` type, it indicates that the checkbox is checked by default (when the page loads). It does _not_ indicate whether this checkbox is currently checked: if the checkbox's state is changed, this content attribute does not reflect the change. (Only the [`HTMLInputElement`'s `checked` IDL attribute](/ko/docs/Web/API/HTMLInputElement) is updated.)

    > **참고:** Unlike other input controls, a checkboxes and radio buttons value are only included in the submitted data if they are currently `checked`. If they are, the name and the value(s) of the checked controls are submitted.
    >
    > For example, if a checkbox whose `name` is `fruit` has a `value` of `cherry`, and the checkbox is checked, the form data submitted will include `fruit=cherry`. If the checkbox isn't active, it isn't listed in the form data at all. The default `value` for checkboxes and radio buttons is `on`.

- {{htmlattrdef("dirname")}}

  - : Valid for `text` and `search` input types only, the `dirname` attribute enables the submission of the directionality of the element. When included, the form control will submit with two name/value pairs: the first being the [name](#name) and [value](#value), the second being the value of the `dirname` as the name with the value of `ltr` or `rtl` being set by the browser.

    ```
    <form action="page.html" method="post">
      <label>Fruit: <input type="text" name="fruit" dirname="fruit.dir" value="cherry"></label>
      <input type="submit"/>
    </form>
    <!-- page.html?fruit=cherry&fruit.dir=ltr -->
    ```

    When the form above is submitted, the input cause both the `name` / `value` pair of `fruit=cherry` and the `dirname` / direction pair of `fruit.dir=ltr` to be sent.

- {{htmlattrdef("disabled")}}

  - : A Boolean attribute which, if present, indicates that the user should not be able to interact with the input. Disabled inputs are typically rendered with a dimmer color or using some other form of indication that the field is not available for use.

    Specifically, disabled inputs do not receive the [`click`](/ko/docs/Web/API/Element/click_event) event, and disabled inputs are not submitted with the form.

    > **참고:** Although not required by the specification, Firefox will by default [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of an `<input>` across page loads. Use the [`autocomplete`](/ko/docs/Web/HTML/Element/input#autocomplete) attribute to control this feature.

- {{htmlattrdef("form")}}

  - : A string specifying the {{HTMLElement("form")}} element with which the input is associated (that is, its **form owner**). This string's value, if present, must match the [`id`](/ko/docs/Web/HTML/Global_attributes#id) of a `<form>` element in the same document. If this attribute isn't specified, the `<input>` element is associated with the nearest containing form, if any.

    The `form` attribute lets you place an input anywhere in the document but have it included with a form elsewhere in the document.

    > **참고:** An input can only be associated with one form.

- {{htmlattrdef('formaction')}}
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- {{htmlattrdef('formenctype')}}
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- {{htmlattrdef('formmethod')}}
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- {{htmlattrdef('formnovalidate')}}
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- {{htmlattrdef('formtarget')}}
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- {{htmlattrdef("height")}}
  - : Valid for the `image` input button only, the `height` is the height of the image file to display to represent the graphical submit button. See the {{HTMLElement("input/image", "image")}} input type.
- {{htmlattrdef("id")}}
  - : Global attribute valid for all elements, including all the input types, it defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking. The value is used as the value of the {{htmlelement('label')}}'s `for` attribute to link the label with the form control. See the [the label element](#the_label_element) below.
- {{htmlattrdef("inputmode")}}
  - : Global value valid for all elements, it provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Values include none
    `text`, `tel`, `url`, `email`, `numeric`, `decimal`, and `search`
- {{htmlattrdef("list")}}

  - : The values of the list attribute is the {{domxref("Element.id", "id")}} of a {{HTMLElement("datalist")}} element located in the same document. The `<datalist>` provides a list of predefined values to suggest to the user for this input. Any values in the list that are not compatible with the [`type`](/ko/docs/Web/HTML/Element/input#type) are not included in the suggested options. The values provided are suggestions, not requirements: users can select from this predefined list or provide a different value.

    ```html hidden
    <datalist id="colorsxx">
      <option>#ff0000</option>
      <option>#ee0000</option>
      <option>#dd0000</option>
      <option>#cc0000</option>
      <option>#bb0000</option>
    </datalist>
    <datalist id="numbersxx">
      <option>0</option>
      <option>2</option>
      <option>4</option>
      <option>8</option>
      <option>16</option>
      <option>32</option>
      <option>64</option>
    </datalist>
    <datalist id="fruitsxx">
      <option>cherry</option>
      <option>banana</option>
      <option>mango</option>
      <option>orange</option>
      <option>blueberry</option>
    </datalist>
    <datalist id="urlsxx">
      <option>https://developer.mozilla.org</option>
      <option>https://caniuse.com/</option>
      <option>https://mozilla.com</option>
      <option>https://mdn.github.io</option>
      <option>https://www.youtube.com/user/firefoxchannel</option>
    </datalist>

    <p>
      <label for="textx">Text</label>
      <input type="text" list="fruitsxx" id="textx" />
    </p>
    <p>
      <label for="colorx">Color</label>
      <input type="color" list="colorsxx" id="colorx" />
    </p>
    <p>
      <label for="rangex">Range</label>
      <input type="range" min="0" max="64" list="numbersxx" id="rangex" />
    </p>
    <p>
      <label for="numberx">Number</label>
      <input type="number" min="0" max="64" list="numbersxx" id="numberx" />
    </p>
    <p>
      <label for="urlx">URL</label> <input type="url" list="urlsxx" id="urlx" />
    </p>
    ```

    {{EmbedLiveSample("datalist",400,275,"","", "nobutton")}}

    It is valid on `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, and `color.`Per the specifications, the `list` attribute is not supported by the `hidden`, `password`, `checkbox`, `radio`, `file`, or any of the button types.

    Depending on the browser, the user may see a custom color palette suggested, tic marks along a range, or even a input that opens like a select but allows for non-listed values. Check out the [browser compatibility table](/ko/docs/Web/HTML/Element/datalist#Browser_compatibility) for the other input types.

    See the {{htmlelement('datalist')}} element.

- [{{htmlattrdef("max")}}](/ko/docs/Web/HTML/Attributes/max)
  - : Valid for `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `range`, it defines the greatest value in the range of permitted values. If the [`value`](/ko/docs/Web/HTML/Element/input#value) entered into the element exceeds this, the element fails [constraint validation](/ko/docs/Web/Guide/HTML/HTML5/Constraint_validation). If the value of the `max` attribute isn't a number, then the element has no maximum value.
- {{htmlattrdef("maxlength")}}

  - : Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, it defines the maximum number of characters (as UTF-16 code units) the user can enter into the field. This must be an integer value 0 or higher. If no `maxlength` is specified, or an invalid value is specified, the field has no maximum length. This value must also be greater than or equal to the value of `minlength`.

    The input will fail [constraint validation](/ko/docs/Web/Guide/HTML/HTML5/Constraint_validation) if the length of the text entered into the field is greater than `maxlength` UTF-16 code units long. By default, browsers prevent users from entering more characters than allowed by the `maxlength` attribute. See [Client-side validation](#client-side_validation) for more information.

- {{htmlattrdef("min")}}

  - : Valid for `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `range`, it defines the most negative value in the range of permitted values. If the [`value`](/ko/docs/Web/HTML/Element/input#value) entered into the element is less than this this, the element fails [constraint validation](/ko/docs/Web/Guide/HTML/HTML5/Constraint_validation). If the value of the `min` attribute isn't a number, then the element has no minimum value.

    This value must be less than or equal to the value of the `max` attribute. If the `min` attribute is present by is not specified or is invalid, no `min` value is applied. If the `min` attribute is valid and a non-empty value is less than the minimum allowed by the `min` attribute, constraint validation will prevent form submission. See [Client-side validation](#client-side_validation) for more information.

- {{htmlattrdef("minlength")}}

  - : Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, it defines the minimum number of characters (as UTF-16 code units) the user can enter into the entry field. This must be an non-negative integer value smaller than or equal to the value specified by `maxlength`. If no `minlength` is specified, or an invalid value is specified, the input has no minimum length.

    The input will fail [constraint validation](/ko/docs/Web/Guide/HTML/HTML5/Constraint_validation) if the length of the text entered into the field is fewer than `minlength` UTF-16 code units long, preventing form submission. See [Client-side validation](#client-side_validation) for more information.

- {{htmlattrdef("multiple")}}
  - : The Boolean multiple attribute, if set, means the user can enter comma separated email addresses in the email widget or can choose more than one file with the `file` input. See the {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/file", "file")}} input type.
- {{htmlattrdef("name")}}

  - : A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted.

##### What's in a name

Consider the `name` a required attribute (even though it's not). If an input has no `name` specified, or `name` is empty, the input's value is not submitted with the form. (Disabled controls, unchecked radio buttons, unchecked checkboxes, and reset buttons are also not sent.)

There are two special cases:

1. `_charset_` : If used as the name of an `<input>` element of type [`hidden`](/ko/docs/Web/HTML/Element/input/hidden), the input's `value` is automatically set by the [user agent](/ko/docs/Glossary/user_agent) to the character encoding being used to submit the form.
2. `isindex`: For historical reasons, the name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) is not allowed.

##### `name` and radio buttons

The [name](#name) attribute creates a unique behavior for radio buttons.

Only one radio button in a same-named group of radio buttons can be checked at a time. Selecting any radio button in that group automatically deselects any currently-selected radio button in the same group. The value of that one checked radio button is sent along with the name if the form is submitted,

When tabbing into a series of same-named group of radio buttons, if one is checked, that one will receive focus. If they aren't grouped together in source order, if one of the group is checked, tabbing into the group starts when the first one in the group is encountered, skipping all those that aren't checked. In other words, if one is checked, tabbing skips the unchecked radio buttons in the group. If none are checked, the radio button group receives focus when the first button in the same name group is reached.

Once one of the radio buttons in a group has focus, using the arrow keys will navigate thru all the radio buttons of the same name, even if the radio buttons are not grouped together in the source order.

##### {{domxref("HTMLFormElement.elements")}}

When an input element is given a `name`, that name becomes a property of the owning form element's {{domxref("HTMLFormElement.elements")}} property. If you have an input whose `name` is set to `guest` and another whose `name` is `hat-size`, the following code can be used:

```js
let form = document.querySelector("form");

let guestName = form.elements.guest;
let hatSize = form.elements["hat-size"];
```

When this code has run, `guestName` will be the {{domxref("HTMLInputElement")}} for the `guest` field, and `hatSize` the object for the `hat-size` field.

> **경고:** You should avoid giving form elements a `name` that corresponds to a built-in property of the form, since you would then override the predefined property or method with this reference to the corresponding input.

- {{htmlattrdef("pattern")}}

  - : The `pattern` attribute, when specified, is a regular expression that the input's [`value`](/ko/docs/Web/HTML/Global_attributes#value) must match in order for the value to pass [constraint validation](/ko/docs/Web/Guide/HTML/HTML5/Constraint_validation). It must be a valid JavaScript regular expression, as used by the {{jsxref("RegExp")}} type, and as documented in our [guide on regular expressions](/ko/docs/Web/JavaScript/Guide/Regular_Expressions); the `'u'` flag is specified when compiling the regular expression, so that the pattern is treated as a sequence of Unicode code points, instead of as ASCII. No forward slashes should be specified around the pattern text.

    If the `pattern` attribute is present but is not specified or is invalid, no regular expression is applied and this attribute is ignored completely. If the pattern attribute is valid and a non-empty value does not match the pattern, constraint validation will prevent form submission.

    > **참고:** **Tip:** If using the `pattern` attribute, inform the user about the expected format by including explanatory text nearby. You can also include a [`title`](/ko/docs/Web/HTML/Element/input#title) attribute to explain what the requirements are to match the pattern; most browsers will display this title as as a tooltip The visible explanation is required for accessibilty. The tooltip is an enhancement.

    See [Client-side validation](#client-side_validation) for more information.

- {{htmlattrdef("placeholder")}}

  - : The `placeholder` attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text _must not_ include carriage returns or line feeds.

    > **참고:** The `placeholder` attribute is not as semantically useful as other ways to explain your form, and can cause unexpected technical issues with your content. See [Labels and placeholders](/ko/docs/Web/HTML/Element/input#labels) for more information.

- {{htmlattrdef("readonly")}}

  - : A Boolean attribute which, if present, indicates that the user should not be able to edit the value of the input. The `readonly` attribute is supported `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `password` input types.

    See the [HTML attribute: `readonly`](/ko/docs/Web/HTML/Attributes/readonly) for more information.

- {{htmlattrdef("required")}}

  - : `required` is a Boolean attribute which, if present, indicates that the user must specify a value for the input before the owning form can be submitted. The `required` attribute is supported `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, and `file`.

    See [Client-side validation](#client-side_validation) and the [HTML attribute: `required`](/ko/docs/Web/HTML/Attributes/required) for more information.

- {{htmlattrdef("size")}}
  - : Valid for `email`, `password`, `tel`, and text `input` types only. Specifies how much of the input is shown. Basically creates same result as setting CSS `width` property with a few specialities. The actual unit of the value depends on the input type. For password and text it's number of characters (or `em` units) and `pixel`s for others. CSS width takes precedence over size attribute.
- {{htmlattrdef("src")}}
  - : Valid for the `image` input button only, the `src` is string specifying the URL of the image file to display to represent the graphical submit button. See the {{HTMLElement("input/image", "image")}} input type.
- {{htmlattrdef("step")}}

  - : Valid for the numeric input types, including `number`, date/time input types, and `range`, the [`step`](/ko/docs/Web/HTML/Attributes/step) attribute is a number that specifies the granularity that the value must adhere to.

    If not explicitly included, `step` defaults to 1 for `number` and `range`, and 1 unit type (second, week, month, day) for the date/time input types. The value can must be a positive number - integer or float — or the special value `any`, which means no stepping is implied, and any value is allowed (barring other constraints, such as [`min`](#min) and [`max`](#max)).

    If `any` is not explicity set, valid values for the `number`, date/time input types, and `range` input types are equal to the basis for stepping - the [`min`](#min) value and increments of the step value, up to the [`max`](#max) value, if specified. For example, if we have `<input type="number" min="10" step="2">` any even integer, 10 or great, is valid. If omitted, `<input type="number">`, any integer is valid, but floats, like 4.2, are not valid, as `step` defaults to 1. For 4.2 to be valid, `step` would have had to be set to `any`, 0.1, 0.2, or any the min value would have had to be a number ending in .2, such as `<input type="number" min="-5.2">`

    > **참고:** When the data entered by the user doesn't adhere to the stepping configuration, the value is considered invalid in contraint validation and will match the :invalid pseudoclass

    The default stepping value for `number` inputs is 1, allowing only integers to be entered, _unless_ the stepping base is not an integer. The default stepping value for `time` is 1 second, with 900 being equal to 15 minutes.

    See [Client-side validation](#client-side_validation) for more information.

- {{htmlattrdef("tabindex")}}
  - : Global attribute valid for all elements, including all the input types, an integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation. As all input types except for input of type hidden are focusable, this attribute should not be used on form controls, because doing so would require the management of the focus order for all elements within the document with the risk of harming usability and accessibility if done incorrectly.
- {{htmlattrdef('title')}}
  - : Global attribute valid for all elements, including all input types, containing a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip. The title should NOT be used as the primary explanation of the purpose of the form control. Instead, use the {{htmlelement('label')}} element with a `for` attribute set to the form control's {{htmlattrdef('id')}} attribute. See [Labels](#labels) below.
- {{htmlattrdef("type")}}

  - : A string specifying the type of control to render. For example, to create a checkbox, a value of `checkbox` is used. If omitted (or an unknown value is specified), the input type `text` is used, creating a plaintext input field.

    Permitted values are listed in [\<input> types](#input_types) above.

- {{htmlattrdef("value")}}
  - : The input control's value. When specified in the HTML, this is the initial value, and from then on it can be altered or retrieved at any time using JavaScript to access the respective {{domxref("HTMLInputElement")}} object's `value` property. The `value` attribute is always optional, though should be considered mandatory for `checkbox`, `radio`, and `hidden`.
- {{htmlattrdef("width")}}
  - : Valid for the `image` input button only, the `width` is the width of the image file to display to represent the graphical submit button. See the {{HTMLElement("input/image", "image")}} input type.

## 예제

### A simple input box

```html
<!-- A basic input -->
<input type="text" name="input" value="Type here" />
```

### A common use-case scenario

```html
<!-- A common form that includes input tags -->
<form action="getform.php" method="get">
  <label>First name: <input type="text" name="first_name" /></label><br />
  <label>Last name: <input type="text" name="last_name" /></label><br />
  <label>E-mail: <input type="email" name="user_email" /></label><br />
  <input type="submit" value="Submit" />
</form>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
