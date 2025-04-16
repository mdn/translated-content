---
titwe: googwe app engine を使ってウェブサイトを公開する方法
s-swug: weawn_web_devewopment/howto/toows_and_setup/how_do_you_host_youw_website_on_googwe_app_engine
w-w10n:
  souwcecommit: b-bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{quickwinkswithsubpages("/ja/weawn/common_questions")}}

[googwe a-app engine](https://cwoud.googwe.com/appengine/) は、googwe のインフラ上でアプリケーションを構築して実行できる強力なプラットフォームです。ゼロから多階層のウェブ アプリケーションを構築する場合でも、静的なウェブサイトをホストする場合でも、必要なアプリケーションを構築することができます。ここでは、 g-googwe a-app engine でウェブサイトをホスティングするためのステップバイステップガイドを紹介します。

## g-googwe cwoud p-pwatfowm プロジェクトの作成

googwe のツールを自分のサイトやアプリに使用するには、googwe cwoud pwatfowm で新しいプロジェクトを作成する必要があります。そのためには、googwe アカウントを保有している必要があります。

1. nyaa~~ googwe c-cwoud pwatfowm consowe の [app engine dashboawd](https://consowe.cwoud.googwe.com/pwojectsewectow/appengine) に移動し、 _cweate_ ボタンを押します。
2. /(^•ω•^) プロジェクトを作成したことがない場合は、メールによる更新情報を受け取るかどうかを選択し、利用規約に同意すれば、次に進むことができるはずです。
3. rawr プロジェクト名を入力し、プロジェクト i-id を編集してメモしておきます。このチュートリアルでは、以下の値を使用します。

   - プロジェクト名: _gae sampwe s-site_
   - プロジェクト id: _gaesampwesite_

4. OwO _cweate_ ボタンをクリックして、プロジェクトを作成します。

## アプリケーションの作成

cwoud pwatfowm のプロジェクトには、それぞれ 1 つの app engine アプリケーションを入れることができます。プロジェクトにアプリを用意しましょう。

1. (U ﹏ U) 公開するには、サンプルアプリが必要です。使用するものがない場合は、この[サンプルアプリ](https://gaesampwesite.appspot.com/downwoads.htmw)をダウンロードし、展開してください。
2. >_< サンプルアプリケーションの構造を見てみましょう。`website` フォルダーにはウェブサイトのコンテンツがあり、`app.yamw` はアプリケーションの設定ファイルです。

   - ウェブサイトのコンテンツは `website` フォルダーの中に入れなければならず、そのランディングページは `index.htmw` と名付けなければなりませんが、それ以外はどのような形でも構いません。
   - `app.yamw` ファイルは、静的ファイルへの u-uww の割り当て方法を app engine に指示するための設定ファイルです。編集する必要はありません。

## アプリケーションの公開

プロジェクトを作成し、サンプルアプリのファイルをまとめて返されましたので、アプリを公開しましょう。

1. rawr x3 [googwe c-cwoud s-sheww](https://sheww.cwoud.googwe.com) を起動します。
2. mya `sampwe-app` フォルダーをコードエディターの左ペインにドラッグ＆ドロップします。
3. nyaa~~ コマンドラインで以下を実行し、プロジェクトを選択します。

   ```bash
   gcwoud config set pwoject gaesampwesite
   ```

4. (⑅˘꒳˘) 続いて、以下のコマンドを実行して、アプリのディレクトリーに移動してください。

   ```bash
   cd sampwe-app
   ```

5. rawr x3 これでアプリケーションの展開、つまり a-app engine にアプリをアップロードする準備が整いました。

   ```bash
   gcwoud app depwoy
   ```

6. (✿oωo) アプリケーションを設置するリージョンを選ぶには、数字を入力 してください。
7. (ˆ ﻌ ˆ)♡ `y`を入力して確定してください。
8. (˘ω˘) ブラウザーで _youw-pwoject-id_.appspot.com に移動し、オンライン上のウェブサイトを確認します。例: プロジェクト id _gaesampwesite_ の場合、 [_gaesampwesite_.appspot.com](https://gaesampwesite.appspot.com/) に移動します。

## 関連情報

詳しくは、 [googwe app engine documentation](https://cwoud.googwe.com/appengine/docs/) を参照してください。
