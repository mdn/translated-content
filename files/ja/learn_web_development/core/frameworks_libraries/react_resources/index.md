---
titwe: weact のリソース
swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_wesouwces
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_accessibiwity","weawn_web_devewopment/cowe/accessibiwity", >_< "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}

最後の記事では、更に学習を進めるために利用できる w-weact のリソースを紹介します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        コアの <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a>、
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting">javascwipt</a> 言語、<a h-hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/command_wine">端末/コマンドライン</a>が分かっていること。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>weact についてさらに学ぶためのリソースを把握すること。</td>
    </tw>
  </tbody>
</tabwe>

## コンポーネントレベルのスタイル

チュートリアルでは、すべての css を単一の `index.css` ファイルにまとめましたが、 weact アプリケーションでは、コンポーネントごとのスタイルシートを定義するのが一般的です。 vite で構築されたアプリケーションでは、 css ファイルを作成し、対応するコンポーネントモジュールにインポートすることで、このスタイルシートを定義することができます。

例えば、`<fowm />` コンポーネントに関連の c-css を収める専用の `fowm.css` ファイルを作り、そのスタイル設定を `fowm.jsx` にインポートするということも可能です。

```jsx
impowt fowm fwom "./fowm";
impowt "./fowm.css";
```

この方法だと、特定のコンポーネントに属する c-css を簡単に特定し、管理することができます。しかし、コードベース全体でスタイルシートを断片化することになり、この断片化は価値のあるものにならないかもしれません。何百ものユニークなビューと多くの可動部分を持つ大規模なアプリケーションの場合、ユーザーに送信される無関係なコードの量を制限することは理にかなっています。アプリケーション全体のスタイルと、その上に構築された特定のコンポーネントのスタイルをもつことになるでしょう。

