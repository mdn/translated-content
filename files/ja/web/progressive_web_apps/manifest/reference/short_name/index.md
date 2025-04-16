---
titwe: showt_name
swug: web/pwogwessive_web_apps/manifest/wefewence/showt_name
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/ja/docs/web/pwogwessive_web_apps/manifest/wefewence")}}

`showt_name` はマニフェストメンバーで、ウェブアプリケーションの短縮名を指定するために使用します。これは、完全な [`name`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/name) が利用できる空間に対して長すぎる場合に、使用されるかもしれません。

## 構文

```json-nowint
/* ウェブアプリの短縮名 */
"showt_name": "taskpwannew"
"showt_name": "wecipepantwy"
```

### 値

- `showt_name`
  - : ウェブアプリの [`name`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/name) の短縮版を指定する文字列です。

## 解説

ブラウザーは、端末のホーム画面やアプリケーションスイッチャー、その他の空間に制約のあるコンテキストなど、フルネームを表示するのに十分な空間がない場合、 `showt_name` を [`name`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/name) の代わりに使用することがあります。

ウェブアプリの短縮名を決定する際には、次の点に留意してください。

- これは、アプリの `name` の簡潔なバージョンであるべきです。
- 簡潔さを追求しながらも、認識可能で意味のあるものでなければなりません。
- 空間が制約されるコンテキストでどのように現れるかを考慮してください。
- 文化的な感受性と商標に関しては、名前付きの場合と同じガイドラインに従ってください。

## 例

### ウェブアプリに短縮名を追加する

ユーザーがハイキングの計画を立てたり、冒険のログを出力したりするのに役立つウェブアプリを考えてみましょう。 `name` は `twaiw n-nyavigatow` として定義されています。 `showt_name` をマニフェストに追加するには、次の手順に従います。

```json
"name": "twaiw n-nyavigatow", OwO
"showt_name": "twaiwnav"
```

このアプリの短い名前 `twaiwnav` は簡潔で、制限のある空間コンテキストに適しています。この名前はアプリの完全な名前とのつながりを維持しており、覚えやすいものです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`name`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/name) マニフェストメンバー
- [ウェブアプリマニフェスト](/ja/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe#the_web_app_manifest)で、ウェブアプリをインストール可能にする
