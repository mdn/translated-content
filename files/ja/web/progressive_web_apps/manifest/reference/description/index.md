---
title: description
slug: Web/Progressive_web_apps/Manifest/Reference/description
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/Manifest/Reference")}}

`description` はマニフェストのメンバーで、このウェブアプリケーションの主な特性や機能を説明するために使用します。
このテキストは、アプリストアでアプリを表示した際に、ユーザーがアプリの目的を理解する手助けとなります。

> **メモ:** `description` メンバーはオプションであり、アプリストアはアプリを紹介する際にこのテキストを使用しない場合があります。

## 構文

```json-nolint
"description": "毎日のタスクを追跡し、プロジェクトを効率的に計画しましょう。"
```

### 値

- `description`
  - : このウェブアプリを説明する文字列です。

## 解説

`description` メンバーは、アプリの実行時の動作やブラウザによるアプリの表示方法には影響しない補足的なメタデータです。
この値は、アプリストアやその他の配信プラットフォームで使用され、ユーザーがアプリの機能について理解する手助けとなります。
さらに、インストールされたアプリのアクセス可能な説明を提供します。

## 例

### 献立計画ウェブアプリに説明を追加

左書き言語用の単純な `description` です。

```json
{
  "name": "献立プランナー",
  "description": "1 週間の献立を計画し、買い物リストを自動的に作成します。栄養を管理し、レシピを見つけます。"
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
