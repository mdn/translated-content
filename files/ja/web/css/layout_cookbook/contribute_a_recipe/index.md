---
title: レシピを投稿する
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
---

{{CSSRef}}

レイアウト料理帳の例を提供したい場合、このページでは、例を公開するための手順について説明します。

## 何が良いレシピになるのか

**あらゆる便利なウェブデザインのパターンの最も単純なバージョンです**。 含まれている CSS の各行は、パターンを示すのを助けるためにそこにあるべきですので、例をきれいに見せるためだけのものは省略してください。アイデアは、誰かがパターンを手に取り、自分のスタイルでサイトでそれを使用できるということです。

## レシピを公開する手順

レシピは以下で構成されています。

1. ライブサンプル（live example）は、[CSS Examples GitHub リポジトリー](https://github.com/mdn/css-examples)に保存します。
2. その例のダウンロード可能なバージョンも、CSS Examples リポジトリーに保存します。
3. [CSS レイアウト料理帳](/ja/docs/Web/CSS/Layout_cookbook)内のページの詳細は次のとおりです。

   1. 要件 (Requirements)
   2. レシピ (Recipe)
   3. 行った選択 (Choices made)
   4. 有用な代替策または代替方法 (Useful fallbacks or alternative methods)
   5. アクセシビリティの考慮 (Accessibility concerns)
   6. ブラウザーの互換性 (Browser compatibility)
   7. 関連資料 (Additional resources)

### 1. パターンの作成

例をレシピに変える前に、まずパターンを単純な HTML ページとして作成します。 何を示そうとしているのかを考え、できるだけ単純にします。 BEM のような特殊な CSS 規約の使用は避けてください。誰もが知っているわけではありませんし、必要以上に複雑に見える可能性があります。

HTML と CSS が有効であることを確認し、複数のブラウザーでテストしてください。すべてが対応しているわけではない CSS プロパティを使用していても、それは問題ありません。ページを作成するときにブラウザーの対応情報を含めることができます。 場合によっては、代替の対応を含む、例の 2 番目のバージョンを作成すると便利な場合があります。

### 2. ライブサンプルの作成

料理帳のページや MDN の他の場所で見ることができるライブサンプルは、訪問者が必要なすべてのコードに圧倒されることなく、コードで遊び、関連する部分を変更することを可能にします。レシピは 1 つ以上の例として示します。

[CSS Examples リポジトリー](https://github.com/mdn/css-examples)をフォークして（右上の Fork ボタンを押すと自分のアカウントにコピーが作られます）、`css-cookbook` フォルダーを調べてください。 出発点としてコピーできる [cookbook-template.html](https://github.com/mdn/css-examples/blob/master/css-cookbook/cookbook-template.html) ファイルがあります。 これを `css-cookbook` ディレクトリーにパターンにとって意味のある名前で保存してください。 テンプレート (template) は、さまざまなパーツを適切な場所に追加するのに役立つようにコメントされています。

このための重要な部分は次のとおりです。

エディターパネルのスタイル用のスタイルシート、基本的な body のスタイル、およびエディター機能用の JavaScript ファイルがあります。 これらのファイルはそのままにしておきます。

head の中には 2 つのスタイルのブロックがあります。 1 つ目は、ページの訪問者がこの例で遊ぶために変更する必要がないものです。 2 つ目は、ライブサンプルで遊びたい項目のどれかです。 通常、 1 つ目のブロックにライブサンプルの CSS をすべて追加してから、 2 番目のブロックに移動する必要があるルールのセットを選択します。 2 番目のブロックのルールは、パターンの基本となるルール、おそらくユーザーが CSS の値を変更してパターンの更新を確認できるようなルールにする必要があります。

コンポーネント用の HTML を 2 回追加する必要があります。 最初に `preview` クラスの `section` の中に、次に `playable-html` クラスの `textarea` の中にです。

head の中の 2 番目のブロックからの `editable` クラスの CSS も、`playable-css` クラスの `textarea` にコピーする必要があります。

単純な例は [center.html](https://github.com/mdn/css-examples/blob/master/css-cookbook/center.html) で、これは[要素を中央に配置](/ja/docs/Web/CSS/Layout_cookbook/Center_an_element)のページに埋め込まれています。これを使用して、さまざまな細部を正しく追加する方法を確認できます。

リポジトリーをフォークした場合、私たちの CSS と JavaScript ファイルを例と一緒に持っているのであれば、ブラウザーでライブサンプルを開くと、ページに含まれている時と全く同じように動くのが分かるでしょう。

#### 役に立つヒント

1. `textarea` 内で CSS と HTML をインデントしないでください。代わりに行の先頭にぶつけてください。 レンダリングすると見栄えがよくなります。
2. 必要な画像がある場合は、例と共にディレクトリーに入れます。または、すでにそこにあるものを使用することを歓迎します。
3. インラインスタイルで高さを変更して、`textarea` の高さを調整できます。

### 3. ダウンロード版の作成

ライブサンプルにはすべてのライブサンプルコードが含まれているので、そのすべてを含まない簡単な例を訪問者に提供したいと思います。 ライブサンプルを --download を付けてコピーしてください。 例えば、`center.html` には `center--download.html` という名前のダウンロードバージョンがあります。 このファイルはあなたの最初の例と似ています。 これは単一の HTML ページとしてのパターンの基本バージョンです。 含まれたスタイルシートにある body の CSS ルールを含めると便利かもしれません。 [cookbook-template--download.html](https://github.com/mdn/css-examples/blob/master/css-cookbook/cookbook-template--download.html) を見てみると、これらが出発点として含まれています。

### 4. 例をプルリクエストをする

[CSS Examples リポジトリー](https://github.com/mdn/css-examples)でプルリクエスト (Pull Request, PR) を作成してください。 このようにして、ページを作成する前に必要になる可能性のある例の変更を手助けすることができます。 さらに、この例は実際のものである必要があり、最初に作成するのが理にかなっています。 プルリクエストにパターンの説明とあなたが何を示しているかを含めてください。

### 5. ページを作成する

例がマージされたら、ページを作成することができます。 そのためには[ページ作成権限](/ja/docs/MDN/Contribute/Howto/Create_and_edit_pages#getting_page-creation_permissions)付き MDN アカウントが必要です。その後、そのページを CSS 料理帳のページのサブページとして作成できます。[ここに料理帳のページ用のテンプレートがあります](/ja/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)。

テンプレートは各セクションの一部になるべきものを説明し、より多くの助けを得るために他の料理帳の例を参照することができます。 これらのページのいずれかの編集ボタンをクリックすると、互換性データを埋め込むために使用されるマクロやライブサンプルなどが表示されます。

MDN Wiki の使用に関する一般的なガイダンスが必要な場合は、こちらのヘルプページを参照してください。

質問をする必要がある場合、または誰かにあなたのページを見てもらいたい場合は、[Discourse の MDN フォーラム](https://discourse.mozilla.org/c/mdn)を利用するか、[Matrix でチャット](/ja/docs/MDN/Community/Conversations#synchronous_chat)してください。

## 関連情報

- [料理帳ページのテンプレート](/ja/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples リポジトリー](https://github.com/mdn/css-examples)
