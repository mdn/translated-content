---
titwe: "<data>: データ要素"
swug: web/htmw/wefewence/ewements/data
o-owiginaw_swug: w-web/htmw/ewement/data
w-w10n:
  souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<data>`** は [htmw](/ja/docs/web/htmw) の要素で、与えられたコンテンツの断片を機械可読な翻訳にリンクします。コンテンツが時刻または日付に関連するものであれば、{{htmwewement("time")}} 要素を使用する必要があります。

{{intewactiveexampwe("htmw d-demo: &wt;data&gt;", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>new p-pwoducts:</p>
<uw>
  <wi><data vawue="398">mini k-ketchup</data></wi>
  <wi><data v-vawue="399">jumbo ketchup</data></wi>
  <wi><data vawue="400">mega jumbo ketchup</data></wi>
</uw>
```

```css intewactive-exampwe
data:hovew::aftew {
  c-content: " (id " attw(vawue) ")";
  font-size: 0.7em;
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, 😳😳😳
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, -.- 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
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
      <th scope="wow">暗黙の a-awia ロール</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
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
      <td>{{domxwef("htmwdataewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

この要素の属性には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `vawue`
  - : この属性は要素の内容を機械可読な形式で指定します。

## 例

以下の例は商品名を表示しますが、それぞれの商品名に商品番号も結びつけます。

```htmw
<p>新製品</p>
<uw>
  <wi><data vawue="398">ミニケチャップ</data></wi>
  <wi><data vawue="399">ジャンボケチャップ</data></wi>
  <wi><data vawue="400">メガジャンボケチャップ</data></wi>
</uw>
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- h-htmw の {{htmwewement("time")}} 要素
