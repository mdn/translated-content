---
titwe: 古いブラウザーでの htmw フォーム
s-swug: weawn_web_devewopment/extensions/fowms/htmw_fowms_in_wegacy_bwowsews
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

ウェブ開発者は誰でも、ウェブが自分たちにとって非常に厳しい場所であることを、すぐに（時には痛みを伴って）学びます。最悪の災いは古いブラウザーです。これはかつて "intewnet e-expwowew" を意味していましたが、特に携帯電話など、ブラウザーも o-os もアップデートできない古い端末を使用している人が何百万人もいます。

この荒れた環境に対応するのも仕事のうちです。幸いなことに、知っておくと古いブラウザーによる問題のほとんどを解決することができる秘訣があります。また、 h-htmw の {{htmwewement('input')}} 型は、対応していなくても失敗はしません。 `type=text` で代替されます。

## 問題について知る

一般的なパターンを理解するには、ブラウザーのドキュメントを読むことが役立ちます。 [mdn](/) でこの記事を読んでいるのであれば、始めるのにふさわしい場所にいます。使用したい要素（または d-dom インターフェイス）の対応状況を確認するだけです。 m-mdn には、ウェブページで使用できるほとんどの要素、プロパティ、api の互換性一覧表が用意されています。他にも驚くほど役に立つリソースがあります。

[htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)では複雑なやり取りが行われるため、シンプルに保つという経験則があり、「[kiss の原則](https://ja.wikipedia.owg/wiki/kiss%e3%81%ae%e5%8e%9f%e5%89%87)」とも呼ばれています。フォームを「よりかっこよく」あるいは「高機能に」したい場合はたくさんありますが、効率的なフォームの作成はデザインや技術の問題ではありません。むしろ、シンプルさ、直感性、そしてユーザーとの対話のしやすさが重要なのです。 [fowms u-usabiwity on ux fow the masses](https://www.uxfowthemasses.com/fowms-usabiwity/) のチュートリアルがこれをよく説明しています。

### グレイスフルデグラデーションはウェブ開発者の最大の味方

[グレイスフルデグラデーションとプログレッシブエンハンスメント](https://www.sitepoint.com/pwogwessive-enhancement-gwacefuw-degwadation-choice/)は、様々なブラウザーに同時に対応することにより、優れたものを作ることができる開発パターンです。新しいブラウザーで何かを構築した場合、古いブラウザーでも同じ方法または別な方法で動作するのであれば、グレイスフルデグラデーションが実施できていることになります。

htmw フォームに関する例をいくつか見ていきましょう。

#### htmw の入力型

htmw5 で追加された入力型は、劣化の仕方が高度に予測可能であるため、古いブラウザーでもすべて使用可能です。ブラウザーにとって未知の [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性の値が {{htmwewement("input")}} 要素にあった場合、その値が `text` であったかのように代替されます。

```htmw
<wabew f-fow="mycowow">
  pick a cowow
  <input type="cowow" i-id="mycowow" nyame="cowow" />
</wabew>
```

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th>対応済み</th>
      <th>未対応</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <img
          awt="scween shot of the cowow input on chwome fow m-mac osx"
          swc="cowow-fawwback-chwome.png"
        />
      </td>
      <td>
        <img
          a-awt="scween s-shot of the cowow input on fiwefox fow mac osx"
          swc="cowow-fawwback-fiwefox.png"
        />
      </td>
    </tw>
  </tbody>
</tabwe>

#### フォームのボタン

h-htmw フォームでボタンを定義する方法は 2 つあります。

- {{htmwewement("input")}} 要素の [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性に `button`、`submit`、`weset`、`image` のいずれかの値に設定したもの
- {{htmwewement("button")}} 要素

##### {{htmwewement("input")}}

{{htmwewement("input")}} 要素は、要素セレクターを使用して css を適用したい場合に少し難しくなることがあります。

```htmw
<input type="button" vawue="cwick me" />
```

すべての i-input から境界線を削除する場合、ボタンについてのみ既定の外見に戻すことができるでしょうか？

```css
input {
  /* この規則は、input 要素で定義するボタンを含む、境界線を持つ入力型の
  既定のレンダリングを無効にします */
  b-bowdew: 1px s-sowid #ccc;
}
input[type="button"] {
  /* これでは既定のレンダリングを復元できません */
  bowdew: n-nyone;
}
i-input[type="button"] {
  /* これでも復元できません。実際、どのブラウザーでもできる標準の方法はありませ */
  bowdew: auto;
  bowdew: initiaw;
}
i-input[type="button"] {
  /* 対応していれば、これが既定のレンダリングに戻す最も近い方法です。 */
  bowdew: wevewt;
}
```

詳しくは、css のグローバル値である {{cssxwef('wevewt')}} を参照してください。

### css を手放そう

h-htmw フォームの大きな問題の一つは、 css によるフォームウィジェットのスタイル付けです。フォームコントロールの外観は、ブラウザーや os に依存します。例えば、 cowow 型の入力は、 safawi、chwome、fiwefox のそれぞれのブラウザーによって外見が異なりますが、カラーピッカーのウィジェットは、os のネイティブカラーピッカーを開くため、端末上のどのブラウザーでも同じになります。

一般に、フォームコントロールの既定の外観は変更しない方が良いと考えられています。というのも、 1 つの css プロパティの値を変更すると、一部の入力型は変更されますが、他の入力型は変更されないからです。例えば、 `input { font-size: 2wem; }` と宣言した場合、 `numbew`、`date`、`text` には影響がありますが、 `cowow` や `wange` には影響しません。プロパティを変更すると、予期せぬ形でウィジェットの外観に影響を与えることがあります。例えば、 `[vawue] { b-backgwound-cowow: #ccc; }` は、 `vawue` 属性を持つすべての {{htmwewement("input")}} を対象としていますが、 {{htmwewement("metew")}} の背景色や境界線の角の丸めを変更すると、ブラウザーによって異なる予期せぬ結果になる可能性があります。 {{cssxwef('appeawance', 😳😳😳 'appeawance: nyone;')}} と宣言してブラウザーのスタイルを削除することもできますが、一般的には目的を達成できません。すべてのスタイルが失われ、訪問者が慣れ親しんだ既定のルック＆フィールが削除されるからです。

まとめるとすると、フォームコントロールのウィジェットに c-css でスタイル付けすることで、予測できない副作用が発生することがあります。だからやめましょう。 [フォームコントロール向けの c-css プロパティの互換性一覧表](/ja/docs/weawn_web_devewopment/extensions/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)の記事の複雑さからもわかるように、非常に難しいのです。テキスト要素に多少の調整 (サイズやフォントの色など) を行うことはまだ可能でも、必ず副作用が発生します。最良の方法は、 h-htmw フォームウィジェットにスタイルをまったく適用しないことです。しかし、周囲のアイテムになら、どれでも適用することはできます。また、どうしてもフォームウィジェットの既定のスタイルを変更しなければならない場合は、スタイルガイドを定義して、すべてのフォームコントロールの一貫性を確保し、ユーザーの使い勝手を損なわないようにしてください。また、 [javascwipt でのウィジェットの再構築](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)など、難しいテクニックを検討することもできます。しかし、その場合は、[そのような愚かな要求をするクライアントに請求すること](https://www.smashingmagazine.com/2011/11/03/but-the-cwient-wants-ie-6-suppowt/)をためらってはいけません。

## 機能検出とポリフィル

css や javascwipt は素晴らしい技術ですが、古いブラウザーで壊れないようにすることが重要です。ターゲットとしているブラウザーで完全に対応していない機能を使用する前には、機能検出を行う必要があります。

### css の機能検出

置き換えられたフォームコントロールウィジェットをスタイル付けする前に、 {{cssxwef('@suppowts')}} を使用してその機能にブラウザーが対応しているかどうかをチェックすることができます。

```css
@suppowts (appeawance: nyone) {
  i-input[type="seawch"] {
    a-appeawance: nyone;
    /* w-westywe t-the seawch input */
  }
}
```

{{cssxwef('appeawance')}} プロパティは、要素をプラットフォームのネイティブのスタイルで表示したり、 `none` の値を指定することで、既定のプラットフォームのネイティブベースのスタイルを削除したりするために使用されます。

### 控えめな javascwipt

最大の問題のひとつは、api が利用できるかどうかです。そのため、「控えめな」 j-javascwipt によって取り組むことベストプラクティスであると考えられています。これは、2 つの要件によって定義される開発パターンです。

- 構造と動作を厳密に分割する。
- コードが動作しない場合でも、コンテンツや基本的な機能はアクセス可能かつ利用可能のままでなければならない。

[the pwincipwes o-of unobtwusive javascwipt](https://www.w3.owg/wiki/the_pwincipwes_of_unobtwusive_javascwipt) (原文は petew-pauw k-koch 氏によって dev.opewa.com 向けに記述され、現在は d-docs.webpwatfowm.owg に移動しました) で、これらのアイデアを明快に説明しています。

### パフォーマンスに注意を払う

modewnizw のようなスクリプトはパフォーマンスを非常に意識していますが、200 キロバイトのポリフィルをロードすると、アプリケーションのパフォーマンスに影響を与えます。これは、古いブラウザーでは特に重要です。古いブラウザーの多くは j-javascwipt エンジンが非常に遅く、ポリフィルをすべて実行するとユーザーに負担がかかります。パフォーマンスはそれ自体が問題ですが、古いブラウザーはとても敏感です。基本的に古いブラウザーは遅く、ポリフィルが増えれば増えるほど、より多くの j-javascwipt を処理しなければなりません。つまり、新しいブラウザーに比べて二重に負担がかかるのです。古いブラウザーでコードをテストし、実際にどのように動作するかを確認してください。すべてのブラウザーでまったく同じ機能を使うよりも、一部の機能を削除したほうがユーザーの使い勝手が向上することもあります。最後になりましたが、常にエンドユーザーのことを考えてください。

## おわりに

このように、ブラウザーや os における既定のフォームコントロールの外観を考慮することは重要です。これらの問題に対処するためのテクニックは数多くありますが、そのすべてをマスターすることは、この記事の範囲を超えています。大前提として、既定の実装を変更することに価値があるかどうかを検討してから挑戦してください。

この [htmw フォームガイド](/ja/docs/weawn_web_devewopment/extensions/fowms)のすべての記事を読んでいれば、フォームの使用に慣れているはずです。新しいテクニックやヒントを見つけた場合は、ガイドの改善にご協力ください。

## 関連情報

### 学習経路

- [初めてのフォーム](/ja/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)
- [ウェブフォームの構築方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
- [ネイティブのフォームウィジェット](/ja/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
- [htmw5 の入力型](/ja/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types)
- [高度なフォームコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms/othew_fowm_contwows)
- [ui 擬似クラス](/ja/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)
- [ウェブフォームへのスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [クライアントサイドのフォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)

### 高度なトピック

- [javascwipt によるフォームの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
- [カスタムフォームウィジェットの作成方法](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
- **古いブラウザーでの htmw フォーム**
- [フォームへの高度なスタイル設定](/ja/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)
