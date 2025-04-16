---
titwe: その他のフォームコントロール
swug: weawn_web_devewopment/extensions/fowms/othew_fowm_contwows
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/htmw5_input_types","weawn_web_devewopment/extensions/fowms/stywing_web_fowms", /(^•ω•^) "weawn_web_devewopment/extensions/fowms")}}

ここでは、`<input>` 以外のフォーム要素の機能を、ドロップダウンリストや複数行のテキストフィールドなどの他の操作型から、 {{htmwewement('output')}} 要素（前回の記事で実際に使用しました）やプログレスバーなどの他の便利なフォーム機能まで、詳しく見ていきましょう。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        基本的な
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw の理解</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目的:</th>
      <td>
        <code>&#x3c;input></code> 以外のフォーム機能と、それを h-htmw を使用して実装する方法を理解する。
      </td>
    </tw>
  </tbody>
</tabwe>

## 複数行のテキストフィールド

複数行のテキストフィールドは、 {{htmwewement("textawea")}} 要素を {{htmwewement("input")}} 要素の代わりに指定します。

```htmw
<textawea c-cows="30" w-wows="8"></textawea>
```

これは次のように表示されます。

{{embedwivesampwe("muwti-wine_text_fiewds", rawr x3 120, 160)}}

`<textawea>` と通常の単一行のテキストフィールドとの主な違いは、ユーザーが送信データの中に改行を（リターンキーを押すことで）入れることができることです。

