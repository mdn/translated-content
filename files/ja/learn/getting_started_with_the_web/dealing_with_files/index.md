---
title: ファイルの扱い
slug: Learn/Getting_started_with_the_web/Dealing_with_files
tags:
  - Beginner
  - CodingScripting
  - Files
  - HTML
  - l10n:priority
  - theory
  - website
  - ガイド
translation_of: Learn/Getting_started_with_the_web/Dealing_with_files
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

Web サイトは、テキストコンテンツ、コード、スタイルシート、メディアコンテンツなど、多くのファイルで構成されています。Web サイトを構築するときは、これらのファイルをローカルコンピュータ上の合理的な構造に組み立て、互いに呼び出すことができるようにして、最終的に[サーバにアップロード](/ja/docs/Learn/Getting_started_with_the_web/Publishing_your_website)する前に、すべてのコンテンツを正しいものにする必要があります。*ファイルの扱い*では、Web サイトに合理的なファイル構造を設定できるように、注意すべきいくつかの問題について説明します。

## コンピュータ上で Web サイトがあるべき場所

自分のコンピュータ上の Web サイトでローカルに作業している時、関連するすべてのファイルを、サーバ上に公開された Web サイトのファイル構造のミラーである単一のフォルダに保持する必要があります。このフォルダは好きな場所に置くことができますが、簡単に見つけることができる場所、たとえばデスクトップ上、ホームフォルダの中、またはハードディスクのルートなどに置いてください。

1.  Web サイトプロジェクトを保存する場所を選択してください。ここでは `web-projects` (またはそれに類するもの) という新しいフォルダを作成します。これは Web サイトのプロジェクト全てを保持するところです。
2.  この最初のフォルダの中に、最初の Web サイトを格納する別のフォルダを作成します。それを `test-site` (またはもっと想像力のあるもの) と呼びましょう。

## 大文字と空白の除外

この記事を通して、フォルダやファイルに空白のない全て小文字で名前を付けるよう求めていることに気が付くでしょう。その理由は次の通りです。

1.  多くのコンピュータ、特に Web サーバでは、大文字と小文字が区別されます。例えば、あなたの Web サイトの `test-site/MyImage.jpg` に画像を置いて、別のファイルから画像を `test-site/myimage.jpg` として呼び出せば、それは動作しないかもしれません。
2.  ブラウザー、Web サーバ、プログラミング言語は、空白の扱いが一貫していません。例えば、ファイル名に空白を使用すると、システムによってはそのファイル名を 2 つのファイル名として扱うことがあります。サーバによっては、ファイル名の空白を "%20" (URI の空白の文字コード) に置き換えるので、リンクが壊れてしまう結果になります。`my_file.html` のように単語をアンダースコアで区切るよりは、`my-file.html` のようにハイフンで区切る方がよいでしょう。

簡単に言えば、ファイル名にはハイフンを使うべきです。Google の検索エンジンはハイフンを単語の区切りとして扱いますが、アンダースコアはそうしません。このような理由から、少なくとも自分で判断できるようになるまでは、フォルダやファイルの名前を空白のない小文字にして、ダッシュで区切った方がいいでしょう。そうすれば、転んで道路に倒れることが少なくなるでしょう。

## Web サイトはどのような構成にするべきか

次に、テストサイトがどのような構造を持つべきかを見てみましょう。私たちが作成する Web サイトプロジェクトで最も一般的なのは、index の HTML ファイルと、画像、スタイルシート、スクリプトファイルを入れるフォルダです。作成してみましょう。

1.  **`index.html`**: このファイルには、一般的にあなたのホームページの内容、つまりあなたが最初にあなたのサイトに行ったときに見るテキストと画像が含まれています。テキストエディターを使用して、`index.html` という名前の新しいファイルを作成し、`test-site` フォルダ内に保存します。
2.  **`images` フォルダ**: このフォルダにはサイトで使用するすべての画像を入れます。`test-site` フォルダの中に `images` という名前のフォルダを作成します。
3.  **`styles` フォルダ**: このフォルダには、コンテンツのスタイルを設定するための CSS コード（例えばテキストと背景色の設定など）を入れます。`test-site` のフォルダの中に `styles` というフォルダを作成します。
4.  **`scripts` フォルダ** : このフォルダには、サイトにインタラクティブ機能を追加するために使用されるすべての JavaScript コード（クリックされたときにデータを読み込むボタンなど）が含まれます。`test-site` のフォルダの中に `scripts` というフォルダを作成します。

