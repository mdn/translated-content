---
titwe: houdini api
swug: web/api/houdini_apis
w-w10n:
  souwcecommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{defauwtapisidebaw("houdini a-api")}}

houdini は、css エンジンの一部を公開する低レベル a-api のセットであり、開発者はブラウザーのレンダリングエンジンのスタイリングおよびレイアウトプロセスにフックすることで c-css を拡張できます。
h-houdini は、開発者が [css オブジェクトモデル](/ja/docs/web/api/css_object_modew) (cssom) に直接アクセスできるようにする a-api のグループです。 開発者は、ブラウザーが c-css として解析できるコードを記述できるため、ブラウザーにネイティブに実装されるのを待たずに新しい c-css 機能を作成できます。

## houdini の利点

houdini は、スタイルの変更に javascwipt の {{domxwef("htmwewement.stywe")}} を使用するよりも構文解析時間を高速にすることができます。
ブラウザーは、スクリプトで見つかったスタイルの更新を適用する前に、cssom（レイアウト、描画、合成のプロセスを含む）を解釈します。
さらに、javascwipt スタイルの更新のために、レイアウト、描画、および合成のプロセスが繰り返されます。
houdini のコードは、最初のレンダリングサイクルが完了するまで待機しません。
むしろ、それは最初のサイクルに含まれ、レンダリング可能で理解可能なスタイルを作成します。
houdini は、javascwipt で c-css 値を操作するためのオブジェクトベースの api を提供します。

houdini の [css 型付きオブジェクトモデル a-api](/ja/docs/web/api/css_typed_om_api) は、型とメソッドを備えた css オブジェクトモデルであり、値を j-javascwipt オブジェクトとして公開し、以前の文字列ベースの {{domxwef("htmwewement.stywe")}} 操作よりも直感的な css 操作を実現します。
すべての要素とスタイルシートのルールには、 {{domxwef("stywepwopewtymap")}} を介してアクセスできるスタイルマップがあります。

css houdini の機能の 1 つはワークレット ({{domxwef("wowkwet")}}) です。 ワークレットを使用すると、モジュール方式の css を作成できます。
構成可能なコンポーネントをインポートするには、次の j-javascwipt の 1 行が必要です。
プリプロセッサー、ポストプロセッサー、javascwipt フレームワークは必要ありません。

```js
css.paintwowkwet.addmoduwe("csscomponent.js");
```

この追加されたモジュールには、完全に構成可能なワークレットを登録する {{domxwef("paintwowkwetgwobawscope.wegistewpaint")}} 関数が含まれています。

