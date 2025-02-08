---
title: ウェブの閲覧
slug: Learn_web_development/Getting_started/Environment_setup/Browsing_the_web
l10n:
  sourceCommit: dedba82f11d06e50a2742ed285a321820baf4977
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}

このモジュールのこの時点では、少なくとも 2 つのウェブブラウザーをコンピューターにインストールしておく必要があります。この記事では、ブラウザーの使用についてもう少し詳しく説明し、ウェブブラウザーの作業方法、操作する一般的なアイテムの一部の違い、情報検索方法について見ていきます。

> [!NOTE]
> 端末に既定でインストールされているブラウザー以外に何も持っていない場合は、いくつか取得してください。[最新のウェブブラウザーのインストール](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software#最新のウェブブラウザーのインストール)を参照してください。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステムに慣れていること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>ウェブブラウザーの基本的な操作</li>
          <li>ウェブブラウザー、ウェブサイト、検索エンジンの違い。</li>
          <li>情報の検索。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## ウェブページ、ウェブサイト、ウェブサーバー、検索エンジンの違い

この章では、ウェブページ、ウェブサイト、ウェブサーバー、検索エンジンなど、ウェブ関連のさまざまな概念について説明します。これらの用語は、ウェブ初心者によく混同されたり、誤って使用されたりすることが多いものです。それぞれの意味をしっかりと理解しておきましょう。

あらゆる分野の知識と同様に、ウェブにも多くの専門用語があります。すべてを一気に押し付けるつもりはありませんのでご心配なく（興味をお持ちなら[用語集](/ja/docs/Glossary)があります）。しかし、最初に理解しておく必要がある基本的な用語がいくつかあり、これは読む際に常に聞く表現です。これらは互いに関連するものの、異なる役割を持つため、混同しやすいものです。実際、ニュースやその他の場所でこれらの用語が誤って使用されているのを時々見かけるので、これらをまとめて理解しましょう。

これらの用語と技術の詳細に関して詳しく説明しますが、これらを簡単に定義することが良いスタートるになるでしょう。

- ウェブページ
  - : Firefox や Google Chrome、Opera、Microsoft Edge、Apple Safari などのウェブブラウザーで表示可能な文書です。これらはよく単に「ページ」とも呼ばれることもあります。
- ウェブサイト
  - : グループ化され、通常はさまざまな方法で一緒に接続されたウェブページの集まりです。よく「ウェブサイト」または単に「サイト」と呼ばれます。
- ウェブサーバー
  - : インターネット上でウェブサイトをホスティングするコンピューターです。
- 検索エンジン
  - : 他のウェブページを見つけるのに役立つウェブサービスで、 Google、Bing、Yahoo、DuckDuckGo などがあります。検索エンジンは通常、ウェブブラウザーから (例えば、Firefox、Chrome などのアドレスバーで直接検索エンジンによる検索を実行することができる)、またはウェブページ (例えば [bing.com](https://www.bing.com/) や [duckduckgo.com](https://duckduckgo.com/)) を介してアクセスされます。

公立図書館に簡単に例えてみましょう。図書館に行ったときに一般的に行うことは次の通りです。

1. 検索インデックスを探して、読みたい書籍のタイトルを探します。
2. その書籍のカタログ番号をメモします。
3. 書籍が収蔵されている特定の書架へ行き、カタログ番号を見つけて、本を入手します。

ウェブサーバーと図書館を比較してみましょう。

- 図書館はウェブサーバーのようなものです。いくつかの書架があり、複数のウェブサイトをホスティングしているウェブサーバーに似ています。
- 図書館の様々な書架（科学、数学、歴史など）はウェブサイトのようなものです。それぞれの書架は個々のウェブサイトのようなものです（同じ本が複数の書架にあることはありません）。
- それぞれの書架にある書籍はウェブページのようなものです。1 つのウェブサイトに複数のウェブページがあることがあります。たとえば、科学の書架（ウェブサイト）には、熱、音、熱力学、静力学などに関する書籍があります（ウェブページ）。ウェブページはそれぞれ固有の場所 (URL) で見つかります。
- 検索インデックスは検索エンジンのようなものです。それぞれの書籍は図書館内にカタログ番号で特定できる独自の場所にあります（同じ場所に 2 冊の本を保管することはできません）。

### ウェブページ

**ウェブページ**は{{Glossary("browser","ブラウザー")}}で表示することができる簡単な文書です。文書は {{Glossary("HTML")}} 言語で書かれています ([他の記事](/ja/docs/Web/HTML)で詳しく説明しています)。ウェブページには、次のような様々な種類のリソースを埋め込むことができます。

- **スタイル情報** — ページの見た目の制御
- **スクリプト** — ページへのインタラクティブ機能を追加
- **メディア** — 画像、音楽、動画など

> [!NOTE]
> ブラウザーは {{Glossary("PDF")}} ファイルや画像などのような他の文書も表示することができますが、**ウェブページ**という用語は、特に HTML 文書を指します。それ以外の場合、単に**文書**（またはドキュメント）という用語を使用します。

ウェブ上で利用可能なすべてのウェブページには、固有のアドレスを使用して到達することができます。ページにアクセスするには、そのアドレスをブラウザーのアドレスバーに入力するだけです。

![ブラウザーのアドレスバーにあるウェブページのアドレスの例](web-page.jpg)

> [!CALLOUT]
>
> **試してみる**
>
> ブラウザであなたの好きなウェブサイトを読み込んでみてください。

### ウェブサイト

**ウェブサイト**はリンクされたウェブページ (および関連するリソース) の集合で、固有のドメイン名を共有しています。指定されたウェブサイトの各ウェブページは明示的なリンク — 多くの場合はクリック可能なテキストの部分の形 — を提供しており、ユーザーがウェブサイトのあるページから他のページに移動することができます。

ウェブサイトにアクセスするために、ブラウザーのアドレスバーにドメイン名を入力すると、ブラウザーはウェブサイトのメインウェブページ、または**ホームページ** (略して「ホーム」と呼ばれる) を表示します。

![ブラウザーのアドレスバーにあるウェブサイトのドメイン名の例](web-site.jpg)

> [!CALLOUT]
>
> **試してみる**
>
> あなたの好きなウェブサイトの項目やリンクをいくつかクリックし、様々なページを表示してみてください。

> [!NOTE]
>  ウェブサイトのなかには、単一のウェブページで構成され、必要に応じて新しいコンテンツで動的に更新される{{Glossary("SPA")}} という形態をとるものもあります。

### ウェブサーバー

**ウェブサーバー**は、 1 つ以上の**ウェブサイト**をホスティングするコンピューターです。「ホスティング」はすべての**ウェブページ**や補助的なファイルをコンピューター上で利用できるようにするという意味です。**ウェブサーバー**は、任意のユーザーのリクエストに応じて、ホスティング中の**ウェブサイト**から任意の**ウェブページ**をユーザーのブラウザーに送信します。

**ウェブサイト**と**ウェブサーバー**を混同しないようにしてください。例えば、誰かが「私のウェブサイトから応答がありません」と言うのを聞いた場合、実際には**ウェブサーバー**が応答していないのであり、その結果として**ウェブサイト**が利用できないのです。もっと重要なことは、ウェブサーバーは複数のウェブサイトをホスティングすることができるため、**ウェブサーバー**という言葉はウェブサイトを特定するために使用することはできず、大きな混乱を招く可能性があります。先に挙げた例で、「私のウェブサイトから応答がありません」と言った場合、そのウェブサーバー上のウェブサイトがすべて利用できないことになります。

### 検索エンジン

検索エンジンはよくウェブに関する誤解のもとになります。検索エンジンは特殊な種類のウェブサイトで、ユーザーが**他の**ウェブサイトを見つけるのを助けるものです。

[Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://yandex.com/), [DuckDuckGo](https://duckduckgo.com/) など、たくさんあります。一般的なものもあれば、特定のトピックについて専門化されたものもあります。好きなものを使いましょう。

多くのウェブの初心者は、検索エンジンとブラウザーを混同しています。明確にしましょう。**ブラウザー**はソフトウェアの一つで、ウェブページを受け取り表示するものです。**検索エンジン**はウェブサイトであり、人々が他のウェブサイトからウェブページを探すのを手助けします。この混乱は、ブラウザーを起動したとき、ブラウザーが検索エンジンのホームページを表示しているために発生します。これは、ブラウザーで最初にやりたいことが表示させるウェブページであることが明らかであるため、よく分かります。インフラ (ブラウザーなど) とサービス (検索エンジンなど) を混同しないでください。この区別はかなり役立ちますが、専門家によっては曖昧に話すこともあるので、心配しないでください。

こちらは、 Firefox のインスタンスが既定のスタートアップページとして Google 検索ボックスを表示している様子です。

![Firefoxのナイトリー版でカスタマイズしたGoogleページを既定で表示した例](search-engine.jpg)


> [!CALLOUT]
>
> **試してみる**
>
> 検索エンジンを用いて、次の検索を行ってみてください。
> - 検索エンジンのホームページにアクセスし、検索したい単語を入力してみてください。
> - ブラウザのアドレスバーに検索したい単語を入力してみてください。

## ウェブはどのように動作するか: 基本事項

世界中のほとんどの地域で、ウェブは食器、自転車、車、歯ブラシと同じくらい日常生活に欠かせないツールになっています。信じられないかもしれませんが、毎日あなたがウェブサイトやスマートフォンのアプリをどのくらい頻繁に使うか考えてみてください。あなたが直接ウェブブラウザにウェブアドレスを入力していなくても、あなたが使っているアプリはバックグラウンドでウェブの技術を用いてデータを取得し、表示していることがあるのです。

ウェブサイトにアクセスすると、あなたの最初の動作(例えば、ブラウザにウェブアドレスを入力して<kbd>Enter</kbd>/<kbd>Return</kbd>キーを押すこと)から、処理の結果が表示される(例えば、ウェブブラウザにウェブサイトが表示される)までの間に、様々な処理が行われます。


1. ウェブブラウザは、アクセスしたいリソース(ウェブページ、データ、画像、ビデオなど)を、それが保存されているウェブサーバーに要求します。このような要求(および応答)は、{{Glossary("HTTP")}} (Hypertext Transfer Protocol) と呼ばれる技術を使用して行われます。HTTPでは、何が起こるかを記述するために動詞的な言語 (**GET**など) を使用します。
2. 要求が成功すると、ウェブサーバーは要求されたリソースを含むHTTP応答をウェブブラウザーに返します。
3.場合によっては、要求されたリソースがさらにHTTP要求を発行し、結果として応答が増えることがあります。例えば:
   1. ウェブサイトが読み込まれると、最初にサイトのホームページのメインインデックスHTMLファイルが要求されます。
   2. ブラウザがそのファイルを受信すると、解析を開始し、そして追加のリクエストを行うための指示が見つかることがあります。上記で説明したように、これらは画像、スタイル情報、スクリプトなどを埋め込むファイルに関連している場合があります。
4. すべてのリソースが要求されると、ウェブブラウザは必要に応じてそれらを解析してレンダリングし、結果をユーザーに表示します。

ウェブの仕組みに関するこの説明は非常に簡略化されたものですが、現時点ではこれだけで充分です。ウェブページがウェブブラウザーによって要求され、レンダリングされる仕組みについては、後ほど[ウェブ標準モジュール](/ja/docs/Learn_web_development/Getting_started/Web_standards)で詳しく説明します。

今の段階では、ウェブブラウザーを開いて、上記の手順を考えながら、お気に入りのサイトをいくつか読み込んでみてください。

## 情報を検索する

ウェブ開発者は、覚えられない構文から特定の問題の解決策まで、情報の検索に多くの時間を費やすことになります。そのため、ウェブを効果的に検索する方法を学ぶことをお勧めします。

特定のウェブ技術に関する一般的な情報を探している場合は、MDN 検索ボックスにその名前を入力してください。たとえば、検索ボックスに`box model`、`fetch()`または`video element`と入力して、何が表示されるか確認してください。必要な情報が見つからない場合は、検索範囲を広げて、検索エンジンで検索語句を試してください。

 `Javascriptでフィボナッチ数列を生成する方法` や `その数が素数であるかどうかをJavaScriptで判定する方法`など、特定の問題の解決法を探している場合は、プログラミングに関する問題解決に特化したコミュニティである[StackOverflow](https://stackoverflow.com)などのウェブサイトで検索することをお勧めします。
 繰り返しになりますが、特定のサイトで役立つ回答が得られなかった場合は、一般的な検索エンジンを使用してみてください。

> [!CALLOUT]
>
> **試してみる**
>
> 上記で示したようにいくつかの検索を試してみてください:
>
> - まず、上記に挙げた正確な用語を検索してみてください。
> - 次に、あなた自身の興味のあるトピックを検索してみてください。より具体的な単語やより曖昧な単語など、さまざまな関連用語を使用して、最も効果的な検索結果を探してみてください。
> - さらに試してみるには [検索のコツ](#検索のコツ) を参照してください。

### AIの活用

AIが生成した検索結果は、情報を受け取るための非常に一般的な方法です。AIは基本的にはとても強力な検索能力を発揮します。バックグラウンドで大量の検索を実行し、その結果を一つのわかりやすい回答にまとめます。一般的な選択肢としては[ChatGPT](https://chatgpt.com)、 [Google Gemini](https://gemini.google.com/app)、 そして [Microsoft Copilot](https://copilot.microsoft.com)で、チャット形式で直接アクセスするか、AIを利用したアプリ内ヘルプや自動化システムを介してアクセスします。

コーディングを学習するときも、AIのチャットプロンプトはさまざまな方法で役立ちます:
- 上記のような従来の検索を行うことができます。
- あなたのコードが上手く機能しない場合は、`このコードに含まれる問題点は何ですか？`という質問とコードをプロンプトに添付することで、コード内のバグを見つけることができます。
- コードブロックの最適化されたバージョンを生成することができます。正常に動作するコードを作成したが、それをより効率的に実行したい時や、より拡張性のある安定した方法を見つけたい場合に役立ちます。
- コード内のバグの場所を知りたいだけでなく、それをデバッグするためにどのような戦略を使用するかについてのアドバイスが必要な場合などにも活用することができます。

> [!CALLOUT]
>
> **試してみる**
>
> いくつかのAIツールを使用して検索を試してみてください。

### A cautionary tale

In truth, AI can do so much that you may start to wonder why you need to learn to code.

But wait! The following is important: **You still need to understand what you are trying to do at a high level, what the code is doing, and where each piece of code needs to be used**. If you don't, you won't be very useful when trying to solve real-world problems. This means that you still need to learn to code. AI can be a really useful tool to help you find answers more quickly, but if you just type every question you are asked into an AI prompt, you won't understand how anything works.

In addition:

- AI tools present their answers in a confident, authoritative voice, but they can often be misleading or just plain wrong. Some of the errors they make can be very subtle. They don't have any innate intelligence of their own — they are basically advanced pattern matching tools. AI tools compile their answers from other sources out there, so will hoover up wrong information as well as correct information. Even two correct sources can be combined to create an answer that is incorrect.
- Newer information may not be available, or answers may be skewed to older and more prevalent documentation, so "how to do X in JS" might give you outdated guidance.

As a result, you need to be careful to check the answers they give you, and not just trust everything without question.

**When you are learning, spend time trying to solve the problem yourself before searching for an answer, whether you are using AI or a conventional search engine. It will make you a better developer.**

### 検索のコツ

- You should include the language you are using in the search term, as shown in the examples above. If you just typed in `how to print out the fibonacci sequence`, you would likely end up with several solutions in Python, C++, Java, Ruby, or other languages — not quite as helpful when you are trying to learn JavaScript!
- When you find a useful answer, bookmark or make a copy of it somewhere so you can find it again later. You'll be amazed how many times you run into the same problem.
- If your code is returning a specific error message, try entering the error into a search engine or AI prompt. Other people will probably have already tackled the same error in the past and recorded solutions publicly somewhere.
- If possible, stick with recommended sites like MDN and [StackOverflow](https://stackoverflow.com).
- There are many advanced search techniques you can use in search engines that will give you better results than just typing a plain search term. Typing in a plain search term such as `ant fish cheese` will return results that contain any combination of those words. However, most search engines support variations of the following formats:

  - Typing in `"ant fish cheese"` (with the quotes) will only return results that contain that exact phrase.
  - `"ant cheese" -fish` will return results that contain `ant` and/or `cheese` but not `fish`.
  - `ant OR cheese` will only return results with one term or the other, not both. From our testing, this one only seemed to work effectively in Google.
  - `intitle:cheese` will only return results that have "cheese" in the main title of the page.

  > [!NOTE]
  > There are many other techniques you can use in various different search engines. Try seeing what others you can find — some useful resources are [Refine Google Searches](https://support.google.com/websearch/answer/2466433?hl=en), [How to use advanced syntax on DuckDuckGo Search](https://duckduckgo.com/duckduckgo-help-pages/results/syntax/), and [Microsoft: Advanced search options](https://support.microsoft.com/en-us/topic/advanced-search-options-b92e25f1-0085-4271-bdf9-14aaea720930).



{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Installing_software", "Learn_web_development/Getting_started/Environment_setup/Code_editors", "Learn_web_development/Getting_started/Environment_setup")}}
