---
title: ブラウザーがウェブサイトを読み込む仕組み
slug: Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites
l10n:
  sourceCommit: cab1109a0c225299a9fb2b3402bcd4a1931b8ab7
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}

前回の記事では、ウェブサイトを構成する[技術の概要](/ja/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#overview_of_modern_web_technologies)を見てきました。この記事では、それらの技術がどのようにレンダリングされるのかというプロセスについて解説します。ブラウザーがウェブページを構成するコードファイルやその他の資産を受け取った後（[ウェブの仕組み](/ja/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)で説明した通り）、それらはどのように組み合わされて、ユーザーが操作する最終的な体験が生成されるのでしょうか。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステム、ウェブブラウザー、ウェブ技術に基本的な知識があること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>HTTP のレスポンスで返されるさまざまな種類の資産。</li>
          <li>ブラウザーがさまざまなファイルをどのように組み合わせてウェブページをレンダリングし、それをユーザーに表示するのか。</li>
          <li>ブラウザーが時に敵対的なプログラミング環境と見なされる一方で、素晴らしいプログラミング環境でもある理由。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## HTTP レスポンスで返されるさまざまな種類のファイル

前の記事で取り上げた[ウェブ技術の概要](/ja/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#最近のウェブ技術の概要)を要約すると、HTTP レスポンス（ウェブページへのリクエストに対する応答）には、一般的に以下のファイル形式のいずれかが含まれています。

- HTML ファイル。ウェブページのコンテンツと構造を定義するもの。
- CSS ファイル。スタイル設定とレイアウト情報を定義するもの。
- JavaScript ファイル。ウェブページの操作可能な部分の動作を定義するもの。
- 画像、動画、音声ファイル、[PDF](/ja/docs/Glossary/PDF)、[SVG](/ja/docs/Glossary/SVG) などのメディア資産。ウェブページ内に埋め込まれたり、その他の形でブラウザーによって表示されたりするもの。
- その他のファイル形式。ブラウザーではネイティブに処理できないため、端末上の関連アプリに処理を委ねて表示するもの。例えば、Word や Pages の文書、PowerPoint のスライド資料、OpenOffice のファイルなど。

## ウェブページのレンダリング

ユーザーが（リンクをクリックしたり、ブラウザーのアドレスバーに URL を入力したりして）新しいウェブページに移動すると、いくつかの HTTP リクエストが送信され、HTTP レスポンスとしていくつかのファイルが返されます。これらのレスポンスで受け取ったファイルは、ブラウザーによって処理され、ユーザーが操作できるウェブページとして用意されます。これらの要素を組み合わせてウェブページを構成するこのプロセスは、**レンダリング**と呼ばれます。

この節では、ブラウザーがウェブページをどのようにレンダリングするかについて、大まかに説明します。これは単純化された説明であり、ブラウザーごとに処理方法が違うことに留意してください。とはいえ、この説明から、その仕組みの概要を把握することはできるでしょう。

## HTML の処理

はじめに、ウェブページのコンテンツを含み、その構造を定義する HTML ファイルがブラウザーによって受信され、構文解析されます。ブラウザーはこれを、**DOM ツリー**（**ドキュメントオブジェクトモデル**）と呼ばれるツリー状の構造に変換します。DOM は、コンピュータのメモリ内における HTML 文書の構造を表しています。例えば、次の基本的な HTML スニペットを見てみましょう。

```html
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

HTML 内のそれぞれの要素、属性、およびテキストは、ツリー構造の中で **DOM ノード**となります。ノードは、他の DOM ノードとの関係によって定義されます。一部の要素は子ノードの親となり、子ノードには兄弟ノードが存在します。ブラウザーはこの HTML を構文解析し、そこから次のような DOM ツリーを生成します。

```plain
P
├─ "Let's use:"
├─ SPAN
|  └─ "HTML"
├─ SPAN
|  └─ "CSS"
└─ SPAN
    └─ "JavaScript"
```

この DOM ツリーにおいて、`<p>` 要素に対応するノードは親ノードです。その子ノードには、テキストノードと、`<span>` 要素に対応する 3 つのノードが含まれています。`SPAN` ノードも親ノードであり、その子ノードにはテキストノードがあります。ブラウザーがこの DOM ツリーをレンダリングすると、次のような表示になります。

{{EmbedLiveSample('Handling the HTML', '100%', 55)}}

```css hidden
p {
  margin: 0;
}
```

一部の HTML 要素は、構文解析されると、さらなる HTTP リクエストを発行します。

- {{htmlelement("link")}} 要素で外部の [CSS](/ja/docs/Learn_web_development/Core/Styling_basics) スタイルシートを参照する場合。
- {{htmlelement("script")}} 要素で外部の [JavaScript](/ja/docs/Learn_web_development/Core/Scripting) ファイルを参照する場合。
- {{htmlelement("img")}}、{{htmlelement("video")}}、{{htmlelement("audio")}} などの要素。これらは、ウェブページに埋め込みたいメディアファイルを参照しています。

## CSS の構文解析とページのレンダリング

次に、CSS を処理します。

1. ブラウザーは、ページ上にある CSS（HTML ファイルに記載されているもの、または外部スタイルシートから取得されたもの）を解析し、それぞれの CSS スタイルルールを、それが適用される HTML 要素（DOM 上では**ノード**と呼ばれるアイテムとして表される）に基づいて、異なる「グループ」に分類します。その後、ブラウザーは必要に応じて各要素にスタイルを適用します（この中間段階は「レンダリングツリー」と呼ばれます）。
2. レンダリングツリーは、ルールが適用された後に現れるべき構造に従って構成されています。これには、ページに埋め込まれる画像やその他のメディアファイルも含まれます。
3. ページの表示内容が画面に表示されます（この段階を「描画」と呼びます）。

以下の図は、これまで説明してきたプロセスを視覚的に示したものです。

![Rendering process overview](rendering.svg)

先ほどの例に戻って、HTML ファイル内に次のような CSS が記述されているとしましょう。

```html hidden
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css
span {
  border: 1px solid black;
  background-color: lime;
}
```

CSS で利用できるルールは `span` セレクターのみであるため、ブラウザーは CSS をとてもすばやく処理することができます！ブラウザーは、DOM ツリー内の 3 つの SPAN ノードそれぞれにそのルールを適用し、黒い境界線とライムグリーンの背景を設定した後、最終的な表示結果を画面に描画します。

更新後の出力は以下の通りです。

{{EmbedLiveSample('Parsing the CSS, and rendering the page', '100%', 90)}}

## JavaScript の処理

CSS の処理が完了した後、ページ上に存在するすべての JavaScript（HTML ファイルに埋め込まれているもの、あるいは外部スクリプトファイルから取得されるものを含む）が、構文解析、解釈、コンパイルされ、実行されます。これは、ページの最終的なレンダリングが完了する前のある時点で実行されます。というのも、JavaScript の中には、DOM にノードを追加したり、既存のノードを変更したりするなど、レンダリングに影響を与えるものもあるからです。

先ほどの例に戻り、HTML ファイル内に次のような JavaScript が記述されているとしましょう。

```html hidden
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>
```

```css hidden
span {
  border: 1px solid black;
  background-color: lime;
}
```

```js
const spans = document.querySelectorAll("span");
spans.forEach((span) => {
  const reversedText = span.textContent.split("").reverse().join("");
  span.textContent = reversedText;
});
```

この JavaScript がどのように動作するかを正確に理解する必要はありませんが、大まかに言えば、DOM 内のすべての SPAN ノードを探し、それらの子テキストノードに含まれる文字の順序を逆転させるものです。

最終的な出力は次のとおりです。

{{EmbedLiveSample('Handling the JavaScript', '100%', 90)}}

## レンダリングのその他の段階

ページのレンダリング中には他にもいくつかの処理が行われますが、ここではそれらすべてについて詳しく説明することはしません。特筆すべき点として、DOM に基づいてアクセシビリティツリーが構築されることが挙げられます。これは、支援技術（例えばスクリーンリーダーなど）がこれに連携できるようにするためのもので、これにより、レンダリングされたコンテンツを視覚的に確認できないユーザーでも、そのコンテンツと操作できるようになります。

このことについては、後ほど[アクセシビリティ](/ja/docs/Learn_web_development/Core/Accessibility)のモジュールで詳しく学びます。

## ブラウザー：敵対的だが素晴らしいプログラミング環境

フロントエンドのウェブ開発は、時にストレスを伴うことがあり、ブラウザーを「敵対的なプログラミング環境」と考える人もいます。これは、他のプログラミング環境とは異なり、コードが動作する環境について確実な保証をすることがはるかに難しいからです。ユーザーが使用するオペレーティングシステム、ブラウザー、言語、所在地、ネットワーク接続、CPU、GPU、メモリー、バッテリー残量などのあらゆる組み合わせを事前に把握することはできないため、すべてのユーザーに対して完璧なユーザー体験を保証することはできません。

現行のブラウザーは。ウェブ標準をかなり一貫して実装する傾向がありますが、それでもなお、対処すべき不確定要素は数多く残っています。ウェブ開発者としては、その不確実性を受け入れ、防御的なプログラミングを行い、使用する機能については慎重になる必要があります。これには、前回の記事で概要が示された[ベストプラクティス](/ja/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model#ウェブのベストプラクティス)を順守する姿勢が求められます。

その一方で、ウェブは同時にさまざまな理由から、素晴らしいプログラミング環境でもあります。

- まず第一に、ユニバーサルアクセス（誰もが利用しやすい環境）を念頭に置いて設計されています。ウェブの基本的な状態は、アクセシビリティが確保されており、リンクが可能となっています。こうした基本要素のいくつかは、他の環境では実現が難しい場合があります。
- ウェブを介したアプリの提供は、単純かつ強力です。ユーザーに複雑なインストール手順を踏ませる必要はありません。ウェブアドレスを指すだけで、すぐに利用を開始できます。
- アプリケーションの更新は通常、簡単です。多くの場合、来訪者はブラウザーのタブを再読み込みするだけで、アプリケーションの新しいバージョンを確認できます。来訪者に定期的にソフトウェアの更新をダウンロード・インストールしてもらう必要はありません。
- ウェブコミュニティは活気にあふれ、助け合いの精神に満ちています。[調査と学習](/ja/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning)の記事で後ほど詳しく説明しますが、助けを求めることができる場所は数多くあり、学ぶのに役立つ優れたリソースも利用できます。

## 関連情報

- [ブラウザーのバグを報告するタイミングと方法](/ja/docs/Learn_web_development/Howto/Web_mechanics/File_browser_bugs)
  - : ブラウザーで何かが期待通りに動作しない場合、それはブラウザーのバグである可能性があります。この記事では、それがバグかどうかを見極める方法と、バグである場合にバグ報告を行う方法について説明します。

{{PreviousMenuNext("Learn_web_development/Getting_started/Web_standards/The_web_standards_model", "Learn_web_development/Getting_started/Soft_skills", "Learn_web_development/Getting_started/Web_standards")}}
