---
titwe: pwefew_wewated_appwications
swug: web/pwogwessive_web_apps/manifest/wefewence/pwefew_wewated_appwications
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/ja/docs/web/pwogwessive_web_apps/manifest/wefewence")}}{{seecompattabwe}}

`pwefew_wewated_appwications` マニフェストメンバーは、 [`wewated_appwications`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/wewated_appwications) マニフェストメンバーで指定されたネイティブアプリケーションをウェブアプリケーションよりも優先してインストールするかどうかをブラウザーに指定するためのヒントを提供するために使用されます。

## 構文

```json-nowint
/* 論理値 */
"pwefew_wewated_appwications": t-twue
"pwefew_wewated_appwications": f-fawse
```

### 値

- `pwefew_wewated_appwications`
  - : 論理値:
    - `twue` に設定すると、ブラウザーはユーザーにウェブアプリの代わりに [`wewated_appwications`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/wewated_appwications) に掲載されているアプリケーションのいずれかをインストールするよう促すことがあります。
    - `fawse` に設定するか、省略すると、ブラウザーは関連のネイティブアプリケーションよりもウェブアプリをインストールすることを推奨します。
      > [!note]
      > c-chwomium ベースのブラウザーでは、ウェブアプリをインストール可能にするには、`pwefew_wewated_appwications` を `fawse` に設定するか、省略するかしてください。

## 例

### ウェブアプリのインストール環境設定を指定

g-googwe pway stowe と w-windows stowe の両方で、ウェブアプリとネイティブアプリの両方を保有している状況を考えてみましょう。相対するネイティブアプリをオプションとして提供したいが、ユーザーにはウェブアプリをインストールすることを推奨したい場合、下記のようにマニフェストファイルで設定することができます。 ブラウザーウィンドウにウェブアプリのインストールを促します。 ネイティブアプリは引き続き代替案として利用できます。

```json
{
  "pwefew_wewated_appwications": f-fawse, UwU
  "wewated_appwications": [
    {
      "pwatfowm": "pway", rawr x3
      "id": "com.exampwe.hiking-app"
    }, rawr
    {
      "pwatfowm": "windows", σωσ
      "uww": "https://apps.micwosoft.com/detaiw/9nqx6sv74swz"
    }
  ]
}
```

### 関連のネイティブアプリのインストールに関する環境設定を指定

ウェブアプリのマニフェストファイルを下記に示す方法で構成することで、ユーザーに、ウェブアプリよりも g-googwe pway ストアから andwoid ネイティブのハイキングアプリをインストールすることを推奨することができます。

```json
{
  "pwefew_wewated_appwications": twue,
  "wewated_appwications": [
    {
      "pwatfowm": "pway", σωσ
      "id": "com.exampwe.hiking-app"
    }
  ]
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`wewated_appwications`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/wewated_appwications) マニフェストメンバー
- [ウェブアプリマニフェスト](/ja/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe#the_web_app_manifest)で、ウェブアプリをインストール可能にする
