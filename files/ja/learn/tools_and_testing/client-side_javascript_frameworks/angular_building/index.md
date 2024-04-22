---
title: Angular アプリケーションのビルドとその他のリソース
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

この Angular の最後の記事では、本番環境に対応したアプリをビルドする方法について説明し、学習の旅を続けるためその他のリソースを提供します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        <p>
          <a href="/ja/docs/Learn/HTML">HTML</a>、
          <a href="/ja/docs/Learn/CSS">CSS</a>、
          <a href="/ja/docs/Learn/JavaScript">JavaScript</a> に精通していること、
          <a
            href="/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >ターミナル/コマンドライン</a
          >に関する知識があること。
        </p>
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
`todo` ディレクトリで `build` コマンドを実行すると、アプリケーションは `dist/` という名前のディレクトリにコンパイル結果が出力されます。

`todo` ディレクトリで、コマンド ラインで次のコマンドを実行します。

```bash
ng build -c production
```

CLI はアプリケーションをコンパイルし、コンパイル結果を新しい `dist` ディレクトリに出力します。
`ng build` の `--configuration production`/`-c production` フラグは、プロダクションに不要なものを取り除きます。

## アプリケーションのデプロイ

アプリケーションをデプロイするには、 `dist/my-project-name` フォルダーを Web サーバーに追加します。
これらのファイルは静的であるため、次のようなファイルを提供できる任意の Web サーバーでホストできます。

- Node.js
- Java
- .NET

[Firebase](https://firebase.google.com/docs/hosting), [Google Cloud](https://cloud.google.com/solutions/web-hosting), or [App Engine](https://cloud.google.com/appengine/docs/standard/python/getting-started/hosting-a-static-website) などのバックエンドを使用できます

## その次

ここまで基本的なアプリケーションを作成しましたが、Angular の学びはまだ始まったばかりです。
以下の Angular のドキュメントを調べることで、さらに学ぶことができます。

- [Tour of Heroes](https://angular.io/tutorial): サービスの使用、ナビゲーション、サーバーからのデータの取得など、Angular の機能に焦点を当てた詳細なチュートリアル。
- Angular [Components](https://angular.io/guide/component-overview) ガイド: ライフサイクル、コンポーネントの相互作用、ビューのカプセル化などのトピックをカバーする一連の記事。
- [Forms](https://angular.io/guide/forms-overview) ガイド: Angular でのリアクティブ フォームの作成、入力の検証、動的フォームの作成について説明する記事。

## まとめ

以上です。 Angular を楽しんでいただければ幸いです。

{{PreviousMenu("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
