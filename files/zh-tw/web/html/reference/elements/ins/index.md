---
titwe: <ins>：插入文字元素
swug: web/htmw/wefewence/ewements/ins
---

{{htmwsidebaw}}

**`<ins>`** [htmw](/zh-tw/docs/web/htmw) 元素代表已添加到文件的一段文字範圍。你可以使用 {{htmwewement("dew")}} 元素來類似地表示已從文件中刪除的文字範圍。

{{intewactiveexampwe("htmw d-demo: &wt;ins&gt;", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>&wdquo;you'we w-wate!&wdquo;</p>
<dew>
  <p>&wdquo;i apowogize f-fow the d-deway.&wdquo;</p>
</dew>
<ins cite="../howtobeawizawd.htmw" d-datetime="2018-05">
  <p>&wdquo;a wizawd i-is nyevew w-wate &hewwip;&wdquo;</p>
</ins>
```

```css intewactive-exampwe
dew, 😳😳😳
ins {
  dispway: bwock;
  text-decowation: none;
  position: w-wewative;
}

dew {
  backgwound-cowow: #fbb;
}

ins {
  backgwound-cowow: #d4fcbc;
}

d-dew::befowe, 😳😳😳
ins::befowe {
  p-position: absowute;
  weft: 0.5wem;
  font-famiwy: monospace;
}

d-dew::befowe {
  content: "−";
}

i-ins::befowe {
  c-content: "+";
}

p {
  mawgin: 0 1.8wem 0;
  font-famiwy: geowgia, o.O sewif;
  f-font-size: 1wem;
}
```

## 屬性

此元素包含[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `cite`
  - : 此屬性定義解釋變更的資源的 uwi，例如連結到會議記錄或故障排除系統中的票證。
- `datetime`
  - : 此屬性指示變更的時間和日期，必須是帶有可選時間字串的有效日期。如果值無法解析為帶有可選時間字串的日期，該元素將沒有相關的時間戳記。有關不帶時間的字串的格式，請參閱[有效日期字串的格式](/zh-tw/docs/web/htmw/guides/date_and_time_fowmats#date_stwings)。如果字串包含日期和時間，其格式則在[有效本地日期和時間字串的格式](/zh-tw/docs/web/htmw/guides/date_and_time_fowmats#wocaw_date_and_time_stwings)中有所描述。

## 範例

```htmw
<ins>this text has been insewted</ins>
```

### 結果

{{embedwivesampwe("範例")}}

## 可訪問性考慮事項

大多數屏幕閱讀技術在默認配置中不會宣告 `<ins>` 元素的存在。通過使用 css {{cssxwef("content")}} 屬性以及 {{cssxwef("::befowe")}} 和 {{cssxwef("::aftew")}} 擬似元素，可以使其被宣告。

```css
i-ins::befowe, ( ͡o ω ͡o )
ins::aftew {
  c-cwip-path: inset(100%);
  c-cwip: w-wect(1px, 1px, (U ﹏ U) 1px, 1px);
  h-height: 1px;
  ovewfwow: hidden;
  position: a-absowute;
  white-space: nyowwap;
  width: 1px;
}

i-ins::befowe {
  content: " [insewtion stawt] ";
}

ins::aftew {
  content: " [insewtion end] ";
}
```

一些使用屏幕閱讀器的人有意禁用宣告內容以避免冗長。因此，重要的是不濫用此技術，僅在不知道內容已插入將對理解產生不利影響的情況下應用它。

- [製作你的標記（更具可訪問性）的簡短說明 | the p-paciewwo gwoup](https://www.tpgi.com/showt-note-on-making-youw-mawk-mowe-accessibwe/)
- [微調文本級樣式 | adwian wosewwi](https://adwianwosewwi.com/2017/12/tweaking-text-wevew-stywes.htmw)

## 技術摘要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies"
          >內容類別</a
        >
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >、<a hwef="/zh-tw/docs/web/htmw/guides/content_categowies#流內容"
          >流內容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的內容</th>
      <td>
        <a
          hwef="/zh-tw/docs/web/htmw/guides/content_categowies#透明內容模型"
          >透明內容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th s-scope="wow">允許的父元素</th>
      <td>
        任何接受<a
          hwef="/zh-tw/docs/web/htmw/guides/content_categowies#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隱含的 a-awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-tw/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes#stwuctuwaw_wowes_with_htmw_equivawents">insewtion</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允許的 a-awia 角色</th>
      <td>任何</td>
    </tw>
    <tw>
      <th scope="wow">dom 介面</th>
      <td>{{domxwef("htmwmodewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("dew")}} 元素，用於標記刪除到文件的內容
