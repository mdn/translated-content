---
title: モバイルウェブ開発
slug: Web/Guide/Mobile
l10n:
  sourceCommit: 1f3cb2a075350c2e85fbe59a5594180590e30ebf
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/ja/docs/Web/Guide/Mobile")}}
  <ol>
    <li class="toggle">
      <details>
        <summary>ガイド</summary>
        <ol>
          {{ListSubpagesForSidebar("/ja/docs/Web/Guide")}}
        </ol>
      </details>
    </li>
  </ol>
</section>

このページでは、モバイル端末で適切に機能するウェブサイトを設計するために必要となる、主要な一部のテクニックの概要を説明します。 Mozilla の Firefox OS プロジェクトに関する情報を探している場合は、 [Firefox OS](/ja/docs/Mozilla/Firefox_OS) のページを参照してください。または、 [Android 版 Firefox](/ja/docs/Mozilla/Firefox_for_Android) に興味があるかもしれません。

[モバイル端末向けの設計](#designing_for_mobile_devices)と[ブラウザー間の互換性](#cross-browser_development)の 2 つの節に整理しました。また、 Jason Grlicky によるウェブ開発者向けの[モバイルへの親和性](/ja/docs/Web/Guide/Mobile/Mobile-friendliness)のガイドも参照してください。

## モバイル端末向けの設計

モバイル端末は、デスクトップパソコンやノートパソコンと比較して、ハードウェアの特性がまったく異なります。画面は通常、明らかに小さくなりますが、ユーザーが端末を回転させると、画面の向きがポートレートモードとランドスケープモードの間で自動的に切り替わります。通常、ユーザー入力用のタッチスクリーンがあります。位置情報や画面の向きなどの API は、デスクトップでは未対応であったりあまり有用でなかったりしますので、これらの API はモバイルユーザーに、サイトと対話するための新しい方法を提供します。

### 小さな画面での作業

[レスポンシブウェブデザイン](/ja/docs/Learn/CSS/CSS_layout/Responsive_Design)は、ウェブサイトのレイアウトを表示する環境 — 特に、大きさと画面の向き — の変化に合わせることができる一連の技術を表す用語です。これには次のような技術が含まれています。

- 流動的 CSS レイアウトにより、ブラウザーの大きさが変化したときにページを円滑に合わせる
- [メディアクエリー](/ja/docs/Web/CSS/Media_Queries)を使用して、端末の画面の[幅](/ja/docs/Web/CSS/@media/width)と[高さ](/ja/docs/Web/CSS/@media/height)にふさわしい CSS の規則を条件付きで含める

[viewport メタタグ](/ja/docs/Learn/CSS/CSS_layout/Responsive_Design#the_viewport_meta_tag)で、ブラウザーに対してユーザーの端末の適切な表示倍率でサイトを表示するよう指示します。

### タッチ画面での操作

タッチ画面を使うには、 [DOM タッチイベント](/ja/docs/Web/API/Touch_events)の作業をする必要があります。 CSS の {{cssxref(":hover")}} 擬似クラスを使用することはできないでしょうし、指はマウスポインターより太いという事実を考慮して、クリック可能なアイテムをボタンのようにデザインする必要があるでしょう。この記事、 [designing for touch screens](https://web.archive.org/web/20150520130912/http://www.whatcreative.co.uk/blog/tips/designing-for-touch-screen/) を参照してください。

[pointer](/ja/docs/Web/CSS/@media/pointer) または [any-pointer](/ja/docs/Web/CSS/@media/any-pointer) メディアクエリーを使用して、タッチ可能な端末で異なる CSS を読み込むことができます。

### 画像の最適化

端末の帯域幅が低かったり高価だったりするユーザーを支援するために、デバイスの画面サイズと解像度に適した画像をロードして画像を最適化することができます。 CSS でこれを行うには、画面の[高さ](/ja/docs/Web/CSS/@media/height)、[幅](/ja/docs/Web/CSS/@media/width)、[ピクセル比](/ja/docs/Web/CSS/@media/resolution)でクエリーを行います。

CSS プロパティを使用して、画像を使用せずに[グラデーション](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)や[影](/ja/docs/Web/CSS/box-shadow)などの視覚効果を実装することもできます。

### モバイル API

最後に、[端末の向き](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)や[位置情報](/ja/docs/Web/API/Geolocation_API)など、モバイル端末が提供する新しい可能性の利点を活用することができます。

## クロスブラウザー開発

### クロスブラウザーコードを書く

様々なモバイル端末で受け入れられ動作するウェブサイトを作成するには、以下のことが必要です。

- ベンダー接頭辞のついた CSS プロパティなど、ブラウザーに依存した機能を使用することを避けるようにしてください。
- これらの機能に対応していないブラウザーでは、コンテンツが使用できる限り、ベンダー接頭辞付きの代替手段を提供しないでください。`-webkit-border-radius` のようなベンダー接頭辞つきプロパティは、現代の標準に対応していない古いブラウザーではパフォーマンスに悪影響を及ぼします。
- パフォーマンスを損なわないように代替手段を用いて新機能を使用するには、現在のブラウザーを対象としたスタイルを設定し、 [`@supports`](/ja/docs/Web/CSS/@supports) 機能クエリーを使用して、最新の CSS を対応するブラウザーのために使用するようにしましょう。

この [Gecko 固有のプロパティの一覧](/ja/docs/Web/CSS/Mozilla_Extensions)と、この [WebKit 固有のプロパティの一覧](/ja/docs/Web/CSS/WebKit_Extensions)、そして Peter Beverloo の [table of vendor-specific properties](https://peter.sh/experiments/vendor-prefixed-css-property-overview/) を確認してください。

### ユーザーエージェントの推測に注意

以上のような手法を使用して、ウェブサイトが画面の大きさやタッチ画面などといった特定の端末特性を検出し、それに適応することが望ましい形です。しかし、これは非現実的である場合があり、ウェブサイトがブラウザーのユーザーエージェント文字列を解析して、デスクトップ、タブレット、携帯電話を区別し、端末ごとに異なるコンテンツを提供することに手を出しがちです。

これを行う場合は、アルゴリズムが正しく、特定のブラウザーのユーザーエージェント文字列を理解していないために、間違った種類のコンテンツをデバイスに提供していないことを確認してください。[ユーザーエージェント文字列を使用して端末の種類を決定するガイド](/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent#モバイルか、タブレットか、デスクトップか)を参照してください。

### 複数のブラウザーでのテスト

ウェブサイトを複数のブラウザーでテストしてください。これは複数のプラットフォームでテストをするということです。 — 少なくとも iOS と Android です。

- iPhone のモバイル Safari をテストするには、 [iOS シミュレーター](https://developer.apple.com/devcenter/ios/index.action)を使用します
- Opera や Firefox は [Android SDK](https://developer.android.com/studio#command-tools) でテストします。これらの詳しい操作方法は、 [running Firefox for Android using the Android emulator](https://wiki.mozilla.org/Mobile/Fennec/Android/Emulator) を参照してください。
