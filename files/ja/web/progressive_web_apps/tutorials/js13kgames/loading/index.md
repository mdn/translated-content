---
title: プログレッシブ読み込み
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Loading
---

{{PreviousMenu("Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}

前回の記事では、[js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) の例をプログレッシブウェブアプリケーションにするのに役立つ API について説明しました — [サービスワーカー](/ja/docs/Web/Progressive_web_apps/Offline_Service_workers)、[ウェブマニフェスト](/ja/docs/Web/Progressive_web_apps/Installable_PWAs)、[通知、およびプッシュ](/ja/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push)です。 この記事では、リソースを徐々に読み込せて、アプリのパフォーマンスをさらに向上させます。

## First meaningful paint — 最初の意味のあるペイント

できるだけ早く意味のあるものをユーザーに提供することが重要です — ページが読み込まれるのを待つ時間が長いほど、すべてが完了するのを待つ前にユーザーが離れる可能性が大きくなります。 少なくとも見たいページの基本的なビューだけでなく、最終的により多くのコンテンツが読み込まれる場所にプレースホルダーを表示することもできるはずです。

これはプログレッシブ読み込み (progressive loading) によっても達成できます — [遅延読み込み](https://ja.wikipedia.org/wiki/%E9%81%85%E5%BB%B6%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%81%BF) (Lazy loading) としても知られています。 これは、できるだけ多くのリソース (HTML、CSS、JavaScript) の読み込みを遅らせること、そして最初のエクスペリエンスに本当に必要なものだけをすぐに読み込むことです。

## バンドリングと分割

多くの訪問者はウェブサイトのすべての単一ページを通過するわけではありません、それでも通常のアプローチは持っているすべての機能を一つの大きなファイルに束ねることです。 `bundle.js` ファイルは数メガバイトになる可能性があり、単一の `style.css` の束には、基本的な CSS 構造定義から、（モバイル、タブレット、デスクトップ、印刷専用など）サイトのすべてのバージョンで可能なすべてのスタイルまですべてを含めることができます。

すべての情報をたくさんの小さなファイルではなく 1 つのファイルとして読み込むほうが速いのですが、最初にユーザーがすべてを必要としていない場合は、重要なものだけを読み込み、必要に応じて他のリソースを管理できます。

## レンダリングをブロックするリソース

バンドリングは問題です — ブラウザーはレンダリングされた結果を画面に表示する前に、HTML、CSS、および JavaScript を読み込む必要があるためです。 最初のウェブサイトへのアクセスから読み込みが完了するまでの数秒間に、ユーザーは空白のページを見ますが、これは悪いエクスペリエンスです。

これを修正するために、例えば、JavaScript ファイルに次のように `defer` を追加することができます。

```html
<script src="app.js" defer></script>
```

それらは文書自体が解析された*後*にダウンロードされて実行されるので、それは HTML 構造のレンダリングをブロックしません。 CSS ファイルを分割して次のようにメディア種別を追加することもできます。

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="print.css" media="print" />
```

これは、条件が満たされた場合にのみそれらを読み込むようブラウザーに指示します。

js13kPWA デモアプリでは、CSS はそれらをどのように読み込むかに関して特別な規則なしで単一のファイルにすべてを残すのに十分に単純です。 さらに進んで、`style.css` から `index.html` の `<head>` 内の `<style>` タグにすべてを移動することもできます — これによりパフォーマンスがさらに向上しますが、例を読みやすくするために、このアプローチもスキップします。

## 画像

JavaScript と CSS 以外にも、ウェブサイトには多くの画像が含まれているでしょう。 HTML に {{htmlelement("img")}} 要素を含めると、最初にウェブサイトにアクセスしたときに、参照されているすべての画像が取得されてダウンロードされます。 サイトの準備が整ったことをアナウンスする前にダウンロードするメガバイトの画像データを持っているのは珍しいことではありませんが、これもまたパフォーマンスに対する悪い認識を生み出します。 サイトを閲覧する最初の段階で、可能な限り最高の品質のすべての画像を必要とするわけではありません。

これは最適化することができます。 まず第一に、[TinyPNG](https://tinypng.com/) に似たツールやサービスを使うべきで、それはあまり品質を変えずに画像のファイルサイズを減らすでしょう。 その点を過ぎていれば、JavaScript を使って画像の読み込みを最適化することを考え始めることができます。 以下で説明します。

### プレースホルダー画像

`<img>` 要素の `src` 属性で参照されるゲームのすべてのスクリーンショットを自動的にダウンロードするようにする代わりに、JavaScript で選択的に実行できます。 js13kPWA アプリは代わりにプレースホルダー画像を使用し、これは小さくて軽量です。 一方、ターゲット画像への最終パスは次のように `data-src` 属性に格納されます。

```html
<img src="data/img/placeholder.png" data-src="data/img/SLUG.jpg" alt="NAME" />
```

これらの画像は、サイトが HTML 構造の構築を完了した*後*に JavaScript で読み込まれます。 プレースホルダー画像は元の画像と同じ方法で拡大縮小されるため、同じスペースを占有し、画像の読み込み時にレイアウトが再描画されることはありません。

### JavaScript による読み込み

`app.js` ファイルは `data-src` 属性を次のように処理します。

```js
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
```

`imagesToLoad` 変数にはすべての画像への参照が含まれ、`loadImages` 関数はパスを `data-src` から `src` に移動します。 各画像が実際に読み込まれると、もう必要ではなくなったので、`data-src` 属性を削除します。 それから次のように各画像をループして読み込みます。

```js
imagesToLoad.forEach((img) => {
  loadImages(img);
});
```

### CSS でのぼかし

プロセス全体を視覚的により魅力的にするために、プレースホルダーは CSS で、ぼかしています。

![js13kPWA アプリのプレースホルダー画像のスクリーンショット](js13kpwa-placeholders.png)

最初にぼかしを付けて画像をレンダリングするので、シャープな画像に遷移することができます。

```css
article img[data-src] {
  filter: blur(0.2em);
}

article img {
  filter: blur(0em);
  transition: filter 0.5s;
}
```

これにより、0.5 秒以内にぼかし効果が取り除かれます。 これは、「読み込み」効果としては十分に効果的です。

## オンデマンドで読み込む

上のセクションで説明した画像読み込みメカニズムは問題なく動作します — HTML 構造をレンダリングした後に画像を読み込むし、その過程で素晴らしい遷移効果を適用します。 問題はユーザーがページを読み込んでも最初の 2 つか 3 つしか見えないにもかかわらず、まだ*すべて*の画像を一度に読み込むことです。

この問題は新しい [Intersection Observer API](/ja/docs/Web/API/Intersection_Observer_API) で解決できます — これを使用すると、ビューポートに表示されたときにのみ画像が読み込まれるようになります。

### Intersection Observer

これは、以前に動作していた例に対するプログレッシブエンハンスメントです — [Intersection Observer](/ja/docs/Web/API/Intersection_Observer_API)（交差監視）は、ユーザーが下にスクロールしたときにのみターゲット画像を読み込んで、ビューポートに表示させるようにします。

関連するコードは次のようになります。

```js
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
```

{{domxref("IntersectionObserver")}} オブジェクトがサポートされている場合、アプリはその新しいインスタンスを作成します。 パラメータとして渡される関数は、1 つ以上の `items` が `observer` と交差している（つまり、ビューポート内に表示されている）場合を処理します。 それぞれの場合を繰り返してそれに応じて反応することができます — 画像が見えるときは、正しい画像を読み込み、監視する必要がなくなるので監視を中止します。

プログレッシブエンハンスメントについての前述の説明をもう一度繰り返しましょう。 このコードは、Intersection Observer がサポートされているかどうかにかかわらずアプリが機能するように作成されています。 されていない場合は、先ほど説明したより基本的な方法を使用して画像を読み込みます。

## 改良点

読み込み時間を最適化するには多くの方法があり、この例ではそのうちの 1 つのアプローチのみを検討していることを忘れないでください。 JavaScript を使わずに動作させることでアプリをより安全なものにすることができます — {{htmlelement("noscript")}} を使用して既に割り当てられた最後の `src` で画像を表示するか、{{htmlelement("a")}} 要素でターゲット画像を指す `<img>` タグをラップすることでユーザーは必要に応じてクリックしてアクセスできます。

アプリ自体は JavaScript に依存しているので、これを行いません — それがないと、ゲームのリストが読み込まれず、サービスワーカーのコードも実行されません。

画像だけでなく、詳しい説明とリンクからなる完全な項目を読み込むように読み込み処理を書き直すことができます。 これは無限スクロールのように機能します — ユーザーがページを下にスクロールしたときにだけリストの項目を読み込みます。 そうすれば、初期の HTML 構造は最小限になり、読み込み時間はさらに短くなり、パフォーマンス上の利点もさらに大きくなります。

## まとめ

最初に読み込むファイルが少ない、モジュールに分割される小さいファイル、プレースホルダーを使用する、さらにオンデマンドでより多くのコンテンツを読み込む — これは初期読み込み時間を短縮するのに役立ち、アプリ作成者にメリットをもたらし、ユーザーにスムーズなエクスペリエンスを提供します。

プログレッシブエンハンスメントのアプローチを忘れないでください — デバイスやプラットフォームに関係なく使用可能な製品を提供しますが、最新のブラウザーを使用しているユーザーにはエクスペリエンスを豊かなものにするようにしてください。

## 最終的な考え

このチュートリアルのシリーズではこれですべてです — [js13kPWA サンプルアプリのソースコード](https://github.com/mdn/pwa-examples/tree/master/js13kpwa)を調べて、[紹介](/ja/docs/Web/Progressive_web_apps/Introduction)、[PWA の構造](/ja/docs/Web/Progressive_web_apps/App_structure)、[サービスワーカーでのオフライン可用性](/ja/docs/Web/Progressive_web_apps/Offline_Service_workers)、[インストール可能な PWA](/ja/docs/Web/Progressive_web_apps/Installable_PWAs)、そして最後に[通知](/ja/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push)など、プログレッシブウェブアプリ機能の使用方法について学びました。 また、[サービスワーカークックブック](https://github.com/mdn/serviceworker-cookbook/)（英語）の助けを借りてプッシュを説明しました。 そしてこの記事では、[Intersection Observer API](/ja/docs/Web/API/Intersection_Observer_API) を利用した興味深い例を含めて、プログレッシブ読み込みの概念を調べました。

コードを試したり、PWA 機能を使用して既存のアプリを拡張したり、まったく新しいものを自分で作成したりしてください。 PWA は通常のウェブアプリよりも大きな利点をもたらします。

{{PreviousMenu("Web/Progressive_web_apps/Re-engageable_Notifications_Push", "Web/Progressive_web_apps")}}

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}
