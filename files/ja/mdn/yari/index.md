---
title: 'Yari: MDN のレンダリングプラットフォーム'
slug: MDN/Yari
---

{{MDNSidebar}}

Yari は MDN Web Docs をレンダリングするコードです。 [JAMStack](https://jamstack.org/) アプローチを採用しており、 GitHub リポジトリーにフラットなソースファイルとして格納されている MDN のコンテンツ (前付けやマクロ呼び出しを含む) を、静的な HTML ファイルにレンダリングし、それらを可能な限り迅速かつ効率的に提供しています。

現在、 MDN のコアプラットフォームは二つの GitHub リポジトリーで構成されています。

- [MDN コンテンツリポジトリー](https://github.com/mdn/content) — ここには MDN コンテンツが、貢献者の履歴やリダイレクトなどの情報とともに保存されています。 MDN のコンテンツに協力したい方は、このリポジトリーを参照してください。
- [Yari プロジェクト](https://github.com/mdn/yari) — これは MDN のコンテンツをレンダリングして表示するプラットフォームコードであり、さらにユーザーアカウントなどの関連サービスを扱います。 MDN プラットフォームに協力したい方は、このリポジトリーを参照してください。

## 関連情報

- [MDN Web Docs evolves! Lowdown on the upcoming new platform](https://hacks.mozilla.org/2020/10/mdn-web-docs-evolves-lowdown-on-the-upcoming-new-platform/) — プラットフォーム変更の必要性と新しいアーキテクチャについての説明 (英語)。
- As needed, take a deep dive into the [Welcome Yari: MDN Web Docs has a new platform](https://hacks.mozilla.org/2020/12/welcome-yari-mdn-web-docs-has-a-new-platform/) — 新しいプラットフォームの立ち上げの正式なアナウンス (英語)。
