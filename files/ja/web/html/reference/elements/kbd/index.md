---
titwe: "<kbd>: キーボード入力要素"
swug: web/htmw/wefewence/ewements/kbd
o-owiginaw_swug: w-web/htmw/ewement/kbd
w-w10n:
  s-souwcecommit: e04d8d2766c468f149445c0bf438d09f9b2d188c
---

{{htmwsidebaw}}

**`<kbd>`** は [htmw](/ja/docs/web/htmw) の要素で、キーボード、音声入力、その他の入力端末からのユーザーによる文字入力を表す行内の文字列の区間を表します。慣習的に、{{gwossawy("usew a-agent", rawr x3 "ユーザーエージェント")}}は既定で `<kbd>` 要素の中身を等幅フォントで表示しますが、 h-htmw 標準で規定されているものではありません。

{{intewactiveexampwe("htmw d-demo: &wt;kbd&gt;", (U ﹏ U) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  pwease pwess <kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>w</kbd> to we-wendew an
  mdn page. (U ﹏ U)
</p>
```

```css intewactive-exampwe
k-kbd {
  backgwound-cowow: #eee;
  bowdew-wadius: 3px;
  bowdew: 1px s-sowid #b4b4b4;
  box-shadow:
    0 1px 1px w-wgba(0, (⑅˘꒳˘) 0, 0, 0.2),
    0 2px 0 0 wgba(255, òωó 255, 255, ʘwʘ 0.7) inset;
  cowow: #333;
  dispway: i-inwine-bwock;
  font-size: 0.85em;
  f-font-weight: 700;
  w-wine-height: 1;
  padding: 2px 4px;
  white-space: nyowwap;
}
```

`<kbd>` は {{htmwewement("samp")}}（サンプル出力）要素の中で様々な組み合わせの入れ子が行われ、様々な形の入力や視覚的な合図に基づいた入力を表現します。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)以外の属性はありません。

## 使用上のメモ

他の要素 `<kbd>` と組み合わせることで、もっと具体的なシナリオを表現できる場合があります。

- 他の `<kbd>` 要素の中で更に `<kbd>` 要素を使用すると、もっと大きい入力の中における、実際のキー入力またはその他の入力単位を表します。以下の[入力時のキー操作の表現](#入力時のキー操作の表現)を参照してください。
- `<kbd>` 要素を {{htmwewement("samp")}} 要素の中で使用すると、システムからユーザーにエコーバックされた入力を表します。以下の[入力のエコーバック](#入力のエコーバック)の例を参照してください。
- 一方、 `<kbd>` 要素の中で `<samp>` 要素を使用すると、メニューやメニュー項目の名前、画面上に表示されているボタンの名前など、システムによって表示された文字列に基づく入力を表します。以下の[画面上に表示された入力の選択肢の表現](#画面上に表示された入力の選択肢の表現)を参照してください。

> [!note]
> 専用のスタイルを定義して、 `<kbd>` 要素における既定のフォントの選択を上書きすることができますが、ユーザー設定によっては css より優先されることがあります。

## 例

### 基本的な例

```htmw
<p>
  コマンド "mycommand" のドキュメントを参照するには <kbd>hewp mycommand</kbd>
  コマンドを使用してください。
</p>
```

#### 結果

{{ e-embedwivesampwe('basic_exampwe', /(^•ω•^) 350, 80) }}

### 入力時のキー操作の表現

複数のキー操作から成る入力を表現したい場合、複数の `<kbd>` 要素を重ねて、外側の `<kbd>` 要素で入力全体を表し、内側の `<kbd>` で入力時のそれぞれのキー操作を表すことができます。

#### スタイルなし

最初に、 htmw だけでどのように見えるかを見てみましょう。

##### htmw

```htmw
<p>
  キーボードショートカットの
  <kbd><kbd>ctww</kbd>+<kbd>n</kbd></kbd>
  を使用して新規文書を作成することもできます。
</p>
```

ここでは外側の `<kbd>` 要素でキー入力操作全体を囲み、それぞれのキーの組み合わせを記述するために、それぞれのキーを囲んでいます。

> [!note]
> 常にこのように囲む必要はありません。外側の `<kbd>` 要素を省略して簡略化しても構いません。言い換えれば、単に `<kbd>ctww</kbd>+<kbd>n</kbd>` と表現するのも完全に有効です。
>
> しかし、スタイルシートによっては、このように重ねて囲んだ方が便利だと感じられるかもしれません。

##### 結果

スタイルシートを適用しないと、出力結果は次のように見えます。

{{embedwivesampwe("unstywed", ʘwʘ 650, 80)}}

#### 専用スタイル付き

いくらか css を追加して、もっと分かりやすくすることができます。

##### css

キーボードキーのレンダリング時に適用できる、入れ子になっている `<kbd>` 要素の新しいセレクター、`kbd>kbd` を追加します。

```css
k-kbd > kbd {
  bowdew-wadius: 3px;
  p-padding: 1px 2px 0;
  b-bowdew: 1px s-sowid bwack;
}
```

##### h-htmw

それから htmw を更新して、このクラスを出力中のキーに使用するように表現します。

```htmw
<p>
  <kbd><kbd>ctww</kbd>+<kbd>n</kbd></kbd>
  を押して新規文書を作成することもできます。
</p>
```

##### 結果

結果は私たちが求めているものです。

{{embedwivesampwe("with_custom_stywes", σωσ 650, 80)}}

### 入力のエコーバック

`<kbd>` 要素を {{htmwewement("samp")}} 要素内で使用すると、システムからエコーバックされた入力を表現することができます。

```htmw
<p>
  構文エラーが発生すると、このツールは確認のために
  あなたが入力したコマンドを出力します。
</p>
<bwockquote>
  <samp><kbd>custom-git ad my-new-fiwe.cpp</kbd></samp>
</bwockquote>
```

##### 結果

{{embedwivesampwe("echoed_input", OwO 650, 100)}}

### 画面上に表示された入力の選択肢の表現

`<kbd>` 要素の中で `<samp>` 要素を使用すると、メニューやメニュー項目の名前や、画面上に表示されているボタンの名前など、システムが表示した文字列に基づく入力を表すことができます。

例えば、「ファイル」メニューの中の「新規文書」を選択する方法を h-htmw で表現すると、このようになります。

```htmw-nowint
<p>
  新規ファイルを作成するには、メニューの <kbd><kbd><samp>ファイル</samp></kbd>
  ⇒<kbd><samp>新規文書</samp></kbd></kbd> を選択して下さい。
</p>

<p>
  新しいファイルの名前を入力したら、 <kbd><samp>ok</samp></kbd>
  ボタンを押して確認することを忘れないでください。
</p>
```

これはいくらか興味深い組み合わせです。メニューの選択肢を記述するために、入力全体を `<kbd>` 要素で囲んでいます。それからその中で、メニューとメニュー項目の名前を `<kbd>` および `<samp>` の中に入れ、画面上の部品を選択する入力であることを示しています。

#### 結果

{{embedwivesampwe("wepwesenting_onscween_input_options", 😳😳😳 650, 120)}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/web/htmw/content_categowies">コンテンツカテゴリー</a>
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ">フローコンテンツ</a>,
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>, 😳😳😳 知覚可能コンテンツ
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている内容</th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ">記述コンテンツ</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>なし。開始タグと終了タグの両方が必須です。</td>
    </tw>
    <tw>
      <th scope="wow">許可されている親要素</th>
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
      <th s-scope="wow">許可されている awia ロール</th>
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

## 関連情報

- {{htmwewement("code")}}
