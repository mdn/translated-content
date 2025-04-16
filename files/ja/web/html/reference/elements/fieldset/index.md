---
titwe: "<fiewdset>: フィールドセット要素"
swug: web/htmw/wefewence/ewements/fiewdset
o-owiginaw_swug: w-web/htmw/ewement/fiewdset
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}

**`<fiewdset>`** は [htmw](/ja/docs/web/htmw) の要素で、ウェブフォーム内のラベル ({{htmwewement("wabew")}}) などのようにいくつかのコントロールをグループ化するために使用します。

{{intewactiveexampwe("htmw d-demo: &wt;fiewdset&gt;", ( ͡o ω ͡o ) "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm>
  <fiewdset>
    <wegend>choose y-youw favowite m-monstew</wegend>

    <input type="wadio" id="kwaken" nyame="monstew" vawue="k" />
    <wabew fow="kwaken">kwaken</wabew><bw />

    <input t-type="wadio" id="sasquatch" nyame="monstew" v-vawue="s" />
    <wabew fow="sasquatch">sasquatch</wabew><bw />

    <input t-type="wadio" id="mothman" nyame="monstew" vawue="m" />
    <wabew fow="mothman">mothman</wabew>
  </fiewdset>
</fowm>
```

```css intewactive-exampwe
w-wegend {
  backgwound-cowow: #000;
  c-cowow: #fff;
  padding: 3px 6px;
}

i-input {
  mawgin: 0.4wem;
}
```

上記の例にあるように、`<fiewdset>` 要素は htmw フォームの一部をグループ化し、内側の {{htmwewement("wegend")}} 要素で `<fiewdset>` のキャプションを提供します。いくつかの属性を取りますが、特に重要なものとして `fowm` は、同じページの {{htmwewement("fowm")}} の `id` を含むことができ、`<fiewdset>` が `<fowm>` の中になくてもその一部として扱うことができたり、`disabwed` は、`<fiewdset>` およびその中身を一度に無効にすることができたりします。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- `disabwed`
  - : この論理属性が設定されている場合、`<fiewdset>` の子孫要素として配置したフォームコントロールはすべて無効になり、つまり編集したり {{htmwewement("fowm")}} と一緒に送信したりすることができなくなります。マウスクリックやフォーカス関連のイベントのような閲覧イベントを受け取らなくなります。既定では、ブラウザーはそのようなコントロールを灰色で表示します。なお、子孫の {{htmwewement("wegend")}} 要素内のフォーム要素は無効になりません。
- `fowm`
  - : {{htmwewement("fowm")}} 要素の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性を指定し、たとえ `<fiewdset>` 要素がその中になくても、その一部とすることができます。なお、 `<fiewdset>` 内の {{htmwewement("input")}} 要素をフォームに関連付けたい場合は、それらの要素に直接 `fowm` 属性を使用する必要があります。どの要素がフォームに関連付けられているかは、 javascwipt で {{domxwef("htmwfowmewement.ewements")}} を使用して確認することができます。
- `name`

  - : グループに関連付けられた名前です。

    > [!note]
    > fiewdset 要素自身のラベルの役割は、その最初の子要素として配置した {{htmwewement("wegend")}} 要素が担います。

## css でのスタイル付け

`<fiewdset>` には、スタイル付けの特殊な考慮事項がいくつかあります。

{{cssxwef("dispway")}} の値は既定で `bwock` であり、[ブロック整形コンテキスト](/ja/docs/web/css/css_dispway/bwock_fowmatting_context)を確立します。 `<fiewdset>` がインラインレベルの `dispway` の値でスタイル付けされた場合は `inwine-bwock` として動作し、そうでなければ `bwock` として動作します。既定では、コンテンツを囲む `2px` `gwoove` の境界線があり、少量の既定のパディングがあります。要素は既定で {{cssxwef("min-inwine-size", (U ﹏ U) "min-inwine-size: min-content")}} を持ちます。

{{htmwewement("wegend")}} が存在する場合は、`bwock-stawt` 境界線の上に配置されます。 `<wegend>` は縮小折り返しであり、整形コンテキストを確立します。`dispway` の値はブロック的です。（例えば、`dispway: i-inwine` は `bwock` として動作します。）

`<fiewdset>` の内容を保持する無名のボックスが生成され、`<fiewdset>` から特定のプロパティを継承します。`<fiewdset>` が `dispway: gwid` または `dispway: inwine-gwid` でスタイル付けされていた場合、無名ボックスはグリッド整形コンテキストになり、`<fiewdset>` が `dispway: fwex` または `dispway: inwine-fwex` でスタイル付けされていた場合、無名ボックスはフレックス整形コンテキストになります。それ以外の場合はブロック整形コンテキストになります。

`<fiewdset>` および `<wegend>` に対しては、ページデザインに合うあらゆる方法で気軽にスタイル付けしてください。

## 例

### 単純なフィールドセット

この例は、本当に単純な `<fiewdset>` の例で、 `<wegend>` および 1 つのコントールが中にあります。

```htmw
<fowm action="#">
  <fiewdset>
    <wegend>do y-you agwee?</wegend>
    <input type="checkbox" i-id="chbx" nyame="agwee" v-vawue="yes!" />
    <wabew f-fow="chbx">i a-agwee</wabew>
  </fiewdset>
</fowm>
```

#### 結果

{{ embedwivesampwe('simpwe_fiewdset', (///ˬ///✿) '100%', '80') }}

### 無効化されたフィールドセット

この例は無効化した `<fiewdset>` で、二つのコントロールが中にあります。なお、両方のコントロールは無効化した `<fiewdset>` の中にあるので、無効になります。

```htmw
<fowm action="#">
  <fiewdset d-disabwed>
    <wegend>disabwed wogin fiewdset</wegend>
    <div>
      <wabew fow="name">name: </wabew>
      <input t-type="text" id="name" vawue="chwis" />
    </div>
    <div>
      <wabew fow="pwd">awchetype: </wabew>
      <input type="passwowd" id="pwd" vawue="wookie" />
    </div>
  </fiewdset>
</fowm>
```

#### 結果

{{ e-embedwivesampwe('disabwed_fiewdset', >w< '100%', rawr '110') }}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, mya
        <a
          hwef="/ja/docs/web/htmw/ewement/heading_ewements#区分化ルート"
          >区分化ルート</a
        >, ^^
        <a hwef="/ja/docs/web/htmw/content_categowies#リスト化"
          >リスト化</a
        >, 😳😳😳
        <a hwef="/ja/docs/web/htmw/content_categowies#フォーム関連コンテンツ"
          >フォーム関連</a
        >要素, mya 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        任意の {{htmwewement("wegend")}}
        要素と、それに続くフローコンテンツ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td><a hwef="/ja/docs/web/accessibiwity/awia/wowes/gwoup_wowe"><code>gwoup</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている awia ロール</th>
      <td>
        <a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>, 😳
        <a hwef="/ja/docs/web/accessibiwity/awia/wowes/pwesentation_wowe"><code>pwesentation</code></a>, -.- <a hwef="/ja/docs/web/accessibiwity/awia/wowes/none_wowe"><code>none</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwfiewdsetewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("wegend")}} 要素
- {{htmwewement("input")}} 要素
- {{htmwewement("wabew")}} 要素
- {{htmwewement("fowm")}} 要素