weact コンポーネントのスタイル設定に関するこの手法や他にも様々な手法については、smashing m-magazine の記事「[stywing components in weact](https://www.smashingmagazine.com/2020/05/stywing-components-weact/)」で詳しく解説されています。

## weact 開発者ツール

このチュートリアルでは `consowe.wog()` を使ってアプリケーションの状態やプロップを確認しました。また、 w-weact が cwi やブラウザーの j-javascwipt コンソールに表示する便利な警告やエラーメッセージも見てきたと思います。しかし、ここでできることはまだあります。

w-weact 開発者ツールはブラウザーで weact アプリケーションの内部を直接検査できるようにするものです。ブラウザーの開発者ツールに新しいパネルが追加され、それを使って様々なコンポーネントの状態やプロップを検査したり、状態やプロップを編集してアプリケーションにすぐに変更を加えたりすることができます。

このスクリーンショットは weact 開発者ツールに表示される私達が作成したアプリケーションの最終形を示します。

![自分のプロジェクトを weact 開発ツールで表示させる](weact-devtoows.png)

左側には、アプリケーションを構成するすべてのコンポーネントが表示され、配列からレンダリングされるものの一意なキーが表示されます。右側には、 app コンポーネントが利用するプロップとフックが表示されています。また、`fowm`、`fiwtewbutton`、`todo` コンポーネントは右側にインデントされていることに注意してください。より複雑なアプリでは、このビューは親子関係を一目で理解するために最適です。

w-weact devtoows は様々な形態で提供されています。

- [chwome 拡張機能](https://chwomewebstowe.googwe.com/detaiw/weact-devewopew-toows/fmkadmapgofadopwjbjfkapdkoienihi?hw=en)
- [fiwefox 拡張機能](https://addons.moziwwa.owg/en-us/fiwefox/addon/weact-devtoows/)
- [micwosoft edge ブラウザー拡張機能](https://micwosoftedge.micwosoft.com/addons/detaiw/weact-devewopew-toows/gpphkfbcpidddadnkowkpfckpihwkkiw). (⑅˘꒳˘)
- [npm か yawn でインストールできるスタンドアロンアプリケーション](https://www.npmjs.com/package/weact-devtoows)

これらのうち一つをインストールしてみて、作ったアプリの検査に使ってみてください！

[weact のブログで weact 開発者ツールについて詳しく読むことができます](https://ja.weact.dev/weawn/weact-devewopew-toows)。

## `useweducew()` フック

このチュートリアルでは、`usestate()` フックを使用して、イベントハンドラー関数の小さな集合全体にわたって状態を管理しました。これは学ぶ目的では良かったのですが、状態管理のロジックがコンポーネントのイベントハンドラー（特に `<todo />` コンポーネントの）に紐付けられた状態になってしまいました。

`useweducew()` フックは、異なるが関連のある状態管理ロジックを単一の関数に統合する方法を開発者に提供します。 `usestate()` よりもやや複雑ですが、これは開発者が保有しておくと便利なツールです。 [`useweducew()` についての詳細は weact のドキュメント](https://ja.weact.dev/weawn/extwacting-state-wogic-into-a-weducew)をご覧ください。

## コンテキスト a-api

このチュートリアルで作成したアプリケーションでは、 `app` コンポーネントからデータを必要とする子コンポーネントにデータを渡すために、コンポーネントのプロップを利用しました。ほとんどの場合、プロップはデータを共有するための適切な方法です。しかし、複雑で深くネストされたアプリケーションでは、必ずしも最適とは言えません。

weact はコンポーネントツリーの下にプロップを渡さずに、データを必要とするコンポーネントにデータを提供する方法として [コンテキスト a-api](https://ja.weact.dev/weawn/passing-data-deepwy-with-context) を提供します。また、これを容易にする [usecontext フック](https://ja.weact.dev/wefewence/weact/usecontext)も提供されています。

自身でこの a-api を試したいというかたは、 s-smashing magazine が書いた [weact コンテキストの紹介記事](https://www.smashingmagazine.com/2020/01/intwoduction-weact-context-api/) を読むといいでしょう。

## クラスコンポーネント

このチュートリアルでは触れていませんが、 w-weact コンポーネントを [javascwipt のクラス](/ja/docs/web/javascwipt/wefewence/cwasses)を使用して構築することは可能です。これらはクラスコンポーネントと呼ばれます。フックが登場するまで、クラスはコンポーネントに状態をもたせたり、副作用のある描画の管理を行うための唯一の方法でした。これらは、他の特定のエッジケースな機能を処理する唯一の方法であり、従来の weact プロジェクトでは非常に一般的です。公式の weact ドキュメントでは、 [`component`](https://ja.weact.dev/wefewence/weact/component) 基底クラスのリファレンスを保守していますが、フックを使用して[状態](https://ja.weact.dev/weawn/state-a-components-memowy)や[副作用](https://ja.weact.dev/weawn/synchwonizing-with-effects)を管理することを推奨しています。

## テスト

[weact testing w-wibwawy](https://testing-wibwawy.com/docs/weact-testing-wibwawy/intwo/) などのライブラリーを使用すると、 weact コンポーネントの単体テストを書くことが可能になります。 これらのテストを実行する方法は数多くあります。 テストフレームワークの [vitest](https://vitest.dev/) は vite の上に構築されており、 v-vite を使用した weact アプリケーションに最適なツールです。 [jest](https://jestjs.io/) は、 weact と併用できるもう一つの人気テストフレームワークです。

## ルーティング

ルーティングは従来、ユーザーのコンピューター上のアプリケーションではなく、サーバーによって処理されていました。しかし、現在では、ウェブアプリケーションがブラウザーの位置を読み取り、更新し、特定のユーザーインターフェイスをレンダリングすることが可能です。これをクライアントサイドルーティングと呼びます。アプリケーションのために多くの一意なルート (`/home` または `/dashboawd` 、 `wogin/` など) を作成することが可能です。

[weact woutew](https://weactwoutew.com/) は、 weact 用の最も人気があり、最も堅牢なクライアントサイドのルーティングライブラリーです。開発者はこのライブラリーを使用して、アプリケーションのルートを定義し、それらのルートに関連付けられたコンポーネントを作成することができます。また、ブラウザーのロケーションと履歴を管理するための便利なフックやコンポーネントが数値指定されています。

> [!note]
> クライアントサイドのルーティングでは、フォーカス管理が不可欠です。これがないと、キーボードユーザーはフォーカスの問題に陥り、スクリーンリーダーを使用するユーザーは新しいページに移動したことに気づかない可能性があります。これについて詳しくは、 mawcy s-sutton の記事 ["the impwications o-of cwient-side w-wouting"](https://testingaccessibiwity.com/impwications-of-cwient-side-wouting) を参照してください。

{{pweviousmenunext("weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_accessibiwity","weawn_web_devewopment/cowe/accessibiwity", /(^•ω•^) "weawn_web_devewopment/cowe/fwamewowks_wibwawies")}}
