---
title: ページの作成、移動、削除、編集方法
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

この記事はページを作成、移動、削除、編集する方法を記述しています。すべてにおいて、[私たちが書くものは何か](/ja/docs/MDN/Writing_guidelines/What_we_write)のガイドラインを調べて、これらのアクションを取るべきかどうかを確認し、 [MDN Web Docs チャットルーム](/ja/docs/MDN/Community/Communication_channels#チャットルーム)で MDN Web Docs チームと議論してから進めるとよい考えです。

## ページの作成

> [!CALLOUT]
> 訳注:
> この記事は英語版のページを作成する方法を示しています。翻訳記事を作成する場合は、 [MDN Web Docs のローカライズ](/ja/docs/MDN/Community/Translated_content)を参照してください。

MDN Web Docs のすべてのページは Markdown 形式で書かれています。内容は `index.md` という名前のファイルに書かれ、自分自身で固有のディレクトリーに格納されます。ディレクトリー名はページの名前を表します。例えば、 `align-content` が新しい CSS プロパティであり、新しいリファレンスページを作成したい場合、 `en-us/web/css` に `align-content` という名前のフォルダーを作成し、その中に `index.md` という名前のファイルを作成してください。

> [!NOTE]
> ディレクトリーの名前はページのスラッグとは少し異なります。特に、スラッグは文章の大文字小文字の規則に従います。

たくさんの異なる[ページの種類](/ja/docs/MDN/Writing_guidelines/Page_structures/Page_types)があり、特定の構造とそれに対応しているページテンプレートがありますので、取りかかる場合はそれをコピーしてください。

文書の `index.md` ファイルは、 `title`、`slug`、`page-type` を定義するフロントマターから始めなければなりません。このフロントマターの情報はすべて前述のページテンプレートにあります。また、同様の文書の `index.md` 内のフロントマターを参照すると役立つかもしれません。

ページを作成する一般的なステップは次のようになります。

1. 作業用に最新の新しいブランチで始めます。

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # "yarn" を再び実行することで、
   # 最新の Yari の依存関係をインストールします。
   yarn
   git checkout -b my-add
   ```

2. 1つ以上の新しい文書フォルダーを作成し、それぞれに `index.md` ファイルを作成します。

3. 新しいファイルを追加してコミットし、新しいブランチをフォークにプッシュします。

   ```bash
   git add files/en-us/folder/you/created
   git commit -m "変更に関する適切なメッセージ"
   git push -u origin my-add
   ```

4. プルリクエストを作成します。

## ページの移動

1つまたは複数の文書、または文書のツリー全体を移動するのは簡単です。詳細を処理する特別なコマンドを作成してあるからです。

```bash
yarn content move <from-slug> <to-slug> [locale]
```

移動したい既存の文書のスラッグ（例: `Learn_web_development/Core/Accessibility`）と新しい場所のスラッグ（例: `Learn_web_development/A11y`）を指定し、それに続いてオプションで既存の文書のロケール（既定では `en-US`）を指定するだけです。

移動させたい既存の文書に子文書がある場合（つまり文書ツリーを表している場合）、 `yarn content move` コマンドはツリー全体を移動します。

例えば、 `/en-US/Learn_web_development/Core/Accessibility` のツリー全体を `/en-US/Learn_web_development/A11y` に移動させたい場合、次のような手順を実行します

1. 作業用に新しいブランチで始めます。

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # "yarn" を再び実行することで、
   # 最新の Yari の依存関係をインストールします。
   yarn
   git checkout -b my-move
   ```

2. 移動を実行します（新しいファイルを作成するだけでなく、既存のファイルを削除、変更します）。

   ```bash
   yarn content move Learn_web_development/Core/Accessibility Learn_web_development/A11y
   ```

3. ファイルを移動したら、他のコンテンツファイル内のそれらのファイルへの参照も更新する必要があります。以下のコマンドを使用すると、すべての参照を自動的に一括更新します。

   ```bash
   node scripts/update-moved-file-links.js
   ```

4. 削除、作成、変更したファイルをすべて追加してコミットし、ブランチをフォークにプッシュします。

   ```bash
   git add .
   git commit -m "Move Learn_web_development/Core/Accessibility to Learn_web_development/A11y"
   git push -u origin my-move
   ```

5. プルリクエストを作成します。

> [!NOTE]
> `yarn content move` は自動的に `_redirects.txt` ファイルに必要なリダイレクト情報を追加し、古い場所から新しい場所にリダイレクトされるようにします。手動で `_redirects.txt` ファイルを編集しないでください！手動で編集するとミスが入り込みやすくなります。ファイルを移さずにリダイレクトを追加したい場合は、 [MDN Web Docs チャットルーム](/ja/docs/MDN/Community/Communication_channels#チャットルーム) で MDN Web Docs チームに相談してください。

## ページの削除

MDN Web Docs から文書を除去されるべきなのは、特別な事情がある場合だけです。ページの削除を考えている場合は、最初に [MDN Web Docs チャットルーム](/ja/docs/MDN/Community/Communication_channels#チャットルーム)で MDN Web Docs チームと相談してください。

ページの移動と同じように、 1 つまたは複数の文書、あるいは文書のツリー全体を削除するのも簡単です。

```bash
yarn content delete <document-slug> [locale]
```

> [!NOTE]
> MDN Web Docs からページを削除するには `yarn content delete` コマンドを使用する必要があります。リポジトリーからディレクトリーを削除するだけではいけません。 `yarn content delete` コマンドは `_wikihistory.json` ファイルの更新など、他にも必要な変更を処理します。

削除したい既存の文書のスラッグ（例: `Learn_web_development/Core/Accessibility`）を指定し、オプションで既存の文書のロケール（既定では `en-US`）を続けてください。

削除したい既存の文書に子文書がある（つまり文書ツリーを表している）場合は、 `-r, --recursive` オプションも指定しなければなりません。

例えば、 `/en-US/Learn_web_development/Core/Accessibility` のツリー全体を削除したい場合は、以下の段階を踏むことになります：

1. 作業用に新しいブランチで始めます。

   ```bash
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # "yarn" を再び実行することで、
   # 最新の Yari の依存関係をインストールします。
   yarn
   git checkout -b my-delete
   ```

2. 削除を実行します。

   ```bash
   yarn content delete Learn_web_development/Core/Accessibility --recursive
   ```

3. リダイレクトを追加します。対象とするページは外部 URL でも MDN Web Docs の別のページでもかまいません。

   ```bash
   yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
   ```

4. 削除したファイルをすべて追加してコミットし、ブランチをフォークにプッシュします。

   ```bash
   git commit -a
   git push -u origin my-delete
   ```

5. プルリクエストを作成します。

> [!NOTE]
> 削除したいページのスラッグに特殊文字が格納されている場合は、次のように引用符で囲んで記述してください。
>
> ```bash
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

MDN Web Docs からコンテンツを除去されると、必然的に既存のコンテンツも更新されることになります。多くの記事は他にもリンクしているので、除去されたコンテンツは他の場所で参照される可能性が高いです。リダイレクトを追加することで、コンテンツの削除による影響を軽減することができます。しかし、変更を反映するためにコンテンツを編集し、削除のプルリクエストと一緒にコンテンツの編集を記載することがベストプラクティスです。

## 既存ページの編集

ページを編集するには、 [content](https://github.com/mdn/content) リポジトリー（翻訳記事は [translated-content](https://github.com/mdn/translated-content) リポジトリー）でページのソースを見つける必要があります。最も簡単な方法は、編集したいページに移動して、ページの一番下にある "View the source on GitHub" のリンクをクリックすることです。

## 変更のプレビュー

ローカルでページを編集している場合、変更した内容がどのように見えるかを確認するには、コンテンツリポジトリーのフォルダーに移動し、 CLI のコマンド `yarn start` を実行し、ブラウザーで `localhost:5042` に移動し、ページに移動して表示させることができます。検索ボックスにタイトルを入力すると、簡単に見つけることができます。ソースを編集すると、プレビューされたページがブラウザー上でライブで更新されます。

### ファイルの添付

記事にファイルを添付するには、記事の `index.md` ファイルと同じディレクトリーにファイルを置き、通常 {{htmlelement("a")}} 要素を介してページ内にファイルを含めてください。
