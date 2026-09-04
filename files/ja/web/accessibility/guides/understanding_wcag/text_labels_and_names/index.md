---
title: テキストラベルと名前
slug: Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

コントロール、ダイアログ、その他のウェブサイト機能には、支援技術の利用者がその目的や正しい操作方法を理解できるよう、説明的な名前やラベルを付けるべき状況が数多く存在します。このカテゴリには様々な種類の問題が、様々な文脈で見られ、それぞれに固有の解決策があります。それぞれの問題と解決策については、以下の節で説明します。

## href 属性を持つ area 要素に alt 属性でラベルを付ける

イメージマップでは、それぞれの {{htmlelement("area")}} 要素に、その領域がリンクするリソースを説明する名前を含む `alt` 属性を付与してください。これを怠ると、支援技術を利用するユーザーがイメージマップを利用しにくくなります。彼らは画像の目的を理解するために代替テキストを必要とするためです。

### 例

以下の例はイメージマップを示しています（[H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/TR/WCAG20-TECHS/H24.html) より引用）。

```html
<img
  src="welcome.gif"
  usemap="#map1"
  alt="Areas in the library. Select an area for
more information on that area." />
<map id="map1" name="map1">
  <area shape="rect" coords="0,0,30,30" href="reference.html" alt="Reference" />
  <area
    shape="rect"
    coords="34,34,100,100"
    href="media.html"
    alt="Audio visual lab" />
</map>
```

ライブインタラクティブ例については、[`<area>` 要素リファレンスページ](/ja/docs/Web/HTML/Reference/Elements/area)を参照してください。

### 関連情報

- {{htmlelement("area")}}
- [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/TR/WCAG20-TECHS/H24.html)

## ダイアログにラベルを付けるべき

ダイアログボックスとして機能するコンテナー（例：ユーザーに選択を求めたり、実行中の操作への応答を求めるモーダルダイアログ）には、その目的を補助技術ユーザーが容易に把握できるよう、説明的なラベルまたは名前を付与してください。

