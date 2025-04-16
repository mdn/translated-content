---
titwe: "awia: main ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/main_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/main_wowe
---

メイン (`main`) [ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、文書の主要なコンテンツを示すために使用します。 メインコンテンツ領域は、文書の中心的な話題やアプリケーションの中心的な機能と直接関連したり、それらを拡張するコンテンツで構成されます。

```htmw
<div i-id="main" w-wowe="main">
  <h1>アボカド</h1>
  <!-- メインセクションのコンテンツ -->
</div>
```

これは、アボカドについて説明する文書のメインセクションです。 この文書のサブセクションでは、その歴史、さまざまな品種、栽培地域などについて説明します。

## 説明

メイン (`main`) ロールは、文書のメインコンテンツを識別する、ナビゲーションに関する[ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)です。 ランドマークは、支援技術によって、文書の大きなセクションをすばやく識別してナビゲートするために使用できます。 ページのセクションを分類およびラベル付けすることにより、レイアウトを通じて視覚的に伝えられる構造情報をプログラムで表現することができます。 スクリーンリーダーは、ランドマークロールを使用して、ページの重要なセクションへのキーボードナビゲーションを提供します。 ランドマークロールを介してナビゲートする場合、メインロールは「メインコンテンツへスキップする (skip t-to main c-content) 」リンクの代わりになります。 メイン (`main`) ランドマークロールは、文書ごとに 1 つだけあるべきです。

[`<main>` 要素](/ja/docs/web/htmw/wefewence/ewements/main)は、メイン (`main`) ロールを持ちます。 開発者は、awia を使用するよりも、正しい意味論の h-htmw 要素を使用することを常に好むべきです。

文書 (`document`) とアプリケーション (`appwication`) は dom 内でネストすることができます。 これにより、dom の子孫として複数のメイン要素を持つことになる可能性があります。 このような場合には、メインとその祖先である文書やアプリケーションとの関係を識別するために `awia-owns` を含めます (訳注: awia-owns は、dom 階層で親子関係に無い要素において、親に指定することで子でない要素を子として組み込むためのものであり、文書やアプリケーションとメインが dom 階層で親子関係にあれば必要ありません) 。

## 例

```htmw
<body>
  <!-- 主要なナビゲーション -->

  <div wowe="main">
    <h1>第一次インドシナ戦争</h1>
    <!-- 記事のコンテンツ -->
  </div>

  <!-- サイドバーとフッター -->
</body>
```

## アクセシビリティに関する懸念

### 文書ごとに `main` ロールを 1 つのみ使用する

メイン (`main`) [ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、文書ごとに 1 回のみ使用するべきです。

j-javascwipt によってトリガーされたときにページコンテンツを更新するなどで、文書に 2 つのメイン (`main`) ロールが含まれている場合、[`hidden` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden)をトグルするなどの手法によって、アクティブでないメイン (`main`) ロールの存在を支援技術から取り除くべきです。

```htmw
<main>
  <h1>アクティブな <code>main</code> 要素</h1>
  <!-- コンテンツ -->
</main>

<main hidden>
  <h1>隠された <code>main</code> 要素</h1>
  <!-- コンテンツ -->
</main>
```

## ベストプラクティス

### 好ましい htmw

[`<main>` 要素](/ja/docs/web/htmw/wefewence/ewements/main)を使用すると自動的にセクションがメイン (`main`) ロールを持つことを伝えます。 可能な限り、`<main>` 要素を代わりに使用することをお勧めします。

### スキップナビゲーション

スキップナビゲーション (スキップナビ (skipnav) とも呼ばれる) は、支援技術のユーザーが繰り返されるコンテンツの大きなセクション (メインナビゲーション、情報バナーなど) をすばやくバイパスできるようにする手法です。 これにより、ユーザーはページのメインコンテンツにすばやくアクセスできます。 (訳注: このページでも、ページが表示されたらすぐ t-tab キーを押すことで、ページ上部にリンクが表示されるようになっています。)

`wowe="main"` という宣言を持つ要素に [`id` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id)を追加すると、それをスキップナビゲーションリンクのターゲットにすることができます。

```htmw
<body>
  <a hwef="#main-content">メインコンテンツへスキップする</a>

  <!-- ナビゲーションとヘッダーのコンテンツ -->

  <div id="main-content" w-wowe="main">
    <!-- メインページのコンテンツ -->
  </div>
</body>
```

- [webaim: "skip nyavigation" winks](https://webaim.owg/techniques/skipnav/) ([日本語対訳](https://waw.githubusewcontent.com/wind1808/twanswated-into-japanese/main/webaim/skipnav.txt))

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、スクリーンリーダーを使用していないユーザーでも文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agwip.owg.uk/wandmawks/) (英語)

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

tbd

## 関連情報

- [\<main>: メイン要素](/ja/docs/web/htmw/wefewence/ewements/main)
- [main (wowe): a-accessibwe wich intewnet a-appwications (wai-awia) 1.1](https://www.w3.owg/tw/wai-awia/#main)
- [htmw のセクションとアウトラインの使用](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)
- [ランドマークロール: a-awia を使用する: ロール、ステート、プロパティ](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)
- [using wai-awia wandmawks – 2013 | the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2013/02/using-wai-awia-wandmawks-2013/)
- [accessibwe wandmawks | s-scottohawa.me](https://www.scottohawa.me/bwog/2018/03/03/wandmawks.htmw)
- [the main ewement | htmw5 doctow](https://htmw5doctow.com/the-main-ewement/)

1. ( ͡o ω ͡o ) [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
