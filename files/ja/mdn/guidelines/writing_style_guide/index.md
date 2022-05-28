---
title: 執筆スタイルガイド
slug: MDN/Guidelines/Writing_style_guide
tags:
  - Documentation
  - ガイド
  - ガイドライン
  - MDN
  - MDN メタ
  - MDN Web Docs
  - MDN スタイルガイド
  - スタイルガイド
  - 執筆スタイルガイド
translation_of: MDN/Guidelines/Writing_style_guide
---
{{MDNSidebar}}

整理され、標準化され、読みやすい書き方でドキュメントを示すために、 MDN Web Docs スタイルガイドはテキストがどのような体系、表記、書式などに従うべきかを説明します。
これらは厳密な規則というのではなくガイドラインです。
形式よりも内容が重要であり、このため協力する前にガイドラインを学ばなければならないと重荷に感じたりしないでください。
とはいえ、真面目な他のボランティアが、あとであなたの成果をガイドラインに添うように書き換えても、びくびくしたり、ぎょっとしたりもしないでください。

このガイドにおける言語的な観点は主に英語のドキュメントに向けられたものです。その他の言語については独自のスタイルガイドを持っているかもしれません（作成を歓迎します）。これは多国語化チームのページのサブページとして公開してください。
> **Note:** 2017 年 12 月現在、日本語独自コンテンツとしてのスタイルガイドは未作成だが、下記の資料が参考になります。
> - [Mozilla 関連独自の L10N ガイドライン](https://github.com/mozilla-japan/translation/wiki/L10N-Guideline)
> - [Mozilla 関連のドキュメントの表記ガイドライン](https://github.com/mozilla-japan/translation/wiki/Editorial-Guideline)
> MDN 以外のサイトの記事での標準的なスタイルを知りたければ、[One Mozilla スタイルガイド](https://www.mozilla.org/en-US/styleguide/)を参照してください。

## 基本事項

よく普及しているスタイルガイドでは、始めるのに最適な場所は、文書の一貫性を維持するのに役立つような、とても基本的なテキストの取り決めです。以下のセクションでは、その基本のアウトラインを示します。

### ページタイトル

ページタイトルは検索結果や、ページの先頭にあるパンくずリストのページ階層を構造化するために使用されます。 (ページの先頭や検索結果に表示される) ページタイトルは、ページの「スラッグ」とは異なっていても構いません。「スラッグ」とは、ページの URL の "`<ロケール>/docs/`" に続く部分のことです。

#### タイトルと見出しの大文字小文字の使用

ページタイトルセクションの見出しには、文スタイルの大文字化（文頭と固有名詞の始めの 1 字だけを大文字にする）を用いてください。一般的な見出しスタイルの大文字化は用いません。

- **正**: "A new method for creating JavaScript rollovers"
- **誤**: "A New Method for Creating JavaScript Rollovers"

この表記法が確立するより前の古い記事が多くあります。必要により気軽に書き換えてください。
だんだん新しいやり方に慣れていくでしょう。

#### タイトルとスラッグの決め方

ページのスラッグは短くしてください。
つまり新しい階層を作るとき、スラッグは 1 つか 2 つの単語で構成されるようにしましょう。

一方で、タイトルは常識的な範囲で好きなだけ長くして構いません。また記事の内容がよくわかるものにしてください。

#### サブツリーの新規作成

あるトピックや主題分野についていくつかの記事を追加する必要がある場合、通常、ランディングページを作成し、次に個々の記事のためのサブページを追加します。
ランディングページの冒頭には、トピックや技術を説明する 1、2 段落を設け、次に、各ページの説明を含むサブページのリストを提供します。
このリストへのページの挿入は、いくつかのマクロを使用して自動化することができます。

例えば、[JavaScript](/ja/docs/Web/JavaScript) ガイド を見てみましょう。以下のような構造になっています。

- [JavaScript/Guide](/ja/docs/Web/JavaScript/Guide) – メインの目次となるページ
- [JavaScript/Guide/JavaScript Overview](/ja/docs/Web/JavaScript/Guide/Introduction)
- [JavaScript/Guide/Functions](/ja/docs/Web/JavaScript/Guide/Functions)
- [JavaScript/Guide/Details of the Object Model](/ja/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

階層の最上位部に自分の記事を配置しないようにしましょう。サイトのパフォーマンスを下げ、検索とサイト探索を非効率にします。

### 全般的な記事内容のガイドライン

どんな文書を書くときも、どれくらいの量を言えばいいのかを知ることが重要です。
あまりにも長い文章になってしまったり、過剰な詳細を提供してしまったりすると、読むのが面倒になってしまい、誰も使ってくれなくなってしまいます。
網羅する量を正しく把握することは、いくつかの理由から重要です。
特に、読者が本当に必要な情報を見つけられるようにすること、そして検索エンジンが記事を適切に分析してランク付けできるように十分な質の高い素材を提供することです。

ここでは前者（読者が必要としている可能性がある情報を提供すること）について説明します。
ページが適切に分類され、検索エンジンにランク付けされるようにすることについて少し学びたい方は、 [MDN で SEO を行うための書き方](/ja/docs/MDN/Contribute/Howto/Write_for_SEO)の記事をご覧ください。

ここでの目標は、読者が必要としている情報を全て含めたページを、あまり長くせずに書くことです。
この分野では、いくつかの推奨事項があります。

#### 読み手を意識する

これらはガイドラインであることを覚えておいてください。
これらのヒントの中には、すべての場合で適用されない場合があります。
記事の読者層を意識してください。
高度なネットワーク技術に関する記事では、基本的なネットワークの概念について、例えばネットワークを使用したコーディングに関する典型的な記事のように詳細に説明する必要はありません。

#### 有益な概要を提供する

記事の要約、つまり最初の見出しの前の段落には、記事の内容を読者に十分に伝えるための情報を提供するようにしましょう。
こうすることで、読者はその記事が自分の関心事に関連しているかどうかをすぐに判断することができます。

ガイドやチュートリアルのコンテンツでは、概要は、どのような主題が取り上げられるのか、必要であれば、読者が事前に何を知っておくべきかを読者に知らせなければなりません。文書化または議論されている技術や API について言及し、それらへのリンクを記載し、どのような状況で記事の内容が役に立つかのヒントを提供しなければなりません。

##### あまりにも短い例

この要約の例は、あまりにも短すぎます。
あまりにも多くの情報を除外しています。例えば "stroke" Text が正確には何を意味するのか、テキストが描画される場所はどこか、などです。

> **`CanvasRenderingContext2D.strokeText()`** は、文字列を描画します。

##### 長すぎる例

ここで、概要を更新しましたが、今度は長すぎます。
あまりにも詳細な内容が含まれていて、他のメソッドやプロパティにテキストが入り込みすぎています。

要約は `strokeText()` メソッドに焦点を当て、他の詳細が提供されている適切なガイドを参照してください。

> Canvas 2D API の **`CanvasRenderingContext2D.strokeText()`** メソッドは呼び出されると、指定された座標から始まる指定された文字列内の文字を、現在のペンの色を使って輪郭を描きます。
> コンピュータグラフィックの用語では、テキストを「ストロークする」とは、文字の内容を色で塗りつぶさずに、文字列内の字形の輪郭を描くことを意味します。
>
> テキストは、コンテキストの {{domxref("CanvasRenderingContext2D.font", "font")}} プロパティで指定されたコンテキストの現在のフォントを使用して描画されます。
>
> 指定された座標に対するテキストの相対的な配置は、コンテキストの `textAlign`, `textBaseline`, `direction` プロパティによって決定されます。
> `textAlign` は、指定された X 座標に対する文字列の配置を制御します。値が `"center"` の場合、文字列は `x - (stringWidth / 2)` から始まり、文字列の中央に配置するように描画されます。
> 値が `"left"` の場合は、文字列は指定された X 座標から描画されます。
> また、 `textAlign` が `"right"` の場合は、指定されたX座標で終わるように描画されます。
>
> (等 等 等...)
> 
> オプションで、4 番目の引数を指定して文字列の最大幅をピクセル単位で指定することもできます。
> この引数を指定すると、テキストは水平方向に圧縮されるか、描画時にその幅の空間に収まるように拡大縮小 (あるいは調整) されます。
>
> **`fillText()`** メソッドを呼び出すことで、文字列の輪郭のみを描画するのではなく、文字列の文字を色で塗りつぶすことができます。

##### はるかに良い例

ここで、 `strokeText()` メソッドのより良い概要を見てみましょう。

> {{domxref("CanvasRenderingContext2D")}} の **`strokeText()`** メソッドは、 [Canvas 2D API](/ja/docs/Web/API/Canvas_API) の一部で、指定された文字列の文字の輪郭を、指定された X 座標と Y 座標で示された位置に描画します。
> テキストは、コンテキストの現在の {{domxref("CanvasRenderingContext2D.font", "font")}} を使用して描画され、 {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, {{domxref("CanvasRenderingContext2D.direction", "direction")}} の各プロパティに従って揃えられます。
>
> 詳細とさらなる例については、学習エリアの[図形の描画](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)の[テキスト](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#text)や、このテーマに関するメインの記事「[テキストの描画](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text)」を参照してください。
</div>

### 関連するすべての例を含める

重要なことは、例を使用して、すべての引数が何のために使用されるのかを明確にし、存在する可能性のある希少な例を明確にすることです。また、一般的なタスクの解決策を示すために例を使用し、発生する可能性のある問題の解決策を示すために例を使用する必要があります。

一般に、ほとんどのページが例を含み、そのほとんどが複数の例を含むと予想されます。

それぞれの例は、例を読んだり試してみたりする前に、その例が何をするのか、読み始める前に読者が知っておくべきことは何かを説明する文章が必要です。

##### コードの例

コードの各部分では、それがどのように動作するかを説明する必要があります。大きなコードを小さな部分に分割して、個別に説明できるようにしたほうが理解しやすいかもしれないということに留意してください。

コードの各部分に続く文章は、適切なレベルの詳細を使用して、関連性のあるものを説明する必要があります。

- もしコードがとても単純で、文書化されている API に直接関係するものは何も使っていないなら、それが何であり、なぜそこにあるのかを簡単に要約するだけでよいでしょう。
- もしそのコードが複雑で、文書化されている API を使用していたり、技術的に独創的であったりする場合は、より詳細な説明を提供する必要があります。

[ライブサンプル](/ja/docs/MDN/Structures/Live_samples)を追加する際、サンプルを含む領域の {{HTMLElement("pre")}} ブロックは、サンプルを実行する前にすべて連結されることを知っておくと役に立ちます。 HTML、CSS、JavaScript の一部または全部を複数の部分に分割し、それぞれに説明や見出しなどを任意に設定することができます。
これにより、コードの文書化が非常に強力かつ柔軟になります。

#### 短すぎる記事は見つけにくい

記事が「薄い」、つまり短すぎると、検索エンジンに適切に（あるいはまったく）インデックスされないことがあります。
原則として、記事の本文は最低でも 250 ～ 300 語にしてください。
人為的にページを膨らませるのではなく、可能な限りこのガイドラインを最低限の目標長さとして扱いましょう。

### 見出し

降順に見出しレベルを使い分けてください。 {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}} という順に、途中を飛ばさず使って下さい。

H2 が最高の見出しレベルなのは H1 がページタイトルのために用意されているからです。
3～4 段以上のヘッダーが必要な場合は、ランディングページを持ついくつかの小さな記事に分割することを検討してください。

#### 見出しで行うことと行ってはいけないこと

- **単独のサブセクションを作らないでください。**トピックを一つに分割するというのは意味のわからないことです。 2 つ以上のサブ見出しを用意するか、まったくないかのどちらかです。
- **見出しの中でスタイルやクラスを使わないようにしましょう。**これには、コード用語を書くための {{HTMLElement("code")}} 要素も含まれます。ですから、「`SuperAmazingThing` インターフェイスの使用」というような見出しを作らないようにしましょう。その代わりに、「SuperAmazingThing インターフェイスの使用」だけにすべきです。
- **見出し内でのマクロを使用することは避けてください** (見出し内で使用するように特別に設計された特定のマクロを除く)。
- 見出しの後に内容のテキストをはさまずに小見出しが続く、 **"bumping heads" を作らないようにしましょう**。これは見栄えが悪く、読者には外側のセクションの最初に何の説明もないままになってしまいます。

### リスト

リストは、すべてのページで統一された書式と構造である必要があります。
個々のリスト項目は、リストの形式に関係なく、適切な句読点を使用して記述する必要があります。
ただし、作成するリストの種類によっては、以下のセクションで説明するように、書き方を調整する必要があります。

#### 箇条書きリスト

箇条書きリストは、関連する簡潔な情報をグループ化するために使用してください。
リストの各項目は、同じような文の構成になっている必要があります。
箇条書きリストの句や文には、標準的な句読点を含める必要があります。
箇条書きリストの各文の終わりには、段落の場合と同様に、項目の最後の文も含めて、ピリオドを付けなければなりません。

正しく構成された箇条書きリストの例です。

この例では、次のように記述します。

> - 条件と、簡単な説明です。
> - 同様の条件と、簡単な説明です。
> - さらに別の条件と、さらに詳しい説明です。

同じ文型が箇条書きから箇条書きへと繰り返されていることに注意してください。
この例では、それぞれの箇条書きで条件を述べ、読点と簡単な説明を加え、リストの各項目をピリオドで終わらせています。

#### 番号付きリスト

番号付きリストは、主に一連の命令の手順を列挙するために使用されます。
指示は複雑な場合があるので、特に各リスト項目のテキストが長い場合は、明確にすることが優先されます。
箇条書きのリストと同様に、標準的な句読点の使い方に従ってください。

正しく構成された番号付きリストの例。

番号付きリストを正しく構成するには、次のようにします。

1. 冒頭に見出しや簡単な段落を設け、説明文を紹介します。
   説明を始める前に、ユーザーにコンテキストを提供することが重要です。
2. 手順の作成を開始し、各ステップを独自の番号付きアイテムで管理します。
   手順の作成に取り掛かり、各手順に番号を振ってください。手順がかなり広範囲に及ぶ可能性があるため、句読点を正しく使用して明確に記述することが重要です。
3. 手順が終わったら、番号のついたリストの後に、完了時に期待される結果について、簡単な要約や説明を書きます。

これは、締めくくりの説明の書き方の例です。
正しい書式で番号付きリストを作成するための手順を説明した短い番号付きリストを作成しました。

番号付きリストの項目が、短い段落のように読めることに注意してください。
番号付きリストは、説明のために日常的に使用されたり、誰かを整然とした手順で案内したりするため、各項目を 1 ステップにつき 1 つの番号付き項目というように、焦点を絞るようにしましょう。

### テキストの書式とスタイル

**「スタイル」** ドロップダウンリストを使うと、あらかじめ設定されたスタイルを選択範囲に適用できます。

> **Note:** **"Note Box"** スタイルは重要な注意を呼びかけるのに使われます。こんな感じです。

> **Warning:** 同様に **"Warning Box"** は警告ボックスをこのように作成します。

特別に指示された場合でない限り、 HTML の `style` 属性を手作業で付加*しない*ようにしてください。
既存のクラスでうまくいかなければ、 [MDN discussion forum](https://discourse.mozilla.org/c/mdn/236) で質問してみてください。

### コードサンプルのスタイルと書式

> **Note:** この節では、 MDN の記事に表示されるコードのスタイルや書式について扱います。
> 実際にコードサンプルを書くためのガイドラインが必要な場合は、[コードサンプルのガイドライン](/ja/docs/MDN/Guidelines/Code_guidelines)を参照してください。

#### タブと改行

タブは空白 2 つで統一して下さい。
コードは綺麗にインデントし、始めの中括弧（"`{`"）は行頭に置かないでください。ブロック宣言の直後に配置します。
例えば次のようにします。

```js
if (condition) {
  /* handle the condition */
} else {
  /* handle the "else" case */
}
```

長い行は、横スクロールしなければ読めないほど横方向に伸ばすべきではありません。
長い行は自然な区切り位置で改行しましょう。
以下に例を挙げます。

```js
if (class.CONDITION || class.OTHER_CONDITION || class.SOME_OTHER_CONDITION
       || class.YET_ANOTHER_CONDITION ) {
  /* something */
}

var toolkitProfileService = Components.classes["@mozilla.org/toolkit/profile-service;1"]
                           .createInstance(Components.interfaces.nsIToolkitProfileService);
```

#### インラインコードの書式

関数名、変数名、メソッド名をマークアップするには、 {{HTMLElement("code")}} タグを使用します。
例えば、「`frenchText()`関数」のようにします。

**メソッド名の後には、一組の括弧を付けてください。** 例えば、 `doSomethingUseful()` のようにします。
この括弧は、メソッドを他のコード用語と区別するのに役立ちます。

#### 構文の強調表示

1 行または複数行のコードは、 {{HTMLElement("code")}} 要素ではなく、[構文強調](/ja/docs/MDN/Contribute/Markdown_in_MDN#example_code_blocks)を使用して整形されます。

#### HTML 要素に言及する際のスタイル

HTML 要素について記述する際に従うべき特定の規則があります。これらの規則によって、要素とその構成部分についての説明に一貫性が生まれます。また、詳細な説明への適切なリンクを保証することもできます。

- 要素名
  - : [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) マクロを使ってその要素のページへのリンクを生成してください。
    例えば、 \{{HTMLElement("title")}} と書くと、 "{{HTMLElement("title")}}" と出力されます。
    リンクを生成したくなければ、**名前を山括弧に入れて** "Inline Code" スタイルを使用してください（例えば `<title>`）。
- 属性名
  - : "Inline Code" スタイルを使用して属性名を`コードフォント`に入れてください。加えて、属性が何をするのかの説明に関連して言及された場合、または文書中で最初に使用された場合は **`太字フォント`** を使用してください。
- 属性の定義
  - : 属性名の定義には [`htmlattrdef`](https://github.com/mdn/yari/blob/main/kumascript/macros/htmlattrdef.ejs) マクロを使用してください（`\{{htmlattrdef("type")}})` のように）。そうすれば他のページから属性の定義を参照するために、 [`htmlattrxref`](https://github.com/mdn/yari/blob/main/kumascript/macros/htmlattrxref.ejs) マクロを使用するだけで簡単にリンクすることができます（`\{{htmlattrxref("type","element")}}` のように）。
- 属性値
  - : 属性値に `<code>` を適用するために "Inline Code" スタイルを使用し、文字列の値はコードサンプルの構文で必要がない限り、引用符で囲まないでください。
    **例:** 「`<input>` 要素の `type` 属性が `email` または `tel` に設定されている場合...」

### ラテン文字の略語

#### 注釈と括弧内で

- よく使われるラテン語の略語 (etc., i.e., e.g.) は括弧や注釈の中で使用できます。
  これらの略語にはピリオドを使用し、カンマや適切な区切り文字を続けてください。

  - **正**: Web browsers (e.g. Firefox) can be used ...
  - **誤**: Web browsers e.g. Firefox can be used ...
  - **誤**: Web browsers, e.g. Firefox, can be used ...
  - **誤**: Web browsers, (eg: Firefox) can be used ...

#### 通常の文で

- 通常の文では（つまり注釈や括弧の外で）、英語における同等の表現を使用してください。

  - **正**: ... web browsers, and so on.
  - **誤**: ... web browsers, etc.
  - **正**: Web browsers such as Firefox can be used ...
  - **誤**: Web browsers e.g. Firefox can be used ...

#### ラテン語の略記表現と対応する英語表現

| 略語 | ラテン語            | 英語                 |
| ------ | ---------------- | ----------------------- |
| cf.    | _confer_         | compare                 |
| e.g.   | _exempli gratia_ | for example             |
| et al. | _et alii_        | and others              |
| etc.   | _et cetera_      | and so forth, and so on |
| i.e.   | _id est_         | that is, in other words |
| N.B.   | _nota bene_      | note well               |
| P.S.   | _post scriptum_  | postscript              |

> **Note:** ラテン語の略記表現が有用かどうか常に考えるようにしましょう。
> めったに使われないようなものは、多くの読者にとっては理解できず、他のものと勘違いしてしまうこともありえます。
>
> 使用するあなた>が正しく使用することを肝に銘じてください。
> 例えば、 "e.g." と "i.e." の取り違えはよくある間違いです。

### 頭字語と略語

#### 大文字とピリオド

頭字語と略語については、全て大文字とし、ピリオドは使用しないでください。組織の略称もこれに含まれます。 "US" や "UN" などです。

- **正**: XUL
- **誤**: X.U.L.; Xul

#### 略語の展開

ある用語についてページ内で初めて言及がある場合は、ユーザにとって馴染みがないと思われる略語を展開しましょう。よく分からなければ、展開するかもしくは記事や、用語の説明をする[用語集](/ja/docs/Glossary)の項目へのリンクを貼りましょう。

- **正**: "XUL (XML User Interface Language) is Mozilla's XML-based language..."
- **誤**: "XUL is Mozilla's XML-based language..."

#### 頭字語と略語の複数形

頭字語と略語の複数形については、_s_ を末尾に付加するだけにしてください。

アポストロフィは使用しないでください。絶対に。お願いします。

- **正**: CD-ROMs
- **誤**: CD-ROM's

#### "Versus", "vs.", "v."

短縮形の "vs." を推奨します。

- **正**: this vs. that
- **誤**: this v. that
- **誤**: this versus that

### 大文字の使用

本文では標準的な英語の大文字表記ルールを使用し、 "World Wide Web" は大文字で表記してください。 "web" （単独または修飾語としての使用）および "internet" は小文字を使用してもかまいません。

> **Note:** このガイドラインは以前のバージョンからの変更であり、 MDN では "Web" と "Internet" がたくさん使われているのを見かけるかもしれません。
> しかし、大文字小文字を変更するためだけに記事を編集する必要はありません。

キーボードのキーは、すべて大文字にするのではなく、文章形の大文字を使用してください。
例えば、 "<kbd>Enter</kbd>" であり "<kbd>ENTER</kbd>" ではありません。
唯一の例外として、 "<kbd>ESC</kbd>" を "<kbd>Escape</kbd>" キーの略語として使用することができます。

特定の単語は常に大文字にする必要があります（大文字を含む商標など）、または人名に由来する単語（コード内で使用され、コードの構文が小文字を必要とする場合を除く）。
いくつかの例を挙げます。

- Boolean（イギリスの数学者、論理学者 {{interwiki("wikipedia", "George Boole")}} にちなんで命名されました）
- JavaScript （オラクル社の商標です。常に商標として書く必要があります）
- Python、TypeScript、Django などのプログラミング言語やフレームワークの名称

### 短縮形

書体はカジュアルで構いません。なので気軽に短縮形を使ってください (例えば、"don't"、"can't"、"shouldn't")。無理にとは言いません。

### 複数形

英語におけるやり方にしてください。ラテン語やギリシア語に影響を受けた形は使わないでください。

- **正**: syllabuses, octopuses
- **誤**: syllabi, octopi

### ハイフネーション

ハイフンを使った複合語は、接頭辞の最後の文字が母音で、かつルートの最初の文字と同じ場合に使用してください。

- **正**: email, re-elect, co-op
- **誤**: e-mail, reelect, coop

#### 性別に中立な言葉

主題に性別が関係ない場合には、性別に中立な言葉を使って、できるだけ包括的な文章にするのが良いでしょう。
例えば、特定の男性の行動について話している場合は、 "he"/"his" を使用しても問題ありませんが、主語がどちらでもありうる場合は、 "he"/"his" は適切ではありません。

以下に例をあげましょう。

_A confirmation dialog appears, asking the user if he allows the Web page to make use of his Web cam._

_A confirmation dialog appears, asking the user if she allows the Web page to make use of her Web cam._

どちらも性的に偏りがある表現です。
性別に中立な代名詞に修正しましょう。

_A confirmation dialog appears, asking the user if they allow the Web page to make use of their Web cam._

> **Note:** MDN では、このとても一般的な構文 (これは使用法の権威の間で論争の的となっている) を使用して、英語の中性的な性別の欠如を補うことを許可しています。

三人称複数型を中性名詞として使う (つまり、"they"、"them"、"their"、"theirs" を使う) ことは許容されるやり方で、一般には "[単数形の 'they'](http://en.wikipedia.org/wiki/Singular_they)" として知られています。

ユーザを複数とするとこうなります。

_A confirmation dialog appears, asking the users if they allow the web page to make use of their web cams._

もちろん一番良い解決法は、代名詞を使用しないよう書き直すことです。

_A confirmation dialog appears, requesting the user's permission for web cam access._

_A confirmation dialog box appears, which asks the user for permission to use the web cam._

最後の手段がおそらく、より良い手段と言えるでしょう。これは文法的に正しいだけでなく、性別の規則が大きく異なる可能性のある異なる言語間で、性別の取り扱いに関連した複雑さを軽減することができます。この解決策は、読者と翻訳者の両方にとって、翻訳をより簡単にすることができます。

### 数字と数詞

#### 日付

日付については（コード中の日付は関係ありません）、 "January 1, 1990" のような書式を使用してください。

- **正**: February 24, 2006
- **誤**: February 24th, 2006; 24 February, 2006; 24/02/2006

YYYY/MM/DD の書式を使っても構いません。

- **正**: 2006/02/24
- **誤**: 02/24/2006; 24/02/2006; 02/24/06

#### 年代の表現

年代の表現には、 "1990s" の書式を使って下さい。
アポストロフィはいりません。

- **正**: 1990s
- **誤**: 1990's

#### 数詞の複数形

数詞の複数形には "s" を付加してください。アポストロフィはいりません。

- **正**: 486s
- **誤**: 486's

#### カンマ

通常の文では、 5 桁以上の数字にだけカンマを使用してください。

- **正**: 4000; 54,000
- **誤**: 4,000; 54000

### 句読点

#### Serial Comma（連続のカンマ）

**Serial comma（連続のカンマ）を使用してください**。 Serial Comma または "Oxford" comma（オックスフォードカンマ）としても知られるこのカンマは、 3 つ以上の項目を列挙する際に接続詞の直前に置きます。

- **正**: I will travel on trains, planes, and automobiles.
- **誤**: I will travel on trains, planes and automobiles.

#### 引用符と疑問符

**「曲がった」引用符と疑問符を使用しないでください。** MDN では、直線の引用符とアポストロフィのみを使用してください。

これにはいくつかの理由があります。

- 一貫性のためにどちらかを選択しなければなりません。
- 曲がった引用符やアポストロフィがコードスニペットの中に入ってくると、インラインのものであっても、読み手はそれらをコピーして貼り付け、動作することを期待してしまうかもしれません (そうはならないでしょう)。

- **正**: Please don't use "curly quotes."
- **誤**: Please don’t use “curly quotes.”

### 綴りの統一

綴りにゆれがある単語については、常にアメリカ英語の綴りを使用してください。

一般的には、 [Dictionary.com](http://www.dictionary.com/) の最初の項目を使用しますが、その項目が変種の綴りとして記載されていたり、主にアメリカ以外の英語の形で使用されている場合を除きます。例えば、 ["behavior" を検索](http://www.dictionary.com/browse/behaviour)すると、 "Chiefly British" という言葉の後に、アメリカの標準形である "[behavior](http://dictionary.reference.com/browse/behavior)" へのリンクが表示されます。変形スペルは使わないようにしましょう。

- **正**: localize, behavior
- **誤**: localise, behaviour

### 用語

#### HTML 要素

HTML や XML の要素を表すには "elements" を使用し、 "tags" を使用しないでください。加えて、基本的に常に "<>" で囲んで記述し、 {{HTMLElement("code")}} スタイルの中に入れてください。

その要素を節の中で初めて参照するときは、 [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs) マクロを使用して要素の文書へのリンクを作成してください (その要素のリファレンス文書ページ内で書いている場合を除く)。

- **正**: the {{HTMLElement("span")}} element
- **誤**: the span tag

#### parameter と argument

MDN で推奨する用語は **parameter** です。
一貫性のためにできるだけ "argument" の用語は使用しないでください。

#### ユーザーインターフェイス操作

一連の作業を記述する際には、命令調でインターフェイスでの操作を指示してください。ユーザーインターフェイスの要素をラベルと種類ではっきりと指定してください。

- **正**: Click the Edit button.
- **誤**: Click Edit.

### 能動態と受動態

能動態が一般的には好ましいですが、MDN の堅苦しくない雰囲気から考えると受動態も問題ありません。
けれど、どちらか首尾一貫させる意識は必要です。

## その他のリファレンス

### おすすめのスタイルガイド

ここで取り扱われていない用法とスタイルについて疑問があれば、 [Microsoft Writing スタイルガイド](https://docs.microsoft.com/en-us/style-guide/welcome/) を、それでもダメなら [Chicago Manual of Style](https://www.amazon.com/Chicago-Manual-Style-16th/dp/0226104206) を参照してください。 [非公式の crib sheet for the Chicago Manual of Style](https://faculty.cascadia.edu/cma/HIST148/cmscrib.pdf) がオンラインで利用できます。

### おすすめの辞書

単語の綴りでわからないことがあれば、 [Dictionary.com](http://www.dictionary.com/) を参照してください。このサイトのスペルチェッカはアメリカ英語を基準にしています。それ以外の表記を使用しないでください（例えば _color_ を _colour_ の代わりに使用してください）。

何度もガイドが拡張されることになるでしょう。もし、このドキュメントでカバーされていない特定の質問がある場合は、[連絡してください](/ja/docs/MDN/Contribute/Getting_started#step_4_ask_for_help)。そうすれば、何を追加すべきかが分かります。

### 言語、文法、綴り

記事の執筆と編集スキルを磨きたければ、以下のリソースが役立つことでしょう。(英語の情報)

- [On Writing Well](https://www.amazon.com/Writing-Well-30th-Anniversary-Nonfiction/dp/0060891548), by William Zinsser (Amazon link)
- [Style: The Basics of Clarity and Grace](https://www.amazon.com/Style-Basics-Clarity-Grace-4th/dp/0205830765/), by Joseph Williams and Gregory Colomb (Amazon link)
- [Common Errors in English](https://brians.wsu.edu/common-errors-in-english-usage/)
- [English Grammar FAQ](https://www-personal.umich.edu/~jlawler/aue.html) (alt.usage.english)
- [Bob's quick guide to the apostrophe, you idiots](https://www.angryflower.com/bobsqu.gif) (funny)
- [Merriam-Webster's Concise Dictionary of English Usage](https://www.amazon.com/Merriam-Websters-Concise-Dictionary-English-Usage/dp/B004L2KNI2) (Amazon link): Scholarly but user-friendly, evidence-based advice; very good for non-native speakers, especially for preposition usage.
- [English Language and Usage StackExchange](https://english.stackexchange.com/): Question and answer site for English language usage.
