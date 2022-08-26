---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
tags:
  - Add-ons
  - Themes
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/theme
---
{{AddonSidebar}}

> **Note:** Note that you can't yet submit static WebExtension-based themes to addons.mozilla.org. The work to support this is tracked in <https://github.com/mozilla/addons/issues/501>. If you want to share a theme with other users, you'll need to make it either a [lightweight theme](/ja/docs/Mozilla/Add-ons/Themes/Lightweight_themes) or a [dynamic theme](/ja/Add-ons/WebExtensions/API/theme).

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"theme": {
  "images": {
    "headerURL": "images/sun.jpg"
  },
  "colors": {
    "accentcolor": "#CF723F",
    "textcolor": "#000"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

theme キーを使って Firefox に適用する静的なテーマを定義します。

> **Note:** If your manifest.json file includes the theme key, the extension is assumed to be a theme and any other WebExtension keys are ignored. If you want to include a theme with an extension, please see the {{WebExtAPIRef("theme")}} API.

## 画像フォーマット

下記の画像フォーマットはすべての画像プロパティでサポートされています:

- JPEG
- PNG
- APNG
- SVG (アニメ SVG は Firefox 59 からサポートされています)
- GIF (アニメ GIF はサポートされません)

## 構文

theme キーは次のプロパティを取るオブジェクトです:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名前</th>
      <th scope="col">型</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>images</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Firefox 60 以降ではオプション。Firefox 60より前では必須。</p>
        <p>
          A JSON object whose properties represent the images to display in
          various parts of the browser. See
          <code
            ><a href="/ja/Add-ons/WebExtensions/manifest.json/theme#images"
              >images</a
            ></code
          >
          for details on the properties that this object can contain.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>必須。</p>
        <p>
          A JSON object whose properties represent the colors of various parts
          of the browser. See
          <code
            ><a href="/ja/Add-ons/WebExtensions/manifest.json/theme#colors"
              >colors</a
            ></code
          >
          for details on the properties that this object can contain.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Object</code></td>
      <td>
        <p>オプション</p>
        <p>
          This object has two properties that affect how the
          <code>"additional_backgrounds"</code> images are displayed. See
          <code
            ><a href="/ja/Add-ons/WebExtensions/manifest.json/theme#properties"
              >properties</a
            ></code
          >
          for details on the properties that this object can contain.
        </p>
        <ul>
          <li>
            <code>"additional_backgrounds_alignment":</code> an array of
            enumeration values defining the alignment of the corresponding
            <code>"additional_backgrounds":</code> array item.<br />The
            alignment options include: <code>"bottom"</code>,
            <code>"center"</code>, <code>"left"</code>, <code>"right"</code>,
            <code>"top"</code>, <code>"center bottom"</code>,
            <code>"center center"</code>, <code>"center top"</code>,
            <code>"left bottom"</code>, <code>"left center"</code>,
            <code>"left top"</code>, <code>"right bottom"</code>,
            <code>"right center"</code>, and <code>"right top"</code>. If not
            specified, defaults to <code>"left top"</code>.<br />Optional
          </li>
          <li>
            <code>"additional_backgrounds_tiling":</code> an array of
            enumeration values defining how the corresponding
            <code>"additional_backgrounds":</code> array item repeats, with
            support for <code>"no-repeat"</code>, <code>"repeat"</code>,
            <code>"repeat-x"</code>, and <code>"repeat-y"</code>. If not
            specified, defaults to <code>"no-repeat"</code>.<br />Optional
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

### images

All URLs are relative to the manifest.json file and cannot reference an external URL.

Images should be 200 pixels high to ensure they always fill the header space vertically.

| 名前                     | 型                  | 説明                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headerURL`              | `String`            | Fully optional from Firefox 60 onwards. One of theme_frame or headerURL had to be specified before Firefox 60. Note also that in Firefox 60 onwards, any {{cssxref("text-shadow")}} applied to the header text is removed if no `headerURL` is specified (see {{bug(1404688)}}).The URL of a foreground image to be added to the header area and anchored to the upper right corner of the header area.   |
| `theme_frame`            | `String`            | Fully optional from Firefox 60 onwards. One of theme_frame or headerURL had to be specified before Firefox 60.Alias for `headerURL`, provided for Chrome compatibility.                                                                                                                                                                                                                                                 |
| `additional_backgrounds` | `Array `of `String` | オプション An array of URLs for additional background images to be added to the header area and displayed behind the `"headerURL":` image. These images layer the first image in the array on top, the last image in the array at the bottom.既定では all images are anchored to the upper right corner of the header area, but their alignment and repeat behavior can be controlled by properties of `"properties":`. |

### colors

These properties define the colors used for different parts of the browser. They are all optional except `"accentcolor"` and `"textcolor"` where either those properties or their chrome counterparts have to be specified.

All these properties can be specified as either a string containing any valid [CSS color string](/ja/docs/Web/CSS/color_value) (including hexadecimal), or an RGB array, such as `"tab_text": [ 107 , 99 , 23 ]`. But note that [in Chrome, colors may only be specified as an RGB array](/ja/Add-ons/WebExtensions/manifest.json/theme#Chrome_compatibility).

See [the example screenshot below](#example-screenshot) to understand the parts of the browser UI that are affected by these properties.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名前</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>accentcolor</code></td>
      <td>
        <p>
          The color of the header area background, displayed in the part of the
          header not covered or visible through the images specified in
          <code>"headerURL"</code> and <code>"additional_backgrounds"</code>.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "red",
     "textcolor": "white"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-accentcolor.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>The color of the background of the pressed toolbar buttons.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "button_background_active": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-button_background_active.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>The color of the background of the toolbar buttons on hover.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "button_background_hover": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-button_background_hover.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>The color of toolbar icons.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "icons": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-icons.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          The color of toolbar icons in attention state such as the starred
          bookmark icon or finished download icon.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "icons_attention": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-icons_attention.png"
              style="height: 324px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          The background color of popups (such as the url bar dropdown and the
          arrow panels).
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "popup": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-popup.png"
              style="height: 324px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>The border color of popups.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "popup": "black",
     "popup_text": "white",
     "popup_border": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-popup_border.png"
              style="height: 324px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          The background color of items highlighted using the keyboard inside
          popups (such as the selected url bar dropdown item).
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "popup_highlight": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-popup_highlight.png"
              style="height: 490px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>
          The text color of items highlighted using the keyboard inside popups.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "popup_highlight": "black",
     "popup_highlight_text": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-popup_highlight_text.png"
              style="height: 490px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>The text color of popups.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "popup": "black",
     "popup_text": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="popup_text.png"
              style="height: 490px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>The color of the selected tab line.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "tab_line": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-tab_line.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>The color of the tab loading indicator and the tab loading burst.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "tab_loading": "red"
  }
}</pre
          >
          <img
            alt=""
            src="theme-tab_loading.gif"
            style="height: 186px; width: 618px"
          />
        </div>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>The background color of the selected tab.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "images": {
  "headerURL": "weta.png"
},
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "tab_selected": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-tab_selected.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          From Firefox 59, it represents the text color for the selected tab.
        </p>
        <p>
          From Firefox 55 to 58, it is the same as <code>"textcolor"</code>,
          provided for <a href="#Chrome_compatibility">Chrome compatibility</a>.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "images": {
  "headerURL": "weta.png"
},
  "colors": {
     "accentcolor": "black",
     "textcolor": "white",
     "tab_selected": "white",
     "tab_text": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-tab_text.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>textcolor</code></td>
      <td>
        <p>The color of the text displayed in the header area.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "toolbar": "white",
    "textcolor": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-textcolor.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          The background color for the navigation bar, the bookmarks bar, and
          the selected tab.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "toolbar": "red",
    "textcolor": "white"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          The color of the line separating the bottom of the toolbar from the
          region below.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "textcolor": "white",
    "toolbar_bottom_separator": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_bottom_separator.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          The background color for fields in the toolbar, such as the URL bar.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "textcolor": "white",
    "toolbar_field": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_field.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>The border color for fields in the toolbar.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "toolbar": "black",
    "textcolor": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_border": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_field_border.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>The focused border color for fields in the toolbar.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "toolbar": "black",
    "textcolor": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_border_focus": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_field_border_focus.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          The focused background color for fields in the toolbar, such as the
          URL bar.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "toolbar": "black",
    "textcolor": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_focus": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_field_focus.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>The color of text in fields in the toolbar, such as the URL bar.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "toolbar": "black",
    "textcolor": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_field_text.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          The color of text in focused fields in the toolbar, such as the URL
          bar.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "toolbar": "black",
    "textcolor": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_text_focus": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_field_text_focus.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code></td>
      <td>
        <p>
          The color of separators inside the URL bar. In Firefox 58 this was
          implemented as <code>toolbar_vertical_separator</code>.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "toolbar": "black",
    "textcolor": "white",
    "toolbar_field_separator": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_field_separator.png"
              style="height: 302px; width: 738px"
            />
          </p>
          <p>
            In this screenshot, <code>"toolbar_vertical_separator"</code> is the
            white vertical line in the URL bar dividing the Reader Mode icon
            from the other icons.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>The color of toolbar text.</p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "textcolor": "white",
    "toolbar": "black",
    "toolbar_text": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_text.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          The color of the line separating the top of the toolbar from the
          region above.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "textcolor": "white",
    "toolbar": "black",
    "toolbar_top_separator": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_top_separator.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          The color of the separator next to the application menu icon. In
          Firefox 58, it corresponds to the color of separators inside the URL
          bar.
        </p>
        <div>
          <span>See example</span>
          <pre class="brush: json">
"theme": {
  "colors": {
    "accentcolor": "black",
    "textcolor": "white",
    "toolbar": "black",
    "toolbar_vertical_separator": "red"
  }
}</pre
          >
          <p>
            <img
              alt=""
              src="theme-toolbar_vertical_separator.png"
              style="height: 302px; width: 738px"
            />
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

#### Aliases

Additionally, this key accepts various properties that are aliases for one of the properties above. These are provided for compatibility with Chrome. If an alias is given, and the non-alias version is also given, then the value will be taken from the non-alias version.

| 名前                  | Alias for      |
| --------------------- | -------------- |
| `bookmark_text`       | `toolbar_text` |
| `frame`               | `accentcolor`  |
| `frame_inactive`      | `accentcolor`  |
| `tab_background_text` | `textcolor`    |

### properties

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名前</th>
      <th scope="col">型</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>additional_backgrounds_alignment</code></td>
      <td>
        <p><code>Array</code> of <code>String</code></p>
      </td>
      <td>
        <p>Optional.</p>
        <p>
          An array of enumeration values defining the alignment of the
          corresponding <code>"additional_backgrounds":</code> array item.<br />The
          alignment options include:
        </p>
        <ul>
          <li><code>"bottom"</code></li>
          <li><code>"center"</code></li>
          <li><code>"left"</code></li>
          <li><code>"right"</code></li>
          <li><code>"top"</code></li>
          <li><code>"center bottom"</code></li>
          <li><code>"center center"</code></li>
          <li><code>"center top"</code></li>
          <li><code>"left bottom"</code></li>
          <li><code>"left center"</code></li>
          <li><code>"left top"</code></li>
          <li><code>"right bottom"</code></li>
          <li><code>"right center"</code></li>
          <li><code>"right top"</code>.</li>
        </ul>
        <p>If not specified, defaults to <code>"left top"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_tiling</code></td>
      <td>
        <p><code>Array</code> of <code>String</code></p>
      </td>
      <td>
        <p>Optional.</p>
        <p>
          An array of enumeration values defining how the corresponding
          <code>"additional_backgrounds":</code> array item repeats. Options
          include:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>If not specified, defaults to <code>"no-repeat"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## 例

A basic theme must define an image to add to the header, the accent color to use in the header, and the color of text used in the header:

```json
 "theme": {
   "images": {
     "headerURL": "images/sun.jpg"
   },
   "colors": {
     "accentcolor": "#CF723F",
     "textcolor": "#000"
   }
 }
```

Multiple images can be used to fill the header, using a blank/transparent header image to gain control over the placement of each visible image:

```json
 "theme": {
   "images": {
     "headerURL": "images/blank.png",
     "additional_backgrounds": [ "images/left.png" , "images/middle.png", "images/right.png"]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "left top" , "top", "right top"]
   },
   "colors": {
     "accentcolor": "blue",
     "textcolor": "#ffffff"
   }
 }
```

You can also fill the header with a repeating image, or images, in this case a single image anchored in the middle top of the header and repeated across the rest of the header:

```json
 "theme": {
   "images": {
     "headerURL": "images/blank.png",
     "additional_backgrounds": [ "images/logo.png"]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "top" ],
     "additional_backgrounds_tiling": [ "repeat"  ]
   },
   "colors": {
     "accentcolor": "green",
     "textcolor": "#000"
   }
 }
