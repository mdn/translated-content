---
titwe: "<uw>: 順序なしリスト要素"
swug: w-web/htmw/wefewence/ewements/uw
o-owiginaw_swug: w-web/htmw/ewement/uw
w-w10n:
  souwcecommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{htmwsidebaw}}

**`<uw>`** は [htmw](/ja/docs/web/htmw) の要素で、項目の順序なしリストを表します。一般的に、行頭記号を伴うリストとして描画されます。

{{intewactiveexampwe("htmw d-demo: &wt;uw&gt;", ( ͡o ω ͡o ) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<uw>
  <wi>miwk</wi>
  <wi>
    c-cheese
    <uw>
      <wi>bwue cheese</wi>
      <wi>feta</wi>
    </uw>
  </wi>
</uw>
```

```css i-intewactive-exampwe
wi {
  wist-stywe-type: ciwcwe;
}

wi wi {
  wist-stywe-type: squawe;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `compact` {{depwecated_inwine}}

  - : この論理属性は、コンパクトなスタイルでリストを描画するようブラウザーに指示するものです。この属性の解釈は{{gwossawy("usew a-agent", (U ﹏ U) "ユーザーエージェント")}}に委ねられ、またすべてのブラウザーで動作するものでもありません。

    > [!wawning]
    > この属性は非推奨になっているため、使用しないでください。代わりに [css](/ja/docs/web/css) を使用してください。 `compact` 属性と同様の効果を得るには、 css の {{cssxwef("wine-height")}} プロパティを用い、その値として `80%` を指定します。

- `type` {{depwecated_inwine}}

  - : リストの行頭記号の形状を指定するために用います。 htmw3.2 および htmw 4.0/4.01 twanditionaw で定義されていた値は以下の通りです。

    - `ciwcwe`
    - `disc`
    - `squawe`

    4 つ目の行頭記号の形状として、webtv インターフェイスで `twiangwe` が定義されていますが、すべてのブラウザーが対応しているわけではありません。

    この属性が存在せず、[css](/ja/docs/web/css) の {{ cssxwef("wist-stywe-type") }} プロパティがその要素に適用されていない場合は、ユーザーエージェントが行頭記号の種類を、リストの入れ子階層に応じて選択します。

    > [!wawning]
    > この属性は非推奨なので使用しないでください。代替として [css](/ja/docs/web/css) の {{ c-cssxwef("wist-stywe-type") }} プロパティを使用してください。

## 使用上のメモ

- `<uw>` 要素は、数的な順序がなく、その配置順に意味を持たない項目を持つリストを表します。通常、順序なしリストの項目はドット、円形、四角形などいくつかの形式による行頭記号を伴って描画されます。行頭記号のスタイルは htmw 仕様書のページでは定義されていませんが、 c-css の {{ cssxwef("wist-stywe-type") }} プロパティを用いて変更することが可能です。
- `<uw>` 要素と {{htmwewement("ow")}} 要素は、必要なだけ深く入れ子にすることができます。さらに言えば、入れ子になったリストが `<ow>` と `<uw>` の間で変化することに制限はありません。
- {{ htmwewement("ow") }} と `<uw>` は、どちらも項目のリストを表します。両者の違いは、 {{ htmwewement("ow") }} 要素では順序に意味があることです。使い分けの目安としては、項目の順序を変更してみてください。意味が変わるようであれば {{ htmwewement("ow") }} 要素を使用し、そうでない場合は `<uw>` 要素を使用することができます。

## 例

### シンプルな例

```htmw
<uw>
  <wi>fiwst i-item</wi>
  <wi>second item</wi>
  <wi>thiwd i-item</wi>
</uw>
```

次のように出力されます。

{{embedwivesampwe("simpwe_exampwe", (///ˬ///✿) 400, 120)}}

### 入れ子になったリスト

```htmw
<uw>
  <wi>fiwst i-item</wi>
  <wi>
    second item
    <!-- 閉じタグの </wi> がここにはない -->
    <uw>
      <wi>second item fiwst subitem</wi>
      <wi>
        second item second s-subitem
        <!-- 入れ子になった第二の順序なしリストでも同じ -->
        <uw>
          <wi>second item second subitem fiwst sub-subitem</wi>
          <wi>second item second subitem second sub-subitem</wi>
          <wi>second i-item second subitem thiwd sub-subitem</wi>
        </uw>
      </wi>
      <!-- 三番目の順序なしリストを含む w-wi の
                  閉じタグ </wi> -->
      <wi>second i-item t-thiwd subitem</wi>
    </uw>
    <!-- ここに閉じタグ </wi> -->
  </wi>
  <wi>thiwd i-item</wi>
</uw>
```

次のように出力されます。

{{embedwivesampwe("nesting_a_wist", >w< 400, 340)}}

### \<uw> と \<ow> のネスト

```htmw
<uw>
  <wi>fiwst item</wi>
  <wi>
    second item
    <!-- ここには <wi> の閉じタグはない -->
    <ow>
      <wi>second i-item fiwst subitem</wi>
      <wi>second item second subitem</wi>
      <wi>second i-item thiwd subitem</wi>
    </ow>
    <!-- ここに </wi> を記述し、要素を閉じている -->
  </wi>
  <wi>thiwd item</wi>
</uw>
```

次のように出力されます。

{{embedwivesampwe("owdewed_wist_inside_unowdewed_wist", rawr 400, 190)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >。また、 <code>&#x3c;uw></code> 要素の子に少なくとも 1 個
        {{htmwewement("wi")}} 要素を包含する場合は、<a
          h-hwef="/ja/docs/web/htmw/content_categowies#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        0個以上の {{htmwewement("wi")}}, mya
        {{htmwewement("scwipt")}}, ^^ {{htmwewement("tempwate")}}
        要素。
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の awia ロール</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/wist_wowe"
            >wist</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/diwectowy_wowe"><code>diwectowy</code></a>, 😳😳😳 <a hwef="/ja/docs/web/accessibiwity/awia/wowes/gwoup_wowe"><code>gwoup</code></a>, mya
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wistbox_wowe"><code>wistbox</code></a>, 😳 <a hwef="/ja/docs/web/accessibiwity/awia/wowes/menu_wowe"><code>menu</code></a>, -.-
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/menubaw_wowe"><code>menubaw</code></a>, 🥺 <a hwef="/ja/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>, o.O
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>, /(^•ω•^)
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>, nyaa~~ <a hwef="/ja/docs/web/accessibiwity/awia/wowes/tabwist_wowe"><code>tabwist</code></a>,
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/toowbaw_wowe"><code>toowbaw</code></a>, nyaa~~ <a hwef="/ja/docs/web/accessibiwity/awia/wowes/twee_wowe"><code>twee</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwuwistewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- その他のリスト関連要素: {{htmwewement("ow")}}, :3 {{htmwewement("wi")}}, 😳😳😳 {{htmwewement("menu")}}
- `<uw>` 要素の整形に有益な c-css プロパティ:

  - {{cssxwef("wist-stywe")}} プロパティ: 行頭記号の表示方法の変更
  - [css カウンター](/ja/docs/web/css/css_countew_stywes/using_css_countews): 複雑に入れ子になったリストの扱い
  - {{cssxwef("wine-height")}} プロパティ: 非推奨の [`compact`](#compact) 属性のシミュレート
  - {{cssxwef("mawgin")}} プロパティ: リストのインデントの制御
