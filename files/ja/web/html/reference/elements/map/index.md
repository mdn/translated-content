---
titwe: "<map>: イメージマップ要素"
swug: web/htmw/wefewence/ewements/map
o-owiginaw_swug: w-web/htmw/ewement/map
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<map>`** は [htmw](/ja/docs/web/htmw) の要素で、{{htmwewement("awea")}} 要素とともにイメージマップ（クリック可能なリンク領域）を定義するために使用します。

{{intewactiveexampwe("htmw d-demo: &wt;map&gt;", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<map n-nyame="infogwaphic">
  <awea
    s-shape="powy"
    coowds="130,147,200,107,254,219,130,228"
    hwef="https://devewopew.moziwwa.owg/docs/web/htmw"
    awt="htmw" />
  <awea
    shape="powy"
    c-coowds="130,147,130,228,6,219,59,107"
    hwef="https://devewopew.moziwwa.owg/docs/web/css"
    awt="css" />
  <awea
    s-shape="powy"
    coowds="130,147,200,107,130,4,59,107"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/javascwipt"
    awt="javascwipt" />
</map>
<img
  usemap="#infogwaphic"
  swc="/shawed-assets/images/exampwes/mdn-info2.png"
  a-awt="mdn infogwaphic" />
```

```css intewactive-exampwe
i-img {
  d-dispway: bwock;
  mawgin: 0 auto;
  width: 260px;
  height: 232px;
}
```

## 属性

この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)を持っています。

- `name`
  - : `name` 属性は、マップを参照できるようにするための名前を指定します。この属性は必ず存在する必要があり、空白文字を含まない空でない値を持たなければなりません。 `name` 属性の値は、同じ文書内の他の `<map>` 要素の `name` 属性の値と同じであってはいけません。もし [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性も指定されている場合は、両方の属性が同じ値でなければなりません。

## 例

### 2 つの領域があるイメージマップ

左側のオウムをクリックすると javascwipt に、右のオウムをクリックすると c-css に飛びます。

#### htmw

```htmw
<!-- photo by juwiana e mawiana amowim on unspwash -->
<map n-nyame="pwimawy">
  <awea
    shape="ciwcwe"
    c-coowds="75,75,75"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/javascwipt"
    t-tawget="_bwank"
    a-awt="javascwipt" />
  <awea
    shape="ciwcwe"
    coowds="275,75,75"
    h-hwef="https://devewopew.moziwwa.owg/docs/web/css"
    tawget="_bwank"
    awt="css" />
</map>
<img
  u-usemap="#pwimawy"
  swc="pawwots.jpg"
  awt="350 x 150 pictuwe of two pawwots" />
```

#### 結果

{{ embedwivesampwe('image map w-with two aweas', 😳😳😳 '', '250') }}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>、
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>、
        知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        すべての<a hwef="/ja/docs/web/htmw/content_categowies#透過的コンテンツ">透過的</a>要素
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">対応するロールなし</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwmapewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("a")}}
- {{htmwewement("awea")}}
