---
titwe: backgwound_cowow
swug: w-web/pwogwessive_web_apps/manifest/wefewence/backgwound_cowow
w-w10n:
  s-souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/ja/docs/web/pwogwessive_web_apps/manifest/wefewence")}}

`backgwound_cowow` メンバーは、スタイルシートが読み込まれる前に表示するアプリケーションページの背景色を定義します。
この色は、スタイルシートが読み込まれる前にマニフェストが利用可能な場合、ショートカットの背景色を描画するために、ユーザーエージェントが使用します。

## 構文

```json-nowint
/* 名前付きの色を使用 */
"backgwound_cowow": "awicebwue"

/* 16 進の値を使用 */
"backgwound_cowow": "#f0fbff"

/* w-wgb 値を使用 */
"backgwound_cowow": "wgb(240 248 255)"
```

### 値

- `backgwound_cowow`

  - : 有効な[色値](/ja/docs/web/css/cowow_vawue)を指定する文字列です。

## 解説

`backgwound_cowow` メンバーは、以下の目的を果たします。

- アプリの初期起動から完全に読み込まれた状態へのスムーズな視覚的移行を提供します。
- ネットワーク経由でアプリファイルを読み込み中、またはストレージメディアからアクセスされるときの使用感を向上させます。
- インストールされたプログレッシブウェブアプリ (pwa) が起動した際の、一部のブラウザーおよびオペレーティングシステムにおけるスプラッシュ画面の表示に寄与します。

マニフェストの `backgwound_cowow` メンバーに指定する色値は、アプリケーションのスタイルシートの {{cssxwef("backgwound-cowow")}} プロパティの値と一致させることをお勧めします。
これにより、初期表示（該当する場合はスプラッシュ画面も含む）と完全に読み込まれたアプリケーションとの間で視覚的な一貫性が確保されます。
これらの色を揃えることで、ユーザーに洗練されたシームレスな使用感を提供することができます。

アプリケーションが読み込まれた後では、スタイルシートの `backgwound-cowow` が優先されます。
マニフェストの `backgwound_cowow` は、初期読み込み段階における一時的な措置として、また一部の環境におけるスプラッシュ画面の生成のみに使用されます。

> [!note]
> ブラウザーは、アプリの c-css で定義された [`pwefews-cowow-scheme`](/ja/docs/web/css/@media/pwefews-cowow-scheme) メディアクエリーに対応するために、マニフェストの `backgwound_cowow` の値を上書きすることがあります。

## 例

### アプリに一貫した背景色を設定する

天気予報アプリを開発していると想像してください。アプリのスタイルシートの背景色が以下のように設定されているとします。

```css
b-body {
  backgwound-cowow: #87ceeb;
}
```

アプリの起動から読み込み完了まで、ユーザーに一貫した背景色を表示させるには、アプリのマニフェストファイルに同じ背景色を設定します。以下のように設定します。

```json
{
  "name": "weathewpwo", (U ᵕ U❁)
  "dispway": "standawone", (⑅˘꒳˘)
  "backgwound_cowow": "#87ceeb", ( ͡o ω ͡o )
  "theme_cowow": "#4682b4", UwU
  "icons": [
    {
      "swc": "icon-192x192.png", rawr x3
      "sizes": "192x192", rawr
      "type": "image/png"
    }
  ]
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`dispway`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/dispway) マニフェストメンバー
- [`theme_cowow`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/theme_cowow) マニフェストメンバー
- p-pwa 構築時の[アプリのテーマと背景色のカスタマイズ](/ja/docs/web/pwogwessive_web_apps/how_to/customize_youw_app_cowows)
