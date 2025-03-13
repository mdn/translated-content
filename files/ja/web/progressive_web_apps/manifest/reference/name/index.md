---
title: name
slug: Web/Progressive_web_apps/Manifest/Reference/name
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/Manifest/Reference")}}

`name` はマニフェストのメンバーで、ウェブアプリケーションのフルネームを指定するために使用します。これは通常、アプリケーションの一覧に掲載されている場合や、アプリケーションのアイコンのラベルとして表示される場合など、ユーザーに表示されます。

## 構文

```json-nolint
/* ウェブアプリのフルネーム */
"name": "Daily Task Planner"
"name": "Recipe and Pantry Tracker"
```

### 値

- `name`
  - : ウェブアプリのフルネームを指定する文字列です。

## 解説

`name` マニフェストメンバーは、インストールされたアプリケーションの{{Glossary("Accessible_name", "アクセシブル名")}}として使用されます。この名前は、他にもインストールされているウェブアプリケーションのリスト、アプリケーションアイコンのラベル付け、アプリケーションスイッチャーやタスクマネージャーなど、さまざまな場面でユーザーに表示されます。

端末のホーム画面やアプリケーションスイッチャーなど、フルネームが収まらないスペース制約のあるコンテキストでは、 [`short_name`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/short_name) プロパティの値が（定義されている場合は）代わりに使用されることがあります。

### ウェブアプリの名前付けについての最善の手法

ウェブアプリの名前を選択する際には、次の要素を考慮してください。

- 名前の長さ、特に個別に `short_name` を指定していない場合
- アプリの目的や性質をどれだけよく示しているか
- 明快で理解しやすく、覚えやすいかどうか
- アプリのリストやホーム画面など、さまざまな場面でどのように現れるか
- 他の類似したアプリと簡単に区別できること
- ターゲットとする利用者層に対する文化的感受性と適切性
- グローバルなユーザーを対象とするアプリの場合、さまざまな言語にどれだけうまく対応させられるか、または認識されるか
- 商標の侵害の可能性

## 例

### ウェブアプリに名前を追加する

ユーザーがトレイルをナビゲートしたり、ハイキングの計画を立てたりするのに役立つウェブアプリの場合、次の名前付きマニフェストをアプリに追加するとよいでしょう。

```json
"name": "Trail Navigator"
```

アプリの名前 `Trail Navigator` は、アプリの目的を効果的に説明しており、読みやすく覚えやすいので、幅広いユーザーに理解される可能性が高いです。このアプリは、アウトドア愛好家がすぐに理解できるような馴染みのある用語を使用しています。

必要に応じて、 `short_name` を追加することもできます。

```json
"name": "Trail Navigator",
"short_name": "TrailNav"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`short_name`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/short_name) マニフェストメンバー
- [ウェブアプリマニフェスト](/ja/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest)で、ウェブアプリをインストール可能にする
