---
title: shortcuts
slug: Web/Progressive_web_apps/Manifest/Reference/shortcuts
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

`shortcuts` はマニフェストメンバーで、ウェブアプリケーション内の主要な課題やページへのリンクを指定するために使用します。
ブラウザーは、この情報を使用してコンテキストメニューを作成することができます。コンテキストメニューは通常、ユーザーがウェブアプリケーションのアイコンを操作したときに表示されます。

## 構文

```json-nolint
/* すべてのプロパティを持つ単一のショートカット */
"shortcuts": [
  {
    "name": "Today's agenda",
    "short_name": "Agenda",
    "description": "View your agenda for today",
    "url": "/today",
    "icons": [
      {
        "src": "today.png",
        "sizes": "192x192"
        }
    ]
  }
]

/* 必須のプロパティを持つ 2 つのショートカット */
"shortcuts": [
  {
    "name": "Today's agenda",
    "url": "/today"
  },
  {
    "name": "Tomorrow's agenda",
    "url": "/tomorrow"
  }
]

/* Shortcut with a relative URL */
"shortcuts": [
  {
    "name": "This week's agenda",
    "url": "../agenda"
  }
]
```

### 値

- `shortcuts`
  - : オブジェクトの配列。各オブジェクトは、ウェブアプリの主要な課題またはページを表します。

    各オブジェクトは 1 つ以上のプロパティを持つことができます。このうち、 `name` と `url` のみが必須です。
    利用可能なプロパティは次の通りです。
    - `name`
      - : ショートカットの名前を表す文字列で、コンテキストメニューにユーザーに表示されます。

    - `short_name` {{Optional_Inline}}
      - : ショートカットの名前の短縮版を表す文字列。
        ブラウザーは、完全な名前を表示するのに十分な空間がないコンテキストでこれを使用することがあります。

    - `description` {{Optional_Inline}}
      - : ショートカットの目的を説明する文字列。
        ブラウザーは、この情報を支援技術（スクリーンリーダーなど）に公開することがあります。これにより、ユーザーはショートカットの目的を理解することができます。

    - `url`
      - : 関連付けられたショートカットが起動されたときに開くためのアプリの URL。
        URL はウェブアプリマニフェストの[スコープ](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope)に含まれている必要があります。値が絶対的なものである場合、マニフェストファイルにリンクするページと同じオリジンである必要があります。値が相対的なものである場合、マニフェストファイルの URL に対して解決されます。
        値が絶対的なものである場合、マニフェストファイルにリンクするページと同じオリジンである必要があります。
        値が相対的なものである場合、マニフェストファイルの URL に対して解決されます。

    - [`icons`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/icons) {{Optional_Inline}}
      - : さまざまなコンテキストにおけるショートカットを表すアイコンオブジェクトの配列。
        これは [`icons`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/icons) マニフェストメンバーと同じ形式です。

## 解説

`shortcuts` メンバーを指定すると、ウェブアプリの主要機能に直接アクセスできるようになります。
ショートカットは通常、ウェブアプリのアイコンを右クリックしたり長押ししたりするなど、ユーザーがウェブアプリのアイコンを操作した際にコンテキストメニューとして表示されます。
ユーザーがこのメニューからショートカットを起動すると、ショートカットの `url` で指定されたアドレスにブラウザーが移動します。

ブラウザーは通常、アプリのマニフェストファイルで指定された順序でショートカットを表示します。

> [!NOTE]
> ユーザーに表示するショートカットの表示方法や数は、ブラウザーやオペレーティングシステムの裁量によります。
> 例えば、ブラウザーにホストオペレーティングシステムの慣例や制限と一致させるために、宣言されたショートカットのリストが省略されることがあります。

### ショートカットを追加する利点

ショートカットは、次のような形でユーザーの使い勝手を向上させます。

- ウェブアプリ内で使用されている機能やページに直接ナビゲーションを提供して、使用頻度の高い機能やページに直接ナビゲーションを提供する
- ウェブアプリをよりプラットフォームにネイティブで、ユーザーが慣れ親しんだものにする

例えば、ショートカットを使用して、ソーシャルメディアアプリ内のユーザーのタイムラインに直接リンクしたり、 e コマースのコンテキストでユーザーの最近の注文に素早くアクセスできるように指定したりすることができます。

### ショートカットを追加するベストプラクティス

ウェブアプリのショートカットを作成する際は、次のガイドラインを念頭に置いてください。

- ショートカットの名前は短く、かつユーザーに目的が明確に伝わるように十分な説明を含めるようにしてください。
- ショートカット URL が確実にウェブアプリのスコープにあることを確認してください。
- 視覚的な認識を向上させるために、ショートカット用のアイコンが含まれます。
  異なる端末やコンテキストでも確実に表示品質を保持するために、複数のサイズのアイコンを指定してください。
- ショートカットを、リンク先の機能の関連性と使用頻度に基づいて、重要なものから順に並べます。
- できれば、ショートカットを追加する数を抑えることを推奨します。 掲載されているショートカットの数が多すぎるとユーザーを混乱させるだけでなく、プラットフォームやブラウザーによっては一部が省略されてしまう可能性があります。

## 例

### 課題管理ウェブアプリのショートカットを定義

タスク管理アプリを検討してみてください。この例では、 2 つのショートカットを追加する方法を表示させています。「新しいタスク」のショートカットは、ユーザーを直接タスク作成ページに移動させ、「今日のタスク」のショートカットは、その日に掲載されているタスクリストにすばやくアクセスできるように指定されています。

```json
{
  "name": "TaskPro",
  "short_name": "Tasks",
  "start_url": "/dashboard",
  "display": "standalone",
  "shortcuts": [
    {
      "name": "New Task",
      "short_name": "Add",
      "description": "Quickly add a new task",
      "url": "/tasks/new"
    },
    {
      "name": "Today's Tasks",
      "short_name": "Today",
      "description": "View your tasks for today",
      "url": "/tasks/today"
    }
  ]
}
```

### 相対URLを使用してショートカットアイコンを追加

前回追加した部分を基に、下記コードでは 2 つのショートカットにアイコンを追加し、 3 つ目の追加のショートカットで相対 URL の使用例を示しています。 `../projects` URL は、アプリマニフェストの URL に対して相対的に解決されます。例えば、アプリマニフェストファイルが `/dashboard/manifest.json` に位置している場合、このショートカットは `/projects` に移動します。

```json
{
  "name": "TaskPro",
  "short_name": "Tasks",
  "start_url": "/dashboard",
  "display": "standalone",
  "shortcuts": [
    {
      "name": "New Task",
      "short_name": "Add",
      "description": "Quickly add a new task",
      "url": "/tasks/new",
      "icons": [
        {
          "src": "/images/add.png",
          "sizes": "192x192"
        }
      ]
    },
    {
      "name": "Today's Tasks",
      "short_name": "Today",
      "description": "View your tasks for today",
      "url": "/tasks/today",
      "icons": [
        {
          "src": "/images/calendar.png",
          "sizes": "192x192"
        }
      ]
    },
    {
      "name": "All Projects",
      "short_name": "Projects",
      "description": "View all your projects",
      "url": "../projects"
    }
  ]
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`icons`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/icons) マニフェストメンバー
- [`scope`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/scope) マニフェストメンバー
- [`start_url`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) マニフェストメンバー
- [同一オリジンポリシー](/ja/docs/Web/Security/Defenses/Same-origin_policy)
- PWA で[よくある操作をショートカットとして公開](/ja/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)する方法
