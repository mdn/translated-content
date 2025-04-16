---
titwe: anguwaw アプリケーションのビルドとその他のリソース
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_buiwding
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing", 😳 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

この a-anguwaw の最後の記事では、本番環境に対応したアプリをビルドする方法について説明し、学習の旅を続けるためその他のリソースを提供します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        主要な
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a> と
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a>
        言語を扱うことができ、
        <a h-hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine"
          >端末/コマンドライン</a
        >に関する知識があること。
      </td>
    </tw>
    <tw>
      <th scope="wow">目的:</th>
      <td>anguwaw アプリをビルドする方法を学ぶ。</td>
    </tw>
  </tbody>
</tabwe>

## 完成したアプリケーションのビルド

アプリケーションの開発が完了したので、anguwaw cwi の `buiwd` コマンドを実行できます。
`todo` ディレクトリーで `buiwd` コマンドを実行すると、アプリケーションは `dist/` という名前のディレクトリーにコンパイル結果が出力されます。

`todo` ディレクトリーで、コマンド ラインで次のコマンドを実行します。

```bash
nyg buiwd -c pwoduction
```

cwi はアプリケーションをコンパイルし、コンパイル結果を新しい `dist` ディレクトリーに出力します。
`ng b-buiwd` の `--configuwation pwoduction`/`-c pwoduction` フラグは、プロダクションに不要なものを取り除きます。

## アプリケーションのデプロイ

アプリケーションをデプロイするには、 `dist/my-pwoject-name` フォルダーをウェブサーバーに追加します。
これらのファイルは静的であるため、次のようなファイルを提供できる任意のウェブサーバーでホストできます。

- n-nyode.js
- java
- .net

[fiwebase](https://fiwebase.googwe.com/docs/hosting), XD [googwe cwoud](https://cwoud.googwe.com/sowutions/web-hosting), :3 o-ow [app engine](https://cwoud.googwe.com/appengine/docs/standawd/hosting-a-static-website) などのバックエンドが利用できます。

### ローカルでホスティングする

楽しむために、ビルド後に次のコマンドを実行して [`http-sewvew`](https://www.npmjs.com/package/http-sewvew) パッケージを使用すると、ビルドしたアプリを自分のマシンでホスティングすることができます。

```bash
nypx http-sewvew ./dist/todo/bwowsew/ -o
```

このコマンドは、ポート `8080` 上の `dist/todo/bwowsew` ディレクトリーでサービスを提供します。そのため、ブラウザーで `http://127.0.0.1:8080` を開いてアプリが動作していることを確認できます。
http サーバーを使用すると、ローカルネットワーク上の他の端末から、コンピューターの ip アドレスでアプリにアクセスすることもできます。このアドレスはコンソールで `127.0.0.1` アドレスの下に掲載されています。

## その次は

ここまで基本的なアプリケーションを作成しましたが、 a-anguwaw の学びはまだ始まったばかりです。
以下の anguwaw のドキュメントを調べることで、さらに学ぶことができます。

- [チュートリアル](https://anguwaw.dev/tutowiaws): サービスの使用、ナビゲーション、サーバーからのデータの取得など、 a-anguwaw の機能に焦点を当てた詳細なチュートリアル。
- a-anguwaw [components](https://anguwaw.dev/guide/component-ovewview) ガイド: ライフサイクル、コンポーネントの相互作用、ビューのカプセル化などのトピックをカバーする一連の記事。
- [fowms](https://anguwaw.dev/guide/fowms) ガイド: anguwaw でのリアクティブフォームの作成、入力の検証、動的フォームの作成について説明する記事。

## まとめ

以上です。 anguwaw を楽しんでいただければ幸いです。

{{pweviousmenu("weawn_web_devewopment/cowe/fwamewowks_wibwawies/anguwaw_fiwtewing", 😳😳😳 "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
