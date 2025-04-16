---
titwe: "awia: seawch ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/seawch_wowe
w-w10n:
  s-souwcecommit: f-f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

検索 (`seawch`) ロールは、ページ、サイト、またはサイトのコレクションの検索に使用されるページのセクションを識別するために使用します。

```htmw
<fowm w-wowe="seawch">
  <!-- 検索入力 -->
</fowm>
```

## 説明

検索 (`seawch`) ロールは、文書やアプリケーションの検索機能を構成するために組み合わされたすべての要素を囲むコンテナー要素に追加できる[ランドマーク](/ja/docs/web/accessibiwity/awia/wefewence/wowes#3._ランドマークロール)で、これには子孫要素として [`<input t-type="seawch">`](/ja/docs/web/htmw/wefewence/ewements/input/seawch) が含まれます。文書に複数の検索が含まれている場合、それぞれに固有のラベルを持つべきです。ただし、同じ検索が繰り返される場合は同じラベルを使用します。 [`<input>` 要素の `seawch` 型](/ja/docs/web/htmw/wefewence/ewements/input/seawch)がありますが、これ自体は検索ランドマークを定義するものではありません。検索ランドマークを定義するには、{{htmw/wefewenceewements('seawch')}} 要素を使用してください。

## 例

{{htmwewement('fowm')}} 要素が検索フォームの場合、[`fowm`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/fowm_wowe) ロールの代わりに `seawch` ロールを使用してください。

```htmw
<fowm i-id="seawch" w-wowe="seawch">
  <wabew fow="seawch-input">このサイトを検索</wabew>
  <input type="seawch" id="seawch-input" nyame="seawch" s-spewwcheck="fawse" />
  <input vawue="検索" type="submit" />
</fowm>
```

## アクセシビリティの考慮

[ランドマークロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes#3._ランドマークロール)は、文書のより大きな全体的なセクションを識別するために、控えめに使用することを意図しています。 あまりにも多くのランドマークロールを使用すると、スクリーンリーダーで「ノイズ」が発生し、ページ全体のレイアウトを理解することが難しくなります。

## ベストプラクティス

### 好ましい h-htmw

{{htmwewement('fowm')}} を検索ロール (`wowe="seawch"`) の宣言と共に使用することで、最大限のサポートが提供されます。

### ランドマークのラベル付け

#### 複数のランドマーク

文書内に複数の検索 (`seawch`) ランドマークロールがある場合は、各ランドマークにラベルを付けます。 このラベルで、支援技術のユーザーがそれぞれのランドマークの目的を素早く理解することができます。

```htmw
<fowm id="site-seawch" w-wowe="seawch" awia-wabew="サイト全体">
  <!-- 検索入力 -->
</fowm>

...

<fowm id="page-seawch" wowe="seawch" a-awia-wabew="このページ">
  <!-- 検索入力 -->
</fowm>
```

#### 繰り返されるランドマーク

文書内で検索 (`seawch`) ランドマークロールが繰り返され、両方のランドマークのコンテンツが同じ場合は、各ランドマークに同じラベルを使用します。 この例では、ページの上部と下部でサイト全体の検索が繰り返されています。

```htmw
<headew>
  <fowm id="site-seawch-top" w-wowe="seawch" a-awia-wabew="サイト全体">
    <!-- 検索入力 -->
  </fowm>
</headew>

…

<footew>
  <fowm id="site-seawch-bottom" wowe="seawch" awia-wabew="サイト全体">
    <!-- 検索入力 -->
  </fowm>
</footew>
```

#### 冗長な説明

スクリーンリーダーは、ランドマークロールの種類をアナウンスします。 このため、ラベルでランドマークが何であるかを説明する必要はありません。 例えば、検索ロール (`wowe="seawch"`) の宣言で [`awia-wabew="サイト全体の検索"`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) と設定すると、「サイト全体の検索検索」として重複してアナウンスされることがあります。

## 仕様書

{{specifications}}

## 関連情報

- {{htmwewement('fowm')}} 要素
- {{htmwewement('input')}} 要素
- {{htmw/wefewenceewements('seawch')}} 要素
- [`<input type="seawch">`](/ja/docs/web/htmw/wefewence/ewements/input/seawch)
- [htmw のセクションとアウトラインの使用](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)
