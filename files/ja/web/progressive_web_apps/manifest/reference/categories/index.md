---
title: categories
slug: Web/Progressive_web_apps/Manifest/Reference/categories
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

`categories` はマニフェストのメンバーで、ウェブアプリケーションに 1 つ以上の分類を指定することができます。
これらのカテゴリーは、ユーザーがアプリストアでアプリを見つけるのに役立ちます。

> [!NOTE]
> `categories` メンバーはオプションであり、アプリストアはアプリを表示する際に異なる値を使用することがあります。

## 構文

```json-nolint
/* 単一のカテゴリー */
"categories": ["productivity"]

/* 複数のカテゴリー */
"categories": ["productivity", "utilities", "social"]
```

### 値

- `categories`
  - : カンマで区切られた文字列の配列で、各文字列がカテゴリー名を表します。
    文字列は小文字でなければなりません。
    W3C は[標準化されたカテゴリーの一覧](https://github.com/w3c/manifest/wiki/Categories)（英語）を保守しており、有名な値には `business`, `education`, `entertainment`, `finance`, `games`, `productivity` などがあります。

## 解説

`categories` メンバーは、アプリの実行時動作やブラウザーによるアプリの表示方法に影響を与えない補助的なメタデータです。
その値は、アプリストアやその他の配信プラットフォームでのみ使用され、ブラウザーやインストールされたアプリを使用するユーザーには表示されません。

アプリが複数の目的に使える場合、関連するカテゴリーを複数指定することで、アプリストアの異なるセクションでユーザーがアプリを見つけやすくなります。

`categories` が指定されていない場合、または指定された値が使用されていない場合、アプリストアは独自の分類システムに基づいてウェブアプリを分類します。

以下の Apple App Store の画像は、アプリストアのさまざまな部分にカテゴリーがどのように表示されるかを示しています。
アプリの概要では、"CHART" フィールド（丸印）にカテゴリーが表示され、そのカテゴリーにおけるアプリのランキングも表示されます。また、情報セクションでは、「カテゴリー」が専用のフィールド（丸印）として表示されます。

- BBC アプリは "News" カテゴリーに分類されています。

  <div style="display: flex; justify-content: center;">
    <img src="bbc.jpeg" alt="BBC app overview in Apple App Store. CHART field is circled in red to show News category.">
    <img src="bbc-info.jpeg" alt="BBC app Information section with the Category field circled in red showing News.">
  </div>

- The Weather Channel アプリは "Weather" カテゴリーに属します。

  <div style="display: flex; justify-content: center;">
    <img src="weather.jpeg" alt="Weather app overview in Apple App Store. CHART field is circled in red to show Weather category">
    <img src="weather-info.jpeg" alt="Weather app Information section with the Category field circled in red showing Weather">
  </div>

## 例

### 献立計画ウェブアプリのカテゴリー分類

この例では、利用可能な食材に基づいて食事を計画するためのウェブアプリのカテゴリー分け方法を示しています。

```json
{
  "name": "Meal Planner",
  "categories": ["food", "health", "lifestyle"]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

`categories` マニフェストメンバーは、アプリストアがウェブアプリを公開したりリスト化したりする際に使用されるため、ブラウザーの互換性は適用されません。
ブラウザーは、このメンバーを解析することがありますが、これはオプションであり、アプリの機能や表示には影響しません。
