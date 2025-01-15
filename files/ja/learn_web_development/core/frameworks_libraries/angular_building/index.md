---
title: Angular アプリケーションのビルドとその他のリソース
slug: Learn_web_development/Core/Frameworks_libraries/Angular_building
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}

この Angular の最後の記事では、本番環境に対応したアプリをビルドする方法について説明し、学習の旅を続けるためその他のリソースを提供します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        主要な
        <a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a> と
        <a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS</a>、
        <a href="/ja/docs/Learn_web_development/Core/Scripting">JavaScript</a>
        言語を扱うことができ、
        <a href="/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
          >端末/コマンドライン</a
        >に関する知識があること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>Angular アプリをビルドする方法を学ぶ。</td>
    </tr>
  </tbody>
</table>

## 完成したアプリケーションのビルド

アプリケーションの開発が完了したので、Angular CLI の `build` コマンドを実行できます。
`todo` ディレクトリーで `build` コマンドを実行すると、アプリケーションは `dist/` という名前のディレクトリーにコンパイル結果が出力されます。

`todo` ディレクトリーで、コマンド ラインで次のコマンドを実行します。

```bash
ng build -c production
```

CLI はアプリケーションをコンパイルし、コンパイル結果を新しい `dist` ディレクトリーに出力します。
`ng build` の `--configuration production`/`-c production` フラグは、プロダクションに不要なものを取り除きます。

## アプリケーションのデプロイ

アプリケーションをデプロイするには、 `dist/my-project-name` フォルダーをウェブサーバーに追加します。
これらのファイルは静的であるため、次のようなファイルを提供できる任意のウェブサーバーでホストできます。

- Node.js
- Java
- .NET

[Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting), or [App Engine](https://cloud.google.com/appengine/docs/standard/hosting-a-static-website) などのバックエンドが利用できます。

### ローカルでホスティングする

楽しむために、ビルド後に次のコマンドを実行して [`http-server`](https://www.npmjs.com/package/http-server) パッケージを使用すると、ビルドしたアプリを自分のマシンでホスティングすることができます。

```bash
npx http-server ./dist/todo/browser/ -o
```

このコマンドは、ポート `8080` 上の `dist/todo/browser` ディレクトリーでサービスを提供します。そのため、ブラウザーで `http://127.0.0.1:8080` を開いてアプリが動作していることを確認できます。
HTTP サーバーを使用すると、ローカルネットワーク上の他の端末から、コンピューターの IP アドレスでアプリにアクセスすることもできます。このアドレスはコンソールで `127.0.0.1` アドレスの下に掲載されています。

## その次は

ここまで基本的なアプリケーションを作成しましたが、 Angular の学びはまだ始まったばかりです。
以下の Angular のドキュメントを調べることで、さらに学ぶことができます。

- [チュートリアル](https://angular.dev/tutorials): サービスの使用、ナビゲーション、サーバーからのデータの取得など、 Angular の機能に焦点を当てた詳細なチュートリアル。
- Angular [Components](https://angular.dev/guide/component-overview) ガイド: ライフサイクル、コンポーネントの相互作用、ビューのカプセル化などのトピックをカバーする一連の記事。
- [Forms](https://angular.dev/guide/forms) ガイド: Angular でのリアクティブフォームの作成、入力の検証、動的フォームの作成について説明する記事。

## まとめ

以上です。 Angular を楽しんでいただければ幸いです。

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Angular_filtering", "Learn_web_development/Core/Frameworks_libraries")}}
