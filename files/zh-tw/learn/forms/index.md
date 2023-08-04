---
title: 網站表單-與數據合作
slug: Learn/Forms
---

{{LearnSidebar}}

這篇指南提供了一系列的文章，幫你掌握 HTML 表單的基本知識。對於與使用者互動，網站表單是一項十分有力的工具，最常使用於用戶數據蒐集，或控制使用者介面。但由於一些歷史與技術上的因素，並沒有顯著的方法發揮表單的潛力。在下面的指引中，我們將介紹網站表單所有基本面向，包括標記他們的 HTML 結構、設定控制器樣式、驗證數據及將數距提送至伺服器

## 參考文章列表

1. [我的第一個 HTML 表單](/zh-TW/docs/HTML/Forms/My_first_HTML_form)
2. [如何構建 HTML 表單](/zh-TW/docs/HTML/Forms/How_to_structure_an_HTML_form)
3. [本機表單控件](/zh-TW/docs/HTML/Forms/The_native_form_widgets)
4. CSS 和 HTML 表單

   1. [造型 HTML 表單](/zh-TW/docs/HTML/Forms/Styling_HTML_forms)
   2. [HTML 表單高級造型](/zh-TW/docs/Web/Guide/HTML/Forms/Advanced_styling_for_HTML_forms)
   3. [表單控件屬性兼容表](/zh-TW/docs/Property_compatibility_table_for_form_widgets)

5. [發送和檢索表單數據](/zh-TW/docs/HTML/Forms/Sending_and_retrieving_form_data)
6. [數據表單驗證](/zh-TW/docs/HTML/Forms/Data_form_validation)
7. [如何創建自定義表單控件](/zh-TW/docs/HTML/Forms/How_to_build_custom_form_widgets)
8. [通過 JavaScript 發送形式](/zh-TW/docs/HTML/Forms/Sending_forms_through_JavaScript)

   1. [使用 FORMDATA 對象](/zh-TW/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)

9. [在傳統的瀏覽器的 HTML 表單](/zh-TW/docs/HTML/Forms/HTML_forms_in_legacy_browsers)

## HTML 文件

### HTML 元素

| HTML 元素                   | 元素的 DOM interface               | 說明                                                                                                                                                  |
| --------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{HTMLElement("button")}}   | {{domxref("HTMLButtonElement")}}   | 該`按鈕`元素表示一個可點擊的按鈕。                                                                                                                    |
| {{HTMLElement("datalist")}} | {{domxref("HTMLDataListElement")}} | 該數據列表元素包含了一組 {{ HTMLElement("option") }} 表示對其他表單元素的值可能的選擇要素。                                                           |
| {{HTMLElement("fieldset")}} | {{domxref("HTMLFieldSetElement")}} | 該字段集是用來在表單中的組數表單元素。                                                                                                                |
| {{HTMLElement("form")}}     | {{domxref("HTMLFormElement")}}     | 的`形式`元素表示的文件的一部分，它包含使用戶能夠提交信息給 web 服務器的交互元件。                                                                     |
| {{HTMLElement("input")}}    | {{domxref("HTMLInputElement")}}    | 該 `輸入`元素用於創建表格的交互式控制。                                                                                                               |
| {{HTMLElement("label")}}    | {{domxref("HTMLLabelElement")}}    | 該`標籤`元素代表一個項目在用戶界面的標題                                                                                                              |
| {{HTMLElement("legend")}}   | {{domxref("HTMLLegendElement")}}   | 在`傳說`元素代表一個標題為其父 {{ HTMLElement("fieldset") }} 的內容。                                                                                 |
| {{HTMLElement("meter")}}    | {{domxref("HTMLMeterElement")}}    | 所述`米`元素表示一個已知的範圍內的任一標量值或分數值。                                                                                                |
| {{HTMLElement("optgroup")}} | {{domxref("HTMLOptGroupElement")}} | 在 `OPTGROUP` 元素創建一個 {{ HTMLElement("select") }} 元素中的一組選項。                                                                             |
| {{HTMLElement("option")}}   | {{domxref("HTMLOptionElement")}}   | 在 HTML `選項`元素用於創建表示 {{ HTMLElement("select") }} ，一個 {{ HTMLElement("optgroup") }} 或 {{ HTMLElement("datalist") }} 元素中的項目的控制。 |
| {{HTMLElement("output")}}   | {{domxref("HTMLOutputElement")}}   | 的`輸出`元素表示一個計算的結果。                                                                                                                      |
| {{HTMLElement("progress")}} | {{domxref("HTMLProgressElement")}} | 的`進展`元素用於查看任務的完成進度。                                                                                                                  |
| {{HTMLElement("select")}}   | {{domxref("HTMLSelectElement")}}   | 在`選擇`元素代表呈現一個選項菜單的控制。                                                                                                              |
| {{HTMLElement("textarea")}} | {{domxref("HTMLTextAreaElement")}} | 該 `textarea` 的元素代表多行純文本編輯控制。                                                                                                          |