```

The following example uses most of the different values for `theme.colors`:

```json
  "theme": {
    "images": {
      "headerURL": "weta.png"
    },

    "colors": {
       "accentcolor": "darkgreen",
       "textcolor": "white",
       "toolbar": "blue",
       "toolbar_text": "cyan",
       "toolbar_field": "orange",
       "toolbar_field_border": "white",
       "toolbar_field_text": "green",
       "toolbar_top_separator": "red",
       "toolbar_bottom_separator": "white",
       "toolbar_vertical_separator": "white"
    }
  }
```

It will give you a browser that looks something like this:

![](theme.png)

In this screenshot, `"toolbar_vertical_separator"` is the white vertical line in the URL bar dividing the Reader Mode icon from the other icons.

## ブラウザーの互換性

{{Compat("webextensions.manifest.theme", 10)}}

### Chrome compatibility

| Firefox property                              | Chrome property                                                                                                                  |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `images/headerURL`                            | `images/theme_frame`In Chrome, the image is anchored to the top left of the header and tiled if it doesn’t fill the header area. |
| `images/additional_backgrounds`               | Not supported                                                                                                                    |
| `colors/accentcolor`                          | `colors/frame`                                                                                                                   |
| `colors/textcolor`                            | Incorrectly implemented as `colors/tab_text` from Firefox 55 to 58, fixed as `colors/tab_background_text` from Firefox 59 onward |
| `colors/toolbar_text`                         | `colors/bookmark_text`                                                                                                           |
| `properties/additional_backgrounds_alignment` | Not supported                                                                                                                    |
| `properties/additional_backgrounds_tiling`    | Not supported                                                                                                                    |

In Chrome, all colors must be specified as an array of RGB values, like this:

```json
"theme": {
  "colors": {
     "frame": [255, 0, 0],
     "tab_background_text": [0, 255, 0],
     "bookmark_text": [0, 0, 255]
  }
}
```

From Firefox 59 onward, both the array form and the CSS color form are accepted for all properties. Before that, `colors/frame` and `colors/tab_text` required the array form, while other properties required the CSS color form.
