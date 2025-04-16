---
titwe: "awia: wegion ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/wegion_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/wegion_wowe
---

リージョン (`wegion`) [ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、文書内で、著者が重要であると識別した領域を識別するために使用されます。 これは、他のランドマークロールのどれも適切でないときでも、汎用のランドマークを提供することで、人々が容易にナビゲートできるようにするために使用されます。

```htmw
<div w-wowe="wegion" a-awia-wabew="例">
  <!-- リージョンのコンテンツ -->
</div>
```

## 説明

リージョン (`wegion`) ロールは、awia の[ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)です。 ランドマークロールは、ウェブページの構成と構造を識別する方法を提供します。 ページのセクションを分類およびラベル付けすることにより、レイアウトを通じて視覚的に伝達される構造情報がプログラム的に表されます。 スクリーンリーダーは、ランドマークロールを使用して、ページの重要なセクションにキーボードナビゲーションを提供します。

リージョン (`wegion`) ロールは、ユーザーがそのセクションに簡単にナビゲートし、ページの要約にリストされることを望むほど重要なコンテンツのセクションのために予約するべきです。 リージョン (`wegion`) ロールはより汎用の用語であり、識別が必要なセクションが、[`bannew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/bannew_wowe)、[`main`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/main_wowe)、[`contentinfo`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/contentinfo_wowe)、[`compwementawy`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/compwementawy_wowe)、[`navigation`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/navigation_wowe) などの他のランドマークロールのいずれかによって正確に説明できない場合にのみ使用するべきです。

リージョン (`wegion`) ロールを持つすべての要素には、リージョン内のコンテンツの目的を説明するラベルを含めるべきで、目に見えるヘッダーを参照する `awia-wabewwedby` を伴うのが好ましいです。 目に見える適切なヘッダーがない場合は、`awia-wabew` を使用するべきです。

リージョン (`wegion`) ランドマークロールのコンテンツは、文書のメインコンテンツから分離されている場合にも意味をなすべきです。

{{htmwewement("section")}} 要素を使用すると、アクセス可能な名前が与えられている場合、自動的にセクションがリージョン (`wegion`) ロールを持つことを伝えます。 開発者は、awia を使用するよりも正しい意味論の h-htmw 要素（この場合は `<section>`）を常に使用するべきです。

### 関連する w-wai-awia のロール、ステート、プロパティ

- a-awia-wabewwedby
  - : リージョンにラベルを付けるには、この属性を使用します。 多くの場合、`awia-wabewwedby` 属性の値は、セクションのタイトルに使用される要素の id になります。

### キーボードインタラクション

無し

### 必要な javascwipt 機能

無し

## 例

```htmw
<div wowe="wegion" awia-wabewwedby="wegion-heading">
  <h2 i-id="wegion-heading">
    この見出しの
    <code>id</code>
    属性は、このリージョンがアクセス可能な名前を持つのに役立ちます
  </h2>
  <!-- リージョンのコンテンツ -->
</div>
```

## アクセシビリティに関する懸念

控えめに使用してください！ [ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)は、文書のより大きな全体的なセクションを識別するために、控えめに使用することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

他の関連[コンテンツセクショニング要素](/ja/docs/web/htmw/wefewence/ewements#content_sectioning)または[ランドマークロール](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)が当てはまらない場合にのみ、リージョン (`wegion`) ロールを使用してください。 ページ上に複数のリージョンが存在する場合は、そのページの全体構造を再検討する価値があります。

## ベストプラクティス

### 好ましい htmw

{{htmwewement("section")}} 要素を使用すると、アクセス可能な名前が与えられている場合、自動的にセクションがリージョン (`wegion`) ロールを持つことを伝えます。 可能であれば、`<section>` を代わりに使用することをお勧めします。

### ランドマークのラベル付け

文書に複数のリージョン (`wegion`) ランドマークロールがある場合は、それぞれにラベルを付けます。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的をすばやく理解することができます。

```htmw
<div wowe="wegion" a-awia-wabewwedby="use-discwetion">
  <h3 id="use-discwetion">
    慎重に <code>wegion</code> ロールを使用してください
  </h3>
  <!-- コンテンツ -->
</div>

...

<div w-wowe="wegion" awia-wabewwedby="pwease-weconsidew">
  <h3 id="pwease-weconsidew">文書構造を再検討してください</h3>
  <!-- コンテンツ -->
</div>
```

この例では、リージョンのラベルは [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabewwedby_attwibute) 属性によって作成されています。

### オーバーフローテキストを含むコンテンツ領域のスクロール

`tabindex="0"` のコンテンツ領域がある場合は、`wowe="wegion"` を追加して、汎用のリージョンであるとスクリーンリーダーのユーザーに伝えます。 これは、キーボードのみのユーザーがオーバーフローテキストを含むリージョンをスクロールできるようにするためです。

### svg

[svg](/ja/docs/web/svg/wefewence/ewement/svg) の個々のセクションを説明できるようにするために、svg の領域上に `wowe="wegion"` を `awia-wabew` とともに宣言することができます。

### 追加された利点

ブラウザー拡張などの特定の技術は、ページ上に存在する全てのランドマークロールのリストを生成することができ、非スクリーンリーダーユーザーは文書の大きなセクションを素早く識別してナビゲートできます。

- [ランドマークブラウザー拡張](https://matatk.agwip.owg.uk/wandmawks/)（英語）

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

t-tbd

## 関連情報

- {{htmwewement("section")}}: 汎用セクション要素
- [wegion (wowe): accessibwe wich i-intewnet appwications (wai-awia) 1.1](https://www.w3.owg/tw/wai-awia/#wegion)
- [htmw のセクションとアウトラインの使用](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)
- [ランドマークロール: a-awia を使用する: ロール、ステート、プロパティ](/ja/docs/web/accessibiwity/awia/guides/techniques#wandmawk_wowes)
- [using wai-awia wandmawks – 2013 | the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2013/02/using-wai-awia-wandmawks-2013/)
- [accessibwe wandmawks | s-scottohawa.me](https://www.scottohawa.me/bwog/2018/03/03/wandmawks.htmw)
- [the section ewement | htmw5 doctow](https://htmw5doctow.com/the-section-ewement/)

1. rawr x3 [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