> **備註：** 所有的表單元素，因為所有的 HTML 元素，支持 {{domxref("HTMLElement")}} DOM 接口。

### HTML 屬性

<table class="standard-table">
  <thead>
    <tr>
      <th>屬性</th>
      <th>能使用該屬性的 HTML 元素</th>
      <th>說明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>accept</td>
      <td>
        {{ HTMLElement("form") }}, {{ HTMLElement("input") }}
      </td>
      <td>的類型列表服務器接受，通常是文件類型。</td>
    </tr>
    <tr>
      <td style="white-space: nowrap">accept-charset</td>
      <td>{{ HTMLElement("form") }}</td>
      <td>支持的字符集列表。</td>
    </tr>
    <tr>
      <td>action</td>
      <td>{{ HTMLElement("form") }}</td>
      <td>一個程序處理通過表單提交的信息的URI。</td>
    </tr>
    <tr>
      <td>autocomplete</td>
      <td>
        {{ HTMLElement("form") }}, {{ HTMLElement("input") }}
      </td>
      <td>指示是否在這個表單控件可以在默認情況下有其值由瀏覽器自動完成。</td>
    </tr>
    <tr>
      <td>autofocus</td>
      <td>
        {{ HTMLElement("button") }}、
        {{ HTMLElement("input") }}、
        {{ HTMLElement("select") }}、
        {{ HTMLElement("textarea") }}
      </td>
      <td>該元素應該在頁面加載後自動聚焦。</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>{{ HTMLElement("input") }}</td>
      <td>指示是否應將元素在頁面加載檢查。</td>
    </tr>
    <tr>
      <td>cols</td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>限定在一個textarea的列數。</td>
    </tr>
    <tr>
      <td>data</td>
      <td>{{ HTMLElement("object") }}</td>
      <td>指定的資源的URL。</td>
    </tr>
    <tr>
      <td>dirname</td>
      <td>
        {{ HTMLElement("input") }},
        {{ HTMLElement("textarea") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("fieldset") }}、{{ HTMLElement("input") }}、{{ HTMLElement("optgroup") }}、{{ HTMLElement("option") }}、{{ HTMLElement("select") }}、{{ HTMLElement("textarea")}}
      </td>
      <td>表明用戶是否可以與元件進行交互。</td>
    </tr>
    <tr>
      <td>enctype</td>
      <td>{{ HTMLElement("form") }}</td>
      <td>定義當表單數據的內容類型<code>的方法</code>是POST。</td>
    </tr>
    <tr>
      <td>for</td>
      <td>
        {{ HTMLElement("label") }}、{{ HTMLElement("output") }}
      </td>
      <td>描述了屬於這一種元素。</td>
    </tr>
    <tr>
      <td>form</td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("fieldset") }}、{{ HTMLElement("input") }}、{{ HTMLElement("label") }}、{{ HTMLElement("meter") }}、{{ HTMLElement("object") }}、{{ HTMLElement("output") }}、{{ HTMLElement("progress") }}、{{ HTMLElement("select") }}、{{ HTMLElement("textarea")}}
      </td>
      <td>表明是元件的所有者的形式。</td>
    </tr>
    <tr>
      <td>high</td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>表示下界的上限範圍。</td>
    </tr>
    <tr>
      <td>list</td>
      <td>{{ HTMLElement("input") }}</td>
      <td>標識的預定義的選項的列表，以向用戶建議。</td>
    </tr>
    <tr>
      <td>low</td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>指示上限較低的範圍內。</td>
    </tr>
    <tr>
      <td>max</td>
      <td>
        {{ HTMLElement("input") }}、{{ HTMLElement("meter") }}、{{ HTMLElement("progress") }}
      </td>
      <td>指示所允許的最大值。</td>
    </tr>
    <tr>
      <td>maxlength</td>
      <td>
        {{ HTMLElement("input") }} 、
        {{ HTMLElement("textarea") }}
      </td>
      <td>定義了在元件允許的字符的最大數目。</td>
    </tr>
    <tr>
      <td>method</td>
      <td>{{HTMLElement("form")}}</td>
      <td>定義提交表單時使用的HTTP方法。可GET（默認）或POST。</td>
    </tr>
    <tr>
      <td>min</td>
      <td>
        {{ HTMLElement("input") }} 、
        {{ HTMLElement("meter") }}
      </td>
      <td>指示所允許的最小值。</td>
    </tr>
    <tr>
      <td>multiple</td>
      <td>
        {{ HTMLElement("input") }}、
        {{ HTMLElement("select") }}
      </td>
      <td>
        表示是否多個值所用的類型的輸入可以輸入<code>電子郵件</code>或<code>文件</code>。
      </td>
    </tr>
    <tr>
      <td>name</td>
      <td>
        {{ HTMLElement("button") }}、{{ HTMLElement("form") }}、{{ HTMLElement("fieldset") }}、{{ HTMLElement("input") }}、{{ HTMLElement("output") }}、{{ HTMLElement("select") }}、{{ HTMLElement("textarea") }}
      </td>
      <td>該元素的名稱。例如所使用的服務器，以確定在表單提交的字段。</td>
    </tr>
    <tr>
      <td>novalidate</td>
      <td>{{ HTMLElement("form") }}</td>
      <td>此屬性表明，當提交表單應該無法通過驗證。</td>
    </tr>
    <tr>
      <td>optimum</td>
      <td>{{ HTMLElement("meter") }}</td>
      <td>表示最佳數值。</td>
    </tr>
    <tr>
      <td>pattern</td>
      <td>{{ HTMLElement("input") }}</td>
      <td>定義一個正則表達式元素的值將針對驗證。</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>
        {{ HTMLElement("input") }}、
        {{ HTMLElement("textarea") }}
      </td>
      <td>提供一個提示什麼可以在字段中輸入的用戶。</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>
        {{ HTMLElement("input") }} 、
        {{ HTMLElement("textarea") }}
      </td>
      <td>指示該元素是否可以編輯或沒有。</td>
    </tr>
    <tr>
      <td>required</td>
      <td>
        {{ HTMLElement("input") }} 、
        {{ HTMLElement("select") }}、
        {{ HTMLElement("textarea") }}
      </td>
      <td>指示此元素是否必填。</td>
    </tr>
    <tr>
      <td>rows</td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>限定在一個textarea的行數。</td>
    </tr>
    <tr>
      <td>selected</td>
      <td>{{ HTMLElement("option") }}</td>
      <td>定義了將在頁面加載所選的值。</td>
    </tr>
    <tr>
      <td>size</td>
      <td>
        {{ HTMLElement("input") }}、
        {{ HTMLElement("select") }}
      </td>
      <td>
        限定了元件的寬度（以像素為單位）。如果該元素的<code>類型</code>的屬性是<code>文本</code>或<code>密碼</code>那麼它的字符數。
      </td>
    </tr>
    <tr>
      <td>src</td>
      <td>{{ HTMLElement("img") }}</td>
      <td>可嵌入內容的URL。</td>
    </tr>
    <tr>
      <td>step</td>
      <td>{{ HTMLElement("input") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>target</td>
      <td>{{ HTMLElement("form") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>type</td>
      <td>
        {{ HTMLElement("button") }} 、
        {{ HTMLElement("input") }}
      </td>
      <td>限定了元件的類型。</td>
    </tr>
    <tr>
      <td>usemap</td>
      <td>{{ HTMLElement("img") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>value</td>
      <td>
        {{ HTMLElement("button") }}、
        {{ HTMLElement("option") }}、
        {{ HTMLElement("input") }}、
        {{ HTMLElement("meter") }}、
        {{ HTMLElement("progress") }}
      </td>
      <td>定義了將被顯示在頁面上的負載元件的默認值。</td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>{{ HTMLElement("textarea") }}</td>
      <td>指示文本是否應被包裹或沒有。</td>
    </tr>
  </tbody>
</table>

### 規範性引用文件

- [W3C HTML 5.1 規範（表格）](http://www.w3.org/html/wg/drafts/html/master/forms.html#forms)
- [WHATWG HTML 生活水平（表格）](http://www.whatwg.org/specs/web-apps/current-work/multipage/forms.html#forms)
