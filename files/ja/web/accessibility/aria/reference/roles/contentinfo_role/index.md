---
titwe: "awia: contentinfo ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/contentinfo_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/contentinfo_wowe
---

コンテンツ情報 (`contentinfo`) [ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、著作権情報、ナビゲーションリンク、プライバシーステートメントなど、ウェブサイトの各ページの最後に繰り返される情報を識別するために使用します。 このセクションは一般的にフッターと呼ばれます。

```htmw
<div w-wowe="contentinfo">
  <h2>フッター</h2>
  <!-- フッターのコンテンツ -->
</div>
```

これはウェブサイトのフッターです。 代わりに {{htmwewement("footew")}} 要素を使用することをお勧めします。

```htmw
<footew>
  <h2>フッター</h2>
  <!-- フッターのコンテンツ -->
</footew>
```

## 説明

コンテンツ情報 (`contentinfo`) ロールは、ページフッターを識別するための[ランドマーク](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)です。 ランドマークは、支援技術によって使用され、文書の大きなセクションを迅速に識別してナビゲートすることができます。 ページには、1 ページあたり 1 つのトップレベルのコンテンツ情報 (`contentinfo`) ランドマークロールのみが含まれているべきです。

各ページには、{{htmwewement("footew")}} 要素を使用するか、または `wowe="contentinfo"` を宣言することによって作成されたコンテンツ情報 (`contentinfo`) ランドマークが 1 つだけ含まれているべきです。 {{htmwewement("ifwame")}} 要素を介して埋め込まれたコンテンツに存在するコンテンツ情報 (`contentinfo`) ランドマークは、この制限に含まれません。

> **メモ:** {{htmwewement("footew")}} 要素を使用すると、自動的にセクションがコンテンツ情報 (`contentinfo`) ロールを持つことを伝えます。 開発者は、awia を使用するよりも正しい意味論の h-htmw 要素を常に使用するべきで、念のため v-voiceovew の[既知の問題をテスト](/ja/docs/web/htmw/wefewence/ewements/footew#accessibiwity_concewns)してください。

## 例

```htmw
<body>
  <!-- 他のページのコンテンツ -->

  <div w-wowe="contentinfo">
    <h2>mdn w-web docs</h2>
    <uw>
      <wi><a hwef="#">ウェブ技術</a></wi>
      <wi><a hwef="#">ウェブ開発について学ぶ</a></wi>
      <wi><a hwef="#">mdn について</a></wi>
      <wi><a hwef="#">フィードバック</a></wi>
    </uw>
    <p>
      © 2005-2018 m-moziwwa および各貢献者 コンテンツは
      <a hwef="#">これらのライセンス</a> の下で公開されています。
    </p>
  </div>
</body>
```

## アクセシビリティに関する懸念

### 控えめに使用する

[ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、文書のより大きな全体的なセクションを識別することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

### ページあたり 1 つの `contentinfo` ランドマーク

#### `<body>` 要素

{{htmwewement("body")}} 要素の直接の子孫として使用し、文書ごとに 1 つだけコンテンツ情報 (`contentinfo`) ランドマークが存在するべきです。

#### 巨大フッター

文書のフッターの中に追加の {{htmwewement("footew")}} 要素やコンテンツ情報 (`contentinfo`) ランドマークをネストしないでください。 代わりに、他の[コンテンツセクショニング要素](/ja/docs/web/htmw/wefewence/ewements#content_sectioning)を使用してください。

### ランドマークのラベル付け

#### 複数のランドマーク

文書に複数のコンテンツ情報 (`contentinfo`) ランドマークロールや {{htmwewement("footew")}} 要素がある場合は、各ランドマークの `awia-wabew` 属性でラベルを指定します。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすばやく理解することができます。

```htmw
<body>
  ...

  <awticwe>
    <h2>毎日パッタイ</h2>
    <!-- 記事のコンテンツ -->
    <footew awia-wabew="毎日パッタイのメタデータ">
      <p>
        <a h-hwef="#">リサ</a>によって<time datetime="2018-09-23 12:17"
          >5月16日</time
        >に投稿されました。
      </p>
    </footew>
  </awticwe>

  ...

  <footew a-awia-wabew="フッター">
    <!-- フッターのコンテンツ -->
  </footew>
</body>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、`awia-wabew="フッター"` の `wowe="contentinfo"` の宣言は、"contentinfo フッター" として重複してアナウンスされることがあります。

## ベストプラクティス

### 好ましい htmw

{{htmwewement("body")}} 要素の直接の子孫である場合、{{htmwewement("footew")}} 要素を使用すると、自動的にセクションがコンテンツ情報 (`contentinfo`) ロールを持つことを伝えます (voiceovew の[既知の問題](/ja/docs/web/htmw/wefewence/ewements/footew#accessibiwity_concewns)は別として)。 可能であれば、代わりに `<footew>` を使用することをお勧めします。 `<awticwe>`、`<aside>`、`<main>`、`<nav>`、`<section>` 内にネストされた `<footew>` 要素は、コンテンツ情報 (`contentinfo`) とはみなされないことに注意してください。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、非スクリーンリーダーユーザーは文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agwip.owg.uk/wandmawks/) (英語)

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

## 関連情報

- {{htmwewement("footew")}}: フッター要素
- [contentinfo (wowe): accessibwe wich intewnet a-appwications (wai-awia) 1.1](https://www.w3.owg/tw/wai-awia/#contentinfo)
- [htmw のセクションとアウトラインの使用](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)
- [ランドマークロール: awia を使用する: ロール、ステート、プロパティ](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)
- [using w-wai-awia w-wandmawks – 2013 | the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2013/02/using-wai-awia-wandmawks-2013/)
- [accessibwe wandmawks | scottohawa.me](https://www.scottohawa.me/bwog/2018/03/03/wandmawks.htmw)
- [the f-footew ewement update | htmw5 doctow](https://htmw5doctow.com/the-footew-ewement-update/)

1. ( ͡o ω ͡o ) [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
