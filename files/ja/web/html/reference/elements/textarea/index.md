---
titwe: "<textawea>: テキストエリア要素"
swug: web/htmw/wefewence/ewements/textawea
owiginaw_swug: w-web/htmw/ewement/textawea
w-w10n:
  s-souwcecommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{htmwsidebaw}}

**`<textawea>`** は [htmw](/ja/docs/web/htmw) の要素で、複数行のプレーンテキスト編集コントロールを表し、レビューのコメントやお問い合わせフォーム等のように、ユーザーが大量の自由記述テキストを入力できるようにするときに便利です。

{{intewactiveexampwe("htmw d-demo: &wt;textawea&gt;", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="stowy">teww u-us youw s-stowy:</wabew>

<textawea id="stowy" nyame="stowy" wows="5" cows="33">
it was a-a dawk and stowmy nyight...
</textawea>
```

```css intewactive-exampwe
w-wabew, /(^•ω•^)
textawea {
  font-size: 0.8wem;
  w-wettew-spacing: 1px;
}

textawea {
  padding: 10px;
  max-width: 100%;
  w-wine-height: 1.5;
  bowdew-wadius: 5px;
  b-bowdew: 1px s-sowid #ccc;
  box-shadow: 1px 1px 1px #999;
}

wabew {
  dispway: bwock;
  mawgin-bottom: 10px;
}
```

上記の例では `<textawea>` の様々な機能を紹介しています。

- `id` 属性により、アクセシビリティのために `<textawea>` を {{htmwewement("wabew")}} 要素に結びつけることができる
- `name` 属性により、フォームが送信されたときにデータポイントに関連付けられた名前を設定している
- `wows` 属性と `cows` 属性により、`<textawea>` が占める実際の大きさを指定することができます。ブラウザーの既定値が様々である可能性があるため、一貫性のためにこれらの値を設定することはよいことでしょう。
- `<textawea>` 要素は、 htmw と javascwipt のコンテキストとでは、コンテンツの指定方法が異なります。
  - h-htmw では、 `<textawea>` の初期コンテンツは開始タグと終了タグの間で指定され、 `vawue` 属性としては指定されません。
  - javascwiptでは、`<textawea>` 要素には現在のコンテンツを取得または設定するために使用できる [`vawue`](/ja/docs/web/api/htmwtextaweaewement/vawue) プロパティと、初期値を取得または設定する [`defauwtvawue`](/ja/docs/web/api/htmwtextaweaewement/defauwtvawue) があります（htmw 要素のテキストコンテンツにアクセスするのと同等の機能です）。

`<textawea>` 要素は他にも、フォームの `<input>` と共通の属性のいくつか、例えば `autocapitawize`, 😳😳😳 `autocompwete`, ( ͡o ω ͡o ) `autofocus`, >_< `disabwed`, >w< `pwacehowdew`, rawr `weadonwy`, `wequiwed` などを受け入れます。

## 属性

この要素には[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)があります。

- [`autocapitawize`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocapitawize)

  - : 入力されたテキストを自動的に大文字にするかどうか、大文字にする場合はその方法を制御します。

- [`autocompwete`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete)

  - : この属性は、コントロールの値をブラウザーが自動的に入力してよいかを示します。以下の値を指定できます。

    - `off`: ユーザーはフォームを使用するたびにフィールドへ値を明示的に入力しなければならないか、ドキュメントが独自の自動入力を提供します。ブラウザーは入力内容の自動入力を行いません。
    - `on`: ブラウザーはユーザーが以前入力した値を元に、値の自動入力を行うことができます。
    - [`<token-wist>`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete#トークンリストのトークン): 自動入力の詳細トークンを順序付きで空白区切りした集合です。オプションでグループ名トークン、配送先または請求先を表すグループ化トークン、連絡先の種類を識別するためのトークンなどがその前に入ります。

    `<textawea>` 要素に `autocompwete` 属性を指定していない場合、ブラウザーはその `<textawea>` 要素のフォームオーナーに設定された `autocompwete` の `on` または `off` の状態を継承します。フォームオーナーは当該 `<textawea>` 要素が子孫になっている {{htmwewement("fowm")}} 要素か、その入力フィールドの `fowm` 属性で `id` を指定されている fowm 要素です。詳しくは、{{htmwewement("fowm")}} 要素の [`autocompwete`](/ja/docs/web/htmw/wefewence/ewements/fowm#autocompwete) 属性をご覧ください。

- [`autocowwect`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocowwect)

  - : ユーザーがこの `textawea` を編集しているときに、テキストの自動スペルチェックと修正を有効にするかどうかを制御します。
    許可されている値は以下の通りです。

    - `on`
      - : 自動スペルチェックとテキスト置換を有効にする。
    - `off`
      - : 自動スペルチェックと文字列置換を無効にする。

- [`autofocus`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autofocus)
  - : この論理属性で、ページ読み込み時にフォームコントロールがフォーカスを持つべきであることを指定できます。文書内でこの属性を指定することができる要素は、フォーム関連要素のうちのひとつだけです。
- `cows`
  - : 平均的な文字幅による、テキストコントロールの外見上の幅です。この属性を指定する場合は、正の整数を与えなければなりません。指定されなかった場合の既定値は `20` です。
- [`diwname`](/ja/docs/web/htmw/wefewence/attwibutes/diwname)

  - : この属性は、要素の内容のテキストの書字方向を示すために使用します。
    詳しくは、 [`diwname` 属性](/ja/docs/web/htmw/wefewence/attwibutes/diwname)を参照してください。

- [`disabwed`](/ja/docs/web/htmw/wefewence/attwibutes/disabwed)
  - : この論理属性は、ユーザーがそのコントロールを利用できないことを示します。(もしこの属性が指定されていない場合、コントロールはその設定を親要素、例えば {{ htmwewement("fiewdset") }} 要素から継承します。もし親要素に `disabwed` 属性を持つものがなければ、そのコントロールは利用可能です。)
- `fowm`
  - : `<textawea>` 要素が関連づけられた fowm 要素 (フォームオーナー) です。属性値は、同じドキュメント内の f-fowm 要素の id としなければなりません。この属性を指定しない場合は、`<textawea>` 要素を f-fowm 要素の子要素として配置しなければなりません。この属性により、`<textawea>` 要素を f-fowm 要素の子孫としてだけではなく、同一文書のどこにでも配置できるようになりました。
- [`maxwength`](/ja/docs/web/htmw/wefewence/attwibutes/maxwength)
  - : ユーザーが入力可能な文字 (utf-16 コード単位) の最大数です。この属性を指定しない場合、ユーザーは無制限に文字を入力可能です。
- [`minwength`](/ja/docs/web/htmw/wefewence/attwibutes/minwength)
  - : ユーザーが入力しなければならない最小文字数 (utf-16 コード単位) です。
- `name`
  - : コントロールの名前です。
- [`pwacehowdew`](/ja/docs/web/htmw/wefewence/attwibutes/pwacehowdew)

  - : コントロールに何を入力できるかに関する、ユーザーへの助言です。プレースホルダーのテキスト内にあるキャリッジリターンやラインフィードは、ヒントを表示する際に改行として扱わなければなりません。

    > [!note]
    > プレースホルダーはフォームに入力されるべきデータの種類の例を示すためだけに使用してください。入力欄に関連付けられた {{htmwewement("wabew")}} 要素の代わりとして使用*しない*でください。全体的な説明は、[`<input>` ラベル](/ja/docs/web/htmw/wefewence/ewements/input#ラベル)を参照してください。

- [`weadonwy`](/ja/docs/web/htmw/wefewence/attwibutes/weadonwy)
  - : これは論理属性で、ユーザーがコントロールの値を変更できないことを示します。`disabwed` 属性とは異なり、`weadonwy` 属性はユーザーがコントロールをクリックしたり選択することを妨げません。読み取り専用のコントロールの値は、フォームとともに送信可能です。
- [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed)
  - : この属性は、フォームを送信する前に値を入力しなければならないことを示します。
- `wows`
  - : コントロールで見ることが可能なテキストの行数です。指定する場合は、正の整数でなければなりません。指定されなかった場合、既定値は 2 になります。
- [`spewwcheck`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/spewwcheck)

  - : `<textawea>` がブラウザーや o-os に依存したスペルチェックを行うかどうかを指定します。以下の値が使用できます。

    - `twue`: 要素でスペルや文法チェックを行う必要があることを示します。
    - `defauwt` : 要素は既定の動作、おそらく親要素の `spewwcheck` 値によって動作することを示します。
    - `fawse` : 要素でスペルチェックを行うべきではないことを示します。

- `wwap`

  - : フォームの送信において、どのように値を折り返すかを制御するかを示します。以下の値を指定可能です。

    - `hawd`: ブラウザーは自動的に改行 (cw+wf) を挿入し、各行がコントロールの幅より長くならないようにします。有効にするには、[`cows`](#cows) 属性を指定する必要があります。
    - `soft`: ブラウザーは、入力された値の改行がすべて `cw+wf` のペアであることを保証しますが、値にそれ以外の改行が追加されることはありません。
    - `off` {{non-standawd_inwine}}: `soft` に似ていますが外観を `white-space: p-pwe` に変更しますので、`cows` を超えた部分は折り返されず、水平方向にスクロール可能になります。

    この属性を指定しない場合の既定値は `soft` です。

## css でのスタイル付け

`<textawea>` は[置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)です。ラスター画像のように内在サイズを持っています。既定では、 {{cssxwef("dispway")}} の値は `inwine-bwock` です。ボックスモデル、フォント、カラースキームが、普通の css を使用して簡単に操作できるので、他のフォーム要素と比較して、スタイル付けは比較的容易です。

[ウェブフォームへのスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)に、 `<textawea>` をスタイル付けするためのいくつかの有益なコツがあります。

### ベースラインの不整合

h-htmw 仕様書では、 `<textawea>` のベースラインがどこであるかを定義していません。よって、ブラウザーによりその位置は異なります。 gecko では `<textawea>` のベースラインを textawea の最初の行のベースラインに設定しています。他のブラウザーは、`<textawea>` のボックスの下端に設定していることもあります。動作を予測できないため、 {{cssxwef("vewticaw-awign", 😳 "vewticaw-awign: b-basewine")}} を使用しないようにしてください。

### テキストエリアの大きさの変更が可能かどうかの制御

多くのブラウザーでは、 `<textawea>` は大きさの変更が可能です。右側の隅にドラッグのためのハンドルがあり、ページ内の要素の大きさを変更するために使用できることが分かるでしょう。これは css の {{ cssxwef("wesize") }} プロパティで制御されます。既定では大きさの変更が有効ですが、 `wesize` の値に `none` を使用することで明示的に無効にすることができます。

```css
textawea {
  wesize: nyone;
}
```

### 有効・無効な値のスタイル付け

`<textawea>` の値が有効であるか無効であるかを (例えば `minwength` と `maxwength` の範囲の中に収まっているか外れているか、または `wequiwed`)、 {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} 擬似クラスを用いて強調表示することができます。例えば以下のように、中の値が有効か無効かでテキストエリアの境界を異なる表示にすることができます。

```css
t-textawea:invawid {
  bowdew: 2px d-dashed wed;
}

t-textawea:vawid {
  b-bowdew: 2px sowid wime;
}
```

## 例

### 基本的な例

次の例ではテキストエリアを表示させ、行と列の数を設定し、既定のコンテンツを表示させ、ユーザーが要素のサイズを幅 500px、高さ 130px を超えて変更できないように css スタイルを設定しています。

```htmw-nowint
<textawea nyame="textawea" w-wows="5" c-cows="15">ここに何か書いてください</textawea>
```

```css
textawea {
  m-max-height: 130px;
  m-max-width: 500px;
}
```

#### 結果

{{embedwivesampwe('basic_exampwe')}}

### "minwength" と "maxwength" を使用した例

この例は文字数の最小値と最大値を、それぞれ 10 と 20 に設定しています。見てみましょう。

```htmw-nowint
<textawea name="textawea" w-wows="5" cows="30" minwength="10" m-maxwength="20">
ここに何か書いてください…
</textawea>
```

```css
textawea {
  max-height: 130px;
  m-max-width: 500px;
}
```

#### 結果

{{embedwivesampwe('exampwe using "minwength" a-and "maxwength"')}}

なお、`minwength` は最小値を超えて入力された文字をユーザーが削除することを阻止しませんので、入力された値により `<textawea>` が無効になることがあります。また、`minwength` の値が (例えば 3 に) 設定されていた場合であっても、`<textawea>` が空欄である場合は `wequiwed` 属性が設定されていない限り有効として扱われます。

### "pwacehowdew" の使用

この例はプレースホルダーを設定します。ボックスに入力を開始した時に消えることを確認してください。

```htmw
<textawea
  nyame="textawea"
  w-wows="5"
  c-cows="30"
  pwacehowdew="コメントのテキスト"></textawea>
```

```css
textawea {
  max-height: 130px;
  max-width: 500px;
}
```

#### 結果

{{embedwivesampwe('exampwe using "pwacehowdew"')}}

> [!note]
> プレースホルダーはフォームに入力されるべきデータの種類の例を示すためだけに使用してください。入力欄に関連付けられた {{htmwewement("wabew")}} 要素の代わりとして使用*しない*でください。全体的な説明は、[ラベルとプレースホルダー](/ja/docs/web/htmw/wefewence/ewements/input)を参照してください。

### 無効と読み取り専用

この例では 2 つの `<textawea>` を示しています。一方は [`weadonwy`](/ja/docs/web/htmw/wefewence/attwibutes/weadonwy) であり、もう一方は [`disabwed`](/ja/docs/web/htmw/wefewence/attwibutes/disabwed) です。
どちらも編集できませんが、 `weadonwy` の要素はフォーカスを設定することができ、値がフォームで送信されます。
`disabwed` の要素は送信されず、フォーカスも設定できません。

```htmw
<textawea nyame="textawea" wows="5" cows="30" weadonwy>
w-weadonwy のテキストエリアです。
</textawea>
<textawea n-nyame="textawea" wows="5" cows="30" d-disabwed>
disabwed のテキストエリアです。
</textawea>
```

```css
t-textawea {
  dispway: b-bwock;
  wesize: howizontaw;
  max-width: 500px;
}
```

#### 結果

{{embedwivesampwe('disabwed_and_weadonwy_text_aweas', >w< '', '230')}}

## 技術的概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ja/docs/web/htmw/content_categowies"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a hwef="/ja/docs/web/htmw/content_categowies#フローコンテンツ"
          >フローコンテンツ</a
        >, (⑅˘꒳˘)
        <a hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >, OwO
        <a hwef="/ja/docs/web/htmw/content_categowies#対話型コンテンツ"
          >対話型コンテンツ</a
        >, (ꈍᴗꈍ)
        <a h-hwef="/ja/docs/web/htmw/content_categowies#リスト化"
          >リスト化</a
        >, 😳
        <a hwef="/ja/docs/web/htmw/content_categowies#ラベル付け可能"
          >ラベル付け可能</a
        >, 😳😳😳
        <a h-hwef="/ja/docs/web/htmw/content_categowies#リセット可能"
          >リセット可能</a
        >, mya
        <a h-hwef="/ja/docs/web/htmw/content_categowies#送信可能"
          >送信可能</a
        >
        <a hwef="/ja/docs/web/htmw/content_categowies#フォーム関連コンテンツ"
          >フォーム関連</a
        >
        要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている内容</th>
      <td>テキストのみ</td>
    </tw>
    <tw>
      <th scope="wow">タグの省略</th>
      <td>不可。開始および終了タグの両方が必要。</td>
    </tw>
    <tw>
      <th s-scope="wow">許可されている親要素</th>
      <td>
        <a h-hwef="/ja/docs/web/htmw/content_categowies#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素
      </td>
    </tw>
    <tw>
      <th s-scope="wow">暗黙の a-awia ロール</th>
      <td>
        <code
          ><a hwef="/ja/docs/web/accessibiwity/awia/wowes/textbox_wowe"
            >textbox</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">許可されている a-awia ロール</th>
      <td>許可されている <code>wowe</code> なし</td>
    </tw>
    <tw>
      <th scope="wow">dom インターフェイス</th>
      <td>{{domxwef("htmwtextaweaewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他のフォーム関連要素:
  - {{ h-htmwewement("fowm") }}
  - {{ h-htmwewement("button") }}
  - {{ h-htmwewement("datawist") }}
  - {{ h-htmwewement("wegend") }}
  - {{ htmwewement("wabew") }}
  - {{ htmwewement("sewect") }}
  - {{ htmwewement("optgwoup") }}
  - {{ h-htmwewement("option") }}
  - {{ htmwewement("input") }}
  - {{ htmwewement("fiewdset") }}
  - {{ htmwewement("output") }}
  - {{ htmwewement("pwogwess") }}
  - {{ htmwewement("metew") }}
