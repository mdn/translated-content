---
title: Google App Engine を使ってウェブサイトを公開するには？
slug: Learn/Common_questions/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine
---

[Google App Engine](https://cloud.google.com/appengine/) は、Google のインフラストラクチャ上でアプリケーションを構築して実行できる強力なプラットフォームです。ゼロから多階層のウェブ アプリケーションを構築する場合でも、静的なウェブサイトをホストする場合でも、必要なアプリケーションを構築することができます。ここでは、 Google App Engine でウェブサイトをホスティングするためのステップバイステップガイドを紹介します。

## Google Cloud Platform プロジェクトの作成

Google のツールを自分のサイトやアプリに使用するには、Google Cloud Platform で新しいプロジェクトを作成する必要があります。そのためには、Google のアカウントを保有している必要があります。

1. Google Cloud Platform Console の [App Engine dashboard](https://console.cloud.google.com/projectselector/appengine) に移動し、 _Create_ ボタンを押します。
2. プロジェクトを作成したことがない場合は、メールによる更新情報を受け取るかどうかを選択し、利用規約に同意すれば、次に進むことができるはずです。
3. プロジェクト名を入力し、プロジェクト ID を編集してメモしておきます。このチュートリアルでは、以下の値を使用します。

   - プロジェクト名: _GAE Sample Site_
   - プロジェクト ID: _gaesamplesite_

4. _Create_ ボタンをクリックして、プロジェクトを作成します。

## アプリケーションの作成

Cloud Platform のプロジェクトには、それぞれ 1 つの App Engine アプリケーションを入れることができます。プロジェクトにアプリを用意しましょう。

1. 公開するには、サンプルアプリが必要です。使用するものがない場合は、この[サンプルアプリ](https://gaesamplesite.appspot.com/downloads.html)をダウンロードし、展開してください。
2. サンプルアプリケーションの構造を見てみましょう。`website` フォルダーにはウェブサイトのコンテンツがあり、`app.yaml` はアプリケーションの設定ファイルです。

   - ウェブサイトのコンテンツは `website` フォルダーの中に入れなければならず、そのランディングページは `index.html` と名付けなければなりませんが、それ以外はどのような形でも構いません。
   - `app.yaml` ファイルは、静的ファイルへの URL の割り当て方法を App Engine に指示するための設定ファイルです。編集する必要はありません。

## アプリケーションの公開

プロジェクトを作成し、サンプルアプリのファイルをまとめて返されましたので、アプリを公開しましょう。

1. [Google Cloud Shell](https://shell.cloud.google.com) を起動します。
2. `sample-app` フォルダーをコードエディターの左ペインにドラッグ＆ドロップします。
3. コマンドラインで以下を実行し、プロジェクトを選択します。

   ```bash
   gcloud config set project gaesamplesite
   ```

4. 続いて、以下のコマンドを実行して、アプリのディレクトリーに移動してください。

   ```bash
   cd sample-app
   ```

5. これでアプリケーションの展開、つまり App Engine にアプリをアップロードする準備が整いました。

   ```bash
   gcloud app deploy
   ```

6. アプリケーションを設置するリージョンを選ぶには、数字を入力 してください。
7. `Y`を入力して確定してください。
8. ブラウザーで _your-project-id_.appspot.com に移動し、オンライン上のウェブサイトを確認します。例: プロジェクト ID _gaesamplesite_ の場合、 [_gaesamplesite_.appspot.com](https://gaesamplesite.appspot.com/) に移動します。

## 関連情報

詳しくは、 [Google App Engine Documentation](https://cloud.google.com/appengine/docs/) を参照してください。
