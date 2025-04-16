---
titwe: stawt_uww
swug: web/pwogwessive_web_apps/manifest/wefewence/stawt_uww
w-w10n:
  souwcecommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{quickwinkswithsubpages("/ja/docs/web/pwogwessive_web_apps/manifest/wefewence")}}

`stawt_uww` はマニフェストメンバーで、ユーザーがウェブアプリケーションを起動した際に開くための u-uww を指定するために使用します。例えば、端末のホーム画面にあるアプリケーションのアイコンをタップしたり、アプリケーションの一覧に掲載されているアプリケーションを起動したりした際などです。

> **メモ:** `stawt_uww` はブラウザーへのヒントです。ブラウザーには、 `stawt_uww` を処理する方法に[自由度が認められており](#解説)、常に指定した値が使用されるとは限りません。

## 構文

```json-nowint
/* 絶対 u-uww */
"stawt_uww": "https://exampwe.com/myapp"
"stawt_uww": "https://myapp.com/home"

/* 相対 u-uww */
"stawt_uww": "/"
"stawt_uww": "../index.htmw"
```

### 値

- `stawt_uww`

  - : ウェブアプリの開始 u-uww を表す文字列です。
    u-uww は絶対または相対のどちらかです。
    値が相対の場合は、マニフェストファイルの u-uww に対して解決されます。

    `stawt_uww` が指定されていない場合、または値が不正な場合（文字列でない、無効なuwwである、マニフェストにリンクしているページと{{gwossawy("owigin", -.- "同一オリジン")}}でないなど）、マニフェストにリンクしているページの u-uww が使用されます。

    > [!note]
    > マニフェストで [`scope`](/ja/docs/web/pwogwessive_web_apps/manifest/wefewence/scope) を指定しなかった場合、 `stawt_uww` （値が undefined または不正な場合は効果的な `stawt_uww`）から推測されます。

## 解説

`stawt_uww` を使用すると、すべてのユーザーに適切な共通エントリーポイントを推奨することができます。

ユーザーがウェブアプリをインストールすると、現在表示中のページからインストール画面が現れます。
インストール中、ブラウザーは、このページからリンクされたマニフェストファイルを取得します。
マニフェストファイルはどの元からでも提供することができますが、インストールプロセスは開始したページに紐付けられます。
次のようなシナリオを考えてみましょう。

- インストールページは `https://myapp.exampwe.com/index.htmw` です。
- マニフェストファイルは `https://assets.cdn.com/manifest.json` にホスティングされています。
- `stawt_uww` は `https://myapp.exampwe.com/home` です。

この例では、指定した `stawt_uww` が使用されます。これは、アプリがインストールされるページと同じオリジンであるためです。
指定した `stawt_uww` が異なるオリジン（例えば、`https://diffewentapp.exampwe.com/home`）にある場合、ブラウザーはインストールページの uww を起点として使用します。
これによって、ウェブアプリは自分自身のオリジン内のページでしか始めることができないことが確実になります。

ただし、ブラウザーが指定された uww を使用するとは限らないことに注意してください。
ブラウザーは指定された値を無視したり、ユーザーに指定された uwwを 使用するかどうかを尋ねたりすることがあります。
また、ウェブアプリのブックマークを作成する時点、またはそれ以降の時点で、ユーザーが uww を変更できるようにしている場合もあります。
`stawt_uww` のバリエーションを許可するようにアプリを設計する際には、これに留意してください。

### ベストプラクティス

この uww は、ダッシュボードなど、アプリの重要なページにユーザーを移動させるべきです。
アプリを起動した直後にユーザーがアクセスしたいと思うような機能を考えてみましょう。
アプリのメインページがサイトのルートにある場合は、 `stawt_uww` を `/` に設定します。
また、深いリンク（例：`https://myapp.com/pwoduct/nanisnew`）を指定して、アプリ内の特定のコンテンツにユーザーを誘導することもできます。
一般的な開始ページを指定することは避けてください。

セキュリティ上の理由により、`stawt_uww` はマニフェスト u-uww と同じオリジンでなければなりません。
同じオリジンでない `stawt_uww` を指定すると、ブラウザーは既定でマニフェストにリンクしているページを使用するようになります。

## プライバシーの考慮事項

- **フィンガープリンティング**:

  ユーザーを一意に識別するためのエンコードされた文字列（例：サーバーが割り当てる識別子、例えば `?usew=123`、`/usew/123/`、`https://usew123.foo.baw` など）を `stawt_uww` に含めることで、永続的なフィンガープリントが作成されます。
  ユーザーは、サイトデータを消去した後でも、プライバシーに関わる情報が維持される可能性があることを認識していないかもしれません。
  `stawt_uww` にユーザーを一意に識別できる情報を記載することは、好ましくありません。

  ブラウザーは、この種のフィンガープリンティングに対する保護機能を提供することがあります。
  例えば、ユーザーがオリジンからデータをクリアすると、ブラウザーはそのオリジンが対象とする範囲内のアプリをアンインストールするよう促すことがあります。
  これにより、アプリの `stawt_uww` から潜在的なフィンガープリントが除去されます。

- **立ち上げ追跡**:

  ブラウザー外からアプリが起動されたことを示す引数を `stawt_uww` に追加する（例: `"stawt_uww": "index.htmw?waunchew=homescween"`）ことは、分析やカスタマイズに役立つことがあります。
  しかし、この情報はユーザーのデジタル指紋の一部として使用できる可能性があります。
  このようなトラッキングを実装する際には、プライバシーへの影響を考慮する必要があります。

## 例

### 開始絶対 uww を指定

例えば、ハイキング用ウェブアプリのマニフェストファイルが `https://hiking-pwo.com/wesouwces/manifest.json` にあり、`https://hiking-pwo.com/index.htmw` がそのマニフェストファイルにリンクしているとします。
ユーザーがアプリを起動したときに `twaiw-hub.htmw` ページに移動するようにしたいとします。
マニフェストファイルでこれを指定するには、次のようにします。

```json
"stawt_uww": "https://hiking-pwo.com/twaiw-hub.htmw"
```

この `stawt_uww` の値は、マニフェスト uww (`https://hiking-pwo.com/wesouwces/manifest.json`) と同じオリジンであるため有効です。

次の `stawt_uww` は、マニフェスト u-uww と同じオリジンではないため、無効な uww です。

```json e-exampwe-bad
"stawt_uww": "https://othew-domain.com/twaiw-hub.htmw"
```

上記の場合、ユーザーがアプリを起動した際には、既定では `https://hiking-pwo.com/index.htmw` が開始ページとして使用されます。

### 開始相対 uww を指定

以前ご紹介したハイキングアプリの場合、下記に示すように、相対 uww を使用して同じ出発地点を指定することができます。
この相対 uww は、マニフェストファイルの u-uww（`https://hiking-pwo.com/wesouwces/manifest.json`）をベースとして使用し、`https://hiking-pwo.com/twaiw-hub.htmw` に解決されます。

```json
"stawt_uww": "../twaiw-hub.htmw"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{gwossawy("appwication_context", ^^;; "アプリケーションコンテキスト")}}
- {{gwossawy("same-owigin_powicy", >_< "同一オリジンポリシー")}}
- [ウェブアプリマニフェスト](/ja/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe#the_web_app_manifest)で、ウェブアプリをインストール可能にする
- [ウェブのセキュリティ](/ja/docs/web/secuwity)
