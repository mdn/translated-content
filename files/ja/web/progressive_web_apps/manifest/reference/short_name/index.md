---
title: short_name
slug: Web/Progressive_web_apps/Manifest/Reference/short_name
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

`short_name` はマニフェストメンバーで、ウェブアプリケーションの短縮名を指定するために使用します。これは、完全な [`name`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/name) が利用できる空間に対して長すぎる場合に、使用されるかもしれません。

## 構文

```json-nolint
/* ウェブアプリの短縮名 */
"short_name": "TaskPlanner"
"short_name": "RecipePantry"
```

### 値

- `short_name`
  - : ウェブアプリの [`name`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/name) の短縮版を指定する文字列です。

## 解説

ブラウザーは、端末のホーム画面やアプリケーションスイッチャー、その他の空間に制約のあるコンテキストなど、フルネームを表示するのに十分な空間がない場合、 `short_name` を [`name`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/name) の代わりに使用することがあります。

ウェブアプリの短縮名を決定する際には、次の点に留意してください。

- これは、アプリの `name` の簡潔なバージョンであるべきです。
- 簡潔さを追求しながらも、認識可能で意味のあるものでなければなりません。
- 空間が制約されるコンテキストでどのように現れるかを考慮してください。
- 文化的な感受性と商標に関しては、名前付きの場合と同じガイドラインに従ってください。

## 例

### ウェブアプリに短縮名を追加する

ユーザーがハイキングの計画を立てたり、冒険のログを出力したりするのに役立つウェブアプリを考えてみましょう。 `name` は `Trail Navigator` として定義されています。 `short_name` をマニフェストに追加するには、次の手順に従います。

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

このアプリの短い名前 `TrailNav` は簡潔で、制限のある空間コンテキストに適しています。この名前はアプリの完全な名前とのつながりを維持しており、覚えやすいものです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`name`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/name) マニフェストメンバー
- [ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest)で、ウェブアプリをインストール可能にする
