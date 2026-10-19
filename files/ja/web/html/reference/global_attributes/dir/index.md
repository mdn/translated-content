---
title: "`dir` グローバル属性 (HTML)"
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 8ed465762d06fa17f7cc6adb3e2be9b57df03e9b
---

**`dir`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)は[列挙型](/ja/docs/Glossary/Enumerated)属性で、要素の基本のテキスト方向を設定し、そのコンテンツを周囲のテキストから方向的に分離します。

{{InteractiveExample("HTML デモ: dir", "tabbed-standard")}}

```html interactive-example
<p dir="rtl">
  This paragraph is in English but incorrectly goes right to left.
</p>
<p dir="ltr">This paragraph is in English and correctly goes left to right.</p>

<hr />

<p lang="ar">هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
<p lang="ar" dir="auto">
  هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.
</p>
```

## 値

次の値を使用することができます。

- `ltr`: 基本のテキスト方向を左書き (_left-to-right_) に設定します。
- `rtl`: 基本のテキスト方向を右書き (_right-to-left_) に設定します。
- `auto`: ユーザーエージェントがテキストから基本の方向を決定します。通常、明確な方向性を持つ最初の文字を使用して決定されます（`<bdi>`、`<script>`、`<style>`、`<textarea>`、および有効な `dir` 属性を持つ要素は除外されます）。{{HTMLElement("textarea")}} および {{HTMLElement("pre")}} の場合、レンダリング方向はテキストのそれぞれの段落で別個に決定されます。

> [!NOTE]
> `auto` の値は、ユーザー入力や外部データなど、書字方向が不明なデータに使用すべきです。
>
> ユーザーが入力を送信する際に [`dirname`](/ja/docs/Web/HTML/Reference/Attributes/dirname) 属性が使用されている場合、自動検出に頼らず、指定された書字方向でデータを表示できます。

