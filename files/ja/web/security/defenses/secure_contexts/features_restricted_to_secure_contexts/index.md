---
title: 保護されたコンテキストに制限されている機能
slug: Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts
original_slug: Web/Security/Secure_Contexts/features_restricted_to_secure_contexts
l10n:
  sourceCommit: dea173f1ffb3e6bef851f2e328cf7562f1ef78ce
---

{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}

このリファレンスは、保護されたコンテキストでのみ使用できるウェブプラットフォーム機能の一覧です — 定義や詳細については、[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)を参照してください。

## 保護されたコンテキストでのみ使用できる現在の機能

この節では、保護されたコンテキストでのみ利用できる API の一覧示します。

- [非同期クリップボード API](/ja/docs/Web/API/Clipboard)
- {{domxref("Audio Output Devices API", "オーディオ出力機器 API", "", "nocode")}}
- {{domxref("Background Fetch API", "バックグラウンドフェッチ API", "", "nocode")}}
- {{domxref("Background Synchronization API", "バックグラウンド同期 API", "", "nocode")}}
- {{domxref("Badging API", "バッジ API", "", "nocode")}}
- {{domxref("Barcode Detection API", "バーコード検出 API", "", "nocode")}}
- {{domxref("Battery Status API", "バッテリー状態 API", "", "nocode")}}
- [`Cache-Control: immutable`](/ja/docs/Web/HTTP/Reference/Headers/Cache-Control)
- {{domxref("Contact Picker API", "連絡先ピッカー API", "", "nocode")}}
- {{domxref("Content Index API", "コンテンツインデックス API", "", "nocode")}}
- {{domxref("Cookie Store API", "クッキーストア API", "", "nocode")}}
- [資格情報管理 API](/ja/docs/Web/API/Credential_Management_API)
- {{domxref("Device Memory API", "端末メモリー API", "", "nocode")}}
- [Device Orientation / Device Motion](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
- {{domxref("Document Picture-in-Picture API", "文書ピクチャインピクチャ API", "", "nocode")}}
- [EyeDropper API](/ja/docs/Web/API/EyeDropper)
- [Encrypted Media Extensions](/ja/docs/Web/API/Encrypted_Media_Extensions_API)
- {{domxref("File System API", "ファイルシステム API", "", "nocode")}}
- [Generic Sensor API](https://w3c.github.io/sensors/)
- {{domxref("Gamepad API", "ゲームパッド API", "", "nocode")}}
- {{domxref("Geolocation API", "位置情報 API", "", "nocode")}}
- {{domxref("Idle Detection API", "アイドル検出 API", "", "nocode")}}
- {{domxref("Keyboard API", "キーボード API", "", "nocode")}}
- {{domxref("Local Font Access API", "ローカルファイルアクセス API", "", "nocode")}}
- [通知 API](/ja/docs/Web/API/Notifications_API)
- {{domxref("Payment Handler API", "決済ハンドラー API", "", "nocode")}}
- [決済リクエスト API](/ja/docs/Web/API/Payment_Request_API)
- [プレゼンテーション API](/ja/docs/Web/API/Presentation_API)
- [プッシュ API](/ja/docs/Web/API/Push_API)
- [報告 API](/ja/docs/Web/API/Reporting_API)
- {{domxref("Screen Capture API", "画面キャプチャ API", "", "nocode")}}
- {{domxref("Screen Wake Lock API", "", "", "nocode")}}
- [サービスワーカー](/ja/docs/Web/API/Service_Worker_API)
- {{domxref("Shared Storage API", "共有ストレージ API", "", "nocode")}}
- [ストレージ API](/ja/docs/Web/API/Storage_API)
- {{domxref("VirtualKeyboard API", "仮想キーボード API", "", "nocode")}}
- [ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API)
- [ウェブブルートゥース](/ja/docs/Web/API/Web_Bluetooth_API)
- {{domxref("Web Locks API", "ウェブロック API", "", "nocode")}}
- [ウェブ MIDI](/ja/docs/Web/API/Web_MIDI_API)
- {{domxref("Web NFC API", "ウェブ NFC API", "", "nocode")}}
- [Web Crypto API](/ja/docs/Web/API/Web_Crypto_API)
- {{domxref("WebCodecs API", "", "", "nocode")}}
- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
- {{domxref("WebHID API", "", "", "nocode")}}
- {{domxref("WebOTP API", "", "", "nocode")}}
- {{domxref("WebTransport API", "", "", "nocode")}}
- {{domxref("WebUSB API", "", "", "nocode")}}
- {{domxref("WebXR Device API", "", "", "nocode")}}
- [ウェブ共有 API](/ja/docs/Web/API/Web_Share_API)
- {{domxref("Window Management API", "ウィンドウ管理", "", "nocode")}}

さらに、次のメソッドは、(関連付けられた API がそうでない場合でも) 保護されたコンテキストが要求されます。

- [`MediaDevices.getUserMedia()`](/ja/docs/Web/API/MediaDevices/getUserMedia)
- [`Navigator.registerProtocolHandler()`](/ja/docs/Web/API/Navigator/registerProtocolHandler)

## 関連情報

- [保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)
- ["secure context" query on Chrome Platform Status](https://www.chromestatus.com/features#secure%20context)
