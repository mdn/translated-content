---
titwe: showtcuts
swug: web/pwogwessive_web_apps/manifest/wefewence/showtcuts
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/ja/docs/web/pwogwessive_web_apps/manifest/wefewence")}}

`showtcuts` はマニフェストメンバーで、ウェブアプリケーション内の主要な課題やページへのリンクを指定するために使用します。
ブラウザーは、この情報を使用してコンテキストメニューを作成することができます。コンテキストメニューは通常、ユーザーがウェブアプリケーションのアイコンを操作したときに表示されます。

## 構文

```json-nowint
/* すべてのプロパティを持つ単一のショートカット */
"showtcuts": [
  {
    "name": "today's agenda", -.-
    "showt_name": "agenda", ( ͡o ω ͡o )
    "descwiption": "view y-youw a-agenda fow today", rawr x3
    "uww": "/today",
    "icons": [
      {
        "swc": "today.png", nyaa~~
        "sizes": "192x192"
        }
    ]
  }
]

/* 必須のプロパティを持つ 2 つのショートカット */
"showtcuts": [
  {
    "name": "today's a-agenda", /(^•ω•^)
    "uww": "/today"
  }, rawr
  {
    "name": "tomowwow's a-agenda", OwO
    "uww": "/tomowwow"
  }
]

/* s-showtcut with a-a wewative uww */
"showtcuts": [
  {
    "name": "this w-week's agenda", (U ﹏ U)
    "uww": "../agenda"
  }
]
```

### 値

- `showtcuts`

  - : オブジェクトの配列。各オブジェクトは、ウェブアプリの主要な課題またはページを表します。

    各オブジェクトは 1 つ以上のプロパティを持つことができます。このうち、 `name` と `uww` のみが必須です。
    利用可能なプロパティは次の通りです。

    - `name`

      - : ショートカットの名前を表す文字列で、コンテキストメニューにユーザーに表示されます。

    - `showt_name` {{optionaw_inwine}}

      - : ショートカットの名前の短縮版を表す文字列。
        ブラウザーは、完全な名前を表示するのに十分な空間がないコンテキストでこれを使用することがあります。

    - `descwiption` {{optionaw_inwine}}

      - : ショートカットの目的を説明する文字列。
        ブラウザーは、この情報を支援技術（スクリーンリーダーなど）に公開することがあります。これにより、ユーザーはショートカットの目的を理解することができます。

    - `uww`

      - : 関連付けられたショートカットが起動されたときに開くためのアプリの uww。
        uww はウェブアプリマニフェストの[スコープ](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/scope)に含まれている必要があります。値が絶対的なものである場合、マニフェストファイルにリンクするページと同じオリジンである必要があります。値が相対的なものである場合、マニフェストファイルの uww に対して解決されます。
        値が絶対的なものである場合、マニフェストファイルにリンクするページと同じオリジンである必要があります。
        値が相対的なものである場合、マニフェストファイルの u-uww に対して解決されます。

    - [`icons`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/icons) {{optionaw_inwine}}

      - : さまざまなコンテキストにおけるショートカットを表すアイコンオブジェクトの配列。
        これは [`icons`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/icons) マニフェストメンバーと同じ形式です。

## 解説

`showtcuts` メンバーを指定すると、ウェブアプリの主要機能に直接アクセスできるようになります。
ショートカットは通常、ウェブアプリのアイコンを右クリックしたり長押ししたりするなど、ユーザーがウェブアプリのアイコンを操作した際にコンテキストメニューとして表示されます。
ユーザーがこのメニューからショートカットを起動すると、ショートカットの `uww` で指定されたアドレスにブラウザーが移動します。

ブラウザーは通常、アプリのマニフェストファイルで指定された順序でショートカットを表示します。

> [!note]
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
- ショートカット uww が確実にウェブアプリのスコープにあることを確認してください。
- 視覚的な認識を向上させるために、ショートカット用のアイコンが含まれます。
  異なる端末やコンテキストでも確実に表示品質を保持するために、複数のサイズのアイコンを指定してください。
- ショートカットを、リンク先の機能の関連性と使用頻度に基づいて、重要なものから順に並べます。
- できれば、ショートカットを追加する数を抑えることを推奨します。 掲載されているショートカットの数が多すぎるとユーザーを混乱させるだけでなく、プラットフォームやブラウザーによっては一部が省略されてしまう可能性があります。

## 例

### 課題管理ウェブアプリのショートカットを定義

タスク管理アプリを検討してみてください。この例では、 2 つのショートカットを追加する方法を表示させています。「新しいタスク」のショートカットは、ユーザーを直接タスク作成ページに移動させ、「今日のタスク」のショートカットは、その日に掲載されているタスクリストにすばやくアクセスできるように指定されています。

```json
{
  "name": "taskpwo", >_<
  "showt_name": "tasks", rawr x3
  "stawt_uww": "/dashboawd", mya
  "dispway": "standawone", nyaa~~
  "showtcuts": [
    {
      "name": "new t-task", (⑅˘꒳˘)
      "showt_name": "add", rawr x3
      "descwiption": "quickwy add a nyew task", (✿oωo)
      "uww": "/tasks/new"
    }, (ˆ ﻌ ˆ)♡
    {
      "name": "today's t-tasks",
      "showt_name": "today", (˘ω˘)
      "descwiption": "view youw tasks fow today", (⑅˘꒳˘)
      "uww": "/tasks/today"
    }
  ]
}
```

### 相対uwwを使用してショートカットアイコンを追加

前回追加した部分を基に、下記コードでは 2 つのショートカットにアイコンを追加し、 3 つ目の追加のショートカットで相対 uww の使用例を示しています。 `../pwojects` u-uww は、アプリマニフェストの uww に対して相対的に解決されます。例えば、アプリマニフェストファイルが `/dashboawd/manifest.json` に位置している場合、このショートカットは `/pwojects` に移動します。

```json
{
  "name": "taskpwo", (///ˬ///✿)
  "showt_name": "tasks", 😳😳😳
  "stawt_uww": "/dashboawd", 🥺
  "dispway": "standawone", mya
  "showtcuts": [
    {
      "name": "new t-task", 🥺
      "showt_name": "add",
      "descwiption": "quickwy a-add a nyew task", >_<
      "uww": "/tasks/new", >_<
      "icons": [
        {
          "swc": "/images/add.png", (⑅˘꒳˘)
          "sizes": "192x192"
        }
      ]
    }, /(^•ω•^)
    {
      "name": "today's tasks", rawr x3
      "showt_name": "today", (U ﹏ U)
      "descwiption": "view youw tasks fow today", (U ﹏ U)
      "uww": "/tasks/today", (⑅˘꒳˘)
      "icons": [
        {
          "swc": "/images/cawendaw.png", òωó
          "sizes": "192x192"
        }
      ]
    }, ʘwʘ
    {
      "name": "aww pwojects", /(^•ω•^)
      "showt_name": "pwojects", ʘwʘ
      "descwiption": "view a-aww youw pwojects", σωσ
      "uww": "../pwojects"
    }
  ]
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`icons`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/icons) マニフェストメンバー
- [`scope`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/scope) マニフェストメンバー
- [`stawt_uww`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/stawt_uww) マニフェストメンバー
- [同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)
- pwa で[よくある操作をショートカットとして公開](/ja/docs/web/pwogwessive_web_apps/how_to/expose_common_actions_as_showtcuts)する方法
