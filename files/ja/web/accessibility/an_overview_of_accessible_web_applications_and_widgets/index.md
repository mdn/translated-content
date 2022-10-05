---
title: アクセシブルな Web アプリケーションやウィジェットの概要
slug: Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets
---

Web は変化しています。静的でページに基づくサイトは、次第に動的でデスクトップスタイルの、JavaScript や AJAX を多用する Web アプリケーションに置き換えられています。デザイナーは JavaScript、HTML、CSS を組み合わせて、驚くような新しいウィジェットやコントロールのすべてを作り上げています。この変化は Web の応答性やユーザビリティを劇的に向上させる可能性を秘めていますが、多くのユーザはアクセシビリティのギャップにより閉め出されてしまう恐れがあります。JavaScript は伝統的に、スクリーンリーダーなどの支援技術のユーザに対してアクセシブルではないと言われてきましたが、現在はさまざまなユーザに対してアクセシブルな動的 Web ユーザインターフェイスを作成するための手段があります。

## 問題点

ほとんどの JavaScript ツールキットは、よく知られたデスクトップインターフェイスの動作を模倣する、クライアントサイドのウィジェットのライブラリを提供します。スライダー、メニューバー、ファイルリストビューなどを JavaScript、CSS、HTML の組み合わせにより構築できます。HTML 4 の仕様はこれらの種類のウィジェットを意味的に表すタグを内蔵していないため、一般的に開発者は \<div> や \<span> といった汎用の要素を使用します。これはデスクトップによく似たもののように見えますが、支援技術が使用するのに値する意味的な情報は、たいていマークアップ内にありません。Web ページ上の動的コンテンツは、どのような理由であれ画面を見ることができないユーザにとって特に問題になる可能性があります。株価表示、Twitter のフィード更新、進捗の表示やそれらに似たコンテンツは、支援技術 (AT) が認識できないかもしれない方法で DOM を変更します。ここが、[ARIA](/ja/docs/ARIA) が必要になるところです。

_例 1: ARIA でラベルをつけずに作成したタブウィジェットのマークアップ。ウィジェットの外観や機能を示す情報は、マークアップ内にありません。_

```html
<!-- これはタブウィジェットです。マークアップだけを見て、どのようにしてわかるのでしょうか?-->
<ol>
  <li id="ch1Tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <div id="ch1Panel">Chapter 1 content goes here</div>
  <div id="ch2Panel">Chapter 2 content goes here</div>
  <div id="quizPanel">Quiz content goes here</div>
</div>
```

_例 2: タブウィジェットはどのようにして視覚的にスタイルが設定されるのでしょうか。ユーザはそれを視覚的に認識するでしょう。しかし、支援技術向けに機械が読み取れる意味の情報はありません。_
![Screenshot of the tabs widget](Tabs_Widget.png)

## ARIA

