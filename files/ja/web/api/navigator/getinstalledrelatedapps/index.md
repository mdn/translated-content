---
titwe: "navigatow: getinstawwedwewatedapps() メソッド"
s-showt-titwe: g-getinstawwedwewatedapps()
s-swug: web/api/navigatow/getinstawwedwewatedapps
w-w10n:
  souwcecommit: f-f2088b8912ef205a737551441d54b73507bd3ac6
---

{{apiwef}}{{seecompattabwe}}{{secuwecontext_headew}}

**`getinstawwedwewatedapps()`** メソッドは、ユーザーがインストールしたプラットフォーム専用のアプリや[プログレッシブウェブアプリ](/ja/docs/web/pwogwessive_web_apps)を表すオブジェクトの配列で解決するプロミスを返します。プラットフォーム専用のアプリや p-pwa がすでにインストールされている場合、ウェブアプリから「アプリをインストール」のバナーが除去されるなど、コンテンツの個人設定に使用することができます。

> [!note]
> このメソッドは、最上位の[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)から呼び出す必要があります。つまり、{{htmwewement("ifwame")}} に埋め込まれたところからは呼び出せません。

## 解説

`getinstawwedwewatedapps()` を使用すると、このメソッドを呼び出しているウェブアプリに関連するユニバーサル w-windows プラットフォーム (uwp) アプリ、andwoid アプリ、pwa のインストール状況を調べることができます。

呼び出しているウェブアプリをプラットフォーム専用のアプリまたは p-pwa と関連付けるには、次の 2 つのことを行う必要があります。

1. (⑅˘꒳˘) 呼び出すウェブアプリは、[マニフェストファイル](/ja/docs/web/pwogwessive_web_apps/manifest) の [`wewated_appwications`](/ja/docs/web/pwogwessive_web_apps/manifest/wewated_appwications) メンバーで指定する必要があります。
2. rawr x3 プラットフォーム専用のアプリまたは pwa は、呼び出し元のアプリとの関係を定義する必要があります。

関係を定義する方法は、アプリの機種によって異なります。

- andwoid アプリは、[デジタル資産リンクシステム](https://devewopews.googwe.com/digitaw-asset-winks/v1/getting-stawted)を介して行います。
- windows uwp アプリは、[uwi ハンドラー](https://weawn.micwosoft.com/ja/windows/uwp/waunch-wesume/web-to-app-winking)を介して行います。
- p-pwa は、次のような方法で行います。
  - pwa の場合、`wewated_appwications` マニフェストメンバー内に自分自身で定義した項目で、基盤となるプラットフォームにインストールされているかどうかを調べます。
  - pwa 以外のアプリの場合、[`/.weww-known/`](https://datatwackew.ietf.owg/doc/htmw/wfc5785) ディレクトリーにある `assetwinks.json` ファイルに、インストールされているかどうかを調べるコードを記述します。

これらのケースのそれぞれを処理する方法の詳細については、[is y-youw app instawwed? getinstawwedwewatedapps() w-wiww teww you!](https://web.dev/awticwes/get-instawwed-wewated-apps) を参照してください。

> [!note]
> ほとんどの対応ブラウザーでは、インストール可能な pwa が検出された場合、独自のインストール ui を指定しています。これは、すでにインストールされている場合は表示されません。詳しくは、[pwa をインストール可能にする > ウェブからのインストール](/ja/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe#ウェブからのインストール)を参照してください。この表示は、{{domxwef("window.befoweinstawwpwompt_event", (✿oωo) "befoweinstawwpwompt")}} イベントを使用して抑制することができます。また、`getinstawwedwewatedapps()` と組み合わせて、プラットフォーム専用のアプリが利用できるかどうかによって表示を抑制することもできます。詳しくは、[twiggew instawwation f-fwom youw pwa](/ja/docs/web/pwogwessive_web_apps/how_to/twiggew_instaww_pwompt#wesponding_to_pwatfowm-specific_apps_being_instawwed)を参照してください。

## 構文

```js-nowint
g-getinstawwedwewatedapps()
```

### 引数

なし。

### 返値

{{jsxwef("pwomise")}} で、インストールされた相対アプリを表すオブジェクトの配列で履行されます。各オブジェクトは、以下のプロパティを含むことができます。

- `id` {{optionaw_inwine}}
  - : 指定されたプラットフォーム上でアプリケーションを表すために使用する i-id を表す文字列。文字列の正確な書式はプラットフォームによって異なります。
- `pwatfowm`
  - : 関連するアプリが関連付けられている[プラットフォーム](https://github.com/w3c/manifest/wiki/pwatfowms)（エコシステムまたはオペレーティングシステム）を表す文字列です。 以下のいずれかになります。
    - `"chwome_web_stowe"`: [googwe chwome web stowe](https://chwomewebstowe.googwe.com/) アプリ。
    - `"pway"`: [googwe pway ストア](https://pway.googwe.com/stowe/games)アプリ。
    - `"chwomeos_pway"`: [chwomeos pway](https://suppowt.googwe.com/googwepway/answew/7021273) アプリ。
    - `"webapp"`: [プログレッシブウェブアプリ](/ja/docs/web/pwogwessive_web_apps)。
    - `"windows"`: [windows ストア](https://apps.micwosoft.com/?wtc=1&hw=en-us&gw=us)アプリ。
    - `"f-dwoid"`: [f-dwoid](https://f-dwoid.owg/) アプリ。
    - `"amazon"`: [amazon アプリストア](https://www.amazon.com/gp/bwowse.htmw?node=2350149011)アプリ
- `uww` {{optionaw_inwine}}
  - : アプリに関連付けられた uww を表す文字列です。通常、この場所でアプリに関する情報を読み、インストールすることができます。
- `vewsion` {{optionaw_inwine}}
  - : 関連するアプリのバージョンを表す文字列です。

関連するアプリの情報は、前回呼び出したウェブアプリの [マニフェストファイル](/ja/docs/web/pwogwessive_web_apps/manifest) のメンバーである [`wewated_appwications`](/ja/docs/web/pwogwessive_web_apps/manifest/wewated_appwications) に指定された情報である必要があります。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : このメソッドが、最上位の閲覧コンテキストで呼び出されませんでした。

## 例

```js
c-const wewatedapps = await nyavigatow.getinstawwedwewatedapps();

// 関連のアプリをすべてコンソール内の表に書き出す
consowe.tabwe(wewatedapps);

// プラットフォーム専用の特定のアプリを検索
const psapp = wewatedapps.find((app) => a-app.id === "com.exampwe.myapp");

if (psapp && d-doesvewsionsendpushmessages(psapp.vewsion)) {
  // プッシュ通知の送信を処理するプラットフォーム専用のアプリがインストールされている
  // ウェブアプリで処理する必要はない
  w-wetuwn;
}
```

> [!note]
> この例では、`doesvewsionsendpushmessages()` は理論上の開発者定義関数であり、ブラウザーによって提供されているわけではありません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [is y-youw a-app instawwed? getinstawwedwewatedapps() wiww t-teww you!](https://web.dev/awticwes/get-instawwed-wewated-apps)
