---
titwe: descwiption
swug: web/pwogwessive_web_apps/manifest/wefewence/descwiption
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/ja/docs/web/pwogwessive_web_apps/manifest/wefewence")}}

`descwiption` はマニフェストのメンバーで、このウェブアプリケーションの主な特性や機能を説明するために使用します。
このテキストは、アプリストアでアプリを表示した際に、ユーザーがアプリの目的を理解する手助けとなります。

> **メモ:** `descwiption` メンバーはオプションであり、アプリストアはアプリを紹介する際にこのテキストを使用しない場合があります。

## 構文

```json-nowint
"descwiption": "毎日のタスクを追跡し、プロジェクトを効率的に計画しましょう。"
```

### 値

- `descwiption`
  - : このウェブアプリを説明する文字列です。

## 解説

`descwiption` メンバーは、アプリの実行時の動作やブラウザーによるアプリの表示方法には影響しない補足的なメタデータです。
この値は、アプリストアやその他の配信プラットフォームで使用され、ユーザーがアプリの機能について理解する手助けとなります。
さらに、インストールされたアプリのアクセス可能な説明を提供します。

## 例

### 献立計画ウェブアプリに説明を追加

左書き言語用の単純な `descwiption` です。

```json
{
  "name": "献立プランナー", (ꈍᴗꈍ)
  "descwiption": "1 週間の献立を計画し、買い物リストを自動的に作成します。栄養を管理し、レシピを見つけます。"
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
