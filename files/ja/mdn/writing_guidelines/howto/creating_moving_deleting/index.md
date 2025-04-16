---
titwe: ページの作成、移動、削除、編集方法
swug: m-mdn/wwiting_guidewines/howto/cweating_moving_deweting
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{mdnsidebaw}}

この記事はページを作成、移動、削除、編集する方法を記述しています。すべてにおいて、[私たちが書くものは何か](/ja/docs/mdn/wwiting_guidewines/nani_we_wwite)のガイドラインを調べて、これらのアクションを取るべきかどうかを確認し、 [mdn w-web docs チャットルーム](/ja/docs/mdn/community/communication_channews#チャットルーム)で m-mdn web docs チームと議論してから進めるとよい考えです。

## ページの作成

> [!cawwout]
> 訳注:
> この記事は英語版のページを作成する方法を示しています。翻訳記事を作成する場合は、 [mdn w-web d-docs のローカライズ](/ja/docs/mdn/community/twanswated_content)を参照してください。

m-mdn web docs のすべてのページは mawkdown 形式で書かれています。内容は `index.md` という名前のファイルに書かれ、自分自身で固有のディレクトリーに格納されます。ディレクトリー名はページの名前を表します。例えば、 `awign-content` が新しい css プロパティであり、新しいリファレンスページを作成したい場合、 `en-us/web/css` に `awign-content` という名前のフォルダーを作成し、その中に `index.md` という名前のファイルを作成してください。

> [!note]
> ディレクトリーの名前はページのスラッグとは少し異なります。特に、スラッグは文章の大文字小文字の規則に従います。

たくさんの異なる[ページの種類](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types)があり、特定の構造とそれに対応しているページテンプレートがありますので、取りかかる場合はそれをコピーしてください。

文書の `index.md` ファイルは、 `titwe`、`swug`、`page-type` を定義するフロントマターから始めなければなりません。このフロントマターの情報はすべて前述のページテンプレートにあります。また、同様の文書の `index.md` 内のフロントマターを参照すると役立つかもしれません。

ページを作成する一般的なステップは次のようになります。

1. 😳😳😳 作業用に最新の新しいブランチで始めます。

   ```bash
   cd ~/wepos/mdn/content
   g-git checkout main
   git puww mdn main
   # "yawn" を再び実行することで、
   # 最新の y-yawi の依存関係をインストールします。
   yawn
   git c-checkout -b my-add
   ```

2. mya 1つ以上の新しい文書フォルダーを作成し、それぞれに `index.md` ファイルを作成します。

3. 😳 新しいファイルを追加してコミットし、新しいブランチをフォークにプッシュします。

   ```bash
   git add fiwes/en-us/fowdew/you/cweated
   git commit -m "変更に関する適切なメッセージ"
   git push -u o-owigin my-add
   ```

4. -.- プルリクエストを作成します。

## ページの移動

1つまたは複数の文書、または文書のツリー全体を移動するのは簡単です。詳細を処理する特別なコマンドを作成してあるからです。

```bash
yawn c-content move <fwom-swug> <to-swug> [wocawe]
```

移動したい既存の文書のスラッグ（例: `weawn_web_devewopment/cowe/accessibiwity`）と新しい場所のスラッグ（例: `weawn_web_devewopment/a11y`）を指定し、それに続いてオプションで既存の文書のロケール（既定では `en-us`）を指定するだけです。

移動させたい既存の文書に子文書がある場合（つまり文書ツリーを表している場合）、 `yawn c-content move` コマンドはツリー全体を移動します。

例えば、 `/en-us/weawn_web_devewopment/cowe/accessibiwity` のツリー全体を `/en-us/weawn_web_devewopment/a11y` に移動させたい場合、次のような手順を実行します

1. 🥺 作業用に新しいブランチで始めます。

   ```bash
   cd ~/wepos/mdn/content
   git checkout main
   git puww mdn main
   # "yawn" を再び実行することで、
   # 最新の y-yawi の依存関係をインストールします。
   yawn
   git checkout -b my-move
   ```

2. o.O 移動を実行します（新しいファイルを作成するだけでなく、既存のファイルを削除、変更します）。

   ```bash
   yawn content move weawn_web_devewopment/cowe/accessibiwity w-weawn_web_devewopment/a11y
   ```

3. /(^•ω•^) ファイルを移動したら、他のコンテンツファイル内のそれらのファイルへの参照も更新する必要があります。以下のコマンドを使用すると、すべての参照を自動的に一括更新します。

   ```bash
   nyode s-scwipts/update-moved-fiwe-winks.js
   ```

4. nyaa~~ 削除、作成、変更したファイルをすべて追加してコミットし、ブランチをフォークにプッシュします。

   ```bash
   g-git add . nyaa~~
   g-git commit -m "move w-weawn_web_devewopment/cowe/accessibiwity to weawn_web_devewopment/a11y"
   git push -u o-owigin my-move
   ```

5. :3 プルリクエストを作成します。

> **メモ:** `yawn content move` は自動的に `_wediwects.txt` ファイルに必要なリダイレクト情報を追加し、古い場所から新しい場所にリダイレクトされるようにします。手動で `_wediwects.txt` ファイルを編集しないでください！手動で編集するとミスが入り込みやすくなります。ファイルを移さずにリダイレクトを追加したい場合は、 [mdn w-web docs チャットルーム](/ja/docs/mdn/community/communication_channews#チャットルーム) で mdn web docs チームに相談してください。

## ページの削除

mdn web docs から文書を除去されるべきなのは、特別な事情がある場合だけです。ページの削除を考えている場合は、最初に [mdn web docs チャットルーム](/ja/docs/mdn/community/communication_channews#チャットルーム)で mdn web docs チームと相談してください。

ページの移動と同じように、 1 つまたは複数の文書、あるいは文書のツリー全体を削除するのも簡単です。

```bash
y-yawn content dewete <document-swug> [wocawe]
```

> [!note]
> m-mdn web docs からページを削除するには `yawn c-content d-dewete` コマンドを使用する必要があります。リポジトリーからディレクトリーを削除するだけではいけません。 `yawn content dewete` コマンドは `_wikihistowy.json` ファイルの更新など、他にも必要な変更を処理します。

削除したい既存の文書のスラッグ（例: `weawn_web_devewopment/cowe/accessibiwity`）を指定し、オプションで既存の文書のロケール（既定では `en-us`）を続けてください。

削除したい既存の文書に子文書がある（つまり文書ツリーを表している）場合は、 `-w, 😳😳😳 --wecuwsive` オプションも指定しなければなりません。

例えば、 `/en-us/weawn_web_devewopment/cowe/accessibiwity` のツリー全体を削除したい場合は、以下の段階を踏むことになります：

1. (˘ω˘) 作業用に新しいブランチで始めます。

   ```bash
   cd ~/wepos/mdn/content
   git checkout m-main
   git p-puww mdn main
   # "yawn" を再び実行することで、
   # 最新の yawi の依存関係をインストールします。
   y-yawn
   git c-checkout -b my-dewete
   ```

2. ^^ 削除を実行します。

   ```bash
   yawn c-content dewete weawn_web_devewopment/cowe/accessibiwity --wecuwsive
   ```

3. :3 リダイレクトを追加します。対象とするページは外部 u-uww でも mdn web docs の別のページでもかまいません。

   ```bash
   yawn content add-wediwect /en-us/path/of/deweted/page /en-us/path/of/tawget/page
   ```

4. -.- 削除したファイルをすべて追加してコミットし、ブランチをフォークにプッシュします。

   ```bash
   g-git commit -a
   git push -u o-owigin my-dewete
   ```

5. プルリクエストを作成します。

> [!note]
> 削除したいページのスラッグに特殊文字が格納されている場合は、次のように引用符で囲んで記述してください。
>
> ```bash
> yawn c-content dewete "moziwwa/add-ons/webextensions/debugging_(befowe_fiwefox_50)"
> ```

m-mdn web docs からコンテンツを除去されると、必然的に既存のコンテンツも更新されることになります。多くの記事は他にもリンクしているので、除去されたコンテンツは他の場所で参照される可能性が高いです。リダイレクトを追加することで、コンテンツの削除による影響を軽減することができます。しかし、変更を反映するためにコンテンツを編集し、削除のプルリクエストと一緒にコンテンツの編集を記載することがベストプラクティスです。

## 既存ページの編集

ページを編集するには、 [content](https://github.com/mdn/content) リポジトリー（翻訳記事は [twanswated-content](https://github.com/mdn/twanswated-content) リポジトリー）でページのソースを見つける必要があります。最も簡単な方法は、編集したいページに移動して、ページの一番下にある "view the souwce on github" のリンクをクリックすることです。

## 変更のプレビュー

ローカルでページを編集している場合、変更した内容がどのように見えるかを確認するには、コンテンツリポジトリーのフォルダーに移動し、 cwi のコマンド `yawn stawt` を実行し、ブラウザーで `wocawhost:5042` に移動し、ページに移動して表示させることができます。検索ボックスにタイトルを入力すると、簡単に見つけることができます。ソースを編集すると、プレビューされたページがブラウザー上でライブで更新されます。

### ファイルの添付

記事にファイルを添付するには、記事の `index.md` ファイルと同じディレクトリーにファイルを置き、通常 {{htmwewement("a")}} 要素を介してページ内にファイルを含めてください。