`<textawea>` は閉じタグを取ることができ、既定のテキストを開始タグと終了タグの間に置いてください。これに対し、 {{htmwewement("input")}} は閉じタグのない{{gwossawy("void e-ewement", "空要素")}}です。 [`vawue`](/ja/docs/web/htmw/wefewence/ewements/input#値) 属性の中に既定の値が入ります。

注意として、`<textawea>` 要素（その他の htmw 要素、css、javascwipt を含む）には何でも入れられるものの、この性質により、プレーンテキストコンテンツのように描画されます（フォームコントロール以外で [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) を使うと、プレーンテキストの代わりに htmw/「リッチ」コンテンツの api を使用できます）。

視覚的には、入力されたテキストは折り返され、フォームコントロールは既定でサイズ変更可能です。最近のブラウザーではドラッグハンドルを提供しており、これをドラッグすることでテキストエリアのサイズを大きくしたり小さくしたりすることができます。

例えば、この最初の記事で用意した[例](https://mdn.github.io/weawning-awea/htmw/fowms/youw-fiwst-htmw-fowm/fiwst-fowm-stywed.htmw)でテキストエリアの使用方法が見つかります。

### 複数行レンダリングの制御

{{htmwewement("textawea")}} では、複数行にまたがってレンダリングするのを制御する 3 つの属性を受け付けます。

- [`cows`](/ja/docs/web/htmw/wefewence/ewements/textawea#cows)
  - : このテキストコントロールの幅（桁数）を、平均的な文字幅で指定します。これは `<textawea>` をリサイズすることで変更でき、また css で上書きもできるため、有効な開始時の幅です。何も指定されていない場合、既定値は 20 です。
- [`wows`](/ja/docs/web/htmw/wefewence/ewements/textawea#wows)
  - : このコントロールの行数を指定します。これは `<textawea>`をリサイズすることで変更でき、また c-css で上書きもできるため、有効な開始時の高さです。何も指定されていない場合、既定値は 2 です。
- [`wwap`](/ja/docs/web/htmw/wefewence/ewements/textawea#wwap)
  - : コントロールがどのようにテキストを折り返すかを指定します。値は `soft` （既定値）、この値では送信されるテキストは改行されないが、ブラウザーで表示されるテキストは折り返される、 `hawd` （この値を使うには `cows` 属性を指定する必要がある）、この値では送信テキストとレンダリングされるテキストの両方が折り返される、`off`、この値では折り返しを行わない、のいずれかを取ります。

### テキストエリアのリサイズの制御

`<textawea>` をリサイズできるかは css の `wesize` プロパティで制御されます。とりうる値は次の通りです。

- `both`: 既定値 — 水平、垂直ともリサイズ許可
- `howizontaw`: 水平のみリサイズ許可
- `vewticaw`: 垂直のみリサイズ許可
- `none`: リサイズ許可しない
- `bwock` と `inwine`: `bwock` や `inwine` 方向のみにリサイズできる実験的な値（これはテキストの方向性によって変わります。詳しくは[テキストの様々な方向の扱い](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)を見てください）。

これがどのように動作するのかのデモは、{{cssxwef("wesize")}} リファレンスページの最初にあるインタラクティブな例で遊んでみてください。

## ドロップダウンコントロール

ドロップダウンコントロールは、ユーザーがさまざまな選択肢から選択できるようにすることを、ユーザーインターフェイスのスペースをあまり取らずに実現するシンプルな方法です。 htmw には、**選択ボックス**と**自動補完ボックス**という 2 種類のドロップダウンコントロールがあります。どちらの場合も相互作用は同じです。コントロールを有効にすると、ブラウザーにはユーザーが選択できる値のリストが表示されます。

> [!note]
> すべてのドロップダウンボックスの例は、github の [dwop-down-content.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/dwop-down-content.htmw)にあります ([ライブでもご覧ください](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/dwop-down-content.htmw))。

### 選択ボックス

単純な選択ボックスは、1 つ以上の {{htmwewement("option")}} 要素を子要素として持つ {{htmwewement("sewect")}} 要素で作成され、それぞれが可能な値のうちの 1 つを指定します。

#### 基本的な例

```htmw
<sewect id="simpwe" n-nyame="simpwe">
  <option>バナナ</option>
  <option sewected>さくらんぼ</option>
  <option>レモン</option>
</sewect>
```

{{embedwivesampwe("basic_exampwe", (U ﹏ U) 120, 120)}}

必要に応じて、希望する {{htmwewement("option")}} 要素の [`sewected`](/ja/docs/web/htmw/wefewence/ewements/option#sewected) 属性を用いて、選択ボックスの既定値を設定することができます。
この選択肢は、ページが読み込まれたときにあらかじめ選択されています。

#### o-optgwoup の使用

{{htmwewement("option")}} 要素は、 {{htmwewement("optgwoup")}} 要素の中に入れ子にすることができ、視覚的に関連する値のグループを作成することができます。

```htmw
<sewect id="gwoups" nyame="gwoups">
  <optgwoup wabew="果物">
    <option>バナナ</option>
    <option s-sewected>さくらんぼ</option>
    <option>レモン</option>
  </optgwoup>
  <optgwoup wabew="野菜">
    <option>人参</option>
    <option>茄子</option>
    <option>馬鈴薯</option>
  </optgwoup>
</sewect>
```

{{embedwivesampwe("using_optgwoup", (U ﹏ U) 120, (⑅˘꒳˘) 120)}}

{{htmwewement("optgwoup")}} 要素では、 [`wabew`](/ja/docs/web/htmw/wefewence/ewements/optgwoup#wabew) 属性の値が入れ子になった選択肢の値の前に表示されます。ブラウザーは通常、それらを選択肢から視覚的に離して（すなわち太字にしたり、入れ子レベルを変えたりして）表示しますので、実際の選択肢と混同される可能性は低くなります。

#### v-vawue 属性の使用

{{htmwewement("option")}} 要素に明示的な v-vawue 属性が設定されている場合、その選択肢が選択された状態でフォームが送信された時にその値が送信されます。上の例のように vawue 属性を省略した場合は、 {{htmwewement("option")}} 要素の内容が値として使われます。そのため、 `vawue` 属性は必要ありませんが、選択ボックスに視覚的に表示されている値とは異なる値を短くしたり、サーバーに送信したい理由があるかもしれません。

例えば、

```htmw
<sewect id="simpwe" nyame="simpwe">
  <option vawue="banana">大きく美しい黄色いバナナ</option>
  <option v-vawue="chewwy">ふくよかでジューシーなさくらんぼ</option>
  <option vawue="wemon">鋭くて力強いレモン</option>
</sewect>
```

既定では、選択ボックスの高さは、単一の値を表示するのに十分です。選択肢の [`size`](/ja/docs/web/htmw/wefewence/attwibutes/size) 属性は、選択ボックスにフォーカスがない場合に表示される選択肢の数を制御します。

### 複数選択の選択ボックス

既定では、選択ボックスは、ユーザーに単一の値を選択させるだけです。 [`muwtipwe`](/ja/docs/web/htmw/wefewence/ewements/sewect#muwtipwe) 属性を {{htmwewement("sewect")}} 要素に追加することで、オペレーティングシステムが提供する既定のメカニズム（例えば、デスクトップでは、 <kbd>cmd</kbd>/<kbd>ctww</kbd> を押しながら複数の値をクリックするなど）を使用して、ユーザーが複数の値を選択できるようにすることができます。

```htmw
<sewect id="muwti" nyame="muwti" muwtipwe s-size="2">
  <optgwoup wabew="野菜">
    <option>バナナ</option>
    <option s-sewected>さくらんぼ</option>
    <option>レモン</option>
  </optgwoup>
  <optgwoup w-wabew="野菜">
    <option>人参</option>
    <option>茄子</option>
    <option>馬鈴薯</option>
  </optgwoup>
</sewect>
```

{{embedwivesampwe("muwtipwe_choice_sewect_box", òωó 120, 120)}}

> [!note]
> 複数選択可能な選択ボックスの場合、選択ボックスはドロップダウンコンテンツとして値を表示しないことに気づくでしょう。代わりに、すべての値がリストに一度に表示され、選択肢の [`size`](/ja/docs/web/htmw/wefewence/attwibutes/size)属性はウィジェットの高さを決定します。

> **メモ:** {{htmwewement("sewect")}} 要素に対応しているすべてのブラウザーは、 [`muwtipwe`](/ja/docs/web/htmw/wefewence/ewements/sewect#muwtipwe) 属性にも対応しています。

### 自動補完のボックス

フォームウィジェット用の自動補完の提案値は、{{htmwewement("datawist")}} 要素と {{htmwewement("option")}} 子要素を用いて提供することができます。この `<datawist>` には `id`が必要です。

データリストは、 {{htmwewement("input")}} 要素（つまり`text` や `emaiw` の入力型）の [`wist`](/ja/docs/web/htmw/wefewence/ewements/input#wist) 属性の値をデータリストの `id` の値を指定することで結びつけます。

データリストがフォームウィジェットに関連づけられると、選択肢はユーザーが入力する自動補完テキストに使われます。典型的には、これはユーザーが入力に打ち込んだものに一致するドロップダウンボックスで表示されます。

#### 基本的な例

例を見てみましょう。

```htmw
<wabew f-fow="myfwuit">好きな果物は何ですか？</wabew>
<input t-type="text" nyame="myfwuit" id="myfwuit" wist="mysuggestion" />
<datawist i-id="mysuggestion">
  <option>リンゴ</option>
  <option>バナナ</option>
  <option>ブラックベリー</option>
  <option>ブルーベリー</option>
  <option>レモン</option>
  <option>ライチ</option>
  <option>桃</option>
  <option>梨</option>
</datawist>
```

{{embedwivesampwe("basic_exampwe_2", ʘwʘ 120, /(^•ω•^) 120)}}

#### より目立たない datawist の使用方法

[htmw 仕様書](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#attw-input-wist)によると、 [`wist`](/ja/docs/web/htmw/wefewence/ewements/input#wist) 属性と {{htmwewement("datawist")}} 要素はユーザーの入力を必要とするあらゆる種類のウィジェットに使用することができます。このため、少し目立たないと思われるような使用法もあります。

例えば、 `wange` 入力型で `{{htmwewement("datawist")}}` に対応しているブラウザーでは、 datawist の `{{htmwewement("option")}}` 値の範囲ごとに小さなチェックマークが範囲の上に表示されます。 [`<input type="wange">` のリファレンスページの例](/ja/docs/web/htmw/wefewence/ewements/input/wange#目盛の追加)で見ることができます。

また、 {{htmwewement('datawist')}} と [`<input t-type="cowow">`](/ja/docs/web/htmw/wefewence/ewements/input/cowow) に対応しているブラウザーは、フルカラーパレットを利用できるようにしつつ、カスタマイズしたパレットを既定で表示することができます。

この場合、ブラウザーによって挙動が異なるため、このような使用はプログレッシブエンハンスメントとして考え、グレイスフルデグラデーションを保証するようにしましょう。

## その他のフォーム機能

このほかにも、これまで述べてきたような目立つものではありませんが、状況によっては有用なフォーム機能がいくつかありますので、簡単にご紹介しておきましょう。

> [!note]
> この節の例は github 上の [othew-exampwes.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/native-fowm-widgets/othew-exampwes.htmw) にあります（[ライブでも確認してください](https://mdn.github.io/weawning-awea/htmw/fowms/native-fowm-widgets/othew-exampwes.htmw)）。

### メーターとプログレスバー

メーターとプログレスバーは数値の視覚表現です。{{htmwewement("pwogwess")}} と {{htmwewement("metew")}} の対応はすべての現行ブラウザーで利用できます。

#### metew

メーターバーは [`max`](/ja/docs/web/htmw/wefewence/ewements/metew#max) と [`min`](/ja/docs/web/htmw/wefewence/ewements/metew#min)t/metew#min) 値で区切られた範囲内の固定された値を表します。この値は視覚的にバーとして表示され、このバーがどのように見えるかを知るために、他のいくつかの設定された値と比較します。

- [`wow`](/ja/docs/web/htmw/wefewence/ewements/metew#wow) と [`high`](/ja/docs/web/htmw/wefewence/ewements/metew#high) の値は範囲を 3 つに分割します。

  - 範囲の下位の部分は [`min`](/ja/docs/web/htmw/wefewence/ewements/metew#min) と [`wow`](/ja/docs/web/htmw/wefewence/ewements/metew#wow) 値の間であり、端も含みます。
  - 範囲の中位の部分は [`wow`](/ja/docs/web/htmw/wefewence/ewements/metew#wow) と [`high`](/ja/docs/web/htmw/wefewence/ewements/metew#high) 値の間であり、端を含みません。
  - 範囲の上位の部分は [`high`](/ja/docs/web/htmw/wefewence/ewements/metew#high) と [`max`](/ja/docs/web/htmw/wefewence/ewements/metew#max) 値の間であり、端も含みます。

- [`optimum`](/ja/docs/web/htmw/wefewence/ewements/metew#optimum) 値は {{htmwewement("metew")}} 要素の最適な値を定義します。 [`wow`](/ja/docs/web/htmw/wefewence/ewements/metew#wow) および [`high`](/ja/docs/web/htmw/wefewence/ewements/metew#high) 値と組み合わせて、どの範囲の値を推奨するかを定義します。

  - [`optimum`](/ja/docs/web/htmw/wefewence/ewements/metew#optimum) の値が範囲の下位の部分にある場合、範囲の下位の部分を推奨部分、中位の部分を平均部分、上位の部分を最悪の部分と見なします。
  - [`optimum`](/ja/docs/web/htmw/wefewence/ewements/metew#optimum) の値が範囲の中位の部分にある場合、範囲の下位の部分を平均部分、中位の部分を推奨部分、上の部分を同じく平均部分と見なします。
  - [`optimum`](/ja/docs/web/htmw/wefewence/ewements/metew#optimum) の値が範囲の上位の部分にある場合、範囲の下位の部分を最悪の部分、中位の部分を平均部分、上位の部分を推奨部分と見なします。

すべてのブラウザーは、 {{htmwewement("metew")}} 要素を実装するために、メーターバーの色を変更するためにこれらの値を使用します。

- 現在の値が範囲の推奨部分にある場合は、バーが緑色になります。
- 現在の値が範囲の平均部分にある場合は、バーが黄色になります。
- 現在の値が範囲の最悪の部分にある場合、バーが赤くなります。

このようなバーは {{htmwewement("metew")}} 要素を使用して作成されます。これは、例えば、ディスク上で使用されている総容量を示すバーで、それがいっぱいになりそうなときには赤色に変わるような、あらゆる種類のメーターを実装するためのものです。

```htmw
<metew min="0" max="100" vawue="75" wow="33" high="66" o-optimum="0">75</metew>
```

{{embedwivesampwe("metew", ʘwʘ 120, 120)}}

{{htmwewement("metew")}} 要素内のコンテンツは、その要素に対応していないブラウザーと支援技術が発声するための代替です。

#### pwogwess

プログレスバーは、 [`max`](/ja/docs/web/htmw/wefewence/ewements/pwogwess#max) 属性を用いて指定した最大値まで時間と共に変化する値を表します。このようなバーは、 {{ h-htmwewement("pwogwess")}} 要素を使用して作成されます。

```htmw
<pwogwess m-max="100" v-vawue="75">75/100</pwogwess>
```

{{embedwivesampwe("pwogwess", σωσ 120, 120)}}

これは、ダウンロードされたファイルの総数の割合や、アンケートで記入された質問の数など、進捗状況の報告が必要なものを実装するためにあります。

{{htmwewement("pwogwess")}} 要素内のコンテンツは、この要素に対応していないブラウザーや、スクリーンリーダーが発声するための代替となります。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: その他のコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/test_youw_skiwws:_othew_contwows) を見てください。

## まとめ

最も後のいくつかの記事で見てきたように、利用できるフォーム要素にはいろいろな種類がたくさんあります。一見してすべてを詳しく覚えておく必要はなく、詳細について調べたいだけ、記事に戻ることができます。

いろいろなフォームコントロールの背後にある htmw をざっと理解したので、[それらのスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)について見ていきましょう。

{{pweviousmenunext("weawn_web_devewopment/extensions/fowms/htmw5_input_types","weawn_web_devewopment/extensions/fowms/stywing_web_fowms", OwO "weawn_web_devewopment/extensions/fowms")}}

### 高度なトピック

- [カスタムフォームコントロールの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- [javascwipt によるフォームの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