W3C の [Web Accessibility Initiative](http://www.w3.org/WAI/) から生まれた [WAI-ARIA](http://www.w3.org/WAI/intro/aria.php) こと **Accessible Rich Internet Applications** 仕様は、スクリーンリーダーのような支援技術が必要とする、欠けているセマンティクスを追加する手段です。ARIA はマークアップに特別な属性を追加することで、開発者が自身のウィジェットをより詳しく説明することを可能にします。ARIA は動的な Web アプリケーションにおいて、標準の HTML タグとデスクトップスタイルのコントロールとの間にあるギャップを埋めるように設計されており、ほとんどのよく知られた UI ウィジェットの動作を示す役割や状態を与えます。

ARIA 仕様書は 3 種類の属性に分けられています: ロール、ステート、プロパティです。ロールは HTML 4 において他の方法で利用できないウィジェット、例えばスライダー、メニューバー、タブ、ダイアログなどを説明します。プロパティはこれらのウィジェットの特徴、例えばドラッグ可能、必須の要素がある、関連づけられたポップアップがあるなどを説明します。ステートは要素について支援技術に伝える現在の対話状態、例えばビジー、無効、選択中、非可視などを説明します。

ARIA の属性はブラウザによって自動的に解釈され、オペレーティングシステムのネイティブなアクセシビリティ API に変換されるように設計されています。ARIA が提供されていると、支援技術は独自の JavaScript コントロールについて、デスクトップにおける同等物と同じ方法で、認識および対話ができます。支援技術のユーザが Web ベースのアプリケーションを使用するときに、デスクトップアプリケーションの動作に関するあらゆる知識を適用できますので、以前の Web アプリケーションより一貫したユーザエクスペリエンスをもたらす可能性を秘めています。

_例 3: ARIA の属性を追加したタブウィジェットのマークアップ。_

```html
<!-- *これら* はタブです!-->
<!-- タブリストや各タブを表すために、role 属性を追加しました。-->
<ol role="tablist">
  <li id="ch1Tab" role="tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab" role="tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab" role="tab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <!-- タブのパネルを表すために追加した role および aria-labelledby 属性に注目してください。-->
  <div id="ch1Panel" role="tabpanel" aria-labelledby="ch1Tab">Chapter 1 content goes here</div>
  <div id="ch2Panel" role="tabpanel" aria-labelledby="ch2Tab">Chapter 2 content goes here</div>
  <div id="quizPanel" role="tabpanel" aria-labelledby="quizTab">Quiz content goes here</div>
</div>
```

ARIA は Firefox、Safari、Opera、Chrome、Internet Explorer といった主要なブラウザの最新バージョンでサポートされています。オープンソースの NVDA や Orca スクリーンリーダーなど、多くの支援技術も ARIA をサポートしています。jQuery UI、YUI、Google Closure、Dojo Dijit などの JavaScript ウィジェットライブラリも、次第に ARIA のマークアップを導入しています。

### 表現の変化

動的な表現の変化には、コンテンツを表示させたり隠したりすることはもちろん、コンテンツの外見を変える (不正なデータを囲む赤色のボーダー、チェックされたチェックボックスの背景色を変えるなど) ために CSS を使用することも含みます。

#### 状態の変化

ARIA に、UI ウィジェットの現在の状態を定義する属性があります。例えば以下のとおりです (これだけではありません):

- **`aria-checked`**: チェックボックスやラジオボタンの状態を示します。
- **`aria-disabled`**: 要素は可視状態ですが、編集や他の操作ができないことを示します。
- **`aria-grabbed`**: ドラッグアンドドロップの操作で、オブジェクトが 'つかまれている' 状態を示します。

(ARIA のすべてのステートの一覧については、[ARIA のステートとプロパティの一覧](http://www.w3.org/TR/wai-aria/states_and_properties)をご覧ください。)

開発者は UI ウィジェット要素の状態を示すために ARIA のステートを使用して、ステートの変化に基づく視覚的外見の変更に (スクリプトを使用して要素のクラス名を変更するのではなく) CSS の属性セレクタを使用しましょう。

#### 可視性の変化

コンテンツの可視性を変えるとき (例えば要素を隠したり表示したりする)、開発者は **`aria-hidden`** プロパティの値を変更するとよいでしょう。先に説明した手法を、`display:none` を使用して要素を視覚的に隠すという CSS を示すために使用しましょう。

これは、可視性の制御に **`aria-hidden`** を使用するツールチップの例です。この例では、入力フィールドに関する指示を収めたツールチップを持つシンプルな Web フォームの例を示しています。例の中で関係する部分を、以下で説明します。

この例でツールチップ用の HTML は、例 2a で示す形式になっています。9 行目で **`aria-hidden`** を `true` に設定しています。

_例 2a: ツールチップ用の HTML_

```html
<div class="text">
    <label id="tp1-label" for="first">First Name:</label>
    <input type="text" id="first" name="first" size="20"
           aria-labelledby="tp1-label"
           aria-describedby="tp1"
           aria-required="false" />
    <div id="tp1" class="tooltip"
         role="tooltip"
         aria-hidden="true">Your first name is a optional</div>
</div>
```

このマークアップ用の CSS を例 2b で示します。ここでは独自のクラス名を使用せず、1 行目で **`aria-hidden`** 属性の状態のみを使用していることに注意してください。

_例 2b: 状態を示すための、属性セレクタ_

```css
div.tooltip[aria-hidden="true"] {
  display: none;
}
```

**>`aria-hidden`** プロパティを更新するための JavaScript は、例 2c で示す形式になっています。このスクリプトは **>`aria-hidden`** 属性しか更新しないことに注意してください (2 行目)。独自のクラス名の追加や削除は不要です。

_例 2c: aria-hidden 属性を更新する JavaScript_

```js
var showTip = function(el) {
  el.setAttribute('aria-hidden', 'false');
}
```

### ロールの変化

> **メモ:** 作成中

ARIA によって開発者は、誤った意味を持っていたり意味が存在しない要素に対して意味的なロールを宣言することができます。例えばメニューを作るために順番付けがないリストを使用するとき、{{HTMLElement("ul")}} に `menubar` の **`role`** を、各々の {{HTMLElement("li")}} に `menuitem` の **`role`** を与えるべきです。

要素の **`role`** を変更するべきではありません。代わりに元の要素を削除して、新たな **`role`** の要素で置き換えてください。

例えば "インライン編集" ウィジェットについて考えてみましょう: これはコンテキストを切り替えることなく、ユーザがその場でひとまとまりのテキストを編集できるコンポーネントです。このコンポーネントは、テキストの編集はできませんがアクティブが可能な "閲覧" モードと、テキストの編集が可能な "編集" モードがあります。開発者は、ARIA の **`role`** を `button` に設定した読み取り専用の text 型 {{HTMLElement("input")}} 要素で "閲覧" モードを実装して、要素を書き換え可能にするとともに "閲覧" モードの **`role`** 属性を削除する ({{HTMLElement("input")}} は自身のロールを意味として持っているため) ことで "編集" モードに切り替えようと考えるでしょう。

これを行ってはいけません。代わりに **`role`** が `button` である {{HTMLElement("div")}} や {{HTMLElement("span")}} といった、まったく別の要素を使用して "閲覧" モードを、また text 型の {{HTMLElement("input")}} 要素を要して "編集" モードを実装してください。

### 非同期のコンテンツ変更

> **メモ:** 作成中です。[Live Regions](/ja/docs/ARIA/Live_Regions) もご覧ください。

## キーボードナビゲーション

開発者は、独自のウィジェットを作成する際にキーボードのサポートを見落とすことがよくあります。さまざまなユーザにとってアクセシブルにするために、すべての Web アプリケーションやウィジェットはマウスを必要とせずにキーボードでも操作できるようにするべきです。実際、通常これはデスクトップにおける同様のウィジェットがサポートする慣習への準拠度を向上させて、Tab、Enter、スペース、矢印キーのあらゆる利点を獲得します。

伝統的に、Web におけるキーボードナビゲーションは Tab キーに限定されてきました。ユーザはページ内の各リンク、ボタン、フォームへ順番にフォーカスを当てるために Tab キーを、逆順に進むために Shift-Tab を押します。これは一次元、つまり一度に 1 つの要素で、進むまたは戻るナビゲーションです。かなり分量の多いページでは、キーボードのみ使用するユーザは必要なセクションへアクセスするまでに何度も Tab キーを押さなければなりません。Web においてデスクトップスタイルのキーボード操作の慣習を実装すると、多くのユーでナビゲーションが劇的に高速化する可能性があります。

以下は、ARIA が有効な Web アプリケーションでどのようなキーボードナビゲーションが動作すべきかの概要です:

- Tab キーは、全体としてウィジェットへフォーカスを当てます。例えばメニューバーで Tab キーを押すと、メニューの最初の項目にフォーカスを当てるべきです。
- 矢印キーは、ウィジェット内での選択やナビゲーションをできるべきです。例えば左または右矢印キーを使用すると、前や次のメニュー項目にフォーカスを移動できます。
- フォームの中にないウィジェットは、Enter やスペースキーでコントロールの選択やアクティブ化を行うべきです。
- フォーム内で、スペースキーはコントロールの選択やアクティブ化を、Enter キーはフォームのデフォルトのアクションの実行を行うべきです。
- 迷った場合はあなたが作成するコントールの、デスクトップにおける標準的な動作を模倣しましょう。

従って前出のタブウィジェットの例では、ユーザが Tab および Shift+Tab キーを使用してウィジェットのコンテナ (マークアップにおける \<ol>) に出入りするナビゲーションを行えるとよいでしょう。キーボードのフォーカスがコンテナ内に入ったら、矢印キーで各々のタブ (\<li> 要素) を行き来できるとよいでしょう。ここからは、プラットフォームによって慣習が異なります。Windows では、ユーザが矢印キーを押すと自動的に次のタブがアクティブ化されます。Mac OS X では、ユーザは次のタブをアクティブ化するために Enter またはスペースキーを押します。[キーボードでナビゲーション可能な JavaScript ウィジェット](/ja/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)作成の包括的なチュートリアルで、このような動作を JavaScript で実装する方法を説明します。

デスクトップスタイルのキーボードナビゲーションの慣習に関する詳細として、包括的な [DHTML style guide](http://access.aol.com/dhtml-style-guide-working-group/) があります。これは、ARIA がサポートする各種ウィジェットで動作すべきキーボードナビゲーションは何かの概要を示します。W3C でもさまざまなウィジェット向けのキーボードナビゲーションやショートカットの慣習を収めた、[ARIA Best Practices](http://www.w3.org/WAI/PF/aria-practices/Overview.html) の有用なドキュメントを提供しています。

## 関連情報

- [ARIA](/ja/docs/ARIA)
- [Web アプリケーションと ARIA の FAQ](/ja/docs/Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ)
- [WAI-ARIA Specification](http://www.w3.org/TR/wai-aria/)
- [WAI-ARIA Best Practices](http://www.w3.org/WAI/PF/aria-practices/Overview.html)
- [DHTML Style Guide](http://access.aol.com/dhtml-style-guide-working-group/)
