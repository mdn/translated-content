---
title: コンテンツのページの構造化
slug: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

CSS を使用してレイアウトできるようにコンテンツのページを構成することは、習得が非常に重要なスキルです。そのためこの評価では、ページがどのように表示されるのかを検討し、適切な構造セマンティクスを選択してその上にレイアウトを構築する能力についてテストします。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        この評価課題を実施する前に、コースの他の部分を履修しておく必要があります。
        コースの残りの部分、
        特に、<a
          href="/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          >文書とウェブサイトの構造</a
        >に重点を置いて学習してください。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        ウェブページ構造の知識、および将来のレイアウト設計をマークアップで表現する方法をテストする。
      </td>
    </tr>
  </tbody>
</table>

## 開始点

この評価を開始するには、[すべての開始資産を含む zip ファイル](https://raw.githubusercontent.com/mdn/learning-area/main/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip)を入手してください。

zip ファイルには以下のものが含まれています。

- 構造的マークアップを追加する必要がある HTML
- マークアップをスタイルするための CSS
- ページで使用されている画像

例はローカルコンピューターで作成するか、あるいは [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), [Glitch](https://glitch.com/) などのサイトを使用して作業してください。

> **メモ:** 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## プロジェクト概要

このプロジェクトでは、あなたの仕事はバードウォッチングのウェブサイトのホームページのコンテンツを取り、それにページレイアウトを適用できるように構造要素を追加することです。持っている必要があるものは次のようなものです。

- ページのメインタイトル、サイトのロゴ、およびナビゲーションメニューを含む、サイトの全幅にわたるヘッダー。スタイル設定が適用されるとタイトルとロゴが並べて表示され、ナビゲーションがそれら 2 つの項目の下に表示されます。
- ウェルカムテキストを含むメインブロックと、画像のサムネイルを含むサイドバーの 2 つの列を含むメインコンテンツ領域。
- 著作権情報とクレジットを含むフッター。

以下に適したラッパーを追加する必要があります。

- ヘッダー
- ナビゲーションメニュー
- メインコンテンツ
- ウェルカムテキスト
- 画像サイドバー
- フッター

また、する必要があることは次のものです。

- 開始時に提供された既存の CSS のすぐ下に別の {{htmlelement("link")}} 要素を追加して、提供された CSS をページに適用します。

## ヒント

- [W3C Nu HTML Checker](https://validator.w3.org/nu/) を使用して HTML、CSS、 SVG の意図しないミス — 他の方法では見逃している可能性のあるミス — を修正できるようにします。
- この評価をするために CSS を知る必要はありません。 提供された CSS を HTML 要素の中に入れるだけです。
- 提供されている CSS は、正しい構造要素がマークアップに追加されると、レンダリングされたページでそれらが緑色に見えるように設計されています。
- 行き詰まって、どんな要素をどこに置くべきか想像できないならば、ページレイアウトの簡単なブロック図を描き、各ブロックを折り返すべきだと思う要素を書き留めることがしばしば役立ちます。

## 例

次のスクリーンショットは、マークアップされた後のホームページの外観の例を示しています。

![評価のための完成例。「バードウォッチング」という見出し、鳥の写真、ウェルカムメッセージを記載した、バードウォッチングに関するシンプルなウェブページ。](example-page.png)

{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}