ダイアログボックスは通常、 ARIA の [`role="dialog"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) または [`role="alertdialog"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role) で表現されます。ラベルを設定するには [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) または [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性を使用することができます。

### 例

以下の例ではダイアログボックスを表示しており、 `role="dialog"` でその旨を定義し、 `aria-labelledby` を用いてラベル付けしています。

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">詳細個人情報が更新されました</h2>
  <p id="dialog1Desc">
    ユーザーアカウントセクションで、いつでも詳細を変更できます。
  </p>
  <button>閉じる</button>
</div>
```

ダイアログに見出しがない場合は、代わりに `aria-label` を使用して、ラベルのテキストを設定することができます。

```html
<div role="dialog" aria-label="個人情報更新完了">
  <p>
    お客様の情報は正常に更新されました。ユーザーアカウントセクションでいつでも情報を変更できます。
  </p>
  <button>閉じる</button>
</div>
```

### 関連情報

- [`role="dialog"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)
- [`role="alertdialog"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [Dialog authoring practices](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

## 文書にはタイトルが必要

それぞれの HTML 文書には、ページの目的を説明する {{htmlelement("title")}} を含めることが重要です。支援技術を利用するユーザーにとって一般的なナビゲーション手法は、ページのタイトルを読み取ることでその内容を知ることです。タイトルが利用できない場合、ユーザーはページを操作して内容を判断しなければならず、これは時間がかかり、混乱を招く可能性のあるプロセスとなります。

### 例

{{htmlelement("title")}} 要素に関する参照記事のタイトルは以下の通りです。

```html-nolint
<title>
  &lt;title&gt;: 文書題名要素 - HTML | MDN
</title>
```

他の例としては、次のようなものになるかもしれません。

```html
<title>登録する詳細情報を入力してください — myGov サービス</title>
```

ユーザーに役立つように、ページの重要な状態変化（フォームの検証問題など）を反映するようにページタイトルの値を更新できます。

```html
<title>エラー 2 件 — 登録する詳細情報を入力してください — myGov サービス</title>
```

### 関連情報

- {{htmlelement("title")}}

## 埋め込みコンテンツはラベル付けが必要

コンテンツを埋め込む要素には、埋め込まれた内容を説明する [title](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性を必ず設定してください。これには {{htmlelement("embed")}} a要素と {{htmlelement("object")}} 要素が含まれます。これらの要素は、 {{HTMLelement("img")}} 要素と同様に、グラフィックコンテンツに使用されることがよくあります。タイトルが説明的であると、支援技術を利用するユーザーが要素が何を表示しているかを理解するのに役立ちます。

## キャプションがオプションである図はラベル付けが必要

アクセシビリティを最適化するために、技術的には任意ですが、{{HTMLElement("figure")}} 要素内に {{HTMLElement("figcaption")}} を含めることを推奨します。このキャプションは、図内の画像に設定される代替テキストにさらに追加するものです。このキャプションは、文書における画像の目的を記述するものであり、代替テキストが提供する視覚的要素の説明とは異なる場合があります。

### 例

以下の例は、図とキャプションのコードを示しています。 {{htmlelement("img")}} の `alt` 属性は画像の見た目を説明し、{{htmlelement("figcaption")}} は機能的な観点から説明します（この場合、画像内の花の学名）。

```html-nolint
<figure>
  <img
    src="milkweed.jpg"
    alt="トウワタの花の白黒接写写真" />
  <figcaption>Asclepias verticillata</figcaption>
</figure>
```

## fieldset セット要素はラベル付けが必要

fieldset 要素は、他のフォーム要素と同様にテキストによる説明が必要です。フィールドセットの目的を記述するには、{{htmlelement("legend")}} 要素を使用してください。

## legend を使用して fieldset にラベル付けする

複数のフォーム要素を {{htmlelement("fieldset")}} 要素でグループ化した場合、その内部に {{htmlelement("legend")}} 要素を含め、グループの内容を明確に説明する記述を含める必要があります。

支援技術の利用者は、グループ全体の目的を理解しようとする際にこの説明が役に立ちます。説明文がないと、グループ内の個々のフォームコントロールを操作しながら全体的な目的を推測する必要があり、混乱を招く可能性があります。

### 例

```html
<form>
  <fieldset>
    <legend>好きなモンスターを選択してください</legend>

    <input type="radio" id="kraken" name="monster" value="K" />
    <label for="kraken">クラーケン</label><br />

    <input type="radio" id="sasquatch" name="monster" value="S" />
    <label for="sasquatch">ビッグフット</label><br />

    <input type="radio" id="mothman" name="monster" value="M" />
    <label for="mothman">モスマン</label>
  </fieldset>
</form>
```

この例のインタラクティブなライブ版を、[`<fieldset>` のリファレンスページ](/ja/docs/Web/HTML/Reference/Elements/fieldset) で確認できます。

### 関連情報

- {{htmlelement("fieldset")}}
- {{htmlelement("legend")}}

## フォーム要素はラベル付けが必要

フォーム内のすべての要素には、その目的を識別する {{htmlelement("label")}} が必要です。これは、すべての種類の {{htmlelement("input")}} アイテム、{{htmlelement("button")}}、{{htmlelement("output")}}、{{htmlelement("select")}}、{{htmlelement("textarea")}}、{{htmlelement("progress")}}、{{htmlelement("meter")}} の各要素、および [ARIA の `switch` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)を持つ要素にも適用されます。

フォーム要素とラベルの関連付けが構造から明らかな場合、フォーム要素を {{htmlelement("label")}} 内に配置できます。あるいは、フォーム要素の `id` 値をラベルの `for` 属性の値として指定することで、 {{htmlelement("label")}} とフォーム要素の関連付けをすることができます。

### 例

```html
<label
  >利用規約に同意します。
  <input type="checkbox" id="terms" name="terms" />
</label>

<input type="checkbox" id="email-opt-in" name="opt-in" />
<label for="email-opt-in">この製品についてのニュースを送ってください。</label>
```

## フォーム要素には見えるテキストラベルを設定すべき

すべてのフォーム要素に {{htmlelement("label")}} を設定することに加えて、それらのラベルは非表示ではなく表示されている必要があります。表示されたラベルは、すべてのユーザーがフォーム要素の目的を理解するのに役立ちます。プレースホルダーテキストに依存しないでください。ユーザーが入力を開始するとすぐに消えてしまうためです。

## フレーム要素はラベル付けが必要

フレーム要素（{{htmlelement("iframe")}} および廃止された古い {{htmlelement("frame")}} の両方）には、フレームの内容を説明するタイトルが必要です。フレーム要素にラベル付けするには `title` 属性を使用してください。タイトルがない場合、支援技術の利用者はフレームの内容を理解するためにフレーム内を操作する必要があり、これは困難で混乱を招く可能性があります。

{{HTMLElement("frame")}} 要素は、HTML 仕様から除外されました。将来的にブラウザーによる対応が終了する可能性があります。さらに、{{HTMLElement("frame")}} 要素を含むページは、スクリーンリーダーによる操作が困難です。アクセシビリティと将来の保守性を考慮し、フレームを使用しているページは、CSS を用いて同様のレイアウトを実現するよう再設計してください。

ベストプラクティスとして、フレーム内に埋め込まれた文書にも、フレームの `title` 属性と同一の内容を持つ {{htmlelement("title")}} を指定してください（これは埋め込まれた文書が自身の管理下にあることを前提とします。そうでない場合は、フレームの `title` 属性を文書のタイトルに一致させるよう努めてください）。一部のスクリーンリーダーは、`title` 属性の内容を、読み込まれた文書の {{htmlelement("title")}} の内容で置き換えます。両方の場所に同じタイトルを提供することが、最も安全でアクセシビリティに配慮した方法です。

### 例

```html
<iframe
  title="MDN Web docs"
  width="300"
  height="200"
  src="https://developer.mozilla.org">
</iframe>
```

## 見出しはラベル付けが必要

見出しには空でないテキストコンテンツを入れ、CSS の `display:none` や `aria-hidden=true` などで非表示にしないでください。スクリーンリーダーの利用者は、文書の構造や内容を理解するために見出しに依存しています。

また、[見出し要素](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements)は実際のセクションの見出しにのみ使用し、テキストを目立たせるためのショートカットとして使用しないようにしてください。スクリーンリーダー利用者は通常、視覚障害のないユーザーと同様にページの見出しを「ざっと読み」ます。見出し要素でマークアップされた非見出しテキストは混乱を招く可能性があります。

## 見出しには可視テキストコンテンツを含めるべき

見出しには空でないテキストコンテンツを含め、CSS の `display:none` や `aria-hidden=true` などで非表示にしないでください。スクリーンリーダー利用者は、文書の構造や内容を理解するために見出しに依存しています。画像やその他のグラフィックコンテンツの見出し要素としての使用は避けてください。

## `<iframe>` のコンテンツを説明するために title 属性を使用する

{{htmlelement("iframe")}} 要素には、フレームの内容を説明する `title` 属性を必ず設定してください。タイトルがない場合、支援技術を利用するユーザーは、フレームの内容を理解するためにフレーム内を操作する必要があり、これは困難で混乱を招く可能性があります。

ベストプラクティスとして、フレーム内に埋め込まれた文書にも、フレームの `title` 属性と同一の内容を持つ {{htmlelement("title")}} を指定してください（これは埋め込まれた文書が自身の管理下にあることを前提とします。そうでない場合は、フレームの `title` 属性を文書のタイトルに一致させるよう努めてください）。一部のスクリーンリーダーは、`title` 属性の内容を、読み込まれた文書の {{htmlelement("title")}} の内容で置き換えます。両方の場所に同じタイトルを提供することが、最も安全でアクセシビリティに配慮した方法です。

## 画像付きコンテンツはラベル付けが必要

コンテンツを含む（つまり装飾的でない）画像および画像のような要素すべてに説明テキストを提供してください。これには SVG 画像、{{htmlelement("img")}}、 {{htmlelement("canvas")}}、{{htmlelement("map")}}、{{htmlelement("area")}} 要素、および`type=image` が指定された {{htmlelement("input")}} 要素、`type` が `image/` で始まる {{htmlelement("object")}} 要素も含まれます。これを行う一般的な方法は `alt` 属性を使用することです。説明文が画像に表示されている内容を正確に伝えるようにしてください。

### 例

```html-nolint
<img
  src="milkweed.jgp"
  alt="トウワタの花の白黒接写写真" />
```

## インタラクティブな要素はラベル付けが必要

ユーザーが操作する要素にはラベルを付ける必要があります。操作可能な要素には、リンク ({{htmlelement("a")}})、フォーム要素、ボタン、マウスやキーボードイベントのハンドラーを持つ要素が含まれます。要素へのラベル付け方法は要素の種類によって異なります。フォーム要素には {{htmlelement("label")}} を使用します。リンク、ボタン、クリック可能な要素については、通常その要素のテキストコンテンツがラベルとなります。要素にラベルを付ける他の手段がない場合は、 [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性を使用してください。

## optgroup 要素には label 属性を使用する

{{htmlelement("optgroup")}}要素では、支援技術がユーザーに提供できるよう、グループを説明する `label` 属性を使用してください。

### 例

この例では、`label` 属性を {{HTMLElement('optgroup')}} 要素に付けて、選択肢のグループのカテゴリー名を与えています。

```html
<label for="dino-select">恐竜を選択してください:</label>
<select id="dino-select">
  <optgroup label="獣脚類">
    <option>ティラノサウルス</option>
    <option>ヴェロキラプトル</option>
    <option>デイノニクス</option>
  </optgroup>
  <optgroup label="竜脚類">
    <option>ディプロドクス</option>
    <option>サルタサウルス</option>
    <option>アパトサウルス</option>
  </optgroup>
</select>
```

## 複数のツールバーがある場合はラベル付けが必要

ARIA の `toolbar` ロールを使用したウェブアプリに複数のツールバーがある場合は、 [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) 属性を使用してそれぞれにラベル付けしなければならず、そうすることで支援技術から説明することができます。ツールバーにラベル付けをすることは、ツールバーが 1 つしかなくてもグッドプラクティスです。

### 関連情報

- [W3C ARIA toolbar example](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)

## 関連する WCAG 成功条件

- [1.1.1 Non-text Content (A)](https://w3c.github.io/wcag/guidelines/22/#non-text-content)
  - : ユーザーに表示されるテキスト以外のコンテンツには、上記のリンクに記載されている状況を除き、同等の目的を果たすテキスト代替手段を用意すること。
- [2.4.4 Link Purpose (In Context) (A)](https://w3c.github.io/wcag/guidelines/22/#link-purpose-in-context)
  - : 各リンクの目的が、リンクテキストのみ、またはリンクテキストとそのプログラムによって決定されるリンクコンテキストから判断できること。ただし、リンクの目的が一般ユーザーにとって曖昧になる場合はこの限りではありません。
- [2.4.9 Link Purpose (Link Only) (AAA)](https://w3c.github.io/wcag/guidelines/22/#link-purpose-link-only)
  - : リンクテキストのみから各リンクの目的を識別できる仕組みが用意されていること。ただし、リンクの目的が一般ユーザーにとって曖昧になる場合はこの限りではありません。
