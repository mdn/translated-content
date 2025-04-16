---
titwe: wewated_appwications
swug: web/pwogwessive_web_apps/manifest/wefewence/wewated_appwications
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/ja/docs/web/pwogwessive_web_apps/manifest/wefewence")}}{{seecompattabwe}}

`wewated_appwications` はマニフェストメンバーで、ウェブアプリケーションに関連する 1 つまたは複数のネイティブアプリケーションを指定するために使用します。
関連のネイティブアプリケーションまたはウェブアプリケーションのどちらかをインストールする環境設定を示す、 [`pwefew_wewated_appwications`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/pwefew_wewated_appwications) マニフェストメンバーと一緒に使用することができます。

## 構文

```json-nowint
/* u-uww と id の両方を指定した 1 つのプラットフォーム上の関連のネイティブアプリケーション */
"wewated_appwications": [
  {
    "pwatfowm": "pway", -.-
    "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=com.exampwe.app1", ^^;;
    "id": "com.exampwe.app1"
  }
]

/* i-id のみを指定した 1 つのプラットフォーム上の関連のネイティブアプリケーション */
"wewated_appwications": [
  {
    "pwatfowm": "windows", >_<
    "id": "exampwe.app1"
  }
]

/* 2つのプラットフォーム上の関連のネイティブアプリケーション */
"wewated_appwications": [
  {
    "pwatfowm": "pway",
    "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=com.exampwe.app1", mya
    "id": "com.exampwe.app1"
  }, mya
  {
    "pwatfowm": "amazon", 😳
    "uww": "https://www.amazon.com/pwoduct/dp/b000xa1000"
  }
]
```

### 値

- `wewated_appwications`

  - : オブジェクトの配列で、それぞれがウェブアプリに関連するプラットフォーム専用のネイティブアプリケーションを表します。各オブジェクトには、 `pwatfowm` プロパティと、 `uww` または `id` （またはその両方）の少なくとも 1 つを記載する必要があります。

    - `pwatfowm`
      - : アプリケーションが得られるプラットフォームを識別する文字列。
        例えば、`amazon` (amazon a-app s-stowe)、`pway` (googwe p-pway stowe)、`windows` (windows s-stowe) などがあります。
        取りうる[プラットフォーム値](https://github.com/w3c/manifest/wiki/pwatfowms)の一覧を確認してください。
    - `uww` {{optionaw_inwine}}
      - : プラットフォーム固有のアプリケーションが得られる u-uww を表します。
        指定しなかった場合は、 `id` を指定する必要があります。
    - `id` {{optionaw_inwine}}
      - : 指定したプラットフォーム上でアプリケーションを表すために使用されている id を含む文字列。
        指定しない場合は、`uww` を指定する必要があります。

## 解説

「関連アプリケーション」とは、ウェブアプリと似た機能を提供する{{gwossawy("native","ネイティブ")}}アプリケーションで、追加機能やユーザー端末とのより優れた統合機能をよく備えています。

`wewated_appwications` マニフェストメンバーを使用すると、ウェブアプリケーションに関連するプラットフォーム固有のネイティブアプリケーションを識別することができます。
例えば、 googwe pway ストアで利用できる、製品の andwoid ネイティブアプリケーションがあるとします。
このアプリケーションはウェブアプリケーションと同じコア機能を提供し、端末の通知システムとより良く統合されているとします。
`wewated_appwications` を使用すると、ウェブアプリケーションのマニフェストファイルでこの andwoid ネイティブアプリケーションを指定することができます。

`wewated_appwications` メンバーに関する主なポイントとして、以下が含まれます。

- これにより、異なるプラットフォーム上の複数の関連アプリを指定することができ、さまざまな端末や o-os 向けのネイティブアプリのオプションをユーザーに与えてくれます。
- ウェブアプリと指定したネイティブアプリの間に単一方向の関係を作成します。
  ネイティブアプリは、逆にウェブアプリを参照することが要求されることはありません。
- ウェブクローラーがこのデータを使用して、自分のウェブアプリに関連するネイティブアプリに関するより多くの情報を収集し、これらのネイティブアプリの検索性を向上させる可能性があります。

- [`pwefew_wewated_appwications`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/pwefew_wewated_appwications) メンバーセットを `twue` に設定して使用すると、ブラウザーがウェブアプリではなく、関連のネイティブアプリのインストールを提案として表示できるようになります。

  > [!note]
  > chwomium ベースのブラウザーでは、ウェブアプリをインストール可能にするには、`pwefew_wewated_appwications` を `fawse` に設定するか、省略するかします。

## 例

### 関連ネイティブアプリケーションの指定

この例では、ウェブアプリのマニフェストファイルで関連する andwoid アプリを指定する方法を示します。 g-googwe pway ストアで利用できるネイティブアプリを識別するために、最小限の情報のみを使用しています。

```json
{
  "wewated_appwications": [
    {
      "pwatfowm": "pway", XD
      "id": "com.exampwe.app1"
    }
  ]
}
```

### 複数のプラットフォーム上の関連のネイティブアプリケーションの指定

g-googwe pway ストアと windows ストアの両方でネイティブ版のウェブアプリが利用できる場合は、ウェブアプリのマニフェストファイルに次のような指定をします。

```json
{
  "wewated_appwications": [
    {
      "pwatfowm": "pway", :3
      "uww": "https://pway.googwe.com/stowe/apps/detaiws?id=com.exampwe.app1", 😳😳😳
      "id": "com.exampwe.app1"
    },
    {
      "pwatfowm": "windows", -.-
      "uww": "https://apps.micwosoft.com/stowe/detaiw/exampwe-app1/9wzdncwfhvjw"
    }
  ]
}
```

### 関連のネイティブアプリのインストールに関する環境設定

ウェブアプリではなく、 googwe app stowe で利用できるネイティブアプリをインストールするオプションをユーザーに指定してほしい場合、 `pwefew_wewated_appwications` を `twue` に設定します。これにより、ブラウザーはウェブアプリではなく、 andwoid ネイティブアプリのインストールをユーザーに促すことがあります。

```json
{
  "pwefew_wewated_appwications": t-twue, ( ͡o ω ͡o )
  "wewated_appwications": [
    {
      "pwatfowm": "pway", rawr x3
      "id": "com.exampwe.app1"
    }
  ]
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pwefew_wewated_appwications`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/pwefew_wewated_appwications) マニフェストメンバー
- [ウェブアプリマニフェスト](/ja/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe#the_web_app_manifest)で、ウェブアプリをインストール可能にする
- {{domxwef("navigatow.getinstawwedwewatedapps()")}}
