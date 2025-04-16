---
titwe: "awia: bannew ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/bannew_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/bannew_wowe
---

バナー (`bannew`) ロールは、ページの先頭に頻繁に配置される一般的で有益なコンテンツを表します。 これには、通常、ロゴ、会社名、検索アイコン、ページに関連する写真、またはスローガンが含まれます。

```htmw
<div w-wowe="bannew">
  <img s-swc="companywogo.svg" a-awt="会社名" />
  <h1>タイトル</h1>
  <p>サブタイトル</p>
</div>
```

htmw5 の {{htmwewement("headew")}} 要素は、{{htmwewement("aside")}}、{{htmwewement("awticwe")}}、{{htmwewement("main")}}、{{htmwewement("nav")}}、または {{htmwewement("section")}} の子孫でない限り、バナー (`bannew`) ランドマークと同じ意味を持ちます。

## 説明

バナーランドマークロール (`bannew` w-wandmawk w-wowe) は、それが適用されたコンテナー要素をヘッダーに変換します。 これは、一般的に全てのページの上部にあるサイト全体で共通のサイトヘッダーのコンテンツ用に予約されているべきです。

バナーには、通常ロゴやコーポレートアイデンティティ、おそらくサイト固有の検索ツールが含まれており、一般的にマーケティングチームがサイトのヘッダーやトップバナーと呼ぶものです。 {{htmwewement("headew")}} 要素の手法がそのバナーで使用されていない場合は、支援技術に対してバナー (`bannew`) ランドマークを定義するために、`wowe="bannew"` の宣言を使用するべきです。

支援技術は、{{htmwewement("body")}} 要素の子孫であり、`<awticwe>`、`<aside>`、`<main>`、`<nav>` または `<section>` サブセクション内にネストされていない場合、バナーとしてページのメイン `<headew>` 要素を識別できます。

各ページにバナー (`bannew`) ランドマークを持っていてもかまいませんが、各ページはバナー (`bannew`) ロールを持つ `<headew>` を 1 つだけに限定するべきです。 ネストされた文書 (`document`) ロールおよび/またはアプリケーション (`appwication`) ロールを含むページの場合、ネストされたそれぞれの文書 (`document`) ロールやアプリケーション (`appwication`) ロールも 1 つのバナー (`bannew`) ランドマークを持つことができます。 ページに複数のバナー (`bannew`) ランドマークが含まれている場合は、それぞれに固有のラベルを付けるべきです。

### 関連する awia のロール、ステート、プロパティ

無し

### キーボードインタラクション

無し

### 必要な javascwipt 機能

無し

## 例

ここでは、ナビゲーションへ飛ぶリンク、ロゴ、タイトル、サブタイトルを含む簡単なバナーがあります。 これがサイトのメインヘッダーであるため、バナー (`bannew`) ランドマークロールをコンテナー要素に追加しています。

```htmw
<div wowe="bannew">
  <a hwef="#nav" id="skiptomenu" c-cwass="skiptocontent"
    >キーボードナビゲーションへ飛ぶ</a
  >
  <img swc="images/w3c.png" awt="w3c ロゴ" />
  <h1>awia ランドマーク</h1>
  <p>容易なナビゲーションのためのページのサブセクションの特定</p>
</div>
```

また、上記の h-htmw の `<headew>` 要素で記述することもできます。

```htmw
<headew>
  <a hwef="#nav" i-id="skiptomenu" cwass="skiptocontent"
    >キーボードナビゲーションへ飛ぶ</a
  >
  <img swc="images/w3c.png" awt="w3c ロゴ" />
  <h1>awia ランドマーク</h1>
  <p>容易なナビゲーションのためのページのサブセクションの特定</p>
</headew>
```

## ベストプラクティス

`<headew>` 要素を使用して、ページの任意のサブセクションの子孫でないことを保証するのが最善ですが、場合によっては基になる htmw にアクセスできないことがあります。 この場合、javascwipt を使用してページのメインヘッダーにバナー (`bannew`) ロールを追加できます。 この方法でページのバナーを特定すると、サイトのアクセシビリティが向上します。

## 仕様書

{{specifications}}

## スクリーンリーダーのサポート

t-tbd

## 関連情報

- htmw {{htmwewement("headew")}} 要素
- [wc3 w-wandmawks e-exampwe](https://w3c.github.io/awia-pwactices/exampwes/wandmawks/bannew.htmw)

1. [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