指定されていない場合や無効な場合、書字方向は通常、親要素から[継承](#継承)されます。`dir` を省略しても、書字方向の自動検出をすることができるわけではありません。

## 継承

要素に `dir` 属性が指定されていない場合、ふつうは書字方向をその[親ノード](/ja/docs/Web/API/Node/parentElement)、または親ノードがシャドウルート ({{domxref("ShadowRoot")}}) であった場合はその {{domxref("ShadowRoot/host", "host")}} から継承します。書字方向が設定された祖先ノードがない場合は、デフォルトで左書き (left-to-right) になります。

例外もあります。

- {{HTMLElement("bdi")}} 要素は、あたかも `dir="auto"` が設定されているかのように、そのコンテンツに基づいて方向を決定します。
- [`<input type="tel">`](/ja/docs/Web/HTML/Reference/Elements/input/tel) 要素は左書き (left-to-right) を使用します。

## 使用上の注意

基本書字方向は、Unicode 双方向アルゴリズム（[BiDi](/ja/docs/Glossary/BiDi)）で使用されています。LTR（左書き）または RTL（右書き）として明確に指定された文字（ラテン文字、ヘブライ文字、アラビア文字など）は、それ自体およびその間に位置するすべての中立文字の書字方向を決定する（テキストの「走行」を生成する）一方で、基本書字方向は以下の 2 つの状況において必要となります。

- 異なる書字方向を持つテキストの連続部分の境界（多くの場合、その最初や最後を含む）には、中立文字（スペースや句読点など）が挿入されると想定されます。
- テキストの連続部分を順序付けるために使用されます。

例えば、[試してみましょう](#試してみましょう)のデモにある最初の英語の段落を考えてみましょう。ここには 2 つのテキストブロックがあります。1 つは英語のテキスト（ラテン文字を使用しているため LTR）で、もう 1 つは最後のピリオド（`p` 要素の末尾にあるため、基本書字方向が RTL と想定されます）です。これらのテキストブロックは右から左 (RTL) に配置されるため、テキストがまず右端に現れ、その左側にピリオドが続きます。同様に、最初のアラビア語の段落も HTML 文書から LTR の基本書字方向を継承しているため、RTL のアラビア語テキストが左端に現れ、その右側にピリオド（LTR 方向）が続きます。どちらの段落も、組版的には正しくない表示となっています。

単一の文字体系で書かれた文書であっても、ルート要素に `dir` を明示的に設定することを推奨します。これは、主に RTL 文字体系の場合はデフォルトの LTR 基本書字方向が誤っているため、特に重要です。[`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性は言語を宣言しますが、基本書字方向を示すものではありません。

この属性は、 CSS の {{ cssxref("direction") }} プロパティや {{ cssxref("unicode-bidi") }} プロパティで上書きできます。ただし、 CSS が有効かつ要素がこれらのプロパティに対応する場合に限ります。

テキストの書字方向はその外見ではなく、コンテンツに対して意味論的な関係がありますので、ウェブ開発者には、可能であれば関連する CSS プロパティよりもこの属性を使用することを推奨します。これにより、CSS に対応しないブラウザーや CSS を無効化したブラウザーでもテキストが正しく表示されます。

画像の `dir` プロパティを `"rtl"` に設定すると、HTML の `title` および `alt` 属性が `"rtl"` として整形および定義されます。

表の `dir` が `"rtl"` に設定されている場合、列の順序は右から左に並べられます。

{{HTMLElement("bdo")}} 要素には、`dir="ltr"` または `dir="rtl"` の指定が必須です。この要素において、この属性は単に基本書字方向を設定するだけでなく、文字の内在的な書字方向を上書きします。

ブラウザーではユーザーが {{ HTMLElement("input") }} や {{ HTMLElement("textarea") }} の書字方向を変更することを許可して、コンテンツの執筆を支援していることがあります。
Chrome と Safari は入力フィールドのコンテキストメニューに書字方向のオプションを提供しています。
Firefox は <kbd>Ctrl</kbd> (Windows)/<kbd>Cmd</kbd> (macOS) + <kbd>Shift</kbd> + <kbd>X</kbd> を使用しますが、`dir` 属性の値は変更しません。
これらの機能により、`dir` 属性の値が `ltr` と `rtl` の間で切り替わります。

## 例

### 文書レベルの書字方向を設定

ページが主にアラビア語やヘブライ語などの右書き文字で書かれている場合は、{{HTMLElement("html")}} 要素に `dir="rtl"` を設定してください。ページ内のブロックで、異なる基本書字方向が必要な場合は、そのブロックに `dir` を設定してください。

このアラビア語の文書では、英語の段落には `dir="ltr"` と `lang="en"` の両方が必要です。

```html
<!doctype html>
<html dir="rtl" lang="ar">
  <head>
    <meta charset="utf-8" />
    <title>صفحة عربية</title>
  </head>
  <body>
    <p>محتوى الصفحة باللغة العربية.</p>
    <p dir="ltr" lang="en">This paragraph is in English.</p>
  </body>
</html>
```

### テキストの書字方向を明示的に設定

この例では、2 つの段落の基本書字方向を明示的に設定しています。基本書字方向は、デフォルトの配置や句読点の配置に影響を与えます。

```html
<p dir="ltr" lang="en">This sentence is in English and reads left to right.</p>
<p dir="rtl" lang="ar">
  هذه الجملة باللغة العربية وتُقرأ من اليمين إلى اليسار.
</p>
```

### インラインの双方向テキスト

インラインの句が周囲のテキストとは異なる基本書字方向である場合、その句全体を適切な `dir` 値を持つ要素で厳密に囲みます。これにより、その句の書字方向が周囲から分離されるため、句の外側にある句読点や数値は、その句の一部として扱われなくなります。書籍のタイトルには {{HTMLElement("cite")}} のような既存の意味づけの要素を使用し、他の要素がない場合は {{HTMLElement("bdi")}} を使用してください。

```html
<p dir="rtl" lang="ar">
  اقرأ <cite dir="ltr" lang="en">How the Grinch Stole Christmas!</cite> اليوم.
</p>
```

なお、タイトルの一部である感嘆符は、`<cite>` 要素の内側にあることに注意してください。外側にあると、基本方向が適用されるため、タイトルの左端に現れてしまいます。

### ユーザー生成コンテンツでの dir="auto" の使用

ユーザーのコメントなど、テキストの方向が事前にわからない場合は、`dir="auto"` を使用してください。ブラウザーは、まず現れた書字方向が明確な文字に基づいて、要素の基本書字方向を決定します。これは経験則に基づくものであり、言語の検出ではありません。たとえば、英語の名前で始まり、その後アラビア語が続くコメントの場合、基本書字方向は「左書き」となります。書字方向がわかっている場合は、明示的に指定してください。

ここでは、各段落は 2 つの考えられるコメントを表します。これらのコメントはユーザーによって書かれたものであるため、サイト側はレンダリング時にその言語を認識できません。

```html
<p dir="auto">This comment is in English.</p>
<p dir="auto">هذا التعليق باللغة العربية.</p>
```

{{HTMLElement("bdi")}} 要素も同様の効果をもたらし、特に適切な意味づけ要素がない場合、インラインの分離をより簡潔に行うことができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべて[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
- {{domxref("HTMLElement.dir")}} は、この属性を反映します。
- [テキストの様々な方向の扱い](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Creating HTML pages in Arabic, Hebrew and other right-to-left scripts](https://www.w3.org/International/tutorials/bidi-xhtml/index.en.html) - w3.org
