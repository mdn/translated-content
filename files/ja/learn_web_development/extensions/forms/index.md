---
title: ウェブフォーム
slug: Learn_web_development/Extensions/Forms
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}

このモジュールは、ウェブフォームの基本をマスターするのに役立つ一連の記事を提供しています。ウェブフォームはユーザーと対話するためのとても強力なツールです。最も一般的には、ユーザーからデータを収集したり、ユーザーがユーザーインターフェイスを操作できるようにするために使用されます。しかし、歴史的・技術的な理由から、フォームを最大限に使用する方法は必ずしも明らかではありません。以下の一覧の記事では、 HTML 構造のマークアップ、フォーム操作のスタイル、フォームデータの検証、サーバーへのデータ送信など、ウェブフォームの本質的な部分をすべて取り上げます。

## 前提条件

このモジュールを始める前に、少なくとも [HTML 入門](/ja/docs/Learn_web_development/Core/Structuring_content)を一通り読んでおくべきです。ここでは簡単に理解できる[導入ガイド](#導入ガイド)があり、[ネイティブフォームコントロール](/ja/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)ガイドも利用できます。

しかしそれ以外のモジュールは HTML 知識よりも少し高度です。ページにフォームウィジェットを置くのは簡単ですが、高度なフォームの機能や CSS や JavaScript を使わないと実際に活用できません。このため、その他の節を見る前にまずは [CSS](/ja/docs/Learn_web_development/Core/Styling_basics) と [JavaScript](/ja/docs/Learn_web_development/Core/Scripting) を学んでおくのをお勧めします。

上記のテキストは、なぜ私たちがウェブフォームを HTML、CSS、JavaScript のトピックに混ぜるのではなく、独立したモジュールにしたかを示す良い指標です。フォーム要素は他のほとんどの HTML 要素よりも複雑であり、またフォーム要素を最大限に活用するためには、関連する CSS と JavaScript のテクニックを密接に組み合わせる必要があります。

> [!NOTE]
> 自分のファイルを作ることができないコンピューター/タブレット/その他の端末で作業している場合、（大半の）コード例を [JS Bin](https://jsbin.com/) や [Glitch](https://glitch.com/) といったオンラインコーディングプログラムで試すことができます。

## 導入ガイド

- [初めてのウェブフォーム](/ja/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : このシリーズの最初の記事では ウェブフォームを作成するごく初期の経験をしていただきます。これには簡単なフォームのデザイン、適切な HTML 要素で実装すること、CSS で簡単なスタイル設定をすること、データがサーバーに送られる方法などが含まれます。
- [HTML フォームの構築方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : 基本的な話と共に、ここではフォームの色々な部分に構造と意味を与えるのに使う要素を詳しく見ていきます。

## どんなフォームウィジェットが利用できますか？

- [ネイティブフォームウィジェット](/ja/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : オリジナルの HTML の {{htmlelement("input")}} 型の詳細や、色々なデータ型を集めるのにどんなオプションが使えるかを見ていきます。
- [HTML5 の入力型](/ja/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : ここでは続いて `<input>` 要素を深く見ていき、 HTML5 がリリースされた際に追加された入力型や、さまざまな UI コントロールとデータコレクションの改良を見ます。さらには、{{htmlelement('output')}} 要素も見ます。
- [その他のフォームコントロール](/ja/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : 次には`<input>` 以外のフォームコントロールと関連するツール、例えば {{htmlelement('select')}}、{{htmlelement('textarea')}}、{{htmlelement('meter')}}、{{htmlelement('progress')}} を見ていきます。

## フォームのスタイルガイド

- [ウェブフォームのスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : この記事では基本的なスタイル設定作業のために知るべき基本を含む、フォームを CSS でスタイル設定するための入門を紹介します。
- [ウェブフォームの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : ここでは、スタイルが難しい要素を扱うために必要な、さらに高度なフォームスタイル設定テクニックを紹介します。
- [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : この記事では、最新の HTML と CSS の専用機能を使用して、完全にカスタマイズした `<select>` 要素を作成する方法について説明します。これには、選択ボタン、ドロップダウンピッカー、矢印アイコン、現在の選択チェックマーク、および個々の `<option>` 要素のスタイルを完全に制御する機能も含んでいます。
- [UI 擬似クラス](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : 現在の状態に応じて制御される HTML フォームコントロールを可能とする、UI 擬似クラス の入門です。

## フォームデータを検証して送信する

- [クライアント側のフォームデータ検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : データ送信だけで充分ではありません。ユーザーがフォームに記入したデータが、我々が処理に成功するような正しいフォーマットであり、アプリケーションが破綻しないかを確認する必要があります。またユーザーが正しくフォームを記入してアプリを使うのにイライラしないよう手助けしたいです。フォーム検証はこの目的を達成するのに役立ちます。この記事では知っておくべきことを教えます。
- [フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : この記事ではユーザーがフォームを送信するときに何が起こるのかを見ます — データがどこに行くのか、そしてそこでデータを受けたらどう扱うかなどです。また、フォームデータ送信に関連するセキュリティ上の懸念もその一部です。

## 高度なガイド

下記の記事は学習コースに必須ではないですが、上記のテクニックをマスターしてそれ以上知りたいときには、興味深く役立つものでしょう。

- [カスタムフォームコントロールの作成方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : 場合によってはネイティブのフォームウィジェットが必要となるものを提供していないことがあるでしょう。例えばスタイル設定や機能で。この場合、生の HTML から自分自身のフォームウィジェットを作る必要があります。この記事ではその方法と考慮すべき点を、実際のケーススタディと一緒に説明します。
- [JavaScript によるフォームの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : この記事では、標準フォームの送信ではなく、カスタム JavaScript 内で HTTP リクエストを組み立てて送る方法を見ます。またそうしたい理由と、そうする意味も見ていきます（[FormData オブジェクトの使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)もご覧ください）。
- [カスタマイズ可能な select 要素](/ja/docs/Learn_web_development/Extensions/Forms/Customizable_select)
  - : この記事では、最新の HTML と CSS の専用機能を使用して、完全にカスタマイズした {{htmlelement("select")}} 要素を作成する方法について説明します。

## 関連情報

- [HTML フォーム要素リファレンス](/ja/docs/Web/HTML/Reference/Elements#forms)
- [HTML \<input> 型リファレンス](/ja/docs/Web/HTML/Reference/Elements/input)
- [HTML 属性リファレンス](/ja/docs/Web/HTML/Reference/Attributes)
- [ユーザー入力とコントロール](/ja/docs/Learn_web_development/Extensions/Forms/User_input_methods)

{{NextMenu("Learn_web_development/Extensions/Forms/Your_first_form", "Learn_web_development/Extensions")}}
