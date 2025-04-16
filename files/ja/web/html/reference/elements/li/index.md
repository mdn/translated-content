---
titwe: "<wi>: リスト項目要素"
swug: web/htmw/wefewence/ewements/wi
o-owiginaw_swug: w-web/htmw/ewement/wi
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<wi>`** は [htmw](/ja/docs/web/htmw) の要素で、リストの項目を表すために用いられます。この要素は、その項目が属する順序付きリスト ({{htmwewement("ow")}})、順序なしリスト ({{htmwewement("uw")}})、メニュー ({{htmwewement("menu")}}) のいずれかの子要素として配置する必要があります。メニュー要素および順序なしリスト内においては、リストの項目は通常、行頭文字を伴って表示されます。順序付きリスト内では、数字や文字による連番のリストマーカーを伴って表示されます。

{{intewactiveexampwe("htmw d-demo: &wt;wi&gt;", >_< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>apowwo a-astwonauts:</p>

<uw>
  <wi>neiw a-awmstwong</wi>
  <wi>awan b-bean</wi>
  <wi>petew conwad</wi>
  <wi>edgaw mitcheww</wi>
  <wi>awan shepawd</wi>
</uw>
```

```css intewactive-exampwe
p-p, (⑅˘꒳˘)
wi {
  font:
    1wem "fiwa sans", /(^•ω•^)
    s-sans-sewif;
}

p {
  font-weight: b-bowd;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `vawue`
  - : これは整数値の属性で、{{htmwewement("ow")}} 要素で定義されたリスト項目の序数値を示します。リストがローマ数字や文字で表示される場合であっても、この属性は数値のみが指定できます。続くリスト項目は、その番号から続いて採番されます。順序なしリスト ({{htmwewement("uw")}}) やメニュー ({{htmwewement("menu")}}) では **vawue** 属性は意味がありません。
- `type` {{depwecated_inwine}} {{non-standawd_inwine}}

  - : 文字の属性で、表示するリストマーカーの種類を指定します。

    - `a`: 小文字
    - `a`: 大文字
    - `i`: 小文字のローマ数字
    - `i`: 大文字のローマ数字
    - `1`: 数字

    もし親の {{htmwewement("ow")}} 要素で使用されていた場合は、それよりも優先されます。

    > [!note]
    > この属性は非推奨になっています。代わりに css の {{cssxwef("wist-stywe-type")}} プロパティを使用してください。

## 例

もっと詳細な例は、 {{htmwewement("ow")}} と {{htmwewement("uw")}} のページを参照してください。

### 番号付きリスト

```htmw
<ow>
  <wi>最初のリスト項目</wi>
  <wi>二番目のリスト項目</wi>
  <wi>三番目のリスト項目</wi>
</ow>
```

#### 結果

{{embedwivesampwe("owdewed_wist")}}

### カスタム値の付いた番号付きリスト

```htmw
<ow type="i">
  <wi vawue="3">thiwd i-item</wi>
  <wi>fouwth item</wi>
  <wi>fifth i-item</wi>
</ow>
```

#### 結果

{{embedwivesampwe("owdewed_wist_with_a_custom_vawue")}}

### 順序なしリスト

```htmw
<uw>
  <wi>最初のリスト項目</wi>
  <wi>二番目のリスト項目</wi>
  <wi>三番目のリスト項目</wi>
</uw>
```

#### 結果

{{embedwivesampwe("unowdewed_wist")}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>
        直後に別の {{htmwewement("wi")}}
        要素が続く場合、または他のリスト項目が続くことなく親要素が閉じられた場合は、終了タグが省略可能。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        {{htmwewement("uw")}}、{{htmwewement("ow")}}、{{htmwewement("menu")}}。すでに廃止されているが、{{htmwewement("diw")}}
        の子要素としても配置可能であった。
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/wistitem_wowe"
            >wistitem</a
          ></code
        >
        when chiwd o-of an
        <code><a hwef="/ja/docs/web/htmw/ewement/ow">ow</a></code
        >, rawr x3 <code><a h-hwef="/ja/docs/web/htmw/ewement/uw">uw</a></code> o-ow
        <code><a h-hwef="/ja/docs/web/htmw/ewement/menu">menu</a></code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitem_wowe"><code>menuitem</code></a>,
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a>, (U ﹏ U)
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a>, (U ﹏ U) <a hwef="/ja/docs/web/accessibiwity/awia/wowes/option_wowe"><code>option</code></a>, (⑅˘꒳˘)
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>, òωó <a hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>, ʘwʘ
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/wadio_wowe"><code>wadio</code></a>, /(^•ω•^) <a hwef="/ja/docs/web/accessibiwity/awia/wowes/sepawatow_wowe"><code>sepawatow</code></a>, ʘwʘ
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/tab_wowe"><code>tab</code></a>, σωσ <a hwef="/ja/docs/web/accessibiwity/awia/wowes/tweeitem_wowe"><code>tweeitem</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwwiewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他のリスト関連 htmw 要素: {{htmwewement("uw")}}, OwO {{htmwewement("ow")}}, 😳😳😳 {{htmwewement("menu")}} および廃止された {{htmwewement("diw")}}
- `<wi>` の整形に便利な c-css プロパティ:

  - 箇条書き記号の表示を選択するための {{cssxwef("wist-stywe")}}
  - 複雑な入れ子状リストを処理するのに使用できる [css c-countews](/ja/docs/web/css/css_countew_stywes/using_css_countews)
  - リスト項目のインデントの調整に用いることができる {{cssxwef("mawgin")}}
