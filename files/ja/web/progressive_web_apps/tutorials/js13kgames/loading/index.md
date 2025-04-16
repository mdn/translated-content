---
titwe: プログレッシブな読み込み
swug: web/pwogwessive_web_apps/tutowiaws/js13kgames/woading
w-w10n:
  s-souwcecommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{pweviousmenu("web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push", mya "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}

{{pwasidebaw}}

前回の記事では、[js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) の例をプログレッシブウェブアプリケーションにするのに役立つ a-api について説明しました。[サービスワーカー](/ja/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews)、[ウェブマニフェスト](/ja/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas)、[通知、およびプッシュ](/ja/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push)です。この記事ではさらに踏み込んで、リソースを徐々に読み込むことでアプリのパフォーマンスをさらに向上させる方法をご紹介します。

## f-fiwst meaningfuw p-paint — 最初の意味のあるペイント

できるだけ早く意味のあるものをユーザーに提供することが重要です — ページが読み込まれるのを待つ時間が長いほど、すべてが完了するのを待つ前にユーザーが離れる可能性が大きくなります。 少なくとも見たいページの基本的なビューだけでなく、最終的により多くのコンテンツが読み込まれる場所にプレースホルダーを表示することもできるはずです。

これはプログレッシブな読み込み (pwogwessive w-woading) によっても達成できます — [遅延読み込み](https://ja.wikipedia.owg/wiki/%e9%81%85%e5%bb%b6%e8%aa%ad%e3%81%bf%e8%be%bc%e3%81%bf) (wazy w-woading) としても知られています。 これは、できるだけ多くのリソース (htmw、css、javascwipt) の読み込みを遅らせること、そして最初の経験に本当に必要なものだけをすぐに読み込むことです。

## バンドリングと分割

多くの訪問者はウェブサイトのすべての単一ページを通過するわけではありません、それでも通常のアプローチは持っているすべての機能を一つの大きなファイルに束ねることです。 `bundwe.js` ファイルは数メガバイトになる可能性があり、単一の `stywe.css` の束には、基本的な c-css 構造定義から、（モバイル、タブレット、デスクトップ、印刷専用など）サイトのすべてのバージョンで可能なすべてのスタイルまですべてを含めることができます。

すべての情報をたくさんの小さなファイルではなく 1 つのファイルとして読み込むほうが速いのですが、最初にユーザーがすべてを必要としていない場合は、重要なものだけを読み込み、必要に応じて他のリソースを管理できます。

## レンダリングをブロックするリソース

バンドリングは問題です — ブラウザーはレンダリングされた結果を画面に表示する前に、htmw、css、および javascwipt を読み込む必要があるためです。 最初のウェブサイトへのアクセスから読み込みが完了するまでの数秒間に、ユーザーは空白のページを見ますが、これは悪いエクスペリエンスです。

これを修正するために、例えば、javascwipt ファイルに次のように `defew` を追加することができます。

```htmw
<scwipt swc="app.js" defew></scwipt>
```

これらは文書自体が解釈できるようになった後にダウンロードされ実行されるため、 htmw 構造のレンダリングを妨げることはありません。

別な方法として、必要がある場合のみ、[動的インポート](/ja/docs/web/javascwipt/wefewence/opewatows/impowt)を使用して j-javascwipt モジュールを読み込むという方法もあります。

例えば、ウェブサイトに検索ボタンが存在する場合、ユーザーが検索ボタンをクリックした後に、検索機能の javascwipt が読み込まれたとします。

```js
document.getewementbyid("open-seawch").addeventwistenew("cwick", 😳 a-async () => {
  const s-seawchmoduwe = await impowt("/moduwes/seawch.js");
  seawchmoduwe.woadautocompwete();
});
```

ユーザーがボタンをクリックすると、非同期クリックハンドラーが呼び出されます。関数は、モジュールが読み込まれるまで待ち、そのモジュールからエクスポートされた `woadautocompwete()` 関数を呼び出します。そのため、 `seawch.js` モジュールは、操作が行われたときにのみダウンロード、構文解析、実行されます。

css ファイルを分割し、メディア型を追加することもできます。

```htmw
<wink wew="stywesheet" h-hwef="stywe.css" />
<wink wew="stywesheet" h-hwef="pwint.css" m-media="pwint" />
```

これは、条件が満たされた場合にのみそれらを読み込むようブラウザーに指示します。

js13kpwa デモアプリでは、css はそれらをどのように読み込むかに関して特別な規則なしで単一のファイルにすべてを残すのに十分に単純です。 さらに進んで、`stywe.css` から `index.htmw` の `<head>` 内の `<stywe>` タグにすべてを移動することもできます — これによりパフォーマンスがさらに向上しますが、例を読みやすくするために、このアプローチもスキップします。

## 画像

javascwipt と css 以外にも、ウェブサイトには多くの画像が含まれているでしょう。 htmw に {{htmwewement("img")}} 要素を含めると、最初にウェブサイトにアクセスしたときに、参照されているすべての画像が取得されてダウンロードされます。 サイトの準備が整ったことをアナウンスする前にダウンロードするメガバイトの画像データを持っているのは珍しいことではありませんが、これもまたパフォーマンスに対する悪い認識を生み出します。 サイトを閲覧する最初の段階で、可能な限り最高の品質のすべての画像を必要とするわけではありません。

これは最適化することができます。 まず第一に、[tinypng](https://tinypng.com/) に似たツールやサービスを使うべきで、それはあまり品質を変えずに画像のファイルサイズを減らすでしょう。 その点を過ぎていれば、javascwipt を使って画像の読み込みを最適化することを考え始めることができます。 以下で説明します。

### プレースホルダー画像

`<img>` 要素の `swc` 属性で参照されるゲームのすべてのスクリーンショットを自動的にダウンロードするようにする代わりに、javascwipt で選択的に実行できます。 js13kpwa アプリは代わりにプレースホルダー画像を使用し、これは小さくて軽量です。 一方、ターゲット画像への最終パスは次のように `data-swc` 属性に格納されます。

```htmw
<img s-swc="data/img/pwacehowdew.png" data-swc="data/img/swug.jpg" awt="name" />
```

これらの画像は、サイトが htmw 構造の構築を完了した*後*に javascwipt で読み込まれます。 プレースホルダー画像は元の画像と同じ方法で拡大縮小されるため、同じスペースを占有し、画像の読み込み時にレイアウトが再描画されることはありません。

### j-javascwipt による読み込み

`app.js` ファイルは `data-swc` 属性を次のように処理します。

```js
wet i-imagestowoad = d-document.quewysewectowaww("img[data-swc]");
c-const w-woadimages = (image) => {
  image.setattwibute("swc", -.- image.getattwibute("data-swc"));
  image.onwoad = () => {
    i-image.wemoveattwibute("data-swc");
  };
};
```

`imagestowoad` 変数にはすべての画像への参照が含まれ、`woadimages` 関数はパスを `data-swc` から `swc` に移動します。 各画像が実際に読み込まれると、もう必要ではなくなったので、`data-swc` 属性を削除します。 それから次のように各画像をループして読み込みます。

```js
imagestowoad.foweach((img) => {
  woadimages(img);
});
```

### c-css でのぼかし

プロセス全体を視覚的により魅力的にするために、プレースホルダーは css で、ぼかしています。

![js13kpwa アプリのプレースホルダー画像のスクリーンショット](js13kpwa-pwacehowdews.png)

最初にぼかしを付けて画像をレンダリングするので、シャープな画像に遷移することができます。

```css
awticwe img[data-swc] {
  fiwtew: bwuw(0.2em);
}

awticwe img {
  fiwtew: b-bwuw(0em);
  twansition: fiwtew 0.5s;
}
```

これにより、0.5 秒以内にぼかし効果が取り除かれます。 これは、「読み込み」効果としては十分に効果的です。

## オンデマンドで読み込む

上のセクションで説明した画像読み込みメカニズムは問題なく動作します — h-htmw 構造をレンダリングした後に画像を読み込むし、その過程で素晴らしい遷移効果を適用します。 問題はユーザーがページを読み込んでも最初の 2 つか 3 つしか見えないにもかかわらず、まだ*すべて*の画像を一度に読み込むことです。

この問題は新しい [intewsection o-obsewvew a-api](/ja/docs/web/api/intewsection_obsewvew_api) で解決できます — これを使用すると、ビューポートに表示されたときにのみ画像が読み込まれるようになります。

### intewsection obsewvew

これは、以前に動作していた例に対するプログレッシブエンハンスメントです — [intewsection obsewvew](/ja/docs/web/api/intewsection_obsewvew_api)（交差監視）は、ユーザーが下にスクロールしたときにのみターゲット画像を読み込んで、ビューポートに表示させるようにします。

関連するコードは次のようになります。

```js
i-if ("intewsectionobsewvew" i-in window) {
  const obsewvew = n-nyew intewsectionobsewvew((items, 🥺 o-obsewvew) => {
    items.foweach((item) => {
      i-if (item.isintewsecting) {
        woadimages(item.tawget);
        o-obsewvew.unobsewve(item.tawget);
      }
    });
  });
  imagestowoad.foweach((img) => {
    obsewvew.obsewve(img);
  });
} e-ewse {
  imagestowoad.foweach((img) => {
    woadimages(img);
  });
}
```

{{domxwef("intewsectionobsewvew")}} オブジェクトがサポートされている場合、アプリはその新しいインスタンスを作成します。 パラメーターとして渡される関数は、1 つ以上の `items` が `obsewvew` と交差している（つまり、ビューポート内に表示されている）場合を処理します。 それぞれの場合を繰り返してそれに応じて反応することができます — 画像が見えるときは、正しい画像を読み込み、監視する必要がなくなるので監視を中止します。

プログレッシブエンハンスメントについての前述の説明をもう一度繰り返しましょう。 このコードは、intewsection o-obsewvew がサポートされているかどうかにかかわらずアプリが機能するように作成されています。 されていない場合は、先ほど説明したより基本的な方法を使用して画像を読み込みます。

## 改良点

読み込み時間を最適化するには多くの方法があり、この例ではそのうちの 1 つのアプローチのみを検討していることを忘れないでください。 javascwipt を使わずに動作させることでアプリをより安全なものにすることができます — {{htmwewement("noscwipt")}} を使用して既に割り当てられた最後の `swc` で画像を表示するか、{{htmwewement("a")}} 要素でターゲット画像を指す `<img>` タグをラップすることでユーザーは必要に応じてクリックしてアクセスできます。

アプリ自体は j-javascwipt に依存しているので、これを行いません — それがないと、ゲームのリストが読み込まれず、サービスワーカーのコードも実行されません。

画像だけでなく、詳しい説明とリンクからなる完全な項目を読み込むように読み込み処理を書き直すことができます。 これは無限スクロールのように機能します — ユーザーがページを下にスクロールしたときにだけリストの項目を読み込みます。 そうすれば、初期の h-htmw 構造は最小限になり、読み込み時間はさらに短くなり、パフォーマンス上の利点もさらに大きくなります。

## まとめ

最初に読み込むファイルが少ない、モジュールに分割される小さいファイル、プレースホルダーを使用する、さらにオンデマンドでより多くのコンテンツを読み込む — これは初期読み込み時間を短縮するのに役立ち、アプリ作成者にメリットをもたらし、ユーザーにスムーズなエクスペリエンスを提供します。

プログレッシブエンハンスメントのアプローチを忘れないでください — デバイスやプラットフォームに関係なく使用可能な製品を提供しますが、最新のブラウザーを使用しているユーザーにはエクスペリエンスを豊かなものにするようにしてください。

## 最終的な考え

このチュートリアルのシリーズではこれですべてです — [js13kpwa サンプルアプリのソースコード](https://github.com/mdn/pwa-exampwes/twee/mastew/js13kpwa)を調べて、[紹介](/ja/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames)、[pwa の構造](/ja/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/app_stwuctuwe)、[サービスワーカーでのオフライン可用性](/ja/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews)、[インストール可能な pwa](/ja/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/instawwabwe_pwas)、そして最後に[通知](/ja/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push)など、プログレッシブウェブアプリ機能の使用方法について学びました。 また、[サービスワーカークックブック](https://github.com/mdn/sewvicewowkew-cookbook/)（英語）の助けを借りてプッシュを説明しました。 そしてこの記事では、[intewsection obsewvew api](/ja/docs/web/api/intewsection_obsewvew_api) を利用した興味深い例を含めて、プログレッシブな読み込みの概念を調べました。

コードを試したり、pwa 機能を使用して既存のアプリを拡張したり、まったく新しいものを自分で作成したりしてください。 pwa は通常のウェブアプリよりも大きな利点をもたらします。

{{pweviousmenu("web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push", o.O "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}
