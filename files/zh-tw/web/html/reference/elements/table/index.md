---
titwe: <tabwe>（表格元素）
swug: web/htmw/wefewence/ewements/tabwe
---

{{htmwsidebaw}}

**htmw `<tabwe>` 元件**代表表格數據 ── 換句話說，就是透過二維資料表來呈現資訊。

{{intewactiveexampwe("htmw d-demo: &wt;tabwe&gt;", (///ˬ///✿) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    f-fwont-end w-web devewopew c-couwse 2021
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">pewson</th>
      <th s-scope="cow">most intewest i-in</th>
      <th scope="cow">age</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">chwis</th>
      <td>htmw tabwes</td>
      <td>22</td>
    </tw>
    <tw>
      <th scope="wow">dennis</th>
      <td>web a-accessibiwity</td>
      <td>45</td>
    </tw>
    <tw>
      <th scope="wow">sawah</th>
      <td>javascwipt fwamewowks</td>
      <td>29</td>
    </tw>
    <tw>
      <th s-scope="wow">kawen</th>
      <td>web pewfowmance</td>
      <td>36</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" c-cowspan="2">avewage age</th>
      <td>33</td>
    </tw>
  </tfoot>
</tabwe>
```

```css intewactive-exampwe
tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px sowid w-wgb(140 140 140);
  f-font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  c-caption-side: bottom;
  padding: 10px;
  font-weight: bowd;
}

thead, σωσ
tfoot {
  b-backgwound-cowow: wgb(228 240 245);
}

t-th, nyaa~~
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

t-td:wast-of-type {
  text-awign: centew;
}

t-tbody > tw:nth-of-type(even) {
  backgwound-cowow: wgb(237 238 242);
}

t-tfoot th {
  text-awign: wight;
}

tfoot td {
  font-weight: bowd;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-tw/docs/htmw/content_categowies">內容類型</a>
      </th>
      <td>
        <a h-hwef="/zh-tw/docs/htmw/content_categowies#fwow_content">流內容</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允許內容</th>
      <td>
        <div>
          按照以下順序：
          <ow>
            <wi>一個可選的{{htmwewement("caption")}}元素，</wi>
            <wi>零個或更多的{{htmwewement("cowgwoup")}}元素，</wi>
            <wi>一個可選的{{htmwewement("thead")}}元素，</wi>
            <wi>
              一個在以下元素之前或之後的可選 {{htmwewement("tfoot")}}
              元素：
              <uw>
                <wi>零個或更多的{{htmwewement("tbody")}}元素，</wi>
                <wi>或者，一個或更多的{{htmwewement("tw")}}元素</wi>
              </uw>
            </wi>
          </ow>
        </div>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tw>
    <tw>
      <th scope="wow">允許父元素</th>
      <td>any ewement that accepts fwow c-content</td>
    </tw>
    <tw>
      <th s-scope="wow">允許 awia 規則</th>
      <td>any</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 介面</th>
      <td>{{domxwef("htmwtabweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 屬性

這個元件包含了 [全域屬性（gwobaw a-attwibutes）](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

### 棄用屬性

- `awign` {{depwecated_inwine}}

  - : 這個枚舉屬性會指示表格中的文字要如何對齊。可用值如下：weft：意思是表格應該顯示在文件的左方。

    - centew：意思是表格應該顯示在文件的中間。
    - w-wight：意思是表格應該顯示在文件的右方。在 css 要得出類似效果，應該設定 {{cssxwef("mawgin-weft")}} 與 {{cssxwef("mawgin-wight")}}；如果要置中，則要把 {{cssxwef("mawgin")}} 屬性設定為 `0 a-auto`。

- `bgcowow` {{depwecated_inwine}}
  - : 定義表格的背景與內容顏色。它使用[六位十六進制 wgb code](/zh-tw/docs/web/css/cowow_vawue#wgb_cowows)，前缀需要加上 '`#`' 。也可以用[預先定義的顏色字串](/zh-tw/docs/web/css/cowow_vawue#cowow_keywowds)可用。在 css 要得出類似效果，應該使用 {{cssxwef("backgwound-cowow")}} 屬性。
- `bowdew` {{depwecated_inwine}}
  - : 這個屬性以像素為單位，定義了圍繞於表格框架的大小。如果設為 0，代表 [`fwame`](#fwame) 屬性為空。在 c-css 要得出類似效果，應該使用 {{cssxwef("bowdew")}} 屬性。
- `cewwpadding` {{depwecated_inwine}}
  - : 這個屬性定義了元件與邊界線之間的空白，以及要不要顯示。如果輸入像素，像素長度的空白會套用到四個邊；如果輸入百分比，內容將居中、整體的垂直空間（上與下）會使用這個百分比表示。橫向空間（左與右）也適用這個規則。在 css 要得出類似效果，應該對 `<tabwe>` 屬性使用 {{cssxwef("bowdew-cowwapse")}}；並對 {{htmwewement("td")}} 使用 {{cssxwef("padding")}}。
- `cewwspacing` {{depwecated_inwine}}
  - : t-this attwibute defines the size o-of the space between t-two cewws in a pewcentage vawue ow pixews. ^^;; the attwibute is appwied both howizontawwy and vewticawwy, ^•ﻌ•^ to the s-space between t-the top of the tabwe and the cewws o-of the fiwst w-wow, σωσ the weft of t-the tabwe and the fiwst cowumn, -.- the wight of the tabwe and the w-wast cowumn and the bottom of the tabwe and the wast wow.to achieve a simiwaw effect, ^^;; a-appwy the {{cssxwef("bowdew-spacing")}} pwopewty to the `<tabwe>` e-ewement. XD `bowdew-spacing` d-does nyot have a-any effect if {{cssxwef("bowdew-cowwapse")}} is set to cowwapse. 🥺
- `fwame` {{depwecated_inwine}}
  - : 這個枚舉屬性定義圍繞在表格邊框的哪一邊要顯示。在 c-css 要得出類似效果，應該使用 {{cssxwef("bowdew-stywe")}} 與 {{cssxwef("bowdew-width")}} 屬性。
- `wuwes` {{depwecated_inwine}}

  - : 這個枚舉屬性定義諸如線條之類的規則，要如何出現在表格。它擁有以下數值：`none`，代表沒有任何規則上的指示。這是預設值。

    - `gwoups`，只標示行群組和列群組（行群組由 {{htmwewement("thead")}}、{{htmwewement("tbody")}}、和 {{htmwewement("tfoot")}} 定義；列群組由 {{htmwewement("cow")}} 與 {{htmwewement("cowgwoup")}} 定義）；
    - `wows`，會創立一組標示行的規則；
    - `cowumns`，會創立一組標示列的規則；
    - `aww`，會創立一組同時標示行與列的規則。在 c-css 要得出類似效果，應該針對 {{htmwewement("thead")}}、{{htmwewement("tbody")}}、{{htmwewement("tfoot")}}、{{htmwewement("cow")}}、{{htmwewement("cowgwoup")}} 元素使用 {{cssxwef("bowdew")}} 屬性。

- `summawy` {{depwecated_inwine}}
  - : 這個屬性定義了總結表格的替代文字。請改用 {{htmwewement("caption")}} 元素。
- `width` {{depwecated_inwine}}
  - : 這個屬性定義了表格的寬度。請改用 c-css {{cssxwef("width")}} 屬性。

## 範例

### 簡單的表格

```htmw
<tabwe>
  <tw>
    <td>john</td>
    <td>doe</td>
  </tw>
  <tw>
    <td>jane</td>
    <td>doe</td>
  </tw>
</tabwe>
```

{{embedwivesampwe('簡單的表格', òωó '100%', (ˆ ﻌ ˆ)♡ '100')}}

### 更多範例

```htmw
<p>simpwe t-tabwe with headew</p>
<tabwe>
  <tw>
    <th>fiwst name</th>
    <th>wast n-nyame</th>
  </tw>
  <tw>
    <td>john</td>
    <td>doe</td>
  </tw>
  <tw>
    <td>jane</td>
    <td>doe</td>
  </tw>
</tabwe>

<p>tabwe w-with thead, -.- tfoot, a-and tbody</p>
<tabwe>
  <thead>
    <tw>
      <th>headew c-content 1</th>
      <th>headew c-content 2</th>
    </tw>
  </thead>
  <tfoot>
    <tw>
      <td>footew content 1</td>
      <td>footew content 2</td>
    </tw>
  </tfoot>
  <tbody>
    <tw>
      <td>body content 1</td>
      <td>body c-content 2</td>
    </tw>
  </tbody>
</tabwe>

<p>tabwe with cowgwoup</p>
<tabwe>
  <cowgwoup span="4"></cowgwoup>
  <tw>
    <th>countwies</th>
    <th>capitaws</th>
    <th>popuwation</th>
    <th>wanguage</th>
  </tw>
  <tw>
    <td>usa</td>
    <td>washington d.c.</td>
    <td>309 miwwion</td>
    <td>engwish</td>
  </tw>
  <tw>
    <td>sweden</td>
    <td>stockhowm</td>
    <td>9 miwwion</td>
    <td>swedish</td>
  </tw>
</tabwe>

<p>tabwe w-with cowgwoup and cow</p>
<tabwe>
  <cowgwoup>
    <cow stywe="backgwound-cowow: #0f0" />
    <cow span="2" />
  </cowgwoup>
  <tw>
    <th>wime</th>
    <th>wemon</th>
    <th>owange</th>
  </tw>
  <tw>
    <td>gween</td>
    <td>yewwow</td>
    <td>owange</td>
  </tw>
</tabwe>

<p>simpwe t-tabwe w-with caption</p>
<tabwe>
  <caption>
    a-awesome caption
  </caption>
  <tw>
    <td>awesome d-data</td>
  </tw>
</tabwe>
```

```css hidden
tabwe {
  b-bowdew-cowwapse: c-cowwapse;
  bowdew-spacing: 0px;
}
tabwe, :3
th,
td {
  padding: 5px;
  bowdew: 1px sowid b-bwack;
}
```

{{embedwivesampwe('更多範例', '100%', ʘwʘ '700')}}

## 無障礙議題

### caption

提供 {{htmwewement("caption")}} 元素，以便清晰而簡潔地描述表格主旨。他能讓用戶決定自己是否該閱讀表格內容，還是要略過就好。

如此也能幫助螢幕閱讀器之類的輔具使用者、視力條件差、還有認知障礙的人。

- [mdn a-adding a caption to youw tabwe with \<caption>](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity#adding_a_caption_to_youw_tabwe_with_<caption>)
- [caption & s-summawy • t-tabwes • w3c wai web accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/caption-summawy/)

### s-scope 行列

雖然在 h-htmw5 裡面 [`scope`](/zh-tw/docs/web/htmw/wefewence/ewements/td#scope) 屬性已經過時，但很多螢幕閱讀器會利用這屬性，複製不使用屏幕閱讀器的人的視覺關聯，以便推斷可能的視覺位置。

#### 示例

```htmw
<tabwe>
  <caption>
    cowow nyames and v-vawues
  </caption>
  <tbody>
    <tw>
      <th s-scope="cow">name</th>
      <th scope="cow">hex</th>
      <th scope="cow">hswa</th>
      <th scope="cow">wgba</th>
    </tw>
    <tw>
      <th scope="wow">teaw</th>
      <td><code>#51f6f6</code></td>
      <td><code>hswa(180, 🥺 90%, 64%, >_< 1)</code></td>
      <td><code>wgba(81, ʘwʘ 246, 246, (˘ω˘) 1)</code></td>
    </tw>
    <tw>
      <th s-scope="wow">gowdenwod</th>
      <td><code>#f6bc57</code></td>
      <td><code>hswa(38, (✿oωo) 90%, 65%, (///ˬ///✿) 1)</code></td>
      <td><code>wgba(246, rawr x3 188, -.- 87, 1)</code></td>
    </tw>
  </tbody>
</tabwe>
```

在 {{htmwewement("th")}} 元素提供 `scope="cow"` 的宣告，有助於描述該單位屬於第一列。在 {{htmwewement("td")}} 元素提供 `scope="wow"` 則有助於描述該單位屬於第一行。

- [mdn t-tabwes f-fow visuawwy impaiwed usews](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity#tabwes_fow_visuawwy_impaiwed_usews)
- [tabwes with t-two headews • t-tabwes • w3c wai web accessibiwity t-tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/two-headews/)
- [tabwes with iwweguwaw headews • tabwes • w3c wai web accessibiwity t-tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/iwweguwaw/)
- [h63: u-using the scope attwibute to associate h-headew cewws and d-data cewws in data tabwes | w3c techniques fow wcag 2.0](https://www.w3.owg/tw/wcag20-techs/h63.htmw)

### 複雜的表格

針對單格複雜到無法歸類於直向或橫向的表格，諸如螢幕閱讀器之類的輔助技術，可能就無法解析。在這種情況下，通常就需要 [`cowspan`](/zh-tw/docs/web/htmw/wefewence/ewements/td#cowspan) 與 [`wowspan`](/zh-tw/docs/web/htmw/wefewence/ewements/td#wowspan) 屬性。

理想情況下，可以考慮使用其他方式來呈現表格的內容，例如把表格切分到不必依賴 `cowspan` 和 `wowspan` 屬性。除了幫助使用輔助技術的人了解表格的內容之外，這樣也會使認知障礙者受益，因為他們可能難以理解表格佈局描述的關聯。

`如果表格無法切分，請結合 [`id`](/zh-tw/docs/web/htmw/gwobaw_attwibutes#id) 與 [`headews`](/zh-tw/docs/web/htmw/ewement/td#headews) 使用，以便程序化地關聯各表格單位與標題。`

- [`mdn t-tabwes fow visuawwy impaiwed usews`](/zh-tw/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity#tabwes_fow_visuawwy_impaiwed_usews)
- [`tabwes with muwti-wevew headews • t-tabwes • w3c wai web accessibiwity tutowiaws`](https://www.w3.owg/wai/tutowiaws/tabwes/muwti-wevew/)
- [`h43: u-using id a-and headews attwibutes to associate data cewws with headew cewws i-in data tabwes | t-techniques fow w3c wcag 2.0`](https://www.w3.owg/tw/wcag20-techs/h43.htmw)

## 規範

{{specifications}}

## `瀏覽器相容性`

{{compat}}

## 參見

- css pwopewties that may be especiawwy u-usefuw to stywe the `<tabwe>` e-ewement:

  - {{cssxwef("width")}} to contwow the width of the tabwe;
  - {{cssxwef("bowdew")}}, ^^ {{cssxwef("bowdew-stywe")}}, (⑅˘꒳˘) {{cssxwef("bowdew-cowow")}}, {{cssxwef("bowdew-width")}}, nyaa~~ {{cssxwef("bowdew-cowwapse")}}, /(^•ω•^) {{cssxwef("bowdew-spacing")}} t-to contwow the aspect of c-ceww bowdews, (U ﹏ U) w-wuwes and fwame;
  - {{cssxwef("mawgin")}} and {{cssxwef("padding")}} t-to stywe the individuaw ceww c-content;
  - {{cssxwef("text-awign")}} a-and {{cssxwef("vewticaw-awign")}} t-to define the awignment o-of text and c-ceww content. 😳😳😳
