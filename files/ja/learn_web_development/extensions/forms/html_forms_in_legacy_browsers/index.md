---
title: 古いブラウザーでの HTML フォーム
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

ウェブ開発者は誰でも、ウェブが自分たちにとって非常に厳しい場所であることを、すぐに（時には痛みを伴って）学びます。最悪の災いは古いブラウザーです。これはかつて "Internet Explorer" を意味していましたが、特に携帯電話など、ブラウザーも OS もアップデートできない古い端末を使用している人が何百万人もいます。

この荒れた環境に対応するのも仕事のうちです。幸いなことに、知っておくと古いブラウザーによる問題のほとんどを解決することができる秘訣があります。また、 HTML の {{htmlelement('input')}} 型は、対応していなくても失敗はしません。 `type=text` で代替されます。

## 問題について知る

一般的なパターンを理解するには、ブラウザーのドキュメントを読むことが役立ちます。 [MDN](/) でこの記事を読んでいるのであれば、始めるのにふさわしい場所にいます。使用したい要素（または DOM インターフェイス）の対応状況を確認するだけです。 MDN には、ウェブページで使用できるほとんどの要素、プロパティ、API の互換性一覧表が用意されています。他にも驚くほど役に立つリソースがあります。

[HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms)では複雑なやり取りが行われるため、シンプルに保つという経験則があり、「[KISS の原則](https://ja.wikipedia.org/wiki/KISS%E3%81%AE%E5%8E%9F%E5%89%87)」とも呼ばれています。フォームを「よりかっこよく」あるいは「高機能に」したい場合はたくさんありますが、効率的なフォームの作成はデザインや技術の問題ではありません。むしろ、シンプルさ、直感性、そしてユーザーとの対話のしやすさが重要なのです。 [forms usability on UX For The Masses](https://www.uxforthemasses.com/forms-usability/) のチュートリアルがこれをよく説明しています。

### グレイスフルデグラデーションはウェブ開発者の最大の味方

[グレイスフルデグラデーションとプログレッシブエンハンスメント](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/)は、様々なブラウザーに同時に対応することにより、優れたものを作ることができる開発パターンです。新しいブラウザーで何かを構築した場合、古いブラウザーでも同じ方法または別な方法で動作するのであれば、グレイスフルデグラデーションが実施できていることになります。

HTML フォームに関する例をいくつか見ていきましょう。

#### HTML の入力型

HTML5 で追加された入力型は、劣化の仕方が高度に予測可能であるため、古いブラウザーでもすべて使用可能です。ブラウザーにとって未知の [`type`](/ja/docs/Web/HTML/Reference/Elements/input#type) 属性の値が {{HTMLElement("input")}} 要素にあった場合、その値が `text` であったかのように代替されます。

```html
<label for="myColor">
  Pick a color
  <input type="color" id="myColor" name="color" />
</label>
```

<table class="no-markdown">
  <thead>
    <tr>
      <th>対応済み</th>
      <th>未対応</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          alt="Screen shot of the color input on Chrome for Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Screen shot of the color input on Firefox for Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### フォームのボタン

HTML フォームでボタンを定義する方法は 2 つあります。

- {{HTMLElement("input")}} 要素の [`type`](/ja/docs/Web/HTML/Reference/Elements/input#type) 属性に `button`、`submit`、`reset`、`image` のいずれかの値に設定したもの
- {{HTMLElement("button")}} 要素

##### {{HTMLElement("input")}}

{{HTMLElement("input")}} 要素は、要素セレクターを使用して CSS を適用したい場合に少し難しくなることがあります。

```html
<input type="button" value="click me" />
```

すべての input から境界線を削除する場合、ボタンについてのみ既定の外見に戻すことができるでしょうか？

```css
input {
  /* この規則は、input 要素で定義するボタンを含む、境界線を持つ入力型の
  既定のレンダリングを無効にします */
  border: 1px solid #ccc;
}
input[type="button"] {
  /* これでは既定のレンダリングを復元できません */
  border: none;
}
input[type="button"] {
  /* これでも復元できません。実際、どのブラウザーでもできる標準の方法はありませ */
  border: auto;
  border: initial;
}
input[type="button"] {
  /* 対応していれば、これが既定のレンダリングに戻す最も近い方法です。 */
  border: revert;
}
```

詳しくは、CSS のグローバル値である {{cssxref('revert')}} を参照してください。

### CSS を手放そう

HTML フォームの大きな問題の一つは、 CSS によるフォームウィジェットのスタイル付けです。フォームコントロールの外観は、ブラウザーや OS に依存します。例えば、 color 型の入力は、 Safari、Chrome、Firefox のそれぞれのブラウザーによって外見が異なりますが、カラーピッカーのウィジェットは、OS のネイティブカラーピッカーを開くため、端末上のどのブラウザーでも同じになります。

一般に、フォームコントロールの既定の外観は変更しない方が良いと考えられています。というのも、 1 つの CSS プロパティの値を変更すると、一部の入力型は変更されますが、他の入力型は変更されないからです。例えば、 `input { font-size: 2rem; }` と宣言した場合、 `number`、`date`、`text` には影響がありますが、 `color` や `range` には影響しません。プロパティを変更すると、予期せぬ形でウィジェットの外観に影響を与えることがあります。例えば、 `[value] { background-color: #ccc; }` は、 `value` 属性を持つすべての {{HTMLElement("input")}} を対象としていますが、 {{HTMLElement("meter")}} の背景色や境界線の角の丸めを変更すると、ブラウザーによって異なる予期せぬ結果になる可能性があります。 {{cssxref('appearance', 'appearance: none;')}} と宣言してブラウザーのスタイルを削除することもできますが、一般的には目的を達成できません。すべてのスタイルが失われ、訪問者が慣れ親しんだ既定のルック＆フィールが削除されるからです。

まとめるとすると、フォームコントロールのウィジェットに CSS でスタイル付けすることで、予測できない副作用が発生することがあります。だからやめましょう。 [フォームコントロール向けの CSS プロパティの互換性一覧表](/ja/docs/Learn_web_development/Extensions/Forms/Property_compatibility_table_for_form_controls)の記事の複雑さからもわかるように、非常に難しいのです。テキスト要素に多少の調整 (サイズやフォントの色など) を行うことはまだ可能でも、必ず副作用が発生します。最良の方法は、 HTML フォームウィジェットにスタイルをまったく適用しないことです。しかし、周囲のアイテムになら、どれでも適用することはできます。また、どうしてもフォームウィジェットの既定のスタイルを変更しなければならない場合は、スタイルガイドを定義して、すべてのフォームコントロールの一貫性を確保し、ユーザーの使い勝手を損なわないようにしてください。また、 [JavaScript でのウィジェットの再構築](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)など、難しいテクニックを検討することもできます。しかし、その場合は、[そのような愚かな要求をするクライアントに請求すること](https://www.smashingmagazine.com/2011/11/03/but-the-client-wants-ie-6-support/)をためらってはいけません。

## 機能検出とポリフィル

CSS や JavaScript は素晴らしい技術ですが、古いブラウザーで壊れないようにすることが重要です。ターゲットとしているブラウザーで完全に対応していない機能を使用する前には、機能検出を行う必要があります。

### CSS の機能検出

置き換えられたフォームコントロールウィジェットをスタイル付けする前に、 {{cssxref('@supports')}} を使用してその機能にブラウザーが対応しているかどうかをチェックすることができます。

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

{{cssxref('appearance')}} プロパティは、要素をプラットフォームのネイティブのスタイルで表示したり、 `none` の値を指定することで、既定のプラットフォームのネイティブベースのスタイルを削除したりするために使用されます。

### 控えめな JavaScript

最大の問題のひとつは、API が利用できるかどうかです。そのため、「控えめな」 JavaScript によって取り組むことベストプラクティスであると考えられています。これは、2 つの要件によって定義される開発パターンです。

- 構造と動作を厳密に分割する。
- コードが動作しない場合でも、コンテンツや基本的な機能はアクセス可能かつ利用可能のままでなければならない。

[The principles of unobtrusive JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (原文は Peter-Paul Koch 氏によって Dev.Opera.com 向けに記述され、現在は Docs.WebPlatform.org に移動しました) で、これらのアイデアを明快に説明しています。

### パフォーマンスに注意を払う

Modernizr のようなスクリプトはパフォーマンスを非常に意識していますが、200 キロバイトのポリフィルをロードすると、アプリケーションのパフォーマンスに影響を与えます。これは、古いブラウザーでは特に重要です。古いブラウザーの多くは JavaScript エンジンが非常に遅く、ポリフィルをすべて実行するとユーザーに負担がかかります。パフォーマンスはそれ自体が問題ですが、古いブラウザーはとても敏感です。基本的に古いブラウザーは遅く、ポリフィルが増えれば増えるほど、より多くの JavaScript を処理しなければなりません。つまり、新しいブラウザーに比べて二重に負担がかかるのです。古いブラウザーでコードをテストし、実際にどのように動作するかを確認してください。すべてのブラウザーでまったく同じ機能を使うよりも、一部の機能を削除したほうがユーザーの使い勝手が向上することもあります。最後になりましたが、常にエンドユーザーのことを考えてください。

## おわりに

このように、ブラウザーや OS における既定のフォームコントロールの外観を考慮することは重要です。これらの問題に対処するためのテクニックは数多くありますが、そのすべてをマスターすることは、この記事の範囲を超えています。大前提として、既定の実装を変更することに価値があるかどうかを検討してから挑戦してください。

この [HTML フォームガイド](/ja/docs/Learn_web_development/Extensions/Forms)のすべての記事を読んでいれば、フォームの使用に慣れているはずです。新しいテクニックやヒントを見つけた場合は、ガイドの改善にご協力ください。

## 関連情報

### 学習経路

- [初めてのフォーム](/ja/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [ウェブフォームの構築方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [ネイティブのフォームウィジェット](/ja/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [HTML5 の入力型](/ja/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
- [高度なフォームコントロール](/ja/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
- [UI 擬似クラス](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
- [ウェブフォームへのスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [クライアントサイドのフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

### 高度なトピック

- [JavaScript によるフォームの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
- [カスタムフォームウィジェットの作成方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- **古いブラウザーでの HTML フォーム**
- [フォームへの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
