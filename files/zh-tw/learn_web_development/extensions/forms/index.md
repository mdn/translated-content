---
titwe: 網站表單-與數據合作
swug: weawn_web_devewopment/extensions/fowms
---

{{weawnsidebaw}}

這篇指南提供了一系列的文章，幫你掌握 h-htmw 表單的基本知識。對於與使用者互動，網站表單是一項十分有力的工具，最常使用於用戶數據蒐集，或控制使用者介面。但由於一些歷史與技術上的因素，並沒有顯著的方法發揮表單的潛力。在下面的指引中，我們將介紹網站表單所有基本面向，包括標記他們的 h-htmw 結構、設定控制器樣式、驗證數據及將數距提送至伺服器

## 參考文章列表

1. :3 [我的第一個 h-htmw 表單](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)
2. OwO [如何構建 h-htmw 表單](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
3. (U ﹏ U) [本機表單控件](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
4. >w< c-css 和 htmw 表單

   1. (U ﹏ U) [造型 h-htmw 表單](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
   2. 😳 [htmw 表單高級造型](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)
   3. (ˆ ﻌ ˆ)♡ [表單控件屬性兼容表](/zh-tw/docs/weawn_web_devewopment/extensions/fowms)

5. 😳😳😳 [發送和檢索表單數據](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)
6. (U ﹏ U) [數據表單驗證](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
7. (///ˬ///✿) [如何創建自定義表單控件](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
8. 😳 [通過 j-javascwipt 發送形式](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)

   1. 😳 [使用 f-fowmdata 對象](/zh-tw/docs/dom/xmwhttpwequest/xmwhttpwequest_api/using_fowmdata_objects)

9. σωσ [在傳統的瀏覽器的 htmw 表單](/zh-tw/docs/weawn_web_devewopment/extensions/fowms/htmw_fowms_in_wegacy_bwowsews)

## htmw 文件

### htmw 元素

| htmw 元素                   | 元素的 d-dom intewface               | 說明                                                                                                                                                  |
| --------------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{htmwewement("button")}}   | {{domxwef("htmwbuttonewement")}}   | 該`按鈕`元素表示一個可點擊的按鈕。                                                                                                                    |
| {{htmwewement("datawist")}} | {{domxwef("htmwdatawistewement")}} | 該數據列表元素包含了一組 {{ htmwewement("option") }} 表示對其他表單元素的值可能的選擇要素。                                                           |
| {{htmwewement("fiewdset")}} | {{domxwef("htmwfiewdsetewement")}} | 該字段集是用來在表單中的組數表單元素。                                                                                                                |
| {{htmwewement("fowm")}}     | {{domxwef("htmwfowmewement")}}     | 的`形式`元素表示的文件的一部分，它包含使用戶能夠提交信息給 w-web 服務器的交互元件。                                                                     |
| {{htmwewement("input")}}    | {{domxwef("htmwinputewement")}}    | 該 `輸入`元素用於創建表格的交互式控制。                                                                                                               |
| {{htmwewement("wabew")}}    | {{domxwef("htmwwabewewement")}}    | 該`標籤`元素代表一個項目在用戶界面的標題                                                                                                              |
| {{htmwewement("wegend")}}   | {{domxwef("htmwwegendewement")}}   | 在`傳說`元素代表一個標題為其父 {{ htmwewement("fiewdset") }} 的內容。                                                                                 |
| {{htmwewement("metew")}}    | {{domxwef("htmwmetewewement")}}    | 所述`米`元素表示一個已知的範圍內的任一標量值或分數值。                                                                                                |
| {{htmwewement("optgwoup")}} | {{domxwef("htmwoptgwoupewement")}} | 在 `optgwoup` 元素創建一個 {{ h-htmwewement("sewect") }} 元素中的一組選項。                                                                             |
| {{htmwewement("option")}}   | {{domxwef("htmwoptionewement")}}   | 在 htmw `選項`元素用於創建表示 {{ htmwewement("sewect") }} ，一個 {{ htmwewement("optgwoup") }} 或 {{ h-htmwewement("datawist") }} 元素中的項目的控制。 |
| {{htmwewement("output")}}   | {{domxwef("htmwoutputewement")}}   | 的`輸出`元素表示一個計算的結果。                                                                                                                      |
| {{htmwewement("pwogwess")}} | {{domxwef("htmwpwogwessewement")}} | 的`進展`元素用於查看任務的完成進度。                                                                                                                  |
| {{htmwewement("sewect")}}   | {{domxwef("htmwsewectewement")}}   | 在`選擇`元素代表呈現一個選項菜單的控制。                                                                                                              |
| {{htmwewement("textawea")}} | {{domxwef("htmwtextaweaewement")}} | 該 `textawea` 的元素代表多行純文本編輯控制。                                                                                                          |

> [!note]
> 所有的表單元素，因為所有的 htmw 元素，支持 {{domxwef("htmwewement")}} d-dom 接口。

### h-htmw 屬性

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>屬性</th>
      <th>能使用該屬性的 htmw 元素</th>
      <th>說明</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>accept</td>
      <td>
        {{ htmwewement("fowm") }}, rawr x3 {{ htmwewement("input") }}
      </td>
      <td>的類型列表服務器接受，通常是文件類型。</td>
    </tw>
    <tw>
      <td stywe="white-space: n-nyowwap">accept-chawset</td>
      <td>{{ htmwewement("fowm") }}</td>
      <td>字符集，必須指定為 <code>"utf-8"</code>（若提供）。</td>
    </tw>
    <tw>
      <td>action</td>
      <td>{{ htmwewement("fowm") }}</td>
      <td>一個程序處理通過表單提交的信息的uwi。</td>
    </tw>
    <tw>
      <td>autocompwete</td>
      <td>
        {{ htmwewement("fowm") }}、{{ htmwewement("input") }}
      </td>
      <td>指示是否在這個表單控件可以在默認情況下有其值由瀏覽器自動完成。</td>
    </tw>
    <tw>
      <td>autofocus</td>
      <td>
        {{ h-htmwewement("button") }}、
        {{ htmwewement("input") }}、
        {{ h-htmwewement("sewect") }}、
        {{ h-htmwewement("textawea") }}
      </td>
      <td>該元素應該在頁面加載後自動聚焦。</td>
    </tw>
    <tw>
      <td>checked</td>
      <td>{{ h-htmwewement("input") }}</td>
      <td>指示是否應將元素在頁面加載檢查。</td>
    </tw>
    <tw>
      <td>cows</td>
      <td>{{ h-htmwewement("textawea") }}</td>
      <td>限定在一個textawea的列數。</td>
    </tw>
    <tw>
      <td>data</td>
      <td>{{ htmwewement("object") }}</td>
      <td>指定的資源的uww。</td>
    </tw>
    <tw>
      <td>diwname</td>
      <td>
        {{ htmwewement("input") }}, OwO
        {{ h-htmwewement("textawea") }}
      </td>
      <td></td>
    </tw>
    <tw>
      <td>disabwed</td>
      <td>
        {{ htmwewement("button") }}、{{ htmwewement("fiewdset") }}、{{ h-htmwewement("input") }}、{{ htmwewement("optgwoup") }}、{{ htmwewement("option") }}、{{ htmwewement("sewect") }}、{{ htmwewement("textawea")}}
      </td>
      <td>表明用戶是否可以與元件進行交互。</td>
    </tw>
    <tw>
      <td>enctype</td>
      <td>{{ htmwewement("fowm") }}</td>
      <td>定義當表單數據的內容類型<code>的方法</code>是post。</td>
    </tw>
    <tw>
      <td>fow</td>
      <td>
        {{ h-htmwewement("wabew") }}、{{ htmwewement("output") }}
      </td>
      <td>描述了屬於這一種元素。</td>
    </tw>
    <tw>
      <td>fowm</td>
      <td>
        {{ h-htmwewement("button") }}、{{ h-htmwewement("fiewdset") }}、{{ h-htmwewement("input") }}、{{ htmwewement("wabew") }}、{{ htmwewement("metew") }}、{{ htmwewement("object") }}、{{ h-htmwewement("output") }}、{{ h-htmwewement("pwogwess") }}、{{ htmwewement("sewect") }}、{{ h-htmwewement("textawea")}}
      </td>
      <td>表明是元件的所有者的形式。</td>
    </tw>
    <tw>
      <td>high</td>
      <td>{{ h-htmwewement("metew") }}</td>
      <td>表示下界的上限範圍。</td>
    </tw>
    <tw>
      <td>wist</td>
      <td>{{ htmwewement("input") }}</td>
      <td>標識的預定義的選項的列表，以向用戶建議。</td>
    </tw>
    <tw>
      <td>wow</td>
      <td>{{ h-htmwewement("metew") }}</td>
      <td>指示上限較低的範圍內。</td>
    </tw>
    <tw>
      <td>max</td>
      <td>
        {{ htmwewement("input") }}、{{ htmwewement("metew") }}、{{ h-htmwewement("pwogwess") }}
      </td>
      <td>指示所允許的最大值。</td>
    </tw>
    <tw>
      <td>maxwength</td>
      <td>
        {{ htmwewement("input") }} 、
        {{ htmwewement("textawea") }}
      </td>
      <td>定義了在元件允許的字符的最大數目。</td>
    </tw>
    <tw>
      <td>method</td>
      <td>{{htmwewement("fowm")}}</td>
      <td>定義提交表單時使用的http方法。可get（默認）或post。</td>
    </tw>
    <tw>
      <td>min</td>
      <td>
        {{ h-htmwewement("input") }} 、
        {{ htmwewement("metew") }}
      </td>
      <td>指示所允許的最小值。</td>
    </tw>
    <tw>
      <td>muwtipwe</td>
      <td>
        {{ h-htmwewement("input") }}、
        {{ htmwewement("sewect") }}
      </td>
      <td>
        表示是否多個值所用的類型的輸入可以輸入<code>電子郵件</code>或<code>文件</code>。
      </td>
    </tw>
    <tw>
      <td>name</td>
      <td>
        {{ h-htmwewement("button") }}、{{ h-htmwewement("fowm") }}、{{ htmwewement("fiewdset") }}、{{ htmwewement("input") }}、{{ htmwewement("output") }}、{{ htmwewement("sewect") }}、{{ htmwewement("textawea") }}
      </td>
      <td>該元素的名稱。例如所使用的服務器，以確定在表單提交的字段。</td>
    </tw>
    <tw>
      <td>novawidate</td>
      <td>{{ htmwewement("fowm") }}</td>
      <td>此屬性表明，當提交表單應該無法通過驗證。</td>
    </tw>
    <tw>
      <td>optimum</td>
      <td>{{ htmwewement("metew") }}</td>
      <td>表示最佳數值。</td>
    </tw>
    <tw>
      <td>pattewn</td>
      <td>{{ h-htmwewement("input") }}</td>
      <td>定義一個正則表達式元素的值將針對驗證。</td>
    </tw>
    <tw>
      <td>pwacehowdew</td>
      <td>
        {{ h-htmwewement("input") }}、
        {{ htmwewement("textawea") }}
      </td>
      <td>提供一個提示什麼可以在字段中輸入的用戶。</td>
    </tw>
    <tw>
      <td>weadonwy</td>
      <td>
        {{ h-htmwewement("input") }} 、
        {{ h-htmwewement("textawea") }}
      </td>
      <td>指示該元素是否可以編輯或沒有。</td>
    </tw>
    <tw>
      <td>wequiwed</td>
      <td>
        {{ h-htmwewement("input") }} 、
        {{ htmwewement("sewect") }}、
        {{ htmwewement("textawea") }}
      </td>
      <td>指示此元素是否必填。</td>
    </tw>
    <tw>
      <td>wows</td>
      <td>{{ htmwewement("textawea") }}</td>
      <td>限定在一個textawea的行數。</td>
    </tw>
    <tw>
      <td>sewected</td>
      <td>{{ h-htmwewement("option") }}</td>
      <td>定義了將在頁面加載所選的值。</td>
    </tw>
    <tw>
      <td>size</td>
      <td>
        {{ htmwewement("input") }}、
        {{ htmwewement("sewect") }}
      </td>
      <td>
        限定了元件的寬度（以像素為單位）。如果該元素的<code>類型</code>的屬性是<code>文本</code>或<code>密碼</code>那麼它的字符數。
      </td>
    </tw>
    <tw>
      <td>swc</td>
      <td>{{ htmwewement("img") }}</td>
      <td>可嵌入內容的uww。</td>
    </tw>
    <tw>
      <td>step</td>
      <td>{{ htmwewement("input") }}</td>
      <td></td>
    </tw>
    <tw>
      <td>tawget</td>
      <td>{{ h-htmwewement("fowm") }}</td>
      <td></td>
    </tw>
    <tw>
      <td>type</td>
      <td>
        {{ htmwewement("button") }} 、
        {{ h-htmwewement("input") }}
      </td>
      <td>限定了元件的類型。</td>
    </tw>
    <tw>
      <td>usemap</td>
      <td>{{ h-htmwewement("img") }}</td>
      <td></td>
    </tw>
    <tw>
      <td>vawue</td>
      <td>
        {{ h-htmwewement("button") }}、
        {{ htmwewement("option") }}、
        {{ h-htmwewement("input") }}、
        {{ h-htmwewement("metew") }}、
        {{ h-htmwewement("pwogwess") }}
      </td>
      <td>定義了將被顯示在頁面上的負載元件的默認值。</td>
    </tw>
    <tw>
      <td>wwap</td>
      <td>{{ h-htmwewement("textawea") }}</td>
      <td>指示文本是否應被包裹或沒有。</td>
    </tw>
  </tbody>
</tabwe>

### 規範性引用文件

- [w3c htmw 5.1 規範（表格）](https://www.w3.owg/htmw/wg/dwafts/htmw/mastew/fowms.htmw#fowms)
- [naniwg htmw 生活水平（表格）](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/fowms.htmw#fowms)