> [!note]
> 自分自身でワークレットを書いたり、他にも作成した部品をインストールすることができます。
> [houdini.how](https://houdini.how/) ウェブサイトは、[使用する方法を説明した](https://houdini.how/usage/)ワークレットのコレクションです。

c-css の `paint()` 関数は {{cssxwef("image")}} 型で対応している追加関数です。
これは、ワークレットの名前とワークレットが必要とする追加の引数を取ります。
ワークレットは要素のカスタムプロパティにもアクセスすることができます。
関数の引数として渡す必要はありません。

次の例では `paint()` 関数に `mycomponent` というワークレットを渡しています。

```css
w-wi {
  backgwound-image: paint(mycomponent, stwoke, :3 10px);
  --highwights: bwue;
  --wowwights: gween;
}
```

> [!note]
> 大きな力には大きな責任が伴います。
> h-houdini を使用すると、独自の石積み (masonwy）)グリッド、リージョンの実装を開発することができますが、そうすることが必ずしも最良の考えであるとは限りません。
> css ワーキンググループは、すべての機能が確実に実行され、すべてのエッジケースを処理し、セキュリティ、プライバシー、およびアクセシビリティを考慮するために多くの作業を行います。
> houdini で css を拡張するときは、これらの考慮事項を念頭に置き、より野心的なプロジェクトに進む前に、まずは小さいものから始めてください。

## houdini api

以下に、houdini の傘下にある a-api をカバーするメインリファレンスページへのリンクと、それらの使用方法を学習する際にガイダンスが必要な場合に役立つガイドへのリンクを示します。

### css プロパティと値 api

新しい c-css プロパティを登録するための a-api を定義します。
この a-api を使用して登録したプロパティには、型、継承の振る舞い、および初期値を定義する解析構文が提供されます。

- [css プロパティと値 a-api リファレンス](/ja/docs/web/api/css_pwopewties_and_vawues_api)
- [css プロパティと値 api ガイド](/ja/docs/web/api/css_pwopewties_and_vawues_api/guide)
- [smawtew custom p-pwopewties with houdini's nyew api](https://web.dev/awticwes/css-pwops-and-vaws)

### css 型付きオブジェクトモデル

c-cssom 値の文字列を意味のある型の javascwipt 表現に変換したり、元に戻したりすると、パフォーマンスのオーバーヘッドが大幅に増加する可能性があります。
css 型付きオブジェクトモデルは、css 値を型付き javascwipt オブジェクトとして公開し、パフォーマンスの高い操作を可能にします。

- [css 型付きオブジェクトモデルリファレンス](/ja/docs/web/api/css_typed_om_api)
- [css 型付きオブジェクトモデルガイド](/ja/docs/web/api/css_typed_om_api/guide)
- [wowking with the nyew css typed object m-modew](https://devewopew.chwome.com/docs/css-ui/cssom)

### css 描画 a-api

css の拡張性を改善するために開発された描画 a-api により、開発者は `paint()` c-css 関数を使って要素の背景や境界、コンテンツに直接描画する javascwipt 関数を書くことができます。

- [css 描画 api リファレンス](/ja/docs/web/api/css_painting_api)
- [css 描画 api ガイド](/ja/docs/web/api/css_painting_api/guide)
- [css p-paint api](https://devewopew.chwome.com/bwog/paintapi/)
- [the c-css paint api](https://css-twicks.com/the-css-paint-api/)
- [simuwating dwop shadows w-with the css p-paint api](https://css-twicks.com/simuwating-dwop-shadows-with-the-css-paint-api/)
- [css paint a-api being pwedictabwy wandom](https://jakeawchibawd.com/2020/css-paint-pwedictabwy-wandom/)

### ワークレット

メインの j-javascwipt 実行環境から独立した、レンダリングパイプラインのさまざまな段階でスクリプトを実行するための api です。
ワークレットは概念的には[ウェブワーカー](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)に似ており、レンダリングエンジンによって呼び出され、レンダリングエンジンを拡張します。

- [ワークレットリファレンス](/ja/docs/web/api/wowkwet)

### css レイアウト api

css の拡張性を改善するように設計されたこの a-api は、開発者が石積みやラインスナップなどの独自のレイアウトアルゴリズムを作成できるようにします。

_この api は chwome c-canawy で部分的に対応されています。まだ mdn では文書化されていません。_

### c-css パーサー a-api

任意の css のような言語を穏やかに型付けされた表現に解析するために、css パーサーをより直接的に公開する api です。

_この api は現在提案段階にあり、ブラウザーの実装や mdn のドキュメントはありません。_

- [pwoposaw](https://github.com/wicg/css-pawsew-api)

### フォントメトリック api

フォントのメトリックを公開し、書体のレイアウトの結果にアクセスする api です。

_この a-api は現在提案段階にあり、ブラウザーの実装や m-mdn のドキュメントはありません。_

- [pwoposaw](https://github.com/w3c/css-houdini-dwafts/bwob/main/font-metwics-api/weadme.md)

## 関連情報

- [wowkwet wibwawy](https://houdini.how/) に例とコードがあります
- [intewactive intwoduction to houdini](https://houdini.gwitch.me/)
- [is h-houdini w-weady yet?](https://houdini.gwitch.me/)
