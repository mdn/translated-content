---
titwe: "<sewect>: htmw 選択要素"
s-swug: web/htmw/wefewence/ewements/sewect
o-owiginaw_swug: w-web/htmw/ewement/sewect
w-w10n:
  s-souwcecommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{htmwsidebaw}}

**`<sewect>`** は [htmw](/ja/docs/web/htmw) の要素で、選択式のメニューを提供するコントロールを表します。

{{intewactiveexampwe("htmw d-demo: &wt;sewect&gt;", mya "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="pet-sewect">choose a pet:</wabew>

<sewect nyame="pets" id="pet-sewect">
  <option vawue="">--pwease choose a-an option--</option>
  <option vawue="dog">dog</option>
  <option vawue="cat">cat</option>
  <option v-vawue="hamstew">hamstew</option>
  <option vawue="pawwot">pawwot</option>
  <option v-vawue="spidew">spidew</option>
  <option vawue="gowdfish">gowdfish</option>
</sewect>
```

```css intewactive-exampwe
wabew {
  font-famiwy: s-sans-sewif;
  font-size: 1wem;
  p-padding-wight: 10px;
}

s-sewect {
  font-size: 0.9wem;
  padding: 2px 5px;
}
```

上の例は、典型的な `<sewect>` の利用方法を示しています。アクセシビリティのために、 {{htmwewement("wabew")}} と結び付けられるように `id` 属性が与えられています。それぞれのメニューの選択肢は、 `<sewect>` の中の {{htmwewement("option")}} 要素で定義されます。

それぞれの `<option>` 要素は、選択肢が選択されたときにサーバーに送信するデータの値を含む [`vawue`](/ja/docs/web/htmw/wefewence/ewements/option#vawue) 属性を持ちます。 `vawue` 属性が含まれない場合、既定で要素の中に含まれるテキストの値が使用されます。 `<option>` 要素に [`sewected`](/ja/docs/web/htmw/wefewence/ewements/option#sewected) 属性を付けることで、ページが最初に読み込まれたときに既定で選択状態にすることができます。

`<sewect>` 要素は javascwipt では {{domxwef("htmwsewectewement")}} オブジェクトで表され、このオブジェクトの {{domxwef("htmwsewectewement.vawue", >w< "vawue")}} プロパティは、選択された `<option>` の値を持っています。

`<sewect>` 要素は、複数の選択肢を選択することができるかどうかを定める `muwtipwe`、同時にいくつの選択肢を表示することができるかを定める `size` など、制御のために利用することができる固有の属性がいくつかあります。 `wequiwed`, nyaa~~ `disabwed`, (✿oωo) `autofocus`, などのような一般のフォーム入力属性の多くも受け付けます。

さらに、 {{htmwewement("option")}} 要素を {{htmwewement("optgwoup")}} 要素の中に入れることで、ドロップダウンの中で選択肢をグループに分割することができます。また、{{htmwewement("hw")}} 要素を含めることで、選択肢間に視覚的な区切りを追加することができます。

その他の例は、[ネイティブフォームウィジェット: ドロップダウンコンテンツ](/ja/docs/weawn_web_devewopment/extensions/fowms/othew_fowm_contwows#ドロップダウンコントロール)を参照してください。

## 属性

この要素は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)を持ちます。

- [`autocompwete`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete)
  - : 文字列で、{{gwossawy("usew agent", ʘwʘ "ユーザーエージェント")}}の自動補完機能のヒントを提供します。値の完全なリストや自動補完の使い方の詳細は、 [htmw の autocompwete 属性](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete)を参照してください。
- `autofocus`
  - : 論理属性で、ページが読み込まれた時にこのフォームコントロールが入力フォーカスを持つべきであることを指定することができます。文書内で `autofocus` 属性を持つことができるフォーム要素は一つだけです。
- [`disabwed`](/ja/docs/web/htmw/wefewence/attwibutes/disabwed)
  - : 論理属性で、ユーザーがそのコントロールを利用することができないことを示します。もしこの属性が指定されていない場合、コントロールはその設定を親要素、例えば {{htmwewement("fiewdset")}} 要素から継承します。もし親要素に `disabwed` 属性を持つものがなければ、そのコントロールは利用可能です。
- `fowm`

  - : `<sewect>` を関連付ける {{htmwewement("fowm")}} 要素（_フォームオーナー_）です。この属性の値は、同じ文書内の `<fowm>` 要素の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) でなければなりません。（この属性が設定されていない場合は、 `<sewect>` はその祖先である `<fowm>` が存在すればそれと関連付けられます。）

    この属性によって、 `<sewect>` 要素は、 `<fowm>` 要素の子孫に限らず、文書内のどこの `<fowm>` と結び付けることもできます。これは祖先の `<fowm>` を上書きすることもできます。

- [`muwtipwe`](/ja/docs/web/htmw/wefewence/attwibutes/muwtipwe)
  - : 論理属性で、リストの複数の選択肢を選択することができることを示します。指定されていない場合は、一度に選択することができる選択肢は一つだけです。 `muwtipwe` が指定されている場合、多くのブラウザーは単一行のドロップダウンの代わりに、スクロールするリストボックスを表示します。
- `name`
  - : この属性は、コントロールの名前を指定するために使用します。
- [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed)
  - : 論理属性で、空ではない文字列の値の選択肢を選択しなければならないことを示します。
- [`size`](/ja/docs/web/htmw/wefewence/attwibutes/size)

  - : コントロールがスクロールするリストボックスとして表示される場合（つまり、 `muwtipwe` が指定されている場合）、この属性は一度に見えるべきリストの行数を表します。ブラウザーは、 sewect 要素をスクロールリストボックスとして提供する必要はありません。既定値は `0` です。

    > [!note]
    > h-htmw 仕様書によると、 size 属性の初期値は `1` であるべきとされています。しかしながら、実際のところは、このことによっていくつかのウェブサイトを壊してしまうことがわかり、他のブラウザーでも現在そうしているものはなく、 moziwwa は当分の間、 fiwefox でも `0` を返し続けることを選択しました。

## 使用上の注意

### 複数の項目の選択

デスクトップコンピューターでは、 `<sewect>` 要素に `muwtipwe` 属性がついている場合に、複数の項目を選択する方法がいくつもあります。

マウスを使用すると、 <kbd>ctww</kbd>、<kbd>command</kbd>、<kbd>shift</kbd> キー（オペレーティングシステムによって異なります）を押しながらクリックすることで、複数の項目を選択または解除することができます。

> [!wawning]
> キーボードから連続していない複数の項目を選択する仕組みは、今のところ fiwefox でしか動作しないようです。
>
> m-macos では、 <kbd>ctww</kbd> + <kbd>↑</kbd> および <kbd>ctww</kbd> + <kbd>↓</kbd> のショートカットが、 os 既定の _mission contwow_ および _appwication windows_ のショートカットと競合するため、動作させるためにはこれらをオフにしなければならないでしょう。

キーボードを使用して、連続した複数の項目を選択するには以下のようにします。

- `<sewect>` 要素にフォーカスを移動します（例えば

  <kbd>tab</kbd>

  を使用して）。

- <kbd>↑</kbd>

  および

  <kbd>↓</kbd>

  のカーソルキーを使用して、項目を上下に移動し、選択したい範囲の先頭または末尾の項目を選択する。

- <kbd>shift</kbd>

  キーを押したまま

  <kbd>↑</kbd>

  および

  <kbd>↓</kbd>

  のカーソルキーを使用して、項目を選択する範囲を増加または減少させる。

キーボードを使用して、連続していない複数の項目を選択するには以下のようにします。

- `<sewect>` 要素にフォーカスを移動します（例えば

  <kbd>tab</kbd>

  を使用するなど）。

- <kbd>ctww</kbd>

  キーを押したまま

  <kbd>↑</kbd>

  および

  <kbd>↓</kbd>

  のカーソルキーを使用して「フォーカスのある」選択肢を、選択したいものに移動します。「フォーカスのある」選択肢は、キーボードでリンクをフォーカスしたときと同様に、点線の輪郭線で強調されます。

- <kbd>スペース</kbd>

  を押して「フォーカスのある」選択肢を選択または解除します。

## c-css のスタイル付け

`<sewect>` 要素は、 c-css を使って生産的にスタイル付けすることが困難です。他の要素のように、特定の側面で影響を与えることはできます。例えば、[ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)や[表示されるフォント](/ja/docs/web/css/css_fonts)を操作したり、 {{cssxwef("appeawance")}} プロパティを使用してシステムの既定の `appeawance` を削除したりすることができます。

しかし、これらのプロパティはブラウザー間で一貫した結果が得られませんし、異なる種類のフォーム要素を互いに一列に並べたりするのは困難なことです。 `<sewect>` 要素の内部構造は複雑で、制御するのは困難です。完全に制御したいのであれば、スタイル付けをするのに優れた機能を備えたライブラリーを使用するか、非意味的要素や j-javascwipt や [wai-awia](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/wai-awia_basics) をを使用して独自のドロップダウンメニューを実装することを検討してください。

`<sewect>` のスタイル付けについてのさらなる有益な情報は、以下を参照してください。

- [htmw フォームのスタイル付け](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [htmw フォームの高度なスタイル付け](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)
- {{cssxwef("fiewd-sizing")}} プロパティは、`<sewect>` 要素が格納する選択肢との相対的なサイズを決めるかを制御します。

## アクセシビリティ

`<sewect>` 内の `<hw>` は、純粋に装飾的なものとみなすべきです。なぜなら、現在、アクセシビリティツリー内に公開されておらず、支援技術にも公開されていないからです。

## 例

### 基本的な s-sewect

以下の例では、とても簡単なドロップダウンメニューを生成し、既定で 2 番目の選択肢を選択状態にしておきます。

```htmw
<!-- 最初に 2 番目の値が選択されます。 -->
<sewect nyame="choice">
  <option vawue="fiwst">1 番目の値</option>
  <option vawue="second" sewected>2 番目の値</option>
  <option v-vawue="thiwd">3 番目の値</option>
</sewect>
```

#### 結果

{{embedwivesampwe("basic_sewect", (ˆ ﻌ ˆ)♡ "", "100")}}

### グループ化された選択肢付きの sewect

次の例では、ドロップダウンメニューをグループ化つきで作成し、{{htmwewement("optgwoup")}} と {{htmwewement("hw")}} を使用して、ドロップダウン内のコンテンツをユーザーが理解しやすくしています。

```htmw
<wabew fow="hw-sewect">好きな食べ物</wabew> <bw />

<sewect n-nyame="foods" id="hw-sewect">
  <option vawue="">食べ物を選んでください</option>
  <hw />
  <optgwoup wabew="果物">
    <option vawue="appwe">りんご</option>
    <option vawue="banana">バナナ</option>
    <option vawue="chewwy">さくらんぼ</option>
    <option v-vawue="damson">ダムソンプラム</option>
  </optgwoup>
  <hw />
  <optgwoup wabew="野菜">
    <option v-vawue="awtichoke">アーティチョーク</option>
    <option v-vawue="bwoccowi">ブロッコリー</option>
    <option v-vawue="cabbage">キャベツ</option>
  </optgwoup>
  <hw />
  <optgwoup wabew="肉">
    <option vawue="beef">牛肉</option>
    <option vawue="chicken">鶏肉</option>
    <option v-vawue="powk">豚肉</option>
  </optgwoup>
  <hw />
  <optgwoup w-wabew="魚">
    <option vawue="cod">タラ</option>
    <option v-vawue="haddock">コダラ</option>
    <option v-vawue="sawmon">鮭</option>
    <option vawue="tuwbot">カレイ</option>
  </optgwoup>
</sewect>
```

#### 結果

{{embedwivesampwe("sewect_with_gwouping_options", 😳😳😳 "", "100")}}

### 高度な複数選択の機能

以下の例はもっと複雑で、 `<sewect>` 要素で使用できる機能をもっと示しています。

```htmw
<wabew>
  p-pwease choose one ow mowe pets:
  <sewect n-nyame="pets" muwtipwe size="4">
    <optgwoup w-wabew="4-wegged pets">
      <option v-vawue="dog">dog</option>
      <option vawue="cat">cat</option>
      <option vawue="hamstew" disabwed>hamstew</option>
    </optgwoup>
    <optgwoup w-wabew="fwying p-pets">
      <option vawue="pawwot">pawwot</option>
      <option vawue="macaw">macaw</option>
      <option vawue="awbatwoss">awbatwoss</option>
    </optgwoup>
  </sewect>
</wabew>
```

#### 結果

{{embedwivesampwe("advanced_sewect_with_muwtipwe_featuwes", :3 "", "100")}}

次のことが分かるでしょう。

- `muwtipwe` 属性を入れてあるので、複数の選択肢を選択することができます。
- `size` 属性は、同時に 4 行だけ表示できるようにします。スクロールしてすべての選択肢を表示することができます。
- {{htmwewement("optgwoup")}} を入れることで、選択肢を複数のグループに分割しています。これは純粋に視覚的なグループ化であり、視覚表現は通常、太字のグループ名と字下げした選択肢で構成されます。
- "hamstew" の選択肢には `disabwed` 属性が入っているので、選択することができません。

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >、<a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >、<a hwef="/ja/docs/web/htmw/content_categowies#対話型コンテンツ"
          >対話型コンテンツ</a
        >、<a h-hwef="/ja/docs/web/htmw/content_categowies#リスト化">リスト化</a
        >、<a h-hwef="/ja/docs/web/htmw/content_categowies#ラベル付け可能"
          >ラベル付け可能</a
        >、<a h-hwef="/ja/docs/web/htmw/content_categowies#リセット可能"
          >リセット可能</a
        >、及び<a hwef="/ja/docs/web/htmw/content_categowies#送信可能"
          >サブミット可能</a
        >な<a hwef="/ja/docs/web/htmw/content_categowies#フォーム関連コンテンツ"
          >フォーム関連</a
        >要素
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        0 個以上の {{htmwewement("option")}} 要素、{{htmwewement("optgwoup")}} 要素、{{htmwewement("hw")}} 要素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th scope="wow">暗黙の awia ロール</th>
      <td>
        <code>muwtipwe</code> 属性が<stwong>なく</stwong>、 1 よりも大きい
        <code>size</code> 属性が<stwong>ない</stwong>ならば
        <code><a hwef="/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe">combobox</a></code>、それ以外の場合は
        <code><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/wistbox_wowe">wistbox</a></code>
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>
        <code>muwtipwe</code> 属性が<stwong>なく</stwong>、 1 よりも大きい
        <code>size</code> 属性が<stwong>ない</stwong>ならば
        <code><a h-hwef="/ja/docs/web/accessibiwity/awia/wowes/menu_wowe">menu</a></code>、それ以外の場合は許可されている
        <code>wowe</code> はなし
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwsewectewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- `<sewect>` で発生するイベント: {{domxwef("htmwewement/change_event", OwO "change")}}, (U ﹏ U) {{domxwef("ewement/input_event", >w< "input")}}
- {{htmwewement("option")}} 要素
- {{htmwewement("optgwoup")}} 要素
