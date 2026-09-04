---
title: プライバシーサンドボックスの登録
short-title: 登録
slug: orphaned/Web/Privacy/Guides/Privacy_sandbox/Enrollment
original_slug: Web/Privacy/Guides/Privacy_sandbox/Enrollment
l10n:
  sourceCommit: 923adb616baa87402ca965ebd18a73380cc84d27
---

> [!WARNING]
> この登録プロセスを必要とする機能の一部については、現在、1 社以上のブラウザベンダーが反対しています。
> 詳細については、各 API のエントリーポイントを参照してください。

一部のプライバシーサンドボックス機能を利用するには、ブラウザー側で開発者が**登録**手続きを完了する必要があります。

登録は、プライバシーサンドボックス機能を呼び出すエンティティを検証し、それらの機能を適切に設定・利用するために必要な開発者固有のデータを収集するための仕組みを提供します。登録プロセスにより、誰がデータを収集しているかについて透明性を確保し、意図した以上のデータを収集するために機能を悪用しようとする試みを抑制することで、各機能内で適用される構造的な制限に加えて、さらなる保護層が追加されます。

その目的は、登録を完了した各企業に関する情報を公開し、監査可能な透明性を確保することにあります。

## 登録が必要な機能

以下の機能を利用するには、登録が必要です。

- [帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API) {{deprecated_inline}}
- [フェンスフレーム API](/ja/docs/Web/API/Fenced_frame_API)
- 保護オーディエンス API
- [共有ストレージ API](/ja/docs/Web/API/Shared_Storage_API) {{deprecated_inline}}
- [トピック API](/ja/docs/Web/API/Topics_API) {{deprecated_inline}}

各機能のドキュメントには、登録が完了しなかった場合にどのサブ機能がどのように機能しなくなるかについて、より詳細な情報が記載されています。

## ブラウザー別の登録方法

### Chrome

- **手順**: [Enroll for the Privacy Sandbox](https://github.com/privacysandbox/attestation/blob/main/how-to-enroll.md).
- **テスト**: プライバシーサンドボックス機能をローカル環境でテストするために、登録を行う必要はありません。ローカルでのテストを有効にするには、開発者向けフラグ `chrome://flags/#privacy-sandbox-enrollment-overrides` を有効にしてください。

## 関連情報

- [プライバシーサンドボックス](https://privacysandbox.google.com/) - privacysandbox.google.com