> **Note:** Windows では、既定で有効になっている**既知のファイルの種類の拡張子を表示しない**というオプションがあるため、ファイル名の表示に問題が発生することがあります。一般に、Windows エクスプローラーで **\[フォルダオプション...]** オプションを選択し、**\[登録されている拡張子は表示しない]** チェックボックスをオフにし、**\[OK]** をクリックすることで、これをオフにすることができます。お使いの Windows のバージョンに関する詳細な情報については、Web で検索してください。

## ファイルパス

ファイルをお互いに呼び出すためには、ファイルパスを提供する必要があります。基本的には、あるファイルが別のファイルの場所を知っています。これを実証するために、`index.html` ファイルに短い HTML を挿入し、[Web サイトをどのような外見にするか](/ja/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)の記事で選択した画像を表示させます。あるいは、コンピュータ上またはウェブ上の既存の画像を自由に選択して、以下の手順で使用することができます。

1.  以前に選択した画像を `images` フォルダにコピーします。
2.  `index.html` ファイルを開き、次のコードをファイルに挿入します。それが今のところ何を意味するのか気にしないでください。シリーズの後半で構造を詳しく見ていきます。

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>My test page</title>
      </head>
      <body>
        <img src="" alt="My test image">
      </body>
    </html>
    ```

3.  `<img src="" alt="My test image">` という行は、ページに画像を挿入する HTML コードです。画像がどこにあるのかを HTML に伝える必要があります。画像は _images_ ディレクトリー内にあり、`index.html` と同じディレクトリーにあります。ファイル構造の中で `index.html` からその画像に移動するのに必要なファイルパスは `images/your-image-filename` です。例えば、私たちの画像は firefox-icon.png と呼ばれ、ファイルパスは `images/firefox-icon.png` です。
4.  `src=""` コードの二重引用符の間の HTML コードにファイルパスを挿入します。
5.  HTML ファイルを保存し、Web ブラウザーに読み込みます (ファイルをダブルクリックします)。新しい Web ページに画像が表示されます。

![地球の周りに燃える狐を表した firefox のロゴのみを表示した基本的なウェブサイトのスクリーンショット。](website-screenshot.png)

ファイルパスの一般的なルールは次の通りです。

- 呼び出し元の HTML ファイルと同じディレクトリーにある対象ファイルにリンクするには、ファイル名を使用します。例えば `my-image.jpg`。
- サブディレクトリー内のファイルを参照するには、パスの前にディレクトリー名とスラッシュを入力します。例えば `subdirectory/my-image.jpg`。
- 呼び出し元の HTML ファイルの**上階層**のディレクトリー内にある対象ファイルにリンクするには、2 つのドットを記述します。例えば、`index.html` が `test-site` のサブフォルダ内にあり、`my-image.jpg` が `test-site` 内にある場合、`../my-image.jpg` を使用して `index.html` から `my-image.jpg` を参照できます。
- 例えば `../subdirectory/another-subdirectory/my-image.jpg` など、好きなだけ組み合わせることができます。

今のところ、これが知る必要があるすべてです。

> **Note:** Windows のファイルシステムでは、スラッシュ (/) ではなくバックスラッシュまたは￥記号を使用します。(例 : `C:\windows`)。これは HTML では使用できません。Windows で Web サイトを開発している場合でも、コード内ではスラッシュを使用する必要があります。

## 他にするべきこと

今のところは以上です。フォルダ構造は次のようになります。

![macOS X の finder におけるファイル構造。images フォルダーに画像が入っており、scripts と styles フォルダーは空で、あと index.html がある](file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

## このモジュール

- [基本的なソフトウェアのインストール](/ja/Learn/Getting_started_with_the_web/Installing_basic_software)
- [Web サイトをどんな外見にするか](/ja/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
- [ファイルの扱い](/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [HTML の基本](/ja/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS の基本](/ja/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [JavaScript の基本](/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Web サイトの公開](/ja/docs/Learn/Getting_started_with_the_web/%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%82%92%E5%85%AC%E9%96%8B%E3%81%99%E3%82%8B)
- [Web のしくみ](/ja/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
