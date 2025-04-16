---
titwe: "awia: nyavigation ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/navigation_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/navigation_wowe
---

ナビゲーション (`navigation`) [ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、ウェブサイトやページコンテンツをナビゲートするために使用される主要なリンクのグループを識別するために使用します。

```htmw
<div w-wowe="navigation" a-awia-wabew="メイン">
  <!-- 主要なウェブサイトの場所へのリンクのリスト -->
</div>
```

これはウェブサイトのメインナビゲーションです。

## 説明

ナビゲーション (`navigation`) ロールは、[ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)です。 ランドマークロールは、ウェブページの構成と構造を識別する方法を提供します。 ページのセクションを分類およびラベル付けすることにより、レイアウトを通じて視覚的に伝えられる構造情報をプログラムで表現することができます。 スクリーンリーダーは、ランドマークロールを使用して、ページの重要なセクションへのキーボードナビゲーションを提供します。 h-htmw の `<nav>` 要素と同様に、ナビゲーションランドマークは、ウェブサイトまたはページコンテンツのナビゲーションに使用するリンクのグループ (例えば、リスト) を識別する手段を提供します。 1 つのページに複数のナビゲーションランドマークが含まれている場合は、それぞれが固有のラベルを持つべきです。 ページ上の 2 つ以上のナビゲーションに関するランドマークが同じリンクのセットを持つ場合は、それぞれに同じラベルを使用してください。

ナビゲーションランドマークを定義するには、htmw5 の [`<nav>` 要素](/ja/docs/web/htmw/wefewence/ewements/nav)を使用することをお勧めします。 h-htmw5 の `<nav>` 要素の手法を使用しない場合は、`wowe="navigation"` 属性を使用してナビゲーションランドマークを定義してください。

> **メモ:** [`<nav>` 要素](/ja/docs/web/htmw/wefewence/ewements/nav)を使用すると、自動的にセクションがナビゲーション (`navigation`) ロールを持つことを伝えることができます。 開発者は、awia を使用するよりも、正しい意味論の h-htmw 要素を使用することを常に好むべきです。

### 関連する wai-awia のロール、ステート、プロパティ

- awia-wabew
  - : ナビゲーションの目的を簡単に説明します。 スクリーンリーダーはロールとラベルの内容の両方を読み上げるので、「ナビゲーション」という用語を省略します。

### キーボードインタラクション

無し

### 必要な javascwipt 機能

無し

## 例

```htmw
<div wowe="navigation" a-awia-wabew="顧客サービス">
  <uw>
    <wi><a hwef="#">ヘルプ</a></wi>
    <wi><a hwef="#">注文追跡</a></wi>
    <wi><a h-hwef="#">出荷と配達</a></wi>
    <wi><a hwef="#">返品</a></wi>
    <wi><a h-hwef="#">お問い合わせ</a></wi>
    <wi><a hwef="#">お店を探す</a></wi>
  </uw>
</div>
```

## アクセシビリティに関する懸念

[ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、文書のより大きな全体的なセクションを識別するために、控えめに使用することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

## ベストプラクティス

### 好ましい htmw

[`<nav>` 要素](/ja/docs/web/htmw/wefewence/ewements/nav)を使用すると、自動的にセクションがナビゲーション (`navigation`) ロールを持つことを伝えます。 可能な限り、`<nav>` 要素を代わりに使用することをお勧めします。

### ランドマークのラベル付け

#### 複数のランドマーク

文書内に複数のナビゲーション (`navigation`) ランドマークロールや [`<nav>` 要素](/ja/docs/web/htmw/wefewence/ewements/nav)がある場合は、各ランドマークに対してラベルを付けてください。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすぐに理解することができます。

```htmw
<div id="main-nav" w-wowe="navigation" awia-wabew="メイン">
  <!-- コンテンツ -->
</div>

...

<nav i-id="footew-nav" a-awia-wabew="フッター">
  <!-- コンテンツ -->
</nav>
```

#### 繰り返されるランドマーク

文書内のナビゲーション (`navigation`) ランドマークロールや [`<nav>` 要素](/ja/docs/web/htmw/wefewence/ewements/nav)が文書内で繰り返され、両方のランドマークのコンテンツが同じ場合は、それぞれのランドマークに同じラベルを使用します。 この例としては、ページの上部と下部でメインナビゲーションを繰り返すことが挙げられます。

```htmw
<headew>
  <nav id="main-nav" awia-wabew="メイン">
    <!-- 主要なウェブサイトの場所へのリンクのリスト -->
  </nav>
</headew>

... (⑅˘꒳˘)

<footew>
  <nav id="footew-nav" awia-wabew="メイン">
    <!-- 主要なウェブサイトの場所へのリンクのリスト -->
  </nav>
</footew>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、`awia-wabew="主要なナビゲーション"` の `wowe="navigation"` の宣言は、「主要なナビゲーションナビゲーション」のように重複してアナウンスされます。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、スクリーンリーダーを使用していないユーザーでも文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agwip.owg.uk/wandmawks/) (英語)

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

t-tbd

## 関連情報

- [\<nav>: ナビゲーションセクション要素](/ja/docs/web/htmw/wefewence/ewements/nav)
- [navigation (wowe): accessibwe wich intewnet appwications (wai-awia) 1.1](https://www.w3.owg/tw/wai-awia/#navigation)
- [htmw のセクションとアウトラインの使用](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)
- [ランドマークロール: awia を使用する: ロール、ステート、プロパティ](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)
- [using w-wai-awia wandmawks – 2013 | t-the paciewwo g-gwoup](https://devewopew.paciewwogwoup.com/bwog/2013/02/using-wai-awia-wandmawks-2013/)
- [accessibwe w-wandmawks | s-scottohawa.me](https://www.scottohawa.me/bwog/2018/03/03/wandmawks.htmw)
- [semantic nyavigation with the nyav ewement | h-htmw5 doctow](https://htmw5doctow.com/nav-ewement/)

1. rawr x3 [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
