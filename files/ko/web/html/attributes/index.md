---
title: HTML 특성 참고서
slug: Web/HTML/Attributes
---

{{HTMLSidebar}}

HTML의 요소들은 **특성**을 가지고 있습니다. 특성은 사용자가 원하는 기준에 맞도록 요소를 설정하거나 다양한 방식으로 요소의 동작을 조절하기 위한 값을 말합니다.

## 특성 목록

<table class="standard-table">
  <thead>
    <tr>
      <th>특성 이름</th>
      <th>요소</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>accept</code></td>
      <td>
        {{ HTMLElement("form") }}, {{ HTMLElement("input") }}
      </td>
      <td>서버에서 허용하는 유형의 목록. 보통 파일 유형을 의미합니다.</td>
    </tr>
    <tr>
      <td><code>accept-charset</code></td>
      <td>{{ HTMLElement("form") }}</td>
      <td>지원하는 문자 집합의 목록.</td>
    </tr>
    <tr>
      <td><code>accesskey</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>
        해당 요소로 초점을 이동시키거나 활성화시키기 위한 키보드 단축키를
        정의합니다.
      </td>
    </tr>
    <tr>
      <td><code>action</code></td>
      <td>{{ HTMLElement("form") }}</td>
      <td>폼(form)으로부터 전송된 정보를 처리할 프로그램의 URI입니다.</td>
    </tr>
    <tr>
      <td><code>align</code></td>
      <td>
        {{ HTMLElement("applet") }},
        {{ HTMLElement("caption") }}, {{ HTMLElement("col") }},
        {{ HTMLElement("colgroup") }},
        {{ HTMLElement("hr") }}, {{ HTMLElement("iframe") }},
        {{ HTMLElement("img") }}, {{ HTMLElement("table") }},
        {{ HTMLElement("tbody") }}, {{ HTMLElement("td") }},
        {{ HTMLElement("tfoot") }} , {{ HTMLElement("th") }},
        {{ HTMLElement("thead") }}, {{ HTMLElement("tr") }}
      </td>
      <td>해당 요소의 가로 정렬 방식을 명시합니다.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ko/docs/Web/HTML/Attributes/allow">allow</a></code>
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>Specifies a feature-policy for the iframe.</td>
    </tr>
    <tr>
      <td><code>alt</code></td>
      <td>
        {{ HTMLElement("applet") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("img") }}, {{ HTMLElement("input") }}
      </td>
      <td>이미지를 표시할 수 없는 경우 표시할 대체 문구입니다.</td>
    </tr>
    <tr>
      <td><code>async</code></td>
      <td>{{ HTMLElement("script") }}</td>
      <td>해당 스크립트는 비동기적으로 실행되어야함을 나타냅니다.</td>
    </tr>
    <tr>
      <td><code>autocapitalize</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>
        사용자가 입력하거나 편집하는 문구를 자동으로 대문자로 바꿀지 여부와
        방법을 제어합니다.
      </td>
    </tr>
    <tr>
      <td><code>autocomplete</code></td>
      <td>
        {{ HTMLElement("form") }}, {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>
        이 폼 내의 컨트롤에 대해 브라우저가 지원하는 값 자동완성 기능을 기본으로
        설정할 것인지를 나타냅니다.
      </td>
    </tr>
    <tr>
      <td><code>autofocus</code></td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>페이지가 로드된 후 자동으로 해당 요소로 초점이 이동합니다.</td>
    </tr>
    <tr>
      <td><code>autoplay</code></td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>오디오나 비디오가 가능한 빠른 시점에 재생됩니다.</td>
    </tr>
    <tr>
      <td><code>background</code></td>
      <td>
        {{ HTMLElement("body") }}, {{ HTMLElement("table") }},
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>
        Specifies the URL of an image file.
        <div class="note">
          <strong>Note:</strong> Although browsers and email clients may still
          support this attribute, it is obsolete. Use CSS
          {{ Cssxref("background-image") }} instead.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>bgcolor</code></td>
      <td>
        {{ HTMLElement("body") }}, {{ HTMLElement("col") }},
        {{ HTMLElement("colgroup") }},
        {{ HTMLElement("marquee") }},
        {{ HTMLElement("table") }},
        {{ HTMLElement("tbody") }},
        {{ HTMLElement("tfoot") }}, {{ HTMLElement("td") }},
        {{ HTMLElement("th") }}, {{ HTMLElement("tr") }}
      </td>
      <td>
        <p>요소의 배경색입니다.</p>
        <div class="note">
          <p>
            <strong>주:</strong> 이 속성은 더 이상 사용하지 않습니다. CSS의
            {{ Cssxref("background-color") }} 속성을 대신 사용하시기
            바랍니다.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>border</code></td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("object") }},
        {{ HTMLElement("table") }}
      </td>
      <td>
        <p>선의 굵기입니다.</p>
        <div class="note">
          <p>
            <strong>주:</strong> 이 속성은 더 이상 사용하지 않습니다. CSS의
            {{ Cssxref("border") }} 속성을 대신 사용하시기 바랍니다.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>buffered</code></td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>이미 버퍼링된 미디어의 시간 범위를 가집니다.</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/capture">capture</a></code
        >
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        From the
        media capture spec,
        specifies a new file can be captured.
      </td>
    </tr>
    <tr>
      <td><code>charset</code></td>
      <td>
        {{ HTMLElement("meta") }}, {{ HTMLElement("script") }}
      </td>
      <td>페이지 또는 스크립트의 문자 인코딩을 선언합니다.</td>
    </tr>
    <tr>
      <td><code>checked</code></td>
      <td>
        {{ HTMLElement("command") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        페이지가 로딩될 때, 해당 요소가 체크되어 있어야하는지를 나타냅니다.
      </td>
    </tr>
    <tr>
      <td><code>cite</code></td>
      <td>
        {{ HTMLElement("blockquote") }},
        {{ HTMLElement("del") }}, {{ HTMLElement("ins") }},
        {{ HTMLElement("q") }}
      </td>
      <td>변경 또는 인용구문의 출처를 가리키는 URI를 가집니다.</td>
    </tr>
    <tr>
      <td><code>class</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>
        공통적인 속성으로 요소의 스타일을 지정할 때 CSS와 함께 자주 사용됩니다.
      </td>
    </tr>
    <tr>
      <td><code>code</code></td>
      <td>{{ HTMLElement("applet") }}</td>
      <td>로딩 후 실행할 애플릿의 클래스 파일의 URL을 명시합니다.</td>
    </tr>
    <tr>
      <td><code>codebase</code></td>
      <td>{{ HTMLElement("applet") }}</td>
      <td>
        이 속성은 코드(code) 속성이 참조하는 애플릿의 .class 파일이 저장되어
        있는 디렉토리의 절대경로 또는 상대경로 URL을 제공합니다.
      </td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>
        {{ HTMLElement("basefont") }},
        {{ HTMLElement("font") }}, {{ HTMLElement("hr") }}
      </td>
      <td>
        <p>
          이 속성은 미리 정의된 색상 명칭 또는 #RRGGBB 형식의 16진수로 명시된
          색상으로 텍스트 색상을 설정한다.
        </p>
        <div class="note">
          <p>
            <strong>주:</strong> 이 속성은 더 이상 사용하지 않습니다. CSS의
            {{ Cssxref("color") }} 속성을 대신 사용하시기 바랍니다.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>cols</code></td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>textarea에 표시할 컬럼의 수를 정의한다.</td>
    </tr>
    <tr>
      <td><code>colspan</code></td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>colspan 속성은 어떤 셀이 확장되어야 할 컬럼의 수를 정의한다.</td>
    </tr>
    <tr>
      <td><code>content</code></td>
      <td>{{ HTMLElement("meta") }}</td>
      <td>
        A value associated with <code>http-equiv</code> or
        <code>name</code> depending on the context.
      </td>
    </tr>
    <tr>
      <td><code>contenteditable</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>Indicates whether the element's content is editable.</td>
    </tr>
    <tr>
      <td><code>contextmenu</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>
        Defines the ID of a {{ HTMLElement("menu") }} element which will
        serve as the element's context menu.
      </td>
    </tr>
    <tr>
      <td><code>controls</code></td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        Indicates whether the browser should show playback controls to the user.
      </td>
    </tr>
    <tr>
      <td><code>coords</code></td>
      <td>{{ HTMLElement("area") }}</td>
      <td>
        A set of values specifying the coordinates of the hot-spot region.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/CORS_settings_attributes"
            >crossorigin</a
          ></code
        >
      </td>
      <td>
        {{ HTMLElement("audio") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }},
        {{ HTMLElement("video") }}
      </td>
      <td>How the element handles cross-origin requests</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ko/docs/Web/API/HTMLiframeElement/csp">csp</a></code>
        {{experimental_inline}}
      </td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td>
        Specifies the Content Security Policy that an embedded document must
        agree to enforce upon itself.
      </td>
    </tr>
    <tr>
      <td><code>data</code></td>
      <td>{{ HTMLElement("object") }}</td>
      <td>Specifies the URL of the resource.</td>
    </tr>
    <tr>
      <td><code>data-*</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>Lets you attach custom attributes to an HTML element.</td>
    </tr>
    <tr>
      <td><code>datetime</code></td>
      <td>
        {{ HTMLElement("del") }}, {{ HTMLElement("ins") }},
        {{ HTMLElement("time") }}
      </td>
      <td>Indicates the date and time associated with the element.</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/decoding">decoding</a></code
        >
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>Indicates the preferred method to decode the image.</td>
    </tr>
    <tr>
      <td><code>default</code></td>
      <td>{{ HTMLElement("track") }}</td>
      <td>
        Indicates that the track should be enabled unless the user's preferences
        indicate something different.
      </td>
    </tr>
    <tr>
      <td><code>defer</code></td>
      <td>{{ HTMLElement("script") }}</td>
      <td>
        Indicates that the script should be executed after the page has been
        parsed.
      </td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>
        Defines the text direction. Allowed values are ltr (Left-To-Right) or
        rtl (Right-To-Left)
      </td>
    </tr>
    <tr>
      <td><code>dirname</code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("command") }},
        {{ HTMLElement("fieldset") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("optgroup") }},
        {{ HTMLElement("option") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Indicates whether the user can interact with the element.</td>
    </tr>
    <tr>
      <td><code>download</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td>
        Indicates that the hyperlink is to be used for downloading a resource.
      </td>
    </tr>
    <tr>
      <td><code>draggable</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>Defines whether the element can be dragged.</td>
    </tr>
    <tr>
      <td><code>dropzone</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>Indicates that the element accept the dropping of content on it.</td>
    </tr>
    <tr>
      <td><code>enctype</code></td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        Defines the content type of the form date when the
        <code>method</code> is POST.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/enterkeyhint"
            >enterkeyhint</a
          ></code
        >
        {{experimental_inline}}
      </td>
      <td>
        {{ HTMLElement("textarea") }},
        <a href="/ko/docs/Web/HTML/Global_attributes/contenteditable"
          ><code>contenteditable</code></a
        >
      </td>
      <td>
        The
        <a
          href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute"
          ><code>enterkeyhint</code></a
        >
        specifies what action label (or icon) to present for the enter key on
        virtual keyboards. The attribute can be used with form controls (such as
        the value of <code>textarea</code> elements), or in elements in an
        editing host (e.g., using <code>contenteditable</code> attribute).
      </td>
    </tr>
    <tr>
      <td><code>for</code></td>
      <td>
        {{ HTMLElement("label") }},
        {{ HTMLElement("output") }}
      </td>
      <td>Describes elements which belongs to this one.</td>
    </tr>
    <tr>
      <td><code>form</code></td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("fieldset") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("label") }},
        {{ HTMLElement("meter") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("output") }},
        {{ HTMLElement("progress") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Indicates the form that is the owner of the element.</td>
    </tr>
    <tr>
      <td><code>formaction</code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("button") }}
      </td>
      <td>
        Indicates the action of the element, overriding the action defined in
        the {{ HTMLElement("form") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/formenctype"
            >formenctype</a
          ></code
        >
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        If the button/input is a submit button (<code>type="submit"</code>),
        this attribute sets the encoding type to use during form submission. If
        this attribute is specified, it overrides the
        <code>enctype</code> attribute of the button's
        <a href="/ko/docs/Web/HTML/Element/form">form</a> owner.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/formmethod"
            >formmethod</a
          ></code
        >
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        If the button/input is a submit button (<code>type="submit"</code>),
        this attribute sets the submission method to use during form submission
        (<code>GET</code>, <code>POST</code>, etc.). If this attribute is
        specified, it overrides the <code>method</code> attribute of the
        button's <a href="/ko/docs/Web/HTML/Element/form">form</a> owner.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/formnovalidate"
            >formnovalidate</a
          ></code
        >
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        If the button/input is a submit button (<code>type="submit"</code>),
        this boolean attribute specifies that the form is not to be validated
        when it is submitted. If this attribute is specified, it overrides the
        <code>novalidate</code> attribute of the button's
        <a href="/ko/docs/Web/HTML/Element/form">form</a> owner.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/formtarget"
            >formtarget</a
          ></code
        >
      </td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }}
      </td>
      <td>
        If the button/input is a submit button (<code>type="submit"</code>),
        this attribute specifies the browsing context (for example, tab, window,
        or inline frame) in which to display the response that is received after
        submitting the form. If this attribute is specified, it overrides the
        <code>target</code> attribute of the button's
        <a href="/ko/docs/Web/HTML/Element/form">form</a> owner.
      </td>
    </tr>
    <tr>
      <td><code>headers</code></td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>
        IDs of the <code>&#x3C;th></code> elements which applies to this
        element.
      </td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>
        {{ HTMLElement("canvas") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        <p>
          Specifies the height of elements listed here. For all other elements,
          use the CSS {{cssxref("height")}} property.
        </p>
        <div class="note">
          <p>
            <strong>Note:</strong> In some instances, such as
            {{ HTMLElement("div") }}, this is a legacy attribute, in
            which case the CSS {{ Cssxref("height") }} property should
            be used instead.
          </p>
        </div>
      </td>
    </tr>
    <tr></tr>
    <tr>
      <td><code>hidden</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>
        Prevents rendering of given element, while keeping child elements, e.g.
        script elements, active.
      </td>
    </tr>
    <tr>
      <td><code>high</code></td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Indicates the lower bound of the upper range.</td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("base") }}, {{ HTMLElement("link") }}
      </td>
      <td>링크된 리소스의 URL</td>
    </tr>
    <tr>
      <td><code>hreflang</code></td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("link") }}
      </td>
      <td>링크된 리소스의 언어를 나타냄</td>
    </tr>
    <tr>
      <td><code>http-equiv</code></td>
      <td>{{ HTMLElement("meta") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>{{ HTMLElement("command") }}</td>
      <td>Specifies a picture which represents the command.</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>
        일반적으로, 특정한 요소를 스타일하기 위해 CSS와 함꼐 사용됨. 이 속성의
        값은 유일해야함.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/importance"
            >importance</a
          ></code
        >
        {{experimental_inline}}
      </td>
      <td>
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }}
      </td>
      <td>Indicates the relative fetch priority for the resource.</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/Security/Subresource_Integrity"
            >integrity</a
          ></code
        >
      </td>
      <td>
        {{ HTMLElement("link") }}, {{ HTMLElement("script") }}
      </td>
      <td>
        Specifies a
        <a href="/ko/docs/Web/Security/Subresource_Integrity"
          >Subresource Integrity</a
        >
        value that allows browsers to verify what they fetch.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/HTML/Element/img#intrinsicsize"
          ><code>intrinsicsize</code></a
        >
        {{deprecated_inline}}
      </td>
      <td>{{ HTMLElement("img") }}</td>
      <td>
        This attribute tells the browser to ignore the actual intrinsic size of
        the image and pretend it's the size specified in the attribute.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ko/docs/Web/HTML/Global_attributes/inputmode"
          ><code>inputmode</code></a
        >
      </td>
      <td>
        {{ HTMLElement("textarea") }},
        <a href="/ko/docs/Web/HTML/Global_attributes/contenteditable"
          ><code>contenteditable</code></a
        >
      </td>
      <td>
        Provides a hint as to the type of data that might be entered by the user
        while editing the element or its contents. The attribute can be used
        with form controls (such as the value of
        <code>textarea</code> elements), or in elements in an editing host
        (e.g., using <code>contenteditable</code> attribute).
      </td>
    </tr>
    <tr>
      <td><code>ismap</code></td>
      <td>{{ HTMLElement("img") }}</td>
      <td>Indicates that the image is part of a server-side image map.</td>
    </tr>
    <tr>
      <td><code>itemprop</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td></td>
    </tr>
    <tr>
      <td><code>kind</code></td>
      <td>{{ HTMLElement("track") }}</td>
      <td>Specifies the kind of text track.</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>{{ HTMLElement("track") }}</td>
      <td>Specifies a user-readable title of the text track.</td>
    </tr>
    <tr>
      <td><code>lang</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>요소에서 사용된 언어를 정의합니다.</td>
    </tr>
    <tr>
      <td><code>language</code></td>
      <td>{{ HTMLElement("script") }}</td>
      <td>요소에서 사용된 스크립트 언어를 정의합니다.</td>
    </tr>
    <tr>
      <td><code>list</code></td>
      <td>{{ HTMLElement("input") }}</td>
      <td>Identifies a list of pre-defined options to suggest to the user.</td>
    </tr>
    <tr>
      <td><code>loading</code> {{experimental_inline}}</td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("iframe") }}
      </td>
      <td>
        Indicates if the element should be loaded lazily
        (<code>loading="lazy"</code>) or loaded immediately
        (<code>loading="eager"</code>).
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ko/docs/Web/HTML/Attributes/list">list</a></code>
      </td>
      <td>{{ HTMLElement("input") }}</td>
      <td>Identifies a list of pre-defined options to suggest to the user.</td>
    </tr>
    <tr>
      <td><code>loop</code></td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("bgsound") }},
        {{ HTMLElement("marquee") }},
        {{ HTMLElement("video") }}
      </td>
      <td>미디어가 재생을 완료했을때 다시 재생을 시작해야할지를 나타냅니다.</td>
    </tr>
    <tr>
      <td><code>low</code></td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Indicates the upper bound of the lower range.</td>
    </tr>
    <tr>
      <td><code>manifest</code></td>
      <td>{{ HTMLElement("html") }}</td>
      <td>문서의 캐시 매니페스트의 URL을 가리킵니다.</td>
    </tr>
    <tr>
      <td><code>max</code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("meter") }},
        {{ HTMLElement("progress") }}
      </td>
      <td>허용되는 최대 값을 나타냅니다.</td>
    </tr>
    <tr>
      <td><code>maxlength</code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>요소에 허용되는 문자의 최대 길이를 나타냅니다.</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/minlength"
            >minlength</a
          ></code
        >
      </td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>Defines the minimum number of characters allowed in the element.</td>
    </tr>
    <tr>
      <td><code>media</code></td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("link") }}, {{ HTMLElement("source") }},
        {{ HTMLElement("style") }}
      </td>
      <td>
        Specifies a hint of the media for which the linked resource was
        designed.
      </td>
    </tr>
    <tr>
      <td><code>method</code></td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        폼을 제출할때 사용할 HTTP 메소드를 정의함. GET(기본값) 또는 POST 가 될수
        있음.
      </td>
    </tr>
    <tr>
      <td><code>min</code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("meter") }}
      </td>
      <td>허용되는 최소 값을 나타냄.</td>
    </tr>
    <tr>
      <td><code>multiple</code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }}
      </td>
      <td>
        Indicates whether multiple values can be entered in an input of the type
        <code>email</code> or <code>file</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ko/docs/Web/HTML/Attributes/muted">muted</a></code>
      </td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        Indicates whether the audio will be initially silenced on page load.
      </td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>
        {{ HTMLElement("button") }}, {{ HTMLElement("form") }},
        {{ HTMLElement("fieldset") }},
        {{ HTMLElement("iframe") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("output") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }},
        {{ HTMLElement("map") }}, {{ HTMLElement("meta") }},
        {{ HTMLElement("param") }}
      </td>
      <td>
        요소의 이름. For example used by the server to identify the fields in
        form submits.
      </td>
    </tr>
    <tr>
      <td><code>novalidate</code></td>
      <td>{{ HTMLElement("form") }}</td>
      <td>
        This attribute indicates that the form shouldn't be validated when
        submitted.
      </td>
    </tr>
    <tr>
      <td><code>open</code></td>
      <td>{{ HTMLElement("details") }}</td>
      <td>Indicates whether the details will be shown on page load.</td>
    </tr>
    <tr>
      <td><code>optimum</code></td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>Indicates the optimal numeric value.</td>
    </tr>
    <tr>
      <td><code>pattern</code></td>
      <td>{{ HTMLElement("input") }}</td>
      <td>
        Defines a regular expression which the element's value will be validated
        against.
      </td>
    </tr>
    <tr>
      <td><code>ping</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>필드에 무엇이 들어갈수 있는지 사용자에게 힌트를 제공합니다.</td>
    </tr>
    <tr>
      <td><code>poster</code></td>
      <td>{{ HTMLElement("video") }}</td>
      <td>
        A URL indicating a poster frame to show until the user plays or seeks.
      </td>
    </tr>
    <tr>
      <td><code>preload</code></td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        전체,부분,또는 아무런 리소스가 미리 로드되어야하는지를 나타냅니다.
      </td>
    </tr>
    <tr>
      <td><code>radiogroup</code></td>
      <td>{{ HTMLElement("command") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>readonly</code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>요소가 수정될 수 있는지를 나타냅니다.</td>
    </tr>
    <tr>
      <td><code>rel</code></td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("link") }}
      </td>
      <td>
        Specifies the relationship of the target object to the link object.
      </td>
    </tr>
    <tr>
      <td><code>required</code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td>이 요소가 채워져야 하는지를 나타냅니다.</td>
    </tr>
    <tr>
      <td><code>reversed</code></td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>
        Indicates whether the list should be displayed in a descending order
        instead of a ascending.
      </td>
    </tr>
    <tr>
      <td><code>rows</code></td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>textarea의 줄 개수를 정의합니다.</td>
    </tr>
    <tr>
      <td><code>rowspan</code></td>
      <td>
        {{ HTMLElement("td") }}, {{ HTMLElement("th") }}
      </td>
      <td>Defines the number of rows a table cell should span over.</td>
    </tr>
    <tr>
      <td><code>sandbox</code></td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>scope</code></td>
      <td>{{ HTMLElement("th") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>scoped</code></td>
      <td>{{ HTMLElement("style") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>selected</code></td>
      <td>{{ HTMLElement("option") }}</td>
      <td>Defines a value which will be selected on page load.</td>
    </tr>
    <tr>
      <td><code>shape</code></td>
      <td>{{ HTMLElement("a") }}, {{ HTMLElement("area") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("select") }}
      </td>
      <td>
        Defines the width of the element (in pixels). If the element's
        <code>type</code> attribute is <code>text</code> or
        <code>password</code> then it's the number of characters.
      </td>
    </tr>
    <tr>
      <td><code>sizes</code></td>
      <td>{{ HTMLElement("link") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>slot</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>Assigns a slot in a shadow DOM shadow tree to an element.</td>
    </tr>
    <tr>
      <td><code>span</code></td>
      <td>
        {{ HTMLElement("col") }},
        {{ HTMLElement("colgroup") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/spellcheck"
            >spellcheck</a
          ></code
        >
      </td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>Indicates whether spell checking is allowed for the element.</td>
    </tr>
    <tr>
      <td><code>src</code></td>
      <td>
        {{ HTMLElement("audio") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("script") }},
        {{ HTMLElement("source") }},
        {{ HTMLElement("track") }},
        {{ HTMLElement("video") }}
      </td>
      <td>내장 컨텐츠의 URL</td>
    </tr>
    <tr>
      <td><code>srcdoc</code></td>
      <td>{{ HTMLElement("iframe") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>srclang</code></td>
      <td>{{ HTMLElement("track") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>srcset</code></td>
      <td>{{ HTMLElement("img") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>start</code></td>
      <td>{{ HTMLElement("ol") }}</td>
      <td>Defines the first number if other than 1.</td>
    </tr>
    <tr>
      <td><code>step</code></td>
      <td>{{ HTMLElement("input") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>style</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>이전 스타일을 오버라이드할 CSS 스타일을 정의함.</td>
    </tr>
    <tr>
      <td><code>summary</code></td>
      <td>{{ HTMLElement("table") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>tabindex</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>
        Overrides the browser's default tab order and follows the one specified
        instead.
      </td>
    </tr>
    <tr>
      <td><code>target</code></td>
      <td>
        {{ HTMLElement("a") }}, {{ HTMLElement("area") }},
        {{ HTMLElement("base") }}, {{ HTMLElement("form") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>요소 위에 호버링했을떄 표시될 툴팁의 텍스트</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ko/docs/Web/HTML/Attributes/translate"
            >translate</a
          ></code
        >
      </td>
      <td><a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a></td>
      <td>
        Specify whether an element's attribute values and the values of its
        <code
          ><a href="https://dom.spec.whatwg.org/#text" id="ref-for-text①⑦"
            >Text</a
          ></code
        >
        node children are to be translated when the page is localized, or
        whether to leave them unchanged.
      </td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("command") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("script") }},
        {{ HTMLElement("source") }},
        {{ HTMLElement("style") }}, {{ HTMLElement("menu") }}
      </td>
      <td>요소의 타입을 정의함</td>
    </tr>
    <tr>
      <td><code>usemap</code></td>
      <td>
        {{ HTMLElement("img") }}, {{ HTMLElement("input") }},
        {{ HTMLElement("object") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>
        {{ HTMLElement("button") }},
        {{ HTMLElement("option") }},
        {{ HTMLElement("input") }}, {{ HTMLElement("li") }},
        {{ HTMLElement("meter") }},
        {{ HTMLElement("progress") }},
        {{ HTMLElement("param") }}
      </td>
      <td>페이지가 로드된뒤 요소에 표시될 기본값을 지정합니다.</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>
        {{ HTMLElement("canvas") }},
        {{ HTMLElement("embed") }},
        {{ HTMLElement("iframe") }}, {{ HTMLElement("img") }},
        {{ HTMLElement("input") }},
        {{ HTMLElement("object") }},
        {{ HTMLElement("video") }}
      </td>
      <td>
        Note: In some instances, such as {{ HTMLElement("div") }}, this
        is a legacy attribute, in which case the CSS
        {{ Cssxref("width") }} property should be used instead. In other
        cases, such as {{ HTMLElement("canvas") }}, the width must be
        specified with this attribute.
      </td>
    </tr>
    <tr>
      <td><code>wrap</code></td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>Indicates whether the text should be wrapped.</td>
    </tr>
  </tbody>
</table>

## Content versus IDL attributes

In HTML, most attributes have two faces: the **content attribute** and the **IDL attribute**.

The content attribute is the attribute as you set it from the content (the HTML code) and you can set it or get it via {{domxref("element.setAttribute()")}} or {{domxref("element.getAttribute()")}}. The content attribute is always a string even when the expected value should be an integer. For example, to set an {{HTMLElement("input")}} element's `maxlength` to 42 using the content attribute, you have to call `setAttribute("maxlength", "42")` on that element.

The IDL attribute is also known as a JavaScript property. These are the attributes you can read or set using JavaScript properties like <code class="moz-txt-verticalline">element.foo</code>. The IDL attribute is always going to use (but might transform) the underlying content attribute to return a value when you get it and is going to save something in the content attribute when you set it. In other words, the IDL attributes, in essence, reflect the content attributes.

Most of the time, IDL attributes will return their values as they are really used. For example, the default `type` for {{HTMLElement("input")}} elements is "text", so if you set `input.type="foobar"`, the `<input>` element will be of type text (in the appearance and the behavior) but the "type" content attribute's value will be "foobar". However, the `type` IDL attribute will return the string "text".

IDL attributes are not always strings; for example, `input.maxlength` is a number (a signed long). When using IDL attributes, you read or set values of the desired type, so `input.maxlength` is always going to return a number and when you set `input.maxlength` ,it wants a number. If you pass another type, it is automatically converted to a number as specified by the standard JavaScript rules for type conversion.

IDL attributes can [reflect other types](https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes) such as unsigned long, URLs, booleans, etc. Unfortunately, there are no clear rules and the way IDL attributes behave in conjunction with their corresponding content attributes depends on the attribute. Most of the time, it will follow [the rules laid out in the specification](https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes), but sometimes it doesn't. HTML specifications try to make this as developer-friendly as possible, but for various reasons (mostly historical), some attributes behave oddly (`select.size`, for example) and you should read the specifications to understand how exactly they behave.

## 같이 보기

- [HTML 요소](/ko/docs/Web/HTML/Element)
