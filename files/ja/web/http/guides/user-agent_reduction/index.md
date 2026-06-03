---
title: User-Agent の削減
slug: Web/HTTP/Guides/User-agent_reduction
l10n:
  sourceCommit: 2ab902d9eec2f5a93d1f666234371ca77e93c470
---

**User-Agent の削減**は、ユーザーエージェント (UA) 文字列で指定されるプライバシーに配慮すべき情報の量を縮小するための、広く受け入れられているブラウザーの取り組みです。

この記事では、User-Agent の削減によって生じる UA 文字列の違いを示し、必要に応じて編集済みと追加の UA 情報の両方にアクセスする方法を説明します。

## 背景

ユーザーエージェント (UA) 文字列は、HTTP の {{httpheader("User-Agent")}} ヘッダーおよび{{domxref("Navigator.userAgent")}}、{{domxref("Navigator.appVersion")}}、{{domxref("Navigator.platform")}} などの関連 API 機能で利用できますが、サーバーやネットワークピア、リクエスト元の{{Glossary("user agent", "ユーザーエージェント")}}のアプリケーション、オペレーティングシステム、ベンダー、バージョンを識別することができます。

### ブラウザーの検出

理論的には UA 文字列はブラウザーの検出や、ブラウザー固有のバグや機能サポート不足を回避するためのコード提供に有用です。しかし、これは**信頼性が低い**ため**推奨されません**。

- 将来のブラウザーはバグを修正し新しい機能のサポートを追加するため、ブラウザー検出コードは定期的に更新して、実際にテスト対象の機能に対応しているブラウザーを締め出さないようにする必要があります。[機能検出](/ja/docs/Learn_web_development/Extensions/Testing/Feature_detection)の方がはるかに信頼性の高い戦略です。
- このプロパティで通知されるユーザーエージェントが、本当にサイトが読み込まれた際のエージェントである保証は一切ありません。ブラウザーベンダーは基本的に UA 文字列を自由に操作でき、過去には一部のウェブサイトから締め出されないよう、こうしたプロパティから虚偽の値を返すこともありました。
- 一部のブラウザーでは、ユーザーが希望する場合にこのフィールドの値を変更することが可能です（**UA 偽装**）。

次の方法は、バグやブラウザーの対応の違いを回避するための、より信頼性の高い戦略です。

- [機能検出](/ja/docs/Learn_web_development/Extensions/Testing/Feature_detection): ブラウザーのバージョンではなく、機能の対応状況を検出すること。
- [プログレッシブエンハンスメント](/ja/docs/Glossary/Progressive_Enhancement): 可能な限り多くのユーザーに必須のコンテンツと機能の基盤を提供しつつ、必要なコードをすべて実行できるブラウザーには可能な限り最高の体験を届けること。

また、ブラウザーごとに出力するコンテンツを変えることが一般的に好ましくない理由については、[ユーザーエージェントを用いたブラウザー検出](/ja/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent)も参照してください。

### プライバシーの考慮事項

さらに、UA 文字列で公開される情報は、過去には[プライバシー](/ja/docs/Web/Privacy)上の懸念を発生させてきました。具体的なユーザーエージェントを識別するために使用でき、したがって{{glossary("fingerprinting", "フィンガープリンティング")}}に使用される可能性があるためです。

こうした不安を軽減するため、[対応しているブラウザー](/ja/docs/Web/HTTP/Reference/Headers/User-Agent#ブラウザーの互換性)はユーザーエージェント削減を実装しています。これは `User-agent` ヘッダーと関連 API 機能を更新し、縮小された情報セットを提供するものです。

## 削減後の UA 文字列の変化

[対応しているブラウザー](/ja/docs/Web/HTTP/Reference/Headers/User-Agent#ブラウザーの互換性)において、User-Agent 削減処理は UA 文字列から 3 つの情報を除去します。具体的には、正確なプラットフォーム/OS バージョン、端末モデル、およびマイナーなブラウザーバージョンです。

具体例を見てみましょう。これにより、実際の様子がわかります。以前、Android 上で動作する Chrome の UA 文字列は次のようなものだったかもしれません。

```plain
Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.12.45 Mobile Safari/537.36
```

User-Agent の削減アップデート後、次のようになりました。

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

以下の節では、ユーザーエージェントのそれぞれの文字列変更について詳細を提供します。

### プラットフォーム/OS バージョンと端末モデル

プラットフォームのバージョンと端末のモデルは常に固定値で表されます。

- `Android 10; K` - Android.
- `Macintosh; Intel Mac OS X 10_15_7` - macOS.
- `Windows NT 10.0; Win64; x64` - Windows.
- `X11; CrOS x86_64 14541.0.0` - ChromeOS.
- `X11; Linux x86_64` - Linux.

### ブラウザーのマイナーバージョン

メジャーブラウザーのバージョン番号は正しく表示されますが、マイナーバージョン番号は常にゼロ (`0.0.0`) として示されます。

## クライアントヒントによる UA 情報のリクエスト

詳細な UA 文字列データに依存するコードがまだ存在する可能性があります。これらは機能検出やプログレッシブエンハンスメントへの変換が不可能です。例としては、詳細なログ記録、不正防止対策、あるいはユーザーの端末タイプに基づいて異なるコンテンツを提供するソフトウェアヘルプサイトなどが挙げられます。

この場合でも、[`Sec-CH-UA-*`](/ja/docs/Web/HTTP/Reference/Headers#ユーザーエージェントクライアントヒント) ヘッダー（**ユーザーエージェントクライアントヒント** とも呼ばれる）を介して詳細な UA 文字列データにアクセスできます。これらのヘッダーは、より安全でプライバシーを保護する情報送信手段を提供します。なぜなら、サーバーが送信したい情報を選択的に指定する必要があるためです（`User-Agent` 文字列を通じて常に送信されるのとは異なります）。また、より幅広い情報へのアクセスも可能にします。

詳しい情報は、[ユーザーエージェントクライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)を参照してください。

## JavaScript からのクライアントヒントへのアクセス

[ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API) を使用すると、JavaScript でクライアントヒント情報にアクセスすることができます。{{domxref("Navigator.userAgentData")}} プロパティは、低エントロピーのクライアントヒントを表すプロパティが含まれている {{domxref("NavigatorUAData")}} オブジェクトへのアクセスを指定します。

`Sec-CH-UA-Model` や `Sec-CH-UA-Form-Factors` などの高エントロピーヒントにアクセスするには、{{domxref("NavigatorUAData.getHighEntropyValues()")}} メソッドを使用する必要があります。

詳しい情報は、[ユーザーエージェントクライアントヒント API](/ja/docs/Web/API/User-Agent_Client_Hints_API) を参照してください。

## 関連情報

- {{httpheader("User-Agent")}}
- {{domxref("Navigator.userAgent")}}、{{domxref("Navigator.appVersion")}}、{{domxref("Navigator.platform")}}
- [HTTP クライアントヒント](/ja/docs/Web/HTTP/Guides/Client_hints)
- [機能検出の実装](/ja/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [https://developer.chrome.com/docs/privacy-security/user-agent-client-hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) - developer.chrome.com (2020)
