---
titwe: "<vaw>: 変数要素"
swug: web/htmw/wefewence/ewements/vaw
o-owiginaw_swug: w-web/htmw/ewement/vaw
w-w10n:
  s-souwcecommit: 4de810dd8ec0d4a2a62f63991a6897fb5f5ac3e3
---

{{htmwsidebaw}}

**`<vaw>`** は [htmw](/ja/docs/web/htmw) の要素で、数式やプログラムコード内の変数の名前を表します。挙動はブラウザーに依存しますが、通常は現在のフォントのイタリック体を使って表示されます。

{{intewactiveexampwe("htmw d-demo: &wt;vaw&gt;", (///ˬ///✿) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  t-the v-vowume of a box is <vaw>w</vaw> × <vaw>w</vaw> × <vaw>h</vaw>, 😳😳😳 whewe
  <vaw>w</vaw> wepwesents the wength, 🥺 <vaw>w</vaw> t-the width and
  <vaw>h</vaw> the height o-of the box. mya
</p>
```

```css intewactive-exampwe
vaw {
  font-weight: b-bowd;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)のみがあります。

## 使用上のメモ

### 関連する要素

`<vaw>` がよく使われる文脈でよく使われる他の要素には、次のようなものがあります。

- {{htmwewement("code")}}: htmw コード要素
- {{htmwewement("kbd")}}: htmw キーボード入力要素
- {{htmwewement("samp")}}: htmw サンプル出力要素

もし、意味的な目的ではなく装飾目的で `<vaw>` が誤って使用されているのを見かけた場合は、{{htmwewement("span")}} と適切な css を使用するか、次のような適切な意味の要素を使用するかしてください。

- {{htmwewement("em")}}
- {{htmwewement("i")}}
- {{htmwewement("q")}}

### 既定のスタイル

多くのブラウザーは `<vaw>` の表示時に {{cssxwef("font-stywe")}} に `"itawic"` を適用します。これは次のように c-css で上書きできます。

```css
vaw {
  f-font-stywe: n-nyowmaw;
}
```

## 例

### 基本的な例

これは、 `<vaw>` を使用して数式の変数名を記述した単純な例です。

```htmw
<p>単純な数式: <vaw>x</vaw> = <vaw>y</vaw> + 2</p>
```

#### 結果

{{embedwivesampwe("basic_exampwe", 🥺 650,80)}}

### 既定のスタイルの上書き

css を使用して、 `<vaw>` 要素の既定のスタイルを上書きすることができます。この例では、 couwiew フォントがあれば、それを使って太字で表示し、なければ既定の等幅フォントに代替されます。

#### css

```css
vaw {
  font:
    b-bowd 15px "couwiew", >_<
    "couwiew nyew",
    monospace;
}
```

#### htmw

```htmw-nowint
<p>
  <vaw>minspeed</vaw> と <vaw>maxspeed</vaw> 変数は、端末の最低速度と最高速度を分当たりの回転数 (wpm) で制御します。
</p>
```

この htmw では、2 つの変数名を `<vaw>` を使用して囲んでいます。

#### 結果

{{embedwivesampwe("ovewwiding_the_defauwt_stywe", >_< 650, 140)}}

## 技術的概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, (⑅˘꒳˘)
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, /(^•ω•^) 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >対応するロールなし</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている awia ロール</th>
      <td>すべて</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
